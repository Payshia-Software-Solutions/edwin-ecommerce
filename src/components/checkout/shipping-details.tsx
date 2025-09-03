
"use client"

import { Button } from "../ui/button";

export function ShippingDetails() {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Shipping To</h2>
            <Button variant="link" className="text-primary">Edit</Button>
        </div>
        <address className="not-italic text-sm text-muted-foreground leading-relaxed">
            <p className="font-semibold text-foreground">John Doe</p>
            456 Delivery Avenue<br/>
            Apartment 12B<br/>
            Colombo 03, Western Province<br/>
            Sri Lanka 00300
            <p className="mt-2">Phone: +94 77 123 4567</p>
        </address>
    </div>
  );
}
