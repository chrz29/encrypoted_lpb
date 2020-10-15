$(document).ready(function() { 

		var table = $('#realtimegraph');
		// begin first table
		table.DataTable({
			paging: false,
			stateSave: true,
            pageLength : 25,
			scrollX: true,
			scrollCollapse: true,			
			bInfo : false,
			"searching": false,
            //lengthChange : false,
		});

		var table = $('#tgraphs');
		// begin first table
		table.DataTable({
			paging: false,
			stateSave: true,
            pageLength : 25,
			scrollX: true,
			scrollCollapse: true,			
			bInfo : false,
			"searching": false,
            //lengthChange : false,
		});
		
var range_rec = 512;  // KBps
var range_snd = 512;  // KBps

if(typeof(EventSource) !== "undefined") 
{
	var stat_source = new EventSource("index?socket=1&mode=statgraph");
	var rate_rec = 0;
	var rate_snd = 0;
	var bytesrec_add = 0;
	var bytessnd_add = 0;
	var old_rate_snd = 0;
	var old_rate_rec = 0;
	stat_source.addEventListener("stats", function(e) {
		var seconds = 1;
		var data = JSON.parse(e.data);
		var new_rec = data.rec;
		var new_snd = data.snd;

		if ( typeof(old_rec) != "undefined" && typeof(old_snd) != "undefined") 
		{ 
			var bytes_rec = new_rec - old_rec;
			var bytes_snd = new_snd - old_snd;
			rate_rec = bytes_rec / seconds / 1024;
			rate_snd = bytes_snd / seconds / 1024;
			bytesrec_add += rate_snd;
			bytessnd_add += rate_rec;
			// Check over/under flow
			if ( rate_rec > range_rec  || rate_rec < 0 )
				rate_rec = old_rate_rec;
			else
				old_rate_rec = rate_rec;

			if ( rate_snd > range_snd  || rate_snd < 0 )
				rate_snd = old_rate_snd;
			else
				old_rate_snd = rate_snd;

			document.getElementById("rec_result").innerHTML="" + Math.round(rate_rec*100)/100 + " KBps";
			document.getElementById("snd_result").innerHTML=""+ Math.round(rate_snd*100)/100 + " KBps";
			document.getElementById("bytesrec_add").innerHTML=""+ Math.round(bytesrec_add)/1000 + " Mb";
			document.getElementById("bytessnd_add").innerHTML=""+ Math.round(bytessnd_add)/1000 + " Mb";
		}
		old_rec = new_rec;
		old_snd = new_snd;
	}, false);
	
} else {
	document.getElementById("rec_result").innerHTML=
		"Sorry, your browser does not support server-sent events...";
}

$("#gosubmit").click(function (e) {
                    type = $("#type").val();
                    $.ajax({
                        type: "POST",
                        url: "index?execute=1&exec=realtimegraphfilter",
                        data: { type: type },
                        success: function(msg) {
                        if (msg == "1") {
                            toastr.success("Sucessfully Filter!", "", {
                                "timeOut": "1000",
                                "positionClass": "toast-top-right"
                            });
                            location.reload();
                        }  
                      }
                    });   
 });    
        		

window.onload = function () {

var dps = []; // dataPoints
var dps1 = [];
var chart = new CanvasJS.Chart("chartContainer", {
	title :{
		text: "Download & Upload Traffic"
	},
	axisY: {
		includeZero: false,
		valueFormatString: "#KBps",
	},      
	axisX: {
		valueFormatString:" ", //comment this to show numeric values
		tickLength: 0
	},  
	data: [
	{
		name: "Upload",
		showInLegend: true,
		type: "line",
		dataPoints: dps
	},
	{
		name: "Download",
		showInLegend: true,
		type: "line",
		dataPoints: dps1	
	}]
});

var xVal = 0;
var yVal = 0; 
var updateInterval = 1000;
var dataLength = 20; // number of dataPoints visible at any point

var updateChart = function (count) {

	count = count || 1;

	for (var j = 0; j < count; j++) {
		yVal = Math.round(rate_rec*100)/100;
		dVal = Math.round(rate_snd*100)/100;
		dps.push({
			x: xVal,
			y: yVal
		});
		dps1.push({
			x: xVal,
			y: dVal
		});		
		xVal++;
	}

	
	if (dps.length > dataLength && dps1.length > dataLength) {
		dps.shift();
		dps1.shift();
	}

	chart.render();
	$('.canvasjs-chart-container img[src*="image/png;base64"]').remove();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);

}
});