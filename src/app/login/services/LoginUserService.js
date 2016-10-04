'use strict';

module.exports = LoginUserService;

/**
 * @ngInject
 */
function LoginUserService() {
    var UserService = {
        login: login
    };

    return UserService;

    //////////

    function login() {
        console.debug('Creating a user');
    }
}

