<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* footer.html */
class __TwigTemplate_d4e2ce97a8600c320a206d5fa58145f466153e6ffe5c712434121a9f5e7a92ae extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "  ";
        echo $this->extensions['Odan\Twig\TwigAssetsExtension']->assets(["files" => [0 => "/assets/js/jquery.min.js", 1 => "/assets/js/eventsource.min.js", 2 => "/assets/js/toastr.min.js", 3 => "/assets/js/loadingoverlay.js", 4 => "/assets/js/howler.min.js", 5 => "/assets/js/eload.js", 6 => "/assets/js/lpb.js", 7 => "/assets/js/standalone.js"], "name" => "lpb.js"]);
        // line 11
        echo "
      <script src=\"/assets/files/";
        // line 12
        echo twig_escape_filter($this->env, ($context["bootsrap"] ?? null), "html", null, true);
        echo ".min.js\"></script>

      <script>
       \$(document).ready(function() { \t
\t\t";
        // line 16
        if ((($context["fbid"] ?? null) != "")) {
            // line 17
            echo "\t\tvar options = {
\t\t\t\tfacebook: \"";
            // line 18
            echo twig_escape_filter($this->env, ($context["fbid"] ?? null), "html", null, true);
            echo "\", 
\t\t\t\tcall_to_action: \"Message us\", 
\t\t\t\tposition: \"left\", 
\t\t};
\t\tvar proto = document.location.protocol, host = \"getbutton.io\", url = proto + \"//static.\" + host;
\t\tvar s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
\t\ts.onload = function () { WhWidgetSendButton.init(host, proto, options); };
\t\tvar x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
\t\t";
        }
        // line 27
        echo "\t\t
        var timeleft = ";
        // line 28
        echo twig_escape_filter($this->env, ($context["insert_wait"] ?? null), "html", null, true);
        echo ", timetotal =";
        echo twig_escape_filter($this->env, ($context["insert_wait"] ?? null), "html", null, true);
        echo ";

        var sound = new Howl({
        src: ['/assets/images/email-notif.mp3'],
        });
        var bg = new Howl({
        src: ['/assets/images/carol.mp3'],
        loop: true,       
        }); 
        var timer = new Howl({
        src: ['/assets/images/timer.mp3'],
        }); \t
    ";
        // line 40
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rates"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["r"]) {
            if (twig_get_attribute($this->env, $this->source, $context["r"], "time", [], "any", false, false, false, 40)) {
                // line 41
                echo "    \$('.rconvert";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["r"], "pulses", [], "any", false, false, false, 41), "html", null, true);
                echo "').html(timeconvertion(\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["r"], "time", [], "any", false, false, false, 41), "html", null, true);
                echo "\"));    
    ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['r'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 43
        echo "    ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["crates"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["c"]) {
            if (twig_get_attribute($this->env, $this->source, $context["c"], "time", [], "any", false, false, false, 43)) {
                // line 44
                echo "    \$('.cconvert";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["c"], "pulses", [], "any", false, false, false, 44), "html", null, true);
                echo "').html(timeconvertion(\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["c"], "time", [], "any", false, false, false, 44), "html", null, true);
                echo "\"));    
    ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['c'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 45
        echo "        
        var requestData = \"\";
        var rchanges = \"\";
        var icoin = \"\";   
            if (typeof(EventSource) !== \"undefined\") {
                var requestSource = new EventSource(\"/admin/index?portaljs=1\");
                    
                requestSource.addEventListener(\"chargingstations\", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        document.getElementById(\"chargingstations\").innerHTML = requestData;                 
                        
                    }
                }, false);

                requestSource.addEventListener(\"hiddencheck\", function(event) {
                    if (requestData != JSON.parse(event.data)) {
                        requestData = JSON.parse(event.data);
                        
                        
                        if(requestData.chargingrates != 1){
                          \$('#pfunccrates').removeClass(\"\").addClass(\"hidden\");
                        }else{
                           \$('#pfunccrates').removeClass(\"hidden\").addClass(\"\");
                        }         
                        
                        if(requestData.insertcoin != 1){
                           \$('#insert_coin_button').removeClass(\"\").addClass(\"hidden\");
                        }else{
                           \$('#insert_coin_button').removeClass(\"hidden\").addClass(\"\");
                        }         

                        if(requestData.viewrates != 1){
                           \$('#pfuncwifi').removeClass(\"\").addClass(\"hidden\");
                        }else{
                           \$('#pfuncwifi').removeClass(\"hidden\").addClass(\"\");
                        }                           

                        if(requestData.pausetime != 1){
                           \$('#pcheck').removeClass(\"\").addClass(\"hidden\");
                        }else{
                           \$('#pcheck').removeClass(\"hidden\").addClass(\"\");
                        }        
 
                      if(requestData.convertvoucher == 0){
                           \$('#cvoucher').removeClass(\"\").addClass(\"hidden\");
                        }else{
                           \$('#cvoucher').removeClass(\"hidden\").addClass(\"\");
                        }   
   
                       if(requestData.checkvouchers < 1){
                           \$('#checkvouchers').removeClass(\"\").addClass(\"hidden\");
                        }else{
                           \$('#checkvouchers').removeClass(\"hidden\").addClass(\"\");
                        }       

                       if(requestData.peload != 1){
                           \$('#peload').removeClass(\"\").addClass(\"hidden\");
                        }else{
                           \$('#peload').removeClass(\"hidden\").addClass(\"\");
                        }     
 
                       if(requestData.pcheckbalance != 1){
                           \$('#pcheckbalance').removeClass(\"\").addClass(\"hidden\");
                        }else{
                           \$('#pcheckbalance').removeClass(\"hidden\").addClass(\"\");
                        }  
                        
                        if(requestData.entervoucher != 1){
                           \$('#entervoucher').removeClass(\"\").addClass(\"hidden\");
                        }else{
                           \$('#entervoucher').removeClass(\"hidden\").addClass(\"\");
                        }  
                                              
                        
                        
                    }
                }, false);
                

                requestSource.addEventListener(\"pfunc\", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        var px = requestData;
                        
                        if(px == 1){
                             \$('#pfunc').text(\"Pause Time\");         
                        }else{
                           \$('#pfunc').text(\"Resume Time\");         
                        }                 
                      
                    }
                }, false);
                
                requestSource.addEventListener(\"gnr\", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        var gnr = requestData;
                        
                        ";
        // line 147
        if ((($context["timerswitch"] ?? null) == 1)) {
            // line 148
            echo "                        if(gnr > 1 && gnr < 60){
                        timer.play();                          
                        }    
                        ";
        }
        // line 152
        echo "                  
                        if(gnr < ";
        // line 153
        echo twig_escape_filter($this->env, ($context["pausexse"] ?? null), "html", null, true);
        echo "){
                            \$('#pfunc').removeClass(\"hidden\").addClass(\"\");
                        }else{
                            \$('#pfunc').removeClass(\"\").addClass(\"hidden\");
                        }
                        
                     
                      
                    }
                }, false);
                
                requestSource.addEventListener(\"rchanges\", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
\t\t\t\t\t\tif(requestData == \"1\") {
                         location.reload();
\t\t\t\t\t\t}
                        
                        //console.log(requestData);
                    }
                }, false);
 
                requestSource.addEventListener(\"timesign\", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        document.getElementById(\"timesign\").innerHTML = requestData;
                    }
                }, false);

                requestSource.addEventListener(\"remaindata\", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        document.getElementById(\"remaindata\").innerHTML = requestData;
                    }
                }, false);
                
                requestSource.addEventListener(\"status\", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        document.getElementById(\"status\").innerHTML = requestData;
                    }
                }, false);                
                
                requestSource.addEventListener(\"vouchersList\", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        document.getElementById(\"vouchersList\").innerHTML = requestData;
                    }
                }, false);          
 
                requestSource.addEventListener(\"msglist\", function(event) {
                    if (requestData != event.data) {
                        requestData = event.data;
                        
                        document.getElementById(\"msglist\").innerHTML = requestData;
                    }
                }, false);  
            
            } else {
                window.location.href = '/lite';
            }                

            //getportalnodejs(\$link,\$ip,\$mac,\$remainingTime,\$pausedTime)
 
    
        \$(\".insert_coin_button\").click(function (e) { 
                    var coinslot = ''; 
                    var p = '';   
                    var f = ''; 
                    var tamount = \"\";
                    var totalm = \"\";
                    var charging = \"\";    
                    var voucher = \"\";
                    var insert_coin_button = \"zxcv\";
                    insert_coin_button = \$(this).val();
                    \$(\"#insert_coin_button\").attr(\"disabled\", true);
                    \$.ajax({
                        type: \"POST\",
                        url: \"/admin/index?sinsertcoin=1\",
                        data: { coinslot : insert_coin_button },
                        success: function (msg) {
                            if (msg == \"1\") {
                            \$('#multicoinslot').modal('hide');
                            updateProgressBar(\$('#progressBar'),insert_coin_button);
                            bg.play();
                            if (typeof(EventSource) !== \"undefined\") {       
                            var IrequestSource = new EventSource(\"/admin/index?insertcoin=1\");  
                             IrequestSource.addEventListener('tamount', function(event) {
                                    if (tamount != event.data) {
                                        tamount = event.data;
                                        timeleft = timetotal; 
                                        document.getElementById(\"tamount\").innerHTML = tamount;
                                        sound.play();                              
                                        \$('#done-paying').text(\"Done Paying\");
                                        \$('#hr').removeClass(\"hidden\").addClass(\"\");  
                                        \$('#buy-voucher').removeClass(\"hidden\").addClass(\"\");   
                                        \$('#buy-charging').removeClass(\"hidden\").addClass(\"\"); 
                                        \$('#extend-charging').removeClass(\"hidden\").addClass(\"\");                
                                        isend(insert_coin_button);
                                    } 
                                }, false);
 
                                \$('#insertcoin').modal({
                                    backdrop: 'static',
                                    keyboard: false
                                });

                                
                                IrequestSource.addEventListener('totalm', function(event) {
                                    if (totalm != event.data) {
                                        totalm = event.data;
                                        
                                        document.getElementById(\"totalm\").innerHTML = totalm;
                                    }
                                }, false);
                                
                                ";
        // line 274
        if ((($context["buycharging"] ?? null) == 1)) {
            // line 275
            echo "                                IrequestSource.addEventListener('charging', function(event) {
                                    if (charging != event.data) {
                                        charging = event.data;
                                        
                                        document.getElementById(\"charging\").innerHTML = charging;
                                    }
                                }, false);
                                ";
        }
        // line 283
        echo "                                
                                ";
        // line 284
        if ((($context["buyvoucher"] ?? null) == 1)) {
            // line 285
            echo "                                IrequestSource.addEventListener('voucher', function(event) {
                                    if (voucher != event.data) {
                                        voucher = event.data;
                                        
                                        document.getElementById(\"voucher\").innerHTML = voucher;
                                    }
                                }, false);
                                ";
        }
        // line 293
        echo "                                
                                timeleft = timetotal;
                                
                                
                                \$(\"#done-paying\").click(function (e) {
                                        \$.ajax({
                                            type: \"POST\",
                                            url: \"/admin/index?sclaim=1\",
                                            data: { f: \"dbuying\", p: insert_coin_button},
                                            success: function (msg) {
                                                if (msg == \"1\") {
\t\t\t\t\t\t\t\t\t\t\t\t\t\$( \"#rtime\" ).html('<div class=\"spinner-border text-primary\" role=\"status\"> <span class=\"sr-only\">Loading...</span> </div>');
                                                    IrequestSource.close();
                                                    iclaim(insert_coin_button);\t\t\t\t\t\t\t\t\t\t\t\t\t
                                                    toastr.success(\"Successfully claim your time!\",\"\",{\"timeOut\": \"1000\",\"positionClass\": \"toast-top-right\"});
                                                    bg.stop();
                                                    \$('#insertcoin').modal('hide');
\t\t\t\t\t\t\t\t\t\t\t\t\t\$('#pfunc').off('click');
\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t";
        // line 313
        if ((($context["isite"] ?? null) != "")) {
            // line 314
            echo "\t\t\t\t\t\t\t\t\t\t\t\t\tsetTimeout(function(){ window.location.href = \"";
            echo twig_escape_filter($this->env, ($context["isite"] ?? null), "html", null, true);
            echo "\"; }, 2000);      
\t\t\t\t\t\t\t\t\t\t\t\t\t";
        } else {
            // line 316
            echo "\t\t\t\t\t\t\t\t\t\t\t\t\t setTimeout(function(){ window.location.reload(); }, 2000); 
\t\t\t\t\t\t\t\t\t\t\t\t\t";
        }
        // line 317
        echo " \t\t
                                                   
                                                }                      
                                                else {
                                                    bg.stop();
                                                    IrequestSource.close();
                                                    iclaim(insert_coin_button);
                                                    \$('#insertcoin').modal('hide');    
                                                    setTimeout(function(){ window.location.reload(); }, 2000); 
                                                }
                                            }
                                        });   
                                }); 

                                \$(\"#buy-voucher\").click(function (e) {
                                        \$.ajax({
                                            type: \"POST\",
                                            url: \"/admin/index?sclaim=1\",
                                            data: {  f: \"bvoucher\", p: insert_coin_button},
                                            success: function (msg) {
                                                if (msg == \"1\") {   
                                                    bg.stop();
                                                    IrequestSource.close();
                                                    toastr.success(\"Successfully buy voucher!\",\"\",{\"timeOut\": \"1000\",\"positionClass\": \"toast-top-right\"});
                                                    iclaim(insert_coin_button);
                                                    \$('#insertcoin').modal('hide');
                                                    \$('#insert_coin_button').off('click');
                                                    setTimeout(function(){ window.location.reload(); }, 2000); 
                                                }
                                            }
                                        });   
                                }); 
                                                    
                                \$(\"#scharging\").click(function (e) {
                                        port = \$(\"input:radio[name=port]:checked\").val();
                                        \$.ajax({
                                            type: \"POST\",
                                            url: \"/admin/index?sclaim=1\",
                                            data: { f: \"scharging\", port: port, p: insert_coin_button},
                                            success: function (msg) {
                                                if (msg == \"1\") { 
                                                    bg.stop();
                                                    IrequestSource.close();
                                                    toastr.success(\"Successfully Buy charging time!\",\"\",{\"timeOut\": \"1000\",\"positionClass\": \"toast-top-right\"});
                                                    iclaim(insert_coin_button);
                                                    \$('#selectcharging').modal('hide'); 
                                                    \$('#insertcoin').modal('hide');
                                                    \$('#insert_coin_button').off('click');
                                                    setTimeout(function(){ window.location.reload(); }, 2000); 
                                                }
                                            }
                                        });   
                                }); 
 
                                \$(\"#extend-charging\").click(function (e) {
                                        var port = \"";
        // line 372
        echo twig_escape_filter($this->env, ($context["checkport"] ?? null), "html", null, true);
        echo "\";
                                        \$.ajax({
                                            type: \"POST\",
                                            url: \"/admin/index?sclaim=1\",
                                            data: { f: \"addchargetime\", port: port},
                                            success: function (msg) {
                                                if (msg == \"1\") {   
                                                    bg.stop();
                                                    IrequestSource.close();
                                                    toastr.success(\"Successfully Extend charging time!\",\"\",{\"timeOut\": \"1000\",\"positionClass\": \"toast-top-right\"});
                                                    iclaim(insert_coin_button);
                                                    \$('#insertcoin').modal('hide');
                                                    \$('#insert_coin_button').off('click');
                                                    setTimeout(function(){ window.location.reload(); }, 2000); 
                                                }
                                            }
                                        });   
                                });
                                
                                } else {
                                    document.getElementById(\"voucher\").innerHTML = \"ERROR!\";
                                }
                            }  

                            
                            else if (msg == \"15\"){
                                \$('#insert_coin_button').attr(\"disabled\", false);
                                toastr.error(\"Bawal sabay mag insertcoin. BE PATIENT!\",\"\",{\"timeOut\": \"2000\",\"positionClass\": \"toast-top-right\"});
                            }else{
                                \$('#insert_coin_button').attr(\"disabled\", false);
                                toastr.error(msg, 'Error');
                            }
                            
                           
                           
                        }
                    });   
            });  
    
  
\t\t\t\$(\"#sendmsg\").click(function (e) {
\t\t\t\tvar msgval = \$(\"#msg\"). val();
\t\t\t\t\t\t\$.ajax({
\t\t\t\t\t\t\ttype: \"POST\",
\t\t\t\t\t\t\turl: \"/admin/index?isend=1&func=sendmsg\",
\t\t\t\t\t\t\tdata: {  msgval: msgval},
\t\t\t\t\t\t\tsuccess: function (msg) {
\t\t\t\t\t\t\t\tif (msg == \"1\") {   
\t\t\t\t\t\t\t\ttoastr.success(\"Successfully Sent Message!\",\"\",{\"timeOut\": \"1000\",\"positionClass\": \"toast-top-right\"});
\t\t\t\t\t\t\t\t\$('#msg').val('');
\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t}\t\t\t\t\t\t
\t\t\t\t\t\t});   
\t\t\t}); 
\t\t\t\t\t\t\t\t\t
  
            
            function updateProgressBar(\$element,insert_coin_button) {
                var progwidth = (timeleft / timetotal) * 100;
                var newvalue = progwidth + '%';
                \$element.css(\"width\", newvalue);
                \$('#progress-msg').html(\"Waiting for \"+timeleft + \" seconds\");
 
                if (timeleft > 0) { 
                    timeleft = timeleft - 1;
                    setTimeout(function() {
                        updateProgressBar(\$element,insert_coin_button);                        
                    }, 1000);                  
                } else {
                    ";
        // line 441
        if ((($context["autoclaim"] ?? null) == 1)) {
            // line 442
            echo "                    \$('#done-paying').trigger('click');
                    ";
        }
        // line 444
        echo "                    iclaim(insert_coin_button);
                    bg.stop();
                     \$('#insertcoin').modal('hide'); 
                    \$('#insert_coin_button').off('click');
                    setTimeout(function(){ window.location.reload(); }, 2000);             
                }
            }

 
         ";
        // line 453
        if ((($context["freehour"] ?? null) == 1)) {
            // line 454
            echo "          \$(\"#freetime\").click(function(e) {
            \$.ajax({
                type: \"POST\",
                url: \"/admin/index?isend=1&func=claimfreetime\",
                success: function(msg) {
\t\t\t\t\t\$(\"#freetime\").hide();
                    if (msg == \"1\") {
                        toastr.success(\"Successfully get free time\", \"\", {
                            \"timeOut\": \"1000\",
                            \"positionClass\": \"toast-top-right\"
                        });
                        ";
            // line 465
            if ((($context["freehoursite"] ?? null) != "")) {
                // line 466
                echo "                        setTimeout(function(){ window.location.href = \"";
                echo twig_escape_filter($this->env, ($context["freehoursite"] ?? null), "html", null, true);
                echo "\"; }, 3000);    
\t\t\t\t\t\t";
            } else {
                // line 468
                echo "\t\t\t\t\t\twindow.location.reload();
                        ";
            }
            // line 469
            echo " 
\t\t\t\t\t\t
\t\t\t\t\t\t
                                               
                    }else{
                         toastr.error(msg, \"\", {
                            \"timeOut\": \"1000\",
                            \"positionClass\": \"toast-top-right\"
                        });                   
                    }
                }
            });
        });
      ";
        }
        // line 482
        echo "                      

\t\t


         }); //end document ready
      </script>
  ";
    }

    public function getTemplateName()
    {
        return "footer.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  611 => 482,  595 => 469,  591 => 468,  585 => 466,  583 => 465,  570 => 454,  568 => 453,  557 => 444,  553 => 442,  551 => 441,  479 => 372,  422 => 317,  418 => 316,  412 => 314,  410 => 313,  388 => 293,  378 => 285,  376 => 284,  373 => 283,  363 => 275,  361 => 274,  237 => 153,  234 => 152,  228 => 148,  226 => 147,  122 => 45,  110 => 44,  104 => 43,  92 => 41,  87 => 40,  70 => 28,  67 => 27,  55 => 18,  52 => 17,  50 => 16,  43 => 12,  40 => 11,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "footer.html", "/opt/vc/include/interface/vcos/pthreads/template/footer.html");
    }
}
