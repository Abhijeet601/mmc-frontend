import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Download, FileText, BookOpen, Sparkles, FileCheck, Award, Users, Zap } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

const CourseMaterial = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedDepts, setExpandedDepts] = useState(new Set());

  const departments = {
    'Science': [
      {
        name: 'Physics',
        count: 92,
        path: 'Physics',
        pdfs: [
          'A.C-Bridge.pdf',
          'Applications-of-least-action-principleB.Sc-Part1._Physics_Department-of-Physics-MMC_Supriya-Rani.pdf',
          'Astons-Mass-Spectrograph-By-Sonu-RaniDeptt.-of-Physics.pdf',
          'Betatron-by-Sonu-Rani-Deptt.-of-Physics.pdf',
          'Boltzmanns-Statistical-Relation-By-Sonu-RaniDeptt.-of-Physics-1.pdf',
          'Boundary-Condition-1.pdf',
          'Boundary-Condition.pdf',
          'Brownian-Motion-1.pdf',
          'Brownian-Motion.pdf',
          'Concept-of-ether-and-principle-of-relativityEinstein-and-Galilean_Dr.-Supriya-Rani.pdf',
          'Conservation-Laws-for-Energy-Momentum-and-angular-Momentum-B.SC_.-Part1_Physics_Department-of-Physics-Magadh-Mahila-College_.pdf',
          'Coriolis-Force.pdf',
          'crystal-System.pdf',
          'Cyclotron-By-Sonu-RaniDeptt.-of-Physics.pdf',
          'D-Alemberts-Principle-and-Virtual-Work-B.Sc_.-Part1_Physics_Department-of-Physics-Magadh-Mahila-College_Supriya-Rani.pdf',
          'Davisson_Physics.pdf',
          'Debys-Length.pdf',
          'Dielectric-plarization.pdf',
          'Different-form-of-Principle-of-least-action.pdf',
          'DIFFRACTION-CLASSES-OF-DIFFRACTION-AND-FRAUNHOFER-DIFFRACTION-DUE-TO-A-SINGLE-SLIT-_B.Sc_.-Part-2-Hons.-_Physics_Department-.pdf',
          'DIFFRACTION-DUE-TO-A-PLANE-DIFFRACTION-GRATING-_B.Sc_.-Part-2-Hons.-_Physics_Department-of-Physics-Magadh-Mahila-College-PU_.pdf',
          'Discovery-of-Neutron-By-Sonu-RaniDeptt.-of-Physics.pdf',
          'Electric-potential-of-quadrupole.pdf',
          'ExamplesGradient.pdf',
          'Faradays-Law.pdf',
          'First-Law-of-Thermodynamics-by-Sonu-Rani-Deptt.-of-Physics.pdf',
          'Frames-of-References.pdf',
          'FRAUNHOFER-DIFFRACTION-DUE-TO-CIRCULAR-APERTURE-_B.Sc_.-Part-2-Hons.-_Physics_Department-of-Physics-Magadh-Mahila-College-PU.pdf',
          'FRAUNHOFER-DIFFRACTION-DUE-TO-DOUBLE-SLITS-_B.Sc_.-Part-2-Hons.-_Physics_Department-of-Physics-Magadh-Mahila-College-PU_-Dr..pdf',
          'Fundamentals-of-Statistical-Mechanics-By-Sonu-RaniDeptt.-of-Physics-1.pdf',
          'G-M-Counter-By-Sonu-RaniDeptt.-of-Physics.pdf',
          'Growth-of-current-in-LCR-in-Series.pdf',
          'He-Ne-Laser-and-ruby-laser_B.Sc_.-Part-2-Hons.-.pdf',
          'Introduction-of-plasma.pdf',
          'Ionic-crytals_Paper-VII_department-of-Physics-1.pdf',
          'Langevin-diamagnetism (1).pdf',
          'Langevin-diamagnetism.pdf',
          'Langevins-Paramagnetism.pdf',
          'Laser-Basics-Principle-and-Properties_B.Sc_.-Part-2-Hons.pdf',
          'Lattice-Vibrations_1D-Monoatomic-Lattice.pdf',
          'Least-Action-Principle-and-Lagranges-Equatio-B.Sc_.-Part_Physics_Department-of-Physics-Magadh-Mahila-College_Supriya-Rani.pdf',
          'Length-Contraction.pdf',
          'Liquefaction-of-Gas-by-Sonu-Rani-Deptt.-of-Physics.pdf',
          'lorentz-transformation.pdf',
          'Macrostate-and-Microstate-By-Sonu-RaniDeptt.-of-Physics-.pdf',
          'Magnetohydrodynamic-equations.pdf',
          'Matter-Waves.pdf',
          'Maxwell-Boltzman-Dist.Law-By-Sonu-RaniDeptt.-of-Physics-Copy.pdf',
          'Maxwell-Distribution-Law-1.pdf',
          'Maxwell-Distribution-Law.pdf',
          'Michelson-Morley-Experiment_Supriya-Rani.pdf',
          'Miller-Indices.pdf',
          'Motion-in-a-Central-Field.pdf',
          'Multipole-expansion-of-potential-due-to-charge-distribution-.pdf',
          'Non-magnetic-use-of-MHD-Equations.pdf',
          'Numerical-Problems-and-solutions-based-on-concept-of-Lorentz-Transformation-.pdf',
          'Phase-Space-Constraints-Hamiltons-Equation-B.sc_.-Part1_Physics_Department-of-Physics-Magadh-Mahila-College_Supriya-Rani.pdf',
          'Photo-conductive-cells.pdf',
          'Photo-emissive-cell.pdf',
          'photo-voltaic-cell.pdf',
          'Photoelectric-emissionUG_Modern-Physics_Department-of-Physics.pdf',
          'PhysicsPaperVNotesPritiMishraMMCPU.pdf',
          'Plasma-Oscillation-Frequency.pdf',
          'Poissons-and-Laplaces-equatin-for-an-electric-field.pdf',
          'Population-Inversion-and-3-and-4-level-laser-system_B.Sc_.-Part-2-Hons-.pdf',
          'PostulatesofQuantumMechanics.pdf',
          'PritiMishra-Physics-DII-ContinuityequationPoyntingTheorem.pdf',
          'PritiMishra-Physics-DII-Reflection.pdf',
          'PritiMishra-Physics-DII-Stresstensor.pdf',
          'PritiMishra-Physics-DIII-GaussStokesandGreensTheorem.pdf',
          'Radioactive-Disintegration-By-Sonu-RaniDeptt.-of-Physics.pdf',
          'Rectillinear-flow-of-Heat.pdf',
          'Relation-Between-Einstein-A-B-coefficient_B.Sc_.-Part-2-Hons.pdf',
          'Scattering.pdf',
          'Scattering2.pdf',
          'solutions-of-laplaces-equation.pdf',
          'Special-Theory-of-Relativity-Intervals-Spacetime-and-Proper-Time-B.SC_.-Part-1_Dr.-Supriya-Rani.pdf',
          'Specific-HeatUG_PaperII_Department-of-Physics.pdf',
          'Stern-and-Gerlach-by-Sonu-RaniDeptt.-of-Physics.pdf',
          'Stimulated-Absorption-Spontaneous-Emission-and-Stimulated-Emission-Keys-of-Laser-Action_B.Sc_.-Part-2-Hons.pdf',
          'Symmetry-Operations.pdf',
          'Thermo-Electric-Power.pdf',
          'Thermocouple-coefficient.pdf',
          'Time-Dilation-and-Simultaneity.pdf',
          'Transport-phenomena-1.pdf',
          'Transport-phenomena.pdf',
          'TravelingWaves.pdf',
          'velocity-transformation-.pdf',
          'Weins-Displacement-LawUG_Paper-II_Department-of-Physics.pdf',
          'x_ray-diffraction.pdf',
          'xray-spectraUG_Modern-Physics_Department-of-Physics.pdf'
        ]
      },
      {
        name: 'Botany',
        count: 36,
        path: 'Botany',
        pdfs: [
          'Albugo-or-Cystopus-White-Rust-of-Crucifers.pdf',
          'Alternaria.pdf',
          'B-CHROMOSOME.pdf',
          'BIOINFORMATICS.pdf',
          'Biotic-factors.pdf',
          'Bryophyte-II.pdf',
          'Bryophytes.pdf',
          'Cell-membrane-is-the-outer-boundary-of-animal-cell.pdf',
          'Early-blight-of-potato.pdf',
          'Edaphic-factors.pdf',
          'ENZYMES.pdf',
          'Essential-Oils.pdf',
          'Little-leaf-of-Brinjal.pdf',
          'PCR.pdf',
          'Peziza.pdf',
          'PHOTOSYNTHESIS-1.pdf',
          'PHOTOSYNTHESIS-UNIT-III.pdf',
          'PHOTOSYNTHESIS-UNIT-IV.pdf',
          'Photosynthesis2.pdf',
          'plant-succession-Hydrosere.pdf',
          'Plant-succession-Xerosere.pdf',
          'PPT-Citrus-canker-1.pdf',
          'PPT-on-Cereals.pdf',
          'PPT-on-Spices-Condiments.pdf',
          'PPTD3.pdf',
          'Pteridophytes-converted.pdf',
          'Pulses.pdf',
          'Respiration-converted.pdf',
          'Sphagnum.pdf',
          'Sugar.pdf',
          'Synecology-part-1.pdf',
          'Synecology-part-2.pdf',
          'Synecology-part-3.pdf',
          'Terminology-2.pdf',
          'Water-relations-physiology-1.pdf',
          'Water-relations-physiology.pdf'
        ]
      },
      {
        name: 'Chemistry',
        count: 28,
        path: 'Chemistry',
        pdfs: [
          'Abstract-of-SDY-Occurrence-and-Extraction.pdf',
          'ALKALOIDS.pdf',
          'amino-acid-sequencing.ppt',
          'camphor_SemIV___Herbal2nd_Sem_Chemistry.pdf',
          'Catalysis.pdf',
          'ChargeDensity_BondOrder_DrBinaRani.pdf',
          'citral_pg_science_chemistry_mkgupta.pdf',
          'concept-of-ecosysystem.pdf',
          'D2H_Chemistry_alcohols_Part_I.pdf',
          'DES_5.3.pdf',
          'DSE_5.1.pdf',
          'fluxional-molecule-converted.pdf',
          'glycolysis.pptx',
          'HMOT-Bina-rani.pdf',
          'Huckel_Molecular_Orbital_Theory_DrBinaRani.pdf',
          'linalool.pdf',
          'MSc-Chemistry-Sem2-Unit1.pdf',
          'MScChemistrySem2-CC5-Unit5.pdf',
          'MscPhysicalChemistrySpecialSem4Unit1.pdf',
          'MscPhysicalChemSpecialSem4Unit3.pdf',
          'NICOTINE-converted.pdf',
          'organic_pollutant_and_sewer_sludge.pdf',
          'photochemistry_and_jablonski_diagram_M.sc_II_Sem.pdf',
          'photochemistry_of__carbonyl_compound_I_pgsem2_science_chem_mkgupta.pdf',
          'photochemistry_of_enones_pg_Chem_SemII_mkgupta.pdf',
          'photochemistry-converted.pdf',
          'POPs.pdf',
          'Terpineol.pdf',
          'Transition-Metal-converted.pdf',
          'UshaKumari-MSc-Chemistry-Sem2-Unit1.pdf'
        ]
      },
      {
        name: 'Zoology',
        count: 30,
        path: 'Zoology',
        pdfs: [
          'amphibia-classification-ppt-Copy.pdf',
          'Antibody-structure-.pdf',
          'Application-of-Ecology-in-Wildlife-conservation-converted.pdf',
          'B.sc-Part-IH-Moulting-in-insects.pdf',
          'Cell-Structure.pdf',
          'Concept-of-community.pdf',
          'DNA-Packaging.pdf',
          'Endoplasmic-Reticulum-ER.pdf',
          'Energy-Flow-through-the-Ecosystem-converted.pdf',
          'Evolutio_-History-of-life.pdf',
          'Flight-adaptations-in-birds.pdf',
          'Fossils-and-Fossilization.pdf',
          'Golgi-Apparatus.pdf',
          'Lamarckism-and-Neo-Lamarckism.pdf',
          'Lysosomes.pdf',
          'Major-histocompatibility-complex.pdf',
          'metamorphosis-in-insects.pdf',
          'Molecular-evidence-of-evolution...-converted.pdf',
          'Mollusca.pdf',
          'Natural-selection.pdf',
          'Nucleic-acid.pdf',
          'Organic-Evolution.pdf',
          'Phylogeny-of-horse.pdf',
          'Plasma-Membrane-.pdf',
          'Poison-apparatus-and-the-biting-mechanism-of-snakes.pdf',
          'Respiration-in-arthropoda.pdf',
          'Transport-across-plasma-membrane.pdf',
          'Variuos-Models-of-Plasma-Membrane.pdf',
          'Virus-Viroid-and-Mycoplasma.pdf',
          'Vision-in-Arthropoda.pdf'
        ]
      },
      {
        name: 'Mathematics',
        count: 34,
        path: 'Mathematics',
        pdfs: [
          'An-Introduction-to-Lattice.pdf',
          'Automorphism.pdf',
          'Coset-Decomposition.pdf',
          'Cosets-of-Sub-Group.pdf',
          'Differential-.Eq_.-UG_Mathematics_Binay-Kumar.pdf',
          'Discussion-of-motion-of-Horizontal-Elastic-String.pdf',
          'E-Content-of-Dr.-Manoj-Kumar-Department-of-Mathematics-MMC-Patna.pdf',
          'EC1.pdf',
          'EC2.pdf',
          'EC3.pdf',
          'EC6.pdf',
          'Econtent7.pdf',
          'elementary-properlies-of-Automorphism.pdf',
          'Elementary-Transformations-and-Elementary-Matrices.pdf',
          'Eulers-Theorem.pdf',
          'Evaluation-of-the-Extension-of-a-Heavy-Elastic-string.pdf',
          'Exact-Diff.Eq_UG-_Mathematics-_Binay-Kumar.pdf',
          'Expression-for-work-done-in-stretching-Horizontal-Elastic-String..pdf',
          'Final-All-Sets.pdf',
          'INNER-Automorphism.pdf',
          'MATH-ARTICLE-final.pdf',
          'Maximal-and-Minimal-c.pdf',
          'Non-magnetic-use-of-MHD-Equations-1.pdf',
          'Numericals-on-Hookes-Law.pdf',
          'Orthogonal-Matrix-and-its-Properties.pdf',
          'Partial-Differentiation-.pdf',
          'Properties-of-coset-final.pdf',
          'solutions-of-laplaces-equation-1.pdf',
          'Some-Standard-Exemplas-of-Automorphism.pdf',
          'Successive-Differentiation.pdf',
          'Taylors-and-Maclaurins-Series.pdf',
          'Theoram-Cosets-of-Sub-Group.pdf',
          'Theoram-on-Cosets.pdf',
          'Total-Differential-and-Exact-Differential.pdf'
        ]
      },
      {
        name: 'Herbal Chemistry',
        count: 1,
        path: 'Herbal chemistry',
        pdfs: [
          'Cytochrome-p450-beena-rani.pdf'
        ]
      },
    ],
    'Humanities': [
      {
        name: 'History',
        count: 64,
        path: 'History',
        pdfs: [
          '1.-Achievements-of-Lous-XIV-of-France.pdf',
          '1.-Effects-and-Significance-of-the-geographical-discoveries.pdf',
          '1.-important-of-Geographical-discoveries.pdf',
          '1.-The-Congress-of-Vienna-1814-15.pdf',
          '2.-American-Revolution-in-World-History.pdf',
          '2.-Criticism-of-the-Treaty-of-Vienna.pdf',
          '2.-The-Causes-of-Reformation.pdf',
          '2.-Unit-5-The-nature-of-the-Reformation.pdf',
          '3.-Cause-for-the-Rise-of-Mercantilism.pdf',
          '3.-Causes-of-the-American-War-of-Independence.pdf',
          '3.-The-Unification-of-Italy.pdf',
          '3.Nature-of-the-Reformation-unit-5.pdf',
          '4.-Criticism-of-the-Treaty-of-Versalilles.pdf',
          '4.-Domestic-Reforms-of-Peter-the-Great.pdf',
          '4.-Economics-Effe-of-Renissence.pdf',
          '4.-Impact-of-the-Industrial-revolution.pdf',
          '5.-Intellectutal-impact-of-Reneissance.pdf',
          '5.-Salient-features-of-Enlightment.pdf',
          '5.-The-factors-responsible-for-transition-from-feudalism-to-capitalism.pdf',
          'Achievements-of-Lous-XIV-of-France.pdf',
          'Administrative-reforms-of-Allauddin-Khilji.pdf',
          'American-Revolution-in-World-History.pdf',
          'Causes-of-Geographical-Discoveries.pdf',
          'Causes-of-the-American-War-of-Independence.pdf',
          'CAUSES-OF-THE-DOWNFALL-OF-THE-NAPOLEON.pdf',
          'Causes-of-the-Russian-Revolution.pdf',
          'Different-Styles-of-Temple-Architecture-of-Pallavas.pdf',
          'Domestic-Reforms-of-Peter-the-Great.pdf',
          'economic-and-cultural-transition-of-early-medieval-india.pdf',
          'Establishment-of-Delhi-Sultanate-with-special-reference-to-Iltutmish.pdf',
          'Expeditions-and-Reforms-of-Iltutmish.pdf',
          'Expeditions-of-Allauddin-Khilji.pdf',
          'Extent-of-Harshavardhanas-empire.pdf',
          'Ghiyasuddin-Balban.pdf',
          'Government-of-India-Act-1935-converted-1.pdf',
          'Mansabdari-System-of-Akbar.pdf',
          'Market-policy-of-Allauddin-Khilji.pdf',
          'Military-Expeditions-of-Akbar.pdf',
          'Military-Expeditions-of-Humayun.pdf',
          'Muhommad-Bin-Tughlaq.pdf',
          'Narsimhavarman-I-630-668A.D.pdf',
          'National-Assembly-converted.pdf',
          'Origin-of-Indian-National-converted.pdf',
          'Phase-of-Transition.pdf',
          'Political-History-of-Pallavas-with-special-reference-to-Mahendravarman.pdf',
          'Rise-of-Communalism-converted.pdf',
          'Samudragupta.pdf',
          'Sources-of-Indian-History.pdf',
          'Sources-of-Mughal-Empire.pdf',
          'sources-of-sultanate-period..pdf',
          'Subhash-Chandra-converted.pdf',
          'Sufism.pdf',
          'Swaraj-Party-converted-2.pdf',
          'The-Age-of-Metternich-converted.pdf',
          'The-Bhakti-Movement.pdf',
          'The-Eastern-Question-up-to-the-War-of-Greek-Independence.pdf',
          'The-Era-of-Metternich.pdf',
          'The-factors-responsible-for-transition-from-feudalism-to-capitalism.pdf',
          'The-Freedom-Struggle-in-Princely-India-converted.pdf',
          'The-Mauryan-Age-final.pdf',
          'The-revolution-of-1830-converted.pdf',
          'The-revolution-of-1848-converted.pdf',
          'The-Rise-of-Napoleon-and-his-reforms.pdf',
          'The-Vardhana-Dynasty-Harshavardhana.pdf'
        ]
      },
      {
        name: 'Hindi',
        count: 22,
        path: 'Hindi',
        pdfs: [
          'aadikal-pravirtiya-B-A-first-year.pdf',
          'bhai-bhan-kavita-ki-vishetata-_B-A-part-2_-1.pdf',
          'bhartendu-harishchandra-1.pdf',
          'gaban-B-A-third-year.pdf',
          'gaban-me-aadarsonomukhwaad-yatharthwaad.pdf',
          'gaban-me-wrnit-mukhy-samsya.pdf',
          'gopal-simgh-nepali-kawi-parichay_B-A-part-2_.pdf',
          'gopal-singh-nepali.pdf',
          'Hindi-Econtent-B.A.II-jayshankar-prasad-By-Dr.-Shipra-Prabha.pdf',
          'Hindi-Econtent-B.A.III-by-Dr.-Shipra-Prabha.pdf',
          'Hindi-Econtent-for-B.A.-II-By-Dr.-Shipra-Prabha.pdf',
          'Hindi-Econtent-for-B.A.-part-I-1.pdf',
          'Hindi-Econtent-for-B.A.II-By-Dr.-Shipra-prabha.pdf',
          'karmbhumi-B-A-third-year.pdf',
          'mai-gayak-hu-swachhand-himachl-ka-2.pdf',
          'nauka-vihar-ka-bhawarth-B-A-second-year-.pdf',
          'premchand-ke-upnyaso-me-gbn-ka-sthan_B-A-part-3_-1.pdf',
          'raso-ki-bhasha.pdf',
          'ratan-ka-chaitra-chitran.pdf',
          'ritikaal-ke-prmukh-kavi_-B-A-part-1_-1.pdf',
          'ritisidha-kavi-bihari-B-A-first-year.pdf',
          'rmanath-ka-charitra-chitran_-B-A-part-3_-2.pdf'
        ]
      },
      {
        name: 'English',
        count: 9,
        path: 'English',
        pdfs: [
          '1587466660975_A-Critical-Study-of-Short-Stories-by-D.H-LawrenceDegree-II-1.pdf',
          'Augustan-Prose-by-Dr.-Khushboo.pptx',
          'Elizabethan-Poetry.pptx',
          'Old-English.pptx',
          'Picaresque-Novel-By-Dr.-Santoshi-Bhawani-Mishra.pptx',
          'Pygmalion-by-Dr.-Archana-Jaiswal.pdf',
          'Question-OF-PYGMALION.pdf',
          'Restoration-and-Reformation-Age.pptx',
          'The-Development-Of-English-Language.pdf'
        ]
      },
      {
        name: 'Sanskrit',
        count: 5,
        path: 'Sanskrit',
        pdfs: [
          'Avyayi-bhav-samas-2.pdf',
          'E-content-shakuntla-me-prakriti.pdf',
          'karak.pdf',
          'shivraj.pdf',
          'vachya.pdf'
        ]
      },
      {
        name: 'Urdu',
        count: 8,
        path: 'Urdu',
        pdfs: [
          'Aligarh-Tahreek-Ki-Samaji-Ilmi-Aur-Adbi-Khidmaat.pdf',
          'Dakani-Urdu-Ki-Lesani-Khususiyat-Ka-Tanqeedi-Jayeza.pdf',
          'Dr.-sohail-Anwers-lesson-for-D-IIIURDU.pdf',
          'Faiz-Ahmad-Faiz-Bahaisiat-Inqalabi-Shaer.pdf',
          'Ilm-Ul-Balaghat-Ki-Tarif.pdf',
          'Jadeed-Hind-Aaryayee-Zabanen-Aur-Urdu.pdf',
          'Jameel-Majhari-Hayat-O-Khidmat-Ka-jayeza.pdf',
          'Urdu-Aur-Hindi-Ka-Lesani-Rishta-Ek-Jayeza.pdf'
        ]
      },
      {
        name: 'Music',
        count: 2,
        path: 'Music',
        pdfs: [
          'Record-of-development-of-e-content-and-conduct-of-online-classes.pdf',
          'Record-of-development.pdf'
        ]
      },
      {
        name: 'Philosophy',
        count: 12,
        path: 'Philosophy',
        pdfs: [
          '1.Nyaya-philosophy.pdf',
          '2.Vaisesika-Philosophy.pdf',
          '3.Theories-of-Truth.pdf',
          '4.An-Introduction-to-Ethics.pdf',
          '5.Immanuel-Kant.pdf',
          '6.-Nature-of-Epistemology.pdf',
          'Introduction-of-Philosophy-of-Religion.pdf',
          'Part-lll-SYMBOLIC-LOGIC-RANJANA-YADAV.pdf',
          'PDF-GITA.pdf',
          'RANJANA-LOGIC.pptx',
          'SATELLITE-COMMUNICATION_MHOM-CC-Rajni-Pandey.pptx',
          'The-Concept-of-God-in-Nyaya-Philosophy.pdf',
          'Village-Swaraj_paper.pdf',
          'Weekly-Class-Report-24-29-August-2020.pdf'
        ]
      },
    ],
    'Social Sciences': [
      {
        name: 'Economics',
        count: 68,
        path: 'Economics',
        pdfs: [
          '2.-Optimum-Theory-of-Population.pdf',
          '3.-Strategies-for-Improving-Education-converted.pdf',
          '4.-Balanced-Regional-Development.pdf',
          '5.-International-Trade-Ec-Dev.pdf',
          'Adam-Smith.pdf',
          'Arrow.pdf',
          'balanced_and_unbalanced_growth_theory.pp2_.pdf',
          'CC-5-Cashless-Economy.pdf',
          'CC-5-Demonetisation.pdf',
          'CC-5-PPT.pdf',
          'CC-05-Questions.pdf',
          'CC-05-Trends-in-industrial-production.pdf',
          'CC-09-Probability-1.pdf',
          'CC-09-probability-3.pdf',
          'CC-10Indian-economy-Issues-and-Policies-2.pdf',
          'CHANGING-ROLE-OF-STATE.pdf',
          'Chi-square-test.pdf',
          'Coase-Theorem.pdf',
          'Cobweb-Model.pdf',
          'Comparative-Costs-Theory.pdf',
          'Compensation.pdf',
          'David-Ricardo.pdf',
          'DEMONITIZATION-PPT.pdf',
          'Dept__of_Economics-mmc.pptx',
          'Economics-of-growth-and-development4.pdf',
          'Externalities-and-Market-Failure.pdf',
          'Foreign-Exchange-policy.pdf',
          'Gender-pdf.pdf',
          'Globalisation.pdf',
          'Human-Capital-Formation.pdf',
          'Hypothesis-and-Types-of-errors.pdf',
          'Hypothesis-Testing.pdf',
          'IMPACT-OF-GLOBALISATION-ON-UNION-PUBLIC.pdf',
          'IN-Questions.pdf',
          'Indias-population-pattern-and-Policies-1.pdf',
          'IS-LM-model.pdf',
          'Kuznets-Inverted-U-Hypothesis.pdf',
          'labour-market-reforms-indian-economy.pdf',
          'MAGADH-MAHILA-COLLEGE.pdf',
          'Maltus-Population-Theory.pdf',
          'Market-with-Asymmetric-Information.pdf',
          'marketing-india-pushpa.pdf',
          'MEASURES-OF-REFORMS-IN-UNION-PUBLIC.pdf',
          'modified-phillips-curve.pdf',
          'NEED-FOR-ACTION-ORIENTED-FISCAL-PLAN.pdf',
          'Niti-Aayog.pdf',
          'online-class-record-ug-pg-19.09.20.pdf',
          'online-class-record-ug-pg-27.09.20-Copy.pdf',
          'PARADIGMS-OF-UNION-PUBLIC-FINANCE.pdf',
          'Philips-Curve.pdf',
          'POLICY-OPTIONS-OF-UNION-PUBLIC-FINANCE.pdf',
          'Presentation-1-2.pdf',
          'Principle-of-Maximum-Social-Advantage.pdf',
          'Provision-of-Public-and-Private-Goods.pdf',
          'Public-Goods-and-Market-Failure.pdf',
          'Regional-Imbalance.pdf',
          'REMOVAL-OF-REGIONAL-DISPARITY-THROUGH-UNION-PUBLIC-FINANCE.pdf',
          'RIGHTS-TO-FORESTS.pdf',
          'Role-of-MNCs-in-India.pdf',
          'Role-of-State-in-Economic-Activities.pdf',
          'ROLE-OF-UNION-PUBLIC-FINANCE-IN-BALANCED-REGIONAL-DEVELOPMENT-1.pdf',
          'RTCED.pdf',
          'Schumpeter.pdf',
          'Social-Welfare-function.pdf',
          'Students-t-test.pdf',
          'study-material-of-Macroeconomics-CC-08-.pdf',
          'Topic-of-Capital-Formation-25.pdf',
          'Topic-of-Role-of-capital-in-economic-development1.pdf',
          'Williamson.pdf'
        ]
      },
      {
        name: 'Political Science',
        count: 37,
        path: 'Political Science',
        pdfs: [
          '1.-Causes-of-Geographical-Discoveries.pdf',
          '2.-The-Rise-of-Napoleon-and-his-reforms.pdf',
          '3.-The-Era-of-Metternich.pdf',
          '4.-NAPOLEONIC-WARS-CONTD..pdf',
          '5.-The-Eastern-Question-up-to-the-War-of-Greek-Independence.pdf',
          'Approaches-to-the-Study-of-Political-Science.pdf',
          'arms-disarmament.pdf',
          'Article-published-in-Democracies-Journal-1.pdf',
          'COMPARATIVE-POLITICS-1.pdf',
          'HUMAN-RIGHTS.pdf',
          'kautilya-saptang-theory-by-Dr.-T.Meena-Horo.pdf',
          'LOHIAS-CHAUKHAMBA-RAJ-by-Dr.-T.Meena-Horo.pdf',
          'Nature-Scope-of-Political-Science.pdf',
          'NORTH-SOUTH-DIALOGUE-1.pdf',
          'Panchayati-Raj-System-in-India-An-Introduction.pdf',
          'paper-2-env-deg.pdf',
          'POL-SOC-BA-Hons-Paper-VII-Course-Content-11-1.pdf',
          'POL-SOC-BA-Hons-Paper-VII-Couse-Content-11-2.pdf',
          'Political-Sociology-BA-Hons-Paper-VII-1.pdf',
          'Political-Sociology-BA-Hons-Paper-VII-2.pdf',
          'Political-Sociology-BA-Hons-Paper-VII-3.pdf',
          'Political-Sociology-BA-Hons-Paper-VII-4.pdf',
          'Political-Sociology-BA-Hons-Paper-VII-5.pdf',
          'Political-Sociology-BA-Hons-Paper-VII-6.pdf',
          'Political-Sociology-BA-Hons-Paper-VII-7.pdf',
          'PRIs-A-Primary-Unit-of-Governance.pdf',
          'Problems-of-third-world-countries.pdf',
          'Public_Administration.pdf',
          'Relation-of-Political-Science-with-other-Social-Sciences.pdf',
          'rishu.pptx',
          'Role-of-D.M.pdf',
          'Shashi-Sharma-Hindi.pdf',
          'Terrorism-is-1.pdf',
          'The-Cold-War.pdf',
          'The-Fundamental-Duties-1.pdf',
          'Voting-Behaviour-in-India-by-Dr.-T.Meena-Horo.pdf',
          'What-is-Naxalism.pdf',
          'What-is-Politics.pdf'
        ]
      },
      {
        name: 'Sociology',
        count: 41,
        path: 'Sociology',
        pdfs: [
          'Agencies-of-Socialization.pdf',
          'Characteristics-of-Observation.pdf',
          'City.pdf',
          'Concept-of-Social-Survey.pdf',
          'Concept-of-Urban-Sociology.pdf',
          'Culture.pdf',
          'Dr.-Anjani-kumari-singh-Department-of-sociology-B.A-part-2.pdf',
          'Dr.-Anju-kumari-department-of-sociology-B.A-part-2.pdf',
          'Elements-and-Functions-of-Culture.pdf',
          'Fertility.pdf',
          'Importance-of-Sociology.pdf',
          'Meaning-and-characteristics-of-Social-Research.pdf',
          'Measurements-of-Fertility.pdf',
          'Method-of-Social-Research.pdf',
          'Migration.pdf',
          'Nature-of-social-Anthropology.pdf',
          'Nature-of-Sociology.pdf',
          'Nature-of-urban-sociology.pdf',
          'Non-Probability-sampling1.pdf',
          'Observation-method3.pdf',
          'Origin-of-Sociology.pdf',
          'Primary-and-secondary-group.pdf',
          'Primitive-Economy-Dept.-of-Sociology.pdf',
          'Principle-of-Sociology-converted-1.pdf',
          'Principles-of-Sociology.pdf',
          'Priyanka-Kumari-Department-of-sociology-B.A-part-2.pdf',
          'Probability-sampling3.pdf',
          'Rural-Sociology-Meaning-and-Nature.pdf',
          'Sampling-Design.pdf',
          'Scientific-Method.pdf',
          'Scope-of-Sociology-.pdf',
          'Scope-of-Urban-sociology.pdf',
          'Social-Anthropology (1).pdf',
          'Social-Anthropology.pdf',
          'Social-group.pdf',
          'Social-Structure.pdf',
          'Socialization-Stages-Types-Agencies1.pdf',
          'Sociology-and-Anthropology.pdf',
          'Sociology-of-Religion-converted.pdf',
          'Some-Urban-problem-Crime1.pdf',
          'Types-of-social-survey.pdf'
        ]
      },
      {
        name: 'Psychology',
        count: 31,
        path: 'Psychology',
        pdfs: [
          'An-aptitude-test-is-designed-to-assess-what-a-person-is-capable-of-doing-or-to-predict-what-a-person-is-able-to-learn-or-.pdf',
          'ARTIFICIAL-INTELLIGENC1.pdf',
          'Battery.pdf',
          'Behavioural-Approach.pdf',
          'BRAIN-TUMOR.pdf',
          'Client-Centred-therapy-1.pdf',
          'Cognitive-approach-1.pdf',
          'Cognitive-Psychology.pdf',
          'Document-1.pdf',
          'Existential-Approach-to-Clinical-Psychology.pdf',
          'family-approach.pdf',
          'FORGETTING-converted.pdf',
          'Head-Injury.pdf',
          'improving-memory_namrata.pdf',
          'Interest-Assessment.pdf',
          'Measurement-scales.pdf',
          'Mental-retardation.pdf',
          'Myers-Briggs-Type-Indicator.pdf',
          'Parametric-Statistics.pdf',
          'Psychophysic-and-Psychophysical-scaling-Methods..pdf',
          'Psychotherapy-outcomes.pdf',
          'Schizophrenia.pdf',
          'STROKE.pdf',
          'Techniques-of-Psychological-assessment.pdf',
          'The-Biological-Approach.kj_.pdf',
          'The-humanistic-approach-to-clinical-psychology-was-introduced-by-Abraham-Maslow-and.pdf',
          'theories-of-schizophrenia.pdf',
          'top-down-bottom-up.pdf',
          'Types-of-memory.pdf',
          'Types-of-tests.pdf',
          'WHAT-IS-MEMORY.pdf'
        ]
      },
      {
        name: 'Home Science',
        count: 65,
        path: 'Home Science',
        pdfs: [
          'Advantages-of-Nuclear-Family.pdf',
          'Basic-definitions-in-Nutrition.pdf',
          'CHILD-MARRAGE.pdf',
          'child-marriage-doc-converted.pdf',
          'classification-of-fibres.pdf',
          'Common-Diseases-in-Children.pdf',
          'concept-of-Home-management.pdf',
          'cotton-fibre.pdf',
          'Critical-life-stages-when-under-nutrition-is-particularly-devastating.pdf',
          'Decision-making-in-home-management.pdf',
          'Determinants-of-Health.pdf',
          'develpmental-task.pdf',
          'diabetes.pdf',
          'DIET-AND-FEEDING-PATTERN-DURING-PREGNANCY_KUMARI-RUPAM-converted.pdf',
          'Dowry-in-Indian-Society-converted.pdf',
          'Dyed-textiles-of-India-P.G-Management-of-Textile-Crafts-and-Apparel-Ind...pdf',
          'Enzymatic-Reaction-in-DigestionUG_Paper-I-Food-Science-Nutrition_-Home-Sc_-DR.-Rajni-Pandey (1).pdf',
          'Enzymatic-Reaction-in-DigestionUG_Paper-I-Food-Science-Nutrition_-Home-Sc_-DR.-Rajni-Pandey.pdf',
          'essential-elements-of-visual-merchendising.pdf',
          'Evolution-of-the-concept-of-Human-Rights.pdf',
          'Extension-Education-Meaning-and-Scope-UG-Paper-VII-.pdf',
          'Fabric-Its-importance-in-fashion.pdf',
          'Family-resources-PDF-file-2.pdf',
          'Feeding-of-Low-Birth-Weight-and-preterm-babies-PG_MHOMCC-6.pdf',
          'Fibres-and-their-primary-properties.pdf',
          'Food-Processing-General-dr.-rajni-pandey.pdf',
          'GROWTH-PATTERN-OF-LOW-BIRTH-WEIGHT-BABIES_PG-DEPT-OF-H.SC_._MMC_DR.-KUMARI-RUPAM.pdf',
          'Immoral-Trafficking-of-Women-and-Children-in-India-converted.pdf',
          'Importance-of-Planning-Characteristics-of-Planning.pdf',
          'M.A-Semester-2-unit-4.pdf',
          'MA-H.Sc_.-SEM-II-Cardiovascular-Disease.pdf',
          'MA-Home-Sc-SEM-II-Unit-III-Hypertension.pdf',
          'Malnutrition.pdf',
          'Motif-development.pdf',
          'Nutrition-and-Health-converted.pdf',
          'Objectives-Strategies-and-principles-of-merchandising.pdf',
          'Over-Nutrition.pdf',
          'PowerPoint-Presentation.pdf',
          'prevalence-of-women-studies-converted.pdf',
          'Principles-of-child-development.pdf',
          'Principles-of-merchandisingpg.pdf',
          'Prohibition-of-Sex-Selection-converted.pdf',
          'RESEARCH-NOTES_P.G.-DEPT.-OF-HOME-SCIENCE_MMU_PU_DR.-KUMARI-RUPAM.pdf',
          'Role-of-ICT-in-Development-_-DR.-Rajni-Pandey.pdf',
          'Safety-of-women-at-workplaces-Recommendations-for-Businesses.pdf',
          'SATELLITE-COMMUNICATION_-DR.-Rajni-Pandey.pptx',
          'silhouette.pdf',
          'Status-of-Women-in-Medieval-India.pdf',
          'Texture-An-important-component-of-fashion.pdf',
          'Therapeutic-Nutrition-Unit-1.pdf',
          'Types-of-Communication-PG_MHOM-CC_8_Rajni-Pandey.pptx',
          'types-of-display.pdf',
          'Unit-1-obesity.pdf',
          'Unit-2-Typhoid-Fever.pdf',
          'Unit-II-HIV-AIDS.pdf',
          'unit-II-Tuberculosis.pdf',
          'Unit-III-Kidney-Diseases.pdf',
          'Unit-III-Liver-Disease..pdf',
          'Values-Goals-and-Standards.pdf',
          'vikashatmak-karya.pdf',
          'Yarn-construction-24th-Aug.pdf',
          'आहार-आयोजन-के-महत्व.pdf',
          'घरेलू-हिंसा-से-महिला-संरक्षण-अधिनियम-2005.pdf',
          'बाल-मनोविज्ञान-के-क्षेत्र.pdf',
          'बाल-विकास-का-अर्थ-एवं-स्वरुप.pdf',
          'रक्ताल्पता.pdf',
          'विकास-एवं-विवृद्धि-को-प्रभावित-करने-वाले-तत्व.pdf'
        ]
      },
    ],
    'Vocational': [
      {
        name: 'Commerce',
        count: 4,
        path: 'Commerce',
        pdfs: [
          'Business-Law-8-Papers-2.pdf',
          'COMMERCE-B.Com-Hons.-Part-1-Paper-II-Auditing.pdf',
          'Indian-Partnership-Act-1932-Notes-with-previous-year-questions.pdf',
          'Study-material-of-Economics-B.-COM-1st-Year-by-Mugdha-Mohini-.pdf'
        ]
      },
      {
        name: 'Computer Application',
        count: 4,
        path: 'Computer Application',
        pdfs: [
          'Arithmetic-and-Logic-Microoperations.pdf',
          'constructor.pdf',
          'stack-organisation.pdf',
          'type_casting.pdf'
        ]
      },
      {
        name: 'Business Administration',
        count: 1,
        path: 'Business Administration',
        pdfs: [
          'fundamentail_of_management.pdf'
        ]
      },
    ],
  };

  const handleDownloadFolder = (deptPath, deptName) => {
    // Create a note for bulk download
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleDepartment = (deptName) => {
    const newExpandedDepts = new Set(expandedDepts);
    if (newExpandedDepts.has(deptName)) {
      newExpandedDepts.delete(deptName);
    } else {
      newExpandedDepts.add(deptName);
    }
    setExpandedDepts(newExpandedDepts);
  };

  return (
    <>
      <Helmet>
        <title>Course Material (E-Contents) - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Course materials and e-contents under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-blue-50/20 via-white to-maroon-50/20"
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
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-3 h-3 bg-primary/10 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative min-h-screen bg-transparent py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main Container */}
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Header Section */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                  <BookOpen className="w-10 h-10 text-primary" />
                </motion.div>
                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-primary"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  Course Material (E-Contents)
                </motion.h1>
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                >
                  <Sparkles className="w-10 h-10 text-maroon-500" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Description Section */}
            <motion.p
              className="text-gray-600 text-center text-lg mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive course materials and e-contents aligned with NEP 2020, curated by faculty across multiple departments to enhance learning experiences.
            </motion.p>

            {/* Category Tabs */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {Object.keys(departments).map((category, idx) => (
                <motion.button
                  key={category}
                  onClick={() => toggleSection(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    expandedSection === category
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                >
                  <Zap className="w-4 h-4" />
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* Content Sections */}
            <AnimatePresence mode="wait">
              {Object.keys(departments).map((category) =>
                expandedSection === category ? (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8"
                  >
                    {/* Category Title */}
                    <motion.h2
                      className="text-3xl font-bold text-primary mb-8 pb-4 border-b-2 border-primary"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {category}
                    </motion.h2>

                    {/* Departments Grid */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {departments[category].map((dept, idx) => (
                        <motion.div
                          key={dept.name}
                          variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.9 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                              transition: { duration: 0.5 },
                            },
                          }}
                          whileHover={{ scale: 1.05, y: -10 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg border-2 border-blue-200 hover:shadow-2xl"
                        >
                          {/* Department Header */}
                          <motion.div
                            className="flex items-center justify-between mb-4"
                            whileHover={{ x: 10 }}
                          >
                            <div className="flex items-center gap-3">
                              <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="p-2 bg-primary rounded-full"
                              >
                                <FileText className="w-6 h-6 text-white" />
                              </motion.div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-800">
                                  {dept.name}
                                </h3>
                                <motion.span
                                  className="text-sm text-primary font-semibold flex items-center gap-1"
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <FileCheck className="w-4 h-4" />
                                  {dept.count} Materials
                                </motion.span>
                              </div>
                            </div>
                          </motion.div>

                          {/* Materials List */}
                          <motion.div
                            className="space-y-2 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                          >
                            {(expandedDepts.has(dept.name) ? dept.pdfs : dept.pdfs.slice(0, 3)).map((pdf, pdfIdx) => (
                              <motion.div
                                key={pdfIdx}
                                className="flex items-center gap-2 text-sm text-gray-600 p-2 rounded bg-white/50"
                                whileHover={{ backgroundColor: 'rgba(255,255,255,0.8)', paddingLeft: 16 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Download className="w-4 h-4 text-maroon-500 mt-0.5 flex-shrink-0" />
                                <span className="truncate line-clamp-1 hover:text-primary">
                                  {pdf.replace(/-/g, ' ').replace('.pdf', '')}
                                </span>
                                <a
                                  href={r2Url(`documents/course-materials/${encodeURIComponent(dept.path)}/${pdf}`)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-auto text-xs text-primary font-semibold px-2 py-1 rounded hover:bg-blue-50"
                                >
                                  Open
                                </a>
                              </motion.div>
                            ))}
                            {dept.count > 3 && !expandedDepts.has(dept.name) && (
                              <motion.button
                                onClick={() => toggleDepartment(dept.name)}
                                className="text-xs text-primary font-semibold p-2 w-full text-center rounded hover:bg-blue-200 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                + {dept.count - 3} more materials
                              </motion.button>
                            )}
                            {expandedDepts.has(dept.name) && dept.count > 3 && (
                              <motion.button
                                onClick={() => toggleDepartment(dept.name)}
                                className="text-xs text-primary font-semibold p-2 w-full text-center rounded hover:bg-blue-200 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Show Less
                              </motion.button>
                            )}
                          </motion.div>

                          {/* Download Button */}
                          <motion.button
                            onClick={() => handleDownloadFolder(dept.path, dept.name)}
                            className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                          >
                            <Download className="w-5 h-5" />
                            Download All
                          </motion.button>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>

            {/* Info Box */}
            {!expandedSection && (
              <motion.div
                className="mt-12 p-8 bg-gradient-to-r from-blue-100 to-maroon-100 rounded-xl border-2 border-primary"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div className="flex items-start gap-4">
                  <motion.div
                    animate={{ bounce: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-1"
                  >
                    <Award className="w-8 h-8 text-maroon-500" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Select a Category
                    </h3>
                    <p className="text-gray-700">
                      Click on any category above to explore course materials from various departments. All materials are aligned with NEP 2020 objectives.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CourseMaterial;
