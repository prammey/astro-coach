// Cross-references questions against the images that exist on disk, matching
// by the naming convention <competition>-<year>-<exam>-q<N>[--solution].<ext>.
// Answers: for every question that is mis-linked or flagged missing, does the
// correctly-named image already exist in the repo?

import fs from 'fs';
import path from 'path';
import vm from 'vm';

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'src/data/mcq');
const PUBLIC_IMG_DIR = path.join(ROOT, 'public/mcq-images');

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

const all = [
  ...loadRaw('usaaao_mcqs.ts', 'usaaaoMcqs'),
  ...loadRaw('iaac_mcqs.ts', 'iaacMcqs'),
  ...loadRaw('baao_mcqs.ts', 'baaoMcqs'),
];

const slugify = (t) =>
  String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-+|-+$)/g, '');
const buildId = (q) =>
  `${slugify(q.competition)}-${q.year}-${slugify(q.examName)}-q${q.questionNumber}`;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (!e.name.startsWith('.')) out.push(full);
  }
  return out;
}

// Index every image on disk by its basename stem (without extension).
const imagesByStem = new Map();
for (const f of walk(PUBLIC_IMG_DIR)) {
  const webPath = '/mcq-images/' + path.relative(PUBLIC_IMG_DIR, f).split(path.sep).join('/');
  const stem = path.basename(f).replace(/\.(png|jpg|jpeg|gif|webp)$/i, '');
  // normalise "-solution" and "--solution" to one form
  const key = stem.replace(/-{1,2}solution$/i, '--solution');
  if (!imagesByStem.has(key)) imagesByStem.set(key, []);
  imagesByStem.get(key).push(webPath);
}

// The file stem a question's image *should* have, per the naming convention.
// BAAO ids use the long exam name but the files use "astro-challenge".
function expectedStem(q, kind) {
  const comp = slugify(q.competition);
  let exam = slugify(q.examName);
  if (comp === 'baao') exam = 'astro-challenge';
  const base = `${comp}-${q.year}-${exam}-q${q.questionNumber}`;
  return kind === 'solution' ? `${base}--solution` : base;
}

const report = { fixableRelink: [], fixablePath: [], fixableMissing: [], stillMissing: [] };

for (const q of all) {
  const id = buildId(q);
  for (const [kind, media] of [
    ['question', q.questionMedia],
    ['solution', q.solutionMedia],
  ]) {
    if (!media) continue;
    const want = expectedStem(q, kind);
    const onDisk = imagesByStem.get(want) || [];

    if (media.status === 'required-missing') {
      if (onDisk.length) {
        report.fixableMissing.push(`${id} [${kind}] flagged MISSING but file exists: ${onDisk.join(', ')}`);
      } else {
        report.stillMissing.push(`${id} [${kind}] genuinely absent (expected ${want}.*)`);
      }
      continue;
    }

    const assets = media.assets || [];
    for (const asset of assets) {
      if (typeof asset !== 'string') continue;
      const currentStem = path
        .basename(asset)
        .replace(/\.(png|jpg|jpeg|gif|webp)$/i, '')
        .replace(/-{1,2}solution$/i, '--solution');
      const fileExists = fs.existsSync(
        path.join(PUBLIC_IMG_DIR, asset.replace(/^\/mcq-images\//, ''))
      );

      if (currentStem === want && fileExists) continue; // correct already

      if (currentStem === want && !fileExists) {
        // right image, malformed path
        report.fixablePath.push(
          `${id} [${kind}] bad path "${asset}" -> ${onDisk.length ? onDisk[0] : 'NO FILE'}`
        );
        continue;
      }

      // linked to a different question's image
      if (onDisk.length) {
        report.fixableRelink.push(
          `${id} [${kind}]\n      currently: ${asset}\n      should be: ${onDisk[0]}`
        );
      } else {
        report.stillMissing.push(
          `${id} [${kind}] linked to wrong image (${asset}) and correct file ${want}.* NOT on disk`
        );
      }
    }
  }
}

const section = (t, items) => {
  console.log(`\n${'='.repeat(74)}\n${t}: ${items.length}\n${'='.repeat(74)}`);
  items.forEach((i) => console.log('  ' + i));
};

section('A) WRONG IMAGE LINKED — correct file exists, safe to relink', report.fixableRelink);
section('B) MALFORMED PATH — correct file exists, just fix the path', report.fixablePath);
section('C) FLAGGED "required-missing" — but the file is already in the repo', report.fixableMissing);
section('D) GENUINELY MISSING — no file in repo, needs sourcing', report.stillMissing);
