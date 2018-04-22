(function() {
    'use strict';

    angular
        .module('app')
        .controller('initController', initController);

    initController.$inject = ['$scope', '$filter'];

    function initController($scope, $filter) {
        var vm = this;
        vm.id = 4444442;
        vm.city = "Albany";
        vm.$scope = $scope;
        vm.$filter = $filter;
        vm.sampleList = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8'];
        vm.arrayE = [{
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

        vm.selected = vm.$filter('filter')(vm.arrayE, function(value, index, array) { return value.id === vm.id })
        activate();

        ////////////////

        function activate() {

            console.log(vm.$filter('filter')(vm.arrayE, function(value, index, array) { return value.city === vm.city }));
        }
    }
})();