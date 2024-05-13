const isEmptyObject = obj => Object.keys(obj).length === 0;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const timeFromDate = date => date.toTimeString().slice(0, 8);