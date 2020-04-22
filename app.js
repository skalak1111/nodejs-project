const fs = require('fs'); //brings the filesystem module refer nodejs.org docs

const colors = fs.readFileSync('colors.txt', 'UTF-8');
console.log(colors);