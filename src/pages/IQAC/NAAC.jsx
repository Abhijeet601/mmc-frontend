import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, FileText, Camera, Video, RotateCcw, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const NAAC = () => {
  const sections = [
    {
      title: 'NAAC Certificate',
      description: 'Official NAAC accreditation certificates and grades',
      icon: Award,
      to: '/iqac/naac-certificate',
      color: 'text-blue-600'
    },
    {
      title: 'Self Study Report',
      description: 'Comprehensive self-evaluation document for NAAC assessment',
      icon: FileText,
      to: '/iqac/self-study-report',
      color: 'text-green-600'
    },
    {
      title: 'Peer Team Visit Photos',
      description: 'Photographic documentation of NAAC Peer Team visits',
      icon: Camera,
      to: '/iqac/peer-team-visit-photos',
      color: 'text-purple-600'
    },
    {
      title: 'Video Recording of NAAC Peer Team Visit',
      description: 'Official video documentation of the NAAC assessment visit',
      icon: Video,
      to: '/iqac/video-recording-naac-peer-team-visit',
      color: 'text-red-600'
    },
    {
      title: 'Revisit of NAAC Peer Team',
      description: 'Follow-up assessment and revisit by the NAAC Peer Team',
      icon: RotateCcw,
      to: '/iqac/revisit-naac-peer-team',
      color: 'text-orange-600'
    },
    {
      title: 'AQAR',
      description: 'Annual Quality Assurance Reports detailing institutional performance',
      icon: FileText,
      to: '/iqac/aqar',
      color: 'text-teal-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IQAC NAAC - Accreditation & Quality | Magadh Mahila College</title>
        <meta name="description" content="Explore NAAC accreditation details, assessment criteria, and quality assurance processes at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">NAAC Accreditation</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                National Assessment and Accreditation Council evaluation framework ensuring quality education and institutional excellence.
              </p>
            </motion.div>

            {/* Sections Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            >
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-border p-6 hover:shadow-xl transition-shadow group"
                >
                  <Link to={section.to} className="block">
                    <div className="flex items-center gap-4 mb-4">
                      <section.icon className={`w-8 h-8 ${section.color}`} />
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {section.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Explore
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>
      </div>
    </>
  );
};

export default NAAC;
