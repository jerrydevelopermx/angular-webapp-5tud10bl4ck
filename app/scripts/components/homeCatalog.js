(function(){
    'use strict';
    angular.module('webApp')

    .component('homeCatalog', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/homeCatalog.html',
        controller: componentController
      })

      function componentController($scope, $anchorScroll, $location, Requester, ContentUtils){
        var vm = this;
        vm.mujeres = [];

        vm.$onInit = function(){
          Requester.get('catalog/products_demo/mujer', {}).then(function(data){
              ContentUtils.setType('demoCatalog');
              vm.mujeres = ContentUtils.getProcessedData(data);
              vm.mujeres[0].bottom = {
                class: '',
                content: [{
                            elementType: 'ul',
                            class: 'actions centered',
                            list: [{
                                      label:'Ver más',
                                      class:'button medium',
                                      url:'#!/mujeres'
                                  }]

                          }]
              }
            }, function(){

            })

            Requester.get('catalog/products_demo/hombre', {}).then(function(data){
                ContentUtils.setType('demoCatalog');
                vm.hombres = ContentUtils.getProcessedData(data);
                vm.hombres[0].bottom = {
                  class: '',
                  content: [{
                              elementType: 'ul',
                              class: 'actions centered',
                              list: [{
                                        label:'Ver más',
                                        class:'button medium',
                                        url:'#!/hombres'
                                    }]

                            }]
                }
              }, function(){

              })

        }


      }
})();
