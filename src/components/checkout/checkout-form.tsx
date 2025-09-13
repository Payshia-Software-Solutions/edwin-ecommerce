
"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Link from 'next/link';

function CreditCardIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-muted-foreground"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
    )
}

export function CheckoutForm() {
  return (
    <div className="space-y-8">
      
      {/* Contact */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Contact</h2>
            <Link href="/login" className="text-sm text-primary hover:underline">Log in</Link>
        </div>
        <Input id="email" type="email" placeholder="Enter your email" />
        <div className="flex items-center space-x-2">
            <Checkbox id="offers" />
            <Label htmlFor="offers" className="font-normal">Email me with news and offers</Label>
        </div>
      </div>

      {/* Delivery */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Delivery</h2>
        <div className="space-y-4">
            <div>
                <Label htmlFor="country" className="text-xs">Country/Region</Label>
                <Select defaultValue="sri-lanka">
                    <SelectTrigger id="country">
                        <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="first-name" className="text-xs">First name (optional)</Label>
                    <Input id="first-name" placeholder="John" />
                </div>
                 <div>
                    <Label htmlFor="last-name" className="text-xs">Last name</Label>
                    <Input id="last-name" placeholder="Doe" />
                </div>
            </div>
            <div>
                 <Label htmlFor="address" className="text-xs">Address</Label>
                 <Input id="address" placeholder="Address"/>
            </div>
             <div>
                 <Label htmlFor="apartment" className="text-xs">Apartment, suite, etc. (optional)</Label>
                 <Input id="apartment" placeholder="Apartment, suite, etc. (optional)"/>
            </div>
             <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="city" className="text-xs">City</Label>
                    <Input id="city" placeholder="City" />
                </div>
                 <div>
                    <Label htmlFor="postal-code" className="text-xs">Postal Code</Label>
                    <Input id="postal-code" placeholder="70070" />
                </div>
            </div>
            <div>
                <Label htmlFor="phone" className="text-xs">Phone</Label>
                <Input id="phone" placeholder="Phone" />
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="save-info" />
                <Label htmlFor="save-info" className="font-normal">Save this information for next time</Label>
            </div>
        </div>
      </div>
      
      {/* Billing Address */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Billing Address</h2>
        <RadioGroup defaultValue="same-address" className="space-y-3">
          <div className="flex items-center space-x-3 rounded-lg border p-4">
            <RadioGroupItem value="same-address" id="same-address" />
            <Label htmlFor="same-address" className="font-medium">
              Same as shipping address
            </Label>
          </div>
          <div className="flex items-center space-x-3 rounded-lg border p-4">
            <RadioGroupItem value="different-address" id="different-address" />
            <Label htmlFor="different-address" className="font-medium">
              Use a different billing address
            </Label>
          </div>
        </RadioGroup>
      </div>

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
