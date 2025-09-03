'use client';

import ProductCard from '@/components/ProductCard';
import { useWishlist } from '@/contexts/WishlistContext';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  const { getWishlistedProducts } = useWishlist();
  const wishlistedProducts = getWishlistedProducts();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-headline mb-6">My Wishlist</h1>
      {wishlistedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-lg">
          <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">Your wishlist is empty</h2>
          <p className="mt-2 text-muted-foreground">
            Browse our collections and add items you love.
          </p>
          <Link href="/" className="mt-6 inline-block bg-accent text-accent-foreground px-6 py-2 rounded-md font-semibold">
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
}
