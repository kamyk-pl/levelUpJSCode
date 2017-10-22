var request = require('request');
var rp = require('request-promise');

var city1 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=2172797',
}

var city2 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=2172799',
}

var city3 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=217211',
}

var callback1 = function (data) {
        console.log("got data from 1st city ");           
}
var callback2 = function (data) {
        console.log("got data from 2ndst city ");        
}
var callback3 = function (data) {
        console.log("got data from 3rd city ");        
}

console.log("start");
//var p1 = rp(options1).then(callback1).then(rp(options2)).then(callback2).then(rp(options3).then(callback3)).error(function(error){console.log});
var p1 = rp(city1).then(callback1);
var p2 = rp(city2).then(callback2);
var p3 = rp(city3).then(callback3);

Promise.all([p1,p2,p3]).then(function(){console.log("all done")
});






