const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  scope?: unknown;
  message?: unknown;
  member?: unknown;
  website?: unknown;
}

function asText(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return Response.json({ error: 'Invalid request.' }, { status: 400 });
    }
    payload = body as ContactPayload;
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (asText(payload.website, 200)) {
    return Response.json({ success: true });
  }

  const name = asText(payload.name, 120);
  const email = asText(payload.email, 254);
  const projectType = asText(payload.projectType, 100);
  const scope = asText(payload.scope, 500);
  const message = asText(payload.message, 5000);
  const member = asText(payload.member, 120);

  if (!name || !EMAIL_PATTERN.test(email) || !projectType || message.length < 10) {
    return Response.json({ error: 'Please check the required fields and try again.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return Response.json(
      { error: 'Email delivery is not configured yet. Please contact us by email.' },
      { status: 503 },
    );
  }

  const text = [
    'New Z-INDEX project inquiry',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Project type: ${projectType}`,
    `Scope / timeline: ${scope || 'Not provided'}`,
    `Team member: ${member || 'Not specified'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const delivery = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: ['info.ayat06@gmail.com'],
        reply_to: email,
        subject: `New Z-INDEX inquiry: ${projectType}`,
        text,
      }),
    });

    if (!delivery.ok) {
      const providerError = (await delivery.json().catch(() => null)) as
        | { message?: string; name?: string }
        | null;
      const detail = providerError?.message || providerError?.name || `HTTP ${delivery.status}`;
      console.error('Contact email provider rejected delivery:', delivery.status, detail);
      return Response.json(
        { error: `Email provider rejected the request: ${detail}` },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact email delivery failed:', error);
    return Response.json({ error: 'We could not send your message. Please try again later.' }, { status: 502 });
  }
}