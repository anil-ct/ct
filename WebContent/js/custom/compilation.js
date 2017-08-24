function displayExecutionResults(executionErrorDetailsNew) {
	eval("executionErrorDetails = " + executionErrorDetailsNew + ";"); 
	showCompilationErrors([], "");
}	

function checkCompilationErrors(selectedQuestionTypeText) {
		extraErrorDetails = [];
		executionErrorDetails = [];
	
		if("Compilation Errors" == selectedQuestionTypeText) {			
			var content = $('#compilationErrorEditor').data("editor").getSession().getValue();
			$('#compilationProgressDiv').show()
			$('#compilationProgressDiv').show()
			document.getElementById("javaCompilerApplet").compile(content, cq.className, true);
			
			var errors = eval(document.getElementById("javaCompilerApplet").getDiagnosticsAsJson().toString());
			$('#compilationProgressDiv').hide();			
			var noExtraErrors = true;
			if (errors.length == 0) {
				clearCompilationErrors();
				return noExtraErrors;
			} else {
				// populate the errors and display them
				// 1. If the className is altered, try to customize the error message 

				/*
				//Below code will work when using JavaCompiler
				//then the message is of type "class PrintHello1 is public, should be declared in a file named PrintHello1.java" when using JavaCompiler
				var middleTextIndex = errors[0]['message'].indexOf(' is public, should be declared in a file named ');
				var startingIndex = errors[0]['message'].indexOf("class ");
				var classNameHasBeenAltered = false; 
				if (errors[0].hasOwnProperty('message') 
						&& (middleTextIndex != -1)
						&& (startingIndex == 0) ) {
					//if the class name is altered...
					var className = errors[0]['message'].substring("class ".length, middleTextIndex);
					extraErrorDetails.push({message: "The class name should be " + cq['className'] + " instead of " + className});
					classNameHasBeenAltered = true;
				}
				*/
				
				//Below code will work when using EcpliseCompiler
				// it is "The public type student must be defined in its own file"
				//        The public type student must be defined in its own file
				var endingTextIndex = errors[0]['message'].indexOf(' must be defined in its own file');
				var startingIndex = errors[0]['message'].indexOf("The public type ");
				if (errors[0].hasOwnProperty('message') 
						&& (endingTextIndex != -1)
						&& (startingIndex == 0) ) {
					//if the class name is altered...
					var className = errors[0]['message'].substring("The public type ".length, endingTextIndex);
					errors[0]['message'] = "The class name should be <c>" + cq['className'] + "</c> instead of <span style='color:red'>" + className + "</span>";
				}
l(errors[0])
				showCompilationErrors(errors, content);				
			}
		}//if q-type is compilation errors
		return false;
	}

	function showCompilationErrors(errors, code, hideExpectedOutput) {
		clearCompilationErrors();
		var text = "";
		
		if (errors.length > 0) {
			text = text + "<ul>";
			text = text + "<ol><h4 class='text-warning'>Compilation Errors</h4></ol>";
			$.each(errors, function(idx, error){
				text = text + "<ol ><a class='text-danger' href='javascript:showErrorLine(" + error.lineNumber + ", " + error.position + ", " 
																							+ error.columnNumber + ", "
																							+ error.startPosition + ", "
																							+ error.endPosition + ", "
																							+ error.startPositionLineNo + ", "
																							+ error.endPositionLineNo
																							+ ")'>" + error.kind + "  in line no : " + error.lineNumber + "</a></ol>";
				text = text + "<ol ><a class='text-danger' href='javascript:showErrorLine(" + error.lineNumber + ", " + error.position + ", " 
																							+ error.columnNumber + ", "
																							+ error.startPosition + ", "
																							+ error.endPosition + ", "
																							+ error.startPositionLineNo + ", "
																							+ error.endPositionLineNo
																							+ ")'>" + error.source + "</a></ol>";
				text = text + "<ol><pre style='width:100%'>" + error.message + "</pre></ol>";
			});
			text = text + "</ul>";
		}
		var selectedQuestionTypeText = "";
		if (getCTMode() == 0) {
			//if we are in the authoring mode 
			selectedQuestionTypeText = $('#questionType option:selected').text();
		} else {
			selectedQuestionTypeText = questionTypesMap[cq.questionType].questionType;
		}
		if ("Compilation Errors" == selectedQuestionTypeText) {
			$('#compilationErrorsDiv').html(text);
		} else {
			$('#copyWritingExecutionResultsDiv').html(text);
		}		
	}
	
	function clearCompilationErrors() {
		$('#compilationErrorsDiv').empty();
		$('#copyWritingExecutionResultsDiv').empty();
	}
