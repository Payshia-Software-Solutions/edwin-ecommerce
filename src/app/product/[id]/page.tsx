
import { getProductById, getProducts } from '@/lib/data';
import { ProductView } from '@/components/product/product-view';
import { RelatedProducts } from '@/components/product/related-products';
import { notFound } from 'next/navigation';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);
  const allProducts = await getProducts();

  if (!product) {
    notFound();
  }

  // Exclude the current product from the related products list
  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductView product={product} />
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
