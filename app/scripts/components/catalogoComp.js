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
                                   imgs: [{color : '#fff', img: 'home-img-05', url:'', class: 'producto'},
                                          {color : '#fff', img: 'home-img-04', url:'', class: 'producto'},
                                          {color : '#fff', img: 'home-img-06', url:'', class: 'producto'},
                                          {color : '#fff', img: 'home-img-07', url:'', class: 'producto'},
                                          {color : '#fff', img: 'home-img-07', url:'', class: 'producto'}
                                        ]
                                 }]
                        }
        }


      }
})();
