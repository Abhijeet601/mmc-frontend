import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ObjectivesOfIQAC = () => {
  const objectives = [
    'The Primary objective of the IQAC is to develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the College.',
    'The IQAC will provide greater clarity and focus in institutional functioning towards quality enhancement and facilitate internalization of the quality culture.',
    'The IQAC will contribute towards enhancement and integration among the activities of the College and institutionalize many good practices.',
    'To develop and progress a heightened level of clarity and focus in institutional functioning towards creation, sustenance and enhancement of quality and facilitate internalization of the quality culture permeating every sphere of the Institution.',
    'To facilitate the integration of the various activities of the institution and institutionalize the best practices.',
    'To provide a sound basis for decision making imbibing all the dimensions of service quality to improve institutional functioning.',
    'To actas a change agent in the Institution.',
    'To coordinate and improve internal communication to facilitate greater policy implementation and quality assurance towards its stakeholders.',
  ];

  return (
    <>
      <Helmet>
        <title>Objectives of IQAC - Magadh Mahila College</title>
        <meta
          name="description"
          content="Objectives of the Internal Quality Assurance Cell (IQAC) at Magadh Mahila College."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/iqac" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to IQAC
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Objectives of <span className="text-primary">IQAC</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl">
              The IQAC of MMC is constituted to achieve the following objectives :
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground leading-relaxed">
              {objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ObjectivesOfIQAC;
