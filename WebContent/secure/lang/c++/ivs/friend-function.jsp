<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>friend-function</title>
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
	height: 388px;
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
			 		element : "#constD",
					intro : "",
					position : "right"
				},{
			 		element : "#defaultConst",
					intro : "",
					position : "right"
				},{
			 		element : "#cout",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callMethod",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#addFiveFun",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#friendFun",
					intro : "",
					position : "right"
				},{
			 		element : "#addFiveFun",
					intro : "",
					position : "right"
				},{
			 		element : "#cout",
					intro : "",
					tooltipClass : "hide"
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
			$('.user-btn').remove();
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider sample C++ program with private variable meter.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "constD":
			$("#constD").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a object for class Distance.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#memoryDiv").removeClass("opacity00").addClass("z-index");
					$("#dPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "defaultConst":
			$("#defaultConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "After creating object for Distance immediately the default constructor will call. And initialize the meter with 0.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#memoryDiv").addClass("z-index");
					$("#meterPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
						$('.introjs-nextbutton').show();
					});	
				});
			});
		break;
		case "cout":
			if (introjs._currentStep == 4) {
				$("#cout").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			} else if (introjs._currentStep == 10) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			}
		break;
		case "callMethod":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#callMethod").effect( "highlight",{color: '#ffff33'}, 2000);
				setTimeout(function(){
					introjs.nextStep();
				}, 1500);
			});
		break;
		case "addFiveFun":
			if (introjs._currentStep == 6) {
				$("#addFiveFun").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#meter").addClass("z-index");
					var text = "In this function we are trying to initialize the private variable meter. So it show an error.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 9) {
				$("#totalAddFiveFun").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#meter").addClass("z-index");
					var text = "Now you can access the private variable meter because the function addFive() declared as friend function."
					+ " addFive() return d.meter value.<br>";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltiptext").append(" <div id='flipMeter' class='display-inline-block relative ct-code-b-yellow'>"
								+ "  d.meter = <div id='totalMeter' class='display-inline-block relative'>"
								+ " <div id='tooltipMeter' class='display-inline-block relative'>meter</div>"
								+ " + <div id='tooltip5' class='display-inline-block relative'>5</div></div>;</div>");
						var l1 = $("#flipMeter").offset();
						var l2 = $("#meterInit").offset();
						var topLength = l2.top - l1.top;
						var leftLength = l2.left - l1.left;
						TweenMax.from("#flipMeter", 1, {top : topLength, left : leftLength, onComplete:function() {
								flipEffect("#tooltipMeter", 0, function(){
									flipEffect("#totalMeter", 5, function(){
										$("#meterPanel").addClass("hide");
										$("#memoryDiv").addClass("z-index");
										$("#meterPanel1").removeClass("hide").addClass("animated zoomIn").one("animationend", function() {
											$(this).removeClass("animated zoomIn");
											$("#memoryDiv").removeClass("z-index");
											$('.introjs-nextbutton').show();
										});
								});
							});
						}});
					});
				});
			}
		break;
		case "outputDiv":
			if (introjs._currentStep == 7) {
				$("#meter").removeClass("z-index");
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "We can't access the private members.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#body").append("<div>friend-function.cpp: In function <br><b>'int addFive(Distance)'</b>:<br>"
								+ " friend-function.cpp:5:10:<br> <red><b>error</b>:</red> <b>'int Distance::meter'</b> is private"
						        + " int meter;</div>");
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 11) {
				$("#meter").removeClass("z-index");
				$("#body").empty();
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>Distance: 5</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			}
		break;
		case "friendFun":
			$("#friendFun").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#meter").addClass("z-index");
				var text = "If you declare a function as friend function then you can access private members.";
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


function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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
	<h4 class='label ct-demo-heading' id='demoTitle'>Friend Function</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1">
				<ul style="font-family: monospace;">
					<li id="li1" class="opacity00">A <b><a href="https://en.wikipedia.org/wiki/Friend_function" target="_blank">friend function</a></b> can be given special grant to access private and protected members. A friend function can be:
						<ul>
							<li>A method of another class</li>
							<li>A global function</li>
						</ul>
					</li>
					<li id="li2" class="opacity00">
						 Friends should be used only for limited purpose. Too many functions or external classes are declared as friends
					 	of a class with protected or private data, it lessens the value of encapsulation of separate classes in object-oriented programming.
					 </li>
					<li id="li3" class="opacity00">Friendship is not mutual. If a class A is friend of B, then B doesn’t become friend of A automatically.</li>
					<li id="li4" class="opacity00">Friendship is not inherited</li>
					<li id="li5" class="opacity00">The concept of friends is not there in Java. 
						&emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span><br>
					</li>
				</ul>
			</div>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-5">
	
<div id="code" class="opacity00">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<g>class</g> <blue>Distance</blue> {
	<g>private</g>:
    	<span id="meter"><red>int</red> meter;</span>
	<span id="defaultConst" class="hide"><g>public</g>:
		Distance() {
			meter = 0;
		}</span>
		<span id="friendFun" class="hide"><b>//friend function</b>
		<span id="friend" class=""><g>friend</g></span> <red>int</red> addFive(Distance);</span>
};
<span id="totalAddFiveFun" class="hide"><b>//friend function definition</b></span>
<span id="addFiveFun" class="hide"><red>int</red> addFive(Distance d) {
	<b>//accessing private data from non-member function</b>
	<span id="meterInit">d.meter = meter + 5;</span>
	return d.meter;
}</span>
<red>void</red> main() {
	<span id="constD" class="hide">Distance D;</span>
	<span id="cout" class="hide">cout << <red>"Distance: "</red> << <span id="callMethod">addFive(D);</span></span>
}
</pre>
		</div>
	</div>
	<div class="col-xs-3">
	<div id="memoryDiv" class="opacity00">
	<div class="text-center"><b>memory</b></div>
		<div id="dPanel" class="opacity00">
			<div class="panel panel-primary margin-bottom0">
    			<div class="panel-heading text-center padding0"><b id="d">D</b></div>
    			<div class="panel-body text-center" style="padding: 5px;">
    				<div class="col-xs-offset-3 col-xs-6">
						<div id="meterPanel" class="opacity00">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>meter</b></div>
			    				<div class="panel-body text-center"><span id="meterPanelVal" class="">0</span></div>
			  				</div>
			  				<!-- <div class="text-center">1024</div> -->
		  				</div>
		  				
		  				<div id="meterPanel1" class="hide">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>meter</b></div>
			    				<div class="panel-body text-center"><span id="meterPanelVal1" class="">5</span></div>
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
			</div>
		</div>
	</div>
</div>
</body>
</html>