(function() {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/', {
                    templateUrl: '/client/src/example.html',
                    controller: 'initController',
                    controllerAs: 'vm',
                    title: 'bind to controller',
                    settings: {
                        nav: 3,
                        content: 'Bind to Controller'
                    }
                })
                .otherwise({ redirectTo: '/' });
        }]);




})();