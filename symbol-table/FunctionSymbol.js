// Symbols used as parameters in proceduress

const Symbol = require('./Symbol');

class FunctionSymbol extends Symbol {
    constructor(name, returnType,params = []) {
        super(name);
        this.params = params;
        this.returnType = returnType
    }

    getParams() {
        return this.params;
    }

    toString() {
        return `FunctionSymbol(${this.name}, ${this.params}, ${this.returnType})`;
    }

    static create(name, returnType, params) {
        return new this(name, returnType, params);
    }
}

module.exports = FunctionSymbol;