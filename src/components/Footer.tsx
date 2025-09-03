import Link from 'next/link';

const footerSections = [
  {
    title: 'Shop',
    links: ['New Arrivals', 'Clothing', 'Dresses', 'Sale'],
  },
  {
    title: 'About',
    links: ['Our Story', 'Careers', 'Press'],
  },
  {
    title: 'Help',
    links: ['Contact Us', 'Shipping', 'Returns', 'FAQ'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-headline text-lg font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-headline text-lg font-semibold">Stay Connected</h3>
            <p className="mt-4 text-muted-foreground">
              Sign up for our newsletter to get the latest updates.
            </p>
            {/* Newsletter form can be added here */}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} StyleGen. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* Social media icons can be added here */}
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Instagram
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Facebook
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
