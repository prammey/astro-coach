// IAAC Qualification Round 2019: five 5-point problems.
//
// The official solutions give final answers only, so every worked
// explanation here is written by Astro Coach (solutionSource ASTRO_COACH)
// and agrees with the official answers. The paper does not split points
// between sub-parts, so problems with (a)/(b) are graded as a whole.
import type { FrqSeedExam } from "./types";

const YEAR = 2019;

export const iaac2019Qualification: FrqSeedExam = {
  competition: "IAAC",
  year: YEAR,
  examName: "Qualification Round",
  slug: "iaac-2019-qr",
  sourceUrl: "https://iaac.space/",
  questionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}.pdf`,
  solutionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}_Solution.pdf`,
  attributionText: `Source: International Astronomy and Astrophysics Competition (IAAC), Qualification Round ${YEAR}. Problem text transcribed from the official PDF and used with permission; worked solutions written by Astro Coach from the official answers. Astro Coach is independent and not affiliated with IAAC.`,
  questions: [
    // --- Problem A: fill in the blanks (instant check) ----------------------
    {
      number: "A",
      title: "Planets and Stars",
      topic: "Solar System",
      topics: ["Solar System", "Stars & Black Holes", "Galaxies & Universe"],
      difficulty: "Beginner",
      points: 5,
      text: `Fill in the blank spaces with the correct information:

The Earth has a distance of **(1)** light minutes to our Sun. When the Moon covers the Sun we call this event a **(2)**. There are eight planets in the Solar System and **(3)** is the heaviest of them all. The smallest planet is **(4)** and it circles the Sun in just **(5)** days. Besides the planets, there are thousands of stars visible in the night sky. The brightest star is called **(6)** and it is just one of about **(7)** billion stars in our Milky Way. The **(8)** galaxy is the closest spiral galaxy to our Milky Way.`,
      parts: [
        {
          label: "Answers",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Type one answer in each box.",
          blanks: [
            { label: "(1)", prompt: "light minutes", accept: [], numeric: { value: 8.3, tolerance: 0.6 } },
            {
              label: "(2)",
              prompt: "event",
              accept: ["solar eclipse", "total solar eclipse", "eclipse", "total eclipse", "eclipse of the sun"],
            },
            { label: "(3)", prompt: "planet", accept: ["Jupiter"] },
            { label: "(4)", prompt: "planet", accept: ["Mercury"] },
            { label: "(5)", prompt: "days", accept: [], numeric: { value: 88, tolerance: 1 } },
            { label: "(6)", prompt: "star", accept: ["Sirius", "Sirius A", "Alpha Canis Majoris", "Dog Star"] },
            { label: "(7)", prompt: "billion stars", accept: [], numeric: { value: 200, tolerance: 150 } },
            {
              label: "(8)",
              prompt: "galaxy",
              accept: ["Andromeda", "Andromeda Galaxy", "M31", "Messier 31", "Andromeda spiral galaxy"],
            },
          ],
          solution: `**(1) About 8.3 light minutes.** Light takes $t = \\dfrac{1.496\\times10^{11}\\ \\text{m}}{3.00\\times10^{8}\\ \\text{m/s}} \\approx 499\\ \\text{s} \\approx 8.3$ minutes to reach us from the Sun.

**(2) A solar eclipse.** The Moon passes between the Sun and the Earth and blocks the Sun's disc.

**(3) Jupiter.** It has about 318 Earth masses — more than twice the mass of all the other planets combined.

**(4) Mercury**, and **(5) about 88 days.** Mercury is the smallest planet and the closest to the Sun, so it has the shortest year.

**(6) Sirius** (in Canis Major), at apparent magnitude about $-1.46$, is the brightest star in the night sky.

**(7) About 100–400 billion.** Estimates for the number of stars in the Milky Way vary widely; the official answer accepts $200 \\pm 150$ billion.

**(8) Andromeda (M31)**, about 2.5 million light-years away, is the nearest large spiral galaxy.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [1],
      solutionPages: [1],
    },

    // --- Problem B ----------------------------------------------------------
    {
      number: "B",
      title: "The Size of Jupiter",
      topic: "Solar System",
      topics: ["Solar System", "Math, Data & Coordinates"],
      difficulty: "Beginner",
      points: 5,
      text: `The Earth has a radius of $R_E \\approx 6371\\ \\text{km}$ and an average density of $\\rho_E \\approx 5.514\\ \\text{g/cm}^3$. Jupiter is much bigger and heavier with a radius of $R_J \\approx 70000\\ \\text{km}$ and an average density of $\\rho_J \\approx 1326\\ \\text{kg/m}^3$.

Use these values to answer the following questions (write down your steps):

**(a)** Approximately how many Earths fit into Jupiter (by volume)?

**(b)** How many times heavier is Jupiter compared to Earth?`,
      solution: `**(a)** The volume of a sphere is $V = \\tfrac{4}{3}\\pi R^3$, so the $\\tfrac{4}{3}\\pi$ cancels in the ratio:

$$\\frac{V_J}{V_E} = \\left(\\frac{R_J}{R_E}\\right)^3 = \\left(\\frac{70000}{6371}\\right)^3 = (10.99)^3 \\approx 1326$$

About **1326 Earths** fit inside Jupiter.

**(b)** Mass is density times volume, $M = \\rho V$. First put both densities in the same units: $\\rho_E = 5.514\\ \\text{g/cm}^3 = 5514\\ \\text{kg/m}^3$. Then

$$\\frac{M_J}{M_E} = \\frac{\\rho_J}{\\rho_E}\\cdot\\frac{V_J}{V_E} = \\frac{1326}{5514}\\times 1326 \\approx 0.2405 \\times 1326 \\approx 319$$

Jupiter is about **319 times** heavier than the Earth. (It is much less dense because it is made mostly of hydrogen and helium.)`,
      rubric: `Astro Coach marking guide (5 points):
- (a) Volume ratio written as the cube of the radius ratio: 1 point.
- (a) Result about 1326 (1300–1350): 1 point.
- (b) Mass written as density × volume (mass ratio = density ratio × volume ratio): 1 point.
- (b) Densities converted to the same units (5.514 g/cm³ = 5514 kg/m³): 1 point.
- (b) Result about 319 (310–325): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [1],
      solutionPages: [1],
    },

    // --- Problem C ----------------------------------------------------------
    {
      number: "C",
      title: "Space Race to the Moon",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Math, Data & Coordinates"],
      difficulty: "Beginner",
      points: 5,
      text: `Alice and Bob are doing a space race from Earth to the Moon, which is $d \\approx 384000\\ \\text{km}$ away. Alice's spaceship flies with a constant speed of $v = 500\\ \\text{km/h}$. Bob's spaceship starts slowly but accelerates constantly with $a = 1.4\\ \\text{km/h}^2$.

Who wins this space race? (Write down your steps.)`,
      solution: `**Alice** moves at constant speed, so distance = speed × time:

$$t_A = \\frac{d}{v} = \\frac{384000\\ \\text{km}}{500\\ \\text{km/h}} = 768\\ \\text{h}$$

**Bob** starts from rest with constant acceleration, so $d = \\tfrac{1}{2} a t^2$:

$$t_B = \\sqrt{\\frac{2d}{a}} = \\sqrt{\\frac{2 \\times 384000\\ \\text{km}}{1.4\\ \\text{km/h}^2}} = \\sqrt{548571\\ \\text{h}^2} \\approx 741\\ \\text{h}$$

Since $741\\ \\text{h} < 768\\ \\text{h}$, **Bob wins**, by about 27 hours. (Bob is slower at first, but by the end he is moving at $a t_B \\approx 1037\\ \\text{km/h}$.)`,
      rubric: `Astro Coach marking guide (5 points):
- Alice's time from t = d/v: 1 point.
- Alice's time 768 h: 1 point.
- Bob's motion described by d = ½at² (starting from rest): 1 point.
- Bob's time about 741 h: 1 point.
- Correct conclusion that Bob wins: 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem D ----------------------------------------------------------
    {
      number: "D",
      title: "Forces between Earth and Moon",
      topic: "Gravity & Orbits",
      difficulty: "Intermediate",
      points: 5,
      text: `Alice and Bob will encounter on their space race the so-called Lagrange point $L_1$, at which the forces from Earth and Moon cancel out. The gravitational force on the spaceships is given by

$$F(r) = mG\\left(\\frac{M_E}{r^2} - \\frac{M_M}{(d-r)^2}\\right)$$

with the constant $G$, the mass of the spaceship $m$, the masses $M_E$, $M_M$ of Earth and Moon, the distance $d$ between Earth and Moon, and the distance $r$ of the spacecraft to the centre of the Earth. For this problem we assume that the Earth–Moon system is at rest.

**(a)** Use $F(r)$ to find a formula that calculates the distance to the Lagrange point $L_1$.

**(b)** Explain missing aspects in this calculation due to the assumption that the "Earth–Moon system is at rest".`,
      solution: `**(a)** At $L_1$ the net force is zero, $F(r_1) = 0$:

$$\\frac{M_E}{r_1^2} = \\frac{M_M}{(d-r_1)^2} \\quad\\Longrightarrow\\quad \\frac{d-r_1}{r_1} = \\sqrt{\\frac{M_M}{M_E}}$$

(taking the positive root, because $L_1$ lies between the Earth and the Moon). Solving for $r_1$:

$$r_1 = \\frac{d}{1+\\sqrt{M_M/M_E}} = \\frac{d\\sqrt{M_E}}{\\sqrt{M_E}+\\sqrt{M_M}}$$

With $M_M/M_E \\approx 0.0123$, $\\sqrt{M_M/M_E} \\approx 0.111$, so $r_1 \\approx 0.90\\,d \\approx 346000\\ \\text{km}$ from the centre of the Earth.

**(b)** The Earth–Moon system is **not at rest**: the Moon and the Earth both orbit their common centre of mass once a month. An object that stays at $L_1$ must go around with them, so it needs a net force towards the centre of its circular path ($m\\omega^2 r$). The real $L_1$ is therefore where gravity minus the required centripetal force balances — in the rotating frame, the centrifugal force must be included. This moves $L_1$ closer to the Earth (about $326000\\ \\text{km}$, roughly $58000\\ \\text{km}$ from the Moon), and the rotation also creates the other Lagrange points $L_2$–$L_5$, which the "at rest" model cannot produce.`,
      rubric: `Astro Coach marking guide (5 points):
- (a) Sets F(r) = 0 and equates the two gravitational terms: 1 point.
- (a) Correct algebra taking the square root: 1 point.
- (a) Final formula r = d / (1 + √(M_M/M_E)) or an equivalent form: 1 point.
- (b) Identifies that the system rotates (Earth and Moon orbit their common centre of mass / the object must co-rotate): 1 point.
- (b) Explains the consequence: a centripetal/centrifugal term is missing, which shifts L1 and gives extra Lagrange points: 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem E ----------------------------------------------------------
    {
      number: "E",
      title: "Polar Lights",
      topic: "Solar System",
      topics: ["Solar System", "Light & Spectra"],
      difficulty: "Beginner",
      points: 5,
      text: `Since the existence of humans, we have been fascinated by the natural phenomenon of polar lights (aurora). The various colours in the skies have inspired many stories and are a symbol of the beauty of nature. Today, we understand the underlying scientific reasons for this phenomenon.

Explain the causes and scientific reasons that explain polar lights.`,
      solution: `1. **The source is the Sun.** The Sun constantly releases the solar wind, a stream of charged particles (mostly electrons and protons). Solar storms such as flares and coronal mass ejections send out especially strong bursts.

2. **Earth's magnetic field steers the particles.** Charged particles cannot cross magnetic field lines easily; they spiral along them. Most are deflected, but some are guided down the field lines towards the magnetic poles. That is why aurorae appear in rings around the north and south magnetic poles.

3. **Collisions excite the atmosphere.** About 100–300 km up, the fast particles hit oxygen atoms and nitrogen molecules, knocking their electrons into higher energy levels (excitation) or removing them (ionisation).

4. **The atoms release light.** When the electrons fall back to lower energy levels, the atoms emit photons of specific wavelengths — the same physics as the emission lines in a spectrum.

5. **The colour depends on the gas.** Oxygen gives the common green light (557.7 nm) and, higher up, red; nitrogen gives blue and violet (and some red/pink at the lower edge). Strong solar activity makes the aurora brighter and visible farther from the poles.`,
      rubric: `Astro Coach marking guide (5 points, one per idea):
- Charged particles from the Sun (solar wind, flares, coronal mass ejections).
- Earth's magnetic field guides the particles towards the polar regions.
- The particles collide with atoms/molecules in the upper atmosphere and excite or ionise them.
- The atoms emit light when they return to lower energy states.
- The colours depend on the gas (oxygen green/red, nitrogen blue/violet).`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
      solutionPages: [1],
    },
  ],
};
