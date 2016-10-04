'use strict';

module.exports = DashboardDataService;

/**
 * @ngInject
 */
function DashboardDataService() {
    var DataService = {
        fetch: fetchData
    };

    return DataService;

    //////////

    function fetchData() {
        console.debug('Fetching data');
    }
}

