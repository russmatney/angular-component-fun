var app = angular.module('app', ['ngRoute', 'ui.router', 'main', 'blog', 'game'])

app.config(['$routeProvider', function ($routeProvider) {
  
  $routeProvider.when('/', 
    {templateUrl: "main/main.html", controller: 'MainCtrl'});
  $routeProvider.when('/blog', 
    {templateUrl: "blog/blog.html", controller: 'BlogCtrl'});
  $routeProvider.when('/game', 
    {templateUrl: "game/game.html", controller: 'GameCtrl'});

}]);

app.controller('AppCtrl', [function () {
}]);
