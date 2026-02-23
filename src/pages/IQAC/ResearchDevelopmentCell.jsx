import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Lightbulb, Target, Award, Calendar, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ResearchDevelopmentCell = () => {
  const { t } = useTranslation();

  const pdfFiles = [
    // No files found in this folder, so we'll leave it empty for now
  ];

  return (
    <>
      <Helmet>
        <title>Research & Development Cell - IQAC | Magadh Mahila College</title>
        <meta name="description" content="Innovation hub for research and development activities at Magadh Mahila College. Explore ongoing projects, achievements, and upcoming events." />
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
                <span className="text-primary">Research & Development Cell</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Driving innovation and excellence in research through collaborative initiatives, cutting-edge projects, and industry partnerships.
              </p>
            </motion.div>

            {/* Cell Composition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Cell Composition 2022-23</span>
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-lg rounded-2xl border border-border">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Sl. No.</th>
                      <th className="px-6 py-4 text-left font-bold">Name</th>
                      <th className="px-6 py-4 text-left font-bold">Designation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/50">
                      <td className="px-6 py-4">1.</td>
                      <td className="px-6 py-4 font-semibold">Prof.(Dr.) Namita Kumari</td>
                      <td className="px-6 py-4">Principal</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="px-6 py-4">2.</td>
                      <td className="px-6 py-4 font-semibold">Prof.(Dr.) Anju Srivastava</td>
                      <td className="px-6 py-4">Convener, Dean, Social Sciences</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="px-6 py-4">3.</td>
                      <td className="px-6 py-4 font-semibold">Dr. Mridula Renu Sinha</td>
                      <td className="px-6 py-4">Coordinator, Science, HoD & Associate Professor, Zoology</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="px-6 py-4">4.</td>
                      <td className="px-6 py-4 font-semibold">Dr. Deepti Tiwary</td>
                      <td className="px-6 py-4">Coordinator, Social Science, Assistant Professor, History</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="px-6 py-4">5.</td>
                      <td className="px-6 py-4 font-semibold">Dr. Archana Jaiswal</td>
                      <td className="px-6 py-4">Coordinator, Humanities, Associate Professor, English</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="px-6 py-4">6.</td>
                      <td className="px-6 py-4 font-semibold">Dr. Amrita Prasad</td>
                      <td className="px-6 py-4">Member, Assistant Professor, Chemistry</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="px-6 py-4">7.</td>
                      <td className="px-6 py-4 font-semibold">Dr. Rajani Pandey</td>
                      <td className="px-6 py-4">Member, Assistant Professor, Home Science</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="px-6 py-4">8.</td>
                      <td className="px-6 py-4 font-semibold">Dr. Suchita Arpan</td>
                      <td className="px-6 py-4">Member, Assistant Professor, Philosophy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* PDF Files */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {pdfFiles.map((pdf, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {pdf.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {pdf.description}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <strong>File:</strong> {pdf.filename}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 lg:ml-6">
                      <a
                        href={pdf.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View PDF
                      </a>
                      <a
                        href={pdf.path}
                        download
                        className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center"
            >
              <Lightbulb className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Research & Development Support</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                For innovation ideas, project collaboration, or research funding opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">Director - R&D Cell</div>
                  <div className="text-white/80">Dr. Nagendra Prasad Verma</div>
                  <div className="text-white/80">rnd@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Research & Development Cell - IQAC | Magadh Mahila College</title>
        <meta name="description" content="Innovation hub for research and development activities at Magadh Mahila College. Explore ongoing projects, achievements, and upcoming events." />
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
                <span className="text-primary">Research & Development Cell</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Driving innovation and excellence in research through collaborative initiatives, cutting-edge projects, and industry partnerships.
              </p>
            </motion.div>

            {/* Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Our Objectives</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${objective.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <objective.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {objective.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {objective.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Key Achievements</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">{achievement.value}</div>
                    <p className="text-muted-foreground mb-1">{achievement.label}</p>
                    <span className={`text-sm ${achievement.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {achievement.change}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Ongoing Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Ongoing Projects</span>
              </h2>
              <div className="space-y-6">
                {ongoingProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold text-primary">Lead:</span> {project.lead}
                          </div>
                          <div>
                            <span className="font-semibold text-primary">Funding:</span> {project.funding}
                          </div>
                          <div>
                            <span className="font-semibold text-primary">Duration:</span> {project.duration}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Upcoming Events</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
                  >
                    <div className="text-center">
                      <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-blue-700 text-sm mb-3">
                        {event.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-blue-600 mb-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold">
                        {event.type}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Innovation Hub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Innovation Hub</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <Zap className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Incubation Center</h3>
                  <p className="text-purple-700 text-sm">
                    Supporting startup ideas and innovative projects from students and faculty.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <Target className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Technology Transfer</h3>
                  <p className="text-green-700 text-sm">
                    Facilitating the transfer of research outcomes to industry and society.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
                  <Award className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold text-orange-900 mb-2">IP Management</h3>
                  <p className="text-orange-700 text-sm">
                    Managing intellectual property rights and patent applications.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center"
            >
              <Lightbulb className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Research & Development Support</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                For innovation ideas, project collaboration, or research funding opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">Director - R&D Cell</div>
                  <div className="text-white/80">Dr. Nagendra Prasad Verma</div>
                  <div className="text-white/80">rnd@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResearchDevelopmentCell;
