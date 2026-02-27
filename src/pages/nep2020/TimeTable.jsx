import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { r2Url } from '@/lib/r2Assets';
const TimeTable = () => {
  return <>
      <Helmet>
        <title>{i18next.t("auto.time_table_nep_2020_magadh_mahila_college_1kftpfc")}</title>
        <meta name="description" content="Academic time table under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">{`
              ${i18next.t("auto.time_table_leomxa")}
            `}</h1>

            <div className="prose max-w-none">
              <div className="space-y-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{i18next.t("auto.master_time_table_ba_2026_107x8s7")}</h3>
                  <iframe src={r2Url('timetables/Master Time Table BA 2026 (1).pdf')} width="100%" height="600px" title={i18next.t("auto.master_time_table_ba_2026_107x8s7")} className="border border-gray-300 rounded"></iframe>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{i18next.t("auto.master_time_table_bsc_2026_1yk4k1y")}</h3>
                  <iframe src={r2Url('timetables/Master Time Table BSc 2026 (1).pdf')} width="100%" height="600px" title={i18next.t("auto.master_time_table_bsc_2026_1yk4k1y")} className="border border-gray-300 rounded"></iframe>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{i18next.t("auto.bca_time_table_2026_1ienpns")}</h3>
                  <iframe src={r2Url('timetables/BCA Time Table 2026 (1).pdf')} width="100%" height="600px" title={i18next.t("auto.bca_time_table_2026_1ienpns")} className="border border-gray-300 rounded"></iframe>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>{i18next.t("auto.note_3khlrj")}</strong>{` ${i18next.t("auto.current_semester_time_tables_are_available_in_108w54e")}
                `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default TimeTable;
