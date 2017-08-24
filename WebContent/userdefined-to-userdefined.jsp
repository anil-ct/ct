<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>userdefined-to-basic</title>
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

div, span {
	position: relative;
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
	height: 423px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 10px;
}

/* [contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.input-val {
	background-color: #000;
	border: 1px solid black;
	border-radius: 4px;
	color: #0f0;
} */

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
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
$(document).ready(function() {
	introGuide();
	/* $("[contenteditable=true]").on("click keydown keyup", function(e) {
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
	}); */
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
				 	position : "bottom"
				},{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#rd",
					intro : "",
					position : "right"
				},{
			 		element : "#comments",
					intro : "",
					position : "top"
				},{
			 		element : "#paraConstDeg",
					intro : "",
					position : "right"
				},{
			 		element : "#rToD",
					intro : "",
					position : "top"
				},{
			 		element : "#operatorRad",
					intro : "",
					position : "right"
				},{
			 		element : "#rToD",
					intro : "",
					position : "top"
				},{
			 		element : "#paraConstRad",
					intro : "",
					position : "right"
				},{
			 		element : "#callingFun",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#displayFun",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				} ,{
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
					$("#li3").fadeTo(500, 1, function () {
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			$('.user-btn').remove();
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider sample C++ program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "rd":
			$("#rd").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a object for class <y>radian</y> and <y>degree</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#memoryDiv").removeClass("opacity00").addClass("z-index");
					$("#rPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#dPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#memoryDiv").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "comments":
			$("#comments").removeClass("hide");
			$("#callingParaConst").removeClass("opacity00").addClass("yellow");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "300px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we converting the basic to user-defined type. We will convert a float type basic variable to a user defined type class variable."
					+ " Internally the compiler will convert this as<br> <y>d = degree(100.30)</y>;<br>"
					+ " The parameterized constructor will call in <y>degree</y> class.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "paraConstDeg":
			$("#paraConstDeg").removeClass("hide");
			$("#callingParaConst").removeClass("yellow");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Immediately the parameter constructor will call. And the value"
					+ " <y><b> 100.30 </b></y> copy into <y>x</y>.<br> And the <y>deg</y> value would be <y><b> 100.30 </b></y>.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<div id='tooltipDegX' class='display-inline-block relative'>"
							+ " <y><b>deg = <div id='tooltipX' class='display-inline-block relative'>x</div></b></y>"
							+ "</div>");
					var l1 = $("#tooltipDegX").offset();
					var l2 = $("#degX").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#tooltipDegX", 1, {top : topLength, left : leftLength, onComplete:function() {
						flipEffect("#tooltipX", "100.30", function() {
							$("#dPanel").removeClass("opacity00").addClass("z-index");
							$("#degPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$(this).removeClass("animated zoomIn");
								$("#dPanel").removeClass("z-index");
								$('.introjs-nextbutton').show();
							});
						});
					}});
				});
			});
		break;
		case "rToD":
			if (introjs._currentStep == 5) {
				$("#rToD").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-tooltip").css({"min-width": "300px"});
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here we converting the user-defined type to basic."
						+ " Internally the compiler will convert this as <y>r = d.operator radian()</y><br>";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();	
					});
				});
			} else if (introjs._currentStep == 7) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-tooltip").css({"min-width": "300px"});
				$(".introjs-helperLayer").one("transitionend", function() {
					introjs.refresh();
					$("#preD").addClass("yellow");
					flipEffect("#preD", "1.7497", function() {
						introjs.refresh();
						var text = "The return value is <y><b> 1.7497</b></y>.<br>"
						+ "<y><b>r = 1.7497</b></y><br> again converting the basic to user-defined type. We will convert a float type basic variable to a user defined type class variable."
						+ " Internally the compiler will convert this as<br> <y>r = radian(1.7497)</y>;<br>"
						+ " The parameterized constructor will call in <y>radian</y> class.";
						typing($(".introjs-tooltiptext"), text, function() {
							$('.introjs-nextbutton').show();	
						});
					});
				});
			}
		break;
		case "operatorRad":
			$("#operatorRad").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Immediately the operator radian() will call. And return (deg * 3.14 / 180)<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<y><b><div id='tooltipTotalReturn' class='display-inline-block relative'>"
							+ "<div id='tooltipDiv' class='display-inline-block relative'>"
							+ "<div id='tooltipMul' class='display-inline-block relative'>"
							+ " <div id='tooltipDeg' class='display-inline-block relative'>deg</div> * 3.14</div> / 180</div>"
							+ " </div></b></y><br> <span id='text' class='opacity00'>This value will return.</span>");
					var l1 = $("#tooltipTotalReturn").offset();
					var l2 = $("#returnVal").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#tooltipTotalReturn", 1, {top : topLength, left : leftLength, onComplete:function() {
						flipEffect("#tooltipDeg", "100.30", function() {
							flipEffect("#tooltipMul", "314.942", function() {
								flipEffect("#tooltipDiv", "1.7497", function() {
									$("#text").removeClass("opacity00");
									$('.introjs-nextbutton').show();
								});
							});
						});
					}});
				});
			});
		break;
		case "paraConstRad":
			$("#paraConstRad").removeClass("paraConstRad");
			$("#preD").removeClass("yellow");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Immediately the parameter constructor will call. And the value"
					+ " <y><b> 1.7497 </b></y> copy into <y>x</y>.<br> And the <y>rad</y> value would be <y><b> 1.7497 </b></y>.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<div id='tooltipRadX' class='display-inline-block relative'>"
							+ " <y><b>rad = <div id='tooltipXVal' class='display-inline-block relative'>x</div></b></y>"
							+ "</div>");
					var l1 = $("#tooltipXVal").offset();
					var l2 = $("#radX").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#tooltipRadX", 1, {top : topLength, left : leftLength, onComplete:function() {
						flipEffect("#tooltipXVal", "1.7497", function() {
							$("#rPanel").removeClass("opacity00").addClass("z-index");
							$("#radPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$(this).removeClass("animated zoomIn");
								$("#rPanel").removeClass("z-index");
								$('.introjs-nextbutton').show();
							});
						});
					}});
				});
			});
		break;
		case "callingFun":
			$("#callingFun").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "displayFun":
			$("#displayFun").removeClass("hide");
			$('.user-btn').remove();
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This finction will print the result.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "outputDiv":
			$("#outputDiv").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputText").removeClass("opacity00");
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
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
	<h4 class='label ct-demo-heading' id='demoTitle'>Userdefined to Userdefined</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<ul style="font-family: monospace;">
				<li id="li1" class="opacity00">
					
				</li>
				<li id="li2" class="opacity00">
					
				</li>
				<li id="li3" class="opacity00" style="margin-top: -1px;">
					
					 &emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span>
				</li>
			</ul>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-5">
		<div id="code" class="opacity00">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<g>class</g> <blue>radian</blue> {
	<span id="rad"><red>float</red> rad;</span>
	<g>public</g>:
		<span id="paraConstRad" class="hide">radian(float x) {
			<span id="radX">rad = x;</span>
		}</span>
		<span id="displayFun" class="hide">void display() {
			cout << <red>"radians value : "</red> << rad;
		}</span>
};
<g>class</g> <blue>degree</blue> {
	<span id="rad"><red>float</red> deg;</span>
	<g>public</g>:
		<span id="paraConstDeg" class="hide">degree(float x) {
			<span id="degX">deg = x;</span>
		}</span>
		<span id="operatorRad" class="hide">operator radian() {
			return (<span id="returnVal">deg * 3.14 / 180</span>);
		}</span>
};
<red>void</red> main() {
	<span id="rd" class="hide">radian r;
	degree d;</span>
	<span id="comments" class="hide"><b>//convert from basic to user-defined;</b>
	<b>//this is equivalent to d = degree(100.30);</b>
	<span id="callingParaConst">d = 100.30;</span></span>
	<span id="rToD" class="hide">r = <span id="preD">d</span>;</span>
	<span id="callingFun" class="hide">r.display();</span>
}
</pre>
		</div>
	</div>
	<div class="col-xs-3">
		<div id="memoryDiv" class="opacity00">
			<div class="text-center"><b>memory</b></div>
				<div id="rPanel" class="opacity00">
					<div class="panel panel-primary	">
		    			<div class="panel-heading text-center padding0"><b id="r">r</b></div>
		    			<div class="panel-body text-center" style="padding: 5px;">
		    				<div class="col-xs-offset-3 col-xs-6">
								<div id="radPanel" class="opacity00">
									<div class="panel panel-primary margin-bottom0">
					    				<div class="panel-heading text-center padding0"><b>rad</b></div>
					    				<div class="panel-body text-center"><span id="radPanelVal" class="">1.7497</span></div>
					  				</div>
					  				<!-- <div class="text-center">1024</div> -->
				  				</div>
							</div>
		    			</div>
		  			</div>
		 		</div>
		 		<div id="dPanel" class="opacity00">
					<div class="panel panel-primary margin-bottom0">
		    			<div class="panel-heading text-center padding0"><b id="d">d</b></div>
		    			<div class="panel-body text-center" style="padding: 5px;">
		    				<div class="col-xs-offset-3 col-xs-6">
								<div id="degPanel" class="opacity00">
									<div class="panel panel-primary margin-bottom0">
					    				<div class="panel-heading text-center padding0"><b>deg</b></div>
					    				<div class="panel-body text-center"><span id="degPanelVal" class="">100.30</span></div>
					  				</div>
					  				<!-- <div class="text-center">1024</div> -->
				  				</div>
							</div>
		    			</div>
		  			</div>
		 		</div>
	 		</div>
		<div class="col-xs-12 text-center margin-top-20">
 			<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
		</div>
	</div>
	<div class="col-xs-4">
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
			<div id="outputText" class="opacity00 display-inline-block">radians value :&nbsp;1.7497</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>