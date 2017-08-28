var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;

var functionOverloadingReadyFun = function() {
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
			 		element : "#main",
					intro : "",
					position : "right"
				},{
			 		element : "#addFun1",
					intro : "",
					position : "bottom"
				},{
			 		element : "#method1",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#addFun2",
					intro : "",
					position : "bottom"
				},{
			 		element : "#method4",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#addFun3",
					intro : "",
					position : "bottom"
				},{
			 		element : "#method1",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#addFun4",
					intro : "",
					position : "bottom"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
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
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="codeText()">Next &#8594;</a>');
				});
			});
		break;
		case "main":
			introjs.refresh();
			$(".color").removeClass("yellow");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us call the functions one by one from main().";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "addFun1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This function calls exact matching function.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "method1":
			if (introjs._currentStep == 4) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "add(int, int) called and print the sum on the console.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltiptext").append(" <div id='firstAddition' class='display-inline-block relative ct-code-b-yellow'>"
							+ " <div id='tooltipA1Val' class='display-inline-block relative'>a</div> + <div id='tooltipB1Val' class='display-inline-block relative'>b</div>"
							+ " <div id='tooltipC1Val' class='opacity00 display-inline-block relative'> = "
							+ 22 +"</div></div>");
						var l1 = $("#firstAddition").offset();
						var l2 = $("#aPlusB1").offset();
						var topLength = l2.top - l1.top;
						var leftLength = l2.left - l1.left;
						TweenMax.from("#firstAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
							TweenMax.to("#tooltipA1Val", 0.5, {rotationX : -90, onComplete:function() {
								$("#tooltipA1Val").text($("#intVal1").text());
								TweenMax.to("#tooltipA1Val", 0.5, {rotationX : 0, onComplete:function() {
									TweenMax.to("#tooltipB1Val", 0.5, {rotationX : -90, onComplete:function() {
										$("#tooltipB1Val").text($("#intVal2").text());
										TweenMax.to("#tooltipB1Val", 0.5, {rotationX : 0, onComplete:function() {
											$("#tooltipC1Val").removeClass("opacity00");
											$('.introjs-nextbutton').show();
										}});
									}});
								}});
							}});
						}});
					});
				});
			} else if (introjs._currentStep == 10) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "add(int, int) called and print the sum on the console.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltiptext").append(" <div id='firstAddition' class='display-inline-block relative ct-code-b-yellow'>"
								+ " <div id='tooltipA1Val' class='display-inline-block relative'>a</div> + <div id='tooltipB1Val' class='display-inline-block relative'>b</div>"
								+ " <div id='tooltipC1Val' class='opacity00 display-inline-block relative'> = "
								+ 60 +"</div></div>");
						var l1 = $("#firstAddition").offset();
						var l2 = $("#aPlusB1").offset();
						var topLength = l2.top - l1.top;
						var leftLength = l2.left - l1.left;
						TweenMax.from("#firstAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
							TweenMax.to("#tooltipA1Val", 0.5, {rotationX : -90, onComplete:function() {
								$("#tooltipA1Val").text($("#doubleVal1").text());
								TweenMax.to("#tooltipA1Val", 0.5, {rotationX : 0, onComplete:function() {
									TweenMax.to("#tooltipB1Val", 0.5, {rotationX : -90, onComplete:function() {
										$("#tooltipB1Val").text($("#doubleVal2").text());
										TweenMax.to("#tooltipB1Val", 0.5, {rotationX : 0, onComplete:function() {
											$("#tooltipC1Val").removeClass("opacity00");
											$('.introjs-nextbutton').show();
										}});
									}});
								}});
							}});
						}});
					});
				});
			}
		break;
		case "outputDiv":
			$("#outputDiv").removeClass("opacity00");
			if (introjs._currentStep == 5) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "output";
					$("#body").append("<div>sum = 22</div>");
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 8) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "output";
					$("#body").append("<div>sum = 29.1</div>");
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 11) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "output";
					$("#body").append("<div>sum = 60</div>");
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			}  else if (introjs._currentStep == 13) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "There is no function with one float argument.";
					$("#body").empty();
					$("#body").append("<div>overloading.cpp: In function 'main()': <br>"
							+ " overloading.cpp:20:10: <red><b>error</b></red>: no matching function for call to 'add(int)' "
							+ " add(8.2)</div>");
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			}
		break;
		case "addFun2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This function calls exact matching function.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "method4":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "add(double, double) called and print the sum on the console..";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='thirdAddition' class='display-inline-block relative ct-code-b-yellow'>"
						+ " <div id='tooltipA3Val' class='display-inline-block relative'>a</div> + <div id='tooltipB3Val' class='display-inline-block relative'>b</div>"
						+ " <div id='tooltipC3Val' class='opacity00 display-inline-block relative'> = "
						+ 29.1 +"</div></div>");
					var l1 = $("#thirdAddition").offset();
					var l2 = $("#aPlusB3").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#thirdAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipA3Val", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipA3Val").text($("#floatVal1").text());
							TweenMax.to("#tooltipA3Val", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipB3Val", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipB3Val").text($("#floatVal2").text());
									TweenMax.to("#tooltipB3Val", 0.5, {rotationX : 0, onComplete:function() {
										$("#tooltipC3Val").removeClass("opacity00");
										$('.introjs-nextbutton').show();
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "addFun3":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This function calls exact matching function.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "addFun4":
			$("#addFun4").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This gives an error.";
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

function codeText() {
	$(".introjs-nextbutton").hide();
	$('.user-btn').remove();
	$(".color").addClass("yellow");
	$(".introjs-tooltiptext").empty();
	var text = "Here we overload the add() funtion, with same name and different argumens.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
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