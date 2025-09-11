"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/lib/data';
import { ProductCard } from './collections/product-card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Product } from '@/lib/types';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function NewArrivalsAndCategories() {
  const [newProducts, setNewProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchNew() {
      const products = await getFeaturedProducts();
      setNewProducts(products);
    }
    fetchNew();
  }, []);

  return (
    <motion.section 
      className="py-16 md:py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 space-y-20">
        <div>
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-headline text-foreground">
                New Drop
              </h2>
              <Badge variant="default">NEW COLLECTION</Badge>
            </div>
            <Button asChild variant="outline">
              <Link href="/shop">Shop All</Link>
            </Button>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {newProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-4 basis-2/3 sm:basis-1/3 md:basis-1/4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/shop/men" className="relative group overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtYWxlJTIwbW9kZWx8ZW58MHx8fHwxNzUxNzM0OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Model wearing men's clothing"
              data-ai-hint="male model"
              width={600}
              height={800}
              className="object-cover w-full h-full aspect-[3/4] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end p-8 text-white">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-2xl font-headline font-bold">MENS</h3>
                <ArrowRight className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
          <Link href="/shop/women" className="relative group overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1623039497026-00af61471107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmZW1hbGUlMjBtb2RlbHxlbnwwfHx8fDE3NTE3MzQ5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Model wearing women's clothing"
              data-ai-hint="female model"
              width={600}
              height={800}
              className="object-cover w-full h-full aspect-[3/4] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end p-8 text-white">
               <div className="flex justify-between items-center w-full">
                <h3 className="text-2xl font-headline font-bold">WOMENS</h3>
                <ArrowRight className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
          <Link href="/shop/accessories" className="relative group overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1626931291835-f1d59553aa2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxoYW5kYmFnJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTE3MzQ5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Stylish handbag accessory"
              data-ai-hint="handbag fashion"
              width={600}
              height={800}
              className="object-cover w-full h-full aspect-[3/4] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end p-8 text-white">
               <div className="flex justify-between items-center w-full">
                <h3 className="text-2xl font-headline font-bold">ACCESSORIES</h3>
                <ArrowRight className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
