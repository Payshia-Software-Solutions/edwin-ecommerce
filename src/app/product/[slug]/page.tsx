

import { getProductBySlug, getProducts } from '@/lib/data';
import { ProductView } from '@/components/product/product-view';
import { RelatedProducts } from '@/components/product/related-products';
import { notFound } from 'next/navigation';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }
  
  const allProducts = await getProducts();


  // Exclude the current product from the related products list
  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductView product={product} />
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
