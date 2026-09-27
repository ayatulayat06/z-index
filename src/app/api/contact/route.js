import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, projectType, scope, message, member } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in your name, email, and message.' },
        { status: 400 }
      );
    }

    const invalidEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    if (invalidEmail) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      return NextResponse.json(
        {
          error: 'Email delivery is not configured yet. Please contact us by email.',
        },
        { status: 503 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'info.ayat06@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h2 style="margin: 0 0 12px;">New Z-INDEX project inquiry</h2>
        <p><strong>Name:</strong> ${String(name).replace(/</g, '&lt;')}</p>
        <p><strong>Email:</strong> ${String(email).replace(/</g, '&lt;')}</p>
        <p><strong>Project type:</strong> ${String(projectType || 'Not specified')}</p>
        <p><strong>Scope / timeline:</strong> ${String(scope || 'Not provided')}</p>
        <p><strong>Team member:</strong> ${String(member || 'Not specified')}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">${String(message).replace(/</g, '&lt;').replace(/\n/g, '<br />')}</div>
      </div>
    `;

    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: String(email),
      subject: `New Z-INDEX inquiry: ${String(projectType || 'General inquiry')}`,
      html,
    });

    if (result.error) {
      throw new Error(result.error.message || 'Delivery failed.');
    }

    return NextResponse.json(
      { success: true, message: 'Your message was delivered successfully.' },
      { status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Server error while sending your message.';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}