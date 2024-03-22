// Gathering the buttons
let buttonMenu1 = document.getElementById('buttonMenu1')
let buttonMenu2 = document.getElementById('buttonMenu2')
let buttonMenu3 = document.getElementById('buttonMenu3')
let buttonMenu4 = document.getElementById('buttonMenu4')
let buttonMenu5 = document.getElementById('buttonMenu5')
let buttonMenu6 = document.getElementById('buttonMenu6')
let resetButton = document.getElementById('resetButton')
let submitButton = document.getElementById('submitButton')
let buttonAb = document.getElementById('buttonAb')
let buttonA = document.getElementById('buttonA')
let buttonBb = document.getElementById('buttonBb')
let buttonB = document.getElementById('buttonB')
let buttonC = document.getElementById('buttonC')
let buttonDb = document.getElementById('buttonDb')
let buttonD = document.getElementById('buttonD')
let buttonEb = document.getElementById('buttonEb')
let buttonE = document.getElementById('buttonE')
let buttonF = document.getElementById('buttonF')
let buttonGb = document.getElementById('buttonGb')
let buttonG = document.getElementById('buttonG')

/* Menu buttons */
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

/* Access buttons */
resetButton.addEventListener('mouseover', function run(){
  resetButton.style.backgroundColor = 'rgb(104, 2, 2)'
})
resetButton.addEventListener('mouseleave', function run(){
  resetButton.style.backgroundColor = 'red'
})

submitButton.addEventListener('mouseover', function run(){
  submitButton.style.backgroundColor = 'rgb(1, 81, 1)'
})
submitButton.addEventListener('mouseleave', function run(){
  submitButton.style.backgroundColor = 'green'
})

/* Note buttons */
buttonAb.addEventListener('mouseover', function run(){
  buttonAb.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonAb.addEventListener('mouseleave', function run(){
  buttonAb.style.backgroundColor = 'greenyellow'
})

buttonA.addEventListener('mouseover', function run(){
  buttonA.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonA.addEventListener('mouseleave', function run(){
  buttonA.style.backgroundColor = 'greenyellow'
})

buttonBb.addEventListener('mouseover', function run(){
  buttonBb.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonBb.addEventListener('mouseleave', function run(){
  buttonBb.style.backgroundColor = 'greenyellow'
})

buttonB.addEventListener('mouseover', function run(){
  buttonB.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonB.addEventListener('mouseleave', function run(){
  buttonB.style.backgroundColor = 'greenyellow'
})

buttonC.addEventListener('mouseover', function run(){
  buttonC.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonC.addEventListener('mouseleave', function run(){
  buttonC.style.backgroundColor = 'greenyellow'
})

buttonDb.addEventListener('mouseover', function run(){
  buttonDb.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonDb.addEventListener('mouseleave', function run(){
  buttonDb.style.backgroundColor = 'greenyellow'
})

buttonD.addEventListener('mouseover', function run(){
  buttonD.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonD.addEventListener('mouseleave', function run(){
  buttonD.style.backgroundColor = 'greenyellow'
})

buttonEb.addEventListener('mouseover', function run(){
  buttonEb.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonEb.addEventListener('mouseleave', function run(){
  buttonEb.style.backgroundColor = 'greenyellow'
})

buttonE.addEventListener('mouseover', function run(){
  buttonE.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonE.addEventListener('mouseleave', function run(){
  buttonE.style.backgroundColor = 'greenyellow'
})

buttonF.addEventListener('mouseover', function run(){
  buttonF.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonF.addEventListener('mouseleave', function run(){
  buttonF.style.backgroundColor = 'greenyellow'
})

buttonGb.addEventListener('mouseover', function run(){
  buttonGb.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonGb.addEventListener('mouseleave', function run(){
  buttonGb.style.backgroundColor = 'greenyellow'
})

buttonG.addEventListener('mouseover', function run(){
  buttonG.style.backgroundColor = 'rgb(128, 183, 18)'
})
buttonG.addEventListener('mouseleave', function run(){
  buttonG.style.backgroundColor = 'greenyellow'
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



