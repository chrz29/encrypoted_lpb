$(function() {
 
     $("#savewan").click(function(e) {       
            wan = $("#wan").val();
            ip = $("#ip").val();
            smask = $("#smask").val();
            dgateway = $("#dgateway").val();
            hostname = $("#hostname").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=savewan",
                data: {
                    wan: wan,
                    ip: ip,
                    smask: smask,
                    dgateway : dgateway,
                    hostname : hostname
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucess! Your machine is now static ip!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        $('#edit').modal('hide')
                    }
                }
            });
        });
        
    
        $('#wan').change(function(){
                   $('#static').hide();
                   $('#' + $(this).val()).show();
        });
});