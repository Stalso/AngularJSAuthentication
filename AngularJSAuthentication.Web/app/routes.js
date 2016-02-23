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
                templateUrl: "/app/views/orders.html",
                resolve: {
                    orders: function (ordersService) {
                        return ordersService.getOrders();
                    }
                }
            });

            $routeProvider.when("/refresh", {
                controller: "refreshController as controller",
                templateUrl: "/app/views/refresh.html"
            });

            $routeProvider.when("/tokens", {
                controller: "tokensManagerController as controller",
                templateUrl: "/app/views/tokens.html"
            });
            $routeProvider.otherwise({ redirectTo: "/home" });
            $locationProvider.html5Mode(true);

        }])
     .run(['authService', function (authService) {
         authService.fillAuthData();
     }]);
})();