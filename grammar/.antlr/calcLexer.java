// Generated from d:\Documents\4th year - 2nd Term\CMPILER\grammar\calc.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class calcLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NUMBER=1, ID=2, ADD=3, SUB=4, MULT=5, DIV=6, MOD=7, LP=8, RP=9, WHITESPACE=10, 
		TAB=11, NL=12, DOT=13, BEGIN=14, END=15, SEMI=16, ASS=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"NUMBER", "ID", "ADD", "SUB", "MULT", "DIV", "MOD", "LP", "RP", "WHITESPACE", 
		"TAB", "NL", "DOT", "BEGIN", "END", "SEMI", "ASS", "B", "E", "G", "I", 
		"N", "D"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, "'+'", "'-'", "'*'", "'/'", "'%'", "'('", "')'", "' '", 
		"'\t'", null, "'.'", null, null, "';'", "':='"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "NUMBER", "ID", "ADD", "SUB", "MULT", "DIV", "MOD", "LP", "RP", 
		"WHITESPACE", "TAB", "NL", "DOT", "BEGIN", "END", "SEMI", "ASS"
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


	public calcLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "calc.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\23u\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\3\2\6\2\63"+
		"\n\2\r\2\16\2\64\3\3\3\3\7\39\n\3\f\3\16\3<\13\3\3\4\3\4\3\5\3\5\3\6\3"+
		"\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f"+
		"\3\r\5\rU\n\r\3\r\3\r\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20"+
		"\3\20\3\20\3\21\3\21\3\22\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26"+
		"\3\26\3\27\3\27\3\30\3\30\2\2\31\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23"+
		"\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\2\'\2)\2+\2-\2/\2\3\2\13"+
		"\3\2\62;\5\2C\\aac|\6\2\62;C\\aac|\4\2DDdd\4\2GGgg\4\2IIii\4\2KKkk\4\2"+
		"PPpp\4\2FFff\2q\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3"+
		"\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2"+
		"\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3"+
		"\2\2\2\2#\3\2\2\2\3\62\3\2\2\2\5\66\3\2\2\2\7=\3\2\2\2\t?\3\2\2\2\13A"+
		"\3\2\2\2\rC\3\2\2\2\17E\3\2\2\2\21G\3\2\2\2\23I\3\2\2\2\25K\3\2\2\2\27"+
		"O\3\2\2\2\31T\3\2\2\2\33X\3\2\2\2\35Z\3\2\2\2\37`\3\2\2\2!d\3\2\2\2#f"+
		"\3\2\2\2%i\3\2\2\2\'k\3\2\2\2)m\3\2\2\2+o\3\2\2\2-q\3\2\2\2/s\3\2\2\2"+
		"\61\63\t\2\2\2\62\61\3\2\2\2\63\64\3\2\2\2\64\62\3\2\2\2\64\65\3\2\2\2"+
		"\65\4\3\2\2\2\66:\t\3\2\2\679\t\4\2\28\67\3\2\2\29<\3\2\2\2:8\3\2\2\2"+
		":;\3\2\2\2;\6\3\2\2\2<:\3\2\2\2=>\7-\2\2>\b\3\2\2\2?@\7/\2\2@\n\3\2\2"+
		"\2AB\7,\2\2B\f\3\2\2\2CD\7\61\2\2D\16\3\2\2\2EF\7\'\2\2F\20\3\2\2\2GH"+
		"\7*\2\2H\22\3\2\2\2IJ\7+\2\2J\24\3\2\2\2KL\7\"\2\2LM\3\2\2\2MN\b\13\2"+
		"\2N\26\3\2\2\2OP\7\13\2\2PQ\3\2\2\2QR\b\f\2\2R\30\3\2\2\2SU\7\17\2\2T"+
		"S\3\2\2\2TU\3\2\2\2UV\3\2\2\2VW\7\f\2\2W\32\3\2\2\2XY\7\60\2\2Y\34\3\2"+
		"\2\2Z[\5%\23\2[\\\5\'\24\2\\]\5)\25\2]^\5+\26\2^_\5-\27\2_\36\3\2\2\2"+
		"`a\5\'\24\2ab\5-\27\2bc\5/\30\2c \3\2\2\2de\7=\2\2e\"\3\2\2\2fg\7<\2\2"+
		"gh\7?\2\2h$\3\2\2\2ij\t\5\2\2j&\3\2\2\2kl\t\6\2\2l(\3\2\2\2mn\t\7\2\2"+
		"n*\3\2\2\2op\t\b\2\2p,\3\2\2\2qr\t\t\2\2r.\3\2\2\2st\t\n\2\2t\60\3\2\2"+
		"\2\6\2\64:T\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}