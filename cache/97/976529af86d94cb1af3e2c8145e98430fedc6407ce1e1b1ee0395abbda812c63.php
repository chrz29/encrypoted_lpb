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

/* template4.html.twig */
class __TwigTemplate_6409cb7477e80ea8e3412edac2ac204473e1d1e417928c0f623e30ae5e20d7cd extends \Twig\Template
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
        echo "<!DOCTYPE html>
<html>

<head>
\t<meta charset=\"utf-8\">
\t<title>";
        // line 6
        echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
        echo "</title>
         <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
\t <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, target-densitydpi=medium-dpi\" />
         ";
        // line 9
        $this->loadTemplate("header.html", "template4.html.twig", 9)->display($context);
        echo "    
    </head>

<body>
\t<div class=\"container text-center\">
    
        <div id=\"carousel-id\" class=\"carousel slide\"  data-interval=\"";
        // line 15
        echo twig_escape_filter($this->env, ($context["slidertimer"] ?? null), "html", null, true);
        echo "000\" data-ride=\"carousel\">           
            <div class=\"carousel-inner\" role=\"listbox\">
            ";
        // line 17
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["banner"] ?? null));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        foreach ($context['_seq'] as $context["_key"] => $context["d"]) {
            if (twig_get_attribute($this->env, $this->source, $context["d"], "banner", [], "any", false, false, false, 17)) {
                // line 18
                echo "                  <div class=\"carousel-item ";
                if (twig_get_attribute($this->env, $this->source, $context["loop"], "first", [], "any", false, false, false, 18)) {
                    echo " active ";
                }
                echo "\">
                    <img src=\"/assets/images/";
                // line 19
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["d"], "banner", [], "any", false, false, false, 19), "html", null, true);
                echo "\" class=\"img-fluid\">
                  </div>
            ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['d'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 22
        echo "            </div>
            
          </div>
  
\t\t<div style=\"margin:10px\"></div>
\t\t<!--<div class=\"animate-area\">
            <img class=\"img-fluid temp-hidden\" src=\"images/logo-small.png\" />
            </div>-->


\t    <div class=\"d-flex justify-content-center\">
                <div class=\"alert alert-success\">";
        // line 33
        echo twig_escape_filter($this->env, ($context["portalannouncement"] ?? null), "html", null, true);
        echo " </div>
            </div> 

\t\t<div class=\"row\">
\t\t\t<div class=\"col-md-12 h2\">
\t\t\t\t<div id=\"status\">";
        // line 38
        echo ($context["getstatus"] ?? null);
        echo "</div>
\t\t\t</div>
\t\t</div>
\t\t<div id=\"default_container\">
\t\t\t<div class=\"row\" style=\"margin-bottom:10px;\">
\t\t\t\t<div class=\"col-md-12\"> <small style=\"color:#007bff;text-transform: uppercase;\">IP: ";
        // line 43
        echo twig_escape_filter($this->env, ($context["ip"] ?? null), "html", null, true);
        echo " | Mac: ";
        echo twig_escape_filter($this->env, ($context["mac"] ?? null), "html", null, true);
        echo " </small>
\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-12\"> <small style=\"color:#007bff;text-transform: uppercase;\">Account Credits: ₱";
        // line 45
        echo twig_escape_filter($this->env, ($context["remainingcredit"] ?? null), "html", null, true);
        echo " </small>
\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-12\"> <small style=\"color:#007bff;text-transform: uppercase;\"><div id=\"remaindata\"> </div> </small>
\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-12\"> <small style=\"color:#748c8a;text-transform: uppercase;\"> <div id=\"timesign\"> ";
        // line 49
        echo ($context["TimeSign"] ?? null);
        echo " </div></small>
\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-12\">
\t\t\t\t\t<div id=\"rtime\"> ";
        // line 52
        echo ($context["getUserremainingTime"] ?? null);
        echo "</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<div class=\"temp-hidden\">
            
            
               ";
        // line 58
        if ((($context["freehour"] ?? null) == 1)) {
            // line 59
            echo "\t\t\t\t<div class=\"row\" style=\"margin-bottom:10px;\">
\t\t\t\t\t<div class=\"col-md-12\">
\t\t\t\t\t\t<button type=\"button\" id=\"freetime\" class=\"btn btn-danger button-rnd \">Get Free Time</button>
\t\t\t\t\t</div>
\t\t\t\t</div>    
                ";
        }
        // line 65
        echo "                
\t\t\t\t";
        // line 66
        if ((($context["insertcoin"] ?? null) == 1)) {
            // line 67
            echo "\t\t\t\t<div class=\"row\" style=\"margin-bottom:10px;\">
\t\t\t\t\t<div class=\"col-md-12\">
                    ";
            // line 69
            if ((($context["checkavailableonline"] ?? null) < 1)) {
                // line 70
                echo "\t\t\t\t\t\t<button type=\"button\" id=\"insert_coin_button\" value=\"zxcv\" class=\"insert_coin_button btn btn-success button-rnd\">Insert Money</button>
\t\t\t\t\t\t";
            } else {
                // line 72
                echo "\t\t\t\t\t\t<button type=\"button\" data-toggle=\"modal\" data-target=\"#multicoinslot\" class=\"btn btn-success button-rnd\">Insert Money</button>
                        ";
            }
            // line 74
            echo "                        </div>
\t\t\t\t</div>
\t\t\t\t";
        }
        // line 77
        echo "\t\t\t\t
\t\t\t\t";
        // line 78
        if ((($context["pausetime"] ?? null) == 1)) {
            // line 79
            echo "\t\t\t\t<div class=\"row\" id=\"pcheck\" style=\"margin-bottom:10px;\">
\t\t\t\t\t<div class=\"col-md-12\">
\t\t\t\t\t\t<button type=\"button\" id=\"pfunc\" class=\"btn btn-danger button-rnd btn-spinner\">Pause Time</button>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t";
        }
        // line 85
        echo "\t\t\t\t
\t\t\t\t";
        // line 86
        if ((($context["viewrates"] ?? null) == 1)) {
            // line 87
            echo "\t\t\t\t<div class=\"row\" id=\"pfuncwifi\" style=\"margin-bottom:10px;\">
\t\t\t\t\t<div class=\"col-md-12\">
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary button-rnd\" data-toggle=\"modal\" data-target=\"#popup\">Wifi Rates</button>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t";
        }
        // line 93
        echo "\t\t\t\t
\t\t\t\t
\t\t\t\t";
        // line 95
        if ((($context["viewchargingrates"] ?? null) == 1)) {
            // line 96
            echo "\t\t\t\t<div class=\"row\" id=\"pfunccrates\" style=\"margin-bottom:10px;\">
\t\t\t\t\t<div class=\"col-md-12\">
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary button-rnd\" data-toggle=\"modal\" data-target=\"#chargingstation\">Charging Rates</button>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t";
        }
        // line 102
        echo "\t\t\t\t
\t\t\t\t
\t\t\t\t";
        // line 104
        if ((($context["buyload"] ?? null) == 1)) {
            // line 105
            echo "\t\t\t\t<div class=\"row\" id=\"peload\" style=\"margin-bottom:10px;\">
\t\t\t\t\t<div class=\"col-md-12\">
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger button-rnd\" data-target=\"#buyload\" data-toggle=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\">Buy Load</button>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t";
        }
        // line 111
        echo "\t\t\t\t
\t\t\t\t
\t\t\t\t";
        // line 113
        if ((($context["checkbalance"] ?? null) == 1)) {
            // line 114
            echo "\t\t\t\t<div class=\"row\" id=\"pcheckbalance\" style=\"margin-bottom:10px;\">
\t\t\t\t\t<div class=\"col-md-12\">
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger button-rnd\" data-target=\"#checkbalance\" data-toggle=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\">Check Balance</button>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t";
        }
        // line 120
        echo "

\t\t\t\t";
        // line 122
        if ((($context["chatbox"] ?? null) == 1)) {
            // line 123
            echo "\t\t\t\t<div class=\"row\" style=\"margin-bottom:10px;\">
\t\t\t\t\t<div class=\"col-md-12\"> 
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger button-rnd\" data-target=\"#chatbox\" data-toggle=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\">ChatBox ";
            // line 125
            echo ($context["unreadmessages"] ?? null);
            echo "</button>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t";
        }
        // line 129
        echo "\t\t\t\t
\t\t\t\t";
        // line 130
        if ((($context["entervoucher"] ?? null) == 1)) {
            // line 131
            echo "\t\t\t\t<div class=\"btn-block\" id=\"entervoucher\">
\t\t\t\t\t<div class=\"input-group mb-3\">
\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"vcode\" id=\"vcode\" value=\"\" placeholder=\"Enter Voucher here...\">
\t\t\t\t\t\t<div class=\"input-group-append\">
\t\t\t\t\t\t\t<button id=\"sub-voucher\" class=\"btn btn-primary\">Submit</button>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t";
        }
        // line 140
        echo "\t\t\t\t
\t\t\t\t
\t\t\t\t";
        // line 142
        if ((($context["session2voucher"] ?? null) == 1)) {
            // line 143
            echo "\t\t\t\t<div class=\"row\" style=\"margin-bottom:10px;\">
\t\t\t\t\t<div class=\"col-md-12\">
\t\t\t\t\t\t<button type=\"button\" id=\"cvoucher\" data-toggle=\"modal\" data-target=\"#sessiontovoucher\" class=\"btn btn-primary button-rnd\">Convert Time to Voucher</button>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t";
        } elseif ((        // line 148
($context["session2voucher"] ?? null) == 2)) {
            // line 149
            echo "\t\t\t\t<div class=\"row\" style=\"margin-bottom:10px;\">
\t\t\t\t\t<div class=\"col-md-12\">
\t\t\t\t\t\t<button type=\"button\" id=\"cvoucher\" data-toggle=\"modal\" data-target=\"#logout\" class=\"btn btn-primary button-rnd\">Logout</button>
\t\t\t\t\t</div>
\t\t\t\t</div>\t\t\t\t
\t\t\t\t";
        }
        // line 155
        echo "\t\t\t\t
\t\t\t\t";
        // line 156
        if ((($context["checkchargingpins"] ?? null) > 0)) {
            // line 157
            echo "\t\t\t\t<div class=\"row \">
\t\t\t\t\t<div class=\"col-md-12\">
\t\t\t\t\t\t<button type=\"button\" data-toggle=\"modal\" data-target=\"#charginglist\" class=\"btn btn-primary button-rnd\">Charging Stations</button>
\t\t\t\t\t</div>
\t\t\t\t</div>";
        }
        // line 162
        echo "\t\t\t\t<hr class=\"prettyline\">
\t\t\t</div>
\t\t\t<!-- //LIST VOUCHER -->
\t\t\t<div class=\"panel panel-info hidden\" id=\"checkvouchers\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4 class=\"panel-title\">My Vouchers</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"table-responsive\">
\t\t\t\t\t<table class=\"table\">
\t\t\t\t\t\t<thead>
\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<th class=\"text-center\">Code</th>
\t\t\t\t\t\t\t\t<th class=\"text-center\">Time</th>
\t\t\t\t\t\t\t\t<th class=\"text-center\">Action</th>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t</thead>
\t\t\t\t\t\t<tbody id=\"vouchersList\"></tbody>
\t\t\t\t\t</table>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t<!-- Modal -->
\t\t<div id=\"popup\" class=\"modal fade bd-example-modal-sm\" role=\"dialog\">
\t\t\t<div class=\"modal-dialog modal-dialog-centered\">
\t\t\t\t<!-- Modal content-->
\t\t\t\t<div class=\"modal-content\">
\t\t\t\t\t<div class=\"modal-header\">
\t\t\t\t\t\t<h4 class=\"modal-title\">WiFi Rates</h4>
\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-body\">
\t\t\t\t\t\t<table class=\"table table-striped table-bordered table-sm\">
\t\t\t\t\t\t\t<tr class=\"thead-dark\">
\t\t\t\t\t\t\t\t<th>Amount</th>
\t\t\t\t\t\t\t\t<th>Time</th>
\t\t\t\t\t\t\t\t<th>Note</th>
\t\t\t\t\t\t\t</tr>
                            
                            ";
        // line 200
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rates"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["r"]) {
            if (twig_get_attribute($this->env, $this->source, $context["r"], "time", [], "any", false, false, false, 200)) {
                // line 201
                echo "\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<td>";
                // line 202
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["r"], "pulses", [], "any", false, false, false, 202), "html", null, true);
                echo "</td>
\t\t\t\t\t\t\t\t<td class=\"rconvert";
                // line 203
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["r"], "pulses", [], "any", false, false, false, 203), "html", null, true);
                echo "\"></td>
\t\t\t\t\t\t\t\t<td>";
                // line 204
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["r"], "note", [], "any", false, false, false, 204), "html", null, true);
                echo "</td>
\t\t\t\t\t\t\t</tr>
                            ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['r'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 207
        echo "                            
                            </table>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t<div id=\"multicoinslot\" class=\"modal fade bd-example-modal-sm\" role=\"dialog\">
\t\t\t<div class=\"modal-dialog modal-dialog-centered modal-lg\">
\t\t\t\t<!-- Modal content-->
\t\t\t\t<div class=\"modal-content\">
\t\t\t\t\t<div class=\"modal-header\">
\t\t\t\t\t\t<h4 class=\"modal-title\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i> Select Coinslot </h4>
\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-body\">
\t\t\t\t\t\t<div class=\"card-deck mb-3 text-center\">
\t\t\t\t\t      ";
        // line 223
        if ((($context["mainvendo"] ?? null) == 1)) {
            // line 224
            echo "\t\t\t\t\t\t  <div class=\"card mb-4 shadow-sm\">
\t\t\t\t\t\t\t\t<div class=\"card-header\">
\t\t\t\t\t\t\t\t\t<h4 class=\"my-0 font-weight-normal\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-target=\"#zxcv\">";
            // line 226
            echo twig_escape_filter($this->env, ($context["cname"] ?? null), "html", null, true);
            echo "</h4>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div id=\"zxcv\" class=\"collapse d-lg-block\">
\t\t\t\t\t\t\t\t<div class=\"card-body\">
\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">
\t\t\t\t\t\t\t\t\t\t<li>";
            // line 231
            echo twig_escape_filter($this->env, ($context["cdescription"] ?? null), "html", null, true);
            echo "</li>
\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t<button type=\"button\" value=\"zxcv\" class=\"insert_coin_button btn btn-lg btn btn-primary button-animate\" ><i class=\"fa fa-money fa-fw\"></i>Insert Coin</button>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
                            ";
        }
        // line 238
        echo "                            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["multicoinslot"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["m"]) {
            if (twig_get_attribute($this->env, $this->source, $context["m"], "mac", [], "any", false, false, false, 238)) {
                // line 239
                echo "\t\t\t\t\t\t\t<div class=\"card mb-4 shadow-sm\">
\t\t\t\t\t\t\t\t<div class=\"card-header\">
\t\t\t\t\t\t\t\t\t<h4 class=\"my-0 font-weight-normal\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-target=\"#";
                // line 241
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], "id", [], "any", false, false, false, 241), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], "coinslotname", [], "any", false, false, false, 241), "html", null, true);
                echo "</h4>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div id=\"";
                // line 243
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], "id", [], "any", false, false, false, 243), "html", null, true);
                echo "\" class=\"collapse d-lg-block\">
\t\t\t\t\t\t\t\t<div class=\"card-body\">
\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">
\t\t\t\t\t\t\t\t\t\t<li>";
                // line 246
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], "description", [], "any", false, false, false, 246), "html", null, true);
                echo "</li>
\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t<button type=\"button\" value=\"";
                // line 248
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], "mac", [], "any", false, false, false, 248), "html", null, true);
                echo "\" class=\"insert_coin_button btn btn-lg btn btn-primary button-animate eload-spinner\"><i class=\"fa fa-money fa-fw\"></i>Insert Coin</button>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
                            ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['m'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 253
        echo "                            </div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t<div id=\"charginglist\" class=\"modal fade bd-example-modal-sm\" role=\"dialog\">
\t\t\t<div class=\"modal-dialog modal-dialog-centered\">
\t\t\t\t<!-- Modal content-->
\t\t\t\t<div class=\"modal-content\">
\t\t\t\t\t<div class=\"modal-header\">
\t\t\t\t\t\t<h4 class=\"modal-title\">Charging Stations</h4>
\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-body\">
\t\t\t\t\t\t<table class=\"table table-striped table-bordered table-sm\">
\t\t\t\t\t\t\t<tr class=\"thead-dark\">
\t\t\t\t\t\t\t\t<th>Station Port #</th>
\t\t\t\t\t\t\t\t<th>Remaining Time</th>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t<tbody id=\"chargingstations\"></tbody>
\t\t\t\t\t\t</table>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t<div id=\"sessiontovoucher\" class=\"modal fade bd-example-modal-sm\" role=\"dialog\">
\t\t\t<div class=\"modal-dialog modal-dialog-centered\">
\t\t\t\t<!-- Modal content-->
\t\t\t\t<div class=\"modal-content\">
\t\t\t\t\t<div class=\"modal-header\">
\t\t\t\t\t\t<h4 class=\"modal-title\">Convert Time To Voucher</h4>
\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-body\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t<div class=\"input-group input-group-sm mb-3\">
\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> <span class=\"input-group-text\" id=\"inputGroup-sizing-sm-available\">Your Minutes:</span>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<input type=\"number\" name=\"minutes\" id=\"minutes\" class=\"form-control\" value=\"";
        // line 291
        echo twig_escape_filter($this->env, ($context["remainingTime"] ?? null), "html", null, true);
        echo "\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm-available\" readonly>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"input-group input-group-sm mb-3\">
\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Minutes to convert:</span>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<input type=\"number\" name=\"amountminutes\" id=\"amountminutes\" min=\"0\" oninput=\"validity.valid||(value='');\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\">
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<button type=\"submit\" id=\"btn-vcode\" class=\"btn btn-primary\">Convert</button>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>

\t\t<div id=\"logout\" class=\"modal fade bd-example-modal-sm\" role=\"dialog\">
\t\t\t<div class=\"modal-dialog modal-dialog-centered\">
\t\t\t\t<!-- Modal content-->
\t\t\t\t<div class=\"modal-content\">
\t\t\t\t\t<div class=\"modal-header\">
\t\t\t\t\t\t<h4 class=\"modal-title\">Time Logout!</h4>
\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-body\">
\t\t\t\t\t\t\t<h4>Are you sure to logout your time? If you sure just click \"Logout\".</h4>
\t\t\t\t\t</div>
                  <div class=\"modal-footer\">
                     <button type=\"button\" class=\"btn btn-danger waves-effect\" data-dismiss=\"modal\">Cancel</button>
                     <button type=\"submit\" id=\"logoutnow\" class=\"btn btn-success\">Logout</button>   
                  </div>\t\t\t\t\t
\t\t\t\t</div>\t\t\t\t
\t\t\t</div>
\t\t</div>
\t\t
\t\t<!-- Buy Load Modal -->
\t\t<div id=\"buyload\" class=\"modal fade bd-example-modal-sm\" role=\"dialog\">
\t\t\t<div class=\"modal-dialog modal-dialog-centered modal-lg\">
\t\t\t\t<!-- Modal content-->
\t\t\t\t<div class=\"modal-content\">
\t\t\t\t\t<div class=\"modal-header\">
\t\t\t\t\t\t<h4 class=\"modal-title\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i> ";
        // line 330
        echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
        echo " - Eloading </h4>
\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-body text-left\">
\t\t\t\t\t\t<div class=\"col-xs-7 align-middle p-lg\">
\t\t\t\t\t\t\t<h3 style=\"color:#009ee6\"> Buy Load & Epins</h3>
\t\t\t\t\t\t\t<div style=\"margin-top:20px\"></div>
\t\t\t\t\t\t\t<p style=\"color: #101010;\"><i class=\"fa fa-mobile\" aria-hidden=\"true\"></i> Enter Mobile Phone Number:</p>
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t<input type=\"text\" name=\"eloadnumber\" id=\"eloadnumber\" placeholder=\"09123456789\" maxlength=\"11\" onkeypress=\"return getnumbers(this, event)\" class=\"form-control input-lg m-b\">
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<hr>
\t\t\t\t\t\t\t<div class=\"panel-body\">
\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"mac\" id=\"mac\" value=\"";
        // line 343
        echo twig_escape_filter($this->env, ($context["mac"] ?? null), "html", null, true);
        echo "\" class=\"form-control\">
\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"ip\" id=\"ip\" value=\"";
        // line 344
        echo twig_escape_filter($this->env, ($context["ip"] ?? null), "html", null, true);
        echo "\" class=\"form-control\">
\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-lg button-rnd eload-spinner\" onclick=\"eloadproduct()\">Buy</button>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t
\t\t<!--Chatbox Modal -->
\t\t<div id=\"chatbox\" class=\"modal fade bd-example-modal-sm\" role=\"dialog\">
\t\t\t<div class=\"modal-dialog modal-dialog-centered modal-lg\">
\t\t\t\t<!-- Modal content-->
\t\t\t\t<div class=\"modal-content\">
\t\t\t\t\t\t<div class=\"modal-header\">
\t\t\t\t\t\t\t<h4 class=\"modal-title\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i> ChatBox </h4>
\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"modal-body\">
\t\t\t\t\t\t<div class=\"container\">
\t\t\t\t\t\t\t<div id=\"msglist\">
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"panel-footer\">
\t\t\t\t\t\t\t\t <div class=\"input-group\">
\t\t\t\t\t\t\t\t  <input type=\"text\" id=\"msg\" class=\"form-control\">
\t\t\t\t\t\t\t\t  <span class=\"input-group-btn\">
\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\" id=\"sendmsg\" type=\"button\">Send</button>
\t\t\t\t\t\t\t\t  </span>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>\t\t\t\t\t\t
                  </div>
               </div>
            </div>
         </div>
\t\t 
\t\t
\t\t<!--Insert Coin Modal -->
\t\t<div id=\"insertcoin\" class=\"modal fade bd-example-modal-sm\" role=\"dialog\">
\t\t\t<div class=\"modal-dialog modal-dialog-centered modal-lg\">
\t\t\t\t<!-- Modal content-->
\t\t\t\t<div class=\"modal-content\">
\t\t\t\t\t<div class=\"modal-body\">
\t\t\t\t\t\t<div class=\"col-xs-7 align-middle p-lg\">
\t\t\t\t\t\t\t<h3 style=\"color:#009ee6\"> Please Insert Money</h3> 
\t\t\t\t\t\t\t<div id=\"progress-msg\"></div>
\t\t\t\t\t\t\t<div class=\"progress progress-rounded progress-lg progress-striped active\">
\t\t\t\t\t\t\t\t<div id=\"progressBar\" class=\"progress-bar progress-bar-danger\" style=\"width:70%\"></div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<hr class=\"prettyline\">
\t\t\t\t\t\t\t<ul class=\"list-group text-left\">
\t\t\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"fa fa-clock-o\"></i>Time:<span id=\"totalm\"> -- </li>
                      ";
        // line 397
        if ((($context["buycharging"] ?? null) == 1)) {
            // line 398
            echo "                      <li class=\"list-group-item\"><i class=\"fa fa-usb\"></i>Charge:<span id=\"charging\"> -- </li>
                      ";
        }
        // line 400
        echo "                      ";
        if ((($context["buyvoucher"] ?? null) == 1)) {
            // line 401
            echo "                      <li class=\"list-group-item\"><i class=\"fa fa-ticket\"></i>Voucher:<span id=\"voucher\"> -- </li>
                      ";
        }
        // line 403
        echo "                      <li class=\"list-group-item\"><i class=\"fa fa-money\"></i>Total Amount:<span id=\"tamount\" > 0.00 </li>                      
                    </ul>                     
                    <hr class=\"prettyline\">
                    <div class=\"panel-body\">
                    <button type=\"button\" id=\"done-paying\" class=\"btn btn-danger btn-sm btn-spinner\">Cancel</button>
                    ";
        // line 408
        if ((($context["buyvoucher"] ?? null) == 1)) {
            // line 409
            echo "                    <hr class=\"prettyline hidden\" id=\"hr\">
                    <button type=\"button\" id=\"buy-voucher\" class=\"btn btn-success btn-sm hidden btn-spinner\">Buy Voucher</button>
                    ";
        }
        // line 412
        echo "                    ";
        if ((($context["buycharging"] ?? null) == 1)) {
            // line 413
            echo "                    <hr class=\"prettyline hidden\">
                    ";
            // line 414
            if ((($context["getchargingtime"] ?? null) < 1)) {
                // line 415
                echo "                    <button type=\"button\" id=\"buy-charging\" data-toggle=\"modal\" data-target=\"#selectcharging\" class=\"btn btn-primary btn-sm hidden\">Buy Charging</button>
                    ";
            } else {
                // line 417
                echo "                    <button type=\"button\" id=\"extend-charging\" class=\"btn btn-primary btn-sm hidden\">Extend Charging</button>
                    ";
            }
            // line 419
            echo "                    
                    ";
        }
        // line 421
        echo "                    </div>
                    </div>
                  </div>
               </div>
            </div>
         </div>

         <!-- Check Balance Modal -->
         <div id=\"checkbalance\" class=\"modal fade bd-example-modal-sm\" role=\"dialog\">
            <div class=\"modal-dialog modal-dialog-centered modal-lg\">
               <!-- Modal content-->
               <div class=\"modal-content\">
                  <div class=\"modal-header\">
                    <h5 class=\"modal-title\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i> Balance Inquiry</h5>
                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>
                  </div>
                  <div class=\"modal-body text-left\">
                <div class=\"col-xs-7 align-middle p-lg\">
                    <h3 style=\"color:#009ee6\"> Number Balance Checker</h3>
                    <div style=\"margin-top:20px\"> </div>
                    <p style=\"color: #101010;\"> <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i> Enter Mobile Phone Number: </p>
                    <div class=\"form-group\">
                    <input type=\"text\" name=\"ieloadnumber\" id=\"ieloadnumber\" placeholder=\"09123456789\" maxlength=\"11\" onkeypress=\"return getnumbers(this, event)\" class=\"form-control input-lg m-b\">
                    </div>
                    <hr>
                    <div class=\"panel-body\">
                    <input type=\"hidden\" name=\"mac\" id=\"mac\" value=\"";
        // line 447
        echo twig_escape_filter($this->env, ($context["mac"] ?? null), "html", null, true);
        echo "\" class=\"form-control\">
                    <input type=\"hidden\" name=\"ip\" id=\"ip\" value=\"";
        // line 448
        echo twig_escape_filter($this->env, ($context["ip"] ?? null), "html", null, true);
        echo "\" class=\"form-control\">
                    <button type=\"button\" class=\"btn btn-success btn-lg button-rnd eload-spinner\" onclick=\"balanceinquiry()\">Check</button>
                    </div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
 
         <!-- Charging Station Modal -->
         <div id=\"eloadcomplete\" class=\"modal fade bd-example-modal-sm\" role=\"dialog\">
            <div class=\"modal-dialog modal-dialog-centered\">
               <!-- Modal content-->
               <div class=\"modal-content\">
                  <div class=\"modal-header\">
                     <h4 class=\"modal-title\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i> Success!</h4>
                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>
                  </div>               
                  <div class=\"modal-body\">
                    <h4>Load has been now process.</h4>
                    <hr/>
                    <h4> Please wait the confirmation. </h4>
                  </div>
               </div>
            </div>
         </div>


    <!-- Charging Select Modal -->
      <div class=\"modal fade\" id=\"selectcharging\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">
         <div class=\"modal-dialog modal-dialog-centered\">
            <div class=\"modal-content\">
               <div class=\"modal-header\">
                  <h5 class=\"modal-title\"><i class=\"fa fa-usb\"></i> Select Charging Ports <i class=\"fa fa-usb\"></i></h5>
               </div>
                  <div class=\"modal-body\">
                     <table class=\"table table-striped table-bordered table-sm\">
                        <tr class=\"thead-dark\">
                           <th>Port
                           </th>
                           <th>Note
                           </th>
                           <th>Availability
                           </th>
                        </tr>
                        ";
        // line 493
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["selectcharging"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["sc"]) {
            if (twig_get_attribute($this->env, $this->source, $context["sc"], "port", [], "any", false, false, false, 493)) {
                // line 494
                echo "                         <tr>
                            <td>";
                // line 495
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["sc"], "port", [], "any", false, false, false, 495), "html", null, true);
                echo "</td>
                            <td>";
                // line 496
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["sc"], "note", [], "any", false, false, false, 496), "html", null, true);
                echo "</td>
                            <td><input type=\"radio\" name=\"port\" value='";
                // line 497
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["sc"], "port", [], "any", false, false, false, 497), "html", null, true);
                echo "'>Available </input></td>
                          </tr>        
                        ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['sc'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 500
        echo "                     </table>
                  </div>
                  <div class=\"modal-footer\">
                     <button type=\"button\" class=\"btn btn-danger waves-effect\" data-dismiss=\"modal\">Cancel</button>
                     <button type=\"submit\" id=\"scharging\" class=\"btn btn-success\">Select</button>   
                  </div>
            </div>
         </div>
      </div>
      <!-- Charging Select Modal -->
      
      
         <!-- Charging Station Modal -->
         <div id=\"chargingstation\" class=\"modal fade bd-example-modal-sm\" role=\"dialog\">
            <div class=\"modal-dialog modal-dialog-centered\">
               <!-- Modal content-->
               <div class=\"modal-content\">
                  <div class=\"modal-header\">
                     <h4 class=\"modal-title\">Charging Rates</h4>
                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>
                  </div>
                  <div class=\"modal-body\">
                     <table class=\"table table-striped table-bordered table-sm\">
                        <tr class=\"thead-dark\">
                           <th>Amount
                           </th>
                           <th>Time
                           </th>
                           <th>Note
                           </th>
                        </tr>
                        ";
        // line 531
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["crates"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["c"]) {
            if (twig_get_attribute($this->env, $this->source, $context["c"], "time", [], "any", false, false, false, 531)) {
                // line 532
                echo "                         <tr>
                            <td>";
                // line 533
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["c"], "pulses", [], "any", false, false, false, 533), "html", null, true);
                echo "</td>
                            <td class=\"cconvert";
                // line 534
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["c"], "pulses", [], "any", false, false, false, 534), "html", null, true);
                echo "\"></td>
                            <td>";
                // line 535
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["c"], "note", [], "any", false, false, false, 535), "html", null, true);
                echo "</td>
                          </tr>        
                        ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['c'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 538
        echo "                     </table>
                  </div>
               </div>
            </div>
         </div>
         
         
   
        <div id=\"eloadannouncer\"> </div>
        <div id=\"multicoinslot_announce\"> </div>
        <div id=\"eloadprocess_announce\"> </div>
        <div id=\"auto_process\"> </div>
        <div id=\"balanceinquiry_announcer\"> </div>


            <!-- End Footer -->
         <footer class=\"footer\" style=\"margin:auto;max-width: 500px;position: relative;\">
            Powered By: <a href=\"http://www.lpbpisowifi.com\" target=\"_blank\" >";
        // line 555
        echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
        echo "</a>
         </footer>
         <!-- End Footer -->
         
         
      </div>
      <!-- End Container -->

    ";
        // line 563
        $this->loadTemplate("footer.html", "template4.html.twig", 563)->display($context);
        // line 564
        echo "      
   </body>
</html>";
    }

    public function getTemplateName()
    {
        return "template4.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  873 => 564,  871 => 563,  860 => 555,  841 => 538,  831 => 535,  827 => 534,  823 => 533,  820 => 532,  815 => 531,  782 => 500,  772 => 497,  768 => 496,  764 => 495,  761 => 494,  756 => 493,  708 => 448,  704 => 447,  676 => 421,  672 => 419,  668 => 417,  664 => 415,  662 => 414,  659 => 413,  656 => 412,  651 => 409,  649 => 408,  642 => 403,  638 => 401,  635 => 400,  631 => 398,  629 => 397,  573 => 344,  569 => 343,  553 => 330,  511 => 291,  471 => 253,  459 => 248,  454 => 246,  448 => 243,  441 => 241,  437 => 239,  431 => 238,  421 => 231,  413 => 226,  409 => 224,  407 => 223,  389 => 207,  379 => 204,  375 => 203,  371 => 202,  368 => 201,  363 => 200,  323 => 162,  316 => 157,  314 => 156,  311 => 155,  303 => 149,  301 => 148,  294 => 143,  292 => 142,  288 => 140,  277 => 131,  275 => 130,  272 => 129,  265 => 125,  261 => 123,  259 => 122,  255 => 120,  247 => 114,  245 => 113,  241 => 111,  233 => 105,  231 => 104,  227 => 102,  219 => 96,  217 => 95,  213 => 93,  205 => 87,  203 => 86,  200 => 85,  192 => 79,  190 => 78,  187 => 77,  182 => 74,  178 => 72,  174 => 70,  172 => 69,  168 => 67,  166 => 66,  163 => 65,  155 => 59,  153 => 58,  144 => 52,  138 => 49,  131 => 45,  124 => 43,  116 => 38,  108 => 33,  95 => 22,  82 => 19,  75 => 18,  64 => 17,  59 => 15,  50 => 9,  44 => 6,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "template4.html.twig", "/opt/vc/include/interface/vcos/pthreads/template/template4.html.twig");
    }
}
