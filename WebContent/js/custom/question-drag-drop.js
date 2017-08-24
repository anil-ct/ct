	function handleTestDesignerDragStart(e) {
		if (undoManager != null && undoManager.dirty()) {
			alertify.log("First save the changes made to order of items and then try again.", "warn", 5000);
			return false;
		} 
		var questionDetailsArr = [];
		var incompleteQuestions = [];
		
		$.each($(".selectableItems:checked"), function(idx, item) {
			var id = $(item).attr('dbId');			
			var question = jsonDataMap[id];
			var questionDetails = {id : id, src : feSrc, isEnabled: true};
			questionDetails["extraInfo"] = getExtraInfoForTestDesigner(question);
			questionDetailsArr.push(questionDetails);
			var selectedQuestionTypeText = questionTypesMap[question.questionType].questionType;
			if (!question.isEnabled
					|| (question.pending.length > 0)
					|| (isCodeExecutionType(selectedQuestionTypeText) && !question.allowExecution)) {
				incompleteQuestions.push(question.questionNo);
			}
		});		
		if (incompleteQuestions.length > 0) {
			alertify.log("Cannot include disabled questions, questions with pending items or non-executable coding. Please review Q. No(s) : " + JSON.stringify(incompleteQuestions) , "warn", 5000);
			return false;
		}
		if (questionDetailsArr.length == 0) {
			alertify.log("Select a question to be dropped.", "warn", 5000);
			return false;
		} else {
			questionDetailsBeingDragged = JSON.stringify({questionDetailsArr : questionDetailsArr, ctDragObjectType: 'multipleQsForTestDesigner'});
			e.dataTransfer.setData("text/plain", questionDetailsBeingDragged);
			return true;
		}
	}
	
	function getExtraInfoForTestDesigner(question) {
		var extraInfo = {};		
		extraInfo['questionType'] = question.questionType;
		extraInfo['difficultyLevel'] = question.difficultyLevel;
		extraInfo['questionNo'] = question.questionNo
		extraInfo['hints'] = question.hasOwnProperty('hints')?question.hints:[];
		extraInfo['questionIntent'] = question.questionIntent;
		extraInfo['displayText'] = question.displayText;
		extraInfo['questionText'] = question.questionText;
		if ((questionTypesMap[question.questionType].questionType == 'Compilation Errors')
				|| (questionTypesMap[question.questionType].questionType == 'Copy Writing') ) {
			extraInfo['content'] = question.content;
		} 
		return extraInfo;		
	}
	

	

	function handleDragStart(e) {
		if (undoManager != null && undoManager.dirty()) {
			alertify.log("First save the changes made to order of items and then try again.", "warn", 5000);
			return false;
		} 
		var itemIdsArr = [];
		var question = null;
		$.each($(".selectableItems:checked"), function(idx, item) {
			var id = $(item).attr('dbId');			
			itemIdsArr.push(id);
			question = jsonDataMap[id];
		});		
		if (itemIdsArr.length == 0) {
			alertify.log("Select a question to be dropped.", "warn", 5000);
			return false;
		} else if (itemIdsArr.length > 1) {
			alertify.log("Only one question to be dropped at a time.", "warn", 5000);
			return false;
		} else {
			var questionDetails = {question : question};
			questionDetails['extraInfo'] = getExtraInfo(question);
			
			questionDetailsBeingDragged = JSON.stringify({questionDetails : questionDetails, ctDragObjectType: 'singleQuestion'});
			e.dataTransfer.setData("text/plain", questionDetailsBeingDragged);
			$('#questionDropArea').data('questionDetailsBeingDragged', questionDetailsBeingDragged);
		}
	}
	
	
	function getExtraInfo(question) {
		//in this put all the select-box key-name values etc
		var extraInfo = {};		
		//Initialize the course name
		extraInfo['courseName'] = coursesMap[question.course].course;
		//Initialize the course name
		var courseTagNames = [];
		$.each(question.courseTag, function(idx, entry){
			courseTagNames.push(familyTagsMap[entry].courseTag);
		});
		extraInfo['courseTagNames'] = courseTagNames;
		
		extraInfo['difficultyLevelDisplayName'] = difficultyLevelsMap[question.difficultyLevel].displayName;
		//if parentId is not empty, user may want to later assign it under a parent.
		if (question.parentId != "") {
			extraInfo['parentIdQuestionNumber'] = jsonDataMap[question.parentId].questionNo;
			extraInfo['parentIdQuestionIntent'] = jsonDataMap[question.parentId].questionIntent;
		}
						
		//Initialize the course name
		var pendingNames = [];
		$.each(question.pending, function(idx, entry){
			pendingNames.push(pendingTagsMap[entry].description);
		});
		extraInfo['pendingNames'] = pendingNames;
		
		//TODO later write code for previousAppearance, when it is implemented here..
		//Make sure to get its related foreign-references if any
		
		extraInfo['questionTypeName'] = questionTypesMap[question.questionType].questionType;
		
		var restrictedCountriesNames = [];
		$.each(question.restrictedCountries, function(idx, entry){
			restrictedCountriesNames.push(countryTagsMap[entry].description);
		});
		extraInfo['restrictedCountriesNames'] = restrictedCountriesNames;
		
		extraInfo['sectionName'] = sectionsMap[question.section].section;
		
		extraInfo['topicName'] = topicsMap[question.topic].topic;
		
		return extraInfo;		
	}
	
	function setQuestionDetailsAndExtraInfo(questionDetails) {
l(questionDetails)		
		var question = questionDetails['question'];
		var extraInfo = questionDetails['extraInfo'];
		var reviewInfo = [];
		
		var unsavedChanges = getUnsavedChangesPresent();
		if (unsavedChanges != "") {
			if (!confirm("Below modifications are not saved. Do you want to discard them and proceed?" + unsavedChanges)) {
				return;
			}		
		}	
l("In side setQuestionDetailsAndExtraInfo...1");		
		/*
		 * We should allow users to drag and drop to different course...so we commented the below code, so that the course is not reset automatically
		if (coursesMap[question.course] != null) {
			//if the same courseId is already present in the db, set it as selected in the dropdown
			$("#course").val(question.course);
		} else {
			var courseId = null; 
			$.each(jsonCoursesDataArr, function(idx, entry) {
				if (extraInfo.courseName == entry.course) {
					courseId = entry._id.$oid;
					return false;
				}				
			});
			if (courseId != null) {
				$("#course").val(courseId);	
			} else {
				//include in the reviewInfo
				reviewInfo.push({"msg": "Could not find Course with name : " + extraInfo['courseName'] + ", make sure to assign it properly."});
			}
		}*/
		
		if (topicsMap[question.topic] != null) {
			//if the same topicId is already present in the db, set it as selected in the dropdown
			var exists = 0 != $('#topic option[value=' + question.topic + ']').length;
			if (exists) {
				$("#topic").val(question.topic);				
			} else {
				reviewInfo.push({"msg": "Topic [" + extraInfo['topicName'] + "] is present but not included in the current course, make sure to assign it properly."});
			}
		} else {
			var topicId = null; 
			$.each(jsonTopicsDataArr, function(idx, entry) {
				if (extraInfo.topicName == entry.topic) {
					topicId = entry._id.$oid;
					return false;
				}				
			});
			if (topicId != null) {
				$("#topic").val(topicId).change();	
			} else {
				//include in the reviewInfo
				reviewInfo.push({"msg": "Could not find Topic with name : " + extraInfo['topicName'] + ", make sure to assign it properly."});
			}
		}
		
		
		if (sectionsMap[question.section] != null) {
			//if the same sectionId is already present in the db, set it as selected in the dropdown			
			var exists = 0 != $('#section option[value=' + question.section + ']').length;
			if (exists) {
				$("#section").val(question.section);				
			} else {
				reviewInfo.push({"msg": "Section [" + extraInfo['sectionName'] + "] is present but not included in the current course, make sure to assign it properly."});
			}
		} else {
			var sectionId = null; 
			$.each(jsonSectionsDataArr, function(idx, entry) {
				if (extraInfo.sectionName == entry.section) {
					sectionId = entry._id.$oid;
					return false;
				}				
			});
			if (sectionId != null) {
				$("#section").val(sectionId);	
			} else {
				//include in the reviewInfo
				reviewInfo.push({"msg": "Could not find Section with name : " + extraInfo['sectionName'] + ", make sure to assign it properly."});
			}
		}
				
		$("#duration").val(question.duration);
		
		if (difficultyLevelsMap[question.difficultyLevel] != null) {
			//if the same difficultyLevelId is already present in the db, set it as selected in the dropdown			
			$("#difficultyLevel").val(question.difficultyLevel);
		} else {
			var difficultyLevelId = null; 
			$.each(jsonDifficultyLevelsDataArr, function(idx, entry) {
				if (extraInfo.difficultyLevelDisplayName == entry.displayName) {
					difficultyLevelId = entry._id.$oid;
					return false;
				}				
			});
			if (difficultyLevelId != null) {
				$("#difficultyLevel").val(difficultyLevelId);	
			} else {
				//include in the reviewInfo
				reviewInfo.push({"msg": "Could not find Difficulty Level with name : " + extraInfo['difficultyLevelDisplayName'] + ", make sure to assign it properly."});
			}
		}
		
		$("#allowExecution").prop("checked", question.allowExecution);
		
		var newCourseTagIdArr = [];		
		$.each(question.courseTag, function(idx, courseTagId) {
			var courseTagName = extraInfo['courseTagNames'][idx];			
			if (familyTagsMap[courseTagId] != null) {
				//if the same courseTagId is already present in the db, set it as selected in the dropdown				
				var exists = 0 != $('#courseTag option[value=' + question.section + ']').length;
				if (exists) {
					newCourseTagIdArr.push(courseTagId);									
				} else {
					reviewInfo.push({"msg": "Course Tag [" + courseTagName + "] is present but not included in the current course, make sure to assign it properly."});
				}
			} else {
				var newCourseTagId = null; 
				$.each(jsonCourseTagsDataArr, function(idx, entry) {
					if (courseTagName == entry.courseTag) {
						newCourseTagId = entry._id.$oid;
						return false;
					}				
				});
				if (newCourseTagId != null) {
					newCourseTagIdArr.push(newCourseTagId);
				} else {
					//include in the reviewInfo
					reviewInfo.push({"msg": "Could not find Course Tag with name : " + courseTagName + ", make sure to assign it properly."});
				}
			}						
		});
		$("#courseTag").select2('val', newCourseTagIdArr);
		
		
		$("#showConsole").prop("checked", getBooleanForProperty(question, "showConsole", false));
		
		
		var newCountryTagIdsArr = [];		
		if (question.hasOwnProperty('restrictedCountries') && question.restrictedCountries != null) {
			$.each(question.restrictedCountries, function(idx, restrictedCountryId) {
				var restrictedCountryTagName = extraInfo['restrictedCountriesNames'][idx];			
				if (countryTagsMap[restrictedCountryId] != null) {
					//if the same restrictedCountryId is already present in the db, set it as selected in the dropdown
					newCountryTagIdsArr.push(restrictedCountryId);
				} else {
					var newRestrictedCountryId = null; 
					$.each(jsonCountryTagsDataArr, function(idx, entry) {
						if (restrictedCountryTagName == entry.description) {
							newRestrictedCountryId = entry._id.$oid;
							return false;
						}				
					});
					if (newRestrictedCountryId != null) {
						newCountryTagIdsArr.push(newRestrictedCountryId);
					} else {
						//include in the reviewInfo
						reviewInfo.push({"msg": "Could not find Restricted Country Tag with name : " + restrictedCountryTagName + ", make sure to assign it properly."});
					}
				}						
			});
		}
		$("#restrictedCountries").select2('val', newCountryTagIdsArr);
		
		
		/*var pendingNames = [];
		if (question.hasOwnProperty('pending') && question.pending != null) {
			$.each(question.pending, function(idx, entry){
				pendingNames.push(pendingTagsMap[entry].description);
			});
		}
		extraInfo['pendingNames'] = pendingNames;*/
		
		var newPendingIdsArr = [];		
		if (question.hasOwnProperty('pending') && question.pending != null) {
			$.each(question.pending, function(idx, pendingId) {
				var pendingTagName = extraInfo['pendingNames'][idx];			
				if (pendingTagsMap[pendingId] != null) {
					//if the same pendingId is already present in the db, set it as selected in the dropdown
					newPendingIdsArr.push(pendingId);
				} else {
					var newPendingId = null; 
					$.each(jsonPendingTagsDataArr, function(idx, entry) {
						if (pendingTagName == entry.description) {
							newPendingId = entry._id.$oid;
							return false;
						}				
					});
					if (newPendingId != null) {
						newPendingIdsArr.push(newPendingId);
					} else {
						//include in the reviewInfo
						reviewInfo.push({"msg": "Could not find Pending Tag with name : " + pendingTagName + ", make sure to assign it properly."});
					}
				}						
			});
		}
		if (newPendingIdsArr.length == 0) {
			newPendingIdsArr.push("54f6e6ea95d05984f76004e9");
		}
		$("#pending").select2('val', newPendingIdsArr);
		
		//TODO later write code for previousAppearance, when it is implemented here..
		//Make sure to get its related foreign-references if any
		//$("#previousAppearance").select2('val', jsonDataArr[idx].previousAppearance);
		
		$("#hintCount").html(question.hasOwnProperty('hints')?question.hints.length:"0");
		
		$("#hintCount").data('hints', question.hasOwnProperty('hints')?question.hints:[]);
		$("#hintCount").removeClass('hintsDirty');
		$("#questionIntent").val(question.questionIntent);
		$("#displayText").val(question.displayText);
		$("#questionText").val(question.questionText);
		
		if (questionTypesMap[question.questionType] != null) {
			//if the same questionTypeId is already present in the db, set it as selected in the dropdown
			$("#questionType").val(question.questionType);
		} else {
			var questionTypeId = null; 
			$.each(jsonQuestionTypesDataArr, function(idx, entry) {
				if (extraInfo.questionTypeName == entry.questionType) {
					questionTypeId = entry._id.$oid;
					return false;
				}				
			});
			if (questionTypeId != null) {
				$("#questionType").val(questionTypeId);	
			} else {
				//include in the reviewInfo
				reviewInfo.push({"msg": "Could not find Question Type with name : " + extraInfo['questionTypeName'] + ", make sure to assign it properly."});
			}
		}
		
		
		var selectedQuestionTypeText = $('#questionType option:selected').text();
		$("#isEnabled").bootstrapSwitch("setState", getBooleanForProperty(question, "isEnabled", false));		
		
		//Since we are adding a new question, it should be like clone...
		$("#actionType").val('add');	
		$("#_id").val("");
		$("#questionNo").val("");
		$("#qNoDisplay").html("&nbsp;");
		if (question.hasOwnProperty('parentId') && (question.parentId != "") ) {
			//if a clone is being cloned, use the original clone's parentId
			var parentId = question.parentId;
			if (jsonDataMap[parentId] != null) {
				//if the same parentId is already present in the db, set it as selected in the dropdown
				$("#parentId").select2('val', parentId);
			} else {				 
				reviewInfo.push({"msg": "Could not find Parent Question Id for : Q No: " + extraInfo['parentIdQuestionNumber'] 
					+ " with Question Intent : '" + extraInfo['parentIdQuestionIntent']  + "', make sure to assign it properly."});				
			}
			
		} 
		$("#clickedIDX").val("");
		$("#addBtn").text("Add");
		
		initExtraContent(selectedQuestionTypeText, question);
		$("#displayText").focus();
		
		return reviewInfo;		
	}

	
	
	function allowDrop(event) {
		event.preventDefault();
	}
	function handleDrop(event) {
        event.preventDefault();
		var data = event.dataTransfer.getData("text/plain");
		//check is the question is being dragged and dropped on the same page, then warn the user.
		var questionDetailsBeingDropped = $('#questionDropArea').data('questionDetailsBeingDragged');
		if (data == questionDetailsBeingDropped) {
			alertify.log("Question cannot be dragged and dropped in the same page.", "error", 4000);
			return false;
		}
		data = JSON.parse(data);
		if(data.hasOwnProperty('ctDragObjectType') && (data['ctDragObjectType'] == 'singleQuestion')) {
			var questionDetails = data['questionDetails'];
			if (questionDetails == null) {
				alertify.log("Select some Question to be dropped!", "error", 4000);
				return false;
			} else {
				return initQuestionDetailsFromDrop(questionDetails);
			}	
		} else {
			alertify.log("Only a single question can be dropped here. [Found ctDragObjectType : " + data['ctDragObjectType'] + " ]", "error", 4000);
			return false;
		}		
	}
	
	function initQuestionDetailsFromDrop(questionDetails) {
		if ($('#actionType').val() == 'edit') {
			alertify.log("Currntly a question is selected for edit, choose to Update to discard changes by clicking reset and then try again.", "warn", 8000);
			return false;
		} 
		var tmpQuesiton = jsonDataMap[questionDetails['question']._id.$oid];		
		if (tmpQuesiton != null && (tmpQuesiton.course == $('#course').val()) ) {
			alertify.log("This question already exists [Q.No : " + tmpQuesiton.questionNo + "], use Clone and not drag-drop to clone a question.", "warn", 6000);
			return false;
		} 
		
		
		var reviewInfo =  setQuestionDetailsAndExtraInfo(questionDetails);

		if (reviewInfo.length > 0) {
			var text = "<ol>";
			$.each(reviewInfo, function(idx, entry){
				text = text  + "<li>" + entry.msg + "</li>"; 
			}); 
			text = text + "</ol>"; 
			$( "#dropPopupDialog" ).html(text);
			$( "#dropPopupDialog" ).dialog("open");
		}
		
	}