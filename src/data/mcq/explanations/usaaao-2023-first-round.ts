import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2023 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2023-first-round-q1": {
    solution: [
      r`Julian days count continuously, so the difference is simply $2460000.0 - 2459946.0 = 54$ days.`,
      r`Fifty-four days after January 1 at 12:00 UT: January has 31 days, leaving 23 more into February, so February 24 at 12:00 UT.`,
      r`Poland is one hour ahead of UT, so the local time is **13:00 on 24 February 2023**.`,
    ],
    wrongChoices: {
      A: r`This is only 30 days after the reference date. The Julian day numbers differ by 54, not 30.`,
      C: r`This is 79 days after January 1, but the JD difference is only 54 days. It also gets the time zone offset wrong.`,
      D: r`This is more than five months later. Subtract the two Julian day numbers: they differ by just 54 days.`,
      E: r`A full year later would be a JD difference of 365, not 54.`,
    },
    takeaway: r`Julian day numbers subtract directly to give elapsed days; a .0 JD is always 12:00 UT.`,
  },

  "usaaao-2023-first-round-q2": {
    solution: [
      r`First find the cluster's distance from the Sun-like star: $M = 4.83$, so $d = 10^{(10 - 4.83 + 5)/5} \approx 108$ pc.`,
      r`The cluster's diameter is 4 pc, so its true angular size is $\dfrac{4}{108} = 0.037$ rad $\approx 2.1^\circ$.`,
      r`It just fills the $30^\circ$ eyepiece field, so the magnification is $30/2.1 \approx 14$, and the objective's focal length is $14 \times 20\ \text{mm} \approx 283$ mm.`,
    ],
    wrongChoices: {
      A: r`Twice the true value; this comes from using the cluster's **radius** (2 pc) instead of its diameter when finding the angular size.`,
      C: r`Half the true value. Check the distance from the distance modulus ($m - M = 5.17$ gives about 108 pc) and use the full 4 pc diameter.`,
      D: r`Too large. The true field is about $2.1^\circ$, so the magnification is about 14, and $14 \times 20$ mm is well under 400 mm.`,
      E: r`Not quite. Recompute: distance 108 pc, angular diameter $4/108$ rad $\approx 2.1^\circ$, magnification $30/2.1$, times the 20 mm eyepiece.`,
    },
    takeaway: r`Magnification = (eyepiece field) / (true field), and the objective focal length is magnification × eyepiece focal length.`,
  },

  "usaaao-2023-first-round-q3": {
    solution: [
      r`Both bodies are lit by the same Sun at nearly the same distance, so their brightness scales with **reflecting area** times **albedo**.`,
      r`Area: Earth's radius is 4 times the Moon's, so its disc has $4^2 = 16$ times the area. Albedo: $0.36/0.12 = 3$ times more reflective.`,
      r`Combined: $16 \times 3 = 48$ times brighter.`,
    ],
    wrongChoices: {
      A: r`This inverts both factors. Earth is bigger **and** more reflective than the Moon, so it must be much brighter, not dimmer.`,
      B: r`Not from the formula. The radius ratio must be **squared** to give an area ratio (16), and the albedo ratio is 3.`,
      C: r`This has the albedo ratio upside down ($0.12/0.36$). Earth reflects three times more of the light that hits it, not a third.`,
      D: r`This uses the radius ratio (4) without squaring it. Reflected light depends on the disc's **area**, which goes as radius squared.`,
    },
    takeaway: r`Reflected brightness ∝ (radius)² × albedo.`,
  },

  "usaaao-2023-first-round-q4": {
    solution: [
      r`Wien's law: $\lambda_{\max} = \dfrac{2.9 \times 10^{-3}\ \text{m·K}}{T} = \dfrac{2.9 \times 10^{-3}}{10^6} = 2.9 \times 10^{-9}$ m $= 2.9$ nm.`,
      r`That is in the soft X-ray band, which is exactly why the million-degree corona shows up in X-ray images while the 6000 K surface does not.`,
    ],
    wrongChoices: {
      B: r`A thousand times too long; 2.9 µm is the peak of a 1000 K object, in the infrared. Check the power of ten in $2.9 \times 10^{-3}/10^6$.`,
      C: r`Millimetre waves correspond to a temperature of only about 1 K, like the cosmic microwave background, not a million-degree gas.`,
      D: r`Metre-wavelength radio would need a temperature of a few millikelvin. Hot gas peaks at very short wavelengths.`,
      E: r`Kilometre wavelengths correspond to microkelvin temperatures. Hotter means **shorter**, and $10^6$ K is extremely hot.`,
    },
    takeaway: r`λ_max = 2.9 × 10⁻³ m·K / T: a million-kelvin corona peaks in X-rays.`,
  },

  "usaaao-2023-first-round-q5": {
    solution: [
      r`The parsec is defined so that $d\,(\text{pc}) = \dfrac{1}{p\,('')}$. With $p = 1/3''$: $d = 3$ pc, about 10 light-years.`,
      r`Bessel's 1838 measurement was the first direct proof of how far away the stars are.`,
    ],
    wrongChoices: {
      A: r`A third of a light-year is far inside the Solar System's Oort cloud; no star is that close. And $1/p$ gives parsecs, not light-years.`,
      B: r`Three light-years is closer than the nearest star (4.2 light-years). The formula $d = 1/p$ gives the answer in **parsecs**.`,
      C: r`This is the parallax value itself, not its reciprocal. Distance is $1/p$: with $p = 1/3$, that is 3.`,
      E: r`A thousand times too far; 3 kpc would need a parallax of a third of a milliarcsecond, far beyond Bessel's abilities.`,
    },
    takeaway: r`Distance in parsecs is one over parallax in arcseconds.`,
  },

  "usaaao-2023-first-round-q6": {
    solution: [
      r`$L = 4\pi R^2\sigma T^4 = 4\pi (10^4)^2 \times 5.67 \times 10^{-8} \times (10^6)^4 = 4\pi \times 10^8 \times 5.67 \times 10^{-8} \times 10^{24} \approx 7.1 \times 10^{25}$ W.`,
      r`Dividing by $L_\odot = 3.8 \times 10^{26}$ W gives about **0.2 solar luminosities**. A city-sized object shining like a fifth of a Sun, almost all of it in X-rays.`,
    ],
    wrongChoices: {
      A: r`Half the true value. Check the arithmetic: $4\pi \times 5.67 \times 10^{24}$ W is about $7 \times 10^{25}$ W, which is 0.19 of the Sun's output.`,
      C: r`Too large. Recompute $4\pi R^2\sigma T^4$ with $R = 10^4$ m and $T = 10^6$ K, then divide by $3.8 \times 10^{26}$ W.`,
      D: r`Twice the true value. Make sure the radius is squared ($10^8$), not cubed.`,
      E: r`Too large. The luminosity is $7.1 \times 10^{25}$ W, under a fifth of the Sun's.`,
    },
    takeaway: r`L = 4πR²σT⁴: a tiny, million-degree surface still radiates like a fair fraction of the Sun.`,
  },

  "usaaao-2023-first-round-q7": {
    solution: [
      r`Balmer lines are transitions to and from the **second** energy level of hydrogen ($n = 2$). To absorb a Balmer photon, an atom must already be sitting in $n = 2$.`,
      r`In cold interstellar gas nearly every hydrogen atom is in the ground state, $n = 1$. The $n = 2$ level lies 10.2 eV up, far more than the thermal energy available, so it is essentially **never occupied**, and no Balmer absorption can occur.`,
    ],
    wrongChoices: {
      A: r`The Balmer series starts from $n = 2$, not $n = 1$ (transitions from $n = 1$ are the Lyman series, in the ultraviolet).`,
      B: r`Wrong level, and the wrong occupation: in cold gas the $n = 1$ ground state is where almost **all** the atoms are.`,
      C: r`The level is right but the occupation is wrong: cold gas cannot lift atoms 10.2 eV up to $n = 2$, so that level is empty, which is exactly why the lines are missing.`,
      E: r`Transitions from $n = 3$ are the Paschen series, in the infrared. Balmer lines involve $n = 2$.`,
    },
    takeaway: r`Balmer absorption needs atoms in n = 2, which cold gas cannot populate.`,
  },

  "usaaao-2023-first-round-q8": {
    solution: [
      r`A parabolic orbit sits exactly at zero total energy: the comet is moving at precisely the local escape speed.`,
      r`A fragment's new speed is $|\vec V + \vec v|$, and since $v \ll V$, $|\vec V + \vec v|^2 \approx V^2 + 2Vv\cos\theta$, where $\theta$ is the angle between the fragment's kick and the comet's motion.`,
      r`Fragments kicked with any **forward** component ($\cos\theta > 0$) end up above escape speed and leave for ever; those kicked backward drop below it and stay bound. Forward and backward are each half of all directions, so **50%** escape.`,
    ],
    wrongChoices: {
      A: r`Some fragments must escape: any kick with a forward component pushes the fragment above the escape speed the comet already had.`,
      C: r`Not all escape: fragments kicked backward end up slower than escape speed and fall into bound elliptical orbits.`,
      D: r`The fraction does not depend on the size of $v$ to first order: what matters is only whether the kick points forward or backward, not how large it is.`,
      E: r`Since $v \ll V$, this would be nearly 100%, but half the fragments are kicked backward and remain bound.`,
    },
    takeaway: r`On a parabolic orbit, any forward nudge means escape and any backward nudge means capture: half and half.`,
  },

  "usaaao-2023-first-round-q9": {
    solution: [
      r`**Galaxy A** (spiral): a star on a circular orbit at radius $R$ has $\dfrac{v^2}{R} = \dfrac{GM}{R^2}$, so $M_A = \dfrac{v^2R}{G}$.`,
      r`**Galaxy B** (uniform sphere with random motions): the virial theorem gives $2K = |U|$. The measured dispersion is only the radial component, so the total kinetic energy is $K = \tfrac{3}{2}Mv^2$, and for a uniform sphere $|U| = \tfrac{3}{5}\dfrac{GM^2}{R}$.`,
      r`$3Mv^2 = \tfrac{3}{5}\dfrac{GM^2}{R}$ gives $M_B = \dfrac{5v^2R}{G}$.`,
    ],
    wrongChoices: {
      A: r`The spiral's mass is right, but a random-motion galaxy needs the virial theorem, which brings in a factor of 3 for the three velocity components and $5/3$ from the uniform-sphere potential.`,
      B: r`The factor for the elliptical is too small. Three velocity components (factor 3) and the uniform-sphere potential (factor $5/3$) combine to give 5, not $5/6$.`,
      C: r`The elliptical's factor is 5, not $5/4$: use $2K = |U|$ with $K = \tfrac{3}{2}Mv^2$ and $|U| = \tfrac{3}{5}GM^2/R$.`,
      E: r`These are swapped and wrong: the rotating spiral gives simply $v^2R/G$, and the elliptical is the one with the extra factor.`,
    },
    takeaway: r`Rotation gives M = v²R/G; random motions in a uniform sphere give M = 5σ_r²R/G.`,
  },

  "usaaao-2023-first-round-q10": {
    solution: [
      r`With its speed cut to zero the satellite falls straight in. A straight radial fall is the limiting case of an ellipse squashed flat, with semi-major axis $a = r/2$ (the far end at $r$, the near end at the planet's centre).`,
      r`The fall takes half the period of that ellipse: $t = \dfrac{T}{2} = \pi\sqrt{\dfrac{a^3}{GM}} = \pi\sqrt{\dfrac{r^3}{8GM}}$.`,
      r`$GM = 6.674 \times 10^{-11} \times 4.67 \times 10^{24} = 3.12 \times 10^{14}$ and $r^3 = 2.16 \times 10^{26}$, so $t = \pi\sqrt{\dfrac{2.16 \times 10^{26}}{2.49 \times 10^{15}}} \approx 9.2 \times 10^5$ s $\approx 11$ days. (Venus's radius is tiny compared with $r$, so hitting the surface takes essentially the full fall time.)`,
    ],
    wrongChoices: {
      A: r`Far too short. From $6 \times 10^8$ m the pull of Venus is weak at first ($g \approx 10^{-3}$ m/s²) and the fall takes over a week.`,
      B: r`Too short. Use half the period of the degenerate ellipse with $a = r/2$: $t = \pi\sqrt{r^3/(8GM)}$.`,
      D: r`Too long. This is close to the **full** period of the original circular orbit ($2\pi\sqrt{r^3/GM} \approx 30$ days); the radial fall takes only half the period of a much smaller ellipse.`,
      E: r`Too long. Check that the semi-major axis of the fall trajectory is $r/2$, not $r$, and that you take half the period.`,
    },
    takeaway: r`A radial fall from rest is half the period of a degenerate ellipse with a = r/2: t = π√(r³/8GM).`,
  },

  "usaaao-2023-first-round-q11": {
    solution: [
      r`Fuel: the hydrogen mass is $f_H M = 0.71 \times 9.1 \times 10^{29} = 6.5 \times 10^{29}$ kg. Fusion converts a fraction $\epsilon = 0.007$ of that into energy.`,
      r`$E = 0.007 \times 6.5 \times 10^{29} \times (3 \times 10^8)^2 \approx 4.1 \times 10^{44}$ J.`,
      r`Lifetime at solar luminosity: $t = \dfrac{4.1 \times 10^{44}}{3.8 \times 10^{26}} \approx 1.1 \times 10^{18}$ s (about 34 billion years; using all the hydrogen, not just the core's, gives an overestimate).`,
    ],
    wrongChoices: {
      A: r`This uses the **helium** fraction (0.22) instead of the hydrogen fraction. It is the hydrogen that fuses.`,
      C: r`This uses the star's entire mass as fuel, ignoring $f_H = 0.71$. Only the hydrogen can burn.`,
      D: r`A hundred times too long. Check the powers of ten: $0.007 \times 6.5 \times 10^{29} \times 9 \times 10^{16}$ J divided by $3.8 \times 10^{26}$ W.`,
      E: r`Ten thousand times too long, longer than the universe has existed many times over. Recheck the unit conversions.`,
    },
    takeaway: r`Lifetime = ε f_H M c² / L: only the hydrogen fraction is fuel.`,
  },

  "usaaao-2023-first-round-q12": {
    solution: [
      r`From $r_{\max} = 4r_{\min}$: $a(1 + e) = 4a(1 - e)$ gives $e = 0.6$, and then $a = \dfrac{r_{\min}}{1 - e} = 2.5\,r_{\min}$. So "at least $2.5\,r_{\min}$ away" means $r \ge a$.`,
      r`The planet is exactly $a$ from the star at the two ends of the minor axis, where the eccentric anomaly is $E = 90^\circ$. Kepler's equation gives the mean anomaly there: $M = E - e\sin E = \dfrac{\pi}{2} - 0.6 = 0.971$ rad, which is a fraction $\dfrac{0.971}{2\pi} = 0.155$ of the period after perihelion.`,
      r`The planet is closer than $a$ for $2 \times 0.155 = 0.31$ of the period (around perihelion), so it is at least $a$ away for the remaining $1 - 0.31 = 0.69$: **69%**. Equivalently, the far half of the orbit takes $\left(\tfrac{1}{2} + \tfrac{e}{\pi}\right)T$.`,
    ],
    wrongChoices: {
      A: r`Too small. The far half of the orbit is where the planet moves slowly, so it spends **more** than half the period out there, not less than a quarter.`,
      B: r`Half would be right only if the planet moved at constant speed. By Kepler's second law it lingers at large distances, so the fraction exceeds 50%.`,
      C: r`Not quite. The extra time beyond half a period is $e/\pi = 0.6/\pi \approx 0.19$ of the period, giving about 0.69, not 0.57.`,
      E: r`Too large. The fraction is $\tfrac{1}{2} + \tfrac{e}{\pi}$ with $e = 0.6$, about 0.69.`,
    },
    takeaway: r`Beyond the minor axis a planet spends (1/2 + e/π) of its period; Kepler's equation M = E − e sin E gives the timing.`,
  },

  "usaaao-2023-first-round-q13": {
    solution: [
      r`Convert the magnitude dip to a flux dip: $\dfrac{F_{\min}}{F_{\max}} = 10^{-0.4 \times 0.037} = 0.9665$, so the planet blocks $1 - 0.9665 = 0.0335$ of the star's light.`,
      r`Transit depth is the area ratio: $\left(\dfrac{R_p}{R_\star}\right)^2 = 0.0335$, so $\dfrac{R_p}{R_\star} = 0.183$.`,
      r`$R_p = 0.183 \times 0.41\,R_\odot \approx 0.075\,R_\odot$, about 80% of Jupiter's radius.`,
    ],
    wrongChoices: {
      B: r`Slightly too large. Check the flux ratio: $10^{-0.4 \times 0.037} = 0.9665$, giving a depth of 3.35%, not 3.7%.`,
      C: r`Too large. Convert the 0.037-magnitude dip to a flux fraction before taking the square root; do not use 0.037 directly as the depth.`,
      D: r`Too large. The depth is 3.35%, its square root is 0.183, and times 0.41 solar radii that is about 0.075.`,
      E: r`Too large by 60%. A planet this size would block 8.6% of the star's light, a dip of nearly 0.1 magnitudes.`,
    },
    takeaway: r`Magnitude dip → flux dip (10^(−0.4Δm)) → radius ratio (square root) → planet radius.`,
  },

  "usaaao-2023-first-round-q14": {
    solution: [
      r`The universe is about 13.8 billion years old, so a star born 0.4 billion years after the Big Bang has been shining for about 13.4 billion years. To still exist it needs a lifetime at least that long.`,
      r`Set $\left(\dfrac{M_\odot}{M}\right)^{2.5} \times 10^{10} = 1.34 \times 10^{10}$: $\left(\dfrac{M_\odot}{M}\right)^{2.5} = 1.34$, so $\dfrac{M_\odot}{M} = 1.34^{0.4} \approx 1.12$ and $M \approx 0.89\,M_\odot$.`,
      r`Any first-generation star heavier than about 0.9 solar masses has already died.`,
    ],
    wrongChoices: {
      A: r`A 3.6-solar-mass star lives only about 400 million years by this formula; it would have died in the universe's first billion years.`,
      B: r`A 2-solar-mass star lasts about 1.8 billion years, far short of the 13.4 billion needed.`,
      C: r`A 1.3-solar-mass star lives about 5.2 billion years, so a first-generation star of this mass burned out long ago.`,
      E: r`A 0.75-solar-mass star can survive (its lifetime is about 20 billion years), but the question asks for the **most massive** survivor, and a somewhat heavier star also makes it.`,
    },
    takeaway: r`Set the lifetime formula equal to the age of the universe minus the birth time to find the heaviest surviving star.`,
  },

  "usaaao-2023-first-round-q15": {
    solution: [
      r`Speed in Earth's frame: $\beta = \dfrac{4.37\ \text{ly}}{20.0\ \text{yr}} = 0.2185$ (about 22% of light speed).`,
      r`Lorentz factor: $\gamma = \dfrac{1}{\sqrt{1 - 0.2185^2}} = \dfrac{1}{\sqrt{0.9523}} = 1.0248$.`,
      r`Time on the sail's own clock is shorter by $\gamma$: $\dfrac{20.0}{1.0248} \approx 19.5$ years.`,
    ],
    wrongChoices: {
      A: r`Too short; this would need $\gamma = 1.08$, a speed of about 0.38c. At 0.22c the time dilation is only about 2.5%.`,
      B: r`Too short. With $\beta = 0.2185$, $\gamma = 1.025$, so the sail's clock runs about 0.5 years behind, not a full year.`,
      D: r`Special relativity says a moving clock runs slow. At 22% of light speed the effect is small but real: about half a year less.`,
      E: r`The traveller's time is always **shorter** than the time measured by the observer who sees the traveller moving.`,
    },
    takeaway: r`Proper time on the traveller's clock is the Earth-frame time divided by γ = 1/√(1 − β²).`,
  },

  "usaaao-2023-first-round-q16": {
    solution: [
      r`The map shows the region between Virgo and the southern Milky Way. Labelled on it (see the solution figure) are Virgo, Corvus, Libra, Scorpius, Lupus, Centaurus, Crux, Musca, Norma, Ara and more.`,
      r`**Corona Borealis** is not there. It lies well to the north of Libra and Virgo, next to Boötes, above the top edge of this map.`,
    ],
    wrongChoices: {
      A: r`Virgo is on the map, on the left, with Spica as its brightest star.`,
      B: r`Crux, the Southern Cross, is on the map at the top right, in the Milky Way next to Centaurus.`,
      C: r`Lupus, the Wolf, is on the map between Centaurus and Scorpius.`,
      D: r`Libra, the Scales, is on the map just below and right of Virgo, with its distinctive quadrilateral.`,
    },
    takeaway: r`Corona Borealis is a northern constellation near Boötes, far from the Virgo-Scorpius region.`,
  },

  "usaaao-2023-first-round-q17": {
    solution: [
      r`A spherical triangle's area is $R^2 \times$ (spherical excess), where the excess is the sum of its angles minus $180^\circ$. Here the area is 6.75% of $4\pi R^2$, so the excess is $0.0675 \times 4\pi = 0.27\pi$ rad $= 48.6^\circ$.`,
      r`The angle at the North Pole is the longitude difference, $67.55^\circ - 18.95^\circ = 48.6^\circ$. So the other two angles must add to exactly $180^\circ$.`,
      r`In a spherical triangle, two angles are supplementary exactly when the sides opposite them are supplementary. Those sides are the co-latitudes: $(90^\circ - 66.56^\circ) + (90^\circ - \delta) = 180^\circ$, giving $\delta = -66.56^\circ$, that is **66.56° S**.`,
    ],
    wrongChoices: {
      A: r`If Caia were at the same latitude as Baia the triangle would be small and symmetric, with an area far below 6.75% of the sphere.`,
      B: r`A northern Caia gives a triangle confined to the northern hemisphere, too small for the required area. The 6.75% forces the triangle to stretch deep into the south.`,
      C: r`Too far north. With the excess equal to the polar angle, the two co-latitudes must add to $180^\circ$, which puts Caia as far south as Baia is north.`,
      D: r`Southern, but not far enough. The condition is co-latitude of Baia plus co-latitude of Caia $= 180^\circ$, so $\delta = -66.56^\circ$ exactly.`,
    },
    takeaway: r`Spherical triangle area = R² × (angle sum − 180°), and supplementary angles face supplementary sides.`,
  },

  "usaaao-2023-first-round-q18": {
    solution: [
      r`The tip of a shadow traces the projection of the Sun's daily circle onto the ground, which is always a **conic section**. It is a hyperbola when the Sun rises and sets normally, a parabola when the Sun's circle just grazes the horizon, an ellipse when the Sun never sets, and a straight line when the Sun is on the celestial equator (its daily path is then a great circle).`,
      r`Baia sits exactly on the Arctic Circle ($66.56^\circ$ N). On the summer solstice the midnight Sun just touches the horizon, so Lucas's shadow tip traces a **parabola**. Justin, on the equator, sees the solstice Sun rise and set: a **hyperbola**.`,
      r`On the equinox the Sun's declination is zero for everyone, so both shadow paths are **straight lines**.`,
    ],
    wrongChoices: {
      B: r`On the equinox the Sun moves along the celestial equator, a great circle, whose projection onto any ground plane is a straight line, not a hyperbola.`,
      C: r`Justin's solstice shadow is not a parabola: at the equator the Sun rises and sets with its daily circle cutting the horizon, which gives a hyperbola.`,
      D: r`The first two are swapped, and the equinox path for Lucas is a line, not a hyperbola. The parabola belongs to the Arctic Circle observer whose midnight Sun grazes the horizon.`,
      E: r`The first two are swapped. The Sun's circle grazes the horizon at Baia (parabola) and cuts it at the equator (hyperbola).`,
    },
    takeaway: r`Shadow-tip paths are conics: hyperbola for a rising-and-setting Sun, parabola when it grazes the horizon, a line at the equinox.`,
  },

  "usaaao-2023-first-round-q19": {
    solution: [
      r`For an edge-on circular orbit with the planet much lighter than the star, $m_p = K\left(\dfrac{P}{2\pi G}\right)^{1/3} M_\star^{2/3}$.`,
      r`In SI: $P = 4.2 \times 86{,}400 = 3.63 \times 10^5$ s, so $\left(\dfrac{P}{2\pi G}\right)^{1/3} = \left(\dfrac{3.63 \times 10^5}{4.19 \times 10^{-10}}\right)^{1/3} \approx 9.5 \times 10^4$. And $M_\star^{2/3} = (2.19 \times 10^{30})^{2/3} \approx 1.69 \times 10^{20}$.`,
      r`$m_p = 56 \times 9.5 \times 10^4 \times 1.69 \times 10^{20} \approx 9.0 \times 10^{26}$ kg $= 0.47\,M_J$.`,
    ],
    wrongChoices: {
      A: r`Too large. Check $M_\star^{2/3}$ with the 1.1 factor, and the cube root of $P/(2\pi G)$ with the period in seconds.`,
      B: r`Too large. Recompute: a 56 m/s wobble over 4.2 days around a 1.1-solar-mass star corresponds to a bit under half a Jupiter mass.`,
      C: r`Too large. The mass is $K(P/2\pi G)^{1/3}M_\star^{2/3}$; with these numbers it comes out near $9 \times 10^{26}$ kg.`,
      E: r`Too small. Make sure the star's mass is raised to the power $2/3$, not $1/3$.`,
    },
    takeaway: r`Planet mass from a radial-velocity curve: m = K (P/2πG)^(1/3) M_star^(2/3) for an edge-on circular orbit.`,
  },

  "usaaao-2023-first-round-q20": {
    solution: [
      r`For a classical electromagnetic wave the intensity depends on the **amplitude** of the electric field: $I = \tfrac{1}{2}\epsilon_0 c E_0^2$. Frequency does not appear.`,
      r`Two waves with the same amplitude therefore carry the same intensity, whatever their frequencies: the ratio is **1**.`,
    ],
    wrongChoices: {
      A: r`This would be right if intensity fell as the square of frequency, but the classical intensity of a wave is set by its amplitude alone.`,
      B: r`Intensity does not decrease with frequency. For fixed amplitude it is unchanged.`,
      D: r`Doubling the frequency does not double the intensity of a classical wave; that depends on $E_0^2$ only.`,
      E: r`Intensity is proportional to amplitude squared, not frequency squared. Same amplitude means same intensity.`,
    },
    takeaway: r`Wave intensity goes as amplitude squared and is independent of frequency.`,
  },

  "usaaao-2023-first-round-q21": {
    solution: [
      r`Distance from parallax: $d = \dfrac{1000}{13.29} = 75.2$ pc. For an edge-on circular orbit the maximum angular separation is the semi-major axis itself: $a = \theta \times d = 2.98 \times 10^{-3} \times 75.2 \approx 0.224$ AU.`,
      r`Period in years: $P = 41.08/365.25 = 0.1125$ yr.`,
      r`Kepler's third law in solar units: $M_{\text{total}} = \dfrac{a^3}{P^2} = \dfrac{0.224^3}{0.1125^2} = \dfrac{0.01127}{0.01265} \approx 0.89\,M_\odot$.`,
    ],
    wrongChoices: {
      A: r`Too small. Check $a = \theta d$ with $\theta$ in arcseconds and $d$ in parsecs, which gives AU directly, then cube it.`,
      B: r`Too small. Recompute $0.224^3/0.1125^2$; keep three significant figures.`,
      D: r`Too large. Make sure the period is in years ($41.08/365.25$) before squaring.`,
      E: r`Too large by 50%. Check that the separation was not multiplied by an extra factor; for an edge-on circular orbit $a$ is simply the maximum separation.`,
    },
    takeaway: r`Angular separation × distance gives a in AU, and then M_total = a³/P².`,
  },

  "usaaao-2023-first-round-q22": {
    solution: [
      r`A fast-rotating blackbody planet has $T \propto d^{-1/2}$. Liquid water needs $T$ between 273 K and 373 K everywhere on the orbit: hottest at periapsis, coldest at apoapsis.`,
      r`Push both to their limits: $\dfrac{T_{\text{peri}}}{T_{\text{ap}}} = \sqrt{\dfrac{r_{\text{ap}}}{r_{\text{peri}}}} = \dfrac{373}{273}$, so $\dfrac{r_{\text{ap}}}{r_{\text{peri}}} = \dfrac{1 + e}{1 - e} = \left(\dfrac{373}{273}\right)^2 = 1.867$.`,
      r`Solve: $1 + e = 1.867 - 1.867e$, so $e = \dfrac{0.867}{2.867} \approx 0.30$.`,
    ],
    wrongChoices: {
      A: r`Too small. The temperature ratio is $373/273 = 1.366$, and the distance ratio is its **square**, 1.867; then $e = (1.867 - 1)/(1.867 + 1)$.`,
      C: r`Not quite. Check the algebra: $(1 + e)/(1 - e) = 1.867$ gives $e = 0.867/2.867$.`,
      D: r`Too large. Recompute $(373/273)^2$ and solve $(1 + e)/(1 - e)$ equal to it.`,
      E: r`This uses the temperature ratio without squaring it, or mis-solves for $e$. Distance goes as $1/T^2$, so the ratio of distances is $(373/273)^2$.`,
    },
    takeaway: r`With T ∝ d^(−1/2), the periapsis-to-apoapsis temperature ratio fixes (1 + e)/(1 − e).`,
  },

  "usaaao-2023-first-round-q23": {
    solution: [
      r`At $40^\circ$ N the Sun never sets on any day when its declination is at least $90^\circ - 40^\circ = 50^\circ$.`,
      r`With obliquity $60^\circ$ the Sun's declination through the year is $\sin\delta = \sin 60^\circ \sin\lambda$, where $\lambda$ is the Sun's position along its yearly path. $\delta \ge 50^\circ$ needs $\sin\lambda \ge \dfrac{\sin 50^\circ}{\sin 60^\circ} = 0.885$, i.e. $\lambda$ between $62.2^\circ$ and $117.8^\circ$.`,
      r`That is $55.6^\circ$ out of $360^\circ$ of the year: $\dfrac{55.6}{360} \times 365.25 \approx 56$ days of midnight Sun.`,
    ],
    wrongChoices: {
      A: r`This is only the time from the start of the polar day to the solstice; the polar day continues for the same length afterwards, doubling the total.`,
      C: r`Too many. The declination must exceed $50^\circ$, which with a 60° tilt only holds for about $56^\circ$ of the Sun's yearly $360^\circ$ path.`,
      D: r`Too many. Solve $\sin\lambda \ge \sin 50^\circ/\sin 60^\circ$ for the range of $\lambda$ and convert to days.`,
      E: r`Far too many; this is nearly a third of the year, which would need the observer to be much closer to the pole than $40^\circ$ N.`,
    },
    takeaway: r`Polar day occurs while the Sun's declination exceeds 90° − latitude; sin δ = sin ε sin λ tracks it through the year.`,
  },

  "usaaao-2023-first-round-q24": {
    solution: [
      r`A parabolic mirror $y = \dfrac{x^2}{4f}$ has focal length $f$. Matching $y = \dfrac{x^2}{36}$ gives $4f = 36$ m, so $f = 9$ m. (The $-1$ m just shifts the mirror down.)`,
      r`The tube meets the mirror at $y = 0$: $\dfrac{x^2}{36} = 1$, so $x = \pm 6$ m and the aperture is $D = 12$ m.`,
      r`Focal ratio: $\dfrac{f}{D} = \dfrac{9}{12} = 0.75$, an extremely fast **f/0.75**.`,
    ],
    wrongChoices: {
      B: r`This would need the focal length to equal the diameter, but $f = 9$ m and $D = 12$ m.`,
      C: r`Not from the numbers. The focal length is $36/4 = 9$ m and the aperture is 12 m.`,
      D: r`This is $D/f = 12/9$, the ratio upside down. The f-number is focal length **divided by** aperture.`,
      E: r`Not from the numbers. Check: $y = x^2/(4f)$ gives $f = 9$ m; $y = 0$ gives $x = \pm 6$ m.`,
    },
    takeaway: r`A parabola y = x²/(4f) focuses at f; the f-number is f divided by the aperture diameter.`,
  },

  "usaaao-2023-first-round-q25": {
    solution: [
      r`The Sun reaches the zenith somewhere in the year only for latitudes with $|\phi| \le i$ (the tropics). The Sun fails to rise on some day only for latitudes with $|\phi| \ge 90^\circ - i$ (the polar regions).`,
      r`A place can be both only if $i \ge 90^\circ - i$, that is $i \ge 45^\circ$. At exactly $45^\circ$ the tropic and the polar circle coincide.`,
    ],
    wrongChoices: {
      A: r`With no tilt there are no seasons at all: the Sun is overhead only at the equator and never fails to rise anywhere except at the poles.`,
      B: r`At $30^\circ$ tilt the tropics reach $30^\circ$ and the polar circles start at $60^\circ$; the two zones are separated by a $30^\circ$ gap.`,
      D: r`At $60^\circ$ the zones overlap (tropics to $60^\circ$, polar circles from $30^\circ$), so such places exist, but the question asks for the **minimum** tilt, which is where the boundaries first meet.`,
      E: r`At $90^\circ$ every latitude is both tropical and frigid, but that is far above the minimum tilt needed.`,
    },
    takeaway: r`Tropics extend to latitude i and polar circles begin at 90° − i; they meet when i = 45°.`,
  },

  "usaaao-2023-first-round-q26": {
    solution: [
      r`The comet comes in from far away with speed $v_\infty = 10^4$ m/s, so its orbit is a hyperbola. "Would graze the Sun if it went straight" means its **impact parameter** is $b = R_\odot$ (gravity will actually bend it into the Sun).`,
      r`For a hyperbola, $e = \sqrt{1 + \left(\dfrac{b v_\infty^2}{GM}\right)^2}$. Here $\dfrac{b v_\infty^2}{GM} = \dfrac{6.96 \times 10^8 \times 10^8}{1.33 \times 10^{20}} = 5.2 \times 10^{-4}$.`,
      r`So $e = \sqrt{1 + 2.7 \times 10^{-7}} \approx 1 + 1.4 \times 10^{-7} = 1.00000014$. The orbit is almost exactly parabolic, because 10 km/s is tiny compared with the Sun's escape speed near its surface (618 km/s).`,
    ],
    wrongChoices: {
      A: r`Too far from 1. The small quantity $bv_\infty^2/GM \approx 5 \times 10^{-4}$ enters the eccentricity **squared**, giving a deviation of order $10^{-7}$, not $10^{-4}$.`,
      B: r`Too far from 1 by a factor of 100. Remember $e - 1 \approx \tfrac{1}{2}(bv_\infty^2/GM)^2$.`,
      C: r`Too far from 1 by a factor of 10. Recompute $\tfrac{1}{2}(5.2 \times 10^{-4})^2$.`,
      E: r`Too close to 1 by a factor of 10. Check the arithmetic: $(5.2 \times 10^{-4})^2 / 2 \approx 1.4 \times 10^{-7}$.`,
    },
    takeaway: r`A hyperbolic orbit has e = √(1 + (b v∞²/GM)²); a slow arrival from far away is very nearly parabolic.`,
  },

  "usaaao-2023-first-round-q27": {
    solution: [
      r`For a small redshift the recession speed is $v \approx cz = 0.035 \times 3 \times 10^5 = 10{,}500$ km/s.`,
      r`Hubble's law with $H_0 \approx 70$ km/s/Mpc: $d = \dfrac{v}{H_0} = \dfrac{10{,}500}{70} = 150$ Mpc, about 490 million light-years.`,
    ],
    wrongChoices: {
      B: r`Too far; this would need $z \approx 0.047$ or a Hubble constant near 52 km/s/Mpc. Use $v = cz$ and $H_0 \approx 70$.`,
      C: r`Too far. At 250 Mpc the redshift would be about 0.058.`,
      D: r`Twice the true distance; a galaxy at 300 Mpc has $z \approx 0.07$.`,
      E: r`Too far by more than a factor of 2. Divide $cz = 10{,}500$ km/s by $H_0 = 70$ km/s/Mpc.`,
    },
    takeaway: r`For small z, d = cz / H₀.`,
  },

  "usaaao-2023-first-round-q28": {
    solution: [
      r`Two aligned orbits cannot cross if the outer one stays outside the inner one in every direction. The tightest case has their periapses on the **same** side of the star; then the critical points are the apoapses, on the far side.`,
      r`Orbit A must reach at least as far as orbit B there: $a_A(1 + e_A) \ge a_B(1 + e_B)$, so $\dfrac{a_A}{a_B} \ge \dfrac{1 + 0.75}{1 + 0.5} = \dfrac{1.75}{1.5} = \dfrac{7}{6}$.`,
      r`With that ratio, $r_A/r_B = 2\dfrac{1 + 0.75\cos\nu}{1 + 0.5\cos\nu}$, which is at least 1 in every direction (it equals 1 only at apoapsis), so the orbits just touch without crossing. The periapsis side is comfortably clear ($0.5a_A$ versus $0.25a_B$).`,
    ],
    wrongChoices: {
      A: r`Equal semi-major axes would make the more eccentric orbit B poke outside A at its apoapsis ($1.75a$ versus $1.5a$), so the orbits would cross.`,
      C: r`Too large. This is not the minimal case; check the apoapsis condition $a_A(1 + e_A) \ge a_B(1 + e_B)$.`,
      D: r`This is the ratio if the periapses point in **opposite** directions ($0.5a_A \ge 1.75a_B$). Pointing them the same way allows a much smaller ratio.`,
      E: r`Far larger than necessary. The minimal ratio comes from matching the two apoapses on the same side, which gives $7/6$.`,
    },
    takeaway: r`Aligned orbits avoid crossing most easily with periapses on the same side; then the outer apoapsis must reach the inner one.`,
  },

  "usaaao-2023-first-round-q29": {
    solution: [
      r`On the map the Harvard Bridge runs roughly north-south, and the river beside it flows from the lower left to the upper right. Looking downriver (to the right) means looking roughly **east-northeast**.`,
      r`A Sun low in the sky, just above the buildings, in the east-northeast is the **rising** Sun. The Sun rises north of east only when its declination is positive, between the March and September equinoxes.`,
      r`A sunrise this far north of east (azimuth around $65^\circ$ to $70^\circ$ at Boston's latitude) happens in late spring, from about late April into May, and again in August. Of the choices, that is the **late spring semester**.`,
    ],
    wrongChoices: {
      A: r`In late September and early October the Sun rises almost due east, then a little south of east. A sunrise as far north as east-northeast needs a late-spring or summer Sun.`,
      B: r`In late November and December the Sun rises well **south** of east (azimuth around $120^\circ$), nowhere near the downriver direction.`,
      C: r`In January the sunrise is at its most southerly, about $30^\circ$ south of east. Looking east-northeast you would not see it.`,
      D: r`In late February and early March the Sun still rises a little south of east. It only reaches the east-northeast in late spring.`,
    },
    takeaway: r`The Sun rises north of east between the March and September equinoxes, and furthest north near the June solstice.`,
  },

  "usaaao-2023-first-round-q30": {
    solution: [
      r`In the morning the Sun was low in the east-northeast, just risen. Now it is in the opposite direction, the west-southwest, later the same day.`,
      r`The Sun's daily path is symmetric about the north-south line, not about the bridge. A late-spring Sun rises in the east-northeast and **sets in the west-northwest**, so the west-southwest is a direction it passes through in the afternoon, well **before** setting, as the solution figure shows for a Sun with $\delta > 0$.`,
      r`At that point the Sun is still comfortably up, and higher than it was at sunrise: **above the horizon and higher than in the morning**.`,
    ],
    wrongChoices: {
      B: r`Equal altitudes occur at azimuths that mirror each other across the north-south line (east-northeast and west-**north**west). West-southwest is not the mirror of east-northeast.`,
      C: r`The Sun reaches the west-southwest in mid-afternoon, still well up. It only gets as low as it was at sunrise when it sets, further round in the west-northwest.`,
      D: r`With a positive declination the Sun sets north of west, not in the west-southwest. When it passes the west-southwest it is still high.`,
      E: r`The Sun sets in the west-northwest on a late-spring day, so it is still above the horizon while in the west-southwest.`,
    },
    takeaway: r`The Sun's daily path is symmetric about the meridian: a summer Sun rising north of east sets north of west, and is high while passing south of west.`,
  },
};
