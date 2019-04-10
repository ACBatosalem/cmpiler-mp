var antlr4 = require('antlr4/index.js');
var PascalVisitor = require("../grammar/pascalVisitor.js");
const SymbolTable = require('../symbol-table/SymbolTable.js');
const VariableSymbol = require('../symbol-table/VariableSymbol');
const ProcedureSymbol = require('../symbol-table/ProcedureSymbol');
const FunctionSymbol = require('../symbol-table/FunctionSymbol');
const ArraySymbol = require('../symbol-table/ArraySymbol');

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
   // console.log(this.scope.toString())
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
  if(!varSymbol) {
    var line = ctx.start.line;
    throw new Error(`Variable not declared '${varName}' at line ${line}`);
  }
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
      if(this.scope.lookup(varName, true)) {
        var line = ctx.start.line;
        throw new Error(`Duplicate declaration of '${varName}' at line ${line}`);
        //console.log("error: duplicate")
      }
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
  var isReserved = false;
  for(var i = 0; i < ctx.getChildCount(); i+=2) {
    var temp = ctx.getChild(i).getText()

    isReserved = KEYWORDS.includes(temp.toString());

    //insert checking if reserved word
    if(temp != undefined && !isReserved)
      variables.push(temp)

    if(isReserved) {
      var line = ctx.start.line;
      throw new Error("SEMANTIC ERROR Keyword error: cannot use reserved keyword " + temp + " as an identifier at line " + line);
    }
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
  try {
  var parameters = this.visit(ctx.formalParameterList())
  //console.log(parameters)
  procedureSymbol.params = parameters
  } catch(e) {}
  this.visit(ctx.block())
 // console.log(this.scope.toString())
  this.scope = this.scope.enclosingScope;

};

visitor.prototype.visitFormalParameterList = function(ctx) {
  var parameters = []
 // console.log(this.scope.scopeName)
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
  //console.log(funcName)
  //insert parameters chuchu
  try {
    var parameters = this.visit(ctx.formalParameterList())
    funcSymbol.params = parameters
  } catch(e){}
  this.visit(ctx.block())
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
    if(this.scope.lookup(varName, true)) {
      var line = ctx.start.line;
      throw new Error(`Duplicate declaration of '${varName}' at line ${line}`);
      // console.log("error: duplicate")
    }
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
  if(this.scope.lookup(constName, true)) {
    var line = ctx.start.line;
    throw new Error(`Duplicate declaration of '${constName}' at line ${line}`);
  }
      
  var typeSymbol
  var value = ctx.getChild(2).getText()
  if(value.includes('\'')) {
    // console.log("string" + value.length)
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
  if(varSymbol.isConstant != undefined)
    if(varSymbol.isConstant) {
      var line = ctx.start.line;
      throw new Error(`Cannot assign to constant variable at line ${line}`)
    }
  if(varSymbol.type == undefined) {
    var line = ctx.start.line;
    throw new Error(`Procedure does not return a value at line ${line}`)
  }
  var value = this.visit(ctx.expression()).toString().split(",")
  
  // console.log("AYAW")
  // console.log(value)

  var isReturn = this.scope.scopeName===varSymbol.name?true:false
  var error = false
  var varType = varSymbol.type.name
  var errorMessage

  for(x in value) {
    var temp = value[x]
    var line = ctx.start.line;
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
    } else {
      var varTemp = this.scope.lookup(temp)
      if(!varTemp) {
        error = true
        errorMessage = `!!Variable not declared ${temp} at line ${line}`
      } if(varType === 'STRING' && varTemp.type.name === 'CHAR'){}
      else if(varType !== varTemp.type.name){
        error = true
        errorMessage = `Data type mismatch: ${varSymbol.name} and ${temp} at line ${line}`
      }

    }
    if(error) {
        if(isReturn)
            throw new Error(`Return type mismatch: function ${funcName} at line ${line}`)
        throw new Error(errorMessage)
    }
  }
};

visitor.prototype.visitExpression = function(ctx) {
  if(ctx.getChildCount() == 1)
    return this.visit(ctx.simpleExpression())
  else {
    var firstSet = this.visit(ctx.getChild(0)).toString().split(",")
    
    var line = ctx.start.line;
    var firstFactor = firstSet[0]
    var dataType = ''
    if(firstFactor.includes('\''))
      dataType = "STRING"
    else if(!isNaN(firstFactor))
      dataType = "INTEGER"
    else if(firstFactor == true || firstFactor == false 
      || firstFactor == 'true' || firstFactor == 'false')
      dataType = "BOOLEAN"
    else {
      var varTemp = this.scope.lookup(firstFactor)
      if(!varTemp) {
        error = true
        throw new Error(`!!Variable not declared ${firstFactor} at line ${line}`)
      }
      dataType = varTemp.type.name
    }
    
    for(var i = 1; i < firstSet.length; i++) {
      var temp = firstSet[i]
      if(temp.includes('\'')) {
        if(dataType !== "STRING" && dataType !== "CHAR")
          throw new Error(`!Expecting ${dataType} but got a string at line ${line}`)
      } else if(!isNaN(temp)) {
        if(dataType !== "INTEGER")
          throw new Error(`Expecting ${dataType} but got an integer at line ${line}`)
      } else if(temp == true || temp == false 
        || temp == 'true' || temp == 'false') {
        if(dataType !== "BOOLEAN")
        throw new Error(`Expecting ${dataType} but got a boolean at line ${line}`)
      } else {
        var varTemp = this.scope.lookup(temp)
        if(!varTemp) {
          error = true
          throw new Error(`!!Variable not declared ${temp} at line ${line}`)
        }
        else if(dataType !== varTemp.type.name){
          throw new Error(`Expecting ${dataType} but got a ${varTemp.type.name} at line ${line}`)
        }
      }
    }
    for(var x = 2; x <ctx.getChildCount(); x+=2){
      var secondSet = this.visit(ctx.getChild(x)).toString().split(",")
      for(var i = 0; i < secondSet.length; i++) {
        var temp = secondSet[i]
        if(temp.includes('\'')) {
          if(dataType !== "STRING" && dataType !== "CHAR")
            throw new Error(`Expecting ${dataType} but got a string at line ${line}`)
        } else if(!isNaN(temp)) {
          if(dataType !== "INTEGER")
            throw new Error(`Expecting ${dataType} but got an integer at line ${line}`)
        } else if(temp == true || temp == false 
          || temp == 'true' || temp == 'false') {
          if(dataType !== "BOOLEAN")
          throw new Error(`Expecting ${dataType} but got a boolean at line ${line}`)
        } else {
          var varTemp = this.scope.lookup(temp)
          if(!varTemp) {
            error = true
            throw new Error(`!!Variable not declared ${temp} at line ${line}`)
          }
          else if(dataType !== varTemp.type.name){
            error = true
            throw new Error(`Expecting ${dataType} but got a ${varTemp.type.name} at line ${line}`)
          }
        }
      }
    }

      return true
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
  if(ctx.getChild(0).constructor.name === "TerminalNodeImpl"
  && ctx.getChildCount() == 2)
    return this.visit(ctx.factor())
  if(ctx.getChild(0).constructor.name === "FunctionDesignatorContext")
    return this.visit(ctx.functionDesignator())
  if(ctx.getChild(0).constructor.name === "VariableContext")
    return this.visit(ctx.variable()).name
  if(ctx.getChildCount() == 1)
    return ctx.getText()
  else
    return this.visit(ctx.expression())
};

visitor.prototype.visitFunctionDesignator = function(ctx) {
  var func = this.visit(ctx.variable())
  var funcParams = func.params
  var parameters = this.visit(ctx.parameterList())[0]
  if(parameters == undefined)
    parameters = []
  // console.log("GRRR")

  // console.log(funcParams)
  // console.log("GRRR!!!")
  // console.log(parameters)
  var error = false
  if(funcParams.length != parameters.length) {
    var line = ctx.start.line;
    throw new Error (`ERROR: parameter length does not match at line ${line}`);
  }

  for(x in parameters) {
    var temp = parameters[x]
    var varType = funcParams[x].type.name
    var line = ctx.start.line;
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
    } else if(temp == true || temp == false){
      if(varType !== 'BOOLEAN') {
        error = true
        errorMessage = `Data type mismatch: Can't assign ${temp} to non-boolean variable at line ${line}`
      }
    } else {
      var varTemp = this.scope.lookup(temp)
      if(!varTemp) {
        error = true
        errorMessage = `!!Variable not declared ${temp} at line ${line}`
      }
      else if(varType !== varTemp.type.name){
        error = true
        errorMessage = `!!Data type mismatch: ${funcParams[x].name} and ${temp} at line ${line}`
      }

    }
    if(error) 
      throw new Error(errorMessage)
  }
  
  return func.name;
};

visitor.prototype.visitProcedureStatement = function(ctx) {
  var proc = this.visit(ctx.variable())
  var procParams = proc.params
  var parameters = this.visit(ctx.parameterList())[0]
  if(parameters == undefined)
    parameters = []
  // console.log("GRRR")

  // console.log(procParams)
  // console.log("GRRR!!!")
  // console.log(parameters)
  var error = false
  if(procParams.length != parameters.length) {
    var line = ctx.start.line;
    throw new Error (`ERROR: parameter length does not match at line ${line}`);
  }

  for(x in parameters) {
    var temp = parameters[x]
    var varType = procParams[x].type.name
    var line = ctx.start.line;
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
    } else if(temp == true || temp == false){
      if(varType !== 'BOOLEAN') {
        error = true
        errorMessage = `Data type mismatch: Can't assign ${temp} to non-boolean variable at line ${line}`
      }
    } else {
      var varTemp = this.scope.lookup(temp)
      if(!varTemp) {
        error = true
        errorMessage = `Variable not declared ${temp} at line ${line}`
      }
      else if(varType !== varTemp.type.name){
        error = true
        errorMessage = `Data type mismatch: ${procParams[x].name} and ${temp} at line ${line}`
      }

    }
    if(error) 
      throw new Error(errorMessage)
  }
  
  return proc.name;
};

visitor.prototype.visitParameterList = function(ctx) {
  var variables =[];
  var isReserved = false;
  for(var i = 0; i < ctx.getChildCount(); i+=2) {
    var temp = ctx.getChild(i).getText()

    isReserved = KEYWORDS.includes(temp.toString());

    //insert checking if reserved word
    if(temp != undefined && !isReserved)
      variables.push(temp)

    if(isReserved) {
      var line = ctx.start.line;
      throw new Error (`ERROR: ${temp} is a reserved keyword`);
    }
  }

  return variables
}

// Visit a parse tree produced by pascalParser#forStatement.
visitor.prototype.visitForStatement = function(ctx) {
  var varName = ctx.identifier().getText()
  var id = this.scope.lookup(varName);

  if(!id) {
    var line = ctx.start.line;
    throw new Error(`Variable not declared ${varName} at line ${line}`);
  } 

  if(id.type.name !== 'INTEGER') {
    var line = ctx.start.line;
    throw new Error(`Variable for loop index is not an integer at line ${line}`);
  }

  this.visit(ctx.forList());
};


// Visit a parse tree produced by pascalParser#forList.
visitor.prototype.visitForList = function(ctx) {
  var startIndex = Number.isInteger(ctx.getChild(0).getText());
  var endIndex = Number.isInteger(ctx.getChild(2).getText());

  // check if index is integer
  if(!isNaN(startIndex) && !isNaN(endIndex)) {
    
  } else {
    var line = ctx.start.line;
    throw new Error(`Starting and/or ending index should be an integer at line ${line}`);
  }
};

// Visit a parse tree produced by pascalParser#arrayType.
visitor.prototype.visitArrayType = function(ctx) {

  var indices = this.visit(ctx.typeList())
  var type = this.visit(ctx.componentType());
  return {"type":type, "indices":indices}

};

// Visit a parse tree produced by pascalParser#typeList.
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

visitor.prototype.visitOutputList = function(ctx) {
  for(var i = 0; i < ctx.getChildCount(); i++) {
    if(ctx.getChild(i).constructor.name === "FunctionDesignatorContext"){
      
      this.visit(ctx.functionDesignator())
    }
  }
};

visitor.prototype.visitReadln = function(ctx){
  var list = this.visit(ctx.identifierList())
  for(var x in list) {
    var varSymbol = this.scope.lookup(list[x] + '');
    if(!varSymbol) {
      var line = ctx.start.line;
      throw new Error(`Variable not declared '${list[x]}' at line ${line}`);
    }
  }
};

exports.pascalVisitorImpl = visitor;