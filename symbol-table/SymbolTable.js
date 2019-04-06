// Class for symbol table to be used in the program

const TypeSymbol = require('./TypeSymbol');

class SymbolTable {
    constructor(scopeName, scopeLevel, enclosingScope = null) {
        this.symbols = new Map();
        this.scopeName = scopeName;
        this.scopeLevel = scopeLevel;
        this.enclosingScope = enclosingScope;
        this.initBuiltIn();
    }

    initBuiltIn() {
        this.define(TypeSymbol.create('INTEGER'));
        this.define(TypeSymbol.create('CHAR'));
        this.define(TypeSymbol.create('STRING'));
        this.define(TypeSymbol.create('BOOLEAN'));

        return this;
    }
    
    define(symbol) {
        this.symbols.set(symbol.getName(), symbol);

        return this;
    }

    lookup(name, currentScopeOnly = false) {
        const symbol = this.symbols.getName();

        if(symbol) return symbol;
        if(currentScopeOnly) return null;
        if(this.enclosingScope) return this.enclosingScope.lookup(name);
    }

    toString() {
        let list = '';
        
        for(const[key, value] of this.symbols.entries()) {
            entries += `${key}:${value}\n`;
        }

        return `Scope Name: ${this.scopeName}\nScopeLevel: ${this.scopeLevel}\n\nEntries\n${entries}`;
    }

    create(scopeName, scopeLevel, enclosingScope) {
        return this(scopeName, scopeLevel, enclosingScope);
    }
}

module.exports = SymbolTable;