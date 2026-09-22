import type { McqExplanationMap } from "./types";

// Teaching explanations for the IAAC 2019 Final Round questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "iaac-2019-final-round-q1": {
    solution: [
      r`The Kelvin scale starts at absolute zero, which is $-273.15\ ^\circ$C, and its degrees are the same size as Celsius degrees. So $T_K = T_C + 273.15$.`,
      r`$25 + 273 = 298$ K, which is about **300 K**: room temperature.`,
    ],
    wrongChoices: {
      A: r`200 K is $-73\ ^\circ$C, colder than anywhere on Earth.`,
      B: r`250 K is $-23\ ^\circ$C, a bitter winter day.`,
      D: r`350 K is $77\ ^\circ$C, hot enough to scald.`,
    },
    takeaway: r`Kelvin = Celsius + 273; room temperature is about 300 K.`,
  },

  "iaac-2019-final-round-q2": {
    solution: [
      r`Mars's thin atmosphere is about 95% **carbon dioxide**, with a few percent nitrogen and argon and almost no oxygen. Even if it were thicker, there would be nothing to breathe.`,
    ],
    wrongChoices: {
      A: r`Nitrogen is the main gas of **Earth's** atmosphere. On Mars it is only about 3%.`,
      B: r`Argon makes up about 2% of the Martian air, a minor component.`,
      C: r`Methane exists on Mars only in trace amounts, parts per billion, and its source is still debated.`,
    },
    takeaway: r`The Martian atmosphere is mostly CO₂, thin and unbreathable.`,
  },

  "iaac-2019-final-round-q3": {
    solution: [
      r`Mars has two tiny, lumpy moons, **Phobos** and **Deimos**, discovered in 1877. They are named after the sons of Ares (the Greek Mars): Fear and Panic.`,
    ],
    wrongChoices: {
      A: r`Neither name is a moon of Mars. Both names are made up.`,
      B: r`Deimos is right, but "Tritos" is not a real moon; Mars's other moon is Phobos.`,
      C: r`Phobos is right, but "Tritos" is not a real moon; Mars's other moon is Deimos.`,
    },
    takeaway: r`Mars's moons are Phobos and Deimos.`,
  },

  "iaac-2019-final-round-q4": {
    solution: [
      r`The **Great Red Spot** is a gigantic storm in **Jupiter's** atmosphere, larger than Earth, that has been raging for at least 190 years.`,
    ],
    wrongChoices: {
      A: r`Venus is wrapped in featureless yellow-white clouds of sulphuric acid with no visible spots.`,
      B: r`Mars has red **ground**, not a red spot; its atmosphere is too thin for giant storms of this kind.`,
      D: r`Saturn has occasional white storms, but the famous long-lived red storm belongs to Jupiter.`,
    },
    takeaway: r`The Great Red Spot is Jupiter's centuries-old giant storm.`,
  },

  "iaac-2019-final-round-q5": {
    solution: [
      r`Earth's spin axis is tipped by about **23.5°** from the perpendicular to its orbit. That tilt is what gives us the seasons: each hemisphere leans towards the Sun for half the year.`,
    ],
    wrongChoices: {
      A: r`Too small. The tilt (obliquity) is 23.4°, not 20.3°.`,
      B: r`Too small. Earth's obliquity is about 23.5°.`,
      C: r`Close but not the standard value; the tilt is 23.44°, usually rounded to 23.5°.`,
    },
    takeaway: r`Earth's axial tilt is about 23.5°, the cause of the seasons.`,
  },

  "iaac-2019-final-round-q6": {
    solution: [
      r`The Pleiades are the **Seven Sisters** of Greek myth, and most people can pick out six or seven stars with the naked eye, though the cluster actually holds over a thousand.`,
    ],
    wrongChoices: {
      A: r`Five is fewer than the traditional count. The cluster is famous as the "Seven Sisters".`,
      C: r`Nine is the number of named stars (the seven sisters plus their parents Atlas and Pleione), but the cluster's fame rests on the seven.`,
      D: r`Twelve is more than the eye typically sees; the traditional count is seven.`,
    },
    takeaway: r`The Pleiades are the Seven Sisters.`,
  },

  "iaac-2019-final-round-q7": {
    solution: [
      r`After the Alpha Centauri system (4.2 to 4.4 light-years), the next nearest star is **Barnard's Star**, a faint red dwarf about 6 light-years away in Ophiuchus, famous for its record-breaking proper motion.`,
    ],
    wrongChoices: {
      A: r`Wolf 359 is the next one after Barnard's Star, at 7.9 light-years.`,
      B: r`Sirius is the brightest star in the night sky but it is 8.6 light-years away, further than several fainter neighbours.`,
      C: r`61 Cygni, the first star to have its parallax measured, is 11.4 light-years away.`,
    },
    takeaway: r`Nearest stars in order: Alpha Centauri, Barnard's Star, Wolf 359, then Sirius further out.`,
  },

  "iaac-2019-final-round-q8": {
    solution: [
      r`Human eyes respond to wavelengths from about **380 nm** (violet) to about **740 nm** (deep red). Shorter is ultraviolet, longer is infrared.`,
    ],
    wrongChoices: {
      A: r`240 nm is well into the ultraviolet, invisible to us.`,
      B: r`This range cuts off the red end; we can see out to about 700 to 740 nm.`,
      D: r`810 nm is near-infrared, beyond human vision, and 420 nm cuts off part of the violet we can see.`,
    },
    takeaway: r`Visible light spans roughly 380 to 740 nm.`,
  },

  "iaac-2019-final-round-q9": {
    solution: [
      r`**Cassiopeia**'s five bright stars trace a distinctive W (or M, depending on the season) that circles the north celestial pole opposite the Big Dipper.`,
    ],
    wrongChoices: {
      A: r`Centaurus is a large **southern** constellation, home of Alpha Centauri.`,
      B: r`Cygnus, the Swan, is a northern constellation shaped like a cross, not a W.`,
      D: r`Cepheus is next to Cassiopeia but looks like a faint house or pentagon.`,
    },
    takeaway: r`Cassiopeia is the bright W in the northern sky.`,
  },

  "iaac-2019-final-round-q10": {
    solution: [
      r`**Bolometric** luminosity is the total power a star radiates across **all wavelengths**, from radio to gamma rays, as opposed to the luminosity in just one band like the visible.`,
    ],
    wrongChoices: {
      A: r`Polarisation has nothing to do with it; bolometric means summed over every wavelength.`,
      B: r`Bolometric luminosity does not single out any polarisation state.`,
      C: r`Restricting to the visible gives the **visual** luminosity, only part of the total.`,
    },
    takeaway: r`Bolometric = integrated over the entire electromagnetic spectrum.`,
  },

  "iaac-2019-final-round-q11": {
    solution: [
      r`To escape, an object's kinetic energy must at least cancel its (negative) gravitational potential energy: $\tfrac{1}{2}mv^2 = \dfrac{GMm}{R}$.`,
      r`Solving: $v_{\text{esc}} = \sqrt{\dfrac{2GM}{R}}$. For Earth that is 11.2 km/s.`,
    ],
    wrongChoices: {
      A: r`This is the **circular orbit** speed (the first cosmic velocity). Escape needs $\sqrt{2}$ times more.`,
      B: r`Too large: the factor 2 belongs **inside** the square root, not outside.`,
      D: r`Too small by a factor of 2; the 2 should multiply $GM$, not divide it.`,
    },
    takeaway: r`Escape speed is √(2GM/R), √2 times the circular speed.`,
  },

  "iaac-2019-final-round-q12": {
    solution: [
      r`Orbital speed: $v = \sqrt{\dfrac{GM}{r}}$ with $r = 6371 + 410 = 6781$ km: $v = \sqrt{\dfrac{3.986 \times 10^{14}}{6.781 \times 10^6}} \approx 7.67$ km/s.`,
      r`Converting, $7.67 \times 3600 \approx 27{,}600$ km/h, closest to **28,000 km/h**. That is one orbit every 93 minutes.`,
    ],
    wrongChoices: {
      A: r`Too slow; at 19,000 km/h (5.3 km/s) the ISS would fall out of orbit. Low Earth orbit needs about 7.7 km/s.`,
      B: r`Too slow. Compute $\sqrt{GM/r}$ with $r \approx 6800$ km.`,
      D: r`Too fast; 32,000 km/h is 8.9 km/s, which would put the station on an elliptical orbit reaching much higher.`,
    },
    takeaway: r`Low Earth orbit means about 7.7 km/s, roughly 28,000 km/h.`,
  },

  "iaac-2019-final-round-q13": {
    solution: [
      r`The Sun's visible surface, the photosphere, has an effective temperature of about **5,800 K**, closest to 6,000 K. That temperature makes it a yellow-white G-type star.`,
    ],
    wrongChoices: {
      B: r`7,000 K would be an F-type star, whiter than the Sun.`,
      C: r`9,000 K is the temperature of an A-type star like Sirius.`,
      D: r`13,000 K is a hot blue B-type star, far hotter than the Sun's surface.`,
    },
    takeaway: r`The Sun's surface is about 5,800 K.`,
  },

  "iaac-2019-final-round-q14": {
    solution: [
      r`From the inside out the Galilean moons are **Io**, Europa, Ganymede, Callisto. Io's closeness is why Jupiter's tides heat it into the most volcanic body in the Solar System.`,
    ],
    wrongChoices: {
      A: r`Callisto is the **outermost** of the four.`,
      B: r`Europa is second from Jupiter, just outside Io.`,
      C: r`Ganymede, the largest moon in the Solar System, is third.`,
    },
    takeaway: r`Galilean moons from inside out: Io, Europa, Ganymede, Callisto.`,
  },

  "iaac-2019-final-round-q15": {
    solution: [
      r`The Milky Way's central black hole, four million times the Sun's mass, is called **Sagittarius A*** ("A-star") after the constellation it lies in and the bright radio source that marks it.`,
    ],
    wrongChoices: {
      A: r`Altair is a bright star in Aquila, not the galactic centre.`,
      B: r`Alsephina is a star in Vela; there is no black hole by that name.`,
      C: r`Fomalhaut is a nearby star in Piscis Austrinus, nothing to do with the galactic centre.`,
    },
    takeaway: r`The Milky Way's central black hole is Sagittarius A*.`,
  },

  "iaac-2019-final-round-q16": {
    solution: [
      r`The Andromeda Galaxy (M31), the nearest large galaxy to our own, is about **2.5 million light-years** away, the most distant thing visible to the naked eye.`,
    ],
    wrongChoices: {
      A: r`Too close; 1.7 million light-years underestimates the distance.`,
      B: r`Too close; the accepted distance is about 2.5 million light-years (770 kpc).`,
      D: r`Too far; the Triangulum Galaxy is about 2.7 million light-years away and Andromeda is a little nearer than that.`,
    },
    takeaway: r`Andromeda is about 2.5 million light-years away.`,
  },

  "iaac-2019-final-round-q17": {
    solution: [
      r`Galileo built his first telescope in **1609**, improving on Dutch designs from the year before, and within months was observing the Moon's craters, Jupiter's moons and the phases of Venus.`,
    ],
    wrongChoices: {
      A: r`1409 is two centuries too early; there were no telescopes in the fifteenth century.`,
      B: r`1509 is a century too early, before Galileo was even born (1564).`,
      D: r`1709 is a century too late; Galileo died in 1642.`,
    },
    takeaway: r`Galileo's telescope dates from 1609.`,
  },

  "iaac-2019-final-round-q18": {
    solution: [
      r`A **parsec** is a "parallax second": the distance at which the Earth-Sun distance (1 AU) appears to span an angle of one arcsecond. A star at 1 pc shows a parallax of 1 arcsecond as Earth orbits.`,
    ],
    wrongChoices: {
      B: r`The Sun's orbit around the Galaxy covers about 8 billion km in a year, roughly 55 AU, nowhere near a parsec.`,
      C: r`The heliosphere extends to about 100 AU, a tiny fraction of a parsec (206,265 AU).`,
      D: r`Sirius is 2.6 pc away; the parsec is defined by geometry, not by any particular star.`,
    },
    takeaway: r`One parsec is where 1 AU subtends 1 arcsecond: d(pc) = 1/p(″).`,
  },

  "iaac-2019-final-round-q19": {
    solution: [
      r`The tangled, filamentary cloud in the picture is the **Crab Nebula** (M1) in Taurus, the remains of a supernova seen in 1054. Its orange filaments are the shattered star and its bluish glow comes from a pulsar at the centre.`,
    ],
    wrongChoices: {
      B: r`The Orion Nebula is a smooth, glowing star-forming cloud with bright young stars at its heart, not a web of filaments.`,
      C: r`The Ring Nebula is a neat, smoke-ring-shaped planetary nebula, quite unlike this tangled remnant.`,
      D: r`The Carina Nebula is a vast, bright star-forming region with dark dust pillars, much larger and smoother than this object.`,
    },
    takeaway: r`The Crab Nebula's filamentary web is the wreckage of the supernova of 1054.`,
  },

  "iaac-2019-final-round-q20": {
    solution: [
      r`**Betelgeuse** is the red supergiant marking **Orion**'s eastern shoulder, opposite blue Rigel at the hunter's foot.`,
    ],
    wrongChoices: {
      A: r`Cassiopeia's stars form a W; none is a bright red supergiant.`,
      B: r`Cygnus's brightest star is white Deneb, not red Betelgeuse.`,
      C: r`Ursa Major holds the Big Dipper; its stars are white and blue-white.`,
    },
    takeaway: r`Betelgeuse is Orion's red shoulder.`,
  },

  "iaac-2019-final-round-q21": {
    solution: [
      r`The **ecliptic** is the great circle traced by the Sun against the background stars over a year, which is really the plane of Earth's orbit projected onto the sky. The planets stay close to it too.`,
    ],
    wrongChoices: {
      B: r`The axial tilt is a fixed 23.5°; it is the angle between the ecliptic and the celestial equator, not the ecliptic itself.`,
      C: r`The daily wheeling of the stars is the **diurnal** motion, caused by Earth's spin, not its orbit.`,
      D: r`The rotation axis points at the celestial poles; the ecliptic is a circle on the sky, not an axis.`,
    },
    takeaway: r`The ecliptic is the Sun's yearly path across the sky, i.e. Earth's orbital plane.`,
  },

  "iaac-2019-final-round-q22": {
    solution: [
      r`Pluto orbits at an average of 39.5 AU. Kepler's third law gives $P = 39.5^{3/2} \approx 248$ years, closest to **250 years**. It has not completed one orbit since its discovery in 1930.`,
    ],
    wrongChoices: {
      A: r`Too short; 150 years would correspond to about 28 AU, inside Neptune's orbit.`,
      B: r`Too short; 200 years corresponds to about 34 AU.`,
      D: r`Too long; 300 years would need a semi-major axis of about 45 AU.`,
    },
    takeaway: r`Pluto's year is about 248 Earth years.`,
  },

  "iaac-2019-final-round-q23": {
    solution: [
      r`Sunspot numbers rise and fall in the **11-year solar cycle**, driven by the Sun's magnetic field flipping polarity (the full magnetic cycle is 22 years).`,
    ],
    wrongChoices: {
      A: r`Individual cycles have ranged from about 9 to 14 years, but the average, and the number everyone quotes, is 11.`,
      C: r`Thirteen years is longer than the average cycle.`,
      D: r`Fifteen years is longer than any well-recorded cycle.`,
    },
    takeaway: r`The sunspot cycle is about 11 years.`,
  },

  "iaac-2019-final-round-q24": {
    solution: [
      r`The Large Magellanic Cloud is a **dwarf galaxy** about 160,000 light-years away, one of the Milky Way's satellite galaxies, visible as a hazy patch from the southern hemisphere.`,
    ],
    wrongChoices: {
      B: r`A planetary nebula is a single dying star's gas shell, a few light-years across; the LMC is a whole galaxy of billions of stars.`,
      C: r`It is far more than a star cluster, and it was known to southern peoples long before Magellan's voyage of 1519.`,
      D: r`It lies well outside the Milky Way's disc, a separate galaxy rather than one of our spiral arms.`,
    },
    takeaway: r`The Magellanic Clouds are satellite dwarf galaxies of the Milky Way.`,
  },

  "iaac-2019-final-round-q25": {
    solution: [
      r`In 2014 astronomers mapped the flow of galaxies and found the Milky Way sits in a supercluster 160 Mpc (500 million light-years) across, named **Laniakea**, Hawaiian for "immense heaven".`,
    ],
    wrongChoices: {
      A: r`The Virgo Supercluster is our local part of Laniakea, but it is only about a tenth the size.`,
      C: r`The Sculptor Supercluster is a different, more distant structure.`,
      D: r`Boötes is known for a giant **void**, an almost empty region, not for our supercluster.`,
    },
    takeaway: r`The Milky Way belongs to the Laniakea Supercluster.`,
  },

  "iaac-2019-final-round-q26": {
    solution: [
      r`Cepheids pulsate with a period that reveals their true luminosity. Comparing that with how bright they appear gives their distance, making them **standard candles** for measuring distances to other galaxies.`,
    ],
    wrongChoices: {
      A: r`Cepheids tell you nothing about the mass of the gas between stars.`,
      C: r`Energy density is not something a pulsating star measures.`,
      D: r`Interstellar density is measured with spectral lines and radio observations, not with Cepheids.`,
    },
    takeaway: r`Cepheids are cosmic distance markers thanks to their period-luminosity relation.`,
  },

  "iaac-2019-final-round-q27": {
    solution: [
      r`Stephen Hawking showed in 1974 that quantum effects at the event horizon make black holes glow faintly and slowly lose mass: **Hawking radiation**.`,
    ],
    wrongChoices: {
      A: r`Schwarzschild gave us the black hole's **radius**, not a form of radiation.`,
      B: r`Planck radiation is ordinary thermal (blackbody) radiation; Hawking radiation is thermal too, but the name for the black-hole process is Hawking's.`,
      C: r`Kolmogorov worked on turbulence and probability; there is no Kolmogorov radiation.`,
    },
    takeaway: r`Black holes evaporate through Hawking radiation.`,
  },

  "iaac-2019-final-round-q28": {
    solution: [
      r`A **black body** is an idealised object that **absorbs** every bit of radiation that hits it, reflecting none. Because it absorbs perfectly, it also emits the ideal thermal spectrum for its temperature, which is why stars are modelled as black bodies.`,
    ],
    wrongChoices: {
      A: r`A perfect reflector is the opposite, a perfect **white** body. Black bodies absorb everything.`,
      C: r`Polarisation is irrelevant, and reflection is the opposite of what a black body does.`,
      D: r`A black body absorbs **all** radiation, whatever its polarisation.`,
    },
    takeaway: r`A black body absorbs all incoming radiation and emits a pure thermal spectrum.`,
  },

  "iaac-2019-final-round-q29": {
    solution: [
      r`One astronomical unit is the average Earth-Sun distance, defined as exactly 149,597,870.7 km, about **150 million km**.`,
    ],
    wrongChoices: {
      A: r`Too small; 130 million km is less than Earth's closest approach to the Sun (147 million km).`,
      C: r`Too large; Earth never gets further than 152 million km from the Sun.`,
      D: r`Too large; 190 million km is closer to Mars's orbit than Earth's.`,
    },
    takeaway: r`1 AU ≈ 150 million km.`,
  },

  "iaac-2019-final-round-q30": {
    solution: [
      r`The **Arecibo** telescope in Puerto Rico had a 305-metre dish built into a natural sinkhole, the largest single dish in the world for over 50 years until its collapse in 2020.`,
    ],
    wrongChoices: {
      A: r`The Green Bank Telescope is the largest fully **steerable** dish, at 100 by 110 metres, but far smaller than Arecibo.`,
      C: r`The RT-70 in Crimea is a 70-metre dish.`,
      D: r`The Effelsberg telescope in Germany is a 100-metre steerable dish.`,
    },
    takeaway: r`Arecibo's 305 m dish was the largest of its era.`,
  },

  "iaac-2019-final-round-q31": {
    solution: [
      r`The Milky Way's band runs through Perseus, Cassiopeia, Cygnus, Aquila, Sagittarius and Scorpius. **Leo** lies far from it, in the direction of the galactic north pole where we look out of the disc.`,
    ],
    wrongChoices: {
      A: r`Perseus lies in the winter Milky Way, with the Double Cluster embedded in it.`,
      B: r`Cygnus flies along the summer Milky Way; the Great Rift of dark dust runs right through it.`,
      C: r`Scorpius sits in the richest part of the Milky Way, next to the galactic centre in Sagittarius.`,
    },
    takeaway: r`Leo is a spring constellation far from the Milky Way's band.`,
  },

  "iaac-2019-final-round-q32": {
    solution: [
      r`A comet's tails are pushed by sunlight and the solar wind, so they always point **away from the Sun**, regardless of which way the comet is moving. A comet heading outward actually travels tail-first.`,
    ],
    wrongChoices: {
      B: r`The tail is pushed away from the Sun by radiation pressure and the solar wind, never towards it.`,
      C: r`The direction of motion does not matter; leaving the inner Solar System, a comet's tail is ahead of it.`,
      D: r`A comet's tail is not like a plume trailing behind a jet; it is blown by the Sun, not left behind by motion.`,
    },
    takeaway: r`Comet tails point away from the Sun, not behind the comet.`,
  },

  "iaac-2019-final-round-q33": {
    solution: [
      r`A massive star late in life burns fuel in nested shells, like an onion. From the outside in the ashes get heavier: hydrogen, helium, **carbon**, **oxygen**, **neon**, silicon, and finally an iron core that cannot burn further.`,
    ],
    wrongChoices: {
      A: r`Lithium and nitrogen are not fusion products that form shells; stars destroy lithium rather than making it.`,
      C: r`Lithium is not made in stellar fusion shells; it is burned away.`,
      D: r`Nitrogen is a by-product of the CNO cycle, not a major shell fuel, and neon is missing from this sequence.`,
    },
    takeaway: r`Massive stars build an onion of H, He, C, O, Ne, Si and an iron core.`,
  },

  "iaac-2019-final-round-q34": {
    solution: [
      r`In 1998 supernova surveys found the universe's expansion is **speeding up**. **Dark energy** is the name for whatever drives that acceleration.`,
    ],
    wrongChoices: {
      A: r`Black-hole radiation is Hawking radiation, unrelated to dark energy.`,
      B: r`The mass distribution of galaxies is explained by **dark matter**, a different thing.`,
      D: r`The microwave background is the afterglow of the Big Bang, explained by the hot early universe, not by dark energy.`,
    },
    takeaway: r`Dark energy explains the accelerating expansion of the universe.`,
  },

  "iaac-2019-final-round-q35": {
    solution: [
      r`The **triple-alpha** process fuses three helium-4 nuclei (alpha particles) into one carbon-12 nucleus: $3\,{}^4_2\text{He} \to {}^{12}_6\text{C} + \gamma$. It is how stars make carbon.`,
    ],
    wrongChoices: {
      A: r`Three deuterium nuclei do not fuse into lithium in stars; "alpha" means helium-4.`,
      C: r`Deuterium is not part of the triple-alpha process, which uses only helium-4 nuclei.`,
      D: r`This is a two-body reaction with the wrong ingredients; triple-alpha means three alpha particles.`,
    },
    takeaway: r`Triple-alpha: three helium-4 nuclei make carbon-12.`,
  },

  "iaac-2019-final-round-q36": {
    solution: [
      r`**Neutrinos** feel only the weak force (and gravity), so they pass through matter almost untouched: trillions stream through your body every second. Detectors need huge volumes to catch a handful.`,
    ],
    wrongChoices: {
      A: r`Muons are charged, so they interact electromagnetically and are stopped by a few metres of rock.`,
      B: r`Antiparticles interact just as strongly as their partners, and annihilate on contact with ordinary matter.`,
      D: r`Pions feel the strong force and are stopped within centimetres in dense matter.`,
    },
    takeaway: r`Neutrinos interact only weakly, which is why they are so hard to detect.`,
  },

  "iaac-2019-final-round-q37": {
    solution: [
      r`The **Schwarzschild radius**, $R_s = 2GM/c^2$, is the radius of a **black hole's** event horizon: the boundary inside which nothing, not even light, can escape.`,
    ],
    wrongChoices: {
      A: r`Red dwarfs are ordinary small stars, thousands of times larger than their own Schwarzschild radius.`,
      B: r`Pulsars are neutron stars; dense, but still bigger than their Schwarzschild radius.`,
      D: r`Galaxies are not described by a Schwarzschild radius, though the black holes in their centres are.`,
    },
    takeaway: r`The Schwarzschild radius is the size of a black hole's event horizon.`,
  },

  "iaac-2019-final-round-q38": {
    solution: [
      r`Boltzmann's constant is $k_B = 1.38 \times 10^{-23}$ J/K. A joule is $\text{kg}\cdot\text{m}^2\cdot\text{s}^{-2}$, so the units are $\text{m}^2\cdot\text{kg}\cdot\text{s}^{-2}\cdot\text{K}^{-1}$.`,
    ],
    wrongChoices: {
      A: r`The exponent is wrong ($10^{-21}$) and $\text{m}^3$ is not part of a joule.`,
      B: r`The exponent is wrong and $\text{s}^{-3}$ would make it a power, not an energy.`,
      D: r`The exponent is wrong and $\text{K}^{-2}$ is not right; $k_B$ is an energy per kelvin.`,
    },
    takeaway: r`k_B = 1.38 × 10⁻²³ J/K, an energy per kelvin.`,
  },

  "iaac-2019-final-round-q39": {
    solution: [
      r`A Type Ia supernova is a **white dwarf** in a **binary system** that gains mass from its companion (or merges with another white dwarf) until it passes the Chandrasekhar limit and explodes.`,
    ],
    wrongChoices: {
      B: r`Type Ia supernovae need white dwarfs, which take time to form, so they appear in old and young galaxies alike, not preferentially in young ones.`,
      C: r`Gamma-ray bursts are linked to the collapse of massive stars and neutron-star mergers, not to Type Ia explosions.`,
      D: r`Type Ia supernovae are not notable X-ray sources; their light is mostly optical, powered by radioactive nickel.`,
    },
    takeaway: r`Type Ia supernovae are exploding white dwarfs in binary systems.`,
  },

  "iaac-2019-final-round-q40": {
    solution: [
      r`Frank Drake's 1961 equation multiplies factors like the star-formation rate, the fraction of stars with planets and the fraction of planets with life to estimate how many communicating civilisations share our Galaxy: in short, **are we alone?**`,
    ],
    wrongChoices: {
      A: r`The Sun's fate is a question of stellar evolution (it will become a white dwarf, not a black hole).`,
      B: r`The size of the universe is a cosmology question, unrelated to Drake's equation.`,
      C: r`The universe's age comes from the Hubble constant and the CMB, not from the Drake equation.`,
    },
    takeaway: r`The Drake equation estimates the number of communicating civilisations in the Milky Way.`,
  },
};
