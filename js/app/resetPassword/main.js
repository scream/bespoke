define([
    'jquery',
    'validate'
], function($) {
    "use strict";

    var resetPassword = function(options){
        this.init.apply(this, arguments);
    };

    resetPassword.prototype.init = function(){
        var that = this;
        that.validate();
    };
    
    resetPassword.prototype.validate = function(){
        var that = this;
        var $form = $('.register-form');
        $form.validate({
            'rules': {
                'userPassword': {
                    required: true,
                    rangelength: [5,15]
                },
                'userConfirmPassword': {
                    required: true,
                    equalTo: '#userPassword'
                }
            },

            'messages': {
                'userPassword': {
                    required: "please input password",
                    rangelength: 'please input valid password'
                },
                'userConfirmPassword': {
                    required: "please input confirm password",
                    equalTo: "please input same password"
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

    return resetPassword;

});