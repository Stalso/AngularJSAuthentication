(function () {
    'use strict';
    angular.module('TokensManagerCtrl', []).controller('tokensManagerController', ['tokensManagerService', function (tokensManagerService) {
        var vm = this;
        vm.refreshTokens = [];

        tokensManagerService.getRefreshTokens().then(function (results) {

            vm.refreshTokens = results.data;

        }, function (error) {
            alert(error.data.message);
        });

        vm.deleteRefreshTokens = function (index, tokenid) {

            tokenid = window.encodeURIComponent(tokenid);

            tokensManagerService.deleteRefreshTokens(tokenid).then(function (results) {

                vm.refreshTokens.splice(index, 1);

            }, function (error) {
                alert(error.data.message);
            });
        }
    }])
})();