const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without sending anything.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 5000);
  const budget = clean(body.budget, 40);

  if (!EMAIL_RE.test(email)) return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  if (!message) return Response.json({ error: "Please write a message." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Sen Studio <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return Response.json({ error: "The contact form isn't configured yet. Please email us directly." }, { status: 500 });
  }

  const rows: [string, string][] = [
    ["Email", email],
    ["Phone", phone || "—"],
    ["Budget", budget || "—"],
  ];
  const html = `
    <h2 style="font-family:sans-serif">New enquiry from arghyasen.in</h2>
    <table style="font-family:sans-serif;font-size:14px">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td>${escape(v)}</td></tr>`).join("")}
    </table>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escape(message)}</p>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New enquiry from ${email}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend error", res.status, await res.text());
    return Response.json({ error: "Couldn't send your message. Please try again." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
