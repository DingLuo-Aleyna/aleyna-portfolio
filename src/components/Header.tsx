'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Homepage', href: '/' },
  { label: 'About Me', href: '#about' },
  { label: 'News', href: '#news' },
  { label: 'Publications', href: '#publications' },
  { label: 'Honors and Awards', href: '#honors-and-awards' },
  { label: 'Educations', href: '#educations' },
  { label: 'Internships', href: '#internships' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sectionIds = [
        'about',
        'news',
        'publications',
        'honors-and-awards',
        'educations',
        'internships',
      ];

      let current = 'about';

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 80) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;

    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close, { once: true });

    return () => window.removeEventListener('scroll', close);
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    if (href.startsWith('#')) {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-background border-b border-border'
        }`}
      >
        <div className="max-w-[1200px] mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <AppLogo size={32} />
            <span className="font-bold text-base text-foreground hidden sm:block">
              Aleyna
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive =
                link.href === '/'
                  ? activeSection === 'about'
                  : activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    if (link.href.startsWith('#')) {
                      event.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 no-underline ${
                    isActive
                      ? 'text-primary font-bold bg-primary/5'
                      : 'text-secondary-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <>
                <span className="w-5 h-0.5 bg-foreground rotate-45 translate-y-2 transition-all duration-200" />
                <span className="w-5 h-0.5 bg-foreground opacity-0 transition-all duration-200" />
                <span className="w-5 h-0.5 bg-foreground -rotate-45 -translate-y-2 transition-all duration-200" />
              </>
            ) : (
              <>
                <span className="w-5 h-0.5 bg-foreground transition-all duration-200" />
                <span className="w-5 h-0.5 bg-foreground transition-all duration-200" />
                <span className="w-5 h-0.5 bg-foreground transition-all duration-200" />
              </>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="mobile-nav-overlay lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-50 bg-background border-b border-border shadow-lg lg:hidden transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => {
                if (link.href.startsWith('#')) {
                  event.preventDefault();
                  handleNavClick(link.href);
                } else {
                  setMenuOpen(false);
                }
              }}
              className="px-3 py-3 rounded-md text-sm font-medium text-secondary-foreground hover:text-foreground hover:bg-secondary transition-colors no-underline min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
