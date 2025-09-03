'use client';

import { useState } from 'react';
import type { Product } from '@/lib/types';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-muted-foreground">Select Size</h3>
        <RadioGroup
          value={selectedSize}
          onValueChange={setSelectedSize}
          className="flex flex-wrap gap-2 mt-2"
        >
          {product.sizes.map((size) => (
            <Label
              key={size}
              htmlFor={`size-${size}`}
              className={cn(
                "border rounded-md px-4 py-2 cursor-pointer hover:bg-accent/50 transition-colors",
                selectedSize === size && "bg-accent text-accent-foreground"
              )}
            >
              <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
              {size}
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-muted-foreground">Select Color</h3>
        <RadioGroup
          value={selectedColor}
          onValueChange={setSelectedColor}
          className="flex flex-wrap gap-2 mt-2"
        >
          {product.colors.map((color) => (
             <Label
              key={color}
              htmlFor={`color-${color}`}
              className={cn(
                "border rounded-md px-4 py-2 cursor-pointer hover:bg-accent/50 transition-colors",
                 selectedColor === color && "bg-accent text-accent-foreground"
              )}
            >
              <RadioGroupItem value={color} id={`color-${color}`} className="sr-only" />
              {color}
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div className="flex gap-4">
        <Button
          size="lg"
          className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
          onClick={() => addToCart(product, selectedSize, selectedColor)}
        >
          Add to Cart
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => toggleWishlist(product.id)}
        >
          <Heart className={cn('mr-2 h-5 w-5', isInWishlist(product.id) ? 'text-red-500 fill-current' : '')} />
          {isInWishlist(product.id) ? 'Wishlisted' : 'Wishlist'}
        </Button>
      </div>
    </div>
  );
}
