import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  fontSizeScale: number;
  isHighContrast: boolean;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  toggleHighContrast: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSizeScale, setFontSizeScale] = useState<number>(1);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSizeScale * 100}%`;
  }, [fontSizeScale]);

  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const increaseFontSize = () => {
    setFontSizeScale((prev) => Math.min(prev + 0.1, 1.4));
  };

  const decreaseFontSize = () => {
    setFontSizeScale((prev) => Math.max(prev - 0.1, 0.8));
  };

  const resetFontSize = () => {
    setFontSizeScale(1);
  };

  const toggleHighContrast = () => {
    setIsHighContrast((prev) => !prev);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontSizeScale,
        isHighContrast,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        toggleHighContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility deve ser usado com um AccessibilityProvider');
  }
  return context;
};
