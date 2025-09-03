
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export function FilterSidebar() {
  return (
    <aside className="w-full md:w-64">
      <div className="space-y-8">
        <Accordion type="multiple" defaultValue={['availability', 'price']} className="w-full">
          <AccordionItem value="availability">
            <AccordionTrigger className="text-sm uppercase tracking-wider py-4 font-normal hover:no-underline">Availability</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="in-stock" />
                  <Label htmlFor="in-stock" className="font-normal">In Stock</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="out-of-stock" />
                  <Label htmlFor="out-of-stock" className="font-normal">Out of Stock</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="text-sm uppercase tracking-wider py-4 font-normal hover:no-underline">Price</AccordionTrigger>
            <AccordionContent>
                <div className="pt-4 px-1">
                    <Slider defaultValue={[50]} max={100} step={1} />
                </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="style">
            <AccordionTrigger className="text-sm uppercase tracking-wider py-4 font-normal hover:no-underline">Style</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="casual" />
                  <Label htmlFor="casual" className="font-normal">Casual</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="formal" />
                  <Label htmlFor="formal" className="font-normal">Formal</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="size">
            <AccordionTrigger className="text-sm uppercase tracking-wider py-4 font-normal hover:no-underline">Size</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="s" />
                  <Label htmlFor="s" className="font-normal">S</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="m" />
                  <Label htmlFor="m" className="font-normal">M</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="l" />
                  <Label htmlFor="l" className="font-normal">L</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="color">
            <AccordionTrigger className="text-sm uppercase tracking-wider py-4 font-normal hover:no-underline">Color</AccordionTrigger>
            <AccordionContent>
               <div className="flex flex-wrap gap-3 pt-2">
                  <button className="h-8 w-8 rounded-full bg-black border"></button>
                  <button className="h-8 w-8 rounded-full bg-white border"></button>
                  <button className="h-8 w-8 rounded-full bg-blue-500 border"></button>
                  <button className="h-8 w-8 rounded-full bg-red-500 border"></button>
                  <button className="h-8 w-8 rounded-full bg-green-500 border"></button>
                </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div>
            <h3 className="text-sm uppercase tracking-wider mb-4 font-normal">Sort By</h3>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Manual" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="best-selling">Best Selling</SelectItem>
                    <SelectItem value="price-asc">Price, low to high</SelectItem>
                    <SelectItem value="price-desc">Price, high to low</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </div>
    </aside>
  );
}
