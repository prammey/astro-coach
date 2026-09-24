// USAAAO National Astronomy Competition 2020 (Version 1): 12 free-response
// questions in three sections — Short (S1–S5), Medium (M1–M5) and Long
// (L1–L2). USAAAO released two versions of this exam; only Version 1 is
// imported so the bank has no near-duplicates.
//
// The paper prints a point total for each question but never splits it
// between sub-parts, so every question is graded as a whole (no FrqParts):
// the (a), (b), ... sub-questions stay inline in the text, and each rubric
// is an Astro Coach marking guide that divides the total sensibly.
//
// Solutions are the official ones, re-typeset and lightly clarified
// (ADAPTED). Every official number was re-derived; two official slips are
// corrected and explained in the solution text:
//   - S1: the official answer lists only the June quadrature, but the same
//     model also puts one in late December 2020.
//   - M5: the official table gives m = 2.26 for kappa Velorum (should be
//     2.86 - 0.20 = 2.66) and uses a Wien constant of about 3.0e-3 m K.
//
// Maths-heavy strings use String.raw so LaTeX backslashes are written once.
import type { FrqSeedExam } from "./types";

// Section names exactly as the paper prints them.
const SHORT = "Short Questions";
const MEDIUM = "Medium Questions";
const LONG = "Long Questions";

export const usaaao2020Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: 2020,
  examName: "National Astronomy Competition",
  slug: "usaaao-2020-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2020/04/usaaao_second_exam_2020_apr3.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2020/04/usaaao_second_exam_2020_apr3sol.pdf",
  attributionText:
    "Source: USA Astronomy and Astrophysics Organization (USAAAO), National Astronomy Competition 2020. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.",
  questions: [
    // =======================================================================
    // Short Questions
    // =======================================================================

    // --- S1: Mars quadrature ------------------------------------------------
    {
      number: "S1",
      title: "Mars at Quadrature",
      section: SHORT,
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`The sidereal period of Mars is 687 days, while the sidereal period of Earth is 365.26 days. The most recent opposition of Mars occurred on July 27, 2018. Predict all dates in the year 2020 when Mars will be in quadrature. You may use the fact that the orbital radius of Mars is 1.52 AU and that Earth and Mars have circular orbits. Why might your answer be inaccurate?`,
      solution: String.raw`**Synodic period.** Oppositions repeat every synodic period:

$$\frac{1}{P_{\text{syn}}} = \frac{1}{P_{\text{Earth}}} - \frac{1}{P_{\text{Mars}}} = \frac{1}{365.26} - \frac{1}{687} \quad\Longrightarrow\quad P_{\text{syn}} \approx 779.9\ \text{days}$$

So the next opposition is about 779.9 days after July 27, 2018, around **September 13–15, 2020**.

**Angle at quadrature.** At quadrature the Sun–Earth–Mars angle is $90^\circ$, so the Sun, Earth and Mars form a right triangle with the right angle at Earth. The angle $\theta$ at the Sun between Earth and Mars satisfies

$$\cos\theta = \frac{1\ \text{AU}}{1.52\ \text{AU}} \quad\Longrightarrow\quad \theta \approx 48.9^\circ$$

Earth gains on Mars by $360^\circ$ every synodic period, so it takes

$$779.9\ \text{days} \times \frac{48.9^\circ}{360^\circ} \approx 106\ \text{days}$$

to go from quadrature to opposition (and the same from opposition to the next quadrature).

**Dates in 2020.**
- 106 days **before** the September opposition: around **June 1, 2020** (western quadrature, Mars in the morning sky). The official solution gives about June 2 and accepts answers within two days.
- 106 days **after** it: around **December 28, 2020** (eastern quadrature, Mars in the evening sky).

*Note:* the official solution says the June date is the only one in 2020, but the same model also places the eastern quadrature in late December 2020, so both dates answer "all dates in 2020".

**Why the prediction is inaccurate.** The orbits are not really circular: Mars's eccentricity (about 0.09) makes its speed and distance vary, so equal angles are not covered in equal times, and the orbits are slightly inclined to each other. In reality the 2020 opposition was on October 13, and the June quadrature fell nearer June 7.`,
      rubric: String.raw`Astro Coach marking guide (5 points):
- Synodic period about 780 days from 1/P_syn = 1/P_E − 1/P_M: 1 point.
- Next opposition predicted around mid-September 2020 (Sept 12–16): 1 point.
- Quadrature geometry: cos θ = 1/1.52 (θ ≈ 48.9°), converted to about 106 days from opposition: 1 point.
- Quadrature date around June 1–2, 2020 (accept May 30 – June 4). A second date around December 28, 2020 (accept Dec 26–31) is also correct and must not be penalised; it is not required for full credit: 1 point.
- A valid reason for inaccuracy (eccentric orbits and/or orbital inclination): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- S2: Betelgeuse dimming ---------------------------------------------
    {
      number: "S2",
      title: "Betelgeuse Dimming",
      section: SHORT,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 10,
      text: String.raw`The star Betelgeuse has recently made news for its abnormal dimming. Although the dimming has now been attributed to dust, we consider in this problem that it was due to radial pulsations. Suppose that Betelgeuse's mass is 11 solar masses and its radius is 887 solar radii. Furthermore, Betelgeuse is currently rotating such that the tangential velocity of a point on its equator is 5000 m/s (assume Betelgeuse is perfectly spherical). The dimming has increased Betelgeuse's apparent magnitude by 1.05. You may neglect the contribution of pulsation to the surface velocity.

**(a)** Assuming contraction and expansion are isothermal, find the (new) radius of the star (in solar radii) needed to account for the dimming.

**(b)** Assuming no mass loss, find the new angular rotation velocity of the star.`,
      solution: String.raw`**(a)** An increase of 1.05 in apparent magnitude means the brightness dropped by a factor

$$\frac{L_f}{L_i} = 100^{-1.05/5} = 10^{-0.42} \approx 0.38$$

The distance does not change, so this is also the ratio of final to initial luminosity. With the temperature fixed (isothermal), the Stefan–Boltzmann law $L = 4\pi R^2 \sigma T^4$ gives $L \propto R^2$:

$$\frac{L_f}{L_i} = \frac{R_f^2}{R_i^2} \quad\Longrightarrow\quad R_f = 887\,R_\odot \times \sqrt{0.38} \approx 547\,R_\odot$$

**(b)** The initial angular velocity is

$$\omega_i = \frac{v}{R_i} = \frac{5000\ \text{m/s}}{887 \times 6.96\times10^{8}\ \text{m}} \approx 8.10\times10^{-9}\ \text{rad/s}$$

With no mass loss and no external torque, angular momentum $I\omega$ is conserved. For a uniform sphere $I = \tfrac{2}{5}MR^2$, so $I_i \approx 3.34\times10^{54}\ \text{kg m}^2$ and $I_f \approx 1.27\times10^{54}\ \text{kg m}^2$. Since $I \propto R^2$,

$$\omega_f = \omega_i\,\frac{I_i}{I_f} = \omega_i\left(\frac{R_i}{R_f}\right)^2 = \frac{8.10\times10^{-9}}{0.38} \approx 2.13\times10^{-8}\ \text{rad/s}$$`,
      rubric: String.raw`Astro Coach marking guide (10 points):
- (a) Brightness/luminosity ratio 100^(−1.05/5) ≈ 0.38: 1 point.
- (a) Uses L ∝ R² at constant temperature (Stefan–Boltzmann): 2 points.
- (a) New radius about 547 solar radii (accept 540–555): 2 points.
- (b) Initial angular velocity ω = v/R ≈ 8.1 × 10⁻⁹ rad/s: 1 point.
- (b) Conservation of angular momentum with I ∝ MR² (any constant factor, it cancels): 2 points.
- (b) New angular velocity about 2.13 × 10⁻⁸ rad/s (accept 2.0–2.2 × 10⁻⁸): 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- S3: Lyman-break galaxies -------------------------------------------
    {
      number: "S3",
      title: "Lyman-Break Galaxies",
      section: SHORT,
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Light & Spectra"],
      difficulty: "Intermediate",
      points: 10,
      text: String.raw`The Lyman-break galaxy selection technique makes use of the fact that any light from galaxies with wavelength shorter than the Lyman limit (the shortest wavelength in the Lyman series) is essentially totally absorbed by neutral gas surrounding the galaxies. The ionization energy of hydrogen is 13.6 eV. Suppose that we are observing galaxies in the V band, whose effective midpoint is 551 nm and bandwidth is 99 nm.

**(a)** At what range of redshifts would we begin to see galaxies "disappear" (break) from images in the V band?

**(b)** What range of recessional velocities (km/s) and distances (Mpc) does this correspond to? Assume only Hubble expansion contributes to the radial velocity and redshift.`,
      solution: String.raw`**(a)** The Lyman limit is the $n = \infty \to 1$ transition, whose energy is the ionization energy:

$$E = \frac{hc}{\lambda_L} = 13.6\ \text{eV}\left(\frac{1}{1^2} - \frac{1}{\infty^2}\right) \quad\Longrightarrow\quad \lambda_L = \frac{1240\ \text{eV nm}}{13.6\ \text{eV}} \approx 91.2\ \text{nm}$$

The V band runs from $551 - 49.5 = 501.5\ \text{nm}$ to $551 + 49.5 = 600.5\ \text{nm}$. A galaxy starts to drop out when its redshifted Lyman limit enters the band and has fully dropped out when it passes the red edge. Using $1 + z = \lambda_{\text{obs}}/\lambda_L$:

$$z_{\min} = \frac{501.5}{91.2} - 1 \approx 4.50, \qquad z_{\max} = \frac{600.5}{91.2} - 1 \approx 5.58$$

**(b)** These redshifts are far too large for $v = cz$ (it would exceed the speed of light), so use the relativistic Doppler formula:

$$v = \frac{(1+z)^2 - 1}{(1+z)^2 + 1}\,c$$

This gives $v \approx 281{,}000$ to $286{,}000\ \text{km/s}$. Hubble's law $d = v/H_0$ with $H_0 \approx 70\ \text{km/s/Mpc}$ then gives distances of about **4010 to 4090 Mpc**.

(At such high redshift the expansion of space is not really a Doppler shift, so this is only a rough model — but it is the one the problem asks for.)`,
      rubric: String.raw`Astro Coach marking guide (10 points):
- (a) Lyman limit λ_L ≈ 91.2 nm from 13.6 eV: 2 points.
- (a) V-band edges 501.5 nm and 600.5 nm: 1 point.
- (a) Redshift range z ≈ 4.50 to 5.58 (accept ±0.03): 2 points.
- (b) Uses the relativistic Doppler formula (not v = cz): 1 point.
- (b) Velocity range about 281,000–286,000 km/s: 2 points.
- (b) Distance range via Hubble's law, about 4000–4100 Mpc for H₀ ≈ 70 km/s/Mpc (accept consistent values for another stated H₀): 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2, 3],
    },

    // --- S4: TRAPPIST-1d radial velocity ------------------------------------
    {
      number: "S4",
      title: "TRAPPIST-1d Radial Velocity",
      section: SHORT,
      topic: "Exoplanets & Life",
      topics: ["Exoplanets & Life", "Gravity & Orbits"],
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`TRAPPIST-1d is a temperate exoplanet that orbits the ultra-cool M dwarf star TRAPPIST-1 with a semi-major axis of 0.022 AU. TRAPPIST-1 has a mass of 0.089 Solar masses and an effective temperature of 2511 K. Through transit timing variations induced by other planets in the TRAPPIST-1 system, TRAPPIST-1d is estimated to have a mass of 0.297 Earth masses. Assuming that TRAPPIST-1d has a circular orbit (which is a good approximation because the measured eccentricity is only 0.008), what is the radial velocity semi-amplitude of TRAPPIST-1 due to the orbital motion of TRAPPIST-1d, in m/s?`,
      solution: String.raw`Star and planet orbit their common centre of mass, so their momenta balance: $M_\star V_\star = M_p V_p$, i.e. $V_\star = M_p V_p / M_\star$.

**Orbital period** from Kepler's third law (years, AU, solar masses):

$$T = \sqrt{\frac{a^3}{M_\star}} = \sqrt{\frac{0.022^3}{0.089}}\ \text{yr} \times 365.25\ \tfrac{\text{days}}{\text{yr}} \approx 4.00\ \text{days}$$

**Planet's orbital speed:**

$$V_p = \frac{2\pi a}{T} = \frac{2\pi \times 0.022 \times 1.496\times10^{11}\ \text{m}}{4.00 \times 86400\ \text{s}} \approx 59.8\ \text{km/s}$$

**Star's speed:**

$$V_\star = \frac{0.297 \times 5.97\times10^{24}\ \text{kg} \times 59.8\times10^{3}\ \text{m/s}}{0.089 \times 1.99\times10^{30}\ \text{kg}} \approx 0.60\ \text{m/s}$$

The radial velocity semi-amplitude is about **0.6 m/s** (the official solution gives 0.597 m/s). The orbit is seen nearly edge-on because the planet transits, so no $\sin i$ correction is needed.`,
      rubric: String.raw`Astro Coach marking guide (5 points):
- Orbital period about 4.0 days from Kepler's third law: 1 point.
- Planet's orbital speed about 59.8 km/s: 1 point.
- Momentum (centre-of-mass) balance M★V★ = M_pV_p: 2 points.
- Semi-amplitude about 0.60 m/s (accept 0.58–0.62): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [3],
    },

    // --- S5: HD 209458b central pressure ------------------------------------
    {
      number: "S5",
      title: "Inside a Hot Jupiter",
      section: SHORT,
      topic: "Exoplanets & Life",
      topics: ["Exoplanets & Life", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`HD 209458b is a hot Jupiter exoplanet with a mass of 0.69 Jupiter masses. However, HD 209458b has an anomalous radius of 1.38 Jupiter radii that is inflated relative to Jupiter. Jupiter has an interior that is comprised of metallic hydrogen at pressures greater than 1 Mbar. Estimate the pressure, in Mbar, at the center of HD 209458b, and determine whether or not the interior of HD 209458b will also be comprised of metallic hydrogen.`,
      solution: String.raw`**Estimate.** Hydrostatic equilibrium says the central pressure is roughly the weight of a column of material per unit area: $P_c \sim \rho g R$. With $\rho = \dfrac{3M}{4\pi R^3}$ and $g = \dfrac{GM}{R^2}$,

$$P_c \sim \frac{3GM^2}{4\pi R^4}$$

(Integrating hydrostatic equilibrium for a uniform-density sphere gives exactly half of this, $P_c = \dfrac{3GM^2}{8\pi R^4}$.)

**Numbers.** $M = 0.69 \times 1.898\times10^{27}\ \text{kg}$ and $R = 1.38 \times 6.991\times10^{7}\ \text{m}$:

$$P_c = \frac{3 \times 6.67\times10^{-11} \times (0.69 \times 1.898\times10^{27})^2}{8\pi\,(1.38 \times 6.991\times10^{7})^4} \approx 1.6\times10^{11}\ \text{Pa} \approx 1.6\ \text{Mbar}$$

(using $1\ \text{Mbar} = 10^{11}\ \text{Pa}$). The rough estimate without the factor of $\tfrac12$ gives about 3.2 Mbar; any answer from 1 to 5 Mbar is a good estimate.

**Conclusion.** The central pressure is above 1 Mbar, so **yes** — the interior of HD 209458b should also contain metallic hydrogen.`,
      rubric: String.raw`Astro Coach marking guide (5 points; the official solution accepts 1–5 Mbar):
- Sets up a hydrostatic estimate P ~ ρgR, giving P ~ GM²/R⁴ up to a numerical factor: 2 points.
- Numerical central pressure between 1 and 5 Mbar: 2 points.
- Correct conclusion (yes, metallic hydrogen) consistent with the estimate: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [3],
    },

    // =======================================================================
    // Medium Questions
    // =======================================================================

    // --- M1: Telescope and a binary -----------------------------------------
    {
      number: "M1",
      title: "Resolving a Binary",
      section: MEDIUM,
      topic: "Telescopes & Observing",
      topics: ["Telescopes & Observing", "Gravity & Orbits"],
      difficulty: "Intermediate",
      points: 15,
      text: String.raw`An astronomer used his f/5 telescope with a diameter of 130 mm to observe a binary system. He is using an eyepiece with a field of view of $45^\circ$ and a focal length of 25 mm. In this system, star A has a mass of 18.9 solar masses, and an apparent magnitude in the V filter of 9.14. Star B has a mass of 16.2 solar masses, and an apparent magnitude in the V filter of 9.60. The period of the system is 108 days, and the distance between the binary stars and the Solar System is 2.29 kpc. The binary system has an edge-on orbit relative to the Solar System.

**(a)** What is the field of view of the telescope?

**(b)** What is the limiting magnitude of the telescope?

**(c)** What is the angular resolution of the telescope?

**(d)** What is the angular separation between the stars?

**(e)** Is the astronomer able to observe both stars as distinct points in the telescope? Answer as YES or NO.

The limiting magnitude for the human eye is 6.0, and the diameter of the pupil is equal to 7.0 mm. Also consider that visible light has a wavelength of 550 nm.`,
      solution: String.raw`**(a)** The telescope's focal length is $5 \times 130\ \text{mm} = 650\ \text{mm}$, so the magnification is $650/25 = 26$. The true field of view is the eyepiece's apparent field divided by the magnification:

$$\text{FOV}_{\text{telescope}} = \frac{\text{FOV}_{\text{eyepiece}}}{f_{\text{telescope}}/f_{\text{eyepiece}}} = \frac{45^\circ}{26} \approx 1.7^\circ$$

**(b)** Light gathered scales with aperture area, so compared with the eye:

$$m_{\text{tel}} - m_{\text{eye}} = 2.5\log\frac{D_{\text{tel}}^2}{D_{\text{eye}}^2} \quad\Longrightarrow\quad m_{\text{tel}} = 6.0 + 5\log\frac{130}{7} \approx 12.3$$

Both stars (9.14 and 9.60) are brighter than this, so both can be detected.

**(c)** The diffraction limit is

$$\theta = \frac{1.22\lambda}{D} = \frac{1.22 \times 550\times10^{-9}\ \text{m}}{130\times10^{-3}\ \text{m}} \approx 5.16\times10^{-6}\ \text{rad} \approx 1.06''$$

**(d)** Kepler's third law in years, AU and solar masses, $T^2/a^3 = 1/(M_A + M_B)$:

$$a^3 = (18.9 + 16.2)\left(\frac{108}{365.25}\right)^2 \quad\Longrightarrow\quad a \approx 1.45\ \text{AU}$$

For an edge-on orbit the largest separation seen is about $a$, so

$$\alpha = \frac{a}{d} = \frac{1.45\ \text{AU}}{2.29\times10^{3} \times 206265\ \text{AU}} \approx 3.08\times10^{-9}\ \text{rad}$$

**(e)** The separation ($3.1\times10^{-9}$ rad) is about 1700 times smaller than the resolution ($5.2\times10^{-6}$ rad), so the stars appear as a single point: **NO**.`,
      rubric: String.raw`Astro Coach marking guide (15 points):
- (a) Magnification 26 from focal lengths and field of view about 1.7°: 3 points.
- (b) Limiting magnitude from the aperture ratio, about 12.3: 3 points.
- (c) Rayleigh criterion 1.22λ/D ≈ 5.2 × 10⁻⁶ rad (≈ 1.06″): 3 points.
- (d) Kepler's third law giving a ≈ 1.45 AU: 2 points; angular separation ≈ 3.1 × 10⁻⁹ rad: 2 points.
- (e) NO, justified by comparing separation with resolution: 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [2, 3],
      solutionPages: [3, 4, 5],
    },

    // --- M2: Galaxy rotation curve ------------------------------------------
    {
      number: "M2",
      title: "An Exponential Rotation Curve",
      section: MEDIUM,
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Gravity & Orbits"],
      difficulty: "Advanced",
      points: 20,
      text: String.raw`The rotation curve of a particular spiral galaxy is modeled by an exponential function of the form $V(r) = V_0\left(1 - e^{-r/R}\right)$, where $V_0 = 250$ km/s, $R = 7.5$ kpc, and $r$ is measured radially from the center of the galaxy. Throughout parts (a)–(d), you may assume the galaxy is disk-shaped. Further, we'll assume that the distribution of mass in the galaxy depends only on the radial coordinate $r$ (and is thus radially symmetric).

**(a)** Find the period of rotation (in years) of a particle 10 kpc from the center of the galaxy. Also, find the mass enclosed within the (circular) orbit in solar masses, i.e. the mass within $r = 10$ kpc from the center of the galaxy.

**(b)** Find the angular velocity of the galaxy very close to the center ($r \ll R$). Hint: $e^x \approx 1 + x$ for $|x| \ll 1$.

**(c)** Determine how the (gravitational) mass per unit area must vary with distance from the center of the galaxy in order to yield the given rotation curve. Find the expressions only for regions very far from the galactic center.

**(d)** An astronomer measures the absolute bolometric magnitude of the galaxy to be $-21.2$. For comparison, the bolometric magnitude of the sun is 4.75. Assume that the luminous mass per unit area follows a profile given by $\sigma_L = \dfrac{k}{r}$ for $k = 2.55\times10^{8}\ M_{\text{Sun}}/\text{kpc}$ and that all of the luminous mass is in the form of Sun-like stars. Approximate the percentage of the galaxy's mass that is dark matter, out to the maximum distance (radius) that is still visibly defined.`,
      solution: String.raw`**(a)** At $r = 10$ kpc, $V = 250\left(1 - e^{-10/7.5}\right) \approx 184\ \text{km/s}$. The period is

$$T = \frac{2\pi r}{V} = \frac{2\pi \times 10 \times 3.086\times10^{16}\ \text{km}}{184\ \text{km/s}} \approx 1.05\times10^{16}\ \text{s} \approx 334\ \text{million years}$$

For a circular orbit, gravity supplies the centripetal force, $\dfrac{GMm}{r^2} = \dfrac{mV^2}{r}$, so

$$M = \frac{V^2 r}{G} \approx 1.57\times10^{41}\ \text{kg} \approx 7.88\times10^{10}\ M_\odot$$

**(b)** The angular velocity is $\omega = V/r$. Close to the centre, $e^{-r/R} \approx 1 - r/R$, so $V \approx V_0 r/R$ and

$$\omega \approx \frac{V_0}{R} = \frac{250\ \text{km/s}}{7.5 \times 3.086\times10^{16}\ \text{km}} \approx 1.08\times10^{-15}\ \text{rad/s}$$

— the centre rotates like a rigid body.

**(c)** From (a), $M(r) = V^2 r/G$. Take a thin ring of radius $r$ and width $\delta r$ with mass per unit area $\sigma$: its mass is $\delta M = \sigma \cdot 2\pi r\,\delta r$. Far from the centre ($r \gg R$) the curve is flat, $V \approx V_0$, so $\delta M \approx \dfrac{V_0^2}{G}\,\delta r$. Equating,

$$\sigma(r) \approx \frac{V_0^2}{2\pi G r} \qquad (r \gg R)$$

The mass per unit area must fall off as $1/r$.

**(d)** The luminosity is

$$M_{\text{bol}} = 4.75 - 2.5\log\frac{L}{L_\odot} \quad\Longrightarrow\quad \frac{L}{L_\odot} = 10^{(4.75 + 21.2)/2.5} \approx 2.40\times10^{10}$$

With only Sun-like stars, the luminous mass is $2.40\times10^{10}\ M_\odot$. A ring holds luminous mass $2\pi r\,\delta r \cdot \dfrac{k}{r} = 2\pi k\,\delta r$, so the luminous mass inside $r$ is $2\pi k r$. The galaxy is visibly defined out to where all the light is enclosed:

$$2\pi k\, r_{\max} = 2.40\times10^{10}\ M_\odot \quad\Longrightarrow\quad r_{\max} = \frac{2.40\times10^{10}}{2\pi \times 2.55\times10^{8}}\ \text{kpc} \approx 15.0\ \text{kpc}$$

There $V = 250(1 - e^{-2.0}) \approx 216\ \text{km/s}$, so the total (gravitational) mass is $M = V^2 r/G \approx 1.63\times10^{11}\ M_\odot$. The dark-matter fraction is

$$1 - \frac{2.40\times10^{10}}{1.63\times10^{11}} \approx 85\%$$`,
      rubric: String.raw`Astro Coach marking guide (20 points):
- (a) Speed at 10 kpc ≈ 184 km/s and period ≈ 3.3 × 10⁸ years: 3 points.
- (a) Enclosed mass from M = V²r/G ≈ 7.9 × 10¹⁰ M☉: 3 points.
- (b) Small-r expansion giving ω ≈ V₀/R ≈ 1.08 × 10⁻¹⁵ rad/s: 3 points.
- (c) Ring argument δM = 2πrσδr with flat curve, giving σ = V₀²/(2πGr) (σ ∝ 1/r): 5 points.
- (d) Luminosity ≈ 2.4 × 10¹⁰ L☉ from the bolometric magnitude: 1 point.
- (d) Luminous mass inside r equal to 2πkr, giving r_max ≈ 15 kpc: 2 points.
- (d) Total mass at r_max ≈ 1.6 × 10¹¹ M☉: 1 point.
- (d) Dark-matter fraction ≈ 85% (accept 83–87%): 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [5, 6],
    },

    // --- M3: Crescent Moon at sunset ----------------------------------------
    {
      number: "M3",
      title: "Crescent Moon at Sunset",
      section: MEDIUM,
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Telescopes & Observing"],
      difficulty: "Advanced",
      points: 15,
      text: String.raw`An astro-photographer has taken the photo of the moon close to a new moon day shown below right before the sunset on December 21 (Winter Solstice) in a wide open area.

[[figure:moon-photo]]

**(a)** In which hemisphere (Northern or Southern) is the photographer located?

**(b)** Find the latitude of the photographer. Ignore the orbital inclination of the Moon and the ellipticity of the Earth's orbit. Hint: The green equiangular lines are added to the image to help you out in measuring any relevant angle.

**(c)** Calculate the sidereal time when the photo was taken.`,
      solution: String.raw`**(a)** On December 21 the Sun is at the most southern point of the ecliptic (declination $-23.5^\circ$). A young crescent Moon lies a little east of the Sun along the ecliptic, and near the solstice point the ecliptic runs parallel to the celestial equator. Facing the western horizon at sunset, the celestial equator climbs from the horizon towards the north (to the right) for an observer in the Southern Hemisphere, but towards the south (to the left) in the Northern Hemisphere. The Moon is up and to the right of the Sun, so the photo was taken in the **Southern Hemisphere**.

**(b)** Measure the angle between the horizon and the line from the Sun to the Moon (the ecliptic). The green lines are $10^\circ$ apart, and the Moon sits on the line about $40^\circ$ above the horizon:

[[figure:moon-angle-solution]]

At the solstice the ecliptic is tangent to the Sun's daily path (its declination circle), so $40^\circ$ is also the angle $\psi$ at which the Sun's daily path meets the horizon. For a body of declination $\delta$ setting at latitude $\phi$, that angle satisfies

$$\cos\psi = \frac{\sin|\phi|}{\cos\delta} \quad\Longrightarrow\quad \sin|\phi| = \cos 23.5^\circ \cos 40^\circ \approx 0.703 \quad\Longrightarrow\quad |\phi| \approx 44.6^\circ$$

(The official solution reaches the same relation with a spherical triangle joining the south celestial pole $S$, the zenith $Z$ and the south ecliptic pole $K'$: the Sun is the pole of the great circle through $K'$ and $Z$, so $\angle S\,(\text{Sun})\,Z = 40^\circ$, and the spherical law of cosines gives $\sin\phi = \cos 23.5^\circ \cos 40^\circ$.)

So the latitude is $\phi \approx 44.6^\circ\ \text{S}$.

**(c)** Local sidereal time is the hour angle of the Sun plus its right ascension, $\text{ST} = H_\odot + \alpha_\odot$. At sunset (altitude $0^\circ$):

$$\cos H_\odot = -\tan\phi\,\tan\delta = -\tan 44.6^\circ \tan 23.5^\circ \approx -0.429 \quad\Longrightarrow\quad H_\odot \approx 115.4^\circ = 7^{\text{h}}42^{\text{m}}$$

(both $\phi$ and $\delta$ are southern, so their product is positive). At the December solstice $\alpha_\odot = 18^{\text{h}}$, so

$$\text{ST} = 7^{\text{h}}42^{\text{m}} + 18^{\text{h}} = 25^{\text{h}}42^{\text{m}} \equiv 1^{\text{h}}42^{\text{m}}$$`,
      rubric: String.raw`Astro Coach marking guide (15 points):
- (a) Southern Hemisphere, with a reason based on where the Moon sits relative to the Sun and the slope of the ecliptic/equator: 3 points.
- (b) Measures the ecliptic–horizon angle ≈ 40° (accept 38°–42°): 2 points.
- (b) Correct spherical relation sin|φ| = cos 23.5° cos 40° (or equivalent spherical triangle): 3 points.
- (b) Latitude ≈ 44.6° S (accept 42°–47° consistent with the measured angle; must be south): 1 point.
- (c) Sunset hour angle from cos H = −tan φ tan δ: 2 points.
- (c) H ≈ 7h42m (≈ 115°): 2 points.
- (c) Sidereal time = H + RA with RA☉ = 18h, giving ≈ 1h42m: 2 points.`,
      solutionSource: "ADAPTED",
      figures: [
        {
          key: "moon-photo",
          file: "moon-photo.png",
          caption: "The crescent Moon just before sunset on December 21. The green lines are equally spaced in angle.",
          sourcePage: 3,
        },
        {
          key: "moon-angle-solution",
          file: "moon-angle-solution.png",
          caption: "Measuring the angle between the horizon and the ecliptic: about 40°.",
          kind: "SOLUTION",
          sourcePage: 6,
        },
      ],
      questionPages: [3],
      solutionPages: [6, 7],
    },

    // --- M4: Orbits around a black hole -------------------------------------
    {
      number: "M4",
      title: "Orbits near a Black Hole",
      section: MEDIUM,
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Stars & Black Holes"],
      difficulty: "Advanced",
      points: 20,
      text: String.raw`In general relativity, the orbit of satellites around a massive object (like a black hole) are known as geodesics and do not obey all of Kepler's laws for orbits. However, for objects that are moving at non-relativistic speeds, we can analyze the orbit using classical mechanics, with a corrective term added to Newton's Law of gravity. In this case, the potential energy of an object in orbit around a black hole is:

$$V_s(r) = -\frac{GMm}{r} - \frac{GML^2}{c^2 m r^3}$$

where $M$ and $m$ are the masses of the black hole and the object respectively, $c$ is the speed of light, $L$ is the angular momentum of the object in orbit and $r$ is the distance of that object from the black hole. Likewise, the gravitational force from a black hole has magnitude:

$$F_s(r) = \frac{GMm}{r^2} + \frac{3GML^2}{c^2 m r^4}$$

You may assume that both conservation of energy and conservation of angular momentum hold in this regime.

**(a)** Argue which of Kepler's laws are still true.

**(b)** Calculate the radius of a stable circular orbit with an angular momentum $L$ (you will get two solutions, the stable orbit generates the classical result under the proper limits).

**(c)** What is the radius, $R_{ISCO}$ of the innermost stable circular orbit (the smallest stable circular orbit) for a black hole of mass $M$? What is the numerical value of $R_{ISCO}$ for Sagittarius A*, which has mass $3.6\times10^{6}$ solar masses?

**(d)** Suppose we discovered a new star orbiting Sagittarius A*, S99, that has a periapsis of $10R_{ISCO}$ and an apoapsis of 16 AU. Find the magnitude of velocity of S99 at both periapsis and apoapsis.`,
      solution: String.raw`**(a)** The force is still central (radial), so it exerts no torque and angular momentum is conserved. That is exactly Kepler's **second law** (equal areas in equal times), so it still holds. The extra $1/r^4$ term means the force is no longer a pure inverse square, so orbits are not closed ellipses (they precess) and $T^2 \propto a^3$ is no longer exact: the first and third laws fail.

**(b)** For a circular orbit the force provides the centripetal force. With $v = L/(mr)$, $mv^2/r = L^2/(mr^3)$:

$$\frac{L^2}{mr^3} = \frac{GMm}{r^2} + \frac{3GML^2}{c^2 m r^4}$$

Multiplying by $r^4/(GMm)$ and rearranging gives a quadratic in $r$:

$$r^2 - \frac{L^2}{GMm^2}\,r + \frac{3L^2}{m^2c^2} = 0 \quad\Longrightarrow\quad r = \frac{L^2}{2GMm^2}\left(1 \pm \sqrt{1 - \frac{12G^2M^2m^2}{L^2c^2}}\right)$$

As $c \to \infty$ the "+" root becomes the classical $r = L^2/(GMm^2)$, so the **stable** orbit is

$$r = \frac{L^2}{2GMm^2}\left(1 + \sqrt{1 - \frac{12G^2M^2m^2}{L^2c^2}}\right)$$

and the "−" root is an unstable circular orbit.

**(c)** Circular orbits exist only while the square root is real. The smallest allowed angular momentum makes it zero: $L^2 = \dfrac{12G^2M^2m^2}{c^2}$. Then

$$R_{ISCO} = \frac{L^2}{2GMm^2} = \frac{6GM}{c^2}$$

For $M = 3.6\times10^{6}\ M_\odot$: $R_{ISCO} = \dfrac{6 \times 6.67\times10^{-11} \times 7.16\times10^{36}}{(3.00\times10^{8})^2} \approx 3.2\times10^{10}\ \text{m} \approx 0.21\ \text{AU}$.

**(d)** Periapsis $r_1 = 10R_{ISCO} \approx 2.13\ \text{AU}$, apoapsis $r_2 = 16\ \text{AU}$. At both points the radial velocity is zero, so all the kinetic energy is $L^2/(2mr^2)$. Conservation of energy, with $l = L/m$:

$$\frac{l^2}{2r_1^2} - \frac{GM}{r_1} - \frac{GMl^2}{c^2 r_1^3} = \frac{l^2}{2r_2^2} - \frac{GM}{r_2} - \frac{GMl^2}{c^2 r_2^3}$$

Solving for $l^2$, with the Schwarzschild radius $R_s = 2GM/c^2 \approx 0.071\ \text{AU}$:

$$l^2 = \frac{R_s\left(\frac{1}{r_1} - \frac{1}{r_2}\right)}{\left(\frac{1}{r_1^2} - \frac{1}{r_2^2}\right) - R_s\left(\frac{1}{r_1^3} - \frac{1}{r_2^3}\right)}\,c^2 \quad\Longrightarrow\quad l \approx 0.37\,c\ \text{AU}$$

Angular momentum conservation then gives the speeds, $v = l/r$:

$$v_1 = \frac{l}{r_1} \approx 0.17c \approx 5.2\times10^{7}\ \text{m/s}, \qquad v_2 = \frac{l}{r_2} \approx 0.023c \approx 7.0\times10^{6}\ \text{m/s}$$

(The official solution rounds $r_1$ to 2.1 AU and quotes $5.19\times10^{7}$ and $6.82\times10^{6}$ m/s; the small differences are rounding.)`,
      rubric: String.raw`Astro Coach marking guide (20 points):
- (a) Kepler's second law still holds because the force is central (angular momentum conserved): 2 points.
- (a) First and third laws fail (orbits precess / not closed ellipses; T² ∝ a³ not exact): 2 points.
- (b) Force balance L²/(mr³) = F_s(r): 2 points.
- (b) Correct quadratic and its two roots: 2 points.
- (b) Chooses the "+" root as stable because it reduces to the classical radius L²/(GMm²): 2 points.
- (c) ISCO where the discriminant is zero (L² = 12G²M²m²/c²): 2 points.
- (c) R_ISCO = 6GM/c²: 2 points.
- (c) Numerical value ≈ 3.2 × 10¹⁰ m ≈ 0.21 AU: 1 point.
- (d) Energy conservation between the apsides using only the tangential kinetic energy, plus angular momentum conservation: 2 points.
- (d) Specific angular momentum l ≈ 0.37 c·AU: 1 point.
- (d) Periapsis speed ≈ 5.2 × 10⁷ m/s (accept 5.1–5.3 × 10⁷): 1 point.
- (d) Apoapsis speed ≈ 7.0 × 10⁶ m/s (accept 6.8–7.1 × 10⁶): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [4],
      solutionPages: [7, 8],
    },

    // --- M5: Filling in a table of stellar data -----------------------------
    {
      number: "M5",
      title: "Four Stars, One Table",
      section: MEDIUM,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Light & Spectra", "Math, Data & Coordinates"],
      difficulty: "Intermediate",
      points: 15,
      text: String.raw`The following table gives the numerical values for some physical properties of four stars. The quantities that are affected by, i.e. include the effects of, interstellar extinction are marked with a star (*). You may consider that all stars are black bodies. The temperature of a star can be calculated directly from its B−V index, by using Ballesteros' formula:

$$T_{eff} = f(B-V) = 4600\left(\frac{1}{0.92(B-V) + 1.7} + \frac{1}{0.92(B-V) + 0.62}\right)\ \text{K}.$$

*Determine* the numerical values of all the other physical characteristics presented in the given table. For full credit, show your full work by writing all the mathematical expressions used in the calculation.

*Hint:* You might use the following empirical relation:

$$\frac{A_V}{E_{B-V}} = 3.2$$

In the table, **?** marks a value to determine and — marks a value that does not apply.

$$
\begin{array}{|l|c|c|c|c|}
\hline
\text{Star} & \kappa\ \text{Velorum} & \beta\ \text{Tauri} & \text{Sirius A} & \text{Sun} \\ \hline
\text{Annual parallax } p^*\ (10^{-3}\ \text{arcsec}) & 6.05 & 24.89 & 379.2 & \text{—} \\ \hline
\text{Distance to Sun } \Delta^*\ (\text{pc}) & ? & ? & ? & \text{—} \\ \hline
\text{Interstellar extinction in V band } A_V\ (\text{mag}) & 0.20 & 0.08 & \text{Negligible} & \text{—} \\ \hline
10^{0.2 \times A_V} & ? & ? & ? & \text{—} \\ \hline
\text{Distance to Sun } \Delta\ (\text{pc}) & ? & ? & ? & 4.85\times10^{-6} \\ \hline
\text{Annual parallax } p\ (10^{-3}\ \text{arcsec}) & ? & ? & ? & ? \\ \hline
\text{Distance modulus } \mu = m - M & ? & ? & ? & ? \\ \hline
\text{Visual apparent magnitude } m^*\ (\text{mag}) & 2.86 & 1.68 & -1.47 & -26.73 \\ \hline
\text{Visual apparent magnitude } m\ (\text{mag}) & ? & ? & ? & ? \\ \hline
\text{Visual absolute magnitude } M_V\ (\text{mag}) & ? & ? & ? & ? \\ \hline
\text{Color index } (B-V)^*\ (\text{mag}) & -0.14 & -0.06 & +0.01 & +0.65 \\ \hline
\text{Extinction } E_{B-V}\ (\text{mag}) & ? & ? & ? & ? \\ \hline
\text{Color index } (B-V)\ (\text{mag}) & ? & ? & ? & ? \\ \hline
\text{Effective temperature } T_{eff} = f(B-V)\ (\text{K}) & ? & ? & ? & ? \\ \hline
\lambda_m\ (\text{nm}) & ? & ? & ? & ? \\ \hline
\text{Radius (solar radius, } R_S) & 9.10 & 4.60 & 1.71 & 1.00 \\ \hline
\text{Total luminosity (solar luminosity, } L_S) & ? & ? & ? & 1.00 \\ \hline
\text{Absolute bolometric magnitude } M_{bol}\ (\text{mag}) & ? & ? & ? & 4.64 \\ \hline
\text{Bolometric correction BC for V band (mag)} & ? & ? & ? & -0.20 \\ \hline
\end{array}
$$`,
      solution: String.raw`**The relations used**

- Distance from the measured parallax: $\Delta^*_{\text{pc}} = 1/p^*_{\text{arcsec}}$.
- Extinction dims a star: $m^* = m + A_V$. Writing the distance-modulus equation with and without extinction, $m = M + 5\log\Delta - 5$ and $m^* = M + 5\log\Delta^* - 5$, gives the true distance $\Delta = \Delta^* \times 10^{-0.2A_V}$, and then $p = 1/\Delta$.
- Distance modulus $\mu = m - M = 5\log\Delta_{\text{pc}} - 5$, so $M_V = m - \mu$.
- Colour excess $E_{B-V} = A_V/3.2$ and intrinsic colour $(B-V) = (B-V)^* - E_{B-V}$.
- $T_{eff}$ from Ballesteros' formula; Wien's law $\lambda_m = b/T_{eff}$ with $b = 2.898\times10^{-3}\ \text{m K}$.
- Luminosity $L = 4\pi R^2\sigma T^4$, so $\dfrac{L}{L_S} = \left(\dfrac{R}{R_S}\right)^2\left(\dfrac{T}{T_S}\right)^4$, with $T_S = f(0.65) \approx 5778\ \text{K}$.
- $M_{bol} - M_{bol,S} = -2.5\log(L/L_S)$ with $M_{bol,S} = 4.64$, and $\text{BC} = M_{bol} - M_V$.

**Completed table** (rounded)

$$
\begin{array}{|l|c|c|c|c|}
\hline
\text{Star} & \kappa\ \text{Vel} & \beta\ \text{Tau} & \text{Sirius A} & \text{Sun} \\ \hline
\Delta^*\ (\text{pc}) & 165.3 & 40.18 & 2.637 & \text{—} \\ \hline
10^{0.2A_V} & 1.096 & 1.038 & 1.000 & \text{—} \\ \hline
\Delta\ (\text{pc}) & 150.8 & 38.72 & 2.637 & 4.85\times10^{-6} \\ \hline
p\ (10^{-3}\ \text{arcsec}) & 6.63 & 25.82 & 379.2 & 2.06\times10^{8} \\ \hline
\mu & 5.89 & 2.94 & -2.89 & -31.57 \\ \hline
m & 2.66 & 1.60 & -1.47 & -26.73 \\ \hline
M_V & -3.23 & -1.34 & 1.42 & 4.84 \\ \hline
E_{B-V} & 0.0625 & 0.025 & \approx 0 & 0 \\ \hline
(B-V) & -0.2025 & -0.085 & +0.01 & +0.65 \\ \hline
T_{eff}\ (\text{K}) & 13\,600 & 11\,300 & 10\,000 & 5\,780 \\ \hline
\lambda_m\ (\text{nm}) & 212 & 256 & 290 & 502 \\ \hline
L\ (L_S) & 2\,580 & 312 & 26 & 1.00 \\ \hline
M_{bol} & -3.89 & -1.60 & +1.09 & 4.64 \\ \hline
\text{BC} & -0.66 & -0.26 & -0.33 & -0.20 \\ \hline
\end{array}
$$

For example, for $\kappa$ Velorum: $\Delta^* = 1/0.00605 = 165.3$ pc; $\Delta = 165.3/1.096 = 150.8$ pc; $\mu = 5\log 150.8 - 5 = 5.89$; $m = 2.86 - 0.20 = 2.66$; $M_V = 2.66 - 5.89 = -3.23$; $E_{B-V} = 0.20/3.2 = 0.0625$; $(B-V) = -0.14 - 0.0625 = -0.2025$; $T_{eff} = 4600\left(\frac{1}{1.514} + \frac{1}{0.434}\right) \approx 13\,600$ K; $\lambda_m = 2.898\times10^{6}/13\,645 \approx 212$ nm; $L = 9.10^2\,(13\,645/5778)^4 \approx 2580\,L_S$; $M_{bol} = 4.64 - 2.5\log 2580 = -3.89$; $\text{BC} = -3.89 - (-3.23) = -0.66$.

For the Sun there is no extinction, so $m = m^* = -26.73$, and $p = 1/(4.85\times10^{-6}) \approx 2.06\times10^{5}$ arcsec.

*Notes on the official table:* it lists $m = 2.26$ (and so $M_V = -3.63$) for $\kappa$ Velorum, but $m = m^* - A_V = 2.86 - 0.20 = 2.66$. Its $\lambda_m$ values (220, 266, 302, 522 nm) use a Wien constant of about $3.0\times10^{-3}$ m K, and its luminosities (2350, 277, 23) and bolometric corrections differ somewhat from the values above. It also prints the Sun's $m$ as $-27.73$, a typo for $-26.73$ (its $M_V = 4.84$ uses $-26.73$).`,
      rubric: String.raw`Astro Coach marking guide (15 points). Values within about 2% (5% for T, λ, L) of either the solution table or the official table count as correct, as long as the method is shown:
- Distances Δ*, the extinction factor 10^(0.2A_V), true distances Δ and parallaxes p: 3 points.
- Distance moduli μ, dereddened magnitudes m = m* − A_V and absolute magnitudes M_V: 3 points.
- Colour excess E = A_V/3.2 and intrinsic colours (B−V): 2 points.
- Temperatures from Ballesteros' formula and peak wavelengths from Wien's law: 3 points.
- Luminosities from L ∝ R²T⁴ relative to the Sun: 2 points.
- Bolometric magnitudes and bolometric corrections: 2 points.
Deduct within an item for missing expressions (the question requires all expressions to be written).`,
      solutionSource: "ADAPTED",
      questionPages: [4, 5],
      solutionPages: [8, 9, 10, 11],
    },

    // =======================================================================
    // Long Questions
    // =======================================================================

    // --- L1: The globular cluster M15 ---------------------------------------
    {
      number: "L1",
      title: "The Globular Cluster M15",
      section: LONG,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Galaxies & Universe", "Telescopes & Observing"],
      difficulty: "Advanced",
      points: 30,
      text: String.raw`M15 is a globular cluster in the constellation Pegasus. The Hertzsprung–Russell diagram (apparent visual magnitude versus color index) of the cluster is shown in Figure 1. Considering that the mass ($M$)–luminosity ($L$) relation for main sequence stars is given by $\dfrac{M^3}{L} = \text{constant}$, answer the following questions. In this problem, ignore the interstellar reddening and dust extinction effects.

[[figure:m15-hr-diagram]]

**(a)** Given that all the stars are formed at the same time, estimate the age of the globular cluster. The color index of the sun $((B-V)_\odot)$ is 0.65 and its life time on the main sequence is 10 billion years.

**(b)** Estimate the distance of this globular cluster from the Earth. Give the answer in parsec. The absolute visual magnitude of the Sun is 4.83.

**(c)** Given that stars spend about 10% of their main-sequence life time in the post main sequence phase, find the mass of the most massive star in the post main sequence stage.

**(d)** The number of stars in the mass range of $(M_1, M_2)$ can be written as:

$$N(M_1 \leqslant M \leqslant M_2) = A\left(M_1^{-1.35} - M_2^{-1.35}\right) \qquad (1)$$

where $A$ is a constant, $M_1$ and $M_2$ are in units of solar masses. Assuming that the number of stars in the post main sequence phase is 515, calculate the value of constant $A$ in equation 1.

**(e)** M15 is one of the most densely packed globular clusters such that in a visual band ($\lambda \sim 5500$ Å) image of M15 taken by a telescope with diameter of 10 cm, the stars at the center of cluster cannot be resolved. Estimate the minimum number of stars in this cluster. The angular diameter of M15 is 12.3 arc minutes. Assume that the number density of stars is constant within the cluster.

**(f)** Use your answers from parts (d) and (e) to estimate the mass of the lowest possible mass star in this cluster. For this part, assume that the mass of the most massive star in the cluster is $20M_\odot$.`,
      solution: String.raw`**(a)** From the diagram, a Sun-like main-sequence star ($B-V = 0.65$) has $V_\odot \approx 21.4$, and the main-sequence turn-off is at $V_t \approx 19.3$. All the stars are at the same distance, so

$$V_\odot - V_t = 2.5\log\frac{L_t}{L_\odot} \quad\Longrightarrow\quad \frac{L_t}{L_\odot} = 10^{0.4 \times 2.1} \approx 7$$

Main-sequence lifetime is fuel over burning rate, $t \propto M/L$. With $M \propto L^{1/3}$, $t \propto L^{1/3}/L = L^{-2/3}$. The turn-off star is just finishing its main-sequence life, so its lifetime is the cluster's age:

$$\text{Age} = 10\ \text{Gyr} \times \left(\frac{L_t}{L_\odot}\right)^{-2/3} = 10 \times 7^{-2/3} \approx 2.7\ \text{billion years}$$

(M15 is actually very old, close to the age of the Universe; the simple model and the large uncertainty in reading $B-V$ explain the discrepancy.)

**(b)** The Sun-like stars give the distance modulus: $m - M = 21.4 - 4.83 = 16.57$. Then

$$16.57 = 5\log\frac{d}{10\ \text{pc}} \quad\Longrightarrow\quad d = 10^{(16.57 + 5)/5}\ \text{pc} \approx 2\times10^{4}\ \text{pc} = 20\ \text{kpc}$$

(The real distance is about 10 kpc; ignoring dust extinction makes the stars look fainter and so farther away.)

**(c)** The most massive star now in the post-main-sequence phase left the main sequence $10\%$ of its main-sequence lifetime ago, so its main-sequence lifetime was $2.7/1.1 \approx 2.45$ Gyr. With $t \propto M/L \propto M/M^3 = M^{-2}$:

$$M_{\max} = \left(\frac{2.45}{10}\right)^{-1/2} M_\odot \approx 2.02\,M_\odot$$

**(d)** The turn-off mass is $M_t = (L_t/L_\odot)^{1/3} M_\odot = 7^{1/3} M_\odot \approx 1.91\,M_\odot$. The post-main-sequence stars are those between 1.91 and $2.02\,M_\odot$:

$$A = \frac{515}{1.91^{-1.35} - 2.02^{-1.35}} \approx 1.7\times10^{4}$$

(The official value is about 16,950; the result is very sensitive to rounding of the two masses.)

**(e)** The telescope's resolution is $\theta = 1.22\lambda/D = 1.22 \times 5.5\times10^{-7}/0.1\ \text{rad} \approx 1.38''$. Look through the centre of the cluster along a thin cylinder whose cross-section is one resolution element (diameter $\theta$) and whose length is the cluster's diameter $2R$. If that cylinder holds at least two stars, the centre cannot be resolved. With uniform density,

$$N_{\min}\,\frac{2R \cdot \pi\theta^2/4}{\tfrac{4}{3}\pi R^3} = 2 \quad\Longrightarrow\quad N_{\min} = \frac{16}{3}\left(\frac{R}{\theta}\right)^2$$

All lengths can be measured as angles because they are at the same distance. With $R = 12.3'/2 = 369''$:

$$N_{\min} = \frac{16}{3}\left(\frac{369''}{1.38''}\right)^2 \approx 3.8\times10^{5}$$

**(f)** All $N_{\min}$ stars lie between $M_{\min}$ and $20\,M_\odot$:

$$N_{\min} = A\left(M_{\min}^{-1.35} - 20^{-1.35}\right) \quad\Longrightarrow\quad M_{\min} = \left(\frac{N_{\min}}{A} + 20^{-1.35}\right)^{-1/1.35} = \left(\frac{3.8\times10^{5}}{16\,950} + 0.018\right)^{-1/1.35} \approx 0.1\,M_\odot$$`,
      rubric: String.raw`Astro Coach marking guide (30 points). Readings from the diagram vary; accept answers consistent with the student's own readings:
- (a) Reads V ≈ 21.4 for B−V = 0.65 and turn-off V ≈ 19.3 (±0.3): 2 points.
- (a) Luminosity ratio L_t/L☉ ≈ 7: 1 point.
- (a) Lifetime scaling t ∝ M/L ∝ L^(−2/3): 2 points.
- (a) Age ≈ 2.7 Gyr (accept 2–4 Gyr): 1 point.
- (b) Distance modulus from the Sun-like stars (21.4 − 4.83): 2 points.
- (b) Distance ≈ 2 × 10⁴ pc (accept 15–25 kpc): 2 points.
- (c) Main-sequence lifetime ≈ 2.45 Gyr from the 10% rule: 2 points.
- (c) t ∝ M⁻² giving M ≈ 2.0 M☉: 2 points.
- (d) Turn-off mass ≈ 1.9 M☉ from M ∝ L^(1/3): 2 points.
- (d) A = 515 / (M_t^(−1.35) − M_max^(−1.35)): 2 points.
- (d) A ≈ 1.7 × 10⁴ (accept 1.4–2.0 × 10⁴): 1 point.
- (e) Resolution ≈ 1.4″: 2 points.
- (e) Geometric argument (at least ~2 stars along a line of sight through one resolution element), giving N = (16/3)(R/θ)² or an equivalent: 3 points.
- (e) N_min ≈ 4 × 10⁵ (accept within a factor of 2 for a reasonable variant): 1 point.
- (f) Sets N_min = A(M_min^(−1.35) − 20^(−1.35)): 3 points.
- (f) M_min ≈ 0.1 M☉: 2 points.`,
      solutionSource: "ADAPTED",
      figures: [
        {
          key: "m15-hr-diagram",
          file: "m15-hr-diagram.png",
          caption: "Figure 1: HR diagram for M15 (apparent visual magnitude V against colour index B − V).",
          sourcePage: 6,
        },
      ],
      questionPages: [5, 6],
      solutionPages: [11, 12, 13],
    },

    // --- L2: Sunspots in magnetograms ---------------------------------------
    {
      number: "L2",
      title: "Sunspots in Magnetograms",
      section: LONG,
      topic: "Solar System",
      topics: ["Solar System", "Math, Data & Coordinates", "Telescopes & Observing", "Energy & Stellar Physics"],
      difficulty: "Advanced",
      points: 25,
      text: String.raw`Figure 2 shows two magnetograms of the Sun taken with the Helioseismic and Magnetic Imager (HMI) at the Solar Dynamics Observatory (SDO) towards the end of January 2020. The picture on the left was taken three days after the image on the right.

[[figure:magnetograms]]

**(a)** Select the pair of images (numbered from I to V) in which the lines are drawn at the Sun's Equator and the Xs correspond to the position of each sunspot 4 days before the pictures were taken.

[[figure:option-1]]

[[figure:option-2]]

[[figure:option-3]]

[[figure:option-4]]

[[figure:option-5]]

**(b)** Estimate the absolute value of the latitude of both Sunspots in Figure 2.

**(c)** Figure 3 is a magnetogram of the Sun in normal activity. It is possible to notice that the sunspots have different orientations in different hemispheres. In one of the hemispheres, each spot has the white part on the left and the black one on the right, and vice-versa. However, this is not the case for the images presented in Figure 2. Suggest an explanation for the anomaly on the images in Figure 2.

[[figure:normal-activity]]

**(d)** Assume for the sake of simplicity that a specific sunspot has a shape very similar to that of a spherical triangle. The sides of the triangle are equal to $0.176^\circ$, $0.0981^\circ$, and $0.201^\circ$. Calculate the value of the three internal angles in degrees.

For the following parts, assume that this sunspot is centered at $7.89^\circ$ South and $51.74^\circ$ East of the center of the Solar disk for an observer on Earth.

**(e)** For an observer on Earth, what is the ratio between the area of the Solar disk and the observed area of the sunspot? Note that the required ratio is between the areas observed by someone on Earth, not the ratio between the actual areas. The area of a spherical triangle is equal to $\pi R^2 E/180^\circ$, in which the spherical excess ($E$) in (deg) is equal to the sum of the internal angles minus $180^\circ$ and $R$ is the radius of the sphere on which the spherical triangle lies.

**(f)** If an observer on Earth uses a huge f/5 telescope with a focal length of 13 m to look at this sunspot, will it be possible to resolve it? Visible light is centered at 550 nm.

**(g)** The Sun generates its luminosity by converting Hydrogen into Helium in the proton-proton chain. In the most energetic branch of the chain, 4 protons fuse into a helium nucleus. Considering that only 10% of the solar mass can be converted into energy, calculate the time that the Sun spends in the Main Sequence.`,
      solution: String.raw`**(a)** The correct pair is **III**. Sunspots are carried by solar rotation along lines of constant latitude, i.e. parallel to the equator, by about $13^\circ$ of longitude per day. Only in III does the line split the two spots evenly (same absolute latitude on each side) while each X is displaced from its spot parallel to that line, by the right amount and towards the east (the side the spots rotate in from).

**(b)** Measure each spot's perpendicular distance $y$ from the equator line (as drawn in III) as a fraction of the disk radius $R$. In this projection $y = R\sin(\text{latitude})$ whatever the spot's longitude, so $|\text{latitude}| = \arcsin(y/R)$. Both spots come out at about the same value, roughly **$26^\circ$–$29^\circ$** (the official range).

**(c)** The Sun's magnetic field reverses every solar cycle (about 11 years), and by Hale's law the leading polarity of sunspot pairs in each hemisphere reverses with it. January 2020 was right at the minimum between Solar Cycles 24 and 25, when spots of the old cycle and the first spots of the new cycle (which appear at high latitudes, like these at about $27^\circ$) are both present with opposite orientations. So the images were taken while the Sun was going through this transition, which explains the anomaly.

**(d)** Call the sides $a = 0.176^\circ$, $b = 0.0981^\circ$, $c = 0.201^\circ$ and the opposite angles $A$, $B$, $C$. The spherical law of cosines gives the angle opposite $a$:

$$\cos A = \frac{\cos a - \cos b\cos c}{\sin b\sin c} \quad\Longrightarrow\quad A \approx 61.117^\circ$$

The spherical law of sines, $\dfrac{\sin A}{\sin a} = \dfrac{\sin B}{\sin b} = \dfrac{\sin C}{\sin c}$, gives the others (with $C$ checked by the law of cosines, since $\sin C$ alone cannot tell $89.67^\circ$ from $90.33^\circ$):

$$A \approx 61.12^\circ, \qquad B \approx 29.21^\circ, \qquad C \approx 89.67^\circ$$

(the angle of $89.67^\circ$ is opposite the longest side, $0.201^\circ$, and $29.21^\circ$ is opposite the shortest, $0.0981^\circ$).

**(e)** The spherical excess is tiny: $E = 61.117^\circ + 89.671^\circ + 29.213^\circ - 180^\circ \approx 1.51\times10^{-4}$ degrees, so the true area is

$$A_{\text{spot}} = \frac{\pi R_\odot^2 \times 1.51\times10^{-4}}{180} \approx 8.4\times10^{-7}\,\pi R_\odot^2$$

(Equivalently, the triangle is essentially flat: $\tfrac12 bc\sin A$ with the sides in radians gives $8.37\times10^{-7}\,\pi R_\odot^2$ — full credit either way.)

The spot is seen at an angle. The angle $i$ between its surface and the plane of the sky follows from the right spherical triangle with legs $7.89^\circ$ and $51.74^\circ$:

$$\cos i = \cos 7.89^\circ \cos 51.74^\circ \approx 0.613 \quad\Longrightarrow\quad i \approx 52.2^\circ$$

So the observed area is $A_{\text{obs}} = A_{\text{spot}}\cos i \approx 5.1\times10^{-7}\,\pi R_\odot^2$, and the solar disk has area $\pi R_\odot^2$:

$$\frac{A_{\text{obs}}}{A_{\text{disk}}} \approx 5.1\times10^{-7}, \qquad \frac{A_{\text{disk}}}{A_{\text{obs}}} \approx 1.9\times10^{6}$$

(The official solution quotes the first form, $5.16\times10^{-7}$; small rounding changes in the angles change the excess a lot, so nearby values are fine.)

**(f)** The telescope's diameter is $D = 13\ \text{m}/5 = 2.6\ \text{m}$, so its diffraction limit is

$$\theta = \frac{1.22\lambda}{D} = \frac{1.22 \times 5.5\times10^{-7}}{2.6} \approx 2.6\times10^{-7}\ \text{rad}$$

The shortest side of the spot is $l = 2\pi R_\odot \times 0.0981^\circ/360^\circ \approx 1.19\times10^{6}$ m; even fully foreshortened by $\cos 52.2^\circ$ it is $7.3\times10^{5}$ m, which at 1 AU subtends

$$\alpha = \frac{7.3\times10^{5}\ \text{m}}{1.496\times10^{11}\ \text{m}} \approx 4.9\times10^{-6}\ \text{rad}$$

Since $\alpha > \theta$, **yes**, the telescope can resolve the sunspot. (In practice, atmospheric seeing of about $1''$ ≈ $4.8\times10^{-6}$ rad would make it marginal from the ground.)

**(g)** Mass lost in one reaction:

$$\Delta m = 4m_H - m_{He} = 4 \times 1.6725\times10^{-27} - 6.644\times10^{-27} = 4.60\times10^{-29}\ \text{kg}$$

a fraction $f = \Delta m/(4m_H) \approx 6.88\times10^{-3}$ of the hydrogen mass. If 10% of the Sun's mass is burned, the mass turned into energy is

$$\Delta M = 0.10 \times f \times M_\odot = 0.10 \times 6.88\times10^{-3} \times 1.989\times10^{30} \approx 1.37\times10^{27}\ \text{kg}$$

so $E = \Delta M c^2 \approx 1.23\times10^{44}$ J. At the Sun's luminosity,

$$\Delta t = \frac{E}{L_\odot} = \frac{1.23\times10^{44}\ \text{J}}{3.83\times10^{26}\ \text{W}} \approx 3.2\times10^{17}\ \text{s} \approx 10\ \text{billion years}$$`,
      rubric: String.raw`Astro Coach marking guide (25 points; official answers where given):
- (a) Option III: 3 points.
- (b) Both latitudes 26°–29°: 4 points. Official rule: an answer of 25° or 30° earns half credit (2 points).
- (c) Explanation linked to the reversal of the solar magnetic field / sunspot polarities between cycles (Hale's law, solar minimum around 2020): 3 points.
- (d) Spherical law of cosines (and/or sines) applied correctly: 2 points; the three angles ≈ 61.1°, 89.7°, 29.2°: 2 points.
- (e) Area from the spherical excess or the flat-triangle approximation (≈ 8.4 × 10⁻⁷ πR☉²): 2 points.
- (e) Projection factor cos i with i ≈ 52.2° from cos i = cos 7.89° cos 51.74°: 2 points.
- (e) Ratio ≈ 5.1 × 10⁻⁷ (spot/disk) or ≈ 1.9–2.0 × 10⁶ (disk/spot) — either form: 1 point.
- (f) D = 2.6 m and θ ≈ 2.6 × 10⁻⁷ rad: 1 point; angular size of the spot ≈ 5 × 10⁻⁶ rad: 1 point; conclusion "yes, resolvable": 1 point.
- (g) Mass defect per reaction (or 0.7% efficiency): 1 point; energy released by 10% of the Sun's mass: 1 point; lifetime ≈ 10¹⁰ years: 1 point.`,
      solutionSource: "ADAPTED",
      figures: [
        {
          key: "magnetograms",
          file: "magnetograms.png",
          caption: "Figure 2: Solar magnetograms taken at the end of January 2020. The left image was taken three days after the right one.",
          sourcePage: 7,
        },
        { key: "option-1", file: "option-1.png", caption: "Option I", sourcePage: 7 },
        { key: "option-2", file: "option-2.png", caption: "Option II", sourcePage: 8 },
        { key: "option-3", file: "option-3.png", caption: "Option III", sourcePage: 8 },
        { key: "option-4", file: "option-4.png", caption: "Option IV", sourcePage: 8 },
        { key: "option-5", file: "option-5.png", caption: "Option V", sourcePage: 9 },
        {
          key: "normal-activity",
          file: "normal-activity.png",
          caption: "Figure 3: The Sun in normal activity.",
          sourcePage: 9,
        },
      ],
      questionPages: [7, 8, 9, 10],
      solutionPages: [13, 14, 15, 16, 17, 18, 19],
    },
  ],
};
