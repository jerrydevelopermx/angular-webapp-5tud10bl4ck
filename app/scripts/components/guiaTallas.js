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

        vm.manSizes;
        vm.womanSizes;

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
          vm.womanSelectedProduct = product;
          Requester.get('sizesguide/sizes/' + product, {}).then(function(data){ console.log(data)
            vm.womanSizes = data;
          }, function(){});
        }

        vm.changeManProduct = function(product){
          vm.manSelectedProduct = product;
          Requester.get('sizesguide/sizes/' + product, {}).then(function(data){console.log(data)
            vm.manSizes = data;
          }, function(){});
        }

        function getData(){
          Requester.get('sizesguide/styles', {}).then(function(data){
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
              vm.man.products[styles[i].name.replace(/ /g,"-")].push(styles[i].code);

            } else {
              if(vm.woman.styles.indexOf(styles[i].name) === -1){
                vm.woman.styles.push(styles[i].name);
              }
              if(vm.woman.products[styles[i].name.replace(/ /g,"-")] == undefined) {
                vm.woman.products[styles[i].name.replace(/ /g,"-")] = [];
              }
              vm.woman.products[styles[i].name.replace(/ /g,"-")].push(styles[i].code);
            }
          }

          console.log(vm.man);
          console.log(vm.woman)
        }

      }
})();
