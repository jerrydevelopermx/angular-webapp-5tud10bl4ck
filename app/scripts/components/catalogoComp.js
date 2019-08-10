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

      function componentController($scope, $anchorScroll, $location, Requester){
        var vm = this;
        vm.styles = [];
        vm.selectedStyle = {};
        vm.$onInit = function(){
          console.log(vm.type)
          getStyles();


          /*vm.catalog = { type : 'Skinny',
                          grids: [{ type: '',
                                  class: 'grid-title',
                                   imgs: [{color : '#fff', img: 'home-img-05', url:'', class: 'producto', text:'Producto 1'},
                                          {color : '#fff', img: 'home-img-04', url:'', class: 'producto', text:'Producto 2'},
                                          {color : '#fff', img: 'home-img-06', url:'', class: 'producto', text:'Producto 3'},
                                          {color : '#fff', img: 'home-img-07', url:'', class: 'producto', text:'Producto 4'},
                                          {color : '#fff', img: 'home-img-07', url:'', class: 'producto', text:'Producto 5'}
                                        ]
                                 }]
                        } */
        }

        vm.changeStyle = function(style){ console.log(style)
          vm.selectedStyle = style
          getProducts();
        }

        function getStyles(){
          Requester.get('catalog/styles/' + vm.type, {}).then(function(data){ console.log(data)
            vm.styles = data;
          }, function(){});
        }

        function getProducts(){
          Requester.get('catalog/products/' + vm.selectedStyle.style_id, {}).then(function(data){
            console.log(data);
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
            imgs.push({color : '#fff', img: data[i].front_image, url:'', class: 'producto', text: data[i].code});
          }
          return imgs;
        }

      }
})();
