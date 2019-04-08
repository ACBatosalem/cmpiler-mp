//const Token = require('../grammar/pascalLexer');
//const Parser = require('../grammar/pascalParser');


class Interpreter {

  constructor(tree) {
    //this.parser = parser;
    //this.ast = this.parser.parse();
    this.ast = tree;
  }

  // visits a node
  visit(node) {
    const visitor = this[`on${node.constructor.name}`];

    return visitor.call(this, node);
  }

  onNoOperation(node) {
    return node;
  }

  //visitor that sequentially visits all its children
  onCompound(node) {
    return node.getChildren().forEach(child => this.visit(child));
  }


  // once an assignment is detected, the program needs to find a variable it will be assigned to
  // we also need to visit an expression, to find out what to assign into the variable
  onAssign(node) {
    const variableName = node.getVariable().getName();

    process.GLOBAL_SCOPE = Object.assign({}, process.GLOBAL_SCOPE);
    process.GLOBAL_SCOPE[variableName] = this.visit(node.getExpression());
  }

  // gets the variable name and tries to find it in the symbol table
  onVariable(node) {
    const variableName = node.getName();

    return process.GLOBAL_SCOPE[variableName];
  }


  // visitor to return the numeric value of the number node
  onNumber(node) {
    return node.getValue();
  }

  
  // once a unary operator is detected, visit an operand and apply operator to it
//   onUnaryOperator(node) {
//     const operator = node.getOperator();
//     const operand = node.getOperand();

//     if (operator.is(Token.PLUS)) {
//       return +this.visit(operand);
//     } else if (operator.is(Token.MINUS)) {
//       return -this.visit(operand);
//     }
//   }

  
  //visit the left and right sides first
  // after visiting both sides, apply an operator to the results
//   onBinaryOperator(node) {
//     const lhs = node.getLHS();
//     const operator = node.getOperator();
//     const rhs = node.getRHS();

//     if (operator.is(Token.PLUS)) {
//       return this.visit(lhs) + this.visit(rhs);
//     } else if (operator.is(Token.MINUS)) {
//       return this.visit(lhs) - this.visit(rhs);
//     } else if (operator.is(Token.ASTERISK)) {
//       return this.visit(lhs) * this.visit(rhs);
//     } else if (operator.is(Token.SLASH)) {
//       return this.visit(lhs) / this.visit(rhs);
//     } else if (operator.is(Token.INTEGER_DIV)) {
//       return this.visit(lhs) / this.visit(rhs);
//     }
//   }


  // visits the program node
  onProgram(node) {
    this.visit(node.getBlock());
  }


  //visits the block node
  onBlock(node) {
    node.getDeclarations().forEach(decl => this.visit(decl));
    this.visit(node.getCompound());
  }


  // visits the var declaration node
  onVarDecl(node) {
    return node;
  }


  //visits the type node
   onType(node) {
    return node;
  }


  //visits the procedure declaration node
  onProcedureDecl(node) {
    return node;
  }

  //interprets the AST and returns the result
  interpret() {
    return this.visit(this.ast);
  }
}

module.exports = Interpreter;