const isWeekday = (date) => date.getDay() % 6 !== 0;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;