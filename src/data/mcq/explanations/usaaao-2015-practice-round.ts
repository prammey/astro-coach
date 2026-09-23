import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2015 Practice Round questions,
// keyed by question ID. `r` is String.raw, so LaTeX can be written with
// single backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2015-practice-round-q1": {
    solution: [
      r`The universe is expanding, so distant galaxies are moving away from us, and the farther away they are, the faster they recede.`,
      r`Light from something moving away gets stretched to **longer wavelengths**. For visible light that means towards the red end of the spectrum, which is why this is called **redshift**.`,
      r`Edwin Hubble's discovery that almost every distant galaxy is redshifted was the first evidence that the universe is expanding.`,
    ],
    wrongChoices: {
      B: r`Shorter wavelengths (a blueshift) happen when a source moves **towards** us. Only a handful of very nearby galaxies, like Andromeda, do that; the distant ones are all receding.`,
      C: r`A photon's energy is $E = hc/\lambda$, so stretching its wavelength **lowers** its energy. Light from distant galaxies arrives with less energy per photon, not more.`,
      D: r`Intensity falls off with distance (the inverse-square law) and the expansion dims distant galaxies even further. Their light is fainter, never brighter, by the time it reaches us.`,
      E: r`Expansion does not polarise light. Galaxy light is a jumble of starlight with all sorts of polarisations, and the stretching of space does nothing to line them up.`,
    },
    takeaway: r`The expanding universe stretches light from distant galaxies to longer, redder wavelengths.`,
  },

  "usaaao-2015-practice-round-q2": {
    solution: [
      r`Look at the two numbers. **70 solar masses** is enormous: only one star in millions is anywhere near that heavy. **20 solar radii** is also very large.`,
      r`Stars are sorted into luminosity classes by how big and bright they are for their temperature. A star that is both extremely massive and tens of times wider than the Sun belongs to the very top class: the **supergiants**, the most massive and luminous stars there are.`,
      r`Familiar examples are Rigel and Deneb, blue supergiants of a few tens of solar masses, and Betelgeuse, a red supergiant.`,
    ],
    wrongChoices: {
      A: r`Main-sequence stars run from tiny red dwarfs up to a few dozen solar masses, but the label is for ordinary, hydrogen-burning stars of modest size. The question wants you to classify by size and mass, and 70 solar masses with a 20-solar-radius body is far beyond an ordinary main-sequence star.`,
      B: r`Giants are stars of roughly Sun-like mass that have swollen up late in life, like Arcturus or Aldebaran. They are big, but they are **not** massive; a 70-solar-mass star is in a different league.`,
      C: r`A dwarf is the small, ordinary end of the scale, like the Sun (a yellow dwarf) or Proxima (a red dwarf). Twenty solar radii and seventy solar masses is the opposite of small.`,
      D: r`A neutron star is a collapsed stellar corpse only about 10 km across, with a mass of one to two Suns. Twenty solar radii and seventy solar masses could not be more different.`,
    },
    takeaway: r`Tens of solar masses and a radius tens of times the Sun's mark the supergiant class, the most extreme stars.`,
  },

  "usaaao-2015-practice-round-q3": {
    solution: [
      r`At the centre is the **core**, where fusion happens. It is hot and dense enough for hydrogen to fuse into helium.`,
      r`Around the core is the **radiative zone**. Energy crawls outward here as photons that are absorbed and re-emitted countless times, taking of order a hundred thousand years to get through.`,
      r`The outer layer is the **convective zone**, where the gas is cool enough to be opaque, so hot blobs rise and cool blobs sink, like water boiling in a pot. Above it is the visible surface, the photosphere.`,
    ],
    wrongChoices: {
      A: r`Mantle and crust are layers of a **rocky planet** like Earth. The Sun is a ball of gas with no solid layers at all.`,
      B: r`The two outer zones are swapped. Convection happens in the **outermost** part of the Sun's interior, where the gas is cooler, and the radiative zone lies below it, just outside the core.`,
      D: r`The core is missing, and the chromosphere is part of the Sun's **atmosphere** above the visible surface, not part of its interior. The order is also reversed.`,
      E: r`This list runs from the outside in, and even then it is wrong, since the core belongs at the centre, not the outside. Read the question carefully: it asks from the centre outward.`,
    },
    takeaway: r`From the centre out, the Sun's interior is core, radiative zone, then convective zone.`,
  },

  "usaaao-2015-practice-round-q4": {
    solution: [
      r`From latitude $\phi$, the south celestial pole is buried $\phi$ below the southern horizon. Any star within $\phi$ of that pole never climbs above the horizon.`,
      r`So a star never rises if its declination is below $-(90^\circ - \phi)$. For Los Angeles that is $-(90^\circ - 34.05^\circ) = -55.95^\circ$.`,
      r`Only $-60^\circ$ is below that limit, so a star at declination $-60^\circ$ is permanently hidden from LA. The southernmost of the choices is the one to pick.`,
    ],
    wrongChoices: {
      A: r`A star at $+60^\circ$ is the opposite case: it is within $34^\circ$ of the **north** celestial pole, so from LA it never even sets. It is circumpolar, always above the horizon.`,
      B: r`A star at $+45^\circ$ rises, passes high overhead, and sets each day from LA. Northern declinations are the easy ones to see from a northern-hemisphere city.`,
      C: r`A star on the celestial equator ($0^\circ$) rises due east and sets due west from anywhere on Earth except the poles. It is up for about twelve hours a day from LA.`,
      D: r`A star at $-45^\circ$ does peek above the southern horizon from LA, reaching a maximum altitude of $90^\circ - 34.05^\circ - 45^\circ \approx 11^\circ$. Low, but visible. The limit for never rising is further south than this.`,
    },
    takeaway: r`From latitude φ, stars with declination below −(90° − φ) never rise, and stars above +(90° − φ) never set.`,
  },

  "usaaao-2015-practice-round-q5": {
    solution: [
      r`**Kepler's third law** links a planet's orbital period to the size of its orbit. In years and astronomical units it takes the simple form $P^2 = a^3$.`,
      r`With $a = 3$ AU: $P^2 = 3^3 = 27$, so $P = \sqrt{27} \approx 5.2$ years.`,
      r`Sanity check: Mars at 1.5 AU takes 1.9 years and Jupiter at 5.2 AU takes 11.9 years, so about 5 years for 3 AU fits neatly in between.`,
    ],
    wrongChoices: {
      A: r`Nine is $3^2$, which is $P^2$ only if you forget the cube. Kepler's law is $P^2 = a^3$: cube the distance first, then take the square root.`,
      C: r`Twenty-seven is $a^3$, which equals $P^2$, not $P$. You still need to take the square root to get the period itself.`,
      D: r`This is $3^{2/3}$, the result of applying the law backwards, as if it were $a^2 = P^3$. The period should come out **larger** than the semi-major axis in these units, not smaller.`,
      E: r`A period equal to the semi-major axis only happens at 1 AU, where $1^2 = 1^3$. Anywhere further out the period grows faster than the distance.`,
    },
    takeaway: r`In years and AU, Kepler's third law is simply P² = a³.`,
  },

  "usaaao-2015-practice-round-q6": {
    solution: [
      r`A planetary nebula is the glowing outer layers puffed off by a dying Sun-like star. What remains at the centre is the star's exposed core, a **white dwarf**.`,
      r`A white dwarf holds itself up with electron degeneracy pressure, and that has a limit. Above about **1.4 solar masses**, the **Chandrasekhar limit**, the electrons can no longer resist gravity and the object collapses.`,
      r`So the most massive white dwarf that can exist is about 1.4 solar masses.`,
    ],
    wrongChoices: {
      B: r`The object is right, but the mass is not. Three solar masses is roughly the upper limit for a **neutron star**, not for a white dwarf. The white-dwarf limit, found by Chandrasekhar, is a good deal smaller.`,
      C: r`Neutron stars are born in **supernova** explosions of massive stars, not in planetary nebulae. A planetary nebula's gentle ejection leaves behind a much less compact object.`,
      D: r`A neutron star is the remnant of a core-collapse supernova, not of a planetary nebula, so both parts of this choice are off. Planetary nebulae come from low-mass stars that never explode.`,
      E: r`A planetary nebula has nothing to do with planets; the name is a historical accident because they looked like planets in small telescopes. Nothing about a solar system is left behind.`,
    },
    takeaway: r`A planetary nebula leaves a white dwarf, which can weigh at most 1.4 solar masses, the Chandrasekhar limit.`,
  },

  "usaaao-2015-practice-round-q7": {
    solution: [
      r`For a body moving on a nearly circular orbit, the orbital angular momentum is $L = m v r$: mass times speed times distance from the centre.`,
      r`Convert to SI units first. Speed: $13.1$ km/s $= 1.31 \times 10^4$ m/s. Distance: $7.9 \times 10^8$ km $= 7.9 \times 10^{11}$ m.`,
      r`Now multiply: $L = (1.9 \times 10^{27})(1.31 \times 10^4)(7.9 \times 10^{11}) \approx 2.0 \times 10^{43}$ J·s.`,
    ],
    wrongChoices: {
      A: r`This is about half the true value. Check each conversion and multiply $m$, $v$ and $r$ once each: $1.9 \times 1.31 \times 7.9 \approx 20$, then add up the powers of ten.`,
      B: r`This is $m v^2 r$, with the speed counted twice; that is an energy times a distance, not an angular momentum. Angular momentum uses the speed only once: $L = mvr$.`,
      C: r`This is $m v r^2$, with the distance counted twice. Angular momentum is $mvr$, with $r$ appearing just once.`,
      E: r`This is far too small, a sign that the kilometres were not converted to metres. Both the speed and the semi-major axis need a factor of $10^3$ to become SI units.`,
    },
    takeaway: r`Orbital angular momentum is L = mvr, and everything must be in metres, kilograms and seconds first.`,
  },

  "usaaao-2015-practice-round-q8": {
    solution: [
      r`First find each planet's year in Earth hours. Planet A: $20 \times 240 = 4800$ h. Planet B: $38 \times 220 = 8360$ h. An Earth year is $365.25 \times 24 \approx 8766$ h.`,
      r`So $P_A = 4800/8766 \approx 0.548$ Earth years and $P_B = 8360/8766 \approx 0.954$ Earth years.`,
      r`The **synodic period** is the time between successive line-ups of the two planets. Because the inner planet laps the outer one, $\dfrac{1}{S} = \dfrac{1}{P_A} - \dfrac{1}{P_B} = 1.826 - 1.048 = 0.778$, giving $S \approx 1.29$, or about **1.3 Earth years**.`,
    ],
    wrongChoices: {
      A: r`Too short. Make sure you converted each planet's year to Earth years using $365.25 \times 24$ hours, and then used $1/S = 1/P_A - 1/P_B$ with the **inner** (faster) planet first.`,
      B: r`Close, but the arithmetic gives a slightly longer synodic period. Recompute $1/P_A - 1/P_B$ with $P_A \approx 0.548$ yr and $P_B \approx 0.954$ yr, then invert.`,
      D: r`Somewhat too long. A common slip is rounding the periods too early; keep three significant figures through $1/P_A - 1/P_B$ before inverting.`,
      E: r`Too long. Check that you did not add the reciprocals: the synodic relation uses the **difference** $1/P_A - 1/P_B$, since the faster planet gains one lap on the slower one each synodic period.`,
    },
    takeaway: r`Synodic period comes from 1/S = 1/P_inner − 1/P_outer, once both periods are in the same units.`,
  },

  "usaaao-2015-practice-round-q9": {
    solution: [
      r`The **Kirkwood gaps** are empty lanes in the asteroid belt at particular distances from the Sun.`,
      r`They occur where an asteroid's orbital period would be a simple fraction of Jupiter's, such as 1/3 or 1/2. In such a **resonance** the asteroid meets Jupiter at the same point every few orbits, and the repeated tugs add up until the asteroid is nudged out of that orbit.`,
      r`Only **Jupiter** is massive enough and close enough to the belt to carve out gaps this way.`,
    ],
    wrongChoices: {
      A: r`Earth is far too light, at roughly 1/300 of Jupiter's mass, and orbits well inside the belt. Its gravitational nudges on asteroids are negligible in comparison.`,
      C: r`Saturn is big, but it is twice as far from the belt as Jupiter and has less than a third of its mass, so its resonances in the belt are far weaker. The named gaps line up with Jupiter's periods, not Saturn's.`,
      D: r`Uranus is a distant, comparatively light planet with only about 1/20 of Jupiter's mass. Its influence on the asteroid belt is tiny.`,
      E: r`Neptune sculpts gaps and resonances in the **Kuiper belt**, far beyond it, not in the asteroid belt between Mars and Jupiter.`,
    },
    takeaway: r`Kirkwood gaps are asteroid-belt lanes cleared by orbital resonances with Jupiter.`,
  },

  "usaaao-2015-practice-round-q10": {
    solution: [
      r`Escape speed is $v_{\text{esc}} = \sqrt{\dfrac{2GM}{R}}$, so it depends only on the ratio $\sqrt{M/R}$.`,
      r`Compare with Earth: the mass doubles and the radius is one-third, so $\dfrac{M/R}{M_\oplus/R_\oplus} = \dfrac{2}{1/3} = 6$. The escape speed therefore rises by $\sqrt{6} \approx 2.45$.`,
      r`Earth's escape speed is 11.2 km/s, so $v_{\text{esc}} = 11.2 \times 2.45 \approx 27.4$ km/s.`,
    ],
    wrongChoices: {
      A: r`This is Earth's escape speed divided by a factor, but a heavier, more compact planet must be **harder** to escape than Earth, not easier. Check whether you divided by the radius factor instead of multiplying: a radius of $1/3$ **raises** $M/R$.`,
      B: r`This is Earth's own escape speed. Doubling the mass and shrinking the radius both make gravity at the surface stronger, so the answer must be larger than 11.2 km/s.`,
      C: r`Too small. Escape speed scales with $\sqrt{M/R}$: work out $M/R$ relative to Earth (a mass factor of 2 divided by a radius factor of $1/3$) before taking the square root.`,
      D: r`Not quite. The combined factor is $\sqrt{2 \div \tfrac{1}{3}}$; make sure you divide by one-third rather than multiplying by it, and take the square root of the whole ratio.`,
    },
    takeaway: r`Escape speed scales as √(M/R), so more mass or a smaller radius makes it harder to get away.`,
  },

  "usaaao-2015-practice-round-q11": {
    solution: [
      r`With no mass lost, the black hole has the combined mass: $3 + 3 = 6$ solar masses.`,
      r`A black hole's size is its **Schwarzschild radius**, $R_s = \dfrac{2GM}{c^2}$. For the Sun this works out to about $2.95$ km, and it grows in direct proportion to mass.`,
      r`So $R_s = 6 \times 2.95 \approx 17.7$ km.`,
    ],
    wrongChoices: {
      A: r`This is smaller than the Schwarzschild radius of a single solar mass (about 3 km), so it cannot be right for six solar masses. The radius grows in proportion to mass.`,
      B: r`This would be the radius for about 1.5 solar masses. Remember that the two neutron stars combine, and use the full merged mass in $R_s = 2GM/c^2$.`,
      C: r`This is the Schwarzschild radius of just **one** of the neutron stars (3 solar masses). The question says they merge, so the black hole has both masses together.`,
      E: r`This is astronomically too big, roughly the size of a planetary orbit. A stellar black hole is tiny, only tens of kilometres across; check the powers of ten in $2GM/c^2$.`,
    },
    takeaway: r`The Schwarzschild radius is about 3 km per solar mass and scales directly with mass.`,
  },

  "usaaao-2015-practice-round-q12": {
    solution: [
      r`First find how big the crater looks from Earth. A 2300 km feature at 54.6 million km spans an angle $\theta = \dfrac{2300}{54.6 \times 10^6} \approx 4.2 \times 10^{-5}$ radians.`,
      r`A telescope's smallest resolvable angle is set by diffraction, the **Rayleigh criterion**: $\theta = 1.22\,\dfrac{\lambda}{D}$.`,
      r`Solve for the aperture: $D = \dfrac{1.22 \lambda}{\theta} = \dfrac{1.22 \times 550 \times 10^{-9}}{4.2 \times 10^{-5}} \approx 1.6 \times 10^{-2}$ m, about **16 mm**. Even a small finder scope could, in principle, make out Hellas.`,
    ],
    wrongChoices: {
      A: r`Too large. The needed aperture is $D = 1.22\lambda/\theta$; check that you used the crater's full width in the same units as the distance when computing the angle $\theta$.`,
      B: r`Too large. Recompute the angular size $\theta = 2300 / (54.6 \times 10^6)$ radians and then $D = 1.22 \lambda / \theta$ with $\lambda = 550 \times 10^{-9}$ m.`,
      D: r`Too small; a telescope this size could not separate the crater's edges at 550 nm. Make sure the Rayleigh factor of 1.22 is included and that the wavelength is in metres.`,
      E: r`Too small. Diffraction limits any aperture this small to a coarser angle than the crater's. Redo $D = 1.22\lambda/\theta$ carefully with $\theta$ in radians.`,
    },
    takeaway: r`Resolution is set by the Rayleigh criterion θ = 1.22 λ / D, with the angle in radians.`,
  },

  "usaaao-2015-practice-round-q13": {
    solution: [
      r`The Moon's phase depends on where it is relative to the Sun. A Moon that **rises just as the Sun sets** is directly opposite the Sun in the sky.`,
      r`Opposite the Sun, the side facing Earth is fully lit: that is a **full Moon**. It rises at sunset, is highest at midnight, and sets at sunrise.`,
      r`(One slip in the question: a rising Moon is always in the **east**, opposite the sunset. Read "look west" as a typo and go by the timing.)`,
    ],
    wrongChoices: {
      A: r`A new Moon sits in the same direction as the Sun, so it rises and sets **with** the Sun and is invisible. It could not be rising at sunset.`,
      B: r`A first-quarter Moon is $90^\circ$ from the Sun. It rises around noon and is already high in the sky, due south, at sunset, not on the horizon.`,
      C: r`A waxing gibbous Moon rises in the mid-afternoon, so by sunset it is well up in the eastern sky rather than just rising.`,
      E: r`A waning crescent rises shortly **before sunrise**, not at sunset. It is a dawn object, seen low in the east in the early morning.`,
    },
    takeaway: r`A Moon rising at sunset is opposite the Sun, and that is what makes it full.`,
  },

  "usaaao-2015-practice-round-q14": {
    solution: [
      r`Redshift $z$ is defined by how much a wavelength is stretched: $\lambda_{\text{obs}} = (1 + z)\,\lambda_{\text{emit}}$.`,
      r`With $z = 1$ the factor is $1 + 1 = 2$, so every wavelength is doubled: $\lambda_{\text{obs}} = 2 \times 656 = 1312$ nm.`,
      r`That moves H-alpha out of the visible band entirely, into the near-infrared, which is why infrared spectrographs are needed for high-redshift galaxies.`,
    ],
    wrongChoices: {
      A: r`This is far shorter than the emitted wavelength. Redshift **stretches** light to longer wavelengths; it never shrinks them, and certainly not by a factor of 20.`,
      B: r`This is the wavelength **halved**, the result of dividing by $(1 + z)$ instead of multiplying. Redshifted light moves to longer wavelengths, so the number should go up.`,
      C: r`This is the rest wavelength, unchanged, which would mean $z = 0$. A redshift of 1 is a big shift and must move the line a long way.`,
      E: r`This is ten times the rest wavelength, which would need $z = 9$. The stretch factor is $1 + z$, which for $z = 1$ is just 2.`,
    },
    takeaway: r`Observed wavelength equals (1 + z) times the emitted wavelength.`,
  },

  "usaaao-2015-practice-round-q15": {
    solution: [
      r`Check each Messier object against what it really is. Four of the five are described correctly, and the odd one out is the one to pick.`,
      r`**M27** is the Dumbbell Nebula, a **planetary nebula** in the small constellation **Vulpecula**. Calling it a spiral galaxy in Sagittarius gets both the type and the constellation wrong.`,
      r`The others are all right: M4 is a globular cluster next to Antares in Scorpius, M42 is the Orion Nebula, M57 is the Ring Nebula in Lyra, and M87 is the giant elliptical galaxy in Virgo.`,
    ],
    wrongChoices: {
      A: r`This grouping is correct. M4 really is a globular cluster, and it sits just west of the bright star Antares in Scorpius. The question asks for the one that is **wrong**.`,
      C: r`This grouping is correct. M42 is the famous Orion Nebula, a glowing emission nebula in Orion's sword. You are looking for the incorrect entry.`,
      D: r`This grouping is correct. M57 is the Ring Nebula, a planetary nebula between the two lower stars of Lyra. The question wants the mismatched one.`,
      E: r`This grouping is correct. M87 is the enormous elliptical galaxy at the heart of the Virgo Cluster, home of the first black hole ever imaged. Look for the entry that is wrong.`,
    },
    takeaway: r`M27 is the Dumbbell Nebula, a planetary nebula in Vulpecula; the rest of the famous Messier objects match their usual descriptions.`,
  },

  "usaaao-2015-practice-round-q16": {
    solution: [
      r`Dust between us and the star dims it by 2.0 magnitudes, so the star would look brighter without it: $m_0 = 5.7 - 2.0 = 3.7$.`,
      r`Convert to absolute magnitude with the distance modulus: $M = m_0 - 5\log_{10}\!\left(\dfrac{d}{10\,\text{pc}}\right) = 3.7 - 5\log_{10}(2.63) = 3.7 - 2.1 = 1.6$.`,
      r`Compare with the Sun's absolute magnitude, $M_\odot = 4.83$: $\dfrac{L}{L_\odot} = 10^{0.4(4.83 - 1.6)} = 10^{1.29} \approx 19.6$ solar luminosities.`,
    ],
    wrongChoices: {
      A: r`This number is the star's absolute **magnitude**, not its luminosity. There is one more step: convert the magnitude to a luminosity by comparing with the Sun's $M_\odot = 4.83$ using $L/L_\odot = 10^{0.4(M_\odot - M)}$.`,
      B: r`Too small. Check the direction of the extinction correction: dust makes the star look **fainter**, so removing it makes the apparent magnitude smaller (brighter), which leads to a higher luminosity.`,
      C: r`This is about half the true value. Recheck the distance modulus, $5\log_{10}(26.3/10) \approx 2.1$, and the final conversion $10^{0.4(4.83 - M)}$.`,
      E: r`Too large. Make sure the extinction of 2.0 magnitudes is subtracted from the apparent magnitude only once, and that the distance modulus uses $d/10$ pc.`,
    },
    takeaway: r`Remove extinction first, then apply the distance modulus, then compare with the Sun's absolute magnitude to get luminosity.`,
  },

  "usaaao-2015-practice-round-q17": {
    solution: [
      r`The tool for weighing a binary is Kepler's third law in solar units: $M_1 + M_2 = \dfrac{a^3}{P^2}$, with $a$ in AU, $P$ in years and the mass in solar masses.`,
      r`A parallax of $0.5''$ puts the system at $d = 1/0.5 = 2$ pc. The angular semi-major axis is the average of the closest and furthest separations: $\alpha = \dfrac{2'' + 18''}{2} = 10''$. Arcseconds times parsecs gives AU, so $a = 10 \times 2 = 20$ AU.`,
      r`Now $M_1 + M_2 = \dfrac{20^3}{8^2} = \dfrac{8000}{64} = \mathbf{125}$ solar masses.`,
    ],
    wrongChoices: {
      A: r`This uses only the **closest** separation ($2'' \times 2$ pc $= 4$ AU) as the semi-major axis. The semi-major axis is the average of the closest and furthest separations.`,
      B: r`This comes from taking the distance as $0.5$ pc instead of $1/0.5 = 2$ pc. Distance is the **reciprocal** of the parallax.`,
      C: r`This is $10^3/8^2$: the angular size $10''$ was used directly as AU. Multiply by the distance in parsecs first, $a = 10'' \times 2\ \text{pc} = 20$ AU.`,
      E: r`This uses the **furthest** separation ($18'' \times 2$ pc $= 36$ AU) as the semi-major axis. Average the two extremes instead.`,
    },
    takeaway: r`A visual binary's total mass is a³/P² in solar units, with a = (angular semi-major axis in arcsec) × (distance in pc).`,
  },

  "usaaao-2015-practice-round-q18": {
    solution: [
      r`An object is highest in the sky when it **transits** the meridian, and that happens when the **local sidereal time** equals its right ascension: here $1.564$ h, or about 1 h 34 min.`,
      r`Around the September equinox (about the 22nd), the Sun's RA is 12 h, so local midnight has a sidereal time of $12 + 12 = 0$ h. Three to four days earlier, on September 18-19, sidereal time runs about 4 minutes per day behind that: roughly $23$ h $46$ min at midnight.`,
      r`From 23 h 46 min the sidereal clock needs about 1 h 48 min to reach 1 h 34 min, so the galaxy transits at roughly 1:45 am. Of the choices, **1:42 am** is the closest.`,
    ],
    wrongChoices: {
      A: r`This is close to midnight, but at midnight on this date the sidereal time is still slightly before 0 h, well short of the galaxy's RA of 1.56 h. The galaxy still has over an hour and a half to climb.`,
      B: r`Too early. Sidereal time at local midnight on September 18-19 is a little before 0 h, so reaching 1 h 34 min takes more than an hour and a half after midnight.`,
      C: r`Still too early. Work out the sidereal time at midnight (near 0 h around the September equinox, a few minutes less a few days earlier) and count forward to the galaxy's RA of 1 h 34 min.`,
      D: r`Getting closer, but adding the full gap from the midnight sidereal time to 1.564 h gives a later time than this. Remember the equinox is on the 22nd, so on the 18th sidereal midnight is a little **before** 0 h, pushing the transit later.`,
    },
    takeaway: r`An object transits when local sidereal time equals its right ascension, and sidereal time at midnight is 0 h at the September equinox.`,
  },

  "usaaao-2015-practice-round-q19": {
    solution: [
      r`**Wien's law** gives the temperature from the peak wavelength: $T = \dfrac{2.90 \times 10^{-3}\ \text{m·K}}{644 \times 10^{-9}\ \text{m}} \approx 4500$ K.`,
      r`The absolute magnitude gives the luminosity. Compared with the Sun ($M_\odot = 4.83$): $\dfrac{L}{L_\odot} = 10^{0.4(4.83 + 0.17)} = 10^{2} = 100$.`,
      r`Now use $L = 4\pi R^2 \sigma T^4$ in solar units: $\dfrac{R}{R_\odot} = \sqrt{\dfrac{L}{L_\odot}}\left(\dfrac{T_\odot}{T}\right)^2 = 10 \times \left(\dfrac{5780}{4500}\right)^2 \approx 10 \times 1.65 = 16.5$ solar radii.`,
    ],
    wrongChoices: {
      A: r`Too small. Check the temperature from Wien's law ($2.90 \times 10^{-3} / 644 \times 10^{-9}$ K) and remember that a **cooler** star must be bigger than a hot star of the same luminosity, since $R \propto \sqrt{L}/T^2$.`,
      C: r`A little too large. Recompute $(T_\odot/T)^2$ with $T \approx 4500$ K and $T_\odot \approx 5780$ K, then multiply by $\sqrt{L/L_\odot} = 10$.`,
      D: r`Too large. The luminosity is exactly 100 times the Sun's (a 5-magnitude difference), so $\sqrt{L/L_\odot} = 10$; the temperature factor $(T_\odot/T)^2$ is then less than 2.`,
      E: r`Too large. Make sure you took the **square root** of the luminosity ratio and the **square** (not the fourth power) of the temperature ratio in $R \propto \sqrt{L}\,/\,T^2$.`,
    },
    takeaway: r`Wien's law gives T, the absolute magnitude gives L, and R follows from L = 4πR²σT⁴.`,
  },

  "usaaao-2015-practice-round-q20": {
    solution: [
      r`Jupiter and the Sun both orbit their common centre of mass. The Sun's little orbit has a radius of $a_\odot = a_J \times \dfrac{M_J}{M_\odot} = 5.2\ \text{AU} \times \dfrac{1.9 \times 10^{27}}{2.0 \times 10^{30}} \approx 0.005$ AU.`,
      r`Seen from a distance $d$ in parsecs, a wobble of $a$ AU spans an angle of $a/d$ arcseconds (that is what the parsec is built for).`,
      r`Set the angle equal to the smallest detectable one, $10\ \mu\text{as} = 10^{-5}$ arcseconds: $d = \dfrac{0.005}{10^{-5}} = 500$ pc.`,
    ],
    wrongChoices: {
      A: r`From only 5 pc the Sun's wobble would span about $0.001''$, a hundred times bigger than the detection limit, so Jupiter would be found easily from much further away than this.`,
      B: r`At 15 pc the wobble is still tens of times larger than $10\ \mu$as. The question asks for the **maximum** distance, where the wobble just reaches the detection limit.`,
      C: r`At 50 pc the Sun's wobble would be about $100\ \mu$as, ten times the threshold, so the planet could be spotted from considerably further away.`,
      D: r`At 150 pc the wobble is roughly $33\ \mu$as, still comfortably above the $10\ \mu$as limit. Push the distance out until $a_\odot/d$ falls to exactly $10^{-5}$ arcseconds.`,
    },
    takeaway: r`A star's wobble is its planet's orbit scaled by the mass ratio, and an angle in arcseconds is (size in AU) ÷ (distance in pc).`,
  },
};
