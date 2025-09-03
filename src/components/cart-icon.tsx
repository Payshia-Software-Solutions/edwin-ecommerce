
"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";
import React from "react";

export const CartIcon = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { cartCount } = useCart();

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10",
          className
        )}
        {...props}
      >
        <ShoppingBag className="h-6 w-6" />
        {cartCount > 0 && (
          <span className="absolute top-1 right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">
            {cartCount}
          </span>
        )}
        <span className="sr-only">Open cart</span>
      </button>
    );
  }
);
CartIcon.displayName = "CartIcon";
