import { products } from '@/lib/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import ProductDetailsClient from '@/components/ProductDetailsClient';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id, 10));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            data-ai-hint={product.keywords}
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{product.category}</p>
            <h1 className="text-4xl lg:text-5xl font-headline font-bold">{product.name}</h1>
            <p className="text-3xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          </div>
          
          <Separator />

          <ProductDetailsClient product={product} />

          <Separator />

          <div>
            <h3 className="text-lg font-headline font-semibold">Description</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
    return products.map((product) => ({
      id: product.id.toString(),
    }))
  }
