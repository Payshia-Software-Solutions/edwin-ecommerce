
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { OrderSummary } from "@/components/checkout/order-summary";

export default function CheckoutPage() {
  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
                <div className="order-1 lg:order-1">
                    <CheckoutForm />
                </div>
                <div className="order-2 lg:order-2">
                    <OrderSummary />
                </div>
            </div>
        </div>
    </div>
  );
}
