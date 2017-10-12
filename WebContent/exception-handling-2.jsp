<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>exception-handling2</title>
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
	height: 260px;
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
    font-size: 10px;
    padding: 5px;
    line-height: 1.2;
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
	height: 130px;
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

.relative {
	position: relative;
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
			 		element : "#xy",
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
			 		element : "#cout2",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#try",
					intro : "",
					position : "right"
				},{
			 		element : "#catch",
					intro : "",
					position : "right"
				},{
			 		element : "#cout4",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#cout5",
					intro : "",
					tooltipClass : "hide"
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
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#li3").fadeTo(500, 1, function () {
						
					});
				});
			});
		break;
		case "tryCatch":
			$('.user-btn').addClass("hide");
			$("#tryCatch").removeClass("hide");
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
		case "xy":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Declared two int variables <y>x</y>, <y>y</y>. And initialized with <y>10</y> and <y>0</y> respectively.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "cout1":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "cout2":
			$("#cout2").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <y>cout</y> display the output on the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<ul><li><div id='tooltipXY' class='display-inline-block relative opacity00'>"
					+ "<y><div id='tooltipX' class='display-inline-block relative'>x</div> / <div id='tooltipY' class='display-inline-block relative'>y</div></y></div></li>"
					+ "<li class='text opacity00'>This will gives an exception. And the program terminated abnormally.</li>");
					var l1 = $("#tooltipXY").offset();
					var l2 = $("#x-y").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					$("#x-y").effect( "highlight",{color: 'red'}, 500, function() {
						$("#tooltipXY").removeClass("opacity00");
						TweenMax.from("#tooltipXY", 1, {top : topLength, left : leftLength, onComplete:function() {
							flipEffect("#tooltipX", 10, function() {
								flipEffect("#tooltipY", 0, function() {
									$(".text").removeClass("opacity00");
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						}});
					});
				});
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
					$("#outputText2").removeClass("opacity00");
					var text = "<ul><li>floating point exception</li> <li>The compiler evaluate the result of <y>division by zero</y> and there by terminates the "
					+ "  execution of the program abnormally.</li>"
					+ "<li>By using <y>try</y>, <y>catch</y> execute the program normally, if it is also generate an exception.</li></ul>"
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			} else if (introjs._currentStep == 14) {
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputText3").removeClass("opacity00");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			} else if (introjs._currentStep == 16) {
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputText4").removeClass("opacity00");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			}
		break;
		case "try":
			$("#try2catch").removeClass("hide");
			$("#cout2").addClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us check the condition."
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<ul><li><div id='tooltipY0' class='display-inline-block relative opacity00'>"
							+ "<y><div id='tooltipY' class='display-inline-block relative'>y</div> == 0</y></li></ul>"
							+ " <div id='cndtnExp1'></div></div>");
					var l1 = $("#tooltipY0").offset();
					var l2 = $("#ifCond").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					$("#ifCond").effect( "highlight",{color: 'red'}, 500, function() {
						$("#tooltipY0").removeClass("opacity00");
						TweenMax.from("#tooltipY0", 1, {top : topLength, left : leftLength, onComplete:function() {
							flipEffect("#tooltipY", 0, function() {
								var text;
								text = "is evaluates to <b><g>true</g></b>. So the <y>if</y> will execute.";
								typing($("#cndtnExp1"), text, function() {
									$(".introjs-tooltiptext").append("<ul><li><div id='tooltipXY' class='display-inline-block relative opacity00'>"
											+ "<y><div id='tooltipX1' class='display-inline-block relative'>x</div> / <div id='tooltipY1' class='display-inline-block relative'>y</div></y></div></li>"
											+ "<li class='text opacity00'>This will throw an exception. And the corresponding catch block will catch the exception.</li>");
									var l1 = $("#tooltipXY").offset();
									var l2 = $("#x-y1").offset();
									var topLength = l2.top - l1.top;
									var leftLength = l2.left - l1.left;
									$("#x-y1").effect( "highlight",{color: 'red'}, 500, function() {
										$("#tooltipXY").removeClass("opacity00");
										TweenMax.from("#tooltipXY", 1, {top : topLength, left : leftLength, onComplete:function() {
											flipEffect("#tooltipX1", 10, function() {
												flipEffect("#tooltipY1", 0, function() {
													$(".text").removeClass("opacity00");
													$('.introjs-nextbutton, .introjs-prevbutton').show();
												});
											});
										}});
									});
								});
							});
						}});
					});
				});
			});
		break;
		case "catch":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "catch block will catch the exceptions thrown by the try block.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "cout4":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "cout5":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
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
	<div id="topDiv">
		<ul>
			<li id="li1" class="opacity00">
				Exceptions are runtime errors or unusual conditions that a program may encounter while executing.
			</li>
			<li id="li2" class="opacity00">
				The mechanism of handling exception is known as exception handling.  
			</li>
			<li id="li3" class="opacity00">
				With try catch blocks, the code for error handling becomes separate from the normal flow.
			 	&emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span>
			</li>
		</ul>
		<div id="try-catch" class="col-xs-offset-4 col-xs-4 margin-top-10">
<pre id="tryCatch" class="creampretab1 hide"><span id="tryBlock"><g>try</g> {
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
</div>
</div>
	
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-1 col-xs-5">
		<div id="code" class="hide">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<red>int</red> main() {
	<span id="xy" class=""><red>int</red> x = 10, y = 0;</span>
	<span id="cout1" class="">cout << <red>"Before exception, inside main()\n"</red>;</span>
	<span id="cout2" class="">cout << <red>"division value = "</red> << (<span id="x-y">x / y</span>);</span>
	<span id="try2catch" class="hide"><span id="try" class=""><g>try</g> {
		if(<span id="ifCond">y == 0</span>) {
			<span id="cout3" class="">cout << <red>"division value = "</red> << (<span id="x-y1">x / y</span>);</span>
		} else {
			<g>throw</g> y;
		}
	}</span>
	<span id="catch" class=""><g>catch</g> (int y) {
    	<span id="cout4" class="">cout << <red>"division by 0 error is occured\n"</red>;</span>
	}</span></span>
	<span id="cout5" class="">cout << <red>"After exception, inside main()\n"</red>;</span>
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
				<div id="outputText1" class="opacity00 display-inline-block">Before exception, in main()</div><br>
				<div id="outputText2" class="opacity00 display-inline-block">Floating point exception</div><br>
				<div id="outputText3" class="opacity00 display-inline-block">Division by 0 error is occurred</div><br>
				<div id="outputText4" class="opacity00 display-inline-block">After exception, in main()</div>
			</div>
		</div>
	</div>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>	