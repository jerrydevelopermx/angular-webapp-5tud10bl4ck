(function(){
    'use strict';
    angular.module('webApp')

    .component('appNosotros', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/nosotros.html',
        controller: componentController
      })

      function componentController($scope, $anchorScroll, $location, Requester, ContentUtils){
        var vm = this;
        vm.content = [];
        vm.galleryParent = 'nosotros';
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
          Requester.get('content/chunks_page/nosotros', {}).then(function(data){
             ContentUtils.setType('');
              vm.content = ContentUtils.getProcessedData(data);
              //console.log(vm.content)
            }, function(){

            });
        }
      }
})();
