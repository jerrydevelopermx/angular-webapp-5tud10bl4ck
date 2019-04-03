(function(){
    'use strict';
    angular.module('webApp')

    .component('guiaTallas', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/guiaTallas.html',
        controller: componentController
      })

      function componentController($scope,$anchorScroll,$location){
        var vm = this;


        vm.$onInit = function(){

        }


      }
})();
