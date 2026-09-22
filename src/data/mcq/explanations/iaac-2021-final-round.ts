import type { McqExplanationMap } from "./types";

// Teaching explanations for the IAAC 2021 Final Round questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "iaac-2021-final-round-q1": {
    solution: [
      r`The **Perseids**, debris from Comet Swift-Tuttle, peak around 12 August every year and are the most popular shower of the northern summer.`,
    ],
    wrongChoices: {
      A: r`The Lyrids peak in late April.`,
      B: r`The Leonids peak in mid-November.`,
      D: r`The Geminids peak in mid-December.`,
    },
    takeaway: r`Perseids in August, Leonids in November, Geminids in December, Lyrids in April.`,
  },

  "iaac-2021-final-round-q2": {
    solution: [
      r`Newton's law: $F = \dfrac{GMm}{r^2}$. Doubling $r$ multiplies $r^2$ by 4, so the force drops to **one quarter**.`,
    ],
    wrongChoices: {
      A: r`This would need $F \propto 1/\sqrt{r}$; gravity follows an inverse **square** law.`,
      B: r`This would need $F \propto 1/r$; the distance is squared in Newton's law.`,
      D: r`This would need $F \propto 1/r^3$; gravity is $1/r^2$.`,
    },
    takeaway: r`Inverse-square: double the distance, quarter the force.`,
  },

  "iaac-2021-final-round-q3": {
    solution: [
      r`Constant acceleration from rest: $d = \tfrac{1}{2}at^2$, so $t = \sqrt{\dfrac{2d}{a}} = \sqrt{\dfrac{2 \times 1200}{150}} = \sqrt{16} = 4$ s.`,
    ],
    wrongChoices: {
      A: r`In 2 s the ship covers only $\tfrac{1}{2} \times 150 \times 4 = 300$ m.`,
      B: r`In 3 s it covers $675$ m, still short of 1200 m.`,
      D: r`In 5 s it would cover $1875$ m, overshooting the asteroid.`,
    },
    takeaway: r`From rest, d = ½at², so t = √(2d/a).`,
  },

  "iaac-2021-final-round-q4": {
    solution: [
      r`A pulsar's intense magnetic field whips charged particles to near light speed along curved paths; such particles emit **synchrotron radiation**, beamed along the magnetic poles, which sweeps past us like a lighthouse.`,
    ],
    wrongChoices: {
      A: r`Compton scattering is a process that changes photon energies, not a radiation mechanism named for pulsars.`,
      B: r`Lyman-alpha is a hydrogen spectral line, unrelated to pulsar beams.`,
      C: r`Planck (thermal) radiation comes from hot surfaces; pulsar beams are non-thermal.`,
    },
    takeaway: r`Pulsar beams are synchrotron radiation from relativistic particles in strong magnetic fields.`,
  },

  "iaac-2021-final-round-q5": {
    solution: [
      r`Gravitational potential energy is $E = -\dfrac{GMm}{R}$: negative because the masses are bound, and it rises towards zero as they separate to infinity.`,
    ],
    wrongChoices: {
      B: r`$GMm/R^2$ is the **force**, not the energy; energy needs one power of $R$.`,
      C: r`The sign is wrong: bound systems have negative potential energy.`,
      D: r`Wrong sign and wrong power of $R$; this is the force with the wrong sign.`,
    },
    takeaway: r`Gravitational potential energy is −GMm/R.`,
  },

  "iaac-2021-final-round-q6": {
    solution: [
      r`Pulsars were discovered in 1967 as regular radio blips, and most are still studied with **radio telescopes**, which pick up their sharp, clock-like pulses.`,
    ],
    wrongChoices: {
      A: r`Laser interferometers (like LIGO) detect gravitational waves, not pulsar pulses.`,
      C: r`Magnetic spectrometers analyse charged particles in the lab, not distant stars.`,
      D: r`Radar bounces signals off nearby objects; pulsars are thousands of light-years away.`,
    },
    takeaway: r`Pulsars are mainly radio objects.`,
  },

  "iaac-2021-final-round-q7": {
    solution: [
      r`A pulsar is a rapidly spinning, strongly magnetised **neutron star**, the collapsed core left by a supernova, with beams of radiation sweeping past Earth each rotation.`,
    ],
    wrongChoices: {
      A: r`White dwarfs spin far too slowly and have far weaker fields to produce pulsar beams.`,
      C: r`Quasars are galaxy nuclei powered by supermassive black holes, billions of times more massive.`,
      D: r`Black dwarfs are cooled white dwarfs (none exist yet); they would emit nothing.`,
    },
    takeaway: r`Pulsars are spinning neutron stars.`,
  },

  "iaac-2021-final-round-q8": {
    solution: [
      r`The equatorial system projects Earth's equator and poles onto the sky. Its coordinates are **right ascension** (like longitude, in hours) and **declination** (like latitude, in degrees).`,
    ],
    wrongChoices: {
      A: r`Elevation and azimuth belong to the **horizontal** system, which depends on the observer's location.`,
      C: r`Azimuth is a horizontal-system coordinate; it does not pair with declination.`,
      D: r`Ecliptic latitude and longitude belong to the ecliptic system, based on Earth's orbit.`,
    },
    takeaway: r`Equatorial coordinates are right ascension and declination.`,
  },

  "iaac-2021-final-round-q9": {
    solution: [
      r`The Sun crosses the **celestial equator** twice a year along the **ecliptic**; the crossing where it heads north is the **vernal equinox**, the zero point of right ascension.`,
    ],
    wrongChoices: {
      A: r`The rotation axis meets the sky at the celestial poles, not on the horizon.`,
      B: r`The equator meets the horizon at the east and west points, which depend on where you stand; the equinox is a fixed point on the sky.`,
      C: r`The rotation axis points at the poles, $66.5^\circ$ from the ecliptic; it does not meet it.`,
    },
    takeaway: r`The vernal equinox is where the ecliptic crosses the celestial equator.`,
  },

  "iaac-2021-final-round-q10": {
    solution: [
      r`Alpha Centauri is a **triple** system: the Sun-like pair Alpha Centauri A and B, orbited far out by the faint red dwarf Proxima Centauri, the closest star of all at 4.24 light-years.`,
    ],
    wrongChoices: {
      A: r`Two would count only A and B; Proxima is bound to them as well.`,
      C: r`There are only three stars, though Proxima hosts at least two planets.`,
      D: r`Only three stars are in the system.`,
    },
    takeaway: r`Alpha Centauri is a triple: A, B and Proxima.`,
  },

  "iaac-2021-final-round-q11": {
    solution: [
      r`The picture shows an irregular, barred smudge of stars dotted with pink star-forming regions, including the huge Tarantula Nebula at one end: the **Large Magellanic Cloud**, our biggest satellite galaxy, 160,000 light-years away.`,
    ],
    wrongChoices: {
      A: r`The Sagittarius Dwarf is a faint, sparse galaxy hidden behind the Milky Way's bulge, with no such bright nebulae.`,
      B: r`The Triangulum Galaxy is a tidy spiral, not an irregular blob, and it is not a satellite of the Milky Way.`,
      C: r`The Andromeda dwarfs are small, faint ellipticals orbiting Andromeda, not the Milky Way.`,
    },
    takeaway: r`The LMC is the Milky Way's bright, irregular satellite with the Tarantula Nebula.`,
  },

  "iaac-2021-final-round-q12": {
    solution: [
      r`In the sequence O, B, A, F, G, K, **M**, temperature falls from left to right, so M stars are the coolest, under 3,700 K, and appear red.`,
    ],
    wrongChoices: {
      A: r`O stars are the **hottest**, above 30,000 K.`,
      B: r`F stars are about 6,000 to 7,500 K, hotter than the Sun.`,
      C: r`K stars are cool (3,700 to 5,200 K) but not the coolest.`,
    },
    takeaway: r`M stars are the coolest class.`,
  },

  "iaac-2021-final-round-q13": {
    solution: [
      r`Across a shock, three quantities are conserved. Mass flux: $\rho_1v_1 = \rho_2v_2$. **Momentum flux**: $\rho_1v_1^2 + p_1 = \rho_2v_2^2 + p_2$. Energy flux: $\tfrac{1}{2}v_1^2 + h_1 = \tfrac{1}{2}v_2^2 + h_2$.`,
      r`The momentum condition is the one with $\rho v^2 + p$ on each side.`,
    ],
    wrongChoices: {
      A: r`This is the **mass** conservation condition.`,
      C: r`This is the **energy** conservation condition (with $h$ the enthalpy).`,
      D: r`This mixes mass flux with enthalpy and is not a conservation law.`,
    },
    takeaway: r`Rankine-Hugoniot momentum condition: ρv² + p is the same on both sides of the shock.`,
  },

  "iaac-2021-final-round-q14": {
    solution: [
      r`The Lorentz factor is $\gamma = \dfrac{1}{\sqrt{1 - \beta^2}}$. Squaring and inverting: $\dfrac{1}{\gamma^2} = 1 - \beta^2$.`,
    ],
    wrongChoices: {
      A: r`A plus sign would make $\gamma$ **smaller** than 1 for moving objects; it must be larger.`,
      B: r`Not a relativistic identity; $1/\gamma^2$ depends only on $\beta$.`,
      D: r`Same as B; not the correct relation.`,
    },
    takeaway: r`1/γ² = 1 − β².`,
  },

  "iaac-2021-final-round-q15": {
    solution: [
      r`Most of the universe's ordinary matter is in the vast, thin gas between galaxies, and since reionization it has been mostly **ionised hydrogen** (protons and free electrons), heated by starlight and quasars.`,
    ],
    wrongChoices: {
      A: r`Heavy elements are rare everywhere (about 1% by mass) and rarer still between galaxies.`,
      B: r`Heavy elements are present only in traces; hydrogen dominates.`,
      C: r`Neutral hydrogen dominated only before reionization; today's intergalactic hydrogen is almost entirely ionised.`,
    },
    takeaway: r`The intergalactic medium is hot, ionised hydrogen.`,
  },

  "iaac-2021-final-round-q16": {
    solution: [
      r`Kepler's third law: $P \propto a^{3/2}$. The semi-major axis grows by a factor of 4, so the period grows by $4^{3/2} = 8$: $100 \times 8 = 800$ days.`,
    ],
    wrongChoices: {
      A: r`This doubles the period, but a factor of 4 in distance gives $4^{1.5} = 8$ in period.`,
      B: r`This is a factor of 4, as if $P \propto a$; the exponent is $3/2$.`,
      D: r`Not from Kepler's law; $4^{3/2} = 8$, not 10.`,
    },
    takeaway: r`P ∝ a^(3/2): four times the distance means eight times the period.`,
  },

  "iaac-2021-final-round-q17": {
    solution: [
      r`The **umbra** is the dark central cone of the Moon's shadow where the Sun is completely hidden. Only observers inside it see a **total** solar eclipse.`,
    ],
    wrongChoices: {
      B: r`In the penumbra the Sun is only partly covered: a partial eclipse.`,
      C: r`The antumbra is the region beyond the umbra's tip, where the Moon looks too small to cover the Sun: an annular eclipse.`,
      D: r`The apex is just the tip of the umbral cone, not a region.`,
    },
    takeaway: r`Umbra = total, penumbra = partial, antumbra = annular.`,
  },

  "iaac-2021-final-round-q18": {
    solution: [
      r`Rayleigh criterion: $\theta = 1.22\,\dfrac{\lambda}{D} = 1.22 \times \dfrac{10^{-6}\ \text{m}}{5\ \text{m}} = 2.44 \times 10^{-7}$ rad, about 0.05 arcseconds.`,
      r`Written in units of $10^{-9}$ radians (nanoradians) that is $244 \times 10^{-9}$; the printed options appear to have lost the minus sign in the exponent, and the intended reading is **244 × 10⁻⁹ rad**.`,
    ],
    wrongChoices: {
      A: r`This is $1.22\lambda/D$ without dividing by the 5 m aperture. Include the aperture.`,
      B: r`This is $2.44$ with the wrong power of ten; the resolution is $2.44 \times 10^{-7}$ rad, which is $244 \times 10^{-9}$.`,
      C: r`This has the right power of ten but omits the factor of 2 from $\lambda = 1000$ nm over 5 m... check the arithmetic: $1.22 \times 10^{-6}/5 = 2.44 \times 10^{-7}$.`,
    },
    takeaway: r`θ = 1.22 λ/D radians; a 5 m telescope at 1 µm resolves about 0.05 arcseconds.`,
  },

  "iaac-2021-final-round-q19": {
    solution: [
      r`From $\gamma = \dfrac{1}{\sqrt{1 - v^2/c^2}}$: $\dfrac{v^2}{c^2} = 1 - \dfrac{1}{\gamma^2} = 1 - \dfrac{1}{9} = \dfrac{8}{9}$, so $v = \sqrt{8/9}\,c \approx 0.943c$.`,
      r`**Important:** the stored answer key marks option A, $\sqrt{8/3}\,c$, but that is faster than light and cannot be right; the physics gives $\sqrt{8/9}\,c$, which is option C. Trust the derivation.`,
    ],
    wrongChoices: {
      B: r`$3/\sqrt{8} \approx 1.06$, faster than light. No massive object can reach $c$.`,
      C: r`This is actually what the Lorentz-factor formula gives: $v = c\sqrt{1 - 1/\gamma^2} = \sqrt{8/9}\,c$. The stored key marks a different option, which appears to be an error in the key.`,
      D: r`$9/\sqrt{8} \approx 3.2$, more than three times the speed of light.`,
    },
    takeaway: r`v = c √(1 − 1/γ²); for γ = 3 that is √(8/9) c ≈ 0.94c.`,
  },

  "iaac-2021-final-round-q20": {
    solution: [
      r`A solar eclipse happens when the Moon passes between Earth and the Sun. From Earth we then see the Moon's unlit side: **new Moon**.`,
    ],
    wrongChoices: {
      B: r`A waxing crescent is a few days past new, already off to the side of the Sun.`,
      C: r`A waning gibbous Moon is on the far side of Earth from the Sun's direction, nowhere near in line.`,
      D: r`Full Moon is opposite the Sun; that geometry gives **lunar** eclipses.`,
    },
    takeaway: r`Solar eclipses happen at new Moon; lunar eclipses at full Moon.`,
  },

  "iaac-2021-final-round-q21": {
    solution: [
      r`**Adaptive optics** measures the atmosphere's distortion of an incoming wavefront hundreds of times a second and bends a deformable mirror to cancel it, sharpening the image.`,
    ],
    wrongChoices: {
      A: r`Spectroscopy analyses light by wavelength; it does not correct wavefronts.`,
      B: r`Same: spectroscopy is not an image-correction technique.`,
      D: r`**Active** optics corrects slow distortions of the telescope's own mirror (from gravity and temperature), not the fast atmospheric ones.`,
    },
    takeaway: r`Adaptive optics cancels atmospheric blurring in real time.`,
  },

  "iaac-2021-final-round-q22": {
    solution: [
      r`The magnitude scale runs backwards: the **larger** the number, the **fainter** the star. Star A at magnitude 5 is the faintest; Star D at $-5$ would be brilliant.`,
    ],
    wrongChoices: {
      B: r`Magnitude 0.3 is bright, like Vega or Arcturus.`,
      C: r`Magnitude $-0.2$ is brighter still, like Canopus.`,
      D: r`Magnitude $-5$ is the **brightest** of the four, brighter than Venus.`,
    },
    takeaway: r`Bigger magnitude means fainter.`,
  },

  "iaac-2021-final-round-q23": {
    solution: [
      r`Right ascension is measured in **hours**, minutes and seconds (24 hours around the sky, 1 hour = 15°), because the sky turns through one hour of RA every hour of time.`,
    ],
    wrongChoices: {
      A: r`Kelvin measures temperature.`,
      B: r`Metres measure length; RA is an angle.`,
      D: r`Declination is the **other** coordinate, measured in degrees.`,
    },
    takeaway: r`RA is in hours (15° each); declination is in degrees.`,
  },

  "iaac-2021-final-round-q24": {
    solution: [
      r`Lyman-alpha, hydrogen's $n = 2 \to 1$ transition, has a wavelength of 121.6 nm, in the far ultraviolet: about **120 nm**.`,
    ],
    wrongChoices: {
      B: r`330 nm is near-ultraviolet, not a hydrogen line.`,
      C: r`860 nm is in the near-infrared, near the Paschen series.`,
      D: r`1100 nm is infrared; Lyman lines are all in the ultraviolet.`,
    },
    takeaway: r`Lyman-alpha is at 121.6 nm.`,
  },

  "iaac-2021-final-round-q25": {
    solution: [
      r`The Lyman series is **hydrogen** dropping to the ground level, $n = 1$. Lyman-alpha is the first line: the transition from the **2nd to the 1st** orbit.`,
    ],
    wrongChoices: {
      A: r`Going 1st to 2nd is **absorption** of Lyman-alpha; the emission line is the downward jump.`,
      B: r`Helium has its own line series; Lyman is hydrogen's.`,
      D: r`Helium is not involved in the Lyman series.`,
    },
    takeaway: r`Lyman-alpha: hydrogen n = 2 → 1.`,
  },

  "iaac-2021-final-round-q26": {
    solution: [
      r`The sketch shows a concave **mirror** at the back of the tube, a small flat mirror tilted at 45° near the front, and the eyepiece on the **side** of the tube: the classic **Newtonian** reflector design.`,
    ],
    wrongChoices: {
      B: r`A refractor uses a lens at the front and the eyepiece straight through at the back; there is no mirror.`,
      C: r`A Cassegrain uses a convex secondary mirror that sends light back through a hole in the primary, with the eyepiece at the rear.`,
      D: r`A catadioptric telescope combines a corrector lens at the front with mirrors; this sketch has no front lens.`,
    },
    takeaway: r`A side-mounted eyepiece and 45° flat secondary mark a Newtonian.`,
  },

  "iaac-2021-final-round-q27": {
    solution: [
      r`Photograph **the Sun** at the same clock time every week for a year and its positions trace a figure-8: the **analemma**, produced by Earth's tilt and its slightly elliptical orbit.`,
    ],
    wrongChoices: {
      B: r`The Moon's position at a fixed time jumps around the sky by 12° a day; it makes no neat annual figure.`,
      C: r`The vernal equinox is a fixed point on the celestial sphere; its position at a fixed mean solar time drifts around the whole sky over a year.`,
      D: r`Jupiter's motion over a year is a slow drift of about 30°, not the analemma pattern.`,
    },
    takeaway: r`The analemma is the Sun's figure-8 over a year at fixed clock time.`,
  },

  "iaac-2021-final-round-q28": {
    solution: [
      r`The **horizontal** (alt-az) system uses the observer's own horizon and zenith as reference: altitude above the horizon and azimuth around it. It changes with where you stand and with time.`,
    ],
    wrongChoices: {
      B: r`Equatorial coordinates are fixed to the celestial sphere, the same for every observer.`,
      C: r`Ecliptic coordinates are based on Earth's orbital plane, independent of the observer.`,
      D: r`Galactic coordinates are based on the Milky Way's plane.`,
    },
    takeaway: r`Altitude and azimuth are observer-based coordinates.`,
  },

  "iaac-2021-final-round-q29": {
    solution: [
      r`A **white dwarf** has no fusion; it is held up purely by **electron degeneracy pressure**, the quantum refusal of electrons to be squeezed into the same state.`,
    ],
    wrongChoices: {
      A: r`Neutron stars are supported by **neutron** degeneracy pressure (and nuclear forces).`,
      B: r`Supergiants are held up by ordinary gas and radiation pressure from fusion.`,
      C: r`"Blue dwarf" is a hypothetical late stage of red dwarfs, still powered by fusion.`,
    },
    takeaway: r`White dwarfs are supported by electron degeneracy pressure.`,
  },

  "iaac-2021-final-round-q30": {
    solution: [
      r`A star radiates roughly as a black body, whose peak wavelength depends only on **temperature** (Wien's law). Hot stars peak in the blue, cool stars in the red.`,
    ],
    wrongChoices: {
      A: r`Mass affects colour only indirectly, by setting the temperature; a red giant and a red dwarf differ hugely in mass yet share a colour.`,
      B: r`Radius sets brightness, not colour; giants and dwarfs of the same temperature have the same colour.`,
      D: r`Orbital velocity shifts lines slightly by the Doppler effect but does not change a star's colour perceptibly.`,
    },
    takeaway: r`Star colour is set by surface temperature.`,
  },

  "iaac-2021-final-round-q31": {
    solution: [
      r`Relativistic Doppler shift for a source receding along the line of sight: $1 + z = \sqrt{\dfrac{1 + \beta}{1 - \beta}} = \sqrt{\dfrac{1.6}{0.4}} = \sqrt{4} = 2$, so $z = 1$.`,
    ],
    wrongChoices: {
      B: r`$\sqrt{2}$ would be $1 + z$ for $\beta = 1/3$, not $0.6$.`,
      C: r`Not from the formula; the wavelength stretch factor is exactly 2 at $\beta = 0.6$, so $z = 1$.`,
      D: r`Too large; $z = 2.5$ would need $\beta \approx 0.85$.`,
    },
    takeaway: r`Relativistic Doppler: 1 + z = √((1 + β)/(1 − β)); β = 0.6 gives z = 1.`,
  },

  "iaac-2021-final-round-q32": {
    solution: [
      r`The first stars and galaxies began re-ionising the neutral hydrogen a few hundred million years after the Big Bang (roughly $z \approx 15$ to $6$), so reionization began in the **1 to 999 million year** window.`,
    ],
    wrongChoices: {
      A: r`Within the first centuries the universe was a hot plasma, still ionised from the start; there was nothing yet to **re**-ionise.`,
      B: r`Recombination (atoms forming) happened at 380,000 years, but the stars needed to re-ionise the gas did not exist for another hundred million years or more.`,
      D: r`Reionization was complete by about a billion years; it began well before that.`,
    },
    takeaway: r`Reionization began a few hundred million years after the Big Bang.`,
  },

  "iaac-2021-final-round-q33": {
    solution: [
      r`Massive stars forge elements up to iron in their cores and beyond iron in their supernova explosions, then scatter them into space. Almost every element heavier than helium, including the carbon and oxygen in our bodies, was **made by stars**.`,
    ],
    wrongChoices: {
      A: r`Massive stars **ionise** the gas around them with ultraviolet light; they do not neutralise it.`,
      B: r`Synchrotron radiation comes from relativistic particles in magnetic fields; it is not what makes massive stars essential.`,
      C: r`Quasars are powered by supermassive black holes, not produced by individual stars.`,
    },
    takeaway: r`Massive stars are the universe's element factories.`,
  },

  "iaac-2021-final-round-q34": {
    solution: [
      r`A comet's tail is pushed by sunlight and the solar wind, so it always points **directly away from the Sun**, whatever direction the comet is moving.`,
      r`In the drawing, only at position **D** does the tail point straight away from the Sun. At A and C the tails lie along the orbit, and at B the tail points the wrong way.`,
    ],
    wrongChoices: {
      A: r`At A the tail trails along the orbit instead of pointing away from the Sun.`,
      B: r`At B the tail points **towards** the Sun, the opposite of reality.`,
      C: r`At C the tail lies along the orbit; it should point radially away from the Sun.`,
    },
    takeaway: r`Comet tails point away from the Sun, not behind the comet's motion.`,
  },

  "iaac-2021-final-round-q35": {
    solution: [
      r`Clouds are made of water droplets much smaller than **radio** wavelengths, so radio waves pass straight through them. Radio telescopes work in cloudy weather and even in daylight.`,
    ],
    wrongChoices: {
      A: r`Gamma rays are absorbed high in the atmosphere, clouds or no clouds; they need space telescopes or indirect detection.`,
      C: r`Ultraviolet is mostly blocked by ozone, and clouds block what remains.`,
      D: r`X-rays are absorbed by the atmosphere entirely; they must be observed from space.`,
    },
    takeaway: r`Radio waves see through clouds; short wavelengths do not.`,
  },

  "iaac-2021-final-round-q36": {
    solution: [
      r`Voyager 1 flew past Jupiter in 1979 and **Saturn** in 1980, where a close pass by Titan flung it out of the plane of the planets. Its twin, Voyager 2, went on to Uranus and Neptune.`,
    ],
    wrongChoices: {
      A: r`Jupiter was Voyager 1's **first** planet, in 1979.`,
      C: r`Uranus was visited only by Voyager 2, in 1986.`,
      D: r`Neptune was visited only by Voyager 2, in 1989.`,
    },
    takeaway: r`Voyager 1 ended its planetary tour at Saturn; Voyager 2 continued to Uranus and Neptune.`,
  },

  "iaac-2021-final-round-q37": {
    solution: [
      r`Full Moon to full Moon is the **synodic month**, **29.5 days**, longer than the 27.3-day orbit because Earth has moved along its own orbit in the meantime.`,
    ],
    wrongChoices: {
      A: r`28 days is a rough folk value, shorter than both the sidereal (27.3) and synodic (29.5) months.`,
      B: r`28.5 days matches neither lunar period.`,
      C: r`29 days is close but the synodic month is 29.53 days.`,
    },
    takeaway: r`The phase cycle takes 29.5 days.`,
  },

  "iaac-2021-final-round-q38": {
    solution: [
      r`A **black dwarf** is what a white dwarf becomes once it has cooled completely and no longer glows. The universe is not yet old enough for any to exist.`,
    ],
    wrongChoices: {
      A: r`Stars destined for black holes are massive stars, unrelated to black dwarfs.`,
      C: r`A dim star is just a faint star (a red dwarf, say), not a black dwarf.`,
      D: r`Absorbing radiation is not a stellar category.`,
    },
    takeaway: r`A black dwarf is a white dwarf that has cooled to darkness.`,
  },

  "iaac-2021-final-round-q39": {
    solution: [
      r`**Uranus** spins on its side with an axial tilt of about 98°, so its poles take turns pointing almost straight at the Sun over its 84-year orbit.`,
    ],
    wrongChoices: {
      A: r`Saturn's tilt is about 27°, similar to Earth's.`,
      C: r`Neptune's tilt is about 28°.`,
      D: r`Pluto is tilted about 120°, spinning retrograde, but the famous 98° belongs to Uranus.`,
    },
    takeaway: r`Uranus is the planet tipped on its side (98°).`,
  },

  "iaac-2021-final-round-q40": {
    solution: [
      r`Pluto's eccentric orbit ranges from 29.7 AU at perihelion to 49.3 AU at aphelion. Its closest approach is about **30 AU**, briefly inside Neptune's orbit.`,
    ],
    wrongChoices: {
      A: r`Too close; Pluto never comes within Uranus's orbit at 19 AU.`,
      C: r`40 AU is close to Pluto's **average** distance (39.5 AU), not its minimum.`,
      D: r`50 AU is about Pluto's **aphelion**, its farthest point.`,
    },
    takeaway: r`Pluto ranges from about 30 AU to 49 AU from the Sun.`,
  },
};
