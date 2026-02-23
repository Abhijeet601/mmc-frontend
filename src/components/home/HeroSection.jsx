import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';

const HeroSection = () => {
  const { t } = useTranslation();
  const [videoError, setVideoError] = useState(false);
  const [videoSourceIndex, setVideoSourceIndex] = useState(0);
  const videoSources = [r2Url('hero-section-video.mp4'), r2Url('main gate video.mp4')];

  const handleVideoError = () => {
    if (videoSourceIndex < videoSources.length - 1) {
      setVideoSourceIndex((prev) => prev + 1);
      return;
    }
    setVideoError(true);
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* VIDEO BACKGROUND */}
      {!videoError && (
        <video
          key={videoSources[videoSourceIndex]}
          className="absolute inset-0 w-full h-full object-cover z-10 transform scale-125 md:scale-135 origin-center"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={r2Url('modern-campus.webp')}
          onError={handleVideoError}
        >
          <source src={encodeURI(videoSources[videoSourceIndex])} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* FALLBACK BACKGROUND */}
      {videoError && (
        <>
          <img
            src={r2Url('modern-campus.webp')}
            alt=""
            className="absolute inset-0 z-10 w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/80 to-primary/40" />
        </>
      )}
      

      {/* CONTENT */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* BADGE */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white shadow-lg mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>
          <span className="text-sm font-medium text-primary">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* HERO TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <motion.span
            className="text-white inline-block"
            style={{ textShadow: '0 8px 32px rgba(0,0,0,0.7)' }}
            animate={{
              textShadow: [
                '0 6px 24px rgba(0,0,0,0.7)',
                '0 10px 40px rgba(0,0,0,0.85)',
                '0 6px 24px rgba(0,0,0,0.7)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {t('hero.title')}
          </motion.span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white mb-4 max-w-3xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white mb-12 max-w-2xl mx-auto"
        >
          {t('hero.accreditations')}
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="https://formbuilder.ccavenue.com/live/patna-university" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/80 text-white shadow-xl"
              >
                Admission Fee Payment
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.span>
              </Button>
            </motion.div>
          </a>

          <Link to="/about">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-blue-500 hover:bg-white/10"
              >
                {t('hero.exploreLegacy')}
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
