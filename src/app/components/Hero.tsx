import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/data';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Hero = () => {
  const { language } = useLanguage();
  const { personalInfo, ui } = portfolioData[language];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-[#1a1a1a]">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#64ffda]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6347]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[#64ffda] mb-5">{ui.hero.greeting}</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#e6f1ff] mb-4">
            {personalInfo.name.split(' ')[0]} <span className="text-[#8892b0]">{personalInfo.name.split(' ')[1]}</span>
          </h1>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0] mb-6 font-mono">
            <span className="relative">
             {language === 'fr' ? 'Développeur Fullstack' : 'Fullstack Developer'}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-3 h-8 sm:h-12 bg-[#ff6347] ml-2 align-middle"
              />
            </span>
            <br />
            <span className="text-xl sm:text-3xl mt-2 block text-[#64ffda] opacity-90">
             {language === 'fr' ? '& Analyste en sécurité' : '& Security Analyst'}
            </span>
          </h2>

          <p className="text-[#8892b0] text-lg max-w-xl mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded font-mono hover:bg-[#64ffda]/10 transition-colors flex items-center gap-2 group"
            >
              {ui.experiences.title}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-[#ff6347] text-[#ff6347] rounded font-mono hover:bg-[#ff6347]/10 transition-colors"
            >
              {ui.hero.contact_button}
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#e6f1ff] hover:-translate-y-1 transition-all">
              <Github size={24} />
            </a>
            <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#e6f1ff] hover:-translate-y-1 transition-all">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${personalInfo.contact.email}`} className="text-[#8892b0] hover:text-[#e6f1ff] hover:-translate-y-1 transition-all">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full max-w-md mx-auto aspect-square group">
            <div className="absolute inset-0 border-2 border-[#64ffda] rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="absolute inset-0 border-2 border-[#ff6347] rounded -translate-x-4 -translate-y-4 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 opacity-50"></div>
            <div className="relative rounded overflow-hidden w-full h-full bg-[#2d2d2d]">
              <img 
                src="https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFmcmljYW4lMjBtYWxlJTIwZGV2ZWxvcGVyJTIwY29kaW5nJTIwZGFyayUyMGZ1dHVyaXN0aWMlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5OTc2MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Emery Tossavi" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#64ffda]/20 mix-blend-multiply hover:bg-transparent transition-all duration-500"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
