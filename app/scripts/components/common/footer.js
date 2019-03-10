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
                                            url:'#!/'
                                          },
                                          {
                                            label:'Venta a mayoreo',
                                            url:'#!/'
                                          },
                                          {
                                            label:'Contacto',
                                            url:'#!/'
                                          }
                                          ]
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
                                              url:'https://www.facebook.com/DAEN-SA-De-CV-364636657018087/',
                                              label: '',
                                              class:'icon rounded medium fa-facebook'
                                            },
                                            {
                                              url: 'https://twitter.com/DaenCopiadoras',
                                              label:'',
                                              class: 'icon rounded medium fa-twitter'
                                            },
                                            {
                                              url: 'https://twitter.com/DaenCopiadoras',
                                              label:'',
                                              class: 'icon rounded medium fa-youtube'
                                            },
                                            {
                                              url: 'https://twitter.com/DaenCopiadoras',
                                              label:'',
                                              class: 'icon rounded medium fa-pinterest'
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
