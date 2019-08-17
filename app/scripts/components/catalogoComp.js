(function(){
    'use strict';
    angular.module('webApp')

    .component('catalogoComp', {
        bindings: {
          type: '='
        },
        templateUrl: 'views/catalogoComp.html',
        controller: componentController
      })

      function componentController($scope, $anchorScroll, $location, Requester, $mdDialog){
        var vm = this;
        vm.styles = [];
        vm.selectedStyle = {};
        vm.$onInit = function(){
          getStyles();
        }

        vm.changeStyle = function(style){
          vm.selectedStyle = style
          getProducts();
        }

        function getStyles(){
          Requester.get('catalog/styles/' + vm.type, {}).then(function(data){
            vm.styles = data;
            vm.selectedStyle = data[0];
            getProducts();
          }, function(){});
        }

        function getProducts(){
          Requester.get('catalog/products/' + vm.selectedStyle.style_id, {}).then(function(data){
            processProducts(data);
          }, function(){});
        }

        function processProducts(data){
          vm.catalog = {};
          vm.catalog.type = vm.selectedStyle.style_name;
          vm.catalog.grids = [{ type: '',
                               class: 'grid-title',
                               imgs: getImgs(data)
                            }];
        }

        function getImgs(data){
          var imgs = [];
          for(var i in data){
            imgs.push({backgroundColor : '#fff', img: data[i].front_image, url:'', class: 'producto', code: data[i].code, price: data[i].price, color: data[i].color, sizes : data[i].sizes });
          }
          return imgs;
        }



      }
})();
