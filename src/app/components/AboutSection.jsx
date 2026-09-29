import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="mb-14 reveal active">
      <div className="prose prose-base max-w-none text-secondary-foreground">
        <p className="mb-4 leading-relaxed">
          Hi! I am <strong>Yunqi Wang</strong>, and you can call me{' '}
          <strong>Aleyna</strong>. I am a final-year undergraduate in the{' '}
          <a href="https://comm.hkbu.edu.hk" className="font-medium">
            School of Communication
          </a>{' '}
          at{' '}
          <a href="https://www.hkbu.edu.hk" className="font-medium">
            Hong Kong Baptist University (HKBU)
          </a>
          , pursuing a Bachelor of Communication (Hons.) in Journalism and Digital
          Media, with double minors in Applied Mathematics and Economics, in the
          Financial Journalism Stream (Data and Media Communication Concentration).
          I recently completed a semester exchange programme in Mathematical Science
          and Economics at{' '}
          <a href="https://www.ntu.edu.sg" className="font-medium">
            Nanyang Technological University (NTU)
          </a>{' '}
          in Singapore.
        </p>

        <p className="mb-4 leading-relaxed">
          I have hands-on experience across financial journalism, FinTech, and data
          analysis. I worked as a Trust Management Intern in the Family Trust Office
          at Zijin Trust Co., Ltd, a Financial Reporter in the Editorial Department
          of{' '}
          <a href="https://insuranceasianews.com" className="font-medium">
            InsuranceAsia News (IAN)
          </a>
          , a Data Intern in the Data Analysis Department at{' '}
          <a href="https://www.caixinglobal.com" className="font-medium">
            Caixin Data Technology
          </a>
          , and a Public Relations & News Release Assistant at the Hong Kong
          Financial Services Institute. I was also selected for several{' '}
          <a href="https://www.bloomberg.com" className="font-medium">
            Bloomberg
          </a>{' '}
          talent programmes, serving as Team Leader in the Bloomberg Global Trading
          Challenge 2025 and joining the Bloomberg News Mentorship Program and the
          Bloomberg–HKMA Greater Bay Area Fintech Talent Initiative.
        </p>

        <p className="mb-4 leading-relaxed">
          My research sits at the intersection of data science, financial media, and
          FinTech. I founded and developed a RegTech Analytics & Anti-Money
          Laundering (AML) Decision Support System under the{' '}
          <a href="https://www.nrf.gov.sg" className="font-medium">
            National Graduate Research Innovation Programme (GRIP)
          </a>{' '}
          at NUS/NTU {/* TODO: add your GitHub repository link here */}
          , led a school-sponsored international field research and
          political–economic reporting project on the South Korea presidential
          election, and studied US–China economic policy under Prof.
          Armstrong-Taylor's supervision at the{' '}
          <a
            href="https://sais.jhu.edu/hopkins-nanjing-center"
            className="font-medium"
          >
            Hopkins–Nanjing Center
          </a>{' '}
          at Johns Hopkins University. My paper “KOL Strategy under the
          Empowerment of AI: A New Chapter in Brand Marketing” was published in
          the{' '}
          <a
            href="https://doi.org/10.54254/2754-1169/2024.LD18189"
            className="font-medium"
          >
            Advances in Economics, Management and Political Sciences
          </a>{' '}
          (ICFTBA 2024 proceedings) in Dec. 2024.
        </p>

        <p className="leading-relaxed">
          Academically, I have been on the <strong>President's Honour Roll for
          four consecutive semesters</strong> and have received the Dean's List,
          the HKSAR Government Reaching Out Award, and several scholarships. I am
          currently the Chief Editor of HKBU Financial Journalism, and I speak
          Mandarin, English, and Cantonese. I am actively seeking opportunities in{' '}
          <strong>
            data-driven financial journalism, FinTech, and quantitative research
          </strong>
          . Let's work together to tell better financial stories with data!
        </p>
      </div>
    </section>
  );
}
