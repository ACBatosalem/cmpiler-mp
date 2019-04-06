const antlr4 = require('antlr4/index');
const ErrorListener = require('antlr4/error/index');
const Pascal = require('./pascalLexer');
const PascalParser = require('./pascalParser');
const PascalListenter = require('./pascalListener');

PascalErrorListener = function(res) {
    this.Res = res;
    this.symbol = '';
    ErrorListener.ErrorListener.call(this);
    this.syntaxErrorCheck = false;
	return this;
};

PascalErrorListener.prototype = Object.create(ErrorListener.ErrorListener.prototype);
PascalErrorListener.prototype.constructor = PascalErrorListener;

PascalErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) { 
    if(msg.includes("mismatched")) { // Missing closing parenthesis
        process.stdout.write("ERROR at [COLUMN " + column + "] " + msg + "\n");
    } else {
        console.log("----- \nrecognizer: " + recognizer + "\noffendingSymbol: " 
   + offendingSymbol + "\nline: " + line + "\ncol: " + column + "\nmsg: " + msg + "\ne: " + e + "\n-----");   
    } 
};

exports.PascalErrorListener = PascalErrorListener;