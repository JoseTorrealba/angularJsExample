(function() {
    'use strict';

    angular
        .module('app')
        .controller('initController', initController);

    initController.$inject = ['$scope', '$filter', 'InitService'];

    function initController($scope, $filter, InitService) {
        var vm = this;
        vm.id = 4444442;
        vm.city = "Albany";
        vm.$scope = $scope;
        vm.$filter = $filter;
        vm.sampleList = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8'];
        vm.title = 'initController';
        vm.arrayE = [];

        vm.selected = vm.$filter('filter')(vm.arrayE, function(value, index, array) { return value.id === vm.id })
        activate();

        ////////////////

        function activate() {
            InitService.exposedFn().then(
                function(res) {
                    vm.arrayE = res;
                }
            ).catch(function(err) {
                console.log(err);
            });

        }
    }
})();