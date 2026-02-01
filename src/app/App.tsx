import React from 'react';
import '@/styles/fonts.css';
import '@/styles/global.css';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Timeline } from '@/app/components/Timeline';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const AppContent = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen text-[#e6f1ff] selection:bg-[#64ffda] selection:text-[#1a1a1a] font-sans">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
