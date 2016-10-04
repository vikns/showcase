'use strict';

module.exports = DashboardCtrl;

/**
 * @ngInject
 */
function DashboardCtrl($location,DashboardDataService,LoginUserService) {
    var vm = this;
    if (!LoginUserService.isLoggedIn()) {
        $location.path('/');
    }

    vm.fetch = function(){
        DashboardDataService.fetch();
    }
}

