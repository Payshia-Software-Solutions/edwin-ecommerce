
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
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CheckoutForm() {
  return (
    <div className="space-y-8">
      {/* Shipping Information */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name *</Label>
            <Input id="full-name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
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
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="address1">Address Line 1 *</Label>
            <Input id="address1" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="address2">Address Line 2</Label>
            <Input id="address2" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input id="city" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="province">State / Province *</Label>
            <Input id="province" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postal-code">Postal Code *</Label>
            <Input id="postal-code" />
          </div>
        </div>
      </div>

      <Separator />

      {/* Shipping Method */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Shipping Method</h2>
        <RadioGroup defaultValue="standard" className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard" className="font-medium">
                Standard Shipping
              </Label>
            </div>
            <span className="font-semibold text-green-600">Free</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="express" id="express" />
              <Label htmlFor="express" className="font-medium">
                Express Shipping
              </Label>
            </div>
            <span className="font-semibold">LKR 500</span>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      {/* Payment Details */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Payment Details</h2>
        <Tabs defaultValue="card">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="card">Credit/Debit Card</TabsTrigger>
            <TabsTrigger value="paypal">PayPal</TabsTrigger>
            <TabsTrigger value="cod">Cash on Delivery</TabsTrigger>
          </TabsList>
          <TabsContent value="card" className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardholder-name">Cardholder Name *</Label>
                <Input id="cardholder-name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number *</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry-date">Expiry Date *</Label>
                  <Input id="expiry-date" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV *</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-4">
                <Checkbox id="same-billing" />
                <Label htmlFor="same-billing" className="text-sm font-normal">
                  Billing address is the same as shipping
                </Label>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="paypal" className="pt-6 text-center">
            <p>You will be redirected to PayPal to complete your purchase.</p>
          </TabsContent>
          <TabsContent value="cod" className="pt-6 text-center">
             <p>You will pay with cash upon delivery of your order.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
