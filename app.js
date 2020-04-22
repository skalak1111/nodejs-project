const fs = require('fs'); //brings the filesystem module refer nodejs.org docs
const calc = require('./calc');
const _ = require('lodash') //for javascript libraries

const colors = fs.readFileSync('colors.txt', 'UTF-8');
//console.log(colors);
//console.log(calc.name)
const filtered = _.filter(colors, function(data) {
    return data.indexOf('blue')
})

console.log('First');
const colors2 = fs.readFile('colors.txt', 'UTF-8', function(err, data) {
    console.log('Second');
    //console.log(data);
}) //this is a async function.

console.log('Third');