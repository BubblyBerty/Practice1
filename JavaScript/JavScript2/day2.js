// Part 2: Selection programming Construct
 
 

// Strings in JavaScript

// </br> works in the browser and the console window
document.write("He said hello thats it </br>");
document.write("He said 'hello' thats it </br>");
document.write('He said "hello" thats it </br>');
document.write("He said \"hello\" thats it </br>");

// \n and \u000a works in the console window and not in the browser
let quote = " </br>He said \nhello thats it ";
let quote2 = " </br>They said \u000ahello thats it ";
// console.log(clear());
document.write(quote2);
console.log(quote);
console.log(quote2);



let breakfast = "Toast";
let lunch = "Chicken Salad";
let dinner = "Mash";
let mealCost = 12;


//Returns the length of a string
document.write(`</br> The number of characters in ${breakfast} is ${breakfast.length}`);

//Returns Upper case
document.write(`</br> Upper case ${breakfast.toUpperCase()}`);
 
//Returns lower case
document.write(`</br> lower case ${breakfast.toLowerCase()}`);

//Replace one string with another string value
document.write(`</br> ${dinner}`)
document.write(`</br> Replaces a string with another string ${dinner.replace("Mash", "Fries")}`);

[11:35 AM] Abdul Jalloh
//slices part of a string
document.write(`</br> ${lunch}`)
document.write(`</br> Sliced ${lunch}: ${lunch.slice(2, 7)} `);
[11:35 AM] Abdul Jalloh
document.write(`</br> Sliced ${lunch}: ${lunch.slice(2, -2)} `);
// so the 7 is the index of the character in the string but not the length of number of characters returned

//Returns a substring of the main string (THE 2ND PARAMETER IS THE INDEX BEFORE THE ONE REQUESTED!)
document.write(`</br> substring ${lunch.substring(4, 9)}`);
 
 
 
 
//Returns the indes value of a character
document.write(`</br> index of ${lunch.indexOf("a")}`);
document.write(`</br> index of ${lunch.indexOf("c")}`);
 
// document.write(`</br> last index of ${)}`);
 
 
let mealCost = 12.345666;
//Returns
document.write(`</br> ${mealCost.toFixed(1)}`);
document.write(`</br> ${mealCost.toFixed(2)}`);
document.write(`</br> ${mealCost.toFixed(3)}`);


Strings functions

let num2 = 11;
let num3 = 12;
 
let numberToString = String(num3);
document.write(`</br> ${numberToString}: ${typeof numberToString}</br>`);

 
Type Conversion and Coercion

let num4 = "500";
let stringnum = Number(num4);
document.write(`</br> ${stringnum}: ${typeof stringnum}</br>`);


 
let num6 = 1;
let boolNum = Boolean(num6);
document.write(`</br> ${boolNum}: ${typeof boolNum}</br>`);
 

let num7 = 0;
let boolNum1 = Boolean(num7);
document.write(`</br> ${boolNum1}: ${typeof boolNum1}</br>`);
 
// Scope: If, Else conditionals & Switch case (operators) */


let userNum = 45;
let computerNum = 22;
//== - Equal to
if (userNum == computerNum){
    //do something/execute code below
    console.log("The values are the same")
    document.write(`</br> The value ${userNum} is the same as ${computerNum}  `)
} else{
    console.log("The values are not the same!!!!")
    document.write(`</br> The value ${userNum} is the not same as ${computerNum} !!!!`)

    let trafficLight = "Red";
// let stopWait = "Red";
// let getReady = "Yellow"
 
 
if(trafficLight === "Green"){
    console.log("Safe to cross the road")
    document.write(`</br> Safe to cross the road `)
 
}else if (trafficLight === "Red") {
    console.log("Not Safe to cross the road")
    document.write(`</br>Not Safe to cross the road on`)
}  else if (trafficLight ==="Yellow"){
     console.log("Ready to cross the road")
    document.write(`</br>ready to cross the road on `)
} else{
   console.log("faulty traffic lights, beware of other road users before crossing")
document.write(`</br>"faulty traffic lights, beware of other road users before crossing`)
}
 
}

if (userNum > computerNum){
    console.log(`</br> ${userNum} is bigger .</br>`)
    document.write(`</br>${userNum} is bigger.</br></br>`)
 
}else if(computerNum > userNum)
{
    console.log(`</br> ${computerNum} is bigger .</br>`)
    document.write(`</br>${computerNum} is bigger.</br></br>`)
} else if (computerNum === userNum)
{
    console.log(`</br> ${userNum} and ${computerNum} are the same</br>`)
    document.write(`</br> ${userNum} and ${computerNum} are the same</br>`) }
else {
    console.log(`</br> invalid input </br>`)
    document.write(`</br> invalid input</br>`) }
 
 
if (userNum >20 && computerNum <= 50){
    console.log(`</br> Valid  .</br>`)
    document.write(`</br>Valid .</br></br>`)}
 
else{
    console.log(`</br> invalid .</br>`)
    document.write(`</br>invalid.</br></br>`)
 
}
 
if (userNum >20 && userNum <= 50){
    console.log(`</br> Valid  .</br>`)
    document.write(`</br>Valid .</br></br>`)}
 
else{
    console.log(`</br> invalid .</br>`)
    document.write(`</br>invalid.</br></br>`)
 
}
 
 
if (trafficLight === "Red" || trafficLight === "Amber"){
    console.log(`</br> Stop.</br>`)
    document.write(`</br>Stop</br></br>`)}
 
else{
    console.log(`</br> Go .</br>`)
    document.write(`</br>Go</br></br>`)
 
}


let day = "Wednesday";
 
switch(day){
    case "Monday":
        document.write("Today is Monday")
        break; // exit if the case is a match
    case "Tuesday":
        document.write("Today is Tuesday")
        break; // exit if the case is a match
    case "Wednesday":
        document.write(`Today is ${day}`)
        break; // exit if the case is a match
    case "Thursday":
        document.write("Today is Thursday")
        break; // exit if the case is a match
    case "Friday":
        document.write("Today is Friday")
        break; // exit if the case is a match
    default:
        document.write(`Weekend}`)
};

 
//Investigate the ternary operator instead of if/else loop
document.write(`</br>Ternary operator instead of if else </br> `)
 
let numberCheck = (userNum == computerNum) ? "The values are the same":"The values are not the same!!!!";
 
console.log(numberCheck)
document.write(numberCheck)
