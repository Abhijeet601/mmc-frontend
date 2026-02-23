import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const IQAC = () => {
  const { t } = useTranslation();
  const objectives = [
    'The Primary objective of the IQAC is to develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the College.',
    'The IQAC will provide greater clarity and focus in institutional functioning towards quality enhancement and facilitate internalization of the quality culture.',
    'The IQAC will contribute towards enhancement and integration among the activities of the College and institutionalize many good practices.',
    'To develop and progress a heightened level of clarity and focus in institutional functioning towards creation, sustenance and enhancement of quality and facilitate internalization of the quality culture permeating every sphere of the Institution.',
    'To facilitate the integration of the various activities of the institution and institutionalize the best practices.',
    'To provide a sound basis for decision making imbibing all the dimensions of service quality to improve institutional functioning.',
    'To act as a change agent in the Institution.',
    'To coordinate and improve internal communication to facilitate greater policy implementation and quality assurance towards its stakeholders.'
  ];

  return (
    <>
      <Helmet>
        <title>{t('iqac.title', 'IQAC - Magadh Mahila College | Internal Quality Assurance Cell')}</title>
        <meta
          name="description"
          content={t(
            'iqac.metaDescription',
            'Learn about the Internal Quality Assurance Cell (IQAC) at Magadh Mahila College. Discover our commitment to quality education, continuous improvement, and institutional excellence.'
          )}
        />
      </Helmet>

      <div className="pt-0">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Internal Quality Assurance Cell</span>
              </h1>
              <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
                Driving excellence in education through systematic quality enhancement and continuous improvement initiatives.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-6">About IQAC</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    The Internal Quality Assurance Cell (IQAC) was established in accordance with NAAC guidelines
                    to develop a system for conscious, consistent, and catalytic improvement in the overall performance
                    of the institution.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    IQAC works towards ensuring quality enhancement and sustenance by developing and implementing
                    quality benchmarks for various academic and administrative activities.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium">NAAC Accredited</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium">ISO Certified</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-blue-100/10 rounded-3xl p-8">
                    <div className="text-center">
                      <Shield className="w-24 h-24 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-foreground mb-4">Quality Assurance</h3>
                      <p className="text-muted-foreground">
                        Committed to maintaining the highest standards of educational excellence and institutional integrity.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Objectives of <span className="text-primary">IQAC</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                The IQAC of MMC is constituted to achieve the following objectives:
              </p>

              <ul className="space-y-4">
                {objectives.map((objective) => (
                  <li key={objective} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IQAC;
