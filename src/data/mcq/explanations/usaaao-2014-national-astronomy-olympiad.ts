import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2014 National Astronomy Olympiad
// questions, keyed by question ID. `r` is String.raw, so LaTeX can be
// written with single backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2014-national-astronomy-olympiad-q1": {
    solution: [
      r`Each constellation is best seen when it is opposite the Sun in the sky, which happens at a different time of year for each one.`,
      r`**Delphinus** (the Dolphin) sits just east of the Summer Triangle, near Altair, so it rides high in the evening sky in **July and August**.`,
      r`The other three are all winter constellations that cluster around Orion, so they are hidden behind the Sun during summer.`,
    ],
    wrongChoices: {
      B: r`Taurus (the Bull) sits right next to Orion and is a classic **winter** constellation, best seen around December and January. In summer it is up during the daytime, lost in the Sun's glare.`,
      C: r`Monoceros (the Unicorn) is the faint constellation tucked between Orion and Canis Major. It shares their **winter** season and is not visible in summer evenings.`,
      D: r`Eridanus (the River) flows away from Rigel at the foot of Orion, so it is a **winter** constellation too. It is below the horizon or in daylight throughout summer.`,
    },
    takeaway: r`Constellations near Orion belong to winter; those near the Summer Triangle belong to summer.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q2": {
    solution: [
      r`An **asterism** is a familiar pattern of bright stars that is not itself a constellation. The Winter Triangle is a nearly equilateral triangle of three of the brightest winter stars.`,
      r`Its corners are **Sirius** (Canis Major), **Procyon** (Canis Minor) and **Betelgeuse** (Orion's shoulder). All three are up together on winter evenings, which is where the name comes from.`,
    ],
    wrongChoices: {
      A: r`Regulus, Spica and Arcturus form the **Spring Triangle**, which rises as Orion sets. Right pattern, wrong season.`,
      C: r`Vega, Altair and Deneb are the **Summer Triangle**, the most famous asterism of the summer sky, not the winter one.`,
      D: r`Alpheratz, Algenib and Markab are three corners of the **Great Square of Pegasus**, an autumn asterism, and it is a square rather than a triangle.`,
    },
    takeaway: r`Each season has a signature asterism: Winter Triangle, Spring Triangle, Summer Triangle, and the autumn Great Square of Pegasus.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q3": {
    solution: [
      r`**Culmination** means the Moon is at its highest point, crossing the meridian due south. The Sun culminates at noon, so the time the Moon culminates tells you how far it is from the Sun in the sky.`,
      r`The Moon culminates at 8 pm, which is **8 hours after the Sun**. Since $24$ hours corresponds to a full $360^\circ$, the Moon is $\frac{8}{24} \times 360^\circ = 120^\circ$ east of the Sun.`,
      r`Use the landmark phases: a first-quarter Moon ($90^\circ$ east) culminates at 6 pm, and a full Moon ($180^\circ$) culminates at midnight. 8 pm falls between them, so the Moon is more than half lit and still growing: **waxing gibbous**.`,
    ],
    wrongChoices: {
      A: r`A waning gibbous Moon is west of the Sun, trailing it, so it culminates **after midnight**, between midnight and 6 am. A Moon at its highest at 8 pm cannot be waning.`,
      B: r`A waning crescent rises just before the Sun and culminates in the **late morning**, between 6 am and noon. It is a dawn object, not an evening one.`,
      D: r`A waxing crescent is only a little east of the Sun, so it culminates in the **afternoon**, between noon and 6 pm, and sets soon after the Sun. By 8 pm it is already low in the west.`,
    },
    takeaway: r`The Moon's culmination time maps to its phase: noon is new, 6 pm is first quarter, midnight is full, and 6 am is third quarter.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q4": {
    solution: [
      r`A Sun-like star spends most of its life on the **main sequence**, fusing hydrogen in its core.`,
      r`When the core runs out of hydrogen, the star swells and climbs the **red-giant branch** while its helium core is squeezed tighter and hotter.`,
      r`At the top of the red-giant branch the core suddenly ignites helium in a burst called the **helium flash**. The star then burns helium for a while before losing its outer layers.`,
      r`Those escaping layers glow as a **planetary nebula**, and the bare hot core left behind cools forever as a **white dwarf**.`,
    ],
    wrongChoices: {
      B: r`This puts the helium flash before the red-giant branch. The flash needs a compressed, degenerate helium core, and that core is only built up **during** the red-giant phase, so the flash cannot come first.`,
      C: r`This puts the white dwarf before the planetary nebula. The nebula is the star's outer layers being thrown off, and the white dwarf is what is **left behind** afterwards, so the nebula has to come first.`,
      D: r`Two things are out of order here: the helium flash cannot happen before the red-giant branch builds the helium core, and the white dwarf is what remains **after** the planetary nebula is shed.`,
    },
    takeaway: r`Main sequence, red giant, helium flash, planetary nebula, white dwarf: a Sun-like star's story in five steps.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q5": {
    solution: [
      r`Every planet has a **Roche limit**: inside that distance, the planet's tidal pull is strong enough to tear a moon or captured body apart, and loose rubble there cannot clump back into a moon.`,
      r`Saturn's rings sit inside its Roche limit. The best explanation is that they are the shattered remains of one or more small icy moons, plus comets or asteroids that strayed too close and were pulled to pieces.`,
      r`This also fits what we see: the ring particles are mostly bright, fresh ice, which suggests they are far younger than Saturn itself.`,
    ],
    wrongChoices: {
      A: r`Material that is this close to Saturn lies inside its Roche limit, where tidal forces prevent particles from ever coalescing. The rings also look far too bright and fresh to have survived unchanged for 4.5 billion years.`,
      B: r`Saturn is a gas giant with **no solid surface** to blast material off. An impact would plunge into the atmosphere, and any splashed gas would fall straight back.`,
      D: r`Capturing a stream of interstellar material would be astonishingly unlikely, and it could not explain why the rings are a thin, flat disc of icy chunks sitting exactly in Saturn's equatorial plane.`,
    },
    takeaway: r`Inside a planet's Roche limit, tides shred moons into rings instead of letting rubble gather into moons.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q6": {
    solution: [
      r`The **Lagrange points** are five places where the Sun's and Earth's gravity combine with the orbital motion so that a spacecraft can keep pace with Earth as both go around the Sun.`,
      r`**L2** lies about 1.5 million km beyond Earth, on the side away from the Sun. A spacecraft parked there orbits the Sun once a year, exactly like Earth, without needing to fire its engines constantly.`,
      r`That is the payoff: only small, occasional thruster nudges are needed to stay near L2, so very little fuel is spent keeping station. As a bonus, the Sun, Earth and Moon all stay on one side, so a single sunshield can block them all.`,
    ],
    wrongChoices: {
      B: r`Earth does not act as a shield out there. At 1.5 million km Earth looks tiny, and the telescope is deliberately kept in a wide halo orbit around L2, out of Earth's shadow, because it needs sunlight for its solar panels. It relies on its own sunshield instead.`,
      C: r`The Moon is even smaller in the sky from L2 than Earth is, and it moves around constantly. It offers no shielding at all; the telescope carries its own giant sunshield for that job.`,
      D: r`If anything, communication is harder from L2: the telescope is four times farther away than the Moon, so signals are weaker and need big dish antennas. Nearby Earth orbit would be far easier to talk to.`,
    },
    takeaway: r`L2 lets a spacecraft keep pace with Earth around the Sun for almost no fuel, with the Sun, Earth and Moon all on one side.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q7": {
    solution: [
      r`Each of the three described methods is a real, widely used way to find exoplanets, so none of them can be ruled out.`,
      r`**Astrometry** watches the parent star wobble back and forth in its position on the sky as the planet tugs on it.`,
      r`The **radial-velocity** (Doppler) method detects the same wobble in a different way: as the star moves towards and away from us, its spectral lines shift slightly blue and red.`,
      r`The **transit** method catches the tiny, regular dip in a star's brightness each time a planet passes in front of it. Most known exoplanets were found this way.`,
    ],
    wrongChoices: {
      A: r`Watching a star wobble across the sky is a genuine technique called **astrometry**. It is hard, because the wobble is tiny, but it works and has found planets, so it cannot be the impossible method.`,
      B: r`Measuring the back-and-forth Doppler shift of a star's light is the **radial-velocity** method, the technique that found the first exoplanet around a Sun-like star in 1995. It is definitely possible.`,
      C: r`Looking for periodic dips in brightness is the **transit** method, used by the Kepler and TESS missions to discover thousands of planets. It is very much a possible method.`,
    },
    takeaway: r`Astrometry, radial velocity and transits are the three classic exoplanet-hunting methods, and all three work.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q8": {
    solution: [
      r`Magnification is the telescope's focal length divided by the eyepiece's focal length: $M = \dfrac{F_{\text{telescope}}}{f_{\text{eyepiece}}}$.`,
      r`First find the telescope's focal length. The **focal ratio** is focal length divided by aperture, so focal length is aperture times focal ratio. The aperture is $8 \times 25.4 = 203.2$ mm, giving $F = 203.2 \times 6 \approx 1219$ mm.`,
      r`Now divide by the eyepiece: $M = \dfrac{1219}{12} \approx 102$, which is about **$100\times$**.`,
    ],
    wrongChoices: {
      A: r`$30\times$ would need an eyepiece of about 40 mm on this telescope. Check that you multiplied the aperture (in mm) by the focal ratio before dividing by the eyepiece.`,
      B: r`$50\times$ would come from a 24 mm eyepiece, twice the one used here. A factor of two has slipped somewhere; redo the focal length calculation carefully.`,
      D: r`$200\times$ would need a 6 mm eyepiece, or a telescope with twice the focal length. Make sure you used the 12 mm eyepiece and the f/6 ratio, not f/12.`,
    },
    takeaway: r`Telescope focal length is aperture times focal ratio, and magnification is that focal length divided by the eyepiece's.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q9": {
    solution: [
      r`A telescope sees fainter objects than the eye because it collects more light, and light collected scales with the **area** of the opening, not its width.`,
      r`The aperture ratio is $\dfrac{200}{5} = 40$, so the area ratio, and hence the light-gathering ratio, is $40^2 = 1600$.`,
      r`Turn a brightness ratio into magnitudes with $\Delta m = 2.5 \log_{10}(1600) \approx 2.5 \times 3.2 = 8.0$. Since 5 magnitudes is a factor of 100, 1600 is a bit more than $100 \times 10$, and that "bit more" lands right at 8 magnitudes.`,
    ],
    wrongChoices: {
      A: r`Six magnitudes is only a brightness factor of about $250$. The telescope gathers far more light than that; remember that light-gathering power depends on the aperture's **area**, so the diameter ratio has to be squared.`,
      B: r`Seven magnitudes corresponds to a factor of about $630$. Work out the area ratio, $(200/5)^2$, and then convert with $2.5 \log_{10}$ of that number; you will find it is larger than 7.`,
      D: r`Nine magnitudes would mean a factor of about $4000$ in brightness. That is more than a 200 mm telescope gains over a 5 mm pupil; compute $(200/5)^2$ and convert it to magnitudes.`,
    },
    takeaway: r`Light-gathering power goes with aperture area (diameter squared), and every factor of 100 in brightness is 5 magnitudes.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q10": {
    solution: [
      r`As Earth spins, the whole sky appears to rotate around the celestial pole once a day. An **equatorial mount** has one axis pointed straight at that pole.`,
      r`To follow a star you only need to turn that single axis at a steady rate, so a simple motor keeps the object centred for hours. That makes long-exposure photography and high-power viewing much easier.`,
      r`An **alt-az mount** moves up-down and left-right instead, so tracking needs both axes moving at constantly changing speeds, which requires a computer.`,
    ],
    wrongChoices: {
      A: r`Stability is not the equatorial mount's strong point. Its tilted axis and heavy counterweights make it tall and top-heavy; a Dobsonian alt-az mount, low and boxy, is usually the steadier of the two.`,
      C: r`Equatorial mounts are the **bulkier** option, with a tilted polar axis, counterweight shaft and weights. Alt-az mounts, especially Dobsonians, pack down much smaller.`,
      D: r`An equatorial mount is the **more** complex design: it has to be polar-aligned before use and balanced with counterweights. The alt-az mount is the simpler one to build and set up.`,
    },
    takeaway: r`An equatorial mount tracks the sky's daily rotation by turning just one polar-aligned axis.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q11": {
    solution: [
      r`Magnitudes cannot simply be added, because the scale is logarithmic. To combine two stars you add their **brightnesses** (fluxes), then convert back to a magnitude.`,
      r`Compare B with A. It is $5.82 - 3.18 = 2.64$ magnitudes fainter, so its brightness is $10^{-0.4 \times 2.64} \approx 0.088$ of A's. Together they shine with $1 + 0.088 = 1.088$ times A's brightness.`,
      r`Extra brightness makes the magnitude a little **smaller**: $m = 3.18 - 2.5 \log_{10}(1.088) \approx 3.18 - 0.09 = 3.09$.`,
    ],
    wrongChoices: {
      A: r`This would need Albireo B to add about 22% to A's light, but B is 2.64 magnitudes fainter, which is under 10% of A's brightness. The combined star can only be a little brighter than A alone.`,
      C: r`Adding a second star always makes the pair **brighter** than the brighter star alone, so the combined magnitude must be smaller than 3.18. Any value larger than 3.18 cannot be right.`,
      D: r`This is roughly the average of the two magnitudes, but magnitudes do not average. Two stars together are brighter than either one alone, so the answer must be below 3.18, not between the two values.`,
    },
    takeaway: r`To combine stars, add their fluxes, not their magnitudes; the pair is always slightly brighter than its brightest member.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q12": {
    solution: [
      r`A star never sets if it stays above the horizon even at the lowest point of its daily circle around the celestial pole.`,
      r`For an observer at latitude $\phi$, the pole sits $\phi$ above the horizon, so any star within $\phi$ of the pole is circumpolar. That means its declination must satisfy $\delta > 90^\circ - \phi$.`,
      r`For Romania, $90^\circ - 44^\circ 25' = 45^\circ 35'$. Only γ Draconis, at $\delta = +51^\circ 26'$, is above this limit, so it is the one that never sets.`,
    ],
    wrongChoices: {
      A: r`ζ Herculis has declination $+31^\circ 36'$, which is well below the circumpolar limit of $90^\circ$ minus the latitude. It dips below the horizon every day.`,
      B: r`β Boötis, at $+40^\circ 23'$, is closer to the limit but still short of $90^\circ - 44^\circ 25'$. It rises and sets, spending a few hours below the horizon each day.`,
      C: r`θ Aurigae has declination $+37^\circ 12'$, which is less than the required $45^\circ 35'$, so it is not circumpolar from Romania. Note that right ascension does not matter for this question, only declination.`,
    },
    takeaway: r`A star is circumpolar when its declination is greater than 90° minus your latitude.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q13": {
    solution: [
      r`The **semi-major axis** is half the long way across the orbit, which is half of perihelion plus aphelion: $a = \dfrac{0.586 + 35.1}{2} \approx 17.8$ AU.`,
      r`**Kepler's third law**, in years and AU, says $P^2 = a^3$, so $P = a^{3/2} = 17.8^{1.5} \approx 75$ years.`,
      r`Adding one period to the last visit: $1986 + 75 = 2061$.`,
    ],
    wrongChoices: {
      A: r`A 50-year period would need a semi-major axis of only about 13.6 AU, smaller than this orbit's. Check that you halved the sum of perihelion and aphelion and then raised it to the power $3/2$.`,
      B: r`A 66-year period corresponds to a semi-major axis of about 16.4 AU, a little too small for this comet. Recompute $a$ from the two distances and apply $P = a^{3/2}$ carefully.`,
      D: r`A 110-year period would need a semi-major axis of about 23 AU, larger than this comet's. Make sure you averaged perihelion and aphelion rather than using the aphelion distance on its own.`,
    },
    takeaway: r`Semi-major axis is the average of perihelion and aphelion, and Kepler's third law then gives the period from it.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q14": {
    solution: [
      r`A **parabolic** orbit is the borderline case between a bound ellipse and an escaping hyperbola. On it, the body has exactly zero total energy, which means its speed at every point is the local **escape speed**.`,
      r`Escape speed is $v_{\text{esc}} = \sqrt{\dfrac{2GM_\odot}{r}}$, and it is fastest at the closest point, 1 AU.`,
      r`Earth's circular orbit at 1 AU has $v_{\text{circ}} = \sqrt{GM_\odot/r} \approx 29.8$ km/s, so the escape speed is $\sqrt{2}$ times that: $29.8 \times 1.414 \approx 42.1$ km/s.`,
    ],
    wrongChoices: {
      B: r`This is roughly twice Earth's orbital speed. Escape speed has **twice the kinetic energy** of circular speed, not twice the speed, so the factor is $\sqrt{2}$, not 2.`,
      C: r`A meteor moving this fast at 1 AU would have more than escape energy, putting it on a hyperbolic orbit, not a parabolic one. Start from the escape-speed formula $\sqrt{2GM_\odot/r}$.`,
      D: r`This is far above the Sun's escape speed at 1 AU, so it describes a hyperbolic orbit leaving the Solar System rather than a parabolic one. Use $\sqrt{2GM_\odot/r}$ with $r = 1$ AU.`,
    },
    takeaway: r`On a parabolic orbit the speed equals the escape speed, which is √2 times the circular speed at that distance.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q15": {
    solution: [
      r`The Sun shines by fusing four hydrogen nuclei into one helium nucleus. The helium weighs slightly less than the four hydrogens, and that missing mass becomes energy via $E = mc^2$.`,
      r`Mass lost per reaction: $4 \times 1.00794 - 4.002602 = 0.0292$ u, which is $\dfrac{0.0292}{4.032} \approx 0.0072$, or **0.72%** of the fuel.`,
      r`Only the hot core, about **10%** of the Sun's mass, ever gets to fuse. Energy available: $E = 0.1 \times M_\odot \times 0.0072 \times c^2 \approx 0.1 \times 2.0 \times 10^{30} \times 0.0072 \times (3 \times 10^8)^2 \approx 1.3 \times 10^{44}$ J.`,
      r`Divide by the Sun's luminosity, $3.8 \times 10^{26}$ W: $t \approx 3.4 \times 10^{17}$ s. There are about $3.16 \times 10^{7}$ seconds in a year, so $t \approx 1.07 \times 10^{10}$ years, about **10.7 billion years**.`,
    ],
    wrongChoices: {
      A: r`This is too short. It is roughly what you get with an underestimated fuel supply; check the mass-loss fraction (about 0.72%), the 10% core, and the conversion from seconds to years.`,
      B: r`This comes out too low. A common slip is rounding the mass fraction down to 0.7% or using a slightly high luminosity; redo the arithmetic with the exact atomic masses given.`,
      C: r`Close, but the exact numbers give a somewhat different result. Make sure you used the full mass difference $4 \times 1.00794 - 4.002602$, divided by the mass of four hydrogens, before finishing the calculation.`,
    },
    takeaway: r`Fusion turns 0.7% of hydrogen's mass into energy, and with 10% of the Sun as fuel that powers it for about ten billion years.`,
  },

  "usaaao-2014-national-astronomy-olympiad-q16": {
    solution: [
      r`The shortest day comes at the **winter solstice**, when the Sun's declination is $\delta = -23.4^\circ$.`,
      r`The Sun rises and sets when its hour angle $H$ satisfies $\cos H = -\tan\phi \tan\delta$, with $\phi$ the latitude. Here $\cos H = -\tan(44.4^\circ)\tan(-23.4^\circ) = 0.980 \times 0.433 \approx 0.424$, so $H \approx 64.9^\circ$.`,
      r`Daylight lasts from $-H$ to $+H$, that is $2H = 129.8^\circ$. Since the sky turns $15^\circ$ per hour, this is $\dfrac{129.8}{15} \approx 8.65$ hours, or about **8 h 39 min**.`,
    ],
    wrongChoices: {
      A: r`A day this short would need a latitude near $47^\circ$ N. Check the sign in $\cos H = -\tan\phi\tan\delta$: with a negative solar declination the product is positive, making $H$ a bit larger than you may have found.`,
      C: r`This is a little too long for Romania's latitude; it matches a location around $42^\circ$ N. Recheck $\tan(44.4^\circ) \times \tan(23.4^\circ)$ and remember to double $H$ before dividing by $15^\circ$ per hour.`,
      D: r`This would be the shortest day at roughly $40^\circ$ N, further south than Romania. Recompute $H$ from $\cos H = \tan\phi \tan 23.4^\circ$ and convert $2H$ to hours.`,
    },
    takeaway: r`Day length follows from the sunrise equation cos H = −tan φ tan δ, with 15° of hour angle per hour.`,
  },
};
