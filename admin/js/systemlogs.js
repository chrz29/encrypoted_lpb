"use strict";
var KTDatatablesDataSourceHtml = function() {

	var initTable1 = function() {
		
		var table = $('#kt_table_1').DataTable({
			"ajax": "index?action=apisystemlogs.js",
			"columns": [
				{ "data": "id" },
				{ "data": "msg" },
				{ "data": "date" }
			],	
			responsive: true,
			searchDelay: 500
		});

		var table2 = $('#creditlogs').DataTable({
			"ajax": "index?action=apicreditlogs.js",
			"columns": [
				{ "data": "id" },
				{ "data": "ipmac" },
				{ "data": "coinamt" },
				{ "data": "method" },
				{ "data": "date" }
			],	
			responsive: true,
			searchDelay: 500
		});

        $("#resetsystmlogs").click(function (e) {
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=resetsystmlogs",
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Reset System Logs!","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
                            }
                        }
                    });   
        });     
   

      $("#reload").click(function (e) {
                $('#kt_table_1').DataTable().ajax.reload();
				toastr.success("Sucessfully Reload System Logs","",{"timeOut": "5000","positionClass": "toast-top-right"});  
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