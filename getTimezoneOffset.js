var regexp  = new RegExp('{{([^}]+)}}', 'g');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);