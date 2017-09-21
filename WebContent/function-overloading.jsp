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

<title>Function overloading</title>
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
	margin: 0!important;
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

g {
	color: green;
}

y {
	color: yellow;
	font-weight: bold; 
}

blue {
	color: #0000FF;
}

red {
	color: red;
}

orange {
	color: #BC7A00;
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
				 	tooltipClass : "hide"
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
					position : "right"
				},{
			 		element : "#method1",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#addFun2",
					intro : "",
					position : "right"
				},{
			 		element : "#method2",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#addFun3",
					intro : "",
					position : "right"
				},{
			 		element : "#method4",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#addFun4",
					intro : "",
					position : "right"
				},{
			 		element : "#method3",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#addFun5",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
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
			$('.user-btn').removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#li3").fadeTo(500, 1, function () {
					});
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			$('.user-btn').remove();
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
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
				var text = "<y>main()</y> is the starting execution point of <y>c++</y> program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "addFun1":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <y>add()</y> is called with one int value <y>10</y> so the call is made to the exact matching function <y>add(int)</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "method1":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>add(int, int)</y> called and print the number on the console.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='firstAddition' class='display-inline-block relative ct-code-b-yellow'>"
						+ " <div id='tooltipA1Val' class='display-inline-block relative'>a</div>"
						+ " </div>");
					var l1 = $("#firstAddition").offset();
					var l2 = $("#aPlusB1").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#firstAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipA1Val", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipA1Val").text($("#intVal1").text());
							TweenMax.to("#tooltipA1Val", 0.5, {rotationX : 0, onComplete:function() {
								$('.introjs-nextbutton').show();
							}});
						}});
					}});
				});
			});
		break;
		case "outputDiv":
			$("#outputDiv").removeClass("opacity00");
			if (introjs._currentStep == 5) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>The integer value is = 10</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 500);
				});
			} else if (introjs._currentStep == 8) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>Sum of two float values = 29.1</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 500);
				});
			} else if (introjs._currentStep == 11) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>Sum of three double values = 180</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 500);
				});
			} else if (introjs._currentStep == 14) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>Sum of two double values = 60.8</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 500);
				});
			} else if (introjs._currentStep == 16) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").empty();
					$("#body").append("<div>overloading.cpp: In function 'main()': <br>"
							+ " overloading.cpp:20:10: <red><b>error</b></red>: no matching function for call to 'add(int)' "
							+ " add(8.2)</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 500);
				});
			}
		break;
		case "addFun2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <y>add()</y> is called with two float values <y>12.4</y>, <y>16.7</y> so the call is made to the exact matching function<br> <y>add(float, float)</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "method2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "add(float, float) called and print the sum on the console..";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='thirdAddition' class='display-inline-block relative ct-code-b-yellow'>"
						+ " <div id='tooltipA3Val' class='display-inline-block relative'>a</div> + <div id='tooltipB3Val' class='display-inline-block relative'>b</div>"
						+ " <div id='tooltipC3Val' class='opacity00 display-inline-block relative'> = "
						+ 29.1 +"</div></div>");
					var l1 = $("#thirdAddition").offset();
					var l2 = $("#aPlusB2").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#thirdAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipA3Val", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipA3Val").text($("#floatVal1").text());
							TweenMax.to("#tooltipA3Val", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipB3Val", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipB3Val").text($("#floatVal2").text());
									TweenMax.to("#tooltipB3Val", 0.5, {rotationX : 0, onComplete:function() {
										$("#tooltipC3Val").removeClass("opacity00");
										$('.introjs-nextbutton').show();
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "addFun3":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <y>add()</y> is called with three integer values <y>30</y>, <y>60</y>, <y>90</y> so the call is made to the exact matching function<br> <y>add(int, int, int)</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "method4":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>add(int, int, int)</y> called and print the sum on the console.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='fourthAddition' class='display-inline-block relative ct-code-b-yellow'>"
						+ " <div id='tooltipA4Val' class='display-inline-block relative'>a</div> + <div id='tooltipB4Val' class='display-inline-block relative'>b</div>"
						+ " + <div id='tooltipC4Val' class='display-inline-block relative'>c</div>"
						+ " <div id='tooltipD4Val' class='opacity00 display-inline-block relative'> = "
						+ 180 +"</div></div>");
					var l1 = $("#fourthAddition").offset();
					var l2 = $("#aPlusB4").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#thirdAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipA4Val", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipA4Val").text($("#intVal111").text());
							TweenMax.to("#tooltipA4Val", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipB4Val", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipB4Val").text($("#intVal112").text());
									TweenMax.to("#tooltipB4Val", 0.5, {rotationX : 0, onComplete:function() {
										TweenMax.to("#tooltipC4Val", 0.5, {rotationX : -90, onComplete:function() {
											$("#tooltipC4Val").text($("#intVal113").text());
											TweenMax.to("#tooltipC4Val", 0.5, {rotationX : 0, onComplete:function() {
												$("#tooltipD4Val").removeClass("opacity00");
												$('.introjs-nextbutton').show();
											}});	
										}});
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "addFun4":
			$("#addFun4").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <y>add()</y> is called with two double values <y>20.3</y>, <y>40.5</y> so the call is made to the exact matching function<br> <y>add(double, double)</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "method3":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>add(double, double)</y> called and print the sum on the console.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='fifthAddition' class='display-inline-block relative ct-code-b-yellow'>"
						+ " <div id='tooltipA5Val' class='display-inline-block relative'>a</div> + <div id='tooltipB5Val' class='display-inline-block relative'>b</div>"
						+ " <div id='tooltipC5Val' class='opacity00 display-inline-block relative'> = "
						+ 60.8 +"</div></div>");
					var l1 = $("#fifthAddition").offset();
					var l2 = $("#aPlusB3").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#thirdAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipA5Val", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipA5Val").text($("#doubleVal1").text());
							TweenMax.to("#tooltipA5Val", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipB5Val", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipB5Val").text($("#doubleVal2").text());
									TweenMax.to("#tooltipB5Val", 0.5, {rotationX : 0, onComplete:function() {
										$("#tooltipC5Val").removeClass("opacity00");
										$('.introjs-nextbutton').show();
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "addFun5":
			$("#addFun5").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This call gives an error, why because the matching function definition is not available.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
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
	var text = "Here we overload the <y>add()</y>, with <y>same name</y> and <y>different argumens</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
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
	<h4 class='label ct-demo-heading' id='demoTitle'>Function Overloading in c++</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1">
				<ul style="font-family: monospace;">
					<li id="li1" class="opacity00">Two or more functions having <g>same name</g> but <g>different arguments</g> are known as <g>overloaded functions</g>.</li>
					<li id="li2" class="opacity00">Function overloading can be considered as an example of <g>polymorphism</g> feature in C++.</li>
					<li id="li3" class="opacity00">The return type may be similar but <g>type of the arguments</g> and <g>number of arguments</g> must be <g>different</g> in function overloading.
						&emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span><br>
					</li>
				</ul>
			</div>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-1 col-xs-5">
		<div id="code" class="opacity00">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
	<span id="method1" class="color"><red>void</red> add(int a) {
		cout << <red>"The integer value is = "</red> << <span id="aPlusB1">a</span> << <red>"\n"</red>;
	}</span>
	<span id="method2" class="color"><red>void</red> add(float a, float b) {
		cout << <red>"Sum of two float values = "</red> << <span id="aPlusB2">a + b</span> << <red>"\n"</red>;
	}</span>
	<span id="method3" class="color"><red>void</red> add(double a, double b) {
		cout << <red>"Sum of two double values = "</red> << <span id="aPlusB3">a + b</span> << <red>"\n"</red>;
	}</span>
	<span id="method4" class="color"><red>void</red> add(int a, int b, int c) {
		cout << <red>"Sum of three integer values = "</red> << <span id="aPlusB4">a + b + c</span> << <red>"\n"</red>;
	}</span>
	<span id="method5" class="color hide"><red>void</red> add(float t, float a, float b, float c) {
		cout << <red>"Sum of three float values = "</red> << a + b + c  << <red>"\n"</red>;
	}</span>
<span id="main"><red>int</red> main() {
	<span id="addFun1" class="hide"><g>add</g>(<span id="intVal1">10</span>);</span>
	<span id="addFun2" class="hide"><g>add</g>(<span id="floatVal1">12.4</span>f, <span id="floatVal2">16.7</span>f);</span>
	<span id="addFun3" class="hide"><g>add</g>(<span id="intVal111">30</span>, <span id="intVal112">60</span>, <span id="intVal113">90</span>);</span>
	<span id="addFun4" class="hide"><g>add</g>(<span id="doubleVal1">20.3</span>, <span id="doubleVal2">40.5</span>);</span>
	<span id="addFun5" class="hide"><g>add</g>(<span id="float1Val1">8.2</span>);</span>
}</span></pre>
		</div>
	</div>
	<div class="col-xs-5">
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
			</div>
		</div>
	</div>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>