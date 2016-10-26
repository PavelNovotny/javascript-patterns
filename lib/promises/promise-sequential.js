/**
 *
 * Created by pavelnovotny on 21.10.16.
 */
var fs = require('fs');
var promisify = require('./promisify');
var readFile = promisify.promisify(fs.readFile);
var timeout = promisify.timeout;

timeout(500)
    .then(function() {
        console.log("1. call");
        return timeout(1000);
    })
    .then(function() {
        console.log("2. call");
        return timeout(500);
    })
    .then(function() {
        console.log("3. call");
        return timeout(2000);
    })
    .then(function() {
        console.log("4. call");
        return timeout(3000);
    })
    .catch(function(err) {
        console.log(err);
    });

readFile('promise-basic.js')
    .then(function() {
        console.log("file opened");
    })
    .catch(function(err) {
        console.log(err);
    });





