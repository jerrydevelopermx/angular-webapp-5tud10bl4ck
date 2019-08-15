(function(){
    'use strict';
    angular.module('webApp')

    .component('appMayoreo', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/mayoreo.html',
        controller: componentController
      })

      function componentController($scope, $anchorScroll, $location, Requester, ContentUtils){
        var vm = this;
        vm.galleryParent = 'mayoreo';
        vm.contactFormMessage = '';
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
          vm.contactFormMessage = '¡Escríbenos y recibe atención personalizada!';

          Requester.get('content/chunks/mayoreo', {}).then(function(data){
              ContentUtils.setType('');
              vm.content = ContentUtils.getProcessedData(data);
            }, function(){

            })


        }


      }
})();
