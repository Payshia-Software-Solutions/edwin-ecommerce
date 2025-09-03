
import { getProducts } from '@/lib/data';
import { ProductCard } from '@/components/collections/product-card';
import { Button } from '@/components/ui/button';
import { FilterSidebar } from '@/components/collections/filter-sidebar';

export default function SalePage() {
  // For now, we'll show all products on the sale page.
  // You might want to filter for products that are actually on sale later.
  const products = getProducts().filter(p => p.salePrice);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-bold uppercase tracking-wider">Last Chance</h1>
        <p className="text-muted-foreground mt-1">Explore our curated seasonal essentials</p>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <FilterSidebar />
        <main className="flex-1">
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
  );
}
