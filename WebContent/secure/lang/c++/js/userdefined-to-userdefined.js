var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;

var userdefinedToUserdefinedReadyFun = function() {
	introGuide();
	$('#restart').click(function() {
		location.reload();
	});
}

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