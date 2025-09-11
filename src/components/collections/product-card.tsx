
"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const hasSale = product.salePrice && product.salePrice < product.price;
  const href = `/product/${product.slug || product.id}`;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // For products with variants, we need a default behavior.
    // Let's assume the first size is the default.
    // A better UX might involve a quick view modal, but for now this works.
    const defaultSize = product.sizes[0];
    if (defaultSize) {
        const variant = product.variants.find(v => v.variant.size === defaultSize);
        const price = variant ? parseFloat(variant.variant.price) : product.price;

        addToCart({
            id: product.id,
            name: product.name,
            price: price,
            image: product.images[0],
            quantity: 1,
            selectedSize: defaultSize,
        });
    } else {
        // Handle products without variants/sizes
         addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: 1,
            selectedSize: 'One Size', // Or some other default
        });
    }
  };

  return (
    <Link href={href} className="block group">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-gray-100 dark:bg-zinc-800">
        <Image
          src={product.images[0] || 'https://placehold.co/600x800.png'}
          alt={product.name}
          data-ai-hint={product.data_ai_hint || 'product image'}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {hasSale && (
          <Badge className="absolute top-2 left-2 bg-primary text-white rounded-sm">SALE</Badge>
        )}
        {product.featured && !hasSale && (
          <Badge className="absolute top-2 left-2 bg-black text-white rounded-sm">NEW</Badge>
        )}
         <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            className="w-full bg-white text-black hover:bg-white/90"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="pt-4 text-center">
        <h3 className="font-medium truncate">{product.name}</h3>
        <div className="font-semibold mt-1 flex justify-center items-baseline gap-2">
          {hasSale ? (
            <>
              <span className="text-muted-foreground line-through">
                LKR {product.price.toFixed(2)}
              </span>
              <span className="text-primary">
                LKR {product.salePrice?.toFixed(2)}
              </span>
            </>
          ) : (
            <span>LKR {product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
