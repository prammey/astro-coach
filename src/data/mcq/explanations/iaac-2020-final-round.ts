import type { McqExplanationMap } from "./types";

// Teaching explanations for the IAAC 2020 Final Round questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "iaac-2020-final-round-q1": {
    solution: [
      r`One parsec is about 3.26 light-years, so $\dfrac{23}{3.26} \approx 7.1$: about **7 parsecs**.`,
    ],
    wrongChoices: {
      A: r`Six parsecs would be only about 19.6 light-years.`,
      C: r`Eight parsecs is about 26 light-years, a bit too far.`,
      D: r`Nine parsecs is about 29 light-years.`,
    },
    takeaway: r`Divide light-years by 3.26 to get parsecs.`,
  },

  "iaac-2020-final-round-q2": {
    solution: [
      r`**Ganymede** is the largest moon of Jupiter and of the whole Solar System, at 5,268 km across it is bigger than the planet Mercury.`,
    ],
    wrongChoices: {
      A: r`Io is about the size of our Moon (3,640 km), the third largest of the four.`,
      B: r`Europa is the **smallest** of the Galilean moons, at 3,120 km.`,
      D: r`Callisto is the second largest, at 4,820 km, a little smaller than Ganymede.`,
    },
    takeaway: r`Ganymede is the Solar System's largest moon.`,
  },

  "iaac-2020-final-round-q3": {
    solution: [
      r`**Cassini** orbited **Saturn** from 2004 to 2017, studying its rings and moons and dropping the Huygens probe onto Titan, before plunging into the planet's atmosphere.`,
    ],
    wrongChoices: {
      A: r`Comets were the targets of missions like Rosetta and Deep Impact, not Cassini.`,
      B: r`Jupiter was studied by Galileo and later Juno; Cassini only flew past it on the way to Saturn.`,
      D: r`Pluto was visited by New Horizons in 2015.`,
    },
    takeaway: r`Cassini was the Saturn orbiter.`,
  },

  "iaac-2020-final-round-q4": {
    solution: [
      r`Betelgeuse is a **red** supergiant with a surface temperature of only about 3,500 K, which gives it a distinctly reddish colour even to the naked eye.`,
    ],
    wrongChoices: {
      B: r`Orange describes K-type stars like Arcturus; Betelgeuse is cooler and redder.`,
      C: r`Blue stars are the hottest; Rigel, on the opposite side of Orion, is blue.`,
      D: r`White stars are around 10,000 K, like Sirius; Betelgeuse is far cooler.`,
    },
    takeaway: r`Betelgeuse is a red supergiant.`,
  },

  "iaac-2020-final-round-q5": {
    solution: [
      r`At 400 km altitude the ISS moves at 7.7 km/s around a 42,600 km circumference, taking about **90 minutes** per orbit: 16 sunrises a day for the crew.`,
    ],
    wrongChoices: {
      A: r`An hour would need a speed of about 12 km/s, above Earth's escape velocity.`,
      C: r`A two-hour orbit would be at about 1,700 km altitude, far higher than the ISS.`,
      D: r`A five-hour orbit would be about 10,000 km up.`,
    },
    takeaway: r`Low Earth orbit takes about 90 minutes.`,
  },

  "iaac-2020-final-round-q6": {
    solution: [
      r`The **Hyades** form the V-shaped face of **Taurus** the Bull, with orange Aldebaran appearing at one tip (though Aldebaran is actually much closer to us than the cluster).`,
    ],
    wrongChoices: {
      A: r`Sagittarius holds the galactic centre and many nebulae, but not the Hyades.`,
      B: r`Virgo is a spring constellation with no bright naked-eye cluster.`,
      C: r`Cancer contains the Beehive Cluster (M44), a different open cluster.`,
    },
    takeaway: r`The Hyades are the V of Taurus.`,
  },

  "iaac-2020-final-round-q7": {
    solution: [
      r`The Sun's radius is about 696,000 km, so its diameter is about **1.4 million km**, 109 times Earth's diameter.`,
    ],
    wrongChoices: {
      A: r`Too small; that is less than half the true value.`,
      B: r`Too small; 0.9 million km is under the Sun's real diameter of 1.39 million km.`,
      D: r`Too large; 1.9 million km would be 150 Earth diameters.`,
    },
    takeaway: r`The Sun is about 1.4 million km across.`,
  },

  "iaac-2020-final-round-q8": {
    solution: [
      r`Jupiter orbits at 5.2 AU, and Kepler's law gives $5.2^{3/2} \approx 11.9$ years: about **12 years**, one zodiac constellation per year.`,
    ],
    wrongChoices: {
      B: r`Too long; 15 years would put Jupiter at about 6.1 AU.`,
      C: r`Too long; 18 years corresponds to about 6.9 AU.`,
      D: r`Too long; 23 years is closer to a planet at 8 AU.`,
    },
    takeaway: r`Jupiter's year is about 12 Earth years.`,
  },

  "iaac-2020-final-round-q9": {
    solution: [
      r`Measurements of the Hubble constant cluster around **70 km/s per Mpc** (67 to 73 depending on the method): every megaparsec of distance adds about 70 km/s of recession speed.`,
    ],
    wrongChoices: {
      A: r`Too small by half; this would make the universe nearly 28 billion years old.`,
      C: r`Too large; this would make the universe only about 8 billion years old, younger than its oldest stars.`,
      D: r`Far too large; no modern measurement is anywhere near this.`,
    },
    takeaway: r`H₀ ≈ 70 km/s/Mpc.`,
  },

  "iaac-2020-final-round-q10": {
    solution: [
      r`GW150914 was detected in September 2015 by the two **LIGO** observatories, each an L-shaped interferometer with **4 km** arms.`,
    ],
    wrongChoices: {
      B: r`LIGO's arms are 4 km; no gravitational-wave detector has 6 km arms.`,
      C: r`8 km is longer than any existing detector arm.`,
      D: r`The planned Einstein Telescope would have 10 km arms, but it does not exist yet.`,
    },
    takeaway: r`LIGO's interferometers have 4 km arms.`,
  },

  "iaac-2020-final-round-q11": {
    solution: [
      r`The **Event Horizon Telescope** observes at **1.3 mm** (230 GHz), a wavelength that penetrates the gas around black holes and gives the array Earth-sized resolution.`,
    ],
    wrongChoices: {
      A: r`0.87 mm is a planned future EHT band, not the wavelength of the famous images.`,
      C: r`1.7 mm is not an EHT observing band.`,
      D: r`1.9 mm is not an EHT observing band.`,
    },
    takeaway: r`The EHT images black holes at 1.3 mm.`,
  },

  "iaac-2020-final-round-q12": {
    solution: [
      r`Infrared runs from about 0.7 µm to 1 mm. At **100 µm** we are in the far-infrared, the band where cold dust glows.`,
    ],
    wrongChoices: {
      A: r`Ultraviolet is far shorter, under 0.4 µm.`,
      C: r`Visible light spans only 0.38 to 0.74 µm.`,
      D: r`Radio waves start at wavelengths of about a millimetre and longer.`,
    },
    takeaway: r`100 µm is far-infrared.`,
  },

  "iaac-2020-final-round-q13": {
    solution: [
      r`A satellite that orbits once per sidereal day sits at 42,164 km from Earth's centre, which is about **36,000 km** (35,786 km) above the surface.`,
    ],
    wrongChoices: {
      A: r`Too low; a satellite at 26,000 km altitude orbits in about 15 hours.`,
      C: r`Too high; at 46,000 km the period would be about 31 hours.`,
      D: r`Too high; at 56,000 km the period is about 40 hours.`,
    },
    takeaway: r`Geostationary orbit is about 36,000 km up.`,
  },

  "iaac-2020-final-round-q14": {
    solution: [
      r`Voyager 1, launched in 1977 and now in interstellar space, is receding from the Sun at about **17 km/s**, roughly 3.6 AU per year.`,
    ],
    wrongChoices: {
      B: r`A little too fast; Voyager 1's heliocentric speed is about 17 km/s.`,
      C: r`Too fast; no spacecraft is leaving the Sun this quickly.`,
      D: r`Too fast; 28 km/s is close to Earth's own orbital speed.`,
    },
    takeaway: r`Voyager 1 leaves the Sun at about 17 km/s.`,
  },

  "iaac-2020-final-round-q15": {
    solution: [
      r`Clyde Tombaugh discovered Pluto in **1930** at Lowell Observatory by comparing photographic plates.`,
    ],
    wrongChoices: {
      A: r`1630 is the era of Galileo; Pluto is far too faint for early telescopes.`,
      B: r`Uranus was not even found until 1781; 1730 is much too early.`,
      C: r`Neptune was discovered in 1846; Pluto came almost a century later.`,
    },
    takeaway: r`Pluto was discovered in 1930.`,
  },

  "iaac-2020-final-round-q16": {
    solution: [
      r`Earth's mass is $5.97 \times 10^{24}$ kg and the Moon's is $7.35 \times 10^{22}$ kg, a ratio of about 81: **80 times**.`,
    ],
    wrongChoices: {
      A: r`Too small; the Moon is far lighter than a fifteenth of Earth.`,
      B: r`Too small; the true ratio is about 81.`,
      C: r`Too small; 50 would make the Moon heavier than it is.`,
    },
    takeaway: r`Earth is about 81 times as massive as the Moon.`,
  },

  "iaac-2020-final-round-q17": {
    solution: [
      r`The **barycentre** is the **centre of mass** of two or more bodies orbiting each other, the point they all circle. For the Earth-Moon system it lies inside Earth, 4,700 km from the centre.`,
    ],
    wrongChoices: {
      A: r`Gravitational potential is never zero between masses; the barycentre is about mass, not potential.`,
      C: r`A spin axis is a line, not a point shared by orbiting bodies.`,
      D: r`Precession describes a wobbling axis, unrelated to the barycentre.`,
    },
    takeaway: r`The barycentre is the shared centre of mass that orbiting bodies circle.`,
  },

  "iaac-2020-final-round-q18": {
    solution: [
      r`Two orbiting bodies have **five** Lagrange points: $L_1$, $L_2$ and $L_3$ along the line joining them, and $L_4$ and $L_5$ at the corners of equilateral triangles.`,
    ],
    wrongChoices: {
      A: r`Three is only the number of points on the line between the bodies; two more sit off the line.`,
      C: r`There are five, not eight.`,
      D: r`There are five, not sixteen.`,
    },
    takeaway: r`Every two-body system has five Lagrange points.`,
  },

  "iaac-2020-final-round-q19": {
    solution: [
      r`**Axial precession** is the slow change in the **direction** the spin axis points, like a wobbling top. Earth's axis traces a circle every 26,000 years, changing which star is the pole star.`,
    ],
    wrongChoices: {
      A: r`Precession is not a change in spin rate; Earth's rotation speed is almost constant.`,
      B: r`The angular momentum's size stays essentially the same; only its direction turns.`,
      D: r`Torque **causes** precession (from the Sun and Moon pulling on Earth's bulge), but precession itself is the changing orientation.`,
    },
    takeaway: r`Precession is the slow turning of the spin axis's direction.`,
  },

  "iaac-2020-final-round-q20": {
    solution: [
      r`**Syzygy** (from Greek for "yoked together") is the general term for three celestial bodies in a straight line, as at new and full Moon.`,
    ],
    wrongChoices: {
      A: r`A conjunction is two objects close together in the sky, not necessarily a three-body alignment.`,
      B: r`An eclipse is one **consequence** of a syzygy, when one body's shadow falls on another.`,
      C: r`A transit is a small body crossing in front of a larger one, again a special case rather than the general term.`,
    },
    takeaway: r`Syzygy is the word for three bodies in a line.`,
  },

  "iaac-2020-final-round-q21": {
    solution: [
      r`Orbits around the Sun use "helion": **aphelion** is the farthest point, perihelion the nearest. Orbits around Earth use "gee": apogee and perigee.`,
    ],
    wrongChoices: {
      B: r`Perihelion is the **nearest** point to the Sun.`,
      C: r`Apogee is the farthest point from **Earth**, used for the Moon and satellites.`,
      D: r`Perigee is the nearest point to Earth.`,
    },
    takeaway: r`Aphelion = farthest from the Sun; apogee = farthest from Earth.`,
  },

  "iaac-2020-final-round-q22": {
    solution: [
      r`The **synodic month** is the cycle of lunar phases, from one full Moon to the next: 29.5 days. It is longer than the 27.3-day sidereal orbit because Earth moves around the Sun meanwhile.`,
    ],
    wrongChoices: {
      B: r`Venus's cycle of appearances is its synodic **period**, 584 days, not a month.`,
      C: r`A twelfth of a year is a calendar month, about 30.4 days, not defined by the Moon.`,
      D: r`One rotation relative to the Sun is a solar **day**.`,
    },
    takeaway: r`The synodic month is the 29.5-day phase cycle of the Moon.`,
  },

  "iaac-2020-final-round-q23": {
    solution: [
      r`**Hale-Bopp** was the great **comet** of 1997, visible to the naked eye for a record 18 months.`,
    ],
    wrongChoices: {
      A: r`Dwarf planets have names like Pluto, Ceres and Eris, not double surnames.`,
      B: r`A meteor is a momentary streak in the sky, not something that stays visible for months.`,
      C: r`Asteroids are rocky bodies without tails; Hale-Bopp sported two spectacular tails.`,
    },
    takeaway: r`Hale-Bopp was the great comet of 1997.`,
  },

  "iaac-2020-final-round-q24": {
    solution: [
      r`**Olbers' paradox** asks: if the universe were infinite, eternal and full of stars, every line of sight would end on a star and the night sky would blaze. So **why is the night sky dark?** The answer: the universe has a finite age and is expanding.`,
    ],
    wrongChoices: {
      A: r`Infinite size is one of the paradox's assumptions, not the question it asks.`,
      B: r`Infinite age is another assumption; the paradox's resolution is that the universe is **not** infinitely old.`,
      C: r`"Are we alone?" is the question behind the Drake equation and the Fermi paradox.`,
    },
    takeaway: r`Olbers' paradox: the dark night sky shows the universe is neither infinitely old nor static.`,
  },

  "iaac-2020-final-round-q25": {
    solution: [
      r`The picture shows a loose, face-on spiral with ragged arms studded with pink star-forming regions: the **Triangulum Galaxy** (M33), the third-largest member of the Local Group at 2.7 million light-years.`,
    ],
    wrongChoices: {
      A: r`The Pinwheel Galaxy (M101) is a grand-design spiral with long, well-defined arms, and it is 21 million light-years away, not "very close".`,
      B: r`The Whirlpool Galaxy (M51) has a small companion galaxy attached to one arm, absent here.`,
      C: r`Bode's Galaxy (M81) has a large, bright bulge and smooth arms, unlike this ragged spiral.`,
    },
    takeaway: r`M33, the Triangulum Galaxy, is the loose nearby spiral with prominent pink H II regions.`,
  },

  "iaac-2020-final-round-q26": {
    solution: [
      r`A "shooting star" is a **meteor**: the streak of light made by a small particle burning up in the atmosphere. In space the particle is a meteoroid; if it reaches the ground it is a meteorite.`,
    ],
    wrongChoices: {
      A: r`An asteroid is a large rocky body in orbit around the Sun, not a streak of light.`,
      B: r`A meteoroid is the particle **before** it enters the atmosphere.`,
      D: r`A comet is an icy body with a tail, visible for weeks; it does not flash across the sky.`,
    },
    takeaway: r`Meteoroid in space, meteor in the sky, meteorite on the ground.`,
  },

  "iaac-2020-final-round-q27": {
    solution: [
      r`Measurements of the cosmic microwave background give an age of **13.8 billion years** for the universe.`,
    ],
    wrongChoices: {
      A: r`Too young; some stars are older than 12 billion years.`,
      B: r`Too young by a billion years.`,
      D: r`Too old; the accepted value is 13.8 billion years.`,
    },
    takeaway: r`The universe is about 13.8 billion years old.`,
  },

  "iaac-2020-final-round-q28": {
    solution: [
      r`The Sun is too light to explode. After its red-giant phase it will puff off its outer layers as a planetary nebula and leave its core behind as a slowly cooling **white dwarf**.`,
    ],
    wrongChoices: {
      B: r`A brown dwarf is a failed star that never fused hydrogen; it is a starting point, not an ending.`,
      C: r`Supernovae need at least about 8 solar masses (or a white dwarf in a binary).`,
      D: r`Neutron stars and black holes come from massive-star supernovae, not from Sun-like stars.`,
    },
    takeaway: r`The Sun will end as a white dwarf.`,
  },

  "iaac-2020-final-round-q29": {
    solution: [
      r`The Sun orbits the galactic centre at a distance of about 8 kpc, which is roughly **26,000 to 27,000 light-years**, about halfway out through the disc.`,
    ],
    wrongChoices: {
      A: r`Too close; 12,000 light-years is less than half the true distance.`,
      B: r`Too close; the accepted distance is about 26,000 light-years.`,
      C: r`Too close; the Sun is about 8 kpc, not 6.5 kpc, from the centre.`,
    },
    takeaway: r`The Sun is about 26,000 light-years (8 kpc) from the galactic centre.`,
  },

  "iaac-2020-final-round-q30": {
    solution: [
      r`From hottest to coolest the spectral classes run **O, B, A, F, G, K, M**, remembered by "Oh Be A Fine Girl/Guy, Kiss Me". O stars are blue and over 30,000 K; M stars are red and under 3,700 K.`,
    ],
    wrongChoices: {
      A: r`A and B are swapped; B stars are hotter than A stars.`,
      C: r`M stars are the **coolest**, so they belong at the end, not the start.`,
      D: r`M is misplaced at the start, and B should come before A.`,
    },
    takeaway: r`OBAFGKM runs from hottest to coolest.`,
  },

  "iaac-2020-final-round-q31": {
    solution: [
      r`The **second cosmic velocity** is the escape velocity from Earth, 11.2 km/s. A rocket at that speed **escapes Earth's gravity** but stays bound to the Sun; leaving the Solar System (the third cosmic velocity) needs 16.6 km/s from Earth.`,
    ],
    wrongChoices: {
      A: r`A stable circular orbit needs only the **first** cosmic velocity, 7.9 km/s.`,
      B: r`Speeds between the first and second cosmic velocities give elliptical orbits; at the second, the orbit is a parabola that never returns.`,
      D: r`Escaping the Sun needs the **third** cosmic velocity, higher still.`,
    },
    takeaway: r`First cosmic velocity orbits Earth, second escapes Earth, third escapes the Sun.`,
  },

  "iaac-2020-final-round-q32": {
    solution: [
      r`The observable universe has a radius of about 46 billion light-years, so its diameter is about 93 billion light-years, which is $93/3.26 \approx$ **29 billion parsecs**.`,
    ],
    wrongChoices: {
      A: r`13 billion is roughly the universe's age in years and the light-travel distance in light-years, but expansion has carried the edge much farther, and this is not in parsecs.`,
      C: r`Too large; 36 billion pc would be about 117 billion light-years.`,
      D: r`Too large; 55 billion pc would be 180 billion light-years.`,
    },
    takeaway: r`The observable universe is about 93 billion light-years, or 29 Gpc, across.`,
  },

  "iaac-2020-final-round-q33": {
    solution: [
      r`**Olympus Mons** on **Mars** is the largest volcano in the Solar System, 22 km high and 600 km across, nearly three times the height of Everest.`,
    ],
    wrongChoices: {
      B: r`Venus has many volcanoes (Maat Mons is the biggest) but not Olympus Mons.`,
      C: r`Io is the most volcanically active body, but its volcanoes have other names, like Loki and Pele.`,
      D: r`Europa is an icy moon with no volcanoes at all.`,
    },
    takeaway: r`Olympus Mons is the giant Martian volcano.`,
  },

  "iaac-2020-final-round-q34": {
    solution: [
      r`A Martian day, or **sol**, lasts 24 hours 39 minutes, only about 3% longer than an Earth day: roughly **1 day**.`,
    ],
    wrongChoices: {
      B: r`Too long; Mars's rotation is very close to Earth's.`,
      C: r`Too long by nearly a factor of two.`,
      D: r`Far too long; Mars spins almost as fast as Earth.`,
    },
    takeaway: r`A Martian sol is about 24 h 40 min.`,
  },

  "iaac-2020-final-round-q35": {
    solution: [
      r`Aurorae form 100 to 300 km up, where charged particles from the Sun excite atmospheric atoms. That altitude is the **ionosphere** (the lower thermosphere).`,
    ],
    wrongChoices: {
      B: r`The stratosphere (10 to 50 km) is far too low; aurorae glow well above it.`,
      C: r`The troposphere is the lowest layer, where weather happens, under 15 km.`,
      D: r`The exosphere, above 500 km, is too thin to produce the glow.`,
    },
    takeaway: r`Aurorae light up the ionosphere, 100 to 300 km high.`,
  },

  "iaac-2020-final-round-q36": {
    solution: [
      r`Apollo 11 landed Neil Armstrong and Buzz Aldrin on the Moon on 20 July **1969**.`,
    ],
    wrongChoices: {
      B: r`1986 was the year of the Challenger disaster, long after the Moon landings.`,
      C: r`In 1968 Apollo 8 orbited the Moon but did not land.`,
      D: r`By 1976 the Apollo programme had already ended (the last landing was 1972).`,
    },
    takeaway: r`The first Moon landing was in 1969.`,
  },

  "iaac-2020-final-round-q37": {
    solution: [
      r`"Helios" is Greek for the Sun, so **heliocentric** means **centred on the Sun**, the model Copernicus proposed.`,
    ],
    wrongChoices: {
      A: r`Earth-centred is **geocentric**, the old Ptolemaic model.`,
      B: r`There is no standard term for Venus-centred.`,
      D: r`Heliocentric refers specifically to the Sun, not the Solar System as a whole.`,
    },
    takeaway: r`Helio = Sun, geo = Earth.`,
  },

  "iaac-2020-final-round-q38": {
    solution: [
      r`At $-180\ ^\circ$C, Titan is cold enough for **methane and ethane** to be liquid. They fill lakes and seas near its poles, discovered by Cassini's radar.`,
    ],
    wrongChoices: {
      A: r`Oxygen and nitrogen would be gases at Titan's temperature, and Titan has no free oxygen.`,
      B: r`Nitrogen is the main gas of Titan's **atmosphere**, not its lakes.`,
      D: r`Nitrogen stays gaseous on Titan; it is the air, not the liquid.`,
    },
    takeaway: r`Titan's lakes are liquid methane and ethane.`,
  },

  "iaac-2020-final-round-q39": {
    solution: [
      r`**Copernicus** is a 93 km impact **crater** on the Moon's near side, famous for its bright rays that fan out across the surface.`,
    ],
    wrongChoices: {
      A: r`Lunar mountain ranges are named after Earth's (Apennines, Alps), not after people.`,
      B: r`Lunar seas (maria) have Latin names like Mare Tranquillitatis, not people's names.`,
      D: r`The Apollo landing sites were in the maria; none was at Copernicus.`,
    },
    takeaway: r`Copernicus is a bright-rayed lunar crater.`,
  },

  "iaac-2020-final-round-q40": {
    solution: [
      r`The Orion Nebula glows because hot young stars at its centre ionise the surrounding gas, which re-emits the energy as light: an **emission nebula** (an H II region).`,
    ],
    wrongChoices: {
      A: r`A planetary nebula is a dying star's shell; Orion is a star **nursery**.`,
      B: r`A dark nebula is a dust cloud seen in silhouette, like the Horsehead nearby.`,
      C: r`"Absorption nebula" is another term for a dark nebula, which blocks light rather than emitting it.`,
    },
    takeaway: r`The Orion Nebula is an emission nebula lit by newborn stars.`,
  },

  "iaac-2020-final-round-q41": {
    solution: [
      r`The Sun's yearly path across the sky is the **ecliptic**, the projection of Earth's orbital plane.`,
    ],
    wrongChoices: {
      A: r`An equinox is a **moment**, when the Sun crosses the celestial equator, not a path.`,
      C: r`Epicycles were the little circles of ancient planet models, not the Sun's path.`,
      D: r`The celestial equator is Earth's equator projected onto the sky; the Sun crosses it only twice a year.`,
    },
    takeaway: r`The ecliptic is the Sun's annual path.`,
  },

  "iaac-2020-final-round-q42": {
    solution: [
      r`A magnetic field splits a spectral line into several closely spaced components: the **Zeeman effect**, used to measure the magnetic fields of sunspots and stars.`,
    ],
    wrongChoices: {
      A: r`Planck's name goes with blackbody radiation and the quantum, not line splitting.`,
      B: r`There is no "Russell effect"; Russell co-created the HR diagram.`,
      C: r`Rayleigh scattering makes the sky blue; there is no "Raylight effect".`,
    },
    takeaway: r`Magnetic line splitting is the Zeeman effect.`,
  },

  "iaac-2020-final-round-q43": {
    solution: [
      r`The cosmic background radiation is a 2.7 K blackbody that peaks at about 1 mm: **microwave** wavelengths, hence its name, the cosmic **microwave** background.`,
    ],
    wrongChoices: {
      A: r`Infrared is shorter than a millimetre; the CMB peak is just beyond the far-infrared, in the microwave band.`,
      B: r`Gamma rays are the most energetic light; the CMB is the coldest, least energetic glow in the universe.`,
      C: r`Ultraviolet would need a source of tens of thousands of kelvin, not 2.7 K.`,
    },
    takeaway: r`The CMB peaks in microwaves at about 1 mm.`,
  },

  "iaac-2020-final-round-q44": {
    solution: [
      r`Kepler's third law: the **square of the orbital period** is proportional to the cube of the semi-major axis, $P^2 \propto a^3$.`,
    ],
    wrongChoices: {
      A: r`The semi-major axis **is** the average distance; this would just relate $a$ to itself.`,
      B: r`Swept area appears in the **second** law (equal areas in equal times).`,
      C: r`Again, this compares the semi-major axis with itself.`,
    },
    takeaway: r`Kepler III: P² ∝ a³.`,
  },

  "iaac-2020-final-round-q45": {
    solution: [
      r`The **heliopause** is where the solar wind's pressure is finally balanced by the interstellar medium: the outer edge of the Sun's magnetic bubble. Voyager 1 crossed it in 2012, at 122 AU.`,
    ],
    wrongChoices: {
      B: r`The heliosheath is the turbulent region just **inside** the heliopause.`,
      C: r`The heliotail is the bubble's elongated downstream extension, not its boundary.`,
      D: r`The termination shock is where the solar wind first slows to subsonic speed, well inside the heliopause.`,
    },
    takeaway: r`The heliopause is the boundary of the heliosphere.`,
  },

  "iaac-2020-final-round-q46": {
    solution: [
      r`**Elongation** is the angle between a planet and the Sun as seen from Earth. Mercury and Venus, the inferior planets, never get far from the Sun; their greatest elongations are 28° and 47°.`,
    ],
    wrongChoices: {
      A: r`Inclination is the tilt of an orbit relative to the ecliptic.`,
      B: r`Declination is a sky coordinate, the equivalent of latitude.`,
      C: r`The ecliptic is the Sun's path, not an angle.`,
    },
    takeaway: r`Elongation is a planet's angular distance from the Sun.`,
  },

  "iaac-2020-final-round-q47": {
    solution: [
      r`The northern summer solstice is around 21 **June**; six months later, around 21 **December**, the southern hemisphere has its summer solstice.`,
    ],
    wrongChoices: {
      A: r`November is too early for the southern solstice; the Sun reaches its southernmost point in December.`,
      B: r`Both are off: the solstices are in June and December.`,
      D: r`The northern solstice is in June, not July.`,
    },
    takeaway: r`Solstices fall in June and December.`,
  },

  "iaac-2020-final-round-q48": {
    solution: [
      r`**Absolute magnitude** is how bright a star would appear from a standard distance of **10 parsecs** (32.6 light-years), which puts all stars on an equal footing.`,
    ],
    wrongChoices: {
      A: r`The standard distance is 10 pc, not 5.`,
      C: r`The standard distance is 10 pc, not 15.`,
      D: r`The standard distance is 10 pc, not 20.`,
    },
    takeaway: r`Absolute magnitude is apparent magnitude at 10 pc.`,
  },

  "iaac-2020-final-round-q49": {
    solution: [
      r`The **photosphere** ("sphere of light") is the thin layer where the Sun's gas becomes transparent, the visible surface we see, at about 5,800 K.`,
    ],
    wrongChoices: {
      A: r`The radiative zone is deep inside the Sun, hidden beneath the convective zone.`,
      B: r`The heliosphere is the enormous bubble of solar wind extending far beyond Pluto.`,
      D: r`The tachocline is the thin internal boundary between the radiative and convective zones.`,
    },
    takeaway: r`The photosphere is the Sun's visible surface.`,
  },

  "iaac-2020-final-round-q50": {
    solution: [
      r`Earth reflects about **30%** of incoming sunlight back to space, mostly from clouds, ice and snow: an albedo of about 0.30.`,
    ],
    wrongChoices: {
      A: r`Too low; this is closer to the albedo of the Moon's bright highlands.`,
      B: r`Slightly too low; the accepted planetary albedo is about 0.30.`,
      D: r`Too high; that would make Earth noticeably cooler.`,
    },
    takeaway: r`Earth's albedo is about 0.30.`,
  },
};
