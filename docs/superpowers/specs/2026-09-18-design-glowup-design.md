# Design Glow-Up — Design Spec

**Date:** 2026-09-18
**Branch:** `feature/design-glowup`
**Status:** Built on `feature/design-glowup` (see "What changed during the build" at the end)

## What this is

A visual and motion pass over the whole site, on its own branch, so the
current look on `main` stays untouched until you decide to merge.

The brand stays neo-brutalist astronomy: thick black borders, hard offset
shadows, navy / purple / electric blue / yellow / cream. What changes is
that those choices become a *system* instead of a pile of one-offs, the
site gets a real typeface, the astronomy theme runs through every page
instead of stopping at the hero, and everything moves smoothly.

No new packages. No changes to Prisma, the data files, the API, or any
Pro money-path logic. Admin screens are left as they are.

## What was wrong (from the code and screenshots)

- **Arial.** The body font is the browser default. It reads as unstyled.
- **No system.** Four shadow sizes and two border weights used in 50+
  places by hand. Cards on the same page have different shadows.
- **No motion.** Nothing fades in, nothing lifts, the nav is a static bar.
- **Off-brand colors.** The olympiad page uses a green-to-red scale that
  fights the palette. Result chips use Tailwind's default greens and reds.
- **The theme vanishes after the hero.** Every section below it is flat
  cream or flat white with nothing that says "space".
- **No mobile nav.** Six links in a row overflow on a phone.
- **Repeated code.** The same 120-character button class string is pasted
  in 27 places. A beginner cannot change the button style in one move.

## Design plan

### Color tokens

Same six brand colors, now registered with Tailwind so `bg-navy` works
instead of `bg-[var(--color-navy)]`. Existing code keeps working because
the CSS variables still exist.

| Token | Hex | Role |
| --- | --- | --- |
| `navy` | `#0b0f2e` | Deep space. Nav, dark pages, body text on cream |
| `space` | `#131a4a` | One step lighter. Footer, secondary dark surfaces |
| `electric` | `#3b82f6` | Primary action, links, "MCQ" chip |
| `purple` | `#7c3aed` | Pro, section headings on cards, "difficulty" chip |
| `yellow` | `#fde047` | Accent, brand wordmark, key call-to-action |
| `cream` | `#fdf6e3` | Light page background |
| `ink` | `#000000` | Borders and shadows. Real black is the brutalist rule |

Two additions, both derived, no new hue:

- **Success / error** for answer results: `#16a34a` and `#dc2626` stay
  (they must be unmistakable), but they get the brutalist treatment
  (black border, bold) instead of Tailwind's pastel `bg-green-200`.
- **Olympiad difficulty ladder** replaces green-to-red with a
  "deeper into space" ladder on brand colors, easiest to hardest:
  cream, light blue `#bfdbfe`, electric, purple, space, navy.
  Text flips to white from tier 3 up. The page copy that says
  "green at the top, red at the bottom" changes to match.

### Typography

Two families, clearly different jobs, loaded with `next/font/google`
(built into Next.js, nothing to install, self-hosted at build time).

- **Bricolage Grotesque** for headings, buttons, chips, the wordmark.
  Bold, slightly quirky, unmistakably not Arial. Weights 700 and 800.
- **Instrument Sans** for body text, question text, tables, forms.
  Clean and narrow enough that long competition names fit. Weights
  400, 500, 600.

Type scale (mobile / desktop): hero 44 / 72, page title 32 / 44,
section 24 / 30, card title 20, body 16, small 14, chip 12.
Body line length capped near 70 characters.

### Surface system

Three named shadows and two border weights, defined once as Tailwind
tokens so nobody types pixel values again:

| Class | Value | Used for |
| --- | --- | --- |
| `shadow-brutal-sm` | 4px offset | Buttons, chips with borders, inputs on focus |
| `shadow-brutal` | 6px offset | Cards |
| `shadow-brutal-lg` | 8px offset | Hero call-outs, the Pro plan card |
| `border-4` | 4px | Cards, primary buttons, inputs |
| `border-2` | 2px | Chips, dropdown menus, small controls |

Corners: `rounded-xl` on cards, `rounded-lg` on buttons and inputs,
`rounded-md` on chips. Three sizes, one per tier of importance.

### The astronomy texture

The one bold move, spent in one place: a **starfield** that lives
behind every page, not just the hero.

- On cream pages: a faint scatter of tiny navy dots at 8% opacity,
  drawn with CSS radial gradients (no image, no request). Subtle
  enough to read as paper texture from a distance and as a star map
  up close.
- On navy pages (dashboard, login, signup, pricing): the same scatter
  in white at 25% opacity, plus a slow 90-second drift so the field
  feels alive without demanding attention.
- The hero keeps its photograph but the overlay changes from a flat
  50% black to a navy gradient that fades into the page below, so the
  hero and the content feel like one continuous sky.

### Motion

Rules first, then where each one applies:

- Every transition is 200 ms for hover, 400 ms for reveals, with an
  ease-out curve. One timing, everywhere.
- `prefers-reduced-motion` turns all of it off. Content is always
  visible without JavaScript.
- Motion answers the reader. Nothing bounces or loops for attention
  except the starfield drift.

Where it shows up:

1. **Page load.** Each route fades in over 300 ms via a `template.tsx`,
   the App Router file that re-mounts on every navigation. This is the
   "smooth page change" feel with no library.
2. **Hero sequence.** On the home page, the headline, subtitle, and two
   buttons stagger in 80 ms apart. This is the one choreographed moment.
3. **Scroll reveals.** Card grids (features, olympiads, question lists,
   pricing) fade and rise 12 px as they enter the viewport, each card
   60 ms after the previous. Done with a small `Reveal` wrapper built on
   `IntersectionObserver`.
4. **Hover.** Cards lift up-left by 2 px and their shadow grows to the
   next size. Buttons press down-right by 2 px and lose their shadow.
   Lift for things you read, press for things you push. Same physical
   metaphor everywhere, already half-present in the current code.
5. **Nav.** Sticky. Scrolling down slides it up out of view; scrolling
   up brings it back. Once scrolled past 40 px it switches from solid
   navy to 85% navy with a backdrop blur and a 2 px yellow bottom rule.
   The active link gets a yellow underline that slides between links.
6. **Dropdowns, menus, filters.** Open with a 150 ms fade plus 4 px
   drop. The profile menu and the mobile menu use the same animation.
7. **Answer feedback.** Correct / incorrect result chips scale in from
   90% so the outcome registers.

### Components

New shared pieces in `src/components/ui/`:

| Component | Replaces | Notes |
| --- | --- | --- |
| `BrutalButton` | 27 pasted class strings | `variant`: primary, accent, dark, ghost. `size`: sm, md, lg. Renders `<Link>` when given `href`, `<button>` otherwise |
| `Chip` | ~15 pasted span tags | `tone`: type, difficulty, topic, parts, neutral |
| `Reveal` | nothing | Wraps children; fades in on scroll. `delay` prop for stagger |
| `Starfield` | nothing | Absolutely-positioned background layer, `tone`: light or dark |
| `LoadingStar` | "Loading..." text in 5 places | A pulsing star glyph with a label |

`BrutalCard` stays where it is and gains a `hover` prop (lift on hover,
off by default so static cards stay still) and a `tone` prop (white,
cream, navy, purple) so callers stop overriding its background by hand.

### Page by page

**Nav and footer.** Described above under Motion. The footer gets
breathing room, a thin starfield strip, the disclaimer kept verbatim,
and the policy links as proper buttons-sized targets on mobile.
A mobile menu (hamburger under 768 px) is added, since the current nav
overflows on phones.

**Home.** Hero sequence and gradient overlay. Feature cards become four
`BrutalCard hover` in a 2×2 with `Reveal` stagger, each with a small
inline SVG glyph (a star, an orbit, a chart, a trophy) so the grid is
not four identical text boxes. The two "coming soon" cards get a
neutral `Chip` reading "Coming soon" instead of it living in the
sentence. Pricing section as below.

**Pricing** (component and page). Free card gains the same shadow as
Pro so they sit at one depth. The Pro card keeps its starburst badge.
The feature list checkmarks and stars become consistent glyphs. The
"Sign up free" button gets the same press hover as every other button.

**Olympiads.** New ladder colors. Cards get a small tier marker on the
left edge (one to six filled dots) since the list genuinely is a
sequence. `Reveal` stagger down the page. The "source link placeholder"
line is kept but styled as a quiet footnote.

**Training list.** The reference-sheet and free-response call-outs
become `BrutalCard` with the standard shadow. Search input and filter
panel share the input style. Question cards use `Chip` and `hover`.
The "Start Training" button becomes `BrutalButton size=lg`.

**Question view and practice.** Same chips, same card. Answer choices
get a clear selected state (navy fill, yellow text) and the press
hover. Result chips get the brutalist success / error style. Previous /
Next buttons come from `BrutalButton`. Source metadata card unchanged
in content.

**FRQ list and detail (Pro).** Cards use the shared primitives. Locked
cards get a diagonal hatch overlay instead of flat grey, so "locked"
reads as a state, not as "broken". No change to what data is sent.

**Dashboard.** Stays navy. Starfield behind it. Stat cards use
`BrutalCard tone=cream hover`. The chrome-style tabs keep their shape
but get the shared timing. Table rows keep their hover tint.

**Login, signup, profile settings.** Navy page with starfield, the
form card centered, inputs on the shared style with a yellow focus
ring, `BrutalButton` for submit, `LoadingStar` for the loading state.

**About, privacy, terms.** Shared heading scale and card tone. Nothing
else.

### What is deliberately not changed

- Anything in `src/app/admin` or `src/components/admin`
- `prisma/`, `src/data/`, `src/lib/`, every API route
- Copy on the pricing cards (it is legally careful on purpose)
- The independence disclaimer text
- `package.json`

## Build order

Each step is one commit and leaves the site working. Screenshots at
1440 px and 390 px after every step. Lint, type-check and the existing
Vitest suite run before each commit.

1. **Foundation.** Tokens, fonts, starfield utilities, keyframes and
   reduced-motion rules in `globals.css`. Fonts wired in `layout.tsx`.
   `template.tsx` for the page fade. Nothing visibly changes except the
   typeface and page fade.
2. **Primitives.** `BrutalButton`, `Chip`, `Reveal`, `Starfield`,
   `LoadingStar`, and the `BrutalCard` props. Not yet used anywhere.
3. **Nav and footer.** Sticky hide/reveal, blur, active indicator,
   mobile menu, footer spacing.
4. **Home and pricing.** Hero sequence, feature grid, pricing depth.
5. **Public content pages.** Olympiads ladder, about, training list,
   question cards, search and filters, FRQ list.
6. **Logged-in pages.** Question view, practice, navigation, dashboard,
   login, signup, profile settings, FRQ detail and grade result.
7. **Sweep.** Grep for any remaining pasted button strings or raw
   pixel shadows. Final screenshots. Build.

## How you check it

- Run `npm run dev`, open the site, and scroll. The nav should hide as
  you go down and return as you come up.
- Open the home page fresh. The hero should stagger in once.
- Hover a card: it lifts. Hover a button: it presses.
- Shrink the window to phone width: a menu button replaces the links.
- Turn on "Reduce motion" in your OS accessibility settings and reload:
  everything still shows, nothing animates.
- `npm run build` finishes clean.

## Undo and keep

- **Undo:** `git checkout main`. The branch stays around if you change
  your mind later.
- **Keep:** open a pull request from `feature/design-glowup` into
  `main` and merge it. I will walk you through this when we get there.

## What changed during the build

Decisions Prameet made after seeing the first steps, which override the
plan above where they differ:

- **Headings keep the original bold system font.** Bricolage Grotesque
  was tried and reverted. Only the body text uses Instrument Sans.
- **The pricing section is untouched.** Its copy, layout and colors are
  exactly as on `main`. It lives only on `/pricing` now.
- **The home page has no pricing block.** It was rebuilt as: a staggered
  hero with real counts from the catalog, a numbered three-step guide, a
  question-bank preview showing an actual question with all ten topic
  chips, free-response and progress cards, a "coming soon" strip, and a
  closing call to action that links to the pricing page.
- **Slightly softer borders.** Cards, buttons and inputs use a 3 px
  border instead of 4 px. Chips and small controls stay at 2 px.
- **Tailwind v4 note.** Its translate utilities set the CSS `translate`
  property, so every hover transition lists `translate`, not
  `transform`. New color tokens must be used by a class somewhere or
  Tailwind will not emit them; inline `var()` references alone are not
  enough.
- **Dev cache.** The Turbopack dev filesystem cache is disabled in
  `next.config.ts` because it kept serving stale compiled CSS.
- **Not deleted, but now unused:** `src/components/FilterBar.tsx` and
  `src/components/FrqPractice.tsx` were already unreferenced before this
  work. They were left in place; removing them is a separate decision.
