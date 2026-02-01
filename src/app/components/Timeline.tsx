import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/data';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Timeline = () => {
  const { language } = useLanguage();
  const { education, ui } = portfolioData[language];

  return (
    <section id="timeline" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6f1ff] mb-4 flex items-center gap-3">
            <span className="font-mono text-[#64ffda]">04.</span> {ui.education.title}
          </h2>
          <div className="w-20 h-1 bg-[#ff6347] rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-[#2d2d2d] ml-3 md:ml-6 space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Dot on the line */}
              <span className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-[#1a1a1a] border-2 border-[#64ffda] group-hover:bg-[#64ffda] group-hover:shadow-[0_0_10px_rgba(100,255,218,0.7)] transition-all duration-300" />
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                <h3 className="text-xl font-bold text-[#e6f1ff] leading-tight">
                  {item.degree}
                </h3>
                <div className="flex items-center gap-2 text-[#ff6347] font-mono text-sm whitespace-nowrap bg-[#ff6347]/5 px-3 py-1 rounded-full border border-[#ff6347]/20">
                  <Calendar size={14} />
                  {item.period}
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#8892b0] mb-2 font-mono text-sm">
                 {item.institution && (
                    <>
                        <Award size={16} className="text-[#64ffda]" />
                        <span>{item.institution}</span>
                    </>
                 )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
