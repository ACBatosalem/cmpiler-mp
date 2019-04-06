    
const Symbol = require('./Symbol');

/**
 * Represents variable symbols in a program.
 *
 * @class
 * @since 1.0.0
 */
class VariableSymbol extends Symbol {
    /**
     * Helper for converting VariableSymbol into string representation.
     *
     * @returns {String}
     */
    constructor(name, type, isConstant = false) {
        super(name,type);
        this.isConstant = isConstant;
    }
    toString() {
      return `VariableSymbol(${this.getName()}, ${this.getType()})`;
    }
  
    /**
     * Static helper for creating new VariableSymbol instances.
     *
     * @static
     * @param {String} name
     * @param {TypeSymbol} type
     * @returns {VariableSymbol}
     */
    static create(name, type, isConstant) {
      return new this(name, type, isConstant);
    }
  }
  
  module.exports = VariableSymbol;