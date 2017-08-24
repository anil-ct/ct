	function displayLoopCounter(loopCounter) {
		try {
		var lc = JSON.parse(loopCounter);
l(loopCounter)		
		if (lc.probableCandidate) {
			var elem = $('#runId-' + lc.runId);
			$(elem).removeClass('hide');
			var loopTableText = "";			
			if ($('#loopPopover-runId-' + lc.runId).is(":visible")) {
				if ($('#loopTime-runId-loopId-' + lc.runId + '-' + lc.loopId).length == 1) {//if this loop-Id cells exist
					$('#loopTime-runId-loopId-' + lc.runId + '-' + lc.loopId).html(getDisplayTime(lc.startTime, lc.lastModifiedTime));
					$('#loopCount-runId-loopId-' + lc.runId + '-' + lc.loopId).html(lc.counter);
				} else {
					var loopRowText =  '<tr>';
					loopRowText = loopRowText + '<td>' + lc.codeText + '</td>';
					loopRowText = loopRowText + '<td id="loopTime-runId-loopId-' + lc.runId + '-' + lc.loopId+ '">' + getDisplayTime(lc.startTime, lc.lastModifiedTime) + '</td>';
					loopRowText = loopRowText + '<td id="loopCount-runId-loopId-' + lc.runId + '-' + lc.loopId+ '">' + lc.counter + '</td>';
					loopRowText = loopRowText + '</tr>';
					$('#loopTBody-runId-' + lc.runId).append(loopRowText);
					//$('#executionOutViewport').scrollTo($('#loopPopover-runId-' + lc.runId));
				}
			} else {
				loopTableText = loopTableText + '<table class="table table-bordered table-hover table-condensed table-striped" >';
				loopTableText = loopTableText + '<thead>';
				loopTableText = loopTableText + '<tr>';
				loopTableText = loopTableText + '<th>Loop Code</th>';
				loopTableText = loopTableText + '<th>Elapsed Time</th>';
				loopTableText = loopTableText + '<th>Execution Count</th>';
				loopTableText = loopTableText + '</tr>';
				loopTableText = loopTableText + '</thead>';
				loopTableText = loopTableText + '<tbody id="loopTBody-runId-' + lc.runId + '" >';
				loopTableText = loopTableText + '<tr>';
				loopTableText = loopTableText + '<td>' + lc.codeText + '</td>';
				loopTableText = loopTableText + '<td id="loopTime-runId-loopId-' + lc.runId + '-' + lc.loopId+ '">' + getDisplayTime(lc.startTime, lc.lastModifiedTime) + '</td>';
				loopTableText = loopTableText + '<td id="loopCount-runId-loopId-' + lc.runId + '-' + lc.loopId+ '">' + lc.counter + '</td>';
				loopTableText = loopTableText + '</tr>';
				loopTableText = loopTableText + '</tbody>';
				loopTableText = loopTableText + '</table>';
				
				$(elem).attr('data-content', loopTableText);
				$(elem).popover({"html": true, "trigger": 'manual', "placement": 'left', 'title': "<strong>Executing Loops</strong><span  class='close ' onclick='terminateExecByRunId(\"" + lc.runId + "\")' ><span>&times;</span></span> ", 
					"template": '<div  id="loopPopover-runId-'+lc.runId+'" class="popover executingLoopsPopover" role="tooltip">' 
					+ '<div class="arrow"></div><h3 class="popover-title executingLoopsPopoverText"></h3><div class="popover-content executingLoopsPopoverText">'
					+ '</div></div>'});
				$(elem).popover("show");
				l(loopTableText)
			}
		} else {
			l("Ignoring call to runId : " + lc.runId + " : " + lc.codeText)
		}
		} catch (err) {
			l(err)
		}
	}
	
	function getDisplayTime(startTime, lastModifiedTime) {
		// Calculate the difference in milliseconds
		  var differenceInMs = lastModifiedTime - startTime;
		  //take out milliseconds
		  differenceInMs = differenceInMs/1000;
		  var seconds = Math.floor(differenceInMs % 60);
		  differenceInMs = differenceInMs/60; 
		  var minutes = Math.floor(differenceInMs % 60);
		  return minutes + ":" + seconds;
	}
	
	function sendOut(runId, done, outContent) {
l("runId : " + runId + " : " + done + " : " + outContent)
		if(done) {
			markRunAsFinished(runId);
		} else {
			var elm = $('.outputField[runId="' + runId + '"]');
			if ($(elm).is("pre")) {
				$(elm).html($(elm).html() + outContent);
			} else {
				$(elm).val($(elm).val() + outContent);				
			}
		}
	}
	
	function markRunAsFinished(runId) {
		var elm = $('.outputField[runId="' + runId + '"]');
		$(elm).removeAttr('runId');
		$(elm).prev('.terminate').removeData('runId');
		$(elm).prev('.terminate').removeAttr('id');
		$(elm).prev('.terminate').removeAttr('data-content');
		$('#runId-' + runId).addClass('hide');
		$('#loopPopover-runId-'+runId).hide();
l("XXX ==> " + runId + " marked as finished....")		
	}
	
	function terminateExec(elem) {
		if ($(elem).attr('runId') != null ) {//this is during inMode 1, 2, 3
			document.getElementById("javaCompilerApplet").killBill($(elem).attr('runId'));
		} else if ($(elem).data('runId') != null) {//this us during code-authoring
			document.getElementById("javaCompilerApplet").killBill($(elem).data('runId'));
		}
	}
	
	function terminateExecByRunId(runId) {
		if (runId != null ) {
			document.getElementById("javaCompilerApplet").killBill(runId);
		}
	}
	
	
	//Above code is used in code authoring and inMode 1, 2, 3
	
	//Below code is mostly used in inMode 1, 2, 3 
	
	
	function sendException(runId, exceptionJsonNew) {
		//TODO make sure to mark this execution run as failed.
		var exceptionJson = JSON.parse(exceptionJsonNew); 
		var exceptionIdVsDetailsMap = $('#exceptionsTable').data('exceptionIdVsDetailsMap');
		if (exceptionIdVsDetailsMap == null) {
			exceptionIdVsDetailsMap = {};
			$('#exceptionsTable').data('exceptionIdVsDetailsMap', exceptionIdVsDetailsMap);
		}
		var exceptionId = Object.keys(exceptionIdVsDetailsMap).length;
		exceptionIdVsDetailsMap[exceptionId] = exceptionJson;
		
		if (getCTMode() == 4 && !(test.hasOwnProperty("showHintsOnExceptions") && test.showHintsOnExceptions) ) {
			$.each(exceptionJson.stackTraceArr, function(idx, entry){
				delete entry['theLine'];
			});
		}
		var outputToBeDisplayed = getExceptionStackTraceText(exceptionJson, exceptionId);
		
		$('#exceptionRunId-'+runId).append(outputToBeDisplayed);
		$('#exceptionRunId-'+runId).removeClass('hide');
		$('#executionOutputRunId-'+runId).addClass('hide');
				
		$.each($('#exceptionRunId-'+runId + ' .ste a'), function(idx, elem) {
			showExceptionPopover(elem);
		});
		
		markRunAsFinished(runId);
		
		if (getCTMode() == 4) {
			enableExecuteBtn();
		} else if (getCTMode() == 1 || getCTMode() == 2 || getCTMode() == 3) {		
			enableSubmit();
			var selectedQuestionTypeText = questionTypesMap[cq.questionType].questionType;
			if (selectedQuestionTypeText == "Copy Writing") {
				$('#executionResultRunId-' + runId).removeClass("isRunning");
			} else {
				$('#executionResultRunId-' + runId).removeClass("isRunning").addClass("inCorrect");	
			}
		}		
	}

	//this method is called inMode 1, 2, 3 and not during 4 or during authoring.. 
	function assignTestCaseExecutionRunId(runId, methodCallText, originalOutput) {
		var selectedQuestionTypeText = questionTypesMap[cq.questionType].questionType;
		if ($('#testCaseExecutionResultsDiv').length == 0) {
			var text = "<div id='testCaseExecutionResultsDiv'>"; 
			text = text + "<table id='exceptionsTable' class='table table-bordered table-striped1'>";
			text = text + "<thead>";
			text = text + "<tr>";
			text = text + "<th style='width: 10px'>#</th>";
			text = text + "<th >Method Call</th>";
			if (getCTMode() != 4) {//inExamMode
				if (selectedQuestionTypeText != "Copy Writing") {
					text = text + "<th >Expected</th>";
				}
			}
			text = text + "<th >Output</th>";
			if (getCTMode() != 4) {//inExamMode
				text = text + "<th style='width: 20px'>&nbsp;</th>";
			}
			text = text + "</tr>";
			text = text + "<caption><h4 class='text-warning'>Execution Results</h4></caption>";
			text = text + "</thead>";
			text = text + "<tbody id='executionResultsTBody'>";
			var trText = getExecutionResultRowText(runId, 1, methodCallText, originalOutput);
			text = text + trText;
			text = text + "</tbody>";
			text = text + "</table>";
			text = text + "</div>";
			$('#' + getExecutionResultsParentDiv()).append(text);
		} else {
			var rowIndex = $('#executionResultsTBody tr').length; 
			var trText = getExecutionResultRowText(runId, rowIndex + 1, methodCallText, originalOutput);			
			$('#executionResultsTBody').append(trText);			
		}		
		$('#myModal').scrollTo($('#execRunRowId-' + runId), 2000);
		$('#executionOutViewport').scrollTo($($('#execRunRowId-' + runId)),  0, {offset: {top:50, left:-30} });
	}
	
	function getExecutionResultRowText(runId, rowIndex, methodCallText, originalOutput) {
		var selectedQuestionTypeText = questionTypesMap[cq.questionType].questionType;
		methodCallText = replaceHTMLTags(methodCallText);
		var text = "<tr id='execRunRowId-"+runId+"'>";
		text = text + "<td style='vertical-align: top;'>" + rowIndex + "</td>";
		text = text + "<td style='vertical-align: top;' >" + methodCallText + "</td>";
		if (getCTMode() != 4) {//inExamMode
			if (selectedQuestionTypeText != "Copy Writing") {
				text = text + "<td class='' ><pre style='margin: 0px;'>" + originalOutput + "</pre></td>";
			}
		}
		text = text + "<td class=''>";
		text = text + "<span id='exceptionRunId-"+runId+"' class='hide' style='margin: 0px;'></span>";
		text = text + "<a id='runId-" + runId + "' runId='"+runId+"' onClick='terminateExec(this)' class='terminate hide btn btn-danger btn-xs'>Terminate</a>";
		text = text + "<pre id='executionOutputRunId-"+runId+"' class='outputField' runId='"+runId+"' style='margin: 0px;'></pre>";
		text = text + "</td>";
		
		text = text + "<td id='executionResultRunId-"+runId+"' class='isRunning'>";
		text = text + "<span class='isRunning fa-stack fa-lg' >";
		text = text + '				<i class="fa fa-refresh fa-spin fa-stack-1x  text-info "></i> ';
		text = text + '				<i class="fa fa-circle-o fa-stack-2x text-muted " ></i>';
		text = text + "</span>";
		if (getCTMode() != 4) {//inExamMode
			text = text + "<span class='isCorrect fa-stack fa-lg' >";
			text = text + '				<i class="fa fa-check fa-stack-1x  text-success "></i> ';
			text = text + '				<i class="fa fa-circle-o fa-stack-2x text-success " ></i>';
			text = text + "</span>";					
			text = text + "<span class='inCorrect fa-stack fa-lg' >";
			text = text + '				<i class="fa fa-times fa-stack-1x  text-danger "></i> ';
			text = text + '				<i class="fa fa-circle-o fa-stack-2x text-danger " ></i>';
			text = text + "</span>";			
		}
		text = text + "</td>";
	
		text = text + "</tr>";
		return text;
	}
	
	function showTestCaseResult(runId, testCaseResultNew) {
l("XXX ==> " + runId + " : testCaseResultNew : " + testCaseResultNew)		
		if (getCTMode() == 4) {//in exam mode
			$('#executionResultRunId-' + runId).removeClass("isRunning");
		} else if (getCTMode() == 1 || getCTMode() == 2 || getCTMode() == 3) {
			//	1. set row class to ==> (result.isOutputCorrect?"success":"danger")
			var testCaseResult = JSON.parse(testCaseResultNew);
			var selectedQuestionTypeText = questionTypesMap[cq.questionType].questionType; 
 			if ("Copy Writing" == selectedQuestionTypeText) {
 				//for copywriting always show the output as correct.
 				//since for multi-threading output and put-upt with timing details the output will vary...
 				$('#execRunRowId-' + runId).addClass("success text-success");
				$('#executionResultRunId-' + runId).removeClass("isRunning").addClass("isCorrect");
				var outputFieldText = $('#execRunRowId-' + runId + ' .outputField').text();
				var trimedOutputFieldText = getModifiedStackTraceMsg(outputFieldText);
				$('#execRunRowId-' + runId + ' .outputField').text(trimedOutputFieldText);
 			} else {
				$('#execRunRowId-' + runId).addClass(testCaseResult.isOutputCorrect?"success text-success":"danger text-danger");
				$('#executionResultRunId-' + runId).removeClass("isRunning").addClass(testCaseResult.isOutputCorrect?"isCorrect":"inCorrect");
 			}
		}
	}
	
	function executionCompleted(runId, killBill) {
		l("XX executionCompleted runId : " + runId + ",  killBill : " + killBill);
		if (getCTMode() == 4) {
			enableExecuteBtn();
		} else if (getCTMode() == 1 || getCTMode() == 2 || getCTMode() == 3) {		
			enableSubmit();			
		}
		//there is notting to do in authoring mode...
	}
	
	function didNotPassAllTestCases() {
		if (getCTMode() == 4) {
			enableExecuteBtn();
		} else if (getCTMode() == 1 || getCTMode() == 2 || getCTMode() == 3) {		
			$('#compilationErrorsDiv').append("<pre id='allTestCasesFailedText' class='text-danger creamPreTab4'><code><strong>Note: </strong>The code does not pass all the test cases.</code></pre>");
			$('#executionOutViewport').scrollTo($('#allTestCasesFailedText', 0, {offset: {top:-50, left:-30} }));
			enableSubmit();						
		}
		//there is notting to do in authoring mode...
	}
	
	function showExtraError(errorNew) {		
		var error = JSON.parse(errorNew);
		var liText = "<li class='text-danger'>" + error.message + "</li>";
l(error)		
		if ($('#extraErrorInfoDiv').length == 0) {
			var text = "<div id='extraErrorInfoDiv'>";
			text = text + "<ol id='extraErrorList'><h4 class='text-warning'>General Errors</h4></ol>";
			text = text + liText;
			text = text + "</ol></div>";			
			$('#' + getExecutionResultsParentDiv()).append(text);	
		} else {
			$('#extraErrorList').append(liText);
		}
	}
	
	function getExecutionResultsParentDiv() {
		var selectedQuestionTypeText = questionTypesMap[cq.questionType].questionType;		
		if ("Compilation Errors" == selectedQuestionTypeText) {
			return "compilationErrorsDiv";
		} else {
			return "copyWritingExecutionResultsDiv";
		}
	}
	

	
	function getModifiedStackTraceMsg(actualStackTraceMessage) {
		var stackTraceMessageArray = [];
		stackTraceMessageArray = actualStackTraceMessage.split("\n");
		var modifiedStackTraceMessage = "";
		var isReflectOccursContinuouslyFromAppletLineFlag = true;
		var isAppletFoundFlag = false;
		var indexOfLineAboveTheFirstLineWithOutReflect = -1;
		var indexOfOuterLoopIfStackArrayContainsApplet = -1;
		for (var outerLoopIndex = 0; outerLoopIndex < stackTraceMessageArray.length ; outerLoopIndex++) {
	
			// Checking if the string "com.ct.applet.CodeExecutor" is present in the
			// array stackMessage[]
			if (stackTraceMessageArray[outerLoopIndex].contains("com.ct.applet.CodeExecutor")) {
				isAppletFoundFlag = true;
				indexOfOuterLoopIfStackArrayContainsApplet = outerLoopIndex;
				/*
				 * If the string "com.ct.applet.CodeExecutor" is present then we
				 * check if the String "reflect" is present continuously or not in
				 * the array stackMessage[]
				 */
				for (var innerLoopIndex = outerLoopIndex - 1; innerLoopIndex >= 1; innerLoopIndex--) {
					if (stackTraceMessageArray[innerLoopIndex].contains("reflect.")
							&& isReflectOccursContinuouslyFromAppletLineFlag) {
						outerLoopIndex--;
					} else {
						isReflectOccursContinuouslyFromAppletLineFlag = false;
						indexOfLineAboveTheFirstLineWithOutReflect = innerLoopIndex;
						/*
						 * Break After storing the innerLoopIndex where the string
						 * "reflect" is not present continuously in the array
						 * stackMessage[]
						 */
						break;
					}
				}
				/*
				 * Appending the elements of stackMessageArray[] from ( index=0 to
				 * indexOfLineAboveTheFirstLineWithOutReflect becomes false )
				 */
				for (var indexOfStackArrayAfterRemovingApplet = 0; indexOfStackArrayAfterRemovingApplet <= indexOfLineAboveTheFirstLineWithOutReflect; indexOfStackArrayAfterRemovingApplet++) {
					modifiedStackTraceMessage = modifiedStackTraceMessage
							+ stackTraceMessageArray[indexOfStackArrayAfterRemovingApplet]
							+ "\n";
				}
				/*
				 * To continue the outerLoop from the same Index where it is matched
				 * with the string "com.ct.applet.CodeExecutor" in the array
				 * stackMessage[]
				 */
				outerLoopIndex = indexOfOuterLoopIfStackArrayContainsApplet;
			} else {
				/*
				 * If isAppletFoundFlag is true then it will check for the string
				 * "java.lang.Thread" is present in the array stackMessage[]
				 */
				if (isAppletFoundFlag) {
					if (stackTraceMessageArray[outerLoopIndex]
							.contains("java.lang.Thread")) {
						continue;
					} else {
						modifiedStackTraceMessage = modifiedStackTraceMessage
								+ stackTraceMessageArray[outerLoopIndex] + "\n";
					}
				} else {
					/*
					 * If the string "com.ct.applet.CodeExecutor" is not present in
					 * the array stackMessage[] then append the stackArrayMessage as
					 * it is to the stringVariable modifiedStackTraceMessage.
					 * starting outerLoopIndex from 1 thats why removing -2 from
					 * length of the array stackArrayMessage[].
					 */
					if ((outerLoopIndex == stackTraceMessageArray.length - 1)
							&& !isAppletFoundFlag) {
						for (var stackArrayIndex = 0; stackArrayIndex < stackTraceMessageArray.length; stackArrayIndex++) {
							modifiedStackTraceMessage = modifiedStackTraceMessage
									+ stackTraceMessageArray[stackArrayIndex]
									+ "\n";
						}
					}
				}
	
			}
		}
		return modifiedStackTraceMessage;
	}
	
	function replaceHTMLTags(methodCallText) {
		methodCallText = methodCallText.replace(/<b>/g, '&lt;b&gt;');
		methodCallText = methodCallText.replace(/<\/b>/g, '&lt;\/b&gt;');
		methodCallText = methodCallText.replace(/<h1>/g, '&lt;h1&gt;');
		methodCallText = methodCallText.replace(/<\/h1>/g, '&lt;\/h1&gt;');
		methodCallText = methodCallText.replace(/<h2>/g, '&lt;h2&gt;');
		methodCallText = methodCallText.replace(/<\/h1>/g, '&lt;\/h2&gt;');
		methodCallText = methodCallText.replace(/<h2>/g, '&lt;h3&gt;');
		methodCallText = methodCallText.replace(/<\/h2>/g, '&lt;\/h3&gt;');
		
		return methodCallText; 
	}	
