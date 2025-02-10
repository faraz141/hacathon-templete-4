import { sanityClient } from '@/lib/sanity';
import { Order } from '@/types';

interface Params {
  params: { orderId: string };
}

export default async function ConfirmationPage({ params }: Params) {
  const order: Order = await sanityClient.fetch(
    `*[_type == "order" && _id == $orderId][0]{
      _id,
      total,
      customer->{name, email},
      items[]->{product->{name}, quantity}
    }`,
    { orderId: params.orderId },
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
      <p className="mb-2">Order ID: {order._id}</p>
      <p className="mb-2">Total: ${order.total}</p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Items:</h2>
        {order.items.map((item: any) => (
          <div key={item._id} className="mb-2">
            {item.product.name} x {item.quantity}
          </div>
        ))}
      </div>
    </div>
  );
}
