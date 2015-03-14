(function(){
    var productListApp = angular.module('productListApp', ['ui.bootstrap','ngRoute']);
    var ITEMSPERPAGE = 6;
    var CURRENTPAGE = 2;
    productListApp.controller('ListController', function ($scope, $http, $location) {
        window.$listScope = $scope;
        $scope.currentPage = CURRENTPAGE;
        var changePage = function(){
            var url = '/allure/mock/list1.json';
            $http.get(url).success(function(data) {
                $scope.details = data.list.slice(0, ITEMSPERPAGE);
                $scope.itemsPerPage = ITEMSPERPAGE;
                $scope.totalItems = data.totalItems;
            });
        };


        $scope.pageChanged = function() {
            changePage();
        };

    });
})();
    
    
