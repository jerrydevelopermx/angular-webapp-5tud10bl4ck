(function(){
    'use strict';
    angular.module('webApp')

    .component('contactForm', {
        bindings: {
          message: '=',
        },
        templateUrl: 'views/common/contact-form.html',
        controller: componentController
      })

      function componentController($scope,$anchorScroll,$location){}

})();
