"use strict";
var KTDatatablesDataSourceHtml = function() {
    
    $.fn.dataTable.ext.search.push(
        function (settings, data, dataIndex) {
            var min = $('#start').datepicker("getDate");
            var max = $('#end').datepicker("getDate");
            var startDate = new Date(data[1]);
            if (min == null && max == null) { return true; }
            if (min == null && startDate <= max) { return true;}
            if(max == null && startDate >= min) {return true;}
            if (startDate <= max && startDate >= min) { return true; }
            return false;
        }
    );

    var date = new Date();
    var month = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var first = date.getDate() - date.getDay() +1;
    var last = first + 6;


    var tday = String(date.getDate()).padStart(2, '0');
    var tyesterday = String(date.getDate() - 1).padStart(2, '0');

    var tthisweekf = String(first).padStart(2, '0');
    var tthisweekl = String(last).padStart(2, '0');

    var tthismonthf = String(1).padStart(2, '0');

    var firstdaymotn = String(month.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();



	var initTable1 = function() {
		var table = $('#kt_table_1').DataTable({
			"ajax": "index?action=apisalesinventory.js",
			"columns": [
				{ "data": "id" },
				{ "data": "transdate" },
				{ "data": "ip" },
				{ "data": "mac" },
				{ "data": "transtime" },
				{ "data": "transtype" },
				{ "data": "station" },
				{ "data": "time" },
				{ "data": "coinamt" }
			],	
			responsive: true,
			searchDelay: 500,
			processing: true,
            lengthMenu: [[10, 50, 100, 500, -1], [10, 50, 100, 500, 'All']],
            
			footerCallback: function(row, data, start, end, display) {

				var column = 8;
				var api = this.api(), data;

				// Remove the formatting to get integer data for summation
				var intVal = function(i) {
					return typeof i === 'string' ? i.replace(/[\$,]/g, '') * 1 : typeof i === 'number' ? i : 0;
				};

				// Total over all pages
				//var total = api.column(column).data().reduce(function(a, b) {
					//return intVal(a) + intVal(b);
				//}, 0);

				// Total over this page
				var pageTotal = api.column(column, {search: 'applied'}).data().reduce(function(a, b) {
					return intVal(a) + intVal(b);
				}, 0);

				// Update footer
				$('#totalincome').html(
					'₱' + KTUtil.numberString(pageTotal.toFixed(2)) + '',
				);
			},

        
            buttons: [
                    'print',
                    'copyHtml5',
                    'excelHtml5',
                    'csvHtml5',
                    'pdfHtml5',
            ], 

         
			columnDefs: [
				{
					targets: 5,
					render: function(data, type, full, meta) {
						var status = {
							1: {'title': 'Coin', 'state': 'danger'},
							2: {'title': 'Voucher', 'state': 'primary'},
							3: {'title': 'Charging', 'state': 'success'},
						};
						if (typeof status[data] === 'undefined') {
							return data;
						}
						return '<span class="kt-badge kt-badge--' + status[data].state + ' kt-badge--dot"></span>&nbsp;' +
							'<span class="kt-font-bold kt-font-' + status[data].state + '">' + status[data].title + '</span>';
					},
				},
			],
 
           
		});


        $("#resetsale").click(function (e) {
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=Reset",
                        success: function (msg) {
                            if (msg == "1") {
                                toastr.success("Sucessfully Reset Sales Inventory!","",{"timeOut": "1000","positionClass": "toast-top-right"});  
                                location.reload();
                            }
                        }
                    });   
        });     
            

 
        $('#today').on('click', function () {
            $('#start').datepicker('setDate', mm + '/' + tday + '/' + yyyy);
            $('#end').datepicker('setDate', mm + '/' + tday + '/' + yyyy); 
        });
        
  
        $('#yesterday').on('click', function () {
            $('#start').datepicker('setDate', mm + '/' + tyesterday + '/' + yyyy);
            $('#end').datepicker('setDate', mm + '/' + tyesterday + '/' + yyyy); 
        });       

        $('#thisweek').on('click', function () {
            $('#start').datepicker('setDate', mm + '/' + tthisweekf + '/' + yyyy);
            $('#end').datepicker('setDate', mm + '/' + tthisweekl + '/' + yyyy); 
        });    

        $('#thismonth').on('click', function () {
            $('#start').datepicker('setDate', mm + '/' + tthismonthf + '/' + yyyy);
            $('#end').datepicker('setDate', mm + '/' + firstdaymotn + '/' + yyyy); 
        });         
        
        $("#start").datepicker({
            onSelect: function() {
                table.draw();
            },
            changeMonth: true,
            changeYear: true
        });
        $("#end").datepicker({
            onSelect: function() {
                table.draw();
            },
            changeMonth: true,
            changeYear: true
        });
   
        $("#refreshusers").click(function(e) {            
                $('#userstable').DataTable().ajax.reload();
				toastr.success("Sucessfully Reload Sales Inventory","",{"timeOut": "5000","positionClass": "toast-top-right"});  
        });
		
        $('#start, #end').change(function () {
                table.draw();
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