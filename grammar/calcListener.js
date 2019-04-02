// Generated from calc.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by calcParser.
function calcListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

calcListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
calcListener.prototype.constructor = calcListener;

// Enter a parse tree produced by calcParser#compound_statement.
calcListener.prototype.enterCompound_statement = function(ctx) {
};

// Exit a parse tree produced by calcParser#compound_statement.
calcListener.prototype.exitCompound_statement = function(ctx) {
};


// Enter a parse tree produced by calcParser#statement_list.
calcListener.prototype.enterStatement_list = function(ctx) {
};

// Exit a parse tree produced by calcParser#statement_list.
calcListener.prototype.exitStatement_list = function(ctx) {
};


// Enter a parse tree produced by calcParser#statement.
calcListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by calcParser#statement.
calcListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by calcParser#assign.
calcListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by calcParser#assign.
calcListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by calcParser#empty.
calcListener.prototype.enterEmpty = function(ctx) {
};

// Exit a parse tree produced by calcParser#empty.
calcListener.prototype.exitEmpty = function(ctx) {
};


// Enter a parse tree produced by calcParser#expr.
calcListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by calcParser#expr.
calcListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by calcParser#term.
calcListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by calcParser#term.
calcListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by calcParser#factor.
calcListener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by calcParser#factor.
calcListener.prototype.exitFactor = function(ctx) {
};


// Enter a parse tree produced by calcParser#variable.
calcListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by calcParser#variable.
calcListener.prototype.exitVariable = function(ctx) {
};



exports.calcListener = calcListener;