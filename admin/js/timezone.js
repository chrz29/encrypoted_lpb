$(function() {
 
     $("#savetimezone").click(function(e) {       
            timezones = $("#timezones").val();

            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=savetimezone",
                data: {
                    timezones: timezones                  
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Save Changes!", "", {
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
  
});