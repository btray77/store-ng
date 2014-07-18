(function (define) {
    "use strict";

    /*
     *  HTML top page header manipulation stuff
     */
    define(["visitor/init"], function (productModule) {
        productModule
            /*
             *  $productApiService interaction service
             */
            .service("$visitorApiService", ["$resource", "REST_SERVER_URI", function ($resource, REST_SERVER_URI) {

                var visitorBaseURL = REST_SERVER_URI + "/visitor";

                return $resource(visitorBaseURL,{},
                    {
                        "register": {
                            method: "POST",
                            url: visitorBaseURL + "/register"
                        },
                        "loginFacebook": {
                            method: "POST",
                            url: visitorBaseURL + "/login-facebook"
                        },
                        "login": {
                            method: "POST",
                            url: visitorBaseURL + "/login"
                        },
                        "info": {
                            method: "GET",
                            url: visitorBaseURL + "/info",
                            "withCredentials": true,
                            "transformRequest": angular.identity,
                            "headers": {
                                "Cookie" : "key=11231232123123123123123"
                            }
                        }
                    });
            }]);

        return productModule;
    });

})(window.define);