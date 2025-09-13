
"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from 'next/link';

function CreditCardIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-muted-foreground"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
    )
}

export function Payment() {
  return (
    <div className="space-y-8">
      {/* Payment */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Payment</h2>
        <p className="text-sm text-muted-foreground">All transactions are secure and encrypted.</p>
        <RadioGroup defaultValue="card" className="space-y-3">
            <div className="rounded-lg border has-[[data-state=checked]]:border-primary">
                <div className="flex items-center space-x-3 p-4">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="font-medium flex-1">
                    Bank Card / Bank Account - PayHere
                    </Label>
                </div>
                <div className="border-t border-dashed bg-muted/50 p-6 text-center text-sm text-muted-foreground data-[state=unchecked]:hidden" data-state="checked">
                    <CreditCardIcon />
                    <p className="mt-4">
                        After clicking "Pay now", you will be redirected to Bank Card / Bank Account - PayHere to complete your purchase securely.
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-3 rounded-lg border p-4 has-[[data-state=checked]]:border-primary">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod" className="font-medium">
                Cash On Delivery
                </Label>
            </div>
        </RadioGroup>
      </div>

      <Alert variant="warning" className="bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800">
        <AlertTitle className="font-bold">Important Notice</AlertTitle>
        <AlertDescription>
          Please do not close your tab or browser after completing your payment. Kindly remain on this tab/browser until you are redirected to the order confirmation page to ensure that your transaction is processed successfully.
        </AlertDescription>
      </Alert>

      <Button className="w-full bg-black text-white hover:bg-black/90 rounded-md h-12 font-bold text-base" asChild>
          <Link href="/checkout/confirmation">Pay now</Link>
      </Button>

    </div>
  );
}
