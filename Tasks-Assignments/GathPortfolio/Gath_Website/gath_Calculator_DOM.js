// Gathering the buttons
let buttonMenu1 = document.getElementById('buttonMenu1')
let buttonMenu2 = document.getElementById('buttonMenu2')
let buttonMenu3 = document.getElementById('buttonMenu3')
let buttonMenu4 = document.getElementById('buttonMenu4')
let buttonMenu5 = document.getElementById('buttonMenu5')
let buttonMenu6 = document.getElementById('buttonMenu6')

buttonMenu1.addEventListener('mouseover', function run(){
  buttonMenu1.style.backgroundColor = 'orange'
})
buttonMenu1.addEventListener('mouseleave', function run(){
  buttonMenu1.style.backgroundColor = 'aqua'
})

buttonMenu2.addEventListener('mouseover', function run(){
  buttonMenu2.style.backgroundColor = 'orange'
})
buttonMenu2.addEventListener('mouseleave', function run(){
  buttonMenu2.style.backgroundColor = 'aqua'
})

buttonMenu3.addEventListener('mouseover', function run(){
  buttonMenu3.style.backgroundColor = 'orange'
})
buttonMenu3.addEventListener('mouseleave', function run(){
  buttonMenu3.style.backgroundColor = 'aqua'
})

buttonMenu4.addEventListener('mouseover', function run(){
  buttonMenu4.style.backgroundColor = 'orange'
})
buttonMenu4.addEventListener('mouseleave', function run(){
  buttonMenu4.style.backgroundColor = 'aqua'
})

buttonMenu5.addEventListener('mouseover', function run(){
  buttonMenu5.style.backgroundColor = 'orange'
})
buttonMenu5.addEventListener('mouseleave', function run(){
  buttonMenu5.style.backgroundColor = 'aqua'
})

buttonMenu6.addEventListener('mouseover', function run(){
  buttonMenu6.style.backgroundColor = 'orange'
})
buttonMenu6.addEventListener('mouseleave', function run(){
  buttonMenu6.style.backgroundColor = 'aqua'
})


let buTT = document.getElementsByClassName("button1");
let buTTS = document.getElementById("search");

//buTT.addEventListener('click', selectedB1());
console.log(buTT);
buTTS.addEventListener('click', searching());
console.log(buTTS);

function selectedB1(){
  switch(button1.id){
    case "b1t":
    // set 'Ab' to true
    case "b2t":
    // set 'A' to true
    case "b3t":
    // set 'Bb' to true
    case "b4t":
    // set 'B' to true
    case "b5t":
    // set 'C' to true
    case "b6t":
    // set 'Db' to true
    case "b7t":
    // set 'D' to true
    case "b8t":
    // set 'Eb' to true
    case "b9t":
    // set 'E' to true
    case "b10t":
    // set 'F' to true
    case "b11t":
    // set 'Gb' to true
    case "b12t":
    // set 'G' to true    
    break;
  }
};
function selectedB1(){
  switch(button2.id){
    case "b1b":
    // cancel 'Ab'
    case "b2b":
    // cancel 'A'
    case "b3b":
    // cancel 'Bb'
    case "b4b":
    // cancel 'B'
    case "b5b":
    // cancel 'C'
    case "b6b":
    // cancel 'Db'l
    case "b7b":
    // cancel 'D'
    case "b8b":
    // cancel 'Eb'
    case "b9b":
    // cancel 'E'
    case "b10b":
    // cancel 'F'
    case "b11b":
    // cancel 'Gb'
    case "b12b":
    // cancel 'G'    
    break;
  }
console.log('Mouse Inside searching function: ',typeof buTTS);
};

function searching(){
  switch(button1.id){
    case "b1t": // if true, implement and add to counter
    // export 'Ab' to Excel
    case "b2t": // if true, implement and add to counter
    // export 'A' to Excel
    case "b3t": // if true, implement and add to counter
    // export 'Bb' to Excel
    case "b4t": // if true, implement and add to counter
    // export 'B' to Excel
    case "b5t": // if true, implement and add to counter
    // export 'C' to Excel
    case "b6t": // if true, implement and add to counter
    // export 'Db' to Excel
    case "b7t": // if true, implement and add to counter
    // export 'D' to Excel
    case "b8t": // if true, implement and add to counter
    // export 'Eb' to Excel
    case "b9t": // if true, implement and add to counter
    // export 'E' to Excel
    case "b10t": // if true, implement and add to counter
    // export 'F' to Excel
    case "b11t": // if true, implement and add to counter
    // export 'Gb' to Excel
    case "b12t": // if true, implement and add to counter
    // export 'G' to Excel    
    break;

    // import results from Excel and display as a pop-up
  }
};

function resetting(){
  // reset all states and remove any pop-ups
}



