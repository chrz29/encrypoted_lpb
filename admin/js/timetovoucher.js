"use strict";
var KTDatatablesDataSourceHtml = function() {

	var initTable1 = function() {
		var table = $('#kt_table_1');
		table.DataTable({
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
				  var result = '<b class="text-danger"> NO-TIME </b>';
			  }
              
              $('#remain', show).html(result);
          }, 1000);
      }); 
	  

        $("#deleteall").click(function (e) {
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=vdeleteallogs",
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Delete All Vouchers Generated!","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
                            }
                        }
                    });   
        });     
   

        $("#deleteused").click(function (e) {
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=vdeleteusedlogs",
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Delete All Used Vouchers!","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
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