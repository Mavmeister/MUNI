var _          = require('underscore');
var request    = require('request');
var bodyParser = require('body-parser');



// Default variables
var domain = 'http://webservices.nextbus.com';
var agency = 'sf-muni'


var fetchPredictions = function(agency, route, stopTag){
  // Make a GET request to domain to get route list 
  // Store this somehow
  var path = '/service/publicXMLFeed'
           + '?command=predictions'
           + '&a=' + agency
           + '&r=' + route
           + '&s=' + stopTag
           + '&useShortTitles=true';

  var XML = //get(domain+path)
  var JSON = parse(XML[0].body)

  return JSON;
};


