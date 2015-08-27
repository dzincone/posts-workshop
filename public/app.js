var app = angular.module('newApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/posts.html',
        controller: 'ApplicationController'
      })

    $locationProvider.html5Mode(true)
  }]);


app.controller("ApplicationController", function($scope, $http){
  $scope.name = "Dylan",
  $http.get('/posts').then(function(data){
    $scope.data = data
  })
})
