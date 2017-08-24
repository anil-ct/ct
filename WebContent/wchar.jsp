<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>wchar</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<style type="text/css">
.margin-top-10 {
	margin-top: 10px;
}

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-30 {
	margin-top: 30px;
}

#totalDiv {
	border: 1px solid gray;
	border-radius: 8px;
	min-height: 115px;
	max-height: 200px;
	padding: 10px;
	font-family: monospace;
}

#rightDiv1 {
	border: 1px solid gray;
	border-radius: 6px;
	height: 110px;
}

#rightDiv2 {
	border: 1px solid gray;
	border-radius: 6px;
	height: 130px;
}

.padding0 {
	padding: 0;
}

.margin-bottom0 {
	margin-bottom: 0;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 10000001 !important;
	background-color: #ff0066;
	font-weight: bold;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.display-inline-block {
	display: inline-block;
}

.relative {
	position: relative;
}

pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
	font-family: monospace;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

#outputDiv {
	padding: 0;
	z-index: 9999999;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	background-color: darkgray;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	font-size: 13px;
	height: 123px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 5px;
}
</style>
</head>
<body>
<script type="text/javascript">
var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
$(document).ready(function() {
	introGuide();
	$('#restart').click(function() {
		location.reload();
	});
	
	$("#wcharVal").on("click keydown keyup", function(e) {
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
		
		if ($(this).text().length > max) {
			e.preventDefault();
		}
	});
});

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#totalDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#codeDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#wchar",
					intro : "",
					position : "right"
				},{
			 		element : "#count1",
					intro : "",
					tooltipClass : "hide"
				},{
					element : "#outputDiv",
					intro : "",
					position : "top",
			   },{
			 		element : "#count2",
					intro : "",
					tooltipClass : "hide"
				},{
					element : "#outputDiv",
					intro : "",
					position : "top",
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
		case "totalDiv":
			$('.introjs-nextbutton').hide();
			$("#li1").fadeTo(300, 1, function () {
				$("#li2").fadeTo(300, 1, function () {
					$("#li3").fadeTo(300, 1, function () {
						setTimeout(function(){
							introjs.nextStep();
						}, 1000);
					});
				});
			});
		break;
		case "codeDiv":
			$("#codeDiv").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider a sample program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "wchar":
			$("#wchar").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "initialize the wide character w with CT.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "count1":
			$("#count1").removeClass("opacity00");
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
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			if (introjs._currentStep == 4) {
				introjs.refresh();
				$("#outputDiv").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Result of the wide character value.";
					typing($(".introjs-tooltiptext"), text, function() {
						var text = "Wide character value = 17236";
						$("#body").append("<div></div>");
						typing($("#body > div:last-child"), text, function() {
							//$("#body > div:last-child").append("<div class='display-inline-block' id='charVal'><input id='inputChar' maxlength='1' class='input-char' tabindex='0'/></div>");
								$('.introjs-nextbutton').show();
						});
					});
				}); 
			} else if (introjs._currentStep == 6) {
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Result of the size of the wide char.";
					typing($(".introjs-tooltiptext"), text, function() {
						var text = "Size of the wide char = 4";
						$("#body").append("<div></div>");
						typing($("#body > div:last-child"), text, function() {
							//$("#body > div:last-child").append("<div class='display-inline-block' id='charVal'><input id='inputChar' maxlength='1' class='input-char' tabindex='0'/></div>");
								$('.introjs-nextbutton').show();
						});
					});
				}); 
			}
		break;
		case "count2":
			$("#count2").removeClass("opacity00");
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
	
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		introjs.refresh();
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
			return;
		}
		
		if (e.altKey && e.keyCode == 77) {
			$(selector).val($(selector).attr("originalText"));
		}
		
		if ($(this).val() == $(selector).attr("originalText")) {
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
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
</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>wchar_t</h4>
</div>
<div class="col-xs-offset-1 col-xs-10">
	<div id="totalDiv" class="margin-top-20">
		<div id="typingDiv1">
			<ul>
				<li id="li1" class="opacity00">
					Wide character <b style='color:green'>wchar_t</b> is a data type that has a size greater than 8-bit character.
					This datatype occupies "2 or 4" bytes depending on platform considerations.
				</li>
				<li id="li2" class="opacity00">
					Mostly the wchar_t datatype is used when international languages like Chinese, Japanese are used.
				</li>
				<li id="li3" class="opacity00">
					Declaration of wide character variable can be done in the following way:<br>
					<b style='color:green'>wchar_t wideString;</b>
				</li>
			</ul>	
		</div>
	</div>
</div>			
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-1 col-xs-5">
		<div id="codeDiv" class="opacity00"><pre class="creampretab">#include &lt;iostream&gt;
using namespace std;
int main() {
  <span id="wchar" class="opacity00">wchar_t w = 'CT';</span>
  <span id="count1" class="opacity00">cout << "Wide character value = " << w << endl;</span>
  <span id="count2" class="opacity00">cout << "Size of the wide char = " << sizeof(w) << endl;</span>
}</pre>
		</div>
	</div>
	<div class="col-xs-5">
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body"></div>
		</div>
	</div>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>