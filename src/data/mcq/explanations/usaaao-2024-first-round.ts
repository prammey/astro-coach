import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2024 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2024-first-round-q1": {
    solution: [
      r`The Sun seen down a level corridor is on the horizon, so this is its **setting azimuth**. For an object on the horizon, $\cos A = \dfrac{\sin\delta}{\cos\phi}$, so $\sin\delta = \cos 245.81^\circ \times \cos 42.36^\circ = -0.410 \times 0.739 = -0.303$, giving $\delta \approx -17.6^\circ$.`,
      r`The Sun's declination follows $\sin\delta = \sin 23.44^\circ \sin\lambda$, where $\lambda$ is its position along the ecliptic measured from the March equinox. $\sin\lambda = -0.303/0.398 = -0.762$, so $\lambda \approx -49.6^\circ$: about 50 days **before** the equinox (the Sun moves roughly $1^\circ$ per day).`,
      r`Fifty days before March 20 is about **January 30**. (The "less than six months since the winter solstice" clause rules out the matching date in November.)`,
    ],
    wrongChoices: {
      A: r`On January 15 the Sun's declination is about $-21^\circ$, which would put its setting point further south, at an azimuth near 241°.`,
      C: r`By February 15 the declination has risen to about $-13^\circ$ and the Sun sets at an azimuth near 250°, north of the observed direction.`,
      D: r`On the equinox the Sun sets due west, azimuth 270°. The observed 245.81° is well south of west, so the date is deep in winter.`,
      E: r`In April the Sun's declination is positive and it sets **north** of west (azimuth above 270°), the opposite of what was measured.`,
    },
    takeaway: r`Sunset azimuth gives the Sun's declination via cos A = sin δ / cos φ, and declination gives the date.`,
  },

  "usaaao-2024-first-round-q2": {
    solution: [
      r`**P:** A peaks at twice the frequency, so by Wien's law it is twice as hot. On the main sequence, hotter means more massive and far more luminous, and more luminous means a **lower** (more negative) absolute magnitude. P is false.`,
      r`**Q:** Higher metallicity means the star formed from gas already enriched by earlier generations, so it is generally **younger**. And a hotter, more massive main-sequence star has a shorter lifetime, so it cannot be old. Q is false too.`,
    ],
    wrongChoices: {
      A: r`Both statements are false: a hotter main-sequence star is brighter (lower magnitude, not higher), and higher metallicity points to a younger star.`,
      C: r`P is false. Brighter stars have **smaller** magnitude numbers, and the hotter main-sequence star A is the brighter one.`,
      D: r`Q is false. Metal-rich stars formed later, from enriched gas, and a hot main-sequence star has not had time to grow old.`,
      E: r`Wien's law, the main-sequence mass-luminosity trend and the metallicity-age trend are enough to judge both statements.`,
    },
    takeaway: r`Hotter main-sequence stars are brighter (lower magnitude), and metal-rich stars are younger.`,
  },

  "usaaao-2024-first-round-q3": {
    solution: [
      r`For a randomly oriented circular orbit, the chance that the planet's orbital plane is tilted closely enough to carry it across the star is $\dfrac{R_\star}{a}$.`,
      r`For Earth: $\dfrac{R_\odot}{1\ \text{AU}} = \dfrac{6.96 \times 10^5}{1.496 \times 10^8} = 0.0047$, or about **0.47%**. Only about one alien civilisation in 200 is lined up to see Earth transit.`,
    ],
    wrongChoices: {
      A: r`A transit is only visible from nearly edge-on directions. Most random orientations see Earth pass above or below the Sun's disc.`,
      B: r`Far too high. The geometric probability is $R_\odot/a$, under half a percent for Earth.`,
      C: r`This is $2R_\odot/a$, using the Sun's diameter. The correct fraction of orientations is $R_\odot/a$.`,
      E: r`Too small by a factor of three. Compute $R_\odot/a = 6.96 \times 10^5/1.496 \times 10^8$.`,
    },
    takeaway: r`Transit probability for a circular orbit is R_star / a.`,
  },

  "usaaao-2024-first-round-q4": {
    solution: [
      r`Magnification is $F_p/F_e$. The first telescope gives $2000/30 \approx 67\times$.`,
      r`In the pictures, the circled star groups appear about three times larger in the second image, so the second telescope has roughly $3 \times 67 \approx 200\times$.`,
      r`$F_p = 6$ m with $F_e = 30$ mm gives $6000/30 = 200\times$: the match.`,
    ],
    wrongChoices: {
      A: r`$1000/15 = 67\times$, the same magnification as the first telescope, but the second image is clearly more magnified.`,
      B: r`$1000/30 = 33\times$, **less** magnified than the first telescope, the opposite of what the pictures show.`,
      C: r`$1000/90 = 11\times$, far less magnified than the first telescope.`,
      E: r`$6000/15 = 400\times$, six times the first telescope's magnification. The circled features grow by about three times, not six.`,
    },
    takeaway: r`Magnification = primary focal length ÷ eyepiece focal length; compare feature sizes to read it off images.`,
  },

  "usaaao-2024-first-round-q5": {
    solution: [
      r`Visible energy: $10^{10} L_\odot \times 3$ months $= 10^{10} \times 3.8 \times 10^{26}\ \text{W} \times 7.8 \times 10^6\ \text{s} \approx 3 \times 10^{43}$ J.`,
      r`That is only 1% of the total, so the neutrinos carry about 99 times as much, roughly $3 \times 10^{45}$ J.`,
      r`Each neutrino has $10$ MeV $= 1.6 \times 10^{-12}$ J, so $N = \dfrac{3 \times 10^{45}}{1.6 \times 10^{-12}} \approx 2 \times 10^{57}$: about **$10^{57}$** neutrinos.`,
    ],
    wrongChoices: {
      A: r`A thousand times too few. Check the time in seconds (three months is about $8 \times 10^6$ s) and the factor of 99 from the neutrino share.`,
      B: r`A hundred times too few. Recompute the total energy and divide by $10$ MeV $= 1.6 \times 10^{-12}$ J.`,
      C: r`Ten million times too few. Look for a slipped power of ten; the visible energy alone is over $10^{43}$ J.`,
      E: r`A thousand times too many; this would need $10^{48}$ J, more than a supernova releases in any form.`,
    },
    takeaway: r`A core-collapse supernova emits roughly 10⁴⁶ J, almost all as about 10⁵⁷ neutrinos.`,
  },

  "usaaao-2024-first-round-q6": {
    solution: [
      r`Angular momentum about the star is conserved along each orbit, so it can be evaluated anywhere. For an orbit of semi-major axis $a$ and eccentricity $e$, $L = m\sqrt{GMa(1 - e^2)}$.`,
      r`DDP's closest and farthest distances are $d$ and $5d$, so $a = 3d$ and $e = \dfrac{5d - d}{5d + d} = \dfrac{2}{3}$, giving $a(1 - e^2) = 3d \times \dfrac{5}{9} = \dfrac{5d}{3}$. CJ's circular orbit has $a(1 - e^2) = 2d$.`,
      r`$\dfrac{L_{\text{DDP}}}{L_{\text{CJ}}} = \dfrac{3m\sqrt{GM \cdot 5d/3}}{m\sqrt{GM \cdot 2d}} = 3\sqrt{\dfrac{5}{6}} = \sqrt{\dfrac{45}{6}} = \sqrt{\dfrac{15}{2}}$.`,
    ],
    wrongChoices: {
      A: r`Not from the formula. Use $L = m\sqrt{GMa(1 - e^2)}$ with DDP's $a(1 - e^2) = 5d/3$ and CJ's $2d$, and the mass ratio 3.`,
      C: r`This forgets DDP's eccentricity. With $a = 3d$ and $e = 2/3$, the factor $a(1 - e^2)$ is $5d/3$, not $3d$.`,
      D: r`Too large. Check $a(1 - e^2)$ for DDP: $3d \times (1 - 4/9) = 5d/3$, then take the ratio and include the mass factor 3.`,
      E: r`This omits the mass ratio. DDP is three times as massive, which multiplies its angular momentum by 3.`,
    },
    takeaway: r`Orbital angular momentum is m√(GMa(1 − e²)), the same at every point of the orbit.`,
  },

  "usaaao-2024-first-round-q7": {
    solution: [
      r`Energy per kilogram at launch: $\dfrac{v^2}{2} - \dfrac{GM}{R} = \dfrac{10405^2}{2} - \dfrac{3.986 \times 10^{14}}{6.371 \times 10^6} = 5.41 \times 10^7 - 6.26 \times 10^7 = -8.4 \times 10^6$ J/kg. Since $E = -\dfrac{GM}{2a}$, the semi-major axis is $a = \dfrac{3.986 \times 10^{14}}{2 \times 8.4 \times 10^6} \approx 2.36 \times 10^7$ m.`,
      r`Area $\pi ab = 1.438 \times 10^{15}$ m² gives $b = \dfrac{1.438 \times 10^{15}}{\pi \times 2.36 \times 10^7} \approx 1.94 \times 10^7$ m.`,
      r`Focus distance $c = \sqrt{a^2 - b^2} = \sqrt{5.59 \times 10^{14} - 3.75 \times 10^{14}} \approx 1.36 \times 10^7$ m, so periapsis $= a - c \approx 1.0 \times 10^7$ m $= $ **10,000 km**.`,
    ],
    wrongChoices: {
      B: r`Too close; this would be inside Earth's 6371 km radius, so the orbit could not be stable. Check $a - c$ with $a \approx 23{,}600$ km and $c \approx 13{,}600$ km.`,
      C: r`Deep inside Earth. A stable orbit must have its periapsis above the surface; recompute $a$ from the energy and $b$ from the area.`,
      D: r`This is close to the **apoapsis**, $a + c \approx 37{,}000$ km. The periapsis is $a - c$.`,
      E: r`Too far. Recheck $c = \sqrt{a^2 - b^2}$; with $a = 23{,}600$ km and $b = 19{,}400$ km, $c$ is about 13,600 km.`,
    },
    takeaway: r`Energy gives a, area πab gives b, and periapsis is a − √(a² − b²).`,
  },

  "usaaao-2024-first-round-q8": {
    solution: [
      r`With constant surface density $\sigma$, the mass inside radius $r$ is $M(r) = \sigma\pi r^2 \propto r^2$.`,
      r`Treating the enclosed mass as the source of gravity, $\dfrac{v^2}{r} = \dfrac{GM(r)}{r^2}$ gives $v^2 \propto \dfrac{r^2}{r} = r$, so $v \propto \sqrt{r}$: the rotation speed keeps rising outward.`,
    ],
    wrongChoices: {
      A: r`$v \propto 1/\sqrt{r}$ is the Keplerian fall-off for a **point mass**. Here the mass keeps growing as $r^2$, which reverses the trend.`,
      B: r`$1/r$ would need the enclosed mass to fall as $1/r$; it grows as $r^2$.`,
      D: r`$v \propto r$ is solid-body rotation, which needs $M(r) \propto r^3$ (a uniform 3D sphere). A uniform disc has $M \propto r^2$.`,
      E: r`This would need $M(r) \propto r^4$, faster than any uniform distribution.`,
    },
    takeaway: r`v² = GM(r)/r, and a uniform disc has M(r) ∝ r², giving v ∝ √r.`,
  },

  "usaaao-2024-first-round-q9": {
    solution: [
      r`Parallax is the baseline divided by the distance, so a telescope with a fixed angular resolution can measure distances out to $d_{\max} \propto$ baseline. From Mars the baseline is 1.524 AU instead of 1 AU, so $d_{\max}$ grows by 1.524.`,
      r`The number of stars within reach scales with the **volume**, $d_{\max}^3$: $1.524^3 \approx 3.5$, closest to **4**.`,
    ],
    wrongChoices: {
      A: r`Fewer stars would mean a shorter reach, but a longer baseline makes parallaxes bigger and extends the reach.`,
      B: r`Fewer stars is backwards: from Mars the parallax angles are larger, so more distant stars become measurable.`,
      C: r`The reach grows by the baseline ratio 1.524, so the count of measurable stars grows too.`,
      E: r`Too many. The reach grows by 1.524, and volume grows by the cube of that, about 3.5, not 8.`,
    },
    takeaway: r`Parallax reach scales with the baseline, and star counts scale with reach cubed.`,
  },

  "usaaao-2024-first-round-q10": {
    solution: [
      r`With zero obliquity the Sun sits on the celestial equator all year, so its declination is always 0 and only its right ascension changes, about 4 minutes per day, starting from 0 h at the vernal equinox.`,
      r`At latitude $42.2^\circ$ the Sun is $18^\circ$ below the horizon when $\cos H = \dfrac{\sin(-18^\circ)}{\cos 42.2^\circ} = -0.417$, i.e. for hour angles between $7.65$ h and $16.35$ h. M52 ($\alpha = 0$ h, $\delta = 60^\circ$) is above $30^\circ$ altitude for hour angles within $\pm 6.85$ h of its transit, i.e. sidereal times between $17.15$ h and $6.85$ h.`,
      r`On the equinox the dark window runs from sidereal time $7.65$ h to $16.35$ h, missing M52's window entirely. The dark window drifts later with the Sun's RA, and overlaps M52's window once the Sun's RA exceeds about $0.8$ h, roughly 12 to 13 days after the equinox, in early April. The earliest listed date after that is **April 21**.`,
    ],
    wrongChoices: {
      B: r`By June 21 the object is observable, but the question asks for the **earliest** listed date, and the geometry already works from early April.`,
      C: r`Observable in August, but far from the earliest possibility; the dark window reaches M52's high-altitude window only a couple of weeks after the equinox.`,
      D: r`In October M52 is high in the evening and easy, but the question wants the first opportunity after the vernal equinox.`,
      E: r`December works but is the latest of the dates listed. The first chance comes in early April.`,
    },
    takeaway: r`Combine the object's altitude window with the astronomical-twilight window; the Sun's RA drift of 4 min/day slides them into overlap.`,
  },

  "usaaao-2024-first-round-q11": {
    solution: [
      r`A 10 km deep hole only 10 m wide is a narrow tube: sunlight reaches the bottom only when the Sun is essentially at the **zenith**. The Sun is overhead at noon only when its declination equals the observer's latitude.`,
      r`The two dates, November 2 and February 9, are symmetric about the December solstice (about 49 days before and after), so the Sun has the same declination on both: about $-14.6^\circ$.`,
      r`So Joe is at latitude $14.6^\circ$ **south**, i.e. $14^\circ 38'$ S.`,
    ],
    wrongChoices: {
      A: r`At $42^\circ$ N the Sun never comes within $19^\circ$ of the zenith; no sunlight could ever reach the bottom of such a deep hole.`,
      B: r`At $19.5^\circ$ N the Sun is overhead in **May and July**, when its declination is $+19.5^\circ$, not in November and February.`,
      C: r`At $4.7^\circ$ N the overhead dates would fall in late March and mid-September, near the equinoxes.`,
      E: r`At $34.6^\circ$ S the Sun's declination never reaches $-34.6^\circ$ (its minimum is $-23.4^\circ$), so it is never overhead there.`,
    },
    takeaway: r`The Sun is overhead at noon when its declination equals your latitude; November 2 and February 9 both have δ ≈ −14.6°.`,
  },

  "usaaao-2024-first-round-q12": {
    solution: [
      r`From the centre of the bottom, the opening has an angular radius of $\arctan(10/10{,}000) \approx 0.057^\circ$. The Sun's disc has an angular radius of about $0.27^\circ$, so some direct sunlight reaches the bottom while the Sun's centre is within $0.057^\circ + 0.27^\circ = 0.32^\circ$ of the zenith.`,
      r`The Sun crosses the sky at $15^\circ$ per hour times $\cos\delta$; with $\delta = -14.6^\circ$ that is about $14.5^\circ$ per hour, or $0.242^\circ$ per minute.`,
      r`Time in view: $\dfrac{2 \times 0.32^\circ}{0.242^\circ/\text{min}} \approx 2.7$ minutes, about **2 min 41 s**.`,
    ],
    wrongChoices: {
      A: r`This counts only the opening's own angular width ($0.11^\circ$) and ignores the Sun's disc, which is much wider than the opening.`,
      B: r`Too short. Add the Sun's angular radius ($0.27^\circ$) to the opening's angular radius before doubling and dividing by the Sun's rate.`,
      C: r`A little short. Check the Sun's angular motion: $15^\circ$ per hour reduced by $\cos\delta$ for a Sun at declination $-14.6^\circ$.`,
      D: r`This uses $15^\circ$ per hour without the $\cos\delta$ factor. At declination $-14.6^\circ$ the Sun moves slightly slower across the sky, lengthening the interval.`,
    },
    takeaway: r`The Sun sweeps 15° cos δ per hour; a narrow shaft sees it for (opening + solar radius) × 2 ÷ that rate.`,
  },

  "usaaao-2024-first-round-q13": {
    solution: [
      r`Both stars orbit their common **centre of mass**, which must sit at a **focus** of the visible star's ellipse, at $(\pm\sqrt{a^2 - b^2},\,0)$. The two stars are always on opposite sides of the centre of mass, at distances in inverse proportion to their masses.`,
      r`Test option D: with equal masses the centre of mass is the midpoint of the two stars. The midpoint of $(0, b)$ and $(-2\sqrt{a^2 - b^2}, -b)$ is $(-\sqrt{a^2 - b^2}, 0)$, exactly the left focus. Consistent.`,
    ],
    wrongChoices: {
      A: r`The other star cannot sit **at** the focus; the focus is the centre of mass, which lies between the two stars, not on one of them. The mass $M_1 + M_2$ makes no sense either.`,
      B: r`With equal masses the centre of mass would be the midpoint of $(0, b)$ and $(0, -b)$, the origin, which is the ellipse's centre, not a focus.`,
      C: r`A star cannot be located at the centre of mass itself, and the reduced mass $M_1M_2/(M_1 + M_2)$ is a bookkeeping quantity, not a star's mass.`,
      E: r`The centre of mass of $(0, b)$ with mass $M_1$ and this point with mass $M_2$ does not land on a focus for general masses; the geometry does not work.`,
    },
    takeaway: r`In a binary the centre of mass sits at a focus of each star's ellipse, with the stars on opposite sides of it.`,
  },

  "usaaao-2024-first-round-q14": {
    solution: [
      r`Rotation periods from speed and circumference. Equator: $P_1 = \dfrac{2\pi R_\odot}{2021} = \dfrac{4.37 \times 10^9}{2021} \approx 2.16 \times 10^6$ s $= 25.0$ days. At $60^\circ$ the circle is half as long: $P_2 = \dfrac{2.19 \times 10^9}{809} \approx 2.70 \times 10^6$ s $= 31.2$ days.`,
      r`The equatorial spot gains one lap when $\dfrac{t}{P_1} - \dfrac{t}{P_2} = 1$: $t = \dfrac{1}{1/25.0 - 1/31.2} \approx 126$ days.`,
    ],
    wrongChoices: {
      A: r`This is the **difference** of the two periods, not the time for an extra lap. Use $1/t = 1/P_1 - 1/P_2$.`,
      B: r`This is the equatorial rotation period itself. The extra-lap time is much longer, since the two spots move at similar rates.`,
      C: r`This is the rotation period at $60^\circ$ south. The beat period between the two rotations is what is asked.`,
      D: r`Not from the formula. Compute $1/(1/25.0 - 1/31.2)$.`,
    },
    takeaway: r`Two rotating features realign after 1/(1/P₁ − 1/P₂), the beat period.`,
  },

  "usaaao-2024-first-round-q15": {
    solution: [
      r`Proton B stops where its kinetic energy has all turned into Coulomb potential energy: $(\gamma - 1)m_pc^2 = \dfrac{ke^2}{r}$. At $0.9c$, $\gamma = \dfrac{1}{\sqrt{1 - 0.81}} = 2.29$, so the kinetic energy is $1.29 \times 938$ MeV $\approx 1210$ MeV $= 1.94 \times 10^{-10}$ J.`,
      r`$ke^2 = 8.99 \times 10^9 \times (1.6 \times 10^{-19})^2 = 2.3 \times 10^{-28}$ J·m, so $r = \dfrac{2.3 \times 10^{-28}}{1.94 \times 10^{-10}} \approx 1.2 \times 10^{-18}$ m.`,
      r`That is a thousand times smaller than a proton, so at this (wildly unrealistic) speed the protons would simply collide.`,
    ],
    wrongChoices: {
      A: r`Far too large; this is atomic scale. The kinetic energy at $0.9c$ is over a GeV, which brings the protons far closer than that.`,
      B: r`This is about the size of a nucleus, roughly the turning radius for a proton with only a few hundred keV of energy, not 1.2 GeV.`,
      C: r`Too large by a factor of 2000. Check that the kinetic energy is relativistic, $(\gamma - 1)m_pc^2$, with $\gamma = 2.29$.`,
      D: r`This uses the classical $\tfrac{1}{2}m_pv^2$ (about 380 MeV) instead of the relativistic kinetic energy $(\gamma - 1)m_pc^2$ (about 1210 MeV). At $0.9c$ the difference is a factor of 3.`,
    },
    takeaway: r`Set relativistic kinetic energy (γ − 1)mc² equal to ke²/r to find the classical turning point.`,
  },

  "usaaao-2024-first-round-q16": {
    solution: [
      r`The lunar cycle (new moon to new moon) is the moon's **synodic** period: the time to lap the Sun's apparent motion. With everything moving the same way, $\dfrac{1}{S} = \dfrac{1}{P_{\text{moon}}} - \dfrac{1}{P_{\text{year}}} = \dfrac{1}{42} - \dfrac{1}{420}$.`,
      r`$S = \dfrac{1}{0.02381 - 0.00238} \approx 46.7$ days. The planet's rotation period plays no part.`,
    ],
    wrongChoices: {
      A: r`Too close to the sidereal period. Over one moon orbit the planet moves a tenth of the way round its Sun, so the moon needs noticeably extra time to realign with the Sun.`,
      B: r`Not from the formula. The synodic period is $1/(1/42 - 1/420)$.`,
      D: r`Too long. Check the subtraction: $1/42 - 1/420 = 9/420$, so $S = 420/9$.`,
      E: r`Too long. The 2-day rotation period is a distraction; only the moon's orbit and the planet's year matter.`,
    },
    takeaway: r`Synodic month: 1/S = 1/P_moon − 1/P_year.`,
  },

  "usaaao-2024-first-round-q17": {
    solution: [
      r`Diffraction limit: $\theta = 1.22\,\dfrac{\lambda}{D} = 1.22 \times \dfrac{5 \times 10^{-7}}{39.3} = 1.55 \times 10^{-8}$ rad, which is $1.55 \times 10^{-8} \times 206{,}265 = 3.2 \times 10^{-3}$ arcseconds.`,
      r`A 1 AU separation spans $1/d$ arcseconds at $d$ parsecs, so the planet is resolvable out to $d = \dfrac{1}{3.2 \times 10^{-3}} \approx 312$ pc.`,
    ],
    wrongChoices: {
      A: r`Too close. Check the conversion: $1.55 \times 10^{-8}$ rad is $3.2$ milliarcseconds, and 1 AU spans that angle at about 312 pc.`,
      B: r`Too close. Recompute $1.22\lambda/D$ with $D = 39.3$ m, then $d = 1/\theta$ with $\theta$ in arcseconds.`,
      D: r`Too far. The 1.22 factor must be included; without it the limit comes out too optimistic.`,
      E: r`Too far. At 512 pc a 1 AU separation is only 2 milliarcseconds, below the ELT's 3.2 milliarcsecond limit at 500 nm.`,
    },
    takeaway: r`θ = 1.22λ/D in arcseconds, and 1 AU is resolvable out to 1/θ parsecs.`,
  },

  "usaaao-2024-first-round-q18": {
    solution: [
      r`At local noon the Sun is on the meridian in every season, so a vertical stick's shadow points due north on both days: $\alpha_{12} = \beta_{12}$.`,
      r`At 6 PM (hour angle $90^\circ$) the equinox Sun is exactly due **west**, so the shadow points due east, azimuth $90^\circ$. In June the Sun at hour angle $90^\circ$ is **north** of west (and still up), as the solution figure shows, so the shadow points **south** of east, azimuth greater than $90^\circ$.`,
      r`Hence $\alpha_6 < \beta_6$.`,
    ],
    wrongChoices: {
      A: r`The 6 PM shadows differ: in summer the Sun has swung north of west by 6 PM, so its shadow lies south of east, at a larger azimuth than the equinox shadow.`,
      B: r`The noon shadows are identical (both due north), since the Sun is on the meridian at noon regardless of season.`,
      C: r`The noon shadows are the same, not different, and the 6 PM shadows are the ones that differ.`,
      D: r`The inequality is the wrong way round. The summer 6 PM Sun is north of west, putting its shadow south of east, so the summer azimuth $\beta_6$ is the larger.`,
    },
    takeaway: r`Noon shadows always point along the meridian; at other hours the Sun's declination shifts the shadow's azimuth.`,
  },

  "usaaao-2024-first-round-q19": {
    solution: [
      r`The Sun's daily motion is a rotation about the Earth's axis. If the stick is **parallel to that axis**, pointing at the north celestial pole, the shadow's direction at a given hour angle is the same on every day of the year, whatever the Sun's declination (see the solution figure).`,
      r`At latitude $40^\circ$ N the pole is $40^\circ$ above the northern horizon, which is $90^\circ - 40^\circ = 50^\circ$ from the vertical, tilted **toward the north**.`,
    ],
    wrongChoices: {
      A: r`A vertical stick's shadow at a given hour swings with the seasons (as the previous question showed), so one set of hour lines would not work all year.`,
      B: r`This tilts the stick to point $50^\circ$ above the northern horizon, missing the pole. The pole's altitude equals the latitude, $40^\circ$, which is $50^\circ$ from vertical.`,
      D: r`Tilting toward the **south** points the stick away from the celestial pole; in the northern hemisphere the pole is in the north.`,
      E: r`Wrong direction. The stick must aim at the **north** celestial pole, $40^\circ$ up in the north.`,
    },
    takeaway: r`A sundial gnomon points at the celestial pole: tilted (90° − latitude) from vertical toward the pole.`,
  },

  "usaaao-2024-first-round-q20": {
    solution: [
      r`Gauss's law for an infinite cylinder: the gravitational field at distance $d$ from the axis satisfies $g \cdot 2\pi d L = 4\pi G \rho \pi R^2 L$, so $g = \dfrac{2\pi G\rho R^2}{d}$. It falls off as $1/d$, not $1/d^2$.`,
      r`A circular orbit needs $\dfrac{v^2}{d} = g$, so $v^2 = 2\pi G\rho R^2$: the orbital speed is the **same at every distance**.`,
      r`Period: $P = \dfrac{2\pi d}{v} = \dfrac{2\pi d}{R\sqrt{2\pi G\rho}} = \dfrac{d}{R}\sqrt{\dfrac{2\pi}{G\rho}}$.`,
    ],
    wrongChoices: {
      A: r`This has an extra factor of 2. Check: $P = 2\pi d/v$ with $v = R\sqrt{2\pi G\rho}$ gives $(d/R)\sqrt{2\pi/G\rho}$.`,
      C: r`This simplifies to $(d/R)\sqrt{\pi/G\rho}$, half the correct value; the Gauss's-law field has a factor of 2 that has been lost.`,
      D: r`Too large by $\sqrt{2}$. The field is $2\pi G\rho R^2/d$, giving $v^2 = 2\pi G\rho R^2$, not $4\pi G\rho R^2$.`,
      E: r`Too small by $\sqrt{2}$. Recheck the Gauss's-law field: $g = 2\pi G\rho R^2/d$.`,
    },
    takeaway: r`Around a long cylinder gravity falls as 1/d, so orbital speed is constant and the period grows linearly with distance.`,
  },

  "usaaao-2024-first-round-q21": {
    solution: [
      r`Today's observable universe has radius $14.25$ Gpc $= 4.4 \times 10^{26}$ m and volume $\tfrac{4}{3}\pi r^3 \approx 3.6 \times 10^{80}$ m³. For only a 1% chance of a single monopole, the present density must be $n_0 = \dfrac{0.01}{3.6 \times 10^{80}} \approx 3 \times 10^{-83}$ m⁻³.`,
      r`Number density dilutes as the cube of the total linear expansion $F$: $\dfrac{10^{82}}{F^3} = 3 \times 10^{-83}$, so $F^3 \approx 3.6 \times 10^{164}$ and $F \approx 7 \times 10^{54}$.`,
      r`The ordinary expansion since inflation supplies $5 \times 10^{26}$, so inflation itself must supply $\dfrac{7 \times 10^{54}}{5 \times 10^{26}} \approx 1.4 \times 10^{28} \approx e^{65}$.`,
    ],
    wrongChoices: {
      A: r`Far too little; $e^{40} \approx 2 \times 10^{17}$ leaves the universe stuffed with monopoles. The required factor is about $10^{28}$.`,
      B: r`Too little. $e^{50} \approx 5 \times 10^{21}$ falls short by a factor of a million; check the cube root of the dilution factor.`,
      C: r`Too little. The total linear factor must be about $7 \times 10^{54}$; after dividing out $5 \times 10^{26}$, about $1.4 \times 10^{28}$ remains, which is $e^{65}$, not $e^{55}$.`,
      E: r`More than needed. $e^{85}$ would dilute the monopoles far below a 1% chance; the question asks for the factor that gives exactly 1%.`,
    },
    takeaway: r`Number densities dilute as the cube of the linear expansion; inflation must supply about e⁶⁰ or more to hide the monopoles.`,
  },

  "usaaao-2024-first-round-q22": {
    solution: [
      r`For an ideal gas $P \propto \rho T$, so $T \propto \dfrac{P}{\rho}$. The average density scales as $\rho \propto \dfrac{M}{R^3}$.`,
      r`$T_c \propto \dfrac{M^3/R^5}{M/R^3} = \dfrac{M^2}{R^2}$.`,
    ],
    wrongChoices: {
      A: r`Not from dividing $P$ by $\rho$. With $P \propto M^3/R^5$ and $\rho \propto M/R^3$, the ratio is $M^2/R^2$.`,
      B: r`This is the familiar $T_c \propto M/R$ for ordinary stars, where $P_c \propto M^2/R^4$. These X stars have a different pressure law, giving a different exponent.`,
      C: r`The powers of $R$ are the wrong sign: dividing $R^{-5}$ by $R^{-3}$ gives $R^{-2}$.`,
      E: r`The temperature depends on both mass and radius here; the exponents do not cancel.`,
    },
    takeaway: r`Central temperature scales as P_c / ρ, with ρ ∝ M/R³.`,
  },

  "usaaao-2024-first-round-q24": {
    solution: [
      r`For a star on a circular orbit at the edge, $M = \dfrac{v^2 r}{G}$.`,
      r`$r = 15{,}000$ pc $\times 3.086 \times 10^{16}$ m/pc $= 4.6 \times 10^{20}$ m and $v = 2.7 \times 10^5$ m/s, so $M = \dfrac{(2.7 \times 10^5)^2 \times 4.6 \times 10^{20}}{6.674 \times 10^{-11}} \approx 5 \times 10^{41}$ kg.`,
      r`Dividing by $2 \times 10^{30}$ kg gives about $2.5 \times 10^{11}$ solar masses, closest to **$10^{11}$**.`,
    ],
    wrongChoices: {
      A: r`Far too small; a million solar masses is a globular cluster, not a galaxy with stars orbiting at 270 km/s out to 15 kpc.`,
      C: r`Too large by a factor of $10^7$. Check the conversion of parsecs to metres and the division by the Sun's mass.`,
      D: r`Far too large. The whole observable universe holds only about $10^{22}$ solar masses of stars.`,
      E: r`This is the mass in **kilograms**, not solar masses. Divide by $2 \times 10^{30}$ kg.`,
    },
    takeaway: r`Dynamical mass M = v²r/G; a Milky Way-like galaxy is a few times 10¹¹ solar masses.`,
  },

  "usaaao-2024-first-round-q25": {
    solution: [
      r`Distance modulus with the luminosity distance: $m - M = 5\log_{10}\!\left(\dfrac{2.8 \times 10^9}{10}\right) = 5 \times 8.45 = 42.2$, so $M = 22 - 42.2 = -20.2$.`,
      r`Compared with the Sun ($M_\odot = 4.83$): $\dfrac{L}{L_\odot} = 10^{0.4(4.83 + 20.2)} = 10^{10.0} \approx 10^{10}$ solar luminosities.`,
    ],
    wrongChoices: {
      B: r`A hundred times too bright; this would need an absolute magnitude near $-25$. Check $M = m - 5\log_{10}(d/10\ \text{pc})$ with $d = 2.8 \times 10^9$ pc.`,
      C: r`Ten times too bright. Recompute $10^{0.4(4.83 - M)}$ with $M \approx -20.2$.`,
      D: r`A thousand times too bright, brighter than the most luminous galaxies known.`,
      E: r`A hundred thousand times too bright; that is the luminosity of a whole galaxy cluster or a brilliant quasar.`,
    },
    takeaway: r`Use the luminosity distance in the distance modulus, then L/L_sun = 10^(0.4(4.83 − M)).`,
  },

  "usaaao-2024-first-round-q26": {
    solution: [
      r`The true field of view equals the eyepiece's apparent field divided by the magnification. To make the $0.5^\circ$ Moon fill the $60^\circ$ eyepiece, the magnification must be $\dfrac{60}{0.5} = 120\times$.`,
      r`Magnification is $F_{\text{tel}}/F_{\text{eye}}$, so $F_{\text{tel}} = 120 \times 25\ \text{mm} = 3000$ mm.`,
    ],
    wrongChoices: {
      A: r`This gives $80\times$ and a true field of $0.75^\circ$, leaving space around the Moon.`,
      B: r`This gives $60\times$ and a true field of $1^\circ$, twice the Moon's size.`,
      C: r`This gives $240\times$ and a true field of only $0.25^\circ$, so half the Moon would be cut off.`,
      E: r`This gives $40\times$ and a $1.5^\circ$ field, three times the Moon's diameter.`,
    },
    takeaway: r`True field = eyepiece field ÷ magnification, and magnification = F_telescope / F_eyepiece.`,
  },

  "usaaao-2024-first-round-q27": {
    solution: [
      r`Wien's law gives today's CMB temperature: $T_0 = \dfrac{2.898 \times 10^{-3}}{1.063 \times 10^{-3}} = 2.73$ K.`,
      r`The universe has expanded by $1 + z = \dfrac{3000}{2.73} \approx 1100$ since the CMB was released.`,
      r`Matter density scales as $(1 + z)^3$: $1100^3 \approx 1.3 \times 10^9$, so about **$10^9$** times denser.`,
    ],
    wrongChoices: {
      A: r`This is the expansion factor itself, about 1100. Density involves volume, so cube it.`,
      B: r`This is $1100^2$, an area scaling. Matter density falls with **volume**, the cube of the expansion factor.`,
      D: r`This is $1100^4$, which is how **radiation** energy density scales (an extra factor for the redshift of each photon). Matter scales as the cube.`,
      E: r`Far too large; this would be $1100^5$. Matter density goes as $(1 + z)^3$.`,
    },
    takeaway: r`Matter density scales as (1 + z)³; with z ≈ 1100 at recombination, that is about 10⁹.`,
  },

  "usaaao-2024-first-round-q28": {
    solution: [
      r`Use the spherical triangle North Pole, Lubbock, destination. Known: the side from the pole to Lubbock is its co-latitude, $90^\circ - 33.58^\circ = 56.42^\circ$; the angle at the pole is the longitude difference, $101.84^\circ - 71.06^\circ = 30.78^\circ$; and the angle at Lubbock is the initial bearing, $63^\circ$.`,
      r`The four-part formula gives the unknown side $x$ (the destination's co-latitude): $\cot x \sin 56.42^\circ = \cot 63^\circ \sin 30.78^\circ + \cos 56.42^\circ \cos 30.78^\circ = 0.261 + 0.475 = 0.736$, so $\cot x = 0.883$ and $x = 48.54^\circ$.`,
      r`The plane reaches longitude $71.06^\circ$ W at latitude $90^\circ - 48.54^\circ = 41.46^\circ$ N, about 100 km south of Boston.`,
    ],
    wrongChoices: {
      A: r`Too far north; a great circle from Lubbock reaching this latitude at Boston's longitude would need an initial bearing well under 60°.`,
      B: r`Too far north. Solve the spherical triangle with the 63° bearing; the co-latitude at the destination comes out about 48.5°.`,
      C: r`Too far north. Recheck the four-part formula: $\cot x \sin c = \cot A \sin B + \cos c \cos B$ with $c = 56.42^\circ$, $A = 63^\circ$, $B = 30.78^\circ$.`,
      E: r`Too far south. The initial bearing of 63° curves the route slightly less than this; the result is about $41.5^\circ$ N.`,
    },
    takeaway: r`Two angles and the included side of a spherical triangle fix the remaining sides through the four-part formula.`,
  },

  "usaaao-2024-first-round-q29": {
    solution: [
      r`At its highest latitude the satellite is over $69.49^\circ$ N; the best case has it directly north of Boston ($42.36^\circ$ N), so the angle at Earth's centre between Boston and the sub-satellite point is $69.49^\circ - 42.36^\circ = 27.13^\circ$.`,
      r`In the triangle Earth-centre, Boston, satellite: sides $6371$ km and $6371 + 1450 = 7821$ km with the $27.13^\circ$ angle between them. Law of cosines: $s^2 = 6371^2 + 7821^2 - 2(6371)(7821)\cos 27.13^\circ \approx 1.31 \times 10^7$, so $s \approx 3610$ km.`,
      r`Law of sines for the angle at Boston: $\sin B = \dfrac{7821\sin 27.13^\circ}{3610} = 0.987$, so $B \approx 99.4^\circ$ (the obtuse solution, since the satellite is above the horizon). The elevation is $B - 90^\circ \approx 9.4^\circ$.`,
    ],
    wrongChoices: {
      B: r`Too high. Recompute the triangle: the line of sight to the satellite makes an angle of about $99.4^\circ$ with the downward vertical, i.e. $9.4^\circ$ above the horizon.`,
      C: r`Too high. Check the law-of-cosines distance (about 3610 km) before applying the law of sines.`,
      D: r`Too high; this would need the satellite to be nearer or the latitude gap smaller than $27^\circ$.`,
      E: r`Far too high. A satellite only 1450 km up and $27^\circ$ of latitude away sits low in the northern sky.`,
    },
    takeaway: r`Use the Earth-centre, observer, satellite triangle: law of cosines for the range, law of sines for the elevation.`,
  },
};
