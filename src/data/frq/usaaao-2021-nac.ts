// USAAAO National Astronomy Competition 2021: 10 free-response questions,
// 180 points in total, in three sections (Short, Medium, Long).
//
// Numbering restarts in each section of the paper, so question numbers
// here carry a section letter: S1–S5 (Short), M1–M3 (Medium), L1–L2
// (Long). The Short and Medium questions print one total only, so they are
// graded as a whole with (a), (b)… kept inline in the text. The Long
// questions print points for every sub-part, so those are real parts.
//
// The official solutions give worked answers but no marking scheme, so
// every rubric below is an "Astro Coach marking guide" built from the
// official solution. Solutions are the official ones, lightly cleaned up
// (ADAPTED) where the original had typos, missing numbers or garbled
// steps; each such change is noted in the solution itself.
//
// Text is written with String.raw so LaTeX needs single backslashes.
import type { FrqSeedExam } from "./types";

const YEAR = 2021;

export const usaaao2021Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: YEAR,
  examName: "National Astronomy Competition",
  slug: "usaaao-2021-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2021/03/usaaao_second_exam_2021_final.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2021/03/usaaao_second_exam_2021_solutions.pdf",
  attributionText: `Source: USA Astronomy and Astrophysics Organization (USAAAO), National Astronomy Competition ${YEAR}. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.`,
  questions: [
    // =======================================================================
    // Short Questions (5 points each)
    // =======================================================================

    // --- S1: Jupiter's intrinsic temperature --------------------------------
    {
      number: "S1",
      title: "Jupiter's Internal Heat",
      section: "Short Questions",
      topic: "Solar System",
      topics: ["Solar System", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`Jupiter emits more energy to space than it receives from the Sun. The internal heat flux of Jupiter can be quantified by the "intrinsic" temperature of the planet $T_{\text{int}}$. The effective temperature $T_{\text{eff}}$ of a planet is related to its intrinsic temperature and equilibrium temperature $T_{\text{eq}}$ by $T_{\text{eff}}^4 = T_{\text{eq}}^4 + T_{\text{int}}^4$. Given that Jupiter's albedo is 0.5, its emissivity is 1, its average separation from the Sun is 5.2 AU, and its effective temperature is 134 K, estimate its intrinsic temperature in Kelvin. You may use the Sun's surface temperature equal to 5777 K.`,
      solution: String.raw`Solve for the equilibrium temperature by equating the solar flux falling on Jupiter to the emission of a black body at temperature $T_{\text{eq}}$:

$$T_{\text{eq}} = \left(\frac{R_{\text{Sun}}}{a}\right)^{1/2}\left[\frac{(1-A)}{4\epsilon}\right]^{1/4} T_{\text{Sun}}$$

Here, $A$ is the albedo, $\epsilon$ is the emissivity and $a$ is the Jupiter–Sun separation.

$$T_{\text{eq}} = \left(\frac{6.96\times10^{8}\ \text{m}}{5.2\times1.5\times10^{11}\ \text{m}}\right)^{1/2}\left[\frac{(1-0.5)}{4}\right]^{1/4} 5777\ \text{K} = 102\ \text{K}$$

Plug in to solve for the intrinsic temperature:

$$T_{\text{int}} = \left(T_{\text{eff}}^4 - T_{\text{eq}}^4\right)^{1/4} = \left[(134\ \text{K})^4 - (102\ \text{K})^4\right]^{1/4} = 121\ \text{K}$$

Note: slightly higher values are accepted if the solar constant is used rather than the Stefan–Boltzmann law to estimate the Sun's emitted flux.`,
      rubric: String.raw`Astro Coach marking guide (5 points), based on the official solution:
- Energy balance for the equilibrium temperature (absorbed solar flux πR²(1−A)F = emitted 4πR²εσT⁴, or the equivalent formula): 2 points.
- Equilibrium temperature about 102 K (roughly 100–105 K): 1 point.
- Uses T_int = (T_eff⁴ − T_eq⁴)^{1/4}: 1 point.
- Final answer about 121 K (roughly 118–124 K; slightly higher accepted if the solar constant was used): 1 point.`,
      solutionSource: "OFFICIAL",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- S2: The solar convection zone -------------------------------------
    {
      number: "S2",
      title: "The Solar Convection Zone",
      section: "Short Questions",
      topic: "Energy & Stellar Physics",
      topics: ["Energy & Stellar Physics", "Stars & Black Holes"],
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`The convection zone of the sun is the major region of the solar interior that is closest to the surface. It is characterized by convection currents that quickly carry heat to the surface. As a pocket of gas rises, it expands and becomes less and less dense. For it to continue to rise, the temperature gradient in the sun must be steeper than the adiabatic gradient, which is the temperature that the gas would have if it were allowed to expand without any heat input.

In the sun, the adiabatic gradient satisfies $T \propto p^{0.4}$, where $T$ is the temperature and $p$ is the pressure at any given point.

The bottom of the convection zone is about 200,000 kilometers beneath the surface of the sun, and has a temperature of about $2\times10^{6}\ \text{K}$ and a density of about $200\ \text{kg/m}^3$. Estimate an upper bound for the temperature of the convection zone where the density is $1.2\ \text{kg/m}^3$ (the density of air). You may assume the ideal gas law holds in the convective zone.`,
      solution: String.raw`Since the temperature gradient is steeper than the adiabatic gradient, we can get an upper bound for the temperature by assuming the temperature gradient follows the adiabatic gradient exactly.

For a fixed amount of gas molecules, we have $p \propto \dfrac{T}{V}$ by the ideal gas law. Also, the adiabatic gradient has $T \propto p^{0.4}$, so we get

$$T \propto \left(\frac{T}{V}\right)^{0.4} = \frac{T^{0.4}}{V^{0.4}}$$

Using the fact that $V$ is inversely proportional to the density $\rho$, we have $T \propto T^{0.4}\rho^{0.4}$. Dividing both sides by $T^{0.4}$, we get $T^{0.6} \propto \rho^{0.4}$, so

$$T \propto \rho^{2/3}$$

Plugging in the numbers we are given, the temperature when the density is equal to that of air is

$$\left(2\times10^{6}\ \text{K}\right)\left(\frac{1.2\ \text{kg/m}^3}{200\ \text{kg/m}^3}\right)^{2/3} = 66000\ \text{K}$$`,
      rubric: String.raw`Astro Coach marking guide (5 points), based on the official solution:
- Explains that following the adiabatic gradient exactly gives the upper bound: 1 point.
- Combines the ideal gas law (p ∝ ρT) with T ∝ p^0.4: 1 point.
- Derives T ∝ ρ^(2/3): 2 points.
- Final answer about 66,000 K (roughly 65,000–67,000 K): 1 point.`,
      solutionSource: "OFFICIAL",
      questionPages: [2],
      solutionPages: [2, 3],
    },

    // --- S3: Surface magnitude ---------------------------------------------
    {
      number: "S3",
      title: "Surface Magnitude of a Galaxy",
      section: "Short Questions",
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Light & Spectra"],
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`Galaxies are very hard to spot, even those that are nearest to us. For instance, Andromeda, despite having an apparent magnitude of 3.44, appears very "dim" in the sky. This is because its light is very spread out, since its solid angle in the sky is so large (around 3 times that of the Sun!).

Hence, it is often useful to use the surface magnitude of a galaxy, defined as the magnitude that a certain solid angle of that galaxy has. It is usually measured in $\text{mag/arcmin}^2$.

Show that, in a non expanding universe, the surface magnitude is independent of the distance to the galaxy.`,
      solution: String.raw`Let us begin with

$$m_{\text{unit}} - m_{\text{total}} = -2.5\log\left(\frac{F_{\text{unit}}}{F_{\text{total}}}\right) = -2.5\log\left(\frac{\Omega_{\text{unit}}}{\Omega_{\text{total}}}\right)$$

$$m_{\text{unit}} = -2.5\log(\Omega_{\text{unit}}) + 2.5\log(\Omega_{\text{total}}) + m_{\text{total}}$$

where $m_{\text{unit}}$ is the surface magnitude, i.e. the magnitude of 1 unit of solid angle; $m_{\text{total}}$ is the actual magnitude of the galaxy; $F_{\text{unit}}$ is the flux from a unit solid angle; $F_{\text{total}}$ is the total flux from the galaxy; $\Omega_{\text{unit}}$ is the unit solid angle; and $\Omega_{\text{total}}$ is the total solid angle of the galaxy.

We must show that $m_{\text{unit}}$ does not depend on the distance $d$. The solid angle of the galaxy is its physical area $A$ divided by $d^2$:

$$2.5\log(\Omega_{\text{total}}) = 2.5\log\left(\frac{A}{d^2}\right) = 2.5\log(A) - 5\log(d)$$

And with the distance modulus equation (with $d$ in parsecs):

$$m_{\text{total}} = M_{\text{total}} + 5\log(d) - 5$$

where $M_{\text{total}}$ is the absolute magnitude of the galaxy. Putting everything together, the $5\log(d)$ terms cancel:

$$m_{\text{unit}} = -2.5\log(\Omega_{\text{unit}}) + 2.5\log(A) + M_{\text{total}} - 5$$

which is independent of distance, as desired. (Physically: the total flux falls as $1/d^2$, but the solid angle the light is spread over also falls as $1/d^2$, so the flux per unit solid angle stays the same.)`,
      rubric: String.raw`Astro Coach marking guide (5 points), based on the official solution:
- Relates the surface magnitude to the total magnitude through the ratio of solid angles (flux per unit solid angle): 1 point.
- Solid angle of the galaxy ∝ A/d² (falls as 1/d²): 1 point.
- Total flux ∝ 1/d², e.g. via the distance modulus m = M + 5 log d − 5: 1 point.
- Shows the distance terms cancel, leaving an expression with no d: 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [3],
    },

    // --- S4: Eccentricity from state vectors -------------------------------
    {
      number: "S4",
      title: "Eccentricity from Position and Velocity",
      section: "Short Questions",
      topic: "Gravity & Orbits",
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`An Earth satellite has the following position ($\vec{r}$) and velocity ($\vec{v}$) vectors at a given instant:

$$\vec{r} = 7000\,\hat{i} + 9000\,\hat{j}\ (\text{km})$$

$$\vec{v} = -2\,\hat{i} + 5\,\hat{j}\ (\text{km/s})$$

Calculate the eccentricity of the satellite orbit. Hint: The eccentricity of the orbit is related to total energy $E$ and angular momentum $L$ as $e = \sqrt{1 + \dfrac{2EL^2}{G^2M^2m^3}}$; where $M$ is Earth's mass and $m$ is the mass of the satellite.`,
      solution: String.raw`Work per unit mass, with $GM = 3.986\times10^{5}\ \text{km}^3/\text{s}^2$ for the Earth.

**Energy per unit mass.** $r = \sqrt{7000^2 + 9000^2} = 11402\ \text{km}$ and $v^2 = (-2)^2 + 5^2 = 29\ \text{km}^2/\text{s}^2$, so

$$\frac{E}{m} = \frac{v^2}{2} - \frac{GM}{r} = 14.5 - \frac{3.986\times10^{5}}{11402} = -20.46\ \text{km}^2/\text{s}^2$$

**Angular momentum per unit mass.** $\dfrac{L}{m} = |\vec{r}\times\vec{v}| = |x v_y - y v_x| = |7000\cdot5 - 9000\cdot(-2)| = 53000\ \text{km}^2/\text{s}$

**Eccentricity.** Dividing the hint's formula through by powers of $m$:

$$e = \sqrt{1 + \frac{2\,(E/m)\,(L/m)^2}{(GM)^2}} = \sqrt{1 + \frac{2(-20.46)(53000)^2}{(3.986\times10^{5})^2}} = \sqrt{1 - 0.723} \approx 0.53$$

Alternatively, the eccentricity is the magnitude of the Laplace–Runge–Lenz vector divided by $GMm^2$: $e = \left|\dfrac{\vec{v}\times(\vec{r}\times\vec{v})}{GM} - \hat{r}\right| \approx 0.53$.

(The official solution writes the energy per unit mass as $v^2 - GM/r$; the kinetic term should be $v^2/2$, as used here. The answer 0.53 is unchanged.)`,
      rubric: String.raw`Astro Coach marking guide (5 points), based on the official solution:
- Specific energy E/m = v²/2 − GM/r ≈ −20.5 km²/s²: 2 points.
- Specific angular momentum L/m = |r × v| = 53,000 km²/s: 1 point.
- Substitutes correctly into the eccentricity formula (or uses the Laplace–Runge–Lenz vector): 1 point.
- Final answer e ≈ 0.53 (0.51–0.55): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [4],
    },

    // --- S5: Waiting for sunset --------------------------------------------
    {
      number: "S5",
      title: "Waiting for Sunset in Chicago",
      section: "Short Questions",
      topic: "Math, Data & Coordinates",
      difficulty: "Intermediate",
      points: 5,
      text: String.raw`An astronomer who lives in Chicago ($\phi = 41.88^\circ\,\text{N}$; $\lambda = 87.63^\circ\,\text{W}$) was very bored during the day of the winter solstice in the Northern hemisphere, so he started thinking about the sunset. The astronomer could not wait to see the sunset on that day. Considering that the true solar time at his location was 2:30 pm, how long did he have to wait to see the sunset? The declination of the sun on winter solstice is $\delta = -23.44^\circ$.`,
      solution: String.raw`Consider the spherical triangle formed by the Sun, the zenith and the north pole. Let $H$ be the hour angle, $h$ the Sun's altitude and $\delta$ the declination of the Sun.

$$\cos H = \frac{\sin h - \sin\phi\sin\delta}{\cos\phi\cos\delta}$$

Since $h = 0^\circ$ at sunrise and sunset:

$$\cos H = -\tan\phi\tan\delta$$

For the winter solstice in the Northern hemisphere, $\delta = -23.44^\circ$. We get $H = \pm 67.11^\circ = 4.474\ \text{h}$. Therefore, the Sun rises 4.474 hours before true solar noon and sets 4.474 hours after true solar noon. The time the astronomer has to wait for sunset after 2:30 pm is

$$\Delta t = 12{:}00\ \text{pm} + 4.474\ \text{h} - 2{:}30\ \text{pm} = 1\ \text{h}\ 58\ \text{min}$$

The astronomer would have to wait **1 h 58 min** to see the sunset. (The longitude is not needed, because the time is already given as true solar time.)`,
      rubric: String.raw`Astro Coach marking guide (5 points), based on the official solution:
- Uses the hour-angle relation with altitude 0 at sunset: cos H = −tan φ tan δ: 2 points.
- Hour angle of sunset H ≈ 67.1° ≈ 4.47 h: 1 point.
- Sunset at about 4:28 pm true solar time (noon + H): 1 point.
- Waiting time about 1 h 58 min (1 h 55 min – 2 h 0 min accepted): 1 point.`,
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [4, 5],
    },

    // =======================================================================
    // Medium Questions
    // =======================================================================

    // --- M1: The light clock ------------------------------------------------
    {
      number: "M1",
      title: "The Light Clock",
      section: "Medium Questions",
      topic: "Energy & Stellar Physics",
      topics: ["Energy & Stellar Physics", "Miscellaneous & Space History"],
      difficulty: "Intermediate",
      points: 20,
      text: String.raw`To measure the time accurately outside the Earth, the engineers build a special clock, with the design as follows: there is a source of light that sends light particles (photons) straight to the reflector that is located at the distance $d$ away from the source. The reflector sends the photons back to their starting point, where there is a detector. This can measure the time accurately, because the speed of light $c$ is constant everywhere. Then a group of engineers built a spaceship with this special clock inside. This spaceship with a clock started to move really fast at the speed $u$. While the observer in the spaceship reported no issues with the clock inside the spaceship, the observer on the Earth has noticed that the clock is functioning differently in a fast moving spaceship than it is on Earth.

[[figure:light-clock]]

**(a)** Given that the clock is at rest, what is the total traveling time ($\Delta t_E$) of a photon from its source back to the detector?

**(b)** What is the total distance traveled by a photon $d_\gamma$ from the source back to the detector on the spaceship moving at the speed $u$ away from the Earth? (Here, we denote that the total traveling time of the photon as $\Delta t_S$)

**(c)** What is the total time $\Delta t_S$ of a photon as it travels from the source to the detector on the moving spaceship? Answer in terms of $d$, $c$, and $\beta = \frac{v}{c}$.

**(d)** If we relate $\Delta t_E$ (non-moving frame) to $\Delta t_S$ (moving frame), as follows: $\Delta t_S = \gamma\Delta t_E$, what does $\gamma$ equal to? What is significant about the range of $\gamma$?

**(e)** So far, we have only analyzed the motion on the perspective of an observer on the Earth. From the perspective of an observer on the moving spaceship, how do the time on the spaceship $\Delta t_S{}'$ and the time on the Earth $\Delta t_E{}'$ relate to each other?

**(f)** What can we conclude about the relative passing on time on two different frames that are relatively in motion to one another?`,
      figures: [
        {
          key: "light-clock",
          file: "light-clock.png",
          caption: "The light clock (top) and the clock inside the moving spaceship (bottom).",
          sourcePage: 3,
        },
      ],
      solution: String.raw`Here $v$ in $\beta = v/c$ is the spaceship's speed $u$.

**(a)** The photon travels $d$ there and $d$ back at speed $c$:

$$\Delta t_E = \frac{2d}{c}$$

**(b)** While the photon travels from the source to the reflector, the spaceship moves by $u\cdot\frac{\Delta t_S}{2}$. The photon's path to the reflector is then the hypotenuse of a right triangle (Pythagorean theorem):

$$\frac{d_\gamma}{2} = \sqrt{d^2 + \left(u\cdot\frac{\Delta t_S}{2}\right)^2} \quad\Longrightarrow\quad d_\gamma = 2\sqrt{d^2 + \left(u\cdot\frac{\Delta t_S}{2}\right)^2}$$

**(c)** The speed of light $c$ is constant everywhere, so the distance travelled by light during $\Delta t_S$ is $c\,\Delta t_S$. From part (b):

$$2\sqrt{d^2 + \left(u\cdot\frac{\Delta t_S}{2}\right)^2} = c\,\Delta t_S \;\Longrightarrow\; 4d^2 + u^2\Delta t_S^2 = c^2\Delta t_S^2 \;\Longrightarrow\; \Delta t_S^2\,(c^2 - u^2) = 4d^2$$

$$\Delta t_S = \frac{2d}{\sqrt{c^2 - u^2}} = \frac{2d}{c}\cdot\frac{1}{\sqrt{1-\beta^2}}$$

**(d)** Comparing with $\Delta t_E = 2d/c$:

$$\gamma = \frac{1}{\sqrt{1-\beta^2}}$$

Since nothing can move faster than light, $\beta$ is always less than 1. Therefore $\gamma$ is always greater than (or equal to) 1: the moving clock's tick takes longer.

**(e)** By relativity, the observer on the spaceship sees the Earth flying away at speed $u$, so the same argument applies with the roles swapped:

$$\gamma\,\Delta t_S{}' = \Delta t_E{}'$$

From the spaceship, it is the Earth's clock that runs slow.

**(f)** Time moves slower in a moving frame when observed from a frame at rest (time dilation). The effect is symmetric: each observer finds the other's clock running slow.`,
      rubric: String.raw`Astro Coach marking guide (20 points), based on the official solution:
- (a) Δt_E = 2d/c: 2 points.
- (b) Uses the spaceship's displacement u·Δt_S/2 during each half-trip and Pythagoras: 2 points; d_γ = 2√(d² + (uΔt_S/2)²): 2 points.
- (c) Sets d_γ = cΔt_S: 1 point; solves correctly: 2 points; Δt_S = (2d/c)/√(1 − β²): 1 point.
- (d) γ = 1/√(1 − β²): 2 points; explains that β < 1 so γ > 1 (moving clock ticks slower): 2 points.
- (e) γΔt_S' = Δt_E' — from the ship, the Earth clock runs slow: 3 points.
- (f) Moving clocks run slow as seen from a frame at rest (time dilation; symmetric between frames): 3 points.`,
      solutionSource: "ADAPTED",
      questionPages: [3],
      solutionPages: [6, 7],
    },

    // --- M2: Hohmann vs bi-elliptic transfer -------------------------------
    {
      number: "M2",
      title: "Getting to Jupiter",
      section: "Medium Questions",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Solar System"],
      difficulty: "Intermediate",
      points: 30,
      text: String.raw`You want to send a rocket with an instrument to analyze the atmosphere of Jupiter. In order to get there, you decide to use a Hohmann transfer orbit. $r_E = 1\ \text{AU}$ and $r_J = 5\ \text{AU}$ represent the radii of Earth's and Jupiter's circular orbits around the Sun, respectively. $m$, $M_E$, $M_J$, and $M_S$ represent the masses of your rocket, Earth, Jupiter, and Sun, respectively. Ignore planetary gravitational influences. You may use any other variables you would like if you clearly define them first. Refer to the figures at the end of the question. Show your work for all derivations.

**(a)** Explain which two (relevant) physical quantities are conserved during this transfer orbit. Write down their statements mathematically.

**(b)** How long will it take to reach Jupiter?

**(c)** Halfway through its path to Jupiter, an unrealistic comet passes right next to your rocket and its icy tail freezes your rocket fuel. What is the **maximum** amount of time that you can afford to pass until you need the fuel to be once again unfrozen?

**(d)** Knowing that this comet will come in the way, your colleague suggests a bi-elliptic transfer orbit instead, with a peak distance of $12r_E$. Write equations describing how long it will now take to reach Jupiter. Will this solution always avoid the comet?

Now that you've compared the orbital times, you want to try and calculate the difference in efficiency.

**(e)** Derive the $\delta v$ for each orbital transition in the Hohmann transfer, and sum them to find the total $\delta v$.

**(f)** Derive the $\delta v$ for each orbital transition in the Bi-elliptic transfer, and sum them to find the total $\delta v$.

**(g)** Factoring in all your previous results, which transfer would you like to use? Why?

[[figure:hohmann]]

[[figure:bi-elliptic]]`,
      figures: [
        { key: "hohmann", file: "hohmann.png", caption: "Figure 1: Hohmann Transfer", sourcePage: 4 },
        { key: "bi-elliptic", file: "bi-elliptic.png", caption: "Figure 2: Bi-elliptic Transfer", sourcePage: 4 },
      ],
      solution: String.raw`Write $M = M_S$ and let $v_1, r_1$ and $v_2, r_2$ be the rocket's speed and distance from the Sun at any two points of an orbit.

**(a)** The relevant conserved quantities are **energy** and **angular momentum** (the Sun's gravity is a central, conservative force). At perihelion and aphelion the velocity is perpendicular to the radius, so

$$L = m v_E r_E = m v_J r_J \qquad (\text{generally } L = m v_1 r_1 = m v_2 r_2 \text{ at the apsides})$$

$$E_{\text{tot}} = \frac{m v_E^2}{2} - \frac{G m M_S}{r_E} = \frac{m v_J^2}{2} - \frac{G m M_S}{r_J}$$

where $v_E$ is the rocket's speed at the Earth's orbit and $v_J$ at Jupiter's.

**(b)** Use Kepler's third law. The semi-major axis of the transfer ellipse is the average of the minimum and maximum distances from the Sun, $a = \frac{r_E + r_J}{2} = 3\ \text{AU}$. In AU and years, $P^2 = a^3$. We only travel half the ellipse (Earth's orbit to Jupiter's), so

$$T = \frac{1}{2}\left(\frac{r_E + r_J}{2}\right)^{3/2} = \frac{1}{2}(3)^{3/2}\ \text{yr} \approx 2.6\ \text{years}$$

**(c)** You can wait an **unlimited** amount of time for the fuel to unfreeze. Because we are ignoring the planets' gravity, the rocket simply stays on its elliptical orbit, with Jupiter's orbit at aphelion and Earth's orbit at perihelion. Whenever the fuel unfreezes, we wait from that point for the rocket to reach aphelion before firing the engines for the second burn.

**(d)** A bi-elliptic transfer has two half-ellipses meeting at a shared aphelion $X$ from the Sun. With $X = 12r_E$:

$$a_1 = \frac{12r_E + r_E}{2} = 6.5r_E, \qquad a_2 = \frac{12r_E + r_J}{2} = 6r_E + \frac{r_J}{2} = 8.5\ \text{AU}$$

Using the same logic as part (b), the time to reach Jupiter is

$$T = \frac{1}{2}a_1^{3/2} + \frac{1}{2}a_2^{3/2} = \frac{1}{2}\left(6.5^{3/2} + 8.5^{3/2}\right)\ \text{yr} \approx 20.7\ \text{years}$$

It will **not always** avoid the comet. The joint aphelion is a free parameter: if it were set just beyond Jupiter's orbit, the first ellipse would be almost identical to the Hohmann transfer orbit and would pass through the same region.

**(e)** Use the vis-viva equation, $v^2 = GM\left(\frac{2}{r} - \frac{1}{a}\right)$, with $a = \frac{r_E + r_J}{2}$ for the transfer ellipse. The speeds are: circular at Earth $\sqrt{GM/r_E}$; ellipse at Earth $\sqrt{GM\left(\frac{2}{r_E} - \frac{2}{r_E + r_J}\right)}$; ellipse at Jupiter $\sqrt{GM\left(\frac{2}{r_J} - \frac{2}{r_E + r_J}\right)}$; circular at Jupiter $\sqrt{GM/r_J}$. Each $\delta v$ is the difference at a transition:

$$\delta v_1 = \sqrt{GM\left(\frac{2}{r_E} - \frac{2}{r_E + r_J}\right)} - \sqrt{\frac{GM}{r_E}}, \qquad \delta v_2 = \sqrt{\frac{GM}{r_J}} - \sqrt{GM\left(\frac{2}{r_J} - \frac{2}{r_E + r_J}\right)}$$

$$\delta v_{\text{tot}} = \sqrt{GM}\left(\sqrt{\frac{2}{r_E} - \frac{2}{r_E + r_J}} - \sqrt{\frac{1}{r_E}} + \sqrt{\frac{1}{r_J}} - \sqrt{\frac{2}{r_J} - \frac{2}{r_E + r_J}}\right)$$

With $\sqrt{GM/r_E} = 29.8\ \text{km/s}$: $\delta v_1 \approx 8.7\ \text{km/s}$, $\delta v_2 \approx 5.6\ \text{km/s}$, so $\delta v_{\text{tot}} \approx 14.3\ \text{km/s}$.

**(f)** Again with vis-viva, $a_1 = \frac{r_E + X}{2}$ and $a_2 = \frac{r_J + X}{2}$:

$$\delta v_1 = \sqrt{GM}\left(\sqrt{\frac{2}{r_E} - \frac{1}{a_1}} - \sqrt{\frac{1}{r_E}}\right) \quad \text{(enter ellipse 1)}$$

$$\delta v_2 = \sqrt{GM}\left(\sqrt{\frac{2}{X} - \frac{1}{a_2}} - \sqrt{\frac{2}{X} - \frac{1}{a_1}}\right) \quad \text{(switch to ellipse 2 at } X\text{)}$$

$$\delta v_3 = \sqrt{GM}\left(\sqrt{\frac{2}{r_J} - \frac{1}{a_2}} - \sqrt{\frac{1}{r_J}}\right) \quad \text{(slow down into Jupiter's orbit)}$$

With $X = 12r_E$ (so $2/X = 1/(6r_E)$):

$$\delta v_{\text{tot}} = \sqrt{GM}\left(\sqrt{\frac{2}{r_E} - \frac{1}{a_1}} - \sqrt{\frac{1}{r_E}} + \sqrt{\frac{1}{6r_E} - \frac{1}{a_2}} - \sqrt{\frac{1}{6r_E} - \frac{1}{a_1}} + \sqrt{\frac{2}{r_J} - \frac{1}{a_2}} - \sqrt{\frac{1}{r_J}}\right)$$

Numerically: $\delta v_1 \approx 10.7$, $\delta v_2 \approx 3.2$, $\delta v_3 \approx 2.5\ \text{km/s}$, so $\delta v_{\text{tot}} \approx 16.4\ \text{km/s}$.

**(g)** Plug in $r_E = 1\ \text{AU}$ and $r_J = 5\ \text{AU}$: the Hohmann transfer takes about 2.6 years and about 14.3 km/s, while the bi-elliptic transfer takes about 20.7 years and about 16.4 km/s. The **Hohmann transfer** is both faster and more efficient ($\delta v$), so it is the better choice.

(The official solution leaves (b), (d)–(g) in symbols; the numerical values above were added by Astro Coach.)`,
      rubric: String.raw`Astro Coach marking guide (30 points), based on the official solution:
- (a) Names energy and angular momentum: 2 points; writes both conservation statements correctly: 2 points.
- (b) Transfer semi-major axis (r_E + r_J)/2 and Kepler's third law: 2 points; takes half the period, T = ½((r_E + r_J)/2)^{3/2} ≈ 2.6 yr: 2 points.
- (c) Unlimited time, with the reason (the rocket stays on the same ellipse; just wait for aphelion to burn): 3 points.
- (d) a₁ = 6.5 r_E and a₂ = (12r_E + r_J)/2: 2 points; T = ½a₁^{3/2} + ½a₂^{3/2} (≈ 20.7 yr): 2 points; not always — the joint aphelion is a free parameter and could be close to Jupiter's orbit: 1 point.
- (e) Vis-viva speeds at both ends of the transfer ellipse and both circular speeds: 3 points; correct δv₁, δv₂ and their sum (≈ 14.3 km/s if evaluated): 2 points.
- (f) Semi-major axes of both ellipses and vis-viva speeds at all transition points: 3 points; correct δv₁, δv₂, δv₃ and total (≈ 16.4 km/s if evaluated): 2 points.
- (g) Chooses the Hohmann transfer because it is both faster and needs less δv: 4 points.`,
      solutionSource: "ADAPTED",
      questionPages: [3, 4],
      solutionPages: [7, 8, 9, 10],
    },

    // --- M3: Launching a satellite from a space station --------------------
    {
      number: "M3",
      title: "Launching a Satellite from a Space Station",
      section: "Medium Questions",
      topic: "Gravity & Orbits",
      difficulty: "Advanced",
      points: 30,
      text: String.raw`A space station of mass $m$ is orbiting a planet of mass $M_0$ on a circular orbit of radius $r$. At a certain moment, a satellite of mass $m$ is launched from the space station with a relative velocity $\vec{w}$ oriented towards the center of the planet. Assume that $w < \sqrt{\dfrac{GM_0}{r}}$.

**(a)** Justify the shape of the satellite's orbit after launching and, for the satellite-planet system, determine the following quantities:

(1) Satellite's velocity relative to the planet, immediately after launch, $v$
(2) Total angular momentum of the satellite-planet system, $L_{P,Sat}$
(3) Satellite's orbit semi-major and semi-minor axes, $a_{Sat}$ and $b_{Sat}$
(4) Satellite's orbit eccentricity, $\epsilon_{Sat}$
(5) Apogee and perigee distances, $r_{max,Sat}$ and $r_{min,Sat}$
(6) Satellite's minimum velocity, $v_{min,Sat}$ and maximum velocity $v_{max,Sat}$ on it's orbit
(7) Total energy of the satellite-planet system, $E_{Sat,P}$.

**(b)** Determine the shape of the space station's orbit relative to the planet, after the satellite was launched.`,
      solution: String.raw`**(a) Velocity and shape.** The satellite's velocity relative to the planet at launch is $\vec{v} = \vec{w} + \vec{u}$, where $\vec{u}$ is the station's orbital velocity. For the circular orbit, $\frac{mu^2}{r} = \frac{GmM_0}{r^2}$, so $u = \sqrt{GM_0/r}$ (and $\omega_0 = \sqrt{GM_0/r^3}$). Since $\vec{w}$ (radial) is perpendicular to $\vec{u}$ (tangential):

$$v = \sqrt{w^2 + u^2} = \sqrt{w^2 + \frac{GM_0}{r}} > w \qquad (1)$$

The total energy of the satellite–planet system at the launch point Q is

$$E_{Q} = \frac{mv^2}{2} - \frac{GmM_0}{r} = \frac{m}{2}\left(w^2 + \frac{GM_0}{r}\right) - \frac{GmM_0}{r} = \frac{m}{2}\left(w^2 - \frac{GM_0}{r}\right) < 0$$

because $w^2 < GM_0/r$. Negative energy means a bound orbit: the satellite moves on an **ellipse** with the planet at one focus.

**Angular momentum (2).** $\vec{L} = \vec{r}\times m(\vec{w} + \vec{u})$. The angle between $\vec{r}$ and $\vec{w}$ is $180^\circ$, so $\vec{r}\times\vec{w} = 0$; the angle between $\vec{r}$ and $\vec{u}$ is $90^\circ$, so

$$L_{P,Sat} = mru = m\sqrt{GrM_0}$$

**Apsides and speeds (5), (6).** At perigee and apogee the velocity is perpendicular to the radius, so conservation of angular momentum gives

$$r_{min,Sat}\,v_{max,Sat} = \sqrt{GrM_0} = r_{max,Sat}\,v_{min,Sat}$$

Conservation of energy between Q and perigee, $\frac{1}{2}\left(w^2 - \frac{GM_0}{r}\right) = \frac{v_{max}^2}{2} - \frac{GM_0}{r_{min}}$, with $v_{max}^2 = GrM_0/r_{min}^2$, gives the quadratic

$$\left(w^2 - \frac{GM_0}{r}\right)r_{min}^2 + 2GM_0\,r_{min} - GrM_0 = 0$$

whose two roots are the perigee and apogee distances:

$$r_{min,Sat} = \frac{r\left(GM_0 - w\sqrt{GM_0 r}\right)}{GM_0 - w^2 r}, \qquad r_{max,Sat} = \frac{r\left(GM_0 + w\sqrt{GM_0 r}\right)}{GM_0 - w^2 r}$$

and then

$$v_{max,Sat} = \frac{r}{r_{min,Sat}}\sqrt{\frac{GM_0}{r}} = \frac{GM_0 - w^2 r}{GM_0 - w\sqrt{GrM_0}}\sqrt{\frac{GM_0}{r}}, \qquad v_{min,Sat} = \frac{GM_0 - w^2 r}{GM_0 + w\sqrt{GrM_0}}\sqrt{\frac{GM_0}{r}}$$

**Axes (3).** From $r_{min} + r_{max} = 2a_{Sat}$:

$$a_{Sat} = \frac{GrM_0}{GM_0 - rw^2} > r$$

Using $L = mb_{Sat}\sqrt{GM_0/a_{Sat}}$ (from energy and angular momentum conservation) and $L = m\sqrt{GrM_0}$:

$$b_{Sat} = \sqrt{GrM_0}\sqrt{\frac{a_{Sat}}{GM_0}} = r\sqrt{\frac{GM_0}{GM_0 - rw^2}}$$

**Eccentricity (4).**

$$\epsilon_{Sat} = \sqrt{1 - \frac{b_{Sat}^2}{a_{Sat}^2}} = \sqrt{1 - \frac{GM_0 - rw^2}{GM_0}} = w\sqrt{\frac{r}{GM_0}}$$

(Check: $r_{min} = a(1-\epsilon)$ and $r_{max} = a(1+\epsilon)$ agree with the roots above.)

**Energy (7).**

$$E_{Sat,P} = -\frac{GmM_0}{2a_{Sat}} = -\frac{m\left(GM_0 - rw^2\right)}{2r}$$

which matches $E_Q$ found above.

**(b)** Momentum is conserved in the launch, so the station recoils with a radial velocity $\vec{W}$ opposite to $\vec{w}$ (away from the planet). Call the station's mass after the launch $M$; momentum conservation gives $MW = mw$, so $W = \frac{m}{M}w$, and the station's speed is $V = \sqrt{W^2 + u^2}$. Its energy relative to the planet is

$$E_{Sta,P} = \frac{M}{2}\left(\frac{m^2}{M^2}w^2 + \frac{GM_0}{r}\right) - \frac{GMM_0}{r} = \frac{M}{2}\left(\frac{m^2}{M^2}w^2 - \frac{GM_0}{r}\right)$$

Since $w^2 < GM_0/r$, this is less than $\frac{1}{2}\frac{GMM_0}{r}\left(\frac{m^2}{M^2} - 1\right)$, which is not positive as long as $m \le M$. As printed, the problem gives both the station and the satellite mass $m$ (so $M = m$ and $W = w$); then $E_{Sta,P} = \frac{m}{2}\left(w^2 - \frac{GM_0}{r}\right) < 0$ exactly as for the satellite. Either way the energy is negative, so after the launch the space station also moves on an **elliptical orbit** around the planet.

(The official solution labels the station's mass $M$ with $m < M$, although the problem statement gives the station mass $m$; the version above covers both readings.)`,
      rubric: String.raw`Astro Coach marking guide (30 points), based on the official solution:
- (a) v = √(w² + GM₀/r), using u = √(GM₀/r) and w ⊥ u: 3 points.
- (a) Justifies the ellipse: total energy (m/2)(w² − GM₀/r) < 0, planet at a focus: 3 points.
- (a)(2) L = m√(GrM₀), noting r × w = 0: 3 points.
- (a)(5) Sets up energy + angular momentum conservation between launch point and apsides: 3 points; r_min and r_max = r(GM₀ ∓ w√(GM₀r))/(GM₀ − w²r): 3 points.
- (a)(6) v_max and v_min (from r_min v_max = r_max v_min = √(GrM₀)): 3 points.
- (a)(3) a = GrM₀/(GM₀ − rw²): 2 points; b = r√(GM₀/(GM₀ − rw²)): 2 points.
- (a)(4) ε = w√(r/GM₀): 2 points.
- (a)(7) E = −GmM₀/(2a) = −m(GM₀ − rw²)/(2r): 2 points.
- (b) Recoil of the station from momentum conservation: 2 points; shows the station's energy is negative, so its orbit is an ellipse: 2 points.`,
      solutionSource: "ADAPTED",
      questionPages: [4],
      solutionPages: [11, 12, 13, 14, 15],
    },

    // =======================================================================
    // Long Questions
    // =======================================================================

    // --- L1: Big Bang nucleosynthesis --------------------------------------
    {
      number: "L1",
      title: "Big Bang Nucleosynthesis",
      section: "Long Questions",
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Energy & Stellar Physics"],
      difficulty: "Advanced",
      points: 40,
      text: String.raw`In the very early universe, everything is in thermodynamic equilibrium and particles are freely created, destroyed, and converted between each other due to the high temperature. In one such process, the reaction converting between neutrons and protons happens at a very high rate. In thermal equilibrium, the relative number density of particle species is given approximately by the Boltzmann factor:

$$n_i \propto \exp\left[-\frac{E_i}{k_BT}\right],$$

where $E_i = m_ic^2$ is the rest energy. Additionally, the temperature during the radiation-dominated early universe is given by $T(t) \approx 10^{10}\ \text{K}\left(\frac{t}{1\ \text{s}}\right)^{-1/2}$, where $t$ is the time since the Big Bang.`,
      parts: [
        {
          label: "(a)(i)",
          points: 2,
          leadIn: String.raw`**(a)** At a temperature where $k_BT \approx 0.8\ \text{MeV}$, known as the *freeze-out* temperature, the neutrino interactions essentially stop, preventing further conversion between protons and neutrons.`,
          prompt: String.raw`About how long after the Big Bang did this occur?`,
          solution: String.raw`When $k_BT \approx 0.8\ \text{MeV}$,

$$T = \frac{0.8\ \text{MeV}}{k_B} = \frac{1.28\times10^{-13}\ \text{J}}{1.381\times10^{-23}\ \text{J/K}} = 9.28\times10^{9}\ \text{K}$$

Inverting $T(t)$:

$$t = \left(\frac{10^{10}\ \text{K}}{T}\right)^2\ \text{s} = 1.16\ \text{s}$$`,
          rubric: String.raw`Astro Coach marking guide (2 points): converts 0.8 MeV to T ≈ 9.3 × 10⁹ K (1 point); t ≈ 1.2 s (1.1–1.2 s) (1 point).`,
        },
        {
          label: "(a)(ii)",
          points: 2,
          prompt: String.raw`At the freeze-out temperature, what was the equilibrium ratio of the number density of neutrons to that of protons?`,
          solution: String.raw`Let $n_p$ be the number density of protons and $n_n$ that of neutrons. Then

$$\frac{n_n}{n_p} = \frac{\exp\left[-\frac{m_nc^2}{k_BT}\right]}{\exp\left[-\frac{m_pc^2}{k_BT}\right]} = \exp\left[-\frac{(m_n - m_p)c^2}{k_BT}\right]$$

Plugging in $m_nc^2 - m_pc^2 = 939.6 - 938.3 = 1.3\ \text{MeV}$ and $k_BT = 0.8\ \text{MeV}$:

$$\frac{n_n}{n_p} = e^{-1.3/0.8} = 0.197$$`,
          rubric: String.raw`Astro Coach marking guide (2 points): ratio of Boltzmann factors exp[−(m_n − m_p)c²/k_BT] (1 point); ≈ 0.20 (0.19–0.20) (1 point).`,
        },
        {
          label: "(b)",
          points: 3,
          prompt: String.raw`Free neutrons are unstable, and decay into protons with a characteristic decay time of $\tau = 886\ \text{s}$ (the time for which the number of neutrons drops to $1/e$ of the original amount). Given that helium nuclei only formed $t_{nuc} = 200\ \text{s}$ after freezing out, what was the ratio of the number density of neutrons to that of protons when the helium nuclei formed?`,
          solution: String.raw`For every proton there is initially 0.197 of a neutron. The neutrons decay as $n_n = n_{n,0}\exp\left(-\frac{t}{\tau}\right)$:

$$0.197\exp\left(-\frac{200\ \text{s}}{886\ \text{s}}\right) = 0.157$$

The decayed neutrons ($0.197 - 0.157 = 0.040$) turn into protons, so the new ratio is

$$\frac{n_n}{n_p} = \frac{0.157}{1 + 0.197 - 0.157} = 0.151$$`,
          rubric: String.raw`Astro Coach marking guide (3 points): exponential decay of the neutrons, 0.197·e^(−200/886) ≈ 0.157 (1 point); adds the decayed neutrons to the protons (1 point); ratio ≈ 0.151 (1 point; 0.157 without the proton correction earns the first point only).`,
        },
        {
          label: "(c)(i)",
          points: 5,
          leadIn: String.raw`**(c)** While trace amounts of several small nuclei were formed during Big Bang Nucleosynthesis (BBN), assume that all neutrons go into forming helium-4.`,
          prompt: String.raw`After the helium nuclei formed, what was the ratio of the number of helium-4 nuclei to the number of hydrogen nuclei?`,
          solution: String.raw`Using part (b), for every 0.151 neutrons there is 1 proton. Each helium-4 nucleus uses 2 neutrons and 2 protons, so they form $0.151/2 = 0.0755$ helium-4 nuclei, and the remaining $1 - 0.151 = 0.849$ protons are hydrogen nuclei. Thus

$$\frac{N_{\text{He}}}{N_{\text{H}}} = \frac{0.0755}{0.849} = 0.089$$`,
          rubric: String.raw`Astro Coach marking guide (5 points): each ⁴He takes 2 neutrons and 2 protons (1 point); number of He nuclei = n_n/2 ≈ 0.0755 per original proton (1 point); hydrogen left = 1 − 0.151 = 0.849 (2 points); ratio ≈ 0.089 (1 point).`,
        },
        {
          label: "(c)(ii)",
          points: 2,
          prompt: String.raw`Approximating the mass of helium-4 as 4 times that of H (for this part only), what fraction of baryonic mass in the universe is helium?

*If you weren't able to solve part (c), assume reasonable values for the initial mass fractions of hydrogen and helium for future parts.*`,
          solution: String.raw`The helium-to-hydrogen mass ratio is $4\times0.089 = 0.356$, which gives a helium mass fraction of

$$\frac{0.356}{1 + 0.356} = 26.3\%$$`,
          rubric: String.raw`Astro Coach marking guide (2 points): mass ratio 4 × 0.089 = 0.356 (1 point); helium mass fraction ≈ 26% (1 point; follow through from their (c)(i)).`,
        },
        {
          label: "(d)",
          points: 2,
          prompt: String.raw`Albert the Astronomer claims that in older galaxies, the mass fraction of hydrogen should gradually be increasing, as neutrons slowly continue to decay into protons. Is his claim correct? If not, explain.`,
          solution: String.raw`Albert is **not correct**. Only free neutrons are unstable, and the vast majority of neutrons in the universe are bound up in nuclei, particularly helium-4, where they do not decay. Furthermore, fusion in stars actually decreases the fraction of hydrogen, as explored in the following part.`,
          rubric: String.raw`Astro Coach marking guide (2 points): says the claim is wrong (1 point); explains that neutrons bound in nuclei (mostly ⁴He) are stable, and/or that stellar fusion reduces hydrogen (1 point).`,
        },
        {
          label: "(e)(i)",
          points: 4,
          leadIn: String.raw`**(e)** Suppose a certain region of a galaxy has a density of $10^{-19}\ \text{kg/m}^3$ and is composed of 70% hydrogen and 30% helium-4 by mass (ignore any heavier elements). Because the region is gravitationally bound, this density doesn't change significantly with the expansion of the universe; approximate it as constant. Assume hydrogen is converted into helium by the fusion reaction:

$$4\,{}^1\text{H}^+ + 2\text{e}^- \rightarrow {}^4\text{He}^{2+} + 2\nu_e,$$

where the electron $\text{e}^-$ and electron neutrino $\nu_e$ are of negligible mass. $^{4}\text{He}$ has a mass of $m_{He} = 3728.4\ \text{MeV}/c^2$`,
          prompt: String.raw`Over the entire time since BBN, how much energy does this process release per cubic kiloparsec? Give your answer in joules per cubic kiloparsec.`,
          solution: String.raw`Since the electron and neutrino have negligible mass, each reaction releases

$$4m_pc^2 - m_{He}c^2 = 4\cdot938.3\ \text{MeV} - 3728.4\ \text{MeV} = 24.8\ \text{MeV}$$

Hydrogen went from a density of $(1 - 0.263)\cdot10^{-19}\ \text{kg/m}^3 = 7.37\times10^{-20}\ \text{kg/m}^3$ (the BBN mass fraction from part (c)) to $0.70\cdot10^{-19}\ \text{kg/m}^3 = 7.0\times10^{-20}\ \text{kg/m}^3$, a difference of $3.7\times10^{-21}\ \text{kg/m}^3$. Each reaction uses 4 protons, so the energy released per cubic kiloparsec is

$$24.8\ \text{MeV}\cdot\frac{3.7\times10^{-21}\ \text{kg/m}^3}{4\cdot1.6726\times10^{-27}\ \text{kg}}\cdot\left(\frac{3.086\times10^{19}\ \text{m}}{1\ \text{kpc}}\right)^3\cdot\frac{1.6022\times10^{-13}\ \text{J}}{1\ \text{MeV}} = 6.5\times10^{52}\ \text{J/kpc}^3$$`,
          rubric: String.raw`Astro Coach marking guide (4 points): energy per reaction 4m_pc² − m_He c² ≈ 24.8 MeV (1 point); hydrogen density burned = (initial − 0.70) × 10⁻¹⁹ kg/m³ ≈ 3.7 × 10⁻²¹ kg/m³ using their initial fraction (1 point); number of reactions = Δρ/(4m_p) and conversion to kpc³ (1 point); ≈ 6.5 × 10⁵² J/kpc³ (1 point; follow through from their initial fraction).`,
        },
        {
          label: "(e)(ii)",
          points: 3,
          prompt: String.raw`Assuming the age of the universe is 13.8 billion years, calculate the average luminosity density in solar luminosities per cubic kiloparsec.`,
          solution: String.raw`In seconds, 13.8 billion years is $13.8\times10^{9}\cdot365.25\cdot24\cdot3600\ \text{s} = 4.35\times10^{17}\ \text{s}$. Thus the average power per cubic kiloparsec is

$$\frac{6.5\times10^{52}\ \text{J/kpc}^3}{4.35\times10^{17}\ \text{s}} = 1.50\times10^{35}\ \text{W/kpc}^3$$

In solar luminosities:

$$\frac{1.50\times10^{35}\ \text{W/kpc}^3}{3.85\times10^{26}\ \text{W}/L_\odot} = 3.9\times10^{8}\ L_\odot/\text{kpc}^3$$`,
          rubric: String.raw`Astro Coach marking guide (3 points): age in seconds ≈ 4.35 × 10¹⁷ s (1 point); power density ≈ 1.5 × 10³⁵ W/kpc³ (1 point); ≈ 3.9 × 10⁸ L☉/kpc³ (1 point; follow through from (e)(i)).`,
        },
        {
          label: "(f)",
          points: 3,
          leadIn: String.raw`Let's go back and explore how we arrived at the number $t_{nuc} \approx 200\ \text{s}$, the time at which Big Bang nucleosynthesis began. Let's define $t_{nuc}$ as the time at which half the neutrons fused with protons into deuterium ($^{2}\text{H}$), as deuterium fusion is the first step in BBN. From the Maxwell-Boltzmann equation, the relative abundances of deuterium, protons and neutrons is given by

$$\frac{n_D}{n_pn_n} = 6\left(\frac{m_nk_BT}{\pi\hbar^2}\right)^{-3/2}\exp\left(\frac{B_D}{k_BT}\right),$$

where $B_D = (m_p + m_n - m_D)\,c^2 = 2.22\ \text{MeV}$ is the energy released in a deuterium fusion reaction.`,
          prompt: String.raw`The number density of photons is given by $n_\gamma = 0.243\left(\frac{k_BT}{\hbar c}\right)^3$. Find an expression for the number density of protons $n_p$ in terms of the temperature $T$ and the baryon to photon ratio $\eta$. You may use your answer to part (b).`,
          solution: String.raw`From part (b), the ratio of neutrons to protons is 0.151. Thus the proton-to-baryon ratio is $\frac{1}{1 + 0.151} = 0.869$, i.e. $n_p = 0.869\,n_b$. By definition, $n_b = \eta\,n_\gamma = 0.243\,\eta\left(\frac{k_BT}{\hbar c}\right)^3$. We arrive at

$$n_p = 0.211\,\eta\left(\frac{k_BT}{\hbar c}\right)^3$$`,
          rubric: String.raw`Astro Coach marking guide (3 points): protons are a fraction 1/(1 + 0.151) ≈ 0.869 of baryons (1 point); n_b = η n_γ (1 point); n_p ≈ 0.211 η (k_BT/ħc)³ (1 point).`,
        },
        {
          label: "(g)",
          points: 3,
          prompt: String.raw`Find the present-day baryon to photon ratio. The CMB temperature is 2.725 K, and the present-day density parameter for baryonic matter is $\Omega_{b,0} = \frac{\rho_{b,0}}{\rho_{c,0}} = 0.04$. $\rho_c$ is the critical density of the universe, which is the density required for a flat universe; it is given by $\rho_c = \frac{3H^2}{8\pi G}$. Use $H_0 = 70\ \text{km/s/Mpc}$.`,
          solution: String.raw`First, the present-day number density of photons, plugging $T = 2.725\ \text{K}$ into the given expression:

$$n_\gamma = 0.243\left(\frac{k_B\cdot2.725\ \text{K}}{\hbar c}\right)^3 = 4.09\times10^{8}\ \text{photons/m}^3$$

Next, the critical density. With $H_0 = 70\ \text{km/s/Mpc} = 2.3\times10^{-18}\ \text{s}^{-1}$, $\rho_{c,0} = \frac{3H_0^2}{8\pi G} = 9.2\times10^{-27}\ \text{kg/m}^3$. Since $\Omega_{b,0} = 0.04$, $\rho_{b,0} = 0.04\cdot9.2\times10^{-27} = 3.7\times10^{-28}\ \text{kg/m}^3$. Baryonic matter is protons and neutrons, and $m_p \approx m_n$, so

$$n_b = \frac{3.7\times10^{-28}\ \text{kg/m}^3}{1.6726\times10^{-27}\ \text{kg}} = 0.22\ \text{baryons/m}^3$$

The baryon to photon ratio is

$$\eta = \frac{n_b}{n_\gamma} = 5.4\times10^{-10}$$`,
          rubric: String.raw`Astro Coach marking guide (3 points): n_γ ≈ 4.1 × 10⁸ m⁻³ (1 point); ρ_c ≈ 9.2 × 10⁻²⁷ kg/m³ and n_b ≈ 0.22 m⁻³ (1 point); η ≈ 5.4 × 10⁻¹⁰ (1 point).`,
        },
        {
          label: "(h)(i)",
          points: 5,
          leadIn: String.raw`**(h)** Assuming the baryon to photon ratio is fixed since the Big Bang:`,
          prompt: String.raw`Find an equation involving $T_{nuc}$ (the temperature at time $t = t_{nuc}$) and known constants.`,
          solution: String.raw`We defined $t_{nuc}$ as the time at which half the neutrons have fused into deuterium, i.e. $n_D/n_n = 1$. Setting $n_D/n_n = 1$ and plugging in our expression for $n_p$ from part (f):

$$1 = 0.211\,\eta\left(\frac{k_BT}{\hbar c}\right)^3\cdot6\left(\frac{m_nk_BT}{\pi\hbar^2}\right)^{-3/2}\exp\left(\frac{B_D}{k_BT}\right)$$

The powers of $\hbar$ cancel, leaving $6\cdot0.211\cdot\pi^{3/2} \approx 7$:

$$1 \approx 7\eta\left(\frac{k_BT_{nuc}}{m_nc^2}\right)^{3/2}\exp\left(\frac{B_D}{k_BT_{nuc}}\right)$$`,
          rubric: String.raw`Astro Coach marking guide (5 points): uses n_D/n_n = 1 at t_nuc (1 point); substitutes n_p from (f) into the Saha-type equation (2 points); simplifies to 1 ≈ 7η(k_BT/m_nc²)^{3/2} exp(B_D/k_BT) or an equivalent correct form (2 points).`,
        },
        {
          label: "(h)(ii)",
          points: 1,
          prompt: String.raw`What temperature $T_{nuc}$ does $t_{nuc} = 200\ \text{s}$ correspond to?`,
          solution: String.raw`Using $T(t) \approx 10^{10}\ \text{K}\left(\frac{t}{1\ \text{s}}\right)^{-1/2}$, we get $T(t = 200\ \text{s}) = 7\times10^{8}\ \text{K}$. The corresponding energy is $k_BT_{nuc} = 0.061\ \text{MeV}$.`,
          rubric: String.raw`Astro Coach marking guide (1 point): T ≈ 7 × 10⁸ K (k_BT ≈ 0.061 MeV).`,
        },
        {
          label: "(h)(iii)",
          points: 2,
          prompt: String.raw`Verify that this temperature solves your equation in part (h)i.`,
          solution: String.raw`Using $k_BT_{nuc} = 0.061\ \text{MeV}$:

$$7\eta\left(\frac{k_BT_{nuc}}{m_nc^2}\right)^{3/2}\exp\left(\frac{B_D}{k_BT_{nuc}}\right) = 7\cdot5.4\times10^{-10}\left(\frac{0.061\ \text{MeV}}{939.6\ \text{MeV}}\right)^{3/2}\exp\left(\frac{2.22\ \text{MeV}}{0.061\ \text{MeV}}\right) = 13$$

Because of the exponential, this expression is very sensitive to small changes in $k_BT$, so an answer of 13 is roughly consistent with 1. The exact solution is $k_BT = 0.066\ \text{MeV}$, which still corresponds to $t_{nuc} = 200\ \text{s}$ to the nearest significant figure.`,
          rubric: String.raw`Astro Coach marking guide (2 points): evaluates the expression (≈ 13) (1 point); explains that the exponential sensitivity makes this consistent with 1 (e.g. a small change in T gives exactly 1) (1 point).`,
        },
        {
          label: "(i)",
          points: 3,
          prompt: String.raw`The baryon to photon $\eta$ is a remarkably small number. One possibility is that the universe happens to prefer photons significantly over baryons. Another possibility is that a great number of quark-antiquark pairs were created in the early universe via pair production ($\gamma + \gamma \rightleftharpoons q + \bar{q}$), and a slight asymmetry of quarks over antiquarks produced a large number of photons during quark-antiquark annihilation, leaving over a small number of quarks to form into protons and neutrons. Find the quark-antiquark asymmetry

$$\delta_q \equiv \frac{n_q - n_{\bar{q}}}{n_q + n_{\bar{q}}} \ll 1$$

that would yield the baryon to photon ratio found in part (g).`,
          solution: String.raw`$2n_{\bar{q}}$ quarks and antiquarks are annihilated, producing about $2n_{\bar{q}} \approx n_q + n_{\bar{q}}$ photons. $n_q - n_{\bar{q}}$ quarks are left over to form $(n_q - n_{\bar{q}})/3$ baryons (three quarks per baryon). The resulting baryon to photon ratio is

$$\eta = \frac{(n_q - n_{\bar{q}})/3}{n_q + n_{\bar{q}}} = \frac{1}{3}\delta_q$$

Using $\eta = 5.4\times10^{-10}$, the asymmetry is $\delta_q = 1.6\times10^{-9}$: one extra quark in about 800 million quark–antiquark pairs.`,
          rubric: String.raw`Astro Coach marking guide (3 points): photons ≈ number of annihilated particles ≈ n_q + n_q̄ (1 point); baryons = (n_q − n_q̄)/3 so η = δ_q/3 (1 point); δ_q ≈ 1.6 × 10⁻⁹ (1 point).`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [5, 6],
      solutionPages: [16, 17, 18, 19],
    },

    // --- L2: The Great Conjunction -----------------------------------------
    {
      number: "L2",
      title: "The Great Conjunction",
      section: "Long Questions",
      topic: "Solar System",
      topics: ["Solar System", "Telescopes & Observing", "Light & Spectra"],
      difficulty: "Advanced",
      points: 35,
      text: String.raw`In 2020, during the day of the winter solstice for the Northern hemisphere, Jupiter and Saturn were at their minimum angular separation (approximately 6.11') during the Great Conjunction.

Data (printed at the end of the question in the paper):
- Mean orbital radius of Jupiter: 5.2 AU
- Mean orbital radius of Saturn: 9.5 AU
- Radius of Jupiter: $7.1492\times10^{7}$ meters
- Radius of Saturn: $5.8232\times10^{7}$ meters
- Apparent magnitude of the Sun: $-26.74$
- Central wavelength of visible light: 550 nm`,
      parts: [
        {
          label: "(a)",
          points: 6,
          prompt: String.raw`Consider a system with three planets in circular, concentric, and coplanar orbits around a star. Suppose that the three planets and the star are initially aligned. Will they necessarily align again after this moment? Prove your answer with quantitative arguments. Assume that the sidereal periods of all planets are rational numbers in terms of some unit period.`,
          solution: String.raw`**Yes.** The synodic period of planets 1 and 2 (planet 1 closest to the star, $T_n$ the sidereal period of planet $n$) is

$$\frac{1}{S_{1,2}} = \frac{1}{T_1} - \frac{1}{T_2} \quad\Longrightarrow\quad S_{1,2} = \frac{T_1T_2}{T_2 - T_1}$$

and likewise $S_{1,3} = \dfrac{T_1T_3}{T_3 - T_1}$. Both synodic periods are rational, since sums, differences, products and quotients of rational numbers are rational.

If the planets are aligned at $t = 0$, planets 1 and 2 are aligned at all instants $t = m\,S_{1,2}$, and planets 1 and 3 at all instants $t = n\,S_{1,3}$, with $m, n \in \mathbb{N}$. A triple alignment needs

$$m\,S_{1,2} = n\,S_{1,3} \quad\Longleftrightarrow\quad \frac{m}{n} = \frac{S_{1,3}}{S_{1,2}} = r$$

$r$ is a positive rational number, so it can be written as a ratio of two positive integers. Therefore this equation has solutions with $m, n \in \mathbb{N}$, and the planets align again periodically after $t = 0$.`,
          rubric: String.raw`Astro Coach marking guide (6 points): correct synodic periods S₁,₂ and S₁,₃ (2 points); shows they are rational (1 point); alignment condition m·S₁,₂ = n·S₁,₃ (2 points); concludes yes because the ratio is rational, i.e. a ratio of natural numbers (1 point).`,
        },
        {
          label: "(b)",
          points: 4,
          prompt: String.raw`Suppose that there were N planets instead of three in the system from item A. N is an integer greater than 3. If the orbits were still circular, concentric, and coplanar, and the planets and star were all initially aligned, would they necessarily align again afterwards? Assume that the sidereal periods of all planets are rational numbers in terms of some unit period.`,
          solution: String.raw`**Yes.** Extend the alignment condition from (a):

$$m_1S_{1,2} = m_2S_{2,3} = \dots = m_{N-1}S_{N-1,N}$$

with all $m_k$ natural numbers greater than zero. As in (a), every synodic period is rational, so each can be written as a ratio of integers $S_{k,k+1} = p_k/q_k$. Choosing $m_k$ as a multiple of $q_k$ makes every product $m_kS_{k,k+1}$ a natural number. Any set of natural numbers has a least common multiple, so we can scale each $m_k$ until every product equals that LCM. Then the alignment equality holds, which proves that all planets align again at some instant after $t = 0$.`,
          rubric: String.raw`Astro Coach marking guide (4 points): generalised alignment condition for N planets (1 point); each synodic period rational so each product can be made an integer (1 point); common multiple (LCM) argument (1 point); concludes yes (1 point).`,
        },
        {
          label: "(c)",
          points: 8,
          prompt: String.raw`In the system from (a), if the three planets were not initially aligned with respect to the star, would they necessarily be perfectly aligned at some point? Again, use quantitative arguments to prove your answer.`,
          solution: String.raw`**No, not necessarily.** Let $\theta_{i,n}$ be the initial angular position of planet $n$. Planets 1 and 2 are aligned at times $t_{1,2}$ satisfying

$$\theta_{i,1} + \frac{2\pi}{T_1}t_{1,2} + 2\pi m = \theta_{i,2} + \frac{2\pi}{T_2}t_{1,2} \quad\Longrightarrow\quad t_{1,2} = S_{1,2}\left(\frac{\theta_{i,2} - \theta_{i,1}}{2\pi} - m\right)$$

(the sign of $m$ can be absorbed; $m$ runs over integers). Likewise $t_{1,3} = S_{1,3}\left(\frac{\theta_{i,3} - \theta_{i,1}}{2\pi} - n\right)$. A triple alignment needs $t_{1,2} = t_{1,3}$. Define

$$\alpha = \frac{S_{1,3}}{S_{1,2}}, \qquad \beta = \frac{\theta_{i,2} - \theta_{i,1}}{2\pi}, \qquad \gamma = \frac{\theta_{i,3} - \theta_{i,1}}{2\pi}$$

Setting $t_{1,2} = t_{1,3}$ gives $\beta - m = \alpha(\gamma - n)$, which rearranges to

$$\alpha n - m = \delta, \qquad \delta \equiv \alpha\gamma - \beta$$

$\alpha$ depends only on the periods, so it is rational; but $\beta$ and $\gamma$ depend on the arbitrary starting positions and need not be rational, so $\delta$ can take any value. A simple counterexample: $\alpha = 2$ and $\delta = 3.5$ gives $2n - m = 3.5$. For integers $m$ and $n$, the left side is an integer, but 3.5 is not, so there is no solution. Therefore, if the three planets are not initially aligned, they might never have a triple conjunction.

(Note from the official solution: real periods need not be rational — a period of $2\pi$ s is irrational — but measured periods always have finitely many significant figures, which is why the problem allows the assumption. In practice planets have finite size, so "nearly aligned" happens far more often than perfect alignment.)`,
          rubric: String.raw`Astro Coach marking guide (8 points): alignment-time equation for a pair including the initial angles (2 points); equivalent equation for the other pair (1 point); combined condition in the form αn − m = δ (or equivalent) (2 points); explains that δ depends on the initial positions and need not be rational/compatible (1 point); valid counterexample and conclusion "no, not necessarily" (2 points).`,
        },
        {
          label: "(d)",
          points: 4,
          prompt: String.raw`Suppose that you are an astronomer who wants to use a telescope to observe the conjunction. Since you are a very skilled astronomer, you are going to build your own telescope. The only basic requirement you want to meet is that your telescope must be able to resolve the planets at the minimum separation during the conjunction. Calculate the value of all parameters of your telescope that are relevant for this goal. Do not try to calculate the values of any parameters that are not related to this requirement.`,
          solution: String.raw`The angular resolution must be less than or equal to 6.11'. Apart from the wavelength, the aperture diameter is the only telescope parameter that sets the angular resolution (Rayleigh criterion):

$$\theta = 1.22\frac{\lambda}{D} \quad\Longrightarrow\quad D = 1.22\frac{\lambda}{\theta}$$

With $\theta \le 6.11'$ and visible light centred at 550 nm:

$$D \ge 1.22\,\frac{5.50\times10^{-7}\ \text{m}}{6.11\pi/(60\times180)} = 3.78\times10^{-4}\ \text{m}$$

The diameter of the telescope must be at least $3.78\times10^{-4}$ m (0.38 mm). In other words, basically any telescope you could possibly build will meet this requirement.`,
          rubric: String.raw`Astro Coach marking guide (4 points): identifies the aperture diameter as the relevant parameter (1 point); Rayleigh criterion θ = 1.22λ/D (1 point); converts 6.11′ to radians correctly (1 point); D ≥ 3.8 × 10⁻⁴ m (1 point).`,
        },
        {
          label: "(e)",
          points: 8,
          prompt: String.raw`Calculate the total apparent magnitude of the planets together in the conjunction. Assume that the observers see Jupiter and Saturn as a single point in the sky, but Saturn is not covered (totally or partially) by Jupiter. For this item, neglect the atmospheric extinction, consider that the planets reflect isotropically, and consider that the albedos of both Jupiter and Saturn are equal to one. Also, in order to make the calculations simpler, assume that both Jupiter and Saturn were almost in opposition with respect to the Earth (even though this was not the case for this conjunction).`,
          solution: String.raw`Solar flux arriving at Jupiter and Saturn:

$$F_J = \frac{L_\odot}{4\pi r_J^2}, \qquad F_S = \frac{L_\odot}{4\pi r_S^2}$$

Each planet intercepts $F\pi R^2$ and (albedo 1) re-radiates it isotropically. Near opposition, the distances from Earth are $r_J - r_\oplus$ and $r_S - r_\oplus$, so the flux from both planets at the Earth is

$$F_{\oplus1} = \frac{F_J\pi R_J^2}{4\pi(r_J - r_\oplus)^2} + \frac{F_S\pi R_S^2}{4\pi(r_S - r_\oplus)^2} = \frac{L_\odot}{16\pi}\left(\frac{R_J^2}{r_J^2(r_J - r_\oplus)^2} + \frac{R_S^2}{r_S^2(r_S - r_\oplus)^2}\right)$$

The solar flux at the Earth is $F_{\oplus2} = \dfrac{L_\odot}{4\pi r_\oplus^2}$, so

$$\frac{F_{\oplus1}}{F_{\oplus2}} = \frac{r_\oplus^2}{4}\left(\frac{R_J^2}{r_J^2(r_J - r_\oplus)^2} + \frac{R_S^2}{r_S^2(r_S - r_\oplus)^2}\right)$$

$$= \frac{(1.496\times10^{11})^2}{4}\left(\frac{(7.1492\times10^{7})^2}{5.2^2\times4.2^2\times(1.496\times10^{11})^4} + \frac{(5.8232\times10^{7})^2}{9.5^2\times8.5^2\times(1.496\times10^{11})^4}\right) = 1.2551\times10^{-10}$$

Using Pogson's law:

$$m_{\text{Conjunction}} - m_\odot = -2.5\log\left(\frac{F_{\oplus1}}{F_{\oplus2}}\right) \;\Longrightarrow\; m_{\text{Conjunction}} = -2.5\log(1.2551\times10^{-10}) - 26.74 = -1.99$$

The apparent magnitude of the Great Conjunction is **−1.99**.

Note: while students were told to treat Jupiter and Saturn as a single point, the minimum separation of 6.11' is about 1/5 of the Moon's angular diameter, so the human eye can easily resolve it.`,
          rubric: String.raw`Astro Coach marking guide (8 points): solar flux at each planet (1 point); reflected power πR²F re-emitted isotropically over 4π (2 points); distances from Earth r − r⊕ at opposition (1 point); adds the two planets' fluxes (not magnitudes) (1 point); ratio to the solar flux at Earth ≈ 1.26 × 10⁻¹⁰ (1 point); Pogson's law with m☉ = −26.74 (1 point); m ≈ −2.0 (1 point).`,
        },
        {
          label: "(f)",
          points: 5,
          prompt: String.raw`Calculate the difference in the magnitude of the conjunction at the zenith and at a zenith distance of $15^\circ$. Assume that the zenith optical depth of Earth's atmosphere for visible light is 0.50.`,
          solution: String.raw`The optical depth is $\tau = \kappa\rho s$, where $\kappa$ is the opacity, $\rho$ the density and $s$ the path length. In the flat-atmosphere approximation (good for small zenith distances), only the path length changes: it is $d_z\sec(15^\circ)$, where $d_z$ is the path at the zenith. So

$$\tau_{15} = \tau_z\sec(15^\circ) = 0.5\sec(15^\circ) = 0.5176$$

The transmitted flux is $F_0e^{-\tau}$, so

$$\frac{F_{15}}{F_z} = \frac{F_0e^{-\tau_{15}}}{F_0e^{-\tau_z}} = e^{\tau_z - \tau_{15}} = e^{0.5 - 0.5176} = 0.9825$$

By Pogson's law:

$$\Delta m = -2.5\log\left(\frac{F_{15}}{F_z}\right) = -2.5\log(0.9825) = 1.92\times10^{-2}$$

The conjunction appears about **0.019 magnitudes** fainter at a zenith distance of $15^\circ$ than at the zenith.`,
          rubric: String.raw`Astro Coach marking guide (5 points): optical depth scales with airmass sec z (2 points); τ₁₅ ≈ 0.518 (1 point); flux ratio e^(τ_z − τ₁₅) or Δm = 1.086 Δτ (1 point); Δm ≈ 0.019 mag (1 point).`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [6, 7],
      solutionPages: [20, 21, 22, 23, 24, 25],
    },
  ],
};
