var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
var userDefinedToBasicReadyFun = function() {
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
			 		element : "#class",
					intro : "",
					position : "right"
				},{
			 		element : "#constM",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					tooltipClass : "right"
				},{
			 		element : "#defaultConst",
					intro : "",
					position : "right"
				},{
			 		element : "#lengthPanel",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callMethod",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#getdataFun",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#cout2",
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
					position : "top"
				},{
			 		element : "#lengthPanel",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#floatX1",
					intro : "",
					position : "right"
				},{
			 		element : "#xm",
					intro : "",
					position : "top"
				},{
			 		element : "#operatorFloat",
					intro : "",
					position : "right"
				},{
			 		element : "#xm",
					intro : "",
					position : "top"
				},{
			 		element : "#cout1",
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
		case "topDiv":
			$('.introjs-nextbutton').hide();
			$('.user-btn').removeClass("hide");
			$("#code").addClass("opacity00");
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#li3").fadeTo(500, 1, function () {
						
					});
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			$('.user-btn').addClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider sample C++ program to convert<br> <y>user-defined</y> to <y>basic</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "class":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a class <y>Meter</y> which consists a <b class='monospace'><y>float</y></b> field <b class='monospace'><y>length</y></b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "constM":
			$("#constM").removeClass("hide");
			$("#mPanel").addClass("opacity00").addClass("animated zoomOut");
			$("#mPanel").removeClass("animated zoomOut");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create an object for class <y>Meter</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "memoryDiv":
			$("#memoryDiv").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Memory is created for object <y>m</y>, which consists of a integer variable <y>length</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
				 $("#memoryDiv").removeClass("opacity00").addClass("z-index");
					$("#mPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
		break;
		case "defaultConst":
			$("#defaultConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Whenever an object is created, the <y>default constructor</y> is called immediately.</li>"
				+ "<li>Here the field <y>length</y> is initialized with <y>0</y></li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "lengthPanel":
			if (introjs._currentStep == 6) {
				$("#lengthPanel").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#lengthPanelVal1").removeClass("opacity00");
					setTimeout(function(){
						introjs.nextStep();
					}, 500);
				});
			} else if (introjs._currentStep == 13) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputVal").addClass("z-index");
					fromEffectWithTweenMax("#inputVal", "#lengthPanelVal1", function() {
						$("#inputVal").removeClass("z-index");
						setTimeout(function(){
							introjs.nextStep();
						}, 1000);
					});
				});
			}
		break;
		case "callMethod":
			$("#callMethod").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "getdataFun":
			$("#getdataFun").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "cout2":
			$("#cout2").removeClass("hide");
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
			if (introjs._currentStep == 10) {
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
			} else if (introjs._currentStep == 12) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Enter <y><b>length</b></y> value.";
					typing($(".introjs-tooltiptext"), text, function() {
						charAtEnd("inputVal");
					});
				});
			} else if (introjs._currentStep == 19) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>length in centemeters : " + (($("#inputVal").text()) * 100).toFixed(2) + "</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			}
		break;
		case "cin":
			$("#cin").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>cin</y> will read the input from the inputstream given by the user.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "floatX1":
			$("#floatX1").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Declare a float variable <y>x</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "xm":
			if (introjs._currentStep == 15) {
				$("#xm").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-tooltip").css({"min-width": "300px"});
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li><y>x</y> is a float variable with value <y>" + $("#inputVal").text() + "</y>"
					+ "<li><y>m</y> is user-defined object of a class <y>Meter</y>, which consist a field <y>length</y>.</li>"
					+ "<li><b><y>x = m</y></b> means assign the user-defined object <y>m</y> to variable <y>x</y>.</li>"
					+ "<li>The user-defined object assigned to a variable by using <y>operator function</y>.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();	
					});
				});
			} else if (introjs._currentStep == 17) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-tooltip").css({"min-width": "300px"});
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The returned value <y><b>" + (($("#inputVal").text()) * 100).toFixed(2) + "</b></y> is stored into the float variable <y>x</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();	
					});
				});
			}
		break;
		case "operatorFloat":
			$("#operatorFloat").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Immediately the <y>operator float()</y> will call.</li>"
					+ "<li> And declare a float variable <y>x</y>.</li>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="returnX()">Next &#8594;</a>');
					
					/* $(".introjs-tooltiptext ul").append("<li><y><b>return x = <div id='tooltipTotalLength' class='display-inline-block relative'>"
							+ " <div id='tooltipYLength' class='display-inline-block relative'>length</div> * 100</div></b></y> <span id='text' class='opacity00'>&nbsp;and return this value.</span></li>");
					var l1 = $("#tooltipTotalLength").offset();
					var l2 = $("#length100").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#tooltipTotalLength", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipYLength", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipYLength").text($("#inputVal").text());
							TweenMax.to("#tooltipYLength", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipTotalLength", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipTotalLength").text((($("#inputVal").text()) * 100).toFixed(2));
									TweenMax.to("#tooltipTotalLength", 0.5, {rotationX : 0, onComplete:function() {
										$("#text").removeClass("opacity00");
										$('.introjs-nextbutton').show();
									}});
								}});
							}});
						}});
					}}); */
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

function returnX() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext ul").append("<li><y><b>x = <div id='tooltipTotalLength' class='display-inline-block relative'>"
			+ " <div id='tooltipYLength' class='display-inline-block relative'>length</div> * 100</div></b></y> <span id='text' class='opacity00'><br>return this value.</span></li>");
	var l1 = $("#tooltipTotalLength").offset();
	var l2 = $("#length100").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#tooltipTotalLength", 1, {top : topLength, left : leftLength, onComplete:function() {
		TweenMax.to("#tooltipYLength", 0.5, {rotationX : -90, onComplete:function() {
			$("#tooltipYLength").text($("#inputVal").text());
			TweenMax.to("#tooltipYLength", 0.5, {rotationX : 0, onComplete:function() {
				TweenMax.to("#tooltipTotalLength", 0.5, {rotationX : -90, onComplete:function() {
					$("#tooltipTotalLength").text((($("#inputVal").text()) * 100).toFixed(2));
					TweenMax.to("#tooltipTotalLength", 0.5, {rotationX : 0, onComplete:function() {
						$("#text").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					}});
				}});
			}});
		}});
	}});	
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
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
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