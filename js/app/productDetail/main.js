define([
    'jquery',
    'jquery-cookie',
    'angular',
    'bootstrap',
    'angularjs-bootstrap',
    'shopCar',
    'addProduct'
], function($) {
    "use strict";

    var prodcutDetail = function(options){
        this.init.apply(this, arguments);
    };

    prodcutDetail.prototype.init = function(){
        var that = this;
        that.collapse();
    };
    
    prodcutDetail.prototype.collapse = function(){
        var that = this;
        $('.collapse').collapse()
    };

    var productDetailApp = angular.module('productDetailModule', ['ui.bootstrap', 'shopCarModule', 'addProductModule']);

    angular.bootstrap(document, ['productDetailModule']);

    return prodcutDetail;
});