'use strict';
var app = angular.module('MUNI.services', [])

app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
})



.factory('Routes', function($http){
  var MuniURL = 'http://localhost:3535/agencies/sf-muni/'

  var getLoc = function(callback){
    var getData = $http({
      method: 'GET',
      url: 'http://freegeoip.net/json/'
    });
    getData.then(function(data){
      callback(data)
    }).catch(function(err){
      console.log(err)
    })
  }

  var distCalc = function(input, output, cb){

    var inputLoc1 = 37.776
    var inputLoc2 = -122.411
    var outputLoc1 = 37.78
    var outputLoc2 = -122.420
    // var outputLoc = {41.232, -81.343}

    var getData = $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/distancematrix/JSON',
      cache: false,
      dataType: 'jsonp',
      crossDomain: true,
      headers: {
        "AccessControlAllowOrigin": '*',
              },
      params: {
        origins: inputLoc1 + ',' + inputLoc2,
        destinations: outputLoc1 + ',' + outputLoc2,
        mode: 'walking',
        units: 'imperial',
        key: 'AIzaSyA7TbsUFsundVA54vNphHBB3Vn9vmxQYBs',
      }
    })
    getData.then(function(data){
      console.log(data);
    })
  }


  var allRoutes = function(callback){
    var routes = [];
    var getData = $http({
      method: 'GET',
      url: MuniURL + 'routes/'
    });
    getData.then(function(data){
      callback(data.data);
    }).catch(function(err){
      console.log('Error: ', err)
    })
  };
  var fetchRoute = function(routeID){
    var getData = $http({
      method: 'GET',
      url: MuniURL + 'routes/' + routeID
    });
    getData.then(function(data){
      console.log(data)
    }).catch(function(err){
      console.log('Error: ', err)
    })
  };
  var addRoute = function(routeID, callback){
    var getData = $http({
      method: 'GET',
      url: MuniURL + 'routes/' + routeID
    })
    getData.then(function(data){
      callback(data)
    }).catch(function(err){
      console.log('Error: ', err)
    })
  };
  var seePredictionsForRouteID = function(routeID, stopID, callback){
    var getData = $http({
      method: 'GET',
      url: MuniURL + 'routes/' + routeID + '/stops/' + stopID + '/predictions'
    });
    getData.then(function(data){
      callback(data)
    }).catch(function(err){
      console.log('Error: ', err)
    })
  }
  var seePredictionsForStopID = function(routeID, stopID, direction){
    var getData = $http({
      method: 'GET',
      url: MuniURL + 'stops/' + stopID + '/predictions'
    });
    getData.then(function(data){
      console.log(data)
    }).catch(function(err){
      console.log('Error: ', err)
    })
  }
  var seePredictionsForCurrentLoc = function(loc){
    var getData = $http({
      method: 'GET',
      url: 'http://localhost:3535/' + 'locations/' + loc
    });
    getData.then(function(data){
      console.log(data)
    }).catch(function(err){
      console.log('Error: ', err)
    })
  }

  return {
    fetchRoute: fetchRoute,
    allRoutes: allRoutes,
    addRoute: addRoute,
    seePredictionsForStopID: seePredictionsForStopID,
    seePredictionsForRouteID: seePredictionsForRouteID,
    seePredictionsForCurrentLoc: seePredictionsForCurrentLoc,
    getLoc: getLoc,
    distCalc: distCalc

  };
})
