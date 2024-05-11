const randomString = () => Math.random().toString(36).slice(2);
const isWeekday = (date) => date.getDay() % 6 !== 0;
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;