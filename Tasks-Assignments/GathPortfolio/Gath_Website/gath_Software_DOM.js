// Gathering the buttons

let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let button5 = document.getElementById('button5')
let button6 = document.getElementById('button6')
let button7 = document.getElementById('button7')
let button8 = document.getElementById('button8')
let button9 = document.getElementById('button9')
let button10 = document.getElementById('button10')

// Creating the Event and Event Listener
// (event type, function for each button)

button1.addEventListener('mouseover', function run(){
    button1.style.backgroundColor = 'orange'
})
button1.addEventListener('mouseleave', function run(){
    button1.style.backgroundColor = 'aqua'
})

button2.addEventListener('mouseover', function run(){
    button2.style.backgroundColor = 'orange'
})
button2.addEventListener('mouseleave', function run(){
    button2.style.backgroundColor = 'aqua'
})

button3.addEventListener('mouseover', function run(){
    button3.style.backgroundColor = 'orange'
})
button3.addEventListener('mouseleave', function run(){
    button3.style.backgroundColor = 'aqua'
})

button4.addEventListener('mouseover', function run(){
    button4.style.backgroundColor = 'orange'
})
button4.addEventListener('mouseleave', function run(){
    button4.style.backgroundColor = 'aqua'
})

button5.addEventListener('mouseover', function run(){
    button5.style.backgroundColor = 'orange'
})
button5.addEventListener('mouseleave', function run(){
    button5.style.backgroundColor = 'aqua'
})

button6.addEventListener('mouseover', function run(){
    button6.style.backgroundColor = 'orange'
})
button6.addEventListener('mouseleave', function run(){
    button6.style.backgroundColor = 'aqua'
})

button7.addEventListener('mouseover', function run(){
    button7.style.backgroundColor = 'orange'
})
button7.addEventListener('mouseleave', function run(){
    button7.style.backgroundColor = 'aqua'
})

button8.addEventListener('mouseover', function run(){
    button8.style.backgroundColor = 'orange'
})
button8.addEventListener('mouseleave', function run(){
    button8.style.backgroundColor = 'aqua'
})

button9.addEventListener('mouseover', function run(){
    button9.style.backgroundColor = 'orange'
})

button9.addEventListener('mouseleave', function run(){
    button9.style.backgroundColor = 'aqua'
})

button10.addEventListener('mouseover', function run(){
    button10.style.backgroundColor = 'orange'
})

button10.addEventListener('mouseleave', function run(){
    button10.style.backgroundColor = 'aqua'
})

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

