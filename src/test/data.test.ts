import { describe, it, expect } from 'vitest';
import { portfolioData } from '@/data';

describe('Portfolio Data', () => {
  it('should have both English and French translations', () => {
    expect(portfolioData.en).toBeDefined();
    expect(portfolioData.fr).toBeDefined();
  });

  it('should have github_link and app_link in all experiences', () => {
    const enExperiences = portfolioData.en.experiences;
    const frExperiences = portfolioData.fr.experiences;

    enExperiences.forEach((exp) => {
      expect(exp).toHaveProperty('github_link');
      expect(exp).toHaveProperty('app_link');
    });

    frExperiences.forEach((exp) => {
      expect(exp).toHaveProperty('github_link');
      expect(exp).toHaveProperty('app_link');
    });
  });

  it('should have matching number of experiences in both languages', () => {
    expect(portfolioData.en.experiences.length).toBe(portfolioData.fr.experiences.length);
  });

  it('should have valid UI translations', () => {
    expect(portfolioData.en.ui.nav.skills).toBe('Skills');
    expect(portfolioData.fr.ui.nav.skills).toBe('Compétences');
  });
});
