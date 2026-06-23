/**
 * Combined BAAO Astronomy & Astrophysics Challenge multiple-choice questions for 2016-2024.
 *
 * Internal database IDs are intentionally omitted; generate them in the database layer.
 * Only Section A multiple-choice questions are included. Section B and Section C free-response
 * problems are intentionally excluded. Source visuals are not embedded; figure-dependent
 * questions point to the exact official PDF page in questionText.
 */
export const baaoMcqs = [{
    competition: "BAAO",
    year: 2016,
    examName: "Astronomy & Astrophysics A2 Challenge",
    questionNumber: 1,
    difficulty: "Beginner",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Coriolis Effect",
    tags: [
      "Coriolis effect",
      "Earth rotation",
      "hurricanes",
      "hemispheres"
    ],
    type: "MCQ",
    questionText: "Why do hurricanes rotate anti-clockwise in the northern hemisphere and clockwise in the southern hemisphere?",
    choices: [
      {
        label: "A",
        text: "Due to the Earth rotating from East to West"
      },
      {
        label: "B",
        text: "Due to the different ratios of land to water area between the two hemispheres"
      },
      {
        label: "C",
        text: "Due to the Moon's orbit being inclined by 5° above the ecliptic giving it more influence on the northern hemisphere"
      },
      {
        label: "D",
        text: "Due to the Coriolis Effect causing paths of particles to curve as they travel over the Earth's surface"
      }
    ],
    correctAnswer: "D",
    explanation: "In Earth's rotating reference frame, the Coriolis effect deflects moving air in opposite directions in the two hemispheres, producing the opposite circulation senses.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2016.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2016.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics A2 Challenge 2016. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2016,
    examName: "Astronomy & Astrophysics A2 Challenge",
    questionNumber: 2,
    difficulty: "Beginner",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Tidal Forces",
    tags: [
      "tides",
      "Moon",
      "barycentre",
      "centrifugal force"
    ],
    type: "MCQ",
    questionText: "Why are there two tides every day?",
    choices: [
      {
        label: "A",
        text: "The Moon causes the one at night and the Sun causes the one during the day"
      },
      {
        label: "B",
        text: "The Earth and Moon orbit a common centre of mass"
      },
      {
        label: "C",
        text: "The Moon is tidally locked to the Earth"
      },
      {
        label: "D",
        text: "Water waves can only travel around the Earth in 12 hours"
      }
    ],
    correctAnswer: "B",
    explanation: "The Earth-Moon system orbits a common centre of mass, producing tidal bulges on the near and far sides of Earth.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2016.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2016.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics A2 Challenge 2016. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2016,
    examName: "Astronomy & Astrophysics A2 Challenge",
    questionNumber: 3,
    difficulty: "Beginner",
    topic: "Telescopes, Instruments & Observing",
    subtopic: "Light-Gathering Power",
    tags: [
      "telescope aperture",
      "collecting area",
      "diameter",
      "photon collection"
    ],
    type: "MCQ",
    questionText: "A typical cheap handheld telescope has a diameter of 10 cm, whilst ones for keen amateurs can have diameters of 40 cm. How much greater light gathering power does the larger telescope have?",
    choices: [
      {
        label: "A",
        text: "2"
      },
      {
        label: "B",
        text: "4"
      },
      {
        label: "C",
        text: "8"
      },
      {
        label: "D",
        text: "16"
      }
    ],
    correctAnswer: "D",
    explanation: "Light-gathering area is proportional to aperture diameter squared, so increasing the diameter by 4 increases the area by 4² = 16.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2016.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2016.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics A2 Challenge 2016. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2016,
    examName: "Astronomy & Astrophysics A2 Challenge",
    questionNumber: 4,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Zodiac Constellations",
    tags: [
      "zodiac",
      "constellations",
      "ecliptic",
      "Aquila"
    ],
    type: "MCQ",
    questionText: "Which of the following is not a zodiacal constellation, according to the astronomical definition?",
    choices: [
      {
        label: "A",
        text: "Aquila"
      },
      {
        label: "B",
        text: "Aquarius"
      },
      {
        label: "C",
        text: "Ophiucus"
      },
      {
        label: "D",
        text: "Pisces"
      }
    ],
    correctAnswer: "A",
    explanation: "Aquila is not on the ecliptic; Aquarius, Ophiuchus, and Pisces are zodiacal constellations.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2016.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2016.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics A2 Challenge 2016. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    questionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2016,
    examName: "Astronomy & Astrophysics A2 Challenge",
    questionNumber: 5,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Lunar Declination",
    tags: [
      "Full Moon",
      "seasons",
      "declination",
      "UK sky"
    ],
    type: "MCQ",
    questionText: "When observing from the UK, during which season is the Full Moon visible highest in the sky?",
    choices: [
      {
        label: "A",
        text: "Spring"
      },
      {
        label: "B",
        text: "Summer"
      },
      {
        label: "C",
        text: "Autumn"
      },
      {
        label: "D",
        text: "Winter"
      }
    ],
    correctAnswer: "D",
    explanation: "Near winter the Sun has its most negative declination; a Full Moon lies opposite the Sun, so it reaches its highest declination and greatest altitude.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2016.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2016.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics A2 Challenge 2016. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2016,
    examName: "Astronomy & Astrophysics A2 Challenge",
    questionNumber: 6,
    difficulty: "Intermediate",
    topic: "Solar System & Planetary Science",
    subtopic: "Astronomical Unit & Exponential Growth",
    tags: [
      "astronomical unit",
      "exponential growth",
      "paper folding",
      "powers of two"
    ],
    type: "MCQ",
    questionText: "Given an overwhelmingly large piece of paper, with a thickness of 10 μm, approximately how many times do you need to fold it in half (theoretically!) for the thickness of the final stack to reach from Earth to the Sun (1 AU)?",
    choices: [
      {
        label: "A",
        text: "40"
      },
      {
        label: "B",
        text: "50"
      },
      {
        label: "C",
        text: "60"
      },
      {
        label: "D",
        text: "70"
      }
    ],
    correctAnswer: "B",
    explanation: "After n folds, the thickness is 10 μm × 2ⁿ. Setting this near 1 AU gives n ≈ 54, so 50 is the closest listed choice.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2016.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2016.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics A2 Challenge 2016. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2016,
    examName: "Astronomy & Astrophysics A2 Challenge",
    questionNumber: 7,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Polaris and Latitude",
    tags: [
      "Polaris",
      "latitude",
      "altitude",
      "north celestial pole"
    ],
    type: "MCQ",
    questionText: "At a latitude of 52° N what is the altitude of Polaris above the horizon?",
    choices: [
      {
        label: "A",
        text: "38°"
      },
      {
        label: "B",
        text: "48°"
      },
      {
        label: "C",
        text: "52°"
      },
      {
        label: "D",
        text: "90°"
      }
    ],
    correctAnswer: "C",
    explanation: "The altitude of Polaris is approximately equal to the observer's northern latitude.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2016.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2016.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics A2 Challenge 2016. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2016,
    examName: "Astronomy & Astrophysics A2 Challenge",
    questionNumber: 8,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Solar Alignments",
    tags: [
      "Manhattanhenge",
      "Sunset",
      "solstice",
      "solar declination"
    ],
    type: "MCQ",
    questionText: "\"Manhattanhenge\" is the name given to when, just before sunset or just after sunrise 4 times a year (twice for setting, and twice for rising), the Sun aligns with the east-west streets of the New York grid system. One of the setting dates this year was on 11th July. Which of these is another date you are likely to see the \"Manhattanhenge\" sunset?",
    choices: [
      {
        label: "A",
        text: "30th May"
      },
      {
        label: "B",
        text: "30th June"
      },
      {
        label: "C",
        text: "11th December"
      },
      {
        label: "D",
        text: "11th January"
      }
    ],
    correctAnswer: "A",
    explanation: "The corresponding sunset alignment occurs about the same number of days before the summer solstice as 11 July occurs after it, giving a date near 30 May.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2016.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2016.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics A2 Challenge 2016. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2016,
    examName: "Astronomy & Astrophysics A2 Challenge",
    questionNumber: 9,
    difficulty: "Advanced",
    topic: "Celestial Coordinates & Time",
    subtopic: "Spherical Geometry & Navigation",
    tags: [
      "spherical geometry",
      "South Pole",
      "latitude",
      "circumnavigation"
    ],
    type: "MCQ",
    questionText: "You travel 100 miles South, 100 miles East and 100 miles North and arrive back where you started. Where are you? You are NOT at the North Pole.",
    choices: [
      {
        label: "A",
        text: "South Pole"
      },
      {
        label: "B",
        text: "100 Miles from the North Pole"
      },
      {
        label: "C",
        text: "116 Miles from the South Pole"
      },
      {
        label: "D",
        text: "200 Miles from the South Pole"
      }
    ],
    correctAnswer: "C",
    explanation: "Start 100 miles north of a small circle of latitude whose circumference is 100 miles. After traveling south, an eastward 100-mile walk circles the South Pole once, so the final northward leg returns to the start.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2016.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2016.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics A2 Challenge 2016. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2016,
    examName: "Astronomy & Astrophysics A2 Challenge",
    questionNumber: 10,
    difficulty: "Intermediate",
    topic: "Telescopes, Instruments & Observing",
    subtopic: "Angular Resolution & Pixel Scale",
    tags: [
      "Rosetta",
      "Philae",
      "angular size",
      "pixel scale"
    ],
    type: "MCQ",
    questionText: "On 5th September 2016, the Rosetta mission finally found the Philae lander on Comet 67P/Churyumov-Gerasimenko. Considering that Philae (1 × 1 × 1 m) appeared in an image from the high-resolution camera (with 2048 × 2048 pixels and field of view 2.2° × 2.2°) as 25 × 25 pixels, from what distance did Rosetta manage to image Philae?",
    choices: [
      {
        label: "A",
        text: "1.1 km"
      },
      {
        label: "B",
        text: "2.1 km"
      },
      {
        label: "C",
        text: "12.2 km"
      },
      {
        label: "D",
        text: "26.8 km"
      }
    ],
    correctAnswer: "B",
    explanation: "The image scale is about 2.2°/2048 per pixel. A 25-pixel object therefore subtends about 4.7 × 10⁻⁴ rad, so a 1 m lander is roughly 2.1 km away.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2016.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2016.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics A2 Challenge 2016. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2017,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 1,
    difficulty: "Beginner",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Gravitational-Wave Sources",
    tags: [
      "LIGO",
      "gravitational waves",
      "black holes",
      "binary merger"
    ],
    type: "MCQ",
    questionText: "In 2015, physicists at the Laser Interferometer Gravitational-Wave Observatory (LIGO) announced the first-ever observation of gravitational waves. What triggered the pulse?",
    choices: [
      {
        label: "A",
        text: "Two neutron stars colliding"
      },
      {
        label: "B",
        text: "Two black holes colliding"
      },
      {
        label: "C",
        text: "A star going supernova"
      },
      {
        label: "D",
        text: "A gamma ray burst"
      }
    ],
    correctAnswer: "B",
    explanation: "GW150914 was produced by the merger of two black holes.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2017.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2017.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2017. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2017,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 2,
    difficulty: "Beginner",
    topic: "Galaxies & Extragalactic Astronomy",
    subtopic: "Milky Way Structure",
    tags: [
      "Milky Way",
      "galactic centre",
      "Sagittarius",
      "Sagittarius A*"
    ],
    type: "MCQ",
    questionText: "In which constellation would you find the centre of the Milky Way?",
    choices: [
      {
        label: "A",
        text: "Ophiucus"
      },
      {
        label: "B",
        text: "Coma Berenices"
      },
      {
        label: "C",
        text: "Sagittarius"
      },
      {
        label: "D",
        text: "Scorpius"
      }
    ],
    correctAnswer: "C",
    explanation: "The Galactic Centre is in the direction of Sagittarius, near Sagittarius A*.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2017.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2017.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2017. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2017,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 3,
    difficulty: "Beginner",
    topic: "Solar System & Planetary Science",
    subtopic: "Planetary Rings",
    tags: [
      "Saturn",
      "rings",
      "ring thickness",
      "gas giants"
    ],
    type: "MCQ",
    questionText: "What is the approximate average thickness of Saturn's rings?",
    choices: [
      {
        label: "A",
        text: "10 μm"
      },
      {
        label: "B",
        text: "10 mm"
      },
      {
        label: "C",
        text: "10 m"
      },
      {
        label: "D",
        text: "10 km"
      }
    ],
    correctAnswer: "C",
    explanation: "Saturn's rings are extremely thin compared with their width, with a typical thickness of roughly 10 m.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2017.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2017.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2017. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2017,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 4,
    difficulty: "Beginner",
    topic: "Solar System & Planetary Science",
    subtopic: "Dwarf Planet Properties",
    tags: [
      "Pluto",
      "surface area",
      "dwarf planet",
      "Russia"
    ],
    type: "MCQ",
    questionText: "Pluto has roughly the same surface area as which country?",
    choices: [
      {
        label: "A",
        text: "Australia"
      },
      {
        label: "B",
        text: "China"
      },
      {
        label: "C",
        text: "USA"
      },
      {
        label: "D",
        text: "Russia"
      }
    ],
    correctAnswer: "D",
    explanation: "Pluto's surface area is about 17.6 million km², slightly larger than Russia's roughly 17.0 million km².",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2017.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2017.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2017. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2017,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 5,
    difficulty: "Intermediate",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Artificial Gravity",
    tags: [
      "centripetal acceleration",
      "rotation",
      "artificial gravity",
      "Halo"
    ],
    type: "MCQ",
    questionText: "In the video game Halo, players are able to move around on the inner edge of a ring structure, which has a radius of 5000 km. Roughly how many rotations per (Earth) day would the ring need to achieve in order for the players' characters to experience Earth-like gravity whilst walking around?",
    choices: [
      {
        label: "A",
        text: "15"
      },
      {
        label: "B",
        text: "17"
      },
      {
        label: "C",
        text: "19"
      },
      {
        label: "D",
        text: "21"
      }
    ],
    correctAnswer: "C",
    explanation: "Set centripetal acceleration rω² equal to g. The resulting period is about 4486 s, or about 19.3 rotations per day.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2017.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2017.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2017. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2017,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 6,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Solar Declination",
    tags: [
      "winter solstice",
      "solar declination",
      "axial tilt",
      "seasons"
    ],
    type: "MCQ",
    questionText: "What is the declination of the Sun on the Winter solstice?",
    choices: [
      {
        label: "A",
        text: "+45°"
      },
      {
        label: "B",
        text: "+23.5°"
      },
      {
        label: "C",
        text: "0°"
      },
      {
        label: "D",
        text: "-23.5°"
      }
    ],
    correctAnswer: "D",
    explanation: "At the northern winter solstice, the Sun reaches its most southerly declination, approximately -23.5°.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2017.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2017.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2017. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2017,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 7,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Day Length & Latitude",
    tags: [
      "day length",
      "June",
      "latitude",
      "summer solstice"
    ],
    type: "MCQ",
    questionText: "Which of the following cities will experience the longest day during June?",
    choices: [
      {
        label: "A",
        text: "Edinburgh (longitude = 3.2° W, latitude = 56.0° N)"
      },
      {
        label: "B",
        text: "Rome (longitude = 12.5° E, latitude = 41.9° N)"
      },
      {
        label: "C",
        text: "Nairobi (longitude = 36.8° E, latitude = 1.3° S)"
      },
      {
        label: "D",
        text: "Sydney (longitude = 58.4° W, latitude = 34.6° S)"
      }
    ],
    correctAnswer: "A",
    explanation: "Around the June solstice, longer daylight occurs at higher northern latitudes; Edinburgh is farthest north.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2017.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2017.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2017. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2017,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 8,
    difficulty: "Beginner",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Kepler's Third Law",
    tags: [
      "Kepler's third law",
      "semi-major axis",
      "orbital period",
      "AU"
    ],
    type: "MCQ",
    questionText: "If a planet orbits the Sun with a semi-major axis of 4 AU, what is the period of its orbit?",
    choices: [
      {
        label: "A",
        text: "4 years"
      },
      {
        label: "B",
        text: "8 years"
      },
      {
        label: "C",
        text: "12 years"
      },
      {
        label: "D",
        text: "64 years"
      }
    ],
    correctAnswer: "B",
    explanation: "For orbits around the Sun, T² = a³ when T is in years and a in AU. Thus T = √(4³) = 8 years.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2017.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2017.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2017. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2017,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 9,
    difficulty: "Intermediate",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Inverse-Square Law",
    tags: [
      "apparent brightness",
      "luminosity",
      "inverse-square law",
      "distance"
    ],
    type: "MCQ",
    questionText: "Two light sources, A and B, emitting their light isotropically (i.e. equally in all directions) are placed at distance r and 2r respectively from a detector, which shows they have the same apparent brightness (i.e. bA/bB = 1). If A is moved to 2r and B is moved to 3r, what is the new ratio of apparent brightness b′A/b′B?",
    choices: [
      {
        label: "A",
        text: "2/3"
      },
      {
        label: "B",
        text: "4/9"
      },
      {
        label: "C",
        text: "3/4"
      },
      {
        label: "D",
        text: "9/16"
      }
    ],
    correctAnswer: "D",
    explanation: "Initially B must be four times as luminous as A to compensate for being twice as far away. Applying the inverse-square law at the new distances gives b′A/b′B = 9/16.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2017.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2017.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2017. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2017,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 10,
    difficulty: "Intermediate",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Apparent Magnitude & Distance",
    tags: [
      "magnitude scale",
      "brightness",
      "distance modulus",
      "inverse-square law"
    ],
    type: "MCQ",
    questionText: "Light source A from the previous question is returned to a distance of r from the detector. How far away should it now be moved to appear 5 magnitudes fainter?",
    choices: [
      {
        label: "A",
        text: "5r"
      },
      {
        label: "B",
        text: "10r"
      },
      {
        label: "C",
        text: "50r"
      },
      {
        label: "D",
        text: "100r"
      }
    ],
    correctAnswer: "B",
    explanation: "A change of 5 magnitudes corresponds to a factor of 100 in brightness. Since brightness falls as 1/r², the distance must increase by a factor of 10.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2017.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2017.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2017. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2018,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 1,
    difficulty: "Beginner",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Uniform Circular Motion",
    tags: [
      "circular orbit",
      "velocity vector",
      "centripetal force",
      "satellite"
    ],
    type: "MCQ",
    questionText: "For a satellite in a circular orbit around the Earth, which of the arrows in the figure below describe the direction of the velocity and the resultant force?\n\n[Visual reference required: see page 4 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "Velocity = 1, Resultant force = 1"
      },
      {
        label: "B",
        text: "Velocity = 1, Resultant force = 2"
      },
      {
        label: "C",
        text: "Velocity = 2, Resultant force = 1"
      },
      {
        label: "D",
        text: "Velocity = 3, Resultant force = 4"
      }
    ],
    correctAnswer: "B",
    explanation: "The velocity is tangential to the orbit, while the resultant force is centripetal and points toward Earth. In the supplied diagram, those are arrows 1 and 2.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2018.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2018.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2018. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    questionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2018,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 2,
    difficulty: "Beginner",
    topic: "Solar System & Planetary Science",
    subtopic: "Comet Tails",
    tags: [
      "comet",
      "coma",
      "solar wind",
      "radiation pressure"
    ],
    type: "MCQ",
    questionText: "The tail of a comet",
    choices: [
      {
        label: "A",
        text: "is gas and dust pulled off the comet by the Sun's gravity"
      },
      {
        label: "B",
        text: "always points towards the Sun"
      },
      {
        label: "C",
        text: "is a trail behind the comet, pointing away from the Sun as the comet approaches it, and toward the Sun as the comet moves out of the inner Solar System"
      },
      {
        label: "D",
        text: "is gas and dust expelled from the comet's nucleus and blown outward by radiation pressure and solar wind"
      }
    ],
    correctAnswer: "D",
    explanation: "Heating near the Sun releases gas and dust from the comet; radiation pressure and the solar wind drive the tail outward.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2018.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2018.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2018. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2018,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 3,
    difficulty: "Beginner",
    topic: "Solar System & Planetary Science",
    subtopic: "Meteor Showers",
    tags: [
      "meteor showers",
      "comets",
      "debris streams",
      "Earth orbit"
    ],
    type: "MCQ",
    questionText: "Meteor showers are caused by",
    choices: [
      {
        label: "A",
        text: "the breakup of asteroids that hit our atmosphere at predictable times"
      },
      {
        label: "B",
        text: "the Earth passing through the debris left behind by a comet as it moves through the inner Solar System"
      },
      {
        label: "C",
        text: "passing asteroids triggering auroral displays"
      },
      {
        label: "D",
        text: "nuclear reactions triggered by an abnormally large meteoritic particle entering the upper atmosphere"
      }
    ],
    correctAnswer: "B",
    explanation: "Meteor showers occur when Earth crosses a stream of dust and small debris left along a comet's orbit.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2018.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2018.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2018. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2018,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 4,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Seasonal Sky Visibility",
    tags: [
      "UK sky",
      "right ascension",
      "circumpolar stars",
      "Sirius"
    ],
    type: "MCQ",
    questionText: "Looking up into the UK sky at 10pm in late September, which of the following bright stars is NOT visible?",
    choices: [
      {
        label: "A",
        text: "Deneb (Right ascension = 20h 41m, declination = +45.28°)"
      },
      {
        label: "B",
        text: "Vega (Right ascension = 18h 37m, declination = +38.78°)"
      },
      {
        label: "C",
        text: "Capella (Right ascension = 05h 17m, declination = +46.00°)"
      },
      {
        label: "D",
        text: "Sirius (Right ascension = 06h 45m, declination = -16.72°)"
      }
    ],
    correctAnswer: "D",
    explanation: "Deneb, Vega, and Capella are available in the UK sky then, but Sirius is a winter-evening object and is not visible at 10pm in late September.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2018.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2018.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2018. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2018,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 5,
    difficulty: "Intermediate",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Apparent Magnitude & Brightness",
    tags: [
      "Orion's Belt",
      "apparent magnitude",
      "brightness ratio",
      "stellar photometry"
    ],
    type: "MCQ",
    questionText: "The three stars that make up Orion's belt are Alnitak, Alnilam and Mintaka, with apparent magnitudes, m, of 1.77, 1.69 and 2.23 respectively. What is the ratio of the apparent brightnesses of the two brightest stars?",
    choices: [
      {
        label: "A",
        text: "0.655"
      },
      {
        label: "B",
        text: "1.076"
      },
      {
        label: "C",
        text: "1.528"
      },
      {
        label: "D",
        text: "1.644"
      }
    ],
    correctAnswer: "B",
    explanation: "The two brightest stars are Alnilam and Alnitak. Using the magnitude-brightness relation for their 0.08-magnitude difference gives a ratio of about 1.076.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2018.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2018.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2018. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    questionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2018,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 6,
    difficulty: "Intermediate",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Ellipse Geometry",
    tags: [
      "comet orbit",
      "eccentricity",
      "semi-major axis",
      "semi-minor axis"
    ],
    type: "MCQ",
    questionText: "A comet is orbiting the Sun in an orbit with a semi-major axis of 5.0 au and an eccentricity, e = 0.80. Calculate its semi-minor axis, b.",
    choices: [
      {
        label: "A",
        text: "1.0 au"
      },
      {
        label: "B",
        text: "2.0 au"
      },
      {
        label: "C",
        text: "3.0 au"
      },
      {
        label: "D",
        text: "4.0 au"
      }
    ],
    correctAnswer: "C",
    explanation: "For an ellipse, b = a√(1 - e²). With a = 5.0 au and e = 0.80, b = 5.0 × 0.60 = 3.0 au.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2018.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2018.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2018. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2018,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 7,
    difficulty: "Beginner",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Kepler's Third Law",
    tags: [
      "comet orbit",
      "Kepler's third law",
      "orbital period",
      "semi-major axis"
    ],
    type: "MCQ",
    questionText: "What is the period of the comet from the previous question?",
    choices: [
      {
        label: "A",
        text: "2.1 years"
      },
      {
        label: "B",
        text: "2.9 years"
      },
      {
        label: "C",
        text: "5.2 years"
      },
      {
        label: "D",
        text: "11.2 years"
      }
    ],
    correctAnswer: "D",
    explanation: "For a solar orbit, T² = a³. With a = 5.0 au, T = √125 ≈ 11.2 years.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2018.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2018.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2018. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2018,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 8,
    difficulty: "Intermediate",
    topic: "Telescopes, Instruments & Observing",
    subtopic: "Atmospheric Refraction",
    tags: [
      "selenelion",
      "lunar eclipse",
      "sunset",
      "atmospheric refraction"
    ],
    type: "MCQ",
    questionText: "On the evening of 27th July 2018, there was a total lunar eclipse (where the Moon passes into the Earth's shadow). As viewed from Oxford, totality began whilst the Moon was below the horizon. Interestingly, moonrise was at 8:55pm, yet sunset was only at 9:01pm, so for 6 minutes both the fully eclipsed Moon and setting Sun were visible above the horizon. This very rare event is known as a selenelion. What is the explanation behind this seemingly impossible observation?",
    choices: [
      {
        label: "A",
        text: "The Moon is in an orbit with a non-zero eccentricity"
      },
      {
        label: "B",
        text: "Prominences on the Sun at the time of the eclipse"
      },
      {
        label: "C",
        text: "The non-zero light travel time to cover the large distance between the Moon and the Earth"
      },
      {
        label: "D",
        text: "The effect of atmospheric refraction meaning the Sun and Moon only appear to be above the horizon"
      }
    ],
    correctAnswer: "D",
    explanation: "Atmospheric refraction raises the apparent positions of objects near the horizon, allowing the eclipsed Moon and the setting Sun to be seen at the same time.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2018.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2018.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2018. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2018,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 9,
    difficulty: "Intermediate",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Spectral Line Identification",
    tags: [
      "line spectra",
      "hydrogen",
      "helium",
      "stellar composition"
    ],
    type: "MCQ",
    questionText: "Light from a star is split into a line spectrum of different colours. The line spectrum from the star is shown, along with the line spectra of some individual elements. Identify the elements present in the star.\n\n[Visual reference required: see page 6 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "Helium and hydrogen"
      },
      {
        label: "B",
        text: "Potassium and sodium and hydrogen"
      },
      {
        label: "C",
        text: "Hydrogen and sodium"
      },
      {
        label: "D",
        text: "Sodium and potassium"
      }
    ],
    correctAnswer: "A",
    explanation: "The stellar spectrum's lines are reproduced by combining the shown helium and hydrogen line patterns.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2018.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2018.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2018. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    questionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2018,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 10,
    difficulty: "Intermediate",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Light Curves & Shape",
    tags: [
      "'Oumuamua",
      "light curve",
      "magnitude",
      "ellipsoid"
    ],
    type: "MCQ",
    questionText: "'Oumuamua is an elongated interstellar comet. During an observation with a ground-based telescope whilst close to the Sun, the light curve displayed a sinusoidal variation in magnitude as shown below. If the comet is modelled as an ellipsoid with a shortest visible axis of 30 m, use the light curve to determine the approximate size of the longest visible axis. Assume that the major axis lies in the plane along the line of sight.\n\n[Visual reference required: see page 6 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "~ 60 m"
      },
      {
        label: "B",
        text: "~ 240 m"
      },
      {
        label: "C",
        text: "~ 960 m"
      },
      {
        label: "D",
        text: "~ 3840 m"
      }
    ],
    correctAnswer: "B",
    explanation: "The light curve spans about 2.3 magnitudes, corresponding to an approximate brightness and projected-area ratio of 8. Multiplying the 30 m shortest axis by about 8 gives roughly 240 m.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2018.pdf",
    pageNumber: 6,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2018.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2018. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    questionMedia: {
      status: "required-missing",
      assets: []
    },
    solutionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2019,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 1,
    difficulty: "Beginner",
    topic: "Galaxies & Extragalactic Astronomy",
    subtopic: "Black Hole Imaging",
    tags: [
      "Event Horizon Telescope",
      "M87",
      "black hole",
      "radio interferometry"
    ],
    type: "MCQ",
    questionText: "The image below was released in April 2019 by the Event Horizon Telescope collaboration and is considered to be one of the most significant astronomical images ever made. What is it of?\n\n[Visual reference required: see page 4 of the official exam PDF.]",
    choices: [
      {
        label: "A",
        text: "A supernova"
      },
      {
        label: "B",
        text: "A planetary nebula"
      },
      {
        label: "C",
        text: "A black hole"
      },
      {
        label: "D",
        text: "A quasar"
      }
    ],
    correctAnswer: "C",
    explanation: "The image is the Event Horizon Telescope image of the supermassive black hole in M87.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2019.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2019.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2019. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    questionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2019,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 2,
    difficulty: "Beginner",
    topic: "Solar System & Planetary Science",
    subtopic: "Apollo Moon Landing",
    tags: [
      "Apollo 11",
      "Moon landing",
      "Mare Tranquillitatis",
      "1969"
    ],
    type: "MCQ",
    questionText: "Where on the Moon did astronauts walk in July 1969?",
    choices: [
      {
        label: "A",
        text: "Mare Serenitatis"
      },
      {
        label: "B",
        text: "Mare Tranquillitatis"
      },
      {
        label: "C",
        text: "Mare Imbrium"
      },
      {
        label: "D",
        text: "Mare Nubium"
      }
    ],
    correctAnswer: "B",
    explanation: "Apollo 11 landed in Mare Tranquillitatis, the Sea of Tranquility, in July 1969.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2019.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2019.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2019. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2019,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 3,
    difficulty: "Beginner",
    topic: "Telescopes, Instruments & Observing",
    subtopic: "X-ray Astronomy",
    tags: [
      "X-rays",
      "atmospheric absorption",
      "space telescopes",
      "Chandra"
    ],
    type: "MCQ",
    questionText: "The Chandra X-ray Observatory celebrates 20 years of operation this year, and was 100 times more sensitive than previous X-ray telescopes when it was launched. All X-ray telescopes have either been space-borne or operate in near-space environments. This is because:",
    choices: [
      {
        label: "A",
        text: "X-rays cannot penetrate the Earth’s atmosphere all the way to the ground"
      },
      {
        label: "B",
        text: "on the ground there is too much interference from medical X-rays"
      },
      {
        label: "C",
        text: "it is dangerous to be close to an X-ray telescope so it must be highly remote from human life"
      },
      {
        label: "D",
        text: "the resolution of the telescope would be too poor for astronomical observations from the ground"
      }
    ],
    correctAnswer: "A",
    explanation: "Earth’s atmosphere absorbs incoming X-rays before they reach the ground, so astronomical X-ray observations require space or near-space instruments.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2019.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2019.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2019. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2019,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 4,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Right Ascension and Rising Order",
    tags: [
      "right ascension",
      "UK sky",
      "seasonal observing",
      "Aldebaran"
    ],
    type: "MCQ",
    questionText: "Looking up into the UK night sky in late September, which of the following bright stars rises first?",
    choices: [
      {
        label: "A",
        text: "Aldebaran (Right ascension = 04h 36m, declination = +16.51°)"
      },
      {
        label: "B",
        text: "Rigel (Right ascension = 05h 15m, declination = −8.20°)"
      },
      {
        label: "C",
        text: "Procyon (Right ascension = 07h 39m, declination = +5.23°)"
      },
      {
        label: "D",
        text: "Sirius (Right ascension = 06h 45m, declination = −16.72°)"
      }
    ],
    correctAnswer: "A",
    explanation: "Among the listed stars, Aldebaran has the smallest right ascension, placing it first in the relevant autumn rising sequence.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2019.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2019.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2019. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2019,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 5,
    difficulty: "Intermediate",
    topic: "Galaxies & Extragalactic Astronomy",
    subtopic: "Gravitational Lensing",
    tags: [
      "1919 eclipse",
      "Eddington",
      "general relativity",
      "light deflection"
    ],
    type: "MCQ",
    questionText: "In May 1919 the British astronomers Frank Watson Dyson and Arthur Stanley Eddington organised for two teams to photograph a total solar eclipse, one from the West African island of Principe and the other from the Brazilian town of Sobral. Which aspect of a new scientific theory were their observations seen as decisive evidence for?",
    choices: [
      {
        label: "A",
        text: "The bending of light close to an object as predicted by Einstein’s general relativity"
      },
      {
        label: "B",
        text: "The existence of quantised electron energy levels as predicted by Bohr’s model of the atom"
      },
      {
        label: "C",
        text: "The Sun is undergoing nuclear fusion in its core as predicted by Eddington"
      },
      {
        label: "D",
        text: "The solar corona has a strong magnetic field as predicted by Maxwell’s equations"
      }
    ],
    correctAnswer: "A",
    explanation: "The eclipse measurements were interpreted as confirming general relativity’s prediction that gravity deflects starlight passing near the Sun.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2019.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2019.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2019. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2019,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 6,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Full Moon Seasonal Position",
    tags: [
      "full Moon",
      "Capricorn",
      "ecliptic",
      "seasons"
    ],
    type: "MCQ",
    questionText: "An observer in the UK sees a full moon in the constellation of Capricorn. What time of year is it?",
    choices: [
      {
        label: "A",
        text: "Spring"
      },
      {
        label: "B",
        text: "Summer"
      },
      {
        label: "C",
        text: "Autumn"
      },
      {
        label: "D",
        text: "Winter"
      }
    ],
    correctAnswer: "B",
    explanation: "A full Moon lies opposite the Sun on the ecliptic. A Moon in Capricorn therefore corresponds to the Sun being near Cancer or Leo, which occurs in summer.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2019.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2019.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2019. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2019,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 7,
    difficulty: "Intermediate",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Surface Gravity and Mass",
    tags: [
      "surface gravity",
      "Titan",
      "Moon",
      "mass-radius relation"
    ],
    type: "MCQ",
    questionText: "Earth’s moon has a radius of 1737 km and Titan (one of Saturn’s moons) has a radius of 2576 km. At the surface, their gravitational field strengths, g, are 1.63 N kg⁻¹ and 1.35 N kg⁻¹ respectively. Determine the ratio of masses, M₍Titan₎/M₍Moon₎, given g ∝ M/R².",
    choices: [
      {
        label: "A",
        text: "1.23"
      },
      {
        label: "B",
        text: "1.79"
      },
      {
        label: "C",
        text: "1.82"
      },
      {
        label: "D",
        text: "2.66"
      }
    ],
    correctAnswer: "C",
    explanation: "Since M is proportional to gR², the ratio is (1.35 × 2576²)/(1.63 × 1737²), which is about 1.82.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2019.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2019.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2019. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2019,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 8,
    difficulty: "Intermediate",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Earth Curvature",
    tags: [
      "Earth curvature",
      "sagitta",
      "One-Mile Telescope",
      "geometry"
    ],
    type: "MCQ",
    questionText: "The One-Mile Telescope is a radio telescope just outside Cambridge that has three dishes that can be spread out up to one mile (= 1.6 km) apart. Two of the dishes are fixed, whilst one can move along an 800-m set of former railway tracks. In order for the tracks to be perfectly flat, how much did they need to raise one end to compensate for the curvature of the Earth?",
    choices: [
      {
        label: "A",
        text: "5 cm"
      },
      {
        label: "B",
        text: "10 cm"
      },
      {
        label: "C",
        text: "15 cm"
      },
      {
        label: "D",
        text: "20 cm"
      }
    ],
    correctAnswer: "A",
    explanation: "Using Earth’s radius and the geometry of an 800 m baseline gives a curvature sag of roughly 0.05 m, or 5 cm.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2019.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2019.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2019. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    solutionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2019,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 9,
    difficulty: "Intermediate",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Geostationary Orbit",
    tags: [
      "geostationary satellites",
      "Kepler’s third law",
      "orbital circumference",
      "equatorial orbit"
    ],
    type: "MCQ",
    questionText: "There are approximately 450 geostationary satellites currently in orbit. They have an orbital period of 1 day and orbit in the plane of the equator, so are therefore always directly above the same spot. Assuming circular orbits and an equidistant arrangement, what is the distance between two geostationary satellites?",
    choices: [
      {
        label: "A",
        text: "560 km"
      },
      {
        label: "B",
        text: "570 km"
      },
      {
        label: "C",
        text: "580 km"
      },
      {
        label: "D",
        text: "590 km"
      }
    ],
    correctAnswer: "D",
    explanation: "A one-day Earth orbit has a radius of about 4.22 × 10⁷ m. Dividing its circumference by 450 gives an average separation near 590 km.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2019.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2019.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2019. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2019,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 10,
    difficulty: "Intermediate",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Apparent Magnitude and Inverse-square Law",
    tags: [
      "apparent magnitude",
      "inverse-square law",
      "Sun",
      "Ultima Thule"
    ],
    type: "MCQ",
    questionText: "On the 1st January 2019 the New Horizons probe (having successfully flown by Pluto in 2015) had an encounter with the Kuiper belt object Ultima Thule, making it the most distant object ever visited by a spacecraft. At the time it was 43.4 au from the Sun. Given the apparent magnitude of the Sun from the Earth is −26.74, what is the apparent magnitude of the Sun from Ultima Thule?",
    choices: [
      {
        label: "A",
        text: "−18.25"
      },
      {
        label: "B",
        text: "−18.35"
      },
      {
        label: "C",
        text: "−18.45"
      },
      {
        label: "D",
        text: "−18.55"
      }
    ],
    correctAnswer: "D",
    explanation: "At 43.4 au, the Sun is fainter by a factor of 43.4². Converting this brightness decrease to magnitudes and adding it to −26.74 gives about −18.55.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2019.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2019.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2019. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2020,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 1,
    difficulty: "Beginner",
    topic: "Solar System & Planetary Science",
    subtopic: "Astronomy Mission History",
    tags: [
      "1990",
      "Halley’s Comet",
      "Giotto",
      "space missions"
    ],
    type: "MCQ",
    questionText: "The year 1990 held many exciting events in astronomy. Which of the following did not celebrate its 30th anniversary this year?",
    choices: [
      {
        label: "A",
        text: "The launch of the Hubble Space Telescope, part of NASA’s ‘Great Observatories’ programme"
      },
      {
        label: "B",
        text: "The most distant photo ever taken of the Earth by the probe Voyager 1 from 40.5 au, nicknamed the ‘Pale Blue Dot’ by Carl Sagan"
      },
      {
        label: "C",
        text: "The arrival at Venus of the Magellan probe, where it used radar to create the highest resolution maps we have of the surface of the planet"
      },
      {
        label: "D",
        text: "ESA’s Giotto probe passing within 600 km of the nucleus of Halley’s Comet, taking our best photos of this famous object"
      }
    ],
    correctAnswer: "D",
    explanation: "Giotto’s close encounter with Halley’s Comet occurred in 1986, not 1990, so it did not have a 30th anniversary in 2020.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2020.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2020.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2020. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    questionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2020,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 2,
    difficulty: "Beginner",
    topic: "Stars & Stellar Evolution",
    subtopic: "Variable Stars",
    tags: [
      "Betelgeuse",
      "Great Dimming",
      "supergiant",
      "stellar variability"
    ],
    type: "MCQ",
    questionText: "Which well-known star dropped in brightness by 40% between October 2019 and April 2020, leading to speculation it may be about to go supernova?",
    choices: [
      {
        label: "A",
        text: "Aldebaran"
      },
      {
        label: "B",
        text: "Antares"
      },
      {
        label: "C",
        text: "Arcturus"
      },
      {
        label: "D",
        text: "Betelgeuse"
      }
    ],
    correctAnswer: "D",
    explanation: "Betelgeuse underwent its unusually deep 2019–2020 dimming episode, often called the Great Dimming.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2020.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2020.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2020. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2020,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 3,
    difficulty: "Intermediate",
    topic: "Galaxies & Extragalactic Astronomy",
    subtopic: "Galaxy Rotation Curves and Dark Matter",
    tags: [
      "dark matter",
      "rotation curves",
      "spiral galaxies",
      "galactic dynamics"
    ],
    type: "MCQ",
    questionText: "A very strong argument for the existence of dark matter is:",
    choices: [
      {
        label: "A",
        text: "the existence of a supermassive black hole at the centre of most large galaxies"
      },
      {
        label: "B",
        text: "the shape of the rotation curve of spiral galaxies"
      },
      {
        label: "C",
        text: "the detection of neutrino emission from Type II supernovae"
      },
      {
        label: "D",
        text: "that almost all galactic spectra are redshifted"
      }
    ],
    correctAnswer: "B",
    explanation: "Flat rotation curves show that orbital speeds remain high far from galaxy centers, implying more mass than is accounted for by visible stars and gas.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2020.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2020.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2020. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2020,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 4,
    difficulty: "Intermediate",
    topic: "Telescopes, Instruments & Observing",
    subtopic: "Angular Size and Distance",
    tags: [
      "Ring Nebula",
      "small-angle approximation",
      "angular diameter",
      "parsecs"
    ],
    type: "MCQ",
    questionText: "The Ring Nebula, M57, is surrounded by thin shells of out-flowing material, the outermost (and faintest) of which is measured to have an angular diameter of 230 arcseconds (where 1 arcsecond = 1/3600th of a degree). Given the nebula is 787 pc from Earth, estimate its radius.",
    choices: [
      {
        label: "A",
        text: "0.44 pc"
      },
      {
        label: "B",
        text: "0.88 pc"
      },
      {
        label: "C",
        text: "25 pc"
      },
      {
        label: "D",
        text: "50 pc"
      }
    ],
    correctAnswer: "A",
    explanation: "The angular radius is half of 230 arcseconds. Applying the small-angle relation r ≈ dθ gives a radius of about 0.44 pc.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2020.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2020.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2020. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    solutionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2020,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 5,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Ecliptic Constellations",
    tags: [
      "ecliptic",
      "constellations",
      "Ophiuchus",
      "zodiac"
    ],
    type: "MCQ",
    questionText: "Which of these constellations is entirely south of the ecliptic?",
    choices: [
      {
        label: "A",
        text: "Orion"
      },
      {
        label: "B",
        text: "Andromeda"
      },
      {
        label: "C",
        text: "Aquila"
      },
      {
        label: "D",
        text: "Ophiuchus"
      }
    ],
    correctAnswer: "A",
    explanation: "Orion lies entirely south of the ecliptic, while Ophiuchus crosses it and Aquila and Andromeda lie north of it.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2020.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2020.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2020. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2020,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 6,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Culmination Altitude",
    tags: [
      "declination",
      "latitude",
      "culmination",
      "zenith"
    ],
    type: "MCQ",
    questionText: "For an observer at a latitude of 52°, which of these stars culminates with the highest altitude?",
    choices: [
      {
        label: "A",
        text: "Kochab (declination = 74°)"
      },
      {
        label: "B",
        text: "Capella (declination = 46°)"
      },
      {
        label: "C",
        text: "Vega (declination = 38°)"
      },
      {
        label: "D",
        text: "Pollux (declination = 28°)"
      }
    ],
    correctAnswer: "B",
    explanation: "A star culminates closest to the zenith when its declination is closest to the observer’s latitude. Capella’s declination is nearest 52°.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2020.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2020.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2020. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2020,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 7,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Greatest Elongation of Venus",
    tags: [
      "Venus",
      "greatest elongation",
      "inner planets",
      "Pisces"
    ],
    type: "MCQ",
    questionText: "On 21st March the Sun is in the constellation of Pisces. In which of these constellations would it be possible to find Venus? You are given that Venus has a circular orbit of radius 0.723 au.",
    choices: [
      {
        label: "A",
        text: "Aries"
      },
      {
        label: "B",
        text: "Leo"
      },
      {
        label: "C",
        text: "Libra"
      },
      {
        label: "D",
        text: "Gemini"
      }
    ],
    correctAnswer: "A",
    explanation: "Venus can reach a greatest elongation of only about 46°, or fewer than two zodiac constellations from the Sun. Aries is the viable listed choice near Pisces.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2020.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2020.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2020. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    solutionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2020,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 8,
    difficulty: "Intermediate",
    topic: "Exoplanets & Astrobiology",
    subtopic: "Transit Depth",
    tags: [
      "exoplanet transit",
      "magnitude dip",
      "radius ratio",
      "photometry"
    ],
    type: "MCQ",
    questionText: "When an exoplanet transits a star, the brightness of the star dims by 0.0557 magnitudes. Let Rₚ be the radius of the planet and Rₛ be the radius of the star. What is the ratio Rₚ/Rₛ?",
    choices: [
      {
        label: "A",
        text: "0.00250"
      },
      {
        label: "B",
        text: "0.224"
      },
      {
        label: "C",
        text: "0.776"
      },
      {
        label: "D",
        text: "0.998"
      }
    ],
    correctAnswer: "B",
    explanation: "A 0.0557-magnitude drop corresponds to a remaining brightness of about 0.950. The blocked fraction is 0.050, so Rₚ/Rₛ = √0.050 ≈ 0.224.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2020.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2020.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2020. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2020,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 9,
    difficulty: "Advanced",
    topic: "Galaxies & Extragalactic Astronomy",
    subtopic: "Black Hole Density",
    tags: [
      "Schwarzschild radius",
      "black hole",
      "event horizon",
      "density"
    ],
    type: "MCQ",
    questionText: "The event horizon of a non-spinning, uncharged black hole can be thought of as a sphere with a radius equal to the Schwarzschild radius, rₛ = 2GM/c² where M is the mass of the black hole and c is the speed of light. If the black hole at the centre of the Milky Way has a mass of 4.15 × 10⁶ M☉, what is the approximate average density within the event horizon?",
    choices: [
      {
        label: "A",
        text: "∼ 1 kg m⁻³"
      },
      {
        label: "B",
        text: "∼ 10³ kg m⁻³"
      },
      {
        label: "C",
        text: "∼ 10⁶ kg m⁻³"
      },
      {
        label: "D",
        text: "∼ 10⁹ kg m⁻³"
      }
    ],
    correctAnswer: "C",
    explanation: "Using the Schwarzschild radius to calculate the volume of a sphere and dividing the black hole mass by that volume gives roughly 1.1 × 10⁶ kg m⁻³.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2020.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2020.pdf",
    answerKeyPageNumber: 3,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2020. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2020,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 10,
    difficulty: "Intermediate",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Elliptical Capture Orbit",
    tags: [
      "Mars orbit",
      "Hope probe",
      "semi-major axis",
      "Kepler’s third law"
    ],
    type: "MCQ",
    questionText: "On 19th July 2020 the first Arab interplanetary mission was launched on its way to Mars, consisting of the Hope probe designed by the United Arab Emirates Space Agency. When it reaches Mars in February 2021 it will do a short burn at a distance of 49 400 km away from the surface to slow it down and put it into an elliptical capture orbit which will bring it as close as only 1000 km above the planet. Given the mass of Mars is 6.39 × 10²³ kg and its radius is 3390 km, what will be the period of this orbit?",
    choices: [
      {
        label: "A",
        text: "37.3 hours"
      },
      {
        label: "B",
        text: "40.9 hours"
      },
      {
        label: "C",
        text: "105 hours"
      },
      {
        label: "D",
        text: "116 hours"
      }
    ],
    correctAnswer: "B",
    explanation: "The periapsis and apoapsis distances from Mars’s center give a semi-major axis of 28,590 km. Kepler’s third law then gives a period of about 40.9 hours.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2020.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2020.pdf",
    answerKeyPageNumber: 3,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2020. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    solutionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2021,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 1,
    difficulty: "Beginner",
    topic: "Space Exploration & Observational Astronomy",
    subtopic: "Human Spaceflight",
    tags: [
      "billionaires in space",
      "SpaceX",
      "Elon Musk",
      "Kármán line"
    ],
    type: "MCQ",
    questionText: "As of September 2021, which of the following billionaires has not been into space (defined as at least 80 km above the surface of the Earth)?",
    choices: [
      {
        label: "A",
        text: "Jeff Bezos with the company Blue Origin"
      },
      {
        label: "B",
        text: "Richard Branson with the company Virgin Galactic"
      },
      {
        label: "C",
        text: "Elon Musk with the company SpaceX"
      },
      {
        label: "D",
        text: "Dennis Tito with the company Space Adventures"
      }
    ],
    correctAnswer: "C",
    explanation: "By September 2021, Bezos, Branson, and Tito had traveled to space under the stated threshold, while Elon Musk had not.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2021.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2021.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2021. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    questionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2021,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 2,
    difficulty: "Intermediate",
    topic: "Mathematical & Experimental Methods",
    subtopic: "Combinatorics and Surface Area",
    tags: [
      "what3words",
      "surface area",
      "combinatorics",
      "Earth"
    ],
    type: "MCQ",
    questionText: "The website what3words splits up the Earth’s surface into 3 m × 3 m squares and gives a co-ordinate of three randomly chosen words (for example the entrance to the Oxford University Physics Department is engage.proud.police). If each of the words is taken from the same list of n words, what value of n is needed?",
    choices: [
      {
        label: "A",
        text: "∼ 10 000"
      },
      {
        label: "B",
        text: "∼ 20 000"
      },
      {
        label: "C",
        text: "∼ 30 000"
      },
      {
        label: "D",
        text: "∼ 40 000"
      }
    ],
    correctAnswer: "D",
    explanation: "Earth’s surface contains about 5.67 × 10¹³ squares of area 9 m². Setting n³ equal to that count gives n ≈ 38,400, closest to 40,000.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2021.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2021.pdf",
    answerKeyPageNumber: 1,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2021. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2021,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 3,
    difficulty: "Intermediate",
    topic: "Telescopes, Instruments & Observing",
    subtopic: "Limiting Magnitude",
    tags: [
      "JWST",
      "Hubble Space Telescope",
      "aperture",
      "limiting magnitude"
    ],
    type: "MCQ",
    questionText: "After many delays, the James Webb Space Telescope (JWST) is due to be launched in December 2021. This will be the successor to the Hubble Space Telescope (HST) and has a much bigger primary mirror (6.5 m in diameter against 2.4 m for the HST) so will be able to study the Universe in unprecedented detail. Given the faintest objects the HST can see have a magnitude of ∼ 31 (known as the limiting magnitude), what limiting magnitude might we expect for JWST?",
    choices: [
      {
        label: "A",
        text: "∼ 29"
      },
      {
        label: "B",
        text: "∼ 31"
      },
      {
        label: "C",
        text: "∼ 33"
      },
      {
        label: "D",
        text: "∼ 36"
      }
    ],
    correctAnswer: "C",
    explanation: "Light-gathering power scales with aperture area. Converting the 6.5 m to 2.4 m collecting-area gain to magnitudes raises the limiting magnitude from about 31 to about 33.2.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2021.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2021.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2021. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2021,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 4,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Solar Declination and Tropics",
    tags: [
      "Tropic of Capricorn",
      "solar declination",
      "December solstice",
      "zenith Sun"
    ],
    type: "MCQ",
    questionText: "For which of these lines of latitude will a vertical stick in the ground have no shadow at local midday on 21st December 2021?",
    choices: [
      {
        label: "A",
        text: "Tropic of Cancer"
      },
      {
        label: "B",
        text: "Equator"
      },
      {
        label: "C",
        text: "Tropic of Capricorn"
      },
      {
        label: "D",
        text: "Antarctic Circle"
      }
    ],
    correctAnswer: "C",
    explanation: "At the December solstice, the Sun’s declination is near −23.4°, so it is overhead at local noon on the Tropic of Capricorn.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2021.pdf",
    pageNumber: 4,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2021.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2021. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    solutionMedia: {
      status: "required-missing",
      assets: []
    },
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2021,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 5,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Planetary Opposition",
    tags: [
      "Mars opposition",
      "Taurus",
      "ecliptic",
      "December"
    ],
    type: "MCQ",
    questionText: "When Mars has its opposition in 2022, an observer in the UK will see it in Taurus. In roughly which month will this opposition take place? [Mars’ opposition corresponds to when it is closest in its orbit to the Earth.]",
    choices: [
      {
        label: "A",
        text: "March"
      },
      {
        label: "B",
        text: "June"
      },
      {
        label: "C",
        text: "September"
      },
      {
        label: "D",
        text: "December"
      }
    ],
    correctAnswer: "D",
    explanation: "Opposition means Mars is opposite the Sun. Since the Sun is in Taurus around May–June, Mars is in Taurus at opposition about six months later, in December.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2021.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2021.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2021. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2021,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 6,
    difficulty: "Beginner",
    topic: "Celestial Coordinates & Time",
    subtopic: "Zodiacal Constellations",
    tags: [
      "Saturn",
      "Aquarius",
      "Capricorn",
      "zodiac"
    ],
    type: "MCQ",
    questionText: "In which constellation is Saturn visible during Autumn 2021? [Hint: it is close to Jupiter, which spent most of Summer 2021 in Aquarius]",
    choices: [
      {
        label: "A",
        text: "Capricorn"
      },
      {
        label: "B",
        text: "Gemini"
      },
      {
        label: "C",
        text: "Leo"
      },
      {
        label: "D",
        text: "Libra"
      }
    ],
    correctAnswer: "A",
    explanation: "Saturn lay close to Jupiter in Aquarius during summer 2021 and was in the nearby zodiac constellation Capricorn during autumn.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2021.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2021.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2021. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2021,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 7,
    difficulty: "Intermediate",
    topic: "Celestial Coordinates & Time",
    subtopic: "Solar Right Ascension",
    tags: [
      "right ascension",
      "Sun",
      "Spica",
      "October sky"
    ],
    type: "MCQ",
    questionText: "Which of these stars are closest to the Sun in October 2021?",
    choices: [
      {
        label: "A",
        text: "Rigel (Right ascension = 05h 15m, declination = −8.20°)"
      },
      {
        label: "B",
        text: "Regulus (Right ascension = 10h 08m, declination = +11.97°)"
      },
      {
        label: "C",
        text: "Spica (Right ascension = 13h 25m, declination = −11.16°)"
      },
      {
        label: "D",
        text: "Vega (Right ascension = 18h 37m, declination = +38.78°)"
      }
    ],
    correctAnswer: "C",
    explanation: "The Sun’s right ascension is roughly 14h in October; Spica, with RA 13h 25m and low declination, is closest to the Sun’s direction.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2021.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2021.pdf",
    answerKeyPageNumber: 2,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2021. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2021,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 8,
    difficulty: "Intermediate",
    topic: "Light, Radiation & Spectroscopy",
    subtopic: "Photon Flux",
    tags: [
      "photons",
      "solar irradiance",
      "human pupil",
      "photon energy"
    ],
    type: "MCQ",
    questionText: "Estimate the number of photons incident on a human pupil (of radius 2mm) from the Sun per second when it is at the zenith on a clear day.",
    choices: [
      {
        label: "A",
        text: "∼ 10¹⁰"
      },
      {
        label: "B",
        text: "∼ 10¹³"
      },
      {
        label: "C",
        text: "∼ 10¹⁶"
      },
      {
        label: "D",
        text: "∼ 10¹⁹"
      }
    ],
    correctAnswer: "C",
    explanation: "Using the solar flux at 1 au, a 2 mm-radius pupil, and a representative visible photon energy gives roughly 4.7 × 10¹⁶ photons each second.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2021.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2021.pdf",
    answerKeyPageNumber: 3,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2021. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2021,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 9,
    difficulty: "Intermediate",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Comet Orbits and Perihelion",
    tags: [
      "comet",
      "Kepler’s third law",
      "aphelion",
      "perihelion"
    ],
    type: "MCQ",
    questionText: "A comet orbits the Sun with a period of 172 years and eccentricity 0.94. It is currently at a distance of 60 au away from the Sun. After which of these times will the comet be moving the fastest?",
    choices: [
      {
        label: "A",
        text: "43 years"
      },
      {
        label: "B",
        text: "86 years"
      },
      {
        label: "C",
        text: "129 years"
      },
      {
        label: "D",
        text: "172 years"
      }
    ],
    correctAnswer: "B",
    explanation: "The given period and eccentricity show that 60 au is the comet’s aphelion. It reaches maximum orbital speed at perihelion, half an orbit later: 86 years.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2021.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2021.pdf",
    answerKeyPageNumber: 3,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2021. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    competition: "BAAO",
    year: 2021,
    examName: "Astronomy & Astrophysics Challenge",
    questionNumber: 10,
    difficulty: "Intermediate",
    topic: "Orbits, Gravitation & Dynamics",
    subtopic: "Synodic Periods",
    tags: [
      "asteroid",
      "synodic period",
      "Kepler’s third law",
      "semi-major axis"
    ],
    type: "MCQ",
    questionText: "In the rotating reference frame where the Earth is stationary, an asteroid orbits the Sun in 3.5 years. What is the distance between the asteroid and the Sun?",
    choices: [
      {
        label: "A",
        text: "1.25 au"
      },
      {
        label: "B",
        text: "2.08 au"
      },
      {
        label: "C",
        text: "3.95 au"
      },
      {
        label: "D",
        text: "6.54 au"
      }
    ],
    correctAnswer: "A",
    explanation: "The 3.5-year relative period satisfies 1/3.5 = 1/1 − 1/T, giving an asteroid period of 1.4 years. Kepler’s third law then gives a semi-major axis of about 1.25 au.",
    sourceUrl: "https://www.bpho.org.uk/baao/Papers/AC/",
    pdfUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2021.pdf",
    pageNumber: 5,
    answerKeyUrl: "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2021.pdf",
    answerKeyPageNumber: 3,
    attributionText: "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2021. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    permissionStatus: "needs-review",
    status: "draft"
  },
  {
    "competition": "BAAO",
    "year": 2022,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 1,
    "difficulty": "Beginner",
    "topic": "Telescopes, Instruments & Observing",
    "subtopic": "JWST First Images",
    "tags": [
      "JWST",
      "Carina Nebula",
      "first images",
      "space telescopes"
    ],
    "type": "MCQ",
    "questionText": "Below is one of the first images taken with the James Webb Space Telescope (JWST) released to the public on 12th July 2022. Which object is it from?\n\n[Visual reference required: see page 3 of the official exam PDF.]",
    "choices": [
      {
        "label": "A",
        "text": "Carina Nebula"
      },
      {
        "label": "B",
        "text": "Stephan’s Quintet"
      },
      {
        "label": "C",
        "text": "Southern Ring Nebula"
      },
      {
        "label": "D",
        "text": "WASP-96 b"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The pictured JWST release is the Carina Nebula image; the other choices were also early JWST targets or releases.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2022.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2022.pdf",
    "answerKeyPageNumber": 1,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2022. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "questionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2022,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 2,
    "difficulty": "Beginner",
    "topic": "Solar System & Planetary Science",
    "subtopic": "Human Lunar Exploration",
    "tags": [
      "Artemis",
      "Moon missions",
      "NASA",
      "SLS"
    ],
    "type": "MCQ",
    "questionText": "In Autumn 2022, NASA plans to launch a practice mission in preparation for sending humans back to the Moon. What is the name of the programme this is part of?",
    "choices": [
      {
        "label": "A",
        "text": "Artemis"
      },
      {
        "label": "B",
        "text": "Athena"
      },
      {
        "label": "C",
        "text": "Diana"
      },
      {
        "label": "D",
        "text": "Orion"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Artemis is NASA’s programme for returning humans to the Moon; Orion is the crew spacecraft used by the programme.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2022.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2022.pdf",
    "answerKeyPageNumber": 1,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2022. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2022,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 3,
    "difficulty": "Beginner",
    "topic": "Telescopes, Instruments & Observing",
    "subtopic": "Telescope Magnification",
    "tags": [
      "telescope magnification",
      "focal length",
      "eyepiece",
      "optics"
    ],
    "type": "MCQ",
    "questionText": "A telescope with a focal length of 750 mm is used with an eyepiece. Which eyepiece focal length would give the greatest overall magnification?",
    "choices": [
      {
        "label": "A",
        "text": "25 mm"
      },
      {
        "label": "B",
        "text": "20 mm"
      },
      {
        "label": "C",
        "text": "15 mm"
      },
      {
        "label": "D",
        "text": "10 mm"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Telescope magnification is the telescope focal length divided by the eyepiece focal length, so the shortest eyepiece focal length gives the largest magnification.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2022.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2022.pdf",
    "answerKeyPageNumber": 1,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2022. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2022,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 4,
    "difficulty": "Intermediate",
    "topic": "Galaxies & Extragalactic Astronomy",
    "subtopic": "Angular Source Density",
    "tags": [
      "Gaia",
      "quasars",
      "angular separation",
      "sky area"
    ],
    "type": "MCQ",
    "questionText": "The Gaia spacecraft, launched in 2013, is designed to map the sky with unprecedented precision. Its third data release (from June 2022) had 1.8 × 10⁹ objects detected of which 1.9 × 10⁶ were highly likely to be quasars (distant galaxies with an actively feeding black hole responsible for their light output). Assuming the quasars are evenly distributed across the whole sky, what is the approximate average angular separation between them?",
    "choices": [
      {
        "label": "A",
        "text": "∼ 0.001°"
      },
      {
        "label": "B",
        "text": "∼ 0.01°"
      },
      {
        "label": "C",
        "text": "∼ 0.1°"
      },
      {
        "label": "D",
        "text": "∼ 1.0°"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dividing the sky’s area, about 41,253 square degrees, among 1.9 million quasars gives a characteristic spacing of about 0.1°.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2022.pdf",
    "pageNumber": 3,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2022.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2022. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2022,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 5,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Opposition and the Ecliptic",
    "tags": [
      "Jupiter",
      "opposition",
      "Pisces",
      "autumnal equinox"
    ],
    "type": "MCQ",
    "questionText": "In September 2022, Jupiter reached opposition a few days after the autumnal equinox. Which constellation was it in at the time? [Jupiter’s opposition corresponds to when it is closest in its orbit to the Earth.]",
    "choices": [
      {
        "label": "A",
        "text": "Cancer"
      },
      {
        "label": "B",
        "text": "Pisces"
      },
      {
        "label": "C",
        "text": "Scorpio"
      },
      {
        "label": "D",
        "text": "Virgo"
      }
    ],
    "correctAnswer": "B",
    "explanation": "At opposition, Jupiter is opposite the Sun. A few days after the autumnal equinox places Jupiter near the sky position occupied by the Sun shortly after the vernal equinox: Pisces.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2022.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2022.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2022. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2022,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 6,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Lunar Rise Times",
    "tags": [
      "Moonrise",
      "lunar orbit",
      "sidereal month",
      "Earth rotation"
    ],
    "type": "MCQ",
    "questionText": "An observer on the equator sees the Moon rise at 22:00. Ignoring the inclination and eccentricity of the Moon’s orbit, when will it rise the next night? The Moon’s orbital period is 27.3 days.",
    "choices": [
      {
        "label": "A",
        "text": "21:07"
      },
      {
        "label": "B",
        "text": "21:47"
      },
      {
        "label": "C",
        "text": "22:13"
      },
      {
        "label": "D",
        "text": "22:53"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The Moon advances eastward by about 13.2° each day, so Earth must rotate about 53 extra minutes for it to rise again.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2022.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2022.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2022. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2022,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 7,
    "difficulty": "Beginner",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Culmination Altitude",
    "tags": [
      "Oxford",
      "declination",
      "culmination",
      "Capella"
    ],
    "type": "MCQ",
    "questionText": "Which of these stars will culminate at the highest altitude as seen by an observer in Oxford (latitude 51.75° N, longitude 1.26° W)?",
    "choices": [
      {
        "label": "A",
        "text": "Aldebaran (Right ascension = 04h 36m, declination = +16.51°)"
      },
      {
        "label": "B",
        "text": "Altair (Right ascension = 19h 51m, declination = +8.87°)"
      },
      {
        "label": "C",
        "text": "Capella (Right ascension = 05h 17m, declination = +46.00°)"
      },
      {
        "label": "D",
        "text": "Procyon (Right ascension = 07h 39m, declination = +5.22°)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "For a fixed observing latitude, the star with declination closest to the latitude culminates highest. Capella’s declination is closest to Oxford’s latitude.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2022.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2022.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2022. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "solutionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2022,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 8,
    "difficulty": "Advanced",
    "topic": "Orbits, Gravitation & Dynamics",
    "subtopic": "Elliptical Orbit Eccentricity",
    "tags": [
      "CAPSTONE",
      "near-rectilinear halo orbit",
      "eccentricity",
      "Moon"
    ],
    "type": "MCQ",
    "questionText": "The cubesat CAPSTONE will enter a near-rectilinear halo orbit (NRHO) of the Moon on 13th November 2022 as a direct test of the orbit planned for the Lunar Gateway — a space station due to be built in orbit around the Moon by the end of the decade. It is a polar orbit, going from 1500 km above the North pole to 70 000 km above the South pole. Treating it as an ellipse, what is the eccentricity of the orbit? The Moon has a radius of 1740 km.",
    "choices": [
      {
        "label": "A",
        "text": "0.83"
      },
      {
        "label": "B",
        "text": "0.88"
      },
      {
        "label": "C",
        "text": "0.91"
      },
      {
        "label": "D",
        "text": "0.96"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The semi-major axis is half the sum of periapsis and apoapsis distances from the Moon’s centre. Using rₚ = a(1 − e) gives e ≈ 0.91.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2022.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2022.pdf",
    "answerKeyPageNumber": 3,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2022. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "solutionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2022,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 9,
    "difficulty": "Advanced",
    "topic": "Orbits, Gravitation & Dynamics",
    "subtopic": "Synodic Periods",
    "tags": [
      "asteroid",
      "synodic period",
      "Kepler’s third law",
      "orbital speed"
    ],
    "type": "MCQ",
    "questionText": "An asteroid in a circular orbit around the Sun is at its closest to Earth every 300 days. What is its orbital speed? Assume the Earth’s orbit is also circular and that both orbit in the same direction.",
    "choices": [
      {
        "label": "A",
        "text": "21 km s⁻¹"
      },
      {
        "label": "B",
        "text": "28 km s⁻¹"
      },
      {
        "label": "C",
        "text": "32 km s⁻¹"
      },
      {
        "label": "D",
        "text": "39 km s⁻¹"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The 300-day recurrence implies an interior orbit with a period of about 165 days. Kepler’s law gives a ≈ 0.586 au, and the circular orbital speed is about 39 km s⁻¹.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2022.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2022.pdf",
    "answerKeyPageNumber": 3,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2022. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2022,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 10,
    "difficulty": "Advanced",
    "topic": "Light, Radiation & Spectroscopy",
    "subtopic": "Apparent Magnitude and Orbital Brightness",
    "tags": [
      "Jupiter",
      "perihelion",
      "apparent magnitude",
      "inverse-square law"
    ],
    "type": "MCQ",
    "questionText": "Jupiter’s apparent magnitude at opposition in 2022 of m = −2.94 is the brightest for ∼ 70 years due to it happening close to Jupiter’s perihelion. What is the difference in apparent magnitude between Jupiter’s brightest and faintest possible oppositions? Jupiter has a semi-major axis of 5.20 au and an eccentricity of 0.0489. Assume the Earth’s orbit is circular.",
    "choices": [
      {
        "label": "A",
        "text": "0.38"
      },
      {
        "label": "B",
        "text": "0.43"
      },
      {
        "label": "C",
        "text": "0.48"
      },
      {
        "label": "D",
        "text": "0.53"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Comparing the Sun–Jupiter and Earth–Jupiter distances at perihelion and aphelion with the inverse-square law gives a brightness ratio near 0.645, corresponding to about 0.48 magnitudes.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2022.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2022.pdf",
    "answerKeyPageNumber": 3,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2022. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2023,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 1,
    "difficulty": "Beginner",
    "topic": "Telescopes, Instruments & Observing",
    "subtopic": "Spaceport Geography",
    "tags": [
      "SaxaVord",
      "spaceport",
      "Shetland Islands",
      "UK spaceflight"
    ],
    "type": "MCQ",
    "questionText": "SaxaVord is due to be one of the UK’s newest spaceports, with first launches planned in late 2023. Where is it based?",
    "choices": [
      {
        "label": "A",
        "text": "Cornwall, England"
      },
      {
        "label": "B",
        "text": "Llanbedr, Wales"
      },
      {
        "label": "C",
        "text": "Sutherland, Scotland"
      },
      {
        "label": "D",
        "text": "Unst, Shetland Islands"
      }
    ],
    "correctAnswer": "D",
    "explanation": "SaxaVord Spaceport is based on Unst in the Shetland Islands.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2023.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2023.pdf",
    "answerKeyPageNumber": 1,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2023. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2023,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 2,
    "difficulty": "Advanced",
    "topic": "Orbits, Gravitation & Dynamics",
    "subtopic": "Circular Orbit Scaling Laws",
    "tags": [
      "circular orbits",
      "Kepler’s third law",
      "orbital velocity",
      "scaling laws"
    ],
    "type": "MCQ",
    "questionText": "In a given system, for all circular orbits of period T and orbital speed v, which of the following quantities is the same for each orbit?",
    "choices": [
      {
        "label": "A",
        "text": "T v"
      },
      {
        "label": "B",
        "text": "T v³⁄²"
      },
      {
        "label": "C",
        "text": "T v²"
      },
      {
        "label": "D",
        "text": "T v³"
      }
    ],
    "correctAnswer": "D",
    "explanation": "For circular orbits, T is proportional to r³⁄² while v is proportional to r⁻¹⁄². Therefore T v³ is independent of orbital radius.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2023.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2023.pdf",
    "answerKeyPageNumber": 1,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2023. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2023,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 3,
    "difficulty": "Intermediate",
    "topic": "Light, Radiation & Spectroscopy",
    "subtopic": "Distance Modulus",
    "tags": [
      "SN 2023ixf",
      "absolute magnitude",
      "distance modulus",
      "M101"
    ],
    "type": "MCQ",
    "questionText": "The recent supernova SN 2023ixf was one of the closest to Earth of the past decade, reaching an apparent magnitude of 10.8 despite being in the galaxy M101, about 21 million light years away. What was the absolute magnitude of this supernova?\n\n[Visual reference required: see page 4 of the official exam PDF.]",
    "choices": [
      {
        "label": "A",
        "text": "−18.2"
      },
      {
        "label": "B",
        "text": "−19.5"
      },
      {
        "label": "C",
        "text": "−20.8"
      },
      {
        "label": "D",
        "text": "−101"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Converting 21 million light-years to about 6.43 Mpc and applying the distance modulus gives an absolute magnitude of approximately −18.2.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2023.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2023.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2023. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "questionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2023,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 4,
    "difficulty": "Intermediate",
    "topic": "Solar System & Planetary Science",
    "subtopic": "Solar Power on the Moon",
    "tags": [
      "Chandrayaan 3",
      "Pragyan rover",
      "solar panel",
      "lunar surface"
    ],
    "type": "MCQ",
    "questionText": "In August 2023, India became the fourth country to successfully land a spacecraft on the Moon. The Chandrayaan 3 mission also involved the Pragyan rover, which was fully dependent on its small solar panel to provide it with the 50 W necessary to move around the lunar surface and do experiments. Assuming it was pointing at the Sun the whole time, what was the minimum solar panel area needed?",
    "choices": [
      {
        "label": "A",
        "text": "29 cm²"
      },
      {
        "label": "B",
        "text": "370 cm²"
      },
      {
        "label": "C",
        "text": "1160 cm²"
      },
      {
        "label": "D",
        "text": "4640 cm²"
      }
    ],
    "correctAnswer": "B",
    "explanation": "At roughly 1 au from the Sun, the solar irradiance is about 1355 W m⁻². A 50 W supply therefore needs an ideal minimum area of about 0.0369 m², or 370 cm².",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2023.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2023.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2023. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2023,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 5,
    "difficulty": "Advanced",
    "topic": "Orbits, Gravitation & Dynamics",
    "subtopic": "Visibility of Geostationary Satellites",
    "tags": [
      "geostationary orbit",
      "latitude",
      "Earth geometry",
      "Alert"
    ],
    "type": "MCQ",
    "questionText": "From which of these settlements can a geostationary satellite not be seen?",
    "choices": [
      {
        "label": "A",
        "text": "Longyearbyen, Svalbard, Norway (latitude = 78.20° N)"
      },
      {
        "label": "B",
        "text": "Nagurskoye, Franz Josef Land, Russia (latitude = 80.80° N)"
      },
      {
        "label": "C",
        "text": "Alert, Ellesmere Island, Canada (latitude = 82.47° N)"
      },
      {
        "label": "D",
        "text": "Geostationary satellites are visible from all of these latitudes"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A geostationary orbit is visible only to about 81.3° latitude. Alert, at 82.47° N, is beyond that limit.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2023.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2023.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2023. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "solutionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2023,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 6,
    "difficulty": "Beginner",
    "topic": "Telescopes, Instruments & Observing",
    "subtopic": "Messier Objects",
    "tags": [
      "Pleiades",
      "M45",
      "Taurus",
      "open cluster"
    ],
    "type": "MCQ",
    "questionText": "What is the Messier number of this object?\n\n[Visual reference required: see page 5 of the official exam PDF.]",
    "choices": [
      {
        "label": "A",
        "text": "M42"
      },
      {
        "label": "B",
        "text": "M43"
      },
      {
        "label": "C",
        "text": "M44"
      },
      {
        "label": "D",
        "text": "M45"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The pictured object is the Pleiades open cluster in Taurus, catalogued as M45.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2023.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2023.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2023. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "questionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2023,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 7,
    "difficulty": "Beginner",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Constellation Membership",
    "tags": [
      "Aldebaran",
      "Taurus",
      "constellations",
      "bright stars"
    ],
    "type": "MCQ",
    "questionText": "Which of the following stars is in the constellation Taurus?",
    "choices": [
      {
        "label": "A",
        "text": "Aldebaran"
      },
      {
        "label": "B",
        "text": "Castor"
      },
      {
        "label": "C",
        "text": "Rigel"
      },
      {
        "label": "D",
        "text": "Sirius"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Aldebaran is the bright orange eye of Taurus the Bull.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2023.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2023.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2023. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2023,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 8,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Constellation Recognition",
    "tags": [
      "Andromeda Galaxy",
      "constellations",
      "Local Group",
      "galaxy location"
    ],
    "type": "MCQ",
    "questionText": "Which of these constellations contains the nearest (comparable size) galaxy to the Milky Way?\n\n[Visual reference required: see page 6 of the official exam PDF.]",
    "choices": [
      {
        "label": "A",
        "text": "Constellation A (see official figure)"
      },
      {
        "label": "B",
        "text": "Constellation B (see official figure)"
      },
      {
        "label": "C",
        "text": "Constellation C (see official figure)"
      },
      {
        "label": "D",
        "text": "Constellation D (see official figure)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The nearest comparable-size galaxy is the Andromeda Galaxy, and the figure labeled D is the constellation Andromeda.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2023.pdf",
    "pageNumber": 6,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2023.pdf",
    "answerKeyPageNumber": 3,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2023. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "questionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2023,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 9,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Moon Phase and Zodiac",
    "tags": [
      "third quarter Moon",
      "Capricornus",
      "zodiac",
      "April"
    ],
    "type": "MCQ",
    "questionText": "An observer in the UK sees a third quarter moon in the constellation Capricornus. What is the month?",
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
        "text": "October"
      }
    ],
    "correctAnswer": "B",
    "explanation": "At third quarter, the Moon is about 90° behind the Sun along the zodiac. A Moon in Capricornus places the Sun near Aries, corresponding to April.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2023.pdf",
    "pageNumber": 6,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2023.pdf",
    "answerKeyPageNumber": 3,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2023. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "solutionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2023,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 10,
    "difficulty": "Advanced",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Longitude and Sunset Time",
    "tags": [
      "Guernsey",
      "Antananarivo",
      "longitude",
      "June solstice"
    ],
    "type": "MCQ",
    "questionText": "On the 21st June the Sun sets in Guernsey (49.45° N, 2.59° W) at 21:00 BST (British Summer Time, BST = UT+1). At what time UT (approximately) did the Sun set as observed from Antananarivo, Madagascar (18.88° S, 47.51° E) on the same day?",
    "choices": [
      {
        "label": "A",
        "text": "12:40"
      },
      {
        "label": "B",
        "text": "14:20"
      },
      {
        "label": "C",
        "text": "14:40"
      },
      {
        "label": "D",
        "text": "16:40"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The longitude difference is about 3 h 20 min, and the southern winter-solstice day length at Antananarivo places its sunset at approximately 14:20 UT.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2023.pdf",
    "pageNumber": 6,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2023.pdf",
    "answerKeyPageNumber": 4,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2023. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2024,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 1,
    "difficulty": "Beginner",
    "topic": "Solar System & Planetary Science",
    "subtopic": "Comet Missions",
    "tags": [
      "Philae",
      "Rosetta",
      "comet 67P",
      "spacecraft landing"
    ],
    "type": "MCQ",
    "questionText": "The year 2024 marks the 10th anniversary of the landing by which of the following spacecraft?\n\n[Visual reference required: see page 4 of the official exam PDF.]",
    "choices": [
      {
        "label": "A",
        "text": "Chang’e 4 (landed on the Moon)"
      },
      {
        "label": "B",
        "text": "Curiosity (landed on Mars)"
      },
      {
        "label": "C",
        "text": "Huygens (landed on Titan)"
      },
      {
        "label": "D",
        "text": "Philae (landed on comet 67P/Churyumov-Gerasimenko)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Philae landed on comet 67P/Churyumov–Gerasimenko on 12 November 2014 as part of the Rosetta mission.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2024.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2024.pdf",
    "answerKeyPageNumber": 1,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2024. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "questionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2024,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 2,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Lunar Phase Geometry",
    "tags": [
      "Moon phases",
      "first quarter",
      "Sun-Earth-Moon angle",
      "geometry"
    ],
    "type": "MCQ",
    "questionText": "If the Moon appears to be exactly half illuminated by the Sun, what is the Sun-Earth-Moon angle, assuming the Earth and Moon travel in circular orbits? The (centre-to-centre) average distance between the Earth and the Moon is 384 400 km.",
    "choices": [
      {
        "label": "A",
        "text": "87°"
      },
      {
        "label": "B",
        "text": "89.85°"
      },
      {
        "label": "C",
        "text": "90.00°"
      },
      {
        "label": "D",
        "text": "90.15°"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Half illumination makes the Sun–Moon–Earth angle 90°. Accounting for the finite Earth–Moon distance gives a Sun–Earth–Moon angle of about 89.85°.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2024.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2024.pdf",
    "answerKeyPageNumber": 1,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2024. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "solutionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2024,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 3,
    "difficulty": "Advanced",
    "topic": "Cosmology",
    "subtopic": "Hubble Law and Recessional Acceleration",
    "tags": [
      "Hubble’s law",
      "recessional acceleration",
      "Hubble constant",
      "dimensional analysis"
    ],
    "type": "MCQ",
    "questionText": "Using Hubble’s law for recessional velocities of distant objects, find a possible expression to estimate the recessional acceleration, a, of an object as a function of distance, d, and the Hubble constant, H₀.",
    "choices": [
      {
        "label": "A",
        "text": "a = H₀²d"
      },
      {
        "label": "B",
        "text": "a = H₀d²"
      },
      {
        "label": "C",
        "text": "a = (H₀d)²"
      },
      {
        "label": "D",
        "text": "a = H₀d"
      }
    ],
    "correctAnswer": "A",
    "explanation": "With v = H₀d and a = dv/dt, treating H₀ as constant gives a = H₀²d. The units also reduce to m s⁻².",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2024.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2024.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2024. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2024,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 4,
    "difficulty": "Intermediate",
    "topic": "Light, Radiation & Spectroscopy",
    "subtopic": "Magnitude and Brightness Ratios",
    "tags": [
      "T Coronae Borealis",
      "recurrent nova",
      "magnitudes",
      "brightness ratio"
    ],
    "type": "MCQ",
    "questionText": "T Coronae Borealis (T CrB), nicknamed the Blaze Star, is a binary star system about 920 pc away in the constellation Corona Borealis. It is famous for being a ‘recurrent nova’ — that is, an object whose brightness suddenly increases and then dims again periodically. The last eruption was in 1946, and there are signs the next one will happen either at the end of 2024 or the beginning of 2025. When it does, its apparent magnitude will increase from 10.8 to around 2.5. By approximately what factor will its brightness change?",
    "choices": [
      {
        "label": "A",
        "text": "4"
      },
      {
        "label": "B",
        "text": "50"
      },
      {
        "label": "C",
        "text": "2 × 10³"
      },
      {
        "label": "D",
        "text": "2 × 10⁸"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A magnitude change from 10.8 to 2.5 corresponds to a brightness ratio of 10⁻⁰·⁴(²·⁵⁻¹⁰·⁸), which is about 2,090.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2024.pdf",
    "pageNumber": 4,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2024.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2024. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2024,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 5,
    "difficulty": "Advanced",
    "topic": "Telescopes, Instruments & Observing",
    "subtopic": "Survey Coverage",
    "tags": [
      "Euclid",
      "VIS",
      "CCD",
      "sky coverage"
    ],
    "type": "MCQ",
    "questionText": "The Euclid space mission, launched in 2023, will image 36% of the sky in extremely high resolution to investigate the nature of dark energy and dark matter by looking at the shapes of huge numbers of distant galaxies. The visible instrument (VIS) consists of a 6 × 6 matrix of 4096 × 4132 pixel CCDs. If the scale of the image on the CCD is 0.101″ pixel⁻¹ in each axis, estimate the minimum number of photos the instrument needs to take to get the planned coverage (ignoring any gaps between the CCDs)?",
    "choices": [
      {
        "label": "A",
        "text": "31 000"
      },
      {
        "label": "B",
        "text": "49 000"
      },
      {
        "label": "C",
        "text": "86 000"
      },
      {
        "label": "D",
        "text": "135 000"
      }
    ],
    "correctAnswer": "A",
    "explanation": "One VIS exposure covers about 0.48 square degrees. Covering 36% of the 41,253-square-degree sky requires roughly 31,000 exposures.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2024.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2024.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2024. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2024,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 6,
    "difficulty": "Beginner",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Latitude from Polaris",
    "tags": [
      "Polaris",
      "latitude",
      "northern hemisphere",
      "horizon altitude"
    ],
    "type": "MCQ",
    "questionText": "An observer is lost at sea and sees that Polaris is 33° above the horizon. What is their latitude?",
    "choices": [
      {
        "label": "A",
        "text": "57° N"
      },
      {
        "label": "B",
        "text": "33° N"
      },
      {
        "label": "C",
        "text": "33° S"
      },
      {
        "label": "D",
        "text": "57° S"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Polaris’s altitude above the northern horizon is approximately equal to the observer’s northern latitude.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2024.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2024.pdf",
    "answerKeyPageNumber": 2,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2024. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "solutionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2024,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 7,
    "difficulty": "Beginner",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Constellations and the Celestial Equator",
    "tags": [
      "Canis Major",
      "celestial equator",
      "constellations",
      "southern sky"
    ],
    "type": "MCQ",
    "questionText": "Which of the following constellations is south of the celestial equator?",
    "choices": [
      {
        "label": "A",
        "text": "Andromeda"
      },
      {
        "label": "B",
        "text": "Canis Major"
      },
      {
        "label": "C",
        "text": "Gemini"
      },
      {
        "label": "D",
        "text": "Perseus"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Of the listed non-zodiacal constellations, Canis Major lies south of the celestial equator.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2024.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2024.pdf",
    "answerKeyPageNumber": 3,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2024. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "solutionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2024,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 8,
    "difficulty": "Intermediate",
    "topic": "Telescopes, Instruments & Observing",
    "subtopic": "Messier Objects and Constellations",
    "tags": [
      "M1",
      "Crab Nebula",
      "Taurus",
      "Aldebaran"
    ],
    "type": "MCQ",
    "questionText": "Which of the following Messier objects is a nebula that can be found in the same constellation as the star Aldebaran?",
    "choices": [
      {
        "label": "A",
        "text": "M1"
      },
      {
        "label": "B",
        "text": "M31"
      },
      {
        "label": "C",
        "text": "M42"
      },
      {
        "label": "D",
        "text": "M45"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Aldebaran is in Taurus, which also contains M1, the Crab Nebula. M45 is in Taurus too, but it is an open cluster rather than a nebula.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2024.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2024.pdf",
    "answerKeyPageNumber": 3,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2024. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2024,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 9,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Culmination Altitude",
    "tags": [
      "Rio de Janeiro",
      "declination",
      "culmination",
      "Nunki"
    ],
    "type": "MCQ",
    "questionText": "Which of these stars will culminate at the highest altitude, as seen by an observer in Rio de Janeiro (22.91° S, 43.17° W)?",
    "choices": [
      {
        "label": "A",
        "text": "Castor (RA: 07h 35m, Dec: +31.89°)"
      },
      {
        "label": "B",
        "text": "Rigel (RA: 05h 15m, Dec: −8.20°)"
      },
      {
        "label": "C",
        "text": "Nunki (RA: 18h 55m, Dec: −26.30°)"
      },
      {
        "label": "D",
        "text": "Hadar (RA: 14h 04m, Dec: −60.37°)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A star culminates highest when its declination is closest to the observer’s latitude. Nunki’s declination of −26.30° is closest to −22.91°.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2024.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2024.pdf",
    "answerKeyPageNumber": 3,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2024. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "solutionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  },
  {
    "competition": "BAAO",
    "year": 2024,
    "examName": "Astronomy & Astrophysics Challenge",
    "questionNumber": 10,
    "difficulty": "Intermediate",
    "topic": "Celestial Coordinates & Time",
    "subtopic": "Opposition Sequence",
    "tags": [
      "opposition",
      "Mars",
      "Saturn",
      "Uranus",
      "Neptune"
    ],
    "type": "MCQ",
    "questionText": "Between September 2024 and January 2025, Mars, Saturn, Uranus, and Neptune will all be in opposition: Mars in Gemini, Saturn in Aquarius, Uranus in Taurus, and Neptune in Pisces. In what order will their oppositions occur?",
    "choices": [
      {
        "label": "A",
        "text": "Mars, Uranus, Neptune, Saturn"
      },
      {
        "label": "B",
        "text": "Neptune, Uranus, Mars, Saturn"
      },
      {
        "label": "C",
        "text": "Saturn, Neptune, Uranus, Mars"
      },
      {
        "label": "D",
        "text": "Saturn, Uranus, Neptune, Mars"
      }
    ],
    "correctAnswer": "C",
    "explanation": "At opposition, a planet is opposite the Sun. The constellation order corresponds approximately to oppositions in late August/early September for Saturn, September for Neptune, November for Uranus, and January for Mars.",
    "sourceUrl": "https://www.bpho.org.uk/baao/Papers/AC/",
    "pdfUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_2024.pdf",
    "pageNumber": 5,
    "answerKeyUrl": "https://www.bpho.org.uk/baao/Papers/AC/Astro_Challenge_solutions_2024.pdf",
    "answerKeyPageNumber": 4,
    "attributionText": "Source: British Astronomy and Astrophysics Olympiad (BAAO), Astronomy & Astrophysics Challenge 2024. Question text, answer-choice text, and answer were transcribed from the official BAAO paper and solutions PDFs; the explanation and metadata are original.",
    "permissionStatus": "needs-review",
    "solutionMedia": {
      "status": "required-missing",
      "assets": []
    },
    "status": "draft"
  }] as const;
