import type { McqExplanationMap } from "./types";

// Teaching explanations for the IAAC 2023 Final Round questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "iaac-2023-final-round-q1": {
    solution: [
      r`Elliptical galaxies are smooth, featureless balls of old stars with no arms or disc. Shape **B**, the plain round blob fading smoothly at the edges, is the elliptical.`,
    ],
    wrongChoices: {
      A: r`Shape A is a shapeless, lumpy patch: an **irregular** galaxy.`,
      C: r`Shape C has two sweeping arms winding out from the centre: a **spiral**.`,
      D: r`Shape D has a straight bar across the middle with arms starting at its ends: a **barred spiral**.`,
    },
    takeaway: r`Ellipticals are smooth, structureless ovals; spirals have arms; irregulars have no shape.`,
  },

  "iaac-2023-final-round-q2": {
    solution: [
      r`The picture shows a flat disc with loosely wound arms sprinkled with pink star-forming regions, winding directly out of a small central bulge with no bar: a classic **spiral** galaxy.`,
    ],
    wrongChoices: {
      B: r`A barred spiral would show a straight bar of stars through the centre, with the arms starting at its ends; here the arms wind straight from the nucleus.`,
      C: r`A lenticular galaxy has a disc but no arms and no young blue stars; this galaxy has both.`,
      D: r`An elliptical is a smooth, arm-less oval of old stars, unlike this blue, patterned disc.`,
    },
    takeaway: r`Arms winding straight from the nucleus, with no bar, make an ordinary spiral.`,
  },

  "iaac-2023-final-round-q3": {
    solution: [
      r`The shape has a straight **bar** of stars through its centre, and the two arms begin at the ends of the bar: the signature of a **barred spiral**, like our own Milky Way.`,
    ],
    wrongChoices: {
      B: r`A lenticular galaxy is a smooth disc with a bulge and no arms at all.`,
      C: r`An elliptical is a featureless oval; this shape has a bar and arms.`,
      D: r`Irregular galaxies have no organised structure, whereas this one has a clear bar-and-arms pattern.`,
    },
    takeaway: r`Arms sprouting from the ends of a central bar mean a barred spiral.`,
  },

  "iaac-2023-final-round-q4": {
    solution: [
      r`Light travels at $3 \times 10^8$ m/s, which is $3 \times 10^5$ km/s, 300,000 km per second, about seven times around the Earth in one second.`,
    ],
    wrongChoices: {
      A: r`A hundred times too slow; 3,000 km/s is only 1% of light speed.`,
      C: r`Ten times too fast.`,
      D: r`Ten thousand times too fast.`,
    },
    takeaway: r`c ≈ 300,000 km/s.`,
  },

  "iaac-2023-final-round-q5": {
    solution: [
      r`By sheer numbers, **elliptical** galaxies are the most common type, because the universe is full of small dwarf ellipticals (and dwarf spheroidals). Big spirals are conspicuous but outnumbered.`,
    ],
    wrongChoices: {
      A: r`Spirals dominate among **bright** galaxies but are outnumbered by the countless faint dwarf ellipticals.`,
      B: r`Lenticulars are relatively rare, found mostly in galaxy clusters.`,
      C: r`Irregulars are common among dwarfs but still fewer than the ellipticals.`,
    },
    takeaway: r`Counting dwarfs, ellipticals are the most numerous galaxy type.`,
  },

  "iaac-2023-final-round-q6": {
    solution: [
      r`$d = \dfrac{1}{p} = \dfrac{1}{0.1} = 10$ pc, about 33 light-years.`,
    ],
    wrongChoices: {
      A: r`One parsec needs a parallax of a full arcsecond.`,
      B: r`Three parsecs corresponds to a parallax of about $0.33''$.`,
      D: r`Thirty parsecs would need a parallax of $0.033''$.`,
    },
    takeaway: r`Distance in parsecs = 1 / parallax in arcseconds.`,
  },

  "iaac-2023-final-round-q7": {
    solution: [
      r`The Sun sits at one focus of the ellipse, near the left end. The **aphelion** is the point of the orbit farthest from the Sun: the far end of the long axis, point **C**.`,
    ],
    wrongChoices: {
      A: r`Point A is the nearest point to the Sun: the **perihelion**.`,
      B: r`Point B is an end of the short axis, an intermediate distance from the Sun.`,
      D: r`Point D is the other end of the short axis, also at intermediate distance.`,
    },
    takeaway: r`Aphelion is the far end of the major axis from the Sun's focus.`,
  },

  "iaac-2023-final-round-q8": {
    solution: [
      r`Comet names encode their orbit: **C/** means a **non-periodic** comet (no return expected, or a period over 200 years), while **P/** marks a periodic one. C/2023 A3 (Tsuchinshan-ATLAS) is on a hyperbolic path and will not return.`,
    ],
    wrongChoices: {
      B: r`A periodic comet would carry the prefix P/, like 1P/Halley.`,
      C: r`A closed elliptical orbit would make it periodic; a C/ comet on a hyperbolic path is not.`,
      D: r`It certainly has a well-defined orbit; it just is not a repeating one.`,
    },
    takeaway: r`C/ = non-periodic comet, P/ = periodic comet.`,
  },

  "iaac-2023-final-round-q9": {
    solution: [
      r`**Dark energy** is the name for whatever is making the **expansion of the universe accelerate**, discovered through distant supernovae in 1998.`,
    ],
    wrongChoices: {
      A: r`Black holes' gravity is ordinary gravity; dark energy is an anti-gravity-like effect on cosmic scales.`,
      B: r`Unseen mass in the universe is **dark matter**, a different mystery.`,
      C: r`Galaxy rotation curves are explained by dark matter, not dark energy.`,
    },
    takeaway: r`Dark energy drives the accelerating expansion; dark matter holds galaxies together.`,
  },

  "iaac-2023-final-round-q10": {
    solution: [
      r`Volcanic activity builds **cones** (small volcanic edifices), **ridges** (wrinkle ridges from lava flows and cooling) and **troughs** (collapse features over lava tubes or fissures). All three appear near Zhurong's landing site in Utopia Planitia.`,
    ],
    wrongChoices: {
      A: r`Rampart craters form from impacts into ice-rich ground, not from volcanism.`,
      B: r`Rampart craters are impact features and transverse aeolian ridges are wind-blown dunes, neither volcanic.`,
      C: r`Transverse aeolian ridges are made by wind, not volcanoes.`,
    },
    takeaway: r`Cones, ridges and troughs are volcanic landforms; rampart craters and aeolian ridges are not.`,
  },

  "iaac-2023-final-round-q11": {
    solution: [
      r`Surface gravity is $g = \dfrac{GM}{R^2}$ with $M = \dfrac{4}{3}\pi R^3\rho$, so $g = \dfrac{G \cdot \frac{4}{3}\pi R^3\rho}{R^2} = \dfrac{4}{3}\pi G\rho R$.`,
      r`At fixed density, gravity grows in proportion to radius.`,
    ],
    wrongChoices: {
      B: r`One power of $R$ too many; the $R^3$ in the mass is divided by $R^2$.`,
      C: r`This is the mass formula's $R^3$ without dividing by $R^2$ at all.`,
      D: r`This has $R$ in the denominator; gravity **increases** with radius at fixed density.`,
    },
    takeaway: r`g = (4/3) π G ρ R for a uniform sphere.`,
  },

  "iaac-2023-final-round-q12": {
    solution: [
      r`Zhurong landed in Utopia Planitia, a vast basin in Mars's northern lowlands, about **4,000 m below** the planet's reference level (the "datum" that plays the role of sea level).`,
    ],
    wrongChoices: {
      A: r`$-8{,}000$ m is the floor of Hellas Basin in the south, the deepest place on Mars.`,
      C: r`$+4{,}000$ m would be on the southern highlands or the flanks of the Tharsis volcanoes.`,
      D: r`$+8{,}000$ m is high on the Tharsis bulge; the lowlands where Zhurong landed are far below the datum.`,
    },
    takeaway: r`Zhurong sits in the northern lowlands, about 4 km below the Martian datum.`,
  },

  "iaac-2023-final-round-q13": {
    solution: [
      r`**RoMAG**, the Rover Magnetometer, measures the magnetic field at the surface. Its name says so: Ro(ver) MAG(netometer).`,
    ],
    wrongChoices: {
      B: r`RoPeR is the Rover Penetrating Radar, which probes underground layers.`,
      C: r`MarSCoDe is the laser spectroscopy instrument for rock composition.`,
      D: r`NaTeCams are the navigation and terrain cameras.`,
    },
    takeaway: r`RoMAG = rover magnetometer.`,
  },

  "iaac-2023-final-round-q14": {
    solution: [
      r`When the magnitude scale was put on a modern footing, **Vega** was chosen as the zero point: its apparent magnitude was defined as 0 in every band.`,
    ],
    wrongChoices: {
      A: r`The Sun, at magnitude $-26.7$, is far too bright to be a convenient zero point.`,
      B: r`Polaris is a variable star of magnitude 2, an unsuitable standard.`,
      C: r`Sirius is the brightest star at $-1.46$, but it was never the scale's zero.`,
    },
    takeaway: r`Vega defines magnitude zero.`,
  },

  "iaac-2023-final-round-q15": {
    solution: [
      r`Five magnitudes equal a factor of 100, so one magnitude is a factor of $100^{1/5} = 2.512$: a magnitude-1 star is about **2.5 times** brighter than a magnitude-2 star.`,
    ],
    wrongChoices: {
      B: r`A factor of 5 would be about 1.75 magnitudes.`,
      C: r`A factor of 10 is 2.5 magnitudes.`,
      D: r`A factor of 25 is 3.5 magnitudes.`,
    },
    takeaway: r`Each magnitude step is a factor of about 2.5 in brightness.`,
  },

  "iaac-2023-final-round-q16": {
    solution: [
      r`A star holds its shape because the inward pull of **gravity** on each layer is balanced by the outward push of **pressure** from the hotter layers beneath. That balance is **hydrostatic equilibrium**.`,
    ],
    wrongChoices: {
      A: r`Temperature helps create the pressure, but the balance is between pressure and gravity.`,
      B: r`Friction plays no role in holding up a star.`,
      C: r`Density is a property of the gas, not a force to be balanced.`,
    },
    takeaway: r`Hydrostatic equilibrium: gravity in, pressure out.`,
  },

  "iaac-2023-final-round-q17": {
    solution: [
      r`The ideal gas law is $pV = NkT$: pressure times volume equals the number of particles times Boltzmann's constant times temperature.`,
    ],
    wrongChoices: {
      A: r`Temperature belongs in the numerator: hotter gas has more pressure.`,
      B: r`Volume and temperature are swapped.`,
      C: r`Both the volume and temperature are misplaced.`,
    },
    takeaway: r`pV = NkT.`,
  },

  "iaac-2023-final-round-q18": {
    solution: [
      r`Mars orbits at 1.52 AU, so Kepler's law gives $1.52^{3/2} \approx 1.88$ Earth years, which is 687 days: about **700 Earth days**.`,
    ],
    wrongChoices: {
      A: r`Too short; 300 days would be a planet inside Earth's orbit.`,
      B: r`Too short; 500 days corresponds to about 1.23 AU.`,
      D: r`Too long; 1,000 days corresponds to about 1.95 AU.`,
    },
    takeaway: r`A Martian year is 687 days, nearly two Earth years.`,
  },

  "iaac-2023-final-round-q19": {
    solution: [
      r`Zhurong landed in **Utopia Planitia**, the huge low-lying plain in the northern hemisphere between Elysium's volcanoes and the north pole. On the map that is the blue lowland region at **Site B**, east of the Elysium rise.`,
    ],
    wrongChoices: {
      A: r`Site A lies near the outflow channels east of Tharsis, close to where Viking 1 landed, not Zhurong.`,
      C: r`Site C is in the southern highlands near Tharsis, far from the northern lowland landing site.`,
      D: r`Site D is the Hellas Basin, the deep impact basin in the southern hemisphere; no rover has landed there.`,
    },
    takeaway: r`Zhurong landed in Utopia Planitia, in Mars's northern lowlands.`,
  },

  "iaac-2023-final-round-q20": {
    solution: [
      r`The visible spectrum runs from violet at 380 nm to **red** at about 700 nm. Light at 700 nm is deep red, near the edge of human vision.`,
    ],
    wrongChoices: {
      A: r`Green is around 500 to 565 nm.`,
      B: r`Blue is around 450 to 495 nm.`,
      C: r`Yellow is around 570 to 590 nm.`,
    },
    takeaway: r`Long visible wavelengths (~700 nm) are red; short ones (~400 nm) are violet.`,
  },

  "iaac-2023-final-round-q21": {
    solution: [
      r`The Galactic Centre's central molecular zone forms stars at a modest average rate of about **0.1 solar masses per year** (averaged over the last tens of millions of years), a few percent of the whole Milky Way's rate.`,
    ],
    wrongChoices: {
      A: r`Too low; the centre forms stars ten times faster than this.`,
      C: r`Too high; that is several times the star-formation rate of the **entire** Milky Way.`,
      D: r`Far too high; only extreme starburst galaxies form stars at 100 solar masses per year.`,
    },
    takeaway: r`The Galactic Centre forms about 0.1 solar masses of stars per year.`,
  },

  "iaac-2023-final-round-q22": {
    solution: [
      r`Two spectacular young clusters lie within 30 pc of the Galactic Centre: the **Arches** cluster, named for its arcs of ionised gas, and the **Quintuplet** cluster, named for its five bright infrared stars.`,
    ],
    wrongChoices: {
      A: r`There is no "Parsec cluster", and Sagittarius is the constellation, not a cluster.`,
      B: r`Quintuplet is right, but Sagittarius is not a cluster name.`,
      C: r`Arches is right, but "Parsec" is not a cluster.`,
    },
    takeaway: r`The Arches and Quintuplet clusters are the Galactic Centre's young massive clusters.`,
  },

  "iaac-2023-final-round-q23": {
    solution: [
      r`The Sun lies about 8 kpc from the galactic centre, which is about **26,000 light-years**, closest to the listed 25,000.`,
    ],
    wrongChoices: {
      A: r`Too close by more than half.`,
      C: r`Too far; 50,000 light-years is about the radius of the whole disc.`,
      D: r`Too far; 100,000 light-years is roughly the diameter of the Milky Way.`,
    },
    takeaway: r`The galactic centre is about 26,000 light-years away.`,
  },

  "iaac-2023-final-round-q24": {
    solution: [
      r`The Martian atmosphere is about 95% **carbon dioxide**, with small amounts of nitrogen and argon.`,
    ],
    wrongChoices: {
      A: r`Nitrogen is only about 3% of Martian air (though it dominates Earth's).`,
      B: r`Oxygen is a trace gas on Mars, about 0.1%.`,
      D: r`Carbon monoxide is present only at a fraction of a percent.`,
    },
    takeaway: r`Mars's air is mostly CO₂.`,
  },

  "iaac-2023-final-round-q25": {
    solution: [
      r`Estimates for the Milky Way run from 100 to 400 billion stars; the usual round figure is about **200 billion**.`,
    ],
    wrongChoices: {
      A: r`Too few; that is closer to a small galaxy like the Large Magellanic Cloud.`,
      B: r`Too few; even the low estimates for the Milky Way are 100 billion.`,
      D: r`This is above most estimates; Andromeda, our bigger neighbour, may have about a trillion.`,
    },
    takeaway: r`The Milky Way holds a few hundred billion stars.`,
  },

  "iaac-2023-final-round-q26": {
    solution: [
      r`Gravity bends the path of light, so a massive object between us and a distant source acts like a lens, magnifying and distorting the source: **gravitational lensing**, predicted by Einstein and first seen in the 1919 eclipse.`,
    ],
    wrongChoices: {
      A: r`Parallax is the apparent shift of nearby stars as Earth orbits; no gravity is involved.`,
      B: r`Gravitational redshift is light **losing energy** climbing out of a gravity well, not bending.`,
      D: r`An occultation is one body simply hiding another.`,
    },
    takeaway: r`Gravity bending light is gravitational lensing.`,
  },

  "iaac-2023-final-round-q27": {
    solution: [
      r`When the Moon blocks the bright photosphere, the Sun's faint outer atmosphere, the **corona**, appears as a pearly halo stretching millions of kilometres into space.`,
    ],
    wrongChoices: {
      B: r`The photosphere is the bright surface that gets **hidden** during totality.`,
      C: r`The chromosphere is the thin pink layer visible only for seconds at the start and end of totality, beneath the corona.`,
      D: r`The heliosphere is the enormous bubble of solar wind extending far beyond Pluto, not something you can see.`,
    },
    takeaway: r`Totality reveals the corona.`,
  },

  "iaac-2023-final-round-q28": {
    solution: [
      r`In the Sun's core, hydrogen nuclei fuse into helium mainly through the **proton-proton chain**, which accounts for about 99% of the Sun's energy.`,
    ],
    wrongChoices: {
      A: r`The CNO cycle dominates only in stars hotter and heavier than about 1.3 solar masses; in the Sun it contributes about 1%.`,
      B: r`The triple-alpha process fuses helium into carbon, which happens only in giant stars, not in the Sun today.`,
      D: r`There is no "Bethe-Weise process" (Bethe did work out the pp chain and CNO cycle, though).`,
    },
    takeaway: r`The Sun runs on the proton-proton chain.`,
  },

  "iaac-2023-final-round-q29": {
    solution: [
      r`A hotter star's blackbody spectrum peaks at shorter wavelengths (Wien's law), meaning **higher-energy** photons, and it emits more photons at every energy.`,
    ],
    wrongChoices: {
      B: r`Backwards: cooler stars are redder, emitting lower-energy photons.`,
      C: r`Temperature is exactly what sets the photon energy distribution of a black body.`,
      D: r`One listed statement is correct: hotter means higher-energy photons.`,
    },
    takeaway: r`Hotter stars emit higher-energy (bluer) photons.`,
  },

  "iaac-2023-final-round-q30": {
    solution: [
      r`The main asteroid belt lies between **Mars and Jupiter**, at 2 to 3.5 AU, where Jupiter's gravity stopped a planet from forming.`,
    ],
    wrongChoices: {
      A: r`There is no belt between Earth and Mars, only scattered near-Earth asteroids.`,
      C: r`Between Jupiter and Saturn there are only a few centaurs, no belt.`,
      D: r`Between Saturn and Uranus lie only a handful of centaurs.`,
    },
    takeaway: r`The asteroid belt sits between Mars and Jupiter.`,
  },
};
