(function(){
    'use strict';
    angular.module('webApp')

    .component('contactForm', {
        templateUrl: 'views/common/contact-form.html',
        controller: componentController
      })

      function componentController(Requester){
        let vm = this;
        vm.emailSent = false;
        vm.contact;
        
        vm.sendEmail = function() {
          Requester.post('content/email', vm.contact).then(function(data){
            vm.emailSent = true;
          }, function(){

          });

        }

      }

})();
