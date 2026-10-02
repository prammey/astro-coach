// The competitions on the Olympiad Guide, ordered from easiest (tier 1)
// to hardest (tier 6). Also counted on the home page.

/// Where a competition sits on the green (easy) → red (hard) ladder.
export type DifficultyTier = 1 | 2 | 3 | 4 | 5 | 6;

export type OlympiadCardData = {
  name: string;
  tier: DifficultyTier;
  difficultyLabel: string;
  blurb: string;
  /// The competition's own website. Left out when we have not verified one.
  officialUrl?: string;
  /// Where to practice it on Astro Coach, if we have its questions.
  practice?: { href: string; label: string };
};

// Competitions ordered from easiest (tier 1, green) to hardest (tier 6, dark red).
export const OLYMPIADS: OlympiadCardData[] = [
  {
    name: "IAAC (International Astronomy and Astrophysics Competition)",
    tier: 1,
    difficultyLabel: "Beginner",
    blurb:
      "A very beginner-friendly online multiple-choice competition. Great for students who are brand new to astronomy contests and just want to start with basic facts and observational concepts.",
    officialUrl: "https://iaac.space",
    practice: { href: "/training?competition=IAAC", label: "Practice IAAC questions" },
  },
  {
    name: "OAAO (Online Astronomy and Astrophysics Olympiad)",
    tier: 1,
    difficultyLabel: "Beginner",
    blurb:
      "An accessible online olympiad covering introductory astronomy topics. A good first competition for students testing the waters before committing to a harder track.",
  },
  {
    name: "Science Olympiad: Astronomy Event",
    tier: 2,
    difficultyLabel: "Beginner-Intermediate",
    blurb:
      "A team event with multiple-choice and short-answer questions, run as part of Science Olympiad. Study the current year's rules manual and practice with past tests.",
    officialUrl: "https://www.soinc.org",
  },
  {
    name: "INAO (Indian National Astronomy Olympiad)",
    tier: 3,
    difficultyLabel: "Intermediate",
    blurb:
      "A national qualifying olympiad that builds toward international astronomy competitions. Expect a step up in physics and math rigor compared to beginner contests.",
    officialUrl: "https://olympiads.hbcse.tifr.res.in",
  },
  {
    name: "USAAAO First Round",
    tier: 3,
    difficultyLabel: "Intermediate",
    blurb:
      "An online multiple-choice exam for high school students aiming for the USAAAO National round. Review astrophysics fundamentals and practice timed multiple-choice sets.",
    officialUrl: "https://usaaao.org",
    practice: { href: "/training?competition=USAAAO", label: "Practice USAAAO questions" },
  },
  {
    name: "BAAO (British Astronomy and Astrophysics Olympiad)",
    tier: 4,
    difficultyLabel: "Intermediate-Advanced",
    blurb:
      "A challenging written exam with long-form problems covering astrophysics theory and calculation. Best suited for students with solid physics and math backgrounds.",
    officialUrl: "https://www.bpho.org.uk/baao/",
    practice: { href: "/training?competition=BAAO", label: "Practice BAAO questions" },
  },
  {
    name: "USAAAO NAC (National Astronomy Competition)",
    tier: 4,
    difficultyLabel: "Intermediate-Advanced",
    blurb:
      "An in-depth exam covering theory and data analysis for students who placed well in the USAAAO First Round. Practice data analysis problems and deeper astrophysics theory.",
    officialUrl: "https://usaaao.org",
    practice: { href: "/training/frq", label: "Practice free-response problems" },
  },
  {
    name: "IOAA (International Olympiad on Astronomy and Astrophysics)",
    tier: 5,
    difficultyLabel: "Advanced",
    blurb:
      "Theory, data analysis, and observation rounds for top students representing their country internationally. Build strong physics and math foundations alongside astronomy knowledge.",
    officialUrl: "https://ioaastrophysics.org",
  },
  {
    name: "IAO (International Astronomy Olympiad)",
    tier: 6,
    difficultyLabel: "Advanced / International",
    blurb:
      "An international theoretical and practical astronomy exam for experienced competitors seeking the highest level of challenge. Practice past international rounds and focus on observational astronomy.",
    officialUrl: "http://www.issp.ac.ru/iao/",
  },
];
