angular.module('home.controller', []).
  controller('homeController', function($scope, $location) {
    console.log('made it here');
    var vm = this;
    vm.about = about;
    vm.contactImgPath = '..\\img\\ethernet.jpg';
    vm.mainImgPath = '..\\img\\gentTrans.jpg';
    vm.blogImgPath = '..\\img\\blogIntro.jpg';

    return vm;

    function about(){
      $location.path('/about');
      console.log('About click');
      
    }
  });