angular.module('home.controller', []).
  controller('homeController', function($scope, $location) {
    console.log('made it here');
    var vm = this;
    vm.about = about;
    vm.contactImgPath = '..\\img\\ethernet.jpg';
    vm.mainImgPath = '..\\img\\gentTrans.jpg';
    vm.blogImgPath = '..\\img\\blogIntro.jpg';
    vm.blogCards = [
        {
          imgPath: '..\\img\\blogIntro.jpg',
          title:'Intro',
          content:'This is where I will post summarys of blogs linking to full content eventually... if you\'re bored. Beware it is not organized super well.'
        },
        {
          imgPath:'..\\img\\blogIntro.jpg',
          title: 'First Entry',
          content: 'Here is my first entry'
        }
      ];

    return vm;

    function about(){
      $location.path('/about');
      console.log('About click');
      
    }
  });