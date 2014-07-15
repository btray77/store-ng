(function (define) {
    "use strict";

    define(["category/init"], function (categoryModule) {
        categoryModule
            .controller("categoryListController", [
                "$scope",
                "$routeParams",
                "$categoryApiService",
                function ($scope, $routeParams, $categoryApiService) {
                    $scope.productsList = [];
                    $scope.paths = {};
                    $scope.categoryId = $routeParams.id;
                    $scope.category = {};

                    $scope.blocks = {
                        "sort": false,
                        "search": false,
                        "filter": false
                    };

                    $scope.toggleBlock = function (block) {
                        return $scope.blocks[block] ? $scope.blocks[block] = false : $scope.blocks[block] = true;
                    };

                    $categoryApiService.getProducts({"id": $scope.categoryId}).$promise.then(
                        function (response) {
                            var result = response.result || [];
                            $scope.productsList = result;
                        }
                    )

                    $categoryApiService.load({"id": $scope.categoryId}).$promise.then(
                        function (response) {
                            var result = response.result || [];
                            $scope.category = result;
                        }
                    );

                    $scope.sortByPrice = function (order) {
                        $scope.productsList.sort(function (a, b) {
                            if (order === "asc") {
                                return a.price > b.price;
                            } else {
                                return a.price < b.price;
                            }
                        });
                    };

                    $scope.sortByName = function (order) {
                        $scope.productsList.sort(function (a, b) {
                            if (order === "asc") {
                                return a.name > b.name;
                            } else {
                                return a.name < b.name;
                            }
                        });
                    };
                }
            ]);
        return categoryModule;
    });
})(window.define);