<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>default-constructor</title>
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

<script src="/secure/lang/cpp/js/default-constructor.js" type="text/javascript"></script>

<!-- <script src="../js-min/dfc.min.js"></script> -->

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
    height: 330px;
    background-color: white;
}

pre {
	background-color: #fcf8e3;
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
	height: 303px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 5px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.display-inline-block {
	display: inline-block;
}

.user-btn {
	background-color: green;
	margin: 0!important;
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
	defaultConstructorReadyFun();
});

</script>

<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Default Constructor</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1">
				<ul>
					<li id="li1" class="opacity00">
						A constructor is a special member function which has been only when an  of that class is.
					</li>
					<li id="li2" class="opacity00">Types of constructors are: 
						<ul>
							<li>Default constructor</li>
							<li>Parameterized constructor</li>
							<li>Copy constructor</li>
						</ul>
					</li>
					<li id="li3" class="opacity00">The format of the default constructor is:<br>
						 <div class="col-xs-4"><pre class="creampretab1">class <blue>class-name</blue> {<br>  <g>public</g>:<br> &nbsp;&nbsp;&nbsp;class-name() {<br>      -----<br>      -----<br> &nbsp;}<br>};</pre></div>
					</li>
					<div class="col-xs-12">
						<li id="li4" class="opacity00" style="margin-left: -15px;">
							Default constructor is used to initialize with the same values to the data members of all the objects.
						</li>
					</div>
				</ul>
				<div class="col-xs-12">
				<span id="nextBtn" class='user-btn introjs-button opacity00' onclick='introjs.nextStep()'>Next &#8594;</span>
			</div>
			</div>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-5">
		<div id="code" class="opacity00">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<span id="class"><g>class</g> <blue>Sample</blue> {
	<red>int</red> a, b;
	<g>public</g>:
	<span id="defaultConstByClass" class="hide">Sample() {
	 
	}</span>
	<span id="defaultConst" class="hide">Sample() { 
		a = 5;
		b = 10;
	}</span>
	<span id="displayMethod" class="hide"><red>void</red> display() {
		<span id="cout">cout &lt;&lt; <red>"Given values : "</red> << a << " " << b;</span> 
	}</span>
};</span>
<red>int</red> main() {
	<span id="callDefaultConst" class="hide">Sample s1;</span>
	<span id="callMethod1" class="hide">s1.display();</span>
}
</pre>
		</div>
	</div>
	<div class="col-xs-3">
	<div id="memoryDiv" class="opacity00">
	<div class="text-center"><b>memory</b></div>
		<div id="s1Panel" class="opacity00">
			<div class="panel panel-primary margin-bottom0">
    			<div class="panel-heading text-center padding0"><b id="s">s1</b></div>
    			<div class="panel-body text-center" style="padding: 5px;">
    				<div class="col-xs-6 margin-top-10">
						<div id="a1Panel" class="">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>a</b></div>
			    				<div class="panel-body text-center"><span id="a1PanelVal" class="opacity00">5</span></div>
			  				</div>
			  				<!-- <div class="text-center">1024</div> -->
		  				</div>
					</div>
					<div class="col-xs-6 margin-top-10">
						<div id="b1Panel" class="">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>b</b></div>
			    				<div class="panel-body text-center"><span id="b1PanelVal" class="opacity00">10</span></div>
			  				</div>
			  				<!-- <div class="text-center">1026</div> -->
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
			</div>
		</div>
	</div>
</div>
</body>
</html>