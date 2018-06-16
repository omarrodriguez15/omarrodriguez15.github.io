angular.module('family.controller', []).
   controller('familyController', function($scope, $location, $http) {
      console.log('Family controller loaded!');

      var toolbar = document.getElementById('tooldbarMain');
      toolbar.remove();
      
      var driveFrame = document.getElementById('drive-frame');
      driveFrame.width = window.screen.width;
      driveFrame.height = window.screen.height;
   
      function resize() {
         driveFrame.width = window.innerWidth;
         driveFrame.height = window.innerHeight;
      }
   
      window.onresize = resize;
   });