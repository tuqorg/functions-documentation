const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';