"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";

export function CartIcon() {
  const { cartCount } = useCart();

  return (
    <Button variant="ghost" size="icon" className="relative">
      <ShoppingBag className="h-6 w-6" />
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">
          {cartCount}
        </span>
      )}
      <span className="sr-only">Open cart</span>
    </Button>
  );
}
