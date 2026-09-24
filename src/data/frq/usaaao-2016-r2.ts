// USAAAO Round 2 Qualification Exam 2016: 12 short problems (6 points each)
// and 2 long multi-part problems (30 and 37 points), 139 points in total.
//
// USAAAO never published solutions for this exam, so every solution and
// marking guide here is written by Astro Coach (solutionSource ASTRO_COACH).
// Each one was worked through and checked numerically. Where the paper is
// ambiguous, the solution states the assumption it makes.
//
// Transcription notes: obvious typos in the paper are fixed ("gien" ->
// "given", "ate" -> "age"). Long Problem 2(c) prints "Omega_CMB = 0.3",
// which can only mean the matter density; an Astro Coach note in the part
// says so. The star table in Long Problem 1 is retyped as a KaTeX table.
//
// LaTeX is written inside String.raw template literals, so a backslash is
// typed once (\frac, not \\frac).
import type { FrqSeedExam } from "./types";

const YEAR = 2016;
const SHORT = "Short Problems";
const LONG = "Long Problems";

export const usaaao2016R2: FrqSeedExam = {
  competition: "USAAAO",
  year: YEAR,
  examName: "Round 2 Qualification Exam",
  slug: "usaaao-2016-r2",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2017/04/2016_round_2_test.pdf",
  attributionText: `Source: USA Astronomy and Astrophysics Organization (USAAAO), Round 2 Qualification Exam ${YEAR}. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.`,
  questions: [
    // --- Problem 1 ----------------------------------------------------------
    {
      number: "1",
      title: "Comet Orbit",
      section: SHORT,
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Intermediate",
      points: 6,
      text: String.raw`A comet has an orbital period of 300 years. If at perihelion, the comet is 0.05 AU from the Sun, what is the aphelion distance? Determine the orbital velocity of the comet at its closest approach to the Sun.`,
      solution: String.raw`**Semi-major axis.** For an orbit around the Sun, Kepler's third law in years and AU is $P^2 = a^3$:

$$a = P^{2/3} = 300^{2/3} \approx 44.8\ \text{AU}$$

**Aphelion.** Perihelion and aphelion distances add up to the major axis, $r_p + r_a = 2a$:

$$r_a = 2a - r_p = 89.63 - 0.05 \approx 89.6\ \text{AU}$$

**Speed at perihelion.** The vis-viva equation gives the speed anywhere on the orbit:

$$v_p = \sqrt{GM_\odot\left(\frac{2}{r_p} - \frac{1}{a}\right)}$$

With $GM_\odot = 1.327\times10^{20}\ \text{m}^3/\text{s}^2$, $r_p = 0.05\ \text{AU} = 7.48\times10^{9}\ \text{m}$ and $a = 6.70\times10^{12}\ \text{m}$:

$$v_p = \sqrt{1.327\times10^{20}\,(2.674\times10^{-10} - 1.49\times10^{-13})} \approx 1.88\times10^{5}\ \text{m/s} \approx 188\ \text{km/s}$$

(The $1/a$ term barely matters: the orbit is so eccentric that the perihelion speed is almost the escape speed at 0.05 AU.)`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- Kepler's third law used to find a ≈ 44.8 AU: 2 points (1 for the law, 1 for the value).
- Aphelion from r_a = 2a − r_p ≈ 89.6 AU: 1 point.
- Vis-viva equation (or energy + angular momentum conservation) set up correctly for the perihelion speed: 2 points.
- Perihelion speed ≈ 188 km/s (accept 185–191 km/s): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
    },

    // --- Problem 2 ----------------------------------------------------------
    {
      number: "2",
      title: "Resolving an Earth Twin with the E-ELT",
      section: SHORT,
      topic: "Telescopes & Observing",
      topics: ["Telescopes & Observing", "Exoplanets & Life"],
      difficulty: "Intermediate",
      points: 6,
      text: String.raw`What is the maximum distance at which the E-ELT (with a 39.3 m diameter primary mirror) could detect an Earth-like planet around a Sun-like star in the L-band (3.0–4.0 microns)?`,
      solution: String.raw`To detect the planet separately from its star, the telescope must **resolve** them: their angular separation must be at least the diffraction limit.

**Diffraction limit.** At the centre of the L band, $\lambda = 3.5\ \mu\text{m}$:

$$\theta_\text{min} = 1.22\,\frac{\lambda}{D} = 1.22 \times \frac{3.5\times10^{-6}\ \text{m}}{39.3\ \text{m}} = 1.09\times10^{-7}\ \text{rad} = 0.0224''$$

**Angular separation of an Earth twin.** An Earth-like planet orbits a Sun-like star at 1 AU. By the definition of the parsec, 1 AU seen from $d$ parsecs subtends $\theta = 1''/d$.

**Maximum distance.** Setting $\theta = \theta_\text{min}$:

$$d_\text{max} = \frac{1''}{0.0224''} \approx 45\ \text{pc}$$

The answer depends on the wavelength used: $\lambda = 3.0\ \mu\text{m}$ gives about 52 pc and $\lambda = 4.0\ \mu\text{m}$ gives about 39 pc. To resolve the pair across the whole band you need the 4.0 μm limit, about **40 pc**; using the band centre gives about **45 pc**.`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- Recognises that the planet must be angularly resolved from the star (diffraction limit): 1 point.
- Uses θ = 1.22 λ/D (or λ/D) with a wavelength in the L band: 2 points.
- Uses a star–planet separation of 1 AU: 1 point.
- Converts angle to distance correctly (d in pc = 1/θ in arcsec, or d = 1 AU/θ): 1 point.
- Final distance consistent with the chosen wavelength: about 39–52 pc with the 1.22 factor (or 48–64 pc without it): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
    },

    // --- Problem 3 ----------------------------------------------------------
    {
      number: "3",
      title: "Eccentricity from a Radial Velocity Curve",
      section: SHORT,
      topic: "Exoplanets & Life",
      topics: ["Exoplanets & Life", "Gravity & Orbits"],
      difficulty: "Intermediate",
      points: 6,
      text: String.raw`A star displays a variation in radial velocity with a period of 297 days. The radial velocity curve has a maximum of 1289 m/s above baseline and a minimum of 373 m/s below baseline. If the variation is due to the presence of a planet, determine the eccentricity of the planet.`,
      solution: String.raw`The star moves on a small ellipse around the centre of mass, with the same eccentricity as the planet's orbit. Assume the major axis of the orbit lies across our line of sight, in the plane of the sky (the standard assumption when only the extremes of the curve are given). At periastron and apastron the star moves at right angles to the major axis — straight towards or away from us — so the two extremes of the curve are the star's speeds at periastron and apastron (times $\sin i$, which cancels in the ratio):

$$v_p = 1289\ \text{m/s}, \qquad v_a = 373\ \text{m/s}$$

**Angular momentum is conserved**, so $r_p v_p = r_a v_a$. With $r_p = a(1-e)$ and $r_a = a(1+e)$:

$$\frac{v_p}{v_a} = \frac{r_a}{r_p} = \frac{1+e}{1-e}$$

Solving for $e$:

$$e = \frac{v_p - v_a}{v_p + v_a} = \frac{1289 - 373}{1289 + 373} = \frac{916}{1662} \approx 0.55$$

(More generally the curve gives $e\cos\omega = 0.55$, where $\omega$ is the argument of periastron, so 0.55 is also the smallest eccentricity the data allow. The period is not needed.)`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- Identifies the maximum and minimum as the periastron and apastron speeds (or writes v_r = K[cos(ω+f) + e cos ω]): 2 points.
- Uses conservation of angular momentum (or the RV formula) to relate the speeds to e: 2 points.
- Obtains e = (v_max − v_min)/(v_max + v_min): 1 point.
- e ≈ 0.55: 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
    },

    // --- Problem 4 ----------------------------------------------------------
    {
      number: "4",
      title: "Emission and Absorption Nebulae",
      section: SHORT,
      topic: "Light & Spectra",
      topics: ["Light & Spectra", "Stars & Black Holes"],
      difficulty: "Intermediate",
      points: 6,
      text: String.raw`What physical factors cause some nebulae to display dark spectra with bright emission lines while others display bright spectra with dark absorption lines? Explain your reasoning with a diagram of each case for full credit.

(Draw your diagrams on paper and upload a photo with your answer.)`,
      solution: String.raw`Both cases follow **Kirchhoff's laws of spectroscopy**. What matters is the gas's temperature and density, what is lighting it, and where the observer stands.

**Bright emission lines on a dark background (emission nebulae, e.g. H II regions and planetary nebulae).**
- The gas is **thin (low density)** and **hot or excited**.
- It is lit by a very **hot star** (O or early B type, or a white-dwarf core). Its ultraviolet photons ionise the hydrogen.
- When electrons recombine and cascade down, each atom emits photons only at its own wavelengths (for example H$\alpha$ at 656 nm and [O III] at 501 nm).
- We see the gas **against dark sky**, with no bright continuum behind it, so the spectrum is dark with bright lines.
- *Diagram:* a hot star, a cloud of gas beside it, and the observer looking at the cloud **away from** the star's direction. Label: dark continuum, bright lines.

**Bright continuum with dark absorption lines (e.g. reflection nebulae, or cool gas in front of a star).**
- There is a **bright continuous source behind** the gas along our line of sight, and the gas in front of it is **cooler** than that source.
- The cool atoms absorb the continuum at their own wavelengths, leaving dark lines.
- A **reflection nebula** is dust around a star that is *not* hot enough to ionise the gas (later than about B1). The dust scatters the star's light towards us, so we see the star's own absorption-line spectrum, bluer because short wavelengths scatter more.
- *Diagram:* a continuum source (star), a cooler cloud **between** the star and the observer. Label: bright continuum, dark lines at the atoms' wavelengths.

**Summary of the physical factors:** the temperature of the illuminating star (enough ultraviolet to ionise the gas or not); the density and temperature of the gas; dust content (scattering); and the geometry — whether a hotter continuum source lies behind the gas as we see it.`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- Emission case: thin/low-density gas excited or ionised (by UV from a hot star), seen against a dark background, gives emission lines: 2 points.
- Absorption case: cooler gas in front of a hotter continuum source, or dust reflecting the light of a star too cool to ionise the gas (reflection nebula), gives an absorption spectrum: 2 points.
- A clear diagram of each case showing source, gas and observer geometry: 2 points (1 per diagram). If no diagrams are provided, at most 4 points.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
    },

    // --- Problem 5 ----------------------------------------------------------
    {
      number: "5",
      title: "The Equilateral Lagrange Point",
      section: SHORT,
      topic: "Gravity & Orbits",
      difficulty: "Advanced",
      points: 6,
      text: String.raw`Prove that a Lagrange point exists at the vertex of the equilateral triangle whose base is the line between the primary and secondary body.`,
      solution: String.raw`**Set-up.** Let the primary (mass $M_1$) and secondary (mass $M_2$) be a distance $d$ apart, in circular orbits about their centre of mass, which we take as the origin. Their positions $\vec r_1$ and $\vec r_2$ satisfy $M_1\vec r_1 + M_2\vec r_2 = \vec 0$. They orbit with angular velocity $\omega$, where Kepler's third law gives

$$\omega^2 = \frac{G(M_1+M_2)}{d^3}$$

A Lagrange point is a place where a small test mass can stay **fixed relative to both bodies**. So it must move on a circle about the origin with the same $\omega$. That requires the net gravitational acceleration there to equal the centripetal acceleration $-\omega^2\vec r$.

**Gravity at the vertex.** Let $\vec r$ be the third vertex of the equilateral triangle, so it is exactly $d$ from each body. The gravitational acceleration there is

$$\vec a = \frac{GM_1}{d^3}(\vec r_1 - \vec r) + \frac{GM_2}{d^3}(\vec r_2 - \vec r) = \frac{G}{d^3}\Big[(M_1\vec r_1 + M_2\vec r_2) - (M_1+M_2)\vec r\Big]$$

The first bracket is zero, because the origin is the centre of mass. So

$$\vec a = -\frac{G(M_1+M_2)}{d^3}\,\vec r = -\omega^2\,\vec r$$

**Conclusion.** Gravity at the vertex points exactly at the centre of mass, and has exactly the size $\omega^2 r$ needed to keep the test mass on a circle with the same period as the two bodies. In the rotating frame, gravity and the centrifugal force cancel, so the vertex is an equilibrium point — a Lagrange point ($L_4$ or $L_5$). This holds for any mass ratio, because the equal distances make both terms share the factor $1/d^3$.`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- States the condition: in the frame co-rotating with the two bodies, net force (gravity + centrifugal) is zero, i.e. gravity supplies centripetal acceleration ω²r towards the centre of mass: 1 point.
- Uses ω² = G(M₁+M₂)/d³ (Kepler's third law for the two bodies): 1 point.
- Writes the gravitational acceleration at the vertex using the equal distances d to both bodies: 1 point.
- Shows the net gravity points towards the centre of mass (e.g. using M₁r₁ + M₂r₂ = 0, or by resolving components): 2 points.
- Shows its magnitude equals ω²r and concludes it is an equilibrium point for any mass ratio: 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
    },

    // --- Problem 6 ----------------------------------------------------------
    {
      number: "6",
      title: "The Sun in the L Band",
      section: SHORT,
      topic: "Light & Spectra",
      topics: ["Light & Spectra", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 6,
      text: String.raw`The Sun has an effective temperature of 5778 K. If the spectral radiance is given by Planck's Law,

$$B_\lambda(\lambda, T) = \frac{2hc^2}{\lambda^5}\,\frac{1}{e^{hc/\lambda k_B T} - 1},$$

and the Sun's V-band magnitude is $-26.7$, determine the Sun's apparent magnitude in the L band (centred on 3.5 microns).`,
      solution: String.raw`Treat the Sun as a blackbody and assume the V and L magnitude scales have the same zero point per unit wavelength. Then the difference in magnitudes comes only from the ratio of the Planck function at the two wavelengths:

$$m_L - m_V = -2.5\log_{10}\frac{B_\lambda(3.5\ \mu\text{m})}{B_\lambda(0.55\ \mu\text{m})}$$

**Exponents.** With $hc/k_B = 0.014388\ \text{m K}$ and $T = 5778\ \text{K}$:

$$x_V = \frac{hc}{\lambda_V k_B T} = \frac{0.014388}{0.55\times10^{-6} \times 5778} = 4.53, \qquad x_L = \frac{0.014388}{3.5\times10^{-6}\times5778} = 0.711$$

**Ratio.**

$$\frac{B_L}{B_V} = \left(\frac{0.55}{3.5}\right)^5 \frac{e^{4.53}-1}{e^{0.711}-1} = (9.57\times10^{-5}) \times \frac{91.5}{1.037} \approx 8.46\times10^{-3}$$

**Magnitude.**

$$m_L = -26.7 - 2.5\log_{10}(8.46\times10^{-3}) = -26.7 + 5.18 \approx -21.5$$

The Sun is about 5 magnitudes fainter per unit wavelength at 3.5 μm, because 3.5 μm is far out on the Rayleigh–Jeans tail of a 5778 K blackbody. (Real L-band magnitudes are calibrated against Vega, so the observed value differs; this problem uses only the Planck law.)`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- Relates the magnitude difference to the ratio of fluxes (Planck function) at the two wavelengths: 2 points.
- Uses a sensible V-band wavelength (0.54–0.55 μm) and evaluates the Planck function (exponential terms) at both wavelengths correctly: 2 points.
- Correct ratio, about 8.5 × 10⁻³: 1 point.
- m_L ≈ −21.5 (accept −21.3 to −21.7): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
    },

    // --- Problem 7 ----------------------------------------------------------
    {
      number: "7",
      title: "Alpha Centauri A and B",
      section: SHORT,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 6,
      text: String.raw`Alpha Centauri is a binary system located 4.37 ly from Earth with a total apparent magnitude of $-0.27$. If Alpha Centauri A and B have temperatures of 5790 and 5260 K, respectively, and radii of 1.227 and 0.865 solar radii, respectively, find the apparent magnitude of Alpha Centauri A and B individually.`,
      solution: String.raw`**Luminosity ratio.** For blackbodies, $L = 4\pi R^2 \sigma T^4$, so

$$\frac{L_A}{L_B} = \left(\frac{R_A}{R_B}\right)^2 \left(\frac{T_A}{T_B}\right)^4 = \left(\frac{1.227}{0.865}\right)^2 \left(\frac{5790}{5260}\right)^4 = 2.012 \times 1.468 \approx 2.95$$

Both stars are at the same distance, so their fluxes have the same ratio: $F_A = 2.95\,F_B$. (We treat the visual flux as proportional to the bolometric flux, since the two stars have similar temperatures.)

**Split the total flux.** $F_A + F_B = F_\text{tot}$ gives

$$F_A = \frac{2.95}{3.95}F_\text{tot} = 0.747\,F_\text{tot}, \qquad F_B = 0.253\,F_\text{tot}$$

**Magnitudes.** Using $m = m_\text{tot} - 2.5\log_{10}(F/F_\text{tot})$:

$$m_A = -0.27 - 2.5\log_{10}(0.747) = -0.27 + 0.32 \approx +0.05$$

$$m_B = -0.27 - 2.5\log_{10}(0.253) = -0.27 + 1.49 \approx +1.22$$

Check: $m_B - m_A = 2.5\log_{10}(2.95) = 1.17$. The distance of 4.37 ly is not needed. (The measured values are about 0.01 and 1.33.)`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- L ∝ R²T⁴ (Stefan–Boltzmann) used for the ratio: 1 point.
- L_A/L_B ≈ 2.95: 1 point.
- Recognises that the fluxes add (not the magnitudes) and splits the total flux: 2 points.
- m_A ≈ +0.05 (accept 0.0 to 0.1): 1 point.
- m_B ≈ +1.22 (accept 1.15 to 1.3): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
    },

    // --- Problem 8 ----------------------------------------------------------
    {
      number: "8",
      title: "Cosmic-Ray Muons",
      section: SHORT,
      topic: "Energy & Stellar Physics",
      topics: ["Energy & Stellar Physics", "Miscellaneous & Space History"],
      difficulty: "Intermediate",
      points: 6,
      text: String.raw`Muons are subatomic particles similar to electrons, with a mass of 105.7 MeV/$c^2$ and a lifetime of 2.2 microseconds, produced by cosmic ray collisions in the upper atmosphere (approximately 20 km above the Earth's surface). If the muons are produced with a velocity of $0.998c$, and 10,000 muons/m$^2$/minute are observed at sea level, what is the muon flux when the muons are created?`,
      solution: String.raw`**Lorentz factor.**

$$\gamma = \frac{1}{\sqrt{1 - 0.998^2}} = \frac{1}{\sqrt{0.003996}} \approx 15.8$$

**Travel time.** In the Earth's frame the muons cover 20 km (assume they travel straight down) in

$$t = \frac{20\,000\ \text{m}}{0.998 \times 3.00\times10^{8}\ \text{m/s}} = 6.68\times10^{-5}\ \text{s}$$

**Time experienced by the muons.** Their clocks run slow (time dilation), so the proper time is

$$\tau = \frac{t}{\gamma} = \frac{6.68\times10^{-5}}{15.8} = 4.23\times10^{-6}\ \text{s}$$

(Equivalently, in the muons' frame the atmosphere is length-contracted to $20/15.8 = 1.26\ \text{km}$.)

**Decay.** The fraction that survives is

$$\frac{N}{N_0} = e^{-\tau/\tau_0} = e^{-4.23/2.2} = e^{-1.92} \approx 0.146$$

**Flux at creation.**

$$N_0 = \frac{10\,000}{0.146} \approx 6.8\times10^{4}\ \text{muons/m}^2/\text{minute}$$

The mass is not needed. Without relativity only $e^{-30} \approx 10^{-13}$ of the muons would survive, so almost none would reach the ground.`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- γ ≈ 15.8: 1 point.
- Travel time in the Earth frame (≈ 6.7 × 10⁻⁵ s) or the contracted distance (≈ 1.26 km): 1 point.
- Applies time dilation (or length contraction) correctly to get the proper time ≈ 4.2 μs: 1 point.
- Uses exponential decay N = N₀ e^(−τ/τ₀): 2 points.
- Initial flux ≈ 6.8 × 10⁴ muons/m²/min (accept 6.5–7.1 × 10⁴): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [2],
    },

    // --- Problem 9 ----------------------------------------------------------
    {
      number: "9",
      title: "Distance with Interstellar Reddening",
      section: SHORT,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Light & Spectra"],
      difficulty: "Advanced",
      points: 6,
      text: String.raw`A star is observed with UBV magnitudes $m_U = 16.31$, $m_B = 14.52$, $m_V = 13.76$. Spectral analysis gives $M_\text{bol} = 7.31$, $BC = -1.02$, $(U-B)_0 = 1.222$. Determine the distance to the star.`,
      solution: String.raw`**Absolute visual magnitude.** The bolometric correction is defined by $M_\text{bol} = M_V + BC$, so

$$M_V = M_\text{bol} - BC = 7.31 - (-1.02) = 8.33$$

**Reddening.** The observed colour is $U - B = 16.31 - 14.52 = 1.79$, so the colour excess is

$$E(U-B) = (U-B) - (U-B)_0 = 1.79 - 1.222 = 0.568$$

For standard interstellar dust $E(U-B)/E(B-V) \approx 0.72$, so

$$E(B-V) = \frac{0.568}{0.72} = 0.789$$

**Extinction.** With the standard ratio $R_V = A_V/E(B-V) = 3.1$:

$$A_V = 3.1 \times 0.789 = 2.45\ \text{mag}$$

**Distance.** The distance modulus corrected for extinction is $m_V - M_V - A_V = 5\log_{10}(d/10\ \text{pc})$:

$$5\log_{10}\frac{d}{10\ \text{pc}} = 13.76 - 8.33 - 2.45 = 2.98 \quad\Longrightarrow\quad d = 10^{1 + 2.98/5}\ \text{pc} \approx 40\ \text{pc}$$

Ignoring extinction would give about 120 pc — three times too far.`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- M_V = M_bol − BC = 8.33: 1 point.
- Colour excess E(U−B) = 0.568 from the observed and intrinsic colours: 1 point.
- Converts to E(B−V) ≈ 0.79 using E(U−B)/E(B−V) ≈ 0.72: 1 point.
- A_V = R_V E(B−V) ≈ 2.4–2.5 with R_V ≈ 3.1: 1 point.
- Distance modulus including extinction: 1 point.
- d ≈ 40 pc (accept 36–44 pc): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
    },

    // --- Problem 10 ---------------------------------------------------------
    {
      number: "10",
      title: "Eclipse Timing and Stellar Radii",
      section: SHORT,
      topic: "Stars & Black Holes",
      difficulty: "Intermediate",
      points: 6,
      text: String.raw`A binary star system has a primary eclipse lasting 1 hour 19.2 minutes in total, with minimum brightness lasting 44.16 minutes. Determine the ratio of the radius of the larger star to the smaller star.`,
      solution: String.raw`Assume a circular, edge-on orbit, so the small star crosses the face of the large star in a straight line at constant relative speed $v$.

**Contacts.** Label the contacts $t_1$ (first touch), $t_2$ (small star fully in front, minimum begins), $t_3$ (minimum ends) and $t_4$ (last touch).
- From $t_1$ to $t_4$ the small star moves across the whole large star plus its own diameter: $v(t_4 - t_1) = 2(R_L + R_s)$.
- From $t_2$ to $t_3$ (flat minimum) it moves $v(t_3 - t_2) = 2(R_L - R_s)$.

**Ratio.** Dividing,

$$\frac{R_L + R_s}{R_L - R_s} = \frac{t_4 - t_1}{t_3 - t_2} = \frac{79.2\ \text{min}}{44.16\ \text{min}} = 1.794$$

Let $k = R_L/R_s$. Then $\dfrac{k+1}{k-1} = 1.794$, so

$$k = \frac{1.794 + 1}{1.794 - 1} = \frac{2.794}{0.794} \approx 3.52$$

(Equivalently: ingress takes $t_2 - t_1 = (79.2 - 44.16)/2 = 17.52$ min, which is proportional to $2R_s$, while $t_3 - t_1 = 61.68$ min is proportional to $2R_L$, and $61.68/17.52 = 3.52$.)`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- Total eclipse duration corresponds to a distance 2(R_L + R_s): 2 points.
- Duration of minimum corresponds to 2(R_L − R_s) (or ingress time to 2R_s): 2 points.
- Correct algebra for the ratio: 1 point.
- R_L/R_s ≈ 3.52 (accept 3.4–3.6): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
    },

    // --- Problem 11 ---------------------------------------------------------
    {
      number: "11",
      title: "Uneclipsed Magnitude",
      section: SHORT,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Math, Data & Coordinates"],
      difficulty: "Intermediate",
      points: 6,
      text: String.raw`An eclipsing binary system has a magnitude $m_p = 14.2$ during the primary transit and $m_s = 13.7$ during the secondary transit. Find the normal (non-eclipsed) apparent magnitude of the system.`,
      solution: String.raw`**Assumption.** With only these two numbers, the problem can be solved if each eclipse hides one star completely. Then during each eclipse we see just the *other* star:
- At primary eclipse (deeper, fainter) the brighter star is hidden, so we see only the fainter star: $m_2 = 14.2$.
- At secondary eclipse we see only the brighter star: $m_1 = 13.7$.

**Add the fluxes, not the magnitudes.** Out of eclipse both stars are seen:

$$F = F_1 + F_2 \propto 10^{-0.4(13.7)} + 10^{-0.4(14.2)} = 3.311\times10^{-6} + 2.089\times10^{-6} = 5.400\times10^{-6}$$

$$m = -2.5\log_{10}(5.400\times10^{-6}) \approx 13.17$$

**Check:** the system must be brighter (smaller magnitude) than either star alone, and $13.17 < 13.7$. ✓`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- Interprets each eclipse magnitude as the light of the uneclipsed star (one star hidden per eclipse): 2 points.
- Converts magnitudes to fluxes: 1 point.
- Adds the fluxes (not the magnitudes): 2 points.
- m ≈ 13.17 (accept 13.1–13.2): 1 point.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
    },

    // --- Problem 12 ---------------------------------------------------------
    {
      number: "12",
      title: "Transit Depth with Error Bars",
      section: SHORT,
      topic: "Exoplanets & Life",
      topics: ["Exoplanets & Life", "Math, Data & Coordinates"],
      difficulty: "Beginner",
      points: 6,
      text: String.raw`A star has a radius $R_* = 0.897 \pm 0.091\,R_\odot$. An orbiting exoplanet causes a 0.37 percent dip in brightness. Calculate the size of the planet in solar radii, including error bounds.`,
      solution: String.raw`**Transit depth.** During a transit the planet blocks a fraction of the star's disc equal to the ratio of their areas:

$$\frac{\Delta F}{F} = \left(\frac{R_p}{R_*}\right)^2 = 0.0037$$

$$\frac{R_p}{R_*} = \sqrt{0.0037} = 0.0608$$

**Planet radius.**

$$R_p = 0.0608 \times 0.897\,R_\odot = 0.0546\,R_\odot$$

**Error bounds.** Treating the depth as exact, $R_p$ is proportional to $R_*$, so the uncertainty scales the same way:

$$\Delta R_p = 0.0608 \times 0.091\,R_\odot = 0.0055\,R_\odot$$

$$R_p = 0.0546 \pm 0.0055\,R_\odot$$

That is about $6.0 \pm 0.6$ Earth radii, a little over half the size of Jupiter.`,
      rubric: String.raw`Astro Coach marking guide (6 points):
- Transit depth = (R_p/R_*)²: 2 points.
- R_p/R_* ≈ 0.0608: 1 point.
- R_p ≈ 0.0546 R_⊙: 1 point.
- Correct propagation of the error (same fractional error as R_*, ≈ ±0.0055 R_⊙): 2 points.`,
      solutionSource: "ASTRO_COACH",
      questionPages: [3],
    },

    // --- Long Problem 1 -----------------------------------------------------
    {
      number: "L1",
      title: "Five Bright Stars from Jakarta",
      section: LONG,
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Telescopes & Observing"],
      difficulty: "Advanced",
      points: 30,
      text: String.raw`Use the given table to answer the following questions.

$$\begin{array}{|c|c|c|}
\hline
\text{Star} & \text{Right Ascension} & \text{Declination} \\
\hline
\text{Aldebaran} & 4^\text{h}\,36^\text{m} & 16^\circ\,31' \\
\text{Miaplacidus} & 9^\text{h}\,13^\text{m} & -69^\circ\,42' \\
\text{Deneb} & 20^\text{h}\,41^\text{m} & 45^\circ\,20' \\
\text{Regulus} & 10^\text{h}\,08^\text{m} & 12^\circ\,18' \\
\text{Hadar} & 14^\text{h}\,04^\text{m} & -60^\circ\,24' \\
\hline
\end{array}$$`,
      parts: [
        {
          label: "(a)",
          points: 3,
          prompt: String.raw`If the star Deneb crosses your local meridian, how long must you wait until Miaplacidus crosses your local meridian?`,
          solution: String.raw`A star crosses the meridian when the local sidereal time equals its right ascension. After Deneb ($20^\text{h}41^\text{m}$), Miaplacidus ($9^\text{h}13^\text{m}$) transits when the sidereal time has advanced by

$$9^\text{h}13^\text{m} + 24^\text{h} - 20^\text{h}41^\text{m} = 12^\text{h}32^\text{m}\ \text{(sidereal time)}$$

A sidereal hour is shorter than a solar hour by the factor $0.99727$, so in ordinary clock time the wait is

$$12^\text{h}32^\text{m} \times 0.99727 \approx 12^\text{h}30^\text{m}$$`,
          rubric: String.raw`Astro Coach marking guide (3 points):
- Meridian transit happens when LST = RA: 1 point.
- RA difference 12h 32m (taken forwards, not 11h 28m): 1 point.
- Answer 12h 32m sidereal, or ≈ 12h 30m solar (either accepted): 1 point.`,
        },
        {
          label: "(b)",
          points: 4,
          prompt: String.raw`The coordinates of Jakarta, Indonesia, are 6.17 degrees South and 106.82 degrees East. Which of these stars would never be visible to an observer in Jakarta?`,
          solution: String.raw`At latitude $\varphi = -6.17^\circ$, a star never rises if it is within $|\varphi|$ of the **opposite** (north) celestial pole, i.e. if

$$\delta > 90^\circ - 6.17^\circ = 83.83^\circ$$

(Stars with $\delta < -83.83^\circ$ are circumpolar instead.) The most northerly star in the table is Deneb at $+45^\circ20'$, which still reaches a maximum altitude of $90^\circ - 45.33^\circ - 6.17^\circ = 38.5^\circ$ in the north.

So **none** of these stars is permanently invisible from Jakarta; all five rise at some time of the night during the year.`,
          rubric: String.raw`Astro Coach marking guide (4 points):
- Condition for never rising from a southern latitude: δ > 90° − |φ| = 83.83°: 2 points.
- Checks the stars' declinations against the limit (e.g. Deneb at +45° is well below it): 1 point.
- Correct conclusion: none of the stars is never visible: 1 point.`,
        },
        {
          label: "(c)",
          points: 3,
          prompt: String.raw`At the instant Miaplacidus crosses the local meridian of an observer in Jakarta, what is its altitude and azimuth?`,
          solution: String.raw`At upper transit a star's zenith distance is $z = |\varphi - \delta|$. With $\varphi = -6^\circ10.2'$ and $\delta = -69^\circ42'$:

$$z = 69^\circ42' - 6^\circ10.2' = 63^\circ31.8'$$

$$h = 90^\circ - z = 26^\circ28' \approx 26.5^\circ$$

Miaplacidus is south of the zenith (its declination is further south than the observer's latitude), so it transits **due south**: azimuth $180^\circ$ (measured from north through east). Its lower transit, at altitude $69.7^\circ + 6.17^\circ - 90^\circ = -14.1^\circ$, is below the horizon, so the visible crossing is this one.`,
          rubric: String.raw`Astro Coach marking guide (3 points):
- Altitude at transit from h = 90° − |φ − δ|: 1 point.
- Altitude ≈ 26.5° (26°28′): 1 point.
- Azimuth 180° (due south), or 0° if measured from south with that convention stated: 1 point.`,
        },
        {
          label: "(d)",
          points: 3,
          prompt: String.raw`At the instant Miaplacidus crosses the local meridian of an observer in Jakarta, what is the latitude and longitude of an observer who will see Aldebaran at the zenith?`,
          solution: String.raw`**Latitude.** A star is at the zenith when the observer's latitude equals its declination and its hour angle is zero. So the latitude is

$$\varphi = \delta_\text{Ald} = 16^\circ31'\ \text{N}$$

**Longitude.** At that instant the local sidereal time in Jakarta is $\text{RA}_\text{Mia} = 9^\text{h}13^\text{m}$. The new observer needs local sidereal time $\text{RA}_\text{Ald} = 4^\text{h}36^\text{m}$. Sidereal time is $4^\text{h}37^\text{m}$ earlier there, so they are $4^\text{h}37^\text{m} = 69.25^\circ$ **west** of Jakarta:

$$\lambda = 106.82^\circ\ \text{E} - 69.25^\circ = 37.57^\circ\ \text{E} \approx 37^\circ34'\ \text{E}$$

(East Africa, near Kenya.)`,
          rubric: String.raw`Astro Coach marking guide (3 points):
- Latitude = declination of Aldebaran = 16°31′ N: 1 point.
- Uses LST = RA at both places, so the longitude difference is 4h 37m = 69.25° to the west: 1 point.
- Longitude ≈ 37.6° E: 1 point.`,
        },
        {
          label: "(e)",
          points: 6,
          prompt: String.raw`For an observer at Jakarta, how long will Aldebaran be above the horizon, from sunset to sunrise?

*Astro Coach note: no date is given, so read this as how long Aldebaran stays above the horizon from its rising to its setting.*`,
          solution: String.raw`**Hour angle at rising and setting.** At the horizon ($h = 0$), the altitude formula $\sin h = \sin\varphi\sin\delta + \cos\varphi\cos\delta\cos H$ gives

$$\cos H_0 = -\tan\varphi\,\tan\delta = -\tan(-6.17^\circ)\tan(16.52^\circ) = 0.1081 \times 0.2966 = 0.0321$$

$$H_0 = 88.16^\circ = 5^\text{h}52.7^\text{m}$$

**Time above the horizon.** The star is up from hour angle $-H_0$ to $+H_0$:

$$2H_0 = 176.3^\circ = 11^\text{h}45^\text{m}\ \text{(sidereal)} \approx 11^\text{h}43^\text{m}\ \text{(solar)}$$

This is a little under 12 hours, because Aldebaran is in the north while Jakarta is just south of the equator. (Including atmospheric refraction adds about 5 minutes.)`,
          rubric: String.raw`Astro Coach marking guide (6 points):
- Sets altitude = 0 at rising/setting and writes cos H₀ = −tan φ tan δ (with φ negative for Jakarta): 2 points.
- Correct signs and value cos H₀ ≈ 0.032, H₀ ≈ 88.2°: 2 points.
- Time above horizon = 2H₀ converted to time: 1 point.
- ≈ 11h 45m sidereal or ≈ 11h 43m solar (accept 11.6–11.9 h): 1 point.`,
        },
        {
          label: "(f)",
          points: 6,
          prompt: String.raw`What is the angular separation between Regulus and Hadar?`,
          solution: String.raw`Use the spherical law of cosines on the triangle formed by the north celestial pole and the two stars:

$$\cos\theta = \sin\delta_1\sin\delta_2 + \cos\delta_1\cos\delta_2\cos(\Delta\alpha)$$

Here $\delta_1 = 12^\circ18'$, $\delta_2 = -60^\circ24'$ and $\Delta\alpha = 14^\text{h}04^\text{m} - 10^\text{h}08^\text{m} = 3^\text{h}56^\text{m} = 59^\circ$:

$$\cos\theta = (0.2130)(-0.8695) + (0.9770)(0.4939)(0.5150) = -0.1852 + 0.2486 = 0.0633$$

$$\theta \approx 86.4^\circ$$`,
          rubric: String.raw`Astro Coach marking guide (6 points):
- Spherical law of cosines with the pole–star–star triangle (sides 90° − δ, angle Δα): 2 points.
- Δα = 3h 56m = 59°: 1 point.
- Correct substitution including the negative declination of Hadar: 2 points.
- θ ≈ 86.4° (accept 86–87°): 1 point.`,
        },
        {
          label: "(g)",
          points: 5,
          prompt: String.raw`When Aldebaran is rising, what is the altitude of Miaplacidus as seen by an observer in Jakarta?`,
          solution: String.raw`**Sidereal time when Aldebaran rises.** A rising star has hour angle $-H_0$, and from part (e) $H_0 = 5^\text{h}52.7^\text{m}$. Since $\text{LST} = \text{RA} + H$:

$$\text{LST} = 4^\text{h}36^\text{m} - 5^\text{h}52.7^\text{m} = -1^\text{h}16.7^\text{m} = 22^\text{h}43.3^\text{m}$$

**Hour angle of Miaplacidus.**

$$H = 22^\text{h}43.3^\text{m} - 9^\text{h}13^\text{m} = 13^\text{h}30.3^\text{m} \equiv -10^\text{h}29.7^\text{m} = -157.4^\circ$$

**Altitude.**

$$\sin h = \sin\varphi\sin\delta + \cos\varphi\cos\delta\cos H$$

$$= \sin(-6.17^\circ)\sin(-69.70^\circ) + \cos(6.17^\circ)\cos(69.70^\circ)\cos(157.4^\circ) = 0.1008 - 0.3185 = -0.2177$$

$$h \approx -12.6^\circ$$

Miaplacidus is **below the horizon**, about $12.6^\circ$ down, when Aldebaran rises.`,
          rubric: String.raw`Astro Coach marking guide (5 points):
- Local sidereal time at Aldebaran's rising from LST = RA − H₀ (≈ 22h 43m): 2 points.
- Hour angle of Miaplacidus ≈ −157° (or +202.6°): 1 point.
- Altitude formula applied with correct signs: 1 point.
- h ≈ −12.6° (below the horizon; accept −12° to −13.5°): 1 point.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [4],
    },

    // --- Long Problem 2 -----------------------------------------------------
    {
      number: "L2",
      title: "The Cosmic Microwave Background",
      section: LONG,
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Energy & Stellar Physics", "Light & Spectra"],
      difficulty: "Advanced",
      points: 37,
      text: String.raw`The energy density of blackbody radiation is given by $u = 4\sigma T^4/c$, where $\sigma$ is the Stefan–Boltzmann constant. Assume the temperature of the CMB today is $T_\text{CMB} = 2.73\ \text{K}$ and the critical density today is $\rho_\text{crit} = 0.921\times10^{-29}\,h_{70}^2\ \text{g cm}^{-3}$.`,
      parts: [
        {
          label: "(a)",
          points: 6,
          prompt: String.raw`What is the energy density of the CMB? What is the corresponding $\Omega_\text{CMB}$?`,
          solution: String.raw`**Energy density.**

$$u = \frac{4\sigma T^4}{c} = \frac{4 \times 5.67\times10^{-8} \times (2.73)^4}{3.00\times10^{8}} = 4.20\times10^{-14}\ \text{J/m}^3 = 4.20\times10^{-13}\ \text{erg/cm}^3$$

**Equivalent mass density.** Divide by $c^2$:

$$\rho_\text{CMB} = \frac{u}{c^2} = \frac{4.20\times10^{-14}}{9.0\times10^{16}} = 4.68\times10^{-31}\ \text{kg/m}^3 = 4.68\times10^{-34}\ \text{g/cm}^3$$

**Density parameter.**

$$\Omega_\text{CMB} = \frac{\rho_\text{CMB}}{\rho_\text{crit}} = \frac{4.68\times10^{-34}}{0.921\times10^{-29}\,h_{70}^2} \approx 5.1\times10^{-5}\,h_{70}^{-2}$$`,
          rubric: String.raw`Astro Coach marking guide (6 points):
- u = 4σT⁴/c evaluated: ≈ 4.2 × 10⁻¹⁴ J/m³ (4.2 × 10⁻¹³ erg/cm³): 2 points.
- Converts energy density to mass density with ρ = u/c²: 2 points.
- Ω_CMB ≈ 5.1 × 10⁻⁵ (h₇₀ = 1): 2 points.`,
        },
        {
          label: "(b)",
          points: 6,
          prompt: String.raw`What are the typical photon energies of the CMB, and the corresponding number density of photons per cm$^3$?`,
          solution: String.raw`**Typical energy.** The mean photon energy of a blackbody is about $2.7\,k_BT$:

$$\langle E\rangle \approx 2.7\,k_BT = 2.7 \times 8.62\times10^{-5}\ \text{eV/K} \times 2.73\ \text{K} \approx 6.4\times10^{-4}\ \text{eV}$$

(so about $10^{-3}$ eV, or $1.0\times10^{-22}$ J — microwave photons with $\lambda \sim 2$ mm).

**Number density.** Energy density divided by energy per photon:

$$n \approx \frac{u}{\langle E\rangle} = \frac{4.20\times10^{-14}\ \text{J/m}^3}{1.02\times10^{-22}\ \text{J}} = 4.1\times10^{8}\ \text{m}^{-3} \approx 410\ \text{photons/cm}^3$$

(The exact blackbody result, $n = 16\pi\zeta(3)(k_BT/hc)^3$, gives the same 411 cm$^{-3}$.)`,
          rubric: String.raw`Astro Coach marking guide (6 points):
- Typical photon energy of order k_BT: ≈ 2.4 × 10⁻⁴ eV (k_BT) to ≈ 6.6 × 10⁻⁴ eV (2.7–2.8 k_BT) accepted: 3 points.
- Number density as u/⟨E⟩ (or the exact blackbody formula): 2 points.
- n ≈ 400 cm⁻³ (accept 300–1000 cm⁻³ consistent with the chosen energy): 1 point.`,
        },
        {
          label: "(c)",
          points: 7,
          prompt: String.raw`Assuming $\Omega_\text{CMB} = 0.3$, what was the redshift $z_\text{eq}$ of the transition from the radiation-dominated to the matter-dominated universe?

*Astro Coach note: the paper prints $\Omega_\text{CMB} = 0.3$, but this must mean the matter density, $\Omega_m = 0.3$.*`,
          solution: String.raw`As the universe expands by a factor $a = 1/(1+z)$:
- matter density falls as $a^{-3} \propto (1+z)^3$ (the number of particles is diluted by volume);
- radiation density falls as $a^{-4} \propto (1+z)^4$ (diluted by volume, and each photon is also redshifted).

They were equal when

$$\Omega_m(1+z_\text{eq})^3 = \Omega_\text{CMB}(1+z_\text{eq})^4 \quad\Longrightarrow\quad 1+z_\text{eq} = \frac{\Omega_m}{\Omega_\text{CMB}} = \frac{0.3}{5.08\times10^{-5}} \approx 5900$$

$$z_\text{eq} \approx 5.9\times10^{3}$$

(Counting only photons, as here. Including the neutrino background lowers this to about 3500.)`,
          rubric: String.raw`Astro Coach marking guide (7 points):
- Matter density scales as (1+z)³: 2 points.
- Radiation density scales as (1+z)⁴ (with the reason: dilution plus redshift of each photon): 2 points.
- Sets the densities equal to get 1 + z_eq = Ω_m/Ω_CMB: 2 points.
- z_eq ≈ 5900 (consistent with the Ω_CMB from part (a)): 1 point.`,
        },
        {
          label: "(d)",
          points: 8,
          prompt: String.raw`Assuming the age of the universe at the epoch of decoupling to be 380,000 years, and knowing its redshift, estimate the age at $z_\text{eq}$. You can assume the expansion laws appropriate for an $\Omega = 1$ universe.`,
          solution: String.raw`**Redshift of decoupling.** Hydrogen became neutral and the photons decoupled at $T \approx 3000\ \text{K}$. Since $T \propto (1+z)$:

$$1 + z_\text{dec} = \frac{3000\ \text{K}}{2.73\ \text{K}} \approx 1100$$

**Expansion law.** Between $z_\text{eq}$ and decoupling the universe is matter-dominated. For a flat ($\Omega = 1$) matter universe $a \propto t^{2/3}$, so $t \propto a^{3/2} \propto (1+z)^{-3/2}$.

**Age at equality.**

$$t_\text{eq} = t_\text{dec}\left(\frac{1+z_\text{dec}}{1+z_\text{eq}}\right)^{3/2} = 380\,000\ \text{yr} \times \left(\frac{1100}{5900}\right)^{3/2} \approx 380\,000 \times 0.080 \approx 3\times10^{4}\ \text{yr}$$`,
          rubric: String.raw`Astro Coach marking guide (8 points):
- Decoupling redshift z ≈ 1100 (from T ≈ 3000 K and T ∝ 1+z, or quoted): 2 points.
- Matter-dominated flat universe: a ∝ t^(2/3): 2 points.
- Therefore t ∝ (1+z)^(−3/2) and the ratio set up correctly between the two epochs: 2 points.
- t_eq ≈ 3 × 10⁴ yr (accept 2–5 × 10⁴ yr, consistent with their z_eq): 2 points.`,
        },
        {
          label: "(e)",
          points: 5,
          prompt: String.raw`How old was the universe at the time when the temperature was comparable to the temperature in the Solar core, $T_c = 1.5\times10^{7}\ \text{K}$?`,
          solution: String.raw`**Redshift.** $1+z = T/T_0 = 1.5\times10^{7}/2.73 = 5.5\times10^{6}$, far before $z_\text{eq}$, so the universe was **radiation-dominated**.

**Expansion law.** In a radiation-dominated flat universe $a \propto t^{1/2}$, so $t \propto a^2 \propto T^{-2}$.

**Age.** Scale from matter–radiation equality:

$$t = t_\text{eq}\left(\frac{1+z_\text{eq}}{1+z}\right)^2 = 3.0\times10^{4}\ \text{yr} \times \left(\frac{5900}{5.5\times10^{6}}\right)^2 \approx 0.035\ \text{yr} \approx 1\times10^{6}\ \text{s}$$

About **two weeks** after the Big Bang. (The standard radiation-era formula $t \approx 1\ \text{s}\times(10^{10}\ \text{K}/T)^2$ gives $4\times10^{5}$ s, about 5 days — the same order of magnitude; the difference comes from the simple matching at $z_\text{eq}$.)`,
          rubric: String.raw`Astro Coach marking guide (5 points):
- Recognises the epoch is radiation-dominated (T ∝ 1+z gives z ≈ 5.5 × 10⁶ > z_eq): 1 point.
- Radiation era: a ∝ t^(1/2), so t ∝ T⁻²: 2 points.
- Age of order days to weeks: ≈ 10⁶ s (accept 3 × 10⁵ to 2 × 10⁶ s): 2 points.`,
        },
        {
          label: "(f)",
          points: 5,
          prompt: String.raw`What were typical photon energies then?`,
          solution: String.raw`Photon energies scale with temperature:

$$k_BT = 8.62\times10^{-5}\ \text{eV/K} \times 1.5\times10^{7}\ \text{K} \approx 1.3\ \text{keV}$$

so the typical (mean) photon energy was $\approx 2.7\,k_BT \approx 3.5\ \text{keV}$ — **X-rays**. Equivalently, the CMB photon energy from part (b) scaled up by $1+z = 5.5\times10^{6}$: $6.4\times10^{-4}\ \text{eV}\times5.5\times10^{6} \approx 3.5\ \text{keV}$.`,
          rubric: String.raw`Astro Coach marking guide (5 points):
- Photon energy ∝ T (or ∝ 1+z): 2 points.
- Typical energy ≈ 1–4 keV (k_BT ≈ 1.3 keV, 2.7k_BT ≈ 3.5 keV): 2 points.
- Identifies these as X-ray photons: 1 point.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [4, 5],
    },
  ],
};
