import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

const Collaboration = () => {
  const collaborationDocuments = [
    {
      label: 'BBA_BCA_Psychology_merged.pdf',
      href: r2Url('documents/IQAC/Collaboration/BBA_BCA_Psychology_merged.pdf')
    },
    {
      label: 'collaborative-activities.pdf',
      href: r2Url('documents/IQAC/Collaboration/collaborative-activities.pdf')
    }
  ];

  const mouDocuments = [
    { label: 'View All MOU Documents', href: '/about/mou' }
  ];

  return (
    <>
      <Helmet>
        <title>IQAC Collaboration - Partnerships | Magadh Mahila College</title>
        <meta name="description" content="Explore institutional collaborations and partnerships at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Institutional Collaboration</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Partnerships and collaborations for academic excellence and mutual growth.
              </p>
            </motion.div>

            {/* Collaboration Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Collaboration Documents</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="p-8 rounded-2xl bg-white shadow-lg border border-border cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-7 h-7 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Institutional Collaboration</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">Documents related to institutional collaborations and partnerships.</p>
                  <div className="space-y-2">
                    {collaborationDocuments.map((doc) => (
                      <motion.a
                        key={doc.href}
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-primary hover:underline"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {doc.label}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="p-8 rounded-2xl bg-white shadow-lg border border-border cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-7 h-7 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">MOU Documents</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">Memorandum of Understanding documents relevant to institutional collaboration.</p>
                  <div className="space-y-2">
                    {mouDocuments.map((doc) => (
                      <motion.a
                        key={doc.href}
                        href={doc.href}
                        target={doc.href.startsWith('http') ? '_blank' : undefined}
                        rel={doc.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block text-primary hover:underline"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {doc.label}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Collaboration;
