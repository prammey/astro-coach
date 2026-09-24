"use client";

// Loads the student's activity (Pro only) and shows the calendar.
//
// The server decides who is Pro: for a Free account it answers with a lock
// and no data, and this component shows nothing — the Free dashboard has a
// separate, blurred example at the bottom instead.

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/pro/client";
import type { ActivityReport } from "@/lib/progress/facts.server";
import ActivityCalendar from "./ActivityCalendar";
import LoadingStar from "../ui/LoadingStar";

type ActivityResponse = { locked: true } | { locked: false; activity: ActivityReport };

/// The browser's time zone, so days and streaks follow the student's clock.
export function browserTimeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

export default function ActivitySection() {
  const [data, setData] = useState<ActivityResponse | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    apiGet<ActivityResponse>(`/api/dashboard/activity?tz=${encodeURIComponent(browserTimeZone())}`)
      .then((response) => active && setData(response))
      .catch(() => active && setFailed(true));
    return () => {
      active = false;
    };
  }, []);

  if (failed) {
    return <p className="text-sm text-white/70">Could not load your activity calendar.</p>;
  }
  if (!data) return <LoadingStar tone="light" label="Loading your activity…" />;
  if (data.locked) return null;

  const { days, streaks, today } = data.activity;
  return <ActivityCalendar days={days} streaks={streaks} today={today} />;
}
