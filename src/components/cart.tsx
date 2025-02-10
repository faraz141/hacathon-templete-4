'use client';

import React, { useContext, useState } from 'react';
import CartContext from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CartItem {
  product: string;
  name: string;
  price: number;
  image: string;
  oldPrice: string;
  stock: number;
  Category: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);
  const router = useRouter();
  const [deletedMessage, setDeletedMessage] = useState<string | null>(null);

  const increaseQty = (cartItem: CartItem) => {
    if (cartItem.quantity >= cartItem.stock) return;
    addItemToCart({ ...cartItem, quantity: 1 });
  };

  const decreaseQty = (cartItem: CartItem) => {
    if (cartItem.quantity <= 1) return;
    addItemToCart({ ...cartItem, quantity: -1 });
  };

  const handleDelete = (productId: string, productName: string) => {
    deleteItemFromCart(productId);
    setDeletedMessage(`${productName} has been removed from your cart.`);

    // Hide message after 3 seconds
    setTimeout(() => {
      setDeletedMessage(null);
    }, 3000);
  };

  const handleCheckout = () => router.push('/checkout');

  const amountWithoutTax =
    cart?.cartItems?.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0,
    ) || 0;

  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);
  const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      {/* Deleted Message Notification */}
      {deletedMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white py-3 px-6 rounded-lg shadow-lg">
          {deletedMessage}
        </div>
      )}

      {/* Header Section */}
      <div className="py-16 w-full flex items-center justify-center bg-[#f6f5ff]">
        <div className="w-[80%] lg:w-[1177px]">
          <h1 className="text-4xl my-2 font-bold text-[#001F54]">
            {cart?.cartItems?.length || 0} Item(s) in Cart
          </h1>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-[#3F509E] hover:text-[#2C3A6E]">
              Home
            </Link>
            <span className="text-black mx-2">.</span>
            <span className="text-[#FB2E86]">Shopping Cart</span>
          </div>
        </div>
      </div>

      {cart?.cartItems?.length > 0 ? (
        <div className="my-10 w-[80%] lg:w-[1177px]">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Cart Items */}
            <main className="md:w-3/4">
              <div className="border border-gray-200 bg-white shadow-lg rounded-lg p-6">
                {cart.cartItems.map((item) => (
                  <div
                    key={item.product}
                    className="py-4 border-b last:border-b-0"
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden border">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#3F509E]">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.Category}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQty(item)}
                          className="w-8 h-8 rounded bg-[#3F509E] text-white hover:bg-[#2C3A6E]"
                        >
                          -
                        </button>
                        <span className="w-12 text-center border rounded">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQty(item)}
                          className="w-8 h-8 rounded bg-[#3F509E] text-white hover:bg-[#2C3A6E]"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-semibold text-[#001F54]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleDelete(item.product, item.name)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </main>

            {/* Order Summary */}
            <aside className="md:w-1/4">
              <div className="border border-gray-200 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-bold text-[#001F54] mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${amountWithoutTax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (15%):</span>
                    <span>${taxAmount}</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-3">
                    <span>Total:</span>
                    <span>${totalAmount}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Link
                    href="/"
                    className="block text-center py-2 px-4 text-[#3F509E] border border-[#3F509E] rounded-lg hover:bg-[#3F509E] hover:text-white transition-colors"
                  >
                    Continue Shopping
                  </Link>
                  <button
                    onClick={handleCheckout}
                    className="w-full py-2 px-4 bg-[#FB2E86] text-white rounded-lg hover:bg-[#D1266E] transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      ) : (
        <div className="my-20 text-center">
          <h2 className="text-2xl font-bold text-[#001F54] mb-4">
            Your cart is empty
          </h2>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-[#3F509E] text-white rounded-lg hover:bg-[#2C3A6E]"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
