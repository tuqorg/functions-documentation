const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
console.log("1 || 2 = "+(1 || 2));