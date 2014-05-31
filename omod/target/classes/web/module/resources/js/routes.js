define(['js/app', 'config'], function (angexample, config) {
    'use strict';

    angexample.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/register', {
                controller: 'RegisterCtrl', 
                templateUrl: config.resourceLocation + '/partials/Register.html'
            });
    }]);
});