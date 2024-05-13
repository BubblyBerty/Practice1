// Gathering the buttons
// Menu buttons
let homeButton = document.getElementById('homeButton');
let meButton = document.getElementById('meButton');
let softwareButton = document.getElementById('softwareButton');
let progressButton1 = document.getElementById('progressButton1');
let progressButton = document.getElementById('progressButton');
let scalesButton = document.getElementById('scalesButton');
let calculatorButton = document.getElementById('calculatorButton');
let musicButton = document.getElementById('musicButton');
let guitarButton = document.getElementById('guitarButton');
let mathsButton = document.getElementById('mathsButton');
let moviesButton = document.getElementById('moviesButton');
let natureButton = document.getElementById('natureButton');
let scifiButton = document.getElementById('scifiButton');
let historyButton = document.getElementById('historyButton');
let theologyButton = document.getElementById('theologyButton');
let textButton = document.getElementById('textButton');
let userButton = document.getElementById('userButton');
let replitButton = document.getElementById('replitButton');

// Menu buttons

// Creating the Event and Event Listener
// (event type, function for each button)
homeButton.addEventListener('mouseover', function run(){
    homeButton.style.backgroundColor = 'orange';
});
homeButton.addEventListener('mouseleave', function run(){
    homeButton.style.backgroundColor = 'aqua';
});

meButton.addEventListener('mouseover', function run(){
    meButton.style.backgroundColor = 'orange';
});
meButton.addEventListener('mouseleave', function run(){
    meButton.style.backgroundColor = 'aqua';
});

softwareButton.addEventListener('mouseover', function run(){
    softwareButton.style.backgroundColor = 'orange';
});
softwareButton.addEventListener('mouseleave', function run(){
    softwareButton.style.backgroundColor = 'aqua';
});

progressButton1.addEventListener('mouseover', function run(){
    progressButton1.style.backgroundColor = 'orange';
});
progressButton1.addEventListener('mouseleave', function run(){
    progressButton1.style.backgroundColor = 'aqua';
});

progressButton.addEventListener('mouseover', function run(){
    progressButton.style.backgroundColor = 'orange';
});
progressButton.addEventListener('mouseleave', function run(){
    progressButton.style.backgroundColor = 'aqua';
});

scalesButton.addEventListener('mouseover', function run(){
    scalesButton.style.backgroundColor = 'orange';
});
scalesButton.addEventListener('mouseleave', function run(){
    scalesButton.style.backgroundColor = 'aqua';
});

calculatorButton.addEventListener('mouseover', function run(){
    calculatorButton.style.backgroundColor = 'orange';
});
calculatorButton.addEventListener('mouseleave', function run(){
    calculatorButton.style.backgroundColor = 'aqua';
});

musicButton.addEventListener('mouseover', function run(){
    musicButton.style.backgroundColor = 'orange';
});
musicButton.addEventListener('mouseleave', function run(){
    musicButton.style.backgroundColor = 'aqua';
});

guitarButton.addEventListener('mouseover', function run(){
    guitarButton.style.backgroundColor = 'orange';
});
guitarButton.addEventListener('mouseleave', function run(){
    guitarButton.style.backgroundColor = 'aqua';
});

mathsButton.addEventListener('mouseover', function run(){
    mathsButton.style.backgroundColor = 'orange';
});
mathsButton.addEventListener('mouseleave', function run(){
    mathsButton.style.backgroundColor = 'aqua';
});

moviesButton.addEventListener('mouseover', function run(){
    moviesButton.style.backgroundColor = 'orange';
});
moviesButton.addEventListener('mouseleave', function run(){
    moviesButton.style.backgroundColor = 'aqua';
});

natureButton.addEventListener('mouseover', function run(){
    natureButton.style.backgroundColor = 'orange';
});
natureButton.addEventListener('mouseleave', function run(){
    natureButton.style.backgroundColor = 'aqua';
});

scifiButton.addEventListener('mouseover', function run(){
    scifiButton.style.backgroundColor = 'orange';
});
scifiButton.addEventListener('mouseleave', function run(){
    scifiButton.style.backgroundColor = 'aqua';
});

historyButton.addEventListener('mouseover', function run(){
    historyButton.style.backgroundColor = 'orange';
});
historyButton.addEventListener('mouseleave', function run(){
    historyButton.style.backgroundColor = 'aqua';
});

theologyButton.addEventListener('mouseover', function run(){
    theologyButton.style.backgroundColor = 'orange';
});
theologyButton.addEventListener('mouseleave', function run(){
    theologyButton.style.backgroundColor = 'aqua';
});
  

textButton.addEventListener('mouseover', function run(){
    textButton.style.backgroundColor = 'orange';
});
textButton.addEventListener('mouseleave', function run(){
    textButton.style.backgroundColor = 'aqua';
});

userButton.addEventListener('mouseover', function run(){
    userButton.style.backgroundColor = 'orange';
});
userButton.addEventListener('mouseleave', function run(){
    userButton.style.backgroundColor = 'aqua';
});

replitButton.addEventListener('mouseover', function run(){
    replitButton.style.backgroundColor = 'orange';
});
replitButton.addEventListener('mouseleave', function run(){
    replitButton.style.backgroundColor = 'aqua';
});

function capital(){

    // returning capitilsation of each word in the string
    // create the string for the capital function
    userString = "so, you want to be a hero, do you?"
    console.log("Capitalising the string")

    // First test to find where the spaces in the text are
    // Should be 3, 7, 12, 15, 18, 20, 26, 29.
    console.log('1st space character at index - ',userString.indexOf(" ")); // returns 3
    console.log('2nd space character at index - ',userString.indexOf(" ",4)); // returns 7
    console.log('3rd space character at index - ',userString.indexOf(" ",8)); // returns 12
    console.log('4th space character at index - ',userString.indexOf(" ",13)); // returns 15
    console.log('5th space character at index - ',userString.indexOf(" ",16)); // returns 18
    console.log('6th space character at index - ',userString.indexOf(" ",19)); // returns 20
    console.log('7th space character at index - ',userString.indexOf(" ",21)); // returns 26
    console.log('8th space character at index - ',userString.indexOf(" ",27)); // returns 29
    console.log('9th space character at index - ',userString.indexOf(" ",30)); // returns -1, indicates that the search has started from 30 back to minus one because no other space was found.
    console.log('String spacing test successful')

    // Now to create the new string - the substring method does not include the final position index
    let tempString = userString[0].toUpperCase()+userString.substring(1, 4)
    +userString[4].toUpperCase()+userString.substring(5, 8)
    +userString[8].toUpperCase()+userString.substring(9, 13)
    +userString[13].toUpperCase()+userString.substring(14, 16)
    +userString[16].toUpperCase()+userString.substring(17, 19)
    +userString[19].toUpperCase()+userString.substring(20, 27)
    +userString[27].toUpperCase()+userString.substring(28, 30)
    +userString[30].toUpperCase()+userString.substring(31, userString.length);

    // document.write(`</br>First character of new string is: "${tempString[0]}"`);
    console.log(`Capitalised string is: ${tempString}`);
    console.log("Returns capitilsation of each word/substring within userString");

    return capped.value = tempString;
}
/* DEPRECATED
function capitalise(){
/*
    let userString2 = prompt("Enter your text: ");

    Self-learning challenge - To create a loop to capitalise a text
    Create a loop to capitalise text entered by user

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

    
    while (z < userString2.length){
        userString3 = userString2.replace(userString2[z], userString2[z].toUpperCase());
        y = userString2.indexOf(" ",z);
        userString3 = userString3.concat([z], y);
        z = y;
    };
    document.write(`</br></br>Capitalised letters of each word: ${userString2} log Z`);
    console.log("Capitalised letters of each word: ",userString2," log Z");
    
    So far I have been unable to assign upper case characters to a string because every loop I create iterates without a break so I will build another method (comments left in code to show learning process)
   
    console.log("Length of string is ",userString2.length+1," characters");

    // Now to create a loop to generate a new capitalised string. This works as expected if the for and do loops are written sequentially. Any attempt I made to combine them, nesting the loops, has only resulted in iterations never breaking regardless of loop type.

    // Lines 169 - 317 were my original code but I found and implemented a much more efficient and economic method below that.

    /* // Initial testing of string and array behaviour (10 loops)

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

*/
function capitalise(){

    let userString2 = prompt("Enter your text (only 70 characters will be displayed): ");
    console.log("Length of string is ",userString2.length+1," characters");
    
    let counta = 0; // Keeps track of spaces & beginning of each substring
    let tempCount = 0; // Keeps track of the end of each substring  
    let spaceCount = 0; // Counts the number of space characters in the string
    let spaces = 0; // Keeps track of the space number to break the loop
    let tempText1 = ""; // Temporary working string
    let tempText2 = ""; // Concatenating string

    /* Test text: "if my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land."*/

    do {
        // Find the total number of space characters in the text as the break benchmark to end the loop
        
        counta = userString2.indexOf(" ",counta);       
        spaceCount++;
        counta++;
        //tempCount = counta;
        console.log('line 337');
    } while(counta > 0)
    console.log('No of space characters in string = ',spaceCount -1);

    spaceCount--;
    // reset temporary counters
    counta = 0;
    tempCount = 0;

    while (spaces <= spaceCount){
        // Find the next space character in the string and set the temporary counter to that index
        tempCount = userString2.indexOf(" ",counta);
        console.log("Temporary counter = ",counta);
        console.log('line 347');
        // Create and capitalise the next substring
        tempText1 = userString2[counta].toUpperCase()+userString2.substring(counta+1, tempCount+1);

        // I couldn't get the text-wrap style in CSS to work so I introduced an 'if/else' statement to force text wrapping. In order to implement this my research led me to (1)'\r\n' in JS along with 'white-space: pre-line;' in CSS, (2) ASCII code for a carriage return in JS. I could get neither to work so I opted for creating a number of temporary strings to hold the text in several lines and setting a limit to the number of them. https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent

        // Concatenate this substring to tempText2

/*        if (tempText2 + tempText1 > 70)
            {
                tempText2;
            }
        else
            {tempText2 = tempText2 + tempText1};
*/
        // Update counters
        spaces++;
        counta = tempCount +1;;

    // Since I couldn't get text to wrap or implement a carriage return I have tempoarily set the constraint on the do/while loop to 70 characters
        tempText2 = tempText2 + tempText1
    
//    } while (tempCount < 70);
    }
    console.log(tempText2)
    return cappedUser.value = tempText2;
}