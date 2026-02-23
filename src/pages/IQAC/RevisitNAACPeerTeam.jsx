import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

const RevisitNAACPeerTeam = () => {
  return (
    <>
      <Helmet>
        <title>Revisit of NAAC Peer Team | Magadh Mahila College</title>
        <meta name="description" content="Information about the NAAC Peer Team revisit and follow-up assessment at Magadh Mahila College." />
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
                <span className="text-primary">Revisit of NAAC Peer Team</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Follow-up assessment and revisit by the NAAC Peer Team for quality assurance evaluation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8 text-center"
            >
              <RotateCcw className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">NAAC Peer Team Revisit</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Information about the NAAC Peer Team revisit and follow-up assessment process. (Content to be added soon.)
              </p>
              <div className="text-gray-500">
                <p>Revisit details will be updated here.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RevisitNAACPeerTeam;
