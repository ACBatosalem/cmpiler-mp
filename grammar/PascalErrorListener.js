const antlr4 = require('antlr4/index');
const ErrorListener = require('antlr4/error/index');
const Pascal = require('./pascalLexer');
const PascalParser = require('./pascalParser');
const PascalListenter = require('./pascalListener');

var KEYWORDS = [
	'AND',
	'ARRAY',
	'BEGIN',
	'BOOLEAN',
	'CASE',
	'CHAR',
	'CHR',
	'CONST',
	'DIV',
	'DO',
	'DOWNTO',
	'ELSE',
	'END',
	'FILE',
	'FOR',
	'FUNCTION',
	'GOTO',
	'IF',
	'IN',
	'INTEGER',
	'LABEL',
	'MOD',
	'NIL',
	'NOT',
	'OF',
	'OR',
	'PACKED',
	'PROCEDURE',
	'PROGRAM',
	'READLIN',
	'REAL',
	'RECORD',
	'REPEAT',
	'SET',
	'STRING',
	'THEN',
	'TO',
	'TYPE',
	'UNTIL',
	'VAR',
	'WHILE',
	'WITH',
	'WRITE',
	'WRITELN'
];

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
    
	if(msg.includes("mismatched")) { 
		if(KEYWORDS.includes((this.symbol).toString().toUpperCase())) {
			throw new Error("SEMANTIC ERROR at [LINE-COLUMN " + line + "-"+ column +"] Keyword error: cannot use reserved keyword '" + this.symbol + "' as an identifier\n");
			// process.stdout.write();
		} else {
			throw new Error("SYNTAX ERROR at [LINE-COLUMN " + line + "-"+ column +"] Mismatched input: " + msg + "\n");
			// process.stdout.write("SYNTAX ERROR at [COLUMN " + column + "] Mismatched input: " + msg + "\n");
		}
    } else if (msg.includes("missing")) {
		throw new Error("SYNTAX ERROR at [LINE-COLUMN " + line + "-"+ column +"] Missing syntax: " + msg + "\n");
        // process.stdout.write("SYNTAX ERROR at [COLUMN " + column + "] Missing syntax: " + msg + "\n");
    } else if (msg.includes("expecting")) {
		throw new Error(" SYNTAX ERROR at [LINE-COLUMN " + line + "-"+ column +"] Expecting syntax: " + msg + "\n");
        // process.stdout.write(" SYNTAX ERROR at [COLUMN " + column + "] Expecting syntax: " + msg + "\n");
    } else if(msg.includes("token recognition error")) {
		throw new Error("ERROR at COLUMN [LINE-COLUMN " + line + "-"+ column +"] Token recognition error: '" + msg.charAt(29) + "' is not a recognized token" + "\n");
		// process.stdout.write("ERROR at COLUMN [" + column + "] Token recognition error: '" + msg.charAt(29) + "' is not a recognized token" + "\n");
    } else {
		throw new Error("ERROR at COLUMN [LINE-COLUMN " + line + "-"+ column +"]: " + msg + "\n");
        // process.stdout.write("ERROR at COLUMN [" + column + "]: " + msg + "\n"); 
    } 
};

exports.PascalErrorListener = PascalErrorListener;