define([
    'jquery',
    'angular',
    'bootstrap',
    'angularjs-bootstrap',
    'shopCar'
], function($) {
    "use strict";

    var alHome = function(options){
        this.init.apply(this, arguments);
    };

    alHome.prototype.init = function(){
        var that = this;
        that.dropdown();
        that.slide();
    };
    
    alHome.prototype.dropdown = function(){
        var $menuList = $('.menu-ul-list > li:not(".search")');
        $menuList.mouseenter(function(){
            $(this).find('ul').addClass('show');
        });
        $menuList.mouseleave(function(){
            $(this).find('ul').removeClass('show');
        });
    };

    alHome.prototype.slide = function(){
        var $alCarousel =  $('.al-carousel');
        $alCarousel.carousel({
            'interval': 5000,
            'wrap': true
        })
    };

    var homeApp = angular.module('homeModule', ['ui.bootstrap', 'shopCarModule']);

    angular.bootstrap(document, ['homeModule']);

    return alHome;

});