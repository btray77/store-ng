(function (define) {
    "use strict";

    define([
            "angular",
            "angular-route",
            "angular-resource"
        ],
        function (angular) {
            /*
             *  Angular "categoryModule" declaration
             */
            angular.module.categoryModule = angular.module("categoryModule", ["ngRoute", "ngResource", "designModule"])

                /*
                 *  Basic routing configuration
                 */
                .config(["$routeProvider", function ($routeProvider) {
                    $routeProvider
                        .when("/category/products/:id", { templateUrl: "views/category/view.html", controller: "categoryListController" });
                }])

//                .run(["$designService", "$route", "$dashboardSidebarService", "$dashboardHeaderService",
//
//                    function ($designService, $route, $dashboardSidebarService, $dashboardHeaderService) {
//
//                        // NAVIGATION
//                        // Adds item in the left top-menu
//                        $dashboardHeaderService.addMenuItem("/category", "Category", "/category");
//
//                        // Adds item in the left sidebar
//                        $dashboardSidebarService.addItem("Category manage", "category", "glyphicon glyphicon-tasks", 80);
//                    }
//                ]);

            return angular.module.categoryModule;
        });

})(window.define);