'use strict';
/**
 * @ngdoc overview
 * @name apogy
 * @description
 * @requires $urlRouterProvider
 * @requires $locationProvider
 *
 * Main module of the application.
 */
angular
.module('apogy', [
  'ui.router',
  'ngSanitize',
  'restangular',

  /* COMMONS */
  'apogy.cache',
  /* END COMMON */

  /* COMPONENTS */
  'apogy.home',
  /* END COMPONENTS */
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
  });
