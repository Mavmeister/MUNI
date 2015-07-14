'use strinct';

angular.module('MUNI.services', [])

.factory('Routes', function($http){
  var MuniURL = 'http://localhost:3535/agencies/sf-muni/'
  var routes = [];

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
  var allRoutes = function(){
    var getData = $http({
      method: 'GET',
      url: MuniURL + 'routes/'
    });
    getData.then(function(data){
      data.data.forEach(function(route){
        routes.push(route.title)
      }).catch(function(err){
      console.log('Error: ', err)
    })
        console.log(routes)
    })
  };
  var addRoute = function(routeID, stopID, direction){
    var getData = $http({
      method: 'GET',
      url: MuniURL + 'routes/' + routeID
    })
    getData.then(function(data){
      console.log(data)
    }).catch(function(err){
      console.log('Error: ', err)
    })
  };
  var seePredictionsForRouteID = function(routeID, stopID, direction){
    var getData = $http({
      method: 'GET',
      url: MuniURL + 'routes/' + routeID + 'stop/' + stopID + '/predictions'
    });
    getData.then(function(data){
      console.log(data)
    }).catch(function(err){
      console.log('Error: ', err)
    })
  }
  var seePredictionsForStopID = function(stopID, routeID, direction){
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


.controller('mainCtrl', function($scope, Routes){
  $scope.display = Routes.fetchRoute('F');
  $scope.allRoutes = Routes.routes;
  $scope.stopIDPredict = Routes.seePredictionsForStopID(13092, 'F')
})