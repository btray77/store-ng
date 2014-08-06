"use strict";

window.name = "NG_DEFER_BOOTSTRAP!"; // http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap

require.config({
    "baseUrl": "scripts",
    "paths": {
        "themeFiles": "design/themeFiles",
        "angular": "../lib/angular/angular.min",

        "angular-scenario": "../lib/angular/angular-scenario.min",
        "angular-sanitize": "../lib/angular/angular-sanitize.min",
        "angular-route": "../lib/angular/angular-route.min",
        "angular-resource": "../lib/angular/angular-resource.min",
        "angular-cookies": "../lib/angular/angular-cookies.min",
        "angular-mocks": "../lib/angular/angular-mocks",

        "angular-animate": "../lib/angular/angular-animate.min",
        "angular-bootstrap": "../lib/angular/ui-bootstrap-tpls.min"
    },
    "shim": {
        "angular": {exports: "angular"},

        "angular-route": ["angular"],
        "angular-cookies": ["angular"],
        "angular-sanitize": ["angular"],
        "angular-resource": ["angular"],
        "angular-animate": ["angular"],

        "angular-mocks": { deps: ["angular"], exports: "angular.mock"},
        "angular-bootstrap": { deps: ["angular"], exports: "uiBootstrap"}
    },
    "priority": ["angular"]
});

require([
        "angular",
        "angular-bootstrap",
        "design/module",
        "common/module",

        "visitor/module",
        "category/module",
        "pdp/module",
        "cart/module",
        "checkout/module"
    ],
    function (angular) {
        angular.element(document).ready(function () {

            var modules = Object.keys(angular.module);
            angular.resumeBootstrap(modules);

            jQuery(document).ready(function ($) {
                jQuery(".accordion a").on("click", function () {
                    console.log($(this).parent());
                    $(this).parent().toggleClass("active");

                });
            });
        });
    }
);
