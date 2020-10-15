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
 
        $('#conexpiry').on('click', function(e) {
           $("#expiry").toggle();
       });

        $('#conexpiryd').on('click', function(e) {
           $("#expiryd").toggle();
       });
       
      $("#deleterates").click(function(e) {
            peso = $("#pulsesd").val();            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=desktopdeleterates",
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
            expirym = $("#expirymf").val();
            hourm = $("#hourmf").val();
            daysm = $("#daysmf").val();
            spec = $("#spec").val();                
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=desktopeditrates",
                data: {
                    peso: peso,
                    minutes: minutes,
                    hours: hours,
                    days: days,
                    note: note,
                    expirym: expirym,
                    hourm: hourm,
                    daysm: daysm,
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
            expirym = $("#expirym").val();
            hourm = $("#hourm").val();
            daysm = $("#daysm").val();            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=desktopaddrates",
                data: {
                    peso: peso,
                    minutes: minutes,
                    hours: hours,
                    days: days,
                    note: note,
                    expirym: expirym,
                    hourm: hourm,
                    daysm: daysm                    
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