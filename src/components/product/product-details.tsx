
"use client"

import { useState } from 'react';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/cart-context';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Truck, Undo2 } from 'lucide-react';
import Link from 'next/link';
import { SizeSelector } from './size-selector';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes[0] || null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: 1,
        selectedSize: selectedSize,
      });
    } else {
      // Maybe show a toast message to select a size
      alert("Please select a size.");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="text-sm text-muted-foreground mb-2">
          <Link href="/" className="hover:underline">Home</Link> /
          <Link href="/collections" className="hover:underline"> Collections</Link> /
          <span className="font-medium text-foreground"> {product.name}</span>
        </div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl font-semibold mt-2">LKR {product.price.toFixed(2)}</p>
        <div className="mt-2">
          <span className="text-green-600 font-semibold">IN STOCK</span>
        </div>
      </div>

      <Separator />

      <div>
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">Size</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">Size Guide</Link>
        </div>
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
        />
      </div>

      <Button
        size="lg"
        className="w-full bg-black text-white hover:bg-black/80 rounded-full font-bold text-base py-6"
        onClick={handleAddToCart}
        disabled={!selectedSize}
      >
        ADD TO CART
      </Button>

      <div className="space-y-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <Truck className="h-5 w-5" />
          <span>Free shipping over LKR 20,000</span>
        </div>
        <div className="flex items-center gap-3">
          <Undo2 className="h-5 w-5" />
          <span>Free Exchange & Returns</span>
        </div>
      </div>

      <Separator />

       <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="product-details">
            <AccordionTrigger className="text-base font-medium hover:no-underline">Product Details</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{product.description}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
    </div>
  );
}
