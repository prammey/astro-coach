// IAAC Qualification Round 2025: five 5-point problems.
//
// The official solutions give final answers only, so every worked
// explanation here is written by Astro Coach (solutionSource ASTRO_COACH).
// Problems A and B have short final answers and are checked instantly and
// free; C–E need working or explanation and are AI-graded as a whole.
//
// Corrections to the official answer sheet (explained in the solutions):
//   - B: the Earth's scaled diameter is 0.2 cm = 2 mm, not "20 mm".
//   - D: β = 1.0164 gives q = 1/β − 1 = −0.016, not "−0.161" (a misplaced
//     decimal point). The conclusion, accelerating expansion, is unchanged.
import type { FrqSeedExam } from "./types";

const YEAR = 2025;

export const iaac2025Qualification: FrqSeedExam = {
  competition: "IAAC",
  year: YEAR,
  examName: "Qualification Round",
  slug: "iaac-2025-qr",
  sourceUrl: "https://iaac.space/",
  questionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}.pdf`,
  solutionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}_Solution.pdf`,
  attributionText: `Source: International Astronomy and Astrophysics Competition (IAAC), Qualification Round ${YEAR}. Problem text transcribed from the official PDF and used with permission; worked solutions written by Astro Coach from the official answers. Astro Coach is independent and not affiliated with IAAC.`,
  questions: [
    // --- Problem A: label the telescope (instant check) ---------------------
    {
      number: "A",
      title: "Reflector Telescope",
      topic: "Telescopes & Observing",
      difficulty: "Beginner",
      points: 5,
      text: `One of the most essential tools for astronomical research are telescopes. They allow us to see much further into space than possible with our eyes. Not only scientists but also astronomy enthusiasts from around the world use telescopes to explore the universe from home.

Find the correct names of the components tagged with the letters A to I in the sketch below.

[[figure:telescope]]`,
      figures: [
        { key: "telescope", file: "telescope.png", caption: "A reflector telescope on a tripod, components A–I", sourcePage: 1 },
      ],
      parts: [
        {
          label: "Answers",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Name each labelled component.",
          blanks: [
            {
              label: "(A)",
              prompt: "component",
              accept: ["secondary mirror", "secondary", "diagonal mirror", "diagonal", "flat mirror", "secondary diagonal mirror", "plane mirror"],
            },
            {
              label: "(B)",
              prompt: "component",
              accept: ["focuser", "focusing knob", "focus knob", "focuser knob", "focusing tube", "focuser tube", "drawtube", "draw tube", "focuser assembly", "focusing mechanism"],
            },
            { label: "(C)", prompt: "component", accept: ["eyepiece", "eye piece", "ocular", "eyepiece lens"] },
            {
              label: "(D)",
              prompt: "component",
              accept: ["telescope tube", "tube", "optical tube", "optical tube assembly", "OTA", "main tube", "telescope body"],
            },
            {
              label: "(E)",
              prompt: "component",
              accept: ["primary mirror", "main mirror", "primary", "concave mirror", "parabolic mirror", "objective mirror", "primary concave mirror"],
            },
            {
              label: "(F)",
              prompt: "component",
              accept: ["mount base", "mount", "mount head", "mounting", "telescope mount", "alt-az mount", "altazimuth mount", "alt azimuth mount", "base", "mount base (alt-az)"],
            },
            { label: "(G)", prompt: "component", accept: ["tripod leg", "tripod legs", "leg", "tripod"] },
            {
              label: "(H)",
              prompt: "component",
              accept: ["accessory tray", "tray", "accessory shelf", "tripod tray", "eyepiece tray", "leg spreader", "spreader", "accessory tray (spreader)"],
            },
            {
              label: "(I)",
              prompt: "component",
              accept: ["tripod leg extension", "leg extension", "extension leg", "extendable leg", "telescopic leg", "lower leg", "tripod extension", "leg extender"],
            },
          ],
          solution: `This is a **Newtonian reflector**: light enters the open top of the tube, reflects off the curved primary mirror at the bottom, and a small flat mirror near the top sends it out of the side to the eyepiece (the blue dashed lines in the sketch).

- **(A) Secondary mirror** — the small flat (diagonal) mirror that turns the light 90° towards the side of the tube.
- **(B) Focuser** — the adjustable holder that moves the eyepiece in and out to bring the image into focus.
- **(C) Eyepiece** — the lens you look through; it magnifies the image formed by the mirrors.
- **(D) Telescope tube** — the optical tube that holds the mirrors in line and blocks stray light.
- **(E) Primary mirror** — the large concave (parabolic) mirror that collects and focuses the light. Its diameter sets how much light the telescope gathers.
- **(F) Mount base** — the mount head connecting the tube to the tripod and letting it turn.
- **(G) Tripod leg**, **(H) accessory tray** (which also spreads and steadies the legs) and **(I) tripod leg extension** — the sliding lower section that adjusts the height.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [1],
      solutionPages: [1],
    },

    // --- Problem B: football-sized Sun (instant check) ----------------------
    {
      number: "B",
      title: "Distance to Alpha Centauri",
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Solar System", "Stars & Black Holes"],
      difficulty: "Beginner",
      points: 5,
      text: `Travelling to another star is a challenge because of the great distances between stars. The Alpha Centauri star system is the closest to the Sun, with its nearest member located 4.25 light-years away. The Sun and the Earth have a diameter of $1{,}400{,}000\\ \\text{km}$ and $12{,}750\\ \\text{km}$, respectively, and they are on average $1\\ \\text{AU}$ (astronomical unit; $\\approx 1.496\\cdot10^{8}\\ \\text{km}$) far away from each other.

Assume that the Sun has a diameter of $22\\ \\text{cm}$, the size of a football. On this scale, what would be the size of the Earth, the distance between the Earth and the Sun, and to the nearest star?

[[figure:scale]]`,
      figures: [
        { key: "scale", file: "scale.png", caption: "Sun, Earth and Alpha Centauri (not to scale)", sourcePage: 2 },
      ],
      parts: [
        {
          label: "Answers",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Give each answer with its unit.",
          blanks: [
            {
              label: "Earth's diameter",
              prompt: "in cm",
              accept: [],
              numeric: { value: 0.2, tolerance: 0.01 },
              numericInOtherUnits: [{ value: 2, tolerance: 0.1, units: ["mm", "millimetre", "millimetres", "millimeter", "millimeters"] }],
            },
            {
              label: "Earth–Sun distance",
              prompt: "in m",
              accept: [],
              numeric: { value: 23.5, tolerance: 0.3 },
              numericInOtherUnits: [{ value: 2351, tolerance: 30, units: ["cm", "centimetre", "centimetres", "centimeter", "centimeters"] }],
            },
            {
              label: "Distance to Alpha Centauri",
              prompt: "in km",
              accept: [],
              numeric: { value: 6318.6, tolerance: 60 },
              numericInOtherUnits: [{ value: 6.3186e6, tolerance: 6e4, units: ["m", "metre", "metres", "meter", "meters"] }],
            },
          ],
          solution: `The scale shrinks the Sun's $1{,}400{,}000\\ \\text{km}$ to $22\\ \\text{cm}$, so every length is multiplied by

$$k = \\frac{22\\ \\text{cm}}{1.4\\times10^{6}\\ \\text{km}} = 1.571\\times10^{-5}\\ \\text{cm per km}$$

**Earth's diameter:** $12{,}750\\ \\text{km} \\times k \\approx 0.20\\ \\text{cm} = 2\\ \\text{mm}$ — a peppercorn next to a football. (The official answer sheet writes "20 mm" in brackets; that is a slip, since 0.2 cm is 2 mm.)

**Earth–Sun distance:** $1.496\\times10^{8}\\ \\text{km} \\times k \\approx 2351\\ \\text{cm} \\approx 23.5\\ \\text{m}$.

**Distance to Alpha Centauri:** $4.25\\ \\text{ly} = 4.25 \\times 9.461\\times10^{12}\\ \\text{km} \\approx 4.02\\times10^{13}\\ \\text{km}$, so

$$4.02\\times10^{13}\\ \\text{km} \\times k \\approx 6.32\\times10^{8}\\ \\text{cm} \\approx 6319\\ \\text{km}$$

With a football-sized Sun, the Earth is 23.5 m away, but the nearest star is about **6300 km** away — roughly the distance from New York to Berlin.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem C ----------------------------------------------------------
    {
      number: "C",
      title: "Density of Planets",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Beginner",
      points: 5,
      text: `Knowing the density of planets is important for understanding their physical structure. It is possible to determine the average density $\\rho$ of a planet simply by measuring the gravitational acceleration $g$ at the planet's surface and the planet's radius $R$.

**(a)** Show that the average density of a planet can be calculated using this equation:

$$\\rho(g, R) = \\frac{3}{4\\gamma\\pi}\\cdot g\\cdot\\frac{1}{R}$$

**(b)** The gravitational acceleration on Earth is $9.81\\ \\text{m/s}^2$. What is the Earth's average density?

(Note: $\\gamma = 6.674\\cdot10^{-11}\\ \\text{m}^3/\\text{kg}/\\text{s}^2$ is the gravitational constant.)`,
      solution: `**(a)** At the surface, an object's weight equals the gravitational force from the planet:

$$F = mg = \\gamma\\,\\frac{mM}{R^2} \\quad\\Longrightarrow\\quad g = \\frac{\\gamma M}{R^2}$$

The mass is density times the volume of a sphere, $M = \\rho\\cdot\\tfrac{4}{3}\\pi R^3$, so

$$g = \\frac{\\gamma}{R^2}\\cdot\\rho\\,\\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\gamma\\pi\\rho R \\quad\\Longrightarrow\\quad \\rho = \\frac{3}{4\\gamma\\pi}\\cdot g\\cdot\\frac{1}{R}$$

**(b)** With $R = 6371\\ \\text{km} = 6.371\\times10^{6}\\ \\text{m}$:

$$\\rho = \\frac{3 \\times 9.81}{4 \\times 6.674\\times10^{-11} \\times \\pi \\times 6.371\\times10^{6}} \\approx 5.5\\times10^{3}\\ \\text{kg/m}^3$$

The Earth's average density is about **5500 kg/m³** (5.5 g/cm³) — twice that of surface rocks, which tells us the core must be made of something much denser, such as iron.`,
      rubric: `Astro Coach marking guide (5 points):
- (a) Sets mg equal to Newton's gravitational force, giving g = γM/R²: 1 point.
- (a) Writes M = ρ · (4/3)πR³: 1 point.
- (a) Rearranges to the given formula: 1 point.
- (b) Uses Earth's radius (about 6371 km, converted to metres): 1 point.
- (b) ρ ≈ 5500 kg/m³ (5400–5600 kg/m³): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem D ----------------------------------------------------------
    {
      number: "D",
      title: "Cosmological Model",
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Math, Data & Coordinates"],
      difficulty: "Advanced",
      points: 5,
      text: `Cosmology studies the universe as a whole and how it develops over time: the scale factor $a(t)$ describes the change of distance in the universe. The Hubble parameter $H(t) = \\dot{a}(t)/a(t)$ (where the dot represents the rate of change with respect to time) describes the rate at which the universe expands, and was measured to be around $72.6\\ \\text{km/s/Mpc}$ using the James Webb Space Telescope in 2024. The deceleration parameter $q$ describes the acceleration of the expansion:

$$q = -\\left(1 + \\frac{\\dot{H}}{H^2}\\right)$$

Assume a model with $a(t) = \\lambda\\cdot t^{\\beta}$, where $\\lambda$ and $\\beta$ are real numbers. Knowing that the universe is around 13.7 billion years old, determine if the expansion is accelerating or decelerating.`,
      solution: `**1. The Hubble parameter.** With $a = \\lambda t^{\\beta}$, the derivative is $\\dot{a} = \\lambda\\beta t^{\\beta-1}$, so

$$H(t) = \\frac{\\dot{a}}{a} = \\frac{\\lambda\\beta t^{\\beta-1}}{\\lambda t^{\\beta}} = \\frac{\\beta}{t}$$

**2. The deceleration parameter.** $\\dot{H} = -\\beta/t^2$, so

$$q = -\\left(1 + \\frac{-\\beta/t^2}{\\beta^2/t^2}\\right) = -\\left(1 - \\frac{1}{\\beta}\\right) = \\frac{1}{\\beta} - 1$$

The expansion accelerates when $q < 0$, i.e. when $\\beta > 1$.

**3. Today's value of $\\beta$.** From step 1, $\\beta = H_0 t_0$. Convert $H_0$ to SI units ($1\\ \\text{Mpc} = 3.086\\times10^{19}\\ \\text{km}$) and the age to seconds:

$$H_0 = \\frac{72.6\\ \\text{km/s}}{3.086\\times10^{19}\\ \\text{km}} = 2.35\\times10^{-18}\\ \\text{s}^{-1}, \\qquad t_0 = 13.7\\times10^{9} \\times 3.15\\times10^{7}\\ \\text{s} = 4.32\\times10^{17}\\ \\text{s}$$

$$\\beta = H_0 t_0 \\approx 1.016 \\quad\\Longrightarrow\\quad q = \\frac{1}{1.016} - 1 \\approx -0.016$$

Since $q < 0$ (because $\\beta > 1$), **the expansion is accelerating** — only slightly in this simple model.

(The official answer gives $\\beta = 1.0164$ and prints $q = -0.161$; the correct value from that $\\beta$ is $q \\approx -0.016$. The sign, and so the conclusion, is the same.)`,
      rubric: `Astro Coach marking guide (5 points):
- Derives H = β/t from a = λt^β: 1 point.
- Derives Ḣ = −β/t² and q = 1/β − 1: 1 point.
- Uses β = H₀t₀: 1 point.
- Correct unit conversion giving β ≈ 1.02 (1.01–1.02): 1 point.
- Concludes q < 0, so the expansion is accelerating: 1 point. (Accept q ≈ −0.016; also accept the official −0.161 if the working is otherwise right.)`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem E ----------------------------------------------------------
    {
      number: "E",
      title: "Comets",
      topic: "Solar System",
      difficulty: "Beginner",
      points: 5,
      text: `In January 2025, the comet C/2024 G3 passed by the Sun at a close distance of $0.09\\ \\text{AU}$. Because the comet was shining exceptionally bright, it is now called the Great Comet of 2025, and it is one of five comets in the last 100 years that can be observed with the naked eye during daylight. Other less bright comets pass by the Sun frequently and they are observable through telescopes.

Describe the materials of which a comet consists and explain why the bright tail forms.`,
      solution: `**What a comet is made of**

1. The solid centre, the **nucleus**, is a "dirty snowball" (or "icy dirtball") a few kilometres across: a mixture of **ices** — mostly water ice, plus frozen carbon dioxide, carbon monoxide, methane and ammonia — with **dust and rocky material** and dark organic compounds coating the surface.

2. Comets formed in the cold outer Solar System (the Kuiper belt and the Oort cloud), where the ices stay frozen. Far from the Sun, a comet is just a small, dark, inactive nucleus.

**Why the bright tail forms**

3. As the comet approaches the Sun, sunlight heats the nucleus and the ices **sublimate** (turn directly into gas), releasing dust as well. This forms a glowing cloud around the nucleus, the **coma**.

4. **Radiation pressure** from sunlight pushes the dust away from the Sun, forming a curved, yellowish **dust tail**. The **solar wind** and the Sun's magnetic field sweep the ionised gas straight back, forming a straight, bluish **ion (plasma) tail**. Both tails therefore point away from the Sun, not behind the comet's path.

5. The tails shine because the dust **reflects sunlight** and the ionised gas **emits its own light** (fluorescence) when excited by the Sun's ultraviolet radiation. Closer to the Sun, more material is released, so the tail becomes brighter and longer — which is why C/2024 G3, passing only 0.09 AU from the Sun, became so bright.`,
      rubric: `Astro Coach marking guide (5 points, one per idea):
- The nucleus is made of ices (water, CO₂, CO, etc.) mixed with dust and rock ("dirty snowball").
- Comets come from the cold outer Solar System, where the ices stay frozen.
- Near the Sun, heating makes the ices sublimate, releasing gas and dust (forming the coma).
- Radiation pressure and the solar wind push the dust and ionised gas away from the Sun, forming the tails (dust tail and ion tail).
- The tail is bright because dust reflects sunlight and ionised gas emits light.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
      solutionPages: [1],
    },
  ],
};
