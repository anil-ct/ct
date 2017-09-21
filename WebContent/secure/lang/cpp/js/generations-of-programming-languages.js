var typingSpeed = 5;

var tooltipMap = {
	"#group1" : "<ul><li>In this generation of languages, the instructions were given in <b class='monospace lite-red'>binary code</b>," +
				" which constituted a sequence of <g><b>0</b></g>'s and <g><b>1</b></g>'s.</li></ul>",
	
	"#group2" : "<ul><li>These used <a href='https://en.wikipedia.org/wiki/Mnemonic' target='_blank'  class='monospace'>mnemonics</a> (short words) for instructions."
				+ " The instructions consisted the <a href='https://en.wikipedia.org/wiki/Assembly_language' target='_blank'>"
				+ "Assembly language</a>. Programs written in assembly language need to be converted into the"
				+ " machine language by an <b class='monospace lite-blue'>assembler</b> before it can be run.</li></ul>",
			
	"#group3" : "<ul><li>The <b>third generation</b> languages also refereed to as<br> <b class='monospace lite-red'>high–level languages</b>."
			+ " These introduced commands which are more human-readable. They also provided constructs to represent logic.</li> <li> These "
			+ " requires a <b class='monospace lite-red'>Compiler</b> or an <b class='monospace lite-red'>Interpreter</b> to generate the machine code.</li>" +
			" <li>Examples of 3<sup>rd</sup> generation "
			+ " programming languages are: <b class='monospace lite-blue'>Fortran</b>, <b class='monospace lite-blue'>Pascal</b>, <b class='monospace lite-blue'>C</b>, etc.</li></ul>",
			
	"#group4" : "<ul><li><b>Fourth generation languages</b> are designed to be closer to natural language, meaning they contain English like commands.</li>"
			+ " <li>Standard <b class='monospace lite-blue'>ML</b>, <b class='monospace lite-blue'>Lisp</b>, <b class='monospace lite-blue'>SQL</b> are a few examples.</li></ul>",
			
	"#group5" : "<ul><li><b>Fifth generation languages</b> are basically an outgrowth of <b style='font-size:95%;' class='monospace'> "
			+ " <a href='https://en.wikipedia.org/wiki/Artificial_intelligence' target='_blank' style='font-size: 11px;'>artificial intelligence</a></b> research "
			+ " from the 1980's.</li> <li>They are intended to solve problems given contraints instead of a programmer providing the algorithm. "
			+ " A few examples are - <a href='https://en.wikipedia.org/wiki/Prolog' target='_blank'>Prolog</a>,"
			+ " <a href='https://en.wikipedia.org/wiki/OPS5' target='_blank'>OPS5</a> and <a href='https://en.wikipedia.org/wiki/Mercury_(programming_language)' target='_blank'>Mercury</a>.</li></ul>"
};

var generationsOfProgrammingLanguagesReadyFun = function() {
	$("rect, circle, line, text").hide();
	revealText();
	$('#restart').click(function() {
		location.reload();
	});
}


function arrowReveal(lineId, callBackFunction) {
	var x2 = $(lineId).attr('x2');
	var y2 = $(lineId).attr('y2');
	$(lineId).attr('x2', $(lineId).attr('x1'));
	$(lineId).attr('y2', $(lineId).attr('y1'));
	$(lineId).show();
	TweenMax.to(lineId, 1, {
		attr: {
			x2: x2,
			y2: y2
	},
		onComplete: function () {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
	 	}
	});
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function animation(groupId, callBackFunction) {
	$(groupId).find("rect, text:eq(1), circle").show();
	arrowReveal($(groupId).find("line:eq(" + ($(groupId).find("line").length == 2 ? 1 : 0) + ")"), function() {
		$(groupId).find("text:eq(0)").show().attr("class", "svg-text-css animated fadeIn").one("animationend", function() {
			$(groupId).find("text:eq(0)").attr("class", "svg-text-css");
			customPopover($(groupId).find("rect"), "bottom", tooltipMap[groupId], function() {
				if (typeof callBackFunction === 'function') {
					callBackFunction();
				}
			});	
		});
		
		
	});
}


function customPopover(selector, position, text, callBackFunction) {
	$(selector).popover({
		placement: position,
		html: true,
		trigger: 'focus',
		container : $("svg").parent(),
		content: '<div class="customPopover">' + text + '</div>'
	}).popover('show');
	
	typing($(".customPopover:last"), text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function arrowReveal(lineId, callBackFunction) {
	var x2 = $(lineId).attr('x2');
	var y2 = $(lineId).attr('y2');
	$(lineId).attr('x2', $(lineId).attr('x1'));
	$(lineId).attr('y2', $(lineId).attr('y1'));
	$(lineId).show();
	TweenMax.to(lineId, 1, {
		attr: {
			x2: x2,
			y2: y2
	},
		onComplete: function () {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
	 	}
	});
}

function revealText() {
	$("#li1").fadeTo(500, 1, function () {
		$("#li2").fadeTo(500, 1, function () {
		
		});
	});
}

function timelineAnimation() {
	$('.user-btn').remove();
	animation("#group1", function() {
		$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='firstGenCode()'>Next &#8594;</span></div>");
	});
}

function firstGenCode() {
	$('.user-btn').remove();
	$(".customPopover:last").append("<br><div><span class='lite-red'>Example</span>:</div><div class='text-center monospace' style='background-color: lightyellow;'><div>10101010011000101</div> <div>10011010100000010</div> <div>11111111101000101</div></div><div class='monospace margin-5'><b>Machine Code only</b>.</div>");
	$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='progressFirstGen()'>Next &#8594;</span></div>");
}

function progressFirstGen() {
	$('.user-btn').remove();
	arrowReveal($("#group1").find("line:eq(0)"), function() {
		animation("#group2", function() {
			$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='secondGenCode()'>Next &#8594;</span></div>");
		});
	});
}

function secondGenCode() {
	$('.user-btn').remove();
	$(".customPopover:last").append("<br><div><span class='lite-red'>Example</span>:</div><div class='text-center monospace' style='background-color: lightyellow;'>"
			+ " <div><span style='color: #0000FF;'>LDA</span> <span style='color: #666666;'>34</span></div>"
			+ " <div><span style='color: #0000FF;'>ADD</span> <span style='color: #408080;'>#1</span></div>"
			+ " <div><span style='color: #880000;'>STO</span> <span style='color: #666666;'>34</span></div></div><div class='monospace margin-5'><b>Assembly Code</b></div>");
	$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='progressSecondGen()'>Next &#8594;</span></div>");
}

function progressSecondGen() {
	$('.user-btn').remove();
	arrowReveal($("#group2").find("line:eq(0)"), function() {
		animation("#group3", function() {
			$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='thirdGenCode()'>Next &#8594;</span></div>");
		});
	});
}

function thirdGenCode() {
	$('.user-btn').remove();
	$(".customPopover:last").append("<br><div><span class='lite-red'>Example</span>:</div><div style='font-family: monospace; background-color: lightyellow; padding: 5px;'>"
			+ " <div> x = x + 1;</div></div>");
	$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='progressThirdGen()'>Next &#8594;</span></div>");
}

function progressThirdGen() {
	$('.user-btn').remove();
	arrowReveal($("#group3").find("line:eq(0)"), function() {
		animation("#group4", function() {
			$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='fourthGenCode()'>Next &#8594;</span></div>");
		});
	});
}

function fourthGenCode() {
	$('.user-btn').remove();
	$(".customPopover:last").append("<br><div><span class='lite-red'>Example</span>:</div><div style='font-family: monospace; background-color: lightyellow; padding: 5px;'>"
			+ " <div><span style='color: #008000;'> SELECT </span> id, name, salary </div><span style='color: #008000;'> FROM </span> employee <span style='color: #008000;'> WHERE </span><br> id = 9;</div>");
	$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='progressFourthGen()'>Next &#8594;</span></div>");
}

function progressFourthGen() {
	$('.user-btn').remove();
	arrowReveal($("#group4").find("line:eq(0)"), function() {
		animation("#group5", function() {
			$(".customPopover:last").append("<div><span class='pull-right user-btn introjs-button' onclick='restart()'>Next &#8594;</span></div>");
		});
	});
}

function restart() {
	$('.user-btn').remove();
	$("body").scrollTo($("#demoTitle"), 500, function() {
		$("#restart").css("opacity", "1").popover({
			placement: "right",
			html: true,
			trigger: 'focus',
			content: 'Click to restart.'
		}).popover('show').next().addClass("animated bounceInDown");
		$("#restart").next().css("width", "105px");
	});
}