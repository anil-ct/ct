var introjs;
var tl;
var consoleCount = 1;
var animationCount = 1;
var i = 1;
var iCount = 0;

var functionsWithArraysReady = function() {
	introGuide();
	tl = new TimelineLite();
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [{
			element : "#codeAnimation",
			intro : "",
			position : "right"
		},{
			element : "#functionDec1",
			intro : "",
			position : "right"
		},{
			element : "#functionDec2",
			intro : "",
			position : "right"
		},{
			element : "#mainFunction",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#funcDef1",
			intro : "",
			position : "right"
		},{
			element : "#funcDef2",
			intro : "",
			position : "right"
		},{
			element : "#startMain",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#mainVar",
			intro : "",
			position : "right"
		},{
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		},{
			element : "#mainPrintf",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#mainScanf",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#consoleId",
			intro : "",
			position : "left"
		},{
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		},{
			element : "#readCall",
			intro : "",
			position : "right"
		},{
			element : "#readStep1",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		},{
			element : "#readVar",
			intro : "",
			position : "right"
		},{
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		},{
			element : "#readPrintf",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#forLoop1",
			intro : "",
			position : "right"
		},{
			element : "#forInit1",
			intro : "",
			position : "right"
		},{
			element : "#displayStep1",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		},{
			element : "#displayVar",
			intro : "",
			position : "right"
		},{
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		},{
			element : "#displayPrintf1",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#forLoop2",
			intro : "",
			position : "right"
		},{
			element : "#forInit2",
			intro : "",
			position : "right"
		},{
			element : "#restart",
			intro : "Click to restart.",
			tooltipClass : "introjs-tooltip-min-width-custom",
			position : "left"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "codeAnimation":
			var text = "Let us consider an example to understand how arrays work within <span class='ct-code-b-yellow'>function calls</span>."; 
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "functionDec1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a declaration of the function <span class='ct-code-b-yellow'>read(int[], int)</span> with one argument of type"
							+ "<span class='ct-code-b-yellow'>int[ ]</span> array and the other of type <span class='ct-code-b-yellow'>int</span>."
							+ " <br><br>This function returns <span class='ct-code-b-yellow'>void</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "functionDec2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a declaration of the function <span class='ct-code-b-yellow'>display(int[], int)</span>  with one argument of" 
					+ " type <span class='ct-code-b-yellow'>int[ ]</span> array and the other of type <span class='ct-code-b-yellow'>int</span>."
					+ "<br><br>This function returns <span class='ct-code-b-yellow'>void</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "funScanf" + i:
		case "mainScanf":
		case "startMain":
		case "mainFunction":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "funcDef1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the definition of the function <span class='ct-code-b-yellow'>read(int[], int)</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "funcDef2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the definition of the function <span class='ct-code-b-yellow'>display(int[], int)</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mainVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "We declare an <span class='ct-code-b-yellow'>int array</span> variable of size <span class='ct-code-b-yellow'>"
							+ "4(a[4])</span> and a variable <span class='ct-code-b-yellow'>n</span> of type "
							+ "<span class='ct-code-b-yellow'>int</span>. These are called <span class='ct-code-b-yellow'>local variables</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#mainVar").addClass("check");
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "readVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "An <b>int</b> variable <span class='ct-code-b-yellow'>i</span> is declared inside "
							+ " <span class='ct-code-b-yellow'>read()</span>."; 
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "displayVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "An <b>int</b> variable <span class='ct-code-b-yellow'>i</span> is declared inside "
							+ " <span class='ct-code-b-yellow'>display()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mainPrintf":
		case "readPrintf":
		case "forPrintf" + i:
		case "displayPrintf1":
		case "displayPrintf2":
			$("#mainVar, #readVar, #displayVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "readCall":
			$("#num1").prop("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "When a function call is made to <span class='ct-code-b-yellow'>read(a, n)</span> , the"
							+ " control is transferred from <b>main()</b> to the <span class='ct-code-b-yellow'>read()</span> function.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "displayCall":
			iCount = 0;
			animationCount++;
			consoleCount++;
			i = 2;
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "When a function call is made to <br><span class='ct-code-b-yellow'>display(a, n)</span>, the"
							+ " control is transferred from <b>main()</b> to the <span class='ct-code-b-yellow'>display()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "readStep1":
			$(".introjs-helperLayer").one("transitionend", function() { 
				$("#aTransfer1").effect( "transfer", { to: $("#readArg1"), className: "ui-effects-transfer" }, 1000 , function() {
					$("#nTransfer1").effect( "transfer", { to: $("#readArg2"), className: "ui-effects-transfer" }, 1000 , function() {
						$('.introjs-tooltip').removeClass("hide");
						var text = "The <span class='ct-code-b-yellow'>base</span> address of array <span class='ct-code-b-yellow'>a[4]</span>"
									+ " is copied to array <span class='ct-code-b-yellow'>x[4]</span>. "
									+ "So, both the arrays <span class='ct-code-b-yellow'>x[4]</span> and <span class='ct-code-b-yellow'>a[4]</span>"
									+ " point to the same memory.<br> The value of <span class='ct-code-b-yellow'>n</span>. from main() is copied "
									+ "into a variable <span class='ct-code-b-yellow'>n</span> of <span class='ct-code-b-yellow'>read().</span>";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
			
		case "displayStep1":
			$(".introjs-helperLayer").one("transitionend", function() { 
				$("#aTransfer2").effect( "transfer", { to: $("#displayArg1"), className: "ui-effects-transfer" }, 1000 , function() {
					$("#nTransfer2").effect( "transfer", { to: $("#displayArg2"), className: "ui-effects-transfer" }, 1000 , function() {
						$('.introjs-tooltip').removeClass("hide");
						var text = "The <span class='ct-code-b-yellow'>base</span> address of array <span class='ct-code-b-yellow'>a[4]</span>"
									+ " is copied to array <span class='ct-code-b-yellow'>y[4]</span>. "
									+ "So, both the arrays <span class='ct-code-b-yellow'>y[4]</span> and <span class='ct-code-b-yellow'>a[4]</span>"
									+ " point to the same memory.<br> The value of <span class='ct-code-b-yellow'>n</span> from main() is copied "
									+ "into a variable <span class='ct-code-b-yellow'>n</span> of <span class='ct-code-b-yellow'>display()</span>."; 
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
			
		case "forLoop" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if(i == 1) {
					var text = "A single <span class='ct-code-b-yellow'>for loop</span> is being used here to read the elements from console and "
								+ "store it in the <span class='ct-code-b-yellow'>single dimensional array</span>.";
				} else {
					var text = "This <span class='ct-code-b-yellow'>for loop</span> prints the elements stored in the array "
								+ "<span class='ct-code-b-yellow'>y[4]</span>.";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "forInit" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<span class='ct-code-b-yellow'>i</span> is initialized to <span class='ct-code-b-yellow'>0</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#iBox" + i).addClass("blinking-white");
					if(i == 1) {
						$("#readVal1").text(0);
						tl.to("#readVal1", 0.5, {opacity: 1, onComplete: function() {
							$("#iBox" + i).removeClass("blinking-white");
							if(iCount < parseInt($("#num1").val())) {
								forLoopSteps();
							} else {
								afterFor();
							}
							$(".introjs-nextbutton").show();
						}});
					} else {
						$("#displayVal1").text(0);
						tl.to("#displayVal1", 0.5, {opacity: 1, onComplete: function() {
							$("#iBox" + i).removeClass("blinking-white");
							if(iCount < parseInt($("#num1").val())) {
								forLoopSteps();
							} else {
								afterFor();
							}
							$(".introjs-nextbutton").show();
						}});
					}
				});
			});
			break;
			
		case "forCond" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if(iCount < parseInt($("#num1").val())) {
					if (iCount == 0) {
						var text1 = 'begins'
					} else {
						var text1 = 'continues'
					}
					var text = "This statement checks the condition <span class='ct-code-b-yellow'>i < n</span>."
								+ " <ul><li>Now <b>i = "+iCount+"</b> and <b>n = "+$("#num1").val()+"</b>.</li>"
								+ " <li><span class='ct-code-b-yellow'>"+iCount+" < "+$("#num1").val()+"</span> condition evaluates to "  
								+ " <span class='ct-code-b-yellow'>true</span> and the loop " + text1 + ".</li></ul>";
				} else {
					var text = "This statement checks the condition <span class='ct-code-b-yellow'>i < n</span>."
								+ " <ul><li>Now <b>i = "+iCount+"</b> and <b>n = "+$("#num1").val()+"</b>.</li>"
								+ " <li><span class='ct-code-b-yellow'>"+iCount+" < "+$("#num1").val()+"</span> condition evaluates to "  
								+ " <span class='ct-code-b-yellow'>false</span> and the loop ends.</li></ul>";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "iInc" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				iCount++;
				$("#edit"+iCount).prop("disabled", true);
				var text = "<span class='ct-code-b-yellow'>i</span> is incremented by <span class='ct-code-b-yellow'>1</span>. <br>"
							+ " Now <span class='ct-code-b-yellow'>i = " + iCount + "</span>";
				typing(".introjs-tooltiptext", text, function() {
					$("#iBox" + i).addClass("blinking-white");
					flipEffect("#readVal1, #displayVal1", iCount, function() {
						$("#iBox" + i).removeClass("blinking-white");
						if(iCount < parseInt($("#num1").val())) {
							forLoopSteps();
						} else {
							afterFor();
						}
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
			
		case "endFor" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if(i == 1) {
					$("#readVal1").text(iCount);
				} else {
					$("#displayVal1").text(iCount);
				}
				var text = "The for-loop ends here.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "endFunc" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "When the function ends, all the local variables get destroyed and the control"
						+ " is transferred to <span class='ct-code-b-yellow'>main()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#mainHeading1").text("In main()");
					$("#arrText").text("a[4]");
					for (var t = 0; t <= 3; t++) {
						$("#arrIdx" + t).text("a[" + t + "]");
					}
					$("#arrayBox").addClass("blinking-white");
					setTimeout(function() {
						$("#arrayBox").removeClass("blinking-white");
						$("#iBox" + i).addClass("blinking-white");
						tl.to("#iBox" + i, 0.5, {opacity: 0, onComplete: function() {
							$("#iBox" + i).removeClass("blinking-white");
							$("#nBox" + i).addClass("blinking-white");
						}});
						tl.to("#nBox" + i, 0.5, {opacity: 0, onComplete: function() {
							$("#nBox" + i).removeClass("blinking-white");
							$(".introjs-nextbutton").show();
						}});
					}, 1000);
				});
			});
			break;
			
		case "animationBox":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#animationBox").removeClass("opacity00");
				if(animationCount == 1) {
					tl.to("#mainHeading1", 0.5, {opacity: 1, onComplete: function() {
						$("#mainHeading1").removeClass("opacity00");
					}});
					
					tl.to("#arrayBox", 0.5, {opacity: 1, onComplete: function() {
						$("#mainVar").addClass("blinking-white");
						$("#arrayBox").removeClass("opacity00");
					}});
					tl.to("#tr1", 0.5, {opacity: 1, onComplete: function() {
						$("#tr1").removeClass("opacity00");
					}});
					
					tl.to("#tr3", 0.5, {opacity: 1, onComplete: function() {
						$("#tr3").removeClass("opacity00");
					}});
					
					tl.to("#mainHeading2", 0.5, {opacity: 1, onComplete: function() {
						$("#mainHeading2").removeClass("opacity00");
					}});
					
					tl.to("#mainVarBox", 0.5, {opacity: 1, onComplete: function() {
						$("#mainVarBox").removeClass("opacity00");
						$('.introjs-tooltip').removeClass("hide");
						var text = "Here, 8 (2 * 4) bytes of memory is allocated to the array <span class='ct-code-b-yellow'>a</span>"
							+ " at some address. The address of the first element in the array is known as <span class='ct-code-b-yellow'>"
							+ "base address</span>.<br> 2 bytes of memory will be allocated for variable <span class='ct-code-b-yellow'>n</span>.";
						typing(".introjs-tooltiptext", text, function() {
							animationCount++;
							$(".introjs-nextbutton").show();
						});
					}});
				} else if(animationCount == 2) {
					$("#nInMain").addClass("blinking-orange");
					$("#nInMain").text($("#num1").val());
					tl.to("#nInMain", 0.5, {opacity: 1, onComplete: function() {
						$("#nInMain").removeClass("blinking-orange, opacity00");
						$('.introjs-tooltip').removeClass("hide");
						var text = "The value <span class='ct-code-b-yellow'>" + $("#num1").val() + "</span> is stored " 
									+ " in <span class='ct-code-b-yellow'>n</span>.";
						typing(".introjs-tooltiptext", text, function() {
							animationCount++;
							$(".introjs-nextbutton").show();
						});
					}});
				} else if(animationCount == 3) {
					tl.to("#boxHeading2", 0.5, {opacity: 1, onComplete: function() {
						$("#boxHeading2").removeClass("opacity00");
					}});
					
					tl.to("#readBox", 0.5, {opacity: 1, onComplete: function() {
						$("#readArg2").addClass("blinking-white");
						$("#readBox").removeClass("opacity00");
					}});
					
					tl.to("#nBox1", 0.5, {opacity: 1, onComplete: function() {
						$("#readVal2").text($("#num1").val());
						$("#nBox1").removeClass("opacity00");
					}});
					
					tl.to("#readVal2", 0.5, {opacity: 1, onComplete: function() {
						$("#readVal2").removeClass("opacity00");
						$("#readArg2").removeClass("blinking-white");
						$('.introjs-tooltip').removeClass("hide");
						var text1 = "<ul><li>The value of <span class='ct-code-b-yellow'>n</span> from <span class='ct-code-b-yellow'>main()</span>" 
									+ " method will be copied into the variable <span class='ct-code-b-yellow'>n</span> of "
									+ " <span class='ct-code-b-yellow'>read()</span>. This variable <span class='ct-code-b-yellow'>n</span> occupies"
									+ " 2 bytes of memory at some address.</li><li id='tText'></li></ul>"
						typing(".introjs-tooltiptext", text1, function() {
							$("#readArg1").removeClass("blinking-white");
							var text2 = "The array name <span class='ct-code-b-yellow'>a</span> holds the base address of the array elements" 
										+ " in memory. In this function call this base address is copied into <span class='ct-code-b-yellow'>x</span>"
										+ " which now points to <span class='ct-code-b-yellow'>a[4]</span>.</li> " 
										+ " <li>Here, array <span class='ct-code-b-yellow'>x</span> and array <span class='ct-code-b-yellow'>a</span>"
										+ " are allocated the same memory.</li>";
							typing("#tText", text2, function() {
								$("#arrayBox").addClass("blinking-orange");
								$("#arrText").delay(1000).queue(function() {
									flipEffect("#mainHeading1", "In read()", function() {
										flipEffect("#arrText", "x[4]", function() {
											flipEffect("#arrIdx1", "x[0]", function() {
												flipEffect("#arrIdx2", "x[1]", function() {
													flipEffect("#arrIdx3", "x[2]", function() {
														flipEffect("#arrIdx4", "x[3]", function() {
															$("#arrayBox").removeClass("blinking-orange");
															animationCount++;
															$(".introjs-nextbutton").show();
														});
													});
												});
											});
										});
									});
								});
							});
						});
					}});
				} else if(animationCount == 4) {
					tl.to("#iBox1", 0.5, {opacity: 1, onComplete: function() {
						$("#iBox1").removeClass("opacity00");
						$("#readVar").addClass("blinking-white");
						$('.introjs-tooltip').removeClass("hide");
						var text = "Here 2 bytes of memory is allocated to variable <span class='ct-code-b-yellow'>i</span> of"
									+ " <span class='ct-code-b-yellow'>read()</span>.";
						typing(".introjs-tooltiptext", text, function() {
							animationCount++;
							$(".introjs-nextbutton").show();
						});
					}});
				} else if(animationCount == 5) {
					$('.introjs-tooltip').removeClass("hide");
					var text = "This value is stored at <span class='ct-code-b-yellow'>x["+iCount+"]</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#arrVal" + iCount).text($('#edit'+(iCount+1)+'').val());
						$("#arrVal" + iCount).addClass("blinking-orange");
						tl.to("#arrVal" + iCount, 0.5, {opacity: 1, onComplete: function() {
							$("#arrVal" + iCount).removeClass("blinking-orange, opacity00");
							if(iCount == parseInt($("#num1").val())) {
								$("#readVal1").text($("#num1").val());
							}
							$(".introjs-nextbutton").show();
						}});
					});
				} else if(animationCount == 6) {
					tl.to("#boxHeading3", 0.5, {opacity: 1, onComplete: function() {
						$("#boxHeading3").removeClass("opacity00");
					}});
					
					tl.to("#displayBox", 0.5, {opacity: 1, onComplete: function() {
						$("#displayArg2").addClass("blinking-white");
						$("#displayBox").removeClass("opacity00");
					}});
					
					tl.to("#nBox2", 0.5, {opacity: 1, onComplete: function() {
						$("#displayVal2").text($("#num1").val());
						$("#nBox2").removeClass("opacity00");
					}});
					tl.to("#displayVal2", 0.5, {opacity: 1, onComplete: function() {
						$("#displayVal2").removeClass("opacity00");
						$("#displayVal2, #displayArg2").removeClass("blinking-white");
						$('.introjs-tooltip').removeClass("hide");
						var text1 = "<ul><li>The value of <span class='ct-code-b-yellow'>n</span> from <span class='ct-code-b-yellow'>main()</span>"
									+ " method will be copied into the variable <span class='ct-code-b-yellow'>n</span> of"
									+ " <span class='ct-code-b-yellow'>display()</span>. This variable"
									+ " <span class='ct-code-b-yellow'>n</span> occupies 2 bytes of"
									+ " memory at some address.</li><li id='tText2'></li></ul>"
						typing(".introjs-tooltiptext", text1, function() {
							$("#displayArg1").removeClass("blinking-white");
							var text2 = "The array name <span class='ct-code-b-yellow'>a</span> holds the base address of the array elements" 
										+ " in memory. In this function call this base address is copied into <span class='ct-code-b-yellow'>x</span>"
										+ " which now points to <span class='ct-code-b-yellow'>a[4]</span>.</li> " 
										+ " <li>Here, array <span class='ct-code-b-yellow'>y</span> and array <span class='ct-code-b-yellow'>a</span>"
										+ " are allocated the same memory.</li>";
							typing("#tText2", text2, function() {
								$("#arrayBox").addClass("blinking-orange");
								setTimeout(function() {
									flipEffect("#mainHeading1", "In display()", function() {
										flipEffect("#arrText", "y[4]", function() {
											flipEffect("#arrIdx1", "y[0]", function() {
												flipEffect("#arrIdx2", "y[1]", function() {
													flipEffect("#arrIdx3", "y[2]", function() {
														flipEffect("#arrIdx4", "y[3]", function() {
															$("#arrayBox").removeClass("blinking-orange");
															animationCount++;
															$(".introjs-nextbutton").show();
														});
													});
												});
											});
										});
									});
								}, 1000);
							});
						});
					}});
				} else if(animationCount == 7) {
					tl.to("#iBox2", 0.5, {opacity: 1, onComplete: function() {
						$("#iBox2").removeClass("opacity00");
						$("#displayVar").addClass("blinking-white");
						$('.introjs-tooltip').removeClass("hide");
						var text = "Here 2 bytes of memory is allocated to variable <span class='ct-code-b-yellow'>i</span> of"
									+ " <span class='ct-code-b-yellow'>display()</span>.";
						typing(".introjs-tooltiptext", text, function() {
							animationCount++;
							$(".introjs-nextbutton").show();
						});
					}});
				} else if(animationCount == 8) {
					$('.introjs-tooltip').removeClass("hide");
					var text = "The value at array index <span class='ct-code-b-yellow'>y["+iCount+"]</span> has stored in the array.";
					typing(".introjs-tooltiptext", text, function() {
						$("#arrVal" + iCount).text($('#edit2'+(iCount+1)+'').val()).addClass("blinking-orange");
						tl.to("#arrVal" + iCount, 0.5, {opacity: 1, onComplete: function() {
							$("#arrVal" + iCount).removeClass("blinking-orange, opacity00");
							if(iCount == parseInt($("#num1").val())) {
								$("#displayVal1").text($("#num1").val());
								animationCount++;
							}
							$(".introjs-nextbutton").show();
						}});
					});
				}
			});
			break;
		
		
		case "consoleId":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#consoleId").removeClass("opacity00");
				if(consoleCount == 1) {
					var text = "Enter number of elements : <span id='scanfVal1'></span>";
					typing("#runEditor1", text, function() {
						consoleCountIncStep();
					});
				} else if(consoleCount == 2) {
					var text1 = "<input id='num1' class='int-num elements' type='text'  maxlength='1'/><br>";
					$("#num1").addClass("int-num");
					typing("#scanfVal1", text1, function() {
						var text2 = "Enter an integer number."
						typing(".introjs-tooltiptext", text2, function() {
							$("#num1").addClass("blinking-orange").focus();
							consoleCount++;
							$('.elements').on("keydown", function(e) {
								$(".errMsg").remove();
								var max = $(this).attr("maxlength"); 
								
								if ($.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39]) !== -1) {
									return;
								}
								if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 52)) && ((e.keyCode < 96) || (e.keyCode > 100))) {
									e.preventDefault();
								}
								if ($(this).val().length >= max) {
									$(".introjs-tooltiptext").append("<div class='errMsg'>Please restrict the"
																+ " maximum length to 1 digit only</div>");
									e.preventDefault();
								}
							});
							
							$(".elements").on("keyup", function(e) {
								$(".errMsg").remove();
								var max = $(this).attr("maxlength");
								if ($(this).val() == "") {
									$(".introjs-nextbutton").hide();
									$(".introjs-tooltiptext").append("<div class='errMsg'>Please enter a number betwen 1 and 4.</div>");
								} else {
									$(".introjs-nextbutton").show();
								}
								if ($(".elements").val().length < 1) {
									$(".introjs-nextbutton").hide();
								}
							});
						});
					});
				} else if(consoleCount == 3) {
					var text = "Enter " + $("#num1").val() + " elements : <div id='element0'></div>";
					typing("#runEditor2", text, function() {
						consoleCountIncStep();
					});
				} else if(consoleCount == 4) {
					var text = "Enter a number between 1 and 9.";
					typing(".introjs-tooltiptext", text, function() {
						 enterValues();
					});
				} else if(consoleCount == 5) {
					$("#element" + (parseInt($("#num1").val()) - 1) + " br").remove()
					var text = "The elements in array are : <br><span id='disOutput"+iCount+"'class='ct-green-color' style='font-weight: blod'></span>";
					typing("#runEditor3", text, function() {
						consoleCountIncStep();
					});
				} else if(consoleCount == 6) {
					printValues();
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
		"typing_interval": '5',
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function getStep(element, intro, tooltipClass, position) {
	var steps = {};
	if (typeof element != 'undefined') {
		steps['element'] = element;
	}
	if (typeof intro != 'undefined') {
		steps['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		steps['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		steps['position'] = position;
	}
	return steps;
}

function consoleCountIncStep() {
	setTimeout(function() {
		consoleCount++;
		introjs.nextStep();
	}, 1000);	
}

function flipEffect(element, value, callBackFunction) {
	tl.to(element, 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		$(element).text(value);
	}});
	
	tl.to(element, 0.5, {opacity:1, rotationX: 0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function printValues() {
	introjs.refresh();
	var text = "y["+iCount+"] = "+$("#arrVal"+ iCount).text()+"<br><span id='disOutput"+ (iCount + 1 ) +"'></span>";
	typing("#disOutput" + iCount, text, function() {
		setTimeout(function() {
			introjs.nextStep();
		}, 1000);
	});
}

function enterValues() {
	var text = "Enter value for x["+iCount+"] : <input id='edit"+(iCount+1)+"' class='int-num index-element' type='text'  maxlength='1'/> " 
				+ " <br><span id='element"+(iCount+1)+"'></span>";
	typing("#element"+iCount+"", text, function() {
		$("#edit"+(iCount+1)+"").addClass("blinking-orange").focus();
		$('#edit'+(iCount+1)+'').on("keydown", function(e) {
			$(".errMsg").remove();
			var max = $(this).attr("maxlength"); 
			
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39]) !== -1) {
				return;
			}
			if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
				e.preventDefault();
			}
			
			if ($(this).val().length >= max) {
				$(".introjs-tooltiptext").append("<div class='errMsg'>Please restrict the  maximum length to 1 digit only</div>");
				e.preventDefault();
			}
			
		});
		
		$('#edit'+(iCount+1)+'').on("keyup", function(e) {
			$(".errMsg").remove();
			var max = $(this).attr("maxlength");
			
			if ($(this).val() == "") {
				$(".introjs-nextbutton").hide();
				$(".introjs-tooltiptext").append("<div class='errMsg'>Please enter a number.</div>");
			} else {
				$(".introjs-nextbutton").show();
			}
			
			if ($('#edit'+(iCount+1)+'').val().length < 1) {
				$(".introjs-nextbutton").hide();
			}
		});
	});
}

function forLoopSteps() {
	var step = 0;
	var dynamicStep = getStep("#forCond" + i, "", "", "right");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	if(i == 1) {
		var dynamicStep = getStep("#forPrintf" + i, "", "hide", "right");
		introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
		var dynamicStep = getStep("#funScanf" + i, "", "hide", "right");
		introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
		var dynamicStep = getStep("#consoleId", "", "", "left");
		introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	} else {
		var dynamicStep = getStep("#displayPrintf" + i, "", "hide", "right");
		introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
		var dynamicStep = getStep("#consoleId", "", "hide", "left");
		introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	}
	if(i == 1) {
		var dynamicStep = getStep("#animationBox", "", "", "left");
		introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	}
	var dynamicStep = getStep("#iInc" + i, "", "", "right");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
}

function afterFor() {
	var step = 0;
	var dynamicStep = getStep("#forCond" + i, "", "", "right");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	var dynamicStep = getStep("#endFor" + i, "", "", "right");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	var dynamicStep = getStep("#endFunc" + i, "", "", "right");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	if(i == 1) {
		var dynamicStep = getStep("#displayCall", "", "", "right");
		introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	}
}