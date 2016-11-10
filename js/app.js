/*
* You must include the dependency on 'ngMaterial' 
*/
angular.module('aboutMe', ['ngMaterial',
    'home.controller',
    'blog.controller',
    'jackal.controller',
    'coffee.controller',
    'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/", {templateUrl: "views/home.html", controller: "homeController"}).
  when("/blog/0", {templateUrl: "views/blog0.html", controller: "blogController"}).
  when("/blog/1", {templateUrl: "views/blog1.html", controller: "blogController"}).
  when("/jackal", {templateUrl: "views/jackal.html", controller: "jackalController"}).
  when("/coffee", {templateUrl: "views/coffee.html", controller: "coffeeController"}).
	otherwise({redirectTo: '/'});
}]);
