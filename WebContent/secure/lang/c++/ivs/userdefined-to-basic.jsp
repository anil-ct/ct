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

<script src="/secure/lang/c++/js-min/udtb.min.js"></script>

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
    height: 200px;
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
	height: 423px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 10px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.input-val {
	background-color: #000;
	border: 1px solid black;
	border-radius: 4px;
	color: #0f0;
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
	userdefinedToBasicReadyFun();
});


</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Userdefined to Basic</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<ul style="font-family: monospace;">
				<li id="li1" class="opacity00">
					To convert the data type from user defined to basic, the conversion function should be defined in userdefined class in the form of operator functions.
				</li>
				<li id="li2" class="opacity00">
					 It is defined as an overloaded basic datatype which takes no arguments. The format of operator function is<br>
					 <div class="col-xs-12"><pre class="col-xs-3 creampretab1">operator basic datatype() {<br>	------<br>	------<br>}</pre><br></div>
					 <!-- &emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span> -->
				</li>
				<li id="li3" class="opacity00" style="margin-top: -1px;">
					This operator function should return the basic datatype value.
				</li>
			</ul>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-5">
		<div id="code" class="opacity00">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<g>class</g> <blue>Meter</blue> {
	<span id="length"><red>float</red> length;</span>
	<g>public</g>:
		<span id="defaultConst" class="hide">Meter() {
			length = 0.0;
		}</span>
		<span id="getdataFun" class="hide"><red>void</red> getdata() {
			<span id="cout2" class="hide">cout << <red>"enter length in centemeters : "</red>;</span>
			<span id="cin" class="hide">cin >> length;</span>
		}</span>
		<span id="operatorFloat" class="hide">operator float() {
			<span id="floatX2" class="">float x;</span>
			<span id="length100" class="">x = length * 100;</span>
			<span id="returnX" class="">return x;</span>
		}</span>
};
<red>void</red> main() {
	<span id="constM" class="hide">Meter M;</span>
	<span id="callMethod" class="hide">M.getdata();</span>
	<span id="floatX1" class="hide">float x;</span>
	<span id="xm" class="hide">x = M;</span></span>
	<span id="cout1" class="hide">cout << <red>"length in centemeters : "</red> << x;</span>
}
</pre>
		</div>
	</div>
	<div class="col-xs-3">
		<div id="memoryDiv" class="opacity00">
			<div class="text-center"><b>memory</b></div>
				<div id="mPanel" class="opacity00">
					<div class="panel panel-primary margin-bottom0">
		    			<div class="panel-heading text-center padding0"><b id="m">M</b></div>
		    			<div class="panel-body text-center" style="padding: 5px;">
		    				<div class="col-xs-offset-3 col-xs-6">
								<div id="lengthPanel" class="opacity00">
									<div class="panel panel-primary margin-bottom0">
					    				<div class="panel-heading text-center padding0"><b>length</b></div>
					    				<div class="panel-body text-center"><span id="lengthPanelVal1" class="">0.0</span><span id="lengthPanelVal2" class="hide">0.0</span></div>
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
			<div id="outputText" class="opacity00 display-inline-block">enter length in centemeters :&nbsp; </div><div class='display-inline-block input-val' contenteditable='true' maxlength='5' id='inputVal' class="padding5" spellcheck="false"></div>
			</div>
		</div>
	</div>
</div>
</body>
</html>