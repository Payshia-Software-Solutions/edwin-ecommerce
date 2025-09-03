"use client";

import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.section 
      className="bg-background text-foreground py-20 md:py-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center flex flex-col items-center">
        <h1 className="font-headline font-bold text-7xl md:text-8xl lg:text-9xl tracking-widest uppercase">
          Eddwin
        </h1>
        <p className="font-cursive text-2xl md:text-3xl mt-2 mb-8">
          Never Die
        </p>
        <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full font-bold px-10 uppercase">
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
    </motion.section>
  );
}
