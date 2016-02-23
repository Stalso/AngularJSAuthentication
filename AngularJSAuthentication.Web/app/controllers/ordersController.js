(function () {
    'use strict';
    angular.module('OrdersCtrl', []).controller('ordersController', ['ordersService','orders', function (ordersService,orders) {
    //angular.module('OrdersCtrl', []).controller('ordersController', ['ordersService', function (ordersService) {
        var vm = this;
        vm.orders = [];

        vm.orders = orders.data;
        //ordersService.getOrders().then(function (results) {

        //    vm.orders = results.data;

        //}, function (error) {
        //    //alert(error.data.message);
        //    return error;
        //});
    }])
})();