# Next Steps

Things that are built but still need a setup step or a decision before they
fully work. Newest first. Tick items off (or delete them) as they're done.

---

## After the 2026-11-20 launch review (branch `fix/launch-review`)

- [ ] **Apply two database migrations** (Row Level Security on every table,
      and one-grant-per-checkout for bought credits). The code works with
      or without them. Claude checked on 2026-11-21: every table is owned by
      `postgres`, the app connects as `postgres` (bypasses RLS), RLS is
      already on for all 18 tables, and there are no duplicate credit
      grants, so this is safe. Claude's safety check would not let it run
      the command itself. In the project folder, run:
      `npx prisma migrate deploy`
      then check the live site still loads the question bank and dashboard.
- [x] **Vercel env vars:** `ADMIN_USER_IDS` is set; the unused
      `ADMIN_EMAILS` was deleted on 2026-11-21. (If /admin ever says you're
      not an admin, add your Supabase user UID to `ADMIN_USER_IDS`.)
- [ ] **Pricing switches automatically on 2027-01-01** to $7.99 (the page
      and dashboard now follow the founding deadline). Nothing to do, just
      know it will happen.

## Launch blockers (found in the 2026-10-01 full-site check)

- [x] **Question permissions recorded.** All 734 MCQs are marked
      `permissionStatus: "permission-granted"` (USAAAO and IAAC confirmed
      2026-09-24, BAAO confirmed by the owner 2026-10-02).
- [x] **Re-run `npm run seed:mcq`** (done 2026-10-02) so the database copy of those
      permission values matches the files (nothing on the site reads them).
- [ ] **Stripe is still in test mode.** No real payments until you switch
      to live keys, which means new Vercel env vars and a live webhook.
- [ ] **OAAO has no verified official website**, so its Olympiad Guide card
      has no link. Add the URL in `src/data/olympiads.ts` if you have one,
      or consider dropping the card.

## Assets that would make the site look better (optional)

- [x] **Constants sheet PDF**: added 2026-11-21 at
      `public/resources/astro-coach-constants-sheet.pdf` (CODATA 2018 / IAU
      2015 values); the Training page links to it.
- [ ] **A custom domain** (e.g. astrocoach.org): unlocks Google sign-in,
      branded email, and looks more trustworthy than *.vercel.app.

## Auth emails: fine for now, real sender before a big launch (updated 2026-10-02)

**Status:** Supabase's built-in sender *does* reach real students. Friends'
accounts show "Confirmed at", and they couldn't log in until they clicked
the link. Keep **"Confirm email" ON**: it stops fake accounts from farming
the 3 free AI grades.

**The catch:** the built-in sender allows only a few emails per hour. That's
fine for friends, but if many students sign up in the same hour (after
posting the site somewhere), most won't get their confirmation or reset
email.

**Already done:**
- [x] Supabase redirect URLs added: `https://astrocoach.vercel.app/reset-password`
      and `http://localhost:3000/reset-password`
- [x] Supabase "Password changed" security email turned on
- [x] Tried Gmail SMTP with an app password (2026-10-02): Google wouldn't
      allow it. Dropped.

**To do:**
- [ ] **Test password reset once** with your own email (request link →
      email arrives → set new password → log in).
- [ ] **Before a big launch:** connect a real sender. Brevo's free plan
      (300 emails/day) needs no Google app password: verify your Gmail as
      the sender, then paste Brevo's SMTP host, login and key into Supabase
      → Authentication → Emails → **SMTP Settings**. Then raise Supabase →
      Authentication → **Rate Limits** → "emails sent per hour" to about 30.
      Never put the SMTP key in the code or in git.

## "Pro cancelled" confirmation email (decision needed)

**Why:** Cancel Pro / Resume Pro works on the dashboard plan card, but no email
goes out. Stripe's settings (Billing → Subscriptions and emails) have **no**
cancellation email — only trial, renewal, expiring-card and failed-payment
emails.

**Suggested fix:** the cancel route sends its own email ("Your Pro ends on
Oct 30") the moment the student clicks Cancel.
- [ ] Approve installing one package: `nodemailer`
- [ ] Add Vercel env vars for the SMTP login of whichever real sender you
      set up above (e.g. Brevo). Needs that sender first.
- [ ] Ask Claude to build and test it

## Test Cancel Pro / Resume Pro for real

- [ ] Log in with a test-mode Pro account (Stripe test card 4242 4242 4242 4242)
      → Dashboard → **Cancel Pro** → card says "continues until …" → Stripe test
      dashboard shows "Cancels on …" → **Resume Pro** → back to active.

## Test account deletion end to end

The deletion fix has tests, but no real account has been deleted with it yet.
Do this before switching Stripe to live mode.
- [ ] Throwaway account → subscribe with the test card → upload and grade one
      answer → add a profile picture → Profile Settings → Deactivate.
- [ ] Check: customer gone in the Stripe test dashboard, no rows left for that
      user in Supabase, their storage folder is empty, and their AI usage rows
      still exist with no user ID.

## Turn on Google Analytics

The tag is in the code but only loads when its env var is set.
- [x] `NEXT_PUBLIC_GA_ID` is set in Vercel and the tag is live (checked
      2026-11-21).

## Push and deploy

- [x] Password reset, Cancel Pro and the Gmail privacy line pushed and
      deployed on 2026-10-01.

## Check Supabase health

- [ ] On 2026-10-01 the Supabase project dashboard showed status
      **"Unhealthy"**. If it still says that, look at Supabase → Project →
      Reports/Logs, since logins and the database could fail.
