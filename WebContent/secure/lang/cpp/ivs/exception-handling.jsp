<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>exception-handling</title>
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

<script src="/secure/lang/c++/js-min/eh.min.js"></script>

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
	height: 475px;
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
	exceptionHandlingReadyFun();
});


</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Exception Handling</h4>
</div>
<div class="col-xs-offset-4 col-xs-4 margin-top-20">
<pre id="tryCatch" class="creampretab"><span id="tryBlock"><g>try</g> {
	-----
	-----
	-----
	<span id="throw"><g>throw</g> exception;</span>
	-----
	-----
}</span>
<span id="catchBlock"><g>catch</g>(arguments) {
	-----
	-----
	-----
}</span>
</pre>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv" class="hide">
			<ul style="font-family: monospace;">
				<li style="list-style-type: none;"><g>Following are the main advantages of <a href="https://en.wikipedia.org/wiki/Exception_handling" target="_blank">exception handling</a> over traditional error handling</g>.</li>
				<li id="li1" class="opacity00">
					<b>Separation of Error Handling code from Normal Code:</b> With try catch blocks, the code for error handling becomes separate from the normal flow.
				</li>
				<li id="li2" class="opacity00">
					 <b>Functions can handle any exceptions they choose:</b> A function can specify the exceptions that it throws using the throw keyword.
					  The caller of this function must handle the exception in some way (either by specifying it again or catching it).
				</li>
				<li id="li3" class="opacity00">
				<b>Grouping of Error Types:</b> Both basic types and objects can be thrown as exception. We can create a hierarchy of exception objects,
				 group exceptions in namespaces or classes, categorize them according to types.
				 &emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span>
				</li>
			</ul>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-1 col-xs-5">
		<div id="code" class="hide">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<g>class</g> <blue>MyException</blue> {
	<g>public</g>:
		<span id="divFun" class="hide"><red>double</red> division(int a, int b) {
			if( <span id="ifCond">b != 0</span>)  {
				<span id="return" class="">return(a / b);</span>
			} else {
				<span id="throwKey">throw b;</span>
			}
		}</span>
};
<red>void</red> main() {
	<span id="xyz" class="hide"><red>int</red> x, y;
	<red>double</red> z = 0;
	MyException me;</span>
	<span id="cout1" class="hide">cout << <red>"enter numerator value : "</red>;</span>
	<span id="cin1" class="hide">cin >> x;</span>
	<span id="cout2" class="hide">cout << <red>"enter denominator value : "</red>;</span>
	<span id="cin2" class="hide">cin >> y;</span>
	<span id="insideTry" class="hide"><g><b>try</b></g> {
		<span id="zInit">z = <span id="callDivFun">me.division(x, y);</span></span>
		<span id="cout3">cout << <red>"z = "</red> << z << <red>"\n"</red>;</span>
	}</span> <span id="insideCatch" class="hide"><g><b>catch</b></g> (int y) {
    	<span id="cout4" class="hide">cout << <red>"division by 0 error is occured\n"</red>;</span>
		}</span>
	<span id="cout5" class="hide">cout << <red>"inside main"</red>;</span>
}
</pre>
		</div>
	</div>
	<div class="col-xs-5">
		<div id="outputDiv" class="hide">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
			<div id="outputText1" class="opacity00 display-inline-block">enter numerator value :&nbsp; </div><div class='display-inline-block input-val' contenteditable='true' maxlength='4' id='inputVal1' class="padding5" spellcheck="false"></div><br>
			<div id="outputText2" class="opacity00 display-inline-block">enter denominator value :&nbsp; </div><div class='display-inline-block input-val' contenteditable='true' maxlength='4' id='inputVal2' class="padding5" spellcheck="false"></div>
			</div>
		</div>
	</div>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>