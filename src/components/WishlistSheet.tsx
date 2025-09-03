'use client';

import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Heart, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WishlistSheet() {
  const { getWishlistedProducts, toggleWishlist, wishlistItems } = useWishlist();
  const wishlistedProducts = getWishlistedProducts();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Heart className="h-6 w-6" />
          {wishlistItems.length > 0 && (
             <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-accent rounded-full">
              {wishlistItems.length}
            </span>
          )}
          <span className="sr-only">Open wishlist</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>My Wishlist ({wishlistedProducts.length})</SheetTitle>
        </SheetHeader>
        {wishlistedProducts.length > 0 ? (
          <div className="flex-grow overflow-y-auto -mr-4 pr-4">
            <div className="space-y-4">
              {wishlistedProducts.map((product) => (
                <div key={product.id} className="flex items-start space-x-4 group">
                  <div className="relative h-24 w-24 rounded-md overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      data-ai-hint={product.keywords}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <Link href={`/product/${product.id}`} className="font-medium hover:underline">
                      {product.name}
                    </Link>
                    <p className="text-sm font-semibold">${product.price.toFixed(2)}</p>
                     <Button variant="outline" size="sm" className="mt-2">
                        <Link href={`/product/${product.id}`}>View Product</Link>
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleWishlist(product.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                    <span className="sr-only">Remove from wishlist</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
             <Heart className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold">Your wishlist is empty</h3>
            <p className="text-muted-foreground">Save items you love to see them here.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
