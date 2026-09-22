import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2019 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2019-first-round-q1": {
    solution: [
      r`The **Tully-Fisher relation** says that the faster a spiral galaxy's disc rotates (its flat, "asymptotic" rotation speed far from the centre), the more luminous the galaxy is.`,
      r`Measure the rotation speed from the width of the galaxy's 21 cm hydrogen line, read off the luminosity, compare with the apparent brightness, and you have a distance.`,
    ],
    wrongChoices: {
      A: r`The Fundamental Plane is a relation for **elliptical** galaxies, linking their size, velocity dispersion and surface brightness. It says nothing about rotation.`,
      C: r`Press-Schechter is a theory for how many dark-matter halos of each mass form in the universe. It is not a galaxy scaling relation.`,
      D: r`Faber-Jackson is the elliptical-galaxy cousin of Tully-Fisher: it links luminosity to **velocity dispersion**, the random motions of stars, not to rotation.`,
    },
    takeaway: r`Tully-Fisher: spiral luminosity rises with rotation speed; Faber-Jackson is the elliptical version using velocity dispersion.`,
  },

  "usaaao-2019-first-round-q2": {
    solution: [
      r`**Population I** stars are young and rich in heavy elements. They form from the gas in the **thin disc**, and the youngest of them light up the **spiral arms**.`,
      r`**Population II** stars are old and metal-poor. They fill the **halo** (including globular clusters) and the **bulge**, the parts of the Galaxy that formed first.`,
    ],
    wrongChoices: {
      B: r`The bulge is an old, Population II region, and the spiral arms are the very youngest, most Population I part of the Galaxy. Both are on the wrong side here.`,
      C: r`This is backwards. The halo and bulge are the **old** parts of the Galaxy (Population II), while the disc and arms are where young Population I stars are still being born.`,
      D: r`The halo is old (Population II) and the spiral arms are young (Population I); this option mixes them up.`,
    },
    takeaway: r`Young Population I stars live in the thin disc and spiral arms; old Population II stars fill the halo and bulge.`,
  },

  "usaaao-2019-first-round-q3": {
    solution: [
      r`In an expanding universe the distance to use for brightness is the **luminosity distance**, $d_L = d_C(1 + z)$, which is larger than the comoving distance because the light is both spread out and redshifted.`,
      r`$d_L = 4.4 \times (1 + 1.5) = 11$ Gpc $= 11 \times 10^9 \times 3.086 \times 10^{18}$ cm $\approx 3.4 \times 10^{28}$ cm.`,
      r`$L = 4\pi d_L^2 F = 4\pi (3.4 \times 10^{28})^2 \times 10^{-12} \approx 1.4 \times 10^{46}$ erg/s. Dividing by $L_\odot = 3.8 \times 10^{33}$ erg/s gives about **$3.8 \times 10^{12}$** solar luminosities: a few trillion Suns.`,
    ],
    wrongChoices: {
      A: r`This is what you get using the comoving distance of 4.4 Gpc directly. For brightness you need the luminosity distance, which is larger by the factor $(1 + z) = 2.5$, making $L$ larger by $6.25$.`,
      C: r`Too large. Check the conversion of gigaparsecs to centimetres ($1$ pc $= 3.086 \times 10^{18}$ cm) and the factor $(1 + z)$, which should be applied once, not squared before squaring again.`,
      D: r`Far too large, more than a hundred times the true value. Look for a slipped power of ten in $d_L^2$.`,
    },
    takeaway: r`Luminosity distance is d_C(1 + z), and L = 4π d_L² F.`,
  },

  "usaaao-2019-first-round-q4": {
    solution: [
      r`For sizes on the sky the right distance is the **angular-diameter distance**, $d_A = \dfrac{d_C}{1 + z} = \dfrac{4.4}{2.5} = 1.76$ Gpc. It is smaller than the comoving distance because the object was closer when its light set out.`,
      r`Convert the angle: $5'' = \dfrac{5}{206{,}265} = 2.42 \times 10^{-5}$ rad.`,
      r`Separation $= d_A \theta = 1.76 \times 10^9\ \text{pc} \times 2.42 \times 10^{-5} \approx 4.3 \times 10^4$ pc $= 43$ kpc.`,
    ],
    wrongChoices: {
      A: r`This is $5''$ times the **comoving** distance of 4.4 Gpc. For an angular size you must use the angular-diameter distance, which is smaller by the factor $(1 + z)$.`,
      B: r`Too small. Check the angular-diameter distance, $4.4/(1 + 1.5) = 1.76$ Gpc, and the conversion of arcseconds to radians (divide by 206,265).`,
      C: r`Not quite. Compute $d_A = d_C/(1 + z)$ first; using $z = 1.5$ the divisor is 2.5, not something smaller.`,
    },
    takeaway: r`Angular sizes use d_A = d_C/(1 + z), while brightness uses d_L = d_C(1 + z).`,
  },

  "usaaao-2019-first-round-q5": {
    solution: [
      r`The shadow of a vertical tower of height $h$ is $h\tan z$, where $z$ is the Sun's zenith angle. At noon, $z = |\phi - \delta|$.`,
      r`**Shortest** shadow: summer solstice, $\delta = +23.4^\circ$, so $z = 25.2^\circ - 23.4^\circ = 1.8^\circ$ and the shadow is $830 \tan 1.8^\circ \approx 26$ m.`,
      r`**Longest** shadow: winter solstice, $\delta = -23.4^\circ$, so $z = 25.2^\circ + 23.4^\circ = 48.6^\circ$ and the shadow is $830 \tan 48.6^\circ \approx 940$ m. The closest pair is **25 m and 950 m**.`,
    ],
    wrongChoices: {
      A: r`The noon Sun never gets quite overhead in Dubai (its latitude exceeds the tropic by 1.8°), so the shortest shadow is a bit more than 10 m, and the longest, at $\tan 48.6^\circ \approx 1.13$ times the height, is under 1000 m.`,
      C: r`Too long for the shortest and too short for the longest. Compute $830\tan(1.8^\circ)$ and $830\tan(48.6^\circ)$ using the solstice declinations of $\pm 23.4^\circ$.`,
      D: r`Both values are off. At the summer solstice the Sun is only $1.8^\circ$ from the zenith, giving a shadow much shorter than 45 m; in winter the zenith angle of $48.6^\circ$ gives a shadow longer than the tower.`,
    },
    takeaway: r`Noon shadow length is h tan|φ − δ|, shortest at the summer solstice and longest at the winter solstice.`,
  },

  "usaaao-2019-first-round-q6": {
    solution: [
      r`For a height $h$ much smaller than the planet's radius $R$, the distance to the horizon is $d \approx \sqrt{2Rh}$.`,
      r`Everest: $\sqrt{2 \times 6371 \times 8.8} \approx 335$ km. Olympus Mons (Mars radius 3390 km): $\sqrt{2 \times 3390 \times 25} \approx 412$ km.`,
      r`Ratio: $335/412 \approx 0.8$, closest to **1**. Olympus Mons is nearly three times taller, but Mars's smaller radius curves the horizon away faster, and the two effects almost cancel.`,
    ],
    wrongChoices: {
      A: r`A ratio of 0.1 would need the Martian horizon to be ten times further away. The horizon distance only grows as the **square root** of height, and Mars's smaller radius works against it.`,
      C: r`Everest's horizon is not five times further than Olympus Mons's; if anything it is slightly nearer. Use $d = \sqrt{2Rh}$ for both.`,
      D: r`A factor of 10 would need Earth's horizon to be hugely more distant, but the two distances are within 20% of each other.`,
    },
    takeaway: r`Horizon distance ≈ √(2Rh): both the height and the planet's radius matter.`,
  },

  "usaaao-2019-first-round-q7": {
    solution: [
      r`At long wavelengths ($hc/\lambda \ll k_BT$) the Planck function simplifies to the **Rayleigh-Jeans law**: $I_\lambda = \dfrac{2ck_BT}{\lambda^4}$.`,
      r`Taking logs: $\log I = \text{const} + 1 \cdot \log T - 4\log\lambda$. So $b = 1$ and $c = -4$.`,
      r`This is the regime used in radio astronomy, where brightness is directly proportional to temperature ("brightness temperature").`,
    ],
    wrongChoices: {
      B: r`The wavelength exponent has the wrong sign. In the Rayleigh-Jeans limit intensity **falls** as $\lambda^{-4}$, so $c$ must be negative.`,
      C: r`This swaps the roles. The $T^4$ belongs to the **total** (Stefan-Boltzmann) luminosity, not to the intensity at one long wavelength, which is linear in $T$.`,
      D: r`Both exponents are misplaced. Intensity in this limit is proportional to $T$ (exponent $+1$) and to $\lambda^{-4}$ (exponent $-4$).`,
    },
    takeaway: r`Rayleigh-Jeans: at long wavelengths I_λ ∝ T / λ⁴.`,
  },

  "usaaao-2019-first-round-q8": {
    solution: [
      r`Step 1, the heliocentric part. A Hohmann transfer to Mars needs a perihelion speed of $v = v_\oplus\sqrt{\dfrac{2 r_M}{r_\oplus + r_M}} = 29.78\sqrt{\dfrac{2 \times 2.279}{3.775}} \approx 32.7$ km/s, so the probe must leave Earth's neighbourhood with an excess speed $v_\infty = 32.7 - 29.8 \approx 2.9$ km/s.`,
      r`Step 2, escaping Earth. From a 400 km orbit ($r = 6771$ km), circular speed is $v_c = \sqrt{GM_\oplus/r} \approx 7.67$ km/s and escape speed is $\sqrt{2}$ times that, $10.85$ km/s. To leave with $v_\infty$ left over, the burn must reach $v = \sqrt{v_{\text{esc}}^2 + v_\infty^2} = \sqrt{10.85^2 + 2.94^2} \approx 11.24$ km/s.`,
      r`Step 3, the burn itself: $\Delta v = 11.24 - 7.67 \approx 3.57$ km/s.`,
    ],
    wrongChoices: {
      A: r`This is only the hyperbolic excess speed $v_\infty$, the speed the probe must have **after** escaping Earth. The burn must also supply the climb out of Earth's gravity well, starting from orbital speed.`,
      C: r`Too large. The spacecraft already has 7.67 km/s of orbital speed; the burn only makes up the difference to the required departure speed of about 11.2 km/s.`,
      D: r`This is Earth's escape speed from the 400 km orbit, not the change in speed. The probe already moves at 7.67 km/s, so the burn is much smaller than this.`,
      E: r`This is the total speed needed right after the burn (escape speed combined with $v_\infty$), not the **change** in speed. Subtract the orbital speed the probe already has.`,
    },
    takeaway: r`Trans-Mars injection Δv = √(v_esc² + v_∞²) − v_circular, with v_∞ from the Hohmann transfer.`,
  },

  "usaaao-2019-first-round-q9": {
    solution: [
      r`The star swings back and forth by a total of $613.7$ mas over the Martian year, so its **parallax** (half the swing) is $306.85$ mas $= 0.30685''$.`,
      r`Parallax depends on the size of the orbit doing the observing. From Earth, $d = 1/p$ parsecs; from Mars the baseline is $1.523$ AU, so $d = \dfrac{1.523}{p} = \dfrac{1.523}{0.30685} \approx 4.96$ pc.`,
    ],
    wrongChoices: {
      A: r`This uses the **full** swing as the parallax and forgets the Martian baseline. Parallax is half the total variation, and Mars's orbit is 1.523 AU in radius.`,
      B: r`This uses the full 613.7 mas swing instead of half of it. The parallax angle is the half-amplitude of the star's motion.`,
      C: r`This is $1/p$ with the correct half-swing, but for an observer orbiting at **1 AU**. From Mars the baseline is 1.523 AU, so the same angle means a proportionally larger distance.`,
      E: r`Too far. The distance is (baseline in AU) divided by (parallax in arcseconds): $1.523/0.30685$.`,
    },
    takeaway: r`Distance = (orbital baseline in AU) / (parallax in arcseconds), and parallax is half the total swing.`,
  },

  "usaaao-2019-first-round-q10": {
    solution: [
      r`First find the planet's orbit from Kepler's law with the star's mass: $a^3 = M_\star P^2 = 3.5 \times 23.22^2 \approx 1890$, so $a \approx 12.4$ AU.`,
      r`The planet's orbital speed is $v_p = \dfrac{2\pi a}{P} = \dfrac{2\pi \times 12.4 \times 1.496 \times 10^{11}}{23.22 \times 3.156 \times 10^7} \approx 1.59 \times 10^4$ m/s.`,
      r`Star and planet share the same momentum around their centre of mass, so $m_p v_p = M_\star v_\star$: $m_p = \dfrac{3.5 \times 1.989 \times 10^{30} \times 24.2}{1.59 \times 10^4} \approx 1.06 \times 10^{28}$ kg, which is $\dfrac{1.06 \times 10^{28}}{1.898 \times 10^{27}} \approx 5.6$ Jupiter masses.`,
    ],
    wrongChoices: {
      A: r`Too small by a factor of about 8. Check that the star's mass of 3.5 solar masses is included both in Kepler's law and in the momentum balance $m_p v_p = M_\star v_\star$.`,
      B: r`Too small. Recompute the planet's orbital speed from $2\pi a/P$ with $a$ from $a^3 = 3.5 \times 23.22^2$ AU³.`,
      D: r`Too large. Make sure the semi-major axis is the **cube root** of $M_\star P^2$, and that the planet's speed is in m/s when you divide.`,
      E: r`Too large; this would be near the brown-dwarf limit. Recheck the momentum balance, $m_p = M_\star K / v_p$, with $v_p \approx 16$ km/s.`,
    },
    takeaway: r`Kepler's law gives the planet's orbital speed, and m_p v_p = M_star v_star gives its mass.`,
  },

  "usaaao-2019-first-round-q11": {
    solution: [
      r`The angular separation is $\theta = \dfrac{9.2\ \text{AU}}{19.44\ \text{pc}} = 0.473''$, since AU/pc gives arcseconds. In radians that is $\dfrac{0.473}{206{,}265} = 2.29 \times 10^{-6}$.`,
      r`Rayleigh criterion: $D = \dfrac{1.22\lambda}{\theta} = \dfrac{1.22 \times 1.65 \times 10^{-6}}{2.29 \times 10^{-6}} \approx 0.88$ m.`,
      r`In practice contrast, not resolution, is the real obstacle: the planet is millions of times fainter than its star.`,
    ],
    wrongChoices: {
      A: r`This is $\lambda/\theta$ without the Rayleigh factor of 1.22. The criterion for a circular aperture is $\theta = 1.22\lambda/D$.`,
      C: r`Too large. Recompute the angle: 9.2 AU at 19.44 pc is $9.2/19.44$ arcseconds, converted to radians with 206,265.`,
      D: r`Twice the value obtained without the 1.22 factor; there is no factor of two in the Rayleigh criterion. Use $D = 1.22\lambda/\theta$.`,
      E: r`Twice the true answer. Check that the separation was not halved or the wavelength doubled; $D = 1.22 \times 1.65\ \mu\text{m} / 2.29 \times 10^{-6}$.`,
    },
    takeaway: r`Separation in AU divided by distance in pc gives arcseconds; then D = 1.22 λ/θ.`,
  },

  "usaaao-2019-first-round-q12": {
    solution: [
      r`An object crosses the meridian when the local sidereal time equals its right ascension, here $5$ h $35$ m.`,
      r`At the vernal equinox the Sun's RA is 0 h. February 1 is 47 days earlier, and the Sun's RA moves about 4 minutes per day, so on February 1 it is roughly $0$ h $- 47 \times 4$ min $\approx 20$ h $55$ m.`,
      r`At local noon the sidereal time equals the Sun's RA, $20$ h $55$ m. The Orion Nebula transits when sidereal time reaches $5$ h $35$ m, which is $8$ h $40$ m later: about **8:40 PM**.`,
    ],
    wrongChoices: {
      B: r`Too late by about an hour and three-quarters. At noon on February 1 the sidereal time is about 20 h 55 m; count forward to 5 h 35 m.`,
      C: r`Midnight is when objects at RA $\approx$ Sun's RA $+ 12$ h $= 8$ h $55$ m transit. The Orion Nebula, at 5 h 35 m, crosses the meridian a few hours earlier.`,
      D: r`At 1:38 AM the sidereal time is about 10 h 30 m, well past the nebula's RA; Orion would be sinking in the west by then.`,
      E: r`By 3:20 AM the sidereal time is around 12 h; Orion has long since crossed the meridian and is low in the west.`,
    },
    takeaway: r`The Sun's RA moves 4 minutes a day from 0 h at the vernal equinox; objects transit when sidereal time equals their RA.`,
  },

  "usaaao-2019-first-round-q13": {
    solution: [
      r`Dust dims the star. The visual extinction is $A_V = R_V \times E(B - V) = 3.1 \times 0.29 \approx 0.90$ magnitudes.`,
      r`The distance modulus with extinction is $m - M = 5\log_{10}(d/10) + A_V$. With $d = 1040$ pc, $5\log_{10}(104) \approx 10.09$.`,
      r`$M_V = 1.49 - 10.09 - 0.90 \approx -9.5$. That is about half a million times the Sun's visual brightness, fitting for a hypergiant.`,
    ],
    wrongChoices: {
      B: r`Not quite. Compute $A_V = 3.1 \times 0.29 = 0.90$ and $5\log_{10}(1040/10) = 10.09$, then $M_V = m - 10.09 - 0.90$.`,
      C: r`This is the absolute magnitude **without** any extinction correction. Dust makes the star look 0.9 magnitudes fainter than it should, so its true absolute magnitude is brighter (more negative) than this.`,
      D: r`Not quite. The extinction correction is a full $0.90$ mag, applied in the direction that makes the star intrinsically **brighter**.`,
      E: r`This applies the extinction with the wrong sign. Dust makes the star **appear fainter**, so correcting for it makes the absolute magnitude more negative, not less.`,
    },
    takeaway: r`A_V = R_V × E(B − V), and M = m − 5 log(d/10 pc) − A_V.`,
  },

  "usaaao-2019-first-round-q14": {
    solution: [
      r`Count the reactions. The Sun's luminosity is $3.83 \times 10^{26}$ W and, as the question defines it, each run releases $26.73$ MeV $= 4.28 \times 10^{-12}$ J and one neutrino. So the rate is $\dfrac{3.83 \times 10^{26}}{4.28 \times 10^{-12}} \approx 8.9 \times 10^{37}$ neutrinos per second.`,
      r`They spread over a sphere of radius $1.52$ AU $= 2.27 \times 10^{11}$ m, with area $4\pi r^2 = 6.5 \times 10^{23}$ m².`,
      r`Flux $= \dfrac{8.9 \times 10^{37}}{6.5 \times 10^{23}} \approx 1.4 \times 10^{14}$ neutrinos per m² per second. (The full pp chain actually makes two neutrinos per helium nucleus, which would double this.)`,
    ],
    wrongChoices: {
      A: r`Too small by a factor of about 5. Check the conversion of 26.73 MeV to joules ($1$ eV $= 1.6 \times 10^{-19}$ J) and the sphere area at 1.52 AU.`,
      B: r`Far too large. Look for a power-of-ten slip: the reaction rate is about $9 \times 10^{37}$ per second and the sphere area about $6.5 \times 10^{23}$ m².`,
      D: r`Too small by more than a factor of 20. Make sure the distance is in metres ($1.52 \times 1.496 \times 10^{11}$ m) before computing $4\pi r^2$.`,
      E: r`Too large by more than 30 times. Recompute the reaction rate, $L_\odot / (26.73\ \text{MeV})$, and divide by the area of the sphere at Mars's distance.`,
    },
    takeaway: r`Neutrino flux = (luminosity ÷ energy per reaction) ÷ 4πr².`,
  },

  "usaaao-2019-first-round-q15": {
    solution: [
      r`Cepheids pulse with a period that depends on their luminosity: the brighter the Cepheid, the slower it pulses. This is the **period-luminosity relation** discovered by Henrietta Leavitt.`,
      r`Time the pulsations (easy to do from anywhere), read off the true luminosity, compare with the apparent brightness, and the distance follows. That makes Cepheids "standard candles" out to tens of millions of light-years.`,
    ],
    wrongChoices: {
      A: r`Mass and temperature are not directly measurable for a distant Cepheid, and neither one on its own reveals the luminosity.`,
      C: r`Temperature does correlate loosely with period, but it is the link to **luminosity** that lets you convert apparent brightness into distance.`,
      D: r`Mass and luminosity are related for all stars, but a Cepheid's mass cannot be measured from afar. Its **period** can.`,
      E: r`Radius is not something you can observe directly. The usable link is between the observable period and the luminosity.`,
    },
    takeaway: r`Cepheids are distance markers because their pulsation period reveals their luminosity.`,
  },

  "usaaao-2019-first-round-q16": {
    solution: [
      r`A black hole's radius is its Schwarzschild radius, $R_s = \dfrac{2GM}{c^2} \approx 2.95\ \text{km} \times 1.4 = 4.13$ km.`,
      r`Its "average density" is the mass spread over that sphere: $\rho = \dfrac{M}{\tfrac{4}{3}\pi R_s^3} = \dfrac{1.4 \times 1.989 \times 10^{30}}{\tfrac{4}{3}\pi (4130)^3} \approx \dfrac{2.78 \times 10^{30}}{2.96 \times 10^{11}} \approx 9.4 \times 10^{18}$ kg/m³.`,
      r`That is tens of times denser than an atomic nucleus. Because $R_s \propto M$, density falls as $1/M^2$: the smallest black holes are the densest, which is why this is the **maximum** for a stellar-mass black hole.`,
    ],
    wrongChoices: {
      A: r`Too large by a factor of about 1500. Check the Schwarzschild radius, about 4.1 km for 1.4 solar masses, and cube it in metres.`,
      B: r`This is roughly the density of an atomic nucleus or a neutron star. A Chandrasekhar-mass black hole is packed far tighter than that.`,
      C: r`Far too small. A neutron star of this mass is already at $\sim 10^{17}$ kg/m³, and a black hole of the same mass is much smaller still.`,
      E: r`Too large by a factor of $10^8$. Recheck the volume: $\tfrac{4}{3}\pi R^3$ with $R \approx 4.1 \times 10^3$ m.`,
    },
    takeaway: r`A black hole's mean density is M / (4/3 π R_s³), and since R_s ∝ M, smaller black holes are denser.`,
  },

  "usaaao-2019-first-round-q17": {
    solution: [
      r`The equator spot rotates at $\omega(0^\circ) = 15^\circ$/day. For the $40^\circ$ spot, $\sin 40^\circ = 0.643$, so $\sin^2 = 0.413$ and $\sin^4 = 0.171$, giving $\omega(40^\circ) = 15 - 2.5(0.413) - 2(0.171) \approx 13.63^\circ$/day.`,
      r`The equator spot gains $15 - 13.63 = 1.37^\circ$ per day on the other one. They line up again when it has gained a full lap: $\dfrac{360^\circ}{1.37^\circ/\text{day}} \approx 262$ days.`,
    ],
    wrongChoices: {
      A: r`Too short. This would need the spots to separate by about $2.5^\circ$ per day, but the difference in their rotation rates is only about $1.37^\circ$ per day.`,
      B: r`Too short. Recompute $\omega(40^\circ)$: remember to use $\sin^2 40^\circ \approx 0.41$ and $\sin^4 40^\circ \approx 0.17$, not $\sin 40^\circ$ itself.`,
      D: r`Too long. The rate difference is $15 - 13.63 = 1.37^\circ$ per day; divide $360^\circ$ by that.`,
      E: r`Too long. Check the arithmetic in $\omega(40^\circ) = 15 - 2.5\sin^2 40^\circ - 2\sin^4 40^\circ$, which comes out near $13.6^\circ$ per day.`,
    },
    takeaway: r`Two spots realign after 360° divided by the difference in their rotation rates.`,
  },

  "usaaao-2019-first-round-q18": {
    solution: [
      r`Two alternating minima are the two **eclipses** of an eclipsing binary, one when each star passes in front of the other. They are half an orbit apart, so the period is $P = 2 \times 285.7 = 571.4$ days $= 1.564$ years.`,
      r`Kepler's third law in solar units: $M_{\text{total}} = \dfrac{a^3}{P^2} = \dfrac{4.1^3}{1.564^2} = \dfrac{68.9}{2.45} \approx 28$ solar masses.`,
    ],
    wrongChoices: {
      A: r`Impossibly small; this comes from leaving the period in days instead of converting to years. Kepler's law in the form $M = a^3/P^2$ needs years and AU.`,
      B: r`Impossibly small for two stars 4 AU apart with a period under two years. Convert the period to years before squaring.`,
      D: r`Twice the true value. Check that you doubled the interval between minima to get the **full** period, then squared it once.`,
      E: r`This is what you get by treating 285.7 days as the full period. The two different minima are the two eclipses, half an orbit apart, so the period is twice that.`,
    },
    takeaway: r`Alternating eclipses are half a period apart; then M_total = a³/P² in solar units.`,
  },

  "usaaao-2019-first-round-q19": {
    solution: [
      r`Hour angle is sidereal time minus right ascension: $H = 14$ h $- 17$ h $56$ m $= -3$ h $56$ m, which is $-59^\circ$ (the star is east of the meridian, still rising).`,
      r`Altitude comes from $\sin h = \sin\phi\sin\delta + \cos\phi\cos\delta\cos H$: $\sin h = \sin 50^\circ \sin 51.5^\circ + \cos 50^\circ \cos 51.5^\circ \cos 59^\circ = 0.600 + 0.206 = 0.806$.`,
      r`$h = \sin^{-1}(0.806) \approx 54^\circ$.`,
    ],
    wrongChoices: {
      A: r`Too low. Check the second term: $\cos 50^\circ \cos 51.5^\circ \cos 59^\circ$ is positive (about 0.21) because the hour angle is less than $90^\circ$.`,
      C: r`This is the size of the hour angle in degrees, not the altitude. Put $H = -59^\circ$ into the altitude formula.`,
      D: r`This is roughly the altitude at **culmination** ($H = 0$), when Eltanin passes within $1.5^\circ$ of the zenith at this latitude. But the sidereal time is almost four hours short of the star's RA.`,
      E: r`Eltanin's declination ($+51.5^\circ$) exceeds $90^\circ - 50^\circ$, so from latitude $+50^\circ$ it is circumpolar and **never** sets.`,
    },
    takeaway: r`sin(altitude) = sin φ sin δ + cos φ cos δ cos H, with H = sidereal time − RA.`,
  },

  "usaaao-2019-first-round-q20": {
    solution: [
      r`On an H-R diagram temperature increases to the **left** and luminosity increases **upward**. The top left is therefore hot and very luminous.`,
      r`Very luminous means a very bright absolute magnitude, and bright magnitudes are **low** (negative) numbers. So: low absolute magnitude, high effective temperature.`,
    ],
    wrongChoices: {
      A: r`The temperature is wrong: the left side of the H-R diagram is the **hot** side.`,
      C: r`"High absolute magnitude" means **faint**, because the magnitude scale runs backwards. The top of the diagram is bright, which is a low (negative) absolute magnitude.`,
      D: r`Both parts are wrong: the top is bright (low magnitude) and the left is hot.`,
      E: r`Intermediate values describe the middle of the diagram, where Sun-like stars sit, not the top left corner.`,
    },
    takeaway: r`Top left of the H-R diagram: hot and luminous, meaning a low (negative) absolute magnitude.`,
  },

  "usaaao-2019-first-round-q21": {
    solution: [
      r`The distance ladder starts with **stellar parallax**, the direct geometric method, good for the nearest stars (up to a few thousand light-years).`,
      r`**Spectroscopic parallax** (using a star's spectral type to infer its luminosity) reaches across much of the Galaxy. **RR Lyrae** standard candles reach nearby galaxies. The **Hubble constant** turns redshift into distance for galaxies far beyond that.`,
    ],
    wrongChoices: {
      B: r`Stellar parallax is the **first** rung: it works only for the nearest stars, so it belongs before spectroscopic parallax, not after.`,
      C: r`RR Lyrae stars, being bright standard candles, reach farther than spectroscopic parallax, so they come later in the sequence.`,
      D: r`The Hubble relation is the **largest**-scale tool, used for galaxies hundreds of millions of light-years away. It belongs last, after RR Lyrae stars.`,
      E: r`Both the first two and the last two are swapped. Parallax comes first, and the Hubble constant is the longest-range method.`,
    },
    takeaway: r`Distance ladder: parallax, then spectroscopic parallax, then standard candles like RR Lyrae, then Hubble's law.`,
  },

  "usaaao-2019-first-round-q22": {
    solution: [
      r`Mars at **quadrature** means the Sun and Mars are $90^\circ$ apart as seen from Earth, so the angle Sun-Earth-Mars is a right angle.`,
      r`Seen from Mars, Earth is then lit exactly from the side: half the disc sunlit, half dark. That is a **quarter** (half-lit) phase.`,
    ],
    wrongChoices: {
      A: r`Earth looks "new" from Mars only when Earth is between Mars and the Sun (Mars at opposition from Earth), not at quadrature.`,
      B: r`A crescent Earth would need Earth to be nearly between Mars and the Sun, with the Sun-Earth-Mars angle greater than $90^\circ$.`,
      D: r`A gibbous Earth needs the Sun-Earth-Mars angle to be less than $90^\circ$; at quadrature it is exactly $90^\circ$.`,
      E: r`Earth appears full from Mars only when the Sun is directly behind Earth, near conjunction, when Earth is also hardest to see.`,
    },
    takeaway: r`A right angle at the observed body gives a half-lit, quarter phase.`,
  },

  "usaaao-2019-first-round-q23": {
    solution: [
      r`**Sigma Octantis** is the southern pole star, sitting about $1^\circ$ from the south celestial pole. From the northern hemisphere the south celestial pole is always below the horizon, so Sigma Octantis never rises.`,
    ],
    wrongChoices: {
      A: r`Alpha Aurigae is Capella, at declination $+46^\circ$: a bright northern star, circumpolar from much of the northern hemisphere.`,
      B: r`Gamma Cygni (Sadr) sits in the middle of the Northern Cross at declination $+40^\circ$, easily seen from the north.`,
      C: r`Alpha Lyrae is Vega, at $+39^\circ$, one of the brightest stars of the northern summer sky.`,
      E: r`Beta Orionis is Rigel, at $-8^\circ$. Although south of the equator, it is visible from everywhere north of latitude $82^\circ$ N.`,
    },
    takeaway: r`Stars close to the south celestial pole, like Sigma Octantis, never rise for northern observers.`,
  },

  "usaaao-2019-first-round-q24": {
    solution: [
      r`On March 20, the equinox, the Sun is on the celestial equator, directly over the Equator at local noon. At B's noon the Sun is at B's zenith (zenith distance $0^\circ$).`,
      r`A is $91^\circ - 78^\circ = 13^\circ$ of longitude further west, so the Sun is still $13^\circ$ east of A's zenith: A's zenith distance is $13^\circ$. The **difference in zenith distances is 13°**.`,
      r`Altitudes are measured from the horizon, and from the top of a 5790 m mountain the sea-level horizon **dips** by about $\sqrt{2h/R} = \sqrt{2 \times 5790/6.371 \times 10^6} \approx 0.043$ rad $\approx 2.4^\circ$. The official solution applies this dip to B's altitude, so the altitude difference comes out about $13^\circ - 2.4^\circ \approx 11^\circ$.`,
    ],
    wrongChoices: {
      A: r`The zenith-distance difference is right, but the altitude difference in the official solution accounts for the mountain observer's dipped horizon in the other direction, giving a smaller figure than 15°.`,
      B: r`This ignores B's height. Zenith distance, measured from the true vertical, is unaffected by altitude, but the visible horizon from 5790 m is dipped by about $2.4^\circ$, which changes the altitude difference.`,
      C: r`The longitude difference of $13^\circ$ sets the difference in **zenith distances**, not in altitudes. The altitude difference is modified by the horizon dip at B's height.`,
    },
    takeaway: r`Zenith distance is measured from the vertical, altitude from the visible horizon, and a high observer's horizon dips by about √(2h/R).`,
  },

  "usaaao-2019-first-round-q25": {
    solution: [
      r`Schwarzschild radius is proportional to mass, so the mass ratio is $M_A : M_B = 8 : 1$. With equal densities, $M \propto R^3$, so the stellar radii were in the ratio $R_A : R_B = 2 : 1$.`,
      r`Wien's law: $T \propto 1/\lambda_{\max}$, so star B, peaking at half the wavelength, is **twice** as hot: $T_A : T_B = 1 : 2$.`,
      r`Luminosity $\propto R^2 T^4$: $\dfrac{L_A}{L_B} = 2^2 \times \left(\dfrac{1}{2}\right)^4 = \dfrac{4}{16} = \dfrac{1}{4}$.`,
    ],
    wrongChoices: {
      A: r`This would mean A is brighter, but B is twice as hot and $T^4$ is a factor of 16 in B's favour, which beats A's factor of 4 from being larger.`,
      B: r`This counts only the radius factor $2^2 = 4$ and ignores the temperature. B's doubled temperature contributes $2^4 = 16$ the other way.`,
      D: r`Not quite. Combine $R^2$ (factor 4 for A) with $T^4$ (factor 16 for B): $4/16$, not $1/2$.`,
    },
    takeaway: r`Chain the scalings: R_s gives mass, density gives radius, Wien gives temperature, and L ∝ R²T⁴ ties them together.`,
  },

  "usaaao-2019-first-round-q26": {
    solution: [
      r`The transit lasts as long as Mercury takes to cross the Sun's disc, so its duration is inversely proportional to Mercury's **orbital speed** at the time (the observers are stationary and far away, so the geometry is otherwise the same).`,
      r`Kepler's second law gives the speeds at the two extremes: $\dfrac{v_{\text{peri}}}{v_{\text{ap}}} = \dfrac{1 + e}{1 - e} = \dfrac{1.21}{0.79} \approx 1.53$.`,
      r`So the aphelion transit takes about 1.5 times longer than the perihelion one. Of the choices, **2:1** is closest.`,
    ],
    wrongChoices: {
      A: r`Mercury's speed differs noticeably between perihelion and aphelion (its orbit has $e = 0.21$), so the two transits cannot last the same time.`,
      C: r`A 4:1 ratio would need a speed ratio of 4, but $(1 + e)/(1 - e)$ with $e = 0.21$ is only about 1.5.`,
      D: r`Far too large. Even a comet-like orbit with $e = 0.78$ would be needed for a speed ratio of 8; Mercury's eccentricity is only 0.21.`,
    },
    takeaway: r`Perihelion and aphelion speeds are in the ratio (1 + e)/(1 − e), so the slower aphelion transit lasts longer.`,
  },

  "usaaao-2019-first-round-q27": {
    solution: [
      r`Kepler's third law for a binary, in solar units: $M_{\text{total}} = \dfrac{a^3}{P^2}$ with $a$ in AU and $P$ in years.`,
      r`$\dfrac{0.85^3}{0.285^2} = \dfrac{0.614}{0.0812} \approx 7.6$ solar masses.`,
    ],
    wrongChoices: {
      A: r`Too small. Compute $0.85^3 \approx 0.61$ and $0.285^2 \approx 0.081$ and divide.`,
      B: r`Too small. Make sure the semi-major axis is **cubed** and the period **squared**.`,
      D: r`Too large. Recheck $0.85^3 / 0.285^2$.`,
      E: r`Too large. The numerator is about 0.61 and the denominator about 0.081; the ratio is well under 9.`,
    },
    takeaway: r`Binary total mass in solar units is a³/P².`,
  },

  "usaaao-2019-first-round-q28": {
    solution: [
      r`The **hottest** point on a slowly rotating body is the subsolar point, where the surface faces the Sun head-on and radiates only what it absorbs locally: $\sigma T^4 = \dfrac{L_\odot}{4\pi d^2}$ (with zero albedo).`,
      r`That rearranges to $T = T_\odot\sqrt{\dfrac{R_\odot}{d}}$. With $d = 44.58$ AU $= 6.67 \times 10^{12}$ m and $R_\odot = 6.96 \times 10^8$ m, $\sqrt{R_\odot/d} = 0.0102$.`,
      r`$T_{\max} = 5778 \times 0.0102 \approx 59$ K.`,
    ],
    wrongChoices: {
      A: r`This is the **average** equilibrium temperature, which includes a factor $1/\sqrt{2}$ for spreading the sunlight over the whole sphere. The question asks for the **maximum**, at the subsolar point.`,
      C: r`Too hot by $\sqrt{2}$. Check the balance $\sigma T^4 = L_\odot/(4\pi d^2)$ at the subsolar point; there is no extra factor of 2 in the numerator.`,
      D: r`Twice the true value. Recompute $T_\odot\sqrt{R_\odot/d}$ with $d = 44.58$ AU in metres.`,
    },
    takeaway: r`Subsolar temperature is T_sun × √(R_sun/d); the whole-planet average is lower by √2.`,
  },

  "usaaao-2019-first-round-q29": {
    solution: [
      r`Estimate the central pressure as the weight of the overlying material: $P \sim \rho g R$, with $\rho = \dfrac{3M}{4\pi R^3}$ and $g = \dfrac{GM}{R^2}$. That gives $P \sim \dfrac{3GM^2}{4\pi R^4}$.`,
      r`$M = 0.69 \times 1.90 \times 10^{27} = 1.31 \times 10^{27}$ kg and $R = 1.38 \times 6.99 \times 10^7 = 9.65 \times 10^7$ m.`,
      r`$P \sim \dfrac{3 \times 6.674 \times 10^{-11} \times (1.31 \times 10^{27})^2}{4\pi (9.65 \times 10^7)^4} \approx 3 \times 10^{11}$ Pa. One bar is $10^5$ Pa, so this is about **$10^6$ bars**.`,
    ],
    wrongChoices: {
      A: r`A thousand times too high. Check the conversion: 1 bar is $10^5$ Pa, so $3 \times 10^{11}$ Pa is millions of bars, not billions.`,
      C: r`Ten times too low. Recompute $3GM^2/(4\pi R^4)$; the puffed-up radius (1.38 Jupiter radii) lowers the pressure but not by that much.`,
      D: r`A thousand times too low; that is only the pressure a kilometre or so under Earth's oceans. A gas giant's core is under millions of bars.`,
    },
    takeaway: r`Central pressure scales as GM²/R⁴, and a gas giant's core is at roughly a million bars or more.`,
  },

  "usaaao-2019-first-round-q30": {
    solution: [
      r`Kepler's third law with the star's mass: $P^2 = \dfrac{4\pi^2 a^3}{GM}$, so at fixed $a$, $P \propto \dfrac{1}{\sqrt{M}}$.`,
      r`Halving the mass multiplies the period by $\sqrt{2} \approx 1.414$: Earth's year would become about 1.41 years, because the weaker gravity lets it orbit more slowly.`,
    ],
    wrongChoices: {
      A: r`This would be the result if the star were **twice** as massive. Less mass means weaker gravity, a slower orbit and a **longer** year.`,
      B: r`The period depends on the central mass, not only on the orbit size. Halving the mass changes the period by a factor of $\sqrt{2}$.`,
      D: r`This doubles the period, but $P \propto M^{-1/2}$, so halving the mass gives a factor of $\sqrt{2}$, not 2.`,
    },
    takeaway: r`At a fixed orbit size, period scales as 1/√M: a lighter star means a longer year.`,
  },
};
