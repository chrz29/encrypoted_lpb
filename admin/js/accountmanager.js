$(function() {

 
                
      

     $("#createaccountusers").click(function(e) {
            user = $("#username").val();         
            pass = $("#password").val();          
            vouchergenerator = $("#vouchergenerator").is(':checked') ? 1 : 0;
            salesinventory = $("#salesinventory").is(':checked') ? 1 : 0;
            timerrates = $("#timerrates").is(':checked') ? 1 : 0;
            eloading = $("#eloading").is(':checked') ? 1 : 0;       
            ngrok = $("#ngrok").is(':checked') ? 1 : 0; 
            charging = $("#charging").is(':checked') ? 1 : 0;
            users = $("#users").is(':checked') ? 1 : 0;       
            maccontrol = $("#maccontrol").is(':checked') ? 1 : 0; 
            wan = $("#wan").is(':checked') ? 1 : 0;
            inter = $("#interface").is(':checked') ? 1 : 0;       
            speedlimiter = $("#speedlimiter").is(':checked') ? 1 : 0; 
            maintenance = $("#maintenance").is(':checked') ? 1 : 0;
            systemlogs = $("#systemlogs").is(':checked') ? 1 : 0;       
            timetovoucher = $("#timetovoucher").is(':checked') ? 1 : 0; 
            systemstatus = $("#systemstatus").is(':checked') ? 1 : 0;
            siteblocking = $("#siteblocking").is(':checked') ? 1 : 0;       
            coinbillsettings = $("#coinbillsettings").is(':checked') ? 1 : 0; 
            portalsettings = $("#portalsettings").is(':checked') ? 1 : 0;
            portaldesign = $("#portaldesign").is(':checked') ? 1 : 0; 
            backupandrestore = $("#backupandrestore").is(':checked') ? 1 : 0;
            multicoinslot = $("#multicoinslot").is(':checked') ? 1 : 0;
            tools = $("#tools").is(':checked') ? 1 : 0;
            freetime = $("#freetime").is(':checked') ? 1 : 0;
            centralized = $("#centralized").is(':checked') ? 1 : 0;
			viewonly = $("#viewonly").is(':checked') ? 1 : 0;
            walledgarden = $("#walledgarden").is(':checked') ? 1 : 0;
			
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=createaccountusers",
                data: {
                    user: user,
                    pass: pass,                    
                    vouchergenerator: vouchergenerator,
                    salesinventory: salesinventory,
                    timerrates: timerrates,
                    eloading: eloading,
                    ngrok: ngrok,                   
                    charging: charging,
                    users: users,
                    maccontrol: maccontrol,
                    wan: wan,
                    inter: inter,
                    speedlimiter: speedlimiter,
                    maintenance: maintenance,
                    systemlogs: systemlogs,
                    timetovoucher: timetovoucher,
                    systemstatus: systemstatus,
                    siteblocking: siteblocking,
                    coinbillsettings: coinbillsettings,
                    portalsettings: portalsettings,
                    portaldesign: portaldesign,
                    backupandrestore: backupandrestore,
                    multicoinslot: multicoinslot,
                    tools: tools,
                    freetime: freetime,
					centralized : centralized,
					viewonly : viewonly,
					walledgarden : walledgarden
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Create new account!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });

     $("#editaccountuser").click(function(e) {
            user = $("#euser").val();         
            pass = $("#epassword").val();          
            vouchergenerator = $("#vouchergenerator1").is(':checked') ? 1 : 0;
            salesinventory = $("#salesinventory1").is(':checked') ? 1 : 0;
            timerrates = $("#timerrates1").is(':checked') ? 1 : 0;
            eloading = $("#eloading1").is(':checked') ? 1 : 0;       
            ngrok = $("#ngrok1").is(':checked') ? 1 : 0; 
            charging = $("#charging1").is(':checked') ? 1 : 0;
            users = $("#users1").is(':checked') ? 1 : 0;       
            maccontrol = $("#maccontrol1").is(':checked') ? 1 : 0; 
            wan = $("#wan1").is(':checked') ? 1 : 0;
            inter = $("#interface1").is(':checked') ? 1 : 0;       
            speedlimiter = $("#speedlimiter1").is(':checked') ? 1 : 0; 
            maintenance = $("#maintenance1").is(':checked') ? 1 : 0;
            systemlogs = $("#systemlogs1").is(':checked') ? 1 : 0;       
            timetovoucher = $("#timetovoucher1").is(':checked') ? 1 : 0; 
            systemstatus = $("#systemstatus1").is(':checked') ? 1 : 0;
            siteblocking = $("#siteblocking1").is(':checked') ? 1 : 0;       
            coinbillsettings = $("#coinbillsettings1").is(':checked') ? 1 : 0; 
            portalsettings = $("#portalsettings1").is(':checked') ? 1 : 0;
            portaldesign = $("#portaldesign1").is(':checked') ? 1 : 0; 
            backupandrestore = $("#backupandrestore1").is(':checked') ? 1 : 0;
            multicoinslot = $("#multicoinslot1").is(':checked') ? 1 : 0;
            tools = $("#tools1").is(':checked') ? 1 : 0;
            freetime = $("#freetime1").is(':checked') ? 1 : 0;           
            centralized = $("#centralized1").is(':checked') ? 1 : 0;
			viewonly = $("#viewonly1").is(':checked') ? 1 : 0;
			walledgarden = $("#walledgarden1").is(':checked') ? 1 : 0;
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=editaccountuser",
                data: {
                    user: user,
                    pass: pass,                    
                    vouchergenerator: vouchergenerator,
                    salesinventory: salesinventory,
                    timerrates: timerrates,
                    eloading: eloading,
                    ngrok: ngrok,                   
                    charging: charging,
                    users: users,
                    maccontrol: maccontrol,
                    wan: wan,
                    inter: inter,
                    speedlimiter: speedlimiter,
                    maintenance: maintenance,
                    systemlogs: systemlogs,
                    timetovoucher: timetovoucher,
                    systemstatus: systemstatus,
                    siteblocking: siteblocking,
                    coinbillsettings: coinbillsettings,
                    portalsettings: portalsettings,
                    portaldesign: portaldesign,
                    backupandrestore: backupandrestore,
                    multicoinslot: multicoinslot,
                    tools: tools,
                    freetime: freetime,
					centralized: centralized,
					viewonly : viewonly,
					walledgarden : walledgarden
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Edit account!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });
        
     $("#deletethisuser").click(function(e) {       
            delban = $("#delban").val();

            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deletethisuser",
                data: {
                    delban: delban
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Successfully delete user!", "", {
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
 
        $('#check').click(function(){
          if('password' == $('#password').attr('type')){
             $('#password').prop('type', 'text');
        }else{
             $('#password').prop('type', 'password');
        }
        });

        $('#check2').click(function(){
          if('password' == $('#epassword').attr('type')){
             $('#epassword').prop('type', 'text');
        }else{
             $('#epassword').prop('type', 'password');
        }
        });            
  
});