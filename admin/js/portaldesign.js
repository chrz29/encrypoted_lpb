     $("textarea[name='content']").markdown({
            onShow: function (e) {
                $(".btn-toolbar").remove();
            }
     })

 $(function() {

 
            var requestData = "";
       if (typeof(EventSource) !== "undefined") {
                        var requestSource = new EventSource("index?socket=1&mode=banner");
                            
                        requestSource.addEventListener("banner", function(event) {
                            if (requestData != event.data) {
                                requestData = event.data;
                                
                                document.getElementById("banner").innerHTML = requestData;                 
                                
                            }
                        }, false);
                        
                    } else {
                        document.getElementById("error").innerHTML = "ERROR!";
      }                

     $("#saveportal").click(function(e) {       
            editor = $("#editor").val();
            theme = $("#theme").val();

            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=saveportal",
                data: {
                    editor: editor,
                    theme : theme
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucess Portal (HTML) Changes!", "", {
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

     $("#savecss").click(function(e) {       
            csseditor = $("#csseditor").val();
            cssname = $("#cssname").val();

            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=savecss",
                data: {
                    csseditor: csseditor,
                    cssname : cssname
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Successfully Portal (CSS) Changes!", "", {
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

     $("#savetimer").click(function(e) {       
            timer = $("#timer").val();

            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=savetimer",
                data: {
                    timer: timer
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Successfully Save Slider!", "", {
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
        
     $("#deletethisbanner").click(function(e) {       
            delban = $("#delban").val();

            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deletethisbanner",
                data: {
                    delban: delban
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Successfully Delete Banner!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });
        
     $("#delethistheme").click(function(e) {       
            tname = $("#tname").val();

            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=delethistheme",
                data: {
                    tname: tname
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Successfully Delete theme!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });

     $("#activatethistheme").click(function(e) {       
            aname = $("#aname").val();
            oldtheme = $("#oldtheme").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=activatethistheme",
                data: {
                    aname: aname,
                    oldtheme : oldtheme
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Successfully Activate theme!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });

        
     $("#createtheme").click(function(e) {       
            templatename = $("#templatename").val();
            remarks = $("#remarks").val();
            boostrap = $("#boostrap").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=createtheme",
                data: {
                    templatename: templatename,
                    remarks : remarks,
                    boostrap : boostrap
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Successfully create new theme!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }else{
                         toastr.error(msg, "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });                       
                    }
                }
            });
        });
 
      $('#check').click(function(){
          if('password' == $('input:password').attr('type')){
             $('input:password').prop('type', 'text');
        }else{
             $('input:password').prop('type', 'password');
        }
        });
 
        
        
        
      $('input:text').on('keypress', function(e) {
        if (e.which == 32)
            return false;
        });  
    
  
});