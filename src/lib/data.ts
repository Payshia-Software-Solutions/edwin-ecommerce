
import type { Product, ApiResponse, ApiProduct, Collection } from './types';

function transformApiProductToProduct(apiProduct: ApiProduct): Product {
  const imgBaseUrl = process.env.IMG_BASE_URL || 'https://content-provider.payshia.com/payshia-erp';
  const firstVariant = apiProduct.variants[0];

  // Use product_images as a fallback if variant images are not available
  const imagePool = firstVariant?.images.length > 0 ? firstVariant.images : apiProduct.product_images;
  
  const allSizes = apiProduct.variants.map(v => v.variant.size).filter((v, i, a) => a.indexOf(v) === i);

  return {
    id: apiProduct.product.id,
    name: apiProduct.product.display_name,
    category: apiProduct.product.category,
    price: parseFloat(apiProduct.product.price),
    description: apiProduct.product.description,
    images: imagePool.map(img => `${imgBaseUrl}${img.img_url}`),
    sizes: allSizes,
    featured: true, // You might want to determine this based on your API data
    data_ai_hint: apiProduct.product.name.toLowerCase(),
    colors: new Set(apiProduct.variants.map(v => v.variant.color)).size,
    fit: 'Regular Fit', // This might need to be determined from your API data
    variants: apiProduct.variants,
  };
}


export async function getProducts(): Promise<Product[]> {
  const companyId = process.env.COMPANY_ID || '4';
  const apiBaseUrl = process.env.API_BASE_URL || 'https://server-erp.payshia.com';

  if (!companyId || !apiBaseUrl) {
    console.error("Missing environment variables for API access");
    return [];
  }

  try {
    const response = await fetch(`${apiBaseUrl}/products/with-variants/by-company?company_id=${companyId}`, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    const data: ApiResponse = await response.json();
    return data.products.map(transformApiProductToProduct);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find(p => p.id === id);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getProducts();
  return products.filter(p => p.featured);
}

export async function getAccessoryProducts(): Promise<Product[]> {
    const products = await getProducts();
    return products.filter(p => p.category === 'Accessories');
}

export async function getWomenProducts(): Promise<Product[]> {
    const products = await getProducts();
    const womenCategories = ['Dresses', 'Tops', 'Skirts', 'T-SHIRT'];
    return products.filter(p => womenCategories.includes(p.category));
}

export async function getMenProducts(): Promise<Product[]> {
    const products = await getProducts();
    const menCategories = ['Jackets', 'Pants', 'T-Shirts', 'Shoes', 'Shorts', 'T-SHIRT'];
    return products.filter(p => menCategories.includes(p.category));
}

export async function getCollections(): Promise<Collection[]> {
  const companyId = process.env.COMPANY_ID || '4';
  const apiBaseUrl = process.env.API_BASE_URL || 'https://server-erp.payshia.com';

  if (!companyId || !apiBaseUrl) {
    console.error("Missing environment variables for API access");
    return [];
  }

  try {
    const response = await fetch(`${apiBaseUrl}/collections/company?company_id=${companyId}`, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error(`Failed to fetch collections: ${response.statusText}`);
    }
    const data: Collection[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
}
