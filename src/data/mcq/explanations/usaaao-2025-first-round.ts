import type { McqExplanationMap } from "./types";

// Teaching explanations for the USAAAO 2025 First Round questions, keyed
// by question ID. `r` is String.raw, so LaTeX can be written with single
// backslashes: r`$v = \sqrt{2GM/r}$`.
const r = String.raw;

export const explanations: McqExplanationMap = {
  "usaaao-2025-first-round-q1": {
    solution: [
      r`Escape speed at Deimos's distance: $v_{\text{esc}} = \sqrt{\dfrac{2GM}{r}} = \sqrt{\dfrac{2 \times 6.674 \times 10^{-11} \times 6.39 \times 10^{23}}{2.346 \times 10^7}} \approx 1907$ m/s.`,
      r`You already move at 1350 m/s with Deimos, so the extra speed needed (in the direction of motion) is $1907 - 1350 \approx 557$ m/s.`,
    ],
    wrongChoices: {
      B: r`Too small. Compute $\sqrt{2GM/r}$ at $r = 2.346 \times 10^7$ m; it comes to about 1.9 km/s, and you subtract the 1.35 km/s you already have.`,
      C: r`Too small. Check that the factor of 2 is inside the square root of the escape-speed formula.`,
      D: r`Too small. Escape speed is $\sqrt{2}$ times the circular speed (about 1.35 km/s here), so the shortfall is about 0.56 km/s.`,
      E: r`Deimos's 1.35 km/s is only the circular speed. Escaping needs $\sqrt{2}$ times that, so extra speed is required.`,
    },
    takeaway: r`Δv to escape = √(2GM/r) − current speed, when the burn is along the direction of motion.`,
  },

  "usaaao-2025-first-round-q2": {
    solution: [
      r`Heat content: with a fixed heat capacity per unit volume, the internal energy is $U \propto R^3 T$.`,
      r`Heat loss: blackbody radiation from the surface, $P = 4\pi R^2\sigma T^4 \propto R^2 T^4$.`,
      r`Cooling rate: $-\dfrac{dT}{dt} \propto \dfrac{P}{R^3} \propto \dfrac{R^2T^4}{R^3} = \dfrac{T^4}{R}$. Bigger planets cool more slowly because they have more volume per unit of surface.`,
    ],
    wrongChoices: {
      A: r`Radiated power depends on $T^4$ (Stefan-Boltzmann), not $T^2$.`,
      C: r`The $R$ dependence is wrong: energy stored scales as $R^3$ but energy lost scales as $R^2$, leaving one power of $R$ in the denominator, not three.`,
      D: r`Both parts are wrong: the power goes as $T^4$, and larger $R$ makes cooling **slower**, not faster.`,
      E: r`Larger planets cool more slowly, so $R$ must be in the denominator.`,
    },
    takeaway: r`Cooling rate = (surface loss ∝ R²T⁴) ÷ (heat content ∝ R³T), so −dT/dt ∝ T⁴/R.`,
  },

  "usaaao-2025-first-round-q3": {
    solution: [
      r`From the previous question, $\dfrac{dT}{dt} = -kT^4$ for some constant $k$. Separate variables: $\dfrac{dT}{T^4} = -k\,dt$.`,
      r`Integrate: $-\dfrac{1}{3T^3} = -kt + C$. At $t = 0$, $T = T_0$, so $\dfrac{1}{T^3} = \dfrac{1}{T_0^3} + 3kt$.`,
      r`Rearranging: $\dfrac{T}{T_0} = (1 + 3kT_0^3 t)^{-1/3} = (1 + \alpha t)^{-1/3}$.`,
    ],
    wrongChoices: {
      B: r`A $-1/2$ power would come from $dT/dt \propto -T^3$. With $T^4$ the exponent is $-1/3$.`,
      C: r`Linear cooling would need a constant loss rate, but the radiated power drops steeply as $T^4$ falls, so the cooling slows over time.`,
      D: r`This reaches zero in finite time, but a $T^4$ law gives an ever-slowing approach to zero.`,
      E: r`This **rises** from zero towards one; the temperature should fall from $T_0$.`,
    },
    takeaway: r`Integrating dT/dt ∝ −T⁴ gives T ∝ (1 + αt)^(−1/3).`,
  },

  "usaaao-2025-first-round-q4": {
    solution: [
      r`Let $v_0 = \sqrt{GM/R}$, the circular speed at $R$. The transfer ellipse has $a = 4.5R$.`,
      r`**First burn** at $R$: vis-viva gives $v = v_0\sqrt{2 - \dfrac{R}{4.5R}} = v_0\sqrt{\dfrac{16}{9}} = \dfrac{4}{3}v_0$, so $\Delta v_1 = \dfrac{1}{3}v_0$.`,
      r`**Second burn** at $8R$: transfer speed $v_0\sqrt{\dfrac{2}{8} - \dfrac{1}{4.5}} = v_0\sqrt{\dfrac{1}{36}} = \dfrac{1}{6}v_0$; circular speed there is $\dfrac{v_0}{\sqrt{8}} = \dfrac{v_0}{2\sqrt{2}}$. So $\Delta v_2 = \dfrac{1}{2\sqrt{2}}v_0 - \dfrac{1}{6}v_0$.`,
      r`Total: $k = \dfrac{1}{3} + \dfrac{1}{2\sqrt{2}} - \dfrac{1}{6} = \dfrac{1}{6} + \dfrac{1}{2\sqrt{2}}$.`,
    ],
    wrongChoices: {
      A: r`Not the sum of the two burns. Work each burn from vis-viva with $a = 4.5R$ and add: $\tfrac{1}{3}$ from the first and $\tfrac{1}{2\sqrt{2}} - \tfrac{1}{6}$ from the second.`,
      B: r`This is negative-ish bookkeeping; the second burn's circular speed at $8R$ is $v_0/(2\sqrt{2})$ and the transfer speed there is $v_0/6$, and the first burn adds another $v_0/3$.`,
      D: r`$\sqrt{3/10}$ does not appear in this transfer; the transfer ellipse's semi-major axis is $4.5R$, giving clean fractions.`,
      E: r`Not from the vis-viva calculation. Check the first burn: $v_0(4/3 - 1) = v_0/3$.`,
    },
    takeaway: r`Hohmann Δv is the sum of two vis-viva speed differences, one at each end of the transfer ellipse.`,
  },

  "usaaao-2025-first-round-q5": {
    solution: [
      r`The semi-latus rectum is $\ell = a(1 - e^2)$, the distance from the focus to the orbit measured perpendicular to the major axis (see figure).`,
      r`With $\ell/a = 0.01$: $1 - e^2 = 0.01$, so $e^2 = 0.99$ and $e = \sqrt{0.99} \approx 0.995$.`,
    ],
    wrongChoices: {
      A: r`This treats the ratio as $1 - e$ instead of $1 - e^2$. The semi-latus rectum involves $e^2$: $\ell = a(1 - e^2)$.`,
      C: r`Too close to 1; this would make $\ell/a = 1 - e^2 \approx 0.0002$, five thousand times smaller than $a$.`,
      D: r`Too close to 1. With $e = 0.99995$, $1 - e^2 \approx 10^{-4}$, not $10^{-2}$.`,
      E: r`Far too close to 1; this would give $\ell/a \approx 2 \times 10^{-6}$.`,
    },
    takeaway: r`Semi-latus rectum ℓ = a(1 − e²).`,
  },

  "usaaao-2025-first-round-q6": {
    solution: [
      r`The satellites orbit in the **ecliptic** plane, which is tilted $23.5^\circ$ from the true celestial equator. For a distant star that alone can change the declination by up to $23.5^\circ$.`,
      r`But the satellites are close, only $4R_\oplus$ from Earth's centre, so **parallax** matters: an observer on the surface sees a satellite in a direction that differs from the centre-of-Earth direction by up to $\arcsin\!\left(\dfrac{R_\oplus}{4R_\oplus}\right) = 14.5^\circ$ (see the solution figure, where the sight line from P grazes tangentially).`,
      r`In the worst case the two effects add: $23.5^\circ + 14.5^\circ = 38^\circ$.`,
    ],
    wrongChoices: {
      B: r`The new reference plane is tilted, so declinations must change. There is no way the difference is always zero.`,
      C: r`This counts only the $23.5^\circ$ tilt of the ecliptic. The satellites are near enough that parallax from the observer's position on Earth adds another $14.5^\circ$.`,
      D: r`This doubles the obliquity, but the maximum tilt effect is $23.5^\circ$ once; the extra comes from parallax ($14.5^\circ$), not a second $23.5^\circ$.`,
      E: r`This is only the parallax term, $\arcsin(1/4)$. The tilt of the ecliptic contributes a further $23.5^\circ$.`,
    },
    takeaway: r`A nearby reference plane suffers both its tilt and parallax: arcsin(R_earth / distance) adds to the 23.5°.`,
  },

  "usaaao-2025-first-round-q7": {
    solution: [
      r`Spherical law of cosines with latitudes $\phi_1 = 42.36^\circ$, $\phi_2 = 19.08^\circ$ and longitude difference $\Delta\lambda = 71.06^\circ + 72.88^\circ = 143.94^\circ$: $\cos d = \sin\phi_1\sin\phi_2 + \cos\phi_1\cos\phi_2\cos\Delta\lambda$.`,
      r`$\cos d = 0.674 \times 0.327 + 0.739 \times 0.945 \times (-0.809) = 0.220 - 0.565 = -0.344$, so $d = 110.1^\circ = 1.922$ rad.`,
      r`Distance $= 6371 \times 1.922 \approx 12{,}250$ km.`,
    ],
    wrongChoices: {
      A: r`Far too short; Boston and Mumbai are nearly on opposite sides of the globe, with longitudes 144° apart.`,
      B: r`Too short. The central angle is over $110^\circ$; multiply that in radians by 6371 km.`,
      C: r`Too short. Check the sign of $\cos\Delta\lambda$: with $\Delta\lambda = 144^\circ$ it is negative, which makes the central angle larger than $90^\circ$.`,
      E: r`Too long; this would be nearly $137^\circ$ of central angle. Recompute the spherical law of cosines.`,
    },
    takeaway: r`Great-circle distance: cos d = sin φ₁ sin φ₂ + cos φ₁ cos φ₂ cos Δλ, then multiply d (in radians) by Earth's radius.`,
  },

  "usaaao-2025-first-round-q8": {
    solution: [
      r`**P** is false: even at zero temperature a line has a **natural** width, set by the finite lifetime of the excited state (the uncertainty principle).`,
      r`**Q** is false: homogeneous broadening gives a **Lorentzian** profile, whose wings fall off slowly (as $1/\Delta f^2$), while inhomogeneous (Doppler) broadening gives a **Gaussian**, whose wings vanish exponentially. Far out at $2f_0$ the Lorentzian is far **more** likely, not less.`,
      r`**R** is false: the Doppler width scales with the speed of the atoms, $\propto\sqrt{T}$, so doubling $T$ widens the line by $\sqrt{2}$, not 2.`,
    ],
    wrongChoices: {
      B: r`P is false: natural broadening from the finite lifetime of excited states persists at absolute zero.`,
      C: r`Q is false: Lorentzian (homogeneous) profiles have the heavier wings, so they are **more** probable far from line centre than Gaussian profiles.`,
      D: r`Both are false: lines have natural width at zero temperature, and Lorentzian wings are heavier than Gaussian ones.`,
      E: r`Both are false: the Lorentzian is more probable in the far wings, and the Doppler width grows as $\sqrt{T}$, not $T$.`,
    },
    takeaway: r`Natural width never vanishes, Lorentzian wings beat Gaussian wings, and Doppler width goes as √T.`,
  },

  "usaaao-2025-first-round-q9": {
    solution: [
      r`**A**: at fixed total mass, more stars means each star is lighter. Since $L \propto M^{3.5}$ is steep, splitting mass into smaller stars **reduces** the total light: brightness per unit mass goes down. False.`,
      r`**B**: as a cluster ages its hottest, most massive stars die first, so the turn-off moves to **cooler** stars. False.`,
      r`**C**: for the same reason the turn-off moves to **less luminous** stars over time. True.`,
    ],
    wrongChoices: {
      A: r`C is true but A is false: with $L \propto M^{3.5}$, many small stars are much dimmer than a few big ones of the same total mass.`,
      B: r`A is false (smaller stars are less luminous per unit mass), and C, which is true, is left out.`,
      D: r`Only C is true. A fails because of the steep mass-luminosity law, and B has the direction backwards: old clusters have cool turn-offs.`,
      E: r`Both are false: brightness per unit mass falls with more, smaller stars, and older clusters have cooler, not hotter, turn-offs.`,
    },
    takeaway: r`A steep L ∝ M^3.5 favours big stars, and cluster turn-offs move cooler and fainter with age.`,
  },

  "usaaao-2025-first-round-q10": {
    solution: [
      r`Line **1** is the straight line through the centre of the chart, the zenith, running north-south: the **local meridian**. Only the meridian passes through the zenith as a straight line on a chart like this.`,
      r`The **celestial equator** is symmetric about the meridian: its highest (or lowest) point lies on the meridian and it curves away equally on both sides. Line **3** has exactly that symmetry.`,
      r`The **ecliptic** is generally tilted relative to the meridian and crosses the chart asymmetrically, like line **2**. So 1 is the meridian, 2 the ecliptic, 3 the celestial equator.`,
    ],
    wrongChoices: {
      A: r`Line 1 passes straight through the zenith, which is the meridian, not the ecliptic. And the ecliptic does not run through the zenith as a straight line.`,
      B: r`Line 3 is symmetric about the meridian, which is the signature of the celestial equator; the galactic equator has no such relationship to the meridian.`,
      C: r`Line 1 is the meridian: the only great circle that appears as a straight vertical line through the zenith on this chart.`,
      E: r`Lines 2 and 3 are swapped. The celestial equator (3) must be symmetric about the meridian, while the ecliptic (2) crosses at a tilt.`,
    },
    takeaway: r`On a sky chart the meridian is the straight line through the zenith, the equator is symmetric about it, and the ecliptic crosses at an angle.`,
  },

  "usaaao-2025-first-round-q11": {
    solution: [
      r`Kepler's third law with the star's mass, in years, AU and solar masses: $T^2 = \dfrac{a^3}{M}$.`,
      r`Take logs: $2\log T = 3\log a - \log M$, so $\log T = \dfrac{3}{2}\log a - \dfrac{1}{2}\log M$. The **slope** is $\dfrac{3}{2}$, whatever the star's mass.`,
    ],
    wrongChoices: {
      A: r`Not from Kepler's law. The exponents are 2 on $T$ and 3 on $a$, so $\log T$ grows $3/2$ as fast as $\log a$.`,
      C: r`The star's mass shifts the line up or down (the intercept); it does not change the slope.`,
      D: r`A slope of 1 would mean $T \propto a$, but Kepler's law is $T \propto a^{3/2}$.`,
      E: r`This inverts the exponent; $\log T = \tfrac{3}{2}\log a + \text{const}$.`,
    },
    takeaway: r`On log-log axes Kepler's law is a straight line of slope 3/2.`,
  },

  "usaaao-2025-first-round-q12": {
    solution: [
      r`From $\log T = \dfrac{3}{2}\log a - \dfrac{1}{2}\log M$, the intercept (the value at $\log a = 0$, i.e. $a = 1$ AU) is $-\dfrac{1}{2}\log M$.`,
      r`With $M = 10$ solar masses, $\log_{10} 10 = 1$, so the intercept is $-\dfrac{1}{2}$: a planet at 1 AU would orbit in $10^{-0.5} \approx 0.32$ years.`,
    ],
    wrongChoices: {
      A: r`A positive intercept would mean a **longer** period than around the Sun, but a heavier star pulls harder and shortens the period.`,
      B: r`Not from the formula. The intercept is $-\tfrac{1}{2}\log_{10}M$ with $M = 10$.`,
      D: r`Zero would be right for a **one**-solar-mass star. Ten solar masses lowers the line by $\tfrac{1}{2}\log_{10}10$.`,
      E: r`Not from the formula. Halve $\log_{10} 10 = 1$ and make it negative.`,
    },
    takeaway: r`The intercept of the log-log Kepler line is −(1/2) log M: heavier stars shift it down.`,
  },

  "usaaao-2025-first-round-q13": {
    solution: [
      r`The moon's orbit: distances from the planet's centre are $3000 + 1000 = 4000$ km and $3000 + 7000 = 10{,}000$ km, so $a_m = 7000$ km. Its period is $P_m = 100$ min.`,
      r`Kepler's law for each orbit: $\dfrac{a^3}{P^2} \propto M_{\text{central}}$. Dividing the planet's orbit by the moon's: $\dfrac{a_p^3}{a_m^3} = \dfrac{M_\star}{M_p}\left(\dfrac{P_p}{P_m}\right)^2 = 10^5 \times \left(\dfrac{129{,}600}{100}\right)^2 = 1.68 \times 10^{11}$.`,
      r`$a_p = 7000 \times (1.68 \times 10^{11})^{1/3} \approx 7000 \times 5520 \approx 3.86 \times 10^7$ km.`,
    ],
    wrongChoices: {
      A: r`Too small. Check the moon's semi-major axis: the altitudes must be measured from the planet's **centre**, giving $a_m = 7000$ km, not 4000 km.`,
      B: r`Too small. Recompute the ratio $(P_p/P_m)^2 \times 10^5$ with the periods in the same units (90 days is 129,600 minutes).`,
      C: r`Too small. The cube root of $1.68 \times 10^{11}$ is about 5520; multiply by the moon's 7000 km.`,
      D: r`Not quite. Keep the full mass ratio $10^5$ and the squared period ratio inside the cube root.`,
    },
    takeaway: r`Compare two orbits with Kepler's law in ratio form: a³/P² scales with the central mass.`,
  },

  "usaaao-2025-first-round-q14": {
    solution: [
      r`Spinning provides a centripetal acceleration $\omega^2 r$ that feels like gravity at the rim. Set $\omega^2 r = g$: $\omega = \sqrt{\dfrac{9.81}{50}} = 0.443$ rad/s.`,
      r`Period: $T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{0.443} \approx 14.2$ s.`,
    ],
    wrongChoices: {
      A: r`Far too fast; spinning this quickly would give about 38 g at the rim. Use $\omega = \sqrt{g/r}$.`,
      B: r`Too fast; this would give nearly 8 g. Check $\omega = \sqrt{g/r}$, then $T = 2\pi/\omega$.`,
      C: r`Half the correct period, giving 4 g. Make sure you used $2\pi/\omega$, not $\pi/\omega$.`,
      E: r`Too slow; at 32 s per turn the rim would feel only about 0.2 g.`,
    },
    takeaway: r`Spin gravity: ω²r = g, and T = 2π√(r/g).`,
  },

  "usaaao-2025-first-round-q15": {
    solution: [
      r`Walking at speed $v$ in a habitat spinning at $\omega$ produces a Coriolis acceleration of up to $2\omega v$ (worst case when walking along the rim's direction of motion or against it, or vertically).`,
      r`Earth-like gravity needs $\omega = \sqrt{g/r}$, so the condition $2\omega v < 0.01g$ becomes $2v\sqrt{g/r} < 0.01g$, i.e. $r > \dfrac{4v^2}{(0.01)^2 g} = \dfrac{4 \times 1}{10^{-4} \times 9.81} \approx 4100$ m.`,
      r`A habitat several kilometres across is needed for people not to notice the spin: this is why proposed space colonies are so large.`,
    ],
    wrongChoices: {
      A: r`Far too small; at 10 m radius the spin would be about 1 rad/s and walking at 1 m/s would give a Coriolis acceleration of 2 m/s², about 20% of $g$.`,
      B: r`Too small; a 20 m habitat spins at 0.7 rad/s, giving a 14% of $g$ Coriolis effect at walking pace.`,
      C: r`Too small by a factor of 100. The condition $2v\sqrt{g/r} < 0.01g$ gives $r > 4v^2/(10^{-4}g)$; check the squaring of the 0.01.`,
      D: r`Too small by a factor of 4. Keep the factor of 2 in the Coriolis acceleration $2\omega v$; it becomes 4 when squared.`,
    },
    takeaway: r`Coriolis acceleration is 2ωv; keeping it small at 1 g needs r > 4v²/(fraction² g), kilometres across.`,
  },

  "usaaao-2025-first-round-q16": {
    solution: [
      r`Standing on the rim you move with the rim's speed $\omega R$ in the direction of rotation. When you throw the ball "up" (towards the axis) it keeps that sideways speed, but it is now at a smaller radius.`,
      r`A point at smaller radius $r$ needs only $\omega r < \omega R$ to keep pace with the station, so the ball, still moving at $\omega R$, gets **ahead** of you in the direction of rotation.`,
      r`Since you are facing the direction of rotation, the ball comes down **in front of you**. (This is the Coriolis effect: an inward velocity in a rotating frame is deflected forward.)`,
    ],
    wrongChoices: {
      A: r`In a rotating habitat "straight up" is not a straight line in the inertial frame. The ball's angular speed exceeds the station's while it is closer to the axis, so it drifts.`,
      C: r`The ball keeps the rim's full tangential speed while at smaller radius, so it out-runs the floor, landing ahead of you, not behind.`,
      D: r`The deflection is along the direction of rotation, not sideways. Facing the rotation direction, that is straight ahead.`,
      E: r`The deflection is in the plane of rotation (forward), not to the side.`,
    },
    takeaway: r`In a spinning habitat, a ball thrown towards the axis drifts forward in the direction of rotation.`,
  },

  "usaaao-2025-first-round-q17": {
    solution: [
      r`Both must supply the star's actual luminosity, $L = 4\pi R^2\sigma T_s^4$.`,
      r`**Alice**: a radiating core of radius $R_A$ at $T_c$: $4\pi R_A^2\sigma T_c^4 = 4\pi R^2\sigma T_s^4$, so $R_A = R\left(\dfrac{T_s}{T_c}\right)^2$.`,
      r`**Bob**: conduction from a small core at $T_c$ out through the star: $L \approx 4\pi\kappa R_B T_c$ (for $R_B \ll R$), so $R_B = \dfrac{R^2\sigma T_s^4}{\kappa T_c}$.`,
      r`Ratio: $\dfrac{R_A}{R_B} = \dfrac{R\,T_s^2/T_c^2}{R^2\sigma T_s^4/(\kappa T_c)} = \dfrac{\kappa}{\sigma R\,T_c\,T_s^2} \propto \dfrac{1}{R\,T_c\,T_s^2}$.`,
    ],
    wrongChoices: {
      A: r`This is not the ratio of the two estimates. Compute $R_A$ from radiation ($R_A \propto R T_s^2/T_c^2$) and $R_B$ from conduction ($R_B \propto R^2 T_s^4/T_c$), then divide.`,
      B: r`This is $R_A/R$ on its own, Alice's estimate relative to the star's radius, not the ratio of Alice's to Bob's core sizes.`,
      D: r`Not the ratio. Bob's conductive estimate has $R^2 T_s^4/T_c$; dividing Alice's $R T_s^2/T_c^2$ by it leaves $1/(R T_c T_s^2)$.`,
      E: r`This is the inverse of the correct ratio, $R_B/R_A$. The question asks for $R_A/R_B$.`,
    },
    takeaway: r`Match each model's core to the star's true luminosity: radiation gives R_A ∝ R(T_s/T_c)², conduction gives R_B ∝ R²T_s⁴/(κT_c).`,
  },

  "usaaao-2025-first-round-q18": {
    solution: [
      r`Shadows point away from the Sun, so the angle between the sunrise and sunset shadows equals the angle between the sunrise and sunset directions. The Sun rises at azimuth $A$ where $\cos A = \dfrac{\sin\delta}{\cos\phi}$ and sets at $360^\circ - A$, so the angle between them is $2A$ (or $360^\circ - 2A$), whichever is smaller.`,
      r`For $105^\circ$: $A = 52.5^\circ$ (or $127.5^\circ$), giving $|\cos A| = 0.609 = \dfrac{|\sin\delta|}{\cos\phi}$, so $\cos\phi = \dfrac{|\sin\delta|}{0.609}$.`,
      r`The Sun's declination never exceeds $23.44^\circ$ in size, so $\cos\phi \le \dfrac{0.398}{0.609} = 0.653$, which needs $|\phi| \ge 49.2^\circ$. Only the **40° to 50° N** interval reaches that far.`,
    ],
    wrongChoices: {
      A: r`Near the equator the Sun rises within $23.5^\circ$ of due east all year, so the sunrise and sunset directions are always at least $133^\circ$ apart, never $105^\circ$.`,
      B: r`At these latitudes the sunrise azimuth stays within about $25^\circ$ of east, so the two shadows are at least $130^\circ$ apart.`,
      C: r`Between $20^\circ$ and $30^\circ$ N the sunrise azimuth reaches at most about $27^\circ$ from east, so the shadows are separated by at least $126^\circ$.`,
      D: r`At $40^\circ$ N the sunrise at the solstice is $31.5^\circ$ from east, leaving the shadows $117^\circ$ apart at minimum, still more than $105^\circ$.`,
    },
    takeaway: r`Sunrise azimuth obeys cos A = sin δ / cos φ; the spread between sunrise and sunset grows with latitude.`,
  },

  "usaaao-2025-first-round-q19": {
    solution: [
      r`**I** is Kepler's first law: orbits are ellipses with the Sun at a focus. **III** follows from the second law: sweeping equal areas in equal times means moving fastest at perihelion.`,
      r`**II** cannot be inferred: the laws allow any eccentricity below 1; that the planets happen to have nearly circular orbits is an observed fact, not a consequence. **IV** cannot be inferred either: each orbit is a plane, but nothing in the laws says the planets share one.`,
    ],
    wrongChoices: {
      A: r`Statement I is exactly Kepler's first law, so it certainly can be inferred.`,
      B: r`IV is right, but II is also not implied by the laws: they permit any eccentricity.`,
      C: r`III **does** follow from the second law (equal areas in equal times means fastest at perihelion), so it should not be in the list.`,
      E: r`III follows from the second law, so it is inferable. IV, on the other hand, is not.`,
    },
    takeaway: r`Kepler's laws describe each orbit's shape and timing, not how small eccentricities are or how orbits are aligned.`,
  },

  "usaaao-2025-first-round-q20": {
    solution: [
      r`Ninety-one days after the summer solstice is about September 20, the autumnal equinox, when the Sun rises at 6:00 **apparent** solar time everywhere. The equation of time is then $+8$ min (apparent ahead of mean), so sunrise is at 5:52 local **mean** time.`,
      r`The watch shows 3:00 UTC at that moment, so local mean time and UTC differ by $5{:}52 - 3{:}00 = 2$ h $52$ min, which is $2.867 \times 15^\circ = 43^\circ$ of longitude.`,
      r`The key gives **43° W**, consistent with a voyage west across the Atlantic. (Strictly, a local time later than UTC would place the ship east of Greenwich, so the problem's clock reading is not fully consistent with its story; take the method: longitude from the gap between local solar time and UTC, corrected by the equation of time.)`,
    ],
    wrongChoices: {
      B: r`A round 45° would need a time difference of exactly 3 hours; the equation of time correction of 8 minutes shifts it.`,
      C: r`Not from the numbers. The time difference between local mean sunrise (5:52) and the 3:00 watch reading is 2 h 52 min, which is 43°.`,
      D: r`This would need a 3 h 20 min difference. The equinox sunrise is at 6:00 apparent time, 5:52 mean time.`,
      E: r`Not from the numbers. Convert the 2 h 52 min difference at 15° per hour.`,
    },
    takeaway: r`Longitude = 15° × (local mean time − UTC), with local mean time = apparent solar time − equation of time.`,
  },

  "usaaao-2025-first-round-q21": {
    solution: [
      r`Rigel and Betelgeuse define a **great circle** on the sky. The line joining them looks vertical when the zenith lies on that great circle, and the zenith's declination equals the observer's latitude.`,
      r`So the question is: what range of declinations does that great circle cover? A great circle reaches a maximum declination equal to its tilt from the celestial equator.`,
      r`With the two stars about $18^\circ$ apart and separated by $15.6^\circ$ in declination over $10.5^\circ$ of right ascension, their great circle is steeply tilted, reaching about $\pm 56^\circ$ declination (see the solution figure). So the line can be vertical for latitudes between roughly **−55° and +55°**.`,
    ],
    wrongChoices: {
      A: r`Too narrow. The stars' great circle is tilted far more than $15^\circ$ from the equator; it climbs to about $56^\circ$.`,
      B: r`Too narrow; the great circle through the pair reaches well beyond $25^\circ$ declination.`,
      C: r`Too narrow. The pair spans $15.6^\circ$ in declination over only $10.5^\circ$ of RA, so their great circle is steep, reaching about $56^\circ$.`,
      D: r`Too narrow by about $10^\circ$. Compute the pole of the great circle through the two stars; it sits at declination about $34^\circ$, so the circle reaches $90^\circ - 34^\circ = 56^\circ$.`,
    },
    takeaway: r`Two stars appear vertically aligned when the zenith lies on their great circle, so the possible latitudes span that circle's declination range.`,
  },

  "usaaao-2025-first-round-q22": {
    solution: [
      r`Venus is farthest from the Sun at **greatest elongation**, where $\sin E = \dfrac{0.723}{1}$, so $E = 46.3^\circ$ along the ecliptic.`,
      r`From the equator every object sets when its hour angle reaches $90^\circ$, so Venus sets after the Sun by the difference in their **right ascensions** divided by $15^\circ$ per hour. The ecliptic separation converts to the largest RA difference when the pair straddles a solstice, where the ecliptic runs along a small circle and RA differences are stretched by about $1/\cos 23.5^\circ$.`,
      r`That gives a maximum RA gap of about $50^\circ$, so Venus stays up for $\dfrac{50^\circ}{15^\circ/\text{h}} \approx 3.3$ h, about **3 h 20 min**.`,
    ],
    wrongChoices: {
      A: r`Too short. Even the ecliptic elongation of $46.3^\circ$ alone gives $46.3/15 \approx 3.1$ h, and the RA stretch near a solstice adds more.`,
      B: r`This is $46.3^\circ/15^\circ$ per hour, the elongation used directly as an RA difference. Near a solstice the same ecliptic gap spans more RA, lengthening the visibility.`,
      D: r`Too long. The maximum RA difference for a $46.3^\circ$ ecliptic separation is about $50^\circ$, not $55^\circ$.`,
      E: r`Venus can never be opposite the Sun; as an inner planet it stays within $46.3^\circ$ of it, so it always sets a few hours after sunset.`,
    },
    takeaway: r`Greatest elongation sin E = r_Venus/r_Earth, and from the equator visibility after sunset is the RA difference ÷ 15° per hour.`,
  },

  "usaaao-2025-first-round-q23": {
    solution: [
      r`Irradiance follows the inverse-square law. Perihelion is at $a(1 - e)$ and aphelion at $a(1 + e)$, so $\dfrac{S_p}{S_a} = \left(\dfrac{1 + e}{1 - e}\right)^2 = \left(\dfrac{1.0167}{0.9833}\right)^2 = 1.069$.`,
      r`About **6.9%** more sunlight at perihelion (early January) than at aphelion (early July).`,
    ],
    wrongChoices: {
      A: r`This is about $e^2$, far too small. The distance ratio $(1 + e)/(1 - e) \approx 1.034$ must be **squared** for irradiance.`,
      B: r`Too small by more than a hundred times. Irradiance scales as $1/r^2$ with $r$ varying by $\pm 1.67\%$.`,
      C: r`This is just $e$ in percent. The distance changes by about $2e$ between the two extremes, and irradiance by about $4e$.`,
      D: r`This is the ratio of **distances**, $(1 + e)/(1 - e) - 1 \approx 3.4\%$. Irradiance goes as the inverse square, doubling the percentage.`,
    },
    takeaway: r`Irradiance ∝ 1/r², so the perihelion-to-aphelion change is about 4e ≈ 6.9% for Earth.`,
  },

  "usaaao-2025-first-round-q24": {
    solution: [
      r`Five hundred times fainter than the Sun means a red dwarf of only about $0.2$ solar masses (with $L \propto M^{3.5}$, $M \approx 500^{-1/3.5} \approx 0.17\,M_\odot$).`,
      r`Stars below about $0.35$ solar masses are **fully convective**: their gas is cool and opaque throughout, so convection carries energy all the way from the core to the surface. Both core and envelope are convective.`,
    ],
    wrongChoices: {
      B: r`A convective core with a radiative envelope describes **massive** stars (above about 1.3 solar masses), the opposite end of the main sequence.`,
      C: r`A radiative core with a convective envelope is the Sun's structure, for stars of roughly 0.35 to 1.3 solar masses. This star is far lighter.`,
      D: r`Fully radiative stars do not exist on the main sequence; every star has convection somewhere, and a red dwarf has it everywhere.`,
      E: r`"Static" is not an energy-transport mechanism. Every star moves its energy outward by radiation or convection.`,
    },
    takeaway: r`Red dwarfs below about 0.35 solar masses are convective throughout.`,
  },

  "usaaao-2025-first-round-q25": {
    solution: [
      r`Angular diameter from the image: $\theta = \dfrac{0.1\ \mu\text{m}}{1000\ \text{mm}} = \dfrac{10^{-7}}{1} = 10^{-7}$ rad, so the angular radius is $5 \times 10^{-8}$ rad.`,
      r`Flux from the magnitude: a magnitude-0 star delivers about $2.5 \times 10^{-8}$ W/m², so magnitude 1 gives $F \approx 10^{-8}$ W/m².`,
      r`The observed flux equals $\sigma T^4$ times the star's solid angle: $F = \sigma T^4 \left(\dfrac{\theta}{2}\right)^2$, so $T^4 = \dfrac{10^{-8}}{5.67 \times 10^{-8} \times 2.5 \times 10^{-15}} \approx 7 \times 10^{13}$ and $T \approx 2900$ K, closest to **3000 K**. (The parallax gives 20 pc, which makes the star a 44-solar-radius red giant, but the distance cancels out of the temperature.)`,
    ],
    wrongChoices: {
      B: r`Too hot. Check the flux for magnitude 1 (about $10^{-8}$ W/m²) and the angular radius $5 \times 10^{-8}$ rad; the fourth root gives just under 3000 K.`,
      C: r`Too hot; a 4000 K star with this angular size would appear about 3.5 times brighter, near magnitude $-0.4$.`,
      D: r`Too hot. Recompute $T^4 = F/(\sigma(\theta/2)^2)$ with $\theta = 10^{-7}$ rad.`,
      E: r`Too hot; at 5000 K the star would deliver eight times the observed flux for this angular size.`,
    },
    takeaway: r`Observed flux = σT⁴ × (angular radius)²: an angular size plus a brightness gives the temperature without knowing the distance.`,
  },

  "usaaao-2025-first-round-q26": {
    solution: [
      r`For a circular orbit inclined by $i$, starting at the ascending node, the ecliptic longitude $\lambda$ after the planet has moved an angle $\omega t$ along its orbit satisfies $\tan\lambda = \cos i\,\tan(\omega t)$.`,
      r`Planet 1: $i = 30^\circ$, $\omega_1 = \pi$ rad/yr. Planet 2: $i = 70^\circ$, $\omega_2 = 2\pi$ rad/yr. Equal longitudes: $\cos 30^\circ\tan(\pi t) = \cos 70^\circ\tan(2\pi t)$.`,
      r`With $x = \tan(\pi t)$ and $\tan 2\theta = \dfrac{2\tan\theta}{1 - \tan^2\theta}$: $0.866(1 - x^2) = 2 \times 0.342 = 0.684$, so $x^2 = 0.210$, $x = 0.458$, $\pi t = 0.430$ rad and $t = 0.137$ yr $\approx$ **50 days**.`,
    ],
    wrongChoices: {
      A: r`Too soon. Solve $\cos 30^\circ\tan(\pi t) = \cos 70^\circ\tan(2\pi t)$; the double-angle identity gives $\tan^2(\pi t) = 1 - 0.684/0.866$.`,
      B: r`Too soon. The steep 70° inclination makes planet 2's longitude lag badly at first, so it takes about 0.137 yr for planet 2 to catch planet 1 in longitude.`,
      C: r`Too soon. Check the arithmetic: $x^2 = 1 - 0.790 = 0.210$, so $\pi t = \arctan(0.458)$.`,
      D: r`Close, but $\arctan(0.458) = 0.430$ rad gives $t = 0.137$ yr, which is 50 days rather than 48.`,
    },
    takeaway: r`Projected longitude on an inclined circular orbit follows tan λ = cos i tan(ωt).`,
  },

  "usaaao-2025-first-round-q27": {
    solution: [
      r`Matter density dilutes with volume: $\rho \propto R^{-3}$. Then $H = \dfrac{\dot R}{R} \propto \sqrt{\rho} \propto R^{-3/2}$.`,
      r`So $\dot R \propto R^{-1/2}$, i.e. $R^{1/2}\,dR \propto dt$. Integrating: $R^{3/2} \propto t$, so $R \propto t^{2/3}$.`,
      r`The expansion **decelerates** in a matter-only universe (the exponent is less than 1), because gravity is pulling everything back.`,
    ],
    wrongChoices: {
      A: r`A constant size would mean no expansion, but $H > 0$.`,
      B: r`$R \propto t^{1/2}$ is the **radiation**-dominated case, where density falls as $R^{-4}$.`,
      D: r`$R \propto t$ would mean no deceleration, which needs an empty universe. Matter's gravity slows the expansion.`,
      E: r`Exponential growth is the dark-energy-dominated case, where $H$ is constant. With matter, $H$ falls as the universe grows.`,
    },
    takeaway: r`Matter-dominated expansion goes as R ∝ t^(2/3); radiation gives t^(1/2), dark energy gives e^(Ht).`,
  },

  "usaaao-2025-first-round-q28": {
    solution: [
      r`The seasons follow the tropical year of $365.2422$ days. A calendar year of exactly $365$ days is short by $0.2422$ days, so the solstice arrives $0.2422$ days **later** in the calendar each year.`,
      r`Over 100 years the drift is $24.2$ days: June 21 slips to about **July 15**.`,
    ],
    wrongChoices: {
      A: r`Wrong direction. A calendar that is too short lets the seasons fall **later** on the calendar, not earlier.`,
      B: r`Wrong direction and wrong size. Without leap days the solstice drifts later, by about a quarter of a day per year.`,
      C: r`The date stays fixed only if leap days keep the calendar in step with the tropical year. Removing them lets it drift by about 24 days a century.`,
      D: r`Too small. The drift is about 0.24 days per year, or 24 days per century, not 8.`,
    },
    takeaway: r`Leap days exist because the year is 365.24 days; without them the seasons drift 24 days later per century.`,
  },

  "usaaao-2025-first-round-q29": {
    solution: [
      r`A rise of $0.005$ in magnitude means the flux falls to $10^{-0.4 \times 0.005} = 10^{-0.002} = 0.9954$ of normal, so the planet blocks $0.0046$ of the star's disc.`,
      r`Depth equals the area ratio: $\left(\dfrac{R_p}{R}\right)^2 = 0.0046$, so $\dfrac{R_p}{R} = \sqrt{0.0046} \approx 0.068$, closest to **0.067R**.`,
    ],
    wrongChoices: {
      A: r`Too small; a planet of $0.056R$ would block only $0.31\%$ of the light, a dip of $0.0034$ mag.`,
      C: r`Too large; $0.089R$ would block $0.79\%$, a dip of $0.0086$ mag.`,
      D: r`Too large; $0.12R$ blocks $1.4\%$ of the light, three times the observed dip.`,
      E: r`Too large; $0.15R$ blocks $2.25\%$, a dip of $0.025$ mag, five times the observed one.`,
    },
    takeaway: r`Convert the magnitude dip to a flux fraction with 10^(−0.4Δm), then R_p/R = √(depth).`,
  },

  "usaaao-2025-first-round-q30": {
    solution: [
      r`Focal ratio is focal length divided by aperture, in the same units: $\dfrac{120\ \text{cm}}{12\ \text{cm}} = 10$, written **f/10**.`,
    ],
    wrongChoices: {
      A: r`This mixes units (1200 mm over 12 cm). Convert both to the same unit first: 120 cm over 12 cm.`,
      B: r`Off by a factor of ten; check that 1.2 m is 120 cm.`,
      D: r`f/1 would need an aperture equal to the focal length, 1.2 m. This telescope's aperture is only 12 cm.`,
      E: r`This inverts the ratio and slips a decimal. Focal ratio is focal length **divided by** aperture.`,
    },
    takeaway: r`f-number = focal length ÷ aperture, both in the same units.`,
  },
};
