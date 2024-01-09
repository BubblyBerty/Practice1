/*
Arrays and objects
Arrays:
- Learning Objectives: 
-- To understand what an array is
-- To explore how arrays can be used.
-- To make use of array methods.

Objects:
- Learning Objectives: 
-- Explore the concept of an Object
-- To access data from within an object

*/



// is an array
// In JS we start counting from zero(array is zero-index). Start counting from zero
let people = ["Philip", "James", "Erica", "Fatinah", "Jason", "Johanna", "Sam"];

 
// Access items in an array using the index value
document.write(`</br> Person: ${people[1]}`);
document.write(`</br> Person: ${people[2]}`);
document.write(`</br> Person: ${people[3]}`);
document.write(`</br> Person: ${people[6]}`);
document.write(`</br> Person: ${people[-1]}`);
document.write(`</br> Person: ${people[7]}`);

// Access items in an array using the index value
document.write(`People:</br> ${people}`);

// Array property : length
// check the total number of items in an array using the dot notation followed by the length
document.write(`</br> The number of people: ${people.length}`);

// Array Methods
// Add an item to an array using the push method
people.push("Luqman");
document.write(`People:</br> ${people}`);
document.write(`</br> The number of people: ${people.length}`);

// remove the last item in an array using the pop method
people.pop();
document.write(`People:</br> ${people}`);
document.write(`</br> The number of people: ${people.length}`);


// update an item in an array using their index value
people.push("someone");
document.write(`</br> People:</br> ${people}`);
 
people[7]="Luqman";
document.write(`</br> People:</br> ${people}`);
 


// investigate 
people.splice()
people.shift()
people.unshift()

// You can create an empty array to add items later



/*
Objects 
Explore the concept of an Object
To access data from within an object 


*/

let peopleObject = {
    p1:"Zeinab",
    p2:"Akansha",
    p3:"Nirmala",
    p4:"Mihir",
    p5:"Fisayo",
    p6:"Marian",
    p7:"Mihir"
}
// let people = ["Yousef","Alfredo", "Kayi", "Zineb", "Nirupama", "Melvin", "Eduard", "Vairalakshmi", "Yusuf"]

// Syntax: peopleObject {"object":Value}
// An object is a group of values; unlike arrays, we can do something better than them:
// Rather than making an array["John Doe", "Billy"] and calling myArray[0], we can just call john.fullname and
// billy.fullname.

document.write(`</br> People:</br> ${peopleObject}`);

// You can access object properties in two ways:
// objectName.propertyName or objectName["propertyName"]
document.write(`</br> People Object:</br> ${peopleObject.p1}`);

// objectName.propertyName

//objectName["propertyName"]
document.write(`</br> People Object:</br> ${peopleObject['p2']}`);

//Nested objects
let user = {
    firstname: "James",
    lastName:"bond",
    hobby:{
        coding:"JS",
        tvShow:"Game Of Thrones",
 
    }
}
document.write(`</br> People Object:</br> ${user.hobby.tvShow}`);
document.write(`</br> People Object:</br> ${user['hobby']['coding']}`);
// myobj = peopleObject


// myobj = peopleObject
// document.write(myobj)
// console.log(peopleObject)
// Access object data using the bracket notation

// Access object data using the dot notation
// Update an object data using the bracket notation

document.write(`</br>`);
peopleObject.p1 = "Zeinab Abu"
peopleObject['p2'] = "Akansha Dhote"
 
document.write(`</br> People Object:</br> ${peopleObject.p1}`);
document.write(`</br> People Object:</br> ${peopleObject.p2}`);
 
user.hobby.coding = "JavaScript"
document.write(`</br> People Object:</br> ${user['hobby']['coding']}`);


// Add new property to an object data using the bracket notation
document.write(`</br>`);
peopleObject.p8 = ["A","B","C"]
document.write(`</br> People Object:</br> ${peopleObject.p8}`);
document.write(`</br>`);
document.write(`</br> People Object:</br> ${peopleObject.p8[1]}`);



//This is for when JSON object is delivered with local storage [THIS COMMENT IN THE WRONG PLACE]

let userName = "BubblyBerty";
if(userName.length === 11){
    console.log("Valid length");
    document.write(`</br>Valid length`);
 } else{
   console.log("Invalid length");
document.write(`</br>"Invalid length`);
};
document.write(`</br> ${userName.length}`);

let rand = Math.random() * 100;
let round = Math.round(rand);
let div3 = round/3;
let div5 = round/5;
//document.write(`</br> ${rand},     ${round},       ${div3}        ${div5}`);
if(div3-Math.trunc(div3) === 0 || div5-Math.trunc(div5) === 0){
    document.write(`</br> ${round} is divisible by 3 or 5`);
}
else{
    document.write(`</br> ${round} is not divisible by 3 or 5`); 
};

