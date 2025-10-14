import { Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../logo';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" aria-label="Back to homepage">
              <Logo className="h-8 w-auto" />
            </Link>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Github />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Digital Roadmap Conference. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
