<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>reference-variables</title>
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

<!-- <script src="/secure/lang/cpp/js/reference-variables.js" type="text/javascript"></script> -->

<script type="text/javascript" src="../js-min/rfv.min.js"></script>

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

#outputDiv {
	padding: 0;
	z-index: 9999999;
}

.output-console-title-bar {
	background-color: darkgray;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	font-size: 13px;
	height: 60px;
	padding: 10px;
	white-space: inherit;
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
</style>
</head>
<body>
<script type="text/javascript">



$(document).ready(function() {
	referenceVariableReadyFun();
});


</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Reference variables</h4>
</div>
<div class="col-xs-12  margin-top-20">
	<div class="col-xs-offset-2 col-xs-4">
		<div id="leftDiv1" class="opacity00"><pre class="creampretab"><span id="intA"><red>int</red> num1 = <span id="aVal">10</span>;</span>
<span id="intB"><red>int</red> num2;</span>
<span id="aIntoB"><span id="init">num2 = num1</span>;</span>
<span id="initB"><span id="b20">num2 = <span id="bVal">20</span></span>;</span>
<span id="cout1">cout << <red>"The values of a, b : "</red>;</span></pre>
		</div>
	</div>
	<div class="col-xs-4">
		<div id="rightDiv1" class="opacity00">
			<div class="col-xs-offset-2 col-xs-4 margin-top-10">
				<div id="aPanel" class="opacity00">
					<div class="panel panel-primary margin-bottom0">
	    				<div class="panel-heading text-center padding0"><b>num1</b></div>
	    				<div class="panel-body text-center"><span id="aPanelVal" class="opacity00">10</span></div>
	  				</div>
	  				<div class="text-center">2485</div>
  				</div>
			</div>
			<div class="col-xs-4 margin-top-10">
				<div id="bPanel" class="opacity00">
					<div class="panel panel-primary margin-bottom0">
	    				<div class="panel-heading text-center padding0"><b>num2</b></div>
	    				<div class="panel-body text-center"><span id="bPanelVal" class="opacity00">10</span></div>
	  				</div>
	  				<div class="text-center">3658</div>
  				</div>
			</div>
		</div>
	</div>
</div>

<div class="col-xs-12  margin-top-20">
	<div class="col-xs-offset-4 col-xs-4">
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
			</div>
		</div>
	</div>
</div>	

<div class="col-xs-12  margin-top-20">
	<div class="col-xs-offset-2 col-xs-4">
		<div id="leftDiv2" class="opacity00"><pre class="creampretab"><span id="intRefA">int num1 = <span id="aRefVal">10</span>;</span>
<span id="aIntoRefB">int &<span id="initRef">num2 = num1</span>;</span>
<span id="cout2">cout << <red>"The values of a, b : "</red>;</span></pre>
		</div>
	</div>
	<div class="col-xs-4">
		<div id="rightDiv2" class="opacity00">
			<div class="col-xs-offset-3 col-xs-6 margin-top-10">
				<div id="aRefPanel" class="opacity00">
					<div class="panel panel-primary margin-bottom0">
					<div class="panel-heading text-center padding0 hide" id="refB"><b>num2</b></div>
					<div id="line" class="hide" style="border: 1px solid white;"></div>
	    				<div class="panel-heading text-center padding0"><b>num1</b></div>
	    				<div class="panel-body text-center"><span id="aRefPanelVal" class="opacity00">10</span></div>
	  				</div>
	  				<div class="text-center">8426</div>
  				</div>
			</div>
		</div>
	</div>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>