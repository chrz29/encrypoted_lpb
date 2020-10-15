$(function() {
 
     $("#savecentralized").click(function(e) {  
            cen = $("#cen").val();     
            cauthkey = $("#cauthkey").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=savecentralized",
                data: {
					cen: cen,
                    cauthkey: cauthkey
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Successfully Save Centralized Server Auth Key", "", {
                            "timeOut": "5000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }else if(msg == "2") {
                        toastr.error("Error! Your Centralized Server Auth Key is INVALID", "", {
                            "timeOut": "5000",
                            "positionClass": "toast-top-right"
                        });						
					}else if(msg == "3") {
                       toastr.success("Successfully Disable Centralized Server", "", {
                            "timeOut": "5000",
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
        

     $("#runmigrations").click(function(e) {  
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=migrate",           
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Successfully Local Database Migrate to Centralized Server", "", {
                            "timeOut": "5000",
                            "positionClass": "toast-top-right"
                        });
                    }else if(msg == "2") {
                       toastr.error("Error! You are already migrated!", "", {
                            "timeOut": "5000",
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
		
        $('#cen').change(function(){
                   $('#1').hide();
                   $('#' + $(this).val()).show();
        });
});