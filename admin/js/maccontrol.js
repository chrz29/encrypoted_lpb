"use strict";
var KTDatatablesDataSourceHtml = function() {
var mac = '';
var download = '';
var upload = '';
var mace = '';
var fuk = '';
var uploadd = '';
var downloadd = '';
var note = '';
var noted = '';
	var initTable1 = function() {
		var table = $('#kt_table_1').DataTable({
			responsive: true,
			searchDelay: 500,
           
		});

        $("#blockmacc").click(function (e) {
            mac = $("#mac").val();
            upload = $("#upload").val();
            download = $("#download").val();
			note = $("#note").val();
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=blockmacc",
                        data: {
                            mac: mac,
                            upload: upload,
                            download: download,
							note: note
                        },                        
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Block Mac","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
                            }else {
                                toastr.error(msg,"",{"timeOut": "1000","positionClass": "toast-top-right"});   
                            }
                        }
                    });   
        }); 
        
        $("#allowmacc").click(function (e) {
            mac = $("#mac").val();
            upload = $("#upload").val();
            download = $("#download").val();
			note = $("#note").val();
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=allowmacc",
                        data: {
                            mac: mac,
                            upload: upload,
                            download: download,
							note: note
                        },                        
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Allow Mac","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
                            }else {
                                toastr.error(msg,"",{"timeOut": "1000","positionClass": "toast-top-right"});   
                            }
                        }
                    });   
        });     

        $("#editmac").click(function (e) {
            mace = $("#mace").val();
            uploadd = $("#uploadd").val();
            downloadd = $("#downloadd").val();
            fuk = $("#function").val();
			noted = $("#noted").val();
                    $.ajax({ 
                        type: "POST",
                        url: "index?execute=1&exec=editmacc",
                        data: {
                            mace: mace,
                            uploadd: uploadd,
                            downloadd: downloadd,
                            fuk: fuk,
							noted: noted
                        },                        
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Edit Mac","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
                            }
                        }
                    });   
        }); 
        
        $("#deletemac").click(function (e) {
            mac = $("#mac").val();
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=deletemac",
                        data: {
                            mac: mac                 
                        },                        
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Delete Mac","",{"timeOut": "1000","positionClass": "toast-top-right"});  
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