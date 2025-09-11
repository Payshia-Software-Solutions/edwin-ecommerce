
"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { X, Plus, Minus } from 'lucide-react';
import type { CartItem as CartItemType } from '@/lib/types';
import { useCart } from '@/context/cart-context';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
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
           <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1}>
                  <Minus className="h-4 w-4" />
              </Button>
              <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10);
                      if (!isNaN(newQuantity)) {
                          handleQuantityChange(newQuantity);
                      }
                  }}
                  className="h-8 w-12 text-center border-l border-r rounded-none"
              />
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.quantity + 1)}>
                  <Plus className="h-4 w-4" />
              </Button>
          </div>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleRemove}>
        <X className="h-4 w-4" />
        <span className="sr-only">Remove item</span>
      </Button>
    </div>
  );
}
