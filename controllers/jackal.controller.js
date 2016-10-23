angular.module('jackal.controller', []).
  controller('jackalController', function($scope, $location, $http) {
    console.log('jackal controller');
    var vm = this;
    vm.showOutput = false;
    vm.simulateRounds = simulateRounds;
    vm.numOfDecks = 4;
    vm.numOfPlayers = 2;
    vm.numOfRounds = 10;
    vm.startingAmt = 1000;
    vm.betAmt = 5;
    vm.betStrategy = 0;
    
    init();
    vm.players = {};

    return vm;

    function init(){
       console.log('init');
    }

    function simulateRounds() {
       console.log('simulateRounds');
       var prodUrl = 'http://jackalapi.azurewebsites.net/api/BlackJack';
       var devsUrl = 'http://localhost:5000/api/BlackJack';
       var queryString = '?';

       queryString += 'numOfDecks='+vm.numOfDecks;
       queryString += '&numOfPlayers='+vm.numOfPlayers;
       queryString += '&numOfRounds='+vm.numOfRounds;
       queryString += '&startingAmt='+vm.startingAmt;
       queryString += '&betAmt='+vm.betAmt;
       queryString += '&betStrategy='+vm.betStrategy;

       $http.get(prodUrl + queryString)
         .then(function(response) {
            vm.players = response.data;
         });
    }

});