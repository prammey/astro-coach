import type { McqExplanationMap } from "./types";

// Teaching explanations for the BAAO 2022 Challenge questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "baao-2022-astronomy-astrophysics-challenge-q1": {
    solution: [
      r`The image shows the "Cosmic Cliffs": a towering wall of glowing gas and dust with new stars emerging from its peaks. That is JWST's first-release image of the **Carina Nebula**, a star-forming region 7,600 light-years away.`,
    ],
    wrongChoices: {
      B: r`Stephan's Quintet is a compact group of five galaxies, not a wall of nebulosity.`,
      C: r`The Southern Ring is a small, symmetric planetary nebula around a dying star.`,
      D: r`WASP-96 b is an exoplanet; its JWST "image" was a spectrum showing water vapour, not a picture.`,
    },
    takeaway: r`JWST's Cosmic Cliffs image is the Carina Nebula.`,
  },

  "baao-2022-astronomy-astrophysics-challenge-q2": {
    solution: [
      r`NASA's programme to return humans to the Moon is **Artemis**, named after Apollo's twin sister in Greek myth. Artemis I, the uncrewed test flight, launched in November 2022.`,
    ],
    wrongChoices: {
      B: r`Athena is a Greek goddess but not a NASA programme.`,
      C: r`Diana is the Roman name for Artemis, but NASA chose the Greek form.`,
      D: r`Orion is the name of the **crew capsule** used by the Artemis programme, not the programme itself.`,
    },
    takeaway: r`Artemis is the programme; Orion is its spacecraft.`,
  },

  "baao-2022-astronomy-astrophysics-challenge-q3": {
    solution: [
      r`Magnification $= \dfrac{F_{\text{telescope}}}{F_{\text{eyepiece}}}$, so the **shortest** eyepiece focal length gives the most magnification: $750/10 = 75\times$.`,
    ],
    wrongChoices: {
      A: r`A 25 mm eyepiece gives only $30\times$, the lowest of the four.`,
      B: r`A 20 mm eyepiece gives $37.5\times$.`,
      C: r`A 15 mm eyepiece gives $50\times$, still less than the 10 mm.`,
    },
    takeaway: r`Shorter eyepiece focal length means higher magnification.`,
  },

  "baao-2022-astronomy-astrophysics-challenge-q4": {
    solution: [
      r`The whole sky covers $41{,}253$ square degrees. Shared among $1.9 \times 10^6$ quasars, each gets $\dfrac{41{,}253}{1.9 \times 10^6} \approx 0.022$ square degrees.`,
      r`The typical spacing is the square root of that patch: $\sqrt{0.022} \approx 0.15^\circ$, about **0.1°**.`,
    ],
    wrongChoices: {
      A: r`Too small by a hundred; this would need 20 billion quasars.`,
      B: r`Too small by ten; a spacing of $0.01^\circ$ means $10^4$ quasars per square degree, 200 million in all.`,
      D: r`Too large; $1^\circ$ spacing would mean only about 41,000 quasars across the sky.`,
    },
    takeaway: r`Average spacing = √(sky area ÷ number of objects).`,
  },

  "baao-2022-astronomy-astrophysics-challenge-q5": {
    solution: [
      r`At opposition Jupiter is **opposite** the Sun. A few days after the autumnal equinox the Sun is in Virgo, so Jupiter was in the constellation opposite Virgo: **Pisces**, where the Sun sits at the spring equinox.`,
    ],
    wrongChoices: {
      A: r`Cancer is only about $60^\circ$ from Virgo, not opposite it.`,
      C: r`Scorpio is about $60^\circ$ from Virgo on the other side; not opposite.`,
      D: r`Virgo is where the **Sun** was; a planet there would be in conjunction, invisible, not at opposition.`,
    },
    takeaway: r`A planet at opposition sits in the constellation opposite the Sun: Pisces for a September opposition.`,
  },

  "baao-2022-astronomy-astrophysics-challenge-q6": {
    solution: [
      r`The Moon moves eastward around its orbit by $\dfrac{360^\circ}{27.3} \approx 13.2^\circ$ per day. Each night Earth must turn an extra $13.2^\circ$ before the Moon rises again.`,
      r`Earth turns $360^\circ$ in 23 h 56 min, so $13.2^\circ$ takes about $\dfrac{13.2}{360} \times 1436$ min $\approx 53$ minutes. Moonrise moves to about **22:53**.`,
    ],
    wrongChoices: {
      A: r`Moonrise gets **later** each night, not earlier, because the Moon moves eastward against the sky's westward turn.`,
      B: r`Again, the Moon rises later, not earlier, each successive night.`,
      C: r`Too small a delay; 13 minutes would be the daily shift of a star-like object's rise time in reverse, not the Moon's 50-odd minutes.`,
    },
    takeaway: r`The Moon rises about 50 minutes later each night.`,
  },

  "baao-2022-astronomy-astrophysics-challenge-q7": {
    solution: [
      r`Culmination altitude is $90^\circ - |\phi - \delta|$, highest for the declination closest to the latitude, $51.75^\circ$. Capella at $+46^\circ$ is by far the closest, culminating at about $84^\circ$, nearly overhead.`,
    ],
    wrongChoices: {
      A: r`Aldebaran at $+16.5^\circ$ culminates at only about $55^\circ$.`,
      B: r`Altair at $+8.9^\circ$ culminates at about $47^\circ$.`,
      D: r`Procyon at $+5.2^\circ$ culminates lowest, about $43^\circ$.`,
    },
    takeaway: r`The star whose declination best matches your latitude passes closest to the zenith.`,
  },

  "baao-2022-astronomy-astrophysics-challenge-q8": {
    solution: [
      r`Distances from the Moon's centre: periapsis $1740 + 1500 = 3240$ km, apoapsis $1740 + 70{,}000 = 71{,}740$ km. Semi-major axis $a = \dfrac{3240 + 71{,}740}{2} = 37{,}490$ km.`,
      r`From $r_p = a(1 - e)$: $e = 1 - \dfrac{3240}{37{,}490} \approx 0.91$.`,
    ],
    wrongChoices: {
      A: r`Too low; check that the Moon's radius is added to **both** altitudes before averaging.`,
      B: r`Slightly too low; recompute $1 - r_p/a$ with $r_p = 3240$ km and $a = 37{,}490$ km.`,
      D: r`Too high; this comes from using the 1500 km altitude alone as the periapsis distance, forgetting the Moon's 1740 km radius.`,
    },
    takeaway: r`Eccentricity e = 1 − r_p/a, with distances measured from the centre.`,
  },

  "baao-2022-astronomy-astrophysics-challenge-q9": {
    solution: [
      r`"Closest to Earth every 300 days" is a synodic period shorter than a year, so the asteroid orbits **inside** Earth's orbit and laps us: $\dfrac{1}{T} = \dfrac{1}{365}\;+\;\dfrac{1}{300}$ (in days), giving $T \approx 165$ days $= 0.45$ years.`,
      r`Kepler's law: $a = 0.45^{2/3} \approx 0.59$ au. Circular speed scales as $1/\sqrt{a}$: $v = \dfrac{29.8}{\sqrt{0.59}} \approx 39$ km/s.`,
    ],
    wrongChoices: {
      A: r`Slower than Earth would mean an orbit **outside** Earth's, but an outer asteroid's synodic period is always longer than a year, not 300 days.`,
      B: r`This is roughly Earth's own speed; the asteroid must be faster since it laps Earth.`,
      C: r`Too slow; check the synodic relation for an inner body, $1/T = 1/P_\oplus + 1/S$, which gives a period of only 165 days.`,
    },
    takeaway: r`A synodic period shorter than a year means an inner orbit: 1/T = 1/P_Earth + 1/S.`,
  },

  "baao-2022-astronomy-astrophysics-challenge-q10": {
    solution: [
      r`Jupiter's brightness at opposition scales as $\dfrac{1}{d_{\text{Sun}}^2\,d_{\text{Earth}}^2}$, with $d_{\text{Earth}} = d_{\text{Sun}} - 1$ au.`,
      r`Perihelion: $d_{\text{Sun}} = 5.20 \times 0.951 = 4.95$ au, $d_{\text{Earth}} = 3.95$ au. Aphelion: $5.45$ and $4.45$ au. Brightness ratio (aphelion over perihelion): $\dfrac{4.95^2 \times 3.95^2}{5.45^2 \times 4.45^2} \approx 0.645$.`,
      r`$\Delta m = -2.5\log_{10}(0.645) \approx 0.48$ magnitudes.`,
    ],
    wrongChoices: {
      A: r`Too small; this would come from counting only one of the two inverse-square factors.`,
      B: r`Slightly too small; make sure both the Sun-Jupiter and Earth-Jupiter distances change between perihelion and aphelion.`,
      D: r`Slightly too large; recompute the ratio $(4.95 \times 3.95)^2/(5.45 \times 4.45)^2 \approx 0.645$.`,
    },
    takeaway: r`A planet's brightness depends on both its distance from the Sun and from Earth, each with an inverse square.`,
  },
};
