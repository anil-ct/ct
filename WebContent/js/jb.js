function l(o){
			console.log(o);
}

function jobMode() {
	if ($('#jobCardNumber').val() == "") {
		return "add";
	}
	return "edit";
}

function addDisableAttribute(id) {
	$('#' + id).attr('disabled', 'disabled');
}

function removeDisableAttribute(id) {
	$('#' + id).removeAttr('disabled', 'disabled');
}

function addReadonlyAttribute(id) {
	$('#' + id).attr('readonly', 'readonly');
}

function removeReadonlyAttribute(id) {
	$('#' + id).removeAttr('readonly', 'readonly');
}



function showItemInEstimation(display, itemId) {
		
	if(display) {
		//if (itemId == "paperCost") {
			$('#' + itemId + "Div").collapse('show');
		/*} else {
			$('#' + itemId + "Div").addClass('animateShow');
			$('#' + itemId + "Div").removeClass('animateHide');
		}*/
	} else {
		//if (itemId == "paperCost") {
			$('#' + itemId + "Div").collapse('hide');
			//$('#' + itemId + "Div").css('display', "none");
		/*} else {		
			$('#' + itemId + "Div").removeClass('animateShow');
			$('#' + itemId + "Div").addClass('animateHide');
			$('#' + itemId).val('0')
		}*/
	}
	

	
//	$('#isPlateEnabled').is(':checked') && $('#plateBy').val() != 'Party'
}


function toggleSelection(toggleId, toggleDisableIds, addReadonlyAttr) {
	var divId = toggleId + "Cost";
	if ($("#" + toggleId).is(':checked')) {
		for ( var id in toggleDisableIds) {
			removeDisableAttribute(toggleDisableIds[id]);
			if (addReadonlyAttr) {
				addReadonlyAttribute(toggleDisableIds[id]);
			}
		}
		showItemInEstimation(true, divId);
	} else {
		for ( var id in toggleDisableIds) {
			addDisableAttribute(toggleDisableIds[id]);
			if (addReadonlyAttr) {
				removeReadonlyAttribute(toggleDisableIds[id]);
			}
		}
		showItemInEstimation(false, divId);
	}
}


function enableDisableElementsUnderPanelBody(checkboxId) {
	var panelBodyId = checkboxId + "PanelBody";
	if($("#"+checkboxId).is(':checked')){
		$.each($('#' + panelBodyId + ' input, #' + panelBodyId + ' select'), function() {
			$(this).removeAttr('disabled');
		});
		if ("isPlateEnabled" == checkboxId) {
			showItemInEstimation(true, "plateCost");
			enableOrDisablePlateCost();
		} else if("isPaperEnabled" == checkboxId) {
			showItemInEstimation(true, "paperCost");
			enableOrDisablePaperCost();
		} else if("isPrintingEnabled" == checkboxId) {
			showItemInEstimation(true, "printingCost");
		} else if("isFinishingEnabled" == checkboxId){
			initEstimateFields();
		}
		
	} else{
		$.each($('#' + panelBodyId + ' input, #' + panelBodyId + ' select'), function() {
			$(this).attr('disabled','disabled');
		});		
		if ("isPlateEnabled" == checkboxId) {
			showItemInEstimation(false, "plateCost");
		} else if("isPaperEnabled" == checkboxId) {
			showItemInEstimation(false, "paperCost");
		} else if("isPrintingEnabled" == checkboxId) {
			showItemInEstimation(false, "printingCost");
		} else if("isFinishingEnabled" == checkboxId){
			initEstimateFields();
		}
		
	}
}

function enableOrDisablePlateCost() {
	
	if($('#plateBy').val() == 'Party') {
		showItemInEstimation(false, "plateCost");
	} else {
		showItemInEstimation(true, "plateCost");
	}
	
} 

function enableOrDisablePaperCost() {
	
	if($('#paperBy').val() == 'Party') {
		showItemInEstimation(false, "paperCost");
	} else {
		showItemInEstimation(true, "paperCost");
	}
	
} 




function setSelect2Data(select2Id, idValue, textValue){
		$("#"+select2Id).select2('data', { id: idValue, text: textValue });
	}

	function initPaperCuttingSizeValues(){
		//TODO have to fix the below code after providing drop down support for new size feilds
		var originalValue = $('#paperCuttingSize').val();
		var paperSizeL = $("#paperSizeL").val();
		var paperSizeW = $("#paperSizeW").val();
		
		var cuttingSizeOptionsArr = [];
		var optionValue = h + "x" + w;
		cuttingSizeOptionsArr.push({id: optionValue, text: optionValue});
		var optionValue = h + "x" + Math.round((w/2) * 100) / 100;
		cuttingSizeOptionsArr.push({id: optionValue, text: optionValue});
		optionValue = h + "x" +  Math.round((w/3) * 100) / 100;
		cuttingSizeOptionsArr.push({id: optionValue, text: optionValue});
		optionValue = Math.round((h/2) * 100) / 100 + "x" +  Math.round((w/2) * 100) / 100;
		cuttingSizeOptionsArr.push({id: optionValue, text: optionValue});
		optionValue = Math.round((h/4) * 100) / 100 + "x" +  Math.round((w/4) * 100) / 100;
		cuttingSizeOptionsArr.push({id: optionValue, text: optionValue});
		
		$("#paperCuttingSize").select2('destroy');
		$("#paperCuttingSize").select2({				
			createSearchChoice: function(term, data) { 
                if ($(data).filter(function() { return this.text.localeCompare(term)===0; }).length===0) {
                return {id:term, text:term};} 
            },
            allowClear : true,
            data: cuttingSizeOptionsArr,
            containerCss: {"width": "100px"}
		});
		if(originalValue != ""){
			
			setSelect2Data("paperCuttingSize", originalValue, originalValue);
			
		}
		
		l(cuttingSizeOptionsArr);
	}
	
	function initPaperCuttingSizeValuesOld(paperSize){
		var originalValue = $('#paperCuttingSize').val();
		var h = paperSize.split('x')[0];
		var w = paperSize.split('x')[1];
		
		var cuttingSizeOptionsArr = [];
		var optionValue = h + "x" + w;
		cuttingSizeOptionsArr.push({id: optionValue, text: optionValue});
		
		var optionValue = h + "x" + Math.round((w/2) * 100) / 100;
		if ((Math.round((w/2) * 100) / 100) <  h) {
			optionValue = (Math.round((w/2) * 100) / 100) + "x" + h;
		}
		cuttingSizeOptionsArr.push({id: optionValue, text: optionValue});
		
		optionValue = h + "x" +  Math.round((w/3) * 100) / 100;
		if ((Math.round((w/3) * 100) / 100) < h) {
			optionValue = (Math.round((w/3) * 100) / 100) + "x" +  h;
		}
		cuttingSizeOptionsArr.push({id: optionValue, text: optionValue});
		
		
		optionValue = (Math.round((h/2) * 100) / 100) + "x" +  (Math.round((w/2) * 100) / 100);
		if ((Math.round((w/2) * 100) / 100) < (Math.round((h/2) * 100) / 100)) {
			optionValue = (Math.round((w/2) * 100) / 100) + "x" +  (Math.round((h/2) * 100) / 100);
		}
		cuttingSizeOptionsArr.push({id: optionValue, text: optionValue});
		
		optionValue = (Math.round((h/4) * 100) / 100) + "x" +  (Math.round((w/4) * 100) / 100);
		if ((Math.round((w/4) * 100) / 100) < (Math.round((h/4) * 100) / 100)) {
			optionValue = (Math.round((w/4) * 100) / 100) + "x" +  (Math.round((h/4) * 100) / 100);
		}
		
		cuttingSizeOptionsArr.push({id: optionValue, text: optionValue});
		
		$("#paperCuttingSize").select2('destroy');
		$("#paperCuttingSize").select2({				
			createSearchChoice: function(term, data) { 
                if ($(data).filter(function() { return this.text.localeCompare(term)===0; }).length===0) {
                return {id:term, text:term};} 
            },
            allowClear : true,
            data: cuttingSizeOptionsArr,
            containerCss: {"width": "100px"}
		});
		if(originalValue != ""){
			
			setSelect2Data("paperCuttingSize", originalValue, originalValue);
			
		}
		
		l(cuttingSizeOptionsArr);
	}
	
	function calculatePaperCuttingQuantity() {
		var paperSizeL = $('#paperSizeL').val();
		var paperSizeW = $('#paperSizeW').val();		
		
		var paperCuttingSizeL = $('#paperCuttingSizeL').val();
		var paperCuttingSizeW = $('#paperCuttingSizeW').val();
		
		//l(paperHeight + " " + paperWidth + " " + h + " " + w);
		
		var paperQuantity = $('#paperQuantity').val();
		if(isAutoFill('paperCuttingQuantity') == "true"){
			if(paperSizeL == paperCuttingSizeL && paperSizeW == paperCuttingSizeW){
				$('#paperCuttingQuantity').val(paperQuantity).trigger("keyup");
				blinkAutoFillField('paperCuttingQuantity');
			} else if(paperSizeL == paperCuttingSizeL && paperSizeW/2 == paperCuttingSizeW){
					$('#paperCuttingQuantity').val(paperQuantity * 2).trigger("keyup");
					blinkAutoFillField('paperCuttingQuantity');
			} else if(paperSizeL/2 == paperCuttingSizeL && paperSizeW == paperCuttingSizeW){
				$('#paperCuttingQuantity').val(paperQuantity * 2).trigger("keyup");
				blinkAutoFillField('paperCuttingQuantity');
			} else if(paperSizeL == paperCuttingSizeL && (Math.round((paperSizeW/3) * 100)/100)  == paperCuttingSizeW){
				$('#paperCuttingQuantity').val(paperQuantity * 3).trigger("keyup");	    					
				blinkAutoFillField('paperCuttingQuantity');
			} else if((Math.round((paperSizeL/3) * 100)/100) == paperCuttingSizeL && paperSizeW  == paperCuttingSizeW){
				$('#paperCuttingQuantity').val(paperQuantity * 3).trigger("keyup");	    					
				blinkAutoFillField('paperCuttingQuantity');
			} else if(paperSizeL/2 == paperCuttingSizeL && paperSizeW/2 == paperCuttingSizeW){
				$('#paperCuttingQuantity').val(paperQuantity * 4).trigger("keyup");
				blinkAutoFillField('paperCuttingQuantity');
			} else if(paperSizeL/4 == paperCuttingSizeL && paperSizeW/4 ==paperCuttingSizeW){
					$('#paperCuttingQuantity').val(paperQuantity * 8).trigger("keyup");							
					blinkAutoFillField('paperCuttingQuantity');
			}
		}
	}
	
	function calculatePaperCuttingQuantityOld(){
		var paperSize = $('#paperSize').val();
		var paperHeight = paperSize.toLowerCase().split('x')[0];
		var paperWidth = paperSize.toLowerCase().split('x')[1];
		
		var h = $('#paperCuttingSize').val().toLowerCase().split('x')[0];
		var w = $('#paperCuttingSize').val().toLowerCase().split('x')[1];
		
		//l(paperHeight + " " + paperWidth + " " + h + " " + w);
		
		if(isAutoFill('paperCuttingQuantity') == "true"){
			if(paperHeight == h && paperWidth == w){
				var paperQuantity = $('#paperQuantity').val();
				$('#paperCuttingQuantity').val(paperQuantity);
				blinkAutoFillField('paperCuttingQuantity');
			}else if(paperHeight == h && paperWidth/2 == w){
					var paperQuantity = $('#paperQuantity').val();
					$('#paperCuttingQuantity').val(paperQuantity * 2);
					blinkAutoFillField('paperCuttingQuantity');
			} else if(paperHeight == h && (Math.round((paperWidth/3) * 100)/100)  == w){
				var paperQuantity = $('#paperQuantity').val();
				$('#paperCuttingQuantity').val(paperQuantity * 3);	    					
				blinkAutoFillField('paperCuttingQuantity');
			}else if(paperHeight/2 == h && paperWidth/2 == w){
				var paperQuantity = $('#paperQuantity').val();
				$('#paperCuttingQuantity').val(paperQuantity * 4);
				blinkAutoFillField('paperCuttingQuantity');
			}else if(paperHeight/4 == h && paperWidth/4 == w){
					var paperQuantity = $('#paperQuantity').val();
					$('#paperCuttingQuantity').val(paperQuantity * 8);							
					blinkAutoFillField('paperCuttingQuantity');
			}
		}
	}

	function showErrorMsg() {
		alertify.log("To Enter Received Amount. Please Save Job first",
				"standard", 5000);
	}
	
	function dateToText(dateObj) {
		var createdDate = new Date(dateObj);
		var dateText = createdDate.getDate() + "-"
				+ (createdDate.getMonth() + 1) + "-"
				+ createdDate.getFullYear() + " " + createdDate.getHours()
				+ ":" + createdDate.getMinutes();
		return dateText;
	}
	
	
	function getSizeAsText(jsonData, id) {
		return jsonData[id+"L"]  + "x" + jsonData[id+"W"] ; 
		//return $("#"+id+"L").val() + "x" + $("#"+id+"W").val();
		
	}
	
	function toTitleCase(str) {
		return str.match(/[A-Z]?[a-z]+/g).toString().replace(/,/g, " ").replace(/([^\W_]+[^\s-]*) */g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1);
		});
	}
	
	function calculateCost() {
		try {
			/* Calculate Plate Cost */
			if ($("#isPlateEnabled").is(":checked")
					&& $("#plateBy").val() != "Party" ) {
				var plateCost = getPlateCost();
				$("#plateCost").val(plateCost); 
			}
			
			if ($("#isPaperEnabled").is(":checked")
					&& $("#paperBy").val() != "Party" ) {
				var paperCost = getPaperCost();
				$("#paperCost").val(paperCost); 
			}
			
			if ($("#isPrintingEnabled").is(":checked")) {
				var printingCost = getPrintingCost();
				$("#printingCost").val(printingCost); 
			}
			
		} catch (e) {
			alertify(e.name, "Error", 0);
		} 
	}
	
	function getPlateCost() {
		var numberOfSets = $("#numberOfSets").val();		
		var machinesArr = $("#machineType").val();
		
		if (machinesArr == null || machinesArr.length == 0) {
			return 0;
		}
			
		var plateCost = 0;
		
		if (!$.isArray(machinesArr)) {
			var machinesArrTmp = [];
			machinesArrTmp.push(machinesArr);
			machinesArr = machinesArrTmp;
		}
		
		if (numberOfSets.trim().length > 0) {
			var setsArr = numberOfSets.split("+");
			if (machinesArr.length == setsArr.length) {
				$.each(setsArr, function (idx, setCount){
					if (isNaN(parseInt(setCount.trim()))) {
						throw new TypeError("Please verify No of Sets. If you have selected 2 machines, you will have to provide No of Sets in the format 2 + 3.");
					}
					plateCost = plateCost + (parseInt(machinePlateCostsMap[machinesArr[idx]]) * setCount);
				});
			} else  {
				//if (machinesArr.length > setsArr.length)
				throw new TypeError("Please verify machines selected and No of Sets. If you have selected 2 machines, you will have to provide No of Sets in the format 2 + 3.");
			} 
		}
		return plateCost;
	}
	
	
	function getPaperCost() {
		var paperTypeId = $("#paperType").val();	
		var paperCostEntry = paperCostsMap[paperTypeId];
		
		var paperSizeL = $("#paperSizeL").val();
		var paperSizeW = $("#paperSizeW").val();
		var paperQuantity = $("#paperQuantity").val();
		
		if (paperTypeId == null 
				|| isEmptyText(paperSizeL)
				|| isEmptyText(paperSizeW)
				|| isEmptyText(paperQuantity)
				) {
			return 0;
		}
		
		if (isNaN(parseFloat(paperSizeL.trim()))) {
			throw new TypeError("Please verify Length in Paper Size . Provide numbers in the format 18 or 12.25 ");
		}
		
		if (isNaN(parseFloat(paperSizeW.trim()))) {
			throw new TypeError("Please verify Width in Paper Size. Provide numbers in the format 18 or 12.25 ");
		}
		
		if (isNaN(parseInt(paperQuantity.trim()))) {
			throw new TypeError("Please verify Paper Qty. Do not provide commas, provide only digits with out decimals in the format 1000 etc");
		}
		
		var paperCost = 0;
		
		var singleSheetCost = ( (parseInt(paperCostEntry.gsm) * parseFloat(paperSizeL) * parseFloat(paperSizeW))/(1550*1000)) * parseFloat(paperCostEntry.paperCostPerKg);
		paperCost = Math.ceil( singleSheetCost * paperQuantity);
		
		return paperCost;
	}
	
	function getPrintingCost() {
		var paperTypeId = $("#paperType").val();
		var printingSize = $("#printingSize").val();
		var impressions = $("#impressions").val();
		var printingType = $("#printingType").val();
		var machinesArr = $("#machineType").val();
			
		if (paperTypeId == null 
				|| machinesArr == null 
				|| ($.isArray(machinesArr)? (machinesArr.length == 0) : (isEmptyText(machinesArr)) )
				|| isEmptyText(printingSize)
				|| isEmptyText(impressions)
				) {
			return 0;
		}
		
		if (!$.isArray(machinesArr)) {
			var machinesArrTmp = [];
			machinesArrTmp.push(machinesArr);
			machinesArr = machinesArrTmp;
		}
		
		impressions = impressions.trim().toLowerCase(); 
		
		var impressionsArr = [];
		
		if (printingType == "F/B") {
			if (impressions.indexOf("+") == -1) {
				throw new TypeError("When Printing is on F/B, please provide impressions in the format count1 + count2, Ex: 1000 + 1000");	
			}
			impressionsArr = impressions.split("+"); 
			if (impressionsArr.length != 2) {
				throw new TypeError("When Printing is on F/B, please provide impressions in the format count1 + count2, Ex: 1000 + 1000");	
			}
			
			if (isNaN(parseInt(impressionsArr[0]))) {
				throw new TypeError("Please verify Impressions. Do not provide commas, provide only digits with out decimals in the format 1000 + 1000 etc");
			}
			
			if (isNaN(parseInt(impressionsArr[1]))) {
				throw new TypeError("Please verify Impressions. Do not provide commas, provide only digits with out decimals in the format 1000 + 1000 etc");
			}
		} else {
			if (impressions.indexOf("+") != -1 || isNaN(parseInt(impressions))) {
				throw new TypeError("Please verify Impressions. Do not provide commas, provide only digits with out decimals in the format 1000 etc");
			}
			impressionsArr.push(impressions);
		}
		
		
		
		var printingCost = 0;
		var printingOidArr = [];
		if (machinesArr.length == 2) {
			printingOidArr = printingSize.split(","); 
		} else {
			// if F/B is selected, but only one machine is selected and impressions is given as 1000 + 1000
			if (printingType == "F/B" && impressionsArr.length == 2) {
				//include the first oid for the second count of impressions as the second machine
				printingOidArr.push(printingSize);
				printingOidArr.push(printingSize);
			} else {
				//for printingType = O/S and B/B
				printingOidArr.push(printingSize);
			}
		}
		$.each(printingOidArr, function(idx, oid){
			//calculate cost for every machine-impressions combination
			printingCost = printingCost + getCostForImpressions(printingCostsMap[oid], impressionsArr[idx]);
		});
		
		return printingCost;
	}
	
	
	function getCostForImpressions(entry, impressions) {
		if (impressions == 0) {
			return 0;
		}
		if (impressions <= parseInt(entry.minRange)) {
			return parseInt(entry.costForMinQty);
		} 
		if ((parseInt(entry.minRange) < impressions) 
				&& (impressions <= parseInt(entry.maxRange)) ) {
			return parseInt(entry.costBetweenRange);
		}
		
		var baseCost = parseInt(entry.costBetweenRange);
		var extraImpressions = impressions - parseInt(entry.maxRange);
		var extraCost = (Math.ceil(extraImpressions/parseInt(entry.incrementalQty))) * parseInt(entry.incrementalQtyCost);
		return baseCost + extraCost;
	}
	
	
	function isEmptyText(text) {
		if (text == null) {
			return true;
		} 
		return (text.trim().length == 0);
	}
	
	function roundCost(cost) {
		return Math.ceil(cost);
	}
	
	function blinkAutoFillField(id) {
		$('#'+id).animateHighlight('#66CCFF', 2000);	
	}
	
	var notLocked = true;
	$.fn.animateHighlight = function(highlightColor, duration) {
	    var highlightBg = highlightColor || "#FFFF9C";
	    var animateMs = duration || 1500;
	    var originalBg = this.css("backgroundColor");
	    if (notLocked) {
	        notLocked = false;
	        this.stop().css("background-color", highlightBg)
	            .animate({backgroundColor: originalBg}, animateMs);
	        setTimeout( function() { notLocked = true; }, animateMs);
	    }
	};
	
	
	
	