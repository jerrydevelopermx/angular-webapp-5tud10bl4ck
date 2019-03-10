(function(){
    'use strict';
    angular.module('webApp')

    .component('appContacto', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/contacto.html',
        controller: componentController
      })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
          //console.log($compile('<app-location></app-location>')(vm))
          vm.contacto = {
            class: 'content-column',
            title: null,
            description: null,
            columns: [{
                      title: 'Información de contacto',
                      class: 'content-column',
                      centered: true,
                      content: [{
                          elementType: 'p',
                          text: 'Dirección: 4 NORTE 608 COLONIA CENTRO PUEBLA, PUEBLA MÉXICO C.P. 72000'
                      },
                      {
                          elementType: 'p',
                          text: 'Teléfono: 01(222)4049195'
                      },
                      {
                          elementType: 'p',
                          text: 'E-mail: contacto@daencopiadoras.com.mx'
                      }]
                    }]
          };
        }
      }
})();
