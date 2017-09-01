/* jshint node:true */
'use strict';

var apickli = require('apickli');

// set the url and base path for your API endpoint on Apigee edge
var url = 'ronnyroos-trial.apigee.net/amok-api';

var env = process.env.NODE_ENV || 'test';

// debug
console.log('running on ' + env + ' environment');

module.exports = function() {
    // cleanup before every scenario
    this.Before(function(scenario, callback) {
        this.apickli = new apickli.Apickli('http', url);
        callback();
    });
};