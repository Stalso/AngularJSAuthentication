(function () {
    'use strict';
    angular.module('RefreshCtrl', []).controller('refreshController', ['$location', 'authService', function ($location, authService) {
        var vm = this;
        vm.authentication = authService.authentication;
        vm.tokenRefreshed = false;
        vm.tokenResponse = null;

        vm.refreshToken = function () {

            authService.refreshToken().then(function (response) {
                vm.tokenRefreshed = true;
                vm.tokenResponse = response;
            },
             function (err) {
                 $location.path('/login');
             });
        };
    }])
})();