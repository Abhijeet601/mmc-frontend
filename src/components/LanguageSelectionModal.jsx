import React, { useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelectionModal = ({
  isOpen,
  onSelect
}) => {
  const {
    i18n,
    t
  } = useTranslation();
  const englishButtonRef = useRef(null);
  const hindiButtonRef = useRef(null);

  const modalCopy = useMemo(() => {
    const isHindi = (i18n.resolvedLanguage || i18n.language || '').toLowerCase().startsWith('hi');
    return {
      title: isHindi ? 'भाषा चुनें' : 'Choose Language',
      subtitle: isHindi ? 'आगे बढ़ने के लिए अपनी पसंदीदा भाषा चुनें।' : 'Please choose your preferred language to continue.',
      helper: isHindi ? 'आप बाद में हेडर से भाषा बदल सकते हैं।' : 'You can change language later from the header.',
      englishLabel: t('common.english', 'English'),
      hindiLabel: t('common.hindi', 'Hindi')
    };
  }, [i18n.language, i18n.resolvedLanguage, t]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    englishButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      // Force an explicit language choice.
      event.preventDefault();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = [englishButtonRef.current, hindiButtonRef.current].filter(Boolean);
    if (focusable.length === 0) return;

    const currentIndex = focusable.indexOf(document.activeElement);
    const movingBackward = event.shiftKey;
    const nextIndex = movingBackward ? currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1 : currentIndex === focusable.length - 1 ? 0 : currentIndex + 1;

    event.preventDefault();
    focusable[nextIndex].focus();
  };

  if (!isOpen) return null;

  return <div className="fixed inset-0 z-[12000] flex items-center justify-center p-4 sm:p-6" role="presentation">
      <div className="absolute inset-0 bg-black/60" />
      <div role="dialog" aria-modal="true" aria-labelledby="language-modal-title" aria-describedby="language-modal-description" onKeyDown={handleKeyDown} className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <h2 id="language-modal-title" className="text-2xl font-bold text-foreground">
          {modalCopy.title}
        </h2>
        <p id="language-modal-description" className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {modalCopy.subtitle}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button ref={englishButtonRef} type="button" onClick={() => onSelect('en')} className="w-full rounded-xl border border-primary bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            {modalCopy.englishLabel}
          </button>
          <button ref={hindiButtonRef} type="button" onClick={() => onSelect('hi')} className="w-full rounded-xl border border-primary/30 bg-white px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            {modalCopy.hindiLabel}
          </button>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          {modalCopy.helper}
        </p>
      </div>
    </div>;
};

export default LanguageSelectionModal;

