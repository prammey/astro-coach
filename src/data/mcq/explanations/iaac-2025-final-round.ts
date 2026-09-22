import type { McqExplanationMap } from "./types";

// Teaching explanations for the IAAC 2025 Final Round questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "iaac-2025-final-round-q1": {
    solution: [
      r`The drawing shows light entering an open tube, hitting a curved **mirror** at the back, bouncing to a small tilted flat mirror, and leaving through an eyepiece on the **side** of the tube. Mirrors make it a **reflector**, and the side eyepiece with a 45° flat makes it the **Newtonian** design.`,
    ],
    wrongChoices: {
      A: r`A refractor uses a lens, not a mirror; "Newtonian refractor" is a contradiction.`,
      B: r`Again, refractors have no mirrors, and a Cassegrain is a mirror design.`,
      D: r`A Cassegrain reflector bounces light off a convex secondary back through a hole in the primary, with the eyepiece at the **rear**, not the side.`,
    },
    takeaway: r`Curved primary mirror plus a 45° flat and a side eyepiece = Newtonian reflector.`,
  },

  "iaac-2025-final-round-q2": {
    solution: [
      r`Here light enters through a **lens** at the front of the tube and is brought to a focus at the back, where the eyepiece sits in line with the tube. A telescope that gathers light with a lens is a **refractor**.`,
    ],
    wrongChoices: {
      B: r`A reflector uses a mirror at the back of the tube; this drawing shows a lens at the front.`,
      C: r`A Newtonian is a mirror telescope with the eyepiece on the side.`,
      D: r`A Cassegrain is a mirror telescope with a secondary mirror sending light back through the primary.`,
    },
    takeaway: r`Lens at the front, eyepiece straight through at the back = refractor.`,
  },

  "iaac-2025-final-round-q3": {
    solution: [
      r`The Sun's radius is about 700,000 km, so its diameter is about **1,400,000 km**, 109 Earths side by side.`,
    ],
    wrongChoices: {
      A: r`1,400 km is smaller than the Moon's radius.`,
      C: r`1.4 billion km is about the radius of Saturn's orbit.`,
      D: r`1.4 trillion km is nearly a tenth of a light-year.`,
    },
    takeaway: r`The Sun is 1.4 million km across.`,
  },

  "iaac-2025-final-round-q4": {
    solution: [
      r`The nearest star to the Sun is Proxima Centauri, **4.25 light-years** away: light from it takes over four years to reach us.`,
    ],
    wrongChoices: {
      B: r`14 light-years would include dozens of stars; the nearest is much closer.`,
      C: r`140 light-years is the distance of the Pleiades' neighbourhood, hundreds of stars away.`,
      D: r`1,400 light-years is the distance of the Orion Nebula.`,
    },
    takeaway: r`Proxima Centauri is 4.25 light-years away.`,
  },

  "iaac-2025-final-round-q5": {
    solution: [
      r`The Sun's diameter is about 109 times Earth's, so on a scale where the Sun is 22 cm, Earth is $\dfrac{22}{109} \approx 0.2$ cm: a 2 mm bead next to a football.`,
    ],
    wrongChoices: {
      A: r`A hundred times too small; Earth is not 10,000 times smaller than the Sun.`,
      B: r`Ten times too small.`,
      D: r`Ten times too large; Earth would then be only 11 times smaller than the Sun.`,
    },
    takeaway: r`The Sun is 109 Earth diameters across.`,
  },

  "iaac-2025-final-round-q6": {
    solution: [
      r`One AU is the average Earth-Sun distance, about 150 million km, which is $1.5 \times 10^8$ km.`,
    ],
    wrongChoices: {
      B: r`Ten times too far; 1.5 billion km is about Saturn's distance from the Sun.`,
      C: r`A hundred times too far.`,
      D: r`This is the AU in **metres**, not kilometres.`,
    },
    takeaway: r`1 AU = 1.5 × 10⁸ km = 1.5 × 10¹¹ m.`,
  },

  "iaac-2025-final-round-q7": {
    solution: [
      r`Earth's mean density is about 5.5 times that of water. Water is 1,000 kg/m³, so Earth is about **5,500 kg/m³** (5.5 g/cm³).`,
    ],
    wrongChoices: {
      A: r`5,500 g/cm³ would be 5.5 million kg/m³, denser than anything except white-dwarf matter.`,
      B: r`5,500 g/m³ is 5.5 kg/m³, about four times denser than air, far too light.`,
      C: r`5,500 kg/cm³ is absurdly dense, comparable to a neutron star.`,
    },
    takeaway: r`Earth's density is 5,500 kg/m³, or 5.5 g/cm³.`,
  },

  "iaac-2025-final-round-q8": {
    solution: [
      r`The force on the object is $F = \dfrac{GMm}{R^2}$; dividing by its mass $m$ gives the acceleration $g = \dfrac{GM}{R^2}$, independent of the object's own mass, which is why everything falls at the same rate.`,
    ],
    wrongChoices: {
      A: r`This has the wrong power of $R$ and includes $m$; it is neither a force nor an acceleration.`,
      B: r`This is the **force** on the object, not the acceleration; divide by $m$.`,
      C: r`$GM/R$ has units of velocity squared (it is related to escape speed), not acceleration.`,
    },
    takeaway: r`Surface gravity g = GM/R², the same for every falling object.`,
  },

  "iaac-2025-final-round-q9": {
    solution: [
      r`The Hubble parameter is the fractional expansion rate of the universe: $H(t) = \dfrac{\dot a}{a}$, the rate of change of the scale factor divided by the scale factor.`,
    ],
    wrongChoices: {
      B: r`This is the inverse of the Hubble parameter, a time (the Hubble time).`,
      C: r`An extra power of $a$ in the denominator gives the wrong dimensions and is not the definition.`,
      D: r`Not the definition; $H$ is $\dot a$ over $a$, not the other way round with squares.`,
    },
    takeaway: r`H = ȧ/a.`,
  },

  "iaac-2025-final-round-q10": {
    solution: [
      r`Hubble's law $v = H_0 d$ gives a speed (km/s) per unit distance (Mpc), so $H_0$ is quoted in **(km/s)/Mpc**, e.g. 70 km/s per megaparsec.`,
    ],
    wrongChoices: {
      A: r`(km/Mpc)/s is dimensionally the same but not the conventional grouping; the standard is speed per distance.`,
      B: r`km/(Mpc/s) has units of time, not a rate.`,
      C: r`km/(s/Mpc) is km·Mpc/s, not a rate per distance.`,
    },
    takeaway: r`H₀ is in km/s per Mpc.`,
  },

  "iaac-2025-final-round-q11": {
    solution: [
      r`Measurements of the cosmic microwave background put the age of the universe at **13.7 to 13.8 billion years**.`,
    ],
    wrongChoices: {
      A: r`Too young by a billion years; some stars are older than 12.7 billion years.`,
      C: r`Too old by a billion years.`,
      D: r`Too old by two billion years.`,
    },
    takeaway: r`The universe is about 13.8 billion years old.`,
  },

  "iaac-2025-final-round-q12": {
    solution: [
      r`A comet's nucleus is a "dirty snowball" of **ice** (water, CO₂, CO) mixed with **dust** and rocky grains. When it nears the Sun the ice turns to gas and carries the dust off into the tails.`,
    ],
    wrongChoices: {
      A: r`Nickel and iron are the stuff of metallic asteroids and planetary cores.`,
      B: r`Hydrogen and helium gas cannot be held by a tiny comet; they make up the giant planets and stars.`,
      C: r`Rock and dust alone describe an asteroid; a comet's defining ingredient is ice.`,
    },
    takeaway: r`Comets are ice plus dust.`,
  },

  "iaac-2025-final-round-q13": {
    solution: [
      r`A comet grows two tails: a curved, yellowish **dust** tail pushed by sunlight, and a straight, bluish **ion (plasma)** tail of ionised gas swept back by the solar wind.`,
    ],
    wrongChoices: {
      A: r`Liquid water cannot exist in the vacuum of space; ice goes straight to gas.`,
      B: r`Helium and metal vapour are not significant comet ingredients.`,
      C: r`Ice blocks stay in the nucleus, and magnetic fields are not a tail material.`,
    },
    takeaway: r`Dust tail and ion tail.`,
  },

  "iaac-2025-final-round-q14": {
    solution: [
      r`Gravity follows an inverse-square law, $F \propto 1/r^2$. Doubling the distance divides the force by $2^2 = 4$: **one quarter** as strong.`,
    ],
    wrongChoices: {
      A: r`Gravity weakens with distance; it cannot get stronger.`,
      B: r`Four times stronger is backwards.`,
      C: r`Half would be an inverse-**linear** law; gravity is inverse-square.`,
    },
    takeaway: r`Double the distance, quarter the force.`,
  },

  "iaac-2025-final-round-q15": {
    solution: [
      r`Cepheids pulsate with a period tied to their luminosity. Knowing the true luminosity from the period, astronomers compare it with the apparent brightness to get the **distance**.`,
    ],
    wrongChoices: {
      A: r`Chemical composition comes from spectra, not from pulsation periods.`,
      B: r`Cepheid masses can be modelled but are not what they are famous for measuring.`,
      D: r`Luminosity is the intermediate step; the goal is distance.`,
    },
    takeaway: r`Cepheids are distance markers.`,
  },

  "iaac-2025-final-round-q16": {
    solution: [
      r`The period-luminosity relation says **longer period, brighter star**. A 30-day Cepheid is several times more luminous than a 6-day one.`,
    ],
    wrongChoices: {
      B: r`Backwards: longer periods go with **higher** luminosity.`,
      C: r`If all Cepheids had the same brightness their periods would be useless as distance tools.`,
      D: r`Colour is not what the relation predicts; luminosity is.`,
    },
    takeaway: r`Longer-period Cepheids are more luminous.`,
  },

  "iaac-2025-final-round-q17": {
    solution: [
      r`The distance modulus is the difference between **apparent** and **absolute** magnitude, $m - M = 5\log_{10}(d/10\ \text{pc})$, and it encodes the distance.`,
    ],
    wrongChoices: {
      A: r`Luminosity and temperature are linked by the Stefan-Boltzmann law and the HR diagram, not the distance modulus.`,
      B: r`Period and brightness is the Cepheid relation.`,
      C: r`Mass and radius are related through stellar structure, not the distance modulus.`,
    },
    takeaway: r`Distance modulus = m − M.`,
  },

  "iaac-2025-final-round-q18": {
    solution: [
      r`$m = M + 5\log_{10}\!\left(\dfrac{d}{10}\right) = -2.0 + 5\log_{10}(100) = -2.0 + 5 \times 2 = 8.0$.`,
    ],
    wrongChoices: {
      A: r`This adds only 5; at 1000 pc the distance modulus is 10, since $1000/10 = 100 = 10^2$.`,
      B: r`Not from the formula; $5\log_{10}(100) = 10$, added to $-2$.`,
      D: r`This forgets the absolute magnitude of $-2$; the distance modulus alone is 10.`,
    },
    takeaway: r`m = M + 5 log(d/10 pc); at 1000 pc the modulus is 10.`,
  },

  "iaac-2025-final-round-q19": {
    solution: [
      r`At 100 pc the distance modulus is $5\log_{10}(100/10) = 5$, so $M = m - 5 = 10.0 - 5 = 5.0$.`,
    ],
    wrongChoices: {
      A: r`This subtracts 10, which would be the modulus for 1000 pc, not 100 pc.`,
      B: r`Not from the formula; $5\log_{10}(10) = 5$.`,
      D: r`This subtracts only 2; the modulus at 100 pc is 5.`,
    },
    takeaway: r`At 100 pc, M = m − 5.`,
  },

  "iaac-2025-final-round-q20": {
    solution: [
      r`**Olbers' paradox** asks why the night sky is dark if the universe is filled with stars in every direction. The answer involves the finite age of the universe and its expansion.`,
    ],
    wrongChoices: {
      A: r`Fermi's paradox asks why we see no sign of alien civilisations.`,
      C: r`The twin paradox is a puzzle in special relativity about time dilation.`,
      D: r`Zeno's paradoxes are ancient puzzles about motion and infinity.`,
    },
    takeaway: r`The dark night sky is Olbers' paradox.`,
  },

  "iaac-2025-final-round-q21": {
    solution: [
      r`Of the options, the physical one is that light from distant stars and galaxies is **redshifted** by the expansion of the universe, draining its energy and shifting it out of the visible. (The larger part of the answer is that the universe has a finite age, so light from beyond about 14 billion light-years has not reached us yet.)`,
    ],
    wrongChoices: {
      A: r`Size is irrelevant: in an infinite, eternal universe every line of sight would still end on a star's surface, however small.`,
      C: r`Blocking does not help: anything that absorbs the light would heat up until it glowed just as brightly.`,
      D: r`The Sun does not absorb starlight; it is a source, not a sink.`,
    },
    takeaway: r`Finite age and cosmic redshift together keep the night sky dark.`,
  },

  "iaac-2025-final-round-q22": {
    solution: [
      r`The **critical density** is the dividing line for the **geometry** of space: a universe denser than critical is closed (positively curved), one less dense is open, and one exactly at critical is flat.`,
    ],
    wrongChoices: {
      A: r`Stellar brightness has nothing to do with cosmology's critical density.`,
      B: r`The speed of light is a fixed constant, unaffected by density.`,
      C: r`Dark energy contributes **to** the density; the critical density is the benchmark it is compared with.`,
    },
    takeaway: r`Critical density sets whether the universe is open, flat or closed.`,
  },

  "iaac-2025-final-round-q23": {
    solution: [
      r`Density below the critical value means gravity is too weak to close space up: the universe is **open**, with negatively curved (saddle-shaped) geometry.`,
    ],
    wrongChoices: {
      A: r`Closed needs density **above** critical.`,
      B: r`Flat needs density exactly equal to critical.`,
      D: r`"Static" is not a geometry, and the universe is expanding in all three cases.`,
    },
    takeaway: r`Below critical density: open; above: closed; equal: flat.`,
  },

  "iaac-2025-final-round-q24": {
    solution: [
      r`Recent simulations of the Milky Way-Andromeda encounter show that the two biggest satellites, **M33** (Triangulum) and the **LMC**, tug on the giants enough to change whether they collide.`,
    ],
    wrongChoices: {
      B: r`The SMC and Sagittarius Dwarf are too small to matter much.`,
      C: r`Fornax and Sculptor are tiny dwarf spheroidals with negligible influence.`,
      D: r`M87 and M81 are distant galaxies outside the Local Group entirely.`,
    },
    takeaway: r`M33 and the LMC are the satellites that sway the Milky Way-Andromeda outcome.`,
  },

  "iaac-2025-final-round-q25": {
    solution: [
      r`**M33** orbits Andromeda and its pull draws the two giants together, **increasing** the chance of a collision, whereas the LMC's tug on the Milky Way tends to pull them apart.`,
    ],
    wrongChoices: {
      A: r`The LMC works the other way, **reducing** the collision probability.`,
      C: r`The SMC is too small to have a significant effect.`,
      D: r`M31 is Andromeda itself, one of the two colliding galaxies.`,
    },
    takeaway: r`M33 raises the collision odds; the LMC lowers them.`,
  },

  "iaac-2025-final-round-q26": {
    solution: [
      r`In an N-body simulation two particles that pass extremely close would feel a near-infinite $1/r^2$ force and be flung off unrealistically. **Softening** replaces $r^2$ with $r^2 + \epsilon^2$ to avoid these **unphysical close encounters**.`,
    ],
    wrongChoices: {
      A: r`Softening is about accuracy and stability, not speed.`,
      C: r`It **weakens** gravity at tiny separations, never strengthens it.`,
      D: r`Dark energy is modelled separately through the cosmological expansion, not by softening.`,
    },
    takeaway: r`Gravitational softening tames unrealistically strong forces between close particles.`,
  },

  "iaac-2025-final-round-q27": {
    solution: [
      r`**M31** is the Messier catalogue number of the **Andromeda Galaxy**, the nearest large galaxy to our own.`,
    ],
    wrongChoices: {
      B: r`The Triangulum Galaxy is M33.`,
      C: r`The Large Magellanic Cloud has no Messier number; it is too far south for Messier to have seen.`,
      D: r`The Small Magellanic Cloud is likewise not in Messier's catalogue.`,
    },
    takeaway: r`M31 = Andromeda, M33 = Triangulum.`,
  },

  "iaac-2025-final-round-q28": {
    solution: [
      r`The Local Group is dominated by its two giant spirals, the **Milky Way** and **Andromeda (M31)**, which between them hold most of its mass; everything else orbits one of them.`,
    ],
    wrongChoices: {
      B: r`M33 is the third largest, but far smaller than Andromeda.`,
      C: r`The LMC is only a satellite of the Milky Way.`,
      D: r`The SMC is a small satellite, not a dominant member.`,
    },
    takeaway: r`The Milky Way and Andromeda rule the Local Group.`,
  },

  "iaac-2025-final-round-q29": {
    solution: [
      r`Andromeda is approaching at about 110 km/s. Simulations place the first close encounter or merger roughly **4 to 8 billion years** from now (the classic estimate is 4.5 billion), though recent work suggests it may not happen at all.`,
    ],
    wrongChoices: {
      A: r`Far too soon; Andromeda is 2.5 million light-years away and would need to cover it in under a billion years.`,
      B: r`Too soon by a factor of several.`,
      D: r`Too late; by then the Sun will have become a white dwarf.`,
    },
    takeaway: r`A Milky Way-Andromeda merger, if it happens, is several billion years away.`,
  },

  "iaac-2025-final-round-q30": {
    solution: [
      r`**Perihelion** ("near the Sun") is the point of an orbit **closest** to the Sun; the farthest point is aphelion.`,
    ],
    wrongChoices: {
      B: r`The average distance is the semi-major axis.`,
      C: r`Where an orbit crosses the ecliptic is a **node**.`,
      D: r`The farthest point is the **aphelion**.`,
    },
    takeaway: r`Perihelion = nearest to the Sun; aphelion = farthest.`,
  },

  "iaac-2025-final-round-q31": {
    solution: [
      r`Objects like Sedna have perihelia far beyond Neptune, but very few were known with perihelia between about 50 and 75 AU, the so-called **perihelion gap**. Ammonite's perihelion of 66 AU sits right inside that gap.`,
    ],
    wrongChoices: {
      A: r`Kuiper belt resonance gaps are cleared by Neptune much closer in, around 40 AU.`,
      C: r`The asteroid belt near Jupiter is nowhere near this distant object.`,
      D: r`The Oort cloud lies thousands of AU out; Ammonite is far inside it.`,
    },
    takeaway: r`Ammonite fills the empty range of perihelia between the Kuiper belt and Sedna.`,
  },

  "iaac-2025-final-round-q32": {
    solution: [
      r`Ammonite (2023 KQ14) never comes closer to the Sun than about **66 AU**, more than twice Neptune's distance, so Neptune cannot have shaped its orbit.`,
    ],
    wrongChoices: {
      A: r`40 AU is inside the Kuiper belt, near Pluto; Ammonite stays much farther out.`,
      B: r`55 AU is below its actual perihelion.`,
      D: r`100 AU is too far; that is beyond even Sedna's 76 AU perihelion.`,
    },
    takeaway: r`Ammonite's perihelion is about 66 AU.`,
  },

  "iaac-2025-final-round-q33": {
    solution: [
      r`The clustered, elongated orbits of Sedna-like objects could be shepherded by the gravity of an undiscovered **planet** far beyond Neptune, the hypothetical **Planet Nine**.`,
    ],
    wrongChoices: {
      A: r`Jupiter has no detached "core remnant" wandering the outer Solar System.`,
      B: r`A nearby pulsar would be detected easily and would disrupt far more than a few orbits.`,
      C: r`A comet is far too light to reshape the orbits of large bodies.`,
    },
    takeaway: r`Planet Nine is the leading hypothesis for Sedna-like orbits.`,
  },

  "iaac-2025-final-round-q34": {
    solution: [
      r`**Hydrogen** makes up about 74% of the universe's ordinary matter by mass (and about 90% of its atoms), left over from the Big Bang.`,
    ],
    wrongChoices: {
      A: r`Oxygen is the third most abundant element, at under 1%.`,
      C: r`Helium is second, at about 24% by mass.`,
      D: r`Carbon is fourth, a fraction of a percent.`,
    },
    takeaway: r`Hydrogen, then helium, then everything else.`,
  },

  "iaac-2025-final-round-q35": {
    solution: [
      r`The Sun will swell into a red giant, shed its outer layers as a planetary nebula, and leave its carbon-oxygen core behind as a **white dwarf**.`,
    ],
    wrongChoices: {
      A: r`Neutron stars need a supernova from a star above about 8 solar masses.`,
      C: r`Black holes need even heavier stars, above roughly 20 solar masses.`,
      D: r`The Sun will become a red **giant**, but supergiants are far more massive stars, and neither is the final stage.`,
    },
    takeaway: r`The Sun ends as a white dwarf.`,
  },

  "iaac-2025-final-round-q36": {
    solution: [
      r`**Jupiter** spins fastest of all the planets, once every 9 h 56 min, which flattens it visibly at the poles.`,
    ],
    wrongChoices: {
      A: r`Earth takes 24 hours.`,
      B: r`Mars takes about 24 h 40 min.`,
      D: r`Neptune takes about 16 hours, fast but slower than Jupiter.`,
    },
    takeaway: r`Jupiter has the shortest day, under 10 hours.`,
  },
};
