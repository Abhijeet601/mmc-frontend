import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const NEP2020 = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    setOpenSections(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const nepSections = [
    {
      title: 'Academic Programs',
      items: [
        { path: '/nep2020/program-outcome', title: 'Program Outcome and Course Outcome' },
        { path: '/nep2020/humanities', title: 'Humanities' },
        { path: '/nep2020/social-science', title: 'Social Science' },
        { path: '/nep2020/science', title: 'Science' },
        { path: '/nep2020/fine-arts', title: 'Fine Arts' },
        { path: '/nep2020/vocational-commerce', title: 'Vocational (Commerce)' },
        { path: '/nep2020/vocational-computer-application', title: 'Vocational (Computer Application)' },
      ]
    },
    {
      title: 'Academic Resources',
      items: [
        { path: '/nep2020/academic-infrastructure', title: 'Academic Infrastructure' },
        { path: '/nep2020/course-material', title: 'Course Material (E-Contents)' },
        { path: '/nep2020/library', title: 'Library' },
        { path: '/nep2020/publications', title: 'Publications' },
        { path: '/nep2020/time-table', title: 'Time Table' },
        { path: '/nep2020/syllabus', title: 'Syllabus' },
        { path: '/nep2020/syllabus-nep', title: 'Syllabus (NEP)' },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Learn about the National Education Policy 2020 implementation at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              National Education Policy 2020
            </h1>

            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 mb-6 text-lg">
                Magadh Mahila College is committed to implementing the National Education Policy 2020,
                which aims to transform India's education system to meet the needs of the 21st century.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Key Initiatives at MMC</h2>

              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Multidisciplinary curriculum development</li>
                <li>Focus on skill-based learning and vocational education</li>
                <li>Emphasis on research and innovation</li>
                <li>Integration of technology in teaching-learning processes</li>
                <li>Holistic development of students</li>
                <li>Industry-academia collaboration</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Explore NEP 2020 Sections</h2>
            </div>

            <div className="space-y-4">
              {nepSections.map((section, sectionIndex) => {
                const isOpen = openSections.includes(sectionIndex);
                return (
                  <Accordion key={sectionIndex} className="w-full">
                    <AccordionItem>
                      <AccordionTrigger
                        className="text-xl font-semibold text-primary hover:text-primary/80"
                        onClick={() => toggleSection(sectionIndex)}
                        isOpen={isOpen}
                      >
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent isOpen={isOpen}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                          {section.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.path}
                              className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-200 group"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-700 group-hover:text-primary font-medium">
                                {item.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
              <p className="text-blue-800">
                <strong>Note:</strong> Our college is actively working towards the full implementation of NEP 2020 guidelines,
                with regular updates on curriculum restructuring, faculty development programs, and
                infrastructure enhancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NEP2020;
