import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, FileText } from 'lucide-react';

const STUDENT_PROGRESSION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdfdUC183dTcB3WX4n3Q7M7M9DzoNG30lg-PLzXcHxlzrspWg/viewform';

const IQACStudentProgressionForm = () => {
  return (
    <>
      <Helmet>
        <title>Student Progression Form - Magadh Mahila College</title>
        <meta
          name="description"
          content="Access the IQAC Student Progression Form for Magadh Mahila College."
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
              Student <span className="text-primary">Progression Form</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Fill out the Student Progression Form using the official Google Form link below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground"> Student Progression Form</h2>
            </div>

            <a
              href={STUDENT_PROGRESSION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Open Form
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default IQACStudentProgressionForm;
