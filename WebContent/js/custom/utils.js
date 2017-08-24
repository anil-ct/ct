
/**
 * (function($){
					//To load any CSS dynamically
					loadStyleSheet("../css/custom/side-popover-menu.css");
				});
 * @param filename
 */
function loadStyleSheet(filename) {
			 
    //newstylesheet = "style_" + filename + ".css";
    newstylesheet = filename ;		    
    if ($("#dynamic_css").length == 0) {
        $("head").append("<link>")
        css = $("head").children(":last");
        css.attr({
          id: "dynamic_css",
          rel:  "stylesheet",
          type: "text/css",
          href: newstylesheet
        });
    } else {
        $("#dynamic_css").attr("href",newstylesheet);
    } 
}


/**
 * (function($){
					//To load any JS dynamically
					loadJS("../js/custom/my.js");
				});
 * @param filename
 */
function loadJS(filename) {
        $("head").append("<script src='"+filename+"'></script" + ">");
}