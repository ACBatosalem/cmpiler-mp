// Generated from calc.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0013u\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0003\u0002\u0006\u00023\n\u0002\r\u0002",
    "\u000e\u00024\u0003\u0003\u0003\u0003\u0007\u00039\n\u0003\f\u0003\u000e",
    "\u0003<\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0005\rU\n\r\u0003\r",
    "\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0002\u0002\u0019\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b",
    "\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0002\'\u0002)\u0002+",
    "\u0002-\u0002/\u0002\u0003\u0002\u000b\u0003\u00022;\u0005\u0002C\\",
    "aac|\u0006\u00022;C\\aac|\u0004\u0002DDdd\u0004\u0002GGgg\u0004\u0002",
    "IIii\u0004\u0002KKkk\u0004\u0002PPpp\u0004\u0002FFff\u0002q\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003",
    "\u0002\u0002\u0002\u00032\u0003\u0002\u0002\u0002\u00056\u0003\u0002",
    "\u0002\u0002\u0007=\u0003\u0002\u0002\u0002\t?\u0003\u0002\u0002\u0002",
    "\u000bA\u0003\u0002\u0002\u0002\rC\u0003\u0002\u0002\u0002\u000fE\u0003",
    "\u0002\u0002\u0002\u0011G\u0003\u0002\u0002\u0002\u0013I\u0003\u0002",
    "\u0002\u0002\u0015K\u0003\u0002\u0002\u0002\u0017O\u0003\u0002\u0002",
    "\u0002\u0019T\u0003\u0002\u0002\u0002\u001bX\u0003\u0002\u0002\u0002",
    "\u001dZ\u0003\u0002\u0002\u0002\u001f`\u0003\u0002\u0002\u0002!d\u0003",
    "\u0002\u0002\u0002#f\u0003\u0002\u0002\u0002%i\u0003\u0002\u0002\u0002",
    "\'k\u0003\u0002\u0002\u0002)m\u0003\u0002\u0002\u0002+o\u0003\u0002",
    "\u0002\u0002-q\u0003\u0002\u0002\u0002/s\u0003\u0002\u0002\u000213\t",
    "\u0002\u0002\u000221\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u0002",
    "42\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u00025\u0004\u0003\u0002",
    "\u0002\u00026:\t\u0003\u0002\u000279\t\u0004\u0002\u000287\u0003\u0002",
    "\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003",
    "\u0002\u0002\u0002;\u0006\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002",
    "\u0002=>\u0007-\u0002\u0002>\b\u0003\u0002\u0002\u0002?@\u0007/\u0002",
    "\u0002@\n\u0003\u0002\u0002\u0002AB\u0007,\u0002\u0002B\f\u0003\u0002",
    "\u0002\u0002CD\u00071\u0002\u0002D\u000e\u0003\u0002\u0002\u0002EF\u0007",
    "\'\u0002\u0002F\u0010\u0003\u0002\u0002\u0002GH\u0007*\u0002\u0002H",
    "\u0012\u0003\u0002\u0002\u0002IJ\u0007+\u0002\u0002J\u0014\u0003\u0002",
    "\u0002\u0002KL\u0007\"\u0002\u0002LM\u0003\u0002\u0002\u0002MN\b\u000b",
    "\u0002\u0002N\u0016\u0003\u0002\u0002\u0002OP\u0007\u000b\u0002\u0002",
    "PQ\u0003\u0002\u0002\u0002QR\b\f\u0002\u0002R\u0018\u0003\u0002\u0002",
    "\u0002SU\u0007\u000f\u0002\u0002TS\u0003\u0002\u0002\u0002TU\u0003\u0002",
    "\u0002\u0002UV\u0003\u0002\u0002\u0002VW\u0007\f\u0002\u0002W\u001a",
    "\u0003\u0002\u0002\u0002XY\u00070\u0002\u0002Y\u001c\u0003\u0002\u0002",
    "\u0002Z[\u0005%\u0013\u0002[\\\u0005\'\u0014\u0002\\]\u0005)\u0015\u0002",
    "]^\u0005+\u0016\u0002^_\u0005-\u0017\u0002_\u001e\u0003\u0002\u0002",
    "\u0002`a\u0005\'\u0014\u0002ab\u0005-\u0017\u0002bc\u0005/\u0018\u0002",
    "c \u0003\u0002\u0002\u0002de\u0007=\u0002\u0002e\"\u0003\u0002\u0002",
    "\u0002fg\u0007<\u0002\u0002gh\u0007?\u0002\u0002h$\u0003\u0002\u0002",
    "\u0002ij\t\u0005\u0002\u0002j&\u0003\u0002\u0002\u0002kl\t\u0006\u0002",
    "\u0002l(\u0003\u0002\u0002\u0002mn\t\u0007\u0002\u0002n*\u0003\u0002",
    "\u0002\u0002op\t\b\u0002\u0002p,\u0003\u0002\u0002\u0002qr\t\t\u0002",
    "\u0002r.\u0003\u0002\u0002\u0002st\t\n\u0002\u0002t0\u0003\u0002\u0002",
    "\u0002\u0006\u00024:T\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function calcLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

calcLexer.prototype = Object.create(antlr4.Lexer.prototype);
calcLexer.prototype.constructor = calcLexer;

Object.defineProperty(calcLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

calcLexer.EOF = antlr4.Token.EOF;
calcLexer.NUMBER = 1;
calcLexer.ID = 2;
calcLexer.ADD = 3;
calcLexer.SUB = 4;
calcLexer.MULT = 5;
calcLexer.DIV = 6;
calcLexer.MOD = 7;
calcLexer.LP = 8;
calcLexer.RP = 9;
calcLexer.WHITESPACE = 10;
calcLexer.TAB = 11;
calcLexer.NL = 12;
calcLexer.DOT = 13;
calcLexer.BEGIN = 14;
calcLexer.END = 15;
calcLexer.SEMI = 16;
calcLexer.ASS = 17;

calcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

calcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

calcLexer.prototype.literalNames = [ null, null, null, "'+'", "'-'", "'*'", 
                                     "'/'", "'%'", "'('", "')'", "' '", 
                                     "'\t'", null, "'.'", null, null, "';'", 
                                     "':='" ];

calcLexer.prototype.symbolicNames = [ null, "NUMBER", "ID", "ADD", "SUB", 
                                      "MULT", "DIV", "MOD", "LP", "RP", 
                                      "WHITESPACE", "TAB", "NL", "DOT", 
                                      "BEGIN", "END", "SEMI", "ASS" ];

calcLexer.prototype.ruleNames = [ "NUMBER", "ID", "ADD", "SUB", "MULT", 
                                  "DIV", "MOD", "LP", "RP", "WHITESPACE", 
                                  "TAB", "NL", "DOT", "BEGIN", "END", "SEMI", 
                                  "ASS", "B", "E", "G", "I", "N", "D" ];

calcLexer.prototype.grammarFileName = "calc.g4";



exports.calcLexer = calcLexer;

