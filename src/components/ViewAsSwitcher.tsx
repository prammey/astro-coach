'use client';

// The owner-only "View as" controls: pick Guest, Free account or Pro to see
// the site the way those users do, without logging out.
//
//   - ViewAsOptions: the list of views, shown in the profile dropdown.
//   - ViewAsPill:    a small floating reminder while a view is simulated,
//                    with the same list. In Guest view the profile
//                    dropdown is hidden (you look signed out), so this pill
//                    is the way back.
//
// Both render nothing for anyone who is not allowed to switch views, and the
// server ignores the choice for them anyway.

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { VIEW_AS_OPTIONS } from '@/lib/view-as';

/// The list of views, with the current one marked.
export function ViewAsOptions() {
  const { viewAs, setViewAs } = useAuth();
  return (
    <ul className="py-1" role="radiogroup" aria-label="View the site as">
      {VIEW_AS_OPTIONS.map((option) => {
        const selected = viewAs === option.value;
        return (
          <li key={option.label}>
            <button
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => !selected && setViewAs(option.value)}
              className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition hover:bg-cream ${
                selected ? 'font-extrabold text-navy' : 'font-semibold text-navy/80'
              }`}
            >
              <span
                aria-hidden
                className={`h-3 w-3 flex-shrink-0 rounded-full border-2 border-ink ${selected ? 'bg-electric' : 'bg-white'}`}
              />
              <span>
                {option.label}
                <span className="block text-xs font-normal text-navy/60">{option.description}</span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

/// A floating pill shown while a simulated view is active.
export function ViewAsPill() {
  const { canSwitchView, viewAs } = useAuth();
  const [open, setOpen] = useState(false);
  if (!canSwitchView || !viewAs) return null;

  const current = VIEW_AS_OPTIONS.find((option) => option.value === viewAs);

  return (
    <div className="fixed bottom-4 right-4 z-[90]">
      {open && (
        <div className="mb-2 w-56 rounded-lg border-2 border-ink bg-white shadow-brutal">
          <p className="border-b-2 border-ink px-4 py-2 text-xs font-bold uppercase text-navy/60">View as (admin)</p>
          <ViewAsOptions />
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="ml-auto flex items-center gap-2 rounded-full border-2 border-ink bg-yellow px-4 py-2 text-sm font-extrabold text-navy shadow-brutal-sm"
      >
        <span aria-hidden>👁</span>
        Viewing as {current?.label ?? viewAs}
      </button>
    </div>
  );
}
