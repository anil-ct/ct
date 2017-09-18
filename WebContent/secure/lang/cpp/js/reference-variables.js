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
					position : "right"
				},{
			 		element : "#intB",
					intro : "",
					position : "right"
				},{
			 		element : "#rightDiv1",
					intro : "",
					position : "right"
				},{
			 		element : "#aIntoB",
					intro : "",
					position : "right"
				},{
			 		element : "#initB",
					intro : "",
					position : "right"
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
					position : "right"
				},{
			 		element : "#aIntoRefB",
					intro : "",
					position : "right"
				},{
			 		element : "#rightDiv2",
					intro : "",
					position : "bottom"
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
				var text = "Let us consider an example without reference variable.";
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
				var text = "Here we declared an int variable <b class='ct-code-b-yellow'>a</b> with value <b class='ct-code-b-yellow'>10</b>.";
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
					var text = "The value <b class='ct-code-b-yellow'>10</b> is stored in variable <b class='ct-code-b-yellow'>a</b>.";
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
					var text = "Declare the variable <b class='ct-code-b-yellow'>b</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#bPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});	
					});
				});
			}
		break;
		case "aIntoB":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Initialize the variable <b class='ct-code-b-yellow'>b</b> with <b class='ct-code-b-yellow'>a</b>. i.e <b class='ct-code-b-yellow'>a</b>"
				+ "  value stored into <b class='ct-code-b-yellow'>b</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='bToA' class='display-inline-block relative ct-code-b-yellow'>"
							+ "  b = <div id='tooltipAVal' class='display-inline-block relative'>a</div></div>");
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
		case "intB":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Declare an int variable <b class='ct-code-b-yellow'>b</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "initB":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Initialize the variable <b class='ct-code-b-yellow'>b</b> with value <b class='ct-code-b-yellow'>20</b>.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='bTo20' class='display-inline-block relative ct-code-b-yellow'>"
							+ "  b = <div id='tooltipBVal' class='display-inline-block relative'>20</div></div>");
					var l1 = $("#bTo20").offset();
					var l2 = $("#b20").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					$('#bPanelVal2').removeClass('hide').addClass("opacity00");
					TweenMax.from("#bTo20", 1, {top : topLength, left : leftLength, onComplete:function() {
						var l = $("#tooltipBVal").offset();
						$("#bPanelVal2").offset({
							top:l.top,
							left:l.left
						});
						$('#bPanelVal2').removeClass('opacity00').addClass('circle-css');
						$("#bPanel").addClass("z-index");
						TweenMax.to("#bPanelVal2", 1, {top : 0, left : 0, onComplete:function() {
							$('#bPanelVal').addClass('hide')
							$('#bPanelVal2').removeClass('circle-css');
							$("#bPanel").removeClass("z-index");
							$('.introjs-nextbutton').show();
						}});
					}});
				});
			});
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
			if (introjs._currentStep == 10) {
				$("#rightDiv2").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The value <b class='ct-code-b-yellow'>10</b> is stored in the memory of variable <b class='ct-code-b-yellow'>a</b>.";
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
			}  else if (introjs._currentStep == 12) {
				$("#refB, #line").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<b class='ct-code-b-yellow'>a</b> and <b class='ct-code-b-yellow'>b</b> refer to the same data object in the memory.";
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
				var text = "Here ampersand(&) <b class='ct-code-b-yellow'>&b</b> is a <b class='ct-code-b-yellow'>reference variable</b>.<br>"
				+ " A reference variable provides an alias for a previously defined variable. Here the variable <b class='ct-code-b-yellow'>b</b> is <b>alias</b>"
				+ " for variable <b class='ct-code-b-yellow'>a</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='bToRefA' class='display-inline-block relative ct-code-b-yellow'>"
							+ "  &b = <div id='tooltipRefAVal' class='display-inline-block relative'>a</div></div>");
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
	
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		introjs.refresh();
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
			return;
		}
		
		if (e.altKey && e.keyCode == 77) {
			$(selector).val($(selector).attr("originalText"));
		}
		
		if ($(this).val() == $(selector).attr("originalText")) {
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
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