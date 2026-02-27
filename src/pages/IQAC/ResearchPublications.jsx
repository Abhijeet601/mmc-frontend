import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';
const ResearchPublications = () => {
  const {
    t
  } = useTranslation();
  const pdfFiles = [{
    title: i18next.t("auto.research_publications_of_faculties_in_ugc_journals_1e3gnqg"),
    filename: 'mmc_ugc_journals2.pdf',
    path: r2Url('documents/IQAC/Research/Research Publications of faculties in UGC Journals/mmc_ugc_journals2.pdf'),
    description: i18next.t("auto.comprehensive_collection_of_research_publications_by_mmc_1kk9xif")
  }, {
    title: i18next.t("auto.publication_in_books_other_journals_1fatbo"),
    filename: 'mmc_publication.pdf',
    path: r2Url('documents/IQAC/Research/Publication in Books & Other Journals/mmc_publication.pdf'),
    description: i18next.t("auto.publications_in_books_and_other_journals_by_1rqh2q4")
  }];
  return <>
      <Helmet>
        <title>{i18next.t("auto.research_publications_iqac_magadh_mahila_college_1ut37th")}</title>
        <meta name="description" content="Browse research publications by faculty and students at Magadh Mahila College. Access journal articles, conference papers, and academic works." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">{i18next.t("auto.research_publications_ogfj1v")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.explore_our_comprehensive_collection_of_research_publications_1bg9u63")}
              `}</p>
            </motion.div>

            {/* PDF Files */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-6">
              {pdfFiles.map((pdf, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="p-8 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {pdf.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {pdf.description}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <strong>{i18next.t("auto.file_3f1oah")}</strong> {pdf.filename}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 lg:ml-6">
                      <a href={pdf.path} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        <ExternalLink className="w-4 h-4" />{`
                        ${i18next.t("auto.view_pdf_6av1iy")}
                      `}</a>
                      <a href={pdf.path} download className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Download className="w-4 h-4" />{`
                        ${i18next.t("auto.download_1ypm7w1")}
                      `}</a>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>

            {/* Contact */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center">
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">{i18next.t("auto.research_publications_support_19exrss")}</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">{`
                ${i18next.t("auto.for_publication_submissions_research_collaboration_or_access_9vuhkl")}
              `}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">{i18next.t("auto.publications_coordinator_18i9tc")}</div>
                  <div className="text-white/80">{i18next.t("auto.dr_nagendra_prasad_verma_nwre9")}</div>
                  <div className="text-white/80">{i18next.t("auto.publications_magadhmahilacollege_org_zg9ovn")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default ResearchPublications;
