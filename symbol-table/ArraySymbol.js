    
const Symbol = require('./Symbol');

/**
 * Represents array symbols in a program.
 *
 * @class
 * @since 1.0.0
 */
class ArraySymbol extends Symbol {
    constructor(name, type, startIndex, endIndex) {
        super(name,type);
        this.startIndex = startIndex
        this.endIndex = endIndex;
    }

    toString() {
      return `ArraySymbol(${this.getName()}, ${this.getType()}, ${this.startIndex}, ${this.endIndex})`;
    }

    static create(name, type, startIndex, endIndex) {
      return new this(name, type, startIndex, endIndex);
    }
  }
  
  module.exports = ArraySymbol;