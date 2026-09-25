"use client";

// A GitHub-style activity calendar: one square per day for the last year,
// brighter blue for days with more questions done. Hovering (or focusing)
// a day shows how many MCQs and FRQs were done. The current and longest
// streaks sit quietly to the right.
//
// This component only draws what it is given, so the same code shows a
// student's real activity and the blurred example on the Free dashboard.

import { useEffect, useMemo, useRef } from "react";
import { activityLevel, calendarDays, type ActivityDay, type Streaks } from "@/lib/progress/activity";
import HoverTip from "./HoverTip";

/// A full year, like GitHub.
const WEEKS = 53;

/// Square colours from an empty day (0) to the busiest (4): dark to bright blue.
export const LEVEL_COLOURS = ["rgba(255,255,255,0.08)", "#1e3a8a", "#1d4ed8", "#3b82f6", "#7dd3fc"];

const WEEKDAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

/// Below this width the squares stop shrinking and the calendar scrolls.
const MIN_GRID_WIDTH = 640;

/// "Wed, Sep 24, 2026" for a "2026-09-24" day key.
function formatDay(day: string): string {
  return new Date(`${day}T00:00:00Z`).toLocaleDateString(undefined, {
    timeZone: "UTC",
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/// "Sep" for a "2026-09-24" day key.
function monthName(day: string): string {
  return new Date(`${day}T00:00:00Z`).toLocaleDateString(undefined, { timeZone: "UTC", month: "short" });
}

/// The tooltip text for one day.
function describeDay(day: string, counts: ActivityDay | undefined): { title: string; detail: string } {
  const total = (counts?.mcq ?? 0) + (counts?.frq ?? 0);
  if (total === 0) return { title: "No questions", detail: formatDay(day) };
  return {
    title: `${total} question${total === 1 ? "" : "s"}`,
    detail: `${counts?.mcq ?? 0} MCQ · ${counts?.frq ?? 0} FRQ — ${formatDay(day)}`,
  };
}

export default function ActivityCalendar({
  days,
  streaks,
  today,
  interactive = true,
}: {
  days: ActivityDay[];
  streaks: Streaks;
  today: string;
  /// False for the blurred example: no tooltips, nothing focusable.
  interactive?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const countsByDay = useMemo(() => new Map(days.map((day) => [day.date, day])), [days]);
  const allDays = useMemo(() => calendarDays(today, WEEKS), [today]);
  const totalThisYear = days
    .filter((day) => day.date >= allDays[0])
    .reduce((sum, day) => sum + day.mcq + day.frq, 0);

  // Split the days into week columns (Sunday at the top).
  const weeks = useMemo(() => {
    const columns: string[][] = [];
    for (let index = 0; index < allDays.length; index += 7) columns.push(allDays.slice(index, index + 7));
    return columns;
  }, [allDays]);

  // On narrow screens the calendar scrolls sideways; start at the newest week.
  useEffect(() => {
    const box = scrollRef.current;
    if (box) box.scrollLeft = box.scrollWidth;
  }, [weeks]);

  return (
    <section className="rounded-xl border-[3px] border-ink bg-space p-5 text-white shadow-brutal">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
        {/* The calendar */}
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-extrabold">Activity</h2>
          <p className="text-xs text-white/60">
            {totalThisYear} question{totalThisYear === 1 ? "" : "s"} in the last year
          </p>

          {/* A grid: weekday labels in the first column, then one column per
              week that stretches to fill the card. Below MIN_GRID_WIDTH it
              stops shrinking and scrolls sideways instead. */}
          <div ref={scrollRef} className="mt-3 overflow-x-auto pb-2">
            <div
              className="grid gap-[3px]"
              style={{
                gridTemplateColumns: `28px repeat(${weeks.length}, minmax(0, 1fr))`,
                minWidth: MIN_GRID_WIDTH,
              }}
            >
              {/* Month labels, on the column where each month starts */}
              {weeks.map((week, weekIndex) => {
                const firstOfMonth = week.find((day) => day.endsWith("-01"));
                if (!firstOfMonth) return null;
                return (
                  <span
                    key={`month-${week[0]}`}
                    className="whitespace-nowrap text-[10px] leading-3 text-white/50"
                    style={{ gridColumn: weekIndex + 2, gridRow: 1 }}
                  >
                    {monthName(firstOfMonth)}
                  </span>
                );
              })}

              {/* Weekday labels */}
              {WEEKDAY_LABELS.map((label, dayIndex) =>
                label ? (
                  <span
                    key={`weekday-${label}`}
                    className="self-center text-[10px] leading-none text-white/50"
                    style={{ gridColumn: 1, gridRow: dayIndex + 2 }}
                  >
                    {label}
                  </span>
                ) : null,
              )}

              {/* One square per day */}
              {weeks.flatMap((week, weekIndex) =>
                week.map((day, dayIndex) => {
                  const counts = countsByDay.get(day);
                  const level = activityLevel((counts?.mcq ?? 0) + (counts?.frq ?? 0));
                  const place = { gridColumn: weekIndex + 2, gridRow: dayIndex + 2 };
                  const square = (
                    <span
                      className="block aspect-square w-full rounded-[3px]"
                      style={{ backgroundColor: LEVEL_COLOURS[level] }}
                    />
                  );
                  if (!interactive) {
                    return (
                      <span key={day} style={place}>
                        {square}
                      </span>
                    );
                  }
                  const text = describeDay(day, counts);
                  return (
                    <span key={day} style={place}>
                      <HoverTip
                        className="block"
                        content={
                          <>
                            <span className="block font-extrabold">{text.title}</span>
                            <span className="block text-xs text-navy/70">{text.detail}</span>
                          </>
                        }
                      >
                        <button
                          type="button"
                          aria-label={`${text.title}, ${text.detail}`}
                          className="block w-full rounded-[3px] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
                        >
                          {square}
                        </button>
                      </HoverTip>
                    </span>
                  );
                }),
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-white/50">
            <span className="mr-1">Less</span>
            {LEVEL_COLOURS.map((colour) => (
              <span key={colour} className="h-3 w-3 rounded-[3px]" style={{ backgroundColor: colour }} />
            ))}
            <span className="ml-1">More</span>
          </div>
        </div>

        {/* Streaks: small and quiet, beside the calendar */}
        <div className="flex gap-3 lg:w-32 lg:flex-col">
          <StreakStat label="Current streak" days={streaks.current} />
          <StreakStat label="Longest streak" days={streaks.longest} />
        </div>
      </div>
    </section>
  );
}

function StreakStat({ label, days }: { label: string; days: number }) {
  return (
    <div className="flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2">
      <p className="text-xs font-semibold text-white/60">{label}</p>
      <p className="mt-0.5 text-xl font-extrabold">
        {days} <span className="text-sm font-semibold text-white/70">day{days === 1 ? "" : "s"}</span>
      </p>
    </div>
  );
}
