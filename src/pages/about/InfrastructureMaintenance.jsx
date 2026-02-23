import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Wrench, 
  BookOpen, 
  Monitor, 
  Trophy, 
  Cpu,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  ClipboardList
} from 'lucide-react';

const InfrastructureMaintenance = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState([0]); // First section open by default

  const toggleSection = (index) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const maintenanceSections = [
    {
      id: 'building',
      title: 'Building Infrastructure',
      icon: Building,
      content: `The college has a systematic and transparent system for maintenance of various facilities. All maintenance work has been done through tender system as per the standard norms. Institutional mechanisms for maintenance of infrastructure, facilities and equipment of the college are as follows:

• As a constituent unit of Patna University, constant effort is made to provide secure space for equipments and tools.

• The college Building Committee looks after the maintenance, repair and constructional works inside the campus.

• Construction, repair and maintenance of the building and physical infrastructure like water supply, power supply and gas supply are looked after by this committee.

• For maintenance of civil and electrical works a college staff is assigned by the college authority to verify the work done by the contractors.

• All works have been done through tender system as per the standard norms.

• All minor faults have been taken care by hired technicians, carpenters, plumbers.

• Maintenance of toilets and other service areas have been outsourced through outsourcing agencies as the norms prescribed by the university administration.`
    },
    {
      id: 'furniture',
      title: 'Maintenance Of Furniture',
      icon: Wrench,
      content: `• As per the requirement of departments and office, carpenter has been hired to look after the maintenance and repair work of furniture, fixtures and other physical infrastructure.

• Work done has been verified by the designated staff.

• Regular inspections are conducted to ensure all furniture is in good condition.

• Damaged furniture is repaired or replaced as per the requirement.

• The college maintains inventory of all furniture for efficient management.`
    },
    {
      id: 'laboratory',
      title: 'Maintenance Of Laboratory Equipment',
      icon: Cpu,
      content: `• Each lab maintains a stock register of all the laboratory items.

• Dead Stock Register is also maintained to keep an account of the non-functional equipment.

• Equipments are checked elaborately on yearly basis. A committee of concerned unit is formed by the college administration which inspects and evaluates the current working condition and status of equipments.

• An inventory is managed at departmental level for maintenance of practical materials and is presented before the committee.

• Consumable items are also categorized separately and checked by the committee members time to time.

• The committee members give its recommendations whether repair or upgradation is needed.

• Departmental Council give requisitions for purchase of needed items after inviting quotations from different agencies which is then scrutinized by college Purchase Committee.

• After approval of the committee, required items have been purchased.`
    },
    {
      id: 'library',
      title: 'Maintenance Of Library',
      icon: BookOpen,
      content: `• Departmental Council gives the list of books comprising author and publishers' names according to the need and demand of students.

• The list is presented to the college Library Committee for sorting and approval and college fulfil the demand according to the available fund.

• For maintenance of books, library incharge teachers and non-teaching staff select damaged books for repairing, covering, hard binding or soft binding.

• For protection and maintenance of books vacuum cleaning and pest control has been done as a regular maintenance work.

• Library infrastructure is regularly updated with modern amenities.

• Digital library resources are maintained and upgraded regularly.`
    },
    {
      id: 'sports',
      title: 'Maintenance Of Indoor Sports Complex',
      icon: Trophy,
      content: `• Sports committee looks after the requirement and facility related to Indoor and Outdoor sports and gives requisition to the college administration for purchasing and maintenance of sports items.

• Maintenance of Indoor Complex is done regularly.

• Sports equipment is inspected and maintained periodically.

• The college provides proper facilities for various indoor and outdoor sports activities.

• Special maintenance is done for sports equipment and grounds.`
    },
    {
      id: 'digital',
      title: 'Maintenance Of Digital Devices',
      icon: Monitor,
      content: `• Annual maintenance and software upgradation have been done through pre-purchased offers when new computers have been installed to save funds.

• Computers and ICT equipments which are not covered by this scheme are maintained by a separate requisition application as demanded by the departments.

• New purchase and upgradation are recommended by departmental council, which are to be recommended and routed by concerned college committees and then items are purchased through open tender.

• As per need of hour learning resources are upgraded time to time in the library.

• ICT infrastructure is continuously upgraded to meet the technological requirements.

• Regular maintenance ensures smooth functioning of all digital resources.`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Helmet>
        <title>{t('nav.aboutSub.infrastructureMaintenance')}</title>
        <meta name="description" content="Procedures for Maintenance of Infrastructure at Magadh Mahila College" />
      </Helmet>

      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-blue-50/20 via-white to-maroon-50/20 -z-10"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.9), rgba(139, 69, 19, 0.1))',
            'linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.1))',
            'linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.9), rgba(139, 69, 19, 0.1))',
            'linear-gradient(315deg, rgba(139, 69, 19, 0.1), rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.1))',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 bg-primary/10 rounded-full -z-10"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="min-h-screen bg-transparent py-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Building className="w-10 h-10 text-primary" />
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-primary"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {t('nav.aboutSub.infrastructureMaintenance')}
              </motion.h1>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <Wrench className="w-10 h-10 text-maroon-500" />
              </motion.div>
            </motion.div>
            <motion.p
              className="text-gray-600 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Procedures For Maintenance Of Infrastructure
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ClipboardList className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold text-primary">
                Institutional Mechanisms for Maintenance
              </h2>
            </motion.div>

            {/* Sections */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {maintenanceSections.map((section, index) => {
                const Icon = section.icon;
                const isOpen = openSections.includes(index);

                return (
                  <motion.div
                    key={section.id}
                    variants={itemVariants}
                    className="group"
                  >
                    <motion.button
                      onClick={() => toggleSection(index)}
                      className={`w-full text-left p-5 rounded-xl transition-all duration-300 border-2 ${
                        isOpen
                          ? 'bg-gradient-to-r from-primary/10 to-maroon-500/10 border-primary'
                          : 'bg-gray-50 border-gray-200 hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start gap-3">
                        <motion.div
                          animate={isOpen ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className="mt-1"
                        >
                          <Icon className={`w-6 h-6 ${isOpen ? 'text-primary' : 'text-gray-500'}`} />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-semibold ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                            {section.title}
                          </h3>
                        </div>
                        <motion.div
                          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-gray-400'}`} />
                        </motion.div>
                      </div>
                    </motion.button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="mt-4 p-5 bg-white rounded-lg border-l-4 border-primary shadow-md"
                          >
                            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                              {section.content}
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Key Points Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-primary/5 to-maroon-500/5 rounded-2xl shadow-xl p-8 border-2 border-primary/20"
          >
            <motion.div
              className="flex items-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex-shrink-0"
              >
                <CheckCircle className="w-12 h-12 text-maroon-500" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Our Commitment to Quality Maintenance
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Magadh Mahila College is committed to providing and maintaining world-class infrastructure 
                  for its students and staff. The systematic approach to maintenance ensures that all 
                  facilities are in optimal condition, creating a conducive learning environment.
                </p>

                {/* Features List */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    'Transparent tender system',
                    'Regular inspections',
                    'Qualified maintenance staff',
                    'Modern equipment',
                    'Safety compliance',
                    'Sustainable practices'
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <a
              href="/about/mis"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
            >
              <span>Learn more about MIS</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default InfrastructureMaintenance;
