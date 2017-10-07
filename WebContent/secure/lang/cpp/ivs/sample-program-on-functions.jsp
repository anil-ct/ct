<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>function-example</title>
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

<script src="../js/sample-program-on-functions.js" type="text/javascript"></script>

<!-- <script type="text/javascript" src="../js-min/spof.min.js"></script> -->

<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.creampretab {
	tab-size: 3;
	-moz-tab-size: 3;
    background-color: #f5f5f5;
    border: 1px solid gray;
    border-radius: 6px;
    color: #333;
    font-family: monospace;
    font-size: 12px;
    padding: 7px;
}

#memoryDiv {
	border: 1px solid gray;
    border-radius: 6px;
	padding: 15px;
}

.errMsg {
	color: red;
    font-weight: bold;
}

#outputDiv {
	margin-top: 18px;
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
	height: 60px;
	padding: 10px;
	white-space: inherit;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}


.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.padding0 {
	padding: 0;
}

.margin-bottom0 {
	margin-bottom: 0;
}

.input-val {
	background-color: black;
    border: 1px solid black;
    text-align: center;
    width: 25px;
}

.val-color {
	color: #0f0;
}

.display-inline-block {
	display: inline-block;
}

.user-btn {
	background-color: green;
}

.relative {
	position: relative;
}

.introjs-tooltip {
	min-width: 300px;
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
<script type="text/javascript">
	$(document).ready(function() {
		sampleProgramOnFunctionsReady();
	});
</script>
<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='demoTitle'>Functions</h4>
</div>
	<div class="col-xs-12">
		<div class="col-xs-offset-1 col-xs-5 margin-top-20">
			<div id="leftDiv" class="opacity00">
			<pre class="creampretab" id="code">#include&lt;<span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<span id="funDec" class="hide"><red>int</red> addition(int, int);</span>
<span id="main"><red>int</red> main()</span> {
	<span id="varDec" class="hide"><red>int</red> a = <div class='display-inline-block' contenteditable='true' maxlength='1' id='aVal' spellcheck="false">5</div>, b = <div class='display-inline-block' contenteditable='true' maxlength='1' id='bVal' spellcheck="false">10</div>, sum = <span id="sumVal">0</span>;</span>
	<span id="sum" class="hide">sum = <span id="callingFun">addition(a, b)</span>;</span>
	<span id="printf" class="hide">cout << <red>"The sum of a + b is : "</red> << sum;</span>
}

<span id="funDef" class="hide"><red>int</red> addition(int x, int y) {
	<span id="return"><g>return</g> (x + y);</span>
}</span></pre>
			</div>
		</div>
		<div class="col-xs-5">
			<div id="memoryDiv" class="col-xs-12 margin-top-20 opacity00">
				<div class="col-xs-4">	
					<div id="aPanel" class="">
						<div class="panel panel-primary margin-bottom0">
			    			<div class="panel-heading text-center padding0"><b id="a">a</b></div>
			    			<div class="panel-body text-center" style="padding: 5px;">
			    				<span id="aPanelVal" class="opacity00">5</span>
			    			</div>
			  			</div>
			 		</div>
		 		</div>
		 		
		 		<div class="col-xs-4">	
					<div id="bPanel" class="">
						<div class="panel panel-primary margin-bottom0">
			    			<div class="panel-heading text-center padding0"><b id="b">b</b></div>
			    			<div class="panel-body text-center" style="padding: 5px;">
			    				<span id="bPanelVal" class="opacity00">10</span>
			    			</div>
			  			</div>
			 		</div>
		 		</div>
		 		
		 		<div class="col-xs-4">	
					<div id="sumPanel" class="">
						<div class="panel panel-primary margin-bottom0">
			    			<div class="panel-heading text-center padding0"><b id="sum">sum</b></div>
			    			<div class="panel-body text-center" style="padding: 5px;">
			    				<span id="sumPanelVal" class="opacity00">0</span>
			    			</div>
			  			</div>
			 		</div>
		 		</div>
			</div>
			<div class="col-xs-12">
				<div id="outputDiv" class="opacity00">
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div>
					<div class="output-console-body" id="outputBody"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center margin-top-20">
		<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
	</div>
</body>
</html>