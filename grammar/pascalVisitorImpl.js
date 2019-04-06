var antlr4 = require('antlr4/index.js');
var PascalVisitor = require("./pascalVisitor.js");

var visitor = function() {
    PascalVisitor.pascalVisitor.call(this); // chain the constructor
    this.ctr = 0;
  };

// chaining the prototypes
visitor.prototype = Object.create(PascalVisitor.pascalVisitor.prototype);

visitor.prototype.visitProgram = function(ctx) {
    console.log("luh" + this.ctr)
    this.ctr++;
    return this.visitChildren(ctx);
  };

visitor.prototype.visitBlock = function(ctx) {
  console.log("block"+this.ctr)
  this.ctr++
  return this.visitChildren(ctx);
};

visitor.prototype.visitTypeIdentifier = function(ctx) {
  console.log("type " + ctx.getText() +this.ctr)
  this.ctr++
  return ctx.getText();
};

visitor.prototype.visitIdentifier = function(ctx) {
  console.log("id " + ctx.getText() +this.ctr)
  this.ctr++
  return ctx.getText();
};

exports.pascalVisitorImpl = visitor;