"use strict";
var KTDatatablesDataSourceHtml = function() {
var relaydrive = "";
var rgpio = "";
var rchipid = "";
var cgpio = "";
var cchipid = "";

	var initTable1 = function() {
		var table = $('#kt_table_1');

		// begin first table
		table.DataTable({
			responsive: true,
			columnDefs: [
				{
					targets: -1,
					title: 'Actions',
					orderable: false,
				},
			],
		});
 
       
      $("#editc").click(function(e) {
            cchipid = $("#cchipid").val();     
            cgpio = $("#cgpio").val();            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=editcoinpin",
                data: {
                    cchipid : cchipid,
                    cgpio: cgpio               
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Edit Coin Pin!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });        

	};

	var initTable2 = function() {
		var table2 = $('#kt_table_2');

		// begin first table
		table2.DataTable({
			responsive: true,
			columnDefs: [
				{
					targets: -1,
					title: 'Actions',
					orderable: false,
				},
			],
		});      

      $("#editr").click(function(e) {
            rchipid = $("#rchipid").val();  
            rgpio = $("#rgpio").val();  
            relaydrive = $("#relaydrive").val();                   
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=editrelaypin",
                data: {
                    rchipid : rchipid,
                    rgpio: rgpio,
                    relaydrive : relaydrive    
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Edit Relay Pin!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
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
            initTable2();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesDataSourceHtml.init();
});