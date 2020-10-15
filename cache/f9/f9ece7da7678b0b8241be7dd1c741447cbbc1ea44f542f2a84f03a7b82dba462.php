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

/* header.html */
class __TwigTemplate_58593923e4a8c7f5d3f8b1cddbfe49ebee3ae724894573e98fc4a83c0dfd9c40 extends \Twig\Template
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
        echo "<noscript><meta http-equiv=\"refresh\" content=\"0; url=http://10.0.0.1/lite\"></noscript>
<link href=\"/assets/files/";
        // line 2
        echo twig_escape_filter($this->env, ($context["bootsrap"] ?? null), "html", null, true);
        echo ".min.css\" rel=\"stylesheet\" type=\"text/css\" />
<link href=\"/assets/files/";
        // line 3
        echo twig_escape_filter($this->env, ($context["cssname"] ?? null), "html", null, true);
        echo ".css\" rel=\"stylesheet\" type=\"text/css\" />
      ";
        // line 4
        echo $this->extensions['Odan\Twig\TwigAssetsExtension']->assets(["files" => [0 => "assets/css/toastr.min.css", 1 => "assets/css/font-awesome.min.css"], "name" => "lpb.css"]);
    }

    public function getTemplateName()
    {
        return "header.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  48 => 4,  44 => 3,  40 => 2,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "header.html", "/opt/vc/include/interface/vcos/pthreads/template/header.html");
    }
}
