(function(){
    'use strict';
    angular.module('webApp')

    .component('footerComp', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/common/footer.html',
        controller: componentController
      })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
          vm.footer = {
            class: 'content-column-footer black-background',
            title: null,
            description: null,
            columns: [{
                      title: '',
                      class: '',
                      titleClass:'centered',
                      centered: false,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/logo-blanco2.png',
                                 class: ''
                               }]
                    },
                    { title: 'Compañía',
                      class: '',
                      titleClass:'centered',
                      centered: false,
                      content: [{
                                  elementType: 'ul',
                                  class: 'footer-list',
                                  list: [{
                                            label:'Sobre nosotros',
                                            url:'#!/nosotros'
                                          },
                                          {
                                            label:'Guía de tallas',
                                            url:'#!/guia'
                                          },
                                          {
                                            label:'Venta a mayoreo',
                                            url:'#!/mayoreo'
                                          }]
                                }]
                      },
                      { title: 'Novedades, productos y promociones. ¡Entérate!',
                      titleClass:'centered',
                      class: '',
                        centered: true,
                        content: [{
                                    elementType: 'ul',
                                    class: 'icons',
                                    list: [{
                                              url:'https://www.facebook.com/StudioBlackJeans/',
                                              label: '',
                                              class:'icon rounded medium fa-facebook',
                                              target: '_blank'
                                            },
                                            {
                                              url: 'https://instagram.com/studioblack.jeans',
                                              label:'',
                                              class: 'icon rounded medium fa-instagram',
                                              target: '_blank'
                                            }
                                          ]

                                  }]
                      }],
              bottom : {
                class: '',
                content: [{
                           elementType: 'p',
                           class: 'centered',
                           text: '2019. Studio Black Jeans. Todos los derechos reservados. '
                }]
              }
          };

        }
      }

})();
