'use strict';
/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # Daen Webapp
 *
 * Main module of the application.
 */
angular
  .module('webApp',[
      'ui.router',
      'ngRoute',
      'ngMaterial',
      'ngMessages',
      'nemLogging',
      'ui.carousel'
  ])

/*
  .run(function($rootScope) {
    $rootScope.$on("$locationChangeStart", function(event, next, current) {

        $rootScope.$broadcast('urlchanged', {h:1});
    })
  })*/
  /*
  .config(['$httpProvider', ($httpProvider) => {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }

    // Answer edited to include suggestions from comments
    // because previous version of code introduced browser-related errors

    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    // extra
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    $httpProvider.interceptors.push( logTimeTaken );
  }]);
  */
