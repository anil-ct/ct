<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>constructor</title>
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
	height: 492px;
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
			 		element : "#class",
					intro : "",
					position : "right"
				},{
			 		element : "#callDefaultConst",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#defaultConst",
					intro : "",
					position : "top"
				},{
			 		element : "#s1Panel",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callMethod1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#displayMethod",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callParameterConst",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#parameterConst",
					intro : "",
					position : "bottom"
				},{
			 		element : "#s2Panel",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callMethod2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#displayMethod",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callCopyConst",
					intro : "",
					position : "top"
				},{
			 		element : "#memoryDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#copyConst",
					intro : "",
					position : "top"
				},{
			 		element : "#s3Panel",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callMethod3",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#displayMethod",
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
			$('.introjs-nextbutton').hide();
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#li3").fadeTo(500, 1, function () {
						$('.user-btn').removeClass("hide");
					});
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			$('.user-btn').addClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider a sample C++ program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "class":
			introjs.refresh();
			$("#constM").addClass("hide");
			$("#memoryDiv").addClass("opacity00")
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a class <y>Sample</y> which consists <b><y>int</y></b> fields <b><y>a</y></b>, <b><y>b</y></b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "callDefaultConst":
			$("#callDefaultConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create an object for class <y>Sample</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "memoryDiv":
			if (introjs._currentStep == 4) {
				$("#memoryDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#s1Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						setTimeout(function(){
							introjs.nextStep();
						}, 500);
					});	
				});
			} else if (introjs._currentStep == 11) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#s2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						setTimeout(function(){
							introjs.nextStep();
						}, 500);
					});
				});
			} else if (introjs._currentStep == 18) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#s3Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						setTimeout(function(){
							introjs.nextStep();
						}, 500);
					});	
				});
			}
		break;
		case "defaultConst":
			$("#defaultConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "After creating an object immediately the default constructor will call.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "s1Panel":
			$("#memoryDiv").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#a1PanelVal").removeClass("opacity00").effect( "highlight",{color: 'red'}, 500, function() {
					$("#b1PanelVal").removeClass("opacity00").effect( "highlight",{color: 'red'}, 500, function() {
						setTimeout(function(){
							introjs.nextStep();
						}, 500);
					});
				});
			});
		break;
		case "callMethod1":
			$("#callMethod1").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1500);
			});
		break;
		case "displayMethod":
			if (introjs._currentStep == 8) {
				$("#displayMethod").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This function will print the result on the console.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 15) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This function will print the result on the console.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			}  else if (introjs._currentStep == 22) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This function will print the result on the console.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			}
		break;
		case "outputDiv":
			if (introjs._currentStep == 9) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>Given values: 5 10</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			} else if (introjs._currentStep == 16) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body > div:last-child").append("<div>Given values: 10 20</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			} else if (introjs._currentStep == 23) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body > div:last-child").append("<div>Given values: 10 20</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			}
		break;
		case "callParameterConst":
			$("#callParameterConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is parameterized constructor.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "parameterConst":
			$("#parameterConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>After creating an object immediately the parameter constructor will call.</li>"
				+ "<li><y>x</y>, <y>y</y> values copied into <y>a</y>, <y>b</y> respectively.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="abValues()">Next &#8594;</a>');
					
					/* $(".introjs-tooltiptext").append(" <div id='aToX' class='display-inline-block relative ct-code-b-yellow'>"
							+ "  a = <div id='tooltipXVal' class='display-inline-block relative'>x</div>;"
							+ " b = <div id='tooltipYVal' class='display-inline-block relative'>y</div>;</div>");
					var l1 = $("#aToX").offset();
					var l2 = $("#xAndY").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#aToX", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipXVal", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipXVal").text($("#s1Val1").text());
							TweenMax.to("#tooltipXVal", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipYVal", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipYVal").text($("#s1Val2").text());
									TweenMax.to("#tooltipYVal", 0.5, {rotationX : 0, onComplete:function() {
										 $("#memoryDiv").addClass("z-index");
											$("#a2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
												$(this).removeClass("animated zoomIn");
											$("#b2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
												$(this).removeClass("animated zoomIn");
												$("#memoryDiv").removeClass("z-index");
												$('.introjs-nextbutton').show();
											});
										});
									}});
								}});
							}});
						}});
					}}); */
				});
			});
		break;
		case "s2Panel":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#a2PanelVal").removeClass("opacity00").effect( "highlight",{color: 'red'}, 500, function() {
					$("#b2PanelVal").removeClass("opacity00").effect( "highlight",{color: 'red'}, 500, function() {
						setTimeout(function(){
							introjs.nextStep();
						}, 500);
					});
				});
			});
		break;
		case "callMethod2":
			$("#callMethod2").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1500);
			});
		break;
		case "callCopyConst":
			$("#callCopyConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here s1 object copy into s2, the values are same as s1 object.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "copyConst":
			$("#copyConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>After copy the s1 object into s2. The copy constructor will call.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="copyConstValues()">Next &#8594;</a>');
					
					/* $(".introjs-tooltiptext").append(" <div id='s1ToAB' class='display-inline-block relative ct-code-b-yellow'>"
							+ "  a = <div id='tooltipS1AVal' class='display-inline-block relative'>s1.a</div>;"
							+ " b = <div id='tooltipS1BVal' class='display-inline-block relative'>s1.b</div>;</div>");
					var l1 = $("#s1ToAB").offset();
					var l2 = $("#s1AB").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#s1ToAB", 1, {top : topLength, left : leftLength, onComplete:function() {
						$("#a2Panel").addClass("z-index");
						TweenMax.to("#tooltipS1AVal", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipS1AVal").text($("#s1Val1").text());
							$("#a2Panel").removeClass("z-index");
							TweenMax.to("#tooltipS1AVal", 0.5, {rotationX : 0, onComplete:function() {
								$("#b2Panel").addClass("z-index");
								TweenMax.to("#tooltipS1BVal", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipS1BVal").text($("#s1Val2").text());
									$("#b2Panel").removeClass("z-index");
									TweenMax.to("#tooltipS1BVal", 0.5, {rotationX : 0, onComplete:function() {
										$('.introjs-nextbutton').show();
									}});
								}});
							}});
						}});
					}}); */
				});
			});
		break;
		case "s3Panel":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#a3PanelVal").removeClass("opacity00").effect( "highlight",{color: 'red'}, 500, function() {
					$("#b3PanelVal").removeClass("opacity00").effect( "highlight",{color: 'red'}, 500, function() {
						setTimeout(function(){
							introjs.nextStep();
						}, 500);
					});
				});
			});
		break;
		case "callMethod3":
			$("#callMethod3").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1500);
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

function abValues() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul style='list-style-type: none;'><li><div id='aToX' class='display-inline-block relative ct-code-b-yellow'>"
			+ "  <div>a = <div id='tooltipXVal' class='display-inline-block relative'>x</div>;</div>"
			+ " <div>b = <div id='tooltipYVal' class='display-inline-block relative'>y</div>;</div></div></li></ul>");
	var l1 = $("#aToX").offset();
	var l2 = $("#xAndY").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#aToX", 1, {top : topLength, left : leftLength, onComplete:function() {
		TweenMax.to("#tooltipXVal", 0.5, {rotationX : -90, onComplete:function() {
			$("#tooltipXVal").text($("#s1Val1").text());
			TweenMax.to("#tooltipXVal", 0.5, {rotationX : 0, onComplete:function() {
				TweenMax.to("#tooltipYVal", 0.5, {rotationX : -90, onComplete:function() {
					$("#tooltipYVal").text($("#s1Val2").text());
					TweenMax.to("#tooltipYVal", 0.5, {rotationX : 0, onComplete:function() {
						$('.introjs-nextbutton').show();
					}});
				}});
			}});
		}});
	}});
}

/* function copyConstValues() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul style='list-style-type: none;'><div id='s1ToAB' class='display-inline-block relative ct-code-b-yellow'>"
			+ "  <div>a = <div id='tooltipS1AVal' class='display-inline-block relative'>s1.a</div>;</div>"
			+ " <div>b = <div id='tooltipS1BVal' class='display-inline-block relative'>s1.b</div>;</div></div></li></ul>");
	var l1 = $("#s1ToAB").offset();
	var l2 = $("#s1AB").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#s1ToAB", 1, {top : topLength, left : leftLength, onComplete:function() {
		$("#a2Panel").addClass("z-index");
		TweenMax.to("#tooltipS1AVal", 0.5, {rotationX : -90, onComplete:function() {
			$("#tooltipS1AVal").text($("#s1Val1").text());
			$("#a2Panel").removeClass("z-index");
			TweenMax.to("#tooltipS1AVal", 0.5, {rotationX : 0, onComplete:function() {
				$("#b2Panel").addClass("z-index");
				TweenMax.to("#tooltipS1BVal", 0.5, {rotationX : -90, onComplete:function() {
					$("#tooltipS1BVal").text($("#s1Val2").text());
					$("#b2Panel").removeClass("z-index");
					TweenMax.to("#tooltipS1BVal", 0.5, {rotationX : 0, onComplete:function() {
						$('.introjs-nextbutton').show();
					}});
				}});
			}});
		}});
	}});
} */

function copyConstValues() {
	$('.user-btn').remove();
	$("#a2Panel").addClass("z-index");
	fromEffectWithTweenMax("#a2PanelVal", "#s1A", function() {
		$("#a2Panel").removeClass("z-index");
		$("#b2Panel").addClass("z-index");
		fromEffectWithTweenMax("#b2PanelVal", "#s1B", function() {
			$("#b2Panel").removeClass("z-index");
			$('.introjs-nextbutton').show();
		});	
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
	<h4 class='label ct-demo-heading' id='demoTitle'>Constructors</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1">
				<ul style="font-family: monospace;">
					<li id="li1" class="opacity00">A class <a href="https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)" target="_blank">constructor</a> is a special member function of a class that is executed whenever we create new objects of that class.</li>
					<li id="li2" class="opacity00">A constructor will have exact same name as the class and it does not have any return type, not even void.</li>
					<li id="li3" class="opacity00">Constructor are of  Default , Parameterized and Copy Constructors. 
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
<span id="class"><g>class</g> <blue>Sample</blue> {
	<red>int</red> a, b;
	<span id="defaultConst" class="hide"><g>public</g>:
	Sample() { 
		a = 5;			// <b>Default Constructor</b>
		b = 10;
	}</span>
	<span id="parameterConst" class="hide">Sample(int x, int y) {
		<span id="xAndY">a = x;			// <b>Parameterized Constructor</b>
		b = y;</span>
	}</span>
	<span id="copyConst" class="hide">Sample(Sample &s2) {
		<span id="s1AB">a = <span id="s1A">s1.a</span>;			// <b>Copy Constructor</b>
		b = <span id="s1B">s1.b</span>;</span>
	}</span>
	<span id="displayMethod" class="hide"><red>void</red> display() {
		cout &lt;&lt; <red>"Given values : "</red> << a << " " << b << "\n"; 
	}</span>
};</span>
<red>void</red> main() {
	<span id="callDefaultConst" class="hide">Sample s1;</span>
	<span id="callMethod1" class="hide">s1.display();</span>
	<span id="callParameterConst" class="hide">Sample s2(<spa id="s1Val1">10</spa>, <span id="s1Val2">20</span>);</span>
	<span id="callMethod2" class="hide">s2.display();</span>
	<span id="callCopyConst" class="hide">Sample s3 = s2;</span>
	<span id="callMethod3" class="hide">s3.display();</span>
}
</pre>
		</div>
	</div>
	<div class="col-xs-3">
	<div id="memoryDiv" class="opacity00">
	<div class="text-center"><b>memory</b></div>
		<div id="s1Panel" class="opacity00">
			<div class="panel panel-primary margin-bottom0">
    			<div class="panel-heading text-center padding0"><b id="s">s1</b></div>
    			<div class="panel-body text-center" style="padding: 5px;">
    				<div class="col-xs-6 margin-top-10">
						<div id="a1Panel" class="">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>a</b></div>
			    				<div class="panel-body text-center"><span id="a1PanelVal" class="opacity00">5</span></div>
			  				</div>
			  				<!-- <div class="text-center">1024</div> -->
		  				</div>
					</div>
					<div class="col-xs-6 margin-top-10">
						<div id="b1Panel" class="">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>b</b></div>
			    				<div class="panel-body text-center"><span id="b1PanelVal" class="opacity00">10</span></div>
			  				</div>
			  				<!-- <div class="text-center">1026</div> -->
		  				</div>
					</div>
    			</div>
  			</div>
 		</div>
 		
 		<div id="s2Panel" class="opacity00 margin-top-20">
			<div class="panel panel-primary margin-bottom0">
    			<div class="panel-heading text-center padding0"><b id="s2">s2</b></div>
    			<div class="panel-body text-center" style="padding: 5px;">
    				<div class="col-xs-6 margin-top-10">
						<div id="a2Panel" class="">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>a</b></div>
			    				<div class="panel-body text-center"><span id="a2PanelVal" class="opacity00">10</span></div>
			  				</div>
		  				</div>
					</div>
					<div class="col-xs-6 margin-top-10">
						<div id="b2Panel" class="">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>b</b></div>
			    				<div class="panel-body text-center"><span id="b2PanelVal" class="opacity00">20</span></div>
			  				</div>
		  				</div>
					</div>
    			</div>
  			</div>
 		</div>
 		
 		<div id="s3Panel" class="opacity00 margin-top-20">
			<div class="panel panel-primary margin-bottom0">
    			<div class="panel-heading text-center padding0"><b id="s3">s3</b></div>
    			<div class="panel-body text-center" style="padding: 5px;">
    				<div class="col-xs-6 margin-top-10">
						<div id="a3Panel" class="">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>a</b></div>
			    				<div class="panel-body text-center"><span id="a3PanelVal" class="opacity00">10</span></div>
			  				</div>
		  				</div>
					</div>
					<div class="col-xs-6 margin-top-10">
						<div id="b3Panel" class="">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>b</b></div>
			    				<div class="panel-body text-center"><span id="b3PanelVal" class="opacity00">20</span></div>
			  				</div>
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