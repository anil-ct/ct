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
</style>
</head>
<body>
<script type="text/javascript">
$(document).ready(function(){
	$("rect, circle, line, text").hide();
});

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

</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Generations of Programming languages</h4>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<svg class="svg-css">
		<g>
			<line class="svg-line-css" x1 = "10%" y1 = "50%" x2 = "30%" y2= "50%"></line>
			<circle class="cirlce-css" cx="10%" cy="50%" r="1%"></circle>
			<text x="5.5%" y="20%" class='svg-text-css'>First Generation</text>
			<line class="svg-line-css" x1 = "10%" y1 = "47%" x2 = "10%" y2= "25%"></line>
			<rect class="svg-rect-css" width="6.5%" height="9%" x="7%" y="55%" rx="4" ry="4"></rect>
			<text x="7.3%" y="61%" class='svg-text-css'>1942-1956</text>
		</g>
		
		<g>
			<line class="svg-line-css" x1 = "30%" y1 = "50%" x2 = "50%" y2= "50%"></line>
			<circle class="cirlce-css" cx="30%" cy="50%" r="1%"></circle>
			<text x="25%" y="20%" class='svg-text-css'>Second Generation</text>
			<line class="svg-line-css" x1 = "30%" y1 = "47%" x2 = "30%" y2= "25%"></line>
			<rect class="svg-rect-css" width="6.5%" height="9%" x="27%" y="55%" rx="4" ry="4"></rect>
			<text x="27.3%" y="61%" class='svg-text-css'>1956-1963</text>
		</g>
		
		<g>
			<line class="svg-line-css" x1 = "50%" y1 = "50%" x2 = "70%" y2= "50%"></line>
			<circle class="cirlce-css" cx="50%" cy="50%" r="1%"></circle>
			<text x="45.5%" y="20%" class='svg-text-css'>Third Generation</text>
			<line class="svg-line-css" x1 = "50%" y1 = "47%" x2 = "50%" y2= "25%"></line>
			<rect class="svg-rect-css" width="6.5%" height="9%" x="47%" y="55%" rx="4" ry="4"></rect>
			<text x="47.3%" y="61%" class='svg-text-css'>1964-1971</text>
			
		</g>
		
		<g>
			<line class="svg-line-css" x1 = "70%" y1 = "50%" x2 = "90%" y2= "50%"></line>
			<circle class="cirlce-css" cx="70%" cy="50%" r="1%"></circle>
			<text x="65%" y="20%" class='svg-text-css'>Fourth Generation</text>
			<line class="svg-line-css" x1 = "70%" y1 = "47%" x2 = "70%" y2= "25%"></line>
			<rect class="svg-rect-css" width="8.5%" height="9%" x="66%" y="55%" rx="4" ry="4"></rect>
			<text x="66.5%" y="61%" class='svg-text-css'>1971-present</text>
		</g>
		
		<g>
			<circle class="cirlce-css" cx="90%" cy="50%" r="1%"></circle>
			<text x="85.5%" y="20%" class="svg-text-css">Fifth Generation</text>
			<line class="svg-line-css" x1 = "90%" y1 = "47%" x2 = "90%" y2= "25%"></line>
			<rect class="svg-rect-css" width="10%" height="9%" x="85%" y="55%" rx="4" ry="4"></rect>
			<text x="85.5%" y="61%" class="svg-text-css">present-beyond</text>
		</g>
		
	</svg>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>