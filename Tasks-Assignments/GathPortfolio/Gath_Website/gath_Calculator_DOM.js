// Global control variables
var butS = new Boolean (false)
var butAb = new Boolean (false)
var butA = new Boolean (false)
var butBb = new Boolean (false)
var butB = new Boolean (false)
var butC = new Boolean (false)
var butDb = new Boolean (false)
var butD = new Boolean (false)
var butEb = new Boolean (false)
var butE = new Boolean (false)
var butF = new Boolean (false)
var butGb = new Boolean (false)
var butG = new Boolean (false)

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

// Menu buttons

// Creating the Event and Event Listener
// (event type, function for each button)
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
// Access buttons

// Reset button
// hover over color
resetButton.addEventListener('mouseover', function run(){
  resetButton.style.backgroundColor = 'orange'
  resetButton.style.color = 'blue'
})

// hover leave color
resetButton.addEventListener('mouseleave', function run(){
  resetButton.style.backgroundColor = 'red'
  resetButton.style.color = 'black'
})

// mouse click
function reset(){  
  // Reset states
  butS = false
  butAb = false
  butA = false
  butBb = false
  butB = false
  butC = false
  butDb = false
  butD = false
  butEb = false
  butE = false
  butF = false
  butGb = false
  butG = false

  // Reset button colors
  resetButton.addEventListener('mouseleave', function run(){
    submitButton.style.background = 'green'
    submitButton.style.color = 'black'
    buttonAb.style.backgroundColor = 'rgb(88, 246, 88)'
    buttonA.style.backgroundColor = 'rgb(88, 246, 88)'
    buttonBb.style.backgroundColor = 'rgb(88, 246, 88)'
    buttonB.style.backgroundColor = 'rgb(88, 246, 88)'
    buttonC.style.backgroundColor = 'rgb(88, 246, 88)'
    buttonDb.style.backgroundColor = 'rgb(88, 246, 88)'
    buttonD.style.backgroundColor = 'rgb(88, 246, 88)'
    buttonEb.style.backgroundColor = 'rgb(88, 246, 88)'
    buttonE.style.backgroundColor = 'rgb(88, 246, 88)'
    buttonF.style.backgroundColor = 'rgb(88, 246, 88)'
    buttonGb.style.backgroundColor = 'rgb(88, 246, 88)'
    buttonG.style.backgroundColor = 'rgb(88, 246, 88)'
  })
  console.log('Button colors & states have been reset.\nButton states are now set to -\nS:',butS,'\nAb:',butAb,'\nA:',butA,'\nBb:',butBb,'\nB:',butB,'\nC:',butC,'\nDb:',butDb,'\nD:',butD,'\nEb:',butEb,'\nE:',butE,'\nF:',butF,'\nGb:',butGb,'\nG:',butG)

}
  // close the 'results' page (& reset state[s]?), refresh the 'calculator' page and invoke function in Python file to set all inputs to spreadsheet to zero and save it.

// Submit button colors
submitButton.addEventListener('mouseover', function run(){
  submitButton.style.backgroundColor = 'rgb(22, 50, 9)'
  submitButton.style.color = 'yellow'
})
submitButton.addEventListener('mouseleave', function run(){
  submitButton.style.backgroundColor = 'green'
  submitButton.style.color = 'black'
})
function submit(){
  console.log('Submit button is set to ',butS)
  butS = true
  console.log('Submit button is now set to ',butS)
  submitButton.addEventListener('mouseleave', function run(){
    submitButton.style.backgroundColor = 'rgb(22, 50, 9)'
    submitButton.style.color = 'white'
  })
  // let states = (butAb, butA, butBb, butB, butC, butDb, butD, butEb, butE, butF, butGb, butG)
  console.log('Note states sent to calculator will be',butAb,', ',butA,', ',butBb,', ',butB,', ',butC,', ',butDb,', ',butD,', ',butEb,', ',butE,', ',butF,', ',butGb,', ', butG)

  // https://www.wikihow.com/Code-an-Alert-with-a-Variable-Using-Javascript#:~:text=Alerts%20with%20variables%20are%20among,make%20a%20variable%2Dbased%20alert.
  alert("Note states sent to calculator will be:\nG#/Ab: "+butAb+";  A: "+butA+";  A#/Bb: "+butBb+"\nB: "+butB+";  C: "+butC+";  C#/Db: "+butDb+"\nD: "+butD+";  D#/Eb: "+butEb+"; E: "+butE+"\nF: "+butF+";  F#/Gb: "+butGb+";  G: "+butG)
  

  
  // invoke function in Python file passing the boolean states of buttons
  //return states
}


/* Note buttons */

// Ab button
buttonAb.addEventListener('mouseover', function run(){
  buttonAb.style.backgroundColor = 'yellow'
  // console.log('Button G#/Ab was mouseover')
})
buttonAb.addEventListener('mouseleave', function run(){
  buttonAb.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button G#/Ab was mouseleave')
})
function standbyAb(){
  //toggle control
  if (butAb == false){
    console.log('Button G#/Ab is set to ',butAb)
    butAb = true // turning on
    console.log('Button G#/Ab is now set to ',butAb)
    buttonAb.addEventListener('mouseleave', function run(){
      buttonAb.style.backgroundColor = 'yellow'
    })
    return butAb
  } else {
    console.log('Button G#/Ab is set to ',butAb)
    butAb = false // turning off
    console.log('Button G#/Ab is now set to ',butAb)
    buttonAb.addEventListener('mouseleave', function run(){
      buttonAb.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butAb
  }
}


// A button
buttonA.addEventListener('mouseover', function run(){
  buttonA.style.backgroundColor = 'yellow'
  // console.log('Button A was mouseover')
})
buttonA.addEventListener('mouseleave', function run(){
  buttonA.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button A was mouseleave')
})
function standbyA(){
  //toggle control
  if (butA == false){
    console.log('Button A is set to ',butA)
    buttonA.style.backgroundColor = 'yellow' // turning on
    butA = true
    console.log('Button A is now set to ',butA)
    buttonA.addEventListener('mouseleave', function run(){
      buttonA.style.backgroundColor = 'yellow'
    })
    return butA
  } else {
    console.log('Button A is set to ',butA)
    buttonA.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    butA = false
    console.log('Button A is now set to ',butA)
    buttonA.addEventListener('mouseleave', function run(){
      buttonA.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butA
  }
}

// Bb button
buttonBb.addEventListener('mouseover', function run(){
  buttonBb.style.backgroundColor = 'yellow'
  // console.log('Button A#/Bb was mouseover')
})
buttonBb.addEventListener('mouseleave', function run(){
  buttonBb.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button A#/Bb was mouseleave')
})
function standbyBb(){
  //toggle control
  if (butBb == false){
    console.log('Button A#/Bb is set to ',butBb)
    buttonBb.style.backgroundColor = 'yellow' // turning on
    butBb = true
    console.log('Button A#/Bb is now set to ',butBb)
    buttonBb.addEventListener('mouseleave', function run(){
      buttonBb.style.backgroundColor = 'yellow'
    })
    return butBb
  } else {
    console.log('Button A#/Bb is set to ',butBb)
    buttonBb.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    butBb = false
    console.log('Button A#/Bb is now set to ',butBb)
    buttonBb.addEventListener('mouseleave', function run(){
      buttonBb.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butBb
  }
}

// B button
buttonB.addEventListener('mouseover', function run(){
  buttonB.style.backgroundColor = 'yellow'
  // console.log('Button B was mouseover')
})
buttonB.addEventListener('mouseleave', function run(){
  buttonB.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button B was mouseleave')
})
function standbyB(){
  //toggle control
  if (butB == false){
    console.log('Button B is set to ',butB)
    buttonB.style.backgroundColor = 'yellow' // turning on
    butB = true
    console.log('Button B is now set to ',butB)
    buttonB.addEventListener('mouseleave', function run(){
      buttonB.style.backgroundColor = 'yellow'
    })
    return butB
  } else {
    console.log('Button B is set to ',butB)
    buttonB.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    butB = false
    console.log('Button B is now set to ',butB)
    buttonB.addEventListener('mouseleave', function run(){
      buttonB.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butB
  }
}

// C button
buttonC.addEventListener('mouseover', function run(){
  buttonC.style.backgroundColor = 'yellow'
  // console.log('Button C was mouseover')
})
buttonC.addEventListener('mouseleave', function run(){
  buttonC.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button C was mouseleave')
})
function standbyC(){
  //toggle control
  if (butC == false){
    console.log('Button C is set to ',butC)
    buttonC.style.backgroundColor = 'yellow' // turning on
    butC = true
    console.log('Button C is now set to ',butC)
    buttonC.addEventListener('mouseleave', function run(){
      buttonC.style.backgroundColor = 'yellow'
    })
    return butC
  } else {
    console.log('Button C is set to ',butC)
    buttonC.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    butC = false
    console.log('Button C is now set to ',butC)
    buttonC.addEventListener('mouseleave', function run(){
      buttonC.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butC
  }
}

// Db button
buttonDb.addEventListener('mouseover', function run(){
  buttonDb.style.backgroundColor = 'yellow'
  // console.log('Button C#/Db was mouseover')
})
buttonDb.addEventListener('mouseleave', function run(){
  buttonDb.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button C#/Db was mouseleave')
})
function standbyDb(){
  //toggle control
  if (butDb == false){
    console.log('Button C#/Db is set to ',butDb)
    buttonDb.style.backgroundColor = 'yellow' // turning on
    butDb = true
    console.log('Button C#/Db is now set to ',butDb)
    buttonDb.addEventListener('mouseleave', function run(){
      buttonDb.style.backgroundColor = 'yellow'
    })
    return butDb
  } else {
    console.log('Button C#/Db is set to ',butDb)
    buttonDb.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    butDb = false
    console.log('Button C#/Db is now set to ',butDb)
    buttonDb.addEventListener('mouseleave', function run(){
      buttonDb.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butDb
  }
}

// D button
buttonD.addEventListener('mouseover', function run(){
  buttonD.style.backgroundColor = 'yellow'
  // console.log('Button D was mouseover')
})
buttonD.addEventListener('mouseleave', function run(){
  buttonD.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button D was mouseleave')
})
function standbyD(){
  //toggle control
  if (butD == false){
    console.log('Button D is set to ',butD)
    buttonD.style.backgroundColor = 'yellow' // turning on
    butD = true
    console.log('Button D is now set to ',butD)
    buttonD.addEventListener('mouseleave', function run(){
      buttonD.style.backgroundColor = 'yellow'
    })
    return butD
  } else {
    console.log('Button D is set to ',butD)
    buttonD.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    butD = false
    console.log('Button D is now set to ',butD)
    buttonD.addEventListener('mouseleave', function run(){
      buttonD.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butD
  }
}

// Eb button
buttonEb.addEventListener('mouseover', function run(){
  buttonEb.style.backgroundColor = 'yellow'
  // console.log('Button D#/Eb was mouseover')
})
buttonEb.addEventListener('mouseleave', function run(){
  buttonEb.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button D#/Eb was mouseleave')
})
function standbyEb(){
  //toggle control
  if (butEb == false){
    console.log('Button D#/Eb is set to ',butAb)
    buttonEb.style.backgroundColor = 'yellow' // turning on
    butEb = true
    console.log('Button D#/Eb is now set to ',butEb)
    buttonEb.addEventListener('mouseleave', function run(){
      buttonEb.style.backgroundColor = 'yellow'
    })
    return butEb
  } else {
    console.log('Button D#/Eb is set to ',butEb)
    buttonEb.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    butEb = false
    console.log('Button D#/Eb is now set to ',butEb)
    buttonEb.addEventListener('mouseleave', function run(){
      buttonEb.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butEb
  }
}

// E button
buttonE.addEventListener('mouseover', function run(){
  buttonE.style.backgroundColor = 'yellow'
  // console.log('Button E was mouseover')
})
buttonE.addEventListener('mouseleave', function run(){
  buttonE.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button E was mouseleave')
})
function standbyE(){
  //toggle control
  if (butE == false){
    console.log('Button E is set to ',butE)
    buttonE.style.backgroundColor = 'yellow' // turning on
    butE = true
    console.log('Button E is now set to ',butE)
    buttonE.addEventListener('mouseleave', function run(){
      buttonE.style.backgroundColor = 'yellow'
    })
    return butE
  } else {
    console.log('Button E is set to ',butE)
    buttonE.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    butE = false
    console.log('Button E is now set to ',butE)
    buttonE.addEventListener('mouseleave', function run(){
      buttonE.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butE
  }
}

// F button
buttonF.addEventListener('mouseover', function run(){
  buttonF.style.backgroundColor = 'yellow'
  // console.log('Button F was mouseover')
})
buttonF.addEventListener('mouseleave', function run(){
  buttonF.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button F was mouseleave')
})
function standbyF(){
  //toggle control
  if (butF == false){
    console.log('Button F is set to ',butF)
    buttonF.style.backgroundColor = 'yellow' // turning on
    butF = true
    console.log('Button F is now set to ',butF)
    buttonF.addEventListener('mouseleave', function run(){
      buttonF.style.backgroundColor = 'yellow'
    })
    return butF
  } else {
    console.log('Button F is set to ',butF)
    buttonF.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    butF = false
    console.log('Button F is now set to ',butF)
    buttonF.addEventListener('mouseleave', function run(){
      buttonF.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butF
  }
}

// Gb button
buttonGb.addEventListener('mouseover', function run(){
  buttonGb.style.backgroundColor = 'yellow'
  // console.log('Button F#/Gb was mouseover')
})
buttonGb.addEventListener('mouseleave', function run(){
  buttonGb.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button F#/Gb was mouseleave')
})
function standbyGb(){
  //toggle control
  if (butGb == false){
    console.log('Button F#/Gb is set to ',butGb)
    buttonGb.style.backgroundColor = 'yellow' // turning on
    butGb = true
    console.log('Button F#/Gb is now set to ',butGb)
    buttonGb.addEventListener('mouseleave', function run(){
      buttonGb.style.backgroundColor = 'yellow'
    })
    return butGb
  } else {
    console.log('Button F#/Gb is set to ',butGb)
    buttonGb.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    butGb = false
    console.log('Button F#/Gb is now set to ',butGb)
    buttonGb.addEventListener('mouseleave', function run(){
      buttonGb.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butGb
  }
}

// G button
buttonG.addEventListener('mouseover', function run(){
  buttonG.style.backgroundColor = 'yellow'
  // console.log('Button G was mouseover')
})
buttonG.addEventListener('mouseleave', function run(){
  buttonG.style.backgroundColor = 'rgb(88, 246, 88)'
  // console.log('Button G was mouseleave')
})
function standbyG(){
  //toggle control
  if (butG == false){
    console.log('Button G is set to ',butG)
    buttonG.style.backgroundColor = 'yellow' // turning on
    butG = true
    console.log('Button G is now set to ',butG)
    buttonG.addEventListener('mouseleave', function run(){
      buttonG.style.backgroundColor = 'yellow'
    })
    return butG
  } else {
    console.log('Button G is set to ',butG)
    buttonG.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    butG = false
    console.log('Button G is now set to ',butG)
    buttonG.addEventListener('mouseleave', function run(){
      buttonG.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return butG
  }
}
