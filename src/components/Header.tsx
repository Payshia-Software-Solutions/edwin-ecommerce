'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import CartSheet from './CartSheet';
import WishlistSheet from './WishlistSheet';

export default function Header() {
  const navItems = [
    { name: 'New Arrivals', href: '#' },
    { name: 'Clothing', href: '#' },
    { name: 'Dresses', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Sale', href: '#' },
    { name: 'AI Stylist', href: '/recommendations' },
  ];

  return (
    <header className="bg-card/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-headline text-foreground">
              StyleGen
            </Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10 w-48" />
            </div>
            <WishlistSheet />
            <CartSheet />
          </div>
        </div>
      </div>
    </header>
  );
}
