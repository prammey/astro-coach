// USAAAO National Astronomy Competition 2026: nine free-response problems,
// 300 points in total. (This paper has no multiple-choice section.)
//
// How this file was made:
//   - Problem text is transcribed word for word from the official exam PDF.
//     The star table in Problem 6 and the data tables in Problems 7 and 8
//     are retyped as KaTeX arrays.
//   - Solutions are the official ones, lightly edited for students (point
//     annotations moved into the rubrics), so they are marked ADAPTED.
//     Two official slips are corrected and flagged in the text:
//     Problem 7(d) (the Acrux–Mimosa separation is 4.25°, not 4.4°) and
//     Problem 9(c)(iii) (h_xx oscillates as cos 2Ωt, not sin 2Ωt).
//   - Rubrics transcribe the official marking notes. The official scheme
//     awards half points in Problems 2, 3 and 8 and quarter points in
//     Problem 9, so those questions use that point step. Problem 7 has no
//     official breakdown, so it has an Astro Coach marking guide.
//   - The paper's answer sheets are not in the PDF. The Problem 3 sheet is
//     the exam's own sky map; the Problem 6 grid paper and the Problem 9
//     sheet (sketch axes + tick table) were rebuilt by Astro Coach.
//   - Solution figures are shown after the solution text, so the
//     solutions refer to "the figures at the end of the solution".
import type { FrqSeedExam } from "./types";

const YEAR = 2026;

export const usaaao2026Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: YEAR,
  examName: "National Astronomy Competition",
  slug: "usaaao-2026-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2026/05/usaaao_second_exam_2026.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2026/05/usaaao_second_exam_2026_solution-1.pdf",
  attributionText: `Source: USA Astronomy and Astrophysics Organization (USAAAO), National Astronomy Competition ${YEAR}. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.`,
  questions: [
    // --- Problem 1: a "gravitational atom" (10 points, no sub-parts) -------
    {
      number: "1",
      title: "A “gravitational atom”",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 10,
      text: String.raw`Bohr's semiclassical model of the hydrogen atom assumed that the ground state angular momentum of the electron is $\hbar = h/(2\pi)$. While this model is incorrect, the Bohr radius does give the correct lengthscale of the hydrogen atom. By analogy to the Bohr model, consider a bound system consisting of a neutron and an electron interacting purely gravitationally. If the orbital angular momentum is $\hbar$, what would be the radius of this "atom"?`,
      solution: String.raw`The electron is so much lighter than the neutron that we can treat the neutron as stationary (using the reduced mass instead changes nothing noticeable).

Set the gravitational force equal to the centripetal force, and use the angular momentum condition $L = m_e v r = \hbar$, so $v = \hbar/(m_e r)$:

$$\frac{G m_n m_e}{r^2} = \frac{m_e v^2}{r} = \frac{\hbar^2}{m_e r^3}$$

Solving for $r$:

$$r = \frac{\hbar^2}{G m_n m_e^2} = \frac{(6.626\times10^{-34}\ \text{J s})^2}{4\pi^2\,(6.674\times10^{-11}\ \text{m}^3\,\text{kg}^{-1}\,\text{s}^{-2})(1.675\times10^{-27}\ \text{kg})(9.110\times10^{-31}\ \text{kg})^2}$$

$$r \approx 1.2\times10^{29}\ \text{m} \approx 1.3\times10^{13}\ \text{light-years}$$

This is far larger than the observable universe — a vivid illustration of how weak gravity is compared with electromagnetism.`,
      rubric: `Official marking scheme (10 points):
- Sets gravitational force equal to the centripetal force, using L = m_e v r = ħ: 2 points.
- Writes the resulting equation G m_n m_e / r² = m_e v²/r = ħ²/(m_e r³): 2 points.
- Final expression r = ħ² / (G m_n m_e²): 3 points.
- Final numerical value ≈ 1.2 × 10^29 m (≈ 1.3 × 10^13 light-years); an answer in metres is fine: 3 points.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- Problem 2: celestial sphere (15 points) ---------------------------
    {
      number: "2",
      title: "Celestial Sphere: Night at the Observatory",
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Telescopes & Observing"],
      difficulty: "Intermediate",
      points: 15,
      pointStep: 0.5,
      text: String.raw`An observer is located at latitude $\phi = +42.0^\circ$ (Northern Hemisphere). Assume the Earth is a perfect sphere and ignore atmospheric refraction.

Star A has equatorial coordinates

$$\alpha = 6^{h}\,40^{m}, \qquad \delta = +62.0^\circ.$$

On a particular night, the local sidereal time (LST) is

$$\text{LST} = 5^{h}\,10^{m}$$

at 10:00 PM local clock time.

You may assume that one sidereal day equals $23^{h}\,56^{m}$ of clock time.`,
      parts: [
        {
          label: "(a)",
          points: 2,
          prompt: String.raw`Compute the hour angle $H$ of star A at 10:00 PM. State whether the star is east or west of the meridian at that moment.`,
          solution: String.raw`The hour angle is $H = \text{LST} - \alpha$ (positive means west of the meridian):

$$H = 5^{h}10^{m} - 6^{h}40^{m} = -1^{h}30^{m} = -1.5\ \text{h} \times 15^\circ/\text{h} = -22.5^\circ$$

Since $H < 0$, the star is **east of the meridian** (it has not yet culminated).`,
          rubric: `Official marking scheme (2 points):
- 2 pts: correct H (−1h 30m = −22.5°, accept −22.5° ± 0.3°) and correct east/west interpretation (east).
- 1 pt: correct subtraction but wrong east/west interpretation.
- 1 pt: arithmetic error in conversion but correct method.
- 0.5 pt: correct formula H = LST − α but major arithmetic mistake.
- 0 pts: incorrect formula or no meaningful progress.`,
        },
        {
          label: "(b)",
          points: 5,
          prompt: String.raw`Compute the altitude $h$ of star A at 10:00 PM. Give your answer in degrees.`,
          solution: String.raw`Use the spherical law of cosines (the altitude formula):

$$\sin h = \sin\phi\,\sin\delta + \cos\phi\,\cos\delta\,\cos H$$

With $\phi = 42^\circ$, $\delta = 62^\circ$, $H = -22.5^\circ$ (and $\cos(-H) = \cos H$):

$$\sin h = \sin 42^\circ \sin 62^\circ + \cos 42^\circ \cos 62^\circ \cos 22.5^\circ \approx 0.591 + 0.322 = 0.9131$$

$$h \approx \arcsin(0.9131) \approx 65.9^\circ$$`,
          rubric: `Official marking scheme (5 points). Accept answers between 65° and 67°.
- 5 pts: correct substitution, trig evaluation, and final altitude (≈ 65.9°).
- 4 pts: correct setup with minor arithmetic error.
- 3 pts: correct formula (sin h = sin φ sin δ + cos φ cos δ cos H) but computational errors.
- 2 pts: some progress towards the formula but incorrect substitution and arithmetic errors.
- 1 pt: partial substitution or wrong angle sign.
- 0 pts: no correct use of the relation.
Note: if a student forgets cos(−H) = cos H, do not deduct heavily unless the conceptual reasoning is affected.`,
        },
        {
          label: "(c)",
          points: 3,
          prompt: String.raw`How much clock time will pass after 10:00 PM until star A reaches upper culmination? Express your answer in hours, minutes, and seconds.`,
          solution: String.raw`Upper culmination happens when $H = 0$, i.e. when $\text{LST} = \alpha$. The hour angle must grow by $1^{h}30^{m}$ — that is 1.5 **sidereal** hours.

A sidereal day (24 sidereal hours) lasts $23^{h}56^{m}$ of clock time, so

$$1\ \text{sidereal hour} = \frac{23^{h}56^{m}}{24} \approx 59^{m}\,50^{s}$$

$$\Delta t = 1.5 \times 59^{m}\,50^{s} \approx 1^{h}\,29^{m}\,45^{s}$$`,
          rubric: `Official marking scheme (3 points):
- 3 pts: correct sidereal interval and correct elapsed time (1h 29m 45s).
- 2 pts: correct sidereal interval and recognises that a conversion is needed, but performs it incorrectly.
- 1 pt: correct sidereal interval but assumes 1 sidereal hour = 1 clock hour, giving 1h 30m.`,
        },
        {
          label: "(d)",
          points: 5,
          leadIn: String.raw`Suppose star B has declination

$$\delta = +30.0^\circ.$$`,
          prompt: String.raw`For star B, compute the total clock-time duration during which the star is above the horizon during one sidereal day. Express your final answer in hours and minutes of clock time.`,
          solution: String.raw`Setting the altitude to zero in the altitude formula gives the hour angle $H_0$ of rising and setting:

$$\cos H_0 = -\tan\phi\,\tan\delta = -\tan 42^\circ \tan 30^\circ \approx -(0.900)(0.577) = -0.519$$

$$H_0 \approx \cos^{-1}(-0.519) \approx 121.3^\circ = \frac{121.3^\circ}{15^\circ/\text{h}} \approx 8.09\ \text{sidereal hours}$$

The star is up from $H = -H_0$ to $H = +H_0$, i.e. for $2H_0 \approx 16.18$ sidereal hours. Converting with $1$ sidereal hour $\approx 59^{m}50^{s}$:

$$16.18 \times 59^{m}\,50^{s} \approx 16^{h}\,08^{m}$$

Star B is above the horizon for about **16 h 08 min** of clock time.`,
          rubric: `Official marking scheme (5 points):
- 5 pts: correct horizon equation (cos H₀ = −tan φ tan δ), correct H₀ (≈ 121.3°), and correct duration (≈ 16h 08m of clock time).
- 4 pts: correct method but minor arithmetic error in H₀ or in the time conversion.
- 3 pts: correct horizon equation but significant computational errors.
- 2 pts: partial substitution into the horizon condition.
- 1 pt: incorrect derivation of the horizon condition from the altitude formula.
- 0 pts: no correct use of the horizon relation.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2, 3, 4, 5],
    },

    // --- Problem 3: sky map (15 points, mostly drawing) ---------------------
    {
      number: "3",
      title: "Sky Map Attack!",
      topic: "Telescopes & Observing",
      topics: ["Telescopes & Observing", "Math, Data & Coordinates"],
      difficulty: "Intermediate",
      points: 15,
      pointStep: 0.5,
      text: String.raw`Please answer this question in the provided Question 3 Answer Sheet.

Before IOAA 2026, you and your friends decided to go on vacation to a deserted island. One night, you looked up at the sky and it looked like the image below:

[[figure:sky-map]]

As the sky was bright, you and your friends gave each other quizzes about the sky.`,
      parts: [
        {
          label: "(a)",
          points: 3,
          prompt: String.raw`What is the estimated latitude of the island?

Hint: The all sky map above is a stereographic projection, which means the zenith distance would follow: $z = 2\arctan(r/R)$, where $r$ is the distance of an object to the center of the map and $R$ is the radius of the all sky map.`,
          solution: String.raw`The Big Dipper and Polaris are both visible, so the island is in the northern hemisphere, and the latitude equals the altitude of the celestial pole (≈ Polaris).

On the printed map the radius is about $R = 8$ cm, and Polaris is about 2.5 cm in from the edge, so its distance from the centre is $r \approx 5.5$ cm. Using the hint:

$$\varphi = 90^\circ - z = 90^\circ - 2\arctan\!\left(\frac{r}{R}\right) = 90^\circ - 2\arctan\!\left(\frac{5.5}{8}\right) \approx 21^\circ\ \text{N}$$

(The map was in fact made for Hanoi, Vietnam, latitude about 21° N.)`,
          rubric: `Official marking scheme (3 points):
- 18°–24° N with reasoning shown: 3 points.
- 15°–17° N or 25°–27° N: 1.5 points.
- Outside those ranges: 0 points.
- A value within 18°–24° N with no reasoning written: only 1 point.
Key reasoning: Polaris / the north celestial pole is identified; its zenith distance is found from z = 2 arctan(r/R) (r/R ≈ 0.69); latitude = 90° − z ≈ 21° N.`,
        },
        {
          label: "(b)",
          points: 2,
          format: "DRAWING",
          prompt: String.raw`Mark and label the cardinal directions: North, East, South, and West.`,
          solution: String.raw`North is the horizon point below Polaris: on the map it is at the lower right (about the 4–5 o'clock position on the rim). Going around the rim, East is about 90° away at roughly 1–2 o'clock (upper right), South is opposite North at roughly 10–11 o'clock (upper left), and West is at roughly 7–8 o'clock (lower left). The annotated map is shown with the figures at the end of the solution.`,
          rubric: `Official marking scheme (2 points): each cardinal point correctly marked and labelled is 0.5 point.
Positions on the answer-sheet map (clock positions around the rim, 12 o'clock = top of the image): North ≈ 4:30–5 o'clock (lower right, directly "below" Polaris), East ≈ 1:30–2 o'clock (upper right), South ≈ 10:30–11 o'clock (upper left), West ≈ 7:30–8 o'clock (lower left). E and W must be 90° from N on either side, with E counter-clockwise from N as seen on this map.`,
        },
        {
          label: "(c)",
          points: 2,
          format: "DRAWING",
          prompt: String.raw`Draw and label the celestial equator.`,
          solution: String.raw`The celestial equator meets the horizon exactly at the East and West points and crosses the meridian at altitude $90^\circ - 21^\circ = 69^\circ$ in the south (zenith distance 21°, i.e. about $\tan(10.5^\circ) \approx 0.19R$ from the centre towards South). So it is an arc from the West point (lower left rim), passing just to the upper-left of the map centre, to the East point (upper right rim). See the annotated map at the end of the solution.`,
          rubric: `Official marking scheme (2 points): full 2 points if the drawn and labelled line lies within the accepted band on the official map.
Accepted band: an arc from the West point on the rim (≈ 7:30–8 o'clock) to the East point (≈ 1:30–2 o'clock), passing about 0.2 R from the centre on the South side (upper left of centre).`,
        },
        {
          label: "(d)",
          points: 2,
          format: "DRAWING",
          prompt: String.raw`Draw and label the ecliptic.`,
          solution: String.raw`At this latitude and time the ecliptic runs almost straight across the sky and very close to the zenith: from the lower-left rim near the Pleiades (about 7 o'clock), passing right beside Jupiter and through the centre of the map, to the upper-right rim at about 1 o'clock. (Planets such as Jupiter always lie close to the ecliptic, which is a good check.) See the annotated map at the end of the solution.`,
          rubric: `Official marking scheme (2 points): full 2 points if the drawn and labelled line lies within the accepted band on the official map.
Accepted band: a nearly straight line from the lower-left rim near the Pleiades (≈ 6:30–7 o'clock) through Jupiter's neighbourhood and close to the map centre (zenith) to the upper-right rim (≈ 1 o'clock).`,
        },
        {
          label: "(e)",
          points: 3,
          format: "DRAWING",
          prompt: String.raw`Mark and label (North/South) the available Celestial, Ecliptic, and Galactic Poles.`,
          solution: String.raw`Only the three **north** poles are above the horizon:

- **North Celestial Pole (NCP):** next to Polaris, about two-thirds of the way from the centre to the rim towards North (lower right).
- **North Ecliptic Pole (NEP):** in Draco, about 23.4° from the NCP — farther out, near the right-hand rim at about the 4 o'clock position.
- **North Galactic Pole (NGP):** in Coma Berenices, about one-third of the way from the centre towards the upper right (about 2 o'clock).

See the annotated map at the end of the solution.`,
          rubric: `Official marking scheme (3 points): each pole correctly marked and labelled within the accepted circle is 1 point. The available poles are the North Celestial Pole, North Ecliptic Pole and North Galactic Pole (no south poles are visible).
Accepted positions (fraction of R from the centre, clock direction): NCP ≈ 0.65 R towards ≈ 4:40 (at Polaris); NEP ≈ 0.8 R towards ≈ 4 o'clock; NGP ≈ 0.3 R towards ≈ 2 o'clock. Marking a south pole or mislabelling north/south earns nothing for that pole.`,
        },
        {
          label: "(f)",
          points: 1.5,
          format: "DRAWING",
          prompt: String.raw`Are there any planets seen in the sky? If yes, mark and label the planets.`,
          solution: String.raw`Yes — one planet: **Jupiter**, the brightest "star" on the map, a little below and to the left of the centre (in Gemini, right on the ecliptic). See the annotated map at the end of the solution.`,
          rubric: `Official marking scheme (1.5 points): 1 point for marking Jupiter correctly (the brightest dot, about 0.35–0.4 R from the centre towards ≈ 7–7:30 o'clock), 0.5 point for labelling it "Jupiter". 0 points if more than one planet is marked/labelled.`,
        },
        {
          label: "(g)",
          points: 1.5,
          format: "DRAWING",
          prompt: String.raw`Circle and label the Pleiades (M45).`,
          solution: String.raw`The Pleiades are the small, tight group near the bottom-left edge of the map (about 0.9 R from the centre towards 7 o'clock), low in the west-northwest, right beside the ecliptic. See the annotated map at the end of the solution.`,
          rubric: `Official marking scheme (1.5 points): full 1.5 points if circled and labelled correctly, otherwise 0. Correct position: the small cluster near the lower-left rim, ≈ 0.9 R from the centre towards ≈ 7 o'clock, next to the ecliptic.`,
        },
      ],
      figures: [
        { key: "sky-map", file: "q3-sky-map.png", caption: "All-sky map of the island's night sky", sourcePage: 3 },
        {
          key: "answer-sheet",
          file: "q3-answer-sheet.png",
          kind: "ANSWER_SHEET",
          caption: "Question 3 answer sheet (sky map)",
          sourcePage: 3,
        },
        {
          key: "solution-map",
          file: "q3-solution-map.png",
          kind: "SOLUTION",
          caption: "Official answer: cardinal directions, celestial equator, ecliptic, galactic equator, poles, Jupiter and the Pleiades",
          sourcePage: 7,
        },
        {
          key: "solution-stellarium",
          file: "q3-solution-stellarium.png",
          kind: "SOLUTION",
          caption: "The same sky in Stellarium (Hanoi, 22 March 2026, 22:00)",
          sourcePage: 7,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [6, 7, 8],
    },

    // --- Problem 4: solar observations (20 points, no sub-parts) ----------
    {
      number: "4",
      title: "Solar Observations",
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Solar System"],
      difficulty: "Advanced",
      points: 20,
      text: String.raw`An astronomer who enjoys solar observations has the habit of recording the Sun's right ascension and declination every day. These coordinates are always recorded at the same civil time (the time on the clock). Between two consecutive observations, which happened when the Sun was in the Northern Celestial Hemisphere, the declination of the Sun increased by $0.3650^\circ$. Estimate the days in which these two observations occurred.

Neglect the eccentricity of Earth's orbit.`,
      solution: String.raw`**Idea.** The Sun moves along the ecliptic at a constant rate (no eccentricity), but its declination changes fastest near the equinoxes and slowest near the solstices. Find where on the ecliptic the declination rate equals $0.3650^\circ$/day, then convert that position into a date.

**The Sun's rate along the ecliptic:**

$$\omega = \frac{360^\circ}{365.2564\ \text{days}} = 0.98561^\circ/\text{day}$$

**First approach (geometry).** In the spherical triangle formed by the pole, the Sun and the ecliptic (see the figures at the end of the solution), let $x$ be the angle between the ecliptic and the Sun's hour circle. The spherical law of sines gives

$$\frac{\sin x}{\sin(90^\circ - \varepsilon)} = \frac{\sin 90^\circ}{\sin(90^\circ - \delta)} \quad\Rightarrow\quad \sin x = \frac{\cos\varepsilon}{\cos\delta}, \qquad \cos x = \sqrt{1 - \left(\frac{\cos\varepsilon}{\cos\delta}\right)^2}$$

The declination component of the Sun's motion is $\omega_\delta = \omega\cos x$, so

$$\cos\delta = \frac{\cos\varepsilon}{\sqrt{1 - (\omega_\delta/\omega)^2}} = \frac{\cos 23.44^\circ}{\sqrt{1 - (0.365/0.98561)^2}} = 0.9877 \quad\Rightarrow\quad \delta = 8.995^\circ$$

(taking the positive root: the Sun is north of the equator and its declination is increasing, so it is in the first quadrant of the ecliptic, between the March equinox and the June solstice).

The ecliptic longitude follows from $\sin\delta = \sin\varepsilon\,\sin\lambda$:

$$\sin\lambda = \frac{\sin 8.995^\circ}{\sin 23.44^\circ} = 0.3930 \quad\Rightarrow\quad \lambda = 23.14^\circ$$

**Second approach (calculus).** Differentiate $\sin\delta = \sin\varepsilon\sin\lambda$ with respect to time:

$$\cos\delta\,\frac{d\delta}{dt} = \sin\varepsilon\cos\lambda\,\frac{d\lambda}{dt} \quad\Rightarrow\quad \left[1 - \sin^2\varepsilon\sin^2\lambda\right]\left(\frac{d\delta}{dt}\right)^2 = \sin^2\varepsilon\cos^2\lambda\left(\frac{d\lambda}{dt}\right)^2$$

With $k = \left(\dfrac{d\lambda/dt}{d\delta/dt}\right)^2 = \left(\dfrac{0.98561}{0.3650}\right)^2 \approx 7.29$, this rearranges to

$$\sin^2\lambda = \frac{1}{1-k}\left(\frac{1}{\sin^2\varepsilon} - k\right) = 0.1545 \quad\Rightarrow\quad \sin\lambda = 0.3930,\ \ \lambda = 23.14^\circ$$

**Convert to a date.** The Sun moves $0.98561^\circ$ per day from the vernal equinox ($\lambda = 0$):

$$d = \frac{\lambda}{\omega} = \frac{23.14^\circ}{0.98561^\circ/\text{day}} = 23.48\ \text{days}$$

So the observations were on days 23 and 24 after the March equinox. With the equinox around **March 20**, that is about **April 12 and April 13**. (Because the equinox date varies slightly, any pair of consecutive days between April 10 and April 15 is accepted.)`,
      rubric: `Official marking scheme (20 points). Either approach earns full marks.
First approach:
- (7 points) correctly drawing or describing the geometry of the problem.
- (4 points) finding an expression for the cosine of x.
- (1 point) correctly breaking down the angular velocity of the Sun to find the declination component.
- (2 points) determining the declination of the Sun (δ ≈ 9.0°).
- (2 points) determining the ecliptic longitude of the Sun (λ ≈ 23.1°).
- (2 points) determining the number of days since the vernal equinox (≈ 23.5 days).
- (1 point) estimating a reasonable day for the vernal equinox (≈ March 20).
- (1 point) correct final answer: April 12 and 13 (any consecutive pair between April 10 and April 15 is accepted).
Second approach:
- (1 point) writing down sin δ = sin ε sin λ.
- (3 points) correctly differentiating it with respect to time.
- (12 points) correctly simplifying the expression to obtain the value of λ (≈ 23.1°).
- (2 points) determining the number of days since the vernal equinox.
- (1 point) estimating a reasonable day for the vernal equinox.
- (1 point) correct final answer.`,
      figures: [
        {
          key: "solution-geometry",
          file: "q4-solution-geometry.png",
          kind: "SOLUTION",
          caption: "Spherical triangle between the celestial equator, the ecliptic and the Sun's hour circle",
          sourcePage: 9,
        },
        {
          key: "solution-velocity",
          file: "q4-solution-velocity.png",
          kind: "SOLUTION",
          caption: "Splitting the Sun's motion ω into its declination component ω_δ",
          sourcePage: 10,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [4],
      solutionPages: [8, 9, 10, 11, 12],
    },

    // --- Problem 5: Enceladus geysers (20 points) --------------------------
    {
      number: "5",
      title: "Enceladus geysers",
      topic: "Solar System",
      topics: ["Solar System", "Gravity & Orbits"],
      difficulty: "Intermediate",
      points: 20,
      text: String.raw`[[figure:enceladus]]

Enceladus is a moon of Saturn which has an outer crust of ice and is believed to have a subsurface liquid water ocean. Here are some useful physical properties:

• Radius of Enceladus (including the ice shell) $R = 250\ \text{km}$
• Ice shell thickness $H = 25\ \text{km}$
• Density of ice $\rho_i = 920\ \text{kg/m}^3$
• Surface gravity $g = 0.11\ \text{m/s}^2$ (you can assume this is constant throughout the icy shell to the top of the subsurface ocean)
• Semi-major axis of Enceladus' orbit around Saturn $a = 2.4\times10^{8}\ \text{m}$
• Mass of Saturn $M = 5.7\times10^{26}\ \text{kg}$`,
      parts: [
        {
          label: "(a)",
          points: 10,
          prompt: String.raw`The Cassini spacecraft observed that geysers of water erupt from the surface at a speed of $v = 400\ \text{m/s}$ relative to Enceladus. Calculate whether this water has sufficient speed to escape the gravitational field of Enceladus. If so, will it remain gravitationally bound to Saturn or escape into solar orbit?`,
          solution: String.raw`We are not given the mass $m$ of Enceladus, but $g = Gm/R^2$, so the escape speed can be written with known quantities:

$$v_{\text{esc},E} = \sqrt{\frac{2Gm}{R}} = \sqrt{2gR} = \sqrt{2(0.11\ \text{m/s}^2)(250\times10^{3}\ \text{m})} \approx 230\ \text{m/s} < v$$

so the geyser water **escapes Enceladus**.

The escape speed from Saturn at Enceladus' distance is

$$v_{\text{esc},S} = \sqrt{\frac{2GM}{a}} = \sqrt{\frac{2(6.674\times10^{-11})(5.7\times10^{26})}{2.4\times10^{8}}}\ \text{m/s} \approx 18{,}000\ \text{m/s}$$

To compare, we must switch to Saturn's frame: the water starts with Enceladus' orbital speed, $v_{\text{esc},S}/\sqrt{2} \approx 12{,}600\ \text{m/s}$, plus at most 400 m/s — still far below 18,000 m/s. So the material **stays bound to Saturn** and goes into orbit around it. (This is the source of Saturn's E ring!)`,
          rubric: `Official marking scheme (10 points):
- Escape velocity formula v = √(2Gm/R): 1 point.
- Rewriting it in terms of known quantities, v = √(2gR): 2 points.
- Calculation ≈ 230 m/s: 2 points.
- Conclusion that the geyser can escape Enceladus: 1 point.
- Escape velocity from Saturn formula √(2GM/a): 1 point.
- Calculation ≈ 18,000 m/s: 1 point.
- Some mention that you need to change reference frames (Enceladus' orbital speed, v_esc,S/√2, must be included): 1 point.
- Conclusion: the material enters orbit around Saturn (stays bound): 1 point.`,
        },
        {
          label: "(b)",
          points: 6,
          prompt: String.raw`Assuming that the water in the geysers starts from rest at the top of the subsurface ocean, calculate the pressure necessary to accelerate the water to $v = 400\ \text{m/s}$ at the surface of Enceladus, where there is no ambient pressure. Assume that viscous losses are negligible and the geyser material has a constant density of $1000\ \text{kg/m}^3$, ignoring any phase changes.`,
          solution: String.raw`By Bernoulli's principle, $\tfrac{1}{2}\rho v^2 + \rho g h + P$ is constant along the flow. Compare the top of the ocean (at rest, height $-H$, pressure $P$) with the surface (speed $v$, height 0, no pressure):

$$\tfrac{1}{2}\rho(0)^2 - \rho g H + P = \tfrac{1}{2}\rho v^2 + \rho g\cdot 0 + 0$$

$$P = \tfrac{1}{2}\rho v^2 + \rho g H = (1000\ \text{kg/m}^3)\left(\tfrac{1}{2}(400\ \text{m/s})^2 + (0.11\ \text{m/s}^2)(25\times10^{3}\ \text{m})\right) \approx 8.3\times10^{7}\ \text{Pa}$$`,
          rubric: `Official marking scheme (6 points):
- Bernoulli's principle: ½ρv² + ρgh + P is constant: 2 points.
- Equating its value at the top of the subsurface ocean and at the surface: 1 point.
- Equation for the pressure, P = ½ρv² + ρgH: 2 points.
- Calculation ≈ 8.3 × 10^7 Pa: 1 point.`,
        },
        {
          label: "(c)",
          points: 4,
          prompt: String.raw`Estimate the hydrostatic pressure due to the weight of the icy shell at the top of the subsurface ocean. Is that pressure sufficient to explain the speed of the geysers?`,
          solution: String.raw`The weight of the ice shell gives

$$P_{\text{ice}} = \rho_i g H = (920\ \text{kg/m}^3)(0.11\ \text{m/s}^2)(25\times10^{3}\ \text{m}) \approx 2.5\times10^{6}\ \text{Pa}$$

(An alternative that accounts for the shell's curvature, $\tfrac{4}{3}\pi\left(R^3 - (R-H)^3\right)\rho_i g / \left(4\pi (R-H)^2\right) \approx 2.8\times10^{6}$ Pa, is equally good.)

This is more than an order of magnitude smaller than the $8.3\times10^{7}$ Pa needed, so **no** — some other source of pressure must drive the geysers. One possibility is that tidal forces from Saturn crack the ice shell and "squeeze" the cracks, accelerating the water (Kite & Rubin 2016).`,
          rubric: `Official marking scheme (4 points):
- Equation for the pressure, ρ_i g H (or the curved-shell version): 2 points.
- Calculation ≈ 2.5 × 10^6 Pa (≈ 2.8 × 10^6 Pa with the alternative method): 1 point.
- Conclusion: no, it is not sufficient — another pressure source is needed: 1 point.`,
        },
      ],
      figures: [
        {
          key: "enceladus",
          file: "q5-enceladus.png",
          caption: "Figure 1: Cassini image of geysers from Enceladus. From NASA.",
          sourcePage: 4,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [4],
      solutionPages: [12, 13, 14],
    },

    // --- Problem 6: build your own H-R diagram (40 points) ------------------
    {
      number: "6",
      title: "Build your Own H-R Diagram",
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Galaxies & Universe", "Math, Data & Coordinates"],
      difficulty: "Intermediate",
      points: 40,
      text: String.raw`The following table contains the apparent visual magnitudes $m_v$ and color indices (B-V) for a sample of stars in a cluster.

$$\begin{array}{ccc|ccc}
\text{Star \#} & \text{B-V} & m_v & \text{Star \#} & \text{B-V} & m_v \\ \hline
1 & 0.66 & 20.0 & 21 & 0.93 & 21.0 \\
2 & 0.45 & 18.3 & 22 & 0.39 & 17.0 \\
3 & 0.73 & 19.9 & 23 & 1.01 & 11.9 \\
4 & 0.72 & 14.2 & 24 & 0.60 & 19.5 \\
5 & 0.38 & 17.5 & 25 & -0.03 & 14.3 \\
6 & 0.03 & 13.9 & 26 & 0.65 & 15.5 \\
7 & 0.55 & 18.9 & 27 & 0.49 & 18.9 \\
8 & 0.70 & 14.3 & 28 & 0.61 & 13.2 \\
9 & 0.57 & 16.3 & 29 & 0.62 & 15.0 \\
10 & 0.91 & 12.3 & 30 & 0.53 & 19.0 \\
11 & 0.80 & 20.5 & 31 & 0.53 & 16.5 \\
12 & 0.46 & 16.8 & 32 & 0.43 & 18.1 \\
13 & 0.12 & 21.1 & 33 & 0.62 & 19.4 \\
14 & 0.20 & 13.7 & 34 & 0.70 & 12.3 \\
15 & 0.77 & 20.0 & 35 & 0.85 & 13.0 \\
16 & 0.51 & 19.3 & 36 & 0.06 & 20.9 \\
17 & 0.74 & 13.9 & 37 & 0.61 & 16.2 \\
18 & 0.99 & 12.0 & 38 & 0.72 & 20.0 \\
19 & 0.53 & 13.1 & 39 & 0.68 & 19.7 \\
20 & 0.50 & 16.4 & 40 & 0.11 & 13.9
\end{array}$$

For the purposes of this problem, the values have been corrected for extinction and reddening from the interstellar medium.`,
      parts: [
        {
          label: "(a)",
          points: 18,
          format: "DRAWING",
          prompt: String.raw`Plot the data on an H-R diagram using the provided grid paper. Label at least three of the main features.`,
          solution: String.raw`Plot $m_v$ on the vertical axis with **brighter (smaller) magnitudes at the top**, and B-V on the horizontal axis (bluer on the left). The points trace out the classic shape of an old cluster (see the official plot with the figures at the end of the solution):

- **Main sequence:** from about (B-V, $m_v$) = (0.4, 17.5) down to (0.9, 21).
- **Main-sequence turnoff:** the bluest, brightest end of the main sequence, near B-V ≈ 0.4, $m_v \approx 17$–17.5.
- **Red giant branch:** rising from about (0.6, 16.2) up to (1.0, 12).
- **Horizontal branch:** the blue stars at $m_v \approx 13.7$–14.3 with B-V between −0.03 and 0.2.
- **Asymptotic giant branch:** the few stars above the horizontal branch at B-V ≈ 0.5–0.7, $m_v \approx 12.3$–13.2.
- **White dwarfs:** the two faint blue stars at (0.06, 20.9) and (0.12, 21.1).`,
          rubric: `Official marking scheme (18 points):
- Correctly drawn plot of the 40 stars: 9 points (magnitude axis should have bright/small m_v at the top; points placed accurately).
- Labelled axes (B-V colour index horizontally, apparent magnitude m_v vertically): 3 points.
- Each correctly labelled feature: 2 points, up to 3 features (6 points). Accept: main sequence (≈ (0.4, 17.5) to (0.93, 21.0)); main-sequence turnoff (B-V ≈ 0.4, m_v ≈ 17–17.5); red giant branch ((0.6, 16.2) up to (1.01, 11.9)); horizontal branch (m_v ≈ 13.7–14.3, B-V −0.03 to 0.20); asymptotic giant branch ((0.53, 13.1), (0.61, 13.2), (0.70, 12.3)); white dwarfs ((0.06, 20.9), (0.12, 21.1)).`,
        },
        {
          label: "(b)(i)",
          points: 5,
          leadIn: String.raw`Any population of stars that formed together (such as the stars in a cluster) should all be of about the same age and metallicity and should lie along a given curve on the H-R diagram, because their position on the H-R diagram is only a function of their initial mass. These curves are known as isochrones. The following figure shows a selection of modeled isochrones for different ages and metallicities [Fe/H]. The isochrones range in age from 2 Gyr (lightest) to 14 Gyr (darkest) in 2 Gyr steps.

[[figure:isochrones]]

Notes:
• The isochrones plotted here use absolute magnitude $M_v$ on the y-axis, rather than apparent magnitude $m_v$.
• The isochrones do not include every phase of stellar evolution.
• The data you plotted in part (a) will not perfectly fall along a single curve due to measurement scatter.

**(b) (17 points)** By comparing your H-R diagram to the isochrones, estimate:`,
          prompt: String.raw`the metallicity of the cluster (to the nearest integer).`,
          solution: String.raw`The plotted cluster is a close visual match to the isochrones with **[Fe/H] = −2**. The easiest way to tell is the shape and colour of the main-sequence turnoff: the data turn off at B-V ≈ 0.4, which matches only the metal-poor [Fe/H] = −2 panel (the turnoffs at [Fe/H] = −1 and 0 are redder for old ages).

Because the isochrones use absolute magnitude, compare colours and magnitude differences between features, not the magnitudes themselves (the distance modulus shifts everything up or down).`,
          rubric: `Official marking scheme (5 points): 5 points for [Fe/H] = −2.`,
        },
        {
          label: "(b)(ii)",
          points: 5,
          prompt: String.raw`the age of the cluster (to the nearest Gyr).`,
          solution: String.raw`The data follow the **12–14 Gyr** isochrones at [Fe/H] = −2 (the darkest curves): the turnoff is at B-V ≈ 0.4 and the subgiant branch is short and nearly flat. So the cluster is about **13 Gyr** old — it formed in the early universe. (The official plot overlaying the 12 and 14 Gyr isochrones is shown with the figures at the end of the solution.)`,
          rubric: `Official marking scheme (5 points): 5 points for an age from 12 to 14 Gyr.`,
        },
        {
          label: "(b)(iii)",
          points: 7,
          prompt: String.raw`the distance to the cluster (to the nearest kpc).`,
          solution: String.raw`Shift the chosen isochrone vertically until it lies on the data; the size of the shift is the distance modulus $m_v - M_v$. Visually, $m_v - M_v \approx 13.5$ (for example, the turnoff is at $M_v \approx 4$ on the isochrone and at $m_v \approx 17.5$ in the data).

$$m_v - M_v = 5\log_{10}\!\left(\frac{d}{10\ \text{pc}}\right) \quad\Rightarrow\quad d = 10^{(13.5/5)+1}\ \text{pc} \approx 5000\ \text{pc}$$

The cluster is about **5 kpc** away.`,
          rubric: `Official marking scheme (7 points):
- Applying the distance modulus equation m_v − M_v = 5 log₁₀(d / 10 pc): 2 points.
- Visual estimate of the distance modulus m_v − M_v ≈ 13.5 (acceptable range 13 to 14): 2 points.
- Distance d ≈ 5000 pc = 5 kpc (acceptable range 3900 to 6400 pc): 3 points.`,
        },
        {
          label: "(c)",
          points: 5,
          prompt: String.raw`Is this cluster more likely to be an open cluster or a globular cluster? Explain your reasoning.`,
          solution: String.raw`A **globular cluster**. A metallicity of [Fe/H] = −2 is very low — only about 1% of the Sun's metal abundance — and an age of 12–14 Gyr means it formed very early. Both are characteristic of globular clusters; open clusters are young and metal-rich. (The horizontal branch in the diagram is another hallmark of an old globular cluster.)`,
          rubric: `Official marking scheme (5 points): 5 points for "globular cluster" with explained reasoning (very low metallicity, [Fe/H] = −2, and very old age, 12–14 Gyr, are characteristic of globular clusters). A correct answer with no reasoning earns little.`,
        },
      ],
      figures: [
        {
          key: "isochrones",
          file: "q6-isochrones.png",
          caption: "Model isochrones for [Fe/H] = −2, −1 and 0, ages 2–14 Gyr",
          part: "(b)(i)",
          sourcePage: 5,
        },
        {
          key: "answer-sheet",
          file: "q6-answer-sheet.png",
          kind: "ANSWER_SHEET",
          caption: "Question 6(a) grid paper",
        },
        {
          key: "solution-hr",
          file: "q6-solution-hr.png",
          kind: "SOLUTION",
          caption: "Official H-R diagram of the cluster with its main features labelled",
          sourcePage: 16,
        },
        {
          key: "solution-isochrone-fit",
          file: "q6-solution-isochrone-fit.png",
          kind: "SOLUTION",
          caption: "The 12 and 14 Gyr isochrones ([Fe/H] = −2) shifted by the distance modulus onto the data",
          sourcePage: 17,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [5, 6],
      solutionPages: [15, 16, 17],
    },

    // --- Problem 7: interstellar flight (40 points) -------------------------
    {
      number: "7",
      title: "Interstellar Flight",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Math, Data & Coordinates", "Stars & Black Holes"],
      difficulty: "Intermediate",
      points: 40,
      text: String.raw`Kirara is traveling to some stars in the constellation Crux, starting from Earth, and then visiting Gacrux ($\gamma$ Crucis), Ginan ($\epsilon$ Crucis), Acrux ($\alpha$ Crucis), and Mimosa ($\beta$ Crucis) in that order. To pass the time, she does some astronomy on each leg of the trip.`,
      parts: [
        {
          label: "(a)",
          points: 5,
          prompt: String.raw`Suppose Kirara starts at rest in the reference frame of the barycenter of the solar system, and that Gacrux, in the same reference frame, has a radial velocity of $20.6\ \text{km/s}$ away from Kirara. She has a magic warp drive that can teleport her rocket straight to Gacrux (and preserves her velocity).

However, if she directly teleports, she'll have a large velocity relative to Gacrux once she arrives! She plans to use a normal rocket to first accelerate to a point where she has no velocity relative to Gacrux. If her unfueled rocket weights $1.20\times10^{5}\ \text{kg}$, how much fuel would she need? The exhaust velocity of her rocket is $10.0\ \text{km/s}$.

The Tsiolkovsky rocket equation says that $\Delta v = v_e \ln\dfrac{m_0}{m_f}$, where $\Delta v$ is the change in velocity, $v_e$ is the exhaust velocity, $m_0$ is the initial mass of the rocket (including fuel), and $m_f$ is the final mass of the rocket.

Ignore the proper motion of Gacrux.`,
          solution: String.raw`She needs $\Delta v = 20.6$ km/s, ending with the empty rocket, $m_f = 1.20\times10^{5}$ kg:

$$20.6\ \text{km/s} = (10.0\ \text{km/s})\ln\frac{m_0}{1.20\times10^{5}\ \text{kg}} \quad\Rightarrow\quad m_0 = (1.20\times10^{5}\ \text{kg})\,e^{2.06} \approx 9.42\times10^{5}\ \text{kg}$$

Fuel needed: $9.42\times10^{5} - 1.20\times10^{5} = $ **$8.22\times10^{5}\ \text{kg}$**.`,
          rubric: `Astro Coach marking guide (5 points; the official solution gives no breakdown):
- Rocket equation set up with Δv = 20.6 km/s and m_f = 1.20 × 10^5 kg (the empty rocket): 2 points.
- Initial mass m₀ = m_f e^(2.06) ≈ 9.42 × 10^5 kg: 2 points.
- Fuel mass = m₀ − m_f ≈ 8.22 × 10^5 kg (accept 8.2 × 10^5): 1 point.`,
        },
        {
          label: "(b)",
          points: 10,
          prompt: String.raw`When Kirara gets to Ginan, she takes a break on a (fictional) exoplanet orbiting the star. Ginan has a mass of $1.5\,M_\odot$, and suppose the exoplanet has a mass of $2M_\oplus$, a radius of $1.2R_\oplus$, and a circular orbit with radius 10 AU. She rigs a catapult to give her rocket a one-time boost of $\Delta v$ in any direction. What is the minimum $\Delta v$ required for her to escape the combined gravitational field of both Ginan and the exoplanet?`,
          solution: String.raw`Work in two stages: first climb out of the planet's gravity well, then use the leftover speed (plus the planet's orbital motion) to escape Ginan.

**Escaping Ginan.** In Ginan's frame, the escape speed at 10 AU is

$$v_{\text{esc}} = \sqrt{\frac{2G(1.5M_\odot)}{10\ \text{AU}}} = \sqrt{\frac{2(6.67\times10^{-11})(1.5\times1.989\times10^{30})}{10(1.496\times10^{11})}} \approx 16.3\ \text{km/s}$$

The planet already orbits at $\sqrt{G(1.5M_\odot)/10\ \text{AU}} = v_{\text{esc}}/\sqrt{2} \approx 11.5$ km/s. Launching in the direction of the planet's orbit, she only needs $16.3 - 11.5 = 4.8$ km/s relative to the planet once she is free of its gravity.

**Escaping the planet.** In the planet's frame, energy conservation from the surface to far away gives

$$\tfrac{1}{2}mv^2 - \frac{Gm(2M_\oplus)}{1.2R_\oplus} = \tfrac{1}{2}m\,(4.8\ \text{km/s})^2, \qquad \frac{G(2M_\oplus)}{1.2R_\oplus} = \frac{(6.67\times10^{-11})(2\times5.976\times10^{24})}{1.2(6.371\times10^{6})} \approx 1.043\times10^{8}\ \text{J/kg}$$

$$v = \sqrt{(4.8\times10^{3})^2 + 2(1.043\times10^{8})}\ \text{m/s} \approx 15.2\ \text{km/s}$$

The minimum boost is **$\Delta v \approx 15.2$ km/s**.`,
          rubric: `Astro Coach marking guide (10 points; the official solution gives no breakdown):
- Escape speed from Ginan at 10 AU ≈ 16.3 km/s: 2 points.
- Planet's orbital speed ≈ 11.5 km/s (= v_esc/√2) and the idea of launching along the planet's orbital motion: 2 points.
- Required speed relative to the planet after escaping it ≈ 4.8 km/s: 1 point.
- Energy conservation in the planet's frame including the planet's potential GM/R ≈ 1.04 × 10^8 J/kg: 3 points.
- Final answer ≈ 15.2 km/s (accept 15.0–15.4 km/s): 2 points.`,
        },
        {
          label: "(c)",
          points: 5,
          prompt: String.raw`Kirara arrives at Acrux, which is actually a system of 6 stars. She gets distracted taking measurements of them, and doesn't realize that she's drifting too close to one of the stars! Specifically, she is close to $\alpha$ Crucis Aa, which has a mass of $15.17\,M_\odot$.

She currently is at rest, at a distance $R$ from $\alpha$ Crucis Aa. The free-fall time for an object at distance $R$ to fall into a star with mass $15.17\,M_\odot$ is 24.0 hours, meaning that if Kirara doesn't act, her ship will be pulled into the star in 24 hours!

She repositions to a distance of $2R$ from $\alpha$ Crucis Aa, again with no velocity relative to the star. What is the free-fall time for an object at a distance $2R$ to fall into a star of mass $15.17\,M_\odot$? Assume $\alpha$ Crucis Aa is at rest, and ignore the gravitational effects of the other stars in the system.`,
          solution: String.raw`A fall from rest straight into the star can be treated as half of a degenerate "elliptical" orbit with eccentricity 1 and semi-major axis equal to half the starting distance. By Kepler's third law the period — and so the fall time — scales as (distance)$^{3/2}$. Doubling the starting distance multiplies the fall time by $2^{1.5} = 2.83$:

$$t = 24.0\ \text{h} \times 2^{1.5} \approx 68\ \text{hours}$$`,
          rubric: `Astro Coach marking guide (5 points; the official solution gives no breakdown):
- Recognises that the free-fall time scales as R^(3/2) (via Kepler's third law / a degenerate e = 1 orbit, or dimensional analysis with fixed mass): 3 points.
- Final answer 24 × 2^1.5 ≈ 68 hours (accept 67–68 h): 2 points.`,
        },
        {
          label: "(d)",
          points: 20,
          prompt: String.raw`When Kirara is halfway from Acrux to Mimosa (in linear Euclidean distance), she looks at Mimosa through a telescope. What is the apparent magnitude she observes for Mimosa? The following information will be helpful:

$$\begin{array}{cccccc}
\text{Designation} & \text{Name} & \text{RA} & \text{Dec} & \text{Apparent magnitude} & \text{Distance to Earth} \\ \hline
\alpha\ \text{Crucis} & \text{Acrux} & 12^{h}\,26^{m}\,36^{s} & -63^\circ\,06' & 0.76 & 321\ \text{ly} \\
\beta\ \text{Crucis} & \text{Mimosa} & 12^{h}\,47^{m}\,43^{s} & -59^\circ\,41' & 1.25 & 352\ \text{ly}
\end{array}$$

Assume that Acrux and Mimosa are stationary.`,
          solution: String.raw`Kirara's distance to Mimosa is half the Acrux–Mimosa distance. Find the angle between the stars on the sky, then the distance between them in space.

**Angular separation.** On the celestial sphere let $N$ be the north celestial pole, $A$ Acrux and $M$ Mimosa:

$$NA = 90^\circ - (-63^\circ 06') = 153.1^\circ, \qquad NM = 90^\circ - (-59^\circ 41') = 149.68^\circ$$

$$\angle ANM = 12^{h}47^{m}43^{s} - 12^{h}26^{m}36^{s} = 21^{m}\,7^{s} = 5.28^\circ$$

By the spherical law of cosines,

$$\cos(AM) = \cos(NA)\cos(NM) + \sin(NA)\sin(NM)\cos(\angle ANM) \quad\Rightarrow\quad AM \approx 4.25^\circ$$

**Linear distance.** By the (plane) law of cosines with the distances from Earth,

$$AM_{\text{linear}} = \sqrt{321^2 + 352^2 - 2(321)(352)\cos 4.25^\circ}\ \text{ly} \approx 39.8\ \text{ly}$$

so Kirara is $19.9$ ly from Mimosa.

**Magnitude.** Being closer brightens Mimosa by

$$5\log_{10}\!\left(\frac{352\ \text{ly}}{19.9\ \text{ly}}\right) \approx 6.24\ \text{magnitudes}$$

so she sees $m \approx 1.25 - 6.24 \approx$ **$-5.0$**.

Note: the official solution states an angular separation of 4.4° and a separation of 41.6 ly, giving $m = -4.89$. Both are slips: its own rounded inputs (153.1°, 149.7°, 5.3°) give 4.24°, and even 4.4° would give 40.3 ly, not 41.6 ly. Recomputing with the given coordinates gives 4.25° and 39.8 ly (19.9 ly for Kirara), so $m \approx -4.99$. The method is the same, and answers from about −4.8 to −5.1 should be treated as correct.`,
          rubric: `Astro Coach marking guide (20 points; the official solution gives no breakdown):
- Angular separation from the spherical law of cosines with polar distances 153.1° and 149.7° and an RA difference of 21m 7s = 5.28°, giving ≈ 4.25° (the official solution's 4.4° is also accepted): 6 points.
- Linear Acrux–Mimosa distance from the plane law of cosines, ≈ 39.8 ly (the official 41.6 ly is also accepted): 5 points.
- Kirara's distance = half of that, ≈ 19.9 ly: 2 points.
- Magnitude change Δm = 5 log₁₀(352 ly / Kirara's distance) ≈ 6.2: 4 points.
- Final apparent magnitude ≈ −5.0 (accept −4.8 to −5.1): 3 points.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [6],
      solutionPages: [18, 19, 20],
    },

    // --- Problem 8: special relativity (55 points) --------------------------
    {
      number: "8",
      title: "Watch Out!",
      topic: "Light & Spectra",
      topics: ["Light & Spectra", "Energy & Stellar Physics"],
      difficulty: "Advanced",
      points: 55,
      pointStep: 0.5,
      text: String.raw`Starting at time $t = 0$, two spaceships A and B begin traveling apart from each other at a relative speed of $v = \beta c$. Let a given ship's reference frame be the frame in which it is constantly at position $x = 0$. For a given event, if it occurs at position $x$ and time $t$ in A's reference frame (call this frame $S$), let $x'$ and $t'$ be the position and time, respectively, of the event in B's reference frame (call this frame $S'$). Assume that the spaceships start at the same position, at which point their clocks are initially synchronized.`,
      parts: [
        {
          label: "(a)",
          points: 5,
          prompt: String.raw`Using only Newtonian mechanics, and neglecting all relativistic corrections, write $x'$ and $t'$ in terms of $x$, $t$, and $v$.`,
          solution: String.raw`In Newtonian physics time is absolute, so the two clocks stay synchronized:

$$t' = t$$

and positions are shifted by how far ship B has moved:

$$x' = x - vt$$

(These are the $c \to \infty$ limit of the Lorentz transformations.)`,
          rubric: `Official marking scheme (5 points): t' = t: 2 points; x' = x − vt: 3 points.`,
        },
        {
          label: "(b)",
          points: 2,
          prompt: String.raw`Explain the primary physical contradiction that arises in the above system if $\beta$ is significantly larger than 0.`,
          solution: String.raw`The speed of light must be the same in every inertial frame. But with the Newtonian transformation, a light signal sent from A to B would be measured by B to travel at $c - v$, not $c$ — a contradiction that becomes large when $\beta = v/c$ is not small.`,
          rubric: `Official marking scheme (2 points): identifies that the speed of light must be the same in all frames, whereas the Newtonian transformation gives a different speed (e.g. c − v measured by B for a signal from A).`,
        },
        {
          label: "(c)(i)",
          points: 5,
          leadIn: String.raw`Let us now account for relativistic effects. When switching between reference frames moving at a speed $v$ relative to each other, the relativistically correct transformations are

$$x' = \gamma(x - vt), \qquad t' = \gamma\left(t - \frac{v}{c^2}x\right)$$

where

$$\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}.$$

Here, $x$, $t$, $x'$, and $t'$ are defined as before. You may also find the relativistic momentum ($\vec{p} = \gamma m\vec{v}$) and total energy ($E = \gamma mc^2$) formulas helpful.

The spaceships have previously agreed to communicate with each other through light signals. In particular, red light ($\lambda = 700$ nm) indicates that there is imminent danger ahead. Spaceship B, equipped with better radar system, detects a cluster of asteroids along the path that spaceship A is taking and sends a laser signal in red light with a wavelength of $\lambda$ that lasts a time $\Delta t_0$. Both $\lambda$ and $\Delta t_0$ are as measured in B's reference frame, and let the overall emitted power in B's reference frame be $P$. Use $\beta = 0.4$ for all numeric answers.

You may refer to the following table of color versus approximate wavelength for parts (c)(v) and (c)(vi):

$$\begin{array}{c|c}
\lambda\ (\text{nm}) & \text{Color} \\ \hline
\le 390 & \text{ultraviolet} \\
390 - 420 & \text{purple} \\
420 - 480 & \text{blue} \\
480 - 560 & \text{green} \\
560 - 585 & \text{yellow} \\
585 - 610 & \text{orange} \\
610 - 720 & \text{red} \\
\ge 720 & \text{infrared}
\end{array}$$

**(c) (27 points)** By virtue of relativity, both the observed duration of the signal and the observed wavelength of the signal change. We will now examine this.`,
          prompt: String.raw`In terms of $\Delta t_0$ and $\beta = v/c$, how long does B spend emitting the signal, in A's reference frame? (Denote this as $\Delta t_1$.)`,
          solution: String.raw`Invert the Lorentz transformation:

$$x = \gamma(x' + vt'), \qquad t = \gamma\left(t' + \frac{v}{c^2}x'\right)$$

In $S'$ the signal starts at $(x', t') = (0, t_0)$ and ends at $(0, t_0 + \Delta t_0)$ — both at B's position $x' = 0$. So in $S$,

$$\Delta t_1 = \gamma(t_0 + \Delta t_0) - \gamma t_0 = \gamma\,\Delta t_0 = \frac{\Delta t_0}{\sqrt{1 - \beta^2}}$$

This is just the standard time-dilation formula.`,
          rubric: `Official marking scheme (5 points): correct result Δt₁ = γΔt₀ = Δt₀/√(1 − β²), e.g. by inverting the Lorentz transformation and using that both ends of the signal occur at x' = 0 (or by quoting time dilation with justification).`,
        },
        {
          label: "(c)(ii)",
          points: 7,
          prompt: String.raw`Due to the finite travel time of light, and given that B is moving away from A, A observes a different length $\Delta t_2$ for the signal. (This is analogous to the non-relativistic Doppler effect.) Calculate $\Delta t_2$ in terms of $\Delta t_0$ and $\beta$.`,
          solution: String.raw`Work in A's frame. B starts emitting at $(x, t) = (vt_1, t_1)$ and stops at $(v(t_1 + \Delta t_1),\ t_1 + \Delta t_1)$. Each piece of the signal then needs an extra time (distance)/$c$ to reach A, so the arrival times differ by

$$\Delta t_2 = \left[(t_1 + \Delta t_1) + \frac{v(t_1 + \Delta t_1)}{c}\right] - \left[t_1 + \frac{vt_1}{c}\right] = (1 + \beta)\,\Delta t_1$$

Using part (i):

$$\Delta t_2 = \frac{(1+\beta)\,\Delta t_0}{\sqrt{1-\beta^2}} = \Delta t_0\sqrt{\frac{1+\beta}{1-\beta}}$$

This step is not relativity at all — it is the finite travel time of light. Combined with time dilation, it gives exactly the relativistic Doppler factor, because the wave crests are stretched by the same mechanism.`,
          rubric: `Official marking scheme (7 points): Δt₂ = (1 + β)Δt₁ with justification from the light travel times: 5 points. Simplified to Δt₂ = Δt₀ √((1 + β)/(1 − β)): 2 points.`,
        },
        {
          label: "(c)(iii)",
          points: 3,
          prompt: String.raw`In terms of $\lambda$ and $\beta$, what wavelength $\lambda'$ does A observe for the signal?`,
          solution: String.raw`By the relativistic Doppler effect for a receding source, the observed frequency is $f' = f\sqrt{\dfrac{1-\beta}{1+\beta}}$. Since $\lambda = c/f$,

$$\lambda' = \lambda\sqrt{\frac{1+\beta}{1-\beta}}$$`,
          rubric: `Official marking scheme (3 points): λ' = λ √((1 + β)/(1 − β)) (redshift for a receding source).`,
        },
        {
          label: "(c)(iv)",
          points: 8,
          prompt: String.raw`Using your answers to (ii) and (iii), calculate the power $P'$ that A observes for the signal in terms of $P$ and $\beta$. (Assume the entire beam emitted by B hits A.)`,
          solution: String.raw`Two effects reduce the power. The same number of photons arrives spread over a longer time ($\Delta t_2$ instead of $\Delta t_0$), and each photon carries less energy because $E = hc/\lambda$ and the light is redshifted. So

$$\frac{P'}{P} = \frac{\Delta t_0}{\Delta t_2}\cdot\frac{\lambda}{\lambda'} = \left(\sqrt{\frac{1-\beta}{1+\beta}}\right)^2 = \frac{1-\beta}{1+\beta} \quad\Rightarrow\quad P' = P\,\frac{1-\beta}{1+\beta}$$`,
          rubric: `Official marking scheme (8 points):
- Accounting for the longer duration, P'/P ∝ Δt₀/Δt₂: 2.5 points.
- Accounting for the lower photon energy, P'/P ∝ λ/λ': 2.5 points.
- Combining them, P'/P = (Δt₀/Δt₂)·(λ/λ'): 1 point.
- Correct final answer P' = P(1 − β)/(1 + β): 2 points.`,
        },
        {
          label: "(c)(v)",
          points: 2,
          prompt: String.raw`Evaluate $\lambda'$ numerically. What part of the electromagnetic spectrum does this correspond to?`,
          solution: String.raw`$$\lambda' = (700\ \text{nm})\sqrt{\frac{1+0.4}{1-0.4}} \approx 1070\ \text{nm}$$

That is in the **infrared** — spaceship A does not see red light at all.`,
          rubric: `Official marking scheme (2 points): λ' ≈ 1070 nm: 1 point; infrared: 1 point.`,
        },
        {
          label: "(c)(vi)",
          points: 2,
          prompt: String.raw`In order for A to observe red light at a wavelength $\lambda$, numerically evaluate the wavelength $\lambda''$ that B would have to emit light at. What part of the electromagnetic spectrum does this correspond to?`,
          solution: String.raw`B must emit at a wavelength that is redshifted to 700 nm, so invert the Doppler formula:

$$\lambda'' = (700\ \text{nm})\sqrt{\frac{1-0.4}{1+0.4}} \approx 460\ \text{nm}$$

which is **blue** light.`,
          rubric: `Official marking scheme (2 points): λ″ ≈ 460 nm: 1 point; blue: 1 point.`,
        },
        {
          label: "(d)",
          points: 5,
          leadIn: String.raw`An asteroid (of mass $5m$) is traveling directly toward spaceship A (of mass $m$) at a speed of $0.5c$ in spaceship A's reference frame. From spaceship A's perspective, the asteroid and spaceship B are diametrically opposite each other, and both are moving in the $+x$ direction. Let $F_0$ be the reference frame in which spaceship A is initially stationary and at the origin. (Again, use $\beta = 0.4$ for all calculations, and from now on, express all answers in terms of $m$, $c$, and numeric prefactors. Onwards, $p$ and $E$ are not referring to four-vectors, rather, $p$ refers to the momentum along the $x$-axis, $E$ refers to the total energy (rest mass-energy + relativistic kinetic energy), and the "mass" refers to rest mass.)`,
          prompt: String.raw`In $F_0$, what are the combined initial momentum $p_i$ and initial total energy $E_i$ of the asteroid and spaceship A?`,
          solution: String.raw`Spaceship A is at rest, so only the asteroid has momentum. For $v = 0.5c$, $\gamma = 1/\sqrt{1 - 0.25} = 2/\sqrt{3}$:

$$p_i = \gamma(5m)(0.5c) = \frac{5}{\sqrt{3}}\,mc \approx 2.89\,mc$$

The energies are $E_A = mc^2$ and $E_{\text{asteroid}} = \gamma(5m)c^2 = \dfrac{10}{\sqrt{3}}\,mc^2$, so

$$E_i = \left(1 + \frac{10}{\sqrt{3}}\right)mc^2 \approx 6.77\,mc^2$$`,
          rubric: `Official marking scheme (5 points): p_i = (5/√3) mc ≈ 2.89 mc: 2 points; E_i = (1 + 10/√3) mc² ≈ 6.77 mc²: 3 points.`,
        },
        {
          label: "(e)",
          points: 11,
          leadIn: String.raw`Spaceship A and the asteroid undergo a completely inelastic collision, with no mass or energy escaping the system. According to relativity, both $p$ and $E$ are conserved.`,
          prompt: String.raw`Following the collision, what is the mass $M$ of the resulting object, and what is its velocity $v_0$ in frame $F_0$?`,
          solution: String.raw`Conservation of momentum and energy for the merged object (mass $M$, Lorentz factor $\gamma$, speed $v_0$):

$$M\gamma v_0 = \frac{5}{\sqrt{3}}\,mc, \qquad M\gamma c^2 = \left(1 + \frac{10}{\sqrt{3}}\right)mc^2$$

Dividing, $p/E = v_0/c^2$:

$$\frac{v_0}{c} = \frac{5/\sqrt{3}}{1 + 10/\sqrt{3}} = \frac{5}{\sqrt{3} + 10} \approx 0.426 \quad\Rightarrow\quad v_0 \approx 0.426c$$

Then

$$M = \frac{E\sqrt{1 - (v_0/c)^2}}{c^2} \approx 6.77m\sqrt{1 - 0.426^2} \approx 6.13m$$

(Equivalently $M^2c^4 = E^2 - p^2c^2$, giving $M = \sqrt{26 + 20/\sqrt{3}}\,m \approx 6.13m$ — more than the $6m$ that went in, because kinetic energy became rest mass.)`,
          rubric: `Official marking scheme (11 points):
- Using p/E = v₀/c²: 3 points.
- Correct v₀ ≈ 0.426c: 4 points.
- Using M = E√(1 − (v₀/c)²)/c² (or M²c⁴ = E² − p²c²): 3 points.
- M ≈ 6.13m: 1 point.
Both algebraic and numerical answers are acceptable.`,
        },
        {
          label: "(f)",
          points: 5,
          prompt: String.raw`Switching to the reference frame of spaceship B, what are the mass $M'$ and velocity $v_0'$ of the resulting object? Is it moving toward or away from spaceship B?

The relativistic velocity addition formula is given as follows:

$$v' = \frac{v + u}{1 + vu/c^2}$$

where
• $v'$ = velocity of the object in the stationary frame,
• $v$ = velocity of the object in the moving frame,
• $u$ = velocity of the moving frame with respect to the stationary frame.`,
          solution: String.raw`Rest mass is the same in every frame, so $M' = M \approx 6.13m$.

In B's frame, A's frame moves at $u = -0.4c$. With $v_0 = 0.4262c$:

$$v_0' = \frac{v_0 + u}{1 + v_0 u/c^2} = \frac{0.4262c - 0.4c}{1 - (0.4262)(0.4)} \approx 0.0316c$$

The merged object moves slowly in the $+x$ direction — **toward** spaceship B.`,
          rubric: `Official marking scheme (5 points): M' = M ≈ 6.13m: 2 points; v₀' ≈ 0.0316c: 2 points; moving toward spaceship B: 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [7, 8],
      solutionPages: [21, 22, 23, 24, 25],
    },

    // --- Problem 9: neutron star dynamics (85 points) -----------------------
    {
      number: "9",
      title: "Neutron Star Dynamics!",
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Gravity & Orbits", "Energy & Stellar Physics"],
      difficulty: "Advanced",
      points: 85,
      pointStep: 0.25,
      text: String.raw`Note that the provided **Answer Sheet** for this question is only for subtasks (c)(vi) and (d)(v). Do all other work on blank pages.

In this question, we do a detailed dive into several elements of neutron star dynamics and energy losses. While understanding the internal nature and makeup of a neutron star requires quantum chromodynamics and general relativity, other properties, such as rotation rate, are far more elementary to model. Over time, a neutron star's rotation rate slowly decreases due to factors such as energy loss and mass accretion. By measuring changes in a neutron star's rotation rate, astronomers can make inferences about the physics surrounding a neutron star and its environment. Neglect more complex behavior (such as QED/QCD/GR corrections), instead assuming Newtonian mechanics holds unless otherwise stated.

Let $\Omega(t)$ be the star's angular velocity around its axis as a function of time. In several scenarios, we can observe a proportionality relation of the form $\dot{\Omega} \propto -\Omega^n$, where $n$ is the neutron star's **braking index**. (Throughout this problem, dots denote time derivatives, i.e. $df/dt = \dot{f}$ and $d^2f/dt^2 = \ddot{f}$.)`,
      parts: [
        {
          label: "(a)(i)",
          points: 5,
          leadIn: String.raw`**(a) (10 points)** We will begin by examining the basic behavior of the time evolution of $\Omega$.`,
          prompt: String.raw`Express $n$ in terms of $\Omega$, $\dot{\Omega}$, and $\ddot{\Omega}$.`,
          solution: String.raw`Write $\dot{\Omega} = -k\Omega^n$ for some constant $k$. Differentiating,

$$\ddot{\Omega} = -nk\Omega^{n-1}\dot{\Omega} \quad\Rightarrow\quad \frac{\ddot{\Omega}}{\dot{\Omega}} = n\,\frac{\dot{\Omega}}{\Omega} \quad\Rightarrow\quad n = \frac{\Omega\ddot{\Omega}}{\dot{\Omega}^2}$$

(This is how braking indices are measured in practice.)`,
          rubric: `Official marking scheme (5 points): differentiating Ω̇ = −kΩⁿ to get Ω̈ = −nkΩⁿ⁻¹Ω̇: 2 points; final n = ΩΩ̈/Ω̇²: 3 points.`,
        },
        {
          label: "(a)(ii)",
          points: 3,
          prompt: String.raw`If $n > 1$, then we can deduce that $\Omega(t) \propto t^{-\alpha}$ for some $\alpha$. Compute $\alpha$ in terms of $n$.`,
          solution: String.raw`If $\Omega \propto t^{-\alpha}$ then $\dot{\Omega} \propto t^{-1-\alpha}$, while $\Omega^n \propto t^{-n\alpha}$. Matching powers:

$$1 + \alpha = n\alpha \quad\Rightarrow\quad \alpha = \frac{1}{n-1}$$`,
          rubric: `Official marking scheme (3 points), 1 point for each step: Ω̇ ∝ t^(−1−α); matching with Ωⁿ ∝ t^(−nα) to get 1 + α = nα; α = 1/(n − 1).`,
        },
        {
          label: "(a)(iii)",
          points: 2,
          prompt: String.raw`What type of curve does $\Omega(t)$ versus $t$ trace if $n = 1$?`,
          solution: String.raw`The formula for $\alpha$ diverges at $n = 1$. Instead, $\dot{\Omega} = -k\Omega$ gives $\Omega(t) = \Omega_0 e^{-kt}$: an **exponential decay** curve.`,
          rubric: `Official marking scheme (2 points): Ω decreases exponentially, Ω(t) = Ω₀ exp(−kt).`,
        },
        {
          label: "(b)(i)",
          points: 2,
          leadIn: String.raw`This relation allows astronomers to measure $n$ for a given star. We will now examine several mechanisms for rotational slowdown and the subsequent values for $n$, treat each of these mechanisms as **independent** of each other unless otherwise stated. (In other words, do not combine mechanisms until part (d)(v).)

**(b) (8 points)** First, we will look at a primitive model for mass accretion. Let $M$ be the neutron star's mass and $R$ be its radius. Assume the rate of mass accretion $\dot{M}$ is constant and that the infalling matter has no initial angular momentum relative to the rotation axis. Additionally, assume (slightly unrealistically) that the neutron star is a uniformly dense sphere of matter.`,
          prompt: String.raw`Write down the expression for the angular momentum of the neutron star $L$ in terms of $M$, $R$, and $\Omega$, up to a numerical constant. Use the fact that $L$ stays constant for problems (ii) and (iii) of this subpart.`,
          solution: String.raw`$L = I\Omega$ and, for a uniform sphere, $I = \tfrac{2}{5}MR^2 \propto MR^2$. So

$$L \propto \Omega M R^2$$`,
          rubric: `Official marking scheme (2 points): L = IΩ with I ∝ MR²: 1 point; L ∝ ΩMR²: 1 point.`,
        },
        {
          label: "(b)(ii)",
          points: 3,
          prompt: String.raw`Now, assume that as the star accretes mass, the density $\rho$ stays constant over time. Calculate the value of $n$.`,
          solution: String.raw`With $L$ constant, $\Omega \propto 1/(MR^2)$. Constant density means $M \propto \rho R^3$, so $R \propto M^{1/3}$ and

$$\Omega \propto M^{-5/3}$$

Since $\dot{M}$ is constant, shift the time origin so that $M \propto t$. Then $\Omega \propto t^{-5/3}$ and $\dot{\Omega} \propto t^{-8/3} \propto \Omega^{8/5}$, so

$$n = \frac{8}{5}$$

(Or use part (a)(i): for $\Omega \propto M^{-k}$ with $\dot{M}$ constant, $n = (k+1)/k$.)`,
          rubric: `Official marking scheme (3 points): Ω ∝ 1/(MR²): 0.5 point; M ∝ ρR³: 1 point; Ω ∝ M^(−5/3): 0.5 point; n = 8/5: 1 point.`,
        },
        {
          label: "(b)(iii)",
          points: 3,
          prompt: String.raw`Frontier QCD simulations currently appear to imply that, in contrast to the above, $R$ stays relatively constant as $M$ changes. Treating this new relationship as exact, calculate the new value of $n$.`,
          solution: String.raw`With $R$ fixed, $\Omega \propto M^{-1} \propto t^{-1}$, so $\dot{\Omega} \propto t^{-2} \propto \Omega^2$:

$$n = 2$$`,
          rubric: `Official marking scheme (3 points): Ω ∝ M⁻¹: 1 point; proceeding as before to n = 2: 2 points.`,
        },
        {
          label: "(c)(i)",
          points: 12,
          leadIn: String.raw`**(c) (40 points)** Next, we will examine gravitational wave emission from the neutron star. To leading order, gravitational wave emission is caused by oscillations in the mass quadrupole moment, which is the deviation from spherical symmetry when projected onto an axis, of the neutron star. The general formula for the traceless quadrupole moment terms is

$$Q_{ij} = \int \rho(\mathbf{r})\left(r_i r_j - \frac{1}{3}r^2\delta_{ij}\right)d^3\mathbf{r},$$

where $\mathbf{r}$ is the displacement from the center of the ellipsoid, $i, j \in \{x, y, z\}$ are coordinate axes, $r_i$ are projections of $\mathbf{r}$ onto these axes (so $r_x = x$), and $\delta_{ij} = 1$ for $i = j$ with $\delta_{ij} = 0$ otherwise. **Such integrals are over all space** unless otherwise specified. (Formally, the quadrupole moment is a 3 by 3 matrix $Q$ with 9 terms $Q_{ij}$, but you will not need any knowledge of linear algebra for this problem.)

We model the neutron star as a rotating ellipsoid (which deviates very slightly from a perfect sphere).

[[figure:rotating-ellipsoid]]

We establish a fixed $xyz$ coordinate system for reference, which the neutron star rotates at angular speed $\Omega$ relative to. The neutron star has body symmetry axes $x'$, $y'$, and $z' = z$, as per the diagram. By the definition of body symmetry axes,

$$\int \rho(\mathbf{r}')(r_i' r_j')\,d^3\mathbf{r}' = I_i\delta_{ij}.$$

In other words, the moments of inertia around the body axes $x'$, $y'$, and $z'$ are $I_x$, $I_y$, and $I_z$, respectively, and all "cross" terms between different axes vanish. (Let $I_x > I_y$.) Some elementary trigonometry yields

$$\begin{cases} x = x'\cos(\Omega t) - y'\sin(\Omega t), \\ y = x'\sin(\Omega t) + y'\cos(\Omega t), \\ z = z'. \end{cases}$$

We will now compute the time evolution of $Q_{ij}$. Assume $\Omega$ is constant until part (v).`,
          prompt: String.raw`Using the above coordinate transformations and inertia integrals, calculate all terms $Q_{ij}$, expressing your answer in terms of the body axis moments of inertia and trigonometric functions of $\Omega t$. For example,

$$\begin{aligned} Q_{xz} &= \int \rho(\mathbf{r})\left(xz - \tfrac{1}{3}r^2\delta_{xz}\right)d^3\mathbf{r} = \int \rho(\mathbf{r}')(xz)\,d^3\mathbf{r}' = \int \rho(\mathbf{r}')\left(x'\cos(\Omega t) - y'\sin(\Omega t)\right)z'\,d^3\mathbf{r}', \\ &= \cos(\Omega t)\int \rho(\mathbf{r}')x'z'\,d^3\mathbf{r}' - \sin(\Omega t)\int \rho(\mathbf{r}')y'z'\,d^3\mathbf{r}' = 0, \end{aligned}$$

since both integrals vanish as stated.`,
          solution: String.raw`$Q_{ij} = Q_{ji}$ because the formula is symmetric. As shown, $Q_{xz} = Q_{zx} = 0$, and the same argument gives $Q_{yz} = Q_{zy} = 0$. That leaves $Q_{xx}$, $Q_{yy}$, $Q_{zz}$ and $Q_{xy} = Q_{yx}$.

Since we integrate over all space we may switch $d^3\mathbf{r}$ for $d^3\mathbf{r}'$, and $r^2 = x^2 + y^2 + z^2 = (x')^2 + (y')^2 + (z')^2$. Then

$$Q_{xx} = \int \rho\left[(x'\cos\Omega t - y'\sin\Omega t)^2 - \tfrac{1}{3}\left((x')^2 + (y')^2 + (z')^2\right)\right]d^3\mathbf{r}'$$

$$= I_x\left(\cos^2\Omega t - \tfrac{1}{3}\right) + I_y\left(\sin^2\Omega t - \tfrac{1}{3}\right) + 0\cdot(-2\sin\Omega t\cos\Omega t) + I_z\left(-\tfrac{1}{3}\right)$$

$$Q_{xx} = I_x\cos^2(\Omega t) + I_y\sin^2(\Omega t) - \frac{I_x + I_y + I_z}{3}$$

Swapping the roles of $x'$ and $y'$:

$$Q_{yy} = I_y\cos^2(\Omega t) + I_x\sin^2(\Omega t) - \frac{I_x + I_y + I_z}{3}$$

$$Q_{zz} = \int \rho\left(\tfrac{2}{3}(z')^2 - \tfrac{1}{3}(x')^2 - \tfrac{1}{3}(y')^2\right)d^3\mathbf{r}' = \frac{2I_z - I_x - I_y}{3}$$

and

$$Q_{xy} = \int \rho\,(x'\cos\Omega t - y'\sin\Omega t)(x'\sin\Omega t + y'\cos\Omega t)\,d^3\mathbf{r}' = Q_{yx} = (I_x - I_y)\sin(\Omega t)\cos(\Omega t)$$

(the $x'y'$ cross term vanishes).`,
          rubric: `Official marking scheme (12 points):
- Switching d³r and d³r' (integration over all space): 1 point.
- Using r² = x² + y² + z² = x'² + y'² + z'²: 1 point.
- Interpreting the δ_ij terms and substituting the x'y'z' system accordingly: 4 points.
- Each Q_ij = 0 term (Q_xz, Q_zx, Q_yz, Q_zy): 0.25 point each.
- Each distinct nonzero Q_ij (Q_xx, Q_yy, Q_zz, Q_xy = Q_yx): 1 point each.
- Getting everything correct: 1 point.
Correct results: Q_xx = I_x cos²Ωt + I_y sin²Ωt − (I_x+I_y+I_z)/3; Q_yy = I_y cos²Ωt + I_x sin²Ωt − (I_x+I_y+I_z)/3; Q_zz = (2I_z − I_x − I_y)/3; Q_xy = Q_yx = (I_x − I_y) sinΩt cosΩt.`,
        },
        {
          label: "(c)(ii)",
          points: 7,
          prompt: String.raw`For the first step of our calculations, we will need the second time derivative $\dfrac{d^2Q_{ij}}{dt^2}$ of the quadrupole moment. Calculate these terms and indicate which ones are nonzero. (You may find one or more of the identities $\cos 2\alpha = \cos^2\alpha - \sin^2\alpha$, $\sin 2\alpha = 2\sin\alpha\cos\alpha$, and $\cos^2\alpha + \sin^2\alpha = 1$ helpful.)`,
          solution: String.raw`$Q_{xz}, Q_{yz}, Q_{zx}, Q_{zy}$ and $Q_{zz}$ are constant, so their second derivatives are zero. Rewrite

$$Q_{xx} = (I_x - I_y)\frac{\cos^2\Omega t - \sin^2\Omega t}{2} + (I_x + I_y)\frac{\cos^2\Omega t + \sin^2\Omega t}{2} - \frac{I_x + I_y + I_z}{3} = \frac{I_x - I_y}{2}\cos(2\Omega t) + \text{const}$$

Since $\dfrac{d^2}{dt^2}\cos(2\Omega t) = -4\Omega^2\cos(2\Omega t)$:

$$\ddot{Q}_{xx} = -2\Omega^2(I_x - I_y)\cos(2\Omega t), \qquad \ddot{Q}_{yy} = 2\Omega^2(I_x - I_y)\cos(2\Omega t)$$

With $Q_{xy} = \tfrac{1}{2}(I_x - I_y)\sin(2\Omega t)$:

$$\ddot{Q}_{xy} = \ddot{Q}_{yx} = -2\Omega^2(I_x - I_y)\sin(2\Omega t)$$

These are the only nonzero second derivatives.`,
          rubric: `Official marking scheme (7 points):
- Q_xz, Q_yz, Q_zx, Q_zy constant (zero second derivative): 1 point.
- Q_zz constant: 0.5 point.
- Each correct expression: Q̈_xx = −2Ω²(I_x − I_y)cos 2Ωt; Q̈_yy = 2Ω²(I_x − I_y)cos 2Ωt; Q̈_xy = Q̈_yx = −2Ω²(I_x − I_y)sin 2Ωt: 1.5 points each.
- Getting everything correct: 1 point.`,
        },
        {
          label: "(c)(iii)",
          points: 3,
          leadIn: String.raw`Detecting gravitational waves involves measuring the strain $h$, or the fractional change in length $\Delta L/L$ of spacetime caused by the gravitational wave. For the purposes of this problem, we ignore nuances such as viewing angle and GW polarization regimes. As such, we approximate the behavior as

$$h_{ij}(t) = \frac{2G}{c^4 d}\frac{d^2Q_{ij}}{dt^2},$$

where $d$ is the distance from the observer to the neutron star. (Note that there is a time offset due to the nonzero time it takes gravitational waves to reach the observer, but we ignore this, as it is not highly relevant in understanding the qualitative behavior of the system.)`,
          prompt: String.raw`For convenience, we only look at one term of $h_{ij}$ to capture the underlying behavior. Calculate the amplitude $h_0$ and angular frequency $\Omega_{GW}$ of the oscillations in $h_{xx}$. Express your answers in terms of $I_z$, $\epsilon = \dfrac{I_x - I_y}{I_z}$, $\Omega$, and fundamental constants.`,
          solution: String.raw`Substituting $\ddot{Q}_{xx}$ from part (ii):

$$h_{xx}(t) = -\frac{4\Omega^2 G}{c^4 d}(I_x - I_y)\cos(2\Omega t)$$

so the amplitude and angular frequency are

$$h_0 = \frac{4\Omega^2 G}{c^4 d}(I_x - I_y) = \frac{4G\Omega^2}{c^4 d}I_z\epsilon, \qquad \Omega_{GW} = 2\Omega$$

Note: the official solution writes $\sin(2\Omega t)$ here; from part (ii) it should be $\cos(2\Omega t)$. The amplitude and frequency are unaffected.`,
          rubric: `Official marking scheme (3 points): substituting Q̈_xx into h_ij: 1 point; amplitude h₀ = 4GΩ²I_zε/(c⁴d): 1 point; angular frequency Ω_GW = 2Ω: 1 point.`,
        },
        {
          label: "(c)(iv)",
          points: 6,
          prompt: String.raw`According to general relativity, the radiated power is given by

$$P = \frac{G}{5c^5}\sum_{ij}\left(\frac{d^3Q_{ij}}{dt^3}\right)^2,$$

where the sum runs over all 9 pairs of indices $i, j \in \{x, y, z\}$. Calculate $P$ in terms of $I_z$, $\epsilon$, $\Omega$, and fundamental constants.`,
          solution: String.raw`From part (ii), the only terms with a nonzero third derivative are

$$\dddot{Q}_{xx} = -\dddot{Q}_{yy} = 4\Omega^3(I_x - I_y)\sin(2\Omega t), \qquad \dddot{Q}_{xy} = \dddot{Q}_{yx} = -4\Omega^3(I_x - I_y)\cos(2\Omega t)$$

Summing the squares of all four:

$$P = \frac{G}{5c^5}\left[2\left(4\Omega^3(I_x - I_y)\sin 2\Omega t\right)^2 + 2\left(4\Omega^3(I_x - I_y)\cos 2\Omega t\right)^2\right] = \frac{32G}{5c^5}\Omega^6(I_x - I_y)^2$$

$$P = \frac{32G}{5c^5}\Omega^6 I_z^2\epsilon^2$$

which, reassuringly, does not depend on time.`,
          rubric: `Official marking scheme (6 points; the printed items total 5.5, so Astro Coach splits the 0.5 for the two Q_xy/Q_yx derivatives evenly):
- Correctly ignoring all terms with zero third derivative: 0.5 point.
- Third derivatives Q⃛_xx and Q⃛_yy = ±4Ω³(I_x − I_y) sin 2Ωt: 0.5 point each.
- Third derivatives Q⃛_xy and Q⃛_yx = −4Ω³(I_x − I_y) cos 2Ωt: 0.5 point each.
- Any equivalent expression for P: 1.5 points.
- A time-independent P = 32GΩ⁶I_z²ε²/(5c⁵): 1.5 points extra.
- Squaring and summing all four terms correctly (factor 2 on each pair): 0.5 point.`,
        },
        {
          label: "(c)(v)",
          points: 6,
          prompt: String.raw`The power for the gravitational waves comes purely from the rotational kinetic energy $E = \frac{1}{2}I_z\Omega^2$ of the neutron star. Assuming its mass, radius, and inertia moments stay constant, calculate the value of $\dot{\Omega}$ in terms of $\Omega$, $I_z$, $\epsilon$, and fundamental constants. From this, extract the value of $n$.`,
          solution: String.raw`Energy conservation: the radiated power drains the rotational energy, $P = -\dot{E} = -I_z\Omega\dot{\Omega}$:

$$-I_z\Omega\dot{\Omega} = \frac{32G}{5c^5}\Omega^6 I_z^2\epsilon^2 \quad\Rightarrow\quad \dot{\Omega} = -\frac{32G}{5c^5}\Omega^5 I_z\epsilon^2$$

So $\dot{\Omega} \propto -\Omega^5$ and $n = 5$.`,
          rubric: `Official marking scheme (6 points): calculating Ė = I_zΩΩ̇: 2 points; substituting correctly into P = −Ė: 1 point; Ω̇ = −(32G/5c⁵)Ω⁵I_zε²: 1.5 points; n = 5: 1.5 points.`,
        },
        {
          label: "(c)(vi)",
          points: 6,
          format: "DRAWING",
          prompt: String.raw`As the neutron star slowly loses rotational kinetic energy while keeping its inertia moments constant, oscillations of the observed gravitational wave strain $h$ change in both period and amplitude. On your **Answer Sheet**, **sketch** a graph for $h_{xx}(t)$ versus time $t$ that reflects these changes. (Exaggerate your graph so that significant visible changes in both period and amplitude occur over the course of several periods. Your graph need not be to scale.)`,
          solution: String.raw`From part (iii), $h_0 \propto \Omega^2$ and $\Omega_{GW} \propto \Omega$. As the star loses rotational energy $E = \tfrac{1}{2}I_z\Omega^2$ with $I_z$ constant, $\Omega$ decreases. So both the **amplitude decreases** and the **frequency decreases** (the period gets longer).

The sketch is an oscillating, sinusoid-like curve whose peaks get lower and whose peaks get farther apart as time goes on (see the official graph with the figures at the end of the solution).`,
          rubric: `Official marking scheme (6 points):
- Amplitude decreases over time (h₀ ∝ Ω²): 1.5 points.
- Angular frequency decreases / period increases over time (Ω_GW ∝ Ω): 1.5 points.
- A sinusoid-style oscillating shape: 2 points.
- Everything correct: 1 point.`,
        },
        {
          label: "(d)(i)",
          points: 4,
          leadIn: String.raw`**(d) (27 points)** Finally, we will consider magnetic dipole radiation, which is electromagnetic radiation induced by the rotation of the star and subsequent movement of its magnetic field. This is the main source of energy loss in pulsar systems. Let the magnetic dipole moment be $\boldsymbol{\mu}$ with an inclination $\chi$ to the rotation axis (here, the $z$-axis). Take $\chi \in (0, \frac{\pi}{2})$.

[[figure:magnetic-dipole]]

Some simple geometry gives

$$\boldsymbol{\mu}(t) = \mu\left(\sin\chi\cos(\Omega t),\ \sin\chi\sin(\Omega t),\ \cos\chi\right)$$

in component form.`,
          prompt: String.raw`Calculate the second derivative $\ddot{\boldsymbol{\mu}}(t)$ in component form. Using this, evaluate its magnitude $|\ddot{\boldsymbol{\mu}}|$.`,
          solution: String.raw`Differentiating twice (the $z$-component is constant):

$$\ddot{\boldsymbol{\mu}}(t) = \mu\left(-\Omega^2\sin\chi\cos(\Omega t),\ -\Omega^2\sin\chi\sin(\Omega t),\ 0\right)$$

$$|\ddot{\boldsymbol{\mu}}| = \sqrt{(\mu\Omega^2\sin\chi\cos\Omega t)^2 + (\mu\Omega^2\sin\chi\sin\Omega t)^2} = \mu\Omega^2\sin\chi$$`,
          rubric: `Official marking scheme (4 points): 1 point per correct component (x, y, and z = 0); 1 point for the magnitude μΩ² sin χ.`,
        },
        {
          label: "(d)(ii)",
          points: 5,
          prompt: String.raw`According to the Larmor formula, the power radiated by the magnetic dipole is given by

$$P = \frac{\mu_0}{6\pi c^3}|\ddot{\boldsymbol{\mu}}|^2,$$

where $\mu_0$ is the permeability of free space. As in the previous section, assume that this power comes from a change in the rotational kinetic energy $E = \frac{1}{2}I_z\Omega^2$, where we again take $I_z$ as the (constant) moment of inertia around the rotation axis. Calculate $\dot{\Omega}$ as a function of $\Omega$ and any other relevant variables. Using this, calculate the value of $n$. (Refer to this value as $n_0$.)`,
          solution: String.raw`Setting $P = -\dot{E} = -I_z\Omega\dot{\Omega}$:

$$-I_z\Omega\dot{\Omega} = \frac{\mu_0}{6\pi c^3}\left(\mu\Omega^2\sin\chi\right)^2 \quad\Rightarrow\quad \dot{\Omega} = -\frac{\mu_0}{6\pi c^3 I_z}\mu^2\Omega^3\sin^2\chi$$

So $\dot{\Omega} \propto -\Omega^3$ and $n_0 = 3$.`,
          rubric: `Official marking scheme (5 points): substituting into P = −Ė to get Ω̇ = −μ₀μ²Ω³ sin²χ/(6πc³I_z): 4 points; n₀ = 3: 1 point.`,
        },
        {
          label: "(d)(iii)",
          points: 9,
          prompt: String.raw`Nevertheless, neutron stars are sometimes observed to have $n$-values that significantly differ from $n_0$. We will now model this. Specifically, take your same $P = -\dot{E}$ expression as before, but now assume that $\mu$ and $\chi$ are no longer fixed, instead potentially having small nonzero rates of change. Using your result from part (a)(i), calculate a new value for $n$. Express your answer in terms of $\Omega$, $\dot{\Omega}$, $\mu$, $\dot{\mu}$, $\chi$, $\dot{\chi}$, and fundamental constants. Again, assume that the mass, radius, and composition of the neutron star stay constant.`,
          solution: String.raw`We want $n = \Omega\ddot{\Omega}/\dot{\Omega}^2$, so differentiate $\dot{\Omega}$:

$$\ddot{\Omega} = -\frac{\mu_0}{6\pi c^3 I_z}\frac{d}{dt}\left[\mu^2\Omega^3\sin^2\chi\right], \qquad \frac{d}{dt}\left[\mu^2\Omega^3\sin^2\chi\right] = \mu^2\Omega^3\sin^2\chi\left(\frac{2\dot{\mu}}{\mu} + \frac{3\dot{\Omega}}{\Omega} + \frac{2\dot{\chi}\cos\chi}{\sin\chi}\right)$$

so

$$\ddot{\Omega} = \dot{\Omega}\left(\frac{2\dot{\mu}}{\mu} + \frac{3\dot{\Omega}}{\Omega} + 2\dot{\chi}\cot\chi\right)$$

Then

$$n = \frac{\Omega\ddot{\Omega}}{\dot{\Omega}^2} = \frac{\Omega}{\dot{\Omega}}\left(\frac{2\dot{\mu}}{\mu} + \frac{3\dot{\Omega}}{\Omega} + 2\dot{\chi}\cot\chi\right) = 3 + \frac{2\Omega}{\dot{\Omega}}\left(\frac{\dot{\mu}}{\mu} + \dot{\chi}\cot\chi\right)$$

(The problem asks for the answer in terms of $\dot{\Omega}$, so we do not substitute further. Setting $\dot{\mu} = \dot{\chi} = 0$ recovers $n_0 = 3$ — a good check.)`,
          rubric: `Official marking scheme (9 points): starting to compute Ω̈ by differentiating the expression for Ω̇: 3 points; correct Ω̈ = Ω̇(2μ̇/μ + 3Ω̇/Ω + 2χ̇ cot χ) (or equivalent): 3 points; final n = 3 + (2Ω/Ω̇)(μ̇/μ + χ̇ cot χ): 3 points.`,
        },
        {
          label: "(d)(iv)",
          points: 2,
          prompt: String.raw`Assume that the neutron star's magnetic moment decays exponentially according to

$$\mu(t) \propto e^{-t/\tau_B}.$$

Rewrite your expression for $n$ from part (iii) in terms of $\Omega$, $\dot{\Omega}$, $\tau_B$, $\chi$, $\dot{\chi}$, and fundamental constants.`,
          solution: String.raw`Exponential decay gives $\dfrac{\dot{\mu}}{\mu} = -\dfrac{1}{\tau_B}$, so

$$n = 3 + \frac{2\Omega}{\dot{\Omega}}\left(\dot{\chi}\cot\chi - \frac{1}{\tau_B}\right)$$`,
          rubric: `Official marking scheme (2 points): μ̇/μ = −1/τ_B: 1 point; n = 3 + (2Ω/Ω̇)(χ̇ cot χ − 1/τ_B): 1 point.`,
        },
        {
          label: "(d)(v)",
          points: 7,
          format: "DRAWING",
          prompt: String.raw`The Crab Pulsar is observed to have a long-term average braking index of $n_{\text{obs}} = 2.51 \pm 0.01$. For each of the following, mark on your **Answer Sheet** whether it would cause $n$ to deviate **toward** $n_{\text{obs}}$, **away from** $n_{\text{obs}}$, or have **no change**, assuming a default value of $n = n_0$ (remember $\dot{\Omega} < 0$ and $\chi \in (0, \frac{\pi}{2})$):

(A) A gradual increase in the inclination $\chi$,
(B) A gradual decrease in the internal magnetic dipole moment $\mu$,
(C) Gradual accretion of a nearby star (use your result from part (b)(iii) of the problem).
(D) Significant gravitational wave emission (use your result from part (c) of the problem).`,
          solution: String.raw`We have $n_{\text{obs}} < n_0 = 3$, so "toward $n_{\text{obs}}$" means lowering $n$.

For (A) and (B), lowering $n$ requires $\dfrac{2\Omega}{\dot{\Omega}}\left(\dfrac{\dot{\mu}}{\mu} + \dot{\chi}\cot\chi\right) < 0$. Since $\dot{\Omega} < 0$, this means $\dfrac{\dot{\mu}}{\mu} + \dot{\chi}\cot\chi > 0$.

- **(A) Toward.** $\dot{\chi} > 0$ and $\cot\chi > 0$, so the bracket is positive and $n$ drops.
- **(B) Away.** $\dot{\mu} < 0$ makes the bracket negative, so $n$ rises above 3.
- **(C) Toward.** Pure accretion gives $n = 2$, on the same side of $n_0$ as $n_{\text{obs}}$; combined with the other effects it pulls $n$ part of the way toward 2.
- **(D) Away.** Pure gravitational-wave emission gives $n = 5$, on the opposite side of $n_0$ from $n_{\text{obs}}$.

$$\begin{array}{c|cccc} & \text{A} & \text{B} & \text{C} & \text{D} \\ \hline \text{Toward } n_{\text{obs}} & \times & & \times & \\ \text{Away from } n_{\text{obs}} & & \times & & \times \\ \text{No effect} & & & & \end{array}$$`,
          rubric: `Official marking scheme (7 points): 1.5 points per correct column, plus 1 point for getting everything correct. Correct answers: (A) toward n_obs; (B) away from n_obs; (C) toward n_obs; (D) away from n_obs. The student may tick the answer-sheet table or type the four answers.`,
        },
      ],
      figures: [
        {
          key: "rotating-ellipsoid",
          file: "q9-rotating-ellipsoid.png",
          caption: "The rotating ellipsoid with fixed axes x, y, z and body axes x′, y′, z′ = z",
          part: "(c)(i)",
          sourcePage: 10,
        },
        {
          key: "magnetic-dipole",
          file: "q9-magnetic-dipole.png",
          caption: "Magnetic dipole μ inclined at angle χ to the rotation axis",
          part: "(d)(i)",
          sourcePage: 11,
        },
        {
          key: "answer-sheet",
          file: "q9-answer-sheet.png",
          kind: "ANSWER_SHEET",
          caption: "Question 9 answer sheet, parts (c)(vi) and (d)(v)",
        },
        {
          key: "solution-gw-signal",
          file: "q9-solution-gw-signal.png",
          kind: "SOLUTION",
          caption: "Official sketch for (c)(vi): h_xx(t) with decreasing amplitude and increasing period",
          sourcePage: 32,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [9, 10, 11, 12],
      solutionPages: [26, 27, 28, 29, 30, 31, 32, 33],
    },
  ],
};
