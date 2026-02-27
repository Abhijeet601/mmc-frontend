import i18next from "i18next";
import React, { useState } from 'react';
const StaffCouncil = () => {
  const [activeTab, setActiveTab] = useState('regular');
  const regularTeachers = [{
    sl: 1,
    department: 'Principal',
    name: i18next.t("auto.prof_dr_nagendra_prasad_verma_gf7mxh")
  }, {
    sl: 2,
    department: 'Hindi',
    name: i18next.t("auto.dr_shipra_prabha_1eqwrhg")
  }, {
    sl: 3,
    department: 'Hindi',
    name: i18next.t("auto.dr_asha_kumari_d2ej8v")
  }, {
    sl: 4,
    department: 'Hindi',
    name: i18next.t("auto.dr_jyoti_dubey_1tqj3df")
  }, {
    sl: 5,
    department: 'Hindi',
    name: i18next.t("auto.dr_preeti_kumari_urbrsb")
  }, {
    sl: 6,
    department: 'English',
    name: i18next.t("auto.dr_archana_jaiswal_16hzx8g")
  }, {
    sl: 7,
    department: 'English',
    name: i18next.t("auto.dr_rajeev_kumar_singh_126jkh5")
  }, {
    sl: 8,
    department: 'Urdu',
    name: i18next.t("auto.dr_md_sohail_anwer_1or3ao5")
  }, {
    sl: 9,
    department: 'Urdu',
    name: i18next.t("auto.dr_md_rizwan_b00fkz")
  }, {
    sl: 10,
    department: 'Persian',
    name: i18next.t("auto.dr_shahida_khanam_133t7gj")
  }, {
    sl: 11,
    department: 'Philosophy',
    name: i18next.t("auto.ms_ranjana_yadav_1ced9gn")
  }, {
    sl: 12,
    department: 'Philosophy',
    name: i18next.t("auto.dr_suchita_arpan_1hc1sv4")
  }, {
    sl: 13,
    department: 'Philosophy',
    name: i18next.t("auto.dr_sanjay_kumar_priyadarshi_14x1tlx")
  }, {
    sl: 14,
    department: 'Pol. Science',
    name: i18next.t("auto.prof_dr_pushplata_kumari_p4ng6e")
  }, {
    sl: 15,
    department: 'Pol. Science',
    name: i18next.t("auto.dr_rishu_raj_xiys6p")
  }, {
    sl: 16,
    department: 'Sociology',
    name: i18next.t("auto.dr_binay_kumar_bimal_1uzsmiz")
  }, {
    sl: 17,
    department: 'Sociology',
    name: i18next.t("auto.dr_archna_kumari_slgkoz")
  }, {
    sl: 18,
    department: 'Sociology',
    name: i18next.t("auto.dr_reena_kumari_1owdvvt")
  }, {
    sl: 19,
    department: 'Sociology',
    name: i18next.t("auto.dr_anju_kumari_1be98ec")
  }, {
    sl: 20,
    department: 'Sociology',
    name: i18next.t("auto.dr_veena_kumari_1itoht9")
  }, {
    sl: 21,
    department: 'Sociology',
    name: i18next.t("auto.dr_rajendra_kumar_3inpbs")
  }, {
    sl: 22,
    department: 'Sociology',
    name: i18next.t("auto.dr_minu_minj_1ogfx1e")
  }, {
    sl: 23,
    department: 'Economics',
    name: i18next.t("auto.dr_sweta_sharan_1ctiw6m")
  }, {
    sl: 24,
    department: 'Economics',
    name: i18next.t("auto.dr_priyardarshni_1iox0fr")
  }, {
    sl: 25,
    department: 'Economics',
    name: i18next.t("auto.dr_chandan_chandra_chunna_1ul83jy")
  }, {
    sl: 26,
    department: 'Economics',
    name: i18next.t("auto.dr_angur_kumari_1ep65x7")
  }, {
    sl: 27,
    department: 'Economics',
    name: i18next.t("auto.dr_ashish_kumar_1n4wtdh")
  }, {
    sl: 28,
    department: 'Economics',
    name: i18next.t("auto.dr_mita_malkhandi_ye70tp")
  }, {
    sl: 29,
    department: 'Psychology',
    name: i18next.t("auto.ms_nidhi_singh_njcovg")
  }, {
    sl: 30,
    department: 'Psychology',
    name: i18next.t("auto.dr_namrata_y1tq7t")
  }, {
    sl: 31,
    department: 'Psychology',
    name: i18next.t("auto.dr_sonali_kumari_10hwkaq")
  }, {
    sl: 32,
    department: 'Psychology',
    name: i18next.t("auto.dr_priyamvada_90l9ht")
  }, {
    sl: 33,
    department: 'Psychology',
    name: i18next.t("auto.dr_kavita_chowdhary_1h4cd60")
  }, {
    sl: 34,
    department: 'Psychology',
    name: i18next.t("auto.dr_archana_kumari_1u97n4y")
  }, {
    sl: 35,
    department: 'Psychology',
    name: i18next.t("auto.dr_ranjana_kumari_1kfe0z1")
  }, {
    sl: 36,
    department: 'Psychology',
    name: i18next.t("auto.dr_archana_bharti_4a5633")
  }, {
    sl: 40,
    department: 'Home-Sc.',
    name: i18next.t("auto.dr_kavita_kumari_1a4cr6c")
  }, {
    sl: 41,
    department: 'Home-Sc.',
    name: i18next.t("auto.dr_seema_prakash_uch4ts")
  }, {
    sl: 42,
    department: 'Home-Sc.',
    name: i18next.t("auto.dr_shruti_kumari_uak20l")
  }, {
    sl: 43,
    department: 'Music',
    name: i18next.t("auto.prof_dr_neera_choudhury_k149vr")
  }, {
    sl: 44,
    department: 'Music',
    name: i18next.t("auto.dr_arvind_kumar_yeh61n")
  }, {
    sl: 45,
    department: 'Mathematics',
    name: i18next.t("auto.dr_poonam_kumari_3gi7s6")
  }, {
    sl: 46,
    department: 'Mathematics',
    name: i18next.t("auto.dr_binay_kumar_c00ops")
  }, {
    sl: 47,
    department: 'Physics',
    name: i18next.t("auto.dr_manish_kumar_verma_jzs2rk")
  }, {
    sl: 48,
    department: 'Physics',
    name: i18next.t("auto.dr_priti_mishra_f3ipev")
  }, {
    sl: 49,
    department: 'Physics',
    name: i18next.t("auto.dr_sonu_rani_kgpk1a")
  }, {
    sl: 50,
    department: 'Physics',
    name: i18next.t("auto.dr_pankaj_kumar_baitha_1w2sks5")
  }, {
    sl: 51,
    department: 'Chemistry',
    name: i18next.t("auto.dr_usha_kumari_ipthiz")
  }, {
    sl: 52,
    department: 'Chemistry',
    name: i18next.t("auto.dr_shyam_deo_yadav_z16psm")
  }, {
    sl: 53,
    department: 'Chemistry',
    name: i18next.t("auto.dr_madhu_kumari_gupta_vqlz92")
  }, {
    sl: 54,
    department: 'Chemistry',
    name: i18next.t("auto.dr_amrita_prasad_1m3y5je")
  }, {
    sl: 55,
    department: 'Chemistry',
    name: i18next.t("auto.dr_reena_kumari_1owdvvt")
  }, {
    sl: 56,
    department: 'Chemistry',
    name: i18next.t("auto.dr_deepak_kumar_aiuezn")
  }, {
    sl: 57,
    department: 'Chemistry',
    name: i18next.t("auto.dr_archana_sinha_1mfbu1i")
  }, {
    sl: 58,
    department: 'Botany',
    name: i18next.t("auto.prof_dr_namita_kumari_141e1im")
  }, {
    sl: 59,
    department: 'Botany',
    name: i18next.t("auto.dr_pushpanjali_khare_1x6i46f")
  }, {
    sl: 60,
    department: 'Botany',
    name: i18next.t("auto.dr_surendra_kumar_prasad_17ku7a8")
  }, {
    sl: 61,
    department: 'Zoology',
    name: i18next.t("auto.dr_sujata_kumari_cy6mto")
  }];
  const guestFaculty = [{
    sl: 1,
    department: 'History',
    name: i18next.t("auto.dr_rajesh_kumar_19g6hay")
  }, {
    sl: 2,
    department: 'History',
    name: i18next.t("auto.dr_deepika_singh_1hzwx9t")
  }, {
    sl: 3,
    department: 'History',
    name: i18next.t("auto.dr_sweta_kumari_xtec74")
  }, {
    sl: 4,
    department: 'Zoology',
    name: i18next.t("auto.dr_maya_rani_1xnfb3x")
  }, {
    sl: 5,
    department: 'Zoology',
    name: i18next.t("auto.dr_arshi_rana_1g5f7pc")
  }, {
    sl: 6,
    department: 'English',
    name: i18next.t("auto.dr_anamika_1plfpel")
  }, {
    sl: 7,
    department: 'English',
    name: i18next.t("auto.dr_anchit_pandey_115dl6r")
  }, {
    sl: 8,
    department: 'Chemistry',
    name: i18next.t("auto.dr_priya_p6ftta")
  }, {
    sl: 9,
    department: 'Chemistry',
    name: i18next.t("auto.dr_sadhana_kumari_o6jb8")
  }, {
    sl: 10,
    department: 'Sanskrit',
    name: i18next.t("auto.dr_bharti_kumari_34sh8w")
  }, {
    sl: 11,
    department: 'Political Sc.',
    name: i18next.t("auto.dr_varsha_shekhar_v3xxm4")
  }, {
    sl: 12,
    department: 'Sociology',
    name: i18next.t("auto.dr_madhavi_qut5pf")
  }, {
    sl: 13,
    department: 'Physics',
    name: i18next.t("auto.dr_kamad_nath_shandilya_1paxbi9")
  }, {
    sl: 14,
    department: 'Economics',
    name: i18next.t("auto.dr_deepali_kumari_13olsjo")
  }];
  const regularEmployees = [{
    sl: 1,
    department: 'Administration',
    name: i18next.t("auto.mr_ravi_prakash_fokoei"),
    designation: 'Head Assistant'
  }, {
    sl: 2,
    department: 'Botany',
    name: i18next.t("auto.mr_arun_kumar_85xd98"),
    designation: 'Store Keeper / Accountant-in-charge'
  }, {
    sl: 3,
    department: 'Office (Accounts)',
    name: i18next.t("auto.mr_jitendra_kumar_1837rfj"),
    designation: 'LDC'
  }, {
    sl: 4,
    department: 'Office',
    name: i18next.t("auto.mr_abhimanyu_kumar_zng0k8"),
    designation: 'LDC'
  }, {
    sl: 5,
    department: 'Office',
    name: i18next.t("auto.mrs_gitanjali_palei_16kafu5"),
    designation: 'LDC'
  }, {
    sl: 6,
    department: 'Office',
    name: i18next.t("auto.mrs_ritu_rani_f8y0fd"),
    designation: 'LDC'
  }, {
    sl: 7,
    department: 'Botany',
    name: i18next.t("auto.mrs_radha_devi_o69e4n"),
    designation: 'Lab. Bearer'
  }, {
    sl: 8,
    department: 'Principal Chamber',
    name: i18next.t("auto.mrs_lalita_devi_1bweghw"),
    designation: 'Peon'
  }, {
    sl: 9,
    department: 'Zoology',
    name: i18next.t("auto.mr_ahraruddin_ansari_1bytwo8"),
    designation: 'Lab. Bearer'
  }, {
    sl: 10,
    department: 'Office',
    name: i18next.t("auto.mr_gautam_raj_1xemupy"),
    designation: 'Peon'
  }, {
    sl: 11,
    department: 'Vaidehi Hostel',
    name: i18next.t("auto.mr_ashok_kumar_1bvny5m"),
    designation: 'Darwan'
  }, {
    sl: 12,
    department: 'General',
    name: i18next.t("auto.mr_kishore_kumar_ojik45"),
    designation: 'Darwan'
  }, {
    sl: 13,
    department: 'Office',
    name: i18next.t("auto.mr_ram_pravesh_prasad_1s39238"),
    designation: 'Peon'
  }, {
    sl: 14,
    department: 'Psychology',
    name: i18next.t("auto.mr_neeraj_kumar_evhymb"),
    designation: 'Lab. Bearer'
  }, {
    sl: 15,
    department: 'Physics',
    name: i18next.t("auto.mr_dablu_kumar_1dxv7ii"),
    designation: 'Lab. Bearer'
  }, {
    sl: 16,
    department: 'Principal Chamber',
    name: i18next.t("auto.mr_suraj_kumar_nmqdd7"),
    designation: 'Peon'
  }, {
    sl: 17,
    department: 'Chemistry',
    name: i18next.t("auto.mrs_sahuda_iffat_1q5ur75"),
    designation: 'Peon'
  }, {
    sl: 18,
    department: 'Psychology',
    name: i18next.t("auto.mrs_meena_devi_1is3zh7"),
    designation: 'Peon'
  }];
  const TableComponent = ({
    data,
    columns
  }) => <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse border border-gray-400">
        <thead className="bg-blue-100">
          <tr>
            {columns.map((col, idx) => <th key={idx} className="border border-gray-400 px-4 py-2 text-left text-sm font-bold">
                {col}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {columns.map((col, colIdx) => {
            const key = col.toLowerCase().replace(/\s+/g, '');
            const value = key === 'sl' ? idx + 1 : row[key] || '';
            return <td key={colIdx} className="border border-gray-400 px-4 py-2 text-sm">
                    {value}
                  </td>;
          })}
            </tr>)}
        </tbody>
      </table>
    </div>;
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{i18next.t("auto.teachers_and_employee_list_2025_2026_shf9xb")}</h1>
      <p className="text-gray-600 mb-8">{i18next.t("auto.magadh_mahila_college_patna_complete_teachers_and_fyn20l")}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => setActiveTab('regular')} className={`px-6 py-2 rounded font-bold transition ${activeTab === 'regular' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>{`
          ${i18next.t("auto.regular_teachers_1nhojbc")}`}{regularTeachers.length})
        </button>
        <button onClick={() => setActiveTab('guest')} className={`px-6 py-2 rounded font-bold transition ${activeTab === 'guest' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>{`
          ${i18next.t("auto.guest_faculty_lyxdql")}`}{guestFaculty.length})
        </button>
        <button onClick={() => setActiveTab('employees')} className={`px-6 py-2 rounded font-bold transition ${activeTab === 'employees' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>{`
          ${i18next.t("auto.non_teaching_staff_18ve05u")}`}{regularEmployees.length})
        </button>
      </div>

      {activeTab === 'regular' && <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">{i18next.t("auto.regular_teaching_faculty_3p3lro")}</h2>
          <TableComponent data={regularTeachers} columns={['Sl', 'Department', 'Name']} />
        </div>}

      {activeTab === 'guest' && <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">{i18next.t("auto.guest_faculty_pnjh6t")}</h2>
          <TableComponent data={guestFaculty} columns={['Sl', 'Department', 'Name']} />
        </div>}

      {activeTab === 'employees' && <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">{i18next.t("auto.non_teaching_staff_3rd_4th_grade_he149x")}</h2>
          <TableComponent data={regularEmployees} columns={['Sl', 'Department', 'Name', 'Designation']} />
        </div>}
    </div>;
};
export default StaffCouncil;
