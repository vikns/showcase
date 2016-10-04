'use strict';

module.exports = config;

/**
 * @ngInject
 */
function config($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    var firebase=require('firebase');
    var config = {
        apiKey: "AIzaSyBOPOspk91bCvV1i8vLNLM-xGUdAHWMoNs",
        authDomain: "bookbottles-showcase.firebaseapp.com",
        databaseURL: "https://bookbottles-showcase.firebaseio.com",
        storageBucket: "bookbottles-showcase.appspot.com",
        messagingSenderId: "75635393573"
    };
    firebase.initializeApp(config);
}
