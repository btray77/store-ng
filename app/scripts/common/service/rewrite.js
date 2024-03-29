(function (define) {
    "use strict";

    /**
     *  HTML top page header manipulation stuff
     */
    define([
            "common/init"
        ],
        function (commonModule) {

            commonModule
            /**
             *  $commonRewriteService implementation
             */
                .service("$commonRewriteService", [
                    "$q",
                    "$commonApiService",
                    function ($q, $commonApiService) {
                        // Variables
                        var rules, deferInit;

                        // Functions
                        var init, getRewrite;

                        deferInit = $q.defer();

                        init = function () {

                            if (typeof rules !== "undefined") {
                                return deferInit.promise;
                            }

                            $commonApiService.getRewriteUrls().$promise.then(
                                function (response) {
                                    rules = response.result || [];
                                    deferInit.resolve(rules);
                                }
                            );

                            return deferInit.promise;
                        };

                        getRewrite = function (type, id) {
                            if(typeof  rules === "undefined"){
                                return false;
                            }

                            var i;
                            for (i = 0; i < rules.length; i += 1){
                                if(rules[i].type === type && rules[i].rewrite === id){
                                    return rules[i].url;
                                }
                            }
                            return false;
                        };

                        return {
                            "init": init,
                            "getRewrite": getRewrite
                        };
                    }
                ]
            );

            return commonModule;
        });

})(window.define);