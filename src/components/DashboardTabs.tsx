'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';

type TabType = 'all' | 'bookmarked' | 'incorrect';

interface AttemptRow {
  id: string;
  questionId: string;
  // Null when the ID no longer matches a question in the catalog.
  questionLabel: string | null;
  submittedAnswer: string | null;
  isCorrect: boolean | null;
  createdAt: string;
}

const TABS: { id: TabType; label: string }[] = [
  { id: 'all', label: 'All Questions' },
  { id: 'bookmarked', label: 'Bookmarked' },
  { id: 'incorrect', label: 'Incorrect' },
];

// Each tab is drawn like a browser tab: a flat middle between two fixed-size
// end caps. The caps give the soft trapezoid sides, rounded top corners and
// the little curved "feet" where the tab meets the table. They are separate
// shapes (not one stretched image) so the curves never distort however wide
// the tab gets.
const CAP_WIDTH = 22;
const TAB_HEIGHT = 46;

// The left cap, in a 22 x 46 box: a concave foot at the bottom left, a gently
// slanted side, and a rounded top corner. The right cap is its mirror image.
const LEFT_CAP_PATH = `M0,${TAB_HEIGHT} C6,${TAB_HEIGHT} 7,${TAB_HEIGHT - 3} 8,${TAB_HEIGHT - 9} L11,12 C12.5,4 16,0 ${CAP_WIDTH},0 L${CAP_WIDTH},${TAB_HEIGHT} Z`;

/// One end of a tab, filled with the tab's colour (`fillClass`).
function TabCap({ side, fillClass }: { side: 'left' | 'right'; fillClass: string }) {
  return (
    <svg
      aria-hidden
      width={CAP_WIDTH}
      height={TAB_HEIGHT}
      viewBox={`0 0 ${CAP_WIDTH} ${TAB_HEIGHT}`}
      className={`shrink-0 ${fillClass} ${side === 'right' ? '-scale-x-100' : ''}`}
    >
      <path d={LEFT_CAP_PATH} />
    </svg>
  );
}

export default function DashboardTabs() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [allAttempts, setAllAttempts] = useState<AttemptRow[]>([]);
  const [bookmarkedAttempts, setBookmarkedAttempts] = useState<AttemptRow[]>([]);
  const [incorrectAttempts, setIncorrectAttempts] = useState<AttemptRow[]>([]);
  // Which lists hit the server's row limit (very rare), so we can say so.
  const [truncated, setTruncated] = useState<Record<TabType, boolean>>({ all: false, bookmarked: false, incorrect: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const session = await supabase.auth.getSession();
        const token = session.data.session?.access_token;
        if (!token) return;

        const headers = { Authorization: `Bearer ${token}` };

        const [allRes, bookmarkedRes, incorrectRes] = await Promise.all([
          fetch('/api/user/all-attempts', { headers }),
          fetch('/api/user/bookmarked-questions', { headers }),
          fetch('/api/user/incorrect-questions', { headers }),
        ]);

        const all = allRes.ok ? await allRes.json() : null;
        const bookmarked = bookmarkedRes.ok ? await bookmarkedRes.json() : null;
        const incorrect = incorrectRes.ok ? await incorrectRes.json() : null;
        if (all) setAllAttempts(all.attempts);
        if (bookmarked) setBookmarkedAttempts(bookmarked.attempts);
        if (incorrect) setIncorrectAttempts(incorrect.attempts);
        setTruncated({
          all: Boolean(all?.truncated),
          bookmarked: Boolean(bookmarked?.truncated),
          incorrect: Boolean(incorrect?.truncated),
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const currentRows = (() => {
    switch (activeTab) {
      case 'all':
        return allAttempts;
      case 'bookmarked':
        return bookmarkedAttempts;
      case 'incorrect':
        return incorrectAttempts;
    }
  })();

  return (
    <div>
      {/* Browser-style tab bar. The active tab is the same colour as the
          table header, so it flows straight into the table below. */}
      <div className="relative z-20 flex w-full px-2" role="tablist">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const fillClass = isActive ? 'fill-space' : 'fill-white/10 group-hover:fill-white/20';
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`group -mx-1.5 flex min-w-0 flex-1 items-end focus:outline-none focus-visible:[&>span]:underline ${
                isActive ? 'z-10' : 'z-0'
              }`}
              style={{ height: TAB_HEIGHT }}
            >
              <TabCap side="left" fillClass={fillClass} />
              <span
                className={`flex h-full min-w-0 flex-1 items-center justify-center truncate text-sm font-extrabold transition-colors duration-200 sm:text-base ${
                  isActive ? 'bg-space text-yellow' : 'bg-white/10 text-white/70 group-hover:bg-white/20 group-hover:text-white'
                }`}
              >
                {tab.label}
              </span>
              <TabCap side="right" fillClass={fillClass} />
            </button>
          );
        })}
      </div>

      {/* Table content */}
      {/* About ten rows show at once and the rest scroll inside this box
          (it also scrolls sideways on narrow screens, so the page itself
          never grows wider than the phone). The header row stays put. */}
      <div className="relative z-10 max-h-[560px] overflow-auto rounded-b-2xl rounded-t-md bg-cream shadow-[0_6px_16px_rgba(0,0,0,0.15)]">
        {isLoading ? (
          <p className="p-6 text-navy/70">Loading...</p>
        ) : (
          // Fixed column widths, so the headings stay put when switching
          // tabs; below 640px the table scrolls sideways instead.
          <table className="w-full min-w-[640px] table-fixed">
            <colgroup>
              <col className="w-[40%]" />
              <col className="w-[20%]" />
              <col className="w-[22%]" />
              <col className="w-[18%]" />
            </colgroup>
            <thead className="sticky top-0 z-10 bg-space">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Question</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Your Answer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Result</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">When</th>
              </tr>
            </thead>
            {currentRows.length > 0 ? (
            <tbody className="divide-y-2 divide-ink">
              {currentRows.map((row) => (
                <tr key={row.id} className="hover:bg-electric/10">
                  <td className="px-6 py-3 text-sm font-semibold">
                    {row.questionLabel ? (
                      <Link
                        href={`/training/${row.questionId}`}
                        className="text-electric underline hover:text-purple transition-colors"
                      >
                        {row.questionLabel}
                      </Link>
                    ) : (
                      // The question is no longer in the catalog, so linking
                      // would lead to a 404. Show it plainly instead.
                      <span
                        className="text-navy/50"
                        title="This question is no longer in the question bank"
                      >
                        {row.questionId} <span className="text-xs">(removed)</span>
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-sm font-semibold text-navy">
                    {row.submittedAnswer ?? '—'}
                  </td>
                  <td className="px-6 py-3">
                    {row.isCorrect === null ? (
                      <span className="inline-block px-3 py-1 rounded font-semibold text-sm bg-navy/10 text-navy">
                        Not attempted
                      </span>
                    ) : (
                      <span
                        className={`inline-block px-3 py-1 rounded font-semibold text-sm ${
                          row.isCorrect
                            ? 'bg-success text-white'
                            : 'bg-danger text-white'
                        }`}
                      >
                        {row.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-sm text-navy">
                    {new Date(row.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-navy/70">
                    {activeTab === 'bookmarked' && 'No bookmarked questions yet.'}
                    {activeTab === 'incorrect' && 'No incorrect attempts yet.'}
                    {activeTab === 'all' && 'No attempts yet. Start training to see your progress!'}
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        )}
      </div>
      {truncated[activeTab] && (
        <p className="mt-2 text-xs text-white/60">Showing your most recent {currentRows.length.toLocaleString()} rows.</p>
      )}
    </div>
  );
}
