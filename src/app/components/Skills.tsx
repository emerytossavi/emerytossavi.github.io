import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/data';
import { getTechType } from '@/utils/tech-utils';
import { Server, Layout, Shield, Terminal, Globe, Cpu, Users, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Skills = () => {
  const { language } = useLanguage();
  const { skills, technologies, ui } = portfolioData[language];

  // Flatten and categorize technologies
  const allTechs = [
    ...technologies.languages,
    ...technologies.frameworks,
    ...technologies.tools
  ];

  const backendTechs = allTechs.filter(t => getTechType(t) === 'backend');
  const frontendTechs = allTechs.filter(t => getTechType(t) === 'frontend');

  return (
    <section id="skills" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6f1ff] mb-4 flex items-center justify-center gap-3">
            <span className="font-mono text-[#64ffda]">02.</span> {ui.skills.title}
          </h2>
          <div className="w-20 h-1 bg-[#2d2d2d] mx-auto rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-[#64ffda] float-left"></div>
            <div className="w-1/2 h-full bg-[#ff6347] float-right"></div>
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#e6f1ff] mb-8 border-l-4 border-[#64ffda] pl-4">
            {ui.skills.stack_title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Backend Techs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#112240]/30 p-8 rounded-xl border border-[#64ffda]/20 hover:border-[#64ffda]/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#64ffda]/10 rounded-lg">
                  <Server className="w-6 h-6 text-[#64ffda]" />
                </div>
                <h4 className="text-xl font-bold text-[#e6f1ff]">{ui.skills.backend_title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {backendTechs.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm font-mono border border-[#64ffda]/20 hover:bg-[#64ffda]/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frontend Techs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#112240]/30 p-8 rounded-xl border border-[#ff6347]/20 hover:border-[#ff6347]/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#ff6347]/10 rounded-lg">
                  <Layout className="w-6 h-6 text-[#ff6347]" />
                </div>
                <h4 className="text-xl font-bold text-[#e6f1ff]">{ui.skills.frontend_title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontendTechs.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-mono border border-[#ff6347]/20 hover:bg-[#ff6347]/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Domain Expertise & Soft Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#e6f1ff] mb-8 border-l-4 border-[#ff6347] pl-4">
            {ui.skills.expertise_title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Domain Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2d2d2d] hover:border-[#64ffda]/30 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-5 h-5 text-[#64ffda]" />
                <h4 className="text-lg font-bold text-[#e6f1ff] font-mono">{ui.skills.domains_title}</h4>
              </div>
              <ul className="grid grid-cols-1 gap-3">
                {skills.technical.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#8892b0] group">
                    <span className="w-1.5 h-1.5 bg-[#64ffda] rounded-full group-hover:scale-150 transition-transform"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2d2d2d] hover:border-[#ff6347]/30 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-[#ff6347]" />
                <h4 className="text-lg font-bold text-[#e6f1ff] font-mono">{ui.skills.soft_title}</h4>
              </div>
              <ul className="grid grid-cols-1 gap-3">
                {skills.soft.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#8892b0] group">
                    <span className="w-1.5 h-1.5 bg-[#ff6347] rounded-full group-hover:scale-150 transition-transform"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
