// Daily activity and streaks for the dashboard calendar.
//
// Pure functions only (no database, no browser APIs), so every rule here
// is unit-tested and the same code runs on the server and in the browser.
//
// "A day" always means a day in the student's own time zone: practising at
// 11 pm in California must count for that evening, not for tomorrow in UTC.

// --- Time zones and day keys -----------------------------------------------

/// Returns the time zone if the runtime recognises it, otherwise "UTC".
/// The browser sends its zone name; a typo or an old runtime must never
/// break the dashboard.
export function safeTimeZone(timeZone: string | null | undefined): string {
  if (!timeZone) return "UTC";
  try {
    new Intl.DateTimeFormat("en-US", { timeZone });
    return timeZone;
  } catch {
    return "UTC";
  }
}

/// The calendar date and hour of a moment in a time zone.
export function localParts(date: Date, timeZone: string): { day: string; hour: number } {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "00";
  return { day: `${get("year")}-${get("month")}-${get("day")}`, hour: Number(get("hour")) };
}

/// "YYYY-MM-DD" for a moment, in a time zone.
export function dayKey(date: Date, timeZone: string): string {
  return localParts(date, timeZone).day;
}

/// Moves a "YYYY-MM-DD" key by a number of days. Day keys are plain dates,
/// so this uses UTC arithmetic, which has no daylight-saving jumps.
export function addDays(day: string, amount: number): string {
  const date = new Date(`${day}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + amount);
  return date.toISOString().slice(0, 10);
}

/// Day of the week for a day key: 0 = Sunday … 6 = Saturday.
export function weekday(day: string): number {
  return new Date(`${day}T00:00:00Z`).getUTCDay();
}

// --- Counting questions per day --------------------------------------------

/// One thing a student did: checked an MCQ, or had an FRQ checked/graded.
export type ActivityEvent = {
  at: Date;
  kind: "MCQ" | "FRQ";
  questionId: string;
};

/// How much a student did on one day. Each question counts once per day,
/// however many times it was retried, so the calendar rewards covering
/// new ground rather than clicking the same answer again.
export type ActivityDay = { date: string; mcq: number; frq: number };

export function buildActivityDays(events: ActivityEvent[], timeZone: string): ActivityDay[] {
  const questionsByDay = new Map<string, { mcq: Set<string>; frq: Set<string> }>();

  for (const event of events) {
    const day = dayKey(event.at, timeZone);
    const entry = questionsByDay.get(day) ?? { mcq: new Set<string>(), frq: new Set<string>() };
    (event.kind === "MCQ" ? entry.mcq : entry.frq).add(event.questionId);
    questionsByDay.set(day, entry);
  }

  return Array.from(questionsByDay.entries())
    .map(([date, entry]) => ({ date, mcq: entry.mcq.size, frq: entry.frq.size }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

// --- Streaks ---------------------------------------------------------------

export type Streaks = {
  /// Days in a row up to today. Practising yesterday but not yet today
  /// still counts — the streak only breaks once a whole day is missed.
  current: number;
  longest: number;
};

export function computeStreaks(activeDays: Iterable<string>, today: string): Streaks {
  const days = new Set(activeDays);

  // Longest: walk every active day that starts a run.
  let longest = 0;
  for (const day of days) {
    if (days.has(addDays(day, -1))) continue; // not the start of a run
    let length = 1;
    while (days.has(addDays(day, length))) length++;
    longest = Math.max(longest, length);
  }

  // Current: count back from today, or from yesterday if today is empty.
  let cursor = days.has(today) ? today : addDays(today, -1);
  let current = 0;
  while (days.has(cursor)) {
    current++;
    cursor = addDays(cursor, -1);
  }

  return { current, longest };
}

/// Days practised in the Monday–Sunday week containing `today`.
export function activeDaysThisWeek(activeDays: Iterable<string>, today: string): number {
  const days = new Set(activeDays);
  const monday = addDays(today, -((weekday(today) + 6) % 7));
  let count = 0;
  for (let offset = 0; offset < 7; offset++) {
    if (days.has(addDays(monday, offset))) count++;
  }
  return count;
}

/// True if any Monday–Sunday week has all seven days practised.
export function hasPerfectWeek(activeDays: Iterable<string>): boolean {
  const days = new Set(activeDays);
  for (const day of days) {
    if (weekday(day) !== 1) continue; // only start checking from Mondays
    let full = true;
    for (let offset = 1; offset < 7 && full; offset++) full = days.has(addDays(day, offset));
    if (full) return true;
  }
  return false;
}

// --- Calendar shading ------------------------------------------------------

/// How many questions put a day in each shade. Level 0 is an empty day;
/// 4 is the brightest blue.
export const ACTIVITY_LEVEL_MINIMUMS = [1, 3, 6, 10] as const;

export function activityLevel(questions: number): 0 | 1 | 2 | 3 | 4 {
  let level = 0;
  for (const minimum of ACTIVITY_LEVEL_MINIMUMS) {
    if (questions >= minimum) level++;
  }
  return level as 0 | 1 | 2 | 3 | 4;
}

/// The day keys shown in the calendar: whole weeks (Sunday to Saturday)
/// ending with the week that contains `today`, oldest first. Days after
/// today are left out, like GitHub's contribution graph.
export function calendarDays(today: string, weeks: number): string[] {
  const lastSaturday = addDays(today, 6 - weekday(today));
  const firstSunday = addDays(lastSaturday, -(weeks * 7 - 1));
  const days: string[] = [];
  for (let day = firstSunday; day <= today; day = addDays(day, 1)) days.push(day);
  return days;
}
