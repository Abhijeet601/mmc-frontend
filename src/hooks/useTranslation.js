import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBilingual } from '../contexts/BilingualContext';

export const useDynamicTranslation = (contentKey, defaultContent = '') => {
  const { i18n } = useTranslation();
  const { isBilingual, translateText, translatedContent } = useBilingual();
  const [translatedText, setTranslatedText] = useState(defaultContent);

  useEffect(() => {
    const translateContent = async () => {
      if (!isBilingual || !contentKey) {
        setTranslatedText(defaultContent);
        return;
      }

      try {
        // Get the current language content from i18next
        const currentLang = i18n.language.startsWith('hi') ? 'hi' : 'en';
        const sourceLang = currentLang === 'hi' ? 'hi' : 'en';
        const targetLang = currentLang === 'hi' ? 'en' : 'hi';

        // If we have pre-translated content, use it
        if (translatedContent[contentKey]) {
          setTranslatedText(translatedContent[contentKey]);
          return;
        }

        // Otherwise, translate the default content
        const translated = await translateText(defaultContent, sourceLang, targetLang);
        setTranslatedText(translated);
      } catch (error) {
        console.error('Translation error:', error);
        setTranslatedText(defaultContent);
      }
    };

    translateContent();
  }, [isBilingual, contentKey, defaultContent, i18n.language, translateText, translatedContent]);

  return translatedText;
};

export const useBilingualText = (englishText, hindiText = null) => {
  const { i18n } = useTranslation();
  const { isBilingual, translateText } = useBilingual();
  const [displayText, setDisplayText] = useState(englishText);

  useEffect(() => {
    const updateDisplayText = async () => {
      const currentLang = i18n.language.startsWith('hi') ? 'hi' : 'en';

      if (isBilingual) {
        if (currentLang === 'en') {
          const hindiValue = hindiText || await translateText(englishText, 'en', 'hi');
          setDisplayText(`${englishText} / ${hindiValue}`);
          return;
        }

        if (currentLang === 'hi') {
          const hindiValue = hindiText || await translateText(englishText, 'en', 'hi');
          setDisplayText(`${hindiValue} / ${englishText}`);
          return;
        }
      }

      if (currentLang === 'hi' && hindiText) {
        setDisplayText(hindiText);
        return;
      }

      setDisplayText(englishText);
    };

    updateDisplayText();
  }, [englishText, hindiText, i18n.language, isBilingual, translateText]);

  return displayText;
};
