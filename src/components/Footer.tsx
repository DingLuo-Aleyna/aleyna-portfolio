import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: logo + copyright */}
        <div className="flex items-center gap-2">
          <AppLogo size={24} />
          <span className="text-sm font-medium text-muted-foreground">
            Aleyna
          </span>
          <span className="text-sm text-muted-foreground hidden sm:inline">
            © 2026
          </span>
        </div>

        {/* Center: links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline"
          >
            Home
          </Link>

          <a
            href="#publications"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline"
          >
            Publications
          </a>

          <a
            href="mailto:aleyna23266007@gmail.com"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline"
          >
            Contact
          </a>
        </div>

        {/* Right: mobile copyright */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground sm:hidden">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
