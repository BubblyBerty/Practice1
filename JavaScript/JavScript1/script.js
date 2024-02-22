// Introduction to JavaScript: Part1A Sequence Programming Construct
//  --- Writing In-browser JavaScript 
//  --- Writing Developer Console (Logs, Errors, debug.) 
//  --- Variables and data types Part
//  --- Properties and Methods
//  --- In-built JavaScript Library that has mathematical properties and methods 





// A Variable is a container that hold value (of any datatype)
// Any variable declared outside of a function has a global scope (globally accessible)
// any variable(var/let/const)declared outside of a code has a global scope

// Var  = old syntax  - Don't use
var oldSchool = "Old method of declaring a variable";
var num1 = 10;
console.log(oldSchool);
console.log(num1);

// redeclare the variable firstPerson
let changeAble = "A value stored in a variable that can ne redeclared"
console.log(changeAble);
changeAble = "A new value has been passed/redeclared wtih the changeAble variable"
console.log(changeAble);

changeAble = "A value stored in a variable that can ne redeclared (without 'let')"
console.log(changeAble);
changeAble = "A new value has been passed/redeclared wtih the changeAble variable (without 'let')"
console.log(changeAble);

const  myConstant = "A valaue that can not be redeclared";
const daysInWeek = 7;
 


// let method for declaring variables that we may want redeclare/reassign the value

 // declare secondPerson variable for the first time

// let secondPerson = "Paul";  // We can't redecarle a let variable

// redecare/reassign the value associated with secondPerson variable 

// Declared user variable but with no value, which results to undefined


// console.log



// In browser javaScript
// document.write 

document.write("Working with the document.write method in JS </br>JavaScript Datatypes");
// JavaScript Datatypes
 
// numbers/integer
let num2 = 10;
 
// float/decimal
let myFloat = 11.2;
 
// long
let myLongNum = 9192933944949;
 
// Boolean
  // True or False
let bool1 = true;
let bool2 = false;
 
document.write("</br> Number/Integer: ", num2);
document.write("</br> Float/decimal: ", myFloat);
document.write("</br> Long: ", myLongNum);
document.write("</br> Boolean Value 1: ", bool1);
document.write("</br> Boolean Value 2: ", bool2);
 
 
//undefined
document.write("</br> undefined: ", undefined);
 
let fName = "James";
let lName = "Bond";
 
// concatenate(to join):  use the plus operator
 
let fullName = fName + " " + lName;
document.write("</br> Your full name is ", fullName);

// use const to declare variables with value(s) that will never change


// We cannot overwite the values of a constant variable

// daysInWeek = 5;

// document.write("<br/> Modified value:", daysInWeek);


// JavaScript Datatypes


// numbers
// float/decimal
// integer/number 
// long



// Boolean
// True or False



//undefined




// use the plus operator to concatenate(to join)



console.log()


// JavaScript Using Template Literals
let breakfast = "Toast";
let lunch = "Chicken Salad";
let dinner = "Mash";
let mealCost = 12;

// use template '${}' literals to format output
document.write(`Today, ${fullName} had ${breakfast} for breakfast, and will have ${lunch} for lunch, but no dinner. </br> His total is ${mealCost}`);


document.write("</br> Check the data types of variables ");
 
document.write(typeof num2 ,"</br>");
document.write(typeof myFloat ,"</br>");
document.write(typeof myLongNum,"</br>");
document.write(typeof bool1,"</br>");
document.write(typeof fullName ,"</br>");
document.write(typeof daysInWeek,"</br>");

let dollar = 1200//"I am a dollar"
document.write(`</br>${dollar}`);
document.write(`</br>$${dollar}`);

let cashAtBank = 12000;
document.write(`</br> $${cashAtBank}`);
document.write(`</br> £${cashAtBank}`);

let fname = "Bob";
let age = 64;
let movie = "Rashōmon";
let filmMaker = "Akira Kurosawa";
let writer = "Ryūnosuke Akutagawa";
let gross1 = 131;
let gross2 = 56;


// use template '${}' literals to format output
document.write(`</br></br>Hi there, my name is ${fname} and I'm ${age} years old. My favorite movie is the 1950 Japanese movie ${movie} by acclaimed director ${filmMaker}. It is taken from the 1915 short story of the same name by ${writer}. The movie has grossed $${gross1},0${gross2} worldwide.`);

document.write(`</br></br>Hi there, my name is ${fname} and I'm ${age} years old. My favorite movie ${movie} by ${filmMaker}. It is taken from the 1915 story of the by ${writer}. The movie has grossed $${gross1},0${gross2} worldwide. // document limit is 248 characters`);

/* [9:30 AM] Abdul Jalloh
 JavaScript Datatypes: Primitive data types (holds simple and single data )

number :  32 bit number ( from -2, 000, 000, 000  to + 2, 000, 000, 000 )
long : 64 bit number ( from -9, 000, 000, 000, 000, 000 to + 9, 000, 000, 000, 000, 000 )
Boolean : 1 bit  0 or 1
float : 32 floating point

undefined
Null : 0 / 1
symbol
string
 
*/
// JavaScript (Object) Datatypes: Non-Primitive data types (holds complex data)
/*
An object
an array
A date
 
*/
 
// An object: Key value pair
// objectName  = {key:value, key:value , key:value, key:value}
const userDetails = {firstname:"John", lastname:"Smith", age: 22, amount: 12.3};
document.write(`</br> ${userDetails.firstname}`);
document.write(`</br> ${userDetails.lastname}`);
console.log(`${userDetails.firstname}`);
console.log(`${userDetails.lastname}`);
 
 
// an array (object)
const people = ["Jane", "Anna", "Lucy", "Paul", "John"];
document.write(`</br> ${people}`);
console.log(`${people}`);
 
// A date(object)
console.log('US Date format');
const curDate = new Date("2023-12-11");
document.write(`</br> ${curDate}`);
console.log(`${curDate}`);
 
console.log('UK Date format');// 
const curDate1 = new Date("11-12-2023");
document.write(`</br> ${curDate1}`);
console.log(`${curDate1}`);
 
 
 
 
// A date


// check the data type of the variable
// document.write("<br/> check the data type of the variable <br/> " )
// document.write(typeof cashAtBank,"<br/>" )



// In-built JavaScript library  
document.write("<br/>  <br/>");
document.write("<br/> Math <br/>");

// Use the dot notation on methods, libraries and functions
 // Returns a pseudorandom number between 0 and 1.
 document.write(Math.random());
 document.write("<br/>  <br/>");
let roundNum = Math.random() * 10;
document.write(`<br/> Random Value : ${roundNum}`);
// document.write("<br/>Rounded down using floor method
document.write(`<br/> Random Value : ${Math.floor(roundNum)}`);
// document.write("<br/>Rounded up using ceil method
document.write(`<br/> Random Value : ${Math.ceil(roundNum)}`);

// Use the dot notation on methods, libraries and functions
 // Returns a pseudorandom number between 0 and 1.
 document.write(Math.random());
 
 document.write("<br/>  <br/>");
 // Generate random number between 1 and 10 (number between 0 and 1  x 10)
 document.write(Math.random() * 10);
  
 // Generate random number between 1 and 10 (number between 0 and 1  x 10) and round it down using the floor method
 document.write("<br/>  <br/>");
  
 let roundNum = Math.random() * 10;
 document.write(`<br/> Random Value : ${roundNum}`);
  
 // document.write("<br/>Rounded down using floor method : ",Math.floor(Math.random() * 10))
 document.write(`<br/> Floor Random Value : ${Math.floor(roundNum)}`);
  
 // Generate random number between 1 and 10 (number between 0 and 1  x 10) and rounds it using the round method
 // document.write("<br/>Rounded using round method : ",Math.round(Math.random() * 10))
 document.write(`<br/> Round Random Value : ${Math.round(roundNum)}`);
  
 // Generate random number between 1 and 10 (number between 0 and 1  x 10) and round up using the ceil method
 // document.write("<br/>Rounded using round method : ",Math.ceil(Math.random() * 10))
 document.write(`<br/> Ceil Random Value : ${Math.ceil(roundNum)}`);

 document.write(`<br/> Ceil Random Value : ${Math.toFixed(roundNum, 3)}`); // fixing to 3 d.p.

// Generate random number between 1 and 10 (number between 0 and 1  x 10)



// Generate random number between 1 and 10 (number between 0 and 1  x 10) and round it down using the floor method


// document.write("<br/>Rounded down using floor method : ",Math.floor(Math.random() * 10))


// Generate random number between 1 and 10 (number between 0 and 1  x 10) and rounds it using the round method
// document.write("<br/>Rounded using round method : ",Math.round(Math.random() * 10))


// Generate random number between 1 and 10 (number between 0 and 1  x 10) and round up using the ceil method
// document.write("<br/>Rounded using round method : ",Math.ceil(Math.random() * 10))