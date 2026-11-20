/**
 * Shared faculty data migrated from the original Staff Council and department arrays.
 * Latest changes are user-supplied instructions, not an independently verified roster.
 * Stable IDs retain the original source identity when a supported name/rank changes.
 * Academic rank, HOD/coordinator duties, and employment category are separate fields.
 * Do not infer identity from a spelling alone or rewrite historical documents.
 */

export const facultyDepartmentNames = {
  "principal": "Principal",
  "hindi": "Hindi",
  "english": "English",
  "urdu": "Urdu",
  "persian": "Persian",
  "philosophy": "Philosophy",
  "political-science": "Political Science",
  "sociology": "Sociology",
  "economics": "Economics",
  "psychology": "Psychology",
  "home-science": "Home Science",
  "music": "Music",
  "mathematics": "Mathematics",
  "physics": "Physics",
  "chemistry": "Chemistry",
  "botany": "Botany",
  "zoology": "Zoology",
  "history": "History",
  "sanskrit": "Sanskrit",
  "statistics": "Statistics",
  "bba": "BBA",
  "bca": "BCA",
  "bsw": "BSW",
  "bcom": "B.Com"
};

export const faculty = [
  {"id":"principal-nagendra-prasad-verma","name":"Prof. (Dr.) Nagendra Prasad Verma","nameKey":"auto.prof_dr_nagendra_prasad_verma_gf7mxh","legacyNameKey":"auto.prof_dr_nagendra_prasad_verma_gf7mxh","department":"Principal","departmentId":"principal","designation":"Principal","isHOD":false,"employmentCategory":"regular","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":0,"legacyCouncilSerial":1,"source":"existing-website","assignments":[{"departmentId":"principal","isHOD":false,"responsibility":null}]},
  {"id":"hindi-shipra-prabha","name":"Dr. Shipra Prabha","nameKey":"auto.dr_shipra_prabha_1eqwrhg","legacyNameKey":"auto.dr_shipra_prabha_1eqwrhg","department":"Hindi","departmentId":"hindi","designation":"","isHOD":false,"employmentCategory":"regular","photo":"Dr. Shipra Prabha, HOD, Hindi.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":1,"legacyCouncilSerial":2,"source":"existing-website","assignments":[{"departmentId":"hindi","isHOD":false,"responsibility":null,"photo":"Dr. Shipra Prabha, HOD, Hindi.jpeg","legacyDesignation":"HOD, Hindi"},{"departmentId":"sanskrit","isHOD":true,"responsibility":null,"photo":"https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/faculty/Dr.%20Shipra%20Prabha%2C%20HOD%2C%20Hindi.jpeg","legacyDesignation":"HOD, Sanskrit"}],"responsibility":null},
  {"id":"hindi-asha-kumari","name":"Dr. Asha Kumari","nameKey":"auto.dr_asha_kumari_d2ej8v","legacyNameKey":"auto.dr_asha_kumari_d2ej8v","department":"Hindi","departmentId":"hindi","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Aasha Kumari, Assistant Professor, Hindi.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":2,"legacyCouncilSerial":3,"source":"existing-website","assignments":[{"departmentId":"hindi","isHOD":false,"responsibility":null,"photo":"Dr. Aasha Kumari, Assistant Professor, Hindi.jpeg","legacyDesignation":"Assistant Professor, Hindi"}],"responsibility":null,"aliases":["Dr. Aasha Kumari"],"legacyVariantNameKeys":["auto.dr_aasha_kumari_1rcju8e"]},
  {"id":"hindi-jyoti-dubey","name":"Dr. Jyoti Dubey","nameKey":"auto.dr_jyoti_dubey_1tqj3df","legacyNameKey":"auto.dr_jyoti_dubey_1tqj3df","department":"Hindi","departmentId":"hindi","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Jyoti Dubey, Assistant Professor, Hindi.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":3,"legacyCouncilSerial":4,"source":"existing-website","assignments":[{"departmentId":"hindi","isHOD":false,"responsibility":null,"photo":"Dr. Jyoti Dubey, Assistant Professor, Hindi.jpeg","legacyDesignation":"Assistant Professor, Hindi"}],"responsibility":null},
  {"id":"hindi-preeti-kumari","name":"Dr. Preeti Kumari","nameKey":"auto.dr_preeti_kumari_urbrsb","legacyNameKey":"auto.dr_preeti_kumari_urbrsb","department":"Hindi","departmentId":"hindi","designation":"Assistant Professor","isHOD":true,"employmentCategory":"regular","photo":"Dr. Preeti Kumari, Assistant Professor, Hindi.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":4,"legacyCouncilSerial":5,"source":"user-supplied-update","assignments":[{"departmentId":"hindi","isHOD":true,"responsibility":null,"photo":"Dr. Preeti Kumari, Assistant Professor, Hindi.jpeg","legacyDesignation":"Assistant Professor, Hindi"}],"responsibility":null,"matchingEvidence":"Exact existing name and Hindi department; retain the Assistant Professor rank."},
  {"id":"english-archana-jaiswal","name":"Prof. Archana Jaiswal","legacyNameKey":"auto.dr_archana_jaiswal_16hzx8g","department":"English","departmentId":"english","designation":"Professor","isHOD":true,"employmentCategory":"regular","photo":"Dr. Archana Jaiswal, Associate Professor, HOD English.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":5,"legacyCouncilSerial":6,"source":"user-supplied-update","assignments":[{"departmentId":"english","isHOD":true,"responsibility":null,"photo":"Dr. Archana Jaiswal, Associate Professor, HOD English.jpeg","legacyDesignation":"Associate Professor, HOD English"}],"responsibility":null,"previousName":"Dr. Archana Jaiswal","aliases":["Dr. Archana Jaiswal"],"matchingEvidence":"Exact full name and department; the supplied update changes rank/title on the existing English HOD record."},
  {"id":"english-rajeev-kumar-singh","name":"Dr. Rajeev Kumar Singh","nameKey":"auto.dr_rajeev_kumar_singh_126jkh5","legacyNameKey":"auto.dr_rajeev_kumar_singh_126jkh5","department":"English","departmentId":"english","designation":"","isHOD":false,"employmentCategory":"regular","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":6,"legacyCouncilSerial":7,"source":"existing-website","assignments":[{"departmentId":"english","isHOD":false,"responsibility":null}]},
  {"id":"urdu-md-sohail-anwer","name":"Dr. Md. Sohail Anwer","nameKey":"auto.dr_md_sohail_anwer_1or3ao5","legacyNameKey":"auto.dr_md_sohail_anwer_1or3ao5","department":"Urdu","departmentId":"urdu","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Md. Sohail Anwer.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":7,"legacyCouncilSerial":8,"source":"existing-website","assignments":[{"departmentId":"urdu","isHOD":false,"responsibility":null,"photo":"Dr. Md. Sohail Anwer.jpeg","legacyDesignation":"HOD, Urdu"}],"responsibility":null,"aliases":["Dr. Sohail Anwer"]},
  {"id":"urdu-md-rizwan","name":"Dr. Md. Rizwan","nameKey":"auto.dr_md_rizwan_b00fkz","legacyNameKey":"auto.dr_md_rizwan_b00fkz","department":"Urdu","departmentId":"urdu","designation":"Assistant Professor","isHOD":true,"employmentCategory":"regular","photo":"Dr. Md. Rizwan, Assistant Professor, Urdu.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":8,"legacyCouncilSerial":9,"source":"user-supplied-update","assignments":[{"departmentId":"urdu","isHOD":true,"responsibility":null,"photo":"Dr. Md. Rizwan, Assistant Professor, Urdu.jpeg","legacyDesignation":"Assistant Professor, Urdu"}],"responsibility":null,"matchingEvidence":"Exact existing name and Urdu department; retain the Assistant Professor rank."},
  {"id":"persian-shahida-khanam","name":"Dr. Shahida Khanam","nameKey":"auto.dr_shahida_khanam_133t7gj","legacyNameKey":"auto.dr_shahida_khanam_133t7gj","department":"Persian","departmentId":"persian","designation":"","isHOD":true,"employmentCategory":"regular","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":9,"legacyCouncilSerial":10,"source":"existing-website","assignments":[{"departmentId":"persian","isHOD":true,"responsibility":null,"photo":null,"legacyDesignation":"HOD, Persian"}],"responsibility":null},
  {"id":"philosophy-ranjana-yadav","name":"Ms. Ranjana Yadav","nameKey":"auto.ms_ranjana_yadav_1ced9gn","legacyNameKey":"auto.ms_ranjana_yadav_1ced9gn","department":"Philosophy","departmentId":"philosophy","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Ms. Ranjana Yadav, Assistant Professor, Philosophy.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":10,"legacyCouncilSerial":11,"source":"existing-website","assignments":[{"departmentId":"philosophy","isHOD":false,"responsibility":null,"photo":"Ms. Ranjana Yadav, Assistant Professor, Philosophy.jpeg","legacyDesignation":"Assistant Professor, Philosophy"}],"responsibility":null},
  {"id":"philosophy-suchita-arpan","name":"Dr. Suchita Arpan","nameKey":"auto.dr_suchita_arpan_1hc1sv4","legacyNameKey":"auto.dr_suchita_arpan_1hc1sv4","department":"Philosophy","departmentId":"philosophy","designation":"","isHOD":true,"employmentCategory":"regular","photo":"Dr. Suchita Arpan, HOD, Psychology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":11,"legacyCouncilSerial":12,"source":"existing-website","assignments":[{"departmentId":"philosophy","isHOD":true,"responsibility":null,"photo":"Dr. Suchita Arpan, HOD, Psychology.jpeg","legacyDesignation":"HOD, Philosophy"},{"departmentId":"bba","isHOD":true,"responsibility":null,"photo":"Dr. Suchita Arpan, HOD, Psychology.jpeg","legacyDesignation":"HOD, BBA"}],"responsibility":null},
  {"id":"philosophy-sanjay-kumar-priyadarshi","name":"Dr. Sanjay Kumar Priyadarshi","nameKey":"auto.dr_sanjay_kumar_priyadarshi_14x1tlx","legacyNameKey":"auto.dr_sanjay_kumar_priyadarshi_14x1tlx","department":"Philosophy","departmentId":"philosophy","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Sanjay Kumar Priyadarshi, Assistant Professor, Philosophy.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":12,"legacyCouncilSerial":13,"source":"existing-website","assignments":[{"departmentId":"philosophy","isHOD":false,"responsibility":null,"photo":"Dr. Sanjay Kumar Priyadarshi, Assistant Professor, Philosophy.jpeg","legacyDesignation":"Assistant Professor, Philosophy"}],"responsibility":null},
  {"id":"political-science-pushplata-kumari","name":"Prof. Pushpalata","legacyNameKey":"auto.prof_dr_pushplata_kumari_p4ng6e","department":"Political Science","departmentId":"political-science","designation":"Professor","isHOD":true,"employmentCategory":"regular","photo":"Prof. Pushpalata Kumari, Professor, Political Science Coordinator, IQAC, MMC.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":13,"legacyCouncilSerial":14,"source":"user-supplied-update","assignments":[{"departmentId":"political-science","isHOD":true,"responsibility":null,"photo":"Prof. Pushpalata Kumari, Professor, Political Science Coordinator, IQAC, MMC.jpeg","legacyDesignation":"Professor, Political Science"}],"responsibility":null,"previousName":"Prof. (Dr.) Pushplata Kumari","aliases":["Prof. (Dr.) Pushplata Kumari"],"matchingEvidence":"The unique Political Science Pushplata record has an existing Professor designation and portrait filename beginning Prof. Pushpalata Kumari. The user supplied the candidate mapping."},
  {"id":"political-science-rishu-raj","name":"Dr. Rishu Raj","nameKey":"auto.dr_rishu_raj_xiys6p","legacyNameKey":"auto.dr_rishu_raj_xiys6p","department":"Political Science","departmentId":"political-science","designation":"","isHOD":false,"employmentCategory":"regular","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":14,"legacyCouncilSerial":15,"source":"existing-website","assignments":[{"departmentId":"political-science","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"HOD, Political Science"}],"responsibility":null},
  {"id":"sociology-binay-kumar-bimal","name":"Prof. Binay Kumar Bimal","legacyNameKey":"auto.dr_binay_kumar_bimal_1uzsmiz","department":"Sociology","departmentId":"sociology","designation":"Professor","isHOD":true,"employmentCategory":"regular","photo":"Dr. Binay Kumar Bimal, Professor, Department of Sociology Bursar, MMC Coordinator, BSW.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":15,"legacyCouncilSerial":16,"source":"user-supplied-update","assignments":[{"departmentId":"sociology","isHOD":true,"responsibility":null,"photo":"Dr. Binay Kumar Bimal, Professor, Department of Sociology Bursar, MMC Coordinator, BSW.jpeg","legacyDesignation":"HOD,Professor, Department of Sociology,"},{"departmentId":"bsw","isHOD":false,"responsibility":"Coordinator","photo":"Dr. Binay Kumar Bimal, Professor, Department of Sociology Bursar, MMC Coordinator, BSW.jpeg","legacyDesignation":"Coordinator, BSW"}],"responsibility":null,"previousName":"Dr. Binay Kumar Bimal","aliases":["Dr. Binay Kumar Bimal"],"matchingEvidence":"Exact full name and department; preserve the existing Professor/HOD record, portrait and BSW assignment."},
  {"id":"sociology-archna-kumari","name":"Dr. Archna Kumari","nameKey":"auto.dr_archna_kumari_slgkoz","legacyNameKey":"auto.dr_archna_kumari_slgkoz","department":"Sociology","departmentId":"sociology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Archna Kumari, Assistant Professor, Sociology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":16,"legacyCouncilSerial":17,"source":"existing-website","assignments":[{"departmentId":"sociology","isHOD":false,"responsibility":null,"photo":"Dr. Archna Kumari, Assistant Professor, Sociology.jpeg","legacyDesignation":"Assistant Professor, Sociology"}],"responsibility":null},
  {"id":"sociology-reena-kumari","name":"Dr. Reena Kumari","nameKey":"auto.dr_reena_kumari_1owdvvt","legacyNameKey":"auto.dr_reena_kumari_1owdvvt","department":"Sociology","departmentId":"sociology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr Reena kumari, Assistant Professor, Department of Sociology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":17,"legacyCouncilSerial":18,"source":"existing-website","assignments":[{"departmentId":"sociology","isHOD":false,"responsibility":null,"photo":"Dr Reena kumari, Assistant Professor, Department of Sociology.jpeg","legacyDesignation":"Assistant Professor, Department of Sociology"}],"responsibility":null},
  {"id":"sociology-anju-kumari","name":"Dr. Anju Kumari","nameKey":"auto.dr_anju_kumari_1be98ec","legacyNameKey":"auto.dr_anju_kumari_1be98ec","department":"Sociology","departmentId":"sociology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Anju Kumari, Assistant Professor, Sociology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":18,"legacyCouncilSerial":19,"source":"existing-website","assignments":[{"departmentId":"sociology","isHOD":false,"responsibility":null,"photo":"Anju Kumari, Assistant Professor, Sociology.jpeg","legacyDesignation":"Assistant Professor, Sociology"}],"responsibility":null},
  {"id":"sociology-veena-kumari","name":"Dr. Veena Kumari","nameKey":"auto.dr_veena_kumari_1itoht9","legacyNameKey":"auto.dr_veena_kumari_1itoht9","department":"Sociology","departmentId":"sociology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Veena Kumari, Assistant Professor, Sociology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":19,"legacyCouncilSerial":20,"source":"existing-website","assignments":[{"departmentId":"sociology","isHOD":false,"responsibility":null,"photo":"Dr. Veena Kumari, Assistant Professor, Sociology.jpeg","legacyDesignation":"Assistant Professor, Sociology"}],"responsibility":null},
  {"id":"sociology-rajendra-kumar","name":"Dr. Rajendra Kumar","nameKey":"auto.dr_rajendra_kumar_3inpbs","legacyNameKey":"auto.dr_rajendra_kumar_3inpbs","department":"Sociology","departmentId":"sociology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Rajendra Kumar, Assistant Professor, Sociology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":20,"legacyCouncilSerial":21,"source":"existing-website","assignments":[{"departmentId":"sociology","isHOD":false,"responsibility":null,"photo":"Rajendra Kumar, Assistant Professor, Sociology.jpeg","legacyDesignation":"Assistant Professor, Sociology"}],"responsibility":null},
  {"id":"sociology-minu-minj","name":"Dr. Minu Minj","nameKey":"auto.dr_minu_minj_1ogfx1e","legacyNameKey":"auto.dr_minu_minj_1ogfx1e","department":"Sociology","departmentId":"sociology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Minu Minz, Assistant Professor, Sociology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":21,"legacyCouncilSerial":22,"source":"existing-website","assignments":[{"departmentId":"sociology","isHOD":false,"responsibility":null,"photo":"Dr. Minu Minz, Assistant Professor, Sociology.jpeg","legacyDesignation":"Assistant Professor, Sociology"}],"responsibility":null},
  {"id":"economics-sweta-sharan","name":"Dr. Sweta Sharan","nameKey":"auto.dr_sweta_sharan_1ctiw6m","legacyNameKey":"auto.dr_sweta_sharan_1ctiw6m","department":"Economics","departmentId":"economics","designation":"","isHOD":false,"employmentCategory":"regular","photo":"Sweta Sharan, HOD, Economics.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":22,"legacyCouncilSerial":23,"source":"existing-website","assignments":[{"departmentId":"economics","isHOD":false,"responsibility":null,"photo":"Sweta Sharan, HOD, Economics.jpeg","legacyDesignation":"HOD, Economics"}],"responsibility":null},
  {"id":"economics-priyardarshni","name":"Dr. Priyardarshni","nameKey":"auto.dr_priyardarshni_1iox0fr","legacyNameKey":"auto.dr_priyardarshni_1iox0fr","department":"Economics","departmentId":"economics","designation":"","isHOD":false,"employmentCategory":"regular","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":23,"legacyCouncilSerial":24,"source":"existing-website","assignments":[{"departmentId":"economics","isHOD":false,"responsibility":null}]},
  {"id":"economics-chandan-chandra-chunna","name":"Dr. Chandan Chandra Chunna","nameKey":"auto.dr_chandan_chandra_chunna_1ul83jy","legacyNameKey":"auto.dr_chandan_chandra_chunna_1ul83jy","department":"Economics","departmentId":"economics","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Chandan Chandra Chunna, Assistant Professor, Economics.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":24,"legacyCouncilSerial":25,"source":"existing-website","assignments":[{"departmentId":"economics","isHOD":false,"responsibility":null,"photo":"Dr. Chandan Chandra Chunna, Assistant Professor, Economics.jpeg","legacyDesignation":"Assistant Professor, Economics"}],"responsibility":null},
  {"id":"economics-angur-kumari","name":"Dr. Angur Kumari","nameKey":"auto.dr_angur_kumari_1ep65x7","legacyNameKey":"auto.dr_angur_kumari_1ep65x7","department":"Economics","departmentId":"economics","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr Angur Kumari, Assistant Professor, Economics.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":25,"legacyCouncilSerial":26,"source":"existing-website","assignments":[{"departmentId":"economics","isHOD":false,"responsibility":null,"photo":"Dr Angur Kumari, Assistant Professor, Economics.jpeg","legacyDesignation":"Assistant Professor, Economics"}],"responsibility":null},
  {"id":"economics-ashish-kumar","name":"Dr. Ashish Kumar","nameKey":"auto.dr_ashish_kumar_1n4wtdh","legacyNameKey":"auto.dr_ashish_kumar_1n4wtdh","department":"Economics","departmentId":"economics","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Ashish Kumar, Assistant Professor, Economics.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":26,"legacyCouncilSerial":27,"source":"existing-website","assignments":[{"departmentId":"economics","isHOD":false,"responsibility":null,"photo":"Ashish Kumar, Assistant Professor, Economics.jpeg","legacyDesignation":"Assistant Professor, Economics"}],"responsibility":null},
  {"id":"economics-mita-malkhandi","name":"Dr. Mita Malkhandi","nameKey":"auto.dr_mita_malkhandi_ye70tp","legacyNameKey":"auto.dr_mita_malkhandi_ye70tp","department":"Economics","departmentId":"economics","designation":"Assistant Professor","isHOD":true,"employmentCategory":"regular","photo":"Dr. Mita Malkhandi, Assistant Professor, Economics.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":27,"legacyCouncilSerial":28,"source":"user-supplied-update","assignments":[{"departmentId":"economics","isHOD":true,"responsibility":null,"photo":"Dr. Mita Malkhandi, Assistant Professor, Economics.jpeg","legacyDesignation":"Assistant Professor, Economics"}],"responsibility":null,"matchingEvidence":"Exact existing name and Economics department; retain the Assistant Professor rank."},
  {"id":"psychology-nidhi-singh","name":"Ms. Nidhi Singh","nameKey":"auto.ms_nidhi_singh_njcovg","legacyNameKey":"auto.ms_nidhi_singh_njcovg","department":"Psychology","departmentId":"psychology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Ms. Nidhi Singh, Assistant Professor, Psychology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":28,"legacyCouncilSerial":29,"source":"existing-website","assignments":[{"departmentId":"psychology","isHOD":false,"responsibility":null,"photo":"Ms. Nidhi Singh, Assistant Professor, Psychology.jpeg","legacyDesignation":"Assistant Professor, Psychology"}],"responsibility":null},
  {"id":"psychology-namrata","name":"Dr. Namrata","nameKey":"auto.dr_namrata_y1tq7t","legacyNameKey":"auto.dr_namrata_y1tq7t","department":"Psychology","departmentId":"psychology","designation":"Assistant Professor","isHOD":true,"employmentCategory":"regular","photo":"Dr.Namrata, Assistant Professor, HOD,  Psychology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":29,"legacyCouncilSerial":30,"source":"existing-website","assignments":[{"departmentId":"psychology","isHOD":true,"responsibility":null,"photo":"Dr.Namrata, Assistant Professor, HOD,  Psychology.jpeg","legacyDesignation":"Assistant Professor, HOD, Psychology"}],"responsibility":null},
  {"id":"psychology-sonali-kumari","name":"Dr. Sonali Kumari","nameKey":"auto.dr_sonali_kumari_10hwkaq","legacyNameKey":"auto.dr_sonali_kumari_10hwkaq","department":"Psychology","departmentId":"psychology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Sonali Kumari, Assistant Professor, Psychology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":30,"legacyCouncilSerial":31,"source":"existing-website","assignments":[{"departmentId":"psychology","isHOD":false,"responsibility":null,"photo":"Dr. Sonali Kumari, Assistant Professor, Psychology.jpeg","legacyDesignation":"Assistant Professor, Psychology"}],"responsibility":null},
  {"id":"psychology-priyamvada","name":"Dr. Priyamvada","nameKey":"auto.dr_priyamvada_90l9ht","legacyNameKey":"auto.dr_priyamvada_90l9ht","department":"Psychology","departmentId":"psychology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Priyamvada, Assistant Professor, Psychology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":31,"legacyCouncilSerial":32,"source":"existing-website","assignments":[{"departmentId":"psychology","isHOD":false,"responsibility":null,"photo":"Dr. Priyamvada, Assistant Professor, Psychology.jpeg","legacyDesignation":"Assistant Professor, Psychology"}],"responsibility":null},
  {"id":"psychology-kavita-chowdhary","name":"Dr. Kavita Chowdhary","nameKey":"auto.dr_kavita_chowdhary_1h4cd60","legacyNameKey":"auto.dr_kavita_chowdhary_1h4cd60","department":"Psychology","departmentId":"psychology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Kavita Chowdhary, Assistant Professor, Department of Psychology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":32,"legacyCouncilSerial":33,"source":"existing-website","assignments":[{"departmentId":"psychology","isHOD":false,"responsibility":null,"photo":"Dr. Kavita Chowdhary, Assistant Professor, Department of Psychology.jpeg","legacyDesignation":"Assistant Professor, Department of Psychology"}],"responsibility":null},
  {"id":"psychology-archana-kumari","name":"Dr. Archana Kumari","nameKey":"auto.dr_archana_kumari_1u97n4y","legacyNameKey":"auto.dr_archana_kumari_1u97n4y","department":"Psychology","departmentId":"psychology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Archana Kumari, Assistant Professor, Psychology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":33,"legacyCouncilSerial":34,"source":"existing-website","assignments":[{"departmentId":"psychology","isHOD":false,"responsibility":null,"photo":"Archana Kumari, Assistant Professor, Psychology.jpeg","legacyDesignation":"Assistant Professor, Psychology"}],"responsibility":null},
  {"id":"psychology-ranjana-kumari","name":"Dr. Ranjana Kumari","nameKey":"auto.dr_ranjana_kumari_1kfe0z1","legacyNameKey":"auto.dr_ranjana_kumari_1kfe0z1","department":"Psychology","departmentId":"psychology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Ranjana Kumari, Assistant Professor, Psychology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":34,"legacyCouncilSerial":35,"source":"existing-website","assignments":[{"departmentId":"psychology","isHOD":false,"responsibility":null,"photo":"Dr. Ranjana Kumari, Assistant Professor, Psychology.jpeg","legacyDesignation":"Assistant Professor, Psychology"}],"responsibility":null},
  {"id":"psychology-archana-bharti","name":"Dr. Archana Bharti","nameKey":"auto.dr_archana_bharti_4a5633","legacyNameKey":"auto.dr_archana_bharti_4a5633","department":"Psychology","departmentId":"psychology","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Archana Bharti, Assistant Professor, Psychology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":35,"legacyCouncilSerial":36,"source":"existing-website","assignments":[{"departmentId":"psychology","isHOD":false,"responsibility":null,"photo":"Dr. Archana Bharti, Assistant Professor, Psychology.jpeg","legacyDesignation":"Assistant Professor, Psychology"}],"responsibility":null},
  {"id":"home-science-kavita-kumari","name":"Dr. Kavita Kumari","nameKey":"auto.dr_kavita_kumari_1a4cr6c","legacyNameKey":"auto.dr_kavita_kumari_1a4cr6c","department":"Home Science","departmentId":"home-science","designation":"","isHOD":true,"employmentCategory":"regular","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":36,"legacyCouncilSerial":40,"source":"user-supplied-update","assignments":[{"departmentId":"home-science","isHOD":true,"responsibility":null,"photo":null,"legacyDesignation":"HOD, Home Science"}],"responsibility":null,"matchingEvidence":"Exact existing name and Home Science department; preserve HOD responsibility without inventing academic rank."},
  {"id":"home-science-seema-prakash","name":"Dr. Seema Prakash","nameKey":"auto.dr_seema_prakash_uch4ts","legacyNameKey":"auto.dr_seema_prakash_uch4ts","department":"Home Science","departmentId":"home-science","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Seema Prakash, Assistant Professor, Home Science.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":37,"legacyCouncilSerial":41,"source":"existing-website","assignments":[{"departmentId":"home-science","isHOD":false,"responsibility":null,"photo":"Dr. Seema Prakash, Assistant Professor, Home Science.jpeg","legacyDesignation":"Assistant Professor, Home Science"}],"responsibility":null},
  {"id":"home-science-shruti-kumari","name":"Dr. Shruti Kumari","nameKey":"auto.dr_shruti_kumari_uak20l","legacyNameKey":"auto.dr_shruti_kumari_uak20l","department":"Home Science","departmentId":"home-science","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Shruti Kumari, Assistant Professor, Home Science.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":38,"legacyCouncilSerial":42,"source":"existing-website","assignments":[{"departmentId":"home-science","isHOD":false,"responsibility":null,"photo":"Dr. Shruti Kumari, Assistant Professor, Home Science.jpeg","legacyDesignation":"Assistant Professor, Home Science"}],"responsibility":null},
  {"id":"music-neera-choudhury","name":"Prof. (Dr.) Neera Choudhury","nameKey":"auto.prof_dr_neera_choudhury_k149vr","legacyNameKey":"auto.prof_dr_neera_choudhury_k149vr","department":"Music","departmentId":"music","designation":"Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Neera Chowdhary, Professor, Department of Music.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":39,"legacyCouncilSerial":43,"source":"existing-website","assignments":[{"departmentId":"music","isHOD":false,"responsibility":null,"photo":"Dr. Neera Chowdhary, Professor, Department of Music.jpeg","legacyDesignation":"Professor, Department of Music"}],"responsibility":null},
  {"id":"music-arvind-kumar","name":"Dr. Arvind Kumar","nameKey":"auto.dr_arvind_kumar_yeh61n","legacyNameKey":"auto.dr_arvind_kumar_yeh61n","department":"Music","departmentId":"music","designation":"Professor","isHOD":true,"employmentCategory":"regular","photo":"Dr. Arvind Kumar, Professor, HOD, Department of Music.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":40,"legacyCouncilSerial":44,"source":"existing-website","assignments":[{"departmentId":"music","isHOD":true,"responsibility":null,"photo":"Dr. Arvind Kumar, Professor, HOD, Department of Music.jpeg","legacyDesignation":"Professor, HOD, Department of Music"}],"responsibility":null},
  {"id":"mathematics-poonam-kumari","name":"Prof. Poonam Kumari","legacyNameKey":"auto.dr_poonam_kumari_3gi7s6","department":"Mathematics","departmentId":"mathematics","designation":"Professor","isHOD":true,"employmentCategory":"regular","photo":"Poonam Kumari, Professor, HOD,  Mathematics.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":41,"legacyCouncilSerial":45,"source":"user-supplied-update","assignments":[{"departmentId":"mathematics","isHOD":true,"responsibility":null,"photo":"Poonam Kumari, Professor, HOD,  Mathematics.jpeg","legacyDesignation":"Professor, HOD, Mathematics"}],"responsibility":null,"previousName":"Dr. Poonam Kumari","aliases":["Dr. Poonam Kumari"],"matchingEvidence":"Exact full name and department; existing designation is already Professor and HOD, and its portrait is retained."},
  {"id":"mathematics-binay-kumar","name":"Dr. Binay Kumar","nameKey":"auto.dr_binay_kumar_c00ops","legacyNameKey":"auto.dr_binay_kumar_c00ops","department":"Mathematics","departmentId":"mathematics","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Binay Kumar, Assistant Professor, Department of Mathematics.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":42,"legacyCouncilSerial":46,"source":"existing-website","assignments":[{"departmentId":"mathematics","isHOD":false,"responsibility":null,"photo":"Dr. Binay Kumar, Assistant Professor, Department of Mathematics.jpeg","legacyDesignation":"Assistant Professor, Department of Mathematics"}],"responsibility":null},
  {"id":"physics-manish-kumar-verma","name":"Dr. Manish Kumar Verma","nameKey":"auto.dr_manish_kumar_verma_jzs2rk","legacyNameKey":"auto.dr_manish_kumar_verma_jzs2rk","department":"Physics","departmentId":"physics","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Manish Kumar Verma, Assistant Professor, Physics Coordinator, BCA.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":43,"legacyCouncilSerial":47,"source":"existing-website","assignments":[{"departmentId":"physics","isHOD":false,"responsibility":null,"photo":"Dr. Manish Kumar Verma, Assistant Professor, Physics Coordinator, BCA.jpeg","legacyDesignation":"Assistant Professor, Physics"},{"departmentId":"bca","isHOD":false,"responsibility":"Coordinator","photo":"Dr. Manish Kumar Verma, Assistant Professor, Physics Coordinator, BCA.jpeg","legacyDesignation":"Coordinator, BCA"}],"responsibility":null},
  {"id":"physics-priti-mishra","name":"Dr. Priti Mishra","nameKey":"auto.dr_priti_mishra_f3ipev","legacyNameKey":"auto.dr_priti_mishra_f3ipev","department":"Physics","departmentId":"physics","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Priti Mishra, Assistant Professor, Physics.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":44,"legacyCouncilSerial":48,"source":"existing-website","assignments":[{"departmentId":"physics","isHOD":false,"responsibility":null,"photo":"Dr. Priti Mishra, Assistant Professor, Physics.jpeg","legacyDesignation":"Assistant Professor, Physics"}],"responsibility":null},
  {"id":"physics-sonu-rani","name":"Dr. Sonu Rani","nameKey":"auto.dr_sonu_rani_kgpk1a","legacyNameKey":"auto.dr_sonu_rani_kgpk1a","department":"Physics","departmentId":"physics","designation":"","isHOD":true,"employmentCategory":"regular","photo":"Dr. Sonu Rani, HOD Physics.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":45,"legacyCouncilSerial":49,"source":"existing-website","assignments":[{"departmentId":"physics","isHOD":true,"responsibility":null,"photo":"Dr. Sonu Rani, HOD Physics.jpeg","legacyDesignation":"HOD Physics"}],"responsibility":null},
  {"id":"physics-pankaj-kumar-baitha","name":"Dr. Pankaj Kumar Baitha","nameKey":"auto.dr_pankaj_kumar_baitha_1w2sks5","legacyNameKey":"auto.dr_pankaj_kumar_baitha_1w2sks5","department":"Physics","departmentId":"physics","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Pankaj Kumar Baitha, Assistant Professor, Physics.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":46,"legacyCouncilSerial":50,"source":"existing-website","assignments":[{"departmentId":"physics","isHOD":false,"responsibility":null,"photo":"Dr. Pankaj Kumar Baitha, Assistant Professor, Physics.jpeg","legacyDesignation":"Assistant Professor, Physics"}],"responsibility":null},
  {"id":"chemistry-usha-kumari","name":"Dr. Usha Kumari","nameKey":"auto.dr_usha_kumari_ipthiz","legacyNameKey":"auto.dr_usha_kumari_ipthiz","department":"Chemistry","departmentId":"chemistry","designation":"Associate Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Usha Kumari, Associate Professor, Chemistry.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":47,"legacyCouncilSerial":51,"source":"existing-website","assignments":[{"departmentId":"chemistry","isHOD":false,"responsibility":null,"photo":"Dr. Usha Kumari, Associate Professor, Chemistry.jpeg","legacyDesignation":"Associate Professor, Chemistry"}],"responsibility":null},
  {"id":"chemistry-shyam-deo-yadav","name":"Prof. Shyam Deo Yadav","legacyNameKey":"auto.dr_shyam_deo_yadav_z16psm","department":"Chemistry","departmentId":"chemistry","designation":"Professor","isHOD":true,"employmentCategory":"regular","photo":"Prof. Shyam Deo Yadav, HOD, Chemistry.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":48,"legacyCouncilSerial":52,"source":"user-supplied-update","assignments":[{"departmentId":"chemistry","isHOD":true,"responsibility":null,"photo":"Prof. Shyam Deo Yadav, HOD, Chemistry.jpeg","legacyDesignation":"HOD, Chemistry"}],"responsibility":null,"previousName":"Dr. Shyam Deo Yadav","aliases":["Dr. Shyam Deo Yadav"],"matchingEvidence":"Exact full name and Chemistry department; the retained portrait filename already begins Prof. Shyam Deo Yadav."},
  {"id":"chemistry-madhu-kumari-gupta","name":"Dr. Madhu Kumari Gupta","nameKey":"auto.dr_madhu_kumari_gupta_vqlz92","legacyNameKey":"auto.dr_madhu_kumari_gupta_vqlz92","department":"Chemistry","departmentId":"chemistry","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Madhu Gupta, Assistant Professor, Chemistry.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":49,"legacyCouncilSerial":53,"source":"existing-website","assignments":[{"departmentId":"chemistry","isHOD":false,"responsibility":null,"photo":"Dr. Madhu Gupta, Assistant Professor, Chemistry.jpeg","legacyDesignation":"Assistant Professor, Chemistry"}],"responsibility":null},
  {"id":"chemistry-amrita-prasad","name":"Dr. Amrita Prasad","nameKey":"auto.dr_amrita_prasad_1m3y5je","legacyNameKey":"auto.dr_amrita_prasad_1m3y5je","department":"Chemistry","departmentId":"chemistry","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr. Amrita Prasad, Assistant Professor, Chemistry.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":50,"legacyCouncilSerial":54,"source":"existing-website","assignments":[{"departmentId":"chemistry","isHOD":false,"responsibility":null,"photo":"Dr. Amrita Prasad, Assistant Professor, Chemistry.jpeg","legacyDesignation":"Assistant Professor, Chemistry"}],"responsibility":null},
  {"id":"chemistry-reena-kumari","name":"Dr. Reena Kumari","nameKey":"auto.dr_reena_kumari_1owdvvt","legacyNameKey":"auto.dr_reena_kumari_1owdvvt","department":"Chemistry","departmentId":"chemistry","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Reena Kumari, Assistant Professor, Chemistry.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":51,"legacyCouncilSerial":55,"source":"existing-website","assignments":[{"departmentId":"chemistry","isHOD":false,"responsibility":null,"photo":"Reena Kumari, Assistant Professor, Chemistry.jpeg","legacyDesignation":"Assistant Professor, Chemistry"}],"responsibility":null},
  {"id":"chemistry-deepak-kumar","name":"Dr. Deepak Kumar","nameKey":"auto.dr_deepak_kumar_aiuezn","legacyNameKey":"auto.dr_deepak_kumar_aiuezn","department":"Chemistry","departmentId":"chemistry","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":"Dr Deepak Kumar, Assistant Professor, Chemistry.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":52,"legacyCouncilSerial":56,"source":"existing-website","assignments":[{"departmentId":"chemistry","isHOD":false,"responsibility":null,"photo":"Dr Deepak Kumar, Assistant Professor, Chemistry.jpeg","legacyDesignation":"Assistant Professor, Chemistry"}],"responsibility":null},
  {"id":"chemistry-archana-sinha","name":"Dr. Archana Sinha","nameKey":"auto.dr_archana_sinha_1mfbu1i","legacyNameKey":"auto.dr_archana_sinha_1mfbu1i","department":"Chemistry","departmentId":"chemistry","designation":"Assistant Professor","isHOD":false,"employmentCategory":"regular","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":53,"legacyCouncilSerial":57,"source":"existing-website","assignments":[{"departmentId":"chemistry","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Assitant Professor, Chemistry"}],"responsibility":null},
  {"id":"botany-namita-kumari","name":"Prof. (Dr.) Namita Kumari","nameKey":"auto.prof_dr_namita_kumari_141e1im","legacyNameKey":"auto.prof_dr_namita_kumari_141e1im","department":"Botany","departmentId":"botany","designation":"","isHOD":false,"employmentCategory":"regular","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":54,"legacyCouncilSerial":58,"source":"existing-website","assignments":[{"departmentId":"botany","isHOD":false,"responsibility":null}]},
  {"id":"botany-pushpanjali-khare","name":"Prof. Puspanjali Khare","legacyNameKey":"auto.dr_pushpanjali_khare_1x6i46f","department":"Botany","departmentId":"botany","designation":"Professor","isHOD":true,"employmentCategory":"regular","photo":"Dr. Pushpanjali Khare, Associate Professor, HOD Botany.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":55,"legacyCouncilSerial":59,"source":"user-supplied-update","assignments":[{"departmentId":"botany","isHOD":true,"responsibility":null,"photo":"Dr. Pushpanjali Khare, Associate Professor, HOD Botany.jpeg","legacyDesignation":"Associate Professor, HOD Botany"}],"responsibility":null,"previousName":"Dr. Pushpanjali Khare","aliases":["Dr. Pushpanjali Khare"],"matchingEvidence":"Unique Botany Khare record, matching HOD responsibility, retained portrait, and explicit user-supplied candidate mapping support the spelling/rank update."},
  {"id":"botany-surendra-kumar-prasad","name":"Prof. Surendra Prasad","legacyNameKey":"auto.dr_surendra_kumar_prasad_17ku7a8","department":"Botany","departmentId":"botany","designation":"Professor","isHOD":false,"employmentCategory":"regular","photo":"Surendra Prasad, Associate Prof, Botany Coordinator, B.Com..jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":56,"legacyCouncilSerial":60,"source":"user-supplied-update","assignments":[{"departmentId":"botany","isHOD":false,"responsibility":null,"photo":"Surendra Prasad, Associate Prof, Botany Coordinator, B.Com..jpeg","legacyDesignation":"Associate Professor, Botany"}],"responsibility":null,"previousName":"Dr. Surendra Kumar Prasad","aliases":["Dr. Surendra Kumar Prasad"],"matchingEvidence":"The unique Botany Surendra record has a portrait filename beginning Surendra Prasad; the explicit user-supplied candidate mapping supports the shortened name and rank update. B.Com remains a separate unresolved source identity."},
  {"id":"zoology-sujata-kumari","name":"Dr. Sujata Kumari","nameKey":"auto.dr_sujata_kumari_cy6mto","legacyNameKey":"auto.dr_sujata_kumari_cy6mto","department":"Zoology","departmentId":"zoology","designation":"","isHOD":true,"employmentCategory":"regular","photo":"Dr. Sujata, HOD Zoology.jpeg","profile":null,"status":"active","inStaffCouncil":true,"councilOrder":57,"legacyCouncilSerial":61,"source":"existing-website","assignments":[{"departmentId":"zoology","isHOD":true,"responsibility":null,"photo":"Dr. Sujata, HOD Zoology.jpeg","legacyDesignation":"HOD Zoology"}],"responsibility":null},
  {"id":"history-rajesh-kumar","name":"Dr. Rajesh Kumar","nameKey":"auto.dr_rajesh_kumar_19g6hay","legacyNameKey":"auto.dr_rajesh_kumar_19g6hay","department":"History","departmentId":"history","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":0,"legacyCouncilSerial":1,"source":"existing-website","assignments":[{"departmentId":"history","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, History"}],"responsibility":null},
  {"id":"history-deepika-singh","name":"Dr. Deepika Singh","nameKey":"auto.dr_deepika_singh_1hzwx9t","legacyNameKey":"auto.dr_deepika_singh_1hzwx9t","department":"History","departmentId":"history","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":1,"legacyCouncilSerial":2,"source":"existing-website","assignments":[{"departmentId":"history","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, History"}],"responsibility":null},
  {"id":"history-sweta-kumari","name":"Dr. Sweta Kumari","nameKey":"auto.dr_sweta_kumari_xtec74","legacyNameKey":"auto.dr_sweta_kumari_xtec74","department":"History","departmentId":"history","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":2,"legacyCouncilSerial":3,"source":"existing-website","assignments":[{"departmentId":"history","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, History"}],"responsibility":null},
  {"id":"zoology-maya-rani","name":"Dr. Maya Rani","nameKey":"auto.dr_maya_rani_1xnfb3x","legacyNameKey":"auto.dr_maya_rani_1xnfb3x","department":"Zoology","departmentId":"zoology","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":3,"legacyCouncilSerial":4,"source":"existing-website","assignments":[{"departmentId":"zoology","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, Zoology"}],"responsibility":null},
  {"id":"zoology-arshi-rana","name":"Dr. Arshi Rana","nameKey":"auto.dr_arshi_rana_1g5f7pc","legacyNameKey":"auto.dr_arshi_rana_1g5f7pc","department":"Zoology","departmentId":"zoology","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":4,"legacyCouncilSerial":5,"source":"existing-website","assignments":[{"departmentId":"zoology","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, Zoology"}],"responsibility":null},
  {"id":"english-anamika","name":"Dr. Anamika","nameKey":"auto.dr_anamika_1plfpel","legacyNameKey":"auto.dr_anamika_1plfpel","department":"English","departmentId":"english","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":5,"legacyCouncilSerial":6,"source":"existing-website","assignments":[{"departmentId":"english","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, English"}],"responsibility":null},
  {"id":"chemistry-priya","name":"Dr. Priya","nameKey":"auto.dr_priya_p6ftta","legacyNameKey":"auto.dr_priya_p6ftta","department":"Chemistry","departmentId":"chemistry","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":6,"legacyCouncilSerial":7,"source":"existing-website","assignments":[{"departmentId":"chemistry","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, Chemistry"}],"responsibility":null},
  {"id":"chemistry-sadhana-kumari","name":"Dr. Sadhana Kumari","nameKey":"auto.dr_sadhana_kumari_o6jb8","legacyNameKey":"auto.dr_sadhana_kumari_o6jb8","department":"Chemistry","departmentId":"chemistry","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":7,"legacyCouncilSerial":9,"source":"existing-website","assignments":[{"departmentId":"chemistry","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, Chemistry"}],"responsibility":null},
  {"id":"sanskrit-bharti-kumari","name":"Dr. Bharti Kumari","nameKey":"auto.dr_bharti_kumari_34sh8w","legacyNameKey":"auto.dr_bharti_kumari_34sh8w","department":"Sanskrit","departmentId":"sanskrit","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":8,"legacyCouncilSerial":10,"source":"existing-website","assignments":[{"departmentId":"sanskrit","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, Sanskrit"}],"responsibility":null},
  {"id":"political-science-varsha-shekhar","name":"Dr. Varsha Shekhar","nameKey":"auto.dr_varsha_shekhar_v3xxm4","legacyNameKey":"auto.dr_varsha_shekhar_v3xxm4","department":"Political Science","departmentId":"political-science","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":9,"legacyCouncilSerial":11,"source":"existing-website","assignments":[{"departmentId":"political-science","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, Political Science"}],"responsibility":null},
  {"id":"sociology-madhavi","name":"Dr. Madhavi","nameKey":"auto.dr_madhavi_qut5pf","legacyNameKey":"auto.dr_madhavi_qut5pf","department":"Sociology","departmentId":"sociology","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":10,"legacyCouncilSerial":12,"source":"existing-website","assignments":[{"departmentId":"sociology","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, Sociology"}],"responsibility":null},
  {"id":"physics-kamad-nath-shandilya","name":"Dr. Kamad Nath Shandilya","nameKey":"auto.dr_kamad_nath_shandilya_1paxbi9","legacyNameKey":"auto.dr_kamad_nath_shandilya_1paxbi9","department":"Physics","departmentId":"physics","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":11,"legacyCouncilSerial":13,"source":"existing-website","assignments":[{"departmentId":"physics","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, Physics"}],"responsibility":null},
  {"id":"economics-deepali-kumari","name":"Dr. Deepali Kumari","nameKey":"auto.dr_deepali_kumari_13olsjo","legacyNameKey":"auto.dr_deepali_kumari_13olsjo","department":"Economics","departmentId":"economics","designation":"","isHOD":false,"employmentCategory":"guest","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":12,"legacyCouncilSerial":14,"source":"existing-website","assignments":[{"departmentId":"economics","isHOD":false,"responsibility":null,"photo":null,"legacyDesignation":"Guest Faculty, Economics"}],"responsibility":null},
  {"id":"english-rajiv-kumar-singh","name":"Dr. Rajiv Kumar Singh","nameKey":"auto.dr_rajiv_kumar_singh_cnsc1s","legacyNameKey":"auto.dr_rajiv_kumar_singh_cnsc1s","department":"English","departmentId":"english","designation":"Assistant Professor","isHOD":false,"employmentCategory":"unconfirmed","photo":"Dr. Rajiv Kumar Singh, Assistant Professor, English.jpeg","profile":null,"status":"needs-review","inStaffCouncil":false,"source":"existing-department-page","assignments":[{"departmentId":"english","isHOD":false,"responsibility":null,"photo":"Dr. Rajiv Kumar Singh, Assistant Professor, English.jpeg","legacyDesignation":"Assistant Professor, English"}],"responsibility":null},
  {"id":"statistics-madhu-kumari-gupta","name":"Dr. Madhu Kumari Gupta","nameKey":"auto.dr_madhu_kumari_gupta_vqlz92","legacyNameKey":"auto.dr_madhu_kumari_gupta_vqlz92","department":"Statistics","departmentId":"statistics","designation":"Assistant Professor","isHOD":false,"employmentCategory":"unconfirmed","photo":"Dr. Madhu Gupta, Assistant Professor, Chemistry.jpeg","profile":null,"status":"needs-review","inStaffCouncil":false,"source":"existing-department-page","assignments":[{"departmentId":"statistics","isHOD":false,"responsibility":null,"photo":"Dr. Madhu Gupta, Assistant Professor, Chemistry.jpeg","legacyDesignation":"Assistant Professor, Statistics"}],"responsibility":null},
  {"id":"economics-priyadarshini","name":"Dr. Priyadarshini","nameKey":"auto.dr_priyadarshini_44hdf0","legacyNameKey":"auto.dr_priyadarshini_44hdf0","department":"Economics","departmentId":"economics","designation":"Assistant Professor","isHOD":false,"employmentCategory":"unconfirmed","photo":"Priyadarshini, Assistant Professor, Economics.jpeg","profile":null,"status":"needs-review","inStaffCouncil":false,"source":"existing-department-page","assignments":[{"departmentId":"economics","isHOD":false,"responsibility":null,"photo":"Priyadarshini, Assistant Professor, Economics.jpeg","legacyDesignation":"Assistant Professor, Economics"}],"responsibility":null},
  {"id":"bcom-surendra-prasad","name":"Surendra Prasad","nameKey":"auto.surendra_prasad_sh7upk","legacyNameKey":"auto.surendra_prasad_sh7upk","department":"B.Com","departmentId":"bcom","designation":"","isHOD":false,"employmentCategory":"unconfirmed","photo":"Surendra Prasad, Associate Prof, Botany Coordinator, B.Com..jpeg","profile":null,"status":"needs-review","inStaffCouncil":false,"source":"existing-department-page","assignments":[{"departmentId":"bcom","isHOD":false,"responsibility":"Coordinator","photo":"Surendra Prasad, Associate Prof, Botany Coordinator, B.Com..jpeg","legacyDesignation":"Coordinator, B.Com"}],"responsibility":"Coordinator"},
  {"id":"botany-shilpi-kumari","name":"Dr. Shilpi Kumari","departmentId":"botany","department":"Botany","appointmentDepartment":"Environmental Science","specialization":"Environmental Science","deputationDepartment":"Botany","designation":"Assistant Professor","isHOD":false,"employmentCategory":"unconfirmed","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":0,"source":"user-supplied-update","assignments":[{"departmentId":"botany","isHOD":false,"responsibility":null}],"matchingEvidence":"No matching name in the original council or department arrays. Regular/guest employment category was not supplied."},
  {"id":"music-maa-amrit-disha","name":"Dr. Maa Amrit Disha","departmentId":"music","department":"Music","designation":"Assistant Professor","isHOD":false,"employmentCategory":"unconfirmed","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":1,"source":"user-supplied-update","assignments":[{"departmentId":"music","isHOD":false,"responsibility":null}],"matchingEvidence":"No matching name in the original council or department arrays. Regular/guest employment category was not supplied."},
  {"id":"sanskrit-sangeeta-roy","name":"Dr. Sangeeta Roy","departmentId":"sanskrit","department":"Sanskrit","designation":"Assistant Professor","isHOD":false,"employmentCategory":"unconfirmed","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":2,"source":"user-supplied-update","assignments":[{"departmentId":"sanskrit","isHOD":false,"responsibility":null}],"matchingEvidence":"No matching name in the original council or department arrays. Regular/guest employment category was not supplied."},
  {"id":"political-science-neena-kumari","name":"Dr. Neena Kumari","departmentId":"political-science","department":"Political Science","designation":"Assistant Professor","isHOD":false,"employmentCategory":"unconfirmed","photo":null,"profile":null,"status":"active","inStaffCouncil":true,"councilOrder":3,"source":"user-supplied-update","assignments":[{"departmentId":"political-science","isHOD":false,"responsibility":null}],"matchingEvidence":"No matching name in the original council or department arrays. Regular/guest employment category was not supplied."}
];

const departmentFacultyOrder = {
  "hindi": [
    "hindi-shipra-prabha",
    "hindi-asha-kumari",
    "hindi-jyoti-dubey",
    "hindi-preeti-kumari"
  ],
  "english": [
    "english-archana-jaiswal",
    "english-rajiv-kumar-singh",
    "english-anamika"
  ],
  "persian": [
    "persian-shahida-khanam"
  ],
  "sanskrit": [
    "hindi-shipra-prabha",
    "sanskrit-bharti-kumari"
  ],
  "mathematics": [
    "mathematics-poonam-kumari",
    "mathematics-binay-kumar"
  ],
  "statistics": [
    "statistics-madhu-kumari-gupta"
  ],
  "physics": [
    "physics-sonu-rani",
    "physics-manish-kumar-verma",
    "physics-pankaj-kumar-baitha",
    "physics-priti-mishra",
    "physics-kamad-nath-shandilya"
  ],
  "chemistry": [
    "chemistry-shyam-deo-yadav",
    "chemistry-usha-kumari",
    "chemistry-deepak-kumar",
    "chemistry-amrita-prasad",
    "chemistry-madhu-kumari-gupta",
    "chemistry-reena-kumari",
    "chemistry-archana-sinha",
    "chemistry-priya",
    "chemistry-sadhana-kumari"
  ],
  "botany": [
    "botany-pushpanjali-khare",
    "botany-surendra-kumar-prasad"
  ],
  "zoology": [
    "zoology-sujata-kumari",
    "zoology-maya-rani",
    "zoology-arshi-rana"
  ],
  "psychology": [
    "psychology-namrata",
    "psychology-nidhi-singh",
    "psychology-archana-kumari",
    "psychology-archana-bharti",
    "psychology-kavita-chowdhary",
    "psychology-priyamvada",
    "psychology-ranjana-kumari",
    "psychology-sonali-kumari"
  ],
  "sociology": [
    "sociology-binay-kumar-bimal",
    "sociology-anju-kumari",
    "sociology-archna-kumari",
    "sociology-minu-minj",
    "sociology-reena-kumari",
    "sociology-rajendra-kumar",
    "sociology-veena-kumari",
    "sociology-madhavi"
  ],
  "economics": [
    "economics-sweta-sharan",
    "economics-ashish-kumar",
    "economics-angur-kumari",
    "economics-chandan-chandra-chunna",
    "economics-mita-malkhandi",
    "economics-priyadarshini",
    "economics-deepali-kumari"
  ],
  "history": [
    "history-rajesh-kumar",
    "history-deepika-singh",
    "history-sweta-kumari"
  ],
  "philosophy": [
    "philosophy-suchita-arpan",
    "philosophy-sanjay-kumar-priyadarshi",
    "philosophy-ranjana-yadav"
  ],
  "urdu": [
    "urdu-md-sohail-anwer",
    "urdu-md-rizwan"
  ],
  "home-science": [
    "home-science-kavita-kumari",
    "home-science-shruti-kumari",
    "home-science-seema-prakash"
  ],
  "music": [
    "music-arvind-kumar",
    "music-neera-choudhury"
  ],
  "political-science": [
    "political-science-rishu-raj",
    "political-science-pushplata-kumari",
    "political-science-varsha-shekhar"
  ],
  "bba": [
    "philosophy-suchita-arpan"
  ],
  "bca": [
    "physics-manish-kumar-verma"
  ],
  "bsw": [
    "sociology-binay-kumar-bimal"
  ],
  "bcom": [
    "bcom-surendra-prasad"
  ]
};

export const facultyUpdateAudit = [
  {
    "id": "political-science-pushplata-kumari",
    "previousName": "Prof. (Dr.) Pushplata Kumari",
    "name": "Prof. Pushpalata",
    "departmentId": "political-science",
    "designation": "Professor",
    "isHOD": true,
    "supersededHODIds": [
      "political-science-rishu-raj"
    ],
    "matchingEvidence": "The unique Political Science Pushplata record has an existing Professor designation and portrait filename beginning Prof. Pushpalata Kumari. The user supplied the candidate mapping."
  },
  {
    "id": "hindi-preeti-kumari",
    "previousName": "Dr. Preeti Kumari",
    "name": "Dr. Preeti Kumari",
    "departmentId": "hindi",
    "designation": "Assistant Professor",
    "isHOD": true,
    "supersededHODIds": [
      "hindi-shipra-prabha"
    ],
    "matchingEvidence": "Exact existing name and Hindi department; retain the Assistant Professor rank."
  },
  {
    "id": "economics-mita-malkhandi",
    "previousName": "Dr. Mita Malkhandi",
    "name": "Dr. Mita Malkhandi",
    "departmentId": "economics",
    "designation": "Assistant Professor",
    "isHOD": true,
    "supersededHODIds": [
      "economics-sweta-sharan"
    ],
    "matchingEvidence": "Exact existing name and Economics department; retain the Assistant Professor rank."
  },
  {
    "id": "urdu-md-rizwan",
    "previousName": "Dr. Md. Rizwan",
    "name": "Dr. Md. Rizwan",
    "departmentId": "urdu",
    "designation": "Assistant Professor",
    "isHOD": true,
    "supersededHODIds": [
      "urdu-md-sohail-anwer"
    ],
    "matchingEvidence": "Exact existing name and Urdu department; retain the Assistant Professor rank."
  },
  {
    "id": "home-science-kavita-kumari",
    "previousName": "Dr. Kavita Kumari",
    "name": "Dr. Kavita Kumari",
    "departmentId": "home-science",
    "designation": "",
    "isHOD": true,
    "supersededHODIds": [],
    "matchingEvidence": "Exact existing name and Home Science department; preserve HOD responsibility without inventing academic rank."
  },
  {
    "id": "english-archana-jaiswal",
    "previousName": "Dr. Archana Jaiswal",
    "name": "Prof. Archana Jaiswal",
    "departmentId": "english",
    "designation": "Professor",
    "isHOD": true,
    "supersededHODIds": [],
    "matchingEvidence": "Exact full name and department; the supplied update changes rank/title on the existing English HOD record."
  },
  {
    "id": "mathematics-poonam-kumari",
    "previousName": "Dr. Poonam Kumari",
    "name": "Prof. Poonam Kumari",
    "departmentId": "mathematics",
    "designation": "Professor",
    "isHOD": true,
    "supersededHODIds": [],
    "matchingEvidence": "Exact full name and department; existing designation is already Professor and HOD, and its portrait is retained."
  },
  {
    "id": "botany-pushpanjali-khare",
    "previousName": "Dr. Pushpanjali Khare",
    "name": "Prof. Puspanjali Khare",
    "departmentId": "botany",
    "designation": "Professor",
    "isHOD": true,
    "supersededHODIds": [],
    "matchingEvidence": "Unique Botany Khare record, matching HOD responsibility, retained portrait, and explicit user-supplied candidate mapping support the spelling/rank update."
  },
  {
    "id": "botany-surendra-kumar-prasad",
    "previousName": "Dr. Surendra Kumar Prasad",
    "name": "Prof. Surendra Prasad",
    "departmentId": "botany",
    "designation": "Professor",
    "isHOD": false,
    "supersededHODIds": [],
    "matchingEvidence": "The unique Botany Surendra record has a portrait filename beginning Surendra Prasad; the explicit user-supplied candidate mapping supports the shortened name and rank update. B.Com remains a separate unresolved source identity."
  },
  {
    "id": "sociology-binay-kumar-bimal",
    "previousName": "Dr. Binay Kumar Bimal",
    "name": "Prof. Binay Kumar Bimal",
    "departmentId": "sociology",
    "designation": "Professor",
    "isHOD": true,
    "supersededHODIds": [],
    "matchingEvidence": "Exact full name and department; preserve the existing Professor/HOD record, portrait and BSW assignment."
  },
  {
    "id": "chemistry-shyam-deo-yadav",
    "previousName": "Dr. Shyam Deo Yadav",
    "name": "Prof. Shyam Deo Yadav",
    "departmentId": "chemistry",
    "designation": "Professor",
    "isHOD": true,
    "supersededHODIds": [],
    "matchingEvidence": "Exact full name and Chemistry department; the retained portrait filename already begins Prof. Shyam Deo Yadav."
  }
];

// Line references in these review notes describe the original arrays before the
// migration. Their roster contents are retained in tests/faculty-baseline.json.
export const facultyReviewIssues = [
  {
    id: 'english-name-variant',
    type: 'identity',
    title: 'Rajeev / Rajiv Kumar Singh',
    description: 'Staff Council lists Dr. Rajeev Kumar Singh; the English department lists Dr. Rajiv Kumar Singh. Different name keys and the absence of a shared profile ID leave identity unconfirmed.',
    facultyIds: ['english-rajeev-kumar-singh', 'english-rajiv-kumar-singh'],
    sources: ['StaffCouncil.jsx:31', 'Departments.jsx:54'],
    resolution: 'Retain both source records separately. Keep the original department presentation without appending a potential duplicate faculty card. Confirm identity before merging.',
  },
  {
    id: 'hindi-name-variant',
    type: 'spelling',
    title: 'Asha / Aasha Kumari',
    description: 'Staff Council and Departments use Dr. Asha Kumari; NEP Humanities uses Dr. Aasha Kumari. Both department pages reference the same portrait filename.',
    facultyIds: ['hindi-asha-kumari'],
    sources: ['StaffCouncil.jsx:15', 'Departments.jsx:25', 'nep2020/Humanities.jsx:20'],
    resolution: 'Keep the Staff Council spelling and record the existing NEP spelling as an alias requiring confirmation. Do not infer an additional faculty identity.',
  },
  {
    id: 'economics-name-variant',
    type: 'identity',
    title: 'Priyardarshni / Priyadarshini',
    description: 'Staff Council lists Dr. Priyardarshni; Economics lists Dr. Priyadarshini. No existing profile ID establishes that these names represent the same person.',
    facultyIds: ['economics-priyardarshni', 'economics-priyadarshini'],
    sources: ['StaffCouncil.jsx:99', 'Departments.jsx:332'],
    resolution: 'Retain both source records separately. Keep the original department presentation without adding the potential counterpart as a second faculty card. Confirm identity before merging.',
  },
  {
    id: 'statistics-assignment',
    type: 'assignment',
    title: 'Statistics faculty assignment',
    description: 'Statistics lists Dr. Madhu Kumari Gupta with a Chemistry portrait. Chemistry has a separate record using the same name key. Statistics history refers to Sonu Rani as head.',
    facultyIds: ['statistics-madhu-kumari-gupta', 'chemistry-madhu-kumari-gupta'],
    sources: ['Departments.jsx:111', 'Departments.jsx:113', 'Departments.jsx:168'],
    resolution: 'Keep the Statistics source record separate from Chemistry. Confirm identity and departmental assignment before merging or replacing the existing portrait.',
  },
  {
    id: 'bcom-coordinator',
    type: 'assignment',
    title: 'B.Com coordinator assignment',
    description: 'B.Com lists Surendra Prasad as coordinator and shares a portrait filename with Botany. The latest update names Prof. Surendra Prasad in Botany but does not confirm the B.Com responsibility.',
    facultyIds: ['bcom-surendra-prasad', 'botany-surendra-kumar-prasad'],
    sources: ['Departments.jsx:198', 'Departments.jsx:583'],
    resolution: 'Retain the separate B.Com identity and coordinator responsibility pending confirmation. Do not automatically transfer the new Botany Professor rank to this record.',
  },
  {
    id: 'sanskrit-hod',
    type: 'assignment',
    title: 'Sanskrit HOD assignment',
    description: 'The existing Sanskrit card lists Dr. Shipra Prabha as HOD. The latest input adds Dr. Sangeeta Roy as Assistant Professor and does not name a new Sanskrit HOD.',
    facultyIds: ['hindi-shipra-prabha', 'sanskrit-sangeeta-roy'],
    sources: ['Departments.jsx:80', 'user-supplied-update'],
    resolution: 'Preserve the prior Sanskrit HOD assignment as requiring confirmation. Do not promote Dr. Sangeeta Roy to HOD or infer that the Hindi update changes Sanskrit.',
  },
  {
    id: 'reena-distinct-records',
    type: 'identity',
    title: 'Reena Kumari in two departments',
    description: 'Chemistry and Sociology each have a Dr. Reena Kumari record and a department-specific portrait.',
    facultyIds: ['chemistry-reena-kumari', 'sociology-reena-kumari'],
    sources: ['StaffCouncil.jsx:75', 'StaffCouncil.jsx:211', 'Departments.jsx:172', 'Departments.jsx:286'],
    resolution: 'Keep both identities, IDs and photographs distinct until the college confirms them.',
  },
  {
    id: 'new-employment-categories',
    type: 'category',
    title: 'New faculty employment categories',
    description: 'Regular or guest employment status was not supplied for Dr. Shilpi Kumari, Dr. Maa Amrit Disha, Dr. Sangeeta Roy or Dr. Neena Kumari.',
    facultyIds: ['botany-shilpi-kumari', 'music-maa-amrit-disha', 'sanskrit-sangeeta-roy', 'political-science-neena-kumari'],
    sources: ['user-supplied-update'],
    resolution: 'Show these four records under employment category awaiting confirmation, preserving all 58 regular and 13 guest entries.',
  },
];

// Both source identities remain in faculty. These explicit omissions avoid adding
// visible near-duplicates to the original department rosters while review is pending.
export const pendingIdentityReview = {
  english: ['english-rajeev-kumar-singh'],
  economics: ['economics-priyardarshni'],
};

for (const issue of facultyReviewIssues) {
  for (const id of issue.facultyIds) {
    const member = faculty.find((record) => record.id === id);
    member.reviewIssueIds = [...(member.reviewIssueIds || []), issue.id];
    if (issue.type !== 'category') member.status = 'needs-review';
  }
}

export const getFacultyById = (id) => faculty.find((member) => member.id === id);

export const getStaffCouncilFaculty = (category) => faculty
  .filter((member) => member.inStaffCouncil && (!category || member.employmentCategory === category))
  .sort((left, right) => left.councilOrder - right.councilOrder);

export const getDepartmentFaculty = (departmentId) => {
  const order = departmentFacultyOrder[departmentId];
  if (!order) return [];
  const omittedIds = pendingIdentityReview[departmentId] || [];
  const members = faculty.filter((member) =>
    !omittedIds.includes(member.id) && member.assignments.some((assignment) => assignment.departmentId === departmentId));
  const originalOrder = new Map(order.map((id, index) => [id, index]));
  members.sort((left, right) =>
    (originalOrder.get(left.id) ?? Number.MAX_SAFE_INTEGER) - (originalOrder.get(right.id) ?? Number.MAX_SAFE_INTEGER));
  return members.map((member) => {
    const assignment = member.assignments.find((entry) => entry.departmentId === departmentId);
    return {
      ...member,
      homeDepartment: member.department,
      homeDepartmentId: member.departmentId,
      departmentId,
      department: facultyDepartmentNames[departmentId],
      isHOD: assignment.isHOD,
      responsibility: assignment.responsibility || null,
      photo: assignment.photo || member.photo,
    };
  });
};
