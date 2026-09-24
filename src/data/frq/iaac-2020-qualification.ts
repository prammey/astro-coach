// IAAC Qualification Round 2020: five 5-point problems.
//
// The official solutions give final answers only, so every worked
// explanation here is written by Astro Coach (solutionSource ASTRO_COACH)
// and agrees with the official answers. Problems A–C have short final
// answers, so they are checked instantly and free; D and E need working
// or explanation, so they are AI-graded as a whole (the paper does not
// split their points between sub-parts).
import type { FrqSeedExam } from "./types";

const YEAR = 2020;

export const iaac2020Qualification: FrqSeedExam = {
  competition: "IAAC",
  year: YEAR,
  examName: "Qualification Round",
  slug: "iaac-2020-qr",
  sourceUrl: "https://iaac.space/",
  questionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}.pdf`,
  solutionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}_Solution.pdf`,
  attributionText: `Source: International Astronomy and Astrophysics Competition (IAAC), Qualification Round ${YEAR}. Problem text transcribed from the official PDF and used with permission; worked solutions written by Astro Coach from the official answers. Astro Coach is independent and not affiliated with IAAC.`,
  questions: [
    // --- Problem A: fill in the blanks (instant check) ----------------------
    {
      number: "A",
      title: "The Solar System",
      topic: "Solar System",
      difficulty: "Beginner",
      points: 5,
      text: `Fill in the blank spaces with the correct information:

The Sun is in the centre of the Solar System and is composed mainly of the elements **(1)** and **(2)**. The distance from the Earth to the Sun is also called **(3)**. Many people dream about building a colony on Mars, but the atmosphere is primarily made of **(4)**. We have discovered the **(5)** between Mars and Jupiter, which contains millions of small objects. Jupiter has a total of **(6)** moons: the four largest moons are easily visible with a telescope and **(7)** is the closest and most active one. Uranus and Neptune are the outermost planets and it takes Neptune **(8)** years to complete one orbit around the Sun.`,
      parts: [
        {
          label: "Answers",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Type one answer in each box. Blanks (1) and (2) share a box: name both elements.",
          blanks: [
            { label: "(1) and (2)", prompt: "two elements", accept: [], containsAll: ["hydrogen", "helium"] },
            { label: "(3)", prompt: "name of this distance", accept: ["astronomical unit", "an astronomical unit", "AU", "1 AU", "one astronomical unit", "1 astronomical unit"] },
            { label: "(4)", prompt: "gas", accept: ["carbon dioxide", "CO2", "CO 2", "carbon dioxide gas"] },
            { label: "(5)", prompt: "region", accept: ["asteroid belt", "main asteroid belt", "main belt", "the asteroid belt", "asteroid field", "asteroids belt"] },
            // 79 was the count in 2020; discoveries since have raised it past 90.
            { label: "(6)", prompt: "number of moons", accept: [], numeric: { value: 88, tolerance: 10 } },
            { label: "(7)", prompt: "moon", accept: ["Io"] },
            { label: "(8)", prompt: "years", accept: [], numeric: { value: 165, tolerance: 3 } },
          ],
          solution: `**(1) and (2) Hydrogen and helium.** By mass the Sun is about 73% hydrogen and 25% helium; everything else is only about 2%.

**(3) The astronomical unit (AU)**, about $1.496\\times10^{8}\\ \\text{km}$.

**(4) Carbon dioxide** ($\\text{CO}_2$), about 95% of the thin Martian atmosphere.

**(5) The (main) asteroid belt.**

**(6) 79 moons** was the official count in 2020. The number keeps growing as smaller moons are found — by 2025 more than 90 were confirmed — so any count from 78 to 98 is accepted.

**(7) Io**, the innermost of the four Galilean moons. Tidal heating from Jupiter makes it the most volcanically active body in the Solar System.

**(8) About 165 years.** By Kepler's third law, $T = a^{3/2}$ with $a \\approx 30.1\\ \\text{AU}$ gives $T \\approx 165$ years.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [1],
      solutionPages: [1],
    },

    // --- Problem B: scale model (instant check) ----------------------------
    {
      number: "B",
      title: "Cosmic Scales",
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Solar System", "Stars & Black Holes"],
      difficulty: "Beginner",
      points: 5,
      text: `Assume the diameter of the Earth ($12{,}700\\ \\text{km}$) is scaled down to $1\\ \\text{cm}$ and answer the following:

**(a)** How large is the Sun (diameter: $1.4\\times10^{6}\\ \\text{km}$) on this scale?

**(b)** How far away is the nearest star (distance: $4.24$ light-years) on this scale?`,
      parts: [
        {
          label: "Answers",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Give each answer with its unit.",
          blanks: [
            {
              label: "(a) Sun's diameter",
              prompt: "in cm",
              accept: [],
              numeric: { value: 110, tolerance: 3 },
              numericInOtherUnits: [{ value: 1.1, tolerance: 0.03, units: ["m", "metre", "metres", "meter", "meters"] }],
            },
            {
              label: "(b) Distance to the nearest star",
              prompt: "in km",
              accept: [],
              numeric: { value: 31580, tolerance: 300 },
              numericInOtherUnits: [
                { value: 3.158e7, tolerance: 3e5, units: ["m", "metre", "metres", "meter", "meters"] },
                { value: 3.158e9, tolerance: 3e7, units: ["cm", "centimetre", "centimetres", "centimeter", "centimeters"] },
              ],
            },
          ],
          solution: `On this scale, $12{,}700\\ \\text{km}$ becomes $1\\ \\text{cm}$, so every real length is divided by $12{,}700\\ \\text{km/cm}$.

**(a)** $$\\frac{1.4\\times10^{6}\\ \\text{km}}{12{,}700\\ \\text{km/cm}} \\approx 110\\ \\text{cm}$$ The Sun would be a ball about **1.1 m** across — 110 times wider than the 1 cm Earth.

**(b)** First convert light-years to kilometres ($1\\ \\text{ly} \\approx 9.46\\times10^{12}\\ \\text{km}$):
$$4.24\\ \\text{ly} \\approx 4.01\\times10^{13}\\ \\text{km}$$
Then scale it:
$$\\frac{4.01\\times10^{13}\\ \\text{km}}{12{,}700\\ \\text{km/cm}} \\approx 3.16\\times10^{9}\\ \\text{cm} \\approx 31{,}600\\ \\text{km}$$
Even with the Earth shrunk to 1 cm, the nearest star would be about **31,580 km** away — almost the circumference of the real Earth.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [1],
      solutionPages: [1],
    },

    // --- Problem C: similar triangles (instant check) ----------------------
    {
      number: "C",
      title: "Distance to the Moon",
      topic: "Telescopes & Observing",
      topics: ["Telescopes & Observing", "Math, Data & Coordinates", "Solar System"],
      difficulty: "Beginner",
      points: 5,
      text: `During the daylight, you hold a ruler at a distance of $60\\ \\text{cm}$ away from your eyes, and you find the size of the Moon to be $0.55\\ \\text{cm}$ (try it yourself!). At night, you use a telescope to observe rock formations and craters on the Moon to estimate the diameter of the Moon to be about $3500\\ \\text{km}$.

Find the distance to the Moon by using only the information from this experiment.`,
      parts: [
        {
          label: "Answer",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Give the distance with its unit.",
          blanks: [
            {
              label: "Distance to the Moon",
              prompt: "in km",
              accept: [],
              numeric: { value: 382000, tolerance: 5000 },
              numericInOtherUnits: [{ value: 3.82e8, tolerance: 5e6, units: ["m", "metre", "metres", "meter", "meters"] }],
            },
          ],
          solution: `The ruler and the Moon cover the same angle as seen from your eye, so they form **similar triangles**: size divided by distance is the same for both.

$$\\frac{s_R}{d_R} = \\frac{s_M}{d_M} \\quad\\Longrightarrow\\quad d_M = s_M \\cdot \\frac{d_R}{s_R}$$

$$d_M = 3500\\ \\text{km} \\times \\frac{60\\ \\text{cm}}{0.55\\ \\text{cm}} \\approx 3500\\ \\text{km} \\times 109 \\approx 382{,}000\\ \\text{km}$$

The Moon is about **382,000 km** away — very close to the true average of $384{,}400\\ \\text{km}$.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem D ----------------------------------------------------------
    {
      number: "D",
      title: "Energy of Satellites",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 5,
      text: `A satellite of mass $m_S$ orbits the Earth (with mass $m_E$ and radius $R_E$) with a velocity $v$ and an altitude $h$. The gravitational force $F_G$ and the centripetal force $F_C$ are given by:

$$F_G = G\\,\\frac{m_S \\cdot m_E}{(R_E+h)^2}, \\qquad F_C = \\frac{m_S \\cdot v^2}{R_E+h}, \\qquad G = \\text{const.}$$

**(a)** Find an equation for the kinetic energy $E_{kin}(h)$ of a satellite with an altitude $h$.

**(b)** Based on the kinetic energy, how much liquid hydrogen (energy density: $10^{6}\\ \\text{J/Litre}$) is at least needed to bring a small $1\\ \\text{kg}$ satellite into an orbit of $400\\ \\text{km}$? (Use literature to find $m_E$, $R_E$, $G$.)`,
      solution: `**(a)** In a circular orbit, gravity provides exactly the centripetal force, $F_G = F_C$:

$$G\\,\\frac{m_S m_E}{(R_E+h)^2} = \\frac{m_S v^2}{R_E+h} \\quad\\Longrightarrow\\quad v^2 = \\frac{G m_E}{R_E+h}$$

So the kinetic energy is

$$E_{kin}(h) = \\tfrac{1}{2} m_S v^2 = \\frac{G m_S m_E}{2(R_E+h)}$$

**(b)** With $G = 6.674\\times10^{-11}\\ \\text{m}^3\\text{kg}^{-1}\\text{s}^{-2}$, $m_E = 5.97\\times10^{24}\\ \\text{kg}$, $R_E = 6371\\ \\text{km}$ and $h = 400\\ \\text{km}$:

$$E_{kin} = \\frac{(6.674\\times10^{-11})(1)(5.97\\times10^{24})}{2\\,(6.771\\times10^{6}\\ \\text{m})} \\approx 2.94\\times10^{7}\\ \\text{J}$$

The volume of fuel that stores this much energy is

$$V = \\frac{E_{kin}}{\\rho_E} = \\frac{2.94\\times10^{7}\\ \\text{J}}{10^{6}\\ \\text{J/L}} \\approx 29.4\\ \\text{litres}$$

This is a lower limit: a real rocket must also lift the satellite to 400 km (potential energy), push against air resistance and carry the fuel itself, so it needs far more.`,
      rubric: `Astro Coach marking guide (5 points):
- (a) Sets gravitational force equal to centripetal force: 1 point.
- (a) Derives v² = G m_E / (R_E + h): 1 point.
- (a) E_kin = G m_S m_E / (2(R_E + h)): 1 point.
- (b) Correct kinetic energy for 1 kg at 400 km, about 2.9 × 10⁷ J (2.8–3.0 × 10⁷ J), using R_E + h rather than h: 1 point.
- (b) Volume about 29 litres (28–30 L): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem E ----------------------------------------------------------
    {
      number: "E",
      title: "Nuclear Fusion",
      topic: "Energy & Stellar Physics",
      topics: ["Energy & Stellar Physics", "Stars & Black Holes"],
      difficulty: "Beginner",
      points: 5,
      text: `The light from the Sun is essential for all life on Earth. For a long time, we did not understand where all of this energy is coming from and how the sunlight is generated. Today, we know that the process of nuclear fusion is responsible for the energy production in the Sun and other stars.

Explain how nuclear fusion in the Sun produces the sunlight we see on Earth.`,
      solution: `1. **Extreme conditions in the core.** The Sun's core is about 15 million K and extremely dense. Protons (hydrogen nuclei) move so fast that they can overcome their electric repulsion (helped by quantum tunnelling) and fuse.

2. **The proton–proton chain.** Two protons fuse, and one of them turns into a neutron, forming deuterium (plus a positron and a neutrino). The deuterium captures another proton to make helium-3, releasing a gamma-ray photon. Two helium-3 nuclei then fuse into helium-4, releasing two protons. Overall: $4\\,{}^{1}\\text{H} \\rightarrow {}^{4}\\text{He} + \\text{energy}$.

3. **Mass becomes energy.** The helium-4 nucleus is about 0.7% lighter than the four protons that made it. The missing mass is released as energy, $E = \\Delta m\\,c^2$, mostly as gamma rays and fast-moving particles.

4. **The long journey out.** The gamma rays are absorbed and re-emitted countless times in the radiative zone (a random walk lasting tens of thousands of years or more), gradually losing energy. Near the surface, convection carries the energy up the rest of the way.

5. **Sunlight.** At the photosphere (about 5800 K) the energy escapes as thermal radiation, mostly visible light, which reaches the Earth about 8.3 minutes later.`,
      rubric: `Astro Coach marking guide (5 points, one per idea):
- High temperature and pressure in the core let hydrogen nuclei (protons) fuse.
- Fusion steps: protons fuse into deuterium (a proton becomes a neutron), then helium (proton–proton chain), overall 4 H → He.
- The mass defect is converted to energy (E = mc²), released as gamma rays.
- The energy travels outward through the Sun (radiation, then convection), losing energy on the way.
- It leaves the photosphere as sunlight (mostly visible light) that travels to Earth.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
      solutionPages: [1],
    },
  ],
};
