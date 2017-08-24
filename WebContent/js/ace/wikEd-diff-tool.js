// @name        wikEd diff tool
// @version     1.0.0
// @date        September 25, 2014
// @description online tool for improved word-based diff library with block move detection
// @homepage    https://cacycle.altervista.org/wikEd-diff-tool.html
// @requires    https://en.wikipedia.org/w/index.php?title=User:Cacycle/diff.js&action=raw&ctype=text/javascript
// @author      Cacycle (https://en.wikipedia.org/wiki/User:Cacycle)
// @license     released into the public domain

// JSHint options: W004: is already defined, W100: character may get silently deleted
/* jshint -W004, -W100, newcap: true, browser: true, jquery: true, sub: true, bitwise: true, curly: true, evil: true, forin: true, freeze: true, globalstrict: true, immed: true, latedef: true, loopfunc: true, quotmark: single, strict: true, undef: true */
/* global console */

// turn on ECMAScript 5 strict mode
'use strict';

// define global objects
var WikEdDiffTool = {};
var WikEdDiff;
var wikEdDiffConfig;
var WED;


//
// WikEdDiffTool.init(): initialize
//   

WikEdDiffTool.init = function() {

	// set debug shortcut
	if ( (WED === undefined) && (window.console !== undefined ) ) {
		WED = window.console.log;
	}
	
	// define config variable
	if (wikEdDiffConfig === undefined) {
		wikEdDiffConfig = {};
	}
	
	// define all wikEdDiff options
	WikEdDiffTool.options = [
		'fullDiff',
		'showBlockMoves',
		'charDiff',
		'repeatedDiff',
		'recursiveDiff',
		'recursionMax',
		'unlinkBlocks',
		'blockMinLength',
		'unlinkMax',
		'coloredBlocks',
		'debug',
		'timer',
		'unitTesting',
		'noUnicodeSymbols',
		'stripTrailingNewline'
	];
	wikEdDiffConfig['unlinkBlocks'] = true;
	wikEdDiffConfig['repeatedDiff'] = true;
	wikEdDiffConfig['stripTrailingNewline'] = false;
	wikEdDiffConfig['debug'] = false;
	wikEdDiffConfig['timer'] = false;
	wikEdDiffConfig['unitTesting'] = false;
	wikEdDiffConfig['fullDiff'] = true;
	wikEdDiffConfig['showBlockMoves'] = true;
	wikEdDiffConfig['coloredBlocks'] = false;
	wikEdDiffConfig['charDiff'] = true;
	wikEdDiffConfig['recursiveDiff'] = true;
	wikEdDiffConfig.recursionMax = 5;//Maximum rejection cycles	
	wikEdDiffConfig.blockMinLength = 3;//Words: reject blocks if shorter
	wikEdDiffConfig.unlinkMax = 10;//Maximum recursion depth
	wikEdDiffConfig['noUnicodeSymbols'] = false;

};

//
// WikEdDiffTool.diff(): click handler for compare button, get options and text versions, call wikEdDiff.diff()
//   

WikEdDiffTool.diff = function(oldString, newString, diffDivId) {
		// calculate the diff
	var wikEdDiff = new WikEdDiff();
	var diffHtml = wikEdDiff.diff(oldString, newString);
	document.getElementById(diffDivId).innerHTML = diffHtml;
	return;
};

