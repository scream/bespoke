define([
    'jquery',
    'validate'
], function($) {
    "use strict";

    var findPassword = function(options){
        this.init.apply(this, arguments);
    };

    findPassword.prototype.init = function(){
        var that = this;
        that.validate();
    };
    
    findPassword.prototype.validate = function(){
        var that = this;
        var $form = $('.register-form');
        $form.validate({
            'rules': {
                'userEmail': {
                    required: true,
                    email: true
                }
            },

            'messages': {
                'userEmail': {
                    required: "please input email",
                    email: "please valid email"
                }
            },

            'success': function(label){
                label.parents('.form-group').removeClass('has-error');
            },

            'errorPlacement': function(error, element){
                element.parents('.form-group').addClass('has-error');
                error.appendTo(element.parent());  
            },

            'submitHandler':function(form){
                form.submit();
            }    

        });
    };

    return findPassword;

});