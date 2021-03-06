~/Documents/1200 School (general)/1208 Online Courses/1208.3 FreeCodeCamp/JavaScript/BasicJavaScriptAndES6.txt

# Review of JavaScript in FreeCodeCamp.org

1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
         1         2         3         4         5         6         7         8         9         0


## Comments
console.log(‘message’); // Write to the console

## Variables
// ======================================================

variableName; // variable of undefined type of global scope. Not a good practice

var variableName; // variableName is now ‘undefined’ of global scope unless defined in a function.

variableName = 5; // assignment
var variableName = 5; // initialization, variableName is defined.


## Arithmetic
======================================================
variableName = 5 + 10; // addition
variableName = 12 - 6; // subtraction
variableName = 12 * 6; // multiplication
variableName = 12 / 6; // division

variableName++; // increment 
variableName—-; // decrement

var aDecimal = 5.7; // decimals, floats

aDecimal * 2.5; // same operator for multiplying floats
var quotient = 4.4 / 2.0; // and for division of floats
var varRemainder = 5 % 2; // remainder operator - varRemainder is 1;

// Compound assignment +=, -=, *=, /=, %=
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment

## Strings 
// ======================================================
// Strings are immutable

// '', "" are empty strings

var varName = “Alan”;  // String literals

// escaping quotes
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";

// nesting single and double quotes
conversation = 'Finn exclaims to Jake, "Algebraic!"';

// Escape sequences \’, \”, \\, \n, \r, \t - tab, \b - word boundary, \f - form feed

'My name is Alan,' + ' I concatenate.' // concatenation

// can use += to concatenate strings
var varStr = "I come first. ";
varStr += "I come second.";  // varString is now “I come first. I come second.”

// .length property
var varStr = “Hello”;
var varLength = varStr.length; // varLength is 5

// Bracket notation
var varStr = “Hello”;
var varChar = varStr[0]; // ‘H’. 
// But since strings are immutable. varString[0] = ‘J’; Assignment, will NOT work.


## Arrays, 
// ======================================================
// Arrays are mutable

var varArray = ["peanut butter", "jelly", "bread”, 23]; // Can be mixed types.
var varArrayNext = [varArray, [“me”, 25]]; // Can be nested. Multidimensional arrays are arrays of arrays. They don’t need to be rectangular like matrices.
varArrayNext[1] is ["me", 25] // bracket notation used with the index for working with elements of an array.
varArrayNext[1][0] = “you”; // makes varArrayNext be [varArray, [“you”, 25]]


// .push() function - adds values to the end of an array
var varArray = [1,2,3];
varArray.push(4); // varArray is now [1,2,3,4]

// .pop() function - removes a value from the end of an array
var varArray = [1, 4, 6];
var varSingle = varArray.pop(); // varSingle is 6. varArray is [1, 4]

// .shift() function - removes a value from the beginning of an array
var varArray = [1, 4, 6];
var varSingle = varArray.shift(); // varSingle is 1. varArray is [4, 6]

// .unshift() function - adds a value to the beginning of an array
var varArray = [1, 4, 6];
varArray.unshift(3); // varArray is [3, 1, 4, 6]


## Functions
// ======================================================

function functionName() {
  console.log("Hello World");
}

// definition of testFun()
function testFun(param1, param2) {
  console.log(param1, param2);
}

// Call to testFunName() from outside the definition
testFunName(arg1, arg2);
// Call to testFunName() from outside the definition and assigned to a variable.
var varName = testFunName(arg1, arg2); // but varName has no type since testFunName() has no return statement (see below)


### Scope rules

function testFun(param1, param2) {
  var variableName; // undefined but of local scope
  console.log(param1, param2);
}
// local scope variable is not available outside the function scope
function myTestName() {
  var variableName = "foo";
  console.log(variableName);
}
myTestName(); // logs "foo"
console.log(variableName); // variableName is not defined and so logs nothing.

// local scope

function testFun(param1, param2) {
  variableName = “foo”; // Didn’t use “var” thus of global scope
  console.log(param1, param2);
}
console.log(variableName); // *will* log “foo”.


// return
function returnFoo() {
   return “foo”;
}
console.log( returnFoo() ); // logs ‘foo’ // function type is defined by type of what is returned. A function with no return statement has a returned type of undefined.


## Booleans 
// ======================================================
true, false

“true” and “false” are just strings.


## Comparison operators 
// ======================================================

==  equality (with type conversions if needed)
===  strict equality (no type conversion)
!=  not equal
!==  strict inequality
>  greater than
>=  greater than or equal to
<  less than
<=  less than or equal to

&&  logical And
||  logical Or


## if-then-else
// ======================================================
if (condition is true) {
  statement is executed
}

if (condition is true) {
   statement is executed
} else {
  a different statement is executed
}

if (condition is true) {
   statement is executed
} else if (a different condition is true) {
  a different statement is executed
} else {
  another different statement is executed
}


## the Conditional (Ternary) Operator
// ======================================================
// condition ? statement-if-true : statement-if-false;
a > b ? "a is greater" : "b is greater";
// These can be chained by putting a ternary operator in the false part of a ternary operator statement.

                                   
## switch
// ======================================================
switch(parameter) {
  case value1:        // test is for value1 === parameter
    statements to execute;
    break;
  case value2:
    statements to execute;
    break;
...
  default:
    default statements to execute
    break;
}

## For val of 1, 2, or 3, result = "1, 2, or 3"
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}


## Objects, {}
// ======================================================
var objectName = {
  "property1 of multiple words": "value1",    // note the comma separated list of properties
  property2: 4,
  property3: [array or any other value or array or object]
}
// A JavaScript object allows for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

// properties are automatically typecast as strings


// Accessing properties using dot notation:
var prop2Val = objectNam.property2;

// Accessing properties using bracket notation:
objectName["property2"]

// Can access properties using variables
var varProp = "property3";
var value = objectName[varProp];     // value = [array or any other value or array or object]

// changing properties
objectName.property2 = 5;
objectName["property3"] = aNewValue;

// adding properties
objectName.propert5 = yetAnotherValue;
objectName["propert6"] = anotherValue;

// deleting properties
delete objectName.property1;
delete objectName["property2"];

// An object can be thought of as a key/value storage, like a dictionary. 
// for nested properties can use dot and bracket notation like arrays
objectName.property3.subPropterty["subSubProperty"];
// for a array of objects
anArray[2].property2[4]; // for anArray of objectName objects in which objectName contains a property2 which is an array of at least 5 items.Record Collection

boolean variable = objectName.hasOwnProperty(aNameOfCandidateProperty); // returns true or false

## While Loops
// ======================================================
while (boolean condition) {
  statements to execute;
  increment something so that boolean condition is eventually false;
}

## For Loops
// ======================================================
// for ([initialization]; [condition]; [final-expression]) {
//  statements to execute;
// }
// e.g.

for (var iterate = 0; iterate < 5; iterate++) {
  statements to execute;
}


## do...while loops
// ======================================================
do {
  statements to execute at least once and maybe only once;
} while (condition is true);


// 
// ======================================================
Math.random(); returns a decimal in [0,1) to 16 decimal digits.
parseInt(string, radix); returns an integer in base 10 by converting the string using the radix (between 2 and 36) to indicate the base of the string.



## Testing makeshift attempt 1
// ======================================================
// Testing
console.log(Testing([function name], param1, param2));
function Testing (funct, param1, param2 ) {
  // var expected = 0;
  var result = funct(param1, param2);

  // stand in for assertion function
  if (param1 <= result && result <= param2) {
    return "Test passed";
  } else {
    return "Test failed";
  }
}

## Testing attempt 2 
// ======================================================
var arg1, arg2, expected;

var testCases = [
  ["10011", 2, 19],
  ["111001", 2, 57],
  ["JamesBond", 2, NaN],
  ["111001", 36, 62192449],
  ["111001", 14, 578985]
  ];

for (var i = 0; i < testCases.length; i++) {
  arg1 = testCases[i][0];
  arg2 = testCases[i][1];
  expected = testCases[i][2];
  // console.log( arg1, arg2, expected );
  // console.log( convertToAnInteger(arg1, arg2) );
  console.log( Testing(convertToAnInteger, expected, arg1, arg2) );
}

function Testing(funct, expected, param1, param2) {
  var result = funct(param1, param2);

  // stand in for assertion function
  if (expected.toString() == result.toString()) {
    return "Test passed";
  } else {
    return "Test failed";
  }
}

## How to take notes on algorithms or techniques?
// ======================================================

Recursion:

function funName( param ) {
         if (param meets base case condition) {
            return base case value;
         } else {
            const varName = funName( param modified to get closer to base case condition) 
            statements involving varName;
            return varName;
         }



// =========================================================
## ECMAScript is interchangeable with the term JavaScript
ES10 ECMAScript 2019 now exists.
// =========================================================
// =========================================================

let - has different scope rules that var. Best to use let.

const - declare variable as constant. Constant strings are, by convention, in ALL CAPITALS. const arrays are still mutable

Object.freeze(obj) - causes an object to be unmmutable so as to avoid unintended mutation.


arrow functions () => {}

const funcName = () => { statements }  // is short for:
function funcName() = {
  statements;
  return;
}

() => { statements }; // is an anonymous function that executes statements. A return statement is implied.
// if only one statement then:
() => statment;
(param) => { statements using param }
(param1, param2) => { statements using param1 and param2 }

default params 

(param1 = default, ...) => { statements that use param1, param1 will be default if no value is provided in the call to the function }

The rest parameter (...):
...args - An object containing an arbitrary number of elements.
(...args) => { statements that must work with an arbitrary number of input parameters }

A reference to the functions map(), reduce() but no explaination as to what they do. Though through context map() can take at least two parameters. E.g. args.reduce( function, default ); function can be an anonymous function. reduce applies the function to the items in args to which the reduce() method is applied.

The spread operator (...)
takes the contents of an array and unpacks or "spreads" them out.

To copy an array:
arr2 = [...arr1];

Destructuring
{ objectKeyName: desiredVariableName  } = Object
Can have multiple keys and can be nested to Destructure nested object key:value pairs.


Swap:
[a,b] = [b,a];

Truncating arrays:

function removeFirstTwo(list) {
  "use strict";
  const [, ,...arr] = list; // Change this line
  return arr;
}


use-destructuring-assignment-to-pass-an-object-as-a-function's-parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; 
console.log( half(stats)) ;


Template Literals
`some string ${some value to insert}
can be multi-line.`
` are ticks, under the tilda symbol not single quotes.



## object property shorthand
// ======================================================
const varName = (objectParam1, objectParam2, objectParam3) => ({
    objectParam1,
    objectParam2,
    objectParam3,
})

varName(arg1, arg2, arg3) will return object
{ objectParam1: arg1, objectParam2: arg2, objectParam3: arg3 }


## concise declarative functions
// ======================================================
const objectName = {
  objectParam1,
  objectFunction(param1) {
    this.objectParam1 = param1;
  }
}
//calling objectName.objectFunction(value) sets objectParam1 to value.


## constructor functions
// ======================================================
class className {
  constructor(value) {
    this.classParam1 = value;
  }
}
// const objectName = new className(value) constructs className object with classParam1 as value.


## getters, setters
// ======================================================
class className {
  constructor(inputParam1) {
    this._param1 = inputParam;
  }
  get methodName() {
    return this._param1;
  }
  set methodName(inputParam2) {
    this._param1 = inputParam2;
  }
}
 
const objName = new className(arg1); // calls constructor()
let varName = objName.methodName // gets varName = arg1
objName.methodName = arg2 // sets _param1 as arg2
// methodName is same for both the getter and setter. methodName is not called as a method but an attribute of the object.


## module script
// ======================================================
<html>
  <body>
      <script type = "module" src = "index.js" ></script>
  </body>
</html>

export and import module script
// ======================================================
const nameConst = (param1) => {
  statements using param1
  return result
}


export { nameConst } 
// ======================================================
// exports nameConst as a function to be used elsewhere
// usually found at the end of a file defining functions to be exported

export default (a fallback export)
// ======================================================
export default function () {
	// statements
}
// or
export default function nameOfFunction() {
	// statements
}
Cannot use export default with var, let, or const
Can only have one export default per module or file.


import is usually found at the beginning of files that use the imported functions

import {}
// ======================================================
import { varName1, varname2, … } from “path to .js file”
imports varName1, varname2 from the .js file to be used in the current file.

import *
// ======================================================
import * as nameForModule from “<path to .js file”;
// will import all items that are exported from the .js file.

import 
// ======================================================
import varName from “<path to .js file”;
e.g. import add from "./math_functions.js";
// will import the export default from the .js file and give it
the name varName in the current file.


## Promise
// ======================================================
a constructor function (therefore the use of the new keyword)
Takes a functions with the parameters resolve and reject (methods or functions)
When a task is completed the resolve or reject parametes are used to determine the outcome of the promise.

e.g. const makeServerRequest = new Promise((resolve, reject) => {
	// statements
});


Handle a fulfilled Promise
// ======================================================
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data")
  } else {  
    reject("Data not received")
  }
});


then() - Handle a Fulfilled Promise
// ======================================================
The method then() called on a Promise takes the argument given to the resolve method and uses it as the parameter in the call back function entered as the argument of the then() method.

e.g.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data"); // the arguments for resolve() is passed as
  } else {  			// the input to the then() method below
    reject("Data not received");
  }
});

makeServerRequest.then(result => { 	// in this case result will
  console.log(result)			//  be "We got the data”.
});


Here makeServerRequest is the Promise and the text "We got the data" is used as the value for result which is then logged to the console. 



catch() - Handle Rejected Promise
// ======================================================
the method catch() called on a Promise takes the argument given to the reject method and uses it as the paramer in hte call back functioned entered as the arument of the catch() method.

e.g.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received"); // the arguments for reject is passed as
  }				 // the input, error, to the catch() method
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {	// in this case result will
  console.log(error);			//  be "Data not received”.
});


// ======================================================
## End of ES6 Challenges
// ======================================================

Next,
Basic Data Structure Challenges



