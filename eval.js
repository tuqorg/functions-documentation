var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const maxNumber = arr => Math.max(...arr);