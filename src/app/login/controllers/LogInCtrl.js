'use strict';

module.exports = SignUpCtrl;

/**
 * @ngInject
 */
function SignUpCtrl(LoginUserService) {
    var vm = this;

    vm.logIn = function(){
        LoginUserService.logIn();
    }
}

