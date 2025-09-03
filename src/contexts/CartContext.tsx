"use client";

import type { CartItem, Product } from '@/lib/types';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size: string, color: string) => void;
  removeFromCart: (productId: number, size: string, color: string) => void;
  updateQuantity: (productId: number, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (product: Product, selectedSize: string, selectedColor: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1, selectedSize, selectedColor }];
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (productId: number, selectedSize: string, selectedColor: string) => {
    setCartItems(prevItems => prevItems.filter(item =>
      !(item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
    ));
  };

  const updateQuantity = (productId: number, selectedSize: string, selectedColor: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize, selectedColor);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
