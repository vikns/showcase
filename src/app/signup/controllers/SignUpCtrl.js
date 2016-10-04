'use strict';

module.exports = SignUpCtrl;

/**
 * @ngInject
 */
function SignUpCtrl($scope,$location,UserService) {
    var vm = this;

    vm.signUp = function () {
        UserService.create($scope.email,$scope.password,function(successful){
            if(successful){
                console.log("Signup-Successful");
                $location.path('/dashboard');
            }
            else {
                console.log("Singup-Failure")
            }
        });

    }
}

