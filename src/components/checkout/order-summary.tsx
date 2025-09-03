
"use client";

import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from 'next/link';

function OrderSummaryItem({ item }: { item: any }) {
    return (
        <div className="flex items-start gap-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-muted">
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
                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
            </div>
            <p className="font-semibold">LKR {item.price.toFixed(2)}</p>
        </div>
    )
}


export function OrderSummary() {
    const { cartItems, totalPrice } = useCart();
    const shippingCost = 0; // Or calculate based on selection

  return (
    <div className="bg-muted/30 p-6 rounded-lg sticky top-24">
        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
        
        <div className="space-y-4 mb-6">
            {cartItems.map(item => (
                <OrderSummaryItem key={`${item.id}-${item.selectedSize}`} item={item} />
            ))}
        </div>

        <Separator className="my-6" />

        <div className="space-y-3 mb-6">
            <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>LKR {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="font-medium text-green-600">
                    {shippingCost === 0 ? 'Free' : `LKR ${shippingCost.toFixed(2)}`}
                </span>
            </div>
        </div>

        <Separator className="my-6" />

        <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total</span>
            <span>LKR {(totalPrice + shippingCost).toFixed(2)}</span>
        </div>

        <div className="flex gap-2 mb-6">
            <Input placeholder="Promo code" className="bg-background" />
            <Button variant="outline" className="bg-background">Apply</Button>
        </div>
        
        <Button asChild className="w-full bg-black text-white hover:bg-black/90 rounded-full h-12 font-bold text-base">
            <Link href="/checkout/confirmation">Continue to Confirmation</Link>
        </Button>
        <p className="text-xs text-muted-foreground mt-4 text-center">
            By placing this order, you agree to our terms and policies.
        </p>
    </div>
  );
}
