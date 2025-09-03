
"use client";

import { useCart } from "@/context/cart-context";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

function ConfirmationOrderItem({ item }: { item: any }) {
    return (
        <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-muted">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">Size: {item.selectedSize}, Color: Black</p>
                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
            </div>
            <p className="font-semibold">LKR {(item.price * item.quantity).toFixed(2)}</p>
        </div>
    )
}


export function ConfirmationOrderSummary({ tax }: { tax: number }) {
    const { cartItems, totalPrice } = useCart();
    const shippingCost = 500;

  return (
    <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
        
        <div className="space-y-6">
            {cartItems.map(item => (
                <ConfirmationOrderItem key={`${item.id}-${item.selectedSize}`} item={item} />
            ))}
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          <div >
            <h3 className="font-semibold mb-2">Shipping Method</h3>
            <p className="text-sm text-muted-foreground">Express Shipping - LKR {shippingCost.toFixed(2)}</p>
          </div>
          <Separator className="my-4" />
           <div className="space-y-3">
            <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-medium text-foreground">LKR {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="font-medium text-foreground">
                    {`LKR ${shippingCost.toFixed(2)}`}
                </span>
            </div>
             <div className="flex justify-between text-muted-foreground">
                <span>Tax</span>
                <span className="font-medium text-foreground">LKR {tax.toFixed(2)}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>LKR {(totalPrice + shippingCost + tax).toFixed(2)}</span>
            </div>
        </div>
        </div>

    </div>
  );
}
