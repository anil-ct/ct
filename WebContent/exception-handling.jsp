<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>exception-handling</title>
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

.creampretab1 {
	tab-size: 2;
    -moz-tab-size: 3;
    background-color: #fcf8e3;
    font-family: monospace;
    font-size: 12px;
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

.relative {
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
	height: 475px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 10px;
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

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 10000001 !important;
	background-color: #ff0066;
	font-weight: bold;
}
</style>
</head>
<body>
<script type="text/javascript">
var introjs;
var printFlag = false;
var lastPrintFlag = false;
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
			 		element : "#tryCatch",
					intro : "",
				 	position : "right"
				},{
			 		element : "#tryBlock",
					intro : "",
					position : "right"
				},{
			 		element : "#throw",
					intro : "",
					position : "right"
				},{
			 		element : "#catchBlock",
					intro : "",
					position : "right"
				},{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#xyz",
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
			 		element : "#cin1",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#cout2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#cin2",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#insideTry",
					intro : "",
					position : "right"
				},{
			 		element : "#zInit",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callDivFun",
					intro : "",
					position : "right"
				},{
			 		element : "#divFun",
					intro : "",
					position : "right"
				},{
			 		element : "#zInit",
					intro : "",
					position : "right"
				},{
			 		element : "#cout3",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#insideCatch",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "topDiv":
			/* $('.user-btn').removeClass("hide");
			$("#code").addClass("hide");
			introjs.refresh();
			$("#tryCatch").addClass("hide");
			introjs.refresh();
			$("#topDiv").removeClass("hide");
			introjs.refresh(); */
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
		case "tryCatch":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The general format of <y>try</y>, <y>catch</y>, <y>throw</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "tryBlock":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The statements which may expected to generate an error is written in <y>try block</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "throw":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The key word <y>throw</y> is used to throw an exception. Also used to list the exceptions that a function throws, but doesn’t handle itself.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "catchBlock":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "When the <y>try block</y> throws an exception, immediately the program control enter into the <y>catch block</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "code":
			$('.user-btn').addClass("hide");
			$("#code").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider sample C++ program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "xyz":
			$("#xyz").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Declare int variables <y>x</y>, <y>y</y>. And initialize the double variable <y>z</y> with <y>0</y>. Create an object of class <y>MyException</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "cout1":
			$("#cout1").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 8) {
				$("#outputDiv").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputText1").removeClass("opacity00");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			} else if (introjs._currentStep == 10) {
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Enter <y>numerator</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						charAtEnd("inputVal1");
					});
				});
			} else if (introjs._currentStep == 12) {
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputText2").removeClass("opacity00");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			} else if (introjs._currentStep == 14) {
				$("#inputVal1").attr("contenteditable", "false");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Enter <y>denominator</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						charAtEnd("inputVal2");
					});
				});
			} else if (printFlag) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#callDivFun").removeClass("yellow");
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>division by 0 error occured</div>");
					introjs.insertOption(introjs._currentStep + 1, getStep("#cout5", "", "", "hide"));
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			}  else if (lastPrintFlag) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#callDivFun").removeClass("yellow");
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>inside main</div>");
					introjs.insertOption(introjs._currentStep + 1, getStep("#restart", "", "right"));
					setTimeout(function(){
						introjs.nextStep();
						lastPrintFlag = false;
					}, 1000);
				});
			} else {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#callDivFun").removeClass("yellow");
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>z = " + (($("#inputVal1").text()) / ($("#inputVal2").text())).toFixed(2) + "</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			}
		break;
		case "cin1":
			$("#cin1").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>cin</y> will read the input from the inputstream given by the user.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "cout2":
			$("#cout1").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "cin2":
			$("#cin2").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>cin</y> will read the input from the inputstream given by the user.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "insideTry":
			$("#insideTry").removeClass("hide");
			introjs.refresh();
			$("[contenteditable=true]").attr("contenteditable", "false");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a <y>try block</y>. The statements which may expected to generate an error is written in this block.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "zInit":
			if (introjs._currentStep == 16) {
				$("#zInit").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			} else if (introjs._currentStep == 19) {
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").css({"min-width": "200px"});
					$("#callDivFun").addClass("yellow");
					var text = "The return value is <y><b>" + (($("#inputVal1").text()) / ($("#inputVal2").text())).toFixed(2) + "</b></y>.<br>"
					+ " is stored into z.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();	
					});
				});
			}
		break;
		case "callDivFun":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Calling division(x, y) by using MyException class reference.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "divFun":
			$("#divFun").removeClass("hide");
			$(".introjs-tooltip").css({"min-width": "300px"});
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "x, y values copy into a, b respectively.<br>"
					+ "Check the if condition i.e <y>b != 0</y><br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<div id='tooltipIfCond' class='display-inline-block relative'>"
							+ " <y><b><div id='tooltipB' class='display-inline-block relative'>b</div> != 0</b></y>"
							+ "</div>"
							+ "<div id='cndtnExp1'></div>");
					var l1 = $("#tooltipIfCond").offset();
					var l2 = $("#ifCond").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#tooltipIfCond", 1, {top : topLength, left : leftLength, onComplete:function() {
						flipEffect("#tooltipB", $("#inputVal2").text(), function() {
							var text;
							if (parseInt($("#inputVal2").text()) != 0) {
								text = "is evaluates to <y>true</y>. So the if block will execute i.e return(a / b).";
							} else {
								text = "is evaluates to <red>false</red>. So, else will execute.";
							}
							typing($("#cndtnExp1"), text, function() {
								if (parseInt($("#inputVal2").text()) != 0) {
									$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationInnerFor()">Next &#8594;</a>');
								} else {
									introjs.insertOption(introjs._currentStep + 1, getStep("#throwKey", "", "right"));
									$(".introjs-nextbutton").removeClass("introjs-disabled").show();
								}
							});
						});
					}});
				});
			});
		break;
		case "cout3":
			$("#cout3").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "insideCatch":
			if (parseInt($("#inputVal2").text()) != 0) {
				$("#insideCatch").removeClass("hide");
				$("#cout4").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here the catch block will not execute bacause there is no exception raised in the try block.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#cout5", "", "", "hide"));
						$(".introjs-nextbutton").removeClass("introjs-disabled").show();
					});
				});
			} else {
				printFlag = true;
				$("#insideCatch").removeClass("hide");
				$("#cout4").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The catch block will execute.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#outputDiv", "", "", "hide"));
						$(".introjs-nextbutton").removeClass("introjs-disabled").show();
					});
				});
			}
		break;
		case "cout5":
			$("#cout5").removeClass("hide");
			lastPrintFlag = true;
			printFlag = false;
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.insertOption(introjs._currentStep + 1, getStep("#outputDiv", "", "", "hide"));
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "throwKey":
			$("#throwKey").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The key word throw is used to throw an exception. And the corresponding catch will catch the exception.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, getStep("#insideCatch", "", "right"));
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
		break;
		case "restart":
			introjs.refresh();
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
	
function animationInnerFor() {
	$('.introjs-nextbutton').hide();
	$(".user-btn").remove();
	$(".introjs-tooltiptext").empty();
	var text = "The return value <div id='tooltipReturn' class='display-inline-block relative opacity00'>"
		+ " <y><b>return (<div id='tooltipReturnVal' class='display-inline-block relative'>"
		+ " <div id='tooltipReturnA' class='display-inline-block relative'>a</div>"
		+ " / "
		+ " <div id='tooltipReturnB' class='display-inline-block relative'>b</div>"
		+ "</b></y>"
		+ "</div>)</div>";
	typing($(".introjs-tooltiptext"), text, function() {
		var l1 = $("#tooltipReturn").offset();
		var l2 = $("#return").offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		$("#tooltipReturn").removeClass("opacity00");
		TweenMax.from("#tooltipReturn", 1, {top : topLength, left : leftLength, onComplete:function () {
			flipEffect("#tooltipReturnA", $("#inputVal1").text(), function() {
				flipEffect("#tooltipReturnB", $("#inputVal2").text(), function() {
					flipEffect("#tooltipReturnVal", (($("#inputVal1").text()) / ($("#inputVal2").text())).toFixed(2), function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
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


function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'yellow'}, 500, function() {
		var l1 = $(selector1).offset();
		$(selector2).text($(selector1).text()).addClass("opacity00");
		$('body').append("<span id='dummy' style='position: relative; z-index: 100000002;"
						+ " font-family: monospace; color: red' ><b>" + $(selector2).text() + "</b></span>");
		$('#dummy').offset({
		  'top': l1.top,
		  'left': l1.left
		});
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = parseInt($('#dummy').css('top')) - (l1.top - l2.top);
		var leftLength = parseInt($('#dummy').css('left')) - (l1.left - l2.left);
		TweenMax.to('#dummy', 0.8, {top: topLength, left: leftLength, onComplete: function () {
			$(selector2).removeClass('opacity00');
			$(selector1).removeClass('z-index1000000');
			$("#dummy").remove();
			$("#animationDiv").removeAttr("style").addClass("introjs-showElement");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
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
	<h4 class='label ct-demo-heading' id='demoTitle'>Exception Handling</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
	<div id="topDiv" class="hide">
		<ul>
			<li id="li1" class="opacity00">
				With try catch blocks, the code for error handling becomes separate from the normal flow.
			</li>
			<li id="li2" class="opacity00">
				 A function can specify the exceptions that it throws using the throw keyword.
				 The caller of this function must handle the exception in some way (either by specifying it again or catching it).
			</li>
			<li id="li3" class="opacity00">
				Both basic types and objects can be thrown as exception. We can create a hierarchy of exception objects,
			 	group exceptions in namespaces or classes, categorize them according to types.
			 	&emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span>
			</li>
		</ul>
	</div>
</div>
	<div class="col-xs-offset-4 col-xs-4 margin-top-20">
<pre id="tryCatch" class="creampretab"><span id="tryBlock"><g>try</g> {
	-----
	-----
	-----
	<span id="throw"><g>throw</g> exception;</span>
	-----
	-----
}</span>
<span id="catchBlock"><g>catch</g>(arguments) {
	-----
	-----
	-----
}</span>
</pre>
</div>
	</div>
	

<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-1 col-xs-5">
		<div id="code" class="hide">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<g>class</g> <blue>MyException</blue> {
	<g>public</g>:
		<span id="divFun" class="hide"><red>double</red> division(int a, int b) {
			if( <span id="ifCond">b != 0</span>)  {
				<span id="return" class="">return(a / b);</span>
			} else {
				<span id="throwKey">throw b;</span>
			}
		}</span>
};
<red>int</red> main() {
	<span id="xyz" class="hide"><red>int</red> x, y;
	<red>double</red> z = 0;
	MyException me;</span>
	<span id="cout1" class="hide">cout << <red>"enter numerator value : "</red>;</span>
	<span id="cin1" class="hide">cin >> x;</span>
	<span id="cout2" class="hide">cout << <red>"enter denominator value : "</red>;</span>
	<span id="cin2" class="hide">cin >> y;</span>
	<span id="insideTry" class="hide"><g><b>try</b></g> {
		<span id="zInit">z = <span id="callDivFun">me.division(x, y);</span></span>
		<span id="cout3">cout << <red>"z = "</red> << z << <red>"\n"</red>;</span>
	}</span> <span id="insideCatch" class="hide"><g><b>catch</b></g> (int y) {
    	<span id="cout4" class="hide">cout << <red>"division by 0 error is occured\n"</red>;</span>
		}</span>
	<span id="cout5" class="hide">cout << <red>"inside main"</red>;</span>
}
</pre>
		</div>
	</div>
	<div class="col-xs-5">
		<div id="outputDiv" class="hide">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
			<div id="outputText1" class="opacity00 display-inline-block">enter numerator value :&nbsp; </div><div class='display-inline-block input-val' contenteditable='true' maxlength='4' id='inputVal1' class="padding5" spellcheck="false"></div><br>
			<div id="outputText2" class="opacity00 display-inline-block">enter denominator value :&nbsp; </div><div class='display-inline-block input-val' contenteditable='true' maxlength='4' id='inputVal2' class="padding5" spellcheck="false"></div>
			</div>
		</div>
	</div>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>