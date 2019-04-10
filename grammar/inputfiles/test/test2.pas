{
Instructions:
Comment out an error if you want to try other test cases.
}

PROGRAM MAIN;				//Enter Program MAIN

(*Variable is:
  1. Represented by a single letter
  2. Not case sensitive
*)

VAR
  a, b   : integer;			//Declare a and b as integers
  a1	 : iNtEgEr;			//Declare a1 as an integer
  c	 : char;			//Declare c as character
  c1	 : Char;			//Declare c1 as character
  d	 : string;			//Declare d as string
  d1	 : string[10];			//Declare d1 as string
  d2	 : String;			//Declare d2 as string
  e	 : boolean;			//Declare e as boolean
  e1	 : Boolean;			//Declare e1 as boolean
  n	 : array [1..10] of integer;	//Declare n as an array of integers with a length of 10
  //n1	 : array [1..5] of char;	//Declare n1 as an array of characters with a length of 5

  // These are possible errors
  A	 : integer;		// ERROR: Duplicate identifier 'a'
  number : integer;		// this could be an error due to the restriction
  chr    : char;		// this could be an error due to the restriction
  stmt   : string;		// this could be an error due to the restriction
  e	 : integer; 		// ERROR: Duplicate identifier
  h	 = string;		// ERROR: Syntax error, ":" expected but "=" found
  q	:= integer;		// ERROR: Syntax error, ":" expected but ":=" found
  f	:= 'hello';		// ERROR: Syntax error, ":" expected but ":=" found

(*Constant is:
  1. Represented by a sequence of at most three alphanumeric chars
     starting with a letter
  2. Not case sensitive
*)

const
  MX = 40;			//MX should be an int constant
  MX1 = 20 + 1 * 30;		//MX1 should be an int constant
  H1 = 'hello';			//H1 should be a string contant
  Ca2 = 'Q';			//Ca2 should be a character constant
  b1f = FALSE;			//b1f should be a boolean constant
  b2f = false;			//b2f should be a boolean constant
  b1t = TRUE;			//b1t should be a boolean constan
  b2t = true;			//b2t should be a boolean constant
  f = 'This is a string';	//f should be a string constant

  // These are possible errors
  b2 = TRUE;			// ERROR: Duplicate identifier "b2"
  aKoH2 = 'This is me';		// this could be an error due to the restrictions
  a@k = 'aak';			// ERROR: Syntax error, ":" expected but "@" found
  err : 10;			// ERROR: Syntax error, "=" expected but ":" found
  err := 10;			// ERROR; Syntax error, "=" expected but ":=" found
  1as = 10;			// ERROR: Syntax error, "identifier" expected but "ordinal const" found
  err = hello;			// ERROR: Syntax error, "." but ";" found


(*Comments:
  1. Single and multiline comments
*)

(*This is a comment hehe
   comment hehe
   comment hehe*)
   {this is
   multi-line}
   { Comment 1 (* comment 2 *) }  
    (* Comment 1 { comment 2 } *)  
    { comment 1 // Comment 2 }  
    (* comment 1 // Comment 2 *)  
    // comment 1 (* comment 2 *)  
    // comment 1 { comment 2 } 



(*Data Types:
  * Character
	- Any printable character found on your keyboard enclosed
	  in single quotes
	- Assume characters exclude single quote
  * String
	- Series of characters enclosed in single quotes
	- Assume strings do not contain single quotes
  * Integer
	- A series of digits, with optional sign
	- No need to check range
*)

procedure assignStuff();
const a = 'hello'; 		 

var Ca2 : integer;

begin
  
  a1	 := +1;
  b	 := 1;
  c	 := 'C';
  c1	 := '`';
  d	 := 'C';		//this is a string
  d2	 := 'This is d2' ;
  e	 := true;
  e1	 := TrUe;
  //n1	 := 'hello';

  //updating values
  d2     := d;
  b 	 := a1;
  a1	 := -2;
  c1	 := 'c';
  d2     := 'Changed';
  d2	 := 'c' + 'c';
  e1	 := MX1 < 100;
  a1	 := b + a1;					
  b 	 := (3 + 4) div 8 - ((1*2) mod 2) -2 + 6 * 2; 	
  //n1	 := '123456789012345678901234567890'; 		//idk bat di to error or warning

  writeln('Assigning');
  writeln('a1 is ', a1);				//a1 is -1
  writeln('b is ', b);					// b is 10 
  writeln('c1 is ', c1);				// c1 is c  
  writeln('d2 is ', d2);				// d2 is cc
  writeln('e1 is ', e1);				// e1 is true
  //These are possible errors
  
  b	 := 10.1 + a1;					// ERROR: incompatible types: got "Extended" expected "SmallInt"
  a      := -1; 					// ERROR: Variable identifier expected; Incompatible types: got "ShortInt" expected "Constant String"
  a	 := 2.13;					// ERROR: Incompatible types: got "Extended" expected "SmallInt"
  d1	 := 'this is more than 10 characters hehe';	// WARNING: String literal has more characters than short string length
  c1     := 'This is wrong';				// ERROR: Incompatible types: got "Constant string" expected "char"
  e	 := 2;						// ERROR: Incompatible types: got "ShortInt" expected "Boolean"
  H1	 := 'Bawal';					// ERROR: Variable identifier expected

 
end;



(* 
  Subroutines
  - Function and procedure
  - parameter pass by value only
  - no recursive calls
  - no nested subroutines

*)
procedure paramPass(y: integer);
var temp : string;
var f : integer;
begin
   f := 255;
   temp := 'this is a string';
   Writeln();
   writeln();
   Writeln('temp is ', temp);
   writeln('f is ', f);
   writeln('[Procedure] Y is: ', y);
   Writeln;
   writeln;
   
end;

function paramPass(y: integer): integer;
begin
    paramPass := y
end;

function printSomething(): string;
begin
  printSomething := 'I just wanted to print something';
end;

procedure paramPass(y: integer; x: string);
begin
  writeln('y is', y);
  writeln('x is ', x);
end;

//these are errors and warnings

procedure paramPass(y: integer; x: string)		// ERROR: Syntax error: ";" expected but "BEGIN" found
begin
  writeln('y is', y);
  writeln('x is ', x);
end;

function paramPass(y: integer, x:string): integer;	//ERROR: Syntax error: ")" expected but "," found
begin
    paramPass := y
end;

procedure paramPass(y: integer);	// ERROR: Overloaded functions have the same parameter list
var temp : string;
var f : integer;
begin
   Writeln();
   writeln();
   Writeln('temp is ', temp);		//WARNING: Local Variable 'temp' does not seem to be initialized
   writeln('f is ', f);			//WARNING: Local Variable 'f' does not seem to be initialized
   writeln('[Procedure] Y is: ', y);
   Writeln;
   writeln;
   
end;

procedure procError(y: integer);	// ERROR: Syntax error; got "." expected ";"
var temp : string;
var f : integer;
var chr : char;
begin
   f := 0;
   temp := 'csknvkj';
   chr := 'n';
   temp := chr;
   chr := temp;
   Writeln('temp is ', temp);
   writeln('f is ', f);
   writeln('[Procedure] Y is: ', y);
   Writeln;
   writeln;
   
end.

procedure procError2(y: integer): string;	// ERROR: Fields cannot appear after a method or property definition, start a new visibility section first
var temp : string;
begin
   Writeln();
   writeln();
   writeln('[Procedure] Y is: ', y);
   Writeln;
   writeln;
   temp := 'This is temp';
   procError := temp;				// ERROR: Syntax Error: ";" expected but "identifier PROCERROR" found
end;

function funcError(y: integer);			// ERROR: Syntax Error: ":" expected but ";" found
begin
    write('hi');
end;







(*
  readln();
  Conditional construct
    - if-then-else statement
    - no nested conditions
  
*)
function conditionalFunc(par:string): char;
var str : string = 'pare chong';
var user : string;
var num1, num2 : integer;
begin
  write('Input num1: ');
  readln(num1);
  write('Input num2: ');
  readln(num2);

  if num1 = num2 then
     writeln('They are equal')
  else
     writeln('They are not equal');

  if (num1 = num2) then
     writeln('They are equal')
  else
     writeln('They are not equal');

  if (num1 > num2) then
     writeln('Num1 is greater than num2')
  else
     writeln('Num1 is NOT greater than num2');

  if (num1 < num2) then
     writeln('Num1 is less than num2')
  else
     writeln('Num1 is NOT less than num2');

  if (num1 >= num2) then
     writeln('num1 >= num2')
  else
     writeln('!(num1 >= num2)');


  // this is an error
  if (num1 <= num2) then
     
     writeln('num1 <= num2')
  
  else
     
     writeln('!(num1 <= num2)')


  
  

  if ((par = str) and (par <> 'c')) then
    // ERROR: Syntax Error: ";" expected but "IF" found 
     writeln('par is pare chong')
  
  else
     writeln('meh');
  

  //this is an error
  if (num1 <= num2) then
     writeln('num1 <= num2');		    // ERROR: Syntax error: ";" expected but "ELSE" found
  else
     writeln('!(num1 <= num2)')



  // and, or, not
  if ((par = str) and (par <> 'c')) then
     writeln('par is pare chong')
  else
     writeln('meh');

  if (par = str) and (par <> 'c') then
     writeln('par is pare chong')
  else
     writeln('meh');


  if (not(par = 'pare chong') or not(par = 'par')) then
     writeln('par is in if')
  else
     writeln(f);

  if not(par = 'pare chong') or not(par = 'par') then
     writeln('par is in if')
  else
     writeln(f);

  writeln(not(true) and true);
  writeln(true and false);
  writeln(false or true);


  //these are errors
  if par = str and par <> 'c' then		// ERROR: Operation "and" not supported for types "ShortString" and "ShortString"
     writeln('par is pare chong')
  else
     writeln('meh');


  writeln('Please input how you call your friend:');
  readln(user);

  if (user <> str) then
  begin
     writeln('Thats cool :/');
     conditionalFunc := 'n';
  end
  else
  begin
     writeln('Awesome pare chong ;)');
     conditionalFunc := 'y';
  end;

  // this is an error
  if (user <> str) then
  begin
     writeln('Thats cool :/');
     conditionalFunc := 'n';
  end;
  else						// ERROR: Syntax Error: ";" expected but "ELSE" found
  begin
     writeln('Awesome pare chong ;)');
     conditionalFunc := 'y';
  end;

end;



(*
  Iterative construct
  - for loop upward count only
  - no nested loops

  Array
  - array of numbers only
  - index starts at 1
*)

procedure printArray();
var arr : array [1..5] of integer;
var arr2 : array [1..10] of integer;
var i,j : integer;
begin      
   for i := 1 to 5 do
       arr[ i ] := i + 100;   
   
   for j:= 1 to 5 do
      writeln('arr[', j, '] = ', arr[j] );
   
   for i := 1 to 10 do
       n[ i ] := i + 1;   

   for i:= 1 to 10 do
      writeln('n[', i, '] = ', n[i] );

   // This is not a syntax error but it is a logical error, because garbage value arr2[6] onwards

   for i := 1 to 5 do
       arr2[ i ] := i + 2;  

   for i:= 1 to 10 do
      writeln('arr2[', i, '] = ', arr2[i] );

   writeln();
   Writeln;
end; 


var chr : char;

BEGIN {MAIN}
  assignStuff();
  paramPass(b);
  writeln(printSomething);
  paramPass(MX, f);
  chr := conditionalFunc('pare chong');
  writeln(chr);
  printArray();

  //these are errors
  writeln('Function paramPass: ', paramPass(b));  //ERROR: Can't read or write variables of this type because procedure
  writeln('Function paramPass: ', paramPass);     // ERROR: wrong number of parameters specified for call to "paramPass"
  assignStuff()					  // ERROR: Syntax Error: ';' expected but "identifier parampass" found
  paramPass(MX; MX)				  // ERROR: Syntax error: ")" expected but ";" found
  paramPass(f, MX)				  // ERROR: incompatible type for arg no. 2: Got "shortint", expected "ShortString"
  printArray(f);				  // ERROR: Wrong number of parameters specified for call to "printArray"
END. {MAIN}