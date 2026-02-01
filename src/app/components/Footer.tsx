import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#1a1a1a] py-8 text-center border-t border-[#2d2d2d]">
      <p className="font-mono text-sm text-[#8892b0]">
        {language === 'fr' ? 'Conçu & Développé par Emery Tossavi' : 'Designed & Built by Emery Tossavi'}
      </p>
      <p className="font-mono text-xs text-[#8892b0]/60 mt-2">
        © {new Date().getFullYear()} {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
      </p>
    </footer>
  );
};
