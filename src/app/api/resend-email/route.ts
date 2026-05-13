import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name, whatsappLink, zoomLink, invoiceNumber } = await req.json();

    if (!email || !name) {
      return NextResponse.json({ error: 'Email and name are required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Yoga Delight <hello@yourdomain.com>',
      to: [email],
      subject: 'Welcome to Fertility Yoga & Wellness! Your Access Details Inside',
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; color: #1E293B; background-color: #FAFAFA; padding: 40px; border-radius: 12px; border: 1px solid #E0F2FE;">
          <h1 style="color: #6366F1; margin-bottom: 24px;">Welcome, ${name}! 🌸</h1>
          
          <p style="font-size: 16px; line-height: 1.5;">Thank you for registering for the Fertility Yoga & Wellness Program. We are thrilled to guide you on this journey.</p>
          
          <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; border-left: 4px solid #10B981; margin: 32px 0;">
            <h2 style="margin-top: 0; color: #10B981; font-size: 18px;">Step 1: Join the WhatsApp Group</h2>
            <p style="font-size: 14px;">This is our only communication channel. Link expires in 24 hours.</p>
            <a href="${whatsappLink}" style="display: inline-block; background-color: #10B981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 12px;">Join WhatsApp Group</a>
          </div>

          <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; border-left: 4px solid #6366F1; margin: 32px 0;">
            <h2 style="margin-top: 0; color: #6366F1; font-size: 18px;">Step 2: Save the Class Link</h2>
            <p style="font-size: 14px;">Classes are daily from 4:00 PM to 5:00 PM IST on Zoom.</p>
            <p style="font-family: monospace; background-color: #F1F5F9; padding: 12px; border-radius: 4px;">${zoomLink}</p>
          </div>

          <p style="font-size: 14px; color: #64748B;">Invoice Number: ${invoiceNumber}</p>
          
          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 32px 0;" />
          
          <p style="font-size: 12px; color: #94A3B8; text-align: center;">
            &copy; ${new Date().getFullYear()} Dr. Madhavi Soriya. All rights reserved.<br/>
            Designed & Developed by Vyntic AI
          </p>
        </div>
      `
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
