"use strict";
var KTDatatablesDataSourceHtml = function() {
var requestData = "";
var ipv = "";
var ipx = "";
var ipa = "";
var iph = "";
var ipd = "";
var ipp = "";
var ipr = "";
var download = "";
var upload = "";
var et = "";
var st = "";
var etr = "";
var str = "";
var hostnameh = "";
var end = "";
var minutes = "";
var hours = "";
var days = "";
var mac = "";
var ipz = "";
var creditsh = "";
var chattousers = "Welcome!";
	var initTable1 = function() {
		var table = $('#userstable');
		// begin first table
		table.DataTable({
			paging: false,
			stateSave: true,
            pageLength : 25,
			scrollX: true,
			scrollCollapse: true,			
			//bInfo : false,
            //lengthChange : false,
		});


      $('div[usertime]').each(function () {
		  var show = $(this);
          var timer =  parseInt(show.attr("usertime"));
          var countdown = setInterval(function(){
			  timer=timer-1;
			  var days = Math.floor(timer / (3600*24));
			  var hours = Math.floor(timer / 3600) % 24;
              var minutes = Math.floor(timer / 60) % 60;
              var seconds = Math.floor(timer) % 60;
			  
			  if(timer >= 86400){
				  var result =   "<b> "+days + "</b> d. <b>" + hours + "</b> hr. <b>" + minutes +"</b>min. <b>" + seconds +"</b> sec";
			  }else if(timer >= 3600 && timer <= 86400){
				   var result =   "<b>" + hours + "</b> hr. <b>" + minutes +"</b> min. <b>" + seconds +"</b> sec";
			  }else if(timer >= 1 && timer <= 3600) {
				   var result =   "<b>" + minutes +"</b> min. <b>" + seconds +"</b> sec";
			  }else {
				  var result = 'NO TIME';
			  }
              
              $('#remain', show).html(result);
          }, 1000);
      });  
	  
 
        $("#refreshusers").click(function(e) {            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=refreshusers",
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Refresh Users!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });
		
 
     $("#sendallchat").click(function(e) {       
            chattousers = $("#chattousers").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=sendallchat",
                data: {
                    chattousers: chattousers                
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Send Chat to all users!", "", {
                            "timeOut": "5000",
                            "positionClass": "toast-top-right"
                        });
                    }
                }
            });
        });  
		
      $("#deleteall").click(function(e) {       
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deleteallusers",
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Delete All Users!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });  
 
      $("#deleteallnotime").click(function(e) {       
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deleteallnotime",
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Delete All No Time!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });  
		
      $("#deleteallchats").click(function(e) {       
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deleteallchats",
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Delete All Chats!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });  		

      $("#pausenow").click(function(e) {       
            ipp = $("#ipp").val();
            st = $("#st").val();
            et = $("#et").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=pausenow",
                data: {
                    ipp: ipp,             
                    st: st,    
                    et: et                        
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Pause Time!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
						location.reload();
                        $('#pausetime').modal('hide')
                    }
                }
            });
        });  
        
      $("#resumenow").click(function(e) {       
            ipr = $("#ipr").val();
            str = $("#str").val();
            etr = $("#etr").val();
            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=resumenow",
                data: {
                    ipr: ipr,             
                    str: str,    
                    etr: etr                        
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Resume Time!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
						location.reload();
                        $('#resumetime').modal('hide')
                    }
                }
            });
        });          
        
 
      $("#clearnow").click(function(e) {       
            ipv = $("#ipv").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=clearnow",
                data: {
                    ipv: ipv                  
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Clear Time!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                         location.reload();
                        $('#clear').modal('hide')
                    }
                }
            });
        });   

       $("#refreshcredits").click(function(e) {            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=refreshcredits",
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Refresh Credits!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });  
		
      $("#delete").click(function(e) {       
            ipd = $("#ipd").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deletedesktop",
                data: {
                    ipd: ipd                  
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Delete Desktop!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
						location.reload();
                        $('#del').modal('hide')
                    }
                }
            });
        });   
        
      $("#editspeed").click(function(e) {       
            ipx = $("#ipx").val();
            download = $("#download").val();
            upload = $("#upload").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=editspeed",
                data: {
                    ipx: ipx,
                    download: download,
                    upload: upload
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Edit Speed!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
						location.reload();
                        $('#speed').modal('hide')
                    }
                }
            });
        });         

      $("#edithostname").click(function(e) {       
            iph = $("#iph").val();
            hostnameh = $("#hostnameh").val();
			creditsh = $("#creditsh").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=edithostname",
                data: {
                    iph: iph,
                    hostnameh: hostnameh,
					creditsh: creditsh
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Edit Speed!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
						location.reload();
                       $('#hostname').modal('hide')
                    }
                }
            });
        }); 
  
     $("#addtime").click(function(e) {       
            ipa = $("#ipa").val();
            mac = $("#mac").val();
            minutes = $("#minutes").val();
            hours = $("#hours").val();
            days = $("#days").val();
            end = $("#end").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=addtime",
                data: {
                    ipa: ipa,
                    mac: mac,
                    minutes: minutes,
                    hours: hours,
                    days: days,                    
                    end: end                   
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Add Time", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
						location.reload();
                        $('#edit').modal('hide')
                    }
                }
            });
        }); 
 
      $("#addnotime").click(function(e) {       
            ipz = $("#ipz").val();
            minutes = $("#nminutes").val();
            hours = $("#nhours").val();
            days = $("#ndays").val();            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=addnotime",
                data: {
                    ipz: ipz,
                    minutes: minutes,
                    hours: hours,
                    days: days                    
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Add Time", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
						location.reload();
                         $('#nt').modal('hide')
                    }
                }
            });
        }); 
        
     $("#deducttime").click(function(e) {       
            ipa = $("#ipa").val();
            mac = $("#mac").val();
            minutes = $("#minutes").val();
            hours = $("#hours").val();
            days = $("#days").val();
            end = $("#end").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deducttime",
                data: {
                    ipa: ipa,
                    mac: mac,
                    minutes: minutes,
                    hours: hours,
                    days: days,                    
                    end: end                   
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Deduct Time", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
						location.reload();
                        $('#edit').modal('hide')
                    }
                }
            });
        });


     $("#allowmac").click(function(e) {       
            ipa = $("#ipa").val();
            mac = $("#mac").val();

            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=allowmac",
                data: {
                    ipa: ipa,
                    mac: mac                 
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Add to Allow Mac", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        $('#edit').modal('hide')
                    }
                }
            });
        });
 
     $("#blockmac").click(function(e) {       
            ipa = $("#ipa").val();
            mac = $("#mac").val();

            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=blockmac",
                data: {
                    ipa: ipa,
                    mac: mac                 
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Add to Block Mac", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        $('#edit').modal('hide')
                    }
                }
            });
        });
        
};
            
	return {

		//main function to initiate the module
		init: function() {
			initTable1();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesDataSourceHtml.init();
});