import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, Suspense, useCallback, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BilingualProvider } from './contexts/BilingualContext';
import Navbar from './components/Navbar';
import SlidingNotice from './components/SlidingNotice';
import Footer from './components/Footer';
import IQACStickyLayout from './components/IQACStickyLayout';
import LanguageSelectionModal from './components/LanguageSelectionModal';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import CampusLife from './pages/CampusLife';
import Contact from './pages/Contact';
import AnnualReports from './pages/AnnualReports';
import AuditReport from './pages/AuditReport';

import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';
import RTI from './pages/RTI';
import RTIManual from './pages/RTIManual';
import FeeRefundPolicy from './pages/FeeRefundPolicy';
import OnlinePaymentPolicy from './pages/OnlinePaymentPolicy';
import TransactionFeeClause from './pages/TransactionFeeClause';
import GenericPage from './pages/GenericPage';
import News from './pages/News';
import Events from './pages/Events';
import AntiRagging from './pages/AntiRagging';
import SexualHarassment from './pages/SexualHarassment';
import GrievanceCell from './pages/GrievanceCell';
import Tender from './pages/Tender';

import NEP2020 from './pages/NEP2020';
import Departments from './pages/Departments';
import IQAC from './pages/IQAC';
import NCC from './pages/NCC';
import NSS from './pages/NSS';

// NIRF pages
import NIRF from './pages/NIRF/NIRF';
import NIRFData from './pages/NIRF/Data';
import NIRFReports from './pages/NIRF/Reports';
import NIRFDocuments from './pages/NIRF/Documents';

// AICTE pages
import AICTE from './pages/AICTE/AICTE';
import AICTEApprovals from './pages/AICTE/Approvals';
import AICTECompliance from './pages/AICTE/Compliance';
import AICTEReports from './pages/AICTE/Reports';

// IQAC sub-pages
import IQACWorkshop from './pages/IQAC/Workshop';
import IQACNAAC from './pages/IQAC/NAAC';
import IQACFeedback from './pages/IQAC/Feedback';
import IQACResearch from './pages/IQAC/Research';
import IQACResearchGrants from './pages/IQAC/ResearchGrants';
import IQACResearchPublications from './pages/IQAC/ResearchPublications';
import PublicationInBooksOtherJournals from './pages/IQAC/PublicationInBooksOtherJournals';
import IQACResearchGuidesPhdScholars from './pages/IQAC/ResearchGuidesPhdScholars';
import IQACResearchDevelopmentCell from './pages/IQAC/ResearchDevelopmentCell';
import IQACExtensionActivities from './pages/IQAC/ExtensionActivities';
import IQACCollaboration from './pages/IQAC/Collaboration';
import IQACStudentProgressionForm from './pages/IQAC/StudentProgressionForm';
import IQACStudentSatisfactionSurvey from './pages/IQAC/StudentSatisfactionSurvey';
import IQACProjectInternshipFieldwork from './pages/IQAC/ProjectInternshipFieldwork';
import IQACBestPractices2023 from './pages/IQAC/BestPractices2023';
import IQACBestPracticesPhotoGallery from './pages/IQAC/BestPracticesPhotoGallery';
import CompositionOfIQAC from './pages/IQAC/CompositionOfIQAC';
import IQACBestPractices from './pages/IQAC/BestPractices';
import Criteria from './pages/IQAC/Criteria';
import ObjectivesOfIQAC from './pages/IQAC/ObjectivesOfIQAC';
import MinutesOfIQAC from './pages/IQAC/MinutesOfIQAC';
import NAACPeerTeamVisit from './pages/IQAC/NAACPeerTeamVisit';

// NAAC sub-pages
import NAACCertificate from './pages/IQAC/NAACCertificate';
import NAACCertificates from './pages/IQAC/NAACCertificates';
import SelfStudyReport from './pages/IQAC/SelfStudyReport';
import PeerTeamVisitPhotos from './pages/IQAC/PeerTeamVisitPhotos';
import VideoRecordingNAACPeerTeamVisit from './pages/IQAC/VideoRecordingNAACPeerTeamVisit';
import RevisitNAACPeerTeam from './pages/IQAC/RevisitNAACPeerTeam';
import AQAR from './pages/IQAC/AQAR';
import AcademicCalendar from './pages/IQAC/AcademicCalendar';

// IQAC Feedback Forms
import StudentFeedbackForm from './pages/IQAC/StudentFeedbackForm';
import ParentsFeedbackForm from './pages/IQAC/ParentsFeedbackForm';
import TeachersFeedbackForm from './pages/IQAC/TeachersFeedbackForm';
import AlumniFeedbackForm from './pages/IQAC/AlumniFeedbackForm';
import IndustryFeedbackForm from './pages/IQAC/IndustryFeedbackForm';

// NEP 2020 pages
import ProgramOutcome from './pages/nep2020/ProgramOutcome';
import Humanities from './pages/nep2020/Humanities';
import SocialScience from './pages/nep2020/SocialScience';
import Science from './pages/nep2020/Science';
import FineArts from './pages/nep2020/FineArts';
import VocationalCommerce from './pages/nep2020/VocationalCommerce';
import VocationalComputerApplication from './pages/nep2020/VocationalComputerApplication';
import AcademicInfrastructure from './pages/nep2020/AcademicInfrastructure';
import CourseMaterial from './pages/nep2020/CourseMaterial';
import Library from './pages/nep2020/Library';
import Publications from './pages/nep2020/Publications';
import TimeTable from './pages/nep2020/TimeTable';
import Syllabus from './pages/nep2020/Syllabus';
import SyllabusNEP from './pages/nep2020/SyllabusNEP';

// About pages
import BriefProfile from './pages/about/BriefProfile';
import PrincipalProfile from './pages/about/PrincipalProfile';
import PreviousPrincipals from './pages/about/PreviousPrincipals';
import CollegeEmblem from './pages/about/CollegeEmblem';
import StudentsRollOfHonor from './pages/about/StudentsRollOfHonor';
import CodeOfEthics from './pages/about/CodeOfEthics';
import CodeOfConduct from './pages/about/CodeOfConduct';
import MELC from './pages/about/MELC';
import InstitutionsPride from './pages/about/InstitutionsPride';
import VisionMission from './pages/about/VisionMission';
import BestPractices from './pages/about/BestPractices';
import FeedbackForms from './pages/about/FeedbackForms';
import EnvironmentalPolicy from './pages/about/EnvironmentalPolicy';
import MOU from './pages/about/MOU';
import FuturePlans from './pages/about/FuturePlans';
import Milestones from './pages/about/Milestones';
import VisitorsNote from './pages/about/VisitorsNote';
import ManagementAdministration from './pages/about/ManagementAdministration';
import MIS from './pages/about/MIS';
import InstituteDistinctiveness from './pages/about/InstituteDistinctiveness';
import InfrastructureMaintenance from './pages/about/InfrastructureMaintenance';

// Administration pages
import Committees from './pages/administration/Committees';
import IncubationCentre from './pages/administration/IncubationCentre';
import OrganogramOfInstitution from './pages/administration/OrganogramOfInstitution';
import Societies from './pages/administration/Societies';
import StaffCouncil from './pages/administration/StaffCouncil';
import CentresList202021 from './pages/administration/CentresList202021';
import StaffProfile from './pages/administration/StaffProfile';
import TeachingStaffSanctionedPost from './pages/administration/TeachingStaffSanctionedPost';
import StudentCabinet from './pages/administration/StudentCabinet';
import Cells20232024 from './pages/administration/Cells20232024';
import Cells20242025 from './pages/administration/Cells20242025';
import Cells20252026 from './pages/administration/Cells20252026';

// Admissions pages
import Courses from './pages/admissions/Courses';
import GeneralInformation from './pages/admissions/GeneralInformation';
import IntakeCapacity from './pages/admissions/IntakeCapacity';
import Eligibility from './pages/admissions/Eligibility';
import FeeStructure from './pages/admissions/FeeStructure';
import OrdinanceRegulations from './pages/admissions/OrdinenceRegulations';
import UGAdmission from './pages/admissions/UGAdmission';
import PGAdmission from './pages/admissions/PGAdmission';
import ComputerApplicationCourse from './pages/admissions/ComputerApplicationCourse';
import VocationalAdmission from './pages/admissions/VocationalAdmission';
import CommerceAdmission from './pages/admissions/CommerceAdmission';
import BBAAdmission from './pages/admissions/BBAAdmission';
import AdmittedStudentsYearWise from './pages/admissions/AdmittedStudentsYearWise';
import ERPAdminPanel from './pages/erp/ERPAdminPanel';
import ERPApplicationForm from './pages/erp/ERPApplicationForm';
import ERPPortal from './pages/erp/ERPPortal';
import ERPStudentAuth from './pages/erp/ERPStudentAuth';
import ERPStudentDashboard from './pages/erp/ERPStudentDashboard';

// Admin page
import Admin from './pages/Admin';
import Alumni from './pages/Alumni';
import Notifications from './pages/Notifications';
import Notices from './pages/Notices';

import { Toaster } from './components/ui/toaster';
import { getStoredLanguagePreference, persistLanguagePreference } from './lib/languagePreference';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { i18n } = useTranslation();
  const [showLanguageSelectionModal, setShowLanguageSelectionModal] = useState(false);

  useEffect(() => {
    const currentLang = (i18n.resolvedLanguage || i18n.language || 'en').toLowerCase();
    document.documentElement.lang = currentLang.startsWith('hi') ? 'hi' : 'en';
  }, [i18n.language, i18n.resolvedLanguage]);

  useEffect(() => {
    if (!i18n.isInitialized) return;

    const storedLanguage = getStoredLanguagePreference();
    if (storedLanguage) {
      persistLanguagePreference(storedLanguage);
      if (!i18n.language?.toLowerCase().startsWith(storedLanguage)) {
        i18n.changeLanguage(storedLanguage);
      }
      setShowLanguageSelectionModal(false);
      return;
    }

    setShowLanguageSelectionModal(true);
  }, [i18n, i18n.isInitialized]);

  const handleInitialLanguageSelection = useCallback(language => {
    const normalizedLanguage = persistLanguagePreference(language) || 'en';
    i18n.changeLanguage(normalizedLanguage);
    setShowLanguageSelectionModal(false);
  }, [i18n]);

  if (!i18n.isInitialized) {
    return <div>Loading translations...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HelmetProvider>
        <BilingualProvider>
          <div>
            <LanguageSelectionModal isOpen={showLanguageSelectionModal} onSelect={handleInitialLanguageSelection} />
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <ScrollToTop />
              <Navbar />
              <SlidingNotice />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/annual-reports" element={<AnnualReports />} />
              <Route path="/audit-report" element={<AuditReport />} />

              {/* Dedicated pages */}
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/ncc" element={<NCC />} />
              <Route path="/nss" element={<NSS />} />
              <Route path="/nep-2020" element={<NEP2020 />} />
              <Route path="/alumni" element={<Alumni />} />

              {/* Admin page */}
              <Route path="/admin" element={<Admin />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/notices" element={<Notices />} />

              {/* NIRF pages */}
              <Route path="/nirf" element={<NIRF />} />
              <Route path="/nirf/data" element={<NIRFData />} />
              <Route path="/nirf/reports" element={<NIRFReports />} />
              <Route path="/nirf/documents" element={<NIRFDocuments />} />

              {/* AICTE pages */}
              <Route path="/aicte" element={<AICTE />} />
              <Route path="/aicte/approvals" element={<AICTEApprovals />} />
              <Route path="/aicte/compliance" element={<AICTECompliance />} />
              <Route path="/aicte/reports" element={<AICTEReports />} />

              {/* IQAC pages with shared sticky menu */}
              <Route path="/iqac" element={<IQACStickyLayout />}>
                <Route index element={<IQAC />} />
                <Route path="workshop" element={<IQACWorkshop />} />
                <Route path="naac" element={<IQACNAAC />} />
                <Route path="naac-certificate" element={<NAACCertificate />} />
                <Route path="naac-certificates" element={<NAACCertificates />} />
                <Route path="self-study-report" element={<SelfStudyReport />} />
                <Route path="peer-team-visit-photos" element={<PeerTeamVisitPhotos />} />
                <Route path="video-recording-naac-peer-team-visit" element={<VideoRecordingNAACPeerTeamVisit />} />
                <Route path="revisit-naac-peer-team" element={<RevisitNAACPeerTeam />} />
                <Route path="aqar" element={<AQAR />} />
                <Route path="feedback" element={<IQACFeedback />} />
                <Route path="feedback/student" element={<StudentFeedbackForm />} />
                <Route path="feedback/parents" element={<ParentsFeedbackForm />} />
                <Route path="feedback/teachers" element={<TeachersFeedbackForm />} />
                <Route path="feedback/alumni" element={<AlumniFeedbackForm />} />
                <Route path="feedback/industry" element={<IndustryFeedbackForm />} />
                <Route path="research" element={<IQACResearch />} />
                <Route path="research-grants" element={<IQACResearchGrants />} />
                <Route path="research-publications" element={<IQACResearchPublications />} />
                <Route path="research-guides-phd-scholars" element={<IQACResearchGuidesPhdScholars />} />
                <Route path="research-development-cell" element={<IQACResearchDevelopmentCell />} />
                <Route path="publication-in-books-other-journals" element={<PublicationInBooksOtherJournals />} />
                <Route path="extension-activities" element={<IQACExtensionActivities />} />
                <Route path="collaboration" element={<IQACCollaboration />} />
                <Route path="student-progression-form" element={<IQACStudentProgressionForm />} />
                <Route path="student-satisfaction-survey" element={<IQACStudentSatisfactionSurvey />} />
                <Route path="project-internship-fieldwork" element={<IQACProjectInternshipFieldwork />} />
                <Route path="best-practices-2023-24" element={<IQACBestPractices2023 />} />
                <Route path="best-practices-photo-gallery" element={<IQACBestPracticesPhotoGallery />} />
                <Route path="composition-of-iqac" element={<CompositionOfIQAC />} />
                <Route path="academic-calendar" element={<AcademicCalendar />} />
                <Route path="best-practices" element={<IQACBestPractices />} />
                <Route path="criteria" element={<Criteria />} />
                <Route path="infrastructure-maintenance" element={<InfrastructureMaintenance />} />
                <Route path="objectives-of-iqac" element={<ObjectivesOfIQAC />} />
                <Route path="minutes-of-iqac" element={<MinutesOfIQAC />} />
                <Route path="naac-peer-team-visit" element={<NAACPeerTeamVisit />} />
              </Route>

              {/* NEP 2020 pages */}
              <Route path="/nep2020/program-outcome" element={<ProgramOutcome />} />
              <Route path="/nep2020/humanities" element={<Humanities />} />
              <Route path="/nep2020/social-science" element={<SocialScience />} />
              <Route path="/nep2020/science" element={<Science />} />
              <Route path="/nep2020/fine-arts" element={<FineArts />} />
              <Route path="/nep2020/vocational-commerce" element={<VocationalCommerce />} />
              <Route path="/nep2020/vocational-computer-application" element={<VocationalComputerApplication />} />
              <Route path="/nep2020/academic-infrastructure" element={<AcademicInfrastructure />} />
              <Route path="/nep2020/course-material" element={<CourseMaterial />} />
              <Route path="/nep2020/library" element={<Library />} />
              <Route path="/nep2020/publications" element={<Publications />} />
              <Route path="/nep2020/time-table" element={<TimeTable />} />
              <Route path="/nep2020/syllabus" element={<Syllabus />} />
              <Route path="/nep2020/syllabus-nep" element={<SyllabusNEP />} />

              {/* Generic pages for committee/info pages */}
              <Route path="/anti-ragging" element={<AntiRagging />} />
              <Route path="/sexual-harassment" element={<SexualHarassment />} />
              <Route path="/grievance" element={<GrievanceCell />} />
              <Route path="/tenders" element={<Tender />} />

              {/* Administration pages */}
              <Route path="/administration/committees" element={<Committees />} />
              <Route path="/administration/incubation-centre" element={<IncubationCentre />} />
              <Route path="/administration/organogram-of-institution" element={<OrganogramOfInstitution />} />
              <Route path="/administration/societies" element={<Societies />} />
              <Route path="/administration/staff-council" element={<StaffCouncil />} />
              <Route path="/administration/centres-list-2020-21" element={<CentresList202021 />} />
              <Route path="/administration/staff-profile" element={<StaffProfile />} />
              <Route path="/administration/teaching-staff-sanctioned-post" element={<TeachingStaffSanctionedPost />} />
              <Route path="/administration/student-cabinet" element={<StudentCabinet />} />
              <Route path="/administration/cells/2023-2024" element={<Cells20232024 />} />
              <Route path="/administration/cells/2024-2025" element={<Cells20242025 />} />
              <Route path="/administration/cells/2025-2026" element={<Cells20252026 />} />

              {/* Admissions pages */}
              <Route path="/admissions/courses" element={<Courses />} />
              <Route path="/admissions/general-information" element={<GeneralInformation />} />
              <Route path="/admissions/intake-capacity" element={<IntakeCapacity />} />
              <Route path="/admissions/eligibility" element={<Eligibility />} />
              <Route path="/admissions/fee-structure" element={<FeeStructure />} />
              <Route path="/admissions/ordinance-regulations" element={<OrdinanceRegulations />} />
              <Route path="/admissions/ordinence-regulations" element={<Navigate to="/admissions/ordinance-regulations" replace />} />
              <Route path="/admissions/ug-admission" element={<UGAdmission />} />
              <Route path="/admissions/pg-admission" element={<PGAdmission />} />
              <Route path="/admissions/computer-application-course" element={<ComputerApplicationCourse />} />
              <Route path="/admissions/vocational-admission" element={<VocationalAdmission />} />
              <Route path="/admissions/commerce-admission" element={<CommerceAdmission />} />
              <Route path="/admissions/bba-admission" element={<BBAAdmission />} />
              <Route path="/admissions/admitted-students-year-wise" element={<AdmittedStudentsYearWise />} />
              <Route path="/erp" element={<ERPPortal />} />
              <Route path="/erp/student" element={<ERPStudentAuth />} />
              <Route path="/erp/application" element={<ERPApplicationForm />} />
              <Route path="/erp/dashboard" element={<ERPStudentDashboard />} />
              <Route path="/erp/admin" element={<ERPAdminPanel />} />
              <Route path="/application-form" element={<ERPApplicationForm />} />
              <Route path="/dashboard" element={<ERPStudentDashboard />} />

              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/rti" element={<RTI />} />
              <Route path="/rti-manual" element={<RTIManual />} />
              <Route path="/fee-refund-policy" element={<FeeRefundPolicy />} />
              <Route path="/online-payment-policy" element={<OnlinePaymentPolicy />} />
              <Route path="/transaction-fee-clause" element={<TransactionFeeClause />} />

              {/* About pages */}
              <Route path="/about/brief-profile" element={<BriefProfile />} />
              <Route path="/about/principal" element={<PrincipalProfile />} />
              <Route path="/about/previous-principals" element={<PreviousPrincipals />} />
              <Route path="/about/emblem" element={<CollegeEmblem />} />
              <Route path="/about/roll-of-honor" element={<StudentsRollOfHonor />} />
              <Route path="/about/code-of-ethics" element={<CodeOfEthics />} />
              <Route path="/about/code-of-conduct" element={<CodeOfConduct />} />
              <Route path="/about/melc" element={<MELC />} />
              <Route path="/about/institutions-pride" element={<InstitutionsPride />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/best-practices" element={<BestPractices />} />
              <Route path="/about/feedback-forms" element={<FeedbackForms />} />
              <Route path="/about/environment-policy" element={<EnvironmentalPolicy />} />
              <Route path="/about/mou" element={<MOU />} />
              <Route path="/about/future-plans" element={<FuturePlans />} />
              <Route path="/about/milestones" element={<Milestones />} />
              <Route path="/about/visitors-note" element={<VisitorsNote />} />
              <Route path="/about/management-administration" element={<ManagementAdministration />} />
              <Route path="/about/mis" element={<MIS />} />
              <Route path="/about/infrastructure-maintenance" element={<InfrastructureMaintenance />} />
              <Route path="/about/institute-distinctiveness" element={<InstituteDistinctiveness />} />

              {/* Router fallback for unknown paths */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
            <Toaster />
          </Router>
        </div>
      </BilingualProvider>
    </HelmetProvider>
  </Suspense>
  );
}

export default App;
