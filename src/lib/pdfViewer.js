const PDF_EXTENSION_PATTERN = /\.pdf$/i;

export const isPdfUrl = (value) => {
  if (!value || typeof value !== 'string') return false;

  try {
    const parsed = new URL(value, window.location.origin);
    return PDF_EXTENSION_PATTERN.test(parsed.pathname);
  } catch {
    const path = value.split('?')[0].split('#')[0];
    return PDF_EXTENSION_PATTERN.test(path);
  }
};

export const pdfViewerPath = ({ fileUrl, title = 'PDF Document', back = '/' }) => {
  const searchParams = new URLSearchParams({
    file: fileUrl,
    title,
    back,
    kind: 'pdf',
  });

  return `/pdf-viewer?${searchParams.toString()}`;
};
