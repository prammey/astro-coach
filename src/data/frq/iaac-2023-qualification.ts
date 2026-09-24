// IAAC Qualification Round 2023: five 5-point problems.
//
// The official solutions give final answers only, so every worked
// explanation here is written by Astro Coach (solutionSource ASTRO_COACH).
// Problems A–D have short final answers and are checked instantly and
// free; E is an explanation and is AI-graded.
//
// Note on C: the official speeds (26231, 1965, 7223 m/s) use the rounded
// eccentricity 0.86 and a rounded distance for P3. Unrounded values give
// about 26560, 1930 and 7170 m/s, so the accepted ranges cover both.
import type { FrqSeedExam } from "./types";

const YEAR = 2023;

// Accepted spellings for each galaxy class, shared by the A and B blanks.
const IRREGULAR = ["irregular", "irregular galaxy", "Irr", "Im", "IBm", "irregular (Irr)"];
const ELLIPTICAL = ["elliptical", "elliptical galaxy", "E", "dwarf elliptical", "dwarf elliptical galaxy", "dE", "elliptical (E)"];
const SPIRAL = ["spiral", "spiral galaxy", "SA", "unbarred spiral", "normal spiral", "spiral (SA)"];
const BARRED_SPIRAL = ["barred spiral", "barred spiral galaxy", "SB", "barred", "barred spiral (SB)"];

export const iaac2023Qualification: FrqSeedExam = {
  competition: "IAAC",
  year: YEAR,
  examName: "Qualification Round",
  slug: "iaac-2023-qr",
  sourceUrl: "https://iaac.space/",
  questionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}.pdf`,
  solutionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}_Solution.pdf`,
  attributionText: `Source: International Astronomy and Astrophysics Competition (IAAC), Qualification Round ${YEAR}. Problem text transcribed from the official PDF and used with permission; worked solutions written by Astro Coach from the official answers. Astro Coach is independent and not affiliated with IAAC.`,
  questions: [
    // --- Problem A: galaxy classes (instant check) --------------------------
    {
      number: "A",
      title: "The Classification of Galaxies",
      topic: "Galaxies & Universe",
      difficulty: "Beginner",
      points: 5,
      text: `Galaxies are some of the most beautiful objects in the universe and are observable in many different shapes, colours and sizes. Astronomers have classified galaxies into different groups: spiral (SA), intermediate spiral (SAB), barred spiral (SB), lenticular (S0), elliptical (E), and irregular (Irr).

Which galaxy classes are illustrated by the shapes below (A1–A4)?

[[figure:shapes]]

Find the correct class (B1–B4) and name (C1–C4) of each galaxy shown in the images: NGC 2337, NGC 300, NGC 1365, Messier 110.

[[figure:photos]]`,
      figures: [
        { key: "shapes", file: "shapes.png", caption: "Shapes A1–A4, from left to right", sourcePage: 1 },
        { key: "photos", file: "photos.png", caption: "Galaxy images 1–4, from left to right (class B1–B4, name C1–C4)", sourcePage: 1 },
      ],
      parts: [
        {
          label: "Answers",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "A1–A4: class of each shape. B1–B4: class of each galaxy image. C1–C4: name of each galaxy image. Images are numbered from left to right.",
          blanks: [
            { label: "(A1)", prompt: "class", accept: IRREGULAR },
            { label: "(A2)", prompt: "class", accept: ELLIPTICAL },
            { label: "(A3)", prompt: "class", accept: SPIRAL },
            { label: "(A4)", prompt: "class", accept: BARRED_SPIRAL },
            { label: "(B1)", prompt: "class", accept: SPIRAL },
            { label: "(B2)", prompt: "class", accept: IRREGULAR },
            { label: "(B3)", prompt: "class", accept: BARRED_SPIRAL },
            { label: "(B4)", prompt: "class", accept: ELLIPTICAL },
            { label: "(C1)", prompt: "galaxy name", accept: ["NGC 300", "NGC300"] },
            { label: "(C2)", prompt: "galaxy name", accept: ["NGC 2337", "NGC2337"] },
            { label: "(C3)", prompt: "galaxy name", accept: ["NGC 1365", "NGC1365"] },
            { label: "(C4)", prompt: "galaxy name", accept: ["Messier 110", "M110", "M 110", "NGC 205", "NGC205"] },
          ],
          solution: `**Shapes**
- **A1 — irregular (Irr):** no clear structure.
- **A2 — elliptical (E):** a smooth, featureless oval glow, brightest in the centre.
- **A3 — spiral (SA):** arms winding out directly from a round central bulge.
- **A4 — barred spiral (SB):** the arms start from the ends of a straight bar through the centre.

**Images**
- **Image 1 — spiral, NGC 300:** a face-on spiral in Sculptor with loose, clumpy arms and no bar.
- **Image 2 — irregular, NGC 2337:** a small, lumpy galaxy with scattered blue star-forming knots and no clear shape.
- **Image 3 — barred spiral, NGC 1365:** the "Great Barred Spiral Galaxy" in Fornax, with a prominent bar and two long arms.
- **Image 4 — elliptical, Messier 110 (NGC 205):** a smooth dwarf elliptical companion of the Andromeda Galaxy.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [1],
      solutionPages: [1],
    },

    // --- Problem B: light travel time (instant check) -----------------------
    {
      number: "B",
      title: "The Speed of Light",
      topic: "Light & Spectra",
      topics: ["Light & Spectra", "Solar System"],
      difficulty: "Beginner",
      points: 5,
      text: `Light travels extremely fast through the universe. However, the speed of light is limited to about $300{,}000\\ \\text{km/s}$. Because of that, it takes sunlight 8.3 minutes to reach the Earth.

How long does it take light from the Sun's surface to reach Mars (223 million km distance to the Sun), Jupiter (777 million km) and Pluto (5,906 million km), respectively?`,
      parts: [
        {
          label: "Answers",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Give each time in minutes.",
          blanks: [
            {
              label: "Mars",
              prompt: "minutes",
              accept: [],
              numeric: { value: 12.4, tolerance: 0.2 },
              numericInOtherUnits: [{ value: 743, tolerance: 12, units: ["s", "sec", "secs", "second", "seconds"] }],
            },
            {
              label: "Jupiter",
              prompt: "minutes",
              accept: [],
              numeric: { value: 43.2, tolerance: 0.5 },
              numericInOtherUnits: [{ value: 2590, tolerance: 30, units: ["s", "sec", "secs", "second", "seconds"] }],
            },
            {
              label: "Pluto",
              prompt: "minutes",
              accept: [],
              numeric: { value: 328.1, tolerance: 3 },
              numericInOtherUnits: [
                { value: 19690, tolerance: 180, units: ["s", "sec", "secs", "second", "seconds"] },
                { value: 5.47, tolerance: 0.05, units: ["h", "hr", "hrs", "hour", "hours"] },
              ],
            },
          ],
          solution: `Time is distance divided by speed, $t = d/c$, with $c = 3.0\\times10^{5}\\ \\text{km/s}$:

$$t_{Mars} = \\frac{223\\times10^{6}\\ \\text{km}}{3.0\\times10^{5}\\ \\text{km/s}} \\approx 743\\ \\text{s} \\approx 12.4\\ \\text{min}$$

$$t_{Jupiter} = \\frac{777\\times10^{6}\\ \\text{km}}{3.0\\times10^{5}\\ \\text{km/s}} = 2590\\ \\text{s} \\approx 43.2\\ \\text{min}$$

$$t_{Pluto} = \\frac{5906\\times10^{6}\\ \\text{km}}{3.0\\times10^{5}\\ \\text{km/s}} \\approx 19{,}690\\ \\text{s} \\approx 328.1\\ \\text{min} \\ (\\approx 5.5\\ \\text{h})$$

(Starting from the Sun's surface instead of its centre removes only $696{,}000\\ \\text{km}$, about 2.3 seconds — too small to change these answers.)`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem C: comet orbit (instant check) -----------------------------
    {
      number: "C",
      title: "Elliptical Orbit",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Intermediate",
      points: 5,
      text: `Objects go around the Sun in elliptical orbits. Especially comets can have orbits with a high eccentricity. The newly found comet P/2023 IAAC has a semi-major axis of $16.5\\ \\text{AU}$ and a semi-minor axis of $8.3\\ \\text{AU}$. The comet's mass is negligible compared to the Sun ($1.9\\times10^{30}\\ \\text{kg}$).

[[figure:ellipse]]

The vis-viva equation gives the orbital speed of an object travelling along the ellipse:

$$v(x) = \\sqrt{\\mu\\left(\\frac{2}{x} - \\frac{1}{a}\\right)}, \\qquad \\mu = G(m_1 + m_2)$$

Here, $a$ is the semi-major axis, $m_1$ and $m_2$ are the masses of the orbiting bodies, $x$ is the distance between the comet and the centre of mass, and $G$ is the gravitational constant.

**(a)** Calculate the eccentricity of P/2023 IAAC's orbit around the Sun.

**(b)** Which one of the points $P_1$, $P_2$, $P_3$ is the aphelion and which one the perihelion?

**(c)** Determine the comet's speed at the three points $P_1$, $P_2$, $P_3$.`,
      figures: [
        { key: "ellipse", file: "ellipse.png", caption: "The comet's orbit; the grey dot is the Sun", sourcePage: 2 },
      ],
      parts: [
        {
          label: "Answers",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Give the eccentricity, the two points, and the three speeds in m/s.",
          blanks: [
            { label: "(a) Eccentricity", prompt: "e", accept: [], numeric: { value: 0.864, tolerance: 0.01 } },
            { label: "(b) Perihelion", prompt: "P1, P2 or P3", accept: ["P1", "P 1", "point P1"] },
            { label: "(b) Aphelion", prompt: "P1, P2 or P3", accept: ["P2", "P 2", "point P2"] },
            {
              label: "(c) Speed at P1",
              prompt: "m/s",
              accept: [],
              numeric: { value: 26300, tolerance: 600 },
              numericInOtherUnits: [{ value: 26.3, tolerance: 0.6, units: ["km/s", "km"] }],
            },
            {
              label: "(c) Speed at P2",
              prompt: "m/s",
              accept: [],
              numeric: { value: 1950, tolerance: 60 },
              numericInOtherUnits: [{ value: 1.95, tolerance: 0.06, units: ["km/s", "km"] }],
            },
            {
              label: "(c) Speed at P3",
              prompt: "m/s",
              accept: [],
              numeric: { value: 7200, tolerance: 120 },
              numericInOtherUnits: [{ value: 7.2, tolerance: 0.12, units: ["km/s", "km"] }],
            },
          ],
          solution: `**(a)** For an ellipse, $b = a\\sqrt{1-e^2}$, so

$$e = \\sqrt{1 - \\left(\\frac{b}{a}\\right)^2} = \\sqrt{1 - \\left(\\frac{8.3}{16.5}\\right)^2} = \\sqrt{0.747} \\approx 0.86$$

**(b)** The Sun sits at a focus of the ellipse (the grey dot), close to $P_1$. The closest point to the Sun is the **perihelion: $P_1$**; the farthest is the **aphelion: $P_2$**.

**(c)** First the distances from the Sun:
- $P_1$: $x_1 = a(1-e) \\approx 16.5 \\times 0.136 \\approx 2.24\\ \\text{AU}$
- $P_2$: $x_2 = a(1+e) \\approx 30.8\\ \\text{AU}$
- $P_3$ (end of the minor axis): $x_3 = \\sqrt{b^2 + (ae)^2} = a = 16.5\\ \\text{AU}$

With $\\mu = G M_\\odot = 6.674\\times10^{-11} \\times 1.9\\times10^{30} \\approx 1.27\\times10^{20}\\ \\text{m}^3/\\text{s}^2$, $1\\ \\text{AU} = 1.496\\times10^{11}\\ \\text{m}$ and $a = 2.47\\times10^{12}\\ \\text{m}$, the vis-viva equation gives

$$v_1 = \\sqrt{\\mu\\left(\\tfrac{2}{x_1} - \\tfrac{1}{a}\\right)} \\approx 26{,}300\\ \\text{m/s}, \\qquad v_2 \\approx 1950\\ \\text{m/s}, \\qquad v_3 = \\sqrt{\\mu/a} \\approx 7200\\ \\text{m/s}$$

The comet races through perihelion more than ten times faster than it crawls through aphelion — Kepler's second law in action. (The exact values depend on how much you round $e$: the official answers are 26231, 1965 and 7223 m/s; unrounded values give about 26560, 1930 and 7170 m/s. All of these are accepted.)`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem D: two stars' separation (instant check) -------------------
    {
      number: "D",
      title: "Distance between Stars",
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Stars & Black Holes"],
      difficulty: "Intermediate",
      points: 5,
      text: `Determining the distance to stars can be challenging. The parallax method is one way of finding the distance to many stars around us. Your research team measures the parallax of two stars that have a distance of 5 degrees from each other in the night sky: the first star has a parallax of 0.11 arcsec, and the second has a parallax of 0.13 arcsec.

How far apart are the two stars from each other? Express your answer in light-years.`,
      parts: [
        {
          label: "Answer",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Give the separation in light-years.",
          blanks: [
            {
              label: "Separation",
              prompt: "light-years",
              accept: [],
              numeric: { value: 5.15, tolerance: 0.25 },
              numericInOtherUnits: [{ value: 1.58, tolerance: 0.08, units: ["pc", "parsec", "parsecs"] }],
            },
          ],
          solution: `**Distances from parallax.** $d\\,[\\text{pc}] = 1/p\\,[\\text{arcsec}]$:

$$d_1 = \\frac{1}{0.11} \\approx 9.09\\ \\text{pc} \\ (29.6\\ \\text{ly}), \\qquad d_2 = \\frac{1}{0.13} \\approx 7.69\\ \\text{pc} \\ (25.1\\ \\text{ly})$$

**Separation.** The Earth and the two stars form a triangle with an angle $\\varphi = 5^\\circ$ at the Earth. By the law of cosines:

$$d_{12} = \\sqrt{d_1^2 + d_2^2 - 2 d_1 d_2 \\cos\\varphi} = \\sqrt{82.6 + 59.2 - 2(9.09)(7.69)(0.9962)}\\ \\text{pc} \\approx 1.58\\ \\text{pc}$$

Converting with $1\\ \\text{pc} \\approx 3.26\\ \\text{ly}$: $d_{12} \\approx$ **5.1 light-years**.

Notice that the answer is much more than the simple difference in distance (4.5 ly): the 5° angle adds a sideways separation of about $d_2 \\sin 5^\\circ \\approx 2.2$ ly.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem E ----------------------------------------------------------
    {
      number: "E",
      title: "Dark Energy",
      topic: "Galaxies & Universe",
      difficulty: "Beginner",
      points: 5,
      text: `Cosmology studies the dynamics of the universe on its largest scales. Its research reveals how the universe evolves over time and, in particular, how it expands. The term dark energy frequently appears in cosmology.

What does the term dark energy describe? What are evidences for the existence of dark energy?`,
      solution: `**What dark energy describes.** Dark energy is the name for whatever makes the expansion of the universe **accelerate**. Gravity from matter should slow the expansion down, yet observations show it speeding up. Dark energy behaves like an energy of empty space itself (the cosmological constant $\\Lambda$ in Einstein's equations): it does not thin out as space expands, and it has a repulsive effect. It makes up about 68–70% of the total energy content of the universe, but its nature is still unknown.

**Evidence**

1. **Distant Type Ia supernovae (1998).** These "standard candles" have known peak brightness. The most distant ones are fainter — farther away — than expected for a decelerating universe, showing that the expansion has been accelerating for the last few billion years (Nobel Prize 2011).

2. **The cosmic microwave background.** The pattern of hot and cold spots shows the universe is spatially flat, which requires the critical density. Ordinary and dark matter supply only about 30% of it; dark energy supplies the missing ~70%.

3. **Large-scale structure.** Baryon acoustic oscillations (a standard ruler in the distribution of galaxies) and the growth rate of galaxy clusters over cosmic time independently match a universe dominated by dark energy.

4. **Age of the universe.** Without dark energy, the universe would come out younger than its oldest stars; with it, the age (about 13.8 billion years) fits.`,
      rubric: `Astro Coach marking guide (5 points):
- Dark energy is the (unknown) cause of the accelerating expansion of the universe: 1 point.
- It acts like an energy of empty space / cosmological constant, is repulsive, and makes up about 70% of the universe: 1 point.
- Evidence from distant Type Ia supernovae (redshift–distance relation shows acceleration): 1 point.
- Evidence from the CMB (flat universe / missing energy density needed for zero curvature): 1 point.
- Any further valid evidence (baryon acoustic oscillations, galaxy clusters/large-scale structure, age of the universe): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
      solutionPages: [1],
    },
  ],
};
