import React from 'react';
import { useCart } from './cartContext';
import Link from 'next/link';

const Cart = () => {
  const { cart } = useCart();
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <Link href="/">Go back to products</Link>
    </div>
  );
};

export default Cart;
