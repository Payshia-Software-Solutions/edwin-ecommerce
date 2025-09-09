
"use client";

import Link from 'next/link';
import { ChevronDown, Menu, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ThemeToggle } from '../theme-toggle';
import { CartSidebar } from '../cart/cart-sidebar';
import { useEffect, useState } from 'react';
import { getCollections } from '@/lib/data';
import { Collection } from '@/lib/types';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import React from 'react';


const navItems = [
    {
      label: 'MEN',
      href: '/shop/men',
    },
    {
      label: 'WOMEN',
      href: '/shop/women',
    },
    {
      label: 'ACCESSORIES',
      href: '/shop/accessories',
    },
    {
      label: 'GIFTS',
      href: '/gifts',
      subItems: [
          { label: 'Gift Cards', href: '/gifts/gift-cards' },
          { label: 'For Him', href: '/gifts/for-him' },
          { label: 'For Her', href: '/gifts/for-her' },
      ],
    },
  ];

const lastChanceLink = {
    label: 'LAST CHANCE',
    href: '/sale'
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export function Navbar() {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    async function fetchCollections() {
      const fetchedCollections = await getCollections();
      setCollections(fetchedCollections);
    }
    fetchCollections();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex flex-col">
              <span className="font-headline text-2xl md:text-3xl font-bold tracking-widest">EDDWIN</span>
              <span className="font-cursive text-xs md:text-sm -mt-1">Never Die</span>
            </div>
          </Link>
        </div>

        {/* Center Section: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {collections.map((component) => (
                      <ListItem
                        key={component.id}
                        title={component.title}
                        href={`/collections/${component.id}`}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navItems.map((item) => (
                item.subItems ? (
                  <NavigationMenuItem key={item.label}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                         <NavigationMenuTrigger className="text-sm font-medium uppercase text-muted-foreground transition-colors hover:text-foreground focus:outline-none">
                          {item.label}
                        </NavigationMenuTrigger>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.subItems.map((subItem) => (
                          <DropdownMenuItem key={subItem.label} asChild>
                            <Link href={subItem.href}>{subItem.label}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                     <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                           {item.label}
                        </NavigationMenuLink>
                      </Link>
                  </NavigationMenuItem>
                )
              ))}
               <NavigationMenuItem>
                 <Link href={lastChanceLink.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                       {lastChanceLink.label}
                    </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right Section: Controls and Mobile Menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="relative hidden md:block">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for anything"
              className="h-10 w-full max-w-[200px] rounded-full bg-secondary pl-10"
            />
          </div>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <User className="h-6 w-6" />
            <span className="sr-only">Account</span>
          </Button>
          
          <CartSidebar />

          <span className="hidden sm:block text-sm font-semibold">LK Rs</span>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-4 p-4 text-lg font-medium mt-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="collections">
                    <AccordionTrigger className="py-3 text-base font-semibold uppercase hover:no-underline">
                      Collections
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-2 pl-4">
                        {collections.map((collection) => (
                          <Link key={collection.id} href={`/collections/${collection.id}`} className="text-muted-foreground hover:text-foreground">
                            {collection.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  {navItems.map((item) => (
                    item.subItems ? (
                    <AccordionItem value={item.label} key={item.label}>
                      <AccordionTrigger className="py-3 text-base font-semibold uppercase hover:no-underline">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-2 pl-4">
                          {item.subItems.map((subItem) => (
                            <Link key={subItem.label} href={subItem.href} className="text-muted-foreground hover:text-foreground">
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    ) : (
                      <Link key={item.label} href={item.href} className="font-semibold uppercase py-3 border-b flex items-center justify-between hover:no-underline">
                        {item.label}
                      </Link>
                    )
                  ))}
                </Accordion>
                <Link href={lastChanceLink.href} className="font-semibold uppercase py-2 border-t mt-2">
                  {lastChanceLink.label}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
