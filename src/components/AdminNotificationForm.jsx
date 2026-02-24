import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Save, FileText, Link as LinkIcon, Pin, Calendar } from 'lucide-react';
import { NOTICE_CATEGORIES, PUBLISH_TO_OPTIONS } from '@/services/notifications';

const toDatetimeLocalValue = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
};

const AdminNotificationForm = ({ notification, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: notification?.title || '',
    description: notification?.description || '',
    link: notification?.link || '',
    publish_to: notification?.publish_to || notification?.publishTo || NOTICE_CATEGORIES.NOTIFICATIONS,
    pinned: notification?.pinned || false,
    published: notification?.published ?? true,
    publishDate: toDatetimeLocalValue(notification?.publishDate || notification?.publish_date || ''),
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [removeExistingFile, setRemoveExistingFile] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const currentFileName = selectedFile?.name || notification?.fileName || notification?.file_name || '';

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const normalizedValue =
      name === 'publish_to' && typeof value === 'string'
        ? value.split(',')[0].trim()
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : normalizedValue,
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

    if (!formData.publish_to) {
      alert('Publish To is required');
      return;
    }

    setIsUploading(true);
    try {
      await onSave({
        ...formData,
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {notification ? 'Edit Notice' : 'Add New Notice'}
        </h2>
        <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Publish To *</label>
          <select
            name="publish_to"
            value={formData.publish_to}
            onChange={handleInputChange}
            multiple={false}
            size={1}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {PUBLISH_TO_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter description"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Link (optional)</label>
          <div className="relative">
            <LinkIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload File (optional)</label>
          <div className="space-y-2">
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              accept=".pdf,image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Upload className="w-4 h-4 mr-2" />
              Choose File
            </button>

            {currentFileName && !removeExistingFile && (
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">{currentFileName}</span>
                </div>
                <button type="button" onClick={removeFile} className="text-red-500 hover:text-red-700">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">Supported: PDF, JPG, JPEG, PNG, WEBP and other images (Max 10MB)</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="pinned"
              name="pinned"
              checked={formData.pinned}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="pinned" className="ml-2 flex items-center text-sm text-gray-700">
              <Pin className="w-4 h-4 mr-1" />
              Pin this notice
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              name="published"
              checked={formData.published}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="published" className="ml-2 text-sm text-gray-700">
              Publish now
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date (optional)</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="datetime-local"
                name="publishDate"
                value={formData.publishDate}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isUploading}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <Save className="w-4 h-4 mr-2" />
            {isUploading ? 'Saving...' : 'Save Notice'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AdminNotificationForm;
