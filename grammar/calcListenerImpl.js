var antlr4 = require('antlr4/index.js');
var CalculatorParser = require("./calcParser.js");
var CalculatorListener = require("./calcListener.js");
//var CalculatorErrorListener = require("./calcErrorListener.js");

// use create for inheritance, see https://developer.mozilla.org/en/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
var Listener = function() {
    CalculatorListener.calcListener.call(this); // chain the constructor
    this.semanticErrorCheck = false;
};
// chaining the prototypes
Listener.prototype = Object.create(CalculatorListener.calcListener.prototype);

// override default listener behavior
Listener.prototype.stack = [];
Listener.prototype.enterExpr = function(ctx) {
	/*if (ctx.op.type == CalculatorParser.calcParser.ADD) {
		console.log("ADD");
	} else {
		console.log("SUB");
	}*/
};



exports.calcListenerImpl = Listener;