// Generated from calc.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var calcListener = require('./calcListener').calcListener;
var grammarFileName = "calc.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013P\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0007\u0003\u001c\n\u0003",
    "\f\u0003\u000e\u0003\u001f\u000b\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003&\n\u0003\u0003\u0004\u0003",
    "\u0004\u0005\u0004*\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u00075\n\u0007\f\u0007\u000e\u00078\u000b\u0007\u0003\b\u0003\b\u0003",
    "\b\u0007\b=\n\b\f\b\u000e\b@\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tL\n\t\u0003",
    "\n\u0003\n\u0003\n\u0002\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0002\u0004\u0003\u0002\u0005\u0006\u0003\u0002\u0007\b\u0002",
    "O\u0002\u0014\u0003\u0002\u0002\u0002\u0004%\u0003\u0002\u0002\u0002",
    "\u0006)\u0003\u0002\u0002\u0002\b+\u0003\u0002\u0002\u0002\n/\u0003",
    "\u0002\u0002\u0002\f1\u0003\u0002\u0002\u0002\u000e9\u0003\u0002\u0002",
    "\u0002\u0010K\u0003\u0002\u0002\u0002\u0012M\u0003\u0002\u0002\u0002",
    "\u0014\u0015\u0007\u0010\u0002\u0002\u0015\u0016\u0007\u000e\u0002\u0002",
    "\u0016\u0017\u0005\u0004\u0003\u0002\u0017\u0018\u0007\u0011\u0002\u0002",
    "\u0018\u0003\u0003\u0002\u0002\u0002\u0019\u001d\u0005\u0006\u0004\u0002",
    "\u001a\u001c\u0007\u000e\u0002\u0002\u001b\u001a\u0003\u0002\u0002\u0002",
    "\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0003\u0002\u0002\u0002\u001e&\u0003\u0002\u0002\u0002",
    "\u001f\u001d\u0003\u0002\u0002\u0002 !\u0005\u0006\u0004\u0002!\"\u0007",
    "\u0012\u0002\u0002\"#\u0007\u000e\u0002\u0002#$\u0005\u0004\u0003\u0002",
    "$&\u0003\u0002\u0002\u0002%\u0019\u0003\u0002\u0002\u0002% \u0003\u0002",
    "\u0002\u0002&\u0005\u0003\u0002\u0002\u0002\'*\u0005\b\u0005\u0002(",
    "*\u0005\n\u0006\u0002)\'\u0003\u0002\u0002\u0002)(\u0003\u0002\u0002",
    "\u0002*\u0007\u0003\u0002\u0002\u0002+,\u0005\u0012\n\u0002,-\u0007",
    "\u0013\u0002\u0002-.\u0005\f\u0007\u0002.\t\u0003\u0002\u0002\u0002",
    "/0\u0003\u0002\u0002\u00020\u000b\u0003\u0002\u0002\u000216\u0005\u000e",
    "\b\u000223\t\u0002\u0002\u000235\u0005\u000e\b\u000242\u0003\u0002\u0002",
    "\u000258\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003\u0002",
    "\u0002\u00027\r\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u00029>",
    "\u0005\u0010\t\u0002:;\t\u0003\u0002\u0002;=\u0005\u0010\t\u0002<:\u0003",
    "\u0002\u0002\u0002=@\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002",
    ">?\u0003\u0002\u0002\u0002?\u000f\u0003\u0002\u0002\u0002@>\u0003\u0002",
    "\u0002\u0002AB\u0007\u0005\u0002\u0002BL\u0005\u0010\t\u0002CD\u0007",
    "\u0006\u0002\u0002DL\u0005\u0010\t\u0002EL\u0007\u0003\u0002\u0002F",
    "G\u0007\n\u0002\u0002GH\u0005\f\u0007\u0002HI\u0007\u000b\u0002\u0002",
    "IL\u0003\u0002\u0002\u0002JL\u0005\u0012\n\u0002KA\u0003\u0002\u0002",
    "\u0002KC\u0003\u0002\u0002\u0002KE\u0003\u0002\u0002\u0002KF\u0003\u0002",
    "\u0002\u0002KJ\u0003\u0002\u0002\u0002L\u0011\u0003\u0002\u0002\u0002",
    "MN\u0007\u0004\u0002\u0002N\u0013\u0003\u0002\u0002\u0002\b\u001d%)",
    "6>K"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", "'%'", 
                     "'('", "')'", "' '", "'\t'", null, "'.'", null, null, 
                     "';'", "':='" ];

var symbolicNames = [ null, "NUMBER", "ID", "ADD", "SUB", "MULT", "DIV", 
                      "MOD", "LP", "RP", "WHITESPACE", "TAB", "NL", "DOT", 
                      "BEGIN", "END", "SEMI", "ASS" ];

var ruleNames =  [ "compound_statement", "statement_list", "statement", 
                   "assign", "empty", "expr", "term", "factor", "variable" ];

function calcParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

calcParser.prototype = Object.create(antlr4.Parser.prototype);
calcParser.prototype.constructor = calcParser;

Object.defineProperty(calcParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

calcParser.EOF = antlr4.Token.EOF;
calcParser.NUMBER = 1;
calcParser.ID = 2;
calcParser.ADD = 3;
calcParser.SUB = 4;
calcParser.MULT = 5;
calcParser.DIV = 6;
calcParser.MOD = 7;
calcParser.LP = 8;
calcParser.RP = 9;
calcParser.WHITESPACE = 10;
calcParser.TAB = 11;
calcParser.NL = 12;
calcParser.DOT = 13;
calcParser.BEGIN = 14;
calcParser.END = 15;
calcParser.SEMI = 16;
calcParser.ASS = 17;

calcParser.RULE_compound_statement = 0;
calcParser.RULE_statement_list = 1;
calcParser.RULE_statement = 2;
calcParser.RULE_assign = 3;
calcParser.RULE_empty = 4;
calcParser.RULE_expr = 5;
calcParser.RULE_term = 6;
calcParser.RULE_factor = 7;
calcParser.RULE_variable = 8;


function Compound_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calcParser.RULE_compound_statement;
    return this;
}

Compound_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Compound_statementContext.prototype.constructor = Compound_statementContext;

Compound_statementContext.prototype.BEGIN = function() {
    return this.getToken(calcParser.BEGIN, 0);
};

Compound_statementContext.prototype.NL = function() {
    return this.getToken(calcParser.NL, 0);
};

Compound_statementContext.prototype.statement_list = function() {
    return this.getTypedRuleContext(Statement_listContext,0);
};

Compound_statementContext.prototype.END = function() {
    return this.getToken(calcParser.END, 0);
};

Compound_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.enterCompound_statement(this);
	}
};

Compound_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.exitCompound_statement(this);
	}
};




calcParser.Compound_statementContext = Compound_statementContext;

calcParser.prototype.compound_statement = function() {

    var localctx = new Compound_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, calcParser.RULE_compound_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.match(calcParser.BEGIN);
        this.state = 19;
        this.match(calcParser.NL);
        this.state = 20;
        this.statement_list();
        this.state = 21;
        this.match(calcParser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Statement_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calcParser.RULE_statement_list;
    return this;
}

Statement_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Statement_listContext.prototype.constructor = Statement_listContext;

Statement_listContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

Statement_listContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calcParser.NL);
    } else {
        return this.getToken(calcParser.NL, i);
    }
};


Statement_listContext.prototype.SEMI = function() {
    return this.getToken(calcParser.SEMI, 0);
};

Statement_listContext.prototype.statement_list = function() {
    return this.getTypedRuleContext(Statement_listContext,0);
};

Statement_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.enterStatement_list(this);
	}
};

Statement_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.exitStatement_list(this);
	}
};




calcParser.Statement_listContext = Statement_listContext;

calcParser.prototype.statement_list = function() {

    var localctx = new Statement_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, calcParser.RULE_statement_list);
    var _la = 0; // Token type
    try {
        this.state = 35;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 23;
            this.statement();
            this.state = 27;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===calcParser.NL) {
                this.state = 24;
                this.match(calcParser.NL);
                this.state = 29;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 30;
            this.statement();
            this.state = 31;
            this.match(calcParser.SEMI);
            this.state = 32;
            this.match(calcParser.NL);
            this.state = 33;
            this.statement_list();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calcParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};

StatementContext.prototype.empty = function() {
    return this.getTypedRuleContext(EmptyContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.exitStatement(this);
	}
};




calcParser.StatementContext = StatementContext;

calcParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, calcParser.RULE_statement);
    try {
        this.state = 39;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case calcParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 37;
            this.assign();
            break;
        case calcParser.NL:
        case calcParser.END:
        case calcParser.SEMI:
            this.enterOuterAlt(localctx, 2);
            this.state = 38;
            this.empty();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calcParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AssignContext.prototype.ASS = function() {
    return this.getToken(calcParser.ASS, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.exitAssign(this);
	}
};




calcParser.AssignContext = AssignContext;

calcParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, calcParser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.variable();
        this.state = 42;
        this.match(calcParser.ASS);
        this.state = 43;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EmptyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calcParser.RULE_empty;
    return this;
}

EmptyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyContext.prototype.constructor = EmptyContext;


EmptyContext.prototype.enterRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.enterEmpty(this);
	}
};

EmptyContext.prototype.exitRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.exitEmpty(this);
	}
};




calcParser.EmptyContext = EmptyContext;

calcParser.prototype.empty = function() {

    var localctx = new EmptyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, calcParser.RULE_empty);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calcParser.RULE_expr;
    this.op = null; // Token
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

ExprContext.prototype.ADD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calcParser.ADD);
    } else {
        return this.getToken(calcParser.ADD, i);
    }
};


ExprContext.prototype.SUB = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calcParser.SUB);
    } else {
        return this.getToken(calcParser.SUB, i);
    }
};


ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.exitExpr(this);
	}
};




calcParser.ExprContext = ExprContext;

calcParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, calcParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.term();
        this.state = 52;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===calcParser.ADD || _la===calcParser.SUB) {
            this.state = 48;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===calcParser.ADD || _la===calcParser.SUB)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 49;
            this.term();
            this.state = 54;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calcParser.RULE_term;
    this.op = null; // Token
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.factor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FactorContext);
    } else {
        return this.getTypedRuleContext(FactorContext,i);
    }
};

TermContext.prototype.MULT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calcParser.MULT);
    } else {
        return this.getToken(calcParser.MULT, i);
    }
};


TermContext.prototype.DIV = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calcParser.DIV);
    } else {
        return this.getToken(calcParser.DIV, i);
    }
};


TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.exitTerm(this);
	}
};




calcParser.TermContext = TermContext;

calcParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, calcParser.RULE_term);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.factor();
        this.state = 60;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===calcParser.MULT || _la===calcParser.DIV) {
            this.state = 56;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===calcParser.MULT || _la===calcParser.DIV)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 57;
            this.factor();
            this.state = 62;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calcParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.ADD = function() {
    return this.getToken(calcParser.ADD, 0);
};

FactorContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

FactorContext.prototype.SUB = function() {
    return this.getToken(calcParser.SUB, 0);
};

FactorContext.prototype.NUMBER = function() {
    return this.getToken(calcParser.NUMBER, 0);
};

FactorContext.prototype.LP = function() {
    return this.getToken(calcParser.LP, 0);
};

FactorContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactorContext.prototype.RP = function() {
    return this.getToken(calcParser.RP, 0);
};

FactorContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.exitFactor(this);
	}
};




calcParser.FactorContext = FactorContext;

calcParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, calcParser.RULE_factor);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case calcParser.ADD:
            this.enterOuterAlt(localctx, 1);
            this.state = 63;
            this.match(calcParser.ADD);
            this.state = 64;
            this.factor();
            break;
        case calcParser.SUB:
            this.enterOuterAlt(localctx, 2);
            this.state = 65;
            this.match(calcParser.SUB);
            this.state = 66;
            this.factor();
            break;
        case calcParser.NUMBER:
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this.match(calcParser.NUMBER);
            break;
        case calcParser.LP:
            this.enterOuterAlt(localctx, 4);
            this.state = 68;
            this.match(calcParser.LP);
            this.state = 69;
            this.expr();
            this.state = 70;
            this.match(calcParser.RP);
            break;
        case calcParser.ID:
            this.enterOuterAlt(localctx, 5);
            this.state = 72;
            this.variable();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calcParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(calcParser.ID, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof calcListener ) {
        listener.exitVariable(this);
	}
};




calcParser.VariableContext = VariableContext;

calcParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, calcParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(calcParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.calcParser = calcParser;
