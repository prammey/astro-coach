import type { McqExplanationMap } from "./types";

// Teaching explanations for the BAAO 2018 Challenge questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "baao-2018-astronomy-astrophysics-challenge-q1": {
    solution: [
      r`On a circular orbit the velocity is always **tangent** to the circle, so it is arrow 1 (or 3, depending on the direction of travel). The only force is gravity, which points straight at the Earth: arrow **2**, towards the centre.`,
      r`That inward force provides the centripetal acceleration that keeps bending the path into a circle. The listed pair with a tangential velocity and an inward force is velocity 1, force 2.`,
    ],
    wrongChoices: {
      A: r`The force cannot point along the velocity; a tangential force would speed the satellite up rather than curve its path. Gravity points at Earth.`,
      C: r`This has velocity pointing at Earth; a satellite on a circular orbit moves along the circle, not into the planet.`,
      D: r`Arrow 4 points away from Earth; gravity pulls inward, never outward. (There is no "centrifugal force" acting on the satellite.)`,
    },
    takeaway: r`Circular orbit: velocity tangential, resultant force (gravity) towards the centre.`,
  },

  "baao-2018-astronomy-astrophysics-challenge-q2": {
    solution: [
      r`Near the Sun a comet's ices turn to gas, releasing dust. **Radiation pressure** and the **solar wind** then blow this material outward into tails that point away from the Sun, whichever way the comet is travelling.`,
    ],
    wrongChoices: {
      A: r`The Sun's gravity does not pull material off comets; it is heat that releases the gas and dust, and light and wind that push them away.`,
      B: r`Tails point **away** from the Sun, never towards it.`,
      C: r`A tail is not a trail: it points away from the Sun even when the comet is heading outward, so it then goes **ahead** of the comet.`,
    },
    takeaway: r`Comet tails are blown away from the Sun by radiation pressure and the solar wind.`,
  },

  "baao-2018-astronomy-astrophysics-challenge-q3": {
    solution: [
      r`Comets shed dust along their orbits. When Earth's own orbit crosses one of these **debris streams**, the particles hit our atmosphere at the same time each year, producing a **meteor shower** that seems to radiate from one point in the sky.`,
    ],
    wrongChoices: {
      A: r`Asteroids do not break up on schedule, and shower meteors are sand-grain-sized comet dust, not asteroid fragments.`,
      C: r`Aurorae are caused by charged particles from the Sun, and asteroids have nothing to do with them.`,
      D: r`No nuclear reactions occur; meteors glow simply from friction and heating in the atmosphere.`,
    },
    takeaway: r`Meteor showers happen when Earth crosses a comet's dust trail.`,
  },

  "baao-2018-astronomy-astrophysics-challenge-q4": {
    solution: [
      r`In late September the Sun's right ascension is about 12 h, so at 10 pm the sidereal time is roughly 22 h: stars with RA near 22 h are on the meridian, and objects with RA between about 16 h and 4 h are up.`,
      r`Deneb (20 h 41 m) and Vega (18 h 37 m) are high in the west, and Capella (05 h 17 m), being far north at $+46^\circ$, is circumpolar from the UK and already up in the north-east. **Sirius** (06 h 45 m, $-17^\circ$) does not rise until the early morning hours.`,
    ],
    wrongChoices: {
      A: r`Deneb is high overhead on September evenings, part of the Summer Triangle.`,
      B: r`Vega is still high in the west at 10 pm in late September.`,
      C: r`Capella never sets from the UK (its declination of $+46^\circ$ exceeds $90^\circ - 52^\circ$), so it is always somewhere above the horizon.`,
    },
    takeaway: r`At 10 pm in late September the sidereal time is about 22 h; Sirius, at RA 6 h 45 m, is still below the horizon.`,
  },

  "baao-2018-astronomy-astrophysics-challenge-q5": {
    solution: [
      r`The two brightest are Alnilam ($m = 1.69$) and Alnitak ($m = 1.77$), a difference of $0.08$ magnitudes.`,
      r`Brightness ratio: $10^{0.4 \times 0.08} = 10^{0.032} \approx 1.076$. Alnilam is about 7.6% brighter.`,
    ],
    wrongChoices: {
      A: r`A ratio below 1 has the stars the wrong way round; the question asks for the brighter over the fainter.`,
      C: r`This would need a difference of about 0.46 magnitudes, far more than the 0.08 between the two brightest stars.`,
      D: r`This is the ratio between Alnilam and **Mintaka** (0.54 mag difference), but Mintaka is the faintest of the three, not one of the two brightest.`,
    },
    takeaway: r`Brightness ratio = 10^(0.4 Δm).`,
  },

  "baao-2018-astronomy-astrophysics-challenge-q6": {
    solution: [
      r`For an ellipse, $b = a\sqrt{1 - e^2} = 5.0 \times \sqrt{1 - 0.64} = 5.0 \times 0.60 = 3.0$ au.`,
    ],
    wrongChoices: {
      A: r`This is $a(1 - e)$, the **perihelion distance**, not the semi-minor axis.`,
      B: r`Not from the ellipse formula; $\sqrt{1 - 0.8^2} = 0.6$, not 0.4.`,
      D: r`This is $a \times e$, the distance from the centre to a focus, not the semi-minor axis.`,
    },
    takeaway: r`Semi-minor axis b = a√(1 − e²).`,
  },

  "baao-2018-astronomy-astrophysics-challenge-q7": {
    solution: [
      r`Kepler's third law in years and au: $T = a^{3/2} = 5.0^{1.5} = \sqrt{125} \approx 11.2$ years. The eccentricity does not matter.`,
    ],
    wrongChoices: {
      A: r`Not from Kepler's law; the period at 5 au is over a decade.`,
      B: r`This would be the period for $a \approx 2$ au.`,
      C: r`This is $\sqrt{27}$, the period for $a = 3$ au (the semi-minor axis), but Kepler's law uses the semi-**major** axis.`,
    },
    takeaway: r`Period depends only on the semi-major axis: T = a^(3/2).`,
  },

  "baao-2018-astronomy-astrophysics-challenge-q8": {
    solution: [
      r`An eclipsed Moon is exactly opposite the Sun, so geometrically they cannot both be above the horizon. But Earth's atmosphere **refracts** light near the horizon, lifting the apparent positions of both the Sun and the Moon by about half a degree, more than their own diameters.`,
      r`So the rising Moon and setting Sun both **appear** above the horizon for a few minutes while geometrically both are slightly below it.`,
    ],
    wrongChoices: {
      A: r`The Moon's eccentric orbit changes its distance, not the fact that it sits exactly opposite the Sun during a lunar eclipse.`,
      B: r`Prominences are tiny features on the Sun's edge and cannot lift the whole disc into view.`,
      C: r`Light takes only 1.3 seconds from the Moon and 8 minutes from the Sun; that cannot shift their apparent positions by a whole degree.`,
    },
    takeaway: r`Atmospheric refraction lifts objects near the horizon by about half a degree, making a selenelion possible.`,
  },

  "baao-2018-astronomy-astrophysics-challenge-q9": {
    solution: [
      r`Match the star's lines against each element's pattern. The star shows a pair of lines near the left, one line near the middle, and a cluster of four lines on the right.`,
      r`Hydrogen's two lines (left-of-centre and right) both appear in the star, and helium's lines (left, centre-right and the tight group on the right) account for all the rest. Sodium's and potassium's lines are not present, so the star contains **helium and hydrogen**.`,
    ],
    wrongChoices: {
      B: r`Potassium's lines (far left and just right of centre) do not appear in the star's spectrum, and neither do sodium's.`,
      C: r`Sodium's close pair near the left and its double line near the centre are absent from the star; the extra lines belong to helium.`,
      D: r`Neither sodium nor potassium matches the star's lines, and hydrogen's clear lines are present.`,
    },
    takeaway: r`Each element has a unique line pattern; a star's spectrum is the sum of the patterns of the elements it contains.`,
  },

  "baao-2018-astronomy-astrophysics-challenge-q10": {
    solution: [
      r`Read the light curve: the magnitude swings from about 22.2 at brightest to about 24.5 at faintest, a range of roughly $2.3$ magnitudes.`,
      r`That is a brightness ratio of $10^{0.4 \times 2.3} \approx 8$. Reflected brightness scales with the projected **area**; as the ellipsoid rotates, the visible area goes from (short axis × long axis) to (short axis × short axis), so the ratio of areas equals the ratio of the long to the short axis.`,
      r`Long axis $\approx 8 \times 30$ m $\approx$ **240 m**.`,
    ],
    wrongChoices: {
      A: r`A 2:1 axis ratio would give only a 0.75-magnitude swing; the observed range is over 2 magnitudes.`,
      C: r`A 32:1 ratio would need a swing of about 3.8 magnitudes, more than the curve shows.`,
      D: r`A 128:1 ratio would need a 5.3-magnitude swing, far beyond the observed 2.3.`,
    },
    takeaway: r`A rotating ellipsoid's brightness range gives its axis ratio: ratio = 10^(0.4 Δm).`,
  },
};
