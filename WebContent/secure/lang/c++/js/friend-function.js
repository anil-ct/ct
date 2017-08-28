var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;

var friendFunctionReadyFun = function() {
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