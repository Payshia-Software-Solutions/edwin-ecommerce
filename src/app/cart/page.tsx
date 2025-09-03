
"use client";

import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CartPageItem } from "@/components/cart/cart-page-item";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import Link from 'next/link';

const FREE_SHIPPING_THRESHOLD = 15000;

export default function CartPage() {
  const { cartItems, totalPrice } = useCart();
  const amountLeftForFreeShipping = FREE_SHIPPING_THRESHOLD - totalPrice;
  const progressPercentage = Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground mb-4">Your cart is empty.</p>
          <Button asChild>
            <Link href="/collections">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              {amountLeftForFreeShipping > 0 ? (
                <p className="text-sm text-center">
                  You're{" "}
                  <span className="font-semibold text-primary">
                    LKR {amountLeftForFreeShipping.toFixed(2)}
                  </span>{" "}
                  from Free Standard Shipping
                </p>
              ) : (
                <p className="text-sm font-semibold text-center text-primary">
                  You've got Free Standard Shipping!
                </p>
              )}
              <div className="flex items-center gap-4 mt-2">
                <span className="text-xs text-muted-foreground">LKR 0</span>
                <Progress value={progressPercentage} className="h-2" />
                <span className="text-xs text-muted-foreground">LKR {FREE_SHIPPING_THRESHOLD}</span>
              </div>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartPageItem key={`${item.id}-${item.selectedSize}`} item={item} />
              ))}
            </div>
            
            <div className="relative">
               <Plus className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
               <Textarea placeholder="Leave a note with your order" className="pl-9"/>
            </div>

          </div>

          <div className="lg:col-span-1">
            <div className="bg-muted/30 p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">LKR {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold">{totalPrice >= FREE_SHIPPING_THRESHOLD ? 'Free' : 'Calculated at next step'}</span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>LKR {totalPrice.toFixed(2)}</span>
              </div>
              <div className="mt-6 space-y-3">
                <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full h-12 font-bold">
                  CHECK OUT
                </Button>
                <Button variant="outline" className="w-full bg-white rounded-full h-12" asChild>
                    <Link href="/collections">
                        CONTINUE SHOPPING
                    </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
