// Generated from calc.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link calcParser}.
 */
public interface calcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link calcParser#compound_statement}.
	 * @param ctx the parse tree
	 */
	void enterCompound_statement(calcParser.Compound_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link calcParser#compound_statement}.
	 * @param ctx the parse tree
	 */
	void exitCompound_statement(calcParser.Compound_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link calcParser#statement_list}.
	 * @param ctx the parse tree
	 */
	void enterStatement_list(calcParser.Statement_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link calcParser#statement_list}.
	 * @param ctx the parse tree
	 */
	void exitStatement_list(calcParser.Statement_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link calcParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(calcParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link calcParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(calcParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link calcParser#assign}.
	 * @param ctx the parse tree
	 */
	void enterAssign(calcParser.AssignContext ctx);
	/**
	 * Exit a parse tree produced by {@link calcParser#assign}.
	 * @param ctx the parse tree
	 */
	void exitAssign(calcParser.AssignContext ctx);
	/**
	 * Enter a parse tree produced by {@link calcParser#empty}.
	 * @param ctx the parse tree
	 */
	void enterEmpty(calcParser.EmptyContext ctx);
	/**
	 * Exit a parse tree produced by {@link calcParser#empty}.
	 * @param ctx the parse tree
	 */
	void exitEmpty(calcParser.EmptyContext ctx);
	/**
	 * Enter a parse tree produced by {@link calcParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(calcParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link calcParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(calcParser.ExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link calcParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(calcParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link calcParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(calcParser.TermContext ctx);
	/**
	 * Enter a parse tree produced by {@link calcParser#factor}.
	 * @param ctx the parse tree
	 */
	void enterFactor(calcParser.FactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link calcParser#factor}.
	 * @param ctx the parse tree
	 */
	void exitFactor(calcParser.FactorContext ctx);
	/**
	 * Enter a parse tree produced by {@link calcParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(calcParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link calcParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(calcParser.VariableContext ctx);
}