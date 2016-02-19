angular.module('AngularAuthApp', ['ngRoute', 'AuthInterceptor', 'routes', 'LocalStorageModule', 'angular-loading-bar', 'HomeCtrl', 'IndexCtrl', 'LoginCtrl', 'SighUpCtrl', 'OrdersCtrl', 'AuthServiceModule', 'OrdersServiceModule']).config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
}]);

//app.config(function ($routeProvider, $locationProvider) {

//    $routeProvider.when("/home", {
//        controller: "homeController",
//        templateUrl: "/app/views/home.html"
//    });

//    $routeProvider.when("/login", {
//        controller: "loginController",
//        templateUrl: "/app/views/login.html"
//    });

//    $routeProvider.when("/signup", {
//        controller: "signupController",
//        templateUrl: "/app/views/signup.html"
//    });

//    $routeProvider.when("/orders", {
//        controller: "ordersController",
//        templateUrl: "/app/views/orders.html"
//    });

//    $routeProvider.otherwise({ redirectTo: "/home" });
//    $locationProvider.html5Mode(true);
//});

//app.run(['authService', function (authService) {
//    authService.fillAuthData();
//}]);