
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSelectSize: (size: string) => void;
}

export function SizeSelector({ sizes, selectedSize, onSelectSize }: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <Button
          key={size}
          variant="outline"
          className={cn(
            "rounded-full border-gray-300",
            selectedSize === size && "bg-black text-white border-black"
          )}
          onClick={() => onSelectSize(size)}
        >
          {size}
        </Button>
      ))}
    </div>
  );
}
