define([
    'jquery',
    'jquery-cookie',
    'angular',
    'bootstrap',
    'angularjs-bootstrap',
    'shopCar'
], function($) {
    "use strict";

    var checkoutList = function(options){
        this.init.apply(this, arguments);
    };

    checkoutList.prototype.init = function(){
        var that = this;
        
    };

    var checkoutListApp = angular.module('checkoutListModule', ['ui.bootstrap', 'shopCarModule']);

    
    angular.bootstrap(document, ['checkoutListModule']);

    

    return checkoutList;
});