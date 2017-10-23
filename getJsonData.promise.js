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
var city4 = {
    uri: 'https://query.yahooapis.com/v1/public/yql?format=json&u=c&q=select%20*%20from%20weather.forecast%20where%20woeid=217203',
}

var callback1 = function (body) {

    console.log("got data from 1st city ");
    return  Promise.resolve();

};
var callback2 = function (body) {
    console.log("got data from 2nd city ");
    return  Promise.resolve();
};
var callback3 = function (body) {
    console.log("got data from 3rd city ");
    return  Promise.resolve();
};
var callback4 = function (body) {
    console.log("got data from 4th city ");
    return  Promise.resolve();
};


console.log("start");
rp(city1)
.then(callback1)
.then(rp(city2))
.then(callback2)
.then(rp(city3))
.then(callback3)
.then(rp(city4))
.then(callback4);
