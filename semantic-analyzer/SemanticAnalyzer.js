const SymbolTable = require('../symbols/SymbolTable');
const VariableSymbol = require('../symbols/VariableSymbol');
const ProcedureSymbol = require('../symbols/ProcedureSymbol');

// builds symbol table per scope
class SemanticAnalyzer {
    constructor() {
        this.scope = null;
    }

    // visits a node 
    visit(node) {
        const visitor = this[`on${node.constructor.name}`];
    
        return visitor.call(this.node);
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
}