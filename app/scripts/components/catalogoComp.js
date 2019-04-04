(function(){
    'use strict';
    angular.module('webApp')

    .component('catalogoComp', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/catalogoComp.html',
        controller: componentController
      })

      function componentController($scope,$anchorScroll,$location){
        var vm = this;


        vm.$onInit = function(){
          vm.catalog = { type : 'Skinny',
                          grids: [{ type: '',
                                  class: 'grid-title',
                                   imgs: [{color : '#fff', img: 'home-img-05', url:'', class: 'producto', text:'Producto 1'},
                                          {color : '#fff', img: 'home-img-04', url:'', class: 'producto', text:'Producto 2'},
                                          {color : '#fff', img: 'home-img-06', url:'', class: 'producto', text:'Producto 3'},
                                          {color : '#fff', img: 'home-img-07', url:'', class: 'producto', text:'Producto 4'},
                                          {color : '#fff', img: 'home-img-07', url:'', class: 'producto', text:'Producto 5'}
                                        ]
                                 }]
                        }
        }


      }
})();
