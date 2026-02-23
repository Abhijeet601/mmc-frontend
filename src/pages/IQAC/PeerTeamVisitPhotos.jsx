import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Calendar, Presentation, Camera, Eye, Building } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

const PeerTeamVisitPhotos = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const photos = [
    { src: r2Url('data files/IQAC/NAAC/mmc_naac2013.jpg'), alt: 'NAAC Peer Team Visit 2013' },
    { src: r2Url('data files/IQAC/NAAC/mmc_naac2020.jpg'), alt: 'NAAC Peer Team Visit 2020' },
    { src: r2Url('data files/IQAC/NAAC/WhatsApp-Image-2021-02-11-at-3.04.42-PM.jpeg'), alt: 'NAAC Peer Team Visit Photo' },
  ];

  const naacItems = [
    {
      title: 'Schedule of NAAC Peer Team Visit (Day 1 & Day 2)',
      description: 'Detailed schedule for the NAAC Peer Team Visit on Day 1 and Day 2.',
      icon: Calendar,
      color: 'from-primary to-primary',
      link: r2Url('data files/IQAC/NAAC/naac-visit-schedule.pdf')
    },
    {
      title: 'NAAC Peer Team Visit Report (Day 1 & Day 2)',
      description: 'Reports from the NAAC Peer Team Visit on Day 1 and Day 2.',
      icon: FileText,
      color: 'from-primary to-highlight',
      link: null
    },
    {
      title: 'Exit Meeting Report (19th March, 2019)',
      description: 'Summary of the Exit Meeting held on 19th March, 2019.',
      icon: FileText,
      color: 'from-primary to-highlight',
      link: r2Url('data files/IQAC/NAAC/NAAC-PEER-TEAM-EXIT-MEETING.pdf')
    },
    {
      title: 'PPT Slides / Reports Presented by the Principal',
      description: 'PowerPoint slides and reports presented by the Principal during the visit.',
      icon: Presentation,
      color: 'from-primary to-highlight',
      link: r2Url('data files/IQAC/NAAC/principal-naac-9-march.pdf')
    },
    {
      title: 'Photographs of NAAC Peer Team Visit (Day 1 & Day 2)',
      description: 'Photographic documentation of the NAAC Peer Team visits.',
      icon: Camera,
      color: 'from-primary to-highlight',
      link: null
    },
    {
      title: 'MAGADH MAHILA COLLEGE – At a Glance',
      description: 'Overview of Magadh Mahila College.',
      icon: Building,
      color: 'from-primary to-highlight',
      link: r2Url('data files/IQAC/NAAC/MAGADH-MAHILA-COLLEGE-SUMMARY.pdf')
    }
  ];

  return (
    <>
      <Helmet>
        <title>Peer Team Visit Photos - NAAC | Magadh Mahila College</title>
        <meta name="description" content="View photos from the NAAC Peer Team visits and assessment process at Magadh Mahila College." />
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
                <span className="text-primary">Peer Team Visit Photos</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Photographic documentation of NAAC Peer Team visits and assessment activities.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-20"
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  NAAC PEER TEAM VISIT REPORT (3rd Cycle) MARCH 2019
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {naacItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    whileHover={{ y: -15, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative cursor-pointer h-full"
                  >
                    <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 overflow-hidden relative">

                      {/* Animated background blob */}
                      <motion.div
                        className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.8 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </motion.div>

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {item.description}
                        </p>

                        {/* Action indicator */}
                        {item.link ? (
                          <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ x: -10, opacity: 0 }}
                            whileHover={{ x: 5 }}
                          >
                            View Document <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                          </motion.a>
                        ) : (
                          <motion.div
                            className="flex items-center gap-2 text-muted-foreground font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ x: -10, opacity: 0 }}
                            whileHover={{ x: 5 }}
                          >
                            Coming Soon <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                          </motion.div>
                        )}
                      </div>
                    </div>
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

export default PeerTeamVisitPhotos;