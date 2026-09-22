import type { McqExplanationMap } from "./types";

// Teaching explanations for the BAAO 2021 Challenge questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "baao-2021-astronomy-astrophysics-challenge-q1": {
    solution: [
      r`By September 2021 Richard Branson (Virgin Galactic, July 2021), Jeff Bezos (Blue Origin, July 2021) and Dennis Tito (Soyuz to the ISS, 2001) had all flown above 80 km. **Elon Musk** had not flown to space at all.`,
    ],
    wrongChoices: {
      A: r`Bezos flew on Blue Origin's New Shepard on 20 July 2021, passing 100 km.`,
      B: r`Branson flew on VSS Unity on 11 July 2021, reaching about 86 km.`,
      D: r`Tito was the first space tourist, spending a week on the ISS in 2001.`,
    },
    takeaway: r`Musk builds the rockets but, as of 2021, had not ridden one.`,
  },

  "baao-2021-astronomy-astrophysics-challenge-q2": {
    solution: [
      r`Earth's surface area is $4\pi(6.37 \times 10^6)^2 \approx 5.1 \times 10^{14}$ m². Divided into 9 m² squares that is $\dfrac{5.1 \times 10^{14}}{9} \approx 5.7 \times 10^{13}$ squares.`,
      r`Three words from a list of $n$ give $n^3$ combinations, so $n = (5.7 \times 10^{13})^{1/3} \approx 38{,}000$: about **40,000** words.`,
    ],
    wrongChoices: {
      A: r`$10{,}000^3 = 10^{12}$, fifty times too few combinations.`,
      B: r`$20{,}000^3 = 8 \times 10^{12}$, still seven times too few.`,
      C: r`$30{,}000^3 = 2.7 \times 10^{13}$, about half of what is needed.`,
    },
    takeaway: r`Three words from n give n³ addresses; the cube root of 5.7 × 10¹³ is about 38,000.`,
  },

  "baao-2021-astronomy-astrophysics-challenge-q3": {
    solution: [
      r`Collecting area scales with diameter squared: $\left(\dfrac{6.5}{2.4}\right)^2 \approx 7.3$ times more light.`,
      r`In magnitudes: $2.5\log_{10}(7.3) \approx 2.2$, so JWST should reach about $31 + 2.2 \approx$ **33**.`,
    ],
    wrongChoices: {
      A: r`A bigger mirror sees **fainter** objects, so the limiting magnitude must go up, not down.`,
      B: r`Same as Hubble would mean no gain from the larger mirror.`,
      D: r`Five magnitudes would need 100 times the collecting area, a mirror 24 m across.`,
    },
    takeaway: r`Limiting magnitude improves by 2.5 log(area ratio) ≈ 5 log(diameter ratio).`,
  },

  "baao-2021-astronomy-astrophysics-challenge-q4": {
    solution: [
      r`A stick casts no shadow when the Sun is directly overhead. On 21 December, the December solstice, the Sun's declination is $-23.4^\circ$, so it is overhead at noon along latitude $23.4^\circ$ S: the **Tropic of Capricorn**.`,
    ],
    wrongChoices: {
      A: r`The Sun is overhead on the Tropic of Cancer at the **June** solstice.`,
      B: r`The Sun is overhead on the Equator only at the equinoxes.`,
      D: r`On the Antarctic Circle the Sun never sets on 21 December, but it is only $47^\circ$ high at noon and casts a long shadow.`,
    },
    takeaway: r`The Sun is overhead at the December solstice along the Tropic of Capricorn.`,
  },

  "baao-2021-astronomy-astrophysics-challenge-q5": {
    solution: [
      r`At opposition Mars is **opposite** the Sun in the sky. Mars in Taurus means the Sun is in the constellation opposite Taurus, which is Scorpius/Ophiuchus, where the Sun is in late November and **December**.`,
    ],
    wrongChoices: {
      A: r`In March the Sun is in Pisces, so an opposition would be in Virgo.`,
      B: r`In June the Sun is **in** Taurus itself; Mars there would be lost in the Sun's glare, not at opposition.`,
      C: r`In September the Sun is in Virgo/Leo, so an opposition would be in Pisces/Aquarius.`,
    },
    takeaway: r`A planet at opposition is in the constellation opposite the Sun's current one.`,
  },

  "baao-2021-astronomy-astrophysics-challenge-q6": {
    solution: [
      r`Saturn moves slowly, about one zodiac constellation every 2.5 years. In 2021 it was in **Capricornus**, just west of Jupiter in Aquarius, the two planets having met there at the Great Conjunction of December 2020.`,
    ],
    wrongChoices: {
      B: r`Gemini is on the opposite side of the sky from Aquarius, and Saturn was last there around 2002.`,
      C: r`Leo is far from Aquarius; Saturn was in Leo around 2007.`,
      D: r`Libra is about $120^\circ$ from Aquarius; Saturn passed through it in 2013-2015.`,
    },
    takeaway: r`In 2021 Saturn sat in Capricornus, just ahead of Jupiter in Aquarius.`,
  },

  "baao-2021-astronomy-astrophysics-challenge-q7": {
    solution: [
      r`The Sun's RA is 12 h at the September equinox and advances about 2 hours per month, so in mid-October it is near 13 to 14 h, with declination around $-8^\circ$.`,
      r`**Spica** (13 h 25 m, $-11^\circ$) sits almost exactly there: in October it is hidden in the Sun's glare, in conjunction.`,
    ],
    wrongChoices: {
      A: r`Rigel, at RA 5 h, is about 8 hours from the Sun's position, high in the midnight sky in October.`,
      B: r`Regulus, at RA 10 h, is about 3.5 hours west of the Sun, visible before dawn.`,
      D: r`Vega, at RA 18.6 h and far north, is well east of the Sun and shines in the evening sky.`,
    },
    takeaway: r`The Sun's RA is about 12 h + 2 h per month after the September equinox; Spica is a mid-October conjunction.`,
  },

  "baao-2021-astronomy-astrophysics-challenge-q8": {
    solution: [
      r`Solar power at Earth: $1360$ W/m². A pupil of radius 2 mm has area $\pi(0.002)^2 = 1.26 \times 10^{-5}$ m², so it receives about $0.017$ W.`,
      r`A visible photon carries about $3.6 \times 10^{-19}$ J (550 nm), so the rate is $\dfrac{0.017}{3.6 \times 10^{-19}} \approx 5 \times 10^{16}$ photons per second. (Which is why you must never look at the Sun.)`,
    ],
    wrongChoices: {
      A: r`A million times too few; that is roughly the photon rate from a bright star, not the Sun.`,
      B: r`A thousand times too few; check the pupil area ($1.3 \times 10^{-5}$ m²) and the photon energy.`,
      D: r`A thousand times too many; this would need a pupil 6 cm across.`,
    },
    takeaway: r`Photon rate = (flux × area) ÷ (energy per photon).`,
  },

  "baao-2021-astronomy-astrophysics-challenge-q9": {
    solution: [
      r`From the period, $a = 172^{2/3} \approx 31$ au. Aphelion is $a(1 + e) = 31 \times 1.94 \approx 60$ au: the comet is currently at **aphelion**, its slowest point.`,
      r`It moves fastest at **perihelion**, half an orbit away: $\dfrac{172}{2} = 86$ years from now.`,
    ],
    wrongChoices: {
      A: r`After a quarter period the comet is still far out, moving at a moderate speed; the maximum comes at perihelion, half a period from aphelion.`,
      C: r`Three-quarters of a period after aphelion the comet is on its way back out, past its fastest point.`,
      D: r`After a full period it is back at aphelion, its **slowest** point.`,
    },
    takeaway: r`Check where the comet is now (aphelion here); the fastest point, perihelion, is half a period away.`,
  },

  "baao-2021-astronomy-astrophysics-challenge-q10": {
    solution: [
      r`A period of 3.5 years in the frame rotating with Earth is a **synodic** period. For a body outside Earth's orbit, $\dfrac{1}{S} = \dfrac{1}{1\ \text{yr}} - \dfrac{1}{T}$, so $\dfrac{1}{T} = 1 - \dfrac{1}{3.5} = 0.714$ and $T = 1.4$ years.`,
      r`Kepler's third law: $a = T^{2/3} = 1.4^{2/3} \approx 1.25$ au. (Treating it as an inner body gives $T = 0.78$ yr and $a = 0.85$ au, which is not among the choices.)`,
    ],
    wrongChoices: {
      B: r`This would be the semi-major axis for a 3-year sidereal period; 3.5 years is the **synodic** period, and the sidereal period is only 1.4 years.`,
      C: r`This uses 3.5 years directly as the orbital period plus an extra error; the true period is much shorter.`,
      D: r`Far too distant; a 6.5 au orbit has a period of 16.6 years and a synodic period of about 1.06 years, not 3.5.`,
    },
    takeaway: r`A period seen from Earth is synodic: 1/S = |1/1 yr − 1/T|; convert to the true period before using Kepler's law.`,
  },
};
