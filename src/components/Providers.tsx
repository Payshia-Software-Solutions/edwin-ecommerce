'use client';

import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import type { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WishlistProvider>
      <CartProvider>
        {children}
        <Toaster />
      </CartProvider>
    </WishlistProvider>
  );
}
