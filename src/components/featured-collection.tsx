import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';

export function FeaturedCollection() {
  const bestSellers = getFeaturedProducts();

  return (
    <section className="bg-background text-foreground">
      {/* Hero-like section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Live the Lifestyle"
          data-ai-hint="lifestyle fashion"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 brightness-75"
        />
        <div className="relative z-10 text-center p-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4 uppercase">
            Live The Lifestyle
          </h1>
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-bold border-transparent rounded-full px-8">
            <Link href="/shop">Explore Collection</Link>
          </Button>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 uppercase tracking-wider">
            Best Sellers
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {bestSellers.map((product) => (
                <CarouselItem key={product.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <Link href={`/product/${product.id}`} className="block h-full group">
                      <div className="flex flex-col h-full">
                          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-gray-100 dark:bg-zinc-800">
                              <Image
                                  src={product.images[0]}
                                  alt={product.name}
                                  data-ai-hint={product.data_ai_hint}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                          </div>
                          <div className="pt-4 text-left">
                              <h3 className="font-medium truncate">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">{product.category}</p>
                              <p className="font-semibold mt-1">${product.price.toFixed(2)}</p>
                          </div>
                      </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Shop The Look Section */}
      <div className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider">
            Shop The Look
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <Link href="/sale" className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1536303158031-c868b371399f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwbW9kZWx8ZW58MHx8fHwxNzUxNzM0OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Model in casual outfit"
                data-ai-hint="male model"
                width={600}
                height={800}
                className="object-cover w-full h-full aspect-[3/4] transition-transform duration-300 group-hover:scale-105 bg-gray-100 dark:bg-zinc-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-headline font-bold uppercase">Last Chance</h3>
                  <div className="h-10 w-10 rounded-full border border-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
            
            <div className="relative justify-center hidden md:flex">
              <Image
                src="https://images.unsplash.com/photo-1595724281096-bd3e2b66c86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkdWZmZWwlMjBiYWclMjBibGFja3xlbnwwfHx8fDE3NTE3MzUxODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Duffel Bag"
                data-ai-hint="duffel bag black"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            <Link href="/shop" className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1611778115319-30500f2e1002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtYWxlJTIwbW9kZWwlMjB0LXNoaXJ0fGVufDB8fHx8MTc1MTczNTI3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Model in t-shirt"
                data-ai-hint="male model t-shirt"
                width={600}
                height={800}
                className="object-cover w-full h-full aspect-[3/4] transition-transform duration-300 group-hover:scale-105 bg-gray-100 dark:bg-zinc-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-headline font-bold uppercase">Shop T-Shorts</h3>
                  <div className="h-10 w-10 rounded-full border border-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center mt-8">
            <div className="h-2 w-2 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
