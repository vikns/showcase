'use strict';

module.exports = UserService;

/**
 * @ngInject
 */

var loginState = false;
function UserService() {
    var UserService = {
        create: create,
        logIn: login,
        isLoggedIn: isLoggedIn,
        logOut: logOut
    };

    return UserService;

    //////////

    function create(email,password,cb) {
        loginState = true;
        cb(true);
    }

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
    function logOut(cb) {
        loginState = false;
        cb(true);
    }
}

