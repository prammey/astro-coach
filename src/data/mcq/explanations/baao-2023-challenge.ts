import type { McqExplanationMap } from "./types";

// Teaching explanations for the BAAO 2023 Challenge questions, keyed by
// question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "baao-2023-astronomy-astrophysics-challenge-q1": {
    solution: [
      r`SaxaVord Spaceport is on **Unst**, the northernmost of the **Shetland Islands**, chosen because rockets launched there can head north over open sea into polar orbits.`,
    ],
    wrongChoices: {
      A: r`Cornwall hosts Spaceport Cornwall at Newquay, used for Virgin Orbit's air-launched rocket in 2023.`,
      B: r`Llanbedr in Wales is a proposed site, not SaxaVord.`,
      C: r`Sutherland in the Scottish Highlands is a separate planned spaceport (Space Hub Sutherland).`,
    },
    takeaway: r`SaxaVord is on Unst in Shetland, the UK's northernmost launch site.`,
  },

  "baao-2023-astronomy-astrophysics-challenge-q2": {
    solution: [
      r`For circular orbits, $T \propto r^{3/2}$ (Kepler) and $v \propto r^{-1/2}$. To cancel the $r$-dependence: $T v^n \propto r^{3/2 - n/2}$, which is constant when $n = 3$. So $Tv^3$ is the same for every orbit (it equals $2\pi GM$).`,
    ],
    wrongChoices: {
      A: r`$Tv \propto r^{3/2 - 1/2} = r$, which changes with radius; it is the orbit's circumference.`,
      B: r`$Tv^{3/2} \propto r^{3/4}$, still radius-dependent.`,
      C: r`$Tv^2 \propto r^{1/2}$, not constant.`,
    },
    takeaway: r`For circular orbits, T ∝ r^(3/2) and v ∝ r^(−1/2), so Tv³ is the invariant.`,
  },

  "baao-2023-astronomy-astrophysics-challenge-q3": {
    solution: [
      r`Convert the distance: 21 million light-years $= \dfrac{21 \times 10^6}{3.26} \approx 6.4 \times 10^6$ pc. Distance modulus: $5\log_{10}\!\left(\dfrac{6.4 \times 10^6}{10}\right) = 5 \times 5.81 = 29.0$.`,
      r`$M = m - 29.0 = 10.8 - 29.0 \approx -18.2$: about a billion times the Sun's luminosity.`,
    ],
    wrongChoices: {
      B: r`Too bright; this would need a distance modulus of 30.3, a distance of 11 Mpc.`,
      C: r`Too bright; a modulus of 31.6 corresponds to 21 **Mpc**, not 21 million light-years. Convert light-years to parsecs first.`,
      D: r`Absurdly bright; this seems to subtract the distance in millions of light-years instead of computing $5\log_{10}(d/10)$.`,
    },
    takeaway: r`Convert to parsecs, then M = m − 5 log(d/10 pc).`,
  },

  "baao-2023-astronomy-astrophysics-challenge-q4": {
    solution: [
      r`The Moon is at 1 au, where sunlight delivers about $1360$ W/m². For 50 W the ideal minimum area is $\dfrac{50}{1360} \approx 0.037$ m² $= 370$ cm²: a panel about 19 cm square (real panels, being under 30% efficient, need much more).`,
    ],
    wrongChoices: {
      A: r`Too small by ten; 29 cm² would collect only about 4 W.`,
      C: r`Too large; check $50/1360$ m² and convert to cm² ($10^4$ cm² per m²).`,
      D: r`Too large by a factor of 12; this would collect over 600 W.`,
    },
    takeaway: r`Minimum panel area = power needed ÷ solar irradiance (1360 W/m² at 1 au).`,
  },

  "baao-2023-astronomy-astrophysics-challenge-q5": {
    solution: [
      r`A geostationary satellite sits over the equator at $r = 42{,}164$ km from Earth's centre. From high latitudes it sinks towards the horizon; the limiting latitude is where the line of sight just grazes Earth: $\cos\phi = \dfrac{R_\oplus}{r} = \dfrac{6371}{42{,}164} = 0.151$, so $\phi = 81.3^\circ$.`,
      r`Longyearbyen ($78.2^\circ$) and Nagurskoye ($80.8^\circ$) are inside that limit, but **Alert** at $82.47^\circ$ N is beyond it: no geostationary satellite ever rises there.`,
    ],
    wrongChoices: {
      A: r`At $78.2^\circ$ N a geostationary satellite is still about $3^\circ$ above the southern horizon.`,
      B: r`At $80.8^\circ$ N the satellite is just half a degree up, but visible.`,
      D: r`Not all: beyond $81.3^\circ$ the satellite is below the horizon.`,
    },
    takeaway: r`Geostationary satellites are visible only up to latitude arccos(R_earth / r_geo) ≈ 81.3°.`,
  },

  "baao-2023-astronomy-astrophysics-challenge-q6": {
    solution: [
      r`The picture shows a tight group of bright blue stars wrapped in wispy blue reflection nebulosity: the **Pleiades**, catalogued as **M45**.`,
    ],
    wrongChoices: {
      A: r`M42 is the Orion Nebula, a glowing pink cloud of gas, not a compact star cluster.`,
      B: r`M43 is a small part of the Orion Nebula complex, next to M42.`,
      C: r`M44 is the Beehive Cluster, a looser, sparser cluster without the Pleiades' blue haze.`,
    },
    takeaway: r`The Pleiades are M45.`,
  },

  "baao-2023-astronomy-astrophysics-challenge-q7": {
    solution: [
      r`**Aldebaran**, the orange eye of the Bull, is Alpha Tauri.`,
    ],
    wrongChoices: {
      B: r`Castor is one of the twin stars of Gemini.`,
      C: r`Rigel is the bright blue foot of Orion.`,
      D: r`Sirius is in Canis Major.`,
    },
    takeaway: r`Aldebaran is the brightest star of Taurus.`,
  },

  "baao-2023-astronomy-astrophysics-challenge-q8": {
    solution: [
      r`The nearest galaxy comparable in size to the Milky Way is the **Andromeda Galaxy**, M31, and it lies in the constellation Andromeda.`,
      r`In the figure, **D** is the long, gently forking chain of stars that is Andromeda's stick figure, running out from the corner of the Great Square (the spur marks the way to M31 near Mirach).`,
    ],
    wrongChoices: {
      A: r`Figure A, with its large square and trailing lines, is Pegasus, the constellation next to Andromeda but not the galaxy's home.`,
      B: r`Figure B, a curved line with branches, is Perseus.`,
      C: r`Figure C, two parallel stick figures, is Gemini, the Twins.`,
    },
    takeaway: r`The Andromeda Galaxy lives in the constellation Andromeda, a chain of stars off the Great Square of Pegasus.`,
  },

  "baao-2023-astronomy-astrophysics-challenge-q9": {
    solution: [
      r`At third quarter the Moon is $90^\circ$ **behind** (west of) the Sun along the ecliptic. The Sun is therefore $90^\circ$ east of Capricornus, three zodiac constellations on: Aquarius, Pisces, **Aries**.`,
      r`The Sun is in Aries in **April**.`,
    ],
    wrongChoices: {
      A: r`In January the Sun is in Sagittarius/Capricornus itself, so a Moon in Capricornus would be near new.`,
      C: r`In July the Sun is in Gemini/Cancer, opposite Capricornus; a Moon there would be full.`,
      D: r`In October the Sun is in Virgo/Libra, $90^\circ$ **west** of Capricornus; a Moon in Capricornus would then be first quarter, not third.`,
    },
    takeaway: r`Third quarter Moon is 90° west of the Sun; first quarter is 90° east.`,
  },

  "baao-2023-astronomy-astrophysics-challenge-q10": {
    solution: [
      r`Two effects: longitude and day length. Antananarivo is $47.51^\circ + 2.59^\circ = 50.1^\circ$ east of Guernsey, so its local time runs $50.1/15 \approx 3$ h 20 min ahead; on its own that moves sunset earlier in UT.`,
      r`But on 21 June the southern hemisphere has its **shortest** day. At $18.9^\circ$ S the sunrise equation gives $\cos H = -\tan(-18.9^\circ)\tan(23.4^\circ) = +0.148$, so $H = 81.5^\circ$ and the Sun sets at 5 h 26 min after local noon, about 17:26 local apparent time.`,
      r`Local noon at $47.5^\circ$ E is about 08:50 UT, so sunset is roughly $08{:}50 + 5{:}26 \approx$ **14:20 UT**.`,
    ],
    wrongChoices: {
      A: r`Too early; this treats the day as far shorter than it is. Winter days at $19^\circ$ S are still nearly 11 hours long.`,
      C: r`Slightly too late; the winter shortening at $19^\circ$ S trims the afternoon by about 35 minutes relative to a 12-hour day.`,
      D: r`Too late; this ignores the $3$ h 20 min longitude shift that puts Madagascar's evening earlier in UT than Guernsey's.`,
    },
    takeaway: r`Sunset in UT depends on longitude (15° per hour) and the local day length from cos H = −tan φ tan δ.`,
  },
};
