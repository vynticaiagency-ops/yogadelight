import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabaseAdmin } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const bodyText = await req.text();
    const signature = req.headers.get('x-razorpay-signature');

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET || '')
      .update(bodyText)
      .digest('hex');

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(bodyText);

    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;
      
      const { data: user, error: userError } = await supabaseAdmin
        .from('User')
        .select('*')
        .eq('razorpayOrderId', orderId)
        .single();

      if (user && user.paymentStatus !== 'COMPLETED') {
        const accessToken = uuidv4();
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        
        await supabaseAdmin
          .from('User')
          .update({
            paymentStatus: 'COMPLETED',
            razorpayPaymentId: payment.id,
            accessToken: accessToken,
            accessTokenExpiry: expiryDate.toISOString(),
            subscriptionStart: new Date().toISOString(),
            subscriptionEnd: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
            updatedAt: new Date().toISOString()
          })
          .eq('id', user.id);

        // Trigger Resend email here if needed
      }
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
