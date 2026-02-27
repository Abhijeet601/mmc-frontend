import i18next from "i18next";
import React from 'react';
import { useTranslation } from 'react-i18next';
const PreviousPrincipals = () => {
  const {
    t
  } = useTranslation();
  return <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{`
            ${i18next.t("auto.previous_principals_x42efp")}
          `}</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">{i18next.t("auto.sl_no_1jx822d")}</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">{i18next.t("auto.name_yjpg1u")}</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">{i18next.t("auto.duration_u8n97f")}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">1</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.smt_ramola_nandi_m_a_patna_m_39cd5s")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.july_1946_to_dec_1972_jrbufz")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">2</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.smt_asha_lata_bose_m_a_1vsd54p")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.1_1_1973_to_31_12_1977_1gl816j")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">3</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_quraisha_hussain_m_a_ph_d_jiy9bm")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.1_1_1978_to_dec_31_12_nouffi")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">4</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_mala_ghosh_m_a_ph_d_w8qdh3")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.1_1_1985_to_10_10_1995_1iiqjmn")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">5</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_sarojini_srivastava_m_sc_ph_d_oow0yh")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.1_2_1991_to_14_08_1995_11egcd0")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">6</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.sanchalan_samiti_p_u_fa1zss")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.5_08_1995_to_10_oct_10_1etqzmi")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">7</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_archana_sinha_m_a_ph_d_1uiwqfl")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.11_10_1995_to_20_07_1998_j6k9h3")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">8</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_phullara_sinha_m_a_ph_d_121b7n3")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.21_07_1998_to_30_08_1999_k1lv4")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">9</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_niroj_sinha_m_a_ph_d_1kf42qo")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.01_09_1999_to_30_11_2000_4t2an")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">10</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_savitri_sharma_m_a_ph_d_oefced")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.01_12_2000_to_25_04_2001_npb5ha")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">11</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_manju_rani_sinha_m_a_ph_1wx9xvd")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.26_04_2001_to_30_05_2003_4sscvu")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">12</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_savitri_sharma_m_a_ph_d_nvtrez")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.01_06_2003_to_29_03_2004_1e0e3iu")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">13</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_chitralekha_verma_m_sc_ph_d_x7wwjj")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.01_03_2004_to_30_06_2004_18yvs3d")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">14</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_pushpa_sinha_m_a_ph_d_rv959t")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.01_07_2004_to_31_08_2004_5z92uq")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">15</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_kiran_aryani_mitra_m_sc_ph_ipjuhu")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.01_09_2004_to_30_06_05_1dv6nlc")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">16</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.prof_dr_sukhada_kumari_m_a_ph_7zuxz4")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.01_07_2005_to_02_06_09_1icz2vm")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">17</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.prof_dr_dolly_sinha_m_sc_ph_1jt8k2r")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.03_06_2009_to_07_05_15_1nbb306")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">18</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.prof_umesh_mishra_na2q16")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.07_05_2015_to_11_05_15_26rl7f")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">19</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.prof_dr_asha_singh_xk41i0")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.12_05_2015_to_31_10_2016_f5kn6g")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">20</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_jaishree_mishra_11mrbu")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.1_11_2016_to_31_12_2016_75zca6")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">21</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.prof_dharamshila_prasad_8izbg9")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.01_01_2017_to_31_10_2017_cmpfi5")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">22</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.dr_padmalata_thakur_xbeswd")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.01_11_2017_to_30_11_2017_1c19658")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">23</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.prof_dr_shashi_sharma_1q5woj9")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.01_12_2017_to_30_11_2021_1v9f716")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">24</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.prof_dr_namita_kumari_141e1im")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.01_12_2021_to_9_jul_2025_ajos9e")}</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">25</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.prof_dr_nagendra_prasad_verma_xa6ks5")}</td><td className="border border-gray-300 px-4 py-2">{i18next.t("auto.10_jul_2025_till_date_15ybyaj")}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
};
export default PreviousPrincipals;
