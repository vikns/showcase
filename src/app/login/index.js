'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.login', [
        require('angular-ui-router')
    ])
    .config(require('./route'))
    .controller('LogInCtrl', require('./controllers/LogInCtrl'))
    .factory('LoginUserService', require('./services/LoginUserService'))
    .name;
