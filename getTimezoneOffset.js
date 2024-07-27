const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);