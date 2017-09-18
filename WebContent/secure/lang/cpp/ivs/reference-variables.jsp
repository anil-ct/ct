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

<script src="/secure/lang/c++/js-min/rv.min.js"></script>
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
		<div id="leftDiv1" class="opacity00"><pre class="creampretab"><span id="intA">int a = <span id="aVal">10</span>;</span>
<span id="intB">int b;</span>
<span id="aIntoB">int <span id="init">b = a</span>;</span>
<span id="initB">int <span id="b20">b = <span id="bVal">20</span></span>;</span></pre>
		</div>
	</div>
	<div class="col-xs-4">
		<div id="rightDiv1" class="opacity00">
			<div class="col-xs-offset-2 col-xs-4 margin-top-10">
				<div id="aPanel" class="opacity00">
					<div class="panel panel-primary margin-bottom0">
	    				<div class="panel-heading text-center padding0"><b>a</b></div>
	    				<div class="panel-body text-center"><span id="aPanelVal" class="opacity00">10</span></div>
	  				</div>
	  				<div class="text-center">2485</div>
  				</div>
			</div>
			<div class="col-xs-4 margin-top-10">
				<div id="bPanel" class="opacity00">
					<div class="panel panel-primary margin-bottom0">
	    				<div class="panel-heading text-center padding0"><b>b</b></div>
	    				<div class="panel-body text-center"><span id="bPanelVal" class="opacity00">10</span><span id="bPanelVal2" class="hide">20</span></div>
	  				</div>
	  				<div class="text-center">3658</div>
  				</div>
			</div>
		</div>
	</div>
</div>

<div class="col-xs-12  margin-top-20">
	<div class="col-xs-offset-2 col-xs-4">
		<div id="leftDiv2" class="opacity00"><pre class="creampretab"><span id="intRefA">int a = <span id="aRefVal">10</span>;</span>
<span id="aIntoRefB">int &<span id="initRef">b = a</span>;</span></pre>
		</div>
	</div>
	<div class="col-xs-4">
		<div id="rightDiv2" class="opacity00">
			<div class="col-xs-offset-3 col-xs-6 margin-top-10">
				<div id="aRefPanel" class="opacity00">
					<div class="panel panel-primary margin-bottom0">
					<div class="panel-heading text-center padding0 hide" id="refB"><b>b</b></div>
					<div id="line" class="hide" style="border: 1px solid white;"></div>
	    				<div class="panel-heading text-center padding0"><b>a</b></div>
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