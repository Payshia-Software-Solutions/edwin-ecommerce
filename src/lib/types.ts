
export type ApiProductImage = {
  id: string;
  product_id: string;
  product_variant_id: string;
  company_id: string;
  image_type: string;
  img_url: string;
  created_at: string;
  created_by: string;
};

export type ApiVariantDetail = {
  id: string;
  sku: string;
  product_id: string;
  price: string;
  cost_price: string;
  min_price: string;
  wholesale_price: string;
  color: string;
  size: string;
  created_at: string;
  updated_at: string;
  color_id: string;
  size_id: string;
  barcode: string;
  company_id: string;
};

export type ApiVariant = {
  variant: ApiVariantDetail;
  images: ApiProductImage[];
};

export type ApiProductDetail = {
  id: string;
  name: string;
  tamil_name: string;
  display_name: string;
  description: string;
  category: string;
  price: string;
  cost_price: string;
  min_price: string;
  wholesale_price: string;
  stock_unit: string;
  status: string;
  created_at: string;
  updated_at: string;
  lead_time_days: string;
  reorder_level_qty: string;
  sinhala_name: string;
  print_name: string;
  item_type: string;
  base_location: string;
  product_image_url: string;
  recipe_type: string;
  barcode: string;
  available_locations: string;
  category_id: string;
  brand_id: string;
  supplier: string;
  company_id: string;
  slug: string | null;
};

export type ApiProduct = {
  product: ApiProductDetail;
  product_images: ApiProductImage[];
  variants: ApiVariant[];
};

export type ApiResponse = {
    company_id: string;
    total_products: number;
    products: ApiProduct[];
}

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  description: string;
  images: string[];
  sizes: string[];
  featured?: boolean;
  tags?: string[];
  data_ai_hint?: string;
  colors?: number;
  fit?: string;
  variants: ApiVariant[];
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  selectedSize: string;
};

export type Collection = {
  id: string;
  title: string;
  description: string;
  cover_image_url: string;
  status: string;
  created_at: string;
  updated_at: string;
  company_id: string;
};
