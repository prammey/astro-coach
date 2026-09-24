// Every curated FRQ exam, in the order they appear in the bank.
// Add a new exam file here to include it in `npm run seed:frq`.
import type { FrqSeedExam } from "./types";

// IAAC Qualification Round
import { iaac2019Qualification } from "./iaac-2019-qualification";
import { iaac2020Qualification } from "./iaac-2020-qualification";
import { iaac2021Qualification } from "./iaac-2021-qualification";
import { iaac2022Qualification } from "./iaac-2022-qualification";
import { iaac2023Qualification } from "./iaac-2023-qualification";
import { iaac2024Qualification } from "./iaac-2024-qualification";
import { iaac2025Qualification } from "./iaac-2025-qualification";

// USAAAO national (second-round) exams
import { usaaao2014Nac } from "./usaaao-2014-nac";
import { usaaao2015Nac } from "./usaaao-2015-nac";
import { usaaao2016R2 } from "./usaaao-2016-r2";
import { usaaao2017Nac } from "./usaaao-2017-nac";
import { usaaao2018Nac } from "./usaaao-2018-nac";
import { usaaao2019Nac } from "./usaaao-2019-nac";
import { usaaao2020Nac } from "./usaaao-2020-nac";
import { usaaao2020NacV2 } from "./usaaao-2020-nac-v2";
import { usaaao2021Nac } from "./usaaao-2021-nac";
import { usaaao2022Nac } from "./usaaao-2022-nac";
import { usaaao2023Nac } from "./usaaao-2023-nac";
import { usaaao2024Nac } from "./usaaao-2024-nac";
import { usaaao2025Nac } from "./usaaao-2025-nac";
import { usaaao2026Nac } from "./usaaao-2026-nac";

export const frqExams: FrqSeedExam[] = [
  iaac2019Qualification,
  iaac2020Qualification,
  iaac2021Qualification,
  iaac2022Qualification,
  iaac2023Qualification,
  iaac2024Qualification,
  iaac2025Qualification,
  usaaao2014Nac,
  usaaao2015Nac,
  usaaao2016R2,
  usaaao2017Nac,
  usaaao2018Nac,
  usaaao2019Nac,
  usaaao2020Nac,
  usaaao2020NacV2,
  usaaao2021Nac,
  usaaao2022Nac,
  usaaao2023Nac,
  usaaao2024Nac,
  usaaao2025Nac,
  usaaao2026Nac,
];
