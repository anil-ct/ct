<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>cpp-language-timeline</title>

<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/animate.css">
<!-- <link rel="stylesheet" href="/css/introjs-ct.css"> -->

<!-- <script type="text/javascript" src="/js/intro.js"></script> -->
<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<!-- <script src="/secure/lang/c/js-min/clt.min.js"></script> -->
<script src="/secure/lang/cpp/js/c++-language-timeline.js" type="text/javascript"></script>
<style type="text/css">
.circle-css {
	stroke-width: 8;
	stroke: #eca336;
}

.rect-css {
	stroke: gray;
	stroke-width: 2;
}

.text-css {
	font-family: monospace;
	font-weight: bold;
	font-size: 80%;
}

.line-css {
	stroke: orange;
	stroke-width: 4;
}
/* developer-div {
	bottom: 200px;
	position: relative;
	right: 44px;
	width: 110px;
	height: 150px;
	text-align: center;
}

.li1 .developer-div, .li3 .developer-div, .li4 .developer-div {
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 20px;
}

.developer-name {
	font-weight: bold;
	font-size : 13px
} */

#img1 {
	width: 4%;
}

#img2 {
	width: 4%;
	top:380px;
}

#img3 {
	width: 4%;
}

#customPopover {
	font-size: 14px;
}

.popover-content {
	color: black;
	background-color: #f9e7c5;
}

.bgColor-lightgray {
	background-color: #E9E9E9;
}

.popover {
	width: 200px;
}

.next-btn {
	background-color: green !important;
	border-radius: 3px !important;
	color: white !important;
	font: 11px sans-serif;
	padding: 3px !important;
}
.ct-code-b-green {
	color : green;
	font-weight: bold;
}

.customPopover > ul {
	padding-left: 10px;
}
</style>

<script type="text/javascript">
$(document).ready(function() {
	readPrintStringUsingGetsPutsReady();
});
</script>
</head>
<body>
	<div class="text-center">
		<h4>
			<span id= "title" class="label ct-demo-heading">Evolution of C++ Programming Language</span>
		</h4>
	</div>
	
		<div id='totalDiv'> 
			<div class='developer-div'>
				<!-- <img src="../images/Kristen-Nygaard-SBLP-1997-head.png" id='img1' class="" >
				<img src="../images/Dennis_Ritchie_2011.jpg" id='img2' class="" style="top :385px;">
				<img src="../images/Bjarne-stroustrup.jpg" id='img3' class=''> -->
			</div> 
			<svg width='100%' height='500'>
				<!-- <image  width='50px' height='50px' x='100' y='100' xlink:href='../images/Kristen-Nygaard-SBLP-1997-head.png'></image> -->
			
				<g>
					<circle class="circle-css " id="circle1" fill="white" r="1%" cy="37%" cx="10%" ></circle>
					<line class="line-css " id="line1" y2="28%" y1="35%" x2="10%" x1="10%">
				</g>
				<g>
					<circle class="circle-css " id="circle2" fill="white" r="1%" cy="90%" cx="10%"></circle>
					<line class="line-css " id="line2" x1="10%" x2="10%" y1="88%" y2="81%">
				</g>
				<g id="simulaGroup">
					<rect class="rect-css " id="rect1" x="7.5%" y="42%" rx="5" ry="5" width="80" height="26" fill="lemonchiffon"/>
					<text id="text1" class="text-css " y="45.3%" x="9%">Simula</text>
					<text  class="text-css " x="6.5%" y="25.3%" id="kristen">Kristen-Nygaard</text>
					<image  width='50px' height='50px' x='8.2%' y='12%' id='img1' xlink:href='../images/Kristen-Nygaard-SBLP-1997-head.png'></image>
				</g>
			
			<g>
				<circle class="circle-css " id="circle3" fill="white" r="1%" cy="66%" cx="36%"></circle>
				<line class="line-css " id="line3" y2="57%" y1="64%" x2="36%" x1="36%">
			</g>
			<g id="simulaGroup1">
				<rect class="rect-css " id="rect2" x="7.5%" y="95%" rx="5" ry="5" width="5%" height="5%" fill="lemonchiffon"/>
				<text id="text2" class="text-css " y="98.4%" x="8.8%">1972</text>
				<text  class="text-css " x="6.8%" y="79.4%" id='dennis'>Dennis Ritchie</text>
				<image  width='50px' height='50px' x='8.2%' y='66%' id='img2' xlink:href='../images/Dennis_Ritchie_2011.jpg'></image>
			</g>
			
			<g id="simulaGroup2">
				<rect class="rect-css " id="rect3" x="31.9%" y="70%" rx="5" ry="5" width="9%" height="5%" fill="lemonchiffon"/>
				<text id="text3" class="text-css " y="73.3%" x="32.8%">C with Classes</text>
				<text  class="text-css " x="31.9%" y="55.3%" id='bjarne'>Bjarne-Stroustrup</text>
				<image  width='50px' height='50px' x='34%' y='42%' id='img3' xlink:href='../images/Bjarne-stroustrup.jpg'></image>
			</g>
			
			<g id="simulaGroup3">
				<rect class="rect-css " id="rect4" x="60.5%" y="70%" rx="5" ry="5" width="5%" height="5%" fill="lemonchiffon"/>
				<text id="text4" class="text-css " y="73.3%" x="61.7%">1983</text>
				<text id="text5" class="text-css " x="62%" y="39.3%" style="font-size: 150%;">C++</text>
			</g>
			
			<g id="simulaGroup4">
				<rect class="rect-css " id="rect5" x="87.5%" y="70%" rx="5" ry="5" width="5%" height="5%" fill="lemonchiffon"/>
				<text id="text6" class="text-css " y="73.3%" x="88.9%">1998</text>
				<text id="text7" class="text-css " x="89%" y="39.3%" style="font-size: 150%;">C++98</text>
			</g>
			
			<g>
				<circle class="circle-css " id="circle4" fill="white" r="1%" cy="66%" cx="63%"></circle>
				<line class="line-css " id="line4" y2="57%" y1="64%" x2="63%" x1="63%">
			</g>
			
			<g>
				
				<circle class="circle-css " id="circle5" fill="white" r="1%" cy="66%" cx="90%"></circle>
				<line class="line-css " id="line5" x1="90%" x2="90%" y1="64%" y2="57%">
			</g>
				<line id="line6" class="line-css " x1="11%" x2="35%" y1="37%" y2="66%"></line>
				<line id="line7" class="line-css " y2="66%" y1="89%" x2="35%" x1="11%"></line>
				<line id="line8" class="line-css " x1="37%" x2="62%" y1="66%" y2="66%"></line>
				<line id="line9" class="line-css " y2="66%" y1="66%" x2="89%" x1="64%"></line>
		</svg>
	</div>
	
	<div class="button col-xs-12 text-center " id="button">
		<span  class="btn btn-warning glyphicon glyphicon-refresh" id='restartBtn' style='margin-top: 4px; opacity: 0;'>Restart</span>
	</div>
</body>
</html>