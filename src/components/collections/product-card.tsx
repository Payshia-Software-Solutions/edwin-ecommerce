"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="block group">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-gray-100 dark:bg-zinc-800">
        <Image
          src={product.images[0]}
          alt={product.name}
          data-ai-hint={product.data_ai_hint || 'product image'}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.featured && (
          <Badge className="absolute top-2 left-2 bg-black text-white rounded-sm">NEW</Badge>
        )}
      </div>
      <div className="pt-4 text-center">
        <h3 className="font-medium truncate">{product.name}</h3>
        <p className="font-semibold mt-1">LKR {product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
