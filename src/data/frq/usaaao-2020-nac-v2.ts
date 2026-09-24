// USAAAO National Astronomy Competition 2020, Version 2: question S4 only.
//
// USAAAO released two versions of the 2020 exam. They are identical except
// for TRAPPIST-1d's mass in S4 (0.420 Earth masses here, 0.297 in Version
// 1), which changes S4's answer. The full exam is imported from Version 1
// (usaaao-2020-nac.ts); only this S4 is added from Version 2, as a second
// variant to practise on, so the bank has no duplicate questions.
//
// The solution is the official one, re-typeset and lightly clarified
// (ADAPTED). Maths-heavy strings use String.raw so LaTeX backslashes are
// written once.
import type { FrqSeedExam } from "./types";

export const usaaao2020NacV2: FrqSeedExam = {
  competition: "USAAAO",
  year: 2020,
  examName: "National Astronomy Competition (Version 2)",
  slug: "usaaao-2020-nac-v2",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2020/04/usaaao_second_exam_2020__apr4.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2020/04/usaaao_second_exam_2020__apr4sol.pdf",
  attributionText:
    "Source: USA Astronomy and Astrophysics Organization (USAAAO), National Astronomy Competition 2020, Version 2. Problem text and official solutions transcribed from the official PDFs and used with permission. Astro Coach is independent and not affiliated with USAAAO.",
  questions: [
    // --- S4: TRAPPIST-1d radial velocity (Version 2 numbers) ----------------
    {
      number: "S4",
      title: "TRAPPIST-1d Radial Velocity (Version 2)",
      section: "Short Questions",
      topic: "Exoplanets & Life",
      topics: ["Exoplanets & Life", "Gravity & Orbits"],
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`TRAPPIST-1d is a temperate exoplanet that orbits the ultra-cool M dwarf star TRAPPIST-1 with a semi-major axis of 0.022 AU. TRAPPIST-1 has a mass of 0.089 Solar masses and an effective temperature of 2511 K. Through transit timing variations induced by other planets in the TRAPPIST-1 system, TRAPPIST-1d is estimated to have a mass of 0.420 Earth masses. Assuming that TRAPPIST-1d has a circular orbit (which is a good approximation because the measured eccentricity is only 0.008), what is the radial velocity semi-amplitude of TRAPPIST-1 due to the orbital motion of TRAPPIST-1d, in m/s?`,
      solution: String.raw`Star and planet orbit their common centre of mass, so their momenta balance: $M_\star V_\star = M_p V_p$, i.e. $V_\star = M_p V_p / M_\star$.

**Orbital period** from Kepler's third law (years, AU, solar masses):

$$T = \sqrt{\frac{a^3}{M_\star}} = \sqrt{\frac{0.022^3}{0.089}}\ \text{yr} \times 365.25\ \tfrac{\text{days}}{\text{yr}} \approx 4.00\ \text{days}$$

**Planet's orbital speed:**

$$V_p = \frac{2\pi a}{T} = \frac{2\pi \times 0.022 \times 1.496\times10^{11}\ \text{m}}{4.00 \times 86400\ \text{s}} \approx 59.8\ \text{km/s}$$

**Star's speed:**

$$V_\star = \frac{0.420 \times 5.97\times10^{24}\ \text{kg} \times 59.8\times10^{3}\ \text{m/s}}{0.089 \times 1.99\times10^{30}\ \text{kg}} \approx 0.847\ \text{m/s}$$

The radial velocity semi-amplitude is about **0.85 m/s**. The orbit is seen nearly edge-on because the planet transits, so no $\sin i$ correction is needed.`,
      rubric: String.raw`Astro Coach marking guide (5 points):
- Orbital period about 4.0 days from Kepler's third law: 1 point.
- Planet's orbital speed about 59.8 km/s: 1 point.
- Momentum (centre-of-mass) balance M★V★ = M_pV_p: 2 points.
- Semi-amplitude about 0.85 m/s (accept 0.82–0.87): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [3],
    },
  ],
};
