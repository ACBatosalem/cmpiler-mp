var antlr4 = require('antlr4/index.js');
var PascalVisitor = require("../grammar/pascalVisitor.js");
const SymbolTable = require('../symbol-table/SymbolTable.js');
const VariableSymbol = require('../symbol-table/VariableSymbol');
const ProcedureSymbol = require('../symbol-table/ProcedureSymbol');
const FunctionSymbol = require('../symbol-table/FunctionSymbol');

var KEYWORDS = [
	'AND',
	'ARRAY',
	'BEGIN',
	'BOOLEAN',
	'CASE',
	'CHAR',
	'CHR',
	'CONST',
	'DIV',
	'DO',
	'DOWNTO',
	'ELSE',
	'END',
	'FILE',
	'FOR',
	'FUNCTION',
	'GOTO',
	'IF',
	'IN',
	'INTEGER',
	'LABEL',
	'MOD',
	'NIL',
	'NOT',
	'OF',
	'OR',
	'PACKED',
	'PROCEDURE',
	'PROGRAM',
	'READLIN',
	'REAL',
	'RECORD',
	'REPEAT',
	'SET',
	'STRING',
	'THEN',
	'TO',
	'TYPE',
	'UNTIL',
	'VAR',
	'WHILE',
	'WITH',
	'WRITE',
	'WRITELN'
];

var visitor = function() {
    PascalVisitor.pascalVisitor.call(this); // chain the constructor
    this.ctr = 0;
    this.scope = null;
  };

// chaining the prototypes
visitor.prototype = Object.create(PascalVisitor.pascalVisitor.prototype);

visitor.prototype.visitProgram = function(ctx) {
    this.scope = new SymbolTable('global', 1, this.scope);
    this.visit(ctx.block());
    console.log(this.scope.toString())
    this.scope = this.scope.enclosingScope;
    
  };

visitor.prototype.visitBlock = function(ctx) {
  this.visit(ctx.declarations())
  this.visit(ctx.compoundStatement())
};

visitor.prototype.visitDeclarations = function(ctx) {
  return this.visitChildren(ctx);
};

visitor.prototype.visitCompoundStatement = function(ctx) {
  return this.visitChildren(ctx);
};

visitor.prototype.visitType = function(ctx) {
  if(ctx.getChild(0).constructor.name === "SimpleTypeContext") {
    return ctx.getText();
  } else {
    var x = this.visit(ctx.structuredType().arrayType());
    return x
  }
};

visitor.prototype.visitIdentifier = function(ctx) {
  return ctx.getText();
};

visitor.prototype.visitTypeIdentifier = function(ctx) {
  return ctx.getText();
};

visitor.prototype.visitVariable = function(ctx) {
  var varName = this.visit(ctx.identifier());
  var varSymbol = this.scope.lookup(varName + '');
  return varSymbol
};

visitor.prototype.visitVariableDeclaration = function(ctx) {
  //console.log("var")
  var variables = this.visit(ctx.identifierList())
  //console.log(variables)
  var type = this.visit(ctx.type())
  //console.log(type)

  var varType = type.type != undefined? type.type : type
  
    const typeSymbol = this.scope.lookup(varType.toUpperCase());
    for(x in variables) {
      var varName = variables[x]
      //console.log(this.scope.lookup(varName, true))
      if(this.scope.lookup(varName, true))
        throw new Error(`Duplicate declaration of ${varName}`);
        //console.log("error: duplicate")
      else if(type.indices == undefined){
        var varSymbol = new VariableSymbol(varName, typeSymbol);
        this.scope.define(varSymbol)
      } else {
        var arrSymbol = new ArraySymbol(varName, typeSymbol
          ,parseInt(type.indices[0]),parseInt(type.indices[1]));
        this.scope.define(arrSymbol)
      }
    }

  return 
};

visitor.prototype.visitIdentifierList = function(ctx) {
  var variables =[];
  for(var i = 0; i < ctx.getChildCount(); i+=2) {
    var temp = ctx.getChild(i).getText()
    variables.push(temp)
  }
  
  return variables;
};


visitor.prototype.visitProcedureDeclaration = function(ctx) {
  var procedureName = this.visit(ctx.identifier())
  var procedureSymbol = new ProcedureSymbol(procedureName)

  this.scope.define(procedureSymbol)
  this.scope = new SymbolTable(procedureName, 
    this.scope.scopeLevel+1, this.scope)

  //insert parameters chuchu
  var parameters = this.visit(ctx.formalParameterList())
  procedureSymbol.params = parameters
  this.visit(ctx.block())
  console.log(this.scope.toString())
  this.scope = this.scope.enclosingScope;

};

visitor.prototype.visitFormalParameterList = function(ctx) {
  var parameters = []
  for(var i = 1; i < ctx.getChildCount(); i+=2) {
    parameters.push(this.visit(ctx.getChild(i))[0])
  }
  return parameters
}

visitor.prototype.visitFunctionDeclaration = function(ctx) {
  var funcName = this.visit(ctx.identifier())
  var funcReturn = this.visit(ctx.resultType().typeIdentifier())
  var funcSymbol = new FunctionSymbol(funcName, this.scope.lookup(funcReturn.toUpperCase()))

  this.scope.define(funcSymbol)
  this.scope = new SymbolTable(funcName, 
    this.scope.scopeLevel+1, this.scope)

  //insert parameters chuchu
  var parameters = this.visit(ctx.formalParameterList())
  funcSymbol.params = parameters
  this.visit(ctx.block())
  console.log(this.scope.toString())
  this.scope = this.scope.enclosingScope;

};

visitor.prototype.visitFormalParameterSection = function(ctx) {
  return this.visit(ctx.parameterGroup())
}

visitor.prototype.visitParameterGroup = function(ctx) {
  var variables = this.visit(ctx.identifierList())
  //console.log(variables)
  var type = this.visit(ctx.typeIdentifier())
  //console.log(type)
  var parameters =[]
  const typeSymbol = this.scope.lookup(type.toUpperCase());
  for(x in variables) {
    var varName = variables[x]
    //console.log(this.scope.lookup(varName, true))
    if(this.scope.lookup(varName, true))
      throw new Error(`Duplicate declaration of ${varName}`);
      // console.log("error: duplicate")
    else {
      var varSymbol = new VariableSymbol(varName, typeSymbol);
      this.scope.define(varSymbol)
      parameters.push(varSymbol)
    }
  }
  return parameters
};

visitor.prototype.visitConstantDefinition = function(ctx) {
  var constName = this.visit(ctx.identifier())
  if(this.scope.lookup(constName, true))
      throw new Error(`Duplicate declaration of ${constName}`);
  var typeSymbol
  var value = ctx.getChild(2).getText()
  if(value.includes('\'')) {
    console.log("string" + value.length)
    if(value.length == 3)
      typeSymbol = this.scope.lookup("CHAR");
    else
      typeSymbol = this.scope.lookup("STRING");
  } else if(!isNaN(value)) {
    typeSymbol = this.scope.lookup("INTEGER");
  } else {
    typeSymbol = this.scope.lookup("BOOLEAN");
  }

  
  var varSymbol = new VariableSymbol(constName, typeSymbol, true, value);
  this.scope.define(varSymbol)
};

visitor.prototype.visitAssignmentStatement = function(ctx) {
  var varSymbol = this.visit(ctx.variable())
  var funcName = this.scope.scopeName
  //console.log(varSymbol)
  //console.log(this.scope.scopeName)

  var value = this.visit(ctx.expression().simpleExpression()).toString().split(",")
  var isReturn = this.scope.scopeName===varSymbol.name?true:false

  varSymbol.value = value

  if(isReturn)
    return value;
};

visitor.prototype.visitSimpleExpression = function(ctx) {
  var values = []
  for(var i = 0; i < ctx.getChildCount(); i+=2) {
    var temp = this.visit(ctx.getChild(i))
    values.push(temp)
  }
  return values
};

visitor.prototype.visitTerm = function(ctx) {
  var values = []
  for(var i = 0; i < ctx.getChildCount(); i+=2) {
    var temp = this.visit(ctx.getChild(i))
    values.push(temp)
  }
  return values
};

visitor.prototype.visitAdditiveoperator = function(ctx){};
visitor.prototype.visitMultiplicativeoperator = function(ctx){};

visitor.prototype.visitSignedFactor = function(ctx){
  return this.visit(ctx.factor())
};

visitor.prototype.visitFactor = function(ctx){
  if(ctx.getChildCount() == 1)
    return ctx.getText()
  else
    return this.visit(ctx.expression())
};

exports.interpreterVisitor = visitor;