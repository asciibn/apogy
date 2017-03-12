'use strict';

/**
* Env module.
* @ngdoc overview
* @name Env
* @description
*
* # Main module of the feature.
*/

(function() {
  angular.module('apogy.env', [])

.constant('API', 'https://alpha.apogy.com/api/')

.constant('environment', 'dev')

;

})();