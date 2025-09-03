
"use client"

import type { Product } from '@/lib/types';
import { ProductImageGrid } from './product-image-grid';
import { ProductDetails } from './product-details';

interface ProductViewProps {
  product: Product;
}

export function ProductView({ product }: ProductViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <ProductImageGrid images={product.images} alt={product.name} />
      <ProductDetails product={product} />
    </div>
  );
}
