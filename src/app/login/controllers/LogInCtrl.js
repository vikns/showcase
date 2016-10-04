'use strict';

module.exports = LogInCtrl;

/**
 * @ngInject
 */
function LogInCtrl($scope,$location,LoginUserService) {
    var vm = this;

    vm.logIn = function(){
        LoginUserService.logIn($scope.email,$scope.password,function(successful){
            if(successful){
                // navigate to /dashboard
                console.log("Login-Successful");
                $location.path('/dashboard');
            }
            else {
                console.log("Login-Failure");
            }
        });
    }
}

