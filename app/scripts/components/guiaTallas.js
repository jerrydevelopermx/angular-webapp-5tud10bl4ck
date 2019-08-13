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

      function componentController($scope,$anchorScroll,$location, Requester){
        var vm = this;
        vm.man = { styles: [], products: {}};
        vm.woman = { styles: [], products: {}};
        vm.manStyle = { label :'Skinny', value : 'Skinny' };
        vm.womanStyle = { label :'Skinny', value : 'Skinny' };
        vm.womanSelectedProduct = '';
        vm.manSelectedProduct = '';
        vm.womanImage = '';
        vm.manImage = '';
        vm.manSizes;
        vm.womanSizes;
        vm.showWomanGuide = false;
        vm.showManGuide = false;

        vm.$onInit = function(){
          getData();
        }

        vm.changeWomanStyle = function(style){
          vm.womanStyle.value = style.replace(/ /g,"-");
          vm.womanStyle.label = style;
        }
        vm.changeManStyle = function(style){
          vm.manStyle.value = style.replace(/ /g,"-");
          vm.manStyle.label = style;
        }

        vm.changeWomanProduct = function(product){
          vm.womanImage = product.image;
          vm.womanSelectedProduct = product.code;
          Requester.get('guide/sizes/' + product.code, {}).then(function(data){
            vm.womanSizes = data;
          }, function(){});
        }

        vm.changeManProduct = function(product){
          vm.manImage = product.image;
          vm.manSelectedProduct = product.code;
          Requester.get('guide/sizes/' + product.code, {}).then(function(data){
            vm.manSizes = data;
          }, function(){});
        }

        function getData(){
          Requester.get('guide/styles', {}).then(function(data){
            processData(data)
          }, function(){});

        }

        function processData(styles){
          for(var i in styles){
            if(styles[i].gender == 'hombre') {
              if(vm.man.styles.indexOf(styles[i].name) === -1){
                vm.man.styles.push(styles[i].name);
              }
              if(vm.man.products[styles[i].name.replace(/ /g,"-")] == undefined) {
                vm.man.products[styles[i].name.replace(/ /g,"-")] = [];
              }
              vm.man.products[styles[i].name.replace(/ /g,"-")].push(styles[i]);
              if(vm.manSelectedProduct === ''){
                vm.changeManProduct(styles[i]);
              }
            } else {
              if(vm.woman.styles.indexOf(styles[i].name) === -1){
                vm.woman.styles.push(styles[i].name);
              }
              if(vm.woman.products[styles[i].name.replace(/ /g,"-")] == undefined) {
                vm.woman.products[styles[i].name.replace(/ /g,"-")] = [];
              }
              vm.woman.products[styles[i].name.replace(/ /g,"-")].push(styles[i]);
              if(vm.womanSelectedProduct === ''){
                vm.changeWomanProduct(styles[i]);
              }
            }
          }


        }

      }
})();
