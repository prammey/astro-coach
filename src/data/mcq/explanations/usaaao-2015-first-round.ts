import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2015 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2015-first-round-q1": {
    solution: [
      r`Your hand at arm's length is a handy ruler for the sky, because the ratio of hand size to arm length is nearly the same for everyone.`,
      r`A closed **fist** covers about **10°**. A fingertip is about 1°, three middle fingers about 5°, and a spread hand from thumb to little finger about 20°.`,
      r`So, for example, nine fists stacked from the horizon reach the zenith ($9 \times 10^\circ = 90^\circ$).`,
    ],
    wrongChoices: {
      A: r`One degree is about the width of your **little finger** at arm's length, and twice the width of the full Moon. A fist is much wider than that.`,
      B: r`Five degrees is about the width of **three fingers** held together at arm's length. A whole fist covers more sky than that.`,
      D: r`Fifteen degrees is roughly the span from your **index finger to your little finger** when they are spread apart, wider than a closed fist.`,
      E: r`Twenty degrees is the span of a fully spread hand from **thumb tip to little-finger tip**. A closed fist is about half of that.`,
    },
    takeaway: r`At arm's length a fist is about 10°, a fingertip about 1°, and a spread hand about 20°.`,
  },

  "usaaao-2015-first-round-q2": {
    solution: [
      r`A lunar eclipse happens when the Moon passes through **Earth's shadow**. Earth's shadow points directly away from the Sun, so the Moon must be on the far side of Earth from the Sun.`,
      r`The Moon opposite the Sun is, by definition, a **full Moon**. The extra condition about the line of nodes just ensures the Moon is also in the same plane as the Sun and Earth, rather than passing above or below the shadow.`,
    ],
    wrongChoices: {
      A: r`A new Moon sits between Earth and the Sun. That geometry gives a **solar** eclipse (the Moon's shadow on Earth), not a lunar one.`,
      B: r`At first quarter the Moon is $90^\circ$ from the Sun, far off to the side of Earth's shadow, which points straight away from the Sun.`,
      C: r`A waxing gibbous Moon is close to opposite the Sun but not there yet, so it passes beside Earth's shadow rather than through it.`,
      E: r`A waning crescent is only a few tens of degrees from the Sun, on the sunward side of Earth, nowhere near Earth's shadow.`,
    },
    takeaway: r`Lunar eclipses need a full Moon near a node; solar eclipses need a new Moon near a node.`,
  },

  "usaaao-2015-first-round-q3": {
    solution: [
      r`Mars takes 687 days to go round the Sun, so in one Earth year (365 days) it covers about $\dfrac{365}{687} \approx 0.53$ of its orbit, a little over **half a lap**.`,
      r`Half a lap around the Sun moves Mars to roughly the **opposite side** of the zodiac, about $190^\circ$ further along its path through the constellations.`,
      r`Opposite Virgo on the zodiac is the Pisces-Aquarius region. Of the choices, **Aquarius** is the one on the far side of the sky from Virgo, so that is where Mars is most likely to be.`,
    ],
    wrongChoices: {
      A: r`Mars would only be back in Virgo after a full orbit, and one Earth year is only about half of Mars's 687-day year.`,
      B: r`Scorpius is the next-but-one zodiac constellation after Virgo, only about $60^\circ$ along. In a year Mars moves roughly three times further than that.`,
      D: r`Taurus is about $240^\circ$ from Virgo along the zodiac, further than the half lap Mars manages in one Earth year. Think about where a half-orbit lands.`,
      E: r`Cancer is only two constellations **before** Virgo. Mars moves forward through the zodiac over a year (its retrograde loops are brief), so it does not end up back there.`,
    },
    takeaway: r`In one Earth year Mars covers about half of its 687-day orbit, ending up on the opposite side of the zodiac.`,
  },

  "usaaao-2015-first-round-q4": {
    solution: [
      r`The sky turns $360^\circ$ in a sidereal day (23 h 56 min), which is $15''$ of arc per second of time along the celestial equator.`,
      r`Away from the equator the circles of constant declination are smaller, so a star drifts more slowly: the rate is $15'' \times \cos\delta$ per second. For Capella, $\cos(45.98^\circ) \approx 0.695$.`,
      r`Over $150$ s the star drifts $150 \times 15'' \times 0.695 \approx 1565''$, which is about **26 arcminutes**. That drift equals the eyepiece's field of view.`,
    ],
    wrongChoices: {
      A: r`Too small. The sky drifts $15''$ per second at the equator, scaled by $\cos\delta$ for Capella; over 150 seconds that gives well over 20 arcminutes.`,
      C: r`This is $150 \times 15''$ with **no** declination correction. Capella is at $\delta \approx 46^\circ$, where stars drift only $\cos 46^\circ \approx 0.7$ times as fast as on the celestial equator.`,
      D: r`Too large. It looks like the drift rate was **divided** by $\cos\delta$ instead of multiplied. Stars at high declination move more slowly across the eyepiece, not faster.`,
      E: r`Far too large. Check the drift rate: $15''$ per second of time (not per minute), times $\cos\delta$, times 150 seconds.`,
    },
    takeaway: r`A star drifts 15″ per second of time times cos(declination), so timing a transit measures the field of view.`,
  },

  "usaaao-2015-first-round-q5": {
    solution: [
      r`The field of view is set by how big the detector is compared with the focal length. For small angles, $\text{FOV} \approx \dfrac{\text{detector width}}{\text{focal length}}$ in radians.`,
      r`Here that is $\dfrac{4.0\ \text{mm}}{20\ \text{mm}} = 0.2$ rad. Converting, $0.2 \times \dfrac{180^\circ}{\pi} \approx 11.5^\circ$.`,
      r`The closest choice is **10°**. (The aperture and pixel count do not affect the field of view; they matter for brightness and resolution.)`,
    ],
    wrongChoices: {
      A: r`Too small by an order of magnitude. The field is the sensor width divided by the focal length, $4/20 = 0.2$ radians, which is far more than one degree.`,
      B: r`Too small. Check the conversion from radians to degrees: $0.2$ rad is $0.2 \times 57.3^\circ$.`,
      D: r`Too large. The sensor is 4 mm across and the focal length 20 mm, so the angle is $0.2$ rad; make sure you did not use the 10 mm aperture in place of the focal length.`,
      E: r`Too large. A 20° field would need a sensor 7 mm wide with this focal length. Use width divided by focal length, then convert to degrees.`,
    },
    takeaway: r`Field of view in radians is detector size divided by focal length.`,
  },

  "usaaao-2015-first-round-q6": {
    solution: [
      r`The image scale is the field of view spread across the pixels. From the previous question the field is about $11.5^\circ$ across 1024 pixels.`,
      r`Convert to arcseconds: $11.5^\circ \times 3600 \approx 41{,}000''$. Then divide: $\dfrac{41{,}000''}{1024} \approx 40''$ per pixel.`,
    ],
    wrongChoices: {
      A: r`Too fine. The field is over $40{,}000''$ wide and there are only 1024 pixels, so each pixel must cover more than $10''$.`,
      C: r`Too coarse. Check the field of view: about $11.5^\circ$, which is $11.5 \times 3600$ arcseconds, spread over 1024 pixels.`,
      D: r`Far too coarse; that would be $\tfrac{1}{3}^\circ$ per pixel and a field of over $340^\circ$. Divide the field in arcseconds by 1024, not by something smaller.`,
      E: r`This is in arc**minutes** and is absurdly large, equal to $60^\circ$ per pixel. Convert the field to arcseconds and divide by the number of pixels.`,
    },
    takeaway: r`Image scale is the field of view in arcseconds divided by the number of pixels across it.`,
  },

  "usaaao-2015-first-round-q7": {
    solution: [
      r`Kepler's third law in years and AU is $P^2 = a^3$, so $a = P^{2/3}$.`,
      r`$6.44^{2/3}$: the cube root of 6.44 is about 1.86, and squaring that gives $a \approx 3.46$ AU.`,
      r`That puts the comet's average distance between Mars and Jupiter, which is right for a Jupiter-family comet.`,
    ],
    wrongChoices: {
      A: r`This is $6.44^2$, the value of $a^3$, not $a$. You still need to take the cube root.`,
      B: r`This is $6.44^{3/2}$, the law applied backwards as if $a = P^{3/2}$. Semi-major axis is the period to the power $2/3$.`,
      C: r`A period equal to the semi-major axis only happens at 1 AU. Elsewhere $P$ and $a$ differ, and here $a$ must be smaller than 6.44.`,
      E: r`This is the cube root of 6.44, which is $P^{1/3}$. The exponent should be $2/3$: cube root first, then square.`,
    },
    takeaway: r`Semi-major axis in AU is the period in years raised to the power 2/3.`,
  },

  "usaaao-2015-first-round-q8": {
    solution: [
      r`The **radial-velocity** method measures how fast the star is tugged back and forth by its planet. That speed depends directly on the planet's mass: a heavier planet makes the star wobble faster.`,
      r`From the wobble amplitude and period, plus the star's mass, you can solve for the planet's mass (strictly, $m \sin i$, since the tilt of the orbit is unknown). No other listed method gives mass so directly.`,
    ],
    wrongChoices: {
      B: r`Transit timing tells you when a planet crosses its star. Timing variations can hint at masses when several planets tug on each other, but that is indirect and only works in special systems.`,
      C: r`Microlensing measures how a planet's gravity bends background starlight. It gives a rough mass ratio for a one-off event that can never be repeated, so it is a much less direct handle on mass.`,
      D: r`Direct imaging shows the planet's brightness and position. Mass is then only **estimated** from models of how bright a planet of a given age should be.`,
      E: r`Proper motion is a star's slow drift across the sky. It is not an exoplanet detection technique at all.`,
    },
    takeaway: r`Radial-velocity wobbles scale with planet mass, so that method gives mass most directly.`,
  },

  "usaaao-2015-first-round-q9": {
    solution: [
      r`The **Tully-Fisher relation** applies to spiral galaxies: the faster a spiral **rotates**, the more **luminous** it is.`,
      r`This works because a faster rotation means more mass, and more mass means more stars and more light. Measuring the rotation speed (from the width of the 21 cm hydrogen line) then tells you the galaxy's true brightness, and comparing that with its apparent brightness gives its distance.`,
    ],
    wrongChoices: {
      A: r`Luminosity versus **velocity dispersion** is the Faber-Jackson relation, the equivalent rule for elliptical galaxies, whose stars swarm randomly rather than rotating in a disc.`,
      C: r`There is no standard distance relation linking a galaxy's radius to its metallicity. Tully-Fisher is about how bright a spiral is and how fast it spins.`,
      D: r`Metallicity is not part of the Tully-Fisher relation. Bigger galaxies do tend to be more metal-rich, but that is a different correlation.`,
      E: r`Mass and surface brightness are not the Tully-Fisher pair. The relation connects the total light output to the rotation speed of the disc.`,
    },
    takeaway: r`Tully-Fisher: a spiral galaxy's luminosity rises with its rotation speed, which makes it a distance indicator.`,
  },

  "usaaao-2015-first-round-q10": {
    solution: [
      r`Two stars orbit their common **centre of mass**, which sits closer to the heavier star, just like the balance point of a see-saw with a heavy child on one end.`,
      r`The balance condition is $m_A r_A = m_B r_B$, so $\dfrac{r_B}{r_A} = \dfrac{m_A}{m_B} = \dfrac{5}{1} = 5$.`,
      r`Star A, five times heavier, orbits **five times closer** to the centre of mass than Star B does.`,
    ],
    wrongChoices: {
      A: r`Equal distances would need equal masses. The heavier star sits closer to the balance point, so the ratio must be more than 1.`,
      B: r`Not quite. The distances are inversely proportional to the masses, $r_B/r_A = m_A/m_B$, and the mass ratio here is 5, not 3.`,
      D: r`Too large. The distance ratio equals the mass ratio directly ($5:1$); it is not doubled.`,
      E: r`This is the mass ratio **squared**. The centre-of-mass condition $m_A r_A = m_B r_B$ is linear in the masses, so no squaring is involved.`,
    },
    takeaway: r`In a binary, each star's distance from the centre of mass is inversely proportional to its mass.`,
  },

  "usaaao-2015-first-round-q11": {
    solution: [
      r`**Wien's law** gives the wavelength where a hot object shines brightest: $\lambda_{\max} = \dfrac{2.9 \times 10^{-3}\ \text{m·K}}{T}$.`,
      r`For $T = 5000$ K: $\lambda_{\max} = \dfrac{2.9 \times 10^{-3}}{5000} = 5.8 \times 10^{-7}$ m $= 580$ nm.`,
      r`One ångström is $0.1$ nm, so $580$ nm $= 5800$ Å, a yellow-orange wavelength, a little redder than the Sun's peak.`,
    ],
    wrongChoices: {
      A: r`This is ten times too short and would be extreme ultraviolet. Check the unit conversion: 1 nm is 10 Å, so multiply nanometres by 10 to get ångströms.`,
      C: r`This would need a temperature of about 6300 K, hotter than the Sun. Recompute $2.9 \times 10^{-3} / 5000$ and convert to ångströms.`,
      D: r`This is half the true value and would correspond to a 10,000 K star. Make sure you divided the Wien constant by 5000 K only once.`,
      E: r`Ten times too long, well into the infrared, corresponding to a 500 K object. Recheck the powers of ten in the conversion from metres to ångströms.`,
    },
    takeaway: r`Wien's law: peak wavelength = 2.9 × 10⁻³ m·K divided by temperature, and 1 nm = 10 Å.`,
  },

  "usaaao-2015-first-round-q12": {
    solution: [
      r`The back-and-forth shift over a year is **parallax**: as Earth moves around the Sun, nearby stars appear to slide against the distant background.`,
      r`The closer the star, the **bigger** its shift. In the diagram Star B moves the smaller distance between its two positions, so Star B is the more distant one.`,
    ],
    wrongChoices: {
      A: r`Look at how far each star shifts in the diagram. Star A's positions are further apart, and a larger parallax shift means a **nearer** star, not a farther one.`,
      C: r`If the stars were at the same distance they would shift by the same amount. The diagram shows two different shifts, so the distances differ.`,
      D: r`The diagram does give enough information: the size of each star's yearly shift is its parallax, and parallax alone ranks the distances.`,
    },
    takeaway: r`Bigger yearly parallax shift means a nearer star; the smaller shift belongs to the farther star.`,
  },

  "usaaao-2015-first-round-q13": {
    solution: [
      r`The parsec is defined so that distance and parallax are simple reciprocals: $d\,(\text{pc}) = \dfrac{1}{p\,('')}$.`,
      r`With $p = 0.25''$: $d = \dfrac{1}{0.25} = 4$ pc, which is about 13 light-years.`,
    ],
    wrongChoices: {
      A: r`Two parsecs would need a parallax of $0.5''$. Distance is $1/p$; check the reciprocal of 0.25.`,
      B: r`Half a light-year is closer than any star; even the nearest star is over four light-years away. And the parallax formula gives parsecs, not light-years.`,
      C: r`Two light-years is still nearer than the nearest star, and the unit is wrong: $1/p$ gives the distance in **parsecs**.`,
      E: r`This is the parallax value used the wrong way round. Distance in parsecs is $1$ **divided by** the parallax, not the parallax times something.`,
    },
    takeaway: r`Distance in parsecs is one over the parallax in arcseconds.`,
  },

  "usaaao-2015-first-round-q14": {
    solution: [
      r`Being on the **main sequence** means one specific thing: the star is fusing **hydrogen into helium** in its core.`,
      r`Four hydrogen nuclei end up as one helium nucleus that weighs slightly less, and the missing mass is released as energy ($E = mc^2$). That is what powers the Sun and every other main-sequence star.`,
    ],
    wrongChoices: {
      A: r`Chemical burning releases far too little energy. If the Sun were made of coal and oxygen it would burn out in a few thousand years.`,
      B: r`Gravitational contraction powers a star only **before** it reaches the main sequence, and it could keep the Sun shining for just tens of millions of years, not billions.`,
      D: r`Fusing helium into carbon and oxygen happens in **giant** stars after the core hydrogen is gone, not on the main sequence.`,
      E: r`Fission splits heavy nuclei like uranium. Stars contain almost none of those; they release energy by **fusing** light nuclei together.`,
    },
    takeaway: r`Main-sequence stars shine by fusing hydrogen into helium in their cores.`,
  },

  "usaaao-2015-first-round-q15": {
    solution: [
      r`A star's luminosity depends on its surface area and its temperature: $L = 4\pi R^2 \sigma T^4$, so $L \propto R^2 T^4$.`,
      r`Star A has twice the radius, giving a factor of $2^2 = 4$, and half the temperature, giving a factor of $\left(\tfrac{1}{2}\right)^4 = \tfrac{1}{16}$.`,
      r`Combined: $\dfrac{L_A}{L_B} = 4 \times \dfrac{1}{16} = \dfrac{1}{4}$. Star A is **four times less luminous**; the temperature drop outweighs the size gain.`,
    ],
    wrongChoices: {
      A: r`This counts only the radius factor of $2^2 = 4$ and ignores the temperature. Halving the temperature cuts the luminosity by $2^4 = 16$, which more than cancels the size gain.`,
      B: r`This counts only the temperature factor, $(1/2)^4 = 1/16$, and ignores the doubled radius, which multiplies the luminosity by 4.`,
      C: r`Sixteen times brighter would need the star to be **hotter** by a factor of 2, but star A is cooler. Temperature enters as $T^4$, and cooling reduces luminosity.`,
      D: r`The two effects do not cancel: doubling the radius gives $\times 4$, halving the temperature gives $\times 1/16$, and $4 \times 1/16 \neq 1$.`,
    },
    takeaway: r`Luminosity goes as R²T⁴, so temperature changes matter far more than size changes.`,
  },

  "usaaao-2015-first-round-q16": {
    solution: [
      r`Two main-sequence stars of the same spectral class have the same **absolute magnitude**, so any difference in apparent magnitude comes purely from distance.`,
      r`Star B is $17 - 12 = 5$ magnitudes brighter, which is a factor of 100 in brightness. Brightness follows the inverse-square law, so a factor of 100 in brightness means a factor of $\sqrt{100} = 10$ in distance.`,
      r`Star B is ten times **closer** than Star A: $1000 / 10 = 100$ pc.`,
    ],
    wrongChoices: {
      A: r`A hundred times closer than Star A would make Star B $10{,}000$ times brighter, a difference of 10 magnitudes, not 5.`,
      C: r`Star B looks **brighter** than Star A (a smaller magnitude), so it must be closer, not ten times further away.`,
      D: r`Twenty times closer would make Star B 400 times brighter, about 6.5 magnitudes. A 5-magnitude difference is exactly a factor of 10 in distance.`,
      E: r`Star B is the brighter star, so it is the nearer one. This choice puts it a hundred times further away than Star A.`,
    },
    takeaway: r`Same absolute magnitude plus a 5-magnitude difference means a factor of 10 in distance.`,
  },

  "usaaao-2015-first-round-q17": {
    solution: [
      r`Vacuum energy is a property of space itself: every cubic centimetre of empty space carries the same amount, no matter how much the universe has stretched.`,
      r`So while matter thins out as the universe expands (its density falls as the cube of the scale factor), dark energy's density **stays constant**. Its value at the time of the cosmic microwave background was the same as today, and the ratio is exactly **1**.`,
      r`The numbers given are a distraction; only the fact that dark energy is vacuum energy matters.`,
    ],
    wrongChoices: {
      A: r`A ratio less than 1 would mean dark energy was less dense in the past. Vacuum energy has a fixed density per unit volume, so it neither grows nor shrinks as space expands.`,
      B: r`This would require dark energy to have been denser in the early universe. That is how **matter** and radiation behave as you look back in time, not vacuum energy.`,
      D: r`This is roughly the ratio of two of the numbers listed, but the question asks about dark energy at two different times, and vacuum energy's density does not change with time.`,
      E: r`Halving would mean dark energy dilutes as space expands. It does not: a constant energy per volume is exactly what "vacuum energy" means.`,
    },
    takeaway: r`Vacuum energy keeps a constant density as the universe expands, unlike matter and radiation.`,
  },

  "usaaao-2015-first-round-q18": {
    solution: [
      r`For a small redshift the recession speed is $v \approx zc = 0.03 \times 3.0 \times 10^5\ \text{km/s} = 9000$ km/s.`,
      r`Hubble's law says $v = H_0 d$, and the **Hubble time** is $t_H = 1/H_0 = d/v$: roughly how long the galaxy has taken to get where it is at its present speed.`,
      r`Convert the distance: $1.3 \times 10^8$ pc $\times 3.086 \times 10^{13}$ km/pc $= 4.0 \times 10^{21}$ km. Then $t_H = \dfrac{4.0 \times 10^{21}}{9000} = 4.5 \times 10^{17}$ s, and dividing by $3.16 \times 10^7$ s/yr gives about **$1.4 \times 10^{10}$ years**.`,
    ],
    wrongChoices: {
      B: r`The number is right but the unit is wrong. Dividing kilometres by km/s gives **seconds**, and $1.41 \times 10^{10}$ s is only about 450 years; the conversion to years was skipped.`,
      C: r`About ten times too short. Check the conversion of parsecs to kilometres ($1$ pc $\approx 3.1 \times 10^{13}$ km) and of seconds to years.`,
      D: r`Far too short; the universe is vastly older than a human lifetime. There is a powers-of-ten slip in the distance conversion.`,
      E: r`Wrong unit and wrong size. Compute $d/v$ in seconds first, then divide by the number of seconds in a year.`,
    },
    takeaway: r`The Hubble time is 1/H₀ = d/v, and with v ≈ zc it comes out near 14 billion years.`,
  },

  "usaaao-2015-first-round-q19": {
    solution: [
      r`A star is a balance: gravity pulls every layer inward, and **pressure** from the hot interior pushes outward. This balance is called **hydrostatic equilibrium**.`,
      r`That outward pressure comes from the hot gas and from the radiation streaming out of the core. Among the choices, **radiation pressure** is the outward pressure that opposes collapse in an ordinary main-sequence star (and in the most massive stars it dominates).`,
    ],
    wrongChoices: {
      B: r`Heat is energy, not a force. It is the **pressure** produced by the hot gas and radiation that pushes back against gravity.`,
      C: r`Neutrinos slip straight out of the star almost without interacting, so they cannot push on anything. They carry energy away but provide no support.`,
      D: r`Electron degeneracy pressure is what holds up **white dwarfs**. A main-sequence star is far too hot and diffuse for degeneracy to matter.`,
      E: r`Neutron degeneracy pressure supports **neutron stars**, the ultra-dense remains of supernovae. It plays no role in a normal star.`,
    },
    takeaway: r`Main-sequence stars are held up by the outward pressure of hot gas and radiation; degeneracy pressure supports only stellar remnants.`,
  },

  "usaaao-2015-first-round-q20": {
    solution: [
      r`The line has shifted from $656.3$ nm to $662.5$ nm, a change of $\Delta\lambda = 6.2$ nm. The Doppler formula gives $v = c\,\dfrac{\Delta\lambda}{\lambda_0} = 3.0 \times 10^8 \times \dfrac{6.2}{656.3} \approx 2.83 \times 10^6$ m/s.`,
      r`The wavelength got **longer** (a redshift), so the star is moving **away** from Earth.`,
      r`This exam's sign convention counts a velocity **away** from Earth as negative, so the key gives $-2.83 \times 10^6$ m/s. (Many textbooks use the opposite sign, with recession positive; the physics is the same, so always state your convention.)`,
    ],
    wrongChoices: {
      A: r`The size of the speed is right, but the sign does not match the convention this exam uses, in which motion away from Earth is counted as negative. The line moved to a longer wavelength, so the star is receding.`,
      C: r`This is just the fractional shift $\Delta\lambda/\lambda_0 = 0.00945$. To get a speed you must multiply it by the speed of light.`,
      D: r`This is the fractional shift $\Delta\lambda/\lambda_0$ with a sign attached, not a speed. Multiply by $c = 3 \times 10^8$ m/s.`,
      E: r`A thousand times too small. The fractional shift is nearly 1%, and 1% of the speed of light is millions of metres per second.`,
    },
    takeaway: r`Radial velocity is c × Δλ/λ₀; longer wavelength means the source is receding, and the sign depends on the convention.`,
  },

  "usaaao-2015-first-round-q21": {
    solution: [
      r`M-type stars are small, cool red dwarfs. Their gas is cool enough to be very opaque, which makes it hard for radiation to carry energy outward.`,
      r`When radiation cannot do the job, the gas moves instead: hot blobs rise and cool blobs sink. This is **convection**, and in the smallest M dwarfs it runs all the way from the core to the surface.`,
    ],
    wrongChoices: {
      A: r`Radiation carries energy through the deep interiors of hotter, Sun-like and more massive stars. A red dwarf's cool, opaque gas blocks it, so another mechanism takes over.`,
      B: r`Conduction (heat passing between neighbouring particles) is negligible in normal stellar gas. It only matters in the ultra-dense interiors of white dwarfs.`,
      D: r`Contraction releases gravitational energy but it is not a way of **moving** heat from one place to another, and a main-sequence M star is not contracting.`,
      E: r`Collapse is not a heat-transfer process. It describes a star's core giving way at the end of its life, nothing like the steady interior of a red dwarf.`,
    },
    takeaway: r`Cool, opaque red dwarfs move their heat by convection, and the smallest are convective throughout.`,
  },

  "usaaao-2015-first-round-q22": {
    solution: [
      r`For a planet much lighter than its star, the star's wobble speed $K$ is linked to the planet's minimum mass by $m_p \sin i = K \left(\dfrac{P}{2\pi G}\right)^{1/3} M_*^{2/3}$.`,
      r`Put everything in SI units: $P = 9.2$ days $= 7.95 \times 10^5$ s, $M_* = 1.2 \times 1.99 \times 10^{30} = 2.39 \times 10^{30}$ kg, $K = 32$ m/s.`,
      r`Then $\left(\dfrac{P}{2\pi G}\right)^{1/3} = \left(\dfrac{7.95 \times 10^5}{4.19 \times 10^{-10}}\right)^{1/3} \approx 1.24 \times 10^5$ and $M_*^{2/3} \approx 1.79 \times 10^{20}$, so $m_p \sin i \approx 32 \times 1.24 \times 10^5 \times 1.79 \times 10^{20} \approx 7 \times 10^{26}$ kg.`,
      r`That is about 0.4 Jupiter masses. The closest choice is $7.5 \times 10^{26}$ kg.`,
    ],
    wrongChoices: {
      B: r`Too small by about a factor of six. Check that the period was converted to **seconds** and that the star's mass carries the factor of 1.2.`,
      C: r`This is about ten times too large; it would be more than three Jupiter masses, which would make the star wobble far faster than 32 m/s. Recheck the powers of ten.`,
      D: r`This is asteroid-sized, hopelessly too small. A body that light could not move a star by 32 m/s at all. Look for a lost factor of $10^{11}$, probably from $G$.`,
      E: r`Too large by about a factor of four; that would be nearly two Jupiter masses. Recompute $(P/2\pi G)^{1/3}$ and $M_*^{2/3}$ carefully.`,
    },
    takeaway: r`A star's wobble amplitude K, its mass and the period give the planet's minimum mass m sin i.`,
  },

  "usaaao-2015-first-round-q23": {
    solution: [
      r`A **Hohmann transfer** is half of an ellipse touching both orbits. Its semi-major axis is the average of the two radii: $a = \dfrac{1.0 + 0.7}{2} = 0.85$ AU.`,
      r`The trip takes half a period of that ellipse: $t = \tfrac{1}{2} \times 0.85^{3/2} \approx 0.39$ years.`,
      r`Venus's year is $0.7^{3/2} \approx 0.59$ years, so during the trip Venus sweeps through $\dfrac{0.39}{0.59} \times 360^\circ \approx 241^\circ$ of its orbit. The launch must be timed so that this $241^\circ$ of travel brings Venus to the meeting point exactly as the probe arrives $180^\circ$ from Earth; that is the phase angle the answer key quotes.`,
    ],
    wrongChoices: {
      A: r`This is how far **Earth** moves during the transfer ($0.39$ of a year, about $141^\circ$), which is not the angle asked for. The timing depends on Venus's motion, since Venus is what the probe must meet.`,
      B: r`Far too small. Venus moves through more than half a lap during a 0.39-year transfer, so the phase angle involves a large fraction of 360°.`,
      C: r`Not quite. Compute the transfer time from the half-period of an ellipse with $a = 0.85$ AU, then find how far Venus travels in that time at its $0.59$-year period.`,
      E: r`Too large. Venus's motion during the 0.39-year transfer is $(0.39/0.59) \times 360^\circ$, which is well short of a full circle.`,
    },
    takeaway: r`A Hohmann transfer takes half the period of the connecting ellipse, and launch timing comes from how far the target moves in that time.`,
  },

  "usaaao-2015-first-round-q24": {
    solution: [
      r`A planet warms up until it radiates away exactly the sunlight it absorbs. Balancing the two gives $T = T_\odot \sqrt{\dfrac{R_\odot}{2d}}\,(1 - A)^{1/4}$, which in solar-system units is $T \approx 279\ \text{K} \times \dfrac{(1 - A)^{1/4}}{\sqrt{d_{\text{AU}}}}$.`,
      r`For Mars, $A = 0.25$ and $d = 1.5$ AU: $(0.75)^{1/4} \approx 0.93$ and $\sqrt{1.5} \approx 1.22$.`,
      r`So $T \approx 279 \times \dfrac{0.93}{1.22} \approx 212$ K. (Mars's real average is a little colder, about 210 K, because it has almost no greenhouse effect.)`,
    ],
    wrongChoices: {
      A: r`Warmer than Earth's own equilibrium temperature (about 255 K), which cannot be right for a planet 1.5 times further from the Sun. Distance lowers the temperature as $1/\sqrt{d}$.`,
      C: r`Too cold. The albedo correction is $(1 - A)^{1/4}$, a gentle fourth root, not $(1 - A)$ itself. Reflecting 25% of the light only lowers the temperature by about 7%.`,
      D: r`This is what you get with **no albedo** at all: $279 / \sqrt{1.5} \approx 228$ K. Mars reflects a quarter of the sunlight, which cools it a little further.`,
      E: r`Too warm; this would need Mars to be nearer the Sun than it is. Make sure you divided by $\sqrt{1.5}$, not by something smaller.`,
    },
    takeaway: r`Equilibrium temperature is about 279 K × (1 − A)^¼ ÷ √(distance in AU).`,
  },

  "usaaao-2015-first-round-q25": {
    solution: [
      r`The **vis-viva equation** links speed, distance and orbit size: $v^2 = GM\left(\dfrac{2}{r} - \dfrac{1}{a}\right)$.`,
      r`The distance is from Earth's **centre**: $r = 6371 + 300 = 6671$ km $= 6.67 \times 10^6$ m. With $GM_\oplus = 3.99 \times 10^{14}$ m³/s² and $v = 8300$ m/s, $\dfrac{v^2}{GM} = 1.73 \times 10^{-7}$ m⁻¹ and $\dfrac{2}{r} = 3.00 \times 10^{-7}$ m⁻¹.`,
      r`So $\dfrac{1}{a} = 3.00 \times 10^{-7} - 1.73 \times 10^{-7} = 1.27 \times 10^{-7}$, giving $a \approx 7.9 \times 10^6$ m, about **7900 km**. The orbit is a mild ellipse, since a circular orbit at that height would need only 7.7 km/s.`,
    ],
    wrongChoices: {
      A: r`Impossibly small; a semi-major axis smaller than Earth's radius would mean an orbit inside the planet. Remember $r$ is measured from Earth's centre, so add Earth's 6371 km radius to the 300 km altitude.`,
      B: r`This is about the altitude, not the semi-major axis. The orbit's size is measured from Earth's centre and must be larger than Earth's 6371 km radius.`,
      C: r`Too large by about a factor of two. Check the vis-viva rearrangement: $1/a = 2/r - v^2/GM$, and make sure you did not drop the 2.`,
      E: r`Smaller than Earth's radius, so the satellite would be underground. A common slip is using the altitude alone or halving the result; $a$ must exceed 6371 km.`,
    },
    takeaway: r`Vis-viva, v² = GM(2/r − 1/a), gives the orbit size from one speed and one distance measured from the planet's centre.`,
  },

  "usaaao-2015-first-round-q26": {
    solution: [
      r`The Moon can only occult stars that lie close to its path, which hugs the **ecliptic**. It is full on December 25, meaning it is opposite the Sun then.`,
      r`In late December the Sun is at RA $\approx 18$ h, so the full Moon is at RA $\approx 6$ h. The Moon moves east about 50 minutes of RA per day, so on the night of December 23-24, about a day and a half earlier, it is near RA $\approx 4.7$ h.`,
      r`That is right on top of **Aldebaran** (RA 4 h 37 m, Dec $+16^\circ$), which sits just off the ecliptic in Taurus. It was indeed occulted that night.`,
    ],
    wrongChoices: {
      B: r`Pollux is at RA 7 h 45 m, which the Moon only reaches about three days **after** full Moon, at the end of December. It also lies too far north of the ecliptic for the Moon to cover it.`,
      C: r`Regulus is at RA 10 h, which the Moon does not reach until around December 30, nearly a week after the date in question.`,
      D: r`Spica, at RA 13 h 25 m, is where the Moon would be about ten days before or after this date, near last quarter, not two days before full.`,
      E: r`Antares, at RA 16.5 h, lies close to the Sun's position in December. The Moon is near Antares around **new** Moon in December, not two days before full.`,
    },
    takeaway: r`Two days before full, the Moon sits a little west of the point opposite the Sun, and in December that is Taurus and Aldebaran.`,
  },

  "usaaao-2015-first-round-q27": {
    solution: [
      r`A **solar day** is slightly longer than a **sidereal day**, because after one full rotation the planet has moved a little along its orbit and has to turn a bit more to face the Sun again.`,
      r`The two are related by $\dfrac{1}{T_{\text{sid}}} = \dfrac{1}{T_{\text{sol}}} + \dfrac{1}{T_{\text{year}}}$. In minutes: $T_{\text{sol}} = 1480$ min and $T_{\text{year}} = 687 \times 1440 = 989{,}280$ min.`,
      r`$\dfrac{1}{T_{\text{sid}}} = \dfrac{1}{1480} + \dfrac{1}{989{,}280} = 6.767 \times 10^{-4}$ min⁻¹, so $T_{\text{sid}} \approx 1477.8$ min, about **24 h 38 min**; the closest choice is 24 h 37 min.`,
    ],
    wrongChoices: {
      A: r`This is **Earth's** sidereal day. Mars rotates more slowly than Earth, so its sidereal day must be a bit over 24 h 30 min.`,
      B: r`Too short. The sidereal day is only a couple of minutes shorter than the solar day, since Mars moves just half a degree along its orbit each day.`,
      D: r`This is the solar day itself. The sidereal day is **shorter** than the solar day, by about $T_{\text{sol}}^2 / T_{\text{year}}$, roughly two minutes here.`,
      E: r`This is **longer** than the solar day, but the sidereal day is always the shorter of the two for a planet that spins in the same direction it orbits.`,
    },
    takeaway: r`A planet's sidereal day is a little shorter than its solar day, by about (solar day)² ÷ (year).`,
  },

  "usaaao-2015-first-round-q28": {
    solution: [
      r`From the **equator**, the celestial equator passes straight through the zenith, so a star overhead has **declination 0°**.`,
      r`At **local noon** the meridian points at the Sun's right ascension. On the June solstice the Sun is at RA **6 h**, so the meridian (and the star on it at the zenith) is at RA 6 h.`,
      r`The star is therefore at RA 6 h, Dec 0°. (The Sun itself is at Dec $+23.4^\circ$ that day, so it is not the object at the zenith.)`,
    ],
    wrongChoices: {
      A: r`RA 0 h is where the Sun sits at the **March equinox**, not the June solstice. The Sun's RA advances 6 h per season.`,
      B: r`Declination $90^\circ$ is the north celestial pole, which from the equator sits on the horizon, never at the zenith.`,
      D: r`RA 12 h is the Sun's position at the **September equinox**. On the June solstice the Sun, and so the noon meridian, is at 6 h.`,
      E: r`Declination $90^\circ$ is the celestial pole, which lies on the horizon for an observer at the equator. Nothing at the pole can be overhead there.`,
    },
    takeaway: r`The Sun's RA is 0 h, 6 h, 12 h and 18 h at the March equinox, June solstice, September equinox and December solstice.`,
  },

  "usaaao-2015-first-round-q29": {
    solution: [
      r`Use Kepler's third law with the star's mass: $a^3 = M P^2$ in solar masses, years and AU. So $a^3 = 5 \times 14^2 = 980$, giving $a \approx 9.9$ AU, about 10 AU.`,
      r`Edge-on ($90^\circ$ inclination) the orbit appears as a line whose length is the full diameter, $2a \approx 20$ AU.`,
      r`Convert the distance: 40 light-years $\approx 12.3$ pc. An object of $s$ AU at $d$ pc spans $s/d$ arcseconds, so the orbit spans $\dfrac{20}{12.3} \approx 1.6''$.`,
    ],
    wrongChoices: {
      A: r`Too small by a factor of about five. Check that the star's mass (5 solar masses) is included in Kepler's law, $a^3 = MP^2$, which makes the orbit larger.`,
      B: r`This is the **semi-major axis** in arcseconds, but the question asks for the projected **diameter**, which is twice that.`,
      D: r`Too large. Make sure you converted 40 light-years to parsecs (divide by 3.26) before dividing the size in AU by the distance in parsecs.`,
      E: r`Not quite. Recompute $a$ from $a^3 = 5 \times 14^2$, double it for the diameter, and divide by the distance of about 12.3 pc.`,
    },
    takeaway: r`Kepler's law with the star's mass gives the orbit size, and size in AU ÷ distance in pc gives the angle in arcseconds.`,
  },

  "usaaao-2015-first-round-q30": {
    solution: [
      r`To see the orbit you need to separate the two ends of it, which are a full diameter apart: $2 \times 0.24'' = 0.48''$. In radians that is $\dfrac{0.48}{206265} \approx 2.3 \times 10^{-6}$ rad.`,
      r`The Rayleigh criterion gives the aperture needed for that resolution: $D = \dfrac{1.22\,\lambda}{\theta} = \dfrac{1.22 \times 1.0 \times 10^{-6}}{2.3 \times 10^{-6}} \approx 0.52$ m.`,
    ],
    wrongChoices: {
      A: r`Too small; a 13 cm telescope at 1000 nm can only resolve about $1.9''$, four times coarser than needed. Check the conversion of arcseconds to radians ($206{,}265''$ per radian).`,
      C: r`This is what you get using the semi-major axis ($0.24''$) instead of the orbit's full diameter. Resolving the orbit means separating its two extremes, $0.48''$ apart.`,
      D: r`Too large. The needed angle is $0.48''$; a 3.1 m telescope at 1000 nm resolves down to $0.08''$, far finer than required. Recheck $D = 1.22\lambda/\theta$.`,
      E: r`Too large. With $\theta = 0.48''$ converted to radians and $\lambda = 10^{-6}$ m, $1.22\lambda/\theta$ comes out well under a metre.`,
    },
    takeaway: r`Rayleigh: D = 1.22 λ / θ, with θ in radians and 206,265 arcseconds per radian.`,
  },
};
