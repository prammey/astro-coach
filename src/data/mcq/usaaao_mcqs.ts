/**
 * Consolidated USAAAO First Round multiple-choice question bank (2014–2026).
 *
 * Merged from the five verified source files previously generated for Astro Coach.
 * Internal database IDs are intentionally omitted; generate them in the database layer.
 * Questions explicitly omitted in the source files (for example, voided or canceled items)
 * remain omitted here.
 */
export const usaaaoMcqs = [
  // 2014–2015
{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 1,
  difficulty: "Beginner",
  topic: "Celestial Coordinates & Time",
  subtopic: "Seasonal Constellations",
  tags: [
    "constellations",
    "seasonal sky",
    "summer sky",
    "Delphinus",
  ],
  type: "MCQ",

  questionText: "Which of the following constellations are visible during the summer?",

  choices: [
    { label: "A", text: "Delphinus" },
    { label: "B", text: "Taurus" },
    { label: "C", text: "Monoceros" },
    { label: "D", text: "Eridanus" },
  ],

  correctAnswer: "A",

  explanation: "Delphinus is a Northern Hemisphere summer constellation; the other listed constellations are primarily associated with the winter sky.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 1.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 2,
  difficulty: "Beginner",
  topic: "Celestial Coordinates & Time",
  subtopic: "Asterisms",
  tags: [
    "Winter Triangle",
    "Sirius",
    "Procyon",
    "Betelgeuse",
  ],
  type: "MCQ",

  questionText: "Which stars make up the Winter Triangle asterism?",

  choices: [
    { label: "A", text: "Regulus, Spica, Arcturus" },
    { label: "B", text: "Sirius, Procyon, Betelgeuse" },
    { label: "C", text: "Vega, Altair, Deneb" },
    { label: "D", text: "Alpheratz, Algenib, Markab" },
  ],

  correctAnswer: "B",

  explanation: "The Winter Triangle is formed by Sirius, Procyon, and Betelgeuse.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 2.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 3,
  difficulty: "Intermediate",
  topic: "Celestial Coordinates & Time",
  subtopic: "Moon Phases and Culmination",
  tags: [
    "Moon phases",
    "culmination",
    "mean solar time",
    "waxing gibbous",
  ],
  type: "MCQ",

  questionText: "The moon is at its upper culmination at 8pm, mean solar time. Estimate the phase of the moon.",

  choices: [
    { label: "A", text: "Waning Gibbous" },
    { label: "B", text: "Waning Crescent" },
    { label: "C", text: "Waxing Gibbous" },
    { label: "D", text: "Waxing Crescent" },
  ],

  correctAnswer: "C",

  explanation: "A waxing gibbous Moon culminates in the evening, between the first-quarter and full-Moon culminations.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 3.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 4,
  difficulty: "Beginner",
  topic: "Stars & Stellar Evolution",
  subtopic: "Low-Mass Stellar Evolution",
  tags: [
    "stellar evolution",
    "red-giant branch",
    "helium flash",
    "planetary nebula",
    "white dwarf",
  ],
  type: "MCQ",

  questionText: "Arrange the following stages of the life cycle of a star of one solar mass in chronological order - Red-giant branch, Planetary nebula, White dwarf, Main sequence star, Helium Flash.",

  choices: [
    { label: "A", text: "Main sequence star, Red-giant branch, Helium Flash, Planetary nebula, White dwarf" },
    { label: "B", text: "Main sequence star, Helium Flash, Red-giant branch, Planetary nebula, White dwarf" },
    { label: "C", text: "Main sequence star, Red-giant branch, Helium Flash, White dwarf, Planetary nebula" },
    { label: "D", text: "Main sequence star, Helium Flash, Red-giant branch, White dwarf, Planetary nebula" },
  ],

  correctAnswer: "A",

  explanation: "A Sun-like star leaves the main sequence, ascends the red-giant branch, undergoes the helium flash, ejects a planetary nebula, and remains as a white dwarf.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 4.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 5,
  difficulty: "Beginner",
  topic: "Solar System & Planetary Science",
  subtopic: "Planetary Rings",
  tags: [
    "Saturn",
    "planetary rings",
    "tidal disruption",
    "moons",
  ],
  type: "MCQ",

  questionText: "How are the rings of Saturn thought to be formed?",

  choices: [
    { label: "A", text: "They coalesced during the formation of the Solar System" },
    { label: "B", text: "They were ejected from the surface of Saturn by a massive meteor impact." },
    { label: "C", text: "They are the disintegrated remains of some of Saturn's moons and captured meteorites" },
    { label: "D", text: "They were gravitationally captured from the interstellar medium" },
  ],

  correctAnswer: "C",

  explanation: "Saturn's rings are thought to consist of material from objects such as disrupted moons or captured bodies that broke apart within Saturn's Roche limit.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 5.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 6,
  difficulty: "Intermediate",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Lagrange Points",
  tags: [
    "James Webb Space Telescope",
    "L2",
    "Lagrange point",
    "halo orbit",
  ],
  type: "MCQ",

  questionText: "The James Webb Space Telescope is to be sent to the second Lagrange point of the Earth-Sun system. What is the significance of doing so?",

  choices: [
    { label: "A", text: "The telescope would require little expenditure of energy to maintain its orbit" },
    { label: "B", text: "The Earth would shield the telescope from the intense solar radiation" },
    { label: "C", text: "The Moon would shield the telescope from the intense solar radiation" },
    { label: "D", text: "It allows for ground control to communicate easily with the telescope" },
  ],

  correctAnswer: "A",

  explanation: "Near the Earth-Sun L2 point, a spacecraft can remain in a stable-looking halo orbit with comparatively modest station-keeping requirements.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 6.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 7,
  difficulty: "Beginner",
  topic: "Exoplanets & Planetary Systems",
  subtopic: "Exoplanet Detection",
  tags: [
    "exoplanets",
    "radial velocity",
    "Doppler shift",
    "transits",
  ],
  type: "MCQ",

  questionText: "Which of the following is not a possible method of detecting exoplanets?",

  choices: [
    { label: "A", text: "To observe the wobbling of the parent star due to the gravitational influence of the planet" },
    { label: "B", text: "To observe the doppler shift of light emitted by the parent star due to the gravitational influence of the planet" },
    { label: "C", text: "To observe the periodic dips in the brightness of the parent star due to planetary transits" },
    { label: "D", text: "All of the above are possible methods for detecting exoplanets" },
  ],

  correctAnswer: "D",

  explanation: "Stellar wobble, radial-velocity Doppler shifts, and transit-related brightness dips are all standard exoplanet-detection methods.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 7.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 8,
  difficulty: "Intermediate",
  topic: "Observational Astronomy & Telescopes",
  subtopic: "Telescope Magnification",
  tags: [
    "Dobsonian telescope",
    "focal ratio",
    "eyepiece",
    "magnification",
  ],
  type: "MCQ",

  questionText: "An 8 inch Dobsonian telescope with a focal ratio of f/6 is used with a 12mm Plossel eyepiece. Calculate the magnifying power of the telescope. (1 inch = 25.4mm)",

  choices: [
    { label: "A", text: "30x" },
    { label: "B", text: "50x" },
    { label: "C", text: "100x" },
    { label: "D", text: "200x" },
  ],

  correctAnswer: "C",

  explanation: "The telescope focal length is 8 × 25.4 × 6 = 1219.2 mm. Dividing by the 12 mm eyepiece focal length gives about 100×.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 8.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 9,
  difficulty: "Intermediate",
  topic: "Observational Astronomy & Telescopes",
  subtopic: "Limiting Magnitude",
  tags: [
    "limiting magnitude",
    "aperture",
    "light-gathering power",
    "human eye",
  ],
  type: "MCQ",

  questionText: "Approximately how much higher is the limiting magnitude of a telescope than that of the human eye? Assume that the telescope has an aperture of 200mm and the diameter of the human iris is 5mm. (A magnitude difference of 5 corresponds to a 100-fold difference in luminosity).",

  choices: [
    { label: "A", text: "6.0" },
    { label: "B", text: "7.0" },
    { label: "C", text: "8.0" },
    { label: "D", text: "9.0" },
  ],

  correctAnswer: "C",

  explanation: "The aperture ratio is 40, so the light-gathering ratio is 40² = 1600. A 1600-fold brightness ratio corresponds to approximately 8 magnitudes.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 9.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 10,
  difficulty: "Beginner",
  topic: "Observational Astronomy & Telescopes",
  subtopic: "Telescope Mounts",
  tags: [
    "equatorial mount",
    "alt-az mount",
    "diurnal motion",
    "tracking",
  ],
  type: "MCQ",

  questionText: "What is the advantage of an Equatorial telescope mount as compared to an Alt-az mount?",

  choices: [
    { label: "A", text: "Reduced vibrations and provides a more stable viewing platform" },
    { label: "B", text: "Convenience of tracking the diurnal motion of the stars" },
    { label: "C", text: "It can be made more compact than an Alt-az mount" },
    { label: "D", text: "It is less complex than the Alt-az mount" },
  ],

  correctAnswer: "B",

  explanation: "An equatorial mount can track the apparent daily motion of the sky by rotating primarily about one polar-aligned axis.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 10.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 11,
  difficulty: "Intermediate",
  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Apparent Magnitude",
  tags: [
    "apparent magnitude",
    "combined magnitude",
    "double stars",
    "Albireo",
  ],
  type: "MCQ",

  questionText: "Alberio (β Cygni) is a double star system in the constellation Cygnus. The magnitudes of the component stars Alberio A & Alberio B are given by 3.18 and 5.82 respectively. Find the apparent magnitude of Alberio.",

  choices: [
    { label: "A", text: "2.96" },
    { label: "B", text: "3.09" },
    { label: "C", text: "3.49" },
    { label: "D", text: "4.75" },
  ],

  correctAnswer: "B",

  explanation: "Magnitudes must be combined by adding fluxes, not magnitude values. The brighter component dominates, yielding a combined apparent magnitude of about 3.09.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 11.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 12,
  difficulty: "Intermediate",
  topic: "Celestial Coordinates & Time",
  subtopic: "Circumpolar Stars",
  tags: [
    "circumpolar stars",
    "declination",
    "latitude",
    "Romania",
    "Gamma Draconis",
  ],
  type: "MCQ",

  questionText: "Which of the following stars is circumpolar in Romania (44°25'N 26°06'E)? (Circum-polar stars are stars that never set).",

  choices: [
    { label: "A", text: "ζ Herculis (16h41m/+31°36')" },
    { label: "B", text: "β Böotis (15h01m/+40°23')" },
    { label: "C", text: "θ Aurigae (5h59m/+37°12')" },
    { label: "D", text: "γ Draconis (17h56m/+51°26')" },
  ],

  correctAnswer: "D",

  explanation: "At latitude 44°25′ N, a star is circumpolar if its declination exceeds about +45°35′. γ Draconis has declination +51°26′.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 12.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 13,
  difficulty: "Intermediate",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Cometary Orbits",
  tags: [
    "Haley's comet",
    "Kepler's third law",
    "perihelion",
    "aphelion",
    "orbital period",
  ],
  type: "MCQ",

  questionText: "Haley's comet last appeared in the night sky in 1986. The Perihelion and Aphelion of its orbit are given by 0.586AU & 35.1AU respectively. Predict when it will next return.",

  choices: [
    { label: "A", text: "2036" },
    { label: "B", text: "2052" },
    { label: "C", text: "2061" },
    { label: "D", text: "2096" },
  ],

  correctAnswer: "C",

  explanation: "The semimajor axis is (0.586 + 35.1)/2 AU. Kepler's third law gives an orbital period of roughly 75 years, placing the next return near 2061.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 13.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 14,
  difficulty: "Intermediate",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Parabolic Orbits",
  tags: [
    "meteors",
    "parabolic orbit",
    "solar escape velocity",
    "1 AU",
  ],
  type: "MCQ",

  questionText: "What would be the maximum speed of a meteor on a parabolic orbit around the sun, whose point of closest approach is 1AU?",

  choices: [
    { label: "A", text: "42.1 km/s" },
    { label: "B", text: "58.4 km/s" },
    { label: "C", text: "77.1 km/s" },
    { label: "D", text: "92.8 km/s" },
  ],

  correctAnswer: "A",

  explanation: "For a parabolic solar orbit, the speed at distance r is the local escape speed, √(2GM☉/r). At 1 AU this is about 42.1 km/s.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 14.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 15,
  difficulty: "Advanced",
  topic: "Stars & Stellar Evolution",
  subtopic: "Solar Lifetime",
  tags: [
    "Sun",
    "nuclear fusion",
    "mass defect",
    "stellar lifetime",
  ],
  type: "MCQ",

  questionText: "Estimate the lifespan of the Sun. (Mass of H : 1.00794u; Mass of He : 4.002602u)",

  choices: [
    { label: "A", text: "8.5 Billion Years" },
    { label: "B", text: "9.6 Billion Years" },
    { label: "C", text: "10.2 Billion Years" },
    { label: "D", text: "10.7 Billion Years" },
  ],

  correctAnswer: "D",

  explanation: "Using the supplied hydrogen and helium masses to estimate the fusion mass defect, together with the Sun's luminosity and available fuel, gives an estimate near 10.7 billion years.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 5,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 15.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2014,
  examName: "National Astronomy Olympiad",
  questionNumber: 16,
  difficulty: "Advanced",
  topic: "Celestial Coordinates & Time",
  subtopic: "Day Length",
  tags: [
    "day length",
    "latitude",
    "Earth's axial tilt",
    "winter solstice",
    "Romania",
  ],
  type: "MCQ",

  questionText: "Calculate the length of the shortest day that can be experienced in Romania (44°25'N 26°06'E). (Earth's axial tilt is 23.4° )",

  choices: [
    { label: "A", text: "8h 12m" },
    { label: "B", text: "8h 39m" },
    { label: "C", text: "9h 04m" },
    { label: "D", text: "9h 25m" },
  ],

  correctAnswer: "B",

  explanation: "At the winter solstice, use the solar declination −23.4° and the observer latitude in the sunrise/sunset hour-angle relation. The resulting daylight duration is about 8 h 39 min.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-exam.pdf",
  pageNumber: 5,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2014-nao-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO National Astronomy Olympiad 2013–2014, Section A: Multiple Choice, Question 16.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 1,
  difficulty: "Beginner",
  topic: "Cosmology",
  subtopic: "Cosmological Redshift",
  tags: [
    "redshift",
    "distant galaxies",
    "expanding universe",
    "wavelength",
  ],
  type: "MCQ",

  questionText: "Light from distant galaxies appears to be:",

  choices: [
    { label: "A", text: "Shifted to longer wavelengths" },
    { label: "B", text: "Shifted to shorter wavelengths" },
    { label: "C", text: "Increased in energy" },
    { label: "D", text: "Increased in intensity" },
    { label: "E", text: "Completely polarized" },
  ],

  correctAnswer: "A",

  explanation: "Light from distant galaxies is generally redshifted, so its wavelength is shifted to longer values as the universe expands.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 1,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 1.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 2,
  difficulty: "Beginner",
  topic: "Stars & Stellar Evolution",
  subtopic: "Stellar Classification",
  tags: [
    "stellar mass",
    "stellar radius",
    "supergiant",
    "H-R diagram",
  ],
  type: "MCQ",

  questionText: "Given a star of 70 solar masses and 20 solar radii, what type of star is this?",

  choices: [
    { label: "A", text: "Main Sequence" },
    { label: "B", text: "Giant" },
    { label: "C", text: "Dwarf" },
    { label: "D", text: "Neutron Star" },
    { label: "E", text: "Supergiant" },
  ],

  correctAnswer: "E",

  explanation: "A star with tens of solar masses and a large radius is classified as a supergiant in this set of choices.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 1,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 2.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 3,
  difficulty: "Beginner",
  topic: "Stars & Stellar Evolution",
  subtopic: "Solar Interior",
  tags: [
    "Sun",
    "solar interior",
    "core",
    "radiative zone",
    "convective zone",
  ],
  type: "MCQ",

  questionText: "The Sun has three major zones in its interior. What are these three zones, listed from center of the Sun outward?",

  choices: [
    { label: "A", text: "Core, Mantle, Crust" },
    { label: "B", text: "Core, Convective Zone, Radiative Zone" },
    { label: "C", text: "Core, Radiative Zone, Convective Zone" },
    { label: "D", text: "Convective Zone, Radiative Zone, Chromosphere" },
    { label: "E", text: "Radiative Zone, Convective Zone, Core" },
  ],

  correctAnswer: "C",

  explanation: "From the center outward, the Sun has a core, a radiative zone, and a convective zone.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 1,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 3.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 4,
  difficulty: "Intermediate",
  topic: "Celestial Coordinates & Time",
  subtopic: "Rising and Setting",
  tags: [
    "declination",
    "latitude",
    "Los Angeles",
    "horizon",
    "never rises",
  ],
  type: "MCQ",

  questionText: "The latitude and longitude of LA are 34.05 degrees N and 118.25 degrees W, respectively. A star at which of the following declinations never rises over the horizon in LA?",

  choices: [
    { label: "A", text: "60 degrees" },
    { label: "B", text: "45 degrees" },
    { label: "C", text: "0 degrees" },
    { label: "D", text: "-45 degrees" },
    { label: "E", text: "-60 degrees" },
  ],

  correctAnswer: "E",

  explanation: "At latitude 34.05° N, stars with declination below about −55.95° never rise. Of the choices, −60° satisfies this condition.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 1,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 4.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 5,
  difficulty: "Intermediate",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Kepler's Third Law",
  tags: [
    "asteroid belt",
    "semi-major axis",
    "Kepler's third law",
    "orbital period",
  ],
  type: "MCQ",

  questionText: "The semi-major axis of an asteroid in the asteroid belt is 3 AU. What is its orbital period, in years?",

  choices: [
    { label: "A", text: "9" },
    { label: "B", text: "5.2" },
    { label: "C", text: "27" },
    { label: "D", text: "2.1" },
    { label: "E", text: "3.0" },
  ],

  correctAnswer: "B",

  explanation: "Using P² = a³ with a = 3 AU gives P = √27 ≈ 5.2 years.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 1,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 5.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 6,
  difficulty: "Beginner",
  topic: "Stars & Stellar Evolution",
  subtopic: "Planetary Nebulae",
  tags: [
    "planetary nebula",
    "white dwarf",
    "Chandrasekhar limit",
    "stellar remnants",
  ],
  type: "MCQ",

  questionText: "What object is left at the middle of a planetary nebula, and what is the largest mass at which this object can exist?",

  choices: [
    { label: "A", text: "White dwarf, 1.4 solar masses" },
    { label: "B", text: "White dwarf, 3.0 solar masses" },
    { label: "C", text: "Neutron star, 1.4 solar masses" },
    { label: "D", text: "Neutron star, 3.0 solar masses" },
    { label: "E", text: "Solar system, 3.0 solar masses" },
  ],

  correctAnswer: "A",

  explanation: "A planetary nebula leaves behind a white dwarf; the approximate maximum stable white-dwarf mass is the 1.4-solar-mass Chandrasekhar limit.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 6.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 7,
  difficulty: "Intermediate",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Angular Momentum",
  tags: [
    "Jupiter",
    "angular momentum",
    "orbital velocity",
    "semi-major axis",
    "SI units",
  ],
  type: "MCQ",

  questionText: "The mean orbital velocity of Jupiter is 13.1 km/s, its mass is 1.9 × 10²⁷ kg, and its orbit has a semi-major axis of 7.9 × 10⁸ km. What is its angular momentum, in SI units (Joule-seconds)?",

  choices: [
    { label: "A", text: "9.0 × 10⁴²" },
    { label: "B", text: "2.6 × 10⁴⁷" },
    { label: "C", text: "1.6 × 10⁵⁵" },
    { label: "D", text: "2.0 × 10⁴³" },
    { label: "E", text: "2.5 × 10³⁵" },
  ],

  correctAnswer: "D",

  explanation: "Approximating Jupiter's orbital angular momentum as L = mvr gives about 2.0 × 10⁴³ J·s.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 7.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 8,
  difficulty: "Advanced",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Synodic Period",
  tags: [
    "synodic period",
    "orbital periods",
    "planetary motion",
    "Kepler's law",
  ],
  type: "MCQ",

  questionText: "In a distant solar system, two planets, A and B, orbit a central main sequence star, like our sun. A day on Planet A lasts 20 Earth hours, and there are 240 such days in a year on Planet A. Likewise, a day on Planet B lasts 38 hours, and there are 220 such days in a year on Planet B. What is the synodic period with respect to these two planets, in Earth years?",

  choices: [
    { label: "A", text: "1.1" },
    { label: "B", text: "1.2" },
    { label: "C", text: "1.3" },
    { label: "D", text: "1.4" },
    { label: "E", text: "1.5" },
  ],

  correctAnswer: "C",

  explanation: "First convert the two planetary years to Earth years, then use 1/S = |1/P₁ − 1/P₂|. This gives a synodic period of about 1.3 Earth years.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 8.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 9,
  difficulty: "Beginner",
  topic: "Solar System & Planetary Science",
  subtopic: "Orbital Resonances",
  tags: [
    "Kirkwood gaps",
    "asteroid belt",
    "Jupiter",
    "orbital resonance",
  ],
  type: "MCQ",

  questionText: "Which of the Solar System planets causes the “Kirkwood Gaps” found in the asteroid belt?",

  choices: [
    { label: "A", text: "Earth" },
    { label: "B", text: "Jupiter" },
    { label: "C", text: "Saturn" },
    { label: "D", text: "Uranus" },
    { label: "E", text: "Neptune" },
  ],

  correctAnswer: "B",

  explanation: "Kirkwood gaps are depleted regions in the asteroid belt caused mainly by mean-motion resonances with Jupiter.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 9.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 10,
  difficulty: "Intermediate",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Escape Velocity",
  tags: [
    "escape velocity",
    "planet mass",
    "planet radius",
    "Earth",
  ],
  type: "MCQ",

  questionText: "Calculate the escape velocity from a planet with twice the mass and 1/3 the radius of Earth.",

  choices: [
    { label: "A", text: "9.2 km/s" },
    { label: "B", text: "11.2 km/s" },
    { label: "C", text: "13.7 km/s" },
    { label: "D", text: "21.2 km/s" },
    { label: "E", text: "27.4 km/s" },
  ],

  correctAnswer: "E",

  explanation: "Escape velocity scales as √(M/R). Relative to Earth, it increases by √(2/(1/3)) = √6, yielding about 27.4 km/s.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 10.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 11,
  difficulty: "Intermediate",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Black Holes",
  tags: [
    "black hole",
    "Schwarzschild radius",
    "neutron stars",
    "solar mass",
  ],
  type: "MCQ",

  questionText: "Two neutron stars, each with a mass of 3 solar masses, merge to form a black hole. Assuming no mass is lost, find the radius of the black hole.",

  choices: [
    { label: "A", text: "2.2 km" },
    { label: "B", text: "4.4 km" },
    { label: "C", text: "8.8 km" },
    { label: "D", text: "17.7 km" },
    { label: "E", text: "6.6 × 10¹⁰ km" },
  ],

  correctAnswer: "D",

  explanation: "The final mass is 6 solar masses. A Schwarzschild radius is approximately 2.95 km per solar mass, giving about 17.7 km.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 11.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 12,
  difficulty: "Advanced",
  topic: "Observational Astronomy & Telescopes",
  subtopic: "Angular Resolution",
  tags: [
    "Hellas Planitia",
    "Mars",
    "Rayleigh criterion",
    "telescope aperture",
    "V-band",
  ],
  type: "MCQ",

  questionText: "What size telescope is needed to resolve Hellas Planitia (a 2,300 km wide crater) on Mars through a v-band filter (effective wavelength = 550 nm) when Mars is 54.6 million km from Earth?",

  choices: [
    { label: "A", text: "34.8 mm" },
    { label: "B", text: "26.1 mm" },
    { label: "C", text: "15.9 mm" },
    { label: "D", text: "10.6 mm" },
    { label: "E", text: "7.7 mm" },
  ],

  correctAnswer: "C",

  explanation: "Hellas Planitia subtends a small angle at the stated distance. Applying the Rayleigh criterion at 550 nm gives an aperture of about 15.9 mm.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 12.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 13,
  difficulty: "Beginner",
  topic: "Celestial Coordinates & Time",
  subtopic: "Moon Phases",
  tags: [
    "Moon phases",
    "moonrise",
    "sunset",
    "full Moon",
  ],
  type: "MCQ",

  questionText: "Fifteen minutes after sunset, you look west and see the moon rising. What phase is the moon in?",

  choices: [
    { label: "A", text: "New" },
    { label: "B", text: "First Quarter" },
    { label: "C", text: "Waxing Gibbous" },
    { label: "D", text: "Full" },
    { label: "E", text: "Waning Crescent" },
  ],

  correctAnswer: "D",

  explanation: "A full Moon rises near sunset because it is opposite the Sun in the sky.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 13.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 14,
  difficulty: "Intermediate",
  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Cosmological Redshift",
  tags: [
    "redshift",
    "H-alpha",
    "spectral lines",
    "galaxies",
    "wavelength",
  ],
  type: "MCQ",

  questionText: "When taking the spectrum of a galaxy with redshift z=1, the H-alpha line (λ=656 nm) appears at what wavelength?",

  choices: [
    { label: "A", text: "32.6 nm" },
    { label: "B", text: "326 nm" },
    { label: "C", text: "656 nm" },
    { label: "D", text: "1312 nm" },
    { label: "E", text: "6563 nm" },
  ],

  correctAnswer: "D",

  explanation: "Observed wavelength is λ_obs = (1 + z)λ_emit. With z = 1, the H-alpha wavelength doubles to 1312 nm.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 14.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 15,
  difficulty: "Intermediate",
  topic: "Deep-Sky Objects & Catalogs",
  subtopic: "Messier Objects",
  tags: [
    "Messier catalog",
    "M27",
    "Dumbbell Nebula",
    "Vulpecula",
    "planetary nebula",
  ],
  type: "MCQ",

  questionText: "Which of the following Messier objects is grouped incorrectly with its type and constellation?",

  choices: [
    { label: "A", text: "M4, globular cluster, Scorpius" },
    { label: "B", text: "M27, spiral galaxy, Sagittarius" },
    { label: "C", text: "M42, emission nebula, Orion" },
    { label: "D", text: "M57, planetary nebula, Lyra" },
    { label: "E", text: "M87, elliptical galaxy, Virgo" },
  ],

  correctAnswer: "B",

  explanation: "M27 is the Dumbbell Nebula, a planetary nebula in Vulpecula, not a spiral galaxy in Sagittarius.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 15.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 16,
  difficulty: "Advanced",
  topic: "Stars & Stellar Evolution",
  subtopic: "Distance Modulus and Extinction",
  tags: [
    "apparent magnitude",
    "extinction",
    "luminosity",
    "distance modulus",
    "parsecs",
  ],
  type: "MCQ",

  questionText: "Star X has an apparent magnitude of 5.7 and is located 26.3 pc from the Sun. If there are 2.0 magnitudes of extinction to Star X, what its luminosity?",

  choices: [
    { label: "A", text: "1.6 solar luminosities" },
    { label: "B", text: "8.0 solar luminosities" },
    { label: "C", text: "9.8 solar luminosities" },
    { label: "D", text: "19.6 solar luminosities" },
    { label: "E", text: "25.6 solar luminosities" },
  ],

  correctAnswer: "D",

  explanation: "Correcting the apparent magnitude for 2.0 magnitudes of extinction, then applying the distance modulus and magnitude-luminosity relation, gives about 19.6 solar luminosities.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 16.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 17,
  difficulty: "Advanced",
  topic: "Stars & Stellar Evolution",
  subtopic: "Binary-Star Dynamics",
  tags: [
    "binary stars",
    "parallax",
    "orbital period",
    "Kepler's third law",
    "stellar mass",
  ],
  type: "MCQ",

  questionText: "In a nearby star system, two stars are seen to orbit each other every 8 years. At their closest, the stars are 2” apart. At their furthest, they are 18” apart. If a parallax of 0.5” is observed for the star system, what is its combined mass in solar masses? Assume an inclination of 90 degrees.",

  choices: [
    { label: "A", text: "0.5" },
    { label: "B", text: "1" },
    { label: "C", text: "2" },
    { label: "D", text: "4" },
    { label: "E", text: "8" },
  ],

  correctAnswer: "D",

  explanation: "The supplied official answer key identifies choice D. The PDF does not state enough orbital-geometry detail to reproduce that value unambiguously from the printed separations, so this item should remain in review before publication.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 17.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 18,
  difficulty: "Advanced",
  topic: "Celestial Coordinates & Time",
  subtopic: "Sidereal Time",
  tags: [
    "Triangulum Galaxy",
    "right ascension",
    "local sidereal time",
    "culmination",
    "transit",
  ],
  type: "MCQ",

  questionText: "The Triangulum Galaxy has coordinates (RA: 1.564h, Dec: 30.660°). Which answer is closest to the local time at which it reaches its maximum elevation above the horizon on the night of September 18-19? Ignore daylight savings.",

  choices: [
    { label: "A", text: "11:54 pm" },
    { label: "B", text: "12:21 am" },
    { label: "C", text: "12:48 am" },
    { label: "D", text: "1:15 am" },
    { label: "E", text: "1:42 am" },
  ],

  correctAnswer: "E",

  explanation: "Maximum elevation occurs at meridian transit, when local sidereal time equals the object's right ascension. The intended local-time calculation gives 1:42 am.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 18.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 19,
  difficulty: "Advanced",
  topic: "Stars & Stellar Evolution",
  subtopic: "Stellar Radius",
  tags: [
    "Wien's law",
    "absolute magnitude",
    "luminosity",
    "stellar radius",
    "Stefan-Boltzmann law",
  ],
  type: "MCQ",

  questionText: "The peak wavelength of radiation from a certain star is 644 nm. If the absolute magnitude of this star is -0.17, what is its radius?",

  choices: [
    { label: "A", text: "13.4 solar radii" },
    { label: "B", text: "16.5 solar radii" },
    { label: "C", text: "17.8 solar radii" },
    { label: "D", text: "19.8 solar radii" },
    { label: "E", text: "20.5 solar radii" },
  ],

  correctAnswer: "B",

  explanation: "Wien's law gives the temperature from the peak wavelength; the absolute magnitude gives luminosity. Combining that luminosity with L ∝ R²T⁴ yields about 16.5 solar radii.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 19.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "Practice Round",
  questionNumber: 20,
  difficulty: "Advanced",
  topic: "Exoplanets & Planetary Systems",
  subtopic: "Astrometric Detection",
  tags: [
    "Jupiter",
    "astrometry",
    "stellar wobble",
    "microarcseconds",
    "exoplanets",
  ],
  type: "MCQ",

  questionText: "Jupiter has a mass of 1.9 × 10²⁷ kg and a semimajor axis of 5.2 AU. Assume someone “out there” can resolve star positions to 10 microarcseconds. What is the maximum distance from the Sun at which the planet Jupiter could be discovered by observing the wobble of the Sun?",

  choices: [
    { label: "A", text: "5 pc" },
    { label: "B", text: "15 pc" },
    { label: "C", text: "50 pc" },
    { label: "D", text: "150 pc" },
    { label: "E", text: "500 pc" },
  ],

  correctAnswer: "E",

  explanation: "The Sun's barycentric semimajor axis from Jupiter is about 0.005 AU. At a 10-microarcsecond threshold, this wobble is detectable out to roughly 500 pc.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-practice-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO Practice Round 2015, Question 20.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 1,
  difficulty: "Beginner",
  topic: "Observational Astronomy & Telescopes",
  subtopic: "Angular Measurement",
  tags: [
    "angular size",
    "fist at arm's length",
    "degrees",
    "sky observing",
  ],
  type: "MCQ",

  questionText: "At arms length, the width of a fist typically subtends how many degrees of arc?",

  choices: [
    { label: "A", text: "1°" },
    { label: "B", text: "5°" },
    { label: "C", text: "10°" },
    { label: "D", text: "15°" },
    { label: "E", text: "20°" },
  ],

  correctAnswer: "C",

  explanation: "A fist held at arm's length is a common observing aid for estimating an angular width of about 10°.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 1,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 1.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 2,
  difficulty: "Beginner",
  topic: "Celestial Coordinates & Time",
  subtopic: "Lunar Eclipses",
  tags: [
    "lunar eclipse",
    "line of nodes",
    "Moon phases",
    "full Moon",
  ],
  type: "MCQ",

  questionText: "To have a lunar eclipse, the line of nodes must be pointing at the sun. The moon must also be in what phase?",

  choices: [
    { label: "A", text: "New" },
    { label: "B", text: "First Quarter" },
    { label: "C", text: "Waxing Gibbous" },
    { label: "D", text: "Full" },
    { label: "E", text: "Waning Crescent" },
  ],

  correctAnswer: "D",

  explanation: "A lunar eclipse requires the full Moon to pass through Earth's shadow near a lunar node.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 1,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 2.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 3,
  difficulty: "Intermediate",
  topic: "Solar System & Planetary Science",
  subtopic: "Planetary Motion",
  tags: [
    "Mars",
    "constellations",
    "orbital period",
    "zodiac",
    "heliocentric motion",
  ],
  type: "MCQ",

  questionText: "Mars orbits the sun once every 687 days. Suppose Mars is currently in the constellation Virgo. What constellation will it most likely be in a year from now?",

  choices: [
    { label: "A", text: "Virgo" },
    { label: "B", text: "Scorpius" },
    { label: "C", text: "Aquarius" },
    { label: "D", text: "Taurus" },
    { label: "E", text: "Cancer" },
  ],

  correctAnswer: "C",

  explanation: "Mars advances only partway around its orbit in one Earth year. The intended sky-position estimate shifts it from Virgo to Aquarius.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 1,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 3.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 4,
  difficulty: "Intermediate",
  topic: "Observational Astronomy & Telescopes",
  subtopic: "Telescope Field of View",
  tags: [
    "field of view",
    "Capella",
    "declination",
    "sidereal drift",
    "telescope",
  ],
  type: "MCQ",

  questionText: "To calculate the field of view of a telescope, you measure the time it takes Capella (RA:5.27h, dec:45.98°) to pass across the eyepiece. If the measured time is 2 minutes and 30 seconds, what is the field of view in arcseconds?",

  choices: [
    { label: "A", text: "11.6’" },
    { label: "B", text: "26.5’" },
    { label: "C", text: "37.5’" },
    { label: "D", text: "52.5’" },
    { label: "E", text: "66.8" },
  ],

  correctAnswer: "B",

  explanation: "The sky drift rate is reduced by cos(declination). Applying it over 150 seconds gives a field of view close to 26.5 arcminutes.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 1,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 4.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 5,
  difficulty: "Intermediate",
  topic: "Observational Astronomy & Telescopes",
  subtopic: "Imaging Field of View",
  tags: [
    "CCD",
    "field of view",
    "focal length",
    "smartphone telescope",
    "angular size",
  ],
  type: "MCQ",

  questionText: "A telescope with focal length of 20 mm and aperture of 10 mm is connected to your smartphone, which has a CCD that measures 4.0mm by 4.0mm. The CCD is 1024 by 1024 pixels. Which is closest to the field of view of the telescope?",

  choices: [
    { label: "A", text: "1°" },
    { label: "B", text: "5°" },
    { label: "C", text: "10°" },
    { label: "D", text: "15°" },
    { label: "E", text: "20°" },
  ],

  correctAnswer: "C",

  explanation: "For small angles, the CCD width divided by focal length is 4/20 radians, or about 11.5°. The nearest choice is 10°.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 1,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 5.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 6,
  difficulty: "Intermediate",
  topic: "Observational Astronomy & Telescopes",
  subtopic: "Image Scale",
  tags: [
    "CCD",
    "arcseconds per pixel",
    "image scale",
    "field of view",
    "pixels",
  ],
  type: "MCQ",

  questionText: "What is its the resolution in arcseconds per pixel?",

  choices: [
    { label: "A", text: "10”/pixel" },
    { label: "B", text: "40”/pixel" },
    { label: "C", text: "120”/pixel" },
    { label: "D", text: "1200”/pixel" },
    { label: "E", text: "3600’/pixel" },
  ],

  correctAnswer: "B",

  explanation: "The approximately 10° field of view divided by 1024 pixels corresponds to about 40 arcseconds per pixel.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 6.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 7,
  difficulty: "Intermediate",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Kepler's Third Law",
  tags: [
    "Comet 67P",
    "Kepler's third law",
    "semi-major axis",
    "orbital period",
    "comets",
  ],
  type: "MCQ",

  questionText: "Comet 67P/Churyumov–Gerasimenko has an orbital period around the Sun of 6.44 years. What is its semimajor axis, in AU?",

  choices: [
    { label: "A", text: "41.47" },
    { label: "B", text: "16.34" },
    { label: "C", text: "6.44" },
    { label: "D", text: "3.46" },
    { label: "E", text: "1.86" },
  ],

  correctAnswer: "D",

  explanation: "Using P² = a³, a = P^(2/3) ≈ 3.46 AU.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 7.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 8,
  difficulty: "Intermediate",
  topic: "Exoplanets & Planetary Systems",
  subtopic: "Exoplanet Detection",
  tags: [
    "exoplanets",
    "radial velocity",
    "planet mass",
    "Doppler shift",
    "detection methods",
  ],
  type: "MCQ",

  questionText: "Which of the following techniques most directly constrains the mass of an exoplanet?",

  choices: [
    { label: "A", text: "Radial Velocity" },
    { label: "B", text: "Transit Timing" },
    { label: "C", text: "Microlensing" },
    { label: "D", text: "Direct Imaging" },
    { label: "E", text: "Proper Motion" },
  ],

  correctAnswer: "A",

  explanation: "The radial-velocity amplitude depends directly on the companion's mass, subject to the inclination factor sin i.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 8.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 9,
  difficulty: "Intermediate",
  topic: "Galaxies & Extragalactic Astronomy",
  subtopic: "Tully-Fisher Relation",
  tags: [
    "Tully-Fisher relation",
    "galaxies",
    "luminosity",
    "rotational velocity",
  ],
  type: "MCQ",

  questionText: "Which two properties of galaxies does the Tully-Fisher relation utilize a correlation between?",

  choices: [
    { label: "A", text: "Luminosity and velocity dispersion" },
    { label: "B", text: "Luminosity and rotational velocity" },
    { label: "C", text: "Radius and metallicity" },
    { label: "D", text: "Luminosity and metallicity" },
    { label: "E", text: "Mass and surface brightness" },
  ],

  correctAnswer: "B",

  explanation: "The Tully-Fisher relation links the luminosity of a spiral galaxy to its rotational velocity.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 9.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 10,
  difficulty: "Intermediate",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Binary-Star Center of Mass",
  tags: [
    "binary stars",
    "center of mass",
    "masses",
    "circular orbits",
  ],
  type: "MCQ",

  questionText: "A binary star system has two components: Star A and Star B. Star A has a mass of 5 solar masses, and Star B has the same mass as our Sun. Assuming circular orbits, how many times closer to the center of mass of the system is Star A than Star B?",

  choices: [
    { label: "A", text: "1" },
    { label: "B", text: "3" },
    { label: "C", text: "5" },
    { label: "D", text: "10" },
    { label: "E", text: "25" },
  ],

  correctAnswer: "C",

  explanation: "For a binary, m_A r_A = m_B r_B. Since Star A is five times as massive, it lies five times closer to the center of mass.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 2,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 10.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 11,
  difficulty: "Intermediate",
  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Wien's Law",
  tags: [
    "Wien's law",
    "blackbody radiation",
    "peak wavelength",
    "stellar temperature",
  ],
  type: "MCQ",

  questionText: "What is, approximately, the peak wavelength of electromagnetic radiation emitted by a star at a temperature of 5,000 K?",

  choices: [
    { label: "A", text: "580 Angstroms" },
    { label: "B", text: "5,800 Angstroms" },
    { label: "C", text: "4,600 Angstroms" },
    { label: "D", text: "2,900 Angstroms" },
    { label: "E", text: "58,000 Angstroms" },
  ],

  correctAnswer: "B",

  explanation: "Wien's law gives λ_max ≈ 2.9 × 10⁶ nm·K / 5000 K ≈ 580 nm = 5800 Å.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 11.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 12,
  difficulty: "Intermediate",
  topic: "Stars & Stellar Evolution",
  subtopic: "Stellar Parallax",
  tags: [
    "parallax",
    "stellar distance",
    "background stars",
    "annual motion",
  ],
  type: "MCQ",

  questionText: "Stars A and B are observed over a period of 1 year. Both stars appear to move with respect to the background stars from the position indicated on the left in the diagram below, to the position indicated on the right, and then back to the position on the left over the full year. Which star is further from the Earth?",

  choices: [
    { label: "A", text: "Star A" },
    { label: "B", text: "Star B" },
    { label: "C", text: "Both stars are the same distance from the Earth" },
    { label: "D", text: "Not enough information given" },
  ],

  correctAnswer: "B",

  explanation: "The source diagram shows Star B with the smaller annual parallax displacement. A smaller parallax corresponds to a greater distance.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 12. The question depends on the diagram printed on the source PDF page.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 13,
  difficulty: "Beginner",
  topic: "Stars & Stellar Evolution",
  subtopic: "Stellar Parallax",
  tags: [
    "parallax",
    "parsecs",
    "stellar distance",
    "arcseconds",
  ],
  type: "MCQ",

  questionText: "Suppose that you measure the parallax angle for a particular star to be 0.25 arcsecond. The distance to this star is",

  choices: [
    { label: "A", text: "2 pc" },
    { label: "B", text: "0.5 ly" },
    { label: "C", text: "2 ly" },
    { label: "D", text: "4 pc" },
    { label: "E", text: "0.5 pc" },
  ],

  correctAnswer: "D",

  explanation: "Distance in parsecs is the reciprocal of parallax in arcseconds: d = 1/0.25 = 4 pc.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 13.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 14,
  difficulty: "Beginner",
  topic: "Stars & Stellar Evolution",
  subtopic: "Main-Sequence Fusion",
  tags: [
    "main sequence",
    "hydrogen fusion",
    "helium",
    "stellar energy",
  ],
  type: "MCQ",

  questionText: "On the main sequence, stars obtain their energy",

  choices: [
    { label: "A", text: "from chemical reactions." },
    { label: "B", text: "from gravitational contraction." },
    { label: "C", text: "by converting hydrogen to helium." },
    { label: "D", text: "by converting helium to carbon, nitrogen, and oxygen." },
    { label: "E", text: "from nuclear fission." },
  ],

  correctAnswer: "C",

  explanation: "Main-sequence stars generate energy mainly by fusing hydrogen into helium in their cores.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 14.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 15,
  difficulty: "Intermediate",
  topic: "Stars & Stellar Evolution",
  subtopic: "Stefan-Boltzmann Law",
  tags: [
    "luminosity",
    "stellar radius",
    "surface temperature",
    "Stefan-Boltzmann law",
  ],
  type: "MCQ",

  questionText: "Star A has a radius that is 2 times larger than the radius of star B, and a surface temperature that is 2 times smaller than the surface temperature of star B. Therefore, star A is",

  choices: [
    { label: "A", text: "4 times more luminous than star B." },
    { label: "B", text: "16 times less luminous than star B." },
    { label: "C", text: "16 times more luminous than star B." },
    { label: "D", text: "as luminous as star B." },
    { label: "E", text: "4 times less luminous than star B." },
  ],

  correctAnswer: "E",

  explanation: "Luminosity scales as R²T⁴. The ratio is 2² × (1/2)⁴ = 1/4, so Star A is four times less luminous.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 3,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 15.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 16,
  difficulty: "Intermediate",
  topic: "Stars & Stellar Evolution",
  subtopic: "Distance Modulus",
  tags: [
    "apparent magnitude",
    "distance modulus",
    "main sequence",
    "parsecs",
  ],
  type: "MCQ",

  questionText: "A and B, two main sequence stars of the same spectral class, have apparent magnitudes of 17 and 12, respectively. If star A is 1 kpc away, what is the distance to star B?",

  choices: [
    { label: "A", text: "10 pc." },
    { label: "B", text: "100 pc." },
    { label: "C", text: "10 kpc." },
    { label: "D", text: "50 pc." },
    { label: "E", text: "100 kpc." },
  ],

  correctAnswer: "B",

  explanation: "Same spectral class implies the same absolute magnitude. A five-magnitude difference means a factor of 10 in distance, so Star B is 100 pc away.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 16.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 17,
  difficulty: "Intermediate",
  topic: "Cosmology",
  subtopic: "Dark Energy",
  tags: [
    "dark energy",
    "vacuum energy",
    "cosmic microwave background",
    "density",
  ],
  type: "MCQ",

  questionText: "Given that dark energy is vacuum energy, and that the densities of dark energy, dark matter and normal matter in the universe are currently ρ_Λ = 6.7 × 10⁻³⁰ g/cm³, ρ_DM = 2.4 × 10⁻³⁰ g/cm³ and ρ_Λ = 0.5 × 10⁻³⁰ g/cm³, what is the ratio of the density of dark energy at the time of the cosmic microwave background emission, to the current density of dark energy?",

  choices: [
    { label: "A", text: "0.432" },
    { label: "B", text: "2.31" },
    { label: "C", text: "1" },
    { label: "D", text: "2.5" },
    { label: "E", text: "0.5" },
  ],

  correctAnswer: "C",

  explanation: "Vacuum energy has a constant energy density as the universe expands, so the ratio is 1.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 17.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 18,
  difficulty: "Advanced",
  topic: "Cosmology",
  subtopic: "Hubble Time",
  tags: [
    "Type Ia supernova",
    "redshift",
    "Hubble time",
    "Hubble law",
    "cosmology",
  ],
  type: "MCQ",

  questionText: "A type Ia supernova was observed in a galaxy with a redshift of 0.03. The supernova was determined to be 1.3 × 10⁸ pc away from Earth. Determine the Hubble time using this observation.",

  choices: [
    { label: "A", text: "1.41 × 10¹⁰ years" },
    { label: "B", text: "1.41 × 10¹⁰ seconds" },
    { label: "C", text: "1.33 × 10⁹ years" },
    { label: "D", text: "47.1 years" },
    { label: "E", text: "1.33 × 10⁹ seconds" },
  ],

  correctAnswer: "A",

  explanation: "For small redshift, v ≈ zc and H₀ ≈ v/d. The reciprocal Hubble time d/(zc) is about 1.41 × 10¹⁰ years.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 18.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 19,
  difficulty: "Beginner",
  topic: "Stars & Stellar Evolution",
  subtopic: "Hydrostatic Equilibrium",
  tags: [
    "main sequence",
    "hydrostatic equilibrium",
    "radiation pressure",
    "gravity",
  ],
  type: "MCQ",

  questionText: "In a main sequence star, gravitational collapse is counteracted by:",

  choices: [
    { label: "A", text: "Radiation pressure" },
    { label: "B", text: "Heat" },
    { label: "C", text: "Neutrinos" },
    { label: "D", text: "Electron degeneracy pressure" },
    { label: "E", text: "Neutron degeneracy pressure" },
  ],

  correctAnswer: "A",

  explanation: "In a main-sequence star, outward pressure from hot gas and radiation balances inward gravity; among the choices, radiation pressure is the intended answer.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 19.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 20,
  difficulty: "Intermediate",
  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Doppler Shift",
  tags: [
    "hydrogen alpha",
    "Doppler shift",
    "radial velocity",
    "spectral lines",
  ],
  type: "MCQ",

  questionText: "If the hydrogen alpha line of a star, normally 656.3 nm, is observed to be 662.5 nm, what is the star’s radial velocity relative to the Earth?",

  choices: [
    { label: "A", text: "2.83*10⁶ m/s" },
    { label: "B", text: "-2.83*10⁶ m/s" },
    { label: "C", text: "0.00945 m/s" },
    { label: "D", text: "-0.00945 m/s" },
    { label: "E", text: "-2.83*10³ m/s" },
  ],

  correctAnswer: "B",

  explanation: "The fractional wavelength shift gives a speed magnitude of cΔλ/λ ≈ 2.83 × 10⁶ m/s. The official key uses the negative sign in choice B for this redshifted line.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 4,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 20.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 21,
  difficulty: "Intermediate",
  topic: "Stars & Stellar Evolution",
  subtopic: "Stellar Energy Transport",
  tags: [
    "M-type stars",
    "convection",
    "energy transport",
    "stellar interiors",
  ],
  type: "MCQ",

  questionText: "Within M-type stars, heat transfer occurs primarily through:",

  choices: [
    { label: "A", text: "radiation" },
    { label: "B", text: "conduction" },
    { label: "C", text: "convection" },
    { label: "D", text: "contraction" },
    { label: "E", text: "collapse" },
  ],

  correctAnswer: "C",

  explanation: "Low-mass M-type stars transport energy primarily by convection and can be nearly fully convective.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 5,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 21.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 22,
  difficulty: "Advanced",
  topic: "Exoplanets & Planetary Systems",
  subtopic: "Radial Velocity",
  tags: [
    "radial velocity",
    "exoplanets",
    "minimum mass",
    "orbital period",
    "stellar mass",
  ],
  type: "MCQ",

  questionText: "If a 1.2 solar mass star shows a radial velocity variation with a period of 9.2 days and amplitude of 32 m/s, estimate the minimum mass of the companion:",

  choices: [
    { label: "A", text: "7.5*10²⁶ kg" },
    { label: "B", text: "1.2*10²⁶ kg" },
    { label: "C", text: "6.9*10²⁷ kg" },
    { label: "D", text: "5.1*10¹⁵ kg" },
    { label: "E", text: "3.3*10²⁷ kg" },
  ],

  correctAnswer: "A",

  explanation: "Using the radial-velocity mass function in the small-companion limit gives a minimum companion mass of approximately 7.5 × 10²⁶ kg.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 5,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 22.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 23,
  difficulty: "Advanced",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Hohmann Transfer",
  tags: [
    "Hohmann transfer",
    "Venus",
    "phase angle",
    "interplanetary travel",
    "orbital mechanics",
  ],
  type: "MCQ",

  questionText: "Calculate the planetary phase angle (counterclockwise from Earth, a = 1.0 AU) that a probe may correctly complete a Hohmann transfer orbit to Venus (a = 0.7 AU)",

  choices: [
    { label: "A", text: "141 degrees" },
    { label: "B", text: "17.5 degrees" },
    { label: "C", text: "121 degrees" },
    { label: "D", text: "241 degrees" },
    { label: "E", text: "343 degrees" },
  ],

  correctAnswer: "D",

  explanation: "For an inward Hohmann transfer, Venus must be at the appropriate trailing phase angle at departure. The intended counterclockwise phase angle is 241°.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 5,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 23.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 24,
  difficulty: "Advanced",
  topic: "Solar System & Planetary Science",
  subtopic: "Planetary Equilibrium Temperature",
  tags: [
    "Mars",
    "albedo",
    "blackbody equilibrium",
    "temperature",
    "solar radiation",
  ],
  type: "MCQ",

  questionText: "Calculate the blackbody equilibrium temperature of Mars. Take Mars’s albedo to be 0.25 and semimajor axis to be 1.5 AU",

  choices: [
    { label: "A", text: "300 K" },
    { label: "B", text: "212 K" },
    { label: "C", text: "161 K" },
    { label: "D", text: "228 K" },
    { label: "E", text: "260 K" },
  ],

  correctAnswer: "B",

  explanation: "Using Mars's absorbed solar flux with albedo 0.25 at 1.5 AU gives an equilibrium temperature near 212 K.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 5,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 24.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 25,
  difficulty: "Advanced",
  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Vis-Viva Equation",
  tags: [
    "satellite orbit",
    "Earth",
    "vis-viva equation",
    "semi-major axis",
    "orbital velocity",
  ],
  type: "MCQ",

  questionText: "Calculate the semimajor axis of a satellite orbiting the Earth with a velocity of 8.3 km/s at a distance of 300 km from the Earth’s surface.",

  choices: [
    { label: "A", text: "154 km" },
    { label: "B", text: "308 km" },
    { label: "C", text: "15800 km" },
    { label: "D", text: "7900 km" },
    { label: "E", text: "3950 km" },
  ],

  correctAnswer: "D",

  explanation: "Using the vis-viva equation with r equal to Earth's radius plus 300 km yields a semimajor axis of about 7900 km.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 5,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 25.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 26,
  difficulty: "Intermediate",
  topic: "Celestial Coordinates & Time",
  subtopic: "Lunar Occultations",
  tags: [
    "Moon",
    "occultation",
    "Aldebaran",
    "right ascension",
    "full Moon",
  ],
  type: "MCQ",

  questionText: "On the night of December 23rd-24th 2015, an occultation of a bright star by the moon will be visible from Britain to Japan. Given that the moon is in full phase on December 25th, which star does the moon occult?",

  choices: [
    { label: "A", text: "Aldebaran (RA 4h 37m, Dec 16° 31’)" },
    { label: "B", text: "Pollux (RA 7h 45m, Dec 28° 2’)" },
    { label: "C", text: "Regulus (RA 10h 8m, Dec 11° 58’)" },
    { label: "D", text: "Spica (RA 13h 25m, Dec -11° 14’)" },
    { label: "E", text: "Antares (RA 16h 29, Dec -26° 26’)" },
  ],

  correctAnswer: "A",

  explanation: "Near full Moon, the Moon lies near the ecliptic opposite the Sun. The intended 2015 occultation was of Aldebaran.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 5,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 26.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 27,
  difficulty: "Advanced",
  topic: "Celestial Coordinates & Time",
  subtopic: "Solar and Sidereal Days",
  tags: [
    "Mars",
    "synodic day",
    "sidereal day",
    "Martian year",
    "rotation",
  ],
  type: "MCQ",

  questionText: "A synodic day on Mars is 24 hours and 40 minutes. If one Martian year is 687 earth-days, which of the following is closest to a sidereal day on Mars?",

  choices: [
    { label: "A", text: "23h 56m" },
    { label: "B", text: "24h 15m" },
    { label: "C", text: "24h 37m" },
    { label: "D", text: "24h 40m" },
    { label: "E", text: "24h 42m" },
  ],

  correctAnswer: "C",

  explanation: "A solar day is slightly longer than a sidereal day because Mars advances in its orbit while rotating. Applying the solar–sidereal relation gives about 24 h 37 min.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 6,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 27.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 28,
  difficulty: "Intermediate",
  topic: "Celestial Coordinates & Time",
  subtopic: "Right Ascension and Declination",
  tags: [
    "right ascension",
    "declination",
    "zenith",
    "summer solstice",
    "equator",
  ],
  type: "MCQ",

  questionText: "Suppose at the equator, a star passes through the zenith at local noon on the summer solstice. What is the right ascension and declination of the star?",

  choices: [
    { label: "A", text: "0h 0°" },
    { label: "B", text: "0h 90°" },
    { label: "C", text: "6h 0°" },
    { label: "D", text: "12h 0°" },
    { label: "E", text: "12h 90°" },
  ],

  correctAnswer: "C",

  explanation: "At the equator, a zenith object has declination 0°. At local noon on the June solstice, the meridian right ascension is approximately 6 h.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 6,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 28.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 29,
  difficulty: "Advanced",
  topic: "Exoplanets & Planetary Systems",
  subtopic: "Angular Orbit Size",
  tags: [
    "exoplanets",
    "Kepler's third law",
    "angular size",
    "inclination",
    "projected orbit",
  ],
  type: "MCQ",

  questionText: "40 light years away, an exoplanet orbits a star of 5 solar masses every 14 years. Assuming this system has an inclination of 90˚ as viewed from Earth, what is the projected diameter of the exoplanet’s orbit as viewed from Earth?",

  choices: [
    { label: "A", text: "0.3”" },
    { label: "B", text: "0.8”" },
    { label: "C", text: "1.6”" },
    { label: "D", text: "2.5”" },
    { label: "E", text: "1.2”" },
  ],

  correctAnswer: "C",

  explanation: "Kepler's third law gives a semimajor axis near 10 AU. Its 20-AU diameter at 40 light years subtends about 1.6 arcseconds.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 6,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 29.",
  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2015,
  examName: "First Round",
  questionNumber: 30,
  difficulty: "Advanced",
  topic: "Observational Astronomy & Telescopes",
  subtopic: "Diffraction Limit",
  tags: [
    "diffraction limit",
    "telescope aperture",
    "angular resolution",
    "exoplanet orbit",
    "wavelength",
  ],
  type: "MCQ",

  questionText: "A planet orbits a star with a projected semimajor axis of 0.24”. What is the necessary aperture size of a telescope than can resolve this orbit using 1000 nm light?",

  choices: [
    { label: "A", text: "0.13 m" },
    { label: "B", text: "0.52 m" },
    { label: "C", text: "1.05 m" },
    { label: "D", text: "3.10 m" },
    { label: "E", text: "2.04 m" },
  ],

  correctAnswer: "B",

  explanation: "The orbit's projected diameter is 0.48 arcseconds. Applying the Rayleigh criterion at 1000 nm gives an aperture close to 0.52 m.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-exam.pdf",
  pageNumber: 6,
  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2015-first-round-solutions.pdf",
  answerKeyPageNumber: 1,
  attributionText: "Source: USAAAO First Round 2015, Question 30.",
  permissionStatus: "needs-review",
  status: "draft",
},

  // 2016–2017
{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 1,

  difficulty: "Intermediate",

  topic: "Stars & Stellar Evolution",
  subtopic: "Standard Candles & Distance Modulus",
  tags: [
    "RR Lyrae",
    "absolute magnitude",
    "apparent magnitude",
    "distance modulus",
    "kiloparsecs",
  ],

  type: "MCQ",

  questionText: "All RR Lyrae variables have an absolute magnitude M of approximately 0.75. If an RR Lyrae star is observed with an apparent magnitude of 16.0, what is the distance to the star in kpc?",

  choices: [
    { label: "A", text: "11.2 kpc" },
    { label: "B", text: "17.6 kpc" },
    { label: "C", text: "27.3 kpc" },
    { label: "D", text: "36.5 kpc" },
    { label: "E", text: "47.7 kpc" },
  ],

  correctAnswer: "A",

  explanation: "Using m − M = 5 log₁₀(d/10 pc), the distance is about 1.12 × 10⁴ pc, or 11.2 kpc.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 1,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 1.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 2,

  difficulty: "Intermediate",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Elliptical Orbits",
  tags: [
    "periapsis",
    "apoapsis",
    "ellipse",
    "orbital geometry",
    "area",
  ],

  type: "MCQ",

  questionText: "If the closest distance from a planet to its host star is 1.50 AU and its farthest distance from its host star is 4.50 AU, what is the area that this planet sweeps out over the course of a full orbit (in AU²)?",

  choices: [
    { label: "A", text: "6.00π" },
    { label: "B", text: "3.50π" },
    { label: "C", text: "1.50π" },
    { label: "D", text: "6.75π" },
    { label: "E", text: "4.50π" },
  ],

  correctAnswer: "A",

  explanation: "The official answer key marks A. However, using the usual ellipse-area calculation from the stated closest and farthest distances gives a value not represented by the listed choices, so this record preserves the official key rather than substituting a recalculated answer.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 1,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 2. The official answer key marks option A; this item should receive a content review before publication.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 3,

  difficulty: "Beginner",

  topic: "Exoplanets & Planetary Systems",
  subtopic: "Transit Photometry",
  tags: [
    "transit",
    "flux drop",
    "planet radius",
    "eclipse depth",
    "exoplanet",
  ],

  type: "MCQ",

  questionText: "A star exhibits periodic variations in brightness suggestive of a transiting companion. If the minimum stellar flux is 98.2% of the uneclipsed flux, what is the radius of the companion, in stellar radii, assuming the companion is not emitting?",

  choices: [
    { label: "A", text: "0.018 stellar radii" },
    { label: "B", text: "0.134 stellar radii" },
    { label: "C", text: "0.268 stellar radii" },
    { label: "D", text: "0.974 stellar radii" },
    { label: "E", text: "0.982 stellar radii" },
  ],

  correctAnswer: "B",

  explanation: "The transit depth is 1 − 0.982 = 0.018, which equals (Rₚ/R★)² for a dark, central transit. Taking the square root gives Rₚ/R★ ≈ 0.134.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 1,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 3.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 4,

  difficulty: "Advanced",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Vis-Viva Equation",
  tags: [
    "Moon",
    "perilune",
    "apolune",
    "orbital velocity",
    "vis-viva",
  ],

  type: "MCQ",

  questionText: "Suppose you are on the surface of the Moon, and you want to launch an object into an elliptic orbit with a perilune of 1 lunar radius and apolune of 7 lunar radii. Given that the moon has a mass of 7.44*10²² kg and a radius of 1.74*10³ km, with what speed will you have to launch the object?",

  choices: [
    { label: "A", text: "1.69 km/s" },
    { label: "B", text: "2.06 km/s" },
    { label: "C", text: "2.23 km/s" },
    { label: "D", text: "3.38 km/s" },
    { label: "E", text: "4.67 km/s" },
  ],

  correctAnswer: "C",

  explanation: "The orbit has semimajor axis 4 lunar radii. Applying the vis-viva equation at perilune gives a launch speed of about 2.23 km/s.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 1,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 4.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 5,

  difficulty: "Intermediate",

  topic: "Galaxies & Extragalactic Astronomy",
  subtopic: "Galaxy Mass from Circular Motion",
  tags: [
    "galaxy mass",
    "circular velocity",
    "Newtonian gravity",
    "solar masses",
    "rotation curve",
  ],

  type: "MCQ",

  questionText: "Estimate the minimum mass of a galaxy with a radius of 40,000 ly if stars at the edge of the galaxy orbit with a velocity of 50 km/s. Assume there is no dark matter in the galaxy. Answers are given in solar masses, with 1 solar mass = 1.99*10³⁰ kg.",

  choices: [
    { label: "A", text: "6.87*10^8" },
    { label: "B", text: "3.57*10^9" },
    { label: "C", text: "4.21*10^11" },
    { label: "D", text: "9.69*10^12" },
    { label: "E", text: "4.37*10^13" },
  ],

  correctAnswer: "B",

  explanation: "The official answer key marks B. A direct application of M = v²r/G to the stated radius and speed gives a value approximately twice as large as option B, so this record retains the official key and flags the item for content review.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 5. The official answer key marks option B; the numerical inputs merit review before publication.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 6,

  difficulty: "Advanced",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Escape Velocity",
  tags: [
    "globular cluster",
    "escape velocity",
    "mass estimate",
    "stellar dynamics",
    "parsecs",
  ],

  type: "MCQ",

  questionText: "Estimate the mass of an old globular cluster if the escape velocity at the edge of the cluster is 8.5 km/s. The cluster is made up of red stars that are all around ½ of the mass of the sun. The cluster has a radius of 100 pc. Answers are given in solar masses.",

  choices: [
    { label: "A", text: "1.2*10^4" },
    { label: "B", text: "6.8*10^4" },
    { label: "C", text: "3.1*10^5" },
    { label: "D", text: "5.6*10^5" },
    { label: "E", text: "8.4*10^5" },
  ],

  correctAnswer: "E",

  explanation: "Using vₑₛc² = 2GM/R with vₑₛc = 8.5 km/s and R = 100 pc gives approximately 8.4 × 10⁵ solar masses.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 6.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 7,

  difficulty: "Advanced",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Hohmann Transfer",
  tags: [
    "delta-v",
    "parking orbit",
    "geostationary transfer",
    "Earth orbit",
    "vis-viva",
  ],

  type: "MCQ",

  questionText: "What delta V must an earth orbiting spacecraft apply to transfer from a 200 km parking orbit to a transfer orbit with an apogee 35,786 km above the earth’s surface? (The earth has a mass of 5.972*10²⁴ and a radius of 6371 km)",

  choices: [
    { label: "A", text: "2331 m/s" },
    { label: "B", text: "2441 m/s" },
    { label: "C", text: "2543 m/s" },
    { label: "D", text: "2778 m/s" },
    { label: "E", text: "2846 m/s" },
  ],

  correctAnswer: "C",

  explanation: "Compute the circular-orbit speed at the 200 km parking orbit and the transfer-orbit speed there using vis-viva. Their difference is about 2543 m/s.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 7.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 8,

  difficulty: "Intermediate",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Escape Trajectories",
  tags: [
    "spacecraft",
    "solar escape velocity",
    "hyperbolic orbit",
    "orbital energy",
    "100 AU",
  ],

  type: "MCQ",

  questionText: "Suppose a probe has a velocity of 20 km/s when it’s 100 AU away from the Sun. What type of orbit is the probe on? The Sun has a mass of 1.99*10³⁰ kg.",

  choices: [
    { label: "A", text: "Hyperbolic" },
    { label: "B", text: "Parabolic" },
    { label: "C", text: "Elliptic" },
    { label: "D", text: "All of the above" },
    { label: "E", text: "None of the above" },
  ],

  correctAnswer: "A",

  explanation: "At 100 AU, the Sun’s escape speed is far below 20 km/s. The probe therefore has positive orbital energy and follows a hyperbolic orbit.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 8.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 9,

  difficulty: "Intermediate",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Circular-Orbit Acceleration",
  tags: [
    "Phobos",
    "Mars",
    "centripetal acceleration",
    "orbital period",
    "gravity",
  ],

  type: "MCQ",

  questionText: "Phobos orbits around 9,376 km away from the center of its host planet, Mars, and has an orbital period of 8 hours. What is the centripetal acceleration of Phobos due to Mars’ gravitational pull? The mass of Mars is 6.39*10²³ kg.",

  choices: [
    { label: "A", text: "0.011 m/s²" },
    { label: "B", text: "0.256 m/s²" },
    { label: "C", text: "0.446 m/s²" },
    { label: "D", text: "0.657 m/s²" },
    { label: "E", text: "0.781 m/s²" },
  ],

  correctAnswer: "C",

  explanation: "For circular motion, a = 4π²r/T². Substituting the orbital radius and 8-hour period gives about 0.446 m/s².",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 9.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 10,

  difficulty: "Advanced",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Vis-Viva Equation",
  tags: [
    "Mercury",
    "Sun",
    "semimajor axis",
    "perihelion",
    "orbital speed",
  ],

  type: "MCQ",

  questionText: "Mercury’s orbit around the Sun has a semimajor axis of 0.387 AU. Knowing that the mass of the Sun is 1.99*10³⁰ kg and assuming the mass of Mercury is negligible, what is Mercury’s orbital speed when it’s 0.34 AU away from the Sun in its orbit?",

  choices: [
    { label: "A", text: "18 km/s" },
    { label: "B", text: "37 km/s" },
    { label: "C", text: "54 km/s" },
    { label: "D", text: "63 km/s" },
    { label: "E", text: "71 km/s" },
  ],

  correctAnswer: "C",

  explanation: "The vis-viva equation v² = GM(2/r − 1/a) gives an orbital speed of roughly 54 km/s at 0.34 AU.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 10.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 11,

  difficulty: "Intermediate",

  topic: "Solar System & Planetary Science",
  subtopic: "Greatest Elongation",
  tags: [
    "Mercury",
    "Venus",
    "greatest elongation",
    "inner planets",
    "angular separation",
  ],

  type: "MCQ",

  questionText: "Mercury’s orbit has a semimajor axis of 0.387 AU. What would be the maximum angular separation between Mercury and the Sun as seen from Venus? Venus’s orbit has a semimajor axis of 0.719 AU. Assume both Mercury and Venus have perfectly circular orbits.",

  choices: [
    { label: "A", text: "15.5°" },
    { label: "B", text: "28.2°" },
    { label: "C", text: "32.6°" },
    { label: "D", text: "42.9°" },
    { label: "E", text: "57.4°" },
  ],

  correctAnswer: "C",

  explanation: "At greatest elongation, the line of sight from Venus to Mercury is tangent to Mercury’s orbit. Thus sin θ = 0.387/0.719, giving θ ≈ 32.6°.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 11.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 12,

  difficulty: "Advanced",

  topic: "Celestial Coordinates & Time",
  subtopic: "Geostationary Orbits & Celestial Motion",
  tags: [
    "geostationary satellite",
    "celestial equator",
    "sidereal day",
    "Earth rotation",
    "apparent motion",
  ],

  type: "MCQ",

  questionText: "A geostationary satellite orbits Earth so that it appears at all times to be at the Zenith as viewed from a fixed point somewhere on Earth’s equator. Which of the following correctly describes the satellite’s position on the celestial sphere?",

  choices: [
    { label: "A", text: "The satellite moves to the East along the celestial equator, traversing it once every sidereal day." },
    { label: "B", text: "The satellite remains stationary at a point on the celestial equator." },
    { label: "C", text: "The satellite moves to the West along the celestial equator, traversing it once every sidereal day." },
    { label: "D", text: "The satellite remains stationary at one of the celestial poles." },
  ],

  correctAnswer: "A",

  explanation: "A geostationary satellite completes one eastward orbit per sidereal day in the equatorial plane, so it moves eastward along the celestial equator.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 12.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 13,

  difficulty: "Intermediate",

  topic: "Solar System & Planetary Science",
  subtopic: "Angular Diameter",
  tags: [
    "Sun",
    "Mars",
    "angular size",
    "arcminutes",
    "small-angle approximation",
  ],

  type: "MCQ",

  questionText: "What would be the angular size of the sun as seen from Mars in arcminutes? Assume Mars orbits at a distance of 1.5 AU. (1 AU = 1.496*10⁸ km, and the radius of the sun is 695,700 km)",

  choices: [
    { label: "A", text: "0.178'" },
    { label: "B", text: "10.7'" },
    { label: "C", text: "16.0'" },
    { label: "D", text: "21.3'" },
    { label: "E", text: "32.0'" },
  ],

  correctAnswer: "D",

  explanation: "The Sun’s angular diameter scales inversely with distance. At 1.5 AU it is about two-thirds of its 32′ Earth value, or approximately 21.3′.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 13.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 14,

  difficulty: "Beginner",

  topic: "Celestial Coordinates & Time",
  subtopic: "Rising and Setting",
  tags: [
    "due east",
    "celestial equator",
    "declination",
    "horizon",
    "azimuth",
  ],

  type: "MCQ",

  questionText: "Only some stars rise (cross the horizon from below) due East (at Azimuth 90°). For an observer at Latitude 37°, Longitude 23°, these stars would be:",

  choices: [
    { label: "A", text: "Stars at Declination 37°" },
    { label: "B", text: "Stars at Declination 23°" },
    { label: "C", text: "The answer will change throughout the year" },
    { label: "D", text: "Stars at Declination 0°" },
  ],

  correctAnswer: "D",

  explanation: "A star rises due east only when it lies on the celestial equator, which has declination 0°.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 14.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 15,

  difficulty: "Intermediate",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Synodic Periods and Retrograde Motion",
  tags: [
    "Mars",
    "retrograde motion",
    "synodic period",
    "opposition",
    "planetary motion",
  ],

  type: "MCQ",

  questionText: "On March 3, 2012, Mars experienced retrograde motion. The configuration of the Sun, Mars, and Earth that led to retrograde motion repeats periodically. Given that Mars orbits the Sun once every 1.88 years, on which of these dates would you expect Mars to exhibit retrograde motion again?",

  choices: [
    { label: "A", text: "November 27, 2013" },
    { label: "B", text: "August 20, 2012" },
    { label: "C", text: "April 22, 2014" },
    { label: "D", text: "June 13, 2015" },
  ],

  correctAnswer: "C",

  explanation: "The Earth–Mars synodic period is 1/(1 − 1/1.88) years, or about 780 days. Adding this interval to March 3, 2012 gives April 22, 2014.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 15.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 16,

  difficulty: "Intermediate",

  topic: "Stars & Stellar Evolution",
  subtopic: "Luminosity and Absolute Magnitude",
  tags: [
    "Stefan-Boltzmann law",
    "radius",
    "temperature",
    "luminosity",
    "absolute magnitude",
  ],

  type: "MCQ",

  questionText: "Suppose there are two main-sequence stars, A and B. Star A has a temperature of 10,000 K, while Star B has a temperature of 5,700 K. The ratio of the radii of Star A to Star B is 3 to 2. What is the difference in absolute magnitudes between the two stars (absolute magnitude of Star B minus the absolute magnitude of Star A)?",

  choices: [
    { label: "A", text: "2.89" },
    { label: "B", text: "3.32" },
    { label: "C", text: "3.67" },
    { label: "D", text: "4.32" },
    { label: "E", text: "4.75" },
  ],

  correctAnswer: "B",

  explanation: "Using L ∝ R²T⁴ gives Lₐ/Lᵦ ≈ 21.3. The magnitude difference is 2.5 log₁₀(Lₐ/Lᵦ) ≈ 3.32.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 16.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 17,

  difficulty: "Intermediate",

  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Relativistic Doppler Shift",
  tags: [
    "active galactic nucleus",
    "hydrogen emission line",
    "redshift",
    "recessional velocity",
    "spectroscopy",
  ],

  type: "MCQ",

  questionText: "An active galactic nucleus is observed to produce a hydrogen emission line at 687.2 nm. The rest wavelength of this hydrogen emission line is 121.6 nm. What is its recessional velocity relative to us, in km/s?",

  choices: [
    { label: "A", text: "1.40*10^5 km/s" },
    { label: "B", text: "2.14*10^5 km/s" },
    { label: "C", text: "2.57*10^5 km/s" },
    { label: "D", text: "2.82*10^5 km/s" },
    { label: "E", text: "3.00*10^5 km/s" },
  ],

  correctAnswer: "D",

  explanation: "The observed-to-rest wavelength ratio is about 5.65. Using the relativistic Doppler relation gives β ≈ 0.94, corresponding to approximately 2.82 × 10⁵ km/s.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 17.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 19,

  difficulty: "Intermediate",

  topic: "Stars & Stellar Evolution",
  subtopic: "Distance Modulus",
  tags: [
    "absolute magnitude",
    "apparent magnitude",
    "astronomical unit",
    "distance modulus",
    "brightness",
  ],

  type: "MCQ",

  questionText: "Suppose the absolute magnitude of a star is 3.25. What would its apparent magnitude be as seen from a planet orbiting the star at a distance of 0.670 AU? 1 AU = 1.496*10¹¹ m, and 1 pc = 3.0856*10¹⁶ m.",

  choices: [
    { label: "A", text: "-29.2" },
    { label: "B", text: "-28.6" },
    { label: "C", text: "-28.3" },
    { label: "D", text: "-27.5" },
    { label: "E", text: "-26.9" },
  ],

  correctAnswer: "A",

  explanation: "Convert 0.670 AU to parsecs and apply the distance modulus. The very small distance makes the star appear at about magnitude −29.2.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 19.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 20,

  difficulty: "Beginner",

  topic: "Cosmology",
  subtopic: "Timeline of the Universe",
  tags: [
    "inflation",
    "Big Bang nucleosynthesis",
    "recombination",
    "dark energy",
    "cosmic history",
  ],

  type: "MCQ",

  questionText: "Which of these is the correct sequence of events in the Universe, from earliest to latest?",

  choices: [
    { label: "A", text: "Dark energy dominated era, Inflation, Nucleosynthesis, Recombination" },
    { label: "B", text: "Nucleosynthesis, Recombination, Dark energy dominated era, Inflation" },
    { label: "C", text: "Inflation, Dark energy dominated era, Recombination, Nucleosynthesis" },
    { label: "D", text: "Inflation, Nucleosynthesis, Recombination, Dark energy dominated era" },
    { label: "E", text: "Recombination, Dark energy dominated era, Inflation, Nucleosynthesis" },
  ],

  correctAnswer: "D",

  explanation: "Inflation occurred first, followed by Big Bang nucleosynthesis, then recombination, with dark-energy domination occurring much later.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 20.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 21,

  difficulty: "Intermediate",

  topic: "Stars & Stellar Evolution",
  subtopic: "Bolometric Correction and Distance Modulus",
  tags: [
    "bolometric magnitude",
    "bolometric correction",
    "visual magnitude",
    "distance modulus",
    "parsecs",
  ],

  type: "MCQ",

  questionText: "Suppose a star has an absolute bolometric magnitude of -0.77 and a bolometric correction of -1.02. If it has an apparent visual magnitude of 4.32, then what is its distance from Earth in parsecs?",

  choices: [
    { label: "A", text: "65.2 pc" },
    { label: "B", text: "82.0 pc" },
    { label: "C", text: "131 pc" },
    { label: "D", text: "159 pc" },
    { label: "E", text: "167 pc" },
  ],

  correctAnswer: "A",

  explanation: "With BC = Mbol − Mv, the absolute visual magnitude is 0.25. The visual distance modulus then gives about 65.2 pc.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 21.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 22,

  difficulty: "Advanced",

  topic: "Solar System & Planetary Science",
  subtopic: "Planetary Equilibrium Temperature",
  tags: [
    "blackbody",
    "albedo",
    "exoplanet temperature",
    "stellar radius",
    "radiative equilibrium",
  ],

  type: "MCQ",

  questionText: "A planet orbits a star with a temperature of 6500K and a radius of 1.2 solar radii at a distance of 1.5 A.U. The planet has an albedo of 0.10. What is the planet’s temperature, assuming it’s a perfect blackbody?",

  choices: [
    { label: "A", text: "250 K" },
    { label: "B", text: "273 K" },
    { label: "C", text: "308 K" },
    { label: "D", text: "329 K" },
    { label: "E", text: "346 K" },
  ],

  correctAnswer: "B",

  explanation: "Balancing absorbed stellar radiation against thermal emission, including the 0.10 albedo, gives an equilibrium temperature close to 273 K.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 22.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 23,

  difficulty: "Beginner",

  topic: "Celestial Coordinates & Time",
  subtopic: "Zodiacal Constellations",
  tags: [
    "zodiac",
    "ecliptic",
    "Cygnus",
    "constellations",
    "apparent solar path",
  ],

  type: "MCQ",

  questionText: "Which constellation is not on the Zodiac?",

  choices: [
    { label: "A", text: "Cancer" },
    { label: "B", text: "Taurus" },
    { label: "C", text: "Cygnus" },
    { label: "D", text: "Aries" },
    { label: "E", text: "Gemini" },
  ],

  correctAnswer: "C",

  explanation: "The zodiacal constellations lie along the ecliptic. Cygnus is not one of them.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 23.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 24,

  difficulty: "Beginner",

  topic: "Deep-Sky Objects & Catalogs",
  subtopic: "Constellation Stars",
  tags: [
    "Piscis Australis",
    "Fomalhaut",
    "bright stars",
    "constellations",
    "sky observing",
  ],

  type: "MCQ",

  questionText: "One of the constellations that will be visible in Bhubaneshwar, India (20° 16’ 20.67” N, 85° 50’ 1.85” E) in December 2016 will be Piscis Australis. What is the brightest star in that constellation?",

  choices: [
    { label: "A", text: "Fomalhaut" },
    { label: "B", text: "Rasalhague" },
    { label: "C", text: "Alphekka" },
    { label: "D", text: "Scheat" },
    { label: "E", text: "Mirphak" },
  ],

  correctAnswer: "A",

  explanation: "Fomalhaut, Alpha Piscis Austrini, is the brightest star in Piscis Australis.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 24.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 25,

  difficulty: "Beginner",

  topic: "Deep-Sky Objects & Catalogs",
  subtopic: "Messier Objects",
  tags: [
    "M13",
    "Hercules",
    "globular cluster",
    "Messier catalog",
    "deep-sky objects",
  ],

  type: "MCQ",

  questionText: "Which of the following famous Messier objects is in the constellation Hercules?",

  choices: [
    { label: "A", text: "M13" },
    { label: "B", text: "M31" },
    { label: "C", text: "M42" },
    { label: "D", text: "M57" },
    { label: "E", text: "M83" },
  ],

  correctAnswer: "A",

  explanation: "M13 is the Great Globular Cluster in Hercules.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 25.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 26,

  difficulty: "Beginner",

  topic: "Deep-Sky Objects & Catalogs",
  subtopic: "Planetary Nebulae",
  tags: [
    "M57",
    "Ring Nebula",
    "planetary nebula",
    "Lyra",
    "Messier catalog",
  ],

  type: "MCQ",

  questionText: "What is M57?",

  choices: [
    { label: "A", text: "a globular star cluster" },
    { label: "B", text: "a spiral galaxy" },
    { label: "C", text: "a planetary nebula" },
    { label: "D", text: "an open star cluster" },
    { label: "E", text: "a stellar nursery" },
  ],

  correctAnswer: "C",

  explanation: "M57 is the Ring Nebula, a planetary nebula in Lyra.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 26.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 27,

  difficulty: "Beginner",

  topic: "Deep-Sky Objects & Catalogs",
  subtopic: "Messier Objects",
  tags: [
    "M42",
    "Orion Nebula",
    "Orion",
    "Messier catalog",
    "emission nebula",
  ],

  type: "MCQ",

  questionText: "Which of the following famous Messier objects is in the constellation Orion?",

  choices: [
    { label: "A", text: "M1" },
    { label: "B", text: "M8" },
    { label: "C", text: "M13" },
    { label: "D", text: "M27" },
    { label: "E", text: "M42" },
  ],

  correctAnswer: "E",

  explanation: "M42 is the Orion Nebula.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 27.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 28,

  difficulty: "Beginner",

  topic: "Celestial Coordinates & Time",
  subtopic: "Constellation Stars",
  tags: [
    "Aldebaran",
    "Taurus",
    "bright stars",
    "constellations",
    "red giant",
  ],

  type: "MCQ",

  questionText: "What is the brightest star in the constellation Taurus?",

  choices: [
    { label: "A", text: "Aldebaran" },
    { label: "B", text: "Algol" },
    { label: "C", text: "Altair" },
    { label: "D", text: "Hamal" },
    { label: "E", text: "Mirach" },
  ],

  correctAnswer: "A",

  explanation: "Aldebaran is the brightest star in Taurus.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 28.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 29,

  difficulty: "Beginner",

  topic: "Celestial Coordinates & Time",
  subtopic: "Constellation Stars",
  tags: [
    "Mirphak",
    "Perseus",
    "bright stars",
    "constellations",
    "Alpha Persei",
  ],

  type: "MCQ",

  questionText: "What is the brightest star in the constellation Perseus?",

  choices: [
    { label: "A", text: "Algol" },
    { label: "B", text: "Capella" },
    { label: "C", text: "Hamal" },
    { label: "D", text: "Mirphak" },
    { label: "E", text: "Scheat" },
  ],

  correctAnswer: "D",

  explanation: "Mirphak, Alpha Persei, is the brightest star in Perseus.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 29.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 30,

  difficulty: "Beginner",

  topic: "Deep-Sky Objects & Catalogs",
  subtopic: "Messier Objects",
  tags: [
    "M35",
    "Auriga",
    "Gemini",
    "Messier catalog",
    "open cluster",
  ],

  type: "MCQ",

  questionText: "Which of these Messier objects is NOT in the constellation Auriga?",

  choices: [
    { label: "A", text: "M35" },
    { label: "B", text: "M36" },
    { label: "C", text: "M37" },
    { label: "D", text: "M38" },
  ],

  correctAnswer: "A",

  explanation: "M36, M37, and M38 are in Auriga; M35 is in Gemini.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 30.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 31,

  difficulty: "Beginner",

  topic: "Celestial Coordinates & Time",
  subtopic: "Constellations",
  tags: [
    "M35",
    "Gemini",
    "Messier catalog",
    "constellations",
    "open cluster",
  ],

  type: "MCQ",

  questionText: "To which constellation does your previous response belong?",

  choices: [
    { label: "A", text: "Taurus" },
    { label: "B", text: "Gemini" },
    { label: "C", text: "Cancer" },
    { label: "D", text: "Orion" },
    { label: "E", text: "Monoceros" },
  ],

  correctAnswer: "B",

  explanation: "The previous response, M35, belongs to Gemini.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 31.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 32,

  difficulty: "Beginner",

  topic: "Deep-Sky Objects & Catalogs",
  subtopic: "Open Clusters",
  tags: [
    "M44",
    "Beehive Cluster",
    "open cluster",
    "Cancer",
    "Messier catalog",
  ],

  type: "MCQ",

  questionText: "What type of object is M44?",

  choices: [
    { label: "A", text: "Open cluster" },
    { label: "B", text: "Globular cluster" },
    { label: "C", text: "Planetary nebula" },
    { label: "D", text: "Elliptical galaxy" },
    { label: "E", text: "Stellar nursery" },
  ],

  correctAnswer: "A",

  explanation: "M44, the Beehive Cluster, is an open cluster.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 32.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 33,

  difficulty: "Beginner",

  topic: "Deep-Sky Objects & Catalogs",
  subtopic: "Messier Objects",
  tags: [
    "M44",
    "Cancer",
    "Beehive Cluster",
    "constellations",
    "Messier catalog",
  ],

  type: "MCQ",

  questionText: "To which constellation does M44 belong?",

  choices: [
    { label: "A", text: "Gemini" },
    { label: "B", text: "Cancer" },
    { label: "C", text: "Leo" },
    { label: "D", text: "Monoceros" },
    { label: "E", text: "Lynx" },
  ],

  correctAnswer: "B",

  explanation: "M44 is located in Cancer.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 33.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2016,
  examName: "First Round",
  questionNumber: 34,

  difficulty: "Beginner",

  topic: "Celestial Coordinates & Time",
  subtopic: "Asterisms",
  tags: [
    "Summer Triangle",
    "Vega",
    "Deneb",
    "Altair",
    "northern sky",
  ],

  type: "MCQ",

  questionText: "Which three stars make up the Summer Triangle?",

  choices: [
    { label: "A", text: "Vega, Deneb, Altair" },
    { label: "B", text: "Regulus, Sirius, Rigel" },
    { label: "C", text: "Vega, Aldebaran, Antares" },
    { label: "D", text: "Arcturus, Antares, Aldebaran" },
    { label: "E", text: "Deneb, Rigel, Altair" },
  ],

  correctAnswer: "A",

  explanation: "The Summer Triangle is formed by Vega, Deneb, and Altair.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-exam.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2016/06/2016-first-round-solutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2016 First Round, Question 34.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 1,

  difficulty: "Intermediate",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Schwarzschild Radius",
  tags: [
    "black hole",
    "Schwarzschild radius",
    "Sun",
    "event horizon",
    "escape velocity",
  ],

  type: "MCQ",

  questionText: "What would be the radius of the Sun when it becomes a black hole (although the probability is almost zero)?",

  choices: [
    { label: "A", text: "1 km" },
    { label: "B", text: "2 km" },
    { label: "C", text: "3 km" },
    { label: "D", text: "4 km" },
    { label: "E", text: "5 km" },
  ],

  correctAnswer: "C",

  explanation: "The Schwarzschild radius is Rₛ = 2GM/c². For one solar mass, this is about 2954 m, or 3 km.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 1,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2017 First Round, Question 1.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 2,

  difficulty: "Beginner",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Kepler’s Third Law",
  tags: [
    "comet",
    "semimajor axis",
    "orbital period",
    "Kepler’s third law",
    "return date",
  ],

  type: "MCQ",

  questionText: "A comet called “SMukherjee2017” which has physical values of e = 0.12, a = 4AU was visible from the Earth in 2017. In which year is this comet visible again?",

  choices: [
    { label: "A", text: "2021" },
    { label: "B", text: "2022" },
    { label: "C", text: "2023" },
    { label: "D", text: "2024" },
    { label: "E", text: "2025" },
  ],

  correctAnswer: "E",

  explanation: "For a Solar-System orbit in AU and years, P² = a³. With a = 4 AU, P = 8 years, so the comet returns in 2025.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 1,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2017 First Round, Question 2.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 3,

  difficulty: "Beginner",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Orbital Elements",
  tags: [
    "perihelion",
    "eccentricity",
    "semimajor axis",
    "comet",
    "elliptical orbit",
  ],

  type: "MCQ",

  questionText: "What is the perihelion of comet “SMukherjee2017”?",

  choices: [
    { label: "A", text: "3.0 AU" },
    { label: "B", text: "3.5 AU" },
    { label: "C", text: "4.0 AU" },
    { label: "D", text: "4.5 AU" },
    { label: "E", text: "5.0 AU" },
  ],

  correctAnswer: "B",

  explanation: "Perihelion distance is q = a(1 − e) = 4(1 − 0.12) = 3.52 AU, closest to 3.5 AU.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 1,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2017 First Round, Question 3.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 4,

  difficulty: "Beginner",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Conic Sections",
  tags: [
    "hyperbolic orbit",
    "eccentricity",
    "comet",
    "unbound trajectory",
    "conic sections",
  ],

  type: "MCQ",

  questionText: "A comet called “LQi2017” which has physical values of e = 1.2, a = 19AU was visible from the Earth in 2017. In which year is this comet visible again?",

  choices: [
    { label: "A", text: "2080" },
    { label: "B", text: "2100" },
    { label: "C", text: "2109" },
    { label: "D", text: "2130" },
    { label: "E", text: "The comet is not visible again." },
  ],

  correctAnswer: "E",

  explanation: "An orbit with eccentricity greater than 1 is hyperbolic and unbound, so the comet does not return.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2017 First Round, Question 4.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 5,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Horizon Distance",
  tags: [
    "Earth curvature",
    "observer height",
    "horizon",
    "geometry",
    "distance",
  ],

  type: "MCQ",

  questionText: "How far away is the horizon from you, when your height is about 5ft 11in (1.8m)? You are standing on a plain that has no mountains near you and the elevation is 0ft. Ignore the effect of atmospheric refraction and the oblateness of the Earth.",

  choices: [
    { label: "A", text: "2.4 km" },
    { label: "B", text: "4.8 km" },
    { label: "C", text: "24 km" },
    { label: "D", text: "48 km" },
    { label: "E", text: "240 km" },
  ],

  correctAnswer: "B",

  explanation: "For observer height h much smaller than Earth’s radius R, the horizon distance is approximately √(2Rh). Using h = 1.8 m gives about 4.8 km.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2017 First Round, Question 5.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 6,

  difficulty: "Advanced",

  topic: "Stars & Stellar Evolution",
  subtopic: "Luminosity Scaling and Magnitudes",
  tags: [
    "stellar fragmentation",
    "mass conservation",
    "density",
    "luminosity",
    "absolute magnitude",
  ],

  type: "MCQ",

  questionText: "Consider that the absolute magnitude of a star is m₀. Imagine that the first star gets split into N smaller identical stars with the same temperature and average densities as the initial star, and that the sum of the masses of all N smaller stars is equal to the initial star’s mass (i.e., total mass is conserved). What is the total combined absolute magnitude (m) of all the N stars assuming that none of the stars obstruct each other’s light (i.e. their luminosities add linearly)?",

  choices: [
    { label: "A", text: "m = m₀ − log(N)" },
    { label: "B", text: "m = m₀ − 2.5 log(N)" },
    { label: "C", text: "m = m₀ − (2.5/3) log(N)" },
    { label: "D", text: "m = m₀ − 2.5/N" },
    { label: "E", text: "m = m₀ − 2.5 N" },
  ],

  correctAnswer: "C",

  explanation: "Equal density gives each smaller radius r = R N⁻¹ᐟ³. With equal temperature, the combined luminosity becomes N¹ᐟ³L₀, so m = m₀ − (2.5/3) log₁₀N.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2017 First Round, Question 6.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 7,

  difficulty: "Advanced",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Black-Hole Geometry",
  tags: [
    "black hole",
    "Schwarzschild radius",
    "surface area",
    "event horizon",
    "general relativity",
  ],

  type: "MCQ",

  questionText: "Taking the radius of the black hole to be the Schwarzschild radius (the radius at which the escape velocity of an object would be equal to the speed of light), what is the surface area of a black hole of mass M?",

  choices: [
    { label: "A", text: "A = 16πG²M²/c⁴" },
    { label: "B", text: "A = 4πG²M²/c⁴" },
    { label: "C", text: "A = 4πG²M²/(3c⁴)" },
    { label: "D", text: "A = 16πG²M²" },
    { label: "E", text: "A = 16πG²M²/c²" },
  ],

  correctAnswer: "A",

  explanation: "Using Rₛ = 2GM/c² in A = 4πRₛ² gives A = 16πG²M²/c⁴.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2017 First Round, Question 7.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 8,

  difficulty: "Advanced",

  topic: "Stars & Stellar Evolution",
  subtopic: "Hawking Radiation",
  tags: [
    "Hawking radiation",
    "black holes",
    "blackbody radiation",
    "luminosity scaling",
    "quantum effects",
  ],

  type: "MCQ",

  questionText: "In 1974, Stephen Hawking proved that black holes emit blackbody radiation according to the Stefan-Boltzmann law (due to quantum effects near the event horizon). This radiation is called Hawking radiation and through this process, black holes slowly evaporate their mass away in the absence of new material to accrete. Assume that the Hawking temperature of a black hole is inversely proportional to its mass (i.e. Tₕ = const. / M) and that our initial black hole of mass M gets split into N smaller black holes, each with a mass M / N. Using the results found in problems 6 and 7, what is the relation between the final combined luminosity of the smaller black holes (L) and the luminosity of the initial black hole (L₀)?",

  choices: [
    { label: "A", text: "L = L₀" },
    { label: "B", text: "L = L₀ / N" },
    { label: "C", text: "L = N L₀" },
    { label: "D", text: "L = N² L₀" },
    { label: "E", text: "L = N³ L₀" },
  ],

  correctAnswer: "E",

  explanation: "Each smaller black hole has area A₀/N² and temperature NT₀. Summing N Stefan-Boltzmann luminosities gives L = N³L₀.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 5,

  attributionText: "Source: USAAAO 2017 First Round, Question 8.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 9,

  difficulty: "Intermediate",

  topic: "Galaxies & Extragalactic Astronomy",
  subtopic: "Quasar Variability",
  tags: [
    "quasar",
    "light-travel time",
    "variability",
    "size limit",
    "active galaxies",
  ],

  type: "MCQ",

  questionText: "We observe that a quasar’s brightness varies within less than a day. What is the best upper bound on the quasar’s size that you can derive from this information?",

  choices: [
    { label: "A", text: "8 kpc" },
    { label: "B", text: "170 AU" },
    { label: "C", text: "3 AU" },
    { label: "D", text: "3 Sun Radii" },
    { label: "E", text: "1 pc" },
  ],

  correctAnswer: "B",

  explanation: "A source cannot vary coherently on a timescale shorter than its light-crossing time. One light-day is about 173 AU, so the best listed bound is 170 AU.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 5,

  attributionText: "Source: USAAAO 2017 First Round, Question 9.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 10,

  difficulty: "Advanced",

  topic: "Celestial Coordinates & Time",
  subtopic: "Great-Circle Distance",
  tags: [
    "spherical trigonometry",
    "latitude",
    "longitude",
    "great-circle distance",
    "Earth radius",
  ],

  type: "MCQ",

  questionText: "A student group from California Institute of Technology is planning a massive prank for this year. This year, they are planning on launching a rocket to Massachusetts Institute of Technology and making it explode above the so called ‘Great Dome’ of MIT. The rocket will contain a giant parachute printed with a logo of Caltech, so that the Great Dome will be covered with Caltech logo. How much distance does this rocket need to fly? The longitude and latitude information of two locations are given in the table below. (Assume that the Earth is a perfect sphere with radius of 6371 km.)",

  choices: [
    { label: "A", text: "3890 km" },
    { label: "B", text: "4160 km" },
    { label: "C", text: "4780 km" },
    { label: "D", text: "4910 km" },
    { label: "E", text: "5290 km" },
  ],

  correctAnswer: "B",

  explanation: "Using the spherical law of cosines for the coordinates of Caltech and MIT gives a central angle of about 37.35°, corresponding to approximately 4160 km.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 7,

  attributionText: "Source: USAAAO 2017 First Round, Question 10. The coordinate table and worked spherical-trigonometry diagram appear on source pages 6–7.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 11,

  difficulty: "Advanced",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Orbital Energy and Escape",
  tags: [
    "elliptical orbit",
    "orbital energy",
    "escape velocity",
    "parabolic orbit",
    "specific energy",
  ],

  type: "MCQ",

  questionText: "The MIT students have found out about the plans of the Caltech students of sending a rocket to fly a parachute above the “Great Dome” of MIT. They know the rocket will follow an elliptical orbit of semiaxis a with the center of the Earth at one of its foci. To counter this prank, they will aim another rocket at the original rocket, which upon collision will transfer enough energy to the Caltech rocket to make it reach the escape velocity of the Earth at an early point in its trajectory and make it unable to reach back to the Earth’s surface again. What is the energy that needs to be transferred to the Caltech rocket in order for the MIT students to reach their goal? Assume that the Earth has mass M, and the Caltech rocket has mass m.",

  choices: [
    { label: "A", text: "GMm/(3a)" },
    { label: "B", text: "GMm/(3a²)" },
    { label: "C", text: "GMm/(2a)" },
    { label: "D", text: "GMm/a" },
    { label: "E", text: "GMm/a²" },
  ],

  correctAnswer: "C",

  explanation: "An ellipse has total orbital energy −GMm/(2a). Reaching a marginal escape orbit requires total energy 0, so the required energy increment is GMm/(2a).",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 8,

  attributionText: "Source: USAAAO 2017 First Round, Question 11.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 12,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Solar Altitude and Equinox",
  tags: [
    "equinox",
    "solar zenith",
    "shadow",
    "latitude",
    "Galapagos",
  ],

  type: "MCQ",

  questionText: "The following series of photos were taken on March 17 around noon time (each photo taken about 3 minutes apart from the previous one). In each photo you can see a white vertical pole (about 1 foot high), and a piece of paper at the base of the pole. Notice how the shadow cast by the pole on the piece of paper is slowly disappearing. Based on the date and time, and the length of the pole’s shadow, where were the photos taken?",

  choices: [
    { label: "A", text: "Seattle, USA (47.61° N, 122.33° W)" },
    { label: "B", text: "Los Angeles, USA (34.05° N, 118.24° W)" },
    { label: "C", text: "Cancun, Mexico (21.16° N, 86.85° W)" },
    { label: "D", text: "Galapagos Islands, Ecuador (0.74° S, 90.32° W)" },
    { label: "E", text: "Sydney, Australia (33.87° S, 151.21° E)" },
  ],

  correctAnswer: "D",

  explanation: "Near the March equinox, the Sun is nearly overhead around local noon at the equator. The source photos show a nearly vanishing shadow, consistent with the Galapagos Islands near the equator.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 8,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 8,

  attributionText: "Source: USAAAO 2017 First Round, Question 12. The question depends on the source photos printed on page 8.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 13,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Polar Day and Shadows",
  tags: [
    "South Pole",
    "December solstice",
    "polar day",
    "shadow",
    "Earth tilt",
  ],

  type: "MCQ",

  questionText: "Imagine you are at the South Pole on December 21st. Which of these statements best describes your shadow on this day?",

  choices: [
    { label: "A", text: "on December 21st at the South Pole it is night all day so you have no shadow at all" },
    { label: "B", text: "you have no shadow at noon when the Sun is over your head, but you can see your shadow the rest of the day" },
    { label: "C", text: "the Sun will be up all day but it will be straight over your head, so you will have no shadow all day" },
    { label: "D", text: "the Sun will be up all day and your shadow will trace out a 360° circle during one day" },
    { label: "E", text: "your shadow will point towards the North Pole" },
  ],

  correctAnswer: "D",

  explanation: "At the South Pole during the December solstice, the Sun remains above the horizon but never reaches the zenith. As Earth rotates, the shadow tip traces a full circle.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 8,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 9,

  attributionText: "Source: USAAAO 2017 First Round, Question 13.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 14,

  difficulty: "Intermediate",

  topic: "Solar System & Planetary Science",
  subtopic: "Angular Size and Eclipse Geometry",
  tags: [
    "Moon",
    "Sun",
    "angular diameter",
    "satellite",
    "eclipse geometry",
  ],

  type: "MCQ",

  questionText: "The USAAAO team successfully launched a satellite to be in the orbit within the boundary of the Solar System. The satellite took a picture of the Moon passing in front of the Sun on April 24, 2017. Estimate the distance between the Moon and the satellite. (Angular diameter of the Sun is 32’)",

  choices: [
    { label: "A", text: "5.56 × 10⁵ km" },
    { label: "B", text: "1.12 × 10⁶ km" },
    { label: "C", text: "2.24 × 10⁶ km" },
    { label: "D", text: "1.12 × 10⁷ km" },
    { label: "E", text: "2.24 × 10⁷ km" },
  ],

  correctAnswer: "B",

  explanation: "From the source image, the Moon’s apparent diameter is about one-third of the Sun’s 32′ diameter. Applying the small-angle relation to the Moon’s known diameter gives about 1.12 × 10⁶ km.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 9,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 10,

  attributionText: "Source: USAAAO 2017 First Round, Question 14. The question depends on the Moon–Sun image printed on source page 9.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 15,

  difficulty: "Beginner",

  topic: "Solar System & Planetary Science",
  subtopic: "Tides",
  tags: [
    "tides",
    "Full Moon",
    "spring tide",
    "Sun-Moon alignment",
    "tidal bulge",
  ],

  type: "MCQ",

  questionText: "At which of the following phases of the Moon’s orbit is the tidal bulge of Earth largest?",

  choices: [
    { label: "A", text: "Full" },
    { label: "B", text: "First Quarter" },
    { label: "C", text: "Waxing Gibbous" },
    { label: "D", text: "Waning Gibbous" },
    { label: "E", text: "Waxing Crescent" },
  ],

  correctAnswer: "A",

  explanation: "At full Moon, the Sun, Earth, and Moon are aligned, producing spring tides and the largest tidal bulges.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 10,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 10,

  attributionText: "Source: USAAAO 2017 First Round, Question 15.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 16,

  difficulty: "Beginner",

  topic: "Galaxies & Extragalactic Astronomy",
  subtopic: "Galaxy Rotation Curves and Dark Matter",
  tags: [
    "dark matter",
    "rotation curve",
    "spiral galaxy",
    "mass distribution",
    "galactic dynamics",
  ],

  type: "MCQ",

  questionText: "A predicted (A) and observed (B) rotation curve of a typical spiral galaxy is shown above. What component of the galaxy causes this discrepancy?",

  choices: [
    { label: "A", text: "Baryons" },
    { label: "B", text: "Neutrinos" },
    { label: "C", text: "Gamma Rays" },
    { label: "D", text: "Dark Matter" },
    { label: "E", text: "Globular Clusters" },
  ],

  correctAnswer: "D",

  explanation: "The flat observed rotation curve at large distance indicates more gravitating mass than visible matter supplies; this is attributed to dark matter.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 11,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 11,

  attributionText: "Source: USAAAO 2017 First Round, Question 16. The question depends on the rotation-curve graph printed on page 11.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 17,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Horizontal Branch",
  tags: [
    "horizontal branch",
    "helium fusion",
    "stellar evolution",
    "core burning",
    "H-R diagram",
  ],

  type: "MCQ",

  questionText: "What is a star burning in its core when it is on the horizontal branch?",

  choices: [
    { label: "A", text: "Atomic Hydrogen" },
    { label: "B", text: "Molecular Hydrogen" },
    { label: "C", text: "Helium" },
    { label: "D", text: "Carbon" },
    { label: "E", text: "Oxygen" },
  ],

  correctAnswer: "C",

  explanation: "Horizontal-branch stars fuse helium in their cores after the helium flash.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 11,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 12,

  attributionText: "Source: USAAAO 2017 First Round, Question 17.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 18,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Low-Mass Stellar Remnants",
  tags: [
    "stellar evolution",
    "white dwarf",
    "G-type star",
    "solar mass",
    "stellar remnant",
  ],

  type: "MCQ",

  questionText: "What is the final stage in the evolution of a G1 star with mass of 1.1MSun?",

  choices: [
    { label: "A", text: "Red Giant" },
    { label: "B", text: "White Dwarf" },
    { label: "C", text: "Black Hole" },
    { label: "D", text: "Neutron Star" },
    { label: "E", text: "Brown Dwarf" },
  ],

  correctAnswer: "B",

  explanation: "A star with roughly 1.1 solar masses ends its evolution as a white dwarf.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 12,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 12,

  attributionText: "Source: USAAAO 2017 First Round, Question 18.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 19,

  difficulty: "Advanced",

  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Blackbody Radiation and Wien’s Law",
  tags: [
    "blackbody spectrum",
    "Wien’s law",
    "binary stars",
    "temperature",
    "H-alpha",
  ],

  type: "MCQ",

  questionText: "The following graph shows spectral flux density as a function of wavelength for the 2 stars in a binary system. Assume that the stars are young and are comprised only of Hydrogen and a small amount of Helium. Moreover, assume that the stars can be treated as black bodies. Take Wien’s Displacement Constant to be 2.8978 mm K (The origin of the graph corresponds to zeroes for both wavelength and spectral flux density). What are the surface temperatures of the 2 stars?",

  choices: [
    { label: "A", text: "4000K, 8000K" },
    { label: "B", text: "6000K, 8000K" },
    { label: "C", text: "3000K, 4000K" },
    { label: "D", text: "9000K, 12000K" },
    { label: "E", text: "5000K, 12000K" },
  ],

  correctAnswer: "B",

  explanation: "Identify the hydrogen lines in the source spectrum to set the wavelength scale, then apply Wien’s law to the two peak wavelengths. The temperatures are 6000 K and 8000 K.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 13,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 13,

  attributionText: "Source: USAAAO 2017 First Round, Question 19. The question depends on the spectrum graph printed on source page 13.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 20,

  difficulty: "Advanced",

  topic: "Stars & Stellar Evolution",
  subtopic: "Blackbody Luminosity Scaling",
  tags: [
    "binary stars",
    "stellar radius",
    "temperature",
    "spectral flux",
    "Stefan-Boltzmann law",
  ],

  type: "MCQ",

  questionText: "What is the ratio of the radius of the hotter star to that of the colder star?",

  choices: [
    { label: "A", text: "1.7" },
    { label: "B", text: "1.3" },
    { label: "C", text: "0.8" },
    { label: "D", text: "0.7" },
    { label: "E", text: "0.6" },
  ],

  correctAnswer: "E",

  explanation: "For the source spectra, peak heights scale as R²T⁵. Combining their peak-height ratio with the temperatures from Question 19 gives Rhot/Rcold ≈ 0.6.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 13,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 14,

  attributionText: "Source: USAAAO 2017 First Round, Question 20. The question depends on the spectrum graph printed on source page 13.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 21,

  difficulty: "Advanced",

  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Magnitude Addition",
  tags: [
    "binary system",
    "apparent magnitude",
    "luminosity ratio",
    "photometry",
    "stellar flux",
  ],

  type: "MCQ",

  questionText: "Given that the apparent magnitude of the system is 8.2, what is the apparent magnitude of the brighter star?",

  choices: [
    { label: "A", text: "8.4" },
    { label: "B", text: "8.7" },
    { label: "C", text: "8.9" },
    { label: "D", text: "9.0" },
    { label: "E", text: "9.2" },
  ],

  correctAnswer: "C",

  explanation: "Use the luminosity ratio inferred from the source spectrum to split the system flux into component fluxes. The brighter component has apparent magnitude 8.9.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 14,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 14,

  attributionText: "Source: USAAAO 2017 First Round, Question 21. The question depends on the spectrum graph printed on source page 13.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 22,

  difficulty: "Advanced",

  topic: "Stars & Stellar Evolution",
  subtopic: "Stellar Radius and Distance",
  tags: [
    "binary system",
    "stellar radius",
    "distance",
    "inverse-square law",
    "blackbody",
  ],

  type: "MCQ",

  questionText: "Assuming that the radius of the smaller star is 2 solar radii, what is the distance to the system?",

  choices: [
    { label: "A", text: "75 parsecs" },
    { label: "B", text: "85 parsecs" },
    { label: "C", text: "100 parsecs" },
    { label: "D", text: "115 parsecs" },
    { label: "E", text: "150 parsecs" },
  ],

  correctAnswer: "B",

  explanation: "Using the source spectrum to infer the system luminosity, then comparing luminosity with the observed flux, gives a distance of 85 parsecs.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 14,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 14,

  attributionText: "Source: USAAAO 2017 First Round, Question 22. The question depends on the spectrum graph printed on source page 13.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 23,

  difficulty: "Beginner",

  topic: "Cosmology",
  subtopic: "Cosmic Microwave Background",
  tags: [
    "CMB",
    "microwave",
    "relic radiation",
    "Big Bang",
    "radio signal",
  ],

  type: "MCQ",

  questionText: "Astronomers have observed the Cosmic Microwave Background (CMB) radiation. Which of these is a correct description of the CMB radiation we observe today?",

  choices: [
    { label: "A", text: "Bright, uniform x-ray glow" },
    { label: "B", text: "Faint, uniform radio signal" },
    { label: "C", text: "Faint, uniform x-ray glow" },
    { label: "D", text: "Weak and patchy radio signal" },
    { label: "E", text: "Weak background of cosmic neutrinos" },
  ],

  correctAnswer: "B",

  explanation: "The CMB is faint, nearly uniform microwave radiation—the redshifted relic glow from the early universe.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 14,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 14,

  attributionText: "Source: USAAAO 2017 First Round, Question 23.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 24,

  difficulty: "Beginner",

  topic: "Cosmology",
  subtopic: "Cosmic History",
  tags: [
    "inflation",
    "recombination",
    "reionization",
    "early universe",
    "cosmic timeline",
  ],

  type: "MCQ",

  questionText: "Which is the correct chronological order of events?",

  choices: [
    { label: "A", text: "Inflation, Recombination, Reionization" },
    { label: "B", text: "Recombination, Reionization, Inflation" },
    { label: "C", text: "Inflation, Reionization, Recombination" },
    { label: "D", text: "Reionization, Recombination, Inflation" },
    { label: "E", text: "Recombination, Inflation, Reionization" },
  ],

  correctAnswer: "A",

  explanation: "Inflation occurred extremely early, recombination occurred much later when neutral atoms formed, and reionization followed after the first luminous sources formed.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 14,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 15,

  attributionText: "Source: USAAAO 2017 First Round, Question 24.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 25,

  difficulty: "Intermediate",

  topic: "Cosmology",
  subtopic: "Hubble’s Law",
  tags: [
    "Hubble constant",
    "velocity-distance relation",
    "Hubble 1929",
    "cosmic expansion",
    "graph slope",
  ],

  type: "MCQ",

  questionText: "Edwin Hubble published in 1929 the paper “A Relation Between Distance and Extragalactic Nebulae” explaining his find that there exists a linear relationship between the radial velocities and distances for extragalactic objects. In the following graph you can see his data used in the paper. The units for the velocity are in km/s. (notice the “/ s” is missing from his original graph). What is the value for the Hubble constant that he derived from this data? Use the linear fit to the data marked with the continuous line to derive your estimation.",

  choices: [
    { label: "A", text: "500 km/s/pc" },
    { label: "B", text: "72 km/s/Mpc" },
    { label: "C", text: "500 km/s/Mpc" },
    { label: "D", text: "50 km/s/Mpc" },
    { label: "E", text: "67 km/s/Mpc" },
  ],

  correctAnswer: "C",

  explanation: "The slope of the continuous best-fit line is about 500 km/s per Mpc, matching Hubble’s original estimate.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 15,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 16,

  attributionText: "Source: USAAAO 2017 First Round, Question 25. The question depends on the Hubble velocity–distance graph printed on source page 15.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 26,

  difficulty: "Intermediate",

  topic: "Observational Astronomy & Telescopes",
  subtopic: "Radio Interferometry",
  tags: [
    "interferometry",
    "baseline",
    "angular resolution",
    "radio telescopes",
    "resolving power",
  ],

  type: "MCQ",

  questionText: "An astronomical interferometer is an array of separate radio telescope antennas that work together as a single telescope. Which of the following upgrades to your telescope setup will improve its resolving power the most?",

  choices: [
    { label: "A", text: "Increasing the baseline (or distance between the telescopes)" },
    { label: "B", text: "Increasing the number of telescopes per unit area" },
    { label: "C", text: "Increasing the diameter of each telescope" },
    { label: "D", text: "Increasing the electrical power supplied to each telescope" },
    { label: "E", text: "Decreasing the baseline (or distance between the telescopes)" },
  ],

  correctAnswer: "A",

  explanation: "Interferometer angular resolution is set primarily by λ/B, where B is the baseline. Increasing the antenna separation improves resolving power the most.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 16,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 16,

  attributionText: "Source: USAAAO 2017 First Round, Question 26.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 27,

  difficulty: "Advanced",

  topic: "Observational Astronomy & Telescopes",
  subtopic: "Diffraction Limit",
  tags: [
    "diffraction limit",
    "Rayleigh criterion",
    "telescope aperture",
    "wavelength",
    "angular resolution",
  ],

  type: "MCQ",

  questionText: "What is the diffraction limit of a 4.5-meter telescope if we are measuring at a wavelength of 1.2 μm?",

  choices: [
    { label: "A", text: "0.5 × 10⁻⁵ arcsec" },
    { label: "B", text: "0.9 × 10⁻⁵ arcsec" },
    { label: "C", text: "2.2 × 10⁻⁵ arcsec" },
    { label: "D", text: "1.5 × 10⁻⁴ arcsec" },
    { label: "E", text: "0.9 × 10⁻⁶ arcsec" },
  ],

  correctAnswer: "B",

  explanation: "The source identifies B as the intended answer, but its own calculation gives about 0.07 arcsec and states that the answer-option units were wrong; the question was excluded from grading. This record deliberately preserves the supplied answer key’s B.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 16,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 16,

  attributionText: "Source: USAAAO 2017 First Round, Question 27. The source states that this question was excluded from grading because the answer-option units were wrong.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 28,

  difficulty: "Beginner",

  topic: "Celestial Coordinates & Time",
  subtopic: "Twilight Definitions",
  tags: [
    "civil twilight",
    "nautical twilight",
    "astronomical twilight",
    "Sun depression angle",
    "observing",
  ],

  type: "MCQ",

  questionText: "Choose the values (x, y, z) that would best complete the descriptions below for the 3 different types of twilights. i) civil twilight, when the Sun is x° below the horizon. We can start to see the brightest stars and the sea horizon can be clearly seen. At this point it becomes hard to read outdoors without artificial light. ii) nautical twilight, when the Sun is y° below the horizon. It is too dark to see the sea horizon and you can no longer make altitude measurements for navigation using the horizon as a reference. iii) astronomical twilight, when the Sun is z° below the horizon. Scattered sunlight becomes less than the average starlight and it is about the same brightness as the aurora or zodiacal light.",

  choices: [
    { label: "A", text: "Civil twilight - 5°, nautical twilight - 10°, astronomical twilight - 15°" },
    { label: "B", text: "Civil twilight - 6°, nautical twilight - 12°, astronomical twilight - 18°" },
    { label: "C", text: "Civil twilight - 3°, nautical twilight - 6°, astronomical twilight - 9°" },
    { label: "D", text: "Civil twilight - 12°, nautical twilight - 6°, astronomical twilight - 18°" },
    { label: "E", text: "Civil twilight - 10°, nautical twilight - 20°, astronomical twilight - 30°" },
  ],

  correctAnswer: "B",

  explanation: "The standard Sun-depression limits are 6° for civil twilight, 12° for nautical twilight, and 18° for astronomical twilight.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 17,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 17,

  attributionText: "Source: USAAAO 2017 First Round, Question 28.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 29,

  difficulty: "Beginner",

  topic: "Celestial Coordinates & Time",
  subtopic: "Constellations and Nearby Galaxies",
  tags: [
    "Small Magellanic Cloud",
    "Tucana",
    "southern sky",
    "dwarf galaxy",
    "constellations",
  ],

  type: "MCQ",

  questionText: "The Small Magellanic Cloud is located in the southeast corner of which of the following constellations:",

  choices: [
    { label: "A", text: "Orion" },
    { label: "B", text: "Ophiucus" },
    { label: "C", text: "Crux" },
    { label: "D", text: "Draco" },
    { label: "E", text: "Tucana" },
  ],

  correctAnswer: "E",

  explanation: "The Small Magellanic Cloud lies in the constellation Tucana.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 17,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 17,

  attributionText: "Source: USAAAO 2017 First Round, Question 29.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 30,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Precession of the Equinoxes",
  tags: [
    "precession",
    "North Celestial Pole",
    "Deneb",
    "celestial pole",
    "10,000 CE",
  ],

  type: "MCQ",

  questionText: "Due to the precession of the equinoxes, the north and south celestial poles trace out circles on the celestial sphere with a period of about 25700 years. The circle traced by the North Celestial Pole is shown in the picture below. At the moment, Polaris is within one degree of the North Celestial Pole and this is why it is also called the North Star. Based on the picture below, which star of magnitude ~1 will be closest to the North Celestial Pole in the year 10000 CE?",

  choices: [
    { label: "A", text: "Vega" },
    { label: "B", text: "Deneb" },
    { label: "C", text: "Thuban" },
    { label: "D", text: "Eltanin" },
    { label: "E", text: "Alderamin" },
  ],

  correctAnswer: "B",

  explanation: "Following the source precession diagram to 10,000 CE places the North Celestial Pole nearest Deneb.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 17,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 18,

  attributionText: "Source: USAAAO 2017 First Round, Question 30. The question depends on the precession image printed on source pages 17–18.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2017,
  examName: "First Round",
  questionNumber: 31,

  difficulty: "Beginner",

  topic: "Celestial Coordinates & Time",
  subtopic: "Ecliptic Constellations",
  tags: [
    "Ophiuchus",
    "zodiac",
    "ecliptic",
    "constellations",
    "Sun",
  ],

  type: "MCQ",

  questionText: "What is the 13’th constellation that crosses the ecliptic, which is not included in the 12 zodiacal constellations?",

  choices: [
    { label: "A", text: "Corona Borealis" },
    { label: "B", text: "Ophiuchus" },
    { label: "C", text: "Pegasus" },
    { label: "D", text: "Aquila" },
    { label: "E", text: "Caelum" },
  ],

  correctAnswer: "B",

  explanation: "Ophiuchus also crosses the ecliptic but is not included in the traditional twelve-sign zodiac.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  pageNumber: 18,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2017/06/releasedfinal20171stroundioaasolutions.pdf",
  answerKeyPageNumber: 18,

  attributionText: "Source: USAAAO 2017 First Round, Question 31.",

  permissionStatus: "needs-review",
  status: "draft",
},

  // 2018–2020
{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 1,

  difficulty: "Beginner",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Kepler's Third Law",
  tags: [
    "Kepler's law",
    "semimajor axis",
    "orbital period",
    "astronomical units",
  ],

  type: "MCQ",

  questionText: "A planet’s orbit around a star has a semimajor axis of 16 AU. What is the period of the planet’s orbit?",

  choices: [
    { label: "A", text: "6 years" },
    { label: "B", text: "32 years" },
    { label: "C", text: "64 years" },
    { label: "D", text: "256 years" },
    { label: "E", text: "4096 years" },
  ],

  correctAnswer: "C",

  explanation: "For a planet orbiting a one-solar-mass star, P² = a³. With a = 16 AU, P = 16^(3/2) = 64 years.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 1,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2018 First Round, Question 1.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 2,

  difficulty: "Beginner",

  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Electromagnetic Spectrum",
  tags: [
    "electromagnetic spectrum",
    "wavelength",
    "radio waves",
    "radiation",
  ],

  type: "MCQ",

  questionText: "Which of the following has the longest wavelength?",

  choices: [
    { label: "A", text: "UV" },
    { label: "B", text: "Optical" },
    { label: "C", text: "Radio" },
    { label: "D", text: "X-rays" },
    { label: "E", text: "Microwave" },
  ],

  correctAnswer: "C",

  explanation: "Radio waves have longer wavelengths than microwaves, optical light, ultraviolet light, and X-rays.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 1,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2018 First Round, Question 2.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 3,

  difficulty: "Beginner",

  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Wien's Displacement Law",
  tags: [
    "blackbody radiation",
    "Wien's law",
    "peak wavelength",
    "stellar temperature",
  ],

  type: "MCQ",

  questionText: "What is the peak wavelength in Angstroms (Å) of electromagnetic radiation emitted by a star at a temperature of 10,000 K, assuming a blackbody spectrum? (Wien’s constant σw ≈ 2.9 × 10⁷ Å·K)",

  choices: [
    { label: "A", text: "290 Å" },
    { label: "B", text: "2,900 Å" },
    { label: "C", text: "5,800 Å" },
    { label: "D", text: "29,000 Å" },
    { label: "E", text: "58,000 Å" },
  ],

  correctAnswer: "B",

  explanation: "Using λmax = 2.9 × 10⁷ Å·K / 10,000 K gives λmax = 2,900 Å.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 1,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2018 First Round, Question 3.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 4,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Upper Culmination and Azimuth",
  tags: [
    "Capella",
    "upper culmination",
    "azimuth",
    "celestial sphere",
  ],

  type: "MCQ",

  questionText: "Determine the azimuth of Capella (Aurigae) in its upper culmination as seen from geographic latitude of φ = +45°58′.",

  choices: [
    { label: "A", text: "0°" },
    { label: "B", text: "90°" },
    { label: "C", text: "Undefined" },
    { label: "D", text: "180°" },
    { label: "E", text: "360°" },
  ],

  correctAnswer: "C",

  explanation: "At upper culmination, an object lies on the local meridian; its azimuth is convention-dependent at the meridian, so the official key marks it undefined.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 1,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2018 First Round, Question 4.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 5,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Never-Rising Stars",
  tags: [
    "Antares",
    "declination",
    "latitude",
    "horizon",
  ],

  type: "MCQ",

  questionText: "From which geographic latitude does the star Antares (α Scorpii, δ = −26°19′) never rise?",

  choices: [
    { label: "A", text: "26°19′" },
    { label: "B", text: "63°41′" },
    { label: "C", text: "56°19′" },
    { label: "D", text: "Never happens" },
    { label: "E", text: "53°41′" },
  ],

  correctAnswer: "B",

  explanation: "A star with declination δ never rises for northern latitudes φ > 90° − |δ|. For Antares, this boundary is 63°41′ N.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2018 First Round, Question 5.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 6,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Solar Altitude at Solstice",
  tags: [
    "summer solstice",
    "solar declination",
    "solar altitude",
    "latitude",
  ],

  type: "MCQ",

  questionText: "For the following problem find the range in which the answer lies: on the day of summer solstice, on which geographic latitude is the Sun culminating at the angle of +72°50′ north of the equator?",

  choices: [
    { label: "A", text: "0° - 15°" },
    { label: "B", text: "15° - 30°" },
    { label: "C", text: "30° - 45°" },
    { label: "D", text: "45° - 60°" },
    { label: "E", text: "60° - 75°" },
  ],

  correctAnswer: "A",

  explanation: "The official solution gives approximately +6°17′, which lies in the 0° - 15° range.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2018 First Round, Question 6.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 7,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Sidereal Time and Culmination",
  tags: [
    "Greenwich",
    "sidereal time",
    "right ascension",
    "upper culmination",
  ],

  type: "MCQ",

  questionText: "For the following problem, find the range in which the answer lies: looking from Greenwich on February 10th (s₀ = 9h17m48s) at what time is Pollux (α = 7h42m16s) at its upper culmination?",

  choices: [
    { label: "A", text: "12 am - 6 am" },
    { label: "B", text: "6 am - 12 pm" },
    { label: "C", text: "12 pm - 6 pm" },
    { label: "D", text: "6 pm - 10 pm" },
    { label: "E", text: "10 pm - 12 am" },
  ],

  correctAnswer: "E",

  explanation: "The official solution obtains 22h20m48s, which lies between 10 pm and midnight.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2018 First Round, Question 7.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 8,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Solar Interior Energy Transport",
  tags: [
    "Sun",
    "radiative zone",
    "energy transport",
    "solar interior",
  ],

  type: "MCQ",

  questionText: "What is the main energy transport process in the core of the Sun?",

  choices: [
    { label: "A", text: "Radiation" },
    { label: "B", text: "Convection" },
    { label: "C", text: "Conduction" },
    { label: "D", text: "Diffusion" },
    { label: "E", text: "Advection" },
  ],

  correctAnswer: "A",

  explanation: "Energy is transported primarily by radiation in the Sun’s inner regions; convection dominates farther out.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2018 First Round, Question 8.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 9,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Solar Photosphere Features",
  tags: [
    "Sun",
    "photosphere",
    "faculae",
    "solar features",
  ],

  type: "MCQ",

  questionText: "What are the bright regions on the solar photosphere called?",

  choices: [
    { label: "A", text: "Sunspots" },
    { label: "B", text: "Limbs" },
    { label: "C", text: "Faculae" },
    { label: "D", text: "Prominences" },
    { label: "E", text: "Flares" },
  ],

  correctAnswer: "C",

  explanation: "Faculae are bright photospheric regions; sunspots are comparatively dark regions.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2018 First Round, Question 9.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 10,

  difficulty: "Beginner",

  topic: "Solar System & Planetary Science",
  subtopic: "Phases of Inferior Planets",
  tags: [
    "Venus",
    "greatest elongation",
    "planetary phases",
    "geometry",
  ],

  type: "MCQ",

  questionText: "When seen from Earth, what is Venus’ phase when it is at greatest elongation?",

  choices: [
    { label: "A", text: "New" },
    { label: "B", text: "Crescent" },
    { label: "C", text: "Quarter" },
    { label: "D", text: "Gibbous" },
    { label: "E", text: "Full" },
  ],

  correctAnswer: "C",

  explanation: "At greatest elongation, the Sun-Venus-Earth geometry forms a right angle, so Venus appears half illuminated, or at quarter phase.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2018 First Round, Question 10.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 11,

  difficulty: "Beginner",

  topic: "Solar System & Planetary Science",
  subtopic: "Primary Atmospheres",
  tags: [
    "primary atmosphere",
    "gas giants",
    "planet formation",
    "Solar System",
  ],

  type: "MCQ",

  questionText: "Which planets have primary atmospheres?",

  choices: [
    { label: "A", text: "Jupiter, Saturn, Uranus, and Neptune" },
    { label: "B", text: "Mercury, Venus, Earth, and Mars" },
    { label: "C", text: "Mars, Jupiter, and Saturn" },
    { label: "D", text: "Venus and Earth" },
    { label: "E", text: "Mercury and Mars" },
  ],

  correctAnswer: "A",

  explanation: "Primary atmospheres are accreted gaseous material retained by the giant planets during Solar System formation.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2018 First Round, Question 11.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 12,

  difficulty: "Beginner",

  topic: "Solar System & Planetary Science",
  subtopic: "Spacecraft Exploration",
  tags: [
    "Haumea",
    "dwarf planets",
    "spacecraft missions",
    "Solar System exploration",
  ],

  type: "MCQ",

  questionText: "Which of the following planets or dwarf planets has not been visited by a spacecraft?",

  choices: [
    { label: "A", text: "Pluto" },
    { label: "B", text: "Haumea" },
    { label: "C", text: "Ceres" },
    { label: "D", text: "Mercury" },
    { label: "E", text: "Neptune" },
  ],

  correctAnswer: "B",

  explanation: "The official solution identifies Haumea as the object in this list not visited by a spacecraft.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2018 First Round, Question 12.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 13,

  difficulty: "Intermediate",

  topic: "Stars & Stellar Evolution",
  subtopic: "Stellar Flux and Magnitudes",
  tags: [
    "Stefan-Boltzmann law",
    "apparent magnitude",
    "stellar radius",
    "surface temperature",
  ],

  type: "MCQ",

  questionText: "Star A has a surface temperature of 10,000 K while Star B has a surface temperature of 4,000 K. Star B is 10 times larger than Star A and its distance from Earth is half that of Star A. What is the magnitude difference between Stars A and B?",

  choices: [
    { label: "A", text: "-10.48" },
    { label: "B", text: "-7.47" },
    { label: "C", text: "-0.48" },
    { label: "D", text: "2.53" },
    { label: "E", text: "7.47" },
  ],

  correctAnswer: "D",

  explanation: "Using F ∝ R²T⁴/d² and Δm = −2.5 log₁₀(F₁/F₂) gives a magnitude difference of about 2.53.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2018 First Round, Question 13.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 14,

  difficulty: "Intermediate",

  topic: "Stars & Stellar Evolution",
  subtopic: "Kraft Break",
  tags: [
    "Kraft break",
    "stellar interiors",
    "convection",
    "radiation",
  ],

  type: "MCQ",

  questionText: "What property of the interiors of stars changes at the Kraft break, around 1.6 Solar masses?",

  choices: [
    { label: "A", text: "The dominant spin state flips" },
    { label: "B", text: "The dominant energy transport mechanism in the interior changes" },
    { label: "C", text: "The flaring activity increases" },
    { label: "D", text: "The core becomes iron-rich" },
    { label: "E", text: "Hydrogen burning ends in the core" },
  ],

  correctAnswer: "B",

  explanation: "Across the Kraft break, the dominant internal energy-transport structure changes.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2018 First Round, Question 14.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 15,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Solar Evolution",
  tags: [
    "Sun",
    "stellar evolution",
    "Cepheid variables",
    "H-R diagram",
  ],

  type: "MCQ",

  questionText: "Which of the following stages will our Sun not evolve through?",

  choices: [
    { label: "A", text: "Red giant" },
    { label: "B", text: "White dwarf" },
    { label: "C", text: "Cepheid variable" },
    { label: "D", text: "Planetary nebula" },
    { label: "E", text: "Main sequence" },
  ],

  correctAnswer: "C",

  explanation: "The Sun is not massive enough to cross the Cepheid instability strip during its evolution.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2018 First Round, Question 15.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 16,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Stellar Mass Classes",
  tags: [
    "high-mass stars",
    "red dwarfs",
    "Wolf-Rayet stars",
    "red supergiants",
  ],

  type: "MCQ",

  questionText: "Which of the following are not high mass stars (relative to the others)?",

  choices: [
    { label: "A", text: "Wolf-Rayet stars" },
    { label: "B", text: "Type-II supernova progenitors" },
    { label: "C", text: "Cepheid variable" },
    { label: "D", text: "Red dwarfs" },
    { label: "E", text: "Red supergiants" },
  ],

  correctAnswer: "D",

  explanation: "Red dwarfs are low-mass stars compared with the other listed stellar classes.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2018 First Round, Question 16.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 17,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Hertzsprung-Russell Diagram",
  tags: [
    "H-R diagram",
    "cool stars",
    "dim stars",
    "main sequence",
  ],

  type: "MCQ",

  questionText: "On a Hertzsprung-Russell diagram, where would we find stars that are cool and dim?",

  choices: [
    { label: "A", text: "Upper right" },
    { label: "B", text: "Lower right" },
    { label: "C", text: "Upper left" },
    { label: "D", text: "Lower left" },
    { label: "E", text: "Middle" },
  ],

  correctAnswer: "B",

  explanation: "Temperature decreases to the right and luminosity decreases downward, placing cool, dim stars in the lower right.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2018 First Round, Question 17.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 18,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Main-Sequence Core Fusion",
  tags: [
    "main sequence",
    "hydrogen fusion",
    "stellar cores",
    "nuclear fusion",
  ],

  type: "MCQ",

  questionText: "What do the cores of low-mass and high-mass main-sequence stars have in common?",

  choices: [
    { label: "A", text: "Both have a uniform composition" },
    { label: "B", text: "Both are burning hydrogen" },
    { label: "C", text: "Both are convective" },
    { label: "D", text: "Both are radiative" },
    { label: "E", text: "Both are contracting" },
  ],

  correctAnswer: "B",

  explanation: "Both low- and high-mass main-sequence stars generate core energy by hydrogen fusion, though their core transport differs.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2018 First Round, Question 18.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 19,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Ideal Gas Pressure",
  tags: [
    "thermal pressure",
    "ideal gas law",
    "density",
    "temperature",
  ],

  type: "MCQ",

  questionText: "The thermal pressure of a gas depends on",

  choices: [
    { label: "A", text: "Density only" },
    { label: "B", text: "Temperature only" },
    { label: "C", text: "Both density and temperature" },
    { label: "D", text: "Composition" },
    { label: "E", text: "Gravity" },
  ],

  correctAnswer: "C",

  explanation: "For an ideal gas, thermal pressure is proportional to particle density times temperature.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2018 First Round, Question 19.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 20,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Planetary Nebula Remnants",
  tags: [
    "planetary nebula",
    "white dwarf",
    "low-mass stars",
    "stellar remnants",
  ],

  type: "MCQ",

  questionText: "What happens to the core of a star after a planetary nebula occurs?",

  choices: [
    { label: "A", text: "It contracts from a protostar to a main-sequence star" },
    { label: "B", text: "It breaks apart in a violent explosion" },
    { label: "C", text: "It becomes a white dwarf." },
    { label: "D", text: "It becomes a neutron star" },
    { label: "E", text: "none of the above" },
  ],

  correctAnswer: "C",

  explanation: "The exposed core of a low- or intermediate-mass star after the planetary-nebula phase becomes a white dwarf.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2018 First Round, Question 20.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 21,

  difficulty: "Intermediate",

  topic: "Stars & Stellar Evolution",
  subtopic: "Combined Magnitudes",
  tags: [
    "binary stars",
    "apparent magnitude",
    "flux addition",
    "α Piscium",
  ],

  type: "MCQ",

  questionText: "Find the visual magnitude of the binary star α Piscium, given that the visual magnitudes of each component in the binary system are 4.3 and 5.2. Pick the choice whose range encompasses the right answer.",

  choices: [
    { label: "A", text: "0-1" },
    { label: "B", text: "1-2" },
    { label: "C", text: "2-3" },
    { label: "D", text: "3-4" },
    { label: "E", text: "4-5" },
  ],

  correctAnswer: "D",

  explanation: "Adding the component fluxes yields a combined visual magnitude of about 3.91, which falls in the 3-4 range.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2018 First Round, Question 21.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 22,

  difficulty: "Beginner",

  topic: "Exoplanets & Planetary Systems",
  subtopic: "Exoplanet Detection Methods",
  tags: [
    "exoplanets",
    "radial velocity",
    "transits",
    "microlensing",
  ],

  type: "MCQ",

  questionText: "Which of the following is not a method used to detect exoplanets?",

  choices: [
    { label: "A", text: "Radial Velocity" },
    { label: "B", text: "Transits" },
    { label: "C", text: "Microlensing" },
    { label: "D", text: "Gravitational Waves" },
    { label: "E", text: "Direct Imaging" },
  ],

  correctAnswer: "D",

  explanation: "The official solution notes that gravitational waves are associated with compact-object binaries rather than standard exoplanet detection.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2018 First Round, Question 22.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 23,

  difficulty: "Beginner",

  topic: "Exoplanets & Planetary Systems",
  subtopic: "Hot Jupiters",
  tags: [
    "hot Jupiter",
    "51 Pegasi b",
    "exoplanet discovery",
    "Solar-type stars",
  ],

  type: "MCQ",

  questionText: "Which of the following type of planet was the first to be discovered around a Solar-type star?",

  choices: [
    { label: "A", text: "Earth-like" },
    { label: "B", text: "Super-Earth" },
    { label: "C", text: "Mini-Neptune" },
    { label: "D", text: "Super-Neptune" },
    { label: "E", text: "Hot Jupiter" },
  ],

  correctAnswer: "E",

  explanation: "51 Pegasi b was a close-in Jupiter-sized planet around a Sun-like star, making it a hot Jupiter.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2018 First Round, Question 23.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 24,

  difficulty: "Intermediate",

  topic: "Exoplanets & Planetary Systems",
  subtopic: "Transit Photometry",
  tags: [
    "transit depth",
    "planet radius",
    "normalized flux",
    "exoplanet",
  ],

  type: "MCQ",

  questionText: "A star of radius 0.72 solar radii experiences a periodic dip in brightness once every 13.8 days, thought to be a result of an orbiting exoplanet. The normalized flux during one of these dips in brightness is 0.98. What is the radius of the exoplanet?",

  choices: [
    { label: "A", text: "0.014 solar radii" },
    { label: "B", text: "0.102 solar radii" },
    { label: "C", text: "0.144 solar radii" },
    { label: "D", text: "0.706 solar radii" },
    { label: "E", text: "0.713 solar radii" },
  ],

  correctAnswer: "B",

  explanation: "With ΔF = 1 − 0.98 = (Rp/Rs)², Rp = 0.72√0.02 ≈ 0.102 solar radii.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2018 First Round, Question 24.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 25,

  difficulty: "Beginner",

  topic: "Galaxies & Extragalactic Astronomy",
  subtopic: "Milky Way Structure",
  tags: [
    "Milky Way",
    "galactic center",
    "Sagittarius",
    "zodiac constellations",
  ],

  type: "MCQ",

  questionText: "The center of the Milky Way is a part of which zodiac constellation?",

  choices: [
    { label: "A", text: "Gemini" },
    { label: "B", text: "Sagittarius" },
    { label: "C", text: "Scorpio" },
    { label: "D", text: "Cancer" },
    { label: "E", text: "Virgo" },
  ],

  correctAnswer: "B",

  explanation: "The galactic center lies in the direction of Sagittarius.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2018 First Round, Question 25.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 26,

  difficulty: "Beginner",

  topic: "Galaxies & Extragalactic Astronomy",
  subtopic: "Galactic Stellar Populations",
  tags: [
    "young stars",
    "thin disk",
    "galactic plane",
    "Milky Way",
  ],

  type: "MCQ",

  questionText: "The youngest stars in the Milky Way are found predominantly in which part of the galaxy?",

  choices: [
    { label: "A", text: "In the halo" },
    { label: "B", text: "In globular clusters" },
    { label: "C", text: "In the thinner part of the disk closer to the galactic plane" },
    { label: "D", text: "In the thicker part of the disk farther from the galactic plane" },
    { label: "E", text: "In the central bulge" },
  ],

  correctAnswer: "C",

  explanation: "Young populations and active star formation are concentrated in the thin disk near the galactic plane.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2018 First Round, Question 26.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 27,

  difficulty: "Beginner",

  topic: "Galaxies & Extragalactic Astronomy",
  subtopic: "Milky Way Distance Scale",
  tags: [
    "Harlow Shapley",
    "RR Lyrae",
    "Milky Way size",
    "standard candles",
  ],

  type: "MCQ",

  questionText: "In the 1920s Harlow Shapely estimated the size of the Milky Way galaxy using which of the following?",

  choices: [
    { label: "A", text: "RR Lyrae stars" },
    { label: "B", text: "Pulsating asymptotic giant branch stars" },
    { label: "C", text: "Type Ia supernovae" },
    { label: "D", text: "Type II supernovae" },
    { label: "E", text: "white dwarf stars" },
  ],

  correctAnswer: "A",

  explanation: "Shapley used RR Lyrae variables as distance indicators to map the Milky Way.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2018 First Round, Question 27.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 28,

  difficulty: "Intermediate",

  topic: "Telescopes, Observing & Instrumentation",
  subtopic: "Diffraction Limit",
  tags: [
    "Rayleigh criterion",
    "diffraction",
    "angular resolution",
    "telescope aperture",
  ],

  type: "MCQ",

  questionText: "What is the theoretical diffraction limited angular resolution in visible light (5,500 Å) of a typical 20-cm (8 in) amateur telescope?",

  choices: [
    { label: "A", text: "0.35 arcsec" },
    { label: "B", text: "0.69 arcsec" },
    { label: "C", text: "0.017 arcsec" },
    { label: "D", text: "1.7 arcsec" },
    { label: "E", text: "6.9 arcsec" },
  ],

  correctAnswer: "B",

  explanation: "Applying θ = 1.22λ/D for λ = 5,500 Å and D = 0.20 m gives about 0.69 arcsec.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2018 First Round, Question 28.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 29,

  difficulty: "Beginner",

  topic: "Telescopes, Observing & Instrumentation",
  subtopic: "Angular Resolution",
  tags: [
    "telescope aperture",
    "angular resolution",
    "diffraction",
    "mirror diameter",
  ],

  type: "MCQ",

  questionText: "To improve the angular resolution of a telescope one must",

  choices: [
    { label: "A", text: "Increase the diameter of the mirror or lens" },
    { label: "B", text: "Increase the telescope magnification" },
    { label: "C", text: "Increase the focal length of the eyepiece" },
    { label: "D", text: "Increase the focal length of the telescope" },
    { label: "E", text: "All of the above" },
  ],

  correctAnswer: "A",

  explanation: "The diffraction limit improves with larger aperture, not merely with higher magnification or focal length.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2018 First Round, Question 29.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2018,
  examName: "First Round",
  questionNumber: 30,

  difficulty: "Intermediate",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Binary-Star Kepler Law",
  tags: [
    "Capella",
    "binary stars",
    "Kepler's third law",
    "total mass",
  ],

  type: "MCQ",

  questionText: "Find the total sum of the binary system of the star Capella, if semi-major axis between them is 0.85 AU, and period of 0.285 years.",

  choices: [
    { label: "A", text: "5.5 solar masses" },
    { label: "B", text: "6.5 solar masses" },
    { label: "C", text: "7.5 solar masses" },
    { label: "D", text: "8.5 solar masses" },
    { label: "E", text: "9.5 solar masses" },
  ],

  correctAnswer: "C",

  explanation: "In solar units, Mtotal = a³/P². With a = 0.85 AU and P = 0.285 years, the result is about 7.5 solar masses.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao-first-round-exam-2018.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_2018.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2018 First Round, Question 30.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 1,

  difficulty: "Beginner",

  topic: "Galaxies & Extragalactic Astronomy",
  subtopic: "Tully-Fisher Relation",
  tags: [
    "Tully-Fisher relation",
    "spiral galaxies",
    "rotation velocity",
    "luminosity",
  ],

  type: "MCQ",

  questionText: "Which of the following relates the intrinsic luminosity of a spiral galaxy with its asymptotic rotation velocity?",

  choices: [
    { label: "A", text: "The Fundamental Plane" },
    { label: "B", text: "The Tully-Fisher Relation" },
    { label: "C", text: "The Press-Schechter Formalism" },
    { label: "D", text: "The Faber-Jackson Relation" },
  ],

  correctAnswer: "B",

  explanation: "The Tully-Fisher relation correlates a spiral galaxy’s luminosity or mass with its rotational velocity.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2019 First Round, Question 1.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 2,

  difficulty: "Beginner",

  topic: "Galaxies & Extragalactic Astronomy",
  subtopic: "Stellar Populations",
  tags: [
    "Population I",
    "Population II",
    "Milky Way",
    "galactic halo",
  ],

  type: "MCQ",

  questionText: "Which of the following correctly gives the location of Population I vs. Population II stars in the Milky Way?",

  choices: [
    { label: "A", text: "Population I - Thin Disk, Spiral Arms; Population II - Halo, Bulge" },
    { label: "B", text: "Population I - Thin Disk, Bulge; Population II - Spiral Arms, Halo" },
    { label: "C", text: "Population I - Halo, Bulge; Population II - Thin Disk, Spiral Arms" },
    { label: "D", text: "Population I - Halo, Thin Disk; Population II - Bulge, Spiral Arms" },
  ],

  correctAnswer: "A",

  explanation: "Younger Population I stars dominate the thin disk and spiral arms; older Population II stars are concentrated in the halo and bulge.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2019 First Round, Question 2.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 3,

  difficulty: "Advanced",

  topic: "Cosmology & Universe",
  subtopic: "Luminosity Distance",
  tags: [
    "quasar",
    "redshift",
    "bolometric flux",
    "luminosity distance",
  ],

  type: "MCQ",

  questionText: "A quasar with a bolometric flux of approximately 10⁻¹² erg s⁻¹ cm⁻² is observed at a redshift of 1.5, i.e. its comoving radial distance is about 4.4 Gpc. What is the bolometric luminosity of the quasar?",

  choices: [
    { label: "A", text: "6.0 × 10¹¹ L☉" },
    { label: "B", text: "3.8 × 10¹² L☉" },
    { label: "C", text: "2.4 × 10¹³ L☉" },
    { label: "D", text: "6.3 × 10¹⁴ L☉" },
  ],

  correctAnswer: "B",

  explanation: "The luminosity distance is dL = dC(1 + z), and L = 4πdL²F; the official solution gives 3.8 × 10¹² L☉.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2019 First Round, Question 3.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 4,

  difficulty: "Advanced",

  topic: "Cosmology & Universe",
  subtopic: "Angular-Diameter Distance",
  tags: [
    "quasar",
    "angular separation",
    "projected distance",
    "cosmology",
  ],

  type: "MCQ",

  questionText: "The quasar in the previous question has redshift 1.5 and comoving radial distance about 4.4 Gpc. It is observed to have a companion galaxy 5 arcseconds apart. What is the projected linear separation of the companion galaxy from the quasar?",

  choices: [
    { label: "A", text: "107 kpc" },
    { label: "B", text: "29 kpc" },
    { label: "C", text: "74 kpc" },
    { label: "D", text: "43 kpc" },
  ],

  correctAnswer: "D",

  explanation: "Using the angular-diameter distance dA = dC/(1 + z) and s = dAθ gives about 43 kpc.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2019 First Round, Question 4.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 5,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Seasonal Solar Altitude and Shadows",
  tags: [
    "Burj Khalifa",
    "solar declination",
    "shadow length",
    "local noon",
  ],

  type: "MCQ",

  questionText: "An observer is standing atop the Burj Khalifa, the tallest building on Earth (height = 830 m, latitude = 25.2 N, longitude = 55.3 E). Which of the following options is the closest to the shortest and longest shadow on the ground at local noon in a given year?",

  choices: [
    { label: "A", text: "10 m, 1050 m" },
    { label: "B", text: "25 m, 950 m" },
    { label: "C", text: "35 m, 850 m" },
    { label: "D", text: "45 m, 750 m" },
  ],

  correctAnswer: "B",

  explanation: "The noontime zenith angle varies with the Sun’s declination; applying shadow length = h tan(z) gives the official choice 25 m and 950 m.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2019 First Round, Question 5.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 6,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Distance to the Horizon",
  tags: [
    "horizon distance",
    "Everest",
    "Olympus Mons",
    "planetary radius",
  ],

  type: "MCQ",

  questionText: "Which of the following is closest to the ratio of the farthest distance to the horizon that can be seen by an observer standing atop Mount Everest on Earth (height = 8.8 km) and Olympus Mons on Mars (height = 25 km)?",

  choices: [
    { label: "A", text: "0.1" },
    { label: "B", text: "1" },
    { label: "C", text: "5" },
    { label: "D", text: "10" },
  ],

  correctAnswer: "B",

  explanation: "For h much smaller than planetary radius, horizon distance scales as √(hR); the two cases give a ratio closest to 1.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2019 First Round, Question 6.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 7,

  difficulty: "Advanced",

  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Rayleigh-Jeans Law",
  tags: [
    "blackbody radiation",
    "Rayleigh-Jeans law",
    "temperature dependence",
    "wavelength dependence",
  ],

  type: "MCQ",

  questionText: "An observer measures the blackbody spectrum for a variety of bodies as a function of temperature and wavelength in the long wavelength limit (hc/λ ≪ kBT) and finds that the data fit log(I) = a + b log(T) + c log(λ). What are the expected values of b and c?",

  choices: [
    { label: "A", text: "1, -4" },
    { label: "B", text: "1, 4" },
    { label: "C", text: "4, 1" },
    { label: "D", text: "-4, 1" },
  ],

  correctAnswer: "A",

  explanation: "The Rayleigh-Jeans limit gives Iλ ∝ Tλ⁻⁴, so b = 1 and c = −4.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2019 First Round, Question 7.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 8,

  difficulty: "Advanced",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Trans-Mars Injection",
  tags: [
    "Hohmann transfer",
    "delta-v",
    "low Earth orbit",
    "Mars transfer",
  ],

  type: "MCQ",

  questionText: "Suppose a spacecraft were orbiting in a low Earth orbit at an altitude of 400 km. The spacecraft makes a single orbital maneuver to place it into a Mars transfer orbit. Delta-v (Δv) refers to the change in velocity during an orbital maneuver. What is the Δv required for this trans-Mars injection? The semimajor axes of the orbits of Earth and Mars are 1.496 × 10⁸ km and 2.279 × 10⁸ km, respectively.",

  choices: [
    { label: "A", text: "2.94 km/s" },
    { label: "B", text: "3.57 km/s" },
    { label: "C", text: "6.12 km/s" },
    { label: "D", text: "10.85 km/s" },
    { label: "E", text: "11.24 km/s" },
  ],

  correctAnswer: "B",

  explanation: "The official derivation combines the heliocentric Hohmann-transfer excess speed with Earth escape from a 400 km orbit, giving Δv ≈ 3.57 km/s.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2019 First Round, Question 8.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 9,

  difficulty: "Advanced",

  topic: "Celestial Coordinates & Time",
  subtopic: "Parallax from Mars Orbit",
  tags: [
    "parallax",
    "Mars orbit",
    "parsecs",
    "astrometry",
  ],

  type: "MCQ",

  questionText: "After entering Mars orbit, a spacecraft finds that over the course of the Martian year, the position of Star A varies by 613.7 milliarcseconds due to the movement of the spacecraft around the Sun. Determine the distance to Star A.",

  choices: [
    { label: "A", text: "1.629 pc" },
    { label: "B", text: "2.482 pc" },
    { label: "C", text: "3.259 pc" },
    { label: "D", text: "4.965 pc" },
    { label: "E", text: "6.518 pc" },
  ],

  correctAnswer: "D",

  explanation: "The parallax angle is half the total variation, 0.30685 arcsec; correcting for the 1.523 AU Martian baseline gives 4.965 pc.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2019 First Round, Question 9.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 10,

  difficulty: "Advanced",

  topic: "Exoplanets & Planetary Systems",
  subtopic: "Radial-Velocity Planet Mass",
  tags: [
    "radial velocity",
    "exoplanet mass",
    "binary motion",
    "Jupiter masses",
  ],

  type: "MCQ",

  questionText: "Star A, of mass 3.5 M☉, shows radial-velocity variations 24.2 m/s in amplitude and 23.22 years in period, suggesting the presence of an orbiting exoplanet. Which of the following is closest to the mass of the exoplanet in Jupiter masses? Assume the exoplanet’s orbit is circular and has inclination 90°. The mass of Jupiter is 1.898 × 10²⁷ kg. Assume the mass of the planet is much smaller than that of Star A.",

  choices: [
    { label: "A", text: "0.7 MJ" },
    { label: "B", text: "2.1 MJ" },
    { label: "C", text: "5.6 MJ" },
    { label: "D", text: "9.9 MJ" },
    { label: "E", text: "13.2 MJ" },
  ],

  correctAnswer: "C",

  explanation: "Kepler’s law gives the planetary semimajor axis and momentum balance relates the stellar reflex speed to planet mass; the official solution gives 5.6 MJ.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2019 First Round, Question 10.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 11,

  difficulty: "Advanced",

  topic: "Telescopes, Observing & Instrumentation",
  subtopic: "Rayleigh Criterion",
  tags: [
    "Rayleigh criterion",
    "β Pictoris b",
    "direct imaging",
    "infrared telescope",
  ],

  type: "MCQ",

  questionText: "Whether or not a diffraction-limited optical system can resolve two points as distinct can be determined by the Rayleigh criterion. β Pictoris b is located 19.44 pc away, and is located 9.2 AU from its host star. When viewing in infrared (λ = 1650 nm), what is the minimum telescope diameter that is able to resolve β Pictoris and its exoplanet?",

  choices: [
    { label: "A", text: "0.719 m" },
    { label: "B", text: "0.877 m" },
    { label: "C", text: "1.142 m" },
    { label: "D", text: "1.438 m" },
    { label: "E", text: "1.755 m" },
  ],

  correctAnswer: "B",

  explanation: "With angular separation θ ≈ 9.2 AU/19.44 pc, D > 1.22λ/θ gives a minimum diameter of about 0.877 m.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2019 First Round, Question 11.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 12,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Meridian Transit Time",
  tags: [
    "Orion Nebula",
    "right ascension",
    "local solar time",
    "meridian transit",
  ],

  type: "MCQ",

  questionText: "The celestial coordinates of the Orion Nebula are RA 05h35m, dec −05°23′. Which of the following is closest to the time (local solar time) when the Orion Nebula would cross the meridian on the night of February 1st 2019? The date of the vernal equinox of 2019 is March 20th.",

  choices: [
    { label: "A", text: "08:40 PM" },
    { label: "B", text: "10:22 PM" },
    { label: "C", text: "12:00 AM" },
    { label: "D", text: "01:38 AM" },
    { label: "E", text: "03:20 AM" },
  ],

  correctAnswer: "A",

  explanation: "The official solution estimates the Sun’s RA 47 days before the vernal equinox and finds an Orion Nebula transit near 08:40 PM.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 5,

  attributionText: "Source: USAAAO 2019 First Round, Question 12.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 13,

  difficulty: "Advanced",

  topic: "Stars & Stellar Evolution",
  subtopic: "Extinction and Distance Modulus",
  tags: [
    "hypergiant",
    "extinction",
    "distance modulus",
    "absolute magnitude",
  ],

  type: "MCQ",

  questionText: "A yellow hypergiant located 1.04 kpc away has an apparent visual magnitude of 1.49 and a B − V color excess of 0.29. Assuming RV, the ratio of V-band extinction to B − V color excess, is 3.1, determine the absolute visual magnitude of the star.",

  choices: [
    { label: "A", text: "-9.5" },
    { label: "B", text: "-8.9" },
    { label: "C", text: "-8.6" },
    { label: "D", text: "-8.3" },
    { label: "E", text: "-7.7" },
  ],

  correctAnswer: "A",

  explanation: "AV = 3.1 × 0.29 = 0.90. Inserting this into the extinction-corrected distance modulus gives MV ≈ −9.5.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 5,

  attributionText: "Source: USAAAO 2019 First Round, Question 13.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 14,

  difficulty: "Advanced",

  topic: "Stars & Stellar Evolution",
  subtopic: "Solar Neutrino Flux",
  tags: [
    "pp chain",
    "solar neutrinos",
    "Mars",
    "inverse-square law",
  ],

  type: "MCQ",

  questionText: "The pp chain is a primary energy generation mechanism in the Sun. Each run of the process 2H + e → D + ν releases 26.73 MeV of energy. Calculate the neutrino flux on the surface of Mars (in neutrinos per m²), assuming that the pp chain is responsible for 100% of the Sun’s energy generation. Mars is at a distance of 1.52 AU.",

  choices: [
    { label: "A", text: "2.54 × 10¹³" },
    { label: "B", text: "3.17 × 10¹⁶" },
    { label: "C", text: "1.37 × 10¹⁴" },
    { label: "D", text: "5.94 × 10¹²" },
    { label: "E", text: "4.45 × 10¹⁵" },
  ],

  correctAnswer: "C",

  explanation: "Dividing the solar luminosity by the energy released per pp-chain run and spreading the neutrinos over a sphere at 1.52 AU gives 1.37 × 10¹⁴ neutrinos/m².",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 5,

  attributionText: "Source: USAAAO 2019 First Round, Question 14.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 15,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Cepheid Period-Luminosity Relation",
  tags: [
    "Cepheid variables",
    "period-luminosity relation",
    "standard candles",
    "stellar distances",
  ],

  type: "MCQ",

  questionText: "A relation between which of the following pairs of properties of Cepheid variables makes Cepheid variables, specifically, useful objects for determining stellar distances?",

  choices: [
    { label: "A", text: "Mass and Temperature" },
    { label: "B", text: "Period and Luminosity" },
    { label: "C", text: "Temperature and Period" },
    { label: "D", text: "Mass and Luminosity" },
    { label: "E", text: "Period and Radius" },
  ],

  correctAnswer: "B",

  explanation: "Cepheids obey a period-luminosity relation, allowing the period to determine intrinsic luminosity.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 6,

  attributionText: "Source: USAAAO 2019 First Round, Question 15.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 16,

  difficulty: "Advanced",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Black-Hole Average Density",
  tags: [
    "Chandrasekhar limit",
    "Schwarzschild radius",
    "black holes",
    "density",
  ],

  type: "MCQ",

  questionText: "Assuming that the Chandrasekhar Limit is 1.4 Solar masses, estimate the maximum average density (in kg/m³) of a Chandrasekhar-mass black hole.",

  choices: [
    { label: "A", text: "1.5 × 10²²" },
    { label: "B", text: "4.7 × 10¹⁴" },
    { label: "C", text: "8.2 × 10¹⁰" },
    { label: "D", text: "9.4 × 10¹⁸" },
    { label: "E", text: "7.1 × 10²⁶" },
  ],

  correctAnswer: "D",

  explanation: "Using the Schwarzschild radius R = 2GM/c² in ρ = M/(4πR³/3) gives about 9.4 × 10¹⁸ kg/m³.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 6,

  attributionText: "Source: USAAAO 2019 First Round, Question 16.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 17,

  difficulty: "Advanced",

  topic: "Stars & Stellar Evolution",
  subtopic: "Solar Differential Rotation",
  tags: [
    "sunspots",
    "differential rotation",
    "solar latitude",
    "angular velocity",
  ],

  type: "MCQ",

  questionText: "The Sun’s differential rotation can be estimated with the equation ω = X + Y sin²(φ) + Z sin⁴(φ), where ω is angular velocity in degrees per day, φ is solar latitude, and X, Y, and Z are constants equal to 15, -2.5, and -2 degrees per day. Two sunspots are spotted along the same solar meridian, one at 0° and the other at 40°. Assuming they do not disappear or change latitude and move with the solar surface, after how many days will the sunspots be aligned once again? Round to the nearest day.",

  choices: [
    { label: "A", text: "142" },
    { label: "B", text: "202" },
    { label: "C", text: "262" },
    { label: "D", text: "312" },
    { label: "E", text: "372" },
  ],

  correctAnswer: "C",

  explanation: "The official solution obtains ω0° = 15°/day and ω40° = 13.626°/day; one extra 360° lap takes about 262 days.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 6,

  attributionText: "Source: USAAAO 2019 First Round, Question 17.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 18,

  difficulty: "Advanced",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Binary-Star Mass from Eclipses",
  tags: [
    "eclipsing binary",
    "orbital period",
    "Kepler's third law",
    "total mass",
  ],

  type: "MCQ",

  questionText: "An observer generates a light curve of a binary system and notices two different minima that repeat periodically in alternating fashion. The time between the first minimum and second minimum is 285.7 days. In solar masses, estimate the total mass of the binary system if the two stellar bodies are separated by a mean distance of 4.1 AU.",

  choices: [
    { label: "A", text: "0.0002" },
    { label: "B", text: "0.0008" },
    { label: "C", text: "28" },
    { label: "D", text: "56" },
    { label: "E", text: "112" },
  ],

  correctAnswer: "C",

  explanation: "The alternating minima are half an orbital period apart, so P = 2 × 285.7 days. Kepler’s law gives Mtotal ≈ 28 solar masses.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 6,

  attributionText: "Source: USAAAO 2019 First Round, Question 18.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 19,

  difficulty: "Intermediate",

  topic: "Celestial Coordinates & Time",
  subtopic: "Altitude from Hour Angle",
  tags: [
    "Eltanin",
    "altitude",
    "local sidereal time",
    "hour angle",
  ],

  type: "MCQ",

  questionText: "Eltanin, the brightest star in Draco, has approximate coordinates RA 17h56m, Dec +51.5°. Given that at the observer’s location the latitude is +50° and the local sidereal time is 14:00, how far above the horizon will Eltanin appear? Round to the nearest degree.",

  choices: [
    { label: "A", text: "26" },
    { label: "B", text: "54" },
    { label: "C", text: "59" },
    { label: "D", text: "89" },
    { label: "E", text: "The star is below the horizon" },
  ],

  correctAnswer: "B",

  explanation: "The local hour angle is about −59°. Using the altitude relation gives an altitude of approximately 54°.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 7,

  attributionText: "Source: USAAAO 2019 First Round, Question 19.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 20,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Hertzsprung-Russell Diagram",
  tags: [
    "H-R diagram",
    "absolute magnitude",
    "effective temperature",
    "stellar classification",
  ],

  type: "MCQ",

  questionText: "Stellar bodies located in the top left of a Hertzsprung-Russell diagram necessarily have which properties?",

  choices: [
    { label: "A", text: "Low absolute magnitude, Low effective temperature" },
    { label: "B", text: "Low absolute magnitude, High effective temperature" },
    { label: "C", text: "High absolute magnitude, High effective temperature" },
    { label: "D", text: "High absolute magnitude, Low effective temperature" },
    { label: "E", text: "Intermediate absolute magnitude, Intermediate effective temperature" },
  ],

  correctAnswer: "B",

  explanation: "The top left of the H-R diagram contains luminous, hot stars: low (more negative) absolute magnitude and high effective temperature.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 7,

  attributionText: "Source: USAAAO 2019 First Round, Question 20.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 21,

  difficulty: "Intermediate",

  topic: "Cosmology & Universe",
  subtopic: "Cosmic Distance Ladder",
  tags: [
    "distance ladder",
    "parallax",
    "RR Lyrae",
    "Hubble law",
  ],

  type: "MCQ",

  questionText: "Which of the following correctly orders the following distance indicators from the smallest to largest scale?",

  choices: [
    { label: "A", text: "Stellar parallax, spectroscopic parallax, RR Lyrae variables, Hubble constant" },
    { label: "B", text: "Spectroscopic parallax, stellar parallax, RR Lyrae variables, Hubble constant" },
    { label: "C", text: "Stellar parallax, RR Lyrae variables, spectroscopic parallax, Hubble constant" },
    { label: "D", text: "Stellar parallax, spectroscopic parallax, Hubble constant, RR Lyrae variables" },
    { label: "E", text: "Spectroscopic parallax, stellar parallax, Hubble constant, RR Lyrae variables" },
  ],

  correctAnswer: "A",

  explanation: "The official solution orders the methods by typical reach: stellar parallax, spectroscopic parallax, RR Lyrae variables, then the Hubble relation.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 7,

  attributionText: "Source: USAAAO 2019 First Round, Question 21.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 22,

  difficulty: "Beginner",

  topic: "Solar System & Planetary Science",
  subtopic: "Planetary Phases at Quadrature",
  tags: [
    "Earth",
    "Mars",
    "quadrature",
    "planetary phases",
  ],

  type: "MCQ",

  questionText: "As seen from Mars, what phase will Earth appear to be in when Mars is at quadrature from Earth?",

  choices: [
    { label: "A", text: "New" },
    { label: "B", text: "Crescent" },
    { label: "C", text: "Quarter" },
    { label: "D", text: "Gibbous" },
    { label: "E", text: "Full" },
  ],

  correctAnswer: "C",

  explanation: "At quadrature, the Sun-Earth-Mars geometry forms a right angle, so Earth appears half illuminated, or at quarter phase.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 7,

  attributionText: "Source: USAAAO 2019 First Round, Question 22.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 23,

  difficulty: "Beginner",

  topic: "Celestial Coordinates & Time",
  subtopic: "Southern Celestial Pole",
  tags: [
    "Sigma Octantis",
    "southern sky",
    "celestial poles",
    "circumpolar stars",
  ],

  type: "MCQ",

  questionText: "Which of the following stars is almost always never visible to observers in the Northern hemisphere?",

  choices: [
    { label: "A", text: "Alpha Aurigae" },
    { label: "B", text: "Gamma Cygni" },
    { label: "C", text: "Alpha Lyrae" },
    { label: "D", text: "Sigma Octantis" },
    { label: "E", text: "Beta Orionis" },
  ],

  correctAnswer: "D",

  explanation: "Sigma Octantis lies close to the south celestial pole, making it almost never visible from the Northern Hemisphere.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 8,

  attributionText: "Source: USAAAO 2019 First Round, Question 23.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 24,

  difficulty: "Advanced",

  topic: "Celestial Coordinates & Time",
  subtopic: "Zenith Distance and Observer Altitude",
  tags: [
    "equinox",
    "Sun altitude",
    "zenith distance",
    "Ecuador",
  ],

  type: "MCQ",

  questionText: "Two amateur astronomers A and B live in Ecuador and stand on the Equator at the Galapagos Islands (height 0 m, longitude 91° W) and Volcán Cayambe (height 5790 m, longitude 78° W), respectively. What are the differences in degrees of the Sun’s altitudes and zenith distances measured on March 20, 2019 when it is local noon for observer B? Neglect refraction and give the nearest-degree answer.",

  choices: [
    { label: "A", text: "Difference in altitudes: 15, Difference in zenith distances: 13." },
    { label: "B", text: "Difference in altitudes: 13, Difference in zenith distances: 13." },
    { label: "C", text: "Difference in altitudes: 13, Difference in zenith distances: 15." },
    { label: "D", text: "Difference in altitudes: 11, Difference in zenith distances: 13." },
  ],

  correctAnswer: "D",

  explanation: "At the equinox the Sun is on the celestial equator. The longitude difference gives a 13° zenith-distance difference; the elevation correction gives an altitude difference near 11.3°.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 8,

  attributionText: "Source: USAAAO 2019 First Round, Question 24.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 25,

  difficulty: "Advanced",

  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Stefan-Boltzmann Scaling",
  tags: [
    "blackbody radiation",
    "Schwarzschild radius",
    "Wien's law",
    "luminosity ratio",
  ],

  type: "MCQ",

  questionText: "The spectra of two stars A and B peak at wavelengths 500 nm and 250 nm respectively. What is the ratio of their luminosities if they form black holes with Schwarzschild radii in the ratio 8:1? Assume their densities were uniform and identical before collapse and that no mass was lost.",

  choices: [
    { label: "A", text: "2:1" },
    { label: "B", text: "4:1" },
    { label: "C", text: "1:4" },
    { label: "D", text: "1:2" },
  ],

  correctAnswer: "C",

  explanation: "Schwarzschild radius gives a mass ratio 8:1, and equal density gives stellar-radius ratio 2:1. Wien’s law gives temperature ratio 1:2; Stefan-Boltzmann scaling gives luminosity ratio 1:4.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 8,

  attributionText: "Source: USAAAO 2019 First Round, Question 25.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 26,

  difficulty: "Advanced",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Mercury Transit Duration",
  tags: [
    "Mercury",
    "perihelion",
    "aphelion",
    "orbital speed",
  ],

  type: "MCQ",

  questionText: "Two stationary observers at a distance 100 AU from the Sun observe transits of Mercury across the diameter of the Sun’s disk when Mercury is at perihelion and aphelion respectively. Which of the following is closest to the ratio of the aphelion transit time to the perihelion transit time? You are given that the semimajor axis and eccentricity of Mercury’s orbit are 0.387 AU and 0.21 respectively.",

  choices: [
    { label: "A", text: "1:1" },
    { label: "B", text: "2:1" },
    { label: "C", text: "4:1" },
    { label: "D", text: "8:1" },
  ],

  correctAnswer: "B",

  explanation: "Transit duration is inversely proportional to Mercury’s orbital speed. The official solution finds an aphelion-to-perihelion duration ratio of about 1.5:1, closest to 2:1.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 9,

  attributionText: "Source: USAAAO 2019 First Round, Question 26.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 27,

  difficulty: "Intermediate",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Binary-Star Kepler Law",
  tags: [
    "Capella",
    "binary stars",
    "Kepler's third law",
    "total mass",
  ],

  type: "MCQ",

  questionText: "Find the total sum of the binary system of the star Capella, if semi-major axis between them is 0.85 AU, and period of 0.285 years.",

  choices: [
    { label: "A", text: "5.5 solar masses" },
    { label: "B", text: "6.5 solar masses" },
    { label: "C", text: "7.6 solar masses" },
    { label: "D", text: "8.5 solar masses" },
    { label: "E", text: "9.5 solar masses" },
  ],

  correctAnswer: "C",

  explanation: "Using Mtotal = a³/P² in solar units gives approximately 7.6 solar masses in the official 2019 solution.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 9,

  attributionText: "Source: USAAAO 2019 First Round, Question 27.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 28,

  difficulty: "Advanced",

  topic: "Solar System & Planetary Science",
  subtopic: "Equilibrium Temperature",
  tags: [
    "2014 MU69",
    "Kuiper Belt",
    "albedo",
    "blackbody temperature",
  ],

  type: "MCQ",

  questionText: "The New Horizons spacecraft completed a flyby of 2014 MU69 on New Year’s Day of this year. 2014 MU69 is a Kuiper Belt Object with a semimajor axis of 44.58 AU. Estimate the maximum temperature at the surface of 2014 MU69 in Kelvin, assuming the object has zero albedo.",

  choices: [
    { label: "A", text: "41.7 Kelvin" },
    { label: "B", text: "58.9 Kelvin" },
    { label: "C", text: "83.3 Kelvin" },
    { label: "D", text: "117.9 Kelvin" },
  ],

  correctAnswer: "B",

  explanation: "Using the solar irradiation at 44.58 AU and assuming daytime-only re-emission for maximum temperature gives 58.9 K.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 9,

  attributionText: "Source: USAAAO 2019 First Round, Question 28.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 29,

  difficulty: "Advanced",

  topic: "Exoplanets & Planetary Systems",
  subtopic: "Central Pressure Estimate",
  tags: [
    "HD 209458b",
    "gas giant",
    "hydrostatic pressure",
    "Jupiter",
  ],

  type: "MCQ",

  questionText: "HD 209458b is an extrasolar gas giant planet with a radius of 1.38 Jupiter radii and a mass of 0.69 Jupiter masses (1 Jupiter radius = 6.99 × 10⁷ m, 1 Jupiter mass = 1.90 × 10²⁷ kg). Which of the following is closest to the pressure at the very center of HD 209458b, in bars?",

  choices: [
    { label: "A", text: "10⁹ bars" },
    { label: "B", text: "10⁶ bars" },
    { label: "C", text: "10⁵ bars" },
    { label: "D", text: "10³ bars" },
  ],

  correctAnswer: "B",

  explanation: "A hydrostatic estimate P ~ ρgR = GM²/(4πR⁴/3) gives about 3.16 × 10¹¹ Pa, or approximately 10⁶ bars.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 9,

  attributionText: "Source: USAAAO 2019 First Round, Question 29.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2019,
  examName: "First Round",
  questionNumber: 30,

  difficulty: "Intermediate",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Kepler's Third Law with Stellar Mass",
  tags: [
    "M-dwarf",
    "Earth orbit",
    "orbital period",
    "Kepler's law",
  ],

  type: "MCQ",

  questionText: "Imagine that our Sun was suddenly replaced by an M-dwarf with a mass half that of the Sun. If Earth kept the same semimajor axis during this change, what would Earth’s new orbital period be around the M-dwarf?",

  choices: [
    { label: "A", text: "0.707 years" },
    { label: "B", text: "1 year" },
    { label: "C", text: "1.414 years" },
    { label: "D", text: "2 years" },
  ],

  correctAnswer: "C",

  explanation: "At fixed semimajor axis, P ∝ M⁻¹ᐟ². Halving the stellar mass increases the period by √2 to 1.414 years.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2019/02/2019_usaaao_first_round.pdf",
  pageNumber: 8,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2019/02/usaaao_first_round_answer_key.pdf",
  answerKeyPageNumber: 10,

  attributionText: "Source: USAAAO 2019 First Round, Question 30.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 1,

  difficulty: "Beginner",

  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Wien's Displacement Law",
  tags: [
    "blackbody radiation",
    "Wien's law",
    "human body",
    "infrared",
  ],

  type: "MCQ",

  questionText: "The spectrum of a blackbody peaks at a wavelength inversely proportional to its temperature. This is known as Wein’s law and is used to estimate stellar temperatures. The Sun can be approximated as a blackbody with its peak wavelength in the visible portion of the spectrum and a surface temperature of 6000 K. Given this data, estimate the peak wavelength of a human being, assuming it to be a black body.",

  choices: [
    { label: "A", text: "10 nm" },
    { label: "B", text: "10 µm" },
    { label: "C", text: "10 mm" },
    { label: "D", text: "10 m" },
  ],

  correctAnswer: "B",

  explanation: "Scaling a roughly 550 nm solar peak at 6000 K down to a 300 K human gives about 10,000 nm, or 10 µm.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2020 First Round, Question 1.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 2,

  difficulty: "Intermediate",

  topic: "Exoplanets & Planetary Systems",
  subtopic: "Stellar Reflex Motion",
  tags: [
    "Sun",
    "Jupiter",
    "barycenter",
    "Doppler spectroscopy",
  ],

  type: "MCQ",

  questionText: "Calculate the speed of the Sun around the center of mass due to the presence of Jupiter.",

  choices: [
    { label: "A", text: "6 m/s" },
    { label: "B", text: "12 m/s" },
    { label: "C", text: "600 m/s" },
    { label: "D", text: "1200 m/s" },
  ],

  correctAnswer: "B",

  explanation: "Using the Sun-Jupiter barycenter and Jupiter’s orbital angular speed gives a solar reflex speed of about 12 m/s.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2020 First Round, Question 2.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 3,

  difficulty: "Intermediate",

  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Doppler Shift",
  tags: [
    "H-alpha",
    "Doppler spectroscopy",
    "Sun-Jupiter system",
    "radial velocity",
  ],

  type: "MCQ",

  questionText: "Hα is a prominent absorption line in the Sun’s spectrum with λ = 656.281 nm. For an observer on α-Centauri, assuming the Jupiter-Sun orbital plane is in the line of sight, calculate the magnitude of the periodic shift in wavelength for the Hα line.",

  choices: [
    { label: "A", text: "2.7 × 10⁻⁵ nm" },
    { label: "B", text: "2.7 × 10⁻⁴ nm" },
    { label: "C", text: "2.7 × 10⁻³ nm" },
    { label: "D", text: "2.7 × 10⁻² nm" },
  ],

  correctAnswer: "A",

  explanation: "Using Δλ/λ ≈ v/c with the Sun’s 12 m/s reflex speed gives a shift of about 2.7 × 10⁻⁵ nm.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2020 First Round, Question 3.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 4,

  difficulty: "Intermediate",

  topic: "Stars & Stellar Evolution",
  subtopic: "Helium Burning",
  tags: [
    "helium burning",
    "hydrogen fusion",
    "stellar evolution",
    "nuclear energy",
  ],

  type: "MCQ",

  questionText: "Why does helium burn much faster than hydrogen in a star?",

  choices: [
    { label: "A", text: "The star enters a different stellar evolution phase before the helium is all used up" },
    { label: "B", text: "The temperature of the star is higher during the phase of helium burning" },
    { label: "C", text: "The fraction of helium is much less than the fraction of hydrogen during early evolutionary phases of a star" },
    { label: "D", text: "The energy released for each helium burning reaction is much smaller than for hydrogen" },
    { label: "E", text: "None of the above" },
  ],

  correctAnswer: "D",

  explanation: "The official key explains that helium-burning reactions release much less energy per reaction than hydrogen-burning reactions.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 1,

  attributionText: "Source: USAAAO 2020 First Round, Question 4.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 5,

  difficulty: "Advanced",

  topic: "Celestial Coordinates & Time",
  subtopic: "Axial Precession",
  tags: [
    "Polaris",
    "precession",
    "North Star",
    "spherical trigonometry",
  ],

  type: "MCQ",

  questionText: "The Earth’s rotation axis happens to be pointing almost exactly at Polaris now, but Polaris will not always be the North Star. The direction of the rotation axis precesses with a period of 26,000 years. Sometime in the future, star A, which has an angular separation of 26°11′ from Polaris, will be the North Star. How many years from now will star A be the North Star?",

  choices: [
    { label: "A", text: "1500 years" },
    { label: "B", text: "13000 years" },
    { label: "C", text: "2000 years" },
    { label: "D", text: "5000 years" },
    { label: "E", text: "26000 years" },
  ],

  correctAnswer: "D",

  explanation: "The official spherical-triangle calculation gives a precession angle of about 69°13′; at 26,000 years per full circle, this is about 5,000 years.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 2,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2020 First Round, Question 5.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 6,

  difficulty: "Advanced",

  topic: "Telescopes, Observing & Instrumentation",
  subtopic: "Tripod Force Geometry",
  tags: [
    "telescope tripod",
    "forces",
    "spherical trigonometry",
    "statics",
  ],

  type: "MCQ",

  questionText: "A 13 kg telescope is mounted on a tripod such that the angle between tripod legs is 30°. How much is the force exerted on each leg? Gravitational acceleration (g) is 9.8 m/s².",

  choices: [
    { label: "A", text: "42.5" },
    { label: "B", text: "44.5" },
    { label: "C", text: "49" },
    { label: "D", text: "24.5" },
    { label: "E", text: "40.5" },
  ],

  correctAnswer: "B",

  explanation: "The official solution derives the leg angle from a spherical triangle and applies F = mg/(3 cos θ), obtaining 44.5 N per leg.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2020 First Round, Question 6.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 7,

  difficulty: "Advanced",

  topic: "Celestial Coordinates & Time",
  subtopic: "Altitude from Equatorial Coordinates",
  tags: [
    "Capella",
    "Boston",
    "vernal equinox",
    "altitude",
  ],

  type: "MCQ",

  questionText: "Capella, the brightest star in Auriga, has celestial coordinates 05h18m12.78s, +46°00′59.8″. At midnight local solar time on the vernal equinox, which of the following is closest to the altitude of Capella above or below the horizon as viewed from Boston? The coordinates of Boston are 42.3601° N, 71.0589° W.",

  choices: [
    { label: "A", text: "−64°" },
    { label: "B", text: "−32°" },
    { label: "C", text: "0°" },
    { label: "D", text: "+23°" },
    { label: "E", text: "+67°" },
  ],

  correctAnswer: "D",

  explanation: "The official spherical-trigonometry calculation gives zenith distance about 66.9°, hence altitude about +23°.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 2,

  attributionText: "Source: USAAAO 2020 First Round, Question 7.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 8,

  difficulty: "Advanced",

  topic: "Celestial Coordinates & Time",
  subtopic: "Solar versus Sidereal Day",
  tags: [
    "solar day",
    "sidereal day",
    "axial tilt",
    "exoplanets",
  ],

  type: "MCQ",

  questionText: "Kerbyn is a small rocky planet in a circular orbit around a 0.2 M☉ star with a semimajor axis of 0.1 AU. Kerbyn has an axial tilt of ε = 42° and a sidereal rotation period of 05h59m9.4s. On the vernal equinox, what is the length of the apparent solar day on Kerbyn? The apparent solar day is defined as the interval between successive crossings of the meridian by the Sun.",

  choices: [
    { label: "A", text: "05h55m39.3s" },
    { label: "B", text: "05h57m15.2s" },
    { label: "C", text: "06h00m00.0s" },
    { label: "D", text: "06h01m45.1s" },
    { label: "E", text: "06h02m39.5s" },
  ],

  correctAnswer: "D",

  explanation: "The official solution accounts for Kerbyn’s orbital motion projected onto the celestial equator and finds an added 155.7 seconds, yielding 06h01m45.1s.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2020 First Round, Question 8.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 9,

  difficulty: "Intermediate",

  topic: "Stars & Stellar Evolution",
  subtopic: "Solar Photospheric Opacity",
  tags: [
    "Sun",
    "photosphere",
    "H-minus",
    "stellar opacity",
  ],

  type: "MCQ",

  questionText: "Which of the following is responsible for the opacity of the Sun’s photosphere?",

  choices: [
    { label: "A", text: "He²⁺" },
    { label: "B", text: "Fe-56" },
    { label: "C", text: "ν" },
    { label: "D", text: "H⁻" },
    { label: "E", text: "e⁻" },
  ],

  correctAnswer: "D",

  explanation: "H⁻ is the dominant source of bound-free opacity in Sun-like and cooler stars.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2020 First Round, Question 9.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 10,

  difficulty: "Intermediate",

  topic: "Solar System & Planetary Science",
  subtopic: "Planet Nine Orbital Period",
  tags: [
    "Planet Nine",
    "Kepler's third law",
    "outer Solar System",
    "orbital period",
  ],

  type: "MCQ",

  questionText: "Planet Nine is a hypothetical planet in the outer Solar System, with a semimajor axis between 400 and 800 AU. Which of the following is a possible orbital period for Planet Nine?",

  choices: [
    { label: "A", text: "71.1 years" },
    { label: "B", text: "600 years" },
    { label: "C", text: "1,500 years" },
    { label: "D", text: "15,000 years" },
    { label: "E", text: "360,000 years" },
  ],

  correctAnswer: "D",

  explanation: "Using P² = a³ for a solar-mass central star places the period at thousands to tens of thousands of years; 15,000 years corresponds to an allowed semimajor axis.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 3,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2020 First Round, Question 10.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 11,

  difficulty: "Beginner",

  topic: "Solar System & Planetary Science",
  subtopic: "Tidal Heating",
  tags: [
    "Io",
    "Jupiter",
    "tidal forces",
    "volcanism",
  ],

  type: "MCQ",

  questionText: "The main reason why Io is volcanically active is due to:",

  choices: [
    { label: "A", text: "Its own magnetic field" },
    { label: "B", text: "Tidal forces from Jupiter" },
    { label: "C", text: "Internal heat" },
    { label: "D", text: "Jupiter Torus" },
    { label: "E", text: "Eccentricity of its orbit" },
  ],

  correctAnswer: "B",

  explanation: "Strong tidal forces from Jupiter drive internal heating and volcanism on Io.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 3,

  attributionText: "Source: USAAAO 2020 First Round, Question 11.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 12,

  difficulty: "Advanced",

  topic: "Celestial Coordinates & Time",
  subtopic: "Day Length on Uranus",
  tags: [
    "Uranus",
    "polar day",
    "solar declination",
    "hour angle",
  ],

  type: "MCQ",

  questionText: "Knowing that the distance between the Sun and Uranus is 2.87 × 10⁹ km and Uranus’ revolution period is 17h 14 min, determine the approximate amount of time that the Sun is above the horizon for an observer on Uranus in the following situations: I. At the South pole. II. At latitude 30°5′ N when the declination of the Sun is 10° N.",

  choices: [
    { label: "A", text: "I = 84 years and II = 17h 14 min" },
    { label: "B", text: "I = 21 years and II = 12h 47 min" },
    { label: "C", text: "I = 42 years and II = 9h 28 min" },
    { label: "D", text: "I = 21 years and II = 8h 37 min" },
    { label: "E", text: "I = 42 years and II = 14h 53 min" },
  ],

  correctAnswer: "C",

  explanation: "The official solution uses an approximately 84-year Uranian orbital period for the polar case and spherical astronomy for the latitude case, giving 42 years and 9h28min.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2020 First Round, Question 12.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 13,

  difficulty: "Intermediate",

  topic: "Stars & Stellar Evolution",
  subtopic: "Flux, Angular Diameter, and Temperature",
  tags: [
    "bolometric magnitude",
    "angular diameter",
    "Stefan-Boltzmann law",
    "stellar temperature",
  ],

  type: "MCQ",

  questionText: "The angular diameter of star A with apparent bolometric magnitude 2 is 2.5 times greater than the angular diameter of star B with apparent bolometric magnitude 7. What is the ratio of the temperature of star A to that of star B?",

  choices: [
    { label: "A", text: "2.5" },
    { label: "B", text: "4" },
    { label: "C", text: "2" },
    { label: "D", text: "5" },
    { label: "E", text: "3.5" },
  ],

  correctAnswer: "C",

  explanation: "Using flux ∝ angular-radius² × T⁴ together with the five-magnitude flux ratio gives TA/TB = 2.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2020 First Round, Question 13.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 14,

  difficulty: "Advanced",

  topic: "Stars & Stellar Evolution",
  subtopic: "Virial Theorem",
  tags: [
    "virial theorem",
    "negative specific heat",
    "stellar temperature",
    "gravitational systems",
  ],

  type: "MCQ",

  questionText: "As a consequence of the virial theorem, how does the stellar temperature (T) change if we add more arbitrary energy (E) to the star?",

  choices: [
    { label: "A", text: "Increases" },
    { label: "B", text: "Decreases" },
    { label: "C", text: "Stays the same" },
  ],

  correctAnswer: "B",

  explanation: "Self-gravitating systems have negative specific heat in this regime; the official key states that adding energy lowers the stellar temperature.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 4,

  attributionText: "Source: USAAAO 2020 First Round, Question 14.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 15,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Hydrogen Fusion Timescale",
  tags: [
    "hydrogen fusion",
    "stellar core",
    "nuclear fuel",
    "reaction time",
  ],

  type: "MCQ",

  questionText: "How do we increase the reaction time for hydrogen fusion at the stellar core leaving other factors unchanged?",

  choices: [
    { label: "A", text: "Increase the mass of the star, not by adding hydrogen atoms" },
    { label: "B", text: "Increase the temperature of the stellar core" },
    { label: "C", text: "Increase the amount of hydrogen atoms" },
    { label: "D", text: "None of the above" },
  ],

  correctAnswer: "C",

  explanation: "With other factors unchanged, increasing the available hydrogen fuel increases the fusion timescale.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 4,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 5,

  attributionText: "Source: USAAAO 2020 First Round, Question 15.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 18,

  difficulty: "Intermediate",

  topic: "Exoplanets & Planetary Systems",
  subtopic: "Keplerian Orbit Size",
  tags: [
    "Proxima Centauri b",
    "semimajor axis",
    "Kepler's third law",
    "exoplanet",
  ],

  type: "MCQ",

  questionText: "Recently, the exoplanet Proxima Centauri b was discovered using the radial-velocity method. Its orbital period is 11.19 days, and it orbits Proxima Centauri, which has a mass of 0.122 Solar masses, a radius of 0.154 Solar radii, and an effective temperature of 3042 K. Which of the following is closest to the semimajor axis of Proxima Centauri b?",

  choices: [
    { label: "A", text: "0.01 AU" },
    { label: "B", text: "0.05 AU" },
    { label: "C", text: "0.1 AU" },
    { label: "D", text: "0.5 AU" },
    { label: "E", text: "1 AU" },
  ],

  correctAnswer: "B",

  explanation: "Applying a³/P² = M in solar units to P = 11.19 days and M = 0.122 M☉ gives a semimajor axis near 0.05 AU.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 5,

  attributionText: "Source: USAAAO 2020 First Round, Question 18.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 19,

  difficulty: "Intermediate",

  topic: "Exoplanets & Planetary Systems",
  subtopic: "Planetary Equilibrium Temperature",
  tags: [
    "Proxima Centauri b",
    "equilibrium temperature",
    "albedo",
    "radiative balance",
  ],

  type: "MCQ",

  questionText: "Proxima Centauri b has an orbital period of 11.19 days and orbits Proxima Centauri, which has a mass of 0.122 Solar masses, radius 0.154 Solar radii, and effective temperature 3042 K. Which of the following is closest to the temperature at the surface of Proxima Centauri b? Assume a surface albedo of 0.3 and that incident radiation is perfectly redistributed around the planet.",

  choices: [
    { label: "A", text: "200 K" },
    { label: "B", text: "235 K" },
    { label: "C", text: "275 K" },
    { label: "D", text: "335 K" },
    { label: "E", text: "600 K" },
  ],

  correctAnswer: "B",

  explanation: "Using the semimajor axis from the preceding item and radiative equilibrium with albedo 0.3 gives about 235 K.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 5,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 5,

  attributionText: "Source: USAAAO 2020 First Round, Question 19.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 20,

  difficulty: "Beginner",

  topic: "Stars & Stellar Evolution",
  subtopic: "Main-Sequence Turnoff Age",
  tags: [
    "star clusters",
    "main-sequence turnoff",
    "cluster age",
    "stellar evolution",
  ],

  type: "MCQ",

  questionText: "A star cluster with a main-sequence turn-off at around 6000 K effective temperature is about:",

  choices: [
    { label: "A", text: "10 million years old" },
    { label: "B", text: "100 million years old" },
    { label: "C", text: "1 billion years old" },
    { label: "D", text: "10 billion years old" },
    { label: "E", text: "100 billion years old" },
  ],

  correctAnswer: "D",

  explanation: "A 6000 K main-sequence turnoff corresponds to relatively low-mass stars and an old cluster; the official key gives 10 billion years.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 5,

  attributionText: "Source: USAAAO 2020 First Round, Question 20.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 21,

  difficulty: "Beginner",

  topic: "Light, Radiation & Spectroscopy",
  subtopic: "21 cm Hydrogen Line",
  tags: [
    "21 cm line",
    "neutral hydrogen",
    "radio astronomy",
    "interstellar medium",
  ],

  type: "MCQ",

  questionText: "The 21 cm absorption line is a tracer for what kind of gas?",

  choices: [
    { label: "A", text: "Cold neutral atomic hydrogen" },
    { label: "B", text: "Cold molecular hydrogen" },
    { label: "C", text: "Warm neutral hydrogen" },
    { label: "D", text: "Warm ionized hydrogen" },
    { label: "E", text: "HII regions" },
  ],

  correctAnswer: "A",

  explanation: "The 21 cm hyperfine transition traces neutral atomic hydrogen, particularly cold H I gas.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 5,

  attributionText: "Source: USAAAO 2020 First Round, Question 21.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 22,

  difficulty: "Beginner",

  topic: "Cosmology & Universe",
  subtopic: "Cosmic Distance Ladder",
  tags: [
    "parallax",
    "Cepheids",
    "Type Ia supernovae",
    "distance techniques",
  ],

  type: "MCQ",

  questionText: "From the shortest distances to the longest, what is the correct order of distance determination techniques?",

  choices: [
    { label: "A", text: "Parallax, Type Ia supernovae, Cepheids" },
    { label: "B", text: "Parallax, Cepheids, Type Ia supernovae" },
    { label: "C", text: "Type Ia supernovae, Cepheids, parallax" },
    { label: "D", text: "Cepheids, parallax, Type Ia supernovae" },
    { label: "E", text: "Cepheids, Type Ia supernovae, parallax" },
  ],

  correctAnswer: "B",

  explanation: "Parallax works locally, Cepheids reach farther, and Type Ia supernovae provide distances on still larger scales.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 6,

  attributionText: "Source: USAAAO 2020 First Round, Question 22.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 23,

  difficulty: "Advanced",

  topic: "Gravitation, Orbits & Dynamics",
  subtopic: "Gravitational Potential Energy Near a Black Hole",
  tags: [
    "black hole",
    "gravitational potential energy",
    "compact binary",
    "accretion",
  ],

  type: "MCQ",

  questionText: "In a compact binary system consisting of a black hole of mass 23.2 M☉ and a main-sequence star of mass 15.6 M☉ separated by 1 AU, a clump of gas of mass 1 M☉ detaches from the main-sequence star. When the gas is 1 km from the black hole, what is its total energy? Neglect viscous forces.",

  choices: [
    { label: "A", text: "−3.06 × 10⁴⁸ J" },
    { label: "B", text: "−6.12 × 10⁴⁸ J" },
    { label: "C", text: "3.06 × 10⁴⁸ J" },
    { label: "D", text: "6.12 × 10⁴⁸ J" },
    { label: "E", text: "0 J" },
  ],

  correctAnswer: "A",

  explanation: "The official key gives −3.06 × 10⁴⁸ J for the gas at the stated distance from the black hole.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 6,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 6,

  attributionText: "Source: USAAAO 2020 First Round, Question 23.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 25,

  difficulty: "Advanced",

  topic: "Cosmology & Universe",
  subtopic: "Hubble Law from Redshift",
  tags: [
    "H-alpha",
    "redshift",
    "Hubble law",
    "galaxy distance",
  ],

  type: "MCQ",

  questionText: "The Hα line (λ₀ = 656.28 nm) of a galaxy is observed to be redshifted to λ = 814.35 nm. Assuming only cosmological redshift, find the approximate distance to the galaxy in Mpc.",

  choices: [
    { label: "A", text: "124 Mpc" },
    { label: "B", text: "356 Mpc" },
    { label: "C", text: "524 Mpc" },
    { label: "D", text: "910 Mpc" },
    { label: "E", text: "1030 Mpc" },
  ],

  correctAnswer: "D",

  explanation: "The wavelength ratio gives z ≈ 0.241. Using v ≈ cz and H₀ = 70 km/s/Mpc gives a distance near 910 Mpc.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 6,

  attributionText: "Source: USAAAO 2020 First Round, Question 25.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 26,

  difficulty: "Advanced",

  topic: "Cosmology & Universe",
  subtopic: "CMB Temperature Evolution",
  tags: [
    "CMB",
    "redshift",
    "Wien's law",
    "early universe",
  ],

  type: "MCQ",

  questionText: "At what redshift would the average temperature in the universe have been hot enough to emit 1 nm photons? The current CMB temperature of the universe is 2.73 K.",

  choices: [
    { label: "A", text: "10⁹" },
    { label: "B", text: "10⁸" },
    { label: "C", text: "10⁶" },
    { label: "D", text: "10⁴" },
    { label: "E", text: "10²" },
  ],

  correctAnswer: "C",

  explanation: "Wien’s law gives the temperature required for a 1 nm peak, and T scales as 1 + z. The official solution gives z ≈ 10⁶.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 7,

  attributionText: "Source: USAAAO 2020 First Round, Question 26.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 27,

  difficulty: "Advanced",

  topic: "Telescopes, Observing & Instrumentation",
  subtopic: "Interferometric Baseline",
  tags: [
    "Event Horizon Telescope",
    "M87",
    "angular resolution",
    "interferometry",
  ],

  type: "MCQ",

  questionText: "In April, the Event Horizon Telescope released the first image of the supermassive black hole of M87. The black hole has a diameter of approximately 270 AU and is located at a distance of 16.4 Mpc. At the observed wavelength of 1.3 mm, what is the approximate minimum baseline, or effective diameter, required to image the black hole?",

  choices: [
    { label: "A", text: "2 × 10³ km" },
    { label: "B", text: "2 × 10⁴ km" },
    { label: "C", text: "2 × 10⁵ km" },
    { label: "D", text: "2 × 10⁶ km" },
    { label: "E", text: "2 × 10⁷ km" },
  ],

  correctAnswer: "B",

  explanation: "Estimating the angular diameter from 270 AU at 16.4 Mpc and applying θ ≈ λ/D gives a required baseline near 2 × 10⁴ km.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 7,

  attributionText: "Source: USAAAO 2020 First Round, Question 27.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 28,

  difficulty: "Intermediate",

  topic: "Light, Radiation & Spectroscopy",
  subtopic: "Dust Extinction",
  tags: [
    "interstellar dust",
    "infrared astronomy",
    "scattering",
    "protoplanetary disks",
  ],

  type: "MCQ",

  questionText: "At optical wavelengths, star formation is strongly obscured by dust. Studies of protoplanetary disks therefore usually observe at infrared or sub-millimeter wavelengths. Why are these observations less strongly affected by interstellar dust?",

  choices: [
    { label: "A", text: "Higher angular resolution from interferometers averages out dust effects" },
    { label: "B", text: "The thermal emission of interstellar dust is comparatively less at longer wavelengths" },
    { label: "C", text: "Dust grains scatter shorter wavelengths more efficiently than longer wavelengths" },
    { label: "D", text: "The optical obscuration is a result of atomic transitions not present at longer wavelengths" },
    { label: "E", text: "None of the above" },
  ],

  correctAnswer: "C",

  explanation: "Dust grains scatter shorter wavelengths more efficiently, so longer-wavelength infrared and sub-millimeter observations suffer less extinction.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 7,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 7,

  attributionText: "Source: USAAAO 2020 First Round, Question 28.",

  permissionStatus: "needs-review",
  status: "draft",
},

{
  competition: "USAAAO",
  year: 2020,
  examName: "First Round",
  questionNumber: 29,

  difficulty: "Intermediate",

  topic: "Telescopes, Observing & Instrumentation",
  subtopic: "Image Formation and Aperture",
  tags: [
    "objective lens",
    "telescope aperture",
    "image formation",
    "light gathering",
  ],

  type: "MCQ",

  questionText: "A very curious astronomer decided to cover the left half of the objective lens of a telescope with opaque material. If he points this telescope to a region of the night sky, how will the image generated by this telescope be different from the original image generated by uncovered lenses?",

  choices: [
    { label: "A", text: "The astronomer will only see the right half of the original image." },
    { label: "B", text: "The astronomer will only see the left half of the original image." },
    { label: "C", text: "The astronomer will see a blurred image." },
    { label: "D", text: "The astronomer will see almost the same image, but the stars will look fainter" },
    { label: "E", text: "The image will be completely unchanged." },
  ],

  correctAnswer: "D",

  explanation: "Every point in the image uses light from the full aperture. Blocking half the objective largely preserves the image geometry but reduces collected light, making stars fainter.",

  sourceUrl: "https://usaaao.org/resources/past-exams/",
  pdfUrl: "https://usaaao.org/wp-content/uploads/2020/02/2020_usaaao_first_round.pdf",
  pageNumber: 8,

  answerKeyUrl: "https://usaaao.org/wp-content/uploads/2020/02/usaaao_first_round_answer_key_2020.pdf",
  answerKeyPageNumber: 7,

  attributionText: "Source: USAAAO 2020 First Round, Question 29.",

  permissionStatus: "needs-review",
  status: "draft",
},

  // 2021–2023
{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 1,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Zodiac Constellations",
    tags: [
      "zodiac",
      "right ascension",
      "Great Conjunction",
      "Capricornus"
    ],
    type: "MCQ",
    questionText: "On December 21, 2020, Jupiter was at (α, δ) = (20h 10m, −20° 34′). Which constellation was Saturn in?",
    choices: [
      {
        label: "A",
        text: "Capricornus"
      },
      {
        label: "B",
        text: "Aquarius"
      },
      {
        label: "C",
        text: "Pisces"
      },
      {
        label: "D",
        text: "Aquila"
      }
    ],
    correctAnswer: "A",
    explanation: "Jupiter and Saturn were at the Great Conjunction, so they shared essentially the same sky position; the given right ascension places the listed option in Capricornus.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 2,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 2,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 2,
    difficulty: "Beginner",
    topic: "Stars & Stellar Evolution",
    subtopic: "Spectral Classification",
    tags: [
      "Stefan-Boltzmann law",
      "effective temperature",
      "spectral class",
      "G-type"
    ],
    type: "MCQ",
    questionText: "What is the spectral type of a star with a luminosity of 5.86 × 10^26 W and radius of 8.51 × 10^8 m?",
    choices: [
      {
        label: "A",
        text: "A"
      },
      {
        label: "B",
        text: "F"
      },
      {
        label: "C",
        text: "G"
      },
      {
        label: "D",
        text: "K"
      },
      {
        label: "E",
        text: "M"
      }
    ],
    correctAnswer: "C",
    explanation: "Using L = 4πR²σT⁴ gives about 5805 K, which corresponds to a G-type star.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 2,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 2,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 3,
    difficulty: "Intermediate",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Radial-Velocity Semi-Amplitude",
    tags: [
      "radial velocity",
      "exoplanet",
      "Kepler's third law",
      "center of mass"
    ],
    type: "MCQ",
    questionText: "The exoplanet HD 209458b has a mass of 0.71 Jupiter masses and orbits HD 209458 with an orbital period of 3.53 days. HD 209458 has a mass of 1.15 Solar masses. Assuming that the orbit of HD 209458b is circular (which is a good approximation here) and that its orbit lies perfectly in our line of sight, what is the radial velocity semi-amplitude of HD 209458 due to the orbital motion of HD 209458b, in m/s?",
    choices: [
      {
        label: "A",
        text: "69.6 m/s"
      },
      {
        label: "B",
        text: "85.9 m/s"
      },
      {
        label: "C",
        text: "94.2 m/s"
      },
      {
        label: "D",
        text: "120.8 m/s"
      }
    ],
    correctAnswer: "B",
    explanation: "Kepler's law gives the planet's orbital speed, and conservation of momentum gives the star's 85.9 m/s radial-velocity semi-amplitude.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 2,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 3,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 4,
    difficulty: "Advanced",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Blackbody Photon Number Density",
    tags: [
      "blackbody",
      "dimensional analysis",
      "photon density",
      "Planck constant"
    ],
    type: "MCQ",
    questionText: "The photon number density of a blackbody depends on temperature as n_d = a (k_B T / ħc)^n, where k_B is the Boltzmann constant, ħ is the reduced Planck's constant, c is the speed of light, T is the blackbody temperature, and a is a dimensionless numerical constant. What is the value of n?",
    choices: [
      {
        label: "A",
        text: "1"
      },
      {
        label: "B",
        text: "2"
      },
      {
        label: "C",
        text: "3"
      },
      {
        label: "D",
        text: "4"
      }
    ],
    correctAnswer: "C",
    explanation: "Dimensional analysis requires the photon number density to scale as (kBT/ħc)^3.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 2,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 3,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 5,
    difficulty: "Beginner",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Transit Depth",
    tags: [
      "transit",
      "exoplanet radius",
      "stellar radius",
      "flux dip"
    ],
    type: "MCQ",
    questionText: "HD 209458b has a radius of 1.35 Jupiter radii, while the radius of HD 209458 is 1.20 Solar radii. What is the transit depth of HD 209458b, in percent?",
    choices: [
      {
        label: "A",
        text: "0.013%"
      },
      {
        label: "B",
        text: "0.13%"
      },
      {
        label: "C",
        text: "1.3%"
      },
      {
        label: "D",
        text: "13%"
      }
    ],
    correctAnswer: "C",
    explanation: "The transit depth is (Rp/Rs)^2, which evaluates to about 1.3%.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 2,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 3,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 6,
    difficulty: "Advanced",
    topic: "Cosmology & the Early Universe",
    subtopic: "Inflationary Cosmology",
    tags: [
      "inflation",
      "flatness problem",
      "horizon problem",
      "magnetic monopoles"
    ],
    type: "MCQ",
    questionText: "Which of the following is a problem of the conventional Big Bang theory that is resolved by the theory of inflation?",
    choices: [
      {
        label: "A",
        text: "Under the conventional Big Bang theory, it is extremely unlikely for our universe to be flat or nearly flat today, contrary to observation."
      },
      {
        label: "B",
        text: "Under the conventional Big Bang theory, it is impossible for the Cosmic Microwave Back- ground to have come into thermal equilibrium by the time of recombination, despite its observed uniform temperature."
      },
      {
        label: "C",
        text: "The conventional Big Bang theory predicts a huge abundance of magnetic monopoles, while no magnetic monopoles have ever been discovered."
      },
      {
        label: "D",
        text: "All of the above"
      }
    ],
    correctAnswer: "D",
    explanation: "Inflation addresses the flatness, horizon, and magnetic-monopole problems listed in the choices.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 2,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 4,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 7,
    difficulty: "Intermediate",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Comet Perihelion Distance",
    tags: [
      "comet",
      "Kepler's third law",
      "eccentricity",
      "perihelion"
    ],
    type: "MCQ",
    questionText: "Comet C/2020 F3 (NEOWISE) last reached perihelion on July 3, 2020. Comet NEOWISE has an orbital period of ≈ 4400 years and its eccentricity is 0.99921. What is the perihelion distance of Comet NEOWISE, in AU?",
    choices: [
      {
        label: "A",
        text: "0.0123 AU"
      },
      {
        label: "B",
        text: "0.212 AU"
      },
      {
        label: "C",
        text: "2.69 AU"
      },
      {
        label: "D",
        text: "26.8 AU"
      }
    ],
    correctAnswer: "B",
    explanation: "First find the semimajor axis from the 4400-year period, then use q = a(1 − e) to get 0.212 AU.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 3,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 5,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 8,
    difficulty: "Intermediate",
    topic: "Galaxies & Large-Scale Structure",
    subtopic: "21-cm Hydrogen Line Doppler Shift",
    tags: [
      "Population I",
      "metal-rich",
      "21-cm line",
      "Doppler shift"
    ],
    type: "MCQ",
    questionText: "An astronomer detected a galaxy and decided to analyze its different parts and physical aspects. The frequency generated by a =spin-flip\" transition of atomic hydrogen is ν0 = 1420.406MHz, however it was detected on the galaxy as ν = 1422.73. He finds that: 1. Population I stars are (1) and are metal-(2). 2. The galaxy is (3) from us with a speed of (4) km × s−1. Choose the alternative that correctly completes sentences above.",
    choices: [
      {
        label: "A",
        text: "(1) young; (2) poor; (3) distancing; (4) 245"
      },
      {
        label: "B",
        text: "(1) old; (2) rich; (3) approaching; (4) 490"
      },
      {
        label: "C",
        text: "(1)old; (2) poor; (3) distancing; (4) 490"
      },
      {
        label: "D",
        text: "(1) young; (2) rich; (3) approaching; (4) 490"
      },
      {
        label: "E",
        text: "(1) young; (2) rich; (3) approaching; (4) 245"
      }
    ],
    correctAnswer: "D",
    explanation: "Population I stars are young and metal-rich; the observed frequency is higher than rest frequency, so the galaxy is approaching at about 490 km/s.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 3,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 5,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 9,
    difficulty: "Advanced",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Open-Cluster Virial Estimate",
    tags: [
      "open cluster",
      "virial theorem",
      "velocity dispersion",
      "angular diameter"
    ],
    type: "MCQ",
    questionText: "A stable open cluster of about N = 1000 Sun-like stars has an angular diameter of θ = 30 arcminutes and distance d = 500 pc. Assuming the cluster can be approximated by a sphere of uniform density, estimate the average velocities of stars in the cluster. The gravitational potential energy of a sphere of uniform density and radius r is U_sphere = −(3/5)GM_sphere²/r.",
    choices: [
      {
        label: "A",
        text: "507 m/s"
      },
      {
        label: "B",
        text: "643 m/s"
      },
      {
        label: "C",
        text: "894 m/s"
      },
      {
        label: "D",
        text: "1021 m/s"
      },
      {
        label: "E",
        text: "771 m/s"
      }
    ],
    correctAnswer: "E",
    explanation: "Estimate the cluster radius from its angular size and distance, then use the uniform-sphere virial relation to obtain about 771 m/s.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 3,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 6,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 10,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Solar Analemma",
    tags: [
      "analemma",
      "obliquity",
      "equation of time",
      "Earth orbit"
    ],
    type: "MCQ",
    questionText: "What would happen to the analemma of the Sun if the obliquity of the Earth's orbit suddenly went to zero degrees and its eccentricity remained unchanged?",
    choices: [
      {
        label: "A",
        text: "The analemma would be perfectly symmetric in both axes and would have the shape of an \"8\"."
      },
      {
        label: "B",
        text: "The analemma would look like a dot."
      },
      {
        label: "C",
        text: "The analemma would be the arc of a great circle."
      },
      {
        label: "D",
        text: "The analemma would look like a circle."
      },
      {
        label: "E",
        text: "The analemma would be a spherical triangle."
      }
    ],
    correctAnswer: "C",
    explanation: "With zero obliquity, the north-south component disappears; eccentricity leaves a great-circle arc rather than a figure eight.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 3,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 6,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 11,
    difficulty: "Intermediate",
    topic: "Stars & Stellar Evolution",
    subtopic: "Stellar Interior Temperature Gradients",
    tags: [
      "Sun",
      "Arcturus",
      "Sirius B",
      "white dwarf"
    ],
    type: "MCQ",
    questionText: "Let Td,C and Td,S be the temperatures at the core and the surface of the sun, respectively. Similarly, let TA,C and TA,S be the temperatures at the core and surface of the red giant Arcturus, and let TS,C and TS,S be the temperatures at the core and surface of the white dwarf Sirius B. Which of the following inequalities is true?",
    choices: [
      {
        label: "A",
        text: "T☉,C / T☉,S < T_A,C / T_A,S < T_S,C / T_S,S"
      },
      {
        label: "B",
        text: "T☉,C / T☉,S < T_S,C / T_S,S < T_A,C / T_A,S"
      },
      {
        label: "C",
        text: "T_A,C / T_A,S < T☉,C / T☉,S < T_S,C / T_S,S"
      },
      {
        label: "D",
        text: "T_S,C / T_S,S < T☉,C / T☉,S < T_A,C / T_A,S"
      },
      {
        label: "E",
        text: "T_S,C / T_S,S < T_A,C / T_A,S < T☉,C / T☉,S"
      }
    ],
    correctAnswer: "D",
    explanation: "The red giant has the smallest core-to-surface temperature ratio, the Sun is intermediate, and the white dwarf has the largest.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 7,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 12,
    difficulty: "Advanced",
    topic: "Stars & Stellar Evolution",
    subtopic: "Rotational Doppler Broadening",
    tags: [
      "Doppler shift",
      "stellar rotation",
      "H-alpha",
      "rotation period"
    ],
    type: "MCQ",
    questionText: "The spectral line Hα in the spectrum of a star is recorded as having displacement of ∆λ = 0.043 × 10^-10 m. At rest, the spectral line has a wavelength of λ0 = 6.563 × 10^-7 m. Calculate the period of rotation for this star, if it is observed from its equatorial plane. We also know: Rstar = 8 × 10^5 km.",
    choices: [
      {
        label: "A",
        text: "29.59 days"
      },
      {
        label: "B",
        text: "14.63 days"
      },
      {
        label: "C",
        text: "21.15 days"
      },
      {
        label: "D",
        text: "34.39 days"
      }
    ],
    correctAnswer: "A",
    explanation: "Use v = cΔλ/λ and P = 2πR/v to obtain a rotation period of 29.59 days.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 8,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 13,
    difficulty: "Beginner",
    topic: "Observational Astronomy & Telescopes",
    subtopic: "Telescope Focal Ratio and Magnification",
    tags: [
      "reflector telescope",
      "f-ratio",
      "focal length",
      "magnification"
    ],
    type: "MCQ",
    questionText: "The reflector telescope built by Sir Issac Newton was a f/5 telescope and had a primary mirror of diameter 30mm. He used an eyepiece with a focal length of 5mm. What is the focal length and magnification obtained by this telescope?",
    choices: [
      {
        label: "A",
        text: "150mm, 30×"
      },
      {
        label: "B",
        text: "300mm, 15×"
      },
      {
        label: "C",
        text: "300mm, 30×"
      },
      {
        label: "D",
        text: "150mm, 15×"
      }
    ],
    correctAnswer: "A",
    explanation: "An f/5, 30 mm mirror has focal length 150 mm; dividing by the 5 mm eyepiece focal length gives 30×.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 8,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 14,
    difficulty: "Intermediate",
    topic: "Observational Astronomy & Telescopes",
    subtopic: "Messier Object Identification",
    tags: [
      "Messier objects",
      "open cluster",
      "nebula",
      "galaxy"
    ],
    type: "MCQ",
    questionText: "Take a look at the following image: Three Messier objects are circled in the image. Select the alternative that correctly matches each object with its type.\n\n[Visual reference required: see page 5 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "1 - Open cluster; 2 - Open cluster; 3 - Nebula."
      },
      {
        label: "B",
        text: "1 - Open Cluster; 2 - Nebula; 3 - Galaxy."
      },
      {
        label: "C",
        text: "1 - Galaxy; 2 - Nebula; 3 - Globular cluster."
      },
      {
        label: "D",
        text: "1 - Open cluster; 2 - Galaxy; 3 - Globular cluster."
      },
      {
        label: "E",
        text: "1 - Open cluster; 2 - Nebula; 3 - Open cluster."
      }
    ],
    correctAnswer: "E",
    explanation: "The types must be read from the three circled objects in the supplied source image; the official solution selects the fifth classification sequence.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 9,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 15,
    difficulty: "Intermediate",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Parabolic Comet Speed",
    tags: [
      "comet",
      "escape velocity",
      "perihelion",
      "parabolic orbit"
    ],
    type: "MCQ",
    questionText: "An interesting phenomena that happens in the Solar System is the capture of comets in the interstellar medium. Assume that a comet with a mass of 7.15 × 10^16 kg is captured by the solar system. The perihelion of this comet's orbit after it is captured is equal to 4.64 AU, and its velocity with respect to the Sun before being captured by the Solar System was very small. Calculate the velocity of the comet at the perihelion.",
    choices: [
      {
        label: "A",
        text: "87.1 km/s"
      },
      {
        label: "B",
        text: "45.9 km/s"
      },
      {
        label: "C",
        text: "5.67 km/s"
      },
      {
        label: "D",
        text: "105.4 km/s"
      },
      {
        label: "E",
        text: "19.6 km/s"
      }
    ],
    correctAnswer: "E",
    explanation: "A comet captured from nearly zero heliocentric speed has a nearly parabolic orbit, so its perihelion speed follows v = √(2GM/q).",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 10,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 16,
    difficulty: "Advanced",
    topic: "Celestial Coordinates & Time",
    subtopic: "Sidereal-to-Civil Time Conversion",
    tags: [
      "sidereal time",
      "Greenwich",
      "Chicago",
      "longitude"
    ],
    type: "MCQ",
    questionText: "In a certain day, when it is 0h UT, the sidereal time of Prime Meridian is 5h 56min 9.4s. For this day, with start and end based on UT, find the civil time of Chicago, whose longitude and time zone are respectively, 87.65004722o W and UT-6, when the sidereal time there is 20h. The difference between solar time and sidereal time SHOULD be accounted for.",
    choices: [
      {
        label: "A",
        text: "14h 1min 32s"
      },
      {
        label: "B",
        text: "13h 26min 17s"
      },
      {
        label: "C",
        text: "14h 36min 47s"
      },
      {
        label: "D",
        text: "14h 0min 43s"
      },
      {
        label: "E",
        text: "13h 51min 11s"
      }
    ],
    correctAnswer: "E",
    explanation: "Convert local sidereal time using longitude and account for the solar-versus-sidereal time-rate difference; the official result is 13h 51m 11s.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 11,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 17,
    difficulty: "Advanced",
    topic: "Solar System & Planetary Science",
    subtopic: "Red-Giant Threat Ordering",
    tags: [
      "red giant",
      "greenhouse effect",
      "tidal decay",
      "Roche limit"
    ],
    type: "MCQ",
    questionText: "Consider the following horrifying scenario. The Sun has become a Red Giant, and its radius is doubling every 100 years. Rank the following of humanity's concerns in order of immediate importance. I: Orbital decay due to direct contact between the Earth and Sun II: As the distance between the Earth and Sun shrinks, the Earth will enter the Sun's Roche limit and start to be ripped apart III: Orbital decay due to tidal effects on the Sun's outer atmosphere, the same way the Moon loses energy when forming the Earth's tides IV: Runaway greenhouse effect due to extreme temperatures, leading to the Earth becoming a hot, Venus-like planet with no habitability",
    choices: [
      {
        label: "A",
        text: "III, IV, II, I"
      },
      {
        label: "B",
        text: "IV, III, II, I"
      },
      {
        label: "C",
        text: "IV, II, III, I"
      },
      {
        label: "D",
        text: "IV, III, I, II"
      }
    ],
    correctAnswer: "D",
    explanation: "The runaway greenhouse effect occurs first; the official ordering then places tidal decay before direct contact and Roche-limit disruption.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 12,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 18,
    difficulty: "Intermediate",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Transit Ephemeris Uncertainty",
    tags: [
      "TESS",
      "transit timing",
      "ephemeris",
      "uncertainty propagation"
    ],
    type: "MCQ",
    questionText: "TESS Object of Interest (TOI) 402.01 has an orbital period of 4.756 ± 0.000023 (days) and was last observed to transit on 2139.1 ± 0.0027008 (in TESS Julian days, i.e. BJD - 2457000). For follow-up observation, we would like to predict the next transit – this would be the 23rd transit since the last observation. In TESS Julian days, when will the next transit occur?",
    choices: [
      {
        label: "A",
        text: "2243.732 ± 0.0027238 TESS JD"
      },
      {
        label: "B",
        text: "2248.488 ± 0.000529 TESS JD"
      },
      {
        label: "C",
        text: "2248.488 ± 0.0027238 TESS JD"
      },
      {
        label: "D",
        text: "2248.488 ± 0.0032298 TESS JD"
      }
    ],
    correctAnswer: "D",
    explanation: "Add 23 periods to the last transit time and propagate the epoch and period uncertainties to get the official prediction.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 12,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 19,
    difficulty: "Intermediate",
    topic: "Solar System & Planetary Science",
    subtopic: "Central Pressure Estimate",
    tags: [
      "Jupiter",
      "central pressure",
      "hydrostatic equilibrium",
      "order of magnitude"
    ],
    type: "MCQ",
    questionText: "Jupiter has a mass of 1.90 × 10^27 kg and a radius of 7.15 × 10^7 m. To the closest order of magnitude, estimate the pressure at the center of Jupiter, in Megabars.",
    choices: [
      {
        label: "A",
        text: "0.1"
      },
      {
        label: "B",
        text: "1"
      },
      {
        label: "C",
        text: "10"
      },
      {
        label: "D",
        text: "100"
      }
    ],
    correctAnswer: "C",
    explanation: "A hydrostatic scaling of order GM²/R⁴ gives a central pressure on the order of 10 megabars.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 13,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 20,
    difficulty: "Beginner",
    topic: "Solar System & Planetary Science",
    subtopic: "Solar Granulation",
    tags: [
      "photosphere",
      "granulation",
      "solar atmosphere",
      "convection"
    ],
    type: "MCQ",
    questionText: "Which of the following statements is wrong?",
    choices: [
      {
        label: "A",
        text: "It is believed that elements with atomic number greater than that of iron are formed mostly by the explosion of supernovas."
      },
      {
        label: "B",
        text: "What holds a star together is the hydrostatic equilibrium between pressure and gravity."
      },
      {
        label: "C",
        text: "The granulations of the Sun happen on its corona."
      },
      {
        label: "D",
        text: "Protostars are actually not stars because their main source of heat is not fusion."
      },
      {
        label: "E",
        text: "The earlier type the main-sequence star, the more massive it is."
      }
    ],
    correctAnswer: "C",
    explanation: "Solar granulation is a photospheric convection pattern, not a phenomenon of the corona.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 13,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 21,
    difficulty: "Advanced",
    topic: "Celestial Coordinates & Time",
    subtopic: "Sundial Shadow Geometry",
    tags: [
      "sundial",
      "vernal equinox",
      "hour angle",
      "shadow area"
    ],
    type: "MCQ",
    questionText: "Consider a horizontal sundial where the triangular gnomon rises at an angle equal to the sundial site's latitude, φ = 38°. If the area of the triangular gnomon is 2 m2, what would be the area of the shadow in m2 three hours after the noon in the first day of spring (vernal equinox)?",
    choices: [
      {
        label: "A",
        text: "3.0"
      },
      {
        label: "B",
        text: "3.5"
      },
      {
        label: "C",
        text: "2.5"
      },
      {
        label: "D",
        text: "1.5"
      },
      {
        label: "E",
        text: "4.0"
      }
    ],
    correctAnswer: "C",
    explanation: "Apply the equinox solar geometry at an hour angle of three hours to the latitude-set gnomon; the official area is 2.5 m².",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 7,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 14,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 22,
    difficulty: "Intermediate",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Flux Ratios from Magnitudes",
    tags: [
      "binary star",
      "apparent magnitude",
      "flux ratio",
      "eclipse"
    ],
    type: "MCQ",
    questionText: "Consider an eclipsing binary star system observed (in some fixed band) to have a combined apparent magnitude of 5.67. During the secondary transit, the second star is totally eclipsed by the first star, and the apparent magnitude dims to 6.28. What percent of the combined flux is produced by the second star?",
    choices: [
      {
        label: "A",
        text: "10.8%"
      },
      {
        label: "B",
        text: "43.0%"
      },
      {
        label: "C",
        text: "57.0%"
      },
      {
        label: "D",
        text: "89.2%"
      }
    ],
    correctAnswer: "B",
    explanation: "The magnitude change gives the remaining first-star flux; subtracting it from the combined flux yields a 43.0% contribution from the second star.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 7,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 14,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 23,
    difficulty: "Intermediate",
    topic: "Stars & Stellar Evolution",
    subtopic: "Distance Modulus with Extinction",
    tags: [
      "distance modulus",
      "interstellar extinction",
      "V magnitude",
      "parsec"
    ],
    type: "MCQ",
    questionText: "An astronomer observes that a Solar type star has an apparent V magnitude of 6.73 when seen from the Earth. Assuming that the average interstellar extinction in V is 1.00 mag/kpc, determine the distance between this star and the Solar system.",
    choices: [
      {
        label: "A",
        text: "11.5 pc"
      },
      {
        label: "B",
        text: "49.5 pc"
      },
      {
        label: "C",
        text: "34.2 pc"
      },
      {
        label: "D",
        text: "23.7 pc"
      },
      {
        label: "E",
        text: "18.9 pc"
      }
    ],
    correctAnswer: "D",
    explanation: "Include AV = 1 mag/kpc in the distance modulus for a solar-type star to obtain 23.7 pc.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 7,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 15,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 24,
    difficulty: "Beginner",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Stefan-Boltzmann Surface Flux",
    tags: [
      "integrated radiance",
      "Stefan-Boltzmann law",
      "temperature",
      "Sirius"
    ],
    type: "MCQ",
    questionText: "1. The temperature of the Sun is 5000K while that of Sirius is 10000K. Which star has a higher integrated radiance i.e. net energy emitted per unit time per unit area?",
    choices: [
      {
        label: "A",
        text: "Sun"
      },
      {
        label: "B",
        text: "Sirius"
      },
      {
        label: "C",
        text: "Depends on value of the respective radii"
      },
      {
        label: "D",
        text: "The integrated radiance is equal."
      }
    ],
    correctAnswer: "B",
    explanation: "Integrated radiance per unit area scales as T⁴, so the hotter Sirius has the larger value.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 8,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 16,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 25,
    difficulty: "Beginner",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Momentum Conservation in a Flyby",
    tags: [
      "slingshot maneuver",
      "momentum conservation",
      "mass ratio",
      "velocity change"
    ],
    type: "MCQ",
    questionText: "Suppose a spaceship is attempting a slingshot maneuver on a gas giant with mass 100 times that of the spaceship. Because the spaceship somewhat entered the planet's atmosphere, kinetic energy was not conserved—only momentum. What is the ratio of the spaceship's change in velocity to the planet's change in velocity, ∆vs ∆vp ?",
    choices: [
      {
        label: "A",
        text: "10"
      },
      {
        label: "B",
        text: "100"
      },
      {
        label: "C",
        text: "-10"
      },
      {
        label: "D",
        text: "-100"
      }
    ],
    correctAnswer: "D",
    explanation: "Momentum conservation gives mshipΔvship = −mplanetΔvplanet; with a 100:1 mass ratio, Δvship/Δvplanet = −100.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 8,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 16,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 26,
    difficulty: "Advanced",
    topic: "Cosmology & the Early Universe",
    subtopic: "Critical Density",
    tags: [
      "critical density",
      "Hubble constant",
      "mass density",
      "cosmology"
    ],
    type: "MCQ",
    questionText: "Let's imagine that our Universe would be filled with basketballs, each having a mass of mb = 0.62 kg. What would be the necessary numerical density (nb) of basketballs in the Universe such that the mass density of the basketballs would equal the current critical density of our Universe?",
    choices: [
      {
        label: "A",
        text: "1.5 × 10^-26 balls/m3"
      },
      {
        label: "B",
        text: "1.7 × 10^26 balls/m3"
      },
      {
        label: "C",
        text: "1.5 × 10^-27 balls/m3"
      },
      {
        label: "D",
        text: "1.7 × 10^27 balls/m3"
      }
    ],
    correctAnswer: "A",
    explanation: "Set basketball mass density equal to ρcrit = 3H₀²/(8πG) to obtain about 1.7 × 10^-27 balls/m³.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 8,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 17,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 27,
    difficulty: "Advanced",
    topic: "Stars & Stellar Evolution",
    subtopic: "Accretion-Disk Energy",
    tags: [
      "accretion disk",
      "Keplerian orbit",
      "gravitational energy",
      "binary stars"
    ],
    type: "MCQ",
    questionText: "When binary systems are really close together, they can execute an accretion process, in which one star (called the primary star) \"eats\" the mass of the other (called the secondary star), whose mass spirals down into the primary star, creating an accretion disk! For an accretion disk with the outer edge 3R from the center of the primary star (radius R and mass M), calculate the energy lost by a test mass (mass m) where it touches the primary star from where it first enters the accretion disk. Consider the orbits to be Keplerian.",
    choices: [
      {
        label: "A",
        text: "GMm / R"
      },
      {
        label: "B",
        text: "(1/2) GMm / R"
      },
      {
        label: "C",
        text: "(5/2) GMm / R"
      },
      {
        label: "D",
        text: "(2/3) GMm / R"
      },
      {
        label: "E",
        text: "(3/4) GMm / R"
      }
    ],
    correctAnswer: "D",
    explanation: "Using the official Keplerian-disk energy treatment between 3R and R gives the listed energy-loss expression (2/3)GMm/R.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 8,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 17,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 28,
    difficulty: "Advanced",
    topic: "Stars & Stellar Evolution",
    subtopic: "Power Density and Stellar Temperature",
    tags: [
      "power density",
      "blackbody luminosity",
      "human metabolism",
      "temperature"
    ],
    type: "MCQ",
    questionText: "An often-repeated fun fact is that humans produce more power per unit volume than stars. If the sun were the same size, but it produced the same amount of power per unit volume as a human, what would its surface temperature be? Assume the =average human\" produces 100 watts of power and has a volume of 66400 cubic centimeters.",
    choices: [
      {
        label: "A",
        text: "3500 K"
      },
      {
        label: "B",
        text: "10000 K"
      },
      {
        label: "C",
        text: "25000 K"
      },
      {
        label: "D",
        text: "40000 K"
      },
      {
        label: "E",
        text: "50000 K"
      }
    ],
    correctAnswer: "E",
    explanation: "Equate the Sun's luminosity per volume to the stated human power density and use L ∝ R²T⁴ to obtain about 50,000 K.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 9,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 18,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 29,
    difficulty: "Beginner",
    topic: "Cosmology & the Early Universe",
    subtopic: "CMB Temperature Evolution",
    tags: [
      "cosmic microwave background",
      "redshift",
      "recombination",
      "temperature"
    ],
    type: "MCQ",
    questionText: "Given that the redshift of cosmic microwave background (CMB) is 1100, what was the temperature of the Universe when photon decoupled from matter and neutral hydrogen started to get formed? The present temperature of the CMB is 2.73 K.",
    choices: [
      {
        label: "A",
        text: "10000 K"
      },
      {
        label: "B",
        text: "30000 K"
      },
      {
        label: "C",
        text: "3000 K"
      },
      {
        label: "D",
        text: "1000 K"
      },
      {
        label: "E",
        text: "300 K"
      }
    ],
    correctAnswer: "C",
    explanation: "Radiation temperature scales as 1 + z, so 2.73 K × 1101 is approximately 3000 K.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 9,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 18,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2021,
    examName: "First Round",
    questionNumber: 30,
    difficulty: "Advanced",
    topic: "Observational Astronomy & Telescopes",
    subtopic: "Radio Interferometry Baseline",
    tags: [
      "interferometry",
      "angular resolution",
      "radio wavelength",
      "black hole"
    ],
    type: "MCQ",
    questionText: "Where and when should we place a radio telescope such that, when combined with a radio telescope on Earth, the system could \"see\" the supermassive black hole in Sculptor’s Galaxy (NGC 253)? Sculptor’s Galaxy’s supermassive black hole’s mass is estimated to be around 5 × 10^6 M☉, and its distance is estimated to be around 3.5 Mpc. Out of the options below, pick the one closest to the estimate you obtain, rounding up. Consider the energy of a radio wave to be around 10^-5 eV. Use the following formula to estimate the angular resolution: θ = λ/D.",
    choices: [
      {
        label: "A",
        text: "On the Moon when it is at its apogee."
      },
      {
        label: "B",
        text: "On Mars when it is in conjunction."
      },
      {
        label: "C",
        text: "On Venus when it is in its greatest elongation."
      },
      {
        label: "D",
        text: "On one of Jupiter's moons when it is in opposition."
      },
      {
        label: "E",
        text: "Somewhere in the farthest points of the Oort cloud when Earth is at its perihelion."
      }
    ],
    correctAnswer: "D",
    explanation: "Using θ ≈ λ/D for the black hole's angular size requires a baseline comparable to a Jupiter-moon separation among the options.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1.pdf",
    pageNumber: 9,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2021/02/usaaao2021_exam1_solutions.pdf",
    answerKeyPageNumber: 20,
    attributionText: "USAAAO 2021 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 1,
    difficulty: "Advanced",
    topic: "Galaxies & Large-Scale Structure",
    subtopic: "Hubble Galaxy Classification",
    tags: [
      "Hubble sequence",
      "spiral galaxy",
      "elliptical galaxy",
      "irregular galaxy"
    ],
    type: "MCQ",
    questionText: "Classify the following galaxies according the Hubble galaxies classification: Figure 1: Galaxy 1 Figure 2: Galaxy 2 Figure 3: Galaxy 3 Figure 4: Galaxy 4 Figure 5: Galaxy 5\n\n[Visual reference required: see page 1 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "Sb, Sc, Peculiar, E2, Irregular"
      },
      {
        label: "B",
        text: "Sbc, E4, Irregular, Sb, Peculiar"
      },
      {
        label: "C",
        text: "E3, Sbc, Sa, Peculiar, Irregular"
      },
      {
        label: "D",
        text: "Sc,Sba, Sbc, E2, Peculiar"
      },
      {
        label: "E",
        text: "Sa, Sbb, E3, Irregular, Peculiar"
      }
    ],
    correctAnswer: "E",
    explanation: "Compare each of the five supplied galaxy images to the Hubble classification scheme; only the fifth sequence is consistent with all images.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 1,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 3,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 2,
    difficulty: "Advanced",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Aphelion Velocity",
    tags: [
      "comet",
      "vis-viva equation",
      "eccentricity",
      "aphelion"
    ],
    type: "MCQ",
    questionText: "A comet’s orbit has the following characteristics: eccentricity e = 0.995; aphelion distance r_a = 5 × 10^4 AU. Assume we know the mass of the Sun M☉ = 1.98 × 10^30 kg, and gravitational constant G = 6.67 × 10^-11 N m²/kg². Determine the velocity of the comet at its aphelion.",
    choices: [
      {
        label: "A",
        text: "34.76 m/s"
      },
      {
        label: "B",
        text: "20.57 m/s"
      },
      {
        label: "C",
        text: "187.91 m/s"
      },
      {
        label: "D",
        text: "63.38 m/s"
      },
      {
        label: "E",
        text: "9.19 m/s"
      }
    ],
    correctAnswer: "E",
    explanation: "Compute a = ra/(1+e), then apply the vis-viva equation at aphelion to obtain 9.19 m/s.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 3,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 4,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 3,
    difficulty: "Advanced",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Kepler's Second Law",
    tags: [
      "elliptical orbit",
      "swept area",
      "Kepler's second law",
      "eccentricity"
    ],
    type: "MCQ",
    questionText: "Consider the following elliptical orbit of a comet around a star: Which of the following expressions corresponds to the time that the comet takes to go from point A to point B as a function of the period of the comet (T) and the eccentricity of the orbit (e)? Assume that the direction of the orbit is counterclockwise.\n\n[Visual reference required: see page 3 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "T / 2"
      },
      {
        label: "B",
        text: "(e / π + 1 / 2) × T"
      },
      {
        label: "C",
        text: "(1 / 2 − e / π) × T"
      },
      {
        label: "D",
        text: "(1 + e) × T / 2"
      },
      {
        label: "E",
        text: "T × e / 2"
      }
    ],
    correctAnswer: "B",
    explanation: "The time fraction equals the red swept-area fraction in the source diagram, giving (e/π + 1/2)T.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 3,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 5,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 4,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Great-Circle Distance",
    tags: [
      "Earth geometry",
      "latitude",
      "longitude",
      "great circle"
    ],
    type: "MCQ",
    questionText: "What is the shortest distance (along the surface of the Earth) between two points on the Equator separated by 30° of longitude? What is the shortest distance (along the surface of the Earth) between them if both the two points lie on the 60° latitude while still separated by 30° of longitude? (For simplicity, assume that the Earth is a sphere)",
    choices: [
      {
        label: "A",
        text: "3336 km, 1668 km"
      },
      {
        label: "B",
        text: "3336 km, 1654 km"
      },
      {
        label: "C",
        text: "6672 km, 3336 km"
      },
      {
        label: "D",
        text: "3298 km, 1649 km"
      },
      {
        label: "E",
        text: "3298 km, 1668 km"
      }
    ],
    correctAnswer: "B",
    explanation: "At latitude 60°, the east-west radius is half the equatorial radius; the official pair is 3336 km and 1654 km.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 6,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 5,
    difficulty: "Intermediate",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Binary-System Angular Momentum",
    tags: [
      "center of mass",
      "angular momentum",
      "asteroids",
      "mass ratio"
    ],
    type: "MCQ",
    questionText: "Two (spherical) asteroids, Ek and Do, are orbiting in free space around their stationary center of mass. Ek has mass 7M_Moon and Do has mass 1.4M_Moon, where M_Moon is the mass of the Moon. What is the ratio of the angular momentum of the whole system to the angular momentum of Do about the center of mass of the system?",
    choices: [
      {
        label: "A",
        text: "26"
      },
      {
        label: "B",
        text: "6"
      },
      {
        label: "C",
        text: "1.2"
      },
      {
        label: "D",
        text: "1.04"
      },
      {
        label: "E",
        text: "0.1667"
      }
    ],
    correctAnswer: "C",
    explanation: "The system's total angular momentum is the sum of both components' angular momenta, giving 1.2 times Do's share.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 7,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 6,
    difficulty: "Intermediate",
    topic: "Observational Astronomy & Telescopes",
    subtopic: "Diffraction-Limited Resolution",
    tags: [
      "Rayleigh criterion",
      "open cluster",
      "angular resolution",
      "telescope aperture"
    ],
    type: "MCQ",
    questionText: "Consider a f/9 telescope with focal length f = 1.0 m that operates at visible wavelength λ = 5000 Å. What is the farthest distance at which an open cluster of radius RC = 4.1 pc can be resolved by this telescope?",
    choices: [
      {
        label: "A",
        text: "1.2 × 10^6 pc"
      },
      {
        label: "B",
        text: "1.5 × 10^6 pc"
      },
      {
        label: "C",
        text: "3.0 × 10^6 pc"
      },
      {
        label: "D",
        text: "4.2 × 10^6 pc"
      },
      {
        label: "E",
        text: "5.8 × 10^6 pc"
      }
    ],
    correctAnswer: "B",
    explanation: "Use θ ≈ 1.22λ/D and the cluster's physical radius to obtain the official maximum distance of 1.5 × 10^6 pc.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 8,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 7,
    difficulty: "Intermediate",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Transit Duration",
    tags: [
      "Earth transit",
      "solar diameter",
      "orbital speed",
      "impact parameter"
    ],
    type: "MCQ",
    questionText: "Imagine the you observe transits of earth across the sun from a far away exoplanet. Assuming earth's orbit has 0 eccentricity and it transits directly across the sun's diameter (the impact parameter is 0), what is the duration of earth's transit?",
    choices: [
      {
        label: "A",
        text: "3.24 hrs"
      },
      {
        label: "B",
        text: "25.93 hrs"
      },
      {
        label: "C",
        text: "6.48 hrs"
      },
      {
        label: "D",
        text: "1.62 hrs"
      },
      {
        label: "E",
        text: "12.97 hrs"
      }
    ],
    correctAnswer: "E",
    explanation: "For a central transit, divide the Sun's diameter by Earth's orbital speed to get about 12.97 hours.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 8,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 8,
    difficulty: "Beginner",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Transit Magnitude Change",
    tags: [
      "transit depth",
      "apparent magnitude",
      "photometry",
      "flux"
    ],
    type: "MCQ",
    questionText: "An exoplanet was observed during its transit across the surface of a bright star. Estimate the variation of the apparent magnitude (∆m) of the star caused by exoplanet's transit. During the transit, assume an Earth-based astronomer observes that the area covered by the exoplanet on the projected surface of the star represents η = 2% of the star's projected surface.",
    choices: [
      {
        label: "A",
        text: "-4.247"
      },
      {
        label: "B",
        text: "0.003"
      },
      {
        label: "C",
        text: "0.022"
      },
      {
        label: "D",
        text: "0.679"
      },
      {
        label: "E",
        text: "-0.003"
      }
    ],
    correctAnswer: "C",
    explanation: "A 2% covered area leaves 98% of the flux; converting that ratio to magnitudes gives about 0.022 mag.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 9,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 9,
    difficulty: "Advanced",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Globular-Cluster Virial Mass",
    tags: [
      "globular cluster",
      "velocity dispersion",
      "virial theorem",
      "mass estimate"
    ],
    type: "MCQ",
    questionText: "Estimate the mass of a globular cluster with a radial velocity dispersion σ_r = 16.2 km/s. The cluster has an angular diameter of θ = 3.56′ and is a distance d = 9630 pc away from us.",
    choices: [
      {
        label: "A",
        text: "6.05 × 10^35 kg"
      },
      {
        label: "B",
        text: "9.71 × 10^35 kg"
      },
      {
        label: "C",
        text: "1.01 × 10^36 kg"
      },
      {
        label: "D",
        text: "3.03 × 10^36 kg"
      },
      {
        label: "E",
        text: "5.96 × 10^36 kg"
      }
    ],
    correctAnswer: "D",
    explanation: "Convert angular diameter to physical scale and apply the virial relation to obtain 3.03 × 10^36 kg.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 10,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 10,
    difficulty: "Intermediate",
    topic: "Solar System & Planetary Science",
    subtopic: "Atmospheric Scale Height",
    tags: [
      "Jupiter",
      "adiabatic atmosphere",
      "scale height",
      "gas constant"
    ],
    type: "MCQ",
    questionText: "Jupiter's deep atmosphere is very warm due to convection leading to an adiabatic temperature profile that increases with increasing pressure. Assuming (for simplicity) that this outer layer of Jupiter has a temperature of 500 K, perform a back-of-the-envelope estimate of the characteristic thickness (or e-folding scale) of the envelope of Jupiter (you may find that this is independent of pressure level). You may further use that the specific gas constant in Jupiter's atmosphere is 3600 J kg−1 K−1.",
    choices: [
      {
        label: "A",
        text: "20 km"
      },
      {
        label: "B",
        text: "73 km"
      },
      {
        label: "C",
        text: "568 km"
      },
      {
        label: "D",
        text: "3,120 km"
      },
      {
        label: "E",
        text: "10,233 km"
      }
    ],
    correctAnswer: "B",
    explanation: "The characteristic scale follows RT/g; using Jupiter's stated values gives about 73 km.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 10,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 11,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Latitude from Star Trails",
    tags: [
      "celestial pole",
      "star trails",
      "latitude",
      "night-sky image"
    ],
    type: "MCQ",
    questionText: "An astronomer took the following picture while observing the night sky: What is the latitude of the place where the astronomer took the picture?\n\n[Visual reference required: see page 6 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "70° S"
      },
      {
        label: "B",
        text: "20° S"
      },
      {
        label: "C",
        text: "2° N"
      },
      {
        label: "D",
        text: "20° N"
      },
      {
        label: "E",
        text: "70° N"
      }
    ],
    correctAnswer: "D",
    explanation: "The supplied sky image locates the celestial pole at the appropriate altitude; the official latitude is 20° N.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 12,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 12,
    difficulty: "Beginner",
    topic: "Stars & Stellar Evolution",
    subtopic: "Solar Evolution Sequence",
    tags: [
      "helium flash",
      "red giant branch",
      "asymptotic giant branch",
      "white dwarf"
    ],
    type: "MCQ",
    questionText: "Order the following phases of the Sun's evolution from first to last chronologically. 1. Helium flash 2. White dwarf 3. Red giant branch 4. Asymptotic giant branch 5. End of hydrogen fusion in the core",
    choices: [
      {
        label: "A",
        text: "5, 4, 1, 3, 2"
      },
      {
        label: "B",
        text: "5, 3, 1, 4, 2"
      },
      {
        label: "C",
        text: "1, 5, 3, 4, 2"
      },
      {
        label: "D",
        text: "5, 2, 4, 1, 3"
      },
      {
        label: "E",
        text: "3, 5, 1, 4, 2"
      }
    ],
    correctAnswer: "B",
    explanation: "Core hydrogen exhaustion precedes the red giant branch, helium flash, asymptotic giant branch, and white dwarf stages.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 12,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 13,
    difficulty: "Beginner",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Elliptical-Orbit Distance Ratio",
    tags: [
      "eccentricity",
      "periapsis",
      "apoapsis",
      "planetary orbit"
    ],
    type: "MCQ",
    questionText: "The orbit of some planet to its star has an eccentricity of 0.086. What is the ratio of the planet's closest distance to its star to the farthest on its orbit?",
    choices: [
      {
        label: "A",
        text: "0.842"
      },
      {
        label: "B",
        text: "0.188"
      },
      {
        label: "C",
        text: "1.188"
      },
      {
        label: "D",
        text: "0.158"
      },
      {
        label: "E",
        text: "None of the above"
      }
    ],
    correctAnswer: "A",
    explanation: "Use rmin/rmax = (1−e)/(1+e) with e = 0.086 to obtain 0.842.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 7,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 13,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 14,
    difficulty: "Intermediate",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Kepler CDPP Detection Threshold",
    tags: [
      "Kepler",
      "CDPP",
      "transit depth",
      "signal-to-noise"
    ],
    type: "MCQ",
    questionText: "Figure 6 shows a 6-hr root-mean-square (rms) Combined Differential Photometric Precision (CDPP) curve for 150,000 stars observed by the Kepler space telescope. CDPP is a measure of the white noise contained in a light curve, so for a target with 6-hour CDPP of 100 parts per million (ppm), a 6-hour transit with depth 100 ppm would be considered a 1-σ detection. Figure 6: From Christiansen et al. (https://arxiv.org/abs/1208.0595). Original caption: The distri- bution of the 6-hour rms CDPP values with Kp magnitude for all Quarter 3 planetary targets. Consider a 1R☉ target with Kepler magnitude Kp = 13.5 that's among the best targets for its magnitude with respect to noise in Figure 6. Also consider three independent exoplanet scenarios for exoplanets with radii: • I. 0.5 R⊕ • II. 1 R⊕ • III. 10 R⊕ Using a 1 − σ detection threshold (and assuming 6-hour transit durations), which planet(s) transits would we likely fail to observe due to noise?\n\n[Visual reference required: see page 7 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "I"
      },
      {
        label: "B",
        text: "III"
      },
      {
        label: "C",
        text: "I and II"
      },
      {
        label: "D",
        text: "II and III"
      },
      {
        label: "E",
        text: "I, II, and III"
      }
    ],
    correctAnswer: "A",
    explanation: "For the best Kp = 13.5 targets in the supplied CDPP plot, only the 0.5 Earth-radius case is below the 1σ detectability threshold.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 7,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 14,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 15,
    difficulty: "Intermediate",
    topic: "Stars & Stellar Evolution",
    subtopic: "Hydrogen-Burning Lifetime Scaling",
    tags: [
      "proton-proton chain",
      "fusion efficiency",
      "stellar lifetime",
      "mass-luminosity relation"
    ],
    type: "MCQ",
    questionText: "A star with mass M goes through an energy-generating nuclear reaction 4 ¹H → ⁴He + Energy. Here, the burning efficiency of the p-p (proton-proton) chain is 0.007, meaning that each mass m yields 0.007mc² of energy. Assuming the total available hydrogen mass for nuclear reaction amounts to half of its original mass, and the luminosity L stays constant throughout the burning phase, give an expression of the hydrogen-burning lifetime of the star.",
    choices: [
      {
        label: "A",
        text: "1.625 × 10^18 s (M / M☉)^−2"
      },
      {
        label: "B",
        text: "3.15 × 10^14 s (M / M☉)^−2"
      },
      {
        label: "C",
        text: "1.625 × 10^18 s (M / M☉)^2"
      },
      {
        label: "D",
        text: "3.15 × 10^14 s (M / M☉)^2"
      },
      {
        label: "E",
        text: "None of the above"
      }
    ],
    correctAnswer: "A",
    explanation: "Combine 0.007mc² fusion efficiency, half the stellar mass in available hydrogen, and L ∝ M^3 to get the official M^-2 lifetime scaling.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 8,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 15,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 16,
    difficulty: "Intermediate",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Parker Solar Probe Perihelion Speed",
    tags: [
      "Parker Solar Probe",
      "vis-viva equation",
      "solar orbit",
      "perihelion"
    ],
    type: "MCQ",
    questionText: "In 2025, the Parker Solar Probe will pass just 6.9 × 10^6 km from the Sun, becoming the closest man-made object to the Sun in history. It will make five orbits, passing close to the Sun once every 89 days, before the planned end of the mission in 2026. How fast will the Parker Solar Probe be traveling at its closest approach to the Sun?",
    choices: [
      {
        label: "A",
        text: "38 km/s"
      },
      {
        label: "B",
        text: "48 km/s"
      },
      {
        label: "C",
        text: "139 km/s"
      },
      {
        label: "D",
        text: "190 km/s"
      },
      {
        label: "E",
        text: "196 km/s"
      }
    ],
    correctAnswer: "D",
    explanation: "Use the 89-day orbital period to infer the semimajor axis, then apply vis-viva at the 6.9 × 10^6 km perihelion distance.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 8,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 16,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 17,
    difficulty: "Advanced",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Eclipsing-Binary Mass from Light Curve",
    tags: [
      "eclipsing binary",
      "orbital period",
      "Kepler's third law",
      "light curve"
    ],
    type: "MCQ",
    questionText: "An astronomer observes an eclipsing binary star system from Earth, and he plots the following light curve. Suppose that both stars have circular orbits and the distance between the stars is 14.8 AU. What is the total mass of the binary star system in terms of solar masses?\n\n[Visual reference required: see page 8 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "2.3M☉"
      },
      {
        label: "B",
        text: "5.7M☉"
      },
      {
        label: "C",
        text: "6.8M☉"
      },
      {
        label: "D",
        text: "23M☉"
      },
      {
        label: "E",
        text: "46M☉"
      }
    ],
    correctAnswer: "E",
    explanation: "Read the period from the supplied light curve and combine it with the 14.8 AU separation using Kepler's third law; the total is 46 M☉.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 8,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 17,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 18,
    difficulty: "Advanced",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Eclipse Geometry",
    tags: [
      "eclipsing binary",
      "stellar radii",
      "light curve",
      "eclipse duration"
    ],
    type: "MCQ",
    questionText: "Assume that the smaller star in the above binary star system is brighter than the larger star. What is the ratio of the radius of the smaller star to the radius of the larger star?\n\n[Visual reference required: see page 9 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "0.21"
      },
      {
        label: "B",
        text: "0.76"
      },
      {
        label: "C",
        text: "0.82"
      },
      {
        label: "D",
        text: "0.95"
      },
      {
        label: "E",
        text: "0.98"
      }
    ],
    correctAnswer: "C",
    explanation: "The relative durations in the supplied light curve determine the chord geometry, giving a smaller-to-larger radius ratio of 0.82.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 9,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 17,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 19,
    difficulty: "Intermediate",
    topic: "Observational Astronomy & Telescopes",
    subtopic: "Telescope Diffraction Comparison",
    tags: [
      "Hubble",
      "James Webb",
      "diffraction limit",
      "wavelength"
    ],
    type: "MCQ",
    questionText: "The resolution of a space telescope is theoretically limited by diffraction from its primary mirror. In this problem, we will compare the diffraction limit of the Hubble Space Telescope (HST) (primary mirror diameter d = 2.4 m) and the James Webb Space Telescope (JWST) (d = 6.5 m). The operating wavelengths for the two telescopes are 500 nm and 10 µm respectively. Calculate the ratio of the diffraction-limited angular resolution θ(HST)/θ(JWST). Which telescope can resolve smaller angular features if limited only by diffraction?",
    choices: [
      {
        label: "A",
        text: "0.014, JWST"
      },
      {
        label: "B",
        text: "0.14, HST"
      },
      {
        label: "C",
        text: "1.4, JWST"
      },
      {
        label: "D",
        text: "14, HST"
      },
      {
        label: "E",
        text: "140, JWST"
      }
    ],
    correctAnswer: "B",
    explanation: "Because θ ∝ λ/D, θHST/θJWST ≈ 0.14, so HST resolves smaller features in the stated bands.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 9,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 18,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 20,
    difficulty: "Intermediate",
    topic: "Solar System & Planetary Science",
    subtopic: "Pluto Brightness Variation",
    tags: [
      "Pluto",
      "eccentricity",
      "apparent magnitude",
      "inverse-square law"
    ],
    type: "MCQ",
    questionText: "The eccentricity of Pluto's orbit is 0.25. Estimate the maximum change in magnitude of Pluto as seen from Earth in one orbit of Pluto. You may assume that the semi-major axis of Pluto's orbit is much greater than 1 A.U.",
    choices: [
      {
        label: "A",
        text: "0.2"
      },
      {
        label: "B",
        text: "1.2"
      },
      {
        label: "C",
        text: "2.2"
      },
      {
        label: "D",
        text: "3.2"
      },
      {
        label: "E",
        text: "4.2"
      }
    ],
    correctAnswer: "C",
    explanation: "With Earth distance negligible compared with Pluto's orbit, use the perihelion/aphelion distance ratio to get about 2.2 mag.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 10,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 18,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 21,
    difficulty: "Advanced",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Impulsive Orbit Maneuvers",
    tags: [
      "perigee",
      "apogee",
      "delta-v",
      "orbital mechanics"
    ],
    type: "MCQ",
    questionText: "A satellite is in a circular, equatorial orbit, and can fire its engines to accelerate in any of the following directions: 1. In the direction of motion 2. Against the direction of motion 3. Towards Earth, perpendicular to direction of motion (against radial vector) 4. Away from Earth, perpendicular to direction of motion (along radial vector) 5. Towards the North Celestial Pole (perpendicular to both direction of motion and radial vector) Consider a small change of velocity in each of these directions. For how many of these maneuvers will the perigee of the orbit decrease?",
    choices: [
      {
        label: "A",
        text: "1"
      },
      {
        label: "B",
        text: "2"
      },
      {
        label: "C",
        text: "3"
      },
      {
        label: "D",
        text: "4"
      },
      {
        label: "E",
        text: "5"
      }
    ],
    correctAnswer: "C",
    explanation: "A small prograde, retrograde, inward radial, outward radial, or normal impulse changes the osculating orbit differently; the official count is three perigee-lowering maneuvers.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 10,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 19,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 22,
    difficulty: "Advanced",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Apogee Changes after Delta-v",
    tags: [
      "delta-v",
      "apogee",
      "orbital maneuver",
      "circular orbit"
    ],
    type: "MCQ",
    questionText: "For the five maneuvers described above, rank the resulting apogees from lowest to highest. Assume the change in velocity is small relative to orbital velocity, but not negligible.",
    choices: [
      {
        label: "A",
        text: "2 < 3 = 4 = 5 < 1"
      },
      {
        label: "B",
        text: "2 = 3 < 5 < 4 = 1"
      },
      {
        label: "C",
        text: "2 < 3 = 4 < 5 < 1"
      },
      {
        label: "D",
        text: "2 < 5 < 3 = 4 < 1"
      },
      {
        label: "E",
        text: "2 < 3 < 5 < 4 < 1"
      }
    ],
    correctAnswer: "D",
    explanation: "Comparing the small-impulse orbital-energy changes gives the official ordering 2 < 5 < 3 = 4 < 1.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 10,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 19,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 23,
    difficulty: "Intermediate",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Exoplanet Equilibrium Temperature",
    tags: [
      "equilibrium temperature",
      "zero albedo",
      "Sun-like star",
      "orbital period"
    ],
    type: "MCQ",
    questionText: "An exoplanet discovered by the radial velocity method is found to have an orbital period of 2.45 days around a Sun-like star. Assuming the planet has zero albedo (i.e., absorbs all incoming starlight) and perfectly transports heat across its surface, estimate the temperature at the photosphere of the planet.",
    choices: [
      {
        label: "A",
        text: "395 K"
      },
      {
        label: "B",
        text: "954 K"
      },
      {
        label: "C",
        text: "1231 K"
      },
      {
        label: "D",
        text: "1476 K"
      },
      {
        label: "E",
        text: "2071 K"
      }
    ],
    correctAnswer: "D",
    explanation: "Use Kepler's law for orbital distance and blackbody energy balance with full heat redistribution to get 1476 K.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 10,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 20,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 24,
    difficulty: "Advanced",
    topic: "Celestial Coordinates & Time",
    subtopic: "Three-Dimensional Stellar Separation",
    tags: [
      "parallax",
      "right ascension",
      "declination",
      "Deneb"
    ],
    type: "MCQ",
    questionText: "Deneb is a very important star in the Northern hemisphere as it is one of the three stars in the Summer Triangle. Deneb (α Cyg) is also the brightest star in the Cygnus constellation. Knowing the following information calculate the distance between Deneb and Albireo (β Cyg). Deneb Albireo Parallax (π) 2.29 mas 7.51 mas Declination (δ) 45 ° 17' 27 ° 57' Right ascension (α) 20h 41min 19h 31min",
    choices: [
      {
        label: "A",
        text: "569 pc"
      },
      {
        label: "B",
        text: "102 pc"
      },
      {
        label: "C",
        text: "432 pc"
      },
      {
        label: "D",
        text: "317 pc"
      },
      {
        label: "E",
        text: "459 pc"
      }
    ],
    correctAnswer: "D",
    explanation: "Convert the two parallaxes to distances and use their sky-coordinate separation to obtain 317 pc.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 11,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 21,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 25,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Hour Angle",
    tags: [
      "hour angle",
      "fall equinox",
      "Deneb",
      "solar time"
    ],
    type: "MCQ",
    questionText: "Suppose you are in Houston (29°461N 95°231W) on the fall equinox and you just observed Deneb culminating (upper culmination). Knowing the data in the table of exercise 24, what is the hour angle of the Sun?",
    choices: [
      {
        label: "A",
        text: "8h41min"
      },
      {
        label: "B",
        text: "20h41min"
      },
      {
        label: "C",
        text: "12h00min"
      },
      {
        label: "D",
        text: "14h19min"
      },
      {
        label: "E",
        text: "18h22min"
      }
    ],
    correctAnswer: "A",
    explanation: "At Deneb's upper culmination, local sidereal time equals Deneb's RA; subtract the Sun's RA at the fall equinox to get 8h 41m.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 11,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 21,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 26,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Constellation of the Sun",
    tags: [
      "night sky",
      "constellation",
      "midnight",
      "ecliptic"
    ],
    type: "MCQ",
    questionText: "Knowing that the following image was taken at at 11:59pm, determine the name of which constellation was the sun passing in front of in that same day.\n\n[Visual reference required: see page 12 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "Scorpius"
      },
      {
        label: "B",
        text: "Virgo"
      },
      {
        label: "C",
        text: "Big Dipper"
      },
      {
        label: "D",
        text: "Cancer"
      },
      {
        label: "E",
        text: "Taurus"
      }
    ],
    correctAnswer: "D",
    explanation: "The supplied 11:59 pm sky image identifies the anti-solar sky direction; the official solution places the Sun in Cancer.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 12,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 24,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 27,
    difficulty: "Beginner",
    topic: "Observational Astronomy & Telescopes",
    subtopic: "Signal-to-Noise Scaling",
    tags: [
      "signal-to-noise ratio",
      "exposure time",
      "photon noise",
      "observing"
    ],
    type: "MCQ",
    questionText: "An astronomer observes a galaxy in very foggy weather. So far, she has an image of signal-to- noise ratio of approximately 1, imaging for about 5 seconds. if she wants to reach a signal-to-noise ratio of 10. How long, in total, must she observe the galaxy for?",
    choices: [
      {
        label: "A",
        text: "15 seconds"
      },
      {
        label: "B",
        text: "20 seconds"
      },
      {
        label: "C",
        text: "25 seconds"
      },
      {
        label: "D",
        text: "50 seconds"
      },
      {
        label: "E",
        text: "500 seconds"
      }
    ],
    correctAnswer: "E",
    explanation: "For photon-limited imaging S/N scales as √t, so increasing S/N from 1 to 10 requires 100 times the time: 500 seconds.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 12,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 24,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 28,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Circumpolar Stars",
    tags: [
      "circumpolar",
      "Dubhe",
      "latitude",
      "declination"
    ],
    type: "MCQ",
    questionText: "Dubhe (declination δ = 61.75 °) is a star in the constellation of Ursa Major. Is it circumpolar from the city of San Francisco (latitude λ = 37.7 ° N)? How about from the city of Miami (latitude λ = 25.8 ° N)?",
    choices: [
      {
        label: "A",
        text: "Yes, Yes"
      },
      {
        label: "B",
        text: "Yes, No"
      },
      {
        label: "C",
        text: "No, Yes"
      },
      {
        label: "D",
        text: "No, No"
      },
      {
        label: "E",
        text: "Need more information"
      }
    ],
    correctAnswer: "B",
    explanation: "A star is circumpolar when δ > 90° − φ; Dubhe is circumpolar from San Francisco but not Miami.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 12,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 25,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 29,
    difficulty: "Intermediate",
    topic: "Galaxies & Large-Scale Structure",
    subtopic: "Hubble-Law Distance",
    tags: [
      "redshift",
      "H-alpha",
      "Hubble law",
      "galaxy distance"
    ],
    type: "MCQ",
    questionText: "An astronomer takes a spectrum of a galaxy and observes that the hydrogen-alpha emission line is at a wavelength of 721.9 nanometers. In a laboratory on Earth, this same emission line is observed at a wavelength of 656.3 nanometers. Approximately what is the (proper) distance to this galaxy?",
    choices: [
      {
        label: "A",
        text: "66 Mpc"
      },
      {
        label: "B",
        text: "430 Mpc"
      },
      {
        label: "C",
        text: "480 Mpc"
      },
      {
        label: "D",
        text: "3900 Mpc"
      },
      {
        label: "E",
        text: "4700 Mpc"
      }
    ],
    correctAnswer: "B",
    explanation: "The wavelength shift gives z ≈ 0.10 and recessional speed ≈ cz; using H₀ yields about 430 Mpc.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 13,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 25,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2022,
    examName: "First Round",
    questionNumber: 30,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Seasonal Day-Length Difference",
    tags: [
      "day length",
      "solstice",
      "latitude",
      "Sun altitude"
    ],
    type: "MCQ",
    questionText: "What is the time difference between the longest day of the year and the shortest day of the year in San Francisco (37.7° N, 122.4° W)? Neglect atmospheric refraction.",
    choices: [
      {
        label: "A",
        text: "2h30min"
      },
      {
        label: "B",
        text: "3h32min"
      },
      {
        label: "C",
        text: "4h08min"
      },
      {
        label: "D",
        text: "5h12min"
      },
      {
        label: "E",
        text: "6h25min"
      }
    ],
    correctAnswer: "D",
    explanation: "Solve the sunrise/sunset hour angles at the two solstices for latitude 37.7° N; their difference is about 5h 12m.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_problems.pdf",
    pageNumber: 13,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2022/02/usaaao_first_exam_2022_solutions-1.pdf",
    answerKeyPageNumber: 27,
    attributionText: "USAAAO 2022 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 1,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Julian Date and Time Zones",
    tags: [
      "Julian day",
      "UTC",
      "Central European Time",
      "calendar date"
    ],
    type: "MCQ",
    questionText: "According to the astronomical Julian day count, JD 2459946.0 corresponds to January 1, 2023 at 12:00 UT. What would be the date and time at Chorzow, Poland corresponding to JD 2460000.0? Poland uses the Central European Time (GMT + 1:00).",
    choices: [
      {
        label: "A",
        text: "31 January 2023, 24:00"
      },
      {
        label: "B",
        text: "24 February 2023, 13:00"
      },
      {
        label: "C",
        text: "21 March 2023, 14:00"
      },
      {
        label: "D",
        text: "21 June 2023, 18:00"
      },
      {
        label: "E",
        text: "31 December 2023, 24:00"
      }
    ],
    correctAnswer: "B",
    explanation: "JD 2460000.0 is 54 days after the reference date at 12:00 UT; adding CET gives 24 February 2023 at 13:00.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 1,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 1,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 2,
    difficulty: "Intermediate",
    topic: "Observational Astronomy & Telescopes",
    subtopic: "Telescope Field of View",
    tags: [
      "field of view",
      "distance modulus",
      "magnification",
      "focal length"
    ],
    type: "MCQ",
    questionText: "A cluster has a radius of 2 parsecs. A Sun-like star in the cluster has an apparent magnitude of 10. When we look at the cluster with a telescope that has an en eyepiece with a field of view of 30 degrees, the cluster just fits within the eyepiece. If this telescope has an eyepiece of focal length 20 mm, what is the focal length of its objective lens?",
    choices: [
      {
        label: "A",
        text: "570 mm"
      },
      {
        label: "B",
        text: "283 mm"
      },
      {
        label: "C",
        text: "144 mm"
      },
      {
        label: "D",
        text: "425 mm"
      },
      {
        label: "E",
        text: "301 mm"
      }
    ],
    correctAnswer: "B",
    explanation: "Use the Sun-like star's distance modulus to get the cluster distance, derive its true angular size, then use eyepiece field divided by true field for magnification.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 1,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 2,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 3,
    difficulty: "Beginner",
    topic: "Solar System & Planetary Science",
    subtopic: "Albedo and Reflected Brightness",
    tags: [
      "albedo",
      "Earth",
      "Moon",
      "reflected light"
    ],
    type: "MCQ",
    questionText: "The radius of the Moon is about 4 times smaller than the radius of the Earth. The mean albedos of the Moon and the Earth are 0.12 and 0.36, respectively. The Mars Reconnaissance Orbiter took a picture of the Earth-Moon system. How many times brighter than the Moon did the Earth appear in the image?",
    choices: [
      {
        label: "A",
        text: "4/9"
      },
      {
        label: "B",
        text: "4/3"
      },
      {
        label: "C",
        text: "16/3"
      },
      {
        label: "D",
        text: "12"
      },
      {
        label: "E",
        text: "48"
      }
    ],
    correctAnswer: "E",
    explanation: "Brightness scales with reflecting area and albedo: the radius ratio contributes 16 and the albedo ratio contributes 3, for 48.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 1,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 2,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 4,
    difficulty: "Beginner",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Wien's Law",
    tags: [
      "Wien's law",
      "solar corona",
      "X-rays",
      "blackbody"
    ],
    type: "MCQ",
    questionText: "The Sun has a surface temperature of about 6000 K and its blackbody emission peaks in the visible spectrum. Around 1940s, astronomers found out that the Sun is a strong X-ray emitter. Today, it is understood that this emission comes from the solar corona where temperatures can reach on the order of 106 K. Assuming the corona is a blackbody emitter, what wavelength would that emission peak at?",
    choices: [
      {
        label: "A",
        text: "2.9 nm"
      },
      {
        label: "B",
        text: "2.9 µm"
      },
      {
        label: "C",
        text: "2.9 mm"
      },
      {
        label: "D",
        text: "2.9 m"
      },
      {
        label: "E",
        text: "2.9 km"
      }
    ],
    correctAnswer: "A",
    explanation: "λmax = 2.9 × 10^-3/T gives 2.9 nm for a 10^6 K corona.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 1,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 2,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 5,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Stellar Parallax",
    tags: [
      "parallax",
      "61 Cygni",
      "parsec",
      "Bessel"
    ],
    type: "MCQ",
    questionText: "Friedrich Bessel was the first person to quantitatively measure the annual change in stellar positions due to the motion of the Earth around the Sun. This change is known as stellar parallax. Bessel determined the stellar parallax for 61 Cygni to be about 1/3 arc-seconds. What is the distance to 61 Cygni from Earth?",
    choices: [
      {
        label: "A",
        text: "1/3 light years"
      },
      {
        label: "B",
        text: "3 light years"
      },
      {
        label: "C",
        text: "1/3 parsec"
      },
      {
        label: "D",
        text: "3 parsecs"
      },
      {
        label: "E",
        text: "3 kiloparsecs"
      }
    ],
    correctAnswer: "D",
    explanation: "Distance in parsecs is the reciprocal of parallax in arcseconds; 1/(1/3) = 3 pc.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 2,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 3,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 6,
    difficulty: "Intermediate",
    topic: "Stars & Stellar Evolution",
    subtopic: "Neutron-Star Blackbody Luminosity",
    tags: [
      "neutron star",
      "Stefan-Boltzmann law",
      "blackbody luminosity",
      "stellar remnants"
    ],
    type: "MCQ",
    questionText: "Compute the blackbody luminosity of a neutron star with its surface temperature at 10^6 K and radius 10^4 m.",
    choices: [
      {
        label: "A",
        text: "0.1 L☉"
      },
      {
        label: "B",
        text: "0.2 L☉"
      },
      {
        label: "C",
        text: "0.3 L☉"
      },
      {
        label: "D",
        text: "0.4 L☉"
      },
      {
        label: "E",
        text: "0.5 L☉"
      }
    ],
    correctAnswer: "B",
    explanation: "Substituting R = 10^4 m and T = 10^6 K into 4πR²σT⁴ gives approximately 0.2 solar luminosities.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 2,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 3,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 7,
    difficulty: "Intermediate",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Balmer Absorption Lines",
    tags: [
      "Balmer series",
      "hydrogen",
      "n=2",
      "interstellar medium"
    ],
    type: "MCQ",
    questionText: "Fill in the blanks. The Balmer lines are a series of emission spectrum of hydrogen. In the low temperature interstellar medium, despite hydrogen being the most commonly occurring element in such environment, the Balmer series is not observed as absorption lines. That happens because the transitions that require such spectrum to appear as absorption lines correspond to transitions from the (1) hydrogen level to higher states. In low temperature environments, the (1) level is (2) .",
    choices: [
      {
        label: "A",
        text: "(1) n = 1, (2) always occupied"
      },
      {
        label: "B",
        text: "(1) n = 1, (2) never occupied"
      },
      {
        label: "C",
        text: "(1) n = 2, (2) always occupied"
      },
      {
        label: "D",
        text: "(1) n = 2, (2) never occupied"
      },
      {
        label: "E",
        text: "(1) n = 3, (2) never occupied"
      }
    ],
    correctAnswer: "D",
    explanation: "Balmer absorption requires atoms initially in n = 2, but this excited level is rarely populated in cool interstellar gas.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 2,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 3,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 8,
    difficulty: "Advanced",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Parabolic-Orbit Fragment Escape",
    tags: [
      "parabolic orbit",
      "escape velocity",
      "comet fragments",
      "orbital energy"
    ],
    type: "MCQ",
    questionText: "A comet passes near the Sun on a parabolic orbit. While it's passing near the Sun with orbital velocity V , the Sun's heat causes the comet to melt, and it shatters into many small fragments. The fragments move away uniformly in all directions (in the comet's reference frame) with velocity v ≪ V . What fraction of the fragments will escape the solar system? Ignore any forces other than the Sun's gravity.",
    choices: [
      {
        label: "A",
        text: "0%"
      },
      {
        label: "B",
        text: "50%"
      },
      {
        label: "C",
        text: "100%"
      },
      {
        label: "D",
        text: "v / V"
      },
      {
        label: "E",
        text: "1 − v / V"
      }
    ],
    correctAnswer: "B",
    explanation: "A parabolic orbit is exactly at escape energy; to first order, fragments with forward velocity components escape, which is half an isotropic distribution.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 2,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 4,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 9,
    difficulty: "Advanced",
    topic: "Galaxies & Large-Scale Structure",
    subtopic: "Galaxy Mass: Rotation vs. Virial Theorem",
    tags: [
      "spiral galaxy",
      "elliptical galaxy",
      "virial theorem",
      "velocity dispersion"
    ],
    type: "MCQ",
    questionText: "Consider Galaxies A and B, both of which have radius R. At a distance R from its center, Galaxy A's rotational velocity is equal to v. Meanwhile, Galaxy B's radial velocity dispersion is also equal to v. However, galaxy A is spiral while galaxy B is spherical elliptical and composed of uniform, evenly-spaced stars. Calculate the masses of both galaxies. (Answer choices are listed as m_A; m_B).",
    choices: [
      {
        label: "A",
        text: "v^2R / G; v^2R / G"
      },
      {
        label: "B",
        text: "v^2R / G; (5/6)v^2R / G"
      },
      {
        label: "C",
        text: "v^2R / G; (5/4)v^2R / G"
      },
      {
        label: "D",
        text: "v^2R / G; 5v^2R / G"
      },
      {
        label: "E",
        text: "(5/2)v^2R / G; v^2R / G"
      }
    ],
    correctAnswer: "D",
    explanation: "For the spiral, M = v²R/G; for isotropic random velocities in the uniform elliptical, the virial theorem gives 5v²R/G.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 3,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 5,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 10,
    difficulty: "Advanced",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Radial Free Fall from Circular Orbit",
    tags: [
      "Venus",
      "Kepler's third law",
      "free fall",
      "elliptical orbit"
    ],
    type: "MCQ",
    questionText: "Consider a satellite that has a circular orbit with a radius of 6.0 × 10^8 m around Venus. Due to a failure in its ignition system, the satellite's orbital velocity was suddenly decreased to zero during a maneuver. How long does the satellite take to hit the surface of the planet? Consider that the mass of Venus is 4.67 × 10^24 kg and neglect any gravitational effects on the satellite other than that from Venus.",
    choices: [
      {
        label: "A",
        text: "15 hours."
      },
      {
        label: "B",
        text: "3 days."
      },
      {
        label: "C",
        text: "11 days."
      },
      {
        label: "D",
        text: "25 days."
      },
      {
        label: "E",
        text: "37 days."
      }
    ],
    correctAnswer: "C",
    explanation: "After velocity is removed, the satellite follows a degenerate ellipse of semimajor axis r/2; half its period is about 11 days.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 3,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 6,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 11,
    difficulty: "Intermediate",
    topic: "Stars & Stellar Evolution",
    subtopic: "Main-Sequence Lifetime",
    tags: [
      "proton-proton chain",
      "fusion efficiency",
      "hydrogen fraction",
      "stellar lifetime"
    ],
    type: "MCQ",
    questionText: "Consider a main-sequence star with mass M = 9.1 × 10^29 kg, which is sustained through the proton-proton chain reaction, which operates with ϵ = 0.7% efficiency. The hydrogen and helium fractions of this star are fH = 0.71 and fHe = 0.22 at the beginning of its lifetime. Assume this star has solar luminosity and that all hydrogen can be used for fusion. Calculate the lifetime of this star.",
    choices: [
      {
        label: "A",
        text: "3.3 × 10^17 s"
      },
      {
        label: "B",
        text: "1.1 × 10^18 s"
      },
      {
        label: "C",
        text: "1.5 × 10^18 s"
      },
      {
        label: "D",
        text: "1.5 × 10^20 s"
      },
      {
        label: "E",
        text: "2.2 × 10^22 s"
      }
    ],
    correctAnswer: "B",
    explanation: "The available energy is εfHMc²; divide by solar luminosity to obtain about 1.1 × 10^18 s.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 3,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 6,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 12,
    difficulty: "Advanced",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Time Spent on an Elliptical Orbit",
    tags: [
      "eccentricity",
      "Kepler's second law",
      "true anomaly",
      "orbital period"
    ],
    type: "MCQ",
    questionText: "A planet is in an elliptical orbit around a star. Let rmin be the minimum distance between the planet and star, and let rmax be the maximum distance between the planet and star. Suppose that rmax = 4rmin. During what percentage of the time period of each orbit is the planet at least 5 2rmin away from the star?",
    choices: [
      {
        label: "A",
        text: "23%"
      },
      {
        label: "B",
        text: "50%"
      },
      {
        label: "C",
        text: "57%"
      },
      {
        label: "D",
        text: "69%"
      },
      {
        label: "E",
        text: "77%"
      }
    ],
    correctAnswer: "D",
    explanation: "The distance condition occurs at the endpoints of the semiminor axis; applying equal-area timing yields 69% of the period.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 3,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 7,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 13,
    difficulty: "Intermediate",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Transit Radius from Magnitude Dip",
    tags: [
      "transit depth",
      "magnitude",
      "exoplanet radius",
      "stellar radius"
    ],
    type: "MCQ",
    questionText: "The apparent magnitude of a star of radius 0.41R☉ as observed from Earth appears to fluctuate by 0.037. That is, the difference between the maximum and minimum apparent magnitudes is 0.037. This fluctuation is caused by an exoplanet that orbits the star. Determine the radius of the exoplanet.",
    choices: [
      {
        label: "A",
        text: "0.075R☉"
      },
      {
        label: "B",
        text: "0.079R☉"
      },
      {
        label: "C",
        text: "0.085R☉"
      },
      {
        label: "D",
        text: "0.098R☉"
      },
      {
        label: "E",
        text: "0.12R☉"
      }
    ],
    correctAnswer: "A",
    explanation: "Convert the 0.037-mag fluctuation to a flux decrement, then use ΔF/F = (Rp/Rs)² to get 0.075 R☉.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 7,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 14,
    difficulty: "Intermediate",
    topic: "Stars & Stellar Evolution",
    subtopic: "Stellar Lifetime-Mass Relation",
    tags: [
      "stellar lifetime",
      "mass-lifetime relation",
      "first stars",
      "solar mass"
    ],
    type: "MCQ",
    questionText: "An empirically determined approximate formula for the lifetime of a star is given by: T = (M☉ / M)^2.5 × 10^10 years, where T is the stellar lifetime and M is the mass of the star. If the very first stars in the universe formed approximately 400 million years after the Big Bang, what is the most massive such star that could still exist today?",
    choices: [
      {
        label: "A",
        text: "3.6M☉"
      },
      {
        label: "B",
        text: "2.0M☉"
      },
      {
        label: "C",
        text: "1.3M☉"
      },
      {
        label: "D",
        text: "0.89M☉"
      },
      {
        label: "E",
        text: "0.75M☉"
      }
    ],
    correctAnswer: "D",
    explanation: "Set the lifetime formula equal to the time available since the first stars formed; solving gives 0.89 M☉.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 8,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 15,
    difficulty: "Advanced",
    topic: "Astrophysical Processes & Fundamental Physics",
    subtopic: "Special Relativity Time Dilation",
    tags: [
      "relativity",
      "light sail",
      "time dilation",
      "Alpha Centauri"
    ],
    type: "MCQ",
    questionText: "With the technology currently available, it would take hundreds of millennia to send a human-made object to other stars. A possible solution to this problem is to use relativistic light sails, which consist of very small probes propelled by radiation pressure. It is estimated that on the reference frame of an Earth observer, these sails would take 20.0 years to reach Alpha Centauri, which is 4.37 light-years away from the Solar System. The velocity of a light sail can be assumed to be constant throughout the entire trip. How long would this trip be on the reference frame of the light sail?",
    choices: [
      {
        label: "A",
        text: "18.5 years"
      },
      {
        label: "B",
        text: "19.0 years"
      },
      {
        label: "C",
        text: "19.5 years"
      },
      {
        label: "D",
        text: "20.0 years"
      },
      {
        label: "E",
        text: "20.5 years"
      }
    ],
    correctAnswer: "C",
    explanation: "The Earth-frame speed is 4.37 ly/20.0 yr; applying time dilation gives a traveler-frame time of 19.5 years.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 9,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 16,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Constellation Identification",
    tags: [
      "sky map",
      "constellations",
      "Virgo",
      "Corona Borealis"
    ],
    type: "MCQ",
    questionText: "Which of the following constellations is not on the sky map below?\n\n[Visual reference required: see page 4 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "Virgo"
      },
      {
        label: "B",
        text: "Crux"
      },
      {
        label: "C",
        text: "Lupus"
      },
      {
        label: "D",
        text: "Libra"
      },
      {
        label: "E",
        text: "Corona Borealis"
      }
    ],
    correctAnswer: "E",
    explanation: "The source sky map contains Virgo, Crux, Lupus, and Libra; the official answer identifies Corona Borealis as absent.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 10,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 17,
    difficulty: "Advanced",
    topic: "Celestial Coordinates & Time",
    subtopic: "Spherical Geometry",
    tags: [
      "spherical triangle",
      "Earth surface area",
      "latitude",
      "longitude"
    ],
    type: "MCQ",
    questionText: "The fictional towns of Baia and Caia are located at (66.56° N, 67.55° E) and (δ, 18.95° E), respectively. It is known that the spherical triangle with vertices at Baia, Caia, and the North Pole covers 6.75% of Earth's surface. Compute δ.",
    choices: [
      {
        label: "A",
        text: "66.56° N"
      },
      {
        label: "B",
        text: "55.25° N"
      },
      {
        label: "C",
        text: "23.44° N"
      },
      {
        label: "D",
        text: "55.25° S"
      },
      {
        label: "E",
        text: "66.56° S"
      }
    ],
    correctAnswer: "E",
    explanation: "Convert 6.75% of Earth's surface to spherical excess for the triangle with the North Pole, then solve for δ = 66.56° S.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 11,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 18,
    difficulty: "Advanced",
    topic: "Celestial Coordinates & Time",
    subtopic: "Shadow Conics",
    tags: [
      "shadows",
      "summer solstice",
      "vernal equinox",
      "conic sections"
    ],
    type: "MCQ",
    questionText: "Now suppose that Lucas is standing still in Baia (from the previous question), and Justin is standing still on the equator. Let PL1 and PJ1 be the paths of Lucas's and Justin's shadows on the summer solstice, respectively. Let PL2 and PJ2 be the paths of Lucas's and Justin's shadows on the vernal equinox, respectively. Assume that the heights of Lucas and Justin are small compared to the radius of the Earth, there is no atmospheric refraction, and that the Sun is a point. Given Earth's obliquity ε = 23.44°, which of the following is the most specific accurate description of the shapes of each path?",
    choices: [
      {
        label: "A",
        text: "PL1 : Parabola, PJ1 : Hyperbola, PL2 : Line, PJ2 : Line"
      },
      {
        label: "B",
        text: "PL1 : Parabola, PJ1 : Hyperbola, PL2 : Hyperbola, PJ2 : Line"
      },
      {
        label: "C",
        text: "PL1 : Parabola, PJ1 : Parabola, PL2 : Line, PJ2 : Line"
      },
      {
        label: "D",
        text: "PL1 : Hyperbola, PJ1 : Parabola, PL2 : Hyperbola, PJ2 : Line"
      },
      {
        label: "E",
        text: "PL1 : Hyperbola, PJ1 : Parabola, PL2 : Line, PJ2 : Line"
      }
    ],
    correctAnswer: "A",
    explanation: "The Sun's daily paths project to the stated conics on the local ground plane; the official classification is the first option.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 11,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 19,
    difficulty: "Advanced",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Radial-Velocity Planet Mass",
    tags: [
      "51 Pegasi",
      "radial velocity",
      "Kepler's third law",
      "Jupiter mass"
    ],
    type: "MCQ",
    questionText: "In 1995, researchers at the University of Geneva discovered an exoplanet in the main-sequence star 51 Pegasi. This was the first-ever discovery of an exoplanet orbiting a Sun-like star! When they observed the star, a periodic Doppler shifting of its stellar spectrum indicated that its radial velocity was varying sinusoidally; this wobbling could be explained if the star was being pulled in a circle by the gravity of an exoplanet. The radial velocity sinusoid of 51 Pegasi was measured to have a semi-amplitude of 56 m/s with a period of 4.2 days, and the mass of the star is known to be 1.1M☉. Assuming that the researchers at Geneva viewed the planet's orbit edge-on and that the orbit was circular, what is the mass of the exoplanet in Jupiter masses?",
    choices: [
      {
        label: "A",
        text: "0.81M_J"
      },
      {
        label: "B",
        text: "0.75M_J"
      },
      {
        label: "C",
        text: "0.69M_J"
      },
      {
        label: "D",
        text: "0.47M_J"
      },
      {
        label: "E",
        text: "0.33M_J"
      }
    ],
    correctAnswer: "D",
    explanation: "Use the period to determine the orbital scale and momentum conservation with the 56 m/s stellar semi-amplitude; the mass is 0.47 M_J.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 12,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 20,
    difficulty: "Beginner",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Electromagnetic-Wave Intensity",
    tags: [
      "electromagnetic waves",
      "intensity",
      "amplitude",
      "frequency"
    ],
    type: "MCQ",
    questionText: "Suppose that an astronomer detects an electromagnetic wave of frequency ν. Some time later, another wave with the same amplitude is received, but now with a frequency 2ν. In order to calibrate the apparatus and do the necessary calculations, the astronomer decided to calculate the intensity of the second signal relative to the first. Considering that they both came from the same place, what value did the astronomer obtain?",
    choices: [
      {
        label: "A",
        text: "1/4"
      },
      {
        label: "B",
        text: "1/2"
      },
      {
        label: "C",
        text: "1"
      },
      {
        label: "D",
        text: "2"
      },
      {
        label: "E",
        text: "4"
      }
    ],
    correctAnswer: "C",
    explanation: "For equal wave amplitude, the intensity is unchanged by doubling frequency in the stated setup.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 13,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 21,
    difficulty: "Advanced",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Visual-Binary Dynamical Mass",
    tags: [
      "Kepler-16",
      "parallax",
      "angular separation",
      "binary mass"
    ],
    type: "MCQ",
    questionText: "Consider the binary system Kepler-16, which has the primary star Kepler-16A and the secondary star Kepler-16B. It has an orbital period P = 41.08 days and the measured parallax is p = 13.29 mas. Calculate the total mass of the stars, using the fact that their maximum angular separation measured from Earth is θ = 2.98 mas and they are on an edge-on orbit.",
    choices: [
      {
        label: "A",
        text: "0.756 M☉"
      },
      {
        label: "B",
        text: "0.803 M☉"
      },
      {
        label: "C",
        text: "0.891 M☉"
      },
      {
        label: "D",
        text: "0.987 M☉"
      },
      {
        label: "E",
        text: "1.326 M☉"
      }
    ],
    correctAnswer: "C",
    explanation: "Convert the maximum angular separation using parallax and apply Kepler's third law to obtain 0.891 M☉.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 13,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 22,
    difficulty: "Advanced",
    topic: "Exoplanets & Stellar Systems",
    subtopic: "Habitable-Zone Eccentricity",
    tags: [
      "habitable zone",
      "blackbody planet",
      "eccentricity",
      "water"
    ],
    type: "MCQ",
    questionText: "The habitable zone of a star is defined as the one where water in the liquid state can exist in the surface of a planet. Therefore, considering that the planets are ideal black bodies with fast rotation, determine the maximum eccentricity that the orbit of a planet can have so that it can be home to life. Ignore any thermodynamic effects that might happen in the atmosphere or the sidereal space. Consider that the melting point of water is 273 K and the boiling point is 373 K.",
    choices: [
      {
        label: "A",
        text: "0.274"
      },
      {
        label: "B",
        text: "0.302"
      },
      {
        label: "C",
        text: "0.316"
      },
      {
        label: "D",
        text: "0.328"
      },
      {
        label: "E",
        text: "0.540"
      }
    ],
    correctAnswer: "B",
    explanation: "Use the temperature-distance relation at periapsis and apoapsis, with 373 K and 273 K limits, to obtain e ≈ 0.302.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 15,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 23,
    difficulty: "Advanced",
    topic: "Celestial Coordinates & Time",
    subtopic: "Polar Day with High Obliquity",
    tags: [
      "obliquity",
      "polar day",
      "solar declination",
      "Arctic Circle"
    ],
    type: "MCQ",
    questionText: "Billions of years from now, as the Moon moves farther away from the Earth, the Earth's axial tilt may become unstable. Imagine the Earth's tilt is such that the angle between the celestial equator and the ecliptic is 60°, rather than the current 23.44° - so the Arctic Circle is now as far south as 30° North. For an observer at 40° North, how many days out of the year would the Sun never set (also known as the =polar day\")? (Ignore atmospheric refraction, and assume the Earth's orbit is circular and nothing else has changed from today.)",
    choices: [
      {
        label: "A",
        text: "28"
      },
      {
        label: "B",
        text: "56"
      },
      {
        label: "C",
        text: "61"
      },
      {
        label: "D",
        text: "67"
      },
      {
        label: "E",
        text: "113"
      }
    ],
    correctAnswer: "B",
    explanation: "Determine the declination range producing 24-hour daylight at 40° N for 60° obliquity; it spans about 56 days.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 7,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 16,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 24,
    difficulty: "Intermediate",
    topic: "Observational Astronomy & Telescopes",
    subtopic: "Newtonian Telescope Focal Ratio",
    tags: [
      "Newtonian telescope",
      "parabolic mirror",
      "focal length",
      "f-number"
    ],
    type: "MCQ",
    questionText: "Erez is designing a Newtonian telescope! The equation of the primary mirror is y = x^2/(36 m) − 1 m, and the telescope tube intersects the mirror at y = 0. What is the f-number (focal ratio) of the telescope?",
    choices: [
      {
        label: "A",
        text: "f/0.75"
      },
      {
        label: "B",
        text: "f/1.00"
      },
      {
        label: "C",
        text: "f/1.25"
      },
      {
        label: "D",
        text: "f/1.33"
      },
      {
        label: "E",
        text: "f/1.75"
      }
    ],
    correctAnswer: "A",
    explanation: "The mirror equation corresponds to focal length 9 m; the y = 0 intersections give a 12 m diameter, so the focal ratio is f/0.75.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 7,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 16,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 25,
    difficulty: "Advanced",
    topic: "Celestial Coordinates & Time",
    subtopic: "Tropical and Frigid Zones",
    tags: [
      "obliquity",
      "tropics",
      "polar circles",
      "planetary seasons"
    ],
    type: "MCQ",
    questionText: "Consider a hypothetical planet orbiting the Sun with an obliquity angle i (angle between the axis of rotation and the normal to the orbital plane). Assume that a year is much longer than a day for this planet. Define a tropical region in the planet as one where the Sun reaches the zenith at some time in its revolution period. Define a frigid region in the planet as one where there is a day when the Sun never rises. What is the minimum value of i for which there is a location on the planet which is both tropical and frigid?",
    choices: [
      {
        label: "A",
        text: "0°"
      },
      {
        label: "B",
        text: "30°"
      },
      {
        label: "C",
        text: "45°"
      },
      {
        label: "D",
        text: "60°"
      },
      {
        label: "E",
        text: "90°"
      }
    ],
    correctAnswer: "C",
    explanation: "A point can be tropical and frigid only when the tropical boundary and polar-circle boundary meet, which first occurs at 45° obliquity.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 7,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 16,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 26,
    difficulty: "Advanced",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Hyperbolic Comet Eccentricity",
    tags: [
      "hyperbolic orbit",
      "solar grazing",
      "specific energy",
      "eccentricity"
    ],
    type: "MCQ",
    questionText: "A comet is approaching our solar system from the depths of space with a velocity of 10000 m/s, and if it continues moving in a straight line on its current trajectory, it will just barely graze the surface of the Sun! What is the eccentricity of the comet's orbit?",
    choices: [
      {
        label: "A",
        text: "1.00014"
      },
      {
        label: "B",
        text: "1.000014"
      },
      {
        label: "C",
        text: "1.0000014"
      },
      {
        label: "D",
        text: "1.00000014"
      },
      {
        label: "E",
        text: "1.000000014"
      }
    ],
    correctAnswer: "D",
    explanation: "Combine the incoming hyperbolic excess speed with a grazing perihelion at the Sun's surface to get e ≈ 1.00000014.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 7,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 17,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 27,
    difficulty: "Intermediate",
    topic: "Galaxies & Large-Scale Structure",
    subtopic: "Redshift Distance",
    tags: [
      "redshift",
      "Hubble law",
      "recessional velocity",
      "megaparsec"
    ],
    type: "MCQ",
    questionText: "How far from the Solar System would a galaxy with a redshift of 0.035 be?",
    choices: [
      {
        label: "A",
        text: "150 Mpc"
      },
      {
        label: "B",
        text: "200 Mpc"
      },
      {
        label: "C",
        text: "250 Mpc"
      },
      {
        label: "D",
        text: "300 Mpc"
      },
      {
        label: "E",
        text: "350 Mpc"
      }
    ],
    correctAnswer: "A",
    explanation: "At low redshift, v ≈ cz; dividing by H₀ gives roughly 150 Mpc.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 8,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 18,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 28,
    difficulty: "Advanced",
    topic: "Orbital Mechanics & Gravitation",
    subtopic: "Non-Intersecting Elliptical Orbits",
    tags: [
      "elliptical orbits",
      "eccentricity",
      "semimajor axis",
      "apsides"
    ],
    type: "MCQ",
    questionText: "Two planets A and B orbit a star with coplanar orbital paths that don't intersect. The major axes of the orbits are perfectly aligned, but the major axis of A is larger than that of B. A and B are observed to have eccentricities 0.5 and 0.75, respectively. What is the minimal possible ratio of semi-major axes of A to B?",
    choices: [
      {
        label: "A",
        text: "1"
      },
      {
        label: "B",
        text: "7 / 6"
      },
      {
        label: "C",
        text: "8 / 3"
      },
      {
        label: "D",
        text: "7 / 2"
      },
      {
        label: "E",
        text: "6"
      }
    ],
    correctAnswer: "B",
    explanation: "For aligned, non-intersecting orbits, set A's periapsis equal to B's apoapsis at the limit, giving a semimajor-axis ratio of 7/6.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 8,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 19,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 29,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Solar Azimuth from a Map",
    tags: [
      "Sun azimuth",
      "Boston",
      "Harvard Bridge",
      "season"
    ],
    type: "MCQ",
    questionText: "Here is a map of MIT and the surrounding area, where North points directly upwards, as taken from https://whereis.mit.edu: Leo is biking along the Harvard Bridge (marked as =A\") when he stops and looks out at the river. Looking out downriver (to the right on this map) and parallel to the banks, he sees the Sun straight in front of him, peeking out from above the buildings, and has to avert his eyes to not be blinded. What part of the academic year is it?\n\n[Visual reference required: see page 8 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "Early fall semester (late September-early October)"
      },
      {
        label: "B",
        text: "Late fall semester (late November-early December)"
      },
      {
        label: "C",
        text: "Independent Activities Period (January)"
      },
      {
        label: "D",
        text: "Early spring semester (late February-early March)"
      },
      {
        label: "E",
        text: "Late spring semester (late April-early May)"
      }
    ],
    correctAnswer: "E",
    explanation: "The bridge's downriver bearing in the supplied map matches the relevant sunrise/sunset direction in late spring.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 8,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 20,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

{
    competition: "USAAAO",
    year: 2023,
    examName: "First Round",
    questionNumber: 30,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Daily Solar Altitude",
    tags: [
      "solar altitude",
      "Sun azimuth",
      "Boston",
      "diurnal motion"
    ],
    type: "MCQ",
    questionText: "After a day spent showing a visiting friend around Boston, Leo is walking back along the bridge (see diagram in previous problem) to return to Next House. The time is such that the Sun now aligns with perfectly upriver, so it is in the opposite direction compared to the morning. How high in the sky is the Sun relative to the morning?\n\n[Visual reference required: see page 8 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "Above the horizon, and higher than in the morning"
      },
      {
        label: "B",
        text: "Above the horizon, at the same altitude as in the morning"
      },
      {
        label: "C",
        text: "Above the horizon, but lower than in the morning"
      },
      {
        label: "D",
        text: "On the horizon"
      },
      {
        label: "E",
        text: "Below the horizon"
      }
    ],
    correctAnswer: "A",
    explanation: "At the opposite azimuth later that day, the Sun remains above the horizon and is higher than in the morning.",
    sourceUrl: "https://usaaao.org/resources/past-exams/",
    pdfUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023.pdf",
    pageNumber: 9,
    answerKeyUrl: "https://usaaao.org/wp-content/uploads/2023/02/usaaao_first_exam_2023_solutions.pdf",
    answerKeyPageNumber: 21,
    attributionText: "USAAAO 2023 First Round. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    permissionStatus: "needs-review",
    status: "draft"
  },

  // 2024–2026
{
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 1,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Solar Declination and Seasonal Date",
    "tags": [
      "solar azimuth",
      "solar declination",
      "spherical trigonometry",
      "seasons"
    ],
    "type": "MCQ",
    "questionText": "David is walking down MIT’s infinite corridor (latitude 42°21′33″) when he sees the Sun aligned with the window at the end of the corridor. He measures the Sun’s azimuth as 245.81°. It has been less than six months since the previous winter solstice. Which date is closest? Assume the corridor is parallel to the Earth’s surface.",
    "choices": [
      {
        "label": "A",
        "text": "January 15"
      },
      {
        "label": "B",
        "text": "January 30"
      },
      {
        "label": "C",
        "text": "February 15"
      },
      {
        "label": "D",
        "text": "March 20"
      },
      {
        "label": "E",
        "text": "April 1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "With the Sun at zero altitude, spherical trigonometry gives a solar declination of about −17.6°. Counting its angular distance from the vernal equinox gives roughly 48–49 days before March 20: January 30.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 1,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 1,
    "attributionText": "USAAAO 2024 First Round, Question 1. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 2,
    "difficulty": "Intermediate",
    "topic": "Stars & Stellar Evolution",
    "subtopic": "Stellar Temperature, Metallicity, and Age",
    "tags": [
      "blackbody",
      "Wien’s law",
      "metallicity",
      "absolute magnitude"
    ],
    "type": "MCQ",
    "questionText": "Abhay looks at light curves for two main-sequence blackbody stars A and B. A peaks at a frequency twice as high as B, and A has higher metallicity. He makes two statements: P: A has higher absolute magnitude than B. Q: A is older than B. Which is true?",
    "choices": [
      {
        "label": "A",
        "text": "P and Q are true."
      },
      {
        "label": "B",
        "text": "P and Q are false."
      },
      {
        "label": "C",
        "text": "P is true and Q is false."
      },
      {
        "label": "D",
        "text": "P is false and Q is true."
      },
      {
        "label": "E",
        "text": "We do not have sufficient information for one or more statements."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A higher peak frequency means A is hotter, hence more luminous and therefore has a lower (not higher) absolute magnitude. Higher metallicity generally indicates a younger star. Both statements are false.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 1,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "USAAAO 2024 First Round, Question 2. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 3,
    "difficulty": "Intermediate",
    "topic": "Exoplanets & Stellar Systems",
    "subtopic": "Transit Probability",
    "tags": [
      "exoplanet transits",
      "geometry",
      "orbital inclination",
      "Earth transit"
    ],
    "type": "MCQ",
    "questionText": "Aliens in a nearby star system, randomly oriented relative to Earth, search for planets using transits. What is the probability that they can see Earth transit across the Sun? Assume they observe over multiple years and have sufficient sensitivity.",
    "choices": [
      {
        "label": "A",
        "text": "100%"
      },
      {
        "label": "B",
        "text": "5.8%"
      },
      {
        "label": "C",
        "text": "0.93%"
      },
      {
        "label": "D",
        "text": "0.47%"
      },
      {
        "label": "E",
        "text": "0.15%"
      }
    ],
    "correctAnswer": "D",
    "explanation": "For a circular orbit, the geometric transit probability is approximately R☉/a. For Earth, this is about 0.0047, or 0.47%.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 1,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "USAAAO 2024 First Round, Question 3. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 4,
    "difficulty": "Intermediate",
    "topic": "Telescopes, Observing & Instrumentation",
    "subtopic": "Telescope Magnification",
    "tags": [
      "focal length",
      "eyepiece",
      "telescope magnification",
      "field image"
    ],
    "type": "MCQ",
    "questionText": "Orion’s first telescope has primary-mirror focal length Fp = 2 m and eyepiece focal length Fe = 30 mm. The official PDF shows a full-field image from this telescope and a second, more magnified full-field image from a second telescope. Which specifications could belong to the second telescope? [Figure required; see official exam PDF page 2.]",
    "choices": [
      {
        "label": "A",
        "text": "Fp = 1 m, Fe = 15 mm"
      },
      {
        "label": "B",
        "text": "Fp = 1 m, Fe = 30 mm"
      },
      {
        "label": "C",
        "text": "Fp = 1 m, Fe = 90 mm"
      },
      {
        "label": "D",
        "text": "Fp = 6 m, Fe = 30 mm"
      },
      {
        "label": "E",
        "text": "Fp = 6 m, Fe = 15 mm"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Telescope magnification is Fp/Fe. The second field is roughly 3–4 times more magnified than the first; only 6 m with a 30 mm eyepiece matches.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 2,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 3,
    "attributionText": "USAAAO 2024 First Round, Question 4. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official image omitted; consult the cited exam page for the visual prompt.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 5,
    "difficulty": "Advanced",
    "topic": "Astrophysical Processes & Nuclear Physics",
    "subtopic": "Supernova Neutrino Yield",
    "tags": [
      "supernova",
      "neutrinos",
      "MeV",
      "energy budget"
    ],
    "type": "MCQ",
    "questionText": "A supernova releases 99% of its energy as neutrinos. For about three months its visible-light power equals 10 billion Suns. If supernova neutrinos have mean energy about 10 MeV and all energy is released during the visible interval, estimate the number of neutrinos released.",
    "choices": [
      {
        "label": "A",
        "text": "10^54"
      },
      {
        "label": "B",
        "text": "10^55"
      },
      {
        "label": "C",
        "text": "10^50"
      },
      {
        "label": "D",
        "text": "10^57"
      },
      {
        "label": "E",
        "text": "10^60"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Using 99 times the visible luminosity for neutrinos, multiplying by 90 days, and dividing by 10 MeV per neutrino gives about 10^57 neutrinos.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 4,
    "attributionText": "USAAAO 2024 First Round, Question 5. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 6,
    "difficulty": "Advanced",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Angular Momentum in Elliptical Orbits",
    "tags": [
      "angular momentum",
      "elliptical orbit",
      "vis-viva",
      "two-body orbit"
    ],
    "type": "MCQ",
    "questionText": "Planets DDP and CJ orbit a nearby star as shown in the official figure. CJ has a circular orbit of radius 2d. DDP has aphelion d, perihelion 5d, and is three times as massive as CJ. Their orbits intersect at B. What is the ratio of DDP’s angular momentum to CJ’s angular momentum at B? [Figure required; see official exam PDF page 3.]",
    "choices": [
      {
        "label": "A",
        "text": "3√3/2"
      },
      {
        "label": "B",
        "text": "√(15/2)"
      },
      {
        "label": "C",
        "text": "2√3"
      },
      {
        "label": "D",
        "text": "√30"
      },
      {
        "label": "E",
        "text": "√(10/3)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The official solution identifies √(15/2) as the angular-momentum ratio from the orbit geometry and mass ratio.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 5,
    "attributionText": "USAAAO 2024 First Round, Question 6. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official orbit diagram omitted; consult the cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 7,
    "difficulty": "Advanced",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Elliptical Orbit Geometry",
    "tags": [
      "rocket orbit",
      "periapsis",
      "orbital energy",
      "ellipse area"
    ],
    "type": "MCQ",
    "questionText": "Arjun launches a 50 kg rocket from Earth’s surface at 10,405 m/s and redirects it into a stable elliptical orbit. The orbit’s area is 1.438 × 10^15 m². What is the approximate periapsis distance from Earth’s center? Assume no energy was lost in redirection.",
    "choices": [
      {
        "label": "A",
        "text": "10,000 km"
      },
      {
        "label": "B",
        "text": "5,000 km"
      },
      {
        "label": "C",
        "text": "2,000 km"
      },
      {
        "label": "D",
        "text": "39,000 km"
      },
      {
        "label": "E",
        "text": "15,000 km"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Combining the energy-implied semimajor axis with the measured elliptical area gives a periapsis of approximately 10,000 km.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 6,
    "attributionText": "USAAAO 2024 First Round, Question 7. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 8,
    "difficulty": "Intermediate",
    "topic": "Galaxies & Extragalactic Astronomy",
    "subtopic": "Disk Galaxy Rotation Curve",
    "tags": [
      "surface density",
      "galactic disk",
      "circular velocity",
      "Newtonian gravity"
    ],
    "type": "MCQ",
    "questionText": "Assume the Milky Way has constant surface mass density σ and is a perfect circular disk. What is the dependence of circular orbital velocity v(r) on radius r?",
    "choices": [
      {
        "label": "A",
        "text": "1/√r"
      },
      {
        "label": "B",
        "text": "1/r"
      },
      {
        "label": "C",
        "text": "√r"
      },
      {
        "label": "D",
        "text": "r"
      },
      {
        "label": "E",
        "text": "r^(3/2)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Enclosed mass scales as r² for constant surface density. From v² = GM(r)/r, v scales as √r.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 6,
    "attributionText": "USAAAO 2024 First Round, Question 8. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 9,
    "difficulty": "Intermediate",
    "topic": "Telescopes, Observing & Instrumentation",
    "subtopic": "Parallax Reach and Baseline",
    "tags": [
      "stellar parallax",
      "Mars baseline",
      "angular resolution",
      "survey volume"
    ],
    "type": "MCQ",
    "questionText": "An expedition takes a telescope with 0.01-arcsecond angular resolution from Earth to Mars. What is the ratio of the number of stars whose parallax distances can be measured from Mars compared with Earth? Mars has semimajor axis 1.524 AU.",
    "choices": [
      {
        "label": "A",
        "text": "0.25"
      },
      {
        "label": "B",
        "text": "0.5"
      },
      {
        "label": "C",
        "text": "1"
      },
      {
        "label": "D",
        "text": "4"
      },
      {
        "label": "E",
        "text": "8"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The maximum parallax distance scales with observing baseline, while accessible star count scales as distance cubed. The ratio is about 1.524³ ≈ 4.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 7,
    "attributionText": "USAAAO 2024 First Round, Question 9. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 10,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Astronomical Twilight and Visibility",
    "tags": [
      "M52",
      "hour angle",
      "astronomical twilight",
      "altitude"
    ],
    "type": "MCQ",
    "questionText": "Ben lives on an Earth-like planet with obliquity 0° at latitude 42.20°. He wants to observe M52 (α ≈ 0h, δ = 60°), which must be above altitude 30° and observed during astronomical twilight, when the Sun is more than 18° below the horizon. Which date is the earliest after the vernal equinox on which he can observe it?",
    "choices": [
      {
        "label": "A",
        "text": "April 21"
      },
      {
        "label": "B",
        "text": "June 21"
      },
      {
        "label": "C",
        "text": "August 21"
      },
      {
        "label": "D",
        "text": "October 21"
      },
      {
        "label": "E",
        "text": "December 21"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The official solution finds the limiting solar right ascension occurs about 13 days after March 21, making April 21 the earliest listed date.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 7,
    "attributionText": "USAAAO 2024 First Round, Question 10. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 11,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Solar Declination and Latitude",
    "tags": [
      "solar zenith",
      "latitude",
      "declination",
      "seasonal Sun"
    ],
    "type": "MCQ",
    "questionText": "Joe is at the bottom of a vertical cylindrical hole of radius 10 m and depth 10 km. He sees direct sunlight through the opening for a few days twice yearly, around November 2 and February 9. Which is Joe’s latitude?",
    "choices": [
      {
        "label": "A",
        "text": "42°22′ N"
      },
      {
        "label": "B",
        "text": "19°27′ N"
      },
      {
        "label": "C",
        "text": "4°43′ N"
      },
      {
        "label": "D",
        "text": "14°38′ S"
      },
      {
        "label": "E",
        "text": "34°36′ S"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Direct overhead sunlight requires solar declination equal to latitude. The Sun’s declination is negative on both dates, and the matching option is 14°38′ S.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 8,
    "attributionText": "USAAAO 2024 First Round, Question 11. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 12,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Solar Angular Motion",
    "tags": [
      "solar diameter",
      "gnomon",
      "zenith distance",
      "daily motion"
    ],
    "type": "MCQ",
    "questionText": "In the same cylindrical-hole scenario, what is the longest possible interval during one day in which direct sunlight reaches anywhere on the bottom of the hole?",
    "choices": [
      {
        "label": "A",
        "text": "28 sec"
      },
      {
        "label": "B",
        "text": "2 min 8 sec"
      },
      {
        "label": "C",
        "text": "2 min 26 sec"
      },
      {
        "label": "D",
        "text": "2 min 35 sec"
      },
      {
        "label": "E",
        "text": "2 min 41 sec"
      }
    ],
    "correctAnswer": "E",
    "explanation": "The visible cone at the bottom has angular radius arctan(10 m / 10 km). Including the solar angular radius and the Sun’s daily angular motion gives about 2.68 minutes, closest to 2 min 41 sec.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 8,
    "attributionText": "USAAAO 2024 First Round, Question 12. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 13,
    "difficulty": "Advanced",
    "topic": "Exoplanets & Stellar Systems",
    "subtopic": "Binary-System Center of Mass",
    "tags": [
      "binary stars",
      "center of mass",
      "ellipse focus",
      "orbital geometry"
    ],
    "type": "MCQ",
    "questionText": "Samvit observes one star of a binary system, M1, at (0,b) on an elliptical orbit with semiaxes a and b; the other star M2 is too dim. Which proposed position and mass for the other star could be physically consistent? [Snapshot diagram on official PDF page 5.]",
    "choices": [
      {
        "label": "A",
        "text": "At (√(a² − b²), 0) with mass M1 + M2"
      },
      {
        "label": "B",
        "text": "At (0, −b) with mass M1"
      },
      {
        "label": "C",
        "text": "At (√(a² − b²), 0) with mass M1M2/(M1 + M2)"
      },
      {
        "label": "D",
        "text": "At (−2√(a² − b²), −b) with mass M1"
      },
      {
        "label": "E",
        "text": "At ((M2/M1)√(a² − b²), 0) with mass M2"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The binary center of mass must lie at an ellipse focus. Only option D places the combined center of mass at a focus given the observed star’s location.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 9,
    "attributionText": "USAAAO 2024 First Round, Question 13. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official snapshot diagram omitted; consult the cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 14,
    "difficulty": "Intermediate",
    "topic": "Solar System & Planetary Science",
    "subtopic": "Solar Differential Rotation",
    "tags": [
      "Sun",
      "sunspots",
      "rotation period",
      "synodic period"
    ],
    "type": "MCQ",
    "questionText": "The Sun’s surface speed is 2021 m/s at the equator and 809 m/s at 60° south. How long does it take a sunspot at the equator to complete one extra lap relative to a sunspot at 60° south?",
    "choices": [
      {
        "label": "A",
        "text": "6.2 days"
      },
      {
        "label": "B",
        "text": "25.0 days"
      },
      {
        "label": "C",
        "text": "31.2 days"
      },
      {
        "label": "D",
        "text": "41.7 days"
      },
      {
        "label": "E",
        "text": "126 days"
      }
    ],
    "correctAnswer": "E",
    "explanation": "The implied rotation periods are 25.0 and 31.2 days. Their relative angular rate yields a beat period of about 126 days.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 6,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 10,
    "attributionText": "USAAAO 2024 First Round, Question 14. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 15,
    "difficulty": "Advanced",
    "topic": "Astrophysical Processes & Nuclear Physics",
    "subtopic": "Relativistic Coulomb Barrier",
    "tags": [
      "protons",
      "relativistic energy",
      "Coulomb repulsion",
      "classical turning point"
    ],
    "type": "MCQ",
    "questionText": "Two protons lie in the solar interior. In proton A’s rest frame, proton B approaches radially from far away at 0.9c. What is the radius of the classically forbidden region that B cannot enter?",
    "choices": [
      {
        "label": "A",
        "text": "6.6 × 10^−12 m"
      },
      {
        "label": "B",
        "text": "4.1 × 10^−15 m"
      },
      {
        "label": "C",
        "text": "2.3 × 10^−15 m"
      },
      {
        "label": "D",
        "text": "3.8 × 10^−18 m"
      },
      {
        "label": "E",
        "text": "1.2 × 10^−18 m"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Equating B’s relativistic kinetic energy, (γ−1)mpc², to Coulomb potential energy gives a turning radius about 1.2 × 10^−18 m.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 6,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 10,
    "attributionText": "USAAAO 2024 First Round, Question 15. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 16,
    "difficulty": "Intermediate",
    "topic": "Solar System & Planetary Science",
    "subtopic": "Lunar Synodic Period",
    "tags": [
      "moon phase",
      "synodic period",
      "planetary year",
      "orbital period"
    ],
    "type": "MCQ",
    "questionText": "A planet has rotation period 2 days, moon revolution period 42 days, and orbital period around its Sun 420 days. All motions have the same direction. What is the lunar-cycle length as seen from the planet?",
    "choices": [
      {
        "label": "A",
        "text": "42.1 days"
      },
      {
        "label": "B",
        "text": "44.3 days"
      },
      {
        "label": "C",
        "text": "46.7 days"
      },
      {
        "label": "D",
        "text": "50.5 days"
      },
      {
        "label": "E",
        "text": "53.1 days"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The synodic period is (1/42 − 1/420)^−1, which is 46.7 days.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 6,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 11,
    "attributionText": "USAAAO 2024 First Round, Question 16. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 17,
    "difficulty": "Intermediate",
    "topic": "Telescopes, Observing & Instrumentation",
    "subtopic": "Rayleigh Criterion for Exoplanets",
    "tags": [
      "ELT",
      "Rayleigh criterion",
      "direct imaging",
      "angular resolution"
    ],
    "type": "MCQ",
    "questionText": "The Extremely Large Telescope has planned primary-mirror diameter 39.3 m. An exoplanet lies 1 AU from its star. Ignoring atmospheric seeing and using 500 nm light, what is the greatest Earth distance at which the ELT can resolve the planet separately from the star?",
    "choices": [
      {
        "label": "A",
        "text": "112 pc"
      },
      {
        "label": "B",
        "text": "212 pc"
      },
      {
        "label": "C",
        "text": "312 pc"
      },
      {
        "label": "D",
        "text": "412 pc"
      },
      {
        "label": "E",
        "text": "512 pc"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Using θ = 1.22λ/D and setting dθ = 1 AU gives a maximum distance near 312 pc.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 6,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 11,
    "attributionText": "USAAAO 2024 First Round, Question 17. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 18,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Sundial Shadow Azimuth",
    "tags": [
      "sundial",
      "solar azimuth",
      "equinox",
      "solstice"
    ],
    "type": "MCQ",
    "questionText": "At 40° N, 75° W, Leo marks hourly directions of a vertical-stick shadow from 6 AM to 6 PM on the March equinox, then repeats the exercise three months later. Let α12 and α6 be the spring-shadow azimuths at noon and 6 PM; β12 and β6 are the summer values. Which is true?",
    "choices": [
      {
        "label": "A",
        "text": "α12 = β12, α6 = β6"
      },
      {
        "label": "B",
        "text": "α12 > β12, α6 = β6"
      },
      {
        "label": "C",
        "text": "α12 < β12, α6 = β6"
      },
      {
        "label": "D",
        "text": "α12 = β12, α6 > β6"
      },
      {
        "label": "E",
        "text": "α12 = β12, α6 < β6"
      }
    ],
    "correctAnswer": "E",
    "explanation": "At local solar noon the Sun remains on the meridian in both seasons, so the noon lines match. At 6 PM in summer the Sun is north of west, giving α6 < β6.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 7,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 12,
    "attributionText": "USAAAO 2024 First Round, Question 18. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 19,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Gnomon Alignment",
    "tags": [
      "sundial",
      "celestial pole",
      "latitude",
      "gnomon"
    ],
    "type": "MCQ",
    "questionText": "For a single set of hour markings to work throughout the year, a stick’s shadow at a fixed time should always lie on the same ground line. At 40° N, measured from vertical, how should the stick be tilted?",
    "choices": [
      {
        "label": "A",
        "text": "0° (no tilt needed)"
      },
      {
        "label": "B",
        "text": "40° toward north"
      },
      {
        "label": "C",
        "text": "50° toward north"
      },
      {
        "label": "D",
        "text": "40° toward south"
      },
      {
        "label": "E",
        "text": "50° toward south"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The gnomon must point toward the North Celestial Pole. At latitude 40° N, that is 40° above the northern horizon, or 50° from vertical toward north.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 7,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 13,
    "attributionText": "USAAAO 2024 First Round, Question 19. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 20,
    "difficulty": "Advanced",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Gravity of a Uniform Cylinder",
    "tags": [
      "Gauss’s law",
      "cylindrical planet",
      "satellite period",
      "orbital dynamics"
    ],
    "type": "MCQ",
    "questionText": "A very long cylindrical planet has average density ρ and radius R. A satellite orbits at distance d from the center. Which expression gives its period P?",
    "choices": [
      {
        "label": "A",
        "text": "(2d/R)√(2π/(Gρ))"
      },
      {
        "label": "B",
        "text": "(d/R)√(2π/(Gρ))"
      },
      {
        "label": "C",
        "text": "(d/(2R))√(4π/(Gρ))"
      },
      {
        "label": "D",
        "text": "(d/R)√(4π/(Gρ))"
      },
      {
        "label": "E",
        "text": "(d/R)√(π/(Gρ))"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Gauss’s law gives g(d) = 2πGρR²/d. Equating this to circular centripetal acceleration gives P = (d/R)√(2π/(Gρ)).",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 7,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 14,
    "attributionText": "USAAAO 2024 First Round, Question 20. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 21,
    "difficulty": "Advanced",
    "topic": "Cosmology & Universe",
    "subtopic": "Inflation and Magnetic Monopoles",
    "tags": [
      "inflation",
      "magnetic monopoles",
      "number density",
      "observable universe"
    ],
    "type": "MCQ",
    "questionText": "Magnetic monopole number density at creation is about 10^82 m^−3. Inflation dilutes this density. Estimate the expansion factor during inflation required so that today the probability of even one monopole in the observable universe is 1%, given a 28.5 Gpc observable-universe diameter and post-inflation linear expansion factor 5 × 10^26.",
    "choices": [
      {
        "label": "A",
        "text": "e^40"
      },
      {
        "label": "B",
        "text": "e^50"
      },
      {
        "label": "C",
        "text": "e^55"
      },
      {
        "label": "D",
        "text": "e^65"
      },
      {
        "label": "E",
        "text": "e^85"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Comparing the present expected monopole count to the original density and both volume-dilution factors gives an inflation factor of approximately e^65.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 15,
    "attributionText": "USAAAO 2024 First Round, Question 21. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 22,
    "difficulty": "Intermediate",
    "topic": "Stars & Stellar Evolution",
    "subtopic": "Central Gas Pressure Scaling",
    "tags": [
      "ideal gas",
      "stellar structure",
      "density",
      "central temperature"
    ],
    "type": "MCQ",
    "questionText": "For hypothetical X stars of mass M and radius R, central gas pressure scales as M³/R⁵. What is central temperature proportional to?",
    "choices": [
      {
        "label": "A",
        "text": "MR"
      },
      {
        "label": "B",
        "text": "M/R"
      },
      {
        "label": "C",
        "text": "M²R²"
      },
      {
        "label": "D",
        "text": "M²/R²"
      },
      {
        "label": "E",
        "text": "constant"
      }
    ],
    "correctAnswer": "D",
    "explanation": "With P ∝ ρT and mean density ρ ∝ M/R³, T ∝ (M³/R⁵)/(M/R³) = M²/R².",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 16,
    "attributionText": "USAAAO 2024 First Round, Question 22. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 24,
    "difficulty": "Intermediate",
    "topic": "Galaxies & Extragalactic Astronomy",
    "subtopic": "Galaxy Dynamical Mass",
    "tags": [
      "circular velocity",
      "galaxy mass",
      "Newtonian gravity",
      "mass estimate"
    ],
    "type": "MCQ",
    "questionText": "An X star is observed at the edge of a galaxy of radius 15 × 10^3 pc and has speed 270 km/s. Estimate the galaxy’s mass in solar masses.",
    "choices": [
      {
        "label": "A",
        "text": "1 × 10^6"
      },
      {
        "label": "B",
        "text": "1 × 10^11"
      },
      {
        "label": "C",
        "text": "1 × 10^18"
      },
      {
        "label": "D",
        "text": "1 × 10^28"
      },
      {
        "label": "E",
        "text": "1 × 10^41"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Using M ≈ v²r/G gives about 2.5 × 10^11 solar masses, closest to 10^11.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 17,
    "attributionText": "USAAAO 2024 First Round, Question 24. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 25,
    "difficulty": "Advanced",
    "topic": "Cosmology & Universe",
    "subtopic": "Luminosity Distance and Magnitudes",
    "tags": [
      "luminosity distance",
      "apparent magnitude",
      "standard candle",
      "galaxy luminosity"
    ],
    "type": "MCQ",
    "questionText": "A galaxy at redshift 0.5 has apparent bolometric magnitude 22 and luminosity distance 2.8 Gpc. Estimate its luminosity.",
    "choices": [
      {
        "label": "A",
        "text": "10^10 L☉"
      },
      {
        "label": "B",
        "text": "10^12 L☉"
      },
      {
        "label": "C",
        "text": "10^11 L☉"
      },
      {
        "label": "D",
        "text": "10^13 L☉"
      },
      {
        "label": "E",
        "text": "10^15 L☉"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The distance modulus gives absolute magnitude about −20.24; converting magnitude to luminosity gives roughly 10^10 solar luminosities.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 9,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 18,
    "attributionText": "USAAAO 2024 First Round, Question 25. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 26,
    "difficulty": "Beginner",
    "topic": "Telescopes, Observing & Instrumentation",
    "subtopic": "Field of View and Magnification",
    "tags": [
      "Moon",
      "field of view",
      "eyepiece",
      "focal length"
    ],
    "type": "MCQ",
    "questionText": "An astronomer wants the full Moon to fill an entire telescope field of view. The eyepiece field of view is 60° and its focal length is 25 mm; the Moon’s angular diameter is 0.5°. What telescope focal length is needed?",
    "choices": [
      {
        "label": "A",
        "text": "2000 mm"
      },
      {
        "label": "B",
        "text": "1500 mm"
      },
      {
        "label": "C",
        "text": "6000 mm"
      },
      {
        "label": "D",
        "text": "3000 mm"
      },
      {
        "label": "E",
        "text": "1000 mm"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Required magnification is 60°/0.5° = 120. With a 25 mm eyepiece, focal length is 120 × 25 mm = 3000 mm.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 9,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 18,
    "attributionText": "USAAAO 2024 First Round, Question 26. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 27,
    "difficulty": "Advanced",
    "topic": "Cosmology & Universe",
    "subtopic": "CMB Temperature and Matter Density",
    "tags": [
      "CMB",
      "Wien’s law",
      "scale factor",
      "matter density"
    ],
    "type": "MCQ",
    "questionText": "The CMB peak wavelength today is 1.063 mm. At release, the Universe’s temperature was about 3000 K. How much larger was matter density at CMB release than today?",
    "choices": [
      {
        "label": "A",
        "text": "10^3"
      },
      {
        "label": "B",
        "text": "10^6"
      },
      {
        "label": "C",
        "text": "10^9"
      },
      {
        "label": "D",
        "text": "10^12"
      },
      {
        "label": "E",
        "text": "10^15"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Wien’s law gives today’s CMB temperature about 2.726 K, implying a scale factor ratio about 1100. Matter density scales as a^−3, giving approximately 10^9.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 9,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 19,
    "attributionText": "USAAAO 2024 First Round, Question 27. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 28,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Great-Circle Navigation",
    "tags": [
      "bearing",
      "great-circle route",
      "spherical trigonometry",
      "latitude"
    ],
    "type": "MCQ",
    "questionText": "Austin flies from Lubbock, Texas (33.58° N, 101.84° W) toward Boston, MA (42.36° N, 71.06° W), but the pilots entered the destination latitude incorrectly. The initial bearing was 63° and the plane followed the shortest route. Where is he?",
    "choices": [
      {
        "label": "A",
        "text": "(51.46° N, 71.06° W)"
      },
      {
        "label": "B",
        "text": "(48.46° N, 71.06° W)"
      },
      {
        "label": "C",
        "text": "(45.46° N, 71.06° W)"
      },
      {
        "label": "D",
        "text": "(41.46° N, 71.06° W)"
      },
      {
        "label": "E",
        "text": "(39.46° N, 71.06° W)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Using the spherical triangle formed by Lubbock, the North Pole, and the destination gives colatitude 48.54°, hence latitude 41.46° N.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 9,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 19,
    "attributionText": "USAAAO 2024 First Round, Question 28. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2024,
    "examName": "First Round",
    "questionNumber": 29,
    "difficulty": "Advanced",
    "topic": "Telescopes, Observing & Instrumentation",
    "subtopic": "Satellite Altitude Geometry",
    "tags": [
      "LARES",
      "satellite inclination",
      "altitude",
      "spherical geometry"
    ],
    "type": "MCQ",
    "questionText": "From Boston, Austin observes LARES, a satellite 1450 km above Earth’s surface in an orbit inclined 69.49° to the equator. What is the greatest altitude he can point his telescope when LARES is at its highest latitude?",
    "choices": [
      {
        "label": "A",
        "text": "9.4°"
      },
      {
        "label": "B",
        "text": "14.4°"
      },
      {
        "label": "C",
        "text": "18.4°"
      },
      {
        "label": "D",
        "text": "23.4°"
      },
      {
        "label": "E",
        "text": "33.4°"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Applying the law of cosines and law of sines to Earth’s center, Boston, and LARES at maximum latitude gives an elevation of about 9.4°.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2024/02/usaaao_first_exam_2024-3.pdf",
    "pageNumber": 10,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_2024.pdf",
    "answerKeyPageNumber": 20,
    "attributionText": "USAAAO 2024 First Round, Question 29. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 1,
    "difficulty": "Intermediate",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Escape Velocity",
    "tags": [
      "Deimos",
      "Mars",
      "escape velocity",
      "delta-v"
    ],
    "type": "MCQ",
    "questionText": "You are on Deimos, 23,460 km from Mars’s center, traveling about 1.35 km/s. Mars’s mass is 6.39 × 10^23 kg. How much additional speed is needed to escape Mars?",
    "choices": [
      {
        "label": "A",
        "text": "557 m/s"
      },
      {
        "label": "B",
        "text": "427 m/s"
      },
      {
        "label": "C",
        "text": "377 m/s"
      },
      {
        "label": "D",
        "text": "207 m/s"
      },
      {
        "label": "E",
        "text": "None"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The local escape speed is √(2GM/r) ≈ 1.907 km/s. Subtracting 1.35 km/s gives about 557 m/s.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 1,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 1,
    "attributionText": "USAAAO 2025 First Round, Question 1. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 2,
    "difficulty": "Advanced",
    "topic": "Astrophysical Processes & Nuclear Physics",
    "subtopic": "Blackbody Cooling of Gas Giants",
    "tags": [
      "blackbody cooling",
      "Stefan-Boltzmann law",
      "heat capacity",
      "gas giant"
    ],
    "type": "MCQ",
    "questionText": "A spherical gas giant has radius R, temperature T, uniform density and composition, and fixed volumetric heat capacity. Heat leaves only by blackbody radiation. How does the cooling rate −dT/dt depend on R and T?",
    "choices": [
      {
        "label": "A",
        "text": "T²/R"
      },
      {
        "label": "B",
        "text": "T⁴/R"
      },
      {
        "label": "C",
        "text": "T⁴/R³"
      },
      {
        "label": "D",
        "text": "T²R"
      },
      {
        "label": "E",
        "text": "T⁴R³"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Internal energy scales as R³T while radiated power scales as R²T⁴, so −dT/dt scales as T⁴/R.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 1,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 1,
    "attributionText": "USAAAO 2025 First Round, Question 2. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 3,
    "difficulty": "Advanced",
    "topic": "Astrophysical Processes & Nuclear Physics",
    "subtopic": "Cooling-Law Integration",
    "tags": [
      "differential equations",
      "blackbody cooling",
      "temperature decay",
      "gas giant"
    ],
    "type": "MCQ",
    "questionText": "With T(t) the temperature of the gas giant from the previous question, T0 = T(0), and environmental temperature Tenv = 0, what is the dependence of T/T0 on time t? α is a constant.",
    "choices": [
      {
        "label": "A",
        "text": "(1 + αt)^(-1/3)"
      },
      {
        "label": "B",
        "text": "(1 + αt)^(-1/2)"
      },
      {
        "label": "C",
        "text": "1 − αt"
      },
      {
        "label": "D",
        "text": "(1 − αt)^2"
      },
      {
        "label": "E",
        "text": "1 − e^(−αt)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integrating dT/dt ∝ −T⁴ gives T/T0 proportional to (1 + αt)^−1/3.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 1,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "USAAAO 2025 First Round, Question 3. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 4,
    "difficulty": "Advanced",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Hohmann Transfer Delta-v",
    "tags": [
      "Hohmann transfer",
      "vis-viva equation",
      "orbital maneuver",
      "delta-v"
    ],
    "type": "MCQ",
    "questionText": "A rocket orbits a star of mass M in a circular orbit of radius R and transfers to a circular orbit of radius 8R by a two-burn Hohmann transfer. Its total delta-v is k√(GM/R). What is k?",
    "choices": [
      {
        "label": "A",
        "text": "1 − 1/(2√2)"
      },
      {
        "label": "B",
        "text": "1/2 − 1/(2√2)"
      },
      {
        "label": "C",
        "text": "1/6 + 1/(2√2)"
      },
      {
        "label": "D",
        "text": "√(3/10) − 1/2"
      },
      {
        "label": "E",
        "text": "√(3/10) − 1/4"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Using the vis-viva equation at both burns and adding the two speed changes yields k = 1/6 + 1/(2√2).",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 1,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "USAAAO 2025 First Round, Question 4. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 5,
    "difficulty": "Intermediate",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Ellipse Semi-Latus Rectum",
    "tags": [
      "ellipse",
      "eccentricity",
      "semi-latus rectum",
      "orbital geometry"
    ],
    "type": "MCQ",
    "questionText": "A highly eccentric planet has semi-latus rectum nearly one hundred times smaller than its semimajor axis. What is its eccentricity?",
    "choices": [
      {
        "label": "A",
        "text": "0.99"
      },
      {
        "label": "B",
        "text": "0.995"
      },
      {
        "label": "C",
        "text": "0.9999"
      },
      {
        "label": "D",
        "text": "0.99995"
      },
      {
        "label": "E",
        "text": "0.999999"
      }
    ],
    "correctAnswer": "B",
    "explanation": "For an ellipse, ℓ = a(1 − e²). With ℓ/a ≈ 0.01, e = √0.99 ≈ 0.995.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 2,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 3,
    "attributionText": "USAAAO 2025 First Round, Question 5. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 6,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Parallax and Celestial Equator",
    "tags": [
      "celestial equator",
      "ecliptic",
      "satellite parallax",
      "declination"
    ],
    "type": "MCQ",
    "questionText": "Galileo launches satellites at altitude 3 Earth radii above the surface, but they orbit in Earth’s orbital plane rather than directly over the celestial equator. Astronomers use them as a new celestial equator. What is the maximum absolute difference between new and old declinations?",
    "choices": [
      {
        "label": "A",
        "text": "38°"
      },
      {
        "label": "B",
        "text": "0°"
      },
      {
        "label": "C",
        "text": "23.5°"
      },
      {
        "label": "D",
        "text": "47°"
      },
      {
        "label": "E",
        "text": "14.5°"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The ecliptic is tilted 23.5° from the celestial equator; finite-distance satellite parallax adds about 14.5°, for a maximum difference near 38°.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 2,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 4,
    "attributionText": "USAAAO 2025 First Round, Question 6. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 7,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Great-Circle Distance",
    "tags": [
      "Boston",
      "Mumbai",
      "geodesic distance",
      "spherical law of cosines"
    ],
    "type": "MCQ",
    "questionText": "What is the geodesic distance between Boston (42°21′37″ N, 71°3′28″ W) and Mumbai (19°4′34″ N, 72°52′39″ E), assuming a spherical Earth?",
    "choices": [
      {
        "label": "A",
        "text": "2250 km"
      },
      {
        "label": "B",
        "text": "6250 km"
      },
      {
        "label": "C",
        "text": "10250 km"
      },
      {
        "label": "D",
        "text": "12250 km"
      },
      {
        "label": "E",
        "text": "15250 km"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The spherical law of cosines gives a central angle about 1.922 rad; multiplying by Earth’s radius gives about 12,250 km.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 5,
    "attributionText": "USAAAO 2025 First Round, Question 7. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 8,
    "difficulty": "Advanced",
    "topic": "Light, Radiation & Spectroscopy",
    "subtopic": "Spectral Broadening",
    "tags": [
      "natural broadening",
      "homogeneous broadening",
      "Doppler broadening",
      "linewidth"
    ],
    "type": "MCQ",
    "questionText": "Which statements about spectral broadening are correct? P: At zero temperature, spectral lines have infinitesimally narrow linewidth. Q: For equal central frequency and FWHM, a homogeneous-broadened line has lower probability far in the wings (at 2f0) than an inhomogeneous-broadened line. R: Thermal Doppler linewidth at 2T is twice the linewidth at T.",
    "choices": [
      {
        "label": "A",
        "text": "None"
      },
      {
        "label": "B",
        "text": "P only"
      },
      {
        "label": "C",
        "text": "Q only"
      },
      {
        "label": "D",
        "text": "Both P and Q"
      },
      {
        "label": "E",
        "text": "Both Q and R"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Natural broadening remains even at zero temperature, homogeneous Lorentzian wings are broader than inhomogeneous Gaussian wings far from line center, and Doppler width scales as √T rather than T. None are correct.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 6,
    "attributionText": "USAAAO 2025 First Round, Question 8. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 9,
    "difficulty": "Advanced",
    "topic": "Stars & Stellar Evolution",
    "subtopic": "Star Cluster Turnoff",
    "tags": [
      "main-sequence turnoff",
      "mass-luminosity relation",
      "stellar populations",
      "cluster age"
    ],
    "type": "MCQ",
    "questionText": "Which statements are true for a cluster of main-sequence stars? A: At fixed total mass, a cluster with more stars is brighter per unit mass. B: Older clusters have hotter main-sequence turnoffs. C: Older clusters have lower-luminosity main-sequence turnoffs. Assume L ∝ M^3.5.",
    "choices": [
      {
        "label": "A",
        "text": "A and C"
      },
      {
        "label": "B",
        "text": "A only"
      },
      {
        "label": "C",
        "text": "C only"
      },
      {
        "label": "D",
        "text": "A, B, and C"
      },
      {
        "label": "E",
        "text": "A and B"
      }
    ],
    "correctAnswer": "C",
    "explanation": "At fixed total mass, more stars means lower average masses and lower luminosity per mass; older clusters have cooler, lower-luminosity turnoffs. Only C is true.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 7,
    "attributionText": "USAAAO 2025 First Round, Question 9. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 10,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Great Circles on a Sky Map",
    "tags": [
      "local meridian",
      "ecliptic",
      "celestial equator",
      "sky map"
    ],
    "type": "MCQ",
    "questionText": "Match imaginary lines 1–3 on the official sky map to labels. [Map required; see official exam PDF page 4.]",
    "choices": [
      {
        "label": "A",
        "text": "1 - Ecliptic; 2 - Celestial Equator; 3 - Local Meridian"
      },
      {
        "label": "B",
        "text": "1 - Local Meridian; 2 - Ecliptic; 3 - Galactic Equator"
      },
      {
        "label": "C",
        "text": "1 - Galactic Equator; 2 - Celestial Equator; 3 - Ecliptic"
      },
      {
        "label": "D",
        "text": "1 - Local Meridian; 2 - Ecliptic; 3 - Celestial Equator"
      },
      {
        "label": "E",
        "text": "1 - Local Meridian; 2 - Celestial Equator; 3 - Ecliptic"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The official solution identifies line 1 as the local meridian, line 2 as the ecliptic, and line 3 as the celestial equator.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 8,
    "attributionText": "USAAAO 2025 First Round, Question 10. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official sky map omitted; consult cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 11,
    "difficulty": "Intermediate",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Logarithmic Kepler Law",
    "tags": [
      "Kepler’s third law",
      "log-log plot",
      "exoplanet orbits",
      "slope"
    ],
    "type": "MCQ",
    "questionText": "Exoplanets orbit a 10-solar-mass star. On a log T versus log a plot, where T is period in years and a is semimajor axis in AU, what is the slope of the best-fit line?",
    "choices": [
      {
        "label": "A",
        "text": "4/3"
      },
      {
        "label": "B",
        "text": "3/2"
      },
      {
        "label": "C",
        "text": "1/10"
      },
      {
        "label": "D",
        "text": "1"
      },
      {
        "label": "E",
        "text": "1/2"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kepler’s law gives T² = a³/M, so log T = (3/2)log a − (1/2)log M. The slope is 3/2.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 9,
    "attributionText": "USAAAO 2025 First Round, Question 11. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 12,
    "difficulty": "Intermediate",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Logarithmic Kepler Law",
    "tags": [
      "Kepler’s third law",
      "log-log plot",
      "intercept",
      "stellar mass"
    ],
    "type": "MCQ",
    "questionText": "For the same log T versus log a plot of planets orbiting a 10-solar-mass star, what is the y-intercept?",
    "choices": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "−4/3"
      },
      {
        "label": "C",
        "text": "−1/2"
      },
      {
        "label": "D",
        "text": "0"
      },
      {
        "label": "E",
        "text": "−2/3"
      }
    ],
    "correctAnswer": "C",
    "explanation": "From log T = (3/2)log a − (1/2)log 10, the intercept is −1/2.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 10,
    "attributionText": "USAAAO 2025 First Round, Question 12. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 13,
    "difficulty": "Advanced",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Nested Orbital Systems",
    "tags": [
      "Kepler’s third law",
      "moon orbit",
      "exoplanet system",
      "semimajor axis"
    ],
    "type": "MCQ",
    "questionText": "An exosolar system has a star, planet, and moon. The moon’s period is 100 min; the planet’s period is 90 days. The moon ranges from 1000 km to 7000 km above a 3000 km-radius planet. Star-to-planet mass ratio is 10^5. What is the planet’s orbital semimajor axis?",
    "choices": [
      {
        "label": "A",
        "text": "1.86 × 10^7 km"
      },
      {
        "label": "B",
        "text": "2.36 × 10^7 km"
      },
      {
        "label": "C",
        "text": "2.86 × 10^7 km"
      },
      {
        "label": "D",
        "text": "3.36 × 10^7 km"
      },
      {
        "label": "E",
        "text": "3.86 × 10^7 km"
      }
    ],
    "correctAnswer": "E",
    "explanation": "The moon’s semimajor axis is 7000 km. Dividing Kepler’s laws for the two orbits and using the mass ratio gives about 3.86 × 10^7 km.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 10,
    "attributionText": "USAAAO 2025 First Round, Question 13. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 14,
    "difficulty": "Intermediate",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Artificial Spin Gravity",
    "tags": [
      "rotating habitat",
      "centrifugal acceleration",
      "period",
      "space station"
    ],
    "type": "MCQ",
    "questionText": "A cylindrical space station of radius 50 m spins to provide Earth gravity, g = 9.81 m/s². What rotational period is needed?",
    "choices": [
      {
        "label": "A",
        "text": "2.3 s"
      },
      {
        "label": "B",
        "text": "5.1 s"
      },
      {
        "label": "C",
        "text": "7.1 s"
      },
      {
        "label": "D",
        "text": "14.2 s"
      },
      {
        "label": "E",
        "text": "32.0 s"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Setting ω²r = g gives ω ≈ 0.44 s^−1, and T = 2π/ω ≈ 14.2 s.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 11,
    "attributionText": "USAAAO 2025 First Round, Question 14. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 15,
    "difficulty": "Advanced",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Coriolis Acceleration",
    "tags": [
      "Coriolis force",
      "rotating habitat",
      "spin gravity",
      "space station"
    ],
    "type": "MCQ",
    "questionText": "For a rotating habitat with spin gravity equal to Earth gravity, what is the minimum radius so a person walking 1 m/s in any direction experiences Coriolis acceleration below 1% of g?",
    "choices": [
      {
        "label": "A",
        "text": "10 m"
      },
      {
        "label": "B",
        "text": "20 m"
      },
      {
        "label": "C",
        "text": "41 m"
      },
      {
        "label": "D",
        "text": "1.0 km"
      },
      {
        "label": "E",
        "text": "4.1 km"
      }
    ],
    "correctAnswer": "E",
    "explanation": "In the worst case, Coriolis acceleration is 2ωv. With ω = √(g/r), requiring 2ωv < 0.01g gives r ≈ 4.1 km.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 11,
    "attributionText": "USAAAO 2025 First Round, Question 15. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 16,
    "difficulty": "Intermediate",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Coriolis Deflection",
    "tags": [
      "Coriolis force",
      "rotating habitat",
      "inertial trajectory",
      "artificial gravity"
    ],
    "type": "MCQ",
    "questionText": "Inside the rotating space station, you face the direction of rotation and throw a ball directly upward. Where does it land? [Official diagram on PDF page 6.]",
    "choices": [
      {
        "label": "A",
        "text": "Right back in your hand"
      },
      {
        "label": "B",
        "text": "In front of you"
      },
      {
        "label": "C",
        "text": "Behind you"
      },
      {
        "label": "D",
        "text": "To your right"
      },
      {
        "label": "E",
        "text": "To your left"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The ball keeps its greater tangential inertial speed while moving inward, so relative to you it deflects in front of you.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 6,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 12,
    "attributionText": "USAAAO 2025 First Round, Question 16. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official diagram omitted; consult cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 17,
    "difficulty": "Advanced",
    "topic": "Astrophysical Processes & Nuclear Physics",
    "subtopic": "Radiative vs Conductive Equilibrium",
    "tags": [
      "stellar core",
      "radiative transport",
      "thermal conductivity",
      "Stefan-Boltzmann law"
    ],
    "type": "MCQ",
    "questionText": "A giant star has radius R, core temperature Tc, and surface temperature Ts ≪ Tc. Alice estimates the core radius assuming the core radiates energy; Bob assumes heat is conducted through the interior with uniform thermal conductivity κ, where κ ≫ RσTc^4/Ts. What is RA/RB proportional to?",
    "choices": [
      {
        "label": "A",
        "text": "Ts/Tc"
      },
      {
        "label": "B",
        "text": "Ts²/Tc²"
      },
      {
        "label": "C",
        "text": "1/(R Tc Ts²)"
      },
      {
        "label": "D",
        "text": "R²/(Ts^4 Tc²)"
      },
      {
        "label": "E",
        "text": "Ts^4 Tc²/R"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Equating the star’s surface luminosity with Alice’s radiative-core and Bob’s conductive-core estimates yields RA/RB ∝ 1/(R Tc Ts²), as in the official solution.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 6,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 13,
    "attributionText": "USAAAO 2025 First Round, Question 17. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 18,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Sunrise/Sunset Shadow Geometry",
    "tags": [
      "gnomon",
      "sunrise shadow",
      "latitude",
      "solar geometry"
    ],
    "type": "MCQ",
    "questionText": "Connor wakes only at sunrise and sunset and measures the angle between the two vertical-stick shadows as 105°. Which latitude interval could he be in?",
    "choices": [
      {
        "label": "A",
        "text": "(0° N, 10° N)"
      },
      {
        "label": "B",
        "text": "(10° N, 20° N)"
      },
      {
        "label": "C",
        "text": "(20° N, 30° N)"
      },
      {
        "label": "D",
        "text": "(30° N, 40° N)"
      },
      {
        "label": "E",
        "text": "(40° N, 50° N)"
      }
    ],
    "correctAnswer": "E",
    "explanation": "The official spherical-geometry analysis identifies the listed interval 40°–50° N as consistent with a 105° angle between sunrise and sunset shadow directions.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 7,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 14,
    "attributionText": "USAAAO 2025 First Round, Question 18. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 19,
    "difficulty": "Intermediate",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Limits of Kepler’s Laws",
    "tags": [
      "Kepler’s laws",
      "eccentricity",
      "orbital planes",
      "tangential velocity"
    ],
    "type": "MCQ",
    "questionText": "Which statements cannot be inferred from Kepler’s laws? I: A planet moves in an elliptical orbit around the Sun. II: All solar-system planet eccentricities are small. III: A planet’s highest tangential velocity occurs when closest to the Sun. IV: All planets move in roughly the same plane.",
    "choices": [
      {
        "label": "A",
        "text": "I only"
      },
      {
        "label": "B",
        "text": "IV only"
      },
      {
        "label": "C",
        "text": "II, III, and IV"
      },
      {
        "label": "D",
        "text": "II and IV"
      },
      {
        "label": "E",
        "text": "II and III"
      }
    ],
    "correctAnswer": "D",
    "explanation": "I is Kepler’s first law and III follows from the second law. Kepler’s laws do not specify the size of eccentricities or common orbital-plane orientation, so II and IV cannot be inferred.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 7,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 14,
    "attributionText": "USAAAO 2025 First Round, Question 19. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 20,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Longitude from Timekeeping",
    "tags": [
      "longitude",
      "equation of time",
      "UTC",
      "solar time"
    ],
    "type": "MCQ",
    "questionText": "Just before dawn on the summer solstice, Christopher sails west from 50° N, 5° W with a UTC watch. On his 91st sunrise, the watch reads 3:00 AM. What is his longitude? The equation of time is −3 min at summer solstice and +8 min at autumnal equinox.",
    "choices": [
      {
        "label": "A",
        "text": "43° W"
      },
      {
        "label": "B",
        "text": "45° W"
      },
      {
        "label": "C",
        "text": "48°15′ W"
      },
      {
        "label": "D",
        "text": "50° W"
      },
      {
        "label": "E",
        "text": "53°15′ W"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Using local solar time = UTC plus longitude time correction plus the equation of time at the autumnal equinox gives longitude about 43° W.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 7,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 15,
    "attributionText": "USAAAO 2025 First Round, Question 20. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 21,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Vertical Alignment of Stars",
    "tags": [
      "Rigel",
      "Betelgeuse",
      "great circles",
      "latitude"
    ],
    "type": "MCQ",
    "questionText": "What is the largest latitude range φ for which, at some time of day, the line between Rigel (α = 5h14m32s, δ = −8°12′5.9″) and Betelgeuse (α = 5h56m33s, δ = 7°24′40.3″) appears vertical? Answer to within 5° accuracy.",
    "choices": [
      {
        "label": "A",
        "text": "−15° < φ < 15°"
      },
      {
        "label": "B",
        "text": "−25° < φ < 25°"
      },
      {
        "label": "C",
        "text": "−35° < φ < 35°"
      },
      {
        "label": "D",
        "text": "−45° < φ < 45°"
      },
      {
        "label": "E",
        "text": "−55° < φ < 55°"
      }
    ],
    "correctAnswer": "E",
    "explanation": "The two stars define a great circle. The zenith can lie on it for latitudes spanning approximately −55° to +55°, matching the official solution.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 7,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 15,
    "attributionText": "USAAAO 2025 First Round, Question 21. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 22,
    "difficulty": "Intermediate",
    "topic": "Solar System & Planetary Science",
    "subtopic": "Maximum Elongation of Venus",
    "tags": [
      "Venus",
      "elongation",
      "equator",
      "evening visibility"
    ],
    "type": "MCQ",
    "questionText": "Observed from the equator, what is the maximum continuous duration Venus can be seen after sunset? Assume circular coplanar Earth and Venus orbits with radii 1 AU and 0.723 AU.",
    "choices": [
      {
        "label": "A",
        "text": "2 h 50 m"
      },
      {
        "label": "B",
        "text": "3 h 5 m"
      },
      {
        "label": "C",
        "text": "3 h 20 m"
      },
      {
        "label": "D",
        "text": "3 h 40 m"
      },
      {
        "label": "E",
        "text": "12 h"
      }
    ],
    "correctAnswer": "C",
    "explanation": "At greatest elongation, Venus’s angular separation from the Sun gives a maximum evening visibility of about 3 h 20 m from the equator.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 16,
    "attributionText": "USAAAO 2025 First Round, Question 22. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 23,
    "difficulty": "Intermediate",
    "topic": "Solar System & Planetary Science",
    "subtopic": "Solar Irradiance and Eccentricity",
    "tags": [
      "Earth orbit",
      "perihelion",
      "aphelion",
      "inverse-square law"
    ],
    "type": "MCQ",
    "questionText": "Earth’s orbital eccentricity is 0.0167. By what percent is total solar irradiance greater at perihelion than aphelion?",
    "choices": [
      {
        "label": "A",
        "text": "0.028%"
      },
      {
        "label": "B",
        "text": "0.056%"
      },
      {
        "label": "C",
        "text": "1.7%"
      },
      {
        "label": "D",
        "text": "3.4%"
      },
      {
        "label": "E",
        "text": "6.9%"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Irradiance varies as 1/r². Comparing r = a(1−e) and a(1+e) gives about 6.9% greater irradiance at perihelion.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 17,
    "attributionText": "USAAAO 2025 First Round, Question 23. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 24,
    "difficulty": "Intermediate",
    "topic": "Stars & Stellar Evolution",
    "subtopic": "Internal Energy Transport",
    "tags": [
      "low-mass stars",
      "convection",
      "stellar core",
      "stellar envelope"
    ],
    "type": "MCQ",
    "questionText": "A main-sequence star is 500 times less luminous than the Sun. It must have a ______ core and a ______ envelope.",
    "choices": [
      {
        "label": "A",
        "text": "convective, convective"
      },
      {
        "label": "B",
        "text": "convective, radiative"
      },
      {
        "label": "C",
        "text": "radiative, convective"
      },
      {
        "label": "D",
        "text": "radiative, radiative"
      },
      {
        "label": "E",
        "text": "static, static"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A star this faint is a low-mass red dwarf, below the threshold for fully convective structure, so both core and envelope are convective.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 18,
    "attributionText": "USAAAO 2025 First Round, Question 24. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 25,
    "difficulty": "Advanced",
    "topic": "Telescopes, Observing & Instrumentation",
    "subtopic": "Angular Diameter and Stellar Temperature",
    "tags": [
      "parallax",
      "CCD image",
      "angular diameter",
      "Stefan-Boltzmann law"
    ],
    "type": "MCQ",
    "questionText": "Evan uses a telescope with focal length 1000 mm to observe a star with parallax 50 mas. Its CCD image diameter is 0.1 μm and apparent magnitude is 1. Neglect atmospheric seeing. What is the star’s approximate temperature?",
    "choices": [
      {
        "label": "A",
        "text": "3000 K"
      },
      {
        "label": "B",
        "text": "3500 K"
      },
      {
        "label": "C",
        "text": "4000 K"
      },
      {
        "label": "D",
        "text": "4500 K"
      },
      {
        "label": "E",
        "text": "5000 K"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Parallax gives 20 pc. The CCD diameter and focal length give stellar radius; combining radius with observed flux from magnitude gives about 3000 K.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 18,
    "attributionText": "USAAAO 2025 First Round, Question 25. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 26,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Ecliptic Longitude in Inclined Orbits",
    "tags": [
      "ecliptic longitude",
      "inclined orbit",
      "orbital period",
      "spherical trigonometry"
    ],
    "type": "MCQ",
    "questionText": "Two exoplanets have circular orbits around one star, share ascending-node longitude, and start there together. Their inclinations are 30° and 70°, with periods 2 yr and 1 yr. When do they next have equal ecliptic longitude?",
    "choices": [
      {
        "label": "A",
        "text": "42 days"
      },
      {
        "label": "B",
        "text": "44 days"
      },
      {
        "label": "C",
        "text": "46 days"
      },
      {
        "label": "D",
        "text": "48 days"
      },
      {
        "label": "E",
        "text": "50 days"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Using tan λ = cos i tan(ωt) for each inclined circular orbit and setting the longitudes equal gives about 0.137 yr, or 50 days.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 19,
    "attributionText": "USAAAO 2025 First Round, Question 26. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 27,
    "difficulty": "Advanced",
    "topic": "Cosmology & Universe",
    "subtopic": "Matter-Dominated Expansion",
    "tags": [
      "Friedmann equation",
      "matter density",
      "scale factor",
      "cosmic expansion"
    ],
    "type": "MCQ",
    "questionText": "In a matter-dominated universe, the Hubble parameter is proportional to the square root of matter density. How does the size of the universe evolve with time t?",
    "choices": [
      {
        "label": "A",
        "text": "constant"
      },
      {
        "label": "B",
        "text": "√t"
      },
      {
        "label": "C",
        "text": "t^(2/3)"
      },
      {
        "label": "D",
        "text": "t"
      },
      {
        "label": "E",
        "text": "e^t"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Matter density scales as R^−3, so Ṙ/R ∝ R^−3/2. Integrating gives R ∝ t^(2/3).",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 9,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 20,
    "attributionText": "USAAAO 2025 First Round, Question 27. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 28,
    "difficulty": "Beginner",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Calendar Drift and Leap Days",
    "tags": [
      "leap year",
      "summer solstice",
      "tropical year",
      "calendar"
    ],
    "type": "MCQ",
    "questionText": "If leap days are removed so every calendar year has exactly 365 days, and summer solstice is June 21 in year one, what date is summer solstice after 100 years?",
    "choices": [
      {
        "label": "A",
        "text": "May 28"
      },
      {
        "label": "B",
        "text": "June 13"
      },
      {
        "label": "C",
        "text": "June 21"
      },
      {
        "label": "D",
        "text": "June 29"
      },
      {
        "label": "E",
        "text": "July 15"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Without leap days, the solstice shifts later by roughly 24 days over 100 years, giving July 15.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 9,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 21,
    "attributionText": "USAAAO 2025 First Round, Question 28. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 29,
    "difficulty": "Intermediate",
    "topic": "Exoplanets & Stellar Systems",
    "subtopic": "Transit Depth from Magnitude",
    "tags": [
      "transit depth",
      "Pogson relation",
      "exoplanet radius",
      "photometry"
    ],
    "type": "MCQ",
    "questionText": "A planet transit increases a system’s observed magnitude by 0.005. Assuming an edge-on central transit, what is planet radius Rp in terms of stellar radius R?",
    "choices": [
      {
        "label": "A",
        "text": "0.056R"
      },
      {
        "label": "B",
        "text": "0.067R"
      },
      {
        "label": "C",
        "text": "0.089R"
      },
      {
        "label": "D",
        "text": "0.12R"
      },
      {
        "label": "E",
        "text": "0.15R"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Using the magnitude-flux relation with blocked area πRp² gives Rp/R = √(1 − 10^(−0.005/2.5)) ≈ 0.067.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 9,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 21,
    "attributionText": "USAAAO 2025 First Round, Question 29. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2025,
    "examName": "First Round",
    "questionNumber": 30,
    "difficulty": "Beginner",
    "topic": "Telescopes, Observing & Instrumentation",
    "subtopic": "Focal Ratio",
    "tags": [
      "focal ratio",
      "focal length",
      "aperture",
      "telescope"
    ],
    "type": "MCQ",
    "questionText": "What is the focal ratio of a telescope with 1.2 m focal length and 12 cm aperture?",
    "choices": [
      {
        "label": "A",
        "text": "f/1000"
      },
      {
        "label": "B",
        "text": "f/100"
      },
      {
        "label": "C",
        "text": "f/10"
      },
      {
        "label": "D",
        "text": "f/1"
      },
      {
        "label": "E",
        "text": "f/0.1"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Focal ratio equals focal length divided by aperture: 120 cm / 12 cm = f/10.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2025/02/exam_2025.pdf",
    "pageNumber": 9,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2025/09/usaaao_first_exam_sol_2025-1.pdf",
    "answerKeyPageNumber": 22,
    "attributionText": "USAAAO 2025 First Round, Question 30. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 1,
    "difficulty": "Intermediate",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Uniform Circular Motion",
    "tags": [
      "velocity vector",
      "acceleration",
      "circular motion",
      "dot product"
    ],
    "type": "MCQ",
    "questionText": "A planet has velocity v(t) = v0(cos(ωt) i-hat + sin(ωt) j-hat) in a circular orbit. With a(t) = dv/dt, which statement is correct?",
    "choices": [
      {
        "label": "A",
        "text": "a is always parallel to v"
      },
      {
        "label": "B",
        "text": "a has magnitude v0ω and is perpendicular to v"
      },
      {
        "label": "C",
        "text": "a is zero because |v| is constant"
      },
      {
        "label": "D",
        "text": "v · a = v0²ω"
      },
      {
        "label": "E",
        "text": "a is parallel to n-hat"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Differentiation gives a(t) = v0ω(−sin(ωt)i-hat + cos(ωt)j-hat), whose magnitude is v0ω and whose dot product with v is zero.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 1,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 1,
    "attributionText": "USAAAO 2026 First Round, Question 1. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 2,
    "difficulty": "Intermediate",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Roche Limit and Orbital Stability",
    "tags": [
      "Roche limit",
      "eccentricity",
      "Kepler’s third law",
      "Lagrange points"
    ],
    "type": "MCQ",
    "questionText": "A planet of mass m orbits a star of mass M in an elliptical orbit with semimajor axis a and eccentricity e, with M much larger than m. Which statement is true?",
    "choices": [
      {
        "label": "A",
        "text": "Orbital speed is maximized at aphelion due to conservation of energy"
      },
      {
        "label": "B",
        "text": "The planet moves in a perfect circle regardless of eccentricity"
      },
      {
        "label": "C",
        "text": "Orbital period depends on eccentricity through Kepler’s Third Law"
      },
      {
        "label": "D",
        "text": "The Roche limit increases if planet density decreases"
      },
      {
        "label": "E",
        "text": "All five Lagrange points are stable equilibria"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The Roche limit scales as (ρstar/ρplanet)^(1/3), so it increases as planet density decreases. The other options are false.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 1,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "USAAAO 2026 First Round, Question 2. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 3,
    "difficulty": "Intermediate",
    "topic": "Galaxies & Extragalactic Astronomy",
    "subtopic": "Flat Rotation Curves",
    "tags": [
      "dark matter",
      "rotation curve",
      "enclosed mass",
      "galaxy dynamics"
    ],
    "type": "MCQ",
    "questionText": "A spiral galaxy has nearly constant orbital speed v0 beyond radius r0. Which conclusion is most accurate?",
    "choices": [
      {
        "label": "A",
        "text": "Mass density must decrease faster than 1/r²"
      },
      {
        "label": "B",
        "text": "Total enclosed mass becomes constant beyond r0"
      },
      {
        "label": "C",
        "text": "Luminosity profile directly traces mass distribution"
      },
      {
        "label": "D",
        "text": "Enclosed mass within r grows approximately linearly with r"
      },
      {
        "label": "E",
        "text": "The galaxy cannot contain a central supermassive black hole"
      }
    ],
    "correctAnswer": "D",
    "explanation": "From v² = GM(r)/r, constant v implies M(r) ∝ r, the classic flat-rotation-curve evidence for a dark matter halo.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 1,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 3,
    "attributionText": "USAAAO 2026 First Round, Question 3. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 4,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Latitude from the Night Sky",
    "tags": [
      "constellations",
      "Southern Cross",
      "latitude",
      "night-sky map"
    ],
    "type": "MCQ",
    "questionText": "An official sky map shows a remote-island night sky. What is the best estimate of your latitude? [Map required; see official exam PDF page 2.]",
    "choices": [
      {
        "label": "A",
        "text": "40° N"
      },
      {
        "label": "B",
        "text": "20° N"
      },
      {
        "label": "C",
        "text": "0°"
      },
      {
        "label": "D",
        "text": "20° S"
      },
      {
        "label": "E",
        "text": "40° S"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Polaris is absent and Orion is in the northern half, placing the observer south of the equator. The Southern Cross points to a south celestial pole near the horizon, indicating about 20° S.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 2,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 5,
    "attributionText": "USAAAO 2026 First Round, Question 4. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official sky map omitted; consult cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 5,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Moon Phase and Season",
    "tags": [
      "Moon phase",
      "ecliptic",
      "Leo",
      "season"
    ],
    "type": "MCQ",
    "questionText": "Using the same official night-sky map, what is the best estimate of the month of the year? [Map required; see official exam PDF page 2.]",
    "choices": [
      {
        "label": "A",
        "text": "January"
      },
      {
        "label": "B",
        "text": "April"
      },
      {
        "label": "C",
        "text": "July"
      },
      {
        "label": "D",
        "text": "September"
      },
      {
        "label": "E",
        "text": "November"
      }
    ],
    "correctAnswer": "E",
    "explanation": "The waning crescent lies in Leo. Its illumination direction places the Sun about 60° east along the ecliptic, corresponding to November.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 2,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 5,
    "attributionText": "USAAAO 2026 First Round, Question 5. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official sky map omitted; consult cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 6,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Moon Phase and Time of Day",
    "tags": [
      "waning crescent",
      "moonrise",
      "pre-dawn sky",
      "local solar time"
    ],
    "type": "MCQ",
    "questionText": "Using the same official night-sky map, what is the best estimate of time relative to local solar noon? [Map required; see official exam PDF page 2.]",
    "choices": [
      {
        "label": "A",
        "text": "8:00 PM"
      },
      {
        "label": "B",
        "text": "10:00 PM"
      },
      {
        "label": "C",
        "text": "12:00 AM"
      },
      {
        "label": "D",
        "text": "2:00 AM"
      },
      {
        "label": "E",
        "text": "4:00 AM"
      }
    ],
    "correctAnswer": "E",
    "explanation": "A waning crescent in the eastern sky indicates early morning before sunrise; 4:00 AM is the best listed estimate.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 5,
    "attributionText": "USAAAO 2026 First Round, Question 6. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official sky map omitted; consult cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 7,
    "difficulty": "Advanced",
    "topic": "Cosmology & Universe",
    "subtopic": "Hawking Radiation Scaling",
    "tags": [
      "black holes",
      "Hawking radiation",
      "blackbody radiation",
      "Schwarzschild radius"
    ],
    "type": "MCQ",
    "questionText": "Assume a black hole radiates as a blackbody whose peak wavelength is proportional to Schwarzschild radius. How does radiated power P scale with mass M?",
    "choices": [
      {
        "label": "A",
        "text": "P ∝ M^−5"
      },
      {
        "label": "B",
        "text": "P ∝ M^−4"
      },
      {
        "label": "C",
        "text": "P ∝ M^−3"
      },
      {
        "label": "D",
        "text": "P ∝ M^−2"
      },
      {
        "label": "E",
        "text": "P ∝ M^−1"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Wien’s law gives T ∝ R_s^−1 ∝ M^−1, while emitting area scales as R_s² ∝ M². Stefan-Boltzmann power therefore scales as M²M^−4 = M^−2.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 6,
    "attributionText": "USAAAO 2026 First Round, Question 7. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 8,
    "difficulty": "Advanced",
    "topic": "Cosmology & Universe",
    "subtopic": "Black Hole Evaporation Curve",
    "tags": [
      "black holes",
      "mass loss",
      "Hawking radiation",
      "concavity"
    ],
    "type": "MCQ",
    "questionText": "Interpret Hawking-radiation power from the previous question as loss of a black hole’s mass-energy E = Mc². Which best describes the black hole mass versus time graph?",
    "choices": [
      {
        "label": "A",
        "text": "Increasing and concave up"
      },
      {
        "label": "B",
        "text": "Constant"
      },
      {
        "label": "C",
        "text": "Decreasing and concave down"
      },
      {
        "label": "D",
        "text": "Linearly decreasing"
      },
      {
        "label": "E",
        "text": "Decreasing and concave up"
      }
    ],
    "correctAnswer": "C",
    "explanation": "With P ∝ M^−2, dM/dt ∝ −M^−2. As mass drops, mass loss accelerates, so the curve decreases and is concave down.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 6,
    "attributionText": "USAAAO 2026 First Round, Question 8. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 9,
    "difficulty": "Beginner",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Kepler’s Third Law",
    "tags": [
      "Pallas",
      "semimajor axis",
      "orbital period",
      "Kepler’s law"
    ],
    "type": "MCQ",
    "questionText": "Pallas has semimajor axis 2.77 AU. What is its orbital period around the Sun in years?",
    "choices": [
      {
        "label": "A",
        "text": "(2.77)^(1/2)"
      },
      {
        "label": "B",
        "text": "(2.77)^(3/2)"
      },
      {
        "label": "C",
        "text": "(2.77)^(5/2)"
      },
      {
        "label": "D",
        "text": "(2.77)^(2/3)"
      },
      {
        "label": "E",
        "text": "(2.77)^(2/5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In solar units, P² = a³, so P = a^(3/2).",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 7,
    "attributionText": "USAAAO 2026 First Round, Question 9. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 10,
    "difficulty": "Intermediate",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Geostationary Orbit",
    "tags": [
      "geostationary orbit",
      "Earth",
      "orbital period",
      "Kepler’s law"
    ],
    "type": "MCQ",
    "questionText": "A 300 kg satellite stays above a fixed point on Earth’s equator. Earth mass is 5.97 × 10^24 kg, Earth radius 6.37 × 10^6 m, and satellite period 86164 s. How far above Earth’s surface is it?",
    "choices": [
      {
        "label": "A",
        "text": "3.58 × 10^6 m"
      },
      {
        "label": "B",
        "text": "1.56 m"
      },
      {
        "label": "C",
        "text": "4.22 × 10^7 m"
      },
      {
        "label": "D",
        "text": "3.58 × 10^7 m"
      },
      {
        "label": "E",
        "text": "None of the above"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kepler’s circular-orbit relation gives orbital radius about 4.216 × 10^7 m. Subtracting Earth’s radius gives altitude about 3.58 × 10^7 m.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 7,
    "attributionText": "USAAAO 2026 First Round, Question 10. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 11,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Star Identification from Sky Map",
    "tags": [
      "constellations",
      "bright stars",
      "sky map",
      "stellar magnitudes"
    ],
    "type": "MCQ",
    "questionText": "Four bright stars with magnitude below 3.0 were erased from the official sky map. Which set was erased? [Map required; see official exam PDF page 4.]",
    "choices": [
      {
        "label": "A",
        "text": "α And, α CrB, β Her, and α PsA"
      },
      {
        "label": "B",
        "text": "α And, α Aql, β Cet, and α Lyr"
      },
      {
        "label": "C",
        "text": "α Aql, α CrB, β Her, and α Peg"
      },
      {
        "label": "D",
        "text": "β Cet, β Her, α Peg, and α Oph"
      },
      {
        "label": "E",
        "text": "α Aqr, α CrB, α Cyg, and α Her"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The official solution identifies α And, α CrB, β Her, and α PsA as the erased stars.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 8,
    "attributionText": "USAAAO 2026 First Round, Question 11. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official sky map omitted; consult cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 12,
    "difficulty": "Intermediate",
    "topic": "Exoplanets & Stellar Systems",
    "subtopic": "Transit Light Curves",
    "tags": [
      "Jupiter transit",
      "light curve",
      "transit duration",
      "photometry"
    ],
    "type": "MCQ",
    "questionText": "An extraterrestrial observes a central transit of Jupiter across the Sun. Which official light curve could match the transit? The axes show hours from mid-transit and apparent bolometric magnitude. [All choices are visual plots; see official exam PDF pages 5–6.]",
    "choices": [
      {
        "label": "A",
        "text": "Light curve A (official PDF)"
      },
      {
        "label": "B",
        "text": "Light curve B (official PDF)"
      },
      {
        "label": "C",
        "text": "Light curve C (official PDF)"
      },
      {
        "label": "D",
        "text": "Light curve D (official PDF)"
      },
      {
        "label": "E",
        "text": "Light curve E (official PDF)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The correct curve must show magnitude change about 0.0115, total duration about 33 h, and ingress/egress about 3 h. The official solution identifies curve A.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 9,
    "attributionText": "USAAAO 2026 First Round, Question 12. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official light-curve choices omitted; consult cited exam pages.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 13,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Equatorial to Ecliptic Coordinates",
    "tags": [
      "Algol",
      "ecliptic latitude",
      "right ascension",
      "declination"
    ],
    "type": "MCQ",
    "questionText": "What is the smallest angular separation between Algol (β Per) and the Sun during the year? Algol has declination +40°57′ and right ascension 3h08m.",
    "choices": [
      {
        "label": "A",
        "text": "11°49′"
      },
      {
        "label": "B",
        "text": "15°45′"
      },
      {
        "label": "C",
        "text": "22°26′"
      },
      {
        "label": "D",
        "text": "26°56′"
      },
      {
        "label": "E",
        "text": "29°03′"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The minimum separation is Algol’s ecliptic latitude. Converting its equatorial coordinates gives about 22°26′.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 7,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 13,
    "attributionText": "USAAAO 2026 First Round, Question 13. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 14,
    "difficulty": "Advanced",
    "topic": "Light, Radiation & Spectroscopy",
    "subtopic": "Optical Depth and Thermal Emission",
    "tags": [
      "optically thin",
      "optically thick",
      "blackbody radiation",
      "Stefan-Boltzmann law"
    ],
    "type": "MCQ",
    "questionText": "A hot gas cloud of radius R and fixed total particle number expands to radius 2R, keeping particle temperature and emissivity per particle constant. How does total observed power change for optically thin and optically thick cases, respectively?",
    "choices": [
      {
        "label": "A",
        "text": "Remains approximately constant; remains approximately constant"
      },
      {
        "label": "B",
        "text": "Remains approximately constant; increases significantly"
      },
      {
        "label": "C",
        "text": "Increases significantly; decreases significantly"
      },
      {
        "label": "D",
        "text": "Increases significantly; remains approximately constant"
      },
      {
        "label": "E",
        "text": "Increases significantly; increases significantly"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Optically thin emission sums over the same particles and stays approximately constant. Optically thick emission behaves like a blackbody surface, so power scales as area and rises by a factor of four.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 7,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 14,
    "attributionText": "USAAAO 2026 First Round, Question 14. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 15,
    "difficulty": "Advanced",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Tidal Lunar Recession",
    "tags": [
      "Moon",
      "tidal recession",
      "orbital period",
      "Kepler’s law"
    ],
    "type": "MCQ",
    "questionText": "The Moon’s semimajor axis increases by 38 mm per year. Approximately how much does its sidereal orbital period increase each year?",
    "choices": [
      {
        "label": "A",
        "text": "230 μs"
      },
      {
        "label": "B",
        "text": "350 μs"
      },
      {
        "label": "C",
        "text": "380 μs"
      },
      {
        "label": "D",
        "text": "690 μs"
      },
      {
        "label": "E",
        "text": "230 ms"
      }
    ],
    "correctAnswer": "B",
    "explanation": "From T ∝ a^(3/2), δT/T ≈ (3/2)δa/a. With the Moon’s orbit, this gives about 350 μs per year.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 7,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 15,
    "attributionText": "USAAAO 2026 First Round, Question 15. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 16,
    "difficulty": "Advanced",
    "topic": "Solar System & Planetary Science",
    "subtopic": "Synodic Lunar Month",
    "tags": [
      "Kepler-22b",
      "exomoon",
      "synodic period",
      "Kepler’s law"
    ],
    "type": "MCQ",
    "questionText": "Kepler-22b has mass 4.84 × 10^25 kg and orbital period 290 days. Its Earth-like moon has semimajor axis 7.70 × 10^8 m in a prograde orbit near the ecliptic. What is the synodic lunar-month length for an observer on Kepler-22b?",
    "choices": [
      {
        "label": "A",
        "text": "25.0 days"
      },
      {
        "label": "B",
        "text": "27.3 days"
      },
      {
        "label": "C",
        "text": "29.5 days"
      },
      {
        "label": "D",
        "text": "30.2 days"
      },
      {
        "label": "E",
        "text": "33.6 days"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kepler’s law gives moon sidereal period 27.341 days. The synodic period (1/27.341 − 1/290)^−1 is about 30.2 days.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 7,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 16,
    "attributionText": "USAAAO 2026 First Round, Question 16. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 17,
    "difficulty": "Advanced",
    "topic": "Gravitation, Orbits & Dynamics",
    "subtopic": "Virial Theorem in Star Clusters",
    "tags": [
      "virial theorem",
      "star clusters",
      "dynamical friction",
      "kinetic energy"
    ],
    "type": "MCQ",
    "questionText": "A fast black hole passes through a star cluster and transfers momentum and energy to nearby stars. Long afterward, the energy is distributed through the cluster. Which statements are likely true? I: Average stellar blackbody peak wavelength decreases. II: Stars are on average farther apart. III: Stars have lower relative velocities.",
    "choices": [
      {
        "label": "A",
        "text": "I only"
      },
      {
        "label": "B",
        "text": "II only"
      },
      {
        "label": "C",
        "text": "III only"
      },
      {
        "label": "D",
        "text": "II and III"
      },
      {
        "label": "E",
        "text": "I and II"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The virial theorem means added bulk energy raises average potential energy, expanding the cluster, while the redistributed system has lower average relative kinetic energy. Stellar internal temperatures and spectra are essentially unchanged.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 16,
    "attributionText": "USAAAO 2026 First Round, Question 17. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 18,
    "difficulty": "Beginner",
    "topic": "Cosmology & Universe",
    "subtopic": "CMB Temperature and Redshift",
    "tags": [
      "CMB",
      "redshift",
      "temperature scaling",
      "MoM-z14"
    ],
    "type": "MCQ",
    "questionText": "MoM-z14 has redshift z = 14.44. If the CMB temperature today is 2.725 K, what was the CMB temperature at MoM-z14?",
    "choices": [
      {
        "label": "A",
        "text": "0.1887 K"
      },
      {
        "label": "B",
        "text": "39.35 K"
      },
      {
        "label": "C",
        "text": "42.07 K"
      },
      {
        "label": "D",
        "text": "568.2 K"
      },
      {
        "label": "E",
        "text": "3208 K"
      }
    ],
    "correctAnswer": "C",
    "explanation": "CMB temperature scales as 1+z, so 2.725 × 15.44 = 42.07 K.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 17,
    "attributionText": "USAAAO 2026 First Round, Question 18. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 19,
    "difficulty": "Advanced",
    "topic": "Stars & Stellar Evolution",
    "subtopic": "Stellar Density Profiles",
    "tags": [
      "stellar density",
      "mass integral",
      "spherical symmetry",
      "calculus"
    ],
    "type": "MCQ",
    "questionText": "A spherical star has density ρ(r) = (1 − r³/R³)ρc for 0 ≤ r ≤ R. Find ρc in terms of total mass M and radius R.",
    "choices": [
      {
        "label": "A",
        "text": "3M/(πR³)"
      },
      {
        "label": "B",
        "text": "15M/(8πR³)"
      },
      {
        "label": "C",
        "text": "3M/(2πR³)"
      },
      {
        "label": "D",
        "text": "21M/(16πR³)"
      },
      {
        "label": "E",
        "text": "6M/(5πR³)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Integrating M = 4π∫₀ᴿρ(r)r²dr gives M = (2π/3)ρcR³, hence ρc = 3M/(2πR³).",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 18,
    "attributionText": "USAAAO 2026 First Round, Question 19. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 20,
    "difficulty": "Beginner",
    "topic": "Stars & Stellar Evolution",
    "subtopic": "Stellar Lifetimes",
    "tags": [
      "early universe",
      "main sequence",
      "low-mass stars",
      "stellar evolution"
    ],
    "type": "MCQ",
    "questionText": "Some stars formed in the early universe are still observable today. If one is still on the main sequence, what mass is most likely?",
    "choices": [
      {
        "label": "A",
        "text": "< 2 M☉"
      },
      {
        "label": "B",
        "text": "2–8 M☉"
      },
      {
        "label": "C",
        "text": "8–12 M☉"
      },
      {
        "label": "D",
        "text": "12–20 M☉"
      },
      {
        "label": "E",
        "text": "> 20 M☉"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Main-sequence lifetime falls sharply with mass. A star surviving from the early universe must be low mass, below roughly two solar masses.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 8,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 18,
    "attributionText": "USAAAO 2026 First Round, Question 20. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 21,
    "difficulty": "Advanced",
    "topic": "Galaxies & Extragalactic Astronomy",
    "subtopic": "Inner Rotation-Curve Mass Profile",
    "tags": [
      "rotation curve",
      "enclosed mass",
      "galaxy disk",
      "density distribution"
    ],
    "type": "MCQ",
    "questionText": "For a galaxy rotation curve, the low-radius best-fit curve at r ≤ 5000 ly has v(r) ∝ r. Thus M(r) ∝ r^n. Which hypothesis is most consistent? [Official rotation-curve graph on PDF page 9.]",
    "choices": [
      {
        "label": "A",
        "text": "Mass is concentrated in and nearly uniform over a 2D galactic plane"
      },
      {
        "label": "B",
        "text": "Most M(r) comes from a central supermassive black hole"
      },
      {
        "label": "C",
        "text": "Dark-energy repulsion induces ρ(r) ∝ r²"
      },
      {
        "label": "D",
        "text": "No power law can match the best-fit curve"
      },
      {
        "label": "E",
        "text": "Gas, dust, and stars are approximately uniformly distributed in 3D space with no significant radial density dependence"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Since M(r) ∝ v²r and v ∝ r, M(r) ∝ r³. This corresponds to roughly uniform three-dimensional density.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 9,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 19,
    "attributionText": "USAAAO 2026 First Round, Question 21. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official rotation curve omitted; consult cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 22,
    "difficulty": "Advanced",
    "topic": "Galaxies & Extragalactic Astronomy",
    "subtopic": "Dark Matter Mass Fraction",
    "tags": [
      "dark matter",
      "rotation curve",
      "baryonic matter",
      "galaxy mass"
    ],
    "type": "MCQ",
    "questionText": "Within 40,000 ly of a galactic center, an observed rotation curve is roughly 3.5 times the baryonic-matter expectation. What is the closest ratio of enclosed dark-matter mass to baryonic mass? [Official rotation curve on PDF page 9.]",
    "choices": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "5"
      },
      {
        "label": "C",
        "text": "10"
      },
      {
        "label": "D",
        "text": "25"
      },
      {
        "label": "E",
        "text": "50"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Enclosed mass scales as v². A velocity ratio near 3.5 implies total-to-baryonic mass near 12, so dark-to-baryonic mass near 11, closest to 10.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 10,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 20,
    "attributionText": "USAAAO 2026 First Round, Question 22. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official rotation curve omitted; consult cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 23,
    "difficulty": "Intermediate",
    "topic": "Galaxies & Extragalactic Astronomy",
    "subtopic": "21-cm Hydrogen Observations",
    "tags": [
      "H I line",
      "O/B stars",
      "UV ionization",
      "rotation curves"
    ],
    "type": "MCQ",
    "questionText": "Which assertions about measuring a galaxy rotation curve are true? I: Interstellar dust is colder at lower r and obscures less starlight. II: O/B stars in spiral arms emit UV that ionizes nearby H-I clouds and inhibits 21-cm emission nearby. III: Lower stellar density at high r means existing stars typically move relativistically, complicating Doppler measurements.",
    "choices": [
      {
        "label": "A",
        "text": "I only"
      },
      {
        "label": "B",
        "text": "II only"
      },
      {
        "label": "C",
        "text": "III only"
      },
      {
        "label": "D",
        "text": "I and II only"
      },
      {
        "label": "E",
        "text": "None of the above"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Dust is generally hotter at lower radii, not colder, and galaxy orbital speeds are far below relativistic. O/B-star UV ionization of nearby H-I clouds is the true assertion.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 10,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 20,
    "attributionText": "USAAAO 2026 First Round, Question 23. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 24,
    "difficulty": "Advanced",
    "topic": "Cosmology & Universe",
    "subtopic": "Cosmological Redshift Composition",
    "tags": [
      "redshift",
      "scale factor",
      "supernovae",
      "homogeneous universe"
    ],
    "type": "MCQ",
    "questionText": "Honeyhive and Gold Leaf galaxies are diametrically opposite from Earth. Earth measures Honeyhive’s supernova at z = 0.5, while Gold Leaf measures a simultaneous Milky Way supernova at z = 0.8. What redshift does Gold Leaf measure for Honeyhive’s supernova?",
    "choices": [
      {
        "label": "A",
        "text": "0.2"
      },
      {
        "label": "B",
        "text": "0.4"
      },
      {
        "label": "C",
        "text": "1.3"
      },
      {
        "label": "D",
        "text": "1.7"
      },
      {
        "label": "E",
        "text": "2.7"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Redshift factors multiply: Honeyhive-to-Earth gives 1.5 and Earth-to-Gold Leaf gives 1.8. Their product is 2.7, so the measured redshift is 2.7 − 1 = 1.7.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 10,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 21,
    "attributionText": "USAAAO 2026 First Round, Question 24. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 25,
    "difficulty": "Intermediate",
    "topic": "Light, Radiation & Spectroscopy",
    "subtopic": "Hydrogen Spectral Lines",
    "tags": [
      "Lyman-alpha",
      "Balmer-alpha",
      "H I line",
      "wavelength"
    ],
    "type": "MCQ",
    "questionText": "Order the hydrogen Balmer-α (n = 3 to 2), H-I 21-cm hyperfine, and Lyman-α (n = 2 to 1) lines from shortest to longest wavelength.",
    "choices": [
      {
        "label": "A",
        "text": "Balmer-α, H-I, Lyman-α"
      },
      {
        "label": "B",
        "text": "H-I, Balmer-α, Lyman-α"
      },
      {
        "label": "C",
        "text": "Lyman-α, H-I, Balmer-α"
      },
      {
        "label": "D",
        "text": "Lyman-α, Balmer-α, H-I"
      },
      {
        "label": "E",
        "text": "Balmer-α, Lyman-α, H-I"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Lyman-α has the greatest energy drop and shortest wavelength; Balmer-α is optical; the H-I hyperfine line is microwave and longest.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 11,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 22,
    "attributionText": "USAAAO 2026 First Round, Question 25. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 26,
    "difficulty": "Advanced",
    "topic": "Exoplanets & Stellar Systems",
    "subtopic": "Eclipsing-Binary Photometry",
    "tags": [
      "eclipsing binary",
      "magnitude drop",
      "surface brightness",
      "Stefan-Boltzmann law"
    ],
    "type": "MCQ",
    "questionText": "Stars X and Y form an eclipsing binary. X is larger and fully blocks Y during one eclipse. The primary eclipse increases apparent magnitude by 0.200 and the secondary by 0.100. Which is a possible TX/TY? Ignore limb darkening.",
    "choices": [
      {
        "label": "A",
        "text": "0.679"
      },
      {
        "label": "B",
        "text": "1.000"
      },
      {
        "label": "C",
        "text": "1.176"
      },
      {
        "label": "D",
        "text": "1.414"
      },
      {
        "label": "E",
        "text": "2.000"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The blocked fractions are 0.168 and 0.0880. Equal occulted areas mean surface-brightness ratio 0.168/0.0880, whose fourth root is 1.176; this is a possible TX/TY.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 11,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 22,
    "attributionText": "USAAAO 2026 First Round, Question 26. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 27,
    "difficulty": "Intermediate",
    "topic": "Solar System & Planetary Science",
    "subtopic": "Kirkwood Gaps and Resonances",
    "tags": [
      "asteroid belt",
      "Jupiter",
      "Kirkwood gap",
      "orbital resonance"
    ],
    "type": "MCQ",
    "questionText": "An official asteroid-belt semimajor-axis plot marks a gap near 2.82 AU. Jupiter has semimajor axis 5.20 AU. Which resonance causes the marked Kirkwood gap? [Graph required; see official exam PDF page 11.]",
    "choices": [
      {
        "label": "A",
        "text": "8:5"
      },
      {
        "label": "B",
        "text": "11:6"
      },
      {
        "label": "C",
        "text": "9:4"
      },
      {
        "label": "D",
        "text": "5:2"
      },
      {
        "label": "E",
        "text": "3:1"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kepler’s law gives period ratio (5.20/2.82)^(3/2) ≈ 2.50, corresponding to a 5:2 resonance.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 11,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 23,
    "attributionText": "USAAAO 2026 First Round, Question 27. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official graph omitted; consult cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 28,
    "difficulty": "Intermediate",
    "topic": "Stars & Stellar Evolution",
    "subtopic": "Hertzsprung-Russell Diagram Evolution",
    "tags": [
      "globular cluster",
      "main sequence",
      "helium flash",
      "red giant branch"
    ],
    "type": "MCQ",
    "questionText": "An official Gaia DR3 globular-cluster HR diagram labels regions A–D. Identify 1) the region of core hydrogen burning and 2) the region where helium flash occurs. [Diagram required; see official exam PDF page 12.]",
    "choices": [
      {
        "label": "A",
        "text": "1. Region A; 2. Region B"
      },
      {
        "label": "B",
        "text": "1. Region A; 2. Region C"
      },
      {
        "label": "C",
        "text": "1. Region B; 2. Region C"
      },
      {
        "label": "D",
        "text": "1. Region B; 2. Region D"
      },
      {
        "label": "E",
        "text": "1. Region C; 2. Region D"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Region A is the main sequence, where core hydrogen fusion occurs. Region C is the red-giant-branch tip, where low-mass stars undergo helium flash.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 12,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 24,
    "attributionText": "USAAAO 2026 First Round, Question 28. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs. Official HR diagram omitted; consult cited exam page.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 29,
    "difficulty": "Advanced",
    "topic": "Cosmology & Universe",
    "subtopic": "Solar and CMB Photon Flux",
    "tags": [
      "CMB",
      "photon flux",
      "blackbody",
      "Solar luminosity"
    ],
    "type": "MCQ",
    "questionText": "What is the closest ratio of the number of solar photons striking Earth each second to the number of CMB photons striking Earth each second? Treat the CMB as an isotropic 2.725 K blackbody and approximate photons at each source’s peak emission energy.",
    "choices": [
      {
        "label": "A",
        "text": "5 × 10^4"
      },
      {
        "label": "B",
        "text": "2 × 10^5"
      },
      {
        "label": "C",
        "text": "3 × 10^7"
      },
      {
        "label": "D",
        "text": "1 × 10^8"
      },
      {
        "label": "E",
        "text": "4 × 10^8"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Comparing incident solar and CMB powers, and dividing each by typical photon energy proportional to temperature, gives about 5.14 × 10^4, closest to 5 × 10^4.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 13,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 25,
    "attributionText": "USAAAO 2026 First Round, Question 29. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "USAAAO",
    "year": 2026,
    "examName": "First Round",
    "questionNumber": 30,
    "difficulty": "Intermediate",
    "topic": "Galaxies & Extragalactic Astronomy",
    "subtopic": "Galaxy Stellar Populations and Supernovae",
    "tags": [
      "spiral galaxies",
      "elliptical galaxies",
      "star formation",
      "supernovae"
    ],
    "type": "MCQ",
    "questionText": "Galaxy S is a spiral with blue spiral arms. Galaxy E is an elliptical with only red stars. Which statements are likely true? I: Planetary nebulae can be found in both. II: S likely has ongoing star formation. III: E likely has ongoing star formation. IV: Type II supernovae are more likely in S. V: Type Ia supernovae are likely only in E.",
    "choices": [
      {
        "label": "A",
        "text": "I, II, III"
      },
      {
        "label": "B",
        "text": "I, II, IV"
      },
      {
        "label": "C",
        "text": "I, III, IV"
      },
      {
        "label": "D",
        "text": "I, IV, V"
      },
      {
        "label": "E",
        "text": "II, IV, V"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Planetary nebulae arise from low/intermediate-mass stars in both populations; blue spiral arms indicate active star formation; core-collapse Type II supernovae favor young populations. Ellipticals generally lack active star formation, and Type Ia supernovae can occur in both.",
    "sourceUrl": "https://usaaao.org/resources/past-exams/",
    "pdfUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_2026.pdf",
    "pageNumber": 13,
    "answerKeyUrl": "https://usaaao.org/wp-content/uploads/2026/02/usaaao_first_exam_solution_2026.pdf",
    "answerKeyPageNumber": 26,
    "attributionText": "USAAAO 2026 First Round, Question 30. Question text, choices, and answer were transcribed from the official USAAAO exam and solutions PDFs.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
] as const;
