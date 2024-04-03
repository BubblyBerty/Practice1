// Global control variables
var noteStates = {
  butS: false,
  butAb: false,
  butA: false,
  butBb: false,
  butB: false,
  butC: false,
  butDb: false,
  butD: false,
  butEb: false,
  butE: false,
  butF: false,
  butGb: false,
  butG: false
};


// Gathering the buttons
let buttonMenu1 = document.getElementById('buttonMenu1')
let buttonMenu2 = document.getElementById('buttonMenu2')
let buttonMenu3 = document.getElementById('buttonMenu3')
let buttonMenu4 = document.getElementById('buttonMenu4')
let buttonMenu5 = document.getElementById('buttonMenu5')
let buttonMenu6 = document.getElementById('buttonMenu6')
let resetButton = document.getElementById('resetButton')
let resetComment = document.getElementById('comment')
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
    submitButton.style.color = 'yellow'

    console.log(noteStates)

    @app.route('/getmethod/<noteStates>')
      def get_javascript_data(noteStates):

    
    return noteStates
  
  })
}
  

  // https://www.wikihow.com/Code-an-Alert-with-a-Variable-Using-Javascript#:~:text=Alerts%20with%20variables%20are%20among,make%20a%20variable%2Dbased%20alert.

  
  // invoke function in Python file passing the boolean states of buttons
  



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
  if (noteStates.butAb == false){
    console.log('Button G#/Ab is set to ',noteStates.butAb)
    noteStates.butAb = true // turning on
    console.log('Button G#/Ab is now set to ',noteStates.butAb)
    buttonAb.addEventListener('mouseleave', function run(){
      buttonAb.style.backgroundColor = 'yellow'
    })
    return noteStates.butAb
  } else {
    console.log('Button G#/Ab is set to ',noteStates.butAb)
    noteStates.butAb = false // turning off
    console.log('Button G#/Ab is now set to ',noteStates.butAb)
    buttonAb.addEventListener('mouseleave', function run(){
      buttonAb.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butAb
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
  if (noteStates.butA == false){
    console.log('Button A is set to ',noteStates.butA)
    buttonA.style.backgroundColor = 'yellow' // turning on
    noteStates.butA = true
    console.log('Button A is now set to ',noteStates.butA)
    buttonA.addEventListener('mouseleave', function run(){
      buttonA.style.backgroundColor = 'yellow'
    })
    return noteStates.butA
  } else {
    console.log('Button A is set to ',noteStates.butA)
    buttonA.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butA = false
    console.log('Button A is now set to ',noteStates.butA)
    buttonA.addEventListener('mouseleave', function run(){
      buttonA.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butA
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
  if (noteStates.butBb == false){
    console.log('Button A#/Bb is set to ',noteStates.butBb)
    buttonBb.style.backgroundColor = 'yellow' // turning on
    noteStates.butBb = true
    console.log('Button A#/Bb is now set to ',noteStates.butBb)
    buttonBb.addEventListener('mouseleave', function run(){
      buttonBb.style.backgroundColor = 'yellow'
    })
    return noteStates.butBb
  } else {
    console.log('Button A#/Bb is set to ',noteStates.butBb)
    buttonBb.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butBb = false
    console.log('Button A#/Bb is now set to ',noteStates.butBb)
    buttonBb.addEventListener('mouseleave', function run(){
      buttonBb.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butBb
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
  if (noteStates.butB == false){
    console.log('Button B is set to ',noteStates.butB)
    buttonB.style.backgroundColor = 'yellow' // turning on
    noteStates.butB = true
    console.log('Button B is now set to ',noteStates.butB)
    buttonB.addEventListener('mouseleave', function run(){
      buttonB.style.backgroundColor = 'yellow'
    })
    return noteStates.butB
  } else {
    console.log('Button B is set to ',noteStates.butB)
    buttonB.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butB = false
    console.log('Button B is now set to ',noteStates.butB)
    buttonB.addEventListener('mouseleave', function run(){
      buttonB.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butB
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
  if (noteStates.butC == false){
    console.log('Button C is set to ',noteStates.butC)
    buttonC.style.backgroundColor = 'yellow' // turning on
    noteStates.butC = true
    console.log('Button C is now set to ',noteStates.butC)
    buttonC.addEventListener('mouseleave', function run(){
      buttonC.style.backgroundColor = 'yellow'
    })
    return noteStates.butC
  } else {
    console.log('Button C is set to ',noteStates.butC)
    buttonC.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butC = false
    console.log('Button C is now set to ',noteStates.butC)
    buttonC.addEventListener('mouseleave', function run(){
      buttonC.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butC
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
  if (noteStates.butDb == false){
    console.log('Button C#/Db is set to ',noteStates.butDb)
    buttonDb.style.backgroundColor = 'yellow' // turning on
    noteStates.butDb = true
    console.log('Button C#/Db is now set to ',noteStates.butDb)
    buttonDb.addEventListener('mouseleave', function run(){
      buttonDb.style.backgroundColor = 'yellow'
    })
    return noteStates.butDb
  } else {
    console.log('Button C#/Db is set to ',noteStates.butDb)
    buttonDb.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butDb = false
    console.log('Button C#/Db is now set to ',noteStates.butDb)
    buttonDb.addEventListener('mouseleave', function run(){
      buttonDb.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butDb
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
  if (noteStates.butD == false){
    console.log('Button D is set to ',noteStates.butD)
    buttonD.style.backgroundColor = 'yellow' // turning on
    noteStates.butD = true
    console.log('Button D is now set to ',noteStates.butD)
    buttonD.addEventListener('mouseleave', function run(){
      buttonD.style.backgroundColor = 'yellow'
    })
    return noteStates.butD
  } else {
    console.log('Button D is set to ',noteStates.butD)
    buttonD.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butD = false
    console.log('Button D is now set to ',noteStates.butD)
    buttonD.addEventListener('mouseleave', function run(){
      buttonD.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butD
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
  if (noteStates.butEb == false){
    console.log('Button D#/Eb is set to ',noteStates.butAb)
    buttonEb.style.backgroundColor = 'yellow' // turning on
    noteStates.butEb = true
    console.log('Button D#/Eb is now set to ',noteStates.butEb)
    buttonEb.addEventListener('mouseleave', function run(){
      buttonEb.style.backgroundColor = 'yellow'
    })
    return noteStates.butEb
  } else {
    console.log('Button D#/Eb is set to ',noteStates.butEb)
    buttonEb.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butEb = false
    console.log('Button D#/Eb is now set to ',noteStates.butEb)
    buttonEb.addEventListener('mouseleave', function run(){
      buttonEb.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butEb
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
  if (noteStates.butE == false){
    console.log('Button E is set to ',noteStates.butE)
    buttonE.style.backgroundColor = 'yellow' // turning on
    noteStates.butE = true
    console.log('Button E is now set to ',noteStates.butE)
    buttonE.addEventListener('mouseleave', function run(){
      buttonE.style.backgroundColor = 'yellow'
    })
    return noteStates.butE
  } else {
    console.log('Button E is set to ',noteStates.butE)
    buttonE.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butE = false
    console.log('Button E is now set to ',noteStates.butE)
    buttonE.addEventListener('mouseleave', function run(){
      buttonE.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butE
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
  if (noteStates.butF == false){
    console.log('Button F is set to ',noteStates.butF)
    buttonF.style.backgroundColor = 'yellow' // turning on
    noteStates.butF = true
    console.log('Button F is now set to ',noteStates.butF)
    buttonF.addEventListener('mouseleave', function run(){
      buttonF.style.backgroundColor = 'yellow'
    })
    return noteStates.butF
  } else {
    console.log('Button F is set to ',noteStates.butF)
    buttonF.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butF = false
    console.log('Button F is now set to ',noteStates.butF)
    buttonF.addEventListener('mouseleave', function run(){
      buttonF.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butF
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
  if (noteStates.butGb == false){
    console.log('Button F#/Gb is set to ',noteStates.butGb)
    buttonGb.style.backgroundColor = 'yellow' // turning on
    noteStates.butGb = true
    console.log('Button F#/Gb is now set to ',noteStates.butGb)
    buttonGb.addEventListener('mouseleave', function run(){
      buttonGb.style.backgroundColor = 'yellow'
    })
    return noteStates.butGb
  } else {
    console.log('Button F#/Gb is set to ',noteStates.butGb)
    buttonGb.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butGb = false
    console.log('Button F#/Gb is now set to ',noteStates.butGb)
    buttonGb.addEventListener('mouseleave', function run(){
      buttonGb.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butGb
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
  if (noteStates.butG == false){
    console.log('Button G is set to ',noteStates.butG)
    buttonG.style.backgroundColor = 'yellow' // turning on
    noteStates.butG = true
    console.log('Button G is now set to ',noteStates.butG)
    buttonG.addEventListener('mouseleave', function run(){
      buttonG.style.backgroundColor = 'yellow'
    })
    return noteStates.butG
  } else {
    console.log('Button G is set to ',noteStates.butG)
    buttonG.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butG = false
    console.log('Button G is now set to ',noteStates.butG)
    buttonG.addEventListener('mouseleave', function run(){
      buttonG.style.backgroundColor = 'rgb(88, 246, 88)'
    })
    return noteStates.butG
  }
}
