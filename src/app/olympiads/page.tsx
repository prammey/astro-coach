import PageContainer from "@/components/PageContainer";
import OlympiadCard, { OlympiadCardData } from "@/components/OlympiadCard";

// Competitions ordered from easiest (tier 1, green) to hardest (tier 6, dark red).
const OLYMPIADS: OlympiadCardData[] = [
  {
    name: "IAAC (International Astronomy and Astrophysics Competition)",
    tier: 1,
    difficultyLabel: "Beginner",
    blurb:
      "A very beginner-friendly online multiple-choice competition. Great for students who are brand new to astronomy contests and just want to start with basic facts and observational concepts.",
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
  },
  {
    name: "Philippine Astronomy Olympiad",
    tier: 2,
    difficultyLabel: "Beginner-Intermediate",
    blurb:
      "A national-level competition introducing students to astronomy and astrophysics concepts beyond the basics, with a mix of conceptual and applied questions.",
  },
  {
    name: "INAO (Indian National Astronomy Olympiad)",
    tier: 3,
    difficultyLabel: "Intermediate",
    blurb:
      "A national qualifying olympiad that builds toward international astronomy competitions. Expect a step up in physics and math rigor compared to beginner contests.",
  },
  {
    name: "USAAAO First Round",
    tier: 3,
    difficultyLabel: "Intermediate",
    blurb:
      "An online multiple-choice exam for high school students aiming for the USAAAO National round. Review astrophysics fundamentals and practice timed multiple-choice sets.",
  },
  {
    name: "BAAO (British Astronomy and Astrophysics Olympiad)",
    tier: 4,
    difficultyLabel: "Intermediate-Advanced",
    blurb:
      "A challenging written exam with long-form problems covering astrophysics theory and calculation. Best suited for students with solid physics and math backgrounds.",
  },
  {
    name: "USAAAO NAC (National Astronomy Competition)",
    tier: 4,
    difficultyLabel: "Intermediate-Advanced",
    blurb:
      "An in-depth exam covering theory and data analysis for students who placed well in the USAAAO First Round. Practice data analysis problems and deeper astrophysics theory.",
  },
  {
    name: "Pan-African Astronomy Olympiad",
    tier: 5,
    difficultyLabel: "Advanced",
    blurb:
      "A regional olympiad bringing together top students across Africa to tackle advanced theory and observational astronomy problems at a competitive level.",
  },
  {
    name: "IOAA (International Olympiad on Astronomy and Astrophysics)",
    tier: 5,
    difficultyLabel: "Advanced",
    blurb:
      "Theory, data analysis, and observation rounds for top students representing their country internationally. Build strong physics and math foundations alongside astronomy knowledge.",
  },
  {
    name: "IAO (International Astronomy Olympiad)",
    tier: 6,
    difficultyLabel: "Advanced / International",
    blurb:
      "An international theoretical and practical astronomy exam for experienced competitors seeking the highest level of challenge. Practice past international rounds and focus on observational astronomy.",
  },
];

export default function OlympiadsPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)] sm:text-4xl">
        Olympiad Guide
      </h1>
      <p className="mt-2 max-w-2xl text-[var(--color-navy)]/80">
        Competitions are stacked from easiest (green) at the top to hardest
        (dark red) at the bottom, so you know where to start.
      </p>

      <div className="mt-8 flex flex-col gap-5">
        {OLYMPIADS.map((olympiad) => (
          <OlympiadCard key={olympiad.name} data={olympiad} />
        ))}
      </div>
    </PageContainer>
  );
}
