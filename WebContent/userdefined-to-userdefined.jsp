<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>userdefined-to-userdefined</title>
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
    height: 195px;
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
	height: 260px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 10px;
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

.lite-red {
	color: #880000;
}

.lite-blue {
	color: seagreen;
}

.padding-5 {
	padding: 5px;
	padding-left: 1px;
}

.display-inline-block {
	display: inline-block;
}


[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

[contenteditable=true]:empty:before, [contenteditable=false]:empty:before {
	color: #cbcbc !important;
	content: attr(placeholder);
}

.lite-red {
	color: #ff3019;
}

.lite-blue {
	color: seagreen;
}

.monospace {
	font-family: monospace;
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
				 	position : "bottom"
				},{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#class1",
					intro : "",
					position : "right"
				},{
			 		element : "#class2",
					intro : "",
					position : "right"
				},{
			 		element : "#rd",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					tooltipClass : "hide"
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
					$("#nextBtn").fadeTo(500, 1, function () {
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
				var text = "Let us consider sample C++ program to convert<br> <y>user-defined</y> to <y>user-defined</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "class1":
			introjs.refresh();
			$("#constM").addClass("hide");
			$("#memoryDiv").addClass("opacity00")
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a class <y>radian</y> which consists a <b class='monospace'><y>float</y></b> field <b class='monospace'><y>rad</y></b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "class2":
			introjs.refresh();
			$("#constM").addClass("hide");
			$("#memoryDiv").addClass("opacity00")
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a class <y>degree</y> which consists a <b class='monospace'><y>float</y></b> field <b class='monospace'><y>deg</y></b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "rd":
			$("#rd").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create two objects for the two clasess <y>radian</y> and <y>degree</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "memoryDiv":
			$("#memoryDiv").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-nextbutton').show();
				$("#memoryDiv").removeClass("opacity00").addClass("z-index");
				$("#rPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$(this).removeClass("animated zoomIn");
					$("#dPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
						setTimeout(function(){
							introjs.nextStep();
						}, 500);
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
				var text = "<ul><li><b class='monospace'>You can edit the value</b>, <y>d</y> is an object of class <y>degree</y>.</li>"
				+  "<li>It is a conversion <y>basic data type</y> <b class='monospace'>float</b> to <y>user-defined data type</y> <b class='monospace'>degree</b>.</li>"
				+ "<li>For converting <y>basic</y> to <y>user-defined</y> use a <y>constructor</y>.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("dVal");
					introjs.refresh();
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "paraConstDeg":
			$("#paraConstDeg").removeClass("hide");
			$("#callingParaConst").removeClass("yellow");
			introjs.refresh();
			$("[contenteditable=true]").attr("contenteditable", "false");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>The parameterized constructor <y>degree(float x)</y> is called when <y>d = " + $("#dVal").text() + "</y> is made.</li>"
					+ "<li>The <y>x</y> value <y> " + $("#dVal").text() + " </y> is copied into the formal parameter <y>deg</y>.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="flipX()">Next &#8594;</a>');
					
					
					/* $(".introjs-tooltiptext").append("<ul><li><div id='tooltipDegX' class='display-inline-block relative'>"
							+ " <y><b>deg = <div id='tooltipX' class='display-inline-block relative'>x</div></b></y>"
							+ "</div></li></ul>");
					var l1 = $("#tooltipDegX").offset();
					var l2 = $("#degX").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#tooltipDegX", 1, {top : topLength, left : leftLength, onComplete:function() {
						flipEffect("#tooltipX", $("#dVal").text(), function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="initD()">Next &#8594;</a>');
						});
					}}); */
				});
			});
		break;
		case "rToD":
			if (introjs._currentStep == 8) {
				$("#rToD").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-tooltip").css({"min-width": "300px"});
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>Here <y>d</y> is user-defined object which is assigned to another user-defined object <y>r</y>.</li>"
					+ "<li>For converting <y>user-defined</y> to<br> <y>user-defined</y> use <y>operator radian()</y> in the class <y>degree</y>.</li>"
					+ "<li>Here operator radian() converts the <y>degree</y> value into <y>radian</y>.<br> So, <y>r = d</y> called like<br> <y>r = d.operator radian()</y>;</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();	
					});
				});
			} else if (introjs._currentStep == 10) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-tooltip").css({"min-width": "300px"});
				$(".introjs-helperLayer").one("transitionend", function() {
					introjs.refresh();
					introjs.refresh();
					var text = "<ul><li>The return value is <y><b>"+((($("#dVal").text()) * 3.14) / 180).toFixed(2)+"</b></y>.</li>"
					+ "<li><y><b>r = "+((($("#dVal").text()) * 3.14) / 180).toFixed(2)+"</b></y> again converting the <y>basic to user-defined type</y>.</li>"
					+ " <li><y>r</y> is user defined object of a class <y>radian</y></li>"
					+ "<li>The basic data type value is assigned to an object by using conversion constructor which is a <y>parameterized constructor</y> i.e <y>radian("+((($("#dVal").text()) * 3.14) / 180).toFixed(2)+")</y></li></ul>";;
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();	
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
				var text = "<ul><li>Immediately the <y>operator radian()</y> will call.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="returnValue()">Next &#8594;</a>');
					
					/* $(".introjs-tooltiptext ul").append("<li><y><b><div id='tooltipTotalReturn' class='display-inline-block relative'>"
							+ "<div id='tooltipDiv' class='display-inline-block relative'>"
							+ "<div id='tooltipMul' class='display-inline-block relative'>"
							+ " <div id='tooltipDeg' class='display-inline-block relative'>deg</div> * 3.14</div> / 180</div>"
							+ " </div></b></y> <span id='text' class='opacity00'>&nbsp;This value will return.</span></li>");
					var l1 = $("#tooltipTotalReturn").offset();
					var l2 = $("#returnVal").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#tooltipTotalReturn", 1, {top : topLength, left : leftLength, onComplete:function() {
						flipEffect("#tooltipDeg", $("#dVal").text(), function() {
							flipEffect("#tooltipMul", ($("#dVal").text()) * 3.14, function() {
								flipEffect("#tooltipDiv", ((($("#dVal").text()) * 3.14) / 180).toFixed(2), function() {
									$("#text").removeClass("opacity00");
									$('.introjs-nextbutton').show();
								});
							});
						});
					}}); */
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
				var text = "<ul><li>The parameterized constructor <y>radian(float x)</y> is called when <y>r = d</y> is made.</li>"
					+ "<li>The <y>d</y> value <y>"+((($("#dVal").text()) * 3.14) / 180).toFixed(2)+"</y> is copied into the formal parameter <y>x</y>.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="radX()">Next &#8594;</a>');
					
					/* $(".introjs-tooltiptext").append("<ul><li><div id='tooltipRadX' class='display-inline-block relative'>"
							+ " <y><b>rad = <div id='tooltipXVal' class='display-inline-block relative'>x</div></b></y>"
							+ "</div></li></ul>");
					var l1 = $("#tooltipXVal").offset();
					var l2 = $("#radX").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#tooltipRadX", 1, {top : topLength, left : leftLength, onComplete:function() {
						flipEffect("#tooltipXVal", ((($("#dVal").text()) * 3.14) / 180).toFixed(2), function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="initR()">Next &#8594;</a>');
						});
					}}); */
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
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "outputDiv":
			$("#outputDiv").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#body").append("<div>radians value : "+((($("#dVal").text()) * 3.14) / 180).toFixed(2)+"</div>");
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

function flipX() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul><li><div id='tooltipDegX' class='display-inline-block relative'>"
			+ " <y><b>deg = <div id='tooltipX' class='display-inline-block relative'>x</div></b></y>"
			+ "</div></li></ul>");
	var l1 = $("#tooltipDegX").offset();
	var l2 = $("#degX").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#tooltipDegX", 1, {top : topLength, left : leftLength, onComplete:function() {
		flipEffect("#tooltipX", $("#dVal").text(), function() {
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="initD()">Next &#8594;</a>');
		});
	}});
}

function initD() {
	$('.user-btn').remove();
	$("#dPanel").addClass("z-index");
	fromEffectWithTweenMax("#tooltipX", "#degPanelVal", function() {
		$("#dPanel").removeClass("z-index");
		$('.introjs-nextbutton').show();
	});	
}

function radX() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul><li><div id='tooltipRadX' class='display-inline-block relative'>"
			+ " <y><b>rad = <div id='tooltipXVal' class='display-inline-block relative'>x</div></b></y>"
			+ "</div></li></ul>");
	var l1 = $("#tooltipXVal").offset();
	var l2 = $("#radX").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#tooltipRadX", 1, {top : topLength, left : leftLength, onComplete:function() {
		flipEffect("#tooltipXVal", ((($("#dVal").text()) * 3.14) / 180).toFixed(2), function() {
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="initR()">Next &#8594;</a>');
		});
	}});}

function initR() {
	$('.user-btn').remove();
	$("#rPanel").removeClass("opacity00").addClass("z-index");
	fromEffectWithTweenMax("#tooltipXVal", "#radPanelVal", function() {
		$("#rPanel").removeClass("z-index");
		$('.introjs-nextbutton').show();
	});
}

function returnValue() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext ul").append("<li><y><b><div id='tooltipTotalReturn' class='display-inline-block relative'>"
			+ "return ("
			+ "<div id='tooltipDiv' class='display-inline-block relative'>"
			+ "<div id='tooltipMul' class='display-inline-block relative'>"
			+ " <div id='tooltipDeg' class='display-inline-block relative'>deg</div> * 3.14</div> / 180</div>"
			+ " )</div></b></y></li>");
	var l1 = $("#tooltipTotalReturn").offset();
	var l2 = $("#returnVal").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#tooltipTotalReturn", 1, {top : topLength, left : leftLength, onComplete:function() {
		flipEffect("#tooltipDeg", $("#dVal").text(), function() {
			flipEffect("#tooltipMul", ($("#dVal").text()) * 3.14, function() {
				flipEffect("#tooltipDiv", ((($("#dVal").text()) * 3.14) / 180).toFixed(2), function() {
					$('.introjs-nextbutton').show();
				});
			});
		});
	}});
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
	<h4 class='label ct-demo-heading' id='demoTitle'>User-defined to User-defined</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<ul style="font-family: monospace;">
				<li id="li1" class="opacity00">
					To convert a <b class='monospace lite-blue'>user-defined type</b> to another <b class='monospace lite-blue'>user-defined type</b>,
					 the conversion function should be defined in base class in the form of <b class='monospace lite-blue'>operator function</b>.  
				</li>
				<li id="li2" class="opacity00">
					 The format of the operator function is: <br>
					 <div class="col-xs-4"><pre class="creampretab1">operator user-defined-datatype() {<br>	------<br>	------<br>}</pre></div>
				</li>
			</ul>
			<div class="col-xs-12">
				<span id="nextBtn" class='user-btn introjs-button opacity00' onclick='introjs.nextStep()'>Next &#8594;</span>
			</div>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-5">
		<div id="code" class="opacity00">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<span id="class1"><g>class</g> <blue>radian</blue> {
	<span id="rad"><red>float</red> rad;</span>
	<g>public</g>:
		<span id="paraConstRad" class="hide">radian(float x) {
			<span id="radX">rad = x;</span>
		}</span>
		<span id="displayFun" class="hide">void display() {
			cout << <red>"radians value : "</red> << rad;
		}</span>
};</span>
<span id="class2"><g>class</g> <blue>degree</blue> {
	<span id="rad"><red>float</red> deg;</span>
	<g>public</g>:
		<span id="paraConstDeg" class="hide">degree(float x) {
			<span id="degX">deg = x;</span>
		}</span>
		<span id="operatorRad" class="hide">operator radian() {
			return (<span id="returnVal">deg * 3.14 / 180</span>);
		}</span>
};</span>
<red>void</red> main() {
	<span id="rd" class="hide">radian r;
	degree d;</span>
	<span id="comments" class="hide"><span id="callingParaConst">d = <div class='display-inline-block' contenteditable='true' maxlength='5' id='dVal' class="padding-5" spellcheck="false" placeholder="deg">100.30</div>;</span></span>
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
								<div id="radPanel" class="">
									<div class="panel panel-primary margin-bottom0">
					    				<div class="panel-heading text-center padding0"><b>rad</b></div>
					    				<div class="panel-body text-center"><span id="radPanelVal" class=""></span></div>
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
								<div id="degPanel" class="">
									<div class="panel panel-primary margin-bottom0">
					    				<div class="panel-heading text-center padding0"><b>deg</b></div>
					    				<div class="panel-body text-center"><span id="degPanelVal" class=""></span></div>
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