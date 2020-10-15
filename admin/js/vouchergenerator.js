"use strict";
var KTDatatablesDataSourceHtml = function() {
var price = "1";
var minutes = "5";
var hours = "";
var days = "";
var vprefix = "";
var datacap = "524288";
var download = "500";
var upload = "500";
var nvouchers = "";
var expirym = "";
var hourm = "";
var daysm = "";
var shvouchers = "";

	var initTable1 = function() {
		var table = $('#kt_table_1').DataTable({
			stateSave: true,
			responsive: true,
			searchDelay: 500,
			processing: true,
            lengthMenu: [[10, 50, 100, 500, -1], [10, 50, 100, 500, 'All']],
            aaSorting: [[1, 'asc']],

        
            buttons: [
                    'print',
                    'copyHtml5',
                    'excelHtml5',
                    'csvHtml5',
                    'pdfHtml5',
            ], 

        
 
           
		});



        $("#deleteall").click(function (e) {
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=vdeleteall",
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Delete All Vouchers!","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
                            }
                        }
                    });   
        });     
   

        $("#deleteused").click(function (e) {
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=vdeleteused",
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Delete All  Used Vouchers!","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
                            }
                        }
                    });   
        });    
 
	 $("#checkAll").click(function () {
		 $('input:checkbox').not(this).prop('checked', this.checked);
	 });

    $("#printv2").click(function (e) {
      window.open("print");
    });

 
	$("#deletecheck").click(function (e) {
		var checkItem = document.querySelectorAll('#checkItem:checked');
		 var getmultiple = "'";
		 for(var i=0;i< checkItem.length; i++){
				getmultiple += checkItem[i].value + "','";
		}
		
	
		if (getmultiple != '')
		{
			$.post('index?execute=1&exec=deletecheck', { getmultiple : getmultiple}, function(data){   
				var success = data.trim();
					
				if (success == '1')
				{
                    toastr.success("Successfully Delete Voucher!","",{"timeOut": "1000","positionClass": "toast-top-right"});
                    location.reload();
				}else{
                    toastr.error("Please Select Vouchers!","",{"timeOut": "1000","positionClass": "toast-top-right"});
				}
			});	
		} 
	 });  	
    
         $("#generate").click(function(e) {
            price = $("#price").val();
            minutes = $("#minutes").val();
            hours = $("#hours").val();
            days = $("#days").val();
            vprefix = $("#vprefix").val();
            datacap = $("#datacap").val();
            download = $("#download").val();
            upload = $("#upload").val();
            nvouchers = $("#nvouchers").val();
			shvouchers = $("#shvouchers").val();
            expirym = $("#expirym").val();
            hourm = $("#hourm").val();
            daysm = $("#daysm").val();
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=generate",
                data: {
                    price: price,
                    minutes: minutes,
                    hours: hours,
                    days: days,
                    vprefix: vprefix,
                    datacap: datacap,
                    download: download,
                    upload: upload,
                    nvouchers: nvouchers,
					shvouchers: shvouchers,
                    expirym: expirym,
                    hourm: hourm,
                    daysm: daysm
                },
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucessfully Generate Vouchers!", "", {
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
 
		$('#export_print').on('click', function(e) {
			e.preventDefault();
			table.button(0).trigger();
		});

		$('#export_copy').on('click', function(e) {
			e.preventDefault();
			table.button(1).trigger();
		});

		$('#export_excel').on('click', function(e) {
			e.preventDefault();
			table.button(2).trigger();
		});

		$('#export_csv').on('click', function(e) {
			e.preventDefault();
			table.button(3).trigger();
		});

		$('#export_pdf').on('click', function(e) {
			e.preventDefault();
			table.button(4).trigger();
		});
        
        $('#conexpiry').on('click', function(e) {
           $("#expiry").toggle();
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