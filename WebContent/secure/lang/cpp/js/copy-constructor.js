var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
var copyConstructorReadyFun = function() {
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
			 		element : "#class",
					intro : "",
					position : "right"
				},{
			 		element : "#callParameterConst",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#paraConst",
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
					tooltipClass : "hide"
				},{
			 		element : "#cout",
					intro : "",
					position : "top"
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
					position : "right"
				},{
			 		element : "#copyConst",
					intro : "",
					position : "bottom"
				},{
			 		element : "#callMethod2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#displayMethod",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#cout",
					intro : "",
					position : "top"
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
			$(".introjs-tooltip").hide();
			$('.introjs-nextbutton').hide();
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#li3").fadeTo(500, 1, function () {
						$("#nextBtn").fadeTo(500, 1, function () {
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
				var text = "Let us consider a sample C++ program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "class":
			introjs.refresh();
			$("#constM").addClass("hide");
			$("#memoryDiv").addClass("opacity00")
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a class <y>Sample</y> which consists two <b><y>int</y></b> fields <b><y>a</y></b>, <b><y>b</y></b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
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
		case "memoryDiv":
			if (introjs._currentStep == 4) {
				$("#memoryDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#s1Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						var text = "Memory is created for object <y>s1</y>, which consists of two integer variables <y>a</y> and <y>b</y>.";
						typing($(".introjs-tooltiptext"), text, function() {
							$('.introjs-nextbutton').show();
						});
					});	
				});
			} else if (introjs._currentStep == 12) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#s2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "<ul><li>Memory is created for object <y>s2</y>, which consists of two integer variables <y>a</y> and <y>b</y>.</li></ul>";
						typing($(".introjs-tooltiptext"), text, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="copyValues()">Next &#8594;</a>');
						});
					});
				});
			}
		break;
		case "paraConst":
			$("#paraConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>After creating an object immediately the parameter constructor will call.</li>"
				+ "<li><y>x</y>, <y>y</y> values copied into <y>a</y>, <y>b</y> respectively.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="abValues()">Next &#8594;</a>');
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
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			} else if (introjs._currentStep == 15) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			}
		break;
		case "cout":
			if (introjs._currentStep == 9) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The <y>cout</y> display the output on the console.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 16) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The <y>cout</y> display the output on the console.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			}
		break;
		case "outputDiv":
			if (introjs._currentStep == 10) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>Given values: 10 20</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			} else if (introjs._currentStep == 17) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>Given values: 10 20</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			}
		break;
		case "callCopyConst":
			$("#callCopyConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here <y>s1</y> object copy into <y>s2</y>, the values are same as <y>s1</y> object.";
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
				var text = "<ul><li>After copy the <y>s1</y> object into <y>s2</y>. The <y>copy constructor</y> will call.</li><li>The values are</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="copyConstValues()">Next &#8594;</a>');
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

function copyValues() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul><li>And copy the <y>a</y>, <y>b</y> values.</li></ul>");
	$("#a1PanelVal").removeClass("opacity00").effect( "highlight",{color: 'red'}, 500, function() {
		fromEffectWithTweenMax("#a1PanelVal", "#a3PanelVal", function() {
			$("#b1PanelVal").removeClass("opacity00").effect( "highlight",{color: 'red'}, 500, function() {
				fromEffectWithTweenMax("#b1PanelVal", "#b3PanelVal", function() {
					$('.introjs-nextbutton').show();
				});	
			});
		});
	});
}

function copyConstValues() {
	$('.user-btn').remove();
	 $(".introjs-tooltiptext").append(" <ul style='list-style-type:none;'><div id='s1ToAB' class='display-inline-block relative ct-code-b-yellow'>"
				+ "<li>a = <div id='tooltipS1AVal' class='display-inline-block relative'>s1.a</div>;</li>"
				+ "<li><y>b = <div id='tooltipS1BVal' class='display-inline-block relative'>s1.b</div>;</y></li></div></ul>");
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