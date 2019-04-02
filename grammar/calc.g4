grammar calc;

/*
 * Parser Rules
 */
 /* expr: expr op=(MULT|DIV|MOD) expr # MulDiv
    | expr op=(ADD|SUB) expr # AddSub
    | SUB NUMBER #ChangeSign
    | NUMBER                    # Int
    | '('expr')'             # Parens
    ;*/

//program: compound_statement DOT;

compound_statement: BEGIN NL statement_list END;

statement_list: statement NL*
                | statement SEMI NL statement_list;

statement:  assign
        | empty;


assign: variable ASS expr;

empty: ;

expr: term (op=(ADD | SUB) term)*;

term: factor (op=(MULT | DIV) factor)*;

factor : ADD factor
        | SUB factor
        | NUMBER
        | LP expr RP
        | variable;

variable: ID;


/*
 * Lexer Rules
 */
 
NUMBER     : [0-9]+ ;
ID: [a-zA-Z_][a-zA-Z_0-9]*;
//ID: 'a';
ADD: '+';
SUB: '-';
MULT: '*';
DIV: '/';
MOD: '%';
LP: '(';
RP: ')';
WHITESPACE : ' ' -> skip;
TAB: '\t' -> skip;
NL : '\r'? '\n';
DOT: '.';
BEGIN: (B E G I N);
END: E N D;
SEMI: ';';
ASS: ':=';


fragment B: ('b' | 'B');
fragment E: ('e' | 'E');
fragment G: ('g' | 'G');
fragment I: ('i' | 'I');
fragment N: ('n' | 'N');

fragment D: ('d' | 'D');
