<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>userdefined-to-basic</title>
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

<script src="/secure/lang/c++/js-min/udtud.min.js"></script>

<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-10 {
	margin-top: 10px;
}


#topDiv {
    border: 1px solid gray;
    border-radius: 8px;
    padding: 10px;
}

.creampretab {
	tab-size: 2;
	-moz-tab-size: 3;
	background-color: #f5f5f5;
	font-family: monospace;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333;
	display: block;
	font-size: 12px;
	line-height: 1.42857;
	word-break: break-all;
	word-wrap: break-word;
}

.creampretab1 {
	tab-size: 2;
    -moz-tab-size: 3;
    background-color: #fcf8e3;
    font-family: monospace;
    font-size: 12px;
} 
    
.box-border {
	border: 2px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

#memoryDiv {
	border: 1px solid gray;
    border-radius: 6px;
	padding: 15px;
}

.padding0 {
	padding: 0;
}

div, span {
	position: relative;
}

.relative {
	position: relative;
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
	height: 262px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 10px;
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

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 10000001 !important;
	background-color: #ff0066;
	font-weight: bold;
}
</style>
</head>
<body>
<script type="text/javascript">

$(document).ready(function() {
	userdefinedToUserdefinedReadyFun();
});


</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Userdefined to Userdefined</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<ul style="font-family: monospace;">
				<li id="li1" class="opacity00">
					
				</li>
				<li id="li2" class="opacity00">
					
				</li>
				<li id="li3" class="opacity00" style="margin-top: -1px;">
					
					 &emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span>
				</li>
			</ul>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-5">
		<div id="code" class="opacity00">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<g>class</g> <blue>radian</blue> {
	<span id="rad"><red>float</red> rad;</span>
	<g>public</g>:
		<span id="paraConstRad" class="hide">radian(float x) {
			<span id="radX">rad = x;</span>
		}</span>
		<span id="displayFun" class="hide">void display() {
			cout << <red>"radians value : "</red> << rad;
		}</span>
};
<g>class</g> <blue>degree</blue> {
	<span id="rad"><red>float</red> deg;</span>
	<g>public</g>:
		<span id="paraConstDeg" class="hide">degree(float x) {
			<span id="degX">deg = x;</span>
		}</span>
		<span id="operatorRad" class="hide">operator radian() {
			return (<span id="returnVal">deg * 3.14 / 180</span>);
		}</span>
};
<red>void</red> main() {
	<span id="rd" class="hide">radian r;
	degree d;</span>
	<span id="comments" class="hide"><b>//convert from basic to user-defined;</b>
	<b>//this is equivalent to d = degree(100.30);</b>
	<span id="callingParaConst">d = 100.30;</span></span>
	<span id="rToD" class="hide">r = <span id="preD">d</span>;</span>
	<span id="callingFun" class="hide">r.display();</span>
}
</pre>
		</div>
	</div>
	<div class="col-xs-3">
		<div id="memoryDiv" class="opacity00">
			<div class="text-center"><b>memory</b></div>
				<div id="rPanel" class="opacity00">
					<div class="panel panel-primary	">
		    			<div class="panel-heading text-center padding0"><b id="r">r</b></div>
		    			<div class="panel-body text-center" style="padding: 5px;">
		    				<div class="col-xs-offset-3 col-xs-6">
								<div id="radPanel" class="opacity00">
									<div class="panel panel-primary margin-bottom0">
					    				<div class="panel-heading text-center padding0"><b>rad</b></div>
					    				<div class="panel-body text-center"><span id="radPanelVal" class="">1.7497</span></div>
					  				</div>
					  				<!-- <div class="text-center">1024</div> -->
				  				</div>
							</div>
		    			</div>
		  			</div>
		 		</div>
		 		<div id="dPanel" class="opacity00">
					<div class="panel panel-primary margin-bottom0">
		    			<div class="panel-heading text-center padding0"><b id="d">d</b></div>
		    			<div class="panel-body text-center" style="padding: 5px;">
		    				<div class="col-xs-offset-3 col-xs-6">
								<div id="degPanel" class="opacity00">
									<div class="panel panel-primary margin-bottom0">
					    				<div class="panel-heading text-center padding0"><b>deg</b></div>
					    				<div class="panel-body text-center"><span id="degPanelVal" class="">100.30</span></div>
					  				</div>
					  				<!-- <div class="text-center">1024</div> -->
				  				</div>
							</div>
		    			</div>
		  			</div>
		 		</div>
	 		</div>
		<div class="col-xs-12 text-center margin-top-20">
 			<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
		</div>
	</div>
	<div class="col-xs-4">
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
			<div id="outputText" class="opacity00 display-inline-block">radians value :&nbsp;1.7497</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>