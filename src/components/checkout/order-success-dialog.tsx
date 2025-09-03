
"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const OrderSuccessIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
    <g clipPath="url(#clip0_103_2)">
      <path d="M83.4331 52.4764C82.7381 51.5831 81.3931 51.5831 80.6981 52.4764L76.5414 57.6531C75.8464 58.5464 76.5031 59.8147 77.5831 59.8147H86.5481C87.6281 59.8147 88.2847 58.5464 87.5897 57.6531L83.4331 52.4764Z" fill="black"/>
      <path d="M38.4014 36.191C37.7064 35.2977 36.3614 35.2977 35.6664 36.191L31.5097 41.3677C30.8147 42.261 31.4714 43.5293 32.5514 43.5293H41.5164C42.5964 43.5293 43.253 42.261 42.558 41.3677L38.4014 36.191Z" fill="black"/>
      <path d="M49.2312 85.0599C49.2312 85.0599 49.2312 85.0599 49.2312 85.0599C49.2312 85.0599 49.2312 85.0599 49.2312 85.0599Z" fill="#383838"/>
      <path d="M49.9997 91.6666C26.9655 91.6666 8.33301 73.0341 8.33301 50C8.33301 26.9658 26.9655 8.33325 49.9997 8.33325C73.0338 8.33325 91.6663 26.9658 91.6663 50C91.6663 60.6853 87.5593 70.334 80.9163 77.4999L66.6663 91.6666H49.9997Z" stroke="black" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M36.358 49.693C36.358 49.693 40.5247 55.1347 50.4163 55.1347C60.308 55.1347 64.4747 49.693 64.4747 49.693" stroke="black" strokeWidth="4.16667" strokeLinecap="round"/>
      <path d="M37.5 64.5833C37.5 64.5833 41.6667 70.025 51.5583 70.025C61.45 70.025 65.6167 64.5833 65.6167 64.5833" stroke="black" strokeWidth="4.1667" strokeLinecap="round"/>
      <rect x="29.166" y="55.4167" width="41.6667" height="7.08333" rx="3.54167" fill="#E5E7EB"/>
      <rect x="33.333" y="67.9167" width="33.3333" height="7.08333" rx="3.54167" fill="#E5E7EB"/>
      <circle cx="79.167" cy="25" r="4.16667" fill="black"/>
      <circle cx="20.833" cy="72.9167" r="4.16667" fill="black"/>
    </g>
    <defs>
      <clipPath id="clip0_103_2">
        <rect width="100" height="100" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);


interface OrderSuccessDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function OrderSuccessDialog({ isOpen, onOpenChange }: OrderSuccessDialogProps) {
  const router = useRouter();

  const handleDone = () => {
    onOpenChange(false);
    router.push('/');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm p-8 text-center">
        <div className="flex flex-col items-center">
          <OrderSuccessIcon />
          <h2 className="text-2xl font-bold mt-4 mb-8">Order Placed Successfully!</h2>
          <Button 
            className="w-full bg-black text-white hover:bg-black/90 rounded-full h-12 font-bold text-base"
            onClick={handleDone}
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
