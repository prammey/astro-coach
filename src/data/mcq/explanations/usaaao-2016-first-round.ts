import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2016 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2016-first-round-q1": {
    solution: [
      r`RR Lyrae stars are **standard candles**: they all have nearly the same true brightness, so comparing apparent and absolute magnitude gives the distance.`,
      r`The distance modulus is $m - M = 5\log_{10}\!\left(\dfrac{d}{10\ \text{pc}}\right)$. Here $m - M = 16.0 - 0.75 = 15.25$.`,
      r`So $\log_{10}(d/10) = 15.25/5 = 3.05$, giving $d = 10 \times 10^{3.05} \approx 11{,}200$ pc $= 11.2$ kpc.`,
    ],
    wrongChoices: {
      B: r`Too far. A distance modulus of 15.25 gives $d = 10^{(15.25/5) + 1}$ pc; check the exponent, which should come to 4.05.`,
      C: r`Too far; this would need a distance modulus of about 17.2. Recompute $m - M = 16.0 - 0.75$ and use $d = 10^{(m - M + 5)/5}$ pc.`,
      D: r`Too far. Make sure you subtracted the absolute magnitude (0.75) from the apparent magnitude before dividing by 5.`,
      E: r`Too far by a factor of four; this would be a distance modulus of about 18.4. Redo $d = 10^{(m - M + 5)/5}$ with $m - M = 15.25$.`,
    },
    takeaway: r`Distance modulus: d = 10^((m − M + 5)/5) parsecs, and standard candles supply the M.`,
  },

  "usaaao-2016-first-round-q2": {
    solution: [
      r`The orbit is an ellipse with the star at one focus. Closest plus farthest distance is the long axis: $2a = 1.50 + 4.50$, so $a = 3.00$ AU. The star is $c = a - 1.50 = 1.50$ AU from the centre.`,
      r`The short half-axis follows from $b^2 = a^2 - c^2 = 9.00 - 2.25 = 6.75$, so $b \approx 2.60$ AU.`,
      r`The area of an ellipse is $\pi a b$, and Kepler's second law says a full orbit sweeps out the **whole** ellipse. With these numbers $\pi a b \approx 7.8\pi$ AU². Note that this exact value is not among the choices; the official answer key marks **$6.00\pi$**, so treat this question's numbers with caution and focus on the method.`,
    ],
    wrongChoices: {
      B: r`This does not come from the ellipse geometry. The swept area for a full orbit is $\pi a b$, with $a$ half the sum of the two distances and $b = \sqrt{a^2 - c^2}$.`,
      C: r`Far too small; $1.50\pi$ is less than the area of a circle of radius 1.5 AU, and the orbit reaches out to 4.5 AU. Use $\pi a b$ for the whole ellipse.`,
      D: r`This is $\pi b^2$, using the short half-axis twice. An ellipse's area needs both half-axes: $\pi a b$.`,
      E: r`This is $\pi a c$, mixing in the focus distance. The area formula is $\pi a b$, where $b$ is the semi-minor axis, not $c$.`,
    },
    takeaway: r`An orbit sweeps out the whole ellipse, area πab, with a from the two extreme distances and b from b² = a² − c².`,
  },

  "usaaao-2016-first-round-q3": {
    solution: [
      r`During a transit the companion blocks a patch of the star's disc. The fraction of light lost equals the fraction of area covered: $\dfrac{\Delta F}{F} = \left(\dfrac{R_p}{R_\star}\right)^2$.`,
      r`The dip is $1 - 0.982 = 0.018$, so $\dfrac{R_p}{R_\star} = \sqrt{0.018} \approx 0.134$.`,
      r`That is a bit larger than Jupiter compared with the Sun (about 0.10), so this is a giant planet or a small star.`,
    ],
    wrongChoices: {
      A: r`This is the transit **depth** itself, the fraction of light blocked. Depth equals the **area** ratio, so the radius ratio is its square root.`,
      C: r`This is twice the true ratio; a companion this big would block about 7% of the light, not 1.8%. Take the square root of 0.018 once, without doubling.`,
      D: r`This is close to the square root of the **remaining** flux, but the companion's size comes from the light that is **lost**, $1 - 0.982$.`,
      E: r`This is the remaining flux fraction, not a size. The companion's radius ratio comes from the square root of the missing 1.8%.`,
    },
    takeaway: r`Transit depth equals (R_planet / R_star)², so the radius ratio is the square root of the dip.`,
  },

  "usaaao-2016-first-round-q4": {
    solution: [
      r`Launching from the surface means the launch point is the orbit's closest point (perilune, $r = R$). The farthest point is $7R$, so the semi-major axis is $a = \dfrac{R + 7R}{2} = 4R$.`,
      r`The **vis-viva equation** gives the speed at any point: $v^2 = GM\left(\dfrac{2}{r} - \dfrac{1}{a}\right) = \dfrac{GM}{R}\left(2 - \dfrac{1}{4}\right) = 1.75\,\dfrac{GM}{R}$.`,
      r`With $\dfrac{GM}{R} = \dfrac{6.674 \times 10^{-11} \times 7.44 \times 10^{22}}{1.74 \times 10^6} \approx 2.85 \times 10^6$ m²/s², $v = \sqrt{1.75 \times 2.85 \times 10^6} \approx 2230$ m/s, or **2.23 km/s**.`,
    ],
    wrongChoices: {
      A: r`This is the speed of a **circular** orbit skimming the surface, $\sqrt{GM/R}$. To reach out to 7 lunar radii the object needs to go faster than that.`,
      B: r`Too slow. Use vis-viva with $r = R$ and $a = 4R$: the bracket $2/r - 1/a$ becomes $1.75/R$, not something smaller.`,
      D: r`This is double the circular speed, which is above the Moon's **escape** speed ($\sqrt{2}$ times circular). An object launched this fast would never come back to make an ellipse.`,
      E: r`Far above lunar escape speed (about 2.4 km/s). Anything this fast leaves the Moon on a hyperbola rather than circling it.`,
    },
    takeaway: r`For an ellipse launched from the surface, use vis-viva with r = R and a = (perilune + apolune)/2.`,
  },

  "usaaao-2016-first-round-q5": {
    solution: [
      r`For the stars at the edge to stay **bound** to the galaxy, their speed must not exceed the escape speed: $v \le \sqrt{\dfrac{2GM}{r}}$. The smallest mass that manages this is $M_{\min} = \dfrac{v^2 r}{2G}$.`,
      r`Convert units: $r = 40{,}000$ ly $\times 9.46 \times 10^{15}$ m/ly $= 3.78 \times 10^{20}$ m, and $v = 5.0 \times 10^4$ m/s.`,
      r`$M_{\min} = \dfrac{(5.0 \times 10^4)^2 \times 3.78 \times 10^{20}}{2 \times 6.674 \times 10^{-11}} \approx 7.1 \times 10^{39}$ kg. Dividing by $1.99 \times 10^{30}$ kg gives about **$3.6 \times 10^9$ solar masses**.`,
    ],
    wrongChoices: {
      A: r`Too small by a factor of about five. Check the conversion of 40,000 light-years to metres ($9.46 \times 10^{15}$ m per light-year) and the value of $v^2$.`,
      C: r`About a hundred times too large. Recheck the powers of ten: $v^2 r$ is of order $10^{30}$ before dividing by $2G$.`,
      D: r`Far too large. A mass this big would make the edge stars orbit at hundreds of km/s, like a giant galaxy; at 50 km/s the galaxy must be a lightweight.`,
      E: r`This is more massive than the Milky Way, which has edge speeds of over 200 km/s. A 50 km/s galaxy is thousands of times lighter.`,
    },
    takeaway: r`For stars to stay bound, M must be at least v²r/(2G), the escape-speed condition.`,
  },

  "usaaao-2016-first-round-q6": {
    solution: [
      r`Escape speed at the edge of a mass $M$ of radius $R$ is $v_{\text{esc}} = \sqrt{\dfrac{2GM}{R}}$, so $M = \dfrac{v_{\text{esc}}^2 R}{2G}$.`,
      r`Convert: $R = 100$ pc $= 100 \times 3.086 \times 10^{16} = 3.09 \times 10^{18}$ m, and $v_{\text{esc}} = 8500$ m/s.`,
      r`$M = \dfrac{(8500)^2 \times 3.09 \times 10^{18}}{2 \times 6.674 \times 10^{-11}} \approx 1.67 \times 10^{36}$ kg, which is $\dfrac{1.67 \times 10^{36}}{1.99 \times 10^{30}} \approx 8.4 \times 10^5$ solar masses. (The individual star masses are a distraction; only the total matters.)`,
    ],
    wrongChoices: {
      A: r`Far too small. Check the conversion of 100 pc to metres ($3.09 \times 10^{18}$ m) and that $v$ is in m/s, not km/s.`,
      B: r`About ten times too small; look for a slipped power of ten in $v^2 R / (2G)$.`,
      C: r`Too small. Make sure you squared the full 8500 m/s and did not divide by an extra factor.`,
      D: r`Not quite. Recompute $v^2 R/(2G)$ carefully: $(8.5 \times 10^3)^2 = 7.2 \times 10^7$, times $3.09 \times 10^{18}$, divided by $1.33 \times 10^{-10}$.`,
    },
    takeaway: r`Escape speed gives the enclosed mass directly: M = v²R/(2G).`,
  },

  "usaaao-2016-first-round-q7": {
    solution: [
      r`A transfer starts with a burn at the parking orbit that stretches the circle into an ellipse whose far end reaches the target height. Distances are from Earth's **centre**: $r_1 = 6371 + 200 = 6571$ km and $r_2 = 6371 + 35{,}786 = 42{,}157$ km.`,
      r`The transfer ellipse has $a = \dfrac{r_1 + r_2}{2} = 24{,}364$ km. Speed in the parking orbit: $v_c = \sqrt{GM/r_1} = \sqrt{3.986 \times 10^{14} / 6.571 \times 10^6} \approx 7.79$ km/s.`,
      r`Speed needed at the same point on the transfer ellipse, from vis-viva: $v_t = \sqrt{GM\left(\dfrac{2}{r_1} - \dfrac{1}{a}\right)} \approx 10.2$ km/s. The burn is the difference, $\Delta v = v_t - v_c$, about **2.5 km/s**. The official key gives 2543 m/s; a careful calculation with the constants shown lands a little lower, near 2460 m/s, so the method rather than the last digits is the point here.`,
    ],
    wrongChoices: {
      A: r`This is what you get if the apogee height of 35,786 km is used as a distance from Earth's **centre**. Add Earth's radius: the apogee radius is 42,157 km.`,
      B: r`A careful calculation lands near this value, but the official key lists a slightly higher figure. Recheck each step against the key's method: circular speed at 6571 km, then vis-viva at that point with $a = 24{,}364$ km.`,
      D: r`Too large. The burn is the difference between the transfer-orbit perigee speed and the circular parking speed, both evaluated at $r_1 = 6571$ km.`,
      E: r`Too large. Check that the parking-orbit speed uses $r = 6571$ km (Earth's radius plus 200 km) and that you subtracted it from the transfer speed.`,
    },
    takeaway: r`A Hohmann departure burn is Δv = v_transfer(perigee) − v_circular, with vis-viva giving the transfer speed.`,
  },

  "usaaao-2016-first-round-q8": {
    solution: [
      r`The orbit type depends on whether the probe is moving faster or slower than the local **escape speed**, $v_{\text{esc}} = \sqrt{2GM/r}$.`,
      r`At 1 AU the Sun's escape speed is 42.1 km/s, and it falls as $1/\sqrt{r}$. At 100 AU it is $\dfrac{42.1}{\sqrt{100}} \approx 4.2$ km/s.`,
      r`The probe's 20 km/s is nearly five times that. It has more than enough energy to escape, so its total energy is positive and its path is a **hyperbola**.`,
    ],
    wrongChoices: {
      B: r`A parabolic orbit needs the speed to equal the escape speed exactly, about 4.2 km/s at 100 AU. At 20 km/s the probe is far above that.`,
      C: r`An ellipse is a **bound** orbit, requiring the speed to be below escape speed. At 100 AU escape speed is only about 4.2 km/s, and the probe is much faster.`,
      D: r`An orbit can only be one shape. The comparison of 20 km/s with the local escape speed of about 4.2 km/s settles which one it is.`,
      E: r`Every orbit under gravity is one of the three conic sections. Compare the speed with the escape speed at 100 AU to pick the right one.`,
    },
    takeaway: r`Faster than escape speed means a hyperbola; equal means a parabola; slower means an ellipse.`,
  },

  "usaaao-2016-first-round-q9": {
    solution: [
      r`For circular motion the centripetal acceleration is $a = \dfrac{v^2}{r} = \dfrac{4\pi^2 r}{T^2}$, using $v = 2\pi r / T$.`,
      r`Put the numbers in SI: $r = 9.376 \times 10^6$ m and $T = 8 \times 3600 = 28{,}800$ s.`,
      r`$a = \dfrac{4\pi^2 \times 9.376 \times 10^6}{(28{,}800)^2} = \dfrac{3.70 \times 10^8}{8.29 \times 10^8} \approx 0.446$ m/s². (The mass of Mars is not needed once you know $r$ and $T$.)`,
    ],
    wrongChoices: {
      A: r`Far too small. Check that the period was converted to **seconds** (8 h = 28,800 s) and the radius to metres.`,
      B: r`Too small. Use $a = 4\pi^2 r / T^2$; make sure the $4\pi^2 \approx 39.5$ is included.`,
      D: r`Too large. Recompute $4\pi^2 r / T^2$ with $r = 9.376 \times 10^6$ m and $T = 28{,}800$ s.`,
      E: r`Too large. If you used $GM/r^2$ with the mass of Mars, the mismatch with the stated 8-hour period (Phobos's real period is shorter) explains the difference; the question intends the period route.`,
    },
    takeaway: r`Centripetal acceleration on a circular orbit is 4π²r/T².`,
  },

  "usaaao-2016-first-round-q10": {
    solution: [
      r`Use the **vis-viva equation**: $v^2 = GM\left(\dfrac{2}{r} - \dfrac{1}{a}\right)$.`,
      r`In metres: $r = 0.34 \times 1.496 \times 10^{11} = 5.09 \times 10^{10}$ m and $a = 0.387 \times 1.496 \times 10^{11} = 5.79 \times 10^{10}$ m, with $GM_\odot = 1.33 \times 10^{20}$ m³/s².`,
      r`$\dfrac{2}{r} - \dfrac{1}{a} = 3.93 \times 10^{-11} - 1.73 \times 10^{-11} = 2.20 \times 10^{-11}$, so $v = \sqrt{1.33 \times 10^{20} \times 2.20 \times 10^{-11}} \approx 5.4 \times 10^4$ m/s, or **54 km/s**.`,
    ],
    wrongChoices: {
      A: r`Too slow; even Mars, far further out, orbits at 24 km/s. Mercury is deep in the Sun's gravity well and moves much faster.`,
      B: r`Too slow. Mercury's average speed is already 48 km/s, and at 0.34 AU it is inside its average distance, so it is moving faster than average.`,
      D: r`Too fast. Check the bracket $2/r - 1/a$: with $r = 0.34$ AU and $a = 0.387$ AU it is about $2.2 \times 10^{-11}$ m⁻¹.`,
      E: r`Too fast; this is close to Mercury's speed at **perihelion** (0.31 AU), but the question asks about 0.34 AU, a little further out.`,
    },
    takeaway: r`Vis-viva, v² = GM(2/r − 1/a), gives a planet's speed at any point on its orbit.`,
  },

  "usaaao-2016-first-round-q11": {
    solution: [
      r`Seen from Venus, Mercury appears farthest from the Sun when the line of sight from Venus just grazes Mercury's orbit, that is, when it is **tangent** to the orbit.`,
      r`That makes a right triangle: the Sun-Mercury line (radius $0.387$ AU) is perpendicular to the sight line, and the Sun-Venus line ($0.719$ AU) is the hypotenuse.`,
      r`So $\sin\theta = \dfrac{0.387}{0.719} = 0.538$, giving $\theta \approx 32.6^\circ$.`,
    ],
    wrongChoices: {
      A: r`Too small. The greatest elongation comes from $\sin\theta = r_{\text{Mercury}} / r_{\text{Venus}}$, and $0.387/0.719$ is more than a half.`,
      B: r`This is what you get with $\tan\theta = 0.387/0.719$, but the tangent-line geometry puts the right angle at Mercury, making the Sun-Venus distance the **hypotenuse**. Use sine.`,
      D: r`Too large. In the right triangle the ratio $0.387/0.719$ is the sine of the elongation, and $\sin^{-1}(0.538)$ is well under $40^\circ$.`,
      E: r`This is the **other** angle of the right triangle, $90^\circ - \theta$. The elongation is the angle at Venus, opposite the Mercury-Sun side.`,
    },
    takeaway: r`Greatest elongation of an inner planet: sin θ = (inner radius) / (observer's radius).`,
  },

  "usaaao-2016-first-round-q12": {
    solution: [
      r`A geostationary satellite circles Earth **eastward** once per sidereal day, matching Earth's spin, which is why it hangs over one spot on the equator.`,
      r`The celestial sphere, though, is the frame of the **stars**. Against the stars the satellite completes one full eastward lap around the celestial equator every sidereal day, just as the meridian of any place on Earth does.`,
    ],
    wrongChoices: {
      B: r`The satellite is stationary relative to the **ground**, not relative to the stars. On the celestial sphere, which is fixed to the stars, it sweeps right around the equator each day.`,
      C: r`Westward is how the **stars** appear to drift for an observer on Earth. The satellite orbits eastward, in the same direction Earth turns, so on the celestial sphere it moves east.`,
      D: r`A satellite over the equator moves in the equatorial plane, so it stays on the celestial equator, $90^\circ$ from either pole.`,
    },
    takeaway: r`A geostationary satellite is fixed relative to the ground but circles the celestial equator eastward once per sidereal day.`,
  },

  "usaaao-2016-first-round-q13": {
    solution: [
      r`The Sun's angular diameter is its true diameter divided by its distance (small-angle formula): $\theta = \dfrac{2 \times 695{,}700}{1.5 \times 1.496 \times 10^8} = 6.20 \times 10^{-3}$ rad.`,
      r`Convert: $6.20 \times 10^{-3} \times \dfrac{180^\circ}{\pi} = 0.355^\circ$, and $0.355 \times 60 \approx 21.3'$.`,
      r`Quick check: from Earth the Sun spans $32'$, and at 1.5 times the distance it looks $1.5$ times smaller, $32/1.5 \approx 21'$.`,
    ],
    wrongChoices: {
      A: r`This is the Sun's angular **radius** from Mars in **degrees** ($0.178^\circ$). The question wants the full diameter in arcminutes.`,
      B: r`This is the angular **radius** from Mars, using 695,700 km without doubling. The diameter is twice as big.`,
      C: r`This would be right at 2 AU, but Mars is at 1.5 AU. The Sun's apparent size scales as $1/d$, so at 1.5 AU it is $32'/1.5$.`,
      E: r`This is the Sun's angular diameter as seen from **Earth** at 1 AU. From Mars, 1.5 times further away, it must look smaller.`,
    },
    takeaway: r`Angular size is diameter over distance, so the Sun looks 1/1.5 as big from Mars as from Earth.`,
  },

  "usaaao-2016-first-round-q14": {
    solution: [
      r`The celestial equator crosses the horizon exactly at the east and west points for every observer (except at the poles).`,
      r`So a star rises due east only if it lies **on** the celestial equator, at **declination 0°**. Stars with positive declination rise north of east; negative, south of east.`,
      r`The observer's latitude changes how steeply that star climbs, but not where it rises, and longitude does not matter at all.`,
    ],
    wrongChoices: {
      A: r`A star at declination $+37^\circ$ rises well **north** of east. The latitude sets the angle the sky makes with the horizon, not which stars rise due east.`,
      B: r`Longitude has no effect on where a star rises, and a star at $+23^\circ$ declination rises north of east from this location.`,
      C: r`The rising point of a given star is fixed by its declination and the observer's latitude, neither of which changes with the season. Only the **time** it rises changes through the year.`,
    },
    takeaway: r`Stars on the celestial equator (declination 0°) rise due east and set due west from anywhere on Earth.`,
  },

  "usaaao-2016-first-round-q15": {
    solution: [
      r`Retrograde motion happens near **opposition**, when Earth overtakes Mars. That line-up repeats every **synodic period**.`,
      r`$\dfrac{1}{S} = \dfrac{1}{P_{\text{Earth}}} - \dfrac{1}{P_{\text{Mars}}} = 1 - \dfrac{1}{1.88} = 0.468$, so $S \approx 2.14$ years, about 780 days.`,
      r`Counting 780 days on from March 3, 2012: two years brings you to March 3, 2014 (730 days), and 50 more days lands on **April 22, 2014**.`,
    ],
    wrongChoices: {
      A: r`This is only about 1.7 years after March 2012, less than one synodic period. Earth needs about 2.14 years to lap Mars again.`,
      B: r`Only about five and a half months later. Earth cannot catch up with Mars again that quickly; the synodic period is over two years.`,
      D: r`This is about 3.3 years later, more than one synodic period but well short of two. Oppositions of Mars are about 2.14 years apart.`,
    },
    takeaway: r`Mars oppositions, and its retrograde loops, repeat every synodic period of about 2.14 years (780 days).`,
  },

  "usaaao-2016-first-round-q16": {
    solution: [
      r`Luminosity scales as $R^2 T^4$, so $\dfrac{L_A}{L_B} = \left(\dfrac{3}{2}\right)^2 \left(\dfrac{10{,}000}{5{,}700}\right)^4 = 2.25 \times (1.754)^4 \approx 2.25 \times 9.47 \approx 21.3$.`,
      r`A brightness ratio becomes a magnitude difference through $\Delta M = 2.5\log_{10}(21.3) \approx 2.5 \times 1.33 = 3.32$.`,
      r`Star A is brighter, so it has the **smaller** absolute magnitude; $M_B - M_A$ is positive: **3.32**.`,
    ],
    wrongChoices: {
      A: r`Too small. Check the temperature factor: $(10{,}000/5{,}700)^4 \approx 9.5$, and it multiplies the radius factor of $2.25$ before you take $2.5\log_{10}$.`,
      C: r`Too large. The luminosity ratio is about 21, and $2.5\log_{10}(21)$ is a little under 3.4.`,
      D: r`Too large. Make sure the radius ratio is **squared** ($1.5^2 = 2.25$) and the temperature ratio raised to the **fourth** power, not the other way around.`,
      E: r`Too large; this would need a luminosity ratio of about 80. Recompute $2.25 \times (1.754)^4$.`,
    },
    takeaway: r`Combine L ∝ R²T⁴ with ΔM = 2.5 log(L₁/L₂) to turn sizes and temperatures into magnitudes.`,
  },

  "usaaao-2016-first-round-q17": {
    solution: [
      r`The stretch factor is $1 + z = \dfrac{687.2}{121.6} = 5.65$, so $z = 4.65$. That is huge: the ordinary formula $v = zc$ would give more than four times the speed of light, which is impossible, so we need the **relativistic** Doppler formula.`,
      r`Relativistically, $(1 + z)^2 = \dfrac{1 + \beta}{1 - \beta}$ with $\beta = v/c$. Here $(1+z)^2 = 31.9$, so $\beta = \dfrac{31.9 - 1}{31.9 + 1} = 0.939$.`,
      r`$v = 0.939 \times 3.00 \times 10^5 \approx 2.82 \times 10^5$ km/s: about 94% of the speed of light.`,
    ],
    wrongChoices: {
      A: r`Too slow; this is under half the speed of light, but a wavelength stretched by a factor of 5.65 needs a source moving at over 90% of $c$.`,
      B: r`Too slow. Solve $(1 + z)^2 = (1 + \beta)/(1 - \beta)$ for $\beta$ with $1 + z = 5.65$; the result is well above 0.7.`,
      C: r`Too slow. With $(1+z)^2 \approx 32$, $\beta = (32 - 1)/(32 + 1)$, which is closer to 1 than 0.86.`,
      E: r`Nothing with mass can move at exactly the speed of light. The non-relativistic $v = zc$ gives more than $c$ here, a sign that you need the relativistic formula, which always gives less than $c$.`,
    },
    takeaway: r`For large redshifts use (1 + z)² = (1 + β)/(1 − β); the speed is always below c.`,
  },

  "usaaao-2016-first-round-q19": {
    solution: [
      r`Absolute magnitude is how bright the star would look from 10 pc. The planet is vastly closer, so the star looks vastly brighter (a very negative magnitude).`,
      r`Convert the distance to parsecs: $d = \dfrac{0.670 \times 1.496 \times 10^{11}}{3.0856 \times 10^{16}} = 3.25 \times 10^{-6}$ pc.`,
      r`Distance modulus: $m = M + 5\log_{10}\!\left(\dfrac{d}{10}\right) = 3.25 + 5\log_{10}(3.25 \times 10^{-7}) = 3.25 + 5 \times (-6.49) \approx -29.2$. For comparison, the Sun from Earth is $-26.7$.`,
    ],
    wrongChoices: {
      B: r`Not quite; check $\log_{10}(3.25 \times 10^{-7})$, which is about $-6.49$, then multiply by 5 and add 3.25.`,
      C: r`Slightly too faint. Make sure the distance is divided by 10 pc **before** taking the log in the distance modulus.`,
      D: r`Too faint. Recompute $d$ in parsecs ($0.670$ AU $\approx 3.25 \times 10^{-6}$ pc) and apply $m = M + 5\log_{10}(d/10)$.`,
      E: r`Too faint. Use the parsec conversion given ($1$ pc $= 3.0856 \times 10^{16}$ m) and keep all the digits in the exponent.`,
    },
    takeaway: r`The distance modulus works at any distance: m = M + 5 log(d / 10 pc), even for a planet next to its star.`,
  },

  "usaaao-2016-first-round-q20": {
    solution: [
      r`**Inflation** came first, a burst of expansion in the first tiny fraction of a second.`,
      r`**Nucleosynthesis** followed in the first few minutes, when protons and neutrons fused into the first helium and lithium nuclei.`,
      r`**Recombination** came about 380,000 years later, when the universe cooled enough for atoms to form and light to travel freely, creating the cosmic microwave background.`,
      r`The **dark-energy-dominated era** is the most recent: only in the last few billion years has dark energy overtaken matter and made the expansion speed up.`,
    ],
    wrongChoices: {
      A: r`Dark energy only took over a few billion years ago, long after the other three events. It belongs at the **end** of the list, not the start.`,
      B: r`Inflation happened in the very first instant of the universe, so it must come first, not last.`,
      C: r`Nucleosynthesis (the first minutes) happened long before recombination (380,000 years), and dark energy took over billions of years later, not right after inflation.`,
      E: r`This is almost the reverse order. Inflation is first, and recombination came hundreds of thousands of years after nucleosynthesis.`,
    },
    takeaway: r`Inflation, then nucleosynthesis, then recombination, and only recently dark-energy domination.`,
  },

  "usaaao-2016-first-round-q21": {
    solution: [
      r`The **bolometric correction** links total brightness to visual brightness: $BC = M_{\text{bol}} - M_V$. So $M_V = M_{\text{bol}} - BC = -0.77 - (-1.02) = 0.25$.`,
      r`Now compare with the apparent **visual** magnitude, like with like: $m_V - M_V = 4.32 - 0.25 = 4.07$.`,
      r`Distance modulus: $d = 10^{(4.07 + 5)/5} = 10^{1.814} \approx 65$ pc.`,
    ],
    wrongChoices: {
      B: r`Too far. Convert the bolometric magnitude to a **visual** absolute magnitude first ($M_V = M_{\text{bol}} - BC$), then use the visual distance modulus.`,
      C: r`Too far. Watch the sign of the bolometric correction: subtracting a negative $BC$ **raises** $M_V$ to $+0.25$, giving a small distance modulus.`,
      D: r`Too far. Compare the apparent visual magnitude with the absolute **visual** magnitude, $M_V = M_{\text{bol}} - BC$, not with the bolometric one.`,
      E: r`This is what you get by applying the bolometric correction with the wrong sign ($M_V = -1.79$). Since $BC = M_{\text{bol}} - M_V$, the visual absolute magnitude is $-0.77 + 1.02$.`,
    },
    takeaway: r`BC = M_bol − M_V, and the distance modulus must compare apparent and absolute magnitudes in the same band.`,
  },

  "usaaao-2016-first-round-q22": {
    solution: [
      r`A planet's equilibrium temperature comes from balancing absorbed starlight against emitted heat: $T_p = T_\star \sqrt{\dfrac{R_\star}{2d}}\,(1 - A)^{1/4}$.`,
      r`Numbers: $R_\star = 1.2 \times 6.96 \times 10^8 = 8.35 \times 10^8$ m and $d = 1.5 \times 1.496 \times 10^{11} = 2.24 \times 10^{11}$ m, so $\sqrt{R_\star/2d} = \sqrt{1.86 \times 10^{-3}} = 0.0431$.`,
      r`$T_p = 6500 \times 0.0431 \times (0.90)^{1/4} = 280 \times 0.974 \approx 273$ K, right at the freezing point of water.`,
    ],
    wrongChoices: {
      A: r`Too cold. The albedo factor is $(1 - A)^{1/4}$, a gentle fourth root; with $A = 0.10$ it only lowers the temperature by about 2.6%.`,
      C: r`Too warm. Check the factor of 2 under the square root: $T_p = T_\star\sqrt{R_\star/(2d)}$, not $\sqrt{R_\star/d}$.`,
      D: r`Too warm. A star hotter than the Sun with a larger radius does heat the planet more, but at 1.5 AU the result still comes out near water's freezing point.`,
      E: r`Too warm. Recompute $\sqrt{R_\star/(2d)}$ with $R_\star = 1.2$ solar radii in metres and $d = 1.5$ AU in metres; it is about 0.043.`,
    },
    takeaway: r`Equilibrium temperature: T_p = T_star × √(R_star / 2d) × (1 − A)^¼.`,
  },

  "usaaao-2016-first-round-q23": {
    solution: [
      r`The zodiac is the band of constellations along the **ecliptic**, the Sun's yearly path across the sky.`,
      r`**Cygnus**, the Swan, lies far north of the ecliptic, sailing down the Milky Way near Lyra and Aquila. The Sun, Moon and planets never pass through it.`,
      r`Cancer, Taurus, Aries and Gemini are all genuine zodiac constellations.`,
    ],
    wrongChoices: {
      A: r`Cancer is on the zodiac; the Sun passes through it each July and August. The question asks for the constellation that is **not** on the zodiac.`,
      B: r`Taurus is a zodiac constellation (the Sun is there in May and June). Look for the constellation the Sun never visits.`,
      D: r`Aries is on the zodiac; it is the first sign of the traditional zodiac. You want the constellation away from the ecliptic.`,
      E: r`Gemini is a zodiac constellation, home to the Sun around the June solstice. Pick the one that lies far off the Sun's path.`,
    },
    takeaway: r`Zodiac constellations sit along the ecliptic; Cygnus lies far to the north in the summer Milky Way.`,
  },

  "usaaao-2016-first-round-q24": {
    solution: [
      r`Piscis Austrinus, the Southern Fish, is a faint constellation with one standout: **Fomalhaut**, its alpha star, one of the brightest stars in the sky at magnitude 1.2.`,
      r`It stands alone low in the southern autumn sky for northern observers, which earned it the nickname "the lonely star of autumn". From Bhubaneswar in December it is easily visible in the southwest after dusk.`,
    ],
    wrongChoices: {
      B: r`Rasalhague is the brightest star of **Ophiuchus**, the Serpent Bearer, a summer constellation nowhere near the Southern Fish.`,
      C: r`Alphekka (Alphecca) is the jewel of **Corona Borealis**, the Northern Crown, far to the north of Piscis Austrinus.`,
      D: r`Scheat is a star in **Pegasus**, one corner of the Great Square. Pegasus lies above Piscis Austrinus, but Scheat is not part of the Southern Fish.`,
      E: r`Mirphak is the brightest star of **Perseus**, a northern winter constellation on the opposite side of the sky.`,
    },
    takeaway: r`Fomalhaut, Alpha Piscis Austrini, is the lone bright star of the Southern Fish.`,
  },

  "usaaao-2016-first-round-q25": {
    solution: [
      r`**M13**, the Great Globular Cluster, sits on the western side of the Keystone asterism in Hercules. It is the finest globular cluster in the northern sky, with several hundred thousand stars.`,
    ],
    wrongChoices: {
      B: r`M31 is the Andromeda Galaxy, in **Andromeda**, an autumn constellation far from Hercules.`,
      C: r`M42 is the Orion Nebula, in the sword of **Orion**, a winter constellation.`,
      D: r`M57 is the Ring Nebula in **Lyra**, Hercules's neighbour, but not in Hercules itself.`,
      E: r`M83 is the Southern Pinwheel Galaxy, in **Hydra**, far to the south.`,
    },
    takeaway: r`M13 is the Great Globular Cluster in the Keystone of Hercules.`,
  },

  "usaaao-2016-first-round-q26": {
    solution: [
      r`**M57** is the Ring Nebula in Lyra, the classic example of a **planetary nebula**: the glowing shell of gas thrown off by a dying Sun-like star, with a hot white dwarf at its centre.`,
      r`Despite the name, planetary nebulae have nothing to do with planets; early telescopes just showed them as small round discs.`,
    ],
    wrongChoices: {
      A: r`A globular cluster is a dense ball of hundreds of thousands of old stars, like M13. The Ring Nebula is a single dying star's shell of gas.`,
      B: r`Spiral galaxies like M31 or M51 are vast systems of billions of stars. M57 is a small cloud of gas inside our own Galaxy, about one light-year across.`,
      D: r`An open cluster is a loose group of young stars, like the Pleiades. M57 is gas, not a cluster of stars.`,
      E: r`A stellar nursery (like the Orion Nebula) is where stars are **born**. The Ring Nebula is the opposite: the remains of a star at the **end** of its life.`,
    },
    takeaway: r`M57, the Ring Nebula, is a planetary nebula: a dying star's ejected shell lit by its white-dwarf core.`,
  },

  "usaaao-2016-first-round-q27": {
    solution: [
      r`**M42** is the Orion Nebula, the bright star-forming cloud visible to the naked eye as the fuzzy middle "star" of Orion's sword.`,
    ],
    wrongChoices: {
      A: r`M1 is the Crab Nebula, a supernova remnant in **Taurus**, next door to Orion but not in it.`,
      B: r`M8 is the Lagoon Nebula in **Sagittarius**, a summer constellation.`,
      C: r`M13 is the Great Globular Cluster in **Hercules**, a summer constellation.`,
      D: r`M27 is the Dumbbell Nebula in **Vulpecula**, a small constellation near Cygnus.`,
    },
    takeaway: r`M42 is the Orion Nebula, hanging in Orion's sword.`,
  },

  "usaaao-2016-first-round-q28": {
    solution: [
      r`**Aldebaran**, Alpha Tauri, is the orange-red eye of the Bull and the brightest star in Taurus, at magnitude 0.9. It appears to sit at the tip of the V-shaped Hyades cluster, though it is actually much closer to us.`,
    ],
    wrongChoices: {
      B: r`Algol is the famous eclipsing "Demon Star" in **Perseus**, not in Taurus.`,
      C: r`Altair is the brightest star of **Aquila**, one corner of the Summer Triangle.`,
      D: r`Hamal is the brightest star of **Aries**, the constellation just west of Taurus.`,
      E: r`Mirach is a star in **Andromeda**, used as a signpost to the Andromeda Galaxy.`,
    },
    takeaway: r`Aldebaran is the red eye of Taurus the Bull.`,
  },

  "usaaao-2016-first-round-q29": {
    solution: [
      r`**Mirphak** (Mirfak), Alpha Persei, is the brightest star in Perseus at magnitude 1.8. It sits in a lovely loose cluster of stars, the Alpha Persei Association.`,
      r`Perseus's more famous star, Algol, is actually its **second** brightest; it is celebrated for its eclipses, not its brightness.`,
    ],
    wrongChoices: {
      A: r`Algol is in Perseus, but at magnitude 2.1 it is the constellation's **second** brightest star. Its fame comes from its regular dimming, not its rank.`,
      B: r`Capella is the brightest star of **Auriga**, the Charioteer, next door to Perseus.`,
      C: r`Hamal is the brightest star of **Aries**, the Ram.`,
      E: r`Scheat is a star in **Pegasus**, marking a corner of the Great Square.`,
    },
    takeaway: r`Mirphak (Alpha Persei) outshines the more famous Algol in Perseus.`,
  },

  "usaaao-2016-first-round-q30": {
    solution: [
      r`Auriga contains a famous trio of open clusters, **M36, M37 and M38**, all lying in a row inside its pentagon of stars.`,
      r`**M35** is a bright open cluster too, but it sits at the feet of **Gemini**, just across the border from Auriga.`,
    ],
    wrongChoices: {
      B: r`M36 is one of the three Auriga clusters, so it does not answer the question, which asks for the one that is **not** in Auriga.`,
      C: r`M37, the richest of the three, is in Auriga. The question wants the cluster that lies outside Auriga.`,
      D: r`M38 is in Auriga, the third of the trio. Look for the cluster that belongs to a neighbouring constellation.`,
    },
    takeaway: r`M36, M37 and M38 are Auriga's clusters; M35 belongs to Gemini next door.`,
  },

  "usaaao-2016-first-round-q31": {
    solution: [
      r`M35, the cluster that is not in Auriga, lies near the star Propus at the foot of Castor in **Gemini**, the Twins.`,
    ],
    wrongChoices: {
      A: r`Taurus holds the Pleiades, the Hyades and the Crab Nebula, but not M35, which lies further east.`,
      C: r`Cancer contains M44 (the Beehive) and M67, but M35 is west of it, in the constellation before Cancer along the zodiac.`,
      D: r`Orion is south of M35's position. The cluster sits at the feet of the Twins, above Orion's raised club.`,
      E: r`Monoceros is the faint Unicorn south-east of Orion, home to the Rosette Nebula, not to M35.`,
    },
    takeaway: r`M35 sits at the feet of the Gemini twins.`,
  },

  "usaaao-2016-first-round-q32": {
    solution: [
      r`**M44**, the Beehive Cluster (Praesepe), is a bright **open cluster**: a loose swarm of about a thousand fairly young stars, visible to the naked eye as a misty patch in Cancer.`,
    ],
    wrongChoices: {
      B: r`Globular clusters are tightly packed balls of very old stars far out in the Galaxy's halo. The Beehive is a loose, nearby group of much younger stars.`,
      C: r`A planetary nebula is a gas shell from one dying star. The Beehive is a cluster of hundreds of stars, with no nebula.`,
      D: r`An elliptical galaxy is a separate system of billions of stars far outside the Milky Way. The Beehive is a small cluster only about 600 light-years away.`,
      E: r`A stellar nursery is a gas cloud where stars are forming. The Beehive's stars formed long ago and have blown away their gas.`,
    },
    takeaway: r`M44, the Beehive, is a naked-eye open cluster.`,
  },

  "usaaao-2016-first-round-q33": {
    solution: [
      r`The Beehive Cluster sits in the middle of **Cancer**, the faint crab between Gemini and Leo. It is the easiest way to find that dim constellation.`,
    ],
    wrongChoices: {
      A: r`Gemini lies to the west of the Beehive and holds the cluster M35, not M44.`,
      C: r`Leo lies to the east of the Beehive. The cluster sits between Leo and Gemini, in the constellation in the middle.`,
      D: r`Monoceros is far to the south, near Orion, and contains no Messier clusters this bright.`,
      E: r`Lynx is the faint constellation north of Cancer; the Beehive is on the ecliptic, in the zodiac constellation itself.`,
    },
    takeaway: r`The Beehive Cluster marks the heart of Cancer.`,
  },

  "usaaao-2016-first-round-q34": {
    solution: [
      r`The **Summer Triangle** is made of the brightest star from each of three constellations: **Vega** (Lyra), **Deneb** (Cygnus) and **Altair** (Aquila). It dominates the summer evening sky in the northern hemisphere.`,
    ],
    wrongChoices: {
      B: r`Regulus is a spring star and Sirius and Rigel are winter stars; none of them is up on summer evenings.`,
      C: r`Vega is right, but Aldebaran is a winter star and Antares belongs to Scorpius, low in the south, not to the triangle overhead.`,
      D: r`Arcturus is a spring star, Antares a summer one and Aldebaran a winter one. They are never a neat triangle in the same sky.`,
      E: r`Deneb and Altair are two of the three, but Rigel is Orion's foot, a winter star. The third corner is Vega.`,
    },
    takeaway: r`Summer Triangle: Vega, Deneb and Altair.`,
  },
};
