/**
 * http://usejsdoc.org/
 */


var options = exports.optuions = require ('./options');

exports.parser = require ('./parser');
exports.NLParser = require ('./');


var NLParser = function (options) {
	
	option = option || exports.options.Opts();
	
	this.option = option;
	this.parsers = new Object (option.parsers);
	
}


NLParser.prototype.parse = function (text, date) {
	
	date = date||new Date();
	
	this.parsers.forEach(function(parser) {
		
		var results = parser.execute(text, date);
		a
		
	});
}