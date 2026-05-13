import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import prisma from '@/lib/prisma';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      fullName, email, phone, age, city, state, country, 
      healthConditions, underTreatment 
    } = body;

    // 1. Create or update the pending user
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        fullName,
        phone,
        age: age ? parseInt(age) : null,
        city,
        state,
        country,
        healthConditions,
        underTreatment,
        paymentStatus: 'PENDING'
      },
      create: {
        fullName,
        email,
        phone,
        age: age ? parseInt(age) : null,
        city,
        state,
        country,
        healthConditions,
        underTreatment,
        paymentStatus: 'PENDING',
        paymentAmount: 1499
      }
    });

    // 2. Create Razorpay Order
    const orderOptions = {
      amount: 1499 * 100, // amount in smallest currency unit (paise)
      currency: "INR",
      receipt: `rcpt_${user.id}`,
    };

    const order = await razorpay.orders.create(orderOptions);

    // 3. Update user with order ID
    await prisma.user.update({
      where: { id: user.id },
      data: { razorpayOrderId: order.id }
    });

    return NextResponse.json({ 
      orderId: order.id, 
      amount: orderOptions.amount 
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Failed to create payment order' }, { status: 500 });
  }
}
