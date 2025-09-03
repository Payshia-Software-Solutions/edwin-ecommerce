"use client";

import type { Product } from '@/lib/types';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { products } from '@/lib/products';
import { useToast } from '@/hooks/use-toast';


interface WishlistContextType {
  wishlistItems: number[];
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  getWishlistedProducts: () => Product[];
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);
  const { toast } = useToast();

  const toggleWishlist = (productId: number) => {
    setWishlistItems(prevItems => {
      const isWishlisted = prevItems.includes(productId);
      if (isWishlisted) {
        toast({
            title: "Removed from wishlist",
            description: "The item has been removed from your wishlist.",
        })
        return prevItems.filter(id => id !== productId);
      } else {
        toast({
            title: "Added to wishlist",
            description: "The item has been added to your wishlist.",
        })
        return [...prevItems, productId];
      }
    });
  };
  
  const isInWishlist = (productId: number) => {
    return wishlistItems.includes(productId);
  };

  const getWishlistedProducts = () => {
    return products.filter(product => wishlistItems.includes(product.id));
  };


  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, isInWishlist, getWishlistedProducts }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
