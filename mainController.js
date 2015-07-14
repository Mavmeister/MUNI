'use strict';

angular.module('MUNI')

.controller('mainCtrl', function($scope, Routes){
  $scope.routeList = [];
  $scope.routeIDs = [];
  $scope.selectedRoute;

  $scope.getAll = function(){
    var data = Routes.allRoutes(function(data){
     data.forEach(function(route){
      $scope.routeList.push(route);
      // $scope.routeIDs.push(route.id);
      // console.log(route.id)
     })
     console.log($scope.routeList)
    });
  },
  $scope.oneRoute = function(routeID){
    Routes.fetchRoute(routeID);
    console.log(routeID)
  }

  $scope.viewRoute = function(routeID){
    console.log(routeID)
  }

  $scope.display = Routes.fetchRoute('F');
  $scope.allRoutes = Routes.routes;

  // $scope.stopIDPredict = Routes.seePredictionsForStopID(13092, 'F')
});

