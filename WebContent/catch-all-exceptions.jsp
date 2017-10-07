<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>

<!-- <script src="/secure/lang/c++/js/function-overloading.js" type="text/javascript"></script> -->

<!-- <script src="/secure/lang/c/js-min/cof.min.js"></script> -->

<title>catch-all-exceptions</title>
<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-10 {
	margin-top: 10px;
}

#topDiv {
    border: 1px solid gray;
    border-radius: 8px;
    padding: 10px;
    background-color: white;
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

#memoryDiv {
	border: 1px solid gray;
    border-radius: 6px;
	padding: 15px;
}

.padding0 {
	padding: 0;
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
	height: 125px;
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

.input-val {
	background-color: #000;
	border: 1px solid black;
	border-radius: 4px;
	color: #0f0;
}

.relative {
	position: relative;
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

.green {
	color: green;
}

.margin-bottom0 {
	margin-bottom: 0;
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
	$("[contenteditable=true]").on("click keydown keyup", function(e) {
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
		
		if ($(this).text().indexOf(".") == -1) {
			flag = true;
		} else {
			flag = false;
		}
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39) || (($(this).text().length >= 1) && e.keyCode == 110 && flag)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			e.preventDefault();
		}
		
	});
	
	$('#restart').click(function() {
		location.reload();
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
			 		element : "#try",
					intro : "",
					position : "right"
				},{
			 		element : "#catch",
					intro : "",
					position : "top"
				},{
			 		element : "#intX",
					intro : "",
					position : "right"
				},{
			 		element : "#cout1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#cin",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#ifElseIf",
					intro : "",
					position : "right"
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
			introjs.refresh();
			$("#code").addClass("opacity00");
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#li3").fadeTo(500, 1, function () {
						$("#li4").fadeTo(500, 1, function () {
							$("#li5").fadeTo(500, 1, function () {
							});
						});
					});
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			$('.user-btn').addClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider sample C++ program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "try":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Tis is <y>try block</y>. The statements which may expected to generate an exception is written in <y>try block</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "catch":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Tis is a <y>catch block</y>. If you want to specify that a catch block should handle any type of exception that is thrown in a try block,"
				+ " you must put an ellipsis(<y>...</y>) in between the parentheses.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "intX":
			$("#intX").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Declare a int variable <y>x</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "cout1":
			$("#cout1").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputText").removeClass("opacity00");
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 6) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputText").removeClass("opacity00");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			} else if (introjs._currentStep == 8) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Enter any number.";
					typing($(".introjs-tooltiptext"), text, function() {
						charAtEnd("inputVal");
					});
				});
			} else {
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body > div:last-child").append("<div>This is generic catch to all exceptions.</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			}
		break;
		case "cin":
			$("#cin").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "cin will read the input from the inputstream given by the user.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ifElseIf":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "250px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us check the conditions.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="condition1()">Next &#8594;</a>');
				});
			});
		break;
		case "elseIf1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us check the conditions.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="condition1()">Next &#8594;</a>');
				});
			});
		break;
		case "throw1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "throw an int exception.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, getStep("#catch", "", "right"));
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "throw2":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "throw a char exception.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, getStep("#catch", "", "right"));
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "throw3":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "throw a number exception";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, getStep("#catch", "", "right"));
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "catch":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "catch all exceptions.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, getStep("#restart", "", "right"));
					introjs.insertOption(introjs._currentStep + 1, getStep("#outputDiv", "", "hide"));
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "restart":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
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

function condition1() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append(" <div id='firstCnd' class='opacity00 display-inline-block relative'>"
			+ " <y>if(<div id='tooltipX1' class='display-inline-block relative'>x</div>"
			+ " == 1)</y>"
			+ " <div id='cndtnExp1'></div></div>");
		var l1 = $("#firstCnd").offset();
		var l2 = $("#if").offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		$("#if").effect( "highlight",{color: 'red'}, 500, function() {
		$("#firstCnd").removeClass("opacity00");
		TweenMax.from("#firstCnd", 1, {top : topLength, left : leftLength, onComplete:function() {
			TweenMax.to("#tooltipX1", 0.3, {rotationX : -90, onComplete:function() {
				$("#tooltipX1").text($("#inputVal").text());
				TweenMax.to("#tooltipX1", 0.3, {rotationX : 0, onComplete:function() {
					var text;
					if (parseInt($("#inputVal").text()) == 1) {
						text = "is evaluates to <b><g>true</g></b>. So the <y>if-block</y> will execute and throw an exception.";
					} else {
						text = "is evaluates to <red>false</red>. So, the control come out of the <y>if-block</y> and enter into the <y>else-if</y> block.";
					}
					typing($("#cndtnExp1"), text, function() {
						if (parseInt($("#inputVal").text()) == 1) {
							introjs.insertOption(introjs._currentStep + 1, getStep("#throw1", "", "right"));
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						} else {
							introjs.insertOption(introjs._currentStep + 1, getStep("#elseIf1", "", "right"));
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="condition2()">Next &#8594;</a>');
						}
					});
				}});
			}});
		}});
	});
}

function condition2() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append(" <div id='secondCnd' class='opacity00 display-inline-block relative'>"
			+ " <y>else if(<div id='tooltipX2' class='display-inline-block relative'>x</div>"
			+ " == 0)</y>"
			+ " <div id='cndtnExp2'></div></div>");
		var l1 = $("#secondCnd").offset();
		var l2 = $("#elseIf1").offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		$("#elseIf1").effect( "highlight",{color: 'red'}, 500, function() {
		$("#secondCnd").removeClass("opacity00");
		TweenMax.from("#secondCnd", 1, {top : topLength, left : leftLength, onComplete:function() {
			TweenMax.to("#tooltipX2", 0.3, {rotationX : -90, onComplete:function() {
				$("#tooltipX2").text($("#inputVal").text());
				TweenMax.to("#tooltipX2", 0.3, {rotationX : 0, onComplete:function() {
					var text;
					if (parseInt($("#inputVal").text()) == 0) {
						text = "is evaluates to <b><g>true</g></b>. So the <y>else-if</y> block will execute and throw an exception.";
					} else {
						text = "is evaluates to <red>false</red>. So, the control come out of the <y>else-if</y> block and enter into the another <y>else-if</y> block.";
					}
					typing($("#cndtnExp2"), text, function() {
						if (parseInt($("#inputVal").text()) == 0) {
							introjs.insertOption(introjs._currentStep + 1, getStep("#throw2", "", "right"));
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						} else {
							introjs.insertOption(introjs._currentStep + 1, getStep("#elseIf2", "", "right"));
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="condition3()">Next &#8594;</a>');
						}
					});
				}});
			}});
		}});
	});
}

function condition3() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append(" <div id='thirdCnd' class='opacity00 display-inline-block relative'>"
			+ " <y>else if(<div id='tooltipX3' class='display-inline-block relative'>x</div>"
			+ " == -1)</y>"
			+ " <div id='cndtnExp3'></div></div>");
		var l1 = $("#thirdCnd").offset();
		var l2 = $("#elseIf2").offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		$("#elseIf2").effect( "highlight",{color: 'red'}, 500, function() {
		$("#thirdCnd").removeClass("opacity00");
		TweenMax.from("#thirdCnd", 1, {top : topLength, left : leftLength, onComplete:function() {
			TweenMax.to("#tooltipX3", 0.3, {rotationX : -90, onComplete:function() {
				$("#tooltipX3").text($("#inputVal").text());
				TweenMax.to("#tooltipX3", 0.3, {rotationX : 0, onComplete:function() {
					var text;
					if (parseInt($("#inputVal").text()) == 0) {
						text = "is evaluates to <b><g>true</g></b>. So the <y>else-if</y> block will execute and throw an exception.";
					} else {
						text = "is evaluates to <red>false</red>. So, the control come out of the <y>else-if</y> block and exit from the program."
							+ " Here the <y>catch block</y> will not execute, because there is no exception raised in <y>try block</y>."
					}
					typing($("#cndtnExp3"), text, function() {
						if (parseInt($("#inputVal").text()) == 0) {
							introjs.insertOption(introjs._currentStep + 1, getStep("#throw3", "", "right"));
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						} else {
							introjs.insertOption(introjs._currentStep + 1, getStep("#restart", "", "right"));
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						}
					});
				}});
			}});
		}});
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
	<h4 class='label ct-demo-heading' id='demoTitle'>catch-all handler</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1">
				<ul>
					<li id="li1" class="opacity00">
						A catch-all handler works just like a normal catch block, except that instead of using a specific type to catch, it uses the ellipses operator
						 (…) as the type to catch. 
						 <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span><br>
					</li>
				</ul>
			</div>
		</div>
	</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-1 col-xs-5">
		<div id="code" class="">
<pre class="creampretab"><span id="main"><red>int</red> main() {
	<span id="intX" class="">int x;</span>
	<span id="cout1" class="">cout << <red>"Enter a number : "</red>;</span>
	<span id="cin" class="">cin >> x;</span>
	<span id="try" class=""><g>try</g> {
		<span id="ifElseIf">if( <span id="if">x == 1</span>)
		    <span id="throw1"><g>throw</g> x;</span>
		<span id="elseIf1">else if(x == 0)</span>
		    <span id="throw2"><g>throw</g> 'A';</span>
		<span id="elseIf2">else if(x == -1)</span>
		    <span id="throw3"><g>throw</g> 2.5;</span></span>
	}</span> <span id="catch" class=""><g>catch</g>(...) {
	    <span id="cout2" class="">cout << <red>"This is generic catch to all exceptions."</red>;</span>
		}</span>
}</span>
</pre>
		</div>
	</div>
	<div class="col-xs-5">
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
			<div id="outputText" class="opacity00 display-inline-block">Enter a number :&nbsp; </div><div class='display-inline-block input-val' contenteditable='true' maxlength='5' id='inputVal' class="padding5" spellcheck="false"></div>
			</div>
		</div>
	</div>
</div>
</body>
</html>