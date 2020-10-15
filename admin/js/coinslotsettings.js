$(function() {
 
     $("#savecoinslotsettings").click(function(e) {       
            inputpin = $("#inputpin").val();
            relaypin = $("#relaypin").val();
            clearpin = $("#clearpin").val();
            relaymodule = $("#relaymodule").val();
            rejectfast = $("#rejectfast").val();
            billpin = $("#billpin").val();
			relaydelay = $("#relaydelay").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=savecoinslotsettings",
                data: {
                    inputpin: inputpin,
                    relaypin: relaypin,
                    clearpin : clearpin,
                    relaymodule : relaymodule,
                    rejectfast : rejectfast,   
                    billpin : billpin,
					relaydelay : relaydelay
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
  
     $("#savebouncetime").click(function(e) {       
            coinbouncetime = $("#coinbouncetime").val();
            billbouncetime = $("#billbouncetime").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=savebouncetime",
                data: {
                    coinbouncetime: coinbouncetime,
                    billbouncetime: billbouncetime
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
		
     $("#editthispulses").click(function(e) {       
            tname = $("#tname").val();
            pulses = $("#pulses").val();
            id = $("#id").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=editbillpulses",
                data: {
                    tname: tname,
                    pulses: pulses,
                    id : id
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Edit bill pulse!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });  
 
      $("#addthispulses").click(function(e) {       
            amounts = $("#amounts").val();
            pulsess = $("#pulsess").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=addthispulses",
                data: {
                    amounts: amounts,
                    pulsess: pulsess
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully add pulses!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });  
        
     $("#deletethispulses").click(function(e) {       
            aname = $("#aname").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deletethispulses",
                data: {
                    aname: aname
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Delete bill pulse!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        }); 
        
    $('input:text').on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });  
 
  
});