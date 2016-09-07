/*
* You must include the dependency on 'ngMaterial' 
*/
angular.module('aboutMe', ['ngMaterial',
    'home.controller',
    'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/", {templateUrl: "views/home.html", controller: "homeController"}).
	otherwise({redirectTo: '/'});
}]);
