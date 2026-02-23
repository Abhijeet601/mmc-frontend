import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Bell, Download, Link as LinkIcon, Pin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPublicNotices } from '@/services/notifications';
import { toR2AssetUrl } from '@/lib/r2Assets';

const NoticeBoardPage = ({
  title,
  subtitle,
  category,
  emptyMessage,
  showAdminButton = false,
  pageTitle,
  metaDescription,
}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchItems = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getPublicNotices({ publishTo: category, limit: 200 });
      setItems(data);
    } catch (err) {
      console.error('Error loading board items:', err);
      setError(err?.message || 'Failed to load data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [category]);

  const boardTitle = pageTitle || `${title} - Magadh Mahila College`;
  const boardDescription = metaDescription || subtitle;

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      const bDate = new Date(b.publishDate || b.createdAt).getTime();
      const aDate = new Date(a.publishDate || a.createdAt).getTime();
      return bDate - aDate;
    });
  }, [items]);

  const handleDownload = (fileUrl, fileName) => {
    if (!fileUrl) return;
    const link = document.createElement('a');
    link.href = toR2AssetUrl(fileUrl);
    link.download = fileName || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{boardTitle}</title>
        <meta name="description" content={boardDescription} />
      </Helmet>

      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Bell className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
              </div>
            </div>
            {showAdminButton && (
              <Link
                to="/admin"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-16 text-gray-600">Loading...</div>
        ) : error ? (
          <div className="text-center py-16 text-red-600">{error}</div>
        ) : sortedItems.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
            <Bell className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">{emptyMessage}</h3>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {sortedItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                      {item.pinned && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Pin className="w-3 h-3 mr-1" />
                          Pinned
                        </span>
                      )}
                    </div>
                    {item.description && <p className="mt-2 text-gray-700">{item.description}</p>}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 rounded-md border border-blue-200 text-blue-700 hover:bg-blue-50 text-sm"
                      >
                        <LinkIcon className="w-4 h-4 mr-1" />
                        Open Link
                      </a>
                    )}
                    {item.fileUrl && (
                      <button
                        type="button"
                        onClick={() => handleDownload(item.fileUrl, item.fileName)}
                        className="inline-flex items-center px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeBoardPage;
