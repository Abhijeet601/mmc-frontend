import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, Newspaper, TrendingUp, Award, BookOpen, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();

  const newsItems = [
    {
      id: 1,
      title: 'Magadh Mahila College Awarded B+ Grade in NAAC Accreditation',
      date: 'December 15, 2024',
      author: 'College Administration',
      category: 'Achievement',
      excerpt: 'The college has been awarded B+ grade in the 3rd cycle of NAAC accreditation, recognizing our commitment to quality education.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
      featured: true,
    },
    {
      id: 2,
      title: 'New Computer Lab Inauguration',
      date: 'December 10, 2024',
      author: 'IT Department',
      category: 'Infrastructure',
      excerpt: 'State-of-the-art computer lab with latest technology inaugurated to enhance digital learning capabilities.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      featured: false,
    },
    {
      id: 3,
      title: 'Annual Cultural Fest 2024 Success',
      date: 'December 5, 2024',
      author: 'Cultural Committee',
      category: 'Events',
      excerpt: 'Annual cultural fest witnessed participation from over 500 students showcasing diverse talents and creativity.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      featured: false,
    },
    {
      id: 4,
      title: 'Research Paper Publication by Faculty',
      date: 'November 28, 2024',
      author: 'Research Cell',
      category: 'Research',
      excerpt: 'Faculty members publish groundbreaking research papers in international journals on women empowerment.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      featured: false,
    },
    {
      id: 5,
      title: 'Sports Championship Victory',
      date: 'November 20, 2024',
      author: 'Sports Department',
      category: 'Sports',
      excerpt: 'College basketball team wins inter-college championship, bringing home the trophy for the third consecutive year.',
      image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400',
      featured: false,
    },
    {
      id: 6,
      title: 'Alumni Reunion 2024 Highlights',
      date: 'November 15, 2024',
      author: 'Alumni Association',
      category: 'Alumni',
      excerpt: 'Successful alumni reunion brings together graduates from various batches to celebrate achievements and memories.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
      featured: false,
    },
  ];

  const categories = ['All', 'Achievement', 'Infrastructure', 'Events', 'Research', 'Sports', 'Alumni'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews = selectedCategory === 'All'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);

  return (
    <>
      <Helmet>
        <title>{t('news.title', 'News - Magadh Mahila College | Latest Updates & Announcements')}</title>
        <meta name="description" content={t('news.metaDescription', 'Stay updated with the latest news, achievements, and announcements from Magadh Mahila College. Read about our recent developments and success stories.')} />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
                'linear-gradient(225deg, rgba(139, 69, 19, 0.05) 0%, transparent 50%)',
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">
                  Latest News
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                Stay informed about our achievements, events, and developments that shape the future of women's education
              </p>
            </motion.div>

            {/* Featured News */}
            {featuredNews.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-center mb-8">
                  <span className="text-primary">Featured News</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredNews.map((news, idx) => (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: idx * 0.2 }}
                      whileHover={{ y: -15, scale: 1.03 }}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 cursor-pointer"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <motion.img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-500"
                          whileHover={{ scale: 1.15, rotate: 2 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="absolute top-4 left-4"
                        >
                          <motion.span
                            className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full shadow-lg"
                            whileHover={{ scale: 1.1 }}
                          >
                            {news.category}
                          </motion.span>
                        </motion.div>
                      </div>
                      <div className="p-6">
                        <motion.div
                          className="flex items-center space-x-4 text-sm text-muted-foreground mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <motion.div
                            className="flex items-center space-x-1"
                            whileHover={{ x: 5 }}
                          >
                            <Calendar className="w-4 h-4" />
                            <span>{news.date}</span>
                          </motion.div>
                          <motion.div
                            className="flex items-center space-x-1"
                            whileHover={{ x: 5 }}
                          >
                            <User className="w-4 h-4" />
                            <span>{news.author}</span>
                          </motion.div>
                        </motion.div>
                        <motion.h3
                          className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {news.title}
                        </motion.h3>
                        <motion.p
                          className="text-muted-foreground mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          {news.excerpt}
                        </motion.p>
                        <motion.div
                          className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors"
                          whileHover={{ x: 10 }}
                        >
                          <span>Read More</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category, idx) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-gradient-to-r from-blue-50 to-blue-100 text-foreground hover:shadow-lg border-2 border-blue-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
                >
                  <motion.span
                    animate={selectedCategory === category ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block"
                  >
                    {category}
                  </motion.span>
                </motion.button>
              ))}
            </motion.div>

            {/* News Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredNews.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    whileHover={{ y: -12, scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-200 cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                        whileHover={{ scale: 1.15, rotate: 1 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                        className="absolute top-3 left-3"
                      >
                        <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full shadow-lg">
                          {news.category}
                        </span>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <motion.div
                        className="flex items-center space-x-3 text-xs text-muted-foreground mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 * index }}
                      >
                        <motion.div
                          className="flex items-center space-x-1 hover:text-primary transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          <Calendar className="w-3 h-3" />
                          <span>{news.date}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center space-x-1 hover:text-primary transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          <User className="w-3 h-3" />
                          <span>{news.author}</span>
                        </motion.div>
                      </motion.div>
                      <motion.h3
                        className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                      >
                        {news.title}
                      </motion.h3>
                      <motion.p
                        className="text-muted-foreground text-sm mb-4 line-clamp-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 * index }}
                      >
                        {news.excerpt}
                      </motion.p>
                      <motion.div
                        className="flex items-center text-primary font-medium text-sm group-hover:text-primary/80 transition-colors"
                        whileHover={{ x: 8 }}
                      >
                        <span>Read More</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground relative overflow-hidden"
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, white 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, white 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, white 0%, transparent 50%)',
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative z-10">
                {[
                  { icon: Newspaper, label: 'News Articles', value: '50+', delay: 0 },
                  { icon: TrendingUp, label: 'Achievements', value: '25+', delay: 0.1 },
                  { icon: Award, label: 'Awards Won', value: '15+', delay: 0.2 },
                  { icon: BookOpen, label: 'Publications', value: '100+', delay: 0.3 },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ y: -8, scale: 1.08 }}
                    transition={{ delay: idx * 0.12, duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="group relative"
                  >
                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      className="w-12 h-12 mx-auto mb-4 p-2 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors"
                    >
                      <stat.icon className="w-8 h-8" />
                    </motion.div>

                    <motion.div
                      className="text-4xl font-black mb-2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.12 + 0.15, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>

                    <motion.p
                      className="text-white/90 font-medium group-hover:text-white transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.12 + 0.25, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {stat.label}
                    </motion.p>

                    {/* Bottom accent line */}
                    <motion.div
                      className="h-1 bg-white/40 rounded-full mt-4 origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: idx * 0.12 + 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
