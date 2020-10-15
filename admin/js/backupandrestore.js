$(function() {
 
    var requestData = "";
	var backupwhenexecute = "";
	var autobackupenabledisable = "";
       if (typeof(EventSource) !== "undefined") {
                        var requestSource = new EventSource("index?socket=1&mode=backup");
                            
                        requestSource.addEventListener("getmybackup", function(event) {
                            if (requestData != event.data) {
                                requestData = event.data;
                                
                                document.getElementById("getmybackup").innerHTML = requestData;                 
                                
                            }
                        }, false);
                        
                    } else {
                        document.getElementById("getmybackup").innerHTML = "ERROR!";
      }                


     $("#savebackupsettings").click(function(e) {       
            backupwhenexecute = $("#backupwhenexecute").val();
            autobackupenabledisable = $("#autobackupenabledisable").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=autobackupsettings",
                data: {
                    backupwhenexecute: backupwhenexecute,
                    autobackupenabledisable: autobackupenabledisable
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

     $("#sendbackuptesting").click(function(e) {       
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=sendbackuptesting",               
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Send Backup to lpbpisowifi.com!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                    }
                }
            });
        });
		
     $("#generatebackup").click(function(e) {       
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=generatebackup",               
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucess Generate Backup!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                    }
                }
            });
        });
 
     $("#deletethisfile").click(function(e) { 
            filename = $("#filename").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deletefile",
                data: {
                    filename: filename                
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Delete Backup!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        $('#deletefile').modal('hide')
                    }
                }
            }); 
        });

     $("#restorethisfile").click(function(e) { 
            filenamer = $("#filenamer").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=restorefile",
                data: {
                    filenamer: filenamer                
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Restore Backup!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        $('#restorefile').modal('hide')  
                    }else{
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
 
  
});