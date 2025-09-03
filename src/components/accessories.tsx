"use client";

import { getAccessoryProducts } from '@/lib/data';
import { ProductCard } from './product-card';
import { Button } from './ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Accessories() {
  const accessoryProducts = getAccessoryProducts();

  return (
    <motion.section 
      className="py-16 md:py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-headline font-bold uppercase">
            Accessories
          </h2>
          <Button asChild variant="outline" className="font-bold">
            <Link href="/shop/accessories">Shop All</Link>
          </Button>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {accessoryProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </motion.section>
  );
}
