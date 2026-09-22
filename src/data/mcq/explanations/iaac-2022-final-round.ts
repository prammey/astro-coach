import type { McqExplanationMap } from "./types";

// Teaching explanations for the IAAC 2022 Final Round questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "iaac-2022-final-round-q1": {
    solution: [
      r`The circled part sits at the tip of three long struts in front of the big gold honeycomb mirror. That is the **secondary mirror**, a small convex mirror that catches the light from the primary and sends it back through the hole in the middle to the instruments.`,
    ],
    wrongChoices: {
      A: r`The primary mirror is the large 18-segment gold honeycomb, not the small part on the struts.`,
      C: r`The optics subsystem is a general term for the whole telescope optics, not a single circled component.`,
      D: r`The antenna is on the underside of the spacecraft bus, below the sunshield.`,
    },
    takeaway: r`JWST's secondary mirror hangs on a tripod in front of the primary.`,
  },

  "iaac-2022-final-round-q2": {
    solution: [
      r`The circled dish-like part hangs below the spacecraft bus on the warm, Sun-facing side of the sunshield. It is the high-gain **antenna**, which sends JWST's data back to Earth.`,
    ],
    wrongChoices: {
      A: r`The stabilisation flap is the vertical panel at the far end of the sunshield, not a dish under the bus.`,
      B: r`The spacecraft bus is the boxy body holding the computers and fuel; the circled part hangs off it.`,
      D: r`The star trackers are small cameras on the telescope structure, not a dish on the bus.`,
    },
    takeaway: r`JWST's antenna sits under the bus on the warm side of the sunshield.`,
  },

  "iaac-2022-final-round-q3": {
    solution: [
      r`The circled part is the upright panel at the end of the sunshield. This is the **stabilisation (trim) flap**: sunlight pushing on the huge sunshield would slowly twist the telescope, and the flap balances that pressure like a sail's trim tab.`,
    ],
    wrongChoices: {
      A: r`The antenna is a small dish under the spacecraft bus, on the other side.`,
      B: r`The sunshield is the whole five-layer kite shape; the circled part is the flap attached at its end.`,
      C: r`The optics subsystem is the mirrors and their structure, on the cold side above the shield.`,
    },
    takeaway: r`The trim flap balances solar radiation pressure on JWST's sunshield.`,
  },

  "iaac-2022-final-round-q4": {
    solution: [
      r`A spinning, magnetised neutron star beams radiation from its magnetic poles; each time a beam sweeps past Earth we see a pulse, so the star is called a **pulsar**.`,
    ],
    wrongChoices: {
      A: r`"Neutron dwarf" is not an astronomical object.`,
      B: r`"Rotar" is not a real term.`,
      C: r`A quasar is a galaxy's active nucleus powered by a supermassive black hole, nothing to do with neutron stars.`,
    },
    takeaway: r`A rotating neutron star seen in pulses is a pulsar.`,
  },

  "iaac-2022-final-round-q5": {
    solution: [
      r`Neutron-star matter has a density of about $4 \times 10^{17}$ kg/m³. Earth's mass, $6 \times 10^{24}$ kg, would occupy only $\dfrac{6 \times 10^{24}}{4 \times 10^{17}} \approx 1.5 \times 10^7$ m³.`,
      r`A sphere of that volume has radius $\left(\dfrac{3 \times 1.5 \times 10^7}{4\pi}\right)^{1/3} \approx 150$ m, so the diameter would be about 300 m: in the **100 to 500 m** range. The whole Earth would fit inside a city block.`,
    ],
    wrongChoices: {
      A: r`Too small; even at neutron-star density Earth's mass needs a few hundred metres of diameter.`,
      C: r`Too large; a 500 to 1000 m ball at neutron-star density would hold several Earths.`,
      D: r`Far too large; a kilometre-scale ball at that density would be many Earth masses.`,
    },
    takeaway: r`At neutron-star density (~4 × 10¹⁷ kg/m³), Earth would be a ball a few hundred metres across.`,
  },

  "iaac-2022-final-round-q6": {
    solution: [
      r`JWST orbits around the Sun-Earth **L2 Lagrange point**, 1.5 million km beyond Earth, where it keeps pace with Earth around the Sun and can keep the Sun, Earth and Moon all behind its sunshield.`,
    ],
    wrongChoices: {
      A: r`Geostationary orbit, 36,000 km up, is far too warm and close to Earth's heat for an infrared telescope.`,
      B: r`The Moon's shadow moves constantly; no spacecraft can stay in it.`,
      D: r`Between Earth and Moon the telescope would be bathed in heat and light from both; L2 is four times farther than the Moon.`,
    },
    takeaway: r`JWST lives at the Sun-Earth L2 point.`,
  },

  "iaac-2022-final-round-q7": {
    solution: [
      r`In the figure the asteroids move **towards each other**, so their momenta point in opposite directions. Taking $m_1$'s direction as positive, total momentum is $m_1v_1 - m_2v_2$.`,
      r`Momentum is conserved in the merger: $(m_1 + m_2)v = m_1v_1 - m_2v_2$, so $v = \dfrac{m_1v_1 - m_2v_2}{m_1 + m_2}$.`,
    ],
    wrongChoices: {
      A: r`Dividing by 2 is wrong: the merged body has mass $m_1 + m_2$, and the two velocities point in opposite directions so they must be subtracted.`,
      B: r`This would be right if both asteroids moved in the **same** direction, but in the figure they approach head-on, so one momentum is negative.`,
      C: r`The subtraction is right for head-on motion, but the total mass $m_1 + m_2$ must be the divisor, not 2.`,
    },
    takeaway: r`Momentum conservation with signs: v = (m₁v₁ − m₂v₂)/(m₁ + m₂) for a head-on merger.`,
  },

  "iaac-2022-final-round-q8": {
    solution: [
      r`Ultraviolet spans about 10 to 400 nm. **150 nanometres** sits in the far ultraviolet, shorter than visible light's 380 nm limit.`,
    ],
    wrongChoices: {
      A: r`150 metres is a long radio wave (about 2 MHz).`,
      B: r`150 millimetres is a microwave.`,
      C: r`150 micrometres is far-infrared.`,
    },
    takeaway: r`Ultraviolet means wavelengths of tens to hundreds of nanometres.`,
  },

  "iaac-2022-final-round-q9": {
    solution: [
      r`Infrared runs from 0.7 µm to about 1 mm. **150 micrometres** is far-infrared, the light of cold dust clouds.`,
    ],
    wrongChoices: {
      A: r`150 metres is a radio wavelength.`,
      B: r`150 millimetres is in the microwave band.`,
      D: r`150 nanometres is ultraviolet.`,
    },
    takeaway: r`Micrometre wavelengths are infrared.`,
  },

  "iaac-2022-final-round-q10": {
    solution: [
      r`**Albedo** is the fraction of incoming light a body **reflects**. Fresh snow has an albedo near 0.9, charcoal near 0.04, and Earth as a whole about 0.3.`,
    ],
    wrongChoices: {
      B: r`The absorbed fraction is $1 - $ albedo, the complement.`,
      C: r`"Blocked" is not a defined optical fraction; albedo concerns reflection.`,
      D: r`Emitted radiation is the planet's own thermal glow, separate from reflected sunlight.`,
    },
    takeaway: r`Albedo = reflected fraction of incident light.`,
  },

  "iaac-2022-final-round-q11": {
    solution: [
      r`Averaged over all seasons and latitudes, Earth's surface temperature is about **15 °C** (288 K), about 33 °C warmer than it would be without the greenhouse effect.`,
    ],
    wrongChoices: {
      A: r`Too cold; 5 °C is a chilly spring day in the mid-latitudes, not the global mean.`,
      B: r`Too cold; the global mean is about 15 °C.`,
      D: r`Too warm; 20 °C would be a noticeably hotter planet than today's.`,
    },
    takeaway: r`Earth's mean surface temperature is about 15 °C.`,
  },

  "iaac-2022-final-round-q12": {
    solution: [
      r`**NIRSpec**, the Near-Infrared Spectrograph, is one of JWST's four science instruments, alongside NIRCam, MIRI and NIRISS/FGS.`,
    ],
    wrongChoices: {
      B: r`HELIOS is not a JWST instrument.`,
      C: r`Exo-FMS is a climate-modelling code, not an instrument.`,
      D: r`HAZMAT is a Hubble survey of M dwarfs, not JWST hardware.`,
    },
    takeaway: r`JWST's instruments: NIRCam, NIRSpec, MIRI and NIRISS.`,
  },

  "iaac-2022-final-round-q13": {
    solution: [
      r`Stefan-Boltzmann: $L = 4\pi R^2\sigma T^4$. With the radius unchanged, doubling $T$ multiplies $L$ by $2^4 = 16$.`,
    ],
    wrongChoices: {
      A: r`Luminosity is not linear in temperature; it goes as the fourth power.`,
      B: r`This would be $T^2$; the Stefan-Boltzmann law has $T^4$.`,
      C: r`This would be $T^3$; the exponent is 4.`,
    },
    takeaway: r`L ∝ T⁴: doubling the temperature gives 16 times the luminosity.`,
  },

  "iaac-2022-final-round-q14": {
    solution: [
      r`Redshift: $z = \dfrac{\lambda_{\text{obs}}}{\lambda_{\text{emit}}} - 1 = \dfrac{1000}{200} - 1 = 5 - 1 = 4$.`,
    ],
    wrongChoices: {
      A: r`Not from the formula; the wavelength ratio is 5, and $z$ is that ratio minus one.`,
      C: r`This is the wavelength **ratio** $1 + z$; subtract one to get $z$.`,
      D: r`Too large; $z = 6$ would need the wavelength to grow sevenfold.`,
    },
    takeaway: r`z = λ_obs/λ_emit − 1.`,
  },

  "iaac-2022-final-round-q15": {
    solution: [
      r`Water vapour and carbon dioxide in the air **absorb** most infrared wavelengths, leaving only a few narrow windows. That is why infrared observatories go to high, dry mountains, or better, into space like JWST.`,
    ],
    wrongChoices: {
      A: r`Infrared is harmless warmth; it is what you feel from a fire.`,
      C: r`The atmosphere absorbs infrared rather than reflecting it.`,
      D: r`Distortion (seeing) affects all wavelengths; the real obstacle for infrared is absorption.`,
    },
    takeaway: r`Atmospheric water vapour and CO₂ absorb most infrared light.`,
  },

  "iaac-2022-final-round-q16": {
    solution: [
      r`For a uniform solid cylinder (or disc) spinning about its axis, $I = \tfrac{1}{2}MR^2$: half the mass-times-radius-squared of a hoop, because much of the mass is closer to the axis.`,
    ],
    wrongChoices: {
      B: r`$\tfrac{2}{5}MR^2$ is a solid **sphere**.`,
      C: r`$\tfrac{3}{10}MR^2$ is a solid **cone** about its axis.`,
      D: r`$\tfrac{1}{3}ML^2$ is a thin **rod** about its end.`,
    },
    takeaway: r`Solid cylinder: I = ½MR²; solid sphere: 2/5 MR².`,
  },

  "iaac-2022-final-round-q17": {
    solution: [
      r`Kepler's **second** law: the line from the Sun to a planet sweeps out **equal areas in equal times**, i.e. $\dfrac{dA}{dt}$ is constant. It is conservation of angular momentum in disguise.`,
    ],
    wrongChoices: {
      A: r`Elliptical orbits are the **first** law.`,
      C: r`$a^3/T^2 = $ constant is the **third** law.`,
      D: r`Not a Kepler law at all; the third law has $a^3$ and $T^2$, not the reverse.`,
    },
    takeaway: r`Kepler II: equal areas in equal times.`,
  },

  "iaac-2022-final-round-q18": {
    solution: [
      r`Methanol and ammonia should be abundant in a hydrogen-rich atmosphere unless something removes them. Both dissolve readily in **water**, so their absence points to a global **water ocean** beneath the atmosphere: a so-called "Hycean" world.`,
    ],
    wrongChoices: {
      A: r`A shallow surface would not remove the gases; only a large liquid reservoir can soak them up.`,
      C: r`A dry surface has nothing to absorb ammonia and methanol, so they would remain in the air.`,
      D: r`Methane oceans exist only at far colder temperatures (like Titan), and would not preferentially remove ammonia.`,
    },
    takeaway: r`Missing water-soluble gases like NH₃ hint at a water ocean under a sub-Neptune's atmosphere.`,
  },

  "iaac-2022-final-round-q19": {
    solution: [
      r`A **sub-Neptune** is a planet **smaller than Neptune** but larger than Earth, typically 2 to 4 Earth radii. They are the most common type of planet found by Kepler, though our Solar System has none.`,
    ],
    wrongChoices: {
      B: r`Planets bigger than Neptune would be "super-Neptunes" or gas giants.`,
      C: r`The name refers to size, not distance from a star.`,
      D: r`Again, "sub" here means smaller, not nearer.`,
    },
    takeaway: r`Sub-Neptunes are between Earth and Neptune in size.`,
  },

  "iaac-2022-final-round-q20": {
    solution: [
      r`The Sun's surface is about 5,770 K. Subtracting 273 to convert to Celsius gives about **5,500 °C**.`,
    ],
    wrongChoices: {
      A: r`Too cool; 5,200 °C is about 5,470 K.`,
      C: r`5,800 is the temperature in **kelvin**, not Celsius.`,
      D: r`6,000 is a rounded value in kelvin; in Celsius the Sun is about 5,500°.`,
    },
    takeaway: r`Sun's surface: 5,800 K ≈ 5,500 °C.`,
  },

  "iaac-2022-final-round-q21": {
    solution: [
      r`A **spectral energy distribution** shows how an object's energy is spread over wavelength: energy per unit wavelength, $\dfrac{dE}{d\lambda}$ (or per unit frequency).`,
    ],
    wrongChoices: {
      B: r`$dE/dt$ is power (luminosity), not a distribution over wavelength.`,
      C: r`Redshift per wavelength is not a physical quantity.`,
      D: r`Redshift per time has nothing to do with a spectrum.`,
    },
    takeaway: r`An SED is energy per unit wavelength (or frequency).`,
  },

  "iaac-2022-final-round-q22": {
    solution: [
      r`In 1610 Galileo saw that Venus goes through a **full set of phases**, from crescent to full, which is only possible if Venus orbits the **Sun**, not Earth: powerful evidence for the Copernican model.`,
    ],
    wrongChoices: {
      A: r`Galileo could not measure Venus's diameter accurately; that came centuries later.`,
      B: r`Venus's surface is permanently hidden by clouds; no telescope sees its mountains.`,
      D: r`Galileo's small telescope showed Venus as a featureless disc; the cloud cover was recognised much later.`,
    },
    takeaway: r`Galileo's phases of Venus showed it orbits the Sun.`,
  },

  "iaac-2022-final-round-q23": {
    solution: [
      r`The **Jovian** (Jupiter-like) planets are the four giants: **Jupiter, Saturn, Uranus and Neptune**. The four rocky inner planets are the terrestrial planets.`,
    ],
    wrongChoices: {
      A: r`These are the **terrestrial** planets.`,
      B: r`This mixes the terrestrial planets with two giants.`,
      D: r`Uranus and Neptune are the **ice giants**, a subgroup of the Jovian planets, but Jupiter and Saturn belong too.`,
    },
    takeaway: r`Jovian planets: Jupiter, Saturn, Uranus, Neptune.`,
  },

  "iaac-2022-final-round-q24": {
    solution: [
      r`Neptune (49,000 km across) and **Uranus** (51,000 km) are near-twins in size, both about four times Earth's diameter.`,
    ],
    wrongChoices: {
      A: r`Venus is Earth-sized, four times smaller than Neptune.`,
      B: r`Jupiter is nearly three times wider than Neptune.`,
      C: r`Saturn is about 2.4 times wider than Neptune.`,
    },
    takeaway: r`Uranus and Neptune are the same size.`,
  },

  "iaac-2022-final-round-q25": {
    solution: [
      r`Sunspots are about 1,500 K **cooler** than the surrounding photosphere because their strong magnetic fields block the convection that brings up heat. They only look dark by contrast; alone in the sky a sunspot would glow orange.`,
    ],
    wrongChoices: {
      B: r`If sunspots were hotter they would look brighter, not darker.`,
      C: r`At the same temperature they would be invisible against the photosphere.`,
      D: r`Sunspots are consistently cooler; that is what makes them dark.`,
    },
    takeaway: r`Sunspots are dark because they are cooler.`,
  },

  "iaac-2022-final-round-q26": {
    solution: [
      r`**Sirius**, in Canis Major, is the brightest star of the night sky at magnitude $-1.46$, both because it is fairly luminous and because it is close (8.6 light-years).`,
    ],
    wrongChoices: {
      A: r`Polaris is only the 48th brightest star; its fame comes from marking the pole.`,
      B: r`Betelgeuse is bright but variable, usually around magnitude 0.5.`,
      C: r`Alpha Centauri is the third brightest, at magnitude $-0.27$.`,
    },
    takeaway: r`Sirius is the brightest night-time star.`,
  },

  "iaac-2022-final-round-q27": {
    solution: [
      r`Alpha Centauri lies at declination $-61^\circ$, deep in the **southern** sky next to the Southern Cross, and the system is about **4.3 light-years** away.`,
    ],
    wrongChoices: {
      A: r`Wrong hemisphere and far too close; nothing outside the Solar System is 1.3 light-years away.`,
      B: r`Right distance, wrong hemisphere: Alpha Centauri never rises from most of the northern hemisphere.`,
      C: r`Right hemisphere, but 1.3 light-years is a third of the true distance.`,
    },
    takeaway: r`Alpha Centauri: southern sky, 4.3 light-years.`,
  },

  "iaac-2022-final-round-q28": {
    solution: [
      r`Venus's atmosphere is mostly carbon dioxide, but its clouds are droplets of **sulphuric acid**, fed by sulphur dioxide from volcanoes. Sulphur compounds are the distinctive ingredient.`,
    ],
    wrongChoices: {
      A: r`Methane is a trace gas on Venus; it is Titan and the giant planets that are methane-rich.`,
      C: r`Phosphine was tentatively reported in 2020 but at parts-per-billion levels, hardly "high amounts", and the detection is disputed.`,
      D: r`Iron is in Venus's core, not its atmosphere.`,
    },
    takeaway: r`Venus's clouds are sulphuric acid.`,
  },

  "iaac-2022-final-round-q29": {
    solution: [
      r`The yellow, blotchy, crater-free ball in the picture is **Io**, coloured by sulphur from its hundreds of active volcanoes. Its surface is constantly repaved, which is why it shows no impact craters.`,
    ],
    wrongChoices: {
      B: r`Europa is smooth, white and criss-crossed by brown cracks in its ice shell.`,
      C: r`Callisto is dark and covered with bright impact craters, the most cratered body known.`,
      D: r`Ganymede is grey-brown with mixed dark cratered terrain and lighter grooved regions.`,
    },
    takeaway: r`Io's sulphur-yellow, craterless face marks the Solar System's most volcanic world.`,
  },

  "iaac-2022-final-round-q30": {
    solution: [
      r`**Titan**, the only moon with a thick atmosphere, is the largest moon of **Saturn**, discovered by Huygens in 1655.`,
    ],
    wrongChoices: {
      A: r`Mars's moons are the tiny Phobos and Deimos.`,
      B: r`Jupiter's big moons are Io, Europa, Ganymede and Callisto.`,
      D: r`Neptune's large moon is Triton.`,
    },
    takeaway: r`Titan orbits Saturn.`,
  },
};
