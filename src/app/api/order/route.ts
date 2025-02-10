import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib';

export async function POST(request: Request) {
  try {
    const { items, customer, total } = await request.json();

    const sanityOrder = {
      _type: 'order',
      customer: {
        _type: 'customer',
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
      },
      items: items.map((item: any) => ({
        _type: 'orderItem',
        product: {
          _type: 'reference',
          _ref: item.productId,
        },
        quantity: item.quantity,
        price: item.price,
      })),
      total,
      paymentMethod: customer.paymentMethod,
      shippingMethod: customer.shippingMethod,
      status: 'pending',
    };

    const createdOrder = await sanityClient.create(sanityOrder);
    return NextResponse.json({ orderId: createdOrder._id });
  } catch (error) {
    return NextResponse.json(
      { error: 'Order creation failed' },
      { status: 500 },
    );
  }
}
