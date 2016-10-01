/*
* You must include the dependency on 'ngMaterial' 
*/
angular.module('aboutMe', ['ngMaterial',
    'home.controller',
    'about.controller',
    'blog.controller',
    'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/", {templateUrl: "views/home.html", controller: "homeController"}).
  when("/about", {templateUrl: "views/about.html", controller: "aboutController"}).
  when("/blog/0", {templateUrl: "views/blog.html", controller: "blogController"}).
  when("/blog/1", {templateUrl: "views/blog.html", controller: "blogController"}).
	otherwise({redirectTo: '/'});
}]);
