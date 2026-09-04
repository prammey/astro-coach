// Repairs media links in the MCQ data files.
//
// Four classes of repair, all keyed off the authoritative file-naming
// convention <competition>-<year>-<exam>-q<N>[--solution].<ext>:
//   A) question points at a DIFFERENT exam's image -> relink to its own
//   B) malformed asset path (wrong prefix) -> rewrite to /mcq-images/...
//   C) marked "required-missing" although the file is already in the repo -> link it
//   D) points at a wrong image and no correct file exists -> back to required-missing
//      (showing no figure is honest; showing another exam's figure is not)
//
// Run with: node scripts/fix-media-links.mjs [--write]

import fs from 'fs';
import path from 'path';
import vm from 'vm';

const WRITE = process.argv.includes('--write');
const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'src/data/mcq');
const PUBLIC_IMG_DIR = path.join(ROOT, 'public/mcq-images');

const FILES = [
  ['usaaao_mcqs.ts', 'usaaaoMcqs'],
  ['iaac_mcqs.ts', 'iaacMcqs'],
  ['baao_mcqs.ts', 'baaoMcqs'],
];

const slugify = (t) =>
  String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-+|-+$)/g, '');

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (!e.name.startsWith('.')) out.push(full);
  }
  return out;
}

// stem (normalising -solution / --solution) -> web path
const imagesByStem = new Map();
for (const f of walk(PUBLIC_IMG_DIR)) {
  const webPath = '/mcq-images/' + path.relative(PUBLIC_IMG_DIR, f).split(path.sep).join('/');
  const key = path
    .basename(f)
    .replace(/\.(png|jpg|jpeg|gif|webp)$/i, '')
    .replace(/-{1,2}solution$/i, '--solution');
  if (!imagesByStem.has(key)) imagesByStem.set(key, webPath);
}

function expectedStem(q, kind) {
  const comp = slugify(q.competition);
  const exam = comp === 'baao' ? 'astro-challenge' : slugify(q.examName);
  const base = `${comp}-${q.year}-${exam}-q${q.questionNumber}`;
  return kind === 'solution' ? `${base}--solution` : base;
}

// Scans forward from `openIdx` (index of "{") to its matching "}",
// skipping over string literals so braces inside strings don't confuse it.
function matchBrace(text, openIdx) {
  let depth = 0;
  let quote = null;
  for (let i = openIdx; i < text.length; i++) {
    const ch = text[i];
    if (quote) {
      if (ch === '\\') i++;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') quote = ch;
    else if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  throw new Error('unbalanced braces');
}

// Splits the exported array's body into the text spans of its top-level objects.
function objectSpans(text, exportName) {
  const arrStart = text.indexOf('[', text.indexOf(`export const ${exportName}`));
  const spans = [];
  let i = arrStart + 1;
  let depth = 0;
  let quote = null;
  let start = -1;
  for (; i < text.length; i++) {
    const ch = text[i];
    if (quote) {
      if (ch === '\\') i++;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') quote = ch;
    else if (ch === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0) {
        spans.push([start, i]);
        start = -1;
      }
    } else if (ch === ']' && depth === 0) break;
  }
  return spans;
}

function evalObject(src) {
  const ctx = { RESULT: null };
  vm.createContext(ctx);
  vm.runInContext('RESULT = ' + src.replace(/\bas const\b/g, ''), ctx);
  return ctx.RESULT;
}

// Replaces the body of `key: { ... }` inside one question's source text.
function replaceMediaBlock(objSrc, key, newBody) {
  const keyRe = new RegExp(`(["']?)${key}\\1\\s*:\\s*\\{`);
  const m = keyRe.exec(objSrc);
  if (!m) return null;
  const openIdx = objSrc.indexOf('{', m.index + m[0].length - 1);
  const closeIdx = matchBrace(objSrc, openIdx);
  return objSrc.slice(0, openIdx) + newBody + objSrc.slice(closeIdx + 1);
}

const completeBody = (asset) => `{\n      status: "complete",\n      assets: ["${asset}"],\n    }`;
const missingBody = () => `{\n      status: "required-missing",\n      assets: [],\n    }`;

const changes = { A: [], B: [], C: [], D: [] };

for (const [fileName, exportName] of FILES) {
  const filePath = path.join(DATA_DIR, fileName);
  let text = fs.readFileSync(filePath, 'utf8');
  const spans = objectSpans(text, exportName);

  // Rewrite from the end so earlier spans keep their offsets.
  for (let s = spans.length - 1; s >= 0; s--) {
    const [start, end] = spans[s];
    let objSrc = text.slice(start, end + 1);
    const q = evalObject(objSrc);
    if (!q || !q.competition) continue;
    const id = `${slugify(q.competition)}-${q.year}-${slugify(q.examName)}-q${q.questionNumber}`;
    let touched = false;

    for (const [kind, key] of [
      ['question', 'questionMedia'],
      ['solution', 'solutionMedia'],
    ]) {
      const media = q[key];
      if (!media) continue;
      const want = expectedStem(q, kind);
      const correctPath = imagesByStem.get(want);

      if (media.status === 'required-missing') {
        if (correctPath) {
          const next = replaceMediaBlock(objSrc, key, completeBody(correctPath));
          if (next) {
            objSrc = next;
            touched = true;
            changes.C.push(`${id} [${kind}] -> ${correctPath}`);
          }
        }
        continue;
      }

      const asset = (media.assets || [])[0];
      if (typeof asset !== 'string') continue;
      const currentStem = path
        .basename(asset)
        .replace(/\.(png|jpg|jpeg|gif|webp)$/i, '')
        .replace(/-{1,2}solution$/i, '--solution');
      const fileExists =
        asset.startsWith('/mcq-images/') &&
        fs.existsSync(path.join(PUBLIC_IMG_DIR, asset.replace('/mcq-images/', '')));

      if (currentStem === want && fileExists) continue; // already correct

      if (currentStem === want && !fileExists && correctPath) {
        const next = replaceMediaBlock(objSrc, key, completeBody(correctPath));
        if (next) {
          objSrc = next;
          touched = true;
          changes.B.push(`${id} [${kind}] ${asset} -> ${correctPath}`);
        }
        continue;
      }

      if (correctPath) {
        const next = replaceMediaBlock(objSrc, key, completeBody(correctPath));
        if (next) {
          objSrc = next;
          touched = true;
          changes.A.push(`${id} [${kind}] ${asset} -> ${correctPath}`);
        }
      } else {
        const next = replaceMediaBlock(objSrc, key, missingBody());
        if (next) {
          objSrc = next;
          touched = true;
          changes.D.push(`${id} [${kind}] removed wrong image ${asset}`);
        }
      }
    }

    if (touched) text = text.slice(0, start) + objSrc + text.slice(end + 1);
  }

  if (WRITE) fs.writeFileSync(filePath, text);
}

const show = (t, arr) => {
  console.log(`\n${t}: ${arr.length}`);
  arr.forEach((l) => console.log('  ' + l));
};
show('A) Relinked to the correct exam figure', changes.A);
show('B) Fixed malformed asset paths', changes.B);
show('C) Linked figures that were already in the repo', changes.C);
show('D) Reverted to required-missing (no correct file exists)', changes.D);
console.log(
  `\nTotal: ${changes.A.length + changes.B.length + changes.C.length + changes.D.length} media fields repaired.` +
    (WRITE ? ' Files written.' : ' DRY RUN — rerun with --write to apply.')
);
