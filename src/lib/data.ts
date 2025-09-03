
import type { Product } from './types';

const products: Product[] = [
  {
    id: '1',
    name: 'Urban Explorer Jacket',
    category: 'Jackets',
    price: 129.99,
    salePrice: 99.99,
    description: 'A versatile jacket for the modern explorer. Waterproof and breathable.',
    images: ['https://images.unsplash.com/photo-1667104445036-a3bd1c8333f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtZW5zJTIwamFja2V0fGVufDB8fHx8MTc1MTczNDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080', 'https://placehold.co/600x800.png', 'https://placehold.co/600x800.png', 'https://placehold.co/600x800.png', 'https://placehold.co/600x800.png', 'https://placehold.co/600x800.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    data_ai_hint: 'mens jacket',
    colors: 2,
    fit: 'Regular Fit',
  },
  {
    id: '2',
    name: 'Classic Denim Jeans',
    category: 'Pants',
    price: 89.99,
    salePrice: 69.99,
    description: 'Timeless skinny jeans made with premium stretch denim for ultimate comfort.',
    images: ['https://images.unsplash.com/photo-1637069585336-827b298fe84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkZW5pbSUyMGplYW5zfGVufDB8fHx8MTc1MTczNDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080', 'https://placehold.co/600x800.png'],
    sizes: ['28', '30', '32', '34', '36'],
    featured: true,
    data_ai_hint: 'denim jeans',
    colors: 1,
    fit: 'Skinny Fit',
  },
  {
    id: '3',
    name: 'Essential Cotton Tee',
    category: 'T-Shirts',
    price: 29.99,
    salePrice: 19.99,
    description: 'A must-have staple. Crafted from ultra-soft pima cotton.',
    images: ['https://images.unsplash.com/photo-1576417677573-8454350443ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHQtc2hpcnR8ZW58MHx8fHwxNzUxNzM0OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080', 'https://placehold.co/600x800.png'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    data_ai_hint: 'white t-shirt',
    colors: 5,
    fit: 'Oversized Fit',
  },
  {
    id: '4',
    name: 'Minimalist Leather Sneakers',
    category: 'Shoes',
    price: 149.99,
    salePrice: 119.99,
    description: 'Handcrafted from full-grain Italian leather for a clean, minimalist look.',
    images: ['https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDB8fHx8MTc1MTczNDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080', 'https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDB8fHx8MTc1MTczNDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080','https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDB8fHx8MTc1MTczNDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080','https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDB8fHx8MTc1MTczNDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080','https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDB8fHx8MTc1MTczNDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080','https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDB8fHx8MTc1MTczNDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080','https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDB8fHx8MTc1MTczNDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080','https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDB8fHx8MTc1MTczNDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080'],
    sizes: ['8', '9', '10', '11', '12'],
    featured: true,
    data_ai_hint: 'white sneakers',
    colors: 1,
    fit: 'True to Size',
  },
  {
    id: '5',
    name: 'Flowy Summer Dress',
    category: 'Dresses',
    price: 99.99,
    salePrice: 79.99,
    description: 'Light and airy, this dress is perfect for warm summer days.',
    images: ['https://placehold.co/600x800.png'],
    sizes: ['XS', 'S', 'M', 'L'],
    data_ai_hint: 'summer dress',
    colors: 3,
    fit: 'Relaxed Fit',
  },
  {
    id: '6',
    name: 'Cozy Knit Sweater',
    category: 'Sweaters',
    price: 119.99,
    salePrice: 89.99,
    description: 'Stay warm and stylish with this chunky knit sweater.',
    images: ['https://placehold.co/600x800.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    data_ai_hint: 'knit sweater',
  },
  {
    id: '7',
    name: 'Tailored Chino Shorts',
    category: 'Shorts',
    price: 69.99,
    description: 'Smart and comfortable, these chino shorts are a summer essential.',
    images: ['https://placehold.co/600x800.png'],
    sizes: ['30', '32', '34', '36'],
    data_ai_hint: 'chino shorts',
  },
  {
    id: '8',
    name: 'Silk Blend Blouse',
    category: 'Tops',
    price: 79.99,
    salePrice: 59.99,
    description: 'An elegant blouse that transitions perfectly from desk to dinner.',
    images: ['https://placehold.co/600x800.png'],
    sizes: ['XS', 'S', 'M', 'L'],
    data_ai_hint: 'elegant blouse',
  },
  {
    id: '9',
    name: 'Everyday Duffel Bag',
    category: 'Accessories',
    price: 75.00,
    description: 'The perfect companion for the gym or a weekend getaway. Durable and spacious.',
    images: ['https://images.unsplash.com/photo-1673505705687-dffbfd02b613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxkdWZmZWwlMjBiYWclMjBibGFja3xlbnwwfHx8fDE3NTE3MzUxODl8MA&ixlib=rb-4.1.0&q=80&w=1080'],
    sizes: ['One Size'],
    data_ai_hint: 'duffel bag black',
    featured: true,
  },
  {
    id: '10',
    name: 'Canvas Utility Backpack',
    category: 'Accessories',
    price: 95.00,
    description: 'A stylish and functional backpack for all your daily needs.',
    images: ['https://images.unsplash.com/photo-1540394285875-f7b4538c4874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjYW52YXMlMjBiYWNrcGFja3xlbnwwfHx8fDE3NTE3MzUxODl8MA&ixlib=rb-4.1.0&q=80&w=1080'],
    sizes: ['One Size'],
    data_ai_hint: 'canvas backpack',
  },
  {
    id: '11',
    name: 'Classic Leather Belt',
    category: 'Accessories',
    price: 45.00,
    salePrice: 35.00,
    description: 'A timeless leather belt that completes any outfit.',
    images: ['https://images.unsplash.com/photo-1684510334550-0c4fa8aaffd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxsZWF0aGVyJTIwYmVsdHxlbnwwfHx8fDE3NTE3MzUxODl8MA&ixlib=rb-4.1.0&q=80&w=1080'],
    sizes: ['S', 'M', 'L'],
    data_ai_hint: 'leather belt',
  },
  {
    id: '12',
    name: 'Knit Beanie',
    category: 'Accessories',
    price: 25.00,
    description: 'Stay warm with this soft and comfortable knit beanie.',
    images: ['https://images.unsplash.com/photo-1521160222242-ea015a06eba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxrbml0JTIwYmVhbmllfGVufDB8fHx8MTc1MTczNTE4OXww&ixlib=rb-4.1.0&q=80&w=1080'],
    sizes: ['One Size'],
    data_ai_hint: 'knit beanie',
  },
  {
    id: '13',
    name: 'Modern Sport Cap',
    category: 'Accessories',
    price: 30.00,
    description: 'A sleek and modern cap for a sporty look.',
    images: ['https://images.unsplash.com/photo-1592367630397-65872fe016e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxiYXNlYmFsbCUyMGNhcHxlbnwwfHx8fDE3NTE3MzUxODl8MA&ixlib=rb-4.1.0&q=80&w=1080'],
    sizes: ['One Size'],
    data_ai_hint: 'baseball cap',
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getAccessoryProducts(): Product[] {
  return products.filter(p => p.category === 'Accessories');
}
