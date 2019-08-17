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

      function componentController($scope, Requester, ContentUtils){
        var vm = this;
        vm.galleryParent = 'home';
        vm.contactFormMessage = ' ';
        var content = [];
        vm.content = [];



        vm.$onInit = function(){
          vm.contactFormMessage = 'Descubre las novedades, productos y promociones que tenemos para ti o aclara cualquier duda que tengas.';

          Requester.get('content/chunks/home', {}).then(function(data){
              ContentUtils.setType('');
              vm.content = ContentUtils.getProcessedData(data);
              vm.content[1].bottom = {
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
                                    };
            }, function(){

            })

          /*
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
                  */
          //TODO
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
