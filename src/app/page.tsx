import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import NewsSection from './components/NewsSection';
import PublicationsSection from './components/PublicationsSection';
import HonorsSection from './components/HonorsSection';
import EducationSection from './components/EducationSection';
import InternshipsSection from './components/InternshipsSection';
import ScrollRevealInit from './components/ScrollRevealInit';

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />

      <div className="max-w-[1200px] mx-auto px-6 pt-16">
        <div className="lg:grid lg:grid-cols-[320px_1fr] lg:gap-12">
          <Sidebar />

          <main className="pt-10 lg:pt-14 pb-16">
            <AboutSection />
            <NewsSection />
            <PublicationsSection />
            <HonorsSection />
            <EducationSection />
            <InternshipsSection />
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
