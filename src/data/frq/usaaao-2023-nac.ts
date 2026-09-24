// USAAAO National Astronomy Competition 2023: 240 points in three sections.
//
//   Short Questions  (35 points)  S1–S3
//   Medium Questions (65 points)  M1–M3
//   Long Questions  (140 points)  L1–L3
//
// Question numbers restart in each section on the paper, so they are
// prefixed here (S, M, L) to keep every question's slug unique.
//
// Solutions come from the official solutions PDF. Where they were only
// lightly tidied they are OFFICIAL; where we shortened them or fixed a
// slip they are ADAPTED, and each fix is explained in a short note:
//   - M2(d): the He-4 mass defect is 28.3 MeV, not 29.7 MeV.
//   - M3(a): the official table used a = 20.4 km for P5; the paper says 20.3 km.
//   - M3(e): the star's luminosity works out to 2.9e14 W, not 3.23e14 W.
//   - L2(e)/(f): a typo (128 -> 180) and a missing factor of 10^-7.
//   - L3(i): solving the equation precisely gives about 45 s, not 48 s.
// None of these changes the official final conclusions.
//
// Only S3 uses half points, because only its official marking scheme
// awards them. The long questions print points only for groups of parts,
// so Sundial II is split into "(a)–(b)" (10 points) and "(c)–(g)" (35).
//
// Text uses String.raw so LaTeX backslashes are written only once.
import type { FrqSeedExam } from "./types";

const YEAR = 2023;
const EXAM_NAME = "National Astronomy Competition";

export const usaaao2023Nac: FrqSeedExam = {
  competition: "USAAAO",
  year: YEAR,
  examName: EXAM_NAME,
  slug: "usaaao-2023-nac",
  sourceUrl: "https://usaaao.org/resources/past-exams/",
  questionPdfUrl: "https://usaaao.org/wp-content/uploads/2023/09/second_exam_2023-1.pdf",
  solutionPdfUrl: "https://usaaao.org/wp-content/uploads/2023/09/second_exam_2023_sols-1.pdf",
  attributionText: `Source: USA Astronomy and Astrophysics Organization (USAAAO), ${EXAM_NAME} ${YEAR}. Problem text and official solutions transcribed from the official PDFs and used with permission; solutions marked as Astro Coach were written or completed by Astro Coach. Astro Coach is independent and not affiliated with USAAAO.`,
  questions: [
    // =====================================================================
    // Short Questions (35 points)
    // =====================================================================

    // --- S1: White dwarf density ----------------------------------------
    {
      number: "S1",
      title: "White Dwarfs",
      section: "Short Questions",
      topic: "Stars & Black Holes",
      topics: ["Stars & Black Holes", "Energy & Stellar Physics"],
      difficulty: "Intermediate",
      points: 10,
      text: String.raw`White Dwarfs are stars in their last stage of life that are prevented from collapsing only by the electron degeneracy pressure. This pressure is an outward one exerted by the electrons inside the star, which are fermions subject to the Pauli exclusion principle. We can find its value by the following formula, which is derived from the theory of fermion gases:

$$p_{\text{electron}} = \frac{2}{3}u = \frac{\hbar^2}{5m_e}\left(3\pi^2\right)^{2/3} n^{5/3}$$

where $n$ is the number density of electrons in the star. This pressure balances the inward gravitational pressure, which is given by

$$p_{\text{grav}} = -\frac{\Omega}{3V}, \qquad \Omega = -\frac{3GM^2}{5R}$$

where $\Omega$ is the value of the total potential energy of the star.`,
      parts: [
        {
          label: "(a)",
          points: 8,
          prompt: String.raw`If the star contains nuclei with atomic number $Z$ and mass number $A$, what is the density value of the white dwarf in function of its total mass $M$, $A$, $Z$, and other fundamental constants?`,
          solution: String.raw`To obtain the electron pressure as a function of the density, we can use $n = N_e/V = ZN/V$, where $N$ is the number of atoms in the star. Since we can consider that just the protons and the neutrons contribute to the mass of an atom, we can say that $N = M/(Am_p)$, and so

$$n = \frac{Z\rho}{Am_p}$$

Besides that, since $\rho = \dfrac{M}{\frac{4}{3}\pi R^3}$,

$$R^3 = \frac{3M}{4\pi\rho} \quad\Rightarrow\quad R = \left(\frac{3M}{4\pi\rho}\right)^{1/3}$$

Therefore, we can balance the electron and the gravitational pressure (the condition for the existence of the white dwarf) to obtain the value of the density:

$$p_{\text{electron}} = p_{\text{grav}} \;\Rightarrow\; \frac{\hbar^2}{5m_e}\left(3\pi^2\right)^{2/3}\left(\frac{Z\rho}{Am_p}\right)^{5/3} = \frac{3GM^2}{20\pi R^4} = \frac{G}{5}\left(\frac{4\pi}{3}\right)^{1/3} M^{2/3}\rho^{4/3}$$

$$\Rightarrow\quad \rho = \frac{4G^3M^2m_e^3}{27\pi^3\hbar^6}\left(\frac{Am_p}{Z}\right)^5$$`,
          rubric: `Astro Coach marking guide (8 points):
- Electron number density written as n = Zρ/(A m_p): 2 points.
- Gravitational pressure in terms of M and R, p_grav = 3GM²/(20πR⁴): 2 points.
- R eliminated using ρ = M / ((4/3)πR³): 1 point.
- Pressures equated and the algebra carried through: 1 point.
- Final result ρ = 4G³M²m_e³/(27π³ħ⁶) · (A m_p/Z)⁵ (or an equivalent form): 2 points.`,
        },
        {
          label: "(b)",
          points: 2,
          prompt: String.raw`Find what is the value of $k$ in the relation $M \propto V^k$, where $V$ is the volume of the star.`,
          solution: String.raw`From the last item, we see that $\rho \propto M^2$. So, since $\rho = MV^{-1}$,

$$MV^{-1} \propto M^2 \;\Rightarrow\; M \propto V^{-1}$$

Therefore, $k = -1$, and $MV$ is a constant for white dwarfs. (More massive white dwarfs are smaller.)`,
          rubric: `Astro Coach marking guide (2 points):
- Uses ρ ∝ M² from part (a) together with ρ = M/V: 1 point.
- k = −1: 1 point.`,
        },
      ],
      solutionSource: "OFFICIAL",
      questionPages: [2],
      solutionPages: [2],
    },

    // --- S2: The Large Magellanic Cloud -----------------------------------
    {
      number: "S2",
      title: "The Large Magellanic Cloud",
      section: "Short Questions",
      topic: "Galaxies & Universe",
      topics: ["Galaxies & Universe", "Light & Spectra"],
      difficulty: "Beginner",
      points: 10,
      text: String.raw`The Large Magellanic Cloud (LMC) is a galaxy with a redshift of $z = 8.75 \times 10^{-4}$.`,
      parts: [
        {
          label: "(a)",
          points: 4,
          prompt: String.raw`What is the radial velocity of the LMC with respect to the Solar System? Is it getting closer or farther from the Solar System?`,
          solution: String.raw`For a small redshift we can use

$$z = \frac{v}{c} \;\Rightarrow\; v = cz = 2.998\times10^{8} \times 8.75\times10^{-4} = 2.62\times10^{5}\ \text{m/s}$$

(about $262\ \text{km/s}$). Since the redshift is positive, the galaxy is getting **farther** from the Solar System.`,
          rubric: `Astro Coach marking guide (4 points):
- Uses v = cz: 1 point.
- v ≈ 2.62 × 10⁵ m/s (262 km/s): 2 points.
- States that the LMC is moving away (positive redshift): 1 point.`,
        },
        {
          label: "(b)",
          points: 4,
          prompt: String.raw`Hubble's Law is a well-known method of calculating the distance to a galaxy. Using this approach, calculate the distance between the LMC and the Solar System.`,
          solution: String.raw`Using Hubble's Law with $H_0 \approx 70\ \text{km/s/Mpc}$:

$$v = H_0 d \;\Rightarrow\; d = \frac{v}{H_0} = \frac{262\ \text{km/s}}{70\ \text{km/s/Mpc}} \approx 3.7\ \text{Mpc}$$`,
          rubric: `Astro Coach marking guide (4 points):
- Uses Hubble's law d = v/H₀: 2 points.
- d ≈ 3.7 Mpc (3.5–3.9 Mpc for any reasonable H₀ from 67 to 74 km/s/Mpc): 2 points.`,
        },
        {
          label: "(c)",
          points: 2,
          prompt: String.raw`Is Hubble's Law a reasonable method to determine the distance to the LMC? Explain your answer.`,
          solution: String.raw`**No.** Hubble's Law is only valid for distant galaxies. The redshift for the LMC is extremely low, which indicates that it is a close galaxy. The problem of using Hubble's Law with nearby galaxies is that gravitational effects have a significant impact on the velocities, which makes a calculation that only takes into account the velocity due to the expansion of the Universe imprecise. For distant galaxies, these effects are negligible compared to the velocity that results from the expansion of the Universe, but this is not the case for the LMC.

(In fact the LMC is only about $50\ \text{kpc}$ away — some 70 times closer than the Hubble's-law estimate — and its velocity is dominated by its orbit around the Milky Way.)`,
          rubric: `Astro Coach marking guide (2 points):
- Answers no: 1 point.
- Explains that for a nearby galaxy, motion due to gravity (peculiar velocity, e.g. orbiting the Milky Way) dominates over the Hubble expansion: 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [2],
      solutionPages: [2, 3],
    },

    // --- S3: Culmination time (official rubric uses half points) -----------
    {
      number: "S3",
      title: "Culmination Time",
      section: "Short Questions",
      topic: "Math, Data & Coordinates",
      difficulty: "Intermediate",
      points: 15,
      pointStep: 0.5,
      text: "",
      parts: [
        {
          label: "(a)",
          points: 12,
          prompt: String.raw`In Lubbock, Texas ($\lambda = 101^\circ 53'\,\text{W}$, $\phi = 33^\circ 35'\,\text{N}$) on September 22nd, what is the local time of upper culmination of Vega ($\alpha = 18\,\text{hr}\ 37\,\text{min}$, $\delta = 38^\circ 47'$)? The time zone of Lubbock is CDT, UTC$-5$. Assume that the equation of time is 6 min at the relevant time, in the convention of solar time minus mean time.`,
          solution: String.raw`September 22nd is the autumnal equinox, so the right ascension of the Sun is $12\ \text{hr}$.

By $\Theta = h + \alpha$, where $\Theta$ is the local sidereal time, $h$ is the hour angle, and $\alpha$ is the right ascension, the local sidereal time at upper culmination of Vega (hour angle 0) is $\Theta = \alpha_{\text{Vega}}$, so the hour angle of the Sun is $\alpha_{\text{Vega}} - 12\ \text{hr}$ and the local solar time is $\alpha_{\text{Vega}}$.

Applying the equation of time ($ET$), mean solar time is $\alpha_{\text{Vega}} - ET$.

Greenwich mean solar time is therefore $\alpha_{\text{Vega}} - ET - \lambda$, using the convention of longitude as positive if east. In order to convert time zones, we must subtract $5\ \text{hr}$. (Note that UTC and GMT are not exactly identical, but they agree to within a second, so the difference is irrelevant here.)

Performing the calculations, with $101^\circ 53' = 6\,\text{hr}\ 47.5\,\text{min}$:

$$18\,\text{hr}\ 37\,\text{min} - 6\,\text{min} + 6\,\text{hr}\ 47.5\,\text{min} - 5\,\text{hr} = 20{:}19\ \text{CDT}$$`,
          rubric: `Official marking scheme (12 points):
- Right ascension of the Sun is 12 hr on September 22nd (equinox): 2 points.
- Local sidereal time at culmination equals α_Vega, so the local (apparent) solar time is α_Vega: 3 points.
- Equation of time applied: mean solar time = α_Vega − ET: 2 points.
- Converted to Greenwich time using the longitude, then to CDT by subtracting 5 hr: 3 points.
- Final answer 20:19 CDT: 2 points.`,
        },
        {
          label: "(b)",
          points: 3,
          prompt: String.raw`Name the two primary factors which contribute to the equation of time, and give a brief one-sentence explanation for why each causes solar time to differ from mean time.`,
          solution: String.raw`The two primary factors are:

- **Eccentricity of the Earth's orbit:** the actual Sun doesn't move across the sky at a constant angular speed relative to the background stars, unlike the mean Sun.
- **Obliquity of the ecliptic:** the actual Sun is on the ecliptic, whereas the mean Sun is on the equator; the angular velocity of the Sun isn't always on and parallel to the equator, which contributes further to non-uniformity of the increase in right ascension.`,
          rubric: `Official marking scheme (3 points): 1.5 points for each factor — 0.5 point for naming the effect (eccentricity of Earth's orbit; obliquity of the ecliptic) and 1 point for a correct explanation of why it makes solar time differ from mean time.`,
        },
      ],
      solutionSource: "OFFICIAL",
      questionPages: [2],
      solutionPages: [4],
    },

    // =====================================================================
    // Medium Questions (65 points)
    // =====================================================================

    // --- M1: Hyperfine splitting ------------------------------------------
    {
      number: "M1",
      title: "Hyperfine splitting",
      section: "Medium Questions",
      topic: "Light & Spectra",
      topics: ["Light & Spectra", "Energy & Stellar Physics"],
      difficulty: "Advanced",
      points: 20,
      text: String.raw`The 21cm spectral line of hydrogen is a result of the interaction between the electron's and proton's quantum mechanical spin (known as hyperfine splitting). The spins can be either aligned or anti-aligned. When a hydrogen atom decays from the higher energy state to the lower energy state, a photon is emitted with energy equal to the energy difference in these two states.

The intrinsic magnetic moment of the electron $\mu_e$ is approximately equal to the Bohr magneton $\mu_B = \dfrac{e\hbar}{2m_e}$, and the intrinsic magnetic moment of the proton $\mu_p$ is roughly $2.8\dfrac{e\hbar}{2m_p}$. Electrons and protons (and any particles with spin $\tfrac{1}{2}$) have permanent magnetic dipole moments $\vec{m}$ with magnitude equal to the intrinsic magnetic moment.`,
      parts: [
        {
          label: "(a)",
          points: 5,
          prompt: String.raw`Consider two classical magnetic dipoles $\vec{m}_1, \vec{m}_2$ separated by a distance $\vec{r} = r\hat{r}$. The magnetic field from a perfect magnetic dipole $\vec{m}$ is

$$\vec{B} = \frac{\mu_0}{4\pi}\,\frac{3\hat{r}(\vec{m}\cdot\hat{r}) - \vec{m}}{r^3}$$

The potential energy of a magnetic dipole in an external magnetic field $\vec{B}$ (e.g. the field created by the other dipole) is $U = -\vec{m}\cdot\vec{B}$.

Using these two formulas together, what is the energy $U_{\text{int}}$ of the interaction between two magnetic dipoles $\vec{m}_1, \vec{m}_2$ separated by a distance $\vec{r} = r\hat{r}$?`,
          solution: String.raw`The interaction energy between the pair of magnetic dipoles is equal to the potential energy of one of the dipoles due to the other dipole's magnetic field. We can write this as

$$U_{\text{int}} = -\vec{m}_1\cdot\vec{B}(\vec{m}_2) = -\vec{m}_1\cdot\frac{\mu_0}{4\pi}\,\frac{3\hat{r}(\vec{m}_2\cdot\hat{r}) - \vec{m}_2}{r^3} = -\frac{\mu_0}{4\pi}\,\frac{3(\vec{m}_1\cdot\hat{r})(\vec{m}_2\cdot\hat{r}) - \vec{m}_1\cdot\vec{m}_2}{r^3}$$

It's good to check — this expression is symmetrical in $\vec{m}_1$ and $\vec{m}_2$, so it didn't matter which of the dipoles we used to do the calculation.`,
          rubric: `Astro Coach marking guide (5 points):
- Writes U_int = −m₁ · B(m₂), using the field of one dipole at the other: 2 points.
- Correct final expression U_int = −(μ₀/4π)[3(m₁·r̂)(m₂·r̂) − m₁·m₂]/r³: 3 points.`,
        },
        {
          label: "(b)",
          points: 6,
          prompt: String.raw`In our case, we can assume that $r$ is the Bohr radius $a_0$, and both $\vec{m}_1$ and $\vec{m}_2$ are oriented perpendicularly to $\vec{r}$. What is the interaction energy $U_{\text{int}}$ between the magnetic moments of the proton and the electron? Write your answer in terms of $\vec{m}_p\cdot\vec{m}_e$.`,
          solution: String.raw`Since $\vec{m}_1$ and $\vec{m}_2$ are perpendicular to $\vec{r}$, the $\vec{m}\cdot\hat{r}$ terms vanish and the expression simplifies dramatically. If we plug in $a_0$ for the radius $r$, then the interaction energy becomes:

$$U_{\text{int}} = \frac{\mu_0}{4\pi a_0^3}\,\vec{m}_p\cdot\vec{m}_e$$`,
          rubric: `Astro Coach marking guide (6 points):
- Recognises that the m·r̂ terms vanish for dipoles perpendicular to r: 2 points.
- Substitutes r = a₀: 1 point.
- U_int = (μ₀/(4πa₀³)) m_p · m_e with the correct (positive) sign: 3 points.`,
        },
        {
          label: "(c)",
          points: 2,
          prompt: String.raw`Which state is the lower energy state: the state where the spins are aligned, or the state where the spins are anti-aligned?`,
          solution: String.raw`$\vec{m}_p\cdot\vec{m}_e$ is positive if the spins are aligned and negative if they are anti-aligned. Since $U_{\text{int}}$ is proportional to $\vec{m}_p\cdot\vec{m}_e$, we can see that the higher energy state has the spins aligned while the **lower energy state has the spins anti-aligned**.`,
          rubric: `Astro Coach marking guide (2 points):
- Anti-aligned is the lower energy state: 1 point.
- Justified from the sign of U_int ∝ m_p · m_e: 1 point.`,
        },
        {
          label: "(d)",
          points: 7,
          prompt: String.raw`The energy of the photon emitted by the transition between these two states is equal to the energy difference in the two states. What value would you predict for the wavelength of the 21cm spectral line? (You should get the right answer to within an order of magnitude, but note that we are treating a quantum mechanical system classically and so there will be large errors.)`,
          solution: String.raw`The magnitude of $\vec{m}$ for the electron or proton is just equal to the intrinsic magnetic moment. This means that the aligned state has interaction energy

$$E_+ = \frac{\mu_0}{4\pi a_0^3}\,\mu_e\mu_p$$

and the anti-aligned state has interaction energy

$$E_- = -\frac{\mu_0}{4\pi a_0^3}\,\mu_e\mu_p$$

The energy of the emitted photon is equal to the energy difference in these two states, which is

$$\Delta E = E_+ - E_- = 2\,\frac{\mu_0}{4\pi a_0^3}\,\mu_e\mu_p = \frac{\mu_0}{4\pi a_0^3}\,\frac{2.8\,(e\hbar)^2}{2m_em_p} = 1.1\times10^{-6}\ \text{eV}$$

The energy of a photon is $E = \dfrac{hc}{\lambda}$, so the corresponding wavelength of this photon is $\lambda \approx 112\ \text{cm}$.

(As it turns out, this is off from the correct value by a factor of exactly $\tfrac{16}{3}$, which can only be explained by quantum mechanics. Specifically, the wavefunctions of the nucleus and electron actually overlap, whereas we assumed they were discrete point particles with a well-defined separation.)`,
          rubric: `Astro Coach marking guide (7 points):
- Energies of the two states, E± = ±(μ₀/(4πa₀³)) μ_e μ_p: 2 points.
- ΔE = 2(μ₀/(4πa₀³)) μ_e μ_p with μ_e = eħ/(2m_e) and μ_p = 2.8 eħ/(2m_p) substituted: 2 points.
- ΔE ≈ 1.1 × 10⁻⁶ eV: 1 point.
- λ = hc/ΔE ≈ 112 cm (any value within an order of magnitude of about 1 m, from correct working): 2 points.`,
        },
      ],
      solutionSource: "OFFICIAL",
      questionPages: [3],
      solutionPages: [5, 6],
    },

    // --- M2: Quantum tunnelling in the Sun's core --------------------------
    {
      number: "M2",
      title: "Quantum Mechanics in Stars",
      section: "Medium Questions",
      topic: "Energy & Stellar Physics",
      topics: ["Energy & Stellar Physics", "Stars & Black Holes"],
      difficulty: "Advanced",
      points: 20,
      text: String.raw`Astrophysics studies both the smallest and largest scales of physics. The latter is one of the main focuses of cosmology. Here, we look into the former — the role of quantum mechanics in the astrophysics of stars. For this problem, assume that the Sun's core has a proton number density of $n_c \approx 6\times10^{31}\ \text{m}^{-3}$ and temperature $T_c \approx 15$ million K.`,
      figures: [
        { key: "tunneling", file: "tunneling.png", caption: "Figure 1: Quantum tunneling.", part: "(c)", sourcePage: 4 },
      ],
      parts: [
        {
          label: "(a)",
          points: 2,
          prompt: String.raw`Suppose that two hydrogen nuclei (protons) are flying towards each other in equal and opposite directions, with an impact parameter (distance of closest approach) of $d \approx 1$ fm. If all of this initial kinetic energy came from the average thermal energy of an ideal gas, what would be the requisite temperature $T_{\text{classical}}$ for "fusion" to occur?`,
          solution: String.raw`Each proton has average thermal kinetic energy $K = \tfrac{3}{2}k_BT$, and at closest approach all of the kinetic energy of both has become Coulomb potential energy:

$$2K = 3k_BT_{\text{classical}} = \frac{e^2}{4\pi\epsilon_0 d}$$

from which $T_{\text{classical}} \approx 5.6\times10^{9}\ \text{K}$ — hundreds of times hotter than the Sun's core.`,
          rubric: `Astro Coach marking guide (2 points):
- Energy conservation 3k_B T = e²/(4πε₀d) (thermal energy of both protons equals the Coulomb energy at d): 1 point.
- T_classical ≈ 5.6 × 10⁹ K: 1 point.`,
        },
        {
          label: "(b)",
          points: 2,
          leadIn: String.raw`In quantum mechanics, particles are described by wavefunctions $\psi$, whose squared norms $|\psi|^2$ govern the probability of finding the particle in a particular state (e.g., having a certain position, momentum, or energy). Particles are said to behave as waves with a wavelength given by the de Broglie wavelength $\lambda = h/p$, where $p$ is the particle's momentum and $h$ is Planck's constant. It's also convenient to define $p = \hbar k$, where $k$ is the wavevector and $\hbar = h/(2\pi)$.`,
          prompt: String.raw`Evaluate the de Broglie wavelength $\lambda_{\text{dB}}$ in fm ($1\ \text{fm} = 10^{-15}$ m) for a proton with the average thermal energy of an ideal gas at the temperature of the Sun's core, $T_c$.`,
          solution: String.raw`We have

$$\frac{3}{2}k_BT_c \approx \frac{(h/\lambda_{\text{dB}})^2}{2m_p} \;\Rightarrow\; \lambda_{\text{dB}} = \frac{h}{\sqrt{3m_pk_BT_c}} \approx 650\ \text{fm}$$`,
          rubric: `Astro Coach marking guide (2 points):
- (3/2)k_B T_c = p²/(2m_p) with p = h/λ: 1 point.
- λ_dB ≈ 650 fm (600–700 fm): 1 point.`,
        },
        {
          label: "(c)",
          points: 2,
          leadIn: String.raw`In Figure 1, we see that it's classically impossible for a nucleus to make it through the potential barrier with $U_0 > E$ (potential energy larger than the total energy). However, quantum mechanics gives a nonzero probability to "tunnel" through the barrier. To solve for $\psi$ in the regions before, inside, and after the barrier, we can use an ansatz $\psi(x) = Ae^{ik(x)x}$, where $A$ is a normalization constant and $k(x) = \sqrt{\dfrac{2m}{\hbar^2}\left(E - V(x)\right)}$.`,
          prompt: String.raw`In which regions of Figure 1 is $k$ purely real? Purely imaginary?

[[figure:tunneling]]`,
          solution: String.raw`Before and after the barrier ($V = 0 < E$) $k$ is purely real; inside the barrier ($V = U_0 > E$) it is purely imaginary.`,
          rubric: `Astro Coach marking guide (2 points):
- k real before and after the barrier: 1 point.
- k imaginary inside the barrier: 1 point.`,
        },
        {
          label: "(d)",
          points: 2,
          prompt: String.raw`Modeling the Sun's main fusion reaction as a single process where two protons and two neutrons combine to form a He-4 nucleus, calculate how much energy is released in a single fusion reaction.`,
          solution: String.raw`The energy released is the mass defect times $c^2$:

$$\Delta m = 2m_p + 2m_n - m_{\text{He}} = 2(1.007276) + 2(1.008665) - 4.001506\ \text{u} = 0.030376\ \text{u} \approx 28.3\ \text{MeV}/c^2$$

so $\Delta E = \Delta m\,c^2 \approx 4.5\times10^{-12}\ \text{J}$ is released per fusion reaction.

Note: the official solution states $\Delta m = 29.7\ \text{MeV}/c^2$ and $\Delta E \approx 4.75\times10^{-12}\ \text{J}$. The binding energy of a He-4 nucleus is 28.3 MeV, so we use that value here; the difference does not change the order-of-magnitude answers in the later parts.`,
          rubric: `Astro Coach marking guide (2 points):
- Uses the mass defect ΔE = (2m_p + 2m_n − m_He)c²: 1 point.
- ΔE ≈ 4.5 × 10⁻¹² J (28 MeV); accept 4.2–4.8 × 10⁻¹² J, including the official 4.75 × 10⁻¹² J: 1 point.`,
        },
        {
          label: "(e)",
          points: 6,
          prompt: String.raw`Not every proton-proton collision results in fusion. Calculate the probability $P_{\text{fusion}}$ of fusion per proton necessary to sustain the Sun's current luminosity. You may assume 1% of the Sun's mass is comprised of protons available for fusion. For this part, treat the fusion reaction as a collision between two protons (i.e. ignore the neutrons). Assume the cross section for collision is given by $\pi\lambda_{\text{dB}}^2$ where $\lambda_{\text{dB}}$ is the de Broglie wavelength corresponding to being in thermal equilibrium at temperature $T_c$.`,
          solution: String.raw`The collision rate per proton is

$$R_c = n_c\,\pi\lambda_{\text{dB}}^2\,v_{\text{RMS}} \approx 5\times10^{13}\ \text{s}^{-1}, \qquad v_{\text{RMS}} = \sqrt{3k_BT_c/m_p}$$

The number of fusion reactions per second needed is $N = L_\odot/\Delta E \approx 8\times10^{37}\ \text{s}^{-1}$ (where $L_\odot$ is the Sun's luminosity). The number of protons available is $0.01M_\odot/m_p \approx 1.2\times10^{55}$, so the fusion rate per proton is

$$\frac{N}{0.01M_\odot/m_p} \approx 7\times10^{-18}\ \text{s}^{-1}$$

Finally, the probability that a collision leads to fusion is

$$P_{\text{fusion}} = \frac{7\times10^{-18}\ \text{s}^{-1}}{5\times10^{13}\ \text{s}^{-1}} \approx 10^{-31}$$`,
          rubric: `Astro Coach marking guide (6 points):
- Collision rate R_c = n_c σ v with σ = πλ_dB² and v = v_RMS = √(3k_B T_c/m_p): 2 points.
- R_c ≈ 5 × 10¹³ s⁻¹: 1 point.
- Required reaction rate N = L_☉/ΔE ≈ 8 × 10³⁷ s⁻¹: 1 point.
- Rate per available proton N/(0.01 M_☉/m_p) ≈ 7 × 10⁻¹⁸ s⁻¹: 1 point.
- P_fusion ≈ 10⁻³¹ (correct order of magnitude): 1 point.`,
        },
        {
          label: "(f)",
          points: 6,
          prompt: String.raw`Consider one proton (moving) in the potential of the other (at rest) in the simplified 1D model of Figure 1. Suppose that $U_0$ is given by the Coulomb repulsion energy of the two protons at a distance $d \approx 1$ fm and that $b$ is the approximate width of the barrier. Here, $b$ is the impact parameter for a proton repelled by the Coulomb force with initial kinetic energy (outside the barrier) equal to the average thermal energy $E$. Assuming the potential energy $V(x) = 0$ outside the barrier, find the temperature $T_{\text{quantum}}$ such that the probability that protons can tunnel through the barrier and fuse is $P_{\text{fusion}}$.`,
          solution: String.raw`Transmission through the barrier goes as $e^{-2\alpha b}$, where $\alpha = \sqrt{\dfrac{2m}{\hbar^2}(U_0 - E)}$ is the imaginary wavevector, $U_0 \approx 2.31\times10^{-13}\ \text{J}$ is given by the Coulomb repulsion energy at $d \approx 1$ fm, $E$ is given by the average thermal kinetic energy, and $b = e^2/(4\pi\epsilon_0 E)$ is the width of the well. Let $P$ denote the probability for fusion. Then,

$$P = \exp\left(-2\sqrt{\frac{2mU_0}{\hbar^2}}\,\frac{e^2}{4\pi\epsilon_0 E}\right)$$

Here, we have made the assumption that $U_0 \gg E$, whose validity we can check after solving. With $P = 10^{-31}$ and $E = \tfrac{3}{2}k_BT$, $T_{\text{quantum}} \approx 80$ million K. Note that $T_{\text{quantum}}/T_{\text{classical}} \approx E/U_0 \approx 0.01$, so our assumption is valid.

Note: a more rigorous solution would model the potential more realistically than a square well, and the physics is more interesting (and realistic) in 3D, where angular momentum and effective potentials become important. Methods such as the WKB approximation integrate over the barrier to derive the transmission coefficient.`,
          rubric: `Astro Coach marking guide (6 points):
- Tunnelling probability P ≈ e^(−2αb) with α = √(2m(U₀ − E))/ħ: 2 points.
- U₀ = e²/(4πε₀d) ≈ 2.3 × 10⁻¹³ J and b = e²/(4πε₀E): 2 points.
- Solves with E = (3/2)k_B T and P = P_fusion to get T_quantum ≈ 8 × 10⁷ K (order 10⁷–10⁸ K): 2 points.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [3, 4],
      solutionPages: [6, 7, 8],
    },

    // --- M3: Into the Wilds -----------------------------------------------
    {
      number: "M3",
      title: "Into the Wilds",
      section: "Medium Questions",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Stars & Black Holes", "Math, Data & Coordinates"],
      difficulty: "Intermediate",
      points: 25,
      text: String.raw`You are an astronaut exploring uncharted parts of space in your trusty spaceship, when suddenly you fall into a magical portal to another universe!

Looking for a way back home, you fly to the nearest solar system. Just like normal solar systems, it is home to several planets in orbit around a star — except with one minor difference: it's miniature! The star is only 4 kilometers in diameter, and the whole solar system could fit within a small country back home on Earth.

You know your astrophysics well enough to know that this should be impossible! The only explanation is that some law of physics works differently in this universe. Since you're still alive, chemistry must be unchanged, so quantum mechanics and electromagnetism must work the same as you're used to. Therefore, the only thing that can be different is gravity.

You decide to do some experiments around the solar system to figure out exactly what is different about gravity here.`,
      parts: [
        {
          label: "(a)",
          points: 10,
          prompt: String.raw`First you measure the orbital periods $t_i$ and orbital semi-major axes $a_i$ of the planets in the solar system. You name the planets $P_1$ through $P_5$, because you are incredibly unoriginal. Your data is as follows:

$$\begin{array}{|c|c|c|}\hline \text{Planet} & a\ (\text{km}) & t\ (\text{minutes}) \\ \hline P_1 & 5.1 & \text{1:51} \\ P_2 & 9.0 & \text{4:10} \\ P_3 & 12.1 & \text{6:38} \\ P_4 & 17.0 & \text{11:02} \\ P_5 & 20.3 & \text{14:46} \\ \hline \end{array}$$

Based on this data, do you think that gravity here follows an inverse square law? Justify your answer with calculations and/or drawing an appropriate plot. (You needn't be too formal with statistics here, any well-reasoned argument will get full credit.)`,
          solution: String.raw`If gravity follows an inverse square law, then Kepler's third law should hold. This means that $t^2/a^3$ should be a constant for objects orbiting around the same mass. Converting the times to minutes (e.g. $1{:}51 = 1.85$ min):

$$\begin{array}{|c|c|c|c|}\hline \text{Planet} & a\ (\text{km}) & t\ (\text{minutes}) & t^2/a^3\ (10^{-2}\ \text{min}^2\,\text{km}^{-3}) \\ \hline P_1 & 5.1 & \text{1:51} & 2.58 \\ P_2 & 9.0 & \text{4:10} & 2.38 \\ P_3 & 12.1 & \text{6:38} & 2.48 \\ P_4 & 17.0 & \text{11:02} & 2.48 \\ P_5 & 20.3 & \text{14:46} & 2.61 \\ \hline \end{array}$$

The mean value is $t^2/a^3 \approx 2.51\times10^{-2}\ \text{min}^2\,\text{km}^{-3}$. The standard deviation of these values is about $0.09\times10^{-2}\ \text{min}^2\,\text{km}^{-3}$, which is comparatively small and probably just the result of random measurement errors. This means that the data supports $t^2/a^3$ being constant, which implies that **gravity follows an inverse square law**.

Alternative solution: if Kepler's 3rd law is true, then plotting $\log t$ against $\log a$ should give a straight line with a slope of $\tfrac{3}{2}$. You can just draw the graph and show it visually; a linear fit gives a slope of $1.50$, in agreement with the expected value.

Note: the official solution's table lists $a = 20.4$ km for $P_5$ (giving 2.57); with the paper's value of 20.3 km the ratio is 2.61. The conclusion is the same.`,
          rubric: `Astro Coach marking guide (10 points):
- States that an inverse-square law implies Kepler's third law, t² ∝ a³ (or a log–log slope of 3/2): 3 points.
- Correctly computes t²/a³ for the planets (times converted from min:s correctly), or makes a correct log–log plot/fit: 4 points.
- Concludes, with reasoning about the small scatter, that the data is consistent with an inverse-square law: 3 points.`,
        },
        {
          label: "(b)",
          points: 3,
          prompt: String.raw`If the mass of the star is $M$ and the gravitational constant in this universe is $G'$, then what is $G'M$?`,
          solution: String.raw`From Kepler's third law, we can write

$$\frac{t^2}{a^3} = \frac{4\pi^2}{G'M}$$

In the previous part, we found $t^2/a^3 \approx 2.5\times10^{-2}\ \text{min}^2\,\text{km}^{-3}$. Converting units ($1\ \text{min}^2 = 3600\ \text{s}^2$, $1\ \text{km}^3 = 10^9\ \text{m}^3$):

$$G'M = 4\pi^2\,\frac{a^3}{t^2} \approx 4.4\times10^{8}\ \text{m}^3\,\text{s}^{-2}$$`,
          rubric: `Astro Coach marking guide (3 points):
- Kepler's third law t²/a³ = 4π²/(G'M): 1 point.
- Correct unit conversion to SI: 1 point.
- G'M ≈ 4.4 × 10⁸ m³ s⁻² (4.2–4.6 × 10⁸): 1 point.`,
        },
        {
          label: "(c)",
          points: 5,
          leadIn: String.raw`This is a good start! Unfortunately, without a known mass, you can't determine the gravitational constant $G'$. You decide to give the planets a closer look to see what else you can find out. You'll start from the outermost and work your way in.`,
          prompt: String.raw`After narrowly escaping being eaten by $P_5$'s local fauna, you penetrate the stormy atmosphere of $P_4$ to find that it's made almost entirely of water ($\rho = 997\ \text{kg/m}^3$) with a radius of 500 m. While standing in your ship floating on the water's surface, you experience a heavy gravitational pull — 2 times what you're used to on Earth.

What is the gravitational constant in this universe?`,
          solution: String.raw`The mass of $P_4$ is just

$$m = \frac{4}{3}\pi r^3\rho = 5.22\times10^{11}\ \text{kg}$$

The gravitational acceleration at the surface is $a = \dfrac{G'm}{r^2}$. We can invert this to solve for $G'$: $G' = \dfrac{ar^2}{m}$. The measured gravitational acceleration is $a = 2\,(9.81\ \text{m/s}^2)$. This means that

$$G' = 9.4\times10^{-6}\ \text{m}^3\,\text{kg}^{-1}\,\text{s}^{-2}$$

— about $10^5$ times stronger than gravity in our universe.`,
          rubric: `Astro Coach marking guide (5 points):
- Mass of P₄ from its volume and density, m ≈ 5.22 × 10¹¹ kg: 2 points.
- Surface gravity a = G'm/r²: 1 point.
- Uses a = 2 × 9.81 m/s²: 1 point.
- G' ≈ 9.4 × 10⁻⁶ m³ kg⁻¹ s⁻²: 1 point.`,
        },
        {
          label: "(d)",
          points: 2,
          prompt: String.raw`What is the mass of this solar system's star?`,
          solution: String.raw`We found $G'M$ and now we have $G'$, so calculating $M$ is straightforward:

$$M = \frac{G'M}{G'} = 4.7\times10^{13}\ \text{kg}$$`,
          rubric: `Astro Coach marking guide (2 points):
- M = (G'M)/G': 1 point.
- M ≈ 4.7 × 10¹³ kg (consistent with the student's earlier values): 1 point.`,
        },
        {
          label: "(e)",
          points: 5,
          prompt: String.raw`You notice that this star looks yellowish-orange, suggesting its surface temperature is a little lower than that of the Sun. Taking a spectrum, you measure that this star's spectral radiance peaks at a wavelength of 916 nm.

The lifetime of a star can be roughly estimated based on its luminosity and the mass of fuel it has available to burn*. Use a simple scaling argument to roughly estimate the lifetime of this solar system's sun. Explain your reasoning.

(Hint: use our Sun's lifetime of $10^{10}$ years as a reference point.)

*A more careful calculation shows that the temperature at the core of the star wouldn't actually be enough to ignite fusion, so nuclear physics must work differently here in order for fusion to be possible. Let's ignore that for the sake of this question, though.`,
          solution: String.raw`Note that you can't use empirically derived scaling relations for the lifetime of a star (e.g. $T \propto M^{-2.5}$) since $G'$ is different!

The scaling argument just comes from conservation of energy: a star's life ends when it burns through all its fuel, and the rate of burning fuel is proportional to its luminosity. Therefore a star's lifetime scales roughly as its mass divided by its luminosity.

For this star, we can calculate the luminosity using Wien's law and the Stefan–Boltzmann law, with $r = 2$ km:

$$T = \frac{2898\ \mu\text{m K}}{916\ \text{nm}} \approx 3160\ \text{K}, \qquad L_{\text{star}} = 4\pi r^2\sigma T^4 \approx 2.9\times10^{14}\ \text{W}$$

So the lifetime is

$$T_{\text{star}} = T_\odot\,\frac{M_{\text{star}}}{M_\odot}\,\frac{L_\odot}{L_{\text{star}}} \approx 10^{10}\ \text{yr}\times\frac{4.7\times10^{13}}{2.0\times10^{30}}\times\frac{3.8\times10^{26}}{2.9\times10^{14}} \approx 3\times10^{5}\ \text{years}$$

Any answer around this value is fine due to rounding.

Note: the official solution quotes $L_{\text{star}} \approx 3.23\times10^{14}$ W; the given numbers give $2.9\times10^{14}$ W. Either way the lifetime is about $3\times10^5$ years.

(Most data from this problem was taken from the 2019 video game Outer Wilds.)`,
          rubric: `Astro Coach marking guide (5 points):
- Lifetime ∝ fuel/luminosity ∝ M/L, compared with the Sun (not an empirical mass–lifetime relation): 2 points.
- Surface temperature from Wien's law, T ≈ 3160 K: 1 point.
- Luminosity L = 4πr²σT⁴ ≈ 3 × 10¹⁴ W with r = 2 km: 1 point.
- Lifetime ≈ 3 × 10⁵ years (accept 1 × 10⁵ to 1 × 10⁶ years): 1 point.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [4, 5],
      solutionPages: [8, 9, 10],
    },

    // =====================================================================
    // Long Questions (140 points)
    // =====================================================================

    // --- L1: The Sundial II (points printed only for groups of parts) ------
    {
      number: "L1",
      title: "The Sundial II",
      section: "Long Questions",
      topic: "Math, Data & Coordinates",
      topics: ["Math, Data & Coordinates", "Solar System"],
      difficulty: "Advanced",
      points: 45,
      text: String.raw`After gaining an understanding of a sundial, and how the path of the shadow is a straight line on the equinoxes running from due West to due East, Leo now wants to create his own.

At 6am on March 20th, as the Sun is rising, Leo, who is at $(40^\circ\text{N}, 75^\circ\text{W})$, plants a (straight) stick vertically on the ground. At that moment, he marks out a (finite) line on the ground in the direction of the shadow of the stick at that moment, labeling it with the current time. Every hour afterwards, on the hour, he marks out a new line in the current direction of the shadow.`,
      figures: [
        {
          key: "sundial-solution-ab",
          file: "sundial-solution-ab.png",
          caption: "The Sun's path on the equinox, with the hour points used in parts (a) and (b).",
          kind: "SOLUTION",
          part: "(a)–(b)",
          sourcePage: 12,
        },
        {
          key: "sundial-solution-altaz",
          file: "sundial-solution-altaz.png",
          caption: "Spherical triangles used to find the Sun's altitude h and azimuth a at time T.",
          kind: "SOLUTION",
          part: "(c)–(g)",
          sourcePage: 14,
        },
      ],
      parts: [
        {
          label: "(a)–(b)",
          points: 10,
          leadIn: "For the following two parts, either show a calculation or explain your answer for credit. Calculating specific values is not necessary, but may help with later parts.",
          prompt: String.raw`**(a)** Is the angle between the lines corresponding to 12pm and 1pm greater than, equal to, or less than $15^\circ$?

**(b)** Is the angle between the lines corresponding to 5pm and 6pm greater than, equal to, or less than $15^\circ$?`,
          solution: String.raw`The first important observation to make is, because the stick is vertical and perpendicular to the ground, the line of the shadow points in a direction directly opposite the azimuth of the Sun at that moment. Therefore, we can compare angles between lines by comparing changes in azimuth of the Sun between two times.

As March 20th is the spring equinox (which can also be deduced as the problem mentions the Sun rising at 6am and setting at 6pm), the Sun travels along a great circle in the sky at a constant rate of $15^\circ$ per hour. As $75^\circ$W is at the centre of the UTC$-5$ time zone, solar time corresponds with local time, so the Sun is on the meridian at 12pm and on the horizon due west at 6pm. Let $C_{12}, C_1, C_5, C_6$ be the Sun's positions at 12pm, 1pm, 5pm, 6pm, and extend the arcs from the zenith $Z$ through them to meet the horizon at $H_{12} = S$, $H_1$, $H_5$, $H_6 = C_6 = W$. The angle between the 12pm and 1pm lines is the arc $H_{12}H_1 = \theta_1$, and the angle between the 5pm and 6pm lines is the arc $H_5H_6 = \theta_2$ (these equal the corresponding angles at $Z$).

[[figure:sundial-solution-ab]]

**(a)** Consider the triangle $ZC_{12}C_1$. As $\angle ZC_{12}C_1 = 90^\circ$, by the spherical law of sines:

$$\frac{\sin\theta_1}{\sin 15^\circ} = \frac{\sin 90^\circ}{\sin ZC_1}$$

But as $\sin 90^\circ = 1$ and $ZC_1 < 90^\circ$, the right-hand side is greater than 1 and therefore $\theta_1 > 15^\circ$: **greater than** $15^\circ$.

**(b)** Consider the triangle $C_5H_5W$. As $\angle C_5H_5W = 90^\circ$, by the spherical law of cosines:

$$\cos C_5H_5\,\cos\theta_2 = \cos 15^\circ$$

But as $\cos C_5H_5 < 1$, we have $\cos\theta_2 > \cos 15^\circ$ and therefore $\theta_2 < 15^\circ$: **less than** $15^\circ$.

Many other solutions using other spherical triangles are possible.`,
          rubric: `Astro Coach marking guide (10 points):
- Shadow line points opposite the Sun's azimuth, so the angle between lines equals the change in the Sun's azimuth: 2 points.
- On the equinox the Sun moves along the celestial equator at 15° per hour, due south at 12pm and due west at 6pm: 2 points.
- (a) Valid calculation or spherical-geometry argument: 2 points; correct answer "greater than 15°": 1 point.
- (b) Valid calculation or spherical-geometry argument: 2 points; correct answer "less than 15°": 1 point.
(No credit for an answer without justification.)`,
        },
        {
          label: "(c)–(g)",
          points: 35,
          leadIn: String.raw`At 6pm, after drawing his last line, the sun sets. Leo starts cleaning up his setup, taking down the stick. To check his calculations against experiment, Leo measures the angles between pairs of lines on the ground. Using a very precise protractor, he gets the following values (rolling sums are also provided):

$$\begin{array}{|c|c|c|}\hline \text{Lines} & \text{Angle (degrees)} & \text{From 6am (degrees)} \\ \hline \text{6am-7am} & 9.00570 & 9.00570 \\ \text{7am-8am} & 9.48468 & 18.49038 \\ \text{8am-9am} & 10.90026 & 29.39064 \\ \text{9am-10am} & 13.56767 & 42.95832 \\ \text{10am-11am} & 17.77405 & 60.73237 \\ \text{11am-12pm} & 22.66646 & 83.39883 \\ \text{12pm-1pm} & 24.81144 & 108.21027 \\ \text{1pm-2pm} & 21.90336 & 130.11363 \\ \text{2pm-3pm} & 16.95555 & 147.06918 \\ \text{3pm-4pm} & 13.00713 & 160.07630 \\ \text{4pm-5pm} & 10.58101 & 170.65731 \\ \text{5pm-6pm} & 9.34269 & 180.00000 \\ \hline \end{array}$$

Notably, he finds that they deviate from the values he expects! After frantically checking his calculations and measurements and finding no discrepancies, Leo suspects that the stick might have been slightly tilted. Unfortunately, he took down the stick already, and so can no longer measure it directly.

To help Leo out, we'd like to reconstruct the parameters of the stick tilt. As you work through the following parts, keep in mind this overall goal; it may help to think through all the steps first before proceeding. Ignore atmospheric refraction and the equation of time.`,
          prompt: String.raw`**(c)** To start, define a 2-D coordinate system for the ground, where the $x$-axis points due North and the $y$-axis points due East. Choose and clearly indicate an appropriate origin.

**(d)** Choose a specific time during the day when the Sun is above the horizon. In your coordinate system, compute the coordinates of the tip of the shadow. Clearly indicate the chosen time and any assumptions made, and justify assumptions if they are not general.

**(e)** From these coordinates and other information, find a condition on the location of the other end of the stick. Provide your answer as a linear equation in the form $y = mx + b$ for some $m, b$.

**(f)** Determine more conditions as necessary, and solve to find the coordinates of the other end of the stick.

**(g)** Determine the angle, from the vertical, that the stick was tilted, and in what direction.

Depending on method chosen, points on subparts may vary. **Due to small values involved, it is recommended to carry calculations to at least 4 decimal places. Answers to the final part will be integers. No credit given for guesses without justification.**`,
          solution: String.raw`There are two similar ways to solve this, depending on the choice of origin: the tip of the stick or the base of the stick. We follow the "tip of stick" method; the "base of stick" method is summarised at the end and gives the same answer.

**(c)** Drop a perpendicular from the tip of the stick to the ground, and set the point directly below the tip of the stick to be the origin. While this seems contrived, the position of the tip of the shadow depends only on the position of the tip of the stick and the Sun, so we can directly write down the coordinates of shadow tips.

**(d)** Let $h_0$ be the height of the tip of the stick above the ground. The problem is invariant under rescaling (no lengths are given, and $h_0$ divides out at the end), so we carry $h_0$ through.

First compute the altitude and azimuth of the Sun at a time $T$ hours after noon, $T \in (-6, 6)$. Let $C$ be the Sun's position on the celestial equator and $E$ the east point. As the Sun moves $15^\circ$ per hour, $EC = 15^\circ(T+6)$, and $\angle ZEC = \phi$ (the latitude), with $ZE = 90^\circ$. The spherical law of cosines in triangle $ZEC$ gives

$$\cos ZC = \cos EZ\cos EC + \sin EZ\sin EC\cos\angle ZEC, \qquad h = 90^\circ - ZC$$

For the azimuth, extend $ZC$ to meet the horizon at $H$. As $\angle CHE$ is right, $\cos EC = \cos CH\cos EH$, so

$$\cos EH = \frac{\cos 15^\circ(T+6)}{\cos h}, \qquad a = 90^\circ + EH$$

[[figure:sundial-solution-altaz]]

Any hour with the Sun above the horizon works. For $T = 1$ (1pm): $(h, a) = (47.72648^\circ, 202.62906^\circ)$.

With the $x$-axis north and the $y$-axis east, azimuths are angles measured from the $x$-axis towards the $y$-axis. A shadow of length $h_0/\tan h$ points away from the Sun, so the shadow tip is at

$$-\frac{h_0}{\tan h}(\cos a, \sin a) = (0.83910,\ 0.34978)\,h_0$$

This holds wherever the base of the stick is, because it depends only on the tip.

**(e)** The real shadow is a straight line on the ground through the base of the stick and the shadow tip, at the angle given by the data. The 6am line points due west, so a line measured $\theta$ from the 6am line has slope $m = \tan(\theta - 90^\circ)$. At 1pm, $\theta = 108.21027^\circ$, and substituting the shadow tip $(x_0, y_0)$ gives $b = y_0 - mx_0$:

$$y = 0.32898\,x + 0.07373\,h_0$$

The base of the stick lies on this line.

**(f)** We need a second condition. At noon ($T = 0$) the Sun is due south on the celestial equator, so $(h, a) = (90^\circ - \phi, 180^\circ)$ and the shadow tip is at $(0.83910, 0)\,h_0$. (The $x$-coordinate is the same as at 1pm: on the equinoxes the shadow tips trace a straight west–east line.) The noon line has $\theta = 83.39883^\circ$, so

$$y = -0.11572\,x + 0.09710\,h_0$$

Solving the two linear equations gives the base of the stick:

$$(x, y) = (0.05255,\ 0.09102)\,h_0$$

**(g)** The vector from the base to the tip is $(-0.05255, -0.09102)\,h_0$: towards the south ($-x$) and west ($-y$). Its azimuth is $240^\circ$. The horizontal offset is

$$\sqrt{(0.05255h_0)^2 + (0.09102h_0)^2} = 0.10510\,h_0$$

and since $h_0$ is the vertical height of the tip, the tilt from the vertical is

$$\tan^{-1}\left(\frac{0.10510\,h_0}{h_0}\right) = 6^\circ$$

The stick was tilted **$6^\circ$ from the vertical, leaning towards azimuth $240^\circ$** (south-west, $60^\circ$ west of south).

*Base of stick method:* put the origin at the base. Each measured shadow runs from the origin at the measured angle, and because the shadow tips all have the same $x$-coordinate on the equinox, one shadow length $l_0$ fixes the others. An ideal vertical stick with the same tip would cast shadows at the Sun's computed azimuths through the same shadow tips; they meet at the ideal base, directly below the tip. This gives the tip at $(-0.06347, -0.10993)\,l_0$ and height $1.20770\,l_0$, and again a tilt of $6^\circ$ towards azimuth $240^\circ$.`,
          rubric: `Astro Coach marking guide (35 points; the official solution notes points may shift between sub-parts depending on the method, e.g. origin at the tip or at the base of the stick — award equivalent credit for an equivalent correct method):
- (c) A clearly defined, sensible origin (e.g. the point below the stick's tip, or the stick's base) with the given axes: 3 points.
- (d) Correct altitude and azimuth of the Sun at the chosen time (e.g. 1pm: h ≈ 47.726°, a ≈ 202.629°): 8 points.
- (d) Correct shadow-tip (or shadow) coordinates at that time, e.g. (0.8391, 0.3498)h₀, with the unknown scale handled: 4 points.
- (e) Line through the base with slope from the measured angle, in the form y = mx + b (e.g. m ≈ 0.32898, b ≈ 0.07373h₀): 6 points.
- (f) A valid second condition (e.g. the noon shadow, or the constant x-coordinate of shadow tips on the equinox) and a correct solution for the stick's other end (e.g. (0.05255, 0.09102)h₀): 8 points.
- (g) Tilt of 6° from the vertical: 3 points.
- (g) Direction: leaning towards azimuth 240° (south-west): 3 points.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [5, 6, 7],
      solutionPages: [10, 11, 12, 13, 14, 15, 16, 17, 18],
    },

    // --- L2: An interstellar comet ------------------------------------------
    {
      number: "L2",
      title: "Scratcher Crab",
      section: "Long Questions",
      topic: "Gravity & Orbits",
      topics: ["Gravity & Orbits", "Math, Data & Coordinates"],
      difficulty: "Advanced",
      points: 40,
      text: String.raw`A new interstellar comet is about to enter the solar system, and Erez is really excited to calculate some Keplerian elements on its approach and figure out where it's going! The comet, dubbed Scratcher Crab by the astronomical community (for no particular reason), is approaching the solar system with a velocity of $29.8\ \text{km/s}$ from the direction of Altair, which has equatorial coordinates $\alpha = 19^\text{h}51^\text{m}$, $\delta = 8^\circ 51'$. If the comet were to continue traveling in a straight line with its current velocity, its closest approach to the sun would be at a distance of 1 au, and on March 21st, the comet would briefly be in superior conjunction.

For reference, here is a diagram of orbital elements. Note that the longitude of the ascending node is measured from Aries and the argument of the periapsis is measured from the ascending node:

[[figure:orbital-elements]]`,
      figures: [
        { key: "orbital-elements", file: "orbital-elements.png", caption: "Orbital elements.", sourcePage: 7 },
      ],
      parts: [
        {
          label: "(a)",
          points: 6,
          prompt: "What are the eccentricity and semi-major axis of the orbit?",
          solution: String.raw`Here the convention $a < 0$ for hyperbolas is used, but both signs are accepted (the choice of sign changes signs in formulae involving $a$).

Use the vis-viva equation to get the specific orbital energy, evaluated far away where the speed is $v = 29.8$ km/s:

$$\varepsilon = \frac{v^2}{2} - \frac{\mu}{r} = \frac{v^2}{2} = -\frac{\mu}{2a} \;\Longrightarrow\; a = -\frac{\mu}{v^2} = -1.495\times10^{11}\ \text{m}$$

The impact parameter equals the semi-minor axis, $b = 1\ \text{au} = 1.496\times10^{11}$ m. Using conic relations (with the hyperbola sign conventions):

$$p = -\frac{b^2}{a}, \qquad e = \sqrt{1 - \frac{p}{a}} = \sqrt{1 + \frac{b^2}{a^2}} = 1.415$$

Alternatively, note that the problem is set up so that $p = b = -a$, giving $e \approx \sqrt{2}$ immediately. ($\sqrt{2}$, 1.41 and 1.42 are all correct.)`,
          rubric: `Astro Coach marking guide (6 points):
- Semi-major axis from the orbital energy, a = −μ/v∞²: 2 points.
- |a| ≈ 1.49–1.50 × 10¹¹ m (either sign accepted): 1 point.
- Uses impact parameter = semi-minor axis b = 1 au with a correct conic relation for e: 2 points.
- e ≈ 1.41 (√2, 1.41 or 1.42): 1 point.`,
        },
        {
          label: "(b)",
          points: 6,
          prompt: "What are the inclination of the orbit and the longitude of the ascending node, both measured with reference to the equatorial plane (not the ecliptic)?",
          solution: String.raw`Orbits are planar, so the orbit lies in the unique plane that contains both the Sun and the straight-line trajectory described in the problem. On March 21st the straight-line comet is behind the Sun (at Aries, since this is the equinox), so at some moment on the straight-line trajectory the comet has equatorial coordinates $(0, 0)$. Thus the orbit lies in the plane through the origin, Altair, and Aries.

First, this means that the descending node is at Aries, i.e. the **longitude of the ascending node is exactly** $\Omega = 180^\circ$.

Second, we can find the inclination by the four-parts formula on the spherical triangle with Altair, Aries, and the projection of Altair onto the equatorial plane:

$$\cos 90^\circ\cos(-\alpha) = \sin(-\alpha)\cot\delta - \sin 90^\circ\cot i$$

$$i = \cot^{-1}\left(-\cot\delta\,\sin\alpha\right) = 9.98^\circ$$`,
          rubric: `Astro Coach marking guide (6 points):
- Recognises that the orbital plane contains the Sun, Altair and Aries (superior conjunction on the equinox): 2 points.
- Longitude of the ascending node Ω = 180°: 2 points.
- Inclination i ≈ 9.98° from correct spherical trigonometry: 2 points.`,
        },
        {
          label: "(c)",
          points: 6,
          prompt: "What is the angular distance between the incoming and outgoing trajectories of the comet?",
          solution: String.raw`We can use the polar equation of a conic:

$$r = \frac{p}{1 + e\cos(\phi - \phi_0)}$$

We seek the asymptotes of the hyperbola, so $1 + e\cos(\phi - \phi_0) = 0$:

$$\phi = \phi_0 \pm \arccos\left(\frac{-1}{e}\right) = \phi_0 \pm 135^\circ, \qquad \Delta\phi = 270^\circ$$

An answer of $90^\circ$ is also acceptable. Alternatively, a rectangular hyperbola has eccentricity $\sqrt{2}$, which is the eccentricity of this hyperbola, so the angle is immediately $90^\circ$.`,
          rubric: `Astro Coach marking guide (6 points):
- Asymptote condition 1 + e cos(φ − φ₀) = 0 (or the rectangular-hyperbola argument): 3 points.
- Angle between trajectories 270° (or equivalently 90°): 3 points.`,
        },
        {
          label: "(d)",
          points: 6,
          prompt: "What is the argument of the periapsis?",
          solution: String.raw`From part (c), the argument of the periapsis is the argument of the incoming trajectory (the argument of Altair) plus $135^\circ$. The argument is measured from the ascending node, which is at $\alpha = 180^\circ$, so find the great-circle distance from $(180^\circ, 0)$ to Altair with the law of cosines:

$$\cos\omega_{\text{in}} = \cos(90^\circ - 0)\cos(90^\circ - \delta) + \sin(90^\circ - 0)\sin(90^\circ - \delta)\cos(180^\circ - \alpha)$$

$$\omega_{\text{in}} = \arccos\left(\cos\delta\cos(180^\circ - \alpha)\right) = 117^\circ$$

So the argument of the periapsis is $\omega = 117^\circ + 135^\circ = 252^\circ$. It is easy to measure from the wrong point and get $180^\circ \pm 252^\circ$ or even $197^\circ$; these errors propagate to the next part as well.`,
          rubric: `Astro Coach marking guide (6 points):
- Arc from the ascending node (α = 180°) to Altair, ω_in ≈ 117°: 3 points.
- ω = ω_in + 135° ≈ 252°: 3 points.`,
        },
        {
          label: "(e)",
          points: 6,
          prompt: "What are the exit coordinates of the comet (in equatorial coordinates)?",
          solution: String.raw`From part (c) again, the argument of the exit point $X$ is $\omega_X = 117^\circ + 270^\circ = 387^\circ > 360^\circ$, i.e. $27^\circ$ past the ascending node, so the exit point is in the northern hemisphere. Use the law of sines on the spherical triangle with the ascending node, the exit point, and the projection of the exit point onto the equatorial plane:

$$\frac{\sin\delta_X}{\sin i} = \frac{\sin\omega_X}{\sin 90^\circ} \;\Longrightarrow\; \delta_X = \arcsin(\sin\omega_X\sin i) = 4^\circ 34'$$

And the law of cosines on the same triangle:

$$\cos\omega_X = \cos(\alpha_X - 180^\circ)\cos\delta_X \;\Longrightarrow\; \alpha_X = 12^\text{h} + \arccos\frac{\cos\omega_X}{\cos\delta_X} = 13^\text{h}48^\text{m}$$

(The official solution writes $\alpha_X - 128$ in the law of cosines; it should be $\alpha_X - 180^\circ$, as used here.)`,
          rubric: `Astro Coach marking guide (6 points):
- Exit direction at argument ω_X ≈ 27° (387°) from the ascending node: 1 point.
- Declination δ_X ≈ 4°34′: 2 points.
- Right ascension α_X ≈ 13h48m: 3 points.`,
        },
        {
          label: "(f)",
          points: 10,
          prompt: String.raw`Erez wants to check his calculations by making some observations when the comet crosses the plane of the ecliptic. At this time, what is the proper motion of the comet in the sun's frame of reference (not the Earth's)? Give your answer in its equatorial components $\mu_\alpha, \mu_\delta$.`,
          solution: String.raw`The orbit crosses the ecliptic along the line through the Sun and Aries — the same line as its equatorial nodes — and the comet crosses it at the descending node. Use the conic polar equation to get the orbital distance at the descending node:

$$r_{\text{desc}} = \frac{p}{1 + e\cos(180^\circ - \omega)} = 1.048\times10^{11}\ \text{m}$$

The velocity perpendicular to the radius follows from conservation of angular momentum:

$$v_{\perp,\text{desc}}\,r_{\text{desc}} = v_\infty b \;\Longrightarrow\; v_{\perp,\text{desc}} = \frac{v_\infty b}{r_{\text{desc}}} = 42500\ \text{m/s}$$

So the proper motion (angular velocity) is

$$|\vec{\mu}| = \frac{v_{\perp,\text{desc}}}{r_{\text{desc}}} = 4.06\times10^{-7}\ \text{rad/s}$$

At the descending node the direction of motion makes the angle $i$ with the equator, heading south:

$$\mu_\alpha = |\vec{\mu}|\cos i = 4.00\times10^{-7}\ \text{rad/s} = 0.082''/\text{s}$$

$$\mu_\delta = -|\vec{\mu}|\sin i = -7.03\times10^{-8}\ \text{rad/s} = -0.015''/\text{s}$$

(The official solution prints $|\vec{\mu}| = 4.059$ rad/s; the factor $10^{-7}$ is missing there.)`,
          rubric: `Astro Coach marking guide (10 points):
- Ecliptic crossing identified as the node through Aries (descending node) and its distance from the conic equation, r ≈ 1.05 × 10¹¹ m: 3 points.
- Perpendicular velocity from angular momentum, v⊥ = v∞b/r ≈ 4.25 × 10⁴ m/s: 3 points.
- Angular speed |μ| = v⊥/r ≈ 4.06 × 10⁻⁷ rad/s: 2 points.
- Components μ_α ≈ +4.00 × 10⁻⁷ rad/s (0.082″/s) and μ_δ ≈ −7.0 × 10⁻⁸ rad/s (−0.015″/s), with correct signs: 2 points.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [7],
      solutionPages: [18, 19, 20],
    },

    // --- L3: Finding Friends ------------------------------------------------
    {
      number: "L3",
      title: "Finding Friends",
      section: "Long Questions",
      topic: "Math, Data & Coordinates",
      difficulty: "Advanced",
      points: 55,
      text: String.raw`In the future, Earth is perfectly spherical and completely covered with water. Sailor Andrew is on a boat initially positioned at the equator in such a way that $\gamma$, the vernal equinox, is directly overhead. He observes a star $\chi$ with right ascension and declination $(\alpha, \delta) = (15^\circ, 10^\circ)$. He wants to chase $\chi$, and he needs your help.

**You may assume the following numerical values for each constant:**

- $R_\oplus$ is Earth's radius (same as the current day value).
- $\omega = 2\pi/(24\ \text{hrs})$ is Earth's angular frequency.
- His boat is very fast; its maximum speed is $|v| = \omega R_\oplus/4$.
- The vernal equinox $\gamma$ has celestial coordinates $(0^\circ, 0^\circ)$.
- $(\alpha, \delta) = (15^\circ, 10^\circ)$.`,
      figures: [
        {
          key: "friends-solution-e",
          file: "friends-solution-e.png",
          caption: "Andrew's position D when χ crosses his east–west meridian; the red curve is his path on the celestial sphere.",
          kind: "SOLUTION",
          part: "(e)",
          sourcePage: 23,
        },
      ],
      parts: [
        {
          label: "(a)",
          points: 2,
          prompt: String.raw`Calculate the angular distance between $\gamma$ and $\chi$. Express your answer in degrees.`,
          solution: String.raw`Let $N$ be the north celestial pole and $d$ the desired distance. The spherical law of cosines in $\triangle N\gamma\chi$ gives

$$\cos d = \cos 90^\circ\cos(90^\circ - \delta) + \sin 90^\circ\sin(90^\circ - \delta)\cos\alpha$$

which implies $d = \arccos(\cos\delta\cos\alpha) \approx 17.96^\circ$.`,
          rubric: `Astro Coach marking guide (2 points):
- Spherical law of cosines giving cos d = cos δ cos α: 1 point.
- d ≈ 17.96°: 1 point.`,
        },
        {
          label: "(b)",
          points: 2,
          leadIn: String.raw`In his starting position, $\chi$ is somewhere above his horizon. As he sails to different parts of the planet and time passes, $\chi$ moves around his night sky. He wants to sail his boat in order to get $\chi$ as close to his zenith as possible. To make sure he is as efficient as possible, he wants to make a few calculations first.`,
          prompt: String.raw`If he does not move his boat from his starting position, calculate the minimum zenith distance that $\chi$ reaches. Express your answer in degrees.

Note: zenith distance is defined as the angular distance to the zenith.`,
          solution: String.raw`Since $\chi$ is to his east, it has not yet culminated. Also, since he is not moving, $\chi$ achieves its minimum zenith distance as it culminates.

$\chi$ moves along the small circle of declination $\delta$. Since he is located on the equator, the celestial equator passes through his zenith. Therefore, the minimum zenith distance is the distance between the declination circle at $\delta$ and the celestial equator, which is $\delta = 10^\circ$.

Alternatively: culmination occurs when his location and $\chi$ have the same right ascension. At this point their distance is $\delta$, so this is the minimum zenith distance.`,
          rubric: `Astro Coach marking guide (2 points):
- Minimum at culmination, with the celestial equator through his zenith (or equal right ascensions): 1 point.
- 10°: 1 point.`,
        },
        {
          label: "(c)",
          points: 3,
          leadIn: "Now, he considers what would happen if he sails straight north at all times.",
          prompt: String.raw`Starting from his initial position when $\gamma$ is overhead, he directs his boat straight north and starts sailing with speed $|v|$. Does $\chi$ first cross his north-south meridian or east-west meridian? Briefly explain why this is the case.`,
          solution: String.raw`$\chi$ starts in the north-eastern quadrant of the sky. When $\chi$ crosses the north-south meridian, it changes from the east to the west hemisphere. When $\chi$ crosses the east-west meridian, it changes from the north to the south hemisphere.

At time $t$, his location on the celestial sphere is $(\omega t, \omega t/4)$, so $(\alpha, \alpha/4)$ is a point on his trajectory. Since $\alpha/4 < \delta$, $\chi$ culminates in his northern sky. Thus, $\chi$ **crosses the north-south meridian first**, before the east-west meridian.`,
          rubric: `Astro Coach marking guide (3 points):
- North-south meridian first: 1 point.
- Explanation: his zenith moves as (ωt, ωt/4), so when the right ascensions match his declination α/4 is still less than δ and χ culminates north of the zenith: 2 points.`,
        },
        {
          label: "(d)",
          points: 3,
          prompt: String.raw`Calculate the zenith distance of $\chi$ when it first crosses his north-south meridian. Express your answer in degrees.`,
          solution: String.raw`$\chi$ culminates when it has the same right ascension as Andrew, so $\omega t = \alpha$. His declination is then $\alpha/4$, so the zenith distance is

$$\delta - \frac{\alpha}{4} \approx 6.25^\circ$$`,
          rubric: `Astro Coach marking guide (3 points):
- Culmination when ωt = α, with his declination α/4: 2 points.
- Zenith distance 6.25°: 1 point.`,
        },
        {
          label: "(e)",
          points: 15,
          prompt: String.raw`Calculate the zenith distance of $\chi$ when it first crosses his east-west meridian. Express your answer in degrees.`,
          solution: String.raw`Let $D$ be his position on the celestial sphere. When $\chi$ first crosses the east-west meridian, $D$ must satisfy $\angle ND\chi = 90^\circ$. In the diagram, the red line is his trajectory on the celestial sphere (it is not a great circle, so we cannot use it in calculations).

[[figure:friends-solution-e]]

Chasing angles:

- The perpendicular condition means $D$ is the apex of a great circle $\Gamma$ through $D$ and $\chi$. $\Gamma$ meets the equator at a point $A$ with $DA = 90^\circ$.
- Let $B$ and $C$ be the feet of $\chi$ and $D$ from $N$ (so $\angle\chi BA = \angle DCA = 90^\circ$). Since $D$ is the apex of $\Gamma$, $DA = CA = 90^\circ$.
- $\gamma B = \alpha$ and $\gamma C = \omega t$, so $AB = 90^\circ + \alpha - \omega t$.
- $\chi B = \delta$ and $DC = \omega t/4$.

We want $\chi D$, for which we need $\omega t$. Let $\varepsilon = \angle\chi AB = \angle DAC$. The four-parts formula in $\triangle\chi AB$ and $\triangle DAC$ gives

$$\tan\varepsilon = \frac{\tan\chi B}{\sin AB} = \frac{\tan DC}{\sin AC}$$

which reduces to

$$\tan\delta = \cos(\omega t - \alpha)\tan\left(\frac{\omega t}{4}\right) \;\Longrightarrow\; \omega t = 4\arctan\left(\frac{\tan\delta}{\cos(\omega t - \alpha)}\right)$$

Iterating numerically (any starting guess from about $10^\circ$ to $70^\circ$ converges in a few steps) gives $\omega t \approx 46.97^\circ$.

Finally, $\angle\chi ND = \angle BNC = \omega t - \alpha$, $N\chi = 90^\circ - \delta$ and $ND = 90^\circ - \omega t/4$. The spherical law of cosines in $\triangle N\chi D$ gives

$$\chi D = \arccos\left(\sin\delta\sin\frac{\omega t}{4} + \cos(\omega t - \alpha)\cos\delta\cos\frac{\omega t}{4}\right) \approx 31.42^\circ$$`,
          rubric: `Astro Coach marking guide (15 points):
- Condition for crossing the east-west meridian: ∠NDχ = 90° (χ on his prime vertical): 3 points.
- Correct geometric set-up relating the arcs (e.g. great circle through D and χ meeting the equator at A, with AB = 90° + α − ωt, χB = δ, DC = ωt/4): 3 points.
- Equation for ωt, tan δ = cos(ωt − α) tan(ωt/4) or equivalent: 4 points.
- Numerical solution ωt ≈ 46.97°: 2 points.
- Zenith distance χD ≈ 31.42° from the law of cosines in triangle NχD: 3 points.`,
        },
        {
          label: "(f)",
          points: 6,
          leadIn: String.raw`Let $X$ be the point in his trajectory (in the celestial sphere) at which $\chi$ reaches its minimum zenith distance, and $N$ be the north celestial pole. Note that $X$ is a point in the celestial sphere, and not Earth.`,
          prompt: String.raw`Argue that $\angle N\gamma X + \angle\chi XN \approx \pi/2$, where both angles are spherical angles. Then, calculate $\angle\chi XN$. Express your answer in degrees.

Note: For this part only, you may assume that the declination of $X$ is small, hence the approximation.`,
          solution: String.raw`The zenith distance $\chi X$ is minimised when $\angle\chi X\gamma = 90^\circ$ (the arc to $\chi$ is perpendicular to his path). Let $X'$ be the foot of $X$ from $N$, so that $\angle NX'\gamma = 90^\circ$. Let $\beta = \angle NX\chi$.

- $N$, $X$, $X'$ lie on the same great circle, so $\angle NX\chi + \angle\chi X\gamma + \angle\gamma XX' = 180^\circ$, which gives $\angle\gamma XX' = 90^\circ - \beta$.
- Since the declination of $X$ is small and $\triangle XX'\gamma$ is right-angled, $\angle\gamma XX' + \angle X\gamma X' \approx 90^\circ$, so $\angle X\gamma X' \approx \beta$. This is valid since $\gamma X' = \omega t = 4X'X$, so $\triangle XX'\gamma$ can be approximated by a flat right triangle.
- Since $\angle N\gamma X' = 90^\circ$, $\beta$ and $\angle N\gamma X$ add to $90^\circ$, as desired.

To compute $\beta$, use the flat right triangle: $\tan\beta \approx 1/4$, so $\beta = \angle\chi XN \approx 14^\circ$.`,
          rubric: `Astro Coach marking guide (6 points):
- Minimum zenith distance when χX is perpendicular to the path at X: 1 point.
- Angle argument using the (nearly flat) right triangle XX′γ to show ∠NγX + ∠χXN ≈ 90°: 3 points.
- ∠χXN = arctan(1/4) ≈ 14.0°: 2 points.`,
        },
        {
          label: "(g)",
          points: 15,
          prompt: String.raw`Calculate the minimum zenith distance that $\chi$ reaches. Express your answer in degrees.

For this problem:

- You may no longer assume that the declination of $X$ is small. However, you may use the value of $\angle\chi XN$ derived in part (f).
- You are given that the right ascension of $X$ is within $(\alpha \pm 2^\circ)$.
- **His trajectory in the celestial sphere is not necessarily a great circle.** Be careful when computing angles and lengths!`,
          solution: String.raw`Consider $\triangle NX\chi$. We know two sides, $N\chi = 90^\circ - \delta$ and $NX = 90^\circ - \omega t/4$, and the angle between them at $N$, $\omega t - \alpha$, as well as the angle at $X$, $\beta$. We want $X\chi$. We can't solve for it directly, but we can first solve for $\omega t$.

Applying the four-parts formula:

$$\sin\left(\frac{\omega t}{4}\right)\cos(\omega t - \alpha) = \cos\left(\frac{\omega t}{4}\right)\cot(90^\circ - \delta) - \sin(\omega t - \alpha)\cot\beta$$

As in part (e), we can isolate $\omega t$ and try numerical iteration:

$$\omega t = 4\arctan\left(\frac{\tan\delta}{\cos(\omega t - \alpha)} - \frac{\sin(\omega t - \alpha)\cot\beta}{\cos(\omega t/4)\cos(\omega t - \alpha)}\right)$$

This diverges for most starting values, but we are given that $\omega t$ is within $\alpha \pm 2^\circ$, which is a good enough range to find the solution $\omega t \approx 16.45^\circ$ (for example by bisection).

Finally, the law of sines in $\triangle X\chi N$ gives

$$\chi X = \arcsin\left(\frac{\cos\delta\sin(\omega t - \alpha)}{\sin\beta}\right) \approx 6.06^\circ$$`,
          rubric: `Astro Coach marking guide (15 points):
- Triangle NXχ set up with Nχ = 90° − δ, NX = 90° − ωt/4, angle ωt − α at N and β at X: 4 points.
- Correct four-parts (or equivalent) equation for ωt: 4 points.
- Numerical solution ωt ≈ 16.5° within the given range: 3 points.
- Minimum zenith distance χX ≈ 6.06° from the law of sines: 4 points.`,
        },
        {
          label: "(h)",
          points: 2,
          leadIn: String.raw`He is not satisfied with these results. He feels there should be an optimal way to get $\chi$ directly overhead, as fast as possible. Help him figure out the fastest way to get $\chi$ to his zenith.`,
          prompt: String.raw`Given that he is allowed to maneuver his boat however he wants throughout the duration of his journey, and that he starts from his initial position with $\gamma$ overhead, show that $\chi$ cannot be at his zenith the first time it culminates, i.e., crosses his north-south meridian.`,
          solution: String.raw`For $\chi$ to be directly overhead, he needs to have the same declination and right ascension as $\chi$.

The time he needs to increase his latitude to $\delta$ is bounded below by

$$\frac{\delta}{v/R_\oplus} = \frac{4\delta}{\omega}$$

which is when he travels straight north at all times.

On the other hand, the time it takes him to reach the same right ascension is bounded above by

$$\frac{\alpha}{\omega - v/R_\oplus} = \frac{4\alpha}{3\omega}$$

which is when he travels straight west at all times. Since $4\alpha/3 = 20^\circ < 4\delta = 40^\circ$, even the fastest way north takes longer than the slowest possible first culmination, so he cannot get $\chi$ to his zenith when it first culminates.`,
          rubric: `Astro Coach marking guide (2 points):
- Lower bound on the time to reach declination δ, 4δ/ω: 1 point.
- Upper bound on the time until the first culmination, 4α/(3ω), and the comparison 4α/3 < 4δ: 1 point.`,
        },
        {
          label: "(i)",
          points: 7,
          prompt: String.raw`Let $t$ be the fastest time he can get $\chi$ to his zenith. Compute the quantity $(t - 20\ \text{hrs})$, in seconds.`,
          solution: String.raw`From part (h), he cannot get $\chi$ directly overhead the first time it culminates. Therefore, his best strategy is to get $\chi$ to his zenith the next time it culminates. After time $t$, the change in his right ascension due to the rotation of the Earth is $\omega t$. So, to minimise his distance travelled, he should travel along a great circle on the Earth's surface that increases his longitude by $(2\pi + \alpha - \omega t)$ and increases his latitude by $\delta$.

Let $N$ be the north pole and $Y$ his stopping point, which has coordinates $(2\pi + \alpha - \omega t, \delta)$ (longitude and latitude on Earth, not celestial coordinates). Also, $Y\gamma = \omega t/4$, since the maximum speed of his boat is $\omega R_\oplus/4$. The spherical law of cosines in $\triangle NY\gamma$ gives

$$\cos\left(\frac{\omega t}{4}\right) = \cos\delta\cos(\alpha - \omega t) \;\Longrightarrow\; \omega t = 4\arccos\left(\cos\delta\cos(\alpha - \omega t)\right)$$

Solving numerically (starting from $t = 20$ hrs) gives $\omega t \approx 300.19^\circ$, i.e. $t \approx 20.0126$ hrs, so

$$t - 20\ \text{hrs} \approx 45\ \text{s}$$

Note: the official solution rounds to $\omega t = 300.2^\circ$ and quotes about 48 s; it states that a large range of values in this vicinity is acceptable.`,
          rubric: `Astro Coach marking guide (7 points):
- Strategy: catch χ at its next culmination, sailing along a great circle that gains longitude 2π + α − ωt and latitude δ: 2 points.
- Spherical triangle with side ωt/4 giving cos(ωt/4) = cos δ cos(α − ωt): 3 points.
- Numerical solution ωt ≈ 300.2° and t − 20 hrs ≈ 45 s (accept roughly 30–60 s, including the official 48 s): 2 points.`,
        },
      ],
      solutionSource: "ADAPTED",
      questionPages: [7, 8],
      solutionPages: [21, 22, 23, 24, 25],
    },
  ],
};
