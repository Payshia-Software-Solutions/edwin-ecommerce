
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ConfirmationOrderSummary } from "@/components/checkout/confirmation-order-summary";
import { PaymentDetails } from "@/components/checkout/payment-details";
import { ShippingDetails } from "@/components/checkout/shipping-details";
import { OrderSuccessDialog } from "@/components/checkout/order-success-dialog";
import { useCart } from "@/context/cart-context";

export default function ConfirmationPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { clearCart } = useCart();
  const tax = 1800;

  const handlePlaceOrder = () => {
    // In a real app, you'd handle order submission here
    clearCart();
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="bg-gray-50 dark:bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <ConfirmationOrderSummary tax={tax} />
            <div className="grid md:grid-cols-2 gap-8">
              <PaymentDetails />
              <ShippingDetails />
            </div>
            <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Order Total</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-medium text-foreground">LKR 35,500.00</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="font-medium text-foreground">LKR 500.00</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span className="font-medium text-foreground">LKR {tax.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>LKR {(35500 + 500 + tax).toFixed(2)}</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6 bg-black text-white hover:bg-black/90 rounded-full h-12 font-bold text-base"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                By placing this order, you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <OrderSuccessDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
