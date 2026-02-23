import React, { createContext, useContext, useState, useEffect } from 'react';
import translationService from '../services/translationService';

const BilingualContext = createContext();

export const useBilingual = () => {
  const context = useContext(BilingualContext);
  if (!context) {
    throw new Error('useBilingual must be used within a BilingualProvider');
  }
  return context;
};

export const BilingualProvider = ({ children }) => {
  const [isBilingual, setIsBilingual] = useState(false);
  const [translatedContent, setTranslatedContent] = useState({});
  const [isTranslating, setIsTranslating] = useState(false);

  const toggleBilingual = () => {
    setIsBilingual(!isBilingual);
  };

  // allow setting explicitly (used by Navbar language controls)
  const setBilingual = (value) => {
    setIsBilingual(value);
  };

  const translateContent = async (content, fromLang = 'en', toLang = 'hi') => {
    if (!content) return {};

    setIsTranslating(true);
    try {
      const translated = await translationService.translateObject(content, fromLang, toLang);
      setTranslatedContent(translated);
    } catch (error) {
      console.error('Translation failed:', error);
      setTranslatedContent({});
    } finally {
      setIsTranslating(false);
    }
  };

  const translateText = async (text, fromLang = 'en', toLang = 'hi') => {
    if (!text) return text;

    try {
      return await translationService.translateText(text, fromLang, toLang);
    } catch (error) {
      console.error('Text translation failed:', error);
      return text;
    }
  };

  // Clear translation cache when component unmounts
  useEffect(() => {
    return () => {
      translationService.clearCache();
    };
  }, []);

  return (
    <BilingualContext.Provider
      value={{
        isBilingual,
        toggleBilingual,
        setBilingual,
        translatedContent,
        translateContent,
        translateText,
        isTranslating
      }}
    >
      {children}
    </BilingualContext.Provider>
  );
};
