import type { McqExplanationMap } from "./types";

// Teaching explanations for the BAAO 2024 Challenge questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "baao-2024-astronomy-astrophysics-challenge-q1": {
    solution: [
      r`**Philae**, carried by ESA's Rosetta, touched down on comet 67P on 12 November **2014**, the first ever landing on a comet, so 2024 was its tenth anniversary.`,
    ],
    wrongChoices: {
      A: r`Chang'e 4 landed on the Moon's far side in January 2019.`,
      B: r`Curiosity landed on Mars in August 2012.`,
      C: r`Huygens landed on Titan in January 2005.`,
    },
    takeaway: r`Philae's comet landing was in November 2014.`,
  },

  "baao-2024-astronomy-astrophysics-challenge-q2": {
    solution: [
      r`A Moon exactly half lit has a right angle at the **Moon** between the directions to the Sun and Earth. In the Sun-Earth-Moon triangle the Earth-Moon side is tiny compared with the Sun-Earth side, so the angle at Earth is slightly less than $90^\circ$.`,
      r`$\angle_{\text{Earth}} = 90^\circ - \arctan\!\left(\dfrac{384{,}400}{1.496 \times 10^8}\right) = 90^\circ - 0.147^\circ \approx 89.85^\circ$.`,
    ],
    wrongChoices: {
      A: r`Far too small; $87^\circ$ would put the Moon at over 7 million km, twenty times its real distance. (Aristarchus used a similar guess and hugely underestimated the Sun's distance.)`,
      C: r`The right angle is at the **Moon**, not at Earth; the angle at Earth is a fraction of a degree less than $90^\circ$.`,
      D: r`The Earth angle is **less** than $90^\circ$, not more, since the third angle (at the Sun) must be positive.`,
    },
    takeaway: r`At half Moon the right angle is at the Moon, and the Earth angle is 90° minus the tiny Sun-Moon parallax.`,
  },

  "baao-2024-astronomy-astrophysics-challenge-q3": {
    solution: [
      r`Hubble's law: $v = H_0 d$. Differentiate with respect to time, treating $H_0$ as constant: $a = \dfrac{dv}{dt} = H_0\dfrac{dd}{dt} = H_0 v = H_0^2 d$.`,
      r`Units check: $H_0$ is in s⁻¹, so $H_0^2 d$ is m/s², an acceleration.`,
    ],
    wrongChoices: {
      B: r`$H_0d^2$ has units of m²/s, not an acceleration.`,
      C: r`$(H_0d)^2$ is $v^2$, with units of m²/s², an energy per mass rather than an acceleration.`,
      D: r`$H_0d$ is just the recession **velocity**, not the acceleration.`,
    },
    takeaway: r`With v = H₀d and constant H₀, a = H₀v = H₀²d.`,
  },

  "baao-2024-astronomy-astrophysics-challenge-q4": {
    solution: [
      r`The magnitude drops by $10.8 - 2.5 = 8.3$. Brightness ratio: $10^{0.4 \times 8.3} = 10^{3.32} \approx 2100$, about **2 × 10³**. The star will go from binocular-only to easily naked-eye, rivalling Polaris.`,
    ],
    wrongChoices: {
      A: r`A factor of 4 is only 1.5 magnitudes.`,
      B: r`A factor of 50 is about 4.2 magnitudes, half the actual change.`,
      D: r`A factor of $2 \times 10^8$ would be about 21 magnitudes, far more than 8.3.`,
    },
    takeaway: r`Brightness factor = 10^(0.4 Δm); 8.3 magnitudes is about 2000 times.`,
  },

  "baao-2024-astronomy-astrophysics-challenge-q5": {
    solution: [
      r`One exposure covers $6 \times 4096 \times 0.101'' = 2482''$ by $6 \times 4132 \times 0.101'' = 2504''$, i.e. $0.69^\circ \times 0.70^\circ \approx 0.48$ square degrees.`,
      r`The target is 36% of the $41{,}253$ square degree sky, $14{,}850$ square degrees. Minimum exposures: $\dfrac{14{,}850}{0.48} \approx 31{,}000$.`,
    ],
    wrongChoices: {
      B: r`Too many; this would suit a field of about 0.3 square degrees. Recompute the field: $6 \times 4096 \times 0.101''$ per side.`,
      C: r`Too many by nearly three times; check the conversion from arcseconds to degrees (3600″ per degree).`,
      D: r`Too many; this would be the count for the **whole** sky with a smaller field, not 36% of it.`,
    },
    takeaway: r`Exposures needed = (sky area to cover) ÷ (area per exposure), with the field from pixels × pixel scale.`,
  },

  "baao-2024-astronomy-astrophysics-challenge-q6": {
    solution: [
      r`Polaris marks the north celestial pole, whose altitude equals the observer's **latitude**. Polaris $33^\circ$ up means latitude **33° N**. (Seeing Polaris at all means you are in the northern hemisphere.)`,
    ],
    wrongChoices: {
      A: r`$57^\circ$ is $90^\circ - 33^\circ$, the altitude of the celestial equator, not the latitude.`,
      C: r`Polaris cannot be seen from the southern hemisphere at all.`,
      D: r`Both the hemisphere and the number are wrong.`,
    },
    takeaway: r`Altitude of Polaris = northern latitude.`,
  },

  "baao-2024-astronomy-astrophysics-challenge-q7": {
    solution: [
      r`**Canis Major**, home of Sirius, lies at declination $-11^\circ$ to $-33^\circ$, entirely south of the celestial equator. The others are all northern constellations.`,
    ],
    wrongChoices: {
      A: r`Andromeda is at declination $+21^\circ$ to $+53^\circ$, well north.`,
      C: r`Gemini lies at $+10^\circ$ to $+35^\circ$, north of the equator.`,
      D: r`Perseus is far north, at $+31^\circ$ to $+59^\circ$.`,
    },
    takeaway: r`Canis Major is a southern constellation; Sirius sits at declination −17°.`,
  },

  "baao-2024-astronomy-astrophysics-challenge-q8": {
    solution: [
      r`Aldebaran is in Taurus. Taurus holds two famous Messier objects: the Pleiades (M45), a **cluster**, and the Crab Nebula (**M1**), the supernova remnant near the tip of the Bull's southern horn. The question asks for the **nebula**, so M1.`,
    ],
    wrongChoices: {
      B: r`M31 is the Andromeda Galaxy, in Andromeda.`,
      C: r`M42 is the Orion Nebula, in Orion, next door to Taurus.`,
      D: r`M45, the Pleiades, **is** in Taurus, but it is an open cluster, not a nebula.`,
    },
    takeaway: r`Taurus contains the Crab Nebula (M1) and the Pleiades (M45); only M1 is a nebula.`,
  },

  "baao-2024-astronomy-astrophysics-challenge-q9": {
    solution: [
      r`Culmination altitude is $90^\circ - |\phi - \delta|$, greatest for the declination nearest the latitude, $-22.91^\circ$. **Nunki** at $-26.30^\circ$ is only $3.4^\circ$ away and culminates at about $86.6^\circ$, almost overhead.`,
    ],
    wrongChoices: {
      A: r`Castor at $+31.9^\circ$ is $55^\circ$ from Rio's latitude, culminating at only $35^\circ$.`,
      B: r`Rigel at $-8.2^\circ$ culminates at about $75^\circ$, high but not the highest.`,
      D: r`Hadar at $-60.4^\circ$ is $37.5^\circ$ south of the latitude, culminating at about $52^\circ$.`,
    },
    takeaway: r`The star whose declination matches your latitude passes nearest the zenith, in either hemisphere.`,
  },

  "baao-2024-astronomy-astrophysics-challenge-q10": {
    solution: [
      r`A planet reaches opposition when the Sun is in the constellation **opposite** its own. The Sun moves through Leo (late August), Virgo (September to October), Libra/Scorpius (November) and Sagittarius/Capricornus (December to January).`,
      r`Opposite Aquarius is Leo, so **Saturn** comes first (early September). Opposite Pisces is Virgo: **Neptune** (late September). Opposite Taurus is Scorpius: **Uranus** (November). Opposite Gemini is Sagittarius: **Mars** (January).`,
    ],
    wrongChoices: {
      A: r`Mars, in Gemini, is opposite the Sun only when the Sun is in Sagittarius, in January: Mars comes **last**, not first.`,
      B: r`Saturn in Aquarius is opposite the Sun when the Sun is in Leo, late August or early September, so Saturn comes **first**, not last.`,
      D: r`Neptune (in Pisces, opposite Virgo) reaches opposition in September, before Uranus (in Taurus, opposite Scorpius) in November.`,
    },
    takeaway: r`Opposition dates follow the zodiac: a planet is opposite the Sun when the Sun reaches the constellation opposite its own.`,
  },
};
