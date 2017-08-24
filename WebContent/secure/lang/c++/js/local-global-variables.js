var introjs;
var typingSpeed = 5;
var tl;

var localGlobalVariablesReady = function() {
	introGuide();
	tl = new TimelineLite();
	$("#address1").text(Math.floor((Math.random() * 1024) + 1986));
	$("#address2").text(Math.floor((Math.random() * 1024) + 1996));
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		keyboardNavigation: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		showBullets: false,
		steps : [ {
			element : "#heading",
			intro : "",
			position : "right"
		}, {
			element : "#codeAnimation",
			intro : "",
			position : "right"
		}, {
			element : "#funcDec",
			intro : "",
			position : "right"
		}, {
			element : "#globalVar",
			intro : "",
			position : "right"
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#mainFunc",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#funcDef",
			intro : "",
			position : "right"
		}, {
			element : "#startMain",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#localVar",
			intro : "",
			position : "right"
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#mainPf1",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#functionCall",
			intro : "",
			position : "right"
		}, {
			element : "#valRes",
			intro : "",
			position : "right"
		}, {
			element : "#valDec",
			intro : ""
		}, {
			element : "#valAddition",
			intro : "",
			position : "right"
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#userPrintf",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#endFunc",
			intro : "",
			position : "right"
		}, {
			element : "#mainPf2",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#endMain",
			intro : "",
			position : "right"
		}, {
			element : "#restart",
			intro : "Click to restart.",
			tooltipClass : "introjs-tooltip-min-width",
			position : "right"
		} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "heading":
			var text = "Let us understand <span class='ct-code-b-yellow'>Local and Global</span> variables.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "codeAnimation":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#codeAnimation").removeClass("opacity00");
				var text = "Consider an example.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "funcDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "We declare a function <span class='ct-code-b-yellow'>display()</span> with <span class='ct-code-b-yellow'>no" 
							+ " arguments</span> and with <span class='ct-code-b-yellow'>no</span> return value.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "globalVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "A variable <span class='ct-code-b-yellow'>a</span> is declared out side the " 
							+ "<span class='ct-code-b-yellow'>main()</span> method. These variables that are declared out side of any method are" 
							+ " called <span class='ct-code-b-yellow'>global variables</span>. <br>They are available throughout the program.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "startMain":
		case "mainFunc":
			$("#globalVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "funcDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the definition of the function <span class='ct-code-b-yellow'>display()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "addressDiv":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#addressDiv').removeClass("opacity00");
				if(introjs._currentStep == 4) {
					$("#gVal").text(50);
					var l1 = $("#tweenVal1").offset();
					$("#gVal").offset({"top": l1.top, "left": l1.left});
					$("#globalVar").addClass("blinking-white");
					tl.to("#globalVal", 1, {opacity: 1, onComplete: function() {
						$("#globalVar").removeClass("opacity00, blinking-white");
						$("#tweenVal1, gVal").addClass("blinking-white");
						$("#gVal").removeClass("opacity00");
						tl.to("#gVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#tweenVal1, #gVal").removeClass("blinking-white");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>a</span> is allocated 2 bytes in memory and assigned" 
										+ " with value <b>50</b>.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
					
				} else if(introjs._currentStep == 9) {
					$("#lVal").text(20);
					var l1 = $("#tweenVal2").offset();
					$("#lVal").offset({"top": l1.top, "left": l1.left});
					$("#localVar").addClass("blinking-white");
					tl.to("#boxHeading, #varBox", 1, {opacity: 1, onComplete: function() {
						$("#localVar").removeClass("opacity00, blinking-white");
						$("#tweenVal2, #lVal").addClass("blinking-white");
						$("#lVal").removeClass("opacity00");
						tl.to("#lVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#tweenVal2, #lVal").removeClass("blinking-white");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>a</span> is allocated 2 bytes in memory and assigned" 
										+ " with value <b>20</b>."; 
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
				} else {
					$("#valRes").effect( "transfer", { to: $("#gVal"), className: "ui-effects-transfer" }, 1000 , function() {
						tl.to("#gVal", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
							$("#gVal").text(70);
							tl.to("#gVal", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
								$('.introjs-tooltip').removeClass("hide");
								var text = "Now <span class='ct-code-b-yellow'>global</span> variable <span class='ct-code-b-yellow'>a</span>"
											+ " becomes <b>70</b>.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").show();
								});
							}});
						}});
					});
				}
			});
			break;
			
		case "functionCall":
			$("#localVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "A call to the function <span class='ct-code-b-yellow'>display()</span> is made.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "localVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "An integer variable with the same name <span class='ct-code-b-yellow'>a</span> is declared and assigned with"
							+ " value <span class='ct-code-b-yellow'>20</span>. This variable is called <span class='ct-code-b-yellow'>local</span>"
							+ " variable and can be used only inside the <span class='ct-code-b-yellow'>main()</span> method.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mainPf1":
		case "mainPf2":
		case "userPrintf":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "valRes":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here, <b>20</b> is added to <span class='ct-code-b-yellow'>a</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "valDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The display() function will first search if any <span class='ct-code-b-yellow'>local variable</span> exists with that"
							+ " name, if it does not exist, it searches for a <span class='ct-code-b-yellow'>global variable</span> of that name."
							+ "<br> Here, a <span class='ct-code-b-yellow'>global variable</span> with the name <span class='ct-code-b-yellow'>a</span>"
							+ " exist.";
				typing(".introjs-tooltiptext", text, function() {
					$("#globalVar").addClass("blinking-white");
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "valAddition":
			$("#globalVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "Here, 20 is added to the existing value 50."; 
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "endFunc":
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "When the end of the function is reached, the control is transferred back to the calling method and executes the next" 
							+ " statement that occurs after this function call.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "endMain":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "End of the program.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "consoleId":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#consoleId').removeClass("opacity00");
				if(introjs._currentStep == 11) {
					$("#runEditor1").append("value in main() before call : <b style='color: green'>20</b>");
					nextStep();
				} else if(introjs._currentStep == 18) {
					$("#runEditor2").append("value in display() : <b style='color: green'>70</b>");
					nextStep();
				} else {
					$("#runEditor3").append("value in main() after call : <b style='color: green'>20</b>");
					nextStep();
				} 
			});
			break;
			
		case "restart":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				$("#restart").click(function() {
					location.reload();
				});
			});
			break;
		}
	});
	introjs.start();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function nextStep() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}