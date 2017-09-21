<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
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

<!-- <script src="/secure/lang/c++/js/categories-of-functions.js" type="text/javascript"></script> -->

<script src="../js-min/cof.min.js"></script>

<title>Function categories</title>

<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

pre {
	-moz-tab-size: 4;
	tab-size: 4;
	font-family: monospace;
}

.box-border {
	border: 2px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.padding0 {
	padding: 0;
}

.center {
	margin-left: auto;
	margin-right: auto;
	display: block;
}

.btn-color {
	background-color: #90EE90;
	background: linear-gradient(0deg, #90ee90 30%, 4CAF50 70%);
	font-weight: bold;
	font-size: 13px;
}

.btn:hover {
	background-color: #4CAF50 !important;
	color: white;
}

.btn:active{
	background-color: #2E8B57 !important;
	color: white;
}

.box-shadow {
	box-shadow: 1px 2px 4px 0;
}

.output-console {
	margin: 0px !important;
}

div, span {
	position: relative;
}

.blinking-white {
	z-index: 10000000;
	animation-name: blink-background-white;
	animation-duration: 1.2s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-background-white { 
	50% {
		background-color: white;
	}
}

.func-heading {
    color: yellow;
    font-weight: bold;
    z-index: 1000000;
}

.introjs-tooltip {
	min-width: 300px;
}

.disabled {
	pointer-events: none;
}

#description {
    border: 1px solid gray;
}

.introjs-fixParent {
	position: relative !important;
}

#description ul {
	font-family: monospace;
}

.output-console-body {
	padding: 10px;
	color: white;
	height: 150px;
	font-size: 12px;
	color: lime;
	font-weight: bold;
}

.ct-green-color {
	color: green;
}

g {
	color: green;
}

y {
	color: yellow;
	font-weight: bold;
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
</style>
</head>

<body>
	<div class="text-center margin-top-20">
		<h1 id="heading" class="label ct-demo-heading text-center">Different
			Categories of Functions</h1>
	</div>
	<div class="col-xs-12"  style="margin-top: 50px;">
		<div class="function-box col-xs-3">
			<div id="functionBox" class="box-border opacity00" style="height: 375px;">
				<h4 class="text-center">Function Categories</h4>
				<div class="text-center">
					<span id="type1" class="btn text-center btn-color box-shadow fun-btn disabled" style="margin-top: 35px;" onclick="dynamicSteps()">
						No Arguments and No Return type
					</span>
				</div>
				<div class="text-center">
					<span id="type2" class="btn text-center btn-color box-shadow fun-btn disabled" style="margin-top: 35px;" onclick="dynamicSteps()">
						With Arguments and No Return type
					</span>
				</div>
				<div class="text-center">
					<span id="type3" class="btn text-center btn-color box-shadow fun-btn disabled" style="margin-top: 35px;" onclick="dynamicSteps()">
						No Arguments and With Return type
					</span>
				</div>
				<div class="text-center">
					<span id="type4" class="btn text-center btn-color box-shadow fun-btn disabled" style="margin-top: 35px;" onclick="dynamicSteps()">
						With Arguments and With Return type
					</span>
				</div>
			</div>
		</div>
		
		<div id="actionBox" class="col-xs-9 box-border opacity00" style="height: 455px;">
			<div class='col-xs-12' style="margin-top: 10px;">
				<div id="funcHeading"
					class="text-center opacity00 func-heading">No return type No Arguments</div>
			</div>
			<div id="descriptionDiv" class="col-xs-12 margin-top-20">
				<div class="col-xs-12">
					<div id="description" class="box-border opacity00" style="min-height: 73px;"></div>
				</div>
			</div>
			<div id="animationDiv" class="col-xs-12 animation-div" style="margin-top: 50px;">
				<div class="col-xs-6">
<pre id="funcType1" class="creampretab hide opacity00" id="code"><orange>#include</orange><span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<span id="funDec1"><red>void</red> getName(void);</span>
<div id="main1" style="display: inline-block;"><red>int</red> main() {
	<span id="callingFun1">getName();</span>
	<span id="mainPrintf1">cout << <red>"Inside main()\n"</red>;</span>
<span id="endMain1">}</span></div>
<div id="funDef1" style="display: inline-block;"><red>void</red> getName() {
	<span id="userPrintf1">cout << <red>"Inside getName()\n"</red>;</span>
<span id="endFunction1">}</span></div>
</pre>
<pre id="funcType2" class="creampretab hide opacity00" id="code"><orange>#include</orange><span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<span id="funDec2"><red>void</red> getValue(int);</span>
<div id="main2" style="display: inline-block;"><red>int</red> main() {
	<span id="callingFun2">getValue(5);</span>
	<span id="mainPrintf2">cout << <red>"inside main(), after getValue()\n"</red>;</span>
<span id="endMain2">}</span></div>
<div id="funDef2" style="display: inline-block;"><red>void</red> <b class='ct-blue-color'>getValue(int b)</b> {
	<span id="userPrintf2">cout << b << <red>" printed in getValue()\n"</red> <<;</span>
<span id="endFunction2">}</span></div>	
</pre>
<pre id="funcType3" class="creampretab hide opacity00" id="code"><orange>#include</orange><span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<span id="funDec3"><red>int</red> calculateSum();</span>
<div id="main3" style="display: inline-block;"><red>int</red> main() {
	<span id="varInMain3"><red>int</red> total;</span>
	<span id="callingFun3">total = calculateSum();</span>
	<span id="mainPrintf3">cout << <red>"Sum = "</red> << total << <red>"\n"</red>;</span>
<span id="endMain3">}</span></div>
<div id="funDef3" style="display: inline-block;"><red>int</red> calculateSum() {
	<span id="varInit3"><red>int</red> a = 10, b = 20, sum;</span>
	<span id="varDec3">sum = a + b;</span>
	<span id="returnVal3"><g>return</g> sum;</span>
<span id="endFunction3">}</span></div>	
</pre>
<pre id="funcType4" class="creampretab hide opacity00" id="code"><orange>#include</orange><span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<span id="funDec4"><red>int</red> calculateSum(int, int);</span>
<div id="main4" style="display: inline-block;"><red>int</red> main() {
	<span id="varInMain4"><red>int</red> a = 10, b = 20, total;</span>
	<span id="callingFun4">total = <span class='ct-green-color'>calculateSum(a, b)</span>;</span>
	<span id="mainPrintf4">cout << <red>"Sum = "</red> << total << <red>"\n"</red>;</span>
<span id="endMain4">}</span></div>
<div id="funDef4" style="display: inline-block;"><red>int</red> calculateSum(int x, int y) {
	<span id="varInit4"><red>int</red> sum;</span>
	<span id="varDec4">sum = x + y;</span>
	<span id="returnVal4"><g>return</g> sum;</span>
<span id="endFunction4">}</span></div>	
</pre>
				</div>
				<div class="col-xs-6">
					<div class="output-console padding0 opacity00" id="consoleId">
						<div class="output-console-title-bar"><span class="title">Output</span></div>
						<div id="outputPrint" class="output-console-body"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script type="text/javascript">
		$(document).ready(function() {
			categoriesOfFunctions();
		});
	</script>
</body>
</html>
