(function(){
    'use strict';
    angular.module('webApp')

    .component('appMain', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/main.html',
        controller: componentController
      })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
          vm.presentacion = {
                      class: 'content-column',
                      title: {
                              text: 'Lleva tu estilo en todo momento, en cualquier ocasión',
                              class: 'subcontent-title-white'
                            },
                      description: {
                              text: 'Jeans que se adaptan a tus movimientos, ya sea en un viaje o la oficina.',
                              class: 'content-column centered'
                            },
                      columns: [{
                                title: '',
                                class: 'content-column',
                                centered: true,
                                content: [{
                                           elementType: 'img',
                                           src: 'images/home-img-01.png',
                                           class: 'main-img'
                                         }]
                              },
                              {
                                title: '',
                                class: 'content-column',
                                centered: true,
                                content: [{
                                           elementType: 'img',
                                           src: 'images/home-img-02.png',
                                           class: 'main-img'
                                         }]
                              },
                              {
                                title: '',
                                class: 'content-column',
                                centered: true,
                                content: [{
                                           elementType: 'img',
                                           src: 'images/home-img-03.jpg',
                                           class: 'main-img'
                                         }]
                              }],
                      bottom :null
                  };

          vm.productos = {
            class: 'content-column blue-background',
            title: {
                    text: 'Nuestros productos',
                    class: 'subcontent-title-white'
                  },
            description: null,
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/home-img-04@2x.png',
                                 class: 'main-img'
                               }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/home-img-05@2x.png',
                                 class: 'main-img'
                               }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/home-img-06@2x.png',
                                 class: 'main-img'
                               }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/home-img-07@2x.png',
                                 class: 'main-img'
                               }]
                    }],
              bottom : {
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
          };

          vm.nosotros = {
            class: 'content-column background-nosotros',
            title: {
                    text: 'Espacio resaltador de la marca',
                    class: 'subcontent-title-white'
                  },
            description: null,
            columns: [{
                            title: '',
                            class: 'content-column',
                            centered: true,
                            content: [{
                                       elementType: 'p',
                                       class: 'centered',
                                       text: 'Jeans que se adaptan a tus movimientos, ya sea en un viaje o la oficina.'
                                     }]
                          }],
              bottom : {
                            class: '',
                            content: [{
                                        elementType: 'ul',
                                        class: 'actions centered',
                                        list: [{
                                                  label:'Conócenos',
                                                  class:'button medium',
                                                  url:'#!/nosotros'
                                              }]

                                      }]
                          }
          };

          vm.encuentranos = {
            class: 'content-column grey-background',
            title: {
                    text: 'Encuéntranos en',
                    class: 'subcontent-title-white'
                  },
            description: null,
            columns: [{
                            title: '',
                            class: 'content-column',
                            centered: true,
                            content: [{
                                       elementType: 'img',
                                       src: 'images/shop.png',
                                       class: ''
                                     },
                                     {
                                       elementType: 'p',
                                       class: '',
                                       text: 'Nombre del lugar'
                                     },
                                     {
                                       elementType: 'p',
                                       class: '',
                                       text: 'Dirección completa del lugar, colonia, calle'
                                     }]
                          },
                          {
                            title: '',
                            class: 'content-column',
                            centered: true,
                            content: [{
                                       elementType: 'img',
                                       src: 'images/shop.png',
                                       class: ''
                                     },
                                     {
                                       elementType: 'p',
                                       class: '',
                                       text: 'Nombre del lugar'
                                     },
                                     {
                                       elementType: 'p',
                                       class: '',
                                       text: 'Dirección completa del lugar, colonia, calle'
                                     }]
                            }],
                  bottom :null
          };

          vm.contacto = {
            class: 'content-column',
            title: {
                    text: '¡Queremos conocerte!',
                    class: 'subcontent-title-white'
                  },
            description: null,
            columns: [{
                            title: '',
                            class: 'content-column',
                            centered: true,
                            content: [{
                                       elementType: 'p',
                                       class: 'justified',
                                       text: 'FORM DE CONTACTO'
                                     }]
                          }],
                  bottom :null
          };

        };

      }

})();
