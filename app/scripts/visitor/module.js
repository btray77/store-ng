(function (define) {
    "use strict";

    /*
     *  requireJS module entry point
     *  (to use that module you should include it to main.js)
     */
    define([
            "visitor/service/api",

            "visitor/controller/registration",
            "visitor/controller/login"
        ],
        function (visitorModule) {

            return visitorModule;
        });

})(window.define);