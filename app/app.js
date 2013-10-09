var app = angular.module('app', ['ngRoute', 'ui.router', 'main', 'blog'])

app.config(['$routeProvider', function ($routeProvider) {
  console.log('hi app');
  
  $routeProvider.when('/', 
    {templateUrl: "main/main.html", controller: 'MainCtrl'});
  $routeProvider.when('/blog', 
    {templateUrl: "blog/blog.html", controller: 'BlogCtrl'});

}]);

app.controller('AppCtrl', [function () {
  console.log('hi app');
}]);
