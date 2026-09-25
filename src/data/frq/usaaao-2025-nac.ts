// USAAAO National Astronomy Competition 2025: seven problems, 180 points.
//
// The whole paper is free response (no multiple-choice section).
// Every part is WORKED: each asks for a derivation, a calculation or an
// explanation, so the student's working is graded by AI against the
// official point breakdown where the solutions print one, and against an
// Astro Coach marking guide otherwise.
//
// Solutions follow the official ones. Two official results in Problem 6
// could not be reproduced and are corrected, with a note in the solution:
//   - 6(c): the official τ ≈ 1.3 Gyr; the official formula with the
//     official estimates of v and n gives ≈ 5 × 10^10 yr.
//   - 6(e): the official working uses Z/X ≈ 0.016 for the Sun's Fe/H but
//     then quotes 8.6 × 10^-8, which matches the real solar iron abundance
//     instead. The solution explains both routes.
// The public exam PDF prints the correct derivative of arccos in Problem 5
// (the copy sent to students had a misprint); the corrected form is used.
import type { FrqSeedExam } from "./types";

// String.raw keeps LaTeX backslashes as typed: tex`\frac{a}{b}`.
const tex = String.raw;

const YEAR = 2025;
const EXAM_NAME = "National Astronomy Competition";

export const usaaao2025Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: YEAR,
  examName: EXAM_NAME,
  slug: "usaaao-2025-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2025/05/test.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2025/05/sol.pdf",
  attributionText: `Source: USA Astronomy and Astrophysics Organization (USAAAO), ${EXAM_NAME} ${YEAR}. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.`,
  questions: [
    // --- Problem 1: Kepler's equation between two observations ---------------
    {
      number: "1",
      title: "Tracking a Bootes Planet",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Exoplanets & Life"],
      difficulty: "Intermediate",
      points: 15,
      text: tex`David is researching an Earth-like exoplanet near the constellation of Bootes, orbiting a star twice the mass of our Sun. On March 14, 2025, the planet was observed at 3 AU from its parent star. After some time, David observes it again and finds that it has already passed its farthest point from the star and is now at 4 AU. If the planet is known to have a period of 5 years and an eccentricity of 0.5, what is the shortest amount of time that could have passed since the first observation on March 14, 2025? Assume that David views the orbit face-on and that the exoplanet's velocity component along the semimajor axis has opposite sign at the two observation points.

[[figure:orbit]]`,
      solution: tex`First, we need to find the planet's semi-major axis through Kepler's third law (in AU, years and solar masses):

$$\frac{a^3}{T^2} = M \quad\Longrightarrow\quad a = \sqrt[3]{MT^2} = \sqrt[3]{2 \times 5^2} \approx 3.684\ \text{AU}$$

Next, find the true anomaly $f$ at 3 AU and at 4 AU, which gives the position of the planet on the ellipse. At 3 AU the planet has not yet passed its farthest point (aphelion), so $0^\circ < f < 180^\circ$; at 4 AU it has passed aphelion, so $180^\circ < f < 360^\circ$.

$$r = \frac{a(1-e^2)}{1+e\cos f} \quad\Longrightarrow\quad \cos f = \frac{1}{e}\left(\frac{a(1-e^2)}{r} - 1\right)$$

$$f_{3\,\text{AU}} \approx 99.09^\circ, \qquad f_{4\,\text{AU}} \approx 231.79^\circ$$

Convert to the eccentric anomaly $E$, keeping the same half of the orbit:

$$\cos E = \frac{e + \cos f}{1 + e\cos f} \quad\Longrightarrow\quad E_{3\,\text{AU}} \approx 68.20^\circ, \qquad E_{4\,\text{AU}} \approx 260.12^\circ$$

Convert to the mean anomaly with Kepler's equation (in radians):

$$M = E - e\sin E \quad\Longrightarrow\quad M_{3\,\text{AU}} \approx 0.7261\ \text{rad}, \qquad M_{4\,\text{AU}} \approx 5.0326\ \text{rad}$$

The mean anomaly grows uniformly in time, $M = \frac{2\pi}{T}(t - t_0)$, so

$$\Delta t = (M_{4\,\text{AU}} - M_{3\,\text{AU}})\,\frac{T}{2\pi} = (5.0326 - 0.7261) \times \frac{5\ \text{yr}}{2\pi} \approx 3.427\ \text{years}$$`,
      rubric: `Official marking scheme (15 points):
- Semi-major axis from Kepler's third law, a ≈ 3.684 AU: 2 points.
- True anomalies at 3 AU (≈ 99.1°, between 0° and 180°) and at 4 AU (≈ 231.8°, between 180° and 360°): 3 points.
- Eccentric anomalies (≈ 68.2° and ≈ 260.1°), in the correct halves of the orbit: 4 points.
- Mean anomalies from Kepler's equation (≈ 0.726 rad and ≈ 5.033 rad): 4 points.
- Elapsed time Δt = ΔM · T/(2π) ≈ 3.43 years: 2 points.`,
      solutionSource: "OFFICIAL",
      figures: [
        {
          key: "orbit",
          file: "q1-orbit.png",
          caption: "The planet's orbit, seen face-on, with the two observed positions.",
          sourcePage: 2,
        },
      ],
      questionPages: [2],
      solutionPages: [2, 3],
    },

    // --- Problem 2: limiting magnitude of the eye ----------------------------
    {
      number: "2",
      title: "The Eye as a Camera",
      topic: "Telescopes & Observing",
      topics: ["Telescopes & Observing", "Light & Spectra"],
      difficulty: "Intermediate",
      points: 15,
      text: tex`Derive the limiting magnitude for naked-eye visibility of a star in a dark-sky environment, by considering an analogy to a CCD camera. Assume that the dominant noise source is $\sqrt{n}$ photon shot noise, and "visibility" requires a signal-to-noise ratio (SNR) $> 1$.

You'll need the following information:

- The dark-adapted human pupil dilates to an aperture of 6 mm. The quantum efficiency of the rod cells used for night vision is around 5% (averaged across the full visible spectrum), and the effective "exposure time" is roughly 30 ms.
- For a convenient magnitude reference, the intensity of sunlight within the visible spectrum is $5 \times 10^2\ \text{W/m}^2$, and the apparent magnitude of the Sun is $-26.7$.

Feel free to approximate all the visible photons as having wavelength $\lambda = 500\ \text{nm}$, for the purpose of calculating the photon energy. This is near the peak sensitivity for human night vision.`,
      solution: tex`The full expression for the signal-to-noise ratio in a CCD camera is

$$\text{SNR} = \frac{IQt}{\sqrt{IQt + N_d t + N_r^2}}$$

where $I$ is the photon flux, $Q$ is the quantum efficiency, $t$ is the integration time, and $N_d$ and $N_r$ are the dark current and read noise.

For simplicity we discard the other sources of noise (though something like "dark current" does exist in the eye — just close your eyes in a dark room to see it!). The expression simplifies to the photon shot noise expression:

$$\text{SNR} = \sqrt{n} = \sqrt{IQt}$$

Given $Q = 0.05$ and $t = 0.03\ \text{s}$, SNR $= 1$ needs

$$I = \frac{1}{Qt} \approx 6.7 \times 10^2\ \text{photons/s}$$

For $\lambda = 500\ \text{nm}$ photons, this corresponds to a power of

$$P = I\,\frac{hc}{\lambda} \approx 6.7\times10^{2} \times 3.97\times10^{-19}\ \text{J} \approx 2.6 \times 10^{-16}\ \text{W}$$

Since this is the power entering the pupil, the corresponding flux is

$$F_\text{limit} = \frac{2.6 \times 10^{-16}\ \text{W}}{\pi (3\ \text{mm})^2} \approx 9 \times 10^{-12}\ \text{W/m}^2$$

Finally, convert this to an apparent magnitude, using the Sun as the reference:

$$m_\text{limit} = m_\odot - 2.5\log_{10}\frac{F_\text{limit}}{F_\odot} = -26.7 - 2.5\log_{10}\frac{9 \times 10^{-12}}{5 \times 10^{2}} \approx 7.7$$

In reality, the limiting magnitude for pristine dark skies is roughly 6 to 7, depending on the observer and the weather — so this simple model gets pretty close!`,
      rubric: `Astro Coach marking guide (15 points):
- Shot-noise SNR = √(IQt) (other noise neglected), so SNR = 1 needs IQt = 1 detected photon: 3 points.
- Required photon rate I = 1/(Qt) ≈ 670 photons/s: 2 points.
- Photon energy hc/λ ≈ 4.0 × 10⁻¹⁹ J and power ≈ 2.6 × 10⁻¹⁶ W: 3 points.
- Flux = power / pupil area π(3 mm)² ≈ 9 × 10⁻¹² W/m²: 3 points.
- Magnitude relation m = m_Sun − 2.5 log(F/F_Sun) set up with the Sun as reference: 2 points.
- Limiting magnitude ≈ 7.7 (7.3–8.0 accepted): 2 points.`,
      solutionSource: "OFFICIAL",
      questionPages: [2],
      solutionPages: [3, 4],
    },

    // --- Problem 3: solar sail ----------------------------------------------
    {
      number: "3",
      title: "Sailing",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Light & Spectra", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 15,
      text: tex`Consider a hypothetical solar sail that starts its trajectory just outside the surface of the Sun and aims to reach Jupiter's orbit. This is a square sail with a side length of $l = 50\ \text{m}$, a mass of $m = 2.0\ \text{kg}$, and a reflectivity of $\eta = 85\%$. The remaining 15% of the photons are absorbed by the sail. In order to simplify the calculations, only take into account the gravity and radiation pressure from the Sun, and assume that the sail is initially stationary with respect to the Sun. Estimate how long it would take for this sail to reach Jupiter's orbit. Feel free to make reasonable approximations if needed, but be sure to state and justify any approximations you make.`,
      solution: tex`Radiation pressure comes from the momentum of the photons, $p = E/c$. An absorbed photon gives the sail its momentum once; a reflected photon reverses direction and gives it twice. With a fraction $\eta$ reflected, the radiation pressure on the sail is

$$P_r = (1+\eta)\frac{F_\odot}{c}$$

where $F_\odot = L_\odot/(4\pi r^2)$ is the solar flux. Including gravity, the acceleration at distance $r$ is

$$ma = (1+\eta)\,l^2\,\frac{L_\odot}{4\pi r^2 c} - \frac{GM_\odot m}{r^2} \quad\Longrightarrow\quad a = \frac{1}{r^2}\left(\frac{(1+\eta)\,l^2 L_\odot}{4\pi c\,m} - GM_\odot\right) = \frac{k}{r^2}$$

Both forces fall off as $1/r^2$, so all the constants combine into one:

$$k = \frac{1.85 \times 50^2 \times 3.827\times10^{26}}{4\pi \times 2.998\times10^{8} \times 2.0} - 6.674\times10^{-11} \times 1.989\times10^{30} \approx 1.0 \times 10^{20}\ \text{m}^3\,\text{s}^{-2}$$

Using the chain rule, $a = \dfrac{dv}{dt} = \dfrac{dv}{dr}\dfrac{dr}{dt} = v\dfrac{dv}{dr}$, so $\dfrac{k}{r^2}\,dr = v\,dv$. Integrating from rest at the Sun's surface:

$$\int_{R_\odot}^{r} \frac{k}{u^2}\,du = \int_0^v v'\,dv' \quad\Longrightarrow\quad v = \sqrt{2k\left(\frac{1}{R_\odot} - \frac{1}{r}\right)}$$

**Approximation:** Jupiter's orbit is far larger than the Sun, so $1/r \ll 1/R_\odot$ for almost the whole trip. The sail reaches nearly its final speed very close to the Sun and then coasts at

$$v \approx \sqrt{\frac{2k}{R_\odot}} \approx 5.4 \times 10^{5}\ \text{m/s}$$

The travel time is therefore about

$$\Delta t \approx \frac{a_J}{v} = \frac{5.2 \times 1.496\times10^{11}\ \text{m}}{5.4\times10^{5}\ \text{m/s}} \approx 1.4 \times 10^{6}\ \text{s} \approx 16\ \text{days}$$

(Answers within one day of this result are acceptable.)`,
      rubric: `Astro Coach marking guide (15 points; the official solution accepts answers within one day of 16 days):
- Radiation force on the sail with the (1 + η) factor, F = (1 + η) l² L_Sun / (4π r² c): 4 points.
- Net acceleration including gravity, both terms ∝ 1/r², constant k ≈ 1.0 × 10²⁰ m³/s²: 3 points.
- Integration using a = v dv/dr (or energy conservation), v² = 2k(1/R_Sun − 1/r): 3 points.
- Justified approximation that the sail coasts at v ≈ √(2k/R_Sun) ≈ 5.4 × 10⁵ m/s for most of the trip: 3 points.
- Travel time ≈ 5.2 AU / v ≈ 1.4 × 10⁶ s ≈ 16 days (15–17 days accepted): 2 points.`,
      solutionSource: "OFFICIAL",
      questionPages: [2],
      solutionPages: [4, 5],
    },

    // --- Problem 4: binary neutron star inspiral -----------------------------
    {
      number: "4",
      title: "Gravitational Waves",
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Gravity & Orbits"],
      difficulty: "Advanced",
      points: 20,
      text: tex`In a binary neutron star system, two identical neutron stars of mass $M$ each undergo a circular orbit of radius $R$ around their center of mass. This problem explores the general relativistic effect of gravitational waves on this system, but the system can be approximated as Newtonian circular orbits which radiate energy but remain very nearly circular even though the radius is changing very slowly over time.`,
      parts: [
        {
          label: "(a)",
          points: 5,
          prompt: tex`The total gravitational wave luminosity of the system, $L_{GW}$, can be approximated according to general relativity by a single term which includes only a dimensionless constant, the physical constants $G$ and $c$, and $M$ and $R$. Furthermore, $c$ and $R$ are raised to the same power. Using the fact that the dimensionless constant from general relativistic calculations is $\frac{2}{5}$, determine the expression for $L_{GW}$. Use the given value of the dimensionless constant for the remainder of this problem.`,
          solution: tex`$L_{GW}$ has dimensions of energy per time, $[M][L]^2/[T]^3$. $G$ has dimensions $[L]^3/([M][T]^2)$, $c$ has $[L]/[T]$, $M$ has $[M]$ and $R$ has $[L]$. According to the problem statement,

$$L_{GW} = \frac{2}{5}\,G^\alpha (cR)^\beta M^\gamma$$

Matching dimensions gives a system of equations:

- For $[M]$: $1 = -\alpha + \gamma$, so $\gamma = 1 + \alpha$;
- For $[L]$: $2 = 3\alpha + 2\beta$;
- For $[T]$: $-3 = -2\alpha - \beta$.

Adding twice the $[T]$ equation to the $[L]$ equation gives $-4 = -\alpha$, so $\alpha = 4$, $\beta = -5$ and $\gamma = 5$. Thus

$$L_{GW} = \frac{2G^4M^5}{5R^5c^5}$$`,
          rubric: `Official marking scheme (5 points):
- Writes L_GW = (2/5) G^α (cR)^β M^γ: 1 point.
- Sets up the dimensional equations for mass, length and time: 2 points.
- Solves α = 4, β = −5, γ = 5: 1 point.
- Final expression L_GW = 2G⁴M⁵ / (5R⁵c⁵): 1 point.`,
        },
        {
          label: "(b)",
          points: 5,
          prompt: tex`Using the expression from part (a), find an expression for $\frac{dR}{dt}$, the rate of change of the radius $R$ of the circular orbit with respect to time, using the same constants and variables.

**Hint:** $\frac{d}{dt}(x^\alpha) = \alpha x^{\alpha-1}\frac{dx}{dt}$.`,
          solution: tex`By the virial theorem (or the vis-viva equation), the total energy of a circular orbit of masses $M$ and $m$ separated by $a$ is $E = -\dfrac{GMm}{2a}$. Here $m = M$ and $a = 2R$, so

$$E = -\frac{GM^2}{4R}$$

The radiated power drains the orbital energy:

$$L_{GW} = -\frac{dE}{dt} = -\frac{GM^2}{4R^2}\frac{dR}{dt}$$

so

$$\frac{dR}{dt} = -\frac{4R^2}{GM^2}L_{GW} = -\frac{4R^2}{GM^2}\cdot\frac{2G^4M^5}{5R^5c^5} = -\frac{8G^3M^3}{5R^3c^5}$$`,
          rubric: `Official marking scheme (5 points):
- Orbital energy E = −GM²/(4R) (from E = −GMm/(2a) with m = M, a = 2R): 2 points.
- L_GW = −dE/dt = −(GM²/4R²) dR/dt: 2 points.
- Final result dR/dt = −8G³M³ / (5R³c⁵): 1 point.`,
        },
        {
          label: "(c)",
          points: 3,
          prompt: tex`Astronomers measure $R = 0.750\ \text{AU}$ and the orbital period $P = 387\ \text{days}$. Calculate $M$, the mass of each neutron star, in solar masses.`,
          solution: tex`Kepler's third law: $G(M+m)P^2 = 4\pi^2 a^3$. With $m = M$ and $a = 2R$, this becomes $GMP^2 = 16\pi^2R^3$, so

$$M = \frac{16\pi^2R^3}{GP^2} = \frac{16\pi^2(0.750 \times 1.496\times10^{11}\ \text{m})^3}{(6.674\times10^{-11})(387 \times 24 \times 3600\ \text{s})^2}\cdot\frac{1\,M_\odot}{1.989\times10^{30}\ \text{kg}}$$

$$M \approx 1.50\,M_\odot$$`,
          rubric: `Official marking scheme (3 points):
- Kepler's third law with total mass 2M and separation 2R (GMP² = 16π²R³): 2 points.
- M ≈ 1.50 solar masses: 1 point.`,
        },
        {
          label: "(d)",
          points: 3,
          prompt: tex`Verify the assumption that each orbit can be approximated as circular is valid by calculating the dimensionless parameter $\frac{dR/dt}{R/P}$ and commenting on what your calculated value means.`,
          solution: tex`$\dfrac{dR/dt}{R/P}$ approximates the fractional change in the radius over one orbit. If each orbit is nearly circular, the radius is almost constant over one orbit, so its magnitude should be much less than one (and negative, because the orbit is shrinking).

$$\frac{dR/dt}{R/P} = -\frac{8G^3M^3P}{5R^4c^5} = -\frac{8\,(6.674\times10^{-11} \times 1.50 \times 1.989\times10^{30})^3\,(387 \times 24 \times 3600)}{5\,(0.750 \times 1.496\times10^{11})^4\,(2.998\times10^{8})^5} \approx -1.1 \times 10^{-18}$$

As expected, this is far smaller than one, so the orbit is circular to an excellent approximation.`,
          rubric: `Official marking scheme (3 points):
- Explains that the parameter is the fractional change in radius per orbit, so it must be much smaller than 1 in magnitude (negative because the orbit shrinks): 2 points.
- Value ≈ −1.1 × 10⁻¹⁸: 1 point.`,
        },
        {
          label: "(e)",
          points: 4,
          prompt: tex`In seconds and years, calculate $t_m$, the time until a merger between the two neutron stars, under the assumptions that the expression from part (b) is always true and that the merger occurs when $R = 0$ since the radii of the neutron stars are negligible compared to the size of the orbit.

**Hint:** $\int_a^b x^\beta\,dx = \frac{1}{\beta+1}\left(b^{\beta+1} - a^{\beta+1}\right)$.`,
          solution: tex`From part (b), $\dfrac{dR}{dt} = -\dfrac{8G^3M^3}{5R^3c^5}$. Separating the variables and integrating from $R_0$ down to $0$:

$$t_m = \int_0^{t_m} dt = -\frac{5c^5}{8G^3M^3}\int_{R_0}^{0} R^3\,dR = \frac{5c^5}{8G^3M^3}\int_0^{R_0} R^3\,dR = \frac{5c^5R_0^4}{32G^3M^3}$$

$$t_m = \frac{5\,(2.998\times10^{8})^5\,(0.750 \times 1.496\times10^{11})^4}{32\,(6.674\times10^{-11} \times 1.50 \times 1.989\times10^{30})^3} \approx 7.6 \times 10^{24}\ \text{s} \approx 2.4 \times 10^{17}\ \text{years}$$

(The official solution quotes $7.55 \times 10^{24}$ s $= 2.39 \times 10^{17}$ years; the small difference is rounding.) This is far longer than the age of the Universe, so neutron stars that are seen to merge must have started much closer together than 1.5 AU!`,
          rubric: `Official marking scheme (4 points):
- Separates variables and integrates dR/dt: 1 point.
- t_m = 5c⁵R₀⁴ / (32G³M³): 2 points.
- Numerical answer ≈ 7.6 × 10²⁴ s ≈ 2.4 × 10¹⁷ years (both units): 1 point.`,
        },
      ],
      solutionSource: "OFFICIAL",
      questionPages: [3],
      solutionPages: [6, 7],
    },

    // --- Problem 5: great circles and the setting Sun ------------------------
    {
      number: "5",
      title: "Stupendous Man's Saga",
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Solar System"],
      difficulty: "Advanced",
      points: 30,
      text: tex`You may attempt subsections without attempting the previous parts by making appropriate assumptions and justifying them.

The famous Stupendous Man is on a trip from the headquarters of G.R.O.S.S., his base, to the hideous Shady Acres (a creepy housing development) to save the woods they are encroaching on. He travels on his Flying Carpet, which always takes the optimal path (shortest) between any two points on Earth. Stupendous Man is given the information that Shady Acres has a latitude of $23^\circ$ N. Meanwhile, he overhears that the headquarters of G.R.O.S.S. is also in the northern hemisphere, but does not know the specific latitude. Assume that the Tropic of Cancer resides at $23.5^\circ$ N.`,
      parts: [
        {
          label: "(a)",
          points: 2,
          prompt: tex`At some moment, Stupendous Man observes that the Flying Carpet is at a latitude of $50^\circ$ N and is traveling exactly due West. Stupendous Man wonders if he is currently further North than the headquarters of G.R.O.S.S. Is it possible to reliably answer this question without any other information? If so, what is the answer? If not, explain why.`,
          solution: tex`**Yes — he is further North than the headquarters.** The shortest path between two points on a sphere is an arc of a great circle. A great-circle path heads exactly due West (or East) only at its northernmost (or southernmost) point. Since both ends of the trip are in the northern hemisphere, the point where he travels due West must be the northernmost point of his flight, so he is north of his starting point.`,
          rubric: `Astro Coach marking guide (2 points):
- The path is a great circle, and travelling exactly due West means he is at its northernmost point: 1 point.
- Conclusion: yes, he is further North than G.R.O.S.S.: 1 point.`,
        },
        {
          label: "(b)",
          points: 9,
          prompt: tex`What portion of the rest of the flight path (from his current location to Shady Acres) lies above the Tropic of Cancer?`,
          solution: tex`Let $N$ be the North Pole, $A$ Stupendous Man's current location, $B$ Shady Acres, and $T$ the point where the flight path crosses the Tropic of Cancer. Since $A$ is the highest point of the great circle through G.R.O.S.S. and Shady Acres, the meridian $NA$ meets the flight path at a right angle: $\angle BAN = 90^\circ$. This creates the spherical triangles $NAT$ and $NAB$.

[[figure:triangle]]

We want the arc $AT$ as a fraction of the arc $AB$. By construction, $NA = 90^\circ - 50^\circ = 40^\circ$ and $NT = 90^\circ - 23.5^\circ = 66.5^\circ$. The spherical cosine rule in triangle $NAT$ gives

$$\cos(NT) = \cos(NA)\cos(AT) + \sin(NA)\sin(AT)\cos 90^\circ \quad\Longrightarrow\quad AT = 58.63^\circ$$

Similarly, with $NB = 90^\circ - 23^\circ = 67^\circ$:

$$\cos(NB) = \cos(NA)\cos(AB) + \sin(NA)\sin(AB)\cos 90^\circ \quad\Longrightarrow\quad AB = 59.33^\circ$$

So the portion of the remaining path above the Tropic of Cancer is

$$\frac{AT}{AB} = \frac{58.63^\circ}{59.33^\circ} \approx 0.988$$

(A slightly more accurate latitude for the Tropic of Cancer gives a slightly different answer.)`,
          rubric: `Official marking scheme (9 points; only the right angle is point-marked in the official solution, the rest is an Astro Coach breakdown):
- Recognises that the meridian through the current point is perpendicular to the flight path, ∠BAN = 90°: 2 points.
- Sets up the spherical triangle with NA = 40° and NT = 66.5°: 2 points.
- Spherical cosine rule gives AT ≈ 58.6°: 2 points.
- With NB = 67°, AB ≈ 59.3°: 2 points.
- Portion AT/AB ≈ 0.988: 1 point.`,
        },
        {
          label: "(c)",
          points: 2,
          prompt: tex`To destroy Shady Acres, Stupendous Man needs to activate a device which can only be activated if the Sun is directly overhead (at the zenith). For what portion of the flight path would this be a possibility (the time of the year is unknown)?`,
          solution: tex`The Sun's highest declination over the year is $23.5^\circ$ N, at the June solstice. So the Sun can be at the zenith only at places south of the Tropic of Cancer (these are the only places with "zero shadow days"). The answer is the complement of part (b):

$$1 - 0.988 = 0.012$$`,
          rubric: `Astro Coach marking guide (2 points):
- The Sun can only be overhead at latitudes at or below 23.5° N (its maximum declination): 1 point.
- Portion = 1 − (answer to b) ≈ 0.012: 1 point.`,
        },
        {
          label: "(d)",
          points: 2,
          prompt: tex`Stupendous Man finds that the Sun is currently exactly overhead at some point in the flight and is able to activate his device! What is the current month? Only give one answer.`,
          solution: tex`The Sun can only be overhead on the part of the path between $23^\circ$ N and $23.5^\circ$ N, so its declination must be close to its maximum of $23.5^\circ$ N. The date must therefore be near the June solstice: the month is **June** (July is also accepted: the official answer is "June/July", since the Sun's declination stays above $23^\circ$ from about June 10 to July 2).`,
          rubric: `Astro Coach marking guide (2 points):
- The Sun's declination must be between about 23° and 23.5° N, i.e. near the June solstice: 1 point.
- Answer: June (July also accepted): 1 point.`,
        },
        {
          label: "(e)",
          points: 15,
          prompt: tex`Some time later, it is June 21st and Stupendous Man is back at Shady Acres to show his partner, Hobbes, how successful his attack was. He wants to show Hobbes a great aerial view of the nature that has grown there since with an air balloon ride. He notices that the Sun is currently setting, giving rise to a beautiful view! To mesmerize Hobbes, Stupendous Man wants to keep the Sun at the horizon as they rise. Stupendous Man and Hobbes are in the air balloon currently 100 meters above the surface of the Earth. At this moment, what should be the instantaneous speed (in m/s) of the balloon in order to keep up with the setting Sun (i.e. ensure that the Sun stays at their perceived horizon as it sets)? You may ignore the effects of atmospheric refraction.

To help you, here are some rules of differentiation:

1. $\frac{d}{dx}(\arccos x) = \frac{-1}{\sqrt{1-x^2}}$
2. $\frac{d}{dx}(f(g(x))) = \frac{df}{dg}\frac{dg}{dx}$
3. $\frac{d}{dx}(x^n) = nx^{n-1}$`,
          solution: tex`The balloon rises straight up, so we find how fast the Sun's altitude drops, then how fast the balloon must rise for its horizon to dip at the same rate.

**How fast the Sun sets.** On June 21st, the Sun's declination is $\delta_\odot = 23.5^\circ$, and its hour angle $H$ grows at a constant rate $\dfrac{dH}{dt} = \omega_c = \dfrac{2\pi}{24 \times 60 \times 60}\ \text{rad/s}$. Its altitude $a$ at latitude $\lambda$ obeys

$$\sin a = \sin\delta_\odot \sin\lambda + \cos\delta_\odot\cos\lambda\cos H$$

Differentiating with respect to time:

$$\cos a\,\frac{da}{dt} = -\cos\delta_\odot\cos\lambda\sin H\,\omega_c$$

At sunset $a = 0$ and $\cos H = -\tan\delta_\odot\tan\lambda$, so $\sin H = \sqrt{1 - \tan^2\delta_\odot\tan^2\lambda}$ (positive, because the Sun sets west of the meridian, with $H$ between 0h and 12h). With $\lambda = 23^\circ$:

$$\omega = \frac{da}{dt} = -\cos\delta_\odot\cos\lambda\sqrt{1 - \tan^2\delta_\odot\tan^2\lambda}\;\omega_c \approx -6.03 \times 10^{-5}\ \text{rad/s}$$

(the minus sign just means the Sun is setting).

**How fast the horizon dips.** At height $h$, the horizon lies an angle $\theta$ below the horizontal, where (from the right triangle formed by the Earth's centre, the tangent point and the balloon)

[[figure:balloon]]

$$\cos\theta = \frac{R_E}{R_E + h}$$

Differentiating $\theta = \arccos\left(\dfrac{1}{1 + h/R_E}\right)$ with the chain rule, with $v = dh/dt$:

$$\frac{d\theta}{dt} = \frac{v}{\sqrt{2\frac{h}{R_E} + \frac{h^2}{R_E^2}}\;(R_E + h)} \approx \frac{v}{\sqrt{2hR_E}} \quad (h \ll R_E)$$

**Equating the two rates** at $h = 100\ \text{m}$:

$$|\omega| = \frac{v}{\sqrt{2hR_E}} \quad\Longrightarrow\quad v = |\omega|\sqrt{2hR_E} = 6.03\times10^{-5} \times \sqrt{2 \times 100 \times 6.371\times10^{6}} \approx 2.15\ \text{m/s}$$

**Note:** the copy of the exam sent to students misprinted the derivative of $\arccos x$ (without the square root). When grading, solutions using either the correct or the misprinted expression were accepted.`,
          rubric: `Astro Coach marking guide (15 points):
- Altitude formula sin a = sin δ sin λ + cos δ cos λ cos H with δ = 23.5°, λ = 23°: 3 points.
- Differentiates with respect to time using dH/dt = 2π per day: 3 points.
- At sunset, cos H = −tan δ tan λ and sin H = +√(1 − tan²δ tan²λ): 2 points.
- Rate of the Sun's altitude change |da/dt| ≈ 6.0 × 10⁻⁵ rad/s: 2 points.
- Horizon dip geometry cos θ = R_E / (R_E + h): 2 points.
- dθ/dt ≈ v / √(2hR_E): 2 points.
- v ≈ 2.15 m/s (2.0–2.3 accepted). Work using the misprinted arccos derivative from the students' copy is also accepted: 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      figures: [
        {
          key: "triangle",
          file: "q5-solution-triangle.png",
          caption: "The flight path from A to B, the North Pole N, and the crossing T with the Tropic of Cancer.",
          kind: "SOLUTION",
          part: "(b)",
          sourcePage: 9,
        },
        {
          key: "balloon",
          file: "q5-solution-balloon.png",
          caption: "The balloon at height h sees the horizon at the tangent point D, an angle θ below the horizontal.",
          kind: "SOLUTION",
          part: "(e)",
          sourcePage: 11,
        },
      ],
      questionPages: [4],
      solutionPages: [8, 9, 10, 11, 12],
    },

    // --- Problem 6: a globular cluster --------------------------------------
    {
      number: "6",
      title: "Spherical cluster",
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Stars & Black Holes", "Telescopes & Observing"],
      difficulty: "Advanced",
      points: 30,
      text: tex`A spherical star cluster, which appears from Earth under a solid angle of $4.5 \times 10^{-5}$ sr, contains approximately $2 \times 10^{5}$ stars and has an apparent bolometric magnitude of $m_{bol} = 5.8$ mag. The spherical cluster is at rest, meaning the velocities of the stars are zero.`,
      parts: [
        {
          label: "(a)",
          points: 5,
          prompt: tex`Estimate the distance to the cluster as well as the mean angular separation between its stars. Ignore interstellar extinction. Also, compute the objective lens diameter of a telescope required to distinguish two stars of the cluster in the optical. State any assumptions you made.`,
          solution: tex`**Assume all the stars are Sun-like**, so the cluster's luminosity is $L = NL_\odot = 2\times10^5 L_\odot$. Pogson's law gives the cluster's absolute bolometric magnitude:

$$M_{bol} = M_\odot - 2.5\log\frac{L}{L_\odot} = 4.8 - 2.5\log(2\times10^{5}) \approx -8.45$$

The distance modulus (no extinction), $M_{bol} - m_{bol} = 5 - 5\log d$, gives

$$d \approx 7100\ \text{pc}$$

Each star takes up, on average, a solid angle

$$\Omega_\text{star} = \frac{\Omega}{N} = \frac{4.5\times10^{-5}}{2\times10^{5}}\ \text{sr} \approx 2.25 \times 10^{-10}\ \text{sr}$$

so the mean angular separation is roughly

$$\theta \approx \sqrt{2.25\times10^{-10}}\ \text{rad} = 1.5\times10^{-5}\ \text{rad} \approx 3''$$

With the Rayleigh criterion at $\lambda = 500\ \text{nm}$:

$$D = \frac{1.22\lambda}{\theta} = \frac{1.22 \times 500\times10^{-9}}{1.5\times10^{-5}}\ \text{m} \approx 0.04\ \text{m} = 4\ \text{cm}$$`,
          rubric: `Astro Coach marking guide (5 points):
- States the assumption of Sun-like stars and finds M_bol ≈ −8.4 to −8.5: 1 point.
- Distance from the distance modulus ≈ 7.1 kpc: 1 point.
- Solid angle per star and mean separation θ ≈ 1.5 × 10⁻⁵ rad ≈ 3″: 1 point.
- Uses the resolution criterion D = 1.22λ/θ with an optical wavelength: 1 point.
- D ≈ 4 cm: 1 point.`,
        },
        {
          label: "(b)",
          points: 6,
          prompt: tex`Suppose the cluster undergoes gravitational contraction, which stops when it reaches a state where the virial theorem holds. Find the new radius of the cluster as a function of its initial radius and compute its numerical value.`,
          solution: tex`First, the initial radius from the solid angle of a sphere seen from far away, $\Omega = \pi R_i^2/d^2$:

$$R_i = d\sqrt{\frac{\Omega}{\pi}} \approx 8.3\times10^{17}\ \text{m} \approx 26.9\ \text{pc}$$

The stars start at rest, so the initial energy is purely gravitational (for a uniform sphere):

$$E_i = U_i = -\frac{3}{5}\frac{GM^2}{R_i}$$

After contraction, $E_f = K_f + U_f$, and the virial theorem $2K_f + U_f = 0$ holds, so

$$E_f = \frac{U_f}{2} = -\frac{3}{10}\frac{GM^2}{R_f}$$

Energy is conserved, $E_i = E_f$, so

$$R_f = \frac{R_i}{2} = \frac{26.9\ \text{pc}}{2} \approx 13.5\ \text{pc}$$`,
          rubric: `Astro Coach marking guide (6 points):
- Initial radius from Ω = πR²/d², R_i ≈ 27 pc (8.3 × 10¹⁷ m): 1 point.
- Initial energy is only potential energy, E_i = −(3/5)GM²/R_i: 2 points.
- Virial theorem 2K + U = 0 gives E_f = U_f/2: 2 points.
- Energy conservation gives R_f = R_i/2 ≈ 13.5 pc: 1 point.`,
        },
        {
          label: "(c)",
          points: 7,
          prompt: tex`Calculate the mean time ($\tau$) between two successive stellar collisions as a function of the mean mass of a star in the cluster ($m$), their relative velocity ($v$), the numerical density of stars ($n$), and any other parameters you might need. Perform a numerical substitution to find the time $\tau$, after estimating $v$ and $n$.`,
          solution: tex`Two stars "collide" (interact strongly) when they are gravitationally bound during the encounter:

$$\frac{1}{2}mv^2 < \frac{Gm^2}{r} \quad\Longrightarrow\quad r < \frac{2Gm}{v^2}$$

The mean free path for this cross-section $\pi r^2$ is

$$\ell = \frac{1}{n\pi r^2} = \frac{v^4}{4\pi G^2 n m^2}$$

and the mean time between collisions is $\tau = \ell / v$:

$$\tau = \frac{v^3}{4\pi G^2 n m^2}$$

(A different but reasonable approach also earns credit, for example $\tau = \dfrac{v}{\pi G n m R_\text{star}}$, which uses the gravitationally focused cross-section of a star of radius $R_\text{star}$.)

**Estimates.** From the virial theorem in the contracted cluster:

$$2 \times \frac{1}{2}Mv^2 = \frac{3}{5}\frac{GM^2}{R_f} \quad\Longrightarrow\quad v = \sqrt{\frac{3GNm}{5R_f}} \approx 6\ \text{km/s}$$

$$n = \frac{N}{V} = \frac{3N}{4\pi R_f^3} \approx 20\ \text{pc}^{-3} \approx 7\times10^{-49}\ \text{m}^{-3}$$

With $m = M_\odot$:

$$\tau = \frac{(6.2\times10^{3})^3}{4\pi\,(6.67\times10^{-11})^2\,(6.7\times10^{-49})\,(1.99\times10^{30})^2} \approx 1.6\times10^{18}\ \text{s} \approx 5\times10^{10}\ \text{yr}$$

**Note:** the official solution states $\tau \approx 1.3$ Gyr, but substituting its own estimates of $v$ and $n$ into its formula gives about $5 \times 10^{10}$ years, which we use here. Because $\tau \propto v^3$, the result is very sensitive to the estimate of $v$, so any value consistent with a student's own estimates is accepted.`,
          rubric: `Astro Coach marking guide (7 points; the official solution accepts other reasonable approaches):
- Collision condition, e.g. bound encounter r < 2Gm/v² (or a gravitationally focused stellar cross-section): 2 points.
- Mean free path ℓ = 1/(nσ) and τ = ℓ/v: 2 points.
- Expression τ = v³/(4πG²nm²) (or an equivalent, such as v/(πGnmR_star)): 1 point.
- Estimates v ≈ 6 km/s from the virial theorem and n ≈ 20 pc⁻³ from the contracted radius (other reasonable estimates accepted): 1 point.
- Numerical τ consistent with the student's own formula and estimates (≈ 5 × 10¹⁰ yr with the values above; the official solution's 1.3 Gyr is also accepted): 1 point.`,
        },
        {
          label: "(d)",
          points: 6,
          leadIn: tex`We define $X, Y, Z$ as the mass fractions of a star (and consequently a cluster) consisting of hydrogen, helium, and metals (elements heavier than H and He in astrophysics), respectively. Specifically, $Z$ is called the metallicity, and it is given by the relation:

$$Z = \sum_{i > \text{He}} \frac{m_i}{m_{total}}.$$`,
          prompt: tex`First, relate $X, Y, Z$ and compute the mean molecular weight of the Sun. Given are the atomic and mass numbers of $^1H$, $^4He$, and metals and you may assume the mass number is approximately twice the atomic number for metals. For the Sun, we have $X_\odot = 0.739$, $Z_\odot = 0.012$.`,
          solution: tex`The three mass fractions add up to one, $X + Y + Z = 1$, so

$$Y_\odot = 1 - X_\odot - Z_\odot = 0.249$$

For fully ionised gas, each element contributes particles per unit mass of $(Z+1)/A$ (the nucleus plus its $Z$ electrons), so its mean molecular weight is $\mu = A/(Z+1)$:

$$\mu_H = \frac{1}{1+1} = \frac{1}{2}, \qquad \mu_{He} = \frac{4}{2+1} = \frac{4}{3}, \qquad \mu_m = \frac{A_m}{Z_m+1} \approx \frac{A_m}{Z_m} \approx 2$$

Adding up the particles from each component:

$$\mu = \frac{1}{2X + \frac{3}{4}Y + \frac{1}{2}Z}$$

and for the Sun:

$$\mu_\odot = \frac{1}{2(0.739) + \frac{3}{4}(0.249) + \frac{1}{2}(0.012)} \approx 0.598$$`,
          rubric: `Astro Coach marking guide (6 points):
- X + Y + Z = 1, so Y_Sun = 0.249: 1 point.
- Mean molecular weight per component for ionised gas: 1/2 (H), 4/3 (He), ≈ 2 (metals): 2 points.
- Combined formula μ = 1 / (2X + 3Y/4 + Z/2): 2 points.
- μ_Sun ≈ 0.60: 1 point.`,
        },
        {
          label: "(e)",
          points: 4,
          leadIn: tex`Of particular interest for determining the age of a cluster is the quantity:

$$\left[\frac{Fe}{H}\right] \equiv \log\left(\frac{(N_{Fe}/N_H)_\text{cluster}}{(N_{Fe}/N_H)_\odot}\right),$$

where the notation $N_{Fe}$, $N_H$ represents the number densities of iron (Fe) and hydrogen (H), respectively.`,
          prompt: tex`If the cluster has $[Fe/H] = -2.53$ dex, find the ratio $(N_{Fe}/N_H)_\text{cluster}$. What does the negative sign in $[Fe/H]$ indicate?`,
          solution: tex`From the definition,

$$\left(\frac{N_{Fe}}{N_H}\right)_\text{cluster} = 10^{-2.53}\left(\frac{N_{Fe}}{N_H}\right)_\odot \approx 3.0\times10^{-3}\left(\frac{N_{Fe}}{N_H}\right)_\odot$$

The Sun's iron-to-hydrogen number ratio is about $3 \times 10^{-5}$ (one iron atom per ~35,000 hydrogen atoms), so

$$\left(\frac{N_{Fe}}{N_H}\right)_\text{cluster} \approx 3.0\times10^{-3} \times 2.9\times10^{-5} \approx 8.6\times10^{-8}$$

**The negative sign means the cluster is metal-poor:** it has less iron relative to hydrogen than the Sun — here about 340 times less.

**Note:** the official solution's working estimates the solar ratio as $Z_\odot/X_\odot = 0.012/0.739 \approx 0.016$ (a mass ratio for all metals, not a number ratio for iron), which would give $\approx 4.8\times10^{-5}$ for the cluster, but its final answer, $8.6 \times 10^{-8}$, matches the real solar iron abundance used above. Any solar ratio that is stated and used consistently earns credit.`,
          rubric: `Astro Coach marking guide (4 points):
- (N_Fe/N_H)_cluster = 10^(−2.53) × (N_Fe/N_H)_Sun ≈ 3.0 × 10⁻³ times the solar ratio: 2 points.
- Numerical value using a stated solar ratio (≈ 8.6 × 10⁻⁸ with the real solar value ≈ 3 × 10⁻⁵; other consistently stated solar estimates accepted): 1 point.
- The negative sign means the cluster is metal-poor compared with the Sun: 1 point.`,
        },
        {
          label: "(f)",
          points: 2,
          prompt: tex`Give an estimate for the age of the cluster $t$. Compare it to the result in question (a) and to the age of the Universe. Comment on how much the given cluster serves as an indicator of the Universe's age. In which stellar population of the Milky Way do you think it belongs to? You may use the figure below.

[[figure:age-metallicity]]`,
          solution: tex`With $[Fe/H] = -2.53$, the figure places the cluster in the region of the **old halo globular clusters** (and the halo field stars), so it belongs to the **halo** (Population II). Its age is roughly **13 to 14 billion years**.

That is comparable to the accepted age of the Universe (13.8 billion years): these very old, metal-poor clusters formed shortly after the Universe itself, so their ages give a lower limit on — and a good estimate of — the age of the Universe.

Compared with the collision time from part (c) (the official solution makes this comparison, though the question says "(a)"): our estimate of $\tau \approx 5 \times 10^{10}$ yr is longer than the cluster's age, so stellar collisions have been rare over its lifetime. (The official solution, with its $\tau \approx 1.3$ Gyr, notes instead that the age is much larger than $\tau$.)`,
          rubric: `Astro Coach marking guide (2 points):
- Age ≈ 13–14 Gyr from the figure, compared with the age of the Universe (13.8 Gyr) and with τ from part (c): 1 point.
- Belongs to the halo (old halo globular clusters, Population II), and such clusters indicate (a lower limit on) the age of the Universe: 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      figures: [
        {
          key: "age-metallicity",
          file: "q6-age-metallicity.png",
          caption: "Age–metallicity relation of the Galaxy (OC = open clusters, GC = globular clusters).",
          part: "(f)",
          sourcePage: 6,
        },
      ],
      questionPages: [5, 6],
      solutionPages: [13, 14, 15, 16, 17],
    },

    // --- Problem 7: deflecting an asteroid -----------------------------------
    {
      number: "7",
      title: "Planetary Defense",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Advanced",
      points: 55,
      text: tex`Oh no! Asteroid B612 is on a collision course with the Earth. Its relevant orbital and physical parameters are as follows:

$$\begin{array}{lc}
\text{Parameter} & \text{Value} \\
\hline
\text{Semi-major axis } a & 2.00\ \text{AU} \\
\text{Eccentricity } e & 0.50 \\
\text{Inclination } i & 10.0^\circ \\
\text{Argument of perihelion } \omega & 0^\circ \\
\text{Mass } m & 6.40 \times 10^{8}\ \text{kg}
\end{array}$$

[[figure:orbit]]

The orbit is shown in the diagram (not to scale). B612's orbit crosses Earth's orbit at B612's perihelion. B612 is currently at its aphelion, and is on a course to impact Earth at B612's next perihelion, half an orbit from now. Specifically, its trajectory puts it on a course to precisely intersect the center of the Earth (if it could pass through the surface).

Assume for all parts that Earth is on a circular orbit with zero inclination.`,
      parts: [
        {
          label: "(a)",
          points: 10,
          prompt: tex`The effect of Earth's gravity can make this problem tricky. But there is a useful simplification that you can make.

[[figure:impact]]

Consider an asteroid that is approaching Earth at relative velocity $v$. If unperturbed by Earth's gravity, it would pass a distance $b$ from the Earth's center ($b$ is known as the impact parameter). In the presence of Earth's gravity, this trajectory might be deflected so that the asteroid impacts Earth, even if $b$ is larger than $R_\oplus$ (see diagram.) The largest $b$ such that the asteroid impacts Earth is called $R_\text{eff}$, the effective collision radius.

Find an expression for $R_\text{eff}$. What are $v$ and $R_\text{eff}$ for B612's approach?`,
          solution: tex`Use conservation of angular momentum and energy. If $b = R_\text{eff}$, the deflected asteroid just skims the Earth's surface, at distance $R_\oplus$, with speed $v_s$.

Angular momentum (per unit mass) far away is $vR_\text{eff}$, so

$$v_s R_\oplus = vR_\text{eff}$$

Far away the potential energy is (asymptotically) zero, so energy conservation gives

$$\frac{1}{2}mv_s^2 - \frac{GmM_\oplus}{R_\oplus} = \frac{1}{2}mv^2$$

Eliminating $v_s$:

$$R_\text{eff} = R_\oplus\sqrt{1 + \frac{2GM_\oplus}{R_\oplus v^2}}$$

$R_\text{eff}$ is always at least $R_\oplus$, and larger for slower asteroids, which are deflected more strongly.

**For B612:** in the Sun's frame, its speed at perihelion (1 AU) is

$$v_p = \sqrt{GM_\odot\left(\frac{2}{1\ \text{AU}} - \frac{1}{2\ \text{AU}}\right)} \approx 36.5\ \text{km/s}$$

angled $10^\circ$ to the Earth's velocity, $v_\oplus = \sqrt{GM_\odot / 1\ \text{AU}} \approx 29.8\ \text{km/s}$. Subtracting the two vectors:

$$v = |\vec v_p - \vec v_\oplus| = \sqrt{v_p^2 + v_\oplus^2 - 2v_pv_\oplus\cos 10^\circ} \approx 8.8\ \text{km/s}$$

and so

$$R_\text{eff} \approx 1.61\,R_\oplus \approx 1.03\times10^{4}\ \text{km}$$`,
          rubric: `Astro Coach marking guide (10 points):
- Uses conservation of angular momentum (v_s R_E = v R_eff) and energy for a grazing trajectory: 3 points.
- R_eff = R_E √(1 + 2GM_E / (R_E v²)): 2 points.
- Perihelion speed ≈ 36.5 km/s and Earth's orbital speed ≈ 29.8 km/s: 2 points.
- Relative speed from the vector difference with the 10° angle, v ≈ 8.8 km/s: 2 points.
- R_eff ≈ 1.6 R_E ≈ 1.03 × 10⁴ km: 1 point.`,
        },
        {
          label: "(b)",
          points: 5,
          leadIn: tex`Once we have calculated $R_\text{eff}$, we can ignore Earth's gravity for the remaining parts by just assuming there will be an impact if $b < R_\text{eff}$.`,
          prompt: tex`If B612 were to hit Earth, what would be the kinetic energy of the collision? For comparison, a typical nuclear explosion has an energy of around $10^{15}$ to $10^{16}$ J.`,
          solution: tex`The impact speed is not the $v$ from part (a) but $v_s$, because B612 speeds up as it falls into Earth's gravity well. From part (a):

$$E = \frac{1}{2}mv_s^2 = \frac{1}{2}mv^2 + \frac{GmM_\oplus}{R_\oplus}$$

With $v = 8.8\ \text{km/s}$ and $m = 6.4\times10^{8}\ \text{kg}$:

$$E \approx 6.5 \times 10^{16}\ \text{J}$$

That is comparable to a large nuclear bomb. This asteroid is not large enough to destroy human civilisation, but it would be a major threat if it hit a populated area.`,
          rubric: `Astro Coach marking guide (5 points):
- Recognises that the impact speed includes the energy gained falling into Earth's gravity well: 2 points.
- E = ½mv² + GmM_E/R_E: 1 point.
- E ≈ 6.5 × 10¹⁶ J: 2 points.`,
        },
        {
          label: "(c)",
          points: 10,
          leadIn: tex`Thankfully, a spacecraft similar to the 2022 Double Asteroid Redirection Test (DART) mission has just arrived at B612 to impact it at high speed and deflect its trajectory away from Earth. For the rest of this problem, we will determine whether this mission can succeed.`,
          prompt: tex`The kinetic deflector is similar to DART, with a moderate upgrade to mass and speed. It has a mass of 2000 kg and will impact B612 with a relative velocity of 10 km/s. DART observed a momentum transfer of about $4\times$ what would be expected from a fully inelastic collision, due to recoil from ejecta produced by the collision. Assume this collision will have the same $4\times$ enhancement.

How much of a change in velocity ($\Delta v$) can we expect to impart with this kinetic deflector?`,
          solution: tex`In a fully inelastic collision the two bodies stick together and momentum is conserved:

$$m_1v_1 + m_2v_2 = (m_1 + m_2)v_f$$

Take $m_1$ as the spacecraft and $m_2$ as B612 ($m_2 \gg m_1$). In B612's frame $v_2 = 0$, so

$$v_f \approx \frac{m_1v_1}{m_2} = \frac{2000 \times 10^{4}}{6.4\times10^{8}}\ \text{m/s} \approx 3.1\ \text{cm/s}$$

With the momentum transfer 4 times larger:

$$\Delta v \approx 12.5\ \text{cm/s}$$`,
          rubric: `Astro Coach marking guide (10 points):
- Momentum conservation for a fully inelastic collision in B612's frame: 4 points.
- Inelastic Δv ≈ 3.1 cm/s: 3 points.
- With the 4× enhancement, Δv ≈ 12.5 cm/s: 3 points.`,
        },
        {
          label: "(d)",
          points: 5,
          prompt: tex`Make the (completely unrealistic) assumption that the kinetic deflector can hit B612 in any direction, and the achievable impact velocity is independent of the direction. What direction(s) would be most effective for deflecting B612 away from the Earth? Justify your reasoning, though you don't need to prove it rigorously.`,
          solution: tex`The most effective kick is **along (or against) B612's direction of motion around the Sun**.

Think about the change to B612's orbital energy: a kick along the velocity changes the kinetic energy (by $mv\,\Delta v$) far more than a perpendicular kick (which changes it only by $\tfrac{1}{2}m\,\Delta v^2$). Changing the energy changes the semi-major axis and the period — which moves both the perihelion distance and the time B612 arrives there. A perpendicular kick does not change the orbital angular momentum's size to first order, and small kicks along the other two axes do not change the position or timing of perihelion to first order — and one or both of these must change to make B612 miss the Earth.

In fact this is general: unless an asteroid is on its final approach, a kick along the direction of motion is usually the most efficient way to deflect it.`,
          rubric: `Astro Coach marking guide (5 points):
- Along or against the direction of B612's orbital motion: 3 points.
- Justification: this changes the orbital energy (and so the period, perihelion distance and arrival time) the most; perpendicular kicks barely change the perihelion position or timing to first order: 2 points.`,
        },
        {
          label: "(e)",
          points: 5,
          leadIn: tex`Given everything you found in parts (a) through (d), we will now determine whether it is possible to deflect B612 so that it misses Earth.

Denote the point in the heliocentric reference frame where B612's and Earth's orbits intersect as point $P$, and the time of the collision at $t$ (when B612 and Earth are both at point $P$). It is highly recommended that you draw a picture for the remaining parts.`,
          prompt: tex`Before the deflection (which occurs at B612's aphelion), the perihelion of B612's orbit is at point $P$. After the deflection, the new perihelion is at point $P'$. What is the distance between $P'$ and $P$? Is this distance on its own enough for B612 to miss the Earth?

**Hint:** We are doing small perturbations, so make use of first-order Taylor expansions!`,
          solution: tex`With perihelion and aphelion distances $r_p$ and $r_a$, $a = (r_p + r_a)/2$. The kick happens at aphelion, so it cannot change $r_a$: treat $r_a = 3\ \text{AU}$ as constant.

The vis-viva equation at aphelion:

$$v_a^2 = GM_\odot\left(\frac{2}{r_a} - \frac{1}{a}\right) = GM_\odot\left(\frac{2}{r_a} - \frac{2}{r_p + r_a}\right) \quad\Longrightarrow\quad v_a \approx 12.2\ \text{km/s}$$

Solving for $r_p$ and differentiating:

$$r_p = \frac{r_a^2v_a^2}{2GM_\odot - r_av_a^2}, \qquad \frac{dr_p}{dv_a} = \frac{4GM_\odot r_a^2v_a}{(2GM_\odot - r_av_a^2)^2} = \frac{8}{9}\frac{r_a}{v_a}$$

A first-order expansion with $\Delta v_a = 12.5\ \text{cm/s}$ from part (c):

$$\Delta r_p \approx \frac{dr_p}{dv_a}\Delta v_a \approx 4.10\times10^{3}\ \text{km} \approx 0.40\,R_\text{eff}$$

This is **not far enough** on its own: it is less than $R_\text{eff}$.`,
          rubric: `Astro Coach marking guide (5 points):
- Aphelion distance fixed at 3 AU; vis-viva at aphelion: 1 point.
- v_a ≈ 12.2 km/s: 1 point.
- dr_p/dv_a = 8r_a/(9v_a) (or an equivalent first-order relation): 2 points.
- Δr_p ≈ 4.1 × 10³ km ≈ 0.40 R_eff, so not enough on its own: 1 point.`,
        },
        {
          label: "(f)",
          points: 5,
          prompt: tex`After the deflection, B612 reaches point $P'$ at time $t'$. What is $|t' - t|$?

Knowing that Earth still reaches point $P$ at time $t$, how far is Earth from point $P$ at time $t'$?`,
          solution: tex`All hope is not lost: the deflection also changes when B612 reaches the orbit crossing. If B612's period changes by $\Delta T$, the time of its next perihelion (half an orbit away) changes by $\Delta T/2$.

Kepler's third law, $T = 2\pi\sqrt{a^3/(GM_\odot)}$, gives $T = 2.83$ years for B612 and

$$\frac{dT}{da} = \frac{3T}{2a}, \qquad \frac{dT}{dr_p} = \frac{dT}{da}\frac{da}{dr_p} = \frac{3T}{4a}$$

(since $a = (r_p + r_a)/2$ with $r_a$ fixed). To first order:

$$\Delta T \approx \frac{dT}{dr_p}\Delta r_p \approx 15.3\ \text{min} \quad\Longrightarrow\quad |t' - t| = \frac{\Delta T}{2} \approx 7.6\ \text{min}$$

In 7.6 minutes, the Earth travels

$$d_\oplus = 2\pi\ \text{AU} \times \frac{7.6\ \text{min}}{1\ \text{year}} \approx 1.37\times10^{4}\ \text{km}$$

along its orbit, so at time $t'$ the Earth is about $1.37 \times 10^4$ km from point $P$.`,
          rubric: `Astro Coach marking guide (5 points):
- Change in period from Kepler's third law (dT/da = 3T/(2a), chain rule with Δr_p), ΔT ≈ 15 min: 2 points.
- |t′ − t| = ΔT/2 ≈ 7.6 min: 2 points.
- Earth's distance from P ≈ 1.37 × 10⁴ km: 1 point.`,
        },
        {
          label: "(g)",
          points: 5,
          prompt: tex`Shift to a reference frame where Earth is at rest as B612 passes by. As seen in this reference frame, what is the angle between B612's trajectory and the ecliptic plane as B612 is approaching Earth? **Hint:** It's not $10^\circ$.`,
          solution: tex`In Earth's frame, B612 moves along its relative velocity vector from part (a). The law of sines in the velocity triangle gives the angle $\theta$ between this relative velocity and the Earth's orbit:

$$\sin\theta = \sin(10^\circ)\,\frac{36.5\ \text{km/s}}{8.8\ \text{km/s}} \quad\Longrightarrow\quad \theta \approx 46^\circ$$

This is much larger than the $10^\circ$ inclination because the Earth's motion cancels most of B612's velocity along the direction of Earth's orbit, leaving the out-of-plane part relatively large.`,
          rubric: `Astro Coach marking guide (5 points):
- Uses the relative velocity vector from part (a) (Earth's frame): 2 points.
- Law of sines or components of the relative velocity: 2 points.
- θ ≈ 46°: 1 point.`,
        },
        {
          label: "(h)",
          points: 10,
          prompt: tex`After the deflection, what is the minimum approach distance $d$ of B612 to Earth?

Hints:

- The closest approach does not occur at time $t'$.
- Keep using the reference frame from part (g). It makes this part much easier as well.
- You will need all the results you got in parts (e) through (g).

How does this compare to $R_\text{eff}$? Is the deflection successful?`,
          solution: tex`In Earth's frame, the timing shift moves B612's straight-line trajectory a distance $d_\oplus$ away from the Earth along the direction of Earth's orbit. The closest approach happens when the line from B612 to Earth is perpendicular to the trajectory, so the separation due to timing alone is

$$d_\perp = d_\oplus\sin\theta \approx 1.37\times10^{4}\ \text{km} \times \sin 46^\circ \approx 9.86\times10^{3}\ \text{km} \approx 0.96\,R_\text{eff}$$

— still not quite enough. But from part (e), the orbit was also shifted radially by $\Delta r_p$, perpendicular to both of these directions. The true minimum distance (the impact parameter) is the hypotenuse:

$$b = \sqrt{d_\perp^2 + (\Delta r_p)^2} \approx 1.06\times10^{4}\ \text{km} \approx 1.03\,R_\text{eff}$$

This is just barely larger than $R_\text{eff}$, so B612 misses the Earth — **the deflection is successful!**

[[figure:geometry]]

As a final note, deflecting an asteroid at perihelion is much more efficient than at aphelion (the Oberth effect), but in real life we might not detect an asteroid early enough to have that chance.`,
          rubric: `Astro Coach marking guide (10 points):
- In Earth's frame, the timing shift displaces the trajectory by d_E along Earth's orbit: 3 points.
- Perpendicular miss distance d_⊥ = d_E sin θ ≈ 9.9 × 10³ km (≈ 0.96 R_eff): 3 points.
- Combines with the radial shift Δr_p in quadrature, b = √(d_⊥² + Δr_p²): 3 points.
- b ≈ 1.06 × 10⁴ km ≈ 1.03 R_eff > R_eff, so the deflection (just) succeeds: 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      figures: [
        {
          key: "orbit",
          file: "q7-orbit.png",
          caption: "B612's orbit and Earth's orbit (not to scale).",
          sourcePage: 7,
        },
        {
          key: "impact",
          file: "q7-impact-parameter.png",
          caption: "An asteroid with impact parameter b is deflected by Earth's gravity onto a hyperbolic orbit.",
          part: "(a)",
          sourcePage: 7,
        },
        {
          key: "geometry",
          file: "q7-solution-geometry.png",
          caption: "Geometry of the closest approach in Earth's frame (not to scale).",
          kind: "SOLUTION",
          part: "(h)",
          sourcePage: 23,
        },
      ],
      questionPages: [7, 8],
      solutionPages: [19, 20, 21, 22, 23],
    },
  ],
};
