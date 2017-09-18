var introjs;
var tl;
var i;
var count = 1;
		
var categoriesOfFunctions = function() {
	introGuide();
	tl = new TimelineLite();
	$("#type1").click(function() {
		i = 1;
		$("#funcHeading").text("Function with no arguments and no return type");
	});
	
	$("#type2").click(function() {
		i = 2;
		$("#funcHeading").text("Function with arguments and no return type ");
	});
	
	$("#type3").click(function() {
		i = 3;
		$("#funcHeading").text("Function with no arguments and with return type");
	});
	
	$("#type4").click(function() {
		i = 4;
		$("#funcHeading").text("Function with arguments and with return type");
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
			element : "#heading",
			intro : "",
			position : "right"
		},{
			element : "#functionBox",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "heading":
			var text = "Let us understand different <span class='ct-code-b-yellow'>categories of functions</span>. "; 
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		
		case "functionBox":
			$("br").remove();
			$("#type" + i).removeClass("clicked");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#description").empty();
				$("#funcType" + i).addClass("hide opacity00");
				$(".output-text").remove();
				$("#funcHeading").empty();
				var text = "There are four different categories of functions based on their <span class='ct-code-b-yellow'>arguments</span>"
							+ " and <span class='ct-code-b-yellow'>return types</span>.<br><br> Click on any type of the function to learn more.";
				if($("#functionBox").hasClass('opacity00')) {
					$('.introjs-tooltip').removeClass("hide");
					tl.to("#functionBox", 1, {opacity: 1, onComplete: function() {
						$("#functionBox").removeClass("opacity00");
					}});
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".fun-btn").removeClass('disabled');
				});
			});
			break;  
			
		case "funcType" + i:
			$("#funcHeading").removeClass('opacity00');
			$("#actionBox").removeClass('opacity00');
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type1").hasClass("clicked")) {
					var text = "This example code uses a function with <span class='ct-code-b-yellow'>no</span> arguments " 
								+ " and <span class='ct-code-b-yellow'>no</span> return type.";
				} else if($("#type2").hasClass("clicked")) {
					var text = "This example code uses a function with <span class='ct-code-b-yellow'>with</span> arguments " 
								+ " and <span class='ct-code-b-yellow'>no</span> return type.";
				} else if($("#type3").hasClass("clicked")) {
					var text = "This example code uses a function with <span class='ct-code-b-yellow'>no</span> arguments " 
								+ " and <span class='ct-code-b-yellow'>with</span> return type.";
				} else if($("#type4").hasClass("clicked")) {
					var text = "This example code uses a function with <span class='ct-code-b-yellow'>with</span> arguments " 
								+ " and <span class='ct-code-b-yellow'>with</span> return type.";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "funDec" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type1").hasClass("clicked")) {
					var text = "A function <span class='ct-code-b-yellow'>void getName(void)</span> with " 
								+ " <span class='ct-code-b-yellow'>no</span> return type and "
								+ " with <span class='ct-code-b-yellow'>no</span> arguments is declared."
				} else if($("#type2").hasClass("clicked")) {
					var text = "A function <span class='ct-code-b-yellow'>void getValue(int)</span> with " 
								+ " <span class='ct-code-b-yellow'>with</span> one argument of type <b>int</b> and " 
								+ "<span class='ct-code-b-yellow'>no</span> return type is declared.";
				} else if($("#type3").hasClass("clicked")) {
					var text = "A function <span class='ct-code-b-yellow'>int calculateSum()</span> " 
								+ "with <span class='ct-code-b-yellow'>No</span> arguments and"
								+ " <span class='ct-code-b-yellow'>with</span> return type int is declared."; 
				} else if($("#type4").hasClass("clicked")) {
					var text = "A function <span class='ct-code-b-yellow'>int calculateSum(int, int)</span>" 
								+ " <span class='ct-code-b-yellow'>with</span> two arguments(<b>int</b>, <b>int</b>) and" 
								+ " <span class='ct-code-b-yellow'>with</span> return type int is declared.";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "main" + i:
			$('.introjs-tooltip').addClass('hide');
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500)
			});
			break;
			
		case "userPrintf" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#userPrintf" + i).addClass("output-line1");
				var text = "This function prints the message on the standard " 
					+ " output device(monitor).";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mainPrintf" + i:
			$("#callingFun" + i).removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500)
			});
			break;
					
		case "funDef" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the function definition.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		
		case "callingFun" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type1").hasClass("clicked")) {
		        	var text = "A call to the function <span class='ct-code-b-yellow'>getName()</span> is made.";
				} else if($("#type2").hasClass("clicked")) {
					var text = "A call to the function <span class='ct-code-b-yellow'>getValue(5)</span> is made by sending 5 as an argument"
								+ " of type int.";
				} else if($("#type3").hasClass("clicked")) {
					var text = "A call to the function <span class='ct-code-b-yellow'>calculateSum()</span> is made which returns an int value, " 
								 + " that is stored in <span class='ct-code-b-yellow'>total</span>.";
				} else if($("#type4").hasClass("clicked")) {
					var text = "A call to the function <span class='ct-code-b-yellow'>calculateSum(a, b)</span> is made by "
					  		   + " sending <span class='ct-code-b-yellow'>a</span> and <span class='ct-code-b-yellow'>b</span> of type int"
					  		   + " as arguments. It returns <span class='ct-code-b-yellow'>a</span> value of an int datatype, which " 
					  		   + " is stored in variable <span class='ct-code-b-yellow'>total</span>.";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "varInMain" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type3").hasClass("clicked")) {
					var text = "We declare an integer variable <span class='ct-code-b-yellow'>total</span>";
				} else if($("#type4").hasClass("clicked")) {
					var text = "Three int variables <span class='ct-code-b-yellow'>a</span>, <span class='ct-code-b-yellow'>b</span>"
								+ " and <span class='ct-code-b-yellow'>sum</span> are declared." 
								+ "<ul><li> <span class='ct-code-b-yellow'>a</span> is intialized to <span class='ct-code-b-yellow'>10</span>.</li>"
								+ "<li> <span class='ct-code-b-yellow'>b</span> is intialized to <span class='ct-code-b-yellow'>20</span>.</li></ul>";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "varInit" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type3").hasClass("clicked")) {
					var text = "Three int variables <span class='ct-code-b-yellow'>a</span>, <span class='ct-code-b-yellow'>b</span> and"
								+ " <span class='ct-code-b-yellow'>sum</span> are declared." 
								+ "<ul><li> <span class='ct-code-b-yellow'>a</span> is intialized to  <span class='ct-code-b-yellow'>10</span></li>"
								+ "<li> <span class='ct-code-b-yellow'>b</span> is intialized to  <span class='ct-code-b-yellow'>20</span></li></ul>";
				} else if($("#type4").hasClass("clicked")) {
					var text = "We declare an integer variable <span class='ct-code-b-yellow'>sum</span>." 
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "varDec" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<span class='ct-code-b-yellow'>a</span> and <span class='ct-code-b-yellow'>b</span> are added and the"
						+ " result is stored in <span class='ct-code-b-yellow'>sum</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "returnVal" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#callingFun" + i).addClass("blinking-white");
				var text = "This <span class='ct-code-b-yellow'>sum</span> value is returned by the function, that is stored in the variable " 
							+ "<span class='ct-code-b-yellow'>total</span> of main() method. <br/><br>" 
							+ " <b>Note:</b> Any statement that occurs after the <span class='ct-code-b-yellow'>return</span> " 
							+ " statement in the function will not be executed as the control gets transferred to the <span class='ct-code-b-yellow'>"
							+ "main()</span> method once the return statement is reached.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "endFunction" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The function ends here and the control is transferred to the <span class='ct-code-b-yellow'>main()</span> method and"
							+ " the statement after the function call is executed.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "endMain" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The program execution ends here.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "description":
			$("#description").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type1").hasClass("clicked")) {
					$("#description").append("<ul style='margin-top: 14px;'><li id='line11' class='opacity00'>When a function has"
											+ " <span class='ct-green-color'>no arguments</span>, no data is sent to the calling"
											+ " function.</li><li id='line12' class='opacity00'>When a function has <span class='ct-green-color'>no" 
											+ " return value</span>, no data is sent from the called function.</li></ul>");
					tl.to($("#line11"), 0.5, {opacity: 1, onComplete: function() {
						tl.to($("#line12"), 0.5, {opacity: 1, onComplete: function() {
							introjs.refresh();
							$('.introjs-tooltip').removeClass("hide");
							var text = "Click on next to go to <b>Function Categories</b>.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
				} else if($("#type2").hasClass("clicked")) {
					$("#description").append("<ul style='margin-top: 14px;'><li id='line21' class='opacity00'>When a function has"
										+ "<span class='ct-green-color'>arguments</span>, data is sent to the called function as arguments.</li>" 
										+ "<li id='line22' class='opacity00'>When a function has <span class='ct-green-color'>no return value</span>" 
										+ ", no data is sent from the called function.</li></ul>");
					tl.to($("#line21"), 0.5, {opacity: 1, onComplete: function() {
						tl.to($("#line22"), 0.5, {opacity: 1, onComplete: function() {
							introjs.refresh();
							$('.introjs-tooltip').removeClass("hide");
							var text = "Click on next to go to <b>Function Categories</b>.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
				} else if($("#type3").hasClass("clicked")) {
					$('#description').append("<ul style='margin-top: 14px;'><li id='line31' class='opacity00'>When a function has"
										+ " <span class='ct-green-color'>no arguments</span>, no data is sent to the calling function."
										+ "</li><li id='line32' class='opacity00'>When a function execution ends, the <span class"
										+ "='ct-green-color'>return</span> statement will <span class='ct-green-color'>return</span> "
										+ " only <span class='ct-green-color'>one value</span>.</li></ul>");
					tl.to($("#line31"), 0.5, {opacity: 1, onComplete: function() {
						tl.to($("#line32"), 0.5, {opacity: 1, onComplete: function() {
							introjs.refresh();
							$('.introjs-tooltip').removeClass("hide");
							var text = "Click on next to go to <b>Function Categories</b>.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
				} else if($("#type4").hasClass("clicked")) {
					$("#description").append("<ul style='margin-top: 14px;'><li id='line41' class='opacity00'>When a function has"
										+ " <span class='ct-green-color'>arguments</span>, data is sent to the calling function as arguments.</li>" 
										+ "<li id='line42' class='opacity00'>When a function execution ends, the <span class"
										+ "='ct-green-color'>return</span> statement will <span class='ct-green-color'>return</span> "
										+ " only <span class='ct-green-color'>one value</span>.</li></ul>");
					tl.to($("#line41"), 0.5, {opacity: 1, onComplete: function() {
						tl.to($("#line42"), 0.5, {opacity: 1, onComplete: function() {
							introjs.refresh();
							$('.introjs-tooltip').removeClass("hide");
							var text = "Click on next to go to <b>Function Categories</b>.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
				}
			});
			break;
			
		case "consoleId":
			$("#consoleId").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type1").hasClass("clicked")) {
					if($("#userPrintf" + i).hasClass("output-line1")) {
						$("#userPrintf" + i).removeClass("output-line1");
						$("#outputPrint").append("<span id='runEditor1' class='output-text'></span><br>");
						var text = "Inside getName()";
						typing("#runEditor1", text, function() {
							timeout();
						});
					} else {
						$("#outputPrint").append("<span id='runEditor2' class='output-text'></span><br>");
						var text = "Inside main()";
						typing("#runEditor2", text, function() {
							timeout();							
						});
					}
				} else if($("#type2").hasClass("clicked")) {
					if($("#userPrintf" + i).hasClass("output-line1")) {
						$("#userPrintf" + i).removeClass("output-line1");
						$("#outputPrint").append("<span id='runEditor1' class='output-text'></span><br>");
						var text = "5 printed in getValue()";
						typing("#runEditor1", text, function() {
							setTimeout(function(){
								introjs.nextStep();
							}, 1000);
						});
					} else {
						$("#outputPrint").append("<span id='runEditor2' class='output-text'></span><br>");
						var text = "Inside main(), after getValue()";
						typing("#runEditor2", text, function() {
							timeout();							
						});
					}
				} else if($("#type3").hasClass("clicked")) {
					$("#outputPrint").append("<span id='runEditor1' class='output-text'></span><br>");
					var text = "Sum = 30";
					typing("#runEditor1", text, function() {
						timeout();
					});
				} else if($("#type4").hasClass("clicked")) {
					$("#outputPrint").append("<span id='runEditor1' class='output-text'></span><br>");
					var text = "Sum = 30";
					typing("#runEditor1", text, function() {
						timeout();
					});
				}
			});
			break;
		}
	});
	introjs.start();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": 5,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function timeout() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}

function getStep(element, intro, tooltipClass, position) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	return step;
}

function nextStepRight(id, val) {
	var dynamicStep = getStep(id, "", "", "right");
	introjs.insertOption(introjs._currentStep + val, dynamicStep);
}

function dynamicSteps() {
	setTimeout(function() {
		$("#type" + i).addClass("clicked");
		$("#funcType" + i).removeClass("hide opacity00");
		
		nextStepRight("#funcType" + i, 1);
		nextStepRight("#funDec" + i, 2);
		var dynamicStep = getStep("#main" + i, "", "hide", "right");
		introjs.insertOption(introjs._currentStep + 3, dynamicStep);
		
		if($("#type1").hasClass("clicked") || $("#type2").hasClass("clicked")) {
			
			nextStepRight("#funDef" + i, 4);
			nextStepRight("#callingFun" + i, 5);
			nextStepRight("#userPrintf" + i, 6);

			var dynamicStep = getStep("#consoleId", "", "hide", "");
			introjs.insertOption(introjs._currentStep + 7, dynamicStep);
			
			nextStepRight("#endFunction" + i, 8);
			var dynamicStep = getStep("#mainPrintf" + i, "", "hide", "");
			introjs.insertOption(introjs._currentStep + 9, dynamicStep);
			
			var dynamicStep = getStep("#consoleId", "", "hide", "");
			introjs.insertOption(introjs._currentStep + 10, dynamicStep);
			
			nextStepRight("#endMain" + i, 11);
			
			var dynamicStep = getStep("#description", "", "hide", "");
			introjs.insertOption(introjs._currentStep + 12, dynamicStep);
			
			nextStepRight("#functionBox", 13);
			
		} else if($("#type3").hasClass("clicked") || $("#type4").hasClass("clicked")) {
			
			nextStepRight("#funDef" + i, 4);
			nextStepRight("#varInMain" + i, 5);
			nextStepRight("#callingFun" + i, 6);
			nextStepRight("#varInit" + i, 7);
			nextStepRight("#varDec" + i, 8);
			nextStepRight("#returnVal" + i, 9);
			var dynamicStep = getStep("#mainPrintf" + i, "", "hide", "");
			introjs.insertOption(introjs._currentStep + 10, dynamicStep);
			
			var dynamicStep = getStep("#consoleId", "", "hide", "");
			introjs.insertOption(introjs._currentStep + 11, dynamicStep);
			
			nextStepRight("#endMain" + i, 12);
			
			var dynamicStep = getStep("#description", "", "hide", "");
			introjs.insertOption(introjs._currentStep + 13, dynamicStep);
			
			nextStepRight("#functionBox", 14);
		}
		introjs.nextStep();
	}, 100);
}