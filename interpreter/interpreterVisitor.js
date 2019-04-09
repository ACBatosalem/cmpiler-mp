var antlr4 = require('antlr4/index.js');
var PascalVisitor = require("../grammar/pascalVisitor.js");
const SymbolTable = require('../symbol-table/SymbolTable.js');
const VariableSymbol = require('../symbol-table/VariableSymbol');
const ProcedureSymbol = require('../symbol-table/ProcedureSymbol');
const FunctionSymbol = require('../symbol-table/FunctionSymbol');
const ArraySymbol = require('../symbol-table/ArraySymbol');
var readlineSync = require('readline-sync');

var symbolTables = new Map();
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
    symbolTables.set('global', this.scope)
    this.visit(ctx.block());
   //console.log(this.scope.toString())
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
  var varSymbol = this.scope.lookup(varName+"");
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
     //console.log(varType + " " + typeSymbol + " " + varName);
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
  symbolTables.set(procedureName, this.scope)
  //insert parameters chuchu
  try {
    var parameters = this.visit(ctx.formalParameterList())
    funcSymbol.params = parameters
  } catch(e){}
  procedureSymbol.ctx = ctx.block()
  //this.visit()
  this.scope = this.scope.enclosingScope;
};

visitor.prototype.visitFormalParameterList = function(ctx) {
  var parameters = []
  if(ctx.getChildCount() != 2)
    for(var i = 1; i < ctx.getChildCount(); i+=2) {
      var temp = this.visit(ctx.getChild(i))
      if(Array.isArray(temp)) {
        for (var x in temp)
          parameters.push(temp[x])
      }
      else
        parameters.push(temp)
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

  try {
    var parameters = this.visit(ctx.formalParameterList())
    funcSymbol.params = parameters
    //console.log(this.scope.toString())
  } catch(e){}
  symbolTables.set(funcName, this.scope)

  funcSymbol.ctx = ctx.block()
  //this.visit()
 //console.log(this.scope.toString())
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
      //console.log("error: duplicate")
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
   //console.log("string" + value.length)
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
  //include assignment for array type
  var varSymbol = this.visit(ctx.variable())
  var funcName = this.scope.scopeName
  //console.log(varSymbol)
  //console.log(this.scope.scopeName)

  var value = this.visit(ctx.expression())
  var isReturn = this.scope.scopeName===varSymbol.name?true:false

  varSymbol.value = value

  if(isReturn)
    return value;
};

visitor.prototype.visitExpression = function(ctx) {
  if(ctx.getChildCount() == 1)
    return this.visit(ctx.simpleExpression())
  
  var operation = this.visit(ctx.relationaloperator())
  var operand1 = this.visit(ctx.simpleExpression())
  var operand2 = this.visit(ctx.expression())

  if(operation === "=")
    return operand1 == operand2
  else if (operation === "<>")
    return operand1 != operand2
  else if (operation === "<")
    return operand1 < operand2
  else if (operation === ">")
    return operand1 > operand2
  else if (operation === "<=")
    return operand1 <= operand2
  else if (operation === ">=")
    return operand1 >= operand2
  
};

visitor.prototype.visitRelationaloperator = function(ctx){
  return ctx.getText()
};

visitor.prototype.visitSimpleExpression = function(ctx) {
  if(ctx.getChildCount() == 1)
    return this.visit(ctx.term())

  
  var operation = this.visit(ctx.additiveoperator())
  var operand1 = this.visit(ctx.term())
  var operand2 = this.visit(ctx.simpleExpression())
  if(operation === "+")
    return operand1 + operand2
  else if (operation === "-")
    return operand1 - operand2
  else if (operation.toUpperCase() === "OR"){
    if(typeof operand1 === 'boolean' && typeof operand2 === 'boolean')
      return operand1 || operand2
  }
};

visitor.prototype.visitTerm = function(ctx) {
  if(ctx.getChildCount() == 1)
    return this.visit(ctx.signedFactor())

  
  var operation = this.visit(ctx.multiplicativeoperator())
  var operand1 = this.visit(ctx.signedFactor())
  var operand2 = this.visit(ctx.term())
  if(operation === "*")
    return operand1 * operand2
  else if (operation.toUpperCase() === "DIV")
    return operand1 / operand2
  else if (operation.toUpperCase() === "MOD")
    return operand1 % operand2
  else if (operation.toUpperCase() === "AND"){
    if(typeof operand1 === 'boolean' && typeof operand2 === 'boolean')
      return operand1 && operand2
  }
};

visitor.prototype.visitAdditiveoperator = function(ctx){
  return ctx.getText()
};
visitor.prototype.visitMultiplicativeoperator = function(ctx){
  return ctx.getText()
};

visitor.prototype.visitSignedFactor = function(ctx){
  if(ctx.getChildCount() == 2)
    if(ctx.getChild(0).getText() === "-"){
      
      var line = ctx.start.line;
      var factor = this.visit(ctx.factor())
      if(Number.isNaN(factor))
        throw new Error(`Cannot negate a non-number at line ${line}`)
      else return factor

    }
  return this.visit(ctx.factor())  
};

visitor.prototype.visitFactor = function(ctx){
  // insert operation for NOT
  if(ctx.getChild(0).constructor.name === "TerminalNodeImpl"
  && ctx.getChildCount() == 2){
    var temp = this.visit(ctx.factor())
    if(typeof temp === 'boolean')
      return !temp
    else temp 
    // not sure if error ba dapat to
  }if(ctx.getChild(0).constructor.name === "FunctionDesignatorContext")
    return this.visit(ctx.functionDesignator())
  if(ctx.getChild(0).constructor.name === "UnsignedConstantContext"
  || ctx.getChild(0).constructor.name === "BoolContext"){
    var txt = ctx.getText().replace(/\'/g,'')

    return isNaN(txt)?txt:parseInt(txt)
  }if(ctx.getChild(0).constructor.name === "VariableContext"){
    var variable = this.visit(ctx.variable())
    return variable.type.name === "INTEGER"
    ? parseInt(variable.value) : variable.value
  }
  
  else {
    //console.log("OOF")
    return this.visit(ctx.expression())
  }
};



visitor.prototype.visitWriteln = function(ctx){
  if(ctx.getChildCount() == 1 || ctx.getChildCount() == 3)
  process.stdout.write("\n")
  else {
    //console.log("WRITELN")
    
    
    process.stdout.write(this.visit(ctx.outputList())+"\n");
  }
};

visitor.prototype.visitWrite = function(ctx){
  //para no newline
  if(ctx.getChildCount() == 1 || ctx.getChildCount() == 3)
    process.stdout.write("")
  else {
    //console.log("WRITE")
    process.stdout.write(this.visit(ctx.outputList()));
  }
};

visitor.prototype.visitOutputList = function(ctx){

  var msg = ""
  for(var i = 0; i < ctx.getChildCount(); i+=2) {
    var temp = this.visit(ctx.getChild(i))
    msg += temp.toString().replace(/\'/g,'')
  }
  return msg
};

visitor.prototype.visitConstant = function(ctx) {
 //console.log("here")
  if(ctx.getChild(0).constructor.name == "ExpressionContext")
    return this.visit(ctx.expression())
  if(ctx.getChild(0).constructor.name == "VariableContext") {
    var txt = this.visit(ctx.variable())
    //console.log(txt)
    //var varSymbol = 
    return txt.value
  } 
  if(ctx.getChild(0).constructor.name == "FunctionDesignatorContext")
    return this.visit(ctx.functionDesignator())
  if(ctx.getChild(0).constructor.name == "SignContext"){
    // negate chuchu
  } 
  else return ctx.getText()
};

visitor.prototype.visitReadln = function(ctx){
  var variables = this.visit(ctx.identifierList())
  var line = ctx.start.line;
  var error
  var errorMessage = ''
  for(var x in variables) {
    var varSymbol = this.scope.lookup(variables[x] + '');
    var temp = readlineSync.question('')
    var varType = varSymbol.type.name
    if(temp.includes('\'')) {
      if(temp.length == 3) {
        if(varType !== 'STRING' && varType !== 'CHAR') {
            error = true
            errorMessage = `Data type mismatch: Can't assign ${temp} to non-char/string variable at line ${line}`
        }
      } else {
        if(varType !== 'STRING') {
            error = true
            errorMessage = `Data type mismatch: Can't assign ${temp} to non-string variable at line ${line}`
        }
      }
    } else if(!isNaN(temp)) {
      if(varType !== 'INTEGER') {
        error = true
        errorMessage = `Data type mismatch: Can't assign ${temp} to non-int variable at line ${line}`
      }
    } else if(temp == true || temp == false || temp == 'true' || temp == 'false'){
      if(varType !== 'BOOLEAN') {
        error = true
        errorMessage = `Data type mismatch: Can't assign ${temp} to non-boolean variable at line ${line}`
      }
    }

    if(error)
      throw new Error(errorMessage)
    else varSymbol.value = temp
  }
  // loop through all and lookup symbol of each variable
  //https://flaviocopes.com/node-input-from-cli/ -> use for input
  // check if match yung data types 
  // (look at visitConstant for reference sa checking ng input)

};

visitor.prototype.visitFunctionDesignator = function(ctx){
  for(var i = 0; i < ctx.getChildCount(); i++) {
   //console.log(`function designator ${ctx.getChild(i).getText()}`);
  }

  var funcName = ctx.getChild(0).getText();
  var params = this.visit(ctx.parameterList())[0]
  var funcSymbol = this.scope.lookup(funcName);

  var funcParams = funcSymbol.params;
  for(var i = 0; i < funcParams.length; i++) {
    params[i] = this.scope.lookup(params[i]);
    if(!params[i]) {
      funcParams[i].value = params[i]
    } else funcParams[i].value = params[i].value;
  }
  this.scope = symbolTables.get(funcName)
  this.visit(funcSymbol.ctx);
  this.scope = this.scope.enclosingScope
  var returnVal = this.scope.lookup(funcName);
  
  if(returnVal) {
   // console.log(`Return ${returnVal.value}`);
    return returnVal.value;
  }
  
};

visitor.prototype.visitProcedureStatement = function(ctx){
  var procName = ctx.getChild(0).getText();
  var params = this.visit(ctx.parameterList())[0]
  var procSymbol = this.scope.lookup(procName);

  if(!procSymbol) {
    var line = ctx.start.line;
    throw new Error(`Variable not declared '${procName}' at line ${line}`);
  }

  var procParams = procSymbol.getParams();

  for(var i = 0; i < procParams.length; i++) {
    params[i] = this.scope.lookup(params[i]);
    
    if(!params[i]) {
      procParams[i].value = params[i]
    } else procParams[i].value = params[i].value;
  }
  this.scope = symbolTables.get(procName)
  this.visit(procSymbol.ctx);
  this.scope = this.scope.enclosingScope
};

visitor.prototype.visitForStatement = function(ctx){
  var id = this.scope.lookup(ctx.identifier().getText());
  varSymbol = this.scope.lookup(id.name);
  
  if(!varSymbol) {
    var line = ctx.start.line;
    throw new Error(`Variable not declared '${varName}' at line ${line}`);
  }

  var startIndex = parseInt(ctx.getChild(3).getChild(0).getText());
  var direction = ctx.getChild(3).getChild(1).getText().toUpperCase();
  var endIndex = parseInt(ctx.getChild(3).getChild(2).getText());
  if(!isNaN(startIndex) && !isNaN(endIndex)) {
    if(startIndex <= endIndex && direction === "TO") {
      for(var i = startIndex; i < endIndex; i++) {
        // execute statements
        varSymbol.value = i;
        this.visit(ctx.statement());
      }

      varSymbol.value = endIndex;
    } else if(startIndex >= endIndex && direction === "DOWNTO") {
      for(var i = startIndex; i > endIndex; i--) {
        // execute statements
        varSymbol.value = i;
        this.visit(ctx.statement());
      }

      varSymbol.value = startIndex;
    }else {
      var line = ctx.start.line;
      throw new Error(`Index out of bounds ${startIndex} at line ${line}`);
    }
  } else {
    var line = ctx.start.line;
    throw new Error(`Starting and/or ending index should be an integer at line ${line}`);
  }
};

visitor.prototype.visitIfStatement = function(ctx){
  var hasElse = false;

  if(ctx.getChildCount() > 4)
    hasElse = true;

  var result = this.visit(ctx.expression());

  if(result) {
    this.visit(ctx.getChild(3));
  } else if(hasElse) {
    this.visit(ctx.getChild(5));
  }
};

visitor.prototype.visitUnsignedNumber = function(ctx) {
  return parseInt(ctx.getText())
}

visitor.prototype.visitParameterList = function(ctx) {
  var variables =[];
  for(var i = 0; i < ctx.getChildCount(); i+=2) {
    var temp = ctx.getChild(i).getText()
      variables.push(temp)
  }

  return variables
}

visitor.prototype.visitArrayType = function(ctx) {

  var indices = this.visit(ctx.typeList())
  var type = this.visit(ctx.componentType());
  return {"type":type, "indices":indices}

};

visitor.prototype.visitTypeList = function(ctx) {
  var indices = ctx.getText().split("..");
  return indices;
};

// Visit a parse tree produced by pascalParser#componentType.
visitor.prototype.visitComponentType = function(ctx) {
  // TODO error for non-integer arrays
  if(ctx.getText().toUpperCase() !== "INTEGER") {
    var line = ctx.start.line;
    throw new Error(`Cannot instantiate a non-integer array at line ${line}`);
  }

  return ctx.getText();
};

exports.interpreterVisitor = visitor;