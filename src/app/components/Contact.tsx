import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/data';
import { Mail, Phone, Github, Linkedin, Facebook, Music, Newspaper } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Contact = () => {
  const { language } = useLanguage();
  const { personalInfo, ui } = portfolioData[language];

  return (
    <section id="contact" className="py-24 bg-[#1a1a1a] relative overflow-hidden">
        {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#64ffda]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[#64ffda] mb-4">05. {ui.contact.subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mb-6">
            {ui.contact.title}
          </h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            {ui.contact.description}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a 
              href={`mailto:${personalInfo.contact.email}`}
              className="px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono hover:bg-[#64ffda]/10 transition-colors flex items-center gap-3"
            >
              <Mail size={20} />
              {ui.contact.say_hello}
            </a>
            <a 
              href={`tel:${personalInfo.contact.phone}`}
              className="px-8 py-4 border border-[#ff6347] text-[#ff6347] rounded font-mono hover:bg-[#ff6347]/10 transition-colors flex items-center gap-3"
            >
              <Phone size={20} />
              {ui.contact.call_me}
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a 
              href={personalInfo.contact.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#e6f1ff] transition-colors hover:-translate-y-1 transform duration-300"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href={personalInfo.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#e6f1ff] transition-colors hover:-translate-y-1 transform duration-300"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#e6f1ff] transition-colors hover:-translate-y-1 transform duration-300"
              title="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#e6f1ff] transition-colors hover:-translate-y-1 transform duration-300"
              title="TikTok"
            >
              <Music size={24} />
            </a>
            <a 
              href="https://app.daily.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#e6f1ff] transition-colors hover:-translate-y-1 transform duration-300"
              title="Daily.dev"
            >
              <Newspaper size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
