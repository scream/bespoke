define([
    'jquery',
    'shopCar',
    'addProduct',
    'jquery-cookie',
    'angular',
    'bootstrap',
    'angularjs-bootstrap'
], function($, ShopCarController, AddProductController) {
    "use strict";

    var productDetail = function(options){
        this.init.apply(this, arguments);
    };

    productDetail.prototype.init = function(){
        var that = this;
        that.collapse();
    };
    
    productDetail.prototype.collapse = function(){
        var that = this;
        $('.collapse').collapse()
    };

    var productDetailApp = angular.module('productDetailModule', ['ui.bootstrap']);

    productDetailApp.controller('ShopCarController', ShopCarController);

    productDetailApp.controller('AddProductController', AddProductController);

    productDetailApp.controller('ShowSubController', function ($scope) {

    });
    
    angular.bootstrap(document, ['productDetailModule']);

    return productDetail;
});