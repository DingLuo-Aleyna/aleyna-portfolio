import React from 'react';
import AppImage from '@/components/ui/AppImage';
import AppLogo from '@/components/ui/AppLogo';

export default function Sidebar() {
  return (
    <div className="sidebar-sticky lg:block px-6 py-10 lg:py-12">
      {/* Avatar */}
      <div className="flex flex-col items-center lg:items-start gap-4 mb-6">
        <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-border shadow-md shrink-0">
          <AppImage
            src="/assets/image/aleyna-bg-removed.png"
            alt="Portrait of Yunqi Wang (Aleyna)"
            width={140}
            height={140}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Name & affiliation */}
      <div className="text-center lg:text-left">
        <h1 className="text-hero-name font-bold text-foreground leading-tight mb-1">
          Yunqi Wang (Aleyna)
        </h1>
        <p className="text-sm text-muted-foreground leading-snug">
          School of Communication
          <br />
          Hong Kong Baptist University
        </p>
        <p className="text-sm text-muted-foreground italic mt-2 leading-snug">
          Financial Journalism &middot; Data &middot; FinTech
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border mb-5" />

      {/* Location & Social links */}
      <div className="flex flex-col gap-0.5">
        {/* Location */}
        <div className="social-link">
          <svg
            className="w-4 h-4 shrink-0 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span className="text-secondary-foreground">Hong Kong</span>
        </div>

        {/* Email */}
        <a href="mailto:aleyna23266007@gmail.com" className="social-link">
          <svg
            className="w-4 h-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
            />
          </svg>
          <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aleyna-w-132529322"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.558V9H3.555v11.452Z" />
          </svg>
          <span>LinkedIn</span>
        </a>

        {/* Instagram */}
        {/* TODO: Instagram link — left empty for now */}
        <a href="#" className="social-link">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.65.45a5.92 5.92 0 0 1 3.39 3.39c.21.68.396 1.48.45 2.65.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.45 2.65a5.92 5.92 0 0 1-3.39 3.39c-.68.21-1.48.396-2.65.45-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.65-.45a5.92 5.92 0 0 1-3.39-3.39c-.21-.68-.396-1.48-.45-2.65C.612 16.584.6 16.204.6 13s.012-3.584.07-4.85c.054-1.17.24-1.97.45-2.65a5.92 5.92 0 0 1 3.39-3.39c.68-.21 1.48-.396 2.65-.45C8.416 2.175 8.796 2.163 12 2.163Zm0 3.675A7.162 7.162 0 1 0 12 20.162 7.162 7.162 0 0 0 12 5.838Zm0 11.815a4.653 4.653 0 1 1 0-9.306 4.653 4.653 0 0 1 0 9.306Zm5.812-10.41a1.673 1.673 0 1 1-3.346 0 1.673 1.673 0 0 1 3.346 0Z" />
          </svg>
          <span>Instagram</span>
        </a>

        {/* GitHub */}
        {/* TODO: GitHub link — left empty for now */}
        <a href="#" className="social-link">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23 1.645 1.653 1.24 2.873 1.08 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.63-5.373-12-12-12Z" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>

      {/* Mobile logo brand */}
      <div className="mt-8 flex items-center gap-2 lg:hidden">
        <AppLogo size={28} />
        <span className="font-bold text-sm text-muted-foreground">Aleyna</span>
      </div>
    </div>
  );
}
