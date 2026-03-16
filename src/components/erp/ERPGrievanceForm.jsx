import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Send, CheckCircle2, X, Clock, User } from 'lucide-react';
import ERPSurfaceCard from './ERPSurfaceCard';
import ERPButton from './ERPButton';

const grievanceTypes = [
  { value: 'room', label: 'Room Related', description: 'Maintenance, cleanliness' },
  { value: 'mess', label: 'Mess/Food', description: 'Food quality, hygiene' },
  { value: 'hostel', label: 'Hostel Administration', description: 'Rules, permissions' },
  { value: 'safety', label: 'Safety & Security', description: 'Security concerns' },
  { value: 'other', label: 'Other', description: 'Any other concerns' },
];

const priorityLevels = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'urgent', label: 'Urgent' },
];

const ERPGrievanceForm = ({ onSubmit, onClose, studentInfo }) => {
  const [formData, setFormData] = useState({
    grievance_type: '',
    priority: 'medium',
    subject: '',
    description: '',
    preferred_contact: 'email',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.grievance_type) newErrors.grievance_type = 'Required';
    if (!formData.subject.trim()) newErrors.subject = 'Required';
    if (!formData.description.trim() || formData.description.length < 20) newErrors.description = 'Min 20 chars';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await onSubmit?.(formData);
      setSubmitted(true);
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-8">
        <ERPSurfaceCard hover={false} className="p-8">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mx-auto w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </motion.div>
          <h3 className="mt-6 text-xl font-semibold text-slate-900">Grievance Submitted</h3>
          <p className="mt-2 text-sm text-slate-500">Your grievance has been submitted successfully.</p>
          <div className="mt-6">
            <ERPButton variant="secondary" onClick={onClose}>Close</ERPButton>
          </div>
        </ERPSurfaceCard>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Submit Grievance</h2>
          <p className="mt-1 text-sm text-slate-500">We take your concerns seriously</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:bg-slate-100">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {studentInfo && (
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <User className="h-4 w-4" />
            <span className="font-medium">{studentInfo.name}</span>
            <span className="text-slate-400">•</span>
            <span>{studentInfo.application_number}</span>
          </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Grievance Type <span className="text-red-500">*</span>
          </label>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {grievanceTypes.map((type) => (
              <motion.button
                key={type.value}
                type="button"
                onClick={() => handleChange('grievance_type', type.value)}
                className={`relative rounded-xl border p-3 text-left transition-all ${
                  formData.grievance_type === type.value
                    ? 'border-cyan-300 bg-cyan-50 ring-2 ring-cyan-200'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <p className="text-sm font-medium text-slate-900">{type.label}</p>
                <p className="mt-0.5 text-xs text-slate-500">{type.description}</p>
              </motion.button>
            ))}
          </div>
          {errors.grievance_type && <p className="mt-1 text-xs text-red-500">{errors.grievance_type}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700">Priority Level</label>
            <select
              value={formData.priority}
              onChange={(e) => handleChange('priority', e.target.value)}
              className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm"
            >
              {priorityLevels.map((level) => (
                <option key={level.value} value={level.value}>{level.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Preferred Contact</label>
            <select
              value={formData.preferred_contact}
              onChange={(e) => handleChange('preferred_contact', e.target.value)}
              className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="both">Both</option>
            </select>
          </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Subject <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            placeholder="Brief summary"
            className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm"
          />
          {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Description <span className="text-red-500">*</span></label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Describe in detail..."
            rows={5}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-4 text-sm"
          />
          {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
        </div>

        {formData.priority === 'urgent' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border border-red-200 bg-red-50 p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-sm font-medium text-red-800">Urgent Grievance</p>
                <p className="mt-1 text-xs text-red-600">Contact warden immediately for urgent matters.</p>
              </div>
          </motion.div>
        )}

        <div className="flex gap-3 pt-2">
          {onClose && <ERPButton type="button" variant="secondary" onClick={onClose}>Cancel</ERPButton>}
          <ERPButton type="submit" disabled={isSubmitting} className="flex-1">
            <Send className="h-4 w-4" />
            {isSubmitting ? 'Submitting...' : 'Submit Grievance'}
          </ERPButton>
        </div>
      </form>
    </motion.div>
  );
};

export default ERPGrievanceForm;
