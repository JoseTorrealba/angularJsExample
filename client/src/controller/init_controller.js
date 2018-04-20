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
            },
            {
                "id": 1017104,
                "firstName": "Steve",
                "lastName": "Rogers",
                "city": "Albany",
                "state": "FL",
                "zip": "33746",
                "pets": 5,
                "thumbnail": "jesse_liberty.jpg"
            },
            {
                "id": 1017106,
                "firstName": "Thor",
                "lastName": "of Asgard",
                "city": "Raleigh",
                "state": "NC",
                "zip": "27601",
                "pets": 0,
                "thumbnail": "jason_salmond.jpg"
            },
            {
                "id": 4444441,
                "firstName": "Bruce",
                "lastName": "Banner",
                "city": "Grand Rapids",
                "state": "MI",
                "zip": "49503",
                "pets": 0,
                "thumbnail": "tim_heuer.jpg"
            },
            {
                "id": 4444442,
                "firstName": "Harry",
                "lastName": "Potter",
                "city": "Seattle",
                "state": "WA",
                "zip": "98101",
                "pets": 3,
                "thumbnail": "elijah_manor.jpg"
            },
            {
                "id": 4444443,
                "firstName": "Bilbo",
                "lastName": "Baggins",
                "city": "Phoenix",
                "state": "AZ",
                "zip": "85007",
                "pets": 2,
                "thumbnail": "esteban_garcia.jpg"
            },
            {
                "id": 4444444,
                "firstName": "Elessar",
                "lastName": "Telcontar",
                "city": "Nome",
                "state": "AK",
                "zip": "99762",
                "pets": 9,
                "thumbnail": "howard_dierking.jpg"
            },
            {
                "id": 4444445,
                "firstName": "Percy",
                "lastName": "Jackson",
                "city": "Baltimore",
                "state": "MD",
                "zip": "21117",
                "pets": 0,
                "thumbnail": "fritz_onion.jpg"
            },
            {
                "id": 4444446,
                "firstName": "Jerle",
                "lastName": "Shannara",
                "city": "Dallas",
                "state": "TX",
                "zip": "75212",
                "pets": 0,
                "thumbnail": "dan_wahlin.jpg"
            },
            {
                "id": 4444447,
                "firstName": "Menion",
                "lastName": "Leah",
                "city": "Highlands",
                "state": "TX",
                "zip": "77562",
                "pets": 2,
                "thumbnail": "brad_green.jpg"
            },
            {
                "id": 4444448,
                "firstName": "Severus",
                "lastName": "Snape",
                "city": "San Francisco",
                "state": "CA",
                "zip": "94111",
                "pets": 0,
                "thumbnail": "keith_sparkjoy.jpg"
            },
            {
                "id": 4444449,
                "firstName": "Sirius",
                "lastName": "Black",
                "city": "New York City",
                "state": "NY",
                "zip": "10001",
                "pets": 2,
                "thumbnail": "john_papa.jpg"
            },
            {
                "id": 4444450,
                "firstName": "Gandalf",
                "lastName": "the White",
                "city": "New Haven",
                "state": "CN",
                "zip": "06501",
                "pets": 8,
                "thumbnail": "rob_eisenberg.jpg"
            },
            {
                "id": 4444451,
                "firstName": "Arwen",
                "lastName": "Undómiel",
                "city": "Portland",
                "state": "OR",
                "zip": "97211",
                "pets": 0,
                "thumbnail": "julie_lerman.jpg"
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