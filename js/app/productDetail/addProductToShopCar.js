define(['jquery', 'angular', 'jquery-cookie'], function($){
    $.cookie.json = true;

    var addProductController = function($scope, $attrs){
        $scope.product = {
            id: $attrs.productId,
            name: $attrs.productName,
            price: $attrs.productPrice,
            imgUrl: $attrs.productImgUrl,
            number: 1
        };
        $scope.addShopCar = function(){
            $.cookie('product', $scope.product, { expires: 7 });
        };
    };
    return addProductController;
});