"use strict";
var KTDatatablesDataSourceHtml = function() {
var peso = "1";
var minutes = "5";
var hours = "";
var days = "";
var note = "";
var expirym = "";
var hourm = "";
var daysm = "";
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
 
       
      $("#deleterates").click(function(e) {
            peso = $("#pulsesd").val();            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=cdeleterates",
                data: {
                    peso: peso               
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Delete Rates!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });  
        

      $("#edit").click(function(e) {
            peso = $("#pulsesf").val();
            minutes = $("#minutesf").val();
            hours = $("#hoursf").val();
            days = $("#daysf").val();
            note = $("#notef").val();  
            spec = $("#spec").val();    
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=ceditrates",
                data: {
                    peso: peso,
                    minutes: minutes,
                    hours: hours,
                    days: days,
                    note: note,
                    spec: spec           
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Edit Rates!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });  
        
        
      $("#add").click(function(e) {
            peso = $("#peso").val();
            minutes = $("#minutes").val();
            hours = $("#hours").val();
            days = $("#days").val();
            note = $("#note").val();        
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=caddrates",
                data: {
                    peso: peso,
                    minutes: minutes,
                    hours: hours,
                    days: days,
                    note: note                   
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Add Rates!", "", {
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