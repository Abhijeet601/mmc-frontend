import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Bell, Edit, Eye, EyeOff, LogOut, Plus, Trash2 } from 'lucide-react';
import AdminNotificationForm from '@/components/AdminNotificationForm';
import {
  addNotification,
  clearAdminToken,
  deleteNotification,
  getNotifications,
  isAdminAuthenticated,
  loginAdmin,
  PUBLISH_TO_OPTIONS,
  updateNotification,
} from '@/services/notifications';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  const [notifications, setNotifications] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNotification, setEditingNotification] = useState(null);
  const [loading, setLoading] = useState(false);

  const publishLabelMap = useMemo(
    () =>
      PUBLISH_TO_OPTIONS.reduce((acc, option) => {
        acc[option.value] = option.label;
        return acc;
      }, {}),
    [],
  );

  const loadNotifications = async () => {
    setLoading(true);
    try {
      const allNotifications = await getNotifications();
      setNotifications(allNotifications);
      setAuthError('');
    } catch (error) {
      console.error('Error loading notices:', error);
      const message = error?.message || 'Unable to load notices';
      if (message.toLowerCase().includes('invalid') || message.toLowerCase().includes('expired')) {
        clearAdminToken();
        setIsAuthenticated(false);
        setAuthError('Session expired. Please login again.');
      } else {
        setAuthError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAdminAuthenticated()) return;
    setIsAuthenticated(true);
    loadNotifications();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    setLoading(true);
    try {
      await loginAdmin({ username: username.trim(), password });
      setIsAuthenticated(true);
      setPassword('');
      await loadNotifications();
    } catch (error) {
      setAuthError(error?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    clearAdminToken();
    setIsAuthenticated(false);
    setUsername('admin');
    setPassword('');
    setNotifications([]);
    setShowForm(false);
    setEditingNotification(null);
  };

  const handleSaveNotification = async (notificationData) => {
    setLoading(true);
    try {
      if (editingNotification) {
        await updateNotification(editingNotification.id, notificationData);
      } else {
        await addNotification(notificationData);
      }
      await loadNotifications();
      setShowForm(false);
      setEditingNotification(null);
    } catch (error) {
      console.error('Error saving notice:', error);
      alert(error?.message || 'Error saving notice');
    } finally {
      setLoading(false);
    }
  };

  const handleEditNotification = (notification) => {
    setEditingNotification(notification);
    setShowForm(true);
  };

  const handleDeleteNotification = async (id) => {
    if (!window.confirm('Delete this notice?')) return;
    try {
      await deleteNotification(id);
      await loadNotifications();
    } catch (error) {
      console.error('Error deleting notice:', error);
      alert(error?.message || 'Unable to delete notice');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Helmet>
          <title>Admin Login - Magadh Mahila College</title>
        </Helmet>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8"
        >
          <div>
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <Bell className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <input
                name="username"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {authError && <p className="text-sm text-red-600">{authError}</p>}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Login'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Admin Dashboard - Magadh Mahila College</title>
      </Helmet>

      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Bell className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Notice Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setShowForm(true);
                  setEditingNotification(null);
                }}
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Notice
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {showForm ? (
          <AdminNotificationForm
            notification={editingNotification}
            onSave={handleSaveNotification}
            onCancel={() => {
              setShowForm(false);
              setEditingNotification(null);
            }}
          />
        ) : (
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              {loading ? (
                <div className="px-6 py-8 text-center text-gray-500">Loading...</div>
              ) : notifications.length === 0 ? (
                <div className="px-6 py-8 text-center text-gray-500">No notices found.</div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {notifications.map((notification) => (
                    <li key={notification.id} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center flex-wrap gap-2">
                            <p className="text-lg font-medium text-gray-900 truncate">{notification.title}</p>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {publishLabelMap[notification.publish_to] || notification.publish_to}
                            </span>
                            {notification.pinned && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Pinned
                              </span>
                            )}
                            {!notification.published && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                Draft
                              </span>
                            )}
                          </div>

                          {notification.description && (
                            <p className="mt-1 text-sm text-gray-600 line-clamp-2">{notification.description}</p>
                          )}

                          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <span>Created: {formatDate(notification.createdAt)}</span>
                            {notification.publishDate && <span>Publish Date: {formatDate(notification.publishDate)}</span>}
                            {notification.fileName && <span>File: {notification.fileName}</span>}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => handleEditNotification(notification)}
                            className="text-blue-600 hover:text-blue-900 p-1"
                            title="Edit"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteNotification(notification.id)}
                            className="text-red-600 hover:text-red-900 p-1"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {authError && <p className="mt-4 text-sm text-red-600">{authError}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
