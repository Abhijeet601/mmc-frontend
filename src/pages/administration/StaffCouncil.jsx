import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Search } from 'lucide-react';
import FacultyCard from '@/components/FacultyCard';
import { getStaffCouncilFaculty } from '@/data/faculty';
import { getFacultyName, getFacultyDepartment, getFacultyDesignation } from '@/lib/facultyPresentation';

const StaffCouncil = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('regular');
  const [query, setQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const regularEmployees = [{
    sl: 1,
    department: 'Administration',
    name: t("auto.mr_ravi_prakash_fokoei"),
    designation: 'Head Assistant'
  }, {
    sl: 2,
    department: 'Botany',
    name: t("auto.mr_arun_kumar_85xd98"),
    designation: 'Store Keeper / Accountant-in-charge'
  }, {
    sl: 3,
    department: 'Office (Accounts)',
    name: t("auto.mr_jitendra_kumar_1837rfj"),
    designation: 'LDC'
  }, {
    sl: 4,
    department: 'Office',
    name: t("auto.mr_abhimanyu_kumar_zng0k8"),
    designation: 'LDC'
  }, {
    sl: 5,
    department: 'Office',
    name: t("auto.mrs_gitanjali_palei_16kafu5"),
    designation: 'LDC'
  }, {
    sl: 6,
    department: 'Office',
    name: t("auto.mrs_ritu_rani_f8y0fd"),
    designation: 'LDC'
  }, {
    sl: 7,
    department: 'Botany',
    name: t("auto.mrs_radha_devi_o69e4n"),
    designation: 'Lab. Bearer'
  }, {
    sl: 8,
    department: 'Principal Chamber',
    name: t("auto.mrs_lalita_devi_1bweghw"),
    designation: 'Peon'
  }, {
    sl: 9,
    department: 'Zoology',
    name: t("auto.mr_ahraruddin_ansari_1bytwo8"),
    designation: 'Lab. Bearer'
  }, {
    sl: 10,
    department: 'Office',
    name: t("auto.mr_gautam_raj_1xemupy"),
    designation: 'Peon'
  }, {
    sl: 11,
    department: 'Vaidehi Hostel',
    name: t("auto.mr_ashok_kumar_1bvny5m"),
    designation: 'Darwan'
  }, {
    sl: 12,
    department: 'General',
    name: t("auto.mr_kishore_kumar_ojik45"),
    designation: 'Darwan'
  }, {
    sl: 13,
    department: 'Office',
    name: t("auto.mr_ram_pravesh_prasad_1s39238"),
    designation: 'Peon'
  }, {
    sl: 14,
    department: 'Psychology',
    name: t("auto.mr_neeraj_kumar_evhymb"),
    designation: 'Lab. Bearer'
  }, {
    sl: 15,
    department: 'Physics',
    name: t("auto.mr_dablu_kumar_1dxv7ii"),
    designation: 'Lab. Bearer'
  }, {
    sl: 16,
    department: 'Principal Chamber',
    name: t("auto.mr_suraj_kumar_nmqdd7"),
    designation: 'Peon'
  }, {
    sl: 17,
    department: 'Chemistry',
    name: t("auto.mrs_sahuda_iffat_1q5ur75"),
    designation: 'Peon'
  }, {
    sl: 18,
    department: 'Psychology',
    name: t("auto.mrs_meena_devi_1is3zh7"),
    designation: 'Peon'
  }];

  const categories = [
    { id: 'regular', label: t('facultyDirectory.regular'), records: getStaffCouncilFaculty('regular') },
    { id: 'guest', label: t('facultyDirectory.guest'), records: getStaffCouncilFaculty('guest') },
    { id: 'unconfirmed', label: t('facultyDirectory.additional'), records: getStaffCouncilFaculty('unconfirmed') },
    { id: 'employees', label: t('facultyDirectory.nonTeaching'), records: regularEmployees },
  ];
  const active = categories.find(category => category.id === activeTab);
  const isEmployees = activeTab === 'employees';
  const departmentOf = member => isEmployees ? member.department : getFacultyDepartment(member, t);
  const departmentIdOf = member => isEmployees ? member.department : member.departmentId;
  const nameOf = member => isEmployees ? member.name : getFacultyName(member, t);
  const departmentOptions = [...new Map(active.records.map(member => [departmentIdOf(member), departmentOf(member)])).entries()];
  const search = query.trim().toLocaleLowerCase();
  const filtered = active.records.filter(member => {
    const department = departmentOf(member);
    const designation = isEmployees ? member.designation : getFacultyDesignation(member, t);
    const text = [nameOf(member), member.name, ...(member.aliases || []), department, member.department, designation,
      member.specialization, member.appointmentDepartment, member.deputationDepartment,
      member.specialization === 'Environmental Science' ? t('facultyDirectory.environmentalScience') : '',
      member.isHOD ? `HOD ${t('facultyDirectory.hod')}` : ''].join(' ').toLocaleLowerCase();
    return (departmentFilter === 'all' || departmentFilter === departmentIdOf(member)) && text.includes(search);
  });
  const groups = filtered.reduce((result, member) => {
    const department = departmentOf(member);
    if (!result.has(department)) result.set(department, []);
    result.get(department).push(member);
    return result;
  }, new Map());

  return (
    <main className="faculty-directory mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t('facultyDirectory.members')}</p>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{t('facultyDirectory.title')}</h1>
        <p className="mt-3 max-w-3xl text-base text-muted-foreground">{t('facultyDirectory.intro')}</p>
      </header>
      <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label={t('facultyDirectory.category')}>
        {categories.map(category => (
          <button key={category.id} type="button" aria-pressed={activeTab === category.id}
            onClick={() => { setActiveTab(category.id); setDepartmentFilter('all'); }}
            className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${activeTab === category.id
              ? 'border-navbar bg-navbar text-navbar-foreground' : 'border-border bg-background text-foreground hover:bg-secondary'}`}>
            {category.label} <span className="ml-1">({category.records.length})</span>
          </button>
        ))}
      </div>
      <div className="mb-6 grid gap-4 rounded-2xl border border-border bg-secondary/60 p-5 md:grid-cols-2">
        <div>
          <label htmlFor="faculty-search" className="mb-2 block text-sm font-semibold text-foreground">{t('facultyDirectory.search')}</label>
          <div className="relative">
            <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
            <input id="faculty-search" type="search" value={query} onChange={event => setQuery(event.target.value)}
              className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-3 text-base text-foreground" />
          </div>
        </div>
        <div>
          <label htmlFor="faculty-department" className="mb-2 block text-sm font-semibold text-foreground">{t('facultyDirectory.department')}</label>
          <div className="relative">
            <select id="faculty-department" value={departmentFilter} onChange={event => setDepartmentFilter(event.target.value)}
              className="w-full appearance-none rounded-xl border border-border bg-background py-3 pl-3 pr-10 text-base text-foreground">
              <option value="all">{t('facultyDirectory.allDepartments')}</option>
              {departmentOptions.map(([id, department]) => <option key={id} value={id}>{department}</option>)}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-3.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
      {activeTab === 'unconfirmed' && <p className="mb-6 rounded-xl border border-border bg-secondary p-4 text-base text-foreground">{t('facultyDirectory.categoryUnconfirmed')}</p>}
      <p aria-live="polite" role="status" className="mb-6 text-sm text-muted-foreground">{t('facultyDirectory.resultCount', { count: filtered.length })}</p>
      {filtered.length === 0 && <p className="rounded-xl border border-dashed border-border p-8 text-center text-foreground">{t('facultyDirectory.noResults')}</p>}
      {isEmployees ? filtered.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse text-left text-base">
            <caption className="sr-only">{t('facultyDirectory.nonTeaching')}</caption>
            <thead className="bg-secondary text-foreground"><tr>
              <th scope="col" className="p-4">{t('facultyDirectory.name')}</th>
              <th scope="col" className="p-4">{t('facultyDirectory.department')}</th>
              <th scope="col" className="p-4">{t('facultyDirectory.designation')}</th>
            </tr></thead>
            <tbody>{filtered.map(member => <tr key={member.sl} className="border-t border-border bg-background text-foreground">
              <th scope="row" className="p-4 font-medium">{member.name}</th>
              <td className="p-4">{member.department}</td><td className="p-4">{member.designation}</td>
            </tr>)}</tbody>
          </table>
        </div>
      ) : [...groups.entries()].map(([department, members], index) => (
        <section key={department} aria-labelledby={`faculty-group-${index}`} className="mb-10">
          <div className="mb-5 flex items-center gap-3 border-b border-border pb-3">
            <h2 id={`faculty-group-${index}`} className="text-2xl font-bold text-foreground">{department}</h2>
            <span className="rounded-full bg-secondary px-3 py-1 text-sm text-foreground">{members.length}</span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {members.map(member => <FacultyCard key={member.id} faculty={member} />)}
          </div>
        </section>
      ))}
    </main>
  );
};
export default StaffCouncil;
