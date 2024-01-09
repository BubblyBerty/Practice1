
/*
To explore loops and integrate them into your code
For Loop
While Loop
ForEach Loop
Do While Loop
*/

//for loop is use to iterate over an object for a specific number of times 



// ++ is the increment operator , where we place the increment operator impacts when the increment takes place
// initial value + 1

// Increment and decrement operators can be placed before (prefix) or after (postfix) the variable they apply to. If you place an increment or decrement operator before its variable, the operator is applied before the rest of the expression is evaluated

// += adds two numbers or strings together, the datatypes being added using += don't necessarily have to have of the same type. Where as ++ adds one only to a number, it does not add one to a strings.

let num1 = 10;
 
document.write(` The value of num1 before the increment ${num1}</br>`);
 
let num2 = ++num1;
 
document.write(` The value of num1 after the increment ${num2}</br>`);
 
let num3 = 10;
num3++; 
document.write(` The value of num3 after the increment ${num3}</br>`);

// for Loop
// for Loop
// i = 0
// i = 1 ...2...3....4...5
for (let i = 0; i <21; i++){
    document.write(`</br> ${i}`)
};

// declare empty array
let multiplesOfTwo = [];
document.write(`</br>Empty array ${multiplesOfTwo}`);
 
 
for (let aNumber = 0; aNumber <25; aNumber++){
    
    if (aNumber % 2 === 0)
    {
        multiplesOfTwo.push(aNumber)
    }
 
};
document.write(`</br>Populated array ${multiplesOfTwo}`);


let oddNumbers = [];
for (let aNum = 0; aNum <25; aNum++){
    
    if (aNum % 2 === 1)
    {
        oddNumbers.push(aNum);
        document.write(`</br>Populated array ${oddNumbers}`);
    }
 
};
document.write(`</br>Populated array ${oddNumbers}`);


// aName = prompt("Enter a name to search ")
let people = ["Peter", "Paul", "Mary", "John", "Tom", "Dick", "Harry", "Bob"]; 
for (let findName in people){
    // document.write(`</br>${people[aPerson]} `)
    if(people[findName] === "Dick")
    // if(people[findName] === aName)
    {
        break;
    }
    document.write(`</br>The list is ends on ${people[findName]} name`)
 
};


// Task 1: Create an array of your favourite films / TV shows, up to 5 items.
//Use an array method to add 2 more items to your array.
//Use a loop to cycle through the array and log each item to the console/ browser.

let films = ["Seven Samurai", "Yojimbo", "The Godfather", "Night Fever", "Grease",]; 
let film6 = "World War Z";
films.push(film6);
let film7 = "Truly, Madly, Deeply";
films.push(film7);
let index = 0;
for (let title1 in films){
        if(films[title1] === 0)
        {
        break;
        }
    document.write(`</br>A film title listed is ${films[title1]}`); 
};


// Task 2: Generate 10 random numbers between 1-100 and log them to the console/browser.

let rand = 0;
let roun = 0;

for (let index2 = 1; index2 < 11; index2++){
    rand = Math.random() * 100;
    roun = Math.round(rand);
    document.write(`</br> ${roun}, `);
};

//While iterates/repeats until a condition is met

let number = 0;
 
while(number < 5){
    document.write(`</br>Number ${number}`)
    number++
};
 

let userData =   "password"//prompt("Enter user data:")
let systemData = "password"
 
while(userData === systemData){
    document.write(`</br>Successfully logged In`)
    systemData++;
 
}
 
let total = 0;
 
// ask for user input
let userNum = parseInt(prompt("Enter a number: "));
 
while(userNum >= 0){
    // add only positve numbers
    // total = total + userNum //total += userNum
    total += userNum;
 
 
        // keep asking for user input if the number is positive
    userNum = parseInt(prompt("Enter a number: "));
 
};
document.write(`</br> The total is ${total} `);

let number1 = 10;
let number2 = 11;
do{
    // body: will run at least once even if the condition is false/ not met
    document.write(`</br> This code will be executed at least once`)
    document.write(`</br> The value ${number1} is less than the value ${number2}`)
    number1++;
   
 
}while(number1 > number2);


let number10 = 10;
let number20 = 15;
do{
    // body: will run at least once even if the condition is false/ not met
    document.write(`</br> This code will be executed at least once`)
    document.write(`</br> The value ${number10} is less than the value ${number20}`)
    number10++;
   
 
}while(number10 < number20);


 

// Task 3: Create a loop that counts backwards from 20-0.


// ForEach method calls a function for each element in an array
document.write(`</br> ForEach method calls a function for each element in an array</br>`)
let peopleArray = ["Philip", "James", "Erica", "Fatinah", "Jason", "Johanna", "Sam", "Nikita"];
 
// using forEach
// theArrayObject.forEeach(somefunction)
peopleArray.forEach(names);
 
 
function names(aPerson){
    // display names of people in the array
    document.write(`</br> ${aPerson}</br>`)
};

let usersArray = ["Philip", "James", "Erica", "Fatinah", "Jason", "Johanna", "Sam", "Nikita"];
document.write(`</br> update </br>`);
usersArray.forEach(usergreetings);

function usergreetings(aPerson, index, arrayObject){
    // display names of people in the array
    arrayObject[index] = "Hello "  + aPerson
 
};
document.write(`</br> ${usersArray}</br>`);

// Task 5:
// Review the for loop examples above and convert them to while, do While and forEach
 



// Do While run the loop first before checking for the condition










