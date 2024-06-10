const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};