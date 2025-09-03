import { Hero } from '@/components/hero';
import { FeaturedCollection } from '@/components/featured-collection';
import { NewArrivalsAndCategories } from '@/components/new-arrivals-and-categories';
import { Accessories } from '@/components/accessories';
import { NewsletterSignup } from '@/components/newsletter-signup';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <NewArrivalsAndCategories />
      <Accessories />
      <FeaturedCollection />
      <NewsletterSignup />
    </div>
  );
}
