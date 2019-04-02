// Generated from calc.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class calcParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NUMBER=1, ID=2, ADD=3, SUB=4, MULT=5, DIV=6, MOD=7, LP=8, RP=9, WHITESPACE=10, 
		TAB=11, NL=12, DOT=13, BEGIN=14, END=15, SEMI=16, ASS=17;
	public static final int
		RULE_compound_statement = 0, RULE_statement_list = 1, RULE_statement = 2, 
		RULE_assign = 3, RULE_empty = 4, RULE_expr = 5, RULE_term = 6, RULE_factor = 7, 
		RULE_variable = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"compound_statement", "statement_list", "statement", "assign", "empty", 
			"expr", "term", "factor", "variable"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'+'", "'-'", "'*'", "'/'", "'%'", "'('", "')'", "' '", 
			"'\t'", null, "'.'", "'BEGIN'", null, "';'", "':='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NUMBER", "ID", "ADD", "SUB", "MULT", "DIV", "MOD", "LP", "RP", 
			"WHITESPACE", "TAB", "NL", "DOT", "BEGIN", "END", "SEMI", "ASS"
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

	@Override
	public String getGrammarFileName() { return "calc.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public calcParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class Compound_statementContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(calcParser.BEGIN, 0); }
		public TerminalNode NL() { return getToken(calcParser.NL, 0); }
		public Statement_listContext statement_list() {
			return getRuleContext(Statement_listContext.class,0);
		}
		public TerminalNode END() { return getToken(calcParser.END, 0); }
		public Compound_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compound_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).enterCompound_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).exitCompound_statement(this);
		}
	}

	public final Compound_statementContext compound_statement() throws RecognitionException {
		Compound_statementContext _localctx = new Compound_statementContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compound_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(18);
			match(BEGIN);
			setState(19);
			match(NL);
			setState(20);
			statement_list();
			setState(21);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Statement_listContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public List<TerminalNode> NL() { return getTokens(calcParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(calcParser.NL, i);
		}
		public TerminalNode SEMI() { return getToken(calcParser.SEMI, 0); }
		public Statement_listContext statement_list() {
			return getRuleContext(Statement_listContext.class,0);
		}
		public Statement_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement_list; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).enterStatement_list(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).exitStatement_list(this);
		}
	}

	public final Statement_listContext statement_list() throws RecognitionException {
		Statement_listContext _localctx = new Statement_listContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement_list);
		int _la;
		try {
			setState(35);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(23);
				statement();
				setState(27);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NL) {
					{
					{
					setState(24);
					match(NL);
					}
					}
					setState(29);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(30);
				statement();
				setState(31);
				match(SEMI);
				setState(32);
				match(NL);
				setState(33);
				statement_list();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public AssignContext assign() {
			return getRuleContext(AssignContext.class,0);
		}
		public EmptyContext empty() {
			return getRuleContext(EmptyContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(39);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(37);
				assign();
				}
				break;
			case NL:
			case END:
			case SEMI:
				enterOuterAlt(_localctx, 2);
				{
				setState(38);
				empty();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode ASS() { return getToken(calcParser.ASS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public AssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).enterAssign(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).exitAssign(this);
		}
	}

	public final AssignContext assign() throws RecognitionException {
		AssignContext _localctx = new AssignContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			variable();
			setState(42);
			match(ASS);
			setState(43);
			expr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmptyContext extends ParserRuleContext {
		public EmptyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_empty; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).enterEmpty(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).exitEmpty(this);
		}
	}

	public final EmptyContext empty() throws RecognitionException {
		EmptyContext _localctx = new EmptyContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_empty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public Token op;
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public List<TerminalNode> ADD() { return getTokens(calcParser.ADD); }
		public TerminalNode ADD(int i) {
			return getToken(calcParser.ADD, i);
		}
		public List<TerminalNode> SUB() { return getTokens(calcParser.SUB); }
		public TerminalNode SUB(int i) {
			return getToken(calcParser.SUB, i);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).enterExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).exitExpr(this);
		}
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(47);
			term();
			setState(52);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ADD || _la==SUB) {
				{
				{
				setState(48);
				((ExprContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==ADD || _la==SUB) ) {
					((ExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(49);
				term();
				}
				}
				setState(54);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TermContext extends ParserRuleContext {
		public Token op;
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public List<TerminalNode> MULT() { return getTokens(calcParser.MULT); }
		public TerminalNode MULT(int i) {
			return getToken(calcParser.MULT, i);
		}
		public List<TerminalNode> DIV() { return getTokens(calcParser.DIV); }
		public TerminalNode DIV(int i) {
			return getToken(calcParser.DIV, i);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).enterTerm(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).exitTerm(this);
		}
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			factor();
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MULT || _la==DIV) {
				{
				{
				setState(56);
				((TermContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==MULT || _la==DIV) ) {
					((TermContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(57);
				factor();
				}
				}
				setState(62);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FactorContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(calcParser.ADD, 0); }
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public TerminalNode SUB() { return getToken(calcParser.SUB, 0); }
		public TerminalNode NUMBER() { return getToken(calcParser.NUMBER, 0); }
		public TerminalNode LP() { return getToken(calcParser.LP, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RP() { return getToken(calcParser.RP, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).enterFactor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).exitFactor(this);
		}
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_factor);
		try {
			setState(73);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ADD:
				enterOuterAlt(_localctx, 1);
				{
				setState(63);
				match(ADD);
				setState(64);
				factor();
				}
				break;
			case SUB:
				enterOuterAlt(_localctx, 2);
				{
				setState(65);
				match(SUB);
				setState(66);
				factor();
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(67);
				match(NUMBER);
				}
				break;
			case LP:
				enterOuterAlt(_localctx, 4);
				{
				setState(68);
				match(LP);
				setState(69);
				expr();
				setState(70);
				match(RP);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 5);
				{
				setState(72);
				variable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(calcParser.ID, 0); }
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).enterVariable(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof calcListener ) ((calcListener)listener).exitVariable(this);
		}
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_variable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\23P\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\3\2\3\2\3\2"+
		"\3\2\3\2\3\3\3\3\7\3\34\n\3\f\3\16\3\37\13\3\3\3\3\3\3\3\3\3\3\3\5\3&"+
		"\n\3\3\4\3\4\5\4*\n\4\3\5\3\5\3\5\3\5\3\6\3\6\3\7\3\7\3\7\7\7\65\n\7\f"+
		"\7\16\78\13\7\3\b\3\b\3\b\7\b=\n\b\f\b\16\b@\13\b\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\5\tL\n\t\3\n\3\n\3\n\2\2\13\2\4\6\b\n\f\16\20\22"+
		"\2\4\3\2\5\6\3\2\7\b\2O\2\24\3\2\2\2\4%\3\2\2\2\6)\3\2\2\2\b+\3\2\2\2"+
		"\n/\3\2\2\2\f\61\3\2\2\2\169\3\2\2\2\20K\3\2\2\2\22M\3\2\2\2\24\25\7\20"+
		"\2\2\25\26\7\16\2\2\26\27\5\4\3\2\27\30\7\21\2\2\30\3\3\2\2\2\31\35\5"+
		"\6\4\2\32\34\7\16\2\2\33\32\3\2\2\2\34\37\3\2\2\2\35\33\3\2\2\2\35\36"+
		"\3\2\2\2\36&\3\2\2\2\37\35\3\2\2\2 !\5\6\4\2!\"\7\22\2\2\"#\7\16\2\2#"+
		"$\5\4\3\2$&\3\2\2\2%\31\3\2\2\2% \3\2\2\2&\5\3\2\2\2\'*\5\b\5\2(*\5\n"+
		"\6\2)\'\3\2\2\2)(\3\2\2\2*\7\3\2\2\2+,\5\22\n\2,-\7\23\2\2-.\5\f\7\2."+
		"\t\3\2\2\2/\60\3\2\2\2\60\13\3\2\2\2\61\66\5\16\b\2\62\63\t\2\2\2\63\65"+
		"\5\16\b\2\64\62\3\2\2\2\658\3\2\2\2\66\64\3\2\2\2\66\67\3\2\2\2\67\r\3"+
		"\2\2\28\66\3\2\2\29>\5\20\t\2:;\t\3\2\2;=\5\20\t\2<:\3\2\2\2=@\3\2\2\2"+
		"><\3\2\2\2>?\3\2\2\2?\17\3\2\2\2@>\3\2\2\2AB\7\5\2\2BL\5\20\t\2CD\7\6"+
		"\2\2DL\5\20\t\2EL\7\3\2\2FG\7\n\2\2GH\5\f\7\2HI\7\13\2\2IL\3\2\2\2JL\5"+
		"\22\n\2KA\3\2\2\2KC\3\2\2\2KE\3\2\2\2KF\3\2\2\2KJ\3\2\2\2L\21\3\2\2\2"+
		"MN\7\4\2\2N\23\3\2\2\2\b\35%)\66>K";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}