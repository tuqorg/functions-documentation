const isEven = (num) => num % 2 === 0;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const resultingPromises = urls.map((url) => makHttpRequest(url));
const channel = getChannel(computedAppVersion);
const uniqueArr = (arr) => [...new Set(arr)];
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());