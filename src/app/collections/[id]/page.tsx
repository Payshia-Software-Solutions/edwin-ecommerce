
'use client';

import { useState, useEffect } from 'react';
import { getProductsByCollectionId } from '@/lib/data';
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/collections/product-card';
import { Button } from '@/components/ui/button';
import { FilterSidebarContent } from '@/components/collections/filter-sidebar';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

type CollectionPageProps = {
  params: {
    id: string;
  };
};

export default function CollectionPage({ params }: CollectionPageProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await getProductsByCollectionId(params.id);
      setProducts(fetchedProducts);
    }
    loadProducts();
  }, [params.id]);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold uppercase tracking-wider">Collection</h1>
          <p className="text-muted-foreground mt-1">Explore our curated seasonal essentials</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-64 hidden md:block">
            <FilterSidebarContent />
          </aside>
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
               <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <SlidersHorizontal className="h-4 w-4" />
                      <span className="sr-only">Filters</span>
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
              <div className="relative w-full max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-9" />
              </div>
            </div>
             {products.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products found in this collection.</p>
              </div>
            )}
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
