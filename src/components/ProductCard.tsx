'use client';

import type { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  const handleToggleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleWishlist(product.id);
  };

  return (
    <Link href={`/product/${product.id}`} className="group">
      <Card className="overflow-hidden h-full flex flex-col rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0 relative aspect-[3/4]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            data-ai-hint={product.keywords}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full w-10 h-10 bg-card/80 hover:bg-card"
              onClick={handleToggleWishlist}
            >
              <Heart className={cn("h-5 w-5", isInWishlist(product.id) ? 'text-red-500 fill-current' : 'text-foreground')} />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-col items-start flex-grow">
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-muted-foreground text-sm">{product.category}</p>
          </div>
          <div className="w-full flex justify-between items-center mt-4">
             <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
             <Button 
                onClick={handleAddToCart} 
                className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full"
                size="icon">
                <ShoppingBag className="h-5 w-5" />
             </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
