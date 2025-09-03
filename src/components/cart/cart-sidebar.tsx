
"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useCart } from "@/context/cart-context";
import { CartItem } from "./cart-item";
import { ScrollArea } from "../ui/scroll-area";
import Link from 'next/link';
import { ShoppingBag } from "lucide-react";
import { CartIcon } from "../cart-icon";

export function CartSidebar() {
  const { cartItems, cartCount, totalPrice } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <CartIcon />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-sm">
        <SheetHeader className="px-6">
          <SheetTitle>Cart ({cartCount})</SheetTitle>
        </SheetHeader>
        <Separator />
        {cartCount > 0 ? (
          <>
            <ScrollArea className="flex-1">
              <div className="flex flex-col gap-4 p-6">
                {cartItems.map((item) => (
                  <CartItem key={`${item.id}-${item.selectedSize}`} item={item} />
                ))}
              </div>
            </ScrollArea>
            <Separator />
            <SheetFooter className="p-6 sm:flex-col sm:space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                    <span>Subtotal:</span>
                    <span> LKR {totalPrice.toFixed(2)}</span>
                </div>
                <SheetClose asChild>
                    <Button asChild className="w-full">
                        <Link href="/cart">Go to cart page</Link>
                    </Button>
                </SheetClose>
            </SheetFooter>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <ShoppingBag className="h-20 w-20 text-muted-foreground" />
            <p className="text-muted-foreground">Your cart is empty.</p>
            <SheetClose asChild>
                <Button variant="link">Continue Shopping</Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
