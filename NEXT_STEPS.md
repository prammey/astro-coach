# Next Steps

Things that are built but still need a setup step or a decision before they
fully work. Newest first. Tick items off (or delete them) as they're done.

---

## Emails for password reset (added 2026-10-01)

**Why:** Password reset is built (`/forgot-password` → email → `/reset-password`),
but Supabase's built-in email service only sends to members of your Supabase
team, a few per hour. Real students won't get the reset email until a real
sender is connected.

**Already done:**
- [x] Supabase redirect URLs added: `https://astrocoach.vercel.app/reset-password`
      and `http://localhost:3000/reset-password`
- [x] Supabase "Password changed" security email turned on

**To do (about 5 minutes):**
- [ ] **Gmail:** go to myaccount.google.com → Security, turn on
      **2-Step Verification**.
- [ ] **Gmail:** on the same page, search **"App passwords"**, create one named
      "Astro Coach", and copy the 16-character code. Never put it in the code
      or in git.
- [ ] **Supabase** → astro coach → Authentication → Emails → **SMTP Settings**,
      turn on custom SMTP:
  - Sender email: your Gmail address
  - Sender name: `Astro Coach`
  - Host: `smtp.gmail.com`
  - Port: `465`
  - Username: your Gmail address
  - Password: the 16-character app password
- [ ] **Supabase** → Authentication → **Rate Limits**: raise "emails sent per
      hour" to about 30.
- [ ] **Test it:** ask Claude to run the full reset flow with your email
      (request link → email arrives → set new password → log in →
      "password changed" email arrives).

## "Pro cancelled" confirmation email (decision needed)

**Why:** Cancel Pro / Resume Pro works on the dashboard plan card, but no email
goes out. Stripe's settings (Billing → Subscriptions and emails) have **no**
cancellation email — only trial, renewal, expiring-card and failed-payment
emails.

**Suggested fix:** the cancel route sends its own email from your Gmail
("Your Pro ends on Oct 30") the moment the student clicks Cancel.
- [ ] Approve installing one package: `nodemailer`
- [ ] Add two Vercel env vars: your Gmail address and the same app password
      as above (needs the Gmail steps first)
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
