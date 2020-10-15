 $(function() {

      

     $("#accountchangepassword").click(function(e) {
            user = $("#username").val();         
            pass = $("#password").val();

            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=accountchangepassword",
                data: {
                    user: user,
                    pass: pass
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Change Login Details!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                    }else {
						toastr.error(msg, "", {
										"timeOut": "1000",
										"positionClass": "toast-top-right"
						});						
					}
                }
            });
        });

      $('input:text').on('keypress', function(e) {
        if (e.which == 32)
            return false;
        });  
 
        $('#check').click(function(){
          if('password' == $('#password').attr('type')){
             $('#password').prop('type', 'text');
        }else{
             $('#password').prop('type', 'password');
        }
        });
            
  
});