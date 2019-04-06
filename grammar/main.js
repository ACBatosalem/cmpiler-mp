var antlr4 = require('antlr4/index.js');
var PascalLexer = require("./pascalLexer.js");
var PascalParser = require("./pascalParser.js");
var PascalVisitorImpl = require("./pascalVisitorImpl.js");
var PascalErrorListener = require('./pascalErrorListener.js').PascalErrorListener;
var SemanticAnalyzer = require('../semantic-analyzer/SemanticAnalyzer.js');

var main = function(input) {
    var chars = new antlr4.InputStream(input);
    var lexer = new PascalLexer.pascalLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new PascalParser.pascalParser(tokens);
    var errorListener = new PascalErrorListener();
    var analyzer = new SemanticAnalyzer();

    parser.removeErrorListeners();
    lexer.removeErrorListeners();
    parser.addErrorListener(errorListener);
    lexer.addErrorListener(errorListener);

    parser.buildParseTrees = true;
    var tree = parser.program();
    //console.log(tree.toStringTree(parser.ruleNames));

    var printer = new PascalVisitorImpl.pascalVisitorImpl();
    printer.visitProgram(tree);
    analyzer.visit(tree);

    //antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
   /* var result = printer.stack.slice(-1).pop();
   if(!printer.semanticErrorCheck && !errorListener.syntaxErrorCheck)
        console.log(result);
    else
        process.stdout.write(" [LINE " + errorLine + "]" + "\n");

    errorLine++;
    return result;*/
}

main('program MAIN; var X, Y, Z: string;BEGIN End. {MAIN}')