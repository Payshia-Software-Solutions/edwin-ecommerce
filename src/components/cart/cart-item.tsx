
"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { X } from 'lucide-react';
import type { CartItem as CartItemType } from '@/lib/types';
import { useCart } from '@/context/cart-context';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity)) {
      updateQuantity(item.id, item.selectedSize, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id, item.selectedSize);
  };

  return (
    <div className="flex items-start gap-4">
      <div className="relative h-24 w-24 overflow-hidden rounded-md">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">Size: {item.selectedSize}</p>
        <p className="font-semibold">LKR {item.price.toFixed(2)}</p>
        <div className="mt-2 flex items-center gap-2">
          <Input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="h-8 w-16"
          />
        </div>
      </div>
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleRemove}>
        <X className="h-4 w-4" />
        <span className="sr-only">Remove item</span>
      </Button>
    </div>
  );
}
