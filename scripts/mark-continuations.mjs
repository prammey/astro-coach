// One-off: adds `continuesFrom` to the questions that build on the
// immediately preceding question in the same exam, so the catalog can join
// them into multi-part items. Run with --write to apply.

import fs from 'fs';
import path from 'path';

const WRITE = process.argv.includes('--write');
const DATA_DIR = path.join(process.cwd(), 'src/data/mcq');

// file -> [year, examName (null = any), childQuestionNumber, parentQuestionNumber]
const TARGETS = [
  ['usaaao_mcqs.ts', 2019, 'First Round', 4, 3],
  ['usaaao_mcqs.ts', 2023, 'First Round', 18, 17],
  ['usaaao_mcqs.ts', 2025, 'First Round', 3, 2],
  ['usaaao_mcqs.ts', 2026, 'First Round', 8, 7],
  ['baao_mcqs.ts', 2017, null, 10, 9],
  ['baao_mcqs.ts', 2018, null, 7, 6],
];

// Walks the exported array and returns [start, end] offsets of each object.
function objectSpans(text) {
  const arrStart = text.indexOf('[', text.indexOf('export const'));
  const spans = [];
  let depth = 0;
  let quote = null;
  let start = -1;
  for (let i = arrStart + 1; i < text.length; i++) {
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
      if (depth === 0) spans.push([start, i]);
    } else if (ch === ']' && depth === 0) break;
  }
  return spans;
}

const readField = (src, key) => {
  const m = new RegExp(`["']?${key}["']?\\s*:\\s*("([^"]*)"|'([^']*)'|(-?\\d+))`).exec(src);
  if (!m) return undefined;
  return m[2] ?? m[3] ?? Number(m[4]);
};

const byFile = new Map();
for (const t of TARGETS) {
  if (!byFile.has(t[0])) byFile.set(t[0], []);
  byFile.get(t[0]).push(t);
}

for (const [fileName, targets] of byFile) {
  const filePath = path.join(DATA_DIR, fileName);
  let text = fs.readFileSync(filePath, 'utf8');
  const spans = objectSpans(text);

  // Rewrite back-to-front so earlier offsets stay valid.
  for (let s = spans.length - 1; s >= 0; s--) {
    const [start, end] = spans[s];
    const src = text.slice(start, end + 1);
    const year = readField(src, 'year');
    const exam = readField(src, 'examName');
    const num = readField(src, 'questionNumber');

    const hit = targets.find(
      ([, y, e, child]) => y === year && child === num && (e === null || e === exam)
    );
    if (!hit) continue;
    if (/continuesFrom/.test(src)) continue;

    // Insert right after questionNumber so the relationship is easy to spot.
    const anchor = new RegExp(`(["']?questionNumber["']?\\s*:\\s*${num}\\s*,)`);
    const m = anchor.exec(src);
    if (!m) {
      console.log(`!! could not anchor ${fileName} ${year} q${num}`);
      continue;
    }
    const indent = (/\n(\s*)["']?questionNumber/.exec(src) || [, '  '])[1];
    const injected =
      src.slice(0, m.index + m[0].length) +
      `\n${indent}continuesFrom: ${hit[4]},` +
      src.slice(m.index + m[0].length);

    text = text.slice(0, start) + injected + text.slice(end + 1);
    console.log(`marked ${fileName} ${year} q${num} -> continuesFrom ${hit[4]}`);
  }

  if (WRITE) fs.writeFileSync(filePath, text);
}
console.log(WRITE ? 'written' : 'DRY RUN — pass --write to apply');
