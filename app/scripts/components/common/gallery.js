(function(){
    'use strict';
    angular.module('webApp')

    .component('appGallery', {
        bindings: {
          parent: '=',
        },
        templateUrl: 'views/common/gallery.html',
        controller: componentController
    })

      function componentController($scope, Requester){
        var vm = this;
        vm.images = [];
        vm.showCarousel = false;

        vm.$onInit = function(){
          Requester.get('catalog/galleries/' + vm.parent, {}).then(function(data){ 
              vm.images = processGallery(data);
            }, function(error){
                console.log(error)
            })
        }

        vm.$doCheck = function() {
          if(vm.images.length > 0 && !vm.showCarousel){
            vm.showCarousel = true;
          }
        }

        function processGallery(data) {
          return data.map(function (image, index, array) {
              return image.src;
          });
        }

      }
})();
