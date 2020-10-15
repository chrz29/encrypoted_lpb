$(function() {
    var i = 0;
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
 
     $("#resetall").click(function(e) {  
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=resetall",              
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucess Reset All Changes!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                    }
                }
            });
        });
        

     $("#update").click(function(e) {
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=updates",   
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Updated!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        move()
                        location.reload();
                    }
                }
            });
        });
  
     $("#otaupdate").click(function(e) {
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=updates",   
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Updated!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        move()
                        location.reload();
                    }
                }
            });
        });

		
     $("#rollback").click(function(e) {   
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=rollback",                 
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Request Rollback!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                    }
                }
            });
        });
 
         $("#activate").click(function (e) {
                activatecode = $("#activatecode").val();
                sdcard = $("#sdcard").val();
                
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=activate",
                        data: {
                            activatecode: activatecode,
                            sdcard : sdcard
                        },                        
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Activate Enjoy ","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
                            }else{
                                toastr.error("Invalid Activation Code!","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                            }
                        }
                    });   
        });    
        
    function move() {
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("probbar");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width  + "%";
          }
        }
      }
    }
 
        
$(document).ready(function() {
    var requestData = "";
     if (typeof(EventSource) !== "undefined") {
                var requestSource = new EventSource("index?expiry=1");
                    
                requestSource.addEventListener("expiry", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        document.getElementById("expiry").innerHTML = requestData;                 
                        
                    }
                }, false);
 
                
            } else {
                document.getElementById("error").innerHTML = "ERROR!";
            }                
 

}); 
    
   
});