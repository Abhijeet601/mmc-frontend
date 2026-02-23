import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Download, FileText } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

const minutesByYear = [
  {
    year: '2023-24',
    folder: 'Academic Year 2023-24',
    files: [
      'IQAC-meeting-02-04-2024.pdf',
      'IQAC-meeting-10-Aug-2023.pdf',
      'IQAC-meeting-28-05-2024.pdf',
    ],
  },
  {
    year: '2022-23',
    folder: 'Academic Year 2022-23',
    files: [
      'IQAC-Meeting-15.11.2022.pdf',
      'IQAC-Meeting-21.01.2023.pdf',
      'IQAC-Meeting-29.06.2022.pdf',
    ],
  },
  {
    year: '2021-22',
    folder: 'Academic Year 2021-22',
    files: [
      'iqac_2122_06-04-2022.pdf',
      'iqac_2122_15122021.pdf',
      'iqac_2122_29-01-2022.pdf',
      'IQAC-Meeting-13.09.2019.pdf',
      'IQAR-Meeting-21.06.2021.pdf',
    ],
  },
  {
    year: '2020-21',
    folder: 'Academic Year 2020-21',
    files: [
      'IQAC-Meeting-18.02.2021.pdf',
      'IQAR-Meeting-10.04.2021.pdf',
      'IQAR-Meeting-20.09.2020.pdf',
      'IQAR-Meeting-22.12.2020.pdf',
      'IQAR-Meeting-26.07.2020.pdf',
    ],
  },
  {
    year: '2019-20',
    folder: 'Academic Year 2019-20',
    files: [
      'IQAR-Meeting-06.07.2019.pdf',
      'IQAR-Meeting-09.11.2019.pdf',
      'IQAR-Meeting-11.01.2020.pdf',
      'IQAR-Meeting-18.03.2020.pdf',
    ],
  },
  {
    year: '2018-19',
    folder: 'Academic Year 2018-19',
    files: [
      'IQAC-Meeting-08.01.2018-1.pdf',
      'IQAC-Meeting-13.04.2018.pdf',
      'IQAC-Meeting-20.12.2018.pdf',
      'IQAC-Meeting-29.09.2018-1.pdf',
      'IQAR-Meeting-03.01.2019.pdf',
      'IQAR-Meeting-25.04.2019.pdf',
    ],
  },
];

const MinutesOfIQAC = () => {
  const [activeYear, setActiveYear] = useState(minutesByYear[0].year);
  const selectedYear = minutesByYear.find((item) => item.year === activeYear) || minutesByYear[0];

  return (
    <>
      <Helmet>
        <title>Minutes of IQAC - Magadh Mahila College</title>
        <meta
          name="description"
          content="Year-wise minutes of IQAC meetings at Magadh Mahila College."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/iqac"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to IQAC
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Minutes of <span className="text-primary">IQAC Meetings</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              All available minutes from the provided academic-year folders are listed below.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-10">
            {minutesByYear.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeYear === item.year
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-foreground border border-gray-200 hover:border-primary'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedYear.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {selectedYear.files.map((fileName) => {
              const rawPath = r2Url(`data files/IQAC/Minutes Of IQAC/${selectedYear.folder}/${fileName}`);
              const filePath = encodeURI(rawPath);

              return (
                <div
                  key={fileName}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground break-all">{fileName}</p>
                      <p className="text-sm text-muted-foreground mt-1">{selectedYear.folder}</p>
                    </div>
                  </div>

                  <a
                    href={filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium flex-shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    Open
                  </a>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MinutesOfIQAC;
