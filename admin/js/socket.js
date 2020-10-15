$(document).ready(function() {
    var requestData = "";
     if (typeof(EventSource) !== "undefined") {
                var requestSource = new EventSource("index?socket=1&mode=dashboard");
                    
                requestSource.addEventListener("online", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        document.getElementById("online").innerHTML = requestData;                 
                        
                    }
                }, false);
                
                requestSource.addEventListener("datatransfer", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        document.getElementById("datatransfer").innerHTML = requestData;                 
                        
                    }
                }, false);    

                requestSource.addEventListener("temp", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        document.getElementById("temp").innerHTML = requestData;                 
                        
                    }
                }, false);    

                requestSource.addEventListener("uptime", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        document.getElementById("uptime").innerHTML = requestData;                 
                        
                    }
                }, false);
 


                
            } else {
                document.getElementById("error").innerHTML = "ERROR!";
            }                

    

}); 