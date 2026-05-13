import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { supabaseAdmin } from '@/lib/supabase';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      fullName, email, phone, age, city, state, country, 
      healthConditions, underTreatment, program, plan, amount: clientAmount 
    } = body;

    // 1. Create or update the pending user
    const userData = {
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
      paymentAmount: clientAmount || 1499,
      updatedAt: new Date().toISOString()
    };

    const { data: user, error: upsertError } = await supabaseAdmin
      .from('User')
      .upsert(userData, { onConflict: 'email' })
      .select()
      .single();

    if (upsertError || !user) {
      console.error('Supabase upsert error:', upsertError);
      throw new Error('Failed to save user data');
    }

    // 2. Create Razorpay Order
    const orderOptions = {
      amount: (clientAmount || 1499) * 100, // amount in smallest currency unit (paise)
      currency: "INR",
      receipt: `rcpt_${user.id}`,
    };

    const order = await razorpay.orders.create(orderOptions);

    // 3. Update user with order ID
    await supabaseAdmin
      .from('User')
      .update({ razorpayOrderId: order.id })
      .eq('id', user.id);

    return NextResponse.json({ 
      orderId: order.id, 
      amount: orderOptions.amount 
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Failed to create payment order' }, { status: 500 });
  }
}
