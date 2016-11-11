angular.module('coffee.controller', []).
  controller('coffeeController', function($scope, $location, $http) {
    console.log('coffee controller');
    
    var vm = this;
    vm.config = {};
    vm.newValue = newValue;
    vm.gauge = {};

    init();
    return vm;

    function init(){
      vm.config = liquidFillGaugeDefaultSettings();
      vm.config.circleColor = "#D4AB6A";
      vm.config.textColor = "#553300";
      vm.config.waveTextColor = "#805615";
      vm.config.waveColor = "#AA7D39";
      vm.config.circleThickness = 0.1;
      vm.config.circleFillGap = 0.1;
      vm.config.textVertPosition = 0.8;
      vm.config.waveAnimateTime = 5000;
      vm.config.waveHeight = 0.2;
      vm.config.waveCount = 1;
      var prodUrl = 'http://jackalapi.azurewebsites.net/api/coffee';
      $http.get(prodUrl)
         .then(function(response) {
            if(!response.data)
              return "POOP";
            console.log(response.data[0].level);
            var level = Math.round((response.data[0].level / 6) * 100);
            vm.gauge = loadLiquidFillGauge("fillgauge", level, vm.config);
         });
    }

    function newValue(){
      var ran = 0;
      if(Math.random() > .5){
        ran = Math.round(Math.random()*100);
      } else {
        ran = (Math.random()*100).toFixed(1);
      }
      vm.gauge.update(ran);
    }
});