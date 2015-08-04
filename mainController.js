'use strict';

var app = angular.module('MUNI')

.controller('mainCtrl', function($scope, Routes){
  $scope.routeList = [];
  $scope.stops = []
  $scope.routeIDs = [];
  $scope.Alltimes = [];
  $scope.direction = [];
  $scope.currentRt;
  $scope.otherTimes = "Please Select a Route";
  $scope.location = 0;

  $scope.dist = function(){
    Routes.distCalc();
  }

  $scope.getLoc = function(){
    var latitude;
    var longitude;
    var cb = function(data){
      latitude = data.data.latitude
      longitude = data.data.longitude
      $scope.location = [latitude + ',' + longitude];
      console.log([longitude + ',' + longitude])
    }
    Routes.getLoc(cb);
  }

  $scope.otherTime = function(input){
    console.log(input)
    $scope.otherTimes = input.splice(1)
  }

  $scope.showTime = function(input){
    console.log('scope.currentRt.data ', $scope.currentRt.data )
    $scope.Alltimes = [];
    var datas = $scope.currentRt.data;
    var objs;
    var times= [];
    if (datas.length === 0){
      $scope.Alltimes = "No Route Information"
      //wrap--
    } else {
    datas.forEach(function(obj){
      if (obj === undefined){
        console.log('NO DATA')
      } else {
        objs = obj
      }
    })
    objs.values.forEach(function(time){
      times.push(time)
    })
    // wrapped --
  }
    times.forEach(function(time){
      $scope.Alltimes.push(time.minutes)
    })
  },

  $scope.showDirection = function(input){
      console.log("Info: ", data)
      $scope.times.push(data.data[0].values);
      $scope.direction.push()

  },

  $scope.viewInfo = function(routeID, stopID, direction){
    console.log(routeID, stopID, direction);
    var data = Routes.seePredictionsForRouteID(routeID, stopID, function(data){
      $scope.currentRt = data
      console.log("CurrentRt: ", $scope.currentRt)
      $scope.showTime();
      $scope.otherTime($scope.Alltimes);
      $scope.getLoc();
    })
  },

  $scope.getAll = function(){
    var data = Routes.allRoutes(function(data){
     data.forEach(function(route){
      $scope.routeList.push(route);
     })
    });
  },
  $scope.oneRoute = function(routeID){
    Routes.fetchRoute(routeID);
    console.log(routeID)
  },

  $scope.viewRoute = function(routeID){
    $scope.stops = [];
    var data = Routes.addRoute(routeID, function(data){
      data.data.stops.forEach(function(stop){
        $scope.stops.push(stop)
      });
    })
  }

  $scope.display = Routes.fetchRoute('F');
  $scope.allRoutes = Routes.routes;

  // $scope.stopIDPredict = Routes.seePredictionsForStopID(13092, 'F')
});

