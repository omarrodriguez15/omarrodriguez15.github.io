/*
* You must include the dependency on 'ngMaterial' 
*/
angular.module('aboutMe', ['ngMaterial',
    'home.controller',
    'about.controller',
    'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/", {templateUrl: "views/home.html", controller: "homeController"}).
  when("/about", {templateUrl: "views/about.html", controller: "aboutController"}).
	otherwise({redirectTo: '/'});
}]);
