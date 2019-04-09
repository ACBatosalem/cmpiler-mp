// Symbols used as parameters in proceduress

const Symbol = require('./Symbol');

class ProcedureSymbol extends Symbol {
    constructor(name, params = [], ctx) {
        super(name);
        this.params = params;
        this.ctx = ctx;
    }

    getParams() {
        return this.params;
    }

    toString() {
        return `ProcedureSymbol(${this.name}, ${this.params} ${this.ctx})`;
    }

    static create(name, params, ctx) {
        return new this(name, params, ctx);
    }
}

module.exports = ProcedureSymbol;