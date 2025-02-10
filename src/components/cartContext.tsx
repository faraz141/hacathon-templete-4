'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the structure for cart items
interface CartItem {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
  oldPrice: number;
  quantity: number; // Add quantity to track how many items are in the cart
}

interface CartContextType {
  cart: CartItem[];
  addItemToCart: (product: Omit<CartItem, 'quantity'>) => void; // Accepts product without quantity
  deleteItemFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart (or update quantity if already in cart)
  const addItemToCart = (product: Omit<CartItem, 'quantity'>) => {
    console.log('Adding product:', product);

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // If the item already exists, update its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      // If the item doesn't exist, add it to the cart with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const deleteItemFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, deleteItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
