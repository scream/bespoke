define([
    'jquery',
    'shopCar',
    'angular',
    'bootstrap',
    'angularjs-bootstrap'
    
], function($, ShopCarController) {
    "use strict";

    var alHome = function(options){
        this.init.apply(this, arguments);
    };

    alHome.prototype.init = function(){
        var that = this;
        that.slide();
    };

    alHome.prototype.slide = function(){
        var $alCarousel =  $('.al-carousel');
        $alCarousel.carousel({
            'interval': 5000,
            'wrap': true
        })
    };

    var headerApp = angular.module('homeModule', ['ui.bootstrap']);
    headerApp.controller('ShopCarController', ShopCarController);
    headerApp.controller('ShowSubController', function ($scope) {

    });

    angular.bootstrap(document, ['homeModule']);
    return alHome;

});