import type { McqExplanationMap } from "./types";

// Teaching explanations for the BAAO 2020 Challenge questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "baao-2020-astronomy-astrophysics-challenge-q1": {
    solution: [
      r`Hubble was launched in April 1990, Voyager 1 took the Pale Blue Dot photo in February 1990, and Magellan reached Venus in August 1990. But **Giotto** flew past Halley's Comet in March **1986**, so it had its 34th anniversary in 2020, not its 30th.`,
    ],
    wrongChoices: {
      A: r`Hubble launched on 24 April 1990, so 2020 was its 30th anniversary.`,
      B: r`The Pale Blue Dot was taken on 14 February 1990.`,
      C: r`Magellan arrived at Venus in August 1990.`,
    },
    takeaway: r`Giotto's Halley encounter was in 1986; Hubble, Pale Blue Dot and Magellan all date from 1990.`,
  },

  "baao-2020-astronomy-astrophysics-challenge-q2": {
    solution: [
      r`**Betelgeuse**, Orion's red supergiant, faded to about 40% of its usual brightness in late 2019 and early 2020, the "Great Dimming", later traced to a cloud of dust the star had ejected.`,
    ],
    wrongChoices: {
      A: r`Aldebaran is a stable orange giant in Taurus.`,
      B: r`Antares is a red supergiant too, but it did not undergo a dramatic dimming in 2019-2020.`,
      C: r`Arcturus is a steady orange giant in Boötes.`,
    },
    takeaway: r`Betelgeuse's Great Dimming of 2019-2020 was caused by ejected dust, not an imminent supernova.`,
  },

  "baao-2020-astronomy-astrophysics-challenge-q3": {
    solution: [
      r`If galaxies contained only the matter we can see, their outer stars should orbit slowly, like the outer planets. Instead the **rotation curves stay flat**: outer stars move as fast as inner ones, which needs far more mass than is visible. That unseen mass is **dark matter**.`,
    ],
    wrongChoices: {
      A: r`Central black holes are a tiny fraction of a galaxy's mass and say nothing about dark matter.`,
      C: r`Supernova neutrinos confirm the physics of core collapse, unrelated to dark matter.`,
      D: r`Redshifted galaxy spectra show the universe is **expanding**; that is evidence for the Big Bang, not dark matter.`,
    },
    takeaway: r`Flat rotation curves are the classic evidence for dark matter.`,
  },

  "baao-2020-astronomy-astrophysics-challenge-q4": {
    solution: [
      r`The angular **radius** is half of $230''$, i.e. $115''$. In radians: $\dfrac{115}{206{,}265} = 5.6 \times 10^{-4}$.`,
      r`Radius $= d\theta = 787 \times 5.6 \times 10^{-4} \approx 0.44$ pc.`,
    ],
    wrongChoices: {
      B: r`This uses the full $230''$ diameter as if it were the radius. Halve it first.`,
      C: r`Far too large; this would need the angle in degrees to be mistaken for radians. Convert arcseconds to radians (divide by 206,265).`,
      D: r`Far too large; a 50 pc shell would span over 7 degrees of sky, not 230 arcseconds.`,
    },
    takeaway: r`Size = distance × angle in radians; remember to halve a diameter for a radius.`,
  },

  "baao-2020-astronomy-astrophysics-challenge-q5": {
    solution: [
      r`The ecliptic runs through Taurus and Gemini just **north** of Orion, at declination about $+23^\circ$; Orion's stars all lie below that, so **Orion** is entirely south of the ecliptic.`,
    ],
    wrongChoices: {
      B: r`Andromeda, at declination $+35^\circ$ to $+50^\circ$, is well **north** of the ecliptic.`,
      C: r`Aquila lies north of the ecliptic, which passes through Sagittarius and Capricornus below it.`,
      D: r`Ophiuchus straddles the ecliptic; the Sun passes through it each December, so it is not entirely on one side.`,
    },
    takeaway: r`Orion sits just below the ecliptic, in the winter sky beneath Taurus and Gemini.`,
  },

  "baao-2020-astronomy-astrophysics-challenge-q6": {
    solution: [
      r`A star culminates at altitude $90^\circ - |\phi - \delta|$, so the highest culmination belongs to the star whose declination is **closest to the latitude** ($52^\circ$). Capella ($46^\circ$) is nearest, culminating at $84^\circ$.`,
    ],
    wrongChoices: {
      A: r`Kochab, at $74^\circ$, culminates $22^\circ$ from the zenith, at altitude $68^\circ$: too far north.`,
      C: r`Vega, at $38^\circ$, culminates at altitude $76^\circ$, lower than Capella.`,
      D: r`Pollux, at $28^\circ$, culminates at only $66^\circ$.`,
    },
    takeaway: r`Culmination altitude = 90° − |latitude − declination|.`,
  },

  "baao-2020-astronomy-astrophysics-challenge-q7": {
    solution: [
      r`Venus never strays far from the Sun. Its greatest elongation is $\sin^{-1}(0.723) \approx 46^\circ$, which is only about one and a half zodiac constellations (each spanning roughly $30^\circ$).`,
      r`With the Sun in Pisces, Venus can only be in Pisces or an immediate neighbour: **Aries** (or Aquarius on the other side).`,
    ],
    wrongChoices: {
      B: r`Leo is about $150^\circ$ from Pisces along the ecliptic, far beyond Venus's $46^\circ$ reach.`,
      C: r`Libra is roughly opposite Pisces on the zodiac; only outer planets can appear opposite the Sun.`,
      D: r`Gemini is about $90^\circ$ from Pisces, twice Venus's maximum elongation.`,
    },
    takeaway: r`An inner planet stays within its greatest elongation of the Sun: 46° for Venus.`,
  },

  "baao-2020-astronomy-astrophysics-challenge-q8": {
    solution: [
      r`A dip of $0.0557$ magnitudes leaves a fraction $10^{-0.4 \times 0.0557} = 0.950$ of the light, so the planet blocks $0.050$ of the star's disc.`,
      r`Depth equals the area ratio: $\left(\dfrac{R_p}{R_s}\right)^2 = 0.050$, so $\dfrac{R_p}{R_s} = \sqrt{0.050} \approx 0.224$.`,
    ],
    wrongChoices: {
      A: r`This is the blocked fraction squared, going the wrong way; take the square **root** of the depth.`,
      C: r`Not from the formula; the depth is 5%, whose square root is 0.224.`,
      D: r`This is close to $\sqrt{0.950}$, using the light that **remains** instead of the light that is lost.`,
    },
    takeaway: r`Convert the magnitude dip to a blocked fraction, then R_p/R_s = √(fraction).`,
  },

  "baao-2020-astronomy-astrophysics-challenge-q9": {
    solution: [
      r`Schwarzschild radius: $r_s = 2.95\ \text{km} \times 4.15 \times 10^6 = 1.22 \times 10^{10}$ m (about 0.08 au). Volume: $\tfrac{4}{3}\pi r_s^3 = 7.7 \times 10^{30}$ m³.`,
      r`Mass: $4.15 \times 10^6 \times 2.0 \times 10^{30} = 8.3 \times 10^{36}$ kg. Density: $\dfrac{8.3 \times 10^{36}}{7.7 \times 10^{30}} \approx 10^6$ kg/m³, about a thousand times denser than water. (Bigger black holes are less dense, since $r_s \propto M$.)`,
    ],
    wrongChoices: {
      A: r`Too low by a million; this would suit a black hole of a billion solar masses.`,
      B: r`Too low by a thousand; check the cube of $r_s \approx 1.2 \times 10^{10}$ m.`,
      D: r`Too high by a thousand; that is the density of a black hole of about 130,000 solar masses.`,
    },
    takeaway: r`Mean density inside the horizon is M / (4/3 π r_s³), falling as 1/M².`,
  },

  "baao-2020-astronomy-astrophysics-challenge-q10": {
    solution: [
      r`Measure from Mars's **centre**: periapsis $3390 + 1000 = 4390$ km, apoapsis $3390 + 49{,}400 = 52{,}790$ km, so $a = \dfrac{4390 + 52{,}790}{2} = 28{,}590$ km $= 2.86 \times 10^7$ m.`,
      r`Kepler's third law: $T = 2\pi\sqrt{\dfrac{a^3}{GM}} = 2\pi\sqrt{\dfrac{(2.86 \times 10^7)^3}{6.67 \times 10^{-11} \times 6.39 \times 10^{23}}} = 2\pi\sqrt{5.48 \times 10^8} \approx 1.47 \times 10^5$ s, about **40.9 hours**.`,
    ],
    wrongChoices: {
      A: r`Too short; this comes from forgetting to add Mars's radius to the altitudes, which shrinks the semi-major axis.`,
      C: r`Too long; check that $a$ is the **average** of periapsis and apoapsis, about 28,600 km, not their sum.`,
      D: r`Too long by nearly a factor of 3; recompute $\sqrt{a^3/GM}$ with $a = 2.86 \times 10^7$ m.`,
    },
    takeaway: r`Add the planet's radius to altitudes, average to get a, then T = 2π√(a³/GM).`,
  },
};
