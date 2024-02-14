// Introduction to JavaScript: Part1A Sequence Programming Construct
//  --- Writing In-browser JavaScript 
//  --- Writing Developer Console (Logs, Errors, debug.) 
//  --- Variables and data types Part
//  --- Properties and Methods
//  --- In-built JavaScript Library that has mathematical properties and methods 

// A Variable is a container that hold value (of any datatype)


// any variable(var/let/const)declared outside of a code has a global scope

// Var  = old syntax  - Don't use
var oldSchool  = "Old method of declaring a  variables";

var num1  = 10;
console.log(oldSchool);
console.log(num1);


myName = "Abdul";
console.log(myName);

let £cash = 1.00;
let $cash = 1.00;

// myName = "James";
// console.log(myName);


// var myNamed = "Jane";
// console.log(myNamed);


// myNamed = "Janet";
// console.log(myNamed);


let changeAble = "A value stored in a variable that can be redeclared";
console.log(changeAble);


// redeclare changeAble
changeAble = "A new value has been passed/redeclared wtih the changeAble variable";
console.log(changeAble);

// Create a variable using var and change the initial value
var something = "something";


// const for variables with values that will not change
const  myConstant = "A value that can not be redeclared";
const daysInWeek = 7;


// Limitations

//can't re declare a variable as show below 
// let someVar = "something"
// let someVar ="something else"

// variables declaed wtihout a value results in undefined
let someVar;  
console.log(someVar);

//We cannot overwrite the value(s) of const variable(s)
// const daysInWeek = 5;


// In browser javaScript
// document.write 



// use const to declare variables with value(s) that will never change


// We cannot overwite the values of a constant variable

// daysInWeek = 5;

// document.write("<br/> Modified value:", daysInWeek);


document.write("Working with the document.write method in JS </br>JavaScript Datatypes");
// JavaScript Datatypes: Primitive data types (holds simple and single data )
// /*
// number :  32 bit number ( from -2, 000, 000, 000  to + 2, 000, 000, 000 )
// long : 64 bit number ( from -9, 000, 000, 000, 000, 000 to + 9, 000, 000, 000, 000, 000 )
// Boolean : 1 bit  0 or 1
// float : 32 floating point number
// undefined
// Null
// symbol
// string
// */
//  128  64  32  16 8 4  2   1
//  0    0    1  0  0 0  0   0  : binary
//  0    1    0  0  0 0  0   0  : binary


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

document.write("</br> Number/Integer ", num2);
document.write("</br> Float/decimal ", myFloat);
document.write("</br> Long ", myLongNum);
document.write("</br> Boolean Value 1 ", bool1);
document.write("</br> Boolean Value 2 ", bool2);


//undefined
document.write("</br> undefined value: ", undefined);

let fName = "James";
let lName = "Bond";

// concatenate(to join):  use the plus operator 

let fullName = fName + " " + lName;
document.write("</br> Your full name is </br>", fullName,"</br>" )


let breakfast = "Toast";
let lunch = "Chicken Salad";
let dinner = "Mash";
let mealCost = 12;

// use template '${}' literals to format output 
document.write(`Today, ${fullName} had ${breakfast} for breakfast, and will have ${lunch} for lunch, but no dinner. </br> His total is ${mealCost}`);



let $ = "I am a dollar";
document.write(`</br>${$}`);

document.write("</br> Check the data types of variables ");
document.write(typeof num2 ,"</br>");
document.write(typeof myFloat ,"</br>");
document.write(typeof myLongNum,"</br>");
document.write(typeof bool1,"</br>");
document.write(typeof fullName ,"</br>");
document.write(typeof daysInWeek,"</br>");


let cashAtBank = 12000;
document.write(`</br> $${cashAtBank}`);
document.write(`</br> £${cashAtBank}`); 


// JavaScript (Object) Datatypes: Non-Primitive data types (holds complex data)
// /*
// An object
// an array 
// A date

// */

// An object: Key value pair
// objectName  = {key:value, key:value , key:value, key:value}
const userDetails = {firstname:"John", lastname:"Smith", age:22, amount:12.3}
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
const curDate = new Date("2023-12-12");
document.write(`</br> ${curDate}`);
console.log(`${curDate}`);

console.log('UK Date format');
const curDate1 = new Date("11-12-2023");
document.write(`</br> ${curDate1}`);
console.log(`${curDate1}`);


// In-built JavaScript library  
document.write("<br/>  <br/>");
document.write("<br/> Math <br/>");

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

// document.write("<br/>Rounded down using floor method : ",Math.floor(Math.random() * 10));
document.write(`<br/> Floor Random Value : ${Math.floor(roundNum)}`);

// Generate random number between 1 and 10 (number between 0 and 1  x 10) and rounds it using the round method
// document.write("<br/>Rounded using round method : ",Math.round(Math.random() * 10));
document.write(`<br/> Round Random Value : ${Math.round(roundNum)}`);

// Generate random number between 1 and 10 (number between 0 and 1  x 10) and round up using the ceil method
document.write("<br/>Rounded using round method : ",Math.ceil(Math.random() * 10));
document.write(`<br/> Ceil Random Value : ${Math.ceil(roundNum)}`);

