$(function() {
 
     $("#savaauthtoken").click(function(e) {       
            authtoken = $("#authtoken").val();
            remote = $("#remote").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=savaauthtoken",
                data: {
                    authtoken: authtoken,
					remote: remote
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Save Sucessfully!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }else {
						toastr.error(msg, "", {
										"timeOut": "1000",
										"positionClass": "toast-top-right"
						});						
					}
                }
            });
        });
        
         $('#remote').change(function(){
                   $('#ngrok').hide();
                   $('#' + $(this).val()).show();
        });   
   
});