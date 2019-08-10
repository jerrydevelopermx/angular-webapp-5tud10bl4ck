(function(){
    'use strict';
    angular.module('webApp')

    .component('appCatalogo', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/catalogo.html',
        controller: componentController
      })

      function componentController($scope,$anchorScroll,$location){
        var vm = this;
        vm.type = '';
        function anchorScroll(){
          var newHash = 'logo-div';
              if ($location.hash() !== newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash(newHash);
              } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
              }
        }

        vm.$onInit = function(){
          anchorScroll();
          vm.type = ($location.path() == '/mujeres') ? 'mujer' : 'hombre';
        }


      }
})();
