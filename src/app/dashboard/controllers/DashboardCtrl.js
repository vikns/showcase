'use strict';

module.exports = DashboardCtrl;
/**
 * @ngInject
 */
function DashboardCtrl($scope,$location,$firebaseObject,UserService) {
    var vm = this;
    //if (!UserService.isLoggedIn()) {
    //    goHome();
    //}

    synchronizeTable();

    function synchronizeTable() {
        var firebase=require('firebase');
        var refProperties=firebase.database().ref().child("properties");
        var syncObject = $firebaseObject(refProperties);
        syncObject.$bindTo($scope,"properties");
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

