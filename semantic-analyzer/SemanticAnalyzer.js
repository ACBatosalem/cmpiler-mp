const SymbolTable = require('../symbol-table/SymbolTable');
const VariableSymbol = require('../symbol-table/VariableSymbol');
const ProcedureSymbol = require('../symbol-table/ProcedureSymbol');

// builds symbol table per scope
class SemanticAnalyzer {
    constructor() {
        this.scope = null;
    }

    // visits a node 
    visit(node) {
        const visitor = this[`on${node.constructor.name}`];
    
        console.log("scope: " + `on${node.constructor.name}`);
        // return visitor.call(this.node);
    }

    // visitor from block (?) node
    onBlock(node) {
        node.getDeclarations().forEach(node  => this.visit(node));
        this.visit(node.getCompound());
    }

    // visitor for program - creates symbol table for program
    onProgram(node) {
        this.scope = SymbolTable.create('global', 1, this.scope);
        this.visit(node.getBlock());
        this.scope = this.scope.enclosingScope;
    }

    // visitor for procedure declarations
    onProcedureDecl(node) {
        const procName = node.getName();
        const procSymbol = ProcedureSymbol.create(procName);

        this.scope.define(procSymbol);
        this.scope = SymbolTable.create(procName, this.scope.scopeLevel + 1, this.scope);

        node.getParams().forEach(param => {
            const paramType = this.scope.lookup(param.getType().getValue());
            const paramName = param.getVariable().getName();
            const varSymbol = VariableSymbol.create(paramName, paramType);
      
            this.scope.define(varSymbol);
            procedureSymbol.params.push(varSymbol);
          });
      
          this.visit(node.getBlock());
          this.scope = this.scope.enclosingScope;
    }

    // visitor for compound nodes 
    onCompound(node) {
        node.getChildren().forEach(node => this.visit(node));
    }

    // onNoOperation(node) {
    //     return node;
    // }

    // onVarDecl(node) {
    //     const typeName = node.getType().getValue();
    //     const typeSymbol = this.scope.lookup(typeName);
    
    //     const varName = node.getVariable().getName();
    //     const varSymbol = VariableSymbol.create(varName, typeSymbol);
    
    //     if (this.scope.lookup(varName, true)) throw new Error(`Duplicate declaration of ${varName}`);
    
    //     this.scope.define(varSymbol);
    // }
    
    // onVariable(node) {
    //     const varName = node.getName();
    //     const varSymbol = this.scope.lookup(varName);
    
    //     if (!varSymbol) throw new Error(`Variable ${varName} is not resolved`);
    // }

    // onAssign(node) {
    //     this.visit(node.getExpression());
    //     this.visit(node.getVariable());
    // }

    // onBinaryOperator(node) {
    //     this.visit(node.getLHS());
    //     this.visit(node.getRHS());
    // }
    
    static create() {
        return new this();
      }
}

module.exports = SemanticAnalyzer;