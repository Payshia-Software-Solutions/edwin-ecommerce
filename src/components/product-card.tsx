"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="block h-full group">
      <div className="flex flex-col h-full overflow-hidden rounded-lg bg-background dark:bg-black">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            data-ai-hint={product.data_ai_hint}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 pt-3">
          <h3 className="font-medium">{product.name}</h3>
          {(product.colors || product.fit) && (
            <div className="text-sm text-muted-foreground mt-1">
              {product.colors && <p>{product.colors === 1 ? `${product.colors} Color` : `${product.colors} Colors`}</p>}
              {product.fit && <p>{product.fit}</p>}
            </div>
          )}
          <p className="font-semibold mt-1">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
