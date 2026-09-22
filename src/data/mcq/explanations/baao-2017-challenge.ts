import type { McqExplanationMap } from "./types";

// Teaching explanations for the BAAO 2017 Challenge questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "baao-2017-astronomy-astrophysics-challenge-q1": {
    solution: [
      r`The first gravitational-wave event, GW150914, came from **two black holes** of about 36 and 29 solar masses spiralling together and merging 1.3 billion light-years away.`,
    ],
    wrongChoices: {
      A: r`The first **neutron star** merger, GW170817, came two years later in 2017.`,
      C: r`No supernova has yet been detected in gravitational waves; they are far weaker sources.`,
      D: r`A gamma-ray burst accompanied the 2017 neutron-star merger, not the 2015 black-hole event.`,
    },
    takeaway: r`GW150914 was a binary black hole merger.`,
  },

  "baao-2017-astronomy-astrophysics-challenge-q2": {
    solution: [
      r`The centre of the Milky Way lies in **Sagittarius**, where the Milky Way is at its brightest and widest. The central black hole is named Sagittarius A* after it.`,
    ],
    wrongChoices: {
      A: r`Ophiuchus borders the galactic centre region but the centre itself lies just beyond it, in Sagittarius.`,
      B: r`Coma Berenices is near the **north galactic pole**, looking straight out of the disc.`,
      D: r`Scorpius is next door and often confused with the centre, but the exact spot is over the border in Sagittarius.`,
    },
    takeaway: r`The galactic centre is in Sagittarius.`,
  },

  "baao-2017-astronomy-astrophysics-challenge-q3": {
    solution: [
      r`Saturn's rings span 280,000 km across but are astonishingly thin: on average only about **10 metres** thick. Scaled to a sheet of paper, the rings would be a kilometre wide.`,
    ],
    wrongChoices: {
      A: r`10 µm is thinner than the individual ice particles, which range from dust to house-sized boulders.`,
      B: r`10 mm is smaller than most ring particles.`,
      D: r`10 km is a thousand times too thick; the rings vanish almost completely when seen edge-on.`,
    },
    takeaway: r`Saturn's rings are about 10 m thick.`,
  },

  "baao-2017-astronomy-astrophysics-challenge-q4": {
    solution: [
      r`Pluto's radius is 1188 km, so its surface area is $4\pi(1188)^2 \approx 1.77 \times 10^7$ km², almost exactly the area of **Russia** (17.1 million km²).`,
    ],
    wrongChoices: {
      A: r`Australia is 7.7 million km², less than half of Pluto's area.`,
      B: r`China is 9.6 million km², about half.`,
      C: r`The USA is 9.8 million km², about half.`,
    },
    takeaway: r`Pluto's surface area ≈ 17.7 million km², about the size of Russia.`,
  },

  "baao-2017-astronomy-astrophysics-challenge-q5": {
    solution: [
      r`Spin gravity: $\omega^2 r = g$, so $\omega = \sqrt{\dfrac{9.81}{5 \times 10^6}} = 1.40 \times 10^{-3}$ rad/s and the period is $T = \dfrac{2\pi}{\omega} \approx 4490$ s.`,
      r`Rotations per day: $\dfrac{86{,}400}{4490} \approx 19$.`,
    ],
    wrongChoices: {
      A: r`15 rotations a day would give only about 0.6 g.`,
      B: r`17 rotations a day would give about 0.8 g.`,
      D: r`21 rotations a day would give about 1.2 g.`,
    },
    takeaway: r`Spin gravity needs ω = √(g/r); a 5000 km ring turns about 19 times a day.`,
  },

  "baao-2017-astronomy-astrophysics-challenge-q6": {
    solution: [
      r`The Sun's declination swings between $\pm 23.5^\circ$ over the year. At the (northern) winter solstice it is at its most southerly: **−23.5°**.`,
    ],
    wrongChoices: {
      A: r`The Sun never gets further than $23.5^\circ$ from the celestial equator.`,
      B: r`$+23.5^\circ$ is the **summer** solstice value.`,
      C: r`$0^\circ$ is the Sun's declination at the equinoxes.`,
    },
    takeaway: r`Winter solstice: Sun at declination −23.5°.`,
  },

  "baao-2017-astronomy-astrophysics-challenge-q7": {
    solution: [
      r`In June the northern hemisphere tilts towards the Sun, and the further north you are, the longer the day. **Edinburgh**, at $56^\circ$ N, is the most northerly city listed, with over 17 hours of daylight at the solstice.`,
    ],
    wrongChoices: {
      B: r`Rome, at $42^\circ$ N, has long June days (about 15 hours) but shorter than Edinburgh's.`,
      C: r`Nairobi, almost on the equator, has 12-hour days all year.`,
      D: r`Sydney is in the southern hemisphere, where June brings the **shortest** days of the year.`,
    },
    takeaway: r`In June, the further north, the longer the day.`,
  },

  "baao-2017-astronomy-astrophysics-challenge-q8": {
    solution: [
      r`Kepler's third law in years and AU: $T^2 = a^3 = 4^3 = 64$, so $T = 8$ years.`,
    ],
    wrongChoices: {
      A: r`A period equal to the semi-major axis in these units only happens at 1 AU.`,
      C: r`Not from the law; $T = \sqrt{64} = 8$.`,
      D: r`This is $T^2$, not $T$; take the square root.`,
    },
    takeaway: r`T = a^(3/2) in years and AU.`,
  },

  "baao-2017-astronomy-astrophysics-challenge-q9": {
    solution: [
      r`Brightness follows the inverse-square law, $b = \dfrac{L}{4\pi d^2}$. Equal brightness with B twice as far means B is **four times as luminous**: $L_B = 4L_A$.`,
      r`New brightnesses: $b'_A = \dfrac{L_A}{(2r)^2} = \dfrac{L_A}{4r^2}$ and $b'_B = \dfrac{4L_A}{(3r)^2} = \dfrac{4L_A}{9r^2}$. Ratio: $\dfrac{b'_A}{b'_B} = \dfrac{1/4}{4/9} = \dfrac{9}{16}$.`,
    ],
    wrongChoices: {
      A: r`This is the ratio of distances, not of brightnesses; brightness goes as the inverse **square** of distance and the luminosities differ too.`,
      B: r`This is $(2/3)^2$, forgetting that B is four times more luminous than A.`,
      C: r`Not from the formula; work out each brightness with the inverse-square law and B's luminosity of $4L_A$.`,
    },
    takeaway: r`Apply the inverse-square law with each source's luminosity: b ∝ L/d².`,
  },

  "baao-2017-astronomy-astrophysics-challenge-q10": {
    solution: [
      r`Five magnitudes fainter means 100 times less brightness. Since brightness falls as $1/d^2$, the distance must rise by $\sqrt{100} = 10$: from $r$ to **10r**.`,
    ],
    wrongChoices: {
      A: r`At $5r$ the source is 25 times fainter, about 3.5 magnitudes.`,
      C: r`At $50r$ it is 2500 times fainter, about 8.5 magnitudes.`,
      D: r`At $100r$ it is 10,000 times fainter, 10 magnitudes; the factor of 100 applies to brightness, not distance.`,
    },
    takeaway: r`5 magnitudes = factor 100 in brightness = factor 10 in distance.`,
  },
};
