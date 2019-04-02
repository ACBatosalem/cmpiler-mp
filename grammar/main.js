var antlr4 = require('antlr4/index.js');
var CalculatorLexer = require("./calcLexer.js");
var CalculatorParser = require("./calcParser.js");
var CalculatorListenerImpl = require("./calcListenerImpl.js");

var main = function(input) {
    var chars = new antlr4.InputStream(input);
    var lexer = new CalculatorLexer.calcLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new CalculatorParser.calcParser(tokens);
    //var errorListener = new CalculatorErrorListener();

   /* parser.removeErrorListeners();
    lexer.removeErrorListeners();
    parser.addErrorListener(errorListener);
    lexer.addErrorListener(errorListener);*/

    parser.buildParseTrees = true;
    var tree = parser.statement_list();
    console.log(tree.toStringTree(parser.ruleNames));

    var printer = new CalculatorListenerImpl.calcListenerImpl();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
    var result = printer.stack.slice(-1).pop();
  /* if(!printer.semanticErrorCheck && !errorListener.syntaxErrorCheck)
        console.log(result);
    else
        process.stdout.write(" [LINE " + errorLine + "]" + "\n");

    errorLine++;
    return result;*/
}

main('number := 2; \n a := number; \n b := 10 * a + 10 * number / 4; \n c := a - - b; \n x := 11')