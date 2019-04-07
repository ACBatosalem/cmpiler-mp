var antlr4 = require('antlr4/index.js');
var PascalVisitor = require("../grammar/pascalVisitor.js");
const SymbolTable = require('../symbol-table/SymbolTable.js');
const VariableSymbol = require('../symbol-table/VariableSymbol');
const ProcedureSymbol = require('../symbol-table/ProcedureSymbol');
const FunctionSymbol = require('../symbol-table/FunctionSymbol');

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
  return ctx.getText();
};

visitor.prototype.visitIdentifier = function(ctx) {
  return ctx.getText();
};

visitor.prototype.visitTypeIdentifier = function(ctx) {
  return ctx.getText();
};

visitor.prototype.visitVariable = function(ctx) {
  return ctx.getText();
};

visitor.prototype.visitVariableDeclaration = function(ctx) {
  //console.log("var")
  var variables = this.visit(ctx.identifierList())
  //console.log(variables)
  var type = this.visit(ctx.type())
  //console.log(type)

  const typeSymbol = this.scope.lookup(type.toUpperCase());
  for(x in variables) {
    var varName = variables[x]
    //console.log(this.scope.lookup(varName, true))
    if(this.scope.lookup(varName, true))
      throw new Error(`Duplicate declaration of ${varName}`);
      //console.log("error: duplicate")
    else {
      var varSymbol = new VariableSymbol(varName, typeSymbol);
      this.scope.define(varSymbol)
    }
  }

  return 
};

visitor.prototype.visitIdentifierList = function(ctx) {
  var variables =[];
  for(var i = 0; i < ctx.getChildCount(); i+=2) {
    var temp = ctx.getChild(i).getText()
    //insert checking if reserved word
    if(temp != undefined)
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
  this.visit(ctx.formalParameterList())
  this.visit(ctx.block())
  console.log(this.scope.toString())
  this.scope = this.scope.enclosingScope;

};

visitor.prototype.visitFunctionDeclaration = function(ctx) {
  var funcName = this.visit(ctx.identifier())
  var funcReturn = this.visit(ctx.resultType())
  var funcSymbol = new FunctionSymbol(funcName, funcReturn)

  this.scope.define(funcSymbol)
  this.scope = new SymbolTable(funcName, 
    this.scope.scopeLevel+1, this.scope)

  //insert parameters chuchu
  this.visit(ctx.formalParameterList())
  this.visit(ctx.block())
  console.log(this.scope.toString())
  this.scope = this.scope.enclosingScope;

};

visitor.prototype.visitParameterGroup = function(ctx) {
  var variables = this.visit(ctx.identifierList())
  //console.log(variables)
  var type = this.visit(ctx.typeIdentifier())
  //console.log(type)

  const typeSymbol = this.scope.lookup(type.toUpperCase());
  for(x in variables) {
    var varName = variables[x]
    //console.log(this.scope.lookup(varName, true))
    if(this.scope.lookup(varName, true))
      //throw new Error(`Duplicate declaration of ${varName}`);
      console.log("error: duplicate")
    else {
      var varSymbol = new VariableSymbol(varName, typeSymbol);
      this.scope.define(varSymbol)
    }
  }
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
  var varName = this.visit(ctx.variable())
  var varSymbol = this.scope.lookup(varName)
  if(!varSymbol) {
      throw new Error(`Variable not declared ${varName}`);
  }
  var value = this.visit(ctx.expression().simpleExpression()).toString().split(",")
  var varType = varSymbol.type.name
  //console.log(value)
  //console.log(value.toString())
  for(x in value) {
    var temp = value[x]
    if(temp.includes('\'')) {
      if(temp.length == 3)
        if(varType !== 'STRING' && varType !== 'CHAR')
          throw new Error(`Data type mismatch: Can't assign ${temp} to non-char/string variable`);
      else
        if(varType !== 'STRING')
          throw new Error(`Data type mismatch: Can't assign ${temp} to non-string variable`);
    } else if(!isNaN(temp)) {
      if(varType !== 'INTEGER')
        throw new Error(`Data type mismatch: Can't assign ${temp} to non-int variable`);
    } else if(temp == true || temp == false){
      if(varType !== 'BOOLEAN')
        throw new Error(`Data type mismatch: Can't assign ${temp} to non-boolean variable`);
    } else {
      var varTemp = this.scope.lookup(temp)
      if(!varTemp)
          throw new Error(`Variable not declared ${temp}`);
      if(varType !== varTemp.type.name)
      throw new Error(`Data type mismatch: ${varName} and ${temp}`);

    }
  }
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

exports.pascalVisitorImpl = visitor;