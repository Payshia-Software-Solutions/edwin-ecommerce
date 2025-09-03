import { getProducts } from '@/lib/data';
import { ProductCard } from '@/components/collections/product-card';
import { Button } from '@/components/ui/button';

export default function CollectionsPage() {
  const products = getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold uppercase tracking-wider">Our Collection</h1>
        <p className="text-muted-foreground mt-1">Explore our curated seasonal essentials</p>
      </div>
      <main>
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
  );
}
