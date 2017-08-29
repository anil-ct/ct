<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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

<!-- <script src="/secure/lang/c++/js/function-overloading.js" type="text/javascript"></script> -->

<!-- <script src="/secure/lang/c/js-min/cof.min.js"></script> -->

<title>generations-of-programming-languages</title>
<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-10 {
	margin-top: 10px;
}

.padding0 {
	padding: 0;
}

div, span {
	position: relative;
}

.padding5 {
	padding: 5px;
}

.display-inline-block {
	display: inline-block;
}

.user-btn {
	background-color: green;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.yellow {
	background-color: yellow;
}

.green {
	color: green;
}

.margin-bottom0 {
	margin-bottom: 0;
}

g {
	color: green;
}

y {
	color: yellow;
}

blue {
	color: #0000FF;
}

red {
	color: red;
}

orange {
	color: #BC7A00;
}

.svg-css {
	width: 100%;
	position: relative;
	height: 300px;
}

.cirlce-css {
	stroke: #ECA336;
	stroke-width: 8px;
	fill: white;
}

.svg-text-css {
	font-weight: bold;
	font-size: 15px;
}

.svg-rect-css {
	stroke: gray;
	stroke-width: 2px;
	fill: lemonchiffon;
}

.svg-line-css {
	stroke: #ECA336;
	stroke-width: 4px;
}

.popover-content {
	color: black;
	background-color: white;
}

.popover {
	width: 200px;
}

.bgcolor-lightgray {
	background-color: #E9E9E9;
}
</style>
</head>
<body>
<script type="text/javascript">
var tooltipMap = {
	"#group1" : "Use a binary code that consists of strings of only zeroes (0) and ones. (1). The use of binary code is difficult to "
		+ " learn and use. The first computers uses vacuum tubes for circuitry and magnetic drums for memory.",
	"#group2" : "Uses mnemonics code that consists of very short words for commands. Assembly language programs need to be converted into"
		+ " machine language by an assembler before it can be run. The vacuum tubes were replaced by transistors since they are more superior, smaller, faster, cheaper, " 
		+ " energy efficient and more reliable.",
	"#group3" : "Third Generation Languages also refereed to as high – level languages introduced data structures and control structures"
		+ "can be platform independent, meaning that code written for one system will work on another. To convert a 3rd generation program into object code"
		+ " requires a Compiler or an Interpreter.",
	"#group4" : "Fourth Generation language is designed to be closer to natural language than a Third Generation."
		+ " Languages for accessing databases are often described as Fourth Generation languages."
		+ " Standard ML, Lisp, SQL and visual basic are example of Fourth Generation language",
	"#group5" : "Fifth Generation Languages are basically an outgrowth of artificial intelligence research from the 1980s. The approach is to build a program"
		+ " that implements a specific algorithm to solve problems.",
};

var typingSpeed = 5;


$(document).ready(function(){
	$("rect, circle, line, text").hide();
	
	animation("#group1", function() {
		$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='firstGenCode()'>Next &#8594;</span></div>");
		console.log("@@@@@@@@@@@");
	});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
});

function arrowReveal(lineId, callBackFunction) {
	var x2 = $(lineId).attr('x2');
	var y2 = $(lineId).attr('y2');
	$(lineId).attr('x2', $(lineId).attr('x1'));
	$(lineId).attr('y2', $(lineId).attr('y1'));
	$(lineId).show();
	TweenMax.to(lineId, 1, {
		attr: {
			x2: x2,
			y2: y2
	},
		onComplete: function () {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
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

function animation(groupId, callBackFunction) {
	$(groupId).find("rect, text:eq(1), circle").show();
	arrowReveal($(groupId).find("line:eq(" + ($(groupId).find("line").length == 2 ? 1 : 0) + ")"), function() {
		$(groupId).find("text:eq(0)").show().attr("class", "svg-text-css animated fadeIn").one("animationend", function() {
			$(groupId).find("text:eq(0)").attr("class", "svg-text-css");
			customPopover($(groupId).find("rect"), "bottom", tooltipMap[groupId], function() {
				if (typeof callBackFunction === 'function') {
					callBackFunction();
				}
			});	
		});
		
		
	});
}


function customPopover(selector, position, text, callBackFunction) {
	$(selector).popover({
		placement: position,
		html: true,
		trigger: 'focus',
		container : $("svg").parent(),
		content: '<div class="customPopover">' + text + '</div>'
	}).popover('show');
	
	typing($(".customPopover:last"), text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function arrowReveal(lineId, callBackFunction) {
	var x2 = $(lineId).attr('x2');
	var y2 = $(lineId).attr('y2');
	$(lineId).attr('x2', $(lineId).attr('x1'));
	$(lineId).attr('y2', $(lineId).attr('y1'));
	$(lineId).show();
	TweenMax.to(lineId, 1, {
		attr: {
			x2: x2,
			y2: y2
	},
		onComplete: function () {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
	 	}
	});
}

function firstGenCode() {
	$('.user-btn').remove();
	$(".customPopover:last").append("<br><div>Example:</div><div class='text-center' style='font-family: monospace; background-color: lightyellow;'><div>10101010011000101</div> <div>10011010100000010</div> <div>11111111101000101</div></div>");
	$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='progressFirstGen()'>Next &#8594;</span></div>");
}

function progressFirstGen() {
	$('.user-btn').remove();
	arrowReveal($("#group1").find("line:eq(0)"), function() {
		animation("#group2", function() {
			$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='secondGenCode()'>Next &#8594;</span></div>");
		});
	});
}

function secondGenCode() {
	$('.user-btn').remove();
	$(".customPopover:last").append("<br><div>Example:</div><div class='text-center' style='font-family: monospace; background-color: lightyellow;'>"
			+ " <div><span style='color: #0000FF;'>LDA</span> <span style='color: #666666;'>34</span></div>"
			+ " <div><span style='color: #0000FF;'>ADD</span> <span style='color: #408080;'>#1</span></div>"
			+ " <div><span style='color: #880000;'>STO</span> <span style='color: #666666;'>34</span></div></div>");
	$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='progressSecondGen()'>Next &#8594;</span></div>");
}

function progressSecondGen() {
	$('.user-btn').remove();
	arrowReveal($("#group2").find("line:eq(0)"), function() {
		animation("#group3", function() {
			$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='thirdGenCode()'>Next &#8594;</span></div>");
		});
	});
}

function thirdGenCode() {
	$('.user-btn').remove();
	$(".customPopover:last").append("<br><div>Example:</div><div style='font-family: monospace; background-color: lightyellow; padding: 5px;'>"
			+ " <div><span style='color: #B00040;'>int</span> x = 3;</div>"
			+ " <div><span style='color: #B00040;'>int</span> y = 5;</div>"
			+ " <div><span style='color: #008000;'>System</span>.out.println(x);</div></div>");
	$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='progressThirdGen()'>Next &#8594;</span></div>");
}

function progressThirdGen() {
	$('.user-btn').remove();
	arrowReveal($("#group3").find("line:eq(0)"), function() {
		animation("#group4", function() {
			$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='fourthGenCode()'>Next &#8594;</span></div>");
		});
	});
}

function fourthGenCode() {
	$('.user-btn').remove();
	$(".customPopover:last").append("<br><div>Example:</div><div style='font-family: monospace; background-color: lightyellow; padding: 5px;'>"
			+ " <div><span style='color: #008000;'> SELECT </span> name, id, salary </div><span style='color: #008000;'> FROM </span> employee <span style='color: #008000;'> WHERE </span><br> id = 9;</div>");
	$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='progressFourthGen()'>Next &#8594;</span></div>");
}

function progressFourthGen() {
	$('.user-btn').remove();
	arrowReveal($("#group4").find("line:eq(0)"), function() {
		animation("#group5", function() {
			$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='restart()'>Next &#8594;</span></div>");
		});
	});
}

function restart() {
	$('.user-btn').remove();
	$('.next-btn').parents(".popover").remove();
	$("#restart").css("opacity", "1").popover({
		placement: "right",
		html: true,
		trigger: 'focus',
		content: 'Click to restart.'
	}).popover('show').next().addClass("animated bounceInDown");
	$("#restart").next().css("width", "105px");
}

</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Generations of Programming Languages</h4>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<svg class="svg-css">
		<g id="group1">
			<line class="svg-line-css" x1 = "10%" y1 = "50%" x2 = "30%" y2= "50%"></line>
			<circle class="cirlce-css" cx="10%" cy="50%" r="1%"></circle>
			<text x="5.5%" y="20%" class='svg-text-css'>First Generation</text>
			<line class="svg-line-css" x1 = "10%" y1 = "47%" x2 = "10%" y2= "25%"></line>
			<rect class="svg-rect-css" width="6.5%" height="9%" x="7%" y="55%" rx="4" ry="4"></rect>
			<text x="7.3%" y="61%" class='svg-text-css'>1942-1956</text>
		</g>
		
		<g id="group2">
			<line class="svg-line-css" x1 = "30%" y1 = "50%" x2 = "50%" y2= "50%"></line>
			<circle class="cirlce-css" cx="30%" cy="50%" r="1%"></circle>
			<text x="25%" y="20%" class='svg-text-css'>Second Generation</text>
			<line class="svg-line-css" x1 = "30%" y1 = "47%" x2 = "30%" y2= "25%"></line>
			<rect class="svg-rect-css" width="6.5%" height="9%" x="27%" y="55%" rx="4" ry="4"></rect>
			<text x="27.3%" y="61%" class='svg-text-css'>1956-1963</text>
		</g>
		
		<g id="group3">
			<line class="svg-line-css" x1 = "50%" y1 = "50%" x2 = "70%" y2= "50%"></line>
			<circle class="cirlce-css" cx="50%" cy="50%" r="1%"></circle>
			<text x="45.5%" y="20%" class='svg-text-css'>Third Generation</text>
			<line class="svg-line-css" x1 = "50%" y1 = "47%" x2 = "50%" y2= "25%"></line>
			<rect class="svg-rect-css" width="6.5%" height="9%" x="47%" y="55%" rx="4" ry="4"></rect>
			<text x="47.3%" y="61%" class='svg-text-css'>1964-1971</text>
			
		</g>
		
		<g id="group4">
			<line class="svg-line-css" x1 = "70%" y1 = "50%" x2 = "90%" y2= "50%"></line>
			<circle class="cirlce-css" cx="70%" cy="50%" r="1%"></circle>
			<text x="65%" y="20%" class='svg-text-css'>Fourth Generation</text>
			<line class="svg-line-css" x1 = "70%" y1 = "47%" x2 = "70%" y2= "25%"></line>
			<rect class="svg-rect-css" width="8.5%" height="9%" x="66%" y="55%" rx="4" ry="4"></rect>
			<text x="66.5%" y="61%" class='svg-text-css'>1971-present</text>
		</g>
		
		<g id="group5">
			<line class="svg-line-css" x1 = "90%" y1 = "47%" x2 = "90%" y2= "25%"></line>
			<circle class="cirlce-css" cx="90%" cy="50%" r="1%"></circle>
			<text x="85.5%" y="20%" class="svg-text-css">Fifth Generation</text>
			<rect class="svg-rect-css" width="10%" height="9%" x="85%" y="55%" rx="4" ry="4"></rect>
			<text x="85.5%" y="61%" class="svg-text-css">present-beyond</text>
		</g>
		
	</svg>
</div>
</body>
</html>