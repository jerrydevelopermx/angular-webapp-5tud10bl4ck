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

      function componentController($scope,$anchorScroll,$location){
        var vm = this;


        vm.$onInit = function(){
          vm.mujeres = {
            class: '',
            title: null,
            description: null,
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/home-img-04@2x.png',
                                 class: 'main-img'
                               },
                               {
                                   elementType: 'p',
                                   class: 'justified',
                                   text: 'Producto 1'
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
                               },
                               {
                                   elementType: 'p',
                                   class: 'justified',
                                   text: 'Producto 2'
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
                               },
                               {
                                   elementType: 'p',
                                   class: 'justified',
                                   text: 'Producto 3'
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
                               },
                               {
                                   elementType: 'p',
                                   class: 'justified',
                                   text: 'Producto 4'
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

          vm.hombres = {
            class: '',
            title: null,
            description: null,
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/inspirate-img-06.jpg',
                                 class: 'main-img'
                               },
                               {
                                   elementType: 'p',
                                   class: 'justified',
                                   text: 'Producto 1'
                               }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/inspirate-img-06.jpg',
                                 class: 'main-img'
                               },
                               {
                                   elementType: 'p',
                                   class: 'justified',
                                   text: 'Producto 2'
                               }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/inspirate-img-06.jpg',
                                 class: 'main-img'
                               },
                               {
                                   elementType: 'p',
                                   class: 'justified',
                                   text: 'Producto 3'
                               }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/inspirate-img-06.jpg',
                                 class: 'main-img'
                               },
                               {
                                   elementType: 'p',
                                   class: 'justified',
                                   text: 'Producto 4'
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
                                      url:'#!/hombres'
                                  }]

                          }]
              }
          };
        }


      }
})();
