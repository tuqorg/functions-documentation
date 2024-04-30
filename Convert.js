const isTabInView = () => !document.hidden;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const average = arr => arr.reduce((a, b) => a + b) / arr.length;