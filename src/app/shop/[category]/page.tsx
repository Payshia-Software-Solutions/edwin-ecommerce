
import { getProducts } from '@/lib/data';
import { ProductCard } from '@/components/collections/product-card';
import { Button } from '@/components/ui/button';
import { FilterSidebar } from '@/components/collections/filter-sidebar';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { Input } from '@/components/ui/input';
import { PlusCircle, Search } from 'lucide-react';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const allProducts = await getProducts();
  const categoryName = decodeURIComponent(params.category);
  
  const products = allProducts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase()); 

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold uppercase tracking-wider">{categoryName}</h1>
          <p className="text-muted-foreground mt-1">Explore our curated seasonal essentials</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <FilterSidebar />
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-9" />
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create
                </Button>
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
