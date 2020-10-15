$(function() {
 
     $("#saveportalsettings").click(function(e) {       
            buytime = $("#buytime").val();
            buycharging = $("#buycharging").val();
            buyvoucher = $("#buyvoucher").val();
            viewrates = $("#viewrates").val();
            viewchargingrates = $("#viewchargingrates").val();
            converttimetovoucher = $("#converttimetovoucher").val();
            autopause = $("#autopause").val();
            printer = $("#printer").val();
            insertcoinlimit = $("#insertcoinlimit").val();
            insertcoinlimitreset = $("#insertcoinlimitreset").val();
            pasetimelimit = $("#pasetimelimit").val();
            pausetimelimitreset = $("#pausetimelimitreset").val();
            insertcointimer = $("#insertcointimer").val();
            timerswitch = $("#timerswitch").val();
            datacapping = $("#datacapping").val();
            pausetimevalidity = $("#pausetimevalidity").val();
            pausetimedisable = $("#pausetimedisable").val();
            brandtitle = $("#brandtitle").val();
			portalannouncement = $("#portalannouncement").val();
            entervoucher = $("#entervoucher").val();
            rtwc = $("#rtwc").val();
            ptwc = $("#ptwc").val();
            autoclaim = $("#autoclaim").val();
			isite = $("#isite").val();
			chatbox = $("#chatbox").val();			
            rmwnic = $("#rmwnic").val();
			pttime = $("#pttime").val();
			fbid = $("#fbid").val();
			cvtautoplay = $("#cvtautoplay").val();
			 
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=saveportalsettings",
                data: {
                    buytime: buytime,
                    buycharging: buycharging,
                    buyvoucher : buyvoucher,
                    viewrates : viewrates,
                    viewchargingrates : viewchargingrates,
                    autopause: autopause,
                    printer : printer,
                    insertcoinlimit : insertcoinlimit,
                    insertcoinlimitreset : insertcoinlimitreset,   
                    pasetimelimit : pasetimelimit,   
                    pausetimelimitreset: pausetimelimitreset,
                    insertcointimer: insertcointimer,
                    timerswitch: timerswitch,
                    datacapping: datacapping,
                    pausetimevalidity: pausetimevalidity,
                    pausetimedisable : pausetimedisable,
                    brandtitle : brandtitle,
					portalannouncement : portalannouncement,
                    entervoucher : entervoucher,
                    rtwc : rtwc,
                    ptwc : ptwc,
                    autoclaim : autoclaim,
					isite : isite,
					chatbox : chatbox,
                    rmwnic : rmwnic,
					pttime : pttime,
					fbid : fbid,
					cvtautoplay : cvtautoplay
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
  
     $("#insertcoinmode").click(function(e) {       
            iinsertcoin = $("#iinsertcoin").val();
            ipausetime = $("#ipausetime").val();
            isession2voucher = $("#isession2voucher").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=insertcoinmode",
                data: {
                    iinsertcoin: iinsertcoin,
                    ipausetime: ipausetime,
                    isession2voucher : isession2voucher
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
 
     $("#vouchermode").click(function(e) {       
            vinsertcoin = $("#vinsertcoin").val();
            vpausetime = $("#vpausetime").val();
            vsession2voucher = $("#vsession2voucher").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=vouchermode",
                data: {
                    vinsertcoin: vinsertcoin,
                    vpausetime: vpausetime,
                    vsession2voucher : vsession2voucher
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