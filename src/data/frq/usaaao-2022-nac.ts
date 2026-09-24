// USAAAO National Astronomy Competition 2022: 9 free-response questions,
// 200 points in total, in three sections (Short, Medium, Long).
//
// Numbering restarts in each section of the paper, so question numbers
// here carry a section letter: S1–S5 (Short), M1–M2 (Medium), L1–L2
// (Long). Questions that print one total only (S5, M2) are graded as a
// whole with (a), (b)… kept inline in the text; the others have a part
// for every separately-pointed sub-question.
//
// Sundial I (a) and (b) ask for a match and a single value with "no
// explanation needed", but they sit inside a long worked question that is
// AI-graded anyway, so they stay WORKED rather than instant-check blanks.
//
// The official solutions give worked answers but no marking scheme, so
// every rubric below is an "Astro Coach marking guide" built from the
// official solution. Changes to the official text are noted where made.
//
// Text is written with String.raw so LaTeX needs single backslashes.
import type { FrqSeedExam } from "./types";

const YEAR = 2022;

export const usaaao2022Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: YEAR,
  examName: "National Astronomy Competition",
  slug: "usaaao-2022-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2022/03/usaaao_second_exam_2022_problems.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2022/03/usaaao_second_exam_2022_solutions.pdf",
  attributionText: `Source: USA Astronomy and Astrophysics Organization (USAAAO), National Astronomy Competition ${YEAR}. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.`,
  questions: [
    // =======================================================================
    // Short Questions (10 points each)
    // =======================================================================

    // --- S1: Redshifted Lyman-alpha ----------------------------------------
    {
      number: "S1",
      title: "A Redshifted Lyman-α Line",
      section: "Short Questions",
      topic: "Light & Spectra",
      topics: ["Light & Spectra", "Galaxies & Universe"],
      difficulty: "Beginner",
      points: 10,
      text: String.raw`The energies of an electron in a hydrogen atom are given by

$$E_n = -\frac{13.606\ \text{eV}}{n^2}$$

where $n = 1, 2, 3, \dots$ represents the principal quantum number of the shell in which the electron is located.

The Ly-$\alpha$ spectral line is produced when an electron transitions from the $n = 2$ to the $n = 1$ energy level. Astronomers observe that the wavelength of the Ly-$\alpha$ line in a distant receding galaxy's emission spectrum is $\Delta\lambda = 7.13\ \text{nm}$ greater than the value measured in a lab.

Calculate the object's approximate distance from us in Mpc (assuming Hubble's constant $H_0 = 70\ \text{km/s/Mpc}$).`,
      solution: String.raw`To find the wavelength of the spectral line, we note that

$$\frac{hc}{\lambda} = E_2 - E_1 \quad\Longrightarrow\quad \lambda = \frac{hc}{E_2 - E_1} = \frac{1239.8\ \text{eV nm}}{13.606\left(1 - \frac{1}{4}\right)\ \text{eV}} \approx 121.52\ \text{nm}$$

Answers within $\pm0.5$ nm of this result are accepted due to potential differences in rounding.

To calculate the recessional velocity, we use the fact that $\Delta\lambda$ results from the redshift due to motion away from us:

$$v_r = cz = \frac{\Delta\lambda}{\lambda}c \approx 17600\ \text{km/s}$$

To calculate the distance to this object, we use Hubble's law:

$$d = \frac{v_r}{H_0} \approx 251\ \text{Mpc}$$`,
      rubric: String.raw`Astro Coach marking guide (10 points), based on the official solution:
- Photon energy equals E₂ − E₁ = 10.2 eV (with hc/λ): 2 points.
- Rest wavelength λ ≈ 121.5 nm (±0.5 nm): 2 points.
- Redshift z = Δλ/λ and v = cz: 2 points.
- Recession velocity ≈ 17,600 km/s: 1 point.
- Hubble's law d = v/H₀: 2 points.
- Distance ≈ 251 Mpc (245–255 Mpc): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- S2: Mass function of an eclipsing binary --------------------------
    {
      number: "S2",
      title: "Mass Function of an Eclipsing Binary",
      section: "Short Questions",
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Gravity & Orbits"],
      difficulty: "Intermediate",
      points: 10,
      text: String.raw`The following expression describes the mass function of a binary system:

$$f(M_1, M_2) = \frac{M_2^3\sin^3(i)}{(M_1 + M_2)^2}$$

- $M_1$: Mass of star 1.
- $M_2$: Mass of star 2.
- $i$: Inclination of the orbit.

Consider an **eclipsing** binary system with a period of 70 years and a total semi-major axis of 36 AU. In this system, the semi-major axis of star 1 is two times larger than the semi-major axis of star 2.

Estimate the mass function of the binary system in terms of solar masses.`,
      solution: String.raw`The first step is to calculate the total mass of the system with Kepler's third law (years, AU and solar masses):

$$\frac{T^2}{a^3} = \frac{1}{M_{\text{total}}} \quad\Longrightarrow\quad M_{\text{total}} = \frac{36^3}{70^2} = 9.5\ M_\odot$$

The stars orbit their common centre of mass, so $M_1a_1 = M_2a_2$. Since the semi-major axis of star 1 is two times larger than that of star 2, the mass of star 2 must be two times larger than the mass of star 1:

$$M_1 + M_2 = M_{\text{total}} \quad\Longrightarrow\quad \frac{1}{2}M_2 + M_2 = 9.5\ M_\odot \quad\Longrightarrow\quad M_2 = 6.3\ M_\odot$$

Since the binary system is eclipsing, the inclination must be extremely close to $90^\circ$, so using this value gives a very accurate mass function:

$$f(M_1, M_2) = \frac{M_2^3\sin^3(i)}{(M_1 + M_2)^2} = \frac{6.3^3\sin^3(90^\circ)}{9.5^2} = 2.8\ M_\odot$$`,
      rubric: String.raw`Astro Coach marking guide (10 points), based on the official solution:
- Kepler's third law in solar units, M_total = a³/T²: 2 points.
- M_total ≈ 9.5 M☉: 1 point.
- Centre-of-mass relation M₁a₁ = M₂a₂, so M₂ = 2M₁: 2 points.
- M₂ ≈ 6.3 M☉: 1 point.
- Eclipsing ⇒ i ≈ 90° (sin i ≈ 1): 2 points.
- Mass function ≈ 2.8 M☉ (2.7–2.9): 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2, 3],
    },

    // --- S3: Transit depth --------------------------------------------------
    {
      number: "S3",
      title: "Radius of a Transiting Exoplanet",
      section: "Short Questions",
      topic: "Exoplanets & Life",
      difficulty: "Beginner",
      points: 10,
      text: String.raw`Consider a star $A$ (apparent magnitude $m_A = 10.9$, radius $R_A = 0.42R_\odot$). A periodic transiting event is observed to have a decrease the collected flux by 0.07 %. If this event was caused by a transiting exoplanet around star $A$, what would be the radius of that exoplanet in Earth radii?`,
      solution: String.raw`The depth of a transit $\delta$ equals the ratio of the squared planet and star radii, $\delta = \dfrac{R_p^2}{R_*^2}$ (the fraction of the star's disc that the planet blocks). So

$$R_p = \sqrt{\delta}\times R_* = \sqrt{0.0007}\times0.42R_\odot = 1.212R_\oplus$$

(using $R_\odot \approx 109R_\oplus$). The apparent magnitude is not needed.`,
      rubric: String.raw`Astro Coach marking guide (10 points), based on the official solution:
- Transit depth = (R_p/R_*)²: 4 points.
- Uses δ = 0.0007 (not 0.07): 2 points.
- R_p = √δ · R_* ≈ 0.0111 R☉: 2 points.
- Converts to ≈ 1.2 R⊕ (1.15–1.25): 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [3],
    },

    // --- S4: Posidonius and Canopus ----------------------------------------
    {
      number: "S4",
      title: "Posidonius Measures the Earth",
      section: "Short Questions",
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Miscellaneous & Space History"],
      difficulty: "Beginner",
      points: 10,
      text: String.raw`Posidonious from the first century BC estimated the circumference of the Earth by observing the rising and setting of the star Canopus. We will retrace his calculations in this problem. He observed Canopus on but never above the horizon at Rhodes. On the other hand, Canopus rose to a maximum of about $7.5^\circ$ above the horizon at Alexandria. Assume Rhodes and Alexandria have the same longitude and the distance between the two cities is 800 km. Given only this information, estimate the radius of the Earth. How far off is it from the actual value of 6400 km. Justify your answer.`,
      solution: String.raw`Given the simplifying assumption that the two cities are on the same longitude, the difference of $7.5^\circ$ in the maximum (culmination) altitude of Canopus translates directly into a latitude difference of $7.5^\circ$ between the two cities: the maximum altitude of a southern star is $90^\circ - \phi - |\delta|$, so it changes one-for-one with latitude.

The 800 km between the cities is therefore $7.5/360$ of the Earth's circumference:

$$d = \frac{7.5}{360}\,2\pi R_E \quad\Longrightarrow\quad R_E = \frac{360 \times 800\ \text{km}}{2\pi \times 7.5} = 6111\ \text{km}$$

This is a difference of about 5% from the actual 6400 km.`,
      rubric: String.raw`Astro Coach marking guide (10 points), based on the official solution:
- Explains that the difference in Canopus's maximum altitude equals the difference in latitude (same longitude): 4 points.
- Arc-length relation d = (7.5/360) · 2πR_E: 3 points.
- R_E ≈ 6100 km (6050–6150): 2 points.
- Difference from 6400 km ≈ 5% (about 300 km): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [4],
    },

    // --- S5: Energy of a hydrogen-like orbit -------------------------------
    {
      number: "S5",
      title: "Energy and Angular Momentum of an Orbiting Electron",
      section: "Short Questions",
      topic: "Energy & Stellar Physics",
      topics: ["Energy & Stellar Physics", "Light & Spectra"],
      difficulty: "Intermediate",
      points: 10,
      text: String.raw`There is an electron with its mass $m_e$ that orbits a proton with mass $m_p$ at a radius $r$. If we only assume the Coloumbic attraction,

**(a)** Write an expression of the total energy and the orbital momentum of the electron.

**(b)** Rewrite the expression of the total energy $E$ in terms of the orbital momentum $L$, both from the part(a).

Use $e$ for the electric charge quantity and assume that $m_p$ is incomparably greater than $m_e$ ($m_p \gg m_e$).`,
      solution: String.raw`**(a)** The potential energy of the electron is

$$V = -\frac{e^2}{4\pi\epsilon_0 r}$$

and the kinetic energy is $K = \frac{1}{2}m_ev^2$. Since the Coulomb force keeps the electron in a circular orbit, $\frac{m_ev^2}{r} = \frac{e^2}{4\pi\epsilon_0 r^2}$, so

$$\frac{1}{2}m_ev^2 = \frac{1}{2}\frac{e^2}{4\pi\epsilon_0 r}$$

Therefore

$$E_{\text{Total}} = V + K = -\frac{e^2}{4\pi\epsilon_0 r} + \frac{e^2}{8\pi\epsilon_0 r} = -\frac{e^2}{8\pi\epsilon_0 r}$$

The orbital (angular) momentum is

$$L = m_evr$$

**(b)** From above, $m_ev^2 = \dfrac{e^2}{4\pi\epsilon_0 r}$. Combining with $L = m_evr$ (so $v = L/(m_er)$):

$$r = \frac{4\pi\epsilon_0L^2}{e^2m_e}$$

Therefore

$$E = -\frac{e^2}{8\pi\epsilon_0}\cdot\frac{e^2m_e}{4\pi\epsilon_0L^2} = -\frac{e^4m_e}{32\pi^2\epsilon_0^2L^2}$$`,
      rubric: String.raw`Astro Coach marking guide (10 points), based on the official solution:
- (a) Coulomb potential energy V = −e²/(4πε₀r): 1 point.
- (a) Uses the circular-orbit force balance m_ev²/r = e²/(4πε₀r²) to get the kinetic energy: 2 points.
- (a) E = −e²/(8πε₀r): 2 points.
- (a) L = m_evr: 1 point.
- (b) Eliminates v and r to get r = 4πε₀L²/(e²m_e): 2 points.
- (b) E = −m_e e⁴/(32π²ε₀²L²): 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [4, 5],
    },

    // =======================================================================
    // Medium Questions (30 points each)
    // =======================================================================

    // --- M1: Rømer and the speed of light ----------------------------------
    {
      number: "M1",
      title: "The speed of light",
      section: "Medium Questions",
      topic: "Miscellaneous & Space History",
      topics: ["Miscellaneous & Space History", "Light & Spectra", "Solar System"],
      difficulty: "Intermediate",
      points: 30,
      text: String.raw`The year is 1671 and you are astronomer Ole Rømer, measuring the period of Io's orbit around Jupiter by timing the passages of Io into or out of Jupiter's shadow.

In December of 1671, Jupiter is at its first quadrature and you observe eclipses at the following times:
- December 18 at 06:17:48
- December 20 at 00:46:09
- December 21 at 19:14:30

In June of 1672, Jupiter is at its second quadrature and you observe eclipses at the following times:
- June 19 at 08:42:50
- June 21 at 03:11:30
- June 22 at 21:40:10`,
      parts: [
        {
          label: "(a)",
          points: 2,
          prompt: String.raw`What is the interval between eclipses of Io as measured in December 1671, and what is it in June 1672?`,
          solution: String.raw`In December 1671, the observed interval between successive eclipses is **42 hours, 28 minutes and 21 seconds**.

In June 1672, the observed interval between successive eclipses is **42 hours, 28 minutes and 40 seconds**.

Notice that the periods differ by 19 seconds.`,
          rubric: String.raw`Astro Coach marking guide (2 points): December interval 42 h 28 min 21 s (1 point); June interval 42 h 28 min 40 s (1 point).`,
        },
        {
          label: "(b)",
          points: 7,
          prompt: String.raw`These orbital periods are slightly different. Rømer hypothesized that this is evidence that light has a finite speed. Explain why he thought this.`,
          solution: String.raw`If light has a finite speed, we don't observe the eclipses of Io until some time after they actually happen: there is a light delay time equal to the Earth–Jupiter distance divided by $c$. When the distance between Jupiter and Earth is decreasing (first quadrature, December), the light delay time decreases with each eclipse, so the time between eclipses seems shorter. Similarly, when the distance between Jupiter and Earth is increasing (second quadrature, June), the time between eclipses appears longer.

This is very similar to the modern concept of the Doppler effect, though Rømer didn't call it that at the time.`,
          rubric: String.raw`Astro Coach marking guide (7 points): with finite c, each eclipse is seen after a light-travel delay proportional to the Earth–Jupiter distance (3 points); decreasing distance (December, Earth approaching) makes the observed interval shorter (2 points); increasing distance (June, Earth receding) makes it longer (2 points).`,
        },
        {
          label: "(c)",
          points: 15,
          prompt: String.raw`Calculate the speed of light from these observations, and what you know about the orbits of Earth and Jupiter. Explain any simplifying assumptions that you make. How close is this speed of light to the correct value? (Hint: at second quadrature Earth is moving directly away from Jupiter, and at first quadrature Earth is moving directly towards Jupiter.)`,
          solution: String.raw`Let the true orbital period be $p$ and the radial velocity of Jupiter relative to Earth be $v$. If the speed of light is $c$, the light delay changes by $pv/c$ between successive eclipses, so the observed period is longer than the true period by

$$\Delta p = \frac{pv}{c} \quad\Longrightarrow\quad c = \frac{pv}{\Delta p}$$

**Assumptions.** Jupiter's orbital velocity is somewhat slower than Earth's and almost entirely tangential rather than radial, so we take the radial velocity of Jupiter relative to Earth at first and second quadrature to be just the Earth's orbital velocity (towards Jupiter at first quadrature, away at second quadrature). From Kepler's third law,

$$v = \sqrt{\frac{GM_{\text{sun}}}{a}} = 30\ \text{km/s}$$

The true orbital period of Io is roughly the average of the two measured periods, $p = 42{:}28{:}30.5 = 152910.5\ \text{s}$, and each measured period differs from it by $\Delta p = 9.5\ \text{s}$. Plugging in:

$$c = \frac{152910.5\ \text{s} \times 3.0\times10^{4}\ \text{m/s}}{9.5\ \text{s}} \approx 4.8\times10^{8}\ \text{m/s}$$

Today we know that this is about 60% larger than the true value ($3.0\times10^{8}$ m/s), which is not bad given all the approximations that were made (and that the times are only given to the nearest second).`,
          rubric: String.raw`Astro Coach marking guide (15 points): relation Δp = pv/c (or equivalent light-delay argument) (4 points); assumption that the relative radial velocity at quadrature is Earth's orbital speed, Jupiter's motion neglected (3 points); v ≈ 30 km/s (2 points); true period ≈ average of the two, p ≈ 42 h 28 min 30.5 s (2 points); Δp = 9.5 s, i.e. half the 19 s difference (2 points); c ≈ 4.8 × 10⁸ m/s (1 point); comparison: about 60% too large (1 point).`,
        },
        {
          label: "(d)",
          points: 6,
          prompt: String.raw`In 1672, Rømer did not have an accurate measurement of the distance from the Earth to the Sun. Write the speed of light as he would have had to write it, in terms of the unknown Earth-Sun distance $a$.

(Be careful: Rømer also did not know the gravitational constant or the mass of the sun!)`,
          solution: String.raw`Carrying out the same derivation as in part (c) but leaving $a$ unknown gives

$$c = \frac{p\sqrt{GM_{\text{sun}}}}{\Delta p}\,a^{-1/2}$$

But this depends on $G$ and $M_{\text{sun}}$, which Rømer would not have known. He did know that the Earth's orbital period, $T = \dfrac{2\pi a^{3/2}}{\sqrt{GM_{\text{sun}}}}$, is one year. So instead write

$$v = \frac{2\pi a}{1\ \text{year}} \quad\Longrightarrow\quad c = \frac{2\pi p}{(1\ \text{year})\,\Delta p}\,a = \frac{a}{5\ \text{min}\ 12\ \text{s}}$$

This is equivalent to saying that it takes 5 minutes and 12 seconds for light to travel from the Sun to the Earth. It can be argued that Rømer was not really measuring the speed of light, but the light travel time from the Sun to the Earth. (The first accurate determination of the Earth–Sun distance was made a year later by Cassini.)`,
          rubric: String.raw`Astro Coach marking guide (6 points): recognises that v must be written without G and M_sun (1 point); v = 2πa / (1 year) (2 points); c = 2πp a / ((1 year) Δp) (2 points); evaluates to c ≈ a / (5 min 12 s), i.e. light takes about 5 min 12 s to cross 1 AU (1 point).`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [6, 7],
    },

    // --- M2: Meteorite hits a space station --------------------------------
    {
      number: "M2",
      title: "Meteorite Meets Space Station",
      section: "Medium Questions",
      topic: "Gravity & Orbits",
      difficulty: "Advanced",
      points: 30,
      text: String.raw`A meteorite that is radially approaching the Earth collides with a space station that revolves around the Earth in a circular orbit with radius $R$. For all parts of the question, express your results in terms of the mass $M$ of the Earth, the gravitational constant $G$, the mass $m_1$ of the meteorite, and the mass $m_2$ of the space station.

**(a)** Assume that, after the impact, the meteorite and the space station form a conglomerate that moves in a closed orbit which approaches the center of the Earth at a minimum distance $R/2$. State what the shape of the orbit of the conglomerate is and determine:

(i) the speed of the meteorite just before the collision,
(ii) the minimum and maximum speeds of the conglomerate,
(iii) the maximum distance of the conglomerate from the center of the Earth.

Determine the condition that $m_1$ and $m_2$ must obey so that the aforementioned scenario is possible.

**(b)** Determine the minimum speed that the meteorite should have just before the collision so that the conglomerate moves in an open orbit after the impact. For this minimum value of the speed of the meteorite, state what the shape of the orbit of the conglomerate would be and determine

(i) the maximum speed of the conglomerate,
(ii) its minimum distance from the center of the Earth,
(iii) the angle traversed by the orbital radius from the moment of the collision until the moment when the conglomerate approaches the center of the Earth to minimum distance.`,
      solution: String.raw`**(a)** The orbit of the conglomerate after the collision is an **ellipse**.

Conservation of momentum in the collision gives the radial and tangential components of the conglomerate's velocity:

$$v_r = \frac{m_1}{m_1 + m_2}v, \qquad v_t = \frac{m_2}{m_1 + m_2}\sqrt{\frac{GM}{R}}$$

where $v$ is the meteorite's speed just before the collision (the station moved tangentially at $\sqrt{GM/R}$, the meteorite radially).

At perigee ($r = R/2$) the speed is maximum and perpendicular to the radius, so conservation of angular momentum gives

$$\frac{m_2}{m_1 + m_2}\sqrt{\frac{GM}{R}}\,R = v_{max}\frac{R}{2} \quad\Longrightarrow\quad v_{max} = \frac{2m_2}{m_1 + m_2}\sqrt{\frac{GM}{R}}$$

Conservation of mechanical energy per unit mass:

$$\frac{1}{2}v_{max}^2 - \frac{GM}{R/2} = \frac{1}{2}\left(v_r^2 + v_t^2\right) - \frac{GM}{R}$$

Combining (multiplying by 2):

$$\left(\frac{2m_2}{m_1 + m_2}\right)^2\frac{GM}{R} - \frac{4GM}{R} = \left(\frac{m_1}{m_1 + m_2}\right)^2v^2 + \left(\frac{m_2}{m_1 + m_2}\right)^2\frac{GM}{R} - \frac{2GM}{R}$$

which yields **(i)**

$$v = \frac{\sqrt{3m_2^2 - 2(m_1 + m_2)^2}}{m_1}\sqrt{\frac{GM}{R}}$$

provided that

$$\sqrt{3}\,m_2 > \sqrt{2}\,(m_1 + m_2) \quad\Longleftrightarrow\quad m_1 < \left(\sqrt{\frac{3}{2}} - 1\right)m_2 \approx 0.22\,m_2$$

This is the required condition on $m_1$ and $m_2$.

The semi-major axis follows from vis-viva at perigee:

$$\frac{1}{a} = \frac{2}{r_{min}} - \frac{v_{max}^2}{GM} = \frac{4}{R}\left(1 - \frac{m_2^2}{(m_1 + m_2)^2}\right) \quad\Longleftrightarrow\quad a = \frac{R}{4}\,\frac{(m_1 + m_2)^2}{(m_1 + m_2)^2 - m_2^2}$$

With eccentricity $e$, $a(1 - e) = R/2$, so **(iii)**

$$r_{max} = a(1 + e) = 2a - \frac{R}{2} = \frac{R}{2}\,\frac{m_2^2}{(m_1 + m_2)^2 - m_2^2}$$

and conservation of angular momentum gives the minimum speed, **(ii)**:

$$v_{min} = v_{max}\frac{r_{min}}{r_{max}} = \frac{2m_1(m_1 + 2m_2)}{m_2(m_1 + m_2)}\sqrt{\frac{GM}{R}}, \qquad v_{max} = \frac{2m_2}{m_1 + m_2}\sqrt{\frac{GM}{R}}$$

**(b)** The orbit of the conglomerate will be a **parabola** (the boundary between closed and open orbits, zero total energy). This happens when

$$v_r^2 + v_t^2 = \frac{2GM}{R} \quad\Longleftrightarrow\quad v = \frac{\sqrt{2(m_1 + m_2)^2 - m_2^2}}{m_1}\sqrt{\frac{GM}{R}}$$

which is the minimum speed of the meteorite. Conservation of energy gives $v_{max}^2 = \dfrac{2GM}{r_{min}}$, while conservation of angular momentum gives

$$v_{max}r_{min} = \frac{m_2}{m_1 + m_2}\sqrt{\frac{GM}{R}}\,R$$

Therefore **(i)** and **(ii)**:

$$v_{max} = \frac{2(m_1 + m_2)}{m_2}\sqrt{\frac{GM}{R}}, \qquad r_{min} = \frac{m_2^2}{2(m_1 + m_2)^2}R$$

**(iii)** From the equation of a parabola in polar coordinates (angle $\theta$ measured from perigee), $r = \dfrac{2r_{min}}{1 + \cos\theta}$. At the collision $r = R$:

$$\frac{1 + \cos\theta}{2} = \cos^2\frac{\theta}{2} = \frac{r_{min}}{R} \quad\Longleftrightarrow\quad \theta = 2\arccos\sqrt{\frac{r_{min}}{R}} = 2\arccos\frac{m_2}{\sqrt{2}\,(m_1 + m_2)}$$

Since the conglomerate starts with an inward radial velocity, it heads straight to perigee, so this is the angle traversed.`,
      rubric: String.raw`Astro Coach marking guide (30 points), based on the official solution:
- (a) Shape: ellipse: 1 point.
- (a) Momentum conservation giving v_r = m₁v/(m₁+m₂) and v_t = m₂√(GM/R)/(m₁+m₂): 3 points.
- (a) Angular momentum conservation to perigee R/2, v_max = 2m₂√(GM/R)/(m₁+m₂): 3 points.
- (a)(i) Energy conservation and v = √(3m₂² − 2(m₁+m₂)²)/m₁ · √(GM/R): 4 points.
- (a) Condition m₁ < (√(3/2) − 1) m₂: 2 points.
- (a)(iii) r_max = R m₂² / (2((m₁+m₂)² − m₂²)) (via semi-major axis or directly): 3 points.
- (a)(ii) v_min = 2m₁(m₁+2m₂)√(GM/R) / (m₂(m₁+m₂)) together with v_max: 2 points.
- (b) Shape: parabola (zero total energy): 1 point.
- (b) Minimum meteorite speed v = √(2(m₁+m₂)² − m₂²)/m₁ · √(GM/R): 3 points.
- (b)(i) v_max = 2(m₁+m₂)√(GM/R)/m₂: 2 points.
- (b)(ii) r_min = m₂²R / (2(m₁+m₂)²): 2 points.
- (b)(iii) θ = 2 arccos(m₂ / (√2 (m₁+m₂))) from the polar equation of the parabola: 4 points.`,
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [7, 8, 9],
    },

    // =======================================================================
    // Long Questions (45 points each)
    // =======================================================================

    // --- L1: The Curious Orbit of James Webb -------------------------------
    {
      number: "L1",
      title: "The Curious Orbit of James Webb",
      section: "Long Questions",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Telescopes & Observing"],
      difficulty: "Advanced",
      points: 45,
      text: String.raw`For his upcoming Astrophysics Club presentation, Will researches the recently launched James Webb Space Telescope (JWST), the next-generation telescope designed as the successor of the Hubble Space Telescope. The largest space telescope ever built, the JWST uses its large collecting area to observe in the infrared spectrum. It orbits around the $L_2$ Lagrange point of the Earth-Sun system. Lagrange points are equilibrium points for a small body in the Earth-Sun system; $L_2$ is the point on the Earth-Sun line located beyond Earth's orbit.

In the problem, let $M$ and $m$ be the mass of the Sun and Earth, respectively, with $M \gg m$. Additionally, consider the Sun's and Earth's radius to be $R_\odot$ and $R_\oplus$ respectively, and the Earth to orbit the Sun in a perfectly circular orbit of radius $R$.`,
      parts: [
        {
          label: "(a)",
          points: 2,
          prompt: String.raw`The orbit of JWST was designed to circle around $L_2$ in a big enough orbit to avoid Earth's shadow. What is the benefit of i) being at a Lagrangian point and ii) avoiding Earth's shadow?`,
          solution: String.raw`i) A Lagrangian point is stationary with respect to the Earth and the Sun, which is beneficial for a space telescope because it needs little fuel to maintain its position.

ii) Avoiding Earth's shadow means JWST always has access to the Sun's energy (for its solar panels), never interrupted by eclipses.`,
          rubric: String.raw`Astro Coach marking guide (2 points): i) stays fixed relative to Earth and Sun, so little fuel is needed for station-keeping (1 point); ii) continuous sunlight for power, no eclipses (1 point).`,
        },
        {
          label: "(b)",
          points: 5,
          prompt: String.raw`Taking first order approximations, about how far is $L_2$ from Earth? Express your answer both in terms of the variables defined and numerically, in km.`,
          solution: String.raw`Let the $L_2$–Earth distance be $x$, with $x \ll R$. An object at $L_2$ orbits the Sun with the Earth's angular velocity $\omega = \sqrt{GM/R^3}$, and both the Sun's and the Earth's pull provide its centripetal force:

$$\frac{GM}{(R + x)^2} + \frac{Gm}{x^2} = \omega^2(R + x)$$

Using the binomial approximation $(1 + y)^\alpha \approx 1 + \alpha y$ for $y \ll 1$:

$$\frac{GM}{R^2}\left(1 - \frac{2x}{R}\right) + \frac{Gm}{x^2} \approx \frac{GM}{R^2}\left(1 + \frac{x}{R}\right)$$

Solving gives

$$x = R\sqrt[3]{\frac{m}{3M}} = 1.50\times10^{6}\ \text{km}$$`,
          rubric: String.raw`Astro Coach marking guide (5 points): force balance with both gravitational pulls equal to ω²(R + x) (2 points); ω² = GM/R³ and a correct first-order (binomial) expansion (1 point); x = R(m/3M)^{1/3} (1 point); ≈ 1.5 × 10⁶ km (1 point).`,
        },
        {
          label: "(c)",
          points: 5,
          prompt: String.raw`In the rotating reference frame in which the Earth and the Sun are stationary, JWST orbits $L_2$ in the plane perpendicular to the Earth-Sun line that passes through $L_2$. If JWST orbits in a circle of radius $r$ around $L_2$ in this frame, what is the minimum $r$ that avoids the Earth's shadow at all times? Express your answer both in terms of the variables defined and numerically, in km.`,
          solution: String.raw`From geometry, JWST must lie outside the cone defined by the common internal tangents of the Earth and the Sun (the edge of the penumbra, beyond which no part of the Sun is hidden). The tip of the cone has a full angle

$$2\theta = 2\sin^{-1}\left(\frac{R_\odot + R_\oplus}{R}\right)$$

Extending one of these internal tangents to the plane through $L_2$, $r_{min}$ satisfies

$$\tan\theta = \frac{R_\odot/\cos\theta + r}{R + x}$$

Therefore

$$r_{min} = \frac{(R + x)R_\oplus + xR_\odot}{\sqrt{R^2 - (R_\odot + R_\oplus)^2}} = 1.34\times10^{4}\ \text{km}$$

Realistically $R_\oplus, R_\odot \ll R$ and $x \ll R$, so $r_{min} \approx R_\oplus + xR_\odot/R$, which is off by less than 1%.`,
          rubric: String.raw`Astro Coach marking guide (5 points): identifies the internal-tangent (penumbra) cone as the boundary (2 points); correct geometry relating r to the cone angle (1 point); r_min = ((R + x)R⊕ + xR☉)/√(R² − (R☉ + R⊕)²) or the approximation R⊕ + xR☉/R (1 point); ≈ 1.3 × 10⁴ km (1 point).`,
        },
        {
          label: "(d)",
          points: 20,
          prompt: String.raw`Consider a scenario where JWST is stationary in the aforementioned rotating reference frame and has a small displacement $\boldsymbol{\delta r} = \delta x\,\hat{\boldsymbol{i}} + \delta y\,\hat{\boldsymbol{j}}$ relative to $L_2$, where $\hat{\boldsymbol{i}}$ is the unit vector along the Earth-Sun line away from the Sun and $\hat{\boldsymbol{j}}$ is a unit vector perpendicular to $\hat{\boldsymbol{i}}$. Both $\hat{\boldsymbol{i}}$ and $\hat{\boldsymbol{j}}$ are stationary in the rotating frame. To first order (i.e. assuming $|\boldsymbol{\delta r}| \ll x$), what is the acceleration of JWST in the rotating frame?`,
          solution: String.raw`Because $L_2$ is a Lagrangian point, the forces at $L_2$ balance in the rotating frame, so we only need the first-order changes in force relative to $L_2$.

Suppose a mass $M$ is located a distance $R$ to the left of $L_2$ (on the $-\hat{\boldsymbol{i}}$ side). The change in its gravitational field from $L_2$ to $L_2 + \boldsymbol{\delta r}$ is

$$\delta\boldsymbol{g} = -\frac{GM}{\left((R + \delta x)^2 + \delta y^2\right)^{3/2}}\left((R + \delta x)\hat{\boldsymbol{i}} + \delta y\,\hat{\boldsymbol{j}}\right) + \frac{GM}{R^2}\hat{\boldsymbol{i}}$$

The $\delta y^2$ in the denominator is second order and can be dropped:

$$\delta\boldsymbol{g} \approx -\left(\frac{GM}{(R + \delta x)^2} - \frac{GM}{R^2}\right)\hat{\boldsymbol{i}} - \frac{GM}{R^3}\delta y\,\hat{\boldsymbol{j}}$$

Using the binomial approximation once again:

$$\delta\boldsymbol{g} \approx \frac{GM}{R^3}\left(2\delta x\,\hat{\boldsymbol{i}} - \delta y\,\hat{\boldsymbol{j}}\right)$$

This looks like the tidal force — and that is exactly what it is. The acceleration of JWST is the sum of this term for the Sun (distance $R + x$) and for the Earth (distance $x$), plus the change in the centrifugal acceleration (the Coriolis force is zero because JWST is stationary):

$$\delta\boldsymbol{a}_{cf} = \delta(\omega^2\boldsymbol{r}) = \omega^2\,\boldsymbol{\delta r} = \frac{GM}{R^3}\left(\delta x\,\hat{\boldsymbol{i}} + \delta y\,\hat{\boldsymbol{j}}\right)$$

Therefore

$$\boldsymbol{a} = \left(\frac{GM}{(R + x)^3} + \frac{Gm}{x^3}\right)\left(2\delta x\,\hat{\boldsymbol{i}} - \delta y\,\hat{\boldsymbol{j}}\right) + \frac{GM}{R^3}\left(\delta x\,\hat{\boldsymbol{i}} + \delta y\,\hat{\boldsymbol{j}}\right)$$

Plugging in $x = R\sqrt[3]{m/3M}$ (so $Gm/x^3 = 3GM/R^3$) and keeping first order in $\boldsymbol{\delta r}$:

$$\boldsymbol{a} \approx \left(2\left(\frac{GM}{R^3} + \frac{3GM}{R^3}\right) + \frac{GM}{R^3}\right)\delta x\,\hat{\boldsymbol{i}} + \left(-\left(\frac{GM}{R^3} + \frac{3GM}{R^3}\right) + \frac{GM}{R^3}\right)\delta y\,\hat{\boldsymbol{j}} = \frac{GM}{R^3}\left(9\delta x\,\hat{\boldsymbol{i}} - 3\delta y\,\hat{\boldsymbol{j}}\right)$$`,
          rubric: String.raw`Astro Coach marking guide (20 points): uses that the forces balance at L₂, so only first-order changes matter (2 points); tidal (first-order) change in a point mass's field, δg = (GM/d³)(2δx î − δy ĵ) (6 points); applies it to both the Sun (d ≈ R) and the Earth (d = x) (3 points); centrifugal term ω²δr = (GM/R³)(δx î + δy ĵ) with Coriolis zero (3 points); substitutes Gm/x³ = 3GM/R³ from part (b) (2 points); final a = (GM/R³)(9δx î − 3δy ĵ) (4 points).`,
        },
        {
          label: "(e)",
          points: 5,
          prompt: String.raw`The presence of the Coriolis force in the rotating reference frame destabilizes orbits around $L_1$, $L_2$, and $L_3$ while stabilizing orbits around $L_4$ and $L_5$. **Disregarding the Coriolis force for this part only,** are orbits stable around $L_2$ when there is no Coriolis force? Is this result generalizable? In other words, what can be said about the stability of orbits around an arbitrary, stationary point where there are no masses within the orbit and no fictitious forces involved?`,
          solution: String.raw`**No.** From part (d), a small displacement in the $\hat{\boldsymbol{i}}$ direction produces an acceleration pointing in the same direction ($+9\,GM\,\delta x/R^3$), so the displacement grows: orbits are unstable in that direction.

This result is general for orbits around any point with no mass inside and no fictitious forces. By Gauss's law for gravitation, the gravitational flux through a closed surface containing no mass is zero, so the field cannot point inward for displacements in every direction. There is always some direction in which a displaced body is pushed away, so no such point can have stable orbits around it.`,
          rubric: String.raw`Astro Coach marking guide (5 points): not stable — the î component of the acceleration has the same sign as the displacement (2 points); generalises: no stable orbits around an empty point without fictitious forces (1 point); justification with Gauss's law (zero net flux / zero divergence, so the field cannot point inward in all directions) (2 points).`,
        },
        {
          label: "(f)",
          points: 8,
          prompt: String.raw`Suppose JWST orbits in the circle described in part (c) with a constant speed and an orbital radius of 500,000 km. Suppose further that the jet propulsion of the JWST is programmed to counteract only the Coriolis force; the rest of JWST's motion is due to the natural gravitational dynamics at $L_2$. Using the assumption that the first order expression derived in (d) still applies, if JWST has a mass of 6500 kg, what is the average magnitude of the force over a long period of time? The following averages (calculated from 0 to $2\pi$) might be helpful:

$$\overline{|\sin x|} = \frac{2}{\pi} \qquad \overline{\sin^2 x} = \frac{1}{2} \qquad \overline{|\sin^3 x|} = \frac{4}{3\pi}$$

For reference, the magnitude of the Coriolis force is given as,

$$|\boldsymbol{F}| = 2m|\boldsymbol{\omega}\times\boldsymbol{v}|$$`,
          solution: String.raw`The acceleration perpendicular to $\hat{\boldsymbol{i}}$ was found in part (d) to be $-3GM\,\delta y/R^3$. This restoring acceleration provides the centripetal acceleration of the circular orbit of radius $r$:

$$\frac{3GMr}{R^3} = \frac{v^2}{r} \quad\Longrightarrow\quad v = r\sqrt{\frac{3GM}{R^3}}$$

The magnitude of the Coriolis force, with $\omega = \sqrt{GM/R^3}$, is

$$|F| = 2m|\boldsymbol{\omega}\times\boldsymbol{v}| = 2m\sqrt{\frac{GM}{R^3}}\;r\sqrt{\frac{3GM}{R^3}}\;|\sin\theta|$$

where $\theta$ is the angle between $\boldsymbol{v}$ and $\boldsymbol{\omega}$. Since it cycles from 0 to $2\pi$ around the orbit, use $\overline{|\sin\theta|} = 2/\pi$:

$$\overline{|F|} = \frac{4\sqrt{3}\,GMmr}{\pi R^3} = 0.28\ \text{N}$$

Note just how small the force is!`,
          rubric: String.raw`Astro Coach marking guide (8 points): restoring acceleration 3GMr/R³ provides the centripetal acceleration (2 points); v = r√(3GM/R³) (1 point); Coriolis magnitude 2mωv|sin θ| with ω = √(GM/R³) (2 points); averages |sin θ| to 2/π (1 point); F̄ = 4√3 GMmr/(πR³) (1 point); ≈ 0.28 N (1 point).`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [4],
      solutionPages: [10, 11, 12, 13],
    },

    // --- L2: The Sundial I --------------------------------------------------
    {
      number: "L2",
      title: "The Sundial I",
      section: "Long Questions",
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Telescopes & Observing"],
      difficulty: "Advanced",
      points: 45,
      text: String.raw`While on a walk in Princeton University, Leo stumbled upon the following sundial, mounted on the southern wall of a building:

[[figure:sundial]]

He was familiar with the lines pointing outwards from the center, marking off time of day. However, he also noticed the three curves crossing the other lines. After a bit of thought, he realized these curves marked off the path of the shadow on the equinoxes and solstices.`,
      figures: [
        {
          key: "sundial",
          file: "sundial.png",
          caption: "Figure 1: Picture taken by Leo Yao, December 2020.",
          sourcePage: 5,
        },
      ],
      parts: [
        {
          label: "(a)",
          points: 3,
          prompt: String.raw`For each of the two equinoxes and solstices, match the day to the curve (top, middle, bottom) denoting the path of the shadow on that day. (No explanation needed)`,
          solution: String.raw`- **Winter solstice: top curve.**
- **Both equinoxes: middle curve.**
- **Summer solstice: bottom curve.**

The Sun is highest on the summer solstice and lowest on the winter solstice, so shadows on a sundial on the ground are shorter in summer than in winter. This sundial is on a vertical wall, so the trend is reversed: the top curve (shortest shadows from the gnomon) corresponds to the winter solstice and the bottom curve (longest shadows) to the summer solstice. Notice also the visible shadow close to the top curve; the picture was taken in December 2020, near the winter solstice.`,
          rubric: String.raw`Astro Coach marking guide (3 points): winter solstice → top (1 point); both equinoxes → middle (1 point); summer solstice → bottom (1 point). No explanation required.`,
        },
        {
          label: "(b)",
          points: 1,
          prompt: String.raw`For the days corresponding to the middle curve, what is the declination of the Sun on those days? Assume the length of the day is small compared to the length of the year. (No explanation needed)`,
          solution: String.raw`On the equinoxes, the declination of the Sun is $\delta = 0^\circ$.`,
          rubric: String.raw`Astro Coach marking guide (1 point): δ = 0°.`,
        },
        {
          label: "(c)",
          points: 9,
          leadIn: String.raw`He then noticed that the middle curve seemed to be a straight line, and started thinking about if this is the case. He first considered a simpler system: a stick mounted vertically on a flat surface, casting a shadow on flat ground.`,
          prompt: String.raw`Consider the shadow of the tip of the stick, which might possibly trace a straight line over the course of the day. Explain why, if this happens, it can only happen on a day when the Sun's declination is that determined above.

This part can be solved independently, or as part of your solution for the next part. If your solution for the next part also proves this, note that down on your solution sheets, and proceed directly to the next part.`,
          solution: String.raw`There are many possible solutions; here is one.

**The line must run East–West.** The Sun's path is symmetric about the meridian, so by symmetry the line must run perfectly East to West.

**The line is a finite distance from the stick.** If the Sun rises at all, its altitude at solar noon is nonzero, so for a stick of finite height the noon shadow is finite. So the line is a finite distance from the stick.

**At sunset the Sun must be due West.** Consider the Sun's azimuth $\alpha$ at sunset. If $\alpha \ne 270^\circ$, the shadow has some North–South component. But as the Sun's altitude goes to 0, the shadow's length goes to infinity, so the tip of the shadow would move infinitely far from the East–West line through the stick, contradicting the line being a finite distance away.

So a straight line is only possible if the Sun sets at $\alpha = 270^\circ$ (due West), which happens only when $\delta = 0$.

(An algebraic version, which also proves part (d), is given in the solution to part (d).)`,
          rubric: String.raw`Astro Coach marking guide (9 points): argues the line must run East–West (by symmetry about the meridian) (2 points); the noon shadow is finite, so the line is a finite distance from the stick (2 points); as the Sun sets the shadow becomes infinitely long, so unless the Sun sets due West the shadow tip leaves any finite E–W line (3 points); concludes sunset due West ⇔ δ = 0 (2 points). A complete algebraic proof (e.g. showing the N–S offset h₀(tan φ − sin δ/(cos φ sin h)) is constant only for δ = 0) earns full credit.`,
        },
        {
          label: "(d)",
          points: 24,
          prompt: String.raw`Prove that, for the Sun's declination determined above, the shadow of the tip of the stick traces a straight line over the course of the day.

Any method is acceptable, as long as it is presented clearly and rigorously. For example, one possible method might involve the following steps:

i) Determining the orientation of the line and explaining why it must be in this orientation;
ii) Determining the length of the shadow for a given position of the Sun in alt-az coordinates;
iii) Deriving a relation between altitude and azimuth given that the tip of the shadow is on the line;
iv) Determining a constant quantity and showing that it is constant over all positions of the Sun that day.

If you skipped the previous part, make sure your proof also shows the inverse: that for a different declination of the Sun, the tip's shadow does not trace a straight line.

You do not necessarily need to follow these steps. Simpler and/or faster methods may be possible, including those that do not need any equations. **Any fully-formed, valid explanation gives full credit.**`,
          solution: String.raw`**Quick geometric proof (from the official solution).** Place the tip of the stick at the centre of the celestial sphere. On the equinoxes the declination of the Sun is 0, so the Sun's daily path is a great circle (the celestial equator), and the plane of that great circle passes through the tip of the stick. Every sunbeam that grazes the tip therefore lies in this plane, so the shadow of the tip also lies in this plane. The intersection of this plane with the plane of the ground is a straight line — the path of the shadow. (This generalises immediately to any other flat surface, such as a vertical wall.)

**Algebraic proof following steps i)–iv).**

i) By part (c), the line must run East–West, a finite distance $x_0$ from the stick.

ii) If the Sun has altitude $h$ and the stick has height $h_0$, the shadow has length $l = \dfrac{h_0}{\tan h}$.

iii) Let $a = \text{azimuth} - 90^\circ$ (azimuth from North through East), so the Sun rises at $a = 0$ and sets at $a = 180^\circ$. The shadow points away from the Sun, so its northward component is $l\sin a$. The tip is on the line when $l\sin a = x_0$, i.e.

$$\frac{h_0\sin a}{\tan h} = x_0$$

iv) So we need $\dfrac{\sin a}{\tan h}$ to be constant all day. The spherical law of cosines for the triangle zenith–pole–Sun gives the coordinate transformation (latitude $\phi$)

$$\sin\delta = \sin\phi\sin h - \cos\phi\cos h\sin a \quad\Longrightarrow\quad \sin a = \frac{\sin\phi\sin h - \sin\delta}{\cos\phi\cos h}$$

Therefore

$$\frac{\sin a}{\tan h} = \frac{\sin\phi\sin h - \sin\delta}{\cos\phi\sin h} = \tan\phi - \frac{\sin\delta}{\cos\phi}\cdot\frac{1}{\sin h}$$

On the equinoxes $\delta = 0$, so $\dfrac{\sin a}{\tan h} = \tan\phi$ is constant: the tip of the shadow always lies on the East–West line a distance $x_0 = h_0\tan\phi$ north of the stick. **It is a straight line.**

**The inverse.** For $\delta \ne 0$, the term $\dfrac{\sin\delta}{\cos\phi\sin h}$ changes during the day because $\sin h$ changes as the Sun rises and sets, so the North–South offset is not constant and the path is not an East–West straight line (by part (c) no other straight line is possible). So a straight line happens only for $\delta = 0$.

(The official solution also shows a longer spherical-trigonometry derivation of $\frac{\sin a}{\tan h} = \tan\phi$; the steps above give the same result more directly.)`,
          rubric: String.raw`Astro Coach marking guide (24 points). Any complete, valid proof earns full credit, e.g. the great-circle argument: Sun's path is a great circle for δ = 0 (8 points), its plane passes through the stick's tip so the tip's shadow stays in that plane (8 points), intersection of two planes is a straight line (8 points). For the step-by-step method: line runs East–West at a finite distance (4 points); shadow length h₀/tan h (4 points); condition l sin a = x₀ ⇒ sin a/tan h constant (5 points); correct alt-az/equatorial transformation (5 points); shows sin a/tan h = tan φ for δ = 0 (6 points). If part (c) was skipped, the inverse (δ ≠ 0 gives no straight line) must also be shown for full credit.`,
        },
        {
          label: "(e)",
          points: 8,
          leadIn: String.raw`After figuring out the simpler case, Leo realized that he could easily generalize it to the sundial mounted on the wall. He then started thinking about other ways the model and the sundial on the wall differed, and thought about the orientation of the center line, noticing that it was not perfectly horizontal, but instead slanted.`,
          prompt: String.raw`Based on the picture and the orientation of the center line, does the wall run perfectly East-West, or does it run Northeast-Southwest or Southeast-Northwest? Explanation needed for credit.

Assume the wall is perfectly vertical. This part can be solved independently of the previous two parts.`,
          solution: String.raw`The wall runs **Northeast–Southwest** (it faces slightly east of south).

Consider two positions of the Sun on the equinox, equally far from noon (one in the morning, one in the afternoon). By symmetry, their altitudes are the same and their azimuths are equally offset from due South.

The shadow of the gnomon's tip at each time is where the line from the Sun through the tip meets the wall. As the Sun is up in the South, these lines slope down as they head North. For a wall running exactly East–West, the two shadow points would be at the same height, and the equinox line would be horizontal.

In the picture, the line traveling West (to the left) drops less than the line traveling East (to the right). This implies the wall juts out towards the observer on the left, meaning the wall is angled Southwest to Northeast. (Looking at the actual building, Fisher Hall, on a map, it is indeed oriented that way!)`,
          rubric: String.raw`Astro Coach marking guide (8 points): answer Northeast–Southwest (2 points); uses the symmetry of the Sun's positions before and after noon on the equinox (2 points); explains that for an exactly East–West wall the equinox line would be horizontal (2 points); connects the observed slant (the line drops more towards the East) to the wall's rotation (2 points).`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [4, 5, 6],
      solutionPages: [14, 15, 16, 17, 18],
    },
  ],
};
