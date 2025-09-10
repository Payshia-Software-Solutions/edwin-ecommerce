
"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasSale = product.salePrice && product.salePrice < product.price;
  const href = `/product/${product.slug || product.id}`;

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
