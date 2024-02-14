/* Task:
 1: Add a <h1> element to the HTML with some text inside it.
2: Using a DOM query method I would like you to select the h1 element from the DOM and store it in your JavaScript file in a variable.
*/
let heading1 = document.getElementsByTagName('h1')[0]
console.log('heading1 = ',heading1)

/* 3: Add an ID and update the text content and styling of your <h1> element using the DOM.
*/
heading1.id = 'myHeading'
console.log(heading1.id)
heading1.textContent = "I've Updated My Title"
heading1.style.color = 'yellow'
heading1.style.backgroundColor = 'darkblue'

/* 4: Using the DOM I would like you to create a <ul> element and 3 <li>’s and add them to the document
*/
let unorderedList = document.createElement('ul') 
unorderedList.id="newList"
console.log('Created a new unordered list tag: ',unorderedList,' with id = newList')

for(i = 0; i < 3; i++){
    let listItems = document.createElement('li')
    listItems.textContent = 'A new listed Item ', 
    unorderedList[i], 'created'
    unorderedList.appendChild(listItems)
    listItems.style.backgroundColor = 'rgb(255, i*100, 0)'
    console.log(listItems)  
}
/*let indexArray = [0, 1, 2];
indexArray.forEach(colorings);
let colored = [15, 115, 215];

function colorings(index, colored){
    // display names of people in the array
    ulObject[index] = "<br>Hello "  + aPerson;
};*/
for(j = 0; j < 3; j++){
console.log('Log - ',j)
console.log(unorderedList.firstElementChild,' index number ',j)
}

// Append the <ul> to the document body
document.body.appendChild(unorderedList)


/* 5: Edit the text content of each <li> and change the colour of the <li>’s. 
*/





// https://www.techiedelight.com/define-multiple-css-attributes-javascript/#:~:text=In%20JavaScript%2C%20you%20can%20target,styles%20in%20the%20style%20attribute.

//https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php
//https://javascript.plainenglish.io/the-dom-of-javascript-848506ebf386





// Gathering the paragraphs
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')

// Creating the Event and Event Listener
//    (event type, function)
p1.addEventListener('mouseover', function run(){
    p1.style.backgroundColor = 'orange'
})
p1.addEventListener('mouseleave', function run(){
    p1.style.backgroundColor = 'white'
})

// Create event that changes the second paragraph on click
p2.addEventListener('click', function run(){
    p2.style.backgroundColor = 'yellow'
})

// Create event that reverts the second paragraph on mouseout
p2.addEventListener('mouseout', function run(){
    p2.style.backgroundColor = 'green'
})
 
p4.style.backgroundColor = 'crimson'

// create p3 button
 
let p3Btn = document.createElement("button")
p3Btn.textContent = "Click to Hide P3"
 
document.body.appendChild(p3Btn)
 
p3.style.backgroundColor = 'aqua' 
 
// event listener to hide p3, when p3 button is clicked
p3Btn.addEventListener('click', ()=>{
 
    if (p3.style.display === "block") {
        p3.style.display = "none"
    } else {
        p3.style.display = "none"
        p3.style.display = "block"
    }
 
})

p4.addEventListener('click', function run(){
    p4.style.fontSize = 'large'
})
p4.addEventListener('mouseout', function run(){
    p4.style.fontSize = 'medium'
})





// Used for internal scripting of HTML file but not good practice (https://stackoverflow.com/questions/21369731/javascript-dom-elements-access-by-id-without-using-functions)
function changeOrange(){
    if (p5.style.color){
        p5.style.color = "";
    } else{
        p5.style.color = "orange";
    }
}













