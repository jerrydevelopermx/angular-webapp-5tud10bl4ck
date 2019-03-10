(function(){
    'use strict';
    angular.module('webApp')

    .component('appProductos', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/productos.html',
        controller: componentController
      })



      function componentController($scope,$stateParams,$anchorScroll, $location, $rootScope){
        var vm = this;
        vm.tabSelectedIndex = 0;
        var partners = ['konica','oki','zebra'];

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
          if($stateParams.partner) {
            vm.tabSelectedIndex = partners.indexOf($stateParams.partner);
          }
          vm.activeTab = 0;
          var zebra = [{ type: 'Enmicadoras',
                          class: 'grid-title',
                          imgs: [{color : '#DAEEEF', img: 'productos/zebra/PL-220', url:'http://www.zebrabinding.com', class: 'zebra'},
                                  {color : '#DAEEEF', img: 'productos/zebra/ECO-220', url:'http://www.zebrabinding.com', class: 'zebra'}
                                ]
                        },
                          { type: 'Guillotinas',
                          class: 'grid-title',
                          imgs: [{color : '#DAEEEF', img: 'productos/zebra/HD-200', url:'http://www.zebrabinding.com', class: 'zebra'},
                                    {color : '#DAEEEF', img: 'productos/zebra/HD-300', url:'http://www.zebrabinding.com', class: 'zebra'},
                                  ]

                        },
                        { type: 'Engargoladoras',
                          class: 'grid-title',
                          imgs: [{color : '#DAEEEF', img: 'productos/zebra/TD-15', url:'http://www.zebrabinding.com', class: 'zebra'},
                                  {color : '#DAEEEF', img: 'productos/zebra/TD-20', url:'http://www.zebrabinding.com', class: 'zebra'},
                                ]

                        },{ type: 'Cubiertas',
                        class: 'grid-title',
                        imgs: [{color : '#DAEEEF', img: 'productos/zebra/CUB-CROMO', url:'http://www.zebrabinding.com', class: 'zebra'},
                                  {color : '#DAEEEF', img: 'productos/zebra/CUB-PLAT', url:'http://www.zebrabinding.com', class: 'zebra'},
                                  {color : '#DAEEEF', img: 'productos/zebra/CUB-CUADROS', url:'http://www.zebrabinding.com', class: 'zebra'},
                                  {color : '#DAEEEF', img: 'productos/zebra/CUB-ROMP', url:'http://www.zebrabinding.com', class: 'zebra'},
                                  {color : '#DAEEEF', img: 'productos/zebra/CUB-TRASL', url:'http://www.zebrabinding.com', class: 'zebra'}
                                ]
                        }];
          var konica = [{ type : 'Monocromo',
                          grids: [{ type: 'Nuevas',
                                  class: 'grid-title',
                                   imgs: [{color : '#DAEEEF', img: 'productos/konica/BH-4020', url:'http://www.konicaminolta.com.mx/doc/impresoras/todo_en_uno/4020/4020_ET.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-227', url:'http://www.agr.es/equipos/konica-minolta/KM-bizhub-227-DS-ES.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-368', url:'https://www.konicaminolta.es/fileadmin/content/es/Business_Solutions/Products/Sistemas-impresion-copia/Monocromo/KM-bizhub-368-DS-ES.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-558', url:'http://www.copydigsa.com/assets/558_et.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-808', url:'https://tienda.jrinter.mx/uploads/articulos_pdf/sat/BIZHUB-808_YuV.pdf', class: 'producto'}
                                        ]
                                 },{ type: 'Remanufacturadas',
                                 class: 'grid-title',
                                 imgs: [{color : '#DAEEEF', img: 'productos/konica/BH-287', url:'http://www.mapa.com.uy/archivos/impresora/18_17_12bizhub%20287.pdf', class: 'producto'},
                                            {color : '#DAEEEF', img: 'productos/konica/BH-364', url:'http://www.konicaminolta.com.mx/doc/MFP/bn/364e/364e_ET.pdf', class: 'producto'},
                                            //{color : '#DAEEEF', img: 'productos/konica/BH-423', url:'https://www.konicaminolta.es/es/business-solutions/productos/oficina/productos-discontinuados/impresoras-multifuncionales-discontinuadas/monocromo/bizhub-423/especificaciones.html', class: 'producto'},
                                            {color : '#DAEEEF', img: 'productos/konica/BH-552', url:'https://www.konicaminolta.es/fileadmin/content/es/Business_Solutions/Products/Sistemas-impresion-copia/Monocromo/KM-bizhub-552-652-DS-ES.pdf', class: 'producto'},
                                            {color : '#DAEEEF', img: 'productos/konica/BH-654', url:'http://www.fixsell.mx/pdf/KM-bizhub-654-DS-ES.pdf', class: 'producto'}
                                          ]
                                  }
                               ]
                        },
                        { type: 'Color',
                          grids: [{ type: 'Nuevas',
                                  class: 'grid-title',
                                   imgs: [{color : '#DAEEEF', img: 'productos/konica/BH-C-227', url:'https://www.konicaminolta.es/fileadmin/content/es/Business_Solutions/Products/Sistemas-impresion-copia/Color/KM-bizhub-C227-DS-ES.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-C-258', url:'http://www.copydigsa.com/assets/c258_et.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-C-368', url:'http://www.copydigsa.com/assets/c368_et.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-C-3851-FS', url:'https://www.konicaminolta.es/fileadmin/content/es/Business_Solutions/Products/Sistemas-impresion-copia/Color/KM-bizhub-C3851-DS-ES.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-C-458', url:'http://www.copydigsa.com/assets/c458_et.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-C-759', url:'http://conceptografico.com/pdf/konica/C-759.pdf', class: 'producto'}
                                        ]
                                 },{ type: 'Remanufacturadas',
                                    class: 'grid-title',
                                   imgs: [
                                          //{color : '#DAEEEF', img: 'productos/konica/BH-C-203', url:'https://www.copierservice.ro/wp-content/uploads/2016/11/BHC203.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-C-227', url:'https://www.konicaminolta.es/fileadmin/content/es/Business_Solutions/Products/Sistemas-impresion-copia/Color/KM-bizhub-C227-DS-ES.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-C-364', url:'https://www.konicaminolta.es/fileadmin/content/es/Business_Solutions/Products/Sistemas-impresion-copia/Color/KM-bizhub-C364-DS-ES.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-C-554', url:'https://www.konicaminolta.es/fileadmin/content/es/Business_Solutions/Products/Sistemas-impresion-copia/Color/KM-bizhub-C554-DS-ES.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-C-654', url:'http://acesacopiadoras.es/wp-content/uploads/2016/01/DS_bizhub_C654_C754_sp.pdf', class: 'producto'},
                                          {color : '#DAEEEF', img: 'productos/konica/BH-C-754', url:'http://acesacopiadoras.es/wp-content/uploads/2016/01/DS_bizhub_C654_C754_sp.pdf', class: 'producto'}
                                        ]
                                  }
                               ]
                       }];

            var oki = [{ type : 'Monocromo',
                            grids: [{ type: 'Nuevas',
                                      class: 'grid-title',
                                      imgs: [{color : '#DAEEEF', img: 'productos/oki/ES-5112', url:'https://www.oki.com/la/printing/images/ES5112dn%20esp%200317%20mx_tcm86-174622.pdf', class: 'producto'},
                                             {color : '#DAEEEF', img: 'productos/oki/ES-4172', url:'https://www.oki.com/la/printing/images/ES4172MFP%20esp%200117%20mx_tcm86-189692.pdf', class: 'producto'},
                                             {color : '#DAEEEF', img: 'productos/oki/ES-5162', url:'https://www.oki.com/mx/printing/images/ES5162MFP%20esp%200216%20mx_tcm80-189695.pdf', class: 'producto'},
                                             {color : '#DAEEEF', img: 'productos/oki/ES-5502', url:'https://www.oki.com/mx/printing/images/MPS5502mb%20esp%200317%20low_tcm80-224949.pdf', class: 'producto'}
                                           ]
                                    }]
                        },
                        { type: 'Color',
                          grids: [{ type: 'Nuevas',
                                    class: 'grid-title',
                                    imgs: [{color : '#DAEEEF', img: 'productos/oki/ES-5473', url:'https://www.oki.com/au/printing/images/OKI_ES5473MFP_Spec_Sheet_ANZ_R3_LR_tcm52-81509.pdf', class: 'producto'},
                                           {color : '#DAEEEF', img: 'productos/oki/ES-8473', url:'https://www.oki.com/mx/printing/images/ES8473MFP_SellSheet-072015_tcm80-189670.pdf', class: 'producto'}
                                         ]
                                  }]
                        }];


          vm.productos = {
              description: {
                    id:'main-div',
                    text: 'Trabajamos contigo y con lo mejor en tecnología, innovación y calidad para hacer crecer tu empresa. Somos distribuidores  autorizados de las marcas más reconocidas y que nos ofrecen garantía de satisfacción.',
                    class: 'subcontent-title justified'
                  },
            tabs: [
                { text: 'Aqui va otro',
                  img : 'images/konica-minolta.png',
                  navbar: ['Monocromo','Color'],
                  items:  konica
                  },
                  { text: 'Aqui va otro',
                    img : 'images/oki.png',
                    navbar: ['Monocromo','Color'],
                    items:  oki
                    },
                { text: 'Aqui va otro',
                  img : 'images/zebra.png',
                  navbar: null,
                  items:  zebra
                }
              ]
          }
        }
      }
})();
