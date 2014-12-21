(function (define) {
    "use strict";

    /*
     *  HTML top page header manipulation stuff
     */
    define([
        "common/init"
    ], function (commonModule) {

        commonModule
            /*
             *  $productApiService interaction service
             */
            .service("$commonApiService", ["$resource", "REST_SERVER_URI", function ($resource, REST_SERVER_URI) {

                var categoryBaseURL = REST_SERVER_URI;
                var methods = {
                    "getProducts": {
                        method: "POST",
                        url: categoryBaseURL + "/product/list"
                    },
                    "getCategories": {
                        method: "GET",
                        url: categoryBaseURL + "/category/tree"
                    },
                    "getRewriteUrls": {
                        method: "GET",
                        url: REST_SERVER_URI + "/url_rewrite/list"
                    }
                };

                return $resource(categoryBaseURL, {}, methods);
            }]
        );

        return commonModule;
    });

})(window.define);