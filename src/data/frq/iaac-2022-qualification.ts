// IAAC Qualification Round 2022: five 5-point problems.
//
// The official solutions give final answers only, so every worked
// explanation here is written by Astro Coach (solutionSource ASTRO_COACH).
// Problems A and B have short final answers and are checked instantly and
// free; C–E need working or explanation and are AI-graded as a whole.
//
// Correction: for D(c) the official answer is 2.57 × 10⁻⁴ m/s² (printed
// with the unit "m/s"). The answer is the small difference of two nearly
// equal accelerations, so it is very sensitive to the constants used;
// careful calculation (and the check 3ω²d) gives about 1.8 × 10⁻⁴ m/s².
// The solution explains this and the rubric accepts both.
import type { FrqSeedExam } from "./types";

const YEAR = 2022;

export const iaac2022Qualification: FrqSeedExam = {
  competition: "IAAC",
  year: YEAR,
  examName: "Qualification Round",
  slug: "iaac-2022-qr",
  sourceUrl: "https://iaac.space/",
  questionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}.pdf`,
  solutionPdfUrl: `https://iaac.space/docs/problems/${YEAR}/IAAC_Qualification_Round_${YEAR}_Solution.pdf`,
  attributionText: `Source: International Astronomy and Astrophysics Competition (IAAC), Qualification Round ${YEAR}. Problem text transcribed from the official PDF and used with permission; worked solutions written by Astro Coach from the official answers. Astro Coach is independent and not affiliated with IAAC.`,
  questions: [
    // --- Problem A: label the JWST (instant check) ---------------------------
    {
      number: "A",
      title: "The James Webb Space Telescope",
      topic: "Telescopes & Observing",
      difficulty: "Beginner",
      points: 5,
      text: `The James Webb Space Telescope (JWST) was finally launched into space on December 25, 2021, and is about to become one of the most important scientific instruments of our time. Name the major components of the JWST shown in the figure below:

[[figure:jwst]]`,
      figures: [
        { key: "jwst", file: "jwst.png", caption: "The James Webb Space Telescope, components A–J", sourcePage: 1 },
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
              accept: ["primary mirror", "main mirror", "segmented primary mirror", "segmented mirror", "primary mirror segment", "primary mirror segments", "mirror segments"],
            },
            {
              label: "(B)",
              prompt: "component",
              accept: ["science instrument module", "integrated science instrument module", "ISIM", "instrument module", "scientific instrument module", "science instruments", "science module"],
            },
            {
              label: "(C)",
              prompt: "component",
              accept: ["optics subsystem", "aft optics subsystem", "AOS", "aft optics", "aft optical subsystem", "tertiary mirror"],
            },
            { label: "(D)", prompt: "component", accept: ["secondary mirror", "secondary mirror assembly"] },
            {
              label: "(E)",
              prompt: "component",
              accept: ["sunshield", "sun shield", "sunshade", "sun shade", "sunshield layers", "heat shield"],
            },
            { label: "(F)", prompt: "component", accept: ["star tracker", "star trackers"] },
            { label: "(G)", prompt: "component", accept: ["spacecraft bus", "bus", "spacecraft bus electronics", "space craft bus"] },
            {
              label: "(H)",
              prompt: "component",
              accept: ["antenna", "high gain antenna", "high-gain antenna", "communications antenna", "communication antenna", "radio antenna"],
            },
            {
              label: "(I)",
              prompt: "component",
              accept: ["solar array", "solar arrays", "solar panel", "solar panels", "solar cells", "solar cell array"],
            },
            {
              label: "(J)",
              prompt: "component",
              accept: ["stabilization flap", "stabilisation flap", "momentum flap", "trim flap", "momentum trim flap", "stabilizing flap", "stabilising flap"],
            },
          ],
          solution: `**(A) Primary mirror** — 18 gold-coated hexagonal segments forming a 6.5 m mirror.

**(B) Integrated science instrument module (ISIM)** — holds the cameras and spectrographs (NIRCam, NIRSpec, MIRI, NIRISS/FGS) behind the mirror.

**(C) (Aft) optics subsystem** — the box at the centre of the primary mirror, containing the tertiary and fine-steering mirrors that pass the light on to the instruments.

**(D) Secondary mirror** — held in front of the primary mirror on three struts.

**(E) Sunshield** — five tennis-court-sized layers that keep the telescope side at about 40 K.

**(F) Star trackers** — small cameras that recognise star patterns to measure which way the telescope points.

**(G) Spacecraft bus** — the "service module" with power, computers, communications and pointing control.

**(H) Antenna** — the high-gain antenna that sends data to Earth.

**(I) Solar array** — supplies electrical power.

**(J) Stabilisation (momentum trim) flap** — balances the pressure of sunlight on the sunshield so the telescope does not slowly twist.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [1],
      solutionPages: [1],
    },

    // --- Problem B: shrink the Earth (instant check) ------------------------
    {
      number: "B",
      title: "Very Dense Earth",
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Math, Data & Coordinates"],
      difficulty: "Beginner",
      points: 5,
      text: `Neutron stars are some of the densest objects in the universe. They form during supernova explosions and are very small compared to other astronomical objects. You can assume $5\\times10^{17}\\ \\text{kg/m}^3$ as the average density of a neutron star. The Earth has a total mass of about $5.97\\times10^{24}\\ \\text{kg}$.

What would be the diameter of the Earth if it had the density of a neutron star?`,
      parts: [
        {
          label: "Answer",
          points: 5,
          format: "SHORT_ANSWER",
          prompt: "Give the diameter with its unit.",
          blanks: [
            {
              label: "Diameter",
              prompt: "in metres",
              accept: [],
              numeric: { value: 283.6, tolerance: 3 },
              numericInOtherUnits: [{ value: 0.2836, tolerance: 0.003, units: ["km", "kilometre", "kilometres", "kilometer", "kilometers"] }],
            },
          ],
          solution: `The volume needed is mass divided by density, and the volume of a sphere is $V = \\tfrac{4}{3}\\pi R^3 = \\tfrac{\\pi}{6} D^3$:

$$V = \\frac{M}{\\rho} = \\frac{\\pi}{6} D^3 \\quad\\Longrightarrow\\quad D = \\left(\\frac{6M}{\\pi\\rho}\\right)^{1/3}$$

$$D = \\left(\\frac{6 \\times 5.97\\times10^{24}\\ \\text{kg}}{\\pi \\times 5\\times10^{17}\\ \\text{kg/m}^3}\\right)^{1/3} = \\left(2.28\\times10^{7}\\ \\text{m}^3\\right)^{1/3} \\approx 283.6\\ \\text{m}$$

The whole Earth would fit in a ball about **284 m** across — smaller than many skyscrapers are tall.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem C ----------------------------------------------------------
    {
      number: "C",
      title: "Asteroid Field",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Intermediate",
      points: 5,
      text: `Assume that a gravitational anomaly in the solar system has shifted a field of asteroids into Earth's orbit, and the field is now moving directly towards Earth. The asteroid field has a density of $\\rho$ (asteroids/volume), and each asteroid has an average mass of $m$. The asteroid field stretches over a distance $d$ in Earth's path. Assume that the Earth moves with a velocity of $v$, the asteroids with $u$, and that $v \\gg u$. Let $R$ be the radius and $M$ the mass of the Earth. The Earth collides with the asteroid field:

[[figure:field]]

Show that the slow-down $\\Delta v$ of the Earth due to the asteroid collisions is given by:

$$\\Delta v = v\\left(1 - \\frac{1}{1 + \\pi R^2 d \\rho\\,\\frac{m}{M}}\\right)$$`,
      figures: [
        { key: "field", file: "asteroid-field.png", caption: "The Earth (velocity v) meets the asteroid field (velocity u)", sourcePage: 2 },
      ],
      solution: `**Number of collisions.** As the Earth ploughs through the field, it sweeps out a cylinder with cross-section $\\pi R^2$ and length $d$. Every asteroid inside that cylinder hits the Earth:

$$N = \\rho V = \\rho \\cdot \\pi R^2 d$$

**Momentum conservation.** The collisions are inelastic (the asteroids stick to the Earth). Before the collisions the total momentum is $Mv - Nmu$ (the asteroids move the other way). Because $v \\gg u$ and $Nm \\ll M$, the asteroids' momentum $Nmu$ is negligible, so

$$Mv \\approx (M + Nm)\\,w \\quad\\Longrightarrow\\quad w = \\frac{Mv}{M+Nm} = \\frac{v}{1 + N\\frac{m}{M}}$$

where $w$ is the Earth's speed afterwards.

**The slow-down** is

$$\\Delta v = v - w = v\\left(1 - \\frac{1}{1 + N\\frac{m}{M}}\\right) = v\\left(1 - \\frac{1}{1 + \\pi R^2 d\\rho\\,\\frac{m}{M}}\\right)$$`,
      rubric: `Astro Coach marking guide (5 points):
- Number of asteroids hit N = ρ·πR²·d (swept cylinder): 2 points (1 for the cross-section πR², 1 for multiplying by d and ρ).
- Uses conservation of momentum for the (inelastic) collisions: 1 point.
- Neglects the asteroids' momentum because v ≫ u, giving w = Mv/(M + Nm): 1 point.
- Correct final expression for Δv = v − w: 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem D ----------------------------------------------------------
    {
      number: "D",
      title: "Position of the JWST",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Telescopes & Observing"],
      difficulty: "Intermediate",
      points: 5,
      text: `The James Webb Space Telescope is positioned around 1.5 million kilometres from the Earth on the side facing away from the Sun. The telescope remains at this distance and orbits around the Sun with the Earth's orbital velocity.

**(a)** Why is it important to position the JWST behind the Earth?

**(b)** Determine the angular velocity $\\omega$ of the telescope as it orbits around the Sun.

The centrifugal force $F_\\omega$ and gravitational force $F_G$ are acting on objects orbiting the Sun: $F = F_\\omega - F_G$

**(c)** Based on this, how much should the telescope accelerate towards or away from the Sun?

**(d)** Why is the orbit of the telescope stable nonetheless? What other forces need to be considered?`,
      solution: `**(a)** From behind the Earth, the Sun, the Earth and the Moon all lie in roughly the same direction. JWST's sunshield can then block all three at once, keeping the telescope and instruments extremely cold (below about 50 K). That is essential for an infrared telescope: warm parts would glow in infrared and swamp the faint signals. The position also gives a steady view of deep space and constant contact with Earth.

**(b)** The telescope goes around the Sun once per year, like the Earth:

$$\\omega = \\frac{2\\pi}{1\\ \\text{year}} = \\frac{2\\pi}{3.156\\times10^{7}\\ \\text{s}} \\approx 1.99\\times10^{-7}\\ \\text{rad/s} \\ (\\approx 0.0172\\ \\text{rad/day})$$

**(c)** Per unit mass, the net outward acceleration at distance $r = d_E + d$ from the Sun is

$$a = \\omega^2 r - \\frac{G M_\\odot}{r^2}$$

with $r = 1.496\\times10^{11} + 1.5\\times10^{9} = 1.511\\times10^{11}\\ \\text{m}$:

$$\\omega^2 r \\approx 5.99\\times10^{-3}\\ \\text{m/s}^2, \\qquad \\frac{GM_\\odot}{r^2} \\approx 5.81\\times10^{-3}\\ \\text{m/s}^2$$

$$a \\approx 1.8\\times10^{-4}\\ \\text{m/s}^2 \\ \\text{(away from the Sun)}$$

At the Earth's own distance the two terms cancel exactly. A shortcut confirms the result: for a small extra distance $d$, $a \\approx 3\\omega^2 d = 3(1.99\\times10^{-7})^2(1.5\\times10^{9}) \\approx 1.8\\times10^{-4}\\ \\text{m/s}^2$. Without another force, the telescope would drift outward, gaining about 15 m/s of speed every day.

(The official answer is $2.57\\times10^{-4}$, which comes from rounding the two nearly equal terms differently. Because the result is a small difference of large numbers, keep at least four significant figures.)

**(d)** The **Earth's gravity** also pulls on the telescope, towards the Earth and therefore towards the Sun:

$$\\frac{G M_E}{d^2} = \\frac{3.99\\times10^{14}}{(1.5\\times10^{9})^2} \\approx 1.8\\times10^{-4}\\ \\text{m/s}^2$$

This exactly supplies the missing inward pull, so the telescope can orbit the Sun in step with the Earth. The point where this balance holds is the Sun–Earth **Lagrange point $L_2$**. (Strictly, $L_2$ is an unstable balance, so JWST flies a "halo orbit" around it and fires small thrusters every few weeks to stay there.)`,
      rubric: `Astro Coach marking guide (5 points, one per step):
- (a) Sun, Earth and Moon are all on one side, so the sunshield blocks them and keeps the infrared telescope cold.
- (b) ω = 2π / 1 year ≈ 2 × 10⁻⁷ rad/s (or ≈ 0.017 per day).
- (c) Writes a = ω²r − GM☉/r² with r = 1 AU + 1.5 × 10⁶ km.
- (c) Net acceleration of order 10⁻⁴ m/s² directed away from the Sun (accept 1.7–2.6 × 10⁻⁴ m/s²).
- (d) The Earth's gravity provides the extra inward force (Lagrange point L2).`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Problem E ----------------------------------------------------------
    {
      number: "E",
      title: "Infrared Radiation",
      topic: "Light & Spectra",
      topics: ["Light & Spectra", "Telescopes & Observing"],
      difficulty: "Beginner",
      points: 5,
      text: `The electromagnetic spectrum contains various types of radiation with different properties. The James Webb Space Telescope is not like an optical telescope at home and does not capture visible light; instead, it observes the sky in the infrared spectrum.

Explain what infrared radiation is and answer the following questions: How is infrared radiation different from visible light? Why does the JWST observe infrared light, and what are the scientific advantages for astronomers?`,
      solution: `**What it is.** Infrared radiation is electromagnetic radiation — light — with wavelengths longer than red light: from about 700 nm up to about 1 mm, between visible light and microwaves.

**How it differs from visible light.** Longer wavelength means lower frequency and lower photon energy ($E = hc/\\lambda$), and our eyes cannot see it. Every warm object glows in infrared (we feel it as heat); cool objects such as planets, dust and young stars emit most of their light in the infrared.

**Why JWST observes infrared, and the advantages:**

1. **Redshift.** Because the universe is expanding, light from the most distant galaxies is stretched to longer wavelengths. Ultraviolet and visible light from the first galaxies arrives at Earth as infrared, so an infrared telescope can see further back in time.

2. **Seeing through dust.** Infrared light passes through clouds of gas and dust far better than visible light, revealing stars and planets being born inside dusty nebulae and the centre of our galaxy.

3. **Cool objects.** Exoplanets, brown dwarfs and protoplanetary discs shine mainly in the infrared; molecules such as water, $\\text{CO}_2$ and methane have strong infrared spectral lines, useful for studying exoplanet atmospheres.

4. **Why in space.** Earth's atmosphere (especially water vapour) absorbs most infrared light and itself glows in infrared, so the telescope must be in space — and kept very cold, so that its own heat doesn't swamp the signal.`,
      rubric: `Astro Coach marking guide (5 points, one per idea):
- Infrared is electromagnetic radiation with wavelengths longer than visible light (about 700 nm – 1 mm).
- Compared with visible light it has lower frequency/energy and is invisible to our eyes; warm objects emit it as heat.
- Cosmological redshift moves light from very distant (early) galaxies into the infrared.
- Infrared passes through dust and gas clouds, revealing star formation and hidden regions.
- The atmosphere absorbs most infrared, so a space telescope is needed (or: cool objects like exoplanets/molecules are best studied in infrared).`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
      solutionPages: [1],
    },
  ],
};
