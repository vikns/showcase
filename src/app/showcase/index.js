'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),

        /* Sign Up */
        require('../signup'),

        /* Log In */
        require('../login')
    ])
    .config(require('./config'))
    .config(require('./route'));
