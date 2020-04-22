const fs = require('fs'); //brings the filesystem module refer nodejs.org docs
const calc = require('./calc');
const _ = require('lodash') //for javascript libraries
const http = require('http'); //node ships with http to allow creating our own server.

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


const server = http.createServer(function(request, response) {
    if(request.url == '/') {
        response.write('Hello Sai');
        response.end();
    }
    if(request.url == '/numbers') {
        response.write(JSON.stringify([1,2,3,4]));
        response.end();
    }

    // Above we see we are doing mess with lots of urls. Inefficient way of doing. 
    // So to create the server and manage our urls in a smarter way. we would be using EXPRESS. It is a server, again node. Gives us cleaner way of doing this.
})
server.listen(3100)
console.log("Server is now running...")