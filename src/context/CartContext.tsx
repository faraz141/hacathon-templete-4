'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';

// Define types for the product and cart items
interface CartItem {
  product: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  seller: string;
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

interface CartContextType {
  cart: Cart;
  addItemToCart: (item: CartItem) => void;
  deleteItemFromCart: (productId: string) => void;
  clearCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart>({ cartItems: [] });

  // Load cart from localStorage on initialization
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const saveCartToLocalStorage = (newCart: Cart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const addItemToCart = (item: CartItem) => {
    const isItemExist = cart.cartItems.find((i) => i.product === item.product);

    const newCartItems = isItemExist
      ? cart.cartItems.map((i) =>
          i.product === item.product
            ? { ...i, quantity: Math.min(i.quantity + item.quantity, i.stock) }
            : i,
        )
      : [...cart.cartItems, { ...item, quantity: 1 }]; // Set initial quantity to 1

    saveCartToLocalStorage({ cartItems: newCartItems });
  };

  const deleteItemFromCart = (productId: string) => {
    const newCartItems = cart.cartItems.filter((i) => i.product !== productId);
    saveCartToLocalStorage({ cartItems: newCartItems });
  };
  const clearCart = () => {
    saveCartToLocalStorage({ cartItems: [] });
  };
  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, deleteItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
