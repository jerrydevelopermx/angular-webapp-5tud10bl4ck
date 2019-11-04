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
      'ngSanitize',
      'ui.carousel',
      'vcRecaptcha',
      'angular-google-analytics'
  ])

  .constant('APP',{
    'api_url' : 'http://studioblackjeans.com/studioblackjeans-api/index.php/'
  })

  .config(function (AnalyticsProvider) {
          // initial configuration
          AnalyticsProvider.setAccount('UA-151362070-2');
          // track all routes/states (or not)
          AnalyticsProvider.trackPages(true);
          // Use analytics.js instead of ga.js
          AnalyticsProvider.useAnalytics(true);
          // change page event name
          AnalyticsProvider.setPageEvent('$stateChangeSuccess');


  })

  .run(function($rootScope, $location, $window, $transitions, Analytics) {
    $transitions.onSuccess({}, function($transition){
          var url = $transition.$to().self.url;
          /*var params = $transition.params();
          if(params.post_id !== undefined){
            var urlSplit = url.split("/");
            urlSplit[urlSplit.length-1] = params.post_id;
            url = urlSplit.join('/');
          }*/
          Analytics.trackPage(url);
      });

  })
