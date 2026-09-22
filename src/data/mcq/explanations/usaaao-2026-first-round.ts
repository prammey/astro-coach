import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2026 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2026-first-round-q1": {
    solution: [
      r`Differentiate each component: $\vec a = \dfrac{d\vec v}{dt} = v_0\omega\left(-\sin\omega t\,\hat i + \cos\omega t\,\hat j\right)$.`,
      r`Its magnitude is $v_0\omega\sqrt{\sin^2 + \cos^2} = v_0\omega$, and $\vec v\cdot\vec a = v_0^2\omega(-\cos\omega t\sin\omega t + \sin\omega t\cos\omega t) = 0$: the acceleration is **perpendicular** to the velocity, pointing towards the centre. That is centripetal acceleration, $v^2/r$ with $r = v_0/\omega$.`,
    ],
    wrongChoices: {
      A: r`Parallel acceleration would change the speed. In uniform circular motion the speed is constant, so the acceleration must be perpendicular, only changing the direction.`,
      C: r`A constant **speed** does not mean zero acceleration; the velocity's **direction** is changing continuously, and that requires acceleration.`,
      D: r`The dot product is zero: $-\cos\omega t\sin\omega t + \sin\omega t\cos\omega t = 0$.`,
      E: r`The acceleration points towards the centre of the circle, not along any fixed direction $\hat n$.`,
    },
    takeaway: r`Uniform circular motion has acceleration v₀ω, perpendicular to the velocity, towards the centre.`,
  },

  "usaaao-2026-first-round-q2": {
    solution: [
      r`The Roche limit, inside which tides tear a body apart, is $d \approx R_{\text{star}}\left(\dfrac{2\rho_{\text{star}}}{\rho_{\text{planet}}}\right)^{1/3}$. A **less dense** planet is easier to pull apart, so it is destroyed at a greater distance: the Roche limit **increases**.`,
      r`The other statements are false: speed peaks at perihelion, eccentric orbits are ellipses, the period depends only on $a$, and only $L_4$ and $L_5$ are stable.`,
    ],
    wrongChoices: {
      A: r`Energy conservation gives the **highest** speed at perihelion, where the potential energy is lowest, not at aphelion.`,
      B: r`Any nonzero eccentricity makes the orbit an ellipse, not a circle.`,
      C: r`Kepler's third law depends only on the semi-major axis: $P^2 \propto a^3$. Eccentricity does not appear.`,
      E: r`$L_1$, $L_2$ and $L_3$ are unstable saddle points; only $L_4$ and $L_5$ are stable (and only for a large enough mass ratio).`,
    },
    takeaway: r`Roche limit ∝ (ρ_star/ρ_planet)^(1/3): fluffier bodies are torn apart farther out.`,
  },

  "usaaao-2026-first-round-q3": {
    solution: [
      r`For a circular orbit, $\dfrac{v^2}{r} = \dfrac{GM(r)}{r^2}$, so $M(r) = \dfrac{v^2 r}{G}$.`,
      r`If $v$ is constant beyond $r_0$, the enclosed mass keeps growing **linearly** with $r$. The visible stars thin out much faster than that, so most of the extra mass is unseen dark matter in an extended halo (with density $\rho \propto 1/r^2$).`,
    ],
    wrongChoices: {
      A: r`For $M \propto r$ the density must fall as $1/r^2$, not faster. Faster than $1/r^2$ would make the rotation curve drop.`,
      B: r`Constant enclosed mass gives a Keplerian fall-off, $v \propto r^{-1/2}$, not a flat curve.`,
      C: r`The whole point of flat rotation curves is that the light does **not** trace the mass; the luminosity drops off while the mass keeps growing.`,
      E: r`A central black hole is irrelevant to the outer rotation curve; its mass is negligible compared with the galaxy's, and its presence is neither required nor excluded.`,
    },
    takeaway: r`A flat rotation curve means M(r) ∝ r: mass keeps piling up where there is little light.`,
  },

  "usaaao-2026-first-round-q4": {
    solution: [
      r`First find the hemisphere. There is no Polaris near the north point, and the familiar northern-sky patterns are absent, while the Southern Cross (Crux) and its bright pointer stars are visible: this is the **southern** hemisphere.`,
      r`The long axis of the Cross points to the south celestial pole, about 4.5 Cross-lengths away. On the map that pole lands about $20^\circ$ above the horizon.`,
      r`The altitude of the celestial pole equals your latitude, so you are at about **20° S**.`,
    ],
    wrongChoices: {
      A: r`From $40^\circ$ N Polaris would be $40^\circ$ up and the Southern Cross could never rise. Neither matches the map.`,
      B: r`From $20^\circ$ N Polaris would be visible $20^\circ$ above the northern horizon; it is not on the map, and Crux is.`,
      C: r`On the equator both celestial poles sit on the horizon, and the Cross would only just clear it. Here the south pole is well up.`,
      E: r`From $40^\circ$ S the south celestial pole would be $40^\circ$ up and Crux circumpolar high in the sky, higher than the map shows.`,
    },
    takeaway: r`Find the celestial pole (with Polaris or the Southern Cross); its altitude is your latitude.`,
  },

  "usaaao-2026-first-round-q5": {
    solution: [
      r`The Moon is a thin **waning crescent** sitting in Leo. The lit edge faces the Sun, and a thin crescent is only about $30^\circ$ to $60^\circ$ from the Sun along the ecliptic, on the sunward side.`,
      r`Leo lies at ecliptic longitude around $150^\circ$; the Sun is about $50^\circ$ to $60^\circ$ further east, near longitude $200^\circ$ to $210^\circ$, in Libra or early Scorpius.`,
      r`The Sun is there in late October and **November**.`,
    ],
    wrongChoices: {
      A: r`In January the Sun is in Sagittarius, at longitude about $280^\circ$, more than $120^\circ$ from Leo, far too far for a thin crescent Moon to be in Leo.`,
      B: r`In April the Sun is in Pisces/Aries, on the **other** side of Leo. A waning crescent would then be in Aquarius, not Leo.`,
      C: r`In July the Sun is in Gemini/Cancer, just west of Leo. A Moon in Leo would then be a thin **waxing** crescent, lit on the other side.`,
      D: r`In September the Sun is in Virgo, only $30^\circ$ east of Leo. A Moon in Leo would be a barely visible sliver right next to the Sun.`,
    },
    takeaway: r`A crescent Moon points to the Sun: it lies a few tens of degrees along the ecliptic towards it, which fixes the season.`,
  },

  "usaaao-2026-first-round-q6": {
    solution: [
      r`A waning crescent Moon rises only a few hours **before the Sun** and is seen low in the eastern sky before dawn.`,
      r`On the map the crescent is in the east, still fairly low, with the Sun some $50^\circ$ below it along the ecliptic. That puts sunrise a few hours away: about **4:00 AM**.`,
    ],
    wrongChoices: {
      A: r`At 8 PM a waning crescent is still far below the horizon; it does not rise until the small hours.`,
      B: r`At 10 PM the waning crescent has not yet risen; the evening sky shows waxing phases, not waning ones.`,
      C: r`At midnight only Moons near full or gibbous are high; a waning crescent rises well after midnight.`,
      D: r`At 2 AM the crescent may just be rising, but the map shows it clearly up in the east, a couple of hours later.`,
    },
    takeaway: r`Waning crescents are morning Moons, seen in the east in the hours before sunrise.`,
  },

  "usaaao-2026-first-round-q7": {
    solution: [
      r`Peak wavelength $\propto R_s \propto M$, so by Wien's law the temperature is $T \propto \dfrac{1}{M}$.`,
      r`The emitting area is $A \propto R_s^2 \propto M^2$. Stefan-Boltzmann: $P \propto AT^4 \propto M^2 \times M^{-4} = M^{-2}$.`,
      r`Smaller black holes are hotter and, despite their tiny size, radiate far more power.`,
    ],
    wrongChoices: {
      A: r`Too steep. Combine area ($M^2$) with $T^4$ ($M^{-4}$): the net exponent is $-2$.`,
      B: r`This is $T^4$ alone, forgetting the emitting area, which grows as $M^2$ and partly compensates.`,
      C: r`Not from the scalings. $M^2 \times M^{-4} = M^{-2}$, not $M^{-3}$.`,
      E: r`Too shallow. The $T^4$ dependence with $T \propto 1/M$ dominates over the $M^2$ area.`,
    },
    takeaway: r`Hawking power scales as M⁻²: small black holes shine brightest.`,
  },

  "usaaao-2026-first-round-q8": {
    solution: [
      r`Mass-energy is lost at the radiated rate: $\dfrac{dM}{dt} = -\dfrac{P}{c^2} \propto -M^{-2}$.`,
      r`So the mass **decreases**, and as $M$ shrinks the loss rate $\propto 1/M^2$ grows: the curve gets ever steeper, plunging to zero at the end. A falling curve that gets steeper is **concave down**.`,
    ],
    wrongChoices: {
      A: r`Hawking radiation removes mass, so the curve decreases.`,
      B: r`A radiating black hole loses energy, so its mass cannot stay constant (unless it is fed).`,
      D: r`A straight line would need a constant loss rate, but the rate grows as $1/M^2$ as the hole shrinks.`,
      E: r`Concave up would mean the loss **slows** as the mass falls. It does the opposite: smaller holes evaporate faster and faster.`,
    },
    takeaway: r`With dM/dt ∝ −M⁻², evaporation accelerates: the mass curve falls and bends downward.`,
  },

  "usaaao-2026-first-round-q9": {
    solution: [
      r`Kepler's third law in years and AU: $P^2 = a^3$, so $P = a^{3/2} = (2.77)^{3/2} \approx 4.6$ years.`,
    ],
    wrongChoices: {
      A: r`This would be $P^2 = a$, not $P^2 = a^3$.`,
      C: r`Too steep; the exponent from $P^2 = a^3$ is $3/2$, not $5/2$.`,
      D: r`This is the inverse relation, $a = P^{2/3}$, used the wrong way round.`,
      E: r`Not a Kepler exponent. Cube the distance and take the square root.`,
    },
    takeaway: r`P = a^(3/2) in years and AU.`,
  },

  "usaaao-2026-first-round-q10": {
    solution: [
      r`A satellite fixed over one point must orbit once per sidereal day, $T = 86{,}164$ s. Kepler's law for a circular orbit: $r^3 = \dfrac{GMT^2}{4\pi^2} = \dfrac{6.674 \times 10^{-11} \times 5.97 \times 10^{24} \times (86{,}164)^2}{4\pi^2} \approx 7.5 \times 10^{22}$ m³.`,
      r`$r \approx 4.22 \times 10^7$ m from Earth's **centre**. Height above the surface: $4.22 \times 10^7 - 6.37 \times 10^6 \approx 3.58 \times 10^7$ m, about 35,800 km. The satellite's mass does not matter.`,
    ],
    wrongChoices: {
      A: r`Ten times too small. Check the cube root: $r^3 \approx 7.5 \times 10^{22}$ m³ gives $r \approx 4.2 \times 10^7$ m.`,
      B: r`Absurdly small; a slip in the powers of ten. The orbital radius is tens of thousands of kilometres.`,
      C: r`This is the orbital radius measured from Earth's **centre**. The question asks for the height above the **surface**, so subtract Earth's radius.`,
      E: r`One of the listed values is correct: the geostationary radius minus Earth's radius.`,
    },
    takeaway: r`Geostationary radius from r³ = GMT²/4π² with a sidereal day, minus Earth's radius for the altitude.`,
  },

  "usaaao-2026-first-round-q11": {
    solution: [
      r`The map shows the autumn sky: the Great Square of Pegasus, Andromeda, and to the west Hercules and Corona Borealis, with the Southern Fish low in the south.`,
      r`Comparing with the real sky, the bright stars missing are **Alpheratz** (α And, the corner of the Great Square), **Alphecca** (α CrB, the jewel of the Northern Crown), **Kornephoros** (β Her, the brightest star of Hercules) and **Fomalhaut** (α PsA), as marked in the solution figure.`,
    ],
    wrongChoices: {
      B: r`Altair (α Aql) and Vega (α Lyr) are still on the map, and β Cet is not among the missing stars.`,
      C: r`Altair is present, and α Peg (Markab) is still drawn at its corner of the Great Square.`,
      D: r`Markab (α Peg) and Rasalhague (α Oph) are both present on the map; only β Her from this list is missing.`,
      E: r`Deneb (α Cyg) is clearly present, and α Aqr and α Her are not among the erased stars.`,
    },
    takeaway: r`Know the brightest star of each constellation: Alpheratz, Alphecca, Kornephoros and Fomalhaut mark Andromeda, Corona Borealis, Hercules and Piscis Austrinus.`,
  },

  "usaaao-2026-first-round-q12": {
    solution: [
      r`Three numbers pin down the curve. **Depth**: Jupiter blocks $(R_J/R_\odot)^2 = (71{,}500/696{,}000)^2 = 0.0106$ of the light, a dip of $-2.5\log_{10}(0.9894) \approx 0.0115$ mag.`,
      r`**Duration**: Jupiter crosses the Sun's diameter at 13.1 km/s. From first to last contact it must cover the Sun's diameter plus its own: $\dfrac{1.39 \times 10^6 + 1.43 \times 10^5}{13.1} \approx 1.2 \times 10^5$ s $\approx 33$ h. **Ingress/egress**: crossing its own diameter takes $\dfrac{1.43 \times 10^5}{13.1} \approx 3$ h.`,
      r`Curve **A** shows a dip of $0.0115$ mag, lasting about 33 h with 3-hour sloping edges.`,
    ],
    wrongChoices: {
      B: r`Curve B dips by about 0.2 mag (blocking 17% of the light) and lasts only about 15 hours: far too deep and too short for Jupiter.`,
      C: r`Curve C has the right depth but lasts over 40 hours, longer than Jupiter's crossing of the Sun's diameter at 13 km/s allows.`,
      D: r`Curve D dips by only 0.0004 mag, twenty-five times too shallow: that would be a planet a fifth of Jupiter's radius.`,
      E: r`Curve E dips by about 0.17 mag, blocking 15% of the light, far more than a Jupiter-sized planet could.`,
    },
    takeaway: r`A transit light curve is set by depth (R_p/R_star)², total duration (star + planet diameters ÷ speed) and ingress time (planet diameter ÷ speed).`,
  },

  "usaaao-2026-first-round-q13": {
    solution: [
      r`The Sun travels along the ecliptic, so the closest it ever gets to a star is the star's distance from the ecliptic: its **ecliptic latitude** $\beta$.`,
      r`Converting equatorial to ecliptic coordinates (see the solution figure's spherical triangle): $\sin\beta = \sin\delta\cos\varepsilon - \cos\delta\sin\varepsilon\sin\alpha$, with $\delta = 40.95^\circ$, $\alpha = 3$ h $08$ m $= 47^\circ$ and $\varepsilon = 23.44^\circ$.`,
      r`$\sin\beta = 0.655 \times 0.917 - 0.755 \times 0.398 \times 0.731 = 0.601 - 0.220 = 0.381$, so $\beta \approx 22.4^\circ = 22^\circ 26'$.`,
    ],
    wrongChoices: {
      A: r`Too small. Compute the ecliptic latitude with $\sin\beta = \sin\delta\cos\varepsilon - \cos\delta\sin\varepsilon\sin\alpha$; the second term is only about 0.22.`,
      B: r`Too small. Check $\sin\alpha$ with $\alpha = 47^\circ$ and the value of $\sin\delta\cos\varepsilon \approx 0.60$.`,
      D: r`Too large. Algol's declination is $41^\circ$, but its RA of about $47^\circ$ places it where the ecliptic runs well north of the equator, reducing its ecliptic latitude.`,
      E: r`Too large. The ecliptic latitude is smaller than the declination here because the ecliptic climbs towards Algol's part of the sky.`,
    },
    takeaway: r`The Sun's minimum separation from a star is the star's ecliptic latitude.`,
  },

  "usaaao-2026-first-round-q14": {
    solution: [
      r`**Optically thin**: every particle's radiation escapes, so the total power is just (number of particles) × (emission per particle). Nothing in that changes when the cloud expands, so the power stays **constant**.`,
      r`**Optically thick**: only the surface layer's radiation escapes, like a blackbody, so the power is $\sigma T^4 \times$ surface area. Doubling the radius quadruples the area, so the power **rises** four-fold.`,
    ],
    wrongChoices: {
      A: r`The optically thick case does change: an opaque cloud radiates from its surface, and that surface has grown four times larger.`,
      C: r`Both directions are wrong. Thin emission is unchanged (same particles, same emissivity), and thick emission grows with the surface area.`,
      D: r`Swapped. Optically thin power is set by the particle count and does not change; optically thick power follows the surface area and increases.`,
      E: r`The optically thin case does not change: all the radiation already escapes, and the particles and their emissivity are the same.`,
    },
    takeaway: r`Thin gas radiates per particle (independent of size); thick gas radiates per unit surface area.`,
  },

  "usaaao-2026-first-round-q15": {
    solution: [
      r`Kepler's third law: $T \propto a^{3/2}$, so small changes obey $\dfrac{\delta T}{T} = \dfrac{3}{2}\dfrac{\delta a}{a}$.`,
      r`$\delta T = \dfrac{3}{2} \times 27.32\ \text{d} \times \dfrac{0.038\ \text{m}}{3.844 \times 10^8\ \text{m}} = 1.5 \times 2.36 \times 10^6\ \text{s} \times 9.9 \times 10^{-11} \approx 3.5 \times 10^{-4}$ s, about **350 µs** per year.`,
    ],
    wrongChoices: {
      A: r`This omits the factor $3/2$ from Kepler's law; $\delta T/T$ is $1.5$ times $\delta a/a$, not equal to it.`,
      C: r`Not from the numbers. Use $\delta T = 1.5 \times T \times \delta a/a$ with $T = 27.32$ days in seconds.`,
      D: r`Twice the true value. Check the factor: $3/2$, not 3.`,
      E: r`A thousand times too large. The fractional change in $a$ is only $10^{-10}$ per year, so the period changes by a fraction of a millisecond.`,
    },
    takeaway: r`For small changes, δT/T = (3/2) δa/a.`,
  },

  "usaaao-2026-first-round-q16": {
    solution: [
      r`Sidereal month from Kepler's law: $P = 2\pi\sqrt{\dfrac{a^3}{GM}} = 2\pi\sqrt{\dfrac{(7.70 \times 10^8)^3}{6.674 \times 10^{-11} \times 4.84 \times 10^{25}}} \approx 2.36 \times 10^6$ s $= 27.3$ days.`,
      r`The synodic month (new moon to new moon) must also make up for the planet's motion around its star: $\dfrac{1}{S} = \dfrac{1}{27.34} - \dfrac{1}{290}$, giving $S \approx 30.2$ days.`,
    ],
    wrongChoices: {
      A: r`Too short; the synodic month is always **longer** than the sidereal month for a prograde moon.`,
      B: r`This is the **sidereal** month. The synodic month adds the time needed to catch up with the star's apparent motion: $1/S = 1/P_m - 1/P_{\text{year}}$.`,
      C: r`This is Earth's synodic month. Kepler-22b's year is shorter than Earth's, so the catch-up correction is larger and its synodic month is longer.`,
      E: r`Too long. The correction term $1/290$ is small; the synodic month exceeds the 27.3-day sidereal month by only about 3 days.`,
    },
    takeaway: r`Sidereal month from Kepler's law, then synodic month from 1/S = 1/P_moon − 1/P_year.`,
  },

  "usaaao-2026-first-round-q17": {
    solution: [
      r`The black hole adds energy to the cluster. By the **virial theorem**, a bound cluster in equilibrium has $E = -K = U/2$: adding energy makes $E$ less negative, so the cluster settles into a state with **higher** (less negative) potential energy, i.e. the stars end up **farther apart** (II), and **lower** kinetic energy, i.e. **slower** relative motions (III).`,
      r`The stars' own internal temperatures and spectra are untouched by a change in their orbits, so statement I is false.`,
    ],
    wrongChoices: {
      A: r`A star's colour is set by its surface temperature, which does not change because its orbit in the cluster changed. And II and III are both true.`,
      B: r`II is true, but so is III: by the virial theorem a cluster with more total energy has less kinetic energy, so slower stars.`,
      C: r`III is true, but so is II: the cluster expands to a less bound configuration.`,
      E: r`II is right, but the stars' spectra do not change. III, the lower velocities, is the other true statement.`,
    },
    takeaway: r`Add energy to a bound cluster and, by the virial theorem, it expands and its stars slow down.`,
  },

  "usaaao-2026-first-round-q18": {
    solution: [
      r`The CMB temperature scales with redshift as $T = T_0(1 + z)$.`,
      r`$T = 2.725 \times (1 + 14.44) = 2.725 \times 15.44 \approx 42.07$ K.`,
    ],
    wrongChoices: {
      A: r`This **divides** by $(1 + z)$; the universe was hotter in the past, not colder.`,
      B: r`This multiplies by $z$ instead of $1 + z$. The scale factor ratio is $1 + z = 15.44$.`,
      D: r`Too hot; this would be $z \approx 208$. Multiply 2.725 K by 15.44.`,
      E: r`Far too hot; that is nearly the temperature at recombination ($z \approx 1100$).`,
    },
    takeaway: r`CMB temperature at redshift z is T₀(1 + z).`,
  },

  "usaaao-2026-first-round-q19": {
    solution: [
      r`Add up spherical shells: $M = \int_0^R 4\pi r^2\rho(r)\,dr = 4\pi\rho_c\int_0^R\left(r^2 - \dfrac{r^5}{R^3}\right)dr$.`,
      r`$= 4\pi\rho_c\left(\dfrac{R^3}{3} - \dfrac{R^3}{6}\right) = 4\pi\rho_c\dfrac{R^3}{6} = \dfrac{2\pi}{3}\rho_c R^3$.`,
      r`So $\rho_c = \dfrac{3M}{2\pi R^3}$, twice the mean density $\dfrac{3M}{4\pi R^3}$.`,
    ],
    wrongChoices: {
      A: r`Too large by a factor of 2. Check the integral: $\int_0^R r^2\,dr = R^3/3$ and $\int_0^R r^5/R^3\,dr = R^3/6$, which combine to $R^3/6$.`,
      B: r`This would come from a different density profile (such as $1 - r^2/R^2$). With $1 - r^3/R^3$ the integral gives $R^3/6$.`,
      D: r`Not from this profile. Integrate $r^2 - r^5/R^3$ from 0 to $R$.`,
      E: r`Not from this profile; the two terms of the integral are $R^3/3$ and $R^3/6$.`,
    },
    takeaway: r`Mass is the integral of 4πr²ρ(r) dr; for ρ = ρ_c(1 − r³/R³) the central density is twice the mean.`,
  },

  "usaaao-2026-first-round-q20": {
    solution: [
      r`Main-sequence lifetime falls steeply with mass, roughly as $M^{-2.5}$: the Sun lasts about 10 billion years, a 2-solar-mass star only about 1.5 billion.`,
      r`A star that formed 13 billion years ago and is **still** burning hydrogen must have a lifetime longer than that, which means a mass below about one solar mass: certainly **under 2 solar masses**.`,
    ],
    wrongChoices: {
      B: r`Stars of 2 to 8 solar masses live at most about 1.5 billion years and would have died long ago.`,
      C: r`Stars of 8 to 12 solar masses live only about 30 million years before exploding as supernovae.`,
      D: r`Such stars last only around 10 to 15 million years.`,
      E: r`The most massive stars burn out in a few million years, a tiny fraction of the universe's age.`,
    },
    takeaway: r`Only low-mass stars (under about a solar mass) can still be on the main sequence after 13 billion years.`,
  },

  "usaaao-2026-first-round-q21": {
    solution: [
      r`Enclosed mass follows from the rotation speed: $M(r) = \dfrac{v^2 r}{G}$. With $v \propto r$, $M(r) \propto r^2 \times r = r^3$.`,
      r`Mass growing as the **cube** of the radius means a constant density in three dimensions: the inner galaxy behaves like a uniform ball of stars, gas and dust.`,
    ],
    wrongChoices: {
      A: r`A uniform 2D disc gives $M \propto r^2$ and $v \propto \sqrt{r}$, not $v \propto r$.`,
      B: r`A dominant central point mass gives Keplerian rotation, $v \propto r^{-1/2}$, falling with radius, the opposite of the rising inner curve.`,
      C: r`Dark energy is utterly negligible on galactic scales, and $\rho \propto r^2$ would give $M \propto r^5$, not $r^3$.`,
      D: r`A straight-line fit through the origin **is** a power law, $v \propto r^1$, corresponding to $M \propto r^3$.`,
    },
    takeaway: r`v ∝ r means M ∝ r³, the signature of uniform density: solid-body rotation.`,
  },

  "usaaao-2026-first-round-q22": {
    solution: [
      r`Enclosed mass scales as $v^2$: if the observed speed is 3.5 times the speed the visible matter alone would produce, the total mass is $3.5^2 \approx 12$ times the baryonic mass.`,
      r`Dark matter is the difference: about $12 - 1 = 11$ times the baryonic mass, closest to **10**.`,
    ],
    wrongChoices: {
      A: r`Too small. A factor of 3.5 in speed is a factor of 12 in mass, since $M \propto v^2$.`,
      B: r`Too small. This would correspond to a speed ratio of about 2.4, not 3.5.`,
      D: r`Too large; a mass ratio of 25 would need a speed ratio of about 5.`,
      E: r`Too large; this would need the observed speed to be about 7 times the baryonic expectation.`,
    },
    takeaway: r`Mass scales as v², so a speed ratio of 3.5 means about 12 times the mass and 11 parts dark matter per part baryonic.`,
  },

  "usaaao-2026-first-round-q23": {
    solution: [
      r`**II** is true: hot O and B stars in the spiral arms flood their surroundings with ultraviolet, ionising the hydrogen around them into H II regions. Ionised hydrogen has no bound electron and cannot emit the 21 cm line, so those patches go quiet at 21 cm.`,
      r`**I** is false: dust is **warmer** near the bright, crowded galactic centre, not colder, and it obscures more there, not less. **III** is false: stars orbit at a few hundred km/s, a thousand times slower than light; nothing about galaxy rotation is relativistic.`,
    ],
    wrongChoices: {
      A: r`Dust near the centre is warmer, heated by the dense starlight, and there is more of it along the line of sight, so it obscures more, not less.`,
      C: r`Galactic orbital speeds are a few hundred km/s, about 0.1% of the speed of light. Nothing relativistic is going on.`,
      D: r`II is true but I is not: inner dust is warmer and obscures more.`,
      E: r`One statement is true: ionisation by O and B stars really does suppress 21 cm emission near spiral arms.`,
    },
    takeaway: r`21 cm emission needs neutral hydrogen; hot young stars ionise it away nearby.`,
  },

  "usaaao-2026-first-round-q24": {
    solution: [
      r`Redshift **factors** multiply along a chain of observers: $(1 + z_{\text{total}}) = (1 + z_1)(1 + z_2)$, because each stretch of wavelength compounds the previous one.`,
      r`Honeyhive to Earth: $1 + 0.5 = 1.5$. Earth to Gold Leaf (the same as Gold Leaf to Earth): $1 + 0.8 = 1.8$. Product: $1.5 \times 1.8 = 2.7$, so $z = 2.7 - 1 = 1.7$.`,
    ],
    wrongChoices: {
      A: r`Redshifts along the same line add up (compound), they do not subtract. Both galaxies are receding from each other faster than either recedes from Earth.`,
      B: r`Not from the formula. Multiply the factors $(1 + z)$: $1.5 \times 1.8 = 2.7$, then subtract 1.`,
      C: r`This adds the two redshifts. Wavelength stretches compound multiplicatively, so the factors $(1 + z)$ multiply, giving slightly more than the sum.`,
      E: r`This is the product of the factors, $(1 + z_1)(1 + z_2) = 2.7$, which is $1 + z$. Subtract 1 to get the redshift.`,
    },
    takeaway: r`Cosmological redshifts compound: (1 + z_total) = (1 + z₁)(1 + z₂).`,
  },

  "usaaao-2026-first-round-q25": {
    solution: [
      r`**Lyman-α** ($n = 2 \to 1$) is hydrogen's biggest common jump: 10.2 eV, an ultraviolet photon at 121.6 nm. **Balmer-α** ($n = 3 \to 2$) is smaller: 1.9 eV, red light at 656 nm.`,
      r`The **21 cm** line is a minuscule hyperfine flip, only $6 \times 10^{-6}$ eV, in the radio band. Shortest to longest: Lyman-α, Balmer-α, H I 21 cm.`,
    ],
    wrongChoices: {
      A: r`Lyman-α is the **shortest** wavelength of the three, in the ultraviolet, so it cannot be last.`,
      B: r`The 21 cm line is by far the **longest** wavelength (radio), so it belongs at the end, not the start.`,
      C: r`The 21 cm line is longer than Balmer-α by a factor of 300,000; it must come last.`,
      E: r`Lyman-α (121.6 nm) is shorter than Balmer-α (656 nm), so it comes first.`,
    },
    takeaway: r`Bigger energy jumps make shorter wavelengths: Lyman UV, Balmer visible, hyperfine radio.`,
  },

  "usaaao-2026-first-round-q26": {
    solution: [
      r`Convert the dips to blocked fractions: primary $1 - 10^{-0.4 \times 0.200} = 0.168$, secondary $1 - 10^{-0.4 \times 0.100} = 0.088$.`,
      r`In both eclipses the hidden area is the same, Y's whole disc: once Y disappears behind X (losing Y's light), once Y covers a patch of X (losing that patch of X's light). The ratio of blocked fluxes is therefore the ratio of **surface brightnesses**, $(T_X/T_Y)^4$ or its inverse.`,
      r`If X is the hotter star, the deeper eclipse is Y in front of X: $\left(\dfrac{T_X}{T_Y}\right)^4 = \dfrac{0.168}{0.088} = 1.91$, so $\dfrac{T_X}{T_Y} = 1.91^{1/4} \approx 1.18$. That is a possible ratio.`,
    ],
    wrongChoices: {
      A: r`Not from the numbers. The blocked-flux ratio $0.168/0.088 = 1.91$ is a fourth power of the temperature ratio, and $0.679^4 \approx 0.21$ does not match either $1.91$ or $1/1.91$.`,
      B: r`Equal temperatures would make both eclipses equally deep, since the same area of equally bright surface is hidden each time. The eclipses differ by a factor of 2 in depth.`,
      D: r`$1.414^4 = 4$, but the ratio of blocked fluxes is only 1.91. Take the **fourth** root of 1.91.`,
      E: r`$2^4 = 16$, far above the observed flux ratio of 1.91.`,
    },
    takeaway: r`Equal hidden areas mean eclipse depths compare surface brightnesses, which scale as T⁴.`,
  },

  "usaaao-2026-first-round-q27": {
    solution: [
      r`Kepler's law gives the period ratio between Jupiter and an asteroid at 2.82 AU: $\dfrac{P_J}{P_{\text{ast}}} = \left(\dfrac{5.20}{2.82}\right)^{3/2} = (1.844)^{1.5} \approx 2.50$.`,
      r`The asteroid orbits five times for every two Jupiter orbits: the **5:2 resonance**. Repeated tugs at the same points clear the gap.`,
    ],
    wrongChoices: {
      A: r`A period ratio of 1.6 corresponds to $a = 5.20/1.6^{2/3} \approx 3.8$ AU, near the outer edge of the belt, not 2.82 AU.`,
      B: r`A ratio of 1.83 corresponds to about 3.47 AU, well outside the marked gap.`,
      C: r`The 9:4 resonance (ratio 2.25) lies at about 3.03 AU, the gap just to the right of the marked one.`,
      E: r`The 3:1 resonance lies at 2.50 AU, the prominent gap to the **left** of the marked one.`,
    },
    takeaway: r`A Kirkwood gap at a sits at a period ratio (a_J/a)^(3/2); 2.82 AU is the 5:2 resonance.`,
  },

  "usaaao-2026-first-round-q28": {
    solution: [
      r`Region **A** is the dense band running diagonally through the bottom of the diagram: the **main sequence**, where stars fuse hydrogen in their cores.`,
      r`Region B is the red giant branch, where stars climb as their helium cores grow. Region **C** is the **tip** of that branch, the brightest, reddest point, where a low-mass star's core finally ignites helium in the **helium flash**. Region D is the horizontal branch, the quiet helium-burning stage that follows.`,
    ],
    wrongChoices: {
      A: r`Region B is the red giant branch on the way up, where the star is still burning hydrogen in a shell. The flash happens only at the very top, region C.`,
      C: r`Region B is not where core hydrogen burns; that is the main sequence, region A, at the bottom.`,
      D: r`Region B is the giant branch, not the main sequence, and region D (the horizontal branch) comes **after** the helium flash, not at it.`,
      E: r`Region C is the tip of the giant branch, not the main sequence, and region D is the post-flash horizontal branch.`,
    },
    takeaway: r`On a cluster HR diagram: main sequence at the bottom, giant branch rising to the tip where the helium flash strikes, then the horizontal branch.`,
  },

  "usaaao-2026-first-round-q29": {
    solution: [
      r`Solar photons: Earth intercepts $1361\ \text{W/m}^2 \times \pi R_\oplus^2 \approx 1.7 \times 10^{17}$ W. With a photon energy at the Sun's peak ($\lambda \approx 500$ nm, $E \approx 4 \times 10^{-19}$ J) that is about $4 \times 10^{35}$ photons per second.`,
      r`CMB photons arrive from all directions onto Earth's whole surface: $\sigma T^4 \times 4\pi R_\oplus^2 = 3.1 \times 10^{-6}\ \text{W/m}^2 \times 5.1 \times 10^{14}\ \text{m}^2 \approx 1.6 \times 10^9$ W. At the CMB peak ($\lambda \approx 1.06$ mm, $E \approx 1.9 \times 10^{-22}$ J) that is about $8.5 \times 10^{30}$ photons per second.`,
      r`Ratio: $\dfrac{4 \times 10^{35}}{8.5 \times 10^{30}} \approx 5 \times 10^4$.`,
    ],
    wrongChoices: {
      B: r`Too large by about 4. Remember the CMB hits Earth's **entire** surface ($4\pi R^2$) while sunlight hits only the cross-section ($\pi R^2$).`,
      C: r`Too large by about 600. Check the photon energies: the CMB photon energy is 2000 times smaller than a solar photon's, which boosts the CMB photon count.`,
      D: r`Too large by about 2000. The CMB carries far less **energy** but its photons are individually so feeble that their **number** is not so small.`,
      E: r`Far too large. Compare powers first ($10^{17}$ W versus $1.6 \times 10^9$ W), then divide each by its photon energy.`,
    },
    takeaway: r`Photon rate = power ÷ photon energy; the CMB's tiny photon energy partly offsets its tiny power.`,
  },

  "usaaao-2026-first-round-q30": {
    solution: [
      r`**I** true: planetary nebulae come from Sun-like stars, which exist in both spirals and ellipticals. **II** true: blue arms mean hot, short-lived stars, so star formation is ongoing. **IV** true: Type II supernovae come from massive young stars, found only where stars are forming.`,
      r`**III** false: an all-red elliptical has no young stars, so no ongoing formation. **V** false: Type Ia supernovae (white dwarfs) occur in **both** galaxy types, not only in ellipticals.`,
    ],
    wrongChoices: {
      A: r`III is false: a galaxy of only red stars has finished forming stars. IV, on the other hand, is true.`,
      C: r`III is false (no star formation in an all-red elliptical) and II, which is true, is left out.`,
      D: r`V is false: Type Ia supernovae happen in spirals too, since white dwarfs are everywhere. And II, ongoing star formation in S, is true.`,
      E: r`V is false (Type Ia occur in both) and I is true (planetary nebulae arise from Sun-like stars in any galaxy).`,
    },
    takeaway: r`Blue means young stars and Type II supernovae; planetary nebulae and Type Ia supernovae appear in old and young populations alike.`,
  },
};
