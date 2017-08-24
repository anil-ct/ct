	function getQTypeClass(qTypeText){
		//.qType-MC-MA:before, .qType-MC-SA:before, .qType-CErr:before, .qType-CEval:before{
		if ("Copy Writing" == qTypeText) {
			return "qType-CWrit";
		} else if ("Compilation Errors" == qTypeText) {
			return "qType-CErr";
		} else if ("Code Evaluation" == qTypeText) {
			return "qType-CEval";
		} else if ("Multiple Choice - Multiple Answers" == qTypeText) {
			return "qType-MC-MA";
		} else if ("Multiple Choice - Single Answer" == qTypeText) {
			return "qType-MC-SA";
		} else if ("Restore Correct Order" == qTypeText) {
			return "qType-RCO";
		} else if ("Fill in the Blanks" == qTypeText) {
			return "qType-FIB";
		} else if ("Match the Following" == qTypeText) {
			return "qType-MF";
		} 
	}
		
	function showQTextPreviewForQuestion(elem, qId, question, userResponse) {
		var oldTitle = $(elem).attr('title');
		var isPopoverCreated = $(elem).attr('isPopoverCreated');
		var content = 'Unknown..probably not implemented. Please inform Admin.';
		if ((questionTypesMap[question.questionType].questionType == 'Compilation Errors')
				|| (questionTypesMap[question.questionType].questionType == 'Copy Writing') ) {
			content = "<x>" + question.questionText + "</x><x><pre class='creamPreTab4'>" + question.content + "</pre></x>";
			if (userResponse) {
				content = content + "\n<x> User's Answer : </x><x><pre class='creamPreTab4'>" + userResponse + "</pre></x>";	
			}
		} else {
			content = "" + question.questionText + "";
		} 
		$(elem).attr('data-content', content);
		if (isPopoverCreated == null) {
			$(elem).attr("data-trigger","focus");
			$(elem).popover({"html": true, "placement": 'right', "trigger": "manual", 'container': 'body', 'title': "<strong>Question Text</strong><span  class='close ' onclick='closeQTextPreviewPopover(\""+qId+"\")' ><span>&times;</span></span> ", 
						"template": '<div class="popover qTextPreviewPopover" role="tooltip"><div class="arrow"></div><h3 class="popover-title qTextPreviewTitle"></h3><div class="popover-content qTextPreviewContent"></div></div>'});
			$(elem).attr('isPopoverCreated', "true");	
			$(elem).on('hidden.bs.popover', function () {				
				$(this).removeAttr('data-content');
				$(elem).attr('title', oldTitle);
			})
		}
		$(elem).popover('toggle');

	}
	
	function closeQTextPreviewPopover(qId) {
l("closeQTextPreviewPopover called..qId = " + qId);
		var elem = $("span[qTextPreviewId=qTextPreviewId_"+ qId + "]");
		if (elem.length > 0) {
			$(elem).popover('toggle');		
		}
	}
	
	function hideAllQTextPreviewPopovers() {
		$.each($('.qTextPreviewPopover '), function (idx, popoverElem){
			$(popoverElem).remove();
		});
	}
	