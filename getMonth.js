const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const removeDuplicates = (arr) => [...new Set(arr)];