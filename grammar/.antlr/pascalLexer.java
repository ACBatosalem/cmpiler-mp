// Generated from d:\Documents\4th year - 2nd Term\CMPILER\cmpiler-mp\grammar\pascal.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class pascalLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		AND=1, ARRAY=2, BEGIN=3, BOOLEAN=4, CASE=5, CHAR=6, CONST=7, DIV=8, DO=9, 
		ELSE=10, END=11, FOR=12, FUNCTION=13, IF=14, IN=15, INTEGER=16, LABEL=17, 
		MOD=18, NOT=19, OF=20, OR=21, PROCEDURE=22, PROGRAM=23, READLN=24, SET=25, 
		THEN=26, TO=27, TYPE=28, VAR=29, WHILE=30, WRITE=31, WRITELN=32, ADD=33, 
		SUB=34, MULT=35, SEMI=36, ASSIGN=37, COMMA=38, COLON=39, EQUAL=40, NOT_EQUAL=41, 
		LT=42, LE=43, GE=44, GT=45, LP=46, RP=47, AT=48, LBRACK=49, LBRACK2=50, 
		RBRACK=51, RBRACK2=52, DOT=53, DOTDOT=54, STRING=55, TRUE=56, FALSE=57, 
		WHITESPACE=58, TAB=59, NL=60, COMMENT_1=61, COMMENT_2=62, NUMBER=63, ID=64, 
		CHAR_LITERAL=65, STRING_LITERAL=66;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N", "O", "P", 
		"R", "S", "T", "U", "V", "W", "X", "Y", "AND", "ARRAY", "BEGIN", "BOOLEAN", 
		"CASE", "CHAR", "CONST", "DIV", "DO", "ELSE", "END", "FOR", "FUNCTION", 
		"IF", "IN", "INTEGER", "LABEL", "MOD", "NOT", "OF", "OR", "PROCEDURE", 
		"PROGRAM", "READLN", "SET", "THEN", "TO", "TYPE", "VAR", "WHILE", "WRITE", 
		"WRITELN", "ADD", "SUB", "MULT", "SEMI", "ASSIGN", "COMMA", "COLON", "EQUAL", 
		"NOT_EQUAL", "LT", "LE", "GE", "GT", "LP", "RP", "AT", "LBRACK", "LBRACK2", 
		"RBRACK", "RBRACK2", "DOT", "DOTDOT", "STRING", "TRUE", "FALSE", "WHITESPACE", 
		"TAB", "NL", "COMMENT_1", "COMMENT_2", "NUMBER", "ID", "CHAR_LITERAL", 
		"STRING_LITERAL"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, "'+'", "'-'", "'*'", 
		"';'", "':='", "','", "':'", "'='", "'<>'", "'<'", "'<='", "'>='", "'>'", 
		"'('", "')'", "'@'", "'['", "'(.'", "']'", "'.)'", "'.'", "'..'", null, 
		null, null, "' '", "'\t'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "AND", "ARRAY", "BEGIN", "BOOLEAN", "CASE", "CHAR", "CONST", "DIV", 
		"DO", "ELSE", "END", "FOR", "FUNCTION", "IF", "IN", "INTEGER", "LABEL", 
		"MOD", "NOT", "OF", "OR", "PROCEDURE", "PROGRAM", "READLN", "SET", "THEN", 
		"TO", "TYPE", "VAR", "WHILE", "WRITE", "WRITELN", "ADD", "SUB", "MULT", 
		"SEMI", "ASSIGN", "COMMA", "COLON", "EQUAL", "NOT_EQUAL", "LT", "LE", 
		"GE", "GT", "LP", "RP", "AT", "LBRACK", "LBRACK2", "RBRACK", "RBRACK2", 
		"DOT", "DOTDOT", "STRING", "TRUE", "FALSE", "WHITESPACE", "TAB", "NL", 
		"COMMENT_1", "COMMENT_2", "NUMBER", "ID", "CHAR_LITERAL", "STRING_LITERAL"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public pascalLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "pascal.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2D\u0210\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6"+
		"\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3"+
		"\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3"+
		"\26\3\26\3\27\3\27\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3"+
		"\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3"+
		"\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3"+
		"\36\3\36\3\37\3\37\3\37\3\37\3 \3 \3 \3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3"+
		"#\3#\3#\3#\3$\3$\3$\3$\3$\3$\3$\3$\3$\3%\3%\3%\3&\3&\3&\3\'\3\'\3\'\3"+
		"\'\3\'\3\'\3\'\3\'\3(\3(\3(\3(\3(\3(\3)\3)\3)\3)\3*\3*\3*\3*\3+\3+\3+"+
		"\3,\3,\3,\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\3.\3.\3.\3/\3/"+
		"\3/\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\62\3\62"+
		"\3\62\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\3\65\3\65\3\65\3\65"+
		"\3\65\3\65\3\66\3\66\3\66\3\66\3\66\3\66\3\67\3\67\3\67\3\67\3\67\3\67"+
		"\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3<\3<\3<\3=\3=\3>\3>\3?\3?\3@\3@\3"+
		"@\3A\3A\3B\3B\3B\3C\3C\3C\3D\3D\3E\3E\3F\3F\3G\3G\3H\3H\3I\3I\3I\3J\3"+
		"J\3K\3K\3K\3L\3L\3M\3M\3M\3N\3N\3N\3N\3N\3N\3N\3O\3O\3O\3O\3O\3P\3P\3"+
		"P\3P\3P\3P\3Q\3Q\3Q\3Q\3R\3R\3R\3R\3S\5S\u01d7\nS\3S\3S\3S\3S\3T\3T\3"+
		"T\3T\7T\u01e1\nT\fT\16T\u01e4\13T\3T\3T\3T\3T\3T\3U\3U\7U\u01ed\nU\fU"+
		"\16U\u01f0\13U\3U\3U\3U\3U\3V\6V\u01f7\nV\rV\16V\u01f8\3W\3W\7W\u01fd"+
		"\nW\fW\16W\u0200\13W\3X\3X\3X\3X\3Y\3Y\3Y\3Y\7Y\u020a\nY\fY\16Y\u020d"+
		"\13Y\3Y\3Y\4\u01e2\u01ee\2Z\3\2\5\2\7\2\t\2\13\2\r\2\17\2\21\2\23\2\25"+
		"\2\27\2\31\2\33\2\35\2\37\2!\2#\2%\2\'\2)\2+\2-\2/\3\61\4\63\5\65\6\67"+
		"\79\b;\t=\n?\13A\fC\rE\16G\17I\20K\21M\22O\23Q\24S\25U\26W\27Y\30[\31"+
		"]\32_\33a\34c\35e\36g\37i k!m\"o#q$s%u&w\'y({)}*\177+\u0081,\u0083-\u0085"+
		".\u0087/\u0089\60\u008b\61\u008d\62\u008f\63\u0091\64\u0093\65\u0095\66"+
		"\u0097\67\u00998\u009b9\u009d:\u009f;\u00a1<\u00a3=\u00a5>\u00a7?\u00a9"+
		"@\u00abA\u00adB\u00afC\u00b1D\3\2\34\4\2CCcc\4\2DDdd\4\2EEee\4\2FFff\4"+
		"\2GGgg\4\2HHhh\4\2IIii\4\2JJjj\4\2KKkk\4\2NNnn\4\2OOoo\4\2PPpp\4\2QQq"+
		"q\4\2RRrr\4\2TTtt\4\2UUuu\4\2VVvv\4\2WWww\4\2XXxx\4\2YYyy\4\2ZZzz\4\2"+
		"[[{{\3\2\62;\5\2C\\aac|\6\2\62;C\\aac|\3\2))\2\u0200\2/\3\2\2\2\2\61\3"+
		"\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2"+
		"=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3"+
		"\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2"+
		"\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2"+
		"c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3"+
		"\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2"+
		"\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3"+
		"\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2"+
		"\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097"+
		"\3\2\2\2\2\u0099\3\2\2\2\2\u009b\3\2\2\2\2\u009d\3\2\2\2\2\u009f\3\2\2"+
		"\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2\2\2\u00a7\3\2\2\2\2\u00a9"+
		"\3\2\2\2\2\u00ab\3\2\2\2\2\u00ad\3\2\2\2\2\u00af\3\2\2\2\2\u00b1\3\2\2"+
		"\2\3\u00b3\3\2\2\2\5\u00b5\3\2\2\2\7\u00b7\3\2\2\2\t\u00b9\3\2\2\2\13"+
		"\u00bb\3\2\2\2\r\u00bd\3\2\2\2\17\u00bf\3\2\2\2\21\u00c1\3\2\2\2\23\u00c3"+
		"\3\2\2\2\25\u00c5\3\2\2\2\27\u00c7\3\2\2\2\31\u00c9\3\2\2\2\33\u00cb\3"+
		"\2\2\2\35\u00cd\3\2\2\2\37\u00cf\3\2\2\2!\u00d1\3\2\2\2#\u00d3\3\2\2\2"+
		"%\u00d5\3\2\2\2\'\u00d7\3\2\2\2)\u00d9\3\2\2\2+\u00db\3\2\2\2-\u00dd\3"+
		"\2\2\2/\u00df\3\2\2\2\61\u00e3\3\2\2\2\63\u00e9\3\2\2\2\65\u00ef\3\2\2"+
		"\2\67\u00f7\3\2\2\29\u00fc\3\2\2\2;\u0101\3\2\2\2=\u0107\3\2\2\2?\u010b"+
		"\3\2\2\2A\u010e\3\2\2\2C\u0113\3\2\2\2E\u0117\3\2\2\2G\u011b\3\2\2\2I"+
		"\u0124\3\2\2\2K\u0127\3\2\2\2M\u012a\3\2\2\2O\u0132\3\2\2\2Q\u0138\3\2"+
		"\2\2S\u013c\3\2\2\2U\u0140\3\2\2\2W\u0143\3\2\2\2Y\u0146\3\2\2\2[\u0150"+
		"\3\2\2\2]\u0158\3\2\2\2_\u015f\3\2\2\2a\u0163\3\2\2\2c\u0168\3\2\2\2e"+
		"\u016b\3\2\2\2g\u0170\3\2\2\2i\u0174\3\2\2\2k\u017a\3\2\2\2m\u0180\3\2"+
		"\2\2o\u0188\3\2\2\2q\u018a\3\2\2\2s\u018c\3\2\2\2u\u018e\3\2\2\2w\u0190"+
		"\3\2\2\2y\u0193\3\2\2\2{\u0195\3\2\2\2}\u0197\3\2\2\2\177\u0199\3\2\2"+
		"\2\u0081\u019c\3\2\2\2\u0083\u019e\3\2\2\2\u0085\u01a1\3\2\2\2\u0087\u01a4"+
		"\3\2\2\2\u0089\u01a6\3\2\2\2\u008b\u01a8\3\2\2\2\u008d\u01aa\3\2\2\2\u008f"+
		"\u01ac\3\2\2\2\u0091\u01ae\3\2\2\2\u0093\u01b1\3\2\2\2\u0095\u01b3\3\2"+
		"\2\2\u0097\u01b6\3\2\2\2\u0099\u01b8\3\2\2\2\u009b\u01bb\3\2\2\2\u009d"+
		"\u01c2\3\2\2\2\u009f\u01c7\3\2\2\2\u00a1\u01cd\3\2\2\2\u00a3\u01d1\3\2"+
		"\2\2\u00a5\u01d6\3\2\2\2\u00a7\u01dc\3\2\2\2\u00a9\u01ea\3\2\2\2\u00ab"+
		"\u01f6\3\2\2\2\u00ad\u01fa\3\2\2\2\u00af\u0201\3\2\2\2\u00b1\u0205\3\2"+
		"\2\2\u00b3\u00b4\t\2\2\2\u00b4\4\3\2\2\2\u00b5\u00b6\t\3\2\2\u00b6\6\3"+
		"\2\2\2\u00b7\u00b8\t\4\2\2\u00b8\b\3\2\2\2\u00b9\u00ba\t\5\2\2\u00ba\n"+
		"\3\2\2\2\u00bb\u00bc\t\6\2\2\u00bc\f\3\2\2\2\u00bd\u00be\t\7\2\2\u00be"+
		"\16\3\2\2\2\u00bf\u00c0\t\b\2\2\u00c0\20\3\2\2\2\u00c1\u00c2\t\t\2\2\u00c2"+
		"\22\3\2\2\2\u00c3\u00c4\t\n\2\2\u00c4\24\3\2\2\2\u00c5\u00c6\t\13\2\2"+
		"\u00c6\26\3\2\2\2\u00c7\u00c8\t\f\2\2\u00c8\30\3\2\2\2\u00c9\u00ca\t\r"+
		"\2\2\u00ca\32\3\2\2\2\u00cb\u00cc\t\16\2\2\u00cc\34\3\2\2\2\u00cd\u00ce"+
		"\t\17\2\2\u00ce\36\3\2\2\2\u00cf\u00d0\t\20\2\2\u00d0 \3\2\2\2\u00d1\u00d2"+
		"\t\21\2\2\u00d2\"\3\2\2\2\u00d3\u00d4\t\22\2\2\u00d4$\3\2\2\2\u00d5\u00d6"+
		"\t\23\2\2\u00d6&\3\2\2\2\u00d7\u00d8\t\24\2\2\u00d8(\3\2\2\2\u00d9\u00da"+
		"\t\25\2\2\u00da*\3\2\2\2\u00db\u00dc\t\26\2\2\u00dc,\3\2\2\2\u00dd\u00de"+
		"\t\27\2\2\u00de.\3\2\2\2\u00df\u00e0\5\3\2\2\u00e0\u00e1\5\31\r\2\u00e1"+
		"\u00e2\5\t\5\2\u00e2\60\3\2\2\2\u00e3\u00e4\5\3\2\2\u00e4\u00e5\5\37\20"+
		"\2\u00e5\u00e6\5\37\20\2\u00e6\u00e7\5\3\2\2\u00e7\u00e8\5-\27\2\u00e8"+
		"\62\3\2\2\2\u00e9\u00ea\5\5\3\2\u00ea\u00eb\5\13\6\2\u00eb\u00ec\5\17"+
		"\b\2\u00ec\u00ed\5\23\n\2\u00ed\u00ee\5\31\r\2\u00ee\64\3\2\2\2\u00ef"+
		"\u00f0\5\5\3\2\u00f0\u00f1\5\33\16\2\u00f1\u00f2\5\33\16\2\u00f2\u00f3"+
		"\5\25\13\2\u00f3\u00f4\5\13\6\2\u00f4\u00f5\5\3\2\2\u00f5\u00f6\5\31\r"+
		"\2\u00f6\66\3\2\2\2\u00f7\u00f8\5\7\4\2\u00f8\u00f9\5\3\2\2\u00f9\u00fa"+
		"\5!\21\2\u00fa\u00fb\5\13\6\2\u00fb8\3\2\2\2\u00fc\u00fd\5\7\4\2\u00fd"+
		"\u00fe\5\21\t\2\u00fe\u00ff\5\3\2\2\u00ff\u0100\5\37\20\2\u0100:\3\2\2"+
		"\2\u0101\u0102\5\7\4\2\u0102\u0103\5\33\16\2\u0103\u0104\5\31\r\2\u0104"+
		"\u0105\5!\21\2\u0105\u0106\5#\22\2\u0106<\3\2\2\2\u0107\u0108\5\t\5\2"+
		"\u0108\u0109\5\23\n\2\u0109\u010a\5\'\24\2\u010a>\3\2\2\2\u010b\u010c"+
		"\5\t\5\2\u010c\u010d\5\33\16\2\u010d@\3\2\2\2\u010e\u010f\5\13\6\2\u010f"+
		"\u0110\5\25\13\2\u0110\u0111\5!\21\2\u0111\u0112\5\13\6\2\u0112B\3\2\2"+
		"\2\u0113\u0114\5\13\6\2\u0114\u0115\5\31\r\2\u0115\u0116\5\t\5\2\u0116"+
		"D\3\2\2\2\u0117\u0118\5\r\7\2\u0118\u0119\5\33\16\2\u0119\u011a\5\37\20"+
		"\2\u011aF\3\2\2\2\u011b\u011c\5\r\7\2\u011c\u011d\5%\23\2\u011d\u011e"+
		"\5\31\r\2\u011e\u011f\5\7\4\2\u011f\u0120\5#\22\2\u0120\u0121\5\23\n\2"+
		"\u0121\u0122\5\33\16\2\u0122\u0123\5\31\r\2\u0123H\3\2\2\2\u0124\u0125"+
		"\5\23\n\2\u0125\u0126\5\r\7\2\u0126J\3\2\2\2\u0127\u0128\5\23\n\2\u0128"+
		"\u0129\5\31\r\2\u0129L\3\2\2\2\u012a\u012b\5\23\n\2\u012b\u012c\5\31\r"+
		"\2\u012c\u012d\5#\22\2\u012d\u012e\5\13\6\2\u012e\u012f\5\17\b\2\u012f"+
		"\u0130\5\13\6\2\u0130\u0131\5\37\20\2\u0131N\3\2\2\2\u0132\u0133\5\25"+
		"\13\2\u0133\u0134\5\3\2\2\u0134\u0135\5\5\3\2\u0135\u0136\5\13\6\2\u0136"+
		"\u0137\5\25\13\2\u0137P\3\2\2\2\u0138\u0139\5\27\f\2\u0139\u013a\5\33"+
		"\16\2\u013a\u013b\5\t\5\2\u013bR\3\2\2\2\u013c\u013d\5\31\r\2\u013d\u013e"+
		"\5\33\16\2\u013e\u013f\5#\22\2\u013fT\3\2\2\2\u0140\u0141\5\33\16\2\u0141"+
		"\u0142\5\r\7\2\u0142V\3\2\2\2\u0143\u0144\5\33\16\2\u0144\u0145\5\37\20"+
		"\2\u0145X\3\2\2\2\u0146\u0147\5\35\17\2\u0147\u0148\5\37\20\2\u0148\u0149"+
		"\5\33\16\2\u0149\u014a\5\7\4\2\u014a\u014b\5\13\6\2\u014b\u014c\5\t\5"+
		"\2\u014c\u014d\5%\23\2\u014d\u014e\5\37\20\2\u014e\u014f\5\13\6\2\u014f"+
		"Z\3\2\2\2\u0150\u0151\5\35\17\2\u0151\u0152\5\37\20\2\u0152\u0153\5\33"+
		"\16\2\u0153\u0154\5\17\b\2\u0154\u0155\5\37\20\2\u0155\u0156\5\3\2\2\u0156"+
		"\u0157\5\27\f\2\u0157\\\3\2\2\2\u0158\u0159\5\37\20\2\u0159\u015a\5\13"+
		"\6\2\u015a\u015b\5\3\2\2\u015b\u015c\5\t\5\2\u015c\u015d\5\25\13\2\u015d"+
		"\u015e\5\31\r\2\u015e^\3\2\2\2\u015f\u0160\5!\21\2\u0160\u0161\5\13\6"+
		"\2\u0161\u0162\5#\22\2\u0162`\3\2\2\2\u0163\u0164\5#\22\2\u0164\u0165"+
		"\5\21\t\2\u0165\u0166\5\13\6\2\u0166\u0167\5\31\r\2\u0167b\3\2\2\2\u0168"+
		"\u0169\5#\22\2\u0169\u016a\5\33\16\2\u016ad\3\2\2\2\u016b\u016c\5#\22"+
		"\2\u016c\u016d\5-\27\2\u016d\u016e\5\35\17\2\u016e\u016f\5\13\6\2\u016f"+
		"f\3\2\2\2\u0170\u0171\5\'\24\2\u0171\u0172\5\3\2\2\u0172\u0173\5\37\20"+
		"\2\u0173h\3\2\2\2\u0174\u0175\5)\25\2\u0175\u0176\5\21\t\2\u0176\u0177"+
		"\5\23\n\2\u0177\u0178\5\25\13\2\u0178\u0179\5\13\6\2\u0179j\3\2\2\2\u017a"+
		"\u017b\5)\25\2\u017b\u017c\5\37\20\2\u017c\u017d\5\23\n\2\u017d\u017e"+
		"\5#\22\2\u017e\u017f\5\13\6\2\u017fl\3\2\2\2\u0180\u0181\5)\25\2\u0181"+
		"\u0182\5\37\20\2\u0182\u0183\5\23\n\2\u0183\u0184\5#\22\2\u0184\u0185"+
		"\5\13\6\2\u0185\u0186\5\25\13\2\u0186\u0187\5\31\r\2\u0187n\3\2\2\2\u0188"+
		"\u0189\7-\2\2\u0189p\3\2\2\2\u018a\u018b\7/\2\2\u018br\3\2\2\2\u018c\u018d"+
		"\7,\2\2\u018dt\3\2\2\2\u018e\u018f\7=\2\2\u018fv\3\2\2\2\u0190\u0191\7"+
		"<\2\2\u0191\u0192\7?\2\2\u0192x\3\2\2\2\u0193\u0194\7.\2\2\u0194z\3\2"+
		"\2\2\u0195\u0196\7<\2\2\u0196|\3\2\2\2\u0197\u0198\7?\2\2\u0198~\3\2\2"+
		"\2\u0199\u019a\7>\2\2\u019a\u019b\7@\2\2\u019b\u0080\3\2\2\2\u019c\u019d"+
		"\7>\2\2\u019d\u0082\3\2\2\2\u019e\u019f\7>\2\2\u019f\u01a0\7?\2\2\u01a0"+
		"\u0084\3\2\2\2\u01a1\u01a2\7@\2\2\u01a2\u01a3\7?\2\2\u01a3\u0086\3\2\2"+
		"\2\u01a4\u01a5\7@\2\2\u01a5\u0088\3\2\2\2\u01a6\u01a7\7*\2\2\u01a7\u008a"+
		"\3\2\2\2\u01a8\u01a9\7+\2\2\u01a9\u008c\3\2\2\2\u01aa\u01ab\7B\2\2\u01ab"+
		"\u008e\3\2\2\2\u01ac\u01ad\7]\2\2\u01ad\u0090\3\2\2\2\u01ae\u01af\7*\2"+
		"\2\u01af\u01b0\7\60\2\2\u01b0\u0092\3\2\2\2\u01b1\u01b2\7_\2\2\u01b2\u0094"+
		"\3\2\2\2\u01b3\u01b4\7\60\2\2\u01b4\u01b5\7+\2\2\u01b5\u0096\3\2\2\2\u01b6"+
		"\u01b7\7\60\2\2\u01b7\u0098\3\2\2\2\u01b8\u01b9\7\60\2\2\u01b9\u01ba\7"+
		"\60\2\2\u01ba\u009a\3\2\2\2\u01bb\u01bc\5!\21\2\u01bc\u01bd\5#\22\2\u01bd"+
		"\u01be\5\37\20\2\u01be\u01bf\5\23\n\2\u01bf\u01c0\5\31\r\2\u01c0\u01c1"+
		"\5\17\b\2\u01c1\u009c\3\2\2\2\u01c2\u01c3\5#\22\2\u01c3\u01c4\5\37\20"+
		"\2\u01c4\u01c5\5%\23\2\u01c5\u01c6\5\13\6\2\u01c6\u009e\3\2\2\2\u01c7"+
		"\u01c8\5\r\7\2\u01c8\u01c9\5\3\2\2\u01c9\u01ca\5\25\13\2\u01ca\u01cb\5"+
		"!\21\2\u01cb\u01cc\5\13\6\2\u01cc\u00a0\3\2\2\2\u01cd\u01ce\7\"\2\2\u01ce"+
		"\u01cf\3\2\2\2\u01cf\u01d0\bQ\2\2\u01d0\u00a2\3\2\2\2\u01d1\u01d2\7\13"+
		"\2\2\u01d2\u01d3\3\2\2\2\u01d3\u01d4\bR\2\2\u01d4\u00a4\3\2\2\2\u01d5"+
		"\u01d7\7\17\2\2\u01d6\u01d5\3\2\2\2\u01d6\u01d7\3\2\2\2\u01d7\u01d8\3"+
		"\2\2\2\u01d8\u01d9\7\f\2\2\u01d9\u01da\3\2\2\2\u01da\u01db\bS\2\2\u01db"+
		"\u00a6\3\2\2\2\u01dc\u01dd\7*\2\2\u01dd\u01de\7,\2\2\u01de\u01e2\3\2\2"+
		"\2\u01df\u01e1\13\2\2\2\u01e0\u01df\3\2\2\2\u01e1\u01e4\3\2\2\2\u01e2"+
		"\u01e3\3\2\2\2\u01e2\u01e0\3\2\2\2\u01e3\u01e5\3\2\2\2\u01e4\u01e2\3\2"+
		"\2\2\u01e5\u01e6\7,\2\2\u01e6\u01e7\7+\2\2\u01e7\u01e8\3\2\2\2\u01e8\u01e9"+
		"\bT\2\2\u01e9\u00a8\3\2\2\2\u01ea\u01ee\7}\2\2\u01eb\u01ed\13\2\2\2\u01ec"+
		"\u01eb\3\2\2\2\u01ed\u01f0\3\2\2\2\u01ee\u01ef\3\2\2\2\u01ee\u01ec\3\2"+
		"\2\2\u01ef\u01f1\3\2\2\2\u01f0\u01ee\3\2\2\2\u01f1\u01f2\7\177\2\2\u01f2"+
		"\u01f3\3\2\2\2\u01f3\u01f4\bU\2\2\u01f4\u00aa\3\2\2\2\u01f5\u01f7\t\30"+
		"\2\2\u01f6\u01f5\3\2\2\2\u01f7\u01f8\3\2\2\2\u01f8\u01f6\3\2\2\2\u01f8"+
		"\u01f9\3\2\2\2\u01f9\u00ac\3\2\2\2\u01fa\u01fe\t\31\2\2\u01fb\u01fd\t"+
		"\32\2\2\u01fc\u01fb\3\2\2\2\u01fd\u0200\3\2\2\2\u01fe\u01fc\3\2\2\2\u01fe"+
		"\u01ff\3\2\2\2\u01ff\u00ae\3\2\2\2\u0200\u01fe\3\2\2\2\u0201\u0202\7)"+
		"\2\2\u0202\u0203\n\33\2\2\u0203\u0204\7)\2\2\u0204\u00b0\3\2\2\2\u0205"+
		"\u020b\7)\2\2\u0206\u0207\7)\2\2\u0207\u020a\7)\2\2\u0208\u020a\n\33\2"+
		"\2\u0209\u0206\3\2\2\2\u0209\u0208\3\2\2\2\u020a\u020d\3\2\2\2\u020b\u0209"+
		"\3\2\2\2\u020b\u020c\3\2\2\2\u020c\u020e\3\2\2\2\u020d\u020b\3\2\2\2\u020e"+
		"\u020f\7)\2\2\u020f\u00b2\3\2\2\2\n\2\u01d6\u01e2\u01ee\u01f8\u01fe\u0209"+
		"\u020b\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}