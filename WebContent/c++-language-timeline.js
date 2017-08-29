var tooltipMap = {
	"#simulaGroup" :"<ul><li>The first object oriented programming language is <span class='ct-code-b-green'><b>simula 67</b></span>.</li>" +
			"<li>It introduced <span class='ct-code-b-green'>object</span>,  <span class='ct-code-b-green'>classes</span>," +
			"  <span class='ct-code-b-green'>inheritance</span> and  <span class='ct-code-b-green'>subclasses</span>" +
			",  <span class='ct-code-b-green'>procedure</span>, <span class='ct-code-b-green'>coroutines</span>" +
			" and  <span class='ct-code-b-green'>garbage collections</span>.</li></ul>",
	"#simulaGroup1" :"<span class='ct-code-b-green'>Dennis Ritchie</span> developed the <span class='ct-code-b-green'>C</span>" +
			" programming language at <span class='ct-code-b-green'>Bell Labs</span> in <span class='ct-code-b-green'>1972</span>.",
	"#simulaGroup2" :"<ul><li>The <span class='ct-code-b-green'>C++</span> programming language has a history going back to" +
			" <span class='ct-code-b-green'>1979</span>, when <span class='ct-code-b-green'>Bjarne Stroustrup</span> was doing work for his Ph.D. thesis.</li>" +
			"<li>It is combination of <span class='ct-code-b-green'>oops concept</span>(<b>simula 67)</b> and <span class='ct-code-b-green'>C-Language</span>.",
	"#simulaGroup3" :"<li>A research group at <span class='ct-code-b-green'>AT&T Bell</span> Laboratories headed by " +
			"<span class='ct-code-b-green'>Bjarne Stroustrup</span> started to develop the new programming language " +
			"<span class='ct-code-b-green'>C++</span> in <span class='ct-code-b-green'>1983</span>.</li> ",
	"#simulaGroup4" :"The <span class='ct-code-b-green'>ISO</span> working group standardized <span class='ct-code-b-green'>C++</span>" +
			" for the first time as <span class='ct-code-b-green'>ISO/IEC 14882:1998</span>, which is informally " +
			"known as <span class='ct-code-b-green'>C++98</span> in <span class='ct-code-b-green'>1998</span>."
};
var readPrintStringUsingGetsPutsReady = function() {
	/*$("#img1").offset({
		"top" : $("#kristen").offset().top - $("#img1").height() * 1.1,
		"left" : $("#kristen").offset().left + $("#img1").width() / 2,
	});
	$("#img2").offset({
		"top" : $("#dennis").offset().top - $("#img2").height(),
		"left" : $("#dennis").offset().left + $("#img2").width() / 2,
	});
	
	$("#img3").offset({
		"top" : $("#bjarne").offset().top - $("#img3").height(),
		"left" : $("#bjarne").offset().left + $("#img3").width() / 2,
	});*/
	$("line, circle, text, rect, image").hide();
	animation("#simulaGroup", "#circle1", "#img1", function() {
		nextBtnAnimation("#circle1",  "year1972()");
	});
	$('#restartBtn').click(function() {
		location.reload();
	});
}

function year1972() {
	$('.popover').remove();
	$(".next-btn").parents(".popover").remove();
	animation("#simulaGroup1","#circle2","#img2", function() {
		nextBtnAnimation("#circle2",  "year1979()");
	});
}

function year1979() {
	$('.popover').remove();
	$('.next-btn').parents(".popover").remove();
	arrowReveal("#line6",function(){
		arrowReveal("#line7",function(){
			animation("#simulaGroup2","#circle3","#img3",function() {
				nextBtnAnimation("#circle3",  "year1983()");
			});
		});
	});
}
function year1983() {
	$('.popover').remove();
	$('.next-btn').parents(".popover").remove();
	arrowReveal("#line8",function() {
		animation("#simulaGroup3","#circle4", "", function() {
			nextBtnAnimation("#circle4",  "year1998()");
		});
	});
}
function year1998() {
	$('.popover').remove();
	$('.next-btn').parents(".popover").remove();
	arrowReveal("#line9",function() {
		animation("#simulaGroup4","#circle5", "", function() {
			nextBtnAnimation("#circle5",  "restart()");
		});
	});
}

function restart() {
	$('.popover').remove();
	$('.next-btn').parents(".popover").remove();
	$("#restartBtn").css("opacity", "1").popover({
		placement: "right",
		html: true,
		trigger: 'focus',
		content: 'Click to restart.'
	}).popover('show').next().addClass("animated bounceInDown");
}

function nextBtnAnimation(selector, nextAnimation) {
	$(selector).popover({
		trigger : "focus",
		position: "right",
		content: "<a class='btn next-btn' onclick='" + nextAnimation + "'>Next →</a>",
		html : true,
		container : "#totalDiv",
	});
	$(selector).popover("show");
	$('.next-btn').parents(".popover").css("width", "auto").addClass("animated bounce").one("animationend", function() {
		$(this).removeClass("animated bounce");
	});
}

function animation(id1, circleId, imgId, callBackFunction) {
  $(id1).find("rect").show();
  $(id1).find("text:eq(0)").show();
  $(circleId).show();
  
  arrowReveal($(circleId).next(), function() {
    $(id1).find("text:eq(1)").show();
    if (imgId.trim().length != "") {
    	
      $(imgId).show().attr("class", "animated fadeIn").one("animationend", function() {
    	  console.log("sdjsdjf")
    	  customPopover($(id1).find("rect"), "bottom", tooltipMap[id1], callBackFunction);
      });
    } else {
    	customPopover($(id1).find("rect"), "bottom", tooltipMap[id1], callBackFunction);
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
	
function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	});
}

function customPopover(selector, position, text, callBackFunction) {
	$(selector).popover({
		placement: position,
		html: true,
		trigger: 'focus',
		container : "#totalDiv",
		content: '<div class="customPopover">' + text + '</div>'
	}).popover('show');
	
	typing($(".customPopover:last"), text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
	
function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : 5,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
