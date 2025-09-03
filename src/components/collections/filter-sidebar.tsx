"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "../ui/checkbox"

const FilterSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <AccordionItem value={title}>
    <AccordionTrigger className="text-sm font-semibold uppercase hover:no-underline">{title}</AccordionTrigger>
    <AccordionContent>
      {children}
    </AccordionContent>
  </AccordionItem>
);

export function FilterSidebar() {
  return (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={["Availability", "Price", "Style", "Size", "Color"]} className="w-full">
        <FilterSection title="Availability">
          <div className="space-y-2 pt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="in-stock" />
              <Label htmlFor="in-stock" className="font-normal">In Stock</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="out-of-stock" />
              <Label htmlFor="out-of-stock" className="font-normal">Out of Stock</Label>
            </div>
          </div>
        </FilterSection>
        <FilterSection title="Price">
          <div className="pt-2">
            {/* Price range slider could go here */}
            <p className="text-sm text-muted-foreground">Price filter placeholder</p>
          </div>
        </FilterSection>
        <FilterSection title="Style">
           <div className="space-y-2 pt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="style-casual" />
              <Label htmlFor="style-casual" className="font-normal">Casual</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="style-formal" />
              <Label htmlFor="style-formal" className="font-normal">Formal</Label>
            </div>
          </div>
        </FilterSection>
        <FilterSection title="Size">
          <div className="space-y-2 pt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="size-s" />
              <Label htmlFor="size-s" className="font-normal">S</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-m" />
              <Label htmlFor="size-m" className="font-normal">M</Label>
            </div>
             <div className="flex items-center space-x-2">
              <Checkbox id="size-l" />
              <Label htmlFor="size-l" className="font-normal">L</Label>
            </div>
          </div>
        </FilterSection>
        <FilterSection title="Color">
          <div className="flex flex-wrap gap-2 pt-2">
            <button className="h-6 w-6 rounded-full bg-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
            <button className="h-6 w-6 rounded-full bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"></button>
            <button className="h-6 w-6 rounded-full bg-red-500 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"></button>
            <button className="h-6 w-6 rounded-full bg-blue-500 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"></button>
          </div>
        </FilterSection>
      </Accordion>
      
      <div className="space-y-2 pt-4 border-t">
        <Label className="text-sm font-semibold uppercase">Sort By</Label>
        <Select defaultValue="manual">
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="manual">Manual</SelectItem>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="date-desc">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
