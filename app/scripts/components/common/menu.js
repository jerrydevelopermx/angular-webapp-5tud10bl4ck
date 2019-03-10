(function(){
    'use strict';
    angular.module('webApp')

    .component('appMenu', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/menu.html',
        controller: componentController
      })

      function componentController($scope, $timeout, $mdSidenav, $rootScope, $location){

        var vm = this;
        vm.aja;
        vm.toggleLeft = buildDelayedToggler('left');
        vm.toggleRight = buildToggler('right');
        vm.isOpenRight = function() {
          return $mdSidenav('right').isOpen();
        };

        vm.$onInit = function(){
          vm.currentNav = $location.path().substring(1,$location.path().length);
        }

        vm.menuClicked = function(){
          $mdSidenav('right').close()
            .then(function() {
              //return;
            });
        };

        function debounce(func, wait, context) {
          var timer;
          return function debounced() {
            var context = $scope,
              args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
              timer = undefined;
              func.apply(context, args);
            }, wait || 10);
          };
        }

        function buildDelayedToggler(navID) {
          return debounce(function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
              .toggle()
              .then(function() {
                //$log.debug("toggle " + navID + " is done");
              });
          }, 0);
        }

        function buildToggler(navID) {
          return function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
              .toggle()
              .then(function() {
              //  $log.debug("toggle " + navID + " is done");
              });
          }
        }

        $rootScope.$on("$locationChangeStart", function(event, next, current) {
          var spl = next.split('/');
          vm.currentNav = spl[4] != '' ? spl[4] : 'home';
          if(vm.currentNav.indexOf('#') !== -1){
            vm.currentNav = vm.currentNav.substring(0, vm.currentNav.indexOf('#'))
          }
        })
      }
})();
