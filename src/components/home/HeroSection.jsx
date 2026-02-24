import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const HERO_VIDEO_SRC = '/hero-clipchamp-28.mp4';
const HERO_IMAGE_SRC = '/modern-campus.webp';

const HeroSection = () => {
  const { t } = useTranslation();
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const accreditationValue = t('hero.accreditations');
  const accreditationItems =
    typeof accreditationValue === 'string'
      ? accreditationValue
          .split('|')
          .map((item) => item.trim())
          .filter(Boolean)
      : [];

  const handleVideoReady = () => {
    setVideoLoaded(true);
  };

  const showPoster = videoError || !videoLoaded;

  return (
    <section className="relative isolate flex min-h-[72vh] items-center justify-center overflow-hidden bg-slate-950 sm:min-h-[78vh] md:min-h-[84vh]">
      {!videoError && (
        <video
          key={HERO_VIDEO_SRC}
          data-skip-r2-rewrite="true"
          className={`absolute inset-0 z-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          defaultMuted
          playsInline
          preload="auto"
          poster={HERO_IMAGE_SRC}
          onCanPlay={handleVideoReady}
          onLoadedData={handleVideoReady}
          onError={() => setVideoError(true)}
        >
          <source src={encodeURI(HERO_VIDEO_SRC)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {showPoster && (
        <img
          src={HERO_IMAGE_SRC}
          data-skip-r2-rewrite="true"
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          aria-hidden="true"
        />
      )}

      <motion.div
        className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md sm:text-sm"
        >
          <motion.div
            animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 3.8, repeat: Infinity }}
          >
            <Sparkles className="h-4 w-4 text-white sm:h-5 sm:w-5" />
          </motion.div>
          <span>{t('hero.badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-5 max-w-4xl text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ textShadow: '0 10px 32px rgba(0, 0, 0, 0.55)' }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 max-w-3xl text-pretty text-sm leading-relaxed text-white/90 sm:text-base md:text-lg"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          {accreditationItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:text-sm"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="group h-12 w-full min-w-[220px] bg-primary px-6 text-white shadow-2xl hover:bg-primary/85"
            >
              <a
                href="https://formbuilder.ccavenue.com/live/patna-university"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open admission fee payment portal in a new tab"
              >
                Admission Fee Payment
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.2 }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.span>
              </a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full min-w-[220px] border-2 border-white/70 bg-white/5 px-6 text-white hover:border-white hover:bg-white/15 hover:text-white"
            >
              <Link to="/about">{t('hero.exploreLegacy')}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/75 p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
