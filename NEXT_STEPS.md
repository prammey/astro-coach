# Next Steps

Things that are built but still need a setup step or a decision before they
fully work. Newest first. Tick items off (or delete them) as they're done.

---

## Launch blockers (found in the 2026-10-01 full-site check)

- [ ] **BAAO questions have no recorded permission.** USAAAO and IAAC
      questions are now marked `permissionStatus: "permission-granted"`
      (permission confirmed 2026-09-24; files updated 2026-10-02). The 90
      BAAO questions in `src/data/mcq/baao_mcqs.ts` still say
      `"needs-review"`: get (or decide on) permission before launching.
- [ ] **Re-run `npm run seed:mcq`** so the database copy of those
      permission values matches the files (nothing on the site reads them).
- [ ] **Stripe is still in test mode.** No real payments until you switch
      to live keys, which means new Vercel env vars and a live webhook.
- [ ] **OAAO has no verified official website**, so its Olympiad Guide card
      has no link. Add the URL in `src/data/olympiads.ts` if you have one,
      or consider dropping the card.

## Assets that would make the site look better (optional)

- [ ] **Constants sheet PDF**: put it at
      `public/resources/astro-coach-constants-sheet.pdf` and the Training
      page shows a download button (it shows practice tips until then).
- [ ] **A photo or short "who made this" blurb** for the About page, if you
      want it to feel more personal.
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
- [ ] Vercel → astro-coach → Settings → Environment Variables → add
      `NEXT_PUBLIC_GA_ID` = `G-H7F6MQLK9T` (Production) → redeploy.

## Push and deploy

- [x] Password reset, Cancel Pro and the Gmail privacy line pushed and
      deployed on 2026-10-01.

## Check Supabase health

- [ ] On 2026-10-01 the Supabase project dashboard showed status
      **"Unhealthy"**. If it still says that, look at Supabase → Project →
      Reports/Logs, since logins and the database could fail.
