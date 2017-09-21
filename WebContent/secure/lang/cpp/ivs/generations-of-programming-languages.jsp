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

<script type="text/javascript" src="../js-min/gopl.min.js"></script>

<!-- <script src="../js/generations-of-programming-languages.js" type="text/javascript"></script> -->
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

$(document).ready(function() {
	generationsOfProgrammingLanguagesReadyFun();
});


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
				<li id="li1" class="opacity00">
					<a href='https://en.wikipedia.org/wiki/Programming_language' target='_blank'>Programming Language</a> is a formal language that specifies a set
					 of rules for instructing a computer to perform specific tasks.
				</li>
				<li id="li2" class="opacity00">
				 	Programming languages differ from natural languages. Natural languages are used for interaction between
				 	 humans, while programming languages allow humans to communicate instructions to machines. 
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