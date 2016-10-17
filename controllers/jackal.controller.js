angular.module('jackal.controller', []).
  controller('jackalController', function($scope, $location, $http) {
    console.log('jackal controller');
    var vm = this;
    vm.showOutput = false;
    vm.simulateRounds = simulateRounds;
    vm.numOfRounds = 2;
    init();
    vm.players = {};

    return vm;

    function init(){
       console.log('init');
    }

    function simulateRounds() {
       console.log('simulateRounds');

       $http.get('http://jackalapi.azurewebsites.net/api/values' + vm.numOfRounds)
         .then(function(response) {
            vm.players = response.data;
         });
    }

});