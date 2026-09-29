import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  year: string;
  badgeType: 'blue' | 'green' | 'purple' | 'orange' | 'red';
  links: { label: string; href: string }[];
  thumbnail: string;
  thumbnailAlt: string;
  highlight?: string;
}

const publications: Publication[] = [
  {
    title:
      'KOL Strategy under the Empowerment of AI: A New Chapter in Brand Marketing',
    authors: 'Yunqi Wang',
    venue:
      'Advances in Economics, Management and Political Sciences (AEMPS), Vol. 113 — ICFTBA 2024 Workshop Proceedings',
    venueShort: 'AEMPS 2024',
    year: '2024',
    badgeType: 'blue',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.54254/2754-1169/2024.LD18189' },
      {
        label: 'ResearchGate',
        href: 'https://www.researchgate.net/publication/387016426_KOL_Strategy_under_the_Empowerment_of_AI_A_New_Chapter_in_Brand_Marketing',
      },
    ],
    // TODO: replace with a paper figure/screenshot, or remove the thumbnail block
    thumbnail: '',
    thumbnailAlt: 'KOL Strategy under the Empowerment of AI paper',
  },
];

const badgeClasses: Record<string, string> = {
  blue: 'venue-badge venue-badge-blue',
  green: 'venue-badge venue-badge-green',
  purple: 'venue-badge venue-badge-purple',
  orange: 'venue-badge venue-badge-orange',
  red: 'venue-badge venue-badge-red',
};

export default function PublicationsSection() {
  return (
    <section id="publications" className="mb-14 reveal">
      <h2 className="section-heading">
        <span>📄</span> Publications
      </h2>

      <div className="space-y-7">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="flex gap-4 items-start group hover:bg-muted rounded-lg p-3 -mx-3 transition-colors duration-200 reveal"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {/* Thumbnail (only rendered when a thumbnail image is provided) */}
            {pub.thumbnail && (
              <div className="w-[80px] h-[56px] shrink-0 rounded overflow-hidden border border-border hidden sm:block">
                <AppImage
                  src={pub.thumbnail}
                  alt={pub.thumbnailAlt}
                  width={80}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={badgeClasses[pub.badgeType]}>
                  {pub.venueShort}
                </span>
                {pub.highlight && (
                  <span className="award-badge">{pub.highlight}</span>
                )}
              </div>

              <h3 className="text-sm font-semibold text-foreground leading-snug mb-1 font-semibold">
                {pub.title}
              </h3>

              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                {pub.authors} — <em>{pub.venue}</em>, {pub.year}
              </p>

              <div className="flex gap-3 flex-wrap">
                {pub.links.map((link, li) => (
                  <a
                    key={li}
                    href={link.href}
                    className="text-xs font-semibold text-primary hover:text-accent no-underline border border-primary/30 hover:border-accent/60 px-2.5 py-0.5 rounded transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
