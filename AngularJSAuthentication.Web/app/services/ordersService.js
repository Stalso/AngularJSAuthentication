(function () {
    'use strict';
    angular.module('OrdersServiceModule', []).factory('ordersService', ['$http','$q', function ($http,$q) {
        var serviceBase = 'http://localhost:25103/';
        var ordersServiceFactory = {};

        var _getOrders = function () {

            return $http.get(serviceBase + 'api/orders').then(function (results) {
                return results;
            }, function (error) {
                console.log(error);
                return $q.reject(error);
            });
        };

        ordersServiceFactory.getOrders = _getOrders;

        return ordersServiceFactory;

    }]);
})();