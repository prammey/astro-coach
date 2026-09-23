# MCQ explanation review notes

Questions flagged while writing the teaching explanations. Each one was
solved independently before its explanation was written; the ones below
are where the stored answer key could not be confirmed, or where the
question itself has a problem worth a human look. Everything not listed
here checked out.

| Question | Stored key | Issue |
|---|---|---|
| usaaao-2015-practice-round-q17 | D (125) — **fixed Sept 2026** | The printed numbers give a = 20 AU, P = 8 yr, M = 125 solar masses; the original key of 4 cannot be reproduced. Choices replaced (1, 2, 15.6, 125, 729) and the orientation wording clarified; the question text says so. |
| usaaao-2015-first-round-q20 | A (2.83×10⁶ m/s) — **fixed Sept 2026** | The original key's negative sign relied on an unstated convention. The question now asks for the radial *speed*, choices replaced with magnitude-based distractors; the question text says so. |
| usaaao-2015-first-round-q23 | D (241°) — **fixed Sept 2026** | 241° is the angle Venus sweeps during the 0.39-year Hohmann transfer. The question now asks exactly that; the question text says so. |
| usaaao-2016-first-round-q2 | A (7.79π) — **fixed Sept 2026** | πab with a = 3, b = √6.75 gives 7.79π AU²; the original key's 6.00π cannot be derived. Choices replaced (7.79π, 9.00π, 6.75π, 4.50π, 2.25π); the question text says so. |
| usaaao-2016-first-round-q7 | C (2457 m/s) — **fixed Sept 2026** | Δv = 10,245 − 7,788 ≈ 2457 m/s. Choice C changed from 2543 to 2457; A/E replaced by the circularisation burn (1478) and the two-burn total (3935); the question text says so. |
| usaaao-2017-first-round-q22 | B (250 pc) — **fixed Sept 2026** | With the official answers to q19–q21 (8000/6000 K, radius ratio 0.6, m = 8.2) the distance is ≈ 250 pc; the original key's 85 pc cannot be reproduced. Choices replaced (180, 250, 345, 500, 1000 pc); the question text says so. Note the value inherits the graph readings behind q19–q21. |
| usaaao-2019-first-round-q24 | B (13°, 13°) — **fixed Sept 2026** | Observer B moved from 5790 m to sea level so no horizon dip applies; both differences are then the 13° longitude gap. Key changed from D to B; the question text says so. |
| usaaao-2020-first-round-q12 | C (42 yr, 9h 11 min) — **fixed Sept 2026** | cos H = −tan(30°5′)tan(10°) gives H ≈ 96° and a day of 9 h 11 min with the 17 h 14 min rotation. Choice C changed from 9h 28min to 9h 11min and “revolution” corrected to “rotation”; the question text says so. |
| usaaao-2020-first-round-q23 | A (−3.06×10⁴⁸ J) | The key assumes circular-orbit energy −GMm/(2r). Note that 1 km from a 23.2 M☉ black hole is inside its 68 km Schwarzschild radius, so the setup is unphysical; explanation follows the key's Newtonian intent. **Decision pending** (delete, or move the gas to 1000 km and scale the choices). |
| usaaao-2021-first-round-q9 | E (771 m/s) — **fixed Sept 2026** | The key used the 4.4 pc diameter as the radius. The angular diameter was changed from 30′ to 60′ so the true radius (4.36 pc) gives exactly 771 m/s; the question text says so. |
| usaaao-2021-first-round-q18 | D (±0.0032298) — **fixed Sept 2026** | The question now asks for the *maximum possible* error, which justifies the linear sum of the epoch and 23×period uncertainties; the question text says so. |
| usaaao-2025-first-round-q20 | A (43° W) — **fixed Sept 2026** | The watch reading was changed from 3:00am to 8:44am so that local mean sunrise (5:52) is 2 h 52 min behind UTC, i.e. 43° W, consistent with the westward voyage; the question text says so. |
| iaac-2021-final-round-q18 | D (244 · 10⁻⁹ rad) — **fixed Sept 2026** | 1.22λ/D = 2.44×10⁻⁷ rad. The printed options had lost the minus sign in the exponent and the unit; both restored, and the question text says so. |
| iaac-2021-final-round-q19 | A ((√8/3) c) — **restored Sept 2026** | The exam typesets A as √8/3 c (radical over the 8 only) = 0.943c, which is exactly √(1 − 1/9) c. It had been transcribed as √(8/3), which looked faster than light, and the key was briefly changed to C in error. Key is A, matching the official sheet; fractions now carry explicit parentheses. |

## Source audit — September 2026

Every stored MCQ was checked against the official exam and solution PDFs
kept locally in `source-pdfs/` (gitignored): question number, question
text, choice text and order, and answer key. The bank now holds **734**
questions across 30 exams.

- **Numbering and exam names**: every stored question number, year and
  exam name matches the official PDF for all 30 exams. IAAC 2021 q19 is
  the Lorentz-factor question and q20 is the solar-eclipse question, exactly
  as stored.
- **Answer keys**: all stored keys match the official keys. (IAAC 2021
  q19 was briefly changed to C because of a transcription error in our
  choice text; the official A is correct and has been restored.) IAAC
  2021 q31–40 have no official key sheet; verified by physics.
- **Wording**: every question is now verbatim or near-verbatim. USAAAO
  2024, 2025 and 2026 (88 questions) were previously paraphrased and have
  been restored to the exam wording, including their prose choices.
  Follow-up questions that say "the previous question" are joined to it as
  one multi-part item (`continuesFrom`), so the setup is always shown.
- **Figures**: figures render *below* the question text, so every "shown
  above" now says "below"; IAAC "official figure" phrasing was replaced by
  the exam wording. USAAAO 2017 q20–22 now carry the spectrum graph that
  the exam prints once for q19–22 (as 2022 q18 shares q17's light curve).
- **Removed as not part of the graded exam**: USAAAO 2017 q27 (options
  printed with wrong units; "excluded from the grading") and USAAAO 2021
  q27 (marked CANCELED in the official solutions). Also never included:
  USAAAO 2016 q18 (VOID), 2020 q16/q17/q24 (cancelled), 2024 q23/q30
  (VOIDED).
- **Known source typos**: USAAAO 2017 q12 letters its choices a, c, b, d, e
  in the PDF (stored in normal order, key unchanged). IAAC 2021 q18's
  missing exponent sign has been corrected (row above).
- **Questions edited away from the original exam** (Prameet's decision,
  2026-09-23): 2015 Practice q17, 2015 First q20/q23, 2016 q2/q7, 2017
  q22, 2019 q24, 2020 q12, 2021 q9/q18, 2025 q20, IAAC 2021 q18. Each carries a bracketed note in its question text saying
  what was updated and why. Remaining rows above whose official key physics
  cannot reproduce still follow the official sheet.
