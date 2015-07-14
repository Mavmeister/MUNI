angular.module('MUNI', [])

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
  };
  var seePredictionsForStopID = function(stopID, direction){
    var getData = $http({
      method: 'GET',
      url: MuniURL + 
    })
  }
  var seePredictionsForRouteID = function(stopID, routeID, direction){
    var getData = $http({
      method: 'GET',
      url: MuniURL + 
    })
  }
  var seePredictionsForCurrentLoc = function(loc){
    var getData = $http({
      method: 'GET',
      url: MuniURL + 
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
})