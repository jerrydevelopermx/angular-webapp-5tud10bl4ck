(function(){
    'use strict';
    angular.module('webApp')

    .component('appGallery', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/gallery.html',
        controller: componentController
    })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
          vm.images = ["images/galeria-01.png",
                       "images/galeria-02.png"
                      ];

          }

      }
})();
