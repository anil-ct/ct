var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;

var destructorReadyFun = function () {
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
			 		element : "#callDefaultConst",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#defaultConst",
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
			 		element : "#parameterConst",
					intro : "",
					position : "bottom"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#destruct",
					intro : "",
					position : "bottom"
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
				var text = "Let us consider sample C++ program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "callDefaultConst":
			$("#callDefaultConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a object for class Sample.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "memoryDiv":
			$("#memoryDiv").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Memory created for object.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#s1Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
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
				var text = "After creating an object immediately the default constructor will call.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#memoryDiv").addClass("z-index");
					$("#a1Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
					$("#b1Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
						$('.introjs-nextbutton').show();
					});
					});
				});
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 5) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>s1 object is created.</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			} else if (introjs._currentStep == 8) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body > div:last-child").append("<div>s2 object is created.</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			} else if (introjs._currentStep == 10) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body > div:last-child").append("<div>s1 and s2 objects are deleted.</div>");
					$("#body > div:last-child").append("<div>s1 and s2 objects are deleted.</div>");
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
				var text = "constructor with parameters.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#memoryDiv").addClass("z-index");
					$("#s2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
						$('.introjs-nextbutton').show();
					});	
				});
			});
		break;
		case "parameterConst":
			$("#parameterConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "After creating an object immediately the parameter constructor will called. And variables a, b created in the memory."
					+ " And the result will print on the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='aToX' class='display-inline-block relative ct-code-b-yellow'>"
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
					}});
				});
			});
		break;
		case "destruct":
			$("#destruct").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "When destructor function call the memory will be clear."
					+ " And the result will print on the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#memoryDiv").addClass("z-index");
					$("#s1Panel").addClass("opacity00").addClass("animated zoomOut").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#s2Panel").addClass("opacity00").addClass("animated zoomOut").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#memoryDiv").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
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