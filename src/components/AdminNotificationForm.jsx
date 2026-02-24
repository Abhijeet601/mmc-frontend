import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  X,
  Save,
  FileText,
  Link as LinkIcon,
  Pin,
  Calendar,
  Type,
  AlignLeft,
  Layers3,
} from 'lucide-react';
import { NOTICE_CATEGORIES, PUBLISH_TO_OPTIONS } from '@/services/notifications';

const toDatetimeLocalValue = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
};

const formContainerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
      staggerChildren: 0.06,
    },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

const AdminNotificationForm = ({ notification, onSave, onCancel }) => {
  const isEditing = Boolean(notification?.id);

  const [formData, setFormData] = useState({
    title: notification?.title || '',
    description: notification?.description || '',
    link: notification?.link || '',
    publish_to: notification?.publish_to || notification?.publishTo
      ? [notification?.publish_to || notification?.publishTo]
      : [NOTICE_CATEGORIES.NOTIFICATIONS],
    pinned: notification?.pinned || false,
    published: notification?.published ?? true,
    publishDate: toDatetimeLocalValue(notification?.publishDate || notification?.publish_date || ''),
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [removeExistingFile, setRemoveExistingFile] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const currentFileName = selectedFile?.name || notification?.fileName || notification?.file_name || '';
  const selectedPublishCount = formData.publish_to?.length || 0;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'publish_to') {
      const selectedValues = e.target.multiple
        ? Array.from(e.target.selectedOptions, (option) => option.value)
        : [value];

      setFormData((prev) => ({
        ...prev,
        publish_to: selectedValues.filter(Boolean),
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const name = file.name.toLowerCase();
    const isPdf = file.type === 'application/pdf' || name.endsWith('.pdf');
    const isImage = file.type.startsWith('image/') || /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(name);

    if (!isPdf && !isImage) {
      alert('Please select a valid file (PDF or image)');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setSelectedFile(file);
    setRemoveExistingFile(false);
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (notification?.fileUrl || notification?.file_url) {
      setRemoveExistingFile(true);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert('Title is required');
      return;
    }

    if (!Array.isArray(formData.publish_to) || formData.publish_to.length === 0) {
      alert('Publish To is required');
      return;
    }

    setIsUploading(true);
    try {
      await onSave({
        ...formData,
        publish_to: isEditing ? formData.publish_to[0] : formData.publish_to,
        file: selectedFile,
        removeFile: removeExistingFile,
      });
    } catch (error) {
      console.error('Error saving notice:', error);
      alert(error?.message || 'Failed to save notice');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto max-w-3xl">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pointer-events-none absolute -top-8 left-12 h-32 w-32 rounded-full bg-sky-300/30 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="pointer-events-none absolute -bottom-8 right-16 h-36 w-36 rounded-full bg-amber-300/30 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.35)] backdrop-blur">
        <div className="border-b border-slate-200 bg-gradient-to-r from-sky-50 via-white to-amber-50 px-6 py-5 md:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Admin Publisher</p>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
                {notification ? 'Edit Notice' : 'Create New Notice'}
              </h2>
              <p className="mt-1 text-sm text-slate-600">Craft a polished notice and publish it instantly.</p>
            </div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={onCancel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:text-slate-700"
              aria-label="Close form"
            >
              <X className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        <motion.form
          variants={formContainerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="space-y-6 px-6 py-7 md:px-8"
        >
          <motion.div variants={formItemVariants} className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Type className="h-4 w-4 text-sky-600" />
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                placeholder="Enter title"
                required
              />
            </div>

            <div>
              <label className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Layers3 className="h-4 w-4 text-sky-600" />
                Publish To *
              </label>
              <select
                name="publish_to"
                value={isEditing ? (formData.publish_to[0] || '') : formData.publish_to}
                onChange={handleInputChange}
                multiple={!isEditing}
                size={!isEditing ? PUBLISH_TO_OPTIONS.length : 1}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                required
              >
                {PUBLISH_TO_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {!isEditing && (
                <p className="mt-2 text-xs text-slate-500">
                  Hold Ctrl (Windows) or Cmd (Mac) to select multiple options. Selected: {selectedPublishCount}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Calendar className="h-4 w-4 text-sky-600" />
                Publish Date
              </label>
              <input
                type="datetime-local"
                name="publishDate"
                value={formData.publishDate}
                onChange={handleInputChange}
                className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                <AlignLeft className="h-4 w-4 text-sky-600" />
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                placeholder="Write a short summary for this notice..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                <LinkIcon className="h-4 w-4 text-sky-600" />
                Link (optional)
              </label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                placeholder="https://example.com"
              />
            </div>
          </motion.div>

          <motion.div variants={formItemVariants} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 md:p-5">
            <label className="mb-3 block text-sm font-semibold text-slate-700">Upload File (optional)</label>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              accept=".pdf,image/*"
              className="hidden"
            />
            <motion.button
              type="button"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => fileInputRef.current?.click()}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-sky-300 bg-white px-4 py-4 text-sm font-semibold text-sky-700 transition hover:border-sky-500 hover:bg-sky-50"
            >
              <Upload className="h-4 w-4" />
              Choose File
            </motion.button>

            {currentFileName && !removeExistingFile && (
              <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2">
                <div className="flex min-w-0 items-center gap-2">
                  <FileText className="h-4 w-4 shrink-0 text-slate-500" />
                  <span className="truncate text-sm text-slate-700">{currentFileName}</span>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="rounded-lg p-1 text-rose-500 transition hover:bg-rose-50 hover:text-rose-700"
                  aria-label="Remove file"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
            <p className="mt-2 text-xs text-slate-500">Supported: PDF, JPG, JPEG, PNG, WEBP and other images (Max 10MB).</p>
          </motion.div>

          <motion.div variants={formItemVariants} className="grid gap-3 md:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-sky-300">
              <input
                type="checkbox"
                id="pinned"
                name="pinned"
                checked={formData.pinned}
                onChange={handleInputChange}
                className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />
              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                <Pin className="h-4 w-4 text-amber-600" />
                Pin this notice
              </span>
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-sky-300">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleInputChange}
                className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />
              <span className="text-sm font-medium text-slate-700">Publish now</span>
            </label>
          </motion.div>

          <motion.div variants={formItemVariants} className="flex flex-col-reverse justify-end gap-3 pt-2 sm:flex-row">
            <motion.button
              type="button"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCancel}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ y: -1, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={isUploading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:from-sky-700 hover:to-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save className="h-4 w-4" />
              {isUploading ? 'Saving...' : 'Save Notice'}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default AdminNotificationForm;
