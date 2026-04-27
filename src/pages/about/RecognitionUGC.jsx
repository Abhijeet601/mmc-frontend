import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UGC_RECOGNITION_PDF =
  'https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/UGC%202f%2012%20b.pdf';

const RecognitionUGC = () => {
  const { t } = useTranslation();
  const documentTitle = t('recognitionUgc.documentTitle', 'UGC Recognition 2(f) 12(B)');

  return (
    <>
      <Helmet>
        <title>{t('recognitionUgc.title', 'Recognition UGC 2(f) 12(b) - Magadh Mahila College')}</title>
        <meta
          name="description"
          content={t(
            'recognitionUgc.metaDescription',
            'View the official UGC recognition document of Magadh Mahila College.'
          )}
        />
      </Helmet>

      <div className="pt-0">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-primary md:text-5xl">
                      {t('nav.aboutSub.recognitionUgc')}
                    </h1>
                    <p className="text-muted-foreground">
                      {t(
                        'recognitionUgc.subtitle',
                        'Official UGC recognition document under Sections 2(f) and 12(B).'
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={UGC_RECOGNITION_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 font-medium text-primary transition-colors hover:bg-primary/5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t('auto.open_pdf_zqcygz')}
                  </a>
                  <a
                    href={UGC_RECOGNITION_PDF}
                    download
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Download className="h-4 w-4" />
                    {t('auto.download_1ypm7w1')}
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                <object
                  data={UGC_RECOGNITION_PDF}
                  type="application/pdf"
                  aria-label={documentTitle}
                  className="h-[80vh] w-full"
                >
                  <iframe
                    src={UGC_RECOGNITION_PDF}
                    title={documentTitle}
                    className="h-[80vh] w-full border-0"
                  />
                </object>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RecognitionUGC;
