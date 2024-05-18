const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;