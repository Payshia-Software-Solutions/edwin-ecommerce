
"use client";

import { useState } from "react";
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
import Link from 'next/link';


export function CheckoutForm() {
  const [billingAddressOption, setBillingAddressOption] = useState("same-address");

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
        <RadioGroup value={billingAddressOption} onValueChange={setBillingAddressOption} className="space-y-3">
          <div className="flex items-center space-x-3 rounded-lg border p-4">
            <RadioGroupItem value="same-address" id="same-address" />
            <Label htmlFor="same-address" className="font-medium">
              Same as shipping address
            </Label>
          </div>
          <div className="flex items-center space-x-3 rounded-lg border p-4 has-[[data-state=checked]]:border-primary">
            <RadioGroupItem value="different-address" id="different-address" />
            <Label htmlFor="different-address" className="font-medium">
              Use a different billing address
            </Label>
          </div>
        </RadioGroup>

        {billingAddressOption === "different-address" && (
          <div className="space-y-4 pt-4 border-t">
              <h3 className="sr-only">Billing Address Form</h3>
              <div>
                  <Label htmlFor="billing-country" className="text-xs">Country/Region</Label>
                  <Select defaultValue="sri-lanka">
                      <SelectTrigger id="billing-country">
                          <SelectValue placeholder="Select Country" />
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
                      <Label htmlFor="billing-first-name" className="text-xs">First name</Label>
                      <Input id="billing-first-name" />
                  </div>
                   <div>
                      <Label htmlFor="billing-last-name" className="text-xs">Last name</Label>
                      <Input id="billing-last-name" />
                  </div>
              </div>
              <div>
                   <Label htmlFor="billing-address" className="text-xs">Address</Label>
                   <Input id="billing-address" />
              </div>
               <div>
                   <Label htmlFor="billing-apartment" className="text-xs">Apartment, suite, etc. (optional)</Label>
                   <Input id="billing-apartment" />
              </div>
               <div className="grid grid-cols-2 gap-4">
                  <div>
                      <Label htmlFor="billing-city" className="text-xs">City</Label>
                      <Input id="billing-city" />
                  </div>
                   <div>
                      <Label htmlFor="billing-postal-code" className="text-xs">Postal Code</Label>
                      <Input id="billing-postal-code" />
                  </div>
              </div>
              <div>
                  <Label htmlFor="billing-phone" className="text-xs">Phone (optional)</Label>
                  <Input id="billing-phone" />
              </div>
          </div>
        )}
      </div>
    </div>
  );
}
