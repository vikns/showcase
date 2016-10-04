'use strict';

module.exports = LoginUserService;

/**
 * @ngInject
 */
var loginState = false;
function LoginUserService() {
    var UserService = {
        logIn: login,
        isLoggedIn: isLoggedIn
    };

    return UserService;

    //////////

    function login(email,password,cb) {
        console.log('Log in',email,password);
        if (email=="bookbottles" && password=="showcase") {
            loginState = true;
            cb(true)
        }
        else {
            loginState = false;
            cb(false)
        }
    }
    function isLoggedIn() {
        return loginState;
    }
}

