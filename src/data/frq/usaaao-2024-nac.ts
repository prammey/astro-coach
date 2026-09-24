// USAAAO National Astronomy Competition 2024: 8 free-response questions,
// 225 points in three sections (Short, Medium, Long). The paper has no
// multiple-choice section, so every question is imported.
//
// Numbering restarts in each section, so question numbers are prefixed:
// S1–S3 (Short Questions), M1–M3 (Medium Questions), L1–L2 (Long Questions).
//
// Solutions are the official ones, lightly cleaned up for students
// (ADAPTED). The official marking points are transcribed as the rubric for
// Medium 1 and Medium 3; the other questions have no official point
// breakdown, so they carry an Astro Coach marking guide instead.
//
// Corrections to the official solutions (noted in the solution text):
//   - Long 1(d): the official intermediate value 3.33e-7 rad/s is a slip;
//     θ/45 s = 1.06e-7 rad/s. Its final 1.31 arcsec/min is correct.
//   - Long 2(a) and (c): typos "M = π/2" (should be π) and "sin M" (should
//     be sin L) are fixed.
//   - Short 3: the paper says 12 stars, but a dodecahedron has 20 vertices;
//     the official solution treats the stars as the vertices, and so do we.
//
// Wording differences between the exam and the solutions PDF: the
// solutions add "you can assume the apparent magnitude of the Sun is
// -26.74" to Medium 3 (included here, since students do not have the
// constants sheet), and reword Long 1(f)(iii); the exam's wording is kept.
import type { FrqSeedExam } from "./types";

const YEAR = 2024;
const SHORT = "Short Questions";
const MEDIUM = "Medium Questions";
const LONG = "Long Questions";

export const usaaao2024Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: YEAR,
  examName: "National Astronomy Competition",
  slug: "usaaao-2024-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2024/05/second_exam_2024.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2024/05/second_exam_2024-1.pdf",
  attributionText: `Source: USA Astronomy and Astrophysics Organization (USAAAO), National Astronomy Competition ${YEAR}. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.`,
  questions: [
    // --- Short 1: The Boomerang Nebula (15 points) --------------------------
    {
      number: "S1",
      title: "The Boomerang Nebula",
      section: SHORT,
      topic: "Energy & Stellar Physics",
      topics: ["Energy & Stellar Physics", "Stars & Black Holes"],
      difficulty: "Intermediate",
      points: 15,
      text: String.raw`The Boomerang Nebula is the coldest known place in the universe (outside of labs on Earth), with a temperature of just $1\ \text{K}$. The nebula is a rapidly expanding cloud of gas ejected from a red giant star, with a radius of 1 light year and an unusually high expansion velocity of $165\ \text{km/s}$. Let's make a highly simplified model to understand why it's so cold.`,
      parts: [
        {
          label: "(a)",
          points: 2,
          prompt: String.raw`Observations show that the nebula is gradually warming up near the very edge where it's in thermal contact with the surrounding interstellar medium, but it has not yet had time to reach thermal equilibrium with its environment by exchanging heat. (This is due to the rapid expansion — most such nebulae would take much longer to expand to this size.) However, it has done work on its environment, by pushing the interstellar medium out of the way as it expands. Let's approximate that no heat has been exchanged at all. In thermodynamics, what is the name for this kind of process?`,
          solution: String.raw`A process in which a system does work on its environment but does not exchange heat with it is an **adiabatic process**.`,
          rubric: String.raw`Astro Coach marking guide (2 points): "adiabatic" (adiabatic expansion): 2 points. No credit for isothermal, isobaric or isochoric.`,
        },
        {
          label: "(b)",
          points: 6,
          prompt: String.raw`Assume that the nebula is an ideal gas, expanding as a spherical shell which maintains a constant thickness. In this kind of process, an ideal gas follows a relation $PV^\gamma = \text{constant}$, where $\gamma = \frac{5}{3}$.

Based on this relation, how does the temperature $T$ of the gas scale with the radius $r$ of the gas as it expands?`,
          solution: String.raw`The ideal gas law is $PV = Nk_BT$. Since $N$ and $k_B$ are constant, $PV \propto T$. Using $PV^\gamma = C$ to eliminate $P$ (so $P = C V^{-\gamma}$):

$$T \propto PV = C\,V^{1-\gamma} \propto V^{1-\gamma}$$

For a spherical shell of constant thickness, the volume scales like the surface area, $V \propto r^2$ (not $r^3$ as for a solid sphere). So

$$T \propto r^{2(1-\gamma)} = r^{-4/3}$$`,
          rubric: String.raw`Astro Coach marking guide (6 points):
- Uses the ideal gas law to write $T \propto PV$ and combines it with $PV^\gamma = $ const to get $T \propto V^{1-\gamma}$: 2 points.
- Recognises that a shell of constant thickness has $V \propto r^2$: 2 points.
- Final answer $T \propto r^{-4/3}$: 2 points. (Using $V \propto r^3$ to get $T \propto r^{-2}$ loses these last 2 points and the shell-volume 2 points.)`,
        },
        {
          label: "(c)",
          points: 7,
          prompt: String.raw`At very high temperature (right after ejection from the star) hydrogen is a plasma and so cannot be modeled as an ideal gas. For simplicity, take the initial temperature and radius of the cloud (once it has cooled down enough to no longer be a plasma) to be $10\,000\ \text{K}$ and $50\ \text{AU}$. What should the temperature be now, after the rapid expansion?`,
          solution: String.raw`Plug the numbers into the scaling from (b), with $1\ \text{ly} \approx 63\,240\ \text{AU}$:

$$T = T_0\left(\frac{r}{r_0}\right)^{-4/3} = (10\,000\ \text{K})\left(\frac{1\ \text{ly}}{50\ \text{AU}}\right)^{-4/3} = (10\,000\ \text{K})\,(1265)^{-4/3} \approx 0.7\ \text{K}$$

This is indeed about the observed $1\ \text{K}$ — adiabatic expansion alone explains why the nebula is colder than the cosmic microwave background.`,
          rubric: String.raw`Astro Coach marking guide (7 points):
- Writes $T = T_0 (r/r_0)^{-4/3}$ (or uses their own scaling from (b) consistently): 2 points.
- Converts 1 light year and 50 AU to the same units (ratio about 1265): 2 points.
- Final temperature about 0.7 K (0.6–0.8 K): 3 points. Full follow-through credit for a correct calculation from a wrong exponent in (b).`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- Short 2: Gegenschein (10 points) -----------------------------------
    {
      number: "S2",
      title: "Gegenschein",
      section: SHORT,
      topic: "Solar System",
      topics: ["Solar System", "Light & Spectra"],
      difficulty: "Intermediate",
      points: 10,
      text: String.raw`David the astronomy enthusiast loves looking at stars! Specifically, he particularly enjoys looking at stars on the ecliptic. One day, he is out stargazing at midnight (local solar time) and looks at the antisolar point (the point on the celestial sphere exactly opposite to the Sun). He notices a faint glow of magnitude $12\ \text{mag/arcsec}^2$, and after some research he concludes that this is caused by a phenomenon known as gegenschein, where Solar System dust is lit up by the Sun and reflects some light back towards Earth. These particles are in an orbit of $2.06\ \text{AU}$ around the Sun. Assuming the radii of these particles are around $1\ \text{cm}$ and their albedo is $0.14$, estimate the density of these particles. Express your answer in particles per square arcsecond.`,
      solution: String.raw`**Step 1: total power from one square arcsecond.** Treat one square arcsecond of the glow as a source of apparent magnitude $m = 12$ and find the luminosity it would need at its distance. Using

$$M - M_\odot = -2.5\log_{10}\!\left(\frac{L}{L_\odot}\right) \qquad\text{and}\qquad m - M = 5\log_{10}\!\left(\frac{r}{10\ \text{pc}}\right)$$

we get

$$2.5\log_{10}\!\left(\frac{L}{L_\odot}\right) = M_\odot + 5\log_{10}\!\left(\frac{r}{10\ \text{pc}}\right) - m \;\Longrightarrow\; L = L_\odot\left(\frac{r}{10\ \text{pc}}\right)^2 10^{(M_\odot - m)/2.5} \approx 1.37\times10^{11}\ \text{W}$$

where $r = 1.06\ \text{AU}$, because the particles are directly opposite the Sun ($2.06 - 1 = 1.06$ AU from Earth).

**Step 2: power reflected by one particle.** Take the solar flux at $R = 2.06\ \text{AU}$, times the particle's cross-section and its albedo:

$$L_p = \frac{L_\odot}{4\pi R^2}\cdot a\,\pi r_p^2 \approx 0.0141\ \text{W}$$

**Step 3: divide.**

$$N = \frac{1.37\times10^{11}\ \text{W}}{0.0141\ \text{W}} \approx 9.7\times10^{12}\ \text{particles/arcsec}^2$$

Note: one reasonable refinement is to divide this by two, because the light is not scattered isotropically — it is mostly scattered back towards the Earth. This and other reasonable assumptions are accepted for full credit.`,
      rubric: String.raw`Astro Coach marking guide (10 points), based on the official solution:
- Converts the surface brightness (12 mag for one square arcsecond) into a power or flux using the magnitude equations: 3 points.
- Uses the correct Earth–particle distance of 1.06 AU (the particles are at opposition): 1 point.
- Solar flux at 2.06 AU times the cross-section $\pi r^2$ and albedo 0.14 for the power reflected per particle (about 0.014 W): 3 points.
- Final answer about $10^{13}$ particles per square arcsecond (accept roughly $4\times10^{12}$ to $1.2\times10^{13}$, including the factor of two for non-isotropic scattering): 3 points.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [3],
    },

    // --- Short 3: Dodecahedron of stars (15 points) -------------------------
    {
      number: "S3",
      title: "A Dodecahedron of Stars",
      section: SHORT,
      topic: "Math, Data & Coordinates",
      difficulty: "Advanced",
      points: 15,
      text: String.raw`Astronomer Evan noticed that there is a group of stars $\{X_1, X_2, \ldots, X_{12}\}$ which forms a perfect dodecahedron around the Earth.

[[figure:dodecahedron]]

Evan went outside to observe some of these stars. At a particular moment in time, he computed the angle

$$\delta_Z = \max(ZX_{a_1}, ZX_{a_2}, ZX_{a_3}, ZX_{a_4}, ZX_{a_5}),$$

where $Z$ is his zenith and $\{a_1, a_2, \ldots, a_5\} \subset \{1, \ldots, 12\}$ are the indices of the five closest stars in angular distance to $Z$. Compute the minimum possible value of $\delta_Z$ that he could have observed.

Note that $\delta_Z$ is not a declination.`,
      solution: String.raw`**The answer is $37.38^\circ$.**

(The stars sit at the vertices of the dodecahedron, as in the official solution. Strictly, a dodecahedron has 20 vertices, not 12, but that does not change the answer.)

$\delta_Z$ is smallest when $Z$ points at the centre of one of the pentagonal faces, call it $ABCDE$. Then $\delta_Z = ZA = ZB = ZC = ZD = ZE =: X$. If $Z$ is not at the centre of a face, the fifth-closest star is necessarily farther than $X$.

[[figure:sol-dodecahedron-face]]

To compute $X$, consider the spherical triangle $\triangle ZAE$. Looking from above $Z$, $\angle AZE = 72^\circ$ and $ZA = ZE = X$. Also $\angle ZEA = \angle DEA/2$. Looking from above the vertex $E$, three faces meet symmetrically, so $\angle DEA = 120^\circ$, which gives $\angle ZEA = 60^\circ = \angle ZAE$.

Let $Y = AE$. The spherical law of cosines and the spherical law of sines in $\triangle ZEA$ give

$$\cos Y = \sin^2 X\cos 72^\circ + \cos^2 X \qquad\text{and}\qquad \frac{\sin X}{\sin 60^\circ} = \frac{\sin Y}{\sin 72^\circ}.$$

Substituting $\sin X = \dfrac{\sin 60^\circ}{\sin 72^\circ}\sin Y$ into the first equation:

$$\cos Y = \left(\frac{\sin 60^\circ}{\sin 72^\circ}\sin Y\right)^2\cos 72^\circ + 1 - \left(\frac{\sin 60^\circ}{\sin 72^\circ}\sin Y\right)^2$$

which simplifies to

$$1 - \cos Y = 2\sin^2 Y\,\frac{\sin^2 60^\circ\sin^2 36^\circ}{\sin^2 72^\circ} \;\Longrightarrow\; \cos Y = \frac{1}{2}\left(\frac{\sin 72^\circ}{\sin 36^\circ\sin 60^\circ}\right)^2 - 1.$$

Solving for $Y$ ($Y \approx 41.8^\circ$, the angle subtended by one edge) and substituting back gives $X \approx 37.38^\circ$.

**A quicker check with 3D geometry:** for a dodecahedron of edge $s$, the circumradius is $R = \frac{\sqrt{3}}{4}(1+\sqrt{5})\,s \approx 1.401\,s$ and each pentagonal face has circumradius $\rho = \frac{s}{2\sin 36^\circ} \approx 0.851\,s$. The angle between the face centre and a vertex, seen from the centre, satisfies $\sin X = \rho/R \approx 0.607$, so $X \approx 37.38^\circ$.`,
      rubric: String.raw`Astro Coach marking guide (15 points):
- Argues that the minimum occurs with the zenith at the centre of a pentagonal face, so the five closest stars are that face's vertices: 4 points.
- Sets up the geometry correctly (e.g. spherical triangle with $\angle AZE = 72^\circ$ and $\angle ZAE = \angle ZEA = 60^\circ$, or the 3D circumradius / face-radius relation): 4 points.
- Correct use of spherical trigonometry or 3D geometry to solve for the angle: 4 points.
- Final answer $37.4^\circ$ (37–38°): 3 points.`,
      solutionSource: "ADAPTED",
      figures: [
        { key: "dodecahedron", file: "dodecahedron.png", caption: "A regular dodecahedron", sourcePage: 2 },
        {
          key: "sol-dodecahedron-face",
          file: "sol-dodecahedron-face.png",
          kind: "SOLUTION",
          caption: "Solution: the face ABCDE centred on the zenith Z",
          sourcePage: 4,
        },
      ],
      questionPages: [2, 3],
      solutionPages: [4],
    },

    // --- Medium 1: Solar eclipse (30 points) --------------------------------
    {
      number: "M1",
      title: "Solar Eclipse",
      section: MEDIUM,
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Intermediate",
      points: 30,
      text: String.raw`Throughout this question, you can use that the eccentricity of the Moon's orbit is $e_\mathrm{Moon} = 0.055$. We will use the simplifying assumptions that the Earth's orbit is circular with a radius of $1\ \text{AU}$, the Earth has no axial tilt (i.e., the equator and ecliptic coincide), and the Moon's orbit lies exactly on the ecliptic.`,
      parts: [
        {
          label: "(a)",
          points: 7,
          prompt: String.raw`Calculate the maximum distance of the Moon from the center of the Earth for a total solar eclipse to happen. Also calculate the distance of the Moon at perigee and apogee, and compare these three numbers.`,
          solution: String.raw`Use similar triangles: the Moon's shadow cone just reaches the Earth when the triangles formed by the Earth's centre, the Moon's limb and the Sun's limb are similar.

[[figure:sol-umbra-cone]]

The Moon's full shadow ends exactly at a distance of $1\ \text{AU}$ from the Sun when the Moon's distance from the centre of the Earth is

$$x = 1\ \text{AU}\cdot\frac{R_\mathrm{Moon}}{R_\odot} = 1.496\times10^{11}\ \text{m}\cdot\frac{1.737\times10^6}{6.96\times10^8} = 3.73\times10^8\ \text{m}.$$

(The Moon can be slightly farther for an eclipse at noon, because the shadow only has to reach the Earth's surface, not its centre. Subtracting $R_\oplus$ from 1 AU above and adding it back at the end gives $3.80\times10^8$ m, which is also accepted.)

Perigee: $r_p = (1 - e_\mathrm{Moon})a_\mathrm{Moon} = (1 - 0.055)\cdot 3.84399\times10^8\ \text{m} = 3.63\times10^8\ \text{m}$.

Apogee: $r_a = (1 + e_\mathrm{Moon})a_\mathrm{Moon} = 1.055\cdot 3.84399\times10^8\ \text{m} = 4.06\times10^8\ \text{m}$.

The limiting distance for a total eclipse lies **between** the perigee and apogee distances. This is why there are both total solar eclipses (Moon near perigee) and annular ones (Moon near apogee).`,
          rubric: String.raw`Official marking scheme (7 points):
- Uses similar triangles for the Moon's umbra (Earth centre, Moon limb, Sun limb): 2 points.
- Maximum distance $x = 1\ \text{AU}\cdot R_\mathrm{Moon}/R_\odot = 3.73\times10^8$ m (accept $3.80\times10^8$ m using the Earth's surface): 2 points.
- Perigee $3.63\times10^8$ m: 1 point.
- Apogee $4.06\times10^8$ m: 1 point.
- Comparison: the limit lies between perigee and apogee (both total and annular eclipses happen): 1 point.`,
        },
        {
          label: "(b)",
          points: 3,
          prompt: String.raw`The Moon is slowly moving away from the Earth due to tidal effects, with its semimajor axis increasing at $38\ \text{mm}$ per year. Assuming its eccentricity remains the same, how many years in the future will total solar eclipses become impossible?`,
          solution: String.raw`Total eclipses become impossible once even the perigee is farther than the maximum distance from (a). With $3.7336\times10^8$ m, the semimajor axis at that point is

$$a_\mathrm{Moon} = \frac{3.7336\times10^8\ \text{m}}{1 - e_\mathrm{Moon}} = 3.9509\times10^8\ \text{m}.$$

That is $3.9509\times10^8 - 3.84399\times10^8 = 1.069\times10^7$ m farther than today. At $38\ \text{mm/yr}$ this takes

$$t = \frac{1.069\times10^7\ \text{m}}{0.038\ \text{m/yr}} \approx 2.8\times10^8\ \text{years}.$$

(Using the maximum distance of $3.80\times10^8$ m instead gives $4.6$–$4.7\times10^8$ years, which is also accepted.)`,
          rubric: String.raw`Official marking scheme (3 points):
- Semimajor axis at which the perigee equals the limit from (a), $a = x/(1-e) = 3.95\times10^8$ m: 1 point.
- Time $\approx 2.8\times10^8$ years (accept $4.6$–$4.7\times10^8$ years if $3.80\times10^8$ m was used): 2 points.`,
        },
        {
          label: "(c)",
          points: 5,
          prompt: String.raw`Assume there is a new moon at perigee. What is the Moon's speed relative to the Earth and the fixed background stars? You may neglect the mass of the Moon in comparison with the Earth.`,
          solution: String.raw`By conservation of energy for the Moon's orbit,

$$-\frac{GM_\oplus m}{2a_\mathrm{Moon}} = \frac{1}{2}mv^2 - \frac{GM_\oplus m}{r},$$

so at perigee (the vis-viva equation)

$$v_p = \sqrt{GM_\oplus\left(\frac{2}{r_p} - \frac{1}{a}\right)} = \sqrt{\frac{(6.674\times10^{-11})(5.976\times10^{24})}{3.84399\times10^8\ \text{m}}\left(\frac{2}{1 - 0.055} - 1\right)} = 1.08\times10^3\ \text{m/s}.$$`,
          rubric: String.raw`Official marking scheme (5 points):
- Energy conservation / vis-viva: $v_p = \sqrt{GM_\oplus(2/r_p - 1/a)}$: 3 points.
- Numerical answer $1.08\times10^3$ m/s: 2 points.`,
        },
        {
          label: "(d)",
          points: 3,
          leadIn: String.raw`For the remainder of this problem, consider an observer on the equator for whom the Sun is eclipsed at noon, and the Moon is at perigee.`,
          prompt: String.raw`The answer from (c) is the speed of the Moon in the geocentric frame in which the Earth and the background stars are fixed. However, for an eclipse, we are interested in the Moon's motion relative to the Sun instead of the background stars. What is the Moon's speed in a geocentric frame in which the Earth and the Sun are fixed? Hint: rotate the previous frame by the apparent angular velocity of the Sun.`,
          solution: String.raw`The apparent angular velocity of the Sun is $2\pi\ \text{rad}$ per year. At new moon this is in the same direction as the Moon's motion, so subtract this angular velocity times the Moon's distance:

$$v = 1.0763\times10^3\ \text{m/s} - \frac{2\pi}{365.2564\cdot 24\cdot 3600\ \text{s}}\cdot 3.6326\times10^8\ \text{m} = 1004\ \text{m/s} \approx 1.00\times10^3\ \text{m/s}.$$`,
          rubric: String.raw`Official marking scheme (3 points):
- Apparent angular velocity of the Sun $= 2\pi$ rad / 1 yr: 1 point.
- Subtracts this angular velocity times the Moon's distance (same direction at new moon): 1 point.
- Answer $1.00\times10^3$ m/s: 1 point.`,
        },
        {
          label: "(e)",
          points: 6,
          prompt: String.raw`What is the diameter of the Moon's shadow on the observer?`,
          solution: String.raw`Use similar triangles $XKA$ and $XOE$, where $X$ is the tip of the Moon's shadow cone, $O$ is the observer and $A$ is the point where the cone touches the Moon.

[[figure:sol-shadow]]

The tip of the cone is a distance $x$ (from part (a)) behind the Moon, and the observer is $x - r_p + R_\oplus$ from the tip. So the diameter of the shadow (twice $OE$) is

$$D = (x - r_p + R_\oplus)\cdot\frac{2R_\mathrm{Moon}}{x} = (3.7336\times10^8 - 3.6326\times10^8 + 6.371\times10^6)\ \text{m}\cdot\frac{2\cdot 1.737\times10^6}{3.7336\times10^8} = 153\ \text{km} \approx 150\ \text{km}.$$

We can neglect the curvature of the Earth because this distance is much smaller than the Earth's radius. ($OE$ is also slightly tilted, so strictly we could multiply by the cosine of the angular size of the Moon, but that cosine is essentially 1.)`,
          rubric: String.raw`Official marking scheme (6 points):
- Uses similar triangles between the Moon's radius and the shadow at the observer: 2 points.
- $D = (x - r_p + R_\oplus)\cdot 2R_\mathrm{Moon}/x$: 2 points.
- Answer about 150 km: 2 points.`,
        },
        {
          label: "(f)",
          points: 6,
          prompt: String.raw`What is the duration of totality for the observer?`,
          solution: String.raw`Divide the shadow's diameter by the speed of the Moon relative to the observer on the surface. The observer moves (in the same direction) at $v_s = 2\pi R_\oplus/(24\ \text{h})$. The timescales are much shorter than a day, so both motions can be treated as straight lines:

$$t = \frac{D}{v_p - v_s} = \frac{153.24\times10^3\ \text{m}}{1004\ \text{m/s} - 2\pi\cdot 6.371\times10^6\ \text{m}/(24\cdot 3600\ \text{s})} = 283\ \text{s} \approx 4.7\ \text{min}.$$

This is similar to the length of the April 8th, 2024 total solar eclipse across North America! Eclipses can be longer than this because the Earth can be farther than 1 AU from the Sun, which makes the shadow larger.`,
          rubric: String.raw`Official marking scheme (6 points):
- Duration = shadow diameter divided by the relative speed of the Moon and the observer: 2 points.
- Observer's speed $v_s = 2\pi R_\oplus/(24\ \text{h})$: 1 point.
- Justifies treating both motions as straight lines (timescale much shorter than a day): 1 point.
- Answer about 283 s (4.7 min): 2 points.`,
        },
      ],
      solutionSource: "ADAPTED",
      figures: [
        {
          key: "sol-umbra-cone",
          file: "sol-umbra-cone.png",
          kind: "SOLUTION",
          caption: "Solution (a): similar triangles for the Moon's shadow cone",
          sourcePage: 5,
        },
        {
          key: "sol-shadow",
          file: "sol-shadow.png",
          kind: "SOLUTION",
          caption: "Solution (e): the shadow cone meeting the observer O",
          sourcePage: 7,
        },
      ],
      questionPages: [4],
      solutionPages: [5, 6, 7],
    },

    // --- Medium 2: Neutrino decoupling (25 points) --------------------------
    {
      number: "M2",
      title: "Neutrino Decoupling",
      section: MEDIUM,
      topic: "Galaxies & Universe",
      difficulty: "Advanced",
      points: 25,
      text: String.raw`At the beginning of the Universe, immediately following inflation, neutrinos were in thermal equilibrium with other radiation and matter, maintained through weak interactions. As the Universe expanded and the temperature of the Universe dropped, the rate of these weak interactions decreased until thermal equilibrium was no longer maintained, and neutrinos began to propagate freely through the Universe. This event is called neutrino decoupling, and occurred at about $t_n = 1\ \text{sec}$ after the Big Bang. Initially, the energy density of radiation was greater than that of matter, but as energy of radiation decreased with cosmological expansion, eventually the energy density of radiation fell below that of matter. This earlier period is called the radiation-dominated era, while the later period is called the matter-dominated era, with a transition time of about $t_r = 50000\ \text{yr}$.`,
      parts: [
        {
          label: "(a)",
          points: 4,
          prompt: String.raw`Write proportionalities for the energy density of matter $\rho_m(a)$ and the energy density of radiation $\rho_r(a)$ as a function of scale factor. Your answer should look like $\rho_m(a) \propto f(a)$ and $\rho_r(a) \propto g(a)$ for some single variable functions $f, g$.

Hint: radiation is redshifted with cosmological expansion, while matter is not.`,
          solution: String.raw`Think of matter as many tiny dust particles. As the Universe expands they move apart, but none are created or destroyed and their masses do not change. So the matter density is inversely proportional to volume, which goes as the cube of the scale factor:

$$\rho_m(a) \propto a^{-3}$$

Expansion also does not create or destroy photons, but it redshifts them: a photon of wavelength $a_1\lambda$ is stretched to $a_2\lambda$, so the energy per photon is inversely proportional to $a$. The radiation energy density therefore falls as the fourth power (3 for volume, 1 for redshift):

$$\rho_r(a) \propto a^{-4}$$`,
          rubric: String.raw`Astro Coach marking guide (4 points):
- $\rho_m \propto a^{-3}$ (density falls with volume): 2 points.
- $\rho_r \propto a^{-4}$ (volume plus redshift of each photon): 2 points.`,
        },
        {
          label: "(b)",
          points: 6,
          prompt: String.raw`Using the Friedmann equation:

$$H^2 = \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2}$$

where $a$ is the scale factor and $k$ is the curvature. Derive proportionalities for the evolution of a matter-dominated and a radiation-dominated Universe, $a_m(t)$ and $a_r(t)$. Take $t$ to be the time since the start of the Universe in each case, assuming the Universe was always made of only matter or only radiation. Assume no curvature or cosmological constant. Derivation required for credit.

Hint: guess a form $a(t) = bt^c$ with $b, c$ constants, which has derivative $\dot a(t) = c\cdot bt^{c-1}$, and equate exponents.`,
          solution: String.raw`With no curvature, $k = 0$ and the second term drops out, so $(\dot a/a)^2 \propto \rho$. Guess $a(t) = bt^c$; we can drop constant factors because we only want proportionalities. Then $\dot a/a = c/t$, so $(\dot a/a)^2 \propto t^{-2}$.

**Matter:** $\rho \propto a^{-3} \propto t^{-3c}$, so

$$t^{-2} \propto t^{-3c} \;\Longrightarrow\; c = \frac{2}{3} \;\Longrightarrow\; a_m(t) \propto t^{2/3}$$

**Radiation:** $\rho \propto a^{-4} \propto t^{-4c}$, so

$$t^{-2} \propto t^{-4c} \;\Longrightarrow\; c = \frac{1}{2} \;\Longrightarrow\; a_r(t) \propto t^{1/2}$$`,
          rubric: String.raw`Astro Coach marking guide (6 points; derivation required):
- Sets $k = 0$ so that $H^2 \propto \rho$, and substitutes the densities from (a): 1 point.
- Substitutes $a = bt^c$ and finds $(\dot a/a)^2 \propto t^{-2}$: 1 point.
- Matter: equates exponents to get $a_m \propto t^{2/3}$: 2 points.
- Radiation: equates exponents to get $a_r \propto t^{1/2}$: 2 points.
- Answers stated without a derivation earn no credit.`,
        },
        {
          label: "(c)",
          points: 10,
          leadIn: String.raw`From this point forwards, take the simple (and unrealistic) assumption that in the radiation-dominated era, our Universe was entirely made up of radiation from the start up to some time $t_r$, then was entirely made up by matter afterwards in the matter-dominated era.`,
          prompt: String.raw`Using the conditions that the scale factor $a(t)$ and expansion rate $H(t) = \frac{\dot a(t)}{a(t)}$ of our Universe must be continuous, write expressions for the scale factor $a(t)$ of our Universe for $t < t_r$ and $t > t_r$, up to a single scaling constant. Do not substitute in the value of $t_r$ yet.

Hint: naively trying to equate the expressions of the previous part will not allow both $a(t)$ and $H(t)$ to be continuous. What assumption holds in those expressions that no longer holds here, giving us an extra degree of freedom?`,
          solution: String.raw`Put the constants back in: $a_r(t) = b_r t^{1/2}$ and $a_m(t) = b_m t^{2/3}$, with expansion rates

$$H_r(t) = \frac{\tfrac12 b_r t^{-1/2}}{b_r t^{1/2}} = \frac{1}{2t}, \qquad H_m(t) = \frac{\tfrac23 b_m t^{-1/3}}{b_m t^{2/3}} = \frac{2}{3t}.$$

Matching $a$ at $t_r$ is possible ($b_r = b_m t_r^{1/6}$), but $\frac{1}{2t_r} \ne \frac{2}{3t_r}$, so $H$ can never be continuous this way.

The faulty assumption: in (b), $t = 0$ was when that Universe began. That is true for the radiation era, but the matter era starts later, so the moment when the matter solution would reach $a = 0$ need not be our $t = 0$. Add a time offset $t_*$:

$$a_r(t) = b_r t^{1/2}, \qquad a_m(t) = b_m (t - t_*)^{2/3}.$$

**Continuity of $H$ at $t_r$:**

$$\frac{1}{2t_r} = \frac{2}{3(t_r - t_*)} \;\Longrightarrow\; t_* = -\frac{1}{3}t_r$$

So the matter era behaves like a Universe that was always made of matter but started at $t = -\tfrac13 t_r$.

**Continuity of $a$ at $t_r$:**

$$b_r t_r^{1/2} = b_m\left(\frac{4}{3}t_r\right)^{2/3} \;\Longrightarrow\; b_r = b_m\left(\frac{4}{3}\right)^{2/3} t_r^{1/6}$$

Therefore

$$a(t) = \begin{cases} b_m\left(\frac{4}{3}\right)^{2/3} t_r^{1/6}\, t^{1/2}, & t < t_r \\[4pt] b_m\left(t + \frac{t_r}{3}\right)^{2/3}, & t > t_r \end{cases}$$`,
          rubric: String.raw`Astro Coach marking guide (10 points):
- Writes $a_r = b_r t^{1/2}$, $a_m = b_m t^{2/3}$ with $H_r = 1/(2t)$ and $H_m = 2/(3t)$: 2 points.
- Recognises that naive matching cannot make $H$ continuous and introduces a time offset in the matter-era solution: 3 points.
- Continuity of $H$ gives $t_* = -t_r/3$: 2 points.
- Continuity of $a$ gives $b_r = b_m (4/3)^{2/3} t_r^{1/6}$: 2 points.
- Correct final piecewise expression with a single constant: 1 point.`,
        },
        {
          label: "(d)",
          points: 2,
          prompt: String.raw`Solve for the scaling constant in the previous part in terms of $t_r$ and $t_0$, the current age of our Universe.

Hint: what is the current value of $a_0 = a(t_0)$?`,
          solution: String.raw`By convention the scale factor today is $a_0 = 1$. Setting $a(t_0) = 1$ in the matter-era expression:

$$b_m\left(t_0 + \frac{t_r}{3}\right)^{2/3} = 1 \;\Longrightarrow\; b_m = \left(t_0 + \frac{t_r}{3}\right)^{-2/3}$$`,
          rubric: String.raw`Astro Coach marking guide (2 points):
- Uses $a(t_0) = 1$ in the matter-era expression: 1 point.
- $b_m = (t_0 + t_r/3)^{-2/3}$: 1 point.`,
        },
        {
          label: "(e)",
          points: 3,
          prompt: String.raw`For a boundary between matter and radiation-dominated eras of $t_r = 50000\ \text{yr}$, estimate the temperature $T_n$ of the Universe at the time of neutrino decoupling. The current age of the Universe is $t_0 = 13.8$ billion years, and the current temperature of the Universe is $T_0 = 2.73\ \text{K}$.`,
          solution: String.raw`At $t = 1$ s we are in the radiation era:

$$a(1\ \text{s}) = \left(t_0 + \frac{t_r}{3}\right)^{-2/3}\left(\frac{4}{3}\right)^{2/3} t_r^{1/6}\, t^{1/2}$$

Substituting $t_0 = 1.38\times10^{10}\cdot 3.15\times10^7$ s, $t_r = 5\times10^4\cdot 3.15\times10^7$ s and $t = 1$ s gives

$$a(1\ \text{s}) \approx 2.28\times10^{-10}.$$

Temperature is inversely proportional to the scale factor (radiation is redshifted), so

$$T_n = \frac{a_0}{a(1\ \text{s})}\,T_0 \approx \frac{2.73\ \text{K}}{2.28\times10^{-10}} \approx 1.2\times10^{10}\ \text{K}.$$`,
          rubric: String.raw`Astro Coach marking guide (3 points):
- Evaluates the radiation-era scale factor at 1 s, $a \approx 2.3\times10^{-10}$ (converting years to seconds): 1 point.
- Uses $T \propto 1/a$: 1 point.
- $T_n \approx 1.2\times10^{10}$ K: 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [4, 5],
      solutionPages: [8, 9, 10, 11],
    },

    // --- Medium 3: Spiff's adventures (30 points) ---------------------------
    {
      number: "M3",
      title: "Spiff's Adventures",
      section: MEDIUM,
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Exoplanets & Life", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 30,
      text: String.raw`You may attempt subsections without attempting the previous parts by making appropriate assumptions.

Spaceman Spiff is exploring the distant reaches of the Milky Way. He ends up crashing on a very cold planet. He calls the corresponding star Burner and the planet Ash. Though there aren't signs of life nearby, Spiff wants to determine if Ash is habitable. In addition to the table of constants, you can assume the apparent magnitude of the Sun is $-26.74$.`,
      parts: [
        {
          label: "(a)",
          points: 5,
          prompt: String.raw`The first thing Spiff observes is that Burner (seen through safe equipment!) is not uniformly bright over its disc in the sky. Indeed, the edges seem to be less bright than the center. Spiff opens up an astrophysics book (his computer is not working) and finds the following equation:

$$I(\tau, \mu) = \frac{3}{4\pi}\left(\tau + \mu + \frac{2}{3}\right)F(0)$$

Here, $I(\tau, \mu)$ gives the intensity of light at optical depth $\tau$ and $\mu = \cos\theta$ where the angle $\theta$ is the angle between the direction of the ray and the radial direction. $F(0)$ is the net flux at the surface.

Help Spiff find the ratio of intensity of the center of Burner to the edge (as it appears to Spiff). What is this phenomenon called?`,
          solution: String.raw`At the **edge** of the disc we see light leaving the surface ($\tau = 0$) at $\theta = 90^\circ$, so $\mu = \cos 90^\circ = 0$:

$$I(0, 0) = \frac{3}{4\pi}\cdot\frac{2}{3}F(0) = \frac{F(0)}{2\pi}.$$

At the **centre** of the disc, $\tau = 0$ and $\mu = \cos 0 = 1$:

$$I(0, 1) = \frac{3}{4\pi}\cdot\frac{5}{3}F(0) = \frac{5F(0)}{4\pi}.$$

The ratio of centre to edge is

$$\frac{I_\text{centre}}{I_\text{edge}} = \frac{5}{2}.$$

The centre is brighter than the edge: this is called **limb darkening**.`,
          rubric: String.raw`Official marking scheme (5 points):
- Edge: $\tau = 0$, $\mu = 0$, $I = F(0)/(2\pi)$: 1 point.
- Centre: $\tau = 0$, $\mu = 1$, $I = 5F(0)/(4\pi)$: 1 point.
- Ratio $5/2$: 2 points.
- Names the phenomenon limb darkening: 1 point.`,
        },
        {
          label: "(b)",
          points: 15,
          prompt: String.raw`Spiff walks for a few days but doesn't find any life nearby. Over the many nights and days, Spiff makes several observations about Burner and Ash:

- The peak wavelength of Burner appears to be $500\ \text{nm}$.
- Before the ship crashed, Spiff had found the planet has a radius twice that of Earth and that it has a circular orbit around Burner.
- Precise calculation yields that each solar (Burnar?) day is 192 hours long and that Burner moved 1 degree against the background stars over a day.
- The mass and radius of Burner are similar to that of the Sun.
- Comparing the rotation of Burner (found by tracking a Burnerspot) to the sky, Spiff finds out that Ash has an axial tilt of 60 degrees! Spiff hypothesises that, because of a thin atmosphere and other effects, the heat received from the star never redistributes to the part of Ash that is not exposed to the star, and is only emitted by the exposed part. Also somewhat peculiarly, the unexposed part always remains unexposed (Ash is always tilted towards Burner). Assume that Ash is at thermal equilibrium.

What is the equilibrium temperature of Ash? Is it theoretically possible to have life on this planet?`,
          solution: String.raw`**Star's temperature** from Wien's law: $T_B = \dfrac{b}{\lambda_\text{max}} = \dfrac{2.898\times10^{-3}\ \text{m K}}{500\times10^{-9}\ \text{m}} \approx 5796\ \text{K}$.

**Star's luminosity** (radius equal to the Sun's) from the Stefan–Boltzmann law: $L_B = 4\pi R_B^2\sigma T_B^4 \approx 3.89\times10^{26}\ \text{W}$.

**Year length.** Burner moves 1° per day and must move 360° to return to the same place among the stars, so a year is 360 days of 192 hours:

$$P = \frac{192\times360}{24\times365.25} = 7.885\ \text{Earth years}.$$

**Orbital radius.** Burner has the Sun's mass, so Kepler's third law in years and AU gives $a^3 = P^2$:

$$a = (7.885)^{2/3} = 3.961\ \text{AU} = 5.93\times10^{11}\ \text{m}.$$

**Power absorbed** by Ash (radius $R_A = 2R_\oplus$), intercepting a disc of area $\pi R_A^2$:

$$P_\text{in} = \frac{\pi R_A^2}{4\pi d^2}L_B \approx 4.51\times10^{16}\ \text{W}.$$

**Power emitted.** Ash only radiates from the exposed part. The unexposed part is a polar cap: a cone of half-angle 60° from the planet's centre, with solid angle $2\pi(1 - \cos 60^\circ) = \pi$, which is $\pi/4\pi = \tfrac14$ of the sphere. So $\tfrac34$ of the surface emits:

$$P_\text{out} = \frac{3}{4}\cdot 4\pi R_A^2\,\sigma T^4 \approx 8.70\times10^7\,T^4\ \text{W}.$$

**Equilibrium:** $4.51\times10^{16} = 8.70\times10^7\,T^4$, so

$$T \approx 151\ \text{K}.$$

Water freezes at 273 K, far above this, so Ash is probably **too cold for life** (and the unexposed part is even colder).`,
          rubric: String.raw`Official marking scheme (15 points):
- Wien's law: $T_B \approx 5796$ K: 1 point.
- Luminosity $L_B = 4\pi R_B^2\sigma T_B^4 \approx 3.89\times10^{26}$ W: 1 point.
- Year length: 360 days of 192 h = 7.885 Earth years: 3 points.
- Kepler's third law: $a \approx 3.96$ AU $= 5.93\times10^{11}$ m: 1 point.
- Absorbed power $\pi R_A^2 L_B/(4\pi d^2) \approx 4.5\times10^{16}$ W: 2 points.
- Unexposed fraction from the solid angle $2\pi(1-\cos 60^\circ) = \pi$, i.e. 1/4 of the sphere does not emit: 3 points.
- Emitted power $\tfrac34\cdot 4\pi R_A^2\sigma T^4$: 1 point.
- Temperature about 151 K: 2 points.
- Conclusion: too cold for liquid water / life: 1 point.`,
        },
        {
          label: "(c)",
          points: 4,
          prompt: String.raw`Spiff, being the genius he is, manages to fix the spaceship on his own, weaves through a dangerous meteor field and escapes Burner's system. When he is around 10 parsecs away, he stops and looks back at Burner. He realises that he is still on Ash's plane of revolution when it starts transiting across Burner's disc. How long will the transit of Ash across Burner take in seconds?`,
          solution: String.raw`(If part (b) was skipped, the orbital radius and period can be found here; the points for that work belong to (b).)

From first contact to last contact, Ash must travel a distance $2(R_B + R_A)$ along its orbit. Seen from the star, that is an angle

$$2\arcsin\!\left(\frac{R_A + R_B}{d}\right) \approx 0.137^\circ.$$

Ash covers 360° in one orbital period of 7.885 years, so

$$t = \frac{0.137^\circ}{360^\circ}\times 7.885\ \text{yr} \approx 9.46\times10^4\ \text{s}\ (\text{about 26 hours}).$$

Spiff's distance of 10 pc does not matter, because he is far away compared with the size of the system.`,
          rubric: String.raw`Official marking scheme (4 points):
- Total distance covered during transit is $2(R_B + R_A)$: 1 point.
- Corresponding angle $2\arcsin((R_A + R_B)/d) \approx 0.137^\circ$: 1 point.
- Time $\approx 9.46\times10^4$ s: 2 points.`,
        },
        {
          label: "(d)",
          points: 6,
          prompt: String.raw`Now Spiff has moved away further to 100 parsecs and has finally reached home. He looks back at Burner one last time. What is the apparent magnitude of the star (assume that the transit of Ash is not happening) for Spiff? Can he see it with his naked eye (Spiff is indeed human)? Assume that extinction is significant, and is equal to $2\ \text{mag/kpc}$.`,
          solution: String.raw`At 100 pc the line of sight passes through $\dfrac{2}{1000}\times 100 = 0.2$ magnitudes of interstellar extinction.

Use the Sun seen from Earth as the reference:

$$m' + 26.74 = -2.5\log\frac{F_{\text{Burner}\to\text{Spiff}}}{F_{\odot\to\text{Earth}}} + 0.2 \;\Longrightarrow\; m' = -26.74 - 2.5\log\frac{L_B/4\pi(100\ \text{pc})^2}{L_\odot/4\pi(1\ \text{AU})^2} + 0.2$$

$$m' = -26.74 + 36.55 + 0.2 \approx 10.0$$

The naked-eye limiting magnitude is about 6, so Spiff **cannot** see Burner with his naked eye.`,
          rubric: String.raw`Official marking scheme (6 points):
- Extinction $= 2\ \text{mag/kpc}\times 0.1\ \text{kpc} = 0.2$ mag: 1 point.
- Sets up the magnitude comparison with the Sun seen from Earth (or an equivalent distance-modulus method): 1 point.
- Correct flux ratio using $L_B$ and the distances 100 pc and 1 AU: 1 point.
- Apparent magnitude about 10.0: 2 points.
- Not visible to the naked eye (limit about 6): 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [5, 6],
      solutionPages: [12, 13],
    },

    // --- Long 1: TESS (50 points) ------------------------------------------
    {
      number: "L1",
      title: "TESS",
      section: LONG,
      topic: "Telescopes & Observing",
      topics: ["Telescopes & Observing", "Light & Spectra", "Energy & Stellar Physics"],
      difficulty: "Advanced",
      points: 50,
      text: String.raw`David the observation master just launched his new telescope into a geostationary orbit, which he calls the Terrestrial Earth Stalking Satellite (TESS)! To test his telescope, he aims it straight down at his friend Matthew.`,
      parts: [
        {
          label: "(a)",
          points: 9,
          prompt: String.raw`Assume Matthew is a perfect gray body radiator with an albedo of $a = 0.60$. Matthew has a surface area of $1.95\ \text{m}^2$ and a temperature of $37\ ^\circ\text{C}$. Estimate his apparent bolometric magnitude as seen by TESS. You may make the slightly unrealistic assumption that Matthew is in full sunlight (i.e. his full surface area is reflecting light coming solely from the Sun). Also assume that the Earth's albedo is $0.30$, that Matthew is directly below the telescope, and that he radiates isotropically. Hint: the Stefan-Boltzmann Law can be modified for gray bodies with albedo $a$ by multiplying the power by a factor of $(1 - a)$. The absolute bolometric magnitude of the Sun is $4.74$.`,
          solution: String.raw`Matthew emits two kinds of light: gray-body (thermal) radiation and reflected sunlight.

**Thermal:** with the modified Stefan–Boltzmann law, $(1 - a)A\sigma T^4 = 0.40\cdot 1.95\cdot\sigma\,(310\ \text{K})^4 \approx 409\ \text{W}$.

**Reflected:** the solar flux, times $(1 - a_\oplus)$ for the part not reflected by the atmosphere, times Matthew's albedo and area:

$$(1 - a_\oplus)\,a\,\frac{L_\odot}{4\pi(1\ \text{AU})^2}A \approx 1115\ \text{W}.$$

So Matthew's total luminosity is $L \approx 1524\ \text{W}$.

**Distance.** A geostationary orbit has radius

$$r = \left(\frac{GM_\oplus}{\omega^2}\right)^{1/3} = 4.22\times10^7\ \text{m},$$

with $\omega = 2\pi/T_\text{sidereal}$ (using $T = 86\,400$ s is also fine; the difference is tiny). TESS is $r - R_\oplus \approx 3.58\times10^7$ m above Matthew.

**Magnitude.** With $M$ and $m$ Matthew's absolute and apparent magnitudes,

$$M - M_\odot = -2.5\log_{10}\frac{L}{L_\odot}, \qquad m - M = 5\log_{10}\frac{r - R_\oplus}{10\ \text{pc}},$$

$$m = M_\odot - 2.5\log_{10}\frac{L}{L_\odot} + 5\log_{10}\frac{r - R_\oplus}{10\ \text{pc}} \approx 13.56.$$`,
          rubric: String.raw`Astro Coach marking guide (9 points), based on the official solution:
- Gray-body emission $(1-a)A\sigma T^4 \approx 409$ W (T in kelvin): 2 points.
- Reflected sunlight $(1-a_\oplus)\,a\,F_\odot A \approx 1.1$ kW: 2 points.
- Geostationary radius $\approx 4.22\times10^7$ m and distance $r - R_\oplus \approx 3.58\times10^7$ m: 2 points.
- Correct use of the magnitude / distance-modulus equations with $M_\odot = 4.74$: 2 points.
- Final $m \approx 13.6$ (13.3–13.8): 1 point.`,
        },
        {
          label: "(b)",
          points: 6,
          leadIn: String.raw`Having captured images of Matthew, he is eager to analyze the data! However, due to various sources of noise, the picture isn't as clear as he expected. The below table gives some of the properties of the telescope's CCD camera.

$$\begin{array}{|l|l|}\hline \textbf{Parameter} & \textbf{Value} \\ \hline \text{Dimensions} & 4096 \times 4096 \\ \text{Pixel size} & 15\ \mu\text{m} \\ \text{Focal length} & 3.14\ \text{m} \\ \text{Read noise} & 9\ e^- \\ \text{Dark current} & 1.1\ e^-/\text{pix}/\text{s} \\ \text{Saturation} & 200\,000\ e^- \\ m_0 & 20.44 \\ \hline \end{array}$$

Table 1: TESS Camera Parameters`,
          prompt: String.raw`What is the maximum signal to noise ratio (SNR) David can get from a single exposure before his pixels saturate? What exposure time would this correspond to? Hint: The value of $m_0$ corresponds to the magnitude at which the detector registers one count/second. The signal to noise ratio for a single CCD pixel with photon flux $P$ can be calculated using the following formula (where $t$ is the exposure time, $D$ is the dark current and $N_r$ is the read noise):

$$\text{SNR} = \frac{Pt}{\sqrt{Pt + Dt + N_r^2}}$$`,
          solution: String.raw`The photon flux from Matthew follows from

$$m - m_0 = -2.5\log_{10}\left(\frac{P}{1\ e^-/\text{s}}\right) \;\Longrightarrow\; P = 10^{(m_0 - m)/2.5}\ e^-/\text{s} = 10^{(20.44 - 13.56)/2.5}\ e^-/\text{s} \approx 564\ e^-/\text{s}.$$

The best SNR comes from the longest exposure before the pixel saturates (stating this intuition is enough):

$$t = \frac{200\,000\ e^-}{P} \approx 355\ \text{s}.$$

Plugging into the formula:

$$\text{SNR} = \frac{Pt}{\sqrt{Pt + Dt + N_r^2}} \approx 447.$$`,
          rubric: String.raw`Astro Coach marking guide (6 points):
- Photon flux $P = 10^{(m_0 - m)/2.5} \approx 560\ e^-/\text{s}$ (follow-through from (a)): 2 points.
- Exposure time to saturation $t = 200\,000/P \approx 355$ s: 2 points.
- SNR $\approx 447$: 2 points.`,
        },
        {
          label: "(c)",
          points: 10,
          prompt: String.raw`Looking closer at the data, David realizes that there are photon sources other than Matthew. Specifically, the ground produces a lot of background noise. David realizes he cannot include these counts as signal, but they still contribute to the $\sqrt{n}$ photon (shot) noise. You can use the albedo of the Earth given in part (a) for your estimate, and assume that the temperature of the ground is $20\ ^\circ\text{C}$. Calculate the new maximum signal to noise ratio and corresponding exposure time.`,
          solution: String.raw`First find how much ground one pixel sees. The plate scale gives each pixel's angular size:

$$\theta = \frac{y}{f} = \frac{15\ \mu\text{m}}{3.14\ \text{m}} = 4.78\times10^{-6}\ \text{rad}.$$

Times the distance to the ground, each pixel covers a square of side

$$l = \theta(r - R_\oplus) \approx 171\ \text{m} \;\Longrightarrow\; A = l^2 \approx 2.93\times10^4\ \text{m}^2.$$

Split the ground's luminosity into gray-body and reflected parts, as in (a):

- gray-body: $(1 - a_\oplus)\sigma A T^4 \approx 8.6\times10^6\ \text{W}$ (with $T = 293$ K);
- reflected: $a_\oplus\dfrac{L_\odot}{4\pi(1\ \text{AU})^2}A \approx 1.19\times10^7\ \text{W}$.

Total: $2.05\times10^7$ W. The same magnitude formula as (a) gives $m \approx 3.24$, so the background photon flux is

$$P_b = 10^{(m_0 - m)/2.5}\ e^-/\text{s} \approx 7.56\times10^6\ e^-/\text{s}.$$

Now the pixel saturates much sooner:

$$t = \frac{200\,000\ e^-}{P + P_b} \approx 0.0263\ \text{s},$$

and the modified SNR is

$$\text{SNR} = \frac{Pt}{\sqrt{Pt + P_bt + Dt + N_r^2}} \approx 0.033.$$`,
          rubric: String.raw`Astro Coach marking guide (10 points):
- Pixel angular size $\theta = 15\ \mu\text{m}/3.14\ \text{m} \approx 4.8\times10^{-6}$ rad: 2 points.
- Ground area per pixel $\approx 2.9\times10^4\ \text{m}^2$ (side about 171 m): 2 points.
- Ground luminosity per pixel from gray-body plus reflected light, $\approx 2\times10^7$ W: 2 points.
- Background magnitude $\approx 3.2$ and photon flux $P_b \approx 7.6\times10^6\ e^-/\text{s}$: 2 points.
- New exposure time $\approx 0.026$ s and SNR $\approx 0.03$: 2 points.`,
        },
        {
          label: "(d)",
          points: 3,
          leadIn: String.raw`While analyzing his data, David notices something interesting. He notices that every 45 seconds, the location of Matthew changes by 1 pixel (assume the direction of the motion is exactly parallel to the columns of the detector array). He wonders if this variation could be explained by small vibrations in his satellite.`,
          prompt: String.raw`What would the minimum angular velocity of the satellite have to be in order to explain this movement? Express your answer in arcseconds per minute.`,
          solution: String.raw`The angular size of one pixel was found in (c). Divide it by 45 seconds and convert:

$$\omega = \frac{\theta}{t} = \frac{4.78\times10^{-6}\ \text{rad}}{45\ \text{s}} = 1.06\times10^{-7}\ \text{rad/s} \approx 1.31\ \text{arcsec/min}.$$

(The official solution writes the intermediate value as $3.33\times10^{-7}$ rad/s, which is a slip; its final answer of 1.31 arcsec/min is correct.)`,
          rubric: String.raw`Astro Coach marking guide (3 points):
- $\omega = \theta_\text{pixel}/45\ \text{s}$: 2 points.
- $\approx 1.31$ arcsec/min: 1 point.`,
        },
        {
          label: "(e)",
          points: 4,
          leadIn: String.raw`Being the observational master that he is, David knows that his control of the satellite is far too precise for camera jitter to be a viable explanation. Furthermore, as more data comes in, he sees that the movement continues to be in a straight line, something unlikely to be observed if random shaking of the satellite was at fault. Knowing Matthew, he comes up with an alternative explanation: Matthew is in the middle of a cross country race!`,
          prompt: String.raw`What would the minimum velocity Matthew would have to run to produce this movement?`,
          solution: String.raw`Multiply the angular velocity from (d) by the distance from the satellite to the ground (equivalently, one pixel's footprint on the ground divided by 45 s):

$$v = \frac{\theta\,(r - R_\oplus)}{t} = \frac{171\ \text{m}}{45\ \text{s}} \approx 3.80\ \text{m/s}.$$`,
          rubric: String.raw`Astro Coach marking guide (4 points):
- $v = \theta(r - R_\oplus)/t$ (pixel footprint on the ground per 45 s): 2 points.
- $\approx 3.8$ m/s: 2 points.`,
        },
        {
          label: "(f)(i)",
          points: 5,
          leadIn: String.raw`Although Matthew is too dim for David to achieve a reasonable SNR, as an observational master, David uses his knowledge of the dark arts to remove enough noise to do basic photometry experiments. Performing photometry on Matthew, David once again notices something interesting. Matthew's light curve has periodic dips! Figure 1 shows plots of the light curve.

**(f)** David hypothesizes that these dips are due to trees being planted at regular intervals along the route, blocking some fraction of the sunlight incident on Matthew (you may assume that the trees are not directly over Matthew and so they do not block any of the light reflected off him).`,
          prompt: String.raw`[[figure:light-curves]]

How far apart are these trees planted?`,
          solution: String.raw`(Values read off the graphs are approximate, and graders are lenient about them.)

In the first graph, 9 intervals take just under 2 minutes, so the time between two trees is about $120\ \text{s}/9 \approx 13.3$ s (the value actually used to make the graphs was 13.2 s). Multiplying by Matthew's speed from (e):

$$l = 13.2\ \text{s}\times 3.80\ \text{m/s} \approx 50\ \text{m}.$$`,
          rubric: String.raw`Astro Coach marking guide (5 points; be lenient with values read from the graph):
- Time between dips read from Figure 1(a), about 13–13.5 s: 3 points.
- Spacing = time × speed from (e), about 50 m (48–52 m, or consistent with their (e)): 2 points.`,
        },
        {
          label: "(f)(ii)",
          points: 5,
          prompt: String.raw`Estimate the width of each tree.`,
          solution: String.raw`From the second graph, a dip lasts about $\tfrac34$ of an axis tick, roughly 1.8–1.9 s (the value used to make the graphs was 1.80 s). Multiplying by the speed from (e):

$$w = 1.80\ \text{s}\times 3.80\ \text{m/s} \approx 6.8\ \text{m}.$$`,
          rubric: String.raw`Astro Coach marking guide (5 points; be lenient with values read from the graph):
- Dip duration read from Figure 1(b), about 1.7–2.0 s: 3 points.
- Width = duration × speed from (e), about 7 m (6–8 m, or consistent with their (e)): 2 points.`,
        },
        {
          label: "(f)(iii)",
          points: 8,
          prompt: String.raw`By what factor does each tree reduce the incoming sunlight?`,
          solution: String.raw`From the second graph the transit depth is about 0.3 of Matthew's total brightness (the value used to make the graphs was 0.31).

From (a), Matthew's luminosity is 1524 W, of which 409 W is gray-body radiation and 1115 W is reflected sunlight. The tree only blocks sunlight, so the dip comes entirely out of the reflected part:

$$\text{blocked} = 0.31\times 1524\ \text{W} \approx 472\ \text{W}, \qquad \frac{472\ \text{W}}{1115\ \text{W}} \approx 42\%.$$

Each tree blocks about **42%** of the incoming sunlight, i.e. it reduces the sunlight reaching Matthew to about 58% — a factor of about 0.58 (or about 1.7 times dimmer).`,
          rubric: String.raw`Astro Coach marking guide (8 points):
- Transit depth read from Figure 1(b), about 0.3 of the total: 2 points.
- Realises only the reflected-sunlight part of Matthew's luminosity is affected (thermal emission is unchanged), using the split from (a): 3 points.
- About 42% of the sunlight blocked, i.e. sunlight reduced to about 58% (a factor of about 0.58); either form earns full credit: 3 points.`,
        },
      ],
      solutionSource: "ADAPTED",
      figures: [
        {
          key: "light-curves",
          file: "light-curves.png",
          caption: "Figure 1: Light curves of Matthew",
          part: "(f)(i)",
          sourcePage: 8,
        },
      ],
      questionPages: [7, 8],
      solutionPages: [15, 16, 17],
    },

    // --- Long 2: The Analemma (50 points) -----------------------------------
    {
      number: "L2",
      title: "The Analemma",
      section: LONG,
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Gravity & Orbits"],
      difficulty: "Advanced",
      points: 50,
      text: String.raw`[[figure:analemma]]

If you take a picture of the Sun at the same time every day over the course of the year, you will see it traverse a famous figure-8 pattern known as the analemma. You can think of this as happening because the Sun's right ascension and declination vary over the course of the year relative to a "hypothetical sun" that travels at a constant speed along the celestial equator, and would appear to stay in place if observed at the same time each day.

In this problem, we will derive an expression for the shape of the analemma. Assume throughout this problem that $e \ll |\epsilon| \ll 1$, where $e$ is the Earth's eccentricity and $\epsilon$ is the Earth's axial tilt. Use the small-angle approximation wherever it is justified — you'll need it often (sometimes in conjunction with other trig identities).`,
      parts: [
        {
          label: "(a)",
          points: 20,
          prompt: String.raw`We conventionally parameterize the time of year in terms of the "mean anomaly" $M$, which starts at 0 at Earth's perihelion, and increases from 0 to $2\pi$ (radians) at a constant rate over the course of a year.

Since perihelion does not occur at the same time as the vernal equinox, we define the angle $\phi$ to be equal to the mean anomaly at the time of the vernal equinox. For convenience define another variable: the "mean longitude" $L = M - \phi$, which is equal to the longitude of the "hypothetical sun" mentioned above.

Write down an expression (valid for $e \ll 1$) for the ecliptic longitude $l$ of the Sun, as a function of $L$ and $\phi$. Hint: you can apply Kepler's second law to calculate $l$ at a few specific points along Earth's orbit, and then make an educated guess of the general form from there.`,
          solution: String.raw`Define the true anomaly $\nu = l + \phi$, so that $\nu = M$ for a circular orbit. We want the small difference $\Delta\nu = \nu - M$ as a function of $M$. (Expanding Kepler's equation in small $e$ works, but an educated guess is quicker for the lowest-order term.)

**Guess the form.** $\Delta\nu$ must be periodic in $M$ with period $2\pi$. Near perihelion the Earth moves faster than average, so $\Delta\nu$ increases; near aphelion it moves slower, so $\Delta\nu$ decreases. A reasonable guess is $\Delta\nu = C\sin M$.

**Check the easy points.** At perihelion ($M = 0$), $\nu = M = 0$, so $\Delta\nu(0) = 0$. At aphelion ($M = \pi$), by symmetry $\nu = M = \pi$, so $\Delta\nu(\pi) = 0$ again.

**Use the end of the semi-minor axis.** Consider the point on the semi-minor axis where the Earth moves from perihelion to aphelion. By Kepler's second law,

$$M = 2\pi\,\frac{\text{area swept out by Earth}}{\text{area of ellipse}}.$$

[[figure:sol-orbit-triangle]]

The triangle joining the Earth, the centre of the orbit and the Sun is right-angled with base $ae$ and height $b = a\sqrt{1 - e^2}$. The area swept since perihelion is a quarter of the ellipse minus this triangle, $\tfrac14\pi ab - \tfrac12 abe$, so

$$M = 2\pi\,\frac{\tfrac14\pi ab - \tfrac12 abe}{\pi ab} = \frac{\pi}{2} - e.$$

The true anomaly (the Earth–Sun–perihelion angle) is, in the small-angle approximation, $\nu \approx \frac{\pi}{2} + e\frac{a}{b} \approx \frac{\pi}{2} + e$ since $a/b \approx 1$. So $\Delta\nu \approx 2e$ here. The same argument at the opposite end of the minor axis gives $\Delta\nu(3\pi/2) \approx -2e$.

All four points fit the guess with $C = 2e$:

$$\Delta\nu(M) \approx 2e\sin M \quad\Longrightarrow\quad \nu \approx M + 2e\sin M,$$

which is indeed correct to first order in $e$. Substituting $\nu = l + \phi$ and $M = L + \phi$:

$$l(L) \approx L + 2e\sin(L + \phi)$$

(The official solution has a typo, "$M = \pi/2$" for aphelion; aphelion is at $M = \pi$.)`,
          rubric: String.raw`Astro Coach marking guide (20 points):
- Relates true and mean anomaly to $l$ and $L$ (e.g. $\nu = l + \phi$, $M = L + \phi$) and argues that the correction is periodic, zero at perihelion and aphelion (a $\sin M$ form): 4 points.
- Uses Kepler's second law at a well-chosen point (e.g. the end of the semi-minor axis) to find $M = \pi/2 - e$: 5 points.
- Finds the true anomaly there, $\nu \approx \pi/2 + e$, giving a difference of $2e$: 4 points.
- Concludes $\nu \approx M + 2e\sin M$: 3 points.
- Final answer $l \approx L + 2e\sin(L + \phi)$: 4 points.
- A correct derivation from Kepler's equation (series expansion) also earns full credit.`,
        },
        {
          label: "(b)",
          points: 10,
          leadIn: String.raw`We can describe the analemma as a parametric function of $L$, in terms of its right-ascension and declination components:

$$(\Delta\alpha(L),\ \delta(L))$$

where $\delta(L)$ is the declination of the Sun, and $\Delta\alpha(L) = \alpha(L) - L$ is the equation of time, defined as the difference in right ascension between the real Sun and the mean longitude.`,
          prompt: String.raw`Using spherical trigonometry and your expression for $l(L)$, write down an expression for $\delta(L)$. Remember to use the small-angle approximation!`,
          solution: String.raw`Draw a spherical triangle with the ecliptic and the celestial equator as two sides, and the Sun's projection onto the celestial equator making a right angle. The spherical law of sines gives

$$\frac{\sin\delta}{\sin\epsilon} = \sin l \quad\Longrightarrow\quad \delta = \arcsin(\sin\epsilon\sin l).$$

Since $\epsilon$ is small, $\delta \approx \epsilon\sin l$. Now substitute $l(L)$ from (a):

$$\delta \approx \epsilon\sin\big(L + 2e\sin(L + \phi)\big).$$

To use the small-angle approximation in $e$, first expand with the angle-addition identity:

$$\delta \approx \epsilon\Big(\sin L\cos\big(2e\sin(L+\phi)\big) + \cos L\sin\big(2e\sin(L+\phi)\big)\Big) \approx \epsilon\sin L + 2e\epsilon\sin(L+\phi)\cos L.$$

(This is also a first-order Taylor expansion.) The second term is of order $e\epsilon$, much smaller than the first, which is of order $\epsilon$, so we drop it:

$$\delta(L) \approx \epsilon\sin L$$`,
          rubric: String.raw`Astro Coach marking guide (10 points):
- Correct spherical-trigonometry relation $\sin\delta = \sin\epsilon\sin l$: 4 points.
- Small-angle approximation $\delta \approx \epsilon\sin l$: 2 points.
- Substitutes $l(L)$ and expands correctly: 2 points.
- Drops the $e\epsilon$ term with justification, giving $\delta \approx \epsilon\sin L$: 2 points.`,
        },
        {
          label: "(c)",
          points: 15,
          prompt: String.raw`Making the same assumptions as before, find an expression for $\Delta\alpha(L)$. Be careful: there will be a term that depends on $e$, and a term that depends on $\epsilon$ — they're approximately equal in magnitude (for Earth), so you need to include them both.

You'll need a couple of useful approximations, both of which hold for any $x \ll 1$:

$$\cos(x) \approx 1 - \frac{x^2}{2}, \qquad \frac{1}{1 - x} \approx 1 + x$$`,
          solution: String.raw`This part comes down to expanding with trig identities and carefully deciding which terms may be dropped.

From the same right spherical triangle, the spherical law of cosines gives

$$\cos l = \cos\alpha\cos\delta.$$

Since $\epsilon$ is small,

$$\cos\delta = \cos(\epsilon\sin L) \approx 1 - \frac{\epsilon^2\sin^2 L}{2}.$$

(Here we must keep the second-order term, otherwise all dependence on $\epsilon$ would be lost!) Write $\alpha = L + \Delta\alpha$ and assume $\Delta\alpha$ is small. Using the cosine addition identity and the small-angle approximation:

$$\cos l \approx (\cos L - \Delta\alpha\sin L)\left(1 - \frac{\epsilon^2\sin^2 L}{2}\right).$$

Rearranging, and using $\frac{1}{1-x} \approx 1 + x$:

$$\Delta\alpha \approx -\frac{\cos l}{\sin L}\left(1 + \frac{\epsilon^2\sin^2 L}{2}\right) + \cot L.$$

Now substitute $l(L)$ and use the same small-angle trick as in (b):

$$\cos\big(L + 2e\sin(L+\phi)\big) \approx \cos L - 2e\sin(L+\phi)\sin L.$$

So

$$\Delta\alpha \approx -\frac{\cos L - 2e\sin(L+\phi)\sin L}{\sin L}\left(1 + \frac{\epsilon^2\sin^2 L}{2}\right) + \cot L = -\frac{\epsilon^2}{4}\sin(2L) + 2e\sin(L+\phi) + e\epsilon^2\sin(L+\phi)\sin^2 L.$$

The term of order $e\epsilon^2$ can be dropped because both $e$ and $\epsilon$ are small. But the $\epsilon^2$ term must stay: nothing was assumed about how $e$ compares with $\epsilon^2$, and for Earth they are about the same size. Therefore

$$\Delta\alpha(L) \approx 2e\sin(L + \phi) - \frac{\epsilon^2}{4}\sin(2L)$$

(The official solution writes $\sin M$ in two places where $\sin L$ is meant; this is corrected above.)`,
          rubric: String.raw`Astro Coach marking guide (15 points):
- Correct spherical relation $\cos l = \cos\alpha\cos\delta$ (or an equivalent such as $\tan\alpha = \cos\epsilon\tan l$): 3 points.
- Keeps the second-order term in $\epsilon$, e.g. $\cos\delta \approx 1 - \epsilon^2\sin^2 L/2$ or $\cos\epsilon \approx 1 - \epsilon^2/2$: 3 points.
- Expands $\cos(L + \Delta\alpha)$ for small $\Delta\alpha$ and solves for $\Delta\alpha$: 3 points.
- Substitutes $l(L)$ from (a) and expands in $e$: 3 points.
- Final answer $\Delta\alpha \approx 2e\sin(L+\phi) - \frac{\epsilon^2}{4}\sin 2L$ with the $e\epsilon^2$ term dropped: 3 points.`,
        },
        {
          label: "(d)",
          points: 5,
          prompt: String.raw`Based on the results of parts (b) and (c), explain qualitatively why the analemma looks like a figure-8 curve.

(If you're curious, after the exam, you can try to graph or sketch a parametric plot of $\delta(L)$ against $\Delta\alpha(L)$. For Earth in 2024, $\phi = 77^\circ$, $\epsilon = 23.44^\circ$ and $e = 0.0167$. The result should look familiar.)`,
          solution: String.raw`The declination $\delta \approx \epsilon\sin L$ oscillates **once per year**. The equation of time contains a $\sin(2L)$ term, which oscillates **twice per year** (a period of 6 months). While the Sun goes up and down once, it swings left and right twice, which traces a figure-8. Without the $\sin(2L)$ term, $\Delta\alpha$ and $\delta$ would oscillate at the same frequency and the analemma would just be an ellipse.

With Earth's values ($e = 0.0167$, $\epsilon = 23.44^\circ$, $\phi = 77^\circ$), a parametric plot of $\delta$ against $\Delta\alpha$ (both in radians) gives the familiar shape. The two loops have different sizes because the $2e\sin(L+\phi)$ term adds to the $\sin 2L$ term in one half of the year and partly cancels it in the other.

[[figure:sol-analemma-plot]]`,
          rubric: String.raw`Astro Coach marking guide (5 points):
- Identifies the $\sin 2L$ term (from the axial tilt) as oscillating twice per year: 3 points.
- Explains that combining it with the once-per-year declination oscillation produces a figure-8 (a single-frequency motion would give an ellipse): 2 points.`,
        },
      ],
      solutionSource: "ADAPTED",
      figures: [
        { key: "analemma", file: "analemma.png", caption: "The analemma: the Sun photographed at the same time of day through a year", sourcePage: 8 },
        {
          key: "sol-orbit-triangle",
          file: "sol-orbit-triangle.png",
          kind: "SOLUTION",
          caption: "Solution (a): Earth at the end of the semi-minor axis",
          sourcePage: 20,
        },
        {
          key: "sol-analemma-plot",
          file: "sol-analemma-plot.png",
          kind: "SOLUTION",
          caption: "Solution (d): parametric plot of the analemma for Earth (radians)",
          sourcePage: 22,
        },
      ],
      questionPages: [8, 9],
      solutionPages: [19, 20, 21, 22],
    },
  ],
};
