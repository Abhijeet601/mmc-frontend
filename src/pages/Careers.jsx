import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, GraduationCap, Users, Award, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Careers = () => {
  const { t } = useTranslation();

  const jobOpenings = [
    {
      id: 1,
      title: 'Assistant Professor - Computer Science',
      department: 'Computer Science',
      type: 'Full-time',
      location: 'Patna, Bihar',
      salary: '₹50,000 - ₹70,000/month',
      deadline: 'January 31, 2025',
      description: 'We are seeking a qualified Assistant Professor in Computer Science with expertise in programming, data structures, and emerging technologies.',
      requirements: [
        'Ph.D. in Computer Science or related field',
        'Minimum 2 years teaching experience',
        'Strong research background',
        'Excellent communication skills'
      ],
      featured: true,
    },
    {
      id: 2,
      title: 'Lecturer - English Literature',
      department: 'English',
      type: 'Full-time',
      location: 'Patna, Bihar',
      salary: '₹35,000 - ₹50,000/month',
      deadline: 'February 15, 2025',
      description: 'Join our English department as a Lecturer to inspire students with literature, language, and critical thinking skills.',
      requirements: [
        'Master\'s degree in English Literature',
        'NET/SET qualification preferred',
        'Teaching experience preferred',
        'Passion for literature and education'
      ],
      featured: false,
    },
    {
      id: 3,
      title: 'Lab Assistant - Science',
      department: 'Science',
      type: 'Full-time',
      location: 'Patna, Bihar',
      salary: '₹25,000 - ₹35,000/month',
      deadline: 'January 20, 2025',
      description: 'Support our science laboratories with maintenance, safety protocols, and assistance in practical sessions.',
      requirements: [
        'Bachelor\'s degree in Science',
        'Experience in lab management',
        'Knowledge of safety protocols',
        'Attention to detail'
      ],
      featured: false,
    },
    {
      id: 4,
      title: 'Administrative Officer',
      department: 'Administration',
      type: 'Full-time',
      location: 'Patna, Bihar',
      salary: '₹40,000 - ₹55,000/month',
      deadline: 'February 5, 2025',
      description: 'Manage administrative operations, coordinate events, and support college management activities.',
      requirements: [
        'Master\'s degree in any discipline',
        'Administrative experience preferred',
        'Strong organizational skills',
        'Proficiency in MS Office'
      ],
      featured: false,
    },
    {
      id: 5,
      title: 'Sports Coach - Basketball',
      department: 'Physical Education',
      type: 'Contract',
      location: 'Patna, Bihar',
      salary: '₹30,000 - ₹45,000/month',
      deadline: 'January 25, 2025',
      description: 'Lead our women\'s basketball team, conduct training sessions, and develop sports programs.',
      requirements: [
        'Degree in Physical Education',
        'Basketball coaching experience',
        'First aid certification',
        'Motivational leadership skills'
      ],
      featured: false,
    },
    {
      id: 6,
      title: 'Librarian Assistant',
      department: 'Library',
      type: 'Full-time',
      location: 'Patna, Bihar',
      salary: '₹28,000 - ₹40,000/month',
      deadline: 'February 10, 2025',
      description: 'Assist in library operations, cataloging, digital resources management, and student support.',
      requirements: [
        'Master\'s in Library Science',
        'Computer literacy',
        'Organizational skills',
        'Customer service orientation'
      ],
      featured: false,
    },
  ];

  const departments = ['All', 'Computer Science', 'English', 'Science', 'Administration', 'Physical Education', 'Library'];
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredJobs = selectedDepartment === 'All'
    ? jobOpenings
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const featuredJobs = jobOpenings.filter(job => job.featured);

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuous learning opportunities, workshops, and conferences'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with dedicated educators and supportive colleagues'
    },
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description: 'Performance-based incentives and achievement awards'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and comprehensive health benefits'
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('careers.title', 'Careers - Magadh Mahila College | Join Our Team')}</title>
        <meta name="description" content={t('careers.metaDescription', 'Explore career opportunities at Magadh Mahila College. Join our team of dedicated educators and professionals committed to women\'s education and empowerment.')} />
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
                <span className="text-primary">
                  Join Our Team
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                Be part of a transformative journey in women's education. Shape the future of empowered women through teaching, research, and innovation.
              </p>
            </motion.div>

            {/* Why Join Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="text-primary">Why Join Magadh Mahila College?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Featured Jobs */}
            {featuredJobs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-center mb-8">
                  <span className="text-primary">Featured Positions</span>
                </h2>
                <div className="space-y-6">
                  {featuredJobs.map((job) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Briefcase className="w-4 h-4" />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{job.type}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 text-right">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {job.salary}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Application Deadline: {job.deadline}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {job.description}
                      </p>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="mb-4 lg:mb-0">
                          <h4 className="font-bold text-foreground mb-2">Requirements:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {job.requirements.map((req, index) => (
                              <li key={index}>• {req}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors cursor-pointer">
                          <span>Apply Now</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Department Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => setSelectedDepartment(department)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedDepartment === department
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card text-foreground hover:bg-section shadow-md'
                  }`}
                >
                  {department}
                </button>
              ))}
            </motion.div>

            {/* Job Listings */}
            <motion.div
              key={selectedDepartment}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-3 h-3" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {job.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-bold text-foreground text-sm mb-2">Key Requirements:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {job.requirements.slice(0, 2).map((req, idx) => (
                        <li key={idx}>• {req}</li>
                      ))}
                      {job.requirements.length > 2 && (
                        <li>• +{job.requirements.length - 2} more requirements</li>
                      )}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      Deadline: {job.deadline}
                    </div>
                    <div className="flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors cursor-pointer">
                      <span>Apply</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Career Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
                <p className="text-white/90">Be part of an institution that values excellence, innovation, and empowerment</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">150+</div>
                  <p className="text-white/90">Faculty Members</p>
                </div>
                <div>
                  <Award className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <p className="text-white/90">Satisfaction Rate</p>
                </div>
                <div>
                  <GraduationCap className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">5000+</div>
                  <p className="text-white/90">Students Empowered</p>
                </div>
                <div>
                  <Heart className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <p className="text-white/90">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
