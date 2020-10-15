$(function() {
 
	 function CheckIpvadd(ip) {
		return /^\d+\.\d+\.\d+\.\d+$/.test(ip);
	}


	function validURL(str)
	{
		regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
		return regexp.test(str);
	}

     $("#savesettingsi").click(function(e) {       
            wifi = $("#wifi").val();
			wifichannel = $("#wifichannel").val();
            nclients = $("#nclients").val();
            i = $("#interface").val();
            repeatermode = $("#repeatermode").val();
            hostname = $("#hostname").val();
			vlantagid = $("#vlantagid").val();
			vlangatewayaddress = $("#vlangatewayaddress").val();
			vlansubnetmask = $("#vlansubnetmask").val();
			vlandhcpoolstart = $("#vlandhcpoolstart").val();
			vlandhcpoolend = $("#vlandhcpoolend").val();
            dns1 = $("#dns1").val();
            dns2 = $("#dns2").val();
            webportal = $("#webportal").val();
            checkonline = $("#checkonline").val();
            vendostation = $("#vendostation").val();
            natfixer = $("#natfixer").val();
			ttl = $("#ttl").val();
		 if( CheckIpvadd(vlangatewayaddress) && CheckIpvadd(vlansubnetmask)  && CheckIpvadd(vlandhcpoolstart) && CheckIpvadd(vlandhcpoolend) && CheckIpvadd(dns1) && CheckIpvadd(dns2) && validURL(webportal) ) {
            $.ajax({
                type: "POST",
                url: "index?execute=1&exec=savesettingsi",
                data: {
                    wifi: wifi,
					wifichannel: wifichannel,
                    nclients: nclients,
                    i : i,
                    repeatermode : repeatermode,
                    hostname : hostname,
					vlantagid : vlantagid,
					vlangatewayaddress : vlangatewayaddress,
					vlansubnetmask : vlansubnetmask,
					vlandhcpoolstart : vlandhcpoolstart,
					vlandhcpoolend : vlandhcpoolend,
                    dns1 : dns1,
                    dns2 : dns2,                    
                    webportal : webportal,
                    checkonline : checkonline,                    
                    vendostation : vendostation,
					natfixer : natfixer,
					ttl : ttl
                },                
                success: function(msg) {
                    if (msg == "1") {
                        toastr.success("Sucess Save Changes!", "", { 
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
                        });
                    }else {
					toastr.error(msg, "", {
									"timeOut": "1000",
									"positionClass": "toast-top-right"
					});						
					}
                }
            });
		}else {
			toastr.error("Please Input Valid IP Address", "", {
                            "timeOut": "1000",
                            "positionClass": "toast-top-right"
			});					
		}
        });
        
    $('input:text').on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });  
 
	$('#interface').change(function(){
                   $('#vlan').hide();
                   $('#' + $(this).val()).show();
	});
		
  
});