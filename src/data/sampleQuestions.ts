import { Question } from "@/types/question";

// Shared placeholder source metadata. Every question reuses these same
// values because none of this data is real — it is original practice
// content written only for Astro Coach development.
const PLACEHOLDER_SOURCE = {
  sourceUrl: "placeholder",
  pdfUrl: "placeholder",
  pageNumber: null,
  attributionText: "Original placeholder question for Astro Coach development only.",
  permissionStatus: "original-placeholder" as const,
};

// 12 original placeholder questions: 8 MCQ + 4 FRQ.
// These are NOT real olympiad questions — they exist only so the
// training UI has something to display before a real database exists.
export const sampleQuestions: Question[] = [
  {
    id: "q1",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 1",
    questionNumber: 1,
    type: "MCQ",
    topic: "celestial coordinates",
    subtopic: "right ascension and declination",
    difficulty: "Beginner",
    questionText:
      "Which pair of coordinates is used to locate a star on the celestial sphere?",
    choices: [
      { label: "A", text: "Latitude and longitude" },
      { label: "B", text: "Right ascension and declination" },
      { label: "C", text: "Azimuth and altitude only" },
      { label: "D", text: "X and Y pixel position" },
    ],
    correctAnswer: "B",
    explanation:
      "Right ascension and declination form the equatorial coordinate system used to pinpoint objects on the celestial sphere, similar to how longitude and latitude work on Earth.",
    ...PLACEHOLDER_SOURCE,
  },
  {
    id: "q2",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 1",
    questionNumber: 2,
    type: "MCQ",
    topic: "phases of the Moon",
    subtopic: "lunar cycle",
    difficulty: "Beginner",
    questionText:
      "During which Moon phase does the Moon rise at approximately the same time as the Sun sets?",
    choices: [
      { label: "A", text: "New Moon" },
      { label: "B", text: "First Quarter" },
      { label: "C", text: "Full Moon" },
      { label: "D", text: "Last Quarter" },
    ],
    correctAnswer: "C",
    explanation:
      "At Full Moon, the Moon is opposite the Sun in the sky, so it rises around sunset and sets around sunrise.",
    ...PLACEHOLDER_SOURCE,
  },
  {
    id: "q3",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 1",
    questionNumber: 3,
    type: "MCQ",
    topic: "Kepler's laws",
    subtopic: "law of equal areas",
    difficulty: "Intermediate",
    questionText:
      "According to Kepler's second law, a planet moves fastest in its orbit when it is:",
    choices: [
      { label: "A", text: "Farthest from the Sun (aphelion)" },
      { label: "B", text: "Closest to the Sun (perihelion)" },
      { label: "C", text: "At a 90-degree angle from the Sun" },
      { label: "D", text: "Moving at constant speed everywhere" },
    ],
    correctAnswer: "B",
    explanation:
      "Kepler's second law states that a planet sweeps out equal areas in equal time, which means it moves fastest at perihelion, where it is closest to the Sun.",
    ...PLACEHOLDER_SOURCE,
  },
  {
    id: "q4",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 2",
    questionNumber: 4,
    type: "MCQ",
    topic: "stellar magnitude",
    subtopic: "apparent vs absolute magnitude",
    difficulty: "Intermediate",
    questionText:
      "A star with a lower apparent magnitude number compared to another star is:",
    choices: [
      { label: "A", text: "Always farther away" },
      { label: "B", text: "Always larger in physical size" },
      { label: "C", text: "Brighter as seen from Earth" },
      { label: "D", text: "Always hotter" },
    ],
    correctAnswer: "C",
    explanation:
      "The magnitude scale is reversed: smaller (or more negative) numbers mean brighter objects as observed from Earth.",
    ...PLACEHOLDER_SOURCE,
  },
  {
    id: "q5",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 2",
    questionNumber: 5,
    type: "MCQ",
    topic: "blackbody radiation",
    subtopic: "Wien's law",
    difficulty: "Advanced",
    questionText:
      "As a blackbody's temperature increases, what happens to the wavelength at which it emits the most radiation?",
    choices: [
      { label: "A", text: "It gets longer" },
      { label: "B", text: "It gets shorter" },
      { label: "C", text: "It stays the same" },
      { label: "D", text: "It becomes zero" },
    ],
    correctAnswer: "B",
    explanation:
      "Wien's law says the peak emission wavelength is inversely proportional to temperature, so hotter objects peak at shorter (bluer) wavelengths.",
    ...PLACEHOLDER_SOURCE,
  },
  {
    id: "q6",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 2",
    questionNumber: 6,
    type: "MCQ",
    topic: "H-R diagram",
    subtopic: "main sequence",
    difficulty: "Intermediate",
    questionText:
      "On the Hertzsprung-Russell diagram, most stars, including the Sun, are found on the:",
    choices: [
      { label: "A", text: "Main sequence" },
      { label: "B", text: "Red giant branch" },
      { label: "C", text: "White dwarf region" },
      { label: "D", text: "Instability strip" },
    ],
    correctAnswer: "A",
    explanation:
      "The main sequence is the diagonal band on the H-R diagram where stars spend most of their lives fusing hydrogen into helium.",
    ...PLACEHOLDER_SOURCE,
  },
  {
    id: "q7",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 3",
    questionNumber: 7,
    type: "MCQ",
    topic: "telescopes",
    subtopic: "refractors vs reflectors",
    difficulty: "Beginner",
    questionText: "A reflecting telescope primarily uses which component to gather light?",
    choices: [
      { label: "A", text: "A convex lens" },
      { label: "B", text: "A curved mirror" },
      { label: "C", text: "A diffraction grating" },
      { label: "D", text: "A photographic plate" },
    ],
    correctAnswer: "B",
    explanation:
      "Reflecting telescopes use a curved mirror to gather and focus light, while refracting telescopes use lenses.",
    ...PLACEHOLDER_SOURCE,
  },
  {
    id: "q8",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 3",
    questionNumber: 8,
    type: "MCQ",
    topic: "orbital mechanics",
    subtopic: "escape velocity",
    difficulty: "Advanced",
    questionText:
      "Escape velocity from a planet's surface depends on which two properties of the planet?",
    choices: [
      { label: "A", text: "Mass and radius" },
      { label: "B", text: "Color and rotation period" },
      { label: "C", text: "Distance from the Sun and age" },
      { label: "D", text: "Number of moons and axial tilt" },
    ],
    correctAnswer: "A",
    explanation:
      "Escape velocity is derived from gravitational potential energy, which depends on the planet's mass and radius.",
    ...PLACEHOLDER_SOURCE,
  },
  {
    id: "q9",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 3",
    questionNumber: 9,
    type: "FRQ",
    topic: "cosmology",
    subtopic: "expansion of the universe",
    difficulty: "Advanced",
    questionText:
      "Explain what Hubble's Law tells us about the relationship between a galaxy's distance and its recession velocity, and describe one piece of observational evidence that supports an expanding universe.",
    sampleAnswer:
      "Hubble's Law states that a galaxy's recession velocity is proportional to its distance from us (v = H0 × d), meaning more distant galaxies move away faster. Observational evidence includes the redshift of light from distant galaxies, which increases with distance, indicating the universe is expanding.",
    rubric:
      "Full credit requires: (1) correctly stating the proportional relationship between distance and recession velocity, (2) naming H0 as the Hubble constant, (3) describing redshift (or another valid piece of evidence such as the cosmic microwave background) as supporting evidence.",
    explanation:
      "Hubble's Law is one of the foundational pieces of evidence for the Big Bang model and the expansion of space itself.",
    ...PLACEHOLDER_SOURCE,
  },
  {
    id: "q10",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 4",
    questionNumber: 10,
    type: "FRQ",
    topic: "spectroscopy",
    subtopic: "absorption and emission lines",
    difficulty: "Intermediate",
    questionText:
      "Describe the difference between an absorption spectrum and an emission spectrum, and explain how astronomers use spectral lines to determine what a star is made of.",
    sampleAnswer:
      "An emission spectrum shows bright lines at specific wavelengths produced when excited atoms release energy as light. An absorption spectrum shows dark lines where atoms in a cooler outer layer absorb specific wavelengths of light passing through them. Astronomers compare the pattern of spectral lines in starlight to known patterns from elements measured in labs to identify the chemical composition of stars.",
    rubric:
      "Full credit requires: (1) a correct description of emission lines, (2) a correct description of absorption lines, (3) explaining that each element has a unique fingerprint of lines used for identification.",
    explanation:
      "Spectroscopy lets astronomers determine composition, temperature, and motion of distant objects without ever traveling to them.",
    ...PLACEHOLDER_SOURCE,
  },
  {
    id: "q11",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 4",
    questionNumber: 11,
    type: "FRQ",
    topic: "Kepler's laws",
    subtopic: "law of periods",
    difficulty: "Advanced",
    questionText:
      "State Kepler's third law and use it to explain why outer planets in the solar system take longer to orbit the Sun than inner planets.",
    sampleAnswer:
      "Kepler's third law states that the square of a planet's orbital period is proportional to the cube of its semi-major axis (T^2 ∝ a^3). Outer planets have a larger semi-major axis, so their orbital period must be much longer than that of inner planets, which orbit closer and faster.",
    rubric:
      "Full credit requires: (1) correctly stating the T^2 ∝ a^3 relationship, (2) explaining that a larger orbital radius leads to a longer period, (3) connecting this to real solar system examples (e.g. Mercury vs Neptune).",
    explanation:
      "Kepler's third law lets astronomers calculate orbital periods or distances for any orbiting body once one of the two values is known.",
    ...PLACEHOLDER_SOURCE,
  },
  {
    id: "q12",
    competition: "Astro Coach Practice",
    year: 2026,
    round: "Practice Set 4",
    questionNumber: 12,
    type: "FRQ",
    topic: "stellar magnitude",
    subtopic: "apparent vs absolute magnitude",
    difficulty: "Beginner",
    questionText:
      "Explain the difference between apparent magnitude and absolute magnitude, and why a nearby dim star could appear brighter in the sky than a distant bright star.",
    sampleAnswer:
      "Apparent magnitude measures how bright a star looks from Earth, while absolute magnitude measures how bright a star would appear from a standard distance of 10 parsecs, representing its true luminosity. A nearby dim star can appear brighter in the sky than a distant bright star because apparent brightness depends on distance as well as actual luminosity — being close can outweigh being intrinsically dim.",
    rubric:
      "Full credit requires: (1) correct definition of apparent magnitude, (2) correct definition of absolute magnitude, (3) explaining that distance affects apparent brightness independently of true luminosity.",
    explanation:
      "Distinguishing apparent and absolute magnitude is essential for understanding how astronomers measure the true power output of stars.",
    ...PLACEHOLDER_SOURCE,
  },
];
