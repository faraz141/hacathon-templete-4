'use client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '@/components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function PaymentPage({
  searchParams,
}: {
  searchParams: { orderId: string };
}) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm orderId={searchParams.orderId} />
    </Elements>
  );
}
