import { Button } from './ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-background text-foreground py-20 md:py-32">
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
    </section>
  );
}
