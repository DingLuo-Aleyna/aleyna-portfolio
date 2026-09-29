import React from 'react';

const newsItems = [
  {
    date: '2026.09',
    emoji: '🎉',
    content: (
      <>
        Started my final year at HKBU and took over as{' '}
        <strong>Chief Editor of HKBU Financial Journalism</strong>.
      </>
    ),
  },
  {
    date: '2026.08',
    emoji: '🎉',
    content: (
      <>
        Completed my Trust Management Internship in the{' '}
        <strong>Family Trust Office at Zijin Trust Co., Ltd</strong>.
      </>
    ),
  },
  {
    date: '2026.06',
    emoji: '🎉',
    content: (
      <>
        Wrapped up my semester exchange in{' '}
        <strong>Mathematical Science and Economics at NTU, Singapore</strong>.
      </>
    ),
  },
  {
    date: '2026.04',
    emoji: '🎉',
    content: (
      <>
        Built a <strong>RegTech Analytics &amp; Anti-Money Laundering (AML)
        Decision Support System</strong> as Founder-Developer under the
        National Graduate Research Innovation Programme (GRIP), NRF, NUS/NTU.
      </>
    ),
  },
  {
    date: '2025.11',
    emoji: '🎉',
    content: (
      <>
        Led a team as <strong>Team Leader</strong> (Portfolio Analytics &amp;
        Quantitative Investing) in the{' '}
        <strong>Bloomberg Global Trading Challenge 2025</strong>.
      </>
    ),
  },
  {
    date: '2025.05',
    emoji: '🎉',
    content: (
      <>
        Led a school-sponsored <strong>international field research and
        political–economic reporting project on the South Korea presidential
        election</strong>.
      </>
    ),
  },
  {
    date: '2025.01',
    emoji: '🎉',
    content: (
      <>
        Selected for the <strong>Bloomberg News Mentorship Program</strong>{' '}
        (Fintech Industry Research &amp; Data-Driven Financial Reporting).
      </>
    ),
  },
  {
    date: '2024.12',
    emoji: '🎉',
    content: (
      <>
        My paper “KOL Strategy under the Empowerment of AI: A New Chapter in
        Brand Marketing” was published in{' '}
        <strong>Advances in Economics, Management and Political Sciences</strong>{' '}
        (ICFTBA 2024 workshop proceedings).
      </>
    ),
  },
  {
    date: '2024.11',
    emoji: '🎉',
    content: (
      <>
        Selected for the <strong>Greater Bay Area Fintech Talent
        Initiative</strong> (Bloomberg–HKMA FinTech Talent Development
        Program).
      </>
    ),
  },
  {
    date: '2024.06',
    emoji: '🎉',
    content: (
      <>
        Participated in the <strong>US &amp; Chinese Economies Online Research
        Seminar</strong> at the Hopkins–Nanjing Center, Johns Hopkins
        University.
      </>
    ),
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="mb-14 reveal">
      <h2 className="section-heading">
        <span>🔥</span> News
      </h2>

      <ul className="space-y-4">
        {newsItems?.map((item, index) => (
          <li
            key={index}
            className="flex gap-3 items-start text-sm leading-relaxed text-secondary-foreground reveal"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <span className="news-date shrink-0 pt-0.5">{item?.date}:</span>
            <span>
              <span className="mr-1">{item?.emoji}</span>
              {item?.content}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
