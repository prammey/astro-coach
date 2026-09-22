// Gathers every exam's explanations into one lookup, keyed by question ID.
//
// Like the question bank itself, this contains answers and must only be
// imported on the server (the catalog does that). The browser is sent one
// question's explanation only after the student has earned it.
import type { McqExplanation, McqExplanationMap } from "./types";

import { explanations as usaaao2014Nao } from "./usaaao-2014-national-astronomy-olympiad";
import { explanations as usaaao2015First } from "./usaaao-2015-first-round";
import { explanations as usaaao2015Practice } from "./usaaao-2015-practice-round";
import { explanations as usaaao2016First } from "./usaaao-2016-first-round";
import { explanations as usaaao2017First } from "./usaaao-2017-first-round";
import { explanations as usaaao2018First } from "./usaaao-2018-first-round";
import { explanations as usaaao2019First } from "./usaaao-2019-first-round";
import { explanations as usaaao2020First } from "./usaaao-2020-first-round";
import { explanations as usaaao2021First } from "./usaaao-2021-first-round";
import { explanations as usaaao2022First } from "./usaaao-2022-first-round";
import { explanations as usaaao2023First } from "./usaaao-2023-first-round";
import { explanations as usaaao2024First } from "./usaaao-2024-first-round";
import { explanations as usaaao2025First } from "./usaaao-2025-first-round";
import { explanations as usaaao2026First } from "./usaaao-2026-first-round";
import { explanations as iaac2019Final } from "./iaac-2019-final-round";
import { explanations as iaac2020Final } from "./iaac-2020-final-round";
import { explanations as iaac2021Final } from "./iaac-2021-final-round";
import { explanations as iaac2022Final } from "./iaac-2022-final-round";
import { explanations as iaac2023Final } from "./iaac-2023-final-round";
import { explanations as iaac2024Final } from "./iaac-2024-final-round";
import { explanations as iaac2025Final } from "./iaac-2025-final-round";
import { explanations as baao2016A2 } from "./baao-2016-a2-challenge";
import { explanations as baao2017 } from "./baao-2017-challenge";
import { explanations as baao2018 } from "./baao-2018-challenge";
import { explanations as baao2019 } from "./baao-2019-challenge";
import { explanations as baao2020 } from "./baao-2020-challenge";
import { explanations as baao2021 } from "./baao-2021-challenge";
import { explanations as baao2022 } from "./baao-2022-challenge";
import { explanations as baao2023 } from "./baao-2023-challenge";
import { explanations as baao2024 } from "./baao-2024-challenge";

export type { McqExplanation, McqExplanationMap } from "./types";

// One combined map. Each question ID appears in exactly one exam file, so
// spreading them together never overwrites anything.
export const allMcqExplanations: McqExplanationMap = {
  ...usaaao2014Nao,
  ...usaaao2015First,
  ...usaaao2015Practice,
  ...usaaao2016First,
  ...usaaao2017First,
  ...usaaao2018First,
  ...usaaao2019First,
  ...usaaao2020First,
  ...usaaao2021First,
  ...usaaao2022First,
  ...usaaao2023First,
  ...usaaao2024First,
  ...usaaao2025First,
  ...usaaao2026First,
  ...iaac2019Final,
  ...iaac2020Final,
  ...iaac2021Final,
  ...iaac2022Final,
  ...iaac2023Final,
  ...iaac2024Final,
  ...iaac2025Final,
  ...baao2016A2,
  ...baao2017,
  ...baao2018,
  ...baao2019,
  ...baao2020,
  ...baao2021,
  ...baao2022,
  ...baao2023,
  ...baao2024,
};

// Looks up the explanation for one question, or undefined if that
// question has not been written up yet.
export function findMcqExplanation(questionId: string): McqExplanation | undefined {
  return allMcqExplanations[questionId];
}
