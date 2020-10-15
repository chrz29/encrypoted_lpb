"use strict";
var KTDatatablesDataSourceHtml = function() {
var ipd  = '';
var site = '';
var note = '';
	var initTable1 = function() {
		var table = $('#kt_table_1').DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
            aaSorting: [[1, 'asc']],
 
           
		});

      $("#deletesite").click(function(e) {       
            ipd = $("#ipd").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deletesite",
                data: {
                    ipd: ipd                  
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Delete site!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }else {
						toastr.error(msg, "", {
										"timeOut": "1000",
										"positionClass": "toast-top-right"
						});						
					}
                }
            });
        });   


        $("#block").click(function (e) {
                site = $("#site").val();
                note = $("#note").val();
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=blocksite",
                         data: {
                            site: site,             
                            note: note                       
                        },                         
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Block Site!","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
                            }else {
								toastr.error(msg, "", {
												"timeOut": "1000",
												"positionClass": "toast-top-right"
								});						
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