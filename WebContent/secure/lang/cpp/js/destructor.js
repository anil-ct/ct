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
					position : "left"
				},{
			 		element : "#defaultConst",
					intro : "",
					position : "right"
				},{
			 		element : "#s1Panel",
					intro : "",
					tooltipClass : "hide"
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
					position : "left"
				},{
			 		element : "#parameterConst",
					intro : "",
					position : "bottom"
				},{
			 		element : "#s2Panel",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#main",
					intro : "",
					position : "right"
				},{
			 		element : "#destruct",
					intro : "",
					position : "bottom"
				},{
			 		element : "#memoryDiv",
					intro : "",
					position : "left"
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
			$('.user-btn').removeClass("hide");
			$("#code").addClass("opacity00");
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
			$('.user-btn').addClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider sample C++ program.";
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
			$("#s1Panel").addClass("opacity00").addClass("animated zoomOut");
			$("#s1Panel").removeClass("animated zoomOut");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a object for class Sample.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "memoryDiv":
			if (introjs._currentStep == 4) {
				$("#memoryDiv").removeClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#s1Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						var text = "Memory is created for object <y>s1</y>, which consists of two integer variables <y>a</y> and <y>b</y>.";
						typing($(".introjs-tooltiptext"), text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});	
				});
			} else if (introjs._currentStep == 9) {
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#s2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$(this).removeClass("animated zoomIn");
					var text = "Memory is created for object <y>s2</y>, which consists of two integer variables <y>a</y> and <y>b</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			} else if (introjs._currentStep == 15) {
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#s1Panel").addClass("opacity00").addClass("animated zoomOut").one("animationend", function() {
					$("#s1Panel").removeClass("animated zoomOut");
					$("#s2Panel").addClass("opacity00").addClass("animated zoomOut").one("animationend", function() {
						$("#s2Panel").removeClass("animated zoomOut");
						var text = "The memory was cleared by <y>destructor</y>.";
						typing($(".introjs-tooltiptext"), text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			}
		break;
		case "defaultConst":
			$("#defaultConst").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>After creating an object immediately the default constructor will call.</li>"
					+ "<li>Initialize the values <y>a</y>, <y>b</y>.</li></ul>"
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "s1Panel":
			$("#memoryDiv").removeClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
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
		case "outputDiv":
			if (introjs._currentStep == 7) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>s1 object is created.</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			} else if (introjs._currentStep == 12) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body > div:last-child").append("<div>s2 object is created.</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			} else if (introjs._currentStep == 16) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body > div:last-child").append("<div>s1 and s2 objects are deleted.</div>");
					/* $("#body > div:last-child").append("<div>s1 and s2 objects are deleted.</div>"); */
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			}
		break;
		case "callParameterConst":
			$("#callParameterConst").removeClass("hide");
			$("#s2Panel").addClass("opacity00").addClass("animated zoomOut");
			$("#s2Panel").removeClass("animated zoomOut");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "constructor with parameters.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "parameterConst":
			$("#parameterConst").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>After creating an object immediately the parameter constructor will call.</li>"
				+ "<li><y>x</y>, <y>y</y> values copied into <y>a</y>, <y>b</y> respectively.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="abValues()">Next &#8594;</a>');
				});
			});
		break;
		case "s2Panel":
			introjs.refresh();
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
		case "main":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "After <y>main()</y> execution completed, the <y>destructor</y> will call.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "destruct":
			$("#s1Panel").removeClass("opacity00")
			$("#s2Panel").removeClass("opacity00")
			$("#destruct").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "When the <y>destructor</y> called, the objects are deleted from the memory."
					+ " The <y>cout</y> display the output on the console.";
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
		TweenMax.to("#tooltipXVal", 0.3, {rotationX : -90, onComplete:function() {
			$("#tooltipXVal").text($("#s1Val1").text());
			TweenMax.to("#tooltipXVal", 0.3, {rotationX : 0, onComplete:function() {
				TweenMax.to("#tooltipYVal", 0.3, {rotationX : -90, onComplete:function() {
					$("#tooltipYVal").text($("#s1Val2").text());
					TweenMax.to("#tooltipYVal", 0.5, {rotationX : 0, onComplete:function() {
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