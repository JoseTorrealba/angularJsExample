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