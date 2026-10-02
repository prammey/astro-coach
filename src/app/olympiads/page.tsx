import PageContainer from "@/components/PageContainer";
import OlympiadCard, {
  OlympiadCardData,
  TIER_COLORS,
  type DifficultyTier,
} from "@/components/OlympiadCard";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Astronomy olympiads guide",
  description:
    "Every major astronomy olympiad, from beginner online contests to the IOAA, ordered by difficulty — with what each one is like and how to prepare.",
};

// Competitions ordered from easiest (tier 1, green) to hardest (tier 6, dark red).
const OLYMPIADS: OlympiadCardData[] = [
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

export default function OlympiadsPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">
        Olympiad Guide
      </h1>
      <p className="mt-2 max-w-2xl text-navy/80">
        Competitions are stacked from easiest (green) at the top to hardest
        (dark red) at the bottom, so you know where to start.
      </p>

      {/* The difficulty ladder as a colour legend. */}
      <div className="mt-4 flex max-w-md items-center gap-3 text-xs font-bold text-navy/70">
        <span>Easier</span>
        <div className="flex h-3 flex-1 overflow-hidden rounded-full border-2 border-ink">
          {([1, 2, 3, 4, 5, 6] as DifficultyTier[]).map((tier) => (
            <span
              key={tier}
              className="flex-1"
              style={{ backgroundColor: TIER_COLORS[tier].background }}
            />
          ))}
        </div>
        <span>Harder</span>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {OLYMPIADS.map((olympiad, index) => (
          // All cards fade in on page load (a quick ripple down the list),
          // so nothing waits for you to scroll.
          <Reveal key={olympiad.name} delay={Math.min(index, 6) * 50} immediate>
            <OlympiadCard data={olympiad} />
          </Reveal>
        ))}
      </div>
    </PageContainer>
  );
}
