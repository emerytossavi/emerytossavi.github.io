import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/data';
import { getTechType } from '@/utils/tech-utils';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Projects = () => {
  const { language } = useLanguage();
  const { experiences, ui } = portfolioData[language];

  // We are treating "experiences" as projects as per instructions
  const projects = experiences;

  return (
    <section id="projects" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6f1ff] mb-4 flex items-center gap-3">
            <span className="font-mono text-[#64ffda]">03.</span> {ui.experiences.title}
          </h2>
          <div className="w-20 h-1 bg-[#64ffda] rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#112240] rounded-xl p-6 hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full border border-transparent hover:border-[#64ffda]/30 relative overflow-hidden"
            >
              {/* Top decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-[#ff6347] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-start mb-6">
                <Folder className="w-10 h-10 text-[#64ffda]" />
              </div>

              <h3 className="text-xl font-bold text-[#e6f1ff] mb-2 group-hover:text-[#64ffda] transition-colors">
                {project.title}
              </h3>
              
              <div className="text-sm font-mono text-[#8892b0] mb-4">
                {project.company ? project.company : (language === 'fr' ? 'Projet Personnel' : 'Personal Project')} • {project.period}
              </div>

              <p className="text-[#8892b0] mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies && project.technologies.length > 0 ? (
                  project.technologies.map((tech, i) => {
                    const type = getTechType(tech);
                    return (
                      <span 
                        key={i} 
                        className={`text-xs font-mono px-2 py-1 rounded ${
                          type === 'backend' 
                            ? 'text-[#64ffda] bg-[#64ffda]/10' 
                            : 'text-[#ff6347] bg-[#ff6347]/10'
                        }`}
                      >
                        {tech}
                      </span>
                    );
                  })
                ) : (
                  <span className="text-xs font-mono text-[#8892b0] italic">
                    {language === 'fr' ? 'Technologies diverses' : 'Various technologies'}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-[#233554]">
                {project.github_link && project.github_link !== "/#" && (
                  <a 
                    href={project.github_link} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 border border-[#64ffda] text-[#64ffda] text-xs font-mono rounded hover:bg-[#64ffda]/10 transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
                {project.app_link && project.app_link !== "/#" && (
                  <a 
                    href={project.app_link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 border border-[#ff6347] text-[#ff6347] text-xs font-mono rounded hover:bg-[#ff6347]/10 transition-colors"
                  >
                    <ExternalLink size={14} />
                    {ui.experiences.view_project || 'Visit'}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <a 
              href="https://github.com/emerytossavi" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono hover:bg-[#64ffda]/10 transition-colors"
            >
              {language === 'fr' ? 'Voir plus sur GitHub' : 'See more on GitHub'}
            </a>
        </div>
      </div>
    </section>
  );
};
