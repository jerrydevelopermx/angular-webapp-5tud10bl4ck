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

      function componentController($scope, $mdDialog){
        var vm = this;

        vm.$onInit = function(){
        //  console.log(vm.data)
        }

        vm.openGuideDialog = function(product_id, code, image) {
            $mdDialog.show({
              controllerAs: '$ctrl',
              bindToController: true,
              templateUrl: 'views/sizesDialog.html',
              //parent: angular.element(document.body),
              //targetEvent: ev,
              clickOutsideToClose:true,
              controller: function($mdDialog, Requester) {
                var $ctrl = this;
                $ctrl.sizes = [];
                $ctrl.code = code; console.log(image)
                $ctrl.guideImage = (image.indexOf('woman') !== -1) ? 'guia-mujer.jpg' : 'guia-hombre.jpg';
                Requester.get('catalog/sizes_product/'+ product_id, {}).then(function(data){
                  $ctrl.sizes = data;
                }, function(){});


                $ctrl.close = function() {
                  $mdDialog.cancel();
                };
              }
            })
        };

        vm.openGalleryDialog = function(product_id, code) {
            $mdDialog.show({
              controllerAs: '$ctrl',
              bindToController: true,
              templateUrl: 'views/galleryDialog.html',
              //parent: angular.element(document.body),
              //targetEvent: ev,
              clickOutsideToClose:true,
              controller: function($mdDialog, Requester) {
                var $ctrl = this;
                $ctrl.sizes = [];
                $ctrl.code = code;
                $ctrl.selectedImage = {};
                Requester.get('catalog/product_images/' + product_id, {}).then(function(data){
                  $ctrl.images = data;
                  $ctrl.selectedImage = data[0];
                }, function(){});


                $ctrl.close = function() {
                  $mdDialog.cancel();
                };

                $ctrl.changeImage = function(image) {
                  $ctrl.selectedImage = image;
                };
              }
            })
        };

      }

})();
