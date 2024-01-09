function first_JS_function(number1, number2){
    return number1 * number2
};

let a = 2.8;
let b = 3.7;

console.log(first_JS_function(a, b));

//////////////////////////////////
/*
// Task 1: Write a function that takes in a first name and a surname as arguments and returns a message greeting them.
let firstName = prompt("Enter your first name: ");
let surName = prompt("Enter your surname: ");

function fullName(firstName, surName){
    return (`Hello ${firstName} ${surName}, it is so lovely to meet you.`);
}

document.write(`<br>${fullName(firstName, surName)}`);
console.log(fullName(firstName, surName));

//////////////////////////////////
*/
// Task 2: Write a function that takes in a string as an argument and sorts the string into alphabetical order and returns the result.
/*
let aString = "i?sorhf i>seo/jdkl_xe";
tempArray = [];
for(i = 0; i < aString.length; i++){
    // convert string to an array
    let tempChar = aString.charAt(i);
    tempArray.push(tempChar);    
}
let orderedArray = tempArray.sort();
let orderedString = orderedArray.toString();

// Remove commas separating each character
let tempOrdStr = orderedString[0];
for(j = 0; j < orderedString.length; j++){
  tempOrdStr = tempOrdStr + orderedString[j]
  j++
};
console.log("Unordered string is: '",aString,"'");
console.log("Ordered string is: '",tempOrdStr,"'");
*/
//////////////////////////////////

// Create multiple objects to store details of several customers
const owner = {firstName:"Joe", lastName:"Bloggs", company:"Blogs by Bloggs",
                age:45, value:34000000, passport:true, values:[1,2,3,4,5,6]}
const customerList = {
  pin01: 6210, details: {balance: 150, customer: "Fred Dibbly"},
  pin02: 4582, details: {balance: 20, customer: "Robert Morris"},
  pin03: 7562, details: {balance: 50, customer: "Tom Page"},
};

function atm(pin, release){
  // search for pin entered
  for(k = 1; k < customerList.length; k++){
    console.log(customerList.length)
  }
};
console.log(customerList.length);
console.log(customerList);






/* Answers

//Write a function that takes in a first name and a surname as arguments 
and returns a message greeting them.

function greet(firstname, surname){
    return(`Welcome ${firstname} ${surname}`)
  }
  
  let welcome = greet(prompt('What is your firstname?'), prompt('What is your surname?'));
  console.log(welcome)



// Write a function that takes in a string as an argument and sorts the 
string into alphabetical order and returns the result 

function alphaSort(input){
    return input.split("")
    .sort()
    .join("");
  }
  
  let userString = prompt("Type a word to sort aplhabetically");
  console.log(alphaSort(userString))



  let object = {
    string: "This is a string", 
    number: 20, 
    boolean: true,
    array: [0,1,2,3,4],
    nestedObj:{  
      string: "This is a string", 
      number: 20, 
      boolean: true 
    }
  };


/*

// Write a cash machine / atm function that takes in a withdrawal amount 
and a pin number as an argument and compares the pin and withdrawal amount 
against a stored pin and account balance. If the pin matches and the balance 
is sufficient approve the transaction, if not decline the transaction.

function withdraw(amount, pin){
    storedPIN = 9090;
    balance = 1200;
    
    if (amount < balance && pin === storedPIN){
      console.log(`You have withdrawn ${amount} your balance is now ${"£"(amount-balance)}`)
    }
    else {
      console.log("Sorry either the PIN is incorret or the amount is not available")
    }
    
    }
    userPIN = Number(prompt("please enter your PIN Number"));
    userAmount = Number(prompt("Enter the amount to withdraw"));
    withdraw(userAmount, userPIN)

*/

// Task 1a: Create an object called person with keys of name age and city. once created log your object to the console (eventually in a table format).

let person = {
    name: "BooBoo Mellow",
    age: 27,
    city: "London"
};

console.log(person);

// Task 2a: Create an object called “films” that will store 3 nested objects within it, each should have a key referencing the title of a film, each nested film object should contain information about the film such as genre, year of release and rating.

let films = {
    Severn_Samurai: {
        genre: "Martial Arts",
        year_of_release: 1953,
        rating: 10
    }
};

console.log(films);