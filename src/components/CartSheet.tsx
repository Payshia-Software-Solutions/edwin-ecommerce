'use client';

import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Separator } from './ui/separator';
import { Input } from './ui/input';

export default function CartSheet() {
  const { cartItems, cartCount, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-accent rounded-full">
              {cartCount}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({cartCount})</SheetTitle>
        </SheetHeader>
        {cartCount > 0 ? (
          <>
            <div className="flex-grow overflow-y-auto pr-4 -mr-4">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-start space-x-4">
                    <div className="relative h-24 w-24 rounded-md overflow-hidden">
                       <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          data-ai-hint={item.keywords}
                          className="object-cover"
                        />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.selectedSize} / {item.selectedColor}
                      </p>
                      <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
                      <div className="flex items-center justify-between">
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, item.selectedSize, item.selectedColor, parseInt(e.target.value, 10))}
                          className="w-20 h-8"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                        >
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <SheetFooter className="mt-auto">
              <div className="w-full space-y-4">
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Proceed to Checkout
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold">Your cart is empty</h3>
            <p className="text-muted-foreground">Add items to see them here.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
