(function(){
    'use strict';
    angular.module('webApp')

    .component('headerComp', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/header.html'
      })
})();
