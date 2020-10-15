"use strict";
var KTDatatablesDataSourceHtml = function() {
var ipd  = '';
var site = '';
var protocol = '';
var ports = '';
	var initTable1 = function() {
		var table = $('#kt_table_1').DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
            aaSorting: [[1, 'asc']],
 
           
		});

      $("#deletwalled").click(function(e) {       
            ipd = $("#ipd").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deletwalled",
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
                    }
                }
            });
        });   


        $("#submitwalled").click(function (e) {
                site = $("#site").val();
                protocol = $("#protocol").val();
				ports = $("#ports").val();
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=submitwalled",
                         data: {
                            site: site,             
                            protocol: protocol,
							ports: ports	
                        },                         
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Website added to Walled Garden!","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
                            }else{
                                toastr.error(msg,"",{"timeOut": "5000","positionClass": "toast-top-right"});  							
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