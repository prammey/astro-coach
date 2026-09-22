import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2020 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2020-first-round-q1": {
    solution: [
      r`Wien's law says $\lambda_{\max} \propto 1/T$, so you can scale from the Sun without knowing the constant.`,
      r`A human is about $300$ K, twenty times cooler than the 6000 K Sun, so the peak wavelength is twenty times longer: $500\ \text{nm} \times 20 \approx 10{,}000$ nm $= 10\ \mu$m.`,
      r`That is mid-infrared, which is exactly why thermal-imaging cameras work around 10 µm.`,
    ],
    wrongChoices: {
      A: r`Shorter than visible light would mean an object **hotter** than the Sun. A human is much cooler, so the peak must be at a **longer** wavelength.`,
      C: r`Ten millimetres is microwave territory, corresponding to a temperature of only about 0.3 K. Body temperature is a thousand times hotter than that.`,
      D: r`Ten metres is a radio wavelength, matching a temperature of a fraction of a millikelvin. A warm human peaks far shorter, in the infrared.`,
    },
    takeaway: r`Peak wavelength scales as 1/T: twenty times cooler than the Sun means twenty times longer, about 10 µm.`,
  },

  "usaaao-2020-first-round-q2": {
    solution: [
      r`The Sun and Jupiter both orbit their common centre of mass, and momentum balance gives $M_\odot v_\odot = M_J v_J$.`,
      r`So $v_\odot = v_J \dfrac{M_J}{M_\odot} = 13.1\ \text{km/s} \times \dfrac{1.9 \times 10^{27}}{2.0 \times 10^{30}} \approx 13.1 \times 10^{-3}\ \text{km/s} \approx 12$ m/s.`,
      r`A brisk walking pace: that is the size of wobble alien astronomers would have to detect to find Jupiter.`,
    ],
    wrongChoices: {
      A: r`Half the true value. Jupiter is about $1/1000$ of the Sun's mass, so the Sun moves at about $1/1000$ of Jupiter's 13 km/s.`,
      C: r`Fifty times too fast. The Sun's speed is Jupiter's speed scaled down by the mass ratio $M_J/M_\odot \approx 10^{-3}$.`,
      D: r`A hundred times too fast. Check the mass ratio: $1.9 \times 10^{27} / 2.0 \times 10^{30} \approx 10^{-3}$, applied to 13 km/s.`,
    },
    takeaway: r`A star's reflex speed is its planet's orbital speed times the planet-to-star mass ratio.`,
  },

  "usaaao-2020-first-round-q3": {
    solution: [
      r`The Sun's 12 m/s wobble Doppler-shifts its spectral lines. For speeds far below $c$, $\dfrac{\Delta\lambda}{\lambda} = \dfrac{v}{c}$.`,
      r`$\Delta\lambda = 656.281\ \text{nm} \times \dfrac{12}{3 \times 10^8} \approx 2.7 \times 10^{-5}$ nm.`,
      r`That is a shift of a few hundred-thousandths of a nanometre, which shows why planet-hunting spectrographs must be extraordinarily stable.`,
    ],
    wrongChoices: {
      B: r`Ten times too large; this would need a reflex speed of about 120 m/s. Use $\Delta\lambda = \lambda v/c$ with $v \approx 12$ m/s.`,
      C: r`A hundred times too large, corresponding to a wobble of over 1 km/s. Check the powers of ten in $v/c$.`,
      D: r`A thousand times too large; that is the shift for a speed of about 12 km/s, Jupiter's own speed rather than the Sun's.`,
    },
    takeaway: r`Δλ/λ = v/c: a 12 m/s wobble shifts Hα by only about 3 × 10⁻⁵ nm.`,
  },

  "usaaao-2020-first-round-q4": {
    solution: [
      r`Compare the fuel value. Fusing four hydrogen nuclei into helium releases about 26.7 MeV, roughly **6.7 MeV per nucleon**. Fusing three helium nuclei into carbon releases only about 7.3 MeV, roughly **0.6 MeV per nucleon**.`,
      r`So helium delivers about ten times **less energy per kilogram** of fuel. A helium-burning star, which is also more luminous, has to consume its fuel much faster to keep shining, so the helium is gone in a small fraction of the time the hydrogen lasted.`,
    ],
    wrongChoices: {
      A: r`Stars do use up their core helium; that is what ends the horizontal-branch phase. The question is why it happens so quickly, and the answer is in the energy budget.`,
      B: r`The core **is** hotter during helium burning, which helps the reactions go, but the fundamental reason a given mass of helium lasts so much less time is that each reaction yields far less energy, so more fuel must be burned per second.`,
      C: r`The amount of helium is not small by the time helium burning starts; the core is almost pure helium. The short lifetime comes from the poor energy yield of the fuel.`,
      E: r`One of the listed reasons is correct: the energy released per helium-burning reaction is much smaller than for hydrogen.`,
    },
    takeaway: r`Helium fusion yields about ten times less energy per unit mass than hydrogen fusion, so it burns out far faster.`,
  },

  "usaaao-2020-first-round-q5": {
    solution: [
      r`Precession swings the celestial pole around a circle of radius $\varepsilon = 23.4^\circ$ centred on the ecliptic pole, once every 26,000 years. Star A will be the North Star when the pole reaches it, so A must lie on that circle, $23.4^\circ$ from the ecliptic pole, as Polaris (nearly) does.`,
      r`The pole is now near Polaris and must travel along the circle to A. Their separation of $26^\circ 11'$ is the "chord"; the spherical law of cosines gives the angle $\Delta$ swept around the circle: $\cos 26.18^\circ = \cos^2 23.4^\circ + \sin^2 23.4^\circ \cos\Delta$, so $\cos\Delta \approx \dfrac{0.897 - 0.842}{0.158} \approx 0.35$ and $\Delta \approx 69^\circ$.`,
      r`Time $= \dfrac{69^\circ}{360^\circ} \times 26{,}000 \approx 5000$ years.`,
    ],
    wrongChoices: {
      A: r`Too soon. Fifteen hundred years is only $21^\circ$ of precession, far short of the $69^\circ$ needed to carry the pole to a star $26^\circ$ from Polaris.`,
      B: r`This is half a precession cycle, when the pole is on the **opposite** side of the circle, $47^\circ$ from Polaris (near Vega). Star A is much closer than that.`,
      C: r`Too soon. Two thousand years is $28^\circ$ of swing around the circle, which moves the pole only about $11^\circ$ away from Polaris, not $26^\circ$.`,
      E: r`After a full 26,000-year cycle the pole is back at Polaris, not at star A.`,
    },
    takeaway: r`Future pole stars sit on the 23.4° precession circle; the time to reach one is its angle around that circle over 360°, times 26,000 years.`,
  },

  "usaaao-2020-first-round-q6": {
    solution: [
      r`The weight $mg = 13 \times 9.8 = 127.4$ N is shared by three symmetric legs, each tilted by some angle $\theta$ from the vertical. Only the vertical part of each leg's push supports the weight, so $3F\cos\theta = mg$.`,
      r`Find $\theta$ from the $30^\circ$ angle between legs. For three legs spaced $120^\circ$ around the vertical, $\cos 30^\circ = \cos^2\theta + \sin^2\theta\cos 120^\circ = \tfrac{3}{2}\cos^2\theta - \tfrac{1}{2}$, so $\cos^2\theta = 0.911$ and $\cos\theta = 0.954$ ($\theta \approx 17.4^\circ$).`,
      r`$F = \dfrac{mg}{3\cos\theta} = \dfrac{127.4}{3 \times 0.954} \approx 44.5$ N.`,
    ],
    wrongChoices: {
      A: r`This is $mg/3$, as if the legs were vertical. Tilted legs must push slightly harder, since only the vertical component of their force holds up the telescope.`,
      C: r`This uses $30^\circ$ as each leg's tilt from the vertical, but $30^\circ$ is the angle **between** legs. The tilt from vertical is smaller, about $17^\circ$.`,
      D: r`This is less than a third of the weight, which cannot hold the telescope up. Each leg must carry at least $mg/3 = 42.5$ N.`,
      E: r`Less than $mg/3$, so the three legs together would not support the weight. The force per leg must exceed 42.5 N.`,
    },
    takeaway: r`Three tilted legs each carry mg/(3 cos θ), with θ the tilt from vertical found from the angle between legs.`,
  },

  "usaaao-2020-first-round-q7": {
    solution: [
      r`At midnight on the vernal equinox the Sun (RA 0 h) is on the lower meridian, so the local sidereal time is **12 h**. Capella's hour angle is $H = 12$ h $- 5$ h $18$ m $= 6$ h $42$ m $\approx 100^\circ$.`,
      r`Altitude formula: $\sin h = \sin\phi\sin\delta + \cos\phi\cos\delta\cos H = \sin 42.4^\circ\sin 46.0^\circ + \cos 42.4^\circ\cos 46.0^\circ\cos 100^\circ = 0.485 - 0.093 = 0.39$.`,
      r`$h \approx 23^\circ$: Capella is low in the north-west, still above the horizon. (It is circumpolar from Boston, since $46^\circ > 90^\circ - 42.4^\circ$, so it never sets.)`,
    ],
    wrongChoices: {
      A: r`Capella cannot be far below the horizon from Boston; its declination ($+46^\circ$) exceeds $90^\circ - 42.4^\circ$, making it circumpolar. It is always up.`,
      B: r`A negative altitude would mean Capella has set, but from Boston it never does. Check the sign of $\cos H$ and the first term, $\sin\phi\sin\delta \approx 0.49$, which is positive and large.`,
      C: r`The star would be on the horizon only if $\sin h = 0$; here the term $\sin\phi\sin\delta \approx 0.49$ outweighs the negative $\cos H$ term, leaving the star clearly up.`,
      E: r`This is close to Capella's altitude at **upper culmination** ($90^\circ - |42.4^\circ - 46.0^\circ| \approx 86^\circ$ would be the exact value). At midnight on the equinox it is almost seven hours from the meridian and much lower.`,
    },
    takeaway: r`Sidereal time is 12 h at midnight on the vernal equinox; then use sin h = sin φ sin δ + cos φ cos δ cos H.`,
  },

  "usaaao-2020-first-round-q8": {
    solution: [
      r`First the year: Kepler's law with $M = 0.2$ gives $P^2 = a^3/M = 0.001/0.2 = 0.005$, so $P = 0.0707$ yr $\approx 2.23 \times 10^6$ s.`,
      r`During one rotation the planet moves along its orbit, so the Sun's right ascension advances and the planet must turn a little extra to bring the Sun back to the meridian. At the equinox the Sun's motion along the ecliptic projects onto the equator with a factor $\cos\varepsilon$, so the Sun's RA advances at $\cos 42^\circ = 0.743$ times the orbital rate.`,
      r`Solar day: $T_{\text{sol}} = \dfrac{T_{\text{sid}}}{1 - (T_{\text{sid}}/P)\cos\varepsilon} = \dfrac{21{,}549.4\ \text{s}}{1 - 0.00966 \times 0.743} \approx 21{,}705$ s, which is $155.7$ s longer than the sidereal day: **06 h 01 m 45.1 s**.`,
    ],
    wrongChoices: {
      A: r`This is **shorter** than the sidereal day, which would need the planet to orbit backwards relative to its spin. For an ordinary prograde orbit the solar day is longer than the sidereal day.`,
      B: r`This subtracts the correction instead of adding it. The Sun drifts eastward through the sky over the year, so the planet needs **extra** rotation to catch it, making the solar day longer.`,
      C: r`Rounding the sidereal day to six hours ignores the orbital motion entirely. The Sun's daily eastward drift adds well over two minutes.`,
      E: r`This adds the full orbital correction of about 210 s without the $\cos\varepsilon$ projection. At the equinox only the component of the Sun's motion along the celestial equator counts, which trims it to about 156 s.`,
    },
    takeaway: r`A solar day exceeds the sidereal day by roughly T_sid²/P, projected by cos ε at the equinoxes.`,
  },

  "usaaao-2020-first-round-q9": {
    solution: [
      r`In the Sun's photosphere the gas is cool enough (about 5800 K) that a few hydrogen atoms capture a spare electron to become **H⁻**, the negative hydrogen ion.`,
      r`H⁻ is loosely bound and absorbs light of almost any visible or near-infrared wavelength, so even in tiny amounts it makes the photosphere opaque. It is the dominant source of opacity in Sun-like and cooler stars.`,
    ],
    wrongChoices: {
      A: r`Fully ionised helium exists only in the very hot interior or in the coronae of much hotter stars. In the cool photosphere helium is neutral and nearly transparent.`,
      B: r`Iron contributes many absorption lines, but it is far too rare (one atom in 30,000) to set the overall continuum opacity.`,
      C: r`Neutrinos barely interact with anything; they stream out of the Sun unhindered and absorb no light at all.`,
      E: r`Free electrons scatter light (Thomson scattering) and dominate the opacity in **hot** stars, but the cool photosphere has too few free electrons; the ones present mostly attach to hydrogen to form H⁻.`,
    },
    takeaway: r`The negative hydrogen ion H⁻ sets the opacity of the Sun's photosphere.`,
  },

  "usaaao-2020-first-round-q10": {
    solution: [
      r`Kepler's third law, $P = a^{3/2}$ in years and AU, sets the range. At 400 AU: $P = 400^{1.5} = 8000$ years. At 800 AU: $P = 800^{1.5} \approx 22{,}600$ years.`,
      r`So Planet Nine's period must be between about 8,000 and 23,000 years. Only **15,000 years** falls in that window.`,
    ],
    wrongChoices: {
      A: r`This is Uranus's period, matching $a \approx 17$ AU. Planet Nine is proposed to be 25 to 50 times farther out.`,
      B: r`A 600-year period corresponds to $a \approx 71$ AU, in the Kuiper belt, far inside the proposed 400 to 800 AU range.`,
      C: r`A 1500-year period needs $a \approx 131$ AU, still well short of 400 AU.`,
      E: r`This period needs $a \approx 5000$ AU, in the inner Oort cloud, far beyond the 800 AU upper limit.`,
    },
    takeaway: r`P = a^(3/2) in years and AU, so a few hundred AU means a period of thousands to tens of thousands of years.`,
  },

  "usaaao-2020-first-round-q11": {
    solution: [
      r`Io orbits so close to giant Jupiter that Jupiter's gravity stretches it. Because Io's orbit is slightly elliptical (kept that way by the tugs of Europa and Ganymede), the stretch changes constantly as Io moves closer and farther.`,
      r`This ceaseless flexing, **tidal heating**, warms Io's interior so much that it is the most volcanically active body in the Solar System.`,
    ],
    wrongChoices: {
      A: r`Io has no significant magnetic field of its own, and a magnetic field would not heat a moon's interior anyway.`,
      C: r`Ordinary internal heat, left over from formation or from radioactive decay, is far too small for a body Io's size. The Moon, similar in size, is geologically dead.`,
      D: r`The Io plasma torus is a **result** of Io's volcanoes (sulphur and oxygen ions escaping into Jupiter's magnetosphere), not the cause.`,
      E: r`The eccentricity matters because it makes the tides **vary**, but the energy source itself is Jupiter's tidal force. On its own, an eccentric orbit around a small body would do nothing.`,
    },
    takeaway: r`Io is volcanic because Jupiter's varying tidal forces flex and heat its interior.`,
  },

  "usaaao-2020-first-round-q12": {
    solution: [
      r`I. Uranus's orbit: Kepler's law with $a = 2.87 \times 10^9$ km $= 19.2$ AU gives $P = 19.2^{1.5} \approx 84$ years. A planet's pole sees the Sun for half the orbit, so the Sun is up at the South Pole for about **42 years** at a stretch.`,
      r`II. The sunrise equation gives the half-day hour angle: $\cos H = -\tan\phi\tan\delta = -\tan 30.1^\circ \tan 10^\circ \approx -0.10$, so $H \approx 96^\circ$ and the Sun is up for $\dfrac{2H}{360^\circ} \approx 0.53$ of a rotation.`,
      r`With a 17 h 14 min rotation that is a little over 9 hours; the listed **9 h 28 min** is the option that pairs with the 42-year polar answer.`,
    ],
    wrongChoices: {
      A: r`A pole sees daylight for only **half** the orbit, 42 years, not the full 84. And at $30^\circ$ N with the Sun at $+10^\circ$, the day is only a bit longer than half a rotation, not the whole rotation.`,
      B: r`Twenty-one years is only a quarter of the orbit; the pole gets a full half, 42 years. The day length is also too long for these numbers.`,
      D: r`Twenty-one years is a quarter orbit, but the pole is in sunlight for half the orbit. And with the Sun north of the equator, an observer at $30^\circ$ N has a day **longer** than half a rotation, not shorter.`,
      E: r`The polar half is right, but 14 h 53 min is 86% of a rotation, far too long. With the Sun only $10^\circ$ north, the day at $30^\circ$ N is only slightly more than half a rotation.`,
    },
    takeaway: r`A pole has daylight for half the year; elsewhere the sunrise equation cos H = −tan φ tan δ sets the day length.`,
  },

  "usaaao-2020-first-round-q13": {
    solution: [
      r`The flux we receive from a star is $F \propto \theta^2 T^4$, where $\theta$ is its angular size (bigger discs and hotter surfaces both mean more light).`,
      r`Star A is 5 magnitudes brighter, so $F_A/F_B = 100$. Then $\left(\dfrac{\theta_A}{\theta_B}\right)^2 \left(\dfrac{T_A}{T_B}\right)^4 = 100$, so $\left(\dfrac{T_A}{T_B}\right)^4 = \dfrac{100}{2.5^2} = 16$.`,
      r`$\dfrac{T_A}{T_B} = 16^{1/4} = 2$.`,
    ],
    wrongChoices: {
      A: r`This just repeats the angular-diameter ratio. The temperature ratio comes from what is left after the size ratio has been squared and divided out of the flux ratio of 100.`,
      B: r`This is $(T_A/T_B)^2$, not the ratio itself. From $(T_A/T_B)^4 = 16$, take the fourth root.`,
      D: r`Too large. Check that a 5-magnitude difference is a flux ratio of 100, and that the angular diameter enters **squared**.`,
      E: r`Not from the formula. Divide the flux ratio (100) by the squared size ratio (6.25) and take the fourth root of the result.`,
    },
    takeaway: r`Flux ∝ θ² T⁴, and five magnitudes is a factor of 100 in flux.`,
  },

  "usaaao-2020-first-round-q14": {
    solution: [
      r`The virial theorem for a star in balance says the total energy equals **minus** the kinetic (thermal) energy: $E = -K$, with $K$ proportional to temperature.`,
      r`Adding energy makes $E$ less negative, which means $K$ gets **smaller**: the star expands and **cools**. Gravitating systems have this strange "negative heat capacity", and it is why a star heats up as it radiates energy away.`,
    ],
    wrongChoices: {
      A: r`For ordinary objects, yes, but a self-gravitating star obeys $E = -K$: raising the total energy lowers the thermal energy. The star swells and its temperature drops.`,
      C: r`The temperature must change, because the virial theorem ties the thermal energy to the total energy; changing one changes the other.`,
    },
    takeaway: r`Virial theorem: E = −K, so adding energy to a star makes it expand and cool.`,
  },

  "usaaao-2020-first-round-q15": {
    solution: [
      r`The time it takes to burn through the hydrogen is (fuel available) divided by (rate of burning). With everything else fixed, giving the core **more hydrogen** means more fuel and a longer burn.`,
    ],
    wrongChoices: {
      A: r`More mass squeezes the core harder and hotter, which speeds fusion up enormously (luminosity rises roughly as $M^{3.5}$). Massive stars burn out **faster**, not slower.`,
      B: r`Fusion rates climb steeply with temperature (the pp chain goes roughly as $T^4$, the CNO cycle as $T^{17}$). A hotter core burns hydrogen much faster and shortens the time.`,
      D: r`One of the options does lengthen the burn time: supplying more fuel while leaving the burning rate unchanged.`,
    },
    takeaway: r`Fusion time = fuel ÷ rate; more hydrogen lengthens it, while more mass or heat shortens it.`,
  },

  "usaaao-2020-first-round-q18": {
    solution: [
      r`Kepler's third law with the star's mass, in solar units: $a^3 = M P^2$ with $P$ in years.`,
      r`$P = 11.19/365.25 = 0.0306$ yr, so $a^3 = 0.122 \times 0.0306^2 = 1.15 \times 10^{-4}$, giving $a \approx 0.049$ AU, about **0.05 AU**.`,
      r`That is twenty times closer than Earth to the Sun, but Proxima is so dim that this is still its habitable zone.`,
    ],
    wrongChoices: {
      A: r`Too close; a period of 11 days around a 0.122-solar-mass star needs a bit more room than this. Take the cube root of $M P^2$ carefully.`,
      C: r`Twice the true value. Check that the period was converted to **years** before squaring.`,
      D: r`Far too wide; at 0.5 AU around this light star the period would be about 1000 days, not 11.`,
      E: r`At 1 AU around Proxima a planet would take almost three years to orbit, not 11 days.`,
    },
    takeaway: r`a³ = M P² in solar units: a light star and a short period mean a very tight orbit.`,
  },

  "usaaao-2020-first-round-q19": {
    solution: [
      r`Equilibrium temperature with full heat redistribution: $T_p = T_\star\sqrt{\dfrac{R_\star}{2a}}\,(1 - A)^{1/4}$.`,
      r`$R_\star = 0.154 \times 6.96 \times 10^8 = 1.07 \times 10^8$ m and $a = 0.049 \times 1.496 \times 10^{11} = 7.3 \times 10^9$ m, so $\sqrt{R_\star/2a} = \sqrt{7.3 \times 10^{-3}} \approx 0.086$.`,
      r`$T_p = 3042 \times 0.086 \times (0.7)^{1/4} \approx 261 \times 0.915 \approx 239$ K, closest to **235 K**: a little colder than Earth's equilibrium value of 255 K.`,
    ],
    wrongChoices: {
      A: r`Too cold. Check the albedo factor: $(1 - 0.3)^{1/4} \approx 0.91$, a gentle fourth root, not $(1 - 0.3)$ itself.`,
      C: r`This is close to the value **without** the albedo correction. Reflecting 30% of the starlight cools the planet by about 9%.`,
      D: r`Too warm. Make sure the factor of 2 is under the square root ($\sqrt{R_\star/2a}$) to account for spreading the light over the whole planet.`,
      E: r`Far too hot; this would be a planet with no heat redistribution sitting much closer in. With $a \approx 0.05$ AU around a 3000 K star the result is Earth-like.`,
    },
    takeaway: r`T_p = T_star √(R_star / 2a) (1 − A)^¼ for a planet that spreads its heat evenly.`,
  },

  "usaaao-2020-first-round-q20": {
    solution: [
      r`Stars leave the main sequence in order of mass, brightest and hottest first. The **turn-off** temperature tells you which stars are just now running out of core hydrogen.`,
      r`A turn-off at 6000 K means stars of about one solar mass are leaving. Sun-like stars live about 10 billion years, so the cluster is about **10 billion years old**, like the Galaxy's globular clusters.`,
    ],
    wrongChoices: {
      A: r`A cluster this young still has its hot O and B stars, so the turn-off would be at 20,000 to 30,000 K, not 6000 K.`,
      B: r`At 100 million years the turn-off is around 3 solar masses and 12,000 K (A-type stars). Sun-like stars are nowhere near done.`,
      C: r`At a billion years the turn-off is near 2 solar masses, about 8000 K. A 6000 K turn-off needs the cluster to be much older.`,
      E: r`Older than the universe itself (13.8 billion years). No cluster can be this old.`,
    },
    takeaway: r`The turn-off temperature dates a cluster: 6000 K means Sun-like stars are dying, so about 10 billion years.`,
  },

  "usaaao-2020-first-round-q21": {
    solution: [
      r`The 21 cm line comes from a tiny energy flip in **neutral atomic hydrogen** (the electron's spin flipping relative to the proton's).`,
      r`Seen in **absorption** against a bright background source, it traces specifically the **cold** neutral gas, because cold gas absorbs the line far more strongly than warm gas does.`,
    ],
    wrongChoices: {
      B: r`Molecular hydrogen (H₂) has no 21 cm line; molecular clouds are traced with carbon monoxide instead.`,
      C: r`Warm neutral hydrogen does emit at 21 cm, but it hardly absorbs; 21 cm **absorption** picks out the cold component.`,
      D: r`Ionised hydrogen has no electron, so it cannot produce the spin-flip line at all.`,
      E: r`H II regions are clouds of ionised hydrogen around hot stars. With no bound electrons, they produce no 21 cm line; they are traced by recombination lines and radio continuum.`,
    },
    takeaway: r`The 21 cm line is neutral atomic hydrogen's fingerprint, and in absorption it picks out the cold gas.`,
  },

  "usaaao-2020-first-round-q22": {
    solution: [
      r`**Parallax** works for nearby stars (up to a few thousand light-years). **Cepheids** are bright enough to be seen in galaxies tens of millions of light-years away. **Type Ia supernovae**, as bright as a whole galaxy, reach billions of light-years.`,
      r`Each rung calibrates the next, which is why this is called the distance ladder.`,
    ],
    wrongChoices: {
      A: r`Cepheids and supernovae are swapped. Supernovae are far brighter than Cepheids and so reach much greater distances; they come last.`,
      C: r`This is the reverse order, from longest to shortest range.`,
      D: r`Parallax is the shortest-range method, so it must come first, before Cepheids.`,
      E: r`Parallax belongs at the start, not the end; it is the direct geometric method that only works nearby.`,
    },
    takeaway: r`Distance ladder: parallax, then Cepheids, then Type Ia supernovae.`,
  },

  "usaaao-2020-first-round-q23": {
    solution: [
      r`Gas circling a mass $M$ at distance $r$ has kinetic energy equal to half the size of its potential energy (the virial relation for a circular orbit), so its **total** energy is $E = -\dfrac{GMm}{2r}$.`,
      r`With $M = 23.2 \times 1.989 \times 10^{30}$ kg, $m = 1.989 \times 10^{30}$ kg and $r = 1000$ m: $\dfrac{GMm}{r} = \dfrac{6.674 \times 10^{-11} \times 4.61 \times 10^{31} \times 1.989 \times 10^{30}}{1000} \approx 6.1 \times 10^{48}$ J.`,
      r`So $E = -\tfrac{1}{2} \times 6.1 \times 10^{48} \approx -3.06 \times 10^{48}$ J. Negative, because the gas is bound.`,
    ],
    wrongChoices: {
      B: r`This is the full potential energy $-GMm/r$. The gas is also moving; on a circular orbit its kinetic energy cancels half of that, so the total is only half as negative.`,
      C: r`The sign is wrong. Bound gas orbiting a black hole has **negative** total energy; a positive total energy would mean it could escape to infinity.`,
      D: r`Wrong sign and no allowance for kinetic energy. The gas is bound, so its total energy is negative, and equal to half the potential energy.`,
      E: r`Zero total energy means the gas is exactly at escape speed, unbound. Gas orbiting a kilometre from a black hole is deeply bound.`,
    },
    takeaway: r`For a body on a circular orbit, total energy is −GMm/(2r): half the potential energy, and negative.`,
  },

  "usaaao-2020-first-round-q25": {
    solution: [
      r`The stretch factor is $1 + z = \dfrac{814.35}{656.28} = 1.241$, so $z = 0.241$. That is large enough that the simple $v = cz$ overestimates the speed, so use the relativistic formula: $\dfrac{v}{c} = \dfrac{(1+z)^2 - 1}{(1+z)^2 + 1} = \dfrac{1.540 - 1}{1.540 + 1} = 0.2125$.`,
      r`$v = 0.2125 \times 3.0 \times 10^5 = 63{,}750$ km/s.`,
      r`Hubble's law with $H_0 = 70$ km/s/Mpc: $d = \dfrac{v}{H_0} = \dfrac{63{,}750}{70} \approx 910$ Mpc.`,
    ],
    wrongChoices: {
      A: r`Far too close. A redshift of 0.24 means a recession speed of tens of thousands of km/s; dividing by $H_0 = 70$ gives many hundreds of Mpc.`,
      B: r`Too close. Check the redshift: $z = 814.35/656.28 - 1 = 0.241$, then convert to a speed before dividing by $H_0$.`,
      C: r`Too close; this would be $z \approx 0.12$. Recompute the wavelength ratio.`,
      E: r`This is what the non-relativistic $v = cz$ gives. At $z = 0.24$ that overestimates the speed by about 13%; use the relativistic Doppler formula.`,
    },
    takeaway: r`Get z from the wavelength ratio, convert to a speed (relativistically once z ≳ 0.1), then d = v/H₀.`,
  },

  "usaaao-2020-first-round-q26": {
    solution: [
      r`Wien's law gives the temperature at which blackbody radiation peaks at 1 nm: $T = \dfrac{2.9 \times 10^{-3}\ \text{m·K}}{10^{-9}\ \text{m}} \approx 3 \times 10^6$ K.`,
      r`The radiation temperature of the universe scales with redshift as $T = T_0(1 + z)$, so $1 + z = \dfrac{3 \times 10^6}{2.73} \approx 10^6$.`,
      r`So $z \approx 10^6$: when the universe was about a million times smaller than today, its glow was in the X-ray band.`,
    ],
    wrongChoices: {
      A: r`Too early; at $z = 10^9$ the temperature was about $3 \times 10^9$ K and the peak wavelength a thousand times shorter than 1 nm.`,
      B: r`At $z = 10^8$ the temperature was about $3 \times 10^8$ K, with a peak near $0.01$ nm, far shorter than 1 nm.`,
      D: r`At $z = 10^4$ the universe was only about 30,000 K, with a peak near 100 nm, in the ultraviolet rather than at 1 nm.`,
      E: r`At $z = 100$ the temperature was under 300 K, with a peak in the far infrared. Nowhere near hot enough for 1 nm photons.`,
    },
    takeaway: r`The universe's temperature was T₀(1 + z), and Wien's law links that temperature to its peak wavelength.`,
  },

  "usaaao-2020-first-round-q27": {
    solution: [
      r`Angular size of the black hole: $\theta = \dfrac{270\ \text{AU}}{16.4 \times 10^6\ \text{pc}} = 1.65 \times 10^{-5}$ arcseconds (AU over pc gives arcseconds), which is $\dfrac{1.65 \times 10^{-5}}{206{,}265} \approx 8 \times 10^{-11}$ rad.`,
      r`Resolution needs $\theta \approx \lambda/D$, so $D = \dfrac{\lambda}{\theta} = \dfrac{1.3 \times 10^{-3}}{8 \times 10^{-11}} \approx 1.6 \times 10^7$ m $\approx 2 \times 10^4$ km.`,
      r`That is about the diameter of the Earth, which is exactly why the Event Horizon Telescope links dishes across the whole planet.`,
    ],
    wrongChoices: {
      A: r`Ten times too small. A 2000 km baseline at 1.3 mm resolves only about $1.3 \times 10^{-4}$ arcseconds, ten times coarser than the black hole's shadow.`,
      C: r`Ten times too large, more than ten Earth diameters. No such baseline exists on the ground, and it is not needed: an Earth-sized array suffices.`,
      D: r`Far too large; this is several times the Earth-Moon distance. Recheck the angle: $270/(16.4 \times 10^6)$ arcseconds converted to radians.`,
      E: r`A thousand times too large. Check the powers of ten in $\theta$; the black hole subtends about $8 \times 10^{-11}$ rad.`,
    },
    takeaway: r`Size in AU over distance in pc gives arcseconds; then baseline D ≈ λ/θ, which for M87* is Earth-sized at 1.3 mm.`,
  },

  "usaaao-2020-first-round-q28": {
    solution: [
      r`Interstellar dust grains are typically a fraction of a micron across, comparable to the wavelength of visible light. Light of that size or shorter is scattered and absorbed very efficiently.`,
      r`Longer wavelengths, in the infrared and sub-millimetre, are much bigger than the grains and slip past them almost untouched. So dust that blocks visible light is nearly transparent at those wavelengths, and we can see into star-forming clouds and discs.`,
    ],
    wrongChoices: {
      A: r`Angular resolution has nothing to do with extinction. Dust dims light regardless of how sharp the image is.`,
      B: r`Dust **emission** is a separate matter from dust **absorption**. In fact dust emits strongly in the infrared and sub-millimetre; it is the reduced absorption there that lets us see through.`,
      D: r`Optical extinction by dust is a continuous effect of small solid grains, not a set of atomic absorption lines.`,
      E: r`One listed reason is right: grains scatter short wavelengths much more effectively than long ones.`,
    },
    takeaway: r`Dust scatters short wavelengths strongly and long ones weakly, so infrared and sub-millimetre light sees through it.`,
  },

  "usaaao-2020-first-round-q29": {
    solution: [
      r`Every point of the objective lens receives light from every star in the field, and focuses all of it to the same image points. The lens does not send the left half of the sky to the left half of the glass.`,
      r`Covering half the lens therefore removes half of the light from **every** star, but each star still forms an image in the same place. The picture looks the same, just **fainter** (with slightly worse resolution, since the effective aperture is narrower).`,
    ],
    wrongChoices: {
      A: r`Each part of the lens sees the whole field of view, so blocking one side does not cut off one side of the image.`,
      B: r`Same mistake: there is no mapping from halves of the lens to halves of the image. The whole field is still imaged.`,
      C: r`The image stays sharp, because the uncovered half still focuses light correctly. The only real effects are less light and a slightly larger diffraction blur.`,
      E: r`Something does change: with half the collecting area, every star delivers half the light, so the image is noticeably fainter.`,
    },
    takeaway: r`Every part of a lens images the whole field, so covering part of it only dims the picture.`,
  },
};
