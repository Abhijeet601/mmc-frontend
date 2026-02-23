import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe, Send, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'North Gandhi Maidan, Patna – 1',
      color: 'from-primary to-primary',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91-612-2219454',
      color: 'from-primary to-primary',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@magadhmahilacollege.org, principal@magadhmahilacollege.org',
      color: 'from-primary to-highlight',
    },
    {
      icon: Globe,
      title: 'Web URL',
      details: 'http://www.magadhmahilacollege.org',
      color: 'from-primary to-highlight',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: '10:30 A.M to 4:30 P.M',
      color: 'from-primary to-highlight',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('contact.title', 'Contact Us - Magadh Mahila College')}</title>
        <meta name="description" content={t('contact.metaDescription', 'Contact Magadh Mahila College at North Gandhi Maidan, Patna. Phone: +91-612-2219454. Email: info@magadhmahilacollege.org.')} />
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
                  Get in Touch
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                We're here to answer your questions and help you begin your journey with us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, x: -30 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.12 }}
                      whileHover={{ x: 15, scale: 1.02 }}
                      className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 group cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.8 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h3
                          className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.12 + 0.2 }}
                        >
                          {info.title}
                        </motion.h3>
                        <motion.p
                          className="text-muted-foreground text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.12 + 0.3 }}
                        >
                          {info.details}
                        </motion.p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="opacity-0 group-hover:opacity-100"
                      >
                        <Copy className="w-5 h-5 text-primary cursor-pointer hover:scale-110 transition-transform" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white shadow-xl border-2 border-blue-200">
                  <motion.h2
                    className="text-3xl font-bold text-foreground mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Contact Details
                  </motion.h2>
                  <motion.p
                    className="text-muted-foreground mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    All enquiries will be reproduced on working days during working hours only. Working hours is from 10:30 A.M to 4:30 P.M
                  </motion.p>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ x: 10 }}
                      className="p-4 rounded-xl bg-white hover:shadow-lg transition-all border-l-4 border-primary group cursor-pointer"
                    >
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> College Address
                      </h3>
                      <p className="text-muted-foreground text-sm">Magadh Mahila College<br />North Gandhi Maidan<br />Patna – 1</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ x: 10 }}
                      className="p-4 rounded-xl bg-white hover:shadow-lg transition-all border-l-4 border-primary group cursor-pointer"
                    >
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        <Phone className="w-4 h-4" /> Phone No(s).
                      </h3>
                      <p className="text-muted-foreground text-sm">+91 – 612 – 2219454</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      whileHover={{ x: 10 }}
                      className="p-4 rounded-xl bg-white hover:shadow-lg transition-all border-l-4 border-primary group cursor-pointer"
                    >
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        <Globe className="w-4 h-4" /> Web URL
                      </h3>
                      <p className="text-muted-foreground text-sm"><a href="http://www.magadhmahilacollege.org" className="text-primary hover:underline">http://www.magadhmahilacollege.org</a></p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      whileHover={{ x: 10 }}
                      className="p-4 rounded-xl bg-white hover:shadow-lg transition-all border-l-4 border-primary group cursor-pointer"
                    >
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        <Mail className="w-4 h-4" /> E-mail ID
                      </h3>
                      <p className="text-muted-foreground text-sm">info@magadhmahilacollege.org<br />principal@magadhmahilacollege.org</p>
                    </motion.div>

                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
