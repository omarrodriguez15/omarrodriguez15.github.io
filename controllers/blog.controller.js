angular.module('blog.controller', []).
  controller('blogController', function($scope, $location) {
    console.log('Blog controller');
    var vm = this;
    vm.blogEntry = blogEntry;
    vm.blogCards = [
        {
          imgPath: '..\\img\\blogIntro.jpg',
          title:'Intro',
          content:'This is where I will post summarys of blogs with the tiles linking to full content eventually...'
          +'if you\'re bored check out the wiki on my Github website. Beware it is not organized super well.'
        },
        {
          imgPath:'..\\img\\arduino.png',
          title: 'Arduino',
          content: 'Quick overview of arduino how to start and what it is capable of doing'
        },
        {
          imgPath:'..\\img\\debug.png',
          title: "IDE's (Integrated Development Enviornment)",
          content: "An overview of IDE's for different languages and devices",
        }
      ];
    return vm;

    function blogEntry(ndx){
      $location.path('/blog/'+ndx);
    }
  });