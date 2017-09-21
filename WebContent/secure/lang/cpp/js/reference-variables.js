var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;

var referenceVariableReadyFun = function() {
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
			 		element : "#demoTitle",
					intro : "",
					position : "right"
				},{
			 		element : "#leftDiv1",
					intro : "",
					position : "right"
				},{
			 		element : "#intA",
					intro : "",
					position : "right"
				},{
			 		element : "#rightDiv1",
					intro : "",
					position : "bottom"
				},{
			 		element : "#intB",
					intro : "",
					position : "right"
				},{
			 		element : "#rightDiv1",
					intro : "",
					position : "bottom"
				},{
			 		element : "#aIntoB",
					intro : "",
					position : "right"
				},{
			 		element : "#initB",
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
			 		element : "#leftDiv2",
					intro : "",
					position : "right"
				},{
			 		element : "#intRefA",
					intro : "",
					position : "right"
				},{
			 		element : "#rightDiv2",
					intro : "",
					position : "bottom"
				},{
			 		element : "#aIntoRefB",
					intro : "",
					position : "right"
				},{
			 		element : "#rightDiv2",
					intro : "",
					position : "bottom"
				},{
			 		element : "#cout2",
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
		case "demoTitle":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var text = "In this live demo we are going to learn about <b class='ct-code-b-yellow'>reference variables</b>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton').show();
			})
		break;
		case "leftDiv1":
			$("#leftDiv1").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider an example without reference variables.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "intA":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we declared an int variable <b class='ct-code-b-yellow'>num1</b> with value <b class='ct-code-b-yellow'>10</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "rightDiv1":
			if (introjs._currentStep == 3) {
				$("#rightDiv1").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The value <b class='ct-code-b-yellow'>10</b> is stored in variable <b class='ct-code-b-yellow'>num1</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#aPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#aVal").addClass("z-index");
							var l = $("#aVal").offset();
							$("#aPanelVal").offset({
								top:l.top,
								left:l.left
							});
							$('#aPanelVal').removeClass('opacity00').addClass('circle-css');
							TweenMax.to("#aPanelVal", 1, {top : 0, left : 0, onComplete:function() {
								$('#aPanelVal').removeClass('circle-css');
								$("#aVal").removeClass("z-index");
								$('.introjs-nextbutton').show();
							}});
						});	
					});
				});
			} else if (introjs._currentStep == 5) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Memory is allocated to the variable <b class='ct-code-b-yellow'>num2</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#bPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});	
					});
				});
			}
		break;
		case "intB":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Declared an int variable <b class='ct-code-b-yellow'>num2</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "aIntoB":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "250px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Here declare an int variable <b class='ct-code-b-yellow'>num2</b> and initialize with the value of variable <b class='ct-code-b-yellow'>num1</b>.</li>"
					+ "<li>Here the value <y>10</y> is within two variables <y>num1</y> and <y>num2</y>, so that we can say both contains same value but we can't say two variables have same memory.</li>"
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext ul").append("<li><div id='bToA' class='display-inline-block relative ct-code-b-yellow'>"
							+ "  num2 = <div id='tooltipAVal' class='display-inline-block relative'>num1</div></div></li>");
					var l1 = $("#bToA").offset();
					var l2 = $("#init").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#bToA", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipAVal", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipAVal").text($("#aVal").text());
							TweenMax.to("#tooltipAVal", 0.5, {rotationX : 0, onComplete:function() {
								var l = $("#tooltipAVal").offset();
								$("#bPanelVal").offset({
									top:l.top,
									left:l.left
								});
								$('#bPanelVal').removeClass('opacity00').addClass('circle-css');
								$("#bPanel").addClass("z-index");
								TweenMax.to("#bPanelVal", 1, {top : 0, left : 0, onComplete:function() {
									$('#bPanelVal').removeClass('circle-css');
									$("#bPanel").removeClass("z-index");
									$('.introjs-nextbutton').show();
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "initB":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The constatnt value 20 is stored in the variable <b class='ct-code-b-yellow'>num2</b> i.e <b class='ct-code-b-yellow'>20</b>"
					+ " is replaced in the place of <y>10</y>.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='bTo20' class='display-inline-block relative ct-code-b-yellow'>"
							+ "  num2 = <div id='tooltipBVal' class='display-inline-block relative'>20</div></div>");
					$("#bPanel").addClass("z-index");
					fromEffectWithTweenMax("#tooltipBVal", "#bPanelVal", function() {
						$("#bPanel").removeClass("z-index");
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "cout1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 500);
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 9) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>The values of a, b : 10 20</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 500);
				});
			} else if (introjs._currentStep == 16) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body > div:last-child").append("<div>The values of a, b : 10 10</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 500);
				});
			}
		break;
		case "leftDiv2":
			$("#leftDiv2").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider an example with <b class='ct-code-b-yellow'>reference variable</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "intRefA":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we declared an int variable <b class='ct-code-b-yellow'>a</b> with value <b class='ct-code-b-yellow'>10</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "rightDiv2":
			if (introjs._currentStep == 12) {
				$("#rightDiv2").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Memory is allocated to the variable <b class='ct-code-b-yellow'>num1</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#aRefPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#aRefVal").addClass("z-index");
							var l = $("#aRefVal").offset();
							$("#aRefPanelVal").offset({
								top:l.top,
								left:l.left
							});
							$('#aRefPanelVal').removeClass('opacity00').addClass('circle-css');
							TweenMax.to("#aRefPanelVal", 1, {top : 0, left : 0, onComplete:function() {
								$('#aRefPanelVal').removeClass('circle-css');
								$("#aRefVal").removeClass("z-index");
								$('.introjs-nextbutton').show();
							}});
						});	
					});
				});
			}  else if (introjs._currentStep == 14) {
				$("#refB, #line").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "No extra memory is allocated to the <b class='ct-code-b-yellow'>reference variable</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			}
		break;
		case "aIntoRefB":
			$(".introjs-tooltip").css({"min-width": "250px"});
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Here <b class='ct-code-b-yellow'>&num2</b> is a <b class='ct-code-b-yellow'>reference variable</b> to the variable <y>a</y></li>"
				+ "<li>A reference variable provides an <y>alias</y> name to the previously defined variable of the same data type.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext ul").append("<li><div id='bToRefA' class='display-inline-block relative ct-code-b-yellow'>"
							+ "  &num2 = <div id='tooltipRefAVal' class='display-inline-block relative'>num1</div></div></li>");
					var l1 = $("#bToRefA").offset();
					var l2 = $("#initRef").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#bToRefA", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipRefAVal", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipRefAVal").text($("#aVal").text());
							TweenMax.to("#tooltipRefAVal", 0.5, {rotationX : 0, onComplete:function() {
								$('.introjs-nextbutton').show();
							}});
						}});
					}});
				});
			});
		break;
		case "cout2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 500);
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