'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { ProductFilters } from '@/components/ProductFilters';
import { products } from '@/lib/products';
import { Category } from '@/lib/types';

const maxPrice = Math.ceil(Math.max(...products.map(p => p.price)));

export default function Home() {
  const [filters, setFilters] = useState({
    search: '',
    category: 'All',
    priceRange: [0, maxPrice] as [number, number],
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchMatch =
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase());
      const categoryMatch = filters.category === 'All' || product.category === filters.category;
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

      return searchMatch && categoryMatch && priceMatch;
    });
  }, [filters]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-2xl font-headline mb-4">Filters</h2>
            <ProductFilters filters={filters} onFilterChange={setFilters} />
          </div>
        </aside>

        <section className="lg:col-span-3">
            <h1 className="text-4xl font-headline mb-2">Discover Your Style</h1>
            <p className="text-muted-foreground mb-6">
                Showing {filteredProducts.length} of {products.length} products.
            </p>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold">No products found</h2>
              <p className="text-muted-foreground mt-2">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
