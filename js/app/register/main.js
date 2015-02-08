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
                'userGender': {
                    required: false
                },
                'userName': {
                    required: true,
                    rangelength: [5, 20]
                },
                'userFixedLinePhone': {
                    required: false
                },
                'userMobile': {
                    required: false
                },
                'userPassword': {
                    required: true,
                    rangelength: [5,15]
                },
                'userConfirmPassword': {
                    required: true,
                    equalTo: '#userPassword'
                },
                'userDeliveryAdress': {
                    required: false
                },
                'postCode': {
                    required: false
                },
                'userCompany': {
                    required: false
                },
                'agreeProtocol': {
                    required: true,
                }
            },

            'messages': {
                'userEmail': {
                    required: "please input email",
                    email: "please valid email"
                },
                'userGender': {
                    required: "please input gender",
                },
                'userName': {
                    required: "please input name",
                    rangelength: "please input character's number 5~10"
                },
                'userFixedLinePhone': {
                    required: "please input fixed line phone",
                },
                'userMobile': {
                    required: "please input mobile",
                },
                'userPassword': {
                    required: "please input password",
                    rangelength: 'please input valid password'
                },
                'userConfirmPassword': {
                    required: "please input confirm password",
                    equalTo: "please input same password"
                },
                'userDeliveryAdress': {
                    required: "please input address",
                },
                'postCode': {
                    required: "please input post code",
                },
                'userCompany': {
                    required: "please input company",
                },
                'agreeProtocol': {
                    required: "please check protocol",
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