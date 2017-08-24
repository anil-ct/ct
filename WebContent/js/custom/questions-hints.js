	function showHintsClicked() {
		var idx = $('#clickedIDX').val();
		var hintsArr = [];
		if (idx != "") {
			hintsArr = (jsonDataArr[idx].hasOwnProperty('hints'))?jsonDataArr[idx].hints: []; 
		}

		if ($('#hintCount').data('hints') != null) {
			//if the modifiedHints are present, it means that he has some un-saved modificatins..
			// and we should show the latest temp modifications...
			hintsArr = $('#hintCount').data('hints');
		}
		initHintsDialog(hintsArr);
		$('#hintsModalDialog').modal({show: true, keyboard: true, backdrop: false});
	}
	
	function initHintsDialog(hintsArr) {
		for (var i = 0; i < 10 ; i++) {
			var hintInclude = false;
			var hintText = "";
			var isRouterHint = false;
			if (i < hintsArr.length) {
				//if there is 1 or 2 hints only initialize them 
				hintInclude = hintsArr[i].include; 
				hintText = hintsArr[i].text;
				isRouterHint = hintsArr[i].isRouterHint;	
			}
			$('#hintsInclude_' + i).prop("checked", hintInclude);
			$('#hintsText_' + i).val(hintText);
			$('#isRouterHint_' + i).prop("checked", isRouterHint);
		}
	}
	
	function closeHintsClicked() {
		$('#hintsModalDialog').modal('hide');
	}
	
	function saveHintsClicked() {
		var idx = $('#clickedIDX').val();
		var originalHints = [];
		if (idx != "") {
			//if there are hints in the current question being edited...
			originalHints = (jsonDataArr[idx].hasOwnProperty('hints'))?jsonDataArr[idx].hints: [];
		}
		
		var lastIndexWithData = 0;
		var lastIndexWithOutData = -1;
		var emptyEntry = {include: false, text: "", isRouterHint: false};
		/*
		Below code will iterate through the 10 entries in the dialog 
		1. If an entry is has some data, it will add(store) to a newHints array
		2. If an entry is empty, it till remember it
		3. if an entry has some data after finding an empty entry, it will ensure 
			that at the index of previously found empty data an empty entry is inserted.
			By doing this, we will not have empty entries at the end.
			We might have empty entries in the middle, which is acceptable since their include flag will be false.
			After the newHints array is ready, compare it with the old array.
			If they are different, then mark that hints are dirty. Else clear the flag.
			This dirty flag of the hints can be used while saving or to warn the user while change the 
			selection to some-other question without saving changes.
		4. Make sure that isRouterHint is the last in the included hints list.
		5. Make sure isRouterHint is not selected for more than one entry.
		6. If isRouterHint is selected and its include flag is false, warn the user.
		7. If include is selected and Text is empty, warn the user.
		8. Hint text cannot be duplicated.
		*/
		
		var newHintsArr = [];
		var differencesInHints = [];
		
		var uniqueHintTextMap = {};
		var firstSelectedRouterHintIndex = -1;
		var lastIncludedHintIndex = -1;
		
		for (var i = 0; i < 10 ; i++) {
			var hintInclude = $('#hintsInclude_' + i).is(":checked");
			var hintText = $('#hintsText_' + i).val().trim();
			var isRouterHint = $('#isRouterHint_' + i).is(":checked");
			
			if (hintInclude && (hintText.length == 0)) {
				alertify.log("Hint text cannot be empty.", "error", 3000);
				$('#hintsText_' + i).focus();
				return false;
			}
			
			if(uniqueHintTextMap[hintText] != null) {
				alertify.log("Hint text already exists in Hint : " + (parseInt(uniqueHintTextMap[hintText]) + 1), "error", 3000);
				$('#hintsText_' + i).focus();
				return false;
			}
			
			if (isRouterHint && (hintText.length == 0)) {
				alertify.log("Router Hint text cannot be empty.", "error", 3000);
				$('#hintsText_' + i).focus();
				return false;
			}
						
			if ((firstSelectedRouterHintIndex != -1) && (isRouterHint) ) {
				alertify.log("Router Hint can be assiged to only one hint, and that has to be the last included Hint. It is already assigned to Hint : " + (firstSelectedRouterHintIndex + 1), "error", 5000);
				$('#hintsText_' + i).focus();
				return false;
			}
			
			if (isRouterHint && (!hintInclude)) {
				alertify.log("Router Hint text has to included. If you do not want to include, unslect it as Router Hint.", "error", 5000);
				$('#hintsText_' + i).focus();
				return false;
			}
			
			if (isRouterHint) {
				firstSelectedRouterHintIndex = i;
			}
			
			if (hintInclude) {
				lastIncludedHintIndex = i;
			}
			
			if ((!hintInclude) && (hintText.length == 0) && (!isRouterHint)) {
				//remember the index, so that we can insert it with an empty entry if there is valid data in the subsequent entries.
				lastIndexWithOutData = i;
			} else {
				lastIndexWithData = i;
				if ((lastIndexWithOutData != -1) && (lastIndexWithData > lastIndexWithOutData)) {
					//verify if there was a previous entry which was empty and not assigned, assign an empty entry
					for (var j = 0; j < (lastIndexWithData - lastIndexWithOutData); j++)
					newHintsArr.push(emptyEntry);
					lastIndexWithOutData = -1;
				}
				newHintsArr.push({include: hintInclude, text: hintText, isRouterHint: isRouterHint});
				uniqueHintTextMap[hintText] = i;
			}			
		}
		
		if ((firstSelectedRouterHintIndex != -1) && (firstSelectedRouterHintIndex != lastIncludedHintIndex)) {
			alertify.log("Router Hint text has to be the last included Hint.", "error", 4000);
			$('#hintsText_' + i).focus();
			return false;
		}
		
		
		//compare the newHints with the original hints and make note of the differences
		//TODO Later write code which will store the exact diff details, so that they can he shown to user
		//now we are going to simplly mark a flag called dirty...
		var hintsDirty = false;
		if (originalHints.length ==  newHintsArr.length) {
			$.each(originalHints, function(index, originalHint){
				if (!(areHintsEqual(originalHint, newHintsArr[index]))) {
					hintsDirty = true;
					return false;
				}
			});
		} else {
			hintsDirty = true;
		}
		$('#hintCount').data('hints', newHintsArr);
		$('#hintCount').html(newHintsArr.length);
		if (hintsDirty) {
			$('#hintCount').addClass('hintsDirty');			
		} else {
			$('#hintCount').removeClass('hintsDirty');
		}
		$('#hintsModalDialog').modal('hide');		
l(newHintsArr)
l("hintsDirty ==> " + hintsDirty)
	}
	
	function areHintsEqual(first, second) {
		if ((first.include == second.include)
				&& (first.text == second.text)
				&& (first.isRouterHint == second.isRouterHint)) {
			return true;
		}
		return false;
	}