(function() {
    'use strict';

    angular
        .module('app')
        .factory('InitService', InitService);

    InitService.$inject = ['$q'];

    function InitService($q) {
        var service = {
            exposedFn: exposedFn
        };

        return service;

        ////////////////
        function exposedFn() {
            return new Promise((resolve, reaject) => {
                var arrayE = [{
                        "id": 1017109,
                        "firstName": "Black",
                        "lastName": "Widow",
                        "city": "Albany",
                        "state": "NY",
                        "zip": "12205",
                        "pets": 0,
                        "thumbnail": "colleen_papa.jpg"
                    },
                    {
                        "id": 1017105,
                        "firstName": "Tony",
                        "lastName": "Stark",
                        "city": "Albany",
                        "state": "NY",
                        "zip": "12211",
                        "pets": 6,
                        "thumbnail": "john_papa.jpg"
                    },
                    {
                        "id": 1017108,
                        "firstName": "Clint",
                        "lastName": "Barton",
                        "city": "Albany",
                        "state": "WA",
                        "zip": "98012",
                        "pets": 4,
                        "thumbnail": "ward_bell.jpg"
                    }
                ];
                resolve(arrayE);
            });
        }
    }
})();