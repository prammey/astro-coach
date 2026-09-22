import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2021 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2021-first-round-q1": {
    solution: [
      r`December 21, 2020 was the **Great Conjunction**: Jupiter and Saturn passed within a tenth of a degree of each other, so Saturn was at essentially the same coordinates as Jupiter.`,
      r`RA 20 h 10 m, Dec $-20^\circ 34'$ lies in **Capricornus**, the zodiac constellation between Sagittarius and Aquarius.`,
    ],
    wrongChoices: {
      B: r`Aquarius is the next constellation east, at RA 21 to 23 h. Jupiter and Saturn moved into it during 2021, but in December 2020 they were still one constellation west.`,
      C: r`Pisces spans RA 23 h to 2 h, well east of the planets' position, and it is where they would be several years later.`,
      D: r`Aquila lies at RA 19 to 20 h but around Dec $+5^\circ$, well north of the ecliptic. Planets never enter it, and $-20^\circ$ is far south of the Eagle.`,
    },
    takeaway: r`At the Great Conjunction the two planets shared a position: RA 20 h, Dec −20°, in Capricornus.`,
  },

  "usaaao-2021-first-round-q2": {
    solution: [
      r`Get the temperature from $L = 4\pi R^2 \sigma T^4$: $T^4 = \dfrac{L}{4\pi R^2\sigma} = \dfrac{5.86 \times 10^{26}}{4\pi (8.51 \times 10^8)^2 (5.67 \times 10^{-8})} \approx 1.14 \times 10^{15}$ K⁴.`,
      r`$T \approx 5800$ K, which is the temperature of the Sun itself, a **G-type** star (G stars span roughly 5300 to 6000 K).`,
    ],
    wrongChoices: {
      A: r`A-type stars are 7500 to 10,000 K, white stars like Sirius and Vega. This star is much cooler than that.`,
      B: r`F-type stars are 6000 to 7500 K, a little hotter than the Sun. A 5800 K star falls just below the F range.`,
      D: r`K-type stars are 3700 to 5200 K, orange stars like Arcturus. At 5800 K this star is too hot to be a K star.`,
      E: r`M-type stars are red dwarfs and red giants below 3700 K, far cooler than this star.`,
    },
    takeaway: r`Luminosity and radius give temperature via L = 4πR²σT⁴, and 5800 K is the signature of a G star.`,
  },

  "usaaao-2021-first-round-q3": {
    solution: [
      r`For a circular, edge-on orbit with the planet far lighter than the star, the star's wobble amplitude is $K = \left(\dfrac{2\pi G}{P}\right)^{1/3} \dfrac{m_p}{M_\star^{2/3}}$.`,
      r`In SI: $P = 3.53 \times 86{,}400 = 3.05 \times 10^5$ s, $m_p = 0.71 \times 1.898 \times 10^{27} = 1.35 \times 10^{27}$ kg, $M_\star = 1.15 \times 1.989 \times 10^{30} = 2.29 \times 10^{30}$ kg.`,
      r`$\left(\dfrac{2\pi G}{P}\right)^{1/3} = \left(\dfrac{4.19 \times 10^{-10}}{3.05 \times 10^5}\right)^{1/3} = 1.11 \times 10^{-5}$ and $M_\star^{2/3} = 1.74 \times 10^{20}$, so $K = \dfrac{1.11 \times 10^{-5} \times 1.35 \times 10^{27}}{1.74 \times 10^{20}} \approx 86$ m/s.`,
    ],
    wrongChoices: {
      A: r`Too small. Check that the planet mass includes the factor 0.71 and that the period is in seconds; the result should be a little under 90 m/s.`,
      C: r`Too large. Recompute $M_\star^{2/3}$ with the 1.15 factor included; a heavier star wobbles less.`,
      D: r`Too large by about 40%. Check the cube root of $2\pi G/P$ and the star's mass to the power $2/3$.`,
    },
    takeaway: r`K = (2πG/P)^(1/3) m_p / M_star^(2/3) for a circular edge-on orbit.`,
  },

  "usaaao-2021-first-round-q4": {
    solution: [
      r`Use **dimensional analysis**. $k_BT$ is an energy and $\hbar c$ is an energy times a length, so $\dfrac{k_BT}{\hbar c}$ has units of $1/\text{length}$.`,
      r`A number density is a number per **volume**, that is $1/\text{length}^3$. So the exponent must be $n = 3$: $n_d \propto \left(\dfrac{k_BT}{\hbar c}\right)^3 \propto T^3$.`,
      r`This is why the number of CMB photons per cubic metre scales as $T^3$ while their energy density scales as $T^4$.`,
    ],
    wrongChoices: {
      A: r`With $n = 1$ the right-hand side would have units of $1/\text{length}$, a number per unit **length**, not per volume.`,
      B: r`With $n = 2$ you get $1/\text{length}^2$, a number per unit **area**. Density means per volume.`,
      D: r`$n = 4$ gives $1/\text{length}^4$, which is not a number density. (Energy density does go as $T^4$, but that is a different quantity with an extra factor of $k_BT$.)`,
    },
    takeaway: r`Dimensional analysis: k_BT/ħc is an inverse length, so photon number density goes as its cube.`,
  },

  "usaaao-2021-first-round-q5": {
    solution: [
      r`Transit depth is the fraction of the star's disc the planet covers: $\left(\dfrac{R_p}{R_\star}\right)^2$.`,
      r`$R_p = 1.35 \times 6.99 \times 10^7 = 9.44 \times 10^7$ m and $R_\star = 1.20 \times 6.96 \times 10^8 = 8.35 \times 10^8$ m, so $\dfrac{R_p}{R_\star} = 0.113$ and the depth is $0.113^2 \approx 0.0128$, about **1.3%**.`,
    ],
    wrongChoices: {
      A: r`A hundred times too small. The radius ratio is about 0.11, and squaring it gives about 0.013, which is 1.3%, not 0.013%.`,
      B: r`Ten times too small. Check the conversion to percent: a depth of 0.013 is 1.3%.`,
      D: r`Ten times too large. A 13% dip would need a planet more than a third the star's radius; this one is about a ninth.`,
    },
    takeaway: r`Transit depth = (R_planet/R_star)²: a hot Jupiter dims a Sun-like star by about 1%.`,
  },

  "usaaao-2021-first-round-q6": {
    solution: [
      r`All three are classic puzzles that inflation solves. The **flatness problem**: the universe is measured to be almost exactly flat, which the plain Big Bang makes wildly improbable; inflation stretches any curvature flat.`,
      r`The **horizon problem**: opposite sides of the CMB sky have the same temperature yet could never have exchanged heat; inflation says they were in contact before being flung apart.`,
      r`The **monopole problem**: grand unified theories predict a flood of magnetic monopoles; inflation dilutes them to essentially zero.`,
    ],
    wrongChoices: {
      A: r`This is a real problem inflation solves (flatness), but it is not the only one: the horizon and monopole problems are also on the list.`,
      B: r`True, this is the horizon problem, and inflation resolves it. But the flatness and monopole problems are also solved by inflation.`,
      C: r`The monopole problem is indeed addressed by inflation, but so are the other two listed problems.`,
    },
    takeaway: r`Inflation solves the flatness, horizon and monopole problems at once.`,
  },

  "usaaao-2021-first-round-q7": {
    solution: [
      r`First the semi-major axis from Kepler's third law: $a = P^{2/3} = 4400^{2/3} \approx 269$ AU.`,
      r`Perihelion distance is $q = a(1 - e) = 269 \times (1 - 0.99921) = 269 \times 0.00079 \approx 0.21$ AU, inside Mercury's orbit. That close pass is why NEOWISE grew such a bright tail in July 2020.`,
    ],
    wrongChoices: {
      A: r`Too close; this is less than a tenth of the true value. Check $a = 4400^{2/3}$ (about 269 AU) before multiplying by $1 - e$.`,
      C: r`Too far. Make sure you multiplied by $1 - e = 0.00079$, not by something ten times bigger.`,
      D: r`This is about a tenth of the semi-major axis, not the perihelion. Use $q = a(1 - e)$ with the tiny $1 - e$.`,
    },
    takeaway: r`Get a from the period, then perihelion q = a(1 − e); a near-parabolic comet dives deep inside its huge orbit.`,
  },

  "usaaao-2021-first-round-q8": {
    solution: [
      r`**Population I** stars are the young, metal-rich stars of a galaxy's disc, so (1) young and (2) metal-rich.`,
      r`The 21 cm line is observed at a **higher** frequency than its rest value, a blueshift, so the galaxy is **approaching** us.`,
      r`Speed: $v = c\,\dfrac{\nu - \nu_0}{\nu_0} = 3 \times 10^5 \times \dfrac{1422.73 - 1420.41}{1420.41} \approx 490$ km/s.`,
    ],
    wrongChoices: {
      A: r`Population I stars are metal-**rich**, and a higher observed frequency means the galaxy is **approaching**, not receding. The speed is also off by a factor of two.`,
      B: r`Population I stars are the **young** ones; the old, metal-poor stars are Population II. The motion and speed are right.`,
      C: r`Population I stars are young and metal-rich, and a blueshift (higher frequency) means approach, not recession.`,
      E: r`The star descriptions and the direction are right, but the speed is half the true value. Compute $c\,\Delta\nu/\nu_0$ with $\Delta\nu = 2.32$ MHz.`,
    },
    takeaway: r`Population I is young and metal-rich; a higher observed frequency means approach, with v = c Δν/ν₀.`,
  },

  "usaaao-2021-first-round-q9": {
    solution: [
      r`Size from the angular diameter: $30' = 0.0087$ rad, so the diameter is $500 \times 0.0087 \approx 4.4$ pc.`,
      r`For a stable, bound cluster the **virial theorem** gives $2K = |U|$: $N m \langle v^2 \rangle = \dfrac{3}{5}\dfrac{G M^2}{r}$ with $M = Nm$, so $\langle v^2 \rangle = \dfrac{3}{5}\dfrac{GM}{r}$.`,
      r`With $M = 1000\ M_\odot = 2 \times 10^{33}$ kg, the official key obtains **771 m/s**, which follows when the 4.4 pc size is used as $r$ (using the 2.2 pc radius instead gives about 1.1 km/s). Either way the stars amble at about a kilometre per second, typical of open clusters.`,
    ],
    wrongChoices: {
      A: r`Too slow. Check the cluster size, $d\theta$ with $\theta$ in radians, and the virial relation $\langle v^2\rangle = (3/5)GM/r$.`,
      B: r`Too slow. Make sure the total mass is 1000 solar masses, $2 \times 10^{33}$ kg, and the size is in metres ($1$ pc $= 3.09 \times 10^{16}$ m).`,
      C: r`Not the keyed value. Recompute $\sqrt{(3/5)GM/r}$ with the cluster size from $500\ \text{pc} \times 0.0087$.`,
      D: r`Not the keyed value, though close to what you get using the cluster's radius rather than its full size. Follow the key's size convention.`,
    },
    takeaway: r`Virial theorem for a bound cluster: ⟨v²⟩ ≈ (3/5) GM/r, giving speeds of about 1 km/s for open clusters.`,
  },

  "usaaao-2021-first-round-q10": {
    solution: [
      r`The analemma is the Sun's noon position through the year. Its **north-south** spread comes from the axial tilt (the Sun's changing declination), and its **east-west** wiggle from the equation of time, which has two causes: the tilt and the orbit's eccentricity.`,
      r`With zero tilt the Sun stays on the celestial equator all year, so the north-south motion vanishes. The eccentricity still makes the Sun run slightly fast and slow, so the noon Sun slides east and west along the equator: the analemma collapses to an **arc of a great circle**.`,
    ],
    wrongChoices: {
      A: r`The figure-8 needs the axial tilt: the two lobes come from the Sun's declination swinging north and south. Without tilt there is no vertical extent.`,
      B: r`A dot would need both tilt **and** eccentricity to be zero. The eccentric orbit still shifts the Sun east and west over the year.`,
      D: r`A circle would need equal north-south and east-west motions. With no tilt there is no north-south motion at all, so the shape is flat.`,
      E: r`Nothing in the Sun's motion makes a triangle. With zero tilt the path degenerates to a line, back and forth along the celestial equator.`,
    },
    takeaway: r`Tilt gives the analemma its height; eccentricity alone leaves only an east-west arc.`,
  },

  "usaaao-2021-first-round-q11": {
    solution: [
      r`Estimate each ratio. The **Sun**: core $1.5 \times 10^7$ K over surface $5800$ K, about $2600$.`,
      r`**Arcturus**, a red giant burning helium: core around $10^8$ K but a cool surface near $4300$ K, a ratio of roughly $20{,}000$: the largest.`,
      r`**Sirius B**, a white dwarf: core perhaps $10^7$ K but a very hot surface of about $25{,}000$ K, a ratio of only a few hundred: the smallest.`,
      r`So white dwarf $<$ Sun $<$ red giant.`,
    ],
    wrongChoices: {
      A: r`This puts the white dwarf's ratio highest, but Sirius B's surface is extremely hot (25,000 K), which makes its core-to-surface ratio the **smallest** of the three.`,
      B: r`The white dwarf should be lowest, not in the middle: its blazing surface shrinks the ratio, while the red giant's cool surface and hot helium-burning core make its ratio the largest.`,
      C: r`The red giant has the **largest** ratio, not the smallest: its core is hotter than the Sun's while its surface is cooler.`,
      E: r`The Sun does not have the largest ratio. A red giant's helium-burning core is hotter than the Sun's and its surface cooler, so its ratio beats the Sun's.`,
    },
    takeaway: r`Compare core and surface separately: hot-surfaced white dwarfs have small ratios, cool-surfaced giants with hot cores have large ones.`,
  },

  "usaaao-2021-first-round-q12": {
    solution: [
      r`Seen edge-on, one limb of the star approaches and the other recedes, so the line is shifted by the equatorial speed: $v = c\,\dfrac{\Delta\lambda}{\lambda_0} = 3 \times 10^8 \times \dfrac{0.043 \times 10^{-10}}{6.563 \times 10^{-7}} \approx 1970$ m/s.`,
      r`Rotation period: $P = \dfrac{2\pi R}{v} = \dfrac{2\pi \times 8 \times 10^8}{1970} \approx 2.55 \times 10^6$ s, which is $\dfrac{2.55 \times 10^6}{86{,}400} \approx 29.6$ days.`,
    ],
    wrongChoices: {
      B: r`Half the true value. Check that you used the full circumference $2\pi R$ (with $R$ in metres) and did not double the speed.`,
      C: r`Not quite. Recompute the speed, $c\Delta\lambda/\lambda_0 \approx 1.97$ km/s, and then $P = 2\pi R/v$ in seconds before converting to days.`,
      D: r`Too long. Make sure $R = 8 \times 10^5$ km is converted to $8 \times 10^8$ m and that the speed is about 1970 m/s.`,
    },
    takeaway: r`Rotational Doppler shift gives the equatorial speed, and P = 2πR/v gives the period.`,
  },

  "usaaao-2021-first-round-q13": {
    solution: [
      r`The **focal ratio** is focal length divided by aperture, so $F = f/\text{number} \times D = 5 \times 30 = 150$ mm.`,
      r`Magnification is the telescope's focal length divided by the eyepiece's: $\dfrac{150}{5} = 30\times$.`,
    ],
    wrongChoices: {
      B: r`A focal length of 300 mm would make this an f/10 telescope. With f/5 and a 30 mm mirror the focal length is 150 mm, and the magnification is then 30×, not 15×.`,
      C: r`The magnification is right but the focal length is doubled. An f/5, 30 mm mirror has a focal length of $5 \times 30 = 150$ mm.`,
      D: r`The focal length is right, but 150 mm divided by a 5 mm eyepiece gives 30×, not 15×.`,
    },
    takeaway: r`Focal length = f-number × aperture, and magnification = focal length ÷ eyepiece focal length.`,
  },

  "usaaao-2021-first-round-q14": {
    solution: [
      r`The field is Taurus, with the V-shaped Hyades and orange Aldebaran near the centre and Orion's belt to the right.`,
      r`Object **1**, the tight knot of stars above the Hyades, is the **Pleiades (M45)**, an open cluster. Object **2**, next to the star at the tip of the Bull's horn (Zeta Tauri), is the **Crab Nebula (M1)**, a supernova remnant. Object **3**, near the feet of Gemini, is **M35**, another open cluster.`,
      r`So the sequence is open cluster, nebula, open cluster.`,
    ],
    wrongChoices: {
      A: r`Objects 1 and 3 are indeed clusters, but object 2 is not; it sits by Zeta Tauri, where the Crab Nebula lies, and object 3 is a cluster, not a nebula.`,
      B: r`Object 3 is not a galaxy. This is a Milky Way star field near Taurus and Gemini, and the Messier object at the Twins' feet is the open cluster M35.`,
      C: r`Object 1 is the Pleiades, an open cluster, not a galaxy, and object 3 is the open cluster M35, not a globular.`,
      D: r`Object 2 is not a galaxy: beside Zeta Tauri lies the Crab Nebula. And object 3 is an open cluster, not a globular one.`,
    },
    takeaway: r`Around Taurus: the Pleiades and M35 are open clusters, and the Crab Nebula sits at the tip of the Bull's horn.`,
  },

  "usaaao-2021-first-round-q15": {
    solution: [
      r`A comet arriving with almost no speed relative to the Sun has essentially **zero total energy**, so its orbit is a parabola. On a parabola the speed at every point equals the local escape speed.`,
      r`At 1 AU the Sun's escape speed is 42.1 km/s, and escape speed scales as $1/\sqrt{r}$. At perihelion, $r = 4.64$ AU: $v = \dfrac{42.1}{\sqrt{4.64}} \approx 19.6$ km/s. The comet's mass is irrelevant.`,
    ],
    wrongChoices: {
      A: r`Far too fast; this exceeds the Sun's escape speed even at 0.25 AU. Use $v = \sqrt{2GM_\odot/q}$ with $q = 4.64$ AU.`,
      B: r`Too fast. Escape speed at 4.64 AU is about $42.1/\sqrt{4.64}$ km/s, well below 46 km/s.`,
      C: r`Too slow; even a circular orbit at 4.64 AU moves at about 13.8 km/s, and a parabolic orbit is $\sqrt{2}$ faster than that.`,
      D: r`Far too fast; this would be a strongly hyperbolic orbit. A comet that fell in from rest reaches only the escape speed at each point.`,
    },
    takeaway: r`A body falling from rest at infinity moves at the local escape speed, √(2GM/r), everywhere on its parabola.`,
  },

  "usaaao-2021-first-round-q16": {
    solution: [
      r`Chicago's longitude of $87.65^\circ$ W is $87.65/15 = 5$ h $50.6$ min west of Greenwich, so Greenwich sidereal time is $20$ h $+ 5$ h $50$ m $36$ s $= 25$ h $50$ m $36$ s, i.e. $1$ h $50$ m $36$ s.`,
      r`Since Greenwich sidereal time was $5$ h $56$ m $9.4$ s at 0 h UT, the sidereal time elapsed since then is $1$ h $50$ m $36$ s $- 5$ h $56$ m $9.4$ s $+ 24$ h $= 19$ h $54$ m $27$ s.`,
      r`Sidereal time runs fast by a factor 1.00274, so this is $19$ h $54$ m $27$ s $/ 1.00274 \approx 19$ h $51$ m $11$ s of UT. Subtract 6 hours for the time zone: **13 h 51 m 11 s** Chicago time.`,
    ],
    wrongChoices: {
      A: r`Too late. Check the longitude conversion ($87.65^\circ$ is 5 h 50.6 m, not 5 h 40 m) and remember to shrink the sidereal interval by the factor 1.00274.`,
      B: r`Too early. The elapsed interval since 0 h UT is about 19 h 54 m of sidereal time, which is about 19 h 51 m of civil time, before subtracting the 6-hour zone offset.`,
      C: r`Too late. Make sure you **added** the west longitude to local sidereal time to get Greenwich sidereal time, then measured from 5 h 56 m 9.4 s.`,
      D: r`Too late by about 10 minutes. The conversion from sidereal to solar time **shortens** the interval by about 3 m 16 s over 20 hours; it must be included.`,
    },
    takeaway: r`Local sidereal time + west longitude gives Greenwich sidereal time; then convert the sidereal interval to solar time and apply the zone.`,
  },

  "usaaao-2021-first-round-q17": {
    solution: [
      r`**IV** comes first: long before the Sun physically reaches Earth, its enormously increased luminosity boils the oceans and triggers a runaway greenhouse.`,
      r`**III** comes next: as the Sun's tenuous outer atmosphere expands towards Earth's orbit, tidal drag and friction on that gas begin sapping Earth's orbital energy.`,
      r`**I** follows when the Sun's surface actually reaches Earth's orbit and direct contact drags the planet inward.`,
      r`**II** comes last, or never: the Roche limit depends on the densities, and the bloated red-giant Sun is so thin that Earth would already be **inside** the Sun before tidal forces could tear it apart.`,
    ],
    wrongChoices: {
      A: r`The runaway greenhouse comes **before** tidal effects: it happens as soon as the Sun brightens, while tides need the Sun's atmosphere to be nearly at Earth's orbit.`,
      B: r`The last two are in the wrong order. The red-giant Sun is so diffuse that its Roche limit for Earth lies inside the Sun itself, so direct contact happens before any Roche disruption.`,
      C: r`Roche-limit disruption cannot come before tidal drag or contact; for such a low-density Sun, Earth would be engulfed before it was ever torn apart.`,
    },
    takeaway: r`Heat arrives first, then drag, then engulfment; a diffuse red giant's Roche limit lies inside the star itself.`,
  },

  "usaaao-2021-first-round-q18": {
    solution: [
      r`The predicted time is the last transit plus 23 periods: $2139.1 + 23 \times 4.756 = 2139.1 + 109.388 = 2248.488$ TESS JD.`,
      r`The uncertainty in 23 periods is $23 \times 0.000023 = 0.000529$ days, and the epoch itself is uncertain by $0.0027008$ days. Adding the two directly, as the answer key does for a worst case, gives $0.0027008 + 0.000529 = 0.0032298$ days.`,
      r`(Combining them in quadrature, $\sqrt{0.0027008^2 + 0.000529^2}$, gives $0.00275$ days; the key uses the more conservative linear sum.)`,
    ],
    wrongChoices: {
      A: r`This adds only 22 periods, landing one transit too early. Check $2139.1 + 23 \times 4.756$.`,
      B: r`The time is right, but this uncertainty only counts the error from the 23 periods and ignores the uncertainty in the reference transit time itself.`,
      C: r`The time is right, but the period error has been added only once, not 23 times. The period uncertainty accumulates with every orbit: $23 \times 0.000023$.`,
    },
    takeaway: r`Predict transits with T₀ + nP, and remember the period error grows n times over.`,
  },

  "usaaao-2021-first-round-q19": {
    solution: [
      r`Central pressure scales as the weight of the overlying layers: $P \sim \rho g R \sim \dfrac{GM^2}{R^4}$ up to a constant of order 1.`,
      r`$\dfrac{GM^2}{R^4} = \dfrac{6.674 \times 10^{-11} \times (1.90 \times 10^{27})^2}{(7.15 \times 10^7)^4} \approx \dfrac{2.4 \times 10^{44}}{2.6 \times 10^{31}} \approx 9 \times 10^{12}$ Pa, and with the factor $3/(4\pi)$ from a uniform sphere, about $2 \times 10^{12}$ Pa.`,
      r`A megabar is $10^{11}$ Pa, so this is about 20 Mbar: to the nearest order of magnitude, **10 megabars**. (Detailed models give 40 to 70 Mbar.)`,
    ],
    wrongChoices: {
      A: r`A hundred times too low. Check the conversion: 1 Mbar is $10^{11}$ Pa, and $GM^2/R^4$ is of order $10^{12}$ to $10^{13}$ Pa.`,
      B: r`Ten times too low. The estimate $GM^2/R^4$ for Jupiter is of order $10^{12}$ Pa, which is tens of megabars, not one.`,
      D: r`Ten times too high for the simple estimate. The order-of-magnitude result is around $10^{12}$ Pa, closer to 10 Mbar than to 100.`,
    },
    takeaway: r`Central pressure ~ GM²/R⁴; for Jupiter that is tens of megabars.`,
  },

  "usaaao-2021-first-round-q20": {
    solution: [
      r`**Granulation** is the bubbling pattern of convection cells seen on the Sun's visible surface, the **photosphere**. Hot gas rises in the bright centres and sinks in the dark lanes.`,
      r`The corona is the thin, million-degree outer atmosphere seen during eclipses; it has no granulation. So the statement about the corona is the wrong one; all the others are correct.`,
    ],
    wrongChoices: {
      A: r`This statement is **true**: most elements heavier than iron are made by rapid neutron capture in supernovae (and in neutron-star mergers). The question asks for the false statement.`,
      B: r`This is **true**: a star is a balance between gravity pulling in and pressure pushing out, called hydrostatic equilibrium.`,
      D: r`This is **true**: a protostar shines from the energy of gravitational contraction and only becomes a star when core fusion begins.`,
      E: r`This is **true**: on the main sequence, earlier spectral types (O, B, A) are hotter and more massive than later ones (K, M).`,
    },
    takeaway: r`Granulation is convection at the photosphere; the corona is the Sun's outer atmosphere.`,
  },

  "usaaao-2021-first-round-q21": {
    solution: [
      r`The gnomon is a right triangle standing in the meridian plane, with its sloping edge pointing at the pole. Its shadow is another triangle sharing the same base line; its area is $\tfrac{1}{2}\times$ base $\times$ (sideways offset of the tip's shadow). Since the gnomon's area is $\tfrac{1}{2}\times$ base $\times$ height $h$, the area ratio is (offset)/$h$.`,
      r`At the equinox the Sun is on the celestial equator, so three hours after noon ($H = 45^\circ$) its altitude $a$ satisfies $\sin a = \cos\phi\cos H = \cos 38^\circ \cos 45^\circ = 0.557$, giving $a = 33.9^\circ$, and its azimuth from the meridian has $\sin A = \dfrac{\sin H}{\cos a} = \dfrac{0.707}{0.830} = 0.852$.`,
      r`The tip's shadow lies $h\cot a$ from the tip's foot, and its sideways offset from the base line is $h\cot a\sin A = h \times 1.49 \times 0.852 = 1.27h$. So the shadow's area is $1.27 \times 2 \approx 2.5$ m².`,
    ],
    wrongChoices: {
      A: r`Too large. The shadow is only about 27% bigger than the gnomon: the sideways offset of the tip's shadow is $h\cot a\sin A \approx 1.27h$ at this hour.`,
      B: r`Too large. Recompute the Sun's altitude at $H = 45^\circ$ on the equinox ($\sin a = \cos\phi\cos H$) and the sideways offset $h\cot a\sin A$.`,
      D: r`Too small. Three hours from noon the Sun is only $34^\circ$ high, so shadows are already longer than the objects casting them, and the shadow area exceeds the gnomon's.`,
      E: r`Too large by a factor of about 1.6. The offset of the tip's shadow is $h\cot a\sin A$, about $1.27h$, not $2h$.`,
    },
    takeaway: r`A gnomon's shadow area scales with the sideways offset of its tip's shadow, h cot(altitude) sin(azimuth).`,
  },

  "usaaao-2021-first-round-q22": {
    solution: [
      r`During the secondary eclipse only the first star is visible, and the system is $6.28 - 5.67 = 0.61$ magnitudes fainter.`,
      r`So the first star provides a fraction $10^{-0.4 \times 0.61} = 10^{-0.244} \approx 0.570$ of the combined light.`,
      r`The second star provides the rest: $1 - 0.570 = 0.430$, that is **43.0%**.`,
    ],
    wrongChoices: {
      A: r`Too small. A 0.61-magnitude dimming is a large drop (43% of the light gone), not 11%. Convert the magnitude change with $10^{-0.4\Delta m}$.`,
      C: r`This is the **first** star's share, the light remaining during the eclipse. The question asks about the star that is hidden.`,
      D: r`Too large. The dimming of 0.61 mag means 57% of the light remains, so the eclipsed star contributes 43%, not 89%.`,
    },
    takeaway: r`A magnitude change Δm means the remaining flux fraction is 10^(−0.4 Δm).`,
  },

  "usaaao-2021-first-round-q23": {
    solution: [
      r`A solar-type star has the Sun's absolute magnitude, $M_V = 4.83$. With extinction, $m - M = 5\log_{10}(d/10\ \text{pc}) + A_V$, where $A_V = d/1000$ magnitudes for $d$ in parsecs.`,
      r`$6.73 - 4.83 = 1.90$ must equal $5\log_{10}(d/10) + d/1000$. Try $d = 23.7$ pc: $5\log_{10}(2.37) = 1.87$ and $A_V = 0.024$, total $1.90$. It fits.`,
      r`At this short distance extinction barely matters; it is the distance modulus doing the work.`,
    ],
    wrongChoices: {
      A: r`Too close. At 11.5 pc a Sun-like star would appear at magnitude $4.83 + 0.30 \approx 5.1$, brighter than the observed 6.73.`,
      B: r`Too far. At 49.5 pc the star would appear at about magnitude $4.83 + 3.47 + 0.05 \approx 8.4$, fainter than observed.`,
      C: r`Too far. At 34.2 pc the distance modulus alone is $5\log_{10}(3.42) = 2.67$, giving $m \approx 7.5$, not 6.73.`,
      E: r`Too close. At 18.9 pc the star would appear at $4.83 + 1.38 + 0.02 \approx 6.2$, brighter than the observed 6.73.`,
    },
    takeaway: r`Use the Sun's M_V = 4.83 for solar-type stars, and add A_V = (1 mag/kpc) × d to the distance modulus.`,
  },

  "usaaao-2021-first-round-q24": {
    solution: [
      r`Energy emitted per unit time per unit **area** is the Stefan-Boltzmann flux, $\sigma T^4$. It depends only on temperature.`,
      r`Sirius is twice as hot, so each square metre of its surface emits $2^4 = 16$ times more power than a square metre of the Sun. Radius does not enter until you ask about **total** luminosity.`,
    ],
    wrongChoices: {
      A: r`The Sun is the cooler star, and the flux per unit area goes as $T^4$, so it emits less per square metre than Sirius does.`,
      C: r`Radius matters for the total luminosity ($4\pi R^2\sigma T^4$), but the question asks about emission per unit area, which is $\sigma T^4$ and depends on temperature alone.`,
      D: r`They cannot be equal when the temperatures differ: $\sigma T^4$ is 16 times larger for the star that is twice as hot.`,
    },
    takeaway: r`Flux per unit area is σT⁴: temperature alone decides it, and radius only enters the total luminosity.`,
  },

  "usaaao-2021-first-round-q25": {
    solution: [
      r`Momentum is conserved even when energy is not: $m_s\Delta v_s + m_p\Delta v_p = 0$.`,
      r`So $\dfrac{\Delta v_s}{\Delta v_p} = -\dfrac{m_p}{m_s} = -100$. The minus sign means the two velocity changes are in opposite directions, and the light spaceship changes velocity 100 times more than the heavy planet.`,
    ],
    wrongChoices: {
      A: r`The mass ratio is 100, not 10, and the sign is missing: the velocity changes are in **opposite** directions.`,
      B: r`The size is right, but conservation of momentum requires the two changes to have **opposite** signs.`,
      C: r`The sign is right, but the magnitude is the mass ratio, 100, not its square root.`,
    },
    takeaway: r`Momentum conservation: Δv_ship / Δv_planet = −m_planet / m_ship.`,
  },

  "usaaao-2021-first-round-q26": {
    solution: [
      r`The critical density is $\rho_c = \dfrac{3H_0^2}{8\pi G}$. With $H_0 = 70$ km/s/Mpc $= 2.27 \times 10^{-18}$ s⁻¹: $\rho_c = \dfrac{3 \times (2.27 \times 10^{-18})^2}{8\pi \times 6.674 \times 10^{-11}} \approx 9.2 \times 10^{-27}$ kg/m³, about five hydrogen atoms per cubic metre.`,
      r`Number of basketballs: $n_b = \dfrac{\rho_c}{m_b} = \dfrac{9.2 \times 10^{-27}}{0.62} \approx 1.5 \times 10^{-26}$ balls per cubic metre, or one basketball in a cube about 400 km on a side.`,
    ],
    wrongChoices: {
      B: r`A positive exponent is impossibly dense: $10^{26}$ balls per cubic metre would be far denser than a neutron star. The universe is almost empty; the exponent must be negative.`,
      C: r`Ten times too small. Recompute $3H_0^2/(8\pi G)$ with $H_0$ in s⁻¹ ($70$ km/s/Mpc $\approx 2.27 \times 10^{-18}$ s⁻¹), then divide by 0.62 kg.`,
      D: r`Absurdly dense, a positive power of ten. The critical density is only about $10^{-26}$ kg/m³, so the number of 0.62 kg balls per cubic metre is tiny.`,
    },
    takeaway: r`Critical density ρ_c = 3H₀²/(8πG) ≈ 10⁻²⁶ kg/m³, a few atoms per cubic metre.`,
  },

  "usaaao-2021-first-round-q27": {
    solution: [
      r`Gas spiralling in through the disc moves from radius $3R$ down to the star's surface at $R$. The gravitational potential energy at radius $r$ is $-\dfrac{GMm}{r}$.`,
      r`The drop in potential energy is $\left(-\dfrac{GMm}{3R}\right) - \left(-\dfrac{GMm}{R}\right) = \dfrac{2}{3}\dfrac{GMm}{R}$, which is the energy the exam counts as lost by the test mass.`,
      r`(In a Keplerian disc half of any potential drop stays as faster orbital motion, so the part actually radiated on the way in is $GMm/(3R)$; the key counts the full potential drop.)`,
    ],
    wrongChoices: {
      A: r`This is the entire potential energy at the surface, $GMm/R$, as if the gas had fallen from infinity. It only fell from $3R$, where it already had potential energy $-GMm/(3R)$.`,
      B: r`This is the orbital energy of a circular orbit at $R$, not the change between $3R$ and $R$. Subtract the potential at $3R$ from the potential at $R$.`,
      C: r`Too large; more than the whole potential energy at the surface. The drop between $3R$ and $R$ is $GMm/R - GMm/(3R)$.`,
      E: r`Not from the formula. Compute $GMm\left(\dfrac{1}{R} - \dfrac{1}{3R}\right)$.`,
    },
    takeaway: r`Between radii r₁ and r₂ the potential energy drop is GMm(1/r₂ − 1/r₁).`,
  },

  "usaaao-2021-first-round-q28": {
    solution: [
      r`Human power density: $\dfrac{100\ \text{W}}{0.0664\ \text{m}^3} \approx 1500$ W/m³. (The Sun's is only about 0.27 W/m³, which is the fun fact.)`,
      r`The Sun's volume is $\tfrac{4}{3}\pi(6.96 \times 10^8)^3 \approx 1.4 \times 10^{27}$ m³, so the "human-powered Sun" would radiate $1500 \times 1.4 \times 10^{27} \approx 2.1 \times 10^{30}$ W, about 5500 times the real Sun.`,
      r`From $L = 4\pi R^2\sigma T^4$: $T^4 = \dfrac{2.1 \times 10^{30}}{4\pi(6.96 \times 10^8)^2 \times 5.67 \times 10^{-8}} \approx 6.2 \times 10^{18}$, so $T \approx 50{,}000$ K.`,
    ],
    wrongChoices: {
      A: r`Cooler than the real Sun, but a luminosity thousands of times larger at the same radius must mean a much **hotter** surface, since $L \propto T^4$.`,
      B: r`Too cool. A luminosity boost of about 5500 times raises the temperature by $5500^{1/4} \approx 8.6$ times, from 5800 K to about 50,000 K.`,
      C: r`Too cool. Check the power density ($100/0.0664 \approx 1500$ W/m³) and the Sun's volume, then take the fourth root in $L = 4\pi R^2\sigma T^4$.`,
      D: r`Not quite. The fourth root of the luminosity ratio (about 5500) is about 8.6, giving roughly 50,000 K rather than 40,000 K.`,
    },
    takeaway: r`Same size but far more power means a much hotter surface, because L ∝ R²T⁴.`,
  },

  "usaaao-2021-first-round-q29": {
    solution: [
      r`The temperature of the cosmic background radiation scales with redshift: $T = T_0(1 + z)$.`,
      r`$T = 2.73 \times (1 + 1100) \approx 3000$ K, about the surface temperature of a red dwarf. That is when the universe cooled enough for electrons to bind to protons, letting light stream free.`,
    ],
    wrongChoices: {
      A: r`Too hot. $2.73 \times 1101$ is about 3000 K, not 10,000 K. At 10,000 K hydrogen would still have been mostly ionised.`,
      B: r`Ten times too hot. Multiply the present 2.73 K by $(1 + z) = 1101$.`,
      D: r`Too cool. The scaling is $T = T_0(1 + z)$, and $2.73 \times 1101$ is roughly 3000 K.`,
      E: r`Ten times too cool. Check the multiplication: $2.73 \times 1101 \approx 3000$.`,
    },
    takeaway: r`The CMB temperature scales as (1 + z), so at z = 1100 the universe was about 3000 K.`,
  },

  "usaaao-2021-first-round-q30": {
    solution: [
      r`Size of the black hole: Schwarzschild radius $R_s \approx 2.95\ \text{km} \times 5 \times 10^6 = 1.5 \times 10^7$ km, so its diameter is about $3 \times 10^7$ km. At 3.5 Mpc ($1.1 \times 10^{20}$ km) it subtends $\theta = \dfrac{3 \times 10^7}{1.1 \times 10^{20}} \approx 2.7 \times 10^{-13}$ rad.`,
      r`Wavelength: $\lambda = \dfrac{hc}{E} = \dfrac{1.24 \times 10^{-6}\ \text{eV·m}}{10^{-5}\ \text{eV}} = 0.124$ m.`,
      r`Baseline: $D = \dfrac{\lambda}{\theta} = \dfrac{0.124}{2.7 \times 10^{-13}} \approx 4.5 \times 10^{11}$ m, about 3 AU. Rounding up to the nearest option, a telescope at Jupiter, about 4.2 AU away at opposition, is the closest match.`,
    ],
    wrongChoices: {
      A: r`The Moon is only 400,000 km away, a baseline more than a thousand times too short for this angular size.`,
      B: r`Mars at conjunction is about 2.5 AU from Earth, a little short of the roughly 3 AU baseline needed; the question says to round **up**.`,
      C: r`Venus at greatest elongation is about 1 AU from Earth, a third of the baseline required.`,
      E: r`The Oort cloud is tens of thousands of AU away, thousands of times more baseline than needed. Rounding up means the next option **above** the estimate, not the largest.`,
    },
    takeaway: r`Baseline ≈ λ/θ; a wavelength of 12 cm and an angle of 10⁻¹³ rad calls for a few-AU interferometer.`,
  },
};
