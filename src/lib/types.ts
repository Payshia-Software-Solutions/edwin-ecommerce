export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  sizes: string[];
  colors: string[];
  keywords: string;
};

export type CartItem = Product & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type Category = 'Tops' | 'Bottoms' | 'Dresses' | 'Outerwear' | 'Accessories';
