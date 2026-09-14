// Asset path helper for GitHub Pages & Localhost
export function getAssetUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const formattedBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  return formattedBase + cleanPath;
}
