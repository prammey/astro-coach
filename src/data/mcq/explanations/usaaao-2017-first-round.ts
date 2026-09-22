import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2017 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2017-first-round-q1": {
    solution: [
      r`A black hole's size is its **Schwarzschild radius**, the distance at which the escape speed equals the speed of light: $R_s = \dfrac{2GM}{c^2}$.`,
      r`For the Sun: $R_s = \dfrac{2 \times 6.674 \times 10^{-11} \times 1.99 \times 10^{30}}{(3.0 \times 10^8)^2} \approx 2950$ m, about **3 km**.`,
      r`So the whole Sun would have to be squeezed into a ball the size of a small town for it to become a black hole.`,
    ],
    wrongChoices: {
      A: r`Too small. Check the formula $R_s = 2GM/c^2$ and keep the factor of 2; for one solar mass it comes out just under 3 km.`,
      B: r`Close, but a little small. With $G = 6.674 \times 10^{-11}$, $M = 1.99 \times 10^{30}$ kg and $c = 3 \times 10^8$ m/s, $2GM/c^2$ is about 2950 m, which rounds to 3 km.`,
      D: r`Too large. The Schwarzschild radius is about 2.95 km per solar mass; 4 km would need about 1.35 solar masses.`,
      E: r`Too large; 5 km corresponds to about 1.7 solar masses. Recompute $2GM/c^2$ for one solar mass.`,
    },
    takeaway: r`The Schwarzschild radius is 2GM/c², about 3 km for the Sun's mass.`,
  },

  "usaaao-2017-first-round-q2": {
    solution: [
      r`Kepler's third law in years and AU: $P^2 = a^3$. With $a = 4$ AU, $P^2 = 64$, so $P = 8$ years.`,
      r`The eccentricity does not affect the period, only the shape. The comet returns $2017 + 8 = $ **2025**.`,
    ],
    wrongChoices: {
      A: r`A return in 4 years would need $P = a$, but Kepler's law is $P^2 = a^3$; for $a = 4$ AU the period is longer than 4 years.`,
      B: r`Five years would need $a \approx 2.9$ AU. Cube the 4 AU and take the square root to get the real period.`,
      C: r`Six years corresponds to $a \approx 3.3$ AU, smaller than this comet's orbit. Use $P = \sqrt{4^3}$.`,
      D: r`Seven years would need $a \approx 3.7$ AU. With $a = 4$ AU, $P^2 = 64$; take the square root.`,
    },
    takeaway: r`P² = a³ in years and AU; eccentricity changes the shape, not the period.`,
  },

  "usaaao-2017-first-round-q3": {
    solution: [
      r`The **perihelion** is the closest approach to the Sun. For an ellipse with semi-major axis $a$ and eccentricity $e$ it is $q = a(1 - e)$.`,
      r`$q = 4 \times (1 - 0.12) = 4 \times 0.88 = 3.52$ AU, closest to **3.5 AU**.`,
    ],
    wrongChoices: {
      A: r`Too close. Perihelion is $a(1 - e)$, and with $e = 0.12$ the comet only gets 12% closer than its average distance, not 25%.`,
      C: r`This is the semi-major axis itself, the **average** distance. Perihelion is closer than that by a factor $(1 - e)$.`,
      D: r`This is the **aphelion**, $a(1 + e) = 4.48$ AU, the farthest point. Perihelion is the nearest point, $a(1 - e)$.`,
      E: r`Farther than the orbit ever goes. Perihelion, the closest point, is $a(1 - e)$, less than $a$.`,
    },
    takeaway: r`Perihelion is a(1 − e) and aphelion is a(1 + e).`,
  },

  "usaaao-2017-first-round-q4": {
    solution: [
      r`The eccentricity tells you the orbit's shape: $e < 1$ is an ellipse (bound), $e = 1$ a parabola, and $e > 1$ a **hyperbola**.`,
      r`With $e = 1.2$ the comet is on a hyperbolic path: it is not bound to the Sun, swings past once and leaves for ever. There is no period to compute, so it is **never visible again**.`,
    ],
    wrongChoices: {
      A: r`This assumes the comet comes back. An orbit with $e > 1$ is not closed, so there is no return date at all.`,
      B: r`Kepler's third law only applies to **bound** (elliptical) orbits. With $e = 1.2$ the orbit is a hyperbola, which never closes.`,
      C: r`No matter what period you compute from $a = 19$ AU, it is meaningless here: an eccentricity above 1 means the comet escapes the Solar System.`,
      D: r`There is no "next time" for a hyperbolic comet. Check the eccentricity: $e > 1$ means an open, escaping trajectory.`,
    },
    takeaway: r`Eccentricity above 1 means a hyperbolic, one-time visit; only e < 1 orbits repeat.`,
  },

  "usaaao-2017-first-round-q5": {
    solution: [
      r`The horizon is where your line of sight just grazes the Earth's surface. That sight line, the Earth's radius to the grazing point, and the radius up to you form a **right triangle**, shown in the figure.`,
      r`Pythagoras gives $d^2 = (R + h)^2 - R^2 = 2Rh + h^2$. Since $h$ is tiny compared with $R$, $d \approx \sqrt{2Rh}$.`,
      r`$d = \sqrt{2 \times 6.371 \times 10^6 \times 1.8} \approx 4790$ m, about **4.8 km**. Your eyes are a little lower than your height, but the answer barely changes.`,
    ],
    wrongChoices: {
      A: r`Too close. Check the factor of 2 in $d = \sqrt{2Rh}$; dropping it makes the distance too short by about $\sqrt{2}$.`,
      C: r`Too far by a factor of 5. That would need an eye height of about 45 m, the top of a tall building. Redo $\sqrt{2 \times 6.371 \times 10^6 \times 1.8}$.`,
      D: r`Far too far; 48 km would need a viewpoint 180 m up, like a skyscraper roof. A person at ground level sees only a few kilometres.`,
      E: r`This is the horizon distance from a height of about 4.5 km, an aeroplane, not a person standing on the ground.`,
    },
    takeaway: r`Horizon distance is about √(2Rh): only about 5 km for someone standing on flat ground.`,
  },

  "usaaao-2017-first-round-q6": {
    solution: [
      r`Each small star has mass $M/N$. Same density means $M \propto R^3$, so each small star has radius $r = R\,N^{-1/3}$.`,
      r`Same temperature means luminosity scales with surface area only: each small star has $L = L_0 \left(\dfrac{r}{R}\right)^2 = L_0 N^{-2/3}$.`,
      r`Adding the $N$ stars: $L_{\text{total}} = N \times L_0 N^{-2/3} = L_0 N^{1/3}$. More total surface area, so more light.`,
      r`Convert to magnitude: $m = m_0 - 2.5\log_{10}(N^{1/3}) = m_0 - \dfrac{2.5}{3}\log_{10} N$.`,
    ],
    wrongChoices: {
      A: r`The magnitude scale uses a factor of 2.5 per power of ten in brightness, and the total luminosity only grows as $N^{1/3}$, not as $N$.`,
      B: r`This would be right if the total luminosity grew in proportion to $N$, but each small star is much smaller: same density gives radius $\propto N^{-1/3}$, so the total light grows only as $N^{1/3}$.`,
      D: r`Magnitudes change with the **logarithm** of a brightness ratio, never with $1/N$ directly.`,
      E: r`A magnitude change proportional to $N$ would mean an exponentially growing brightness. Magnitudes go with $\log_{10}$ of the luminosity ratio.`,
    },
    takeaway: r`At fixed density and temperature, N pieces of a star give N^(1/3) times the light, since surface area beats volume.`,
  },

  "usaaao-2017-first-round-q7": {
    solution: [
      r`The Schwarzschild radius is $R_s = \dfrac{2GM}{c^2}$, and the surface area of a sphere is $A = 4\pi R_s^2$.`,
      r`$A = 4\pi \left(\dfrac{2GM}{c^2}\right)^2 = 4\pi \times \dfrac{4G^2M^2}{c^4} = \dfrac{16\pi G^2 M^2}{c^4}$.`,
      r`Notice the area grows as $M^2$: a black hole twice as massive has four times the surface area.`,
    ],
    wrongChoices: {
      B: r`This drops the factor $2^2 = 4$ from squaring the 2 in $R_s = 2GM/c^2$. Square the whole radius, including the 2.`,
      C: r`The extra factor of 3 does not belong; there is no 3 in the area of a sphere, $4\pi R^2$. (You may be thinking of the volume formula.)`,
      D: r`This has the wrong units; $c^4$ is missing. $R_s = 2GM/c^2$, so $R_s^2$ has $c^4$ in the denominator.`,
      E: r`Squaring $R_s = 2GM/c^2$ gives $c^4$ in the denominator, not $c^2$.`,
    },
    takeaway: r`A black hole's area is 4π(2GM/c²)² = 16πG²M²/c⁴, growing as the square of its mass.`,
  },

  "usaaao-2017-first-round-q8": {
    solution: [
      r`Stefan-Boltzmann says $L = \sigma A T^4$. From question 7, area $\propto M^2$, so each small black hole (mass $M/N$) has area $A_0/N^2$.`,
      r`Hawking temperature $\propto 1/M$, so each small black hole is **hotter**: $T = N T_0$.`,
      r`Each one radiates $L = \sigma \dfrac{A_0}{N^2} (N T_0)^4 = N^2 L_0$. With $N$ of them, $L_{\text{total}} = N \times N^2 L_0 = N^3 L_0$.`,
      r`Small black holes are ferociously bright, which is why tiny ones evaporate fast while big ones last almost for ever.`,
    ],
    wrongChoices: {
      A: r`Splitting changes both area and temperature. Each piece loses area as $1/N^2$ but gains temperature as $N$, and $T^4$ wins by a large margin.`,
      B: r`This would mean smaller black holes are dimmer, but their temperature rises as $N$ and luminosity goes as $T^4$, which overwhelms the drop in area.`,
      C: r`This ignores the temperature rise. Each piece is $N$ times hotter, contributing $N^4$ in $T^4$, against only $1/N^2$ from the smaller area.`,
      D: r`This is the luminosity of just **one** of the small black holes, $N^2 L_0$. There are $N$ of them, so multiply by $N$ once more.`,
    },
    takeaway: r`Hawking luminosity scales as 1/M², so splitting a black hole into N pieces multiplies the total light by N³.`,
  },

  "usaaao-2017-first-round-q9": {
    solution: [
      r`Nothing travels faster than light, so a source cannot brighten or fade as a whole in less time than light takes to cross it. If it did, light from the near side would reach us long before light from the far side, smearing the change out, as the figure shows.`,
      r`A variation within one day therefore means the emitting region is at most about **one light-day** across.`,
      r`One light-day is $3 \times 10^5\ \text{km/s} \times 86{,}400\ \text{s} = 2.6 \times 10^{10}$ km, which is about $173$ AU. The best listed bound is **170 AU**, a region no bigger than our Solar System.`,
    ],
    wrongChoices: {
      A: r`Eight kiloparsecs is the size of a galaxy. Light would take tens of thousands of years to cross that; a region varying in a day must be vastly smaller.`,
      C: r`Three AU is only about 25 light-minutes across. The day-long variation allows a region considerably larger than that, and the question asks for the **best** upper bound.`,
      D: r`Three solar radii is a few light-seconds. That would be the bound if the quasar varied within seconds; a daily variation permits something much bigger.`,
      E: r`A parsec is over three light-years. Light would need years to cross it, so such a region could not vary coherently in a day.`,
    },
    takeaway: r`A source that varies in time t can be no larger than the distance light travels in t.`,
  },

  "usaaao-2017-first-round-q10": {
    solution: [
      r`On a sphere the shortest path between two points is a **great circle**. The spherical law of cosines gives the angle $\theta$ between the two places: $\cos\theta = \sin\phi_1 \sin\phi_2 + \cos\phi_1 \cos\phi_2 \cos(\Delta\lambda)$.`,
      r`Latitudes: $\phi_1 = 42.36^\circ$ (MIT), $\phi_2 = 34.14^\circ$ (Caltech). Longitude difference: $\Delta\lambda = 118.13^\circ - 71.09^\circ = 47.03^\circ$.`,
      r`$\cos\theta = \sin 42.36^\circ \sin 34.14^\circ + \cos 42.36^\circ \cos 34.14^\circ \cos 47.03^\circ \approx 0.795$, so $\theta \approx 37.35^\circ$.`,
      r`Distance $= R\theta = 6371 \times 37.35 \times \dfrac{\pi}{180} \approx 4160$ km. The figure shows the same calculation done from the pole using the co-latitudes.`,
    ],
    wrongChoices: {
      A: r`Too short. The great-circle angle between the two campuses is over $37^\circ$; multiply that (in radians) by Earth's radius.`,
      C: r`Too long. Check the longitude difference, $118.13^\circ - 71.09^\circ = 47.03^\circ$, and use it inside the spherical law of cosines.`,
      D: r`Too long. A central angle of about $37.3^\circ$ times 6371 km gives well under 4500 km.`,
      E: r`Too long; this would correspond to a central angle of about $47.6^\circ$, which is roughly the longitude difference alone. The latitudes must be included through the law of cosines.`,
    },
    takeaway: r`Great-circle distance: find the central angle with the spherical law of cosines, then multiply by Earth's radius.`,
  },

  "usaaao-2017-first-round-q11": {
    solution: [
      r`The total energy of a body on an elliptical orbit depends only on the semi-major axis: $E = -\dfrac{GMm}{2a}$. It is negative because the body is bound.`,
      r`To just escape, the total energy must rise to **zero** (a parabolic trajectory). The energy that must be added is $0 - \left(-\dfrac{GMm}{2a}\right) = \dfrac{GMm}{2a}$.`,
      r`This works at any point of the orbit, because the total energy is the same everywhere along it.`,
    ],
    wrongChoices: {
      A: r`Not enough. The bound orbit sits at $-GMm/(2a)$, so it needs the full $GMm/(2a)$ to reach zero energy; $GMm/(3a)$ leaves it still bound.`,
      B: r`This has the wrong units: energy is $GMm$ divided by a **length**, not a length squared.`,
      D: r`Twice what is needed. The orbital energy is $-GMm/(2a)$, with the factor of 2 in the denominator; $GMm/a$ would send the rocket off on a hyperbola.`,
      E: r`Wrong units ($GMm/a^2$ is a force, not an energy) and the wrong idea: orbital energy involves $1/a$.`,
    },
    takeaway: r`An elliptical orbit's energy is −GMm/(2a), so it takes exactly GMm/(2a) to unbind it.`,
  },

  "usaaao-2017-first-round-q12": {
    solution: [
      r`Look at the photos: around noon the pole's shadow shrinks until it almost **vanishes**, which only happens when the Sun is nearly straight overhead.`,
      r`March 17 is a few days before the equinox, so the Sun is almost exactly above the **equator** (its declination is about $-1.5^\circ$).`,
      r`The only listed place near the equator is the **Galápagos Islands** at $0.74^\circ$ S. Everywhere else the noon Sun on that date is tens of degrees from the zenith and would cast an obvious shadow.`,
    ],
    wrongChoices: {
      A: r`At $47.6^\circ$ N the noon Sun near the equinox is only about $42^\circ$ above the horizon, so a one-foot pole would cast a shadow about a foot long, nothing like the vanishing shadow in the photos.`,
      B: r`At $34^\circ$ N the noon Sun in mid-March is about $56^\circ$ high. The pole's shadow would be roughly two-thirds of its height, clearly visible.`,
      C: r`At $21^\circ$ N the equinox Sun reaches about $69^\circ$ at noon, still leaving a shadow about 40% of the pole's height. The Sun is only overhead at noon at that latitude in late May and July.`,
      E: r`At $34^\circ$ S the Sun is also about $56^\circ$ high at noon near the equinox, so the shadow would be far from disappearing (and would point south, not vanish).`,
    },
    takeaway: r`A vanishing noon shadow means the Sun is at the zenith, which near the equinox happens only at the equator.`,
  },

  "usaaao-2017-first-round-q13": {
    solution: [
      r`December 21 is the southern summer solstice. At the South Pole the Sun is above the horizon for the whole 24 hours, sitting at a constant altitude of $23.4^\circ$.`,
      r`As Earth turns, the Sun circles the entire horizon once a day at that same low height. Your shadow, always pointing away from the Sun, is long and sweeps round a full **360°** over the day.`,
    ],
    wrongChoices: {
      A: r`This describes the South Pole in **June**, at the winter solstice. In December the pole has 24-hour daylight.`,
      B: r`The Sun never gets overhead at the poles; its altitude there can never exceed $23.4^\circ$. Also, at the pole there is no special "noon": the Sun stays at the same altitude all day.`,
      C: r`The Sun is indeed up all day, but it is far from overhead, only $23.4^\circ$ up, so you cast a long shadow at all times.`,
      E: r`Every direction from the South Pole is north, so "towards the North Pole" is not a useful description. What matters is that the shadow's direction changes continuously as the Sun circles.`,
    },
    takeaway: r`At a pole during its summer, the Sun circles the sky at constant altitude and shadows sweep a full circle each day.`,
  },

  "usaaao-2017-first-round-q14": {
    solution: [
      r`Measure the picture: the Moon's disc is about **one-third** the width of the Sun's disc. The Sun spans $32'$, so the Moon spans about $32'/3 \approx 10.7'$ from the satellite.`,
      r`Small-angle formula: distance $= \dfrac{\text{diameter}}{\text{angle in radians}}$. The Moon's diameter is $3474$ km and $10.7' = \dfrac{10.7}{60} \times \dfrac{\pi}{180} = 3.1 \times 10^{-3}$ rad.`,
      r`$d = \dfrac{3474}{3.1 \times 10^{-3}} \approx 1.12 \times 10^6$ km, about three times the Earth-Moon distance, which is why the Moon looks so small in the picture.`,
    ],
    wrongChoices: {
      A: r`Half the true value. Make sure you used the Moon's full **diameter** (3474 km), not its radius, in the small-angle formula.`,
      C: r`Twice the true value. Check the Moon's angular size from the picture: about a third of the Sun's $32'$, and convert arcminutes to radians correctly.`,
      D: r`Ten times too far. At $10^7$ km the Moon would appear only about $1'$ across, a tiny dot compared with the Sun's disc in the picture.`,
      E: r`Twenty times too far. The Moon in the picture is a big, obvious disc, so the satellite cannot be that distant.`,
    },
    takeaway: r`Angular size in radians equals true size divided by distance; compare with the Sun's 32′ to set the scale.`,
  },

  "usaaao-2017-first-round-q15": {
    solution: [
      r`Tides on Earth are raised by both the Moon and the Sun. When the two line up, their tidal effects **add**, giving the biggest bulges: **spring tides**.`,
      r`The Sun, Earth and Moon are in a line at **full Moon** (and also at new Moon). Of the choices listed, full Moon is the one with the largest tidal bulge.`,
    ],
    wrongChoices: {
      B: r`At first quarter the Moon is $90^\circ$ from the Sun, so their tidal bulges partly cancel. This is a **neap** tide, the smallest of the month.`,
      C: r`A waxing gibbous Moon is between first quarter and full, so the Sun and Moon are not yet lined up and the tides are still building towards their maximum.`,
      D: r`A waning gibbous Moon is past full; the alignment is already breaking down and the tides are shrinking from their peak.`,
      E: r`A waxing crescent is only a little way from the new Moon alignment, but not at it; the tides are past the new-Moon spring tide and falling.`,
    },
    takeaway: r`Spring tides come at full and new Moon, when the Sun and Moon pull along the same line.`,
  },

  "usaaao-2017-first-round-q16": {
    solution: [
      r`Curve A is what Newton's gravity predicts if the galaxy's mass is only what we can see: stars far from the centre should orbit **slower**, like the outer planets of the Solar System.`,
      r`Curve B is what we actually measure: the speed stays **flat** out to great distances. That needs a lot of extra mass spread far beyond the visible stars.`,
      r`This unseen mass, which neither emits nor absorbs light, is **dark matter**. Flat rotation curves were the first strong evidence for it.`,
    ],
    wrongChoices: {
      A: r`Baryons are ordinary matter: stars, gas and dust. Their gravity is exactly what curve A already accounts for, so they cannot explain the extra speed.`,
      B: r`Neutrinos are far too light and too fast-moving to clump around galaxies in the amounts needed. They make up only a tiny fraction of the missing mass.`,
      C: r`Gamma rays are light, not matter. They have no significant gravitational pull and cannot hold stars in fast orbits.`,
      E: r`Globular clusters are made of ordinary stars and contain only a tiny fraction of a galaxy's mass. Their contribution is already in the visible-matter prediction.`,
    },
    takeaway: r`Flat galaxy rotation curves reveal an unseen halo of dark matter.`,
  },

  "usaaao-2017-first-round-q17": {
    solution: [
      r`After the red-giant phase ends with the helium flash, a star settles onto the **horizontal branch**. There it fuses **helium** into carbon (and some oxygen) in its core, while hydrogen keeps burning in a shell around it.`,
    ],
    wrongChoices: {
      A: r`Core hydrogen burning is the **main sequence**. By the horizontal branch, the core's hydrogen is exhausted; only a shell outside the core still burns hydrogen.`,
      B: r`Molecular hydrogen cannot survive anywhere inside a star; it breaks apart at a few thousand kelvin, and it is not a fuel in any case.`,
      D: r`Carbon burning needs core temperatures of nearly a billion kelvin and happens only in very massive stars, long after the horizontal branch.`,
      E: r`Oxygen burning is a late stage in massive stars just before a supernova, nothing to do with the horizontal branch.`,
    },
    takeaway: r`Horizontal-branch stars burn helium in their cores.`,
  },

  "usaaao-2017-first-round-q18": {
    solution: [
      r`A star of 1.1 solar masses is close to the Sun's mass. Stars below about 8 solar masses never get hot enough to fuse beyond carbon and oxygen and cannot explode as supernovae.`,
      r`Such a star ends as a red giant, sheds its outer layers as a planetary nebula, and leaves behind its core as a **white dwarf**, which then simply cools for ever.`,
    ],
    wrongChoices: {
      A: r`The red-giant phase is a **stage along the way**, not the end. After it the star loses its envelope and its core remains as a compact remnant.`,
      C: r`Black holes form only from the most massive stars, above roughly 20 to 25 solar masses. A 1.1-solar-mass star is far too light.`,
      D: r`A neutron star is left by a core-collapse supernova, which needs a star of more than about 8 solar masses.`,
      E: r`A brown dwarf is a "failed star" that never had enough mass (under 0.08 solar masses) to fuse hydrogen. It is a starting point, not an ending, and this star is far too massive for it.`,
    },
    takeaway: r`Stars under about 8 solar masses end as white dwarfs.`,
  },

  "usaaao-2017-first-round-q19": {
    solution: [
      r`The graph has no wavelength labels, but the dips are hydrogen **absorption lines**, and their wavelengths are known: the deep line farthest right is H-alpha at 656 nm, with H-beta at 486 nm and H-gamma at 434 nm to its left. That fixes the scale.`,
      r`Reading the peaks against that scale, the higher, bluer curve peaks near 360 nm and the lower, redder curve near 480 nm.`,
      r`Wien's law, $T = \dfrac{2.898 \times 10^6\ \text{nm·K}}{\lambda_{\max}}$, gives about $8000$ K for the bluer star and $6000$ K for the redder one. The ratio of the two peak wavelengths is about $4:3$, which matches these temperatures.`,
    ],
    wrongChoices: {
      A: r`The two peaks are not far enough apart for a factor of two in temperature. Wien's law makes $\lambda_{\max} \propto 1/T$, so 4000 K and 8000 K would put one peak at twice the wavelength of the other.`,
      C: r`Stars this cool would peak far into the red and infrared, at 700 to 1000 nm, well to the right of the hydrogen lines. The curves here peak blueward of H-beta.`,
      D: r`Stars this hot peak in the ultraviolet at 240 to 320 nm, so their curves would already be falling steeply through the visible range where the hydrogen lines appear. Use the lines to fix the scale first.`,
      E: r`A temperature ratio of 2.4 would put the two peaks at very different wavelengths, but the peaks on the graph are close together, differing by only about a third.`,
    },
    takeaway: r`Known spectral lines fix the wavelength scale, and then Wien's law turns each peak wavelength into a temperature.`,
  },

  "usaaao-2017-first-round-q20": {
    solution: [
      r`The height of a blackbody peak (flux density per unit wavelength) scales as $R^2 T^5$: $R^2$ from surface area and $T^5$ from Planck's law at the peak.`,
      r`From the graph the hotter (bluer) curve peaks about 1.5 times higher than the cooler one. With $T_{\text{hot}}/T_{\text{cold}} = 8000/6000 = 4/3$, we have $\left(\dfrac{R_{\text{hot}}}{R_{\text{cold}}}\right)^2 \left(\dfrac{4}{3}\right)^5 \approx 1.5$.`,
      r`$(4/3)^5 \approx 4.2$, so $\left(\dfrac{R_{\text{hot}}}{R_{\text{cold}}}\right)^2 \approx \dfrac{1.5}{4.2} \approx 0.36$, giving $\dfrac{R_{\text{hot}}}{R_{\text{cold}}} \approx 0.6$. The hotter star is the **smaller** one; it only out-peaks the cooler star because temperature counts for so much.`,
    ],
    wrongChoices: {
      A: r`This would make the hotter star bigger, but then its peak would tower more than ten times above the cooler star's ($T^5$ alone gives a factor of 4). The graph shows only a modest difference in height.`,
      B: r`Too large. Even at equal radii the hot star's peak would be $(4/3)^5 \approx 4$ times higher; the observed ratio of about 1.5 means the hot star must be smaller.`,
      C: r`Too large. Solve $(R_h/R_c)^2 \times 4.2 = 1.5$; the square of the ratio is about 0.36, not 0.64.`,
      D: r`Close, but $\sqrt{1.5/4.2} \approx 0.60$ rather than 0.70. Recheck the peak-height ratio on the graph and the factor $(4/3)^5$.`,
    },
    takeaway: r`Peak spectral flux density scales as R²T⁵, so comparing peak heights and temperatures gives the radius ratio.`,
  },

  "usaaao-2017-first-round-q21": {
    solution: [
      r`Total luminosity scales as $R^2 T^4$, so $\dfrac{L_{\text{hot}}}{L_{\text{cold}}} = (0.6)^2 \left(\dfrac{4}{3}\right)^4 \approx 0.36 \times 3.16 \approx 1.14$. The hot star is slightly the **brighter** of the two.`,
      r`It supplies a fraction $\dfrac{1.14}{1 + 1.14} \approx 0.53$ of the system's light.`,
      r`Taking away the other star's light makes it fainter: $m = 8.2 - 2.5\log_{10}(0.53) \approx 8.2 + 0.69 \approx 8.9$.`,
    ],
    wrongChoices: {
      A: r`Too bright. A single star that provides only about half the system's light must be about 0.7 magnitudes fainter than the combined 8.2, not 0.2.`,
      B: r`Not quite. The brighter star gives about 53% of the light; $-2.5\log_{10}(0.53) \approx 0.69$, so add about 0.7 to 8.2.`,
      D: r`A little too faint. Compute the hot star's share of the light from $L \propto R^2T^4$ with the radius ratio 0.6, then convert with $2.5\log_{10}$.`,
      E: r`Too faint; this would be the magnitude of a star giving only 40% of the light. The two stars are nearly equal in luminosity, with the hot one slightly ahead.`,
    },
    takeaway: r`Split a combined magnitude by fluxes: each star's magnitude is m_total − 2.5 log(its fraction of the light).`,
  },

  "usaaao-2017-first-round-q22": {
    solution: [
      r`The smaller star is the hot one (radius ratio 0.6), so $R_{\text{hot}} = 2\,R_\odot$ and $R_{\text{cold}} = 2/0.6 \approx 3.3\,R_\odot$.`,
      r`Each luminosity in solar units is $\left(\dfrac{R}{R_\odot}\right)^2 \left(\dfrac{T}{T_\odot}\right)^4$. Adding both gives the system's total luminosity, which converts to an absolute magnitude via $M = 4.83 - 2.5\log_{10}(L/L_\odot)$.`,
      r`The distance modulus $m - M = 5\log_{10}(d/10\ \text{pc})$ then gives $d$. The official key gives **85 pc**. Working the numbers through with $T_\odot = 5800$ K gives a larger distance, so the key appears to rest on slightly different graph readings; the method is what to take from this question.`,
    ],
    wrongChoices: {
      A: r`Not the keyed distance. Build the total luminosity from $R^2T^4$ for both stars, convert to an absolute magnitude, and apply the distance modulus with $m = 8.2$.`,
      C: r`Not the keyed distance. Check each step: both stars' luminosities in solar units, their sum as an absolute magnitude, then $d = 10^{(m - M + 5)/5}$ pc.`,
      D: r`Not the keyed distance. Remember the smaller (2 solar-radius) star is the **hotter** one, and the cooler star is larger by a factor of 1/0.6.`,
      E: r`Not the keyed distance. Recheck the luminosity sum and the distance modulus; the key's method lands closer to the low end of the choices.`,
    },
    takeaway: r`Radius and temperature give luminosity, luminosity gives absolute magnitude, and the distance modulus gives distance.`,
  },

  "usaaao-2017-first-round-q23": {
    solution: [
      r`The CMB is the afterglow of the hot early universe, released when atoms first formed. It started as visible light but the expansion has stretched it 1100 times, into **microwaves** (radio wavelengths of about a millimetre).`,
      r`It is **faint** (a 2.7 K glow) and remarkably **uniform**: the same brightness in every direction to about one part in 100,000.`,
    ],
    wrongChoices: {
      A: r`X-rays are far too energetic. The CMB has been redshifted to millimetre wavelengths, and it is faint, not bright.`,
      C: r`The wavelength is wrong: the CMB peaks at about 1 mm, in the microwave band, thousands of times longer than X-rays.`,
      D: r`The CMB is extraordinarily **smooth**, not patchy. The tiny fluctuations that satellites map are only one part in 100,000 of its brightness.`,
      E: r`A cosmic **neutrino** background is predicted to exist, but it has never been detected, and the CMB is light, not neutrinos.`,
    },
    takeaway: r`The CMB is a faint, almost perfectly uniform microwave glow at 2.7 K.`,
  },

  "usaaao-2017-first-round-q24": {
    solution: [
      r`**Inflation** came first, in the universe's first instant.`,
      r`**Recombination** followed about 380,000 years later, when the cooling gas formed neutral atoms and light was set free as the CMB.`,
      r`**Reionization** came hundreds of millions of years after that, when the first stars and galaxies lit up and their ultraviolet light stripped the hydrogen gas back into ions.`,
    ],
    wrongChoices: {
      B: r`Inflation cannot come last; it is the earliest event, before the universe was even a second old.`,
      C: r`Reionization came **after** recombination: the gas was first made neutral (recombination), then re-ionised by the first stars. The "re" in the name is the clue.`,
      D: r`This is the complete reverse. Inflation is first, and the gas had to become neutral before it could be re-ionised.`,
      E: r`Inflation belongs at the very start, not between recombination and reionization.`,
    },
    takeaway: r`Inflation, then recombination (atoms form), then reionization (first stars re-ionise the gas).`,
  },

  "usaaao-2017-first-round-q25": {
    solution: [
      r`Hubble's law is $v = H_0 d$, so $H_0$ is the **slope** of the velocity-distance line.`,
      r`Read the solid line on his graph: at a distance of $2 \times 10^6$ pc (2 Mpc) it reaches about 1000 km/s.`,
      r`Slope: $H_0 = \dfrac{1000\ \text{km/s}}{2\ \text{Mpc}} = 500$ km/s/Mpc. That is about seven times today's value, because Hubble's distances were badly underestimated, but the linear relation was the discovery that mattered.`,
    ],
    wrongChoices: {
      A: r`The number is right but the unit is not: the graph's distance axis is in **millions** of parsecs, so the slope is per megaparsec, not per parsec.`,
      B: r`This is roughly the **modern** value of the Hubble constant, not what Hubble's 1929 data gave. His line is far steeper.`,
      D: r`Too small; a slope of 50 km/s/Mpc would reach only 100 km/s at 2 Mpc, whereas the line on Hubble's graph reaches about 1000 km/s there.`,
      E: r`This is the value from modern CMB measurements, not from Hubble's original graph, whose slope is about seven times steeper.`,
    },
    takeaway: r`The Hubble constant is the slope of the velocity-distance line; Hubble's 1929 value was about 500 km/s/Mpc.`,
  },

  "usaaao-2017-first-round-q26": {
    solution: [
      r`An interferometer combines signals from separate dishes so that they behave like one giant telescope whose size is the **baseline**, the largest separation between dishes.`,
      r`Its angular resolution is about $\lambda/B$. To improve it, make $B$ bigger: spreading the dishes further apart sharpens the image, which is why arrays span kilometres, and even the whole Earth.`,
    ],
    wrongChoices: {
      B: r`Packing more dishes into the same area improves sensitivity and image quality, but the finest detail still depends on the largest separation, which is unchanged.`,
      C: r`Bigger dishes collect more signal, but each dish's own diameter is tiny compared with the baseline, so resolution barely changes.`,
      D: r`Electrical power has nothing to do with resolution; a telescope's resolving power is set by geometry and wavelength.`,
      E: r`Shrinking the baseline makes the resolution **worse**, since the smallest resolvable angle is about $\lambda/B$.`,
    },
    takeaway: r`An interferometer's resolution is set by its longest baseline: λ/B.`,
  },

  "usaaao-2017-first-round-q27": {
    solution: [
      r`The diffraction limit is $\theta = 1.22\,\dfrac{\lambda}{D} = 1.22 \times \dfrac{1.2 \times 10^{-6}}{4.5} \approx 3.3 \times 10^{-7}$ rad.`,
      r`Converting with $206{,}265''$ per radian gives about **0.07 arcseconds**.`,
      r`None of the printed options matches this correctly; the answer options were printed with the wrong units, and the question was excluded from grading in the original exam. The official key nonetheless marks $1.9 \times 10^{-5}$: that number is right in **degrees** ($1.86 \times 10^{-5}$ degrees $\approx 0.07''$), but the options say arcsec. Take the method from this question, not the printed unit.`,
    ],
    wrongChoices: {
      A: r`This is not the keyed option. Note that the options' units do not match a real diffraction limit (about 0.07″ here); compute $1.22\lambda/D$ in radians and convert to arcseconds.`,
      C: r`This is not the keyed option. Compute $\theta = 1.22\lambda/D$ with $\lambda = 1.2 \times 10^{-6}$ m and $D = 4.5$ m; the true limit is about 0.07″, and the options were printed with faulty units.`,
      D: r`This is not the keyed option. The real diffraction limit works out near 0.07″; the printed options carry incorrect units.`,
      E: r`This is not the keyed option. Start from $1.22\lambda/D \approx 3.3 \times 10^{-7}$ rad and convert with 206,265″ per radian.`,
    },
    takeaway: r`Diffraction limit: θ = 1.22 λ/D radians, and 1 radian is 206,265 arcseconds.`,
  },

  "usaaao-2017-first-round-q28": {
    solution: [
      r`Twilight is defined by how far the Sun is **below** the horizon, in three standard steps of 6°.`,
      r`**Civil twilight** ends at 6°: bright planets appear and outdoor reading gets hard. **Nautical twilight** ends at 12°: the sea horizon disappears, so sailors can no longer take star sights. **Astronomical twilight** ends at 18°: the sky is fully dark.`,
    ],
    wrongChoices: {
      A: r`These are not the standard values. The definitions run in steps of 6°: 6, 12 and 18 degrees below the horizon.`,
      C: r`Too small. At only 9° below the horizon there is still plenty of scattered sunlight; full darkness needs the Sun 18° down.`,
      D: r`The first two are swapped. Civil twilight is the brightest stage, so it must use the **smallest** depression, 6°, with nautical at 12°.`,
      E: r`Too large. The sky is fully dark once the Sun is 18° below the horizon, so a 30° limit would mark nothing.`,
    },
    takeaway: r`Civil, nautical and astronomical twilight end with the Sun 6°, 12° and 18° below the horizon.`,
  },

  "usaaao-2017-first-round-q29": {
    solution: [
      r`The Small Magellanic Cloud, a dwarf galaxy orbiting the Milky Way, lies deep in the southern sky at declination $-73^\circ$, inside the constellation **Tucana** (the Toucan), right next to the globular cluster 47 Tucanae.`,
    ],
    wrongChoices: {
      A: r`Orion sits on the celestial equator and is visible from the whole world; the Magellanic Clouds are far south, near the south celestial pole.`,
      B: r`Ophiuchus straddles the celestial equator in the summer sky, nowhere near the far-southern Magellanic Clouds.`,
      C: r`Crux (the Southern Cross) is southern, but it lies on the far side of the south celestial pole from the Magellanic Clouds and contains neither of them.`,
      D: r`Draco winds around the **north** celestial pole, on the opposite side of the sky.`,
    },
    takeaway: r`The Small Magellanic Cloud is in Tucana, near the south celestial pole.`,
  },

  "usaaao-2017-first-round-q30": {
    solution: [
      r`Precession swings the north celestial pole around a circle centred on the ecliptic pole, taking about 25,700 years for one lap. The picture marks where the pole will be at various dates.`,
      r`Follow the circle to the **+10000** mark. It lies in Cygnus, close to **Deneb**, which will then be the "north star" (though not a very close one, about 7° off the pole).`,
      r`Later still, around 14,000 CE, the pole moves on to Vega, the brightest of all the future pole stars.`,
    ],
    wrongChoices: {
      A: r`Vega does become the pole star, but not until about 14,000 CE, several thousand years after the date asked about.`,
      C: r`Thuban in Draco was the pole star around **2700 BCE**, when the Egyptian pyramids were built. That is the past, not 10,000 CE.`,
      D: r`Eltanin (Gamma Draconis) lies well inside the precession circle and is never especially close to the pole.`,
      E: r`Alderamin in Cepheus takes its turn near the pole around 7500 CE; by 10,000 CE the pole has moved on towards Cygnus.`,
    },
    takeaway: r`Precession makes the pole star change over 25,700 years: Thuban in the past, Polaris now, Deneb and then Vega in the future.`,
  },

  "usaaao-2017-first-round-q31": {
    solution: [
      r`The Sun's path, the ecliptic, actually passes through 13 constellations. The twelve traditional zodiac signs leave out **Ophiuchus**, the Serpent Bearer, which the Sun crosses in late November and early December, between Scorpius and Sagittarius.`,
    ],
    wrongChoices: {
      A: r`Corona Borealis is a small northern constellation near Boötes, well north of the ecliptic; the Sun never passes through it.`,
      C: r`Pegasus lies north of the ecliptic in the autumn sky. The Sun passes below it, through Pisces and Aquarius.`,
      D: r`Aquila is north of the ecliptic near the Summer Triangle. The Sun's path runs south of it, through Sagittarius and Capricornus.`,
      E: r`Caelum is a tiny, faint southern constellation far from the ecliptic, near Eridanus and Columba.`,
    },
    takeaway: r`The ecliptic crosses 13 constellations; Ophiuchus is the one left out of the traditional zodiac.`,
  },
};
