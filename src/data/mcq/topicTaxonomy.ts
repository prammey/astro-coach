// Taxonomy that deterministically maps 460+ unique raw question topics to 10 broad curriculum topics.
// Uses exact matching first, then keyword-based rules for granular topics.
// Does not modify raw source files or use fuzzy matching.

// The 10 user-facing curriculum topics
export const CURRICULUM_TOPICS = [
  "Solar System",
  "Exoplanets & Life",
  "Stars & Black Holes",
  "Galaxies & Universe",
  "Gravity & Orbits",
  "Energy & Stellar Physics",
  "Light & Spectra",
  "Telescopes & Observing",
  "Math, Data & Coordinates",
  "Miscellaneous & Space History",
] as const;

export type CurriculumTopic = (typeof CURRICULUM_TOPICS)[number];

// Exact matches for the main topic categories
const EXACT_TOPIC_MAPPING: Record<string, CurriculumTopic[]> = {
  "Celestial Coordinates & Time": ["Math, Data & Coordinates"],
  "Stars & Stellar Evolution": ["Stars & Black Holes", "Energy & Stellar Physics"],
  "Solar System & Planetary Science": ["Solar System"],
  "Light, Radiation & Spectroscopy": ["Light & Spectra", "Energy & Stellar Physics"],
  "Gravitation, Orbits & Dynamics": ["Gravity & Orbits"],
  "Orbits, Gravitation & Dynamics": ["Gravity & Orbits"],
  "Galaxies & Extragalactic Astronomy": ["Galaxies & Universe"],
  "Observational Astronomy & Telescopes": ["Telescopes & Observing"],
  "Exoplanets & Stellar Systems": ["Exoplanets & Life"],
  "Orbital Mechanics & Gravitation": ["Gravity & Orbits"],
  "Exoplanets & Planetary Systems": ["Exoplanets & Life"],
  "Telescopes, Instruments & Observing": ["Telescopes & Observing"],
  "Deep-Sky Objects & Catalogs": ["Galaxies & Universe"],
  "Cosmology": ["Galaxies & Universe"],
  "Cosmology & the Universe": ["Galaxies & Universe"],
  "Telescopes, Observing & Instrumentation": ["Telescopes & Observing"],
  "Cosmology & Universe": ["Galaxies & Universe"],
  "Galaxies & Large-Scale Structure": ["Galaxies & Universe"],
  "Space Exploration & Astronomical History": ["Miscellaneous & Space History"],
  "Cosmology & the Early Universe": ["Galaxies & Universe"],
  "Astrophysical Processes & Fundamental Physics": ["Energy & Stellar Physics"],
  "Astrophysical Processes & Nuclear Physics": ["Energy & Stellar Physics"],
  "Astrobiology & Life in the Universe": ["Exoplanets & Life"],
  "Exoplanets & Astrobiology": ["Exoplanets & Life"],
  "Space Exploration & Observational Astronomy": ["Telescopes & Observing"],
  "Mathematical & Experimental Methods": ["Math, Data & Coordinates"],
  "Astrophysical Dynamics & Orbits": ["Gravity & Orbits"],
  "Compact Objects & Relativity": ["Stars & Black Holes"],
  "Cosmology & Galaxies": ["Galaxies & Universe"],
  "Stellar Astronomy": ["Stars & Black Holes"],
  "Exoplanets & Detection": ["Exoplanets & Life"],
  "History & Observational Astronomy": ["Miscellaneous & Space History"],
  "Solar Physics": ["Energy & Stellar Physics"],
};

// Keyword-based classification rules for granular topic names.
// Returns [primaryTopic, ...optionalSecondaryTopics]
function classifyByKeywords(rawTopic: string): CurriculumTopic[] {
  const topic = rawTopic.toLowerCase();

  // Exoplanets & Life keywords
  if (
    topic.includes("exoplanet") ||
    topic.includes("planet detect") ||
    topic.includes("habitable") ||
    topic.includes("astrobiology") ||
    topic.includes("astro-biology")
  ) {
    return ["Exoplanets & Life"];
  }

  // Gravity & Orbits keywords
  if (
    topic.includes("kepler") ||
    topic.includes("orbit") ||
    topic.includes("gravitation") ||
    topic.includes("gravitational") ||
    topic.includes("delta-v") ||
    topic.includes("hohmann") ||
    topic.includes("escape") ||
    topic.includes("lagrange") ||
    topic.includes("roche") ||
    topic.includes("centripetal") ||
    topic.includes("angular momentum") ||
    topic.includes("elliptic") ||
    topic.includes("resonanc")
  ) {
    return ["Gravity & Orbits"];
  }

  // Solar System keywords
  if (
    topic.includes("planet") ||
    topic.includes("lunar") ||
    topic.includes("moon") ||
    topic.includes("comet") ||
    topic.includes("asteroid") ||
    topic.includes("ring") ||
    topic.includes("jovian") ||
    topic.includes("terrestrial") ||
    topic.includes("solar system") ||
    topic.includes("mercury") ||
    topic.includes("venus") ||
    topic.includes("mars") ||
    topic.includes("jupiter") ||
    topic.includes("saturn") ||
    topic.includes("uranus") ||
    topic.includes("neptune") ||
    topic.includes("pluto")
  ) {
    return ["Solar System"];
  }

  // Light & Spectra keywords
  if (
    topic.includes("spectra") ||
    topic.includes("spectral") ||
    topic.includes("radiation") ||
    topic.includes("wavelength") ||
    topic.includes("photon") ||
    topic.includes("doppler") ||
    topic.includes("redshift") ||
    topic.includes("blackbody") ||
    topic.includes("magnitude") ||
    topic.includes("brightness") ||
    topic.includes("luminosity") ||
    topic.includes("flux") ||
    topic.includes("wien") ||
    topic.includes("stefan") ||
    topic.includes("emission") ||
    topic.includes("absorption")
  ) {
    return ["Light & Spectra"];
  }

  // Energy & Stellar Physics keywords
  if (
    topic.includes("stellar") ||
    topic.includes("star evolution") ||
    topic.includes("fusion") ||
    topic.includes("nucleosynthesis") ||
    topic.includes("white dwarf") ||
    topic.includes("neutron") ||
    topic.includes("black hole") ||
    topic.includes("supernova") ||
    topic.includes("main sequence") ||
    topic.includes("red giant") ||
    topic.includes("helium") ||
    topic.includes("hydrostatic") ||
    topic.includes("pressure") ||
    topic.includes("temperature") ||
    topic.includes("solar interior") ||
    topic.includes("stellar interior") ||
    topic.includes("accretion")
  ) {
    return ["Energy & Stellar Physics"];
  }

  // Telescopes & Observing keywords
  if (
    topic.includes("telescope") ||
    topic.includes("instrument") ||
    topic.includes("observ") ||
    topic.includes("diffraction") ||
    topic.includes("resolution") ||
    topic.includes("aperture") ||
    topic.includes("magnification") ||
    topic.includes("detector") ||
    topic.includes("imaging") ||
    topic.includes("focal")
  ) {
    return ["Telescopes & Observing"];
  }

  // Galaxies & Universe keywords
  if (
    topic.includes("galaxy") ||
    topic.includes("galactic") ||
    topic.includes("cosmology") ||
    topic.includes("cosmic") ||
    topic.includes("universe") ||
    topic.includes("hubble") ||
    topic.includes("cepheid") ||
    topic.includes("quasar") ||
    topic.includes("dark matter") ||
    topic.includes("dark energy") ||
    topic.includes("expansion") ||
    topic.includes("redshift") ||
    topic.includes("cmb") ||
    topic.includes("microwave") ||
    topic.includes("large-scale") ||
    topic.includes("cluster") ||
    topic.includes("messier")
  ) {
    return ["Galaxies & Universe"];
  }

  // Math, Data & Coordinates keywords
  if (
    topic.includes("coordinate") ||
    topic.includes("angle") ||
    topic.includes("declination") ||
    topic.includes("right ascension") ||
    topic.includes("altitude") ||
    topic.includes("azimuth") ||
    topic.includes("time") ||
    topic.includes("date") ||
    topic.includes("Julian") ||
    topic.includes("hour angle") ||
    topic.includes("distance modulus") ||
    topic.includes("parallax") ||
    topic.includes("geometry") ||
    topic.includes("calculation") ||
    topic.includes("spherical") ||
    topic.includes("equation")
  ) {
    return ["Math, Data & Coordinates"];
  }

  // Miscellaneous & Space History keywords
  if (
    topic.includes("mission") ||
    topic.includes("exploration") ||
    topic.includes("apollo") ||
    topic.includes("jwst") ||
    topic.includes("spacecraft") ||
    topic.includes("history") ||
    topic.includes("discovery") ||
    topic.includes("astronaut") ||
    topic.includes("human space")
  ) {
    return ["Miscellaneous & Space History"];
  }

  // Default: Miscellaneous if no keywords match
  return ["Miscellaneous & Space History"];
}

/**
 * Classifies a question into curriculum topics based on its raw topic.
 * Returns [primaryTopic, ...secondaryTopics].
 *
 * Uses exact matching first (for main categories), then keyword-based rules
 * for granular topic names. Fully deterministic, no fuzzy matching.
 * Every question maps deterministically to at least one curriculum topic.
 */
export function classifyQuestionTopics(
  rawTopic: string,
  // subtopic: available for future refinement
  // tags: available for future refinement
): CurriculumTopic[] {
  // Try exact match first
  const exactMatch = EXACT_TOPIC_MAPPING[rawTopic];
  if (exactMatch) {
    return exactMatch;
  }

  // Fall back to keyword-based classification
  return classifyByKeywords(rawTopic);
}

/**
 * Returns the primary (first) curriculum topic for a question.
 */
export function getPrimaryCurriculumTopic(rawTopic: string): CurriculumTopic {
  const topics = classifyQuestionTopics(rawTopic);
  return topics[0];
}

/**
 * For debugging: lists all raw topics and their curriculum mappings.
 */
export function buildTopicMapping(): Record<string, CurriculumTopic[]> {
  return { ...EXACT_TOPIC_MAPPING };
}
