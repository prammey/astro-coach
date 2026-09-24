// USAAAO National Astronomy Olympiad 2015 (the 2014–2015 second round).
//
// Section A has 13 short-answer problems (42 points) and Section B one long
// problem (25 points). Every problem asks for working, so all are WORKED
// (AI-graded). The paper gives no point split inside the short problems,
// so each is graded as a whole; the long problem's parts have their own
// points.
//
// The official solutions are brief, with no marking scheme, so each
// question has an Astro Coach marking guide. Every official answer was
// re-checked:
//   - Q2: the official solution stops in solar masses; the answer is
//     converted to Jupiter masses, as the question asks.
//   - Q5: the official solutions say this question was not graded; the
//     worked solution is written by Astro Coach.
//   - Q11: the official solution uses the wrong eccentricity and half the
//     baseline; corrected (38.7 pc, not 49.0 pc).
//   - Q13: the official "position angle" of 33.1° is the triangle's
//     interior angle; measured east of north it is about 213°.
//   - Long problem: the official text says the period is about 5.7 days,
//     but its own numbers (and the plot) use about 11.3 days; the distance
//     in (d) is recomputed from the official luminosities (5.2 pc, not
//     5.94 pc), which also updates (e).
import type { FrqSeedExam } from "./types";

// String.raw keeps LaTeX backslashes as written (\frac, not \\frac).
const tex = String.raw;

const YEAR = 2015;
const SHORT = "Short Answer";
const LONG = "Long Question";

export const usaaao2015Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: YEAR,
  examName: "National Astronomy Olympiad",
  slug: "usaaao-2015-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-nao-exam.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-nao-solutions.pdf",
  attributionText:
    "Source: USA Astronomy and Astrophysics Organization (USAAAO), National Astronomy Olympiad 2015. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.",
  questions: [
    // --- Section A: Short Answer ---------------------------------------------

    // Q1
    {
      number: "1",
      title: "Radius of a Blue Star",
      section: SHORT,
      topic: "Energy & Stellar Physics",
      topics: ["Energy & Stellar Physics", "Stars & Black Holes"],
      difficulty: "Intermediate",
      points: 2,
      text: tex`A blue star with effective temperature $T_\text{eff} = 10{,}000\ \text{K}$ and apparent magnitude $m = 5$ is located $150\ \text{pc}$ from Earth. Find the radius of the star.`,
      solution: tex`**Absolute magnitude.** From the distance modulus $m - M = 5\log(d/10\ \text{pc})$:

$$M = m - 5\log\left(\frac{150}{10}\right) = 5 - 5\log 15 = -0.88$$

**Luminosity.** Compare with the Sun's absolute magnitude, $4.83$:

$$\frac{L}{L_\odot} = 100^{(4.83 - (-0.88))/5} = 192$$

**Radius.** From the Stefan–Boltzmann law $L = 4\pi R^2\sigma T^4$, taking the ratio with the Sun ($T_\odot = 5778\ \text{K}$):

$$\frac{R}{R_\odot} = \left(\frac{L}{L_\odot}\right)^{1/2}\left(\frac{T_\odot}{T}\right)^2 = \sqrt{192}\times\left(\frac{5778}{10000}\right)^2 = 4.6$$

The star's radius is about $4.6\,R_\odot$.`,
      rubric: `Astro Coach marking guide (2 points):
- Absolute magnitude about −0.88 and luminosity about 190 L☉ (from the distance modulus and the magnitude–luminosity relation): 1 point.
- Radius from the Stefan–Boltzmann law, about 4.6 R☉ (accept 4.4–4.8 R☉): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1],
    },

    // Q2
    {
      number: "2",
      title: "Planet Mass from Radial Velocity",
      section: SHORT,
      topic: "Exoplanets & Life",
      topics: ["Exoplanets & Life", "Gravity & Orbits"],
      difficulty: "Intermediate",
      points: 2,
      text: `The radial velocity curve of a nearby Solar-mass star shows that it has a planet orbiting it with a period of 3 days. This planet causes its host star to have a radial velocity semi-amplitude of 50 m/s. Assuming that this planet's orbit is perfectly inclined to Earth, and has 0 eccentricity, what is the mass of this planet, in Jupiter masses?`,
      solution: tex`**Planet's orbit.** With $M = 1\,M_\odot$, Kepler's third law $a^3 = MT^2$ (AU, years, solar masses) gives

$$a_p = \left(\frac{3}{365}\right)^{2/3} = 0.041\ \text{AU}$$

**Star's orbit.** The star moves on a small circle at $K = 50\ \text{m/s}$, so $K = 2\pi r_*/T$:

$$r_* = \frac{KT}{2\pi} = \frac{(50\ \text{m/s})(3\times 86400\ \text{s})}{2\pi} = 2.06\times10^{6}\ \text{m} = 1.38\times10^{-5}\ \text{AU}$$

**Mass.** Both bodies orbit their centre of mass, so $m_* r_* = m_p r_p$:

$$m_p = \frac{r_*}{r_p}\,m_* = \frac{1.38\times10^{-5}}{0.041}\,M_\odot = 3.4\times10^{-4}\,M_\odot$$

Dividing by Jupiter's mass, $9.54\times10^{-4}\,M_\odot$:

$$m_p \approx 0.35\,M_J$$

(The official solution stops at $3.36\times10^{-4}\,M_\odot$, which is the same answer in solar masses.)`,
      rubric: `Astro Coach marking guide (2 points):
- Finds the planet's orbital radius (about 0.041 AU) and the star's orbital radius from K = 2πr/T (about 1.4 × 10⁻⁵ AU), or uses an equivalent mass-function formula: 1 point.
- Planet mass about 0.35 Jupiter masses (accept 0.33–0.37 M_J; an answer left only in solar masses, about 3.4 × 10⁻⁴ M☉, loses this point): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1],
    },

    // Q3
    {
      number: "3",
      title: "Angular Momentum: Sun or Jupiter?",
      section: SHORT,
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Intermediate",
      points: 2,
      text: tex`The Sun has a rotation rate of 24.5 days. Jupiter has a mass of $9.54\times10^{-4}$ solar masses, and a semimajor axis of $5.2\ \text{AU}$. Which object has more total angular momentum?`,
      solution: tex`Work in units of solar masses, km and days (solar radius $695{,}000\ \text{km}$).

**The Sun** (treated as a uniform sphere, $I = \tfrac{2}{5}MR^2$):

$$L_\odot = I\omega = \tfrac{2}{5}M_\odot R_\odot^2\cdot\frac{2\pi}{24.5\ \text{d}} = \tfrac{2}{5}(1)(695{,}000)^2\cdot\frac{2\pi}{24.5} = 5\times10^{10}$$

**Jupiter** (orbital angular momentum $L = mvr$): $r = 5.2\times149.6\times10^{6}\ \text{km} = 7.77\times10^{8}\ \text{km}$, and its period is $5.2^{3/2}$ years, so

$$v = \frac{2\pi r}{5.2^{3/2}\times365\ \text{d}} = 1.13\times10^{6}\ \text{km/day}$$

$$L_J = (9.54\times10^{-4})(7.77\times10^{8})(1.13\times10^{6}) = 8.4\times10^{11}$$

**Jupiter has more angular momentum** — about 17 times more than the Sun's spin. (The real Sun is denser at its centre than a uniform sphere, so its true angular momentum is even smaller, which makes the conclusion stronger.)`,
      rubric: `Astro Coach marking guide (2 points):
- Sun's spin angular momentum from L = Iω with I = (2/5)MR² (or another reasonable moment of inertia): 1 point.
- Jupiter's orbital angular momentum from L = mvr (or m√(GMa)) and the correct conclusion that Jupiter has more (by roughly an order of magnitude or more): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1],
    },

    // Q4
    {
      number: "4",
      title: "Distance and Age of a Star Cluster",
      section: SHORT,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Math, Data & Coordinates"],
      difficulty: "Intermediate",
      points: 3,
      text: tex`What is the distance to a star cluster whose stars at the main sequence turn-off point have an apparent magnitude of $m = 10$ and an effective temperature of $T_\text{eff}\approx 6000\ \text{K}$? How old is this cluster?`,
      solution: tex`The stars at the turn-off point are the oldest main-sequence stars still left. At $6000\ \text{K}$ they are approximately Sun-like, so assume their absolute magnitude is the Sun's, $M = 4.83$.

**Distance.** From the distance modulus:

$$d = 10\ \text{pc}\times10^{(m - M)/5} = 10\times10^{(10 - 4.83)/5}\ \text{pc} = 108\ \text{pc}$$

**Age.** Sun-like stars live about $10$ billion years on the main sequence. Since stars of this kind are only now leaving the main sequence, the cluster is approximately **10 Gyr** old.`,
      rubric: `Astro Coach marking guide (3 points):
- Recognises the turn-off stars are Sun-like and uses M ≈ 4.8: 1 point.
- Distance about 110 pc (accept 100–120 pc): 1 point.
- Age about 10 Gyr, justified by the main-sequence lifetime of Sun-like stars: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1],
    },

    // Q5 (not graded in the official exam)
    {
      number: "5",
      title: "A Cooling Universe",
      section: SHORT,
      topic: "Galaxies & Universe",
      difficulty: "Intermediate",
      points: 3,
      text: tex`Assuming that the universe currently is well described by a density parameter $\Omega_0 = 1$, there is no dark energy and the current temperature of the universe is $2.73\ \text{K}$, compute how long from the present it will take for the universe to cool down by $0.2\ \text{K}$. Remember that the temperature of the universe is inversely proportional to its radius (the scale factor).`,
      solution: tex`**Expansion law.** A flat, matter-only universe ($\Omega_0 = 1$, no dark energy) expands as $a \propto t^{2/3}$, and its present age is $t_0 = \dfrac{2}{3H_0}$.

**Temperature and time.** Since $T \propto 1/a \propto t^{-2/3}$, the time when the temperature is $T$ is

$$t = t_0\left(\frac{T_0}{T}\right)^{3/2}$$

Cooling by $0.2\ \text{K}$ means $T = 2.53\ \text{K}$:

$$t = t_0\left(\frac{2.73}{2.53}\right)^{3/2} = 1.121\,t_0 \quad\Rightarrow\quad \Delta t = 0.121\,t_0$$

**Numbers.** With $H_0 \approx 70\ \text{km/s/Mpc}$, $1/H_0 \approx 14.0\ \text{Gyr}$, so $t_0 = \tfrac{2}{3}(14.0) \approx 9.3\ \text{Gyr}$ and

$$\Delta t \approx 0.121\times9.3\ \text{Gyr} \approx 1.1\ \text{Gyr}$$

The universe needs about **1.1 billion years** to cool by $0.2\ \text{K}$.

(The official solutions list this question as not graded, probably because no value of $H_0$ was given; this solution is written by Astro Coach.)`,
      rubric: `Astro Coach marking guide (3 points):
- Uses a ∝ t^(2/3) for a flat matter-only universe: 1 point.
- Combines with T ∝ 1/a to get t ∝ T^(−3/2), so Δt ≈ 0.12 t₀: 1 point.
- Δt about 1.1 Gyr using t₀ = 2/(3H₀) (accept 1.0–1.25 Gyr for H₀ between 65 and 75 km/s/Mpc). If the student instead takes t₀ ≈ 13.8 Gyr and gets about 1.7 Gyr, do not award this point, since that age is inconsistent with the stated model: 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
      solutionPages: [2],
    },

    // Q6
    {
      number: "6",
      title: "Luminosity and Spectral Type",
      section: SHORT,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Light & Spectra"],
      difficulty: "Intermediate",
      points: 3,
      text: tex`A star has apparent magnitude $m = 8$, parallax $p = 0.003''$ and effective temperature $T_\text{eff}\approx 6000\ \text{K}$. What is the luminosity of the star? What is the likely spectral type of this star? Justify your answer.`,
      solution: tex`**Distance and absolute magnitude.**

$$d = \frac{1}{p} = \frac{1}{0.003} = 333\ \text{pc}, \qquad M = m - 5\log\left(\frac{d}{10\ \text{pc}}\right) = 8 - 5\log 33.3 = 0.385$$

**Luminosity.**

$$\frac{L}{L_\odot} = 100^{(4.83 - 0.385)/5} = 59.9 \approx 60$$

**Spectral type.** A temperature of about $6000\ \text{K}$ is roughly Sun-like, which suggests class **G**. But the star is about 60 times more luminous than the Sun; with the Stefan–Boltzmann law that means a radius of about $\sqrt{60}\,(5778/6000)^2 \approx 7\,R_\odot$ — far too large for a main-sequence star. So it is a **giant**: a type such as **G0 III** is a reasonable answer.`,
      rubric: `Astro Coach marking guide (3 points):
- Distance 333 pc and absolute magnitude about 0.4: 1 point.
- Luminosity about 60 L☉ (accept 55–65 L☉): 1 point.
- Spectral type G (about 6000 K) and luminosity class giant (III), justified by the high luminosity / large radius compared with a main-sequence G star: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // Q7
    {
      number: "7",
      title: "CMB Temperature and Redshift",
      section: SHORT,
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Light & Spectra"],
      difficulty: "Intermediate",
      points: 3,
      text: tex`Assuming that the cosmic microwave background radiation has the spectrum of a blackbody throughout the evolution of the universe, determine how its temperature changes with redshift. In particular, find the temperature of the CMB at the epoch $z\approx10$, knowing that the current temperature of the CMB is $2.73\ \text{K}$.`,
      solution: tex`**How the temperature scales.** By Wien's law, the peak wavelength of a blackbody is $\lambda = b/T$. Redshift stretches every wavelength by the same factor: from $z = \dfrac{\lambda - \lambda_0}{\lambda_0}$, the wavelength emitted at redshift $z$ was $\lambda_0 = \dfrac{\lambda}{1+z}$, where $\lambda$ is what we receive today. Combining the two:

$$T(z) = \frac{b}{\lambda_0} = \frac{b(1+z)}{\lambda} = T_0(1+z)$$

So the CMB temperature is proportional to $1+z$.

**At $z \approx 10$.** Today the peak is at $\lambda = b/2.73\ \text{K} = 1.06\ \text{mm}$, and

$$T = 2.73\ \text{K}\times(1 + 10) = 30.0\ \text{K}$$`,
      rubric: `Astro Coach marking guide (3 points):
- Uses Wien's law and the fact that redshift stretches wavelengths by (1 + z): 1 point.
- Concludes T ∝ (1 + z), i.e. T = T₀(1 + z): 1 point.
- T ≈ 30 K at z ≈ 10: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // Q8
    {
      number: "8",
      title: "Blackbody Temperature of a Planet",
      section: SHORT,
      topic: "Exoplanets & Life",
      topics: ["Exoplanets & Life", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 3,
      text: tex`Derive an expression for the blackbody temperature of a planet with radius $r$ and albedo $a$, orbiting its sun at a certain distance $D$. The star has a temperature $T_*$ and radius $R$. You must show your derivation for credit, not just the final expression.`,
      solution: tex`At equilibrium, the power the planet absorbs equals the power it radiates.

**Power in.** The star's luminosity is $L = 4\pi R^2\sigma T_*^4$. At distance $D$ this is spread over a sphere of area $4\pi D^2$; the planet intercepts it with its cross-section $\pi r^2$ and absorbs the fraction $1 - a$:

$$P_\text{in} = \pi r^2(1 - a)\,\frac{4\pi R^2\sigma T_*^4}{4\pi D^2}$$

**Power out.** The planet radiates as a blackbody from its whole surface:

$$P_\text{out} = 4\pi r^2\sigma T_p^4$$

**Balance.** Setting $P_\text{in} = P_\text{out}$, the planet's radius cancels:

$$T_p^4 = (1 - a)\,T_*^4\,\frac{R^2}{4D^2} \quad\Longrightarrow\quad T_p = (1 - a)^{1/4}\,T_*\sqrt{\frac{R}{2D}}$$`,
      rubric: `Astro Coach marking guide (3 points):
- Absorbed power: stellar flux at distance D times the cross-section πr² times (1 − a): 1 point.
- Emitted power 4πr²σT⁴ from the whole surface, set equal to the absorbed power: 1 point.
- Final result T = (1 − a)^(1/4) T* √(R/(2D)): 1 point.
A final expression without a derivation earns no credit, as the question says.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // Q9
    {
      number: "9",
      title: "CCD Plate Scale",
      section: SHORT,
      topic: "Telescopes & Observing",
      difficulty: "Beginner",
      points: 3,
      text: `A 2048 × 3072 pixel CCD camera with 7.2 micron pixels is attached to an f/10 telescope with a 0.256 m primary mirror. What is the angular resolution of the CCD, in arcseconds/pixel?`,
      solution: tex`**Focal length.** For an $f/10$ telescope the focal length is $10$ times the aperture: $f = 10\times0.256\ \text{m} = 2.56\ \text{m}$.

**Plate scale.** One pixel of size $s$ covers an angle $s/f$ radians, and $1\ \text{rad} = 206265''$:

$$\theta = \frac{s}{f}\times206265'' = \frac{7.2\times10^{-6}\ \text{m}}{2.56\ \text{m}}\times206265'' = 0.58''\ \text{per pixel}$$

(The number of pixels only matters for the total field of view, not for the scale of one pixel.)`,
      rubric: `Astro Coach marking guide (3 points):
- Focal length 2.56 m from the focal ratio: 1 point.
- Angle per pixel = pixel size / focal length, converted to arcseconds (× 206265): 1 point.
- About 0.58″ per pixel: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // Q10
    {
      number: "10",
      title: "Hohmann Transfer to Saturn",
      section: SHORT,
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Advanced",
      points: 4,
      text: `An interplanetary spacecraft bound for Saturn (a = 9.6 AU) is launched into a 300 km, non-inclined parking orbit around the Earth. If the spacecraft takes a Hohmann transfer to Saturn, what is the delta-V required for trans-Saturn injection, and what is the required delta-V for insertion into a 100000 km circular orbit around Saturn? On what side of each planet should the burns occur? (Assume Saturn is in the same orbital plane as the Earth, and neglect the gravitational deflection of the ship's path after injection and before orbital insertion.)`,
      solution: tex`**Transfer orbit.** The Hohmann ellipse runs from Earth's orbit ($1\ \text{AU}$) to Saturn's ($9.6\ \text{AU}$), so its semimajor axis is $a = 5.3\ \text{AU}$. From the vis-viva equation $v^2 = \mu\left(\dfrac{2}{r} - \dfrac{1}{a}\right)$ with $\mu = GM_\odot$, the speed needed at $1\ \text{AU}$ is

$$v_\text{p} = 29.78\ \text{km/s}\times\sqrt{2 - \frac{1}{5.3}} = 40.08\ \text{km/s}$$

**Injection burn.** In the parking orbit the spacecraft already moves at $\sqrt{GM_E/r_\text{orb}} = 7.73\ \text{km/s}$ around the Earth, and the Earth moves at $\sqrt{GM_\odot/1\ \text{AU}} = 29.78\ \text{km/s}$ around the Sun. At the point where the two velocities line up, its speed relative to the Sun is $37.5\ \text{km/s}$. Neglecting the Earth's pull after the burn (as the question says), the required change is

$$\Delta v_1 = 40.08 - 37.5 \approx 2.55\ \text{km/s}$$

The burn must occur on the **night side** of the Earth (the side facing away from the Sun), where the prograde parking-orbit velocity points the same way as the Earth's orbital motion, so the orbit is raised outward towards Saturn.

**Insertion burn.** At $9.6\ \text{AU}$ the spacecraft's speed on the transfer ellipse is $v_\text{a} = 29.78\sqrt{\tfrac{2}{9.6} - \tfrac{1}{5.3}} = 4.18\ \text{km/s}$, while Saturn moves at $29.78/\sqrt{9.6} = 9.61\ \text{km/s}$. Relative to Saturn, the spacecraft moves backwards at about $5.44\ \text{km/s}$. A circular orbit of radius $100{,}000\ \text{km}$ needs $\sqrt{GM_\text{Saturn}/r} = 19.48\ \text{km/s}$. To end up in a prograde orbit, the velocity must be reversed and increased:

$$\Delta v_2 = 19.48 + 5.44 \approx 24.9\ \text{km/s}$$

This burn must also occur on the **night side** of Saturn, where a prograde orbital velocity points along Saturn's own motion.

**Note.** This is the official solution, which follows the question's instruction to ignore the planets' gravity after injection and before insertion. A full "patched-conic" calculation, which includes climbing out of Earth's gravity well and falling into Saturn's, gives about $7.3\ \text{km/s}$ for injection and about $8.6\ \text{km/s}$ for insertion; that approach also deserves full credit.`,
      rubric: `Astro Coach marking guide (4 points):
- Injection Δv: about 2.55 km/s by the official method (parking-orbit speed plus Earth's orbital speed compared with the 40.1 km/s transfer-orbit perihelion speed), or about 7.3 km/s with a correct patched-conic calculation: 1 point.
- Injection burn on the night side of the Earth (away from the Sun): 1 point.
- Insertion Δv: about 24.9 km/s by the official method for a prograde orbit (accept about 14.0 km/s for a retrograde orbit if clearly stated), or about 8.6 km/s with a correct patched-conic calculation: 1 point.
- Correct side of Saturn for the burn, consistent with the student's approach (official: night side for a prograde orbit): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [2, 3],
    },

    // Q11 (official answer corrected)
    {
      number: "11",
      title: "Parallax from an Eccentric Orbit",
      section: SHORT,
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Gravity & Orbits"],
      difficulty: "Advanced",
      points: 4,
      text: tex`Planet A orbits around Star A of mass $M = 0.54\,M_\odot$ with a period of $P = 6$ Earth years. Astronomers on this planet want to measure the distance of a distant Star B which happens to lie along the semimajor axis of Planet A's orbit, on the side of perihelion. They choose to do so using parallax, by noting the position of Star B with respect to the background stars at two different points in the orbit. These two points, X and Y, are located such that XY is perpendicular to the semimajor axis, and intersects it at the focus, i.e. where Star A is located. Astronomers measure the angle that Star B appears to change from X to Y as $\theta = 0.05''$. If Planet A is $0.537\ \text{AU}$ from Star A at perihelion, what is the distance to Star B in parsecs?`,
      solution: tex`**Semimajor axis.** Kepler's third law in AU, years and solar masses:

$$a = (MP^2)^{1/3} = (0.54\times6^2)^{1/3} = 2.69\ \text{AU}$$

**Eccentricity.** The perihelion distance is $a(1 - e) = 0.537\ \text{AU}$, so

$$e = 1 - \frac{0.537}{2.69} = 0.80$$

(the aphelion is $2a - 0.537 = 4.84\ \text{AU}$).

**Baseline.** X and Y lie on the orbit on a line through the focus, perpendicular to the major axis. That chord is the **latus rectum**, whose full length is

$$XY = 2a(1 - e^2) = 2(2.69)(1 - 0.80^2) = 1.93\ \text{AU}$$

**Distance.** Star B is far away, so the small-angle formula gives $d = XY/\theta$. With XY in AU and $\theta$ in arcseconds this comes out directly in parsecs:

$$d = \frac{1.93}{0.05} \approx 39\ \text{pc}$$

**Correction note.** The official solution gets $49.0\ \text{pc}$ because it uses an aphelion of $2.135\ \text{AU}$ (so $e = 0.3$) and takes $a(1-e^2)$, which is only half of the chord XY. With the correct eccentricity and the full chord, the distance is about $38.7\ \text{pc}$.`,
      rubric: `Astro Coach marking guide (4 points):
- Semimajor axis about 2.69 AU from Kepler's third law: 1 point.
- Eccentricity about 0.80 from the perihelion distance: 1 point.
- Identifies XY as the latus rectum, full length 2a(1 − e²) ≈ 1.93 AU: 1 point.
- Distance about 39 pc (accept 37–40 pc) from d = XY/θ: 1 point.
Note: the official solution's 49.0 pc contains two errors; do not award the final point for 49 pc.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
      solutionPages: [3],
    },

    // Q12
    {
      number: "12",
      title: "The Sun's Right Ascension",
      section: SHORT,
      topic: "Math, Data & Coordinates",
      difficulty: "Advanced",
      points: 4,
      text: `On the vernal equinox, the Sun has a right ascension of 0 hours and a declination of 0°. Starting from the equinox, calculate the number of days, to the nearest tenth, that it takes for the Sun to have a right ascension of 4 hours. Assume a perfectly circular orbit and that the Earth is inclined 23.5° to the ecliptic plane.`,
      solution: tex`Simply dividing the year by 6 is incorrect. The Sun moves uniformly along the **ecliptic** (for a circular orbit), not along the celestial equator, and its declination changes as it goes. So first find how far along the ecliptic the Sun must travel.

In the right spherical triangle formed by the equinox, the Sun and the foot of the Sun's hour circle on the equator, the ecliptic longitude $\lambda$ and the right ascension $\alpha$ are related by

$$\tan\alpha = \tan\lambda\,\cos\varepsilon$$

With $\alpha = 4\ \text{h} = 60^\circ$ and $\varepsilon = 23.5^\circ$:

$$\tan\lambda = \frac{\tan60^\circ}{\cos23.5^\circ} = \frac{1.732}{0.917} = 1.889 \quad\Rightarrow\quad \lambda = 62.1^\circ$$

The Sun covers $360^\circ$ of ecliptic longitude per year at a constant rate, so

$$t = \frac{62.1^\circ}{360^\circ}\times365\ \text{days} = 63.0\ \text{days}$$`,
      rubric: `Astro Coach marking guide (4 points):
- Recognises that the Sun moves uniformly in ecliptic longitude, not right ascension (so 365/6 days is wrong): 1 point.
- Correct spherical-trigonometry relation, e.g. tan α = tan λ cos ε: 1 point.
- Ecliptic longitude about 62.1°: 1 point.
- About 63.0 days (accept 62.9–63.1): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [3],
    },

    // Q13 (position angle corrected)
    {
      number: "13",
      title: "Rigel and Betelgeuse",
      section: SHORT,
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Telescopes & Observing"],
      difficulty: "Advanced",
      points: 6,
      text: tex`Rigel has equatorial coordinates RA = $05^\text{h}\,14^\text{m}\,32.3^\text{s}$, Dec = $-08^\circ\,12'\,06''$, and Betelgeuse has coordinates RA = $05^\text{h}\,55^\text{m}\,10.3^\text{s}$, Dec = $+07^\circ\,24'\,25''$. What is the angular separation between the two stars, and the position angle of Rigel relative to Betelgeuse? If a photographer wants to take a photo containing both stars, what is the maximum focal length they can use?`,
      solution: tex`Convert to degrees: Rigel $\alpha_R = 78.635^\circ$, $\delta_R = -8.202^\circ$; Betelgeuse $\alpha_B = 88.793^\circ$, $\delta_B = +7.407^\circ$; so $\Delta\alpha = \alpha_R - \alpha_B = -10.158^\circ$.

**Separation.** Use the spherical triangle with the north celestial pole as the third point. By the spherical law of cosines:

$$\cos d = \sin\delta_R\sin\delta_B + \cos\delta_R\cos\delta_B\cos\Delta\alpha = 0.9477 \quad\Rightarrow\quad d = 18.6^\circ$$

**Position angle.** The position angle is measured at Betelgeuse, from north through east. In the same triangle,

$$\tan\text{PA} = \frac{\sin\Delta\alpha}{\cos\delta_B\tan\delta_R - \sin\delta_B\cos\Delta\alpha} = \frac{-0.1764}{-0.2698}$$

Both the numerator and denominator are negative, so PA is in the third quadrant: $\text{PA} = 180^\circ + 33.2^\circ \approx 213^\circ$. This makes sense: Rigel is south (lower declination) and west (lower right ascension) of Betelgeuse.

**Focal length.** The photo must span $18.6^\circ = 66{,}960''$. The plate scale is $206265''/f$ per unit length on the film, so for a frame of width $w$

$$f = \frac{206265''}{66{,}960''}\,w = 3.08\,w$$

For $35\ \text{mm}$ film that is a maximum focal length of about $108\ \text{mm}$ (or about $216\ \text{mm}$ for $70\ \text{mm}$ film).

**Correction note.** The official solution gives the position angle as $33.12^\circ$, which is the interior angle of the triangle at Betelgeuse. Measured east of north, as position angles are, Rigel lies at about $213^\circ$ (that is, $33^\circ$ west of south).`,
      rubric: `Astro Coach marking guide (6 points):
- Angular separation about 18.6° from spherical trigonometry (accept 18.5–18.7°): 2 points.
- Position angle about 213° east of north (accept "33° west of south" or an equivalent clear description; a bare 33° earns 1 of these 2 points): 2 points.
- Maximum focal length from the plate scale, about 108 mm for 35 mm film (accept 100–135 mm depending on the frame dimension assumed, e.g. 36 mm side or 43 mm diagonal): 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [3, 4],
    },

    // --- Section B: Long Question --------------------------------------------
    {
      number: "Long",
      title: "An Eclipsing Binary with a Hidden Companion",
      section: LONG,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Light & Spectra", "Gravity & Orbits"],
      difficulty: "Advanced",
      points: 25,
      text: tex`Astronomers use an 8-meter telescope to observe a star with an apparent flux of $3.068\times10^{-9}\ \text{W/m}^2$. A spectral analysis reveals a blackbody spectrum with two apparent peaks, one at $690.5\ \text{nm}$ and the other at $461.8\ \text{nm}$. Sustained spectroscopic observations of the hydrogen alpha line (rest wavelength $656.3\ \text{nm}$) results in the following plot, in which two periodic variations have been identified and marked. Note: the x-axis is in days, and the y-axis is in nanometers.

[[figure:h-alpha-plot]]

Precision photometry of the system shows what appears to be an eclipsing binary light curve. The primary transit lasts 4 hours 46 minutes total. Maximum transit depth lasts for 4 hours 7 minutes.`,
      parts: [
        {
          label: "(a)",
          points: 4,
          prompt: "Calculate the ratio of the radii and the ratio of the luminosities of the two stars in the system.",
          solution: tex`**Temperatures** (Wien's law, $\lambda_\text{max}T = 2.898\times10^{-3}\ \text{m K}$): the hotter star is $T_1 = 2.898\times10^{-3}/461.8\ \text{nm} = 6275\ \text{K}$ and the cooler one is $T_2 = 2.898\times10^{-3}/690.5\ \text{nm} = 4197\ \text{K}$.

**Radius ratio.** During the transit the small star crosses the large one. From first to last contact the stars move $2(R_1 + R_2)$ relative to each other; during the flat bottom (second to third contact) they move $2(R_1 - R_2)$. So

$$\frac{R_1 + R_2}{R_1 - R_2} = \frac{286\ \text{min}}{247\ \text{min}} \quad\Longrightarrow\quad \frac{R_1}{R_2} = \frac{286 + 247}{286 - 247} = 13.67$$

**Luminosity ratio** (Stefan–Boltzmann law, $L \propto R^2T^4$):

$$\frac{L_1}{L_2} = \left(\frac{R_1}{R_2}\right)^2\left(\frac{T_1}{T_2}\right)^4 = 13.67^2\times\left(\frac{690.5}{461.8}\right)^4 \approx 934$$`,
          rubric: `Astro Coach marking guide (4 points):
- Temperatures from Wien's law (about 6280 K and 4200 K) or the temperature ratio 690.5/461.8: 1 point.
- Relates the total and flat-bottom transit durations to R₁ + R₂ and R₁ − R₂ (or equivalent contact-time reasoning): 1 point.
- Radius ratio about 13.7: 1 point.
- Luminosity ratio about 930 (accept 900–960): 1 point.`,
        },
        {
          label: "(b)",
          points: 5,
          prompt: "Calculate the semimajor axis and mass of each star.",
          solution: tex`**Period.** The fast oscillation in the plot repeats about every **11.3 days** (count the peaks: about 18 cycles in 204 days). (The official text says "approximately 5.7 days", but its own results below use the 11.3-day period.)

**Velocities.** Each star's H-alpha line swings about its moving average. The smaller swing (star 1) is about $\pm0.095\ \text{nm}$ and the larger (star 2) about $\pm0.16\ \text{nm}$. From $\Delta\lambda/\lambda = v/c$:

$$v_1 = \frac{0.095}{656.3}\,c \approx 43\ \text{km/s}, \qquad v_2 = \frac{0.162}{656.3}\,c \approx 74\ \text{km/s}$$

**Semimajor axes** (circular orbits seen edge-on, since the stars eclipse): $a = vT/2\pi$ gives

$$a_1 = 0.0450\ \text{AU}, \qquad a_2 = 0.0771\ \text{AU}$$

**Masses.** Kepler's third law for the whole binary, with $a = a_1 + a_2 = 0.1221\ \text{AU}$ and $T = 11.3/365.25\ \text{yr}$:

$$m_1 + m_2 = \frac{a^3}{T^2} = 1.90\,M_\odot$$

Since $m_1a_1 = m_2a_2$, the star with the smaller orbit is heavier: $m_1 = 1.20\,M_\odot$ and $m_2 = 0.70\,M_\odot$.`,
          rubric: `Astro Coach marking guide (5 points):
- Orbital period about 11.3 days read from the plot: 1 point.
- Velocity semi-amplitudes from Δλ/λ = v/c (about 43 and 74 km/s): 1 point.
- Semimajor axes about 0.045 AU and 0.077 AU from a = vT/(2π): 1 point.
- Total mass about 1.9 M☉ from Kepler's third law: 1 point.
- Individual masses about 1.2 M☉ and 0.7 M☉ from m₁a₁ = m₂a₂: 1 point.
Allow errors carried forward from the period read off the plot.`,
        },
        {
          label: "(c)",
          points: 3,
          prompt: "Calculate the actual luminosity and radius of each star.",
          solution: tex`**Radii.** The stars move relative to each other at $v_1 + v_2 \approx 117.5\ \text{km/s}$. Using the transit durations from (a):

$$2(R_1 + R_2) = (117.5\ \text{km/s})(17{,}160\ \text{s}), \qquad 2(R_1 - R_2) = (117.5\ \text{km/s})(14{,}820\ \text{s})$$

which give $R_1 = 9.39\times10^{8}\ \text{m} = 1.35\,R_\odot$ and $R_2 = 6.9\times10^{7}\ \text{m} = 0.099\,R_\odot$.

**Luminosities.** Using $L/L_\odot = (R/R_\odot)^2(T/T_\odot)^4$ with $T_\odot = 5778\ \text{K}$:

$$L_1 = 1.35^2\times\left(\frac{6275}{5778}\right)^4 = 2.54\,L_\odot, \qquad L_2 = 0.099^2\times\left(\frac{4197}{5778}\right)^4 = 0.0027\,L_\odot$$`,
          rubric: `Astro Coach marking guide (3 points):
- Radius of star 1 about 1.35 R☉ from the relative velocity and transit durations: 1 point.
- Radius of star 2 about 0.10 R☉: 1 point.
- Luminosities about 2.5 L☉ and 0.0027 L☉ from the Stefan–Boltzmann law: 1 point.`,
        },
        {
          label: "(d)",
          points: 4,
          prompt: tex`How far away is the system? The Solar flux at Earth is $1366\ \text{W/m}^2$.`,
          solution: tex`The system's total luminosity is $L = 2.54 + 0.0027 \approx 2.54\,L_\odot$. The Sun, with $L_\odot$, gives a flux of $1366\ \text{W/m}^2$ at $1\ \text{AU}$, so the Sun acts as a standard candle. Flux falls off as $1/d^2$:

$$\frac{F}{F_\odot} = \frac{L}{L_\odot}\left(\frac{1\ \text{AU}}{d}\right)^2 \quad\Longrightarrow\quad d = 1\ \text{AU}\times\sqrt{\frac{2.54\times1366}{3.068\times10^{-9}}} = 1.06\times10^{6}\ \text{AU}$$

$$d \approx 5.2\ \text{pc}$$

(The same result follows from magnitudes: the apparent magnitude is $m \approx 2.4$ and the absolute magnitude $M \approx 3.8$, and the distance modulus gives $d \approx 5.2\ \text{pc}$.)

**Correction note.** The official solution states $d = 5.94\ \text{pc}$, but its own luminosities give $5.2\ \text{pc}$.`,
          rubric: `Astro Coach marking guide (4 points):
- Total luminosity of the system (about 2.54 L☉): 1 point.
- Uses the inverse-square law with the Sun as a standard candle (or apparent and absolute magnitudes with the distance modulus): 2 points.
- Distance about 5.2 pc (accept 5.0–6.0 pc, which also covers the official 5.94 pc): 1 point.`,
        },
        {
          label: "(e)",
          points: 3,
          prompt:
            "What is the angular size of the stars' orbit? Can the telescope distinguish the two stars? What is the minimum separation the telescope can distinguish at the distance of this system? Assume the telescope observes at a wavelength of 550 nm.",
          solution: tex`**Angular size.** The stars' maximum separation is $a = 0.122\ \text{AU}$. At $5.2\ \text{pc}$, the small-angle formula (AU / pc = arcseconds) gives

$$\theta = \frac{0.122}{5.2} \approx 0.024''$$

**Resolution.** The diffraction limit of an $8\ \text{m}$ telescope at $550\ \text{nm}$ is

$$\theta_\text{min} = 1.22\frac{\lambda}{D} = 1.22\times\frac{550\times10^{-9}}{8}\times206265'' = 0.017''$$

Since $0.024'' > 0.017''$, the telescope **can** distinguish the two stars (just), at least when they are near maximum separation.

**Minimum separation.** At $5.2\ \text{pc}$, $0.017''$ corresponds to $0.017\times5.2 \approx 0.09\ \text{AU}$.

(Using the official distance of $5.94\ \text{pc}$ gives $0.021''$ and $0.10\ \text{AU}$, with the same conclusion.)`,
          rubric: `Astro Coach marking guide (3 points):
- Angular size of the orbit about 0.02″ (accept 0.020–0.025″, consistent with the student's distance): 1 point.
- Diffraction limit 1.22λ/D ≈ 0.017″ and the conclusion that the stars can be distinguished: 1 point.
- Minimum resolvable separation about 0.09–0.10 AU: 1 point.`,
        },
        {
          label: "(f)",
          points: 6,
          prompt:
            "Does the available data indicate any other objects in the system? If so, provide mass, semimajor axis, and a likely type. Justify your identification.",
          solution: tex`**Yes.** Besides the 11.3-day oscillation, the whole pattern drifts slowly up and down: both stars' lines move together with a period of about **214 days**. The binary as a whole must be orbiting something else.

**Binary's orbit.** The slow variation has an amplitude of about $0.18\ \text{nm}$, i.e. about $83\ \text{km/s}$. Then the binary's orbit around the new centre of mass has

$$a_b = \frac{vT}{2\pi} = \frac{(83.2\ \text{km/s})(214\times86400\ \text{s})}{2\pi} \approx 1.62\ \text{AU}$$

**Unknown object.** Let its mass be $m$ and its orbit $a_x$. The centre of mass gives $m_b a_b = m\,a_x$ with $m_b = 1.90\,M_\odot$, and Kepler's third law for the pair gives $(a_b + a_x)^3 = (m_b + m)\,T^2$ with $T = 214/365.25\ \text{yr}$. Solving these together:

$$m \approx 16\,M_\odot, \qquad a_x \approx 0.19\ \text{AU}$$

**Identification.** A normal $16\,M_\odot$ star would be tens of thousands of times more luminous than the binary and would dominate the spectrum, yet we see only the two stars' light. Something that massive and dark is most likely a **stellar-mass black hole**.`,
          rubric: `Astro Coach marking guide (6 points):
- Identifies the long-period variation (about 210–215 days) as evidence of another body: 1 point.
- Velocity amplitude of the binary about 83 km/s from the slow Doppler shift: 1 point.
- Binary's semimajor axis about 1.6 AU: 1 point.
- Unknown mass about 16 M☉ (accept 14–18 M☉): 1 point.
- Unknown object's semimajor axis about 0.19 AU: 1 point.
- Likely a black hole, justified by its high mass and lack of visible light: 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      figures: [
        {
          key: "h-alpha-plot",
          file: "h-alpha-plot.png",
          caption: "H-alpha line wavelength (nm) against time (days) for the two stars.",
          sourcePage: 4,
        },
      ],
      questionPages: [4, 5],
      solutionPages: [4, 5],
    },
  ],
};
