var request = require('request');


var city1 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=2172797',
}

var city2 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=2172799',
}

var city3 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=217211',
}

var callback1 = function (error, response, body) {    
        console.log("got data from 1st city ", body.length);
        console.log("getting data for 2nd city ");
        request(city2, callback2);
   
}
var callback2 = function (error, response, body) {
    
        console.log("got data for 2nd city", body.length);
        console.log("getting data for 3nd city ");
        request(city3, callback3);
     
}
var callback3 = function (error, response, body) {
     
        console.log("got data for 3nd city ", body.length);
        console.log("now I have all data");
    
}

request(city1, callback1);


