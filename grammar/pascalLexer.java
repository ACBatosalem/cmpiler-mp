// Generated from pascal.g4 by ANTLR 4.7.2
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
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		AND=1, ARRAY=2, BEGIN=3, BOOLEAN=4, CASE=5, CHAR=6, CONST=7, DIV=8, DO=9, 
		ELSE=10, END=11, FOR=12, FUNCTION=13, IF=14, IN=15, INTEGER=16, LABEL=17, 
		MOD=18, NOT=19, OF=20, OR=21, PROCEDURE=22, PROGRAM=23, SET=24, THEN=25, 
		TO=26, TYPE=27, VAR=28, WHILE=29, ADD=30, SUB=31, MULT=32, SEMI=33, ASSIGN=34, 
		COMMA=35, COLON=36, EQUAL=37, NOT_EQUAL=38, LT=39, LE=40, GE=41, GT=42, 
		LP=43, RP=44, AT=45, LBRACK=46, LBRACK2=47, RBRACK=48, RBRACK2=49, DOT=50, 
		DOTDOT=51, STRING=52, TRUE=53, FALSE=54, WHITESPACE=55, TAB=56, NL=57, 
		COMMENT_1=58, COMMENT_2=59, NUMBER=60, ID=61, STRING_LITERAL=62;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N", "O", "P", 
			"R", "S", "T", "U", "V", "W", "X", "Y", "AND", "ARRAY", "BEGIN", "BOOLEAN", 
			"CASE", "CHAR", "CONST", "DIV", "DO", "ELSE", "END", "FOR", "FUNCTION", 
			"IF", "IN", "INTEGER", "LABEL", "MOD", "NOT", "OF", "OR", "PROCEDURE", 
			"PROGRAM", "SET", "THEN", "TO", "TYPE", "VAR", "WHILE", "ADD", "SUB", 
			"MULT", "SEMI", "ASSIGN", "COMMA", "COLON", "EQUAL", "NOT_EQUAL", "LT", 
			"LE", "GE", "GT", "LP", "RP", "AT", "LBRACK", "LBRACK2", "RBRACK", "RBRACK2", 
			"DOT", "DOTDOT", "STRING", "TRUE", "FALSE", "WHITESPACE", "TAB", "NL", 
			"COMMENT_1", "COMMENT_2", "NUMBER", "ID", "STRING_LITERAL"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "'+'", "'-'", "'*'", "';'", "':='", 
			"','", "':'", "'='", "'<>'", "'<'", "'<='", "'>='", "'>'", "'('", "')'", 
			"'@'", "'['", "'(.'", "']'", "'.)'", "'.'", "'..'", null, null, null, 
			"' '", "'\t'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "AND", "ARRAY", "BEGIN", "BOOLEAN", "CASE", "CHAR", "CONST", "DIV", 
			"DO", "ELSE", "END", "FOR", "FUNCTION", "IF", "IN", "INTEGER", "LABEL", 
			"MOD", "NOT", "OF", "OR", "PROCEDURE", "PROGRAM", "SET", "THEN", "TO", 
			"TYPE", "VAR", "WHILE", "ADD", "SUB", "MULT", "SEMI", "ASSIGN", "COMMA", 
			"COLON", "EQUAL", "NOT_EQUAL", "LT", "LE", "GE", "GT", "LP", "RP", "AT", 
			"LBRACK", "LBRACK2", "RBRACK", "RBRACK2", "DOT", "DOTDOT", "STRING", 
			"TRUE", "FALSE", "WHITESPACE", "TAB", "NL", "COMMENT_1", "COMMENT_2", 
			"NUMBER", "ID", "STRING_LITERAL"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2@\u01ef\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t"+
		"\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21"+
		"\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30"+
		"\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34"+
		"\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37"+
		"\3\37\3 \3 \3 \3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3$\3$\3$\3$"+
		"\3$\3$\3$\3$\3$\3%\3%\3%\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'\3\'\3\'\3(\3"+
		"(\3(\3(\3(\3(\3)\3)\3)\3)\3*\3*\3*\3*\3+\3+\3+\3,\3,\3,\3-\3-\3-\3-\3"+
		"-\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\3.\3.\3.\3/\3/\3/\3/\3\60\3\60\3\60\3"+
		"\60\3\60\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3"+
		"\64\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3\66\3\66\3\67\3\67\38\38\39\3"+
		"9\39\3:\3:\3;\3;\3<\3<\3=\3=\3=\3>\3>\3?\3?\3?\3@\3@\3@\3A\3A\3B\3B\3"+
		"C\3C\3D\3D\3E\3E\3F\3F\3F\3G\3G\3H\3H\3H\3I\3I\3J\3J\3J\3K\3K\3K\3K\3"+
		"K\3K\3K\3L\3L\3L\3L\3L\3M\3M\3M\3M\3M\3M\3N\3N\3N\3N\3O\3O\3O\3O\3P\5"+
		"P\u01ba\nP\3P\3P\3P\3P\3Q\3Q\3Q\3Q\7Q\u01c4\nQ\fQ\16Q\u01c7\13Q\3Q\3Q"+
		"\3Q\3Q\3Q\3R\3R\7R\u01d0\nR\fR\16R\u01d3\13R\3R\3R\3R\3R\3S\6S\u01da\n"+
		"S\rS\16S\u01db\3T\3T\7T\u01e0\nT\fT\16T\u01e3\13T\3U\3U\3U\3U\7U\u01e9"+
		"\nU\fU\16U\u01ec\13U\3U\3U\4\u01c5\u01d1\2V\3\2\5\2\7\2\t\2\13\2\r\2\17"+
		"\2\21\2\23\2\25\2\27\2\31\2\33\2\35\2\37\2!\2#\2%\2\'\2)\2+\2-\2/\3\61"+
		"\4\63\5\65\6\67\79\b;\t=\n?\13A\fC\rE\16G\17I\20K\21M\22O\23Q\24S\25U"+
		"\26W\27Y\30[\31]\32_\33a\34c\35e\36g\37i k!m\"o#q$s%u&w\'y({)}*\177+\u0081"+
		",\u0083-\u0085.\u0087/\u0089\60\u008b\61\u008d\62\u008f\63\u0091\64\u0093"+
		"\65\u0095\66\u0097\67\u00998\u009b9\u009d:\u009f;\u00a1<\u00a3=\u00a5"+
		">\u00a7?\u00a9@\3\2\34\4\2CCcc\4\2DDdd\4\2EEee\4\2FFff\4\2GGgg\4\2HHh"+
		"h\4\2IIii\4\2JJjj\4\2KKkk\4\2NNnn\4\2OOoo\4\2PPpp\4\2QQqq\4\2RRrr\4\2"+
		"TTtt\4\2UUuu\4\2VVvv\4\2WWww\4\2XXxx\4\2YYyy\4\2ZZzz\4\2[[{{\3\2\62;\5"+
		"\2C\\aac|\6\2\62;C\\aac|\3\2))\2\u01df\2/\3\2\2\2\2\61\3\2\2\2\2\63\3"+
		"\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3"+
		"\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2"+
		"\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2"+
		"Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3"+
		"\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2"+
		"\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2"+
		"\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3"+
		"\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2"+
		"\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099"+
		"\3\2\2\2\2\u009b\3\2\2\2\2\u009d\3\2\2\2\2\u009f\3\2\2\2\2\u00a1\3\2\2"+
		"\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2\2\2\u00a7\3\2\2\2\2\u00a9\3\2\2\2\3\u00ab"+
		"\3\2\2\2\5\u00ad\3\2\2\2\7\u00af\3\2\2\2\t\u00b1\3\2\2\2\13\u00b3\3\2"+
		"\2\2\r\u00b5\3\2\2\2\17\u00b7\3\2\2\2\21\u00b9\3\2\2\2\23\u00bb\3\2\2"+
		"\2\25\u00bd\3\2\2\2\27\u00bf\3\2\2\2\31\u00c1\3\2\2\2\33\u00c3\3\2\2\2"+
		"\35\u00c5\3\2\2\2\37\u00c7\3\2\2\2!\u00c9\3\2\2\2#\u00cb\3\2\2\2%\u00cd"+
		"\3\2\2\2\'\u00cf\3\2\2\2)\u00d1\3\2\2\2+\u00d3\3\2\2\2-\u00d5\3\2\2\2"+
		"/\u00d7\3\2\2\2\61\u00db\3\2\2\2\63\u00e1\3\2\2\2\65\u00e7\3\2\2\2\67"+
		"\u00ef\3\2\2\29\u00f4\3\2\2\2;\u00f9\3\2\2\2=\u00ff\3\2\2\2?\u0103\3\2"+
		"\2\2A\u0106\3\2\2\2C\u010b\3\2\2\2E\u010f\3\2\2\2G\u0113\3\2\2\2I\u011c"+
		"\3\2\2\2K\u011f\3\2\2\2M\u0122\3\2\2\2O\u012a\3\2\2\2Q\u0130\3\2\2\2S"+
		"\u0134\3\2\2\2U\u0138\3\2\2\2W\u013b\3\2\2\2Y\u013e\3\2\2\2[\u0148\3\2"+
		"\2\2]\u0150\3\2\2\2_\u0154\3\2\2\2a\u0159\3\2\2\2c\u015c\3\2\2\2e\u0161"+
		"\3\2\2\2g\u0165\3\2\2\2i\u016b\3\2\2\2k\u016d\3\2\2\2m\u016f\3\2\2\2o"+
		"\u0171\3\2\2\2q\u0173\3\2\2\2s\u0176\3\2\2\2u\u0178\3\2\2\2w\u017a\3\2"+
		"\2\2y\u017c\3\2\2\2{\u017f\3\2\2\2}\u0181\3\2\2\2\177\u0184\3\2\2\2\u0081"+
		"\u0187\3\2\2\2\u0083\u0189\3\2\2\2\u0085\u018b\3\2\2\2\u0087\u018d\3\2"+
		"\2\2\u0089\u018f\3\2\2\2\u008b\u0191\3\2\2\2\u008d\u0194\3\2\2\2\u008f"+
		"\u0196\3\2\2\2\u0091\u0199\3\2\2\2\u0093\u019b\3\2\2\2\u0095\u019e\3\2"+
		"\2\2\u0097\u01a5\3\2\2\2\u0099\u01aa\3\2\2\2\u009b\u01b0\3\2\2\2\u009d"+
		"\u01b4\3\2\2\2\u009f\u01b9\3\2\2\2\u00a1\u01bf\3\2\2\2\u00a3\u01cd\3\2"+
		"\2\2\u00a5\u01d9\3\2\2\2\u00a7\u01dd\3\2\2\2\u00a9\u01e4\3\2\2\2\u00ab"+
		"\u00ac\t\2\2\2\u00ac\4\3\2\2\2\u00ad\u00ae\t\3\2\2\u00ae\6\3\2\2\2\u00af"+
		"\u00b0\t\4\2\2\u00b0\b\3\2\2\2\u00b1\u00b2\t\5\2\2\u00b2\n\3\2\2\2\u00b3"+
		"\u00b4\t\6\2\2\u00b4\f\3\2\2\2\u00b5\u00b6\t\7\2\2\u00b6\16\3\2\2\2\u00b7"+
		"\u00b8\t\b\2\2\u00b8\20\3\2\2\2\u00b9\u00ba\t\t\2\2\u00ba\22\3\2\2\2\u00bb"+
		"\u00bc\t\n\2\2\u00bc\24\3\2\2\2\u00bd\u00be\t\13\2\2\u00be\26\3\2\2\2"+
		"\u00bf\u00c0\t\f\2\2\u00c0\30\3\2\2\2\u00c1\u00c2\t\r\2\2\u00c2\32\3\2"+
		"\2\2\u00c3\u00c4\t\16\2\2\u00c4\34\3\2\2\2\u00c5\u00c6\t\17\2\2\u00c6"+
		"\36\3\2\2\2\u00c7\u00c8\t\20\2\2\u00c8 \3\2\2\2\u00c9\u00ca\t\21\2\2\u00ca"+
		"\"\3\2\2\2\u00cb\u00cc\t\22\2\2\u00cc$\3\2\2\2\u00cd\u00ce\t\23\2\2\u00ce"+
		"&\3\2\2\2\u00cf\u00d0\t\24\2\2\u00d0(\3\2\2\2\u00d1\u00d2\t\25\2\2\u00d2"+
		"*\3\2\2\2\u00d3\u00d4\t\26\2\2\u00d4,\3\2\2\2\u00d5\u00d6\t\27\2\2\u00d6"+
		".\3\2\2\2\u00d7\u00d8\5\3\2\2\u00d8\u00d9\5\31\r\2\u00d9\u00da\5\t\5\2"+
		"\u00da\60\3\2\2\2\u00db\u00dc\5\3\2\2\u00dc\u00dd\5\37\20\2\u00dd\u00de"+
		"\5\37\20\2\u00de\u00df\5\3\2\2\u00df\u00e0\5-\27\2\u00e0\62\3\2\2\2\u00e1"+
		"\u00e2\5\5\3\2\u00e2\u00e3\5\13\6\2\u00e3\u00e4\5\17\b\2\u00e4\u00e5\5"+
		"\23\n\2\u00e5\u00e6\5\31\r\2\u00e6\64\3\2\2\2\u00e7\u00e8\5\5\3\2\u00e8"+
		"\u00e9\5\33\16\2\u00e9\u00ea\5\33\16\2\u00ea\u00eb\5\25\13\2\u00eb\u00ec"+
		"\5\13\6\2\u00ec\u00ed\5\3\2\2\u00ed\u00ee\5\31\r\2\u00ee\66\3\2\2\2\u00ef"+
		"\u00f0\5\7\4\2\u00f0\u00f1\5\3\2\2\u00f1\u00f2\5!\21\2\u00f2\u00f3\5\13"+
		"\6\2\u00f38\3\2\2\2\u00f4\u00f5\5\7\4\2\u00f5\u00f6\5\21\t\2\u00f6\u00f7"+
		"\5\3\2\2\u00f7\u00f8\5\37\20\2\u00f8:\3\2\2\2\u00f9\u00fa\5\7\4\2\u00fa"+
		"\u00fb\5\33\16\2\u00fb\u00fc\5\31\r\2\u00fc\u00fd\5!\21\2\u00fd\u00fe"+
		"\5#\22\2\u00fe<\3\2\2\2\u00ff\u0100\5\t\5\2\u0100\u0101\5\23\n\2\u0101"+
		"\u0102\5\'\24\2\u0102>\3\2\2\2\u0103\u0104\5\t\5\2\u0104\u0105\5\33\16"+
		"\2\u0105@\3\2\2\2\u0106\u0107\5\13\6\2\u0107\u0108\5\25\13\2\u0108\u0109"+
		"\5!\21\2\u0109\u010a\5\13\6\2\u010aB\3\2\2\2\u010b\u010c\5\13\6\2\u010c"+
		"\u010d\5\31\r\2\u010d\u010e\5\t\5\2\u010eD\3\2\2\2\u010f\u0110\5\r\7\2"+
		"\u0110\u0111\5\33\16\2\u0111\u0112\5\37\20\2\u0112F\3\2\2\2\u0113\u0114"+
		"\5\r\7\2\u0114\u0115\5%\23\2\u0115\u0116\5\31\r\2\u0116\u0117\5\7\4\2"+
		"\u0117\u0118\5#\22\2\u0118\u0119\5\23\n\2\u0119\u011a\5\33\16\2\u011a"+
		"\u011b\5\31\r\2\u011bH\3\2\2\2\u011c\u011d\5\23\n\2\u011d\u011e\5\r\7"+
		"\2\u011eJ\3\2\2\2\u011f\u0120\5\23\n\2\u0120\u0121\5\31\r\2\u0121L\3\2"+
		"\2\2\u0122\u0123\5\23\n\2\u0123\u0124\5\31\r\2\u0124\u0125\5#\22\2\u0125"+
		"\u0126\5\13\6\2\u0126\u0127\5\17\b\2\u0127\u0128\5\13\6\2\u0128\u0129"+
		"\5\37\20\2\u0129N\3\2\2\2\u012a\u012b\5\25\13\2\u012b\u012c\5\3\2\2\u012c"+
		"\u012d\5\5\3\2\u012d\u012e\5\13\6\2\u012e\u012f\5\25\13\2\u012fP\3\2\2"+
		"\2\u0130\u0131\5\27\f\2\u0131\u0132\5\33\16\2\u0132\u0133\5\t\5\2\u0133"+
		"R\3\2\2\2\u0134\u0135\5\31\r\2\u0135\u0136\5\33\16\2\u0136\u0137\5#\22"+
		"\2\u0137T\3\2\2\2\u0138\u0139\5\33\16\2\u0139\u013a\5\r\7\2\u013aV\3\2"+
		"\2\2\u013b\u013c\5\33\16\2\u013c\u013d\5\37\20\2\u013dX\3\2\2\2\u013e"+
		"\u013f\5\35\17\2\u013f\u0140\5\37\20\2\u0140\u0141\5\33\16\2\u0141\u0142"+
		"\5\7\4\2\u0142\u0143\5\13\6\2\u0143\u0144\5\t\5\2\u0144\u0145\5%\23\2"+
		"\u0145\u0146\5\37\20\2\u0146\u0147\5\13\6\2\u0147Z\3\2\2\2\u0148\u0149"+
		"\5\35\17\2\u0149\u014a\5\37\20\2\u014a\u014b\5\33\16\2\u014b\u014c\5\17"+
		"\b\2\u014c\u014d\5\37\20\2\u014d\u014e\5\3\2\2\u014e\u014f\5\27\f\2\u014f"+
		"\\\3\2\2\2\u0150\u0151\5!\21\2\u0151\u0152\5\13\6\2\u0152\u0153\5#\22"+
		"\2\u0153^\3\2\2\2\u0154\u0155\5#\22\2\u0155\u0156\5\21\t\2\u0156\u0157"+
		"\5\13\6\2\u0157\u0158\5\31\r\2\u0158`\3\2\2\2\u0159\u015a\5#\22\2\u015a"+
		"\u015b\5\33\16\2\u015bb\3\2\2\2\u015c\u015d\5#\22\2\u015d\u015e\5-\27"+
		"\2\u015e\u015f\5\35\17\2\u015f\u0160\5\13\6\2\u0160d\3\2\2\2\u0161\u0162"+
		"\5\'\24\2\u0162\u0163\5\3\2\2\u0163\u0164\5\37\20\2\u0164f\3\2\2\2\u0165"+
		"\u0166\5)\25\2\u0166\u0167\5\21\t\2\u0167\u0168\5\23\n\2\u0168\u0169\5"+
		"\25\13\2\u0169\u016a\5\13\6\2\u016ah\3\2\2\2\u016b\u016c\7-\2\2\u016c"+
		"j\3\2\2\2\u016d\u016e\7/\2\2\u016el\3\2\2\2\u016f\u0170\7,\2\2\u0170n"+
		"\3\2\2\2\u0171\u0172\7=\2\2\u0172p\3\2\2\2\u0173\u0174\7<\2\2\u0174\u0175"+
		"\7?\2\2\u0175r\3\2\2\2\u0176\u0177\7.\2\2\u0177t\3\2\2\2\u0178\u0179\7"+
		"<\2\2\u0179v\3\2\2\2\u017a\u017b\7?\2\2\u017bx\3\2\2\2\u017c\u017d\7>"+
		"\2\2\u017d\u017e\7@\2\2\u017ez\3\2\2\2\u017f\u0180\7>\2\2\u0180|\3\2\2"+
		"\2\u0181\u0182\7>\2\2\u0182\u0183\7?\2\2\u0183~\3\2\2\2\u0184\u0185\7"+
		"@\2\2\u0185\u0186\7?\2\2\u0186\u0080\3\2\2\2\u0187\u0188\7@\2\2\u0188"+
		"\u0082\3\2\2\2\u0189\u018a\7*\2\2\u018a\u0084\3\2\2\2\u018b\u018c\7+\2"+
		"\2\u018c\u0086\3\2\2\2\u018d\u018e\7B\2\2\u018e\u0088\3\2\2\2\u018f\u0190"+
		"\7]\2\2\u0190\u008a\3\2\2\2\u0191\u0192\7*\2\2\u0192\u0193\7\60\2\2\u0193"+
		"\u008c\3\2\2\2\u0194\u0195\7_\2\2\u0195\u008e\3\2\2\2\u0196\u0197\7\60"+
		"\2\2\u0197\u0198\7+\2\2\u0198\u0090\3\2\2\2\u0199\u019a\7\60\2\2\u019a"+
		"\u0092\3\2\2\2\u019b\u019c\7\60\2\2\u019c\u019d\7\60\2\2\u019d\u0094\3"+
		"\2\2\2\u019e\u019f\5!\21\2\u019f\u01a0\5#\22\2\u01a0\u01a1\5\37\20\2\u01a1"+
		"\u01a2\5\23\n\2\u01a2\u01a3\5\31\r\2\u01a3\u01a4\5\17\b\2\u01a4\u0096"+
		"\3\2\2\2\u01a5\u01a6\5#\22\2\u01a6\u01a7\5\37\20\2\u01a7\u01a8\5%\23\2"+
		"\u01a8\u01a9\5\13\6\2\u01a9\u0098\3\2\2\2\u01aa\u01ab\5\r\7\2\u01ab\u01ac"+
		"\5\3\2\2\u01ac\u01ad\5\25\13\2\u01ad\u01ae\5!\21\2\u01ae\u01af\5\13\6"+
		"\2\u01af\u009a\3\2\2\2\u01b0\u01b1\7\"\2\2\u01b1\u01b2\3\2\2\2\u01b2\u01b3"+
		"\bN\2\2\u01b3\u009c\3\2\2\2\u01b4\u01b5\7\13\2\2\u01b5\u01b6\3\2\2\2\u01b6"+
		"\u01b7\bO\2\2\u01b7\u009e\3\2\2\2\u01b8\u01ba\7\17\2\2\u01b9\u01b8\3\2"+
		"\2\2\u01b9\u01ba\3\2\2\2\u01ba\u01bb\3\2\2\2\u01bb\u01bc\7\f\2\2\u01bc"+
		"\u01bd\3\2\2\2\u01bd\u01be\bP\2\2\u01be\u00a0\3\2\2\2\u01bf\u01c0\7*\2"+
		"\2\u01c0\u01c1\7,\2\2\u01c1\u01c5\3\2\2\2\u01c2\u01c4\13\2\2\2\u01c3\u01c2"+
		"\3\2\2\2\u01c4\u01c7\3\2\2\2\u01c5\u01c6\3\2\2\2\u01c5\u01c3\3\2\2\2\u01c6"+
		"\u01c8\3\2\2\2\u01c7\u01c5\3\2\2\2\u01c8\u01c9\7,\2\2\u01c9\u01ca\7+\2"+
		"\2\u01ca\u01cb\3\2\2\2\u01cb\u01cc\bQ\2\2\u01cc\u00a2\3\2\2\2\u01cd\u01d1"+
		"\7}\2\2\u01ce\u01d0\13\2\2\2\u01cf\u01ce\3\2\2\2\u01d0\u01d3\3\2\2\2\u01d1"+
		"\u01d2\3\2\2\2\u01d1\u01cf\3\2\2\2\u01d2\u01d4\3\2\2\2\u01d3\u01d1\3\2"+
		"\2\2\u01d4\u01d5\7\177\2\2\u01d5\u01d6\3\2\2\2\u01d6\u01d7\bR\2\2\u01d7"+
		"\u00a4\3\2\2\2\u01d8\u01da\t\30\2\2\u01d9\u01d8\3\2\2\2\u01da\u01db\3"+
		"\2\2\2\u01db\u01d9\3\2\2\2\u01db\u01dc\3\2\2\2\u01dc\u00a6\3\2\2\2\u01dd"+
		"\u01e1\t\31\2\2\u01de\u01e0\t\32\2\2\u01df\u01de\3\2\2\2\u01e0\u01e3\3"+
		"\2\2\2\u01e1\u01df\3\2\2\2\u01e1\u01e2\3\2\2\2\u01e2\u00a8\3\2\2\2\u01e3"+
		"\u01e1\3\2\2\2\u01e4\u01ea\7)\2\2\u01e5\u01e6\7)\2\2\u01e6\u01e9\7)\2"+
		"\2\u01e7\u01e9\n\33\2\2\u01e8\u01e5\3\2\2\2\u01e8\u01e7\3\2\2\2\u01e9"+
		"\u01ec\3\2\2\2\u01ea\u01e8\3\2\2\2\u01ea\u01eb\3\2\2\2\u01eb\u01ed\3\2"+
		"\2\2\u01ec\u01ea\3\2\2\2\u01ed\u01ee\7)\2\2\u01ee\u00aa\3\2\2\2\n\2\u01b9"+
		"\u01c5\u01d1\u01db\u01e1\u01e8\u01ea\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}