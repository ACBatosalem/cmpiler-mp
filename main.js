var antlr4 = require('antlr4/index');
var PascalLexer = require("./grammar/pascalLexer.js");
var PascalParser = require("./grammar/pascalParser.js");
var PascalVisitorImpl = require("./semantic-analyzer/pascalVisitorImpl.js");
var PascalErrorListener = require('./grammar/pascalErrorListener.js').PascalErrorListener;
var SemanticAnalyzer = require('./semantic-analyzer/SemanticAnalyzer.js');
var fs = require("fs")
var InterpreterVisitor = require("./interpreter/interpreterVisitor.js");
var Step = require("./step.js");

var main = function(input) {
    
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('grammar/inputfiles/input.txt')
      });
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      })
      
    //   var recursiveAsyncReadLine = function () {
    //     rl.question('Command: ', function (answer) {
    //       if (answer == 'exit') //we need some base case, for recursion
    //         return rl.close(); //closing RL and returning from function.
    //       log('Got it! Your answer was: "', answer, '"');
    //       recursiveAsyncReadLine(); //Calling this function again to ask new question
    //     });
    //   };
      
    //   recursiveAsyncReadLine(); //we have to actually start our recursion somehow

      
    //   lineReader.on('line', function (line) {
    //     readline.question(`blah`, (name) => {

    //         console.log('Line from file:', line);
    //         name = null;
    //       })

    //       readline.question(`blah`, (name) => {

    //         console.log('Line from file:', line);
    //         readline.close()
    //       })
            
    //   });
    
      
    
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
  
    var printer = new PascalVisitorImpl.pascalVisitorImpl();
    printer.visitProgram(tree);
  
    // var aast = new InterpreterVisitor.interpreterVisitor();
    // aast.visitProgram(tree);

    var step = new Step.step();
    step.visitProgram(tree);
  
}

var input = fs.readFileSync("grammar/inputfiles/input.txt").toString()



main(input)