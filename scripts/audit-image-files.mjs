// Deeper checks on the image files themselves, beyond whether links resolve.
//
//  - exact-case path match (macOS is case-insensitive, Vercel's Linux is not,
//    so a wrong-case path works locally and 404s in production)
//  - empty or truncated files
//  - real format vs file extension, read from magic bytes
//  - pixel dimensions, to catch anything too small to actually read
//  - duplicate file content under different names
//  - how many questions share each image
//  - questions carrying more than one asset

import fs from 'fs';
import path from 'path';
import vm from 'vm';
import crypto from 'crypto';

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'src/data/mcq');
const PUBLIC_IMG_DIR = path.join(ROOT, 'public/mcq-images');

function load(file, name) {
  const s = fs
    .readFileSync(path.join(DATA_DIR, file), 'utf8')
    .replace(new RegExp(`export\\s+const\\s+${name}\\s*=`), 'RESULT =')
    .replace(/\bas const\b/g, '');
  const c = { RESULT: null };
  vm.createContext(c);
  vm.runInContext(s, c);
  return c.RESULT;
}

const all = [
  ...load('usaaao_mcqs.ts', 'usaaaoMcqs'),
  ...load('iaac_mcqs.ts', 'iaacMcqs'),
  ...load('baao_mcqs.ts', 'baaoMcqs'),
];

const slug = (t) => String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-+|-+$)/g, '');
const idOf = (q) => `${slug(q.competition)}-${q.year}-${slug(q.examName)}-q${q.questionNumber}`;

// Reads intrinsic dimensions straight from the file header.
function imageInfo(buffer) {
  // PNG: 89 50 4E 47, IHDR width/height at bytes 16..24
  if (buffer.slice(0, 4).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47]))) {
    return { format: 'png', width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }
  // JPEG: FF D8, walk the segment markers to a SOF frame
  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length - 9) {
      if (buffer[offset] !== 0xff) {
        offset++;
        continue;
      }
      const marker = buffer[offset + 1];
      const length = buffer.readUInt16BE(offset + 2);
      // SOF0-SOF15, excluding the non-frame markers C4/C8/CC
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return {
          format: 'jpeg',
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
        };
      }
      offset += 2 + length;
    }
    return { format: 'jpeg', width: null, height: null };
  }
  if (buffer.slice(0, 3).toString() === 'GIF') return { format: 'gif', width: null, height: null };
  if (buffer.slice(8, 12).toString() === 'WEBP') return { format: 'webp', width: null, height: null };
  return { format: 'unknown', width: null, height: null };
}

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (!e.name.startsWith('.')) out.push(full);
  }
  return out;
}

const findings = {
  caseMismatch: [],
  emptyOrTiny: [],
  formatMismatch: [],
  tooSmall: [],
  unreadable: [],
  duplicateContent: [],
  multiAsset: [],
};

// Every real path on disk, for exact-case comparison.
const realPaths = new Set(
  walk(PUBLIC_IMG_DIR).map((f) => path.relative(PUBLIC_IMG_DIR, f).split(path.sep).join('/'))
);

const referenceCount = new Map();

for (const q of all) {
  const id = idOf(q);
  for (const [kind, media] of [
    ['question', q.questionMedia],
    ['solution', q.solutionMedia],
  ]) {
    const assets = media?.assets ?? [];
    if (assets.length > 1) {
      findings.multiAsset.push(`${id} [${kind}]: ${assets.length} assets`);
    }
    for (const asset of assets) {
      if (typeof asset !== 'string') continue;
      const rel = asset.replace(/^\/mcq-images\//, '');
      referenceCount.set(asset, (referenceCount.get(asset) ?? 0) + 1);

      // Exact-case check — this is what breaks on Linux but not macOS.
      if (!realPaths.has(rel)) {
        const insensitive = [...realPaths].find(
          (p) => p.toLowerCase() === rel.toLowerCase()
        );
        if (insensitive) {
          findings.caseMismatch.push(
            `${id} [${kind}]\n      referenced: ${rel}\n      on disk:    ${insensitive}`
          );
        }
      }
    }
  }
}

// File-level checks across the whole library.
const hashes = new Map();
for (const file of walk(PUBLIC_IMG_DIR)) {
  const rel = path.relative(PUBLIC_IMG_DIR, file).split(path.sep).join('/');
  const buffer = fs.readFileSync(file);

  if (buffer.length === 0) {
    findings.emptyOrTiny.push(`${rel}: 0 bytes`);
    continue;
  }
  if (buffer.length < 1024) {
    findings.emptyOrTiny.push(`${rel}: only ${buffer.length} bytes`);
  }

  const info = imageInfo(buffer);
  const ext = path.extname(rel).toLowerCase().replace('.', '').replace('jpg', 'jpeg');

  if (info.format === 'unknown') {
    findings.unreadable.push(`${rel}: not a recognisable image`);
  } else if (info.format !== ext) {
    findings.formatMismatch.push(`${rel}: extension .${ext} but content is ${info.format}`);
  }

  if (info.width && info.height && (info.width < 200 || info.height < 120)) {
    findings.tooSmall.push(`${rel}: ${info.width}x${info.height}`);
  }

  const hash = crypto.createHash('sha1').update(buffer).digest('hex');
  if (!hashes.has(hash)) hashes.set(hash, []);
  hashes.get(hash).push(rel);
}

for (const [, files] of hashes) {
  if (files.length > 1) {
    findings.duplicateContent.push(files.join('\n      = '));
  }
}

const shared = [...referenceCount.entries()].filter(([, n]) => n > 1);

const section = (title, items) => {
  console.log(`\n${'='.repeat(72)}\n${title}: ${items.length}\n${'='.repeat(72)}`);
  items.forEach((i) => console.log('  ' + i));
};

console.log(`Images on disk: ${realPaths.size}`);

section('CASE MISMATCH (works on macOS, 404s on Vercel)', findings.caseMismatch);
section('EMPTY OR SUSPICIOUSLY SMALL FILES', findings.emptyOrTiny);
section('EXTENSION DOES NOT MATCH ACTUAL FORMAT', findings.formatMismatch);
section('UNREADABLE / NOT AN IMAGE', findings.unreadable);
section('DIMENSIONS TOO SMALL TO READ', findings.tooSmall);
section('DUPLICATE FILE CONTENT UNDER DIFFERENT NAMES', findings.duplicateContent);
section('QUESTIONS WITH MORE THAN ONE ASSET', findings.multiAsset);

console.log(`\n${'='.repeat(72)}\nIMAGES SHARED BY MORE THAN ONE QUESTION: ${shared.length}\n${'='.repeat(72)}`);
shared.forEach(([asset, n]) => console.log(`  ${n}x  ${asset}`));
