// Simple translation service using a mock translation for now
// In production, you would integrate with a proper translation API

class TranslationService {
  constructor() {
    this.cache = new Map();
  }

  async translateText(text, fromLang = 'en', toLang = 'hi') {
    if (!text || typeof text !== 'string') return text;

    const cacheKey = `${text}_${fromLang}_${toLang}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      // For now, return a mock translation
      // In production, replace this with actual Google Translate API call
      let translatedText = text;

      if (fromLang === 'en' && toLang === 'hi') {
        // Simple mock translations for common words
        const mockTranslations = {
          'Hello': 'नमस्ते',
          'Welcome': 'स्वागत',
          'College': 'कॉलेज',
          'Home': 'घर',
          'About': 'के बारे में',
          'Contact': 'संपर्क',
          'Admissions': 'प्रवेश',
          'Academics': 'अकादमिक',
          'Campus': 'कैंपस',
          'Life': 'जीवन'
        };

        // Check if we have a mock translation
        for (const [en, hi] of Object.entries(mockTranslations)) {
          if (text.toLowerCase().includes(en.toLowerCase())) {
            translatedText = text.replace(new RegExp(en, 'gi'), hi);
            break;
          }
        }

        // If no mock translation found, add a note
        if (translatedText === text) {
          translatedText = `${text} (अनुवाद)`; // Add Hindi indicator
        }
      } else if (fromLang === 'hi' && toLang === 'en') {
        // Simple reverse for Hindi to English
        translatedText = `${text} (Translated)`;
      }

      // Cache the result
      this.cache.set(cacheKey, translatedText);

      return translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      // Return original text if translation fails
      return text;
    }
  }

  async translateObject(obj, fromLang = 'en', toLang = 'hi') {
    if (!obj || typeof obj !== 'object') return obj;

    const translatedObj = {};

    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        translatedObj[key] = await this.translateText(value, fromLang, toLang);
      } else if (typeof value === 'object') {
        translatedObj[key] = await this.translateObject(value, fromLang, toLang);
      } else {
        translatedObj[key] = value;
      }
    }

    return translatedObj;
  }

  clearCache() {
    this.cache.clear();
  }
}

const translationService = new TranslationService();

export default translationService;
