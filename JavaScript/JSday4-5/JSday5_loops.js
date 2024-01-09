
/*
To explore loops and integrate them into your code
For Loop
While Loop
ForEach Loop
Do While Loop
*/

//for loop is used to iterate over an object for a specific number of times 

// ++ is the increment operator , where we place the increment operator impacts when the increment takes place
// initial value + 1

// Increment and decrement operators can be placed before (prefix) or after (postfix) the variable they apply to. If you place an increment or decrement operator before its variable, the operator is applied before the rest of the expression is evaluated

// += adds two numbers or strings together, the datatypes being added using += don't necessarily have to have of the same type. Where as ++ adds one only to a number, it does not add one to a strings.

document.write("The following text displays result of increment - code lines 19-33<br>");
console.log("Displaying result of increment -")
let num1 = 10;
 
document.write(`The value of num1 before the increment is ${num1}<br>`);
console.log("Before increment: ", num1);
let num2 = ++num1;
 
document.write(`The value of num1 after the increment is ${num2}</br>`);
console.log("After increment: ", num2);
 
let num3 = 10;
num3++; 
document.write(`The value of num3 after the increment is ${num3}</br>`);
console.log("After increment: ", num3);

//////////////////////

document.write("<br><br>The increments are now used in for loop (folo1) - code lines 37-46<br>");

// for Loop
// for Loop
// i = 0
// i = 1 ...2...3....4...5
for (let i = 0; i <21; i++){
    document.write(`<br>${i}, - Incrementation of counter`);
    console.log("Incrementation of counter - ",i);
};

//////////////////////

document.write("<br><br>Create arrays of even and odd numbers (folo2) - code lines 50-71");
// declare empty array
let multiplesOfTwo = [];
document.write(`</br><br>Empty array ${multiplesOfTwo} - displays nothing`);
console.log("Creating array of even numbers");
 
for (let aNumber = 0; aNumber <25; aNumber++){
        if (aNumber % 2 === 0){
        multiplesOfTwo.push(aNumber);
    }
};
document.write(`</br>Populated array of even numbers: ${multiplesOfTwo}<br>`);
console.log("Array of even numbers: ",multiplesOfTwo);

let oddNumbers = [];
for (let aNum = 0; aNum <25; aNum++){
    if (aNum % 2 === 1){
        oddNumbers.push(aNum);
    };
};
document.write(`</br>Populated array of odd numbers: ${oddNumbers} (folo3)`);
console.log("Array of even numbers: ",oddNumbers);

//////////////////////

document.write("<br><br>Creating an array of films (FoLo4) - code lines 75-98");
console.log("Creating an array of films");
// Task 1: Create an array of your favourite films / TV shows, up to 5 items.
//Use an array method to add 2 more items to your array.
//Use a loop to cycle through the array and log each item to the console/ browser.

let films = ["Seven Samurai", "Yojimbo", "The Godfather", "Night Fever", "Grease",];
document.write(`<br>${films}`);
console.log(films);

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
document.write(`<br>Two films added: ${films}`);
console.log("Two films added: ",films);

//////////////////////

document.write("<br><br>Creating ten random integers (folo5) - code lines 102-113");
console.log("Creating ten random integers");
// Task 2: Generate 10 random numbers between 1-100 and log them to the console/browser.

let rand = 0;
let roun = 0;

for (let index2 = 1; index2 < 11; index2++){
    rand = Math.random() * 100;
    roun = Math.round(rand);
    document.write(`</br>A rounded random number: ${roun}, `);
};

//////////////////////

//While iterates/repeats until a condition is met (Wylo1)
document.write("<br><br>While loop iterates until condition is met - code lines 117-127");
console.log("While loop iterates until condition is met");

let number = 0;
 
while(number < 5){
    document.write(`</br>${number}`);
    console.log(number);
    number++;
};

//////////////////////

document.write(`</br><br>Code below requests for a password via prompt box (do while loop - DoWyLo1) - code lines 131-147`);
console.log("Code below requests for a password");

let systemData = "BubblyBerty";

userData = prompt("Enter usernameID:");
do{
    if(userData.length === 11 && userData === systemData){
        console.log("Valid length: ",userData.length);
        document.write(`</br>Successfully logged In`);
        console.log("Successfully logged In");
        break;
        } else{
        console.log("Invalid ID length for successful login");
        userData = prompt("Re-enter usernameID:");
        }
    } while(userData !== null);

//////////////////////

document.write(`</br><br>Code below adds numbers entered into prompt box (WyLo1) - code lines 151-166`);
console.log("Code adds numbers via prompt box");
let total = 0;
 
// ask for user input
let userNum = parseInt(prompt("Enter a number: "));
 
while(userNum > 0){
    // add only positve numbers
    // total = total + userNum //total += userNum
    total += userNum;
    // keep asking for user input if the number is positive
    userNum = parseInt(prompt("Enter a number: "));
};
document.write(`</br>The total of entered numbers is ${total}`);
console.log("Numbers total is ",total);

//////////////////////

// Do While runs the loop first before checking for the condition
document.write(`</br><br>Do While runs the loop first before checking for the condition (comparing number values) (DoWyLo2) - code lines 170-182`);
console.log("Comparing number values");

let number1 = 10;
let number2 = 15;
do{
    // body: will run at least once even if the condition is false/ not met
    document.write(`</br>Do loop - this code will be executed at least once`);
    document.write(`</br>The value ${number1} is less than the value ${number2}`);
    console.log(number1," is less than ",number2);
    number1++;
}while(number1 > number2);

//////////////////////

// Task 3: Create a loop that counts backwards from 20-0 (foLo6)
document.write(`</br><br>Decrementing from 20 (FoLo6) - code lines 186-191`);
    console.log("Decrementing from 20");
for (let reduc = 20; reduc != 0; --reduc){
    document.write(`<br>reducing numbers: ${reduc},  `);
};

//////////////////////

// ForEach method calls a function for each element in an array
document.write(`<br><br>ForEach method calls a function for each element in an array (FoEh1) - code lines 195-207<br>My understanding of the code is written to the document in lines 209-224.`);
console.log("ForEach method invokes a function to display each element in an array");
let peopleArray = ["Philip", "James", "Erica", "Fatinah", "Jason", "Johanna", "Sam", "Nikita"];
 
// using forEach
// theArrayObject.forEeach(somefunction)
peopleArray.forEach(names);
 
function names(aPerson){
    // display names of people in the array
    document.write(`</br>(forEach method) - ${aPerson}`);
};

document.write("</br><br>The Following is my understanding of the 'function' method.");
document.write("<br>1. An ArrayObject was declared and populated in line 195 (called peopleArray).");
document.write("<br>2. Line 199 is code that invokes a function called 'names' that utilises a parameter of 'aPerson' in lines 201-204 (the body of the function).");
document.write("<br<3. The body of the function writes each person's name to the Live Server as arguments, using the forEach method in line 199.");
document.write("<br>4. So line 199 writes the 'names' of each 'aPerson' to the Live Server.");
document.write("<br>The following but next is the code that will write the body (code) of the function directly, as opposed to returning the values:");
document.write("<br>for example - 'let value = toCelsius();' returns the value of the function 'toCelsius'<br>whereas 'let value = toCelsius;' returns the function itself.");
document.write(`<br>${names}`);
console.log(names);
document.write("<br>Lines 195-204:");
document.write(`<br>'195 - let peopleArray = ["Philip",...]);'`);
document.write("<br>'199 - peopleArray.forEach(names);'");
document.write("<br>'201 - function names(aPerson){'");
document.write("<br>'202 - // display names of people in the array'");
document.write("<br>'203 - document.write(`</br>(forEach method) - ${aPerson}`);'");
document.write("<br>'204 - };<br>");

//////////////////////

document.write("<br><br>Greeting added forEach listed using (FoEhLo2): <br>${usergreetings} function - code lines 228-238");
console.log("Greeting added");
let usersArray = ["Philip", "James", "Erica", "Fatinah", "Jason", "Johanna", "Sam", "Nikita"];
usersArray.forEach(usergreetings);

function usergreetings(aPerson, index, arrayObject){
    // display names of people in the array
    arrayObject[index] = "<br>Hello "  + aPerson;
};
document.write(`<br> ${usersArray}`);
console.log(" ",usersArray);

//////////////////////

document.write(`<br><br>Code below prompts user to enter a name to search (for loop with break) (FoLo7) - code lines 242-267`);
console.log("Prompts user for name to search");
document.write("<br><br>The following 'for loop' code starting on line 254: 'for (let findName in people){' was already written in my JS file but I could not discover when it was explained to the students. Consequently I had to do a lot of trial and error in order to make the loop work at all. My subsequent 'while', 'do while' loops (lines 375 & 501 respectively) and 'forEach' method (line 602) of this code are cleaner.<br>");

function names(aPerson){
    // display names of people in the array
    document.write(`</br>(forEach method) - ${aPerson}`);
};

aName = prompt("Enter a name to search for")
let people = ["Peter", "Paul", "Mary", "John", "Tom", "Dick", "Harry", "Bob"];
let k = 0; 
for (let findName in people){ // Equivalent of forEach loop
    if(people[findName] === aName)
    {
        document.write(`</br><br>${people[findName]} is listed after ${people[findName-1]} in the array at index ,${k}`);
        break;
    } else
     {
        document.write(`<br>${aName} is not listed`);
        console.log(aName," is not listed", k);
    };
    document.write(`<br>A name listed before ${aName} is ${people[findName]} at index ${k}`);
    console.log("A name listed before ",aName," is: ",people[findName]," at index ",k);
    k++;
};

//////////////////////





// Task 5:
document.write("<br><br>Task 5:<br>Review the 'for loop' examples above and convert them to 'while', 'do While' and 'forEach'");
console.log("Review the 'for loop' examples above and convert them to 'while', 'do While' and 'forEach'");

document.write("<br><br>For loop 1 (FoLo1) converted to while loop - lines 279-287");

let m = 0;
// i = 1 ...2...3....4...5
while(m <21){
    document.write(`<br>${m}, - Incrementation of counter`);
    console.log("Incrementation of counter - ",m);
    m++;
};

//////////////////////

document.write("<br><br>For loop 2 (FoLo2) converted to while loop - lines 291-303");
let multiplesOfTwo2 = [];
console.log("Creating array of even numbers");
let aNumber2 = 1; 
while ( aNumber2 < 25){
    if (aNumber2 % 2 === 0)
    {
        multiplesOfTwo2.push(aNumber2);
    }
    aNumber2++;
};
document.write(`</br>Populated array of even numbers: ${multiplesOfTwo2}`);
console.log("Array of even numbers: ",multiplesOfTwo2);

//////////////////////

document.write("<br><br>For loop 3 (FoLo3) converted to while loop - lines 307-318");
let oddNumbers3 = [];
let aNum3 = 1;
while (aNum3 < 25){
    if (aNum3 % 2 === 1)
    {
        oddNumbers3.push(aNum3);
    };
    aNum3++;
};
document.write(`</br>Populated array of odd numbers: ${oddNumbers3}`);
console.log("Array of even numbers: ",oddNumbers3);

//////////////////////

document.write("<br><br>For loop 4 (FoLo4) converted to while loop - lines 322-344");
console.log("Creating an array of films");

let films_4 = ["Seven Samurai", "Yojimbo", "The Godfather", "Night Fever", "Grease",];
document.write(`<br>${films_4}`);
console.log(films_4);

let film6_4 = "World War Z";
films_4.push(film6_4);
let film7_4 = "Truly, Madly, Deeply";
films_4.push(film7_4);
let index_4 = 0;
let title4_4 = films_4[index_4];
while (index_4 <= films_4.length){
        if(films_4[title4_4] === index_4)
        index_4++;
        {
        break;
        }
    document.write(`</br>A film title listed is ${films_4[title4_4]}`); 
};
document.write(`<br>Two films added: ${films_4}`);
console.log("Two films added: ",films_4);

//////////////////////

document.write("<br><br>For loop 5 (FoLo5) converted to while loop - lines 348-360");
console.log("Creating ten random integers");
// Task 2: Generate 10 random numbers between 1-100 and log them to the console/browser.

let rand_5 = 0;
let roun_5 = 0;
let index2_5 = 1;
while ( index2_5 < 11){
    rand_5 = Math.random() * 100;
    roun_5 = Math.round(rand_5);
    document.write(`</br>A rounded random number: ${roun_5}, `);
    index2_5++;
};

//////////////////////

document.write("<br><br>For loop 6 (FoLo6) converted to while loop - lines 364-370");
console.log("Decrementing from 20");
let reduc_6 = 20;
while ( reduc_6 != 0 ){
    document.write(`<br>reducing numbers: ${reduc_6},`);
    --reduc_6;
};

//////////////////////

document.write("<br><br>For loop 7 (FoLo7) converted to while loop - lines 374-401");
console.log("Prompts user for name to search");

aName_7 = prompt("Enter a name to search for")
let people_7 = ["Peter", "Paul", "Mary", "John", "Tom", "Dick", "Harry", "Bob"];
let n = 0;
document.write(`<br><br>Search scope: indices 0 - ${people_7.length}`);
console.log("Search scope: indices 0 - ",people_7.length);
let findName_7 = "";

while (n <= people_7.length){
    findName_7 = people_7[n];
    if(findName_7 !== aName_7){
        document.write(`</br>Searching for ${aName_7} at index ${n}`);
        console.log("Searching for ",aName_7," at index ",n);
        n++;
        } else if(findName_7 === aName_7){
        document.write(`</br><br>${aName_7} is listed at index ${n}`);
        console.log(aName_7," is listed at index ",n);
        break;
        }
        // Addition for loop in case that the name entered is not in the array
        if(n === people_7.length){
            document.write(`</br><br>${aName_7} is NOT listed`);
            console.log(aName_7," is NOT listed at index ",n);
            break;
        }
};

//////////////////////

document.write("<br><br>For loop 1 (FoLo1) converted to do while loop - lines 405-413");

let m_dw = 1;
// i = 1 ...2...3....4...5
do {
    document.write(`<br>${m_dw}, - Incrementation of counter`);
    console.log("Incrementation of counter - ",m_dw);
    m_dw++;
} while (m_dw <21);

//////////////////////

document.write("<br><br>For loop 2 (FoLo2) converted to do while loop - lines 417-429");
let multiplesOfTwo2_dw = [];
console.log("Creating array of even numbers");
let aNumber2_dw = 1; 
do {
    if (aNumber2_dw % 2 === 0)
    {
        multiplesOfTwo2_dw.push(aNumber2_dw);
    }
    aNumber2_dw++;
} while ( aNumber2_dw < 25);
document.write(`</br>Populated array of even numbers: ${multiplesOfTwo2_dw}`);
console.log("Array of even numbers: ",multiplesOfTwo2_dw);

//////////////////////

document.write("<br><br>For loop 3 (FoLo3) converted to do while loop - lines 433-444");
let oddNumbers3_dw = [];
let aNum3_dw = 1;
do {
    if (aNum3_dw % 2 === 1)
    {
        oddNumbers3_dw.push(aNum3_dw);
    };
    aNum3_dw++;
} while (aNum3_dw < 25);
document.write(`</br>Populated array of odd numbers: ${oddNumbers3_dw}`);
console.log("Array of even numbers: ",oddNumbers3_dw);

//////////////////////

document.write("<br><br>For loop 4 (FoLo4) converted to do while loop - lines 448-469");
console.log("Creating an array of films");
let films_4_dw = ["Seven Samurai", "Yojimbo", "The Godfather", "Night Fever", "Grease",];
document.write(`<br>${films_4_dw}`);
console.log(films_4_dw);

let film6_4_dw = "World War Z";
films_4_dw.push(film6_4_dw);
let film7_4_dw = "Truly, Madly, Deeply";
films_4_dw.push(film7_4_dw);
let index_4_dw = 0;
let title4_4_dw = films_4_dw[index_4_dw];
do {
        if(films_4_dw[title4_4_dw] === index_4_dw)
        index_4_dw++;
        {
        break;
        }
    document.write(`</br>A film title listed is ${films_4_dw[title4_4_dw]}`); 
} while (index_4_dw <= films_4_dw.length);
document.write(`<br>Two films added: ${films_4_dw}`);
console.log("Two films added: ",films_4_dw);

//////////////////////

document.write("<br><br>For loop 5 (FoLo5) converted to do while loop - 473-486");
console.log("Creating ten random integers");
// Task 2: Generate 10 random numbers between 1-100 and log them to the console/browser.

let rand_5_dw = 0;
let roun_5_dw = 0;
let index2_5_dw = 1;
do {
    rand_5_dw = Math.random() * 100;
    roun_5_dw = Math.round(rand_5_dw);
    document.write(`</br>A rounded random number: ${roun_5_dw}, `);
    index2_5_dw++;
} while (index2_5_dw < 11);
console.log("Creating ten random integers");

//////////////////////

document.write("<br><br>For loop 6 (FoLo6) converted to do while loop - lines 490-496");
console.log("Decrementing from 20");
let reduc_6_dw = 20;
do {
    document.write(`<br>reducing numbers: ${reduc_6_dw},`);
    --reduc_6_dw;
} while ( reduc_6_dw != 0 );

//////////////////////

document.write("<br><br>For loop 7 (FoLo7) converted to do while loop - lines 500-527");
console.log("Prompts user for name to search");

aName_7_dw = prompt("Enter a name to search for")
let people_7_dw = ["Peter", "Paul", "Mary", "John", "Tom", "Dick", "Harry", "Bob"];
let n_dw = 0;
document.write(`<br><br>Search scope: indices 0 - ${people_7_dw.length}`);
console.log("Search scope: indices 0 - ",people_7_dw.length);
let findName_7_dw = "";

do {
    findName_7_dw = people_7_dw[n_dw];
    if(findName_7_dw !== aName_7_dw){
        document.write(`</br>Searching for ${aName_7_dw} at index ${n_dw}`);
        console.log("Searching for ",aName_7_dw," at index ",n_dw);
        n_dw++;
        } else if(findName_7_dw === aName_7_dw){
        document.write(`</br><br>${aName_7_dw} is listed at index ${n_dw}`);
        console.log(aName_7_dw," is listed at index ",n_dw);
        break;
        }
        // Addition for loop in case that the name entered is not in the array
        if(n_dw === people_7_dw.length){
            document.write(`</br><br>${aName_7_dw} is NOT listed`);
            console.log(aName_7_dw," is NOT listed");
            break;
        }
} while (n_dw <= people_7_dw.length);

//////////////////////

//////////////////////

document.write("<br><br>For loop 1 (FoLo1) converted to forEach method - lines 533-540");
console.log("Declaring array of incremental numbers");

let numberArray_fe = ["1","2","3","4","5"];
numberArray_fe.forEach(integers1_fe);
function integers1_fe(increments_fe){
    document.write(`</br>(forEach method) - ${increments_fe}`);
};

//////////////////////

document.write("<br><br>For loop 2 (FoLo2) converted to forEach method - lines 544-554");
console.log("Declaring array of even numbers");

let multiplesOfTwo2_fe = ["2","4","6","8","10"];

multiplesOfTwo2_fe.forEach(evens_fe);
function evens_fe(evenNumbers_fe){
    document.write(`</br>(forEach method) - ${evenNumbers_fe}`);
};
document.write(`</br>Printed array of even numbers`);
console.log("Printed array of even numbers");

//////////////////////

document.write("<br><br>For loop 3 (FoLo3) converted to forEach method - lines 558-568");
console.log("Declaring array of odd numbers");

let oddNumbers3_fe = ["1","3","5","7","9"];

oddNumbers3_fe.forEach(odds_fe);
function odds_fe(oddNumbers_fe){
    document.write(`</br>(forEach method) - ${oddNumbers_fe}`);
};
document.write(`</br>Printed array of odd numbers`);
console.log("Printed array of odd numbers");

//////////////////////

document.write("<br><br>For loop 4 (FoLo4) converted to forEach method - lines 572-591<br>");
console.log("Declaring an array of films and then allocating titles to be pushed by the function");

let films_4_fe = ["Seven Samurai","Yojimbo","The Godfather","Night Fever","Grease"];
films_4_fe.forEach(filmNames_fe);
function filmNames_fe(movies){
    document.write(`(forEach method) - "${movies}"<br>`);
};
console.log(films_4_fe," - invoking forEach function");

films_4_fe.push("World War Z");
films_4_fe.push("Truly, Madly, Deeply");

films_4_fe.forEach(filmNames_fe);
function filmNames_fe(movies){
    document.write(`(forEach method) - "${movies}"<br>`);
};
console.log(films_4_fe);
document.write(`<br>Two films added`);
console.log("Two films added");

//////////////////////

document.write("<br><br>For loop 5 (FoLo5) converted to forEach method - lines 595-605");
console.log("Creating ten random integers");
// Task 2: Generate 10 random numbers between 1-100 and log them to the console/browser.

let index_fe = [1,2,3,4,5,6,7,8,9,10];
index_fe.forEach(randNumbs_fe);
function randNumbs_fe(randomness){
    randomness = Math.random() * 100;
    randomness = Math.round(randomness);
    document.write(`(Random integers using forEach method) - "${randomness}"<br>`);
};

//////////////////////

document.write("<br><br>For loop 6 (FoLo6) converted to forEach method - lines 609-617");
console.log("Decrementing from 10");
let decrements = [10,9,8,7,6,5,4,3,2,1];
decrements.forEach(decrets);
function decrets(reducts){
    document.write(`<br>Reducing numbers: ${reducts},`);
    --reducts;
}
console.log("Decremented from 10");

//////////////////////

document.write("<br><br>For loop 7 (FoLo7) converted to forEach method - lines 621-648");
console.log("Prompts user for name to search");

searchName_7_fe = prompt("Enter a name to search for")
let people_7_fe = ["Peter", "Paul", "Mary", "John", "Tom", "Dick", "Harry", "Bob"];
document.write(`</br>Because the forEach method is being employed the code will continue to search for the name entered even though it has been found.`);
console.log("Because the forEach method is being employed the code will continue to search for the name entered even though it has been found.");
document.write(`<br><br>Search scope: indices 0 - ${[people_7_fe.length] -1}`);
console.log("Search scope: indices 0 - ",people_7_fe.length -1);

let n_fe = 0;
let findName_7_fe = "";
people_7_fe.forEach(arrayName);
function arrayName(findName_7_fe){
    if(findName_7_fe === searchName_7_fe){
        document.write(`</br><br>${searchName_7_fe} is listed at index ${n_fe}<br>`);
        console.log(searchName_7_fe," is listed at index ",n_fe);
        } else if(findName_7_fe !== searchName_7_fe){
        document.write(`</br>Searching for ${searchName_7_fe} at index ${n_fe}`);
        console.log("Searching for ",searchName_7_fe," at index ",n_fe);
        n_fe++;
    } 
        // Addition for loop in case that the name entered is not in the array
        if(n_fe === people_7_fe.length){
            document.write(`</br><br>${searchName_7_fe} is NOT listed`);
            console.log(searchName_7_fe," is NOT listed");
        }
}

//////////////////////

//////////////////////

// Further Day 5 tasks

/* Write a new program which will create an array with 10 city names - lines 656-686.
•	Display the array in the browser/console with all the items/elements(cities)
•	add a new city in index position 4 using splice() */

let cities = ["London", "New York", "Paris", "Tokyo", "Rome", "Madrid", "Munich", "Oslo", "Dublin", "Athens"];

document.write(`</br></br>The list of cities is ${cities}, <br><br>(The following code line numbers will change as I insert more loops above this code)`);
console.log("The list of cities");

cities.splice(3,0,"Edinburgh");

document.write(`</br></br>The updated list of cities is ${cities}, `);
console.log("1st updated list of cities");

//•	Display/console log  the fourth item in the array by index position/value.
//•	Remove any two cities from the list, see example below

document.write(`</br></br> The 4th item in the cities list is ${cities[3]}. `);
console.log("Display the 4th item of cities");

cities.splice(2,1); // start to remove from Erica and ends at Erica (starts index 2, remove 1 item)
cities.splice(6,1); // start to remove from Erica and ends at Erica (starts index 2, remove 1 item)
document.write(`</br></br>The a further updated list of cities is ${cities}, `);
console.log("2nd updated list of cities");

document.write(`</br></br>The length of the cities array is ${cities.length} items.`);
console.log("The length of the cities array");

cities.sort();
document.write(`</br></br> City: ${cities}.`);
console.log("Cities displayed in alphabetical order");

//////////////////////

document.write("<br><br>Task2 - Several methods manipulating a string - lines 690-745");
console.log("Several methods manipulating a string");
/*Task2 
 You have been provided with the following string of characters stored in the variable as shown below 
userString = " JavaScript is my first programming language"
•	Display in the browser/console the 1st, 3rd, 6th, 9th and 11th characters from the string (userString) provided above.
•	Return the length of the string.
•	Slice the string to print between the 3rd and 11 characters.
•	Display in the browser/console up to the 15th character from your string.
•	Display in the browser/console all the characters in the user string in capital letters. 
•	Display in the browser/console out the first letter of all the sub strings in capital letters. 
•	Replace the substring “third” with a word of your choice.*/

userString = " JavaScript is my first programming language";

document.write(`</br></br> This is the 1st character of userString: "${userString[0]}".`);
console.log("Displaying the 3rd character of userString");

document.write(`</br></br> This is the 3rd character of userString: "${userString[2]}".`);
console.log("Displaying the 3rd character of userString");

document.write(`</br></br> This is the 6th character of userString: "${userString[5]}".`);
console.log("Displaying the 6th character of userString");

document.write(`</br></br> This is the 9th character of userString: "${userString[8]}".`);
console.log("Displaying the 9th character of userString");

// returning the length of the string
document.write(`</br></br> This is the length of userString: ${userString.length} characters.`);
console.log("Displaying the length of userString");

// returning the 15th character of the string
document.write(`</br></br> The 15th character of userString is: "${userString[14]}".`);
console.log("Displaying the 15th character of userString: ",userString[14]);

// Displaying the string in upper case
document.write(`</br></br> This is the contents of the userString in upper case: ${userString.toUpperCase()}`);
console.log("Displaying the contents of the userString in upper case");

//	Display in the browser/console all the characters in the user string in capital letters. 
document.write(`</br></br> The Capital letters in the userString are: ${userString[1]} and ${userString[5]}`);
console.log("The Capital letters in the userString");

//Replace the substring “third” with a word of your choice

found = userString.indexOf("m");
document.write(`</br></br> The third word of userString starts with "m" at index: ${found}; and is part of the word "my".`);

document.write(`</br>Replacing the word "my" in userString will display result in the LIVE SERVER and CONSOLE LOG ONLY: ${userString.substring(0, found-1)} nicht meine ${userString.substring(found+3, userString.length)}`);
console.log(userString," - userString is unchanged - line 739");
console.log("Replacing the word my in userString");

userString = userString.substring(0, found-1) + " nicht meine " + userString.substring(found+3, userString.length);
document.write(`<br>Replacing the word 'my' in userString within the string: ${userString}`);
console.log("Replacing the word 'my' in userString");
document.write(`</br><br>userString is now: "${userString}" with "${userString[0]}" being the first character`);
document.write(`</br>New string length is now ${userString.length}<br>`);

//////////////////////

// returning capitilsation of each word in the string
document.write("<br><br>Capitalising the string - lines 749-787<br>");
console.log("Capitalising the string");
// First test to find where the spaces in the text are
// Should be 0, 11, 14, 20, 26, 32, 44.
console.log(userString.indexOf(" ")); // returns 0
console.log(userString.indexOf(" ",1)); // returns 11
console.log(userString.indexOf(" ",12)); // returns 14
console.log(userString.indexOf(" ",15)); // returns 20
console.log(userString.indexOf(" ",21)); // returns 26
console.log(userString.indexOf(" ",27)); // returns 32
console.log(userString.indexOf(" ",33)); // returns 44
console.log(userString.indexOf(" ",45)); // returns -1

console.log(`${userString.lastIndexOf(" ")}, `); // returns 44

for (xx = 0; xx <= userString.length; xx++){
    console.log(xx," = ",userString[xx]);
};

// Now to create a new string (note that the space at index 0 has been removed)
let tempString = userString[0]+userString[1].toUpperCase()+userString.substring(2, 11)+" "+userString[12].toUpperCase()+userString.substring(13, 14)+" "+userString[15].toUpperCase()+userString.substring(16, 20)+" "+userString[21].toUpperCase()+userString.substring(22, 26)+" "+userString[27].toUpperCase()+userString.substring(28, 32)+" "+userString[33].toUpperCase()+userString.substring(34, 44)+" "+userString[45].toUpperCase()+userString.substring(46, userString.length);

document.write(`</br>First character of new string is: "${tempString[0]}"`);
document.write(`</br></br>Capitalised string is: ${tempString}`);
console.log("Returns capitilsation of each word/substring within userString");

//•	Display in the browser/console out the first letter of all the sub strings in capital letters.
displayArray = [];
displayArray.push(tempString[1].toUpperCase());
displayArray.push(tempString[12].toUpperCase());
displayArray.push(tempString[15].toUpperCase());
displayArray.push(tempString[21].toUpperCase());
displayArray.push(tempString[27].toUpperCase());
displayArray.push(tempString[33].toUpperCase());
displayArray.push(tempString[45].toUpperCase());

document.write(`</br></br> Capitalised letters of each word: ${displayArray}`);
console.log(displayArray);

//////////////////////

document.write("<br><br>Self-learning challenge - To create a loop to capitalise a text - lines 791-968");
console.log("Create a loop to capitalise text entered by user");
// Goal. Create a loop to capitalise sentences AND to assign new text to a string variable. 
// 1. Create a loop to assign substrings to an array.
// 2. Convert and assign array elements to a new string.

// The following loop will not achieve my goal because the methods make no permanent changes to a string - https://www.w3schools.am/js/js_string_methods.html#gsc.tab=0

userString2 = "so, you want to be a hero, do you?";
userString3 = "";
y = 0;
z = 0;
userString3 = userString2.replace(userString2[z], userString2[z].toUpperCase());
console.log(userString2);
console.log(userString3);
console.log(userString2);

/*
while (z < userString2.length){
    userString3 = userString2.replace(userString2[z], userString2[z].toUpperCase());
    y = userString2.indexOf(" ",z);
    userString3 = userString3.concat([z], y);
    z = y;
};
document.write(`</br></br>Capitalised letters of each word: ${userString2} log Z`);
console.log("Capitalised letters of each word: ",userString2," log Z");
*/
// So far I have been unable to assign upper case characters to a string because every loop I create iterates without a break

// Initial testing of string and array behaviour (10 loops)

userString2 = "so, you want to be a hero, do you?";
console.log("Length of string = ",userString2.length);
myArray = [];
p = 0;
q = 0;
r = 0;
element = "";
//loop1
q = userString2.indexOf(" ",p);
element = userString2.substring(p, q);
myArray.push(element);
console.log(p, q, r, element," - 1st element");
//document.write(`<br><br>${element} - element value`);
p = q+1;
r = r+1;
//loop2
q = userString2.indexOf(" ",p);
element = userString2.substring(p, q);
myArray.push(element);
console.log(p, q, r, element," - 2nd element");
//document.write(`<br><br>${element} - element value`);
p = q+1;
r = r+1;
//loop3
q = userString2.indexOf(" ",p);
element = userString2.substring(p, q);
myArray.push(element);
console.log(p, q, r, element," - 3rd element");
//document.write(`<br><br>${element} - element value`);
p = q+1;
r = r+1;
//loop4
q = userString2.indexOf(" ",p);
element = userString2.substring(p, q);
myArray.push(element);
console.log(p, q, r, element," - 4th element");
//document.write(`<br><br>${element} - element value`);
p = q+1;
r = r+1;
//loop5
q = userString2.indexOf(" ",p);
element = userString2.substring(p, q);
myArray.push(element);
console.log(p, q, r, element," - 5th element");
p = q+1;
r = r+1;
//loop6
q = userString2.indexOf(" ",p);
element = userString2.substring(p, q);
myArray.push(element);
console.log(p, q, r, element," - 6th element");
p = q+1;
r = r+1;
//loop7
q = userString2.indexOf(" ",p);
element = userString2.substring(p, q);
myArray.push(element);
console.log(p, q, r, element," - 7th element");
p = q+1;
r = r+1;
//loop8
q = userString2.indexOf(" ",p);
element = userString2.substring(p, q);
myArray.push(element);
console.log(p, q, r, element," - 8th element");
p = q+1;
r = r+1;
//loop9
q = userString2.indexOf(" ",p);
element = userString2.substring(p, q);
myArray.push(element);
console.log(p, q, r, element," - 9th element");
p = q+1;
r = r+1;
//loop10
q = userString2.indexOf(" ",p);
element = userString2.substring(p, q);
myArray.push(element);
console.log(p, q, r, element," - 10th element");
p = q+1;
r = r+1;

// Populate an array with each substring separated by a text space
// Many logs created to ensure behaviour of the variables is as expected
myArray2 = [];
a = 0;// = p/s
b = 0;// = q/t
c = 0;// = r/v
element2 = "";
d = userString2.lastIndexOf(" ") +1;//u
console.log(d, "Last space");
let count = (userString2.match(/ /g) || []).length;
console.log(count);
for(c = 0; c < count; c++){
    b = userString2.indexOf(" ",a);
    element2 = userString2.substring(a, b);
    myArray2.push(element2);
    console.log(a, b, c, d, element2, myArray2);
    //document.write(`<br>${a}, ${b}, ${c}, ${c}, ${element2}, ${myArray2}`);
    b = b+1;
    a = b;
}
b = userString2.lastIndexOf(" ");
element2 = userString2.substring(d, userString2.length);
myArray2.push(element2);
console.log(a, b, c, d, element2, myArray2);
//document.write(`<br>${a}, ${b}, ${c}, ${d}, ${element2}, ${myArray2}`);  
console.log(myArray2.at(0), "- log A");

// The above loop manipulation on the array functions as expected

// Now to create a loop to generate a new capitalised string. This works as expected if the for and do loops are written sequentially. Any attempt I made to combine them has only resulted in iterations never breaking regardless of loop type.

let conc = [];
let tempText1 = "";
let tempText2 = [];
let w = 0;
console.log(w," is value of w");
console.log(myArray2," log AA");

let counterArr = [];
do{
    tempText1 = myArray2.at(w);
    console.log("counter = ",w," log E");
    tempText2.push(tempText1[0].toUpperCase() + tempText1.substring(1,tempText1.length));
    //document.write(`<br><br>Temp1 = ${tempText1} log B`);
    console.log("Temp1 = ",tempText1," log B");
    //document.write(`<br><br>Temp2 = ${tempText2} log C`);
    console.log("Temp2 = ",tempText2," log C");
    conc.push(tempText2.at(0));
    //document.write(`<br><br>Conc = ${conc} log D`);
    console.log("Conc = ",conc," log D");
    tempText2.pop();
    console.log("Temp2 = ",tempText2," log C");
    w = ++w;
    console.log("counter = ",w," log E");

} while(w < myArray2.length);

document.write(`<br><br>Capitalised text = ${conc}`);

// Now to concatenate each element of the array into a string
capitals = "";
for(x = 0; x <= count; x++){
    capitals = capitals + conc[x] + " ";
}
document.write(`<br><br>${capitals}`);

