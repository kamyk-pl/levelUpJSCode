var request = require('request');


var city1 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=2172797'
}
 

request(city1, function (error, response, body) {
        console.log("got data from 1st city ", body.length);           
});


