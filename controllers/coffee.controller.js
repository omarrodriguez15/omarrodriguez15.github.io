angular.module('coffee.controller', []).
  controller('coffeeController', function($scope, $location, $http) {
    console.log('coffee controller');
    
    var vm = this;
    vm.config = {};
    vm.newValue = newValue;

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
      var gauge = loadLiquidFillGauge("fillgauge", 33.33, vm.config);
    }

    function newValue(){
      loadLiquidFillGauge("fillgauge", 55, vm.config);
    }
});