var putElement;
var introjs;
var timelineLite = new TimelineLite();	
var typingSpeed = 5;

var sampleProgramOnFunctionsReady = function() {
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
			$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only.</div>")
			e.preventDefault();
		}
		if((e.keyCode >= 65 && e.keyCode <= 90)){
			return;
		}
	});
	 $("#restart").click(function(){
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
			 		element : "#leftDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#funDec",
					intro : "",
					position : "right"
				},{
			 		element : "#varDec",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					position : "bottom"
				},{
			 		element : "#sum",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callingFun",
					intro : "",
					position : "right"
				},{
			 		element : "#funDef",
					intro : "",
					position : "right"
				},{
			 		element : "#return",
					intro : "",
					position : "right"
				},{
			 		element : "#callingFun",
					intro : "",
					position : "right"
				},{
			 		element : "#printf",
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
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		$('.introjs-nextbutton').hide();
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		introjs.refresh();
		switch (elementId) {
		case "demoTitle":
			$('#code').removeClass("opacity00");
			var text = "Here, we will learn <b class ='ct-code-b-yellow'>Function Definition</b>"
					+ ", <b class ='ct-code-b-yellow'>Function Declaration</b> and <b class ='ct-code-b-yellow'>Function Call</b>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
		break;
		case "leftDiv":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#leftDiv').removeClass("opacity00");
				var text = "Let us consider a sample C++ program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "funDec":
			introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "We declare a function with name <span class='ct-code-b-yellow'>addition(int, int)</span> "
						+ " with two arguments of type <b>int</b> and return value of type int.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});
		break;
		case "varDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here, you can edit the values of <b class ='ct-code-b-yellow'>a</b> and <b class ='ct-code-b-yellow'>b</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("aVal");
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "memoryDiv":
			$("#memoryDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Memory is created for variable <y>a</y>, <y>b</y> and <y>sum</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#aVal").addClass("z-index");
					fromEffectWithTweenMax("#aVal", "#aPanelVal", function(){
						$("#aPanelVal").removeClass("opacity");
						$("#aVal").removeClass("z-index");
						$("#bVal").addClass("z-index");
						fromEffectWithTweenMax("#bVal", "#bPanelVal", function(){
							$("#bPanelVal").removeClass("opacity");
							$("#bVal").removeClass("z-index");
							fromEffectWithTweenMax("#sumVal", "#sumPanelVal", function(){
								$("#sumPanelVal").removeClass("opacity");
								$("#sumVal").removeClass("z-index");
								$(".introjs-nextbutton").show();
							});	
						});
					});
				});
			});
		break;
		case "sum":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep()
				}, 1000);
			});
		break;
		case "callingFun":
			if (introjs._currentStep == 6){
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "A call made to function <span class='ct-code-b-yellow'>addition(a, b)</span> by sending the values of " 
							+ " <y>a</y>, <y>b</y> as parameters. This is known as <span class='ct-code-b-yellow'>Funciton Call</span>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			} else if (introjs._currentStep == 9) {
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The return value <y id='sumValue'>" + (parseInt($("#aVal").text()) + parseInt($("#bVal").text())) + "</y> will be stored in <b class ='ct-code-b-yellow'>sum</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#sumPanel").addClass("z-index");
						fromEffectWithTweenMax("#sumValue", "#sumPanelVal", function(){
							//$("#sumPanelVal").removeClass("opacity");
							$("#sumPanel").removeClass("z-index");
							$(".introjs-nextbutton").show();
						});	
					});
				});
			}
		break;
		case "funDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is <b class ='ct-code-b-yellow'>Function Definition</b>."
					+ " Whenever a function call is made, the argument values of the calling function i.e "
					+ " values of <b class ='ct-code-b-yellow'>a</b> and <b class ='ct-code-b-yellow'>b</b> are copied into the parameters "
					+ "of the called function i.e., <b class ='ct-code-b-yellow'>x</b> and <b class ='ct-code-b-yellow'>y</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "return":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The return type of the function is an integer, the addition of x and y is an integer which is returned.<br>"
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<b class ='ct-code-b-yellow'>"
							+ " <div id='rtn' class='display-inline-block relative'>return"
							+ "(<div id='xyVal' class='display-inline-block relative'>"
							+ " <div id='xVal' class='display-inline-block relative'> x </div>" 
							+ " + "
							+ " <div id='yVal' class='display-inline-block relative'>y</div></div>)</div></b>");
					var l1 = $("#rtn").offset();
					var l2 = $("#return").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#rtn", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#xVal", 0.5, {rotationX : -90, onComplete:function() {
							$("#xVal").text($("#aVal").text());
							TweenMax.to("#xVal", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#yVal", 0.5, {rotationX : -90, onComplete:function() {
									$("#yVal").text($("#bVal").text());
									TweenMax.to("#yVal", 0.5, {rotationX : 0, onComplete:function() {
										TweenMax.to("#xyVal", 0.5, {rotationX : -90, onComplete:function() {
											$("#xyVal").text(parseInt($("#aVal").text()) + parseInt($("#bVal").text()));
											TweenMax.to("#xyVal", 0.5, {rotationX : 0, onComplete:function() {
												introjs.refresh();
												$(".introjs-nextbutton").show();
											}});
										}});
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "printf":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep()
				}, 1000);
			});
		break;
		case "outputDiv":
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputBody").append("The sum of  a + b is : " + (parseInt($("#aVal").text()) + parseInt($("#bVal").text())));
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "restart":
			$('#restart').removeClass("opacity00");
			$(".introjs-tooltip").css({"min-width": "115px"});
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
	$(selector1).addClass('z-index').effect( "highlight",{color: 'white'}, 500, function() {
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
			$(selector1).removeClass('z-index');
			$("#dummy").remove();
			$("#animationDiv").removeAttr("style").addClass("introjs-showElement");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
}