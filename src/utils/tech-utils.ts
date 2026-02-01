export const getTechType = (tech: string): 'backend' | 'frontend' => {
  const backendKeywords = [
    'PHP', 'Python', 'SQL', 'C', 'Bash', 'Laravel', 'Symfony', 
    'Flask', 'Django', 'Docker', 'Git', 'Linux', 'Security', 
    'MySQL', 'Télécommunication', 'Systèmes', 'Sécurité', 
    'Déploiement', 'Gestion', 'Back-end', 'Database', 'Node'
  ];
  
  const isBackend = backendKeywords.some(keyword => 
    tech.toLowerCase().includes(keyword.toLowerCase())
  );

  return isBackend ? 'backend' : 'frontend';
};

export const THEME = {
  colors: {
    bg: '#1a1a1a',
    textMain: '#e6f1ff',
    textSec: '#8892b0',
    cyan: '#64ffda',
    red: '#ff6347'
  }
};
