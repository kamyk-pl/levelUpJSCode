var request = require('request');
var rp = require('request-promise');
//run npm install before running this example

var city1 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=2172797'
}
var city2 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=2172711'
}
var city3 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=2172708'
}
var city4 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=2172700'
}

var callback1 = function (body) {
    console.log("got data from 1st city ", body.length);
};
var callback2 = function (body) {
    console.log("got data from 2nd city ", body.length);
};
var callback3 = function (body) {
    console.log("got data from 3rd city ", body.length);
};
var callback4 = function (body) {  
    console.log("got data from 4th city ", body.length);
};


console.log("start");
 var p1 = rp(city1);
 p1.then(callback1);

 var p2 = rp(city2);
 p2.then(callback2);
 
 var p3 = rp(city3);
 p3.then(callback3);
 
 var p4 = rp(city4);
 p4.then(callback4);

Promise.all([p1,p2,p3,p4]).then(function(){console.log("now I have all data")
})





