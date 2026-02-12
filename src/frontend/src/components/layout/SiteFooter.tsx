import { Heart } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Separator } from '@/components/ui/separator';
import { SITE_CONFIG } from '@/lib/content';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'herwellness';

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Herwellness</h3>
            <p className="text-sm text-muted-foreground">
              Empowering women through personalized wellness information and supportive programs.
            </p>
            <div className="pt-2">
              <a
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <SiInstagram className="h-5 w-5" />
                <span>{SITE_CONFIG.instagram.handle}</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/personalized-wellness" className="hover:text-primary transition-colors">Personalized Wellness</a></li>
              <li><a href="/wellness-kits" className="hover:text-primary transition-colors">Wellness Kits</a></li>
              <li><a href="/challenges" className="hover:text-primary transition-colors">Challenges</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/free-pdfs" className="hover:text-primary transition-colors">Free PDFs</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About & FAQ</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Legal</h4>
            <p className="text-xs text-muted-foreground">
              This platform provides general wellness information only. It is not intended to diagnose, treat, or provide medical advice.
            </p>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {currentYear} Herwellness. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 fill-primary text-primary" /> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
