// Generated from pascal.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by pascalParser.

function pascalVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

pascalVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
pascalVisitor.prototype.constructor = pascalVisitor;

// Visit a parse tree produced by pascalParser#program.
pascalVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#identifier.
pascalVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#block.
pascalVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#declarations.
pascalVisitor.prototype.visitDeclarations = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#constantDefinitionPart.
pascalVisitor.prototype.visitConstantDefinitionPart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#constantDefinition.
pascalVisitor.prototype.visitConstantDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#constantValues.
pascalVisitor.prototype.visitConstantValues = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#constant.
pascalVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#unsignedNumber.
pascalVisitor.prototype.visitUnsignedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#sign.
pascalVisitor.prototype.visitSign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#bool.
pascalVisitor.prototype.visitBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#string.
pascalVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#character.
pascalVisitor.prototype.visitCharacter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#type.
pascalVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#simpleType.
pascalVisitor.prototype.visitSimpleType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#scalarType.
pascalVisitor.prototype.visitScalarType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#subrangeType.
pascalVisitor.prototype.visitSubrangeType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#typeIdentifier.
pascalVisitor.prototype.visitTypeIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#structuredType.
pascalVisitor.prototype.visitStructuredType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#stringtype.
pascalVisitor.prototype.visitStringtype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#arrayType.
pascalVisitor.prototype.visitArrayType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#typeList.
pascalVisitor.prototype.visitTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#indexType.
pascalVisitor.prototype.visitIndexType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#componentType.
pascalVisitor.prototype.visitComponentType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#variableDeclarationPart.
pascalVisitor.prototype.visitVariableDeclarationPart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#variableDeclaration.
pascalVisitor.prototype.visitVariableDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#procedureAndFunctionDeclarationPart.
pascalVisitor.prototype.visitProcedureAndFunctionDeclarationPart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#procedureOrFunctionDeclaration.
pascalVisitor.prototype.visitProcedureOrFunctionDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#procedureDeclaration.
pascalVisitor.prototype.visitProcedureDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#formalParameterList.
pascalVisitor.prototype.visitFormalParameterList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#formalParameterSection.
pascalVisitor.prototype.visitFormalParameterSection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#parameterGroup.
pascalVisitor.prototype.visitParameterGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#identifierList.
pascalVisitor.prototype.visitIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#functionDeclaration.
pascalVisitor.prototype.visitFunctionDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#resultType.
pascalVisitor.prototype.visitResultType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#statement.
pascalVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#simpleStatement.
pascalVisitor.prototype.visitSimpleStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#ioStatement.
pascalVisitor.prototype.visitIoStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#readln.
pascalVisitor.prototype.visitReadln = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#writeln.
pascalVisitor.prototype.visitWriteln = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#write.
pascalVisitor.prototype.visitWrite = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#outputList.
pascalVisitor.prototype.visitOutputList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#assignmentStatement.
pascalVisitor.prototype.visitAssignmentStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#variable.
pascalVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#expression.
pascalVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#relationaloperator.
pascalVisitor.prototype.visitRelationaloperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#simpleExpression.
pascalVisitor.prototype.visitSimpleExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#additiveoperator.
pascalVisitor.prototype.visitAdditiveoperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#term.
pascalVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#multiplicativeoperator.
pascalVisitor.prototype.visitMultiplicativeoperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#signedFactor.
pascalVisitor.prototype.visitSignedFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#factor.
pascalVisitor.prototype.visitFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#unsignedConstant.
pascalVisitor.prototype.visitUnsignedConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#functionDesignator.
pascalVisitor.prototype.visitFunctionDesignator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#parameterList.
pascalVisitor.prototype.visitParameterList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#procedureStatement.
pascalVisitor.prototype.visitProcedureStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#actualParameter.
pascalVisitor.prototype.visitActualParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#parameterwidth.
pascalVisitor.prototype.visitParameterwidth = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#emptyStatement.
pascalVisitor.prototype.visitEmptyStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#structuredStatement.
pascalVisitor.prototype.visitStructuredStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#compoundStatement.
pascalVisitor.prototype.visitCompoundStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#statements.
pascalVisitor.prototype.visitStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#conditionalStatement.
pascalVisitor.prototype.visitConditionalStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#ifStatement.
pascalVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#repetetiveStatement.
pascalVisitor.prototype.visitRepetetiveStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#whileStatement.
pascalVisitor.prototype.visitWhileStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#repeatStatement.
pascalVisitor.prototype.visitRepeatStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#forStatement.
pascalVisitor.prototype.visitForStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#forList.
pascalVisitor.prototype.visitForList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#initialValue.
pascalVisitor.prototype.visitInitialValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pascalParser#finalValue.
pascalVisitor.prototype.visitFinalValue = function(ctx) {
  return this.visitChildren(ctx);
};



exports.pascalVisitor = pascalVisitor;