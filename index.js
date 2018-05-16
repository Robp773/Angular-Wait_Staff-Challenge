'use strict';

angular.module('root-app', [])
  .controller('MainCtrl', function($scope){
    let vm = this;

    vm.grandTipTotal = 0;
    vm.mealCount = 0;
    vm.avgTipPerMeal = 0;
    this.submit = function(){
      vm.subTotal = vm.baseMealPrice + (vm.baseMealPrice * (vm.taxRate / 100));      
      vm.tipTotal = (vm.baseMealPrice * vm.tipPercent) / 100;
      vm.total = vm.subTotal + vm.tipTotal;
      vm.grandTipTotal = vm.grandTipTotal + vm.tipTotal;
      vm.mealCount++;
      vm.avgTipPerMeal = (vm.grandTipTotal / vm.mealCount).toFixed(2);
    };
  });