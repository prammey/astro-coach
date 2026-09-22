import type { McqExplanationMap } from "./types";

// Teaching explanations for the BAAO 2019 Challenge questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "baao-2019-astronomy-astrophysics-challenge-q1": {
    solution: [
      r`The orange ring with a dark centre is the Event Horizon Telescope's first image of a **black hole**: the supermassive black hole in the galaxy M87, with the dark "shadow" of its event horizon surrounded by glowing hot gas.`,
    ],
    wrongChoices: {
      A: r`A supernova remnant looks like an expanding cloud of filaments, not a smooth ring around a dark shadow.`,
      B: r`Planetary nebulae are much larger, cooler gas shells imaged in visible light; this is a radio image of something the size of our Solar System.`,
      D: r`A quasar is a whole active galaxy nucleus seen from afar; this image resolves the black hole itself at the heart of one.`,
    },
    takeaway: r`The 2019 EHT image showed the shadow of M87's supermassive black hole.`,
  },

  "baao-2019-astronomy-astrophysics-challenge-q2": {
    solution: [
      r`Apollo 11 landed on 20 July 1969 in **Mare Tranquillitatis**, the Sea of Tranquillity, chosen because it was flat and smooth. Armstrong's first words from the surface were "Tranquility Base here".`,
    ],
    wrongChoices: {
      A: r`Mare Serenitatis was the site of Apollo 17 in 1972, on its edge at Taurus-Littrow.`,
      C: r`Mare Imbrium was the landing site of Apollo 15 in 1971 and the Soviet Lunokhod rovers.`,
      D: r`Mare Nubium was visited by no crewed mission; Apollo 12 landed nearby in Oceanus Procellarum.`,
    },
    takeaway: r`Apollo 11 landed in the Sea of Tranquillity.`,
  },

  "baao-2019-astronomy-astrophysics-challenge-q3": {
    solution: [
      r`Earth's atmosphere **absorbs X-rays** completely; none reach the ground. That is good for our health but means X-ray telescopes must fly above the atmosphere, on satellites or high-altitude balloons.`,
    ],
    wrongChoices: {
      B: r`Medical X-ray machines are shielded and their beams are negligible compared with cosmic sources; interference is not the issue.`,
      C: r`X-ray telescopes only **receive** X-rays; they emit nothing and are perfectly safe to be near.`,
      D: r`Resolution has nothing to do with it; the problem is that no X-rays arrive at ground level to be observed.`,
    },
    takeaway: r`The atmosphere blocks X-rays, so X-ray astronomy is done from space.`,
  },

  "baao-2019-astronomy-astrophysics-challenge-q4": {
    solution: [
      r`Stars rise in order of **right ascension**: the sky turns so that smaller RA comes up first. In late September evenings the sidereal time runs from about 18 h through 6 h overnight, so these winter stars rise one after another during the night.`,
      r`Aldebaran has the smallest RA (04 h 36 m), so it rises **first**, followed by Rigel, Sirius and Procyon. (Declination shifts rise times a little, but not enough to change the order here.)`,
    ],
    wrongChoices: {
      B: r`Rigel's RA of 05 h 15 m is 40 minutes later than Aldebaran's, and its southern declination delays its rise even more.`,
      C: r`Procyon, at RA 07 h 39 m, rises about three hours after Aldebaran.`,
      D: r`Sirius, at RA 06 h 45 m and far south, rises well after Aldebaran, more than two and a half hours later.`,
    },
    takeaway: r`Smaller right ascension rises earlier; declination fine-tunes the timing.`,
  },

  "baao-2019-astronomy-astrophysics-challenge-q5": {
    solution: [
      r`During totality the eclipse teams photographed stars near the Sun's edge and found them displaced by about 1.75 arcseconds, matching Einstein's **general relativity** prediction for the **bending of light** by the Sun's gravity. The result made Einstein world-famous.`,
    ],
    wrongChoices: {
      B: r`Bohr's atomic model was tested with laboratory spectra, not eclipses.`,
      C: r`Eddington did champion solar fusion, but an eclipse photograph says nothing about the Sun's core.`,
      D: r`The corona's magnetism was not the target, and Maxwell's equations make no such prediction.`,
    },
    takeaway: r`The 1919 eclipse confirmed general relativity by measuring starlight bent by the Sun.`,
  },

  "baao-2019-astronomy-astrophysics-challenge-q6": {
    solution: [
      r`A full Moon is **opposite** the Sun. A full Moon in Capricorn means the Sun is in the opposite zodiac constellation, Cancer (or thereabouts), where it is in **July**: summer.`,
    ],
    wrongChoices: {
      A: r`In spring the Sun is in Pisces/Aries, so the full Moon is in Virgo/Libra.`,
      C: r`In autumn the Sun is in Virgo/Libra, putting the full Moon in Pisces/Aries.`,
      D: r`In winter the Sun is itself in Sagittarius/Capricorn; a Moon in Capricorn would then be **new**, not full.`,
    },
    takeaway: r`A full Moon sits opposite the Sun on the zodiac; Capricorn in the middle of the night means summer.`,
  },

  "baao-2019-astronomy-astrophysics-challenge-q7": {
    solution: [
      r`From $g \propto M/R^2$, $M \propto gR^2$, so $\dfrac{M_{\text{Titan}}}{M_{\text{Moon}}} = \dfrac{1.35 \times 2576^2}{1.63 \times 1737^2} = \dfrac{1.35 \times 6.64 \times 10^6}{1.63 \times 3.02 \times 10^6} \approx 1.82$.`,
    ],
    wrongChoices: {
      A: r`This is close to the ratio of $gR$, missing one power of the radius; mass scales with $R^2$ at fixed $g$.`,
      B: r`Slightly off; check the squares: $2576^2 \approx 6.64 \times 10^6$ and $1737^2 \approx 3.02 \times 10^6$.`,
      D: r`This is $(R_{\text{Titan}}/R_{\text{Moon}})^2 \times (g$ ratio inverted$)$; Titan's lower gravity must reduce, not increase, the ratio.`,
    },
    takeaway: r`Mass ∝ gR² for a given surface gravity and radius.`,
  },

  "baao-2019-astronomy-astrophysics-challenge-q8": {
    solution: [
      r`A "flat" track must be a straight line, but Earth's surface curves away beneath it. Over a distance $L$ from the point of contact, the surface drops below the tangent line by $h \approx \dfrac{L^2}{2R}$.`,
      r`$h = \dfrac{800^2}{2 \times 6.37 \times 10^6} = \dfrac{6.4 \times 10^5}{1.27 \times 10^7} \approx 0.05$ m: the far end must be raised by about **5 cm**.`,
    ],
    wrongChoices: {
      B: r`Twice the true value; check that the denominator is $2R$, not $R$.`,
      C: r`Three times too much; the drop from the tangent over 800 m is only about 5 cm.`,
      D: r`Four times too much; this would be the drop over 1600 m, the full baseline, not the 800 m track.`,
    },
    takeaway: r`Earth's surface drops L²/(2R) below a tangent line over a distance L.`,
  },

  "baao-2019-astronomy-astrophysics-challenge-q9": {
    solution: [
      r`A one-day (sidereal) orbit has radius $r = \left(\dfrac{GMT^2}{4\pi^2}\right)^{1/3} \approx 4.22 \times 10^7$ m. Its circumference is $2\pi r \approx 2.65 \times 10^8$ m.`,
      r`Dividing among 450 evenly spaced satellites: $\dfrac{2.65 \times 10^8}{450} \approx 5.9 \times 10^5$ m, about **590 km**.`,
    ],
    wrongChoices: {
      A: r`Too small; check the geostationary radius, which is 42,200 km from Earth's centre, not just the 36,000 km altitude.`,
      B: r`Slightly too small; recompute $2\pi \times 42{,}200/450$.`,
      C: r`Slightly too small; the circumference of the geostationary ring is about 265,000 km.`,
    },
    takeaway: r`Geostationary ring circumference ≈ 265,000 km; divide by the number of satellites.`,
  },

  "baao-2019-astronomy-astrophysics-challenge-q10": {
    solution: [
      r`At 43.4 au the Sun is $43.4^2$ times fainter than at 1 au. In magnitudes that is $5\log_{10}(43.4) = 5 \times 1.64 = 8.19$ magnitudes fainter.`,
      r`$m = -26.74 + 8.19 = -18.55$: still about 150 times brighter than the full Moon from Earth.`,
    ],
    wrongChoices: {
      A: r`Not quite; $5\log_{10}(43.4) \approx 8.19$, not 8.5.`,
      B: r`Slightly off; recompute $\log_{10}(43.4) = 1.6375$ and multiply by 5.`,
      C: r`Slightly off; the magnitude change is $8.19$, giving $-18.55$.`,
    },
    takeaway: r`Moving a source from 1 to d au dims it by 5 log₁₀(d) magnitudes.`,
  },
};
