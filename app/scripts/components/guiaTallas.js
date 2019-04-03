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

      function componentController($scope,$anchorScroll,$location){
          var vm = this;
          var mujeres = [
            { type:'Cintura', small: '64', medium: '74', long: '96' },
            { type:'Cadera', small: '86', medium: '96.5', long: '118' },
            { type:'Largo', small: '1.5m', medium: '1.58-1.6 m', long: '1.76m+' }
          ];
          var hombres = [
            { type:'Cintura', small: '74', medium: '84', long: '106' },
            { type:'Cadera', small: '96', medium: '106.5', long: '130' },
            { type:'Largo', small: '1.6m', medium: '1.7m', long: '1.80+' }
          ];

        vm.$onInit = function(){
          vm.img = 'tallas-img-01.jpg';
          vm.tallas = mujeres;
          vm.gender = 'mujer';
        }

        vm.changeGender = function(gender){
          vm.img = (gender == 'hombre') ? 'inspirate-img-06.jpg' : 'tallas-img-01.jpg';
          vm.tallas = (gender == 'hombre') ? hombres : mujeres;
          vm.gender = gender;
        }


      }
})();
