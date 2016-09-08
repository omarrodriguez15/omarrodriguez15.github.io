angular.module('home.controller', []).
  controller('homeController', function($scope, $location) {
    console.log('made it here');
    var vm = this;
    vm.about = about;

    return vm;

    function about(){
      $location.path('/about');
      console.log('About click');
      
    }
  });