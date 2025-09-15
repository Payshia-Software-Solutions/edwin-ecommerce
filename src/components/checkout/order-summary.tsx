
"use client";

import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

function OrderSummaryItem({ item }: { item: any }) {
    return (
        <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border bg-muted">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
                 <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground text-xs font-medium text-white">
                    {item.quantity}
                </span>
            </div>
            <div className="flex-1">
                <h3 className="font-medium text-sm">{item.name}</h3>
                <p className="text-sm text-muted-foreground">LKR {item.price.toFixed(2)} x {item.quantity}</p>
            </div>
            <p className="font-medium text-sm">LKR {(item.price * item.quantity).toFixed(2)}</p>
        </div>
    )
}


export function OrderSummary() {
    const { cartItems, totalPrice } = useCart();
    const shippingCost: number = 0; // Or calculate based on selection

  return (
    <div className="bg-muted/30 dark:bg-zinc-900/50 p-6 rounded-lg">
        
        <div className="space-y-4 mb-6">
            {cartItems.map(item => (
                <OrderSummaryItem key={`${item.id}-${item.selectedSize}`} item={item} />
            ))}
        </div>

        <Separator className="my-4" />
        
        <div className="flex gap-2 mb-4">
            <Input placeholder="Discount code or gift card" className="bg-background" />
            <Button className="bg-gray-400 hover:bg-gray-500 text-white px-6">Apply</Button>
        </div>

        <Separator className="my-4" />

        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>LKR {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">
                    {shippingCost === 0 ? 'Rs 0.00' : `LKR ${shippingCost.toFixed(2)}`}
                </span>
            </div>
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>LKR {(totalPrice + shippingCost).toFixed(2)}</span>
        </div>
    </div>
  );
}
