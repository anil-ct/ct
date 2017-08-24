 var escapeHTML = function (string) {
    if (!isSet(string)) {
      return '';
    }
    string = '' + string;
    if (!string) {
      return '';
    }
    return string
      .replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };

  /**
   * Returns true if given value is neither "undefined" nor null
   */
  var isSet = function (value) {
    return !(_.isUndefined(value) || _.isNull(value));
  };



var inputFieldTemplate = function(type) {
	return {
		'template' : '<input type="' + type + '" ' + '<%= (fieldHtmlClass ? "class=\'" + fieldHtmlClass + "\' " : "") %>' 
					+ 'name="<%= node.name %>" value="<%= escape(value) %>" id="<%= id %>"' 
					+ '<%= (node.disabled? " disabled" : "")%>' + '<%= (node.readOnly ? " readonly=\'readonly\'" : "") %>' 
					+ '<%= (node.schemaElement && node.schemaElement.maxLength ? " maxlength=\'" + node.schemaElement.maxLength + "\'" : "") %>' 
					+ '<%= (node.schemaElement && node.schemaElement.required && (node.schemaElement.type !== "boolean") ? " required=\'required\'" : "") %>' 
					+ '<%= (node.placeholder? "placeholder=" + \'"\' + escape(node.placeholder) + \'"\' : "")%>' + ' />',
		'fieldtemplate' : true,
		'inputfield' : true
	}
};

var formTemplates = {};

formTemplates.elements = {
	'none' : {
		'template' : ''
	},
	'root' : {
		'template' : '<div><%= children %></div>'
	},
	'text' : inputFieldTemplate('text'),
	'password' : inputFieldTemplate('password'),
	'date' : inputFieldTemplate('date'),
	'datetime' : inputFieldTemplate('datetime'),
	'datetime-local' : inputFieldTemplate('datetime-local'),
	'email' : inputFieldTemplate('email'),
	'month' : inputFieldTemplate('month'),
	'number' : inputFieldTemplate('number'),
	'search' : inputFieldTemplate('search'),
	'tel' : inputFieldTemplate('tel'),
	'time' : inputFieldTemplate('time'),
	'url' : inputFieldTemplate('url'),
	'week' : inputFieldTemplate('week'),
	'textarea' : {
		'template' : '<textarea id="<%= id %>" name="<%= node.name %>" ' + 'style="height:<%= elt.height || "150px" %>;width:<%= elt.width || "100%" %>;"' + '<%= (node.disabled? " disabled" : "")%>' + '<%= (node.readOnly ? " readonly=\'readonly\'" : "") %>' + '<%= (node.schemaElement && node.schemaElement.maxLength ? " maxlength=\'" + node.schemaElement.maxLength + "\'" : "") %>' + '<%= (node.schemaElement && node.schemaElement.required ? " required=\'required\'" : "") %>' + '<%= (node.placeholder? "placeholder=" + \'"\' + escape(node.placeholder) + \'"\' : "")%>' + '><%= value %></textarea>',
		'fieldtemplate' : true,
		'inputfield' : true
	},
	'checkbox' : {
		'template' : '<label class="checkbox-inline"><input type="checkbox" id="<%= id %>" ' + 'name="<%= node.name %>" value="1" <% if (value) {%>checked<% } %>' + '<%= (node.disabled? " disabled" : "")%>' + '<%= (node.schemaElement && node.schemaElement.required && (node.schemaElement.type !== "boolean") ? " required=\'required\'" : "") %>' + ' /><span><%= node.inlinetitle || "" %></span>' + '</label>',
		'fieldtemplate' : true,
		'inputfield' : true,
		'getElement' : function(el) {
			return $(el).parent().get(0);
		}
	},
	'file' : {
		'template' : '<input class="input-file" id="<%= id %>" name="<%= node.name %>" type="file" ' + '<%= (node.schemaElement && node.schemaElement.required ? " required=\'required\'" : "") %>' + '/>',
		'fieldtemplate' : true,
		'inputfield' : true
	},
	'select' : {
		'template' : '<select name="<%= node.name %>" id="<%= id %>"' + '<%= (fieldHtmlClass ? " class=\'" + fieldHtmlClass + "\'" : "") %>' + '<%= (node.disabled? " disabled" : "")%>' + '<%= (node.schemaElement && node.schemaElement.required ? " required=\'required\'" : "") %>' + '> ' + '<% _.each(node.options, function(key, val) { if(key instanceof Object) { if (value === key.value) { %> <option selected value="<%= key.value %>"><%= key.title %></option> <% } else { %> <option value="<%= key.value %>"><%= key.title %></option> <% }} else { if (value === key) { %> <option selected value="<%= key %>"><%= key %></option> <% } else { %><option value="<%= key %>"><%= key %></option> <% }}}); %> ' + '</select>',
		'fieldtemplate' : true,
		'inputfield' : true
	},
	'radios' : {
		'template' : '<div id="<%= node.id %>"><% _.each(node.options, function(key, val) { %><label class="radio"><input type="radio" <% if (((key instanceof Object) && (value === key.value)) || (value === key)) { %> checked="checked" <% } %> name="<%= node.name %>" value="<%= (key instanceof Object ? key.value : key) %>"' + '<%= (node.disabled? " disabled" : "")%>' + '<%= (node.schemaElement && node.schemaElement.required ? " required=\'required\'" : "") %>' + '/><span><%= (key instanceof Object ? key.title : key) %></span></label> <% }); %></div>',
		'fieldtemplate' : true,
		'inputfield' : true
	},
	'help' : {
		'template' : '<span class="help-block" style="padding-top:5px"><%= elt.helpvalue %></span>',
		'fieldtemplate' : true
	},
	'msg' : {
		'template' : '<%= elt.msg %>'
	},
	'fieldset' : {
		'template' : '<fieldset class="control-group jsonform-error-<%= keydash %> <% if (elt.expandable) { %>expandable<% } %> <%= elt.htmlClass?elt.htmlClass:"" %>" ' + '<% if (id) { %> id="<%= id %>"<% } %>' + '>' + '<% if (node.title || node.legend) { %><legend><%= node.title || node.legend %></legend><% } %>' + '<% if (elt.expandable) { %><div class="control-group"><% } %>' + '<%= children %>' + '<% if (elt.expandable) { %></div><% } %>' + '</fieldset>'
	},
	'advancedfieldset' : {
		'template' : '<fieldset' + '<% if (id) { %> id="<%= id %>"<% } %>' + ' class="expandable <%= elt.htmlClass?elt.htmlClass:"" %>">' + '<legend>Advanced options</legend>' + '<div class="control-group">' + '<%= children %>' + '</div>' + '</fieldset>'
	},
	'authfieldset' : {
		'template' : '<fieldset' + '<% if (id) { %> id="<%= id %>"<% } %>' + ' class="expandable <%= elt.htmlClass?elt.htmlClass:"" %>">' + '<legend>Authentication settings</legend>' + '<div class="control-group">' + '<%= children %>' + '</div>' + '</fieldset>'
	},
	'submit' : {
		'template' : '<input type="submit" <% if (id) { %> id="<%= id %>" <% } %> class="btn btn-primary <%= elt.htmlClass?elt.htmlClass:"" %>" value="<%= value || node.title %>"<%= (node.disabled? " disabled" : "")%>/>'
	},
	'button' : {
		'template' : ' <button <% if (id) { %> id="<%= id %>" <% } %> class="btn <%= elt.htmlClass?elt.htmlClass:"" %>"><%= node.title %></button> '
	},
	'actions' : {
		'template' : '<div class="form-actions <%= elt.htmlClass?elt.htmlClass:"" %>"><%= children %></div>'
	},
	'hidden' : {
		'template' : '<input type="hidden" id="<%= id %>" name="<%= node.name %>" value="<%= escape(value) %>" />',
		'inputfield' : true
	},
	'section' : {
		'template' : '<div' + '<% if (node.id) { %> id="<%= node.id %>"<% } %>' + '><%= children %></div>'
	},
	'panel' : {
		'template' : '<div' + '<% if (node.id) { %> id="<%= node.id %>"<% } %>' + '><%= children %></div>'
	}
}

var getHtmlText = function(inner) {
	  return '<div class="control-group ' +
	    '<%= elt.htmlClass ? " " + elt.htmlClass : "" %>' +
	    '<%= (node.schemaElement && node.schemaElement.required && (node.schemaElement.type !== "boolean") ? " jsonform-required" : "") %>' +
	    '<%= (node.readOnly ? " jsonform-readonly" : "") %>' +
	    '<%= (node.disabled ? " jsonform-disabled" : "") %>' +
	    '">' +
	    '<% if (node.title && !elt.notitle) { %>' +
	      '<label class="control-label" for="<%= node.id %>"><%= node.title %></label>' +
	    '<% } %>' +
	    '<div class="controls">' +
	      '<% if (node.prepend || node.append) { %>' +
	      '<div class="<% if (node.prepend) { %>input-prepend<% } %>' +
	        '<% if (node.append) { %> input-append<% } %>">' +
	        '<% if (node.prepend) { %>' +
	          '<span class="add-on"><%= node.prepend %></span>' +
	        '<% } %>' +
	      '<% } %>' +
	      inner +
	      '<% if (node.append) { %>' +
	        '<span class="add-on"><%= node.append %></span>' +
	      '<% } %>' +
	      '<% if (node.prepend || node.append) { %>' +
	        '</div>' +
	      '<% } %>' +
	      '<% if (node.description) { %>' +
	        '<span class="help-inline"><%= node.description %></span>' +
	      '<% } %>' +
	      '<span class="help-block jsonform-errortext" style="display:none;"></span>' +
	    '</div></div>';
	};
