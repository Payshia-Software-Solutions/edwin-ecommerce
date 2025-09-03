'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from './ui/button';
import { products } from '@/lib/products';
import { Category } from '@/lib/types';

interface ProductFiltersProps {
  filters: {
    search: string;
    category: string;
    priceRange: [number, number];
  };
  onFilterChange: (filters: ProductFiltersProps['filters']) => void;
  className?: string;
}

const categories = [...new Set(products.map(p => p.category))];
const maxPrice = Math.ceil(Math.max(...products.map(p => p.price)));

export function ProductFilters({ filters, onFilterChange, className }: ProductFiltersProps) {

  const handleReset = () => {
    onFilterChange({
        search: '',
        category: 'All',
        priceRange: [0, maxPrice]
    });
  }

  return (
    <div className={className}>
      <div className="space-y-6">
        <div>
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search for items..."
            value={filters.search}
            onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Select
            value={filters.category}
            onValueChange={(value) => onFilterChange({ ...filters, category: value })}
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Price Range</Label>
          <Slider
            min={0}
            max={maxPrice}
            step={10}
            value={filters.priceRange}
            onValueChange={(value) => onFilterChange({ ...filters, priceRange: value as [number, number] })}
            className="mt-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>

        <Button variant="ghost" onClick={handleReset} className="w-full">
            Reset Filters
        </Button>
      </div>
    </div>
  );
}
