// USAAAO National Astronomy Olympiad 2018: 11 short questions (5 points
// each) and 3 long questions (15 points each), 100 points in total.
//
// Choices made while transcribing:
//   - Numbering restarts in each section, so questions are numbered as the
//     paper's sections are labelled: "I.1"–"I.11" and "II.1"–"II.3".
//   - Every question needs working, so all are AI-graded (WORKED).
//   - The official solutions are good but terse; they are lightly cleaned up
//     (ADAPTED). Long Question 2 has no official solution, so Astro Coach
//     wrote one. The official solutions give no marking scheme, so each
//     rubric is an Astro Coach marking guide in whole points.
//   - Two slips in the paper are corrected and flagged in the text:
//     I.1 prints the Earth–Sun distance as 1.5 × 10^8 m (it is km), and the
//     official II.1(b) solution reads the lowest radial velocity as
//     −6.02 km/s where the graph shows −6.01 km/s.
import type { FrqSeedExam } from "./types";

const SHORT = "Short Questions";
const LONG = "Long Questions";

export const usaaao2018Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: 2018,
  examName: "National Astronomy Olympiad",
  slug: "usaaao-2018-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-nao-2018.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_second_round_2018.pdf",
  attributionText:
    "Source: USA Astronomy and Astrophysics Organization (USAAAO), National Astronomy Olympiad 2018. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.",
  questions: [
    // --- I.1 Earth-twin radial velocity -------------------------------------
    {
      number: "I.1",
      title: "Detecting an Earth Twin",
      section: SHORT,
      topic: "Exoplanets & Life",
      topics: ["Exoplanets & Life", "Gravity & Orbits"],
      difficulty: "Beginner",
      points: 5,
      text: String.raw`In order to detect an Earth-twin, we need significant advances in the precision of spectrographs to detect the periodic Doppler shift of nearby stars. Estimate the radial velocity semi-amplitude, in m/s, that a planet with the mass, radius, and semi-major axis of Earth would cause in the motion of a star with the mass of the Sun. Assume that the Earth-twin has zero eccentricity. Note that the mass of Earth is $5.97 \times 10^{24}$ kg, and the distance from the Earth to the Sun is $1.5 \times 10^{8}$ km.

(Astro Coach note: the original paper prints this distance as $1.5 \times 10^{8}$ m; the intended value, used in the official solution, is $1.5 \times 10^{8}$ km.)`,
      solution: String.raw`The planet's orbital speed is

$$v_p = \frac{2\pi a}{T} = \frac{2\pi (1.5\times10^{11}\ \text{m})}{3.156\times10^{7}\ \text{s}} \approx 29.9\ \text{km/s}.$$

The star and planet orbit their common centre of mass, so their momenta balance: $m_s v_s = m_p v_p$. Therefore

$$v_s = v_p \frac{M_E}{M_\odot} = 29.9\ \text{km/s} \times \frac{5.97\times10^{24}}{1.989\times10^{30}} \approx 0.090\ \text{m/s}.$$

For an edge-on orbit this is the radial velocity semi-amplitude: about **0.1 m/s**.`,
      rubric: `Astro Coach marking guide (5 points):
- Earth's orbital speed from 2πa/T: 1 point.
- Value about 29.9 km/s (30 km/s accepted): 1 point.
- Momentum balance / centre-of-mass relation m_s v_s = m_p v_p: 2 points.
- Final answer about 0.09 m/s (0.08–0.1 m/s): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- I.2 Planet Nine ----------------------------------------------------
    {
      number: "I.2",
      title: "Planet Nine's Eccentricity",
      section: SHORT,
      topic: "Solar System",
      topics: ["Solar System", "Gravity & Orbits"],
      difficulty: "Beginner",
      points: 5,
      text: String.raw`Planet Nine is a hypothesized planet in the outer Solar System that may explain the clustering of orbital elements of distant trans-Neptunian objects. The hypothesized periapse of Planet Nine is 200 AU, and the apoapse is expected to be at approximately 1200 AU. What would the eccentricity of Planet Nine be? How does this eccentricity compare to that of the 8 major planets in the Solar System?`,
      solution: String.raw`Periapse and apoapse are $r_p = a(1-e)$ and $r_a = a(1+e)$, so

$$e = \frac{r_a - r_p}{r_a + r_p} = \frac{1200 - 200}{1200 + 200} \approx 0.714.$$

This is **much larger** than the eccentricity of any of the eight major planets — the most eccentric, Mercury, has $e \approx 0.21$, and most planets have $e < 0.1$.`,
      rubric: `Astro Coach marking guide (5 points):
- Correct relation e = (r_a − r_p)/(r_a + r_p), or derived from r_p = a(1−e), r_a = a(1+e): 2 points.
- e ≈ 0.71: 2 points.
- Comparison: much larger than any major planet (largest is Mercury, about 0.2): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- I.3 Main-sequence lifetimes ----------------------------------------
    {
      number: "I.3",
      title: "Main-Sequence Lifetimes",
      section: SHORT,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Energy & Stellar Physics"],
      difficulty: "Beginner",
      points: 5,
      text: String.raw`What is the main-sequence lifetime of a star with a mass of 0.1 solar masses, and a star with a mass of 10 solar masses? Assume that stellar luminosity $L \propto M^{3.5}$, where $M$ is stellar mass, and that the main-sequence lifetime of the Sun is 10 billion years.`,
      solution: String.raw`The fuel available is proportional to the mass, and it is used up at a rate set by the luminosity, so

$$t \propto \frac{M}{L} \propto \frac{M}{M^{3.5}} = M^{-2.5}.$$

With $t_\odot = 10$ Gyr:

- $M = 10\,M_\odot$: $t = 10\ \text{Gyr} \times 10^{-2.5} \approx 3.16\times10^{7}$ yr $\approx$ **31.6 million years**.
- $M = 0.1\,M_\odot$: $t = 10\ \text{Gyr} \times 10^{2.5} \approx 3.16\times10^{12}$ yr $\approx$ **3160 billion years** — far longer than the current age of the Universe.`,
      rubric: `Astro Coach marking guide (5 points):
- Lifetime proportional to fuel/luminosity, t ∝ M/L: 2 points.
- Scaling t ∝ M^(−2.5): 1 point.
- 10 solar masses: about 31.6 million years: 1 point.
- 0.1 solar masses: about 3.16 × 10^12 years (3160 billion years): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1],
    },

    // --- I.4 VLA vs optical telescope ---------------------------------------
    {
      number: "I.4",
      title: "Matching the Very Large Array",
      section: SHORT,
      topic: "Telescopes & Observing",
      topics: ["Telescopes & Observing", "Light & Spectra"],
      difficulty: "Beginner",
      points: 5,
      text: String.raw`The Very Large Array radio interferometer ($\lambda = 1$ m) has a maximum baseline of $D = 36.4$ km. How large will an optical telescope have to be to achieve a similar angular resolution in visible light ($\lambda = 5500$ Å)?`,
      solution: String.raw`The diffraction-limited resolution is $\theta = 1.22\,\lambda/D$. For the VLA,

$$\theta = 1.22\,\frac{1\ \text{m}}{36.4\times10^{3}\ \text{m}} \approx 3.35\times10^{-5}\ \text{rad}.$$

For the same $\theta$ in visible light,

$$D = 1.22\,\frac{\lambda}{\theta} = 1.22\,\frac{550\times10^{-9}\ \text{m}}{3.35\times10^{-5}} \approx 0.020\ \text{m}.$$

(Equivalently, $D$ scales with $\lambda$: $36.4\ \text{km} \times 5.5\times10^{-7} = 2$ cm.) An optical telescope only about **2 cm (20 mm)** across matches the VLA's resolution.`,
      rubric: `Astro Coach marking guide (5 points):
- Uses the diffraction limit θ ≈ 1.22 λ/D (the 1.22 may be omitted if used consistently): 2 points.
- Same angular resolution means D ∝ λ (or computes θ ≈ 3.4 × 10^−5 rad): 1 point.
- Correct unit conversion of 5500 Å = 5.5 × 10^−7 m: 1 point.
- D ≈ 2 cm: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [1, 2],
    },

    // --- I.5 f-number -------------------------------------------------------
    {
      number: "I.5",
      title: "Telescope f-Number",
      section: SHORT,
      topic: "Telescopes & Observing",
      difficulty: "Beginner",
      points: 5,
      text: String.raw`An amateur astronomer observes the Moon with a 20-cm telescope, and accomplishes 160x magnification with an eyepiece with focal length 10 mm. What is the f-number of the telescope?`,
      solution: String.raw`Magnification is the ratio of the telescope's focal length $F$ to the eyepiece focal length $f$:

$$M = \frac{F}{f} \quad\Longrightarrow\quad F = M f = 160 \times 10\ \text{mm} = 1600\ \text{mm}.$$

The f-number is focal length divided by aperture:

$$N = \frac{F}{D} = \frac{1600\ \text{mm}}{200\ \text{mm}} = \mathbf{8}.$$`,
      rubric: `Astro Coach marking guide (5 points):
- Magnification = F / f: 2 points.
- Telescope focal length F = 1600 mm: 1 point.
- f-number = F / D: 1 point.
- Answer f/8: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- I.6 Human blackbody ------------------------------------------------
    {
      number: "I.6",
      title: "People Glow Too",
      section: SHORT,
      topic: "Light & Spectra",
      topics: ["Light & Spectra", "Energy & Stellar Physics"],
      difficulty: "Beginner",
      points: 5,
      text: String.raw`The average person has 1.4 m$^2$ of skin. What is the energy per second radiated by the average person in the form of blackbody radiation? What is the peak wavelength of emitted radiation? Why can't we see it with our eyes?`,
      solution: String.raw`Take body temperature $T \approx 37^\circ$C $= 310$ K. By the Stefan–Boltzmann law,

$$P = A\sigma T^4 = 1.4 \times 5.67\times10^{-8} \times 310^4 \approx 730\ \text{W}.$$

(The answer shifts a little with the assumed temperature; about 700–750 W is fine.)

By Wien's law,

$$\lambda_{\max} = \frac{2.9\times10^{-3}\ \text{m K}}{310\ \text{K}} \approx 9.4\times10^{-6}\ \text{m} = 9.4\ \mu\text{m}.$$

This is in the **infrared**, and our eyes are only sensitive to visible light (about 400–700 nm), so we cannot see it.`,
      rubric: `Astro Coach marking guide (5 points):
- Stefan–Boltzmann law P = AσT⁴ with a sensible body temperature (about 305–310 K): 1 point.
- Power about 700–750 W: 1 point.
- Wien's law λ = b/T: 1 point.
- Peak wavelength about 9–10 μm: 1 point.
- Explains it is infrared, outside the range the eye can detect: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- I.7 Shadow at the equinox ------------------------------------------
    {
      number: "I.7",
      title: "Equinox Shadow",
      section: SHORT,
      topic: "Math, Data & Coordinates",
      difficulty: "Beginner",
      points: 5,
      text: String.raw`On March 21st at true noon, the length of the shadow of a vertical rod was equal to its height. On which geographic latitude did this happen?`,
      solution: String.raw`March 21st is the spring equinox, so the Sun's declination is $0^\circ$. At true noon its altitude is then

$$h = 90^\circ - |\varphi|.$$

A shadow as long as the rod means $\tan h = 1$, so $h = 45^\circ$. Therefore $|\varphi| = 45^\circ$: the place is at latitude **$45^\circ$ N or $45^\circ$ S** (both count).`,
      rubric: `Astro Coach marking guide (5 points):
- Recognises March 21 as the equinox, Sun's declination 0°: 1 point.
- Noon altitude h = 90° − |φ|: 2 points.
- Equal shadow and height gives h = 45°: 1 point.
- Answer φ = ±45° (either hemisphere; full marks require noting both or clearly stating 45°): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- I.8 Proton-proton chain step ---------------------------------------
    {
      number: "I.8",
      title: "Making Helium-3",
      section: SHORT,
      topic: "Energy & Stellar Physics",
      topics: ["Energy & Stellar Physics", "Stars & Black Holes"],
      difficulty: "Beginner",
      points: 5,
      text: String.raw`In stars like the Sun, helium nuclei are formed by fusing hydrogen nuclei together in a process known as the proton-proton chain. One step of the proton-proton chain consists of a deuterium nucleus ($m_d = 2.01410$ u) fusing together with a hydrogen nucleus ($m_H = 1.00783$ u) to form a helium-3 nucleus ($m_{He} = 3.01603$ u), where $u = 1.6605 \times 10^{-27}$ kg. How much energy is released during this fusion reaction?`,
      solution: String.raw`The energy comes from the mass defect — the mass that "goes missing" in the reaction:

$$\Delta m = m_d + m_H - m_{He} = (2.01410 + 1.00783 - 3.01603)\ \text{u} = 0.00590\ \text{u}.$$

In kilograms, $\Delta m = 0.00590 \times 1.6605\times10^{-27} \approx 9.80\times10^{-30}$ kg. Then

$$E = \Delta m\, c^2 = 9.80\times10^{-30} \times (3.0\times10^{8})^2 \approx 8.8\times10^{-13}\ \text{J}$$

(about 5.5 MeV).`,
      rubric: `Astro Coach marking guide (5 points):
- Mass defect Δm = m_d + m_H − m_He: 2 points.
- Δm = 0.0059 u = 9.8 × 10^−30 kg: 1 point.
- Uses E = Δm c²: 1 point.
- E ≈ 8.8 × 10^−13 J (or 5.5 MeV): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2, 3],
    },

    // --- I.9 Solar wind force on the Moon -----------------------------------
    {
      number: "I.9",
      title: "Solar Wind on the Moon",
      section: SHORT,
      topic: "Solar System",
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`Solar wind consists of protons that fly with the speed of 300 km/s and they fill the space of interplanetary matter around Earth with 10 particles/cm$^3$. With what force is this "wind" hitting the Moon? Recall that the mass of a proton is $m_p = 1.6 \times 10^{-24}$ g. The radius of the Moon is $R_m = 1737$ km.`,
      solution: String.raw`Force is the rate of change of momentum. Assume each proton stops at the Moon's surface, giving up its momentum $m_p V$ (and the Moon's mass hardly changes).

With number density $n$ and speed $V$, a flux of $nV$ protons crosses each square metre per second. The Moon blocks a cross-section $\pi R_m^2$, so

$$F = \pi R_m^2 \, n\, m_p V^2.$$

In SI units: $n = 10\ \text{cm}^{-3} = 10^{7}\ \text{m}^{-3}$, $m_p = 1.6\times10^{-27}$ kg, $V = 3\times10^{5}$ m/s, $\pi R_m^2 = \pi(1.737\times10^{6})^2 \approx 9.5\times10^{12}\ \text{m}^2$:

$$F \approx 9.5\times10^{12} \times 10^{7} \times 1.6\times10^{-27} \times 9\times10^{10} \approx 1.4\times10^{4}\ \text{N}.$$

That is about the weight of **1.4 tonnes** — tiny for a body as massive as the Moon.`,
      rubric: `Astro Coach marking guide (5 points):
- Force as rate of momentum transfer (F = Δp/Δt): 1 point.
- Particle flux nV through the Moon's cross-section πR² (not the full surface area 4πR²): 2 points.
- Correct unit conversions (cm⁻³ to m⁻³, g to kg, km/s to m/s): 1 point.
- F ≈ 1.4 × 10^4 N (the weight of about 1.4 tonnes): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [3],
    },

    // --- I.10 Sunlight on Mars ----------------------------------------------
    {
      number: "I.10",
      title: "Sunlight on Mars",
      section: SHORT,
      topic: "Solar System",
      topics: ["Solar System", "Light & Spectra"],
      difficulty: "Beginner",
      points: 5,
      text: String.raw`Mars orbits the Sun at an average distance of $2.28 \times 10^{11}$ m and has a radius of $3.39 \times 10^{6}$ m. The Sun has a luminosity of $3.828 \times 10^{26}$ W. How much solar energy falls on the surface of Mars each second? Ignore any effects of Mars' thin atmosphere.`,
      solution: String.raw`At Mars' distance the Sun's output is spread over a sphere of area

$$A = 4\pi r^2 = 4\pi (2.28\times10^{11}\ \text{m})^2 = 6.53\times10^{23}\ \text{m}^2,$$

so the flux is $\dfrac{L}{A} = \dfrac{3.828\times10^{26}\ \text{W}}{6.53\times10^{23}\ \text{m}^2} \approx 586\ \text{W/m}^2$.

Mars presents a disc of area $\pi r_{\text{Mars}}^2 = \pi (3.39\times10^{6}\ \text{m})^2 = 3.61\times10^{13}\ \text{m}^2$ to the Sun, so the power it intercepts is

$$P = 586\ \text{W/m}^2 \times 3.61\times10^{13}\ \text{m}^2 \approx 2.12\times10^{16}\ \text{W}.$$`,
      rubric: `Astro Coach marking guide (5 points):
- Flux at Mars from L / (4πr²): 2 points.
- Flux about 586 W/m²: 1 point.
- Uses the cross-sectional area πR² (not 4πR²): 1 point.
- Power ≈ 2.1 × 10^16 W: 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [3, 4],
    },

    // --- I.11 Galaxy formation luminosity -----------------------------------
    {
      number: "I.11",
      title: "The Glow of a Forming Galaxy",
      section: SHORT,
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Gravity & Orbits"],
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`When a gravitationally bound system (such as a galaxy) forms, it transitions from a just bound state ($E_{\text{kin}} = |E_{\text{pot}}|$) to a virialized state ($E_{\text{kin}} = 0.5|E_{\text{pot}}|$) and the excess binding energy has to be radiated away. Consider an idealized disk galaxy with an exactly flat rotation curve with a rotation speed of $v_{\text{circ}} = 220$ km/s (you can neglect the kinetic energy in random motions). Its density profile cuts off abruptly at a radius of $R_{\max} = 50$ kpc. Assume that it took 500 million years for this galaxy to collapse to its present state. What was its mean luminosity (in units of solar luminosity) due to the release of the binding energy during that period?`,
      solution: String.raw`In the final virialized state $E_{\text{kin}} = \tfrac12|E_{\text{pot}}|$, so the energy radiated away during the collapse equals the present kinetic energy.

**Mass.** For a particle at the edge, gravity provides the centripetal force:

$$\frac{m v_{\text{circ}}^2}{R_{\max}} = \frac{GmM}{R_{\max}^2} \quad\Longrightarrow\quad M = \frac{v_{\text{circ}}^2 R_{\max}}{G}.$$

With $R_{\max} = 50$ kpc $= 1.54\times10^{21}$ m and $v_{\text{circ}} = 2.2\times10^{5}$ m/s, $M \approx 1.12\times10^{42}$ kg $\approx 5.6\times10^{11}\,M_\odot$.

**Energy.** $E_{\text{kin}} = \tfrac12 M v_{\text{circ}}^2 \approx 2.7\times10^{52}$ J.

**Luminosity.** Over $t = 500$ Myr $= 1.58\times10^{16}$ s,

$$L = \frac{E_{\text{kin}}}{t} \approx 1.7\times10^{36}\ \text{W} \approx 4.5\times10^{9}\,L_\odot.$$`,
      rubric: `Astro Coach marking guide (5 points):
- Energy radiated equals the final kinetic energy (from the two virial states): 1 point.
- Mass from the flat rotation curve, M = v²R/G: 1 point.
- M ≈ 1.1 × 10^42 kg (about 5.6 × 10^11 solar masses): 1 point.
- Kinetic energy ½Mv² ≈ 2.7 × 10^52 J: 1 point.
- Mean luminosity ≈ 4.5 × 10^9 L☉ (about 4–5 × 10^9): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [4],
    },

    // --- II.1 WASP-14b ------------------------------------------------------
    {
      number: "II.1",
      title: "WASP-14b",
      section: LONG,
      topic: "Exoplanets & Life",
      topics: ["Exoplanets & Life", "Gravity & Orbits", "Math, Data & Coordinates"],
      difficulty: "Advanced",
      points: 15,
      text: String.raw`In 2008, while observing WASP-14, a main sequence star of mass $1.211\,M_\odot$ and radius $1.306\,R_\odot$, an exoplanet called WASP-14b was discovered via the transit method. Photometry as well as radial velocity data are shown in the figures. Transits occur once every 2.243753 days. The radial velocity of the center of mass of WASP-14 and its planet is $-4.99$ km/s. Fitting of the radial velocity curve indicates that the argument of periastron of the orbit of WASP-14b is $254.9^\circ$.

[[figure:transit]]

[[figure:radial-velocity]]`,
      figures: [
        {
          key: "transit",
          file: "wasp14-transit.png",
          caption: "Transit photometry of WASP-14 (differential magnitude against transit phase). The marked transit depth is 0.0102 mag.",
          sourcePage: 3,
        },
        {
          key: "radial-velocity",
          file: "wasp14-radial-velocity.png",
          caption: "Radial velocity of WASP-14 against transit phase. Marked values: −4.02, −4.99 and −6.01 km/s.",
          sourcePage: 3,
        },
      ],
      parts: [
        {
          label: "(a)",
          points: 5,
          prompt: "Determine the length of the semi-major axis of the orbit of WASP-14b.",
          solution: String.raw`Kepler's third law for the star–planet pair is

$$(a_* + a_p)^3 = \frac{G(M_* + M_p)}{4\pi^2} P^2.$$

The planet's mass is negligible next to the star's, and so is the star's small orbit next to the planet's, so

$$a_p = \left(\frac{G M_*}{4\pi^2} P^2\right)^{1/3}.$$

With $M_* = 1.211\,M_\odot = 2.41\times10^{30}$ kg and $P = 2.243753$ d $= 1.9386\times10^{5}$ s:

$$a_p \approx 5.35\times10^{9}\ \text{m} \approx 0.0357\ \text{AU}.$$`,
          rubric: `Astro Coach marking guide (5 points):
- Kepler's third law written correctly: 2 points.
- Justified approximations (planet mass and stellar orbit negligible): 1 point.
- Correct unit conversions (solar mass, days to seconds): 1 point.
- a ≈ 5.35 × 10^9 m ≈ 0.036 AU: 1 point.`,
        },
        {
          label: "(b)",
          points: 5,
          prompt: "Determine the density of WASP-14b.",
          solution: String.raw`**Mass.** Because the planet transits, the orbit is nearly edge-on ($i \approx 90^\circ$), so the radial-velocity semi-amplitude is the star's orbital speed. Reading the graph (maximum $-4.02$ km/s, minimum $-6.01$ km/s):

$$v_* = \frac{(-4.02) - (-6.01)}{2} = 0.995\ \text{km/s}.$$

The planet's speed, treating the orbit as circular, is $v_p = \dfrac{2\pi a_p}{P} \approx 1.73\times10^{5}$ m/s. Momentum balance about the centre of mass, $M_* v_* = M_p v_p$, gives

$$M_p = \frac{M_* v_*}{v_p} \approx 1.38\times10^{28}\ \text{kg} \approx 7.3\,M_J.$$

**Radius.** The transit depth is $\Delta m = 0.0102$ mag, so the fraction of light blocked is

$$\Delta F = 1 - 10^{-\Delta m/2.5} \approx 0.0093 = \left(\frac{R_p}{R_*}\right)^2,$$

giving $R_p = R_*\sqrt{0.0093} \approx 8.8\times10^{7}$ m ($\approx 1.2\,R_J$).

**Density.**

$$\rho = \frac{M_p}{\tfrac43\pi R_p^3} \approx 4.8\times10^{3}\ \text{kg/m}^3.$$

(Using the eccentricity from part (c) would refine the mass slightly; the circular approximation is close enough.)

Note: the official solution writes the minimum velocity as $-6.02$ km/s but uses $v_* = 0.995$ km/s, which matches the graph's $-6.01$ km/s.`,
          rubric: `Astro Coach marking guide (5 points):
- Stellar velocity semi-amplitude read from the graph, about 1.0 km/s (half the peak-to-peak range): 1 point.
- Planet mass from momentum balance (or the mass function) with sin i ≈ 1, M_p ≈ 1.4 × 10^28 kg: 1 point.
- Transit depth converted from magnitudes to a flux fraction, about 0.0093: 1 point.
- Planet radius from ΔF = (R_p/R_*)², about 8.8 × 10^7 m: 1 point.
- Density about 4.8–4.9 × 10^3 kg/m³ (4000–5500 accepted with consistent readings): 1 point.`,
        },
        {
          label: "(c)",
          points: 5,
          prompt: "Determine the eccentricity of the orbit of WASP-14b.",
          solution: String.raw`For an eccentric orbit seen edge-on, the star's radial velocity is

$$v_r = \gamma + K\left[\cos(\theta + \omega) + e\cos\omega\right],$$

where $\gamma = -4.99$ km/s is the centre-of-mass velocity, $\theta$ the true anomaly and $\omega$ the argument of periastron. (This follows from differentiating $z = r\sin(\theta+\omega)$ with the orbit equation $r = a(1-e^2)/(1+e\cos\theta)$ and Kepler's second law.)

Only $\cos(\theta+\omega)$ changes with time, so the extremes are

$$v_{\max} - \gamma = K(1 + e\cos\omega), \qquad v_{\min} - \gamma = K(-1 + e\cos\omega).$$

Subtracting gives $K = \tfrac12(v_{\max} - v_{\min}) = 0.995$ km/s. Adding gives

$$e\cos\omega = \frac{(v_{\max}-\gamma) + (v_{\min}-\gamma)}{v_{\max} - v_{\min}} = \frac{0.97 + (-1.02)}{1.99} \approx -0.0251.$$

With $\omega = 254.9^\circ$, $\cos\omega = -0.2605$, so

$$e = \frac{-0.0251}{-0.2605} \approx 0.096.$$`,
          rubric: `Astro Coach marking guide (5 points):
- Radial velocity model including the e cos ω offset: 2 points.
- Velocities measured relative to the centre-of-mass velocity −4.99 km/s: 1 point.
- e cos ω from the asymmetry of maximum and minimum: 1 point.
- e ≈ 0.096 (0.08–0.12 accepted, since it is sensitive to the graph reading): 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [4, 5, 6, 7],
    },

    // --- II.2 Sualocin and Rotanev ------------------------------------------
    {
      number: "II.2",
      title: "Sualocin and Rotanev",
      section: LONG,
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Stars & Black Holes"],
      difficulty: "Intermediate",
      points: 15,
      text: String.raw`The star Sualocin (RA: $20^\text{h}\,39.6^\text{m}$, Dec: $15^\circ\,54.7'$, absolute magnitude: $-0.4$) is about 78 pc away from our solar system, and the star Rotanev (RA: $20^\text{h}\,37.5^\text{m}$, Dec: $14^\circ\,35.7'$, absolute magnitude: $1.6$) is about 31 pc away. An alien astronomer is on a planet with Earth's mass and radius orbiting Rotanev. The planet has a uniform albedo of 0.3.`,
      parts: [
        {
          label: "(a)",
          points: 4,
          prompt: "What is the angular distance between Sualocin and Rotanev?",
          solution: String.raw`Convert to degrees: $\Delta\alpha = 2.1^\text{m} = 0.525^\circ$, $\delta_1 = 15.912^\circ$, $\delta_2 = 14.595^\circ$. The spherical law of cosines gives

$$\cos\theta = \sin\delta_1\sin\delta_2 + \cos\delta_1\cos\delta_2\cos\Delta\alpha \quad\Longrightarrow\quad \theta \approx 1.41^\circ.$$

Check with the small-angle (flat-sky) formula: $\theta \approx \sqrt{(\Delta\alpha\cos\bar\delta)^2 + (\Delta\delta)^2} = \sqrt{0.507^2 + 1.317^2} \approx 1.41^\circ$.`,
          rubric: `Astro Coach marking guide (4 points):
- Spherical law of cosines, or the flat-sky formula including the cos δ factor on the RA difference: 2 points.
- RA difference correctly converted (2.1 min of time = 0.525°): 1 point.
- θ ≈ 1.41°: 1 point.`,
        },
        {
          label: "(b)",
          points: 3,
          prompt: "What is the distance between these stars in parsecs?",
          solution: String.raw`The Sun and the two stars form a triangle with sides 78 pc and 31 pc meeting at angle $\theta = 1.41^\circ$. By the law of cosines,

$$d = \sqrt{78^2 + 31^2 - 2(78)(31)\cos 1.41^\circ} \approx 47.0\ \text{pc}.$$

(The stars are almost in line with the Sun, so $d$ is only a little more than $78 - 31 = 47$ pc.)`,
          rubric: `Astro Coach marking guide (3 points):
- Law of cosines in the Sun–star–star triangle: 2 points.
- d ≈ 47.0 pc: 1 point.`,
        },
        {
          label: "(c)",
          points: 3,
          prompt: "On the alien's planet, what is the angular separation in the sky between Sualocin and our Sun?",
          solution: String.raw`From Rotanev, the Sun is 31 pc away and Sualocin 47.0 pc away. First find the angle $\beta$ at Sualocin with the law of sines:

$$\sin\beta = \frac{31\sin 1.41^\circ}{47.0} \quad\Longrightarrow\quad \beta \approx 0.93^\circ.$$

The angles of the triangle add to $180^\circ$, so the angle at Rotanev is

$$180^\circ - 1.41^\circ - 0.93^\circ \approx 177.7^\circ.$$

Seen from the alien planet, Sualocin and the Sun are almost on opposite sides of the sky.`,
          rubric: `Astro Coach marking guide (3 points):
- Correct triangle geometry (law of sines or cosines) for the angle at Rotanev: 2 points.
- Separation ≈ 177.7° (anything 177–178.5° with consistent working): 1 point.`,
        },
        {
          label: "(d)",
          points: 5,
          prompt: "How much greater is the flux received by the planet from Sualocin than that received from our Sun?",
          solution: String.raw`Work out each star's apparent magnitude as seen from the planet, using $m = M + 5\log_{10}(d/10\ \text{pc})$:

- Sualocin at 47.0 pc: $m = -0.4 + 5\log_{10}(4.70) \approx 2.96$.
- The Sun ($M_\odot \approx 4.83$) at 31 pc: $m = 4.83 + 5\log_{10}(3.1) \approx 7.29$.

The flux ratio is

$$\frac{F_{\text{Sualocin}}}{F_\odot} = 10^{0.4(7.29 - 2.96)} = 10^{1.73} \approx 54.$$

The planet receives about **54 times** more flux from Sualocin than from our Sun. (The planet's albedo and size do not matter: they affect both fluxes equally. Using the bolometric $M_\odot = 4.74$ gives about 49.)`,
          rubric: `Astro Coach marking guide (5 points):
- Flux ratio from magnitudes (or luminosity ratio × inverse-square distance ratio): 2 points.
- Uses the Sun's absolute magnitude (about 4.7–4.8): 1 point.
- Uses the correct distances from the planet (47.0 pc and 31 pc): 1 point.
- Ratio ≈ 54 (49–58 accepted): 1 point.`,
        },
      ],
      solutionSource: "ASTRO_COACH",
      questionPages: [3, 4],
    },

    // --- II.3 Burning all the baryons ---------------------------------------
    {
      number: "II.3",
      title: "Fusing the Universe into Iron",
      section: LONG,
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Energy & Stellar Physics", "Light & Spectra"],
      difficulty: "Advanced",
      points: 15,
      text: String.raw`Suppose that at some time in the very recent past all the hydrogen and helium (baryon density $\rho_b = 4.2 \times 10^{-31}$ g/cm$^3$, about 75% hydrogen (= 1 baryon) by mass and 25% helium (= 4 baryons) by mass) in the universe had been instantly fused into iron in stars, and the released energy thermalized into black body radiation. (Note that the binding energy per nucleon of $^{56}_{26}\text{Fe}$ is 8.8 MeV and that of $^{4}_{2}\text{He}$ is 7.1 MeV.)`,
      parts: [
        {
          label: "(a)",
          points: 5,
          prompt: "Calculate the current temperature of this black body radiation.",
          solution: String.raw`**Energy per nucleus.** A lone proton has no binding energy, so turning hydrogen into iron releases 8.8 MeV per hydrogen nucleus ($56\,{}^1\text{H} \to {}^{56}\text{Fe}$ releases $56 \times 8.8 = 492.8$ MeV). Helium already has 7.1 MeV per nucleon, so $14\,{}^4\text{He} \to {}^{56}\text{Fe}$ releases $56 \times (8.8 - 7.1) = 95.2$ MeV, i.e. 6.8 MeV per helium nucleus.

**Number densities.**

$$n_H = \frac{0.75\rho_b}{m_H} \approx 1.88\times10^{-7}\ \text{cm}^{-3}, \qquad n_{He} = \frac{0.25\rho_b}{m_{He}} \approx 1.58\times10^{-8}\ \text{cm}^{-3}.$$

**Energy density.**

$$u = 8.8\ \text{MeV}\cdot n_H + 6.8\ \text{MeV}\cdot n_{He} \approx 1.76\times10^{-6}\ \text{MeV/cm}^3 \approx 2.8\times10^{-12}\ \text{erg/cm}^3.$$

**Temperature.** For black body radiation $u = aT^4$ with $a = 7.566\times10^{-15}$ erg cm$^{-3}$ K$^{-4}$:

$$T = \left(\frac{u}{a}\right)^{1/4} \approx 4.4\ \text{K}.$$`,
          rubric: `Astro Coach marking guide (5 points):
- Energy released per hydrogen (8.8 MeV) and per helium nucleus (4 × 1.7 = 6.8 MeV): 1 point.
- Number densities of H and He from the mass fractions: 1 point.
- Total energy density u ≈ 2.8 × 10^−12 erg/cm³ (2.8 × 10^−13 J/m³): 1 point.
- Uses u = aT⁴ (radiation constant a = 4σ/c): 1 point.
- T ≈ 4.4 K: 1 point.`,
        },
        {
          label: "(b)",
          points: 5,
          prompt: "At what wavelength would the black body spectrum peak, and what region of the electromagnetic spectrum would this be?",
          solution: String.raw`By Wien's displacement law with $b = 2.898\times10^{-3}$ m K,

$$\lambda_{\max} = \frac{b}{T} = \frac{2.898\times10^{-3}}{4.40} \approx 6.6\times10^{-4}\ \text{m} = 0.066\ \text{cm}.$$

This is in the **microwave** region — right next to the real cosmic microwave background, which peaks near 1 mm.`,
          rubric: `Astro Coach marking guide (5 points):
- Wien's displacement law λ = b/T: 2 points.
- λ ≈ 0.66 mm (consistent with the part (a) temperature): 2 points.
- Identifies the microwave region: 1 point.`,
        },
        {
          label: "(c)",
          points: 5,
          prompt: String.raw`The mean bolometric luminosity per unit volume emitted by stars in the universe today is about $3 \times 10^{8}\,L_\odot/\text{Mpc}^3$. How long would it take stars at this rate to fuse all the hydrogen and helium in the universe? Compare to the present age of the universe.`,
          solution: String.raw`Convert the luminosity density to cgs units ($L_\odot = 3.83\times10^{33}$ erg/s, 1 Mpc $= 3.086\times10^{24}$ cm):

$$\mathcal{L} = \frac{3\times10^{8} \times 3.83\times10^{33}\ \text{erg/s}}{(3.086\times10^{24}\ \text{cm})^3} \approx 3.9\times10^{-32}\ \text{erg s}^{-1}\text{cm}^{-3}.$$

The time needed is the energy density from part (a) divided by this rate:

$$t = \frac{u}{\mathcal{L}} \approx \frac{2.8\times10^{-12}}{3.9\times10^{-32}}\ \text{s} \approx 7\times10^{19}\ \text{s} \approx 2.3\times10^{12}\ \text{yr}.$$

That is over 2000 billion years — about 160 times the present age of the universe (13.8 Gyr). (The official answer is $7.11\times10^{19}$ s, about 2250 Gyr; the small difference comes from rounding of constants.)`,
          rubric: `Astro Coach marking guide (5 points):
- Time = energy density / luminosity density: 2 points.
- Correct conversion of L☉/Mpc³ to consistent units: 1 point.
- t ≈ 7 × 10^19 s ≈ 2.2–2.3 × 10^12 years: 1 point.
- Comparison: over 100 times the age of the universe: 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [4],
      solutionPages: [8, 9],
    },
  ],
};
