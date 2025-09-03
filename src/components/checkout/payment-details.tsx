
"use client"

import { Button } from "../ui/button";

const VisaIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-visa">
    <title id="pi-visa">Visa</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#4C4D4F" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z"/>
      <path fill="#FFF" d="M14.2 16.9c.5.3 1.1.5 1.8.5.5 0 1-.2 1-.6 0-.3-.3-.5-.8-.7-.6-.2-1.3-.4-1.9-.6-.7-.2-1.2-.5-1.5-1-.3-.4-.5-1-.5-1.6 0-1.4 1-2.5 2.6-2.5.7 0 1.4.2 2 .5l-.5 2.1c-.5-.2-1-.4-1.5-.4-.4 0-.7.2-.7.5 0 .3.2.4.7.6.6.2 1.4.4 2 .6.8.2 1.3.5 1.6 1 .3.4.5.9.5 1.6 0 1.7-1.1 2.7-2.9 2.7-1 0-1.8-.3-2.3-.6l.6-2.1zM22.1 10.3c-.6-2.1-2.5-3.6-4.5-3.6-2.4 0-4.4 1.9-4.4 4.4s1.9 4.4 4.4 4.4c2 0 3.9-1.5 4.5-3.6h-2.3c-.5 1.2-1.6 2-2.8 2-1.6 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8c1.2 0 2.3.8 2.8 2h2.3zM9.2 10.2H6.9l-1.3 7.3H8l.5-3.4c.1-.5.2-1 .3-1.3.2-.7.4-1.3.5-1.6h.1c.1.3.3.9.4 1.6l.5 3.4h2.1l-1.3-7.3H9.2zm21.9 0h-2.1c-.4.8-1 1.4-1.7 1.8l1.9 5.5h-2.3l-1.9-5.9v-.2h3.1v-1.2z"/>
    </g>
  </svg>
)

export function PaymentDetails() {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Payment Details</h2>
            <Button variant="link" className="text-primary">Edit</Button>
        </div>
        <div className="space-y-4">
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Payment Method</h3>
                <div className="flex items-center gap-3">
                    <VisaIcon />
                    <p className="font-medium">Visa ending in 1234</p>
                </div>
            </div>
             <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Billing Address</h3>
                <address className="not-italic text-sm">
                    John Doe<br/>
                    123 Main Street<br/>
                    Colombo 07, Western Province<br/>
                    Sri Lanka 00700
                </address>
            </div>
        </div>
    </div>
  );
}
