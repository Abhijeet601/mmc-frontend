import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Download, ChevronRight } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

const AQAR = () => {
  const aqarFiles = [
    { year: '2013', file: 'EC-34-050-MMCPU-AQAR2013 magadhmahilacollege patna university patna.pdf' },
    { year: '2014', file: 'EC-34-050-MMCPU-AQAR2014 magadhmahilacollege patna university patna.pdf' },
    { year: '2015', file: 'EC-34-050-MMCPU-AQAR2015.pdf' },
    { year: '2016', file: 'EC-34-050-MMCPU-AQAR2016.pdf' },
    { year: '2018', file: 'EC-34-50-MMCPU-AQAR2018.pdf' },
    { year: '2018 (31.05)', file: 'AQAR-31.05.2018.pdf' },
    { year: '2018-19', file: 'AQAR-2018-19.pdf' },
    { year: '2019-20 (Resubmitted)', file: 'AQAR-2019-20-resubmitted-2.pdf' },
    { year: '2020-21', file: 'AQAR-2020-21.pdf' },
    { year: '2021-22', file: 'AQAR-2021-22.pdf' },
    { year: '2022-23', file: 'AQAR-2022-23.pdf' },
    { year: '2023-24', file: 'AQAR-2023-24.pdf' },
  ];
  const extractYear = (value) => {
    const match = value.match(/\d{4}/);
    return match ? Number(match[0]) : 0;
  };

  const sortedAqarFiles = [...aqarFiles].sort((a, b) => {
    const yearDiff = extractYear(b.year) - extractYear(a.year);
    return yearDiff !== 0 ? yearDiff : b.year.localeCompare(a.year);
  });

  return (
    <>
      <Helmet>
        <title>AQAR - Annual Quality Assurance Reports | Magadh Mahila College</title>
        <meta name="description" content="Download Annual Quality Assurance Reports (AQAR) for NAAC accreditation at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link to="/iqac" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8">
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to IQAC
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Annual Quality Assurance Reports (AQAR)</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Comprehensive annual reports detailing quality assurance measures and institutional performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {sortedAqarFiles.map((item, index) => (
                <motion.div
                  key={item.file}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-border p-6 hover:shadow-xl transition-shadow"
                >
                  <FileText className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">AQAR {item.year}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Annual Quality Assurance Report for {item.year}
                  </p>
                  <a
                    href={r2Url(`documents/IQAC/NAAC/AQAR/${item.file}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AQAR;
