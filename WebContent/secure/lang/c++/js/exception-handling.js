var introjs;
var aValue;
var aValue;
var value;
var printFlag = false;
var lastPrintFlag = false;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;

var exceptionHandlingReadyFun = function() {
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
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
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
			 		element : "#tryCatch",
					intro : "",
				 	position : "right"
				},{
			 		element : "#tryBlock",
					intro : "",
					position : "right"
				},{
			 		element : "#throw",
					intro : "",
					position : "right"
				},{
			 		element : "#catchBlock",
					intro : "",
					position : "right"
				},{
			 		element : "#topDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#xyz",
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
			 		element : "#cin1",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#cout2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#cin2",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#insideTry",
					intro : "",
					position : "right"
				},{
			 		element : "#zInit",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callDivFun",
					intro : "",
					position : "right"
				},{
			 		element : "#divFun",
					intro : "",
					position : "right"
				},{
			 		element : "#zInit",
					intro : "",
					position : "right"
				},{
			 		element : "#cout3",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#insideCatch",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "tryCatch":
			$('.introjs-nextbutton').hide();
			var text = "The general format of <y>try</y>, <y>throw</y> , <y>catch</y>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton').show();	
			});
		break;
		case "tryBlock":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The statements which may expected to generate an error is written in try block.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "throw":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The key word <y>throw</y> is used to throw an exception. Also used to list the exceptions that a function throws, but doesn’t handle itself.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "catchBlock":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "When the try block throws an exception, then program control leaves the try block and enter the catch block.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "topDiv":
			introjs.refresh();
			$("#tryCatch").addClass("hide");
			introjs.refresh();
			$("#topDiv").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#li1").fadeTo(500, 1, function () {
					$("#li2").fadeTo(500, 1, function () {
						$("#li3").fadeTo(500, 1, function () {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "code":
			$("#code").removeClass("hide");
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
		case "xyz":
			$("#xyz").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Declare int variables x, y. And initialize the double variable z with 0. Create an object for class MyException.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "cout1":
			$("#cout1").removeClass("hide");
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
			if (introjs._currentStep == 8) {
				$("#outputDiv").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputText1").removeClass("opacity00");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			} else if (introjs._currentStep == 10) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Enter <y>numerator</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						charAtEnd("inputVal1");
					});
				});
			} else if (introjs._currentStep == 12) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputText2").removeClass("opacity00");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			} else if (introjs._currentStep == 14) {
				introjs.refresh();
				$("#inputVal1").attr("contenteditable", "false");
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Enter <y>denominator</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						charAtEnd("inputVal2");
					});
				});
			} else if (printFlag) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$("#callDivFun").removeClass("yellow");
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>division by 0 error occured</div>");
					introjs.insertOption(introjs._currentStep + 1, getStep("#cout5", "", "", "hide"));
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			}  else if (lastPrintFlag) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$("#callDivFun").removeClass("yellow");
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>inside main</div>");
					introjs.insertOption(introjs._currentStep + 1, getStep("#restart", "", "right"));
					setTimeout(function(){
						introjs.nextStep();
						lastPrintFlag = false;
					}, 1000);
				});
			} else {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$("#callDivFun").removeClass("yellow");
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>z = " + (($("#inputVal1").text()) / ($("#inputVal2").text())).toFixed(2) + "</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			}
		break;
		case "cin1":
			$("#cin1").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>cin</y> will read the value from the user.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "cout2":
			$("#cout1").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "cin2":
			$("#cin2").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>cin</y> will read the value from the user.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "insideTry":
			$("#insideTry").removeClass("hide");
			introjs.refresh();
			$("[contenteditable=true]").attr("contenteditable", "false");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a try block. The statements which may expected to generate an error is written in this block.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "zInit":
			if (introjs._currentStep == 16) {
				$("#zInit").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			} else if (introjs._currentStep == 19) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").css({"min-width": "200px"});
					introjs.refresh();
					$("#callDivFun").addClass("yellow");
					flipEffect("#callDivFun", ((($("#inputVal1").text()) / ($("#inputVal2").text())).toFixed(2)), function() {
						introjs.refresh();
						var text = "The return value is <y><b>" + ((($("#inputVal1").text()) / ($("#inputVal2").text())).toFixed(2)) + "</b></y>.<br>"
						+ " is stored into z.";
						introjs.refresh();
						typing($(".introjs-tooltiptext"), text, function() {
							$('.introjs-nextbutton').show();	
						});
					});
				});
			}
		break;
		case "callDivFun":
			$("#zInit").removeClass("hide");
			$("#cout3").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Calling division(x, y) by using MyException class reference.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "divFun":
			$("#divFun").removeClass("hide");
			$(".introjs-tooltip").css({"min-width": "300px"});
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "x, y values copy into a, b respectively.<br>"
					+ "Check the if condition i.e <y>b != 0</y><br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<div id='tooltipIfCond' class='display-inline-block relative'>"
							+ " <y><b><div id='tooltipB' class='display-inline-block relative'>b</div> != 0</b></y>"
							+ "</div>"
							+ "<div id='cndtnExp1'></div>");
					var l1 = $("#tooltipIfCond").offset();
					var l2 = $("#ifCond").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#tooltipIfCond", 1, {top : topLength, left : leftLength, onComplete:function() {
						flipEffect("#tooltipB", $("#inputVal2").text(), function() {
							var text;
							if (parseInt($("#inputVal2").text()) != 0) {
								text = "is evaluates to <red>true</red>. So the if block will execute i.e return(a / b).";
							} else {
								text = "is evaluates to <red>false</red>. So, else will execute.";
							}
							typing($("#cndtnExp1"), text, function() {
								if (parseInt($("#inputVal2").text()) != 0) {
									$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationInnerFor()">Next &#8594;</a>');
								} else {
									introjs.insertOption(introjs._currentStep + 1, getStep("#throwKey", "", "right"));
									$(".introjs-nextbutton").removeClass("introjs-disabled").show();
								}
							});
						});
					}});
				});
			});
		break;
		case "cout3":
			$("#cout3").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "insideCatch":
			if (parseInt($("#inputVal2").text()) != 0) {
				$("#insideCatch").removeClass("hide");
				$("#cout4").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here the catch block will not execute bacause there is no exception raised in program.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#cout5", "", "", "hide"));
						$(".introjs-nextbutton").removeClass("introjs-disabled").show();
					});
				});
			} else {
				printFlag = true;
				$("#insideCatch").removeClass("hide");
				$("#cout4").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The catch block will execute.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#outputDiv", "", "", "hide"));
						$(".introjs-nextbutton").removeClass("introjs-disabled").show();
					});
				});
			}
		break;
		case "cout5":
			$("#cout5").removeClass("hide");
			lastPrintFlag = true;
			printFlag = false;
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.insertOption(introjs._currentStep + 1, getStep("#outputDiv", "", "", "hide"));
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "throwKey":
			$("#throwKey").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The key word throw is used to throw an exception. And the corresponding catch will catch the exception.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, getStep("#insideCatch", "", "right"));
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
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
	
function animationInnerFor() {
	$('.introjs-nextbutton').hide();
	$(".user-btn").remove();
	$(".introjs-tooltiptext").empty();
	var text = "The return value <div id='tooltipReturn' class='display-inline-block relative'>"
		+ " <y><b>return (<div id='tooltipReturnVal' class='display-inline-block relative'>"
		+ " <div id='tooltipReturnA' class='display-inline-block relative'>a</div>"
		+ " / "
		+ " <div id='tooltipReturnB' class='display-inline-block relative'>b</div>"
		+ "</b></y>"
		+ "</div>)</div>";
	typing($(".introjs-tooltiptext"), text, function() {
		value = ((parseInt($("#inputVal1").text()) / parsrInt($("#inputVal2").text())).toFixed(2));
		aValue = $("#inputVal1").text();
		bValue = $("#inputVal2").text();
		var l1 = $("#tooltipReturn").offset();
		var l2 = $("#return").offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		TweenMax.from("#tooltipReturn", 1, {top : topLength, left : leftLength, onComplete:function () {
			flipEffect("#tooltipReturnA", aValue, function() {
				flipEffect("#tooltipReturnB", bValue, function() {
					flipEffect("#tooltipReturnVal", value, function() {
						console.log(value);
						$('.introjs-nextbutton').show();
					});
				});
			});
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