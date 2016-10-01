angular.module('home.controller', []).
  controller('homeController', function($scope, $location) {
    console.log('made it here');
    var vm = this;
    vm.about = about;
    vm.blogEntry = blogEntry;
    vm.contactImgPath = '..\\img\\ethernet.jpg';
    vm.mainImgPath = '..\\img\\gentTrans.jpg';
    vm.blogImgPath = '..\\img\\blogIntro.jpg';
    vm.blogCards = [
        {
          imgPath: '..\\img\\blogIntro.jpg',
          title:'Intro',
          content:'This is where I will post summarys of blogs with the tiles linking to full content eventually...'
          +'if you\'re bored check out the wiki on my Github website. Beware it is not organized super well.'
        },
        {
          imgPath:'..\\img\\blogIntro.jpg',
          title: 'Arduino',
          content: 'Quick overview of arduino how to start and what it is capable of doing'
        }
      ];

    return vm;

    function about(){
      $location.path('/about');
      console.log('About click');
      
    }

    function blogEntry(ndx){
      $location.path('/blog/'+ndx);
    }
  });