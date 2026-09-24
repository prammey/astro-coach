// IAAC Qualification Round 2024: five 5-point problems.
//
// The official solutions give final answers only, so every worked
// explanation here is written by Astro Coach (solutionSource ASTRO_COACH).
// Problems A, B and D have short final answers and are checked instantly
// and free; C (a derivation) and E (an explanation) are AI-graded.
import type { FrqSeedExam } from "./types";

const YEAR = 2024;

export const iaac2024Qualification: FrqSeedExam = {
  competition: "IAAC",
  year: YEAR,
  examName: "Qualification Round",
  slug: "iaac-2024-qr",
  sourceUrl: "https://iaac.space/",
  questionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}.pdf`,
  solutionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}_Solution.pdf`,
  attributionText: `Source: International Astronomy and Astrophysics Competition (IAAC), Qualification Round ${YEAR}. Problem text transcribed from the official PDF and used with permission; worked solutions written by Astro Coach from the official answers. Astro Coach is independent and not affiliated with IAAC.`,
  questions: [
    // --- Problem A: southern sky (instant check) ----------------------------
    {
      number: "A",
      title: "The Southern Hemisphere",
      topic: "Telescopes & Observing",
      topics: ["Telescopes & Observing", "Stars & Black Holes", "Galaxies & Universe"],
      difficulty: "Beginner",
      points: 5,
      text: `Most people live in the northern hemisphere of the Earth and observe the northern night sky. However, the night sky in the southern hemisphere is different and features many interesting and important astronomical objects that cannot be seen in the northern hemisphere.

Below, you see a sketch of a particular section of the southern hemisphere night sky. Find the correct names of the objects tagged with the letters A to H.

**Note:** A, B, H refer to stars; F refers to a constellation; C, D, E, G refer to other objects.

[[figure:sky]]`,
      figures: [
        { key: "sky", file: "southern-sky.png", caption: "A section of the southern night sky, objects A–H", sourcePage: 1 },
      ],
      parts: [
        {
          label: "Answers",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Name each labelled object.",
          blanks: [
            { label: "(A)", prompt: "star", accept: ["Canopus", "Alpha Carinae"] },
            { label: "(B)", prompt: "star", accept: ["Achernar", "Alpha Eridani"] },
            { label: "(C)", prompt: "object", accept: ["LMC", "Large Magellanic Cloud", "Large Magellanic Cloud (LMC)", "the Large Magellanic Cloud"] },
            { label: "(D)", prompt: "object", accept: ["SMC", "Small Magellanic Cloud", "Small Magellanic Cloud (SMC)", "the Small Magellanic Cloud"] },
            {
              label: "(E)",
              prompt: "object",
              accept: ["Eta Carinae Nebula", "Carina Nebula", "Great Carina Nebula", "Great Nebula in Carina", "NGC 3372", "NGC3372", "Eta Carinae"],
            },
            { label: "(F)", prompt: "constellation", accept: ["Crux", "Southern Cross", "the Southern Cross", "Crux (Southern Cross)"] },
            { label: "(G)", prompt: "object", accept: ["Omega Centauri", "NGC 5139", "NGC5139", "Omega Centauri cluster"] },
            { label: "(H)", prompt: "star", accept: ["Alpha Centauri", "Rigil Kentaurus", "Rigil Kent", "Alpha Centauri A", "Alpha Cen"] },
          ],
          solution: `**(A) Canopus** — the second-brightest star in the night sky, in Carina.

**(B) Achernar** — the bright star at the southern end of the constellation Eridanus.

**(C) The Large Magellanic Cloud (LMC)** and **(D) the Small Magellanic Cloud (SMC)** — two satellite galaxies of the Milky Way, visible to the naked eye as fuzzy patches.

**(E) The Eta Carinae (Carina) Nebula** — one of the largest and brightest nebulae in the sky, home to the unstable massive star Eta Carinae.

**(F) Crux, the Southern Cross** — the smallest constellation; its long axis points towards the south celestial pole.

**(G) Omega Centauri** — the largest and brightest globular cluster of the Milky Way, with millions of stars.

**(H) Alpha Centauri** — the third-brightest star in the night sky and the nearest star system to the Sun (about 4.4 light-years).`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [1],
      solutionPages: [1],
    },

    // --- Problem B: counting stars (instant check) --------------------------
    {
      number: "B",
      title: "Stars in the Milky Way",
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Math, Data & Coordinates"],
      difficulty: "Beginner",
      points: 5,
      text: `Our Sun is one star among billions of stars in the Milky Way. However, it is difficult to determine the exact number of stars. By observing the nearby stars around us, you find that the local density of stars is $0.05\\ \\text{stars}/(\\text{light-year})^3$. For simplicity, assume that the Milky Way has a cylindrical shape with a diameter of 100,000 light-years and a thickness of 1,000 light-years.

Use this information to estimate the total number of stars in the Milky Way.`,
      parts: [
        {
          label: "Answer",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Write the number in full, in scientific notation, or with a word (e.g. 150 billion).",
          blanks: [
            { label: "Number of stars", prompt: "e.g. 1.5e11 or 150 billion", accept: [], numeric: { value: 3.93e11, tolerance: 0.1e11 } },
          ],
          solution: `The number of stars is the volume times the star density, $N = \\rho V$. For a cylinder of radius $r = 50{,}000\\ \\text{ly}$ and height $h = 1{,}000\\ \\text{ly}$:

$$V = \\pi r^2 h = \\pi\\,(50{,}000\\ \\text{ly})^2 \\times 1{,}000\\ \\text{ly} \\approx 7.85\\times10^{12}\\ \\text{ly}^3$$

$$N = 0.05\\ \\text{ly}^{-3} \\times 7.85\\times10^{12}\\ \\text{ly}^3 \\approx 3.93\\times10^{11}$$

About **393 billion stars** — within the usual estimate of 100–400 billion. (Remember to use the radius, half the diameter, in $\\pi r^2$.)`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem C ----------------------------------------------------------
    {
      number: "C",
      title: "Gravity at the ISS",
      topic: "Gravity & Orbits",
      difficulty: "Intermediate",
      points: 5,
      text: `The International Space Station (ISS) orbits the Earth at an altitude of around $410\\ \\text{km}$. The ISS does not fall towards the Earth, and the astronauts and objects are floating weightlessly. On Earth's surface, objects fall with a gravitational acceleration of approximately $9.81\\ \\text{m/s}^2$.

**(a)** Show that the following equation gives the percentage $P$ of how much the gravitational acceleration decreases between Earth's surface ($R$: Earth's radius, $6371\\ \\text{km}$) and an object at altitude $z$:

$$P(z) = 1 - \\left(\\frac{1}{1+\\frac{z}{R}}\\right)^2$$

**(b)** What is $P(z)$ for the altitude of the ISS, and why are objects weightless nevertheless?

**(c)** At what distance does the gravitational acceleration become only 1% of that on Earth's surface?`,
      solution: `**(a)** Newton's law of gravitation gives the acceleration at distance $R+z$ from the Earth's centre:

$$g(z) = \\frac{GM}{(R+z)^2}, \\qquad g(0) = \\frac{GM}{R^2}$$

The fractional decrease is

$$P(z) = 1 - \\frac{g(z)}{g(0)} = 1 - \\left(\\frac{R}{R+z}\\right)^2 = 1 - \\left(\\frac{1}{1+\\frac{z}{R}}\\right)^2$$

**(b)** For $z = 410\\ \\text{km}$:

$$P = 1 - \\left(\\frac{6371}{6781}\\right)^2 = 1 - 0.883 \\approx 0.117 = 11.7\\%$$

So gravity at the ISS is still about 88% as strong as on the ground ($\\approx 8.7\\ \\text{m/s}^2$). Astronauts float because the ISS and everything in it are **in free fall** together: they are constantly falling towards the Earth, but moving sideways so fast (about 7.7 km/s) that they keep missing it. With nothing pushing back on them (no floor pushing up), they feel weightless. Equivalently, in the station's frame, the centrifugal force balances gravity.

**(c)** We need $g(z)/g(0) = 0.01$, i.e. $P = 0.99$:

$$\\left(\\frac{R}{R+z}\\right)^2 = 0.01 \\quad\\Longrightarrow\\quad \\frac{R}{R+z} = 0.1 \\quad\\Longrightarrow\\quad R+z = 10R$$

$$z = 9R = 9 \\times 6371\\ \\text{km} \\approx 57{,}300\\ \\text{km}$$

Gravity falls to 1% at an altitude of about **57,300 km** above the surface (a distance of $10R \\approx 63{,}700\\ \\text{km}$ from the Earth's centre).`,
      rubric: `Astro Coach marking guide (5 points):
- (a) Writes g ∝ 1/r² (g(z) = GM/(R+z)²) and forms P = 1 − g(z)/g(0) to reach the given formula: 1 point.
- (b) P(410 km) ≈ 11.7% (11–12%): 1 point.
- (b) Explains weightlessness as free fall / orbital motion (centrifugal force balances gravity), not absence of gravity: 1 point.
- (c) Sets (R/(R+z))² = 0.01, so R + z = 10R: 1 point.
- (c) z ≈ 57,300 km above the surface (or 63,700 km from the centre, if clearly stated): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem D: view from the ISS (instant check) -----------------------
    {
      number: "D",
      title: "Field of View of the ISS",
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Gravity & Orbits"],
      difficulty: "Intermediate",
      points: 5,
      text: `The astronauts living on the ISS have a spectacular view of Earth. However, they see only a certain part of the Earth at a given time, and the planet's curvature limits their view.

Use geometry to determine **(a)** the field of view angle $\\theta$, **(b)** the total distance $S$ visible, and **(c)** the percentage of Earth's surface that astronauts can see.

(Use the values from Problem C: the ISS orbits at an altitude of $410\\ \\text{km}$ and Earth's radius is $6371\\ \\text{km}$.)

[[figure:view]]`,
      figures: [
        { key: "view", file: "iss-view.png", caption: "The ISS sees the Earth within the angle θ; S is the visible arc", sourcePage: 2 },
      ],
      parts: [
        {
          label: "Answers",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Give θ in degrees, S in km, and the percentage.",
          blanks: [
            { label: "(a) θ", prompt: "degrees", accept: [], numeric: { value: 139.9, tolerance: 0.5 } },
            {
              label: "(b) S",
              prompt: "km",
              accept: [],
              numeric: { value: 4459, tolerance: 30 },
              numericInOtherUnits: [{ value: 4.459e6, tolerance: 3e4, units: ["m", "metre", "metres", "meter", "meters"] }],
            },
            { label: "(c) Percentage of Earth's surface", prompt: "%", accept: [], numeric: { value: 3.0, tolerance: 0.2 } },
          ],
          solution: `The lines of sight from the ISS just graze the Earth, so each touches the surface at a right angle to the radius. That gives a right triangle with hypotenuse $R+z = 6781\\ \\text{km}$ (ISS to Earth's centre) and one side $R = 6371\\ \\text{km}$.

**(a)** Half the viewing angle is opposite the radius:

$$\\sin\\frac{\\theta}{2} = \\frac{R}{R+z} = \\frac{6371}{6781} = 0.9395 \\quad\\Longrightarrow\\quad \\theta = 2\\arcsin(0.9395) \\approx 139.9^\\circ$$

**(b)** The angle at the Earth's centre between the two tangent points is $180^\\circ - \\theta = 40.1^\\circ$ (the angles of the quadrilateral ISS–tangent point–centre–tangent point add to $360^\\circ$, with two right angles). The visible arc is that fraction of the circumference:

$$S = 2\\pi R \\cdot \\frac{180^\\circ - \\theta}{360^\\circ} = 40{,}030\\ \\text{km} \\times \\frac{40.1^\\circ}{360^\\circ} \\approx 4459\\ \\text{km}$$

**(c)** The visible region is a spherical cap with half-angle $\\alpha = (180^\\circ - \\theta)/2 = 20.05^\\circ$ at the centre. A cap's area is $2\\pi R^2 (1 - \\cos\\alpha)$, so the fraction of the whole sphere ($4\\pi R^2$) is

$$\\frac{2\\pi R^2 (1-\\cos\\alpha)}{4\\pi R^2} = \\frac{1 - \\cos 20.05^\\circ}{2} = \\frac{1 - 0.9394}{2} \\approx 0.030 = 3\\%$$

Astronauts see only about **3%** of the Earth's surface at a time.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem E ----------------------------------------------------------
    {
      number: "E",
      title: "Microwave Background",
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Light & Spectra", "Miscellaneous & Space History"],
      difficulty: "Beginner",
      points: 5,
      text: `Looking into the universe around us reveals billions of galaxies across all directions. However, when looking past them into the empty space, we detect something called the cosmic microwave background (CMB). It was discovered by accident and is immensely important for cosmology.

Explain what the CMB is and how it was discovered.`,
      solution: `**What the CMB is**

1. **A hot, dense beginning.** Shortly after the Big Bang the universe was filled with a hot plasma of protons, electrons and photons. Light could not travel far: it kept scattering off the free electrons, so the universe was opaque, like the inside of a fog.

2. **Expansion and cooling.** As the universe expanded, it cooled. About 380,000 years after the Big Bang, at roughly 3000 K, electrons and protons combined into neutral hydrogen atoms (**recombination**).

3. **The universe became transparent.** With no free electrons left to scatter them, the photons could travel freely. Those photons are still travelling today: they are the CMB, the oldest light we can see.

4. **Stretched to microwaves.** Since then, the expansion of the universe has stretched their wavelengths by a factor of about 1100. The radiation now has a nearly perfect black-body spectrum at **2.725 K**, peaking in the microwave range, and comes almost equally from every direction. Tiny temperature differences (about 1 part in 100,000) are the seeds of later galaxies.

**How it was discovered**

5. In 1965 **Arno Penzias and Robert Wilson**, working with a sensitive horn radio antenna at Bell Labs, found a persistent faint background noise. It was the same in every direction and at all times of day and year, and did not go away after they checked the equipment (they even cleaned pigeon droppings out of the antenna). Astronomers at Princeton (Dicke, Peebles and colleagues) recognised it as the leftover radiation predicted from a hot Big Bang. Penzias and Wilson received the 1978 Nobel Prize in Physics.`,
      rubric: `Astro Coach marking guide (5 points, one per idea):
- The early universe was hot and dense; photons were trapped by free electrons (opaque plasma).
- Expansion cooled it until atoms formed (recombination, about 380,000 years after the Big Bang) and the universe became transparent.
- The released photons are the CMB, now redshifted to microwaves (about 2.7 K), coming from all directions.
- Discovered by accident in 1965 by Penzias and Wilson.
- As a persistent, uniform background noise in their radio antenna, later identified as Big Bang radiation.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
      solutionPages: [1],
    },
  ],
};
