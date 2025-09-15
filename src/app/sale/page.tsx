
'use client';

import { useState, useEffect } from 'react';
import { getProducts } from '@/lib/data';
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/collections/product-card';
import { Button } from '@/components/ui/button';
import { FilterSidebarContent } from '@/components/collections/filter-sidebar';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function SalePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const allProducts = await getProducts();
      setProducts(allProducts.filter(p => p.salePrice));
    }
    loadProducts();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold uppercase tracking-wider">Last Chance</h1>
          <p className="text-muted-foreground mt-1">Explore our curated seasonal essentials</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-64 hidden md:block">
            <FilterSidebarContent />
          </aside>
          <main className="flex-1">
             <div className="flex justify-start items-center mb-6 md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="p-4">
                    <FilterSidebarContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-black text-white hover:bg-black/80 rounded-full font-bold px-10 uppercase">
                Load More
              </Button>
            </div>
          </main>
        </div>
      </div>
      <NewsletterSignup />
    </>
  );
}
