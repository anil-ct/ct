var jsonHeaders = {
	'Accept' : 'application/json',
	'Content-Type' : 'application/json'
};

function nodeHasAttr(attr) {			
	//For some browsers, 'attr' is undefined; for others,
	//'attr' is false.  Check for both.
	if (typeof attr !== typeof undefined && attr !== false) {
		return true;
	} else {
		return false;	
	}
}

function getLabelNodeFor(container, node) {
	var label = $(container).find('label[for="'+$(node).attr("id")+'"]');

	if(label.length <= 0) {
	    var parentElem = $(node).parent();

	    if ($.isEmptyObject(parentElem)) {
	    	return null;
	    }
	    var parentTagName = $(parentElem).get(0).tagName.toLowerCase();

	    if(parentTagName == "label") {
	        return parentElem;
	    } else {
	    	return null;	
	    }	     
	} else {
		return label;
	}
}


function functionExists(functionName) {
	return (typeof functionName == 'function');
}

var l = function(o) {
	console.log(o);
};

var alertify_log = function(msg, status, timeout) {
	alertify.log(msg, status, timeout);
}


String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

	$(document).ready(function(){
		if (typeof jsonPageMetaDetails == typeof undefined  ) {
			return true;
		}
		if(!$.isEmptyObject(jsonPageMetaDetails)) {
			var formsMap = jsonPageMetaDetails["formsMap"];
			if(!$.isEmptyObject(formsMap)) {
				$.each(formsMap, function(formId, formData){
					$.each(formData, function(fieldName, attrs){						
						$('#'+formId).find('#'+fieldName).prop("required", (attrs['required'] == true));
						if(attrs['unique']) {
							$('#'+formId).find('#'+fieldName).attr("distinct", (attrs['unique'] == true));
						}
					});
				});
			}
		}
	});
	
	function convertToMap(arr) {
		var map = {};
		$.each(arr, function(idx, entry){
			map[entry._id.$oid] = entry;
		});
		return map;
	}
	
	function convertEnabledCoursesAndTestsToMap(arr) {
		//enabledCourses[] and enabledTests[] will have json objects of the format {id: courseId/testId, src: dbName}
		var map = {};
		$.each(arr, function(idx, entry){
			map[entry.id] = entry;
		});
		return map;
	}
	
	$.fn.serializeObject = function() {
	   var o = {};
	   var a = this.serializeArray();
	   
	   $.each(a, function() {
	       if (o[this.name]) {
	           if (!o[this.name].push) {
	               o[this.name] = [o[this.name]];
	           }
	           o[this.name].push(this.value || '');
	       } else {
	           o[this.name] = this.value || '';
	       }
	   });
	   return o;
	};	
		
	function getBooleanForProperty(jsonObj, switchPropName, defaultValue) {
		if (jsonObj && (jsonObj.hasOwnProperty(switchPropName))) {
			return jsonObj[switchPropName];
		}
		return defaultValue;		
	}		
	
	function selectAllItems(selectableItemClassName, state) {
		$.each($('.' + selectableItemClassName), function(idx, item) {
			$(item).prop("checked", state);
		});
	}
	
	function toggleAllItems(selectableItemClassName) {
		$.each($('.' + selectableItemClassName), function(idx, item) {
			$(item).prop("checked", !$(item).is(":checked"));
		});
	}	
	
	function replaceObjectInArray(arr, newObject) {
		var relacedObjectIdx = -1;
		$.each(arr, function(idx, oldObject){
			if (oldObject["_id"]["$oid"] == newObject["_id"]["$oid"]) {
				arr[idx] = newObject;
				relacedObjectIdx = idx;
			}
		});
		return relacedObjectIdx; 
	}	
	
	function enableSelectedItemsClicked(selectableItemClassName, state) {
		var newItemIdsArr = [];
		var oldItemIdsArr = [];
		var jsonData = {"newItemIdsArr": newItemIdsArr, "oldItemIdsArr": oldItemIdsArr};
		$.each($('.' + selectableItemClassName + ":checked"), function(idx, item) {
			var id = $(item).attr('dbId');			
			newItemIdsArr.push( {"_id": {"$oid": id}, isEnabled: state});			
			oldItemIdsArr.push( {"_id": {"$oid": id}, isEnabled: getBooleanForProperty(jsonDataMap[id], "isEnabled", false)});
		});
		if (newItemIdsArr.length > 0) {
			if (undoManager != null && undoManager.dirty()) {
				var callerFunction = 'enableSelectedItemsClicked("' + selectableItemClassName + '", ' + state + ')';
				$('#saveOrderingChangesModal').data('callerFunction', callerFunction);
				$('#saveOrderingChangesModal').modal('show');
				return;
			}
			saveState(jsonData);
		} else {
			l("No items were selected to save...");
		}
	}
	
	function saveState(jsonData) {
		/* if (jsonData != null) {
			l(jsonData)
			return;
		} */
		var sch = $("#sch").val();
		var url = "/secure/rest/db";
		if (isVariableDeclaredAndNotNull(securePostUrl)) {
			url = securePostUrl;
		}
		var request = $.ajax({
			type : "POST",
			url : url + "/ss?sch=" + sch,
			headers : jsonHeaders,
			dataType : 'json',
			data : JSON.stringify(jsonData)
		});
		request.done(function(res) {
			if (res.result == 0) {
				alertify.log(res.msg, "success", 6000);
				reinitJsonDataArr(res.ref);					
			} else {
				alertify.log(res.msg, "error", 6000);
			}
		});
		request.fail(function(res) {
			alertify.log("Could not Save changes...[see console]", "error", 0);
		});
	}
	
	function reinitJsonDataArr(responseArr) {
		$.each(responseArr, function(idx, newObject){
			var idxInJsonDataArr = replaceObjectInArray(jsonDataArr, newObject);
			var id = newObject["_id"]["$oid"];
			jsonDataMap[id] = newObject;
			if ((idxInJsonDataArr != -1) && ($("#_id").val() == id)) {
				//if in edit mode make sure to correctly reset the switch state, by calling populate again
				populatePageEdit(idxInJsonDataArr, 'edit', id);
			}
		});
		genTable(jsonDataArr);
	}	
	
	function hasDuplicates(array) {
	    var valuesSoFar = {};
	    for (var i = 0; i < array.length; ++i) {
	        var value = array[i];
	        if (Object.prototype.hasOwnProperty.call(valuesSoFar, value)) {
	            return true;
	        }
	        valuesSoFar[value] = true;
	    }
	    return false;
	}
	
	function areArraysEqual(array1, array2, strict) {
		if (array1 === array2) {
			return true;
		}
		if (!array1)
	        return false;
		
	    if (!array2)
	        return false;
	    
	    
	    if (array1.length == 1)
	        strict = true;

	    if (array1.length != array2.length)
	        return false;

	    for (var i = 0; i < array1.length; i++) {
	        if (array1[i] instanceof Array && array2[i] instanceof Array) {
	            if (!areArraysEqual(array1[i], array2[i], strict))
	                return false;
	        }
	        else if (strict && array1[i] != array2[i]) {
	            return false;
	        }
	        else if (!strict) {
	        	var a1 = [];
	        	var a2 = [];
	        	$.extend(a1, array1);
	        	$.extend(a2, array2);
	            return areArraysEqual(a1.sort(), a2.sort(), true);
	        }
	    }
	    return true;	
	}
	
	
	function isVariableDeclaredAndNotNull2(variableName) {
		//since variables sent from avaz will be as strings..
		return eval ("((typeof " + variableName  + " !== 'undefined') && " + variableName + " !== null)");
	}
	
	function isVariableDeclaredAndNotNull(variableName) {
		return ((typeof variableName !== 'undefined') && variableName !== null);
	}
	
	function getTextForGivenIds(arrayWithIds, lookupMap, fieldName) {
		var text = "";		
		$.each(arrayWithIds, function(index, id){
			text = text + lookupMap[id][fieldName] + ", "; 
		});
		if (text.length == 0) {
			text = ""; 
		} else {
			text = text.substring(0, text.length-2);
			text = "[ " + text + " ]";
		}
		return text;
	}
	
	
	function getInputSelection(el) {
	    var start = 0, end = 0, normalizedValue, range,
	        textInputRange, len, endRange;

	    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
	        start = el.selectionStart;
	        end = el.selectionEnd;
	    } else {
	        range = document.selection.createRange();

	        if (range && range.parentElement() == el) {
	            len = el.value.length;
	            normalizedValue = el.value.replace(/\r\n/g, "\n");

	            // Create a working TextRange that lives only in the input
	            textInputRange = el.createTextRange();
	            textInputRange.moveToBookmark(range.getBookmark());

	            // Check if the start and end of the selection are at the very end
	            // of the input, since moveStart/moveEnd doesn't return what we want
	            // in those cases
	            endRange = el.createTextRange();
	            endRange.collapse(false);

	            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
	                start = end = len;
	            } else {
	                start = -textInputRange.moveStart("character", -len);
	                start += normalizedValue.slice(0, start).split("\n").length - 1;

	                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
	                    end = len;
	                } else {
	                    end = -textInputRange.moveEnd("character", -len);
	                    end += normalizedValue.slice(0, end).split("\n").length - 1;
	                }
	            }
	        }
	    }

	    return {
	        start: start,
	        end: end
	    };
	}

	function replaceSelectedText(el, text, selectInsertedText) {
	    var sel = getInputSelection(el), val = el.value;
	    var oldStart = sel.start;
	    var oldEnd = sel.end;
	    el.value = val.slice(0, sel.start) + text + val.slice(sel.end);
	    if (selectInsertedText) {
	    	var range = document.createRange();
	    	range.setStart(el, oldStart);
	    	range.setEnd(el, oldEnd + text.length());
	    }
	}	
	
	function getWindowLocation() {
		return window.location + "";
	}

	
	function isValidEmail(email) {
		return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
	}
	
	function openLoginDialog() {
		alertify.login("Session Expired.</br>Please Sign In", function (e, id, pwd) {
			if (e) {
				var returnUserToHome = false;
				var loginId = id.toLowerCase();
				var loginFormData = {};
				loginFormData["loginId"] = loginId;
				loginFormData["password"] = pwd;
				
				var oldLoginIdInHash = sessionStorage.getItem('loginId');
				var newLoginIdInHash = Sha256.hash(loginId);
				
				if(oldLoginIdInHash !== newLoginIdInHash){
					returnUserToHome = true;
				}
				
				var request = $.ajax({
					type : "POST",
					url : "/rest/login",
					headers : jsonHeaders,
					dataType : 'json',
					data : JSON.stringify(loginFormData)

				});
				request.done(function(res) {
					if (res.result >= 0) {
						if (returnUserToHome) {
							alertify.hide();
							sessionStorage.setItem("loginId", Sha256.hash(loginId));
							window.location.replace(res.msg);
						} else {
							alertify.success("Welcome back!");
							alertify.hide();					
						}
					} else {
						alertify.error("Invalid Login Id / Password. Please try again.");
					}
				});
				request.fail(function(res) {
					alertify.log("Error logging in...[please see the console]", "error", 5000);
				});
				
			} else {
				alertify.error("Invalid Login Id / Password. Please try again.");
			}
		});
	}