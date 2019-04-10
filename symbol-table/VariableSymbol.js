    
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
    constructor(name, type, isConstant = false, value=null) {
        super(name,type);
        if(value != null)
          this.value = value
        else if(type.name === "INTEGER")
          this.value = 0
        else if(type.name === "STRING" || type.name === "CHAR")
          this.value = ''
        else if(type.name === "BOOLEAN")
          this.value = false
        this.isConstant = isConstant;
    }
    toString() {
      return `VariableSymbol(${this.getName()}, ${this.getType()},${this.value})`;
    }
  
    /**
     * Static helper for creating new VariableSymbol instances.
     *
     * @static
     * @param {String} name
     * @param {TypeSymbol} type
     * @returns {VariableSymbol}
     */
    static create(name, type, isConstant, value) {
      return new this(name, type, isConstant, value);
    }
  }
  
  module.exports = VariableSymbol;