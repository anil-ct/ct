<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>

<script src="/secure/lang/c++/js/functions-with-arrays.js" type="text/javascript"></script>

<!-- <script src="/secure/lang/c/js-min/fwa.min.js" type="text/javascript"></script> -->
<title>Functions with Arrays</title>
<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.center {
	margin-left: auto !important;
	margin-right: auto !important;
	display: block;
}

.output-console-body {
	min-height: 160px;
	padding: 15px;
	white-space: initial;
}

.output-console {
	margin: 0;
}

.creampretab4 {
	font-size: 12px;
	-moz-tab-size: 4;
	tab-size: 4;
	background-color: lavender !important;
	line-height: 1.75;
}

#outputDiv {
	margin-top: 45px;
}

.introjs-tooltip {
	min-width: 300px;
}

.blinking-white {
	animation-name: blink-border-background-white ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-white { 
	50% {
		border-color: white;
		background: white;
	}
}

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 1s ;
	animation-iteration-count: 1s;
	animation-direction: alternate ;
	position: relative;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: orange;
		background: orange;
	}
}

table {
	margin-top: 20px;
	font-family: monospace;
}

.int-num {
	border-width: 0;
	width: 8%;
	background-color: black;
}

.errMsg {
	color: red;
	font-family: monospace;
}

.ui-effects-transfer {
    background-color: blue;
    z-index: 99999999 !important;
}

.introjs-fixParent {
	position: relative !important;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.ct-green-color {
	color: green;
}
</style>
</head>
<body>
	<div class="text-center margin-top-20">
		<h1 id="heading" class="label ct-demo-heading text-center">Functions with Arrays</h1>
	</div>
	<div id="mainDiv" class="col-xs-12" style="margin-top: 30px;">
		<div class="col-xs-offset-1 col-xs-5" id="codeBox">
			<pre id="codeAnimation" class='creampretab4 box-border'>
#include&lt;iostream&gt;
using namespace std;
<span id="functionDec1">void <span class='ct-green-color'>read(int[], int)</span></span>
<span id="functionDec2">void <span class='ct-green-color'>display(int[], int)</span></span>
<span id="mainFunction"><span id="startMain">void <b class='ct-blue-color'>main()</b> {</span>
  <span id="mainVar">int a[4], n;</span>
  <span id="mainPrintf">cout << "Enter number of elements : ";</span>
  <span id="mainScanf">cin >> <span id="nAddr">n</span>;</span>
  <span id="readCall" class='ct-green-color'>read(<span id="aTransfer1">a</span>, <span id="nTransfer1">n</span>);</span>
  <span id="displayCall" class='ct-green-color'>display(<span id="aTransfer2">a</span>, <span id="nTransfer2">n</span>);</span>
<span id="endMain">}</span></span>
<span id="funcDef1"><span id="readStep1">void <b class='ct-blue-color'>read(<span id="formalInit1">int <span id="readArg1">x[4]</span>, int <span id="readArg2">n</span></span>)</b></span> {
  <span id="readVar">int i;</span>
  <span id="readPrintf">cout << "Enter" << n << "elements : " << n << endl;</span>
  <span id="forLoop1">for(<span id="forInit1">i = 0</span>; <span id="forCond1">i &lt; n</span>; <span id="iInc1">i++</span>) {
	<span id="forPrintf1">cout << "Enter value for x[" << i << "] : " << i;</span>
	<span id="funScanf1">cin >> <span id="arrAddr1">x[i]</span>;</span>
  <span id="endFor1">}</span></span>
<span id="endFunc1">}</span></span>
<span id="funcDef2"><span id="displayStep1">void <b class='ct-blue-color'>display(<span id="formalInit2">int <span id="displayArg1">y[4]</span>, int <span id="displayArg2">n</span></span>)</b></span> {
  <span id="displayVar">int i;</span>
  <span id="displayPrintf1">cout << "The elements in array are : " << endl;</span>
  <span id="forLoop2">for(<span id="forInit2">i = 0</span>; <span id="forCond2">i &lt; n</span>; <span id="iInc2">i++</span>) {
    <span id="displayPrintf2">cout << "y[" << i << "] = " << y[" << i << "];</span>
  <span id="endFor2">}</span></span>
<span id="endFunc2">}</span></span></pre>
		</div>
		<div class="col-xs-5">
			<div id="animationBox" class="col-xs-11 box-border opacity00" style="height: 375px;">
				<div class="col-xs-11 margin-top-20 text-center" style="font-weight: bold; color: rgb(47, 79, 79); padding: 0px;">
					<div id="mainHeading1" class="col-xs-5 col-xs-offset-1 opacity00" style="display: inline-block; position: relative;">In main()</div>
  					<div id="mainHeading2" class="col-xs-4 col-xs-offset-2 opacity00">In main()</div>
				</div>
				<div id="mainBox" class="col-xs-12 text-center">
					<div id="arrayBox" class="col-xs-6 box-border opacity00" style="margin-top: 18px;">
						<b id="arrText" style="color:maroon; font-family: monospace; display: inline-block; position: relative;">a[4]</b>
						<table id="table" class="text-center" style="height: 85px; width: 100%;">
							<tbody>
								<tr id="tr1" class="opacity00">
									<%for (int i = 1; i <= 4; i++) {%>
									<td><span id="arrIdx<%=i%>" style="display: inline-block; position: relative;">a[<%=(i-1)%>]</span></td>
									<%}%>
								</tr>
								<tr id="tr2" style="height: 32px;">
									<% for (int i = 0; i <= 3; i++) {%>
										<td style="border: 1px solid;"><span id="arrVal<%=i%>"></span></td>
									<%}%>
								</tr>
								<tr id="tr3" class="opacity00">
									<%for (int i = 1; i <= 4; i++) {%>
										<td><span id="arrAddress<%=i%>" class='opacity00'>1024</span></td>
									<%}%>
								</tr>
							</tbody>
						</table>
					</div>
					<div id="mainVarBox" class="col-xs-3 col-xs-offset-2 box-border opacity00" style="margin-top: 20px;">
						<div class="col-xs-8 col-xs-offset-2">
							<b style="color: maroon;">n</b>
						</div>
						<div class="col-xs-8 col-xs-offset-2 box-border" style="height: 45px; line-height: 45px;">
							<span id="nInMain" class=""></span>
						</div>
						<div class="col-xs-8 col-xs-offset-2 opacity00" id="nAddress">2016</div>
					</div>
				</div>

				<div class="col-xs-12" style="margin-top: 15px;">
					<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79); padding: 0px;">
						<div id="boxHeading2" class="col-xs-4 col-xs-offset-1 opacity00">In read()</div>
						<div id="boxHeading3" class="col-xs-4 col-xs-offset-2 opacity00">In display()</div>
					</div>
					<div>
					<div id="readBox" class="col-xs-4 col-xs-offset-1 box-border opacity00 text-center"
						style="height: 100px; margin-top: 10px; line-height: -moz-block-height;">
						<div id="iBox1" class="col-xs-6 opacity00" style="padding: 0px; font-size: 12px; margin-top: 10px;">
							<div class="col-xs-9 text-center col-xs-offset-1"><b style="color: maroon;">i</b></div>
							<div class="col-xs-9 box-border col-xs-offset-1" style="height: 50px; line-height: 50px;">
								<span id="readVal1" class="opacity00" style="position: relative;"></span>
							</div>
							<div class="col-xs-9 text-center col-xs-offset-1 opacity00" id="iReadAddress">3312</div>
						</div>
						
						<div id="nBox1" class="col-xs-6 opacity00" style="padding: 0px; font-size: 12px; margin-top: 10px;">
							<div class="col-xs-9 text-center col-xs-offset-1"><b style="color: maroon;">n</b></div>
							<div class="col-xs-9 box-border col-xs-offset-1" style="height: 50px; line-height: 50px;">
								<span id="readVal2" class="opacity00"></span>
							</div>
							<div class="col-xs-9 text-center col-xs-offset-1 opacity00" id="nReadAddress">1312</div>
						</div>
					</div>
	
					<div id="displayBox" class="col-xs-4 col-xs-offset-2 box-border opacity00 text-center"
						style="height: 100px; margin-top: 10px; line-height: -moz-block-height;">
						<div id="iBox2" class="col-xs-6 opacity00" style="padding: 0px; font-size: 12px; margin-top: 10px;">
							<div class="col-xs-9 text-center col-xs-offset-1"><b style="color: maroon;">i</b></div>
							<div class="col-xs-9 col-xs-offset-1 box-border" style="height: 50px; line-height: 50px;">
								<span id="displayVal1" class="opacity00" style="position: relative;"></span>
							</div>
							<div class="col-xs-9 text-center col-xs-offset-1 opacity00" id="iDisplayAddress">2212</div>
						</div>
						
						<div id="nBox2" class="col-xs-6" style="padding: 0px; font-size: 12px; margin-top: 10px;">
							<div class="col-xs-9 text-center col-xs-offset-1"><b style="color: maroon;">n</b></div>
							<div class="col-xs-9 col-xs-offset-1 box-border" style="height: 50px; line-height: 50px;">
								<span id="displayVal2" class="opacity00"></span>
							</div>
							<div class="col-xs-9 col-xs-offset-1 text-center opacity00" id="nDisplayAddress">4512</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-10" style="margin-top: 20px;">
			<div style="" id="consoleId" class="output-console padding0 opacity00">
				<div class="output-console-title-bar"><span class="title">Output</span></div>
					<div style="color: white;" class="output-console-body"><span id="runEditor1"></span>
	<span id="runEditor2"></span>
	<span id="runEditor3"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
<div class="col-xs-12 text-center"><span id="restart" class="btn btn-warning opacity00">Restart</span></div>
	
	<script type="text/javascript">
	
	$(document).ready(function() {
		functionsWithArraysReady();
	});	
	
	</script>
</body>
</html>