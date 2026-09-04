// Thorough audit of the MCQ question bank.
// Checks media integrity (missing figures, orphan images, mismatched links)
// and data integrity (answer keys, choices, source metadata).
// Run with: node scripts/audit-questions.mjs

import fs from 'fs';
import path from 'path';
import vm from 'vm';

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'src/data/mcq');
const PUBLIC_IMG_DIR = path.join(ROOT, 'public/mcq-images');
const SRC_IMG_DIR = path.join(DATA_DIR, 'images');

// Loads one of the raw data files by stripping the TS-only bits and
// evaluating the remaining plain-JS array literal.
function loadRaw(fileName, exportName) {
  const source = fs.readFileSync(path.join(DATA_DIR, fileName), 'utf8');
  const js = source
    .replace(new RegExp(`export\\s+const\\s+${exportName}\\s*=`), 'RESULT =')
    .replace(/\bas const\b/g, '');
  const context = { RESULT: null };
  vm.createContext(context);
  vm.runInContext(js, context);
  return context.RESULT;
}

const usaaao = loadRaw('usaaao_mcqs.ts', 'usaaaoMcqs');
const iaac = loadRaw('iaac_mcqs.ts', 'iaacMcqs');
const baao = loadRaw('baao_mcqs.ts', 'baaoMcqs');
const all = [...usaaao, ...iaac, ...baao];

const slugify = (t) =>
  String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-+|-+$)/g, '');
const buildId = (q) =>
  `${slugify(q.competition)}-${q.year}-${slugify(q.examName)}-q${q.questionNumber}`;

// ---- Collect every file on disk -------------------------------------------
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (!entry.name.startsWith('.')) out.push(full);
  }
  return out;
}

const publicImages = walk(PUBLIC_IMG_DIR).map((f) =>
  '/mcq-images/' + path.relative(PUBLIC_IMG_DIR, f).split(path.sep).join('/')
);
const srcImages = walk(SRC_IMG_DIR).map((f) =>
  path.relative(SRC_IMG_DIR, f).split(path.sep).join('/')
);
const publicImagesRel = publicImages.map((p) => p.replace('/mcq-images/', ''));

// ---- Findings --------------------------------------------------------------
const findings = {
  brokenAssetPaths: [],
  missingQuestionMedia: [],
  missingSolutionMedia: [],
  orphanImages: [],
  filenameMismatches: [],
  figureLanguageNoMedia: [],
  duplicateIds: [],
  badCorrectAnswer: [],
  badChoices: [],
  missingMetadata: [],
  emptyExplanation: [],
  srcPublicDrift: [],
  stalePdfNote: [],
  impliesFigureNoMediaField: [],
};

// Deliberate exceptions: the source exam prints one figure that serves two
// consecutive questions, so the second legitimately reuses the first's image.
const SHARED_FIGURE_OK = new Set([
  'usaaao-2023-first-round-q30|/mcq-images/usaaao-images/2023-usaaao-first-round-images/usaaao-2023-first-round-q29.png',
  'usaaao-2022-first-round-q18|/mcq-images/usaaao-images/2022-usaaao-first-round-images/usaaao-2022-first-round-q17.png',
]);

const referenced = new Set();
const idCounts = new Map();

for (const q of all) {
  const id = buildId(q);
  idCounts.set(id, (idCounts.get(id) || 0) + 1);

  // --- media checks ---
  for (const [kind, media] of [
    ['question', q.questionMedia],
    ['solution', q.solutionMedia],
  ]) {
    if (!media) continue;
    if (media.status === 'required-missing') {
      (kind === 'question'
        ? findings.missingQuestionMedia
        : findings.missingSolutionMedia
      ).push(id);
      continue;
    }
    if (media.status === 'complete') {
      const assets = media.assets || [];
      if (assets.length === 0) {
        findings.brokenAssetPaths.push(`${id} [${kind}]: status=complete but no assets listed`);
      }
      for (const asset of assets) {
        if (typeof asset !== 'string') {
          findings.brokenAssetPaths.push(`${id} [${kind}]: non-string asset ${JSON.stringify(asset)}`);
          continue;
        }
        referenced.add(asset);
        const rel = asset.replace(/^\/mcq-images\//, '');
        const onDisk = path.join(PUBLIC_IMG_DIR, rel);
        if (!fs.existsSync(onDisk)) {
          findings.brokenAssetPaths.push(`${id} [${kind}]: file not found -> ${asset}`);
        }
        // Does the filename's question number match the question it's attached to?
        const m = path.basename(asset).match(/q(\d+)/i);
        if (SHARED_FIGURE_OK.has(`${id}|${asset}`)) {
          // intentionally shared with a neighbouring question
        } else if (m && Number(m[1]) !== Number(q.questionNumber)) {
          findings.filenameMismatches.push(
            `${id} [${kind}]: filename says q${m[1]} -> ${asset}`
          );
        }
        // A "--solution"/"-solution" file attached as question media (or vice versa)
        const isSolutionFile = /-{1,2}solution/i.test(path.basename(asset));
        if (isSolutionFile && kind === 'question') {
          findings.filenameMismatches.push(
            `${id}: solution image used as QUESTION media -> ${asset}`
          );
        }
        if (!isSolutionFile && kind === 'solution') {
          findings.filenameMismatches.push(
            `${id}: question image used as SOLUTION media -> ${asset}`
          );
        }
      }
    }
  }

  // Question text implies a figure but no question media is attached at all
  const figureWords =
    /\b(figure|diagram|image below|image above|shown below|shown above|graph below|the graph|the plot|the chart|the picture|following diagram|below shows|above shows|the image)\b/i;
  if (!q.questionMedia && figureWords.test(q.questionText || '')) {
    findings.figureLanguageNoMedia.push(`${id}: "${(q.questionText || '').slice(0, 110)}..."`);
  }

  // Refers to a figure as already present ("the above binary star system",
  // "the supplied light curve") but declares no questionMedia field at all,
  // so nothing renders and nothing is flagged as missing either.
  const assumesFigurePresent =
    /\b(the above|shown above|as shown|the supplied|supplied (image|light curve|figure)|pictured)\b/i;
  if (!q.questionMedia && assumesFigurePresent.test(q.questionText || '')) {
    findings.impliesFigureNoMediaField.push(
      `${id}: "${(q.questionText || '').slice(0, 110)}..."`
    );
  }

  // A leftover "see the official exam PDF" pointer on a question whose
  // figure now renders inline — it sends learners off to hunt for something
  // already on screen.
  const pdfPointer = /\[[^\]]*(required|see page|official exam pdf|visual plots)[^\]]*\]/i;
  const hasFigure = q.questionMedia?.status === 'complete';
  if (hasFigure && pdfPointer.test(q.questionText || '')) {
    findings.stalePdfNote.push(`${id}: has figure but text still points at the PDF`);
  }
  const pdfChoice = (q.choices || []).find((c) => /official pdf|exam pdf/i.test(c.text));
  if (hasFigure && pdfChoice) {
    findings.stalePdfNote.push(`${id}: choice "${pdfChoice.text}" still cites the PDF`);
  }

  // --- data integrity ---
  const labels = (q.choices || []).map((c) => c.label);
  if (!q.choices || q.choices.length < 2) {
    findings.badChoices.push(`${id}: only ${q.choices ? q.choices.length : 0} choices`);
  } else {
    if (new Set(labels).size !== labels.length) {
      findings.badChoices.push(`${id}: duplicate choice labels [${labels.join(', ')}]`);
    }
    for (const c of q.choices) {
      if (!c.text || !String(c.text).trim()) {
        findings.badChoices.push(`${id}: empty text for choice ${c.label}`);
      }
    }
  }
  if (!q.correctAnswer) {
    findings.badCorrectAnswer.push(`${id}: missing correctAnswer`);
  } else if (labels.length && !labels.includes(q.correctAnswer)) {
    findings.badCorrectAnswer.push(
      `${id}: correctAnswer "${q.correctAnswer}" not in [${labels.join(', ')}]`
    );
  }
  if (!q.explanation || !String(q.explanation).trim()) {
    findings.emptyExplanation.push(id);
  }
  for (const field of [
    'questionText',
    'sourceUrl',
    'pdfUrl',
    'attributionText',
    'permissionStatus',
    'topic',
    'difficulty',
  ]) {
    if (!q[field] || !String(q[field]).trim()) {
      findings.missingMetadata.push(`${id}: missing ${field}`);
    }
  }
}

for (const [id, count] of idCounts) {
  if (count > 1) findings.duplicateIds.push(`${id} appears ${count}x`);
}

// Images on disk that no question points at
for (const img of publicImages) {
  if (!referenced.has(img)) findings.orphanImages.push(img);
}

// Drift between the src/ copy and the public/ copy of the image library
const publicSet = new Set(publicImagesRel);
const srcSet = new Set(srcImages);
for (const f of srcSet) if (!publicSet.has(f)) findings.srcPublicDrift.push(`only in src/: ${f}`);
for (const f of publicSet) if (!srcSet.has(f)) findings.srcPublicDrift.push(`only in public/: ${f}`);

// ---- Report ----------------------------------------------------------------
const section = (title, items, { showAll = false } = {}) => {
  console.log(`\n${'='.repeat(72)}\n${title}: ${items.length}\n${'='.repeat(72)}`);
  const shown = showAll ? items : items.slice(0, 40);
  shown.forEach((i) => console.log('  ' + i));
  if (items.length > shown.length) console.log(`  ... and ${items.length - shown.length} more`);
};

console.log(`Questions loaded: USAAAO=${usaaao.length} IAAC=${iaac.length} BAAO=${baao.length} TOTAL=${all.length}`);
console.log(`Images in public/mcq-images: ${publicImages.length}`);
console.log(`Images referenced by questions: ${referenced.size}`);

section('BROKEN ASSET PATHS (referenced file missing on disk)', findings.brokenAssetPaths, { showAll: true });
section('FILENAME / QUESTION MISMATCHES', findings.filenameMismatches, { showAll: true });
section('ORPHAN IMAGES (on disk, not referenced by any question)', findings.orphanImages, { showAll: true });
section('QUESTIONS MISSING REQUIRED QUESTION FIGURE', findings.missingQuestionMedia, { showAll: true });
section('QUESTIONS MISSING REQUIRED SOLUTION FIGURE', findings.missingSolutionMedia, { showAll: true });
section('FIGURE LANGUAGE BUT NO QUESTION MEDIA AT ALL', findings.figureLanguageNoMedia, { showAll: true });
section('ASSUMES A FIGURE IS PRESENT BUT DECLARES NO MEDIA FIELD', findings.impliesFigureNoMediaField, { showAll: true });
section('STALE "SEE THE PDF" POINTER (figure already renders)', findings.stalePdfNote, { showAll: true });
section('DUPLICATE QUESTION IDs', findings.duplicateIds, { showAll: true });
section('BAD / MISSING CORRECT ANSWER', findings.badCorrectAnswer, { showAll: true });
section('BAD CHOICES', findings.badChoices, { showAll: true });
section('EMPTY EXPLANATION', findings.emptyExplanation, { showAll: true });
section('MISSING SOURCE METADATA', findings.missingMetadata, { showAll: true });
section('SRC/PUBLIC IMAGE LIBRARY DRIFT', findings.srcPublicDrift, { showAll: true });
