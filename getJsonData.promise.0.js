var request = require('request');
var rp = require('request-promise');


var city1 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=2172797',
}

var callback1 = function (data) {
        console.log("got data from 1st city ");           
}


console.log("start");
rp(city1).then(callback1)
 





