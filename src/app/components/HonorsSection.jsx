import React from 'react';

const honors = [
  {
    year: '2023–26',
    title: "President's Honour Roll (4 consecutive semesters)",
    org: 'Hong Kong Baptist University',
  },
  {
    year: '2025–26',
    title: 'HKSAR Government Reaching Out Award (ROA)',
    org: 'HKSAR Government',
  },
  {
    year: '2025–26',
    title: 'Vincent Woo Scholarship for Outstanding Mainland Students (School Nomination)',
    org: 'Hong Kong Baptist University',
  },
  {
    year: '2025–26',
    title: 'Commercial Radio 50th Anniversary Scholarship (School Selection)',
    org: 'Hong Kong Baptist University',
  },
  {
    year: '2025–26',
    title: 'RA Industries International Student Exchange Scholarship',
    org: 'Hong Kong Baptist University',
  },
  {
    year: '2024–25',
    title: 'Mrs Lee Mang Pew Memorial Award (School Nomination)',
    org: 'Hong Kong Baptist University',
  },
  {
    year: '2024–25',
    title: 'Mr. & Mrs. Wong Sik-pun Scholarship for Outstanding Students (School Selection)',
    org: 'Hong Kong Baptist University',
  },
  {
    year: '2024–25',
    title: 'Bronze Award',
    org: 'All Hong Kong University CSSA Basketball League',
  },
  {
    year: '2023–24',
    title: "Dean's List (Semester 1, 2023–24)",
    org: 'Hong Kong Baptist University',
  },
];

export default function HonorsSection() {
  return (
    <section id="honors-and-awards" className="mb-14 reveal">
      <h2 className="section-heading">
        <span>🏆</span> Honors and Awards
      </h2>

      <div className="space-y-3">
        {honors?.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 reveal"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <span className="news-date shrink-0 font-semibold text-muted-foreground pt-0.5">
              {item?.year}
            </span>

            <div>
              <span className="font-semibold text-foreground">
                {item?.title}
              </span>
              <span className="text-muted-foreground">, {item?.org}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
