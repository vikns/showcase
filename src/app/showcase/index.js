'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),
        require('angularfire'),

        /* Sign Up */
        require('../signup'),

        /* Log In */
        require('../login'),

        /* Dashboard */
        require('../dashboard')
    ])
    .config(require('./config'))
    .config(require('./route'));
