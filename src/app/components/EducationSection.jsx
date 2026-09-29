import React from 'react';

const education = [
  {
    degree: 'Bachelor of Communication (Hons.) in Journalism and Digital Media',
    institution: 'Hong Kong Baptist University (HKBU) — School of Communication',
    location: 'Hong Kong',
    period: 'Sept. 2023 – Jun. 2027',
    details: [
      'Double Minors: Applied Mathematics & Economics',
      'Financial Journalism Stream (Data and Media Communication Concentration)',
    ],
  },
  {
    degree: 'Exchange Programme: Mathematical Science and Economics',
    institution: 'Nanyang Technological University (NTU)',
    location: 'Singapore',
    period: 'Jan. – Jun. 2026',
    details: [],
  },
];

export default function EducationSection() {
  return (
    <section id="educations" className="mb-14 reveal">
      <h2 className="section-heading">
        <span>🎓</span> Educations
      </h2>

      <div className="space-y-7">
        {education?.map((edu, index) => (
          <div
            key={index}
            className="flex gap-4 items-start reveal"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Timeline dot */}
            <div className="flex flex-col items-center pt-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
              {index < education?.length - 1 && (
                <div className="w-px flex-1 bg-border mt-2 min-h-[60px]" />
              )}
            </div>

            <div className="pb-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="text-sm font-bold text-foreground leading-snug">
                    {edu?.degree}
                  </h3>
                  <p className="text-sm font-semibold text-primary">
                    {edu?.institution}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {edu?.location}
                  </p>
                </div>

                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-full shrink-0">
                  {edu?.period}
                </span>
              </div>

              <ul className="mt-2 space-y-1">
                {edu?.details?.map((detail, di) => (
                  <li
                    key={di}
                    className="text-xs text-secondary-foreground flex gap-2"
                  >
                    <span className="text-muted-foreground mt-0.5">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
