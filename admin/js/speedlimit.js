$(function() {
 
     $("#savespeedlimiter").click(function(e) {       
            download = $("#download").val();
            upload = $("#upload").val();
            downloadp = $("#downloadp").val();
            uploadp = $("#uploadp").val();

            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=savespeedlimiter",
                data: {
                    download: download,
                    upload: upload,
                    downloadp : downloadp,
                    uploadp : uploadp
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucess Save Changes!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                    }
                }
            });
        });
        
    
   
});