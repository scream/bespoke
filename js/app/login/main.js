define([
    'jquery',
    'validate'
], function($) {
    "use strict";

    var register = function(options){
        this.init.apply(this, arguments);
    };

    register.prototype.init = function(){
        var that = this;
        that.validate();
    };
    
    register.prototype.validate = function(){
        var that = this;
        var $form = $('.register-form');
        $form.validate({
            'rules': {
                'userEmail': {
                    required: true,
                    email: true
                },
                'userPassword': {
                    required: true,
                    rangelength: [5,15]
                }
            },

            'messages': {
                'userEmail': {
                    required: "please input email",
                    email: "please valid email"
                },
                'userPassword': {
                    required: "please input password",
                    rangelength: 'please input valid password'
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

    return register;

});