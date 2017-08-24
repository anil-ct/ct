<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>

<!-- <script src="/secure/lang/c++/js/function-overloading.js" type="text/javascript"></script> -->

<!-- <script src="/secure/lang/c/js-min/cof.min.js"></script> -->

<title>Function categories</title>
<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

#topDiv {
    border: 1px solid gray;
    border-radius: 8px;
    padding: 10px;
}

.creampretab {
	tab-size: 2;
	-moz-tab-size: 3;
	background-color: #f5f5f5;
	font-family: monospace;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333;
	display: block;
	font-size: 12px;
	line-height: 1.42857;
	word-break: break-all;
	word-wrap: break-word;
}

.box-border {
	border: 2px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.padding0 {
	padding: 0;
}

div, span {
	position: relative;
}

#outputDiv {
	padding: 0;
	z-index: 9999999;
}

.output-console-title-bar {
	background-color: darkgray;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	font-size: 13px;
	height: 190px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 5px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.display-inline-block {
	display: inline-block;
}

.user-btn {
	background-color: green;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.yellow {
	background-color: yellow;
}

</style>
</head>
<body>
<script type="text/javascript">
var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
$(document).ready(function() {
	introGuide();
	$('#restart').click(function() {
		location.reload();
	});
	
	$(".validate").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			//$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only</div>")
			e.preventDefault();
		}
	});
});

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#topDiv",
					intro : "",
				 	position : "bottom"
				},{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#main",
					intro : "",
					position : "right"
				},{
			 		element : "#addFun1",
					intro : "",
					position : "bottom"
				},{
			 		element : "#method1",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#addFun2",
					intro : "",
					position : "bottom"
				},{
			 		element : "#method2",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "topDiv":
			$(".introjs-tooltip").hide();
			$('.introjs-nextbutton').hide();
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider sample C++ program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="codeText()">Next &#8594;</a>');
				});
			});
		break;
		case "main":
			introjs.refresh();
			$(".color").removeClass("yellow");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us call the functions one by one from main().";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "addFun1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can change the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("intVal1");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "method1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "add(int, int).";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='firstAddition' class='display-inline-block relative ct-code-b-yellow'>"
						+ " <div id='tooltipA1Val' class='display-inline-block relative'>a</div> + <div id='tooltipB1Val' class='display-inline-block relative'>b</div>"
						+ " = <div id='tooltipC1Val' class='opacity00 display-inline-block relative'>"
						+ 22 +"</div></div>");
					var l1 = $("#firstAddition").offset();
					var l2 = $("#aPlusB1").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#firstAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipA1Val", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipA1Val").text($("#intVal1").text());
							TweenMax.to("#tooltipA1Val", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipB1Val", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipB1Val").text($("#intVal2").text());
									TweenMax.to("#tooltipB1Val", 0.5, {rotationX : 0, onComplete:function() {
										$("#tooltipC1Val").removeClass("opacity00");
										$('.introjs-nextbutton').show();
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 5) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "output";
					$("#body").append("<div>sum = 22</div>");
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 8) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "output";
					$("#body").append("<div>sum = 29.1</div>");
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			}
		break;
		case "addFun2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can change the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("floatVal1");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "method2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "add(float, float).";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='secondAddition' class='display-inline-block relative ct-code-b-yellow'>"
						+ " <div id='tooltipA2Val' class='display-inline-block relative'>a</div> + <div id='tooltipB2Val' class='display-inline-block relative'>b</div>"
						+ " = <div id='tooltipC2Val' class='opacity00 display-inline-block relative'>"
						+ 29.1 +"</div></div>");
					var l1 = $("#secondAddition").offset();
					var l2 = $("#aPlusB2").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#secondAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipA2Val", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipA2Val").text($("#floatVal1").text());
							TweenMax.to("#tooltipA2Val", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipB2Val", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipB2Val").text($("#floatVal2").text());
									TweenMax.to("#tooltipB2Val", 0.5, {rotationX : 0, onComplete:function() {
										$("#tooltipC2Val").removeClass("opacity00");
										$('.introjs-nextbutton').show();
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "115px"});
			$('#restart').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function codeText() {
	$(".introjs-nextbutton").hide();
	$('.user-btn').remove();
	$(".color").addClass("yellow");
	$(".introjs-tooltiptext").empty();
	var text = "Here we overload the add() funtion, with same name and different argumens.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
}

function textFocus(selector) {
	$("#"+selector).focus();
	editText('#'+ selector);
}

function editText(selector) {
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($(this).text().length > max-1) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
				return;
			}
			if (e.keyCode == 13 && e.keyCode == 9) {
				e.preventDefault();
			}
			e.preventDefault();
		}		
	});
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	
	return step;
}
</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>function-overloading</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1">
				<ul>
					<li id="li1" class="opacity00">Two or more functions having same name but different argument(s) are known as overloaded functions.</li>
					<li id="li2" class="opacity00">Function overloading can be considered as an example of polymorphism feature in C++.</li>
					<li>The return type may be similar but type of the arguments and number of arguments must be different in function overloading.
						&emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span><br>
					</li>
				</ul>
			</div>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-1 col-xs-5">
		<div id="code">
<pre class="creampretab">#include &lt;iostream&gt;
using namespace std;
<span id="method1" class="color">void add(int a, int b) {
	cout &lt;&lt; "sum = " &lt;&lt; <span id="aPlusB1">a + b</span> &lt;&lt; endl;
}</span>
 
<span id="method2" class="color">void add(float a, float b) {
	cout &lt;&lt; "sum = " &lt;&lt; <span id="aPlusB2">a + b</span> &lt;&lt; endl;
}</span>

<span id="method3" class="color">void add(float t, float a, float b, float c) {
	cout &lt;&lt; "sum = " &lt;&lt; a + b + c &lt;&lt; endl;
}</span>

<span id="method4" class="color">void add(double a, double b) {
	cout &lt;&lt; "sum = " &lt;&lt; a + b &lt;&lt; endl;
}</span>

<span id="main">void main() {
	<span id="addFun1">add(<div style="display: inline-block;" contenteditable='true' id="intVal1" class="padding5 validate dot" maxlength='2' spellcheck="false">10</div>, <div style="display: inline-block;" contenteditable='true' id="intVal2" class="padding5 validate" maxlength='2' spellcheck="false">12</div>);</span>
	<span id="addFun2">add(<div style="display: inline-block;" contenteditable='true' id="floatVal1" class="padding5 validate dot" maxlength='4' spellcheck="false">12.4</div>, <div style="display: inline-block;" contenteditable='true' id="floatVal2" class="padding5 validate" maxlength='4' spellcheck="false">16.7</div>);</span>
	<span id="addFun3">add(<div style="display: inline-block;" contenteditable='true' id="float1Val1" class="padding5 validate dot" maxlength='4' spellcheck="false">8.2</div>, <div style="display: inline-block;" contenteditable='true' id="float2Val2" class="padding5 validate dot" maxlength='4' spellcheck="false">20.5</div>, <div style="display: inline-block;" contenteditable='true' id="float3Val3" class="padding5 validate dot" maxlength='4' spellcheck="false">17.5</div>);</span>
	<span id="addFun4">add(<div style="display: inline-block;" contenteditable='true' id="doubleVal1" class="padding5 validate dot" maxlength='4' spellcheck="false">20</div>, <div style="display: inline-block;" contenteditable='true' id="doubleVal2" class="padding5 validate dot" maxlength='4' spellcheck="false">40</div>);</span>
}</span></pre>
		</div>
	</div>
	<div class="col-xs-5">
		<div id="outputDiv" class="">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
			</div>
		</div>
	</div>
</div>
</body>
</html>