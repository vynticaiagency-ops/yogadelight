import { NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/lib/prisma';
import { v4 as uuidv4 } from 'uuid';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      email 
    } = body;

    // Verify signature
    const secret = process.env.RAZORPAY_KEY_SECRET || '';
    const generated_signature = crypto
      .createHmac('sha256', secret)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 });
    }

    // Generate unique access token for the thank-you page
    const accessToken = uuidv4();
    // Expiry: 7 days from now
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);

    // Update user in DB
    const user = await prisma.user.update({
      where: { email },
      data: {
        paymentStatus: 'COMPLETED',
        razorpayPaymentId: razorpay_payment_id,
        accessToken: accessToken,
        accessTokenExpiry: expiryDate,
        subscriptionStart: new Date(),
        subscriptionEnd: new Date(new Date().setMonth(new Date().getMonth() + 1))
      }
    });

    // Generate Invoice
    const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;
    await prisma.invoice.create({
      data: {
        userId: user.id,
        amount: user.paymentAmount || 1499,
        razorpayPaymentId: razorpay_payment_id,
        invoiceNumber: invoiceNumber
      }
    });

    // Here we would also trigger the Resend email, but we'll leave that to the webhook or trigger it directly.
    // For now, return success and the access token
    return NextResponse.json({ 
      success: true, 
      accessToken: accessToken 
    });

  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}
