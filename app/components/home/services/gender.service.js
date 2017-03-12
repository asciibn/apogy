'use strict';

(function(){

  /**
   * @ngdoc service
   * @name  genderService
   * @description
   */
  function genderService($http) {
      return{
          returnGender:returnGender
      }

     var vm = this;

    function returnGender(user){
      return $http.get('https://gender-api.com/get?', {params :{key:'TJrPmdJKPmMjmwSzsf', name:user.name}});
    }


  }

  angular.module('apogy.home')
    .service('gender',['$http', genderService]);
})();
