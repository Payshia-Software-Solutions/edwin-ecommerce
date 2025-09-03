
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/collections/product-card';

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="mt-24">
      <h2 className="text-2xl font-bold text-center mb-8 uppercase tracking-wider">
        You may also like
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
