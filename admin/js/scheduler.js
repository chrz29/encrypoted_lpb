$(function() {
 
     $("#saveschedule").click(function(e) {        
            schedule = $("#schedule").val();
            sunday =  $("#sunday").is(':checked') ? 1 : 0;
            monday =  $("#monday").is(':checked') ? 1 : 0;
            tuesday = $("#tuesday").is(':checked') ? 1 : 0;
            wednesday = $("#wednesday").is(':checked') ? 1 : 0;
            thursday = $("#thursday").is(':checked') ? 1 : 0;
            friday = $("#friday").is(':checked') ? 1 : 0;
            saturday = $("#saturday").is(':checked') ? 1 : 0;
            hour = $("#hour").val();
            minute = $("#minute").val();
            clock = $("#clock").val();
            sfunc = $("#sfunc").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=saveschedule",
                data: {
                    schedule : schedule,
                    sunday: sunday,
                    monday: monday,
                    tuesday : tuesday,
                    wednesday : wednesday,
                    thursday : thursday,
                    friday : friday,
                    saturday : saturday,                    
                    hour : hour,
                    minute : minute,                    
                    clock : clock,
                    sfunc : sfunc
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucess Save Changes!", "", {
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
        
        $('#schedule').change(function(){
                   $('#on').hide();
                   $('#' + $(this).val()).show();
        });
 
  
});