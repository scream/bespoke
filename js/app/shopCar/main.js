define(['angular', 'jquery-cookie'], function(){
    
    var typeNum = 0;
    $.cookie.json = true;
    var product = $.cookie('product');
    var shopCars = [];
    if(product){
        shopCars = [product];
    }
    
    typeNum = shopCars.length;
    productType = {typeNum: typeNum};

    var shopCarController = function($scope){
        $scope.shopCars = shopCars;
        $scope.productType = productType;
        $scope.isShowShopCar = false;
        
        $scope.showShopCar = function(){
            $scope.isShowShopCar = !$scope.isShowShopCar;
        };

        $scope.sum = function(){
            var total = 0;
            angular.forEach($scope.shopCars, function(item) {
               total += item.number * item.price;
            });
            return total;
        };

        $scope.delete = function(index){
            shopCars.splice(index, 1);
            $scope.productType.typeNum = shopCars.length;
            $.removeCookie('product');
        };

        $scope.stopPro = function(event){
            event.stopPropagation();
        };

        $scope.validate = function(number){

        };
    };

    return shopCarController;
});