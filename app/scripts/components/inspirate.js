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
          Requester.get('content/chunks_page/inspirate', {}).then(function(data){
              ContentUtils.setType('');
              vm.content = ContentUtils.getProcessedData(data);
            }, function(){

            });

        }


      }
})();
