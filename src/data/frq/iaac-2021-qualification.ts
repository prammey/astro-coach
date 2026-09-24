// IAAC Qualification Round 2021: five 5-point problems.
//
// The official solutions give final answers only (and none at all for
// Problem E), so every worked explanation here is written by Astro Coach
// (solutionSource ASTRO_COACH) and agrees with the official answers.
// Problem A is checked instantly and free; B–E need working or explanation
// and are AI-graded as a whole (the paper does not split their points).
import type { FrqSeedExam } from "./types";

const YEAR = 2021;

export const iaac2021Qualification: FrqSeedExam = {
  competition: "IAAC",
  year: YEAR,
  examName: "Qualification Round",
  slug: "iaac-2021-qr",
  sourceUrl: "https://iaac.space/",
  questionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}.pdf`,
  solutionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}_Solution.pdf`,
  attributionText: `Source: International Astronomy and Astrophysics Competition (IAAC), Qualification Round ${YEAR}. Problem text transcribed from the official PDF and used with permission; worked solutions written by Astro Coach from the official answers. Astro Coach is independent and not affiliated with IAAC.`,
  questions: [
    // --- Problem A: night-sky quiz (instant check) --------------------------
    {
      number: "A",
      title: "Observing the Night Sky",
      topic: "Telescopes & Observing",
      topics: ["Telescopes & Observing", "Solar System", "Stars & Black Holes"],
      difficulty: "Beginner",
      points: 5,
      text: `Fill in the blank spaces with the correct answers:

**(1)** Approximately how many stars are visible with the naked eye in the night sky?

**(2)** Where in the night sky can you observe the famous double star system Mizar and Alcor?

**(3)** What kind of celestial object is Neowise C/2020 F3 and what makes it special?

**(4)** Which very intense meteor shower is taking place annually in December?

**(5)–(7)** What are the names of the following three well-known constellations?

[[figure:constellations]]`,
      figures: [
        {
          key: "constellations",
          file: "constellations.png",
          caption: "Constellations (5), (6) and (7)",
          sourcePage: 1,
        },
      ],
      parts: [
        {
          label: "Answers",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Type one answer in each box.",
          blanks: [
            { label: "(1)", prompt: "number of stars", accept: [], numeric: { value: 5500, tolerance: 3500 } },
            {
              label: "(2)",
              prompt: "constellation",
              accept: [
                "Ursa Major",
                "in Ursa Major",
                "constellation Ursa Major",
                "Big Dipper",
                "in the Big Dipper",
                "handle of the Big Dipper",
                "in the handle of the Big Dipper",
                "Great Bear",
                "Plough",
                "the Plough",
              ],
              containsAll: ["ursa", "major"],
            },
            { label: "(3)", prompt: "kind of object and why special", accept: [], containsAll: ["comet"] },
            { label: "(4)", prompt: "meteor shower", accept: ["Geminids", "Geminid", "Geminid meteor shower", "Geminids meteor shower"] },
            { label: "(5)", prompt: "constellation", accept: ["Cassiopeia"] },
            { label: "(6)", prompt: "constellation", accept: ["Cygnus", "Northern Cross", "the Swan", "Swan"] },
            { label: "(7)", prompt: "constellation", accept: ["Andromeda"] },
          ],
          solution: `**(1) A few thousand.** Under a dark sky the eye can see stars down to about magnitude 6: roughly 9000 stars over the whole sky, of which about half (2000–4500) are above the horizon at any one time. Any answer from 2000 to 9000 is accepted.

**(2) In Ursa Major (the Great Bear)** — Mizar is the middle star of the handle of the Big Dipper, and faint Alcor sits right next to it. Seeing both was a traditional eyesight test.

**(3) A comet**, and a special one: C/2020 F3 (NEOWISE) was bright enough to see with the naked eye in July 2020 — the brightest comet seen from the Northern Hemisphere since Hale–Bopp in 1997, with a long visible tail.

**(4) The Geminids**, peaking around 13–14 December. Unusually, their parent body is an asteroid, 3200 Phaethon, rather than a comet.

**(5) Cassiopeia**, the famous "W" (or "M") of five bright stars.

**(6) Cygnus**, the Swan, whose brightest stars form the Northern Cross.

**(7) Andromeda**, the constellation that contains the Andromeda Galaxy (M31).`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [1],
      solutionPages: [1],
    },

    // --- Problem B ----------------------------------------------------------
    {
      number: "B",
      title: "Shock Wave Escape",
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Math, Data & Coordinates"],
      difficulty: "Intermediate",
      points: 5,
      text: `The star of a distant solar system explodes as a supernova. At the moment of the explosion, a resting exploration spaceship is $15\\ \\text{AU}$ away from the shock wave. The shock wave of the explosion travels with $25000\\ \\text{km/s}$ towards the spaceship. To save the crew, the spacecraft makes use of a special booster that uniformly accelerates at $150\\ \\text{m/s}^2$ in the opposite direction.

Determine if the crew manages to escape from the shock wave. (Neglect relativistic effects.)`,
      solution: `Measure positions from the shock wave's starting point. After time $t$:

- the shock wave is at $x_s = v t$, with $v = 2.5\\times10^{7}\\ \\text{m/s}$;
- the ship (starting at rest, $d = 15\\ \\text{AU}$ away) is at $x_{ship} = d + \\tfrac{1}{2} a t^2$, with $a = 150\\ \\text{m/s}^2$.

The shock wave catches the ship if $v t = d + \\tfrac{1}{2} a t^2$ has a solution. This quadratic, $\\tfrac{1}{2}a t^2 - v t + d = 0$, has real solutions only if its discriminant is not negative:

$$v^2 - 2 a d \\ge 0 \\quad\\Longleftrightarrow\\quad a \\le \\frac{v^2}{2d}$$

So the ship escapes if $a > \\dfrac{v^2}{2d}$. With $d = 15 \\times 1.496\\times10^{11}\\ \\text{m} = 2.24\\times10^{12}\\ \\text{m}$:

$$\\frac{v^2}{2d} = \\frac{(2.5\\times10^{7})^2}{2 \\times 2.24\\times10^{12}} \\approx 139\\ \\text{m/s}^2$$

Since $150\\ \\text{m/s}^2 > 139\\ \\text{m/s}^2$, **the crew escapes** — but only just. (The gap is smallest when the ship's speed equals the shock speed, at $t = v/a \\approx 1.7\\times10^{5}\\ \\text{s} \\approx 46$ hours; even then about 1 AU of space remains.)`,
      rubric: `Astro Coach marking guide (5 points):
- Position of the shock wave, x = vt: 1 point.
- Position of the ship, x = d + ½at² (starting from rest, 15 AU ahead): 1 point.
- Sets up the catch-up condition (equal positions / smallest gap at equal speeds): 1 point.
- Finds the critical acceleration v²/(2d) ≈ 139 m/s² (or the minimum gap ≈ 1 AU > 0): 1 point.
- Correct conclusion that the crew escapes: 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem C ----------------------------------------------------------
    {
      number: "C",
      title: "Mysterious Planet",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Intermediate",
      points: 5,
      text: `A research team has discovered that a moon is circling a planet of our solar system: the moon orbits the planet once every 7 hours on a nearly circular orbit at a distance $R$ of $48000\\ \\text{km}$ from the centre of the planet. Unfortunately, the mass $m$ of the moon is not known. Use Newton's law of gravitation with $G = 6.67\\cdot10^{-11}\\ \\text{m}^3/(\\text{kg}\\cdot\\text{s}^2)$ to approach the following questions:

$$F = G\\cdot\\frac{mM}{R^2} \\qquad (1)$$

**(a)** Based on the observations, determine the total mass $M$ of the planet.

**(b)** Which moon and planet of our solar system is the team observing? (Use literature.)`,
      solution: `**(a)** Gravity provides the centripetal force of the circular orbit, and the moon's speed is $v = 2\\pi R / T$:

$$\\frac{G m M}{R^2} = \\frac{m v^2}{R} \\quad\\Longrightarrow\\quad M = \\frac{v^2 R}{G} = \\frac{4\\pi^2 R^3}{G T^2}$$

The moon's mass $m$ cancels, which is why we don't need it. With $R = 4.8\\times10^{7}\\ \\text{m}$ and $T = 7\\ \\text{h} = 25200\\ \\text{s}$:

$$M = \\frac{4\\pi^2 (4.8\\times10^{7})^3}{(6.67\\times10^{-11})(25200)^2} \\approx 1.03\\times10^{26}\\ \\text{kg}$$

**(b)** A mass of $1.03\\times10^{26}\\ \\text{kg}$ (about 17 Earth masses) matches **Neptune**. Its innermost moon, **Naiad**, orbits about 48,000 km from Neptune's centre once every 7 hours.`,
      rubric: `Astro Coach marking guide (5 points):
- (a) Equates gravitational and centripetal force: 1 point.
- (a) Uses v = 2πR/T (or ω = 2π/T) and obtains M = 4π²R³/(GT²): 1 point.
- (a) Converts units correctly (km → m, hours → s): 1 point.
- (a) M ≈ 1.0 × 10²⁶ kg (0.98–1.08 × 10²⁶ kg): 1 point.
- (b) Neptune and its moon Naiad: 1 point (both needed).`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem D ----------------------------------------------------------
    {
      number: "D",
      title: "Gravitational Constant",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Intermediate",
      points: 5,
      text: `An astronaut working on the Moon tries to determine the gravitational constant $G$ by throwing a Moon rock of mass $m$ with a velocity of $v$ vertically into the sky. The astronaut knows that the Moon has a density $\\rho$ of $3340\\ \\text{kg/m}^3$ and a radius $R$ of $1740\\ \\text{km}$.

(Equation (1) is Newton's law of gravitation, $F = G\\cdot\\dfrac{mM}{R^2}$, from Problem C.)

**(a)** Show with (1) that the potential energy of the rock at height $h$ above the surface is given by:

$$E = -\\frac{4\\pi G}{3}\\,m\\rho\\cdot\\frac{R^3}{R+h} \\qquad (2)$$

**(b)** Next, show that the gravitational constant can be determined by:

$$G = \\frac{3}{8\\pi}\\,\\frac{v^2}{\\rho R^2}\\left(1-\\frac{R}{R+h}\\right)^{-1} \\qquad (3)$$

**(c)** What is the resulting $G$ if the rock is thrown with $30\\ \\text{km/h}$ and reaches $21.5\\ \\text{m}$?`,
      solution: `**(a)** The potential energy at distance $r = R+h$ from the Moon's centre is the (negative) work needed to bring the rock in from infinity:

$$E = -\\int_{R+h}^{\\infty} \\frac{G m M}{s^2}\\,ds = -\\frac{G m M}{R+h}$$

The Moon's mass is density times volume, $M = \\tfrac{4}{3}\\pi R^3 \\rho$, so

$$E = -\\frac{4\\pi G}{3}\\,m\\rho\\cdot\\frac{R^3}{R+h}$$

**(b)** Energy is conserved between the throw (height 0, speed $v$) and the top of the flight (height $h$, speed 0):

$$\\tfrac{1}{2} m v^2 + E(0) = E(h)$$

$$\\tfrac{1}{2} m v^2 = \\frac{4\\pi G}{3} m \\rho R^3 \\left(\\frac{1}{R} - \\frac{1}{R+h}\\right) = \\frac{4\\pi G}{3} m \\rho R^2 \\left(1 - \\frac{R}{R+h}\\right)$$

Solving for $G$:

$$G = \\frac{3}{8\\pi}\\,\\frac{v^2}{\\rho R^2}\\left(1-\\frac{R}{R+h}\\right)^{-1}$$

**(c)** $v = 30\\ \\text{km/h} = 8.33\\ \\text{m/s}$, $R = 1.74\\times10^{6}\\ \\text{m}$, $h = 21.5\\ \\text{m}$. Note $\\left(1 - \\frac{R}{R+h}\\right)^{-1} = \\frac{R+h}{h} \\approx 8.09\\times10^{4}$. Then

$$G = \\frac{3}{8\\pi}\\cdot\\frac{(8.33)^2}{3340 \\times (1.74\\times10^{6})^2}\\times 8.09\\times10^{4} \\approx 6.63\\times10^{-11}\\ \\text{m}^3\\text{kg}^{-1}\\text{s}^{-2}$$

This is within 1% of the accepted value, $6.674\\times10^{-11}$.`,
      rubric: `Astro Coach marking guide (5 points):
- (a) Potential energy from integrating the force (or E = −GMm/(R+h)): 1 point.
- (a) Substitutes M = (4/3)πR³ρ to reach equation (2): 1 point.
- (b) Uses energy conservation between the surface and the highest point: 1 point.
- (b) Correct algebra to reach equation (3): 1 point.
- (c) G ≈ 6.6 × 10⁻¹¹ m³ kg⁻¹ s⁻² (6.5–6.7 × 10⁻¹¹), with 30 km/h converted to m/s: 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem E ----------------------------------------------------------
    {
      number: "E",
      title: "Pulsars",
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Telescopes & Observing"],
      difficulty: "Beginner",
      points: 5,
      text: `Radio telescopes are an essential tool for modern astrophysics. They played a crucial role in discovering a fascinating astronomical object: pulsars — highly compact objects that periodically emit radiation. Pulsars are still an active part of astrophysical research.

Explain how pulsars are formed and the causes for their pulsating behaviour.`,
      solution: `**How pulsars form**

1. A massive star (roughly 8–20 solar masses or more) burns through its fuel and builds an iron core, which cannot release energy by fusion.

2. The core collapses in under a second. Electrons are pressed into protons, forming neutrons, and the collapse stops when the neutrons are packed tightly together (neutron degeneracy pressure). The outer layers are blown away in a **core-collapse supernova**.

3. What remains is a **neutron star**: about 1.4 solar masses packed into a sphere only about 20 km across.

**Why they pulse**

4. **Fast spin and strong magnetism.** The core keeps its angular momentum as it shrinks, so it spins very fast (up to hundreds of times a second), just as a skater spins faster when pulling in their arms. Its magnetic field is also squeezed, becoming around $10^{8}$–$10^{12}$ times stronger than the Sun's.

5. **The lighthouse effect.** Charged particles are accelerated along the magnetic field and emit beams of radiation (especially radio waves) from the magnetic poles. The magnetic axis is tilted relative to the spin axis, so the beams sweep around the sky. Each time a beam crosses the Earth we see a pulse — extremely regular, with a period equal to the rotation period. Jocelyn Bell Burnell and Antony Hewish discovered the first pulsar this way in 1967.`,
      rubric: `Astro Coach marking guide (5 points, one per idea):
- A massive star ends its life in a core-collapse supernova.
- The core collapses into a neutron star (very dense, about 20 km across, held up by neutron degeneracy pressure).
- Conservation of angular momentum makes it spin very fast.
- It has a very strong magnetic field; radiation is beamed from the magnetic poles.
- The magnetic axis is tilted from the rotation axis, so the beams sweep past Earth like a lighthouse, giving regular pulses.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
      solutionPages: [1],
    },
  ],
};
