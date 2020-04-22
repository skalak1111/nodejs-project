//alert("Hello World"); // running this file in terminal will throw error alert is undefined bcoz this is browser related.
//console.log("Hello world");

const fs = require('fs')
var colors = fs.readFileSync('colors.txt', 'UTF-8')
console.log(colors)