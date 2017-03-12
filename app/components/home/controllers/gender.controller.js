'use strict';

/**
 * gender controller.
 *
 * @ngdoc overview
 * @name  genderController
 * @description
 */
(function(){

  function genderController(genderService) {

    var vm = this;
        vm.getGender;
        vm.personName = {};
        vm.results = {};
        vm.showResults = false;

      vm.getGender = function(){
          vm.showResults = false;
          vm.results = genderService.returnGender(this.personName).then(function(result){
              vm.showResults = true;
              vm.results = result.data;

          });
      };

  }

  angular.module('apogy.home')
    .controller('genderController', ['gender', genderController]);
})();
