import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, UserCheck, CreditCard, CheckCircle, Calendar, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Admissions = () => {
  const { t } = useTranslation();

  const admissionSteps = [
    {
      icon: FileText,
      title: t('admissions.steps.onlineApplication.title'),
      description: t('admissions.steps.onlineApplication.description'),
      color: 'from-primary to-primary',
    },
    {
      icon: CreditCard,
      title: t('admissions.steps.applicationFee.title'),
      description: t('admissions.steps.applicationFee.description'),
      color: 'from-primary to-primary',
    },
    {
      icon: UserCheck,
      title: t('admissions.steps.documentVerification.title'),
      description: t('admissions.steps.documentVerification.description'),
      color: 'from-primary to-highlight',
    },
    {
      icon: CheckCircle,
      title: t('admissions.steps.admissionConfirmation.title'),
      description: t('admissions.steps.admissionConfirmation.description'),
      color: 'from-primary to-highlight',
    },
  ];

  const importantDates = [
    { event: 'Application Opens', date: 'May 1, 2024' },
    { event: 'Application Deadline', date: 'June 30, 2024' },
    { event: 'Merit List Announcement', date: 'July 10, 2024' },
    { event: 'Admission Process', date: 'July 15-31, 2024' },
    { event: 'Classes Begin', date: 'August 1, 2024' },
  ];

  const eligibilityCriteria = [
    {
      program: t('admissions.undergraduate'),
      criteria: t('admissions.ugCriteria', { returnObjects: true }),
    },
    {
      program: t('admissions.postgraduate'),
      criteria: t('admissions.pgCriteria', { returnObjects: true }),
    },
    {
      program: t('admissions.diploma'),
      criteria: t('admissions.diplomaCriteria', { returnObjects: true }),
    },
  ];

  const handleApplyClick = () => {
    toast({
      title: "🚧 Application Portal",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <>
      <Helmet>
        <title>{t('admissions.title')}</title>
        <meta name="description" content={t('admissions.metaDescription')} />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section relative overflow-hidden">
          {/* Animated background gradient */}
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
                  {t('admissions.title2024')}
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto mb-8">
                {t('admissions.description')}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleApplyClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <motion.span
                    className="flex items-center gap-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">
                  {t('admissions.processTitle')}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Animated connecting lines */}
                <motion.div
                  className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-primary via-highlight to-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ originX: 0 }}
                />

                {admissionSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -15, scale: 1.05 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 overflow-hidden">
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />

                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.8 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <motion.div
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-primary shadow-lg border-2 border-primary"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {index + 1}
                      </motion.div>

                      <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground relative z-10">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-3xl bg-white shadow-xl border border-border"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">{t('admissions.importantDates')}</h2>
                </div>
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.12 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300 group cursor-pointer border-l-4 border-primary"
                    >
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">{item.event}</span>
                      <motion.span
                        className="text-primary font-semibold flex items-center gap-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {item.date}
                        <motion.div
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Calendar className="w-4 h-4" />
                        </motion.div>
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-3xl bg-white shadow-xl border border-border"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <UserCheck className="w-8 h-8 text-highlight" />
                  <h2 className="text-3xl font-bold text-foreground">{t('admissions.eligibilityCriteria')}</h2>
                </div>
                <div className="space-y-6">
                  {eligibilityCriteria.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h3 className="font-bold text-foreground mb-3">{item.program}</h3>
                      <ul className="space-y-2">
                        {item.criteria.map((criterion, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-highlight flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary to-blue-600 text-primary-foreground text-center relative overflow-hidden group"
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute w-96 h-96 -top-48 -right-48 bg-white rounded-full" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative z-10 mb-6"
              >
                <Mail className="w-16 h-16 mx-auto" />
              </motion.div>

              <h2 className="text-3xl font-bold mb-4 relative z-10">{t('admissions.helpTitle')}</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
                {t('admissions.helpDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleApplyClick}
                    size="lg"
                    className="bg-card text-primary hover:bg-section shadow-xl"
                  >
                    Contact Admissions Office
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleApplyClick}
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-black hover:bg-primary/10 bg-white"
                  >
                    Download Brochure
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admissions;