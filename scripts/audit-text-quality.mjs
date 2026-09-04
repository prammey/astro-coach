// Scans question text for transcription defects: dropped fill-in-the-blank
// markers, doubled prepositions, stray whitespace, cross-references to
// "the previous problem", truncation, and unresolved placeholders.

import fs from 'fs';
import path from 'path';
import vm from 'vm';

const DATA_DIR = path.join(process.cwd(), 'src/data/mcq');

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

const checks = {
  droppedBlank: [],
  crossReference: [],
  doubleSpace: [],
  truncated: [],
  placeholder: [],
  notAQuestion: [],
};

// Two prepositions/articles back to back usually means a word was dropped
// during transcription, e.g. "the position of from a fixed location".
const DOUBLE_PREP =
  /\b(of|to|for|with|by|from|in|on|at|between|than)\s+(of|to|for|with|by|from|in|on|at|and|than)\b/i;

for (const q of all) {
  const id = idOf(q);
  const text = String(q.questionText || '');

  if (DOUBLE_PREP.test(text)) {
    const m = DOUBLE_PREP.exec(text);
    checks.droppedBlank.push(`${id}: "...${text.slice(Math.max(0, m.index - 40), m.index + 60)}..."`);
  }
  if (/\b(previous|preceding|last|above)\s+(problem|question)\b/i.test(text)) {
    checks.crossReference.push(`${id}: refers to another question`);
  }
  if (/ {2,}/.test(text.replace(/\n/g, ''))) {
    checks.doubleSpace.push(`${id}`);
  }
  if (/[a-z,]\s*$/.test(text.trim()) && !text.trim().endsWith('.')) {
    checks.truncated.push(`${id}: ends "...${text.trim().slice(-50)}"`);
  }
  if (/\b(TODO|TBD|XXX|FIXME|lorem ipsum|placeholder)\b/i.test(text)) {
    checks.placeholder.push(`${id}`);
  }
  // No question mark, no imperative verb, and no blank -> likely a dropped blank
  const hasBlank = /_{2,}|\.\.\.\s*$|\[\s*\]/.test(text);
  const imperative = /^(select|choose|match|estimate|calculate|determine|find|identify|which|what|how|why|where|when|state|give|order|rank|arrange)/i;
  const stripped = text.replace(/\[[^\]]*\]/g, '').trim();
  if (!stripped.includes('?') && !hasBlank && !imperative.test(stripped)) {
    checks.notAQuestion.push(`${id}: "${stripped.slice(0, 120)}"`);
  }
}

const show = (t, arr) => {
  console.log(`\n${'='.repeat(72)}\n${t}: ${arr.length}\n${'='.repeat(72)}`);
  arr.forEach((l) => console.log('  ' + l));
};

show('DROPPED WORD (doubled preposition)', checks.droppedBlank);
show('CROSS-REFERENCES ANOTHER QUESTION (needs its own figure)', checks.crossReference);
show('DOUBLE SPACES', checks.doubleSpace);
show('POSSIBLY TRUNCATED', checks.truncated);
show('UNRESOLVED PLACEHOLDER TEXT', checks.placeholder);
show('STATEMENT, NOT A QUESTION (dropped fill-in-the-blank?)', checks.notAQuestion);
