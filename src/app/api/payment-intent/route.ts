import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
});

export async function POST(request: Request) {
  try {
    const { orderId } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Calculate from order total
      currency: 'usd',
      metadata: { orderId },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    return NextResponse.json(
      { error: 'Payment processing failed' },
      { status: 500 },
    );
  }
}
