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
  if(!varSymbol) {
    throw new Error(`Variable not declared ${varName}`);
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
  var isReserved = false;
  for(var i = 0; i < ctx.getChildCount(); i+=2) {
    var temp = ctx.getChild(i).getText()

    isReserved = KEYWORDS.includes(temp.toString());

    //insert checking if reserved word
    if(temp != undefined && !isReserved)
      variables.push(temp)

    if(isReserved)
      throw new Error("SEMANTIC ERROR Keyword error: cannot use reserved keyword " + temp + " as an identifier");
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
  //console.log(parameters)
  procedureSymbol.params = parameters[0]
  this.visit(ctx.block())
  console.log(this.scope.toString())
  this.scope = this.scope.enclosingScope;

};

visitor.prototype.visitFormalParameterList = function(ctx) {
  var parameters = []
  console.log(this.scope.scopeName)
  if(ctx.getChildCount() != 2)
    for(var i = 1; i < ctx.getChildCount(); i+=2) {
      parameters.push(this.visit(ctx.getChild(i)))
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
  console.log(funcName)
  //insert parameters chuchu
  var parameters = this.visit(ctx.formalParameterList())
  funcSymbol.params = parameters[0]
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
    if(varSymbol.isConstant)
      throw new Error(`Cannot assign to constant variable`)
  if(varSymbol.type == undefined)
      throw new Error(`Procedure does not return a value`)
  var value = this.visit(ctx.expression().simpleExpression()).toString().split(",")
  
  // console.log("AYAW")
  // console.log(value)

  var isReturn = this.scope.scopeName===varSymbol.name?true:false
  var error = false
  var varType = varSymbol.type.name
  var errorMessage

  for(x in value) {
    var temp = value[x]
    if(temp.includes('\'')) {
      if(temp.length == 3) {
        if(varType !== 'STRING' && varType !== 'CHAR') {
            error = true
            errorMessage = `Data type mismatch: Can't assign ${temp} to non-char/string variable`
        }
      } else {
        if(varType !== 'STRING') {
            error = true
            errorMessage = `Data type mismatch: Can't assign ${temp} to non-string variable`
        }
      }
    } else if(!isNaN(temp)) {
      if(varType !== 'INTEGER') {
        error = true
        errorMessage = `Data type mismatch: Can't assign ${temp} to non-int variable`
      }
    } else if(temp == true || temp == false || temp == 'true' || temp == 'false'){
      if(varType !== 'BOOLEAN') {
        error = true
        errorMessage = `Data type mismatch: Can't assign ${temp} to non-boolean variable`
      }
    } else {
      var varTemp = this.scope.lookup(temp)
      if(!varTemp) {
        error = true
        errorMessage = `!!Variable not declared ${temp}`
      }
      else if(varType !== varTemp.type.name){
        error = true
        errorMessage = `Data type mismatch: ${varSymbol.name} and ${temp}`
      }

    }
    if(error) {
        if(isReturn)
            throw new Error(`Return type mismatch: function ${funcName}`)
        throw new Error(errorMessage)
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
  if(ctx.getChild(0).constructor.name === "FunctionDesignatorContext")
    return this.visit(ctx.functionDesignator())
  if(ctx.getChildCount() == 1)
    return ctx.getText()
  else
    return this.visit(ctx.expression())
};

visitor.prototype.visitFunctionDesignator = function(ctx) {
  var func = this.visit(ctx.variable())
  var funcParams = func.params
  var parameters = this.visit(ctx.parameterList())[0]
  console.log("GRRR")

  console.log(funcParams)
  console.log("GRRR!!!")
  console.log(parameters)
  var error = false
  if(funcParams.length != parameters.length)
    throw new Error (`ERROR: parameter length does not match`);

  for(x in parameters) {
    var temp = parameters[x]
    var varType = funcParams[x].type.name
    if(temp.includes('\'')) {
      if(temp.length == 3) {
        if(varType !== 'STRING' && varType !== 'CHAR') {
            error = true
            errorMessage = `Data type mismatch: Can't assign ${temp} to non-char/string variable`
        }
      } else {
        if(varType !== 'STRING') {
            error = true
            errorMessage = `Data type mismatch: Can't assign ${temp} to non-string variable`
        }
      }
    } else if(!isNaN(temp)) {
      if(varType !== 'INTEGER') {
        error = true
        errorMessage = `Data type mismatch: Can't assign ${temp} to non-int variable`
      }
    } else if(temp == true || temp == false){
      if(varType !== 'BOOLEAN') {
        error = true
        errorMessage = `Data type mismatch: Can't assign ${temp} to non-boolean variable`
      }
    } else {
      var varTemp = this.scope.lookup(temp)
      if(!varTemp) {
        error = true
        errorMessage = `!!Variable not declared ${temp}`
      }
      else if(varType !== varTemp.type.name){
        error = true
        errorMessage = `!!Data type mismatch: ${funcParams[x].name} and ${temp}`
      }

    }
    if(error) 
      throw new Error(errorMessage)
  }
  
  return func.name;
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

    if(isReserved)
      throw new Error (`ERROR: ${temp} is a reserved keyword`);
  }

  return variables
}

// Visit a parse tree produced by pascalParser#forStatement.
visitor.prototype.visitForStatement = function(ctx) {
  var id = this.scope.lookup(ctx.identifier().getText());

  if(!id) {
    throw new Error(`Variable not declared ${varName}`);
  } 

  if(id.type.name !== 'INTEGER') {
    throw new Error(`Variable for loop index is not an integer`);
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
    throw new Error('Starting and/or ending index should be an integer');
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
  if(ctx.getText().toUpperCase() !== "INTEGER")
    throw new Error(`Cannot instantiate a non-integer array`);

  return ctx.getText();
};

visitor.prototype.visitOutputList = function(ctx) {
  for(var i = 0; i < ctx.getChildCount(); i++) {
    if(ctx.getChild(i).constructor.name === "FunctionDesignatorContext"){
      
      this.visit(ctx.functionDesignator())
    }
  }
};

exports.pascalVisitorImpl = visitor;