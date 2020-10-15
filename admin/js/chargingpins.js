"use strict";
var KTDatatablesDataSourceHtml = function() {
var port = "";
var pin = "";
var relaydrive = "";
var days = "";
var note = "";
var status = "";
var spec = "";

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
 
       
      $("#dpins").click(function(e) {
            port = $("#port").val();            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=dpins",
                data: {
                    port: port               
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Delete Pins!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });  
        

      $("#edit").click(function(e) {
            port = $("#port").val();
            pin = $("#pin").val();
            relaydrive = $("#relaydrive").val();
            note = $("#note").val();
            status = $("#status").val();   
            spec = $("#spec").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=ceditpins",
                data: {
                    port: port,
                    pin: pin,
                    relaydrive: relaydrive,
                    note: note,
                    status: status,
                    spec: spec           
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Edit Pins!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });  
        
        
      $("#add").click(function(e) {
            port = $("#porta").val();
            pin = $("#pina").val();
            relaydrive = $("#relaydrivea").val();
            note = $("#notea").val();       
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=caddepins",
                data: {
                    port: port,
                    pin: pin,
                    relaydrive: relaydrive,
                    note: note                   
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Add Pins!", "", {
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
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesDataSourceHtml.init();
});