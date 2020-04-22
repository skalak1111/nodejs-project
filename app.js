const fs = require('fs'); //brings the filesystem module refer nodejs.org docs
const calc = require('./calc');

const colors = fs.readFileSync('colors.txt', 'UTF-8');
//console.log(colors);
console.log(calc.name)