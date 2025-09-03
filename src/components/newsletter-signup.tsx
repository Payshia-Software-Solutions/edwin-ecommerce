import Image from 'next/image';
import { Input } from './ui/input';
import { Button } from './ui/button';

export function NewsletterSignup() {
  return (
    <section className="relative bg-background py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40">
        <Image
          src="https://placehold.co/1920x400.png"
          alt="Abstract background with motion lines"
          data-ai-hint="abstract motion lines"
          fill
          objectFit="cover"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-headline font-bold uppercase mb-3 text-foreground">
          OUR NEWEST PRODUCTS STRAIGHT TO YOUR INBOX.
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-muted-foreground">
          Be the first to know about our products, limited-time offers, community events, and more.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-background border-foreground/30 rounded-full h-12 px-6 flex-grow text-center sm:text-left focus:border-primary focus:ring-primary"
          />
          <Button 
            type="submit" 
            className="bg-foreground text-background hover:bg-foreground/80 rounded-full font-bold w-full sm:w-auto shrink-0 h-12 px-8 uppercase"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
