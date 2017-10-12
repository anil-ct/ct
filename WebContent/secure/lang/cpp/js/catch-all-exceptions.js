var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
var catchAllExceptionsReadyFun = function() {
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
			 		element : "#try",
					intro : "",
					position : "right"
				},{
			 		element : "#catch",
					intro : "",
					position : "top"
				},{
			 		element : "#intX",
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
			 		element : "#cin",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#ifElseIf",
					intro : "",
					position : "right"
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
			$('.user-btn').removeClass("hide");
			introjs.refresh();
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
		case "try":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Tis is <y>try block</y>. The statements which may expected to generate an exception is written in <y>try block</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "catch":
			if (introjs._currentStep == 3) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "If you want to specify that a <y>catch block</y> should handle any type of <y>exception</y> that is thrown by a <y>try block</y>,"
					+ " you must put three ellipses(<y>...</y>) in between the parenthesis.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();	
					});
				});
			} else {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The catch with ellipses(<y>...</y>) will catch any type of exception.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#restart", "", "right"));
						introjs.insertOption(introjs._currentStep + 1, getStep("#outputDiv", "", "", "hide"));
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			}
		break;
		case "intX":
			$("#intX").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Declared an int variable <y>x</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "cout1":
			$("#cout1").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputText").removeClass("opacity00");
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 6) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputText").removeClass("opacity00");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			} else if (introjs._currentStep == 8) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Enter any number.<br><b>Hint:</b> Give it as <y>1</y> or <y>0</y> or <y>2</y> and check what happen.";
					typing($(".introjs-tooltiptext"), text, function() {
						charAtEnd("inputVal");
					});
				});
			} else {
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>This is generic catch to all exceptions.</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			}
		break;
		case "cin":
			$("#cin").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>cin</y> will read the input from the input stream given by the user.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ifElseIf":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "250px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us check the conditions.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="condition1()">Next &#8594;</a>');
				});
			});
		break;
		case "elseIf1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us check the conditions.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="condition1()">Next &#8594;</a>');
				});
			});
		break;
		case "throw1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>This statement <y>throws</y> an integer exception but we don't have any <y>catch</y> statement to handle an integer exception.</li>"
					+ "<li>So we have <y>catch(...)</y> statement it catches all types of exceptions and handle them.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, getStep("#catch", "", "right"));
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "throw2":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>This statement <y>throws</y> a character exception but we don't have any <y>catch</y> statement to handle an character exception.</li>"
					+ "<li>So we have <y>catch(...)</y> statement it catches all types of exceptions and handle them.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, getStep("#catch", "", "right"));
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "throw3":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>This statement <y>throws</y> a float exception but we don't have any <y>catch</y> statement to handle an float exception.</li>"
					+ "<li>So we have <y>catch(...)</y> statement it catches all types of exceptions and handle them.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, getStep("#catch", "", "right"));
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "restart":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
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

function condition1() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append(" <div id='firstCnd' class='opacity00 display-inline-block relative'>"
			+ " <y>if (<div id='tooltipX1' class='display-inline-block relative'>x</div>"
			+ " == 1)</y>"
			+ " <div id='cndtnExp1'></div></div>");
		var l1 = $("#firstCnd").offset();
		var l2 = $("#if").offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		$("#if").effect( "highlight",{color: 'red'}, 500, function() {
		$("#firstCnd").removeClass("opacity00");
		TweenMax.from("#firstCnd", 1, {top : topLength, left : leftLength, onComplete:function() {
			TweenMax.to("#tooltipX1", 0.3, {rotationX : -90, onComplete:function() {
				$("#tooltipX1").text($("#inputVal").text());
				TweenMax.to("#tooltipX1", 0.3, {rotationX : 0, onComplete:function() {
					var text;
					if (parseInt($("#inputVal").text()) == 1) {
						text = "is evaluates to <b><g>true</g></b>. So the <y>if-block</y> will execute and throw an exception.";
					} else {
						text = "is evaluates to <red>false</red>. So, the control come out of the <y>if-block</y> and enter into the <y>else-if</y> block.";
					}
					typing($("#cndtnExp1"), text, function() {
						if (parseInt($("#inputVal").text()) == 1) {
							introjs.insertOption(introjs._currentStep + 1, getStep("#throw1", "", "right"));
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						} else {
							introjs.insertOption(introjs._currentStep + 1, getStep("#elseIf1", "", "right"));
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="condition2()">Next &#8594;</a>');
						}
					});
				}});
			}});
		}});
	});
}

function condition2() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append(" <div id='secondCnd' class='opacity00 display-inline-block relative'>"
			+ " <y>else if (<div id='tooltipX2' class='display-inline-block relative'>x</div>"
			+ " == 0)</y>"
			+ " <div id='cndtnExp2'></div></div>");
		var l1 = $("#secondCnd").offset();
		var l2 = $("#elseIf1").offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		$("#elseIf1").effect( "highlight",{color: 'red'}, 500, function() {
		$("#secondCnd").removeClass("opacity00");
		TweenMax.from("#secondCnd", 1, {top : topLength, left : leftLength, onComplete:function() {
			TweenMax.to("#tooltipX2", 0.3, {rotationX : -90, onComplete:function() {
				$("#tooltipX2").text($("#inputVal").text());
				TweenMax.to("#tooltipX2", 0.3, {rotationX : 0, onComplete:function() {
					var text;
					if (parseInt($("#inputVal").text()) == 0) {
						text = "is evaluates to <b><g>true</g></b>. So the <y>else-if</y> block will execute and throw an exception.";
					} else {
						text = "is evaluates to <red>false</red>. So, the control come out of the <y>else-if</y> block and enter into the another <y>else-if</y> block.";
					}
					typing($("#cndtnExp2"), text, function() {
						if (parseInt($("#inputVal").text()) == 0) {
							introjs.insertOption(introjs._currentStep + 1, getStep("#throw2", "", "right"));
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						} else {
							introjs.insertOption(introjs._currentStep + 1, getStep("#elseIf2", "", "right"));
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="condition3()">Next &#8594;</a>');
						}
					});
				}});
			}});
		}});
	});
}

function condition3() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append(" <div id='thirdCnd' class='opacity00 display-inline-block relative'>"
			+ " <y>else if (<div id='tooltipX3' class='display-inline-block relative'>x</div>"
			+ " == 2)</y>"
			+ " <div id='cndtnExp3'></div></div>");
		var l1 = $("#thirdCnd").offset();
		var l2 = $("#elseIf2").offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		$("#elseIf2").effect( "highlight",{color: 'red'}, 500, function() {
		$("#thirdCnd").removeClass("opacity00");
		TweenMax.from("#thirdCnd", 1, {top : topLength, left : leftLength, onComplete:function() {
			TweenMax.to("#tooltipX3", 0.3, {rotationX : -90, onComplete:function() {
				$("#tooltipX3").text($("#inputVal").text());
				TweenMax.to("#tooltipX3", 0.3, {rotationX : 0, onComplete:function() {
					var text;
					if (parseInt($("#inputVal").text()) == 2) {
						text = "is evaluates to <b><g>true</g></b>. So the <y>else-if</y> block will execute and throw an exception.";
					} else {
						text = "is evaluates to <red>false</red>. So, the control come out of the <y>else-if</y> block and exit from the program."
							+ " Here the <y>catch block</y> will not execute, because there is no exception raised in <y>try block</y>."
					}
					typing($("#cndtnExp3"), text, function() {
						if (parseInt($("#inputVal").text()) == 2) {
							introjs.insertOption(introjs._currentStep + 1, getStep("#throw3", "", "right"));
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						} else {
							introjs.insertOption(introjs._currentStep + 1, getStep("#restart", "", "right"));
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						}
					});
				}});
			}});
		}});
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