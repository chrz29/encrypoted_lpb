"use strict";

// Class Definition
var KTLoginGeneral = function() {

    var login = $('#kt_login');

    var handleSignInFormSubmit = function() {
        $('#kt_login_signin_submit').click(function(e) {
            e.preventDefault();        
            let username = $("#username").val();
            let password = $("#password").val();
			let captcha = $("#captcha").val();
			
            $.ajax({
                type: "POST",
                url: 'index?execute=1&exec=login',
                data: {
                    username: username,
                    password : password,
					captcha : captcha
                },
                cache: false,   
                xhrFields: {
                  withCredentials: true
                },                
                success: function (msg) {
                	// similate 2s delay
                        if (msg == "success") {
                            window.location = "index?action=dashboard.js";
                        }
                        else {
                            alert(msg);
							document.getElementById("captcha").value = "";
                        }
                }
            });
        });
    }


 
    // Public Functions
    return {
        // public functions
        init: function() {
            handleSignInFormSubmit();
        }
    };
}();

// Class Initialization
jQuery(document).ready(function() {
    KTLoginGeneral.init();
});