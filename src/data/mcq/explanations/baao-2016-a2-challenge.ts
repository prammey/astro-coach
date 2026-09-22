import type { McqExplanationMap } from "./types";

// Teaching explanations for the BAAO 2016 A2 Challenge questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "baao-2016-astronomy-astrophysics-a2-challenge-q1": {
    solution: [
      r`Air rushing towards the low-pressure centre of a hurricane travels over a **rotating** Earth. In Earth's frame its path curves: to the right in the northern hemisphere, to the left in the southern. This is the **Coriolis effect**.`,
      r`Air deflected to the right as it converges on a centre ends up circling it anticlockwise (north) or clockwise (south).`,
    ],
    wrongChoices: {
      A: r`Earth rotates from west to east, and it is the rotation itself (through the Coriolis effect), not its direction being east-to-west, that matters.`,
      B: r`Land and sea ratios affect where storms form, not which way they spin; the spin direction is the same over every ocean in a hemisphere.`,
      C: r`The Moon's orbital tilt has no influence on weather patterns; tides are far too weak to organise a storm.`,
    },
    takeaway: r`The Coriolis effect from Earth's rotation sets the spin direction of storms in each hemisphere.`,
  },

  "baao-2016-astronomy-astrophysics-a2-challenge-q2": {
    solution: [
      r`The Moon's gravity pulls hardest on the near side of Earth and weakest on the far side. Meanwhile Earth and Moon both swing around their **common centre of mass**, so the far side, pulled least, is left behind as a second bulge.`,
      r`Two bulges on opposite sides of a rotating Earth mean each place passes through two high tides every day.`,
    ],
    wrongChoices: {
      A: r`Both daily tides are caused mainly by the Moon; the Sun only modifies their height (spring and neap tides).`,
      C: r`Tidal locking is about the Moon's rotation, and it is a **result** of tides, not their cause.`,
      D: r`Water waves do not set the tidal period; the twice-daily rhythm comes from Earth rotating under two bulges.`,
    },
    takeaway: r`Two tidal bulges (near and far side) plus Earth's rotation give two high tides a day.`,
  },

  "baao-2016-astronomy-astrophysics-a2-challenge-q3": {
    solution: [
      r`Light-gathering power depends on the **area** of the aperture, which scales as diameter squared. Four times the diameter gives $4^2 = 16$ times the area, so 16 times the light.`,
    ],
    wrongChoices: {
      A: r`This would need only $\sqrt{2}$ times the diameter.`,
      B: r`This is the ratio of **diameters**; area scales as the square of that.`,
      C: r`Eight would be the diameter ratio cubed over two, not a meaningful scaling here; the area goes as the square.`,
    },
    takeaway: r`Light-gathering power scales with aperture area, i.e. diameter squared.`,
  },

  "baao-2016-astronomy-astrophysics-a2-challenge-q4": {
    solution: [
      r`Astronomically, a zodiacal constellation is one the **ecliptic** passes through. On the charts, the blue ecliptic line crosses Aquarius, Ophiuchus and Pisces, but it does not enter **Aquila**, which lies to the north of it.`,
      r`Note that Ophiuchus, though missing from the traditional twelve signs, is a genuine zodiacal constellation by this definition.`,
    ],
    wrongChoices: {
      B: r`Aquarius is a classic zodiac constellation; the ecliptic runs right through it.`,
      C: r`Ophiuchus is not one of the twelve signs, but the ecliptic crosses it between Scorpius and Sagittarius, so astronomically it **is** zodiacal.`,
      D: r`Pisces is a zodiac constellation, and it contains the vernal equinox point where the ecliptic crosses the celestial equator.`,
    },
    takeaway: r`The astronomical zodiac is whatever the ecliptic crosses, 13 constellations including Ophiuchus but not Aquila.`,
  },

  "baao-2016-astronomy-astrophysics-a2-challenge-q5": {
    solution: [
      r`A full Moon sits opposite the Sun. In **winter** the Sun is far south (declination $-23^\circ$), so the full Moon is far **north** and climbs high in the UK sky, just as the summer Sun does.`,
    ],
    wrongChoices: {
      A: r`In spring the full Moon is near the celestial equator, at medium altitude.`,
      B: r`In summer the full Moon is opposite the high summer Sun, so it stays **low** in the south.`,
      C: r`In autumn the full Moon is near the equator, at a middling height.`,
    },
    takeaway: r`The full Moon mirrors the Sun: highest in winter, lowest in summer.`,
  },

  "baao-2016-astronomy-astrophysics-a2-challenge-q6": {
    solution: [
      r`Each fold doubles the thickness: after $n$ folds it is $10\ \mu\text{m} \times 2^n$. Set this equal to 1 AU $= 1.5 \times 10^{11}$ m: $2^n = \dfrac{1.5 \times 10^{11}}{10^{-5}} = 1.5 \times 10^{16}$.`,
      r`$n = \log_2(1.5 \times 10^{16}) = \dfrac{\log_{10}(1.5 \times 10^{16})}{\log_{10} 2} = \dfrac{16.18}{0.301} \approx 54$ folds, closest to **50**. Exponential growth makes short work of astronomical distances.`,
    ],
    wrongChoices: {
      A: r`After 40 folds the stack is only $10^{-5} \times 2^{40} \approx 11{,}000$ km, not even to the Moon.`,
      C: r`After 60 folds the stack would be $1.2 \times 10^{13}$ m, about 77 AU, far past the Sun.`,
      D: r`After 70 folds it would reach $1.2 \times 10^{16}$ m, over a light-year.`,
    },
    takeaway: r`Doubling n times multiplies by 2ⁿ; about 54 doublings take 10 µm to 1 AU.`,
  },

  "baao-2016-astronomy-astrophysics-a2-challenge-q7": {
    solution: [
      r`Polaris sits almost exactly at the north celestial pole, and the altitude of the celestial pole equals your **latitude**. At $52^\circ$ N, Polaris is $52^\circ$ above the northern horizon.`,
    ],
    wrongChoices: {
      A: r`$38^\circ$ is the co-latitude ($90^\circ - 52^\circ$), which is the altitude of the celestial **equator**, not the pole.`,
      B: r`Not related to the geometry; the pole's altitude equals the latitude exactly.`,
      D: r`Polaris is overhead only at the North Pole itself, latitude $90^\circ$.`,
    },
    takeaway: r`Altitude of Polaris = your latitude.`,
  },

  "baao-2016-astronomy-astrophysics-a2-challenge-q8": {
    solution: [
      r`The Sun's setting direction swings north until the summer solstice (June 21) and then back south. The setting azimuth on a given date is matched on the date the same number of days on the **other side** of the solstice.`,
      r`July 11 is 20 days after June 21, so the matching date is 20 days **before**: about June 1. The closest listed date is **30 May**.`,
    ],
    wrongChoices: {
      B: r`June 30 is only 9 days after the solstice, when the Sun sets further north than on July 11.`,
      C: r`In December the Sun sets far to the south-west, nowhere near Manhattan's grid direction.`,
      D: r`In January the Sun sets well south of west; the grid alignment only happens around the summer solstice.`,
    },
    takeaway: r`Sunset directions repeat symmetrically about the solstice.`,
  },

  "baao-2016-astronomy-astrophysics-a2-challenge-q9": {
    solution: [
      r`Near the South Pole, the "100 miles east" leg can take you exactly **once around** a circle of latitude with circumference 100 miles, returning you to the same meridian. Then 100 miles north brings you home.`,
      r`A circle of circumference 100 miles has radius $\dfrac{100}{2\pi} \approx 15.9$ miles, so it lies 15.9 miles from the South Pole. You started 100 miles north of it: about **116 miles** from the South Pole.`,
    ],
    wrongChoices: {
      A: r`You cannot go south from the South Pole, so the first leg is impossible there.`,
      B: r`Near the North Pole, going 100 miles south, east and north would not bring you back; the trick needs a tiny circle of latitude, which only exists near the pole you are circling on the eastward leg.`,
      D: r`From 200 miles out the eastward leg would circle at 100 miles from the pole, a circumference of 628 miles, so 100 miles east would not close the loop.`,
    },
    takeaway: r`Near a pole, an eastward leg can loop a full circle of latitude and bring you back to your meridian.`,
  },

  "baao-2016-astronomy-astrophysics-a2-challenge-q10": {
    solution: [
      r`Pixel scale: $\dfrac{2.2^\circ}{2048} = 1.07 \times 10^{-3}$ degrees per pixel, which is $1.88 \times 10^{-5}$ rad per pixel.`,
      r`Philae spans 25 pixels, so it subtends $25 \times 1.88 \times 10^{-5} = 4.7 \times 10^{-4}$ rad. A 1 m object at that angle is at $d = \dfrac{1}{4.7 \times 10^{-4}} \approx 2100$ m, about **2.1 km**.`,
    ],
    wrongChoices: {
      A: r`Half the true distance; at 1.1 km Philae would span about 50 pixels.`,
      C: r`Too far; at 12 km Philae would be only about 4 pixels across.`,
      D: r`Far too far; at 27 km a 1 m lander would be less than 2 pixels wide.`,
    },
    takeaway: r`Distance = size ÷ (pixels × radians per pixel).`,
  },
};
