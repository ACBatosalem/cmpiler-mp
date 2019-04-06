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
    this.syntaxErrorCheck = true;
    
    if(offendingSymbol == null)
        this.symbol = recognizer.getTokenErrorDisplay(offendingSymbol);
    else
        this.symbol = offendingSymbol.text;
    
    if(msg.includes("mismatched")) { // Missing closing parenthesis
        process.stdout.write("SYNTAX ERROR at [COLUMN " + column + "] Mismatched input: " + msg + "\n");
    } else if (msg.includes("missing")) {
        process.stdout.write(" SYNTAX ERROR at [COLUMN " + column + "] Missing syntax: " + msg + "\n");
    } else if (msg.includes("expecting")) {
        process.stdout.write(" SYNTAX ERROR at [COLUMN " + column + "] Expecting syntax: " + msg + "\n");
    } else if(msg.includes("token recognition error")) {
        process.stdout.write("ERROR at COLUMN [" + column + "] Token recognition error: '" + msg.charAt(29) + "' is not a recognized token" + "\n");
    } else {
        process.stdout.write("ERROR at COLUMN [" + column + "]: " + msg + "\n");
        // console.log("----- \nrecognizer: " + recognizer + "\noffendingSymbol: " 
        // + offendingSymbol + "\nline: " + line + "\ncol: " + column + "\nmsg: " + msg + "\ne: " + e + "\n-----");   
    } 
};

exports.PascalErrorListener = PascalErrorListener;