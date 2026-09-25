// USAAAO National Astronomy Olympiad 2019: 4 short questions (7 points
// each), 5 medium questions (15 points each) and 2 long questions
// (25 points each), 153 points in total as printed (158 here; see Q10
// below). The paper has no multiple-choice
// section, so every question is imported.
//
// Choices made while transcribing:
//   - The short and medium questions print one total but no points per
//     sub-part, so they are graded as a whole with (a), (b)… kept in the
//     text. The long questions print points per part, so they have parts.
//   - Every question needs working, so all are AI-graded (WORKED).
//   - The official solutions are lightly cleaned up (ADAPTED). They give no
//     marking scheme, only a few grading remarks (kept in the rubrics), so
//     each rubric is an Astro Coach marking guide in whole points.
//   - Q2: the constants the official solution says are needed are listed in
//     the question, since the exam supplied a constants table.
//   - Q11(e): the paper states r_peak = η r_last with η ≈ 0.63, but that would
//     put the hottest ring inside the disk's inner edge. The official
//     solution (and the intended answer for (f)) uses r_last = η r_peak;
//     the solution explains this and the rubric accepts either reading.
//   - Q10: the paper heads it "25 points" but its printed part values add
//     up to 30. The printed part values are kept (scored out of 30), with a
//     note in the question text.
//   - Q11(f) has no official solution, so Astro Coach wrote one.
//   - Q10(f): the official unit for κ, "T s²/(kg m)", is corrected to T m s/kg
//     (T m³ divided by kg m² s⁻¹).
import type { FrqSeedExam } from "./types";

const SHORT = "Short Questions";
const MEDIUM = "Medium Questions";
const LONG = "Long Questions";

export const usaaao2019Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: 2019,
  examName: "National Astronomy Olympiad",
  slug: "usaaao-2019-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2019/03/nao_2019.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2019/03/nao_2019_solution.pdf",
  attributionText:
    "Source: USA Astronomy and Astrophysics Organization (USAAAO), National Astronomy Olympiad 2019. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.",
  questions: [
    // --- Q1 Baryon density at nucleosynthesis --------------------------------
    {
      number: "1",
      title: "Density at Big Bang Nucleosynthesis",
      section: SHORT,
      topic: "Galaxies & Universe",
      difficulty: "Intermediate",
      points: 7,
      text: String.raw`Assuming that the present density of baryonic matter is $\rho_{b0} = 4.17 \times 10^{-28}$ kg m$^{-3}$, what was the density of baryonic matter at the time of Big Bang nucleosynthesis (when $T \sim 10^{10}$ K)? Assume the present temperature $T_0$ to be 2.7 K.`,
      solution: String.raw`Matter density dilutes with volume, $\rho_b = \rho_{b0}\,a^{-3}$, where $a$ is the scale factor. The radiation temperature falls as $T \propto 1/a$, i.e. $T_0 = a\,T(a)$. Therefore

$$\rho_{b,\text{BBN}} = \rho_{b0}\left(\frac{T_{\text{BBN}}}{T_0}\right)^3 = 4.17\times10^{-28} \times \left(\frac{10^{10}}{2.7}\right)^3 \approx 21\ \text{kg m}^{-3}.$$`,
      rubric: `Astro Coach marking guide (7 points):
- Matter density scales as a^−3: 2 points.
- Temperature scales as 1/a (T₀ = aT): 2 points.
- Combines them: ρ = ρ₀ (T/T₀)³: 2 points.
- ρ ≈ 21 kg/m³: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Q2 The January 2019 lunar eclipse ----------------------------------
    {
      number: "2",
      title: "Totality of a Super Blood Moon",
      section: SHORT,
      topic: "Solar System",
      topics: ["Solar System", "Gravity & Orbits"],
      difficulty: "Advanced",
      points: 7,
      text: String.raw`On the night of January 21st, 2019, there was a total lunar eclipse during a supermoon. At the time, the moon was close to perigee, at a distance of 351837 km from the earth, which was $1.4721 \times 10^{8}$ km from the sun. The gamma ($\gamma$) of a lunar eclipse refers to the closest distance between the center of the moon and the center of the shadow, expressed as a fraction of the earth's radius. For this eclipse, $\gamma = 0.3684$. Given this information, find the closest estimate for the duration of totality of the eclipse.

(Constants you may need, as listed in the official solution: semimajor axis of the moon's orbit 384399 km; semimajor axis of the earth's orbit $1.4960 \times 10^{8}$ km; radius of the sun 695700 km; radius of the earth 6371 km; radius of the moon 1737 km; mass of the earth $5.972 \times 10^{24}$ kg; mass of the sun $1.989 \times 10^{30}$ kg; and $G$.)`,
      solution: String.raw`**Size of the umbra.** The Earth's shadow narrows with distance from the Earth by the ratio $(R_\odot - R_E)/d_\odot$, so at the Moon's distance

$$r_{\text{umbra}} = 6371 - \frac{695700 - 6371}{1.4721\times10^{8}} \times 351837 \approx 4723\ \text{km}.$$

**Path length during totality.** The Moon does not cross the centre of the shadow (it misses by $\gamma R_E$), and totality lasts only while the whole Moon is inside the umbra, i.e. while its centre is within $r_{\text{umbra}} - R_M$ of the shadow's centre. The chord its centre travels is

$$d = 2\sqrt{(r_{\text{umbra}} - 1737)^2 - (0.3684 \times 6371)^2} \approx 3693\ \text{km}.$$

**Speed of the Moon relative to the shadow.** From the vis-viva equation, the Moon's speed at 351837 km is

$$v_{\text{moon}} = \sqrt{G M_E\left(\frac{2}{3.51837\times10^{8}} - \frac{1}{3.84399\times10^{8}}\right)} \approx 1.108\ \text{km/s}.$$

The shadow also moves, because the Earth orbits the Sun at $v_E = \sqrt{G M_\odot\left(\frac{2}{1.4721\times10^{11}} - \frac{1}{1.4960\times10^{11}}\right)} \approx 30.26$ km/s. The shadow points away from the Sun, so it sweeps around at the Earth's angular speed; at the Moon's distance it moves at

$$v_{\text{umbra}} = \frac{v_E}{1.4721\times10^{8}} \times 351837 \approx 0.072\ \text{km/s}.$$

The Moon and the Earth go around in the same direction, so the Moon's speed relative to the shadow is $1.108 - 0.072 = 1.036$ km/s.

**Duration.**

$$t = \frac{3693\ \text{km}}{1.036\ \text{km/s}} \approx 3565\ \text{s} \approx 59\ \text{minutes}.$$

(The real totality lasted about 62 minutes.)`,
      rubric: `Astro Coach marking guide (7 points):
- Umbra radius at the Moon's distance from similar triangles, about 4700 km: 2 points.
- Totality chord uses both the offset γR_E and the Moon's radius (r_umbra − R_M): 2 points.
- Moon's orbital speed near perigee, about 1.1 km/s (vis-viva or a reasonable estimate): 1 point.
- Accounts for the shadow's motion due to Earth's orbit (about 0.07 km/s): 1 point.
- Duration about 59 minutes (55–65 minutes with consistent working): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Q3 Rising and setting stars ----------------------------------------
    {
      number: "3",
      title: "Which Happens First?",
      section: SHORT,
      topic: "Math, Data & Coordinates",
      difficulty: "Intermediate",
      points: 7,
      text: String.raw`You are in the northern hemisphere and are observing the rise of star A with declination $\delta = -8^\circ$, and at the same time a star B with declination $\delta = +16^\circ$ is setting. What will happen first: the next setting of star A or the rising of star B?`,
      solution: String.raw`**Star B rises first.**

For a northern observer, a star with negative declination spends less than half a day above the horizon, and a star with positive declination spends less than half a day below it. The further the declination is from zero, the bigger the effect.

Quantitatively, a star rises and sets at hour angles $\pm H$ with $\cos H = -\tan\varphi\tan\delta$.

- Star A ($\delta = -8^\circ$) is above the horizon for $2H_A = 180^\circ - 2x_A$, where $\sin x_A = \tan\varphi\tan 8^\circ$.
- Star B ($\delta = +16^\circ$) is below the horizon for $360^\circ - 2H_B = 180^\circ - 2x_B$, where $\sin x_B = \tan\varphi\tan 16^\circ$.

Since $\tan 16^\circ > \tan 8^\circ$, $x_B > x_A$, so star B's time below the horizon is shorter than star A's time above it. Star B rises before star A sets.

(Another way to see it: when A rises, the point of declination $+8^\circ$ on the opposite side of the sky is setting, together with B. That point would return after exactly as long as A stays up; B, with its higher declination, spends even less time below the horizon, so it comes back sooner.)`,
      rubric: `Astro Coach marking guide (7 points):
- Correct conclusion: star B rises first: 2 points.
- Explains that in the northern hemisphere a star with δ > 0 is below the horizon for less than 12 h and a star with δ < 0 is above the horizon for less than 12 h: 2 points.
- Compares the two times correctly (e.g. with cos H = −tan φ tan δ, or the symmetric-point argument): 3 points.
A bare answer with no reasoning earns at most 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Q4 Hydrostatic equilibrium -----------------------------------------
    {
      number: "4",
      title: "Pressure Gradient in a Model Star",
      section: SHORT,
      topic: "Energy & Stellar Physics",
      topics: ["Energy & Stellar Physics", "Stars & Black Holes"],
      difficulty: "Intermediate",
      points: 7,
      text: String.raw`Consider a star with mass $M$ and radius $R$. The star's density varies as a function of radius $r$ according to the equation $\rho(r) = \rho_{\text{center}}\left(1 - \sqrt{r/R}\right)$, where $\rho_{\text{center}}$ is the density at the center of the star. Derive an expression for $dP/dr$ in terms of $G$, $M$, $R$, and $r$, where $P$ is the pressure at a given radius $r$.`,
      solution: String.raw`**Mass inside radius $r$.**

$$m(r) = \int_0^r 4\pi r'^2 \rho_{\text{center}}\left(1 - \sqrt{r'/R}\right) dr' = 4\pi\rho_{\text{center}}\left(\frac{r^3}{3} - \frac{2}{7}\frac{r^{7/2}}{\sqrt{R}}\right) = \frac{4}{21}\pi\rho_{\text{center}} r^3\left(7 - 6\sqrt{\frac{r}{R}}\right).$$

**Central density.** The total mass is $M = m(R) = \frac{4}{21}\pi\rho_{\text{center}}R^3$, so $\rho_{\text{center}} = \dfrac{21M}{4\pi R^3}$.

**Hydrostatic equilibrium.** $\dfrac{dP}{dr} = -\dfrac{G\,m(r)\,\rho(r)}{r^2}$. Substituting,

$$\frac{dP}{dr} = -\frac{G}{r^2}\cdot\frac{4}{21}\pi\rho_{\text{center}}^2 r^3\left(7 - 6\sqrt{\tfrac{r}{R}}\right)\left(1 - \sqrt{\tfrac{r}{R}}\right) = -\frac{21\,G M^2\, r}{4\pi R^6}\left(7 - 13\sqrt{\frac{r}{R}} + 6\,\frac{r}{R}\right).$$`,
      rubric: `Astro Coach marking guide (7 points):
- Mass integral m(r) = ∫4πr²ρ dr set up: 1 point.
- m(r) = (4/21)πρ_c r³(7 − 6√(r/R)) (or equivalent): 2 points.
- ρ_c = 21M/(4πR³) from m(R) = M: 1 point.
- Hydrostatic equilibrium dP/dr = −Gmρ/r²: 2 points.
- Final expression −(21GM²r/(4πR⁶))(7 − 13√(r/R) + 6r/R) or an equivalent factorised form: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- Q5 Precession and the Hoover Dam star map --------------------------
    {
      number: "5",
      title: "The Hoover Dam Star Map",
      section: MEDIUM,
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Telescopes & Observing", "Gravity & Orbits"],
      difficulty: "Advanced",
      points: 15,
      text: String.raw`An alien spaceship from the planet Kepler 62f is in search of a rocky planet for a remote base. They're attracted to Earth because of a fortunate coincidence: its axis of rotation points directly at their home planet. That means they can have uninterrupted communication with home by planting fixed transmitters on the North Pole. But first, they need to find out if Earth's axis will always point in the same direction or if it undergoes precession. They can't know without years of observation, so they hope that we, its now-extinct intelligence, have left behind the answer.

While orbiting Earth, they see a few remarkable structures, including the Hoover Dam in Nevada. Zooming in on the dam, a colorful plaza with peculiar markings on its floor catches their attention. Descending on the plaza, they realize the markings are a map of the sky when the dam was built, left to indicate the date to posterity. Figure 1 is an overhead architectural map of this plaza. The center-point depicts the north ecliptic pole, and the large circle represents the path of the Earth's axis throughout its counter-clockwise precession. As they interpret the map, they're dismayed to realize that their star has not been and will not be Earth's north star for very long.

[[figure:star-map]]

For the purpose of this question, assume that the Earth's axial tilt is a constant $i = 23.5^\circ$ and its axis precesses at a constant rate.

**a)** Using the values on the map, and knowing that the aliens used carbon-aging to determine that the dam is 12,000 years old, find all possible values for the period of Earth's axial precession.

**b)** Using the most optimistic answer (longest period) from part (a), calculate how many arcseconds the Earth's axis precesses each day. Use the period you calculate here in the next two sections.

**c)** If they hadn't been lucky enough to come across the star map and decided to build a radio interferometer to observe the movement of the celestial pole over the course of 30 days instead, how many kilometers would the baseline of their telescope array have to be, assuming it operated at a 20 cm wavelength?

**d)** As a last resort, to keep Earth's axis fixed, the aliens decide to counter the forces that cause the Earth's precession by building giant nuclear thrusters on the Earth's surface. Assume Earth's precession is caused by external forces alone and calculate the average force (in kN) that a strategically positioned thruster would have to exert to counter them.`,
      figures: [
        {
          key: "star-map",
          file: "hoover-dam-star-map.png",
          caption: "Figure 1: Overhead architectural plan of the Hoover Dam plaza depicting Polaris as north star. The marked angle from Polaris to Kepler-62f is θ = 167.6°.",
          sourcePage: 3,
        },
      ],
      solution: String.raw`**a)** In 12,000 years the pole has moved counter-clockwise from Kepler-62f to Polaris, through $167.6^\circ$ plus any number $n$ of whole extra circuits. At a constant rate,

$$P_p = \frac{360^\circ}{\omega} = \frac{360^\circ\, t}{\theta_{\text{total}}}, \qquad \theta_{\text{total}} = 167.6^\circ + 360^\circ n,\quad n = 0, 1, 2, \dots$$

This gives $P_p \approx 25{,}776$ years, $8188$ years, $4867$ years, … (in general $P_p = \dfrac{4.32\times10^{6}}{167.6 + 360n}$ years).

**b)** The axis points along the angular momentum vector, which traces a small circle of angular radius $i$ on the sky, of circumference $2\pi\sin i$ radians. With the longest period,

$$\frac{2\pi\sin 23.5^\circ}{25{,}776 \times 365.25\ \text{days}} \approx 2.66\times10^{-7}\ \text{rad/day} \approx 0.055''\ \text{per day}.$$

**c)** In 30 days the pole moves about $30 \times 0.055'' \approx 1.65''$. To resolve this, $\theta \approx \lambda/D$:

$$D = \frac{\lambda}{\theta} = \frac{0.2\ \text{m}}{1.65'' \times \frac{\pi}{180 \times 3600}} \approx 25\ \text{km}.$$

(Including the factor 1.22 gives about 31 km.)

**d)** The torque needed equals the rate of change of the angular momentum, $\tau = |d\vec L/dt| = I\omega\,\dfrac{d\theta}{dt}$, where $d\theta/dt$ is the rate at which the axis direction moves ($0.055''$ per day from part (b)). A thruster at the equator pushing tangentially has lever arm $R_E$, so

$$F = \frac{\tau}{R_E} = \frac{I\omega\, \dot\theta}{R_E} = \frac{8.01\times10^{37} \times \frac{2\pi}{86400} \times \left(\frac{0.055}{3600}\cdot\frac{\pi}{180}\right)\frac{1}{86400}}{6.37\times10^{6}} \approx 2.8\times10^{15}\ \text{N} \approx 2.8\times10^{12}\ \text{kN}.$$`,
      rubric: `Astro Coach marking guide (15 points):
- (a) Angle travelled is 167.6° + 360°n (recognises multiple solutions): 2 points.
- (a) Periods about 25,800, 8,190, 4,870 years … (general formula accepted): 2 points.
- (b) Uses the small circle of radius i (2π sin i per period): 2 points.
- (b) About 0.055″ per day (0.14″/day if sin i is omitted earns 1 of these 3 points): 1 point.
- (c) Movement over 30 days ≈ 1.6″ and resolution θ ≈ λ/D: 2 points.
- (c) D ≈ 25 km (about 31 km with the 1.22 factor also accepted): 1 point.
- (d) Torque equals rate of change of angular momentum, τ = Iω dθ/dt: 2 points.
- (d) Force = torque / Earth's radius with a sensible moment of inertia (about 8 × 10^37 kg m²): 2 points.
- (d) F ≈ 2.8 × 10^12 kN: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2, 3, 4],
      solutionPages: [4],
    },

    // --- Q6 HD 189733b phase curve ------------------------------------------
    {
      number: "6",
      title: "Phase Curve of HD 189733b",
      section: MEDIUM,
      topic: "Exoplanets & Life",
      topics: ["Exoplanets & Life", "Light & Spectra", "Math, Data & Coordinates"],
      difficulty: "Intermediate",
      points: 15,
      text: String.raw`Figure 2 shows a full-phase light curve ("phase curve") of the exoplanet HD 189733b taken by the Spitzer space telescope. Use this figure to answer the following questions. The star HD 189733 has an effective temperature of 4785 K and a radius of 0.805 Solar radii.

[[figure:phase-curve]]

**a)** Use the depth of the planet's transit to estimate the radius of HD 189733b, in Jupiter radii.

**b)** Use the depth of the eclipse of the planet by the host star to estimate the ratio of the flux of the planet HD 189733b to that of the host star HD 189733.

**c)** HD 189733b is so close-in to its host star that it is expected to be tidally locked. Use the phase curve to estimate the ratio of the dayside flux emitted by the planet to the nightside flux emitted by the planet.

**d)** This phase curve also noticeably has a phase curve offset, that is, the maximum in planet and star flux does not occur exactly at secondary eclipse. What process that occurs in a planetary atmosphere could cause such a phase curve offset?`,
      figures: [
        {
          key: "phase-curve",
          file: "hd189733b-phase-curve.png",
          caption: "Figure 2: Full-phase light curve of HD 189733b (relative flux against orbital phase; the lower panel has an expanded vertical scale). From Knutson et al. (2012).",
          sourcePage: 4,
        },
      ],
      solution: String.raw`**a)** From the top panel the transit depth is about $0.025$. The depth is the fraction of the star's disc covered, $\Delta F \approx (R_p/R_s)^2$, so

$$R_p = R_s\sqrt{\Delta F} = 0.805 \times 6.95\times10^{8}\ \text{m} \times \sqrt{0.025} \approx 8.8\times10^{7}\ \text{m} \approx 1.2\text{–}1.3\,R_J.$$

(The official solution gets $1.28\,R_J$ using $R_J = 6.91\times10^{7}$ m.)

**b)** The secondary eclipse (at phase $\pm 0.5$, lower panel) is about $0.002$ deep: that is the planet's light that disappears when it goes behind the star. The bottom of the eclipse, at relative flux about $0.9985$, is the star alone, so

$$\frac{F_p}{F_s} \approx \frac{0.002}{0.9985} \approx 2\times10^{-3}.$$

**c)** Just outside the eclipses the total flux peaks at about $1.0005$ (dayside facing us) and near transit it drops to about $0.9996$ (nightside facing us). Subtracting the star alone ($0.9985$):

$$\frac{F_{\text{day}}}{F_{\text{night}}} \approx \frac{1.0005 - 0.9985}{0.9996 - 0.9985} = \frac{2.0\times10^{-3}}{1.1\times10^{-3}} \approx 1.8.$$

**d)** Atmospheric circulation: strong winds (an eastward equatorial jet), driven by the large day–night temperature and pressure difference on a tidally locked planet, carry heat away from the substellar point, so the hottest region is shifted and the flux peak comes slightly before secondary eclipse.`,
      rubric: `Astro Coach marking guide (15 points):
- (a) Transit depth read as about 0.025 (0.024–0.026): 1 point.
- (a) Depth = (R_p/R_s)²: 2 points.
- (a) R_p ≈ 1.2–1.3 Jupiter radii: 1 point.
- (b) Eclipse depth read as about 0.0015–0.002: 1 point.
- (b) Recognises the eclipse depth is the planet's flux (relative to the star at eclipse bottom): 2 points.
- (b) Ratio about 2 × 10^−3 (1.5–2 × 10^−3): 1 point.
- (c) Dayside = maximum minus star-only level; nightside = minimum minus star-only level: 3 points.
- (c) Ratio about 1.8 (1.5–2.5 with consistent readings): 1 point.
- (d) Atmospheric circulation / winds (e.g. equatorial jet) redistributing heat from the dayside: 3 points.`,
      solutionSource: "ADAPTED",
      questionPages: [4],
      solutionPages: [5],
    },

    // --- Q7 Polytropes and Hawking radiation --------------------------------
    {
      number: "7",
      title: "Polytropes and Black Holes",
      section: MEDIUM,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Energy & Stellar Physics"],
      difficulty: "Advanced",
      points: 15,
      text: String.raw`**a) Mass-Radius Relation.** Stellar physics often involves guessing the equation of state for stars, which is typically a relation between the pressure $P$ and the density $\rho$. A family of such guesses are known as polytropes and go as follows:

$$P = K\rho^{\gamma} \qquad (1)$$

where $K$ is a constant and the exponent $\gamma$ is fixed to match a certain pressure and core temperature of a star. Given this, show that one can obtain a crude power-law scaling between the mass $M$ of a polytropic star and its radius $R$ of the form $M \propto R^{\alpha}$. Find the exponent $\alpha$ for polytropic stars (justify all steps in your argument). Also, indicate the exponent $\gamma$ for which the mass is independent of the radius $R$. Bonus: Why is this case interesting?

**b) Black Holes as Blackbodies.** The mass–radius relation for ideal non-rotating, uncharged black holes is known from relativity to be

$$R = \frac{2GM}{c^2} \qquad (2)$$

Moreover, Stephen Hawking showed that a black hole behaves like a blackbody, where its temperature (known as the Hawking temperature) is given by

$$T = \frac{\hbar c^3}{8\pi k_B G M} \qquad (3)$$

Given this information, show that the lifetime of a black hole (justify this phrase!) $t^*$ scales with its mass $M$ as

$$t^* \propto M^{\beta} \qquad (4)$$

where you should find the exponent $\beta$.

**c) Minimal Black Holes.** Using the information of the previous part, and Wien's displacement law, estimate the smallest possible mass of a black hole. State any possible flaws with this estimate.`,
      solution: String.raw`**a)** Hydrostatic equilibrium, $\dfrac{dP}{dr} = -\dfrac{GM\rho}{r^2}$ (from the forces on a thin shell of gas). For a crude estimate replace derivatives by ratios, with $P$ the central pressure:

$$\frac{dP}{dr} \approx \frac{\Delta P}{\Delta R} = \frac{-P}{R} \approx -\frac{GM\rho}{R^2} \quad\Longrightarrow\quad P \sim \frac{M\rho}{R} \sim \rho^2 R^2,$$

using $M \sim \rho R^3$. With $P = K\rho^\gamma$: $\rho^{\gamma - 2} \sim R^2$, so $\rho \sim R^{2/(\gamma - 2)}$ and

$$M \sim \rho R^3 \sim R^{\frac{3\gamma - 4}{\gamma - 2}} \quad\Longrightarrow\quad \alpha = \frac{3\gamma - 4}{\gamma - 2}.$$

For $\gamma = 4/3$ the mass is independent of the radius. **Bonus:** $\gamma = 4/3$ is the equation of state of a relativistic degenerate electron gas, used to model white dwarfs; a unique mass for that case is a crude way to understand the Chandrasekhar limit.

**b)** Treating the black hole as a blackbody, Stefan's law gives its power:

$$\frac{dE}{dt} = 4\pi R^2 \sigma T^4 = \frac{\hbar^4 c^8 \sigma}{256\pi^3 G^2 k_B^4}\,\frac{1}{M^2}.$$

This energy must come from the black hole's own mass-energy, $E = Mc^2$, so it loses mass: $-c^2\dfrac{dM}{dt} \propto \dfrac{1}{M^2}$, i.e. $M^2\,dM = -K\,dt$ for a constant $K$. The black hole shrinks and eventually evaporates completely — that is its "lifetime". Integrating from $M$ down to 0 gives $t^* \propto M^3$, so $\beta = 3$.

**c)** The typical emitted photon has the Wien peak wavelength $\lambda = b/T$ with $b = 2.9\times10^{-3}$ m K. A black hole can hardly be lighter than the energy of a single such photon (or a few, to conserve momentum):

$$Mc^2 \approx \frac{2\pi\hbar c}{\lambda} = \frac{2\pi\hbar c\,T}{b} = \frac{\hbar^2 c^4}{4 k_B G M b} \quad\Longrightarrow\quad M \approx \frac{\hbar c}{2\sqrt{G k_B b}} \approx 9.7\times10^{-9}\ \text{kg} \approx 4.9\times10^{-39}\,M_\odot.$$

Flaws: radiation is a quantum process, so "one photon carries everything" is only an order-of-magnitude picture; Wien's law in wavelength form does not give the peak photon energy (the frequency form should be used); and near this mass (the Planck scale) the classical formulas themselves stop being reliable. Any reasonably justified order-of-magnitude argument earns full credit.`,
      rubric: `Astro Coach marking guide (15 points):
- (a) Starts from hydrostatic equilibrium and makes the crude estimate P ~ GMρ/R: 2 points.
- (a) Uses M ~ ρR³ and P = Kρ^γ to reach α = (3γ − 4)/(γ − 2): 2 points.
- (a) γ = 4/3 gives mass independent of radius: 1 point.
- (a) Bonus (not needed for full marks): relativistic degenerate gas / white dwarfs / Chandrasekhar limit — credit may replace a missed point in (a).
- (b) Blackbody power 4πR²σT⁴ with the given R and T, giving P ∝ 1/M²: 2 points.
- (b) Energy loss comes from mass: c² dM/dt ∝ −1/M², so the hole evaporates (justifies "lifetime"): 2 points.
- (b) Integrates to t ∝ M³, β = 3: 1 point.
- (c) Sets the mass-energy equal to about one Wien-peak photon energy: 2 points.
- (c) M ≈ 10^−8 kg (any value within an order of magnitude with a justified argument): 1 point.
- (c) States at least one sensible flaw: 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [4, 5],
      solutionPages: [5, 6, 7],
    },

    // --- Q8 Varying-G cosmology ---------------------------------------------
    {
      number: "8",
      title: "A Universe with Changing Gravity",
      section: MEDIUM,
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Math, Data & Coordinates"],
      difficulty: "Advanced",
      points: 15,
      text: String.raw`In a rather weird universe, the gravitational constant $G$ varies as a function of the scale factor $a(t)$:

$$G = G_0 f(a) \qquad (5)$$

Consider the model $f(a) = e^{b(a-1)}$ where $b = 2.09$.

**a)** Assuming that the universe is flat, dark energy is absent, and the only constituent is matter, estimate the present age of this weird universe according to this model. Assume that the Friedmann equation

$$H(a)^2 = H_0^2\,(\Omega_m + \Omega_r + \Omega_k + \Omega_\Lambda) \qquad (6)$$

still holds in this setting.

**b)** What is the behaviour of the age of the universe $t$ as the scale factor $a(t) \to \infty$?

Note that all parameters with subscript 0 indicate their present value. Take the value of Hubble's constant as $H_0 = 67.8$ km s$^{-1}$ Mpc$^{-1}$.

Hint: You might need the following integrals:

$$\int_0^\infty x^2 e^{-x^2}\,dx = \frac{\sqrt{\pi}}{4} \qquad\qquad \int_0^1 x^2 e^{-x^2}\,dx \approx 0.189471 \qquad (7)$$`,
      solution: String.raw`**a)** In a flat, matter-only universe the Friedmann equation reduces to $H(a)^2 = H_0^2\,\Omega_m$ with $\Omega_m = \rho_m/\rho_c$ and $\rho_c = 3H_0^2/(8\pi G)$. Because $G = G_0 f(a)$ and $\rho_m = \rho_{m0}a^{-3}$, with $\Omega_{m0} = 1$:

$$\Omega_m = f(a)\,a^{-3} \quad\Longrightarrow\quad H(a) = H_0\sqrt{f(a)}\,a^{-3/2}.$$

Since $H = \dot a/a$, the age at scale factor $a$ is

$$t = \int_0^{a} \frac{da'}{a' H(a')} = \frac{1}{H_0}\int_0^{a} \frac{da'}{a'\sqrt{f(a')\,a'^{-3}}}.$$

With $f(a) = e^{b(a-1)}$ and the substitution $x = \sqrt{a'b/2}$ this becomes

$$t = \frac{4\sqrt{2}\,e^{b/2}}{b^{3/2} H_0}\int_0^{\sqrt{ab/2}} x^2 e^{-x^2}\,dx.$$

Today $a = 1$, and the upper limit $\sqrt{b/2} \approx 1.02$ is close to 1, so the hint's second integral applies approximately. With $1/H_0 \approx 14.4$ Gyr the prefactor is about 76.8 Gyr, giving

$$t_0 \approx 15\ \text{billion years}$$

— surprisingly close to the age of our own universe. (Using the hint's value exactly gives 14.5 Gyr; integrating to 1.02 gives 15.2 Gyr.)

**b)** As $a \to \infty$ the integral tends to the finite value $\sqrt{\pi}/4$, so

$$t \to \frac{\sqrt{2\pi}\,e^{b/2}\,b^{-3/2}}{H_0} \approx 34\ \text{billion years}.$$

The scale factor blows up to infinity in a **finite** time — a strange feature of this simplistic model. (The model is from "Varying-G Cosmology with Type Ia Supernovae" by Dungan and Prosper, arXiv:0909.5416, where $b = 2.09$ came from fitting supernova data without dark energy.)`,
      rubric: `Astro Coach marking guide (15 points):
- (a) Matter-only flat universe: H² = H₀²Ω_m with Ω_m ∝ G ρ, so Ω_m = f(a)a^−3: 3 points.
- (a) Age integral t = ∫ da/(aH): 2 points.
- (a) Correct substitution giving (4√2 e^(b/2) / (b^(3/2) H₀)) ∫ x²e^(−x²) dx: 3 points.
- (a) Converts H₀ correctly (1/H₀ ≈ 14.4 Gyr): 1 point.
- (a) Present age about 15 Gyr (14.5–15.3 accepted): 2 points.
- (b) Uses the infinite integral √π/4 to show t stays finite: 2 points.
- (b) t → about 34 Gyr, i.e. a → ∞ in finite time: 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [5],
      solutionPages: [7, 8],
    },

    // --- Q9 Boston to Beijing -----------------------------------------------
    {
      number: "9",
      title: "Boston to Beijing",
      section: MEDIUM,
      topic: "Math, Data & Coordinates",
      difficulty: "Intermediate",
      points: 15,
      text: String.raw`**a)** Find the shortest distance from Boston ($42.3601^\circ$ N, $71.0589^\circ$ W) to Beijing ($39.9042^\circ$ N, $116.4074^\circ$ E) traveling along the Earth's surface. Assume that the Earth is a uniform sphere of radius 6371 km.

**b)** What fraction of the path lies within the Arctic circle (north of $66.5608^\circ$ N)?`,
      solution: String.raw`**a)** Put Boston on the $x$-axis with the Earth's rotation axis as the $z$-axis. The cities differ in longitude by $360^\circ - (116.4074^\circ + 71.0589^\circ) = 172.5337^\circ$. As unit vectors $(\cos\text{lat}\cos\phi,\ \cos\text{lat}\sin\phi,\ \sin\text{lat})$:

$$\vec r_1 = (0.738925,\ 0,\ 0.673788), \qquad \vec r_2 = (-0.760614,\ 0.0996817,\ 0.641506).$$

Then $\cos\theta = \vec r_1\cdot\vec r_2 = -0.129798$, so $\theta = 97.458^\circ = 1.701$ rad, and

$$D = R_E\,\theta = 6371 \times 1.701 \approx 10{,}840\ \text{km}.$$

(Equivalently, use the spherical law of cosines: $\cos\theta = \sin\varphi_1\sin\varphi_2 + \cos\varphi_1\cos\varphi_2\cos\Delta\lambda$.)

**b)** The great circle lies in the plane through the Earth's centre containing both cities, with normal $\vec r_1 \times \vec r_2$:

$$-0.0671643\,x - 0.986517\,y + 0.0736573\,z = 0.$$

The Arctic circle is the circle $z = \sin 66.5608^\circ = 0.917483$, $x^2 + y^2 = 0.158225$. Solving these together gives the two points where the route crosses the Arctic circle; the angle between those two points (from their dot product, $0.692892$) is $46.14^\circ$. The route reaches a highest latitude of about $85.7^\circ$ N, so the whole stretch between the crossings is inside the Arctic circle, and the fraction is

$$\frac{46.14^\circ}{97.46^\circ} \approx 0.47.$$`,
      rubric: `Astro Coach marking guide (15 points):
- (a) Correct longitude difference 172.53° (going the short way over the pole): 1 point.
- (a) Correct method (vectors / dot product or spherical law of cosines): 3 points.
- (a) Central angle about 97.46°: 2 points.
- (a) Distance about 10,840 km: 1 point.
- (b) Describes the great-circle plane (normal r₁ × r₂, or the path's latitude as a function of position): 3 points.
- (b) Finds the two crossing points with latitude 66.56° N: 2 points.
- (b) Arc inside the Arctic circle about 46.1°: 2 points.
- (b) Fraction about 0.47: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [5],
      solutionPages: [8, 9],
    },

    // --- Q10 Magnetic moments and angular momenta ---------------------------
    {
      number: "10",
      title: "Magnetism and Rotation",
      section: LONG,
      topic: "Solar System",
      topics: ["Solar System", "Energy & Stellar Physics", "Math, Data & Coordinates"],
      difficulty: "Advanced",
      // The paper heads this question "25 points", but its printed part
      // values add up to 30. The printed part values are kept, so the
      // question is scored out of 30 (see the note in the text).
      points: 30,
      text: String.raw`In this problem, we will try to understand the relationship between magnetic moments and angular momenta, first for charged particles and how this can be extended to planetary objects.

(Astro Coach note: the original paper heads this question "25 points", but its parts are printed as 5 + 3 + 2 + 7 + 3 + 3 + 5 + 2 = 30 points. The printed part values are used here, so the question is scored out of 30.)`,
      figures: [
        {
          key: "magnetism-vs-rotation",
          file: "magnetic-moment-vs-angular-momentum.png",
          caption: "Figure 3: Surface magnetic moment (Gauss m³) vs angular momentum (kg m² s⁻¹) for solar system objects. Figure taken from Vallée, Fundamentals of Cosmic Physics, Vol. 19, pp 319–422, 1998.",
          part: "(g)",
          sourcePage: 6,
        },
      ],
      parts: [
        {
          label: "(a)",
          points: 5,
          prompt: String.raw`Consider a charge $e$ and mass $m$ moving in a circular orbit of radius $r$ with constant speed $v$. Write down the angular momentum $L$ of the charge and magnetic moment $\mu$ of the effective current loop. Recall that the magnetic moment of a current loop with current $I$ and radius $r$ is given as $\mu = IA$ where $A$ is the area of the loop.`,
          solution: String.raw`$L = mvr$. The charge passes any point once per orbit, so the current is $I = \dfrac{e}{2\pi r/v} = \dfrac{ev}{2\pi r}$ and

$$\mu = IA = \frac{ev}{2\pi r}\,\pi r^2 = \frac{evr}{2}.$$`,
          rubric: `Astro Coach marking guide (5 points):
- L = mvr: 2 points.
- Current I = ev/(2πr): 2 points.
- μ = evr/2: 1 point.`,
        },
        {
          label: "(b)",
          points: 3,
          prompt: String.raw`Use the above results to find a relationship between the magnetic moment $\mu$ and angular momentum $L$ in terms of intrinsic properties of the particle (charge, mass).`,
          solution: String.raw`Dividing, $\dfrac{\mu}{L} = \dfrac{evr/2}{mvr}$, so

$$\mu = \frac{e}{2m}\,L.$$`,
          rubric: `Astro Coach marking guide (3 points):
- Takes the ratio μ/L, eliminating v and r: 1 point.
- μ = (e/2m) L: 2 points.`,
        },
        {
          label: "(c)",
          points: 2,
          prompt: String.raw`The relationship from part (b) can be expressed as $\mu = \gamma L$. $\gamma$ is usually referred to as the classical gyromagnetic ratio of a particle. Evaluate the classical gyromagnetic ratio for an electron and for a neutron in SI units.`,
          solution: String.raw`Electron: $\gamma_e = \dfrac{e}{2m_e} = \dfrac{1.602\times10^{-19}}{2 \times 9.109\times10^{-31}} \approx 8.79\times10^{10}$ C/kg.

Neutron: $\gamma = 0$, since its charge is zero.`,
          rubric: `Astro Coach marking guide (2 points):
- Electron γ ≈ 8.8 × 10^10 C/kg: 1 point.
- Neutron γ = 0 (no charge): 1 point.`,
        },
        {
          label: "(d)",
          points: 7,
          prompt: String.raw`For extended objects such as planets, the magnetic dipole moment is not directly accessible whereas the surface magnetic field can be measured. Assuming a magnetic dipole of magnetic moment $\mu$ located at the center of a sphere of radius $r$, write down the expression for the surface magnetic field $B_{\text{surf}}$ and the surface magnetic moment defined as $\mathcal{M}_{\text{surf}} = B_{\text{surf}}\,r^3$. You may use the value of the angular dependence at the magnetic equator for the following parts.`,
          solution: String.raw`The field of a dipole at distance $r$ and magnetic colatitude $\theta$ is

$$\vec B_{\text{surf}} = \frac{\mu_0}{4\pi}\,\frac{\mu}{r^3}\left(2\cos\theta\,\hat r + \sin\theta\,\hat\theta\right).$$

The $1/r^3$ dependence is the key feature of any dipole field. Therefore

$$\mathcal{M}_{\text{surf}} = B_{\text{surf}}\,r^3 = \frac{\mu_0}{4\pi}\,\mu\left(2\cos\theta\,\hat r + \sin\theta\,\hat\theta\right),$$

which at the magnetic equator ($\theta = 90^\circ$) has magnitude $\dfrac{\mu_0}{4\pi}\mu$.`,
          rubric: `Astro Coach marking guide (7 points):
- Dipole field with μ₀/(4π) prefactor: 2 points.
- Correct 1/r³ dependence (partial credit if this is shown even with a wrong angular factor): 2 points.
- Angular dependence (2cos θ r̂ + sin θ θ̂), or the equatorial value: 1 point.
- M_surf = (μ₀/4π) μ × (angular factor), equatorial magnitude μ₀μ/(4π): 2 points.`,
        },
        {
          label: "(e)",
          points: 3,
          prompt: String.raw`Assuming a gyromagnetic relationship exists between magnetic moment $\mu$ and angular momentum $L$ of an extended object, write down the relationship between the surface magnetic moment $\mathcal{M}_{\text{surf}}$ and angular momentum $L$ as $\mathcal{M}_{\text{surf}} = \kappa L$. You will observe that $\kappa$ depends only on fundamental constants and intrinsic properties of the extended object.`,
          solution: String.raw`With $\mu = \gamma L$ and ignoring the angular factor,

$$\mathcal{M}_{\text{surf}} = \frac{\mu_0}{4\pi}\,\gamma L \quad\Longrightarrow\quad \kappa = \frac{\mu_0\gamma}{4\pi},$$

where $\gamma$ (like $e/2m$ for a particle) depends only on the object's own properties.`,
          rubric: `Astro Coach marking guide (3 points):
- Substitutes μ = γL into the part (d) result: 2 points.
- κ = μ₀γ/(4π): 1 point.`,
        },
        {
          label: "(f)",
          points: 3,
          prompt: String.raw`The surface magnetic moments for Mercury and the Sun are $5 \times 10^{12}$ T m$^3$ and $3 \times 10^{23}$ T m$^3$ respectively. Assuming the bodies are perfect spheres, evaluate the constant $\kappa$ for Mercury and the Sun. Comment on the values obtained and if they fit into the model developed in parts (c) and (d).`,
          solution: String.raw`Estimate each angular momentum as a uniform sphere, $L = \tfrac25 MR^2\omega$:

- Mercury ($M = 3.3\times10^{23}$ kg, $R = 2.44\times10^{6}$ m, rotation period 58.6 days): $L \approx 10^{30}$ kg m$^2$/s, so $\kappa \approx \dfrac{5\times10^{12}}{10^{30}} = 5\times10^{-18}$ T m s/kg.
- Sun ($M = 2\times10^{30}$ kg, $R = 7\times10^{8}$ m, rotation period about 25 days): $L \approx 10^{42}$ kg m$^2$/s, so $\kappa \approx 3\times10^{-19}$ T m s/kg.

(The unit of $\kappa$ is T m$^3$ divided by kg m$^2$ s$^{-1}$, i.e. T m s/kg; the official solution prints it as T s$^2$/(kg m).)

The two values agree to within about an order of magnitude even though the angular momenta differ by $10^{12}$. This suggests the same kind of mechanism (a dynamo) generates the magnetic dipole in both, as the simple $\mathcal{M}_{\text{surf}} = \kappa L$ model assumes.`,
          rubric: `Astro Coach marking guide (3 points):
- Angular momenta estimated as Iω (about 10^30 for Mercury and 10^42 kg m²/s for the Sun): 1 point.
- κ ≈ 5 × 10^−18 (Mercury) and ≈ 3 × 10^−19 (Sun) T m s/kg, within an order of magnitude: 1 point.
- Comment: similar κ (within an order of magnitude) suggests a similar dynamo mechanism, consistent with the model: 1 point.`,
        },
        {
          label: "(g)",
          points: 5,
          prompt: String.raw`The surface magnetic moments $\mathcal{M}_{\text{surf}}$ and angular momenta $L$ of various solar system bodies are plotted in Figure 3. Justify that the data implies $\mathcal{M}_{\text{surf}} \sim L^{\alpha}$ and calculate the constant $\alpha$. What is the expected value of $\alpha$ from the model developed in parts (c) and (d)?

[[figure:magnetism-vs-rotation]]`,
          solution: String.raw`The plot is log–log, and the dynamo bodies lie close to a straight line. A straight line on a log–log plot means a power law, $\mathcal{M}_{\text{surf}} \sim L^{\alpha}$, with $\alpha$ equal to the slope.

Reading two points on the dashed line (e.g. Earth at $L \approx 6\times10^{33}$, $\mathcal{M} \approx 10^{20}$ G m$^3$, and Jupiter at $L \approx 4\times10^{39}$, $\mathcal{M} \approx 2\times10^{24}$ G m$^3$):

$$\alpha \approx \frac{\log(2\times10^{24}/10^{20})}{\log(4\times10^{39}/6\times10^{33})} \approx \frac{4.3}{5.8} \approx 0.8.$$

The model of parts (c)–(e), $\mathcal{M}_{\text{surf}} = \kappa L$, predicts $\alpha = 1$; the data give $\alpha < 1$.`,
          rubric: `Astro Coach marking guide (5 points):
- Recognises the log–log axes: a straight line means a power law: 2 points.
- Slope measured from the trend line: α ≈ 0.7–0.9 (full credit for realising α < 1; α = 1 from the data earns partial credit): 2 points.
- States the model's expected value α = 1: 1 point.`,
        },
        {
          label: "(h)",
          points: 2,
          prompt: "Certain bodies such as Venus, Mars and the Moon are remarkably separated from the trend observed for other bodies. What can you say about magnetism in these bodies when compared to the others?",
          solution: String.raw`Venus, Mars and the Moon have no active dynamo today, so their (much weaker) magnetism is of a different nature from the other bodies. They probably had dynamos in the past that have since died down; what we measure is remanent magnetism frozen into their crusts from that past dynamo.`,
          rubric: `Astro Coach marking guide (2 points):
- No active dynamo now: 1 point.
- Their magnetism is remanent (fossil) crustal magnetism from a past dynamo: 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [5, 6],
      solutionPages: [9, 10],
    },

    // --- Q11 Cygnus X-1 -----------------------------------------------------
    {
      number: "11",
      title: "Cygnus X-1",
      section: LONG,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Gravity & Orbits", "Light & Spectra"],
      difficulty: "Advanced",
      points: 25,
      text: String.raw`Cygnus X-1/HDE 226868 is a binary system consisting of a black hole Cygnus X-1 and blue supergiant HDE 226868. The mass of HDE 226868 is $30\,M_\odot$ and the period of the binary system is 5.6 days. Radial velocity data reveals that the orbital velocity of HDE 226868 is 116.68 km/s at apoapse and 123.03 km/s at periapse.`,
      figures: [
        {
          key: "spectra",
          file: "cygnus-x1-spectra.png",
          caption: "Figure 4: Three x-ray spectra from Cygnus X-1 (photons cm⁻² s⁻¹ against E in keV). From Gou et al. (2011).",
          part: "(d)",
          sourcePage: 7,
        },
      ],
      parts: [
        {
          label: "(a)",
          points: 5,
          prompt: "Determine the eccentricity of the orbit of HDE 226868.",
          solution: String.raw`With no external forces, the angular momentum of HDE 226868 about the centre of mass is conserved; at periapse and apoapse the velocity is perpendicular to the radius, so

$$m_1 r_{1,a} v_{1,a} = m_1 r_{1,p} v_{1,p} \quad\Longrightarrow\quad \frac{v_{1,p}}{v_{1,a}} = \frac{r_{1,a}}{r_{1,p}} = \frac{a(1+e)}{a(1-e)}.$$

Solving for $e$:

$$e = \frac{v_{1,p} - v_{1,a}}{v_{1,p} + v_{1,a}} = \frac{123.03 - 116.68}{123.03 + 116.68} \approx 0.0265.$$`,
          rubric: `Astro Coach marking guide (5 points):
- Conservation of angular momentum at periapse and apoapse (r_a v_a = r_p v_p): 2 points.
- r_a/r_p = (1 + e)/(1 − e): 1 point.
- e = (v_p − v_a)/(v_p + v_a): 1 point.
- e ≈ 0.0265: 1 point.`,
        },
        {
          label: "(b)",
          points: 5,
          prompt: "Determine the length of the semimajor axis of the orbit of HDE 226868.",
          solution: String.raw`By Kepler's second law the areal velocity is constant. At apoapse it is $\tfrac12 r_{1,a}v_{1,a}$, and over one period the whole ellipse, of area $\pi a_1^2\sqrt{1-e^2}$, is swept:

$$\pi a_1^2\sqrt{1-e^2} = \tfrac12 a_1(1+e)\,v_{1,a}T \quad\Longrightarrow\quad a_1 = \sqrt{\frac{1+e}{1-e}}\;\frac{v_{1,a}T}{2\pi}.$$

With $v_{1,a} = 116{,}680$ m/s and $T = 5.6$ d $= 4.838\times10^{5}$ s:

$$a_1 = \sqrt{\frac{1.0265}{0.9735}} \times \frac{116680 \times 4.838\times10^{5}}{2\pi} \approx 9.23\times10^{9}\ \text{m}.$$`,
          rubric: `Astro Coach marking guide (5 points):
- Kepler's second law / constant areal velocity (or equivalent use of orbital speed and period): 2 points.
- Correct relation a₁ = √((1+e)/(1−e)) v_a T/(2π) (or equivalent): 2 points.
- a₁ ≈ 9.23 × 10^9 m: 1 point.`,
        },
        {
          label: "(c)",
          points: 5,
          prompt: "Determine the mass of Cygnus X-1, to at least 3 significant figures.",
          solution: String.raw`Kepler's third law for the relative orbit, $(a_1 + a_2)^3 = \dfrac{G(m_1+m_2)}{4\pi^2}T^2$, together with the centre-of-mass condition $a_1 m_1 = a_2 m_2$ gives

$$\left[\frac{G(m_1+m_2)}{4\pi^2}T^2\right]^{1/3} - a_1 - \frac{a_1 m_1}{m_2} = 0.$$

This cannot be solved in closed form; solving numerically (e.g. by iteration) with $m_1 = 30\,M_\odot$ gives

$$m_2 \approx 2.40\times10^{31}\ \text{kg} \approx 12.1\,M_\odot.$$`,
          rubric: `Astro Coach marking guide (5 points):
- Kepler's third law with the total separation a₁ + a₂ and total mass: 2 points.
- Centre-of-mass relation a₁m₁ = a₂m₂: 1 point.
- Solves the resulting equation numerically/iteratively: 1 point.
- m₂ ≈ 12.1 M☉ (2.40 × 10^31 kg): 1 point.`,
        },
        {
          label: "(d)",
          points: 4,
          leadIn: String.raw`The peak blackbody temperature of an accretion disk occurs at a distance of $r_{\text{peak}}$ and a temperature of $T_{\text{peak}}$. One can determine the peak blackbody temperature by assuming that it corresponds to the peak in the x-ray spectrum. Due to relativistic effects, the actual peak blackbody temperature $T_{\text{peak}}$ is related to the peak color temperature $T_{\text{color}}$ derived from observed spectral data by $T_{\text{color}} = f_{GR} f_{col} T_{\text{peak}}$, where $f_{GR} \approx 0.510$ and $f_{col} \approx 1.7$. Three x-ray spectra of Cygnus X-1 are shown in Figure 4.`,
          prompt: String.raw`[[figure:spectra]]

Using spectrum SP2, determine the peak blackbody temperature $T_{\text{peak}}$ of the accretion disk around Cygnus X-1.`,
          solution: String.raw`The SP2 spectrum peaks at about $E = 1.5$ keV $= 2.4\times10^{-16}$ J. A photon of this energy has wavelength $\lambda = hc/E$, and Wien's law $T = b/\lambda$ then gives

$$T_{\text{color}} = \frac{Eb}{hc} = \frac{2.4\times10^{-16} \times 2.898\times10^{-3}}{6.626\times10^{-34} \times 3.00\times10^{8}} \approx 3.50\times10^{6}\ \text{K}.$$

Correcting for the relativistic and colour factors:

$$T_{\text{peak}} = \frac{T_{\text{color}}}{f_{GR} f_{col}} = \frac{3.50\times10^{6}}{0.510 \times 1.7} \approx 4.0\times10^{6}\ \text{K}.$$`,
          rubric: `Astro Coach marking guide (4 points):
- Peak of SP2 read at about 1.5 keV (1.2–2 keV): 1 point.
- Converts the peak photon energy to a colour temperature (via λ = hc/E and Wien's law, or E ≈ 2.8 kT): 1 point.
- Divides by f_GR f_col: 1 point.
- T_peak ≈ 4 × 10^6 K (consistent with the reading): 1 point.`,
        },
        {
          label: "(e)",
          points: 4,
          leadIn: String.raw`The total luminosity of the blackbody component of the accretion disk can be estimated by $L_{\text{disk}} \approx 4\pi\sigma r_{\text{peak}}^2 T_{\text{peak}}^4$ (Makishima et al. 1986). The radius $r_{\text{last}}$ of the innermost edge of the accretion disk is related to the radius $r_{\text{peak}}$ of the peak blackbody temperature by $r_{\text{peak}} = \eta\, r_{\text{last}}$, where $\eta \approx 0.63$. In 1996, the blackbody luminosity of the accretion disk around Cygnus X-1 was estimated to be $2.2 \times 10^{37}$ erg/s.`,
          prompt: String.raw`Determine the radius $r_{\text{last}}$ of the innermost edge of the accretion disk around Cygnus X-1.`,
          solution: String.raw`$L_{\text{disk}} = 2.2\times10^{37}$ erg/s $= 2.2\times10^{30}$ W. From $L_{\text{disk}} = 4\pi\sigma r_{\text{peak}}^2 T_{\text{peak}}^4$:

$$r_{\text{peak}} = \frac{1}{T_{\text{peak}}^2}\sqrt{\frac{L_{\text{disk}}}{4\pi\sigma}} = \frac{1}{(4.04\times10^{6})^2}\sqrt{\frac{2.2\times10^{30}}{4\pi \times 5.67\times10^{-8}}} \approx 108\ \text{km}.$$

The official solution then takes $r_{\text{last}} = \eta\, r_{\text{peak}} \approx 0.63 \times 108 \approx 68$ km, and this is the value that gives a physical spin in part (f).

Note: the relation as printed, $r_{\text{peak}} = \eta\, r_{\text{last}}$, would give $r_{\text{last}} = r_{\text{peak}}/\eta \approx 171$ km. That reading places the hottest ring inside the inner edge of the disk (impossible, since $\eta < 1$), and it leads to no valid spin in (f); the intended relation is $r_{\text{last}} = \eta\, r_{\text{peak}}$.`,
          rubric: `Astro Coach marking guide (4 points):
- Converts the luminosity to SI (2.2 × 10^30 W): 1 point.
- Solves for r_peak ≈ 108 km: 2 points.
- r_last ≈ 68 km using r_last = η r_peak (official). A student who follows the printed relation literally and gets r_last ≈ 171 km with correct working also earns this point: 1 point.`,
        },
        {
          label: "(f)",
          points: 2,
          leadIn: String.raw`Assume that the innermost edge of the accretion disk is located at the innermost stable circular orbit (ISCO), whose radius $r_{\text{isco}}$ is a function of the spin of the black hole. The relationship between $r_{\text{isco}}$ and $a_*$, the spin parameter of the black hole, can be estimated by:

$$r_{\text{isco}} = \frac{GM}{c^2}\left(\sqrt{8.354\cdot\left[(2 - a_*)^2 - 1\right]} + 1\right)$$`,
          prompt: String.raw`Determine the spin parameter $a_*$ of Cygnus X-1.`,
          solution: String.raw`(Astro Coach solution: the official solutions stop at part (e).)

For $M = 12.1\,M_\odot$, $\dfrac{GM}{c^2} = 12.1 \times 1.477\ \text{km} \approx 17.9$ km. Setting $r_{\text{isco}} = r_{\text{last}} \approx 68$ km:

$$\sqrt{8.354\left[(2-a_*)^2 - 1\right]} + 1 = \frac{68}{17.9} \approx 3.8 \quad\Longrightarrow\quad (2-a_*)^2 = 1 + \frac{(2.8)^2}{8.354} \approx 1.94.$$

So $2 - a_* \approx 1.39$ and

$$a_* \approx 0.6.$$

(A check on the formula: $a_* = 0$ gives $r_{\text{isco}} \approx 6\,GM/c^2$, the Schwarzschild value. With $r_{\text{last}} \approx 171$ km the ratio would be about 9.6, beyond the largest possible value of 9 for $a_* = -1$, so no physical spin fits — another sign that $r_{\text{last}} \approx 68$ km is intended.)`,
          rubric: `Astro Coach marking guide (2 points):
- Sets r_isco = r_last and uses GM/c² for about 12 M☉ (≈ 17.9 km): 1 point.
- a* ≈ 0.6 (0.55–0.65). A student using r_last ≈ 171 km who correctly notes that no physical spin (|a*| ≤ 1) fits also earns this point: 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [6, 7],
      solutionPages: [11, 12],
    },
  ],
};
