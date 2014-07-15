(function (define) {
    "use strict";

    /*
     *  HTML top page header manipulation stuff
     */
    define(["category/init"], function (productModule) {
        productModule
            /*
             *  $productApiService interaction service
             */
            .service("$categoryApiService", ["$resource", "REST_SERVER_URI", function ($resource, REST_SERVER_URI) {

                var categoryBaseURL = REST_SERVER_URI + "/category";

                return $resource(categoryBaseURL, {}, {
                    "getProducts": {
                        method: "GET",
                        params: { id: "@id" },
                        url: categoryBaseURL + "/products/:id"
                    },
                    "load": {
                        method: "GET",
                        params: { id: "@id" },
                        url: categoryBaseURL + "/get/:id"
                    },
                    "getPath":{
                        method: "GET",
                        params: {
                            productId: "@productId",
                            mediaType: "@mediaType"
                        },
                        url: REST_SERVER_URI + "/product/media/path/:productId/:mediaType"
                    }
                });
            }]);

        return productModule;
    });

})(window.define);