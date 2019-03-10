angular
  .module('webApp')
  .config(routes);

/**
 * @function routes
 */
function routes ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')
    $stateProvider
                .state('home', {
                    url: '/',
                    component: 'appMain',
                    publicPage: true
                })
                .state('nosotros', {
                    url: '/nosotros',
                    component: 'appNosotros',
                    publicPage: true
                })

                .state('contacto', {
                    url: '/contacto',
                    component: 'appContacto',
                    publicPage: true
                })
                .state('productos', {
                    url: '/productos',
                    component: 'appProductos',
                    publicPage: true
                })
                .state('partner', {
                    url: '/productos/:partner',
                    component: 'appProductos',
                    publicPage: true
                })

                .state('servicios', {
                    url: '/servicios',
                    component: 'appServicios',
                    publicPage: true
                })
                .state('detalleServicio', {
                    url: '/servicios/:servicio',
                    component: 'appServicios',
                    publicPage: true
                })

                .state('soporte', {
                    url: '/soporte',
                    component: 'appSoporte',
                    publicPage: true
                });
}
