import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { BrandLogo } from '../common/BrandLogo';
import { AuthButton } from '../auth/AuthButton';
import { Menu, X } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SITE_CONFIG } from '@/lib/content';

export function SiteHeader() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Personalized Wellness', path: '/personalized-wellness' },
    { label: 'Wellness Kits', path: '/wellness-kits' },
    { label: 'Challenges', path: '/challenges' },
    { label: 'Free PDFs', path: '/free-pdfs' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BrandLogo className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="transition-colors hover:text-primary"
              activeProps={{ className: 'text-primary font-semibold' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE_CONFIG.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <SiInstagram className="h-4 w-4" />
            <span>Instagram</span>
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <AuthButton />
          
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-lg transition-colors hover:text-primary"
                    activeProps={{ className: 'text-primary font-semibold' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={SITE_CONFIG.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <SiInstagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
