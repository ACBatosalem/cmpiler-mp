// Generated from pascal.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by pascalParser.
function pascalListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

pascalListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
pascalListener.prototype.constructor = pascalListener;

// Enter a parse tree produced by pascalParser#program.
pascalListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by pascalParser#program.
pascalListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by pascalParser#identifier.
pascalListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by pascalParser#identifier.
pascalListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by pascalParser#block.
pascalListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by pascalParser#block.
pascalListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by pascalParser#declarations.
pascalListener.prototype.enterDeclarations = function(ctx) {
};

// Exit a parse tree produced by pascalParser#declarations.
pascalListener.prototype.exitDeclarations = function(ctx) {
};


// Enter a parse tree produced by pascalParser#constantDefinitionPart.
pascalListener.prototype.enterConstantDefinitionPart = function(ctx) {
};

// Exit a parse tree produced by pascalParser#constantDefinitionPart.
pascalListener.prototype.exitConstantDefinitionPart = function(ctx) {
};


// Enter a parse tree produced by pascalParser#constantDefinition.
pascalListener.prototype.enterConstantDefinition = function(ctx) {
};

// Exit a parse tree produced by pascalParser#constantDefinition.
pascalListener.prototype.exitConstantDefinition = function(ctx) {
};


// Enter a parse tree produced by pascalParser#constantValues.
pascalListener.prototype.enterConstantValues = function(ctx) {
};

// Exit a parse tree produced by pascalParser#constantValues.
pascalListener.prototype.exitConstantValues = function(ctx) {
};


// Enter a parse tree produced by pascalParser#constant.
pascalListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by pascalParser#constant.
pascalListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by pascalParser#unsignedNumber.
pascalListener.prototype.enterUnsignedNumber = function(ctx) {
};

// Exit a parse tree produced by pascalParser#unsignedNumber.
pascalListener.prototype.exitUnsignedNumber = function(ctx) {
};


// Enter a parse tree produced by pascalParser#sign.
pascalListener.prototype.enterSign = function(ctx) {
};

// Exit a parse tree produced by pascalParser#sign.
pascalListener.prototype.exitSign = function(ctx) {
};


// Enter a parse tree produced by pascalParser#bool.
pascalListener.prototype.enterBool = function(ctx) {
};

// Exit a parse tree produced by pascalParser#bool.
pascalListener.prototype.exitBool = function(ctx) {
};


// Enter a parse tree produced by pascalParser#string.
pascalListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by pascalParser#string.
pascalListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by pascalParser#character.
pascalListener.prototype.enterCharacter = function(ctx) {
};

// Exit a parse tree produced by pascalParser#character.
pascalListener.prototype.exitCharacter = function(ctx) {
};


// Enter a parse tree produced by pascalParser#type.
pascalListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by pascalParser#type.
pascalListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by pascalParser#simpleType.
pascalListener.prototype.enterSimpleType = function(ctx) {
};

// Exit a parse tree produced by pascalParser#simpleType.
pascalListener.prototype.exitSimpleType = function(ctx) {
};


// Enter a parse tree produced by pascalParser#scalarType.
pascalListener.prototype.enterScalarType = function(ctx) {
};

// Exit a parse tree produced by pascalParser#scalarType.
pascalListener.prototype.exitScalarType = function(ctx) {
};


// Enter a parse tree produced by pascalParser#subrangeType.
pascalListener.prototype.enterSubrangeType = function(ctx) {
};

// Exit a parse tree produced by pascalParser#subrangeType.
pascalListener.prototype.exitSubrangeType = function(ctx) {
};


// Enter a parse tree produced by pascalParser#typeIdentifier.
pascalListener.prototype.enterTypeIdentifier = function(ctx) {
};

// Exit a parse tree produced by pascalParser#typeIdentifier.
pascalListener.prototype.exitTypeIdentifier = function(ctx) {
};


// Enter a parse tree produced by pascalParser#structuredType.
pascalListener.prototype.enterStructuredType = function(ctx) {
};

// Exit a parse tree produced by pascalParser#structuredType.
pascalListener.prototype.exitStructuredType = function(ctx) {
};


// Enter a parse tree produced by pascalParser#stringtype.
pascalListener.prototype.enterStringtype = function(ctx) {
};

// Exit a parse tree produced by pascalParser#stringtype.
pascalListener.prototype.exitStringtype = function(ctx) {
};


// Enter a parse tree produced by pascalParser#arrayType.
pascalListener.prototype.enterArrayType = function(ctx) {
};

// Exit a parse tree produced by pascalParser#arrayType.
pascalListener.prototype.exitArrayType = function(ctx) {
};


// Enter a parse tree produced by pascalParser#typeList.
pascalListener.prototype.enterTypeList = function(ctx) {
};

// Exit a parse tree produced by pascalParser#typeList.
pascalListener.prototype.exitTypeList = function(ctx) {
};


// Enter a parse tree produced by pascalParser#indexType.
pascalListener.prototype.enterIndexType = function(ctx) {
};

// Exit a parse tree produced by pascalParser#indexType.
pascalListener.prototype.exitIndexType = function(ctx) {
};


// Enter a parse tree produced by pascalParser#componentType.
pascalListener.prototype.enterComponentType = function(ctx) {
};

// Exit a parse tree produced by pascalParser#componentType.
pascalListener.prototype.exitComponentType = function(ctx) {
};


// Enter a parse tree produced by pascalParser#variableDeclarationPart.
pascalListener.prototype.enterVariableDeclarationPart = function(ctx) {
};

// Exit a parse tree produced by pascalParser#variableDeclarationPart.
pascalListener.prototype.exitVariableDeclarationPart = function(ctx) {
};


// Enter a parse tree produced by pascalParser#variableDeclaration.
pascalListener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by pascalParser#variableDeclaration.
pascalListener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by pascalParser#procedureAndFunctionDeclarationPart.
pascalListener.prototype.enterProcedureAndFunctionDeclarationPart = function(ctx) {
};

// Exit a parse tree produced by pascalParser#procedureAndFunctionDeclarationPart.
pascalListener.prototype.exitProcedureAndFunctionDeclarationPart = function(ctx) {
};


// Enter a parse tree produced by pascalParser#procedureOrFunctionDeclaration.
pascalListener.prototype.enterProcedureOrFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by pascalParser#procedureOrFunctionDeclaration.
pascalListener.prototype.exitProcedureOrFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by pascalParser#procedureDeclaration.
pascalListener.prototype.enterProcedureDeclaration = function(ctx) {
};

// Exit a parse tree produced by pascalParser#procedureDeclaration.
pascalListener.prototype.exitProcedureDeclaration = function(ctx) {
};


// Enter a parse tree produced by pascalParser#formalParameterList.
pascalListener.prototype.enterFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by pascalParser#formalParameterList.
pascalListener.prototype.exitFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by pascalParser#formalParameterSection.
pascalListener.prototype.enterFormalParameterSection = function(ctx) {
};

// Exit a parse tree produced by pascalParser#formalParameterSection.
pascalListener.prototype.exitFormalParameterSection = function(ctx) {
};


// Enter a parse tree produced by pascalParser#parameterGroup.
pascalListener.prototype.enterParameterGroup = function(ctx) {
};

// Exit a parse tree produced by pascalParser#parameterGroup.
pascalListener.prototype.exitParameterGroup = function(ctx) {
};


// Enter a parse tree produced by pascalParser#identifierList.
pascalListener.prototype.enterIdentifierList = function(ctx) {
};

// Exit a parse tree produced by pascalParser#identifierList.
pascalListener.prototype.exitIdentifierList = function(ctx) {
};


// Enter a parse tree produced by pascalParser#functionDeclaration.
pascalListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by pascalParser#functionDeclaration.
pascalListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by pascalParser#resultType.
pascalListener.prototype.enterResultType = function(ctx) {
};

// Exit a parse tree produced by pascalParser#resultType.
pascalListener.prototype.exitResultType = function(ctx) {
};


// Enter a parse tree produced by pascalParser#statement.
pascalListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#statement.
pascalListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#simpleStatement.
pascalListener.prototype.enterSimpleStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#simpleStatement.
pascalListener.prototype.exitSimpleStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#ioStatement.
pascalListener.prototype.enterIoStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#ioStatement.
pascalListener.prototype.exitIoStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#readln.
pascalListener.prototype.enterReadln = function(ctx) {
};

// Exit a parse tree produced by pascalParser#readln.
pascalListener.prototype.exitReadln = function(ctx) {
};


// Enter a parse tree produced by pascalParser#writeln.
pascalListener.prototype.enterWriteln = function(ctx) {
};

// Exit a parse tree produced by pascalParser#writeln.
pascalListener.prototype.exitWriteln = function(ctx) {
};


// Enter a parse tree produced by pascalParser#write.
pascalListener.prototype.enterWrite = function(ctx) {
};

// Exit a parse tree produced by pascalParser#write.
pascalListener.prototype.exitWrite = function(ctx) {
};


// Enter a parse tree produced by pascalParser#outputList.
pascalListener.prototype.enterOutputList = function(ctx) {
};

// Exit a parse tree produced by pascalParser#outputList.
pascalListener.prototype.exitOutputList = function(ctx) {
};


// Enter a parse tree produced by pascalParser#assignmentStatement.
pascalListener.prototype.enterAssignmentStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#assignmentStatement.
pascalListener.prototype.exitAssignmentStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#variable.
pascalListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by pascalParser#variable.
pascalListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by pascalParser#expression.
pascalListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by pascalParser#expression.
pascalListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by pascalParser#relationaloperator.
pascalListener.prototype.enterRelationaloperator = function(ctx) {
};

// Exit a parse tree produced by pascalParser#relationaloperator.
pascalListener.prototype.exitRelationaloperator = function(ctx) {
};


// Enter a parse tree produced by pascalParser#simpleExpression.
pascalListener.prototype.enterSimpleExpression = function(ctx) {
};

// Exit a parse tree produced by pascalParser#simpleExpression.
pascalListener.prototype.exitSimpleExpression = function(ctx) {
};


// Enter a parse tree produced by pascalParser#additiveoperator.
pascalListener.prototype.enterAdditiveoperator = function(ctx) {
};

// Exit a parse tree produced by pascalParser#additiveoperator.
pascalListener.prototype.exitAdditiveoperator = function(ctx) {
};


// Enter a parse tree produced by pascalParser#term.
pascalListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by pascalParser#term.
pascalListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by pascalParser#multiplicativeoperator.
pascalListener.prototype.enterMultiplicativeoperator = function(ctx) {
};

// Exit a parse tree produced by pascalParser#multiplicativeoperator.
pascalListener.prototype.exitMultiplicativeoperator = function(ctx) {
};


// Enter a parse tree produced by pascalParser#signedFactor.
pascalListener.prototype.enterSignedFactor = function(ctx) {
};

// Exit a parse tree produced by pascalParser#signedFactor.
pascalListener.prototype.exitSignedFactor = function(ctx) {
};


// Enter a parse tree produced by pascalParser#factor.
pascalListener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by pascalParser#factor.
pascalListener.prototype.exitFactor = function(ctx) {
};


// Enter a parse tree produced by pascalParser#unsignedConstant.
pascalListener.prototype.enterUnsignedConstant = function(ctx) {
};

// Exit a parse tree produced by pascalParser#unsignedConstant.
pascalListener.prototype.exitUnsignedConstant = function(ctx) {
};


// Enter a parse tree produced by pascalParser#functionDesignator.
pascalListener.prototype.enterFunctionDesignator = function(ctx) {
};

// Exit a parse tree produced by pascalParser#functionDesignator.
pascalListener.prototype.exitFunctionDesignator = function(ctx) {
};


// Enter a parse tree produced by pascalParser#parameterList.
pascalListener.prototype.enterParameterList = function(ctx) {
};

// Exit a parse tree produced by pascalParser#parameterList.
pascalListener.prototype.exitParameterList = function(ctx) {
};


// Enter a parse tree produced by pascalParser#procedureStatement.
pascalListener.prototype.enterProcedureStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#procedureStatement.
pascalListener.prototype.exitProcedureStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#actualParameter.
pascalListener.prototype.enterActualParameter = function(ctx) {
};

// Exit a parse tree produced by pascalParser#actualParameter.
pascalListener.prototype.exitActualParameter = function(ctx) {
};


// Enter a parse tree produced by pascalParser#parameterwidth.
pascalListener.prototype.enterParameterwidth = function(ctx) {
};

// Exit a parse tree produced by pascalParser#parameterwidth.
pascalListener.prototype.exitParameterwidth = function(ctx) {
};


// Enter a parse tree produced by pascalParser#emptyStatement.
pascalListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#emptyStatement.
pascalListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#structuredStatement.
pascalListener.prototype.enterStructuredStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#structuredStatement.
pascalListener.prototype.exitStructuredStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#compoundStatement.
pascalListener.prototype.enterCompoundStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#compoundStatement.
pascalListener.prototype.exitCompoundStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#statements.
pascalListener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by pascalParser#statements.
pascalListener.prototype.exitStatements = function(ctx) {
};


// Enter a parse tree produced by pascalParser#conditionalStatement.
pascalListener.prototype.enterConditionalStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#conditionalStatement.
pascalListener.prototype.exitConditionalStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#ifStatement.
pascalListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#ifStatement.
pascalListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#repetetiveStatement.
pascalListener.prototype.enterRepetetiveStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#repetetiveStatement.
pascalListener.prototype.exitRepetetiveStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#whileStatement.
pascalListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#whileStatement.
pascalListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#forStatement.
pascalListener.prototype.enterForStatement = function(ctx) {
};

// Exit a parse tree produced by pascalParser#forStatement.
pascalListener.prototype.exitForStatement = function(ctx) {
};


// Enter a parse tree produced by pascalParser#forList.
pascalListener.prototype.enterForList = function(ctx) {
};

// Exit a parse tree produced by pascalParser#forList.
pascalListener.prototype.exitForList = function(ctx) {
};


// Enter a parse tree produced by pascalParser#initialValue.
pascalListener.prototype.enterInitialValue = function(ctx) {
};

// Exit a parse tree produced by pascalParser#initialValue.
pascalListener.prototype.exitInitialValue = function(ctx) {
};


// Enter a parse tree produced by pascalParser#finalValue.
pascalListener.prototype.enterFinalValue = function(ctx) {
};

// Exit a parse tree produced by pascalParser#finalValue.
pascalListener.prototype.exitFinalValue = function(ctx) {
};



exports.pascalListener = pascalListener;