import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.98-1.59-2.01-2.18-4.7-1.6-7.12.5-1.99 1.98-3.63 3.91-4.45.29-.12.61-.22.94-.31.02-3.56.02-7.12.01-10.68.13-1.54.72-3.04 1.76-4.16 1.04-1.12 2.58-1.74 4.19-1.9zM10.02 15.3c.01.2.02.4.02.61.01 1.25-.5 2.5-1.5 3.11-1.02.62-2.3.61-3.33-.02-1.02-.62-1.67-1.77-1.66-2.98.02-.2.03-.4.04-.6.01-2.25.01-4.5-.01-6.75-.01-1.26.5-2.51 1.51-3.13 1.01-.62 2.3-.61 3.33.02 1.01.62 1.67 1.77 1.66 2.98-.01.2-.02.4-.02.6-.02 2.25-.01 4.5.01 6.75z"></path>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* MENU */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Menu</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Lookbook</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Shipping</Link></li>
            </ul>
          </div>

          {/* MY ACCOUNT */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">My Account</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Sign In</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Register</Link></li>
            </ul>
          </div>
          
          {/* LOGO & SOCIALS */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end">
             <Link href="/">
              <div className="flex flex-col text-left md:text-right">
                <span className="font-headline text-4xl font-bold tracking-widest text-white">EDDWIN</span>
                <span className="font-cursive text-lg -mt-1 text-white">Never Die</span>
              </div>
            </Link>
            <div className="flex space-x-4 mt-6 text-white">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-300"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="TikTok" className="hover:text-gray-300"><TikTokIcon /></a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-300"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex space-x-6 order-2 md:order-1 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Contact</Link>
          </div>
          <div className="order-1 md:order-2">
            <p>&copy; {new Date().getFullYear()} EDDWIN. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
