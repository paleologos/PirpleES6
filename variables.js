// Milan Nikolic - JavaScript ES6 Homework assignment #2: Variables and Constants

// HOISTING IN JS
/*
Literally hoist means to lift, raise. 
Hoisting in JavaScript is rule (could say), that variables, also functions, should be declared after 
it's using(in example of functions after executing). Compiler will hoist declarations on the top of block.
Only declaration is hoisted, not initializations (assignig values);

Also what's very improtant is , that let and const declaraton is not hoisted.

Always is better declaring variables at the top!!!
*/ 


// var, let and const - Differences

/*
Variables is placeholders or containers for storing values.
in ES6 there is three type of variables var const and let.
Difference between var let and const is in scope and possibility to change entire output of code by
assigning and reassigning at different places in our code (code blocks).

1> The var is stands for variables and it's older JS syntax(ES 3-5) for declaring variables in JS.
Characteristic of var is that they could be reassigned in every place in our code, 
and could unawanted change output of code, by our mistake.

2> The let is way of declaring local variables with block scope. That mean, we could 
declare(and optionally assign) let on the top of our code with some name, an than inside some
block of code (if statement, loop, function) we could declare and assign let with the same name
but different value, and this declaring would not change (reassign), our first declaration on the top of code.

3> The const- Constants are also block scoped , like let. Difference between const and let is that the const
can't be redeclared and can't be reassigned.
It's values can only be modified.
*/

// CODE EXAMPLES

// 1> var DECLARATION

//var declaration and initalization
var x= 5;

//for loop as simple counter
for(var i=0; i<=10; i++){
    // with every pass of the loop we increment x
    x++;
};

// value of x. some people will expect 5, but they are wrong.
console.log(x);


// 2> let DECLARATION 

//var declaration and initalization
var x= 5;
var y=1; // variable used only for condition

if(y){
    //let declaration and assignment
    let x=10;
    // value of x inside of the block
    console.log("Inside of the block x="+x);
  if(x){
    //reassigned value of x
    x= 15;
     // value of x inside of the second (nested)block
    console.log("Reassigned value inside nested block x="+x);
  }
 
}

//  value of x outside of the block
console.log("Outside of the block x="+x);


// 3> const DECLARATION
var x= 5;
var y=1; // variable used only for condition

if(y){
    //let declaration and assignment
    const x=10;
    // value of x inside of the block
    console.log("Inside of the block x="+x);
  if(x){
    //reassigned value of x
    x= 15;
     // value of x inside of the second (nested)block
     // in this console.log is expected error. Can't reassign const 
     // if we exclude (comment) line 88 of code result will be x=10
    console.log("Reassigned value inside nested block x="+x);
  }
 
}
//  value of x outside of the block
console.log("Outside of the block x="+x);


// BONUS - HOISTING
//declaration can be hoisted
x=1;
console.log(x);
var x;

//initialization can't be hoisted
var y;
console.log(y);
y=2;

//hoisting do not work with let ...
z=3;
console.log(z);
let z;

// ...and  const
q=4
console.log(q);
const q;



