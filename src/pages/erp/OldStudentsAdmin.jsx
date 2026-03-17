import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ERPSurfaceCard from '../../components/erp/ERPSurfaceCard';
import ERPButton from '../../components/erp/ERPButton';
import ERPLoadingSkeleton from '../../components/erp/ERPLoadingSkeleton';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';

const API_BASE = '/api/admin';

const StatusBadge = ({ status }) => {
  const colors = {
    ACTIVE: 'bg-green-100 text-green-800',
    LEFT: 'bg-yellow-100 text-yellow-800',
    SUSPENDED: 'bg-red-100 text-red-800',
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

const OldStudentsAdmin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [formData, setFormData] = useState({
    hostel_id: '',
    student_name: '',
    admission_id: '',
    roll_number: '',
    course_name: '',
    session: '',
    mobile_number: '',
    email: '',
    category: '',
    hostel_name: '',
    block_name: '',
    room_number: '',
    bed_number: '',
    old_student_status: 'ACTIVE',
  });
  const [bulkFile, setBulkFile] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);

  const search = searchParams.get('search') || '';
  const hostel = searchParams.get('hostel') || '';
  const statusFilter = searchParams.get('status') || '';

  useEffect(() => {
    fetchOldStudents();
  }, [search, hostel, statusFilter]);

  const fetchOldStudents = async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        search,
        'hostel_name': hostel,
        status: statusFilter,
      });
      const response = await axios.get(`${API_BASE}/old-students?${params}`);
      setStudents(response.data.items);
    } catch (error) {
      console.error('Error fetching old students:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ search: e.target.search.value, hostel, status: statusFilter });
  };

  const openModal = (student = null) => {
    if (student) {
      setEditMode(true);
      setCurrentStudent(student);
      setFormData({
        hostel_id: student.hostel_id,
        student_name: student.student_name,
        admission_id: student.admission_id || '',
        roll_number: student.roll_number || '',
        course_name: student.course_name,
        session: student.session,
        mobile_number: student.mobile_number,
        email: student.email || '',
        category: student.category || '',
        hostel_name: student.hostel_name || '',
        block_name: student.block_name || '',
        room_number: student.room_number || '',
        bed_number: student.bed_number || '',
        old_student_status: student.old_student_status,
      });
    } else {
      setEditMode(false);
      setCurrentStudent(null);
      setFormData({
        hostel_id: '',
        student_name: '',
        admission_id: '',
        roll_number: '',
        course_name: '',
        session: '',
        mobile_number: '',
        email: '',
        category: '',
        hostel_name: '',
        block_name: '',
        room_number: '',
        bed_number: '',
        old_student_status: 'ACTIVE',
      });
    }
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    try {
      const endpoint = editMode ? `${API_BASE}/old-students/${currentStudent.id}` : `${API_BASE}/old-students`;
      const method = editMode ? 'put' : 'post';
      await axios[method](endpoint, formData);
      setModalOpen(false);
      fetchOldStudents();
    } catch (error) {
      console.error('Error saving student:', error);
      alert(error.response?.data?.detail || 'Error saving student');
    }
  };

  const deleteStudent = async (id) => {
    if (!confirm('Are you sure you want to delete this student?')) return;
    try {
      await axios.delete(`${API_BASE}/old-students/${id}`);
      fetchOldStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleBulkUpload = async (e) => {
    e.preventDefault();
    if (!bulkFile) return;
    
    const formDataUpload = new FormData();
    formDataUpload.append('file', bulkFile);
    
    try {
      const response = await axios.post(`${API_BASE}/old-students/bulk-upload`, formDataUpload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadResult(response.data);
      fetchOldStudents();
      setBulkFile(null);
    } catch (error) {
      console.error('Bulk upload error:', error);
      alert(error.response?.data?.message || 'Bulk upload failed');
    }
  };

  const columns = [
    { key: 'hostel_id', label: 'Hostel ID' },
    { key: 'student_name', label: 'Student Name' },
    { key: 'course_name', label: 'Course' },
    { key: 'session', label: 'Session' },
    { 
      key: 'allocation', 
      label: 'Hostel/Room/Bed', 
      render: (student) => (
        <span>
          {student.hostel_name && (
            <div className="text-sm">
              {student.hostel_name}
              {student.block_name && `, ${student.block_name}`}
              {student.room_number && ` R${student.room_number}`}
              {student.bed_number && ` B${student.bed_number}`}
            </div>
          )}
        </span>
      )
    },
    { key: 'old_student_status', label: 'Status', render: (student) => <StatusBadge status={student.old_student_status} /> },
    {
      key: 'actions',
      label: 'Actions',
      render: (student) => (
        <div className="flex space-x-2">
          <button onClick={() => openModal(student)} className="text-blue-600 hover:text-blue-800">Edit</button>
          <button onClick={() => deleteStudent(student.id)} className="text-red-600 hover:text-red-800">Delete</button>
        </div>
      )
    },
  ];

  return (
    <div className="erp-container">
      <Head title="Old Students Management - Hostel ERP" />
      
      <ERPSurfaceCard className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Old Students Management</h1>
          <div className="flex space-x-3">
            <ERPButton onClick={() => openModal()}>Add Student</ERPButton>
            <label className="cursor-pointer">
              <ERPButton as="span">Bulk Upload</ERPButton>
              <input 
                type="file" 
                accept=".xlsx,.xls,.csv" 
                onChange={(e) => setBulkFile(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <form onSubmit={handleSearch} className="mb-6 flex gap-4 flex-wrap">
          <input
            name="search"
            defaultValue={search}
            placeholder="Search by ID or name..."
            className="border rounded px-3 py-2 w-64"
          />
          <input
            name="hostel"
            defaultValue={hostel}
            placeholder="Filter by hostel..."
            className="border rounded px-3 py-2 w-48"
          />
          <select
            name="status"
            defaultValue={statusFilter}
            className="border rounded px-3 py-2"
          >
            <option value="">All Status</option>
            <option value="ACTIVE">Active</option>
            <option value="LEFT">Left</option>
            <option value="SUSPENDED">Suspended</option>
          </select>
          <ERPButton type="submit">Search</ERPButton>
        </form>
      </ERPSurfaceCard>

      {uploadResult && (
        <ERPSurfaceCard className="mb-6 bg-green-50 border-green-200">
          <pre className="text-sm">{JSON.stringify(uploadResult, null, 2)}</pre>
          <ERPButton onClick={() => setUploadResult(null)} className="mt-2">Close</ERPButton>
        </ERPSurfaceCard>
      )}

      <ERPSurfaceCard>
        <div className="overflow-x-auto">
          {loading ? (
            <ERPLoadingSkeleton rows={8} />
          ) : (
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  {columns.map((col) => (
                    <th key={col.key} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    {columns.map((col) => (
                      <td key={col.key} className="px-4 py-4 whitespace-nowrap">
                        {col.render ? col.render(student) : student[col.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </ERPSurfaceCard>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <ERPSurfaceCard className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">{editMode ? 'Edit Student' : 'Add Old Student'}</h2>
            <form onSubmit={saveStudent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="hostel_id" value={formData.hostel_id} onChange={handleInputChange} placeholder="Hostel ID *" className="border rounded px-3 py-2" required />
              <input name="student_name" value={formData.student_name} onChange={handleInputChange} placeholder="Student Name *" className="border rounded px-3 py-2" required />
              <input name="admission_id" value={formData.admission_id} onChange={handleInputChange} placeholder="Admission ID" className="border rounded px-3 py-2" />
              <input name="roll_number" value={formData.roll_number} onChange={handleInputChange} placeholder="Roll Number" className="border rounded px-3 py-2" />
              <input name="course_name" value={formData.course_name} onChange={handleInputChange} placeholder="Course Name *" className="border rounded px-3 py-2" required />
              <input name="session" value={formData.session} onChange={handleInputChange} placeholder="Session *" className="border rounded px-3 py-2" required />
              <input name="mobile_number" value={formData.mobile_number} onChange={handleInputChange} placeholder="Mobile *" className="border rounded px-3 py-2" required />
              <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="border rounded px-3 py-2" />
              <input name="category" value={formData.category} onChange={handleInputChange} placeholder="Category" className="border rounded px-3 py-2" />
              <input name="hostel_name" value={formData.hostel_name} onChange={handleInputChange} placeholder="Hostel" className="border rounded px-3 py-2" />
              <input name="block_name" value={formData.block_name} onChange={handleInputChange} placeholder="Block" className="border rounded px-3 py-2" />
              <input name="room_number" value={formData.room_number} onChange={handleInputChange} placeholder="Room" className="border rounded px-3 py-2" />
              <input name="bed_number" value={formData.bed_number} onChange={handleInputChange} placeholder="Bed (B1, B2)" className="border rounded px-3 py-2" />
              <select name="old_student_status" value={formData.old_student_status} onChange={handleInputChange} className="border rounded px-3 py-2">
                <option value="ACTIVE">ACTIVE</option>
                <option value="LEFT">LEFT</option>
                <option value="SUSPENDED">SUSPENDED</option>
              </select>
              <div className="md:col-span-2 flex gap-2 justify-end">
                <ERPButton type="button" variant="secondary" onClick={() => setModalOpen(false)}>Cancel</ERPButton>
                <ERPButton type="submit">Save</ERPButton>
              </div>
            </form>
          </ERPSurfaceCard>
        </div>
      )}

      <style jsx>{`
        .erp-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default OldStudentsAdmin;

