import React, { useDeferredValue, useEffect, useState } from 'react';
import {
  AlertCircle,
  Copy,
  ExternalLink,
  FileText,
  Info,
  Link2,
  Search,
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

export const documentRepositoryDocuments = [
  {
    title: 'AQAR 2022-23',
    category: 'AQAR',
    oldLink: 'http://magadhmahilacollege.org/wp-content/uploads/2024/12/AQAR-2022-23.pdf',
    newLink: '/documents/IQAC/NAAC/AQAR/AQAR-2022-23.pdf',
    tag: 'Updated',
  },
  {
    title: 'AQAR 2021-22',
    category: 'AQAR',
    oldLink: 'http://magadhmahilacollege.org/wp-content/uploads/2023/06/AQAR-2021-22.pdf',
    newLink: '/documents/IQAC/NAAC/AQAR/AQAR-2021-22.pdf',
  },
  {
    title: 'AQAR 2020-21',
    category: 'AQAR',
    oldLink: 'http://magadhmahilacollege.org/wp-content/uploads/2022/04/AQAR-2020-21.pdf',
    newLink: '/documents/IQAC/NAAC/AQAR/AQAR-2020-21.pdf',
  },
  {
    title: 'AQAR 2019-20',
    category: 'AQAR',
    oldLink: 'https://magadhmahilacollege.org/wp-content/uploads/2022/01/AQAR-2019-20-resubmitted-2.pdf',
    newLink: '/documents/IQAC/NAAC/AQAR/AQAR-2019-20-resubmitted-2.pdf',
  },
  {
    title: 'Audit Report',
    category: 'Reports',
    oldLink: 'https://magadhmahilacollege.org/pdf/audit_report.pdf',
    newLink: '/documents/mmcaudit.pdf',
    tag: 'Updated',
  },
  {
    title: 'Best Practices',
    category: 'Reports',
    oldLink: 'https://magadhmahilacollege.org/best-practices-2023-24/',
    newLink: '/documents/IQAC/Best-practices.pdf',
    tag: 'Updated',
  },
  {
    title: 'SSS Report',
    category: 'Reports',
    oldLink: 'https://magadhmahilacollege.org/wp-content/uploads/2025/01/SSS_23-24_250104_131730.pdf',
    newLink: '/documents/IQAC/Student Satisfaction Survey/SSS-report.pdf',
    tag: 'Updated',
  },
  {
    title: 'SSS Document',
    category: 'Reports',
    oldLink: 'https://magadhmahilacollege.org/sss-document',
    newLink: '/documents/IQAC/Student Satisfaction Survey/mmc_student1.pdf',
  },
  {
    title: 'Project Internship 2023-24',
    category: 'Academic',
    oldLink: 'https://magadhmahilacollege.org/project%20internship-field-work/',
    newLink: '/documents/IQAC/Project Internship & Field Work/Project-Internship-Field-Work-23-24.pdf',
    tag: 'Updated',
  },
  {
    title: 'Project Internship 2022-23',
    category: 'Academic',
    oldLink: 'https://magadhmahilacollege.org/project%20internship-field-work/',
    newLink: '/documents/IQAC/Project Internship & Field Work/Internship_project_22-23.pdf',
  },
  {
    title: 'Project Internship 2021-22',
    category: 'Academic',
    oldLink: 'https://magadhmahilacollege.org/project%20internship-field-work/',
    newLink: '/documents/IQAC/Project Internship & Field Work/Project-internship-field-work-2021-22-1.pdf',
  },
  {
    title: 'Project Internship 2019-20',
    category: 'Academic',
    oldLink: 'https://magadhmahilacollege.org/project%20internship-field-work/',
    newLink: '/documents/IQAC/Project Internship & Field Work/Project-Internship-Field-Work-Session-2019-2020.pdf',
  },
  {
    title: 'NCC Report 2023-24',
    category: 'Activities',
    oldLink: 'https://magadhmahilacollege.org/extension-activities-nss-ncc/',
    newLink: '/documents/IQAC/NCC/NCC-Report-2023-24.pdf',
    tag: 'Updated',
  },
  {
    title: 'NSS Report 2023-24',
    category: 'Activities',
    oldLink: 'https://magadhmahilacollege.org/extension-activities-nss-ncc/',
    newLink: '/documents/IQAC/NSS/NSS-Report-2023-24.pdf',
    tag: 'Updated',
  },
];

export const documentLinkMap = Object.freeze(
  Object.fromEntries(
    documentRepositoryDocuments.map(({ oldLink, newLink }) => [oldLink, newLink]),
  ),
);

export const documentRepositoryCategories = ['AQAR', 'Academic', 'Reports', 'Activities'];

const availabilityCache = new Map();

const fallbackCopyText = async (value) => {
  if (typeof document === 'undefined') return false;

  const textArea = document.createElement('textarea');
  textArea.value = value;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  textArea.style.opacity = '0';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let copied = false;

  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }

  document.body.removeChild(textArea);
  return copied;
};

const resolveDocumentLink = (documentItem, repositoryLinkMap) =>
  documentItem.newLink || repositoryLinkMap[documentItem.oldLink] || '';

const checkDocumentAvailability = async (newLink) => {
  if (!newLink) return false;
  if (availabilityCache.has(newLink)) return availabilityCache.get(newLink);

  const encodedLink = encodeURI(newLink);
  let isAvailable = false;

  try {
    const headResponse = await fetch(encodedLink, {
      method: 'HEAD',
      cache: 'no-store',
    });

    if (headResponse.ok) {
      isAvailable = true;
    } else if (headResponse.status === 403 || headResponse.status === 405) {
      const getResponse = await fetch(encodedLink, {
        method: 'GET',
        headers: { Range: 'bytes=0-0' },
        cache: 'no-store',
      });

      isAvailable = getResponse.ok;
    }
  } catch {
    isAvailable = false;
  }

  availabilityCache.set(newLink, isAvailable);
  return isAvailable;
};

function DocumentCard({
  documentItem,
  newLink,
  isAvailable,
  isChecking,
  onCopyOldLink,
  onOpenDocument,
}) {
  const isUnavailable = !newLink || isAvailable === false;
  const viewLabel = isUnavailable
    ? 'File not available'
    : isChecking
      ? 'Checking file...'
      : 'View Document';

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FileText className="h-6 w-6" />
          </div>

          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
                {documentItem.category}
              </span>

              {documentItem.tag ? (
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                  {documentItem.tag}
                </span>
              ) : null}
            </div>

            <h3 className="text-lg font-bold text-slate-900">{documentItem.title}</h3>

            {isUnavailable ? (
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                <AlertCircle className="h-4 w-4" />
                File not available
              </div>
            ) : null}
          </div>
        </div>

        <span
          className="inline-flex flex-shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
          title="For reference only"
        >
          <Info className="h-3.5 w-3.5" />
          For reference only
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onOpenDocument(newLink, isAvailable)}
          disabled={isUnavailable}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
            isUnavailable
              ? 'cursor-not-allowed bg-slate-200 text-slate-500'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
        >
          <ExternalLink className="h-4 w-4" />
          {viewLabel}
        </button>

        <button
          type="button"
          onClick={() => onCopyOldLink(documentItem.oldLink)}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
        >
          <Copy className="h-4 w-4" />
          Copy Old Link
        </button>
      </div>

      <div
        className="mt-5 flex-1 rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
        role="note"
        aria-label="Old URL for reference only"
      >
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          <Link2 className="h-3.5 w-3.5" />
          Old URL
        </div>

        <p
          className="cursor-default break-all text-sm leading-6 text-slate-500"
          title="For reference only"
        >
          {documentItem.oldLink}
        </p>
      </div>
    </article>
  );
}

export default function DocumentRepository({
  documents = documentRepositoryDocuments,
  heading = 'NAAC Document Repository',
  description = 'Browse legacy NAAC reference URLs while opening the current internal document paths managed by the application.',
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [availabilityState, setAvailabilityState] = useState({});
  const [checkingState, setCheckingState] = useState({});

  const deferredSearchTerm = useDeferredValue(searchTerm.trim().toLowerCase());
  const repositoryLinkMap = {
    ...documentLinkMap,
    ...Object.fromEntries(documents.map(({ oldLink, newLink }) => [oldLink, newLink])),
  };

  const resolvedDocuments = documents.map((documentItem) => ({
    ...documentItem,
    newLink: resolveDocumentLink(documentItem, repositoryLinkMap),
  }));

  const categoryButtons = ['All'];
  documentRepositoryCategories.forEach((category) => {
    if (resolvedDocuments.some((documentItem) => documentItem.category === category)) {
      categoryButtons.push(category);
    }
  });

  resolvedDocuments.forEach((documentItem) => {
    if (!categoryButtons.includes(documentItem.category)) {
      categoryButtons.push(documentItem.category);
    }
  });

  const filteredDocuments = resolvedDocuments.filter((documentItem) => {
    const matchesCategory =
      selectedCategory === 'All' || documentItem.category === selectedCategory;
    const matchesSearch =
      deferredSearchTerm.length === 0 ||
      documentItem.title.toLowerCase().includes(deferredSearchTerm);

    return matchesCategory && matchesSearch;
  });

  const filteredLinksKey = filteredDocuments.map(({ newLink, oldLink }) => `${newLink}|${oldLink}`).join('||');

  useEffect(() => {
    let isMounted = true;
    const linksToCheck = [];

    filteredDocuments.forEach((documentItem) => {
      if (!documentItem.newLink) return;
      if (availabilityCache.has(documentItem.newLink)) return;
      if (linksToCheck.includes(documentItem.newLink)) return;

      linksToCheck.push(documentItem.newLink);
    });

    if (linksToCheck.length === 0) return undefined;

    setCheckingState((current) => {
      const next = { ...current };
      linksToCheck.forEach((link) => {
        next[link] = true;
      });
      return next;
    });

    Promise.all(
      linksToCheck.map(async (link) => {
        const isAvailable = await checkDocumentAvailability(link);
        return [link, isAvailable];
      }),
    ).then((results) => {
      if (!isMounted) return;

      setAvailabilityState((current) => {
        const next = { ...current };
        results.forEach(([link, isAvailable]) => {
          next[link] = isAvailable;
        });
        return next;
      });

      setCheckingState((current) => {
        const next = { ...current };
        results.forEach(([link]) => {
          delete next[link];
        });
        return next;
      });
    });

    return () => {
      isMounted = false;
    };
  }, [filteredLinksKey]);

  const handleCopyOldLink = async (oldLink) => {
    let copied = false;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(oldLink);
        copied = true;
      } else {
        copied = await fallbackCopyText(oldLink);
      }
    } catch {
      copied = await fallbackCopyText(oldLink);
    }

    if (copied) {
      toast({
        title: 'Old link copied',
        description: 'Legacy URL copied for NAAC reference.',
      });
      return;
    }

    toast({
      title: 'Copy failed',
      description: 'Unable to copy the legacy URL.',
      variant: 'destructive',
    });
  };

  const handleOpenDocument = (newLink, isAvailableFromCard) => {
    const isAvailable = isAvailableFromCard ?? availabilityState[newLink] ?? availabilityCache.get(newLink);
    if (!newLink || isAvailable === false) {
      toast({
        title: 'File not available',
        description: 'The current internal document path could not be found.',
        variant: 'destructive',
      });
      return;
    }

    const openedWindow = window.open(newLink, '_blank', 'noopener,noreferrer');

    if (!openedWindow) {
      toast({
        title: 'Popup blocked',
        description: 'Allow popups for this site to open the selected document.',
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/40 px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),_transparent_32%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <FileText className="h-4 w-4" />
                Internal PDF Mapping
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {heading}
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                {description}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-sm text-slate-600">
              <div className="font-semibold text-slate-900">
                {filteredDocuments.length} document{filteredDocuments.length === 1 ? '' : 's'}
              </div>
              <div className="mt-1">Old URLs stay visible, but access always uses the current internal path.</div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search documents by title"
                className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {categoryButtons.map((category) => {
                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'border border-slate-200 bg-white text-slate-700 hover:border-primary/30 hover:text-primary'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {filteredDocuments.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDocuments.map((documentItem) => {
              const newLink = resolveDocumentLink(documentItem, repositoryLinkMap);
              const isAvailable = availabilityState[newLink] ?? availabilityCache.get(newLink);
              const isChecking = Boolean(checkingState[newLink]);

              return (
                <DocumentCard
                  key={`${documentItem.title}-${documentItem.oldLink}`}
                  documentItem={documentItem}
                  newLink={newLink}
                  isAvailable={isAvailable}
                  isChecking={isChecking}
                  onCopyOldLink={handleCopyOldLink}
                  onOpenDocument={handleOpenDocument}
                />
              );
            })}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/90 px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <Search className="h-7 w-7" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">No results found</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Try a different keyword or switch the active category filter to locate the required
              document.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
