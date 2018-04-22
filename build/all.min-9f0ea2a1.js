(function() {
    'use strict';

    angular.module('app', ['ui.select', 'ngAnimate', 'ngRoute', 'ngSanitize'])
        .config(function(uiSelectConfig) {
            uiSelectConfig.theme = 'bootstrap';
            uiSelectConfig.resetSearchInput = true;
            uiSelectConfig.appendToBody = true;
            uiSelectConfig.recordClickType = 'click';

        });
})();
(function() {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/', {
                    templateUrl: '/src/client/src/example.html',
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
function viewMore($timeout) {
    return {
        restict: 'EA',
        controllerAs: 'viewmore',
        template: '<li ng-show="viewmore.showViewMore" ng-style="viewmore.liSetStyle"><button ng-click="viewmore.showMoreLess()" ng-style="viewmore.btnSetStyle" type="button">{{viewmore.showMore?viewmore.showLessText:viewmore.showMoreText}}</button></li>',
        transclude: false,
        replace: true,
        scope: {
            list: '=',
            isStatic: '@'
        },
        bindToController: {
            limit: '@',
            showMoreText: '@',
            showLessText: '@',
            liStyle: '@',
            btnStyle: '@',


        },
        controller: function($scope) {
            const liDefaultStyle = {
                    'display': 'flex',
                    'align-items': 'center',
                    'flex-flow': 'row wrap',
                    'justify-content': 'center',
                    'background': 'none'
                },
                btnDefaultstyle = {
                    'font-size': '12px',
                    'font-weight': 'bold',
                    'outline': 'none',
                    'color': '#4594d1',
                    'background': 'none',
                    'border': 'none',
                    'padding': '5px'
                };

            this.liSetStyle = this.liStyle ? this.liStyle : liDefaultStyle;
            this.btnSetStyle = this.btnStyle ? this.btnStyle : btnDefaultstyle;
            this.showMore = false;
            this.showViewMore = false;
        },
        link: function(scope, elem, attr, ctrl, transclude) {
            ctrl.updateLi = (showLimited = false) => {
                $timeout(function() {
                    let li = elem.parent().find('li');
                    if (li.length - 1 > ctrl.limit) {
                        Array.prototype.forEach.call(li, (node, i) => {
                            if (i >= ctrl.limit && i !== li.length - 1)
                                node.style.display = showLimited ? 'block' : 'none';
                        });
                        ctrl.showViewMore = true;
                    } else {
                        ctrl.showViewMore = false;
                    }
                }, 0);
            };

            if (!scope.isStatic) {
                scope.$watch('list', function(value) {
                    ctrl.updateLi();
                });
            } else {
                ctrl.updateLi();
            }

            ctrl.showMoreLess = () => {
                ctrl.showMore = !ctrl.showMore;
                ctrl.updateLi(ctrl.showMore);
            };

        }
    };
}

angular
    .module('app')
    .directive('viewMoreLess', ['$timeout', viewMore]);
angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/example.html","<div>hello world<div class=select-box><h3>Bootstrap theme</h3><p>Selected: {{vm.id}}</p><ui-select ng-model=vm.id theme=selectize style=\"width: 300px;\" title=\"Choose a country\" append-to-body=true><ui-select-match placeholder=\"Select or search a country in the list...\">{{$select.selected.value.firstName}}</ui-select-match><ui-select-choices repeat=\"arr.value.id as (key, arr) in vm.arrayE\"><span ng-bind-html=arr.value.firstName></span> <small ng-bind-html=arr.value.lastName></small></ui-select-choices></ui-select><p class=\"alert alert-info positioned\">The select dropdown menu should be displayed above this element.</p></div><ol><li ng-repeat=\"(key, value) in vm.arrayE\">{{value.firstName}}</li><div view-more-less limit=4 show-more-text=\"Show More &#x25BC;\" show-less-text=\"Show Less &#x25B2;\" list=vm.sampleList></div></ol></div>");}]);