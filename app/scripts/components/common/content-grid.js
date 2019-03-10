(function(){
    'use strict';
    angular.module('webApp')

    .component('appContentGrid', {
        bindings: {
          data: '=',
          title: '=',
          style: '='
        },
        templateUrl: 'views/common/content-grid.html',
        controller: componentController
      });

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
        //  console.log(vm.data)
        }
      }

})();
