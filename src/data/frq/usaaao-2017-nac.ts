// USAAAO National Astronomy Olympiad 2017: 3 short questions (5 points),
// 3 medium questions (10 points) and 3 long questions (15 points), 90
// points in total. The whole paper is free response.
//
// USAAAO published this exam only as one "Problems with Solutions" PDF, so
// both the problems and the official solutions come from that file. The
// official solutions are lightly edited for clarity (ADAPTED):
//   - Q6: the official azimuth, 138.37°, is an arithmetic slip; the correct
//     value from its own cos A = −0.7513 is 138.7°. The solution says so.
//   - Q9 (i): the official solution only links to an article, so Astro
//     Coach wrote the explanation of the 21 cm line.
// Only Q7 has official per-part points (from its marking scheme); the other
// multi-part questions print a single total and are graded as a whole with
// an Astro Coach marking guide.
//
// Figures 3–6 in Q9 are reproduced from the textbooks and paper the exam
// credits; each caption keeps the exam's own credit line.
//
// LaTeX is written inside String.raw template literals, so a backslash is
// typed once (\frac, not \\frac).
import type { FrqSeedExam } from "./types";

const YEAR = 2017;
const PDF = "https://usaaao.org/wp-content/uploads/2017/06/2017-nao-solutions.pdf";
const SHORT = "Short Questions";
const MEDIUM = "Medium Questions";
const LONG = "Long Questions";

export const usaaao2017Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: YEAR,
  examName: "National Astronomy Olympiad",
  slug: "usaaao-2017-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: PDF,
  solutionPdfUrl: PDF,
  attributionText: `Source: USA Astronomy and Astrophysics Organization (USAAAO), National Astronomy Olympiad ${YEAR}. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.`,
  questions: [
    // --- Question 1 ---------------------------------------------------------
    {
      number: "1",
      title: "Pressure inside a Neutron Star",
      section: SHORT,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`Estimate to order of magnitude the pressure, in Pa, at the center of a neutron star with a mass of $2\,M_\odot$ and a density of $5.00\times10^{17}\ \text{kg/m}^3$. Assume that the neutron star is in hydrostatic equilibrium and that its density is constant with radius.`,
      solution: String.raw`**Radius.** For constant density, $M = \tfrac{4}{3}\pi R^3\rho$:

$$R = \left(\frac{3M}{4\pi\rho}\right)^{1/3} = \left(\frac{3 \times 3.98\times10^{30}}{4\pi \times 5.00\times10^{17}}\right)^{1/3} \approx 1.24\times10^{4}\ \text{m}$$

**Simple answer (order-of-magnitude estimate).** Hydrostatic equilibrium, $dP/dr = -\rho g$, gives roughly $P_c \sim \rho g R \sim \rho\,\dfrac{GM}{R^2}\,R$. With $M \sim \rho R^3$:

$$P_c \sim \frac{\rho G M}{R} \sim G\rho^2R^2 \approx 2.6\times10^{33}\ \text{Pa}$$

**Full answer (with calculus).** Inside the star $M(r) = \tfrac{4}{3}\pi r^3\rho$, so

$$\frac{dP}{dr} = -\rho\,\frac{GM(r)}{r^2} = -\frac{4\pi}{3}G\rho^2 r$$

Integrating from the centre ($P = P_c$) to the surface ($P = 0$ at $r = R$):

$$P_c = \frac{2\pi}{3}G\rho^2R^2 \approx 5.4\times10^{33}\ \text{Pa}$$

So $P_c \sim 10^{33}$ Pa; any answer of this order is accepted.`,
      rubric: String.raw`Official marking: accept any answer with P_c ~ 10³³ Pa. Astro Coach breakdown (5 points):
- Finds the radius from the mass and constant density (R ≈ 12 km): 1 point.
- Uses hydrostatic equilibrium, dP/dr = −ρg (or P ~ ρgR): 2 points.
- Correct expression (P_c ~ Gρ²R², or (2π/3)Gρ²R² exactly): 1 point.
- P_c of order 10³³ Pa: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- Question 2 ---------------------------------------------------------
    {
      number: "2",
      title: "Angular Momentum of the Solar System",
      section: SHORT,
      topic: "Solar System",
      topics: ["Solar System", "Gravity & Orbits"],
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`The current angular momentum of objects in our Solar System tells us about its formation. Given that the rotation rate of the Sun is $\Omega = 2.9\times10^{-6}\ \text{s}^{-1}$, calculate its rotational angular momentum in kg m$^2$ s$^{-1}$. Similarly, given that the mass of Jupiter is $1.90\times10^{27}$ kg and its semi-major axis is 5.2 AU, calculate its orbital angular momentum in kg m$^2$ s$^{-1}$. Which is larger? What does that tell us about the formation process of the Sun and our Solar System?`,
      solution: String.raw`**The Sun's spin.** Treating the Sun as a uniform sphere, $I = \tfrac{2}{5}MR^2$:

$$L_\odot = \frac{2}{5}M_\odot R_\odot^2\,\Omega = \frac{2}{5}(1.99\times10^{30})(6.96\times10^{8})^2(2.9\times10^{-6}) \approx 1.1\times10^{42}\ \text{kg m}^2\,\text{s}^{-1}$$

**Jupiter's orbit.** For a circular orbit $v = \sqrt{GM_\odot/a}$, so $L = M_J v a = M_J\sqrt{GM_\odot a}$:

$$L_J = 1.90\times10^{27}\sqrt{(6.67\times10^{-11})(1.99\times10^{30})(5.2 \times 1.50\times10^{11})} \approx 1.9\times10^{43}\ \text{kg m}^2\,\text{s}^{-1}$$

**Comparison.** The angular momentum of Jupiter's orbit is larger — about 20 times the Sun's spin, even though the Sun has 99.9% of the mass.

**What it tells us.** The Sun and planets formed from a single rotating cloud. During formation there was significant transfer (partitioning) of angular momentum from the Sun into its protoplanetary disk, and that angular momentum is now carried by the planets. (If the real, centrally concentrated Sun is used, its $I$ is even smaller, which strengthens the conclusion.)`,
      rubric: String.raw`Astro Coach marking guide (5 points):
- L_⊙ = (2/5)MR²Ω ≈ 1.1 × 10⁴² kg m² s⁻¹: 1 point.
- L_J = M_J √(GM_⊙a) (or M_J v a with the orbital speed): 1 point.
- L_J ≈ 1.9 × 10⁴³ kg m² s⁻¹: 1 point.
- States that Jupiter's orbital angular momentum is larger: 1 point.
- Explains that angular momentum was transferred from the Sun to the protoplanetary disk / is now held by the planets: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- Question 3 ---------------------------------------------------------
    {
      number: "3",
      title: "Apparent Speed of a Quasar Jet",
      section: SHORT,
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Light & Spectra"],
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`A jet was emitted from quasar A towards the Earth, with velocity $v$ (see Figure 1). After $\tau$ hours, the jet arrived at point B. Let us set time $t_A$ as the time when the jet from A arrived at the Earth, and set time $t_B$ as the time when the jet from B arrived at the Earth. What is the time difference $\Delta t = t_B - t_A$?

[[figure:quasar-jet]]`,
      figures: [
        { key: "quasar-jet", file: "quasar-jet.png", caption: "Figure 1: the jet travels from A to B at angle θ to the line of sight to the Earth.", sourcePage: 2 },
      ],
      solution: String.raw`*Here "the jet from A/B arriving at the Earth" means the light the jet gives off at A and at B.*

The jet travels a distance $v\tau$ from A to B. Draw a line from B perpendicular to the line of sight through A, meeting it at point C. Light from B and light from C are then the same distance from the (very distant) Earth, so they take the same time to arrive. We only need to compare the light from A with the jet over the stretch before that.

**Light from A to C.** The distance AC is the component of the jet's path along the line of sight, $v\tau\cos\theta$, so the light emitted at A takes

$$t_1 = \frac{v\tau\cos\theta}{c}$$

to reach C.

**Time difference.** The jet reaches B (level with C) a time $\tau$ after leaving A, but the light from A has already been travelling towards Earth for $t_1$ of that time. So

$$\Delta t = t_B - t_A = \tau - \frac{v\tau\cos\theta}{c} = \frac{c - v\cos\theta}{c}\,\tau$$

Because $\Delta t < \tau$, a jet moving close to the speed of light nearly towards us can appear to cross the sky faster than light (superluminal motion).`,
      rubric: String.raw`Astro Coach marking guide (5 points):
- Distance travelled by the jet is vτ: 1 point.
- Recognises that only the line-of-sight component vτ cos θ changes the light travel time (the perpendicular point C is equidistant from Earth): 2 points.
- Light from A reaches the level of B after t₁ = vτ cos θ / c: 1 point.
- Δt = τ(1 − v cos θ / c): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- Question 4 ---------------------------------------------------------
    {
      number: "4",
      title: "A Universe That Jumps in Size",
      section: MEDIUM,
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Light & Spectra"],
      difficulty: "Intermediate",
      points: 10,
      text: String.raw`Let us think about a hypothetical universe where matter is uniformly distributed and the universe looks the same regardless of the direction one is looking at. 15 billion years ago, the expansion of the universe started. After 3 billion years from the initial point of the expansion, the expansion suddenly stopped. After 7 billion years from the sudden halt of the expansion, suddenly the size of the universe doubles, and afterwards the size of the Universe remained constant until now. We observe from Earth two stellar objects: A and B. A is 3 billion light years away and B is 10 billion light years away. Determine the redshift $z$ of each object.`,
      solution: String.raw`**Timeline.** The expansion starts 15 billion years ago, stops 12 billion years ago, the universe doubles in size 5 billion years ago, and it stays the same size until now.

**Object A.** Light from A left it 3 billion years ago, *after* the doubling. The size of the universe has not changed since then, so the photon's wavelength has not been stretched and its energy is unchanged:

$$z_A = 0$$

**Object B.** Light from B left it 10 billion years ago, while the universe was static. 5 billion years after the light was emitted, the universe suddenly doubled in size. Cosmological redshift stretches wavelengths in proportion to the size of the universe, so the wavelength doubled, $\lambda = 2\lambda_0$ (equivalently, the photon energy $E = hc/\lambda$ halved). Nothing changed after that, so

$$z_B = \frac{\lambda - \lambda_0}{\lambda_0} = \frac{2\lambda_0 - \lambda_0}{\lambda_0} = 1$$`,
      rubric: String.raw`Astro Coach marking guide (10 points):
- Uses light travel time: light from A was emitted 3 Gyr ago and from B 10 Gyr ago, and places each on the timeline: 2 points.
- Cosmological redshift: 1 + z = (size now)/(size at emission), i.e. wavelengths stretch with the universe: 3 points.
- A: emitted after the doubling, no change in size, z = 0: 2 points.
- B: emitted during the static phase, universe doubled afterwards, wavelength doubled, z = 1: 3 points.`,
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [3],
    },

    // --- Question 5 ---------------------------------------------------------
    {
      number: "5",
      title: "The Eddington Luminosity",
      section: MEDIUM,
      topic: "Energy & Stellar Physics",
      topics: ["Energy & Stellar Physics", "Stars & Black Holes"],
      difficulty: "Intermediate",
      points: 10,
      text: String.raw`The Eddington luminosity (or Eddington limit) is the maximum luminosity that an astrophysical object can achieve when there is a balance between the force of radiation acting outward and the gravitational force acting inward.

**a)** Consider a spherical cloud of ionized hydrogen with mass $m$ and opacity $\kappa$. Taking the opacity to be $\kappa = \sigma_T/m_p$, where $\sigma_T$ is the Thomson cross-section for electrons, and considering that the cloud is at a distance $R$ from a source with luminosity $L$ and mass $M$, what is the correct expression for the Eddington luminosity? Express your answer in terms of the mass $M$, opacity $\kappa$, and any universal constants you might need.

**b)** Consider (A) an AGB star (e.g. Mira), (B) the Sun, and (C) a Gamma-ray burst (GRB). The three objects have rough luminosities (in units of Eddington luminosity): i) $L \sim 3\times10^{-5}\,L_\text{Edd}$, ii) $L \sim 0.2\,L_\text{Edd}$, iii) $L \sim 10^{12}\,L_\text{Edd}$ (not necessarily in order). Match each luminosity (i through iii) to the corresponding astrophysical object (A through C) and justify your answer. Remember: the Eddington luminosity is the maximum luminosity that an astrophysical object can achieve when there is a balance between the force of radiation acting outward and the gravitational force acting inward.`,
      solution: String.raw`**a)** Consider the ionised hydrogen, one proton (mass $m_p$) and one electron at a time.

- Gravity on a mass $m$: $F_g = \dfrac{GMm}{R^2}$.
- The radiation flux at distance $R$ is $\dfrac{L}{4\pi R^2}$. Radiation carries momentum flux (pressure) flux$/c$, and the electrons present a cross-section $\sigma_T$ each, so the radiation force per proton–electron pair is $F_\text{rad} = \dfrac{L\,\sigma_T}{4\pi R^2 c}$.

Setting the forces equal for each pair ($m = m_p$):

$$\frac{GMm_p}{R^2} = \frac{L_\text{Edd}\,\sigma_T}{4\pi R^2 c} \quad\Longrightarrow\quad L_\text{Edd} = \frac{4\pi GMc\,m_p}{\sigma_T} = \frac{4\pi GMc}{\kappa}$$

The distance $R$ cancels, so the limit depends only on the mass.

**b)**
- **(B) The Sun ↔ i) $L \sim 3\times10^{-5}\,L_\text{Edd}$.** The Sun is stable over billions of years, so gravity must dominate by a huge factor. (For one solar mass $L_\text{Edd} \approx 3\times10^{4}\,L_\odot$.)
- **(A) AGB star (Mira) ↔ ii) $L \sim 0.2\,L_\text{Edd}$.** AGB stars are thousands of times more luminous than the Sun, with only a few solar masses, so they approach the limit — but they are still sub-Eddington. (Radiation pressure helps drive their strong winds.)
- **(C) GRB ↔ iii) $L \sim 10^{12}\,L_\text{Edd}$.** Gamma-ray bursts are explosions, not objects in equilibrium: radiation overwhelms gravity by many orders of magnitude. They are the brightest electromagnetic events known in the universe.`,
      rubric: String.raw`Astro Coach marking guide (10 points):
- (a) Gravitational force GMm/R²: 1 point.
- (a) Radiation force from flux L/(4πR²), momentum flux/c and the Thomson cross-section (or κ per unit mass): 2 points.
- (a) Balances the forces to get L_Edd = 4πGMc m_p/σ_T = 4πGMc/κ: 2 points.
- (b) Sun ↔ 3 × 10⁻⁵ L_Edd with justification (stable, gravity dominates): 2 points (1 match, 1 reason).
- (b) AGB star ↔ 0.2 L_Edd with justification (very luminous but sub-Eddington): 1 point.
- (b) GRB ↔ 10¹² L_Edd with justification (explosive, radiation dominates): 2 points (1 match, 1 reason).`,
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [3],
    },

    // --- Question 6 ---------------------------------------------------------
    {
      number: "6",
      title: "Altitude and Azimuth",
      section: MEDIUM,
      topic: "Math, Data & Coordinates",
      difficulty: "Intermediate",
      points: 10,
      text: String.raw`You are observing a star with declination $\delta = 42^\circ21'$ N and hour angle $H = 8^\text{h}16^\text{m}42^\text{s}$. If you are in a place with latitude $\varphi = 60^\circ$, compute the star's azimuth angle ($A$) and its height above the horizon ($h$) at the moment of observation.`,
      solution: String.raw`This solution measures the azimuth $A$ clockwise from **south** (the convention of *Fundamental Astronomy* by Karttunen et al.).

**Set-up.** Convert the hour angle: $H = 8^\text{h}16^\text{m}42^\text{s} = 124^\circ10.5'$. In the astronomical triangle, let $Z$ be the zenith, $P$ the north celestial pole and $X$ the star. Then $\angle ZPX = H$ and

$$PZ = 90^\circ - \varphi = 30^\circ, \qquad PX = 90^\circ - \delta = 47^\circ39'$$

**Altitude.** The spherical law of cosines gives the zenith distance $ZX$:

$$\cos ZX = \cos PZ\cos PX + \sin PZ\sin PX\cos H = 0.3758 \quad\Longrightarrow\quad ZX = 67.92^\circ$$

$$h = 90^\circ - ZX = 22.08^\circ = 22^\circ4.6'$$

**Azimuth.** The angle at $Z$ between the meridian (towards $P$) and the star is $180^\circ - A$, so

$$\cos PX = \cos PZ\cos ZX + \sin PZ\sin ZX\cos(180^\circ - A) = \cos PZ\cos ZX - \sin PZ\sin ZX\cos A$$

$$\cos A = \frac{\cos PZ\cos ZX - \cos PX}{\sin PZ\sin ZX} = -0.7513 \quad\Longrightarrow\quad A = 138.7^\circ = 138^\circ43'$$

The star is west of the meridian ($H > 0$), so $A = 138.7^\circ$ west of south — that is, in the north-west, at azimuth $318.7^\circ$ measured from north through east.

*Note: the official solution prints $A = 138.37^\circ$ ($138^\circ22'12''$). That is an arithmetic slip — its own value $\cos A = -0.75134$ gives $A = 138.7^\circ$.*`,
      rubric: String.raw`Astro Coach marking guide (10 points):
- Hour angle converted to degrees (124.18°): 1 point.
- Astronomical triangle set up with sides 90° − φ, 90° − δ and angle H at the pole: 2 points.
- Cosine rule for the zenith distance: 2 points.
- h ≈ 22.1°: 1 point.
- Correct relation for the azimuth (cosine or sine rule, handling the ambiguity): 2 points.
- A ≈ 138.7° from south (≈ 318.7° from north), convention stated: 2 points. Accept the official 138.4° only with a clear, correct method.`,
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [3, 4],
    },

    // --- Question 7 ---------------------------------------------------------
    {
      number: "7",
      title: "Viscous Protoplanetary Disks",
      section: LONG,
      topic: "Exoplanets & Life",
      topics: ["Exoplanets & Life", "Stars & Black Holes", "Energy & Stellar Physics"],
      difficulty: "Advanced",
      points: 15,
      text: String.raw`The exact source of viscosity for accretion disks is unknown, so astrophysicists often use a parameterization for the viscosity such that the viscosity ($\nu$) is $\nu = \alpha c_s^2\,\Omega^{-1}$, where $\alpha$ is a free parameter, $c_s$ the disk sound speed, and $\Omega$ the disk rotation rate.`,
      parts: [
        {
          label: "(a)",
          points: 8,
          prompt: String.raw`For protoplanetary disks around Sun-like stars, it is thought that the temperature profile follows the power law $T \sim 100\ \text{K}\,(R/1\ \text{AU})^{-1/2}$. Using this, derive an expression for how the disk viscosity depends on $\alpha$, disk temperature, disk radius, and stellar mass. Note that the sound speed is $\sqrt{P/\rho}$, and one can write the ideal gas law $P = \dfrac{k_b}{\mu m_p}\rho T$, where $k_b$ is Boltzmann's constant, $\mu$ is the mean molecular weight and $m_p$ the mass of the proton. What interesting property does this solution have?`,
          solution: String.raw`**Ingredients.** The sound speed squared is $c_s^2 = P/\rho = \dfrac{k_bT}{\mu m_p}$. The disk rotates at the Keplerian rate $\Omega = \sqrt{GM/R^3}$.

**Viscosity.**

$$\nu = \frac{\alpha c_s^2}{\Omega} = \alpha\,\frac{k_bT}{\mu m_p}\sqrt{\frac{R^3}{GM}}$$

Now insert $T = 100\ \text{K}\,(R/1\ \text{AU})^{-1/2}$:

$$\nu = \alpha\,\frac{k_b}{\mu m_p}\,(100\ \text{K})\left(\frac{R}{1\ \text{AU}}\right)^{-1/2}\frac{R^{3/2}}{\sqrt{GM}} = \frac{\alpha k_b\,(100\ \text{K})\sqrt{1\ \text{AU}}}{\mu m_p\sqrt{GM}}\;R$$

with $1\ \text{AU} = 1.5\times10^{11}\ \text{m}$.

**Interesting property:** the viscosity is **linear in radius**, $\nu \propto R$, with everything else collected into a constant (for a given star and $\alpha$).`,
          rubric: String.raw`Official marking scheme (8 points): viscosity linear in radius with the constant written out: 6 points (4 if the constant is not written); the feature (linear in radius): 2 points.`,
        },
        {
          label: "(b)",
          points: 4,
          prompt: String.raw`The evolution timescale of a disk can be approximated by the viscous diffusion timescale, $\tau_\text{diff} \sim R^2/\nu$. Assuming that $\alpha = 10^{-3}$ and $\mu = 2$, what is the diffusion timescale (in years) at both 1 AU and 100 AU for a disk around a Sun-like star?`,
          solution: String.raw`From part (a),

$$\tau_\text{diff} = \frac{R^2}{\nu} = \frac{R\sqrt{GM}\,\mu m_p}{\alpha k_b\,(100\ \text{K})\sqrt{1.5\times10^{11}\ \text{m}}}$$

so $\tau_\text{diff} \propto R$. Plug in $\mu = 2$, $m_p = 1.67\times10^{-27}$ kg, $k_b = 1.38\times10^{-23}$ J K$^{-1}$, $G = 6.67\times10^{-11}$ m$^3$ kg$^{-1}$ s$^{-2}$, $M = 2\times10^{30}$ kg and $\alpha = 10^{-3}$:

- At $R = 1$ AU: $\tau_\text{diff} \approx 1.1\times10^{13}\ \text{s} \approx 3.4\times10^{5}$ years (344,000 years).
- At $R = 100$ AU: 100 times longer, $\tau_\text{diff} \approx 34$ Myr.`,
          rubric: String.raw`Official marking scheme (4 points): each timescale 2 points — about 3.4 × 10⁵ yr at 1 AU and about 34 Myr at 100 AU.`,
        },
        {
          label: "(c)",
          points: 3,
          prompt: String.raw`How does your answer from part b) compare with typical protoplanetary disk lifetimes? What does this imply about protoplanetary disk dispersal?`,
          solution: String.raw`Typical protoplanetary disk lifetimes are about 1–10 Myr. As a result, the inner regions of protoplanetary disks can be efficiently accreted due to viscosity (their viscous timescale, a few $10^5$ yr, is short), but the outer regions cannot (tens of Myr is longer than the disk lives). Some other process (e.g. disk winds, photoevaporation) must disperse the outer parts of protoplanetary disks.`,
          rubric: String.raw`Official marking scheme (3 points), 1 point for each: typical disk lifetimes are ~1–10 Myr; the inner disk can be accreted viscously but the outer disk cannot; another process (disk winds, photoevaporation) must disperse the outer disk.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [4],
      solutionPages: [4],
    },

    // --- Question 8 ---------------------------------------------------------
    {
      number: "8",
      title: "Gas Falling onto a Neutron Star",
      section: LONG,
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Stars & Black Holes"],
      difficulty: "Advanced",
      points: 15,
      text: String.raw`Many of the stars in our Universe are in binary systems. A particular type of binary star consists of a regular star with mass $m_0$ and radius $R$ and a neutron star, with a much higher mass $M$ (but far more compact, therefore the scale difference in Figure 2). The two stars will move around their common center of mass.

Assume that the neutron star is much more massive than the regular star ($M \gg m_0$) such that the regular star is rotating around the neutron star on a circular orbit with radius $r_0$ and speed $v$. The regular star starts to lose gas (with mass $\Delta m$) towards the neutron star with a relative velocity $v_0$ with respect to the regular star (see Figure 2).

[[figure:binary-gas]]

**a)** Approximating that the neutron star is dominating the gravitational potential of the binary system and neglecting any changes in the orbit of the regular star, determine the minimum distance $r_\text{min}$ that the gas will reach with respect to the neutron star.

**b)** Find the maximum distance $r_\text{max}$ of the gas with respect to the neutron star.`,
      figures: [
        {
          key: "binary-gas",
          file: "binary-gas.png",
          caption: "Figure 2: the blob of gas with mass Δm is shown in red. The velocity of the less massive (but larger) star m₀ is shown in blue (v). The neutron star of mass M is a distance r₀ away.",
          sourcePage: 5,
        },
      ],
      solution: String.raw`**Speed of the gas.** The regular star is on a circular orbit, so $v = \sqrt{GM/r_0}$. The gas leaves with velocity $v_0$ towards the neutron star, at right angles to $v$. Its speed $u$ in the neutron star's frame is therefore

$$u^2 = v^2 + v_0^2 = \frac{GM}{r_0} + v_0^2$$

Let $r_\text{min}, v_\text{max}$ be the gas's distance and speed at pericentre, and $r_\text{max}, v_\text{min}$ at apocentre.

**Conservation of angular momentum.** Only the sideways speed $v$ contributes at the start:

$$\Delta m\,r_\text{min}v_\text{max} = \Delta m\,r_\text{max}v_\text{min} = \Delta m\,r_0 v = \Delta m\sqrt{GMr_0} \qquad (1)$$

**Conservation of energy.** For an orbit with semi-major axis $a = \tfrac{1}{2}(r_\text{min} + r_\text{max})$, the energy is $-GM\Delta m/(2a)$:

$$-\frac{GM\Delta m}{r_0} + \frac{\Delta m\,u^2}{2} = -\frac{GM\Delta m}{r_\text{min} + r_\text{max}} \qquad (2)$$

**Semi-major axis.** Substituting $u^2$ into (2):

$$a = \frac{r_\text{min} + r_\text{max}}{2} = \frac{GMr_0}{GM - v_0^2r_0}$$

**A second relation.** From (1) and (2) at the two turning points, $v_\text{min} = \sqrt{\dfrac{2GM\,r_\text{min}}{r_\text{max}(r_\text{min}+r_\text{max})}}$, so

$$r_\text{max}v_\text{min} = \sqrt{\frac{2GM\,r_\text{max}r_\text{min}}{r_\text{max}+r_\text{min}}} = \sqrt{GMr_0} \quad\Longrightarrow\quad 2r_\text{max}r_\text{min} = r_0(r_\text{max}+r_\text{min}) = 2ar_0$$

So $r_\text{min}r_\text{max} = ar_0$ and $r_\text{min} + r_\text{max} = 2a$: both distances are roots of

$$r^2 - 2ar + ar_0 = 0 \quad\Longrightarrow\quad r = a \pm \sqrt{a^2 - ar_0}$$

**a)** The smaller root is the minimum distance. Simplifying:

$$r_\text{min} = \frac{r_0\left(GM - v_0\sqrt{GMr_0}\right)}{GM - v_0^2r_0} = \frac{r_0}{1 + v_0\sqrt{r_0/GM}}$$

Note that $0 < r_\text{min} < r_0$.

**b)** The larger root is the maximum distance:

$$r_\text{max} = \frac{r_0\left(GM + v_0\sqrt{GMr_0}\right)}{GM - v_0^2r_0} = \frac{r_0}{1 - v_0\sqrt{r_0/GM}}$$

Note that $r_\text{max} > r_0$. This requires $v_0 < \sqrt{GM/r_0}$; for larger $v_0$ the gas is not bound to the neutron star and has no maximum distance.

(Shortcut: the gas's orbit has semi-latus rectum $p = (r_0v)^2/GM = r_0$ and eccentricity $e = v_0\sqrt{r_0/GM}$, so $r = r_0/(1 \pm e)$.)`,
      rubric: String.raw`Astro Coach marking guide (15 points):
- Circular speed of the regular star v = √(GM/r₀): 1 point.
- Gas speed in the neutron-star frame u² = v² + v₀² (velocities perpendicular): 2 points.
- Conservation of angular momentum using only the tangential speed (r v = r₀v at the turning points): 2 points.
- Conservation of energy (or vis-viva) for the gas: 2 points.
- Combines them into the semi-major axis / quadratic (or finds p = r₀ and e = v₀√(r₀/GM)): 2 points.
- (a) r_min = r₀ / (1 + v₀√(r₀/GM)) or an equivalent form: 3 points.
- (b) r_max = r₀ / (1 − v₀√(r₀/GM)) or an equivalent form: 3 points.`,
      solutionSource: "ADAPTED",
      questionPages: [4, 5],
      solutionPages: [5, 6],
    },

    // --- Question 9 ---------------------------------------------------------
    {
      number: "9",
      title: "Mapping the Milky Way at 21 cm",
      section: LONG,
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Light & Spectra"],
      difficulty: "Advanced",
      points: 15,
      text: String.raw`The Milky Way is virtually optically thin to 21 cm radiation, which makes this wavelength band a good tool to study the Galactic structure. Spectroscopy is used to measure the velocity distribution of clouds along a line of sight in the galaxy. In this problem, you can assume all motions are circular about the center of the galaxy. Assume the galactic longitude, $l$, takes values between 0 and 90 degrees.

**i)** In a couple of sentences (2–3), explain what is the physical mechanism that causes the emission of the 21.11 cm photons.

**ii)** Explain how spectroscopy can be used to determine the radial velocity along the line of sight (1–2 sentences).

**iii)** Match the clouds A, B, C from Figure 3 to the X, Y, Z peaks in Figure 4.

[[figure:milky-way-clouds]]

[[figure:hi-spectrum]]

**iv)** Describe the procedure and show the calculations by which you can determine the galactic rotation curve. By "galactic rotation curve" we mean the rotational speed of the galaxy $V(R)$ as a function of the distance from its center, $R$. You can consider your known variables to be $V_{r\,\text{max}}$ — the maximum radial velocity along the line of sight, $R_0$ — distance from Sun to center of Galaxy, $V_0$ — the orbital velocity of the Sun around the Galactic center, and $l$, the galactic longitude.

**v)** From here on, you can consider that we know the galactic rotation curve $V(R)$ from previous studies of 21 cm radiation. A new study now looks at a dense molecular cloud, and studies its $^{13}$CO emission. Stars are expected to form in molecular clouds of spiral galaxies, and as a result, molecular clouds can be used to trace the spiral structure of the Milky Way.

Measuring the rotation curve was key to understanding the gas distribution in the Galaxy, since it was then possible to relate the spectroscopically observed radial velocity of a cloud to its galactocentric radius and distance. For a given cloud with galactic longitude $l$ and radial velocity $V_r$, there is a unique solution for its galactocentric radius $R$.

Find $R$ as a function of $R_0$ — the galactocentric radius of the Sun, $V_0$ — the orbital velocity of the Sun around the Galactic center, $V(R)$ — the rotation curve, and $V_r$ — the radial velocity of the cloud. You can consider $V(R)$ is known in this case even though $R$ is not known, coming from the studies of the galactic rotation curve that have determined the speed of the cloud at other points. Use Figure 5 for reference.

**vi)** Find the solution of the distance to the cloud $d$ as a function of the galactocentric radius of the cloud $R$, galactic longitude $l$, and galactocentric radius of Sun $R_0$.

[[figure:kinematic-distance]]`,
      figures: [
        {
          key: "milky-way-clouds",
          file: "milky-way-clouds.png",
          caption: "Figure 3: clouds A, B and C along one line of sight from the Solar System. Image credit: 'The Evolving Universe' – Donald Goldsmith, p. 210.",
          sourcePage: 6,
        },
        {
          key: "hi-spectrum",
          file: "hi-spectrum.png",
          caption: "Figure 4: the 21 cm spectrum along that line of sight, with peaks X, Y and Z.",
          sourcePage: 6,
        },
        {
          key: "kinematic-distance",
          file: "kinematic-distance.png",
          caption: "Figure 5: near and far kinematic distances. Image credit: 'Kinematic Distances to Molecular Clouds identified in the Galactic Ring Survey' – Julia Roman-Duval, 2009.",
          sourcePage: 7,
        },
        {
          key: "rotation-geometry",
          file: "rotation-geometry.png",
          kind: "SOLUTION",
          caption: "Figure 6: geometry of differential galactic rotation (C: Galactic centre, O: observer, S: source). Image credit: Carroll and Ostlie, p. 909.",
          sourcePage: 8,
        },
      ],
      solution: String.raw`*For more background, see section 24.3, "Kinematics of the Milky Way", in Carroll and Ostlie, and Roman-Duval et al. (2009), arXiv:0905.0723.*

**i)** A neutral hydrogen atom in its ground state has two hyperfine levels: the electron and proton spins can be parallel (slightly higher energy) or antiparallel (lower energy). Collisions put atoms into the parallel state, and occasionally one spontaneously flips to the antiparallel state, emitting a photon with the tiny energy difference, $5.9\times10^{-6}$ eV — wavelength 21.1 cm. Each atom flips only about once every 10 million years, but there is so much hydrogen that the line is easily detected.

**ii)** The radiation from one cloud is Doppler shifted because of differential Galactic rotation: the cloud emitting the 21 cm radiation moves relative to us. Spectroscopy measures the shift in wavelength, $\Delta\lambda = \lambda - 21.11$ cm, which the Doppler formula $V_r = c\,\Delta\lambda/\lambda_0$ converts into a radial velocity.

**iii)** Cloud A is at the same orbital distance from the centre as the Sun. Its velocity along the line of sight is the same as the Sun's, so there is zero relative velocity and no wavelength shift: A is peak X, at 21.11 cm. Clouds B and C are on orbits closer to the centre, so their relative velocity along the line of sight is positive (redshift). Along this line of sight the radial velocity grows towards the tangent point, and B is closer to it than C, so B has the largest shift. Cloud C is much larger than B, which makes its line more intense. Thus

$$X = A, \qquad Y = C, \qquad Z = B$$

**iv)** See Figure 6. For a cloud at galactocentric radius $R$ and distance $d$, the radial and transverse velocities relative to the Sun are

$$V_r = V(R)\cos\alpha - V_0\sin l, \qquad V_t = V(R)\sin\alpha - V_0\cos l$$

with the geometry

$$R\cos\alpha = R_0\sin l, \qquad R\sin\alpha = R_0\cos l - d$$

$d$ is not known in general. But along each line of sight, the maximum radial velocity comes from the **tangent point**, where the line of sight just grazes an orbit. There $\alpha = 0$, $d = R_0\cos l$ and the orbit's radius is $R = R_0\sin l$. So

$$V(R) = V_{r\,\text{max}} + V_0\sin l \quad\text{at}\quad R = R_0\sin l, \qquad\text{i.e.}\qquad V(R) = V_{r\,\text{max}} + V_0\,\frac{R}{R_0}$$

Measuring $V_{r\,\text{max}}$ at many longitudes $l$ traces out $V(R)$ for the inner Galaxy.

**v)** From the same equations as part iv), $\cos\alpha = R_0\sin l/R$, so

$$V_r = V(R)\,\frac{R_0\sin l}{R} - V_0\sin l \quad\Longrightarrow\quad R = R_0\sin l\,\frac{V(R)}{V_r + V_0\sin l}$$

**vi)** From the same geometry, $R\cos\alpha = R_0\sin l$ and $R\sin\alpha = R_0\cos l - d$. Squaring and adding eliminates $\alpha$:

$$R^2 = R_0^2\sin^2 l + (R_0\cos l - d)^2 \quad\Longrightarrow\quad d = R_0\cos l \pm \sqrt{R^2 - R_0^2\sin^2 l}$$

There are two distance solutions: in the inner Galaxy a single galactocentric radius (fixed by the cloud's radial velocity) corresponds to a **near** and a **far** kinematic distance along the line of sight (Figure 5). Both give the same radial velocity. At the tangent point the cloud's orbital velocity is parallel to the line of sight, the radial velocity is maximal, and the near and far distances coincide.`,
      rubric: String.raw`Astro Coach marking guide (15 points):
- (i) Hyperfine spin-flip transition of neutral hydrogen (electron and proton spins going from parallel to antiparallel): 2 points.
- (ii) Doppler shift of the line converted to radial velocity: 2 points.
- (iii) X = A, Y = C, Z = B with a sensible justification (A at the solar circle has no shift; B is nearer the tangent point so has a larger shift; C is larger so brighter): 3 points (1 per correct match).
- (iv) Uses the tangent point (maximum V_r, R = R₀ sin l) to get V(R) = V_r,max + V₀ sin l: 3 points.
- (v) R = R₀ sin l · V(R)/(V_r + V₀ sin l): 3 points.
- (vi) d = R₀ cos l ± √(R² − R₀² sin² l), noting the near/far ambiguity: 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [6, 7],
      solutionPages: [7, 8],
    },
  ],
};
