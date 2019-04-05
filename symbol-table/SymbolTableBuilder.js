// Class for constructing the symbol table

const SymbolTable = require('./SymbolTable');
const VariableSymbol = require('./VariableSymbol');

class SymbolTableBuilder {
    constructor() {
        this.scope = SymbolTable.create();
    }

    // visit(node) {
    //     const visitor = this[`on${node.constructor.name}`];
    
    //     return visitor.call(this, node);
    //   }

    static create() {
        return new this;
    }
}

modeule.exports = SymbolTableBuilder;