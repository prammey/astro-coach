import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2018 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2018-first-round-q1": {
    solution: [
      r`For a planet orbiting a Sun-like star, Kepler's third law in years and AU is $P^2 = a^3$.`,
      r`$a^3 = 16^3 = 4096$, so $P = \sqrt{4096} = 64$ years. A quicker route: $16^{3/2} = (\sqrt{16})^3 = 4^3 = 64$.`,
    ],
    wrongChoices: {
      A: r`Too short. Six years would need $a \approx 3.3$ AU; at 16 AU the planet moves slowly around a huge orbit.`,
      B: r`This is $16 \times 2$, not $16^{3/2}$. Take the square root of 16 (which is 4) and cube it.`,
      D: r`This is $16^2$, as if the law were $P = a^2$. The correct exponent is $3/2$.`,
      E: r`This is $16^3 = P^2$, not $P$. You still need to take the square root.`,
    },
    takeaway: r`P = a^(3/2) in years and AU: square-root the distance, then cube it.`,
  },

  "usaaao-2018-first-round-q2": {
    solution: [
      r`The electromagnetic spectrum, from longest wavelength to shortest, runs: **radio**, microwave, infrared, visible, ultraviolet, X-ray, gamma ray.`,
      r`Radio waves can be metres or even kilometres long, at the far long-wavelength end of the spectrum.`,
    ],
    wrongChoices: {
      A: r`Ultraviolet is **shorter** than visible light, at 10 to 400 nm. It is on the high-energy side of the spectrum.`,
      B: r`Visible light spans only about 400 to 700 nm. Infrared, microwaves and radio waves are all longer.`,
      D: r`X-rays are among the **shortest** wavelengths, well under a nanometre.`,
      E: r`Microwaves are long (millimetres to tens of centimetres), but radio waves are longer still.`,
    },
    takeaway: r`Radio, microwave, infrared, visible, UV, X-ray, gamma: wavelength shrinks along that list.`,
  },

  "usaaao-2018-first-round-q3": {
    solution: [
      r`Wien's law: $\lambda_{\max} = \dfrac{\sigma_w}{T} = \dfrac{2.9 \times 10^7\ \text{Å·K}}{10{,}000\ \text{K}} = 2900$ Å.`,
      r`That is 290 nm, in the ultraviolet, which is why 10,000 K stars like Vega look blue-white: the visible part of their spectrum is brightest at the blue end.`,
    ],
    wrongChoices: {
      A: r`Ten times too short; that would correspond to 100,000 K. Check the division: $2.9 \times 10^7 / 10^4$.`,
      C: r`This is the peak wavelength of a 5000 K star, cooler than the Sun. Hotter stars peak at **shorter** wavelengths.`,
      D: r`Ten times too long; this is the peak for a 1000 K object, a warm brown dwarf, not a 10,000 K star.`,
      E: r`Twenty times too long, matching a 500 K object. Recompute $2.9 \times 10^7 / 10{,}000$.`,
    },
    takeaway: r`λ_max = 2.9 × 10⁷ Å·K ÷ T: hotter objects peak at shorter wavelengths.`,
  },

  "usaaao-2018-first-round-q4": {
    solution: [
      r`At upper culmination a star sits on the meridian at altitude $h = 90^\circ - |\phi - \delta|$.`,
      r`Capella's declination is $+45^\circ 59'$, and the observer's latitude is $+45^\circ 58'$. They are essentially equal, so Capella culminates within an arcminute of the **zenith**.`,
      r`At the zenith every direction is "down", so azimuth has no meaning: it is **undefined**.`,
    ],
    wrongChoices: {
      A: r`Azimuth 0° (north) would apply if Capella culminated **north** of the zenith, which needs $\delta > \phi$ by a clear margin. Here they differ by only $1'$, so the star is at the zenith itself.`,
      B: r`A star on the meridian can only be due north or due south, never due east ($90^\circ$). And at the zenith even that distinction disappears.`,
      D: r`Azimuth 180° (south) is for stars culminating **south** of the zenith, when $\delta < \phi$. Capella's declination matches this latitude, putting it at the zenith.`,
      E: r`Azimuth 360° is just another name for 0°, north, and a star at the zenith has no azimuth at all.`,
    },
    takeaway: r`When a star's declination equals your latitude it culminates at the zenith, where azimuth is undefined.`,
  },

  "usaaao-2018-first-round-q5": {
    solution: [
      r`A star never rises if it stays below the horizon even at its highest, which happens when its declination is more than $90^\circ - \phi$ on the far side of the equator.`,
      r`For Antares at $\delta = -26^\circ 19'$, the condition for a northern observer is $\phi > 90^\circ - 26^\circ 19' = 63^\circ 41'$ N.`,
      r`So from anywhere north of $63^\circ 41'$ N, roughly the Arctic Circle, Antares never rises.`,
    ],
    wrongChoices: {
      A: r`This is the size of the declination, not the limiting latitude. The limit is $90^\circ$ minus that, since the star's highest altitude is $90^\circ - \phi + \delta$.`,
      C: r`Not the right arithmetic. Set the culmination altitude $90^\circ - \phi - 26^\circ 19'$ to zero and solve for $\phi$.`,
      D: r`It does happen: from far enough north, a southern star simply never clears the horizon. Compute $90^\circ - 26^\circ 19'$.`,
      E: r`Ten degrees too low. Antares still rises, though barely, from $53^\circ 41'$ N; the star vanishes only when $\phi$ exceeds $90^\circ - |\delta|$.`,
    },
    takeaway: r`A star of declination δ never rises for latitudes beyond 90° − |δ| in the opposite hemisphere.`,
  },

  "usaaao-2018-first-round-q6": {
    solution: [
      r`At the summer solstice the Sun's declination is $\delta = +23^\circ 27'$. Its altitude at culmination is $h = 90^\circ - |\phi - \delta|$.`,
      r`Setting $h = 72^\circ 50'$ gives $|\phi - \delta| = 17^\circ 10'$. The Sun culminating **north** of the zenith means the observer is south of the Sun's latitude: $\phi = 23^\circ 27' - 17^\circ 10' = 6^\circ 17'$ N.`,
      r`That lies in the **0° to 15°** range.`,
    ],
    wrongChoices: {
      B: r`Not quite. The zenith distance of the Sun is $90^\circ - 72^\circ 50' = 17^\circ 10'$, and measured from the Sun's declination of $23^\circ 27'$ that lands below 15°.`,
      C: r`This range contains the **other** solution, $23^\circ 27' + 17^\circ 10' = 40^\circ 37'$, where the Sun would culminate **south** of the zenith. The question specifies north.`,
      D: r`Too far north. From these latitudes the solstice Sun culminates only 53° to 68° high, always to the south.`,
      E: r`Far too north. At 60° to 75° the midsummer Sun reaches only 38° to 53° above the southern horizon.`,
    },
    takeaway: r`Culmination altitude is 90° − |φ − δ|; a Sun culminating to the north means you are south of its declination.`,
  },

  "usaaao-2018-first-round-q7": {
    solution: [
      r`Pollux culminates when the **local sidereal time** equals its right ascension, $7$ h $42$ m $16$ s.`,
      r`At $0$ h UT the sidereal time is $s_0 = 9$ h $17$ m $48$ s, so the sidereal clock must advance $7$ h $42$ m $16$ s $- 9$ h $17$ m $48$ s $+ 24$ h $= 22$ h $24$ m $28$ s.`,
      r`Sidereal time runs about 0.27% faster than clock time, so that interval is $22$ h $24$ m $28$ s $\times 0.99727 \approx 22$ h $20$ m $48$ s of clock time: **10:21 pm**, between 10 pm and midnight.`,
    ],
    wrongChoices: {
      A: r`This would be right if the sidereal time at midnight were already close to Pollux's RA, but at 0 h UT it is $9$ h $18$ m, past 7 h 42 m, so the star has already set for the night and only returns to the meridian late the next evening.`,
      B: r`During these hours the sidereal time runs from about 15 h to 21 h, well past Pollux's RA. Pollux is below the horizon or in daylight.`,
      C: r`The sidereal time in the afternoon is 21 h to 3 h, still not at 7 h 42 m. Pollux, a winter star, culminates in the evening in February.`,
      D: r`Getting closer, but by 10 pm the sidereal time is only about 7 h 18 m. Pollux needs another 20 minutes or so to reach the meridian.`,
    },
    takeaway: r`A star culminates when local sidereal time equals its RA; start from the sidereal time at 0 h and count forward.`,
  },

  "usaaao-2018-first-round-q8": {
    solution: [
      r`In the Sun's core and the surrounding radiative zone, the gas is so hot and dense that energy moves outward as **radiation**: photons are absorbed and re-emitted trillions of times on their slow journey outward.`,
      r`Only in the outer 30% of the Sun does the gas become cool enough for convection to take over.`,
    ],
    wrongChoices: {
      B: r`Convection dominates in the Sun's **outer** layers, where the gas is cooler and more opaque. The core is too hot and stable for it.`,
      C: r`Conduction, heat passing between neighbouring particles, is negligible in the diffuse gas of a normal star. It matters only in white dwarfs.`,
      D: r`Diffusion of particles is far too slow to carry the Sun's energy. Photons, not gas particles, do the work in the core.`,
      E: r`Advection means heat carried by bulk flow of the gas, which does not happen in the stable, non-convecting core.`,
    },
    takeaway: r`The Sun's core and inner layers move energy by radiation; only the outer envelope convects.`,
  },

  "usaaao-2018-first-round-q9": {
    solution: [
      r`**Faculae** are bright patches on the photosphere, made of hot gas concentrated by magnetic fields. They often surround sunspot groups and are easiest to see near the Sun's edge.`,
    ],
    wrongChoices: {
      A: r`Sunspots are the **dark** regions of the photosphere, cooler areas where strong magnetic fields choke off convection.`,
      B: r`The limb is simply the Sun's edge as we see it, not a feature on the surface.`,
      D: r`Prominences are loops of glowing gas suspended **above** the surface in the corona, seen at the limb, not bright regions on the photosphere itself.`,
      E: r`Flares are sudden, brief explosions of energy in the Sun's atmosphere, not steady bright regions of the photosphere.`,
    },
    takeaway: r`Faculae are the bright magnetic patches of the photosphere; sunspots are the dark ones.`,
  },

  "usaaao-2018-first-round-q10": {
    solution: [
      r`At greatest elongation, the line from Earth to Venus is tangent to Venus's orbit, so the angle Sun-Venus-Earth is a right angle.`,
      r`We then see Venus lit exactly from the side: half the disc is sunlit, half dark. That is a **quarter** (half-lit) phase, just like the Moon at first or third quarter.`,
    ],
    wrongChoices: {
      A: r`Venus is "new" (dark side towards us) at **inferior conjunction**, when it lies between Earth and the Sun, not at its widest separation.`,
      B: r`Crescent phases occur when Venus is nearer to us than the tangent point, between inferior conjunction and greatest elongation.`,
      D: r`Gibbous phases occur when Venus is on the far side of its orbit, beyond greatest elongation, heading towards superior conjunction.`,
      E: r`Venus is "full" at **superior conjunction**, on the far side of the Sun, where it is also closest to the Sun in the sky, not farthest.`,
    },
    takeaway: r`At greatest elongation an inner planet shows a half-lit, quarter phase.`,
  },

  "usaaao-2018-first-round-q11": {
    solution: [
      r`A **primary atmosphere** is gas captured straight from the solar nebula when the planet formed, mostly hydrogen and helium.`,
      r`Only the giant planets, Jupiter, Saturn, Uranus and Neptune, were massive and cold enough to hold on to that light gas. Their atmospheres are the original ones.`,
      r`The rocky planets lost any primary gas early on. Their present atmospheres are **secondary**, built later from volcanic outgassing and impacts.`,
    ],
    wrongChoices: {
      B: r`The rocky planets are too small and warm to have kept hydrogen and helium. Their atmospheres are secondary, produced by volcanoes and comets after formation.`,
      C: r`Jupiter and Saturn are right, but Mars is a small rocky planet whose thin CO₂ atmosphere is secondary, and Uranus and Neptune are missing.`,
      D: r`Venus and Earth have secondary atmospheres from outgassing. Their original hydrogen and helium escaped long ago.`,
      E: r`Mercury has almost no atmosphere at all, and Mars's thin one is secondary. Neither kept any gas from the solar nebula.`,
    },
    takeaway: r`Only the four giant planets kept their primary hydrogen-helium atmospheres from the solar nebula.`,
  },

  "usaaao-2018-first-round-q12": {
    solution: [
      r`Check each one. Pluto was flown past by New Horizons in 2015, Ceres was orbited by Dawn from 2015, Mercury was visited by Mariner 10 and MESSENGER, and Neptune by Voyager 2 in 1989.`,
      r`**Haumea**, a distant dwarf planet in the Kuiper belt, has never had a spacecraft visit.`,
    ],
    wrongChoices: {
      A: r`New Horizons flew past Pluto in July 2015, returning the famous heart-shaped Tombaugh Regio images.`,
      C: r`NASA's Dawn spacecraft orbited Ceres from 2015 to 2018 and mapped its bright salt deposits.`,
      D: r`Mercury was visited by Mariner 10 in the 1970s and orbited by MESSENGER from 2011 to 2015.`,
      E: r`Voyager 2 flew past Neptune in August 1989, the only spacecraft ever to do so.`,
    },
    takeaway: r`Of the outer dwarf planets, only Pluto has been visited; Haumea, Makemake and Eris have not.`,
  },

  "usaaao-2018-first-round-q13": {
    solution: [
      r`The flux we receive is $F \propto \dfrac{R^2 T^4}{d^2}$. Compare A with B: $\dfrac{F_A}{F_B} = \left(\dfrac{1}{10}\right)^2 \left(\dfrac{10{,}000}{4{,}000}\right)^4 \left(\dfrac{d_B}{d_A}\right)^2$.`,
      r`Numbers: $0.01 \times 39.1 \times \left(\dfrac{1}{2}\right)^2 = 0.01 \times 39.1 \times 0.25 \approx 0.098$. Star A delivers about a tenth of the flux of B.`,
      r`Magnitude difference: $m_A - m_B = -2.5\log_{10}(0.098) \approx +2.5$. Star A is about **2.5 magnitudes fainter**.`,
    ],
    wrongChoices: {
      A: r`Far too large. A difference of 10.5 magnitudes is a flux ratio of 15,000; the temperature factor of 39 is mostly cancelled by the size and distance factors.`,
      B: r`This has the size ratio the wrong way round (as if A were the larger star) and the sign flipped. Star B is 10 times **larger**, which favours B, not A.`,
      C: r`Too small. Make sure the temperature ratio is raised to the **fourth** power ($2.5^4 \approx 39$) and the size and distance ratios are squared.`,
      E: r`The magnitude is right but the sign is wrong: A is the **fainter** star (less flux), so its magnitude is the larger number and $m_A - m_B$ is positive.`,
    },
    takeaway: r`Received flux goes as R²T⁴/d²; convert a flux ratio to magnitudes with −2.5 log.`,
  },

  "usaaao-2018-first-round-q14": {
    solution: [
      r`The **Kraft break** is a sharp change in how fast stars spin, at about 1.3 to 1.6 solar masses.`,
      r`Below it, stars have thick outer convection zones that generate magnetic fields; their winds drag on those fields and slow the spin over time. Above it, the outer layers become radiative, the magnetic brake disappears, and stars keep spinning fast.`,
      r`So what changes across the break is the star's **energy-transport structure**: convective envelopes below, radiative envelopes above.`,
    ],
    wrongChoices: {
      A: r`"Spin state" is not a stellar property. The Kraft break is about rotation speed, and its cause is a change in the star's interior structure.`,
      C: r`Flaring is strongest in **low-mass** stars with deep convection. Above the break, stars have weaker magnetic activity and flare less, not more.`,
      D: r`Iron cores form only at the very end of a massive star's life, moments before a supernova. The Kraft break concerns ordinary main-sequence stars.`,
      E: r`Stars on both sides of the Kraft break are burning hydrogen in their cores. The break is about their outer layers, not their fuel.`,
    },
    takeaway: r`The Kraft break marks where stars lose their convective envelopes and with them the magnetic braking that slows spin.`,
  },

  "usaaao-2018-first-round-q15": {
    solution: [
      r`The Sun is on the **main sequence** now, will swell into a **red giant**, will shed its outer layers as a **planetary nebula**, and will end as a **white dwarf**.`,
      r`**Cepheid variables** are pulsating stars of roughly 4 to 20 solar masses crossing the instability strip. The Sun is far too light to ever become one.`,
    ],
    wrongChoices: {
      A: r`The Sun **will** become a red giant in about 5 billion years, growing large enough to swallow Mercury and Venus.`,
      B: r`The Sun **will** end as a white dwarf, its carbon-oxygen core slowly cooling for ever.`,
      D: r`The Sun **will** produce a planetary nebula when it puffs off its outer layers at the end of its giant phase.`,
      E: r`The Sun is on the main sequence **right now**, fusing hydrogen in its core.`,
    },
    takeaway: r`Cepheids are massive stars; a Sun-like star goes main sequence, red giant, planetary nebula, white dwarf.`,
  },

  "usaaao-2018-first-round-q16": {
    solution: [
      r`**Red dwarfs** are the smallest true stars, under about half a solar mass. Everything else on the list involves stars many times heavier than the Sun.`,
      r`Wolf-Rayet stars, red supergiants and the progenitors of Type II supernovae are all more than 8 to 20 solar masses, and Cepheids are 4 to 20 solar masses.`,
    ],
    wrongChoices: {
      A: r`Wolf-Rayet stars are the stripped-down cores of very massive stars, typically starting at more than 20 solar masses.`,
      B: r`Type II supernovae come from stars of more than about 8 solar masses; they are high-mass by definition.`,
      C: r`Cepheid variables are intermediate-to-high-mass stars of about 4 to 20 solar masses, far heavier than red dwarfs.`,
      E: r`Red supergiants like Betelgeuse are massive stars (over 8 solar masses) in their final stages.`,
    },
    takeaway: r`Red dwarfs are the lightweights of the stellar world; everything from Cepheids to Wolf-Rayets is much heavier.`,
  },

  "usaaao-2018-first-round-q17": {
    solution: [
      r`On an H-R diagram, temperature runs **backwards** along the horizontal axis (hot on the left, cool on the right), and luminosity increases **upwards**.`,
      r`Cool and dim therefore means **lower right**: the home of the red dwarfs at the bottom end of the main sequence.`,
    ],
    wrongChoices: {
      A: r`Upper right is cool but **bright**: the red giants and supergiants.`,
      C: r`Upper left is hot **and** bright: the blue giants at the top of the main sequence.`,
      D: r`Lower left is hot but dim: the white dwarfs.`,
      E: r`The middle of the main sequence is where Sun-like stars sit, moderate in both temperature and luminosity.`,
    },
    takeaway: r`H-R diagram: hot is left, bright is up, so cool dim stars sit in the lower right.`,
  },

  "usaaao-2018-first-round-q18": {
    solution: [
      r`Being on the **main sequence** means exactly one thing: the star is fusing **hydrogen into helium** in its core. That is true of every main-sequence star, from the smallest red dwarf to the biggest blue giant.`,
      r`Other core properties differ: high-mass stars have convective cores, low-mass stars have radiative cores.`,
    ],
    wrongChoices: {
      A: r`Composition is not uniform in a star's core; it becomes steadily richer in helium as hydrogen is used up, and the pattern differs between low- and high-mass stars.`,
      C: r`Only **high-mass** stars have convective cores (their CNO-cycle burning is so temperature-sensitive that it stirs the core). Low-mass cores are radiative.`,
      D: r`Only **low-mass** stars, like the Sun, have radiative cores. Massive stars' cores convect.`,
      E: r`Main-sequence cores are in stable balance, not contracting. Contraction happens before the main sequence and again after core hydrogen runs out.`,
    },
    takeaway: r`Every main-sequence star burns hydrogen in its core, whatever its mass.`,
  },

  "usaaao-2018-first-round-q19": {
    solution: [
      r`For an ideal gas, pressure is $P = nkT$: the number of particles per unit volume times the temperature (times Boltzmann's constant).`,
      r`So thermal pressure depends on **both** how densely packed the particles are and how fast they are moving, which is what temperature measures. Doubling either doubles the pressure.`,
    ],
    wrongChoices: {
      A: r`Density alone is not enough: a dense but cold gas exerts little pressure. The particles must also be moving fast, which means high temperature.`,
      B: r`Temperature alone is not enough either: a hot but extremely thin gas has few particles to push on the walls. Pressure needs both.`,
      D: r`Composition only matters indirectly, through the number of particles a given mass of gas contains. The pressure law itself is $P = nkT$.`,
      E: r`Gravity is what pressure pushes **against** in a star; it does not itself determine the gas pressure.`,
    },
    takeaway: r`Ideal-gas pressure is P = nkT: it rises with both particle density and temperature.`,
  },

  "usaaao-2018-first-round-q20": {
    solution: [
      r`A planetary nebula is a dying star's outer layers drifting away. The core left behind is a hot ball of carbon and oxygen with no fuel left to burn.`,
      r`Held up by electron degeneracy pressure, it can never collapse or ignite again. It just cools, slowly, for billions of years: a **white dwarf**.`,
    ],
    wrongChoices: {
      A: r`This is the **beginning** of a star's life, not its end. A planetary nebula marks the end of nuclear burning.`,
      B: r`Only massive stars explode, as supernovae. A star that makes a planetary nebula is too light to explode; its core simply cools.`,
      D: r`Neutron stars are made in core-collapse supernovae of stars above about 8 solar masses. Planetary nebulae come from lighter stars, whose cores stop at the white-dwarf stage.`,
      E: r`One of the listed options is exactly right: the leftover core is the remnant that stays behind as the nebula disperses.`,
    },
    takeaway: r`After a planetary nebula the exposed core becomes a white dwarf.`,
  },

  "usaaao-2018-first-round-q21": {
    solution: [
      r`Magnitudes do not add; brightnesses do. The fainter star is $5.2 - 4.3 = 0.9$ magnitudes fainter, so its brightness is $10^{-0.4 \times 0.9} \approx 0.44$ of the brighter one's.`,
      r`Together they give $1 + 0.44 = 1.44$ times the brighter star's light. Combined magnitude: $m = 4.3 - 2.5\log_{10}(1.44) \approx 4.3 - 0.39 = 3.9$.`,
      r`That falls in the **3 to 4** range.`,
    ],
    wrongChoices: {
      A: r`Far too bright. Combining two stars of magnitude 4.3 and 5.2 can only make the pair a fraction of a magnitude brighter than 4.3, not four magnitudes brighter.`,
      B: r`Too bright. Even two equal stars combine to be only 0.75 magnitudes brighter than one of them; here the gain is smaller still.`,
      C: r`Too bright. Adding a star that is 44% as bright as the first raises the total by only about 0.4 magnitudes from 4.3.`,
      E: r`The combined star must be **brighter** than the brighter component (magnitude below 4.3), so the answer cannot be in the 4 to 5 range.`,
    },
    takeaway: r`Combine stars by adding fluxes; the pair is a few tenths of a magnitude brighter than its brightest member.`,
  },

  "usaaao-2018-first-round-q22": {
    solution: [
      r`Radial velocity, transits, microlensing and direct imaging are all established ways of finding exoplanets.`,
      r`**Gravitational waves** are ripples in spacetime produced by colliding black holes and neutron stars. Planets are far too light and slow to make detectable waves, so this is not an exoplanet detection method.`,
    ],
    wrongChoices: {
      A: r`Radial velocity, watching a star's Doppler wobble, found the first exoplanet around a Sun-like star in 1995 and hundreds since.`,
      B: r`Transits, the tiny dips in brightness as a planet crosses its star, have found the majority of known exoplanets (Kepler and TESS).`,
      C: r`Microlensing, where a planet's gravity briefly magnifies a background star, has found dozens of planets, including some very far away.`,
      E: r`Direct imaging has photographed young giant planets around nearby stars, such as the four planets of HR 8799.`,
    },
    takeaway: r`Gravitational waves come from merging compact objects, not from planets.`,
  },

  "usaaao-2018-first-round-q23": {
    solution: [
      r`The first planet found around a Sun-like star was **51 Pegasi b** in 1995. It was a shock: a planet about half Jupiter's mass orbiting its star every 4.2 days, closer than Mercury is to the Sun.`,
      r`That combination, a giant planet roasting close to its star, is what we now call a **hot Jupiter**.`,
    ],
    wrongChoices: {
      A: r`Earth-sized planets are tiny and hard to detect; the first ones were not found until the Kepler mission, more than a decade later.`,
      B: r`Super-Earths were found only after detection methods became more sensitive, in the mid-2000s.`,
      C: r`Mini-Neptunes are small planets identified mainly by the Kepler transit survey after 2009.`,
      D: r`The first discovery was a giant planet roughly half of Jupiter's mass, on a blistering four-day orbit, not a Neptune-class world.`,
    },
    takeaway: r`51 Pegasi b, the first exoplanet found around a Sun-like star, was a hot Jupiter.`,
  },

  "usaaao-2018-first-round-q24": {
    solution: [
      r`The transit depth is the fraction of the star's disc the planet covers: $1 - 0.98 = 0.02 = \left(\dfrac{R_p}{R_\star}\right)^2$.`,
      r`So $\dfrac{R_p}{R_\star} = \sqrt{0.02} \approx 0.141$, and $R_p = 0.141 \times 0.72 \approx 0.10$ solar radii, about the size of Jupiter. The 13.8-day period is not needed for the radius.`,
    ],
    wrongChoices: {
      A: r`This multiplies by the depth 0.02 instead of its square root. The depth is an **area** ratio, so take the square root to get the radius ratio.`,
      C: r`This is the radius ratio $\sqrt{0.02}$ on its own. The question asks for the planet's radius in solar radii, so multiply by the star's 0.72 solar radii.`,
      D: r`This is $0.72 \times \sqrt{0.98}$, using the light that **remains** rather than the light that is **lost**. The planet's size comes from the 2% dip.`,
      E: r`This is nearly the star's own radius; a planet that big would block almost all the light, not 2% of it.`,
    },
    takeaway: r`Transit depth = (R_p/R_star)², so R_p = R_star × √(depth).`,
  },

  "usaaao-2018-first-round-q25": {
    solution: [
      r`The centre of the Milky Way lies about 26,000 light-years away in the direction of **Sagittarius**, near its border with Scorpius and Ophiuchus. The Milky Way is at its widest and brightest there, and the supermassive black hole Sagittarius A* sits at the very centre.`,
    ],
    wrongChoices: {
      A: r`Gemini lies in the **opposite** direction, towards the outer edge of the Galaxy, which is why the winter Milky Way is fainter.`,
      C: r`Scorpius is next to the galactic centre and is often mistaken for it, but the centre itself lies just over the border in Sagittarius.`,
      D: r`Cancer is far from the galactic plane, in the direction of the Galaxy's outer rim.`,
      E: r`Virgo is near the **north galactic pole**, looking straight out of the disc, which is why so many distant galaxies are visible there.`,
    },
    takeaway: r`The galactic centre lies in Sagittarius, where the Milky Way is brightest.`,
  },

  "usaaao-2018-first-round-q26": {
    solution: [
      r`Stars are born from cold gas, and the Milky Way's gas is concentrated in the **thin disc**, hugging the galactic plane.`,
      r`That is where all the star-forming nebulae and young open clusters live, so the youngest stars are found in the thin disc near the plane.`,
    ],
    wrongChoices: {
      A: r`The halo contains the Galaxy's **oldest** stars, over 10 billion years old, with almost no gas to make new ones.`,
      B: r`Globular clusters are ancient, among the oldest objects in the Galaxy. No new stars form in them.`,
      D: r`The thick disc is an older population of stars that has been stirred up away from the plane over billions of years. New stars form in the thin disc.`,
      E: r`The bulge is dominated by old, red stars, formed early in the Galaxy's history.`,
    },
    takeaway: r`Young stars live in the gas-rich thin disc; the halo, bulge and globular clusters are old.`,
  },

  "usaaao-2018-first-round-q27": {
    solution: [
      r`Harlow Shapley measured distances to the Milky Way's globular clusters using the **RR Lyrae** variables inside them, which all have about the same luminosity.`,
      r`He found the clusters centred on a point far from the Sun, in Sagittarius, showing that the Sun is not at the centre and that the Galaxy is far bigger than anyone had thought.`,
    ],
    wrongChoices: {
      B: r`Pulsating AGB stars (Miras) are used as distance indicators today, but they were not Shapley's tool in the 1920s.`,
      C: r`Type Ia supernovae are used for distances to **other galaxies** billions of light-years away; they were not understood or usable in the 1920s.`,
      D: r`Type II supernovae are far too rare and irregular to map our own Galaxy, and were not used by Shapley.`,
      E: r`White dwarfs are extremely faint and have no fixed luminosity, so they are useless as distance markers for globular clusters.`,
    },
    takeaway: r`Shapley used RR Lyrae stars in globular clusters to find the size of the Milky Way and the Sun's off-centre position.`,
  },

  "usaaao-2018-first-round-q28": {
    solution: [
      r`Diffraction limit: $\theta = 1.22\,\dfrac{\lambda}{D}$. With $\lambda = 5500$ Å $= 5.5 \times 10^{-7}$ m and $D = 0.20$ m, $\theta = 1.22 \times \dfrac{5.5 \times 10^{-7}}{0.20} = 3.36 \times 10^{-6}$ rad.`,
      r`Convert with $206{,}265''$ per radian: $3.36 \times 10^{-6} \times 206{,}265 \approx 0.69$ arcseconds.`,
      r`In practice the atmosphere usually blurs images to about $1''$ or worse, so an 8-inch telescope is close to the point where seeing, not optics, sets the limit.`,
    ],
    wrongChoices: {
      A: r`Half the true value. Check that you used the aperture of 0.20 m (not 0.40 m) and kept the factor 1.22.`,
      C: r`Forty times too fine; this would need an 8-metre telescope. Recheck the powers of ten in $\lambda/D$.`,
      D: r`Too coarse by a factor of 2.5. Recompute $1.22 \times 5.5 \times 10^{-7} / 0.20$ and convert with 206,265″ per radian.`,
      E: r`Ten times too coarse. Look for a slipped power of ten, probably in converting ångströms to metres ($5500$ Å $= 5.5 \times 10^{-7}$ m).`,
    },
    takeaway: r`Diffraction limit θ = 1.22λ/D: an 8-inch telescope resolves about 0.7″ in visible light.`,
  },

  "usaaao-2018-first-round-q29": {
    solution: [
      r`A telescope's finest resolvable detail is set by diffraction: $\theta = 1.22\lambda/D$. The only way to make $\theta$ smaller at a given wavelength is to make the **aperture** $D$ bigger.`,
      r`Magnification and focal lengths just enlarge the image, blur and all. They cannot add detail that the aperture did not capture.`,
    ],
    wrongChoices: {
      B: r`Magnification enlarges the image but also enlarges the diffraction blur. Beyond a certain point you just get a bigger fuzzy view with no new detail.`,
      C: r`A longer-focal-length eyepiece actually gives **lower** magnification, and in any case eyepieces cannot change the diffraction limit.`,
      D: r`A longer telescope focal length increases magnification and image scale, but the resolution still depends only on the aperture.`,
      E: r`Only the aperture affects resolving power, so "all of the above" cannot be right.`,
    },
    takeaway: r`Only a larger aperture improves angular resolution; magnification merely enlarges the blur.`,
  },

  "usaaao-2018-first-round-q30": {
    solution: [
      r`For a binary star, Kepler's third law in solar units gives the total mass directly: $M_1 + M_2 = \dfrac{a^3}{P^2}$, with $a$ in AU, $P$ in years and $M$ in solar masses.`,
      r`$a^3 = 0.85^3 \approx 0.614$ and $P^2 = 0.285^2 \approx 0.0812$, so $M_{\text{total}} = \dfrac{0.614}{0.0812} \approx 7.6$ solar masses, closest to **7.5**.`,
      r`Capella's two giant stars are each about 2.5 solar masses, so this answer is on the high side but shows the method.`,
    ],
    wrongChoices: {
      A: r`Too small. Compute $0.85^3 / 0.285^2$; the numerator is about 0.61 and the denominator about 0.081.`,
      B: r`Too small. Make sure you **cubed** the semi-major axis and **squared** the period, not the other way around.`,
      D: r`Too large. Recheck $0.85^3 \approx 0.614$ and $0.285^2 \approx 0.0812$, then divide.`,
      E: r`Too large. Recompute $a^3/P^2$ with $a = 0.85$ AU and $P = 0.285$ yr.`,
    },
    takeaway: r`A binary's total mass in solar units is a³/P², with a in AU and P in years.`,
  },
};
