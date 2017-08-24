
/* http://jqfaq.com/how-to-highlight-rows-in-a-table-on-mouse-hover/ */
$(document).ready(function(){
	this.currentRow = null;
	var table = $('#searchResults');
	/* commented by Ramana
	$('td').each(
		    function(i){
		      $(this).addClass('table-text-center');
		    });
	$('td').each(
		    function(i){
		        if ($(this).attr('dataType') == 'text'){
		        	$(this).removeClass('table-text-center');
		            $(this).addClass('table-text-left');
		        }
		    });
	*/
	table.bind('mouseover', function(event) {
	    self._mousehover(event);
	});
	
	table.bind('mouseleave', function(event) {
	    self.removehighlight(event);
	    return false;
	});
	
	_mousehover = function(event) {
	    self.removehighlight(event);
	    this.currentRow = $(event.target).closest('tr');
	    
	    if (this.currentRow.parent() != "thead") { 
		    // To set some tooltip dynamically
		    this.currentRow.attr("title", "Updated By " + this.currentRow.attr("updatedBy") + " at " + this.currentRow.attr("updatedTime") + " [" + this.currentRow.attr("comments") + "]");
		    this.currentRow.addClass('table-row-hover');
		}
	}
	
	removehighlight = function() {
	    if (this.currentRow != null) this.currentRow.removeClass('table-row-hover');
	}
});

