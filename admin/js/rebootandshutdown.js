      $("#rebootnow").click(function(e) {       
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=reboot",
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Reboot!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                         $('#reboot').modal('hide')
                    }
                }
            });
        });  
        
    $("#shutdownnow").click(function(e) {       
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=shutdown",
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Shutdown!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        $('#shutdown').modal('hide')
                    }
                }
            });
        });  