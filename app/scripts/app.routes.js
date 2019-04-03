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

                .state('mayoreo', {
                    url: '/mayoreo',
                    component: 'appMayoreo',
                    publicPage: true
                })

                .state('guia', {
                    url: '/guia',
                    component: 'appGuia',
                    publicPage: true
                })

                .state('catalogo', {
                    url: '/catalogo',
                    component: 'appCatalogo',
                    publicPage: true
                })

                .state('inspirate', {
                    url: '/inspirate',
                    component: 'appInspirate',
                    publicPage: true
                });

}
