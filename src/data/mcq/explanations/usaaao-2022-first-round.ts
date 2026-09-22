import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2022 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2022-first-round-q1": {
    solution: [
      r`Hubble's scheme sorts galaxies by shape. Ellipticals are E0 (round) to E7 (cigar-shaped). Spirals are Sa (big bulge, tightly wound arms) to Sc (small bulge, loose arms), with a "B" added for a central bar. Anything shapeless is irregular; anything distorted by a collision is peculiar.`,
      r`Galaxy 1 has a large, smooth bulge and tightly wrapped arms: **Sa**. Galaxy 2 has a clear central bar with open arms: **SBb**. Galaxy 3 is a smooth, moderately flattened ellipsoid: **E3**. Galaxy 4 is a shapeless cloud of blue stars: **irregular**. Galaxy 5 is a mangled, colliding system: **peculiar**.`,
    ],
    wrongChoices: {
      A: r`Galaxy 3 is a smooth elliptical, not a peculiar galaxy, and galaxy 5, with its tidal streams from a collision, is the peculiar one, not an irregular.`,
      B: r`Galaxy 2 has an obvious bar and galaxy 3 is an elliptical, not an E4-classified galaxy 2. The order of types does not match the pictures.`,
      C: r`Galaxy 1 is a spiral with a big bulge, not an elliptical. Match each picture to its type in order.`,
      D: r`Galaxy 1's arms are tightly wound around a large bulge, which is Sa, not Sc. And galaxy 4 is an irregular, not an E2 elliptical.`,
    },
    takeaway: r`Hubble types: E0-E7 by flattening, Sa-Sc (SBa-SBc with a bar) by bulge size and arm tightness, plus irregular and peculiar.`,
  },

  "usaaao-2022-first-round-q2": {
    solution: [
      r`Aphelion distance is $r_a = a(1 + e)$, so $a = \dfrac{r_a}{1 + e} = \dfrac{5 \times 10^4}{1.995} \approx 2.5 \times 10^4$ AU.`,
      r`Vis-viva at aphelion: $v_a^2 = GM\left(\dfrac{2}{r_a} - \dfrac{1}{a}\right) = \dfrac{GM}{a}\cdot\dfrac{1 - e}{1 + e}$. With $a = 2.5 \times 10^4 \times 1.496 \times 10^{11} = 3.75 \times 10^{15}$ m and $GM = 1.32 \times 10^{20}$ m³/s², $\dfrac{GM}{a} = 3.5 \times 10^4$ m²/s².`,
      r`$v_a = \sqrt{3.5 \times 10^4 \times \dfrac{0.005}{1.995}} \approx 9$ m/s: a slow walk. Out at 50,000 AU, in the Oort cloud, the comet is barely moving.`,
    ],
    wrongChoices: {
      A: r`Too fast. At aphelion the speed is $\sqrt{GM(1 - e)/(a(1 + e))}$; with $e = 0.995$ the factor $(1 - e)/(1 + e)$ is only 0.0025.`,
      B: r`Too fast by about a factor of 2. Check the semi-major axis, $a = r_a/(1 + e)$, and keep the tiny factor $(1 - e)$.`,
      C: r`Far too fast; this is close to the **circular** speed at 25,000 AU. The comet at aphelion moves much slower than that because its orbit is so eccentric.`,
      D: r`Too fast. Recompute $\sqrt{(GM/a)(1 - e)/(1 + e)}$; the result is under 10 m/s.`,
    },
    takeaway: r`At aphelion v = √(GM(1 − e)/(a(1 + e))): a near-parabolic comet crawls at its far point.`,
  },

  "usaaao-2022-first-round-q3": {
    solution: [
      r`Kepler's second law: the line from the star sweeps equal areas in equal times, so the time from A to B is $T \times \dfrac{\text{area swept}}{\text{total area}}$.`,
      r`Going counterclockwise from A (bottom) to B (top) the comet passes the far end of the ellipse, sweeping the red region in the figure: the entire right half of the ellipse plus the triangle between the star and the two points.`,
      r`The half-ellipse has area $\dfrac{\pi ab}{2}$. The triangle has base $AB = 2b$ and height equal to the star's offset from the centre, $c = ae$, so its area is $abe$. Fraction: $\dfrac{\pi ab/2 + abe}{\pi ab} = \dfrac{1}{2} + \dfrac{e}{\pi}$.`,
    ],
    wrongChoices: {
      A: r`Half the period would be right only if the star sat at the **centre** of the ellipse. It sits at a focus, so the far half of the orbit contains more than half the swept area.`,
      C: r`This is the time for the **near** half of the orbit (from B back to A past the star), which is faster. The far half takes longer than $T/2$.`,
      D: r`Not from the geometry. The extra area beyond the half-ellipse is a triangle of area $abe$, which is a fraction $e/\pi$ of the total, not $e/2$.`,
      E: r`This is far too short; the comet must cover more than half its orbit. The triangle's fraction $e/\pi$ is added to $1/2$, not used alone.`,
    },
    takeaway: r`Time along an orbit is the swept-area fraction of the period; the far half of an ellipse takes (1/2 + e/π) T.`,
  },

  "usaaao-2022-first-round-q4": {
    solution: [
      r`On the Equator, $30^\circ$ of longitude is an arc of a great circle: $6371 \times \dfrac{30\pi}{180} \approx 3336$ km.`,
      r`At latitude $60^\circ$ the parallel is a small circle of radius $R\cos 60^\circ$, so the arc along it is half as long, $1668$ km. But the **shortest** path is a great circle, which cuts the corner and is a little shorter still.`,
      r`Spherical law of cosines: $\cos d = \sin^2 60^\circ + \cos^2 60^\circ \cos 30^\circ = 0.75 + 0.25 \times 0.866 = 0.9665$, so $d = 14.87^\circ$ and the distance is $6371 \times 0.2595 \approx 1654$ km.`,
    ],
    wrongChoices: {
      A: r`1668 km is the distance **along the parallel** of latitude, but that is not the shortest route. The great circle between the two points is slightly shorter.`,
      C: r`The first number is doubled: $30^\circ$ of a 6371 km sphere is $30/360$ of the 40,030 km circumference, about 3336 km, not 6672.`,
      D: r`These use a smaller Earth radius. With $R = 6371$ km the equatorial arc is 3336 km.`,
      E: r`The equatorial figure uses the wrong radius, and 1668 km is the arc along the parallel rather than the shorter great-circle distance.`,
    },
    takeaway: r`Distances along a parallel are not shortest; the great circle is, found with the spherical law of cosines.`,
  },

  "usaaao-2022-first-round-q5": {
    solution: [
      r`Each body's angular momentum about the centre of mass is $L = m v r$. For two bodies in mutual orbit, $r \propto 1/m$ and $v \propto 1/m$, so $L \propto \dfrac{1}{m}$: the **lighter** body carries **more** angular momentum.`,
      r`$\dfrac{L_{\text{Ek}}}{L_{\text{Do}}} = \dfrac{m_{\text{Do}}}{m_{\text{Ek}}} = \dfrac{1.4}{7} = 0.2$, so $\dfrac{L_{\text{total}}}{L_{\text{Do}}} = 1 + 0.2 = 1.2$.`,
    ],
    wrongChoices: {
      A: r`This would need the heavier asteroid to carry 25 times Do's angular momentum, but $L \propto 1/m$: the heavier body orbits closer and slower and carries **less**.`,
      B: r`This treats angular momentum as proportional to mass, giving Ek five times Do's share. It is the reverse: $L \propto 1/m$, so Ek has only a fifth of Do's.`,
      D: r`Too close to 1. Ek's share is $m_{\text{Do}}/m_{\text{Ek}} = 0.2$ of Do's, not 0.04.`,
      E: r`This is Do's share divided by the total in the wrong direction, and the ratio asked for must be greater than 1, since the total includes Do's own angular momentum.`,
    },
    takeaway: r`In a two-body orbit each body's angular momentum is inversely proportional to its mass.`,
  },

  "usaaao-2022-first-round-q6": {
    solution: [
      r`An f/9 telescope with $f = 1.0$ m has an aperture $D = 1.0/9 = 0.111$ m. Its diffraction limit is $\theta = 1.22\,\dfrac{\lambda}{D} = 1.22 \times \dfrac{5 \times 10^{-7}}{0.111} \approx 5.5 \times 10^{-6}$ rad.`,
      r`The cluster is resolved (seen as extended rather than a point) while its angular diameter exceeds this. Its diameter is $2 \times 4.1 = 8.2$ pc, so the limiting distance is $d = \dfrac{8.2}{5.5 \times 10^{-6}} \approx 1.5 \times 10^6$ pc.`,
    ],
    wrongChoices: {
      A: r`Too close. Compute the aperture from the focal ratio ($D = f/9 = 0.111$ m), then $\theta = 1.22\lambda/D$ and $d = (2R_C)/\theta$.`,
      C: r`Twice the true value. Check that the diffraction limit includes the factor 1.22 and that $D$ is 0.111 m, not 0.22 m.`,
      D: r`Too far. At this distance the cluster would subtend only about $2 \times 10^{-6}$ rad, below the telescope's resolution.`,
      E: r`Too far by a factor of four. Recompute $\theta = 1.22 \times 5 \times 10^{-7} / 0.111$ rad and divide the cluster's diameter by it.`,
    },
    takeaway: r`Aperture = focal length ÷ f-number, and an object is resolved out to distance (size) ÷ (1.22 λ/D).`,
  },

  "usaaao-2022-first-round-q7": {
    solution: [
      r`For a central transit, Earth must travel across the Sun's full diameter at its orbital speed.`,
      r`Sun's diameter: $2 \times 6.96 \times 10^5 = 1.39 \times 10^6$ km. Earth's speed: $\dfrac{2\pi \times 1.496 \times 10^8}{365.25 \times 86{,}400} \approx 29.8$ km/s.`,
      r`Duration: $\dfrac{1.39 \times 10^6}{29.8} \approx 4.67 \times 10^4$ s, which is about **13 hours**.`,
    ],
    wrongChoices: {
      A: r`A quarter of the true time. Use the Sun's full diameter (not its radius) and Earth's orbital speed of about 29.8 km/s.`,
      B: r`Twice the true time. Check the orbital speed: $2\pi \times 1$ AU per year is about 29.8 km/s, not 15.`,
      C: r`This uses the Sun's **radius** rather than its diameter. A transit across the whole disc takes twice as long.`,
      D: r`An eighth of the true time. Recompute: Sun's diameter (1.39 million km) divided by Earth's speed (29.8 km/s).`,
    },
    takeaway: r`Transit duration = (star's diameter) ÷ (planet's orbital speed) for a central crossing.`,
  },

  "usaaao-2022-first-round-q8": {
    solution: [
      r`If the planet covers 2% of the star's disc, 98% of the light still gets through: $F/F_0 = 0.98$.`,
      r`Magnitude change: $\Delta m = -2.5\log_{10}(0.98) \approx +0.022$. The star gets very slightly **fainter** (its magnitude number goes up) during the transit.`,
    ],
    wrongChoices: {
      A: r`This is $2.5\log_{10}(0.02)$, treating the 2% as the light that **remains**. The planet blocks 2%, so 98% remains.`,
      B: r`Too small by a factor of about 7. A 2% flux drop is $-2.5\log_{10}(0.98)$, about 0.02 magnitudes.`,
      D: r`Far too large; a change of 0.68 magnitudes would mean nearly half the light was blocked, not 2%.`,
      E: r`The sign is wrong (a dimming makes the magnitude **larger**) and the size is too small. Compute $-2.5\log_{10}(0.98)$.`,
    },
    takeaway: r`Δm = −2.5 log(F/F₀); a 2% dip is about 0.02 magnitudes.`,
  },

  "usaaao-2022-first-round-q9": {
    solution: [
      r`Size first: $3.56' = 1.04 \times 10^{-3}$ rad, so the diameter is $9630 \times 1.04 \times 10^{-3} \approx 10$ pc and the radius $R \approx 5$ pc $= 1.54 \times 10^{17}$ m.`,
      r`Virial theorem for a uniform sphere: $2K = |U|$ with $K = \tfrac{3}{2}M\sigma_r^2$ (three directions of motion, one measured) and $U = \tfrac{3}{5}\dfrac{GM^2}{R}$, giving $M = \dfrac{5\sigma_r^2 R}{G}$.`,
      r`$M = \dfrac{5 \times (1.62 \times 10^4)^2 \times 1.54 \times 10^{17}}{6.674 \times 10^{-11}} \approx 3.0 \times 10^{36}$ kg, about 1.5 million solar masses.`,
    ],
    wrongChoices: {
      A: r`This is $\sigma_r^2 R/G$, missing the factor of 5 that comes from the three velocity components and the uniform-sphere potential.`,
      B: r`Too small by about a factor of 3. Remember that the measured dispersion is only along the line of sight; the total is $3\sigma_r^2$, and the uniform-sphere potential adds a factor $5/3$.`,
      C: r`Too small. The virial mass for a uniform sphere is $5\sigma_r^2R/G$; check the factor and the radius (half the 10 pc diameter).`,
      E: r`Twice the true value. This comes from using the cluster's diameter (10 pc) in place of its radius (5 pc).`,
    },
    takeaway: r`Virial mass of a uniform-sphere cluster: M = 5 σ_r² R / G.`,
  },

  "usaaao-2022-first-round-q10": {
    solution: [
      r`The **scale height** is the height over which pressure falls by a factor of $e$: $H = \dfrac{R_{\text{specific}}\,T}{g}$. It does not depend on the pressure level, only on temperature, gravity and the gas.`,
      r`Jupiter's surface gravity is about $g = \dfrac{GM}{R^2} = \dfrac{6.674 \times 10^{-11} \times 1.9 \times 10^{27}}{(7.15 \times 10^7)^2} \approx 24.8$ m/s².`,
      r`$H = \dfrac{3600 \times 500}{24.8} \approx 73$ km.`,
    ],
    wrongChoices: {
      A: r`Too small. Check Jupiter's gravity (about 25 m/s², not 100) in $H = RT/g$.`,
      C: r`Too large by a factor of about 8. The specific gas constant of 3600 J/kg/K times 500 K, divided by 24.8 m/s², is a few tens of kilometres.`,
      D: r`Far too large. A scale height of thousands of kilometres would need gravity as weak as a small moon's, not Jupiter's 2.5 g.`,
      E: r`Far too large; this is a seventh of Jupiter's radius. Recompute $RT/g$ with $g \approx 25$ m/s².`,
    },
    takeaway: r`Atmospheric scale height H = RT/g; hot, light gas on a low-gravity world makes it large.`,
  },

  "usaaao-2022-first-round-q11": {
    solution: [
      r`The **altitude of the celestial pole equals your latitude**. In the picture the bright star near the centre is Polaris, with Cassiopeia's W to its upper left, as the solution figure marks.`,
      r`Set the scale with a known separation: Cassiopeia is about $30^\circ$ from Polaris, which fixes the picture's degrees per pixel. Polaris then sits about $20^\circ$ above the horizon line.`,
      r`Polaris is visible, so this is the northern hemisphere, and its altitude gives the latitude: about **20° N**.`,
    ],
    wrongChoices: {
      A: r`From $70^\circ$ S Polaris would be far below the horizon, yet it is plainly visible in the picture. Seeing Polaris at all means a northern location.`,
      B: r`Polaris cannot be seen from $20^\circ$ S; it would be $20^\circ$ below the horizon. The photo shows it well above the horizon.`,
      C: r`From $2^\circ$ N Polaris would be skimming the horizon, almost lost in the haze. In the picture it sits a comfortable $20^\circ$ up.`,
      E: r`From $70^\circ$ N Polaris would be high overhead, $70^\circ$ up. In the picture it is low, only about a fifth of the way from the horizon to the zenith.`,
    },
    takeaway: r`The altitude of Polaris above the horizon is your latitude in the northern hemisphere.`,
  },

  "usaaao-2022-first-round-q12": {
    solution: [
      r`The Sun's core hydrogen runs out first (**5**). The core contracts while a hydrogen shell burns and the star swells up the **red giant branch (3)**.`,
      r`At the tip of that branch the degenerate helium core ignites in the **helium flash (1)**. After a quieter helium-burning phase, the star climbs again as an **asymptotic giant branch (4)** star burning both shells.`,
      r`Finally it sheds its envelope and the core is left as a **white dwarf (2)**. Order: 5, 3, 1, 4, 2.`,
    ],
    wrongChoices: {
      A: r`The asymptotic giant branch comes **after** the helium flash and core helium burning, not before the red giant branch.`,
      C: r`The helium flash cannot come first: the helium core only forms after hydrogen fusion ends and the star has climbed the red giant branch.`,
      D: r`The white dwarf is the **final** stage, not the second. Nothing follows it.`,
      E: r`The red giant branch does not begin until core hydrogen is exhausted, so 5 must come before 3.`,
    },
    takeaway: r`Core hydrogen ends, red giant branch, helium flash, asymptotic giant branch, white dwarf.`,
  },

  "usaaao-2022-first-round-q13": {
    solution: [
      r`Closest distance is $a(1 - e)$ and farthest is $a(1 + e)$, so the ratio is $\dfrac{1 - e}{1 + e} = \dfrac{0.914}{1.086} \approx 0.842$.`,
    ],
    wrongChoices: {
      B: r`Not from the formula. The ratio $(1 - e)/(1 + e)$ with a small $e$ is close to 1, not to 0.2.`,
      C: r`This is the ratio the other way round, farthest over closest, $(1 + e)/(1 - e)$. The question asks closest over farthest, which must be less than 1.`,
      D: r`Not from the formula. With $e = 0.086$ the orbit is nearly circular, so the two distances differ by only about 16%.`,
      E: r`One of the listed values is correct: $(1 - 0.086)/(1 + 0.086)$.`,
    },
    takeaway: r`Perihelion over aphelion is (1 − e)/(1 + e).`,
  },

  "usaaao-2022-first-round-q14": {
    solution: [
      r`Read the plot: for the best targets at Kp = 13.5 the noise is at the bottom edge of the distribution, about 40 ppm.`,
      r`Transit depths for a Sun-sized star, using $R_\oplus/R_\odot \approx 0.0092$: a $0.5\,R_\oplus$ planet gives $(0.0046)^2 \approx 21$ ppm; a $1\,R_\oplus$ planet gives $(0.0092)^2 \approx 84$ ppm; a $10\,R_\oplus$ planet gives about 8400 ppm.`,
      r`Only the **0.5 Earth-radius** transit (21 ppm) falls below the 40 ppm noise, so it is the one we would likely miss.`,
    ],
    wrongChoices: {
      B: r`A 10 Earth-radius planet blocks nearly 1% of the star's light, 8400 ppm, two hundred times the noise. It is the easiest of all to detect.`,
      C: r`The Earth-sized planet's 84 ppm dip is about twice the 40 ppm noise for the best Kp = 13.5 targets, so it clears the 1σ threshold; only the smaller planet does not.`,
      D: r`Both of these are detectable: the Earth-sized transit is about $2\sigma$ and the 10 Earth-radius transit is enormous. Only the half-Earth-size planet is lost in the noise.`,
      E: r`The 10 Earth-radius planet is unmistakable and even the Earth-sized planet clears the threshold. Only the smallest is missed.`,
    },
    takeaway: r`Transit depth is (R_p/R_star)², and it must exceed the light curve's noise to be detected.`,
  },

  "usaaao-2022-first-round-q15": {
    solution: [
      r`Energy available: half the star's mass is fuel, and fusion converts 0.007 of the fuel's mass to energy: $E = 0.007 \times \dfrac{M}{2} c^2$.`,
      r`For the Sun: $E = 0.0035 \times 1.99 \times 10^{30} \times (3 \times 10^8)^2 \approx 6.3 \times 10^{44}$ J, and dividing by $L_\odot = 3.85 \times 10^{26}$ W gives $t_\odot \approx 1.6 \times 10^{18}$ s.`,
      r`For other masses, the fuel scales as $M$ but the luminosity scales roughly as $M^3$, so $t \propto M/M^3 = M^{-2}$: $t \approx 1.6 \times 10^{18}\ \text{s}\,(M/M_\odot)^{-2}$. Heavier stars burn out faster.`,
    ],
    wrongChoices: {
      B: r`The exponent is right but the number is too small by a factor of 5000. Check $0.007 \times 0.5 \times M_\odot c^2 / L_\odot$.`,
      C: r`The number is right but the mass dependence is backwards: fuel grows as $M$ while luminosity grows as $M^3$, so lifetime **falls** with mass, as $M^{-2}$.`,
      D: r`Both wrong: the coefficient is far too small and the lifetime must decrease with mass, since massive stars are so much more luminous.`,
      E: r`One of the listed expressions is correct: the solar value from $0.0035\,M_\odot c^2/L_\odot$ scaled as $M^{-2}$.`,
    },
    takeaway: r`Lifetime ≈ (fuel energy)/(luminosity), and with L ∝ M³ it scales as M⁻².`,
  },

  "usaaao-2022-first-round-q16": {
    solution: [
      r`The 89-day period gives the semi-major axis: $P = 89/365.25 = 0.244$ yr, so $a = P^{2/3} \approx 0.39$ AU.`,
      r`Perihelion: $r = 6.9 \times 10^6$ km $= 0.046$ AU. Vis-viva in AU units, with Earth's 29.8 km/s as the scale: $v = 29.8\sqrt{\dfrac{2}{r} - \dfrac{1}{a}} = 29.8\sqrt{\dfrac{2}{0.046} - \dfrac{1}{0.39}} = 29.8\sqrt{43.4 - 2.6}$.`,
      r`$v \approx 29.8 \times 6.39 \approx 190$ km/s, the fastest any spacecraft has ever travelled.`,
    ],
    wrongChoices: {
      A: r`Far too slow; even Earth moves at 30 km/s, and at 0.046 AU the Sun's pull is 470 times stronger.`,
      B: r`Far too slow. Use vis-viva with $r = 0.046$ AU and $a \approx 0.39$ AU; the $2/r$ term alone is over 43.`,
      C: r`This is the speed of a **circular** orbit at perihelion distance, $29.8/\sqrt{0.046}$. The probe is on a highly elliptical orbit and moves faster than circular at perihelion.`,
      E: r`This is the **escape** speed at perihelion, $29.8\sqrt{2/0.046}$. The probe is bound (its $-1/a$ term is not zero), so it moves a little slower than that.`,
    },
    takeaway: r`Get a from the period, then vis-viva at perihelion: v = 29.8 km/s × √(2/r − 1/a) with r and a in AU.`,
  },

  "usaaao-2022-first-round-q17": {
    solution: [
      r`The light curve shows a deep eclipse in late 2014 and a shallow one in early 2019, about 4.2 years apart. The two eclipses of a binary are half an orbit apart, so the period is $P \approx 8.4$ years.`,
      r`Kepler's third law in solar units: $M_{\text{total}} = \dfrac{a^3}{P^2} = \dfrac{14.8^3}{8.4^2} = \dfrac{3242}{70.6} \approx 46$ solar masses.`,
    ],
    wrongChoices: {
      A: r`Far too small. With a separation of 14.8 AU and a period under a decade, Kepler's law demands tens of solar masses.`,
      B: r`Too small; this would need a period of about 24 years, but the two eclipses in the curve are only 4.2 years apart, giving an 8.4-year period.`,
      C: r`Too small. Check the period: the deep and shallow eclipses are **half** a period apart, so $P = 2 \times 4.2 = 8.4$ years, and $a^3/P^2$ with $a = 14.8$ AU is much more than 7.`,
      D: r`Half the true value. Make sure you cubed 14.8 (about 3240) and squared 8.4 (about 71).`,
    },
    takeaway: r`Primary and secondary eclipses are half a period apart; then M_total = a³/P² in solar units.`,
  },

  "usaaao-2022-first-round-q18": {
    solution: [
      r`Two eclipses, two pieces of information. In the **deep** eclipse (1.5 magnitudes) the bright small star is completely hidden behind the large one, leaving only the large star: $F_L = 10^{-0.4 \times 1.5} = 0.25$ of the total, so $F_S = 0.75$.`,
      r`In the **shallow** eclipse (0.2 magnitudes) the small star passes in front of the large one and blocks a fraction $k^2 = (R_S/R_L)^2$ of its light: remaining flux $= F_S + F_L(1 - k^2) = 10^{-0.4 \times 0.2} = 0.83$.`,
      r`So $F_L k^2 = 1 - 0.83 = 0.17$, giving $k^2 = 0.17/0.25 = 0.67$ and $k = R_S/R_L \approx 0.82$.`,
    ],
    wrongChoices: {
      A: r`Too small. A star only a fifth the size of its companion could not block 17% of the total light during the shallow eclipse; use both eclipse depths.`,
      B: r`Not quite. From the deep eclipse the large star gives 25% of the light; from the shallow one it loses 17% of the total, so $k^2 = 0.17/0.25$, and $k = \sqrt{0.67}$.`,
      D: r`Too close to 1. Stars of nearly equal size would make the shallow eclipse block almost all of the large star's light, far more than 0.2 magnitudes.`,
      E: r`Too close to 1. The shallow eclipse only dims the system by 0.2 magnitudes; with equal radii it would dim by about 1.4 magnitudes.`,
    },
    takeaway: r`The total eclipse gives each star's share of the light; the partial eclipse then gives the radius ratio.`,
  },

  "usaaao-2022-first-round-q19": {
    solution: [
      r`Diffraction limit $\theta = 1.22\lambda/D$, so $\dfrac{\theta_{\text{HST}}}{\theta_{\text{JWST}}} = \dfrac{\lambda_{\text{HST}}/D_{\text{HST}}}{\lambda_{\text{JWST}}/D_{\text{JWST}}} = \dfrac{500\ \text{nm}/2.4\ \text{m}}{10{,}000\ \text{nm}/6.5\ \text{m}} = \dfrac{208}{1538} \approx 0.14$.`,
      r`HST's limit is the **smaller** angle, so at these wavelengths **HST** resolves finer detail. JWST's bigger mirror is outweighed by its 20-times-longer wavelength.`,
    ],
    wrongChoices: {
      A: r`Off by a factor of ten. Check the wavelength conversion: 10 µm is 10,000 nm, twenty times 500 nm, not two hundred times.`,
      C: r`This has the ratio inverted, and HST, with the smaller diffraction limit, is the sharper telescope at these wavelengths, not JWST.`,
      D: r`The ratio is inverted: $\theta_{\text{HST}}$ is smaller than $\theta_{\text{JWST}}$, so the ratio is less than 1.`,
      E: r`Inverted and off by ten. The ratio of $\lambda/D$ values is about 0.14, and HST resolves the finer detail.`,
    },
    takeaway: r`Resolution goes as λ/D: a bigger mirror helps, but a longer wavelength hurts even more.`,
  },

  "usaaao-2022-first-round-q20": {
    solution: [
      r`Pluto is lit by the Sun and seen from Earth, so its brightness scales as $\dfrac{1}{d_{\text{Sun}}^2 d_{\text{Earth}}^2}$. Since Earth's 1 AU is negligible compared with Pluto's distance, both distances are about $r$, and brightness $\propto 1/r^4$.`,
      r`Perihelion over aphelion: $\dfrac{1 - e}{1 + e} = \dfrac{0.75}{1.25} = 0.6$. Brightness ratio: $(1/0.6)^4 = 7.7$.`,
      r`$\Delta m = 2.5\log_{10}(7.7) \approx 2.2$ magnitudes brighter at perihelion than at aphelion.`,
    ],
    wrongChoices: {
      A: r`Far too small. The distance changes by a factor of 1.67, and brightness depends on the **fourth** power of distance for a reflecting body.`,
      B: r`This counts only one inverse-square factor ($r^2$), as if Pluto shone by itself. Sunlight must travel out to Pluto **and** back to Earth, giving $r^4$.`,
      D: r`Too large. Compute $2.5\log_{10}[(1.25/0.75)^4] = 10\log_{10}(1.667)$.`,
      E: r`Too large; this would need a distance ratio of about 2.6, but Pluto's is only 1.67.`,
    },
    takeaway: r`A body seen by reflected sunlight varies as 1/r⁴, so Δm = 10 log(r_far/r_near).`,
  },

  "usaaao-2022-first-round-q21": {
    solution: [
      r`Start with a circular orbit and think about what each small kick does. A **prograde** kick (1) raises the far side of the orbit; the burn point becomes perigee, at the same height as before: perigee unchanged.`,
      r`A **retrograde** kick (2) lowers the far side; the burn point becomes apogee and the perigee **drops**. A **radial** kick, inward (3) or outward (4), leaves the speed along the orbit unchanged but makes the orbit elliptical with the burn point partway between apogee and perigee, so the perigee **drops** either way.`,
      r`A kick towards the pole (5) tilts the orbital plane; to first order the orbit stays circular at the same height, so the perigee does not decrease. Three manoeuvres (2, 3 and 4) lower the perigee.`,
    ],
    wrongChoices: {
      A: r`More than one manoeuvre lowers the perigee. The retrograde kick does, and so do **both** radial kicks, which turn the circle into an ellipse dipping below the original height.`,
      B: r`This misses one of the radial kicks. An outward radial kick also produces an ellipse whose perigee lies below the original circular height, just like an inward one.`,
      D: r`This counts too many. A prograde kick makes the burn point the perigee at the original height, and a small polar kick only tilts the plane; neither lowers the perigee.`,
      E: r`Not all of them. A prograde kick only raises the apogee, and a normal (polar) kick only tilts the orbit.`,
    },
    takeaway: r`From a circular orbit, retrograde and radial kicks lower the perigee; prograde and out-of-plane kicks do not.`,
  },

  "usaaao-2022-first-round-q22": {
    solution: [
      r`Apogee depends on orbital energy and angular momentum. A **retrograde** kick (2) lowers the energy: apogee is the burn point itself, the lowest of all. A **prograde** kick (1) raises energy directly: highest apogee.`,
      r`The three perpendicular kicks (3, 4, 5) all raise the speed by the same tiny second-order amount, $v^2 \to v^2 + \Delta v^2$, so they give the **same** energy and semi-major axis. The difference is angular momentum: radial kicks (3 and 4) leave it unchanged, so the orbit becomes an ellipse with a raised apogee; a polar kick (5) also increases angular momentum, keeping the orbit nearly circular, so its apogee is raised less.`,
      r`Ordering: 2 < 5 < 3 = 4 < 1.`,
    ],
    wrongChoices: {
      A: r`The polar kick does not tie with the radial ones. It gives the same energy but more angular momentum, so a rounder orbit with a lower apogee than the radial kicks produce.`,
      B: r`A retrograde kick lowers the apogee to the burn point, while a radial kick leaves the burn point below the new apogee, so 2 and 3 are not equal; and the outward radial kick is not equal to the prograde kick.`,
      C: r`The order of 5 versus 3 and 4 is reversed. With equal energy, the polar kick's extra angular momentum makes its orbit rounder, so its apogee is **lower** than the radial kicks'.`,
      E: r`Inward and outward radial kicks of the same size give the same energy and angular momentum, hence identical apogees; they should tie.`,
    },
    takeaway: r`Same energy means same semi-major axis; more angular momentum means a rounder orbit with a lower apogee.`,
  },

  "usaaao-2022-first-round-q23": {
    solution: [
      r`Orbit size from Kepler's law: $P = 2.45$ d $= 0.0067$ yr, so $a = P^{2/3} \approx 0.036$ AU, about 7.6 solar radii.`,
      r`Equilibrium temperature with zero albedo and full heat redistribution: $T_p = T_\odot\sqrt{\dfrac{R_\odot}{2a}} = 5778\sqrt{\dfrac{1}{2 \times 7.6}} \approx 5778 \times 0.256 \approx 1480$ K.`,
      r`A typical "hot Jupiter" temperature: hot enough to glow a dull red.`,
    ],
    wrongChoices: {
      A: r`Far too cool; this would suit a planet at about 0.5 AU. At 0.036 AU the star fills a big patch of sky and the planet is scorched.`,
      B: r`Too cool. Check the semi-major axis: $(2.45/365.25)^{2/3}$ AU is about 0.036 AU, only 7.6 solar radii.`,
      C: r`Too cool. Recompute $T_\odot\sqrt{R_\odot/(2a)}$ with $a \approx 7.6$ solar radii.`,
      E: r`This omits the factor of 2 under the square root, giving the temperature of the subsolar point with no heat transport. With perfect redistribution the result is lower by $\sqrt{2}$.`,
    },
    takeaway: r`T_p = T_star √(R_star / 2a) for a black planet that spreads its heat; a 2.45-day orbit is a hot Jupiter.`,
  },

  "usaaao-2022-first-round-q24": {
    solution: [
      r`Distances from parallax: Deneb $d_1 = 1000/2.29 \approx 437$ pc; Albireo $d_2 = 1000/7.51 \approx 133$ pc.`,
      r`Angle between them on the sky: with $\Delta\alpha = 1$ h $10$ m $= 17.5^\circ$, $\cos\theta = \sin 45.3^\circ\sin 27.95^\circ + \cos 45.3^\circ\cos 27.95^\circ\cos 17.5^\circ \approx 0.926$, so $\theta \approx 22^\circ$.`,
      r`Law of cosines in the triangle Sun-Deneb-Albireo: $D^2 = 437^2 + 133^2 - 2(437)(133)\cos 22^\circ \approx 100{,}700$, so $D \approx 317$ pc.`,
    ],
    wrongChoices: {
      A: r`This is roughly the **sum** of the two distances, as if the stars were on opposite sides of the sky. They are only $22^\circ$ apart, so the triangle must be solved with the law of cosines.`,
      B: r`Too small. Even the difference of the two distances from us is about 300 pc, so the stars cannot be as close as 102 pc to each other.`,
      C: r`This is close to Deneb's distance from **us**, not the separation between the two stars.`,
      E: r`Too large. Check the angular separation (about $22^\circ$) and use $D^2 = d_1^2 + d_2^2 - 2d_1d_2\cos\theta$.`,
    },
    takeaway: r`Convert parallaxes to distances, find the angle on the sky, then use the law of cosines for the true separation.`,
  },

  "usaaao-2022-first-round-q25": {
    solution: [
      r`When Deneb is at upper culmination the local sidereal time equals Deneb's right ascension: $20$ h $41$ m.`,
      r`On the fall equinox the Sun's right ascension is $12$ h. The hour angle of any object is sidereal time minus its RA, so for the Sun: $H = 20$ h $41$ m $- 12$ h $= 8$ h $41$ m.`,
      r`Deneb culminates at about 8:41 pm local solar time on that date.`,
    ],
    wrongChoices: {
      B: r`This is the sidereal time (Deneb's RA), not the Sun's hour angle. Subtract the Sun's RA of 12 h at the fall equinox.`,
      C: r`This is the Sun's RA at the fall equinox, not its hour angle. Hour angle is sidereal time minus RA.`,
      D: r`This is not sidereal time minus the Sun's RA. Check: $20$ h $41$ m $- 12$ h $00$ m.`,
      E: r`Too large. The Sun's RA on the fall equinox is exactly 12 h; subtract it from the sidereal time of 20 h 41 m.`,
    },
    takeaway: r`Sidereal time = RA of whatever is culminating, and hour angle = sidereal time − RA.`,
  },

  "usaaao-2022-first-round-q26": {
    solution: [
      r`At midnight the part of the sky on the meridian is directly **opposite** the Sun. In the picture the Milky Way arches overhead with Vega, Deneb and Altair (the Summer Triangle) high up, and Sagittarius low in the south: the sky of a July midnight.`,
      r`The Sun is then on the far side of the celestial sphere from Sagittarius and Capricornus, which puts it in **Cancer**, as the solution figure shows.`,
    ],
    wrongChoices: {
      A: r`Scorpius is up in the night sky in the picture, low in the south. A constellation visible at midnight cannot be the one the Sun is in; the Sun is on the opposite side of the sky.`,
      B: r`Virgo is a spring constellation setting in the west at this time. The Sun is in Virgo in late September, when the midnight sky would show Pisces and Aries instead.`,
      C: r`The Big Dipper is not on the zodiac at all; the Sun never passes through it.`,
      E: r`The Sun is in Taurus in late May and early June, when the midnight sky is dominated by Scorpius and Ophiuchus on the meridian rather than the Summer Triangle overhead.`,
    },
    takeaway: r`The midnight sky is opposite the Sun: a Summer Triangle midnight means the Sun is in Cancer.`,
  },

  "usaaao-2022-first-round-q27": {
    solution: [
      r`Signal grows in proportion to exposure time, but random noise grows only as its square root, so the signal-to-noise ratio scales as $\sqrt{t}$.`,
      r`Raising S/N from 1 to 10 needs $10^2 = 100$ times the exposure: $100 \times 5 = 500$ seconds.`,
    ],
    wrongChoices: {
      A: r`Tripling the time only improves S/N by $\sqrt{3} \approx 1.7$. Ten times better needs a hundred times longer.`,
      B: r`Four times the exposure gives only twice the S/N, since S/N grows as the square root of time.`,
      C: r`Five times the exposure raises S/N by only $\sqrt{5} \approx 2.2$.`,
      D: r`Ten times the exposure raises S/N by $\sqrt{10} \approx 3.2$, not 10. Square the improvement factor to get the time factor.`,
    },
    takeaway: r`S/N grows as √t, so a 10× better image needs 100× the exposure.`,
  },

  "usaaao-2022-first-round-q28": {
    solution: [
      r`A star is circumpolar when its declination exceeds $90^\circ - \phi$, the co-latitude.`,
      r`San Francisco: $90^\circ - 37.7^\circ = 52.3^\circ$, and Dubhe's $61.75^\circ$ is larger, so it never sets: **yes**. Miami: $90^\circ - 25.8^\circ = 64.2^\circ$, and $61.75^\circ$ falls short, so Dubhe dips below the horizon for a while each day: **no**.`,
    ],
    wrongChoices: {
      A: r`Dubhe is not circumpolar from Miami: at $25.8^\circ$ N the limit is $64.2^\circ$, above Dubhe's declination, so it sets briefly each day.`,
      C: r`Backwards. The further **north** you are, the more stars are circumpolar. San Francisco, being further north than Miami, is the one where Dubhe stays up.`,
      D: r`Dubhe is circumpolar from San Francisco: its declination of $61.75^\circ$ exceeds the co-latitude of $52.3^\circ$.`,
      E: r`Declination and latitude are all you need: the circumpolar condition is simply $\delta > 90^\circ - \phi$.`,
    },
    takeaway: r`Circumpolar means declination greater than 90° minus your latitude.`,
  },

  "usaaao-2022-first-round-q29": {
    solution: [
      r`Redshift: $z = \dfrac{721.9 - 656.3}{656.3} = 0.10$. For a redshift this small, $v \approx cz = 0.10 \times 3 \times 10^5 = 3 \times 10^4$ km/s.`,
      r`Hubble's law: $d = \dfrac{v}{H_0} = \dfrac{30{,}000}{70} \approx 430$ Mpc, about 1.4 billion light-years.`,
    ],
    wrongChoices: {
      A: r`Too close by a factor of about 6.5; this would need $z \approx 0.015$. Recompute the wavelength shift: 65.6 nm out of 656.3 nm is 10%.`,
      C: r`Slightly too far; this corresponds to a Hubble constant of about 62 km/s/Mpc. With $H_0 \approx 70$ the distance is a bit under 430 Mpc.`,
      D: r`Far too distant; a galaxy at 3900 Mpc would have a redshift near 1, with its H-alpha line pushed beyond 1300 nm.`,
      E: r`Far too distant, more than the distance light could travel since... well, further than any $z = 0.1$ galaxy. Check that you used $z = 0.10$, not $z = 1.1$.`,
    },
    takeaway: r`z = Δλ/λ₀, v ≈ cz for small z, and d = v/H₀.`,
  },

  "usaaao-2022-first-round-q30": {
    solution: [
      r`Day length comes from the sunrise equation $\cos H = -\tan\phi\tan\delta$, with daylight lasting $2H$ (at $15^\circ$ per hour).`,
      r`Summer solstice ($\delta = +23.44^\circ$): $\cos H = -\tan 37.7^\circ\tan 23.44^\circ = -0.335$, so $H = 109.6^\circ$ and the day is $2 \times 109.6/15 = 14.6$ h. Winter solstice ($\delta = -23.44^\circ$): $\cos H = +0.335$, $H = 70.4^\circ$, day $= 9.4$ h.`,
      r`Difference: $14.6 - 9.4 = 5.2$ h, about **5 h 12 min**.`,
    ],
    wrongChoices: {
      A: r`Too small; this would suit a latitude near $20^\circ$. At $37.7^\circ$ the seasonal swing is over five hours.`,
      B: r`Too small. Compute $H$ at both solstices from $\cos H = \mp\tan 37.7^\circ\tan 23.44^\circ$ and double each before subtracting.`,
      C: r`Too small. The longest day at this latitude is about 14.6 h and the shortest about 9.4 h.`,
      E: r`Too large; this would need a latitude near $45^\circ$. Recheck $\tan 37.7^\circ \times \tan 23.44^\circ \approx 0.335$.`,
    },
    takeaway: r`Day length is 2H/15 hours with cos H = −tan φ tan δ; the solstice difference grows with latitude.`,
  },
};
