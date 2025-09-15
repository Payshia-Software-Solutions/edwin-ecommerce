
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts, getCollections } from '@/lib/data';
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
import { Product, Collection } from '@/lib/types';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const imgBaseUrl = process.env.NEXT_PUBLIC_IMG_BASE_URL || 'https://content-provider.payshia.com/payshia-erp';

const categoryPlaceholders: { [key: string]: string } = {
  men: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtYWxlJTIwbW9kZWx8ZW58MHx8fHwxNzUxNzM0OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  women: "https://images.unsplash.com/photo-1623039497026-00af61471107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmZW1hbGUlMjBtb2RlbHxlbnwwfHx8fDE3NTE3MzQ5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  accessories: "https://images.unsplash.com/photo-1626931291835-f1d59553aa2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxoYW5kYmFnJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTE3MzQ5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
};

const dataAiHints: { [key: string]: string } = {
  men: "male model",
  women: "female model",
  accessories: "handbag fashion",
};

export function NewArrivalsAndCategories() {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    async function fetchData() {
      const [products, fetchedCollections] = await Promise.all([
        getFeaturedProducts(),
        getCollections()
      ]);
      setNewProducts(products);
      
      const categoryOrder = ['men', 'women', 'accessories'];
      const filteredCollections = fetchedCollections
        .filter(c => categoryOrder.includes(c.title.toLowerCase()))
        .sort((a, b) => {
          const aIndex = categoryOrder.indexOf(a.title.toLowerCase());
          const bIndex = categoryOrder.indexOf(b.title.toLowerCase());
          return aIndex - bIndex;
        });

      setCollections(filteredCollections);
    }
    fetchData();
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
              <h2 className="text-2xl md:text-3xl font-headline text-foreground">
                New Drop
              </h2>
              <Badge variant="default">NEW COLLECTION</Badge>
            </div>
            <Button asChild variant="outline">
              <Link href="/collections">Shop All</Link>
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
          {collections.map((collection) => {
            const titleLower = collection.title.toLowerCase();
            const href = `/shop/${titleLower}`;
            const imageUrl = collection.cover_image_url ? `${imgBaseUrl}${collection.cover_image_url}` : categoryPlaceholders[titleLower] || "https://placehold.co/600x800";
            const dataAiHint = dataAiHints[titleLower] || "fashion model";

            return (
              <Link href={href} key={collection.id} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={imageUrl}
                  alt={`Model wearing ${collection.title} clothing`}
                  data-ai-hint={dataAiHint}
                  width={600}
                  height={800}
                  className="object-cover w-full h-full aspect-[3/4] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-end p-8 text-white">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-2xl font-headline font-bold uppercase">{collection.title}</h3>
                    <ArrowRight className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.section>
  );
}
