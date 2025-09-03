
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
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  selectedSize: string;
};
