define([
    'jquery',
    'bootstrap'
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

    return prodcutDetail;

});