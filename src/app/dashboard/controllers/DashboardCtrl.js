'use strict';

module.exports = DashboardCtrl;

/**
 * @ngInject
 */
function DashboardCtrl($location,DashboardDataService,UserService) {
    var vm = this;
    if (!UserService.isLoggedIn()) {
        goHome();
    }

    vm.fetch = function(){
        DashboardDataService.fetch();
    }

    vm.logOut = function() {
        UserService.logOut(function(successful){
            goHome();
        })
    }

    function goHome() {
        $location.path('/');
    }
}

