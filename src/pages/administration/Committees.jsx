import i18next from "i18next";
import React, { useState } from 'react';
import committees202526 from '../../data/committees202526.json';
const Committees = () => {
  const [expandedYear, setExpandedYear] = useState(null);
  const years = ['2025-26', '2023-24', '2022-23', '2021-22', '2020-21'];
  const academicAuditCommittee202021 = [{
    sl: '01',
    name: i18next.t("auto.prof_dr_namita_kumari_141e1im"),
    designation: 'Principal University Professor',
    department: '-----'
  }, {
    sl: '02',
    name: i18next.t("auto.dr_shyam_deo_yadav_z16psm"),
    designation: 'Bursar Associate Professor',
    department: 'Chemistry'
  }, {
    sl: '03',
    name: i18next.t("auto.prof_anjum_fatma_pzysw2"),
    designation: 'University Professor',
    department: 'HoD, Chemistry'
  }, {
    sl: '04',
    name: i18next.t("auto.dr_bandana_singh_convener_1e3q7yh"),
    designation: 'University Professor',
    department: 'Home Science'
  }, {
    sl: '05',
    name: i18next.t("auto.dr_pushpa_sinha_1q97fsf"),
    designation: 'Associate Professor',
    department: 'HoD, Economics'
  }];
  const advisoryCommittee202021 = [{
    sl: '01',
    name: i18next.t("auto.prof_dr_namita_kumari_141e1im"),
    designation: 'Principal',
    department: ''
  }, {
    sl: '02',
    name: i18next.t("auto.dr_shyam_deo_yadav_z16psm"),
    designation: 'Bursar Coordinator-B.Com.',
    department: ''
  }, {
    sl: '03',
    name: i18next.t("auto.dr_kumari_aruna_1e3pugt"),
    designation: 'HoD, Hindi',
    department: ''
  }];
  const buildingCommittee202021 = [{
    sl: '01',
    name: i18next.t("auto.prof_dr_namita_kumari_141e1im"),
    designation: 'Principal',
    department: ''
  }, {
    sl: '02',
    name: i18next.t("auto.dr_shyam_deo_yadav_z16psm"),
    designation: 'Bursar, Coordinator-B.Com.',
    department: 'Chemistry'
  }, {
    sl: '03',
    name: i18next.t("auto.mr_parimal_kumar_khan_1gks2z6"),
    designation: 'Development Officer, PU',
    department: ''
  }];
  const allCommittees = {
    '2020-21': [{
      title: i18next.t("auto.academic_audit_committee_mj6z7s"),
      data: academicAuditCommittee202021
    }, {
      title: i18next.t("auto.advisory_committee_1quni99"),
      data: advisoryCommittee202021
    }, {
      title: i18next.t("auto.building_committee_1yuw0pi"),
      data: buildingCommittee202021
    }],
    '2021-22': [{
      title: i18next.t("auto.academic_audit_committee_mj6z7s"),
      data: academicAuditCommittee202021
    }, {
      title: i18next.t("auto.advisory_committee_1quni99"),
      data: advisoryCommittee202021
    }, {
      title: i18next.t("auto.building_committee_1yuw0pi"),
      data: buildingCommittee202021
    }],
    '2022-23': [{
      title: i18next.t("auto.academic_audit_committee_mj6z7s"),
      data: academicAuditCommittee202021
    }, {
      title: i18next.t("auto.advisory_committee_1quni99"),
      data: advisoryCommittee202021
    }, {
      title: i18next.t("auto.time_table_committee_1cj8i6j"),
      data: buildingCommittee202021
    }],
    '2023-24': [{
      title: i18next.t("auto.academic_audit_committee_mj6z7s"),
      data: academicAuditCommittee202021
    }, {
      title: i18next.t("auto.advisory_committee_1quni99"),
      data: advisoryCommittee202021
    }, {
      title: i18next.t("auto.time_table_committee_1cj8i6j"),
      data: buildingCommittee202021
    }],
    '2025-26': committees202526
  };
  const getCellValue = (row, column) => {
    const normalized = column.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normalized === 'criteria') {
      return row.criteria || row.department || '';
    }
    if (normalized === 'department') {
      return row.department || row.criteria || '';
    }
    return row[normalized] || row[column.toLowerCase().replace(/\s+/g, '')] || row[column.toLowerCase()] || '';
  };
  const TableComponent = ({
    data,
    columns
  }) => <div className="overflow-x-auto my-4 rounded-2xl border border-border">
      <table className="min-w-[640px] w-full border-collapse bg-background">
        <thead className="bg-primary/10 text-primary">
          <tr>
            {columns.map(col => <th key={col} className="border border-border px-4 py-3 text-left text-sm font-semibold">
                {col}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => <tr key={`${row.sl || idx}-${row.name || 'row'}`} className={idx % 2 === 0 ? 'bg-background' : 'bg-section/60'}>
              {columns.map(col => <td key={`${idx}-${col}`} className="border border-border px-4 py-3 text-sm align-top text-foreground">
                  {getCellValue(row, col)}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </div>;
  return <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 rounded-3xl border border-border bg-card px-6 py-8 shadow-sm">
        <p className="mb-3 inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {i18next.t("auto.committees_6ma377")}
        </p>
        <h1 className="text-4xl font-bold text-foreground mb-2">{i18next.t("auto.college_committees_1tkca48")}</h1>
        <p className="text-muted-foreground">{i18next.t("auto.administrative_structure_and_committee_compositions_jo1wa1")}</p>
      </div>

      <div className="space-y-4">
        {years.map(year => <div key={year} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <button onClick={() => setExpandedYear(expandedYear === year ? null : year)} className="w-full px-6 py-4 bg-primary text-primary-foreground font-bold text-lg flex justify-between items-center hover:bg-primary/90 transition">
              <span>{`${i18next.t("auto.academic_year_1vlx7vz")} `}{year}</span>
              <span className="text-xl">{expandedYear === year ? '-' : '+'}</span>
            </button>

            {expandedYear === year && <div className="px-6 py-6 bg-background">
                {(allCommittees[year] || []).map((committee, idx) => <div key={`${year}-${committee.title}-${idx}`} className="mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">{committee.title}</h3>
                    <TableComponent data={committee.data} columns={/naac/i.test(committee.title) ? ['Sl', 'Name', 'Designation', 'Criteria'] : ['Sl', 'Name', 'Designation', 'Department']} />
                  </div>)}
              </div>}
          </div>)}
      </div>
    </div>;
};
export default Committees;
