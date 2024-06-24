const symbolsPath = path.join(buildOutputPath, 'symbols');
const isEmptyObject = obj => Object.keys(obj).length === 0;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';