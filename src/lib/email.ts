// Server-only email sending, used to notify the maintainer when a learner
// reports a problem with a question.
//
// Uses Resend's REST API directly rather than adding an SDK dependency.
// If RESEND_API_KEY is not configured the send is skipped quietly: a
// report is already saved to the database by that point, so a missing
// email key should never cost us the report itself.

type ReportEmailInput = {
  questionId: string;
  reason: string;
  details: string | null;
  userEmail: string | null;
  userId: string | null;
  siteUrl: string;
};

// Human-readable labels for the preset reasons, so the email subject reads
// like a sentence instead of a database value.
const REASON_LABELS: Record<string, string> = {
  needs_image: 'Needs an image',
  wrong_answer: 'Wrong answer',
  wrong_explanation: 'Wrong explanation',
  typo: 'Typo or formatting',
  other: 'Something else',
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function sendReportEmail(input: ReportEmailInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.REPORT_EMAIL_TO;

  if (!apiKey || !to) return; // Not configured — reports still get stored.

  // Resend's shared sender works without verifying a domain, which keeps
  // setup to a single API key. Override once a real domain is verified.
  const from = process.env.REPORT_EMAIL_FROM || 'Astro Coach <onboarding@resend.dev>';

  const label = REASON_LABELS[input.reason] ?? input.reason;
  const questionUrl = `${input.siteUrl}/training/${input.questionId}`;
  const reporter = input.userEmail
    ? `${input.userEmail} (${input.userId})`
    : 'Anonymous (not signed in)';

  const html = `
    <h2>Question report: ${escapeHtml(label)}</h2>
    <p><strong>Question:</strong> ${escapeHtml(input.questionId)}<br/>
       <a href="${escapeHtml(questionUrl)}">Open the question</a></p>
    <p><strong>Reported by:</strong> ${escapeHtml(reporter)}</p>
    <p><strong>Details:</strong><br/>${
      input.details ? escapeHtml(input.details).replace(/\n/g, '<br/>') : '<em>None given</em>'
    }</p>
    <hr/>
    <p style="color:#666;font-size:12px">
      Review open reports at <a href="${escapeHtml(input.siteUrl)}/admin/reports">${escapeHtml(input.siteUrl)}/admin/reports</a>
    </p>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `[Astro Coach] ${label} — ${input.questionId}`,
      html,
      // Let replies go straight back to the reporter when we have their address.
      ...(input.userEmail ? { reply_to: input.userEmail } : {}),
    }),
  });

  if (!response.ok) {
    // Surfaced in server logs only. The caller deliberately does not fail
    // the request over this.
    const body = await response.text().catch(() => '');
    throw new Error(`Resend responded ${response.status}: ${body}`);
  }
}
