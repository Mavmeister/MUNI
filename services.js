'use strict';

angular.module('MUNI.services', [])

.factory('Routes', function($http){
  var MuniURL = 'http://localhost:3535/agencies/sf-muni/'


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
    seePredictionsForCurrentLoc: seePredictionsForCurrentLoc

  };
})
