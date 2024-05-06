const merge = (a, b) => a.concat(b);
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const sumArray = arr => arr.reduce((total, current) => total + current, 0);