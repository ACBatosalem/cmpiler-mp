// Generated from d:\Documents\4th year - 2nd Term\CMPILER\cmpiler-mp\grammar\pascal.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class pascalParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		AND=1, ARRAY=2, BEGIN=3, BOOLEAN=4, CASE=5, CHAR=6, CONST=7, DIV=8, DO=9, 
		DOWNTO=10, ELSE=11, END=12, FOR=13, FUNCTION=14, IF=15, IN=16, INTEGER=17, 
		LABEL=18, MOD=19, NOT=20, OF=21, OR=22, PROCEDURE=23, PROGRAM=24, READLN=25, 
		REPEAT=26, SET=27, THEN=28, TO=29, TYPE=30, UNTIL=31, VAR=32, WHILE=33, 
		WRITE=34, WRITELN=35, ADD=36, SUB=37, MULT=38, SEMI=39, ASSIGN=40, COMMA=41, 
		COLON=42, EQUAL=43, NOT_EQUAL=44, LT=45, LE=46, GE=47, GT=48, LP=49, RP=50, 
		AT=51, LBRACK=52, LBRACK2=53, RBRACK=54, RBRACK2=55, DOT=56, DOTDOT=57, 
		STRING=58, TRUE=59, FALSE=60, COMMENT_1=61, COMMENT_2=62, COMMENT_3=63, 
		WHITESPACE=64, TAB=65, NL=66, NUMBER=67, ID=68, CHAR_LITERAL=69, STRING_LITERAL=70;
	public static final int
		RULE_program = 0, RULE_identifier = 1, RULE_block = 2, RULE_declarations = 3, 
		RULE_constantDefinitionPart = 4, RULE_constantDefinition = 5, RULE_constantValues = 6, 
		RULE_constant = 7, RULE_unsignedNumber = 8, RULE_sign = 9, RULE_bool = 10, 
		RULE_string = 11, RULE_character = 12, RULE_type = 13, RULE_simpleType = 14, 
		RULE_scalarType = 15, RULE_subrangeType = 16, RULE_typeIdentifier = 17, 
		RULE_structuredType = 18, RULE_stringtype = 19, RULE_arrayType = 20, RULE_typeList = 21, 
		RULE_indexType = 22, RULE_componentType = 23, RULE_variableDeclarationPart = 24, 
		RULE_variableDeclaration = 25, RULE_procedureAndFunctionDeclarationPart = 26, 
		RULE_procedureOrFunctionDeclaration = 27, RULE_procedureDeclaration = 28, 
		RULE_formalParameterList = 29, RULE_formalParameterSection = 30, RULE_parameterGroup = 31, 
		RULE_identifierList = 32, RULE_functionDeclaration = 33, RULE_resultType = 34, 
		RULE_statement = 35, RULE_simpleStatement = 36, RULE_ioStatement = 37, 
		RULE_readln = 38, RULE_writeln = 39, RULE_write = 40, RULE_outputList = 41, 
		RULE_assignmentStatement = 42, RULE_variable = 43, RULE_expression = 44, 
		RULE_relationaloperator = 45, RULE_simpleExpression = 46, RULE_additiveoperator = 47, 
		RULE_term = 48, RULE_multiplicativeoperator = 49, RULE_signedFactor = 50, 
		RULE_factor = 51, RULE_unsignedConstant = 52, RULE_functionDesignator = 53, 
		RULE_parameterList = 54, RULE_procedureStatement = 55, RULE_actualParameter = 56, 
		RULE_parameterwidth = 57, RULE_emptyStatement = 58, RULE_structuredStatement = 59, 
		RULE_compoundStatement = 60, RULE_statements = 61, RULE_conditionalStatement = 62, 
		RULE_ifStatement = 63, RULE_repetetiveStatement = 64, RULE_whileStatement = 65, 
		RULE_repeatStatement = 66, RULE_forStatement = 67, RULE_forList = 68, 
		RULE_initialValue = 69, RULE_finalValue = 70;
	public static final String[] ruleNames = {
		"program", "identifier", "block", "declarations", "constantDefinitionPart", 
		"constantDefinition", "constantValues", "constant", "unsignedNumber", 
		"sign", "bool", "string", "character", "type", "simpleType", "scalarType", 
		"subrangeType", "typeIdentifier", "structuredType", "stringtype", "arrayType", 
		"typeList", "indexType", "componentType", "variableDeclarationPart", "variableDeclaration", 
		"procedureAndFunctionDeclarationPart", "procedureOrFunctionDeclaration", 
		"procedureDeclaration", "formalParameterList", "formalParameterSection", 
		"parameterGroup", "identifierList", "functionDeclaration", "resultType", 
		"statement", "simpleStatement", "ioStatement", "readln", "writeln", "write", 
		"outputList", "assignmentStatement", "variable", "expression", "relationaloperator", 
		"simpleExpression", "additiveoperator", "term", "multiplicativeoperator", 
		"signedFactor", "factor", "unsignedConstant", "functionDesignator", "parameterList", 
		"procedureStatement", "actualParameter", "parameterwidth", "emptyStatement", 
		"structuredStatement", "compoundStatement", "statements", "conditionalStatement", 
		"ifStatement", "repetetiveStatement", "whileStatement", "repeatStatement", 
		"forStatement", "forList", "initialValue", "finalValue"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		"'+'", "'-'", "'*'", "';'", "':='", "','", "':'", "'='", "'<>'", "'<'", 
		"'<='", "'>='", "'>'", "'('", "')'", "'@'", "'['", "'(.'", "']'", "'.)'", 
		"'.'", "'..'", null, null, null, null, null, null, "' '", "'\t'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "AND", "ARRAY", "BEGIN", "BOOLEAN", "CASE", "CHAR", "CONST", "DIV", 
		"DO", "DOWNTO", "ELSE", "END", "FOR", "FUNCTION", "IF", "IN", "INTEGER", 
		"LABEL", "MOD", "NOT", "OF", "OR", "PROCEDURE", "PROGRAM", "READLN", "REPEAT", 
		"SET", "THEN", "TO", "TYPE", "UNTIL", "VAR", "WHILE", "WRITE", "WRITELN", 
		"ADD", "SUB", "MULT", "SEMI", "ASSIGN", "COMMA", "COLON", "EQUAL", "NOT_EQUAL", 
		"LT", "LE", "GE", "GT", "LP", "RP", "AT", "LBRACK", "LBRACK2", "RBRACK", 
		"RBRACK2", "DOT", "DOTDOT", "STRING", "TRUE", "FALSE", "COMMENT_1", "COMMENT_2", 
		"COMMENT_3", "WHITESPACE", "TAB", "NL", "NUMBER", "ID", "CHAR_LITERAL", 
		"STRING_LITERAL"
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

	@Override
	public String getGrammarFileName() { return "pascal.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public pascalParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode PROGRAM() { return getToken(pascalParser.PROGRAM, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pascalParser.SEMI, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode DOT() { return getToken(pascalParser.DOT, 0); }
		public TerminalNode LP() { return getToken(pascalParser.LP, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode RP() { return getToken(pascalParser.RP, 0); }
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			match(PROGRAM);
			setState(143);
			identifier();
			setState(148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LP) {
				{
				setState(144);
				match(LP);
				setState(145);
				identifierList();
				setState(146);
				match(RP);
				}
			}

			setState(150);
			match(SEMI);
			setState(151);
			block();
			setState(152);
			match(DOT);
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

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(pascalParser.ID, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
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

	public static class BlockContext extends ParserRuleContext {
		public DeclarationsContext declarations() {
			return getRuleContext(DeclarationsContext.class,0);
		}
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			declarations();
			setState(157);
			compoundStatement();
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

	public static class DeclarationsContext extends ParserRuleContext {
		public List<ConstantDefinitionPartContext> constantDefinitionPart() {
			return getRuleContexts(ConstantDefinitionPartContext.class);
		}
		public ConstantDefinitionPartContext constantDefinitionPart(int i) {
			return getRuleContext(ConstantDefinitionPartContext.class,i);
		}
		public List<VariableDeclarationPartContext> variableDeclarationPart() {
			return getRuleContexts(VariableDeclarationPartContext.class);
		}
		public VariableDeclarationPartContext variableDeclarationPart(int i) {
			return getRuleContext(VariableDeclarationPartContext.class,i);
		}
		public List<ProcedureAndFunctionDeclarationPartContext> procedureAndFunctionDeclarationPart() {
			return getRuleContexts(ProcedureAndFunctionDeclarationPartContext.class);
		}
		public ProcedureAndFunctionDeclarationPartContext procedureAndFunctionDeclarationPart(int i) {
			return getRuleContext(ProcedureAndFunctionDeclarationPartContext.class,i);
		}
		public DeclarationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarations; }
	}

	public final DeclarationsContext declarations() throws RecognitionException {
		DeclarationsContext _localctx = new DeclarationsContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_declarations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONST) | (1L << FUNCTION) | (1L << PROCEDURE) | (1L << VAR))) != 0)) {
				{
				setState(162);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case CONST:
					{
					setState(159);
					constantDefinitionPart();
					}
					break;
				case VAR:
					{
					setState(160);
					variableDeclarationPart();
					}
					break;
				case FUNCTION:
				case PROCEDURE:
					{
					setState(161);
					procedureAndFunctionDeclarationPart();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(166);
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

	public static class ConstantDefinitionPartContext extends ParserRuleContext {
		public TerminalNode CONST() { return getToken(pascalParser.CONST, 0); }
		public List<ConstantDefinitionContext> constantDefinition() {
			return getRuleContexts(ConstantDefinitionContext.class);
		}
		public ConstantDefinitionContext constantDefinition(int i) {
			return getRuleContext(ConstantDefinitionContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public ConstantDefinitionPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantDefinitionPart; }
	}

	public final ConstantDefinitionPartContext constantDefinitionPart() throws RecognitionException {
		ConstantDefinitionPartContext _localctx = new ConstantDefinitionPartContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_constantDefinitionPart);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(CONST);
			setState(171); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(168);
				constantDefinition();
				setState(169);
				match(SEMI);
				}
				}
				setState(173); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ID );
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

	public static class ConstantDefinitionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode EQUAL() { return getToken(pascalParser.EQUAL, 0); }
		public ConstantValuesContext constantValues() {
			return getRuleContext(ConstantValuesContext.class,0);
		}
		public ConstantDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantDefinition; }
	}

	public final ConstantDefinitionContext constantDefinition() throws RecognitionException {
		ConstantDefinitionContext _localctx = new ConstantDefinitionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_constantDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(175);
			identifier();
			setState(176);
			match(EQUAL);
			setState(177);
			constantValues();
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

	public static class ConstantValuesContext extends ParserRuleContext {
		public UnsignedNumberContext unsignedNumber() {
			return getRuleContext(UnsignedNumberContext.class,0);
		}
		public SignContext sign() {
			return getRuleContext(SignContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public CharacterContext character() {
			return getRuleContext(CharacterContext.class,0);
		}
		public BoolContext bool() {
			return getRuleContext(BoolContext.class,0);
		}
		public ConstantValuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantValues; }
	}

	public final ConstantValuesContext constantValues() throws RecognitionException {
		ConstantValuesContext _localctx = new ConstantValuesContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_constantValues);
		try {
			setState(186);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(179);
				unsignedNumber();
				}
				break;
			case ADD:
			case SUB:
				enterOuterAlt(_localctx, 2);
				{
				setState(180);
				sign();
				setState(181);
				unsignedNumber();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(183);
				string();
				}
				break;
			case CHAR_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(184);
				character();
				}
				break;
			case TRUE:
			case FALSE:
				enterOuterAlt(_localctx, 5);
				{
				setState(185);
				bool();
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

	public static class ConstantContext extends ParserRuleContext {
		public UnsignedNumberContext unsignedNumber() {
			return getRuleContext(UnsignedNumberContext.class,0);
		}
		public SignContext sign() {
			return getRuleContext(SignContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public CharacterContext character() {
			return getRuleContext(CharacterContext.class,0);
		}
		public FunctionDesignatorContext functionDesignator() {
			return getRuleContext(FunctionDesignatorContext.class,0);
		}
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public BoolContext bool() {
			return getRuleContext(BoolContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constant; }
	}

	public final ConstantContext constant() throws RecognitionException {
		ConstantContext _localctx = new ConstantContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_constant);
		try {
			setState(201);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(188);
				unsignedNumber();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(189);
				sign();
				setState(190);
				unsignedNumber();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(192);
				string();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(193);
				character();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(194);
				functionDesignator();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(195);
				variable();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(196);
				sign();
				setState(197);
				variable();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(199);
				bool();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(200);
				expression();
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

	public static class UnsignedNumberContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(pascalParser.NUMBER, 0); }
		public UnsignedNumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unsignedNumber; }
	}

	public final UnsignedNumberContext unsignedNumber() throws RecognitionException {
		UnsignedNumberContext _localctx = new UnsignedNumberContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_unsignedNumber);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			match(NUMBER);
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

	public static class SignContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(pascalParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(pascalParser.SUB, 0); }
		public SignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sign; }
	}

	public final SignContext sign() throws RecognitionException {
		SignContext _localctx = new SignContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_sign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			_la = _input.LA(1);
			if ( !(_la==ADD || _la==SUB) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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

	public static class BoolContext extends ParserRuleContext {
		public TerminalNode TRUE() { return getToken(pascalParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(pascalParser.FALSE, 0); }
		public BoolContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool; }
	}

	public final BoolContext bool() throws RecognitionException {
		BoolContext _localctx = new BoolContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_bool);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			_la = _input.LA(1);
			if ( !(_la==TRUE || _la==FALSE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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

	public static class StringContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(pascalParser.STRING_LITERAL, 0); }
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(STRING_LITERAL);
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

	public static class CharacterContext extends ParserRuleContext {
		public TerminalNode CHAR_LITERAL() { return getToken(pascalParser.CHAR_LITERAL, 0); }
		public CharacterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_character; }
	}

	public final CharacterContext character() throws RecognitionException {
		CharacterContext _localctx = new CharacterContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_character);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			match(CHAR_LITERAL);
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

	public static class TypeContext extends ParserRuleContext {
		public SimpleTypeContext simpleType() {
			return getRuleContext(SimpleTypeContext.class,0);
		}
		public StructuredTypeContext structuredType() {
			return getRuleContext(StructuredTypeContext.class,0);
		}
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_type);
		try {
			setState(215);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOLEAN:
			case CHAR:
			case INTEGER:
			case NOT:
			case ADD:
			case SUB:
			case LP:
			case AT:
			case STRING:
			case TRUE:
			case FALSE:
			case NUMBER:
			case ID:
			case CHAR_LITERAL:
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(213);
				simpleType();
				}
				break;
			case ARRAY:
				enterOuterAlt(_localctx, 2);
				{
				setState(214);
				structuredType();
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

	public static class SimpleTypeContext extends ParserRuleContext {
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public SubrangeTypeContext subrangeType() {
			return getRuleContext(SubrangeTypeContext.class,0);
		}
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public StringtypeContext stringtype() {
			return getRuleContext(StringtypeContext.class,0);
		}
		public SimpleTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleType; }
	}

	public final SimpleTypeContext simpleType() throws RecognitionException {
		SimpleTypeContext _localctx = new SimpleTypeContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_simpleType);
		try {
			setState(221);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(217);
				scalarType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(218);
				subrangeType();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(219);
				typeIdentifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(220);
				stringtype();
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

	public static class ScalarTypeContext extends ParserRuleContext {
		public TerminalNode LP() { return getToken(pascalParser.LP, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode RP() { return getToken(pascalParser.RP, 0); }
		public ScalarTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scalarType; }
	}

	public final ScalarTypeContext scalarType() throws RecognitionException {
		ScalarTypeContext _localctx = new ScalarTypeContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_scalarType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(LP);
			setState(224);
			identifierList();
			setState(225);
			match(RP);
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

	public static class SubrangeTypeContext extends ParserRuleContext {
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public TerminalNode DOTDOT() { return getToken(pascalParser.DOTDOT, 0); }
		public SubrangeTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subrangeType; }
	}

	public final SubrangeTypeContext subrangeType() throws RecognitionException {
		SubrangeTypeContext _localctx = new SubrangeTypeContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_subrangeType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			constant();
			setState(228);
			match(DOTDOT);
			setState(229);
			constant();
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

	public static class TypeIdentifierContext extends ParserRuleContext {
		public TerminalNode CHAR() { return getToken(pascalParser.CHAR, 0); }
		public TerminalNode BOOLEAN() { return getToken(pascalParser.BOOLEAN, 0); }
		public TerminalNode INTEGER() { return getToken(pascalParser.INTEGER, 0); }
		public TerminalNode STRING() { return getToken(pascalParser.STRING, 0); }
		public TypeIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeIdentifier; }
	}

	public final TypeIdentifierContext typeIdentifier() throws RecognitionException {
		TypeIdentifierContext _localctx = new TypeIdentifierContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_typeIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(231);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << CHAR) | (1L << INTEGER) | (1L << STRING))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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

	public static class StructuredTypeContext extends ParserRuleContext {
		public ArrayTypeContext arrayType() {
			return getRuleContext(ArrayTypeContext.class,0);
		}
		public StructuredTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structuredType; }
	}

	public final StructuredTypeContext structuredType() throws RecognitionException {
		StructuredTypeContext _localctx = new StructuredTypeContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_structuredType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			arrayType();
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

	public static class StringtypeContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(pascalParser.STRING, 0); }
		public TerminalNode LBRACK() { return getToken(pascalParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(pascalParser.RBRACK, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public UnsignedNumberContext unsignedNumber() {
			return getRuleContext(UnsignedNumberContext.class,0);
		}
		public StringtypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringtype; }
	}

	public final StringtypeContext stringtype() throws RecognitionException {
		StringtypeContext _localctx = new StringtypeContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_stringtype);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			match(STRING);
			setState(236);
			match(LBRACK);
			setState(239);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(237);
				identifier();
				}
				break;
			case NUMBER:
				{
				setState(238);
				unsignedNumber();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(241);
			match(RBRACK);
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

	public static class ArrayTypeContext extends ParserRuleContext {
		public TerminalNode ARRAY() { return getToken(pascalParser.ARRAY, 0); }
		public TerminalNode LBRACK() { return getToken(pascalParser.LBRACK, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(pascalParser.RBRACK, 0); }
		public TerminalNode OF() { return getToken(pascalParser.OF, 0); }
		public ComponentTypeContext componentType() {
			return getRuleContext(ComponentTypeContext.class,0);
		}
		public TerminalNode LBRACK2() { return getToken(pascalParser.LBRACK2, 0); }
		public TerminalNode RBRACK2() { return getToken(pascalParser.RBRACK2, 0); }
		public ArrayTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayType; }
	}

	public final ArrayTypeContext arrayType() throws RecognitionException {
		ArrayTypeContext _localctx = new ArrayTypeContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_arrayType);
		try {
			setState(257);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(243);
				match(ARRAY);
				setState(244);
				match(LBRACK);
				setState(245);
				typeList();
				setState(246);
				match(RBRACK);
				setState(247);
				match(OF);
				setState(248);
				componentType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(250);
				match(ARRAY);
				setState(251);
				match(LBRACK2);
				setState(252);
				typeList();
				setState(253);
				match(RBRACK2);
				setState(254);
				match(OF);
				setState(255);
				componentType();
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

	public static class TypeListContext extends ParserRuleContext {
		public List<IndexTypeContext> indexType() {
			return getRuleContexts(IndexTypeContext.class);
		}
		public IndexTypeContext indexType(int i) {
			return getRuleContext(IndexTypeContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public TypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeList; }
	}

	public final TypeListContext typeList() throws RecognitionException {
		TypeListContext _localctx = new TypeListContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_typeList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			indexType();
			setState(264);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(260);
				match(COMMA);
				setState(261);
				indexType();
				}
				}
				setState(266);
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

	public static class IndexTypeContext extends ParserRuleContext {
		public SimpleTypeContext simpleType() {
			return getRuleContext(SimpleTypeContext.class,0);
		}
		public IndexTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexType; }
	}

	public final IndexTypeContext indexType() throws RecognitionException {
		IndexTypeContext _localctx = new IndexTypeContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_indexType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			simpleType();
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

	public static class ComponentTypeContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public ComponentTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentType; }
	}

	public final ComponentTypeContext componentType() throws RecognitionException {
		ComponentTypeContext _localctx = new ComponentTypeContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_componentType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
			type();
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

	public static class VariableDeclarationPartContext extends ParserRuleContext {
		public TerminalNode VAR() { return getToken(pascalParser.VAR, 0); }
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public VariableDeclarationPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarationPart; }
	}

	public final VariableDeclarationPartContext variableDeclarationPart() throws RecognitionException {
		VariableDeclarationPartContext _localctx = new VariableDeclarationPartContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_variableDeclarationPart);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			match(VAR);
			setState(272);
			variableDeclaration();
			setState(277);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(273);
					match(SEMI);
					setState(274);
					variableDeclaration();
					}
					} 
				}
				setState(279);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			setState(280);
			match(SEMI);
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

	public static class VariableDeclarationContext extends ParserRuleContext {
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			identifierList();
			setState(283);
			match(COLON);
			setState(284);
			type();
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

	public static class ProcedureAndFunctionDeclarationPartContext extends ParserRuleContext {
		public ProcedureOrFunctionDeclarationContext procedureOrFunctionDeclaration() {
			return getRuleContext(ProcedureOrFunctionDeclarationContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pascalParser.SEMI, 0); }
		public ProcedureAndFunctionDeclarationPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedureAndFunctionDeclarationPart; }
	}

	public final ProcedureAndFunctionDeclarationPartContext procedureAndFunctionDeclarationPart() throws RecognitionException {
		ProcedureAndFunctionDeclarationPartContext _localctx = new ProcedureAndFunctionDeclarationPartContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_procedureAndFunctionDeclarationPart);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			procedureOrFunctionDeclaration();
			setState(287);
			match(SEMI);
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

	public static class ProcedureOrFunctionDeclarationContext extends ParserRuleContext {
		public ProcedureDeclarationContext procedureDeclaration() {
			return getRuleContext(ProcedureDeclarationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ProcedureOrFunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedureOrFunctionDeclaration; }
	}

	public final ProcedureOrFunctionDeclarationContext procedureOrFunctionDeclaration() throws RecognitionException {
		ProcedureOrFunctionDeclarationContext _localctx = new ProcedureOrFunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_procedureOrFunctionDeclaration);
		try {
			setState(291);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PROCEDURE:
				enterOuterAlt(_localctx, 1);
				{
				setState(289);
				procedureDeclaration();
				}
				break;
			case FUNCTION:
				enterOuterAlt(_localctx, 2);
				{
				setState(290);
				functionDeclaration();
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

	public static class ProcedureDeclarationContext extends ParserRuleContext {
		public TerminalNode PROCEDURE() { return getToken(pascalParser.PROCEDURE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pascalParser.SEMI, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public ProcedureDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedureDeclaration; }
	}

	public final ProcedureDeclarationContext procedureDeclaration() throws RecognitionException {
		ProcedureDeclarationContext _localctx = new ProcedureDeclarationContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_procedureDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
			match(PROCEDURE);
			setState(294);
			identifier();
			setState(296);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LP) {
				{
				setState(295);
				formalParameterList();
				}
			}

			setState(298);
			match(SEMI);
			setState(299);
			block();
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

	public static class FormalParameterListContext extends ParserRuleContext {
		public TerminalNode LP() { return getToken(pascalParser.LP, 0); }
		public TerminalNode RP() { return getToken(pascalParser.RP, 0); }
		public List<FormalParameterSectionContext> formalParameterSection() {
			return getRuleContexts(FormalParameterSectionContext.class);
		}
		public FormalParameterSectionContext formalParameterSection(int i) {
			return getRuleContext(FormalParameterSectionContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public FormalParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterList; }
	}

	public final FormalParameterListContext formalParameterList() throws RecognitionException {
		FormalParameterListContext _localctx = new FormalParameterListContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_formalParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(301);
			match(LP);
			setState(305);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & ((1L << (FUNCTION - 14)) | (1L << (PROCEDURE - 14)) | (1L << (VAR - 14)) | (1L << (ID - 14)))) != 0)) {
				{
				{
				setState(302);
				formalParameterSection();
				}
				}
				setState(307);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(312);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SEMI) {
				{
				{
				setState(308);
				match(SEMI);
				setState(309);
				formalParameterSection();
				}
				}
				setState(314);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(315);
			match(RP);
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

	public static class FormalParameterSectionContext extends ParserRuleContext {
		public ParameterGroupContext parameterGroup() {
			return getRuleContext(ParameterGroupContext.class,0);
		}
		public TerminalNode VAR() { return getToken(pascalParser.VAR, 0); }
		public TerminalNode FUNCTION() { return getToken(pascalParser.FUNCTION, 0); }
		public TerminalNode PROCEDURE() { return getToken(pascalParser.PROCEDURE, 0); }
		public FormalParameterSectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterSection; }
	}

	public final FormalParameterSectionContext formalParameterSection() throws RecognitionException {
		FormalParameterSectionContext _localctx = new FormalParameterSectionContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_formalParameterSection);
		try {
			setState(324);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(317);
				parameterGroup();
				}
				break;
			case VAR:
				enterOuterAlt(_localctx, 2);
				{
				setState(318);
				match(VAR);
				setState(319);
				parameterGroup();
				}
				break;
			case FUNCTION:
				enterOuterAlt(_localctx, 3);
				{
				setState(320);
				match(FUNCTION);
				setState(321);
				parameterGroup();
				}
				break;
			case PROCEDURE:
				enterOuterAlt(_localctx, 4);
				{
				setState(322);
				match(PROCEDURE);
				setState(323);
				parameterGroup();
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

	public static class ParameterGroupContext extends ParserRuleContext {
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public ParameterGroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterGroup; }
	}

	public final ParameterGroupContext parameterGroup() throws RecognitionException {
		ParameterGroupContext _localctx = new ParameterGroupContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_parameterGroup);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(326);
			identifierList();
			setState(327);
			match(COLON);
			setState(328);
			typeIdentifier();
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

	public static class IdentifierListContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public IdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierList; }
	}

	public final IdentifierListContext identifierList() throws RecognitionException {
		IdentifierListContext _localctx = new IdentifierListContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_identifierList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(330);
			identifier();
			setState(335);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(331);
				match(COMMA);
				setState(332);
				identifier();
				}
				}
				setState(337);
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

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode FUNCTION() { return getToken(pascalParser.FUNCTION, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public ResultTypeContext resultType() {
			return getRuleContext(ResultTypeContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pascalParser.SEMI, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			match(FUNCTION);
			setState(339);
			identifier();
			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LP) {
				{
				setState(340);
				formalParameterList();
				}
			}

			setState(343);
			match(COLON);
			setState(344);
			resultType();
			setState(345);
			match(SEMI);
			setState(346);
			block();
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

	public static class ResultTypeContext extends ParserRuleContext {
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public ResultTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resultType; }
	}

	public final ResultTypeContext resultType() throws RecognitionException {
		ResultTypeContext _localctx = new ResultTypeContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_resultType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(348);
			typeIdentifier();
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
		public SimpleStatementContext simpleStatement() {
			return getRuleContext(SimpleStatementContext.class,0);
		}
		public StructuredStatementContext structuredStatement() {
			return getRuleContext(StructuredStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_statement);
		try {
			setState(352);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ELSE:
			case END:
			case READLN:
			case UNTIL:
			case WRITE:
			case WRITELN:
			case SEMI:
			case AT:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(350);
				simpleStatement();
				}
				break;
			case BEGIN:
			case FOR:
			case IF:
			case REPEAT:
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(351);
				structuredStatement();
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

	public static class SimpleStatementContext extends ParserRuleContext {
		public AssignmentStatementContext assignmentStatement() {
			return getRuleContext(AssignmentStatementContext.class,0);
		}
		public IoStatementContext ioStatement() {
			return getRuleContext(IoStatementContext.class,0);
		}
		public ProcedureStatementContext procedureStatement() {
			return getRuleContext(ProcedureStatementContext.class,0);
		}
		public FunctionDesignatorContext functionDesignator() {
			return getRuleContext(FunctionDesignatorContext.class,0);
		}
		public EmptyStatementContext emptyStatement() {
			return getRuleContext(EmptyStatementContext.class,0);
		}
		public SimpleStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleStatement; }
	}

	public final SimpleStatementContext simpleStatement() throws RecognitionException {
		SimpleStatementContext _localctx = new SimpleStatementContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_simpleStatement);
		try {
			setState(359);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(354);
				assignmentStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(355);
				ioStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(356);
				procedureStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(357);
				functionDesignator();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(358);
				emptyStatement();
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

	public static class IoStatementContext extends ParserRuleContext {
		public ReadlnContext readln() {
			return getRuleContext(ReadlnContext.class,0);
		}
		public WriteContext write() {
			return getRuleContext(WriteContext.class,0);
		}
		public WritelnContext writeln() {
			return getRuleContext(WritelnContext.class,0);
		}
		public IoStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ioStatement; }
	}

	public final IoStatementContext ioStatement() throws RecognitionException {
		IoStatementContext _localctx = new IoStatementContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_ioStatement);
		try {
			setState(364);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case READLN:
				enterOuterAlt(_localctx, 1);
				{
				setState(361);
				readln();
				}
				break;
			case WRITE:
				enterOuterAlt(_localctx, 2);
				{
				setState(362);
				write();
				}
				break;
			case WRITELN:
				enterOuterAlt(_localctx, 3);
				{
				setState(363);
				writeln();
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

	public static class ReadlnContext extends ParserRuleContext {
		public TerminalNode READLN() { return getToken(pascalParser.READLN, 0); }
		public TerminalNode LP() { return getToken(pascalParser.LP, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode RP() { return getToken(pascalParser.RP, 0); }
		public ReadlnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_readln; }
	}

	public final ReadlnContext readln() throws RecognitionException {
		ReadlnContext _localctx = new ReadlnContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_readln);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(366);
			match(READLN);
			setState(367);
			match(LP);
			setState(368);
			identifierList();
			setState(369);
			match(RP);
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

	public static class WritelnContext extends ParserRuleContext {
		public TerminalNode WRITELN() { return getToken(pascalParser.WRITELN, 0); }
		public List<TerminalNode> LP() { return getTokens(pascalParser.LP); }
		public TerminalNode LP(int i) {
			return getToken(pascalParser.LP, i);
		}
		public List<TerminalNode> RP() { return getTokens(pascalParser.RP); }
		public TerminalNode RP(int i) {
			return getToken(pascalParser.RP, i);
		}
		public List<OutputListContext> outputList() {
			return getRuleContexts(OutputListContext.class);
		}
		public OutputListContext outputList(int i) {
			return getRuleContext(OutputListContext.class,i);
		}
		public WritelnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_writeln; }
	}

	public final WritelnContext writeln() throws RecognitionException {
		WritelnContext _localctx = new WritelnContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_writeln);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(371);
			match(WRITELN);
			setState(382);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LP) {
				{
				{
				setState(372);
				match(LP);
				setState(376);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (((((_la - 20)) & ~0x3f) == 0 && ((1L << (_la - 20)) & ((1L << (NOT - 20)) | (1L << (ADD - 20)) | (1L << (SUB - 20)) | (1L << (LP - 20)) | (1L << (AT - 20)) | (1L << (TRUE - 20)) | (1L << (FALSE - 20)) | (1L << (NUMBER - 20)) | (1L << (ID - 20)) | (1L << (CHAR_LITERAL - 20)) | (1L << (STRING_LITERAL - 20)))) != 0)) {
					{
					{
					setState(373);
					outputList();
					}
					}
					setState(378);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(379);
				match(RP);
				}
				}
				setState(384);
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

	public static class WriteContext extends ParserRuleContext {
		public TerminalNode WRITE() { return getToken(pascalParser.WRITE, 0); }
		public TerminalNode LP() { return getToken(pascalParser.LP, 0); }
		public OutputListContext outputList() {
			return getRuleContext(OutputListContext.class,0);
		}
		public TerminalNode RP() { return getToken(pascalParser.RP, 0); }
		public WriteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_write; }
	}

	public final WriteContext write() throws RecognitionException {
		WriteContext _localctx = new WriteContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_write);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(385);
			match(WRITE);
			setState(386);
			match(LP);
			setState(387);
			outputList();
			setState(388);
			match(RP);
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

	public static class OutputListContext extends ParserRuleContext {
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public OutputListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputList; }
	}

	public final OutputListContext outputList() throws RecognitionException {
		OutputListContext _localctx = new OutputListContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_outputList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(390);
			constant();
			setState(395);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(391);
				match(COMMA);
				setState(392);
				constant();
				}
				}
				setState(397);
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

	public static class AssignmentStatementContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(pascalParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentStatement; }
	}

	public final AssignmentStatementContext assignmentStatement() throws RecognitionException {
		AssignmentStatementContext _localctx = new AssignmentStatementContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_assignmentStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
			variable();
			setState(399);
			match(ASSIGN);
			setState(400);
			expression();
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
		public TerminalNode AT() { return getToken(pascalParser.AT, 0); }
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<TerminalNode> LBRACK() { return getTokens(pascalParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(pascalParser.LBRACK, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> RBRACK() { return getTokens(pascalParser.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(pascalParser.RBRACK, i);
		}
		public List<TerminalNode> LBRACK2() { return getTokens(pascalParser.LBRACK2); }
		public TerminalNode LBRACK2(int i) {
			return getToken(pascalParser.LBRACK2, i);
		}
		public List<TerminalNode> RBRACK2() { return getTokens(pascalParser.RBRACK2); }
		public TerminalNode RBRACK2(int i) {
			return getToken(pascalParser.RBRACK2, i);
		}
		public List<TerminalNode> DOT() { return getTokens(pascalParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(pascalParser.DOT, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_variable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(405);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AT:
				{
				setState(402);
				match(AT);
				setState(403);
				identifier();
				}
				break;
			case ID:
				{
				setState(404);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(433);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LBRACK) | (1L << LBRACK2) | (1L << DOT))) != 0)) {
				{
				setState(431);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LBRACK:
					{
					setState(407);
					match(LBRACK);
					setState(408);
					expression();
					setState(413);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(409);
						match(COMMA);
						setState(410);
						expression();
						}
						}
						setState(415);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(416);
					match(RBRACK);
					}
					break;
				case LBRACK2:
					{
					setState(418);
					match(LBRACK2);
					setState(419);
					expression();
					setState(424);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(420);
						match(COMMA);
						setState(421);
						expression();
						}
						}
						setState(426);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(427);
					match(RBRACK2);
					}
					break;
				case DOT:
					{
					setState(429);
					match(DOT);
					setState(430);
					identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(435);
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

	public static class ExpressionContext extends ParserRuleContext {
		public List<SimpleExpressionContext> simpleExpression() {
			return getRuleContexts(SimpleExpressionContext.class);
		}
		public SimpleExpressionContext simpleExpression(int i) {
			return getRuleContext(SimpleExpressionContext.class,i);
		}
		public List<RelationaloperatorContext> relationaloperator() {
			return getRuleContexts(RelationaloperatorContext.class);
		}
		public RelationaloperatorContext relationaloperator(int i) {
			return getRuleContext(RelationaloperatorContext.class,i);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
			simpleExpression();
			setState(442);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQUAL) | (1L << NOT_EQUAL) | (1L << LT) | (1L << LE) | (1L << GE) | (1L << GT))) != 0)) {
				{
				{
				setState(437);
				relationaloperator();
				setState(438);
				simpleExpression();
				}
				}
				setState(444);
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

	public static class RelationaloperatorContext extends ParserRuleContext {
		public TerminalNode EQUAL() { return getToken(pascalParser.EQUAL, 0); }
		public TerminalNode NOT_EQUAL() { return getToken(pascalParser.NOT_EQUAL, 0); }
		public TerminalNode LT() { return getToken(pascalParser.LT, 0); }
		public TerminalNode LE() { return getToken(pascalParser.LE, 0); }
		public TerminalNode GE() { return getToken(pascalParser.GE, 0); }
		public TerminalNode GT() { return getToken(pascalParser.GT, 0); }
		public RelationaloperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationaloperator; }
	}

	public final RelationaloperatorContext relationaloperator() throws RecognitionException {
		RelationaloperatorContext _localctx = new RelationaloperatorContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_relationaloperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(445);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQUAL) | (1L << NOT_EQUAL) | (1L << LT) | (1L << LE) | (1L << GE) | (1L << GT))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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

	public static class SimpleExpressionContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public List<AdditiveoperatorContext> additiveoperator() {
			return getRuleContexts(AdditiveoperatorContext.class);
		}
		public AdditiveoperatorContext additiveoperator(int i) {
			return getRuleContext(AdditiveoperatorContext.class,i);
		}
		public SimpleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleExpression; }
	}

	public final SimpleExpressionContext simpleExpression() throws RecognitionException {
		SimpleExpressionContext _localctx = new SimpleExpressionContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_simpleExpression);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(447);
			term();
			setState(453);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(448);
					additiveoperator();
					setState(449);
					term();
					}
					} 
				}
				setState(455);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
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

	public static class AdditiveoperatorContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(pascalParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(pascalParser.SUB, 0); }
		public TerminalNode OR() { return getToken(pascalParser.OR, 0); }
		public AdditiveoperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additiveoperator; }
	}

	public final AdditiveoperatorContext additiveoperator() throws RecognitionException {
		AdditiveoperatorContext _localctx = new AdditiveoperatorContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_additiveoperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(456);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OR) | (1L << ADD) | (1L << SUB))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
		public List<SignedFactorContext> signedFactor() {
			return getRuleContexts(SignedFactorContext.class);
		}
		public SignedFactorContext signedFactor(int i) {
			return getRuleContext(SignedFactorContext.class,i);
		}
		public List<MultiplicativeoperatorContext> multiplicativeoperator() {
			return getRuleContexts(MultiplicativeoperatorContext.class);
		}
		public MultiplicativeoperatorContext multiplicativeoperator(int i) {
			return getRuleContext(MultiplicativeoperatorContext.class,i);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(458);
			signedFactor();
			setState(464);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AND) | (1L << DIV) | (1L << MOD) | (1L << MULT))) != 0)) {
				{
				{
				setState(459);
				multiplicativeoperator();
				setState(460);
				signedFactor();
				}
				}
				setState(466);
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

	public static class MultiplicativeoperatorContext extends ParserRuleContext {
		public TerminalNode MULT() { return getToken(pascalParser.MULT, 0); }
		public TerminalNode DIV() { return getToken(pascalParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(pascalParser.MOD, 0); }
		public TerminalNode AND() { return getToken(pascalParser.AND, 0); }
		public MultiplicativeoperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplicativeoperator; }
	}

	public final MultiplicativeoperatorContext multiplicativeoperator() throws RecognitionException {
		MultiplicativeoperatorContext _localctx = new MultiplicativeoperatorContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_multiplicativeoperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(467);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AND) | (1L << DIV) | (1L << MOD) | (1L << MULT))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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

	public static class SignedFactorContext extends ParserRuleContext {
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public TerminalNode ADD() { return getToken(pascalParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(pascalParser.SUB, 0); }
		public SignedFactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_signedFactor; }
	}

	public final SignedFactorContext signedFactor() throws RecognitionException {
		SignedFactorContext _localctx = new SignedFactorContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_signedFactor);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(470);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ADD || _la==SUB) {
				{
				setState(469);
				_la = _input.LA(1);
				if ( !(_la==ADD || _la==SUB) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(472);
			factor();
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
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode LP() { return getToken(pascalParser.LP, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RP() { return getToken(pascalParser.RP, 0); }
		public FunctionDesignatorContext functionDesignator() {
			return getRuleContext(FunctionDesignatorContext.class,0);
		}
		public UnsignedConstantContext unsignedConstant() {
			return getRuleContext(UnsignedConstantContext.class,0);
		}
		public TerminalNode NOT() { return getToken(pascalParser.NOT, 0); }
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public BoolContext bool() {
			return getRuleContext(BoolContext.class,0);
		}
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_factor);
		try {
			setState(484);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(474);
				variable();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(475);
				match(LP);
				setState(476);
				expression();
				setState(477);
				match(RP);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(479);
				functionDesignator();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(480);
				unsignedConstant();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(481);
				match(NOT);
				setState(482);
				factor();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(483);
				bool();
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

	public static class UnsignedConstantContext extends ParserRuleContext {
		public UnsignedNumberContext unsignedNumber() {
			return getRuleContext(UnsignedNumberContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public CharacterContext character() {
			return getRuleContext(CharacterContext.class,0);
		}
		public UnsignedConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unsignedConstant; }
	}

	public final UnsignedConstantContext unsignedConstant() throws RecognitionException {
		UnsignedConstantContext _localctx = new UnsignedConstantContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_unsignedConstant);
		try {
			setState(489);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(486);
				unsignedNumber();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(487);
				string();
				}
				break;
			case CHAR_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(488);
				character();
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

	public static class FunctionDesignatorContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode LP() { return getToken(pascalParser.LP, 0); }
		public TerminalNode RP() { return getToken(pascalParser.RP, 0); }
		public List<ParameterListContext> parameterList() {
			return getRuleContexts(ParameterListContext.class);
		}
		public ParameterListContext parameterList(int i) {
			return getRuleContext(ParameterListContext.class,i);
		}
		public FunctionDesignatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDesignator; }
	}

	public final FunctionDesignatorContext functionDesignator() throws RecognitionException {
		FunctionDesignatorContext _localctx = new FunctionDesignatorContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_functionDesignator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(491);
			variable();
			setState(492);
			match(LP);
			setState(496);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 20)) & ~0x3f) == 0 && ((1L << (_la - 20)) & ((1L << (NOT - 20)) | (1L << (ADD - 20)) | (1L << (SUB - 20)) | (1L << (LP - 20)) | (1L << (AT - 20)) | (1L << (TRUE - 20)) | (1L << (FALSE - 20)) | (1L << (NUMBER - 20)) | (1L << (ID - 20)) | (1L << (CHAR_LITERAL - 20)) | (1L << (STRING_LITERAL - 20)))) != 0)) {
				{
				{
				setState(493);
				parameterList();
				}
				}
				setState(498);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(499);
			match(RP);
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

	public static class ParameterListContext extends ParserRuleContext {
		public List<ActualParameterContext> actualParameter() {
			return getRuleContexts(ActualParameterContext.class);
		}
		public ActualParameterContext actualParameter(int i) {
			return getRuleContext(ActualParameterContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_parameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(501);
			actualParameter();
			setState(506);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(502);
				match(COMMA);
				setState(503);
				actualParameter();
				}
				}
				setState(508);
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

	public static class ProcedureStatementContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode LP() { return getToken(pascalParser.LP, 0); }
		public TerminalNode RP() { return getToken(pascalParser.RP, 0); }
		public List<ParameterListContext> parameterList() {
			return getRuleContexts(ParameterListContext.class);
		}
		public ParameterListContext parameterList(int i) {
			return getRuleContext(ParameterListContext.class,i);
		}
		public ProcedureStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedureStatement; }
	}

	public final ProcedureStatementContext procedureStatement() throws RecognitionException {
		ProcedureStatementContext _localctx = new ProcedureStatementContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_procedureStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(509);
			variable();
			setState(518);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LP) {
				{
				setState(510);
				match(LP);
				setState(514);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (((((_la - 20)) & ~0x3f) == 0 && ((1L << (_la - 20)) & ((1L << (NOT - 20)) | (1L << (ADD - 20)) | (1L << (SUB - 20)) | (1L << (LP - 20)) | (1L << (AT - 20)) | (1L << (TRUE - 20)) | (1L << (FALSE - 20)) | (1L << (NUMBER - 20)) | (1L << (ID - 20)) | (1L << (CHAR_LITERAL - 20)) | (1L << (STRING_LITERAL - 20)))) != 0)) {
					{
					{
					setState(511);
					parameterList();
					}
					}
					setState(516);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(517);
				match(RP);
				}
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

	public static class ActualParameterContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<ParameterwidthContext> parameterwidth() {
			return getRuleContexts(ParameterwidthContext.class);
		}
		public ParameterwidthContext parameterwidth(int i) {
			return getRuleContext(ParameterwidthContext.class,i);
		}
		public ActualParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_actualParameter; }
	}

	public final ActualParameterContext actualParameter() throws RecognitionException {
		ActualParameterContext _localctx = new ActualParameterContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_actualParameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(520);
			expression();
			setState(524);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COLON) {
				{
				{
				setState(521);
				parameterwidth();
				}
				}
				setState(526);
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

	public static class ParameterwidthContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParameterwidthContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterwidth; }
	}

	public final ParameterwidthContext parameterwidth() throws RecognitionException {
		ParameterwidthContext _localctx = new ParameterwidthContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_parameterwidth);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(527);
			match(COLON);
			setState(528);
			expression();
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

	public static class EmptyStatementContext extends ParserRuleContext {
		public EmptyStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyStatement; }
	}

	public final EmptyStatementContext emptyStatement() throws RecognitionException {
		EmptyStatementContext _localctx = new EmptyStatementContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_emptyStatement);
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

	public static class StructuredStatementContext extends ParserRuleContext {
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public ConditionalStatementContext conditionalStatement() {
			return getRuleContext(ConditionalStatementContext.class,0);
		}
		public RepetetiveStatementContext repetetiveStatement() {
			return getRuleContext(RepetetiveStatementContext.class,0);
		}
		public StructuredStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structuredStatement; }
	}

	public final StructuredStatementContext structuredStatement() throws RecognitionException {
		StructuredStatementContext _localctx = new StructuredStatementContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_structuredStatement);
		try {
			setState(535);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BEGIN:
				enterOuterAlt(_localctx, 1);
				{
				setState(532);
				compoundStatement();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 2);
				{
				setState(533);
				conditionalStatement();
				}
				break;
			case FOR:
			case REPEAT:
			case WHILE:
				enterOuterAlt(_localctx, 3);
				{
				setState(534);
				repetetiveStatement();
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

	public static class CompoundStatementContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(pascalParser.BEGIN, 0); }
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public TerminalNode END() { return getToken(pascalParser.END, 0); }
		public CompoundStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compoundStatement; }
	}

	public final CompoundStatementContext compoundStatement() throws RecognitionException {
		CompoundStatementContext _localctx = new CompoundStatementContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_compoundStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(537);
			match(BEGIN);
			setState(538);
			statements();
			setState(539);
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

	public static class StatementsContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public StatementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statements; }
	}

	public final StatementsContext statements() throws RecognitionException {
		StatementsContext _localctx = new StatementsContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_statements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(541);
			statement();
			setState(546);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SEMI) {
				{
				{
				setState(542);
				match(SEMI);
				setState(543);
				statement();
				}
				}
				setState(548);
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

	public static class ConditionalStatementContext extends ParserRuleContext {
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public ConditionalStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalStatement; }
	}

	public final ConditionalStatementContext conditionalStatement() throws RecognitionException {
		ConditionalStatementContext _localctx = new ConditionalStatementContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_conditionalStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(549);
			ifStatement();
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

	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(pascalParser.IF, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode THEN() { return getToken(pascalParser.THEN, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(pascalParser.ELSE, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(551);
			match(IF);
			setState(552);
			expression();
			setState(553);
			match(THEN);
			setState(554);
			statement();
			setState(557);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				{
				setState(555);
				match(ELSE);
				setState(556);
				statement();
				}
				break;
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

	public static class RepetetiveStatementContext extends ParserRuleContext {
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public RepeatStatementContext repeatStatement() {
			return getRuleContext(RepeatStatementContext.class,0);
		}
		public ForStatementContext forStatement() {
			return getRuleContext(ForStatementContext.class,0);
		}
		public RepetetiveStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_repetetiveStatement; }
	}

	public final RepetetiveStatementContext repetetiveStatement() throws RecognitionException {
		RepetetiveStatementContext _localctx = new RepetetiveStatementContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_repetetiveStatement);
		try {
			setState(562);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WHILE:
				enterOuterAlt(_localctx, 1);
				{
				setState(559);
				whileStatement();
				}
				break;
			case REPEAT:
				enterOuterAlt(_localctx, 2);
				{
				setState(560);
				repeatStatement();
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 3);
				{
				setState(561);
				forStatement();
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

	public static class WhileStatementContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(pascalParser.WHILE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode DO() { return getToken(pascalParser.DO, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_whileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(564);
			match(WHILE);
			setState(565);
			expression();
			setState(566);
			match(DO);
			setState(567);
			statement();
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

	public static class RepeatStatementContext extends ParserRuleContext {
		public TerminalNode REPEAT() { return getToken(pascalParser.REPEAT, 0); }
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public TerminalNode UNTIL() { return getToken(pascalParser.UNTIL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public RepeatStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_repeatStatement; }
	}

	public final RepeatStatementContext repeatStatement() throws RecognitionException {
		RepeatStatementContext _localctx = new RepeatStatementContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_repeatStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(569);
			match(REPEAT);
			setState(570);
			statements();
			setState(571);
			match(UNTIL);
			setState(572);
			expression();
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

	public static class ForStatementContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(pascalParser.FOR, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(pascalParser.ASSIGN, 0); }
		public ForListContext forList() {
			return getRuleContext(ForListContext.class,0);
		}
		public TerminalNode DO() { return getToken(pascalParser.DO, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ForStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStatement; }
	}

	public final ForStatementContext forStatement() throws RecognitionException {
		ForStatementContext _localctx = new ForStatementContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_forStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(574);
			match(FOR);
			setState(575);
			identifier();
			setState(576);
			match(ASSIGN);
			setState(577);
			forList();
			setState(578);
			match(DO);
			setState(579);
			statement();
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

	public static class ForListContext extends ParserRuleContext {
		public InitialValueContext initialValue() {
			return getRuleContext(InitialValueContext.class,0);
		}
		public FinalValueContext finalValue() {
			return getRuleContext(FinalValueContext.class,0);
		}
		public TerminalNode TO() { return getToken(pascalParser.TO, 0); }
		public TerminalNode DOWNTO() { return getToken(pascalParser.DOWNTO, 0); }
		public ForListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forList; }
	}

	public final ForListContext forList() throws RecognitionException {
		ForListContext _localctx = new ForListContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_forList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(581);
			initialValue();
			setState(582);
			_la = _input.LA(1);
			if ( !(_la==DOWNTO || _la==TO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(583);
			finalValue();
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

	public static class InitialValueContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public InitialValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initialValue; }
	}

	public final InitialValueContext initialValue() throws RecognitionException {
		InitialValueContext _localctx = new InitialValueContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_initialValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(585);
			expression();
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

	public static class FinalValueContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FinalValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_finalValue; }
	}

	public final FinalValueContext finalValue() throws RecognitionException {
		FinalValueContext _localctx = new FinalValueContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_finalValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(587);
			expression();
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3H\u0250\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\5\2\u0097\n\2\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\4"+
		"\3\5\3\5\3\5\7\5\u00a5\n\5\f\5\16\5\u00a8\13\5\3\6\3\6\3\6\3\6\6\6\u00ae"+
		"\n\6\r\6\16\6\u00af\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u00bd"+
		"\n\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u00cc\n\t"+
		"\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\5\17\u00da\n\17"+
		"\3\20\3\20\3\20\3\20\5\20\u00e0\n\20\3\21\3\21\3\21\3\21\3\22\3\22\3\22"+
		"\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\25\3\25\5\25\u00f2\n\25\3\25\3\25"+
		"\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\5\26\u0104\n\26\3\27\3\27\3\27\7\27\u0109\n\27\f\27\16\27\u010c\13\27"+
		"\3\30\3\30\3\31\3\31\3\32\3\32\3\32\3\32\7\32\u0116\n\32\f\32\16\32\u0119"+
		"\13\32\3\32\3\32\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\35\3\35\5\35\u0126"+
		"\n\35\3\36\3\36\3\36\5\36\u012b\n\36\3\36\3\36\3\36\3\37\3\37\7\37\u0132"+
		"\n\37\f\37\16\37\u0135\13\37\3\37\3\37\7\37\u0139\n\37\f\37\16\37\u013c"+
		"\13\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \5 \u0147\n \3!\3!\3!\3!\3\"\3\""+
		"\3\"\7\"\u0150\n\"\f\"\16\"\u0153\13\"\3#\3#\3#\5#\u0158\n#\3#\3#\3#\3"+
		"#\3#\3$\3$\3%\3%\5%\u0163\n%\3&\3&\3&\3&\3&\5&\u016a\n&\3\'\3\'\3\'\5"+
		"\'\u016f\n\'\3(\3(\3(\3(\3(\3)\3)\3)\7)\u0179\n)\f)\16)\u017c\13)\3)\7"+
		")\u017f\n)\f)\16)\u0182\13)\3*\3*\3*\3*\3*\3+\3+\3+\7+\u018c\n+\f+\16"+
		"+\u018f\13+\3,\3,\3,\3,\3-\3-\3-\5-\u0198\n-\3-\3-\3-\3-\7-\u019e\n-\f"+
		"-\16-\u01a1\13-\3-\3-\3-\3-\3-\3-\7-\u01a9\n-\f-\16-\u01ac\13-\3-\3-\3"+
		"-\3-\7-\u01b2\n-\f-\16-\u01b5\13-\3.\3.\3.\3.\7.\u01bb\n.\f.\16.\u01be"+
		"\13.\3/\3/\3\60\3\60\3\60\3\60\7\60\u01c6\n\60\f\60\16\60\u01c9\13\60"+
		"\3\61\3\61\3\62\3\62\3\62\3\62\7\62\u01d1\n\62\f\62\16\62\u01d4\13\62"+
		"\3\63\3\63\3\64\5\64\u01d9\n\64\3\64\3\64\3\65\3\65\3\65\3\65\3\65\3\65"+
		"\3\65\3\65\3\65\3\65\5\65\u01e7\n\65\3\66\3\66\3\66\5\66\u01ec\n\66\3"+
		"\67\3\67\3\67\7\67\u01f1\n\67\f\67\16\67\u01f4\13\67\3\67\3\67\38\38\3"+
		"8\78\u01fb\n8\f8\168\u01fe\138\39\39\39\79\u0203\n9\f9\169\u0206\139\3"+
		"9\59\u0209\n9\3:\3:\7:\u020d\n:\f:\16:\u0210\13:\3;\3;\3;\3<\3<\3=\3="+
		"\3=\5=\u021a\n=\3>\3>\3>\3>\3?\3?\3?\7?\u0223\n?\f?\16?\u0226\13?\3@\3"+
		"@\3A\3A\3A\3A\3A\3A\5A\u0230\nA\3B\3B\3B\5B\u0235\nB\3C\3C\3C\3C\3C\3"+
		"D\3D\3D\3D\3D\3E\3E\3E\3E\3E\3E\3E\3F\3F\3F\3F\3G\3G\3H\3H\3H\2\2I\2\4"+
		"\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNP"+
		"RTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e"+
		"\2\t\3\2&\'\3\2=>\6\2\6\6\b\b\23\23<<\3\2-\62\4\2\30\30&\'\6\2\3\3\n\n"+
		"\25\25((\4\2\f\f\37\37\2\u0250\2\u0090\3\2\2\2\4\u009c\3\2\2\2\6\u009e"+
		"\3\2\2\2\b\u00a6\3\2\2\2\n\u00a9\3\2\2\2\f\u00b1\3\2\2\2\16\u00bc\3\2"+
		"\2\2\20\u00cb\3\2\2\2\22\u00cd\3\2\2\2\24\u00cf\3\2\2\2\26\u00d1\3\2\2"+
		"\2\30\u00d3\3\2\2\2\32\u00d5\3\2\2\2\34\u00d9\3\2\2\2\36\u00df\3\2\2\2"+
		" \u00e1\3\2\2\2\"\u00e5\3\2\2\2$\u00e9\3\2\2\2&\u00eb\3\2\2\2(\u00ed\3"+
		"\2\2\2*\u0103\3\2\2\2,\u0105\3\2\2\2.\u010d\3\2\2\2\60\u010f\3\2\2\2\62"+
		"\u0111\3\2\2\2\64\u011c\3\2\2\2\66\u0120\3\2\2\28\u0125\3\2\2\2:\u0127"+
		"\3\2\2\2<\u012f\3\2\2\2>\u0146\3\2\2\2@\u0148\3\2\2\2B\u014c\3\2\2\2D"+
		"\u0154\3\2\2\2F\u015e\3\2\2\2H\u0162\3\2\2\2J\u0169\3\2\2\2L\u016e\3\2"+
		"\2\2N\u0170\3\2\2\2P\u0175\3\2\2\2R\u0183\3\2\2\2T\u0188\3\2\2\2V\u0190"+
		"\3\2\2\2X\u0197\3\2\2\2Z\u01b6\3\2\2\2\\\u01bf\3\2\2\2^\u01c1\3\2\2\2"+
		"`\u01ca\3\2\2\2b\u01cc\3\2\2\2d\u01d5\3\2\2\2f\u01d8\3\2\2\2h\u01e6\3"+
		"\2\2\2j\u01eb\3\2\2\2l\u01ed\3\2\2\2n\u01f7\3\2\2\2p\u01ff\3\2\2\2r\u020a"+
		"\3\2\2\2t\u0211\3\2\2\2v\u0214\3\2\2\2x\u0219\3\2\2\2z\u021b\3\2\2\2|"+
		"\u021f\3\2\2\2~\u0227\3\2\2\2\u0080\u0229\3\2\2\2\u0082\u0234\3\2\2\2"+
		"\u0084\u0236\3\2\2\2\u0086\u023b\3\2\2\2\u0088\u0240\3\2\2\2\u008a\u0247"+
		"\3\2\2\2\u008c\u024b\3\2\2\2\u008e\u024d\3\2\2\2\u0090\u0091\7\32\2\2"+
		"\u0091\u0096\5\4\3\2\u0092\u0093\7\63\2\2\u0093\u0094\5B\"\2\u0094\u0095"+
		"\7\64\2\2\u0095\u0097\3\2\2\2\u0096\u0092\3\2\2\2\u0096\u0097\3\2\2\2"+
		"\u0097\u0098\3\2\2\2\u0098\u0099\7)\2\2\u0099\u009a\5\6\4\2\u009a\u009b"+
		"\7:\2\2\u009b\3\3\2\2\2\u009c\u009d\7F\2\2\u009d\5\3\2\2\2\u009e\u009f"+
		"\5\b\5\2\u009f\u00a0\5z>\2\u00a0\7\3\2\2\2\u00a1\u00a5\5\n\6\2\u00a2\u00a5"+
		"\5\62\32\2\u00a3\u00a5\5\66\34\2\u00a4\u00a1\3\2\2\2\u00a4\u00a2\3\2\2"+
		"\2\u00a4\u00a3\3\2\2\2\u00a5\u00a8\3\2\2\2\u00a6\u00a4\3\2\2\2\u00a6\u00a7"+
		"\3\2\2\2\u00a7\t\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a9\u00ad\7\t\2\2\u00aa"+
		"\u00ab\5\f\7\2\u00ab\u00ac\7)\2\2\u00ac\u00ae\3\2\2\2\u00ad\u00aa\3\2"+
		"\2\2\u00ae\u00af\3\2\2\2\u00af\u00ad\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0"+
		"\13\3\2\2\2\u00b1\u00b2\5\4\3\2\u00b2\u00b3\7-\2\2\u00b3\u00b4\5\16\b"+
		"\2\u00b4\r\3\2\2\2\u00b5\u00bd\5\22\n\2\u00b6\u00b7\5\24\13\2\u00b7\u00b8"+
		"\5\22\n\2\u00b8\u00bd\3\2\2\2\u00b9\u00bd\5\30\r\2\u00ba\u00bd\5\32\16"+
		"\2\u00bb\u00bd\5\26\f\2\u00bc\u00b5\3\2\2\2\u00bc\u00b6\3\2\2\2\u00bc"+
		"\u00b9\3\2\2\2\u00bc\u00ba\3\2\2\2\u00bc\u00bb\3\2\2\2\u00bd\17\3\2\2"+
		"\2\u00be\u00cc\5\22\n\2\u00bf\u00c0\5\24\13\2\u00c0\u00c1\5\22\n\2\u00c1"+
		"\u00cc\3\2\2\2\u00c2\u00cc\5\30\r\2\u00c3\u00cc\5\32\16\2\u00c4\u00cc"+
		"\5l\67\2\u00c5\u00cc\5X-\2\u00c6\u00c7\5\24\13\2\u00c7\u00c8\5X-\2\u00c8"+
		"\u00cc\3\2\2\2\u00c9\u00cc\5\26\f\2\u00ca\u00cc\5Z.\2\u00cb\u00be\3\2"+
		"\2\2\u00cb\u00bf\3\2\2\2\u00cb\u00c2\3\2\2\2\u00cb\u00c3\3\2\2\2\u00cb"+
		"\u00c4\3\2\2\2\u00cb\u00c5\3\2\2\2\u00cb\u00c6\3\2\2\2\u00cb\u00c9\3\2"+
		"\2\2\u00cb\u00ca\3\2\2\2\u00cc\21\3\2\2\2\u00cd\u00ce\7E\2\2\u00ce\23"+
		"\3\2\2\2\u00cf\u00d0\t\2\2\2\u00d0\25\3\2\2\2\u00d1\u00d2\t\3\2\2\u00d2"+
		"\27\3\2\2\2\u00d3\u00d4\7H\2\2\u00d4\31\3\2\2\2\u00d5\u00d6\7G\2\2\u00d6"+
		"\33\3\2\2\2\u00d7\u00da\5\36\20\2\u00d8\u00da\5&\24\2\u00d9\u00d7\3\2"+
		"\2\2\u00d9\u00d8\3\2\2\2\u00da\35\3\2\2\2\u00db\u00e0\5 \21\2\u00dc\u00e0"+
		"\5\"\22\2\u00dd\u00e0\5$\23\2\u00de\u00e0\5(\25\2\u00df\u00db\3\2\2\2"+
		"\u00df\u00dc\3\2\2\2\u00df\u00dd\3\2\2\2\u00df\u00de\3\2\2\2\u00e0\37"+
		"\3\2\2\2\u00e1\u00e2\7\63\2\2\u00e2\u00e3\5B\"\2\u00e3\u00e4\7\64\2\2"+
		"\u00e4!\3\2\2\2\u00e5\u00e6\5\20\t\2\u00e6\u00e7\7;\2\2\u00e7\u00e8\5"+
		"\20\t\2\u00e8#\3\2\2\2\u00e9\u00ea\t\4\2\2\u00ea%\3\2\2\2\u00eb\u00ec"+
		"\5*\26\2\u00ec\'\3\2\2\2\u00ed\u00ee\7<\2\2\u00ee\u00f1\7\66\2\2\u00ef"+
		"\u00f2\5\4\3\2\u00f0\u00f2\5\22\n\2\u00f1\u00ef\3\2\2\2\u00f1\u00f0\3"+
		"\2\2\2\u00f2\u00f3\3\2\2\2\u00f3\u00f4\78\2\2\u00f4)\3\2\2\2\u00f5\u00f6"+
		"\7\4\2\2\u00f6\u00f7\7\66\2\2\u00f7\u00f8\5,\27\2\u00f8\u00f9\78\2\2\u00f9"+
		"\u00fa\7\27\2\2\u00fa\u00fb\5\60\31\2\u00fb\u0104\3\2\2\2\u00fc\u00fd"+
		"\7\4\2\2\u00fd\u00fe\7\67\2\2\u00fe\u00ff\5,\27\2\u00ff\u0100\79\2\2\u0100"+
		"\u0101\7\27\2\2\u0101\u0102\5\60\31\2\u0102\u0104\3\2\2\2\u0103\u00f5"+
		"\3\2\2\2\u0103\u00fc\3\2\2\2\u0104+\3\2\2\2\u0105\u010a\5.\30\2\u0106"+
		"\u0107\7+\2\2\u0107\u0109\5.\30\2\u0108\u0106\3\2\2\2\u0109\u010c\3\2"+
		"\2\2\u010a\u0108\3\2\2\2\u010a\u010b\3\2\2\2\u010b-\3\2\2\2\u010c\u010a"+
		"\3\2\2\2\u010d\u010e\5\36\20\2\u010e/\3\2\2\2\u010f\u0110\5\34\17\2\u0110"+
		"\61\3\2\2\2\u0111\u0112\7\"\2\2\u0112\u0117\5\64\33\2\u0113\u0114\7)\2"+
		"\2\u0114\u0116\5\64\33\2\u0115\u0113\3\2\2\2\u0116\u0119\3\2\2\2\u0117"+
		"\u0115\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u011a\3\2\2\2\u0119\u0117\3\2"+
		"\2\2\u011a\u011b\7)\2\2\u011b\63\3\2\2\2\u011c\u011d\5B\"\2\u011d\u011e"+
		"\7,\2\2\u011e\u011f\5\34\17\2\u011f\65\3\2\2\2\u0120\u0121\58\35\2\u0121"+
		"\u0122\7)\2\2\u0122\67\3\2\2\2\u0123\u0126\5:\36\2\u0124\u0126\5D#\2\u0125"+
		"\u0123\3\2\2\2\u0125\u0124\3\2\2\2\u01269\3\2\2\2\u0127\u0128\7\31\2\2"+
		"\u0128\u012a\5\4\3\2\u0129\u012b\5<\37\2\u012a\u0129\3\2\2\2\u012a\u012b"+
		"\3\2\2\2\u012b\u012c\3\2\2\2\u012c\u012d\7)\2\2\u012d\u012e\5\6\4\2\u012e"+
		";\3\2\2\2\u012f\u0133\7\63\2\2\u0130\u0132\5> \2\u0131\u0130\3\2\2\2\u0132"+
		"\u0135\3\2\2\2\u0133\u0131\3\2\2\2\u0133\u0134\3\2\2\2\u0134\u013a\3\2"+
		"\2\2\u0135\u0133\3\2\2\2\u0136\u0137\7)\2\2\u0137\u0139\5> \2\u0138\u0136"+
		"\3\2\2\2\u0139\u013c\3\2\2\2\u013a\u0138\3\2\2\2\u013a\u013b\3\2\2\2\u013b"+
		"\u013d\3\2\2\2\u013c\u013a\3\2\2\2\u013d\u013e\7\64\2\2\u013e=\3\2\2\2"+
		"\u013f\u0147\5@!\2\u0140\u0141\7\"\2\2\u0141\u0147\5@!\2\u0142\u0143\7"+
		"\20\2\2\u0143\u0147\5@!\2\u0144\u0145\7\31\2\2\u0145\u0147\5@!\2\u0146"+
		"\u013f\3\2\2\2\u0146\u0140\3\2\2\2\u0146\u0142\3\2\2\2\u0146\u0144\3\2"+
		"\2\2\u0147?\3\2\2\2\u0148\u0149\5B\"\2\u0149\u014a\7,\2\2\u014a\u014b"+
		"\5$\23\2\u014bA\3\2\2\2\u014c\u0151\5\4\3\2\u014d\u014e\7+\2\2\u014e\u0150"+
		"\5\4\3\2\u014f\u014d\3\2\2\2\u0150\u0153\3\2\2\2\u0151\u014f\3\2\2\2\u0151"+
		"\u0152\3\2\2\2\u0152C\3\2\2\2\u0153\u0151\3\2\2\2\u0154\u0155\7\20\2\2"+
		"\u0155\u0157\5\4\3\2\u0156\u0158\5<\37\2\u0157\u0156\3\2\2\2\u0157\u0158"+
		"\3\2\2\2\u0158\u0159\3\2\2\2\u0159\u015a\7,\2\2\u015a\u015b\5F$\2\u015b"+
		"\u015c\7)\2\2\u015c\u015d\5\6\4\2\u015dE\3\2\2\2\u015e\u015f\5$\23\2\u015f"+
		"G\3\2\2\2\u0160\u0163\5J&\2\u0161\u0163\5x=\2\u0162\u0160\3\2\2\2\u0162"+
		"\u0161\3\2\2\2\u0163I\3\2\2\2\u0164\u016a\5V,\2\u0165\u016a\5L\'\2\u0166"+
		"\u016a\5p9\2\u0167\u016a\5l\67\2\u0168\u016a\5v<\2\u0169\u0164\3\2\2\2"+
		"\u0169\u0165\3\2\2\2\u0169\u0166\3\2\2\2\u0169\u0167\3\2\2\2\u0169\u0168"+
		"\3\2\2\2\u016aK\3\2\2\2\u016b\u016f\5N(\2\u016c\u016f\5R*\2\u016d\u016f"+
		"\5P)\2\u016e\u016b\3\2\2\2\u016e\u016c\3\2\2\2\u016e\u016d\3\2\2\2\u016f"+
		"M\3\2\2\2\u0170\u0171\7\33\2\2\u0171\u0172\7\63\2\2\u0172\u0173\5B\"\2"+
		"\u0173\u0174\7\64\2\2\u0174O\3\2\2\2\u0175\u0180\7%\2\2\u0176\u017a\7"+
		"\63\2\2\u0177\u0179\5T+\2\u0178\u0177\3\2\2\2\u0179\u017c\3\2\2\2\u017a"+
		"\u0178\3\2\2\2\u017a\u017b\3\2\2\2\u017b\u017d\3\2\2\2\u017c\u017a\3\2"+
		"\2\2\u017d\u017f\7\64\2\2\u017e\u0176\3\2\2\2\u017f\u0182\3\2\2\2\u0180"+
		"\u017e\3\2\2\2\u0180\u0181\3\2\2\2\u0181Q\3\2\2\2\u0182\u0180\3\2\2\2"+
		"\u0183\u0184\7$\2\2\u0184\u0185\7\63\2\2\u0185\u0186\5T+\2\u0186\u0187"+
		"\7\64\2\2\u0187S\3\2\2\2\u0188\u018d\5\20\t\2\u0189\u018a\7+\2\2\u018a"+
		"\u018c\5\20\t\2\u018b\u0189\3\2\2\2\u018c\u018f\3\2\2\2\u018d\u018b\3"+
		"\2\2\2\u018d\u018e\3\2\2\2\u018eU\3\2\2\2\u018f\u018d\3\2\2\2\u0190\u0191"+
		"\5X-\2\u0191\u0192\7*\2\2\u0192\u0193\5Z.\2\u0193W\3\2\2\2\u0194\u0195"+
		"\7\65\2\2\u0195\u0198\5\4\3\2\u0196\u0198\5\4\3\2\u0197\u0194\3\2\2\2"+
		"\u0197\u0196\3\2\2\2\u0198\u01b3\3\2\2\2\u0199\u019a\7\66\2\2\u019a\u019f"+
		"\5Z.\2\u019b\u019c\7+\2\2\u019c\u019e\5Z.\2\u019d\u019b\3\2\2\2\u019e"+
		"\u01a1\3\2\2\2\u019f\u019d\3\2\2\2\u019f\u01a0\3\2\2\2\u01a0\u01a2\3\2"+
		"\2\2\u01a1\u019f\3\2\2\2\u01a2\u01a3\78\2\2\u01a3\u01b2\3\2\2\2\u01a4"+
		"\u01a5\7\67\2\2\u01a5\u01aa\5Z.\2\u01a6\u01a7\7+\2\2\u01a7\u01a9\5Z.\2"+
		"\u01a8\u01a6\3\2\2\2\u01a9\u01ac\3\2\2\2\u01aa\u01a8\3\2\2\2\u01aa\u01ab"+
		"\3\2\2\2\u01ab\u01ad\3\2\2\2\u01ac\u01aa\3\2\2\2\u01ad\u01ae\79\2\2\u01ae"+
		"\u01b2\3\2\2\2\u01af\u01b0\7:\2\2\u01b0\u01b2\5\4\3\2\u01b1\u0199\3\2"+
		"\2\2\u01b1\u01a4\3\2\2\2\u01b1\u01af\3\2\2\2\u01b2\u01b5\3\2\2\2\u01b3"+
		"\u01b1\3\2\2\2\u01b3\u01b4\3\2\2\2\u01b4Y\3\2\2\2\u01b5\u01b3\3\2\2\2"+
		"\u01b6\u01bc\5^\60\2\u01b7\u01b8\5\\/\2\u01b8\u01b9\5^\60\2\u01b9\u01bb"+
		"\3\2\2\2\u01ba\u01b7\3\2\2\2\u01bb\u01be\3\2\2\2\u01bc\u01ba\3\2\2\2\u01bc"+
		"\u01bd\3\2\2\2\u01bd[\3\2\2\2\u01be\u01bc\3\2\2\2\u01bf\u01c0\t\5\2\2"+
		"\u01c0]\3\2\2\2\u01c1\u01c7\5b\62\2\u01c2\u01c3\5`\61\2\u01c3\u01c4\5"+
		"b\62\2\u01c4\u01c6\3\2\2\2\u01c5\u01c2\3\2\2\2\u01c6\u01c9\3\2\2\2\u01c7"+
		"\u01c5\3\2\2\2\u01c7\u01c8\3\2\2\2\u01c8_\3\2\2\2\u01c9\u01c7\3\2\2\2"+
		"\u01ca\u01cb\t\6\2\2\u01cba\3\2\2\2\u01cc\u01d2\5f\64\2\u01cd\u01ce\5"+
		"d\63\2\u01ce\u01cf\5f\64\2\u01cf\u01d1\3\2\2\2\u01d0\u01cd\3\2\2\2\u01d1"+
		"\u01d4\3\2\2\2\u01d2\u01d0\3\2\2\2\u01d2\u01d3\3\2\2\2\u01d3c\3\2\2\2"+
		"\u01d4\u01d2\3\2\2\2\u01d5\u01d6\t\7\2\2\u01d6e\3\2\2\2\u01d7\u01d9\t"+
		"\2\2\2\u01d8\u01d7\3\2\2\2\u01d8\u01d9\3\2\2\2\u01d9\u01da\3\2\2\2\u01da"+
		"\u01db\5h\65\2\u01dbg\3\2\2\2\u01dc\u01e7\5X-\2\u01dd\u01de\7\63\2\2\u01de"+
		"\u01df\5Z.\2\u01df\u01e0\7\64\2\2\u01e0\u01e7\3\2\2\2\u01e1\u01e7\5l\67"+
		"\2\u01e2\u01e7\5j\66\2\u01e3\u01e4\7\26\2\2\u01e4\u01e7\5h\65\2\u01e5"+
		"\u01e7\5\26\f\2\u01e6\u01dc\3\2\2\2\u01e6\u01dd\3\2\2\2\u01e6\u01e1\3"+
		"\2\2\2\u01e6\u01e2\3\2\2\2\u01e6\u01e3\3\2\2\2\u01e6\u01e5\3\2\2\2\u01e7"+
		"i\3\2\2\2\u01e8\u01ec\5\22\n\2\u01e9\u01ec\5\30\r\2\u01ea\u01ec\5\32\16"+
		"\2\u01eb\u01e8\3\2\2\2\u01eb\u01e9\3\2\2\2\u01eb\u01ea\3\2\2\2\u01eck"+
		"\3\2\2\2\u01ed\u01ee\5X-\2\u01ee\u01f2\7\63\2\2\u01ef\u01f1\5n8\2\u01f0"+
		"\u01ef\3\2\2\2\u01f1\u01f4\3\2\2\2\u01f2\u01f0\3\2\2\2\u01f2\u01f3\3\2"+
		"\2\2\u01f3\u01f5\3\2\2\2\u01f4\u01f2\3\2\2\2\u01f5\u01f6\7\64\2\2\u01f6"+
		"m\3\2\2\2\u01f7\u01fc\5r:\2\u01f8\u01f9\7+\2\2\u01f9\u01fb\5r:\2\u01fa"+
		"\u01f8\3\2\2\2\u01fb\u01fe\3\2\2\2\u01fc\u01fa\3\2\2\2\u01fc\u01fd\3\2"+
		"\2\2\u01fdo\3\2\2\2\u01fe\u01fc\3\2\2\2\u01ff\u0208\5X-\2\u0200\u0204"+
		"\7\63\2\2\u0201\u0203\5n8\2\u0202\u0201\3\2\2\2\u0203\u0206\3\2\2\2\u0204"+
		"\u0202\3\2\2\2\u0204\u0205\3\2\2\2\u0205\u0207\3\2\2\2\u0206\u0204\3\2"+
		"\2\2\u0207\u0209\7\64\2\2\u0208\u0200\3\2\2\2\u0208\u0209\3\2\2\2\u0209"+
		"q\3\2\2\2\u020a\u020e\5Z.\2\u020b\u020d\5t;\2\u020c\u020b\3\2\2\2\u020d"+
		"\u0210\3\2\2\2\u020e\u020c\3\2\2\2\u020e\u020f\3\2\2\2\u020fs\3\2\2\2"+
		"\u0210\u020e\3\2\2\2\u0211\u0212\7,\2\2\u0212\u0213\5Z.\2\u0213u\3\2\2"+
		"\2\u0214\u0215\3\2\2\2\u0215w\3\2\2\2\u0216\u021a\5z>\2\u0217\u021a\5"+
		"~@\2\u0218\u021a\5\u0082B\2\u0219\u0216\3\2\2\2\u0219\u0217\3\2\2\2\u0219"+
		"\u0218\3\2\2\2\u021ay\3\2\2\2\u021b\u021c\7\5\2\2\u021c\u021d\5|?\2\u021d"+
		"\u021e\7\16\2\2\u021e{\3\2\2\2\u021f\u0224\5H%\2\u0220\u0221\7)\2\2\u0221"+
		"\u0223\5H%\2\u0222\u0220\3\2\2\2\u0223\u0226\3\2\2\2\u0224\u0222\3\2\2"+
		"\2\u0224\u0225\3\2\2\2\u0225}\3\2\2\2\u0226\u0224\3\2\2\2\u0227\u0228"+
		"\5\u0080A\2\u0228\177\3\2\2\2\u0229\u022a\7\21\2\2\u022a\u022b\5Z.\2\u022b"+
		"\u022c\7\36\2\2\u022c\u022f\5H%\2\u022d\u022e\7\r\2\2\u022e\u0230\5H%"+
		"\2\u022f\u022d\3\2\2\2\u022f\u0230\3\2\2\2\u0230\u0081\3\2\2\2\u0231\u0235"+
		"\5\u0084C\2\u0232\u0235\5\u0086D\2\u0233\u0235\5\u0088E\2\u0234\u0231"+
		"\3\2\2\2\u0234\u0232\3\2\2\2\u0234\u0233\3\2\2\2\u0235\u0083\3\2\2\2\u0236"+
		"\u0237\7#\2\2\u0237\u0238\5Z.\2\u0238\u0239\7\13\2\2\u0239\u023a\5H%\2"+
		"\u023a\u0085\3\2\2\2\u023b\u023c\7\34\2\2\u023c\u023d\5|?\2\u023d\u023e"+
		"\7!\2\2\u023e\u023f\5Z.\2\u023f\u0087\3\2\2\2\u0240\u0241\7\17\2\2\u0241"+
		"\u0242\5\4\3\2\u0242\u0243\7*\2\2\u0243\u0244\5\u008aF\2\u0244\u0245\7"+
		"\13\2\2\u0245\u0246\5H%\2\u0246\u0089\3\2\2\2\u0247\u0248\5\u008cG\2\u0248"+
		"\u0249\t\b\2\2\u0249\u024a\5\u008eH\2\u024a\u008b\3\2\2\2\u024b\u024c"+
		"\5Z.\2\u024c\u008d\3\2\2\2\u024d\u024e\5Z.\2\u024e\u008f\3\2\2\2/\u0096"+
		"\u00a4\u00a6\u00af\u00bc\u00cb\u00d9\u00df\u00f1\u0103\u010a\u0117\u0125"+
		"\u012a\u0133\u013a\u0146\u0151\u0157\u0162\u0169\u016e\u017a\u0180\u018d"+
		"\u0197\u019f\u01aa\u01b1\u01b3\u01bc\u01c7\u01d2\u01d8\u01e6\u01eb\u01f2"+
		"\u01fc\u0204\u0208\u020e\u0219\u0224\u022f\u0234";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}