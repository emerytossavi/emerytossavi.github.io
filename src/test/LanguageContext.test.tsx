import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import React from 'react';

describe('LanguageContext', () => {
  it('should default to French language', () => {
    const TestComponent = () => {
      const { language } = useLanguage();
      return <div>Current language: {language}</div>;
    };

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByText('Current language: fr')).toBeInTheDocument();
  });

  it('should toggle language from French to English', async () => {
    const user = userEvent.setup();
    const TestComponent = () => {
      const { language, toggleLanguage } = useLanguage();
      return (
        <div>
          <div>Current language: {language}</div>
          <button onClick={toggleLanguage}>Toggle</button>
        </div>
      );
    };

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByText('Current language: fr')).toBeInTheDocument();
    
    const button = screen.getByRole('button', { name: 'Toggle' });
    await user.click(button);
    
    expect(screen.getByText('Current language: en')).toBeInTheDocument();
  });
});
