const fs = require('fs'); //brings the filesystem module refer nodejs.org docs
const calc = require('./calc');
const _ = require('lodash') //for javascript libraries

const colors = fs.readFileSync('colors.txt', 'UTF-8');
//console.log(colors);
//console.log(calc.name)
const filtered = _.filter(colors, function(data) {
    return data.indexOf('blue')
})