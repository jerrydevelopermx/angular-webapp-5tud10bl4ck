(function(){
    'use strict';
    angular.module('webApp')

    .component('appInspirate', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/inspirate.html',
        controller: componentController
      })

      function componentController($scope, $anchorScroll, $location, Requester, ContentUtils){
        var vm = this;
        vm.content = [];
        vm.galleryParent = 'inspirate';

        function anchorScroll(){
          var newHash = 'logo-div';
              if ($location.hash() !== newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash(newHash);
              } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
              }
        }

        vm.$onInit = function(){
          anchorScroll();
          Requester.get('content/chunks/inspirate', {}).then(function(data){
              vm.content = ContentUtils.getProcessedData(data);
              console.log(vm.content)
            }, function(){

            });

          vm.presentacion = {
            class: 'content-column',
            title: {
                    text: 'Lleva tu estilo en cada momento en cualquier ocasión',
                    class: ''
            },
            description: {
                    text: 'Jeans que adaptan a tus movimientos ya sea desde un viaje o la oficina.',
                    class: ''
            },
            columns: []
          };

          vm.tira1 = {
            class: 'content-column',
            title: null,
            description: null,
            columns: [{
                      title: null,
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/inspirate-img-03.jpg',
                                 class: ''
                               }]
                      }]
          };

          vm.tira2 = {
            class: 'content-column',
            title: null,
            description: null,
            columns: [{
                      title: null,
                      class: 'content-column',
                      centered: true,
                      content: [{
                            elementType: 'p',
                            class: 'justified',
                            text: 'Looks de la temporada'
                          },
                          {
                            elementType: 'p',
                            class: 'justified',
                            text: 'Lleva tu estilo en todo momento en cualquier ocasión'
                          },
                          {
                            elementType: 'p',
                            class: 'justified',
                            text: 'Jeans que se adaptan a tus movimientos ya sea desde un viaje o la oficina.'
                          }]
                },
                {
                          title: null,
                          class: 'content-column',
                          centered: true,
                          content: [{
                                     elementType: 'img',
                                     src: 'images/inspirate-img-01-copy.jpg',
                                     class: 'cols-img'
                                   }]
                          }
              ]
          };

          vm.tira3 = {
            class: 'content-column',
            title: null,
            description: null,
            columns: [{
                      title: null,
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/inspirate-img-01-copy-2.jpg',
                                 class: 'cols-img'
                               }]
                      },
                      {
                      title: null,
                      class: 'content-column',
                      centered: true,
                      content: [{
                            elementType: 'p',
                            class: 'justified',
                            text: 'Looks de la temporada'
                          },
                          {
                            elementType: 'p',
                            class: 'justified',
                            text: 'Lleva tu estilo en todo momento en cualquier ocasión'
                          },
                          {
                            elementType: 'p',
                            class: 'justified',
                            text: 'Jeans que se adaptan a tus movimientos ya sea desde un viaje o la oficina.'
                          }]
                }
              ]
          };

          vm.tira4 = {
            class: 'content-column',
            title: { text: 'Inspírate con los estilos más únicos',
                     class: ''
            },
            description: { text: 'Sube una foto con el #BlackJeans a nuestro Instagram',
                     class: ''
            },
            columns: [{
                      title: null,
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/inspirate-img-04.jpg',
                                 class: 'cols-img'
                               }]
                      },
                      {
                      title: null,
                      class: 'content-column',
                      centered: true,
                      content: [{
                        elementType: 'img',
                        src: 'images/inspirate-img-05.jpg',
                        class: 'cols-img'
                      }]
                    },
                    {
                    title: null,
                    class: 'content-column',
                    centered: true,
                    content: [{
                      elementType: 'img',
                      src: 'images/inspirate-img-06.jpg',
                      class: 'cols-img'
                    }]
                    }
              ]
          };
          vm.compromiso = {
            class: 'content-column',
            title: null,
            description: null,
            columns: [{
                      title: 'Espacio resaltador de la marca El pasaje estándar Lorem Ipsum, usado desde el año 1500.',
                      class: 'content-column',
                      centered: true,
                      content: [{
                          elementType: 'p',
                          class: 'justified',
                          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis'
                      }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/nosotros-img-01.png',
                                 class: ''
                               }]
                    }]
          };

          vm.valores = {
            class: 'content-column',
            title: null,
            description: null,
            rows: [{
              columns: [{
                title: '',
                class: 'content-column',
                centered: true,
                content: [{
                           elementType: 'img',
                           src: 'images/nosotros-img-02.png',
                           class: ''
                         }]
                       },
                       {
                        title: 'Espacio resaltador de la marca El pasaje estándar Lorem Ipsum, usado desde el año 1500.',
                        class: 'content-column',
                        centered: true,
                        content: [{
                            elementType: 'p',
                            class: 'justified',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis'
                        }]
                      }]
            }]
          };


        }


      }
})();
