(function () {
    'use strict';

    angular.module('routes', [
        // Angular modules 
        'ngRoute'

        // Custom modules 

        // 3rd Party Modules

    ]).config([
        // Angular modules 
        '$httpProvider',
        '$routeProvider',
        '$locationProvider',
        //'authInterceptorService',
        function ($httpProvider, $routeProvider, $locationProvider) {
          
            $routeProvider.when("/home", {
                controller: "homeController as controller",
                templateUrl: "/app/views/home.html"
            });

            $routeProvider.when("/login", {
                controller: "loginController  as controller",
                templateUrl: "/app/views/login.html"
            });

            $routeProvider.when("/signup", {
                controller: "signupController  as controller",
                templateUrl: "/app/views/signup.html"
            });

            $routeProvider.when("/orders", {
                controller: "ordersController  as controller",
                templateUrl: "/app/views/orders.html"
            });

            $routeProvider.otherwise({ redirectTo: "/home" });
            $locationProvider.html5Mode(true);

        }])
     .run(['authService', function (authService) {
         authService.fillAuthData();
     }]);
})();