import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Terminal, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '@/data';
import { useLanguage } from '@/context/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = portfolioData[language].ui.nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', label: language === 'fr' ? 'Accueil' : 'Home', href: '#hero' }, // Keep logic simple
    { name: 'Compétences', label: t.skills, href: '#skills' },
    { name: 'Projets', label: t.projects, href: '#projects' },
    { name: 'Parcours', label: t.education, href: '#timeline' },
    { name: 'Contact', label: t.contact, href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="relative group">
              <Terminal className="w-8 h-8 text-[#64ffda] group-hover:opacity-0 transition-opacity duration-300 absolute" />
              <Code className="w-8 h-8 text-[#ff6347] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-mono text-xl font-bold text-[#e6f1ff]">
              Emery<span className="text-[#64ffda]">.</span>Tossavi
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-sm text-[#e6f1ff] hover:text-[#64ffda] transition-colors duration-300 relative group"
                >
                  <span className="text-[#64ffda] mr-1">0{index + 1}.</span>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff6347] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 rounded border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors font-mono text-xs"
            >
              <Globe size={14} />
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-2 py-1 rounded border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors font-mono text-xs"
            >
              <Globe size={14} />
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#e6f1ff] hover:text-[#64ffda] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a1a] border-b border-[#2d2d2d]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium font-mono text-[#e6f1ff] hover:text-[#64ffda] hover:bg-[#2d2d2d] rounded-md"
                >
                  <span className="text-[#64ffda] mr-2">0{index + 1}.</span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
