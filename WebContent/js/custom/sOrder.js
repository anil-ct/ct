	
var undoManager = null;

var MoveCommand = Undo.Command.extend({
	constructor: function(oldArr, newArr) {
		this.oldArr = oldArr;
		this.newArr = newArr;
	},
	execute: function() {
		//this.li.insertBefore(this.li.prev());
		//l("MoveCommand.execute() called...")
		reorderTableData(this.newArr);
	},
	undo: function() {
		//l("MoveCommand.undo() called...")
		reorderTableData(this.oldArr);
	}
});

function initUndoBtnsListners() {
	$('#undoBtn').on('click', function(){
		undoManager.undo();
	});
	
	$('#redoBtn').on('click', function(){
		undoManager.redo();
	});
	
	$('#saveOrderChangesBtn').on('click', function(){
		saveOrderChanges();
	});	
}
	
function initUndoManager() {
	undoManager = new Undo.Stack();		
	undoManager.changed = function() {
		initUndoManagerState();	
	};
	initUndoManagerState();
}

function initSortable() {
	$('#tBody').sortable({
		// Only make the .panel-heading child elements support dragging.
		// Omit this to make then entire <li>...</li> draggable.
		//handle : '.someClassName',
        //connectWith: '.menuGroupContainer',
        forcePlaceholderSize : true,            
        placeholder: 'drop-zone-highlight-marker',
		start : function(event, ui) {
			//l("In start  ui.item.Index = " + ui.item.index());
			$(ui.item).data('startIndex', ui.item.index());
			var oldArr = $('#tBody').sortable('toArray');
			oldArr.splice((ui.item.index()+1), 1)
			$(ui.item).data('oldArr', oldArr);
		},/* 
		update : function(event, ui) {
			console.log("In update ui.item.Index = " + ui.item.index());
			//$(ui.item).data('startIndex', ui.item.index());
			l($('#tBody').sortable('toArray'));
		}, */
		stop : function(event, ui) {
			var endIndex = ui.item.index();
			var startIndex = $(ui.item).data('startIndex');
            if (endIndex != startIndex) {
			    l("In Stop  ui.item.Index = " + endIndex + " :: old startIndex = " + startIndex ) ;
			    sOrderJsonDataArr.splice(endIndex, 0, sOrderJsonDataArr.splice(startIndex, 1)[0]);
                var newArr = $('#tBody').sortable('toArray');
                var oldArr = $(ui.item).data('oldArr');
                undoManager.execute(new MoveCommand(oldArr, newArr));
            }
		}
	});	
}



	function saveOrderChanges(ifSuccessFunction) {		
		var $trArr = $('#tBody').children('tr');
		var newOrderArr = [];
		$.each($trArr, function(idx, tr) {
			var elm = {};
			elm["_id"] = {};
			elm["_id"]["$oid"] = $(tr).attr('dbId');
		 	elm["sOrder"] = idx;
		 	newOrderArr.push(elm);
		});
		
		
		var oldOrderArr = [];
		$.each(sOrderJsonDataArr, function(idx, original){
			var elm = {"_id": {"$oid": original["_id"]["$oid"]}, sOrder: (original.hasOwnProperty('sOrder')? original['sOrder'] : "")};
			oldOrderArr.push(elm); 
		});
		
		var jsonData = {"newOrderArr": newOrderArr, "oldOrderArr": oldOrderArr};
		
		saveOrderInDB(jsonData, ifSuccessFunction);
		
		return true;
	}
	
	function saveOrderInDB(jsonData, ifSuccessFunction) {		
		var sch = $("#sch").val();
		var url = "/secure/rest/db";
		if (isVariableDeclaredAndNotNull(securePostUrl)) {
			url = securePostUrl;
		}
		var request = $.ajax({
			type : "POST",
			url : url + "/so?sch=" + sch,
			headers : jsonHeaders,
			dataType : 'json',
			data : JSON.stringify(jsonData)
		});
		request.done(function(res) {
			if (res.result == 0) {
				alertify.log(res.msg, "success", 6000);
				initUndoManager();
				$.each(sOrderJsonDataArr, function(idx, original){
					original['sOrder'] = idx;					 
				});
				if (ifSuccessFunction != null) {
					eval(ifSuccessFunction);
				}
			} else {
				alertify.log(res.msg, "error", 6000);
			}
		});
		request.fail(function(res) {
			alertify.log("Could not Save changes...[see console]", "error", 0);
		});
	}

function reorderTableData(arr) {		
	for (var i = 0; i < arr.length; i++) {
		$('#'+arr[i]).data('sOrder', i);
	}
	var $tBody = $('#tBody');
	var $trArr = $('#tBody').children('tr');

	$trArr.sort(function(trOne, trTwo){
		var trOneIndex = parseInt($(trOne).data('sOrder'));
		var trTwoIndex = parseInt($(trTwo).data('sOrder'));
		if (trOneIndex > trTwoIndex) {
			return 1;
		} else if (trOneIndex < trTwoIndex) {
			return -1
		}
		return 0;
	});
	
	$trArr.detach().appendTo($tBody);
}

function initUndoManagerState() {
	if(undoManager.canUndo()) {
		$('#undoBtn').removeAttr("disabled");
	} else {
		$('#undoBtn').attr("disabled", "disabled");
	}
	if (undoManager.canRedo()) {
		$('#redoBtn').removeAttr("disabled");	
	} else {
		$('#redoBtn').attr("disabled", "disabled");
	}
	if (undoManager.dirty()) {
		$('#saveOrderChangesBtn').removeAttr("disabled");
	} else {
		$('#saveOrderChangesBtn').attr("disabled", "disabled");	
	}
}


function updateOrderAfterDeleteClicked(sOrderDeleted) {
	var $trArr = $('#tBody').children('tr');
	var newOrderArr = [];
	$.each($trArr, function(idx, tr) {
		if (idx < sOrderDeleted) {
			return true;
		}
		var elm = {};
		elm["_id"] = {};
		elm["_id"]["$oid"] = $(tr).attr('dbId');
	 	elm["sOrder"] = idx;
	 	newOrderArr.push(elm);
	});
	
	
	var oldOrderArr = [];
	$.each(sOrderJsonDataArr, function(idx, original){
		if (idx < sOrderDeleted) {
			return true;
		}
		var elm = {"_id": {"$oid": original["_id"]["$oid"]}, sOrder: (original.hasOwnProperty('sOrder')? original['sOrder'] : "")};
		oldOrderArr.push(elm); 
	});
	
	var jsonData = {"newOrderArr": newOrderArr, "oldOrderArr": oldOrderArr};
	
	var sch = $("#sch").val();
	var url = "/secure/rest/db";
	if (isVariableDeclaredAndNotNull(securePostUrl)) {
		url = securePostUrl;
	}
	var request = $.ajax({
		type : "POST",
		url : url + "/so?sch=" + sch,
		headers : jsonHeaders,
		dataType : 'json',
		data : JSON.stringify(jsonData)
	});
	request.done(function(res) {
		if (res.result == 0) {
			$.each(sOrderJsonDataArr, function(idx, original){
				if (idx < sOrderDeleted) {
					return true;
				}
				original['sOrder'] = idx;					 
			});
		} else {
			alertify.log(res.msg, "error", 6000);
		}
	});
	request.fail(function(res) {
		alertify.log("Could not Save changes...[see console]", "error", 0);
	});
}


function saveOrderingChangesAndProceed(ref) {
	$('#saveOrderingChangesModal').modal('hide');
	var ifSuccessFunction = $('#saveOrderingChangesModal').data('callerFunction'); 
	saveOrderChanges(ifSuccessFunction);
}

function discardOrderingChanges() {
	if (undoManager != null) {
		while (undoManager.canUndo()) {
			undoManager.undo();
		}
	}
	initUndoManager();
}

function discardOrderingChangesAndProceed(ref) {
	$('#saveOrderingChangesModal').modal('hide');
	discardOrderingChanges();
	setTimeout(function(){
		eval($('#saveOrderingChangesModal').data('callerFunction'));				
	}, 1000);
}


function deleteClicked(id, idx) {	

	if (undoManager != null && undoManager.dirty()) {
		var callerFunction = 'deleteClicked("' + id + '", "' + idx + '")';
		$('#saveOrderingChangesModal').data('callerFunction', callerFunction);
		$('#saveOrderingChangesModal').modal('show');
		return;
	}
	if (!confirm("Are you sure you want to delete?")) {
		return;
	}
	var actionType = 'delete';
	var sch = $("#sch").val();
	var url = "/secure/rest/db";
	if (isVariableDeclaredAndNotNull(securePostUrl)) {
		url = securePostUrl;
	}
	var request = $.ajax({
		type : "POST",
		url : url + "?actionType=" + actionType + "&sch=" + sch,
		headers : jsonHeaders,
		dataType : 'json',
		data : '{"_id":{"$oid" : "' + id + '"}}'
	});
	request.done(function(res) {
		if (res.result == 0) { 
			alertify.log(res.msg, "success", 6000);										
			var deletedObj = jsonDataArr.splice(idx, 1);
	    	genTable(jsonDataArr);
	    	if ((jsonDataArr.length > 0) && (sOrderJsonDataArr.length > 0)) {
	    		updateOrderAfterDeleteClicked(deletedObj['sOrder']);
	    	}
		} else {
			alertify.log(res.msg, "error", 6000);
		}
	});
	request.fail(function(res) {
		alertify.log("Could not delete...[see console]", "error", 0);
	});
}
