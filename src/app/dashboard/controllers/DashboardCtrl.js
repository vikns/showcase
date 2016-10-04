'use strict';

module.exports = DashboardCtrl;

/**
 * @ngInject
 */
function DashboardCtrl(DashboardDataService) {
    var vm = this;

    vm.fetch = function(){
        DashboardDataService.fetch();
    }
}

