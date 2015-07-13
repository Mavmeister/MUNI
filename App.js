angular.module('MUNI', [])

.factory('Routes', function($http){
  var fetchRoutes = function(){
    var getData = $http({
      method: 'GET',
      url: 'http://localhost:3535/agencies/sf-muni/routes',
    });
    getData.then(function(data){
      console.log(data)
    }).catch(function(err){
      console.log('Error: ', err)
    })
  };
  var fetchAgency = function(){
    var getData = $http({
      method: 'GET',
      url: 'http://webservices.nextbus.com/service/publicXMLFeed?command=agencyList' 
    });
  };

  return {
    fetchRoutes: fetchRoutes,
    fetchAgency: fetchAgency
  };
})

.controller('mainCtrl', function($scope, Routes){
  $scope.display = Routes.fetchRoutes();
})