import React from 'react';

const internships = [
  {
    period: 'Aug. 2026',
    role: 'Trust Management Intern, Family Trust Office',
    company: 'Zijin Trust Co., Ltd',
    location: 'Nanjing',
    details: [
      'Researched overdue management of offshore trusts, independently producing an analytical report on Hong Kong SFO/MFO structures, licensing requirements, policy implications, and advantages in taxation, asset protection, and wealth succession',
      "Analyzed the financial and tax implications of China's new individual income tax policy on offshore trusts, summarizing key tax implications and quantifying the impact on taxable income, tax burden, and after-tax cash flows",
      'Conducted two case studies to evaluate the financial and asset-protection implications of irrevocable trusts under potential marital and creditor-risk scenarios',
      'Produced comparative tables highlighting the relative advantages of offshore trust structures across three dimensions',
    ],
  },
  {
    period: 'Jun. – Aug. 2026',
    role: 'Financial Reporter, Editorial Department',
    company: 'InsuranceAsia News (IAN)',
    location: 'Hong Kong',
    details: [
      "Produced data-driven financial news reports for an ongoing podcast series on Asia's insurance sector, covering market trends, regulatory developments, company-level activities, and people moves across Asia",
      'Conducted company and industry analysis on major insurers in Mainland China, Hong Kong, Taiwan, Singapore, and Japan, benchmarking firms across segment leadership, domestic versus overseas exposure, financial performance, and market capitalization based on financial statements, company press releases, and official regulatory filings',
      "Evaluated industry growth and emerging risk factors in Asia's shipbuilding and marine insurance market by integrating market data, asset valuation, insurance pricing, and macroeconomic indicators, producing an investment-oriented financial report",
      'Synthesized regulatory documents, market announcements, and corporate data to produce industry briefs on renewal disclosure, supervisory regulation, and market structure developments',
      'Developed interactive Datawrapper charts to visualize six-month M&A deals, identifying markets with the highest transaction volume and translating deal data into a research report for insurance professionals',
    ],
  },
  {
    period: 'Jul. – Aug. 2025',
    role: 'Data Intern, Data Analysis Department',
    company: 'Caixin Data Technology Co., Ltd',
    location: 'Remote',
    details: [
      'Built a five-year macroeconomic dataset covering five provinces and 52 prefecture-level cities in China by extracting and consolidating data from National Bureau of Statistics releases, provincial statistical yearbooks, and Wind using Python and SQL',
      'Conducted data preprocessing including cleaning, missing-value treatment, cross-source consistency validation, and feature engineering to build standardized Excel tables and structured databases for quantitative analysis by editorial and product teams',
      'Performed macroeconomic analysis using time-series regression, cross-sectional benchmarking, and scenario analysis to identify regional growth patterns and cross-provincial disparities, generating investment-relevant insights for editorial research reports',
    ],
  },
  {
    period: 'Jul. – Sept. 2024',
    role: 'Public Relations & News Release Assistant',
    company: 'Hong Kong Financial Services Institute',
    location: 'Hong Kong',
    details: [
      'Independently conducted and produced multiple written and video interviews with senior stakeholders, making end-to-end production from question design to final edit',
      "Managed and visualized complex operational data by using Flourish; reports published on the institute's WeChat official account",
    ],
  },
];

export default function InternshipsSection() {
  return (
    <section id="internships" className="mb-14 reveal">
      <h2 className="section-heading">
        <span>💼</span> Internships
      </h2>

      <div className="space-y-7">
        {internships?.map((intern, index) => (
          <div
            key={index}
            className="flex gap-4 items-start reveal"
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            {/* Timeline dot */}
            <div className="flex flex-col items-center pt-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full border-2 border-primary bg-background shrink-0" />
              {index < internships?.length - 1 && (
                <div className="w-px flex-1 bg-border mt-2 min-h-[60px]" />
              )}
            </div>

            <div className="pb-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="text-sm font-bold text-foreground leading-snug">
                    {intern?.role}
                  </h3>
                  <p className="text-sm font-semibold text-primary">
                    {intern?.company}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {intern?.location}
                  </p>
                </div>

                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-full shrink-0">
                  {intern?.period}
                </span>
              </div>

              <ul className="mt-2 space-y-1">
                {intern?.details?.map((detail, di) => (
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
