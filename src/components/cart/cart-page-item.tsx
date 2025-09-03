
"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { X, Plus, Minus } from 'lucide-react';
import type { CartItem as CartItemType } from '@/lib/types';
import { useCart } from '@/context/cart-context';

interface CartPageItemProps {
  item: CartItemType;
}

export function CartPageItem({ item }: CartPageItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(item.id, item.selectedSize, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id, item.selectedSize);
  };

  return (
    <div className="flex items-start gap-6 p-4 rounded-lg border">
      <div className="relative h-28 w-28 overflow-hidden rounded-md bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col h-28 justify-between">
        <div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-md text-muted-foreground">Size: {item.selectedSize}</p>
        </div>
        <div className="flex items-center gap-2">
            <span>Qty:</span>
            <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1}>
                    <Minus className="h-4 w-4" />
                </Button>
                <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
                    className="h-8 w-12 text-center border-l border-r rounded-none"
                />
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.quantity + 1)}>
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </div>
      <div className="flex flex-col h-28 justify-between items-end">
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleRemove}>
          <X className="h-4 w-4" />
          <span className="sr-only">Remove item</span>
        </Button>
        <p className="font-semibold text-lg">LKR {item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
