// USAAAO National Astronomy Olympiad 2014 (the 2013–2014 second round).
//
// Only Section B (three long questions, 34 points) is here: Section A is
// multiple choice and already lives in the MCQ bank, so its questions are
// numbered B1–B3 to keep them apart from the MCQs 1–16.
//
// The official marking criteria give a point value for every step, so the
// solutions below follow them closely (ADAPTED: the maths was images in the
// PDF and has been retyped, with short explanations added). The official
// hand-drawn diagrams are included as solution figures. B2(a) asks for a
// drawing, so it comes with a printable celestial-sphere answer sheet made
// by Astro Coach.
import type { FrqSeedExam } from "./types";

// String.raw keeps LaTeX backslashes as written (\frac, not \\frac).
const tex = String.raw;

const YEAR = 2014;

// The general marking note printed above the official long-answer criteria.
const OFFICIAL_MARKING_NOTE =
  "Official note: other methods are fine; points are awarded for any method with correct reasoning. Partially correct solutions and errors carried forward earn partial credit, but one point is deducted for an incorrect final answer.";

export const usaaao2014Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: YEAR,
  examName: "National Astronomy Olympiad",
  slug: "usaaao-2014-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  attributionText:
    "Source: USA Astronomy and Astrophysics Organization (USAAAO), National Astronomy Olympiad 2014. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.",
  questions: [
    // --- B1: Hohmann transfer to Mars (12 points) ---------------------------
    {
      number: "B1",
      title: "Transfer Orbit to Mars",
      section: "Long Questions",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Intermediate",
      points: 12,
      text: tex`One way to send a spacecraft to Mars would be to employ an elliptical orbit with Earth at its perihelion and Mars at its aphelion. You may assume that Mars revolves around the Sun in a circular orbit of radius $1.52\ \text{AU}$.`,
      parts: [
        {
          label: "(a)",
          points: 4,
          prompt: "How long does it take for the spacecraft to reach Mars?",
          solution: tex`The transfer ellipse touches Earth's orbit ($1\ \text{AU}$) at perihelion and Mars's orbit ($1.52\ \text{AU}$) at aphelion, so its semimajor axis is

$$a = \tfrac{1}{2}(1\ \text{AU} + 1.52\ \text{AU}) = 1.26\ \text{AU}$$

By Kepler's third law around the Sun, $T^2 = a^3$ (with $T$ in years and $a$ in AU):

$$T = (1.26)^{3/2} = 1.41\ \text{years}$$

The spacecraft only travels from perihelion to aphelion — half of the ellipse:

$$t = \tfrac{1}{2}T = 0.707\ \text{years} \approx 258\ \text{days}$$`,
          rubric: tex`Official marking (4 points):
- Semimajor axis of the orbit a = 0.5(1 AU + 1.52 AU) = 1.26 AU: 1 point.
- Kepler's third law T² = a³, giving T = 1.26^(3/2) = 1.41 years: 2 points.
- Time required = 0.5 × T = 0.707 years (about 258 days): 1 point.
${OFFICIAL_MARKING_NOTE}`,
        },
        {
          label: "(b)",
          points: 8,
          prompt:
            "Assuming that the spacecraft is launched in the prograde direction, what elongation angle of Mars should it be launched at to ensure that the spaceship reaches its destination? (A prograde direction is in the same direction as that of the orbits of the planets. The elongation angle of Mars is the angle between the Sun and Mars as seen from the Earth.)",
          solution: tex`Mars must arrive at the aphelion point $M'$ at the same moment as the spacecraft, so at launch it has to be ahead of Earth by exactly the angle it covers during the $0.707$-year trip (see the official diagram below the solution).

Mars's orbital period is $T_\text{Mars} = (1.52)^{3/2}\ \text{years} = 1.87\ \text{years}$, so during the transfer it moves through

$$\theta = \frac{0.707}{1.87}\times 360^\circ = 136^\circ$$

The spacecraft covers $180^\circ$, so at launch Mars leads Earth by $180^\circ - 136^\circ = 44^\circ$ as seen from the Sun. In the triangle Sun–Earth–Mars (with $r_e = 1\ \text{AU}$, $r_m = 1.52\ \text{AU}$), the law of cosines gives the Earth–Mars distance:

$$ME^2 = r_m^2 + r_e^2 - 2 r_m r_e \cos(180^\circ - \theta) \quad\Rightarrow\quad ME = 1.06\ \text{AU}$$

The elongation $\varphi$ is the angle at Earth between the Sun and Mars. Using the law of cosines again:

$$r_m^2 = r_e^2 + ME^2 - 2 r_e \cdot ME \cos\varphi \quad\Rightarrow\quad \varphi = 95^\circ$$

The spacecraft should be launched when Mars is at an elongation of about $95^\circ$ (east of the Sun, since Mars is ahead of Earth in its orbit).`,
          rubric: tex`Official marking (8 points):
- Mars's period T_Mars = (1.52)^(3/2) years = 1.87 years: 2 points.
- Angle Mars moves during the transfer θ = (0.707 / 1.87) × 360° = 136°: 2 points.
- Law of cosines ME² = r_m² + r_e² − 2 r_m r_e cos(180° − θ), giving ME = 1.06 AU: 2 points.
- Law of cosines (or sine rule) for the angle at Earth, giving the elongation φ = 95°: 2 points.
${OFFICIAL_MARKING_NOTE}`,
        },
      ],
      solutionSource: "ADAPTED",
      figures: [
        {
          key: "sol-transfer-orbit",
          file: "sol-transfer-orbit.png",
          kind: "SOLUTION",
          part: "(b)",
          caption: "Official diagram for B1(b): Earth (E) and Mars (M) at launch, with Mars at M′ when the spacecraft arrives.",
          sourcePage: 2,
        },
      ],
      questionPages: [6],
      solutionPages: [1, 2],
    },

    // --- B2: Circumpolar stars (12 points) ----------------------------------
    {
      number: "B2",
      title: "Circumpolar Stars",
      section: "Long Questions",
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Telescopes & Observing"],
      difficulty: "Advanced",
      points: 12,
      text: tex`Circumpolar stars are stars that never set below the horizon. Consider such a star with declination $\delta$, as seen by a northern observer at latitude $\Phi$.`,
      parts: [
        {
          label: "(a)",
          points: 3,
          format: "DRAWING",
          prompt:
            "Draw a figure that illustrates the motion of such a star in the sky. Label all relevant angles.",
          solution: tex`On the celestial sphere, the north celestial pole sits above the northern horizon at an altitude equal to the latitude, so the arc from the zenith to the pole is $90^\circ - \Phi$. A star of declination $\delta$ stays at an angular distance $90^\circ - \delta$ from the pole, so each day it traces a small circle of radius $90^\circ - \delta$ centred on the pole. For a circumpolar star this whole circle lies above the horizon. Seen from inside, facing north, the star moves anticlockwise around the pole (east to west over the top). The official sketch is shown below the solution.`,
          rubric: `Official marking (3 points):
- Correct shape (a circle around the north celestial pole, entirely above the horizon): 1 point.
- Correct direction of motion (anticlockwise around the pole as seen facing north): 1 point.
- Correct angles labelled (zenith to pole 90° − Φ, pole to star 90° − δ): 1 point.`,
        },
        {
          label: "(b)",
          points: 3,
          prompt: tex`Find the condition $\delta$ and $\Phi$ must fulfill for the star to be circumpolar.`,
          solution: tex`The star never sets if its lowest point (lower culmination, directly below the pole) is still above the northern horizon. The pole is $90^\circ - \Phi$ from the zenith and the star swings $90^\circ - \delta$ beyond it, so the star's greatest distance from the zenith must be less than $90^\circ$:

$$(90^\circ - \Phi) + (90^\circ - \delta) < 90^\circ \quad\Longrightarrow\quad \Phi + \delta > 90^\circ$$

Equivalently, $\delta > 90^\circ - \Phi$.`,
          rubric: `Official marking (3 points):
- (90° − Φ) + (90° − δ) < 90°: 2 points.
- Φ + δ > 90°: 1 point.
Full points are awarded to a correct answer without any working shown.`,
        },
        {
          label: "(c)",
          points: 6,
          prompt: tex`Write an expression (in terms of $\delta$ and $\Phi$) for the maximum azimuth of a circumpolar star that cannot reach 180 degrees. (The azimuth of a star is its angle from north.)`,
          solution: tex`If $90^\circ - \delta > 90^\circ - \Phi$ (that is, $\Phi > \delta$), the star's daily circle encloses the zenith, so its azimuth takes every value and reaches $180^\circ$. By the question, this is not the case, so $\Phi < \delta$ and the circle stays on the north side of the zenith.

Let $P$ be the star's position when its azimuth is greatest. There, the vertical circle from the zenith $Z$ just touches the star's daily circle, so it meets the arc from the pole $N$ to the star at a right angle: $\angle ZPN = 90^\circ$. In the spherical triangle $ZPN$ (see the official diagram below the solution), the sides are $ZN = 90^\circ - \Phi$ and $PN = 90^\circ - \delta$, and the angle at $Z$ is the azimuth $\theta$. The spherical sine rule gives

$$\frac{\sin\theta}{\sin(90^\circ - \delta)} = \frac{\sin 90^\circ}{\sin(90^\circ - \Phi)} \quad\Longrightarrow\quad \sin\theta = \frac{\cos\delta}{\cos\Phi}$$

So the maximum azimuth (east or west of north) is

$$\theta_\text{max} = \sin^{-1}\!\left(\frac{\cos\delta}{\cos\Phi}\right)$$`,
          rubric: `Official marking (6 points):
- Recognises that at the point P of greatest azimuth the angle ZPN = 90° (Z zenith, N north celestial pole): 2 points.
- Applies the spherical sine rule to triangle ZPN: sin θ / sin(90° − δ) = sin 90° / sin(90° − Φ): 3 points.
- Maximum azimuth = arcsin(cos δ / cos Φ): 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      figures: [
        {
          key: "b2a-answer-sheet",
          file: "b2a-answer-sheet.png",
          kind: "ANSWER_SHEET",
          part: "(a)",
          caption: "Question B2(a) answer sheet",
        },
        {
          key: "sol-circumpolar-path",
          file: "sol-circumpolar-path.png",
          kind: "SOLUTION",
          part: "(a)",
          caption: "Official sketch for B2(a): the circumpolar star's daily circle around the north celestial pole.",
          sourcePage: 2,
        },
        {
          key: "sol-max-azimuth",
          file: "sol-max-azimuth.png",
          kind: "SOLUTION",
          part: "(c)",
          caption: "Official diagram for B2(c): spherical triangle ZPN at the point P of greatest azimuth.",
          sourcePage: 3,
        },
      ],
      questionPages: [6],
      solutionPages: [2, 3, 4],
    },

    // --- B3: Critical density and dark matter (10 points) -------------------
    {
      number: "B3",
      title: "Critical Density of the Universe",
      section: "Long Questions",
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Gravity & Orbits"],
      difficulty: "Intermediate",
      points: 10,
      text: `The critical density of the Universe is the density at which the gravitational attraction of matter within the universe is balanced with its expansion in such a way that neither will ultimately prevail. If the density of the universe were lower than this critical density, expansion will continue indefinitely. On the other hand, if the density of the universe were any higher, it would re-collapse upon itself.`,
      parts: [
        {
          label: "(a)",
          points: 6,
          prompt: tex`The critical density of the universe is given by:

$$\rho_c = \frac{3H_0^2}{8\pi G}$$

It is possible to arrive at this result through classical means. By modeling the universe as having infinite extent and uniform density, expanding linearly with velocity $v = H_0 x$, derive the above expression.`,
          solution: tex`Consider a particle of mass $m$ at a distance $r$ from the centre of a uniform sphere of density $\rho_c$. Its speed is $v = H_0 r$, so

$$E_K = \tfrac{1}{2}mv^2 = \tfrac{1}{2}mH_0^2 r^2$$

Only the mass inside radius $r$, $M = \tfrac{4}{3}\pi r^3 \rho_c$, pulls it back, so

$$E_P = -\frac{GMm}{r} = -\frac{Gm}{r}\left(\tfrac{4}{3}\pi r^3 \rho_c\right)$$

For the particle to be critically bound (it just escapes, ending at rest at infinity), the total energy is zero:

$$\tfrac{1}{2}mH_0^2 r^2 - \tfrac{4}{3}\pi G m r^2 \rho_c = 0 \quad\Longrightarrow\quad \rho_c = \frac{3H_0^2}{8\pi G}$$

The mass $m$ and radius $r$ cancel, so the same condition holds everywhere in the universe.`,
          rubric: tex`Official marking (6 points):
- Kinetic energy = ½mv² = ½mH₀²r²: 2 points.
- Gravitational potential energy = −GMm/r = −(Gm/r)(4/3 πr³ρ_c): 2 points.
- For the particle to be critically bound, kinetic energy + gravitational potential energy = 0: 1 point.
- Result ρ_c = 3H₀²/(8πG): 1 point.
${OFFICIAL_MARKING_NOTE}`,
        },
        {
          label: "(b)",
          points: 4,
          prompt: tex`The density of ordinary (baryonic) matter in the universe is determined to be about $3.8\times10^{-28}\ \text{kg m}^{-3}$. Hence, provide a justification for the existence of dark matter. (Latest estimates of the Hubble constant suggest a value of $2.20\times10^{-18}\ \text{s}^{-1}$.)`,
          solution: tex`With $H_0 = 2.20\times10^{-18}\ \text{s}^{-1}$:

$$\rho_c = \frac{3H_0^2}{8\pi G} = \frac{3(2.20\times10^{-18})^2}{8\pi(6.67\times10^{-11})} = 8.66\times10^{-27}\ \text{kg m}^{-3}$$

Observations — for example measurements of the curvature of the universe, which is very nearly flat, as predicted by inflationary models — show that the actual density of the universe must be close to $\rho_c$. But ordinary matter supplies only

$$\frac{3.8\times10^{-28}}{8.66\times10^{-27}} \approx 0.044 \approx 4\%$$

of the critical density. Since the baryonic density is much less than $\rho_c$, the remaining mass must be made up by something we cannot see: dark matter. (Today we know that dark matter accounts for about a quarter of the critical density, and most of the rest is dark energy.)`,
          rubric: tex`Official marking (4 points):
- ρ_c = 3H₀²/(8πG) = 8.66 × 10⁻²⁷ kg m⁻³ (accept 8.6–8.7 × 10⁻²⁷): 1 point.
- States that the density of the universe must be close to ρ_c: 1 point.
- Justifies this, e.g. as predicted by inflationary models / measurements of the universe's curvature / other reasonable explanation: 1 point.
- Since the baryonic density ≪ ρ_c, the remaining mass must be made up by dark matter: 1 point.
${OFFICIAL_MARKING_NOTE}`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [6],
      solutionPages: [4],
    },
  ],
};
