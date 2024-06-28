const randomString = () => Math.random().toString(36).slice(2);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';