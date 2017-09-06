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
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>

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

#topDiv {
    border: 1px solid gray;
    border-radius: 8px;
    padding: 10px;
}

.padding5 {
	padding: 5px;
}

.display-inline-block {
	display: inline-block;
}

.user-btn {
	background-color: green;
	margin: 0 !important;
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
.monospace {
	font-family: monospace;
}

.margin-5 {
	margin-top: 5px;
}

.lite-red {
	color: #880000;
}

.lite-blue {
	color: seagreen;
}
</style>
</head>
<body>
<script type="text/javascript">
var tooltipMap = {
	"#group1" : "<ul><li>Use a <b class='monospace lite-red'>binary code</b> that consists of strings of only <g><b>0</b></g>'s and <g><b>1</b></g>'s.</li></ul>",
	"#group2" : "<ul><li>Uses <b><a href='https://en.wikipedia.org/wiki/Mnemonic' target='_blank'  class='monospace'>mnemonics</a></b> code that consists of very short words for commands.</li> <li>Assembly language programs need to be converted into"
		+ " machine language by an <b class='monospace lite-blue'>assembler</b> before it can be run.</li></ul>",
	"#group3" : "<ul><li>Third Generation Languages also refereed to as<br> <b class='monospace lite-red'>high–level languages</b> introduced data structures and control structures "
		+ " can be platform independent, meaning that code written for one system will work on another.</li> <li>To convert a 3rd generation program into object code"
		+ " requires a <b class='monospace lite-red'>Compiler</b> or an <b class='monospace lite-red'>Interpreter</b>.</li> <li>Examples of 3rd generation programming languages are: <b class='monospace lite-blue'>Fortran</b>, <b class='monospace lite-blue'>C</b>, <b class='monospace lite-blue'>python</b>.</li></ul>",
	"#group4" : "<ul><li>Fourth Generation language is designed to be closer to natural language than a Third Generation.</li>"
		+ " <li>Languages for accessing <b class='monospace lite-red'>databases</b> are often described as Fourth Generation languages.</li>"
		+ " <li>Standard <b class='monospace lite-blue'>ML</b>, <b class='monospace lite-blue'>Lisp</b>, <b class='monospace lite-blue'>SQL</b> are example of Fourth Generation language.</li></ul>",
	"#group5" : "<ul><li>Fifth Generation Languages are basically an outgrowth of <b style='font-size:95%;' class='monospace'><a href='https://en.wikipedia.org/wiki/Artificial_intelligence' target='_blank'>artificial intelligence</a></b> research from the 1980's.</li> <li>The approach is to build a program"
		+ " that implements a specific algorithm to solve problems.</li></ul>",
};

var typingSpeed = 5;


$(document).ready(function(){
	$("rect, circle, line, text").hide();
	
	/* animation("#group1", function() {
		$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='firstGenCode()'>Next &#8594;</span></div>");
	}); */
	
	revealText();
	
	
	$('#restart').click(function() {
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

function revealText() {
	$("#li1").fadeTo(500, 1, function () {
		$("#li2").fadeTo(500, 1, function () {
		
		});
	});
}

function timelineAnimation() {
	$('.user-btn').remove();
	animation("#group1", function() {
		$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='firstGenCode()'>Next &#8594;</span></div>");
	});
}

function firstGenCode() {
	$('.user-btn').remove();
	$(".customPopover:last").append("<br><div><span class='lite-red'>Example</span>:</div><div class='text-center monospace' style='background-color: lightyellow;'><div>10101010011000101</div> <div>10011010100000010</div> <div>11111111101000101</div></div><div class='monospace margin-5'><b>Machine Code only</b>.</div>");
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
	$(".customPopover:last").append("<br><div><span class='lite-red'>Example</span>:</div><div class='text-center monospace' style='background-color: lightyellow;'>"
			+ " <div><span style='color: #0000FF;'>LDA</span> <span style='color: #666666;'>34</span></div>"
			+ " <div><span style='color: #0000FF;'>ADD</span> <span style='color: #408080;'>#1</span></div>"
			+ " <div><span style='color: #880000;'>STO</span> <span style='color: #666666;'>34</span></div></div><div class='monospace margin-5'><b>Assembly Code</b></div>");
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
	$(".customPopover:last").append("<br><div><span class='lite-red'>Example</span>:</div><div style='font-family: monospace; background-color: lightyellow; padding: 5px;'>"
			+ " <div> x = x + 1;</div></div>");
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
	$(".customPopover:last").append("<br><div><span class='lite-red'>Example</span>:</div><div style='font-family: monospace; background-color: lightyellow; padding: 5px;'>"
			+ " <div><span style='color: #008000;'> SELECT </span> id, name, salary </div><span style='color: #008000;'> FROM </span> employee <span style='color: #008000;'> WHERE </span><br> id = 9;</div>");
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
	$("body").scrollTo($("#demoTitle"), 500, function() {
		$("#restart").css("opacity", "1").popover({
			placement: "right",
			html: true,
			trigger: 'focus',
			content: 'Click to restart.'
		}).popover('show').next().addClass("animated bounceInDown");
		$("#restart").next().css("width", "105px");
	});
}

</script>
<div class='text-center margin-top-10'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Generations of Programming Languages</h4>
</div>
<div class="col-xs-12 text-center margin-top-10">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-5">
	<div id="topDiv">
		<div id="typingDiv1">
			<ul style="font-family: monospace;">
				<li id="li1" class="opacity00"><b><a href='https://en.wikipedia.org/wiki/Programming_language' target='_blank'>Programming Language</a></b> is a formal language that specifies a set of rules for instructing a computer to perform specific tasks.</li>
				<li id="li2" class="opacity00"> Programming languages <b class='lite-blue'>differ from natural languages</b> in that natural languages are only used for interaction between people, while programming languages also allow humans to communicate instructions to machines. 
					&emsp; <span class='user-btn introjs-button' onclick='timelineAnimation()'>Next &#8594;</span><br>
				</li>
			</ul>
		</div>
	</div>
</div>
<div class="col-xs-12 text-center">
	<svg class="svg-css">
		<g id="group1">
			<line class="svg-line-css" x1 = "10%" y1 = "50%" x2 = "30%" y2= "50%"></line>
			<circle class="cirlce-css" cx="10%" cy="50%" r="1%"></circle>
			<text text-anchor="middle" x="10%" y="20%" class='svg-text-css'>First Generation</text>
			<line class="svg-line-css" x1 = "10%" y1 = "47%" x2 = "10%" y2= "25%"></line>
			<rect class="svg-rect-css" width="6.5%" height="9%" x="7%" y="55%" rx="4" ry="4"></rect>
			<text text-anchor="middle" x="10.3%" y="61%" class='svg-text-css'>1940-1956</text>
		</g>
		
		<g id="group2">
			<line class="svg-line-css" x1 = "30%" y1 = "50%" x2 = "50%" y2= "50%"></line>
			<circle class="cirlce-css" cx="30%" cy="50%" r="1%"></circle>
			<text text-anchor="middle" x="30%" y="20%" class='svg-text-css'>Second Generation</text>
			<line class="svg-line-css" x1 = "30%" y1 = "47%" x2 = "30%" y2= "25%"></line>
			<rect class="svg-rect-css" width="6.5%" height="9%" x="27%" y="55%" rx="4" ry="4"></rect>
			<text text-anchor="middle" x="30.3%" y="61%" class='svg-text-css'>1956-1963</text>
		</g>
		
		<g id="group3">
			<line class="svg-line-css" x1 = "50%" y1 = "50%" x2 = "70%" y2= "50%"></line>
			<circle class="cirlce-css" cx="50%" cy="50%" r="1%"></circle>
			<text text-anchor="middle" x="50%" y="20%" class='svg-text-css'>Third Generation</text>
			<line class="svg-line-css" x1 = "50%" y1 = "47%" x2 = "50%" y2= "25%"></line>
			<rect class="svg-rect-css" width="6.5%" height="9%" x="47%" y="55%" rx="4" ry="4"></rect>
			<text text-anchor="middle" x="50.2%" y="61%" class='svg-text-css'>1964-1971</text>
			
		</g>
		
		<g id="group4">
			<line class="svg-line-css" x1 = "70%" y1 = "50%" x2 = "90%" y2= "50%"></line>
			<circle class="cirlce-css" cx="70%" cy="50%" r="1%"></circle>
			<text text-anchor="middle" x="70%" y="20%" class='svg-text-css'>Fourth Generation</text>
			<line class="svg-line-css" x1 = "70%" y1 = "47%" x2 = "70%" y2= "25%"></line>
			<rect class="svg-rect-css" width="8.5%" height="9%" x="66%" y="55%" rx="4" ry="4"></rect>
			<text text-anchor="middle" x="70.2%" y="61%" class='svg-text-css'>1971-present</text>
		</g>
		
		<g id="group5">
			<line class="svg-line-css" x1 = "90%" y1 = "47%" x2 = "90%" y2= "25%"></line>
			<circle class="cirlce-css" cx="90%" cy="50%" r="1%"></circle>
			<text text-anchor="middle" x="90%" y="20%" class="svg-text-css">Fifth Generation</text>
			<rect class="svg-rect-css" width="10%" height="9%" x="85%" y="55%" rx="4" ry="4"></rect>
			<text text-anchor="middle" x="90.2%" y="61%" class="svg-text-css">present-beyond</text>
		</g>
		
	</svg>
</div>
</body>
</html>