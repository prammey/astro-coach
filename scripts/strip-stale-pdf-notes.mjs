// Removes the bracketed "see the official exam PDF" notes from question text.
//
// These were placeholders written while the figures were missing. Now that
// every one of those questions renders its figure inline, the note sends a
// learner off to hunt through a PDF for something already on screen.
//
// Only strips from a question that actually has a figure. Run with --write.

import fs from 'fs';
import path from 'path';
import vm from 'vm';

const WRITE = process.argv.includes('--write');
const DATA_DIR = path.join(process.cwd(), 'src/data/mcq');
const FILES = [
  ['usaaao_mcqs.ts', 'usaaaoMcqs'],
  ['iaac_mcqs.ts', 'iaacMcqs'],
  ['baao_mcqs.ts', 'baaoMcqs'],
];

// The bracketed note, plus any escaped newlines/whitespace leading up to it.
const NOTE = /(?:\\n|\s)*\[[^\]]*?(?:required|All choices are visual plots)[^\]]*?\]/g;

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

// Splits the exported array into the source span of each top-level object.
// Comments must be skipped explicitly: an apostrophe in a code comment
// ("Question 17's light curve") would otherwise look like a string quote
// and throw the brace depth off for the rest of the file.
function objectSpans(text, exportName) {
  const arrStart = text.indexOf('[', text.indexOf(`export const ${exportName}`));
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

    // Line comment
    if (ch === '/' && text[i + 1] === '/') {
      const nl = text.indexOf('\n', i);
      i = nl === -1 ? text.length : nl;
      continue;
    }
    // Block comment
    if (ch === '/' && text[i + 1] === '*') {
      const close = text.indexOf('*/', i + 2);
      i = close === -1 ? text.length : close + 1;
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

function evalObject(src) {
  const ctx = { RESULT: null };
  vm.createContext(ctx);
  vm.runInContext('RESULT = ' + src.replace(/\bas const\b/g, ''), ctx);
  return ctx.RESULT;
}

const stripped = [];
const skipped = [];

for (const [fileName, exportName] of FILES) {
  const filePath = path.join(DATA_DIR, fileName);
  let text = fs.readFileSync(filePath, 'utf8');
  const spans = objectSpans(text, exportName);

  for (let s = spans.length - 1; s >= 0; s--) {
    const [start, end] = spans[s];
    const objSrc = text.slice(start, end + 1);
    const q = evalObject(objSrc);
    if (!q || !q.questionText) continue;

    NOTE.lastIndex = 0;
    if (!NOTE.test(objSrc)) continue;

    const id = `${q.competition}-${q.year}-q${q.questionNumber}`.toLowerCase();
    const hasFigure = q.questionMedia?.status === 'complete';

    // Keep the pointer when there is genuinely no figure to show.
    if (!hasFigure) {
      skipped.push(`${id} (no figure — note kept)`);
      continue;
    }

    // Also drop the now-misleading "(official PDF)" suffix on choices whose
    // plots are part of the figure we render.
    const next = objSrc
      .replace(NOTE, '')
      .replace(/ \(official PDF\)/g, '');

    text = text.slice(0, start) + next + text.slice(end + 1);
    stripped.push(id);
  }

  if (WRITE) fs.writeFileSync(filePath, text);
}

console.log(`Stripped stale PDF notes from ${stripped.length} questions:`);
stripped.forEach((id) => console.log('  ' + id));
if (skipped.length) {
  console.log(`\nKept on ${skipped.length} (still no figure):`);
  skipped.forEach((s) => console.log('  ' + s));
}
console.log(WRITE ? '\nFiles written.' : '\nDRY RUN — pass --write to apply.');
