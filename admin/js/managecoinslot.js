"use strict";
var KTDatatablesDataSourceHtml = function() {
var ip = "";
var mac = "";
var chipid = "";
var coinslotname = "";
var description = "";
var status = "";
var cname = "";
var cdescription = "";
var mainvendo = "";
var sorting = "";
var eloading = "";
var insertcoin = "";
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
            ip = $("#ip").val();            
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=deletecoinslot",
                data: {
                    ip: ip               
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Delete Coinslot!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                        location.reload();
                    }
                }
            });
        });  


      $("#set").click(function(e) {
            cname = $("#cname").val();
            cdescription = $("#cdescription").val();
            mainvendo = $("#mainvendo").val(); 
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=mainvendosettings",
                data: {
                    cname: cname,
                    cdescription: cdescription,
                    mainvendo: mainvendo     
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Save Main Vendo Settings!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                    }
                }
            });
        });  
        

      $("#edit").click(function(e) {
            ip = $("#ip").val();
            mac = $("#mac").val();
            chipid = $("#chipid").val(); 
            coinslotname = $("#coinslotname").val(); 
            description = $("#description").val(); 
            status = $("#status").val(); 
			eloading = $("#eloading").val(); 
			insertcoin = $("#insertcoin").val(); 
			sorting = $("#sorting").val(); 
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=editcoinslot",
                data: {
                    ip: ip,
                    mac: mac,
                    chipid: chipid,
                    coinslotname: coinslotname,
                    description: description,
                    status: status,
					eloading: eloading,
					insertcoin: insertcoin,
					sorting : sorting
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Edit Coinslot Info!", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
						location.reload();
                    }else {
	                    toastr.error(msg, "", {
                            "timeOut": "5000",
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