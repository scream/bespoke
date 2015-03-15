define([
    'jquery',
    'shopCar',
    'jquery-cookie',
    'angular',
    'bootstrap',
    'angularjs-bootstrap'
], function($, ShopCarController) {
    "use strict";

    var checkoutList = function(options){
        this.init.apply(this, arguments);
    };

    checkoutList.prototype.init = function(){
        var that = this;
        
    };

    var checkoutListApp = angular.module('checkoutListModule', ['ui.bootstrap']);
    checkoutListApp.controller('ShopCarController', ShopCarController);
    
    angular.bootstrap(document, ['checkoutListModule']);

    

    return checkoutList;
});