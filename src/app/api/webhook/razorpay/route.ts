import { NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/lib/prisma';
import { v4 as uuidv4 } from 'uuid';

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
      
      // We might have already updated the user in /api/payment/verify
      // But this acts as a robust async fallback
      
      const user = await prisma.user.findFirst({
        where: { razorpayOrderId: orderId }
      });

      if (user && user.paymentStatus !== 'COMPLETED') {
        const accessToken = uuidv4();
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        
        await prisma.user.update({
          where: { id: user.id },
          data: {
            paymentStatus: 'COMPLETED',
            razorpayPaymentId: payment.id,
            accessToken: accessToken,
            accessTokenExpiry: expiryDate,
            subscriptionStart: new Date(),
            subscriptionEnd: new Date(new Date().setMonth(new Date().getMonth() + 1))
          }
        });

        // Trigger Resend email here if needed
      }
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
