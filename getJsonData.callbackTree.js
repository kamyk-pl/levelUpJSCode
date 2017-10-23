var request = require('request');
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

console.log("start");
request(city1, function (error, response, body) {
    console.log("got data from 1st city ", body.length);
    console.log("getting data for 2nd city ");
    request(city2, function (error, response, body) {
        console.log("got data from 2nd city ", body.length);
        console.log("getting data for 3rd city ");
        request(city3, function (error, response, body) {
            console.log("got data from 3rd city ", body.length);
            console.log("getting data for 4th city ");
            request(city4, callback4 = function (error, response, body) {
                console.log("got data from 4th city ", body.length);
                console.log("now I have all data");
            });
        })
    });
});
