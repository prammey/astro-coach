import type { McqExplanationMap } from "./types";

// Teaching explanations for the IAAC 2024 Final Round questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "iaac-2024-final-round-q1": {
    solution: [
      r`A star can be seen from latitude $\phi$ only if its declination is above $\phi - 90^\circ$. **Alpha Centauri** sits at declination $-61^\circ$, so it never rises for anyone north of about $29^\circ$ N: for practical purposes a southern-hemisphere star.`,
    ],
    wrongChoices: {
      A: r`Antares, at declination $-26^\circ$, is easily seen from most of the northern hemisphere every summer.`,
      B: r`Arcturus is a **northern** star, at declination $+19^\circ$.`,
      D: r`Altair is a northern star at $+9^\circ$, part of the Summer Triangle.`,
    },
    takeaway: r`Alpha Centauri, at −61°, is hidden from most of the northern hemisphere.`,
  },

  "iaac-2024-final-round-q2": {
    solution: [
      r`**Crux**, the Southern Cross, lies at declination $-60^\circ$, close to the south celestial pole. It is a symbol of the southern hemisphere and invisible from Europe and most of North America.`,
    ],
    wrongChoices: {
      A: r`Cepheus circles the **north** celestial pole.`,
      B: r`Cassiopeia is a far-northern constellation, circumpolar from Europe.`,
      C: r`Cygnus is a northern summer constellation.`,
    },
    takeaway: r`Crux is the signature constellation of the southern sky.`,
  },

  "iaac-2024-final-round-q3": {
    solution: [
      r`The Large Magellanic Cloud is a **dwarf galaxy**, about a hundredth of the Milky Way's mass, orbiting our Galaxy at 160,000 light-years.`,
    ],
    wrongChoices: {
      A: r`It lies within the constellation Dorado, but is a real object, not a pattern of stars.`,
      C: r`It contains nebulae (like the Tarantula) but is far larger: a whole galaxy of billions of stars.`,
      D: r`A star cluster holds thousands of stars, not billions, and has no gas and spiral structure.`,
    },
    takeaway: r`The LMC is a satellite dwarf galaxy of the Milky Way.`,
  },

  "iaac-2024-final-round-q4": {
    solution: [
      r`Estimates for the Milky Way's population run from about **100 to 400 billion** stars; nobody can count them individually, so the number comes from the Galaxy's mass and light.`,
    ],
    wrongChoices: {
      A: r`Too few; even the lowest estimates are around 100 billion.`,
      C: r`Higher than most estimates; that range suits the larger Andromeda Galaxy.`,
      D: r`Too many for the Milky Way; about a trillion is Andromeda's upper estimate.`,
    },
    takeaway: r`The Milky Way holds a few hundred billion stars.`,
  },

  "iaac-2024-final-round-q5": {
    solution: [
      r`Objects near Earth's surface accelerate downward at $g = \dfrac{GM_\oplus}{R_\oplus^2} \approx 9.8$ m/s², gaining almost 10 m/s of speed each second.`,
    ],
    wrongChoices: {
      B: r`11.9 is not Earth's $g$; you may be thinking of the escape speed, 11.2 km/s.`,
      C: r`Twice the true value.`,
      D: r`32.2 is $g$ in **feet** per second squared, not metres.`,
    },
    takeaway: r`g ≈ 9.8 m/s² on Earth.`,
  },

  "iaac-2024-final-round-q6": {
    solution: [
      r`The CMB is a 2.7 K glow peaking at millimetre wavelengths, in the microwave part of the **radio** spectrum. It was discovered in 1965 with a radio horn antenna.`,
    ],
    wrongChoices: {
      A: r`X-rays are a billion times more energetic than CMB photons.`,
      B: r`Optical telescopes see visible light, thousands of times shorter in wavelength.`,
      C: r`Infrared telescopes come closer but the CMB peaks beyond the infrared, at about 1 mm.`,
    },
    takeaway: r`The CMB is observed with radio and microwave telescopes.`,
  },

  "iaac-2024-final-round-q7": {
    solution: [
      r`Rotational speed is $\omega r$, where $r$ is the distance from the spin axis. At the poles you stand **on** the axis, $r = 0$, so the speed is **zero**: you simply turn in place once a day.`,
    ],
    wrongChoices: {
      B: r`Half the equatorial speed occurs at latitude $60^\circ$, where $\cos 60^\circ = 0.5$.`,
      C: r`This is the speed at latitude $45^\circ$ ($1600 \times \cos 45^\circ$).`,
      D: r`This is the equatorial speed; at the poles it drops to nothing.`,
    },
    takeaway: r`Rotational speed is 1600 km/h × cos(latitude), zero at the poles.`,
  },

  "iaac-2024-final-round-q8": {
    solution: [
      r`Earth's rotation gives an eastward-launched rocket a free boost of up to 1,670 km/h, largest at the **equator** and shrinking as $\cos(\text{latitude})$. The site closest to the equator, **5° N**, gains the most. That is why Europe launches from French Guiana.`,
    ],
    wrongChoices: {
      B: r`$15^\circ$ S gets a slightly smaller boost than $5^\circ$ N ($\cos 15^\circ$ versus $\cos 5^\circ$).`,
      C: r`At $45^\circ$ the boost is only 71% of the equatorial value.`,
      D: r`At the pole there is no rotational boost at all.`,
    },
    takeaway: r`Launch sites near the equator get the biggest free boost from Earth's spin.`,
  },

  "iaac-2024-final-round-q9": {
    solution: [
      r`The ISS orbits at roughly **410 km** (it drifts between about 400 and 420 km and is periodically boosted).`,
    ],
    wrongChoices: {
      A: r`250 km is too low; atmospheric drag there would bring the station down within months.`,
      B: r`380 km is below the station's usual range.`,
      D: r`520 km is above the ISS but close to the Hubble Space Telescope's altitude.`,
    },
    takeaway: r`The ISS flies at about 400 to 420 km.`,
  },

  "iaac-2024-final-round-q10": {
    solution: [
      r`Even at 400 km there is a trace of atmosphere. **Collisions with those particles** create drag that slowly saps the station's orbital energy, so it sinks about 2 km a month and must be boosted regularly.`,
    ],
    wrongChoices: {
      A: r`Earth's rotation rate is almost constant and has no effect on an orbiting body.`,
      B: r`The solar wind's pressure is negligible compared with atmospheric drag at this altitude (though solar activity does puff up the atmosphere and increase drag).`,
      C: r`The Moon's pull is far too weak and does not steadily lower the orbit.`,
    },
    takeaway: r`Atmospheric drag slowly lowers low Earth orbits.`,
  },

  "iaac-2024-final-round-q11": {
    solution: [
      r`The **Kármán line**, at **100 km** altitude, is the conventional boundary of space: above it the air is too thin for wings to provide lift at any reasonable speed.`,
    ],
    wrongChoices: {
      A: r`50 km is the top of the stratosphere, where the US Air Force places its own (lower) boundary of 80 km.`,
      C: r`150 km is already well into orbital altitudes.`,
      D: r`200 km is a low orbit, not the boundary.`,
    },
    takeaway: r`Space conventionally starts at the 100 km Kármán line.`,
  },

  "iaac-2024-final-round-q12": {
    solution: [
      r`In the edge-on drawing the arrow points to the faint dotted region **outside** the solid disc, extending far beyond its edge. That sparse, extended envelope surrounding the whole Galaxy is the **galactic halo**, home to globular clusters, old stars and most of the dark matter.`,
    ],
    wrongChoices: {
      A: r`The bulge is the fat oval at the centre of the drawing, not the outer dotted region.`,
      B: r`The disc is the flat solid lens; the marked region lies beyond its edge.`,
      D: r`"Galactic continuum" is not a structural component of a galaxy.`,
    },
    takeaway: r`The halo is the sparse spheroidal region surrounding the disc and bulge.`,
  },

  "iaac-2024-final-round-q13": {
    solution: [
      r`The arrow points to the thick oval at the centre of the edge-on drawing: the **galactic bulge**, the dense central swarm of mostly old stars around the Galaxy's core.`,
    ],
    wrongChoices: {
      B: r`The disc is the thin flat lens extending out to either side, not the central oval.`,
      C: r`The halo is the faint dotted region surrounding everything, far from the centre.`,
      D: r`"Galactic continuum" is not a part of a galaxy.`,
    },
    takeaway: r`The bulge is the thick central oval of an edge-on galaxy.`,
  },

  "iaac-2024-final-round-q14": {
    solution: [
      r`When a distant source, a massive lensing galaxy and Earth line up exactly, the lens bends the source's light into a complete circle: an **Einstein ring**, the most symmetric case of **gravitational lensing**.`,
    ],
    wrongChoices: {
      A: r`Interference makes fringes in laboratory optics, not rings around galaxies.`,
      B: r`Magnetic fields do not bend light.`,
      D: r`Dust dims and reddens light; it does not focus it into rings.`,
    },
    takeaway: r`Einstein rings are gravitational lensing with perfect alignment.`,
  },

  "iaac-2024-final-round-q15": {
    solution: [
      r`The **initial mass function** describes **how many stars of each mass** are born in a star-forming event: lots of small stars, few massive ones (roughly $N \propto M^{-2.35}$ for the Salpeter IMF).`,
    ],
    wrongChoices: {
      A: r`How often star formation happens is the star-formation rate, not the IMF.`,
      B: r`Where stars sit in a cluster is its spatial structure, unrelated to the IMF.`,
      D: r`Composition is metallicity, a separate property.`,
    },
    takeaway: r`The IMF is the distribution of stellar masses at birth.`,
  },

  "iaac-2024-final-round-q16": {
    solution: [
      r`An **SED** plots how much energy an object emits at each **wavelength** (or frequency), showing at a glance whether it shines mostly in the ultraviolet, visible, infrared or radio.`,
    ],
    wrongChoices: {
      B: r`Energy versus distance would be a brightness profile, not a spectrum.`,
      C: r`Energy versus density is not a standard astronomical plot.`,
      D: r`Energy versus time is a **light curve**.`,
    },
    takeaway: r`SED = energy (or flux) versus wavelength.`,
  },

  "iaac-2024-final-round-q17": {
    solution: [
      r`**Io** is the innermost of **Jupiter**'s four Galilean moons, discovered by Galileo in 1610.`,
    ],
    wrongChoices: {
      A: r`Venus has no moons at all.`,
      C: r`Saturn's famous moons are Titan and Enceladus.`,
      D: r`Uranus's moons are named after Shakespeare characters, like Titania and Miranda.`,
    },
    takeaway: r`Io orbits Jupiter.`,
  },

  "iaac-2024-final-round-q18": {
    solution: [
      r`NASA's **Juno** has orbited Jupiter since 2016, studying its interior, magnetic field and moons on long, looping polar orbits.`,
    ],
    wrongChoices: {
      A: r`The Voyagers only flew past Jupiter in 1979 and are now leaving the Solar System.`,
      B: r`Cassini flew past Jupiter in 2000 on its way to Saturn, and ended its mission in 2017.`,
      C: r`New Horizons flew past Jupiter in 2007 en route to Pluto.`,
    },
    takeaway: r`Juno is the current Jupiter orbiter.`,
  },

  "iaac-2024-final-round-q19": {
    solution: [
      r`Juno's infrared mapping found that Io's **polar volcanoes are less energetic** than those near the equator, even though they are similarly numerous, a clue to how tidal heat is distributed inside the moon.`,
    ],
    wrongChoices: {
      B: r`The number of volcanoes per area is similar at the poles and equator; what differs is their power.`,
      C: r`Backwards: the equatorial volcanoes, not the polar ones, are the more energetic.`,
      D: r`The polar volcanoes are not more densely distributed.`,
    },
    takeaway: r`Io's polar volcanoes are as common as equatorial ones but weaker.`,
  },

  "iaac-2024-final-round-q20": {
    solution: [
      r`Juno's JIRAM instrument mapped Io's heat between 2017 and 2022 and catalogued **266** active volcanic hot spots.`,
    ],
    wrongChoices: {
      A: r`Far too few; Io is the most volcanic body known, with hundreds of active sites.`,
      B: r`Too few by a factor of five.`,
      C: r`Too few; the Juno count was about twice this.`,
    },
    takeaway: r`Juno counted 266 volcanic hot spots on Io.`,
  },

  "iaac-2024-final-round-q21": {
    solution: [
      r`Jupiter's gravity, combined with Io's slightly elliptical orbit, flexes the moon by tens of metres each orbit. This **tidal heating** melts its interior and powers its volcanoes.`,
    ],
    wrongChoices: {
      A: r`Sunlight at Jupiter is 27 times weaker than at Earth; it cannot melt rock.`,
      B: r`Impacts are rare and brief; they cannot sustain continuous volcanism.`,
      D: r`Mantle convection **moves** heat but does not create it; the source of Io's heat is tides.`,
    },
    takeaway: r`Io's volcanoes are powered by tidal heating from Jupiter.`,
  },

  "iaac-2024-final-round-q22": {
    solution: [
      r`Six Apollo landings (11, 12, 14, 15, 16 and 17) each put two astronauts on the surface: **12 people**, between 1969 and 1972.`,
    ],
    wrongChoices: {
      A: r`Eight would be only four landings; there were six.`,
      C: r`Too many; 24 people have **flown to** the Moon, but only 12 walked on it.`,
      D: r`Far too many; no one has landed since 1972.`,
    },
    takeaway: r`Twelve people have walked on the Moon.`,
  },

  "iaac-2024-final-round-q23": {
    solution: [
      r`**Venus** orbits inside Earth's orbit, so it never strays more than $47^\circ$ from the Sun in our sky. At midnight the Sun is far below the horizon, and Venus, always near it, is too.`,
    ],
    wrongChoices: {
      B: r`Mars, an outer planet, can be opposite the Sun and high at midnight.`,
      C: r`Jupiter is often brilliant at midnight near opposition.`,
      D: r`Uranus, far outside Earth's orbit, can be anywhere along the ecliptic, including opposite the Sun.`,
    },
    takeaway: r`Inner planets stay near the Sun and are never seen at midnight.`,
  },

  "iaac-2024-final-round-q24": {
    solution: [
      r`Schmidt, Cassegrain and Galilean are classic **telescope designs**: the Schmidt camera with its corrector plate, the Cassegrain reflector with a hole in its primary, and Galileo's original refractor.`,
    ],
    wrongChoices: {
      A: r`No spacecraft families carry these names.`,
      B: r`Comets are named after their discoverers, not these opticians.`,
      D: r`Wavelength bands are named after their position in the spectrum, not after people.`,
    },
    takeaway: r`Schmidt, Cassegrain and Galilean are telescope designs.`,
  },

  "iaac-2024-final-round-q25": {
    solution: [
      r`Most stars are cool red dwarfs at 3,000 K or less. Wien's law puts their peak emission near 1,000 nm, in the **infrared**, so that is where they radiate most of their energy.`,
    ],
    wrongChoices: {
      A: r`Ultraviolet peaks belong to stars hotter than 10,000 K, the rare O and B stars.`,
      B: r`Only stars around the Sun's temperature peak in the visible; most stars are cooler.`,
      C: r`No star peaks in the radio; that would need a temperature below a few kelvin.`,
    },
    takeaway: r`Cool red dwarfs, the most common stars, shine mainly in the infrared.`,
  },

  "iaac-2024-final-round-q26": {
    solution: [
      r`A Cepheid's pulsation period reveals its true luminosity; comparing that with its apparent brightness gives its **distance**. Hubble used them to prove Andromeda was a separate galaxy.`,
    ],
    wrongChoices: {
      A: r`Velocities come from Doppler shifts, not from Cepheid pulsations.`,
      C: r`Cepheid diameters can be estimated, but that is not why they matter.`,
      D: r`Composition is read from spectral lines, not from variability.`,
    },
    takeaway: r`Cepheids are standard candles for distance.`,
  },
};
