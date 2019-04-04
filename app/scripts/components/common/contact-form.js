(function(){
    'use strict';
    angular.module('webApp')

    .component('contactForm', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/common/contact-form.html',
        controller: componentController
      })

      function componentController($scope,$anchorScroll,$location){

      }

})();
